import { migrateFromTo } from './src';

const SOURCE_DIR = '../bes-lyrics/unverified';
const OUT_DIR = './pp7-songs';

try {
  migrateFromTo({
    sourceDir: SOURCE_DIR,
    outDir: OUT_DIR,
    clearOutputDir: true,
  });
} catch (error) {
  console.error(error);
}
