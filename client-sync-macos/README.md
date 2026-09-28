# Presentation Mac sync

The last hop of the pipeline. The converter uploads each deployment to Google Drive as a timestamped folder of `.pro` files; Google Drive for desktop mirrors that folder onto the presentation Mac, and a cron job moves the songs into the ProPresenter library every minute.

```
My Drive/PP7 Generated songs/            ProPresenter/Libraries/<library>/
├── 2024-04-09-17:18:05/                 ├── Song A.pro
│   ├── Song A.pro   ──────┐             ├── Song B.pro   ← newest version wins
│   ├── Song B.pro         ├── mv ──▶    └── ...
│   └── manifest.json      │
└── 2024-04-10-08:02:11/   │   oldest folder first
    └── Song B.pro   ──────┘
```

| File                                                                     | Role                                                                                                                                |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`template/sync-via-gdrive.sh`](template/sync-via-gdrive.sh)             | Moves every `.pro` file from each deployment folder into the library, oldest deployment first, and appends a run report to the log. |
| [`template/run_sync_every_minute.sh`](template/run_sync_every_minute.sh) | Cron entry point: picks this month's log file and calls the sync script.                                                            |
| [`template/sync-via-gdrive.test.sh`](template/sync-via-gdrive.test.sh)   | Runs the sync script against throwaway folders; `npm run test:sync-script`.                                                         |
| [`bes/`](bes/)                                                           | The wrapper and crontab line used on the BES presentation Mac.                                                                      |

## Install

1. Copy `sync-via-gdrive.sh` and `run_sync_every_minute.sh` into one folder, e.g. `~/Documents/pp7/sync/`, and make them executable with `chmod +x *.sh`.

2. In `run_sync_every_minute.sh`, set `-s` to the synced Google Drive folder and `-o` to the ProPresenter library folder.

3. Grant `cron` Full Disk Access, otherwise it fails with `Operation not permitted`: open System Settings → Privacy & Security → Full Disk Access, press `+`, press `⌘⇧G`, and add `/usr/sbin/cron` ([background](https://apple.stackexchange.com/questions/378553/crontab-operation-not-permitted)).

4. Run `crontab -e` and add:

   ```bash
   * * * * * ~/Documents/pp7/sync/run_sync_every_minute.sh > ~/Documents/pp7/sync/cron_run.log 2>&1
   ```

Each run appends to `~/Documents/pp7/sync/log/<YYYY-MM>-sync-log.txt`, so a new log file starts every month. `cron_run.log` only holds the output of the latest run.

## Behavior worth knowing

- Deployment folders are processed in name order, which is chronological, so when several deployments are waiting (the Mac was off for a week), the newest version of a song is the one that lands in the library.

- `manifest.json` and `songsToBeDeleted.json` stay in Google Drive; only `.pro` files move.

- Deletions are manual. When a song is removed or renamed upstream, the deployment's `songsToBeDeleted.json` lists the old `.txt` file names; delete the matching `.pro` files from the library by hand. Automating this is deliberately left out, because a wrong match would remove a song from a live library.
