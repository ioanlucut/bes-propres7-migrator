import dotenv from 'dotenv';
import { Config, migrateSongsToPP7Format } from './';
import { Presentation_CCLI } from './proto/presentation';
import { Graphics_Text_Attributes_Font } from './proto/graphicsData';

dotenv.config();

const CONFIG = {
  arrangementName: 'BES',
  ccliSettings: {
    publisher: 'Biserica Emanuel Sibiu',
    author: 'Ioan Lucuț',
    copyrightYear: new Date().getFullYear(),
    album: `Biserica Emanuel Sibiu ${new Date().getFullYear()}`,
    songNumber: 0,
  } as Presentation_CCLI,
  fontConfig: {
    name: 'CMGSans-Regular',
    size: 60,
    family: 'CMGSans',
    bold: true,
  } as Graphics_Text_Attributes_Font,
  graphicSize: {
    width: 1920,
    height: 1080,
  },
  presentationCategory: `Worship Songs ~ BES ${new Date().getFullYear()}`,
  refMacroId: '3ffd01b7-104f-499f-aac9-a13135006d0e',
  refMacroName: 'Songs',
};

migrateSongsToPP7Format({
  sourceDir: process.env.SOURCE_DIR as string,
  outDir: process.env.OUT_DIR as string,
  clearOutputDirFirst: true,
  config: CONFIG,
});
