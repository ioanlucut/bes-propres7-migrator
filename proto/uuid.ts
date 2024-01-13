/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface UUID {
  string: string;
}

function createBaseUUID(): UUID {
  return { string: '' };
}

export const UUID = {
  encode(message: UUID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string !== '') {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UUID {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUUID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.string = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UUID {
    return {
      string: isSet(object.string) ? globalThis.String(object.string) : '',
    };
  },

  toJSON(message: UUID): unknown {
    const obj: any = {};
    if (message.string !== '') {
      obj.string = message.string;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UUID>, I>>(base?: I): UUID {
    return UUID.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UUID>, I>>(object: I): UUID {
    const message = createBaseUUID();
    message.string = object.string ?? '';
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
