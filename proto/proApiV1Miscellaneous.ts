/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface APIV1MiscellaneousRequest {
  findMyMouse?: APIV1MiscellaneousRequest_FindMyMouse | undefined;
}

export interface APIV1MiscellaneousRequest_FindMyMouse {}

export interface APIV1MiscellaneousResponse {
  findMyMouse?: APIV1MiscellaneousResponse_FindMyMouse | undefined;
}

export interface APIV1MiscellaneousResponse_FindMyMouse {}

function createBaseAPIV1MiscellaneousRequest(): APIV1MiscellaneousRequest {
  return { findMyMouse: undefined };
}

export const APIV1MiscellaneousRequest = {
  encode(
    message: APIV1MiscellaneousRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.findMyMouse !== undefined) {
      APIV1MiscellaneousRequest_FindMyMouse.encode(
        message.findMyMouse,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MiscellaneousRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MiscellaneousRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.findMyMouse = APIV1MiscellaneousRequest_FindMyMouse.decode(
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

  fromJSON(object: any): APIV1MiscellaneousRequest {
    return {
      findMyMouse: isSet(object.findMyMouse)
        ? APIV1MiscellaneousRequest_FindMyMouse.fromJSON(object.findMyMouse)
        : undefined,
    };
  },

  toJSON(message: APIV1MiscellaneousRequest): unknown {
    const obj: any = {};
    if (message.findMyMouse !== undefined) {
      obj.findMyMouse = APIV1MiscellaneousRequest_FindMyMouse.toJSON(
        message.findMyMouse,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MiscellaneousRequest>, I>>(
    base?: I,
  ): APIV1MiscellaneousRequest {
    return APIV1MiscellaneousRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MiscellaneousRequest>, I>>(
    object: I,
  ): APIV1MiscellaneousRequest {
    const message = createBaseAPIV1MiscellaneousRequest();
    message.findMyMouse =
      object.findMyMouse !== undefined && object.findMyMouse !== null
        ? APIV1MiscellaneousRequest_FindMyMouse.fromPartial(object.findMyMouse)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MiscellaneousRequest_FindMyMouse(): APIV1MiscellaneousRequest_FindMyMouse {
  return {};
}

export const APIV1MiscellaneousRequest_FindMyMouse = {
  encode(
    _: APIV1MiscellaneousRequest_FindMyMouse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MiscellaneousRequest_FindMyMouse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MiscellaneousRequest_FindMyMouse();
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

  fromJSON(_: any): APIV1MiscellaneousRequest_FindMyMouse {
    return {};
  },

  toJSON(_: APIV1MiscellaneousRequest_FindMyMouse): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MiscellaneousRequest_FindMyMouse>, I>,
  >(base?: I): APIV1MiscellaneousRequest_FindMyMouse {
    return APIV1MiscellaneousRequest_FindMyMouse.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MiscellaneousRequest_FindMyMouse>, I>,
  >(_: I): APIV1MiscellaneousRequest_FindMyMouse {
    const message = createBaseAPIV1MiscellaneousRequest_FindMyMouse();
    return message;
  },
};

function createBaseAPIV1MiscellaneousResponse(): APIV1MiscellaneousResponse {
  return { findMyMouse: undefined };
}

export const APIV1MiscellaneousResponse = {
  encode(
    message: APIV1MiscellaneousResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.findMyMouse !== undefined) {
      APIV1MiscellaneousResponse_FindMyMouse.encode(
        message.findMyMouse,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MiscellaneousResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MiscellaneousResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.findMyMouse = APIV1MiscellaneousResponse_FindMyMouse.decode(
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

  fromJSON(object: any): APIV1MiscellaneousResponse {
    return {
      findMyMouse: isSet(object.findMyMouse)
        ? APIV1MiscellaneousResponse_FindMyMouse.fromJSON(object.findMyMouse)
        : undefined,
    };
  },

  toJSON(message: APIV1MiscellaneousResponse): unknown {
    const obj: any = {};
    if (message.findMyMouse !== undefined) {
      obj.findMyMouse = APIV1MiscellaneousResponse_FindMyMouse.toJSON(
        message.findMyMouse,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MiscellaneousResponse>, I>>(
    base?: I,
  ): APIV1MiscellaneousResponse {
    return APIV1MiscellaneousResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MiscellaneousResponse>, I>>(
    object: I,
  ): APIV1MiscellaneousResponse {
    const message = createBaseAPIV1MiscellaneousResponse();
    message.findMyMouse =
      object.findMyMouse !== undefined && object.findMyMouse !== null
        ? APIV1MiscellaneousResponse_FindMyMouse.fromPartial(object.findMyMouse)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MiscellaneousResponse_FindMyMouse(): APIV1MiscellaneousResponse_FindMyMouse {
  return {};
}

export const APIV1MiscellaneousResponse_FindMyMouse = {
  encode(
    _: APIV1MiscellaneousResponse_FindMyMouse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MiscellaneousResponse_FindMyMouse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MiscellaneousResponse_FindMyMouse();
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

  fromJSON(_: any): APIV1MiscellaneousResponse_FindMyMouse {
    return {};
  },

  toJSON(_: APIV1MiscellaneousResponse_FindMyMouse): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MiscellaneousResponse_FindMyMouse>, I>,
  >(base?: I): APIV1MiscellaneousResponse_FindMyMouse {
    return APIV1MiscellaneousResponse_FindMyMouse.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MiscellaneousResponse_FindMyMouse>, I>,
  >(_: I): APIV1MiscellaneousResponse_FindMyMouse {
    const message = createBaseAPIV1MiscellaneousResponse_FindMyMouse();
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
