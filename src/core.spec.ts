import {
  parseDateFromVersionedDir,
  getMetaSectionsFromTitle,
  getSongInSectionTuples,
  getTitleWithoutMeta,
  getVersionedDir,
  getClosestVersionedDir,
} from './core';
import { SIMPLE_SONG_MOCK_FILE_CONTENT } from '../mocks';

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-02-19T11:12:13.000Z').getTime());

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
          'Any title {alternative: {Any other title}, composer: {CustomAuthor}, contentHash: {#customHash}, id: {customId}}',
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
          'Any title {alternative: {Any other title}, composer: {CustomAuthor}, contentHash: {#customHash}, id: {customId}}',
        ),
      ).toMatchInlineSnapshot(`
        {
          "alternative": "Any other title",
          "composer": "CustomAuthor",
          "contentHash": "#customHash",
          "id": "customId",
        }
      `);
    });
  });

  describe('getClosestVersionedDir', () => {
    it('should work correctly', () => {
      expect(getVersionedDir()).toMatchInlineSnapshot(`"2023-02-19-13:12:13"`);
    });
  });

  describe('parseDateFromVersionedDir', () => {
    it('should work correctly', () => {
      expect(
        parseDateFromVersionedDir('2023-02-19-11:12:13'),
      ).toMatchInlineSnapshot(`2023-02-19T09:12:13.000Z`);

      expect(
        parseDateFromVersionedDir('2023-08-08-19:17:25'),
      ).toMatchInlineSnapshot(`2023-08-08T16:17:25.000Z`);
    });
  });

  describe('getClosestVersionedDir', () => {
    it('should work correctly', () => {
      expect(
        getClosestVersionedDir(
          parseDateFromVersionedDir('2023-26-20-11:12:13'),
          [
            parseDateFromVersionedDir('2023-02-20-11:12:13'),
            parseDateFromVersionedDir('2023-02-19-11:12:13'),
            parseDateFromVersionedDir('2023-02-23-11:12:13'),
            parseDateFromVersionedDir('2023-02-24-11:12:13'),
          ],
        ),
      ).toMatchInlineSnapshot(`2023-02-24T09:12:13.000Z`);
    });
  });
});
