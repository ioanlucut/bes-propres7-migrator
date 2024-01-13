/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1VideoInputsRequest {
  getAll?: APIV1VideoInputsRequest_GetAll | undefined;
  trigger?: APIV1VideoInputsRequest_Trigger | undefined;
}

export interface APIV1VideoInputsRequest_GetAll {}

export interface APIV1VideoInputsRequest_Trigger {
  id: string;
}

export interface APIV1VideoInputsResponse {
  getAll?: APIV1VideoInputsResponse_GetAll | undefined;
  trigger?: APIV1VideoInputsResponse_Trigger | undefined;
}

export interface APIV1VideoInputsResponse_GetAll {
  inputs: APIV1Identifier[];
}

export interface APIV1VideoInputsResponse_Trigger {}

function createBaseAPIV1VideoInputsRequest(): APIV1VideoInputsRequest {
  return { getAll: undefined, trigger: undefined };
}

export const APIV1VideoInputsRequest = {
  encode(
    message: APIV1VideoInputsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getAll !== undefined) {
      APIV1VideoInputsRequest_GetAll.encode(
        message.getAll,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1VideoInputsRequest_Trigger.encode(
        message.trigger,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getAll = APIV1VideoInputsRequest_GetAll.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trigger = APIV1VideoInputsRequest_Trigger.decode(
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

  fromJSON(object: any): APIV1VideoInputsRequest {
    return {
      getAll: isSet(object.getAll)
        ? APIV1VideoInputsRequest_GetAll.fromJSON(object.getAll)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1VideoInputsRequest_Trigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1VideoInputsRequest): unknown {
    const obj: any = {};
    if (message.getAll !== undefined) {
      obj.getAll = APIV1VideoInputsRequest_GetAll.toJSON(message.getAll);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1VideoInputsRequest_Trigger.toJSON(message.trigger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsRequest>, I>>(
    base?: I,
  ): APIV1VideoInputsRequest {
    return APIV1VideoInputsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1VideoInputsRequest>, I>>(
    object: I,
  ): APIV1VideoInputsRequest {
    const message = createBaseAPIV1VideoInputsRequest();
    message.getAll =
      object.getAll !== undefined && object.getAll !== null
        ? APIV1VideoInputsRequest_GetAll.fromPartial(object.getAll)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1VideoInputsRequest_Trigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1VideoInputsRequest_GetAll(): APIV1VideoInputsRequest_GetAll {
  return {};
}

export const APIV1VideoInputsRequest_GetAll = {
  encode(
    _: APIV1VideoInputsRequest_GetAll,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsRequest_GetAll {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsRequest_GetAll();
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

  fromJSON(_: any): APIV1VideoInputsRequest_GetAll {
    return {};
  },

  toJSON(_: APIV1VideoInputsRequest_GetAll): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsRequest_GetAll>, I>>(
    base?: I,
  ): APIV1VideoInputsRequest_GetAll {
    return APIV1VideoInputsRequest_GetAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1VideoInputsRequest_GetAll>, I>>(
    _: I,
  ): APIV1VideoInputsRequest_GetAll {
    const message = createBaseAPIV1VideoInputsRequest_GetAll();
    return message;
  },
};

function createBaseAPIV1VideoInputsRequest_Trigger(): APIV1VideoInputsRequest_Trigger {
  return { id: '' };
}

export const APIV1VideoInputsRequest_Trigger = {
  encode(
    message: APIV1VideoInputsRequest_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsRequest_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsRequest_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1VideoInputsRequest_Trigger {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1VideoInputsRequest_Trigger): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsRequest_Trigger>, I>>(
    base?: I,
  ): APIV1VideoInputsRequest_Trigger {
    return APIV1VideoInputsRequest_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1VideoInputsRequest_Trigger>, I>>(
    object: I,
  ): APIV1VideoInputsRequest_Trigger {
    const message = createBaseAPIV1VideoInputsRequest_Trigger();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1VideoInputsResponse(): APIV1VideoInputsResponse {
  return { getAll: undefined, trigger: undefined };
}

export const APIV1VideoInputsResponse = {
  encode(
    message: APIV1VideoInputsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getAll !== undefined) {
      APIV1VideoInputsResponse_GetAll.encode(
        message.getAll,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1VideoInputsResponse_Trigger.encode(
        message.trigger,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getAll = APIV1VideoInputsResponse_GetAll.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trigger = APIV1VideoInputsResponse_Trigger.decode(
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

  fromJSON(object: any): APIV1VideoInputsResponse {
    return {
      getAll: isSet(object.getAll)
        ? APIV1VideoInputsResponse_GetAll.fromJSON(object.getAll)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1VideoInputsResponse_Trigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1VideoInputsResponse): unknown {
    const obj: any = {};
    if (message.getAll !== undefined) {
      obj.getAll = APIV1VideoInputsResponse_GetAll.toJSON(message.getAll);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1VideoInputsResponse_Trigger.toJSON(message.trigger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsResponse>, I>>(
    base?: I,
  ): APIV1VideoInputsResponse {
    return APIV1VideoInputsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1VideoInputsResponse>, I>>(
    object: I,
  ): APIV1VideoInputsResponse {
    const message = createBaseAPIV1VideoInputsResponse();
    message.getAll =
      object.getAll !== undefined && object.getAll !== null
        ? APIV1VideoInputsResponse_GetAll.fromPartial(object.getAll)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1VideoInputsResponse_Trigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1VideoInputsResponse_GetAll(): APIV1VideoInputsResponse_GetAll {
  return { inputs: [] };
}

export const APIV1VideoInputsResponse_GetAll = {
  encode(
    message: APIV1VideoInputsResponse_GetAll,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inputs) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsResponse_GetAll {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsResponse_GetAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1VideoInputsResponse_GetAll {
    return {
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1VideoInputsResponse_GetAll): unknown {
    const obj: any = {};
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => APIV1Identifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsResponse_GetAll>, I>>(
    base?: I,
  ): APIV1VideoInputsResponse_GetAll {
    return APIV1VideoInputsResponse_GetAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1VideoInputsResponse_GetAll>, I>>(
    object: I,
  ): APIV1VideoInputsResponse_GetAll {
    const message = createBaseAPIV1VideoInputsResponse_GetAll();
    message.inputs =
      object.inputs?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1VideoInputsResponse_Trigger(): APIV1VideoInputsResponse_Trigger {
  return {};
}

export const APIV1VideoInputsResponse_Trigger = {
  encode(
    _: APIV1VideoInputsResponse_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1VideoInputsResponse_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1VideoInputsResponse_Trigger();
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

  fromJSON(_: any): APIV1VideoInputsResponse_Trigger {
    return {};
  },

  toJSON(_: APIV1VideoInputsResponse_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1VideoInputsResponse_Trigger>, I>>(
    base?: I,
  ): APIV1VideoInputsResponse_Trigger {
    return APIV1VideoInputsResponse_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1VideoInputsResponse_Trigger>, I>,
  >(_: I): APIV1VideoInputsResponse_Trigger {
    const message = createBaseAPIV1VideoInputsResponse_Trigger();
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
