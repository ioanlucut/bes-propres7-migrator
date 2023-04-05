import dotenv from 'dotenv';
import { migrateSongsToPP7Format } from './';

dotenv.config();

migrateSongsToPP7Format({
  sourceDir: process.env.SOURCE_DIR as string,
  outDir: process.env.OUT_DIR as string,
  clearOutputDirFirst: true,
});
