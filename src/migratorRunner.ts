import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import { Presentation } from '../proto/presentation';
import { parseSong } from './songsParser';
import {
  convertSongToProPresenter7,
  Config,
} from './proPresenter7SongConverter';

const TXT_SONG_EXTENSION = '.txt';
const PRO_EXTENSION = `.pro`;
const EMPTY_STRING = '';

/**
 * Removes all the files from the out directory
 */
export const migrateSongsToPP7Format = ({
  sourceDir,
  outDir,
  clearOutputDirFirst,
  config,
}: {
  sourceDir: string;
  outDir: string;
  clearOutputDirFirst?: boolean;
  config: Config;
}) => {
  if (clearOutputDirFirst) {
    fsExtra.emptydirSync(outDir);
  }

  fs.readdirSync(sourceDir).forEach((fileName) => {
    const filePath = path.join(sourceDir, fileName);
    const fileAsText = fs.readFileSync(filePath).toString();

    console.log(`Processing "${fileName}"...`);

    const song = parseSong(fileAsText);
    const presentation = convertSongToProPresenter7(song, config);

    const outFile = `${outDir}/${fileName.replace(
      TXT_SONG_EXTENSION,
      EMPTY_STRING,
    )}${PRO_EXTENSION}`;

    fs.writeFileSync(
      outFile,
      Buffer.from(Presentation.encode(presentation).finish()),
    );

    console.log(`Successfully created "${outFile}".`);
  });
};
