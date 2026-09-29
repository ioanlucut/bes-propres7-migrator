# Runs sync-via-gdrive.bat against throwaway folders and checks what it moves, keeps and logs.
# Windows only; CI runs it on windows-latest.

$ErrorActionPreference = 'Stop'

$syncScript = Join-Path $PSScriptRoot 'sync-via-gdrive.bat'
$root = Join-Path ([IO.Path]::GetTempPath()) ("pp7-sync-test-" + [guid]::NewGuid())

# Parentheses and spaces, as in the real Google Drive and library paths
$source = Join-Path $root 'Sync (cloud)\PP7 Generated songs'
$out = Join-Path $root 'Libraries\Cantece auto importate (nu modifica manual)'
$logFile = Join-Path $root 'log\sync-log.txt'
$noFilesLog = Join-Path $root 'log\sync-log_NoFiles.txt'

$failures = 0

function Assert($condition, $message) {
    if ($condition) {
        Write-Host "ok   - $message"
    } else {
        Write-Host "FAIL - $message"
        $script:failures++
    }
}

function Invoke-Sync {
    & $syncScript $source $out $logFile | Out-Host
    return $LASTEXITCODE
}

function Write-Song($folder, $name, $content) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
    Set-Content -LiteralPath (Join-Path $folder $name) -Value $content -NoNewline
}

try {
    New-Item -ItemType Directory -Force -Path $out, (Split-Path $logFile) | Out-Null

    # Written newest first, so creation order disagrees with name order
    $newer = Join-Path $source '2024-04-10-08_02_11'
    $older = Join-Path $source '2024-04-09-17_18_05'
    Write-Song $newer 'Song A.pro' 'A v2'
    Write-Song $newer 'manifest.json' '{}'
    Write-Song $older 'Song A.pro' 'A v1'
    Write-Song $older 'Aleluia! Slavă Lui.pro' 'B'
    Write-Song $older 'manifest.json' '{}'

    Write-Host '# Two deployments waiting'
    $code = Invoke-Sync
    Assert ($code -eq 0) 'exits 0'
    Assert ((Get-Content -LiteralPath (Join-Path $out 'Song A.pro') -Raw) -eq 'A v2') 'the newest deployment wins'
    Assert (Test-Path -LiteralPath (Join-Path $out 'Aleluia! Slavă Lui.pro')) 'moves a song whose name has "!" and diacritics'
    Assert (-not (Get-ChildItem -Path $source -Recurse -Filter '*.pro')) 'leaves no .pro file behind'
    Assert ((Test-Path -LiteralPath (Join-Path $older 'manifest.json')) -and (Test-Path -LiteralPath (Join-Path $newer 'manifest.json'))) 'keeps manifest.json in Google Drive'
    $log = Get-Content -LiteralPath $logFile -Raw
    Assert ($log -match 'Moved "Song A.pro"') 'logs each move'
    Assert ($log -match 'All .pro files have been moved') 'logs the summary'
    Assert (-not (Test-Path -LiteralPath $noFilesLog)) 'writes no _NoFiles entry when something moved'

    Write-Host '# Nothing waiting'
    $code = Invoke-Sync
    Assert ($code -eq 0) 'exits 0'
    Assert ((Get-Content -LiteralPath $noFilesLog -Raw) -match 'No .pro files found') 'logs the empty run to the _NoFiles log'

    Write-Host '# Library folder missing'
    Write-Song $newer 'Song C.pro' 'C'
    Remove-Item -LiteralPath $out -Recurse -Force
    $code = Invoke-Sync
    Assert ($code -eq 1) 'exits 1'
    Assert (Test-Path -LiteralPath (Join-Path $newer 'Song C.pro')) 'leaves the song in Google Drive'
    Assert (-not (Test-Path -LiteralPath $out)) 'does not create a file in place of the library folder'

    Write-Host '# Missing arguments'
    & $syncScript $source | Out-Null
    Assert ($LASTEXITCODE -eq 1) 'exits 1'

    # SYSTEM stands in for the operator account, whose password an unattended import cannot enter
    Write-Host '# Scheduled task'
    $taskName = 'pp7-sync-test-' + [guid]::NewGuid()
    schtasks /Create /TN $taskName /XML (Join-Path $PSScriptRoot 'sync-via-gdrive.task.xml') /RU SYSTEM /F | Out-Host
    Assert ($LASTEXITCODE -eq 0) 'Task Scheduler imports the task'
    $task = Get-ScheduledTask -TaskName $taskName
    Assert ($task.Triggers[0].Repetition.Interval -eq 'PT5M') 'repeats every 5 minutes'
    Assert ($task.Actions[0].Execute -like '*sync-via-gdrive.bat') 'runs sync-via-gdrive.bat'
    schtasks /Delete /TN $taskName /F | Out-Null
} finally {
    Remove-Item -LiteralPath $root -Recurse -Force -ErrorAction SilentlyContinue
}

if ($failures -gt 0) {
    Write-Host "$failures check(s) failed"
    exit 1
}
Write-Host 'All checks passed'
