import { SongSectionLabel } from './SongSectionLabel';

export enum SongSection {
  BRIDGE = '[bridge]',
  BRIDGE_2 = '[bridge 2]',
  CHORUS = '[chorus]',
  CHORUS_2 = '[chorus 2]',
  ENDING = '[ending]',
  PRECHORUS = '[prechorus]',
  PRECHORUS_2 = '[prechorus 2]',
  SEQUENCE = '[sequence]',
  TITLE = '[title]',
  VERSE_1 = '[1]',
  VERSE_2 = '[2]',
  VERSE_3 = '[3]',
  VERSE_4 = '[4]',
  VERSE_5 = '[5]',
  VERSE_6 = '[6]',
  VERSE_7 = '[7]',
  VERSE_8 = '[8]',
  VERSE_9 = '[9]',
  VERSE_10 = '[10]',
  VERSE_11 = '[11]',
}

export type Verse = {
  content: string;
  section: SongSection;
  sectionLabel: (typeof SongSectionLabel)[keyof typeof SongSectionLabel];
};

export type Song = {
  sequence: SongSection[];
  title: string;
  verses: Verse[];
};
