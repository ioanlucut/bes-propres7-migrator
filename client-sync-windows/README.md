# Presentation PC sync (Windows)

The Windows version of the last hop, which the BES presentation PC ran before it moved to a Mac. It does what [Presentation Mac sync](../client-sync-macos/README.md) does: Google Drive for desktop mirrors the deploy folders onto the PC, and a scheduled task moves the new `.pro` files into the ProPresenter library every 5 minutes.

| File                                                   | Role                                                                                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`sync-via-gdrive.bat`](sync-via-gdrive.bat)           | Moves every `.pro` file from each deployment folder into the library, oldest deployment first, and appends a run report to the log.  |
| [`sync-via-gdrive.task.xml`](sync-via-gdrive.task.xml) | Task Scheduler task that runs the script every 5 minutes, exported from the BES PC with its user and paths replaced by placeholders. |
| [`sync-via-gdrive.test.ps1`](sync-via-gdrive.test.ps1) | Runs the script against throwaway folders and imports the task; CI runs it on Windows.                                               |

## Install

1. Copy `sync-via-gdrive.bat` into a folder of its own, e.g. `C:\pp7\sync\`.

2. Open Task Scheduler, choose Action → Import Task…, and select `sync-via-gdrive.task.xml`.

3. On the **Actions** tab, edit the action: point **Program/script** at the copied `sync-via-gdrive.bat`, and set **Add arguments** to the three folders, each in quotes:

   ```text
   "<synced Google Drive folder>" "<ProPresenter library folder>" "<log file>"
   ```

   For example `"G:\My Drive\PP7 Generated songs" "C:\Users\<you>\Documents\ProPresenter\Libraries\Songs" "C:\pp7\sync\log\sync-log.txt"`.

4. On the **General** tab, choose **Change User or Group…**, pick the account that runs ProPresenter, and keep **Run whether user is logged on or not**. Save with **OK** and enter that account's password.

5. Right-click the task and choose **Run** once, then check the log.

Each run appends to the log file. Runs that find nothing to move go to a sibling file with a `_NoFiles` suffix, e.g. `sync-log_NoFiles.txt`, so the main log shows only the runs that moved songs. The script stops with an error when the library folder is missing, because moving a file to a folder that does not exist would rename it instead.

## Behavior worth knowing

The ordering, the files that stay in Google Drive and the manual deletions work as on the Mac; see [Behavior worth knowing](../client-sync-macos/README.md#behavior-worth-knowing).
