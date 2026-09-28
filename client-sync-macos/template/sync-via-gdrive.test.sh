#!/bin/bash
#
# Runs sync-via-gdrive.sh against throwaway folders and exits non-zero on the first failed check.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SYNC_SCRIPT="$SCRIPT_DIR/sync-via-gdrive.sh"

WORK_DIR=$(mktemp -d "${TMPDIR:-/tmp}/sync-via-gdrive-test.XXXXXX")
trap 'rm -rf "$WORK_DIR"' EXIT

SOURCE_DIRECTORY="$WORK_DIR/source"
OUT_DIRECTORY="$WORK_DIR/out"
LOG_FILE="$WORK_DIR/sync-log.txt"
mkdir -p "$SOURCE_DIRECTORY" "$OUT_DIRECTORY"

FAILURES=0

check() {
    local description="$1"
    shift

    if "$@"; then
        echo "ok   - $description"
    else
        echo "FAIL - $description"
        FAILURES=$((FAILURES + 1))
    fi
}

count_pro_files() {
    find "$1" -type f -name "*.pro" | wc -l | tr -d ' '
}

count_log_lines() {
    grep -c "$1" "$LOG_FILE"
}

# Two deployments that both ship "Shared song.pro". The newer folder is created first, so the check below only
# passes if the script orders folders by name rather than by creation or directory order.
NEWER_DEPLOYMENT="$SOURCE_DIRECTORY/2024-04-09-17:19:05"
OLDER_DEPLOYMENT="$SOURCE_DIRECTORY/2024-04-09-17:18:05"
mkdir "$NEWER_DEPLOYMENT" "$OLDER_DEPLOYMENT"
echo "newer" > "$NEWER_DEPLOYMENT/Shared song.pro"
echo "older" > "$OLDER_DEPLOYMENT/Shared song.pro"
touch "$NEWER_DEPLOYMENT/Newer only.pro" "$OLDER_DEPLOYMENT/Older only.pro"
echo "{}" > "$NEWER_DEPLOYMENT/manifest.json"

"$SYNC_SCRIPT" -s "$SOURCE_DIRECTORY" -o "$OUT_DIRECTORY" -l "$LOG_FILE" > /dev/null

check "moves every .pro file into the output folder" test "$(count_pro_files "$OUT_DIRECTORY")" -eq 3
check "leaves no .pro file behind in the source folders" test "$(count_pro_files "$SOURCE_DIRECTORY")" -eq 0
check "keeps the newest deployment's version of a song" test "$(cat "$OUT_DIRECTORY/Shared song.pro")" = "newer"
check "leaves manifest.json in its deployment folder" test -f "$NEWER_DEPLOYMENT/manifest.json"
check "writes the run to the log file" test "$(count_log_lines "Script started")" -eq 1

"$SYNC_SCRIPT" -s "$SOURCE_DIRECTORY" -o "$OUT_DIRECTORY" -l "$LOG_FILE" > /dev/null

check "appends a second run instead of overwriting the log" test "$(count_log_lines "Script started")" -eq 2
check "logs when there is nothing to sync" test "$(count_log_lines "No .pro files found")" -eq 1

prints_usage_for_help() {
    "$SYNC_SCRIPT" --help | grep -q "Usage:"
}

check "prints the usage for --help and exits successfully" prints_usage_for_help
check "fails when a required argument is missing" test "$("$SYNC_SCRIPT" -s "$SOURCE_DIRECTORY" > /dev/null; echo $?)" -eq 1

if [ "$FAILURES" -ne 0 ]; then
    echo "$FAILURES check(s) failed."
    exit 1
fi

echo "All checks passed."
