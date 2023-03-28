import { SongSection } from './types';

export const SequenceChar = {
  [SongSection.VERSE_1]: '1',
  [SongSection.VERSE_2]: '2',
  [SongSection.VERSE_3]: '3',
  [SongSection.VERSE_4]: '4',
  [SongSection.VERSE_5]: '5',
  [SongSection.VERSE_6]: '6',
  [SongSection.VERSE_7]: '7',
  [SongSection.VERSE_8]: '8',
  [SongSection.CHORUS]: 'c',
  [SongSection.CHORUS_2]: 't',
  [SongSection.PRECHORUS]: 'p',
  [SongSection.PRECHORUS_2]: 'q',
  [SongSection.ENDING]: 'e',
  [SongSection.BRIDGE]: 'b',
  [SongSection.BRIDGE_2]: 'w',
} as const;
