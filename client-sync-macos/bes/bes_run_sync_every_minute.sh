#!/bin/bash

cd "$(dirname "$0")"

# Directory where log files will be stored
LOG_DIR="~/Documents/pp7/sync/log"

# Ensure the log directory exists
mkdir -p "$LOG_DIR"

# Generate a log file name based on the current year and month
LOG_FILE_NAME=$(date +"%Y-%m")-sync-log.txt
LOG_FILE_PATH="$LOG_DIR/$LOG_FILE_NAME"

# Execute your original script with the dynamically determined log file
./sync-via-gdrive.sh -s /Users/bessibiu/My\ Drive/PP7\ Generated\ songs -o /Users/bessibiu/Documents/ProPresenter/Libraries/Cantece\ auto\ importate\ \(nu\ modifica\ manual\)/ -l "$LOG_FILE_PATH"
