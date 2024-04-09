/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface ProClockSource {
  uuid: string;
  name: string;
  connected: boolean;
  active: boolean;
  type: ProClockSource_Type;
}

export enum ProClockSource_Type {
  TYPE_UNKOWN = 0,
  TYPE_INPUT = 1,
  TYPE_OUTPUT = 2,
  UNRECOGNIZED = -1,
}

export function proClockSource_TypeFromJSON(object: any): ProClockSource_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKOWN":
      return ProClockSource_Type.TYPE_UNKOWN;
    case 1:
    case "TYPE_INPUT":
      return ProClockSource_Type.TYPE_INPUT;
    case 2:
    case "TYPE_OUTPUT":
      return ProClockSource_Type.TYPE_OUTPUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProClockSource_Type.UNRECOGNIZED;
  }
}

export function proClockSource_TypeToJSON(object: ProClockSource_Type): string {
  switch (object) {
    case ProClockSource_Type.TYPE_UNKOWN:
      return "TYPE_UNKOWN";
    case ProClockSource_Type.TYPE_INPUT:
      return "TYPE_INPUT";
    case ProClockSource_Type.TYPE_OUTPUT:
      return "TYPE_OUTPUT";
    case ProClockSource_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseProClockSource(): ProClockSource {
  return { uuid: "", name: "", connected: false, active: false, type: 0 };
}

export const ProClockSource = {
  encode(message: ProClockSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.connected !== false) {
      writer.uint32(24).bool(message.connected);
    }
    if (message.active !== false) {
      writer.uint32(32).bool(message.active);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProClockSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProClockSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.connected = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProClockSource {
    return {
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      connected: isSet(object.connected) ? globalThis.Boolean(object.connected) : false,
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      type: isSet(object.type) ? proClockSource_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ProClockSource): unknown {
    const obj: any = {};
    if (message.uuid !== "") {
      obj.uuid = message.uuid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.connected !== false) {
      obj.connected = message.connected;
    }
    if (message.active !== false) {
      obj.active = message.active;
    }
    if (message.type !== 0) {
      obj.type = proClockSource_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProClockSource>, I>>(base?: I): ProClockSource {
    return ProClockSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProClockSource>, I>>(object: I): ProClockSource {
    const message = createBaseProClockSource();
    message.uuid = object.uuid ?? "";
    message.name = object.name ?? "";
    message.connected = object.connected ?? false;
    message.active = object.active ?? false;
    message.type = object.type ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
