import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import { Presentation } from '../proto/presentation';
import { parseSong } from './songsParser';
import { convertSongToProPresenter7 } from './proPresenter7SongConverter';

/**
 * Removes all the files from the out directory
 */
export const migrateFromTo = ({
  sourceDir,
  outDir,
  clearOutputDir,
}: {
  sourceDir: string;
  outDir: string;
  clearOutputDir?: boolean;
}) => {
  if (clearOutputDir) {
    fsExtra.emptydirSync(outDir);
  }

  fs.readdirSync(sourceDir).forEach((fileName) => {
    const filePath = path.join(sourceDir, fileName);
    const fileAsText = fs.readFileSync(filePath).toString();
    console.log(`Processing "${fileName}"...`);

    const song = parseSong(fileAsText);
    const presentation = convertSongToProPresenter7(song);

    const outFile = `${outDir}/${fileName.replace('.txt', '')} ~ BES 2023.pro`;

    fs.writeFileSync(
      outFile,
      Buffer.from(Presentation.encode(presentation).finish()),
    );

    console.log(`Created "${outFile}".`);
  });
};
