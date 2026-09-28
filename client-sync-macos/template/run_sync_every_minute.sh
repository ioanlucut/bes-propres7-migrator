#!/bin/bash

# Cron starts in $HOME; run from this folder so ./sync-via-gdrive.sh resolves
cd "$(dirname "$0")" || exit 1

# Directory where log files will be stored
LOG_DIR="$HOME/Documents/pp7/sync/log"

# Ensure the log directory exists
mkdir -p "$LOG_DIR"

# Generate a log file name based on the current year and month
LOG_FILE_NAME=$(date +"%Y-%m")-sync-log.txt
LOG_FILE_PATH="$LOG_DIR/$LOG_FILE_NAME"

# Execute your original script with the dynamically determined log file
./sync-via-gdrive.sh -s /path/to/source -o /path/to/out -l "$LOG_FILE_PATH"
