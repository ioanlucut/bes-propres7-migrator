import { parseSong } from './songsParser';

const SIMPLE_SONG = `[title]
My custom title {Alternative: {The Cause Of Christ}, Author: {Kari Jobe}}

[sequence]
1,2,3,4,c,t,b,w,e,p,q,c,3,c

[1]
Row 1
Row 2

[2]
Row 3
Row 4

[3]
Row 5
Row 6

[4]
Row 7
Row 8

[bridge]
Row bridge 1
Row bridge 2

[bridge 2]
Row bridge 1
Row bridge 2

[chorus]
Row chorus 1
Row chorus 2

[chorus 2]
Row chorus 1
Row chorus 2

[ending]
Row ending 1
Row ending 2

[prechorus]
Row prechorus 1
Row prechorus 2

[prechorus 2]
Row prechorus 1
Row prechorus 2

[title]
Row title 1
Row title 2

[sequence]
Row sequence 1
Row sequence 2`;

const SONG_WITH_SEQUENCE = `[title]
My custom title {Alternative: {The Cause Of Christ}, Author: {Kari Jobe}}

[sequence]
1,2,3,4,c,t,b,w,e,p,q,c,3,c,c

[1]
Row 1

[2]
Row 3
Row 4

[2]
Row 3
Row 4

[3]
Row 5
Row 6

[4]
Row 7
Row 8

[bridge]
Row bridge 1
Row bridge 2

[bridge 2]
Row bridge 1
Row bridge 2

[chorus]
Row chorus 1
Row chorus 2

[chorus 2]
Row chorus 1
Row chorus 2

[ending]
Row ending 1
Row ending 2

[prechorus]
Row prechorus 1
Row prechorus 2

[prechorus 2]
Row prechorus 1
Row prechorus 2

[title]
Row title 1
Row title 2

[sequence]
Row sequence 1
Row sequence 2`;

const SONG_WITH_MISMATCHING_SEQUENCE = `[title]
My custom title {Alternative: {The Cause Of Christ}, Author: {Kari Jobe}}

[sequence]
1,c,2,c,3,c,4,c

[1]
Row 1

[2]
Row 3

[3]
Row 5

[4]
Row 7

[bridge]
Row bridge 1

[bridge 2]
Row bridge 1

[chorus]
Row chorus 1

[chorus 2]
Row chorus 1

[ending]
Row ending 1

[prechorus]
Row prechorus 1

[prechorus 2]
Row prechorus 1

[title]
Row title 1

[sequence]
Row sequence 2`;

describe('songsParser', () => {
  it('should work correctly with a simple song', () => {
    expect(parseSong(SIMPLE_SONG)).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[1]",
          "[2]",
          "[3]",
          "[4]",
          "[chorus]",
          "[chorus 2]",
          "[bridge]",
          "[bridge 2]",
          "[ending]",
          "[prechorus]",
          "[prechorus 2]",
          "[chorus]",
          "[3]",
          "[chorus]",
        ],
        "title": "Row title 1
      Row title 2",
        "verses": [
          {
            "content": "Row 1
      Row 2",
            "section": "[1]",
            "sectionLabel": "Verse 1",
          },
          {
            "content": "Row 3
      Row 4",
            "section": "[2]",
            "sectionLabel": "Verse 2",
          },
          {
            "content": "Row 5
      Row 6",
            "section": "[3]",
            "sectionLabel": "Verse 3",
          },
          {
            "content": "Row 7
      Row 8",
            "section": "[4]",
            "sectionLabel": "Verse 4",
          },
          {
            "content": "Row bridge 1
      Row bridge 2",
            "section": "[bridge]",
            "sectionLabel": "Bridge",
          },
          {
            "content": "Row bridge 1
      Row bridge 2",
            "section": "[bridge 2]",
            "sectionLabel": "Bridge 2",
          },
          {
            "content": "Row chorus 1
      Row chorus 2",
            "section": "[chorus]",
            "sectionLabel": "Chorus",
          },
          {
            "content": "Row chorus 1
      Row chorus 2",
            "section": "[chorus 2]",
            "sectionLabel": "Chorus 2",
          },
          {
            "content": "Row ending 1
      Row ending 2",
            "section": "[ending]",
            "sectionLabel": "Ending",
          },
          {
            "content": "Row prechorus 1
      Row prechorus 2",
            "section": "[prechorus]",
            "sectionLabel": "Prechorus",
          },
          {
            "content": "Row prechorus 1
      Row prechorus 2",
            "section": "[prechorus 2]",
            "sectionLabel": "Prechorus 2",
          },
        ],
      }
    `);
  });

  it('should correctly follow the sequence', () => {
    expect(parseSong(SONG_WITH_SEQUENCE)).toMatchInlineSnapshot(`
      {
        "sequence": [
          "[1]",
          "[2]",
          "[3]",
          "[4]",
          "[chorus]",
          "[chorus 2]",
          "[bridge]",
          "[bridge 2]",
          "[ending]",
          "[prechorus]",
          "[prechorus 2]",
          "[chorus]",
          "[3]",
          "[chorus]",
          "[chorus]",
        ],
        "title": "Row title 1
      Row title 2",
        "verses": [
          {
            "content": "Row 1",
            "section": "[1]",
            "sectionLabel": "Verse 1",
          },
          {
            "content": "Row 3
      Row 4",
            "section": "[2]",
            "sectionLabel": "Verse 2",
          },
          {
            "content": "Row 3
      Row 4",
            "section": "[2]",
            "sectionLabel": "Verse 2",
          },
          {
            "content": "Row 5
      Row 6",
            "section": "[3]",
            "sectionLabel": "Verse 3",
          },
          {
            "content": "Row 7
      Row 8",
            "section": "[4]",
            "sectionLabel": "Verse 4",
          },
          {
            "content": "Row bridge 1
      Row bridge 2",
            "section": "[bridge]",
            "sectionLabel": "Bridge",
          },
          {
            "content": "Row bridge 1
      Row bridge 2",
            "section": "[bridge 2]",
            "sectionLabel": "Bridge 2",
          },
          {
            "content": "Row chorus 1
      Row chorus 2",
            "section": "[chorus]",
            "sectionLabel": "Chorus",
          },
          {
            "content": "Row chorus 1
      Row chorus 2",
            "section": "[chorus 2]",
            "sectionLabel": "Chorus 2",
          },
          {
            "content": "Row ending 1
      Row ending 2",
            "section": "[ending]",
            "sectionLabel": "Ending",
          },
          {
            "content": "Row prechorus 1
      Row prechorus 2",
            "section": "[prechorus]",
            "sectionLabel": "Prechorus",
          },
          {
            "content": "Row prechorus 1
      Row prechorus 2",
            "section": "[prechorus 2]",
            "sectionLabel": "Prechorus 2",
          },
        ],
      }
    `);
  });

  it('should throw if the sequence does not contain all the sections', () => {
    expect(() =>
      parseSong(SONG_WITH_MISMATCHING_SEQUENCE),
    ).toThrowErrorMatchingInlineSnapshot(
      `"The following are present in the content but not in the sequence: [bridge],[bridge 2],[chorus 2],[ending],[prechorus],[prechorus 2]"`,
    );
  });
});
