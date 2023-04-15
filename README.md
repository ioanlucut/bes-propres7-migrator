# bes-propres7-migrator

A migrator from the `bes-lyrics` to `ProPresenter7` `pro` format

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

### How to run

- Assuming that the following config is fine:

```dotenv
SOURCE_DIR=../bes-lyrics/inverification
OUT_DIR=./pp7-songs
```

Simply call the `npm run migrate:local`

### How to customize the runner

- Pass the following env variables with your source and out directories

```dotenv
SOURCE_DIR=../bes-lyrics/inverification
OUT_DIR=./pp7-songs
```

- Use the `migrateSongsToPP7Format` method to do the conversion as follows:

```typescript
import dotenv from 'dotenv';
import { migrateSongsToPP7Format } from './';

dotenv.config();

migrateSongsToPP7Format({
  sourceDir: process.env.SOURCE_DIR as string,
  outDir: process.env.OUT_DIR as string,
  clearOutputDirFirst: true,
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

#### Decode a single presentation file called `experiment.pro` to `TS`

```unix
cd proto

protoc --decode rv.data.Presentation ./presentation.proto < ~/Documents/ProPresenter/Libraries/Default/experiment.pro > ../experiment_decoded_from_propres7.txt
```
