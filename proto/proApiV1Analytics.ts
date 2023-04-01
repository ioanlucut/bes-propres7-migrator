/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface APIAnalytics {
  messageReceived?: APIAnalytics_MessageReceived | undefined;
}

export interface APIAnalytics_MessageReceived {
}

function createBaseAPIAnalytics(): APIAnalytics {
  return { messageReceived: undefined };
}

export const APIAnalytics = {
  encode(message: APIAnalytics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageReceived !== undefined) {
      APIAnalytics_MessageReceived.encode(message.messageReceived, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIAnalytics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIAnalytics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messageReceived = APIAnalytics_MessageReceived.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIAnalytics {
    return {
      messageReceived: isSet(object.messageReceived)
        ? APIAnalytics_MessageReceived.fromJSON(object.messageReceived)
        : undefined,
    };
  },

  toJSON(message: APIAnalytics): unknown {
    const obj: any = {};
    message.messageReceived !== undefined && (obj.messageReceived = message.messageReceived
      ? APIAnalytics_MessageReceived.toJSON(message.messageReceived)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<APIAnalytics>, I>>(base?: I): APIAnalytics {
    return APIAnalytics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<APIAnalytics>, I>>(object: I): APIAnalytics {
    const message = createBaseAPIAnalytics();
    message.messageReceived = (object.messageReceived !== undefined && object.messageReceived !== null)
      ? APIAnalytics_MessageReceived.fromPartial(object.messageReceived)
      : undefined;
    return message;
  },
};

function createBaseAPIAnalytics_MessageReceived(): APIAnalytics_MessageReceived {
  return {};
}

export const APIAnalytics_MessageReceived = {
  encode(_: APIAnalytics_MessageReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIAnalytics_MessageReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIAnalytics_MessageReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): APIAnalytics_MessageReceived {
    return {};
  },

  toJSON(_: APIAnalytics_MessageReceived): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIAnalytics_MessageReceived>, I>>(base?: I): APIAnalytics_MessageReceived {
    return APIAnalytics_MessageReceived.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<APIAnalytics_MessageReceived>, I>>(_: I): APIAnalytics_MessageReceived {
    const message = createBaseAPIAnalytics_MessageReceived();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
