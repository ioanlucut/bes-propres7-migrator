# Google Drive setup

Remote mode uploads each deploy to Google Drive as a Google account user, through an OAuth client and a long-lived refresh token. This is a one-time setup.

## 1. Create the deploy folder

Create a folder in Google Drive to receive the deploys, for example `PP7 Generated songs`. Its ID is the last segment of its URL, `https://drive.google.com/drive/folders/<GDRIVE_ROOT_FOLDER_ID>`; put it in [`.env.remote`](../.env.remote).

## 2. Create the OAuth client

1. In the [Google Cloud console](https://console.cloud.google.com/), create a project and enable the **Google Drive API**.
2. Configure the OAuth consent screen with user type **External** and add the deploying Google account as a test user.
3. Set the consent screen's publishing status to **In production**. Google expires refresh tokens after seven days while an external app is in **Testing**, which would silently break deploys a week later. An unverified app is fine for a single account; the consent screen only shows a warning.
4. Create an **OAuth client ID** of type **Web application** with `https://developers.google.com/oauthplayground` as an authorised redirect URI. Note the client ID and secret.

## 3. Get a refresh token

1. Open the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/), open the settings (gear icon), tick **Use your own OAuth credentials** and enter the client ID and secret.
2. Authorise the scope `https://www.googleapis.com/auth/drive`. The narrower `drive.file` scope is not enough, because the migrator creates folders inside a folder that was created by hand.
3. Sign in with the deploying account, then exchange the authorisation code for tokens and copy the refresh token.

## 4. Provide the credentials

| Variable                          | Value                             |
| --------------------------------- | --------------------------------- |
| `GDRIVE_BES_CLIENT_ID`            | OAuth client ID                   |
| `GDRIVE_BES_CLIENT_SECRET`        | OAuth client secret               |
| `GDRIVE_BES_CLIENT_REFRESH_TOKEN` | Refresh token from the Playground |

Keep them out of the repository. Locally, export them in the shell before `npm run convert:remote`; in CI, store them as repository secrets, as the [`bes-lyrics` deploy workflow](https://github.com/ioanlucut/bes-lyrics/blob/main/.github/workflows/deploy_to_gdrive.yml) does. The runner checks that all of them are set before it reads any song.

If deploys start failing with `invalid_grant`, the refresh token was revoked or expired: repeat step 3 and update the secret.
