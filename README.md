# bes-propres7-migrator

A migrator from the `txt` songs (special markup format) to `ProPresenter7` `pro` format

### Expected songs format

```
[title]
Aceasta mi-e dorința să Te onorez

[sequence]
1,c,2,c

[1]
Aceasta mi-e dorința, să Te onorez,
Cu ființa-ntreagă să Te slăvesc.
Te ador, Stăpâne, și mă închin,
Lauda și onoarea Ți se cuvin!

[chorus]
Ție-Ți dau inima și sufletul meu,
Pentru Tine vreau să trăiesc!
Domnul meu, Te iubesc!
Zi de zi vreau să-mplinesc
Doar sfântă voia Ta!

[2]
Vrednic ești de cinste, fii lăudat!
Împărat al slavei, fii înălțat!
Alfa și Omega, de-a pururi viu,
Domn al veșniciei, în veci! Amin!
```

### How to run?

- Assuming that the following config is fine:

```dotenv
LOCAL_SOURCE_DIR=directory-with-txt-songs
LOCAL_OUT_DIR=directory-with-pro-songs
```

Simply run the `npm run convert:local`

### How to customize the runner

- Pass the following env variables with your source and out directories

```dotenv
LOCAL_SOURCE_DIR=directory-with-txt-songs
LOCAL_OUT_DIR=directory-with-pro-songs
```

- Use the `convertSongsToPP7FormatLocally` method to do the conversion as follows:

```typescript
import dotenv from 'dotenv';
import { Config, convertSongsToPP7FormatLocally } from './';
import { Presentation_CCLI } from './proto/presentation';
import { Graphics_Text_Attributes_Font } from './proto/graphicsData';

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
  } as Graphics_Text_Attributes_Font,
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

### How this repo works

This repo is doing a reverse engineering from the pro presenter protobuf format to a known format, and then it encodes
back presentation files by using the https://github.com/arkadiyt/protodump utility.

#### Find proto files from PP7

> Assuming that `protodump` is a sibling of this dir:

```unix
find /Applications/ProPresenter.app/ -type f -perm +111 -print -exec ../protodump/protodump -file {} -output ./proto \;
```

#### Decode proto files to TS

```unix
cd proto

for f in ./proto/*; do protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./proto --ts_proto_opt=esModuleInterop=true ./$f ; done
```

#### Decode a single presentation file called `TEMP.pro` to `TS`

```unix
cd proto

protoc --decode rv.data.Presentation ./presentation.proto < ~/Documents/ProPresenter/Libraries/Default/TEMP.pro > ../TEMP_decoded_from_propres7.txt
```
