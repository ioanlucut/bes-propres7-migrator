export enum SongSection {
  VERSE_1 = '[1]',
  VERSE_2 = '[2]',
  VERSE_3 = '[3]',
  VERSE_4 = '[4]',
  VERSE_5 = '[5]',
  VERSE_6 = '[6]',
  VERSE_7 = '[7]',
  VERSE_8 = '[8]',
  BRIDGE = '[bridge]',
  BRIDGE_2 = '[bridge 2]',
  CHORUS = '[chorus]',
  CHORUS_2 = '[chorus 2]',
  ENDING = '[ending]',
  PRECHORUS = '[prechorus]',
  PRECHORUS_2 = '[prechorus 2]',
  TITLE = '[title]',
  SEQUENCE = '[sequence]',
}

export type Verse = {
  content: string;
  sectionLabel: string;
};

export type Song = {
  verses: Verse[];
  title: string;
  sequence: string[];
};
