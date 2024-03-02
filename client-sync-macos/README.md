# Warning. Do not forget about the following:

In MacOS, you need to add the `cron` to have full access to the disk.

# Running a Script Every Minute with Monthly Log Rotation

This guide will show you how to run a script every minute and ensure that a new log file is created every month. This
approach simplifies managing log files while ensuring frequent execution of your script.

## Modified Wrapper Script

First, we'll create a wrapper script that will run your original script with a dynamically named log file, which
incorporates the current year and month. This setup ensures a new log file is started at the beginning of each month.

```bash
#!/bin/bash

# Directory where log files will be stored
LOG_DIR="/some-path/pp7/sync/log"

# Ensure the log directory exists
mkdir -p "$LOG_DIR"

# Generate a log file name based on the current year and month
LOG_FILE_NAME=$(date +"%Y-%m")-sync-log.txt
LOG_FILE_PATH="$LOG_DIR/$LOG_FILE_NAME"

# Execute your original script with the dynamically determined log file
./sync-via-gdrive.sh -s /path/to/source -o /path/to/out -l "$LOG_FILE_PATH"
```

Make sure to replace `/path/to/source` and `/path/to/out` with your actual source directory and output directory,
respectively. After creating this script, make it executable:

```bash
chmod +x run_sync_every_minute.sh
```

## Scheduling with Cron

Next, we'll use a cron job to run the script every minute. Open your crontab for editing:

```bash
crontab -e
```

Add the following line to execute the wrapper script every minute:

```bash
* * * * * /path/to/run_sync_every_minute.sh > /some-path/cron_run.log 2 > &1
```

Replace `/path/to/run_sync_every_minute.sh` with the actual path to your wrapper script.

## Summary

This setup allows you to run a specific script every minute with a new log file generated at the start of each month.
The log files are named according to the current year and month, simplifying log management and ensuring that your
script runs frequently.

Remember to adjust the paths in the wrapper script and cron job to match your system's configuration. Ensure your script
can complete within a minute to avoid overlapping executions.
