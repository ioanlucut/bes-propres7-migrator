# bes-propres7-migrator

A migrator from the `bes-lyrics` to `ProPresenter7` `pro` format

### How this works

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

for f in ./*; do protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. --ts_proto_opt=esModuleInterop=true ./$f ; done
```

#### Decode a single presentation file called `experriment.pro` to `TS`

```unix
cd proto

protoc --decode rv.data.Presentation ./presentation.proto < ~/Documents/ProPresenter/Libraries/Default/experiment.pro > ../experiment_decoded_from_propres7.txt
```
