/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface Font {
  name: string;
  size: number;
  italic: boolean;
  bold: boolean;
  family: string;
  face: string;
}

function createBaseFont(): Font {
  return { name: "", size: 0, italic: false, bold: false, family: "", face: "" };
}

export const Font = {
  encode(message: Font, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    if (message.italic !== false) {
      writer.uint32(32).bool(message.italic);
    }
    if (message.bold !== false) {
      writer.uint32(64).bool(message.bold);
    }
    if (message.family !== "") {
      writer.uint32(74).string(message.family);
    }
    if (message.face !== "") {
      writer.uint32(82).string(message.face);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Font {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFont();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.size = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.italic = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.bold = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.family = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.face = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Font {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
      italic: isSet(object.italic) ? globalThis.Boolean(object.italic) : false,
      bold: isSet(object.bold) ? globalThis.Boolean(object.bold) : false,
      family: isSet(object.family) ? globalThis.String(object.family) : "",
      face: isSet(object.face) ? globalThis.String(object.face) : "",
    };
  },

  toJSON(message: Font): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== 0) {
      obj.size = message.size;
    }
    if (message.italic !== false) {
      obj.italic = message.italic;
    }
    if (message.bold !== false) {
      obj.bold = message.bold;
    }
    if (message.family !== "") {
      obj.family = message.family;
    }
    if (message.face !== "") {
      obj.face = message.face;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Font>, I>>(base?: I): Font {
    return Font.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Font>, I>>(object: I): Font {
    const message = createBaseFont();
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.italic = object.italic ?? false;
    message.bold = object.bold ?? false;
    message.family = object.family ?? "";
    message.face = object.face ?? "";
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
