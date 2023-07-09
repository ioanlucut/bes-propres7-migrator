import _, { trim, without } from 'lodash';
import { Song, SongSection, Verse } from './types';
import { deriveSlideLabelFrom } from './slideLabelDeriver';
import { COMMA, EMPTY_STRING } from './constants';

export const getRelevantTitleContent = (titleContent: string) =>
  titleContent
    .split(/\{((?:[^{}]*\{[^{}]*})*[^{}]*?)}/gim)
    .map(trim)
    .filter(Boolean)[0];

export const parseSong = (songText: string): Song => {
  const sectionTuples = songText
    .split(/(\[.*])/gim)
    .filter(Boolean)
    .map(_.trim);

  const definedSequenceWithMarkup = sectionTuples[3]
    .split(COMMA)
    .map((charWithoutMarkup: string) => `[${charWithoutMarkup}]`);

  const hashMap = {} as Record<string, string>;
  const verses = [] as Verse[];

  for (
    let sectionIndex = 0;
    sectionIndex < sectionTuples.length;
    sectionIndex = sectionIndex + 2
  ) {
    const songSection = sectionTuples[sectionIndex];
    const songSectionContent = sectionTuples[sectionIndex + 1];
    hashMap[songSection] = songSectionContent;

    if (songSection === SongSection.TITLE) {
      hashMap[songSection] = getRelevantTitleContent(songSectionContent);
    }

    if (
      songSection !== SongSection.TITLE &&
      songSection !== SongSection.SEQUENCE
    ) {
      verses.push({
        content: songSectionContent,
        sectionLabel: deriveSlideLabelFrom(
          songSection
            .replaceAll('[', EMPTY_STRING)
            .replaceAll(']', EMPTY_STRING),
        ),
        section: songSection,
      });
    }
  }

  const actualSections = without(
    Object.keys(hashMap),
    SongSection.TITLE,
    SongSection.SEQUENCE,
  );

  const mismatchingSequence = _.difference(
    actualSections,
    definedSequenceWithMarkup,
  );

  if (!_.isEmpty(mismatchingSequence)) {
    throw new Error(
      `The following are present in the content but not in the sequence: ${mismatchingSequence}`,
    );
  }

  return {
    sequence: definedSequenceWithMarkup,
    title: hashMap[SongSection.TITLE],
    verses,
  } as Song;
};
