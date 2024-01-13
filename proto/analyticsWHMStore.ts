/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface WHMStore {
  viewStore?: WHMStore_ViewStore | undefined;
  download?: WHMStore_Download | undefined;
}

export interface WHMStore_ViewStore {}

export interface WHMStore_Download {}

function createBaseWHMStore(): WHMStore {
  return { viewStore: undefined, download: undefined };
}

export const WHMStore = {
  encode(
    message: WHMStore,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.viewStore !== undefined) {
      WHMStore_ViewStore.encode(
        message.viewStore,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.download !== undefined) {
      WHMStore_Download.encode(
        message.download,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WHMStore {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWHMStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.viewStore = WHMStore_ViewStore.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.download = WHMStore_Download.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WHMStore {
    return {
      viewStore: isSet(object.viewStore)
        ? WHMStore_ViewStore.fromJSON(object.viewStore)
        : undefined,
      download: isSet(object.download)
        ? WHMStore_Download.fromJSON(object.download)
        : undefined,
    };
  },

  toJSON(message: WHMStore): unknown {
    const obj: any = {};
    if (message.viewStore !== undefined) {
      obj.viewStore = WHMStore_ViewStore.toJSON(message.viewStore);
    }
    if (message.download !== undefined) {
      obj.download = WHMStore_Download.toJSON(message.download);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WHMStore>, I>>(base?: I): WHMStore {
    return WHMStore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WHMStore>, I>>(object: I): WHMStore {
    const message = createBaseWHMStore();
    message.viewStore =
      object.viewStore !== undefined && object.viewStore !== null
        ? WHMStore_ViewStore.fromPartial(object.viewStore)
        : undefined;
    message.download =
      object.download !== undefined && object.download !== null
        ? WHMStore_Download.fromPartial(object.download)
        : undefined;
    return message;
  },
};

function createBaseWHMStore_ViewStore(): WHMStore_ViewStore {
  return {};
}

export const WHMStore_ViewStore = {
  encode(
    _: WHMStore_ViewStore,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WHMStore_ViewStore {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWHMStore_ViewStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): WHMStore_ViewStore {
    return {};
  },

  toJSON(_: WHMStore_ViewStore): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<WHMStore_ViewStore>, I>>(
    base?: I,
  ): WHMStore_ViewStore {
    return WHMStore_ViewStore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WHMStore_ViewStore>, I>>(
    _: I,
  ): WHMStore_ViewStore {
    const message = createBaseWHMStore_ViewStore();
    return message;
  },
};

function createBaseWHMStore_Download(): WHMStore_Download {
  return {};
}

export const WHMStore_Download = {
  encode(
    _: WHMStore_Download,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WHMStore_Download {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWHMStore_Download();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): WHMStore_Download {
    return {};
  },

  toJSON(_: WHMStore_Download): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<WHMStore_Download>, I>>(
    base?: I,
  ): WHMStore_Download {
    return WHMStore_Download.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WHMStore_Download>, I>>(
    _: I,
  ): WHMStore_Download {
    const message = createBaseWHMStore_Download();
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
