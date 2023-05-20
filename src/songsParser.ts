import _, { without } from 'lodash';
import { Song, SongSection, Verse } from './types';
import { SongSectionLabel } from './SongSectionLabel';
import { SequenceChar } from './SequenceChar';

const COMMA = ',';

export const parseSong = (songText: string): Song => {
  const sectionTuples = songText
    .split(/(\[.*])/gim)
    .filter(Boolean)
    .map(_.trim);

  const arrangementSequence = sectionTuples[3]
    .split(COMMA)
    .map((sequenceSection) => {
      switch (sequenceSection) {
        case SequenceChar[SongSection.VERSE_1]: {
          return SongSection.VERSE_1;
        }
        case SequenceChar[SongSection.VERSE_2]: {
          return SongSection.VERSE_2;
        }
        case SequenceChar[SongSection.VERSE_3]: {
          return SongSection.VERSE_3;
        }
        case SequenceChar[SongSection.VERSE_4]: {
          return SongSection.VERSE_4;
        }
        case SequenceChar[SongSection.VERSE_5]: {
          return SongSection.VERSE_5;
        }
        case SequenceChar[SongSection.VERSE_6]: {
          return SongSection.VERSE_6;
        }
        case SequenceChar[SongSection.VERSE_7]: {
          return SongSection.VERSE_7;
        }
        case SequenceChar[SongSection.VERSE_8]: {
          return SongSection.VERSE_8;
        }
        case SequenceChar[SongSection.VERSE_9]: {
          return SongSection.VERSE_9;
        }
        case SequenceChar[SongSection.VERSE_10]: {
          return SongSection.VERSE_10;
        }
        case SequenceChar[SongSection.VERSE_11]: {
          return SongSection.VERSE_11;
        }
        case SequenceChar[SongSection.VERSE_12]: {
          return SongSection.VERSE_12;
        }
        case SequenceChar[SongSection.CHORUS]: {
          return SongSection.CHORUS;
        }
        case SequenceChar[SongSection.CHORUS_2]: {
          return SongSection.CHORUS_2;
        }
        case SequenceChar[SongSection.PRECHORUS]: {
          return SongSection.PRECHORUS;
        }
        case SequenceChar[SongSection.PRECHORUS_2]: {
          return SongSection.PRECHORUS_2;
        }
        case SequenceChar[SongSection.ENDING]: {
          return SongSection.ENDING;
        }
        case SequenceChar[SongSection.BRIDGE]: {
          return SongSection.BRIDGE;
        }
        case SequenceChar[SongSection.BRIDGE_2]: {
          return SongSection.BRIDGE_2;
        }
        default: {
          throw new Error(`Unknown ${sequenceSection}`);
        }
      }
    });

  const hashMap = {} as Record<SongSection, string>;
  const verses = [] as Verse[];

  for (
    let sectionIndex = 0;
    sectionIndex < sectionTuples.length;
    sectionIndex = sectionIndex + 2
  ) {
    const songSection = sectionTuples[sectionIndex] as SongSection;
    const songSectionContent = sectionTuples[sectionIndex + 1];
    hashMap[songSection] = songSectionContent;

    if (
      songSection !== SongSection.TITLE &&
      songSection !== SongSection.SEQUENCE
    ) {
      verses.push({
        content: songSectionContent,
        sectionLabel: SongSectionLabel[songSection],
        section: songSection,
      });
    }
  }

  const mismatchingSequence = _.difference(
    without(Object.keys(hashMap), SongSection.TITLE, SongSection.SEQUENCE),
    arrangementSequence,
  );
  if (!_.isEmpty(mismatchingSequence)) {
    throw new Error(
      `The following are present in the content but not in the sequence: ${mismatchingSequence}`,
    );
  }

  return {
    sequence: arrangementSequence,
    title: hashMap[SongSection.TITLE],
    verses,
  } as Song;
};
