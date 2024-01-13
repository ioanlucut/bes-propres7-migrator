/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1MasksRequest {
  masks?: APIV1MasksRequest_Masks | undefined;
  getMask?: APIV1MasksRequest_GetMask | undefined;
  getThumbnail?: APIV1MasksRequest_GetThumbnail | undefined;
}

export interface APIV1MasksRequest_Masks {}

export interface APIV1MasksRequest_GetMask {
  id: string;
}

export interface APIV1MasksRequest_GetThumbnail {
  id: string;
  quality: number;
}

export interface APIV1MasksResponse {
  masks?: APIV1MasksResponse_Masks | undefined;
  getMask?: APIV1MasksResponse_GetMask | undefined;
  getThumbnail?: APIV1MasksResponse_GetThumbnail | undefined;
}

export interface APIV1MasksResponse_Masks {
  masks: APIV1Identifier[];
}

export interface APIV1MasksResponse_GetMask {
  id: APIV1Identifier | undefined;
}

export interface APIV1MasksResponse_GetThumbnail {
  data: Uint8Array;
}

function createBaseAPIV1MasksRequest(): APIV1MasksRequest {
  return { masks: undefined, getMask: undefined, getThumbnail: undefined };
}

export const APIV1MasksRequest = {
  encode(
    message: APIV1MasksRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.masks !== undefined) {
      APIV1MasksRequest_Masks.encode(
        message.masks,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getMask !== undefined) {
      APIV1MasksRequest_GetMask.encode(
        message.getMask,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1MasksRequest_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MasksRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.masks = APIV1MasksRequest_Masks.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getMask = APIV1MasksRequest_GetMask.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getThumbnail = APIV1MasksRequest_GetThumbnail.decode(
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

  fromJSON(object: any): APIV1MasksRequest {
    return {
      masks: isSet(object.masks)
        ? APIV1MasksRequest_Masks.fromJSON(object.masks)
        : undefined,
      getMask: isSet(object.getMask)
        ? APIV1MasksRequest_GetMask.fromJSON(object.getMask)
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1MasksRequest_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: APIV1MasksRequest): unknown {
    const obj: any = {};
    if (message.masks !== undefined) {
      obj.masks = APIV1MasksRequest_Masks.toJSON(message.masks);
    }
    if (message.getMask !== undefined) {
      obj.getMask = APIV1MasksRequest_GetMask.toJSON(message.getMask);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1MasksRequest_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksRequest>, I>>(
    base?: I,
  ): APIV1MasksRequest {
    return APIV1MasksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksRequest>, I>>(
    object: I,
  ): APIV1MasksRequest {
    const message = createBaseAPIV1MasksRequest();
    message.masks =
      object.masks !== undefined && object.masks !== null
        ? APIV1MasksRequest_Masks.fromPartial(object.masks)
        : undefined;
    message.getMask =
      object.getMask !== undefined && object.getMask !== null
        ? APIV1MasksRequest_GetMask.fromPartial(object.getMask)
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1MasksRequest_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MasksRequest_Masks(): APIV1MasksRequest_Masks {
  return {};
}

export const APIV1MasksRequest_Masks = {
  encode(
    _: APIV1MasksRequest_Masks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MasksRequest_Masks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksRequest_Masks();
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

  fromJSON(_: any): APIV1MasksRequest_Masks {
    return {};
  },

  toJSON(_: APIV1MasksRequest_Masks): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksRequest_Masks>, I>>(
    base?: I,
  ): APIV1MasksRequest_Masks {
    return APIV1MasksRequest_Masks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksRequest_Masks>, I>>(
    _: I,
  ): APIV1MasksRequest_Masks {
    const message = createBaseAPIV1MasksRequest_Masks();
    return message;
  },
};

function createBaseAPIV1MasksRequest_GetMask(): APIV1MasksRequest_GetMask {
  return { id: '' };
}

export const APIV1MasksRequest_GetMask = {
  encode(
    message: APIV1MasksRequest_GetMask,
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
  ): APIV1MasksRequest_GetMask {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksRequest_GetMask();
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

  fromJSON(object: any): APIV1MasksRequest_GetMask {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MasksRequest_GetMask): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksRequest_GetMask>, I>>(
    base?: I,
  ): APIV1MasksRequest_GetMask {
    return APIV1MasksRequest_GetMask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksRequest_GetMask>, I>>(
    object: I,
  ): APIV1MasksRequest_GetMask {
    const message = createBaseAPIV1MasksRequest_GetMask();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MasksRequest_GetThumbnail(): APIV1MasksRequest_GetThumbnail {
  return { id: '', quality: 0 };
}

export const APIV1MasksRequest_GetThumbnail = {
  encode(
    message: APIV1MasksRequest_GetThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.quality !== 0) {
      writer.uint32(16).int32(message.quality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MasksRequest_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksRequest_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quality = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MasksRequest_GetThumbnail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1MasksRequest_GetThumbnail): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksRequest_GetThumbnail>, I>>(
    base?: I,
  ): APIV1MasksRequest_GetThumbnail {
    return APIV1MasksRequest_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksRequest_GetThumbnail>, I>>(
    object: I,
  ): APIV1MasksRequest_GetThumbnail {
    const message = createBaseAPIV1MasksRequest_GetThumbnail();
    message.id = object.id ?? '';
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1MasksResponse(): APIV1MasksResponse {
  return { masks: undefined, getMask: undefined, getThumbnail: undefined };
}

export const APIV1MasksResponse = {
  encode(
    message: APIV1MasksResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.masks !== undefined) {
      APIV1MasksResponse_Masks.encode(
        message.masks,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getMask !== undefined) {
      APIV1MasksResponse_GetMask.encode(
        message.getMask,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1MasksResponse_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MasksResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.masks = APIV1MasksResponse_Masks.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getMask = APIV1MasksResponse_GetMask.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getThumbnail = APIV1MasksResponse_GetThumbnail.decode(
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

  fromJSON(object: any): APIV1MasksResponse {
    return {
      masks: isSet(object.masks)
        ? APIV1MasksResponse_Masks.fromJSON(object.masks)
        : undefined,
      getMask: isSet(object.getMask)
        ? APIV1MasksResponse_GetMask.fromJSON(object.getMask)
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1MasksResponse_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: APIV1MasksResponse): unknown {
    const obj: any = {};
    if (message.masks !== undefined) {
      obj.masks = APIV1MasksResponse_Masks.toJSON(message.masks);
    }
    if (message.getMask !== undefined) {
      obj.getMask = APIV1MasksResponse_GetMask.toJSON(message.getMask);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1MasksResponse_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksResponse>, I>>(
    base?: I,
  ): APIV1MasksResponse {
    return APIV1MasksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksResponse>, I>>(
    object: I,
  ): APIV1MasksResponse {
    const message = createBaseAPIV1MasksResponse();
    message.masks =
      object.masks !== undefined && object.masks !== null
        ? APIV1MasksResponse_Masks.fromPartial(object.masks)
        : undefined;
    message.getMask =
      object.getMask !== undefined && object.getMask !== null
        ? APIV1MasksResponse_GetMask.fromPartial(object.getMask)
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1MasksResponse_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MasksResponse_Masks(): APIV1MasksResponse_Masks {
  return { masks: [] };
}

export const APIV1MasksResponse_Masks = {
  encode(
    message: APIV1MasksResponse_Masks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.masks) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MasksResponse_Masks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksResponse_Masks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.masks.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MasksResponse_Masks {
    return {
      masks: globalThis.Array.isArray(object?.masks)
        ? object.masks.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MasksResponse_Masks): unknown {
    const obj: any = {};
    if (message.masks?.length) {
      obj.masks = message.masks.map((e) => APIV1Identifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksResponse_Masks>, I>>(
    base?: I,
  ): APIV1MasksResponse_Masks {
    return APIV1MasksResponse_Masks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksResponse_Masks>, I>>(
    object: I,
  ): APIV1MasksResponse_Masks {
    const message = createBaseAPIV1MasksResponse_Masks();
    message.masks =
      object.masks?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MasksResponse_GetMask(): APIV1MasksResponse_GetMask {
  return { id: undefined };
}

export const APIV1MasksResponse_GetMask = {
  encode(
    message: APIV1MasksResponse_GetMask,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MasksResponse_GetMask {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksResponse_GetMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MasksResponse_GetMask {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1MasksResponse_GetMask): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksResponse_GetMask>, I>>(
    base?: I,
  ): APIV1MasksResponse_GetMask {
    return APIV1MasksResponse_GetMask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksResponse_GetMask>, I>>(
    object: I,
  ): APIV1MasksResponse_GetMask {
    const message = createBaseAPIV1MasksResponse_GetMask();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MasksResponse_GetThumbnail(): APIV1MasksResponse_GetThumbnail {
  return { data: new Uint8Array(0) };
}

export const APIV1MasksResponse_GetThumbnail = {
  encode(
    message: APIV1MasksResponse_GetThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MasksResponse_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MasksResponse_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MasksResponse_GetThumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1MasksResponse_GetThumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MasksResponse_GetThumbnail>, I>>(
    base?: I,
  ): APIV1MasksResponse_GetThumbnail {
    return APIV1MasksResponse_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MasksResponse_GetThumbnail>, I>>(
    object: I,
  ): APIV1MasksResponse_GetThumbnail {
    const message = createBaseAPIV1MasksResponse_GetThumbnail();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

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
