import { parseSong } from './songsParser';
import {
  SIMPLE_SONG_MOCK_FILE_CONTENT,
  SONG_WITH_MISMATCHING_SEQUENCE_MOCK_FILE_CONTENT,
  SONG_WITH_SUBSECTIONS_MOCK_FILE_CONTENT,
} from '../mocks';
import { createAdvancedSongMock, createSongMock } from './core';
import { DOUBLE_LINE_TUPLE } from './constants';

describe('songsParser', () => {
  it('should work correctly with a simple song', () => {
    expect(parseSong(SIMPLE_SONG_MOCK_FILE_CONTENT)).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[v1]",
          "[v2]",
          "[v3]",
          "[p]",
          "[p2]",
          "[p3]",
          "[c]",
          "[c2]",
          "[c3]",
          "[b]",
          "[b2]",
          "[b3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Row for v1",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for v2",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for v3",
            "sectionGroup": "Verse 3",
            "sectionIdentifier": "[v3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p",
            "sectionGroup": "Prechorus",
            "sectionIdentifier": "[p]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p2",
            "sectionGroup": "Prechorus 2",
            "sectionIdentifier": "[p2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p3",
            "sectionGroup": "Prechorus 3",
            "sectionIdentifier": "[p3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c",
            "sectionGroup": "Chorus",
            "sectionIdentifier": "[c]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c2",
            "sectionGroup": "Chorus 2",
            "sectionIdentifier": "[c2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c3",
            "sectionGroup": "Chorus 3",
            "sectionIdentifier": "[c3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b",
            "sectionGroup": "Bridge",
            "sectionIdentifier": "[b]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b2",
            "sectionGroup": "Bridge 2",
            "sectionIdentifier": "[b2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b3",
            "sectionGroup": "Bridge 3",
            "sectionIdentifier": "[b3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should work correctly if the sequences are mismatching', () => {
    expect(() =>
      parseSong(SONG_WITH_MISMATCHING_SEQUENCE_MOCK_FILE_CONTENT),
    ).toThrowErrorMatchingInlineSnapshot(
      `"The following are present in the content but not in the sequence: [v2],[v3],[p],[p2],[p3],[c],[c2],[c3],[b],[b2],[b3]."`,
    );
  });

  it('should work correctly for sub sections', () => {
    expect(parseSong(SONG_WITH_SUBSECTIONS_MOCK_FILE_CONTENT))
      .toMatchInlineSnapshot(`
      {
        "author": "CustomAuthor",
        "contentHash": "#customHash",
        "id": "customId",
        "sequence": [
          "[v1.1]",
          "[v1.2]",
          "[c1.1]",
          "[c1.2]",
          "[v2.1]",
          "[v2.2]",
          "[c1.1]",
          "[c1.2]",
        ],
        "title": "Any title",
        "verses": [
          {
            "content": "Aici să fie casa Celui veșnic Sfânt,
      Aici s-aducem laudă și-nchinare,
      Acelui care este veșnic viu și Sfânt
      Și merită doar cinste și onoare!",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Aici să fie casa unde frații mei
      Cădea-vor în genunchi în fața Ta,
      Cu mâinile întinse către ceruri, ei
      Un legământ cu Tine vor avea!",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1.2]",
            "subSectionLabel": "2/2",
          },
          {
            "content": "/: Din cântare în cântare,
      Să se-aprindă-n adunare
      Jertfa laudei de-nchinare
      Ca pe muntele cel Sfânt!",
            "sectionGroup": "Chorus 1",
            "sectionIdentifier": "[c1.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Să cunoască fiecare
      Că Tu ești în adunare
      Și-nsoțești a Ta lucrare
      Cu puteri prin Duhul Sfânt! :/",
            "sectionGroup": "Chorus 1",
            "sectionIdentifier": "[c1.2]",
            "subSectionLabel": "2/2",
          },
          {
            "content": "Aici să fie casa unde ochii Tăi,
      Zi și noapte, zilnic, vor privi,
      Aici să fie casa unde frații mei
      Cu rugăciuni, cu laude, vor veni!",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Atunci când va veni aici străinul,
      Din pricina Numelui Tău Sfânt,
      Să fie ascultat, să-i dai alinul,
      Că Tu ești Dumnezeu și Tu ești Sfânt!",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2.2]",
            "subSectionLabel": "2/2",
          },
        ],
      }
    `);
  });

  it('should not adjust an already well structured song (w/o subsections)', () => {
    expect(parseSong(SIMPLE_SONG_MOCK_FILE_CONTENT)).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[v1]",
          "[v2]",
          "[v3]",
          "[p]",
          "[p2]",
          "[p3]",
          "[c]",
          "[c2]",
          "[c3]",
          "[b]",
          "[b2]",
          "[b3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Row for v1",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for v2",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for v3",
            "sectionGroup": "Verse 3",
            "sectionIdentifier": "[v3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p",
            "sectionGroup": "Prechorus",
            "sectionIdentifier": "[p]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p2",
            "sectionGroup": "Prechorus 2",
            "sectionIdentifier": "[p2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for p3",
            "sectionGroup": "Prechorus 3",
            "sectionIdentifier": "[p3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c",
            "sectionGroup": "Chorus",
            "sectionIdentifier": "[c]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c2",
            "sectionGroup": "Chorus 2",
            "sectionIdentifier": "[c2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for c3",
            "sectionGroup": "Chorus 3",
            "sectionIdentifier": "[c3]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b",
            "sectionGroup": "Bridge",
            "sectionIdentifier": "[b]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b2",
            "sectionGroup": "Bridge 2",
            "sectionIdentifier": "[b2]",
            "subSectionLabel": "",
          },
          {
            "content": "Row for b3",
            "sectionGroup": "Bridge 3",
            "sectionIdentifier": "[b3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should not adjust an already well structured song (w/ subsections)', () => {
    expect(parseSong(SONG_WITH_SUBSECTIONS_MOCK_FILE_CONTENT))
      .toMatchInlineSnapshot(`
      {
        "author": "CustomAuthor",
        "contentHash": "#customHash",
        "id": "customId",
        "sequence": [
          "[v1.1]",
          "[v1.2]",
          "[c1.1]",
          "[c1.2]",
          "[v2.1]",
          "[v2.2]",
          "[c1.1]",
          "[c1.2]",
        ],
        "title": "Any title",
        "verses": [
          {
            "content": "Aici să fie casa Celui veșnic Sfânt,
      Aici s-aducem laudă și-nchinare,
      Acelui care este veșnic viu și Sfânt
      Și merită doar cinste și onoare!",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Aici să fie casa unde frații mei
      Cădea-vor în genunchi în fața Ta,
      Cu mâinile întinse către ceruri, ei
      Un legământ cu Tine vor avea!",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1.2]",
            "subSectionLabel": "2/2",
          },
          {
            "content": "/: Din cântare în cântare,
      Să se-aprindă-n adunare
      Jertfa laudei de-nchinare
      Ca pe muntele cel Sfânt!",
            "sectionGroup": "Chorus 1",
            "sectionIdentifier": "[c1.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Să cunoască fiecare
      Că Tu ești în adunare
      Și-nsoțești a Ta lucrare
      Cu puteri prin Duhul Sfânt! :/",
            "sectionGroup": "Chorus 1",
            "sectionIdentifier": "[c1.2]",
            "subSectionLabel": "2/2",
          },
          {
            "content": "Aici să fie casa unde ochii Tăi,
      Zi și noapte, zilnic, vor privi,
      Aici să fie casa unde frații mei
      Cu rugăciuni, cu laude, vor veni!",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2.1]",
            "subSectionLabel": "1/2",
          },
          {
            "content": "Atunci când va veni aici străinul,
      Din pricina Numelui Tău Sfânt,
      Să fie ascultat, să-i dai alinul,
      Că Tu ești Dumnezeu și Tu ești Sfânt!",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2.2]",
            "subSectionLabel": "2/2",
          },
        ],
      }
    `);
  });

  it('should correctly add the sub sections of a song (for verse)', () => {
    expect(
      parseSong(
        createAdvancedSongMock([
          ['v1', ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE)],
          ['v2', 'Section 2'],
          ['v3', 'Section 3'],
        ]),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[v1]",
          "[v2]",
          "[v3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 2",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 3",
            "sectionGroup": "Verse 3",
            "sectionIdentifier": "[v3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should correctly add the sub sections of a song by updating the non-unique occurrences in the song sequence', () => {
    expect(
      parseSong(
        createAdvancedSongMock(
          [
            [
              'v1',
              ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE),
            ],

            ['c', 'Chorus'],
            ['v2', 'Section 3'],
          ],

          ['v1', 'c', 'v2', 'v1', 'c'],
        ),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[v1]",
          "[c]",
          "[v2]",
          "[v1]",
          "[c]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Verse 1",
            "sectionIdentifier": "[v1]",
            "subSectionLabel": "",
          },
          {
            "content": "Chorus",
            "sectionGroup": "Chorus",
            "sectionIdentifier": "[c]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 3",
            "sectionGroup": "Verse 2",
            "sectionIdentifier": "[v2]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should correctly add the sub sections of a song (for bridge)', () => {
    expect(
      parseSong(
        createAdvancedSongMock([
          ['b', ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE)],

          ['b2', 'Section 2'],
          ['b3', 'Section 3'],
        ]),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[b]",
          "[b2]",
          "[b3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Bridge",
            "sectionIdentifier": "[b]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 2",
            "sectionGroup": "Bridge 2",
            "sectionIdentifier": "[b2]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 3",
            "sectionGroup": "Bridge 3",
            "sectionIdentifier": "[b3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should correctly add the sub sections of a song (for chorus)', () => {
    expect(
      parseSong(
        createAdvancedSongMock([
          ['c', ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE)],

          ['c2', 'Section 2'],
          ['c3', 'Section 3'],
        ]),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[c]",
          "[c2]",
          "[c3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Chorus",
            "sectionIdentifier": "[c]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 2",
            "sectionGroup": "Chorus 2",
            "sectionIdentifier": "[c2]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 3",
            "sectionGroup": "Chorus 3",
            "sectionIdentifier": "[c3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should correctly add the sub sections of a song (for prechorus)', () => {
    expect(
      parseSong(
        createAdvancedSongMock([
          ['p', ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE)],

          ['p2', 'Section 2'],
          ['p3', 'Section 3'],
        ]),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[p]",
          "[p2]",
          "[p3]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Prechorus",
            "sectionIdentifier": "[p]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 2",
            "sectionGroup": "Prechorus 2",
            "sectionIdentifier": "[p2]",
            "subSectionLabel": "",
          },
          {
            "content": "Section 3",
            "sectionGroup": "Prechorus 3",
            "sectionIdentifier": "[p3]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });

  it('should correctly not add the sub sections of a song (for ending)', () => {
    expect(
      parseSong(
        createAdvancedSongMock([
          ['e', ['Subsection 1.1', 'Subsection 1.2'].join(DOUBLE_LINE_TUPLE)],
        ]),
      ),
    ).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[e]",
        ],
        "title": "My custom title",
        "verses": [
          {
            "content": "Subsection 1.1

      Subsection 1.2",
            "sectionGroup": "Ending",
            "sectionIdentifier": "[e]",
            "subSectionLabel": "",
          },
        ],
      }
    `);
  });
});
