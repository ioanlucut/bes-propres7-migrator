import { parseSong } from './songsParser';

const SIMPLE_SONG = `[title]
My custom title

[sequence]
v1,v2,v3,p,p2,p3,c,c2,c3,b,b2,b3

[v1]
Row for v1 

[v2]
Row for v2 

[v3]
Row for v3 

[p]
Row for p 

[p2]
Row for p2 

[p3]
Row for p3 

[c]
Row for c 

[c2]
Row for c2 

[c3]
Row for c3 

[b]
Row for b 

[b2]
Row for b2 

[b3]
Row for b3 

`;

const SONG_WITH_MISMATCHING_SEQUENCE = `[title]
My custom title

[sequence]
v1

[v1]
Row for v1 

[v2]
Row for v2 

[v3]
Row for v3 

[p]
Row for p 

[p2]
Row for p2 

[p3]
Row for p3 

[c]
Row for c 

[c2]
Row for c2 

[c3]
Row for c3 

[b]
Row for b 

[b2]
Row for b2 

[b3]
Row for b3 
`;

describe('songsParser', () => {
  it('should work correctly with a simple song', () => {
    expect(parseSong(SIMPLE_SONG)).toMatchInlineSnapshot(`
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
            "section": "[v1]",
            "sectionLabel": "Verse 1",
          },
          {
            "content": "Row for v2",
            "section": "[v2]",
            "sectionLabel": "Verse 2",
          },
          {
            "content": "Row for v3",
            "section": "[v3]",
            "sectionLabel": "Verse 3",
          },
          {
            "content": "Row for p",
            "section": "[p]",
            "sectionLabel": "Prechorus",
          },
          {
            "content": "Row for p2",
            "section": "[p2]",
            "sectionLabel": "Prechorus 2",
          },
          {
            "content": "Row for p3",
            "section": "[p3]",
            "sectionLabel": "Prechorus 3",
          },
          {
            "content": "Row for c",
            "section": "[c]",
            "sectionLabel": "Chorus",
          },
          {
            "content": "Row for c2",
            "section": "[c2]",
            "sectionLabel": "Chorus 2",
          },
          {
            "content": "Row for c3",
            "section": "[c3]",
            "sectionLabel": "Chorus 3",
          },
          {
            "content": "Row for b",
            "section": "[b]",
            "sectionLabel": "Bridge",
          },
          {
            "content": "Row for b2",
            "section": "[b2]",
            "sectionLabel": "Bridge 2",
          },
          {
            "content": "Row for b3",
            "section": "[b3]",
            "sectionLabel": "Bridge 3",
          },
        ],
      }
    `);
  });

  it('should throw if the sequence does not contain all the sections', () => {
    expect(() =>
      parseSong(SONG_WITH_MISMATCHING_SEQUENCE),
    ).toThrowErrorMatchingInlineSnapshot(
      `"The following are present in the content but not in the sequence: [v2],[v3],[p],[p2],[p3],[c],[c2],[c3],[b],[b2],[b3]"`,
    );
  });
});
