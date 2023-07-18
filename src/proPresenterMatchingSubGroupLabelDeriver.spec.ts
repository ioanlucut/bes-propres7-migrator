import { getMatchingSubGroupLabel } from './proPresenterMatchingSubGroupLabelDeriver';

describe('proPresenterMatchingSubGroupLabelDeriver', () => {
  it('should identify the sub labels correctly for `verse`', () => {
    expect(getMatchingSubGroupLabel('v1', ['v1'])).toMatchInlineSnapshot(`""`);

    expect(
      getMatchingSubGroupLabel('v1.1', ['v1.1', 'v1.2', 'v1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"1/3"`);

    expect(
      getMatchingSubGroupLabel('v1.2', ['v1.1', 'v1.2', 'v1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"2/3"`);

    expect(
      getMatchingSubGroupLabel('v1.3', [
        'v1.1',
        'v1.2',
        'v1.3',
        'e',
        'b2.1',
        'v1.1',
        'v1.2',
        'v1.3',
      ]),
    ).toMatchInlineSnapshot(`"3/3"`);
  });

  it('should identify the sub labels correctly for `chorus`', () => {
    expect(getMatchingSubGroupLabel('c', ['c'])).toMatchInlineSnapshot(`""`);

    expect(
      getMatchingSubGroupLabel('c1.1', ['c1.1', 'c1.2', 'c1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"1/3"`);

    expect(
      getMatchingSubGroupLabel('c1.2', ['c1.1', 'c1.2', 'c1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"2/3"`);

    expect(
      getMatchingSubGroupLabel('c1.3', ['c1.1', 'c1.2', 'c1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"3/3"`);
  });

  it('should identify the sub labels correctly for `pre-chorus`', () => {
    expect(getMatchingSubGroupLabel('p', ['p'])).toMatchInlineSnapshot(`""`);

    expect(
      getMatchingSubGroupLabel('p1.1', ['p1.1', 'p1.2', 'p1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"1/3"`);

    expect(
      getMatchingSubGroupLabel('p1.2', ['p1.1', 'p1.2', 'p1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"2/3"`);

    expect(
      getMatchingSubGroupLabel('p1.3', ['p1.1', 'p1.2', 'p1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"3/3"`);
  });

  it('should identify the sub labels correctly for `bridge`', () => {
    expect(getMatchingSubGroupLabel('b', ['b'])).toMatchInlineSnapshot(`""`);

    expect(
      getMatchingSubGroupLabel('b1.1', ['b1.1', 'b1.2', 'b1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"1/3"`);

    expect(
      getMatchingSubGroupLabel('b1.2', ['b1.1', 'b1.2', 'b1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"2/3"`);

    expect(
      getMatchingSubGroupLabel('b1.3', ['b1.1', 'b1.2', 'b1.3', 'e', 'b2.1']),
    ).toMatchInlineSnapshot(`"3/3"`);
  });
});
