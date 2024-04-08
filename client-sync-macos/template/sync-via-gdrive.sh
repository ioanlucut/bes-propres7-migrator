#!/bin/bash

# Description of arguments
echo "This script syncs .pro files from SOURCE_DIRECTORY to OUT_DIRECTORY."
echo "Usage: sync-via-gdrive.sh [OPTIONS]"
echo ""
echo "Options:"
echo "  -h, --help                  Show this help message and exit"
echo "  -l, --log-file LOG_FILE     Set the log file path"
echo "  -s, --source-dir SOURCE_DIR Set the source directory path"
echo "  -o, --out-dir OUT_DIR       Set the output directory path"
echo ""

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    key="$1"
    case $key in
        -s|--source-dir)
        SOURCE_DIRECTORY="$2"
        shift
        shift
        ;;
        -o|--out-dir)
        OUT_DIRECTORY="$2"
        shift
        shift
        ;;
        -l|--log-file)
        LOG_FILE="$2"
        shift
        shift
        ;;
        *)
        echo "Unknown option $1"
        exit 1
        ;;
    esac
done

# Ensure all required arguments are provided
if [ -z "$SOURCE_DIRECTORY" ] || [ -z "$OUT_DIRECTORY" ] || [ -z "$LOG_FILE" ]; then
    echo "Error: SOURCE_DIRECTORY, OUT_DIRECTORY, and LOG_FILE must be provided."
    exit 1
fi

# Ensure temp log file exists
TEMP_LOG_FILE=$(mktemp)
trap 'rm -f "$TEMP_LOG_FILE"' EXIT

# Log start of the script
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
echo "Script started at $TIMESTAMP" >> "$TEMP_LOG_FILE"

# Find directories in source directory
while IFS= read -r -d '' DIR; do
    echo "Processing folder: $DIR [$TIMESTAMP]" >> "$TEMP_LOG_FILE"

    # Find .pro files in each directory
    while IFS= read -r -d '' FILE; do
        if [[ $(basename "$FILE") != "manifest.json" ]]; then
            mv "$FILE" "$OUT_DIRECTORY"
            echo "Moved $(basename "$FILE") from $DIR to $OUT_DIRECTORY [$TIMESTAMP]" >> "$TEMP_LOG_FILE"
            echo "Processed file: $FILE [$TIMESTAMP]" >> "$TEMP_LOG_FILE"
            PRO_FILES_FOUND=true
        fi
    done < <(find "$DIR" -maxdepth 1 -type f -name "*.pro" -print0)
done < <(find "$SOURCE_DIRECTORY" -mindepth 1 -maxdepth 1 -type d -print0)

# Handle case when no .pro files found
if [ "$PRO_FILES_FOUND" = false ]; then
    echo "No .pro files found in any folder. [$TIMESTAMP]" >> "$LOG_FILE"
fi

# Log script completion
echo "Script finished at $TIMESTAMP" >> "$TEMP_LOG_FILE"

# Move temp log file to final log file
mv "$TEMP_LOG_FILE" "$LOG_FILE"
