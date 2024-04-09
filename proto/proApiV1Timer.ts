/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export enum APIV1TimerState {
  stopped = 0,
  running = 1,
  complete = 2,
  overrunning = 3,
  overran = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1TimerStateFromJSON(object: any): APIV1TimerState {
  switch (object) {
    case 0:
    case 'stopped':
      return APIV1TimerState.stopped;
    case 1:
    case 'running':
      return APIV1TimerState.running;
    case 2:
    case 'complete':
      return APIV1TimerState.complete;
    case 3:
    case 'overrunning':
      return APIV1TimerState.overrunning;
    case 4:
    case 'overran':
      return APIV1TimerState.overran;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1TimerState.UNRECOGNIZED;
  }
}

export function aPIV1TimerStateToJSON(object: APIV1TimerState): string {
  switch (object) {
    case APIV1TimerState.stopped:
      return 'stopped';
    case APIV1TimerState.running:
      return 'running';
    case APIV1TimerState.complete:
      return 'complete';
    case APIV1TimerState.overrunning:
      return 'overrunning';
    case APIV1TimerState.overran:
      return 'overran';
    case APIV1TimerState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum APIV1TimerOperation {
  start = 0,
  stop = 1,
  reset = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1TimerOperationFromJSON(object: any): APIV1TimerOperation {
  switch (object) {
    case 0:
    case 'start':
      return APIV1TimerOperation.start;
    case 1:
    case 'stop':
      return APIV1TimerOperation.stop;
    case 2:
    case 'reset':
      return APIV1TimerOperation.reset;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1TimerOperation.UNRECOGNIZED;
  }
}

export function aPIV1TimerOperationToJSON(object: APIV1TimerOperation): string {
  switch (object) {
    case APIV1TimerOperation.start:
      return 'start';
    case APIV1TimerOperation.stop:
      return 'stop';
    case APIV1TimerOperation.reset:
      return 'reset';
    case APIV1TimerOperation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1TimerFormat {
  hour: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  minute: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  second: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
  millisecond: APIV1TimerFormat_APIV1TimerUnitDisplayFormat;
}

export enum APIV1TimerFormat_APIV1TimerUnitDisplayFormat {
  none = 0,
  short = 1,
  long = 2,
  remove_short = 3,
  remove_long = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(
  object: any,
): APIV1TimerFormat_APIV1TimerUnitDisplayFormat {
  switch (object) {
    case 0:
    case 'none':
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.none;
    case 1:
    case 'short':
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.short;
    case 2:
    case 'long':
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.long;
    case 3:
    case 'remove_short':
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_short;
    case 4:
    case 'remove_long':
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_long;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1TimerFormat_APIV1TimerUnitDisplayFormat.UNRECOGNIZED;
  }
}

export function aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
  object: APIV1TimerFormat_APIV1TimerUnitDisplayFormat,
): string {
  switch (object) {
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.none:
      return 'none';
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.short:
      return 'short';
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.long:
      return 'long';
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_short:
      return 'remove_short';
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.remove_long:
      return 'remove_long';
    case APIV1TimerFormat_APIV1TimerUnitDisplayFormat.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1TimerValue {
  id: APIV1Identifier | undefined;
  time: string;
  state: APIV1TimerState;
}

export interface APIV1Timer {
  id: APIV1Identifier | undefined;
  allowsOverrun: boolean;
  countdown?: APIV1Timer_APIV1TimerCountdown | undefined;
  countDownToTime?: APIV1Timer_APIV1TimerCountdownToTime | undefined;
  elapsed?: APIV1Timer_APIV1TimerElapsed | undefined;
}

export enum APIV1Timer_APIV1TimePeriod {
  am = 0,
  pm = 1,
  is_24_hour = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1Timer_APIV1TimePeriodFromJSON(
  object: any,
): APIV1Timer_APIV1TimePeriod {
  switch (object) {
    case 0:
    case 'am':
      return APIV1Timer_APIV1TimePeriod.am;
    case 1:
    case 'pm':
      return APIV1Timer_APIV1TimePeriod.pm;
    case 2:
    case 'is_24_hour':
      return APIV1Timer_APIV1TimePeriod.is_24_hour;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1Timer_APIV1TimePeriod.UNRECOGNIZED;
  }
}

export function aPIV1Timer_APIV1TimePeriodToJSON(
  object: APIV1Timer_APIV1TimePeriod,
): string {
  switch (object) {
    case APIV1Timer_APIV1TimePeriod.am:
      return 'am';
    case APIV1Timer_APIV1TimePeriod.pm:
      return 'pm';
    case APIV1Timer_APIV1TimePeriod.is_24_hour:
      return 'is_24_hour';
    case APIV1Timer_APIV1TimePeriod.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1Timer_APIV1TimerCountdown {
  duration: number;
}

export interface APIV1Timer_APIV1TimerCountdownToTime {
  timeOfDay: number;
  period: APIV1Timer_APIV1TimePeriod;
}

export interface APIV1Timer_APIV1TimerElapsed {
  startTime: number;
  endTime: number;
  hasEndTime: boolean;
}

export interface APIV1TimerRequest {
  timers?: APIV1TimerRequest_Timers | undefined;
  createTimer?: APIV1TimerRequest_CreateTimer | undefined;
  currentTimes?: APIV1TimerRequest_CurrentTimes | undefined;
  allTimersOperation?: APIV1TimerRequest_AllTimersOperation | undefined;
  getTimer?: APIV1TimerRequest_GetTimer | undefined;
  putTimer?: APIV1TimerRequest_PutTimer | undefined;
  deleteTimer?: APIV1TimerRequest_DeleteTimer | undefined;
  timerOperation?: APIV1TimerRequest_TimerOperation | undefined;
  putTimerOperation?: APIV1TimerRequest_PutTimerOperation | undefined;
  timerIncrement?: APIV1TimerRequest_TimerIncrement | undefined;
  systemTime?: APIV1TimerRequest_SystemTime | undefined;
  videoCountdown?: APIV1TimerRequest_VideoCountdown | undefined;
}

export interface APIV1TimerRequest_Timers {}

export interface APIV1TimerRequest_CreateTimer {
  name: string;
  allowsOverrun: boolean;
  countdown: APIV1Timer_APIV1TimerCountdown | undefined;
  countDownToTime: APIV1Timer_APIV1TimerCountdownToTime | undefined;
  elapsed: APIV1Timer_APIV1TimerElapsed | undefined;
}

export interface APIV1TimerRequest_CurrentTimes {}

export interface APIV1TimerRequest_AllTimersOperation {
  operation: APIV1TimerOperation;
}

export interface APIV1TimerRequest_GetTimer {
  id: string;
}

export interface APIV1TimerRequest_PutTimer {
  id: string;
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerRequest_DeleteTimer {
  id: string;
}

export interface APIV1TimerRequest_TimerOperation {
  id: string;
  operation: APIV1TimerOperation;
}

export interface APIV1TimerRequest_PutTimerOperation {
  id: string;
  operation: APIV1TimerOperation;
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerRequest_TimerIncrement {
  id: string;
  amount: number;
}

export interface APIV1TimerRequest_SystemTime {}

export interface APIV1TimerRequest_VideoCountdown {}

export interface APIV1TimerResponse {
  timers?: APIV1TimerResponse_Timers | undefined;
  createTimer?: APIV1TimerResponse_CreateTimer | undefined;
  currentTimes?: APIV1TimerResponse_CurrentTimes | undefined;
  allTimersOperation?: APIV1TimerResponse_AllTimersOperation | undefined;
  getTimer?: APIV1TimerResponse_GetTimer | undefined;
  putTimer?: APIV1TimerResponse_PutTimer | undefined;
  deleteTimer?: APIV1TimerResponse_DeleteTimer | undefined;
  timerOperation?: APIV1TimerResponse_TimerOperation | undefined;
  putTimerOperation?: APIV1TimerResponse_PutTimerOperation | undefined;
  timerIncrement?: APIV1TimerResponse_TimerIncrement | undefined;
  systemTime?: APIV1TimerResponse_SystemTime | undefined;
  videoCountdown?: APIV1TimerResponse_VideoCountdown | undefined;
}

export interface APIV1TimerResponse_Timers {
  timers: APIV1Timer[];
}

export interface APIV1TimerResponse_CreateTimer {
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerResponse_CurrentTimes {
  timers: APIV1TimerValue[];
}

export interface APIV1TimerResponse_AllTimersOperation {}

export interface APIV1TimerResponse_GetTimer {
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerResponse_PutTimer {
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerResponse_DeleteTimer {}

export interface APIV1TimerResponse_TimerOperation {}

export interface APIV1TimerResponse_PutTimerOperation {
  timer: APIV1Timer | undefined;
}

export interface APIV1TimerResponse_TimerIncrement {}

export interface APIV1TimerResponse_SystemTime {
  time: number;
}

export interface APIV1TimerResponse_VideoCountdown {
  time: string;
}

function createBaseAPIV1TimerFormat(): APIV1TimerFormat {
  return { hour: 0, minute: 0, second: 0, millisecond: 0 };
}

export const APIV1TimerFormat = {
  encode(
    message: APIV1TimerFormat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hour !== 0) {
      writer.uint32(48).int32(message.hour);
    }
    if (message.minute !== 0) {
      writer.uint32(56).int32(message.minute);
    }
    if (message.second !== 0) {
      writer.uint32(64).int32(message.second);
    }
    if (message.millisecond !== 0) {
      writer.uint32(72).int32(message.millisecond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerFormat {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerFormat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hour = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.minute = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.second = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.millisecond = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerFormat {
    return {
      hour: isSet(object.hour)
        ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.hour)
        : 0,
      minute: isSet(object.minute)
        ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.minute)
        : 0,
      second: isSet(object.second)
        ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(object.second)
        : 0,
      millisecond: isSet(object.millisecond)
        ? aPIV1TimerFormat_APIV1TimerUnitDisplayFormatFromJSON(
            object.millisecond,
          )
        : 0,
    };
  },

  toJSON(message: APIV1TimerFormat): unknown {
    const obj: any = {};
    if (message.hour !== 0) {
      obj.hour = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
        message.hour,
      );
    }
    if (message.minute !== 0) {
      obj.minute = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
        message.minute,
      );
    }
    if (message.second !== 0) {
      obj.second = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
        message.second,
      );
    }
    if (message.millisecond !== 0) {
      obj.millisecond = aPIV1TimerFormat_APIV1TimerUnitDisplayFormatToJSON(
        message.millisecond,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerFormat>, I>>(
    base?: I,
  ): APIV1TimerFormat {
    return APIV1TimerFormat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerFormat>, I>>(
    object: I,
  ): APIV1TimerFormat {
    const message = createBaseAPIV1TimerFormat();
    message.hour = object.hour ?? 0;
    message.minute = object.minute ?? 0;
    message.second = object.second ?? 0;
    message.millisecond = object.millisecond ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerValue(): APIV1TimerValue {
  return { id: undefined, time: '', state: 0 };
}

export const APIV1TimerValue = {
  encode(
    message: APIV1TimerValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== '') {
      writer.uint32(18).string(message.time);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.time = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerValue {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      time: isSet(object.time) ? globalThis.String(object.time) : '',
      state: isSet(object.state) ? aPIV1TimerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: APIV1TimerValue): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.time !== '') {
      obj.time = message.time;
    }
    if (message.state !== 0) {
      obj.state = aPIV1TimerStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerValue>, I>>(
    base?: I,
  ): APIV1TimerValue {
    return APIV1TimerValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerValue>, I>>(
    object: I,
  ): APIV1TimerValue {
    const message = createBaseAPIV1TimerValue();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.time = object.time ?? '';
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAPIV1Timer(): APIV1Timer {
  return {
    id: undefined,
    allowsOverrun: false,
    countdown: undefined,
    countDownToTime: undefined,
    elapsed: undefined,
  };
}

export const APIV1Timer = {
  encode(
    message: APIV1Timer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowsOverrun !== false) {
      writer.uint32(16).bool(message.allowsOverrun);
    }
    if (message.countdown !== undefined) {
      APIV1Timer_APIV1TimerCountdown.encode(
        message.countdown,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.countDownToTime !== undefined) {
      APIV1Timer_APIV1TimerCountdownToTime.encode(
        message.countDownToTime,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.elapsed !== undefined) {
      APIV1Timer_APIV1TimerElapsed.encode(
        message.elapsed,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Timer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowsOverrun = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.countdown = APIV1Timer_APIV1TimerCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.elapsed = APIV1Timer_APIV1TimerElapsed.decode(
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

  fromJSON(object: any): APIV1Timer {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      allowsOverrun: isSet(object.allowsOverrun)
        ? globalThis.Boolean(object.allowsOverrun)
        : false,
      countdown: isSet(object.countdown)
        ? APIV1Timer_APIV1TimerCountdown.fromJSON(object.countdown)
        : undefined,
      countDownToTime: isSet(object.countDownToTime)
        ? APIV1Timer_APIV1TimerCountdownToTime.fromJSON(object.countDownToTime)
        : undefined,
      elapsed: isSet(object.elapsed)
        ? APIV1Timer_APIV1TimerElapsed.fromJSON(object.elapsed)
        : undefined,
    };
  },

  toJSON(message: APIV1Timer): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.allowsOverrun !== false) {
      obj.allowsOverrun = message.allowsOverrun;
    }
    if (message.countdown !== undefined) {
      obj.countdown = APIV1Timer_APIV1TimerCountdown.toJSON(message.countdown);
    }
    if (message.countDownToTime !== undefined) {
      obj.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.toJSON(
        message.countDownToTime,
      );
    }
    if (message.elapsed !== undefined) {
      obj.elapsed = APIV1Timer_APIV1TimerElapsed.toJSON(message.elapsed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Timer>, I>>(base?: I): APIV1Timer {
    return APIV1Timer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Timer>, I>>(
    object: I,
  ): APIV1Timer {
    const message = createBaseAPIV1Timer();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.countdown =
      object.countdown !== undefined && object.countdown !== null
        ? APIV1Timer_APIV1TimerCountdown.fromPartial(object.countdown)
        : undefined;
    message.countDownToTime =
      object.countDownToTime !== undefined && object.countDownToTime !== null
        ? APIV1Timer_APIV1TimerCountdownToTime.fromPartial(
            object.countDownToTime,
          )
        : undefined;
    message.elapsed =
      object.elapsed !== undefined && object.elapsed !== null
        ? APIV1Timer_APIV1TimerElapsed.fromPartial(object.elapsed)
        : undefined;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerCountdown(): APIV1Timer_APIV1TimerCountdown {
  return { duration: 0 };
}

export const APIV1Timer_APIV1TimerCountdown = {
  encode(
    message: APIV1Timer_APIV1TimerCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Timer_APIV1TimerCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.duration = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerCountdown {
    return {
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: APIV1Timer_APIV1TimerCountdown): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdown>, I>>(
    base?: I,
  ): APIV1Timer_APIV1TimerCountdown {
    return APIV1Timer_APIV1TimerCountdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdown>, I>>(
    object: I,
  ): APIV1Timer_APIV1TimerCountdown {
    const message = createBaseAPIV1Timer_APIV1TimerCountdown();
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerCountdownToTime(): APIV1Timer_APIV1TimerCountdownToTime {
  return { timeOfDay: 0, period: 0 };
}

export const APIV1Timer_APIV1TimerCountdownToTime = {
  encode(
    message: APIV1Timer_APIV1TimerCountdownToTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeOfDay !== 0) {
      writer.uint32(8).int32(message.timeOfDay);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Timer_APIV1TimerCountdownToTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerCountdownToTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.timeOfDay = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.period = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerCountdownToTime {
    return {
      timeOfDay: isSet(object.timeOfDay)
        ? globalThis.Number(object.timeOfDay)
        : 0,
      period: isSet(object.period)
        ? aPIV1Timer_APIV1TimePeriodFromJSON(object.period)
        : 0,
    };
  },

  toJSON(message: APIV1Timer_APIV1TimerCountdownToTime): unknown {
    const obj: any = {};
    if (message.timeOfDay !== 0) {
      obj.timeOfDay = Math.round(message.timeOfDay);
    }
    if (message.period !== 0) {
      obj.period = aPIV1Timer_APIV1TimePeriodToJSON(message.period);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdownToTime>, I>>(
    base?: I,
  ): APIV1Timer_APIV1TimerCountdownToTime {
    return APIV1Timer_APIV1TimerCountdownToTime.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1Timer_APIV1TimerCountdownToTime>, I>,
  >(object: I): APIV1Timer_APIV1TimerCountdownToTime {
    const message = createBaseAPIV1Timer_APIV1TimerCountdownToTime();
    message.timeOfDay = object.timeOfDay ?? 0;
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseAPIV1Timer_APIV1TimerElapsed(): APIV1Timer_APIV1TimerElapsed {
  return { startTime: 0, endTime: 0, hasEndTime: false };
}

export const APIV1Timer_APIV1TimerElapsed = {
  encode(
    message: APIV1Timer_APIV1TimerElapsed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(8).int32(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(16).int32(message.endTime);
    }
    if (message.hasEndTime !== false) {
      writer.uint32(24).bool(message.hasEndTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Timer_APIV1TimerElapsed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Timer_APIV1TimerElapsed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startTime = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.endTime = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasEndTime = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Timer_APIV1TimerElapsed {
    return {
      startTime: isSet(object.startTime)
        ? globalThis.Number(object.startTime)
        : 0,
      endTime: isSet(object.endTime) ? globalThis.Number(object.endTime) : 0,
      hasEndTime: isSet(object.hasEndTime)
        ? globalThis.Boolean(object.hasEndTime)
        : false,
    };
  },

  toJSON(message: APIV1Timer_APIV1TimerElapsed): unknown {
    const obj: any = {};
    if (message.startTime !== 0) {
      obj.startTime = Math.round(message.startTime);
    }
    if (message.endTime !== 0) {
      obj.endTime = Math.round(message.endTime);
    }
    if (message.hasEndTime !== false) {
      obj.hasEndTime = message.hasEndTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerElapsed>, I>>(
    base?: I,
  ): APIV1Timer_APIV1TimerElapsed {
    return APIV1Timer_APIV1TimerElapsed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Timer_APIV1TimerElapsed>, I>>(
    object: I,
  ): APIV1Timer_APIV1TimerElapsed {
    const message = createBaseAPIV1Timer_APIV1TimerElapsed();
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.hasEndTime = object.hasEndTime ?? false;
    return message;
  },
};

function createBaseAPIV1TimerRequest(): APIV1TimerRequest {
  return {
    timers: undefined,
    createTimer: undefined,
    currentTimes: undefined,
    allTimersOperation: undefined,
    getTimer: undefined,
    putTimer: undefined,
    deleteTimer: undefined,
    timerOperation: undefined,
    putTimerOperation: undefined,
    timerIncrement: undefined,
    systemTime: undefined,
    videoCountdown: undefined,
  };
}

export const APIV1TimerRequest = {
  encode(
    message: APIV1TimerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timers !== undefined) {
      APIV1TimerRequest_Timers.encode(
        message.timers,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createTimer !== undefined) {
      APIV1TimerRequest_CreateTimer.encode(
        message.createTimer,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.currentTimes !== undefined) {
      APIV1TimerRequest_CurrentTimes.encode(
        message.currentTimes,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.allTimersOperation !== undefined) {
      APIV1TimerRequest_AllTimersOperation.encode(
        message.allTimersOperation,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getTimer !== undefined) {
      APIV1TimerRequest_GetTimer.encode(
        message.getTimer,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.putTimer !== undefined) {
      APIV1TimerRequest_PutTimer.encode(
        message.putTimer,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteTimer !== undefined) {
      APIV1TimerRequest_DeleteTimer.encode(
        message.deleteTimer,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.timerOperation !== undefined) {
      APIV1TimerRequest_TimerOperation.encode(
        message.timerOperation,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.putTimerOperation !== undefined) {
      APIV1TimerRequest_PutTimerOperation.encode(
        message.putTimerOperation,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.timerIncrement !== undefined) {
      APIV1TimerRequest_TimerIncrement.encode(
        message.timerIncrement,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.systemTime !== undefined) {
      APIV1TimerRequest_SystemTime.encode(
        message.systemTime,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.videoCountdown !== undefined) {
      APIV1TimerRequest_VideoCountdown.encode(
        message.videoCountdown,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timers = APIV1TimerRequest_Timers.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createTimer = APIV1TimerRequest_CreateTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentTimes = APIV1TimerRequest_CurrentTimes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allTimersOperation =
            APIV1TimerRequest_AllTimersOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getTimer = APIV1TimerRequest_GetTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.putTimer = APIV1TimerRequest_PutTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteTimer = APIV1TimerRequest_DeleteTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timerOperation = APIV1TimerRequest_TimerOperation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.putTimerOperation =
            APIV1TimerRequest_PutTimerOperation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.timerIncrement = APIV1TimerRequest_TimerIncrement.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.systemTime = APIV1TimerRequest_SystemTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.videoCountdown = APIV1TimerRequest_VideoCountdown.decode(
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

  fromJSON(object: any): APIV1TimerRequest {
    return {
      timers: isSet(object.timers)
        ? APIV1TimerRequest_Timers.fromJSON(object.timers)
        : undefined,
      createTimer: isSet(object.createTimer)
        ? APIV1TimerRequest_CreateTimer.fromJSON(object.createTimer)
        : undefined,
      currentTimes: isSet(object.currentTimes)
        ? APIV1TimerRequest_CurrentTimes.fromJSON(object.currentTimes)
        : undefined,
      allTimersOperation: isSet(object.allTimersOperation)
        ? APIV1TimerRequest_AllTimersOperation.fromJSON(
            object.allTimersOperation,
          )
        : undefined,
      getTimer: isSet(object.getTimer)
        ? APIV1TimerRequest_GetTimer.fromJSON(object.getTimer)
        : undefined,
      putTimer: isSet(object.putTimer)
        ? APIV1TimerRequest_PutTimer.fromJSON(object.putTimer)
        : undefined,
      deleteTimer: isSet(object.deleteTimer)
        ? APIV1TimerRequest_DeleteTimer.fromJSON(object.deleteTimer)
        : undefined,
      timerOperation: isSet(object.timerOperation)
        ? APIV1TimerRequest_TimerOperation.fromJSON(object.timerOperation)
        : undefined,
      putTimerOperation: isSet(object.putTimerOperation)
        ? APIV1TimerRequest_PutTimerOperation.fromJSON(object.putTimerOperation)
        : undefined,
      timerIncrement: isSet(object.timerIncrement)
        ? APIV1TimerRequest_TimerIncrement.fromJSON(object.timerIncrement)
        : undefined,
      systemTime: isSet(object.systemTime)
        ? APIV1TimerRequest_SystemTime.fromJSON(object.systemTime)
        : undefined,
      videoCountdown: isSet(object.videoCountdown)
        ? APIV1TimerRequest_VideoCountdown.fromJSON(object.videoCountdown)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerRequest): unknown {
    const obj: any = {};
    if (message.timers !== undefined) {
      obj.timers = APIV1TimerRequest_Timers.toJSON(message.timers);
    }
    if (message.createTimer !== undefined) {
      obj.createTimer = APIV1TimerRequest_CreateTimer.toJSON(
        message.createTimer,
      );
    }
    if (message.currentTimes !== undefined) {
      obj.currentTimes = APIV1TimerRequest_CurrentTimes.toJSON(
        message.currentTimes,
      );
    }
    if (message.allTimersOperation !== undefined) {
      obj.allTimersOperation = APIV1TimerRequest_AllTimersOperation.toJSON(
        message.allTimersOperation,
      );
    }
    if (message.getTimer !== undefined) {
      obj.getTimer = APIV1TimerRequest_GetTimer.toJSON(message.getTimer);
    }
    if (message.putTimer !== undefined) {
      obj.putTimer = APIV1TimerRequest_PutTimer.toJSON(message.putTimer);
    }
    if (message.deleteTimer !== undefined) {
      obj.deleteTimer = APIV1TimerRequest_DeleteTimer.toJSON(
        message.deleteTimer,
      );
    }
    if (message.timerOperation !== undefined) {
      obj.timerOperation = APIV1TimerRequest_TimerOperation.toJSON(
        message.timerOperation,
      );
    }
    if (message.putTimerOperation !== undefined) {
      obj.putTimerOperation = APIV1TimerRequest_PutTimerOperation.toJSON(
        message.putTimerOperation,
      );
    }
    if (message.timerIncrement !== undefined) {
      obj.timerIncrement = APIV1TimerRequest_TimerIncrement.toJSON(
        message.timerIncrement,
      );
    }
    if (message.systemTime !== undefined) {
      obj.systemTime = APIV1TimerRequest_SystemTime.toJSON(message.systemTime);
    }
    if (message.videoCountdown !== undefined) {
      obj.videoCountdown = APIV1TimerRequest_VideoCountdown.toJSON(
        message.videoCountdown,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest>, I>>(
    base?: I,
  ): APIV1TimerRequest {
    return APIV1TimerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest>, I>>(
    object: I,
  ): APIV1TimerRequest {
    const message = createBaseAPIV1TimerRequest();
    message.timers =
      object.timers !== undefined && object.timers !== null
        ? APIV1TimerRequest_Timers.fromPartial(object.timers)
        : undefined;
    message.createTimer =
      object.createTimer !== undefined && object.createTimer !== null
        ? APIV1TimerRequest_CreateTimer.fromPartial(object.createTimer)
        : undefined;
    message.currentTimes =
      object.currentTimes !== undefined && object.currentTimes !== null
        ? APIV1TimerRequest_CurrentTimes.fromPartial(object.currentTimes)
        : undefined;
    message.allTimersOperation =
      object.allTimersOperation !== undefined &&
      object.allTimersOperation !== null
        ? APIV1TimerRequest_AllTimersOperation.fromPartial(
            object.allTimersOperation,
          )
        : undefined;
    message.getTimer =
      object.getTimer !== undefined && object.getTimer !== null
        ? APIV1TimerRequest_GetTimer.fromPartial(object.getTimer)
        : undefined;
    message.putTimer =
      object.putTimer !== undefined && object.putTimer !== null
        ? APIV1TimerRequest_PutTimer.fromPartial(object.putTimer)
        : undefined;
    message.deleteTimer =
      object.deleteTimer !== undefined && object.deleteTimer !== null
        ? APIV1TimerRequest_DeleteTimer.fromPartial(object.deleteTimer)
        : undefined;
    message.timerOperation =
      object.timerOperation !== undefined && object.timerOperation !== null
        ? APIV1TimerRequest_TimerOperation.fromPartial(object.timerOperation)
        : undefined;
    message.putTimerOperation =
      object.putTimerOperation !== undefined &&
      object.putTimerOperation !== null
        ? APIV1TimerRequest_PutTimerOperation.fromPartial(
            object.putTimerOperation,
          )
        : undefined;
    message.timerIncrement =
      object.timerIncrement !== undefined && object.timerIncrement !== null
        ? APIV1TimerRequest_TimerIncrement.fromPartial(object.timerIncrement)
        : undefined;
    message.systemTime =
      object.systemTime !== undefined && object.systemTime !== null
        ? APIV1TimerRequest_SystemTime.fromPartial(object.systemTime)
        : undefined;
    message.videoCountdown =
      object.videoCountdown !== undefined && object.videoCountdown !== null
        ? APIV1TimerRequest_VideoCountdown.fromPartial(object.videoCountdown)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerRequest_Timers(): APIV1TimerRequest_Timers {
  return {};
}

export const APIV1TimerRequest_Timers = {
  encode(
    _: APIV1TimerRequest_Timers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_Timers {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_Timers();
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

  fromJSON(_: any): APIV1TimerRequest_Timers {
    return {};
  },

  toJSON(_: APIV1TimerRequest_Timers): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_Timers>, I>>(
    base?: I,
  ): APIV1TimerRequest_Timers {
    return APIV1TimerRequest_Timers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_Timers>, I>>(
    _: I,
  ): APIV1TimerRequest_Timers {
    const message = createBaseAPIV1TimerRequest_Timers();
    return message;
  },
};

function createBaseAPIV1TimerRequest_CreateTimer(): APIV1TimerRequest_CreateTimer {
  return {
    name: '',
    allowsOverrun: false,
    countdown: undefined,
    countDownToTime: undefined,
    elapsed: undefined,
  };
}

export const APIV1TimerRequest_CreateTimer = {
  encode(
    message: APIV1TimerRequest_CreateTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.allowsOverrun !== false) {
      writer.uint32(16).bool(message.allowsOverrun);
    }
    if (message.countdown !== undefined) {
      APIV1Timer_APIV1TimerCountdown.encode(
        message.countdown,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.countDownToTime !== undefined) {
      APIV1Timer_APIV1TimerCountdownToTime.encode(
        message.countDownToTime,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.elapsed !== undefined) {
      APIV1Timer_APIV1TimerElapsed.encode(
        message.elapsed,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_CreateTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_CreateTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowsOverrun = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.countdown = APIV1Timer_APIV1TimerCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.elapsed = APIV1Timer_APIV1TimerElapsed.decode(
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

  fromJSON(object: any): APIV1TimerRequest_CreateTimer {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      allowsOverrun: isSet(object.allowsOverrun)
        ? globalThis.Boolean(object.allowsOverrun)
        : false,
      countdown: isSet(object.countdown)
        ? APIV1Timer_APIV1TimerCountdown.fromJSON(object.countdown)
        : undefined,
      countDownToTime: isSet(object.countDownToTime)
        ? APIV1Timer_APIV1TimerCountdownToTime.fromJSON(object.countDownToTime)
        : undefined,
      elapsed: isSet(object.elapsed)
        ? APIV1Timer_APIV1TimerElapsed.fromJSON(object.elapsed)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerRequest_CreateTimer): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.allowsOverrun !== false) {
      obj.allowsOverrun = message.allowsOverrun;
    }
    if (message.countdown !== undefined) {
      obj.countdown = APIV1Timer_APIV1TimerCountdown.toJSON(message.countdown);
    }
    if (message.countDownToTime !== undefined) {
      obj.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.toJSON(
        message.countDownToTime,
      );
    }
    if (message.elapsed !== undefined) {
      obj.elapsed = APIV1Timer_APIV1TimerElapsed.toJSON(message.elapsed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_CreateTimer>, I>>(
    base?: I,
  ): APIV1TimerRequest_CreateTimer {
    return APIV1TimerRequest_CreateTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_CreateTimer>, I>>(
    object: I,
  ): APIV1TimerRequest_CreateTimer {
    const message = createBaseAPIV1TimerRequest_CreateTimer();
    message.name = object.name ?? '';
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.countdown =
      object.countdown !== undefined && object.countdown !== null
        ? APIV1Timer_APIV1TimerCountdown.fromPartial(object.countdown)
        : undefined;
    message.countDownToTime =
      object.countDownToTime !== undefined && object.countDownToTime !== null
        ? APIV1Timer_APIV1TimerCountdownToTime.fromPartial(
            object.countDownToTime,
          )
        : undefined;
    message.elapsed =
      object.elapsed !== undefined && object.elapsed !== null
        ? APIV1Timer_APIV1TimerElapsed.fromPartial(object.elapsed)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerRequest_CurrentTimes(): APIV1TimerRequest_CurrentTimes {
  return {};
}

export const APIV1TimerRequest_CurrentTimes = {
  encode(
    _: APIV1TimerRequest_CurrentTimes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_CurrentTimes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_CurrentTimes();
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

  fromJSON(_: any): APIV1TimerRequest_CurrentTimes {
    return {};
  },

  toJSON(_: APIV1TimerRequest_CurrentTimes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_CurrentTimes>, I>>(
    base?: I,
  ): APIV1TimerRequest_CurrentTimes {
    return APIV1TimerRequest_CurrentTimes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_CurrentTimes>, I>>(
    _: I,
  ): APIV1TimerRequest_CurrentTimes {
    const message = createBaseAPIV1TimerRequest_CurrentTimes();
    return message;
  },
};

function createBaseAPIV1TimerRequest_AllTimersOperation(): APIV1TimerRequest_AllTimersOperation {
  return { operation: 0 };
}

export const APIV1TimerRequest_AllTimersOperation = {
  encode(
    message: APIV1TimerRequest_AllTimersOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_AllTimersOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_AllTimersOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerRequest_AllTimersOperation {
    return {
      operation: isSet(object.operation)
        ? aPIV1TimerOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(message: APIV1TimerRequest_AllTimersOperation): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = aPIV1TimerOperationToJSON(message.operation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_AllTimersOperation>, I>>(
    base?: I,
  ): APIV1TimerRequest_AllTimersOperation {
    return APIV1TimerRequest_AllTimersOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerRequest_AllTimersOperation>, I>,
  >(object: I): APIV1TimerRequest_AllTimersOperation {
    const message = createBaseAPIV1TimerRequest_AllTimersOperation();
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerRequest_GetTimer(): APIV1TimerRequest_GetTimer {
  return { id: '' };
}

export const APIV1TimerRequest_GetTimer = {
  encode(
    message: APIV1TimerRequest_GetTimer,
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
  ): APIV1TimerRequest_GetTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_GetTimer();
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

  fromJSON(object: any): APIV1TimerRequest_GetTimer {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TimerRequest_GetTimer): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_GetTimer>, I>>(
    base?: I,
  ): APIV1TimerRequest_GetTimer {
    return APIV1TimerRequest_GetTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_GetTimer>, I>>(
    object: I,
  ): APIV1TimerRequest_GetTimer {
    const message = createBaseAPIV1TimerRequest_GetTimer();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TimerRequest_PutTimer(): APIV1TimerRequest_PutTimer {
  return { id: '', timer: undefined };
}

export const APIV1TimerRequest_PutTimer = {
  encode(
    message: APIV1TimerRequest_PutTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_PutTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_PutTimer();
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
          if (tag !== 18) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerRequest_PutTimer {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerRequest_PutTimer): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_PutTimer>, I>>(
    base?: I,
  ): APIV1TimerRequest_PutTimer {
    return APIV1TimerRequest_PutTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_PutTimer>, I>>(
    object: I,
  ): APIV1TimerRequest_PutTimer {
    const message = createBaseAPIV1TimerRequest_PutTimer();
    message.id = object.id ?? '';
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerRequest_DeleteTimer(): APIV1TimerRequest_DeleteTimer {
  return { id: '' };
}

export const APIV1TimerRequest_DeleteTimer = {
  encode(
    message: APIV1TimerRequest_DeleteTimer,
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
  ): APIV1TimerRequest_DeleteTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_DeleteTimer();
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

  fromJSON(object: any): APIV1TimerRequest_DeleteTimer {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TimerRequest_DeleteTimer): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_DeleteTimer>, I>>(
    base?: I,
  ): APIV1TimerRequest_DeleteTimer {
    return APIV1TimerRequest_DeleteTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_DeleteTimer>, I>>(
    object: I,
  ): APIV1TimerRequest_DeleteTimer {
    const message = createBaseAPIV1TimerRequest_DeleteTimer();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TimerRequest_TimerOperation(): APIV1TimerRequest_TimerOperation {
  return { id: '', operation: 0 };
}

export const APIV1TimerRequest_TimerOperation = {
  encode(
    message: APIV1TimerRequest_TimerOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_TimerOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_TimerOperation();
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

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerRequest_TimerOperation {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      operation: isSet(object.operation)
        ? aPIV1TimerOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(message: APIV1TimerRequest_TimerOperation): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.operation !== 0) {
      obj.operation = aPIV1TimerOperationToJSON(message.operation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_TimerOperation>, I>>(
    base?: I,
  ): APIV1TimerRequest_TimerOperation {
    return APIV1TimerRequest_TimerOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerRequest_TimerOperation>, I>,
  >(object: I): APIV1TimerRequest_TimerOperation {
    const message = createBaseAPIV1TimerRequest_TimerOperation();
    message.id = object.id ?? '';
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerRequest_PutTimerOperation(): APIV1TimerRequest_PutTimerOperation {
  return { id: '', operation: 0, timer: undefined };
}

export const APIV1TimerRequest_PutTimerOperation = {
  encode(
    message: APIV1TimerRequest_PutTimerOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_PutTimerOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_PutTimerOperation();
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

          message.operation = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerRequest_PutTimerOperation {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      operation: isSet(object.operation)
        ? aPIV1TimerOperationFromJSON(object.operation)
        : 0,
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerRequest_PutTimerOperation): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.operation !== 0) {
      obj.operation = aPIV1TimerOperationToJSON(message.operation);
    }
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_PutTimerOperation>, I>>(
    base?: I,
  ): APIV1TimerRequest_PutTimerOperation {
    return APIV1TimerRequest_PutTimerOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerRequest_PutTimerOperation>, I>,
  >(object: I): APIV1TimerRequest_PutTimerOperation {
    const message = createBaseAPIV1TimerRequest_PutTimerOperation();
    message.id = object.id ?? '';
    message.operation = object.operation ?? 0;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerRequest_TimerIncrement(): APIV1TimerRequest_TimerIncrement {
  return { id: '', amount: 0 };
}

export const APIV1TimerRequest_TimerIncrement = {
  encode(
    message: APIV1TimerRequest_TimerIncrement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.amount !== 0) {
      writer.uint32(17).double(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_TimerIncrement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_TimerIncrement();
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
          if (tag !== 17) {
            break;
          }

          message.amount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerRequest_TimerIncrement {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: APIV1TimerRequest_TimerIncrement): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_TimerIncrement>, I>>(
    base?: I,
  ): APIV1TimerRequest_TimerIncrement {
    return APIV1TimerRequest_TimerIncrement.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerRequest_TimerIncrement>, I>,
  >(object: I): APIV1TimerRequest_TimerIncrement {
    const message = createBaseAPIV1TimerRequest_TimerIncrement();
    message.id = object.id ?? '';
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerRequest_SystemTime(): APIV1TimerRequest_SystemTime {
  return {};
}

export const APIV1TimerRequest_SystemTime = {
  encode(
    _: APIV1TimerRequest_SystemTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_SystemTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_SystemTime();
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

  fromJSON(_: any): APIV1TimerRequest_SystemTime {
    return {};
  },

  toJSON(_: APIV1TimerRequest_SystemTime): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_SystemTime>, I>>(
    base?: I,
  ): APIV1TimerRequest_SystemTime {
    return APIV1TimerRequest_SystemTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerRequest_SystemTime>, I>>(
    _: I,
  ): APIV1TimerRequest_SystemTime {
    const message = createBaseAPIV1TimerRequest_SystemTime();
    return message;
  },
};

function createBaseAPIV1TimerRequest_VideoCountdown(): APIV1TimerRequest_VideoCountdown {
  return {};
}

export const APIV1TimerRequest_VideoCountdown = {
  encode(
    _: APIV1TimerRequest_VideoCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerRequest_VideoCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerRequest_VideoCountdown();
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

  fromJSON(_: any): APIV1TimerRequest_VideoCountdown {
    return {};
  },

  toJSON(_: APIV1TimerRequest_VideoCountdown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerRequest_VideoCountdown>, I>>(
    base?: I,
  ): APIV1TimerRequest_VideoCountdown {
    return APIV1TimerRequest_VideoCountdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerRequest_VideoCountdown>, I>,
  >(_: I): APIV1TimerRequest_VideoCountdown {
    const message = createBaseAPIV1TimerRequest_VideoCountdown();
    return message;
  },
};

function createBaseAPIV1TimerResponse(): APIV1TimerResponse {
  return {
    timers: undefined,
    createTimer: undefined,
    currentTimes: undefined,
    allTimersOperation: undefined,
    getTimer: undefined,
    putTimer: undefined,
    deleteTimer: undefined,
    timerOperation: undefined,
    putTimerOperation: undefined,
    timerIncrement: undefined,
    systemTime: undefined,
    videoCountdown: undefined,
  };
}

export const APIV1TimerResponse = {
  encode(
    message: APIV1TimerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timers !== undefined) {
      APIV1TimerResponse_Timers.encode(
        message.timers,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createTimer !== undefined) {
      APIV1TimerResponse_CreateTimer.encode(
        message.createTimer,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.currentTimes !== undefined) {
      APIV1TimerResponse_CurrentTimes.encode(
        message.currentTimes,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.allTimersOperation !== undefined) {
      APIV1TimerResponse_AllTimersOperation.encode(
        message.allTimersOperation,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getTimer !== undefined) {
      APIV1TimerResponse_GetTimer.encode(
        message.getTimer,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.putTimer !== undefined) {
      APIV1TimerResponse_PutTimer.encode(
        message.putTimer,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteTimer !== undefined) {
      APIV1TimerResponse_DeleteTimer.encode(
        message.deleteTimer,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.timerOperation !== undefined) {
      APIV1TimerResponse_TimerOperation.encode(
        message.timerOperation,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.putTimerOperation !== undefined) {
      APIV1TimerResponse_PutTimerOperation.encode(
        message.putTimerOperation,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.timerIncrement !== undefined) {
      APIV1TimerResponse_TimerIncrement.encode(
        message.timerIncrement,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.systemTime !== undefined) {
      APIV1TimerResponse_SystemTime.encode(
        message.systemTime,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.videoCountdown !== undefined) {
      APIV1TimerResponse_VideoCountdown.encode(
        message.videoCountdown,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TimerResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timers = APIV1TimerResponse_Timers.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createTimer = APIV1TimerResponse_CreateTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currentTimes = APIV1TimerResponse_CurrentTimes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allTimersOperation =
            APIV1TimerResponse_AllTimersOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getTimer = APIV1TimerResponse_GetTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.putTimer = APIV1TimerResponse_PutTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteTimer = APIV1TimerResponse_DeleteTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timerOperation = APIV1TimerResponse_TimerOperation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.putTimerOperation =
            APIV1TimerResponse_PutTimerOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.timerIncrement = APIV1TimerResponse_TimerIncrement.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.systemTime = APIV1TimerResponse_SystemTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.videoCountdown = APIV1TimerResponse_VideoCountdown.decode(
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

  fromJSON(object: any): APIV1TimerResponse {
    return {
      timers: isSet(object.timers)
        ? APIV1TimerResponse_Timers.fromJSON(object.timers)
        : undefined,
      createTimer: isSet(object.createTimer)
        ? APIV1TimerResponse_CreateTimer.fromJSON(object.createTimer)
        : undefined,
      currentTimes: isSet(object.currentTimes)
        ? APIV1TimerResponse_CurrentTimes.fromJSON(object.currentTimes)
        : undefined,
      allTimersOperation: isSet(object.allTimersOperation)
        ? APIV1TimerResponse_AllTimersOperation.fromJSON(
            object.allTimersOperation,
          )
        : undefined,
      getTimer: isSet(object.getTimer)
        ? APIV1TimerResponse_GetTimer.fromJSON(object.getTimer)
        : undefined,
      putTimer: isSet(object.putTimer)
        ? APIV1TimerResponse_PutTimer.fromJSON(object.putTimer)
        : undefined,
      deleteTimer: isSet(object.deleteTimer)
        ? APIV1TimerResponse_DeleteTimer.fromJSON(object.deleteTimer)
        : undefined,
      timerOperation: isSet(object.timerOperation)
        ? APIV1TimerResponse_TimerOperation.fromJSON(object.timerOperation)
        : undefined,
      putTimerOperation: isSet(object.putTimerOperation)
        ? APIV1TimerResponse_PutTimerOperation.fromJSON(
            object.putTimerOperation,
          )
        : undefined,
      timerIncrement: isSet(object.timerIncrement)
        ? APIV1TimerResponse_TimerIncrement.fromJSON(object.timerIncrement)
        : undefined,
      systemTime: isSet(object.systemTime)
        ? APIV1TimerResponse_SystemTime.fromJSON(object.systemTime)
        : undefined,
      videoCountdown: isSet(object.videoCountdown)
        ? APIV1TimerResponse_VideoCountdown.fromJSON(object.videoCountdown)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerResponse): unknown {
    const obj: any = {};
    if (message.timers !== undefined) {
      obj.timers = APIV1TimerResponse_Timers.toJSON(message.timers);
    }
    if (message.createTimer !== undefined) {
      obj.createTimer = APIV1TimerResponse_CreateTimer.toJSON(
        message.createTimer,
      );
    }
    if (message.currentTimes !== undefined) {
      obj.currentTimes = APIV1TimerResponse_CurrentTimes.toJSON(
        message.currentTimes,
      );
    }
    if (message.allTimersOperation !== undefined) {
      obj.allTimersOperation = APIV1TimerResponse_AllTimersOperation.toJSON(
        message.allTimersOperation,
      );
    }
    if (message.getTimer !== undefined) {
      obj.getTimer = APIV1TimerResponse_GetTimer.toJSON(message.getTimer);
    }
    if (message.putTimer !== undefined) {
      obj.putTimer = APIV1TimerResponse_PutTimer.toJSON(message.putTimer);
    }
    if (message.deleteTimer !== undefined) {
      obj.deleteTimer = APIV1TimerResponse_DeleteTimer.toJSON(
        message.deleteTimer,
      );
    }
    if (message.timerOperation !== undefined) {
      obj.timerOperation = APIV1TimerResponse_TimerOperation.toJSON(
        message.timerOperation,
      );
    }
    if (message.putTimerOperation !== undefined) {
      obj.putTimerOperation = APIV1TimerResponse_PutTimerOperation.toJSON(
        message.putTimerOperation,
      );
    }
    if (message.timerIncrement !== undefined) {
      obj.timerIncrement = APIV1TimerResponse_TimerIncrement.toJSON(
        message.timerIncrement,
      );
    }
    if (message.systemTime !== undefined) {
      obj.systemTime = APIV1TimerResponse_SystemTime.toJSON(message.systemTime);
    }
    if (message.videoCountdown !== undefined) {
      obj.videoCountdown = APIV1TimerResponse_VideoCountdown.toJSON(
        message.videoCountdown,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse>, I>>(
    base?: I,
  ): APIV1TimerResponse {
    return APIV1TimerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse>, I>>(
    object: I,
  ): APIV1TimerResponse {
    const message = createBaseAPIV1TimerResponse();
    message.timers =
      object.timers !== undefined && object.timers !== null
        ? APIV1TimerResponse_Timers.fromPartial(object.timers)
        : undefined;
    message.createTimer =
      object.createTimer !== undefined && object.createTimer !== null
        ? APIV1TimerResponse_CreateTimer.fromPartial(object.createTimer)
        : undefined;
    message.currentTimes =
      object.currentTimes !== undefined && object.currentTimes !== null
        ? APIV1TimerResponse_CurrentTimes.fromPartial(object.currentTimes)
        : undefined;
    message.allTimersOperation =
      object.allTimersOperation !== undefined &&
      object.allTimersOperation !== null
        ? APIV1TimerResponse_AllTimersOperation.fromPartial(
            object.allTimersOperation,
          )
        : undefined;
    message.getTimer =
      object.getTimer !== undefined && object.getTimer !== null
        ? APIV1TimerResponse_GetTimer.fromPartial(object.getTimer)
        : undefined;
    message.putTimer =
      object.putTimer !== undefined && object.putTimer !== null
        ? APIV1TimerResponse_PutTimer.fromPartial(object.putTimer)
        : undefined;
    message.deleteTimer =
      object.deleteTimer !== undefined && object.deleteTimer !== null
        ? APIV1TimerResponse_DeleteTimer.fromPartial(object.deleteTimer)
        : undefined;
    message.timerOperation =
      object.timerOperation !== undefined && object.timerOperation !== null
        ? APIV1TimerResponse_TimerOperation.fromPartial(object.timerOperation)
        : undefined;
    message.putTimerOperation =
      object.putTimerOperation !== undefined &&
      object.putTimerOperation !== null
        ? APIV1TimerResponse_PutTimerOperation.fromPartial(
            object.putTimerOperation,
          )
        : undefined;
    message.timerIncrement =
      object.timerIncrement !== undefined && object.timerIncrement !== null
        ? APIV1TimerResponse_TimerIncrement.fromPartial(object.timerIncrement)
        : undefined;
    message.systemTime =
      object.systemTime !== undefined && object.systemTime !== null
        ? APIV1TimerResponse_SystemTime.fromPartial(object.systemTime)
        : undefined;
    message.videoCountdown =
      object.videoCountdown !== undefined && object.videoCountdown !== null
        ? APIV1TimerResponse_VideoCountdown.fromPartial(object.videoCountdown)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerResponse_Timers(): APIV1TimerResponse_Timers {
  return { timers: [] };
}

export const APIV1TimerResponse_Timers = {
  encode(
    message: APIV1TimerResponse_Timers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.timers) {
      APIV1Timer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_Timers {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_Timers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timers.push(APIV1Timer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_Timers {
    return {
      timers: globalThis.Array.isArray(object?.timers)
        ? object.timers.map((e: any) => APIV1Timer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1TimerResponse_Timers): unknown {
    const obj: any = {};
    if (message.timers?.length) {
      obj.timers = message.timers.map((e) => APIV1Timer.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_Timers>, I>>(
    base?: I,
  ): APIV1TimerResponse_Timers {
    return APIV1TimerResponse_Timers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_Timers>, I>>(
    object: I,
  ): APIV1TimerResponse_Timers {
    const message = createBaseAPIV1TimerResponse_Timers();
    message.timers = object.timers?.map((e) => APIV1Timer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1TimerResponse_CreateTimer(): APIV1TimerResponse_CreateTimer {
  return { timer: undefined };
}

export const APIV1TimerResponse_CreateTimer = {
  encode(
    message: APIV1TimerResponse_CreateTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_CreateTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_CreateTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_CreateTimer {
    return {
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerResponse_CreateTimer): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_CreateTimer>, I>>(
    base?: I,
  ): APIV1TimerResponse_CreateTimer {
    return APIV1TimerResponse_CreateTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_CreateTimer>, I>>(
    object: I,
  ): APIV1TimerResponse_CreateTimer {
    const message = createBaseAPIV1TimerResponse_CreateTimer();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerResponse_CurrentTimes(): APIV1TimerResponse_CurrentTimes {
  return { timers: [] };
}

export const APIV1TimerResponse_CurrentTimes = {
  encode(
    message: APIV1TimerResponse_CurrentTimes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.timers) {
      APIV1TimerValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_CurrentTimes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_CurrentTimes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timers.push(APIV1TimerValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_CurrentTimes {
    return {
      timers: globalThis.Array.isArray(object?.timers)
        ? object.timers.map((e: any) => APIV1TimerValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1TimerResponse_CurrentTimes): unknown {
    const obj: any = {};
    if (message.timers?.length) {
      obj.timers = message.timers.map((e) => APIV1TimerValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_CurrentTimes>, I>>(
    base?: I,
  ): APIV1TimerResponse_CurrentTimes {
    return APIV1TimerResponse_CurrentTimes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_CurrentTimes>, I>>(
    object: I,
  ): APIV1TimerResponse_CurrentTimes {
    const message = createBaseAPIV1TimerResponse_CurrentTimes();
    message.timers =
      object.timers?.map((e) => APIV1TimerValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1TimerResponse_AllTimersOperation(): APIV1TimerResponse_AllTimersOperation {
  return {};
}

export const APIV1TimerResponse_AllTimersOperation = {
  encode(
    _: APIV1TimerResponse_AllTimersOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_AllTimersOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_AllTimersOperation();
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

  fromJSON(_: any): APIV1TimerResponse_AllTimersOperation {
    return {};
  },

  toJSON(_: APIV1TimerResponse_AllTimersOperation): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1TimerResponse_AllTimersOperation>, I>,
  >(base?: I): APIV1TimerResponse_AllTimersOperation {
    return APIV1TimerResponse_AllTimersOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerResponse_AllTimersOperation>, I>,
  >(_: I): APIV1TimerResponse_AllTimersOperation {
    const message = createBaseAPIV1TimerResponse_AllTimersOperation();
    return message;
  },
};

function createBaseAPIV1TimerResponse_GetTimer(): APIV1TimerResponse_GetTimer {
  return { timer: undefined };
}

export const APIV1TimerResponse_GetTimer = {
  encode(
    message: APIV1TimerResponse_GetTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_GetTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_GetTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_GetTimer {
    return {
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerResponse_GetTimer): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_GetTimer>, I>>(
    base?: I,
  ): APIV1TimerResponse_GetTimer {
    return APIV1TimerResponse_GetTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_GetTimer>, I>>(
    object: I,
  ): APIV1TimerResponse_GetTimer {
    const message = createBaseAPIV1TimerResponse_GetTimer();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerResponse_PutTimer(): APIV1TimerResponse_PutTimer {
  return { timer: undefined };
}

export const APIV1TimerResponse_PutTimer = {
  encode(
    message: APIV1TimerResponse_PutTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_PutTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_PutTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_PutTimer {
    return {
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerResponse_PutTimer): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_PutTimer>, I>>(
    base?: I,
  ): APIV1TimerResponse_PutTimer {
    return APIV1TimerResponse_PutTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_PutTimer>, I>>(
    object: I,
  ): APIV1TimerResponse_PutTimer {
    const message = createBaseAPIV1TimerResponse_PutTimer();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerResponse_DeleteTimer(): APIV1TimerResponse_DeleteTimer {
  return {};
}

export const APIV1TimerResponse_DeleteTimer = {
  encode(
    _: APIV1TimerResponse_DeleteTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_DeleteTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_DeleteTimer();
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

  fromJSON(_: any): APIV1TimerResponse_DeleteTimer {
    return {};
  },

  toJSON(_: APIV1TimerResponse_DeleteTimer): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_DeleteTimer>, I>>(
    base?: I,
  ): APIV1TimerResponse_DeleteTimer {
    return APIV1TimerResponse_DeleteTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_DeleteTimer>, I>>(
    _: I,
  ): APIV1TimerResponse_DeleteTimer {
    const message = createBaseAPIV1TimerResponse_DeleteTimer();
    return message;
  },
};

function createBaseAPIV1TimerResponse_TimerOperation(): APIV1TimerResponse_TimerOperation {
  return {};
}

export const APIV1TimerResponse_TimerOperation = {
  encode(
    _: APIV1TimerResponse_TimerOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_TimerOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_TimerOperation();
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

  fromJSON(_: any): APIV1TimerResponse_TimerOperation {
    return {};
  },

  toJSON(_: APIV1TimerResponse_TimerOperation): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_TimerOperation>, I>>(
    base?: I,
  ): APIV1TimerResponse_TimerOperation {
    return APIV1TimerResponse_TimerOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerResponse_TimerOperation>, I>,
  >(_: I): APIV1TimerResponse_TimerOperation {
    const message = createBaseAPIV1TimerResponse_TimerOperation();
    return message;
  },
};

function createBaseAPIV1TimerResponse_PutTimerOperation(): APIV1TimerResponse_PutTimerOperation {
  return { timer: undefined };
}

export const APIV1TimerResponse_PutTimerOperation = {
  encode(
    message: APIV1TimerResponse_PutTimerOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      APIV1Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_PutTimerOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_PutTimerOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = APIV1Timer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_PutTimerOperation {
    return {
      timer: isSet(object.timer)
        ? APIV1Timer.fromJSON(object.timer)
        : undefined,
    };
  },

  toJSON(message: APIV1TimerResponse_PutTimerOperation): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = APIV1Timer.toJSON(message.timer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_PutTimerOperation>, I>>(
    base?: I,
  ): APIV1TimerResponse_PutTimerOperation {
    return APIV1TimerResponse_PutTimerOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerResponse_PutTimerOperation>, I>,
  >(object: I): APIV1TimerResponse_PutTimerOperation {
    const message = createBaseAPIV1TimerResponse_PutTimerOperation();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Timer.fromPartial(object.timer)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TimerResponse_TimerIncrement(): APIV1TimerResponse_TimerIncrement {
  return {};
}

export const APIV1TimerResponse_TimerIncrement = {
  encode(
    _: APIV1TimerResponse_TimerIncrement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_TimerIncrement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_TimerIncrement();
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

  fromJSON(_: any): APIV1TimerResponse_TimerIncrement {
    return {};
  },

  toJSON(_: APIV1TimerResponse_TimerIncrement): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_TimerIncrement>, I>>(
    base?: I,
  ): APIV1TimerResponse_TimerIncrement {
    return APIV1TimerResponse_TimerIncrement.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerResponse_TimerIncrement>, I>,
  >(_: I): APIV1TimerResponse_TimerIncrement {
    const message = createBaseAPIV1TimerResponse_TimerIncrement();
    return message;
  },
};

function createBaseAPIV1TimerResponse_SystemTime(): APIV1TimerResponse_SystemTime {
  return { time: 0 };
}

export const APIV1TimerResponse_SystemTime = {
  encode(
    message: APIV1TimerResponse_SystemTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint64(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_SystemTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_SystemTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): APIV1TimerResponse_SystemTime {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: APIV1TimerResponse_SystemTime): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = Math.round(message.time);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_SystemTime>, I>>(
    base?: I,
  ): APIV1TimerResponse_SystemTime {
    return APIV1TimerResponse_SystemTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TimerResponse_SystemTime>, I>>(
    object: I,
  ): APIV1TimerResponse_SystemTime {
    const message = createBaseAPIV1TimerResponse_SystemTime();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAPIV1TimerResponse_VideoCountdown(): APIV1TimerResponse_VideoCountdown {
  return { time: '' };
}

export const APIV1TimerResponse_VideoCountdown = {
  encode(
    message: APIV1TimerResponse_VideoCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== '') {
      writer.uint32(10).string(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TimerResponse_VideoCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TimerResponse_VideoCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1TimerResponse_VideoCountdown {
    return { time: isSet(object.time) ? globalThis.String(object.time) : '' };
  },

  toJSON(message: APIV1TimerResponse_VideoCountdown): unknown {
    const obj: any = {};
    if (message.time !== '') {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TimerResponse_VideoCountdown>, I>>(
    base?: I,
  ): APIV1TimerResponse_VideoCountdown {
    return APIV1TimerResponse_VideoCountdown.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TimerResponse_VideoCountdown>, I>,
  >(object: I): APIV1TimerResponse_VideoCountdown {
    const message = createBaseAPIV1TimerResponse_VideoCountdown();
    message.time = object.time ?? '';
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
