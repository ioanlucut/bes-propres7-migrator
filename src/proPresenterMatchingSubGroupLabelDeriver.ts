import { SequenceChar } from './types';
import { DOT, EMPTY_STRING, SLASH } from './constants';
import { uniq } from 'lodash';

export const getMatchingSubGroupLabel = (
  songSectionIdentifier: string,
  definedSequenceWithMarkup: string[],
) => {
  const maybeMatch = new RegExp(
    `(${SequenceChar.PRECHORUS}|${SequenceChar.CHORUS}|${SequenceChar.BRIDGE}|${SequenceChar.VERSE})([1-9]\\d*)(\\.?)([1-9]\\d*)?$`,
    'gi',
  ).exec(songSectionIdentifier);

  if (maybeMatch) {
    const [match, sequenceChar, mainIdentifier, c, maybeSubSectionIdentifier] =
      maybeMatch;
    if (!match.includes(DOT)) {
      return EMPTY_STRING;
    }

    const theNumberOfTotalSubSequences = uniq(definedSequenceWithMarkup).filter(
      (sequence) => sequence.includes(`${sequenceChar}${mainIdentifier}${DOT}`),
    );

    return [
      maybeSubSectionIdentifier,
      theNumberOfTotalSubSequences.length,
    ].join(SLASH);
  }

  return EMPTY_STRING;
};
