import chalk from 'chalk';
import {
  filter,
  first,
  includes,
  last,
  parseInt,
  size,
  trim,
  uniq,
} from 'lodash';
import { SequenceChar, SongMeta } from './types';
import {
  COLON,
  COMMA,
  DASH,
  DOUBLE_LINE_TUPLE,
  EMPTY_STRING,
  HASH,
  NEW_LINE_TUPLE,
  TEST_ENV,
} from './constants';
import assert from 'node:assert';

const MISSING_SEQUENCE_NUMBER = 1;

export const logFileWithLinkInConsole = (filePath: string) =>
  console.log(`at ${filePath}:1:1`);

export const logProcessingFile = (fileName: string, workType: string) =>
  console.log(chalk.cyan(`Processing (${workType}): "${fileName}".`));

export const getTitleBySections = (rawTitleContent: string) =>
  rawTitleContent
    .split(/\{((?:[^{}]*\{[^{}]*})*[^{}]*?)}/gim)
    .map(trim)
    .filter(Boolean);

export const getVerseRegex = () =>
  new RegExp(`${SequenceChar.VERSE}([1-9]\\d*)(\\.?)([1-9]\\d*)?$`, 'gi');

export const getPrechorusRegex = () =>
  new RegExp(
    `${SequenceChar.PRECHORUS}(?!1$)([1-9]\\d*)?(\\.?)([1-9]\\d*)?$`,
    'gi',
  );

export const getChorusRegex = () =>
  new RegExp(
    `${SequenceChar.CHORUS}(?!1$)([1-9]\\d*)?(\\.?)([1-9]\\d*)?$`,
    'gi',
  );

export const getBridgeRegex = () =>
  new RegExp(
    `${SequenceChar.BRIDGE}(?!1$)([1-9]\\d*)?(\\.?)([1-9]\\d*)?$`,
    'gi',
  );

export const getEndingRegex = () =>
  new RegExp(`${SequenceChar.ENDING}(?!1$)w?`, 'gi');

export const isTestEnv = () => process.env.NODE_ENV === TEST_ENV;

export const getCharWithoutMarkup = (charWithMarkup: string) =>
  charWithMarkup.replaceAll('[', EMPTY_STRING).replaceAll(']', EMPTY_STRING);

export const getWithoutMetaMarkup = (charWithMarkup?: string) =>
  charWithMarkup?.replaceAll('{', EMPTY_STRING).replaceAll('}', EMPTY_STRING);

export const getCharWithMarkup = (charWithoutMarkup: string) =>
  `[${charWithoutMarkup}]`;

export const getSongInSectionTuples = (songText: string) =>
  songText
    .split(/(\[.*])/gim)
    .filter(Boolean)
    .map(trim);

export const getHashContentFromSong = (titleContent: string) =>
  (last(titleContent.split(HASH)) as string).replaceAll('}', EMPTY_STRING);

export const getTitleWithoutMeta = (titleContent: string) =>
  trim(first(titleContent.split(/\{/i)) as string);

export const getMetaSectionsFromTitle = (titleContent: string) => {
  const charWithMarkup = last(
    titleContent.split(/(\{.*\})$/gi).filter(Boolean),
  );

  return (getWithoutMetaMarkup(charWithMarkup) || EMPTY_STRING)
    .split(COMMA)
    .map(trim)
    .reduce((accumulator, entry) => {
      const [sequence, content] = entry.split(COLON);

      return { ...accumulator, [sequence]: trim(content) };
    }, {}) as Record<SongMeta, string>;
};

export const createSongMock = (
  desiredSections: string[],
  desiredSequence: string[] = desiredSections,
) => `[title]
My custom title

[sequence]
${desiredSequence.join(COMMA)}

${desiredSections
  .map((sequence) => `[${sequence}]${NEW_LINE_TUPLE}Content for ${sequence}`)
  .join(DOUBLE_LINE_TUPLE)}`;

export const createAdvancedSongMock = (
  tuples: string[][],
  desiredSequence?: string[],
) => `[title]
My custom title

[sequence]
${
  desiredSequence
    ? desiredSequence.join(COMMA)
    : tuples.map(([sequence]) => sequence).join(COMMA)
}

${tuples
  .map(([sequence, content]) => `[${sequence}]${NEW_LINE_TUPLE}${content}`)
  .join(DOUBLE_LINE_TUPLE)}`;

export const convertSequenceToNumber = (sequenceOrderQualifier: string) =>
  parseInt(sequenceOrderQualifier) || MISSING_SEQUENCE_NUMBER;

export const getVersionedDir = (now = new Date()) =>
  now.getFullYear() +
  DASH +
  ('0' + (now.getMonth() + 1)).slice(-2) +
  DASH +
  ('0' + now.getDate()).slice(-2) +
  DASH +
  ('0' + now.getHours()).slice(-2) +
  COLON +
  ('0' + now.getMinutes()).slice(-2) +
  COLON +
  ('0' + now.getSeconds()).slice(-2);

export const parseDateFromVersionedDir = (versionFolder: string) => {
  const [year, month, day, time] = versionFolder.split(DASH);
  const [hour, minute, second] = time.split(COLON);

  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
    parseInt(second),
  );
};

export const getClosestVersionedDir = (diffDate: Date, dates: Date[]) =>
  first(
    dates.sort((a, b) => {
      // @ts-ignore
      return Math.abs(diffDate - a) - Math.abs(diffDate - b); // sort a before b when the distance is smaller
    }),
  );

export const assertUniqueness = (array: string[]) =>
  assert.equal(
    size(uniq(array)),
    size(array),
    `There are duplicates: ${filter(array, (value, index, iteratee) =>
      includes(iteratee, value, index + 1),
    ).join(COMMA)}`,
  );
