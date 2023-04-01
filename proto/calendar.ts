/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { CollectionElementType, UUID } from './basicTypes';
import { Timestamp } from './rvtimestamp';

export const protobufPackage = 'rv.data';

export interface Calendar {
  events: Calendar_Event[];
  active: boolean;
}

export interface Calendar_Event {
  uuid: UUID | undefined;
  name: string;
  description: string;
  date: Timestamp | undefined;
  recurrenceDays: Calendar_Event_DayOfWeek[];
  recurrenceLimitDate: Timestamp | undefined;
  recurrenceExcludedDates: Timestamp[];
  action: Calendar_Event_Action | undefined;
}

export enum Calendar_Event_DayOfWeek {
  DAY_OF_WEEK_UNKNOWN = 0,
  DAY_OF_WEEK_SUNDAY = 1,
  DAY_OF_WEEK_MONDAY = 2,
  DAY_OF_WEEK_TUESDAY = 3,
  DAY_OF_WEEK_WEDNESDAY = 4,
  DAY_OF_WEEK_THURSDAY = 5,
  DAY_OF_WEEK_FRIDAY = 6,
  DAY_OF_WEEK_SATURDAY = 7,
  UNRECOGNIZED = -1,
}

export function calendar_Event_DayOfWeekFromJSON(
  object: any,
): Calendar_Event_DayOfWeek {
  switch (object) {
    case 0:
    case 'DAY_OF_WEEK_UNKNOWN':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_UNKNOWN;
    case 1:
    case 'DAY_OF_WEEK_SUNDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_SUNDAY;
    case 2:
    case 'DAY_OF_WEEK_MONDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_MONDAY;
    case 3:
    case 'DAY_OF_WEEK_TUESDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_TUESDAY;
    case 4:
    case 'DAY_OF_WEEK_WEDNESDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_WEDNESDAY;
    case 5:
    case 'DAY_OF_WEEK_THURSDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_THURSDAY;
    case 6:
    case 'DAY_OF_WEEK_FRIDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_FRIDAY;
    case 7:
    case 'DAY_OF_WEEK_SATURDAY':
      return Calendar_Event_DayOfWeek.DAY_OF_WEEK_SATURDAY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Calendar_Event_DayOfWeek.UNRECOGNIZED;
  }
}

export function calendar_Event_DayOfWeekToJSON(
  object: Calendar_Event_DayOfWeek,
): string {
  switch (object) {
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_UNKNOWN:
      return 'DAY_OF_WEEK_UNKNOWN';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_SUNDAY:
      return 'DAY_OF_WEEK_SUNDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_MONDAY:
      return 'DAY_OF_WEEK_MONDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_TUESDAY:
      return 'DAY_OF_WEEK_TUESDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_WEDNESDAY:
      return 'DAY_OF_WEEK_WEDNESDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_THURSDAY:
      return 'DAY_OF_WEEK_THURSDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_FRIDAY:
      return 'DAY_OF_WEEK_FRIDAY';
    case Calendar_Event_DayOfWeek.DAY_OF_WEEK_SATURDAY:
      return 'DAY_OF_WEEK_SATURDAY';
    case Calendar_Event_DayOfWeek.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Calendar_Event_Action {
  type: number;
  uuid: UUID | undefined;
  playlist?: Calendar_Event_Action_Playlist | undefined;
  macro?: Calendar_Event_Action_Macro | undefined;
}

export interface Calendar_Event_Action_Playlist {
  playlistUuid: UUID | undefined;
  playlistItemUuid: UUID | undefined;
}

export interface Calendar_Event_Action_Macro {
  identification: CollectionElementType | undefined;
}

function createBaseCalendar(): Calendar {
  return { events: [], active: false };
}

export const Calendar = {
  encode(
    message: Calendar,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.events) {
      Calendar_Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Calendar {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.events.push(Calendar_Event.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Calendar {
    return {
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Calendar_Event.fromJSON(e))
        : [],
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: Calendar): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Calendar_Event.toJSON(e) : undefined,
      );
    } else {
      obj.events = [];
    }
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  create<I extends Exact<DeepPartial<Calendar>, I>>(base?: I): Calendar {
    return Calendar.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Calendar>, I>>(object: I): Calendar {
    const message = createBaseCalendar();
    message.events =
      object.events?.map((e) => Calendar_Event.fromPartial(e)) || [];
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseCalendar_Event(): Calendar_Event {
  return {
    uuid: undefined,
    name: '',
    description: '',
    date: undefined,
    recurrenceDays: [],
    recurrenceLimitDate: undefined,
    recurrenceExcludedDates: [],
    action: undefined,
  };
}

export const Calendar_Event = {
  encode(
    message: Calendar_Event,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description);
    }
    if (message.date !== undefined) {
      Timestamp.encode(message.date, writer.uint32(34).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.recurrenceDays) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.recurrenceLimitDate !== undefined) {
      Timestamp.encode(
        message.recurrenceLimitDate,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    for (const v of message.recurrenceExcludedDates) {
      Timestamp.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Calendar_Event_Action.encode(
        message.action,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Calendar_Event {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendar_Event();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.date = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag == 40) {
            message.recurrenceDays.push(reader.int32() as any);
            continue;
          }

          if (tag == 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.recurrenceDays.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag != 50) {
            break;
          }

          message.recurrenceLimitDate = Timestamp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.recurrenceExcludedDates.push(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.action = Calendar_Event_Action.decode(
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

  fromJSON(object: any): Calendar_Event {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      date: isSet(object.date) ? Timestamp.fromJSON(object.date) : undefined,
      recurrenceDays: Array.isArray(object?.recurrenceDays)
        ? object.recurrenceDays.map((e: any) =>
            calendar_Event_DayOfWeekFromJSON(e),
          )
        : [],
      recurrenceLimitDate: isSet(object.recurrenceLimitDate)
        ? Timestamp.fromJSON(object.recurrenceLimitDate)
        : undefined,
      recurrenceExcludedDates: Array.isArray(object?.recurrenceExcludedDates)
        ? object.recurrenceExcludedDates.map((e: any) => Timestamp.fromJSON(e))
        : [],
      action: isSet(object.action)
        ? Calendar_Event_Action.fromJSON(object.action)
        : undefined,
    };
  },

  toJSON(message: Calendar_Event): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.date !== undefined &&
      (obj.date = message.date ? Timestamp.toJSON(message.date) : undefined);
    if (message.recurrenceDays) {
      obj.recurrenceDays = message.recurrenceDays.map((e) =>
        calendar_Event_DayOfWeekToJSON(e),
      );
    } else {
      obj.recurrenceDays = [];
    }
    message.recurrenceLimitDate !== undefined &&
      (obj.recurrenceLimitDate = message.recurrenceLimitDate
        ? Timestamp.toJSON(message.recurrenceLimitDate)
        : undefined);
    if (message.recurrenceExcludedDates) {
      obj.recurrenceExcludedDates = message.recurrenceExcludedDates.map((e) =>
        e ? Timestamp.toJSON(e) : undefined,
      );
    } else {
      obj.recurrenceExcludedDates = [];
    }
    message.action !== undefined &&
      (obj.action = message.action
        ? Calendar_Event_Action.toJSON(message.action)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Calendar_Event>, I>>(
    base?: I,
  ): Calendar_Event {
    return Calendar_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Calendar_Event>, I>>(
    object: I,
  ): Calendar_Event {
    const message = createBaseCalendar_Event();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.date =
      object.date !== undefined && object.date !== null
        ? Timestamp.fromPartial(object.date)
        : undefined;
    message.recurrenceDays = object.recurrenceDays?.map((e) => e) || [];
    message.recurrenceLimitDate =
      object.recurrenceLimitDate !== undefined &&
      object.recurrenceLimitDate !== null
        ? Timestamp.fromPartial(object.recurrenceLimitDate)
        : undefined;
    message.recurrenceExcludedDates =
      object.recurrenceExcludedDates?.map((e) => Timestamp.fromPartial(e)) ||
      [];
    message.action =
      object.action !== undefined && object.action !== null
        ? Calendar_Event_Action.fromPartial(object.action)
        : undefined;
    return message;
  },
};

function createBaseCalendar_Event_Action(): Calendar_Event_Action {
  return { type: 0, uuid: undefined, playlist: undefined, macro: undefined };
}

export const Calendar_Event_Action = {
  encode(
    message: Calendar_Event_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.playlist !== undefined) {
      Calendar_Event_Action_Playlist.encode(
        message.playlist,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.macro !== undefined) {
      Calendar_Event_Action_Macro.encode(
        message.macro,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Calendar_Event_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendar_Event_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.playlist = Calendar_Event_Action_Playlist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.macro = Calendar_Event_Action_Macro.decode(
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

  fromJSON(object: any): Calendar_Event_Action {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      playlist: isSet(object.playlist)
        ? Calendar_Event_Action_Playlist.fromJSON(object.playlist)
        : undefined,
      macro: isSet(object.macro)
        ? Calendar_Event_Action_Macro.fromJSON(object.macro)
        : undefined,
    };
  },

  toJSON(message: Calendar_Event_Action): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.playlist !== undefined &&
      (obj.playlist = message.playlist
        ? Calendar_Event_Action_Playlist.toJSON(message.playlist)
        : undefined);
    message.macro !== undefined &&
      (obj.macro = message.macro
        ? Calendar_Event_Action_Macro.toJSON(message.macro)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Calendar_Event_Action>, I>>(
    base?: I,
  ): Calendar_Event_Action {
    return Calendar_Event_Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Calendar_Event_Action>, I>>(
    object: I,
  ): Calendar_Event_Action {
    const message = createBaseCalendar_Event_Action();
    message.type = object.type ?? 0;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? Calendar_Event_Action_Playlist.fromPartial(object.playlist)
        : undefined;
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? Calendar_Event_Action_Macro.fromPartial(object.macro)
        : undefined;
    return message;
  },
};

function createBaseCalendar_Event_Action_Playlist(): Calendar_Event_Action_Playlist {
  return { playlistUuid: undefined, playlistItemUuid: undefined };
}

export const Calendar_Event_Action_Playlist = {
  encode(
    message: Calendar_Event_Action_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlistUuid !== undefined) {
      UUID.encode(message.playlistUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.playlistItemUuid !== undefined) {
      UUID.encode(message.playlistItemUuid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Calendar_Event_Action_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendar_Event_Action_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playlistUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playlistItemUuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Calendar_Event_Action_Playlist {
    return {
      playlistUuid: isSet(object.playlistUuid)
        ? UUID.fromJSON(object.playlistUuid)
        : undefined,
      playlistItemUuid: isSet(object.playlistItemUuid)
        ? UUID.fromJSON(object.playlistItemUuid)
        : undefined,
    };
  },

  toJSON(message: Calendar_Event_Action_Playlist): unknown {
    const obj: any = {};
    message.playlistUuid !== undefined &&
      (obj.playlistUuid = message.playlistUuid
        ? UUID.toJSON(message.playlistUuid)
        : undefined);
    message.playlistItemUuid !== undefined &&
      (obj.playlistItemUuid = message.playlistItemUuid
        ? UUID.toJSON(message.playlistItemUuid)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Calendar_Event_Action_Playlist>, I>>(
    base?: I,
  ): Calendar_Event_Action_Playlist {
    return Calendar_Event_Action_Playlist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Calendar_Event_Action_Playlist>, I>>(
    object: I,
  ): Calendar_Event_Action_Playlist {
    const message = createBaseCalendar_Event_Action_Playlist();
    message.playlistUuid =
      object.playlistUuid !== undefined && object.playlistUuid !== null
        ? UUID.fromPartial(object.playlistUuid)
        : undefined;
    message.playlistItemUuid =
      object.playlistItemUuid !== undefined && object.playlistItemUuid !== null
        ? UUID.fromPartial(object.playlistItemUuid)
        : undefined;
    return message;
  },
};

function createBaseCalendar_Event_Action_Macro(): Calendar_Event_Action_Macro {
  return { identification: undefined };
}

export const Calendar_Event_Action_Macro = {
  encode(
    message: Calendar_Event_Action_Macro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(
        message.identification,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Calendar_Event_Action_Macro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalendar_Event_Action_Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identification = CollectionElementType.decode(
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

  fromJSON(object: any): Calendar_Event_Action_Macro {
    return {
      identification: isSet(object.identification)
        ? CollectionElementType.fromJSON(object.identification)
        : undefined,
    };
  },

  toJSON(message: Calendar_Event_Action_Macro): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification
        ? CollectionElementType.toJSON(message.identification)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Calendar_Event_Action_Macro>, I>>(
    base?: I,
  ): Calendar_Event_Action_Macro {
    return Calendar_Event_Action_Macro.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Calendar_Event_Action_Macro>, I>>(
    object: I,
  ): Calendar_Event_Action_Macro {
    const message = createBaseCalendar_Event_Action_Macro();
    message.identification =
      object.identification !== undefined && object.identification !== null
        ? CollectionElementType.fromPartial(object.identification)
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
