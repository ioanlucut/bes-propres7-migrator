import dotenv from 'dotenv';
import { assertUniqueness } from './core';
import { Song, SongManifest } from './types';

dotenv.config();

export const generateManifest = async (
  deployableSongs: Array<{
    song: Song;
    fileName: string;
    fileAsText: string;
  }>,
) => {
  assertUniqueness(deployableSongs.map(({ song }) => song.id));

  return deployableSongs
    .map(
      ({ song: { id, contentHash }, fileName }) =>
        ({
          id,
          fileName,
          contentHash,
        } as SongManifest),
    )
    .sort((a, b) => a.fileName.localeCompare(b.fileName));
};
