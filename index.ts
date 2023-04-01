import { migrateFromTo } from './src';

const SOURCE_DIR = '../bes-lyrics/inverification';
const OUT_DIR = './pp7-songs';

migrateFromTo({
  sourceDir: SOURCE_DIR,
  outDir: OUT_DIR,
  clearOutputDir: true,
});
