import { getMatchingGroup } from './proPresenterMatchingGroupDeriver';

describe('proPresenterMatchingGroupDeriver', () => {
  it('should identify the labels correctly for `verse`', () => {
    expect(() => getMatchingGroup('v')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: v"`,
    );

    expect(getMatchingGroup('v1')).toEqual('Verse 1');
    expect(getMatchingGroup('v2')).toEqual('Verse 2');
    expect(getMatchingGroup('v3')).toEqual('Verse 3');
    expect(getMatchingGroup('v4')).toEqual('Verse 4');
    expect(getMatchingGroup('v5')).toEqual('Verse 5');
    expect(getMatchingGroup('v6')).toEqual('Verse 6');
    expect(getMatchingGroup('v7')).toEqual('Verse 7');
    expect(getMatchingGroup('v8')).toEqual('Verse 8');
    expect(getMatchingGroup('v9')).toEqual('Verse 9');
    expect(getMatchingGroup('v10')).toEqual('Verse 10');
    expect(getMatchingGroup('v11')).toEqual('Verse 11');
    expect(getMatchingGroup('v12')).toEqual('Verse 12');

    expect(getMatchingGroup('v99')).toEqual('Verse 99');
  });

  it('should identify the labels correctly for `chorus`', () => {
    expect(getMatchingGroup('c')).toEqual('Chorus');

    expect(() => getMatchingGroup('c1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: c1"`,
    );
    expect(getMatchingGroup('c2')).toEqual('Chorus 2');
    expect(getMatchingGroup('c3')).toEqual('Chorus 3');
    expect(getMatchingGroup('c4')).toEqual('Chorus 4');
    expect(getMatchingGroup('c5')).toEqual('Chorus 5');
    expect(getMatchingGroup('c6')).toEqual('Chorus 6');
    expect(getMatchingGroup('c7')).toEqual('Chorus 7');
    expect(getMatchingGroup('c8')).toEqual('Chorus 8');
    expect(getMatchingGroup('c9')).toEqual('Chorus 9');
    expect(getMatchingGroup('c10')).toEqual('Chorus 10');
    expect(getMatchingGroup('c11')).toEqual('Chorus 11');
    expect(getMatchingGroup('c12')).toEqual('Chorus 12');

    expect(getMatchingGroup('c99')).toEqual('Chorus 99');
  });

  it('should identify the labels correctly for `prechorus`', () => {
    expect(getMatchingGroup('p')).toEqual('Prechorus');

    expect(() => getMatchingGroup('p1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: p1"`,
    );

    expect(getMatchingGroup('p2')).toEqual('Prechorus 2');
    expect(getMatchingGroup('p3')).toEqual('Prechorus 3');
    expect(getMatchingGroup('p4')).toEqual('Prechorus 4');
    expect(getMatchingGroup('p5')).toEqual('Prechorus 5');
    expect(getMatchingGroup('p6')).toEqual('Prechorus 6');
    expect(getMatchingGroup('p7')).toEqual('Prechorus 7');
    expect(getMatchingGroup('p8')).toEqual('Prechorus 8');
    expect(getMatchingGroup('p9')).toEqual('Prechorus 9');
    expect(getMatchingGroup('p10')).toEqual('Prechorus 10');
    expect(getMatchingGroup('p11')).toEqual('Prechorus 11');
    expect(getMatchingGroup('p12')).toEqual('Prechorus 12');

    expect(getMatchingGroup('p99')).toEqual('Prechorus 99');
  });

  it('should identify the labels correctly for `bridge`', () => {
    expect(getMatchingGroup('b')).toEqual('Bridge');

    expect(() => getMatchingGroup('b1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: b1"`,
    );

    expect(getMatchingGroup('b2')).toEqual('Bridge 2');
    expect(getMatchingGroup('b3')).toEqual('Bridge 3');
    expect(getMatchingGroup('b4')).toEqual('Bridge 4');
    expect(getMatchingGroup('b5')).toEqual('Bridge 5');
    expect(getMatchingGroup('b6')).toEqual('Bridge 6');
    expect(getMatchingGroup('b7')).toEqual('Bridge 7');
    expect(getMatchingGroup('b8')).toEqual('Bridge 8');
    expect(getMatchingGroup('b9')).toEqual('Bridge 9');
    expect(getMatchingGroup('b10')).toEqual('Bridge 10');
    expect(getMatchingGroup('b11')).toEqual('Bridge 11');
    expect(getMatchingGroup('b12')).toEqual('Bridge 12');

    expect(getMatchingGroup('b99')).toEqual('Bridge 99');
  });

  it('should identify the labels correctly for `ending`', () => {
    expect(getMatchingGroup('e')).toEqual('Ending');

    expect(() => getMatchingGroup('e1')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: e1"`,
    );
  });

  it('should throw for unsupported song sections', () => {
    expect(() => getMatchingGroup('x')).toThrowErrorMatchingInlineSnapshot(
      `"Unknown song sectionIdentifier: x"`,
    );
  });
});
