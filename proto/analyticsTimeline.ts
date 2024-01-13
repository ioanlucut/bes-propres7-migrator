/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Timeline {
  triggerCue?: Timeline_TriggerCue | undefined;
  action?: Timeline_Action | undefined;
  recordCue?: Timeline_RecordCue | undefined;
}

export interface Timeline_TriggerCue {
  triggerType: Timeline_TriggerCue_TriggerType;
  timingSource: Timeline_TriggerCue_TimingSource;
}

export enum Timeline_TriggerCue_TriggerType {
  TRIGGER_TYPE_SLIDE = 0,
  TRIGGER_TYPE_MEDIA = 1,
  TRIGGER_TYPE_AUDIO = 2,
  TRIGGER_TYPE_ACTION = 3,
  UNRECOGNIZED = -1,
}

export function timeline_TriggerCue_TriggerTypeFromJSON(
  object: any,
): Timeline_TriggerCue_TriggerType {
  switch (object) {
    case 0:
    case 'TRIGGER_TYPE_SLIDE':
      return Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_SLIDE;
    case 1:
    case 'TRIGGER_TYPE_MEDIA':
      return Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_MEDIA;
    case 2:
    case 'TRIGGER_TYPE_AUDIO':
      return Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_AUDIO;
    case 3:
    case 'TRIGGER_TYPE_ACTION':
      return Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_ACTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Timeline_TriggerCue_TriggerType.UNRECOGNIZED;
  }
}

export function timeline_TriggerCue_TriggerTypeToJSON(
  object: Timeline_TriggerCue_TriggerType,
): string {
  switch (object) {
    case Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_SLIDE:
      return 'TRIGGER_TYPE_SLIDE';
    case Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_MEDIA:
      return 'TRIGGER_TYPE_MEDIA';
    case Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_AUDIO:
      return 'TRIGGER_TYPE_AUDIO';
    case Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_ACTION:
      return 'TRIGGER_TYPE_ACTION';
    case Timeline_TriggerCue_TriggerType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Timeline_TriggerCue_TimingSource {
  TIMING_SOURCE_INTERNAL = 0,
  TIMING_SOURCE_SMPTE = 1,
  UNRECOGNIZED = -1,
}

export function timeline_TriggerCue_TimingSourceFromJSON(
  object: any,
): Timeline_TriggerCue_TimingSource {
  switch (object) {
    case 0:
    case 'TIMING_SOURCE_INTERNAL':
      return Timeline_TriggerCue_TimingSource.TIMING_SOURCE_INTERNAL;
    case 1:
    case 'TIMING_SOURCE_SMPTE':
      return Timeline_TriggerCue_TimingSource.TIMING_SOURCE_SMPTE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Timeline_TriggerCue_TimingSource.UNRECOGNIZED;
  }
}

export function timeline_TriggerCue_TimingSourceToJSON(
  object: Timeline_TriggerCue_TimingSource,
): string {
  switch (object) {
    case Timeline_TriggerCue_TimingSource.TIMING_SOURCE_INTERNAL:
      return 'TIMING_SOURCE_INTERNAL';
    case Timeline_TriggerCue_TimingSource.TIMING_SOURCE_SMPTE:
      return 'TIMING_SOURCE_SMPTE';
    case Timeline_TriggerCue_TimingSource.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Timeline_Action {
  actionType: Timeline_Action_ActionType;
}

export enum Timeline_Action_ActionType {
  ACTION_TYPE_PLAY = 0,
  ACTION_TYPE_STOP = 1,
  ACTION_TYPE_RESET = 2,
  UNRECOGNIZED = -1,
}

export function timeline_Action_ActionTypeFromJSON(
  object: any,
): Timeline_Action_ActionType {
  switch (object) {
    case 0:
    case 'ACTION_TYPE_PLAY':
      return Timeline_Action_ActionType.ACTION_TYPE_PLAY;
    case 1:
    case 'ACTION_TYPE_STOP':
      return Timeline_Action_ActionType.ACTION_TYPE_STOP;
    case 2:
    case 'ACTION_TYPE_RESET':
      return Timeline_Action_ActionType.ACTION_TYPE_RESET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Timeline_Action_ActionType.UNRECOGNIZED;
  }
}

export function timeline_Action_ActionTypeToJSON(
  object: Timeline_Action_ActionType,
): string {
  switch (object) {
    case Timeline_Action_ActionType.ACTION_TYPE_PLAY:
      return 'ACTION_TYPE_PLAY';
    case Timeline_Action_ActionType.ACTION_TYPE_STOP:
      return 'ACTION_TYPE_STOP';
    case Timeline_Action_ActionType.ACTION_TYPE_RESET:
      return 'ACTION_TYPE_RESET';
    case Timeline_Action_ActionType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Timeline_RecordCue {}

function createBaseTimeline(): Timeline {
  return { triggerCue: undefined, action: undefined, recordCue: undefined };
}

export const Timeline = {
  encode(
    message: Timeline,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerCue !== undefined) {
      Timeline_TriggerCue.encode(
        message.triggerCue,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.action !== undefined) {
      Timeline_Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    if (message.recordCue !== undefined) {
      Timeline_RecordCue.encode(
        message.recordCue,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timeline {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.triggerCue = Timeline_TriggerCue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = Timeline_Action.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.recordCue = Timeline_RecordCue.decode(
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

  fromJSON(object: any): Timeline {
    return {
      triggerCue: isSet(object.triggerCue)
        ? Timeline_TriggerCue.fromJSON(object.triggerCue)
        : undefined,
      action: isSet(object.action)
        ? Timeline_Action.fromJSON(object.action)
        : undefined,
      recordCue: isSet(object.recordCue)
        ? Timeline_RecordCue.fromJSON(object.recordCue)
        : undefined,
    };
  },

  toJSON(message: Timeline): unknown {
    const obj: any = {};
    if (message.triggerCue !== undefined) {
      obj.triggerCue = Timeline_TriggerCue.toJSON(message.triggerCue);
    }
    if (message.action !== undefined) {
      obj.action = Timeline_Action.toJSON(message.action);
    }
    if (message.recordCue !== undefined) {
      obj.recordCue = Timeline_RecordCue.toJSON(message.recordCue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timeline>, I>>(base?: I): Timeline {
    return Timeline.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timeline>, I>>(object: I): Timeline {
    const message = createBaseTimeline();
    message.triggerCue =
      object.triggerCue !== undefined && object.triggerCue !== null
        ? Timeline_TriggerCue.fromPartial(object.triggerCue)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? Timeline_Action.fromPartial(object.action)
        : undefined;
    message.recordCue =
      object.recordCue !== undefined && object.recordCue !== null
        ? Timeline_RecordCue.fromPartial(object.recordCue)
        : undefined;
    return message;
  },
};

function createBaseTimeline_TriggerCue(): Timeline_TriggerCue {
  return { triggerType: 0, timingSource: 0 };
}

export const Timeline_TriggerCue = {
  encode(
    message: Timeline_TriggerCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerType !== 0) {
      writer.uint32(8).int32(message.triggerType);
    }
    if (message.timingSource !== 0) {
      writer.uint32(16).int32(message.timingSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timeline_TriggerCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeline_TriggerCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.triggerType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.timingSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timeline_TriggerCue {
    return {
      triggerType: isSet(object.triggerType)
        ? timeline_TriggerCue_TriggerTypeFromJSON(object.triggerType)
        : 0,
      timingSource: isSet(object.timingSource)
        ? timeline_TriggerCue_TimingSourceFromJSON(object.timingSource)
        : 0,
    };
  },

  toJSON(message: Timeline_TriggerCue): unknown {
    const obj: any = {};
    if (message.triggerType !== 0) {
      obj.triggerType = timeline_TriggerCue_TriggerTypeToJSON(
        message.triggerType,
      );
    }
    if (message.timingSource !== 0) {
      obj.timingSource = timeline_TriggerCue_TimingSourceToJSON(
        message.timingSource,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timeline_TriggerCue>, I>>(
    base?: I,
  ): Timeline_TriggerCue {
    return Timeline_TriggerCue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timeline_TriggerCue>, I>>(
    object: I,
  ): Timeline_TriggerCue {
    const message = createBaseTimeline_TriggerCue();
    message.triggerType = object.triggerType ?? 0;
    message.timingSource = object.timingSource ?? 0;
    return message;
  },
};

function createBaseTimeline_Action(): Timeline_Action {
  return { actionType: 0 };
}

export const Timeline_Action = {
  encode(
    message: Timeline_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timeline_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeline_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timeline_Action {
    return {
      actionType: isSet(object.actionType)
        ? timeline_Action_ActionTypeFromJSON(object.actionType)
        : 0,
    };
  },

  toJSON(message: Timeline_Action): unknown {
    const obj: any = {};
    if (message.actionType !== 0) {
      obj.actionType = timeline_Action_ActionTypeToJSON(message.actionType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timeline_Action>, I>>(
    base?: I,
  ): Timeline_Action {
    return Timeline_Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timeline_Action>, I>>(
    object: I,
  ): Timeline_Action {
    const message = createBaseTimeline_Action();
    message.actionType = object.actionType ?? 0;
    return message;
  },
};

function createBaseTimeline_RecordCue(): Timeline_RecordCue {
  return {};
}

export const Timeline_RecordCue = {
  encode(
    _: Timeline_RecordCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timeline_RecordCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeline_RecordCue();
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

  fromJSON(_: any): Timeline_RecordCue {
    return {};
  },

  toJSON(_: Timeline_RecordCue): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Timeline_RecordCue>, I>>(
    base?: I,
  ): Timeline_RecordCue {
    return Timeline_RecordCue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timeline_RecordCue>, I>>(
    _: I,
  ): Timeline_RecordCue {
    const message = createBaseTimeline_RecordCue();
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
