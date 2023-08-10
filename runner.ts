import dotenv from 'dotenv';
import {
  Config,
  convertSongsToPP7FormatLocally,
  convertSongsToPP7FormatRemotely,
} from './';
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
} as Config;

(async () => {
  const deploymentArgs = {
    sourceDir: process.env.LOCAL_SOURCE_DIR as string,
    baseLocalDir: process.env.LOCAL_OUT_DIR as string,
    config: CONFIG,
  };

  if (process.env.CONNECT_TO_G_DRIVE !== 'true') {
    await convertSongsToPP7FormatLocally(deploymentArgs);
  } else {
    await convertSongsToPP7FormatRemotely(deploymentArgs);
  }
})();
