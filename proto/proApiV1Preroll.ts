/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1PrerollRequest {
  prerollCue?: APIV1PrerollRequest_PrerollCue | undefined;
  prerollPlaylistItem?: APIV1PrerollRequest_PrerollPlaylistItem | undefined;
  prerollMediaItem?: APIV1PrerollRequest_PrerollMediaItem | undefined;
  prerollAudioItem?: APIV1PrerollRequest_PrerollAudioItem | undefined;
  prerollVideoInput?: APIV1PrerollRequest_PrerollVideoInput | undefined;
  prerollLibraryItem?: APIV1PrerollRequest_PrerollLibraryItem | undefined;
  prerollNext?: APIV1PrerollRequest_PrerollNext | undefined;
  prerollPrevious?: APIV1PrerollRequest_PrerollPrevious | undefined;
  activatePrerollItem?: APIV1PrerollRequest_ActivatePrerollItem | undefined;
  cancelPrerollItem?: APIV1PrerollRequest_CancelPrerollItem | undefined;
}

export interface APIV1PrerollRequest_PrerollCue {
  index: number;
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollPlaylistItem {
  path: APIV1Identifier[];
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollMediaItem {
  path: APIV1Identifier[];
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollAudioItem {
  path: APIV1Identifier[];
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollVideoInput {
  id: string;
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollLibraryItem {
  path: APIV1Identifier[];
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollNext {
  prerollId: number;
}

export interface APIV1PrerollRequest_PrerollPrevious {
  prerollId: number;
}

export interface APIV1PrerollRequest_ActivatePrerollItem {
  id: number;
  time: number;
}

export interface APIV1PrerollRequest_CancelPrerollItem {
  id: number;
}

export interface APIV1PrerollResponse {
  prerollReady?: APIV1PrerollResponse_PrerollReady | undefined;
  activatePrerollItem?: APIV1PrerollResponse_ActivatePrerollItem | undefined;
  cancelPrerollItem?: APIV1PrerollResponse_CancelPrerollItem | undefined;
}

export interface APIV1PrerollResponse_PrerollReady {
  id: number;
  latency: number;
  time: number;
}

export interface APIV1PrerollResponse_ActivatePrerollItem {
  success: boolean;
}

export interface APIV1PrerollResponse_CancelPrerollItem {
  success: boolean;
}

function createBaseAPIV1PrerollRequest(): APIV1PrerollRequest {
  return {
    prerollCue: undefined,
    prerollPlaylistItem: undefined,
    prerollMediaItem: undefined,
    prerollAudioItem: undefined,
    prerollVideoInput: undefined,
    prerollLibraryItem: undefined,
    prerollNext: undefined,
    prerollPrevious: undefined,
    activatePrerollItem: undefined,
    cancelPrerollItem: undefined,
  };
}

export const APIV1PrerollRequest = {
  encode(
    message: APIV1PrerollRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prerollCue !== undefined) {
      APIV1PrerollRequest_PrerollCue.encode(
        message.prerollCue,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.prerollPlaylistItem !== undefined) {
      APIV1PrerollRequest_PrerollPlaylistItem.encode(
        message.prerollPlaylistItem,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.prerollMediaItem !== undefined) {
      APIV1PrerollRequest_PrerollMediaItem.encode(
        message.prerollMediaItem,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.prerollAudioItem !== undefined) {
      APIV1PrerollRequest_PrerollAudioItem.encode(
        message.prerollAudioItem,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.prerollVideoInput !== undefined) {
      APIV1PrerollRequest_PrerollVideoInput.encode(
        message.prerollVideoInput,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.prerollLibraryItem !== undefined) {
      APIV1PrerollRequest_PrerollLibraryItem.encode(
        message.prerollLibraryItem,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.prerollNext !== undefined) {
      APIV1PrerollRequest_PrerollNext.encode(
        message.prerollNext,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.prerollPrevious !== undefined) {
      APIV1PrerollRequest_PrerollPrevious.encode(
        message.prerollPrevious,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.activatePrerollItem !== undefined) {
      APIV1PrerollRequest_ActivatePrerollItem.encode(
        message.activatePrerollItem,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.cancelPrerollItem !== undefined) {
      APIV1PrerollRequest_CancelPrerollItem.encode(
        message.cancelPrerollItem,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PrerollRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prerollCue = APIV1PrerollRequest_PrerollCue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prerollPlaylistItem =
            APIV1PrerollRequest_PrerollPlaylistItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prerollMediaItem =
            APIV1PrerollRequest_PrerollMediaItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.prerollAudioItem =
            APIV1PrerollRequest_PrerollAudioItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.prerollVideoInput =
            APIV1PrerollRequest_PrerollVideoInput.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.prerollLibraryItem =
            APIV1PrerollRequest_PrerollLibraryItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.prerollNext = APIV1PrerollRequest_PrerollNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.prerollPrevious = APIV1PrerollRequest_PrerollPrevious.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activatePrerollItem =
            APIV1PrerollRequest_ActivatePrerollItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.cancelPrerollItem =
            APIV1PrerollRequest_CancelPrerollItem.decode(
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

  fromJSON(object: any): APIV1PrerollRequest {
    return {
      prerollCue: isSet(object.prerollCue)
        ? APIV1PrerollRequest_PrerollCue.fromJSON(object.prerollCue)
        : undefined,
      prerollPlaylistItem: isSet(object.prerollPlaylistItem)
        ? APIV1PrerollRequest_PrerollPlaylistItem.fromJSON(
            object.prerollPlaylistItem,
          )
        : undefined,
      prerollMediaItem: isSet(object.prerollMediaItem)
        ? APIV1PrerollRequest_PrerollMediaItem.fromJSON(object.prerollMediaItem)
        : undefined,
      prerollAudioItem: isSet(object.prerollAudioItem)
        ? APIV1PrerollRequest_PrerollAudioItem.fromJSON(object.prerollAudioItem)
        : undefined,
      prerollVideoInput: isSet(object.prerollVideoInput)
        ? APIV1PrerollRequest_PrerollVideoInput.fromJSON(
            object.prerollVideoInput,
          )
        : undefined,
      prerollLibraryItem: isSet(object.prerollLibraryItem)
        ? APIV1PrerollRequest_PrerollLibraryItem.fromJSON(
            object.prerollLibraryItem,
          )
        : undefined,
      prerollNext: isSet(object.prerollNext)
        ? APIV1PrerollRequest_PrerollNext.fromJSON(object.prerollNext)
        : undefined,
      prerollPrevious: isSet(object.prerollPrevious)
        ? APIV1PrerollRequest_PrerollPrevious.fromJSON(object.prerollPrevious)
        : undefined,
      activatePrerollItem: isSet(object.activatePrerollItem)
        ? APIV1PrerollRequest_ActivatePrerollItem.fromJSON(
            object.activatePrerollItem,
          )
        : undefined,
      cancelPrerollItem: isSet(object.cancelPrerollItem)
        ? APIV1PrerollRequest_CancelPrerollItem.fromJSON(
            object.cancelPrerollItem,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1PrerollRequest): unknown {
    const obj: any = {};
    if (message.prerollCue !== undefined) {
      obj.prerollCue = APIV1PrerollRequest_PrerollCue.toJSON(
        message.prerollCue,
      );
    }
    if (message.prerollPlaylistItem !== undefined) {
      obj.prerollPlaylistItem = APIV1PrerollRequest_PrerollPlaylistItem.toJSON(
        message.prerollPlaylistItem,
      );
    }
    if (message.prerollMediaItem !== undefined) {
      obj.prerollMediaItem = APIV1PrerollRequest_PrerollMediaItem.toJSON(
        message.prerollMediaItem,
      );
    }
    if (message.prerollAudioItem !== undefined) {
      obj.prerollAudioItem = APIV1PrerollRequest_PrerollAudioItem.toJSON(
        message.prerollAudioItem,
      );
    }
    if (message.prerollVideoInput !== undefined) {
      obj.prerollVideoInput = APIV1PrerollRequest_PrerollVideoInput.toJSON(
        message.prerollVideoInput,
      );
    }
    if (message.prerollLibraryItem !== undefined) {
      obj.prerollLibraryItem = APIV1PrerollRequest_PrerollLibraryItem.toJSON(
        message.prerollLibraryItem,
      );
    }
    if (message.prerollNext !== undefined) {
      obj.prerollNext = APIV1PrerollRequest_PrerollNext.toJSON(
        message.prerollNext,
      );
    }
    if (message.prerollPrevious !== undefined) {
      obj.prerollPrevious = APIV1PrerollRequest_PrerollPrevious.toJSON(
        message.prerollPrevious,
      );
    }
    if (message.activatePrerollItem !== undefined) {
      obj.activatePrerollItem = APIV1PrerollRequest_ActivatePrerollItem.toJSON(
        message.activatePrerollItem,
      );
    }
    if (message.cancelPrerollItem !== undefined) {
      obj.cancelPrerollItem = APIV1PrerollRequest_CancelPrerollItem.toJSON(
        message.cancelPrerollItem,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest>, I>>(
    base?: I,
  ): APIV1PrerollRequest {
    return APIV1PrerollRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PrerollRequest>, I>>(
    object: I,
  ): APIV1PrerollRequest {
    const message = createBaseAPIV1PrerollRequest();
    message.prerollCue =
      object.prerollCue !== undefined && object.prerollCue !== null
        ? APIV1PrerollRequest_PrerollCue.fromPartial(object.prerollCue)
        : undefined;
    message.prerollPlaylistItem =
      object.prerollPlaylistItem !== undefined &&
      object.prerollPlaylistItem !== null
        ? APIV1PrerollRequest_PrerollPlaylistItem.fromPartial(
            object.prerollPlaylistItem,
          )
        : undefined;
    message.prerollMediaItem =
      object.prerollMediaItem !== undefined && object.prerollMediaItem !== null
        ? APIV1PrerollRequest_PrerollMediaItem.fromPartial(
            object.prerollMediaItem,
          )
        : undefined;
    message.prerollAudioItem =
      object.prerollAudioItem !== undefined && object.prerollAudioItem !== null
        ? APIV1PrerollRequest_PrerollAudioItem.fromPartial(
            object.prerollAudioItem,
          )
        : undefined;
    message.prerollVideoInput =
      object.prerollVideoInput !== undefined &&
      object.prerollVideoInput !== null
        ? APIV1PrerollRequest_PrerollVideoInput.fromPartial(
            object.prerollVideoInput,
          )
        : undefined;
    message.prerollLibraryItem =
      object.prerollLibraryItem !== undefined &&
      object.prerollLibraryItem !== null
        ? APIV1PrerollRequest_PrerollLibraryItem.fromPartial(
            object.prerollLibraryItem,
          )
        : undefined;
    message.prerollNext =
      object.prerollNext !== undefined && object.prerollNext !== null
        ? APIV1PrerollRequest_PrerollNext.fromPartial(object.prerollNext)
        : undefined;
    message.prerollPrevious =
      object.prerollPrevious !== undefined && object.prerollPrevious !== null
        ? APIV1PrerollRequest_PrerollPrevious.fromPartial(
            object.prerollPrevious,
          )
        : undefined;
    message.activatePrerollItem =
      object.activatePrerollItem !== undefined &&
      object.activatePrerollItem !== null
        ? APIV1PrerollRequest_ActivatePrerollItem.fromPartial(
            object.activatePrerollItem,
          )
        : undefined;
    message.cancelPrerollItem =
      object.cancelPrerollItem !== undefined &&
      object.cancelPrerollItem !== null
        ? APIV1PrerollRequest_CancelPrerollItem.fromPartial(
            object.cancelPrerollItem,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollCue(): APIV1PrerollRequest_PrerollCue {
  return { index: 0, prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollCue = {
  encode(
    message: APIV1PrerollRequest_PrerollCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollCue {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollCue): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollCue>, I>>(
    base?: I,
  ): APIV1PrerollRequest_PrerollCue {
    return APIV1PrerollRequest_PrerollCue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollCue>, I>>(
    object: I,
  ): APIV1PrerollRequest_PrerollCue {
    const message = createBaseAPIV1PrerollRequest_PrerollCue();
    message.index = object.index ?? 0;
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollPlaylistItem(): APIV1PrerollRequest_PrerollPlaylistItem {
  return { path: [], prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollPlaylistItem = {
  encode(
    message: APIV1PrerollRequest_PrerollPlaylistItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.path) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollPlaylistItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollPlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollPlaylistItem {
    return {
      path: globalThis.Array.isArray(object?.path)
        ? object.path.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollPlaylistItem): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => APIV1Identifier.toJSON(e));
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollPlaylistItem>, I>,
  >(base?: I): APIV1PrerollRequest_PrerollPlaylistItem {
    return APIV1PrerollRequest_PrerollPlaylistItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollPlaylistItem>, I>,
  >(object: I): APIV1PrerollRequest_PrerollPlaylistItem {
    const message = createBaseAPIV1PrerollRequest_PrerollPlaylistItem();
    message.path =
      object.path?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollMediaItem(): APIV1PrerollRequest_PrerollMediaItem {
  return { path: [], prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollMediaItem = {
  encode(
    message: APIV1PrerollRequest_PrerollMediaItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.path) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollMediaItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollMediaItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollMediaItem {
    return {
      path: globalThis.Array.isArray(object?.path)
        ? object.path.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollMediaItem): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => APIV1Identifier.toJSON(e));
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollMediaItem>, I>>(
    base?: I,
  ): APIV1PrerollRequest_PrerollMediaItem {
    return APIV1PrerollRequest_PrerollMediaItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollMediaItem>, I>,
  >(object: I): APIV1PrerollRequest_PrerollMediaItem {
    const message = createBaseAPIV1PrerollRequest_PrerollMediaItem();
    message.path =
      object.path?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollAudioItem(): APIV1PrerollRequest_PrerollAudioItem {
  return { path: [], prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollAudioItem = {
  encode(
    message: APIV1PrerollRequest_PrerollAudioItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.path) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollAudioItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollAudioItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollAudioItem {
    return {
      path: globalThis.Array.isArray(object?.path)
        ? object.path.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollAudioItem): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => APIV1Identifier.toJSON(e));
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollAudioItem>, I>>(
    base?: I,
  ): APIV1PrerollRequest_PrerollAudioItem {
    return APIV1PrerollRequest_PrerollAudioItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollAudioItem>, I>,
  >(object: I): APIV1PrerollRequest_PrerollAudioItem {
    const message = createBaseAPIV1PrerollRequest_PrerollAudioItem();
    message.path =
      object.path?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollVideoInput(): APIV1PrerollRequest_PrerollVideoInput {
  return { id: '', prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollVideoInput = {
  encode(
    message: APIV1PrerollRequest_PrerollVideoInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollVideoInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollVideoInput();
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

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollVideoInput {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollVideoInput): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollVideoInput>, I>,
  >(base?: I): APIV1PrerollRequest_PrerollVideoInput {
    return APIV1PrerollRequest_PrerollVideoInput.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollVideoInput>, I>,
  >(object: I): APIV1PrerollRequest_PrerollVideoInput {
    const message = createBaseAPIV1PrerollRequest_PrerollVideoInput();
    message.id = object.id ?? '';
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollLibraryItem(): APIV1PrerollRequest_PrerollLibraryItem {
  return { path: [], prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollLibraryItem = {
  encode(
    message: APIV1PrerollRequest_PrerollLibraryItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.path) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.prerollId !== 0) {
      writer.uint32(16).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollLibraryItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollLibraryItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollLibraryItem {
    return {
      path: globalThis.Array.isArray(object?.path)
        ? object.path.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollLibraryItem): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => APIV1Identifier.toJSON(e));
    }
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollLibraryItem>, I>,
  >(base?: I): APIV1PrerollRequest_PrerollLibraryItem {
    return APIV1PrerollRequest_PrerollLibraryItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollLibraryItem>, I>,
  >(object: I): APIV1PrerollRequest_PrerollLibraryItem {
    const message = createBaseAPIV1PrerollRequest_PrerollLibraryItem();
    message.path =
      object.path?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollNext(): APIV1PrerollRequest_PrerollNext {
  return { prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollNext = {
  encode(
    message: APIV1PrerollRequest_PrerollNext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prerollId !== 0) {
      writer.uint32(8).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollNext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollNext {
    return {
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollNext): unknown {
    const obj: any = {};
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollNext>, I>>(
    base?: I,
  ): APIV1PrerollRequest_PrerollNext {
    return APIV1PrerollRequest_PrerollNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollNext>, I>>(
    object: I,
  ): APIV1PrerollRequest_PrerollNext {
    const message = createBaseAPIV1PrerollRequest_PrerollNext();
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_PrerollPrevious(): APIV1PrerollRequest_PrerollPrevious {
  return { prerollId: 0 };
}

export const APIV1PrerollRequest_PrerollPrevious = {
  encode(
    message: APIV1PrerollRequest_PrerollPrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prerollId !== 0) {
      writer.uint32(8).uint64(message.prerollId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_PrerollPrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_PrerollPrevious();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.prerollId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_PrerollPrevious {
    return {
      prerollId: isSet(object.prerollId)
        ? globalThis.Number(object.prerollId)
        : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_PrerollPrevious): unknown {
    const obj: any = {};
    if (message.prerollId !== 0) {
      obj.prerollId = Math.round(message.prerollId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollPrevious>, I>>(
    base?: I,
  ): APIV1PrerollRequest_PrerollPrevious {
    return APIV1PrerollRequest_PrerollPrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_PrerollPrevious>, I>,
  >(object: I): APIV1PrerollRequest_PrerollPrevious {
    const message = createBaseAPIV1PrerollRequest_PrerollPrevious();
    message.prerollId = object.prerollId ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_ActivatePrerollItem(): APIV1PrerollRequest_ActivatePrerollItem {
  return { id: 0, time: 0 };
}

export const APIV1PrerollRequest_ActivatePrerollItem = {
  encode(
    message: APIV1PrerollRequest_ActivatePrerollItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== 0) {
      writer.uint32(16).uint64(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_ActivatePrerollItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_ActivatePrerollItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_ActivatePrerollItem {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
    };
  },

  toJSON(message: APIV1PrerollRequest_ActivatePrerollItem): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollRequest_ActivatePrerollItem>, I>,
  >(base?: I): APIV1PrerollRequest_ActivatePrerollItem {
    return APIV1PrerollRequest_ActivatePrerollItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_ActivatePrerollItem>, I>,
  >(object: I): APIV1PrerollRequest_ActivatePrerollItem {
    const message = createBaseAPIV1PrerollRequest_ActivatePrerollItem();
    message.id = object.id ?? 0;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollRequest_CancelPrerollItem(): APIV1PrerollRequest_CancelPrerollItem {
  return { id: 0 };
}

export const APIV1PrerollRequest_CancelPrerollItem = {
  encode(
    message: APIV1PrerollRequest_CancelPrerollItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollRequest_CancelPrerollItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollRequest_CancelPrerollItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollRequest_CancelPrerollItem {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: APIV1PrerollRequest_CancelPrerollItem): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollRequest_CancelPrerollItem>, I>,
  >(base?: I): APIV1PrerollRequest_CancelPrerollItem {
    return APIV1PrerollRequest_CancelPrerollItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollRequest_CancelPrerollItem>, I>,
  >(object: I): APIV1PrerollRequest_CancelPrerollItem {
    const message = createBaseAPIV1PrerollRequest_CancelPrerollItem();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollResponse(): APIV1PrerollResponse {
  return {
    prerollReady: undefined,
    activatePrerollItem: undefined,
    cancelPrerollItem: undefined,
  };
}

export const APIV1PrerollResponse = {
  encode(
    message: APIV1PrerollResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prerollReady !== undefined) {
      APIV1PrerollResponse_PrerollReady.encode(
        message.prerollReady,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.activatePrerollItem !== undefined) {
      APIV1PrerollResponse_ActivatePrerollItem.encode(
        message.activatePrerollItem,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.cancelPrerollItem !== undefined) {
      APIV1PrerollResponse_CancelPrerollItem.encode(
        message.cancelPrerollItem,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prerollReady = APIV1PrerollResponse_PrerollReady.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.activatePrerollItem =
            APIV1PrerollResponse_ActivatePrerollItem.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cancelPrerollItem =
            APIV1PrerollResponse_CancelPrerollItem.decode(
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

  fromJSON(object: any): APIV1PrerollResponse {
    return {
      prerollReady: isSet(object.prerollReady)
        ? APIV1PrerollResponse_PrerollReady.fromJSON(object.prerollReady)
        : undefined,
      activatePrerollItem: isSet(object.activatePrerollItem)
        ? APIV1PrerollResponse_ActivatePrerollItem.fromJSON(
            object.activatePrerollItem,
          )
        : undefined,
      cancelPrerollItem: isSet(object.cancelPrerollItem)
        ? APIV1PrerollResponse_CancelPrerollItem.fromJSON(
            object.cancelPrerollItem,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1PrerollResponse): unknown {
    const obj: any = {};
    if (message.prerollReady !== undefined) {
      obj.prerollReady = APIV1PrerollResponse_PrerollReady.toJSON(
        message.prerollReady,
      );
    }
    if (message.activatePrerollItem !== undefined) {
      obj.activatePrerollItem = APIV1PrerollResponse_ActivatePrerollItem.toJSON(
        message.activatePrerollItem,
      );
    }
    if (message.cancelPrerollItem !== undefined) {
      obj.cancelPrerollItem = APIV1PrerollResponse_CancelPrerollItem.toJSON(
        message.cancelPrerollItem,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollResponse>, I>>(
    base?: I,
  ): APIV1PrerollResponse {
    return APIV1PrerollResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PrerollResponse>, I>>(
    object: I,
  ): APIV1PrerollResponse {
    const message = createBaseAPIV1PrerollResponse();
    message.prerollReady =
      object.prerollReady !== undefined && object.prerollReady !== null
        ? APIV1PrerollResponse_PrerollReady.fromPartial(object.prerollReady)
        : undefined;
    message.activatePrerollItem =
      object.activatePrerollItem !== undefined &&
      object.activatePrerollItem !== null
        ? APIV1PrerollResponse_ActivatePrerollItem.fromPartial(
            object.activatePrerollItem,
          )
        : undefined;
    message.cancelPrerollItem =
      object.cancelPrerollItem !== undefined &&
      object.cancelPrerollItem !== null
        ? APIV1PrerollResponse_CancelPrerollItem.fromPartial(
            object.cancelPrerollItem,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1PrerollResponse_PrerollReady(): APIV1PrerollResponse_PrerollReady {
  return { id: 0, latency: 0, time: 0 };
}

export const APIV1PrerollResponse_PrerollReady = {
  encode(
    message: APIV1PrerollResponse_PrerollReady,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.latency !== 0) {
      writer.uint32(16).uint64(message.latency);
    }
    if (message.time !== 0) {
      writer.uint32(24).uint64(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollResponse_PrerollReady {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollResponse_PrerollReady();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.latency = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.time = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollResponse_PrerollReady {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      latency: isSet(object.latency) ? globalThis.Number(object.latency) : 0,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
    };
  },

  toJSON(message: APIV1PrerollResponse_PrerollReady): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.latency !== 0) {
      obj.latency = Math.round(message.latency);
    }
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PrerollResponse_PrerollReady>, I>>(
    base?: I,
  ): APIV1PrerollResponse_PrerollReady {
    return APIV1PrerollResponse_PrerollReady.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollResponse_PrerollReady>, I>,
  >(object: I): APIV1PrerollResponse_PrerollReady {
    const message = createBaseAPIV1PrerollResponse_PrerollReady();
    message.id = object.id ?? 0;
    message.latency = object.latency ?? 0;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAPIV1PrerollResponse_ActivatePrerollItem(): APIV1PrerollResponse_ActivatePrerollItem {
  return { success: false };
}

export const APIV1PrerollResponse_ActivatePrerollItem = {
  encode(
    message: APIV1PrerollResponse_ActivatePrerollItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollResponse_ActivatePrerollItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollResponse_ActivatePrerollItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollResponse_ActivatePrerollItem {
    return {
      success: isSet(object.success)
        ? globalThis.Boolean(object.success)
        : false,
    };
  },

  toJSON(message: APIV1PrerollResponse_ActivatePrerollItem): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollResponse_ActivatePrerollItem>, I>,
  >(base?: I): APIV1PrerollResponse_ActivatePrerollItem {
    return APIV1PrerollResponse_ActivatePrerollItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollResponse_ActivatePrerollItem>, I>,
  >(object: I): APIV1PrerollResponse_ActivatePrerollItem {
    const message = createBaseAPIV1PrerollResponse_ActivatePrerollItem();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseAPIV1PrerollResponse_CancelPrerollItem(): APIV1PrerollResponse_CancelPrerollItem {
  return { success: false };
}

export const APIV1PrerollResponse_CancelPrerollItem = {
  encode(
    message: APIV1PrerollResponse_CancelPrerollItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PrerollResponse_CancelPrerollItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PrerollResponse_CancelPrerollItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PrerollResponse_CancelPrerollItem {
    return {
      success: isSet(object.success)
        ? globalThis.Boolean(object.success)
        : false,
    };
  },

  toJSON(message: APIV1PrerollResponse_CancelPrerollItem): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PrerollResponse_CancelPrerollItem>, I>,
  >(base?: I): APIV1PrerollResponse_CancelPrerollItem {
    return APIV1PrerollResponse_CancelPrerollItem.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PrerollResponse_CancelPrerollItem>, I>,
  >(object: I): APIV1PrerollResponse_CancelPrerollItem {
    const message = createBaseAPIV1PrerollResponse_CancelPrerollItem();
    message.success = object.success ?? false;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
