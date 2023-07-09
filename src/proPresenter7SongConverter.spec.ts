import { convertSongToProPresenter7 } from './proPresenter7SongConverter';
import { SequenceChar, Song, SongSection } from './types';
import { deriveSlideLabelFrom } from './slideLabelDeriver';
import { Presentation_CCLI } from '../proto/presentation';
import { Graphics_Text_Attributes_Font } from '../proto/graphicsData';

jest.mock('crypto', () => {
  let index = 1;

  return {
    randomUUID: jest.fn().mockImplementation(() => `RANDOM_UUID_${index++}`),
  };
});

const ANY_CONFIG = {
  arrangementName: 'BES',
  ccliSettings: {
    publisher: 'Biserica Emanuel Sibiu',
    author: 'Ioan Lucuț',
    copyrightYear: new Date().getFullYear(),
    album: `Biserica Emanuel Sibiu ${new Date().getFullYear()}`,
    songNumber: 0,
  } as Presentation_CCLI,
  fontConfig: {
    name: 'CMGSans-Regular',
    size: 60,
    family: 'CMGSans',
    bold: true,
  } as Graphics_Text_Attributes_Font,
  graphicSize: {
    width: 1920,
    height: 1080,
  },
  presentationCategory: `Worship Songs ~ BES ${new Date().getFullYear()}`,
  refMacroId: '3ffd01b7-104f-499f-aac9-a13135006d0e',
  refMacroName: 'Songs',
};

describe('proPresenter7SongConverter', () => {
  const ANY_SONG = {
    sequence: [
      `${SongSection.BRIDGE()}`,
      `${SongSection.BRIDGE(2)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.CHORUS(2)}`,
      `${SongSection.ENDING}`,
      `${SongSection.PRECHORUS()}`,
      `${SongSection.PRECHORUS(2)}`,
      `${SongSection.VERSE(1)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.VERSE(2)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.VERSE(3)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.VERSE(4)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.VERSE(5)}`,
      `${SongSection.CHORUS()}`,
      `${SongSection.VERSE(6)}`,
      `${SongSection.VERSE(7)}`,
      `${SongSection.VERSE(8)}`,
    ],
    title:
      'My custom test song title abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț {Alternative: {The Cause Of Christ}, Author: {Kari Jobe}}',
    verses: [
      {
        content: `Row 1-1
abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț
Row 1-2`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}1`),
        section: SongSection.VERSE(1),
      },
      {
        content: `Row 2-1
abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț
Row 2-2`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}2`),
        section: SongSection.VERSE(2),
      },
      {
        content: `Content: ${SongSection.BRIDGE()}`,
        sectionLabel: deriveSlideLabelFrom(SequenceChar.BRIDGE),
        section: SongSection.BRIDGE(),
      },
      {
        content: `Content: ${SongSection.BRIDGE(2)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.BRIDGE}2`),
        section: SongSection.BRIDGE(2),
      },
      {
        content: `Content: ${SongSection.CHORUS()}`,
        sectionLabel: deriveSlideLabelFrom(SequenceChar.CHORUS),
        section: SongSection.CHORUS(),
      },
      {
        content: `Content: ${SongSection.CHORUS(2)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.CHORUS}2`),
        section: SongSection.CHORUS(2),
      },
      {
        content: `Content: ${SongSection.ENDING}`,
        sectionLabel: deriveSlideLabelFrom(SequenceChar.ENDING),
        section: SongSection.ENDING,
      },
      {
        content: `Content: ${SongSection.PRECHORUS()}`,
        sectionLabel: deriveSlideLabelFrom(SequenceChar.PRECHORUS),
        section: SongSection.PRECHORUS(),
      },
      {
        content: `Content: ${SongSection.PRECHORUS(2)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.PRECHORUS}2`),
        section: SongSection.PRECHORUS(2),
      },
      {
        content: `Content: ${SongSection.VERSE(1)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}1`),
        section: SongSection.VERSE(1),
      },
      {
        content: `Content: ${SongSection.VERSE(2)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}2`),
        section: SongSection.VERSE(2),
      },
      {
        content: `Content: ${SongSection.VERSE(3)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}3`),
        section: SongSection.VERSE(3),
      },
      {
        content: `Content: ${SongSection.VERSE(4)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}4`),
        section: SongSection.VERSE(4),
      },
      {
        content: `Content: ${SongSection.VERSE(5)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}5`),
        section: SongSection.VERSE(5),
      },
      {
        content: `Content: ${SongSection.VERSE(6)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}6`),
        section: SongSection.VERSE(6),
      },
      {
        content: `Content: ${SongSection.VERSE(7)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}7`),
        section: SongSection.VERSE(7),
      },
      {
        content: `Content: ${SongSection.VERSE(8)}`,
        sectionLabel: deriveSlideLabelFrom(`${SequenceChar.VERSE}8`),
        section: SongSection.VERSE(8),
      },
    ],
  } as Song;

  it('should convert to a presentation w/ settings correctly', () => {
    expect(convertSongToProPresenter7(ANY_SONG, ANY_CONFIG)).toMatchSnapshot();
  });

  it('should correctly encode the content to RTF', () => {
    const actual = convertSongToProPresenter7(ANY_SONG, ANY_CONFIG);

    expect(
      actual?.cues
        .map(
          (cue) =>
            cue.actions[0].slide?.presentation?.baseSlide?.elements[0].element
              ?.text?.rtfData,
        )
        .map((entry: any) => entry.toString()),
    ).toMatchSnapshot();
  });
});
