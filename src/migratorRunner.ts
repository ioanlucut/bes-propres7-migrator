import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import { Presentation } from '../proto/presentation';
import { parseSong } from './songsParser';
import { convertSongToProPresenter7 } from './proPresenter7SongConverter';

/**
 * Removes all the files from the out directory
 */
export const migrateSongsToPP7Format = ({
  sourceDir,
  outDir,
  clearOutputDirFirst,
}: {
  sourceDir: string;
  outDir: string;
  clearOutputDirFirst?: boolean;
}) => {
  if (clearOutputDirFirst) {
    fsExtra.emptydirSync(outDir);
  }

  fs.readdirSync(sourceDir).forEach((fileName) => {
    const filePath = path.join(sourceDir, fileName);
    const fileAsText = fs.readFileSync(filePath).toString();
    console.log(`Processing "${fileName}"...`);

    const song = parseSong(fileAsText);
    const presentation = convertSongToProPresenter7(song);

    const outFile = `${outDir}/${fileName.replace('.txt', '')}.pro`;

    fs.writeFileSync(
      outFile,
      Buffer.from(Presentation.encode(presentation).finish()),
    );

    console.log(`Created "${outFile}".`);
  });
};
