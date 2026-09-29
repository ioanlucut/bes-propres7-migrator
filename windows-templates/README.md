# Windows reference presentations

Presentations saved by ProPresenter 7 for Windows (`.pro`), each next to its decoded text (`.txt`), produced with:

```bash
cd proto
protoc --decode rv.data.Presentation ./presentation.proto < ../windows-templates/TEST_TEMPLATE_3.pro > ../windows-templates/TEST_TEMPLATE_3.txt
```

They are a reference for the fields ProPresenter itself writes, used when comparing them with the migrator's output. Nothing in the build or tests reads them.
