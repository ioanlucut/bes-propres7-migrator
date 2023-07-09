import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import recursive from 'recursive-readdir';
import { Presentation } from '../proto/presentation';
import { parseSong } from './songsParser';
import {
  Config,
  convertSongToProPresenter7,
} from './proPresenter7SongConverter';
import { EMPTY_STRING, PRO_EXTENSION, TXT_EXTENSION } from './constants';

/**
 * Removes all the files from the out directory
 */
export const migrateSongsToPP7Format = async ({
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

  await fsExtra.ensureDirSync(outDir);

  (await recursive(sourceDir, ['.DS_Store'])).forEach((filePath) => {
    const fileAsText = fs.readFileSync(filePath).toString();
    const fileName = path.basename(filePath);

    console.log(`Processing "${filePath}"...`);

    const song = parseSong(fileAsText);
    const presentation = convertSongToProPresenter7(song, config);

    const outFile = `${outDir}/${fileName.replace(
      TXT_EXTENSION,
      EMPTY_STRING,
    )}${PRO_EXTENSION}`;

    fs.writeFileSync(
      outFile,
      Buffer.from(Presentation.encode(presentation).finish()),
    );

    console.log(`Successfully generated "${outFile}".`);
  });
};
