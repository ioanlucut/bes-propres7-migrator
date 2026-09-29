@echo off
rem Moves the .pro files of every deployment folder in SOURCE_DIR (the synced Google Drive folder) into
rem OUT_DIR (the ProPresenter library), oldest deployment first, and appends a run report to LOG_FILE.
rem Runs that find nothing to move are logged to LOG_FILE's sibling <name>_NoFiles<ext> instead.
rem
rem Usage: sync-via-gdrive.bat SOURCE_DIR OUT_DIR LOG_FILE

rem Delayed expansion stays off: it would strip any "!" from song file names.
setlocal disabledelayedexpansion

if "%~3"=="" (
    echo Usage: %~nx0 SOURCE_DIR OUT_DIR LOG_FILE
    exit /b 1
)

set "sourceDirectory=%~f1"
set "outDirectory=%~f2"
set "logFile=%~f3"
set "noFilesLog=%~dpn3_NoFiles%~x3"

if not exist "%~dp3" mkdir "%~dp3"

>>"%logFile%" echo.
>>"%logFile%" echo [%date% %time%] Script started

if not exist "%sourceDirectory%\" (
    >>"%logFile%" echo [%date% %time%] Source folder not found: "%sourceDirectory%"
    exit /b 1
)

rem Moving into a folder that does not exist renames each file to the folder's path instead, so stop.
if not exist "%outDirectory%\" (
    >>"%logFile%" echo [%date% %time%] Library folder not found: "%outDirectory%"
    exit /b 1
)

set "proFilesFound=false"

rem Deployment folders are named after their date and time, so sorting them by name processes the oldest
rem deployment first and lets a newer version of a song overwrite an older one.
for /f "delims=" %%D in ('dir /b /ad /on "%sourceDirectory%" 2^>nul') do (
    >>"%logFile%" echo [%date% %time%] Processing folder: "%sourceDirectory%\%%D"

    for %%F in ("%sourceDirectory%\%%D\*.pro") do (
        move /y "%%F" "%outDirectory%" >nul && (
            >>"%logFile%" echo [%date% %time%] Moved "%%~nxF" from "%sourceDirectory%\%%D" to "%outDirectory%"
            set "proFilesFound=true"
        ) || (
            >>"%logFile%" echo [%date% %time%] Failed to move "%%F"
        )
    )
)

if "%proFilesFound%"=="true" (
    >>"%logFile%" echo [%date% %time%] All .pro files have been moved.
) else (
    >>"%noFilesLog%" echo [%date% %time%] No .pro files found in any folder.
)

>>"%logFile%" echo [%date% %time%] Script finished
exit /b 0
