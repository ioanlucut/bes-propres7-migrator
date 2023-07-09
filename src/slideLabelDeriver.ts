import { PPGroup, SequenceChar } from './types';
import { EMPTY_SPACE } from './constants';

export const deriveSlideLabelFrom = (songSectionWithoutBrackets: string) => {
  const maybeVerse = new RegExp(`(${SequenceChar.VERSE})(\\d+)$`, 'gi').exec(
    songSectionWithoutBrackets,
  );
  if (maybeVerse) {
    const [, , index] = maybeVerse;

    return `${PPGroup.VERSE} ${index}`;
  }

  const maybeBridge = new RegExp(
    `(${SequenceChar.BRIDGE})((?!1$)\\d+)?$`,
    'gi',
  ).exec(songSectionWithoutBrackets);
  if (maybeBridge) {
    const [, , index] = maybeBridge;

    return [PPGroup.BRIDGE, index].filter(Boolean).join(EMPTY_SPACE);
  }

  const maybePreChorus = new RegExp(
    `(${SequenceChar.PRECHORUS})((?!1$)\\d+)?$`,
    'gi',
  ).exec(songSectionWithoutBrackets);
  if (maybePreChorus) {
    const [, , index] = maybePreChorus;

    return [PPGroup.PRECHORUS, index].filter(Boolean).join(EMPTY_SPACE);
  }

  const maybeChorus = new RegExp(
    `(${SequenceChar.CHORUS})((?!1$)\\d+)?$`,
    'gi',
  ).exec(songSectionWithoutBrackets);
  if (maybeChorus) {
    const [, , index] = maybeChorus;

    return [PPGroup.CHORUS, index].filter(Boolean).join(EMPTY_SPACE);
  }

  const maybeEnding = new RegExp(`(${SequenceChar.ENDING})$`, 'gi').exec(
    songSectionWithoutBrackets,
  );
  if (maybeEnding) {
    return PPGroup.ENDING;
  }

  throw new Error(`Unknown song section: ${songSectionWithoutBrackets}`);
};
