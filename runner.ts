import dotenv from 'dotenv';
import {
  Config,
  convertSongsToPP7FormatLocally,
  convertSongsToPP7FormatRemotely,
} from './';
import { Presentation_CCLI } from './proto/presentation';
import { Font } from './proto/font';

dotenv.config();

const BES_CONFIG = {
  arrangementName: 'BES',
  ccliSettings: {
    publisher: 'Biserica Emanuel Sibiu',
    author: 'Echipa Versuri',
    copyrightYear: new Date().getFullYear(),
    album: `Biserica Emanuel Sibiu ${new Date().getFullYear()}`,
    songNumber: 0,
  } as Presentation_CCLI,
  fontConfig: {
    name: 'CMGSans-BoldCnCAPS',
    size: 58,
    bold: true,
    family: 'CMG Sans Cn CAPS',
    face: 'Bold',
  } as Font,
  graphicSize: {
    width: 1920,
    height: 1080,
  },
  presentationCategory: `Worship Songs ~ BES ${new Date().getFullYear()}`,
  refMacroId: '3ffd01b7-104f-499f-aac9-a13135006d0e',
  refMacroName: 'Songs',
} as Config;

(async () => {
  const deploymentArgs = {
    sourceDir: process.env.LOCAL_SOURCE_DIR as string,
    baseLocalDir: process.env.LOCAL_OUT_DIR as string,
    config: BES_CONFIG,
  };

  if (process.env.CONNECT_TO_G_DRIVE !== 'true') {
    await convertSongsToPP7FormatLocally(deploymentArgs);
  } else {
    await convertSongsToPP7FormatRemotely(deploymentArgs);
  }
})();
