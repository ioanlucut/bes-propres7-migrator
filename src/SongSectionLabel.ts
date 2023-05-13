import { SongSection } from './types';

export const SongSectionLabel = {
  [SongSection.VERSE_1]: 'Verse 1',
  [SongSection.VERSE_2]: 'Verse 2',
  [SongSection.VERSE_3]: 'Verse 3',
  [SongSection.VERSE_4]: 'Verse 4',
  [SongSection.VERSE_5]: 'Verse 5',
  [SongSection.VERSE_6]: 'Verse 6',
  [SongSection.VERSE_7]: 'Verse 7',
  [SongSection.VERSE_8]: 'Verse 8',
  [SongSection.VERSE_9]: 'Verse 9',
  [SongSection.VERSE_10]: 'Verse 10',
  [SongSection.VERSE_11]: 'Verse 11',
  [SongSection.BRIDGE]: 'Bridge',
  [SongSection.BRIDGE_2]: 'Bridge 2',
  [SongSection.CHORUS]: 'Chorus',
  [SongSection.CHORUS_2]: 'Chorus 2',
  [SongSection.ENDING]: 'Ending',
  [SongSection.PRECHORUS]: 'Prechorus',
  [SongSection.PRECHORUS_2]: 'Prechorus 2',
  [SongSection.TITLE]: 'Title',
  [SongSection.SEQUENCE]: 'Sequence',
} as const;
