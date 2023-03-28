import { SongSectionLabel } from './SongSectionLabel';

describe('SongSectionLabel', () => {
  it('should work correctly', () => {
    expect(SongSectionLabel).toMatchInlineSnapshot(`
      {
        "[1]": "Verse 1",
        "[2]": "Verse 2",
        "[3]": "Verse 3",
        "[4]": "Verse 4",
        "[5]": "Verse 5",
        "[6]": "Verse 6",
        "[7]": "Verse 7",
        "[8]": "Verse 8",
        "[bridge 2]": "Bridge 2",
        "[bridge]": "Bridge",
        "[chorus 2]": "Chorus 2",
        "[chorus]": "Chorus",
        "[ending]": "Ending",
        "[prechorus 2]": "Prechorus 2",
        "[prechorus]": "Prechorus",
        "[sequence]": "Sequence",
        "[title]": "Title",
      }
    `);
  });
});
