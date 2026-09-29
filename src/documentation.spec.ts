import fs from 'fs';
import path from 'path';
import { getMatchingGroup } from './proPresenterMatchingGroupDeriver';
import { parseSong } from './songsParser';

// Keeps the Markdown honest: examples must parse, tables must match the code, and links must resolve.

const ROOT = path.join(__dirname, '..');
const IGNORED_DIRS = ['.git', '.idea', 'node_modules'];

const readDoc = (relativePath: string) =>
  fs.readFileSync(path.join(ROOT, relativePath), 'utf8');

const findMarkdownFiles = (dir = ROOT): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (
      IGNORED_DIRS.includes(entry.name) ||
      entry.name.startsWith('out_temp_')
    ) {
      return [];
    }

    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return findMarkdownFiles(entryPath);
    }

    return entry.name.endsWith('.md') ? [path.relative(ROOT, entryPath)] : [];
  });

const FENCED_BLOCK = /^```(\w*)\n([\s\S]*?)^```$/gm;

const getSongExamples = (markdown: string) =>
  [...markdown.matchAll(FENCED_BLOCK)]
    .filter(
      ([, language, body]) => language === 'text' && body.startsWith('[title]'),
    )
    .map(([, , body]) => body);

const withoutFencedBlocks = (markdown: string) =>
  markdown.replace(FENCED_BLOCK, '');

const getBacktickedValues = (value: string) =>
  [...value.matchAll(/`([^`]+)`/g)].map(([, inner]) => inner);

const getSection = (markdown: string, heading: string) => {
  const start = markdown.indexOf(`## ${heading}\n`);
  const end = markdown.indexOf('\n## ', start + 1);

  return markdown.slice(start, end === -1 ? undefined : end);
};

const getTableRows = (markdown: string) =>
  markdown
    .split('\n')
    .filter((line) => line.startsWith('|') && !/^\|\s*-/.test(line))
    .slice(1)
    .map((line) =>
      line
        .split('|')
        .slice(1, -1)
        .map((cell) => cell.trim()),
    );

// GitHub's heading anchors: lower case, punctuation dropped, spaces as dashes.
const toAnchor = (heading: string) =>
  heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');

const getAnchors = (markdown: string) => {
  const counts: Record<string, number> = {};

  return withoutFencedBlocks(markdown)
    .split('\n')
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => {
      const anchor = toAnchor(line.replace(/^#+\s/, ''));
      const count = counts[anchor] ?? 0;
      counts[anchor] = count + 1;

      return count ? `${anchor}-${count}` : anchor;
    });
};

const getRelativeLinks = (markdown: string) =>
  [...withoutFencedBlocks(markdown).matchAll(/\]\(([^)\s]+)\)/g)]
    .map(([, target]) => target)
    .filter((target) => !/^(https?:|mailto:)/.test(target));

const SONG_FORMAT = 'docs/song-format.md';
const MARKDOWN_FILES = findMarkdownFiles();

describe('documentation', () => {
  describe('song examples', () => {
    it.each(['README.md', SONG_FORMAT])(
      'parses every song example in %s',
      (file) => {
        const examples = getSongExamples(readDoc(file));

        expect(examples).not.toHaveLength(0);
        examples.forEach((example) => {
          expect(parseSong(example).id).toEqual(expect.any(String));
        });
      },
    );

    it('keeps the README example in sync with the song format example', () => {
      const [readmeSong] = getSongExamples(readDoc('README.md')).map(parseSong);
      const [formatSong] = getSongExamples(readDoc(SONG_FORMAT)).map(parseSong);

      expect(readmeSong).toEqual(formatSong);
    });

    it('labels the documented sub-sections as described', () => {
      const [, subSectionSong] = getSongExamples(readDoc(SONG_FORMAT)).map(
        parseSong,
      );

      expect(
        subSectionSong.verses.map(({ sectionGroup, subSectionLabel }) => [
          sectionGroup,
          subSectionLabel,
        ]),
      ).toEqual([
        ['Verse 1', '1/2'],
        ['Verse 1', '2/2'],
        ['Chorus', ''],
      ]);
    });
  });

  describe('section codes', () => {
    const songFormat = readDoc(SONG_FORMAT);
    const rows = getTableRows(getSection(songFormat, 'Section codes'));

    it.each(rows.map(([section, codes, groups]) => [section, codes, groups]))(
      'maps the documented %s codes to their ProPresenter groups',
      (_section, codes, groups) => {
        const documentedCodes = getBacktickedValues(codes);
        const documentedGroups = getBacktickedValues(groups);

        expect(documentedCodes).toHaveLength(documentedGroups.length);
        expect(documentedCodes.map(getMatchingGroup)).toEqual(documentedGroups);
      },
    );

    it('rejects the codes documented as invalid', () => {
      const invalidCodesLine = getSection(songFormat, 'What fails a deploy')
        .split('\n')
        .find((line) =>
          line.includes('uses a code outside the table'),
        ) as string;
      const invalidCodes = getBacktickedValues(invalidCodesLine);

      expect(invalidCodes).not.toHaveLength(0);
      invalidCodes.forEach((code) => {
        expect(() => getMatchingGroup(code)).toThrow(
          `Unknown song sectionIdentifier: ${code}`,
        );
      });
    });
  });

  describe('links', () => {
    it.each(MARKDOWN_FILES)('resolves every relative link in %s', (file) => {
      const brokenLinks = getRelativeLinks(readDoc(file)).filter((link) => {
        const [linkPath, anchor] = link.split('#');
        const targetPath = linkPath
          ? path.join(ROOT, path.dirname(file), decodeURIComponent(linkPath))
          : path.join(ROOT, file);

        if (!fs.existsSync(targetPath)) {
          return true;
        }

        return (
          Boolean(anchor) &&
          targetPath.endsWith('.md') &&
          !getAnchors(fs.readFileSync(targetPath, 'utf8')).includes(anchor)
        );
      });

      expect(brokenLinks).toEqual([]);
    });
  });
});
