/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { TriggerMediaInformation } from './analyticsTriggerMedia';

export const protobufPackage = 'rv.analytics';

export interface Trigger {
  cue?: Trigger_Cue | undefined;
  action?: Trigger_Action | undefined;
  mediaBin?: Trigger_MediaBin | undefined;
  audioBin?: Trigger_AudioBin | undefined;
}

export interface Trigger_Cue {
  slide?: Trigger_Cue_Slide | undefined;
}

export interface Trigger_Cue_Slide {
  trigger?: Trigger_Cue_Slide_Trigger | undefined;
  scrollingTextElement?: Trigger_Cue_Slide_ScrollingTextElement | undefined;
  rssFeedElement?: Trigger_Cue_Slide_RSSFeedElement | undefined;
  fileFeedElement?: Trigger_Cue_Slide_FileFeedElement | undefined;
}

export enum Trigger_Cue_Slide_DestinationLayer {
  DESTINATION_LAYER_UNKNOWN = 0,
  DESTINATION_LAYER_ANNOUNCEMENT = 1,
  DESTINATION_LAYER_PRESENTATION = 2,
  DESTINATION_LAYER_STAGE = 3,
  DESTINATION_LAYER_PROPS = 4,
  DESTINATION_LAYER_MESSAGES = 5,
  DESTINATION_LAYER_MASK = 6,
  UNRECOGNIZED = -1,
}

export function trigger_Cue_Slide_DestinationLayerFromJSON(
  object: any,
): Trigger_Cue_Slide_DestinationLayer {
  switch (object) {
    case 0:
    case 'DESTINATION_LAYER_UNKNOWN':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_UNKNOWN;
    case 1:
    case 'DESTINATION_LAYER_ANNOUNCEMENT':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_ANNOUNCEMENT;
    case 2:
    case 'DESTINATION_LAYER_PRESENTATION':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PRESENTATION;
    case 3:
    case 'DESTINATION_LAYER_STAGE':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_STAGE;
    case 4:
    case 'DESTINATION_LAYER_PROPS':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PROPS;
    case 5:
    case 'DESTINATION_LAYER_MESSAGES':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MESSAGES;
    case 6:
    case 'DESTINATION_LAYER_MASK':
      return Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MASK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Cue_Slide_DestinationLayer.UNRECOGNIZED;
  }
}

export function trigger_Cue_Slide_DestinationLayerToJSON(
  object: Trigger_Cue_Slide_DestinationLayer,
): string {
  switch (object) {
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_UNKNOWN:
      return 'DESTINATION_LAYER_UNKNOWN';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_ANNOUNCEMENT:
      return 'DESTINATION_LAYER_ANNOUNCEMENT';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PRESENTATION:
      return 'DESTINATION_LAYER_PRESENTATION';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_STAGE:
      return 'DESTINATION_LAYER_STAGE';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PROPS:
      return 'DESTINATION_LAYER_PROPS';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MESSAGES:
      return 'DESTINATION_LAYER_MESSAGES';
    case Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MASK:
      return 'DESTINATION_LAYER_MASK';
    case Trigger_Cue_Slide_DestinationLayer.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Cue_Slide_Trigger {
  objectCount: number;
  scrollingObjectCount: number;
  backgroundFxObjectCount: number;
  actionCount: number;
  hasTextFx: boolean;
  mediaTextFillObjectCount: number;
  cutOutTextFillObjectCount: number;
  backgroundBlurTextFillObjectCount: number;
  backgroundInvertTextFillObjectCount: number;
}

export interface Trigger_Cue_Slide_ScrollingTextElement {
  direction: Trigger_Cue_Slide_ScrollingTextElement_Direction;
  startPosition: Trigger_Cue_Slide_ScrollingTextElement_StartPosition;
  isRepeatEnabled: boolean;
  speed: Trigger_Cue_Slide_ScrollingTextElement_Speed;
  destinationLayer: Trigger_Cue_Slide_DestinationLayer;
}

export enum Trigger_Cue_Slide_ScrollingTextElement_Direction {
  DIRECTION_UNKNOWN = 0,
  DIRECTION_LEFT = 1,
  DIRECTION_RIGHT = 2,
  DIRECTION_UP = 3,
  DIRECTION_DOWN = 4,
  UNRECOGNIZED = -1,
}

export function trigger_Cue_Slide_ScrollingTextElement_DirectionFromJSON(
  object: any,
): Trigger_Cue_Slide_ScrollingTextElement_Direction {
  switch (object) {
    case 0:
    case 'DIRECTION_UNKNOWN':
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UNKNOWN;
    case 1:
    case 'DIRECTION_LEFT':
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_LEFT;
    case 2:
    case 'DIRECTION_RIGHT':
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_RIGHT;
    case 3:
    case 'DIRECTION_UP':
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UP;
    case 4:
    case 'DIRECTION_DOWN':
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_DOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Cue_Slide_ScrollingTextElement_Direction.UNRECOGNIZED;
  }
}

export function trigger_Cue_Slide_ScrollingTextElement_DirectionToJSON(
  object: Trigger_Cue_Slide_ScrollingTextElement_Direction,
): string {
  switch (object) {
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UNKNOWN:
      return 'DIRECTION_UNKNOWN';
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_LEFT:
      return 'DIRECTION_LEFT';
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_RIGHT:
      return 'DIRECTION_RIGHT';
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UP:
      return 'DIRECTION_UP';
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_DOWN:
      return 'DIRECTION_DOWN';
    case Trigger_Cue_Slide_ScrollingTextElement_Direction.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Trigger_Cue_Slide_ScrollingTextElement_StartPosition {
  START_POSITION_UNKNOWN = 0,
  START_POSITION_AUTOMATIC = 1,
  START_POSITION_OFF_SCREEN = 2,
  UNRECOGNIZED = -1,
}

export function trigger_Cue_Slide_ScrollingTextElement_StartPositionFromJSON(
  object: any,
): Trigger_Cue_Slide_ScrollingTextElement_StartPosition {
  switch (object) {
    case 0:
    case 'START_POSITION_UNKNOWN':
      return Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_UNKNOWN;
    case 1:
    case 'START_POSITION_AUTOMATIC':
      return Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_AUTOMATIC;
    case 2:
    case 'START_POSITION_OFF_SCREEN':
      return Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_OFF_SCREEN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Cue_Slide_ScrollingTextElement_StartPosition.UNRECOGNIZED;
  }
}

export function trigger_Cue_Slide_ScrollingTextElement_StartPositionToJSON(
  object: Trigger_Cue_Slide_ScrollingTextElement_StartPosition,
): string {
  switch (object) {
    case Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_UNKNOWN:
      return 'START_POSITION_UNKNOWN';
    case Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_AUTOMATIC:
      return 'START_POSITION_AUTOMATIC';
    case Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_OFF_SCREEN:
      return 'START_POSITION_OFF_SCREEN';
    case Trigger_Cue_Slide_ScrollingTextElement_StartPosition.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Trigger_Cue_Slide_ScrollingTextElement_Speed {
  SPEED_UNKNOWN = 0,
  SPEED_VERY_SLOW = 1,
  SPEED_SLOW = 2,
  SPEED_MEDIUM = 3,
  SPEED_FAST = 4,
  SPEED_VERY_FAST = 5,
  UNRECOGNIZED = -1,
}

export function trigger_Cue_Slide_ScrollingTextElement_SpeedFromJSON(
  object: any,
): Trigger_Cue_Slide_ScrollingTextElement_Speed {
  switch (object) {
    case 0:
    case 'SPEED_UNKNOWN':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_UNKNOWN;
    case 1:
    case 'SPEED_VERY_SLOW':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_SLOW;
    case 2:
    case 'SPEED_SLOW':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_SLOW;
    case 3:
    case 'SPEED_MEDIUM':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_MEDIUM;
    case 4:
    case 'SPEED_FAST':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_FAST;
    case 5:
    case 'SPEED_VERY_FAST':
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_FAST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Cue_Slide_ScrollingTextElement_Speed.UNRECOGNIZED;
  }
}

export function trigger_Cue_Slide_ScrollingTextElement_SpeedToJSON(
  object: Trigger_Cue_Slide_ScrollingTextElement_Speed,
): string {
  switch (object) {
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_UNKNOWN:
      return 'SPEED_UNKNOWN';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_SLOW:
      return 'SPEED_VERY_SLOW';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_SLOW:
      return 'SPEED_SLOW';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_MEDIUM:
      return 'SPEED_MEDIUM';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_FAST:
      return 'SPEED_FAST';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_FAST:
      return 'SPEED_VERY_FAST';
    case Trigger_Cue_Slide_ScrollingTextElement_Speed.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Cue_Slide_RSSFeedElement {
  content: Trigger_Cue_Slide_RSSFeedElement_Content;
  isDelimiterEnabled: boolean;
  destinationLayer: Trigger_Cue_Slide_DestinationLayer;
}

export enum Trigger_Cue_Slide_RSSFeedElement_Content {
  CONTENT_UNKNOWN = 0,
  CONTENT_TITLE = 1,
  CONTENT_TITLE_AND_DESCRIPTION = 2,
  UNRECOGNIZED = -1,
}

export function trigger_Cue_Slide_RSSFeedElement_ContentFromJSON(
  object: any,
): Trigger_Cue_Slide_RSSFeedElement_Content {
  switch (object) {
    case 0:
    case 'CONTENT_UNKNOWN':
      return Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_UNKNOWN;
    case 1:
    case 'CONTENT_TITLE':
      return Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE;
    case 2:
    case 'CONTENT_TITLE_AND_DESCRIPTION':
      return Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE_AND_DESCRIPTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Cue_Slide_RSSFeedElement_Content.UNRECOGNIZED;
  }
}

export function trigger_Cue_Slide_RSSFeedElement_ContentToJSON(
  object: Trigger_Cue_Slide_RSSFeedElement_Content,
): string {
  switch (object) {
    case Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_UNKNOWN:
      return 'CONTENT_UNKNOWN';
    case Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE:
      return 'CONTENT_TITLE';
    case Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE_AND_DESCRIPTION:
      return 'CONTENT_TITLE_AND_DESCRIPTION';
    case Trigger_Cue_Slide_RSSFeedElement_Content.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Cue_Slide_FileFeedElement {
  destinationLayer: Trigger_Cue_Slide_DestinationLayer;
}

export interface Trigger_Action {
  clear?: Trigger_Action_ClearLayer | undefined;
  media?: TriggerMediaInformation | undefined;
  mediaBinPlaylist?: Trigger_Action_MediaBinPlaylist | undefined;
  audioBinPlaylist?: Trigger_Action_AudioBinPlaylist | undefined;
  stage?: Trigger_Action_Stage | undefined;
  timer?: Trigger_Action_Timer | undefined;
  prop?: Trigger_Action_Prop | undefined;
  look?: Trigger_Action_Look | undefined;
  message?: Trigger_Action_Message | undefined;
  communications?: Trigger_Action_Communications | undefined;
  slideDestination?: Trigger_Action_SlideDestination | undefined;
  macro?: Trigger_Action_Macro | undefined;
  clearGroup?: Trigger_Action_ClearGroup | undefined;
  captureStart?: Trigger_Action_CaptureStart | undefined;
  captureStop?: Trigger_Action_CaptureStop | undefined;
}

export interface Trigger_Action_ClearLayer {}

export interface Trigger_Action_MediaBinPlaylist {}

export interface Trigger_Action_AudioBinPlaylist {}

export interface Trigger_Action_Stage {
  layoutChangeCount: number;
  totalStageScreens: number;
}

export interface Trigger_Action_SlideDestination {
  changeSlideDestination: Trigger_Action_SlideDestination_ChangeSlideDestination;
}

export enum Trigger_Action_SlideDestination_ChangeSlideDestination {
  CHANGE_SLIDE_DESTINATION_UNKNOWN = 0,
  CHANGE_SLIDE_DESTINATION_NO_CHANGE = 1,
  CHANGE_SLIDE_DESTINATION_STAGE_ONLY = 2,
  CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE = 3,
  UNRECOGNIZED = -1,
}

export function trigger_Action_SlideDestination_ChangeSlideDestinationFromJSON(
  object: any,
): Trigger_Action_SlideDestination_ChangeSlideDestination {
  switch (object) {
    case 0:
    case 'CHANGE_SLIDE_DESTINATION_UNKNOWN':
      return Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_UNKNOWN;
    case 1:
    case 'CHANGE_SLIDE_DESTINATION_NO_CHANGE':
      return Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_NO_CHANGE;
    case 2:
    case 'CHANGE_SLIDE_DESTINATION_STAGE_ONLY':
      return Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_ONLY;
    case 3:
    case 'CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE':
      return Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Action_SlideDestination_ChangeSlideDestination.UNRECOGNIZED;
  }
}

export function trigger_Action_SlideDestination_ChangeSlideDestinationToJSON(
  object: Trigger_Action_SlideDestination_ChangeSlideDestination,
): string {
  switch (object) {
    case Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_UNKNOWN:
      return 'CHANGE_SLIDE_DESTINATION_UNKNOWN';
    case Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_NO_CHANGE:
      return 'CHANGE_SLIDE_DESTINATION_NO_CHANGE';
    case Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_ONLY:
      return 'CHANGE_SLIDE_DESTINATION_STAGE_ONLY';
    case Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE:
      return 'CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE';
    case Trigger_Action_SlideDestination_ChangeSlideDestination.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Action_Timer {
  type: Trigger_Action_Timer_Type;
}

export enum Trigger_Action_Timer_Type {
  TYPE_UNKNOWN = 0,
  TYPE_START_SET_CONFIGURATION = 1,
  TYPE_START = 2,
  TYPE_STOP = 3,
  TYPE_RESET = 4,
  TYPE_STOP_SET_CONFIGURATION = 5,
  TYPE_INCREMENT = 6,
  UNRECOGNIZED = -1,
}

export function trigger_Action_Timer_TypeFromJSON(
  object: any,
): Trigger_Action_Timer_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return Trigger_Action_Timer_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_START_SET_CONFIGURATION':
      return Trigger_Action_Timer_Type.TYPE_START_SET_CONFIGURATION;
    case 2:
    case 'TYPE_START':
      return Trigger_Action_Timer_Type.TYPE_START;
    case 3:
    case 'TYPE_STOP':
      return Trigger_Action_Timer_Type.TYPE_STOP;
    case 4:
    case 'TYPE_RESET':
      return Trigger_Action_Timer_Type.TYPE_RESET;
    case 5:
    case 'TYPE_STOP_SET_CONFIGURATION':
      return Trigger_Action_Timer_Type.TYPE_STOP_SET_CONFIGURATION;
    case 6:
    case 'TYPE_INCREMENT':
      return Trigger_Action_Timer_Type.TYPE_INCREMENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Action_Timer_Type.UNRECOGNIZED;
  }
}

export function trigger_Action_Timer_TypeToJSON(
  object: Trigger_Action_Timer_Type,
): string {
  switch (object) {
    case Trigger_Action_Timer_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case Trigger_Action_Timer_Type.TYPE_START_SET_CONFIGURATION:
      return 'TYPE_START_SET_CONFIGURATION';
    case Trigger_Action_Timer_Type.TYPE_START:
      return 'TYPE_START';
    case Trigger_Action_Timer_Type.TYPE_STOP:
      return 'TYPE_STOP';
    case Trigger_Action_Timer_Type.TYPE_RESET:
      return 'TYPE_RESET';
    case Trigger_Action_Timer_Type.TYPE_STOP_SET_CONFIGURATION:
      return 'TYPE_STOP_SET_CONFIGURATION';
    case Trigger_Action_Timer_Type.TYPE_INCREMENT:
      return 'TYPE_INCREMENT';
    case Trigger_Action_Timer_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Action_Prop {
  transition: string;
}

export interface Trigger_Action_Look {
  totalScreenCount: number;
  mask: Trigger_Action_Look_Setting;
  messages: Trigger_Action_Look_Setting;
  props: Trigger_Action_Look_Setting;
  announcements: Trigger_Action_Look_Setting;
  presentationTheme: Trigger_Action_Look_Setting;
  slide: Trigger_Action_Look_Setting;
  media: Trigger_Action_Look_Setting;
  videoInput: Trigger_Action_Look_Setting;
}

export enum Trigger_Action_Look_Setting {
  SETTING_NONE = 0,
  SETTING_SOME = 1,
  SETTING_ALL = 2,
  UNRECOGNIZED = -1,
}

export function trigger_Action_Look_SettingFromJSON(
  object: any,
): Trigger_Action_Look_Setting {
  switch (object) {
    case 0:
    case 'SETTING_NONE':
      return Trigger_Action_Look_Setting.SETTING_NONE;
    case 1:
    case 'SETTING_SOME':
      return Trigger_Action_Look_Setting.SETTING_SOME;
    case 2:
    case 'SETTING_ALL':
      return Trigger_Action_Look_Setting.SETTING_ALL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Action_Look_Setting.UNRECOGNIZED;
  }
}

export function trigger_Action_Look_SettingToJSON(
  object: Trigger_Action_Look_Setting,
): string {
  switch (object) {
    case Trigger_Action_Look_Setting.SETTING_NONE:
      return 'SETTING_NONE';
    case Trigger_Action_Look_Setting.SETTING_SOME:
      return 'SETTING_SOME';
    case Trigger_Action_Look_Setting.SETTING_ALL:
      return 'SETTING_ALL';
    case Trigger_Action_Look_Setting.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Action_Message {
  tokenCount: number;
  textTokenCount: number;
  timerTokenCount: number;
  clockTokenCount: number;
  showingCount: number;
}

export interface Trigger_Action_Communications {}

export interface Trigger_Action_Macro {
  actionCount: number;
  cueActionCount: number;
  totalActionCount: number;
}

export interface Trigger_Action_ClearGroup {
  layerAudio: boolean;
  layerMessages: boolean;
  layerProps: boolean;
  layerAnnouncement: boolean;
  layerSlide: boolean;
  layerMedia: boolean;
  layerVideoInput: boolean;
}

export interface Trigger_Action_CaptureStart {
  presetType: Trigger_Action_CaptureStart_PresetType;
}

export enum Trigger_Action_CaptureStart_PresetType {
  PRESET_TYPE_UNKNOWN = 0,
  PRESET_TYPE_ACTIVE_SETTINGS = 1,
  PRESET_TYPE_CAPTURE_PRESET = 2,
  UNRECOGNIZED = -1,
}

export function trigger_Action_CaptureStart_PresetTypeFromJSON(
  object: any,
): Trigger_Action_CaptureStart_PresetType {
  switch (object) {
    case 0:
    case 'PRESET_TYPE_UNKNOWN':
      return Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_UNKNOWN;
    case 1:
    case 'PRESET_TYPE_ACTIVE_SETTINGS':
      return Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_ACTIVE_SETTINGS;
    case 2:
    case 'PRESET_TYPE_CAPTURE_PRESET':
      return Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_CAPTURE_PRESET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Trigger_Action_CaptureStart_PresetType.UNRECOGNIZED;
  }
}

export function trigger_Action_CaptureStart_PresetTypeToJSON(
  object: Trigger_Action_CaptureStart_PresetType,
): string {
  switch (object) {
    case Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_UNKNOWN:
      return 'PRESET_TYPE_UNKNOWN';
    case Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_ACTIVE_SETTINGS:
      return 'PRESET_TYPE_ACTIVE_SETTINGS';
    case Trigger_Action_CaptureStart_PresetType.PRESET_TYPE_CAPTURE_PRESET:
      return 'PRESET_TYPE_CAPTURE_PRESET';
    case Trigger_Action_CaptureStart_PresetType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Trigger_Action_CaptureStop {
  confirmBeforeStopping: boolean;
}

export interface Trigger_MediaBin {}

export interface Trigger_AudioBin {}

function createBaseTrigger(): Trigger {
  return {
    cue: undefined,
    action: undefined,
    mediaBin: undefined,
    audioBin: undefined,
  };
}

export const Trigger = {
  encode(
    message: Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cue !== undefined) {
      Trigger_Cue.encode(message.cue, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Trigger_Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaBin !== undefined) {
      Trigger_MediaBin.encode(
        message.mediaBin,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audioBin !== undefined) {
      Trigger_AudioBin.encode(
        message.audioBin,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cue = Trigger_Cue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = Trigger_Action.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mediaBin = Trigger_MediaBin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audioBin = Trigger_AudioBin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger {
    return {
      cue: isSet(object.cue) ? Trigger_Cue.fromJSON(object.cue) : undefined,
      action: isSet(object.action)
        ? Trigger_Action.fromJSON(object.action)
        : undefined,
      mediaBin: isSet(object.mediaBin)
        ? Trigger_MediaBin.fromJSON(object.mediaBin)
        : undefined,
      audioBin: isSet(object.audioBin)
        ? Trigger_AudioBin.fromJSON(object.audioBin)
        : undefined,
    };
  },

  toJSON(message: Trigger): unknown {
    const obj: any = {};
    if (message.cue !== undefined) {
      obj.cue = Trigger_Cue.toJSON(message.cue);
    }
    if (message.action !== undefined) {
      obj.action = Trigger_Action.toJSON(message.action);
    }
    if (message.mediaBin !== undefined) {
      obj.mediaBin = Trigger_MediaBin.toJSON(message.mediaBin);
    }
    if (message.audioBin !== undefined) {
      obj.audioBin = Trigger_AudioBin.toJSON(message.audioBin);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger>, I>>(base?: I): Trigger {
    return Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger>, I>>(object: I): Trigger {
    const message = createBaseTrigger();
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? Trigger_Cue.fromPartial(object.cue)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? Trigger_Action.fromPartial(object.action)
        : undefined;
    message.mediaBin =
      object.mediaBin !== undefined && object.mediaBin !== null
        ? Trigger_MediaBin.fromPartial(object.mediaBin)
        : undefined;
    message.audioBin =
      object.audioBin !== undefined && object.audioBin !== null
        ? Trigger_AudioBin.fromPartial(object.audioBin)
        : undefined;
    return message;
  },
};

function createBaseTrigger_Cue(): Trigger_Cue {
  return { slide: undefined };
}

export const Trigger_Cue = {
  encode(
    message: Trigger_Cue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slide !== undefined) {
      Trigger_Cue_Slide.encode(
        message.slide,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Cue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slide = Trigger_Cue_Slide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Cue {
    return {
      slide: isSet(object.slide)
        ? Trigger_Cue_Slide.fromJSON(object.slide)
        : undefined,
    };
  },

  toJSON(message: Trigger_Cue): unknown {
    const obj: any = {};
    if (message.slide !== undefined) {
      obj.slide = Trigger_Cue_Slide.toJSON(message.slide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Cue>, I>>(base?: I): Trigger_Cue {
    return Trigger_Cue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Cue>, I>>(
    object: I,
  ): Trigger_Cue {
    const message = createBaseTrigger_Cue();
    message.slide =
      object.slide !== undefined && object.slide !== null
        ? Trigger_Cue_Slide.fromPartial(object.slide)
        : undefined;
    return message;
  },
};

function createBaseTrigger_Cue_Slide(): Trigger_Cue_Slide {
  return {
    trigger: undefined,
    scrollingTextElement: undefined,
    rssFeedElement: undefined,
    fileFeedElement: undefined,
  };
}

export const Trigger_Cue_Slide = {
  encode(
    message: Trigger_Cue_Slide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trigger !== undefined) {
      Trigger_Cue_Slide_Trigger.encode(
        message.trigger,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.scrollingTextElement !== undefined) {
      Trigger_Cue_Slide_ScrollingTextElement.encode(
        message.scrollingTextElement,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.rssFeedElement !== undefined) {
      Trigger_Cue_Slide_RSSFeedElement.encode(
        message.rssFeedElement,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.fileFeedElement !== undefined) {
      Trigger_Cue_Slide_FileFeedElement.encode(
        message.fileFeedElement,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Cue_Slide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue_Slide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trigger = Trigger_Cue_Slide_Trigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scrollingTextElement =
            Trigger_Cue_Slide_ScrollingTextElement.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rssFeedElement = Trigger_Cue_Slide_RSSFeedElement.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fileFeedElement = Trigger_Cue_Slide_FileFeedElement.decode(
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

  fromJSON(object: any): Trigger_Cue_Slide {
    return {
      trigger: isSet(object.trigger)
        ? Trigger_Cue_Slide_Trigger.fromJSON(object.trigger)
        : undefined,
      scrollingTextElement: isSet(object.scrollingTextElement)
        ? Trigger_Cue_Slide_ScrollingTextElement.fromJSON(
            object.scrollingTextElement,
          )
        : undefined,
      rssFeedElement: isSet(object.rssFeedElement)
        ? Trigger_Cue_Slide_RSSFeedElement.fromJSON(object.rssFeedElement)
        : undefined,
      fileFeedElement: isSet(object.fileFeedElement)
        ? Trigger_Cue_Slide_FileFeedElement.fromJSON(object.fileFeedElement)
        : undefined,
    };
  },

  toJSON(message: Trigger_Cue_Slide): unknown {
    const obj: any = {};
    if (message.trigger !== undefined) {
      obj.trigger = Trigger_Cue_Slide_Trigger.toJSON(message.trigger);
    }
    if (message.scrollingTextElement !== undefined) {
      obj.scrollingTextElement = Trigger_Cue_Slide_ScrollingTextElement.toJSON(
        message.scrollingTextElement,
      );
    }
    if (message.rssFeedElement !== undefined) {
      obj.rssFeedElement = Trigger_Cue_Slide_RSSFeedElement.toJSON(
        message.rssFeedElement,
      );
    }
    if (message.fileFeedElement !== undefined) {
      obj.fileFeedElement = Trigger_Cue_Slide_FileFeedElement.toJSON(
        message.fileFeedElement,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Cue_Slide>, I>>(
    base?: I,
  ): Trigger_Cue_Slide {
    return Trigger_Cue_Slide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Cue_Slide>, I>>(
    object: I,
  ): Trigger_Cue_Slide {
    const message = createBaseTrigger_Cue_Slide();
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? Trigger_Cue_Slide_Trigger.fromPartial(object.trigger)
        : undefined;
    message.scrollingTextElement =
      object.scrollingTextElement !== undefined &&
      object.scrollingTextElement !== null
        ? Trigger_Cue_Slide_ScrollingTextElement.fromPartial(
            object.scrollingTextElement,
          )
        : undefined;
    message.rssFeedElement =
      object.rssFeedElement !== undefined && object.rssFeedElement !== null
        ? Trigger_Cue_Slide_RSSFeedElement.fromPartial(object.rssFeedElement)
        : undefined;
    message.fileFeedElement =
      object.fileFeedElement !== undefined && object.fileFeedElement !== null
        ? Trigger_Cue_Slide_FileFeedElement.fromPartial(object.fileFeedElement)
        : undefined;
    return message;
  },
};

function createBaseTrigger_Cue_Slide_Trigger(): Trigger_Cue_Slide_Trigger {
  return {
    objectCount: 0,
    scrollingObjectCount: 0,
    backgroundFxObjectCount: 0,
    actionCount: 0,
    hasTextFx: false,
    mediaTextFillObjectCount: 0,
    cutOutTextFillObjectCount: 0,
    backgroundBlurTextFillObjectCount: 0,
    backgroundInvertTextFillObjectCount: 0,
  };
}

export const Trigger_Cue_Slide_Trigger = {
  encode(
    message: Trigger_Cue_Slide_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.objectCount !== 0) {
      writer.uint32(8).int32(message.objectCount);
    }
    if (message.scrollingObjectCount !== 0) {
      writer.uint32(16).int32(message.scrollingObjectCount);
    }
    if (message.backgroundFxObjectCount !== 0) {
      writer.uint32(24).int32(message.backgroundFxObjectCount);
    }
    if (message.actionCount !== 0) {
      writer.uint32(32).int32(message.actionCount);
    }
    if (message.hasTextFx === true) {
      writer.uint32(40).bool(message.hasTextFx);
    }
    if (message.mediaTextFillObjectCount !== 0) {
      writer.uint32(48).int32(message.mediaTextFillObjectCount);
    }
    if (message.cutOutTextFillObjectCount !== 0) {
      writer.uint32(56).int32(message.cutOutTextFillObjectCount);
    }
    if (message.backgroundBlurTextFillObjectCount !== 0) {
      writer.uint32(64).int32(message.backgroundBlurTextFillObjectCount);
    }
    if (message.backgroundInvertTextFillObjectCount !== 0) {
      writer.uint32(72).int32(message.backgroundInvertTextFillObjectCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Cue_Slide_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue_Slide_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.objectCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.scrollingObjectCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.backgroundFxObjectCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.actionCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasTextFx = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.mediaTextFillObjectCount = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.cutOutTextFillObjectCount = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.backgroundBlurTextFillObjectCount = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.backgroundInvertTextFillObjectCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Cue_Slide_Trigger {
    return {
      objectCount: isSet(object.objectCount)
        ? globalThis.Number(object.objectCount)
        : 0,
      scrollingObjectCount: isSet(object.scrollingObjectCount)
        ? globalThis.Number(object.scrollingObjectCount)
        : 0,
      backgroundFxObjectCount: isSet(object.backgroundFxObjectCount)
        ? globalThis.Number(object.backgroundFxObjectCount)
        : 0,
      actionCount: isSet(object.actionCount)
        ? globalThis.Number(object.actionCount)
        : 0,
      hasTextFx: isSet(object.hasTextFx)
        ? globalThis.Boolean(object.hasTextFx)
        : false,
      mediaTextFillObjectCount: isSet(object.mediaTextFillObjectCount)
        ? globalThis.Number(object.mediaTextFillObjectCount)
        : 0,
      cutOutTextFillObjectCount: isSet(object.cutOutTextFillObjectCount)
        ? globalThis.Number(object.cutOutTextFillObjectCount)
        : 0,
      backgroundBlurTextFillObjectCount: isSet(
        object.backgroundBlurTextFillObjectCount,
      )
        ? globalThis.Number(object.backgroundBlurTextFillObjectCount)
        : 0,
      backgroundInvertTextFillObjectCount: isSet(
        object.backgroundInvertTextFillObjectCount,
      )
        ? globalThis.Number(object.backgroundInvertTextFillObjectCount)
        : 0,
    };
  },

  toJSON(message: Trigger_Cue_Slide_Trigger): unknown {
    const obj: any = {};
    if (message.objectCount !== 0) {
      obj.objectCount = Math.round(message.objectCount);
    }
    if (message.scrollingObjectCount !== 0) {
      obj.scrollingObjectCount = Math.round(message.scrollingObjectCount);
    }
    if (message.backgroundFxObjectCount !== 0) {
      obj.backgroundFxObjectCount = Math.round(message.backgroundFxObjectCount);
    }
    if (message.actionCount !== 0) {
      obj.actionCount = Math.round(message.actionCount);
    }
    if (message.hasTextFx === true) {
      obj.hasTextFx = message.hasTextFx;
    }
    if (message.mediaTextFillObjectCount !== 0) {
      obj.mediaTextFillObjectCount = Math.round(
        message.mediaTextFillObjectCount,
      );
    }
    if (message.cutOutTextFillObjectCount !== 0) {
      obj.cutOutTextFillObjectCount = Math.round(
        message.cutOutTextFillObjectCount,
      );
    }
    if (message.backgroundBlurTextFillObjectCount !== 0) {
      obj.backgroundBlurTextFillObjectCount = Math.round(
        message.backgroundBlurTextFillObjectCount,
      );
    }
    if (message.backgroundInvertTextFillObjectCount !== 0) {
      obj.backgroundInvertTextFillObjectCount = Math.round(
        message.backgroundInvertTextFillObjectCount,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Cue_Slide_Trigger>, I>>(
    base?: I,
  ): Trigger_Cue_Slide_Trigger {
    return Trigger_Cue_Slide_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Cue_Slide_Trigger>, I>>(
    object: I,
  ): Trigger_Cue_Slide_Trigger {
    const message = createBaseTrigger_Cue_Slide_Trigger();
    message.objectCount = object.objectCount ?? 0;
    message.scrollingObjectCount = object.scrollingObjectCount ?? 0;
    message.backgroundFxObjectCount = object.backgroundFxObjectCount ?? 0;
    message.actionCount = object.actionCount ?? 0;
    message.hasTextFx = object.hasTextFx ?? false;
    message.mediaTextFillObjectCount = object.mediaTextFillObjectCount ?? 0;
    message.cutOutTextFillObjectCount = object.cutOutTextFillObjectCount ?? 0;
    message.backgroundBlurTextFillObjectCount =
      object.backgroundBlurTextFillObjectCount ?? 0;
    message.backgroundInvertTextFillObjectCount =
      object.backgroundInvertTextFillObjectCount ?? 0;
    return message;
  },
};

function createBaseTrigger_Cue_Slide_ScrollingTextElement(): Trigger_Cue_Slide_ScrollingTextElement {
  return {
    direction: 0,
    startPosition: 0,
    isRepeatEnabled: false,
    speed: 0,
    destinationLayer: 0,
  };
}

export const Trigger_Cue_Slide_ScrollingTextElement = {
  encode(
    message: Trigger_Cue_Slide_ScrollingTextElement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.direction !== 0) {
      writer.uint32(8).int32(message.direction);
    }
    if (message.startPosition !== 0) {
      writer.uint32(16).int32(message.startPosition);
    }
    if (message.isRepeatEnabled === true) {
      writer.uint32(24).bool(message.isRepeatEnabled);
    }
    if (message.speed !== 0) {
      writer.uint32(32).int32(message.speed);
    }
    if (message.destinationLayer !== 0) {
      writer.uint32(40).int32(message.destinationLayer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Cue_Slide_ScrollingTextElement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue_Slide_ScrollingTextElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.startPosition = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isRepeatEnabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.speed = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Cue_Slide_ScrollingTextElement {
    return {
      direction: isSet(object.direction)
        ? trigger_Cue_Slide_ScrollingTextElement_DirectionFromJSON(
            object.direction,
          )
        : 0,
      startPosition: isSet(object.startPosition)
        ? trigger_Cue_Slide_ScrollingTextElement_StartPositionFromJSON(
            object.startPosition,
          )
        : 0,
      isRepeatEnabled: isSet(object.isRepeatEnabled)
        ? globalThis.Boolean(object.isRepeatEnabled)
        : false,
      speed: isSet(object.speed)
        ? trigger_Cue_Slide_ScrollingTextElement_SpeedFromJSON(object.speed)
        : 0,
      destinationLayer: isSet(object.destinationLayer)
        ? trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Trigger_Cue_Slide_ScrollingTextElement): unknown {
    const obj: any = {};
    if (message.direction !== 0) {
      obj.direction = trigger_Cue_Slide_ScrollingTextElement_DirectionToJSON(
        message.direction,
      );
    }
    if (message.startPosition !== 0) {
      obj.startPosition =
        trigger_Cue_Slide_ScrollingTextElement_StartPositionToJSON(
          message.startPosition,
        );
    }
    if (message.isRepeatEnabled === true) {
      obj.isRepeatEnabled = message.isRepeatEnabled;
    }
    if (message.speed !== 0) {
      obj.speed = trigger_Cue_Slide_ScrollingTextElement_SpeedToJSON(
        message.speed,
      );
    }
    if (message.destinationLayer !== 0) {
      obj.destinationLayer = trigger_Cue_Slide_DestinationLayerToJSON(
        message.destinationLayer,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Trigger_Cue_Slide_ScrollingTextElement>, I>,
  >(base?: I): Trigger_Cue_Slide_ScrollingTextElement {
    return Trigger_Cue_Slide_ScrollingTextElement.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Trigger_Cue_Slide_ScrollingTextElement>, I>,
  >(object: I): Trigger_Cue_Slide_ScrollingTextElement {
    const message = createBaseTrigger_Cue_Slide_ScrollingTextElement();
    message.direction = object.direction ?? 0;
    message.startPosition = object.startPosition ?? 0;
    message.isRepeatEnabled = object.isRepeatEnabled ?? false;
    message.speed = object.speed ?? 0;
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseTrigger_Cue_Slide_RSSFeedElement(): Trigger_Cue_Slide_RSSFeedElement {
  return { content: 0, isDelimiterEnabled: false, destinationLayer: 0 };
}

export const Trigger_Cue_Slide_RSSFeedElement = {
  encode(
    message: Trigger_Cue_Slide_RSSFeedElement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.content !== 0) {
      writer.uint32(8).int32(message.content);
    }
    if (message.isDelimiterEnabled === true) {
      writer.uint32(16).bool(message.isDelimiterEnabled);
    }
    if (message.destinationLayer !== 0) {
      writer.uint32(24).int32(message.destinationLayer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Cue_Slide_RSSFeedElement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue_Slide_RSSFeedElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.content = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isDelimiterEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Cue_Slide_RSSFeedElement {
    return {
      content: isSet(object.content)
        ? trigger_Cue_Slide_RSSFeedElement_ContentFromJSON(object.content)
        : 0,
      isDelimiterEnabled: isSet(object.isDelimiterEnabled)
        ? globalThis.Boolean(object.isDelimiterEnabled)
        : false,
      destinationLayer: isSet(object.destinationLayer)
        ? trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Trigger_Cue_Slide_RSSFeedElement): unknown {
    const obj: any = {};
    if (message.content !== 0) {
      obj.content = trigger_Cue_Slide_RSSFeedElement_ContentToJSON(
        message.content,
      );
    }
    if (message.isDelimiterEnabled === true) {
      obj.isDelimiterEnabled = message.isDelimiterEnabled;
    }
    if (message.destinationLayer !== 0) {
      obj.destinationLayer = trigger_Cue_Slide_DestinationLayerToJSON(
        message.destinationLayer,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Cue_Slide_RSSFeedElement>, I>>(
    base?: I,
  ): Trigger_Cue_Slide_RSSFeedElement {
    return Trigger_Cue_Slide_RSSFeedElement.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Trigger_Cue_Slide_RSSFeedElement>, I>,
  >(object: I): Trigger_Cue_Slide_RSSFeedElement {
    const message = createBaseTrigger_Cue_Slide_RSSFeedElement();
    message.content = object.content ?? 0;
    message.isDelimiterEnabled = object.isDelimiterEnabled ?? false;
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseTrigger_Cue_Slide_FileFeedElement(): Trigger_Cue_Slide_FileFeedElement {
  return { destinationLayer: 0 };
}

export const Trigger_Cue_Slide_FileFeedElement = {
  encode(
    message: Trigger_Cue_Slide_FileFeedElement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destinationLayer !== 0) {
      writer.uint32(8).int32(message.destinationLayer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Cue_Slide_FileFeedElement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Cue_Slide_FileFeedElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Cue_Slide_FileFeedElement {
    return {
      destinationLayer: isSet(object.destinationLayer)
        ? trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Trigger_Cue_Slide_FileFeedElement): unknown {
    const obj: any = {};
    if (message.destinationLayer !== 0) {
      obj.destinationLayer = trigger_Cue_Slide_DestinationLayerToJSON(
        message.destinationLayer,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Cue_Slide_FileFeedElement>, I>>(
    base?: I,
  ): Trigger_Cue_Slide_FileFeedElement {
    return Trigger_Cue_Slide_FileFeedElement.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Trigger_Cue_Slide_FileFeedElement>, I>,
  >(object: I): Trigger_Cue_Slide_FileFeedElement {
    const message = createBaseTrigger_Cue_Slide_FileFeedElement();
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseTrigger_Action(): Trigger_Action {
  return {
    clear: undefined,
    media: undefined,
    mediaBinPlaylist: undefined,
    audioBinPlaylist: undefined,
    stage: undefined,
    timer: undefined,
    prop: undefined,
    look: undefined,
    message: undefined,
    communications: undefined,
    slideDestination: undefined,
    macro: undefined,
    clearGroup: undefined,
    captureStart: undefined,
    captureStop: undefined,
  };
}

export const Trigger_Action = {
  encode(
    message: Trigger_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clear !== undefined) {
      Trigger_Action_ClearLayer.encode(
        message.clear,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      TriggerMediaInformation.encode(
        message.media,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.mediaBinPlaylist !== undefined) {
      Trigger_Action_MediaBinPlaylist.encode(
        message.mediaBinPlaylist,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audioBinPlaylist !== undefined) {
      Trigger_Action_AudioBinPlaylist.encode(
        message.audioBinPlaylist,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.stage !== undefined) {
      Trigger_Action_Stage.encode(
        message.stage,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.timer !== undefined) {
      Trigger_Action_Timer.encode(
        message.timer,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.prop !== undefined) {
      Trigger_Action_Prop.encode(
        message.prop,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.look !== undefined) {
      Trigger_Action_Look.encode(
        message.look,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.message !== undefined) {
      Trigger_Action_Message.encode(
        message.message,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.communications !== undefined) {
      Trigger_Action_Communications.encode(
        message.communications,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.slideDestination !== undefined) {
      Trigger_Action_SlideDestination.encode(
        message.slideDestination,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.macro !== undefined) {
      Trigger_Action_Macro.encode(
        message.macro,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.clearGroup !== undefined) {
      Trigger_Action_ClearGroup.encode(
        message.clearGroup,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.captureStart !== undefined) {
      Trigger_Action_CaptureStart.encode(
        message.captureStart,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.captureStop !== undefined) {
      Trigger_Action_CaptureStop.encode(
        message.captureStop,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clear = Trigger_Action_ClearLayer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.media = TriggerMediaInformation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mediaBinPlaylist = Trigger_Action_MediaBinPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audioBinPlaylist = Trigger_Action_AudioBinPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stage = Trigger_Action_Stage.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timer = Trigger_Action_Timer.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.prop = Trigger_Action_Prop.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.look = Trigger_Action_Look.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.message = Trigger_Action_Message.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.communications = Trigger_Action_Communications.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.slideDestination = Trigger_Action_SlideDestination.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.macro = Trigger_Action_Macro.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.clearGroup = Trigger_Action_ClearGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.captureStart = Trigger_Action_CaptureStart.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.captureStop = Trigger_Action_CaptureStop.decode(
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

  fromJSON(object: any): Trigger_Action {
    return {
      clear: isSet(object.clear)
        ? Trigger_Action_ClearLayer.fromJSON(object.clear)
        : undefined,
      media: isSet(object.media)
        ? TriggerMediaInformation.fromJSON(object.media)
        : undefined,
      mediaBinPlaylist: isSet(object.mediaBinPlaylist)
        ? Trigger_Action_MediaBinPlaylist.fromJSON(object.mediaBinPlaylist)
        : undefined,
      audioBinPlaylist: isSet(object.audioBinPlaylist)
        ? Trigger_Action_AudioBinPlaylist.fromJSON(object.audioBinPlaylist)
        : undefined,
      stage: isSet(object.stage)
        ? Trigger_Action_Stage.fromJSON(object.stage)
        : undefined,
      timer: isSet(object.timer)
        ? Trigger_Action_Timer.fromJSON(object.timer)
        : undefined,
      prop: isSet(object.prop)
        ? Trigger_Action_Prop.fromJSON(object.prop)
        : undefined,
      look: isSet(object.look)
        ? Trigger_Action_Look.fromJSON(object.look)
        : undefined,
      message: isSet(object.message)
        ? Trigger_Action_Message.fromJSON(object.message)
        : undefined,
      communications: isSet(object.communications)
        ? Trigger_Action_Communications.fromJSON(object.communications)
        : undefined,
      slideDestination: isSet(object.slideDestination)
        ? Trigger_Action_SlideDestination.fromJSON(object.slideDestination)
        : undefined,
      macro: isSet(object.macro)
        ? Trigger_Action_Macro.fromJSON(object.macro)
        : undefined,
      clearGroup: isSet(object.clearGroup)
        ? Trigger_Action_ClearGroup.fromJSON(object.clearGroup)
        : undefined,
      captureStart: isSet(object.captureStart)
        ? Trigger_Action_CaptureStart.fromJSON(object.captureStart)
        : undefined,
      captureStop: isSet(object.captureStop)
        ? Trigger_Action_CaptureStop.fromJSON(object.captureStop)
        : undefined,
    };
  },

  toJSON(message: Trigger_Action): unknown {
    const obj: any = {};
    if (message.clear !== undefined) {
      obj.clear = Trigger_Action_ClearLayer.toJSON(message.clear);
    }
    if (message.media !== undefined) {
      obj.media = TriggerMediaInformation.toJSON(message.media);
    }
    if (message.mediaBinPlaylist !== undefined) {
      obj.mediaBinPlaylist = Trigger_Action_MediaBinPlaylist.toJSON(
        message.mediaBinPlaylist,
      );
    }
    if (message.audioBinPlaylist !== undefined) {
      obj.audioBinPlaylist = Trigger_Action_AudioBinPlaylist.toJSON(
        message.audioBinPlaylist,
      );
    }
    if (message.stage !== undefined) {
      obj.stage = Trigger_Action_Stage.toJSON(message.stage);
    }
    if (message.timer !== undefined) {
      obj.timer = Trigger_Action_Timer.toJSON(message.timer);
    }
    if (message.prop !== undefined) {
      obj.prop = Trigger_Action_Prop.toJSON(message.prop);
    }
    if (message.look !== undefined) {
      obj.look = Trigger_Action_Look.toJSON(message.look);
    }
    if (message.message !== undefined) {
      obj.message = Trigger_Action_Message.toJSON(message.message);
    }
    if (message.communications !== undefined) {
      obj.communications = Trigger_Action_Communications.toJSON(
        message.communications,
      );
    }
    if (message.slideDestination !== undefined) {
      obj.slideDestination = Trigger_Action_SlideDestination.toJSON(
        message.slideDestination,
      );
    }
    if (message.macro !== undefined) {
      obj.macro = Trigger_Action_Macro.toJSON(message.macro);
    }
    if (message.clearGroup !== undefined) {
      obj.clearGroup = Trigger_Action_ClearGroup.toJSON(message.clearGroup);
    }
    if (message.captureStart !== undefined) {
      obj.captureStart = Trigger_Action_CaptureStart.toJSON(
        message.captureStart,
      );
    }
    if (message.captureStop !== undefined) {
      obj.captureStop = Trigger_Action_CaptureStop.toJSON(message.captureStop);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action>, I>>(
    base?: I,
  ): Trigger_Action {
    return Trigger_Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action>, I>>(
    object: I,
  ): Trigger_Action {
    const message = createBaseTrigger_Action();
    message.clear =
      object.clear !== undefined && object.clear !== null
        ? Trigger_Action_ClearLayer.fromPartial(object.clear)
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? TriggerMediaInformation.fromPartial(object.media)
        : undefined;
    message.mediaBinPlaylist =
      object.mediaBinPlaylist !== undefined && object.mediaBinPlaylist !== null
        ? Trigger_Action_MediaBinPlaylist.fromPartial(object.mediaBinPlaylist)
        : undefined;
    message.audioBinPlaylist =
      object.audioBinPlaylist !== undefined && object.audioBinPlaylist !== null
        ? Trigger_Action_AudioBinPlaylist.fromPartial(object.audioBinPlaylist)
        : undefined;
    message.stage =
      object.stage !== undefined && object.stage !== null
        ? Trigger_Action_Stage.fromPartial(object.stage)
        : undefined;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Trigger_Action_Timer.fromPartial(object.timer)
        : undefined;
    message.prop =
      object.prop !== undefined && object.prop !== null
        ? Trigger_Action_Prop.fromPartial(object.prop)
        : undefined;
    message.look =
      object.look !== undefined && object.look !== null
        ? Trigger_Action_Look.fromPartial(object.look)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? Trigger_Action_Message.fromPartial(object.message)
        : undefined;
    message.communications =
      object.communications !== undefined && object.communications !== null
        ? Trigger_Action_Communications.fromPartial(object.communications)
        : undefined;
    message.slideDestination =
      object.slideDestination !== undefined && object.slideDestination !== null
        ? Trigger_Action_SlideDestination.fromPartial(object.slideDestination)
        : undefined;
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? Trigger_Action_Macro.fromPartial(object.macro)
        : undefined;
    message.clearGroup =
      object.clearGroup !== undefined && object.clearGroup !== null
        ? Trigger_Action_ClearGroup.fromPartial(object.clearGroup)
        : undefined;
    message.captureStart =
      object.captureStart !== undefined && object.captureStart !== null
        ? Trigger_Action_CaptureStart.fromPartial(object.captureStart)
        : undefined;
    message.captureStop =
      object.captureStop !== undefined && object.captureStop !== null
        ? Trigger_Action_CaptureStop.fromPartial(object.captureStop)
        : undefined;
    return message;
  },
};

function createBaseTrigger_Action_ClearLayer(): Trigger_Action_ClearLayer {
  return {};
}

export const Trigger_Action_ClearLayer = {
  encode(
    _: Trigger_Action_ClearLayer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_ClearLayer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_ClearLayer();
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

  fromJSON(_: any): Trigger_Action_ClearLayer {
    return {};
  },

  toJSON(_: Trigger_Action_ClearLayer): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_ClearLayer>, I>>(
    base?: I,
  ): Trigger_Action_ClearLayer {
    return Trigger_Action_ClearLayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_ClearLayer>, I>>(
    _: I,
  ): Trigger_Action_ClearLayer {
    const message = createBaseTrigger_Action_ClearLayer();
    return message;
  },
};

function createBaseTrigger_Action_MediaBinPlaylist(): Trigger_Action_MediaBinPlaylist {
  return {};
}

export const Trigger_Action_MediaBinPlaylist = {
  encode(
    _: Trigger_Action_MediaBinPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_MediaBinPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_MediaBinPlaylist();
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

  fromJSON(_: any): Trigger_Action_MediaBinPlaylist {
    return {};
  },

  toJSON(_: Trigger_Action_MediaBinPlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_MediaBinPlaylist>, I>>(
    base?: I,
  ): Trigger_Action_MediaBinPlaylist {
    return Trigger_Action_MediaBinPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_MediaBinPlaylist>, I>>(
    _: I,
  ): Trigger_Action_MediaBinPlaylist {
    const message = createBaseTrigger_Action_MediaBinPlaylist();
    return message;
  },
};

function createBaseTrigger_Action_AudioBinPlaylist(): Trigger_Action_AudioBinPlaylist {
  return {};
}

export const Trigger_Action_AudioBinPlaylist = {
  encode(
    _: Trigger_Action_AudioBinPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_AudioBinPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_AudioBinPlaylist();
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

  fromJSON(_: any): Trigger_Action_AudioBinPlaylist {
    return {};
  },

  toJSON(_: Trigger_Action_AudioBinPlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_AudioBinPlaylist>, I>>(
    base?: I,
  ): Trigger_Action_AudioBinPlaylist {
    return Trigger_Action_AudioBinPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_AudioBinPlaylist>, I>>(
    _: I,
  ): Trigger_Action_AudioBinPlaylist {
    const message = createBaseTrigger_Action_AudioBinPlaylist();
    return message;
  },
};

function createBaseTrigger_Action_Stage(): Trigger_Action_Stage {
  return { layoutChangeCount: 0, totalStageScreens: 0 };
}

export const Trigger_Action_Stage = {
  encode(
    message: Trigger_Action_Stage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layoutChangeCount !== 0) {
      writer.uint32(8).int32(message.layoutChangeCount);
    }
    if (message.totalStageScreens !== 0) {
      writer.uint32(16).int32(message.totalStageScreens);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_Stage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Stage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layoutChangeCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalStageScreens = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Stage {
    return {
      layoutChangeCount: isSet(object.layoutChangeCount)
        ? globalThis.Number(object.layoutChangeCount)
        : 0,
      totalStageScreens: isSet(object.totalStageScreens)
        ? globalThis.Number(object.totalStageScreens)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_Stage): unknown {
    const obj: any = {};
    if (message.layoutChangeCount !== 0) {
      obj.layoutChangeCount = Math.round(message.layoutChangeCount);
    }
    if (message.totalStageScreens !== 0) {
      obj.totalStageScreens = Math.round(message.totalStageScreens);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Stage>, I>>(
    base?: I,
  ): Trigger_Action_Stage {
    return Trigger_Action_Stage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Stage>, I>>(
    object: I,
  ): Trigger_Action_Stage {
    const message = createBaseTrigger_Action_Stage();
    message.layoutChangeCount = object.layoutChangeCount ?? 0;
    message.totalStageScreens = object.totalStageScreens ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_SlideDestination(): Trigger_Action_SlideDestination {
  return { changeSlideDestination: 0 };
}

export const Trigger_Action_SlideDestination = {
  encode(
    message: Trigger_Action_SlideDestination,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.changeSlideDestination !== 0) {
      writer.uint32(8).int32(message.changeSlideDestination);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_SlideDestination {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_SlideDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.changeSlideDestination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_SlideDestination {
    return {
      changeSlideDestination: isSet(object.changeSlideDestination)
        ? trigger_Action_SlideDestination_ChangeSlideDestinationFromJSON(
            object.changeSlideDestination,
          )
        : 0,
    };
  },

  toJSON(message: Trigger_Action_SlideDestination): unknown {
    const obj: any = {};
    if (message.changeSlideDestination !== 0) {
      obj.changeSlideDestination =
        trigger_Action_SlideDestination_ChangeSlideDestinationToJSON(
          message.changeSlideDestination,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_SlideDestination>, I>>(
    base?: I,
  ): Trigger_Action_SlideDestination {
    return Trigger_Action_SlideDestination.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_SlideDestination>, I>>(
    object: I,
  ): Trigger_Action_SlideDestination {
    const message = createBaseTrigger_Action_SlideDestination();
    message.changeSlideDestination = object.changeSlideDestination ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_Timer(): Trigger_Action_Timer {
  return { type: 0 };
}

export const Trigger_Action_Timer = {
  encode(
    message: Trigger_Action_Timer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_Timer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Timer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Timer {
    return {
      type: isSet(object.type)
        ? trigger_Action_Timer_TypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_Timer): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = trigger_Action_Timer_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Timer>, I>>(
    base?: I,
  ): Trigger_Action_Timer {
    return Trigger_Action_Timer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Timer>, I>>(
    object: I,
  ): Trigger_Action_Timer {
    const message = createBaseTrigger_Action_Timer();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_Prop(): Trigger_Action_Prop {
  return { transition: '' };
}

export const Trigger_Action_Prop = {
  encode(
    message: Trigger_Action_Prop,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.transition !== '') {
      writer.uint32(10).string(message.transition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Action_Prop {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Prop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transition = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Prop {
    return {
      transition: isSet(object.transition)
        ? globalThis.String(object.transition)
        : '',
    };
  },

  toJSON(message: Trigger_Action_Prop): unknown {
    const obj: any = {};
    if (message.transition !== '') {
      obj.transition = message.transition;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Prop>, I>>(
    base?: I,
  ): Trigger_Action_Prop {
    return Trigger_Action_Prop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Prop>, I>>(
    object: I,
  ): Trigger_Action_Prop {
    const message = createBaseTrigger_Action_Prop();
    message.transition = object.transition ?? '';
    return message;
  },
};

function createBaseTrigger_Action_Look(): Trigger_Action_Look {
  return {
    totalScreenCount: 0,
    mask: 0,
    messages: 0,
    props: 0,
    announcements: 0,
    presentationTheme: 0,
    slide: 0,
    media: 0,
    videoInput: 0,
  };
}

export const Trigger_Action_Look = {
  encode(
    message: Trigger_Action_Look,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScreenCount !== 0) {
      writer.uint32(8).int32(message.totalScreenCount);
    }
    if (message.mask !== 0) {
      writer.uint32(16).int32(message.mask);
    }
    if (message.messages !== 0) {
      writer.uint32(24).int32(message.messages);
    }
    if (message.props !== 0) {
      writer.uint32(32).int32(message.props);
    }
    if (message.announcements !== 0) {
      writer.uint32(40).int32(message.announcements);
    }
    if (message.presentationTheme !== 0) {
      writer.uint32(48).int32(message.presentationTheme);
    }
    if (message.slide !== 0) {
      writer.uint32(56).int32(message.slide);
    }
    if (message.media !== 0) {
      writer.uint32(64).int32(message.media);
    }
    if (message.videoInput !== 0) {
      writer.uint32(72).int32(message.videoInput);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_Action_Look {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Look();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalScreenCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mask = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.messages = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.props = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.announcements = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.presentationTheme = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.slide = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.media = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.videoInput = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Look {
    return {
      totalScreenCount: isSet(object.totalScreenCount)
        ? globalThis.Number(object.totalScreenCount)
        : 0,
      mask: isSet(object.mask)
        ? trigger_Action_Look_SettingFromJSON(object.mask)
        : 0,
      messages: isSet(object.messages)
        ? trigger_Action_Look_SettingFromJSON(object.messages)
        : 0,
      props: isSet(object.props)
        ? trigger_Action_Look_SettingFromJSON(object.props)
        : 0,
      announcements: isSet(object.announcements)
        ? trigger_Action_Look_SettingFromJSON(object.announcements)
        : 0,
      presentationTheme: isSet(object.presentationTheme)
        ? trigger_Action_Look_SettingFromJSON(object.presentationTheme)
        : 0,
      slide: isSet(object.slide)
        ? trigger_Action_Look_SettingFromJSON(object.slide)
        : 0,
      media: isSet(object.media)
        ? trigger_Action_Look_SettingFromJSON(object.media)
        : 0,
      videoInput: isSet(object.videoInput)
        ? trigger_Action_Look_SettingFromJSON(object.videoInput)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_Look): unknown {
    const obj: any = {};
    if (message.totalScreenCount !== 0) {
      obj.totalScreenCount = Math.round(message.totalScreenCount);
    }
    if (message.mask !== 0) {
      obj.mask = trigger_Action_Look_SettingToJSON(message.mask);
    }
    if (message.messages !== 0) {
      obj.messages = trigger_Action_Look_SettingToJSON(message.messages);
    }
    if (message.props !== 0) {
      obj.props = trigger_Action_Look_SettingToJSON(message.props);
    }
    if (message.announcements !== 0) {
      obj.announcements = trigger_Action_Look_SettingToJSON(
        message.announcements,
      );
    }
    if (message.presentationTheme !== 0) {
      obj.presentationTheme = trigger_Action_Look_SettingToJSON(
        message.presentationTheme,
      );
    }
    if (message.slide !== 0) {
      obj.slide = trigger_Action_Look_SettingToJSON(message.slide);
    }
    if (message.media !== 0) {
      obj.media = trigger_Action_Look_SettingToJSON(message.media);
    }
    if (message.videoInput !== 0) {
      obj.videoInput = trigger_Action_Look_SettingToJSON(message.videoInput);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Look>, I>>(
    base?: I,
  ): Trigger_Action_Look {
    return Trigger_Action_Look.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Look>, I>>(
    object: I,
  ): Trigger_Action_Look {
    const message = createBaseTrigger_Action_Look();
    message.totalScreenCount = object.totalScreenCount ?? 0;
    message.mask = object.mask ?? 0;
    message.messages = object.messages ?? 0;
    message.props = object.props ?? 0;
    message.announcements = object.announcements ?? 0;
    message.presentationTheme = object.presentationTheme ?? 0;
    message.slide = object.slide ?? 0;
    message.media = object.media ?? 0;
    message.videoInput = object.videoInput ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_Message(): Trigger_Action_Message {
  return {
    tokenCount: 0,
    textTokenCount: 0,
    timerTokenCount: 0,
    clockTokenCount: 0,
    showingCount: 0,
  };
}

export const Trigger_Action_Message = {
  encode(
    message: Trigger_Action_Message,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenCount !== 0) {
      writer.uint32(8).int32(message.tokenCount);
    }
    if (message.textTokenCount !== 0) {
      writer.uint32(16).int32(message.textTokenCount);
    }
    if (message.timerTokenCount !== 0) {
      writer.uint32(24).int32(message.timerTokenCount);
    }
    if (message.clockTokenCount !== 0) {
      writer.uint32(32).int32(message.clockTokenCount);
    }
    if (message.showingCount !== 0) {
      writer.uint32(40).int32(message.showingCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_Message {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.tokenCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.textTokenCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timerTokenCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.clockTokenCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.showingCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Message {
    return {
      tokenCount: isSet(object.tokenCount)
        ? globalThis.Number(object.tokenCount)
        : 0,
      textTokenCount: isSet(object.textTokenCount)
        ? globalThis.Number(object.textTokenCount)
        : 0,
      timerTokenCount: isSet(object.timerTokenCount)
        ? globalThis.Number(object.timerTokenCount)
        : 0,
      clockTokenCount: isSet(object.clockTokenCount)
        ? globalThis.Number(object.clockTokenCount)
        : 0,
      showingCount: isSet(object.showingCount)
        ? globalThis.Number(object.showingCount)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_Message): unknown {
    const obj: any = {};
    if (message.tokenCount !== 0) {
      obj.tokenCount = Math.round(message.tokenCount);
    }
    if (message.textTokenCount !== 0) {
      obj.textTokenCount = Math.round(message.textTokenCount);
    }
    if (message.timerTokenCount !== 0) {
      obj.timerTokenCount = Math.round(message.timerTokenCount);
    }
    if (message.clockTokenCount !== 0) {
      obj.clockTokenCount = Math.round(message.clockTokenCount);
    }
    if (message.showingCount !== 0) {
      obj.showingCount = Math.round(message.showingCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Message>, I>>(
    base?: I,
  ): Trigger_Action_Message {
    return Trigger_Action_Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Message>, I>>(
    object: I,
  ): Trigger_Action_Message {
    const message = createBaseTrigger_Action_Message();
    message.tokenCount = object.tokenCount ?? 0;
    message.textTokenCount = object.textTokenCount ?? 0;
    message.timerTokenCount = object.timerTokenCount ?? 0;
    message.clockTokenCount = object.clockTokenCount ?? 0;
    message.showingCount = object.showingCount ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_Communications(): Trigger_Action_Communications {
  return {};
}

export const Trigger_Action_Communications = {
  encode(
    _: Trigger_Action_Communications,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_Communications {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Communications();
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

  fromJSON(_: any): Trigger_Action_Communications {
    return {};
  },

  toJSON(_: Trigger_Action_Communications): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Communications>, I>>(
    base?: I,
  ): Trigger_Action_Communications {
    return Trigger_Action_Communications.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Communications>, I>>(
    _: I,
  ): Trigger_Action_Communications {
    const message = createBaseTrigger_Action_Communications();
    return message;
  },
};

function createBaseTrigger_Action_Macro(): Trigger_Action_Macro {
  return { actionCount: 0, cueActionCount: 0, totalActionCount: 0 };
}

export const Trigger_Action_Macro = {
  encode(
    message: Trigger_Action_Macro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.actionCount !== 0) {
      writer.uint32(8).int32(message.actionCount);
    }
    if (message.cueActionCount !== 0) {
      writer.uint32(16).int32(message.cueActionCount);
    }
    if (message.totalActionCount !== 0) {
      writer.uint32(24).int32(message.totalActionCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_Macro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.actionCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cueActionCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalActionCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_Macro {
    return {
      actionCount: isSet(object.actionCount)
        ? globalThis.Number(object.actionCount)
        : 0,
      cueActionCount: isSet(object.cueActionCount)
        ? globalThis.Number(object.cueActionCount)
        : 0,
      totalActionCount: isSet(object.totalActionCount)
        ? globalThis.Number(object.totalActionCount)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_Macro): unknown {
    const obj: any = {};
    if (message.actionCount !== 0) {
      obj.actionCount = Math.round(message.actionCount);
    }
    if (message.cueActionCount !== 0) {
      obj.cueActionCount = Math.round(message.cueActionCount);
    }
    if (message.totalActionCount !== 0) {
      obj.totalActionCount = Math.round(message.totalActionCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_Macro>, I>>(
    base?: I,
  ): Trigger_Action_Macro {
    return Trigger_Action_Macro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_Macro>, I>>(
    object: I,
  ): Trigger_Action_Macro {
    const message = createBaseTrigger_Action_Macro();
    message.actionCount = object.actionCount ?? 0;
    message.cueActionCount = object.cueActionCount ?? 0;
    message.totalActionCount = object.totalActionCount ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_ClearGroup(): Trigger_Action_ClearGroup {
  return {
    layerAudio: false,
    layerMessages: false,
    layerProps: false,
    layerAnnouncement: false,
    layerSlide: false,
    layerMedia: false,
    layerVideoInput: false,
  };
}

export const Trigger_Action_ClearGroup = {
  encode(
    message: Trigger_Action_ClearGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layerAudio === true) {
      writer.uint32(8).bool(message.layerAudio);
    }
    if (message.layerMessages === true) {
      writer.uint32(16).bool(message.layerMessages);
    }
    if (message.layerProps === true) {
      writer.uint32(24).bool(message.layerProps);
    }
    if (message.layerAnnouncement === true) {
      writer.uint32(32).bool(message.layerAnnouncement);
    }
    if (message.layerSlide === true) {
      writer.uint32(40).bool(message.layerSlide);
    }
    if (message.layerMedia === true) {
      writer.uint32(48).bool(message.layerMedia);
    }
    if (message.layerVideoInput === true) {
      writer.uint32(56).bool(message.layerVideoInput);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_ClearGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layerAudio = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.layerMessages = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.layerProps = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.layerAnnouncement = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.layerSlide = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.layerMedia = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.layerVideoInput = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_ClearGroup {
    return {
      layerAudio: isSet(object.layerAudio)
        ? globalThis.Boolean(object.layerAudio)
        : false,
      layerMessages: isSet(object.layerMessages)
        ? globalThis.Boolean(object.layerMessages)
        : false,
      layerProps: isSet(object.layerProps)
        ? globalThis.Boolean(object.layerProps)
        : false,
      layerAnnouncement: isSet(object.layerAnnouncement)
        ? globalThis.Boolean(object.layerAnnouncement)
        : false,
      layerSlide: isSet(object.layerSlide)
        ? globalThis.Boolean(object.layerSlide)
        : false,
      layerMedia: isSet(object.layerMedia)
        ? globalThis.Boolean(object.layerMedia)
        : false,
      layerVideoInput: isSet(object.layerVideoInput)
        ? globalThis.Boolean(object.layerVideoInput)
        : false,
    };
  },

  toJSON(message: Trigger_Action_ClearGroup): unknown {
    const obj: any = {};
    if (message.layerAudio === true) {
      obj.layerAudio = message.layerAudio;
    }
    if (message.layerMessages === true) {
      obj.layerMessages = message.layerMessages;
    }
    if (message.layerProps === true) {
      obj.layerProps = message.layerProps;
    }
    if (message.layerAnnouncement === true) {
      obj.layerAnnouncement = message.layerAnnouncement;
    }
    if (message.layerSlide === true) {
      obj.layerSlide = message.layerSlide;
    }
    if (message.layerMedia === true) {
      obj.layerMedia = message.layerMedia;
    }
    if (message.layerVideoInput === true) {
      obj.layerVideoInput = message.layerVideoInput;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_ClearGroup>, I>>(
    base?: I,
  ): Trigger_Action_ClearGroup {
    return Trigger_Action_ClearGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_ClearGroup>, I>>(
    object: I,
  ): Trigger_Action_ClearGroup {
    const message = createBaseTrigger_Action_ClearGroup();
    message.layerAudio = object.layerAudio ?? false;
    message.layerMessages = object.layerMessages ?? false;
    message.layerProps = object.layerProps ?? false;
    message.layerAnnouncement = object.layerAnnouncement ?? false;
    message.layerSlide = object.layerSlide ?? false;
    message.layerMedia = object.layerMedia ?? false;
    message.layerVideoInput = object.layerVideoInput ?? false;
    return message;
  },
};

function createBaseTrigger_Action_CaptureStart(): Trigger_Action_CaptureStart {
  return { presetType: 0 };
}

export const Trigger_Action_CaptureStart = {
  encode(
    message: Trigger_Action_CaptureStart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presetType !== 0) {
      writer.uint32(8).int32(message.presetType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_CaptureStart {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_CaptureStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.presetType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_CaptureStart {
    return {
      presetType: isSet(object.presetType)
        ? trigger_Action_CaptureStart_PresetTypeFromJSON(object.presetType)
        : 0,
    };
  },

  toJSON(message: Trigger_Action_CaptureStart): unknown {
    const obj: any = {};
    if (message.presetType !== 0) {
      obj.presetType = trigger_Action_CaptureStart_PresetTypeToJSON(
        message.presetType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_CaptureStart>, I>>(
    base?: I,
  ): Trigger_Action_CaptureStart {
    return Trigger_Action_CaptureStart.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_CaptureStart>, I>>(
    object: I,
  ): Trigger_Action_CaptureStart {
    const message = createBaseTrigger_Action_CaptureStart();
    message.presetType = object.presetType ?? 0;
    return message;
  },
};

function createBaseTrigger_Action_CaptureStop(): Trigger_Action_CaptureStop {
  return { confirmBeforeStopping: false };
}

export const Trigger_Action_CaptureStop = {
  encode(
    message: Trigger_Action_CaptureStop,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.confirmBeforeStopping === true) {
      writer.uint32(8).bool(message.confirmBeforeStopping);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Trigger_Action_CaptureStop {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_Action_CaptureStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.confirmBeforeStopping = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trigger_Action_CaptureStop {
    return {
      confirmBeforeStopping: isSet(object.confirmBeforeStopping)
        ? globalThis.Boolean(object.confirmBeforeStopping)
        : false,
    };
  },

  toJSON(message: Trigger_Action_CaptureStop): unknown {
    const obj: any = {};
    if (message.confirmBeforeStopping === true) {
      obj.confirmBeforeStopping = message.confirmBeforeStopping;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_Action_CaptureStop>, I>>(
    base?: I,
  ): Trigger_Action_CaptureStop {
    return Trigger_Action_CaptureStop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_Action_CaptureStop>, I>>(
    object: I,
  ): Trigger_Action_CaptureStop {
    const message = createBaseTrigger_Action_CaptureStop();
    message.confirmBeforeStopping = object.confirmBeforeStopping ?? false;
    return message;
  },
};

function createBaseTrigger_MediaBin(): Trigger_MediaBin {
  return {};
}

export const Trigger_MediaBin = {
  encode(
    _: Trigger_MediaBin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_MediaBin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_MediaBin();
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

  fromJSON(_: any): Trigger_MediaBin {
    return {};
  },

  toJSON(_: Trigger_MediaBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_MediaBin>, I>>(
    base?: I,
  ): Trigger_MediaBin {
    return Trigger_MediaBin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_MediaBin>, I>>(
    _: I,
  ): Trigger_MediaBin {
    const message = createBaseTrigger_MediaBin();
    return message;
  },
};

function createBaseTrigger_AudioBin(): Trigger_AudioBin {
  return {};
}

export const Trigger_AudioBin = {
  encode(
    _: Trigger_AudioBin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trigger_AudioBin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrigger_AudioBin();
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

  fromJSON(_: any): Trigger_AudioBin {
    return {};
  },

  toJSON(_: Trigger_AudioBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Trigger_AudioBin>, I>>(
    base?: I,
  ): Trigger_AudioBin {
    return Trigger_AudioBin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trigger_AudioBin>, I>>(
    _: I,
  ): Trigger_AudioBin {
    const message = createBaseTrigger_AudioBin();
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
