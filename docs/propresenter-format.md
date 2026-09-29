# ProPresenter format

ProPresenter 7 stores each presentation as a binary [Protocol Buffers](https://protobuf.dev/) message of type `rv.data.Presentation`. Renewed Vision does not publish the schema, so this project recovers it from the application itself and generates typed TypeScript from it.

## Where the schema comes from

The ProPresenter binary embeds the compiled descriptors of its `.proto` files. [`protodump`](https://github.com/arkadiyt/protodump) scans a binary for those descriptors and writes them back out as `.proto` sources, which [`ts-proto`](https://github.com/stephenh/ts-proto) compiles into TypeScript types with `create`, `encode` and `decode` helpers. [`proto/`](../proto/) holds both: 121 schema files and their generated `.ts` modules.

```text
ProPresenter.app ──protodump──▶ proto/*.proto ──protoc + ts-proto──▶ proto/*.ts ──▶ src/proPresenter7SongConverter.ts
```

## How a song maps onto a presentation

[`convertSongToProPresenter7`](../src/proPresenter7SongConverter.ts) builds one `Presentation` per song. For the sequence `v1,c,v2,c`:

```text
Presentation "Aceasta mi-e dorința, să Te-onorez"
├── ccli                  config.ccliSettings + song title
├── category              config.presentationCategory
├── cues
│   ├── Blank    actions: [slide "Click me!", macro config.refMacroName]
│   ├── Verse 1  actions: [slide: one text element, RTF body]
│   ├── Chorus   actions: [slide]
│   └── Verse 2  actions: [slide]
├── cue_groups            one group per cue: Blank, Verse 1, Chorus, Verse 2
├── arrangements
│   └── "BES"             groups: Blank, Verse 1, Chorus, Verse 2, Chorus
└── selected_arrangement  "BES"
```

- **Sections are defined once.** Each section becomes one cue in one group. The arrangement lists group identifiers in the order of `[sequence]`, so a repeated chorus is a second reference, not a second copy, and an edit to the chorus in ProPresenter applies everywhere it is sung.

- **The first slide prepares the stage.** The `Blank` cue carries an empty slide plus an `ACTION_TYPE_MACRO` action that references a ProPresenter macro by UUID and name (`refMacroId`, `refMacroName`). Triggering it runs whatever that macro does in the operator's setup, before any lyric is shown.

- **Slides are text-only and full-frame.** Each slide has a single transparent text element sized to `graphicSize`, with centred, all-caps text that scales down to fit.

- **Sub-sections label their slides.** A `v1.2` section gets an action label such as `2/3`, shown on the slide thumbnail.

Every UUID is generated per run, so two conversions of the same song are equivalent but not byte-identical.

## Slide text is RTF

ProPresenter stores formatted text as RTF bytes in `Graphics_Text.rtf_data`. [`txtToRtfConverter.ts`](../src/txtToRtfConverter.ts) fills the macOS RTF template, [`rtfs/rtf_mac_version_template.rtf`](../rtfs/rtf_mac_version_template.rtf), with the section text:

- Line breaks become RTF line breaks (`\` followed by a newline).
- Romanian letters and typographic quotes become Unicode control words, such as `ș` → `\uc0\u537`.
- RTF treats the first space after a control word as its delimiter and drops it, so a letter followed by a space is written as the control word plus two spaces; otherwise `și mă` would render as `șimă`.

[`txtToRtfConverter.spec.ts`](../src/txtToRtfConverter.spec.ts) snapshots these cases, and writes the generated RTF to `out_temp_for_tests/` so it can be opened and checked by eye.

## Inspecting a `.pro` file

`protoc` decodes any presentation into readable text, which is the quickest way to compare a generated file with one saved by ProPresenter:

```bash
cd proto
protoc --decode rv.data.Presentation ./presentation.proto < ~/Documents/ProPresenter/Libraries/Default/TEMP.pro > ../TEMP_decoded_from_propres7.txt
```

[`windows-templates/`](../windows-templates/) keeps presentations saved by ProPresenter for Windows next to their decoded text, as a reference for the fields the app itself writes.

## Regenerating the schema after a ProPresenter update

1. Build `protodump` next to this repository:

   ```bash
   git clone https://github.com/arkadiyt/protodump.git
   cd protodump
   go build -o protodump cmd/protodump/main.go
   ```

2. From this repository's root, extract the schemas from the installed app:

   ```bash
   find /Applications/ProPresenter.app/ -type f -perm +111 -print -exec ../protodump/protodump -file {} -output ./proto \;
   ```

3. Regenerate the TypeScript and format it:

   ```bash
   cd proto
   for f in *.proto; do protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=esModuleInterop=true "./$f"; done
   cd ..
   npx prettier --write "proto/**/*.ts"
   ```

4. Run `npm run typecheck` and `npm test`. A renamed or removed field fails the typecheck, and a changed encoding shows up as a snapshot diff to review.

A few extracted schemas, such as `workspace.proto`, do not compile cleanly with `protoc`; the converter does not use them. Some committed modules predate the Prettier step or an older schema, so review the regenerated diff rather than committing it blindly.
