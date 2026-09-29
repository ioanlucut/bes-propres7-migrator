import fs from 'fs';
import os from 'os';
import path from 'path';
import { Presentation_CCLI } from '../proto/presentation';
import { Font } from '../proto/font';
import { MANIFEST_FILE_NAME } from './constants';
import { convertSongsToPP7FormatLocally } from './localConverterRunner';
import { Config } from './proPresenter7SongConverter';

const ANY_CONFIG: Config = {
  arrangementName: 'BES',
  ccliSettings: {
    publisher: 'ANY_PUBLISHER',
    author: 'ANY_AUTHOR',
    copyrightYear: 2023,
    album: 'ANY_ALBUM',
    songNumber: 0,
  } as Presentation_CCLI,
  fontConfig: { name: 'ANY_FONT', size: 58 } as Font,
  graphicSize: { width: 1920, height: 1080 },
  presentationCategory: 'ANY_CATEGORY',
  refMacroId: 'ANY_REF_MACRO_ID',
  refMacroName: 'ANY_REF_MACRO_NAME',
};

const FIRST_DEPLOYMENT_DATE = new Date(2024, 3, 9, 17, 18, 5);
const SECOND_DEPLOYMENT_DATE = new Date(2024, 3, 9, 17, 19, 5);
const FIRST_DEPLOYMENT_DIR = '2024-04-09-17:18:05';
const SECOND_DEPLOYMENT_DIR = '2024-04-09-17:19:05';

const createSongFileContent = (id: string, contentHash: string) => `[title]
Song ${id} {id: {${id}}, contentHash: {${contentHash}}}

[sequence]
v1,c

[v1]
Verse of ${id}

[c]
Chorus of ${id}`;

describe('localConverterRunner', () => {
  let tempDir: string;
  let sourceDir: string;
  let baseLocalDir: string;
  let consoleLogSpy: jest.SpyInstance;

  const writeSong = (fileName: string, id: string, contentHash: string) =>
    fs.writeFileSync(
      path.join(sourceDir, fileName),
      createSongFileContent(id, contentHash),
    );

  const deployAt = async (date: Date) => {
    jest.setSystemTime(date);

    await convertSongsToPP7FormatLocally({
      sourceDir,
      baseLocalDir,
      config: ANY_CONFIG,
    });
  };

  const listDeploymentDir = (deploymentDir: string) =>
    fs.readdirSync(path.join(baseLocalDir, deploymentDir)).sort();

  const getLoggedMessages = () =>
    consoleLogSpy.mock.calls.map(([message]) => String(message));

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pp7-migrator-'));
    sourceDir = path.join(tempDir, 'songs');
    baseLocalDir = path.join(tempDir, 'out');
    fs.mkdirSync(sourceDir);
    fs.mkdirSync(baseLocalDir);

    writeSong('Song A.txt', 'A', '1');
    writeSong('Song B.txt', 'B', '1');

    // File-system callbacks rely on the real `nextTick` and `setImmediate`.
    jest.useFakeTimers({ doNotFake: ['nextTick', 'setImmediate'] });
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.useRealTimers();
    consoleLogSpy.mockRestore();
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  it('converts every song on the first deployment', async () => {
    await deployAt(FIRST_DEPLOYMENT_DATE);

    expect(listDeploymentDir(FIRST_DEPLOYMENT_DIR)).toEqual([
      'Song A.pro',
      'Song B.pro',
      MANIFEST_FILE_NAME,
    ]);
  });

  it('converts only new or changed songs on the next deployment', async () => {
    await deployAt(FIRST_DEPLOYMENT_DATE);
    writeSong('Song B.txt', 'B', '2');
    writeSong('Song C.txt', 'C', '1');

    await deployAt(SECOND_DEPLOYMENT_DATE);

    expect(listDeploymentDir(SECOND_DEPLOYMENT_DIR)).toEqual([
      'Song B.pro',
      'Song C.pro',
      MANIFEST_FILE_NAME,
    ]);
  });

  it('skips the conversion when nothing changed', async () => {
    await deployAt(FIRST_DEPLOYMENT_DATE);

    await deployAt(SECOND_DEPLOYMENT_DATE);

    expect(listDeploymentDir(SECOND_DEPLOYMENT_DIR)).toEqual([
      MANIFEST_FILE_NAME,
    ]);
    expect(getLoggedMessages()).toContain(
      'Skip incremental local deployments as no changes have been found between the last two versions.',
    );
  });

  it('reports removed songs when a deployment only removes songs', async () => {
    await deployAt(FIRST_DEPLOYMENT_DATE);
    fs.rmSync(path.join(sourceDir, 'Song B.txt'));

    await deployAt(SECOND_DEPLOYMENT_DATE);

    expect(listDeploymentDir(SECOND_DEPLOYMENT_DIR)).toEqual([
      MANIFEST_FILE_NAME,
    ]);
    expect(getLoggedMessages()).toContain(
      'The following songs have been removed: Song B.txt manually.',
    );
  });
});
