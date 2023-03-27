import _ from 'lodash';
import fs from 'fs';
import fsExtra from 'fs-extra';
import path from 'path';
import { processSongAndPersistToFile, Song, SongSection } from './src';

const EMPTY_SPACE = ' ';
const COMMA = ',';

const DIR_SOURCE = '/Users/ilucut/WORK/BES/bes-lyrics/out';
const OUT_DIR = './pp7-songs';

const SONG_SECTION_LABEL = {
  [SongSection.VERSE_1]: 'Verse 1',
  [SongSection.VERSE_2]: 'Verse 2',
  [SongSection.VERSE_3]: 'Verse 3',
  [SongSection.VERSE_4]: 'Verse 4',
  [SongSection.VERSE_5]: 'Verse 5',
  [SongSection.VERSE_6]: 'Verse 6',
  [SongSection.VERSE_7]: 'Verse 7',
  [SongSection.VERSE_8]: 'Verse 8',
  [SongSection.BRIDGE]: 'Bridge',
  [SongSection.BRIDGE_2]: 'Bridge',
  [SongSection.CHORUS]: 'Chorus',
  [SongSection.CHORUS_2]: 'Chorus 2',
  [SongSection.ENDING]: 'Ending',
  [SongSection.PRECHORUS]: 'Prechorus',
  [SongSection.PRECHORUS_2]: 'Prechorus 2',
  [SongSection.TITLE]: 'Title',
  [SongSection.SEQUENCE]: 'Sequence',
};

const readSongAndConfigure = (fileName: string) => {
  const filePath = path.join(DIR_SOURCE, fileName);
  const fileAsText = fs.readFileSync(filePath).toString();
  const sectionTuples = fileAsText
    .split(/(\[.*])/gim)
    .filter(Boolean)
    .map(_.trim);

  const song = {
    verses: [],
    sequence: [],
    title: EMPTY_SPACE,
  } as Song;

  for (
    let sectionIndex = 0;
    sectionIndex < sectionTuples.length;
    sectionIndex = sectionIndex + 2
  ) {
    const sectionKey = sectionTuples[sectionIndex] as SongSection;
    const sectionContent = sectionTuples[sectionIndex + 1];
    const label = SONG_SECTION_LABEL[sectionKey];

    if (SongSection.TITLE === sectionKey) {
      song.title = sectionContent;
    }

    if (SongSection.SEQUENCE === sectionKey) {
      song.sequence = sectionContent.split(COMMA).map((separator) => {
        switch (separator) {
          case '1': {
            return SongSection.VERSE_1;
          }
          case '2': {
            return SongSection.VERSE_2;
          }
          case '3': {
            return SongSection.VERSE_3;
          }
          default: {
            return SongSection.VERSE_1;
          }
        }
      });
    }

    if (
      sectionKey !== SongSection.TITLE &&
      sectionKey !== SongSection.SEQUENCE
    ) {
      song.verses.push({
        content: sectionContent,
        sectionLabel: SONG_SECTION_LABEL[sectionKey],
      });
    }
  }

  return song;
};

try {
  fsExtra.emptydirSync(OUT_DIR);

  fs.readdirSync(DIR_SOURCE)
    .map(readSongAndConfigure)
    .map(processSongAndPersistToFile);
} catch (error) {
  console.error(error);
}
