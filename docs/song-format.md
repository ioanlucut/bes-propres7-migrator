# Song format

Each song is one UTF-8 `.txt` file. Blocks start with a `[marker]` line; `[title]` must come first and `[sequence]` second, followed by the sections in any order.

```text
[title]
Blessed Assurance {composer: {Phoebe Knapp}, writer: {Fanny Crosby}, id: {x7Qm2Lp9RtVb4Nc8Kd1Ws3}, contentHash: {5a1f09}}

[sequence]
v1,c,v2,c

[v1]
Blessed assurance, Jesus is mine!
Oh, what a foretaste of glory divine!
Heir of salvation, purchase of God,
Born of His Spirit, washed in His blood.

[c]
This is my story, this is my song,
Praising my Savior all the day long;
This is my story, this is my song,
Praising my Savior all the day long.

[v2]
Perfect submission, perfect delight,
Visions of rapture now burst on my sight;
Angels descending bring from above
Echoes of mercy, whispers of love.
```

Lyrics can use any Unicode text. The BES library is in Romanian, and letters such as `ă`, `ș` and `ț` and the quotes `„ ”` are escaped for ProPresenter's RTF automatically; see [ProPresenter format](propresenter-format.md#slide-text-is-rtf).

## Title and metadata

The first line of `[title]` is the song title, optionally followed by metadata in braces as `key: {value}` pairs. The migrator reads two keys and ignores the rest, which [`bes-lyrics`](https://github.com/ioanlucut/bes-lyrics) uses for its own tooling:

| Key           | Required                | Used for                                                                                                          |
| ------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`          | yes                     | The song's stable identity across edits and renames; a deploy stops if any song lacks one or two songs share one. |
| `contentHash` | for incremental deploys | Detects changed lyrics; see [Architecture](architecture.md#what-ships).                                           |

## Sequence

`[sequence]` lists section codes separated by commas, in the order they are sung. A code may repeat, such as the chorus in `v1,c,v2,c`, and every section defined in the file must appear in the sequence at least once. The sequence becomes the song's ProPresenter arrangement.

## Section codes

| Section    | Codes         | ProPresenter group            | Notes                                     |
| ---------- | ------------- | ----------------------------- | ----------------------------------------- |
| Verse      | `v1`, `v2`, … | `Verse 1`, `Verse 2`, …       | Always numbered; `v` alone is invalid.    |
| Pre-chorus | `p`, `p2`, …  | `Prechorus`, `Prechorus 2`, … | The first is unnumbered; `p1` is invalid. |
| Chorus     | `c`, `c2`, …  | `Chorus`, `Chorus 2`, …       | Same numbering as pre-chorus.             |
| Bridge     | `b`, `b2`, …  | `Bridge`, `Bridge 2`, …       | Same numbering as pre-chorus.             |
| Recital    | `s`, `s2`, …  | `Recital`, `Recital 2`, …     | Same numbering as pre-chorus.             |
| Ending     | `e`           | `Ending`                      | One per song.                             |

## Sub-sections

A section too long for one slide can be split with a dot. Each part becomes its own slide in the same group, labelled with its position among the parts in the sequence: below, `v1.1` and `v1.2` both belong to `Verse 1` and are labelled `1/2` and `2/2`. Sub-sections work for verses, pre-choruses, choruses, bridges and recitals; the base number is written out, as in `c1.1` for the first chorus.

```text
[title]
A long first verse {id: {example-sub-sections}, contentHash: {1}}

[sequence]
v1.1,v1.2,c

[v1.1]
First half of verse one

[v1.2]
Second half of verse one

[c]
Chorus
```

## What fails a deploy

The migrator stops before converting or uploading anything when a song:

- defines a section that is missing from `[sequence]`;
- uses a code outside the table above, such as `v`, `c1` or `x`;
- has no `id`, or shares its `id` with another song.

The error names the offending section, file or `id`.
