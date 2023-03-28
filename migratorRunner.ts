import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import { parseSong, convertSongToProPresenter7 } from './src';
import { Presentation } from './proto/presentation';

const DIR_SOURCE = 'bes-lyrics/unverified';
const OUT_DIR = './pp7-songs';

const readSongAndConfigure = (fileName: string) => {
  const filePath = path.join(__dirname, '..', DIR_SOURCE, fileName);
  const fileAsText = fs.readFileSync(filePath).toString();

  return parseSong(fileAsText);
};

try {
  fsExtra.emptydirSync(OUT_DIR);

  fs.readdirSync(path.join(__dirname, '..', DIR_SOURCE)).forEach((fileName) => {
    console.log(`Processing "${fileName}"...`);

    const song = readSongAndConfigure(fileName);
    const presentation = convertSongToProPresenter7(song);

    const outFile = `${OUT_DIR}/${fileName.replace('.txt', '')} ~ BES 2023.pro`;

    fs.writeFileSync(
      outFile,
      Buffer.from(Presentation.encode(presentation).finish()),
    );

    console.log(`Created "${outFile}".`);
  });
} catch (error) {
  console.error(error);
}
