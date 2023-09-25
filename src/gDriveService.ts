import fs from 'fs';
import { auth, drive } from '@googleapis/drive';
import pMap from 'p-map';
import { drive_v3 } from '@googleapis/drive/v3';
import { logProcessingFile } from './core';
import { ConvertedFileStats, SongsInventoryManifest } from './types';
import assert from 'node:assert';
import { first, size } from 'lodash';
import { MANIFEST_FILE_NAME, SONGS_TO_BE_DELETED_FILE_NAME } from './constants';

const FOLDER_MIME_TYPE = 'application/vnd.google-apps.folder';
const DEFAULT_PP7_MIME_FILE = 'application/octet-stream';
const JSON_MIME_TYPE = 'application/json';
const GDRIVE_FIELD_ID = 'id';

let gDriveClient: drive_v3.Drive;

const getGoogleDriveClient: () => Promise<drive_v3.Drive> = async () => {
  if (gDriveClient) {
    return gDriveClient as drive_v3.Drive;
  }

  const oAuth2Client = new auth.OAuth2(
    process.env.GDRIVE_BES_CLIENT_ID,
    process.env.GDRIVE_BES_CLIENT_SECRET,
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GDRIVE_BES_CLIENT_REFRESH_TOKEN,
  });

  gDriveClient = drive({
    version: 'v3',
    auth: oAuth2Client,
  });

  return gDriveClient;
};

export const uploadAssetsToGDrive = async (
  convertedFilesStats: ConvertedFileStats[],
  versionedDir: string,
  localManifestFilePath: string,
  localObsoleteSongsFilePath?: string,
) => {
  // ---
  // New GDrive folder
  const newGDriveFolder = await (
    await getGoogleDriveClient()
  ).files.create({
    requestBody: {
      name: versionedDir,
      mimeType: FOLDER_MIME_TYPE,
      parents: [process.env.GDRIVE_ROOT_FOLDER_ID],
    },
    media: {
      mimeType: FOLDER_MIME_TYPE,
    },
    fields: GDRIVE_FIELD_ID,
  });

  // ---
  // Upload manifest
  await (
    await getGoogleDriveClient()
  ).files.create({
    requestBody: {
      name: MANIFEST_FILE_NAME,
      mimeType: JSON_MIME_TYPE,
      parents: [newGDriveFolder.data.id as string],
    },
    media: {
      mimeType: JSON_MIME_TYPE,
      body: fs.createReadStream(localManifestFilePath),
    },
  });

  if (localObsoleteSongsFilePath) {
    // ---
    // Upload obsolete songs list

    await (
      await getGoogleDriveClient()
    ).files.create({
      requestBody: {
        name: SONGS_TO_BE_DELETED_FILE_NAME,
        mimeType: JSON_MIME_TYPE,
        parents: [newGDriveFolder.data.id as string],
      },
      media: {
        mimeType: JSON_MIME_TYPE,
        body: fs.createReadStream(localObsoleteSongsFilePath),
      },
    });
  }

  (
    await pMap(
      convertedFilesStats,
      async ({ songFileName, songFilePath }) =>
        (
          await getGoogleDriveClient()
        ).files.create({
          requestBody: {
            name: songFileName,
            mimeType: DEFAULT_PP7_MIME_FILE,
            parents: [newGDriveFolder.data.id as string],
          },
          media: {
            mimeType: DEFAULT_PP7_MIME_FILE,
            body: fs.createReadStream(songFilePath),
          },
        }),
      { concurrency: 5, stopOnError: true },
    )
  ).forEach(({ data }) => {
    logProcessingFile(data.name as string, 'Uploaded successfully to GDrive.');
  });
};

export const getExistingFoldersFromRoot = async () => {
  const newGDriveFolder = await (
    await getGoogleDriveClient()
  ).files.list({
    q: `'${process.env.GDRIVE_ROOT_FOLDER_ID}' in parents and mimeType = '${FOLDER_MIME_TYPE}'`,
    fields: 'nextPageToken, files(id, name)',
    spaces: 'drive',
  });

  return newGDriveFolder.data.files?.map(({ id, name: folderName }) => ({
    id,
    folderName,
  })) as {
    id: string;
    folderName: string;
  }[];
};

export const getPreviousManifestFileBy = async (
  previousDeploymentDirFileId: string,
) => {
  const previousGDriveManifestFileInDeploymentFolder = await (
    await getGoogleDriveClient()
  ).files.list({
    q: `'${previousDeploymentDirFileId}' in parents and name = '${MANIFEST_FILE_NAME}'`,
    fields: 'nextPageToken, files(id, name)',
    spaces: 'drive',
  });

  assert.ok(
    size(previousGDriveManifestFileInDeploymentFolder.data.files) === 1,
    'There should be only one manifest file in the deployment folder.',
  );

  const manifestFileId = first(
    previousGDriveManifestFileInDeploymentFolder.data.files,
  )?.id as string;

  const { data } = await (
    await getGoogleDriveClient()
  ).files.get({
    fileId: manifestFileId,
    alt: 'media',
  });

  return data as SongsInventoryManifest;
};
