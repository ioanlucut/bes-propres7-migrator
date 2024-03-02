#!/bin/bash
set +x

# Create temporary directories
SOURCE_DIRECTORY=$(mktemp -d -t source_directory)
OUT_DIRECTORY=$(mktemp -d -t out_directory)
LOG_FILE=$(mktemp -t log_file)

# Print out the names of the temporary directories
echo "Source directory: $SOURCE_DIRECTORY"
echo "Output directory: $OUT_DIRECTORY"
echo "Log file: $LOG_FILE"

# Create two directories with three files each, with suffixes as timestamps
for i in {1..2}; do
    timestamp=$(date +"%Y%m%d%H%M%S")
    dir="$SOURCE_DIRECTORY/dir_$timestamp"
    mkdir "$dir"
    for j in {1..3}; do
        touch "$dir/file$j-$timestamp.pro"
    done
    # Ensure that the timestamps for the two directories are different
    sleep 1
done

# Run the script with temporary directories
./sync-via-gdrive.sh -s "$SOURCE_DIRECTORY" -o "$OUT_DIRECTORY" -l "$LOG_FILE"

# Check if files are moved to the output directory
if [ $(find "$OUT_DIRECTORY" -type f -name "*.pro" | wc -l) -eq 6 ]; then
    echo "Files moved successfully."
else
    echo "Error: Files not moved."
fi

# Check if log file is created
if [ -f "$LOG_FILE" ]; then
    echo "Log file created successfully."
else
    echo "Error: Log file not created."
fi

# Clean up temporary directories
rm -rf "$SOURCE_DIRECTORY" "$OUT_DIRECTORY" "$LOG_FILE"
