import {
  getPreviousDeploymentDirectory,
  getSongDiffFromManifest,
  transformManifestToHashMapForFasterRetrievals,
} from './converterService';
import { parseDateFromVersionedDir } from './core';

jest
  .useFakeTimers()
  .setSystemTime(new Date('2023-02-19T11:12:13.000Z').getTime());

const ANY_SINGLE_FILE_MANIFEST = {
  updatedOn: '',
  inventory: [
    {
      id: 'nYiNGfX9UX8pjzMcJPHqQG',
      fileName: 'Ekklesia - Un cantec de lauda.txt',
      contentHash: '0f2f14',
    },
  ],
};

describe('converterService', () => {
  describe('getPreviousDeploymentDirectory', () => {
    it('should work correctly', () => {
      expect(
        getPreviousDeploymentDirectory(
          parseDateFromVersionedDir('2023-26-20-11:12:13'),
          [
            {
              deploymentDirDate: parseDateFromVersionedDir(
                '2023-02-20-11:12:13',
              ),

              deploymentDir: '2023-02-20-11:12:13',
            },
            {
              deploymentDirDate: parseDateFromVersionedDir(
                '2023-02-24-11:12:13',
              ),

              deploymentDir: '2023-02-24-11:12:13',
            },
            {
              deploymentDirDate: parseDateFromVersionedDir(
                '2023-02-25-11:12:13',
              ),

              deploymentDir: '2023-02-25-11:12:13',
            },
            {
              deploymentDirDate: parseDateFromVersionedDir(
                '2023-02-25-11:13:13',
              ),

              deploymentDir: '2023-02-25-11:13:13',
            },
          ],
        ),
      ).toMatchInlineSnapshot(`"2023-02-25-11:13:13"`);
    });
  });

  describe('transformManifestToHashMapForFasterRetrievals', () => {
    it('should work correctly', () => {
      expect(
        transformManifestToHashMapForFasterRetrievals([
          {
            id: 'nYiNGfX9UX8pjzMcJPHqQG',
            fileName: 'Ekklesia - Un cantec de lauda.txt',
            contentHash: '0f2f14',
          },
        ]),
      ).toMatchInlineSnapshot(`
        {
          "nYiNGfX9UX8pjzMcJPHqQG": {
            "contentHash": "0f2f14",
            "fileName": "Ekklesia - Un cantec de lauda.txt",
            "id": "nYiNGfX9UX8pjzMcJPHqQG",
          },
        }
      `);
    });
  });

  describe('getSongDiffFromManifest', () => {
    it('should return empty arrays for the same manifest content', () => {
      expect(
        getSongDiffFromManifest(
          ANY_SINGLE_FILE_MANIFEST,
          ANY_SINGLE_FILE_MANIFEST,
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [],
          "toBeRemovedFileNames": [],
        }
      `);
    });

    it('should spot correctly an updated song based on the `contentHash`', () => {
      expect(
        getSongDiffFromManifest(
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME.txt',
                contentHash: 'ANY_UPDATED_C_HASH',
              },
            ],
          },
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME.txt',
                contentHash: 'ANY_C_HASH',
              },
            ],
          },
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [
            {
              "contentHash": "ANY_UPDATED_C_HASH",
              "fileName": "ANY_FILE_NAME.txt",
              "id": "1",
            },
          ],
          "toBeRemovedFileNames": [],
        }
      `);
    });

    it('should spot correctly an updated song based on the `contentHash` even if the file name has changed (and mark as deleted)', () => {
      expect(
        getSongDiffFromManifest(
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_UPDATED_FILE_NAME.txt',
                contentHash: 'ANY_UPDATED_C_HASH',
              },
            ],
          },
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME.txt',
                contentHash: 'ANY_C_HASH',
              },
            ],
          },
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [
            {
              "contentHash": "ANY_UPDATED_C_HASH",
              "fileName": "ANY_UPDATED_FILE_NAME.txt",
              "id": "1",
            },
          ],
          "toBeRemovedFileNames": [
            "ANY_FILE_NAME.txt",
          ],
        }
      `);
    });

    it('should spot correctly a new song based on the `id` not known in the previous manifest', () => {
      expect(
        getSongDiffFromManifest(
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME_1.txt',
                contentHash: 'ANY_C_HASH',
              },
              {
                id: '2',
                fileName: 'ANY_NEW_FILE_NAME.txt',
                contentHash: 'ANY_NEW_HASH',
              },
            ],
          },
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME_1.txt',
                contentHash: 'ANY_C_HASH',
              },
            ],
          },
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [
            {
              "contentHash": "ANY_NEW_HASH",
              "fileName": "ANY_NEW_FILE_NAME.txt",
              "id": "2",
            },
          ],
          "toBeRemovedFileNames": [],
        }
      `);
    });

    it('should mark songs as to be deleted correctly', () => {
      expect(
        getSongDiffFromManifest(
          {
            updatedOn: '',
            inventory: [],
          },
          {
            updatedOn: '',
            inventory: [
              {
                id: '1',
                fileName: 'ANY_FILE_NAME_1.txt',
                contentHash: 'ANY_C_HASH',
              },
              {
                id: '2',
                fileName: 'ANY_NEW_FILE_NAME.txt',
                contentHash: 'ANY_NEW_HASH',
              },
            ],
          },
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [],
          "toBeRemovedFileNames": [
            "ANY_FILE_NAME_1.txt",
            "ANY_NEW_FILE_NAME.txt",
          ],
        }
      `);
    });

    it('should work correctly for file renames only (no changes)', () => {
      expect(
        getSongDiffFromManifest(
          {
            inventory: [
              {
                id: 'de8UGb2cKEsThEuMwFvjQq',
                fileName: 'A Mea iubire si mantuire.txt',
                contentHash: 'a83f0e',
              },
            ],

            updatedOn: '2023-09-25-17:14:16',
          },
          {
            inventory: [
              {
                id: 'de8UGb2cKEsThEuMwFvjQq',
                fileName: 'A mea iubire si mantuire.txt',
                contentHash: 'a83f0e',
              },
            ],

            updatedOn: '2023-09-25-17:14:16',
          },
        ),
      ).toMatchInlineSnapshot(`
        {
          "newOrUpdatedSongs": [
            {
              "contentHash": "a83f0e",
              "fileName": "A Mea iubire si mantuire.txt",
              "id": "de8UGb2cKEsThEuMwFvjQq",
            },
          ],
          "toBeRemovedFileNames": [
            "A mea iubire si mantuire.txt",
          ],
        }
      `);
    });
  });
});
