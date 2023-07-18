import { SectionGroupCategory } from './types';
import { EMPTY_SPACE } from './constants';
import {
  getBridgeRegex,
  getChorusRegex,
  getEndingRegex,
  getPrechorusRegex,
  getVerseRegex,
} from './core';

export const getMatchingGroup = (songSectionIdentifier: string) => {
  const maybeVerse = getVerseRegex().exec(songSectionIdentifier);
  if (maybeVerse) {
    const [, index] = maybeVerse;

    return `${SectionGroupCategory.VERSE} ${index}`;
  }

  const maybeBridge = new RegExp(getBridgeRegex(), 'gi').exec(
    songSectionIdentifier,
  );
  if (maybeBridge) {
    const [, index] = maybeBridge;

    return [SectionGroupCategory.BRIDGE, index]
      .filter(Boolean)
      .join(EMPTY_SPACE);
  }

  const maybePreChorus = new RegExp(getPrechorusRegex(), 'gi').exec(
    songSectionIdentifier,
  );
  if (maybePreChorus) {
    const [, index] = maybePreChorus;

    return [SectionGroupCategory.PRECHORUS, index]
      .filter(Boolean)
      .join(EMPTY_SPACE);
  }

  const maybeChorus = new RegExp(getChorusRegex(), 'gi').exec(
    songSectionIdentifier,
  );
  if (maybeChorus) {
    const [, index] = maybeChorus;

    return [SectionGroupCategory.CHORUS, index]
      .filter(Boolean)
      .join(EMPTY_SPACE);
  }

  const maybeEnding = getEndingRegex().exec(songSectionIdentifier);
  if (maybeEnding) {
    return SectionGroupCategory.ENDING;
  }

  throw new Error(`Unknown song sectionIdentifier: ${songSectionIdentifier}`);
};
