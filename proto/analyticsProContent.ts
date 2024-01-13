/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface ProContent {
  mediaBin?: ProContent_ViewMediaBin | undefined;
  download?: ProContent_Download | undefined;
}

export interface ProContent_ViewMediaBin {}

export interface ProContent_Download {
  isRetry: boolean;
}

function createBaseProContent(): ProContent {
  return { mediaBin: undefined, download: undefined };
}

export const ProContent = {
  encode(
    message: ProContent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mediaBin !== undefined) {
      ProContent_ViewMediaBin.encode(
        message.mediaBin,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.download !== undefined) {
      ProContent_Download.encode(
        message.download,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProContent {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mediaBin = ProContent_ViewMediaBin.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.download = ProContent_Download.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProContent {
    return {
      mediaBin: isSet(object.mediaBin)
        ? ProContent_ViewMediaBin.fromJSON(object.mediaBin)
        : undefined,
      download: isSet(object.download)
        ? ProContent_Download.fromJSON(object.download)
        : undefined,
    };
  },

  toJSON(message: ProContent): unknown {
    const obj: any = {};
    if (message.mediaBin !== undefined) {
      obj.mediaBin = ProContent_ViewMediaBin.toJSON(message.mediaBin);
    }
    if (message.download !== undefined) {
      obj.download = ProContent_Download.toJSON(message.download);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProContent>, I>>(base?: I): ProContent {
    return ProContent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProContent>, I>>(
    object: I,
  ): ProContent {
    const message = createBaseProContent();
    message.mediaBin =
      object.mediaBin !== undefined && object.mediaBin !== null
        ? ProContent_ViewMediaBin.fromPartial(object.mediaBin)
        : undefined;
    message.download =
      object.download !== undefined && object.download !== null
        ? ProContent_Download.fromPartial(object.download)
        : undefined;
    return message;
  },
};

function createBaseProContent_ViewMediaBin(): ProContent_ViewMediaBin {
  return {};
}

export const ProContent_ViewMediaBin = {
  encode(
    _: ProContent_ViewMediaBin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProContent_ViewMediaBin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProContent_ViewMediaBin();
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

  fromJSON(_: any): ProContent_ViewMediaBin {
    return {};
  },

  toJSON(_: ProContent_ViewMediaBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProContent_ViewMediaBin>, I>>(
    base?: I,
  ): ProContent_ViewMediaBin {
    return ProContent_ViewMediaBin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProContent_ViewMediaBin>, I>>(
    _: I,
  ): ProContent_ViewMediaBin {
    const message = createBaseProContent_ViewMediaBin();
    return message;
  },
};

function createBaseProContent_Download(): ProContent_Download {
  return { isRetry: false };
}

export const ProContent_Download = {
  encode(
    message: ProContent_Download,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isRetry === true) {
      writer.uint32(8).bool(message.isRetry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProContent_Download {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProContent_Download();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRetry = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProContent_Download {
    return {
      isRetry: isSet(object.isRetry)
        ? globalThis.Boolean(object.isRetry)
        : false,
    };
  },

  toJSON(message: ProContent_Download): unknown {
    const obj: any = {};
    if (message.isRetry === true) {
      obj.isRetry = message.isRetry;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProContent_Download>, I>>(
    base?: I,
  ): ProContent_Download {
    return ProContent_Download.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProContent_Download>, I>>(
    object: I,
  ): ProContent_Download {
    const message = createBaseProContent_Download();
    message.isRetry = object.isRetry ?? false;
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
