import { convertSongToProPresenter7 } from './proPresenter7SongConverter';
import { Song, SongSection } from './types';
import { SongSectionLabel } from './SongSectionLabel';

jest.mock('crypto', () => {
  let index = 1;

  return {
    randomUUID: jest.fn().mockImplementation(() => `RANDOM_UUID_${index++}`),
  };
});

describe('proPresenter7SongConverter', () => {
  const ANY_SONG = {
    sequence: [
      SongSection.BRIDGE,
      SongSection.BRIDGE_2,
      SongSection.CHORUS,
      SongSection.CHORUS_2,
      SongSection.ENDING,
      SongSection.PRECHORUS,
      SongSection.PRECHORUS_2,
      SongSection.VERSE_1,
      SongSection.CHORUS,
      SongSection.VERSE_2,
      SongSection.CHORUS,
      SongSection.VERSE_3,
      SongSection.CHORUS,
      SongSection.VERSE_4,
      SongSection.CHORUS,
      SongSection.VERSE_5,
      SongSection.CHORUS,
      SongSection.VERSE_6,
      SongSection.VERSE_7,
      SongSection.VERSE_8,
    ],
    title: 'My custom test song title abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț',
    verses: [
      {
        content: `Row 1-1
abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț
Row 1-2`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_1],
        section: SongSection.VERSE_1,
      },
      {
        content: `Row 2-1
abcdefghijlmnopqrstuvwxzÎâîăÂȘșĂȚț
Row 2-2`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_2],
        section: SongSection.VERSE_2,
      },
      {
        content: `Content: ${SongSection.BRIDGE}`,
        sectionLabel: SongSectionLabel[SongSection.BRIDGE],
        section: SongSection.BRIDGE,
      },
      {
        content: `Content: ${SongSection.BRIDGE_2}`,
        sectionLabel: SongSectionLabel[SongSection.BRIDGE_2],
        section: SongSection.BRIDGE_2,
      },
      {
        content: `Content: ${SongSection.CHORUS}`,
        sectionLabel: SongSectionLabel[SongSection.CHORUS],
        section: SongSection.CHORUS,
      },
      {
        content: `Content: ${SongSection.CHORUS_2}`,
        sectionLabel: SongSectionLabel[SongSection.CHORUS_2],
        section: SongSection.CHORUS_2,
      },
      {
        content: `Content: ${SongSection.ENDING}`,
        sectionLabel: SongSectionLabel[SongSection.ENDING],
        section: SongSection.ENDING,
      },
      {
        content: `Content: ${SongSection.PRECHORUS}`,
        sectionLabel: SongSectionLabel[SongSection.PRECHORUS],
        section: SongSection.PRECHORUS,
      },
      {
        content: `Content: ${SongSection.PRECHORUS_2}`,
        sectionLabel: SongSectionLabel[SongSection.PRECHORUS_2],
        section: SongSection.PRECHORUS_2,
      },
      {
        content: `Content: ${SongSection.VERSE_1}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_1],
        section: SongSection.VERSE_1,
      },
      {
        content: `Content: ${SongSection.VERSE_2}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_2],
        section: SongSection.VERSE_2,
      },
      {
        content: `Content: ${SongSection.VERSE_3}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_3],
        section: SongSection.VERSE_3,
      },
      {
        content: `Content: ${SongSection.VERSE_4}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_4],
        section: SongSection.VERSE_4,
      },
      {
        content: `Content: ${SongSection.VERSE_5}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_5],
        section: SongSection.VERSE_5,
      },
      {
        content: `Content: ${SongSection.VERSE_6}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_6],
        section: SongSection.VERSE_6,
      },
      {
        content: `Content: ${SongSection.VERSE_7}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_7],
        section: SongSection.VERSE_7,
      },
      {
        content: `Content: ${SongSection.VERSE_8}`,
        sectionLabel: SongSectionLabel[SongSection.VERSE_8],
        section: SongSection.VERSE_8,
      },
    ],
  } as Song;

  it('should convert to a presentation w/ settings correctly', () => {
    expect(convertSongToProPresenter7(ANY_SONG)).toMatchSnapshot();
  });

  it('should correctly encode the content to RTF', () => {
    const actual = convertSongToProPresenter7(ANY_SONG);

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
