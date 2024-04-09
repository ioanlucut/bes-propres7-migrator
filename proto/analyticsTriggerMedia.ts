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

export enum TriggerMediaInformation_CompletionTarget {
  COMPLETION_TARGET_NONE = 0,
  COMPLETION_TARGET_NEXT = 1,
  COMPLETION_TARGET_RANDOM = 2,
  COMPLETION_TARGET_CUE = 3,
  COMPLETION_TARGET_FIRST = 4,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_CompletionTargetFromJSON(
  object: any,
): TriggerMediaInformation_CompletionTarget {
  switch (object) {
    case 0:
    case 'COMPLETION_TARGET_NONE':
      return TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_NONE;
    case 1:
    case 'COMPLETION_TARGET_NEXT':
      return TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_NEXT;
    case 2:
    case 'COMPLETION_TARGET_RANDOM':
      return TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_RANDOM;
    case 3:
    case 'COMPLETION_TARGET_CUE':
      return TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_CUE;
    case 4:
    case 'COMPLETION_TARGET_FIRST':
      return TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_FIRST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_CompletionTarget.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_CompletionTargetToJSON(
  object: TriggerMediaInformation_CompletionTarget,
): string {
  switch (object) {
    case TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_NONE:
      return 'COMPLETION_TARGET_NONE';
    case TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_NEXT:
      return 'COMPLETION_TARGET_NEXT';
    case TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_RANDOM:
      return 'COMPLETION_TARGET_RANDOM';
    case TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_CUE:
      return 'COMPLETION_TARGET_CUE';
    case TriggerMediaInformation_CompletionTarget.COMPLETION_TARGET_FIRST:
      return 'COMPLETION_TARGET_FIRST';
    case TriggerMediaInformation_CompletionTarget.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
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

export interface TriggerMediaInformation_Transition {
  isDefault: boolean;
  name: string;
}

export interface TriggerMediaInformation_VisualMedia {
  behavior: TriggerMediaInformation_VisualMedia_Behavior;
  scaleMode: TriggerMediaInformation_VisualMedia_ScaleMode;
  flipMode: TriggerMediaInformation_VisualMedia_FlipMode;
  nativeRotation: TriggerMediaInformation_VisualMedia_NativeRotation;
  resolution: TriggerMediaInformation_VisualMedia_Size | undefined;
  enabledEffectsCount: number;
  hasEffectPreset: boolean;
  transition: TriggerMediaInformation_Transition | undefined;
}

export enum TriggerMediaInformation_VisualMedia_Behavior {
  BEHAVIOR_BACKGROUND = 0,
  BEHAVIOR_FOREGROUND = 1,
  BEHAVIOR_VIDEO_INPUT = 2,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_VisualMedia_BehaviorFromJSON(
  object: any,
): TriggerMediaInformation_VisualMedia_Behavior {
  switch (object) {
    case 0:
    case 'BEHAVIOR_BACKGROUND':
      return TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_BACKGROUND;
    case 1:
    case 'BEHAVIOR_FOREGROUND':
      return TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_FOREGROUND;
    case 2:
    case 'BEHAVIOR_VIDEO_INPUT':
      return TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_VIDEO_INPUT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_VisualMedia_Behavior.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_VisualMedia_BehaviorToJSON(
  object: TriggerMediaInformation_VisualMedia_Behavior,
): string {
  switch (object) {
    case TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_BACKGROUND:
      return 'BEHAVIOR_BACKGROUND';
    case TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_FOREGROUND:
      return 'BEHAVIOR_FOREGROUND';
    case TriggerMediaInformation_VisualMedia_Behavior.BEHAVIOR_VIDEO_INPUT:
      return 'BEHAVIOR_VIDEO_INPUT';
    case TriggerMediaInformation_VisualMedia_Behavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_VisualMedia_ScaleMode {
  SCALE_MODE_FIT = 0,
  SCALE_MODE_FILL = 1,
  SCALE_MODE_STRETCH = 2,
  SCALE_MODE_BLUR = 3,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_VisualMedia_ScaleModeFromJSON(
  object: any,
): TriggerMediaInformation_VisualMedia_ScaleMode {
  switch (object) {
    case 0:
    case 'SCALE_MODE_FIT':
      return TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_FIT;
    case 1:
    case 'SCALE_MODE_FILL':
      return TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_FILL;
    case 2:
    case 'SCALE_MODE_STRETCH':
      return TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_STRETCH;
    case 3:
    case 'SCALE_MODE_BLUR':
      return TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_BLUR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_VisualMedia_ScaleMode.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_VisualMedia_ScaleModeToJSON(
  object: TriggerMediaInformation_VisualMedia_ScaleMode,
): string {
  switch (object) {
    case TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_FIT:
      return 'SCALE_MODE_FIT';
    case TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_FILL:
      return 'SCALE_MODE_FILL';
    case TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_STRETCH:
      return 'SCALE_MODE_STRETCH';
    case TriggerMediaInformation_VisualMedia_ScaleMode.SCALE_MODE_BLUR:
      return 'SCALE_MODE_BLUR';
    case TriggerMediaInformation_VisualMedia_ScaleMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_VisualMedia_FlipMode {
  FLIP_MODE_NONE = 0,
  FLIP_MODE_HORIZONTAL = 1,
  FLIP_MODE_VERTICAL = 2,
  FLIP_MODE_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_VisualMedia_FlipModeFromJSON(
  object: any,
): TriggerMediaInformation_VisualMedia_FlipMode {
  switch (object) {
    case 0:
    case 'FLIP_MODE_NONE':
      return TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_NONE;
    case 1:
    case 'FLIP_MODE_HORIZONTAL':
      return TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_HORIZONTAL;
    case 2:
    case 'FLIP_MODE_VERTICAL':
      return TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_VERTICAL;
    case 3:
    case 'FLIP_MODE_BOTH':
      return TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_BOTH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_VisualMedia_FlipMode.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_VisualMedia_FlipModeToJSON(
  object: TriggerMediaInformation_VisualMedia_FlipMode,
): string {
  switch (object) {
    case TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_NONE:
      return 'FLIP_MODE_NONE';
    case TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_HORIZONTAL:
      return 'FLIP_MODE_HORIZONTAL';
    case TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_VERTICAL:
      return 'FLIP_MODE_VERTICAL';
    case TriggerMediaInformation_VisualMedia_FlipMode.FLIP_MODE_BOTH:
      return 'FLIP_MODE_BOTH';
    case TriggerMediaInformation_VisualMedia_FlipMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_VisualMedia_NativeRotation {
  NATIVE_ROTATION_STANDARD = 0,
  NATIVE_ROTATION_90 = 90,
  NATIVE_ROTATION_180 = 180,
  NATIVE_ROTATION_270 = 270,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_VisualMedia_NativeRotationFromJSON(
  object: any,
): TriggerMediaInformation_VisualMedia_NativeRotation {
  switch (object) {
    case 0:
    case 'NATIVE_ROTATION_STANDARD':
      return TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_STANDARD;
    case 90:
    case 'NATIVE_ROTATION_90':
      return TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_90;
    case 180:
    case 'NATIVE_ROTATION_180':
      return TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_180;
    case 270:
    case 'NATIVE_ROTATION_270':
      return TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_270;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_VisualMedia_NativeRotation.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_VisualMedia_NativeRotationToJSON(
  object: TriggerMediaInformation_VisualMedia_NativeRotation,
): string {
  switch (object) {
    case TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_STANDARD:
      return 'NATIVE_ROTATION_STANDARD';
    case TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_90:
      return 'NATIVE_ROTATION_90';
    case TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_180:
      return 'NATIVE_ROTATION_180';
    case TriggerMediaInformation_VisualMedia_NativeRotation.NATIVE_ROTATION_270:
      return 'NATIVE_ROTATION_270';
    case TriggerMediaInformation_VisualMedia_NativeRotation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_VisualMedia_Size {
  width: number;
  height: number;
}

export interface TriggerMediaInformation_Transport {
  sourceDurationRange: TriggerMediaInformation_Transport_DurationRange;
  hasAudioRampIn: boolean;
  hasAudioRampOut: boolean;
  hasInPoint: boolean;
  hasOutPoint: boolean;
  playRate: number;
  playbackMarkerCount: number;
}

export enum TriggerMediaInformation_Transport_DurationRange {
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

export function triggerMediaInformation_Transport_DurationRangeFromJSON(
  object: any,
): TriggerMediaInformation_Transport_DurationRange {
  switch (object) {
    case 0:
    case 'DURATION_UNDER_10S':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_UNDER_10S;
    case 1:
    case 'DURATION_10S_TO_30S':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_10S_TO_30S;
    case 2:
    case 'DURATION_30S_TO_60S':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_30S_TO_60S;
    case 3:
    case 'DURATION_1M_TO_5M':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_1M_TO_5M;
    case 4:
    case 'DURATION_5M_TO_10M':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_5M_TO_10M;
    case 5:
    case 'DURATION_10M_TO_30M':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_10M_TO_30M;
    case 6:
    case 'DURATION_30M_TO_60M':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_30M_TO_60M;
    case 7:
    case 'DURATION_1H_TO_2H':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_1H_TO_2H;
    case 8:
    case 'DURATION_OVER_2H':
      return TriggerMediaInformation_Transport_DurationRange.DURATION_OVER_2H;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Transport_DurationRange.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Transport_DurationRangeToJSON(
  object: TriggerMediaInformation_Transport_DurationRange,
): string {
  switch (object) {
    case TriggerMediaInformation_Transport_DurationRange.DURATION_UNDER_10S:
      return 'DURATION_UNDER_10S';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_10S_TO_30S:
      return 'DURATION_10S_TO_30S';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_30S_TO_60S:
      return 'DURATION_30S_TO_60S';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_1M_TO_5M:
      return 'DURATION_1M_TO_5M';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_5M_TO_10M:
      return 'DURATION_5M_TO_10M';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_10M_TO_30M:
      return 'DURATION_10M_TO_30M';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_30M_TO_60M:
      return 'DURATION_30M_TO_60M';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_1H_TO_2H:
      return 'DURATION_1H_TO_2H';
    case TriggerMediaInformation_Transport_DurationRange.DURATION_OVER_2H:
      return 'DURATION_OVER_2H';
    case TriggerMediaInformation_Transport_DurationRange.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_Video {
  visualMedia: TriggerMediaInformation_VisualMedia | undefined;
  playbackBehavior: TriggerMediaInformation_Video_PlaybackBehavior;
  completionTarget: TriggerMediaInformation_CompletionTarget;
  softLoopEnabled: boolean;
  softLoopDuration: number;
  frameRate: number;
  audioChannelCount: number;
  transport: TriggerMediaInformation_Transport | undefined;
}

export enum TriggerMediaInformation_Video_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
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
    case TriggerMediaInformation_Video_PlaybackBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_Audio {
  behavior: TriggerMediaInformation_Audio_Behavior;
  playbackBehavior: TriggerMediaInformation_Audio_PlaybackBehavior;
  transition: TriggerMediaInformation_Transition | undefined;
  audioChannelCount: number;
  transport: TriggerMediaInformation_Transport | undefined;
}

export enum TriggerMediaInformation_Audio_Behavior {
  BEHAVIOR_TUNE = 0,
  BEHAVIOR_SOUND = 1,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_Audio_BehaviorFromJSON(
  object: any,
): TriggerMediaInformation_Audio_Behavior {
  switch (object) {
    case 0:
    case 'BEHAVIOR_TUNE':
      return TriggerMediaInformation_Audio_Behavior.BEHAVIOR_TUNE;
    case 1:
    case 'BEHAVIOR_SOUND':
      return TriggerMediaInformation_Audio_Behavior.BEHAVIOR_SOUND;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Audio_Behavior.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Audio_BehaviorToJSON(
  object: TriggerMediaInformation_Audio_Behavior,
): string {
  switch (object) {
    case TriggerMediaInformation_Audio_Behavior.BEHAVIOR_TUNE:
      return 'BEHAVIOR_TUNE';
    case TriggerMediaInformation_Audio_Behavior.BEHAVIOR_SOUND:
      return 'BEHAVIOR_SOUND';
    case TriggerMediaInformation_Audio_Behavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum TriggerMediaInformation_Audio_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_NEXT = 2,
  UNRECOGNIZED = -1,
}

export function triggerMediaInformation_Audio_PlaybackBehaviorFromJSON(
  object: any,
): TriggerMediaInformation_Audio_PlaybackBehavior {
  switch (object) {
    case 0:
    case 'PLAYBACK_BEHAVIOR_STOP':
      return TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case 'PLAYBACK_BEHAVIOR_LOOP':
      return TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case 'PLAYBACK_BEHAVIOR_NEXT':
      return TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_NEXT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerMediaInformation_Audio_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function triggerMediaInformation_Audio_PlaybackBehaviorToJSON(
  object: TriggerMediaInformation_Audio_PlaybackBehavior,
): string {
  switch (object) {
    case TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return 'PLAYBACK_BEHAVIOR_STOP';
    case TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return 'PLAYBACK_BEHAVIOR_LOOP';
    case TriggerMediaInformation_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_NEXT:
      return 'PLAYBACK_BEHAVIOR_NEXT';
    case TriggerMediaInformation_Audio_PlaybackBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerMediaInformation_Image {
  visualMedia: TriggerMediaInformation_VisualMedia | undefined;
  transition: TriggerMediaInformation_Transition | undefined;
  completionTarget: TriggerMediaInformation_CompletionTarget;
}

export interface TriggerMediaInformation_LiveVideo {
  visualMedia: TriggerMediaInformation_VisualMedia | undefined;
  frameRate: number;
  audioChannelCount: number;
}

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

function createBaseTriggerMediaInformation_Transition(): TriggerMediaInformation_Transition {
  return { isDefault: false, name: '' };
}

export const TriggerMediaInformation_Transition = {
  encode(
    message: TriggerMediaInformation_Transition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isDefault !== false) {
      writer.uint32(8).bool(message.isDefault);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_Transition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_Transition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_Transition {
    return {
      isDefault: isSet(object.isDefault)
        ? globalThis.Boolean(object.isDefault)
        : false,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
    };
  },

  toJSON(message: TriggerMediaInformation_Transition): unknown {
    const obj: any = {};
    if (message.isDefault !== false) {
      obj.isDefault = message.isDefault;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Transition>, I>>(
    base?: I,
  ): TriggerMediaInformation_Transition {
    return TriggerMediaInformation_Transition.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_Transition>, I>,
  >(object: I): TriggerMediaInformation_Transition {
    const message = createBaseTriggerMediaInformation_Transition();
    message.isDefault = object.isDefault ?? false;
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseTriggerMediaInformation_VisualMedia(): TriggerMediaInformation_VisualMedia {
  return {
    behavior: 0,
    scaleMode: 0,
    flipMode: 0,
    nativeRotation: 0,
    resolution: undefined,
    enabledEffectsCount: 0,
    hasEffectPreset: false,
    transition: undefined,
  };
}

export const TriggerMediaInformation_VisualMedia = {
  encode(
    message: TriggerMediaInformation_VisualMedia,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.behavior !== 0) {
      writer.uint32(8).int32(message.behavior);
    }
    if (message.scaleMode !== 0) {
      writer.uint32(16).int32(message.scaleMode);
    }
    if (message.flipMode !== 0) {
      writer.uint32(24).int32(message.flipMode);
    }
    if (message.nativeRotation !== 0) {
      writer.uint32(32).int32(message.nativeRotation);
    }
    if (message.resolution !== undefined) {
      TriggerMediaInformation_VisualMedia_Size.encode(
        message.resolution,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.enabledEffectsCount !== 0) {
      writer.uint32(48).uint32(message.enabledEffectsCount);
    }
    if (message.hasEffectPreset !== false) {
      writer.uint32(56).bool(message.hasEffectPreset);
    }
    if (message.transition !== undefined) {
      TriggerMediaInformation_Transition.encode(
        message.transition,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_VisualMedia {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_VisualMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.behavior = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.scaleMode = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.flipMode = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nativeRotation = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resolution = TriggerMediaInformation_VisualMedia_Size.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.enabledEffectsCount = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasEffectPreset = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.transition = TriggerMediaInformation_Transition.decode(
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

  fromJSON(object: any): TriggerMediaInformation_VisualMedia {
    return {
      behavior: isSet(object.behavior)
        ? triggerMediaInformation_VisualMedia_BehaviorFromJSON(object.behavior)
        : 0,
      scaleMode: isSet(object.scaleMode)
        ? triggerMediaInformation_VisualMedia_ScaleModeFromJSON(
            object.scaleMode,
          )
        : 0,
      flipMode: isSet(object.flipMode)
        ? triggerMediaInformation_VisualMedia_FlipModeFromJSON(object.flipMode)
        : 0,
      nativeRotation: isSet(object.nativeRotation)
        ? triggerMediaInformation_VisualMedia_NativeRotationFromJSON(
            object.nativeRotation,
          )
        : 0,
      resolution: isSet(object.resolution)
        ? TriggerMediaInformation_VisualMedia_Size.fromJSON(object.resolution)
        : undefined,
      enabledEffectsCount: isSet(object.enabledEffectsCount)
        ? globalThis.Number(object.enabledEffectsCount)
        : 0,
      hasEffectPreset: isSet(object.hasEffectPreset)
        ? globalThis.Boolean(object.hasEffectPreset)
        : false,
      transition: isSet(object.transition)
        ? TriggerMediaInformation_Transition.fromJSON(object.transition)
        : undefined,
    };
  },

  toJSON(message: TriggerMediaInformation_VisualMedia): unknown {
    const obj: any = {};
    if (message.behavior !== 0) {
      obj.behavior = triggerMediaInformation_VisualMedia_BehaviorToJSON(
        message.behavior,
      );
    }
    if (message.scaleMode !== 0) {
      obj.scaleMode = triggerMediaInformation_VisualMedia_ScaleModeToJSON(
        message.scaleMode,
      );
    }
    if (message.flipMode !== 0) {
      obj.flipMode = triggerMediaInformation_VisualMedia_FlipModeToJSON(
        message.flipMode,
      );
    }
    if (message.nativeRotation !== 0) {
      obj.nativeRotation =
        triggerMediaInformation_VisualMedia_NativeRotationToJSON(
          message.nativeRotation,
        );
    }
    if (message.resolution !== undefined) {
      obj.resolution = TriggerMediaInformation_VisualMedia_Size.toJSON(
        message.resolution,
      );
    }
    if (message.enabledEffectsCount !== 0) {
      obj.enabledEffectsCount = Math.round(message.enabledEffectsCount);
    }
    if (message.hasEffectPreset !== false) {
      obj.hasEffectPreset = message.hasEffectPreset;
    }
    if (message.transition !== undefined) {
      obj.transition = TriggerMediaInformation_Transition.toJSON(
        message.transition,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_VisualMedia>, I>>(
    base?: I,
  ): TriggerMediaInformation_VisualMedia {
    return TriggerMediaInformation_VisualMedia.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_VisualMedia>, I>,
  >(object: I): TriggerMediaInformation_VisualMedia {
    const message = createBaseTriggerMediaInformation_VisualMedia();
    message.behavior = object.behavior ?? 0;
    message.scaleMode = object.scaleMode ?? 0;
    message.flipMode = object.flipMode ?? 0;
    message.nativeRotation = object.nativeRotation ?? 0;
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? TriggerMediaInformation_VisualMedia_Size.fromPartial(
            object.resolution,
          )
        : undefined;
    message.enabledEffectsCount = object.enabledEffectsCount ?? 0;
    message.hasEffectPreset = object.hasEffectPreset ?? false;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? TriggerMediaInformation_Transition.fromPartial(object.transition)
        : undefined;
    return message;
  },
};

function createBaseTriggerMediaInformation_VisualMedia_Size(): TriggerMediaInformation_VisualMedia_Size {
  return { width: 0, height: 0 };
}

export const TriggerMediaInformation_VisualMedia_Size = {
  encode(
    message: TriggerMediaInformation_VisualMedia_Size,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_VisualMedia_Size {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_VisualMedia_Size();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_VisualMedia_Size {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: TriggerMediaInformation_VisualMedia_Size): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerMediaInformation_VisualMedia_Size>, I>,
  >(base?: I): TriggerMediaInformation_VisualMedia_Size {
    return TriggerMediaInformation_VisualMedia_Size.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_VisualMedia_Size>, I>,
  >(object: I): TriggerMediaInformation_VisualMedia_Size {
    const message = createBaseTriggerMediaInformation_VisualMedia_Size();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseTriggerMediaInformation_Transport(): TriggerMediaInformation_Transport {
  return {
    sourceDurationRange: 0,
    hasAudioRampIn: false,
    hasAudioRampOut: false,
    hasInPoint: false,
    hasOutPoint: false,
    playRate: 0,
    playbackMarkerCount: 0,
  };
}

export const TriggerMediaInformation_Transport = {
  encode(
    message: TriggerMediaInformation_Transport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceDurationRange !== 0) {
      writer.uint32(8).int32(message.sourceDurationRange);
    }
    if (message.hasAudioRampIn !== false) {
      writer.uint32(16).bool(message.hasAudioRampIn);
    }
    if (message.hasAudioRampOut !== false) {
      writer.uint32(24).bool(message.hasAudioRampOut);
    }
    if (message.hasInPoint !== false) {
      writer.uint32(32).bool(message.hasInPoint);
    }
    if (message.hasOutPoint !== false) {
      writer.uint32(40).bool(message.hasOutPoint);
    }
    if (message.playRate !== 0) {
      writer.uint32(49).double(message.playRate);
    }
    if (message.playbackMarkerCount !== 0) {
      writer.uint32(56).uint32(message.playbackMarkerCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerMediaInformation_Transport {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerMediaInformation_Transport();
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

          message.hasAudioRampIn = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasAudioRampOut = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hasInPoint = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasOutPoint = reader.bool();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.playRate = reader.double();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.playbackMarkerCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_Transport {
    return {
      sourceDurationRange: isSet(object.sourceDurationRange)
        ? triggerMediaInformation_Transport_DurationRangeFromJSON(
            object.sourceDurationRange,
          )
        : 0,
      hasAudioRampIn: isSet(object.hasAudioRampIn)
        ? globalThis.Boolean(object.hasAudioRampIn)
        : false,
      hasAudioRampOut: isSet(object.hasAudioRampOut)
        ? globalThis.Boolean(object.hasAudioRampOut)
        : false,
      hasInPoint: isSet(object.hasInPoint)
        ? globalThis.Boolean(object.hasInPoint)
        : false,
      hasOutPoint: isSet(object.hasOutPoint)
        ? globalThis.Boolean(object.hasOutPoint)
        : false,
      playRate: isSet(object.playRate) ? globalThis.Number(object.playRate) : 0,
      playbackMarkerCount: isSet(object.playbackMarkerCount)
        ? globalThis.Number(object.playbackMarkerCount)
        : 0,
    };
  },

  toJSON(message: TriggerMediaInformation_Transport): unknown {
    const obj: any = {};
    if (message.sourceDurationRange !== 0) {
      obj.sourceDurationRange =
        triggerMediaInformation_Transport_DurationRangeToJSON(
          message.sourceDurationRange,
        );
    }
    if (message.hasAudioRampIn !== false) {
      obj.hasAudioRampIn = message.hasAudioRampIn;
    }
    if (message.hasAudioRampOut !== false) {
      obj.hasAudioRampOut = message.hasAudioRampOut;
    }
    if (message.hasInPoint !== false) {
      obj.hasInPoint = message.hasInPoint;
    }
    if (message.hasOutPoint !== false) {
      obj.hasOutPoint = message.hasOutPoint;
    }
    if (message.playRate !== 0) {
      obj.playRate = message.playRate;
    }
    if (message.playbackMarkerCount !== 0) {
      obj.playbackMarkerCount = Math.round(message.playbackMarkerCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Transport>, I>>(
    base?: I,
  ): TriggerMediaInformation_Transport {
    return TriggerMediaInformation_Transport.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_Transport>, I>,
  >(object: I): TriggerMediaInformation_Transport {
    const message = createBaseTriggerMediaInformation_Transport();
    message.sourceDurationRange = object.sourceDurationRange ?? 0;
    message.hasAudioRampIn = object.hasAudioRampIn ?? false;
    message.hasAudioRampOut = object.hasAudioRampOut ?? false;
    message.hasInPoint = object.hasInPoint ?? false;
    message.hasOutPoint = object.hasOutPoint ?? false;
    message.playRate = object.playRate ?? 0;
    message.playbackMarkerCount = object.playbackMarkerCount ?? 0;
    return message;
  },
};

function createBaseTriggerMediaInformation_Video(): TriggerMediaInformation_Video {
  return {
    visualMedia: undefined,
    playbackBehavior: 0,
    completionTarget: 0,
    softLoopEnabled: false,
    softLoopDuration: 0,
    frameRate: 0,
    audioChannelCount: 0,
    transport: undefined,
  };
}

export const TriggerMediaInformation_Video = {
  encode(
    message: TriggerMediaInformation_Video,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visualMedia !== undefined) {
      TriggerMediaInformation_VisualMedia.encode(
        message.visualMedia,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(64).int32(message.playbackBehavior);
    }
    if (message.completionTarget !== 0) {
      writer.uint32(72).int32(message.completionTarget);
    }
    if (message.softLoopEnabled !== false) {
      writer.uint32(80).bool(message.softLoopEnabled);
    }
    if (message.softLoopDuration !== 0) {
      writer.uint32(89).double(message.softLoopDuration);
    }
    if (message.frameRate !== 0) {
      writer.uint32(97).double(message.frameRate);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(104).uint32(message.audioChannelCount);
    }
    if (message.transport !== undefined) {
      TriggerMediaInformation_Transport.encode(
        message.transport,
        writer.uint32(114).fork(),
      ).ldelim();
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
        case 7:
          if (tag !== 58) {
            break;
          }

          message.visualMedia = TriggerMediaInformation_VisualMedia.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.completionTarget = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.softLoopEnabled = reader.bool();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.softLoopDuration = reader.double();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.frameRate = reader.double();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.audioChannelCount = reader.uint32();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.transport = TriggerMediaInformation_Transport.decode(
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

  fromJSON(object: any): TriggerMediaInformation_Video {
    return {
      visualMedia: isSet(object.visualMedia)
        ? TriggerMediaInformation_VisualMedia.fromJSON(object.visualMedia)
        : undefined,
      playbackBehavior: isSet(object.playbackBehavior)
        ? triggerMediaInformation_Video_PlaybackBehaviorFromJSON(
            object.playbackBehavior,
          )
        : 0,
      completionTarget: isSet(object.completionTarget)
        ? triggerMediaInformation_CompletionTargetFromJSON(
            object.completionTarget,
          )
        : 0,
      softLoopEnabled: isSet(object.softLoopEnabled)
        ? globalThis.Boolean(object.softLoopEnabled)
        : false,
      softLoopDuration: isSet(object.softLoopDuration)
        ? globalThis.Number(object.softLoopDuration)
        : 0,
      frameRate: isSet(object.frameRate)
        ? globalThis.Number(object.frameRate)
        : 0,
      audioChannelCount: isSet(object.audioChannelCount)
        ? globalThis.Number(object.audioChannelCount)
        : 0,
      transport: isSet(object.transport)
        ? TriggerMediaInformation_Transport.fromJSON(object.transport)
        : undefined,
    };
  },

  toJSON(message: TriggerMediaInformation_Video): unknown {
    const obj: any = {};
    if (message.visualMedia !== undefined) {
      obj.visualMedia = TriggerMediaInformation_VisualMedia.toJSON(
        message.visualMedia,
      );
    }
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior =
        triggerMediaInformation_Video_PlaybackBehaviorToJSON(
          message.playbackBehavior,
        );
    }
    if (message.completionTarget !== 0) {
      obj.completionTarget = triggerMediaInformation_CompletionTargetToJSON(
        message.completionTarget,
      );
    }
    if (message.softLoopEnabled !== false) {
      obj.softLoopEnabled = message.softLoopEnabled;
    }
    if (message.softLoopDuration !== 0) {
      obj.softLoopDuration = message.softLoopDuration;
    }
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    if (message.audioChannelCount !== 0) {
      obj.audioChannelCount = Math.round(message.audioChannelCount);
    }
    if (message.transport !== undefined) {
      obj.transport = TriggerMediaInformation_Transport.toJSON(
        message.transport,
      );
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
    message.visualMedia =
      object.visualMedia !== undefined && object.visualMedia !== null
        ? TriggerMediaInformation_VisualMedia.fromPartial(object.visualMedia)
        : undefined;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.completionTarget = object.completionTarget ?? 0;
    message.softLoopEnabled = object.softLoopEnabled ?? false;
    message.softLoopDuration = object.softLoopDuration ?? 0;
    message.frameRate = object.frameRate ?? 0;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.transport =
      object.transport !== undefined && object.transport !== null
        ? TriggerMediaInformation_Transport.fromPartial(object.transport)
        : undefined;
    return message;
  },
};

function createBaseTriggerMediaInformation_Audio(): TriggerMediaInformation_Audio {
  return {
    behavior: 0,
    playbackBehavior: 0,
    transition: undefined,
    audioChannelCount: 0,
    transport: undefined,
  };
}

export const TriggerMediaInformation_Audio = {
  encode(
    message: TriggerMediaInformation_Audio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.behavior !== 0) {
      writer.uint32(8).int32(message.behavior);
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(16).int32(message.playbackBehavior);
    }
    if (message.transition !== undefined) {
      TriggerMediaInformation_Transition.encode(
        message.transition,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(32).uint32(message.audioChannelCount);
    }
    if (message.transport !== undefined) {
      TriggerMediaInformation_Transport.encode(
        message.transport,
        writer.uint32(42).fork(),
      ).ldelim();
    }
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
        case 1:
          if (tag !== 8) {
            break;
          }

          message.behavior = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transition = TriggerMediaInformation_Transition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.audioChannelCount = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transport = TriggerMediaInformation_Transport.decode(
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

  fromJSON(object: any): TriggerMediaInformation_Audio {
    return {
      behavior: isSet(object.behavior)
        ? triggerMediaInformation_Audio_BehaviorFromJSON(object.behavior)
        : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? triggerMediaInformation_Audio_PlaybackBehaviorFromJSON(
            object.playbackBehavior,
          )
        : 0,
      transition: isSet(object.transition)
        ? TriggerMediaInformation_Transition.fromJSON(object.transition)
        : undefined,
      audioChannelCount: isSet(object.audioChannelCount)
        ? globalThis.Number(object.audioChannelCount)
        : 0,
      transport: isSet(object.transport)
        ? TriggerMediaInformation_Transport.fromJSON(object.transport)
        : undefined,
    };
  },

  toJSON(message: TriggerMediaInformation_Audio): unknown {
    const obj: any = {};
    if (message.behavior !== 0) {
      obj.behavior = triggerMediaInformation_Audio_BehaviorToJSON(
        message.behavior,
      );
    }
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior =
        triggerMediaInformation_Audio_PlaybackBehaviorToJSON(
          message.playbackBehavior,
        );
    }
    if (message.transition !== undefined) {
      obj.transition = TriggerMediaInformation_Transition.toJSON(
        message.transition,
      );
    }
    if (message.audioChannelCount !== 0) {
      obj.audioChannelCount = Math.round(message.audioChannelCount);
    }
    if (message.transport !== undefined) {
      obj.transport = TriggerMediaInformation_Transport.toJSON(
        message.transport,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Audio>, I>>(
    base?: I,
  ): TriggerMediaInformation_Audio {
    return TriggerMediaInformation_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation_Audio>, I>>(
    object: I,
  ): TriggerMediaInformation_Audio {
    const message = createBaseTriggerMediaInformation_Audio();
    message.behavior = object.behavior ?? 0;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? TriggerMediaInformation_Transition.fromPartial(object.transition)
        : undefined;
    message.audioChannelCount = object.audioChannelCount ?? 0;
    message.transport =
      object.transport !== undefined && object.transport !== null
        ? TriggerMediaInformation_Transport.fromPartial(object.transport)
        : undefined;
    return message;
  },
};

function createBaseTriggerMediaInformation_Image(): TriggerMediaInformation_Image {
  return { visualMedia: undefined, transition: undefined, completionTarget: 0 };
}

export const TriggerMediaInformation_Image = {
  encode(
    message: TriggerMediaInformation_Image,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visualMedia !== undefined) {
      TriggerMediaInformation_VisualMedia.encode(
        message.visualMedia,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.transition !== undefined) {
      TriggerMediaInformation_Transition.encode(
        message.transition,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.completionTarget !== 0) {
      writer.uint32(24).int32(message.completionTarget);
    }
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.visualMedia = TriggerMediaInformation_VisualMedia.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transition = TriggerMediaInformation_Transition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.completionTarget = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_Image {
    return {
      visualMedia: isSet(object.visualMedia)
        ? TriggerMediaInformation_VisualMedia.fromJSON(object.visualMedia)
        : undefined,
      transition: isSet(object.transition)
        ? TriggerMediaInformation_Transition.fromJSON(object.transition)
        : undefined,
      completionTarget: isSet(object.completionTarget)
        ? triggerMediaInformation_CompletionTargetFromJSON(
            object.completionTarget,
          )
        : 0,
    };
  },

  toJSON(message: TriggerMediaInformation_Image): unknown {
    const obj: any = {};
    if (message.visualMedia !== undefined) {
      obj.visualMedia = TriggerMediaInformation_VisualMedia.toJSON(
        message.visualMedia,
      );
    }
    if (message.transition !== undefined) {
      obj.transition = TriggerMediaInformation_Transition.toJSON(
        message.transition,
      );
    }
    if (message.completionTarget !== 0) {
      obj.completionTarget = triggerMediaInformation_CompletionTargetToJSON(
        message.completionTarget,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_Image>, I>>(
    base?: I,
  ): TriggerMediaInformation_Image {
    return TriggerMediaInformation_Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerMediaInformation_Image>, I>>(
    object: I,
  ): TriggerMediaInformation_Image {
    const message = createBaseTriggerMediaInformation_Image();
    message.visualMedia =
      object.visualMedia !== undefined && object.visualMedia !== null
        ? TriggerMediaInformation_VisualMedia.fromPartial(object.visualMedia)
        : undefined;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? TriggerMediaInformation_Transition.fromPartial(object.transition)
        : undefined;
    message.completionTarget = object.completionTarget ?? 0;
    return message;
  },
};

function createBaseTriggerMediaInformation_LiveVideo(): TriggerMediaInformation_LiveVideo {
  return { visualMedia: undefined, frameRate: 0, audioChannelCount: 0 };
}

export const TriggerMediaInformation_LiveVideo = {
  encode(
    message: TriggerMediaInformation_LiveVideo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visualMedia !== undefined) {
      TriggerMediaInformation_VisualMedia.encode(
        message.visualMedia,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.frameRate !== 0) {
      writer.uint32(17).double(message.frameRate);
    }
    if (message.audioChannelCount !== 0) {
      writer.uint32(24).uint32(message.audioChannelCount);
    }
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
        case 1:
          if (tag !== 10) {
            break;
          }

          message.visualMedia = TriggerMediaInformation_VisualMedia.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.frameRate = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.audioChannelCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerMediaInformation_LiveVideo {
    return {
      visualMedia: isSet(object.visualMedia)
        ? TriggerMediaInformation_VisualMedia.fromJSON(object.visualMedia)
        : undefined,
      frameRate: isSet(object.frameRate)
        ? globalThis.Number(object.frameRate)
        : 0,
      audioChannelCount: isSet(object.audioChannelCount)
        ? globalThis.Number(object.audioChannelCount)
        : 0,
    };
  },

  toJSON(message: TriggerMediaInformation_LiveVideo): unknown {
    const obj: any = {};
    if (message.visualMedia !== undefined) {
      obj.visualMedia = TriggerMediaInformation_VisualMedia.toJSON(
        message.visualMedia,
      );
    }
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    if (message.audioChannelCount !== 0) {
      obj.audioChannelCount = Math.round(message.audioChannelCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerMediaInformation_LiveVideo>, I>>(
    base?: I,
  ): TriggerMediaInformation_LiveVideo {
    return TriggerMediaInformation_LiveVideo.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerMediaInformation_LiveVideo>, I>,
  >(object: I): TriggerMediaInformation_LiveVideo {
    const message = createBaseTriggerMediaInformation_LiveVideo();
    message.visualMedia =
      object.visualMedia !== undefined && object.visualMedia !== null
        ? TriggerMediaInformation_VisualMedia.fromPartial(object.visualMedia)
        : undefined;
    message.frameRate = object.frameRate ?? 0;
    message.audioChannelCount = object.audioChannelCount ?? 0;
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
