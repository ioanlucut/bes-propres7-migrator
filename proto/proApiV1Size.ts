/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface APIV1Size {
  width: number;
  height: number;
}

function createBaseAPIV1Size(): APIV1Size {
  return { width: 0, height: 0 };
}

export const APIV1Size = {
  encode(
    message: APIV1Size,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Size {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Size();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Size {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: APIV1Size): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Size>, I>>(base?: I): APIV1Size {
    return APIV1Size.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Size>, I>>(
    object: I,
  ): APIV1Size {
    const message = createBaseAPIV1Size();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
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
