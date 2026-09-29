# Configuration

Two things configure a run: the `Config` object in [`runner.ts`](../runner.ts), which describes how presentations look, and environment variables, which say where songs come from and where they go.

## `Config`

| Field                        | Purpose                                                                               | BES value                        |
| ---------------------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| `arrangementName`            | Name of the generated arrangement                                                     | `BES`                            |
| `ccliSettings`               | CCLI publisher, author, album, year and song number; the song title is added per song | Church name and the current year |
| `fontConfig`                 | Slide font                                                                            | `CMG Sans Cn CAPS`, bold, 58 pt  |
| `graphicSize`                | Slide size in pixels                                                                  | 1920 × 1080                      |
| `presentationCategory`       | ProPresenter category                                                                 | `Worship Songs ~ BES <year>`     |
| `refMacroId`, `refMacroName` | UUID and name of the ProPresenter macro that the first slide runs                     | The `Songs` macro                |

The macro is referenced, not embedded: what it does is configured once in ProPresenter, so changing it never requires regenerating the library. Find a macro's UUID by decoding a presentation that uses it; see [Inspecting a `.pro` file](propresenter-format.md#inspecting-a-pro-file).

## Environment variables

`npm run convert:local` reads [`.env.local`](../.env.local) and `npm run convert:remote` reads [`.env.remote`](../.env.remote). Variables already set in the shell take precedence, which is how CI injects the credentials.

| Variable                                                                              | Mode   | Purpose                                                            |
| ------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------ |
| `LOCAL_SOURCE_DIR`                                                                    | both   | Folder with the `.txt` songs, read recursively                     |
| `LOCAL_OUT_DIR`                                                                       | both   | Where each run's timestamped folder is written                     |
| `CONNECT_TO_G_DRIVE`                                                                  | both   | `true` uploads to Google Drive; anything else stays local          |
| `TZ`                                                                                  | both   | Time zone of the timestamped folder names                          |
| `GDRIVE_ROOT_FOLDER_ID`                                                               | remote | Google Drive folder that receives one sub-folder per deploy        |
| `GDRIVE_BES_CLIENT_ID`, `GDRIVE_BES_CLIENT_SECRET`, `GDRIVE_BES_CLIENT_REFRESH_TOKEN` | remote | OAuth credentials; see [Google Drive setup](google-drive-setup.md) |
| `FORCE_RELEASE_OF_ALL_SONGS`                                                          | remote | `true` re-uploads every song instead of the diff                   |

In production the [`bes-lyrics` deploy workflow](https://github.com/ioanlucut/bes-lyrics/blob/main/.github/workflows/deploy_to_gdrive.yml) runs `npm run convert:remote` on every push that touches `verified/`, and its manual trigger exposes `FORCE_RELEASE_OF_ALL_SONGS` as a "deploy all" checkbox.
