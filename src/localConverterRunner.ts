import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import assert from 'node:assert';
import { isEmpty, isEqual, negate } from 'lodash';
import { Config } from './proPresenter7SongConverter';
import { DS_STORE_FILE, MANIFEST_FILE_NAME } from './constants';
import {
  logFileWithLinkInConsole,
  logProcessingFile,
  parseDateFromVersionedDir,
} from './core';
import { SongsInventoryManifest } from './types';
import {
  getBasicDeploymentInfo,
  getConvertedAndWrittenToLocalOutDirSongs,
  getPreviousDeploymentDirectory,
  getSongDiffFromManifest,
} from './converterService';

const getPreviousLocalInventoryManifest = (
  deploymentDate: Date,
  allPreviousDeploymentDirs: {
    deploymentDirDate: Date;
    deploymentDir: string;
  }[],
  baseLocalDir: string,
) => {
  const previousDeploymentManifestFilePath = path.join(
    baseLocalDir,
    getPreviousDeploymentDirectory(deploymentDate, allPreviousDeploymentDirs),
    MANIFEST_FILE_NAME,
  );

  console.log(
    `Previous deployment manifest file path: ${previousDeploymentManifestFilePath}.`,
  );

  const previousInventoryManifest = JSON.parse(
    fs.readFileSync(previousDeploymentManifestFilePath).toString(),
  ) as SongsInventoryManifest;

  logProcessingFile(
    previousDeploymentManifestFilePath,
    'Previous manifest inspection',
  );
  logFileWithLinkInConsole(previousDeploymentManifestFilePath);

  return previousInventoryManifest;
};

export const convertSongsToPP7FormatLocally = async ({
  sourceDir,
  baseLocalDir,
  config,
}: {
  baseLocalDir: string;
  config: Config;
  sourceDir: string;
}) => {
  const {
    currentManifest,
    deployableSongs,
    deploymentDate,
    deploymentVersionedDir,
    localManifestFilePath,
    versionedDir,
  } = await getBasicDeploymentInfo(sourceDir, baseLocalDir);

  assert(
    !fsExtra.pathExistsSync(deploymentVersionedDir),
    `The out directory "${deploymentVersionedDir}" does exists already.`,
  );

  // ---
  // Create directory
  fsExtra.ensureDirSync(deploymentVersionedDir);

  fs.writeFileSync(localManifestFilePath, JSON.stringify(currentManifest));

  // ---
  // Existing deployments
  const allPreviousDeploymentDirs = fsExtra
    .readdirSync(baseLocalDir)
    .filter(
      (deploymentDir) =>
        negate(isEqual)(deploymentDir, DS_STORE_FILE) &&
        negate(isEqual)(deploymentDir, versionedDir),
    )
    .map((deploymentDir) => ({
      deploymentDir,
      deploymentDirDate: parseDateFromVersionedDir(deploymentDir),
    }));
  const isAFirstDeployment = isEmpty(allPreviousDeploymentDirs);

  if (isAFirstDeployment) {
    console.log(
      `No previous deployment found in "${baseLocalDir}". Skip incremental deployments by doing a full deployment. Please proceed with a full manual import in PP7.`,
    );

    getConvertedAndWrittenToLocalOutDirSongs(
      deployableSongs,
      deploymentVersionedDir,
      config,
    );

    return;
  }

  const previousManifest = getPreviousLocalInventoryManifest(
    deploymentDate,
    allPreviousDeploymentDirs,
    baseLocalDir,
  );

  const { newOrUpdatedSongs, toBeRemovedFileNames } = getSongDiffFromManifest(
    currentManifest,
    previousManifest,
  );

  if (isEmpty(newOrUpdatedSongs)) {
    console.log(
      `Skip incremental local deployments as no changes have been found between the last two versions.`,
    );
    return;
  }

  const partialDeployableSongs = deployableSongs.filter(({ song: { id } }) =>
    newOrUpdatedSongs
      .map(({ id: newOrUpdatedSongId }) => newOrUpdatedSongId)
      .includes(id),
  );

  getConvertedAndWrittenToLocalOutDirSongs(
    partialDeployableSongs,
    deploymentVersionedDir,
    config,
  );

  if (!isEmpty(toBeRemovedFileNames)) {
    console.log(
      `The following songs have been removed: ${toBeRemovedFileNames} manually.`,
    );
  }
};
