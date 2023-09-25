import fs from 'fs';
import path from 'path';
import { isEqual } from 'lodash';
import recursive from 'recursive-readdir';
import { Presentation } from '../proto/presentation';
import {
  Config,
  convertSongToProPresenter7,
} from './proPresenter7SongConverter';
import {
  DS_STORE_FILE,
  MANIFEST_FILE_NAME,
  PRO_EXTENSION,
  SONGS_TO_BE_DELETED_FILE_NAME,
  TXT_EXTENSION,
} from './constants';
import {
  getClosestVersionedDir,
  getVersionedDir,
  parseDateFromVersionedDir,
} from './core';
import {
  ConvertedFileStats,
  DeployableSong,
  SongManifest,
  SongsInventoryManifest,
} from './types';
import { parseSong } from './songsParser';
import { generateManifest } from './manifestGenerator';

export const getConvertedAndWrittenToLocalOutDirSongs = (
  songsToGenerate: DeployableSong[],
  dir: string,
  config: Config,
) =>
  songsToGenerate.map(({ fileName, song }) => {
    const songInProPresenter7Format = convertSongToProPresenter7(song, config);

    const songFileName = fileName.replace(TXT_EXTENSION, PRO_EXTENSION);
    const songFilePath = path.join(dir, songFileName);

    fs.writeFileSync(
      songFilePath,
      Buffer.from(Presentation.encode(songInProPresenter7Format).finish()),
    );

    console.log(
      `Successfully converted "${songFilePath}" in the "${dir}" directory.`,
    );

    return {
      songFileName,
      songFilePath,
    } as ConvertedFileStats;
  });

export const getPreviousDeploymentDirectory = (
  deploymentDate: Date,
  allPreviousDeploymentDirs: {
    deploymentDirDate: Date;
    deploymentDir: string;
  }[],
) => {
  const previousDeploymentDirDate = getClosestVersionedDir(
    deploymentDate,
    allPreviousDeploymentDirs.map(({ deploymentDirDate }) => deploymentDirDate),
  );

  return getVersionedDir(previousDeploymentDirDate);
};

export const transformManifestToHashMapForFasterRetrievals = (
  songManifests: SongManifest[],
) =>
  songManifests.reduce(
    (accumulator, entry) => ({
      ...accumulator,
      [entry.id]: entry,
    }),
    {} as {
      [id: string]: SongManifest;
    },
  );

export const getSongDiffFromManifest = (
  newManifest: SongsInventoryManifest,
  previousManifest: SongsInventoryManifest,
) => {
  const previousManifestHashMap = transformManifestToHashMapForFasterRetrievals(
    previousManifest.inventory,
  );
  const currentManifestHashMap = transformManifestToHashMapForFasterRetrievals(
    newManifest.inventory,
  );

  const newOrUpdatedSongs = newManifest.inventory.filter(function ({
    id,
    fileName,
    contentHash,
  }) {
    const maybePreviousSong = previousManifestHashMap[id];
    const isNewSong = !maybePreviousSong;
    const isExistingSongChanged =
      !isNewSong && !isEqual(maybePreviousSong?.contentHash, contentHash);
    const isFileNameChanged =
      !isNewSong && !isEqual(previousManifestHashMap[id]?.fileName, fileName);

    return isNewSong || isExistingSongChanged || isFileNameChanged;
  });

  const toBeRemovedFileNames = previousManifest.inventory
    .filter(
      ({ id, fileName, contentHash }) =>
        // File-name has changed
        !isEqual(currentManifestHashMap[id]?.fileName, fileName),
    )
    .map(({ id }) => previousManifestHashMap[id]?.fileName);

  return {
    newOrUpdatedSongs,
    toBeRemovedFileNames,
  };
};

export const getDeployableSongs = async (sourceDir: string) =>
  (await recursive(sourceDir, [DS_STORE_FILE])).map((filePath) => {
    const fileAsText = fs.readFileSync(filePath).toString();
    const fileName = path.basename(filePath);
    const song = parseSong(fileAsText);

    return { song, fileName, fileAsText } as DeployableSong;
  });

export const getBasicDeploymentInfo = async (
  sourceDir: string,
  baseLocalDir: string,
) => {
  const versionedDir = getVersionedDir();
  const deploymentDate = parseDateFromVersionedDir(versionedDir);
  const deploymentVersionedDir = `${baseLocalDir}/${versionedDir}`;

  // ---
  // Current deployment
  const deployableSongs = await getDeployableSongs(sourceDir);

  const currentManifest = {
    inventory: await generateManifest(deployableSongs),
    updatedOn: versionedDir,
  } as SongsInventoryManifest;

  const localManifestFilePath = path.join(
    deploymentVersionedDir,
    MANIFEST_FILE_NAME,
  );
  const localObsoleteSongsFilePath = path.join(
    deploymentVersionedDir,
    SONGS_TO_BE_DELETED_FILE_NAME,
  );

  return {
    versionedDir,
    deploymentDate,
    deploymentVersionedDir,
    deployableSongs,
    currentManifest,
    localManifestFilePath,
    localObsoleteSongsFilePath,
  };
};
