/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface Version {
  majorVersion: number;
  minorVersion: number;
  patchVersion: number;
  build: string;
}

function createBaseVersion(): Version {
  return { majorVersion: 0, minorVersion: 0, patchVersion: 0, build: '' };
}

export const Version = {
  encode(
    message: Version,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.majorVersion !== 0) {
      writer.uint32(8).uint32(message.majorVersion);
    }
    if (message.minorVersion !== 0) {
      writer.uint32(16).uint32(message.minorVersion);
    }
    if (message.patchVersion !== 0) {
      writer.uint32(24).uint32(message.patchVersion);
    }
    if (message.build !== '') {
      writer.uint32(34).string(message.build);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.majorVersion = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minorVersion = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.patchVersion = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.build = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      majorVersion: isSet(object.majorVersion)
        ? globalThis.Number(object.majorVersion)
        : 0,
      minorVersion: isSet(object.minorVersion)
        ? globalThis.Number(object.minorVersion)
        : 0,
      patchVersion: isSet(object.patchVersion)
        ? globalThis.Number(object.patchVersion)
        : 0,
      build: isSet(object.build) ? globalThis.String(object.build) : '',
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.majorVersion !== 0) {
      obj.majorVersion = Math.round(message.majorVersion);
    }
    if (message.minorVersion !== 0) {
      obj.minorVersion = Math.round(message.minorVersion);
    }
    if (message.patchVersion !== 0) {
      obj.patchVersion = Math.round(message.patchVersion);
    }
    if (message.build !== '') {
      obj.build = message.build;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.majorVersion = object.majorVersion ?? 0;
    message.minorVersion = object.minorVersion ?? 0;
    message.patchVersion = object.patchVersion ?? 0;
    message.build = object.build ?? '';
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
