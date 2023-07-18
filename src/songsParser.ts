import { difference, first, identity, isEmpty, pickBy, without } from 'lodash';
import { Song, SongMeta, SongSection, Section } from './types';
import { getMatchingGroup } from './proPresenterMatchingGroupDeriver';
import { COMMA } from './constants';
import {
  getCharWithMarkup,
  getCharWithoutMarkup,
  getMetaSectionsFromTitle,
  getSongInSectionTuples,
  getTitleBySections,
} from './core';
import { getMatchingSubGroupLabel } from './proPresenterMatchingSubGroupLabelDeriver';

export const parseSong = (songContent: string): Song => {
  const sectionTuples = getSongInSectionTuples(songContent);

  const definedSequenceWithMarkup = sectionTuples[3]
    .split(COMMA)
    .map(getCharWithMarkup);

  const hashMap = {} as Record<string, string>;
  const sections = [] as Section[];

  for (
    let sectionIndex = 0;
    sectionIndex < sectionTuples.length;
    sectionIndex = sectionIndex + 2
  ) {
    const sectionIdentifier = sectionTuples[sectionIndex];
    const songSectionContent = sectionTuples[sectionIndex + 1];

    hashMap[sectionIdentifier] = songSectionContent;

    if (sectionIdentifier === SongSection.TITLE) {
      hashMap[SongSection.TITLE] = first(
        getTitleBySections(songSectionContent),
      ) as string;
    }

    if (
      sectionIdentifier !== SongSection.TITLE &&
      sectionIdentifier !== SongSection.SEQUENCE
    ) {
      sections.push({
        sectionIdentifier,
        sectionGroup: getMatchingGroup(getCharWithoutMarkup(sectionIdentifier)),
        subSectionLabel: getMatchingSubGroupLabel(
          getCharWithoutMarkup(sectionIdentifier),
          definedSequenceWithMarkup.map(getCharWithoutMarkup),
        ),
        content: songSectionContent,
      });
    }
  }

  const actualSections = without(
    Object.keys(hashMap),
    SongSection.TITLE,
    SongSection.SEQUENCE,
  );

  const mismatchingSequence = difference(
    actualSections,
    definedSequenceWithMarkup,
  );

  if (!isEmpty(mismatchingSequence)) {
    throw new Error(
      `The following are present in the content but not in the sequence: ${mismatchingSequence}.`,
    );
  }

  const titleContent = hashMap[SongSection.TITLE];
  const metaSectionsFromTitle = getMetaSectionsFromTitle(
    titleContent,
  ) as Record<SongMeta, string>;

  return pickBy(
    {
      id: metaSectionsFromTitle[SongMeta.ID],
      title: titleContent,
      author: metaSectionsFromTitle[SongMeta.AUTHOR],
      sequence: definedSequenceWithMarkup,
      contentHash: metaSectionsFromTitle[SongMeta.CONTENT_HASH],
      verses: sections,
    },
    identity,
  ) as Song;
};
