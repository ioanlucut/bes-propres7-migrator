/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface APIV1Identifier {
  uuid: string;
  name: string;
  index: number;
}

function createBaseAPIV1Identifier(): APIV1Identifier {
  return { uuid: '', name: '', index: 0 };
}

export const APIV1Identifier = {
  encode(
    message: APIV1Identifier,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== '') {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Identifier {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Identifier();
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

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Identifier {
    return {
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: APIV1Identifier): unknown {
    const obj: any = {};
    if (message.uuid !== '') {
      obj.uuid = message.uuid;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Identifier>, I>>(
    base?: I,
  ): APIV1Identifier {
    return APIV1Identifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Identifier>, I>>(
    object: I,
  ): APIV1Identifier {
    const message = createBaseAPIV1Identifier();
    message.uuid = object.uuid ?? '';
    message.name = object.name ?? '';
    message.index = object.index ?? 0;
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
