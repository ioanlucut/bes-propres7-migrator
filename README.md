# bes-propres7-migrator

The `bes-propres7-migrator` is a utility designed to facilitate the conversion of song files from a custom `txt` format,
using a special markup, to the `ProPresenter7` format (`.pro` files). This tool is particularly useful for those
transitioning their song libraries to `ProPresenter7` and ensures a smooth conversion process.

## Features

- **Simple Conversion**: Easily convert `.txt` song files to `.pro` format for `ProPresenter7`.
- **Custom Configuration**: Flexible configuration options to suit your specific conversion needs.
- **Advanced Sequencing with `BES` Sequence**: Automates song sequencing for efficient live presentation.
- **Initial Setup Slide with `Macro` Reference**: Automates presentation environment setup for each song.

## Installation

To get started with `bes-propres7-migrator`, ensure you have Node.js installed on your machine. Clone this repository
and run `npm install` to install all dependencies.

```bash
git clone https://github.com/your-repo/bes-propres7-migrator.git
cd bes-propres7-migrator
npm install
```

## Usage

### Expected Song Format

Your .txt song files should follow this specific markup format for successful conversion:

```
[title]
Your Song Title

[sequence]
1,c,2,c

[1]
Verse 1 lyrics here...

[chorus]
Chorus lyrics here...

[2]
Verse 2 lyrics here...

```

#### Example (romanian song):

```
[title]
Aceasta mi-e dorința, să Te-onorez {alternative: {_}, composer: {_}, writer: {_}, arranger: {_}, interpreter: {_}, band: {_}, key: {_}, tempo: {_}, tags: {_}, version: {_}, genre: {\*}, rcId: {59763}, id: {8ipLZddXG3Zy7Hbbo93Vm7}, contentHash: {418384}}

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

### Running the Migrator

1. Set up your environment variables according to your local setup:

```dotenv
# .env.local
LOCAL_SOURCE_DIR=src-directory-with-txt-songs
LOCAL_OUT_DIR=out-directory-with-pro-songs
```

2. To convert your songs, execute the following command:

```bash
npm run convert:local
```

### Customization Options

You can customize the conversion process by adjusting the environment variables or by directly using
the `convertSongsToPP7FormatLocally` method with your own configurations:

```typescript
import dotenv from 'dotenv';
import { convertSongsToPP7FormatLocally } from './';
import { Presentation_CCLI } from './proto/presentation';
import { Font } from './proto/graphicsData';

dotenv.config();

const CONFIG = {
  arrangementName: 'Any arrangement name',
  ccliSettings: {
    publisher: 'Any publisher info',
    author: 'Any author info',
    copyrightYear: new Date().getFullYear(),
    album: `Any album from ${new Date().getFullYear()}`,
    songNumber: 0,
  } as Presentation_CCLI,
  fontConfig: {
    name: 'CMGSans-Regular',
    size: 58,
    family: 'CMGSans',
    bold: true,
  } as Font,
  graphicSize: {
    width: 1920,
    height: 1080,
  },
  presentationCategory: 'Any presentation category',
  refMacroId:
    'A UUID string for referencing the macro id in the first intro blank slide',
  refMacroName:
    'A macro name for referencing the macro id in the first intro blank slide',
};

convertSongsToPP7FormatLocally({
  sourceDir: process.env.LOCAL_SOURCE_DIR as string,
  baseLocalDir: process.env.LOCAL_OUT_DIR as string,
  config: CONFIG,
});
```

### The ProPresenter7 outcome

![alt text](outcome_pp7.png 'Aceasta mi-e dorința in .pro format')

### How It Works

The `bes-propres7-migrator` leverages reverse engineering of the `ProPresenter` `protobuf` format through
the `protodump`
utility for encoding and decoding presentation files. To utilize this:

```bash
git clone https://github.com/arkadiyt/protodump.git
go build -o protodump cmd/protodump/main.go
```

### Advanced Sequencing with BES Sequence

A standout feature of the `bes-propres7-migrator` is its ability to intelligently create BES sequences in ProPresenter7,
enhancing the presentation of songs during live events. This section explains how the BES sequence works and the
advantages it offers.

#### How BES Sequence Works

When converting songs, `the bes-propres7-migrator` not only transfers the lyrics and formatting but also smartly
organizes
song sections into an efficient sequence for live presentation. Given a song with the sequence (1,c,2,c), the migrator
constructs what is referred to as a BES sequence in ProPresenter7.

This BES sequence strategically references the chorus (c) only once in the `ProPresenter7` sequence setup, even though
it
appears twice in the song's progression. This approach results in a sequence where the chorus is prepared to be
displayed each time it's needed, without requiring multiple entries in the sequence.

#### Benefits of BES Sequence

- Simplicity in Navigation: Operators can advance through the song by simply pressing the forward key, without needing
  to
  remember the song's order or manually navigate back to the chorus. This is especially useful in live settings where
  attention and timing are critical.
- Efficiency in Presentation: Reduces the clutter and complexity of the song's visual presentation, making it easier for
  the audience to follow along.
- Optimized Performance: Minimizes the cognitive load on the person controlling the presentation, allowing them to focus
  more on the event's flow and less on the technical aspects of the presentation software.
- Implementation
  When utilizing the `convertSongsToPP7FormatLocally` method, the migrator automatically analyzes the song's sequence
  and
  applies the BES sequence logic. There's no need for manual setup or additional configuration to enable this feature.
  This automated process ensures your songs are ready for efficient and effective presentation with minimal effort on
  your
  part.

#### Example

For a song with a specified sequence of (1,c,2,c), the migrator creates a sequence in `ProPresenter7` that smartly
incorporates the chorus to appear at the correct intervals, optimizing both the operator's experience and the audience's
engagement.

### Initial Setup Slide with Macro Reference

An innovative feature of the `bes-propres7-migrator` is the automatic inclusion of an initial setup slide in every
exported file. This first slide is intentionally left empty and contains a reference to a predefined macro. The purpose
of this slide is to facilitate the seamless preparation of the presentation environment before the actual song content
is displayed.

#### Purpose and Benefits

- Environment Preparation: The macro referenced in the first slide is designed to automate the setup process for your live
  event presentation. This includes clearing previous settings, configuring the appropriate audience and stage layouts,
  setting clocks, backgrounds, and other necessary adjustments.
- Efficiency and Consistency: By automating the setup process, this feature ensures that all songs start with a consistent
  environment, reducing manual setup errors and saving time during live events.
- Seamless Transition into Content: Since every song starts from the second slide, the initial setup slide ensures that
  all preliminary adjustments are made without displaying unnecessary content to the audience, leading to a smoother
  transition and a more professional presentation.

- #### How to Use
  The initial setup slide is included automatically with every song conversion. To customize the actions performed by the
  referenced macro, you may need to edit the macro settings within ProPresenter7 according to your event's specific
  requirements. This customization allows you to tailor the environment setup process to match the unique needs of your
  presentation.

<details>
<summary>📖 How to regenerate the `.proto` files when a new version of `ProPresenter7` arrives.</summary>

### Step 1: Find `.proto` files from `ProPresenter7`

> Assuming that `protodump` is a sibling of this dir:

```unix
find /Applications/ProPresenter.app/ -type f -perm +111 -print -exec ../protodump/protodump -file {} -output ./proto \;
```

#### Decode `ProPresenter7` `.proto` files to `.ts`

```unix
cd proto

for f in ./*; do protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=esModuleInterop=true ./$f ; done
```

</details>

<details>
<summary>📖 How to decode a single `.pro` presentation files for debugging purposes..</summary>

#### Decode a single presentation file called `TEMP.pro` to `TS`

```unix
cd proto

protoc --decode rv.data.Presentation ./presentation.proto < ~/Documents/ProPresenter/Libraries/Default/TEMP.pro > ../TEMP_decoded_from_propres7.txt
```

#### Decode a single win presentation file called `TEMP.pro` to `TS`

```unix
cd proto

protoc --decode rv.data.Presentation ./presentation.proto < ../windows-templates/TEST_TEMPLATE_3.pro > ../windows-templates/TEST_TEMPLATE_3.txt
```

</details>
