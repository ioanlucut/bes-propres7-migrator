/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Color } from './color';
import { Graphics_Gradient } from './graphicsData';

export const protobufPackage = 'rv.data';

export interface Background {
  isEnabled: boolean;
  color?: Color | undefined;
  gradient?: Graphics_Gradient | undefined;
}

function createBaseBackground(): Background {
  return { isEnabled: false, color: undefined, gradient: undefined };
}

export const Background = {
  encode(
    message: Background,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isEnabled !== false) {
      writer.uint32(24).bool(message.isEnabled);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(
        message.gradient,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Background {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackground();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Background {
    return {
      isEnabled: isSet(object.isEnabled)
        ? globalThis.Boolean(object.isEnabled)
        : false,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      gradient: isSet(object.gradient)
        ? Graphics_Gradient.fromJSON(object.gradient)
        : undefined,
    };
  },

  toJSON(message: Background): unknown {
    const obj: any = {};
    if (message.isEnabled !== false) {
      obj.isEnabled = message.isEnabled;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.gradient !== undefined) {
      obj.gradient = Graphics_Gradient.toJSON(message.gradient);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Background>, I>>(base?: I): Background {
    return Background.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Background>, I>>(
    object: I,
  ): Background {
    const message = createBaseBackground();
    message.isEnabled = object.isEnabled ?? false;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.gradient =
      object.gradient !== undefined && object.gradient !== null
        ? Graphics_Gradient.fromPartial(object.gradient)
        : undefined;
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
