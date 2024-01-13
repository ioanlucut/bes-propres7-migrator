/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface API {
  messageReceived?: API_MessageReceived | undefined;
}

export interface API_MessageReceived {}

function createBaseAPI(): API {
  return { messageReceived: undefined };
}

export const API = {
  encode(message: API, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageReceived !== undefined) {
      API_MessageReceived.encode(
        message.messageReceived,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): API {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageReceived = API_MessageReceived.decode(
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

  fromJSON(object: any): API {
    return {
      messageReceived: isSet(object.messageReceived)
        ? API_MessageReceived.fromJSON(object.messageReceived)
        : undefined,
    };
  },

  toJSON(message: API): unknown {
    const obj: any = {};
    if (message.messageReceived !== undefined) {
      obj.messageReceived = API_MessageReceived.toJSON(message.messageReceived);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<API>, I>>(base?: I): API {
    return API.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<API>, I>>(object: I): API {
    const message = createBaseAPI();
    message.messageReceived =
      object.messageReceived !== undefined && object.messageReceived !== null
        ? API_MessageReceived.fromPartial(object.messageReceived)
        : undefined;
    return message;
  },
};

function createBaseAPI_MessageReceived(): API_MessageReceived {
  return {};
}

export const API_MessageReceived = {
  encode(
    _: API_MessageReceived,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): API_MessageReceived {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPI_MessageReceived();
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

  fromJSON(_: any): API_MessageReceived {
    return {};
  },

  toJSON(_: API_MessageReceived): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<API_MessageReceived>, I>>(
    base?: I,
  ): API_MessageReceived {
    return API_MessageReceived.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<API_MessageReceived>, I>>(
    _: I,
  ): API_MessageReceived {
    const message = createBaseAPI_MessageReceived();
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
