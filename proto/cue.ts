/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action } from './action';
import { HotKey } from './hotKey';
import { URLs } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Cue {
  uuid: UUID | undefined;
  name: string;
  completionTargetType: Cue_CompletionTargetType;
  completionTargetUuid: UUID | undefined;
  completionActionType: Cue_CompletionActionType;
  completionActionUuid: UUID | undefined;
  triggerTime: Cue_TimecodeTime | undefined;
  hotKey: HotKey | undefined;
  actions: Action[];
  pendingImports: Cue_PendingImportsEntry[];
  isEnabled: boolean;
  completionTime: number;
}

export enum Cue_CompletionTargetType {
  COMPLETION_TARGET_TYPE_NONE = 0,
  COMPLETION_TARGET_TYPE_NEXT = 1,
  COMPLETION_TARGET_TYPE_RANDOM = 2,
  COMPLETION_TARGET_TYPE_CUE = 3,
  COMPLETION_TARGET_TYPE_FIRST = 4,
  UNRECOGNIZED = -1,
}

export function cue_CompletionTargetTypeFromJSON(
  object: any,
): Cue_CompletionTargetType {
  switch (object) {
    case 0:
    case 'COMPLETION_TARGET_TYPE_NONE':
      return Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_NONE;
    case 1:
    case 'COMPLETION_TARGET_TYPE_NEXT':
      return Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_NEXT;
    case 2:
    case 'COMPLETION_TARGET_TYPE_RANDOM':
      return Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_RANDOM;
    case 3:
    case 'COMPLETION_TARGET_TYPE_CUE':
      return Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_CUE;
    case 4:
    case 'COMPLETION_TARGET_TYPE_FIRST':
      return Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_FIRST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Cue_CompletionTargetType.UNRECOGNIZED;
  }
}

export function cue_CompletionTargetTypeToJSON(
  object: Cue_CompletionTargetType,
): string {
  switch (object) {
    case Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_NONE:
      return 'COMPLETION_TARGET_TYPE_NONE';
    case Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_NEXT:
      return 'COMPLETION_TARGET_TYPE_NEXT';
    case Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_RANDOM:
      return 'COMPLETION_TARGET_TYPE_RANDOM';
    case Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_CUE:
      return 'COMPLETION_TARGET_TYPE_CUE';
    case Cue_CompletionTargetType.COMPLETION_TARGET_TYPE_FIRST:
      return 'COMPLETION_TARGET_TYPE_FIRST';
    case Cue_CompletionTargetType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Cue_CompletionActionType {
  COMPLETION_ACTION_TYPE_FIRST = 0,
  COMPLETION_ACTION_TYPE_LAST = 1,
  COMPLETION_ACTION_TYPE_AFTER_ACTION = 2,
  COMPLETION_ACTION_TYPE_AFTER_TIME = 3,
  UNRECOGNIZED = -1,
}

export function cue_CompletionActionTypeFromJSON(
  object: any,
): Cue_CompletionActionType {
  switch (object) {
    case 0:
    case 'COMPLETION_ACTION_TYPE_FIRST':
      return Cue_CompletionActionType.COMPLETION_ACTION_TYPE_FIRST;
    case 1:
    case 'COMPLETION_ACTION_TYPE_LAST':
      return Cue_CompletionActionType.COMPLETION_ACTION_TYPE_LAST;
    case 2:
    case 'COMPLETION_ACTION_TYPE_AFTER_ACTION':
      return Cue_CompletionActionType.COMPLETION_ACTION_TYPE_AFTER_ACTION;
    case 3:
    case 'COMPLETION_ACTION_TYPE_AFTER_TIME':
      return Cue_CompletionActionType.COMPLETION_ACTION_TYPE_AFTER_TIME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Cue_CompletionActionType.UNRECOGNIZED;
  }
}

export function cue_CompletionActionTypeToJSON(
  object: Cue_CompletionActionType,
): string {
  switch (object) {
    case Cue_CompletionActionType.COMPLETION_ACTION_TYPE_FIRST:
      return 'COMPLETION_ACTION_TYPE_FIRST';
    case Cue_CompletionActionType.COMPLETION_ACTION_TYPE_LAST:
      return 'COMPLETION_ACTION_TYPE_LAST';
    case Cue_CompletionActionType.COMPLETION_ACTION_TYPE_AFTER_ACTION:
      return 'COMPLETION_ACTION_TYPE_AFTER_ACTION';
    case Cue_CompletionActionType.COMPLETION_ACTION_TYPE_AFTER_TIME:
      return 'COMPLETION_ACTION_TYPE_AFTER_TIME';
    case Cue_CompletionActionType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Cue_TimecodeTime {
  time: number;
}

export interface Cue_PendingImportsEntry {
  key: string;
  value: URLs | undefined;
}

function createBaseCue(): Cue {
  return {
    uuid: undefined,
    name: '',
    completionTargetType: 0,
    completionTargetUuid: undefined,
    completionActionType: 0,
    completionActionUuid: undefined,
    triggerTime: undefined,
    hotKey: undefined,
    actions: [],
    pendingImports: [],
    isEnabled: false,
    completionTime: 0,
  };
}

export const Cue = {
  encode(message: Cue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.completionTargetType !== 0) {
      writer.uint32(24).int32(message.completionTargetType);
    }
    if (message.completionTargetUuid !== undefined) {
      UUID.encode(
        message.completionTargetUuid,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.completionActionType !== 0) {
      writer.uint32(40).int32(message.completionActionType);
    }
    if (message.completionActionUuid !== undefined) {
      UUID.encode(
        message.completionActionUuid,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.triggerTime !== undefined) {
      Cue_TimecodeTime.encode(
        message.triggerTime,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.hotKey !== undefined) {
      HotKey.encode(message.hotKey, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.pendingImports) {
      Cue_PendingImportsEntry.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.isEnabled === true) {
      writer.uint32(96).bool(message.isEnabled);
    }
    if (message.completionTime !== 0) {
      writer.uint32(105).double(message.completionTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
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

          message.completionTargetType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.completionTargetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.completionActionType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.completionActionUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.triggerTime = Cue_TimecodeTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hotKey = HotKey.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.pendingImports.push(
            Cue_PendingImportsEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.completionTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cue {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      completionTargetType: isSet(object.completionTargetType)
        ? cue_CompletionTargetTypeFromJSON(object.completionTargetType)
        : 0,
      completionTargetUuid: isSet(object.completionTargetUuid)
        ? UUID.fromJSON(object.completionTargetUuid)
        : undefined,
      completionActionType: isSet(object.completionActionType)
        ? cue_CompletionActionTypeFromJSON(object.completionActionType)
        : 0,
      completionActionUuid: isSet(object.completionActionUuid)
        ? UUID.fromJSON(object.completionActionUuid)
        : undefined,
      triggerTime: isSet(object.triggerTime)
        ? Cue_TimecodeTime.fromJSON(object.triggerTime)
        : undefined,
      hotKey: isSet(object.hotKey) ? HotKey.fromJSON(object.hotKey) : undefined,
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
      pendingImports: globalThis.Array.isArray(object?.pendingImports)
        ? object.pendingImports.map((e: any) =>
            Cue_PendingImportsEntry.fromJSON(e),
          )
        : [],
      isEnabled: isSet(object.isEnabled)
        ? globalThis.Boolean(object.isEnabled)
        : false,
      completionTime: isSet(object.completionTime)
        ? globalThis.Number(object.completionTime)
        : 0,
    };
  },

  toJSON(message: Cue): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.completionTargetType !== 0) {
      obj.completionTargetType = cue_CompletionTargetTypeToJSON(
        message.completionTargetType,
      );
    }
    if (message.completionTargetUuid !== undefined) {
      obj.completionTargetUuid = UUID.toJSON(message.completionTargetUuid);
    }
    if (message.completionActionType !== 0) {
      obj.completionActionType = cue_CompletionActionTypeToJSON(
        message.completionActionType,
      );
    }
    if (message.completionActionUuid !== undefined) {
      obj.completionActionUuid = UUID.toJSON(message.completionActionUuid);
    }
    if (message.triggerTime !== undefined) {
      obj.triggerTime = Cue_TimecodeTime.toJSON(message.triggerTime);
    }
    if (message.hotKey !== undefined) {
      obj.hotKey = HotKey.toJSON(message.hotKey);
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => Action.toJSON(e));
    }
    if (message.pendingImports?.length) {
      obj.pendingImports = message.pendingImports.map((e) =>
        Cue_PendingImportsEntry.toJSON(e),
      );
    }
    if (message.isEnabled === true) {
      obj.isEnabled = message.isEnabled;
    }
    if (message.completionTime !== 0) {
      obj.completionTime = message.completionTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cue>, I>>(base?: I): Cue {
    return Cue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cue>, I>>(object: I): Cue {
    const message = createBaseCue();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.completionTargetType = object.completionTargetType ?? 0;
    message.completionTargetUuid =
      object.completionTargetUuid !== undefined &&
      object.completionTargetUuid !== null
        ? UUID.fromPartial(object.completionTargetUuid)
        : undefined;
    message.completionActionType = object.completionActionType ?? 0;
    message.completionActionUuid =
      object.completionActionUuid !== undefined &&
      object.completionActionUuid !== null
        ? UUID.fromPartial(object.completionActionUuid)
        : undefined;
    message.triggerTime =
      object.triggerTime !== undefined && object.triggerTime !== null
        ? Cue_TimecodeTime.fromPartial(object.triggerTime)
        : undefined;
    message.hotKey =
      object.hotKey !== undefined && object.hotKey !== null
        ? HotKey.fromPartial(object.hotKey)
        : undefined;
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    message.pendingImports =
      object.pendingImports?.map((e) =>
        Cue_PendingImportsEntry.fromPartial(e),
      ) || [];
    message.isEnabled = object.isEnabled ?? false;
    message.completionTime = object.completionTime ?? 0;
    return message;
  },
};

function createBaseCue_TimecodeTime(): Cue_TimecodeTime {
  return { time: 0 };
}

export const Cue_TimecodeTime = {
  encode(
    message: Cue_TimecodeTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cue_TimecodeTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCue_TimecodeTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cue_TimecodeTime {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: Cue_TimecodeTime): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cue_TimecodeTime>, I>>(
    base?: I,
  ): Cue_TimecodeTime {
    return Cue_TimecodeTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cue_TimecodeTime>, I>>(
    object: I,
  ): Cue_TimecodeTime {
    const message = createBaseCue_TimecodeTime();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseCue_PendingImportsEntry(): Cue_PendingImportsEntry {
  return { key: '', value: undefined };
}

export const Cue_PendingImportsEntry = {
  encode(
    message: Cue_PendingImportsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      URLs.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Cue_PendingImportsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCue_PendingImportsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = URLs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Cue_PendingImportsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : '',
      value: isSet(object.value) ? URLs.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Cue_PendingImportsEntry): unknown {
    const obj: any = {};
    if (message.key !== '') {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = URLs.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Cue_PendingImportsEntry>, I>>(
    base?: I,
  ): Cue_PendingImportsEntry {
    return Cue_PendingImportsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Cue_PendingImportsEntry>, I>>(
    object: I,
  ): Cue_PendingImportsEntry {
    const message = createBaseCue_PendingImportsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? URLs.fromPartial(object.value)
        : undefined;
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
