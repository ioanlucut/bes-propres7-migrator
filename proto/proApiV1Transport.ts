/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import {
  APIV1LayerType,
  aPIV1LayerTypeFromJSON,
  aPIV1LayerTypeToJSON,
} from './proApiV1LayerType';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface APIV1TransportRequest {
  play?: APIV1TransportRequest_Play | undefined;
  pause?: APIV1TransportRequest_Pause | undefined;
  skipBackward?: APIV1TransportRequest_SkipBackward | undefined;
  skipForward?: APIV1TransportRequest_SkipForward | undefined;
  goToEnd?: APIV1TransportRequest_GoToEnd | undefined;
  getTime?: APIV1TransportRequest_GetTime | undefined;
  putTime?: APIV1TransportRequest_PutTime | undefined;
  getAutoAdvance?: APIV1TransportRequest_GetAutoAdvance | undefined;
  deleteAutoAdvance?: APIV1TransportRequest_DeleteAutoAdvance | undefined;
  getCurrentMedia?: APIV1TransportRequest_GetCurrentMedia | undefined;
}

export interface APIV1TransportRequest_Play {
  layer: APIV1LayerType;
}

export interface APIV1TransportRequest_Pause {
  layer: APIV1LayerType;
}

export interface APIV1TransportRequest_SkipBackward {
  layer: APIV1LayerType;
  seconds: number;
}

export interface APIV1TransportRequest_SkipForward {
  layer: APIV1LayerType;
  seconds: number;
}

export interface APIV1TransportRequest_GoToEnd {
  layer: APIV1LayerType;
  seconds: number;
}

export interface APIV1TransportRequest_GetTime {
  layer: APIV1LayerType;
}

export interface APIV1TransportRequest_PutTime {
  layer: APIV1LayerType;
  seconds: number;
}

export interface APIV1TransportRequest_GetAutoAdvance {
  layer: APIV1LayerType;
}

export interface APIV1TransportRequest_DeleteAutoAdvance {
  layer: APIV1LayerType;
}

export interface APIV1TransportRequest_GetCurrentMedia {
  layer: APIV1LayerType;
}

export interface APIV1TransportResponse {
  play?: APIV1TransportResponse_Play | undefined;
  pause?: APIV1TransportResponse_Pause | undefined;
  skipBackward?: APIV1TransportResponse_SkipBackward | undefined;
  skipForward?: APIV1TransportResponse_SkipForward | undefined;
  goToEnd?: APIV1TransportResponse_GoToEnd | undefined;
  getTime?: APIV1TransportResponse_GetTime | undefined;
  putTime?: APIV1TransportResponse_PutTime | undefined;
  getAutoAdvance?: APIV1TransportResponse_GetAutoAdvance | undefined;
  deleteAutoAdvance?: APIV1TransportResponse_DeleteAutoAdvance | undefined;
  getCurrentMedia?: APIV1TransportResponse_GetCurrentMedia | undefined;
}

export interface APIV1TransportResponse_Play {}

export interface APIV1TransportResponse_Pause {}

export interface APIV1TransportResponse_SkipBackward {}

export interface APIV1TransportResponse_SkipForward {}

export interface APIV1TransportResponse_GoToEnd {}

export interface APIV1TransportResponse_GetTime {
  seconds: number;
}

export interface APIV1TransportResponse_PutTime {}

export interface APIV1TransportResponse_GetAutoAdvance {
  autoAdvance: boolean;
}

export interface APIV1TransportResponse_DeleteAutoAdvance {}

export interface APIV1TransportResponse_GetCurrentMedia {
  isPlaying: boolean;
  uuid: UUID | undefined;
  name: string;
  artist: string;
  audioOnly: boolean;
  duration: number;
}

function createBaseAPIV1TransportRequest(): APIV1TransportRequest {
  return {
    play: undefined,
    pause: undefined,
    skipBackward: undefined,
    skipForward: undefined,
    goToEnd: undefined,
    getTime: undefined,
    putTime: undefined,
    getAutoAdvance: undefined,
    deleteAutoAdvance: undefined,
    getCurrentMedia: undefined,
  };
}

export const APIV1TransportRequest = {
  encode(
    message: APIV1TransportRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.play !== undefined) {
      APIV1TransportRequest_Play.encode(
        message.play,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.pause !== undefined) {
      APIV1TransportRequest_Pause.encode(
        message.pause,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.skipBackward !== undefined) {
      APIV1TransportRequest_SkipBackward.encode(
        message.skipBackward,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.skipForward !== undefined) {
      APIV1TransportRequest_SkipForward.encode(
        message.skipForward,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.goToEnd !== undefined) {
      APIV1TransportRequest_GoToEnd.encode(
        message.goToEnd,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getTime !== undefined) {
      APIV1TransportRequest_GetTime.encode(
        message.getTime,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.putTime !== undefined) {
      APIV1TransportRequest_PutTime.encode(
        message.putTime,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getAutoAdvance !== undefined) {
      APIV1TransportRequest_GetAutoAdvance.encode(
        message.getAutoAdvance,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.deleteAutoAdvance !== undefined) {
      APIV1TransportRequest_DeleteAutoAdvance.encode(
        message.deleteAutoAdvance,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.getCurrentMedia !== undefined) {
      APIV1TransportRequest_GetCurrentMedia.encode(
        message.getCurrentMedia,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.play = APIV1TransportRequest_Play.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pause = APIV1TransportRequest_Pause.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.skipBackward = APIV1TransportRequest_SkipBackward.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.skipForward = APIV1TransportRequest_SkipForward.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.goToEnd = APIV1TransportRequest_GoToEnd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getTime = APIV1TransportRequest_GetTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.putTime = APIV1TransportRequest_PutTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getAutoAdvance = APIV1TransportRequest_GetAutoAdvance.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deleteAutoAdvance =
            APIV1TransportRequest_DeleteAutoAdvance.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.getCurrentMedia =
            APIV1TransportRequest_GetCurrentMedia.decode(
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

  fromJSON(object: any): APIV1TransportRequest {
    return {
      play: isSet(object.play)
        ? APIV1TransportRequest_Play.fromJSON(object.play)
        : undefined,
      pause: isSet(object.pause)
        ? APIV1TransportRequest_Pause.fromJSON(object.pause)
        : undefined,
      skipBackward: isSet(object.skipBackward)
        ? APIV1TransportRequest_SkipBackward.fromJSON(object.skipBackward)
        : undefined,
      skipForward: isSet(object.skipForward)
        ? APIV1TransportRequest_SkipForward.fromJSON(object.skipForward)
        : undefined,
      goToEnd: isSet(object.goToEnd)
        ? APIV1TransportRequest_GoToEnd.fromJSON(object.goToEnd)
        : undefined,
      getTime: isSet(object.getTime)
        ? APIV1TransportRequest_GetTime.fromJSON(object.getTime)
        : undefined,
      putTime: isSet(object.putTime)
        ? APIV1TransportRequest_PutTime.fromJSON(object.putTime)
        : undefined,
      getAutoAdvance: isSet(object.getAutoAdvance)
        ? APIV1TransportRequest_GetAutoAdvance.fromJSON(object.getAutoAdvance)
        : undefined,
      deleteAutoAdvance: isSet(object.deleteAutoAdvance)
        ? APIV1TransportRequest_DeleteAutoAdvance.fromJSON(
            object.deleteAutoAdvance,
          )
        : undefined,
      getCurrentMedia: isSet(object.getCurrentMedia)
        ? APIV1TransportRequest_GetCurrentMedia.fromJSON(object.getCurrentMedia)
        : undefined,
    };
  },

  toJSON(message: APIV1TransportRequest): unknown {
    const obj: any = {};
    if (message.play !== undefined) {
      obj.play = APIV1TransportRequest_Play.toJSON(message.play);
    }
    if (message.pause !== undefined) {
      obj.pause = APIV1TransportRequest_Pause.toJSON(message.pause);
    }
    if (message.skipBackward !== undefined) {
      obj.skipBackward = APIV1TransportRequest_SkipBackward.toJSON(
        message.skipBackward,
      );
    }
    if (message.skipForward !== undefined) {
      obj.skipForward = APIV1TransportRequest_SkipForward.toJSON(
        message.skipForward,
      );
    }
    if (message.goToEnd !== undefined) {
      obj.goToEnd = APIV1TransportRequest_GoToEnd.toJSON(message.goToEnd);
    }
    if (message.getTime !== undefined) {
      obj.getTime = APIV1TransportRequest_GetTime.toJSON(message.getTime);
    }
    if (message.putTime !== undefined) {
      obj.putTime = APIV1TransportRequest_PutTime.toJSON(message.putTime);
    }
    if (message.getAutoAdvance !== undefined) {
      obj.getAutoAdvance = APIV1TransportRequest_GetAutoAdvance.toJSON(
        message.getAutoAdvance,
      );
    }
    if (message.deleteAutoAdvance !== undefined) {
      obj.deleteAutoAdvance = APIV1TransportRequest_DeleteAutoAdvance.toJSON(
        message.deleteAutoAdvance,
      );
    }
    if (message.getCurrentMedia !== undefined) {
      obj.getCurrentMedia = APIV1TransportRequest_GetCurrentMedia.toJSON(
        message.getCurrentMedia,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest>, I>>(
    base?: I,
  ): APIV1TransportRequest {
    return APIV1TransportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest>, I>>(
    object: I,
  ): APIV1TransportRequest {
    const message = createBaseAPIV1TransportRequest();
    message.play =
      object.play !== undefined && object.play !== null
        ? APIV1TransportRequest_Play.fromPartial(object.play)
        : undefined;
    message.pause =
      object.pause !== undefined && object.pause !== null
        ? APIV1TransportRequest_Pause.fromPartial(object.pause)
        : undefined;
    message.skipBackward =
      object.skipBackward !== undefined && object.skipBackward !== null
        ? APIV1TransportRequest_SkipBackward.fromPartial(object.skipBackward)
        : undefined;
    message.skipForward =
      object.skipForward !== undefined && object.skipForward !== null
        ? APIV1TransportRequest_SkipForward.fromPartial(object.skipForward)
        : undefined;
    message.goToEnd =
      object.goToEnd !== undefined && object.goToEnd !== null
        ? APIV1TransportRequest_GoToEnd.fromPartial(object.goToEnd)
        : undefined;
    message.getTime =
      object.getTime !== undefined && object.getTime !== null
        ? APIV1TransportRequest_GetTime.fromPartial(object.getTime)
        : undefined;
    message.putTime =
      object.putTime !== undefined && object.putTime !== null
        ? APIV1TransportRequest_PutTime.fromPartial(object.putTime)
        : undefined;
    message.getAutoAdvance =
      object.getAutoAdvance !== undefined && object.getAutoAdvance !== null
        ? APIV1TransportRequest_GetAutoAdvance.fromPartial(
            object.getAutoAdvance,
          )
        : undefined;
    message.deleteAutoAdvance =
      object.deleteAutoAdvance !== undefined &&
      object.deleteAutoAdvance !== null
        ? APIV1TransportRequest_DeleteAutoAdvance.fromPartial(
            object.deleteAutoAdvance,
          )
        : undefined;
    message.getCurrentMedia =
      object.getCurrentMedia !== undefined && object.getCurrentMedia !== null
        ? APIV1TransportRequest_GetCurrentMedia.fromPartial(
            object.getCurrentMedia,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1TransportRequest_Play(): APIV1TransportRequest_Play {
  return { layer: 0 };
}

export const APIV1TransportRequest_Play = {
  encode(
    message: APIV1TransportRequest_Play,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_Play {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_Play();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_Play {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_Play): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_Play>, I>>(
    base?: I,
  ): APIV1TransportRequest_Play {
    return APIV1TransportRequest_Play.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest_Play>, I>>(
    object: I,
  ): APIV1TransportRequest_Play {
    const message = createBaseAPIV1TransportRequest_Play();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_Pause(): APIV1TransportRequest_Pause {
  return { layer: 0 };
}

export const APIV1TransportRequest_Pause = {
  encode(
    message: APIV1TransportRequest_Pause,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_Pause {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_Pause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_Pause {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_Pause): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_Pause>, I>>(
    base?: I,
  ): APIV1TransportRequest_Pause {
    return APIV1TransportRequest_Pause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest_Pause>, I>>(
    object: I,
  ): APIV1TransportRequest_Pause {
    const message = createBaseAPIV1TransportRequest_Pause();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_SkipBackward(): APIV1TransportRequest_SkipBackward {
  return { layer: 0, seconds: 0 };
}

export const APIV1TransportRequest_SkipBackward = {
  encode(
    message: APIV1TransportRequest_SkipBackward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.seconds !== 0) {
      writer.uint32(17).double(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_SkipBackward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_SkipBackward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.seconds = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_SkipBackward {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_SkipBackward): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    if (message.seconds !== 0) {
      obj.seconds = message.seconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_SkipBackward>, I>>(
    base?: I,
  ): APIV1TransportRequest_SkipBackward {
    return APIV1TransportRequest_SkipBackward.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportRequest_SkipBackward>, I>,
  >(object: I): APIV1TransportRequest_SkipBackward {
    const message = createBaseAPIV1TransportRequest_SkipBackward();
    message.layer = object.layer ?? 0;
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_SkipForward(): APIV1TransportRequest_SkipForward {
  return { layer: 0, seconds: 0 };
}

export const APIV1TransportRequest_SkipForward = {
  encode(
    message: APIV1TransportRequest_SkipForward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.seconds !== 0) {
      writer.uint32(17).double(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_SkipForward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_SkipForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.seconds = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_SkipForward {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_SkipForward): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    if (message.seconds !== 0) {
      obj.seconds = message.seconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_SkipForward>, I>>(
    base?: I,
  ): APIV1TransportRequest_SkipForward {
    return APIV1TransportRequest_SkipForward.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportRequest_SkipForward>, I>,
  >(object: I): APIV1TransportRequest_SkipForward {
    const message = createBaseAPIV1TransportRequest_SkipForward();
    message.layer = object.layer ?? 0;
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_GoToEnd(): APIV1TransportRequest_GoToEnd {
  return { layer: 0, seconds: 0 };
}

export const APIV1TransportRequest_GoToEnd = {
  encode(
    message: APIV1TransportRequest_GoToEnd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.seconds !== 0) {
      writer.uint32(17).double(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_GoToEnd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_GoToEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.seconds = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_GoToEnd {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_GoToEnd): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    if (message.seconds !== 0) {
      obj.seconds = message.seconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_GoToEnd>, I>>(
    base?: I,
  ): APIV1TransportRequest_GoToEnd {
    return APIV1TransportRequest_GoToEnd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest_GoToEnd>, I>>(
    object: I,
  ): APIV1TransportRequest_GoToEnd {
    const message = createBaseAPIV1TransportRequest_GoToEnd();
    message.layer = object.layer ?? 0;
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_GetTime(): APIV1TransportRequest_GetTime {
  return { layer: 0 };
}

export const APIV1TransportRequest_GetTime = {
  encode(
    message: APIV1TransportRequest_GetTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_GetTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_GetTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_GetTime {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_GetTime): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_GetTime>, I>>(
    base?: I,
  ): APIV1TransportRequest_GetTime {
    return APIV1TransportRequest_GetTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest_GetTime>, I>>(
    object: I,
  ): APIV1TransportRequest_GetTime {
    const message = createBaseAPIV1TransportRequest_GetTime();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_PutTime(): APIV1TransportRequest_PutTime {
  return { layer: 0, seconds: 0 };
}

export const APIV1TransportRequest_PutTime = {
  encode(
    message: APIV1TransportRequest_PutTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.seconds !== 0) {
      writer.uint32(17).double(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_PutTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_PutTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.seconds = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_PutTime {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_PutTime): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    if (message.seconds !== 0) {
      obj.seconds = message.seconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_PutTime>, I>>(
    base?: I,
  ): APIV1TransportRequest_PutTime {
    return APIV1TransportRequest_PutTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportRequest_PutTime>, I>>(
    object: I,
  ): APIV1TransportRequest_PutTime {
    const message = createBaseAPIV1TransportRequest_PutTime();
    message.layer = object.layer ?? 0;
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_GetAutoAdvance(): APIV1TransportRequest_GetAutoAdvance {
  return { layer: 0 };
}

export const APIV1TransportRequest_GetAutoAdvance = {
  encode(
    message: APIV1TransportRequest_GetAutoAdvance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_GetAutoAdvance {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_GetAutoAdvance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_GetAutoAdvance {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_GetAutoAdvance): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportRequest_GetAutoAdvance>, I>>(
    base?: I,
  ): APIV1TransportRequest_GetAutoAdvance {
    return APIV1TransportRequest_GetAutoAdvance.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportRequest_GetAutoAdvance>, I>,
  >(object: I): APIV1TransportRequest_GetAutoAdvance {
    const message = createBaseAPIV1TransportRequest_GetAutoAdvance();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_DeleteAutoAdvance(): APIV1TransportRequest_DeleteAutoAdvance {
  return { layer: 0 };
}

export const APIV1TransportRequest_DeleteAutoAdvance = {
  encode(
    message: APIV1TransportRequest_DeleteAutoAdvance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_DeleteAutoAdvance {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_DeleteAutoAdvance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_DeleteAutoAdvance {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_DeleteAutoAdvance): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TransportRequest_DeleteAutoAdvance>, I>,
  >(base?: I): APIV1TransportRequest_DeleteAutoAdvance {
    return APIV1TransportRequest_DeleteAutoAdvance.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportRequest_DeleteAutoAdvance>, I>,
  >(object: I): APIV1TransportRequest_DeleteAutoAdvance {
    const message = createBaseAPIV1TransportRequest_DeleteAutoAdvance();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportRequest_GetCurrentMedia(): APIV1TransportRequest_GetCurrentMedia {
  return { layer: 0 };
}

export const APIV1TransportRequest_GetCurrentMedia = {
  encode(
    message: APIV1TransportRequest_GetCurrentMedia,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportRequest_GetCurrentMedia {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportRequest_GetCurrentMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportRequest_GetCurrentMedia {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1TransportRequest_GetCurrentMedia): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TransportRequest_GetCurrentMedia>, I>,
  >(base?: I): APIV1TransportRequest_GetCurrentMedia {
    return APIV1TransportRequest_GetCurrentMedia.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportRequest_GetCurrentMedia>, I>,
  >(object: I): APIV1TransportRequest_GetCurrentMedia {
    const message = createBaseAPIV1TransportRequest_GetCurrentMedia();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportResponse(): APIV1TransportResponse {
  return {
    play: undefined,
    pause: undefined,
    skipBackward: undefined,
    skipForward: undefined,
    goToEnd: undefined,
    getTime: undefined,
    putTime: undefined,
    getAutoAdvance: undefined,
    deleteAutoAdvance: undefined,
    getCurrentMedia: undefined,
  };
}

export const APIV1TransportResponse = {
  encode(
    message: APIV1TransportResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.play !== undefined) {
      APIV1TransportResponse_Play.encode(
        message.play,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.pause !== undefined) {
      APIV1TransportResponse_Pause.encode(
        message.pause,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.skipBackward !== undefined) {
      APIV1TransportResponse_SkipBackward.encode(
        message.skipBackward,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.skipForward !== undefined) {
      APIV1TransportResponse_SkipForward.encode(
        message.skipForward,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.goToEnd !== undefined) {
      APIV1TransportResponse_GoToEnd.encode(
        message.goToEnd,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getTime !== undefined) {
      APIV1TransportResponse_GetTime.encode(
        message.getTime,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.putTime !== undefined) {
      APIV1TransportResponse_PutTime.encode(
        message.putTime,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getAutoAdvance !== undefined) {
      APIV1TransportResponse_GetAutoAdvance.encode(
        message.getAutoAdvance,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.deleteAutoAdvance !== undefined) {
      APIV1TransportResponse_DeleteAutoAdvance.encode(
        message.deleteAutoAdvance,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.getCurrentMedia !== undefined) {
      APIV1TransportResponse_GetCurrentMedia.encode(
        message.getCurrentMedia,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.play = APIV1TransportResponse_Play.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pause = APIV1TransportResponse_Pause.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.skipBackward = APIV1TransportResponse_SkipBackward.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.skipForward = APIV1TransportResponse_SkipForward.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.goToEnd = APIV1TransportResponse_GoToEnd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getTime = APIV1TransportResponse_GetTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.putTime = APIV1TransportResponse_PutTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getAutoAdvance = APIV1TransportResponse_GetAutoAdvance.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.deleteAutoAdvance =
            APIV1TransportResponse_DeleteAutoAdvance.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.getCurrentMedia =
            APIV1TransportResponse_GetCurrentMedia.decode(
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

  fromJSON(object: any): APIV1TransportResponse {
    return {
      play: isSet(object.play)
        ? APIV1TransportResponse_Play.fromJSON(object.play)
        : undefined,
      pause: isSet(object.pause)
        ? APIV1TransportResponse_Pause.fromJSON(object.pause)
        : undefined,
      skipBackward: isSet(object.skipBackward)
        ? APIV1TransportResponse_SkipBackward.fromJSON(object.skipBackward)
        : undefined,
      skipForward: isSet(object.skipForward)
        ? APIV1TransportResponse_SkipForward.fromJSON(object.skipForward)
        : undefined,
      goToEnd: isSet(object.goToEnd)
        ? APIV1TransportResponse_GoToEnd.fromJSON(object.goToEnd)
        : undefined,
      getTime: isSet(object.getTime)
        ? APIV1TransportResponse_GetTime.fromJSON(object.getTime)
        : undefined,
      putTime: isSet(object.putTime)
        ? APIV1TransportResponse_PutTime.fromJSON(object.putTime)
        : undefined,
      getAutoAdvance: isSet(object.getAutoAdvance)
        ? APIV1TransportResponse_GetAutoAdvance.fromJSON(object.getAutoAdvance)
        : undefined,
      deleteAutoAdvance: isSet(object.deleteAutoAdvance)
        ? APIV1TransportResponse_DeleteAutoAdvance.fromJSON(
            object.deleteAutoAdvance,
          )
        : undefined,
      getCurrentMedia: isSet(object.getCurrentMedia)
        ? APIV1TransportResponse_GetCurrentMedia.fromJSON(
            object.getCurrentMedia,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1TransportResponse): unknown {
    const obj: any = {};
    if (message.play !== undefined) {
      obj.play = APIV1TransportResponse_Play.toJSON(message.play);
    }
    if (message.pause !== undefined) {
      obj.pause = APIV1TransportResponse_Pause.toJSON(message.pause);
    }
    if (message.skipBackward !== undefined) {
      obj.skipBackward = APIV1TransportResponse_SkipBackward.toJSON(
        message.skipBackward,
      );
    }
    if (message.skipForward !== undefined) {
      obj.skipForward = APIV1TransportResponse_SkipForward.toJSON(
        message.skipForward,
      );
    }
    if (message.goToEnd !== undefined) {
      obj.goToEnd = APIV1TransportResponse_GoToEnd.toJSON(message.goToEnd);
    }
    if (message.getTime !== undefined) {
      obj.getTime = APIV1TransportResponse_GetTime.toJSON(message.getTime);
    }
    if (message.putTime !== undefined) {
      obj.putTime = APIV1TransportResponse_PutTime.toJSON(message.putTime);
    }
    if (message.getAutoAdvance !== undefined) {
      obj.getAutoAdvance = APIV1TransportResponse_GetAutoAdvance.toJSON(
        message.getAutoAdvance,
      );
    }
    if (message.deleteAutoAdvance !== undefined) {
      obj.deleteAutoAdvance = APIV1TransportResponse_DeleteAutoAdvance.toJSON(
        message.deleteAutoAdvance,
      );
    }
    if (message.getCurrentMedia !== undefined) {
      obj.getCurrentMedia = APIV1TransportResponse_GetCurrentMedia.toJSON(
        message.getCurrentMedia,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse>, I>>(
    base?: I,
  ): APIV1TransportResponse {
    return APIV1TransportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse>, I>>(
    object: I,
  ): APIV1TransportResponse {
    const message = createBaseAPIV1TransportResponse();
    message.play =
      object.play !== undefined && object.play !== null
        ? APIV1TransportResponse_Play.fromPartial(object.play)
        : undefined;
    message.pause =
      object.pause !== undefined && object.pause !== null
        ? APIV1TransportResponse_Pause.fromPartial(object.pause)
        : undefined;
    message.skipBackward =
      object.skipBackward !== undefined && object.skipBackward !== null
        ? APIV1TransportResponse_SkipBackward.fromPartial(object.skipBackward)
        : undefined;
    message.skipForward =
      object.skipForward !== undefined && object.skipForward !== null
        ? APIV1TransportResponse_SkipForward.fromPartial(object.skipForward)
        : undefined;
    message.goToEnd =
      object.goToEnd !== undefined && object.goToEnd !== null
        ? APIV1TransportResponse_GoToEnd.fromPartial(object.goToEnd)
        : undefined;
    message.getTime =
      object.getTime !== undefined && object.getTime !== null
        ? APIV1TransportResponse_GetTime.fromPartial(object.getTime)
        : undefined;
    message.putTime =
      object.putTime !== undefined && object.putTime !== null
        ? APIV1TransportResponse_PutTime.fromPartial(object.putTime)
        : undefined;
    message.getAutoAdvance =
      object.getAutoAdvance !== undefined && object.getAutoAdvance !== null
        ? APIV1TransportResponse_GetAutoAdvance.fromPartial(
            object.getAutoAdvance,
          )
        : undefined;
    message.deleteAutoAdvance =
      object.deleteAutoAdvance !== undefined &&
      object.deleteAutoAdvance !== null
        ? APIV1TransportResponse_DeleteAutoAdvance.fromPartial(
            object.deleteAutoAdvance,
          )
        : undefined;
    message.getCurrentMedia =
      object.getCurrentMedia !== undefined && object.getCurrentMedia !== null
        ? APIV1TransportResponse_GetCurrentMedia.fromPartial(
            object.getCurrentMedia,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1TransportResponse_Play(): APIV1TransportResponse_Play {
  return {};
}

export const APIV1TransportResponse_Play = {
  encode(
    _: APIV1TransportResponse_Play,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_Play {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_Play();
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

  fromJSON(_: any): APIV1TransportResponse_Play {
    return {};
  },

  toJSON(_: APIV1TransportResponse_Play): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_Play>, I>>(
    base?: I,
  ): APIV1TransportResponse_Play {
    return APIV1TransportResponse_Play.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse_Play>, I>>(
    _: I,
  ): APIV1TransportResponse_Play {
    const message = createBaseAPIV1TransportResponse_Play();
    return message;
  },
};

function createBaseAPIV1TransportResponse_Pause(): APIV1TransportResponse_Pause {
  return {};
}

export const APIV1TransportResponse_Pause = {
  encode(
    _: APIV1TransportResponse_Pause,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_Pause {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_Pause();
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

  fromJSON(_: any): APIV1TransportResponse_Pause {
    return {};
  },

  toJSON(_: APIV1TransportResponse_Pause): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_Pause>, I>>(
    base?: I,
  ): APIV1TransportResponse_Pause {
    return APIV1TransportResponse_Pause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse_Pause>, I>>(
    _: I,
  ): APIV1TransportResponse_Pause {
    const message = createBaseAPIV1TransportResponse_Pause();
    return message;
  },
};

function createBaseAPIV1TransportResponse_SkipBackward(): APIV1TransportResponse_SkipBackward {
  return {};
}

export const APIV1TransportResponse_SkipBackward = {
  encode(
    _: APIV1TransportResponse_SkipBackward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_SkipBackward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_SkipBackward();
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

  fromJSON(_: any): APIV1TransportResponse_SkipBackward {
    return {};
  },

  toJSON(_: APIV1TransportResponse_SkipBackward): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_SkipBackward>, I>>(
    base?: I,
  ): APIV1TransportResponse_SkipBackward {
    return APIV1TransportResponse_SkipBackward.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportResponse_SkipBackward>, I>,
  >(_: I): APIV1TransportResponse_SkipBackward {
    const message = createBaseAPIV1TransportResponse_SkipBackward();
    return message;
  },
};

function createBaseAPIV1TransportResponse_SkipForward(): APIV1TransportResponse_SkipForward {
  return {};
}

export const APIV1TransportResponse_SkipForward = {
  encode(
    _: APIV1TransportResponse_SkipForward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_SkipForward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_SkipForward();
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

  fromJSON(_: any): APIV1TransportResponse_SkipForward {
    return {};
  },

  toJSON(_: APIV1TransportResponse_SkipForward): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_SkipForward>, I>>(
    base?: I,
  ): APIV1TransportResponse_SkipForward {
    return APIV1TransportResponse_SkipForward.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportResponse_SkipForward>, I>,
  >(_: I): APIV1TransportResponse_SkipForward {
    const message = createBaseAPIV1TransportResponse_SkipForward();
    return message;
  },
};

function createBaseAPIV1TransportResponse_GoToEnd(): APIV1TransportResponse_GoToEnd {
  return {};
}

export const APIV1TransportResponse_GoToEnd = {
  encode(
    _: APIV1TransportResponse_GoToEnd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_GoToEnd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_GoToEnd();
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

  fromJSON(_: any): APIV1TransportResponse_GoToEnd {
    return {};
  },

  toJSON(_: APIV1TransportResponse_GoToEnd): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_GoToEnd>, I>>(
    base?: I,
  ): APIV1TransportResponse_GoToEnd {
    return APIV1TransportResponse_GoToEnd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse_GoToEnd>, I>>(
    _: I,
  ): APIV1TransportResponse_GoToEnd {
    const message = createBaseAPIV1TransportResponse_GoToEnd();
    return message;
  },
};

function createBaseAPIV1TransportResponse_GetTime(): APIV1TransportResponse_GetTime {
  return { seconds: 0 };
}

export const APIV1TransportResponse_GetTime = {
  encode(
    message: APIV1TransportResponse_GetTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(9).double(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_GetTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_GetTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.seconds = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportResponse_GetTime {
    return {
      seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
    };
  },

  toJSON(message: APIV1TransportResponse_GetTime): unknown {
    const obj: any = {};
    if (message.seconds !== 0) {
      obj.seconds = message.seconds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_GetTime>, I>>(
    base?: I,
  ): APIV1TransportResponse_GetTime {
    return APIV1TransportResponse_GetTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse_GetTime>, I>>(
    object: I,
  ): APIV1TransportResponse_GetTime {
    const message = createBaseAPIV1TransportResponse_GetTime();
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseAPIV1TransportResponse_PutTime(): APIV1TransportResponse_PutTime {
  return {};
}

export const APIV1TransportResponse_PutTime = {
  encode(
    _: APIV1TransportResponse_PutTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_PutTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_PutTime();
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

  fromJSON(_: any): APIV1TransportResponse_PutTime {
    return {};
  },

  toJSON(_: APIV1TransportResponse_PutTime): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TransportResponse_PutTime>, I>>(
    base?: I,
  ): APIV1TransportResponse_PutTime {
    return APIV1TransportResponse_PutTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TransportResponse_PutTime>, I>>(
    _: I,
  ): APIV1TransportResponse_PutTime {
    const message = createBaseAPIV1TransportResponse_PutTime();
    return message;
  },
};

function createBaseAPIV1TransportResponse_GetAutoAdvance(): APIV1TransportResponse_GetAutoAdvance {
  return { autoAdvance: false };
}

export const APIV1TransportResponse_GetAutoAdvance = {
  encode(
    message: APIV1TransportResponse_GetAutoAdvance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.autoAdvance === true) {
      writer.uint32(8).bool(message.autoAdvance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_GetAutoAdvance {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_GetAutoAdvance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.autoAdvance = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportResponse_GetAutoAdvance {
    return {
      autoAdvance: isSet(object.autoAdvance)
        ? globalThis.Boolean(object.autoAdvance)
        : false,
    };
  },

  toJSON(message: APIV1TransportResponse_GetAutoAdvance): unknown {
    const obj: any = {};
    if (message.autoAdvance === true) {
      obj.autoAdvance = message.autoAdvance;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TransportResponse_GetAutoAdvance>, I>,
  >(base?: I): APIV1TransportResponse_GetAutoAdvance {
    return APIV1TransportResponse_GetAutoAdvance.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportResponse_GetAutoAdvance>, I>,
  >(object: I): APIV1TransportResponse_GetAutoAdvance {
    const message = createBaseAPIV1TransportResponse_GetAutoAdvance();
    message.autoAdvance = object.autoAdvance ?? false;
    return message;
  },
};

function createBaseAPIV1TransportResponse_DeleteAutoAdvance(): APIV1TransportResponse_DeleteAutoAdvance {
  return {};
}

export const APIV1TransportResponse_DeleteAutoAdvance = {
  encode(
    _: APIV1TransportResponse_DeleteAutoAdvance,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_DeleteAutoAdvance {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_DeleteAutoAdvance();
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

  fromJSON(_: any): APIV1TransportResponse_DeleteAutoAdvance {
    return {};
  },

  toJSON(_: APIV1TransportResponse_DeleteAutoAdvance): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TransportResponse_DeleteAutoAdvance>, I>,
  >(base?: I): APIV1TransportResponse_DeleteAutoAdvance {
    return APIV1TransportResponse_DeleteAutoAdvance.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportResponse_DeleteAutoAdvance>, I>,
  >(_: I): APIV1TransportResponse_DeleteAutoAdvance {
    const message = createBaseAPIV1TransportResponse_DeleteAutoAdvance();
    return message;
  },
};

function createBaseAPIV1TransportResponse_GetCurrentMedia(): APIV1TransportResponse_GetCurrentMedia {
  return {
    isPlaying: false,
    uuid: undefined,
    name: '',
    artist: '',
    audioOnly: false,
    duration: 0,
  };
}

export const APIV1TransportResponse_GetCurrentMedia = {
  encode(
    message: APIV1TransportResponse_GetCurrentMedia,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isPlaying === true) {
      writer.uint32(8).bool(message.isPlaying);
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.artist !== '') {
      writer.uint32(34).string(message.artist);
    }
    if (message.audioOnly === true) {
      writer.uint32(40).bool(message.audioOnly);
    }
    if (message.duration !== 0) {
      writer.uint32(49).double(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TransportResponse_GetCurrentMedia {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TransportResponse_GetCurrentMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isPlaying = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.artist = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.audioOnly = reader.bool();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.duration = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TransportResponse_GetCurrentMedia {
    return {
      isPlaying: isSet(object.isPlaying)
        ? globalThis.Boolean(object.isPlaying)
        : false,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      artist: isSet(object.artist) ? globalThis.String(object.artist) : '',
      audioOnly: isSet(object.audioOnly)
        ? globalThis.Boolean(object.audioOnly)
        : false,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: APIV1TransportResponse_GetCurrentMedia): unknown {
    const obj: any = {};
    if (message.isPlaying === true) {
      obj.isPlaying = message.isPlaying;
    }
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.artist !== '') {
      obj.artist = message.artist;
    }
    if (message.audioOnly === true) {
      obj.audioOnly = message.audioOnly;
    }
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TransportResponse_GetCurrentMedia>, I>,
  >(base?: I): APIV1TransportResponse_GetCurrentMedia {
    return APIV1TransportResponse_GetCurrentMedia.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TransportResponse_GetCurrentMedia>, I>,
  >(object: I): APIV1TransportResponse_GetCurrentMedia {
    const message = createBaseAPIV1TransportResponse_GetCurrentMedia();
    message.isPlaying = object.isPlaying ?? false;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.artist = object.artist ?? '';
    message.audioOnly = object.audioOnly ?? false;
    message.duration = object.duration ?? 0;
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
