import {
  getMetaSectionsFromTitle,
  getSongInSectionTuples,
  getTitleWithoutMeta,
} from './core';
import { SIMPLE_SONG_MOCK_FILE_CONTENT } from '../mocks';

describe('core', () => {
  describe('getSongInSectionTuples', () => {
    it('should work correctly', () => {
      expect(getSongInSectionTuples(SIMPLE_SONG_MOCK_FILE_CONTENT))
        .toMatchInlineSnapshot(`
        [
          "[title]",
          "My custom title",
          "[sequence]",
          "v1,v2,v3,p,p2,p3,c,c2,c3,b,b2,b3",
          "[v1]",
          "Row for v1",
          "[v2]",
          "Row for v2",
          "[v3]",
          "Row for v3",
          "[p]",
          "Row for p",
          "[p2]",
          "Row for p2",
          "[p3]",
          "Row for p3",
          "[c]",
          "Row for c",
          "[c2]",
          "Row for c2",
          "[c3]",
          "Row for c3",
          "[b]",
          "Row for b",
          "[b2]",
          "Row for b2",
          "[b3]",
          "Row for b3",
        ]
      `);
    });
  });

  describe('getTitleWithoutMeta', () => {
    it('should work correctly', () => {
      expect(
        getTitleWithoutMeta(
          'Any title {alternative: {Any other title}, author: {CustomAuthor}, contentHash: {#customHash}, id: {customId}}',
        ),
      ).toMatchInlineSnapshot(`"Any title"`);

      expect(getTitleWithoutMeta('Any title ')).toMatchInlineSnapshot(
        `"Any title"`,
      );
    });
  });

  describe('getMetaSectionsFromTitle', () => {
    it('should work correctly', () => {
      expect(
        getMetaSectionsFromTitle(
          'Any title {alternative: {Any other title}, author: {CustomAuthor}, contentHash: {#customHash}, id: {customId}}',
        ),
      ).toMatchInlineSnapshot(`
        {
          "alternative": "Any other title",
          "author": "CustomAuthor",
          "contentHash": "#customHash",
          "id": "customId",
        }
      `);
    });
  });
});
