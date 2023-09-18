export enum SequenceChar {
  /**
   * Simple verse section
   */
  VERSE = 'v',

  /**
   * Pre-chorus section
   */
  PRECHORUS = 'p',

  /**
   * Chorus section
   */
  CHORUS = 'c',

  /**
   * Bridge section
   */
  BRIDGE = 'b',

  /**
   * Ending section
   */
  ENDING = 'e',

  /**
   * Recital section
   */
  RECITAL = 's',
}

/**
 * Verse 1 will always be 1 (cannot be just `v`)
 */
const V_START_INDEX = 0;

/**
 * Pre-chorus 1 will always be 1 (cannot be just `p`, thus `p,p2`)
 */
const P_START_INDEX = 1;

/**
 * Chorus 1 will always be 1 (cannot be just `c`, thus `c,c2`)
 */
const C_START_INDEX = 1;

/**
 * Bridge 1 will always be 1 (cannot be just `b`, thus `b,b2`)
 */
const B_START_INDEX = 1;

/**
 * Recital 1 will always be 1 (cannot be just `s`, thus `s,s2`)
 */
const S_START_INDEX = 1;

export const SongSection = {
  SEQUENCE: '[sequence]',
  TITLE: '[title]',
  VERSE: (index = 0) =>
    `[${
      index > V_START_INDEX
        ? `${SequenceChar.VERSE}${index}`
        : SequenceChar.VERSE
    }]`,
  PRECHORUS: (index = 0) =>
    `[${
      index > P_START_INDEX
        ? `${SequenceChar.PRECHORUS}${index}`
        : SequenceChar.PRECHORUS
    }]`,
  CHORUS: (index = 0) =>
    `[${
      index > C_START_INDEX
        ? `${SequenceChar.CHORUS}${index}`
        : SequenceChar.CHORUS
    }]`,
  BRIDGE: (index = 0) =>
    `[${
      index > B_START_INDEX
        ? `${SequenceChar.BRIDGE}${index}`
        : SequenceChar.BRIDGE
    }]`,
  RECITAL: (index = 0) =>
    `[${
      index > S_START_INDEX
        ? `${SequenceChar.RECITAL}${index}`
        : SequenceChar.RECITAL
    }]`,
  ENDING: `[${SequenceChar.ENDING}]`,
};

export enum SongMeta {
  CONTENT_HASH = 'contentHash',
  ID = 'id',
}

/**
 * Pro presenter sectionIdentifier group categories
 */
export enum SectionGroupCategory {
  VERSE = 'Verse',
  BRIDGE = 'Bridge',
  PRECHORUS = 'Prechorus',
  CHORUS = 'Chorus',
  ENDING = 'Ending',
  RECITAL = 'Recital',
}

export type Section = {
  // E.g. v1, v2, v3, v4, etc.
  sectionIdentifier: string;

  // E.g. strophe/chorus content
  content: string;

  // E.g. Verse 1, Verse 2, Bridge 1, Bridge 2, etc.
  sectionGroup: string;

  // E.g. Sub-section 1, Sub-section 2, etc. (used to split a group into multiple sub-sections)
  subSectionLabel?: string;
};

export type Song = {
  contentHash: string;
  id: string;
  sequence: string[];
  title: string;
  verses: Section[];
  version?: string;
};

export type SongManifest = {
  id: string;
  fileName: string;
  contentHash: string;
};

export type SongsInventoryManifest = {
  updatedOn: string;
  inventory: SongManifest[];
};

export type DeployableSong = {
  song: Song;
  fileName: string;
  fileAsText: string;
};

export type ConvertedFileStats = {
  songFileName: string;
  songFilePath: string;
};
