export enum SequenceChar {
  VERSE = 'v',
  PRECHORUS = 'p',
  CHORUS = 'c',
  BRIDGE = 'b',
  ENDING = 'e',
}

export const SongSection = {
  SEQUENCE: '[sequence]',
  TITLE: '[title]',
  VERSE: (index = 0) =>
    `[${index > 0 ? `${SequenceChar.VERSE}${index}` : SequenceChar.VERSE}]`,
  PRECHORUS: (index = 0) =>
    `[${
      index > 1 ? `${SequenceChar.PRECHORUS}${index}` : SequenceChar.PRECHORUS
    }]`,
  CHORUS: (index = 0) =>
    `[${index > 1 ? `${SequenceChar.CHORUS}${index}` : SequenceChar.CHORUS}]`,
  BRIDGE: (index = 0) =>
    `[${index > 1 ? `${SequenceChar.BRIDGE}${index}` : SequenceChar.BRIDGE}]`,
  ENDING: `[${SequenceChar.ENDING}]`,
};

export enum SongMeta {
  ALTERNATIVE = 'alternative',
  AUTHOR = 'author',
  VERSION = 'version',
}

export enum PPGroup {
  VERSE = 'Verse',
  BRIDGE = 'Bridge',
  PRECHORUS = 'Prechorus',
  CHORUS = 'Chorus',
  ENDING = 'Ending',
}

export type Verse = {
  content: string;
  section: string;
  sectionLabel: string;
};

export type Song = {
  sequence: string[];
  title: string;
  verses: Verse[];
};
