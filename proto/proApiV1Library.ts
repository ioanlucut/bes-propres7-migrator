/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1LibraryRequest {
  libraries?: APIV1LibraryRequest_Libraries | undefined;
  library?: APIV1LibraryRequest_Library | undefined;
  trigger?: APIV1LibraryRequest_Trigger | undefined;
}

export interface APIV1LibraryRequest_Libraries {}

export interface APIV1LibraryRequest_Library {
  id: string;
}

export interface APIV1LibraryRequest_Trigger {
  libraryId: string;
  presentationId: string;
  index: number;
}

export interface APIV1LibraryResponse {
  libraries?: APIV1LibraryResponse_Libraries | undefined;
  library?: APIV1LibraryResponse_Library | undefined;
  triggger?: APIV1LibraryResponse_Trigger | undefined;
}

export interface APIV1LibraryResponse_Libraries {
  libraries: APIV1Identifier[];
}

export interface APIV1LibraryResponse_Library {
  updateType: APIV1LibraryResponse_Library_UpdateType;
  items: APIV1Identifier[];
}

export enum APIV1LibraryResponse_Library_UpdateType {
  all = 0,
  add = 1,
  remove = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1LibraryResponse_Library_UpdateTypeFromJSON(
  object: any,
): APIV1LibraryResponse_Library_UpdateType {
  switch (object) {
    case 0:
    case 'all':
      return APIV1LibraryResponse_Library_UpdateType.all;
    case 1:
    case 'add':
      return APIV1LibraryResponse_Library_UpdateType.add;
    case 2:
    case 'remove':
      return APIV1LibraryResponse_Library_UpdateType.remove;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1LibraryResponse_Library_UpdateType.UNRECOGNIZED;
  }
}

export function aPIV1LibraryResponse_Library_UpdateTypeToJSON(
  object: APIV1LibraryResponse_Library_UpdateType,
): string {
  switch (object) {
    case APIV1LibraryResponse_Library_UpdateType.all:
      return 'all';
    case APIV1LibraryResponse_Library_UpdateType.add:
      return 'add';
    case APIV1LibraryResponse_Library_UpdateType.remove:
      return 'remove';
    case APIV1LibraryResponse_Library_UpdateType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1LibraryResponse_Trigger {}

function createBaseAPIV1LibraryRequest(): APIV1LibraryRequest {
  return { libraries: undefined, library: undefined, trigger: undefined };
}

export const APIV1LibraryRequest = {
  encode(
    message: APIV1LibraryRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraries !== undefined) {
      APIV1LibraryRequest_Libraries.encode(
        message.libraries,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.library !== undefined) {
      APIV1LibraryRequest_Library.encode(
        message.library,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1LibraryRequest_Trigger.encode(
        message.trigger,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1LibraryRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraries = APIV1LibraryRequest_Libraries.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.library = APIV1LibraryRequest_Library.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trigger = APIV1LibraryRequest_Trigger.decode(
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

  fromJSON(object: any): APIV1LibraryRequest {
    return {
      libraries: isSet(object.libraries)
        ? APIV1LibraryRequest_Libraries.fromJSON(object.libraries)
        : undefined,
      library: isSet(object.library)
        ? APIV1LibraryRequest_Library.fromJSON(object.library)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1LibraryRequest_Trigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1LibraryRequest): unknown {
    const obj: any = {};
    if (message.libraries !== undefined) {
      obj.libraries = APIV1LibraryRequest_Libraries.toJSON(message.libraries);
    }
    if (message.library !== undefined) {
      obj.library = APIV1LibraryRequest_Library.toJSON(message.library);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1LibraryRequest_Trigger.toJSON(message.trigger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryRequest>, I>>(
    base?: I,
  ): APIV1LibraryRequest {
    return APIV1LibraryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryRequest>, I>>(
    object: I,
  ): APIV1LibraryRequest {
    const message = createBaseAPIV1LibraryRequest();
    message.libraries =
      object.libraries !== undefined && object.libraries !== null
        ? APIV1LibraryRequest_Libraries.fromPartial(object.libraries)
        : undefined;
    message.library =
      object.library !== undefined && object.library !== null
        ? APIV1LibraryRequest_Library.fromPartial(object.library)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1LibraryRequest_Trigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LibraryRequest_Libraries(): APIV1LibraryRequest_Libraries {
  return {};
}

export const APIV1LibraryRequest_Libraries = {
  encode(
    _: APIV1LibraryRequest_Libraries,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryRequest_Libraries {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryRequest_Libraries();
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

  fromJSON(_: any): APIV1LibraryRequest_Libraries {
    return {};
  },

  toJSON(_: APIV1LibraryRequest_Libraries): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryRequest_Libraries>, I>>(
    base?: I,
  ): APIV1LibraryRequest_Libraries {
    return APIV1LibraryRequest_Libraries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryRequest_Libraries>, I>>(
    _: I,
  ): APIV1LibraryRequest_Libraries {
    const message = createBaseAPIV1LibraryRequest_Libraries();
    return message;
  },
};

function createBaseAPIV1LibraryRequest_Library(): APIV1LibraryRequest_Library {
  return { id: '' };
}

export const APIV1LibraryRequest_Library = {
  encode(
    message: APIV1LibraryRequest_Library,
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
  ): APIV1LibraryRequest_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryRequest_Library();
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

  fromJSON(object: any): APIV1LibraryRequest_Library {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1LibraryRequest_Library): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryRequest_Library>, I>>(
    base?: I,
  ): APIV1LibraryRequest_Library {
    return APIV1LibraryRequest_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryRequest_Library>, I>>(
    object: I,
  ): APIV1LibraryRequest_Library {
    const message = createBaseAPIV1LibraryRequest_Library();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1LibraryRequest_Trigger(): APIV1LibraryRequest_Trigger {
  return { libraryId: '', presentationId: '', index: 0 };
}

export const APIV1LibraryRequest_Trigger = {
  encode(
    message: APIV1LibraryRequest_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraryId !== '') {
      writer.uint32(10).string(message.libraryId);
    }
    if (message.presentationId !== '') {
      writer.uint32(18).string(message.presentationId);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryRequest_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryRequest_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraryId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presentationId = reader.string();
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

  fromJSON(object: any): APIV1LibraryRequest_Trigger {
    return {
      libraryId: isSet(object.libraryId)
        ? globalThis.String(object.libraryId)
        : '',
      presentationId: isSet(object.presentationId)
        ? globalThis.String(object.presentationId)
        : '',
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: APIV1LibraryRequest_Trigger): unknown {
    const obj: any = {};
    if (message.libraryId !== '') {
      obj.libraryId = message.libraryId;
    }
    if (message.presentationId !== '') {
      obj.presentationId = message.presentationId;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryRequest_Trigger>, I>>(
    base?: I,
  ): APIV1LibraryRequest_Trigger {
    return APIV1LibraryRequest_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryRequest_Trigger>, I>>(
    object: I,
  ): APIV1LibraryRequest_Trigger {
    const message = createBaseAPIV1LibraryRequest_Trigger();
    message.libraryId = object.libraryId ?? '';
    message.presentationId = object.presentationId ?? '';
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseAPIV1LibraryResponse(): APIV1LibraryResponse {
  return { libraries: undefined, library: undefined, triggger: undefined };
}

export const APIV1LibraryResponse = {
  encode(
    message: APIV1LibraryResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraries !== undefined) {
      APIV1LibraryResponse_Libraries.encode(
        message.libraries,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.library !== undefined) {
      APIV1LibraryResponse_Library.encode(
        message.library,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.triggger !== undefined) {
      APIV1LibraryResponse_Trigger.encode(
        message.triggger,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraries = APIV1LibraryResponse_Libraries.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.library = APIV1LibraryResponse_Library.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.triggger = APIV1LibraryResponse_Trigger.decode(
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

  fromJSON(object: any): APIV1LibraryResponse {
    return {
      libraries: isSet(object.libraries)
        ? APIV1LibraryResponse_Libraries.fromJSON(object.libraries)
        : undefined,
      library: isSet(object.library)
        ? APIV1LibraryResponse_Library.fromJSON(object.library)
        : undefined,
      triggger: isSet(object.triggger)
        ? APIV1LibraryResponse_Trigger.fromJSON(object.triggger)
        : undefined,
    };
  },

  toJSON(message: APIV1LibraryResponse): unknown {
    const obj: any = {};
    if (message.libraries !== undefined) {
      obj.libraries = APIV1LibraryResponse_Libraries.toJSON(message.libraries);
    }
    if (message.library !== undefined) {
      obj.library = APIV1LibraryResponse_Library.toJSON(message.library);
    }
    if (message.triggger !== undefined) {
      obj.triggger = APIV1LibraryResponse_Trigger.toJSON(message.triggger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryResponse>, I>>(
    base?: I,
  ): APIV1LibraryResponse {
    return APIV1LibraryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryResponse>, I>>(
    object: I,
  ): APIV1LibraryResponse {
    const message = createBaseAPIV1LibraryResponse();
    message.libraries =
      object.libraries !== undefined && object.libraries !== null
        ? APIV1LibraryResponse_Libraries.fromPartial(object.libraries)
        : undefined;
    message.library =
      object.library !== undefined && object.library !== null
        ? APIV1LibraryResponse_Library.fromPartial(object.library)
        : undefined;
    message.triggger =
      object.triggger !== undefined && object.triggger !== null
        ? APIV1LibraryResponse_Trigger.fromPartial(object.triggger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LibraryResponse_Libraries(): APIV1LibraryResponse_Libraries {
  return { libraries: [] };
}

export const APIV1LibraryResponse_Libraries = {
  encode(
    message: APIV1LibraryResponse_Libraries,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.libraries) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryResponse_Libraries {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryResponse_Libraries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraries.push(
            APIV1Identifier.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1LibraryResponse_Libraries {
    return {
      libraries: globalThis.Array.isArray(object?.libraries)
        ? object.libraries.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1LibraryResponse_Libraries): unknown {
    const obj: any = {};
    if (message.libraries?.length) {
      obj.libraries = message.libraries.map((e) => APIV1Identifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryResponse_Libraries>, I>>(
    base?: I,
  ): APIV1LibraryResponse_Libraries {
    return APIV1LibraryResponse_Libraries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryResponse_Libraries>, I>>(
    object: I,
  ): APIV1LibraryResponse_Libraries {
    const message = createBaseAPIV1LibraryResponse_Libraries();
    message.libraries =
      object.libraries?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1LibraryResponse_Library(): APIV1LibraryResponse_Library {
  return { updateType: 0, items: [] };
}

export const APIV1LibraryResponse_Library = {
  encode(
    message: APIV1LibraryResponse_Library,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.updateType !== 0) {
      writer.uint32(8).int32(message.updateType);
    }
    for (const v of message.items) {
      APIV1Identifier.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryResponse_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryResponse_Library();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.updateType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LibraryResponse_Library {
    return {
      updateType: isSet(object.updateType)
        ? aPIV1LibraryResponse_Library_UpdateTypeFromJSON(object.updateType)
        : 0,
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1LibraryResponse_Library): unknown {
    const obj: any = {};
    if (message.updateType !== 0) {
      obj.updateType = aPIV1LibraryResponse_Library_UpdateTypeToJSON(
        message.updateType,
      );
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => APIV1Identifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryResponse_Library>, I>>(
    base?: I,
  ): APIV1LibraryResponse_Library {
    return APIV1LibraryResponse_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryResponse_Library>, I>>(
    object: I,
  ): APIV1LibraryResponse_Library {
    const message = createBaseAPIV1LibraryResponse_Library();
    message.updateType = object.updateType ?? 0;
    message.items =
      object.items?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1LibraryResponse_Trigger(): APIV1LibraryResponse_Trigger {
  return {};
}

export const APIV1LibraryResponse_Trigger = {
  encode(
    _: APIV1LibraryResponse_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LibraryResponse_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LibraryResponse_Trigger();
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

  fromJSON(_: any): APIV1LibraryResponse_Trigger {
    return {};
  },

  toJSON(_: APIV1LibraryResponse_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LibraryResponse_Trigger>, I>>(
    base?: I,
  ): APIV1LibraryResponse_Trigger {
    return APIV1LibraryResponse_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LibraryResponse_Trigger>, I>>(
    _: I,
  ): APIV1LibraryResponse_Trigger {
    const message = createBaseAPIV1LibraryResponse_Trigger();
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
