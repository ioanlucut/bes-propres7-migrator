/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { URL } from "./basicTypes";

export const protobufPackage = "rv.data";

export interface Library {
  url: URL | undefined;
  libraryChildren?: Library_LibraryArray | undefined;
  libraryItems?: Library_LibraryItems | undefined;
}

export interface Library_LibraryArray {
  libraries: Library[];
}

export interface Library_LibraryItems {
  items: LibraryItem[];
}

export interface LibraryItem {
  url: URL | undefined;
}

function createBaseLibrary(): Library {
  return { url: undefined, libraryChildren: undefined, libraryItems: undefined };
}

export const Library = {
  encode(message: Library, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.libraryChildren !== undefined) {
      Library_LibraryArray.encode(message.libraryChildren, writer.uint32(18).fork()).ldelim();
    }
    if (message.libraryItems !== undefined) {
      Library_LibraryItems.encode(message.libraryItems, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Library {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibrary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.libraryChildren = Library_LibraryArray.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.libraryItems = Library_LibraryItems.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Library {
    return {
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      libraryChildren: isSet(object.libraryChildren)
        ? Library_LibraryArray.fromJSON(object.libraryChildren)
        : undefined,
      libraryItems: isSet(object.libraryItems) ? Library_LibraryItems.fromJSON(object.libraryItems) : undefined,
    };
  },

  toJSON(message: Library): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.libraryChildren !== undefined &&
      (obj.libraryChildren = message.libraryChildren
        ? Library_LibraryArray.toJSON(message.libraryChildren)
        : undefined);
    message.libraryItems !== undefined &&
      (obj.libraryItems = message.libraryItems ? Library_LibraryItems.toJSON(message.libraryItems) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Library>, I>>(base?: I): Library {
    return Library.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Library>, I>>(object: I): Library {
    const message = createBaseLibrary();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    message.libraryChildren = (object.libraryChildren !== undefined && object.libraryChildren !== null)
      ? Library_LibraryArray.fromPartial(object.libraryChildren)
      : undefined;
    message.libraryItems = (object.libraryItems !== undefined && object.libraryItems !== null)
      ? Library_LibraryItems.fromPartial(object.libraryItems)
      : undefined;
    return message;
  },
};

function createBaseLibrary_LibraryArray(): Library_LibraryArray {
  return { libraries: [] };
}

export const Library_LibraryArray = {
  encode(message: Library_LibraryArray, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.libraries) {
      Library.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Library_LibraryArray {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibrary_LibraryArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.libraries.push(Library.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Library_LibraryArray {
    return { libraries: Array.isArray(object?.libraries) ? object.libraries.map((e: any) => Library.fromJSON(e)) : [] };
  },

  toJSON(message: Library_LibraryArray): unknown {
    const obj: any = {};
    if (message.libraries) {
      obj.libraries = message.libraries.map((e) => e ? Library.toJSON(e) : undefined);
    } else {
      obj.libraries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Library_LibraryArray>, I>>(base?: I): Library_LibraryArray {
    return Library_LibraryArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Library_LibraryArray>, I>>(object: I): Library_LibraryArray {
    const message = createBaseLibrary_LibraryArray();
    message.libraries = object.libraries?.map((e) => Library.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLibrary_LibraryItems(): Library_LibraryItems {
  return { items: [] };
}

export const Library_LibraryItems = {
  encode(message: Library_LibraryItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      LibraryItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Library_LibraryItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibrary_LibraryItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(LibraryItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Library_LibraryItems {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => LibraryItem.fromJSON(e)) : [] };
  },

  toJSON(message: Library_LibraryItems): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? LibraryItem.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Library_LibraryItems>, I>>(base?: I): Library_LibraryItems {
    return Library_LibraryItems.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Library_LibraryItems>, I>>(object: I): Library_LibraryItems {
    const message = createBaseLibrary_LibraryItems();
    message.items = object.items?.map((e) => LibraryItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLibraryItem(): LibraryItem {
  return { url: undefined };
}

export const LibraryItem = {
  encode(message: LibraryItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LibraryItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLibraryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LibraryItem {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: LibraryItem): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LibraryItem>, I>>(base?: I): LibraryItem {
    return LibraryItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LibraryItem>, I>>(object: I): LibraryItem {
    const message = createBaseLibraryItem();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
