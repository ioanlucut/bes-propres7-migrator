# ProPresenter 7 protobuf schema

ProPresenter's `.pro` format, recovered from the application binary: the `.proto` files were extracted with [`protodump`](https://github.com/arkadiyt/protodump), and each `.ts` module next to them was generated from them with [`ts-proto`](https://github.com/stephenh/ts-proto). Do not edit the `.ts` files by hand; regenerate them instead.

[ProPresenter format](../docs/propresenter-format.md) explains how the converter uses these types, how to decode a `.pro` file, and how to regenerate this folder after a ProPresenter update.
