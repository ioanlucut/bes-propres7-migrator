/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface TriggerMediaInformation {
  sourceType: TriggerMediaInformation_SourceType;
  video?: TriggerMediaInformation_Video | undefined;
  image?: TriggerMediaInformation_Image | undefined;
  audio?: TriggerMediaInformation_Audio | undefined;
  liveVideo?: TriggerMediaInformation_LiveVideo | undefined;
}

export enum TriggerMediaInformation_SourceType {
  SOURCE_TYPE_LOCAL = 0,
  SOURCE_TYPE_PROCONTENT = 1,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_SourceTypeFromJSON(
  object: any,
): TriggerMediaInformation_SourceType {
  switch (object) {
    case 0:
    case 'SOURCE_TYPE_LOCAL':
      return TriggerMediaInformation_SourceType.SOURCE_TYPE_LOCAL;
    case 1:
    case 'SOURCE_TYPE_PROCONTENT':
      return TriggerMediaInformation_SourceType.SOURCE_TYPE_PROCONTENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_SourceType.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_SourceTypeToJSON(
  object: TriggerMediaInformation_SourceType,
): string {
  switch (object) {
    case TriggerMediaInformation_SourceType.SOURCE_TYPE_LOCAL:
      return 'SOURCE_TYPE_LOCAL';
    case TriggerMediaInformation_SourceType.SOURCE_TYPE_PROCONTENT:
      return 'SOURCE_TYPE_PROCONTENT';
    case TriggerMediaInformation_SourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_Video {
  sourceDurationRange: TriggerMediaInformation_Video_DurationRange;
  playbackMarkerCount: number;
  playbackBehavior: TriggerMediaInformation_Video_PlaybackBehavior;
  scaleMode: TriggerMediaInformation_Video_ScaleMode;
  hasInPoint: boolean;
  hasOutPoint: boolean;
  hasEffects: boolean;
  hasTransition: boolean;
  hasAudio: boolean;
}

export enum TriggerMediaInformation_Video_DurationRange {
  DURATION_UNDER_10S = 0,
  DURATION_10S_TO_30S = 1,
  DURATION_30S_TO_60S = 2,
  DURATION_1M_TO_5M = 3,
  DURATION_5M_TO_10M = 4,
  DURATION_10M_TO_30M = 5,
  DURATION_30M_TO_60M = 6,
  DURATION_1H_TO_2H = 7,
  DURATION_OVER_2H = 8,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_Video_DurationRangeFromJSON(
  object: any,
): TriggerMediaInformation_Video_DurationRange {
  switch (object) {
    case 0:
    case 'DURATION_UNDER_10S':
      return TriggerMediaInformation_Video_DurationRange.DURATION_UNDER_10S;
    case 1:
    case 'DURATION_10S_TO_30S':
      return TriggerMediaInformation_Video_DurationRange.DURATION_10S_TO_30S;
    case 2:
    case 'DURATION_30S_TO_60S':
      return TriggerMediaInformation_Video_DurationRange.DURATION_30S_TO_60S;
    case 3:
    case 'DURATION_1M_TO_5M':
      return TriggerMediaInformation_Video_DurationRange.DURATION_1M_TO_5M;
    case 4:
    case 'DURATION_5M_TO_10M':
      return TriggerMediaInformation_Video_DurationRange.DURATION_5M_TO_10M;
    case 5:
    case 'DURATION_10M_TO_30M':
      return TriggerMediaInformation_Video_DurationRange.DURATION_10M_TO_30M;
    case 6:
    case 'DURATION_30M_TO_60M':
      return TriggerMediaInformation_Video_DurationRange.DURATION_30M_TO_60M;
    case 7:
    case 'DURATION_1H_TO_2H':
      return TriggerMediaInformation_Video_DurationRange.DURATION_1H_TO_2H;
    case 8:
    case 'DURATION_OVER_2H':
      return TriggerMediaInformation_Video_DurationRange.DURATION_OVER_2H;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Video_DurationRange.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Video_DurationRangeToJSON(
  object: TriggerMediaInformation_Video_DurationRange,
): string {
  switch (object) {
    case TriggerMediaInformation_Video_DurationRange.DURATION_UNDER_10S:
      return 'DURATION_UNDER_10S';
    case TriggerMediaInformation_Video_DurationRange.DURATION_10S_TO_30S:
      return 'DURATION_10S_TO_30S';
    case TriggerMediaInformation_Video_DurationRange.DURATION_30S_TO_60S:
      return 'DURATION_30S_TO_60S';
    case TriggerMediaInformation_Video_DurationRange.DURATION_1M_TO_5M:
      return 'DURATION_1M_TO_5M';
    case TriggerMediaInformation_Video_DurationRange.DURATION_5M_TO_10M:
      return 'DURATION_5M_TO_10M';
    case TriggerMediaInformation_Video_DurationRange.DURATION_10M_TO_30M:
      return 'DURATION_10M_TO_30M';
    case TriggerMediaInformation_Video_DurationRange.DURATION_30M_TO_60M:
      return 'DURATION_30M_TO_60M';
    case TriggerMediaInformation_Video_DurationRange.DURATION_1H_TO_2H:
      return 'DURATION_1H_TO_2H';
    case TriggerMediaInformation_Video_DurationRange.DURATION_OVER_2H:
      return 'DURATION_OVER_2H';
    case TriggerMediaInformation_Video_DurationRange.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_Video_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  PLAYBACK_BEHAVIOR_SOFT_LOOP = 4,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_Video_PlaybackBehaviorFromJSON(
  object: any,
): TriggerMediaInformation_Video_PlaybackBehavior {
  switch (object) {
    case 0:
    case 'PLAYBACK_BEHAVIOR_STOP':
      return TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case 'PLAYBACK_BEHAVIOR_LOOP':
      return TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case 'PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT':
      return TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT;
    case 3:
    case 'PLAYBACK_BEHAVIOR_LOOP_FOR_TIME':
      return TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case 4:
    case 'PLAYBACK_BEHAVIOR_SOFT_LOOP':
      return TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_SOFT_LOOP;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Video_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Video_PlaybackBehaviorToJSON(
  object: TriggerMediaInformation_Video_PlaybackBehavior,
): string {
  switch (object) {
    case TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return 'PLAYBACK_BEHAVIOR_STOP';
    case TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return 'PLAYBACK_BEHAVIOR_LOOP';
    case TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT:
      return 'PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT';
    case TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return 'PLAYBACK_BEHAVIOR_LOOP_FOR_TIME';
    case TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_SOFT_LOOP:
      return 'PLAYBACK_BEHAVIOR_SOFT_LOOP';
    case TriggerMediaInformation_Video_PlaybackBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_Video_ScaleMode {
  SCALE_MODE_FIT = 0,
  SCALE_MODE_FILL = 1,
  SCALE_MODE_STRETCH = 2,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_Video_ScaleModeFromJSON(
  object: any,
): TriggerMediaInformation_Video_ScaleMode {
  switch (object) {
    case 0:
    case 'SCALE_MODE_FIT':
      return TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FIT;
    case 1:
    case 'SCALE_MODE_FILL':
      return TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FILL;
    case 2:
    case 'SCALE_MODE_STRETCH':
      return TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_STRETCH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Video_ScaleMode.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Video_ScaleModeToJSON(
  object: TriggerMediaInformation_Video_ScaleMode,
): string {
  switch (object) {
    case TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FIT:
      return 'SCALE_MODE_FIT';
    case TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FILL:
      return 'SCALE_MODE_FILL';
    case TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_STRETCH:
      return 'SCALE_MODE_STRETCH';
    case TriggerMediaInformation_Video_ScaleMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_Audio {}

export interface TriggerMediaInformation_Image {}

export interface TriggerMediaInformation_LiveVideo {}

function createBaseTriggerMediaInformation(): TriggerMediaInformation {
  return {
    sourceType: 0,
    video: undefined,
    image: undefined,
    audio: undefined,
    liveVideo: undefined,
  };
}

export const TriggerMediaInformation = {
  encode(
    message: TriggerMediaInformation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceType !== 0) {
      writer.uint32(8).int32(message.sourceType);
    }
    if (message.video !== undefined) {
      TriggerMediaInformation_Video.encode(
        message.video,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.image !== undefined) {
      TriggerMediaInformation_Image.encode(
        message.image,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      TriggerMediaInformation_Audio.encode(
        message.audio,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.liveVideo !== undefined) {
      TriggerMediaInformation_LiveVideo.encode(
        message.liveVideo,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.video = TriggerMediaInformation_Video.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = TriggerMediaInformation_Image.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audio = TriggerMediaInformation_Audio.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liveVideo = TriggerMediaInformation_LiveVideo.decode(
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

  fromJSON(object: any): TriggerMediaInformation {
    return {
      sourceType: isSet(object.sourceType)
        ? triggerMediaInformation_SourceTypeFromJSON(object.sourceType)
        : 0,
      video: isSet(object.video)
        ? TriggerMediaInformation_Video.fromJSON(object.video)
        : undefined,
      image: isSet(object.image)
        ? TriggerMediaInformation_Image.fromJSON(object.image)
        : undefined,
      audio: isSet(object.audio)
        ? TriggerMediaInformation_Audio.fromJSON(object.audio)
        : undefined,
      liveVideo: isSet(object.liveVideo)
        ? TriggerMediaInformation_LiveVideo.fromJSON(object.liveVideo)
        : undefined,
    };
  },

  toJSON(message: TriggerMediaInformation): unknown {
    const obj: any = {};
    if (message.sourceType !== 0) {
      obj.sourceType = triggerMediaInformation_SourceTypeToJSON(
        message.sourceType,
      );
    }
    if (message.video !== undefined) {
      obj.video = TriggerMediaInformation_Video.toJSON(message.video);
    }
    if (message.image !== undefined) {
      obj.image = TriggerMediaInformation_Image.toJSON(message.image);
    }
    if (message.audio !== undefined) {
      obj.audio = TriggerMediaInformation_Audio.toJSON(message.audio);
    }
    if (message.liveVideo !== undefined) {
      obj.liveVideo = TriggerMediaInformation_LiveVideo.toJSON(
        message.liveVideo,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation>, I>>(
    base?: I,
  ): TriggerMediaInformation {
    return TriggerMediaInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation>, I>>(
    object: I,
  ): TriggerMediaInformation {
    const message = createBaseTriggerMediaInformation();
    message.sourceType = object.sourceType ?? 0;
    message.video =
      object.video !== undefined && object.video !== null
        ? TriggerMediaInformation_Video.fromPartial(object.video)
        : undefined;
    message.image =
      object.image !== undefined && object.image !== null
        ? TriggerMediaInformation_Image.fromPartial(object.image)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? TriggerMediaInformation_Audio.fromPartial(object.audio)
        : undefined;
    message.liveVideo =
      object.liveVideo !== undefined && object.liveVideo !== null
        ? TriggerMediaInformation_LiveVideo.fromPartial(object.liveVideo)
        : undefined;
    return message;
  },
};

function createBaseTriggerMediaInformation_Video(): TriggerMediaInformation_Video {
  return {
    sourceDurationRange: 0,
    playbackMarkerCount: 0,
    playbackBehavior: 0,
    scaleMode: 0,
    hasInPoint: false,
    hasOutPoint: false,
    hasEffects: false,
    hasTransition: false,
    hasAudio: false,
  };
}

export const TriggerMediaInformation_Video = {
  encode(
    message: TriggerMediaInformation_Video,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceDurationRange !== 0) {
      writer.uint32(8).int32(message.sourceDurationRange);
    }
    if (message.playbackMarkerCount !== 0) {
      writer.uint32(16).int32(message.playbackMarkerCount);
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(24).int32(message.playbackBehavior);
    }
    if (message.scaleMode !== 0) {
      writer.uint32(32).int32(message.scaleMode);
    }
    if (message.hasInPoint === true) {
      writer.uint32(40).bool(message.hasInPoint);
    }
    if (message.hasOutPoint === true) {
      writer.uint32(48).bool(message.hasOutPoint);
    }
    if (message.hasEffects === true) {
      writer.uint32(56).bool(message.hasEffects);
    }
    if (message.hasTransition === true) {
      writer.uint32(64).bool(message.hasTransition);
    }
    if (message.hasAudio === true) {
      writer.uint32(72).bool(message.hasAudio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_Video {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_Video();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceDurationRange = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playbackMarkerCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.scaleMode = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasInPoint = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hasOutPoint = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasEffects = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.hasTransition = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.hasAudio = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_Video {
    return {
      sourceDurationRange: isSet(object.sourceDurationRange)
        ? triggerMediaInformation_Video_DurationRangeFromJSON(
            object.sourceDurationRange,
          )
        : 0,
      playbackMarkerCount: isSet(object.playbackMarkerCount)
        ? globalThis.Number(object.playbackMarkerCount)
        : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? triggerMediaInformation_Video_PlaybackBehaviorFromJSON(
            object.playbackBehavior,
          )
        : 0,
      scaleMode: isSet(object.scaleMode)
        ? triggerMediaInformation_Video_ScaleModeFromJSON(object.scaleMode)
        : 0,
      hasInPoint: isSet(object.hasInPoint)
        ? globalThis.Boolean(object.hasInPoint)
        : false,
      hasOutPoint: isSet(object.hasOutPoint)
        ? globalThis.Boolean(object.hasOutPoint)
        : false,
      hasEffects: isSet(object.hasEffects)
        ? globalThis.Boolean(object.hasEffects)
        : false,
      hasTransition: isSet(object.hasTransition)
        ? globalThis.Boolean(object.hasTransition)
        : false,
      hasAudio: isSet(object.hasAudio)
        ? globalThis.Boolean(object.hasAudio)
        : false,
    };
  },

  toJSON(message: TriggerMediaInformation_Video): unknown {
    const obj: any = {};
    if (message.sourceDurationRange !== 0) {
      obj.sourceDurationRange =
        triggerMediaInformation_Video_DurationRangeToJSON(
          message.sourceDurationRange,
        );
    }
    if (message.playbackMarkerCount !== 0) {
      obj.playbackMarkerCount = Math.round(message.playbackMarkerCount);
    }
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior =
        triggerMediaInformation_Video_PlaybackBehaviorToJSON(
          message.playbackBehavior,
        );
    }
    if (message.scaleMode !== 0) {
      obj.scaleMode = triggerMediaInformation_Video_ScaleModeToJSON(
        message.scaleMode,
      );
    }
    if (message.hasInPoint === true) {
      obj.hasInPoint = message.hasInPoint;
    }
    if (message.hasOutPoint === true) {
      obj.hasOutPoint = message.hasOutPoint;
    }
    if (message.hasEffects === true) {
      obj.hasEffects = message.hasEffects;
    }
    if (message.hasTransition === true) {
      obj.hasTransition = message.hasTransition;
    }
    if (message.hasAudio === true) {
      obj.hasAudio = message.hasAudio;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Video>, I>>(
    base?: I,
  ): TriggerMediaInformation_Video {
    return TriggerMediaInformation_Video.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation_Video>, I>>(
    object: I,
  ): TriggerMediaInformation_Video {
    const message = createBaseTriggerMediaInformation_Video();
    message.sourceDurationRange = object.sourceDurationRange ?? 0;
    message.playbackMarkerCount = object.playbackMarkerCount ?? 0;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.scaleMode = object.scaleMode ?? 0;
    message.hasInPoint = object.hasInPoint ?? false;
    message.hasOutPoint = object.hasOutPoint ?? false;
    message.hasEffects = object.hasEffects ?? false;
    message.hasTransition = object.hasTransition ?? false;
    message.hasAudio = object.hasAudio ?? false;
    return message;
  },
};

function createBaseTriggerMediaInformation_Audio(): TriggerMediaInformation_Audio {
  return {};
}

export const TriggerMediaInformation_Audio = {
  encode(
    _: TriggerMediaInformation_Audio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_Audio();
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

  fromJSON(_: any): TriggerMediaInformation_Audio {
    return {};
  },

  toJSON(_: TriggerMediaInformation_Audio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Audio>, I>>(
    base?: I,
  ): TriggerMediaInformation_Audio {
    return TriggerMediaInformation_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation_Audio>, I>>(
    _: I,
  ): TriggerMediaInformation_Audio {
    const message = createBaseTriggerMediaInformation_Audio();
    return message;
  },
};

function createBaseTriggerMediaInformation_Image(): TriggerMediaInformation_Image {
  return {};
}

export const TriggerMediaInformation_Image = {
  encode(
    _: TriggerMediaInformation_Image,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_Image {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_Image();
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

  fromJSON(_: any): TriggerMediaInformation_Image {
    return {};
  },

  toJSON(_: TriggerMediaInformation_Image): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Image>, I>>(
    base?: I,
  ): TriggerMediaInformation_Image {
    return TriggerMediaInformation_Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation_Image>, I>>(
    _: I,
  ): TriggerMediaInformation_Image {
    const message = createBaseTriggerMediaInformation_Image();
    return message;
  },
};

function createBaseTriggerMediaInformation_LiveVideo(): TriggerMediaInformation_LiveVideo {
  return {};
}

export const TriggerMediaInformation_LiveVideo = {
  encode(
    _: TriggerMediaInformation_LiveVideo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_LiveVideo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_LiveVideo();
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

  fromJSON(_: any): TriggerMediaInformation_LiveVideo {
    return {};
  },

  toJSON(_: TriggerMediaInformation_LiveVideo): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_LiveVideo>, I>>(
    base?: I,
  ): TriggerMediaInformation_LiveVideo {
    return TriggerMediaInformation_LiveVideo.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_LiveVideo>, I>,
  >(_: I): TriggerMediaInformation_LiveVideo {
    const message = createBaseTriggerMediaInformation_LiveVideo();
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
