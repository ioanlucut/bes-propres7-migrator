/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface PlaybackMarker {
  create?: PlaybackMarker_CreateMarker | undefined;
}

export interface PlaybackMarker_CreateMarker {
  location: PlaybackMarker_CreateMarker_Location;
}

export enum PlaybackMarker_CreateMarker_Location {
  LOCATION_INSPECTOR = 0,
  LOCATION_SIDEBAR = 1,
  UNRECOGNIZED = -1,
}

export function playbackMarker_CreateMarker_LocationFromJSON(
  object: any,
): PlaybackMarker_CreateMarker_Location {
  switch (object) {
    case 0:
    case 'LOCATION_INSPECTOR':
      return PlaybackMarker_CreateMarker_Location.LOCATION_INSPECTOR;
    case 1:
    case 'LOCATION_SIDEBAR':
      return PlaybackMarker_CreateMarker_Location.LOCATION_SIDEBAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PlaybackMarker_CreateMarker_Location.UNRECOGNIZED;
  }
}

export function playbackMarker_CreateMarker_LocationToJSON(
  object: PlaybackMarker_CreateMarker_Location,
): string {
  switch (object) {
    case PlaybackMarker_CreateMarker_Location.LOCATION_INSPECTOR:
      return 'LOCATION_INSPECTOR';
    case PlaybackMarker_CreateMarker_Location.LOCATION_SIDEBAR:
      return 'LOCATION_SIDEBAR';
    case PlaybackMarker_CreateMarker_Location.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBasePlaybackMarker(): PlaybackMarker {
  return { create: undefined };
}

export const PlaybackMarker = {
  encode(
    message: PlaybackMarker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.create !== undefined) {
      PlaybackMarker_CreateMarker.encode(
        message.create,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaybackMarker {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaybackMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = PlaybackMarker_CreateMarker.decode(
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

  fromJSON(object: any): PlaybackMarker {
    return {
      create: isSet(object.create)
        ? PlaybackMarker_CreateMarker.fromJSON(object.create)
        : undefined,
    };
  },

  toJSON(message: PlaybackMarker): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = PlaybackMarker_CreateMarker.toJSON(message.create);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaybackMarker>, I>>(
    base?: I,
  ): PlaybackMarker {
    return PlaybackMarker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaybackMarker>, I>>(
    object: I,
  ): PlaybackMarker {
    const message = createBasePlaybackMarker();
    message.create =
      object.create !== undefined && object.create !== null
        ? PlaybackMarker_CreateMarker.fromPartial(object.create)
        : undefined;
    return message;
  },
};

function createBasePlaybackMarker_CreateMarker(): PlaybackMarker_CreateMarker {
  return { location: 0 };
}

export const PlaybackMarker_CreateMarker = {
  encode(
    message: PlaybackMarker_CreateMarker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlaybackMarker_CreateMarker {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaybackMarker_CreateMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaybackMarker_CreateMarker {
    return {
      location: isSet(object.location)
        ? playbackMarker_CreateMarker_LocationFromJSON(object.location)
        : 0,
    };
  },

  toJSON(message: PlaybackMarker_CreateMarker): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = playbackMarker_CreateMarker_LocationToJSON(
        message.location,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaybackMarker_CreateMarker>, I>>(
    base?: I,
  ): PlaybackMarker_CreateMarker {
    return PlaybackMarker_CreateMarker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaybackMarker_CreateMarker>, I>>(
    object: I,
  ): PlaybackMarker_CreateMarker {
    const message = createBasePlaybackMarker_CreateMarker();
    message.location = object.location ?? 0;
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
