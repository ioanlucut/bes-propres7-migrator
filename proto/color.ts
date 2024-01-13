/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

function createBaseColor(): Color {
  return { red: 0, green: 0, blue: 0, alpha: 0 };
}

export const Color = {
  encode(message: Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.red !== 0) {
      writer.uint32(13).float(message.red);
    }
    if (message.green !== 0) {
      writer.uint32(21).float(message.green);
    }
    if (message.blue !== 0) {
      writer.uint32(29).float(message.blue);
    }
    if (message.alpha !== 0) {
      writer.uint32(37).float(message.alpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Color {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.red = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.green = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.blue = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.alpha = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Color {
    return {
      red: isSet(object.red) ? globalThis.Number(object.red) : 0,
      green: isSet(object.green) ? globalThis.Number(object.green) : 0,
      blue: isSet(object.blue) ? globalThis.Number(object.blue) : 0,
      alpha: isSet(object.alpha) ? globalThis.Number(object.alpha) : 0,
    };
  },

  toJSON(message: Color): unknown {
    const obj: any = {};
    if (message.red !== 0) {
      obj.red = message.red;
    }
    if (message.green !== 0) {
      obj.green = message.green;
    }
    if (message.blue !== 0) {
      obj.blue = message.blue;
    }
    if (message.alpha !== 0) {
      obj.alpha = message.alpha;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Color>, I>>(base?: I): Color {
    return Color.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Color>, I>>(object: I): Color {
    const message = createBaseColor();
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
    message.alpha = object.alpha ?? 0;
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
