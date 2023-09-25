import fs from 'fs';
import fsExtra from 'fs-extra';
import assert from 'node:assert';
import { isEmpty, isEqual } from 'lodash';
import chalk from 'chalk';
import { Config } from './proPresenter7SongConverter';
import { parseDateFromVersionedDir } from './core';
import {
  getBasicDeploymentInfo,
  getConvertedAndWrittenToLocalOutDirSongs,
  getPreviousDeploymentDirectory,
  getSongDiffFromManifest,
} from './converterService';
import {
  getExistingFoldersFromRoot,
  getPreviousManifestFileBy,
  uploadAssetsToGDrive,
} from './gDriveService';

const getPreviousRemoteInventoryManifest = async (
  deploymentDate: Date,
  allPreviousDeploymentDirs: {
    deploymentDirDate: Date;
    deploymentDir: string;
    id: string;
  }[],
) => {
  const previousDeploymentDirectory = getPreviousDeploymentDirectory(
    deploymentDate,
    allPreviousDeploymentDirs,
  );

  const previousDeploymentDirFileId = allPreviousDeploymentDirs.find(
    ({ deploymentDir }) => isEqual(deploymentDir, previousDeploymentDirectory),
  )?.id as string;

  return getPreviousManifestFileBy(previousDeploymentDirFileId);
};

export const convertSongsToPP7FormatRemotely = async ({
  sourceDir,
  baseLocalDir,
  config,
}: {
  sourceDir: string;
  baseLocalDir: string;
  config: Config;
}) => {
  assert.ok(
    process.env.GDRIVE_ROOT_FOLDER_ID,
    'No `GDRIVE_ROOT_FOLDER_ID` env variable set.',
  );
  assert.ok(
    process.env.GDRIVE_BES_CLIENT_ID,
    'No `GDRIVE_BES_CLIENT_ID` env variable set.',
  );
  assert.ok(
    process.env.GDRIVE_BES_CLIENT_SECRET,
    'No `GDRIVE_BES_CLIENT_SECRET` env variable set.',
  );
  assert.ok(
    process.env.GDRIVE_BES_CLIENT_REFRESH_TOKEN,
    'No `GDRIVE_BES_CLIENT_REFRESH_TOKEN` env variable set.',
  );
  assert.ok(
    process.env.CONNECT_TO_G_DRIVE,
    'No `CONNECT_TO_G_DRIVE` env variable set.',
  );

  const {
    versionedDir,
    deploymentDate,
    deploymentVersionedDir,
    deployableSongs,
    currentManifest,
    localManifestFilePath,
    localObsoleteSongsFilePath,
  } = await getBasicDeploymentInfo(sourceDir, baseLocalDir);

  assert.ok(
    !fsExtra.pathExistsSync(deploymentVersionedDir),
    `The out directory "${deploymentVersionedDir}" does exists already.`,
  );

  // ---
  // Create directory
  fsExtra.ensureDirSync(deploymentVersionedDir);

  // ---
  // Write manifest
  fs.writeFileSync(localManifestFilePath, JSON.stringify(currentManifest));

  // ---
  // Existing deployments
  const allPreviousDeploymentDirs = (await getExistingFoldersFromRoot()).map(
    ({ id, folderName: deploymentDir }) => ({
      id,
      deploymentDir,
      deploymentDirDate: parseDateFromVersionedDir(deploymentDir),
    }),
  );
  const isAFirstDeployment = isEmpty(allPreviousDeploymentDirs);

  if (isAFirstDeployment) {
    console.log(
      `[Remote]: No previous deployment found in. Skip incremental deployments by doing a full deployment. Please proceed with applying the theme.`,
    );

    await uploadAssetsToGDrive(
      getConvertedAndWrittenToLocalOutDirSongs(
        deployableSongs,
        deploymentVersionedDir,
        config,
      ),
      versionedDir,
      localManifestFilePath,
    );

    return;
  }

  if (isEqual(process.env.FORCE_RELEASE_OF_ALL_SONGS, 'true')) {
    console.log(
      `[Remote]: Force release of all songs from GH. Skip incremental deployments by doing a full deployment. Please proceed with applying the theme.`,
    );

    await uploadAssetsToGDrive(
      getConvertedAndWrittenToLocalOutDirSongs(
        deployableSongs,
        deploymentVersionedDir,
        config,
      ),
      versionedDir,
      localManifestFilePath,
    );

    return;
  }

  const previousManifest = await getPreviousRemoteInventoryManifest(
    deploymentDate,
    allPreviousDeploymentDirs,
  );

  const { newOrUpdatedSongs, toBeRemovedFileNames } = getSongDiffFromManifest(
    currentManifest,
    previousManifest,
  );

  if (isEmpty(newOrUpdatedSongs) && isEmpty(toBeRemovedFileNames)) {
    console.log(
      `[Remote]: Skip incremental local deployments as no changes have been found between the last two versions.`,
    );

    return;
  }

  // ---
  // Write empty removal file
  fs.writeFileSync(
    localObsoleteSongsFilePath,
    JSON.stringify(toBeRemovedFileNames),
  );

  // ---
  // Write some stats
  // ---
  console.log(chalk.green(JSON.stringify(versionedDir)));
  console.log(chalk.green(JSON.stringify(newOrUpdatedSongs)));
  console.log(chalk.red(JSON.stringify(toBeRemovedFileNames)));

  const partialDeployableSongs = deployableSongs.filter(({ song: { id } }) =>
    newOrUpdatedSongs
      .map(({ id: newOrUpdatedSongId }) => newOrUpdatedSongId)
      .includes(id),
  );

  const convertedAndWrittenToLocalOutDirSongs =
    getConvertedAndWrittenToLocalOutDirSongs(
      partialDeployableSongs,
      deploymentVersionedDir,
      config,
    );

  await uploadAssetsToGDrive(
    convertedAndWrittenToLocalOutDirSongs,
    versionedDir,
    localManifestFilePath,
    localObsoleteSongsFilePath,
  );
};
