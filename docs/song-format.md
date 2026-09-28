# Song format

Each song is one UTF-8 `.txt` file. Blocks start with a `[marker]` line; `[title]` must come first and `[sequence]` second, followed by the sections in any order.

```text
[title]
Aceasta mi-e dorința, să Te-onorez {alternative: {_}, composer: {_}, key: {_}, rcId: {59763}, id: {8ipLZddXG3Zy7Hbbo93Vm7}, contentHash: {418384}}

[sequence]
v1,c,v2,c

[v1]
Aceasta mi-e dorința, să Te-onorez,
Cu ființa-ntreagă să Te slăvesc.
Te ador, Stăpâne, și mă închin,
Lauda și onoarea Ți se cuvin!

[c]
Ție-Ți dau inima și sufletul meu,
Pentru Tine vreau să trăiesc!
Domnul meu, Te iubesc!
Zi de zi vreau să-mplinesc
Doar sfântă voia Ta!

[v2]
Vrednic ești de cinste, fii lăudat!
Împărat al slavei, fii înălțat!
Alfa și Omega, de-a pururi viu,
Domn al veșniciei, în veci! Amin!
```

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

A section too long for one slide can be split with a dot: `v1.1`, `v1.2`, `v1.3`. Each part becomes its own slide in the `Verse 1` group, labelled with its position among the parts in the sequence, here `1/3`, `2/3` and `3/3`. Sub-sections work for verses, pre-choruses, choruses, bridges and recitals; the base number is written out, as in `c1.1` for the first chorus.

```text
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
