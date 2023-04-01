/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo, UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface Clock {
  format: string;
}

export interface Clock_Format {
  dateType: Clock_Format_DateFormatterStyle;
  timeFormat: Clock_Format_DateFormatterStyle;
  militaryTimeEnabled: boolean;
}

export enum Clock_Format_DateFormatterStyle {
  DATE_FORMATTER_STYLE_NONE = 0,
  DATE_FORMATTER_STYLE_SHORT = 1,
  DATE_FORMATTER_STYLE_MEDIUM = 2,
  DATE_FORMATTER_STYLE_LONG = 3,
  DATE_FORMATTER_STYLE_FULL = 4,
  UNRECOGNIZED = -1,
}

export function clock_Format_DateFormatterStyleFromJSON(
  object: any,
): Clock_Format_DateFormatterStyle {
  switch (object) {
    case 0:
    case 'DATE_FORMATTER_STYLE_NONE':
      return Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_NONE;
    case 1:
    case 'DATE_FORMATTER_STYLE_SHORT':
      return Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_SHORT;
    case 2:
    case 'DATE_FORMATTER_STYLE_MEDIUM':
      return Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_MEDIUM;
    case 3:
    case 'DATE_FORMATTER_STYLE_LONG':
      return Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_LONG;
    case 4:
    case 'DATE_FORMATTER_STYLE_FULL':
      return Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_FULL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Clock_Format_DateFormatterStyle.UNRECOGNIZED;
  }
}

export function clock_Format_DateFormatterStyleToJSON(
  object: Clock_Format_DateFormatterStyle,
): string {
  switch (object) {
    case Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_NONE:
      return 'DATE_FORMATTER_STYLE_NONE';
    case Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_SHORT:
      return 'DATE_FORMATTER_STYLE_SHORT';
    case Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_MEDIUM:
      return 'DATE_FORMATTER_STYLE_MEDIUM';
    case Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_LONG:
      return 'DATE_FORMATTER_STYLE_LONG';
    case Clock_Format_DateFormatterStyle.DATE_FORMATTER_STYLE_FULL:
      return 'DATE_FORMATTER_STYLE_FULL';
    case Clock_Format_DateFormatterStyle.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Timer {
  uuid: UUID | undefined;
  name: string;
  configuration: Timer_Configuration | undefined;
}

export interface Timer_Format {
  hour: Timer_Format_Style;
  minute: Timer_Format_Style;
  second: Timer_Format_Style;
  millisecond: Timer_Format_Style;
  isWallClockTime: boolean;
  is24HourTime: boolean;
  showMillisecondsUnderMinuteOnly: boolean;
}

export enum Timer_Format_Style {
  STYE_NONE = 0,
  STYLE_SHORT = 1,
  STYLE_LONG = 2,
  STYLE_REMOVE_SHORT = 3,
  STYLE_REMOVE_LONG = 4,
  UNRECOGNIZED = -1,
}

export function timer_Format_StyleFromJSON(object: any): Timer_Format_Style {
  switch (object) {
    case 0:
    case 'STYE_NONE':
      return Timer_Format_Style.STYE_NONE;
    case 1:
    case 'STYLE_SHORT':
      return Timer_Format_Style.STYLE_SHORT;
    case 2:
    case 'STYLE_LONG':
      return Timer_Format_Style.STYLE_LONG;
    case 3:
    case 'STYLE_REMOVE_SHORT':
      return Timer_Format_Style.STYLE_REMOVE_SHORT;
    case 4:
    case 'STYLE_REMOVE_LONG':
      return Timer_Format_Style.STYLE_REMOVE_LONG;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Timer_Format_Style.UNRECOGNIZED;
  }
}

export function timer_Format_StyleToJSON(object: Timer_Format_Style): string {
  switch (object) {
    case Timer_Format_Style.STYE_NONE:
      return 'STYE_NONE';
    case Timer_Format_Style.STYLE_SHORT:
      return 'STYLE_SHORT';
    case Timer_Format_Style.STYLE_LONG:
      return 'STYLE_LONG';
    case Timer_Format_Style.STYLE_REMOVE_SHORT:
      return 'STYLE_REMOVE_SHORT';
    case Timer_Format_Style.STYLE_REMOVE_LONG:
      return 'STYLE_REMOVE_LONG';
    case Timer_Format_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Timer_Configuration {
  allowsOverrun: boolean;
  countdown?: Timer_Configuration_TimerTypeCountdown | undefined;
  countdownToTime?: Timer_Configuration_TimerTypeCountdownToTime | undefined;
  elapsedTime?: Timer_Configuration_TimerTypeElapsedTime | undefined;
}

export interface Timer_Configuration_TimerTypeCountdown {
  duration: number;
}

export interface Timer_Configuration_TimerTypeCountdownToTime {
  timeOfDay: number;
  period: Timer_Configuration_TimerTypeCountdownToTime_TimePeriod;
}

export enum Timer_Configuration_TimerTypeCountdownToTime_TimePeriod {
  TIME_PERIOD_AM = 0,
  TIME_PERIOD_PM = 1,
  TIME_PERIOD_24 = 2,
  UNRECOGNIZED = -1,
}

export function timer_Configuration_TimerTypeCountdownToTime_TimePeriodFromJSON(
  object: any,
): Timer_Configuration_TimerTypeCountdownToTime_TimePeriod {
  switch (object) {
    case 0:
    case 'TIME_PERIOD_AM':
      return Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_AM;
    case 1:
    case 'TIME_PERIOD_PM':
      return Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_PM;
    case 2:
    case 'TIME_PERIOD_24':
      return Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_24;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.UNRECOGNIZED;
  }
}

export function timer_Configuration_TimerTypeCountdownToTime_TimePeriodToJSON(
  object: Timer_Configuration_TimerTypeCountdownToTime_TimePeriod,
): string {
  switch (object) {
    case Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_AM:
      return 'TIME_PERIOD_AM';
    case Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_PM:
      return 'TIME_PERIOD_PM';
    case Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.TIME_PERIOD_24:
      return 'TIME_PERIOD_24';
    case Timer_Configuration_TimerTypeCountdownToTime_TimePeriod.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Timer_Configuration_TimerTypeElapsedTime {
  startTime: number;
  endTime: number;
  hasEndTime: boolean;
}

export interface TimersDocument {
  applicationInfo: ApplicationInfo | undefined;
  clock: Clock | undefined;
  timers: Timer[];
}

function createBaseClock(): Clock {
  return { format: '' };
}

export const Clock = {
  encode(message: Clock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== '') {
      writer.uint32(10).string(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Clock {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.format = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Clock {
    return { format: isSet(object.format) ? String(object.format) : '' };
  },

  toJSON(message: Clock): unknown {
    const obj: any = {};
    message.format !== undefined && (obj.format = message.format);
    return obj;
  },

  create<I extends Exact<DeepPartial<Clock>, I>>(base?: I): Clock {
    return Clock.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Clock>, I>>(object: I): Clock {
    const message = createBaseClock();
    message.format = object.format ?? '';
    return message;
  },
};

function createBaseClock_Format(): Clock_Format {
  return { dateType: 0, timeFormat: 0, militaryTimeEnabled: false };
}

export const Clock_Format = {
  encode(
    message: Clock_Format,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.dateType !== 0) {
      writer.uint32(16).int32(message.dateType);
    }
    if (message.timeFormat !== 0) {
      writer.uint32(24).int32(message.timeFormat);
    }
    if (message.militaryTimeEnabled === true) {
      writer.uint32(32).bool(message.militaryTimeEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Clock_Format {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClock_Format();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.dateType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timeFormat = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.militaryTimeEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Clock_Format {
    return {
      dateType: isSet(object.dateType)
        ? clock_Format_DateFormatterStyleFromJSON(object.dateType)
        : 0,
      timeFormat: isSet(object.timeFormat)
        ? clock_Format_DateFormatterStyleFromJSON(object.timeFormat)
        : 0,
      militaryTimeEnabled: isSet(object.militaryTimeEnabled)
        ? Boolean(object.militaryTimeEnabled)
        : false,
    };
  },

  toJSON(message: Clock_Format): unknown {
    const obj: any = {};
    message.dateType !== undefined &&
      (obj.dateType = clock_Format_DateFormatterStyleToJSON(message.dateType));
    message.timeFormat !== undefined &&
      (obj.timeFormat = clock_Format_DateFormatterStyleToJSON(
        message.timeFormat,
      ));
    message.militaryTimeEnabled !== undefined &&
      (obj.militaryTimeEnabled = message.militaryTimeEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<Clock_Format>, I>>(
    base?: I,
  ): Clock_Format {
    return Clock_Format.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Clock_Format>, I>>(
    object: I,
  ): Clock_Format {
    const message = createBaseClock_Format();
    message.dateType = object.dateType ?? 0;
    message.timeFormat = object.timeFormat ?? 0;
    message.militaryTimeEnabled = object.militaryTimeEnabled ?? false;
    return message;
  },
};

function createBaseTimer(): Timer {
  return { uuid: undefined, name: '', configuration: undefined };
}

export const Timer = {
  encode(message: Timer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.configuration !== undefined) {
      Timer_Configuration.encode(
        message.configuration,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.configuration = Timer_Configuration.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      configuration: isSet(object.configuration)
        ? Timer_Configuration.fromJSON(object.configuration)
        : undefined,
    };
  },

  toJSON(message: Timer): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? Timer_Configuration.toJSON(message.configuration)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Timer>, I>>(base?: I): Timer {
    return Timer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Timer>, I>>(object: I): Timer {
    const message = createBaseTimer();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.configuration =
      object.configuration !== undefined && object.configuration !== null
        ? Timer_Configuration.fromPartial(object.configuration)
        : undefined;
    return message;
  },
};

function createBaseTimer_Format(): Timer_Format {
  return {
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isWallClockTime: false,
    is24HourTime: false,
    showMillisecondsUnderMinuteOnly: false,
  };
}

export const Timer_Format = {
  encode(
    message: Timer_Format,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hour !== 0) {
      writer.uint32(8).int32(message.hour);
    }
    if (message.minute !== 0) {
      writer.uint32(16).int32(message.minute);
    }
    if (message.second !== 0) {
      writer.uint32(24).int32(message.second);
    }
    if (message.millisecond !== 0) {
      writer.uint32(32).int32(message.millisecond);
    }
    if (message.isWallClockTime === true) {
      writer.uint32(40).bool(message.isWallClockTime);
    }
    if (message.is24HourTime === true) {
      writer.uint32(48).bool(message.is24HourTime);
    }
    if (message.showMillisecondsUnderMinuteOnly === true) {
      writer.uint32(56).bool(message.showMillisecondsUnderMinuteOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timer_Format {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer_Format();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.hour = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minute = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.second = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.millisecond = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isWallClockTime = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.is24HourTime = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.showMillisecondsUnderMinuteOnly = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer_Format {
    return {
      hour: isSet(object.hour) ? timer_Format_StyleFromJSON(object.hour) : 0,
      minute: isSet(object.minute)
        ? timer_Format_StyleFromJSON(object.minute)
        : 0,
      second: isSet(object.second)
        ? timer_Format_StyleFromJSON(object.second)
        : 0,
      millisecond: isSet(object.millisecond)
        ? timer_Format_StyleFromJSON(object.millisecond)
        : 0,
      isWallClockTime: isSet(object.isWallClockTime)
        ? Boolean(object.isWallClockTime)
        : false,
      is24HourTime: isSet(object.is24HourTime)
        ? Boolean(object.is24HourTime)
        : false,
      showMillisecondsUnderMinuteOnly: isSet(
        object.showMillisecondsUnderMinuteOnly,
      )
        ? Boolean(object.showMillisecondsUnderMinuteOnly)
        : false,
    };
  },

  toJSON(message: Timer_Format): unknown {
    const obj: any = {};
    message.hour !== undefined &&
      (obj.hour = timer_Format_StyleToJSON(message.hour));
    message.minute !== undefined &&
      (obj.minute = timer_Format_StyleToJSON(message.minute));
    message.second !== undefined &&
      (obj.second = timer_Format_StyleToJSON(message.second));
    message.millisecond !== undefined &&
      (obj.millisecond = timer_Format_StyleToJSON(message.millisecond));
    message.isWallClockTime !== undefined &&
      (obj.isWallClockTime = message.isWallClockTime);
    message.is24HourTime !== undefined &&
      (obj.is24HourTime = message.is24HourTime);
    message.showMillisecondsUnderMinuteOnly !== undefined &&
      (obj.showMillisecondsUnderMinuteOnly =
        message.showMillisecondsUnderMinuteOnly);
    return obj;
  },

  create<I extends Exact<DeepPartial<Timer_Format>, I>>(
    base?: I,
  ): Timer_Format {
    return Timer_Format.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Timer_Format>, I>>(
    object: I,
  ): Timer_Format {
    const message = createBaseTimer_Format();
    message.hour = object.hour ?? 0;
    message.minute = object.minute ?? 0;
    message.second = object.second ?? 0;
    message.millisecond = object.millisecond ?? 0;
    message.isWallClockTime = object.isWallClockTime ?? false;
    message.is24HourTime = object.is24HourTime ?? false;
    message.showMillisecondsUnderMinuteOnly =
      object.showMillisecondsUnderMinuteOnly ?? false;
    return message;
  },
};

function createBaseTimer_Configuration(): Timer_Configuration {
  return {
    allowsOverrun: false,
    countdown: undefined,
    countdownToTime: undefined,
    elapsedTime: undefined,
  };
}

export const Timer_Configuration = {
  encode(
    message: Timer_Configuration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.allowsOverrun === true) {
      writer.uint32(32).bool(message.allowsOverrun);
    }
    if (message.countdown !== undefined) {
      Timer_Configuration_TimerTypeCountdown.encode(
        message.countdown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.countdownToTime !== undefined) {
      Timer_Configuration_TimerTypeCountdownToTime.encode(
        message.countdownToTime,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.elapsedTime !== undefined) {
      Timer_Configuration_TimerTypeElapsedTime.encode(
        message.elapsedTime,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timer_Configuration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer_Configuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 32) {
            break;
          }

          message.allowsOverrun = reader.bool();
          continue;
        case 1:
          if (tag != 10) {
            break;
          }

          message.countdown = Timer_Configuration_TimerTypeCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.countdownToTime =
            Timer_Configuration_TimerTypeCountdownToTime.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.elapsedTime = Timer_Configuration_TimerTypeElapsedTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer_Configuration {
    return {
      allowsOverrun: isSet(object.allowsOverrun)
        ? Boolean(object.allowsOverrun)
        : false,
      countdown: isSet(object.countdown)
        ? Timer_Configuration_TimerTypeCountdown.fromJSON(object.countdown)
        : undefined,
      countdownToTime: isSet(object.countdownToTime)
        ? Timer_Configuration_TimerTypeCountdownToTime.fromJSON(
            object.countdownToTime,
          )
        : undefined,
      elapsedTime: isSet(object.elapsedTime)
        ? Timer_Configuration_TimerTypeElapsedTime.fromJSON(object.elapsedTime)
        : undefined,
    };
  },

  toJSON(message: Timer_Configuration): unknown {
    const obj: any = {};
    message.allowsOverrun !== undefined &&
      (obj.allowsOverrun = message.allowsOverrun);
    message.countdown !== undefined &&
      (obj.countdown = message.countdown
        ? Timer_Configuration_TimerTypeCountdown.toJSON(message.countdown)
        : undefined);
    message.countdownToTime !== undefined &&
      (obj.countdownToTime = message.countdownToTime
        ? Timer_Configuration_TimerTypeCountdownToTime.toJSON(
            message.countdownToTime,
          )
        : undefined);
    message.elapsedTime !== undefined &&
      (obj.elapsedTime = message.elapsedTime
        ? Timer_Configuration_TimerTypeElapsedTime.toJSON(message.elapsedTime)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Timer_Configuration>, I>>(
    base?: I,
  ): Timer_Configuration {
    return Timer_Configuration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Timer_Configuration>, I>>(
    object: I,
  ): Timer_Configuration {
    const message = createBaseTimer_Configuration();
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.countdown =
      object.countdown !== undefined && object.countdown !== null
        ? Timer_Configuration_TimerTypeCountdown.fromPartial(object.countdown)
        : undefined;
    message.countdownToTime =
      object.countdownToTime !== undefined && object.countdownToTime !== null
        ? Timer_Configuration_TimerTypeCountdownToTime.fromPartial(
            object.countdownToTime,
          )
        : undefined;
    message.elapsedTime =
      object.elapsedTime !== undefined && object.elapsedTime !== null
        ? Timer_Configuration_TimerTypeElapsedTime.fromPartial(
            object.elapsedTime,
          )
        : undefined;
    return message;
  },
};

function createBaseTimer_Configuration_TimerTypeCountdown(): Timer_Configuration_TimerTypeCountdown {
  return { duration: 0 };
}

export const Timer_Configuration_TimerTypeCountdown = {
  encode(
    message: Timer_Configuration_TimerTypeCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(9).double(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Timer_Configuration_TimerTypeCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer_Configuration_TimerTypeCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.duration = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer_Configuration_TimerTypeCountdown {
    return { duration: isSet(object.duration) ? Number(object.duration) : 0 };
  },

  toJSON(message: Timer_Configuration_TimerTypeCountdown): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Timer_Configuration_TimerTypeCountdown>, I>,
  >(base?: I): Timer_Configuration_TimerTypeCountdown {
    return Timer_Configuration_TimerTypeCountdown.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Timer_Configuration_TimerTypeCountdown>, I>,
  >(object: I): Timer_Configuration_TimerTypeCountdown {
    const message = createBaseTimer_Configuration_TimerTypeCountdown();
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseTimer_Configuration_TimerTypeCountdownToTime(): Timer_Configuration_TimerTypeCountdownToTime {
  return { timeOfDay: 0, period: 0 };
}

export const Timer_Configuration_TimerTypeCountdownToTime = {
  encode(
    message: Timer_Configuration_TimerTypeCountdownToTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timeOfDay !== 0) {
      writer.uint32(9).double(message.timeOfDay);
    }
    if (message.period !== 0) {
      writer.uint32(16).int32(message.period);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Timer_Configuration_TimerTypeCountdownToTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer_Configuration_TimerTypeCountdownToTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.timeOfDay = reader.double();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.period = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer_Configuration_TimerTypeCountdownToTime {
    return {
      timeOfDay: isSet(object.timeOfDay) ? Number(object.timeOfDay) : 0,
      period: isSet(object.period)
        ? timer_Configuration_TimerTypeCountdownToTime_TimePeriodFromJSON(
            object.period,
          )
        : 0,
    };
  },

  toJSON(message: Timer_Configuration_TimerTypeCountdownToTime): unknown {
    const obj: any = {};
    message.timeOfDay !== undefined && (obj.timeOfDay = message.timeOfDay);
    message.period !== undefined &&
      (obj.period =
        timer_Configuration_TimerTypeCountdownToTime_TimePeriodToJSON(
          message.period,
        ));
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Timer_Configuration_TimerTypeCountdownToTime>,
      I
    >,
  >(base?: I): Timer_Configuration_TimerTypeCountdownToTime {
    return Timer_Configuration_TimerTypeCountdownToTime.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<Timer_Configuration_TimerTypeCountdownToTime>,
      I
    >,
  >(object: I): Timer_Configuration_TimerTypeCountdownToTime {
    const message = createBaseTimer_Configuration_TimerTypeCountdownToTime();
    message.timeOfDay = object.timeOfDay ?? 0;
    message.period = object.period ?? 0;
    return message;
  },
};

function createBaseTimer_Configuration_TimerTypeElapsedTime(): Timer_Configuration_TimerTypeElapsedTime {
  return { startTime: 0, endTime: 0, hasEndTime: false };
}

export const Timer_Configuration_TimerTypeElapsedTime = {
  encode(
    message: Timer_Configuration_TimerTypeElapsedTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startTime !== 0) {
      writer.uint32(9).double(message.startTime);
    }
    if (message.endTime !== 0) {
      writer.uint32(17).double(message.endTime);
    }
    if (message.hasEndTime === true) {
      writer.uint32(24).bool(message.hasEndTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Timer_Configuration_TimerTypeElapsedTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimer_Configuration_TimerTypeElapsedTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.startTime = reader.double();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.endTime = reader.double();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hasEndTime = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timer_Configuration_TimerTypeElapsedTime {
    return {
      startTime: isSet(object.startTime) ? Number(object.startTime) : 0,
      endTime: isSet(object.endTime) ? Number(object.endTime) : 0,
      hasEndTime: isSet(object.hasEndTime) ? Boolean(object.hasEndTime) : false,
    };
  },

  toJSON(message: Timer_Configuration_TimerTypeElapsedTime): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.hasEndTime !== undefined && (obj.hasEndTime = message.hasEndTime);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Timer_Configuration_TimerTypeElapsedTime>, I>,
  >(base?: I): Timer_Configuration_TimerTypeElapsedTime {
    return Timer_Configuration_TimerTypeElapsedTime.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Timer_Configuration_TimerTypeElapsedTime>, I>,
  >(object: I): Timer_Configuration_TimerTypeElapsedTime {
    const message = createBaseTimer_Configuration_TimerTypeElapsedTime();
    message.startTime = object.startTime ?? 0;
    message.endTime = object.endTime ?? 0;
    message.hasEndTime = object.hasEndTime ?? false;
    return message;
  },
};

function createBaseTimersDocument(): TimersDocument {
  return { applicationInfo: undefined, clock: undefined, timers: [] };
}

export const TimersDocument = {
  encode(
    message: TimersDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.clock !== undefined) {
      Clock.encode(message.clock, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timers) {
      Timer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimersDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimersDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clock = Clock.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.timers.push(Timer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimersDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      clock: isSet(object.clock) ? Clock.fromJSON(object.clock) : undefined,
      timers: Array.isArray(object?.timers)
        ? object.timers.map((e: any) => Timer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TimersDocument): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    message.clock !== undefined &&
      (obj.clock = message.clock ? Clock.toJSON(message.clock) : undefined);
    if (message.timers) {
      obj.timers = message.timers.map((e) => (e ? Timer.toJSON(e) : undefined));
    } else {
      obj.timers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimersDocument>, I>>(
    base?: I,
  ): TimersDocument {
    return TimersDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TimersDocument>, I>>(
    object: I,
  ): TimersDocument {
    const message = createBaseTimersDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.clock =
      object.clock !== undefined && object.clock !== null
        ? Clock.fromPartial(object.clock)
        : undefined;
    message.timers = object.timers?.map((e) => Timer.fromPartial(e)) || [];
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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
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
