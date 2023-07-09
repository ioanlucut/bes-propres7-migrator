import { deriveSlideLabelFrom } from './slideLabelDeriver';

describe('SongSectionLabel', () => {
  it('should identify the labels correctly for `verse`', () => {
    expect(() => deriveSlideLabelFrom('v')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: v"`,
    );

    expect(deriveSlideLabelFrom('v1')).toEqual('Verse 1');
    expect(deriveSlideLabelFrom('v2')).toEqual('Verse 2');
    expect(deriveSlideLabelFrom('v3')).toEqual('Verse 3');
    expect(deriveSlideLabelFrom('v4')).toEqual('Verse 4');
    expect(deriveSlideLabelFrom('v5')).toEqual('Verse 5');
    expect(deriveSlideLabelFrom('v6')).toEqual('Verse 6');
    expect(deriveSlideLabelFrom('v7')).toEqual('Verse 7');
    expect(deriveSlideLabelFrom('v8')).toEqual('Verse 8');
    expect(deriveSlideLabelFrom('v9')).toEqual('Verse 9');
    expect(deriveSlideLabelFrom('v10')).toEqual('Verse 10');
    expect(deriveSlideLabelFrom('v11')).toEqual('Verse 11');
    expect(deriveSlideLabelFrom('v12')).toEqual('Verse 12');

    expect(deriveSlideLabelFrom('v99')).toEqual('Verse 99');
  });

  it('should identify the labels correctly for `chorus`', () => {
    expect(deriveSlideLabelFrom('c')).toEqual('Chorus');

    expect(() => deriveSlideLabelFrom('c1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: c1"`,
    );
    expect(deriveSlideLabelFrom('c2')).toEqual('Chorus 2');
    expect(deriveSlideLabelFrom('c3')).toEqual('Chorus 3');
    expect(deriveSlideLabelFrom('c4')).toEqual('Chorus 4');
    expect(deriveSlideLabelFrom('c5')).toEqual('Chorus 5');
    expect(deriveSlideLabelFrom('c6')).toEqual('Chorus 6');
    expect(deriveSlideLabelFrom('c7')).toEqual('Chorus 7');
    expect(deriveSlideLabelFrom('c8')).toEqual('Chorus 8');
    expect(deriveSlideLabelFrom('c9')).toEqual('Chorus 9');
    expect(deriveSlideLabelFrom('c10')).toEqual('Chorus 10');
    expect(deriveSlideLabelFrom('c11')).toEqual('Chorus 11');
    expect(deriveSlideLabelFrom('c12')).toEqual('Chorus 12');

    expect(deriveSlideLabelFrom('c99')).toEqual('Chorus 99');
  });

  it('should identify the labels correctly for `prechorus`', () => {
    expect(deriveSlideLabelFrom('p')).toEqual('Prechorus');

    expect(() => deriveSlideLabelFrom('p1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: p1"`,
    );

    expect(deriveSlideLabelFrom('p2')).toEqual('Prechorus 2');
    expect(deriveSlideLabelFrom('p3')).toEqual('Prechorus 3');
    expect(deriveSlideLabelFrom('p4')).toEqual('Prechorus 4');
    expect(deriveSlideLabelFrom('p5')).toEqual('Prechorus 5');
    expect(deriveSlideLabelFrom('p6')).toEqual('Prechorus 6');
    expect(deriveSlideLabelFrom('p7')).toEqual('Prechorus 7');
    expect(deriveSlideLabelFrom('p8')).toEqual('Prechorus 8');
    expect(deriveSlideLabelFrom('p9')).toEqual('Prechorus 9');
    expect(deriveSlideLabelFrom('p10')).toEqual('Prechorus 10');
    expect(deriveSlideLabelFrom('p11')).toEqual('Prechorus 11');
    expect(deriveSlideLabelFrom('p12')).toEqual('Prechorus 12');

    expect(deriveSlideLabelFrom('p99')).toEqual('Prechorus 99');
  });

  it('should identify the labels correctly for `bridge`', () => {
    expect(deriveSlideLabelFrom('b')).toEqual('Bridge');

    expect(() => deriveSlideLabelFrom('b1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: b1"`,
    );

    expect(deriveSlideLabelFrom('b2')).toEqual('Bridge 2');
    expect(deriveSlideLabelFrom('b3')).toEqual('Bridge 3');
    expect(deriveSlideLabelFrom('b4')).toEqual('Bridge 4');
    expect(deriveSlideLabelFrom('b5')).toEqual('Bridge 5');
    expect(deriveSlideLabelFrom('b6')).toEqual('Bridge 6');
    expect(deriveSlideLabelFrom('b7')).toEqual('Bridge 7');
    expect(deriveSlideLabelFrom('b8')).toEqual('Bridge 8');
    expect(deriveSlideLabelFrom('b9')).toEqual('Bridge 9');
    expect(deriveSlideLabelFrom('b10')).toEqual('Bridge 10');
    expect(deriveSlideLabelFrom('b11')).toEqual('Bridge 11');
    expect(deriveSlideLabelFrom('b12')).toEqual('Bridge 12');

    expect(deriveSlideLabelFrom('b99')).toEqual('Bridge 99');
  });

  it('should identify the labels correctly for `ending`', () => {
    expect(deriveSlideLabelFrom('e')).toEqual('Ending');

    expect(() => deriveSlideLabelFrom('e1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: e1"`,
    );
  });

  it('should throw for unsupported song sections', () => {
    expect(() => deriveSlideLabelFrom('x')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song section: x"`,
    );
  });
});
