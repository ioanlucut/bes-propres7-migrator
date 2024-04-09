/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Action,
  Action_ContentDestination,
  action_ContentDestinationFromJSON,
  action_ContentDestinationToJSON,
} from "./action";
import { Cue } from "./cue";
import { Presentation } from "./presentation";
import { UUID } from "./uuid";

export const protobufPackage = "rv.data";

export interface TriggerSource {
  libraryLocation?: TriggerSource_Library | undefined;
  playlistLocation?: TriggerSource_Playlist | undefined;
  mediaPlaylistLocation?: TriggerSource_Playlist | undefined;
  audioPlaylistLocation?: TriggerSource_Playlist | undefined;
}

export interface TriggerSource_Library {
  path: string;
  presentationName: string;
}

export interface TriggerSource_Playlist {
  identifier: UUID | undefined;
  itemIdentifier: UUID | undefined;
}

export interface TimedPlayback {
  sequence: TimedPlayback_Sequence | undefined;
  timing: TimedPlayback_Timing | undefined;
}

export interface TimedPlayback_Sequence {
  sequence: TimedPlayback_Sequence_SequenceItem[];
  contentDestination: Action_ContentDestination;
  presentation: Presentation | undefined;
}

export interface TimedPlayback_Sequence_SequenceItem {
  identifier: UUID | undefined;
  time: number;
  triggerSource: TriggerSource | undefined;
  contentDestination: Action_ContentDestination;
  endTime: number;
  cue?: Cue | undefined;
  action?: Action | undefined;
}

export interface TimedPlayback_Timing {
  layerTransport?: TimedPlayback_Timing_LayerTransport | undefined;
  smpteTimecode?: TimedPlayback_Timing_SMPTETimecode | undefined;
  internal?: TimedPlayback_Timing_Internal | undefined;
}

export interface TimedPlayback_Timing_LayerTransport {
  layer: number;
}

export interface TimedPlayback_Timing_SMPTETimecode {
  deviceIdentifier: string;
  channel: number;
  format: TimedPlayback_Timing_SMPTETimecode_Format;
  offset: number;
}

export enum TimedPlayback_Timing_SMPTETimecode_Format {
  FORMAT_24_FPS = 0,
  FORMAT_25_FPS = 1,
  FORMAT_29_97_FPS = 2,
  FORMAT_30_FPS = 3,
  UNRECOGNIZED = -1,
}

export function timedPlayback_Timing_SMPTETimecode_FormatFromJSON(
  object: any,
): TimedPlayback_Timing_SMPTETimecode_Format {
  switch (object) {
    case 0:
    case "FORMAT_24_FPS":
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_24_FPS;
    case 1:
    case "FORMAT_25_FPS":
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_25_FPS;
    case 2:
    case "FORMAT_29_97_FPS":
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_29_97_FPS;
    case 3:
    case "FORMAT_30_FPS":
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_30_FPS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimedPlayback_Timing_SMPTETimecode_Format.UNRECOGNIZED;
  }
}

export function timedPlayback_Timing_SMPTETimecode_FormatToJSON(
  object: TimedPlayback_Timing_SMPTETimecode_Format,
): string {
  switch (object) {
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_24_FPS:
      return "FORMAT_24_FPS";
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_25_FPS:
      return "FORMAT_25_FPS";
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_29_97_FPS:
      return "FORMAT_29_97_FPS";
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_30_FPS:
      return "FORMAT_30_FPS";
    case TimedPlayback_Timing_SMPTETimecode_Format.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TimedPlayback_Timing_Internal {
  duration: number;
  shouldLoop: boolean;
}

export interface TimedPlayback_Update {
  play?: TimedPlayback_Update_Play | undefined;
  record?: TimedPlayback_Update_Record | undefined;
  pause?: TimedPlayback_Update_Pause | undefined;
  reset?: TimedPlayback_Update_Reset | undefined;
  jumpToTime?: TimedPlayback_Update_JumpToTime | undefined;
  startScrub?: TimedPlayback_Update_StartScrub | undefined;
  endScrub?: TimedPlayback_Update_EndScrub | undefined;
  duration?: TimedPlayback_Update_Duration | undefined;
  loop?: TimedPlayback_Update_Loop | undefined;
  updateSequence?: TimedPlayback_Sequence | undefined;
  monitorSource?: TimedPlayback_Update_MonitorSource | undefined;
}

export interface TimedPlayback_Update_Play {
}

export interface TimedPlayback_Update_Record {
  isRecording: boolean;
}

export interface TimedPlayback_Update_Pause {
}

export interface TimedPlayback_Update_Reset {
}

export interface TimedPlayback_Update_JumpToTime {
  time: number;
}

export interface TimedPlayback_Update_StartScrub {
  time: number;
}

export interface TimedPlayback_Update_EndScrub {
  time: number;
}

export interface TimedPlayback_Update_Duration {
  duration: number;
}

export interface TimedPlayback_Update_Loop {
  loop: boolean;
}

export interface TimedPlayback_Update_MonitorSource {
  enable: boolean;
}

function createBaseTriggerSource(): TriggerSource {
  return {
    libraryLocation: undefined,
    playlistLocation: undefined,
    mediaPlaylistLocation: undefined,
    audioPlaylistLocation: undefined,
  };
}

export const TriggerSource = {
  encode(message: TriggerSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.libraryLocation !== undefined) {
      TriggerSource_Library.encode(message.libraryLocation, writer.uint32(10).fork()).ldelim();
    }
    if (message.playlistLocation !== undefined) {
      TriggerSource_Playlist.encode(message.playlistLocation, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaPlaylistLocation !== undefined) {
      TriggerSource_Playlist.encode(message.mediaPlaylistLocation, writer.uint32(26).fork()).ldelim();
    }
    if (message.audioPlaylistLocation !== undefined) {
      TriggerSource_Playlist.encode(message.audioPlaylistLocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraryLocation = TriggerSource_Library.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlistLocation = TriggerSource_Playlist.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mediaPlaylistLocation = TriggerSource_Playlist.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audioPlaylistLocation = TriggerSource_Playlist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerSource {
    return {
      libraryLocation: isSet(object.libraryLocation)
        ? TriggerSource_Library.fromJSON(object.libraryLocation)
        : undefined,
      playlistLocation: isSet(object.playlistLocation)
        ? TriggerSource_Playlist.fromJSON(object.playlistLocation)
        : undefined,
      mediaPlaylistLocation: isSet(object.mediaPlaylistLocation)
        ? TriggerSource_Playlist.fromJSON(object.mediaPlaylistLocation)
        : undefined,
      audioPlaylistLocation: isSet(object.audioPlaylistLocation)
        ? TriggerSource_Playlist.fromJSON(object.audioPlaylistLocation)
        : undefined,
    };
  },

  toJSON(message: TriggerSource): unknown {
    const obj: any = {};
    if (message.libraryLocation !== undefined) {
      obj.libraryLocation = TriggerSource_Library.toJSON(message.libraryLocation);
    }
    if (message.playlistLocation !== undefined) {
      obj.playlistLocation = TriggerSource_Playlist.toJSON(message.playlistLocation);
    }
    if (message.mediaPlaylistLocation !== undefined) {
      obj.mediaPlaylistLocation = TriggerSource_Playlist.toJSON(message.mediaPlaylistLocation);
    }
    if (message.audioPlaylistLocation !== undefined) {
      obj.audioPlaylistLocation = TriggerSource_Playlist.toJSON(message.audioPlaylistLocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerSource>, I>>(base?: I): TriggerSource {
    return TriggerSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource>, I>>(object: I): TriggerSource {
    const message = createBaseTriggerSource();
    message.libraryLocation = (object.libraryLocation !== undefined && object.libraryLocation !== null)
      ? TriggerSource_Library.fromPartial(object.libraryLocation)
      : undefined;
    message.playlistLocation = (object.playlistLocation !== undefined && object.playlistLocation !== null)
      ? TriggerSource_Playlist.fromPartial(object.playlistLocation)
      : undefined;
    message.mediaPlaylistLocation =
      (object.mediaPlaylistLocation !== undefined && object.mediaPlaylistLocation !== null)
        ? TriggerSource_Playlist.fromPartial(object.mediaPlaylistLocation)
        : undefined;
    message.audioPlaylistLocation =
      (object.audioPlaylistLocation !== undefined && object.audioPlaylistLocation !== null)
        ? TriggerSource_Playlist.fromPartial(object.audioPlaylistLocation)
        : undefined;
    return message;
  },
};

function createBaseTriggerSource_Library(): TriggerSource_Library {
  return { path: "", presentationName: "" };
}

export const TriggerSource_Library = {
  encode(message: TriggerSource_Library, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.presentationName !== "") {
      writer.uint32(18).string(message.presentationName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerSource_Library {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerSource_Library();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presentationName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerSource_Library {
    return {
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      presentationName: isSet(object.presentationName) ? globalThis.String(object.presentationName) : "",
    };
  },

  toJSON(message: TriggerSource_Library): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.presentationName !== "") {
      obj.presentationName = message.presentationName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerSource_Library>, I>>(base?: I): TriggerSource_Library {
    return TriggerSource_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource_Library>, I>>(object: I): TriggerSource_Library {
    const message = createBaseTriggerSource_Library();
    message.path = object.path ?? "";
    message.presentationName = object.presentationName ?? "";
    return message;
  },
};

function createBaseTriggerSource_Playlist(): TriggerSource_Playlist {
  return { identifier: undefined, itemIdentifier: undefined };
}

export const TriggerSource_Playlist = {
  encode(message: TriggerSource_Playlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== undefined) {
      UUID.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    if (message.itemIdentifier !== undefined) {
      UUID.encode(message.itemIdentifier, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerSource_Playlist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerSource_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.itemIdentifier = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerSource_Playlist {
    return {
      identifier: isSet(object.identifier) ? UUID.fromJSON(object.identifier) : undefined,
      itemIdentifier: isSet(object.itemIdentifier) ? UUID.fromJSON(object.itemIdentifier) : undefined,
    };
  },

  toJSON(message: TriggerSource_Playlist): unknown {
    const obj: any = {};
    if (message.identifier !== undefined) {
      obj.identifier = UUID.toJSON(message.identifier);
    }
    if (message.itemIdentifier !== undefined) {
      obj.itemIdentifier = UUID.toJSON(message.itemIdentifier);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerSource_Playlist>, I>>(base?: I): TriggerSource_Playlist {
    return TriggerSource_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource_Playlist>, I>>(object: I): TriggerSource_Playlist {
    const message = createBaseTriggerSource_Playlist();
    message.identifier = (object.identifier !== undefined && object.identifier !== null)
      ? UUID.fromPartial(object.identifier)
      : undefined;
    message.itemIdentifier = (object.itemIdentifier !== undefined && object.itemIdentifier !== null)
      ? UUID.fromPartial(object.itemIdentifier)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback(): TimedPlayback {
  return { sequence: undefined, timing: undefined };
}

export const TimedPlayback = {
  encode(message: TimedPlayback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== undefined) {
      TimedPlayback_Sequence.encode(message.sequence, writer.uint32(10).fork()).ldelim();
    }
    if (message.timing !== undefined) {
      TimedPlayback_Timing.encode(message.timing, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequence = TimedPlayback_Sequence.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timing = TimedPlayback_Timing.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback {
    return {
      sequence: isSet(object.sequence) ? TimedPlayback_Sequence.fromJSON(object.sequence) : undefined,
      timing: isSet(object.timing) ? TimedPlayback_Timing.fromJSON(object.timing) : undefined,
    };
  },

  toJSON(message: TimedPlayback): unknown {
    const obj: any = {};
    if (message.sequence !== undefined) {
      obj.sequence = TimedPlayback_Sequence.toJSON(message.sequence);
    }
    if (message.timing !== undefined) {
      obj.timing = TimedPlayback_Timing.toJSON(message.timing);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback>, I>>(base?: I): TimedPlayback {
    return TimedPlayback.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback>, I>>(object: I): TimedPlayback {
    const message = createBaseTimedPlayback();
    message.sequence = (object.sequence !== undefined && object.sequence !== null)
      ? TimedPlayback_Sequence.fromPartial(object.sequence)
      : undefined;
    message.timing = (object.timing !== undefined && object.timing !== null)
      ? TimedPlayback_Timing.fromPartial(object.timing)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Sequence(): TimedPlayback_Sequence {
  return { sequence: [], contentDestination: 0, presentation: undefined };
}

export const TimedPlayback_Sequence = {
  encode(message: TimedPlayback_Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sequence) {
      TimedPlayback_Sequence_SequenceItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(16).int32(message.contentDestination);
    }
    if (message.presentation !== undefined) {
      Presentation.encode(message.presentation, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Sequence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Sequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequence.push(TimedPlayback_Sequence_SequenceItem.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.presentation = Presentation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Sequence {
    return {
      sequence: globalThis.Array.isArray(object?.sequence)
        ? object.sequence.map((e: any) => TimedPlayback_Sequence_SequenceItem.fromJSON(e))
        : [],
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      presentation: isSet(object.presentation) ? Presentation.fromJSON(object.presentation) : undefined,
    };
  },

  toJSON(message: TimedPlayback_Sequence): unknown {
    const obj: any = {};
    if (message.sequence?.length) {
      obj.sequence = message.sequence.map((e) => TimedPlayback_Sequence_SequenceItem.toJSON(e));
    }
    if (message.contentDestination !== 0) {
      obj.contentDestination = action_ContentDestinationToJSON(message.contentDestination);
    }
    if (message.presentation !== undefined) {
      obj.presentation = Presentation.toJSON(message.presentation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Sequence>, I>>(base?: I): TimedPlayback_Sequence {
    return TimedPlayback_Sequence.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Sequence>, I>>(object: I): TimedPlayback_Sequence {
    const message = createBaseTimedPlayback_Sequence();
    message.sequence = object.sequence?.map((e) => TimedPlayback_Sequence_SequenceItem.fromPartial(e)) || [];
    message.contentDestination = object.contentDestination ?? 0;
    message.presentation = (object.presentation !== undefined && object.presentation !== null)
      ? Presentation.fromPartial(object.presentation)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Sequence_SequenceItem(): TimedPlayback_Sequence_SequenceItem {
  return {
    identifier: undefined,
    time: 0,
    triggerSource: undefined,
    contentDestination: 0,
    endTime: 0,
    cue: undefined,
    action: undefined,
  };
}

export const TimedPlayback_Sequence_SequenceItem = {
  encode(message: TimedPlayback_Sequence_SequenceItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== undefined) {
      UUID.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.triggerSource !== undefined) {
      TriggerSource.encode(message.triggerSource, writer.uint32(26).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(32).int32(message.contentDestination);
    }
    if (message.endTime !== 0) {
      writer.uint32(57).double(message.endTime);
    }
    if (message.cue !== undefined) {
      Cue.encode(message.cue, writer.uint32(42).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Sequence_SequenceItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Sequence_SequenceItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.time = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.triggerSource = TriggerSource.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.endTime = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cue = Cue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Sequence_SequenceItem {
    return {
      identifier: isSet(object.identifier) ? UUID.fromJSON(object.identifier) : undefined,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
      triggerSource: isSet(object.triggerSource) ? TriggerSource.fromJSON(object.triggerSource) : undefined,
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      endTime: isSet(object.endTime) ? globalThis.Number(object.endTime) : 0,
      cue: isSet(object.cue) ? Cue.fromJSON(object.cue) : undefined,
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
    };
  },

  toJSON(message: TimedPlayback_Sequence_SequenceItem): unknown {
    const obj: any = {};
    if (message.identifier !== undefined) {
      obj.identifier = UUID.toJSON(message.identifier);
    }
    if (message.time !== 0) {
      obj.time = message.time;
    }
    if (message.triggerSource !== undefined) {
      obj.triggerSource = TriggerSource.toJSON(message.triggerSource);
    }
    if (message.contentDestination !== 0) {
      obj.contentDestination = action_ContentDestinationToJSON(message.contentDestination);
    }
    if (message.endTime !== 0) {
      obj.endTime = message.endTime;
    }
    if (message.cue !== undefined) {
      obj.cue = Cue.toJSON(message.cue);
    }
    if (message.action !== undefined) {
      obj.action = Action.toJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Sequence_SequenceItem>, I>>(
    base?: I,
  ): TimedPlayback_Sequence_SequenceItem {
    return TimedPlayback_Sequence_SequenceItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Sequence_SequenceItem>, I>>(
    object: I,
  ): TimedPlayback_Sequence_SequenceItem {
    const message = createBaseTimedPlayback_Sequence_SequenceItem();
    message.identifier = (object.identifier !== undefined && object.identifier !== null)
      ? UUID.fromPartial(object.identifier)
      : undefined;
    message.time = object.time ?? 0;
    message.triggerSource = (object.triggerSource !== undefined && object.triggerSource !== null)
      ? TriggerSource.fromPartial(object.triggerSource)
      : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    message.endTime = object.endTime ?? 0;
    message.cue = (object.cue !== undefined && object.cue !== null) ? Cue.fromPartial(object.cue) : undefined;
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Timing(): TimedPlayback_Timing {
  return { layerTransport: undefined, smpteTimecode: undefined, internal: undefined };
}

export const TimedPlayback_Timing = {
  encode(message: TimedPlayback_Timing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layerTransport !== undefined) {
      TimedPlayback_Timing_LayerTransport.encode(message.layerTransport, writer.uint32(10).fork()).ldelim();
    }
    if (message.smpteTimecode !== undefined) {
      TimedPlayback_Timing_SMPTETimecode.encode(message.smpteTimecode, writer.uint32(18).fork()).ldelim();
    }
    if (message.internal !== undefined) {
      TimedPlayback_Timing_Internal.encode(message.internal, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Timing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Timing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.layerTransport = TimedPlayback_Timing_LayerTransport.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.smpteTimecode = TimedPlayback_Timing_SMPTETimecode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.internal = TimedPlayback_Timing_Internal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Timing {
    return {
      layerTransport: isSet(object.layerTransport)
        ? TimedPlayback_Timing_LayerTransport.fromJSON(object.layerTransport)
        : undefined,
      smpteTimecode: isSet(object.smpteTimecode)
        ? TimedPlayback_Timing_SMPTETimecode.fromJSON(object.smpteTimecode)
        : undefined,
      internal: isSet(object.internal) ? TimedPlayback_Timing_Internal.fromJSON(object.internal) : undefined,
    };
  },

  toJSON(message: TimedPlayback_Timing): unknown {
    const obj: any = {};
    if (message.layerTransport !== undefined) {
      obj.layerTransport = TimedPlayback_Timing_LayerTransport.toJSON(message.layerTransport);
    }
    if (message.smpteTimecode !== undefined) {
      obj.smpteTimecode = TimedPlayback_Timing_SMPTETimecode.toJSON(message.smpteTimecode);
    }
    if (message.internal !== undefined) {
      obj.internal = TimedPlayback_Timing_Internal.toJSON(message.internal);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing>, I>>(base?: I): TimedPlayback_Timing {
    return TimedPlayback_Timing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Timing>, I>>(object: I): TimedPlayback_Timing {
    const message = createBaseTimedPlayback_Timing();
    message.layerTransport = (object.layerTransport !== undefined && object.layerTransport !== null)
      ? TimedPlayback_Timing_LayerTransport.fromPartial(object.layerTransport)
      : undefined;
    message.smpteTimecode = (object.smpteTimecode !== undefined && object.smpteTimecode !== null)
      ? TimedPlayback_Timing_SMPTETimecode.fromPartial(object.smpteTimecode)
      : undefined;
    message.internal = (object.internal !== undefined && object.internal !== null)
      ? TimedPlayback_Timing_Internal.fromPartial(object.internal)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Timing_LayerTransport(): TimedPlayback_Timing_LayerTransport {
  return { layer: 0 };
}

export const TimedPlayback_Timing_LayerTransport = {
  encode(message: TimedPlayback_Timing_LayerTransport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Timing_LayerTransport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Timing_LayerTransport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Timing_LayerTransport {
    return { layer: isSet(object.layer) ? globalThis.Number(object.layer) : 0 };
  },

  toJSON(message: TimedPlayback_Timing_LayerTransport): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = Math.round(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing_LayerTransport>, I>>(
    base?: I,
  ): TimedPlayback_Timing_LayerTransport {
    return TimedPlayback_Timing_LayerTransport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Timing_LayerTransport>, I>>(
    object: I,
  ): TimedPlayback_Timing_LayerTransport {
    const message = createBaseTimedPlayback_Timing_LayerTransport();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Timing_SMPTETimecode(): TimedPlayback_Timing_SMPTETimecode {
  return { deviceIdentifier: "", channel: 0, format: 0, offset: 0 };
}

export const TimedPlayback_Timing_SMPTETimecode = {
  encode(message: TimedPlayback_Timing_SMPTETimecode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceIdentifier !== "") {
      writer.uint32(10).string(message.deviceIdentifier);
    }
    if (message.channel !== 0) {
      writer.uint32(16).int32(message.channel);
    }
    if (message.format !== 0) {
      writer.uint32(24).int32(message.format);
    }
    if (message.offset !== 0) {
      writer.uint32(33).double(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Timing_SMPTETimecode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Timing_SMPTETimecode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.deviceIdentifier = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.channel = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.format = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.offset = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Timing_SMPTETimecode {
    return {
      deviceIdentifier: isSet(object.deviceIdentifier) ? globalThis.String(object.deviceIdentifier) : "",
      channel: isSet(object.channel) ? globalThis.Number(object.channel) : 0,
      format: isSet(object.format) ? timedPlayback_Timing_SMPTETimecode_FormatFromJSON(object.format) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: TimedPlayback_Timing_SMPTETimecode): unknown {
    const obj: any = {};
    if (message.deviceIdentifier !== "") {
      obj.deviceIdentifier = message.deviceIdentifier;
    }
    if (message.channel !== 0) {
      obj.channel = Math.round(message.channel);
    }
    if (message.format !== 0) {
      obj.format = timedPlayback_Timing_SMPTETimecode_FormatToJSON(message.format);
    }
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing_SMPTETimecode>, I>>(
    base?: I,
  ): TimedPlayback_Timing_SMPTETimecode {
    return TimedPlayback_Timing_SMPTETimecode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Timing_SMPTETimecode>, I>>(
    object: I,
  ): TimedPlayback_Timing_SMPTETimecode {
    const message = createBaseTimedPlayback_Timing_SMPTETimecode();
    message.deviceIdentifier = object.deviceIdentifier ?? "";
    message.channel = object.channel ?? 0;
    message.format = object.format ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Timing_Internal(): TimedPlayback_Timing_Internal {
  return { duration: 0, shouldLoop: false };
}

export const TimedPlayback_Timing_Internal = {
  encode(message: TimedPlayback_Timing_Internal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(9).double(message.duration);
    }
    if (message.shouldLoop !== false) {
      writer.uint32(16).bool(message.shouldLoop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Timing_Internal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Timing_Internal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.duration = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.shouldLoop = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Timing_Internal {
    return {
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      shouldLoop: isSet(object.shouldLoop) ? globalThis.Boolean(object.shouldLoop) : false,
    };
  },

  toJSON(message: TimedPlayback_Timing_Internal): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    if (message.shouldLoop !== false) {
      obj.shouldLoop = message.shouldLoop;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing_Internal>, I>>(base?: I): TimedPlayback_Timing_Internal {
    return TimedPlayback_Timing_Internal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Timing_Internal>, I>>(
    object: I,
  ): TimedPlayback_Timing_Internal {
    const message = createBaseTimedPlayback_Timing_Internal();
    message.duration = object.duration ?? 0;
    message.shouldLoop = object.shouldLoop ?? false;
    return message;
  },
};

function createBaseTimedPlayback_Update(): TimedPlayback_Update {
  return {
    play: undefined,
    record: undefined,
    pause: undefined,
    reset: undefined,
    jumpToTime: undefined,
    startScrub: undefined,
    endScrub: undefined,
    duration: undefined,
    loop: undefined,
    updateSequence: undefined,
    monitorSource: undefined,
  };
}

export const TimedPlayback_Update = {
  encode(message: TimedPlayback_Update, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.play !== undefined) {
      TimedPlayback_Update_Play.encode(message.play, writer.uint32(10).fork()).ldelim();
    }
    if (message.record !== undefined) {
      TimedPlayback_Update_Record.encode(message.record, writer.uint32(18).fork()).ldelim();
    }
    if (message.pause !== undefined) {
      TimedPlayback_Update_Pause.encode(message.pause, writer.uint32(26).fork()).ldelim();
    }
    if (message.reset !== undefined) {
      TimedPlayback_Update_Reset.encode(message.reset, writer.uint32(34).fork()).ldelim();
    }
    if (message.jumpToTime !== undefined) {
      TimedPlayback_Update_JumpToTime.encode(message.jumpToTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.startScrub !== undefined) {
      TimedPlayback_Update_StartScrub.encode(message.startScrub, writer.uint32(50).fork()).ldelim();
    }
    if (message.endScrub !== undefined) {
      TimedPlayback_Update_EndScrub.encode(message.endScrub, writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      TimedPlayback_Update_Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
    }
    if (message.loop !== undefined) {
      TimedPlayback_Update_Loop.encode(message.loop, writer.uint32(74).fork()).ldelim();
    }
    if (message.updateSequence !== undefined) {
      TimedPlayback_Sequence.encode(message.updateSequence, writer.uint32(82).fork()).ldelim();
    }
    if (message.monitorSource !== undefined) {
      TimedPlayback_Update_MonitorSource.encode(message.monitorSource, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.play = TimedPlayback_Update_Play.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.record = TimedPlayback_Update_Record.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pause = TimedPlayback_Update_Pause.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reset = TimedPlayback_Update_Reset.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.jumpToTime = TimedPlayback_Update_JumpToTime.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startScrub = TimedPlayback_Update_StartScrub.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endScrub = TimedPlayback_Update_EndScrub.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = TimedPlayback_Update_Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.loop = TimedPlayback_Update_Loop.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updateSequence = TimedPlayback_Sequence.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.monitorSource = TimedPlayback_Update_MonitorSource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Update {
    return {
      play: isSet(object.play) ? TimedPlayback_Update_Play.fromJSON(object.play) : undefined,
      record: isSet(object.record) ? TimedPlayback_Update_Record.fromJSON(object.record) : undefined,
      pause: isSet(object.pause) ? TimedPlayback_Update_Pause.fromJSON(object.pause) : undefined,
      reset: isSet(object.reset) ? TimedPlayback_Update_Reset.fromJSON(object.reset) : undefined,
      jumpToTime: isSet(object.jumpToTime) ? TimedPlayback_Update_JumpToTime.fromJSON(object.jumpToTime) : undefined,
      startScrub: isSet(object.startScrub) ? TimedPlayback_Update_StartScrub.fromJSON(object.startScrub) : undefined,
      endScrub: isSet(object.endScrub) ? TimedPlayback_Update_EndScrub.fromJSON(object.endScrub) : undefined,
      duration: isSet(object.duration) ? TimedPlayback_Update_Duration.fromJSON(object.duration) : undefined,
      loop: isSet(object.loop) ? TimedPlayback_Update_Loop.fromJSON(object.loop) : undefined,
      updateSequence: isSet(object.updateSequence) ? TimedPlayback_Sequence.fromJSON(object.updateSequence) : undefined,
      monitorSource: isSet(object.monitorSource)
        ? TimedPlayback_Update_MonitorSource.fromJSON(object.monitorSource)
        : undefined,
    };
  },

  toJSON(message: TimedPlayback_Update): unknown {
    const obj: any = {};
    if (message.play !== undefined) {
      obj.play = TimedPlayback_Update_Play.toJSON(message.play);
    }
    if (message.record !== undefined) {
      obj.record = TimedPlayback_Update_Record.toJSON(message.record);
    }
    if (message.pause !== undefined) {
      obj.pause = TimedPlayback_Update_Pause.toJSON(message.pause);
    }
    if (message.reset !== undefined) {
      obj.reset = TimedPlayback_Update_Reset.toJSON(message.reset);
    }
    if (message.jumpToTime !== undefined) {
      obj.jumpToTime = TimedPlayback_Update_JumpToTime.toJSON(message.jumpToTime);
    }
    if (message.startScrub !== undefined) {
      obj.startScrub = TimedPlayback_Update_StartScrub.toJSON(message.startScrub);
    }
    if (message.endScrub !== undefined) {
      obj.endScrub = TimedPlayback_Update_EndScrub.toJSON(message.endScrub);
    }
    if (message.duration !== undefined) {
      obj.duration = TimedPlayback_Update_Duration.toJSON(message.duration);
    }
    if (message.loop !== undefined) {
      obj.loop = TimedPlayback_Update_Loop.toJSON(message.loop);
    }
    if (message.updateSequence !== undefined) {
      obj.updateSequence = TimedPlayback_Sequence.toJSON(message.updateSequence);
    }
    if (message.monitorSource !== undefined) {
      obj.monitorSource = TimedPlayback_Update_MonitorSource.toJSON(message.monitorSource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update>, I>>(base?: I): TimedPlayback_Update {
    return TimedPlayback_Update.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update>, I>>(object: I): TimedPlayback_Update {
    const message = createBaseTimedPlayback_Update();
    message.play = (object.play !== undefined && object.play !== null)
      ? TimedPlayback_Update_Play.fromPartial(object.play)
      : undefined;
    message.record = (object.record !== undefined && object.record !== null)
      ? TimedPlayback_Update_Record.fromPartial(object.record)
      : undefined;
    message.pause = (object.pause !== undefined && object.pause !== null)
      ? TimedPlayback_Update_Pause.fromPartial(object.pause)
      : undefined;
    message.reset = (object.reset !== undefined && object.reset !== null)
      ? TimedPlayback_Update_Reset.fromPartial(object.reset)
      : undefined;
    message.jumpToTime = (object.jumpToTime !== undefined && object.jumpToTime !== null)
      ? TimedPlayback_Update_JumpToTime.fromPartial(object.jumpToTime)
      : undefined;
    message.startScrub = (object.startScrub !== undefined && object.startScrub !== null)
      ? TimedPlayback_Update_StartScrub.fromPartial(object.startScrub)
      : undefined;
    message.endScrub = (object.endScrub !== undefined && object.endScrub !== null)
      ? TimedPlayback_Update_EndScrub.fromPartial(object.endScrub)
      : undefined;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? TimedPlayback_Update_Duration.fromPartial(object.duration)
      : undefined;
    message.loop = (object.loop !== undefined && object.loop !== null)
      ? TimedPlayback_Update_Loop.fromPartial(object.loop)
      : undefined;
    message.updateSequence = (object.updateSequence !== undefined && object.updateSequence !== null)
      ? TimedPlayback_Sequence.fromPartial(object.updateSequence)
      : undefined;
    message.monitorSource = (object.monitorSource !== undefined && object.monitorSource !== null)
      ? TimedPlayback_Update_MonitorSource.fromPartial(object.monitorSource)
      : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Update_Play(): TimedPlayback_Update_Play {
  return {};
}

export const TimedPlayback_Update_Play = {
  encode(_: TimedPlayback_Update_Play, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Play {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Play();
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

  fromJSON(_: any): TimedPlayback_Update_Play {
    return {};
  },

  toJSON(_: TimedPlayback_Update_Play): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Play>, I>>(base?: I): TimedPlayback_Update_Play {
    return TimedPlayback_Update_Play.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Play>, I>>(_: I): TimedPlayback_Update_Play {
    const message = createBaseTimedPlayback_Update_Play();
    return message;
  },
};

function createBaseTimedPlayback_Update_Record(): TimedPlayback_Update_Record {
  return { isRecording: false };
}

export const TimedPlayback_Update_Record = {
  encode(message: TimedPlayback_Update_Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRecording !== false) {
      writer.uint32(8).bool(message.isRecording);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Record {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Record();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRecording = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Update_Record {
    return { isRecording: isSet(object.isRecording) ? globalThis.Boolean(object.isRecording) : false };
  },

  toJSON(message: TimedPlayback_Update_Record): unknown {
    const obj: any = {};
    if (message.isRecording !== false) {
      obj.isRecording = message.isRecording;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Record>, I>>(base?: I): TimedPlayback_Update_Record {
    return TimedPlayback_Update_Record.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Record>, I>>(object: I): TimedPlayback_Update_Record {
    const message = createBaseTimedPlayback_Update_Record();
    message.isRecording = object.isRecording ?? false;
    return message;
  },
};

function createBaseTimedPlayback_Update_Pause(): TimedPlayback_Update_Pause {
  return {};
}

export const TimedPlayback_Update_Pause = {
  encode(_: TimedPlayback_Update_Pause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Pause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Pause();
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

  fromJSON(_: any): TimedPlayback_Update_Pause {
    return {};
  },

  toJSON(_: TimedPlayback_Update_Pause): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Pause>, I>>(base?: I): TimedPlayback_Update_Pause {
    return TimedPlayback_Update_Pause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Pause>, I>>(_: I): TimedPlayback_Update_Pause {
    const message = createBaseTimedPlayback_Update_Pause();
    return message;
  },
};

function createBaseTimedPlayback_Update_Reset(): TimedPlayback_Update_Reset {
  return {};
}

export const TimedPlayback_Update_Reset = {
  encode(_: TimedPlayback_Update_Reset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Reset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Reset();
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

  fromJSON(_: any): TimedPlayback_Update_Reset {
    return {};
  },

  toJSON(_: TimedPlayback_Update_Reset): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Reset>, I>>(base?: I): TimedPlayback_Update_Reset {
    return TimedPlayback_Update_Reset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Reset>, I>>(_: I): TimedPlayback_Update_Reset {
    const message = createBaseTimedPlayback_Update_Reset();
    return message;
  },
};

function createBaseTimedPlayback_Update_JumpToTime(): TimedPlayback_Update_JumpToTime {
  return { time: 0 };
}

export const TimedPlayback_Update_JumpToTime = {
  encode(message: TimedPlayback_Update_JumpToTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_JumpToTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_JumpToTime();
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

  fromJSON(object: any): TimedPlayback_Update_JumpToTime {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: TimedPlayback_Update_JumpToTime): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_JumpToTime>, I>>(base?: I): TimedPlayback_Update_JumpToTime {
    return TimedPlayback_Update_JumpToTime.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_JumpToTime>, I>>(
    object: I,
  ): TimedPlayback_Update_JumpToTime {
    const message = createBaseTimedPlayback_Update_JumpToTime();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Update_StartScrub(): TimedPlayback_Update_StartScrub {
  return { time: 0 };
}

export const TimedPlayback_Update_StartScrub = {
  encode(message: TimedPlayback_Update_StartScrub, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_StartScrub {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_StartScrub();
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

  fromJSON(object: any): TimedPlayback_Update_StartScrub {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: TimedPlayback_Update_StartScrub): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_StartScrub>, I>>(base?: I): TimedPlayback_Update_StartScrub {
    return TimedPlayback_Update_StartScrub.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_StartScrub>, I>>(
    object: I,
  ): TimedPlayback_Update_StartScrub {
    const message = createBaseTimedPlayback_Update_StartScrub();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Update_EndScrub(): TimedPlayback_Update_EndScrub {
  return { time: 0 };
}

export const TimedPlayback_Update_EndScrub = {
  encode(message: TimedPlayback_Update_EndScrub, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_EndScrub {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_EndScrub();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 17) {
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

  fromJSON(object: any): TimedPlayback_Update_EndScrub {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: TimedPlayback_Update_EndScrub): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_EndScrub>, I>>(base?: I): TimedPlayback_Update_EndScrub {
    return TimedPlayback_Update_EndScrub.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_EndScrub>, I>>(
    object: I,
  ): TimedPlayback_Update_EndScrub {
    const message = createBaseTimedPlayback_Update_EndScrub();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Update_Duration(): TimedPlayback_Update_Duration {
  return { duration: 0 };
}

export const TimedPlayback_Update_Duration = {
  encode(message: TimedPlayback_Update_Duration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(9).double(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Duration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Duration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): TimedPlayback_Update_Duration {
    return { duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0 };
  },

  toJSON(message: TimedPlayback_Update_Duration): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Duration>, I>>(base?: I): TimedPlayback_Update_Duration {
    return TimedPlayback_Update_Duration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Duration>, I>>(
    object: I,
  ): TimedPlayback_Update_Duration {
    const message = createBaseTimedPlayback_Update_Duration();
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Update_Loop(): TimedPlayback_Update_Loop {
  return { loop: false };
}

export const TimedPlayback_Update_Loop = {
  encode(message: TimedPlayback_Update_Loop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loop !== false) {
      writer.uint32(8).bool(message.loop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_Loop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_Loop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loop = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Update_Loop {
    return { loop: isSet(object.loop) ? globalThis.Boolean(object.loop) : false };
  },

  toJSON(message: TimedPlayback_Update_Loop): unknown {
    const obj: any = {};
    if (message.loop !== false) {
      obj.loop = message.loop;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Loop>, I>>(base?: I): TimedPlayback_Update_Loop {
    return TimedPlayback_Update_Loop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Loop>, I>>(object: I): TimedPlayback_Update_Loop {
    const message = createBaseTimedPlayback_Update_Loop();
    message.loop = object.loop ?? false;
    return message;
  },
};

function createBaseTimedPlayback_Update_MonitorSource(): TimedPlayback_Update_MonitorSource {
  return { enable: false };
}

export const TimedPlayback_Update_MonitorSource = {
  encode(message: TimedPlayback_Update_MonitorSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback_Update_MonitorSource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update_MonitorSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimedPlayback_Update_MonitorSource {
    return { enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false };
  },

  toJSON(message: TimedPlayback_Update_MonitorSource): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_MonitorSource>, I>>(
    base?: I,
  ): TimedPlayback_Update_MonitorSource {
    return TimedPlayback_Update_MonitorSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_MonitorSource>, I>>(
    object: I,
  ): TimedPlayback_Update_MonitorSource {
    const message = createBaseTimedPlayback_Update_MonitorSource();
    message.enable = object.enable ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
