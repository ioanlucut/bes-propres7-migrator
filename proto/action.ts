/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Background } from "./background";
import { CollectionElementType, Color, IntRange, URL, UUID } from "./basicTypes";
import { Effect, Transition } from "./effects";
import { Media } from "./graphicsData";
import { AudioInput_BehaviorMode } from "./input";
import { Layer_Blending } from "./layers";
import { Message_TokenValue } from "./messages";
import { PresentationSlide } from "./presentationSlide";
import { PropSlide } from "./propSlide";
import { Stage_ScreenAssignment } from "./stage";
import { Timer_Configuration } from "./timers";

export const protobufPackage = "rv.data";

export interface Action {
  uuid: UUID | undefined;
  name: string;
  label: Action_Label | undefined;
  delayTime: number;
  oldType: Action_OldType | undefined;
  isEnabled: boolean;
  layerIdentification: Action_LayerIdentification | undefined;
  duration: number;
  type: Action_ActionType;
  collectionElement?: CollectionElementType | undefined;
  playlistItem?: Action_PlaylistItemType | undefined;
  blendMode?: Action_BlendModeType | undefined;
  transition?: Action_TransitionType | undefined;
  media?: Action_MediaType | undefined;
  doubleItem?: Action_DoubleType | undefined;
  effects?: Action_EffectsType | undefined;
  slide?: Action_SlideType | undefined;
  background?: Action_BackgroundType | undefined;
  timer?: Action_TimerType | undefined;
  clear?: Action_ClearType | undefined;
  stage?: Action_StageLayoutType | undefined;
  prop?: Action_PropType | undefined;
  mask?: Action_MaskType | undefined;
  message?: Action_MessageType | undefined;
  socialMedia?: Action_SocialMediaType | undefined;
  communication?: Action_CommunicationType | undefined;
  multiScreen?: Action_MultiScreenType | undefined;
  presentationDocument?: Action_DocumentType | undefined;
  externalPresentation?: Action_ExternalPresentationType | undefined;
  audienceLook?: Action_AudienceLookType | undefined;
  audioInput?: Action_AudioInputType | undefined;
  slideDestination?: Action_SlideDestinationType | undefined;
  macro?: Action_MacroType | undefined;
  clearGroup?: Action_ClearGroupType | undefined;
  transportControl?: Action_TransportControlType | undefined;
}

export enum Action_ActionType {
  ACTION_TYPE_UNKNOWN = 0,
  ACTION_TYPE_STAGE_LAYOUT = 1,
  ACTION_TYPE_MEDIA = 2,
  ACTION_TYPE_TIMER = 3,
  ACTION_TYPE_COMMUNICATION = 4,
  ACTION_TYPE_CLEAR = 5,
  ACTION_TYPE_PROP = 6,
  ACTION_TYPE_MASK = 7,
  ACTION_TYPE_MESSAGE = 8,
  ACTION_TYPE_SOCIAL_MEDIA = 9,
  ACTION_TYPE_MULTISCREEN = 10,
  ACTION_TYPE_PRESENTATION_SLIDE = 11,
  ACTION_TYPE_FOREGROUND_MEDIA = 12,
  ACTION_TYPE_BACKGROUND_MEDIA = 13,
  ACTION_TYPE_PRESENTATION_DOCUMENT = 14,
  ACTION_TYPE_PROP_SLIDE = 15,
  ACTION_TYPE_EXTERNAL_PRESENTATION = 17,
  ACTION_TYPE_AUDIENCE_LOOK = 18,
  ACTION_TYPE_AUDIO_INPUT = 19,
  ACTION_TYPE_AUDIO_BIN_PLAYLIST = 20,
  ACTION_TYPE_MEDIA_BIN_PLAYLIST = 21,
  ACTION_TYPE_SLIDE_DESTINATION = 22,
  ACTION_TYPE_MACRO = 23,
  ACTION_TYPE_CLEAR_GROUP = 24,
  UNRECOGNIZED = -1,
}

export function action_ActionTypeFromJSON(object: any): Action_ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_UNKNOWN":
      return Action_ActionType.ACTION_TYPE_UNKNOWN;
    case 1:
    case "ACTION_TYPE_STAGE_LAYOUT":
      return Action_ActionType.ACTION_TYPE_STAGE_LAYOUT;
    case 2:
    case "ACTION_TYPE_MEDIA":
      return Action_ActionType.ACTION_TYPE_MEDIA;
    case 3:
    case "ACTION_TYPE_TIMER":
      return Action_ActionType.ACTION_TYPE_TIMER;
    case 4:
    case "ACTION_TYPE_COMMUNICATION":
      return Action_ActionType.ACTION_TYPE_COMMUNICATION;
    case 5:
    case "ACTION_TYPE_CLEAR":
      return Action_ActionType.ACTION_TYPE_CLEAR;
    case 6:
    case "ACTION_TYPE_PROP":
      return Action_ActionType.ACTION_TYPE_PROP;
    case 7:
    case "ACTION_TYPE_MASK":
      return Action_ActionType.ACTION_TYPE_MASK;
    case 8:
    case "ACTION_TYPE_MESSAGE":
      return Action_ActionType.ACTION_TYPE_MESSAGE;
    case 9:
    case "ACTION_TYPE_SOCIAL_MEDIA":
      return Action_ActionType.ACTION_TYPE_SOCIAL_MEDIA;
    case 10:
    case "ACTION_TYPE_MULTISCREEN":
      return Action_ActionType.ACTION_TYPE_MULTISCREEN;
    case 11:
    case "ACTION_TYPE_PRESENTATION_SLIDE":
      return Action_ActionType.ACTION_TYPE_PRESENTATION_SLIDE;
    case 12:
    case "ACTION_TYPE_FOREGROUND_MEDIA":
      return Action_ActionType.ACTION_TYPE_FOREGROUND_MEDIA;
    case 13:
    case "ACTION_TYPE_BACKGROUND_MEDIA":
      return Action_ActionType.ACTION_TYPE_BACKGROUND_MEDIA;
    case 14:
    case "ACTION_TYPE_PRESENTATION_DOCUMENT":
      return Action_ActionType.ACTION_TYPE_PRESENTATION_DOCUMENT;
    case 15:
    case "ACTION_TYPE_PROP_SLIDE":
      return Action_ActionType.ACTION_TYPE_PROP_SLIDE;
    case 17:
    case "ACTION_TYPE_EXTERNAL_PRESENTATION":
      return Action_ActionType.ACTION_TYPE_EXTERNAL_PRESENTATION;
    case 18:
    case "ACTION_TYPE_AUDIENCE_LOOK":
      return Action_ActionType.ACTION_TYPE_AUDIENCE_LOOK;
    case 19:
    case "ACTION_TYPE_AUDIO_INPUT":
      return Action_ActionType.ACTION_TYPE_AUDIO_INPUT;
    case 20:
    case "ACTION_TYPE_AUDIO_BIN_PLAYLIST":
      return Action_ActionType.ACTION_TYPE_AUDIO_BIN_PLAYLIST;
    case 21:
    case "ACTION_TYPE_MEDIA_BIN_PLAYLIST":
      return Action_ActionType.ACTION_TYPE_MEDIA_BIN_PLAYLIST;
    case 22:
    case "ACTION_TYPE_SLIDE_DESTINATION":
      return Action_ActionType.ACTION_TYPE_SLIDE_DESTINATION;
    case 23:
    case "ACTION_TYPE_MACRO":
      return Action_ActionType.ACTION_TYPE_MACRO;
    case 24:
    case "ACTION_TYPE_CLEAR_GROUP":
      return Action_ActionType.ACTION_TYPE_CLEAR_GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_ActionType.UNRECOGNIZED;
  }
}

export function action_ActionTypeToJSON(object: Action_ActionType): string {
  switch (object) {
    case Action_ActionType.ACTION_TYPE_UNKNOWN:
      return "ACTION_TYPE_UNKNOWN";
    case Action_ActionType.ACTION_TYPE_STAGE_LAYOUT:
      return "ACTION_TYPE_STAGE_LAYOUT";
    case Action_ActionType.ACTION_TYPE_MEDIA:
      return "ACTION_TYPE_MEDIA";
    case Action_ActionType.ACTION_TYPE_TIMER:
      return "ACTION_TYPE_TIMER";
    case Action_ActionType.ACTION_TYPE_COMMUNICATION:
      return "ACTION_TYPE_COMMUNICATION";
    case Action_ActionType.ACTION_TYPE_CLEAR:
      return "ACTION_TYPE_CLEAR";
    case Action_ActionType.ACTION_TYPE_PROP:
      return "ACTION_TYPE_PROP";
    case Action_ActionType.ACTION_TYPE_MASK:
      return "ACTION_TYPE_MASK";
    case Action_ActionType.ACTION_TYPE_MESSAGE:
      return "ACTION_TYPE_MESSAGE";
    case Action_ActionType.ACTION_TYPE_SOCIAL_MEDIA:
      return "ACTION_TYPE_SOCIAL_MEDIA";
    case Action_ActionType.ACTION_TYPE_MULTISCREEN:
      return "ACTION_TYPE_MULTISCREEN";
    case Action_ActionType.ACTION_TYPE_PRESENTATION_SLIDE:
      return "ACTION_TYPE_PRESENTATION_SLIDE";
    case Action_ActionType.ACTION_TYPE_FOREGROUND_MEDIA:
      return "ACTION_TYPE_FOREGROUND_MEDIA";
    case Action_ActionType.ACTION_TYPE_BACKGROUND_MEDIA:
      return "ACTION_TYPE_BACKGROUND_MEDIA";
    case Action_ActionType.ACTION_TYPE_PRESENTATION_DOCUMENT:
      return "ACTION_TYPE_PRESENTATION_DOCUMENT";
    case Action_ActionType.ACTION_TYPE_PROP_SLIDE:
      return "ACTION_TYPE_PROP_SLIDE";
    case Action_ActionType.ACTION_TYPE_EXTERNAL_PRESENTATION:
      return "ACTION_TYPE_EXTERNAL_PRESENTATION";
    case Action_ActionType.ACTION_TYPE_AUDIENCE_LOOK:
      return "ACTION_TYPE_AUDIENCE_LOOK";
    case Action_ActionType.ACTION_TYPE_AUDIO_INPUT:
      return "ACTION_TYPE_AUDIO_INPUT";
    case Action_ActionType.ACTION_TYPE_AUDIO_BIN_PLAYLIST:
      return "ACTION_TYPE_AUDIO_BIN_PLAYLIST";
    case Action_ActionType.ACTION_TYPE_MEDIA_BIN_PLAYLIST:
      return "ACTION_TYPE_MEDIA_BIN_PLAYLIST";
    case Action_ActionType.ACTION_TYPE_SLIDE_DESTINATION:
      return "ACTION_TYPE_SLIDE_DESTINATION";
    case Action_ActionType.ACTION_TYPE_MACRO:
      return "ACTION_TYPE_MACRO";
    case Action_ActionType.ACTION_TYPE_CLEAR_GROUP:
      return "ACTION_TYPE_CLEAR_GROUP";
    case Action_ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_OldType {
  category: Action_OldType_Category;
  applicationType: number;
}

export enum Action_OldType_Category {
  CATEGORY_UNKNOWN = 0,
  CATEGORY_MEDIA = 1,
  CATEGORY_APPLICATION = 2,
  UNRECOGNIZED = -1,
}

export function action_OldType_CategoryFromJSON(object: any): Action_OldType_Category {
  switch (object) {
    case 0:
    case "CATEGORY_UNKNOWN":
      return Action_OldType_Category.CATEGORY_UNKNOWN;
    case 1:
    case "CATEGORY_MEDIA":
      return Action_OldType_Category.CATEGORY_MEDIA;
    case 2:
    case "CATEGORY_APPLICATION":
      return Action_OldType_Category.CATEGORY_APPLICATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_OldType_Category.UNRECOGNIZED;
  }
}

export function action_OldType_CategoryToJSON(object: Action_OldType_Category): string {
  switch (object) {
    case Action_OldType_Category.CATEGORY_UNKNOWN:
      return "CATEGORY_UNKNOWN";
    case Action_OldType_Category.CATEGORY_MEDIA:
      return "CATEGORY_MEDIA";
    case Action_OldType_Category.CATEGORY_APPLICATION:
      return "CATEGORY_APPLICATION";
    case Action_OldType_Category.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_Label {
  text: string;
  color: Color | undefined;
}

export interface Action_LayerIdentification {
  uuid: UUID | undefined;
  name: string;
}

export interface Action_PlaylistItemType {
  playlistUuid: UUID | undefined;
  playlistName: string;
  itemUuid: UUID | undefined;
  itemName: string;
  selectPlaylist: boolean;
  alwaysRetrigger: boolean;
}

export interface Action_BlendModeType {
  blendMode: Action_BlendModeType_BlendMode;
  blend: Layer_Blending | undefined;
}

export enum Action_BlendModeType_BlendMode {
  BLEND_MODE_NORMAL = 0,
  BLEND_MODE_DISSOLVE = 1,
  BLEND_MODE_DARKEN = 2,
  BLEND_MODE_MULTIPLY = 3,
  BLEND_MODE_COLOR_BURN = 4,
  BLEND_MODE_LINEAR_BURN = 5,
  BLEND_MODE_DARKER_COLOR = 6,
  BLEND_MODE_LIGHTEN = 7,
  BLEND_MODE_SCREEN = 8,
  BLEND_MODE_COLOR_DODGE = 9,
  BLEND_MODE_LINEAR_DODGE = 10,
  BLEND_MODE_LIGHTER_COLOR = 11,
  BLEND_MODE_OVERLAY = 12,
  BLEND_MODE_SOFT_LIGHT = 13,
  BLEND_MODE_HARD_LIGHT = 14,
  BLEND_MODE_VIVID_LIGHT = 15,
  BLEND_MODE_LINEAR_LIGHT = 16,
  BLEND_MODE_PIN_LIGHT = 17,
  BLEND_MODE_HARD_MIX = 18,
  BLEND_MODE_DIFFERENCE = 19,
  BLEND_MODE_EXCLUSION = 20,
  BLEND_MODE_SUBTRACT = 21,
  BLEND_MODE_DIVIDE = 22,
  BLEND_MODE_HUE = 23,
  BLEND_MODE_SATURATION = 24,
  BLEND_MODE_COLOR = 25,
  BLEND_MODE_LUMINOSITY = 26,
  UNRECOGNIZED = -1,
}

export function action_BlendModeType_BlendModeFromJSON(object: any): Action_BlendModeType_BlendMode {
  switch (object) {
    case 0:
    case "BLEND_MODE_NORMAL":
      return Action_BlendModeType_BlendMode.BLEND_MODE_NORMAL;
    case 1:
    case "BLEND_MODE_DISSOLVE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_DISSOLVE;
    case 2:
    case "BLEND_MODE_DARKEN":
      return Action_BlendModeType_BlendMode.BLEND_MODE_DARKEN;
    case 3:
    case "BLEND_MODE_MULTIPLY":
      return Action_BlendModeType_BlendMode.BLEND_MODE_MULTIPLY;
    case 4:
    case "BLEND_MODE_COLOR_BURN":
      return Action_BlendModeType_BlendMode.BLEND_MODE_COLOR_BURN;
    case 5:
    case "BLEND_MODE_LINEAR_BURN":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_BURN;
    case 6:
    case "BLEND_MODE_DARKER_COLOR":
      return Action_BlendModeType_BlendMode.BLEND_MODE_DARKER_COLOR;
    case 7:
    case "BLEND_MODE_LIGHTEN":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LIGHTEN;
    case 8:
    case "BLEND_MODE_SCREEN":
      return Action_BlendModeType_BlendMode.BLEND_MODE_SCREEN;
    case 9:
    case "BLEND_MODE_COLOR_DODGE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_COLOR_DODGE;
    case 10:
    case "BLEND_MODE_LINEAR_DODGE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_DODGE;
    case 11:
    case "BLEND_MODE_LIGHTER_COLOR":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LIGHTER_COLOR;
    case 12:
    case "BLEND_MODE_OVERLAY":
      return Action_BlendModeType_BlendMode.BLEND_MODE_OVERLAY;
    case 13:
    case "BLEND_MODE_SOFT_LIGHT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_SOFT_LIGHT;
    case 14:
    case "BLEND_MODE_HARD_LIGHT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_HARD_LIGHT;
    case 15:
    case "BLEND_MODE_VIVID_LIGHT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_VIVID_LIGHT;
    case 16:
    case "BLEND_MODE_LINEAR_LIGHT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_LIGHT;
    case 17:
    case "BLEND_MODE_PIN_LIGHT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_PIN_LIGHT;
    case 18:
    case "BLEND_MODE_HARD_MIX":
      return Action_BlendModeType_BlendMode.BLEND_MODE_HARD_MIX;
    case 19:
    case "BLEND_MODE_DIFFERENCE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_DIFFERENCE;
    case 20:
    case "BLEND_MODE_EXCLUSION":
      return Action_BlendModeType_BlendMode.BLEND_MODE_EXCLUSION;
    case 21:
    case "BLEND_MODE_SUBTRACT":
      return Action_BlendModeType_BlendMode.BLEND_MODE_SUBTRACT;
    case 22:
    case "BLEND_MODE_DIVIDE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_DIVIDE;
    case 23:
    case "BLEND_MODE_HUE":
      return Action_BlendModeType_BlendMode.BLEND_MODE_HUE;
    case 24:
    case "BLEND_MODE_SATURATION":
      return Action_BlendModeType_BlendMode.BLEND_MODE_SATURATION;
    case 25:
    case "BLEND_MODE_COLOR":
      return Action_BlendModeType_BlendMode.BLEND_MODE_COLOR;
    case 26:
    case "BLEND_MODE_LUMINOSITY":
      return Action_BlendModeType_BlendMode.BLEND_MODE_LUMINOSITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_BlendModeType_BlendMode.UNRECOGNIZED;
  }
}

export function action_BlendModeType_BlendModeToJSON(object: Action_BlendModeType_BlendMode): string {
  switch (object) {
    case Action_BlendModeType_BlendMode.BLEND_MODE_NORMAL:
      return "BLEND_MODE_NORMAL";
    case Action_BlendModeType_BlendMode.BLEND_MODE_DISSOLVE:
      return "BLEND_MODE_DISSOLVE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_DARKEN:
      return "BLEND_MODE_DARKEN";
    case Action_BlendModeType_BlendMode.BLEND_MODE_MULTIPLY:
      return "BLEND_MODE_MULTIPLY";
    case Action_BlendModeType_BlendMode.BLEND_MODE_COLOR_BURN:
      return "BLEND_MODE_COLOR_BURN";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_BURN:
      return "BLEND_MODE_LINEAR_BURN";
    case Action_BlendModeType_BlendMode.BLEND_MODE_DARKER_COLOR:
      return "BLEND_MODE_DARKER_COLOR";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LIGHTEN:
      return "BLEND_MODE_LIGHTEN";
    case Action_BlendModeType_BlendMode.BLEND_MODE_SCREEN:
      return "BLEND_MODE_SCREEN";
    case Action_BlendModeType_BlendMode.BLEND_MODE_COLOR_DODGE:
      return "BLEND_MODE_COLOR_DODGE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_DODGE:
      return "BLEND_MODE_LINEAR_DODGE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LIGHTER_COLOR:
      return "BLEND_MODE_LIGHTER_COLOR";
    case Action_BlendModeType_BlendMode.BLEND_MODE_OVERLAY:
      return "BLEND_MODE_OVERLAY";
    case Action_BlendModeType_BlendMode.BLEND_MODE_SOFT_LIGHT:
      return "BLEND_MODE_SOFT_LIGHT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_HARD_LIGHT:
      return "BLEND_MODE_HARD_LIGHT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_VIVID_LIGHT:
      return "BLEND_MODE_VIVID_LIGHT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LINEAR_LIGHT:
      return "BLEND_MODE_LINEAR_LIGHT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_PIN_LIGHT:
      return "BLEND_MODE_PIN_LIGHT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_HARD_MIX:
      return "BLEND_MODE_HARD_MIX";
    case Action_BlendModeType_BlendMode.BLEND_MODE_DIFFERENCE:
      return "BLEND_MODE_DIFFERENCE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_EXCLUSION:
      return "BLEND_MODE_EXCLUSION";
    case Action_BlendModeType_BlendMode.BLEND_MODE_SUBTRACT:
      return "BLEND_MODE_SUBTRACT";
    case Action_BlendModeType_BlendMode.BLEND_MODE_DIVIDE:
      return "BLEND_MODE_DIVIDE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_HUE:
      return "BLEND_MODE_HUE";
    case Action_BlendModeType_BlendMode.BLEND_MODE_SATURATION:
      return "BLEND_MODE_SATURATION";
    case Action_BlendModeType_BlendMode.BLEND_MODE_COLOR:
      return "BLEND_MODE_COLOR";
    case Action_BlendModeType_BlendMode.BLEND_MODE_LUMINOSITY:
      return "BLEND_MODE_LUMINOSITY";
    case Action_BlendModeType_BlendMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_TransitionType {
  transitionName: string;
  transition: Transition | undefined;
}

export interface Action_DoubleType {
  value: number;
}

export interface Action_EffectsType {
  effects: Effect[];
}

export interface Action_MediaType {
  transitionDuration: number;
  selectedEffectPresetUuid: UUID | undefined;
  transition: Transition | undefined;
  effects: Effect[];
  element: Media | undefined;
  layerType: Action_MediaType_LayerType;
  alwaysRetrigger: boolean;
  markers: Action_MediaType_PlaybackMarker[];
  image?: Action_MediaType_Image | undefined;
  video?: Action_MediaType_Video | undefined;
  audio?: Action_MediaType_Audio | undefined;
  liveVideo?: Action_MediaType_LiveVideo | undefined;
}

export enum Action_MediaType_LayerType {
  LAYER_TYPE_BACKGROUND = 0,
  LAYER_TYPE_FOREGROUND = 1,
  LAYER_TYPE_FILL = 2,
  LAYER_TYPE_INPUT = 3,
  UNRECOGNIZED = -1,
}

export function action_MediaType_LayerTypeFromJSON(object: any): Action_MediaType_LayerType {
  switch (object) {
    case 0:
    case "LAYER_TYPE_BACKGROUND":
      return Action_MediaType_LayerType.LAYER_TYPE_BACKGROUND;
    case 1:
    case "LAYER_TYPE_FOREGROUND":
      return Action_MediaType_LayerType.LAYER_TYPE_FOREGROUND;
    case 2:
    case "LAYER_TYPE_FILL":
      return Action_MediaType_LayerType.LAYER_TYPE_FILL;
    case 3:
    case "LAYER_TYPE_INPUT":
      return Action_MediaType_LayerType.LAYER_TYPE_INPUT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_MediaType_LayerType.UNRECOGNIZED;
  }
}

export function action_MediaType_LayerTypeToJSON(object: Action_MediaType_LayerType): string {
  switch (object) {
    case Action_MediaType_LayerType.LAYER_TYPE_BACKGROUND:
      return "LAYER_TYPE_BACKGROUND";
    case Action_MediaType_LayerType.LAYER_TYPE_FOREGROUND:
      return "LAYER_TYPE_FOREGROUND";
    case Action_MediaType_LayerType.LAYER_TYPE_FILL:
      return "LAYER_TYPE_FILL";
    case Action_MediaType_LayerType.LAYER_TYPE_INPUT:
      return "LAYER_TYPE_INPUT";
    case Action_MediaType_LayerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_MediaType_Image {
}

export interface Action_MediaType_Video {
  playbackBehavior: Action_MediaType_Video_PlaybackBehavior;
  endBehavior: Action_MediaType_Video_EndBehavior;
  loopTime: number;
  timesToLoop: number;
  softLoop: boolean;
  softLoopDuration: number;
}

export enum Action_MediaType_Video_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  UNRECOGNIZED = -1,
}

export function action_MediaType_Video_PlaybackBehaviorFromJSON(object: any): Action_MediaType_Video_PlaybackBehavior {
  switch (object) {
    case 0:
    case "PLAYBACK_BEHAVIOR_STOP":
      return Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case "PLAYBACK_BEHAVIOR_LOOP":
      return Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT":
      return Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT;
    case 3:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME":
      return Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_MediaType_Video_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function action_MediaType_Video_PlaybackBehaviorToJSON(object: Action_MediaType_Video_PlaybackBehavior): string {
  switch (object) {
    case Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return "PLAYBACK_BEHAVIOR_STOP";
    case Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return "PLAYBACK_BEHAVIOR_LOOP";
    case Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT";
    case Action_MediaType_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME";
    case Action_MediaType_Video_PlaybackBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Action_MediaType_Video_EndBehavior {
  END_BEHAVIOR_STOP = 0,
  END_BEHAVIOR_STOP_ON_BLACK = 1,
  END_BEHAVIOR_STOP_ON_CLEAR = 2,
  END_BEHAVIOR_FADE_TO_BLACK = 3,
  END_BEHAVIOR_FADE_TO_CLEAR = 4,
  UNRECOGNIZED = -1,
}

export function action_MediaType_Video_EndBehaviorFromJSON(object: any): Action_MediaType_Video_EndBehavior {
  switch (object) {
    case 0:
    case "END_BEHAVIOR_STOP":
      return Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP;
    case 1:
    case "END_BEHAVIOR_STOP_ON_BLACK":
      return Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK;
    case 2:
    case "END_BEHAVIOR_STOP_ON_CLEAR":
      return Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR;
    case 3:
    case "END_BEHAVIOR_FADE_TO_BLACK":
      return Action_MediaType_Video_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK;
    case 4:
    case "END_BEHAVIOR_FADE_TO_CLEAR":
      return Action_MediaType_Video_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_MediaType_Video_EndBehavior.UNRECOGNIZED;
  }
}

export function action_MediaType_Video_EndBehaviorToJSON(object: Action_MediaType_Video_EndBehavior): string {
  switch (object) {
    case Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP:
      return "END_BEHAVIOR_STOP";
    case Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK:
      return "END_BEHAVIOR_STOP_ON_BLACK";
    case Action_MediaType_Video_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR:
      return "END_BEHAVIOR_STOP_ON_CLEAR";
    case Action_MediaType_Video_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK:
      return "END_BEHAVIOR_FADE_TO_BLACK";
    case Action_MediaType_Video_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR:
      return "END_BEHAVIOR_FADE_TO_CLEAR";
    case Action_MediaType_Video_EndBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_MediaType_Audio {
  playbackBehavior: Action_MediaType_Audio_PlaybackBehavior;
  loopTime: number;
  timesToLoop: number;
  audioType: Action_MediaType_Audio_MediaActionAudioType;
}

export enum Action_MediaType_Audio_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  UNRECOGNIZED = -1,
}

export function action_MediaType_Audio_PlaybackBehaviorFromJSON(object: any): Action_MediaType_Audio_PlaybackBehavior {
  switch (object) {
    case 0:
    case "PLAYBACK_BEHAVIOR_STOP":
      return Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case "PLAYBACK_BEHAVIOR_LOOP":
      return Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT":
      return Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT;
    case 3:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME":
      return Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_MediaType_Audio_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function action_MediaType_Audio_PlaybackBehaviorToJSON(object: Action_MediaType_Audio_PlaybackBehavior): string {
  switch (object) {
    case Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return "PLAYBACK_BEHAVIOR_STOP";
    case Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return "PLAYBACK_BEHAVIOR_LOOP";
    case Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT";
    case Action_MediaType_Audio_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME";
    case Action_MediaType_Audio_PlaybackBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Action_MediaType_Audio_MediaActionAudioType {
  MEDIA_ACTION_AUDIO_TYPE_TUNE = 0,
  MEDIA_ACTION_AUDIO_TYPE_SOUND = 1,
  UNRECOGNIZED = -1,
}

export function action_MediaType_Audio_MediaActionAudioTypeFromJSON(
  object: any,
): Action_MediaType_Audio_MediaActionAudioType {
  switch (object) {
    case 0:
    case "MEDIA_ACTION_AUDIO_TYPE_TUNE":
      return Action_MediaType_Audio_MediaActionAudioType.MEDIA_ACTION_AUDIO_TYPE_TUNE;
    case 1:
    case "MEDIA_ACTION_AUDIO_TYPE_SOUND":
      return Action_MediaType_Audio_MediaActionAudioType.MEDIA_ACTION_AUDIO_TYPE_SOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_MediaType_Audio_MediaActionAudioType.UNRECOGNIZED;
  }
}

export function action_MediaType_Audio_MediaActionAudioTypeToJSON(
  object: Action_MediaType_Audio_MediaActionAudioType,
): string {
  switch (object) {
    case Action_MediaType_Audio_MediaActionAudioType.MEDIA_ACTION_AUDIO_TYPE_TUNE:
      return "MEDIA_ACTION_AUDIO_TYPE_TUNE";
    case Action_MediaType_Audio_MediaActionAudioType.MEDIA_ACTION_AUDIO_TYPE_SOUND:
      return "MEDIA_ACTION_AUDIO_TYPE_SOUND";
    case Action_MediaType_Audio_MediaActionAudioType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_MediaType_LiveVideo {
}

export interface Action_MediaType_PlaybackMarker {
  uuid: UUID | undefined;
  time: number;
  color: Color | undefined;
  name: string;
  actions: Action[];
}

export interface Action_SlideType {
  presentation?: PresentationSlide | undefined;
  prop?: PropSlide | undefined;
}

export interface Action_BackgroundType {
  element: Background | undefined;
}

export interface Action_TimerType {
  actionType: Action_TimerType_TimerAction;
  timerIdentification: CollectionElementType | undefined;
  timerConfiguration: Timer_Configuration | undefined;
}

export enum Action_TimerType_TimerAction {
  ACTION_START = 0,
  ACTION_STOP = 1,
  ACTION_RESET = 2,
  ACTION_RESET_AND_START = 3,
  ACTION_STOP_AND_RESET = 4,
  UNRECOGNIZED = -1,
}

export function action_TimerType_TimerActionFromJSON(object: any): Action_TimerType_TimerAction {
  switch (object) {
    case 0:
    case "ACTION_START":
      return Action_TimerType_TimerAction.ACTION_START;
    case 1:
    case "ACTION_STOP":
      return Action_TimerType_TimerAction.ACTION_STOP;
    case 2:
    case "ACTION_RESET":
      return Action_TimerType_TimerAction.ACTION_RESET;
    case 3:
    case "ACTION_RESET_AND_START":
      return Action_TimerType_TimerAction.ACTION_RESET_AND_START;
    case 4:
    case "ACTION_STOP_AND_RESET":
      return Action_TimerType_TimerAction.ACTION_STOP_AND_RESET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_TimerType_TimerAction.UNRECOGNIZED;
  }
}

export function action_TimerType_TimerActionToJSON(object: Action_TimerType_TimerAction): string {
  switch (object) {
    case Action_TimerType_TimerAction.ACTION_START:
      return "ACTION_START";
    case Action_TimerType_TimerAction.ACTION_STOP:
      return "ACTION_STOP";
    case Action_TimerType_TimerAction.ACTION_RESET:
      return "ACTION_RESET";
    case Action_TimerType_TimerAction.ACTION_RESET_AND_START:
      return "ACTION_RESET_AND_START";
    case Action_TimerType_TimerAction.ACTION_STOP_AND_RESET:
      return "ACTION_STOP_AND_RESET";
    case Action_TimerType_TimerAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_ClearType {
  targetLayer: Action_ClearType_ClearTargetLayer;
  contentDestination: Action_ClearType_ContentDestination;
}

export enum Action_ClearType_ClearTargetLayer {
  CLEAR_TARGET_LAYER_ALL = 0,
  CLEAR_TARGET_LAYER_AUDIO = 1,
  CLEAR_TARGET_LAYER_BACKGROUND = 2,
  CLEAR_TARGET_LAYER_LIVE_VIDEO = 3,
  CLEAR_TARGET_LAYER_PROP = 4,
  CLEAR_TARGET_LAYER_SLIDE = 5,
  CLEAR_TARGET_LAYER_LOGO = 6,
  CLEAR_TARGET_LAYER_MESSAGES = 7,
  CLEAR_TARGET_LAYER_AUDIO_EFFECTS = 8,
  UNRECOGNIZED = -1,
}

export function action_ClearType_ClearTargetLayerFromJSON(object: any): Action_ClearType_ClearTargetLayer {
  switch (object) {
    case 0:
    case "CLEAR_TARGET_LAYER_ALL":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_ALL;
    case 1:
    case "CLEAR_TARGET_LAYER_AUDIO":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_AUDIO;
    case 2:
    case "CLEAR_TARGET_LAYER_BACKGROUND":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_BACKGROUND;
    case 3:
    case "CLEAR_TARGET_LAYER_LIVE_VIDEO":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_LIVE_VIDEO;
    case 4:
    case "CLEAR_TARGET_LAYER_PROP":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_PROP;
    case 5:
    case "CLEAR_TARGET_LAYER_SLIDE":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_SLIDE;
    case 6:
    case "CLEAR_TARGET_LAYER_LOGO":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_LOGO;
    case 7:
    case "CLEAR_TARGET_LAYER_MESSAGES":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_MESSAGES;
    case 8:
    case "CLEAR_TARGET_LAYER_AUDIO_EFFECTS":
      return Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_AUDIO_EFFECTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_ClearType_ClearTargetLayer.UNRECOGNIZED;
  }
}

export function action_ClearType_ClearTargetLayerToJSON(object: Action_ClearType_ClearTargetLayer): string {
  switch (object) {
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_ALL:
      return "CLEAR_TARGET_LAYER_ALL";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_AUDIO:
      return "CLEAR_TARGET_LAYER_AUDIO";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_BACKGROUND:
      return "CLEAR_TARGET_LAYER_BACKGROUND";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_LIVE_VIDEO:
      return "CLEAR_TARGET_LAYER_LIVE_VIDEO";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_PROP:
      return "CLEAR_TARGET_LAYER_PROP";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_SLIDE:
      return "CLEAR_TARGET_LAYER_SLIDE";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_LOGO:
      return "CLEAR_TARGET_LAYER_LOGO";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_MESSAGES:
      return "CLEAR_TARGET_LAYER_MESSAGES";
    case Action_ClearType_ClearTargetLayer.CLEAR_TARGET_LAYER_AUDIO_EFFECTS:
      return "CLEAR_TARGET_LAYER_AUDIO_EFFECTS";
    case Action_ClearType_ClearTargetLayer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Action_ClearType_ContentDestination {
  CONTENT_DESTINATION_GLOBAL = 0,
  CONTENT_DESTINATION_ANNOUNCEMENTS = 1,
  UNRECOGNIZED = -1,
}

export function action_ClearType_ContentDestinationFromJSON(object: any): Action_ClearType_ContentDestination {
  switch (object) {
    case 0:
    case "CONTENT_DESTINATION_GLOBAL":
      return Action_ClearType_ContentDestination.CONTENT_DESTINATION_GLOBAL;
    case 1:
    case "CONTENT_DESTINATION_ANNOUNCEMENTS":
      return Action_ClearType_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_ClearType_ContentDestination.UNRECOGNIZED;
  }
}

export function action_ClearType_ContentDestinationToJSON(object: Action_ClearType_ContentDestination): string {
  switch (object) {
    case Action_ClearType_ContentDestination.CONTENT_DESTINATION_GLOBAL:
      return "CONTENT_DESTINATION_GLOBAL";
    case Action_ClearType_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS:
      return "CONTENT_DESTINATION_ANNOUNCEMENTS";
    case Action_ClearType_ContentDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_ClearGroupType {
  identification: CollectionElementType | undefined;
}

export interface Action_TransportControlType {
  play?: Action_TransportControlType_Play | undefined;
  pause?: Action_TransportControlType_Pause | undefined;
  jumpToTime?: Action_TransportControlType_JumpToTime | undefined;
}

export interface Action_TransportControlType_Play {
}

export interface Action_TransportControlType_Pause {
}

export interface Action_TransportControlType_JumpToTime {
  time: number;
}

export interface Action_StageLayoutType {
  stageScreenAssignments: Stage_ScreenAssignment[];
  slideTarget: Action_StageLayoutType_SlideTarget;
}

export enum Action_StageLayoutType_SlideTarget {
  SLIDE_TARGET_NO_CHANGE = 0,
  SLIDE_TARGET_STAGE_ONLY = 1,
  SLIDE_TARGET_ALL = 2,
  UNRECOGNIZED = -1,
}

export function action_StageLayoutType_SlideTargetFromJSON(object: any): Action_StageLayoutType_SlideTarget {
  switch (object) {
    case 0:
    case "SLIDE_TARGET_NO_CHANGE":
      return Action_StageLayoutType_SlideTarget.SLIDE_TARGET_NO_CHANGE;
    case 1:
    case "SLIDE_TARGET_STAGE_ONLY":
      return Action_StageLayoutType_SlideTarget.SLIDE_TARGET_STAGE_ONLY;
    case 2:
    case "SLIDE_TARGET_ALL":
      return Action_StageLayoutType_SlideTarget.SLIDE_TARGET_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_StageLayoutType_SlideTarget.UNRECOGNIZED;
  }
}

export function action_StageLayoutType_SlideTargetToJSON(object: Action_StageLayoutType_SlideTarget): string {
  switch (object) {
    case Action_StageLayoutType_SlideTarget.SLIDE_TARGET_NO_CHANGE:
      return "SLIDE_TARGET_NO_CHANGE";
    case Action_StageLayoutType_SlideTarget.SLIDE_TARGET_STAGE_ONLY:
      return "SLIDE_TARGET_STAGE_ONLY";
    case Action_StageLayoutType_SlideTarget.SLIDE_TARGET_ALL:
      return "SLIDE_TARGET_ALL";
    case Action_StageLayoutType_SlideTarget.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_SlideDestinationType {
  slideTarget: Action_SlideDestinationType_SlideTarget;
}

export enum Action_SlideDestinationType_SlideTarget {
  SLIDE_TARGET_NO_CHANGE = 0,
  SLIDE_TARGET_STAGE_ONLY = 1,
  SLIDE_TARGET_ALL = 2,
  UNRECOGNIZED = -1,
}

export function action_SlideDestinationType_SlideTargetFromJSON(object: any): Action_SlideDestinationType_SlideTarget {
  switch (object) {
    case 0:
    case "SLIDE_TARGET_NO_CHANGE":
      return Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_NO_CHANGE;
    case 1:
    case "SLIDE_TARGET_STAGE_ONLY":
      return Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_STAGE_ONLY;
    case 2:
    case "SLIDE_TARGET_ALL":
      return Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_SlideDestinationType_SlideTarget.UNRECOGNIZED;
  }
}

export function action_SlideDestinationType_SlideTargetToJSON(object: Action_SlideDestinationType_SlideTarget): string {
  switch (object) {
    case Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_NO_CHANGE:
      return "SLIDE_TARGET_NO_CHANGE";
    case Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_STAGE_ONLY:
      return "SLIDE_TARGET_STAGE_ONLY";
    case Action_SlideDestinationType_SlideTarget.SLIDE_TARGET_ALL:
      return "SLIDE_TARGET_ALL";
    case Action_SlideDestinationType_SlideTarget.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_PropType {
  identification: CollectionElementType | undefined;
}

export interface Action_MaskType {
  identification: CollectionElementType | undefined;
}

export interface Action_MessageType {
  messageIdentificaton: CollectionElementType | undefined;
  content: Message_TokenValue[];
}

export interface Action_SocialMediaType {
  actionType: Action_SocialMediaType_SocialMediaAction;
  duration: number;
}

export enum Action_SocialMediaType_SocialMediaAction {
  SOCIAL_MEDIA_ACTION_LENGTH_OF_GOTO_NEXT_TIMER = 0,
  SOCIAL_MEDIA_ACTION_SPECIFIED_TIME = 1,
  UNRECOGNIZED = -1,
}

export function action_SocialMediaType_SocialMediaActionFromJSON(
  object: any,
): Action_SocialMediaType_SocialMediaAction {
  switch (object) {
    case 0:
    case "SOCIAL_MEDIA_ACTION_LENGTH_OF_GOTO_NEXT_TIMER":
      return Action_SocialMediaType_SocialMediaAction.SOCIAL_MEDIA_ACTION_LENGTH_OF_GOTO_NEXT_TIMER;
    case 1:
    case "SOCIAL_MEDIA_ACTION_SPECIFIED_TIME":
      return Action_SocialMediaType_SocialMediaAction.SOCIAL_MEDIA_ACTION_SPECIFIED_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_SocialMediaType_SocialMediaAction.UNRECOGNIZED;
  }
}

export function action_SocialMediaType_SocialMediaActionToJSON(
  object: Action_SocialMediaType_SocialMediaAction,
): string {
  switch (object) {
    case Action_SocialMediaType_SocialMediaAction.SOCIAL_MEDIA_ACTION_LENGTH_OF_GOTO_NEXT_TIMER:
      return "SOCIAL_MEDIA_ACTION_LENGTH_OF_GOTO_NEXT_TIMER";
    case Action_SocialMediaType_SocialMediaAction.SOCIAL_MEDIA_ACTION_SPECIFIED_TIME:
      return "SOCIAL_MEDIA_ACTION_SPECIFIED_TIME";
    case Action_SocialMediaType_SocialMediaAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_CommunicationType {
  deviceIdentification: CollectionElementType | undefined;
  format: string;
  description: string;
  commands: Action_CommunicationType_Command[];
  midiCommand?: Action_CommunicationType_MIDICommand | undefined;
  globalCacheCommand?: Action_CommunicationType_GlobalCacheCommand | undefined;
  gvg100Command?: Action_CommunicationType_GVG100Command | undefined;
  sonyBVSCommand?: Action_CommunicationType_SonyBVSCommand | undefined;
}

export interface Action_CommunicationType_Command {
  name: string;
  value: string;
  replacementRange: IntRange | undefined;
  possibleValues: string[];
}

export interface Action_CommunicationType_MIDICommand {
  state: Action_CommunicationType_MIDICommand_State;
  channel: number;
  note: number;
  intensity: number;
}

export enum Action_CommunicationType_MIDICommand_State {
  STATE_ON = 0,
  STATE_OFF = 1,
  UNRECOGNIZED = -1,
}

export function action_CommunicationType_MIDICommand_StateFromJSON(
  object: any,
): Action_CommunicationType_MIDICommand_State {
  switch (object) {
    case 0:
    case "STATE_ON":
      return Action_CommunicationType_MIDICommand_State.STATE_ON;
    case 1:
    case "STATE_OFF":
      return Action_CommunicationType_MIDICommand_State.STATE_OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_CommunicationType_MIDICommand_State.UNRECOGNIZED;
  }
}

export function action_CommunicationType_MIDICommand_StateToJSON(
  object: Action_CommunicationType_MIDICommand_State,
): string {
  switch (object) {
    case Action_CommunicationType_MIDICommand_State.STATE_ON:
      return "STATE_ON";
    case Action_CommunicationType_MIDICommand_State.STATE_OFF:
      return "STATE_OFF";
    case Action_CommunicationType_MIDICommand_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_CommunicationType_GlobalCacheCommand {
  commandAction: Action_CommunicationType_GlobalCacheCommand_CommandAction;
  output: number;
  interval: number;
}

export enum Action_CommunicationType_GlobalCacheCommand_CommandAction {
  COMMAND_ACTION_ON = 0,
  COMMAND_ACTION_OFF = 1,
  COMMAND_ACTION_ON_OFF_WITH_INTERVAL = 2,
  COMMAND_ACTION_OFF_ON_WITH_INTERVAL = 3,
  UNRECOGNIZED = -1,
}

export function action_CommunicationType_GlobalCacheCommand_CommandActionFromJSON(
  object: any,
): Action_CommunicationType_GlobalCacheCommand_CommandAction {
  switch (object) {
    case 0:
    case "COMMAND_ACTION_ON":
      return Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_ON;
    case 1:
    case "COMMAND_ACTION_OFF":
      return Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_OFF;
    case 2:
    case "COMMAND_ACTION_ON_OFF_WITH_INTERVAL":
      return Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_ON_OFF_WITH_INTERVAL;
    case 3:
    case "COMMAND_ACTION_OFF_ON_WITH_INTERVAL":
      return Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_OFF_ON_WITH_INTERVAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_CommunicationType_GlobalCacheCommand_CommandAction.UNRECOGNIZED;
  }
}

export function action_CommunicationType_GlobalCacheCommand_CommandActionToJSON(
  object: Action_CommunicationType_GlobalCacheCommand_CommandAction,
): string {
  switch (object) {
    case Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_ON:
      return "COMMAND_ACTION_ON";
    case Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_OFF:
      return "COMMAND_ACTION_OFF";
    case Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_ON_OFF_WITH_INTERVAL:
      return "COMMAND_ACTION_ON_OFF_WITH_INTERVAL";
    case Action_CommunicationType_GlobalCacheCommand_CommandAction.COMMAND_ACTION_OFF_ON_WITH_INTERVAL:
      return "COMMAND_ACTION_OFF_ON_WITH_INTERVAL";
    case Action_CommunicationType_GlobalCacheCommand_CommandAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_CommunicationType_GVG100Command {
  commandAction: Action_CommunicationType_GVG100Command_CommandAction;
}

export enum Action_CommunicationType_GVG100Command_CommandAction {
  COMMAND_ACTION_FADE_TO_BLACK = 0,
  COMMAND_ACTION_DSK_TOGGLE = 1,
  UNRECOGNIZED = -1,
}

export function action_CommunicationType_GVG100Command_CommandActionFromJSON(
  object: any,
): Action_CommunicationType_GVG100Command_CommandAction {
  switch (object) {
    case 0:
    case "COMMAND_ACTION_FADE_TO_BLACK":
      return Action_CommunicationType_GVG100Command_CommandAction.COMMAND_ACTION_FADE_TO_BLACK;
    case 1:
    case "COMMAND_ACTION_DSK_TOGGLE":
      return Action_CommunicationType_GVG100Command_CommandAction.COMMAND_ACTION_DSK_TOGGLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_CommunicationType_GVG100Command_CommandAction.UNRECOGNIZED;
  }
}

export function action_CommunicationType_GVG100Command_CommandActionToJSON(
  object: Action_CommunicationType_GVG100Command_CommandAction,
): string {
  switch (object) {
    case Action_CommunicationType_GVG100Command_CommandAction.COMMAND_ACTION_FADE_TO_BLACK:
      return "COMMAND_ACTION_FADE_TO_BLACK";
    case Action_CommunicationType_GVG100Command_CommandAction.COMMAND_ACTION_DSK_TOGGLE:
      return "COMMAND_ACTION_DSK_TOGGLE";
    case Action_CommunicationType_GVG100Command_CommandAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_CommunicationType_SonyBVSCommand {
  commandAction: Action_CommunicationType_SonyBVSCommand_CommandAction;
}

export enum Action_CommunicationType_SonyBVSCommand_CommandAction {
  COMMAND_ACTION_FADE_TO_BLACK = 0,
  COMMAND_ACTION_KEY_ON = 1,
  COMMAND_ACTION_KEY_OFF = 2,
  COMMAND_ACTION_DSK_ON = 3,
  COMMAND_ACTION_DSK_OFF = 4,
  UNRECOGNIZED = -1,
}

export function action_CommunicationType_SonyBVSCommand_CommandActionFromJSON(
  object: any,
): Action_CommunicationType_SonyBVSCommand_CommandAction {
  switch (object) {
    case 0:
    case "COMMAND_ACTION_FADE_TO_BLACK":
      return Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_FADE_TO_BLACK;
    case 1:
    case "COMMAND_ACTION_KEY_ON":
      return Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_KEY_ON;
    case 2:
    case "COMMAND_ACTION_KEY_OFF":
      return Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_KEY_OFF;
    case 3:
    case "COMMAND_ACTION_DSK_ON":
      return Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_DSK_ON;
    case 4:
    case "COMMAND_ACTION_DSK_OFF":
      return Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_DSK_OFF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_CommunicationType_SonyBVSCommand_CommandAction.UNRECOGNIZED;
  }
}

export function action_CommunicationType_SonyBVSCommand_CommandActionToJSON(
  object: Action_CommunicationType_SonyBVSCommand_CommandAction,
): string {
  switch (object) {
    case Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_FADE_TO_BLACK:
      return "COMMAND_ACTION_FADE_TO_BLACK";
    case Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_KEY_ON:
      return "COMMAND_ACTION_KEY_ON";
    case Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_KEY_OFF:
      return "COMMAND_ACTION_KEY_OFF";
    case Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_DSK_ON:
      return "COMMAND_ACTION_DSK_ON";
    case Action_CommunicationType_SonyBVSCommand_CommandAction.COMMAND_ACTION_DSK_OFF:
      return "COMMAND_ACTION_DSK_OFF";
    case Action_CommunicationType_SonyBVSCommand_CommandAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_MultiScreenType {
  identification: CollectionElementType | undefined;
}

export interface Action_DocumentType {
  identification: CollectionElementType | undefined;
  selectedArrangement: UUID | undefined;
  contentDestination: Action_DocumentType_ContentDestination;
}

export enum Action_DocumentType_ContentDestination {
  CONTENT_DESTINATION_GLOBAL = 0,
  CONTENT_DESTINATION_ANNOUNCEMENTS = 1,
  UNRECOGNIZED = -1,
}

export function action_DocumentType_ContentDestinationFromJSON(object: any): Action_DocumentType_ContentDestination {
  switch (object) {
    case 0:
    case "CONTENT_DESTINATION_GLOBAL":
      return Action_DocumentType_ContentDestination.CONTENT_DESTINATION_GLOBAL;
    case 1:
    case "CONTENT_DESTINATION_ANNOUNCEMENTS":
      return Action_DocumentType_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action_DocumentType_ContentDestination.UNRECOGNIZED;
  }
}

export function action_DocumentType_ContentDestinationToJSON(object: Action_DocumentType_ContentDestination): string {
  switch (object) {
    case Action_DocumentType_ContentDestination.CONTENT_DESTINATION_GLOBAL:
      return "CONTENT_DESTINATION_GLOBAL";
    case Action_DocumentType_ContentDestination.CONTENT_DESTINATION_ANNOUNCEMENTS:
      return "CONTENT_DESTINATION_ANNOUNCEMENTS";
    case Action_DocumentType_ContentDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action_ExternalPresentationType {
  url: URL | undefined;
}

export interface Action_AudienceLookType {
  identification: CollectionElementType | undefined;
}

export interface Action_AudioInputType {
  index: number;
  overrideMode: boolean;
  behaviorMode: AudioInput_BehaviorMode | undefined;
  overrideVolume: boolean;
  volume: number;
}

export interface Action_MacroType {
  identification: CollectionElementType | undefined;
}

function createBaseAction(): Action {
  return {
    uuid: undefined,
    name: "",
    label: undefined,
    delayTime: 0,
    oldType: undefined,
    isEnabled: false,
    layerIdentification: undefined,
    duration: 0,
    type: 0,
    collectionElement: undefined,
    playlistItem: undefined,
    blendMode: undefined,
    transition: undefined,
    media: undefined,
    doubleItem: undefined,
    effects: undefined,
    slide: undefined,
    background: undefined,
    timer: undefined,
    clear: undefined,
    stage: undefined,
    prop: undefined,
    mask: undefined,
    message: undefined,
    socialMedia: undefined,
    communication: undefined,
    multiScreen: undefined,
    presentationDocument: undefined,
    externalPresentation: undefined,
    audienceLook: undefined,
    audioInput: undefined,
    slideDestination: undefined,
    macro: undefined,
    clearGroup: undefined,
    transportControl: undefined,
  };
}

export const Action = {
  encode(message: Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.label !== undefined) {
      Action_Label.encode(message.label, writer.uint32(26).fork()).ldelim();
    }
    if (message.delayTime !== 0) {
      writer.uint32(33).double(message.delayTime);
    }
    if (message.oldType !== undefined) {
      Action_OldType.encode(message.oldType, writer.uint32(42).fork()).ldelim();
    }
    if (message.isEnabled === true) {
      writer.uint32(48).bool(message.isEnabled);
    }
    if (message.layerIdentification !== undefined) {
      Action_LayerIdentification.encode(message.layerIdentification, writer.uint32(58).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(65).double(message.duration);
    }
    if (message.type !== 0) {
      writer.uint32(72).int32(message.type);
    }
    if (message.collectionElement !== undefined) {
      CollectionElementType.encode(message.collectionElement, writer.uint32(130).fork()).ldelim();
    }
    if (message.playlistItem !== undefined) {
      Action_PlaylistItemType.encode(message.playlistItem, writer.uint32(138).fork()).ldelim();
    }
    if (message.blendMode !== undefined) {
      Action_BlendModeType.encode(message.blendMode, writer.uint32(146).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Action_TransitionType.encode(message.transition, writer.uint32(154).fork()).ldelim();
    }
    if (message.media !== undefined) {
      Action_MediaType.encode(message.media, writer.uint32(162).fork()).ldelim();
    }
    if (message.doubleItem !== undefined) {
      Action_DoubleType.encode(message.doubleItem, writer.uint32(170).fork()).ldelim();
    }
    if (message.effects !== undefined) {
      Action_EffectsType.encode(message.effects, writer.uint32(178).fork()).ldelim();
    }
    if (message.slide !== undefined) {
      Action_SlideType.encode(message.slide, writer.uint32(186).fork()).ldelim();
    }
    if (message.background !== undefined) {
      Action_BackgroundType.encode(message.background, writer.uint32(194).fork()).ldelim();
    }
    if (message.timer !== undefined) {
      Action_TimerType.encode(message.timer, writer.uint32(202).fork()).ldelim();
    }
    if (message.clear !== undefined) {
      Action_ClearType.encode(message.clear, writer.uint32(210).fork()).ldelim();
    }
    if (message.stage !== undefined) {
      Action_StageLayoutType.encode(message.stage, writer.uint32(218).fork()).ldelim();
    }
    if (message.prop !== undefined) {
      Action_PropType.encode(message.prop, writer.uint32(226).fork()).ldelim();
    }
    if (message.mask !== undefined) {
      Action_MaskType.encode(message.mask, writer.uint32(234).fork()).ldelim();
    }
    if (message.message !== undefined) {
      Action_MessageType.encode(message.message, writer.uint32(242).fork()).ldelim();
    }
    if (message.socialMedia !== undefined) {
      Action_SocialMediaType.encode(message.socialMedia, writer.uint32(250).fork()).ldelim();
    }
    if (message.communication !== undefined) {
      Action_CommunicationType.encode(message.communication, writer.uint32(258).fork()).ldelim();
    }
    if (message.multiScreen !== undefined) {
      Action_MultiScreenType.encode(message.multiScreen, writer.uint32(266).fork()).ldelim();
    }
    if (message.presentationDocument !== undefined) {
      Action_DocumentType.encode(message.presentationDocument, writer.uint32(274).fork()).ldelim();
    }
    if (message.externalPresentation !== undefined) {
      Action_ExternalPresentationType.encode(message.externalPresentation, writer.uint32(290).fork()).ldelim();
    }
    if (message.audienceLook !== undefined) {
      Action_AudienceLookType.encode(message.audienceLook, writer.uint32(298).fork()).ldelim();
    }
    if (message.audioInput !== undefined) {
      Action_AudioInputType.encode(message.audioInput, writer.uint32(306).fork()).ldelim();
    }
    if (message.slideDestination !== undefined) {
      Action_SlideDestinationType.encode(message.slideDestination, writer.uint32(314).fork()).ldelim();
    }
    if (message.macro !== undefined) {
      Action_MacroType.encode(message.macro, writer.uint32(322).fork()).ldelim();
    }
    if (message.clearGroup !== undefined) {
      Action_ClearGroupType.encode(message.clearGroup, writer.uint32(330).fork()).ldelim();
    }
    if (message.transportControl !== undefined) {
      Action_TransportControlType.encode(message.transportControl, writer.uint32(338).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
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

          message.label = Action_Label.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.delayTime = reader.double();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.oldType = Action_OldType.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.layerIdentification = Action_LayerIdentification.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.duration = reader.double();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.collectionElement = CollectionElementType.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.playlistItem = Action_PlaylistItemType.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.blendMode = Action_BlendModeType.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.transition = Action_TransitionType.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.media = Action_MediaType.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.doubleItem = Action_DoubleType.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.effects = Action_EffectsType.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.slide = Action_SlideType.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.background = Action_BackgroundType.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.timer = Action_TimerType.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.clear = Action_ClearType.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag != 218) {
            break;
          }

          message.stage = Action_StageLayoutType.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag != 226) {
            break;
          }

          message.prop = Action_PropType.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag != 234) {
            break;
          }

          message.mask = Action_MaskType.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag != 242) {
            break;
          }

          message.message = Action_MessageType.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag != 250) {
            break;
          }

          message.socialMedia = Action_SocialMediaType.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag != 258) {
            break;
          }

          message.communication = Action_CommunicationType.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag != 266) {
            break;
          }

          message.multiScreen = Action_MultiScreenType.decode(reader, reader.uint32());
          continue;
        case 34:
          if (tag != 274) {
            break;
          }

          message.presentationDocument = Action_DocumentType.decode(reader, reader.uint32());
          continue;
        case 36:
          if (tag != 290) {
            break;
          }

          message.externalPresentation = Action_ExternalPresentationType.decode(reader, reader.uint32());
          continue;
        case 37:
          if (tag != 298) {
            break;
          }

          message.audienceLook = Action_AudienceLookType.decode(reader, reader.uint32());
          continue;
        case 38:
          if (tag != 306) {
            break;
          }

          message.audioInput = Action_AudioInputType.decode(reader, reader.uint32());
          continue;
        case 39:
          if (tag != 314) {
            break;
          }

          message.slideDestination = Action_SlideDestinationType.decode(reader, reader.uint32());
          continue;
        case 40:
          if (tag != 322) {
            break;
          }

          message.macro = Action_MacroType.decode(reader, reader.uint32());
          continue;
        case 41:
          if (tag != 330) {
            break;
          }

          message.clearGroup = Action_ClearGroupType.decode(reader, reader.uint32());
          continue;
        case 42:
          if (tag != 338) {
            break;
          }

          message.transportControl = Action_TransportControlType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      label: isSet(object.label) ? Action_Label.fromJSON(object.label) : undefined,
      delayTime: isSet(object.delayTime) ? Number(object.delayTime) : 0,
      oldType: isSet(object.oldType) ? Action_OldType.fromJSON(object.oldType) : undefined,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      layerIdentification: isSet(object.layerIdentification)
        ? Action_LayerIdentification.fromJSON(object.layerIdentification)
        : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      type: isSet(object.type) ? action_ActionTypeFromJSON(object.type) : 0,
      collectionElement: isSet(object.collectionElement)
        ? CollectionElementType.fromJSON(object.collectionElement)
        : undefined,
      playlistItem: isSet(object.playlistItem) ? Action_PlaylistItemType.fromJSON(object.playlistItem) : undefined,
      blendMode: isSet(object.blendMode) ? Action_BlendModeType.fromJSON(object.blendMode) : undefined,
      transition: isSet(object.transition) ? Action_TransitionType.fromJSON(object.transition) : undefined,
      media: isSet(object.media) ? Action_MediaType.fromJSON(object.media) : undefined,
      doubleItem: isSet(object.doubleItem) ? Action_DoubleType.fromJSON(object.doubleItem) : undefined,
      effects: isSet(object.effects) ? Action_EffectsType.fromJSON(object.effects) : undefined,
      slide: isSet(object.slide) ? Action_SlideType.fromJSON(object.slide) : undefined,
      background: isSet(object.background) ? Action_BackgroundType.fromJSON(object.background) : undefined,
      timer: isSet(object.timer) ? Action_TimerType.fromJSON(object.timer) : undefined,
      clear: isSet(object.clear) ? Action_ClearType.fromJSON(object.clear) : undefined,
      stage: isSet(object.stage) ? Action_StageLayoutType.fromJSON(object.stage) : undefined,
      prop: isSet(object.prop) ? Action_PropType.fromJSON(object.prop) : undefined,
      mask: isSet(object.mask) ? Action_MaskType.fromJSON(object.mask) : undefined,
      message: isSet(object.message) ? Action_MessageType.fromJSON(object.message) : undefined,
      socialMedia: isSet(object.socialMedia) ? Action_SocialMediaType.fromJSON(object.socialMedia) : undefined,
      communication: isSet(object.communication) ? Action_CommunicationType.fromJSON(object.communication) : undefined,
      multiScreen: isSet(object.multiScreen) ? Action_MultiScreenType.fromJSON(object.multiScreen) : undefined,
      presentationDocument: isSet(object.presentationDocument)
        ? Action_DocumentType.fromJSON(object.presentationDocument)
        : undefined,
      externalPresentation: isSet(object.externalPresentation)
        ? Action_ExternalPresentationType.fromJSON(object.externalPresentation)
        : undefined,
      audienceLook: isSet(object.audienceLook) ? Action_AudienceLookType.fromJSON(object.audienceLook) : undefined,
      audioInput: isSet(object.audioInput) ? Action_AudioInputType.fromJSON(object.audioInput) : undefined,
      slideDestination: isSet(object.slideDestination)
        ? Action_SlideDestinationType.fromJSON(object.slideDestination)
        : undefined,
      macro: isSet(object.macro) ? Action_MacroType.fromJSON(object.macro) : undefined,
      clearGroup: isSet(object.clearGroup) ? Action_ClearGroupType.fromJSON(object.clearGroup) : undefined,
      transportControl: isSet(object.transportControl)
        ? Action_TransportControlType.fromJSON(object.transportControl)
        : undefined,
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.label !== undefined && (obj.label = message.label ? Action_Label.toJSON(message.label) : undefined);
    message.delayTime !== undefined && (obj.delayTime = message.delayTime);
    message.oldType !== undefined &&
      (obj.oldType = message.oldType ? Action_OldType.toJSON(message.oldType) : undefined);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.layerIdentification !== undefined && (obj.layerIdentification = message.layerIdentification
      ? Action_LayerIdentification.toJSON(message.layerIdentification)
      : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    message.type !== undefined && (obj.type = action_ActionTypeToJSON(message.type));
    message.collectionElement !== undefined && (obj.collectionElement = message.collectionElement
      ? CollectionElementType.toJSON(message.collectionElement)
      : undefined);
    message.playlistItem !== undefined &&
      (obj.playlistItem = message.playlistItem ? Action_PlaylistItemType.toJSON(message.playlistItem) : undefined);
    message.blendMode !== undefined &&
      (obj.blendMode = message.blendMode ? Action_BlendModeType.toJSON(message.blendMode) : undefined);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Action_TransitionType.toJSON(message.transition) : undefined);
    message.media !== undefined && (obj.media = message.media ? Action_MediaType.toJSON(message.media) : undefined);
    message.doubleItem !== undefined &&
      (obj.doubleItem = message.doubleItem ? Action_DoubleType.toJSON(message.doubleItem) : undefined);
    message.effects !== undefined &&
      (obj.effects = message.effects ? Action_EffectsType.toJSON(message.effects) : undefined);
    message.slide !== undefined && (obj.slide = message.slide ? Action_SlideType.toJSON(message.slide) : undefined);
    message.background !== undefined &&
      (obj.background = message.background ? Action_BackgroundType.toJSON(message.background) : undefined);
    message.timer !== undefined && (obj.timer = message.timer ? Action_TimerType.toJSON(message.timer) : undefined);
    message.clear !== undefined && (obj.clear = message.clear ? Action_ClearType.toJSON(message.clear) : undefined);
    message.stage !== undefined &&
      (obj.stage = message.stage ? Action_StageLayoutType.toJSON(message.stage) : undefined);
    message.prop !== undefined && (obj.prop = message.prop ? Action_PropType.toJSON(message.prop) : undefined);
    message.mask !== undefined && (obj.mask = message.mask ? Action_MaskType.toJSON(message.mask) : undefined);
    message.message !== undefined &&
      (obj.message = message.message ? Action_MessageType.toJSON(message.message) : undefined);
    message.socialMedia !== undefined &&
      (obj.socialMedia = message.socialMedia ? Action_SocialMediaType.toJSON(message.socialMedia) : undefined);
    message.communication !== undefined &&
      (obj.communication = message.communication ? Action_CommunicationType.toJSON(message.communication) : undefined);
    message.multiScreen !== undefined &&
      (obj.multiScreen = message.multiScreen ? Action_MultiScreenType.toJSON(message.multiScreen) : undefined);
    message.presentationDocument !== undefined && (obj.presentationDocument = message.presentationDocument
      ? Action_DocumentType.toJSON(message.presentationDocument)
      : undefined);
    message.externalPresentation !== undefined && (obj.externalPresentation = message.externalPresentation
      ? Action_ExternalPresentationType.toJSON(message.externalPresentation)
      : undefined);
    message.audienceLook !== undefined &&
      (obj.audienceLook = message.audienceLook ? Action_AudienceLookType.toJSON(message.audienceLook) : undefined);
    message.audioInput !== undefined &&
      (obj.audioInput = message.audioInput ? Action_AudioInputType.toJSON(message.audioInput) : undefined);
    message.slideDestination !== undefined && (obj.slideDestination = message.slideDestination
      ? Action_SlideDestinationType.toJSON(message.slideDestination)
      : undefined);
    message.macro !== undefined && (obj.macro = message.macro ? Action_MacroType.toJSON(message.macro) : undefined);
    message.clearGroup !== undefined &&
      (obj.clearGroup = message.clearGroup ? Action_ClearGroupType.toJSON(message.clearGroup) : undefined);
    message.transportControl !== undefined && (obj.transportControl = message.transportControl
      ? Action_TransportControlType.toJSON(message.transportControl)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.label = (object.label !== undefined && object.label !== null)
      ? Action_Label.fromPartial(object.label)
      : undefined;
    message.delayTime = object.delayTime ?? 0;
    message.oldType = (object.oldType !== undefined && object.oldType !== null)
      ? Action_OldType.fromPartial(object.oldType)
      : undefined;
    message.isEnabled = object.isEnabled ?? false;
    message.layerIdentification = (object.layerIdentification !== undefined && object.layerIdentification !== null)
      ? Action_LayerIdentification.fromPartial(object.layerIdentification)
      : undefined;
    message.duration = object.duration ?? 0;
    message.type = object.type ?? 0;
    message.collectionElement = (object.collectionElement !== undefined && object.collectionElement !== null)
      ? CollectionElementType.fromPartial(object.collectionElement)
      : undefined;
    message.playlistItem = (object.playlistItem !== undefined && object.playlistItem !== null)
      ? Action_PlaylistItemType.fromPartial(object.playlistItem)
      : undefined;
    message.blendMode = (object.blendMode !== undefined && object.blendMode !== null)
      ? Action_BlendModeType.fromPartial(object.blendMode)
      : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Action_TransitionType.fromPartial(object.transition)
      : undefined;
    message.media = (object.media !== undefined && object.media !== null)
      ? Action_MediaType.fromPartial(object.media)
      : undefined;
    message.doubleItem = (object.doubleItem !== undefined && object.doubleItem !== null)
      ? Action_DoubleType.fromPartial(object.doubleItem)
      : undefined;
    message.effects = (object.effects !== undefined && object.effects !== null)
      ? Action_EffectsType.fromPartial(object.effects)
      : undefined;
    message.slide = (object.slide !== undefined && object.slide !== null)
      ? Action_SlideType.fromPartial(object.slide)
      : undefined;
    message.background = (object.background !== undefined && object.background !== null)
      ? Action_BackgroundType.fromPartial(object.background)
      : undefined;
    message.timer = (object.timer !== undefined && object.timer !== null)
      ? Action_TimerType.fromPartial(object.timer)
      : undefined;
    message.clear = (object.clear !== undefined && object.clear !== null)
      ? Action_ClearType.fromPartial(object.clear)
      : undefined;
    message.stage = (object.stage !== undefined && object.stage !== null)
      ? Action_StageLayoutType.fromPartial(object.stage)
      : undefined;
    message.prop = (object.prop !== undefined && object.prop !== null)
      ? Action_PropType.fromPartial(object.prop)
      : undefined;
    message.mask = (object.mask !== undefined && object.mask !== null)
      ? Action_MaskType.fromPartial(object.mask)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? Action_MessageType.fromPartial(object.message)
      : undefined;
    message.socialMedia = (object.socialMedia !== undefined && object.socialMedia !== null)
      ? Action_SocialMediaType.fromPartial(object.socialMedia)
      : undefined;
    message.communication = (object.communication !== undefined && object.communication !== null)
      ? Action_CommunicationType.fromPartial(object.communication)
      : undefined;
    message.multiScreen = (object.multiScreen !== undefined && object.multiScreen !== null)
      ? Action_MultiScreenType.fromPartial(object.multiScreen)
      : undefined;
    message.presentationDocument = (object.presentationDocument !== undefined && object.presentationDocument !== null)
      ? Action_DocumentType.fromPartial(object.presentationDocument)
      : undefined;
    message.externalPresentation = (object.externalPresentation !== undefined && object.externalPresentation !== null)
      ? Action_ExternalPresentationType.fromPartial(object.externalPresentation)
      : undefined;
    message.audienceLook = (object.audienceLook !== undefined && object.audienceLook !== null)
      ? Action_AudienceLookType.fromPartial(object.audienceLook)
      : undefined;
    message.audioInput = (object.audioInput !== undefined && object.audioInput !== null)
      ? Action_AudioInputType.fromPartial(object.audioInput)
      : undefined;
    message.slideDestination = (object.slideDestination !== undefined && object.slideDestination !== null)
      ? Action_SlideDestinationType.fromPartial(object.slideDestination)
      : undefined;
    message.macro = (object.macro !== undefined && object.macro !== null)
      ? Action_MacroType.fromPartial(object.macro)
      : undefined;
    message.clearGroup = (object.clearGroup !== undefined && object.clearGroup !== null)
      ? Action_ClearGroupType.fromPartial(object.clearGroup)
      : undefined;
    message.transportControl = (object.transportControl !== undefined && object.transportControl !== null)
      ? Action_TransportControlType.fromPartial(object.transportControl)
      : undefined;
    return message;
  },
};

function createBaseAction_OldType(): Action_OldType {
  return { category: 0, applicationType: 0 };
}

export const Action_OldType = {
  encode(message: Action_OldType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== 0) {
      writer.uint32(8).int32(message.category);
    }
    if (message.applicationType !== 0) {
      writer.uint32(16).int32(message.applicationType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_OldType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_OldType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.category = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.applicationType = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_OldType {
    return {
      category: isSet(object.category) ? action_OldType_CategoryFromJSON(object.category) : 0,
      applicationType: isSet(object.applicationType) ? Number(object.applicationType) : 0,
    };
  },

  toJSON(message: Action_OldType): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = action_OldType_CategoryToJSON(message.category));
    message.applicationType !== undefined && (obj.applicationType = Math.round(message.applicationType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_OldType>, I>>(base?: I): Action_OldType {
    return Action_OldType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_OldType>, I>>(object: I): Action_OldType {
    const message = createBaseAction_OldType();
    message.category = object.category ?? 0;
    message.applicationType = object.applicationType ?? 0;
    return message;
  },
};

function createBaseAction_Label(): Action_Label {
  return { text: "", color: undefined };
}

export const Action_Label = {
  encode(message: Action_Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_Label {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_Label();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_Label {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: Action_Label): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_Label>, I>>(base?: I): Action_Label {
    return Action_Label.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_Label>, I>>(object: I): Action_Label {
    const message = createBaseAction_Label();
    message.text = object.text ?? "";
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    return message;
  },
};

function createBaseAction_LayerIdentification(): Action_LayerIdentification {
  return { uuid: undefined, name: "" };
}

export const Action_LayerIdentification = {
  encode(message: Action_LayerIdentification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_LayerIdentification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_LayerIdentification();
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
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_LayerIdentification {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Action_LayerIdentification): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_LayerIdentification>, I>>(base?: I): Action_LayerIdentification {
    return Action_LayerIdentification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_LayerIdentification>, I>>(object: I): Action_LayerIdentification {
    const message = createBaseAction_LayerIdentification();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAction_PlaylistItemType(): Action_PlaylistItemType {
  return {
    playlistUuid: undefined,
    playlistName: "",
    itemUuid: undefined,
    itemName: "",
    selectPlaylist: false,
    alwaysRetrigger: false,
  };
}

export const Action_PlaylistItemType = {
  encode(message: Action_PlaylistItemType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playlistUuid !== undefined) {
      UUID.encode(message.playlistUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.playlistName !== "") {
      writer.uint32(18).string(message.playlistName);
    }
    if (message.itemUuid !== undefined) {
      UUID.encode(message.itemUuid, writer.uint32(26).fork()).ldelim();
    }
    if (message.itemName !== "") {
      writer.uint32(34).string(message.itemName);
    }
    if (message.selectPlaylist === true) {
      writer.uint32(40).bool(message.selectPlaylist);
    }
    if (message.alwaysRetrigger === true) {
      writer.uint32(48).bool(message.alwaysRetrigger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_PlaylistItemType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_PlaylistItemType();
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

          message.playlistName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.itemUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.itemName = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.selectPlaylist = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.alwaysRetrigger = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_PlaylistItemType {
    return {
      playlistUuid: isSet(object.playlistUuid) ? UUID.fromJSON(object.playlistUuid) : undefined,
      playlistName: isSet(object.playlistName) ? String(object.playlistName) : "",
      itemUuid: isSet(object.itemUuid) ? UUID.fromJSON(object.itemUuid) : undefined,
      itemName: isSet(object.itemName) ? String(object.itemName) : "",
      selectPlaylist: isSet(object.selectPlaylist) ? Boolean(object.selectPlaylist) : false,
      alwaysRetrigger: isSet(object.alwaysRetrigger) ? Boolean(object.alwaysRetrigger) : false,
    };
  },

  toJSON(message: Action_PlaylistItemType): unknown {
    const obj: any = {};
    message.playlistUuid !== undefined &&
      (obj.playlistUuid = message.playlistUuid ? UUID.toJSON(message.playlistUuid) : undefined);
    message.playlistName !== undefined && (obj.playlistName = message.playlistName);
    message.itemUuid !== undefined && (obj.itemUuid = message.itemUuid ? UUID.toJSON(message.itemUuid) : undefined);
    message.itemName !== undefined && (obj.itemName = message.itemName);
    message.selectPlaylist !== undefined && (obj.selectPlaylist = message.selectPlaylist);
    message.alwaysRetrigger !== undefined && (obj.alwaysRetrigger = message.alwaysRetrigger);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_PlaylistItemType>, I>>(base?: I): Action_PlaylistItemType {
    return Action_PlaylistItemType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_PlaylistItemType>, I>>(object: I): Action_PlaylistItemType {
    const message = createBaseAction_PlaylistItemType();
    message.playlistUuid = (object.playlistUuid !== undefined && object.playlistUuid !== null)
      ? UUID.fromPartial(object.playlistUuid)
      : undefined;
    message.playlistName = object.playlistName ?? "";
    message.itemUuid = (object.itemUuid !== undefined && object.itemUuid !== null)
      ? UUID.fromPartial(object.itemUuid)
      : undefined;
    message.itemName = object.itemName ?? "";
    message.selectPlaylist = object.selectPlaylist ?? false;
    message.alwaysRetrigger = object.alwaysRetrigger ?? false;
    return message;
  },
};

function createBaseAction_BlendModeType(): Action_BlendModeType {
  return { blendMode: 0, blend: undefined };
}

export const Action_BlendModeType = {
  encode(message: Action_BlendModeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blendMode !== 0) {
      writer.uint32(8).int32(message.blendMode);
    }
    if (message.blend !== undefined) {
      Layer_Blending.encode(message.blend, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_BlendModeType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_BlendModeType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.blendMode = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.blend = Layer_Blending.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_BlendModeType {
    return {
      blendMode: isSet(object.blendMode) ? action_BlendModeType_BlendModeFromJSON(object.blendMode) : 0,
      blend: isSet(object.blend) ? Layer_Blending.fromJSON(object.blend) : undefined,
    };
  },

  toJSON(message: Action_BlendModeType): unknown {
    const obj: any = {};
    message.blendMode !== undefined && (obj.blendMode = action_BlendModeType_BlendModeToJSON(message.blendMode));
    message.blend !== undefined && (obj.blend = message.blend ? Layer_Blending.toJSON(message.blend) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_BlendModeType>, I>>(base?: I): Action_BlendModeType {
    return Action_BlendModeType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_BlendModeType>, I>>(object: I): Action_BlendModeType {
    const message = createBaseAction_BlendModeType();
    message.blendMode = object.blendMode ?? 0;
    message.blend = (object.blend !== undefined && object.blend !== null)
      ? Layer_Blending.fromPartial(object.blend)
      : undefined;
    return message;
  },
};

function createBaseAction_TransitionType(): Action_TransitionType {
  return { transitionName: "", transition: undefined };
}

export const Action_TransitionType = {
  encode(message: Action_TransitionType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transitionName !== "") {
      writer.uint32(10).string(message.transitionName);
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TransitionType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TransitionType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transitionName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_TransitionType {
    return {
      transitionName: isSet(object.transitionName) ? String(object.transitionName) : "",
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
    };
  },

  toJSON(message: Action_TransitionType): unknown {
    const obj: any = {};
    message.transitionName !== undefined && (obj.transitionName = message.transitionName);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TransitionType>, I>>(base?: I): Action_TransitionType {
    return Action_TransitionType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TransitionType>, I>>(object: I): Action_TransitionType {
    const message = createBaseAction_TransitionType();
    message.transitionName = object.transitionName ?? "";
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    return message;
  },
};

function createBaseAction_DoubleType(): Action_DoubleType {
  return { value: 0 };
}

export const Action_DoubleType = {
  encode(message: Action_DoubleType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_DoubleType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_DoubleType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_DoubleType {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: Action_DoubleType): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_DoubleType>, I>>(base?: I): Action_DoubleType {
    return Action_DoubleType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_DoubleType>, I>>(object: I): Action_DoubleType {
    const message = createBaseAction_DoubleType();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAction_EffectsType(): Action_EffectsType {
  return { effects: [] };
}

export const Action_EffectsType = {
  encode(message: Action_EffectsType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_EffectsType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_EffectsType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_EffectsType {
    return { effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [] };
  },

  toJSON(message: Action_EffectsType): unknown {
    const obj: any = {};
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_EffectsType>, I>>(base?: I): Action_EffectsType {
    return Action_EffectsType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_EffectsType>, I>>(object: I): Action_EffectsType {
    const message = createBaseAction_EffectsType();
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAction_MediaType(): Action_MediaType {
  return {
    transitionDuration: 0,
    selectedEffectPresetUuid: undefined,
    transition: undefined,
    effects: [],
    element: undefined,
    layerType: 0,
    alwaysRetrigger: false,
    markers: [],
    image: undefined,
    video: undefined,
    audio: undefined,
    liveVideo: undefined,
  };
}

export const Action_MediaType = {
  encode(message: Action_MediaType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transitionDuration !== 0) {
      writer.uint32(9).double(message.transitionDuration);
    }
    if (message.selectedEffectPresetUuid !== undefined) {
      UUID.encode(message.selectedEffectPresetUuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.element !== undefined) {
      Media.encode(message.element, writer.uint32(42).fork()).ldelim();
    }
    if (message.layerType !== 0) {
      writer.uint32(80).int32(message.layerType);
    }
    if (message.alwaysRetrigger === true) {
      writer.uint32(88).bool(message.alwaysRetrigger);
    }
    for (const v of message.markers) {
      Action_MediaType_PlaybackMarker.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Action_MediaType_Image.encode(message.image, writer.uint32(50).fork()).ldelim();
    }
    if (message.video !== undefined) {
      Action_MediaType_Video.encode(message.video, writer.uint32(58).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Action_MediaType_Audio.encode(message.audio, writer.uint32(66).fork()).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Action_MediaType_LiveVideo.encode(message.liveVideo, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.transitionDuration = reader.double();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.selectedEffectPresetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.element = Media.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.layerType = reader.int32() as any;
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.alwaysRetrigger = reader.bool();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.markers.push(Action_MediaType_PlaybackMarker.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.image = Action_MediaType_Image.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.video = Action_MediaType_Video.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.audio = Action_MediaType_Audio.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.liveVideo = Action_MediaType_LiveVideo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MediaType {
    return {
      transitionDuration: isSet(object.transitionDuration) ? Number(object.transitionDuration) : 0,
      selectedEffectPresetUuid: isSet(object.selectedEffectPresetUuid)
        ? UUID.fromJSON(object.selectedEffectPresetUuid)
        : undefined,
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
      effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [],
      element: isSet(object.element) ? Media.fromJSON(object.element) : undefined,
      layerType: isSet(object.layerType) ? action_MediaType_LayerTypeFromJSON(object.layerType) : 0,
      alwaysRetrigger: isSet(object.alwaysRetrigger) ? Boolean(object.alwaysRetrigger) : false,
      markers: Array.isArray(object?.markers)
        ? object.markers.map((e: any) => Action_MediaType_PlaybackMarker.fromJSON(e))
        : [],
      image: isSet(object.image) ? Action_MediaType_Image.fromJSON(object.image) : undefined,
      video: isSet(object.video) ? Action_MediaType_Video.fromJSON(object.video) : undefined,
      audio: isSet(object.audio) ? Action_MediaType_Audio.fromJSON(object.audio) : undefined,
      liveVideo: isSet(object.liveVideo) ? Action_MediaType_LiveVideo.fromJSON(object.liveVideo) : undefined,
    };
  },

  toJSON(message: Action_MediaType): unknown {
    const obj: any = {};
    message.transitionDuration !== undefined && (obj.transitionDuration = message.transitionDuration);
    message.selectedEffectPresetUuid !== undefined && (obj.selectedEffectPresetUuid = message.selectedEffectPresetUuid
      ? UUID.toJSON(message.selectedEffectPresetUuid)
      : undefined);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    message.element !== undefined && (obj.element = message.element ? Media.toJSON(message.element) : undefined);
    message.layerType !== undefined && (obj.layerType = action_MediaType_LayerTypeToJSON(message.layerType));
    message.alwaysRetrigger !== undefined && (obj.alwaysRetrigger = message.alwaysRetrigger);
    if (message.markers) {
      obj.markers = message.markers.map((e) => e ? Action_MediaType_PlaybackMarker.toJSON(e) : undefined);
    } else {
      obj.markers = [];
    }
    message.image !== undefined &&
      (obj.image = message.image ? Action_MediaType_Image.toJSON(message.image) : undefined);
    message.video !== undefined &&
      (obj.video = message.video ? Action_MediaType_Video.toJSON(message.video) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Action_MediaType_Audio.toJSON(message.audio) : undefined);
    message.liveVideo !== undefined &&
      (obj.liveVideo = message.liveVideo ? Action_MediaType_LiveVideo.toJSON(message.liveVideo) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType>, I>>(base?: I): Action_MediaType {
    return Action_MediaType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType>, I>>(object: I): Action_MediaType {
    const message = createBaseAction_MediaType();
    message.transitionDuration = object.transitionDuration ?? 0;
    message.selectedEffectPresetUuid =
      (object.selectedEffectPresetUuid !== undefined && object.selectedEffectPresetUuid !== null)
        ? UUID.fromPartial(object.selectedEffectPresetUuid)
        : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.element = (object.element !== undefined && object.element !== null)
      ? Media.fromPartial(object.element)
      : undefined;
    message.layerType = object.layerType ?? 0;
    message.alwaysRetrigger = object.alwaysRetrigger ?? false;
    message.markers = object.markers?.map((e) => Action_MediaType_PlaybackMarker.fromPartial(e)) || [];
    message.image = (object.image !== undefined && object.image !== null)
      ? Action_MediaType_Image.fromPartial(object.image)
      : undefined;
    message.video = (object.video !== undefined && object.video !== null)
      ? Action_MediaType_Video.fromPartial(object.video)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Action_MediaType_Audio.fromPartial(object.audio)
      : undefined;
    message.liveVideo = (object.liveVideo !== undefined && object.liveVideo !== null)
      ? Action_MediaType_LiveVideo.fromPartial(object.liveVideo)
      : undefined;
    return message;
  },
};

function createBaseAction_MediaType_Image(): Action_MediaType_Image {
  return {};
}

export const Action_MediaType_Image = {
  encode(_: Action_MediaType_Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType_Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType_Image();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Action_MediaType_Image {
    return {};
  },

  toJSON(_: Action_MediaType_Image): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType_Image>, I>>(base?: I): Action_MediaType_Image {
    return Action_MediaType_Image.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType_Image>, I>>(_: I): Action_MediaType_Image {
    const message = createBaseAction_MediaType_Image();
    return message;
  },
};

function createBaseAction_MediaType_Video(): Action_MediaType_Video {
  return { playbackBehavior: 0, endBehavior: 0, loopTime: 0, timesToLoop: 0, softLoop: false, softLoopDuration: 0 };
}

export const Action_MediaType_Video = {
  encode(message: Action_MediaType_Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playbackBehavior !== 0) {
      writer.uint32(8).int32(message.playbackBehavior);
    }
    if (message.endBehavior !== 0) {
      writer.uint32(16).int32(message.endBehavior);
    }
    if (message.loopTime !== 0) {
      writer.uint32(25).double(message.loopTime);
    }
    if (message.timesToLoop !== 0) {
      writer.uint32(32).uint32(message.timesToLoop);
    }
    if (message.softLoop === true) {
      writer.uint32(40).bool(message.softLoop);
    }
    if (message.softLoopDuration !== 0) {
      writer.uint32(49).double(message.softLoopDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType_Video {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType_Video();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.endBehavior = reader.int32() as any;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.loopTime = reader.double();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.timesToLoop = reader.uint32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.softLoop = reader.bool();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.softLoopDuration = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MediaType_Video {
    return {
      playbackBehavior: isSet(object.playbackBehavior)
        ? action_MediaType_Video_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      endBehavior: isSet(object.endBehavior) ? action_MediaType_Video_EndBehaviorFromJSON(object.endBehavior) : 0,
      loopTime: isSet(object.loopTime) ? Number(object.loopTime) : 0,
      timesToLoop: isSet(object.timesToLoop) ? Number(object.timesToLoop) : 0,
      softLoop: isSet(object.softLoop) ? Boolean(object.softLoop) : false,
      softLoopDuration: isSet(object.softLoopDuration) ? Number(object.softLoopDuration) : 0,
    };
  },

  toJSON(message: Action_MediaType_Video): unknown {
    const obj: any = {};
    message.playbackBehavior !== undefined &&
      (obj.playbackBehavior = action_MediaType_Video_PlaybackBehaviorToJSON(message.playbackBehavior));
    message.endBehavior !== undefined &&
      (obj.endBehavior = action_MediaType_Video_EndBehaviorToJSON(message.endBehavior));
    message.loopTime !== undefined && (obj.loopTime = message.loopTime);
    message.timesToLoop !== undefined && (obj.timesToLoop = Math.round(message.timesToLoop));
    message.softLoop !== undefined && (obj.softLoop = message.softLoop);
    message.softLoopDuration !== undefined && (obj.softLoopDuration = message.softLoopDuration);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType_Video>, I>>(base?: I): Action_MediaType_Video {
    return Action_MediaType_Video.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType_Video>, I>>(object: I): Action_MediaType_Video {
    const message = createBaseAction_MediaType_Video();
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.endBehavior = object.endBehavior ?? 0;
    message.loopTime = object.loopTime ?? 0;
    message.timesToLoop = object.timesToLoop ?? 0;
    message.softLoop = object.softLoop ?? false;
    message.softLoopDuration = object.softLoopDuration ?? 0;
    return message;
  },
};

function createBaseAction_MediaType_Audio(): Action_MediaType_Audio {
  return { playbackBehavior: 0, loopTime: 0, timesToLoop: 0, audioType: 0 };
}

export const Action_MediaType_Audio = {
  encode(message: Action_MediaType_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playbackBehavior !== 0) {
      writer.uint32(8).int32(message.playbackBehavior);
    }
    if (message.loopTime !== 0) {
      writer.uint32(17).double(message.loopTime);
    }
    if (message.timesToLoop !== 0) {
      writer.uint32(24).uint32(message.timesToLoop);
    }
    if (message.audioType !== 0) {
      writer.uint32(32).int32(message.audioType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType_Audio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType_Audio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.loopTime = reader.double();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timesToLoop = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.audioType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MediaType_Audio {
    return {
      playbackBehavior: isSet(object.playbackBehavior)
        ? action_MediaType_Audio_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      loopTime: isSet(object.loopTime) ? Number(object.loopTime) : 0,
      timesToLoop: isSet(object.timesToLoop) ? Number(object.timesToLoop) : 0,
      audioType: isSet(object.audioType) ? action_MediaType_Audio_MediaActionAudioTypeFromJSON(object.audioType) : 0,
    };
  },

  toJSON(message: Action_MediaType_Audio): unknown {
    const obj: any = {};
    message.playbackBehavior !== undefined &&
      (obj.playbackBehavior = action_MediaType_Audio_PlaybackBehaviorToJSON(message.playbackBehavior));
    message.loopTime !== undefined && (obj.loopTime = message.loopTime);
    message.timesToLoop !== undefined && (obj.timesToLoop = Math.round(message.timesToLoop));
    message.audioType !== undefined &&
      (obj.audioType = action_MediaType_Audio_MediaActionAudioTypeToJSON(message.audioType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType_Audio>, I>>(base?: I): Action_MediaType_Audio {
    return Action_MediaType_Audio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType_Audio>, I>>(object: I): Action_MediaType_Audio {
    const message = createBaseAction_MediaType_Audio();
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.loopTime = object.loopTime ?? 0;
    message.timesToLoop = object.timesToLoop ?? 0;
    message.audioType = object.audioType ?? 0;
    return message;
  },
};

function createBaseAction_MediaType_LiveVideo(): Action_MediaType_LiveVideo {
  return {};
}

export const Action_MediaType_LiveVideo = {
  encode(_: Action_MediaType_LiveVideo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType_LiveVideo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType_LiveVideo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Action_MediaType_LiveVideo {
    return {};
  },

  toJSON(_: Action_MediaType_LiveVideo): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType_LiveVideo>, I>>(base?: I): Action_MediaType_LiveVideo {
    return Action_MediaType_LiveVideo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType_LiveVideo>, I>>(_: I): Action_MediaType_LiveVideo {
    const message = createBaseAction_MediaType_LiveVideo();
    return message;
  },
};

function createBaseAction_MediaType_PlaybackMarker(): Action_MediaType_PlaybackMarker {
  return { uuid: undefined, time: 0, color: undefined, name: "", actions: [] };
}

export const Action_MediaType_PlaybackMarker = {
  encode(message: Action_MediaType_PlaybackMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MediaType_PlaybackMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MediaType_PlaybackMarker();
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
          if (tag != 17) {
            break;
          }

          message.time = reader.double();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MediaType_PlaybackMarker {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      time: isSet(object.time) ? Number(object.time) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: Action_MediaType_PlaybackMarker): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.time !== undefined && (obj.time = message.time);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? Action.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MediaType_PlaybackMarker>, I>>(base?: I): Action_MediaType_PlaybackMarker {
    return Action_MediaType_PlaybackMarker.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MediaType_PlaybackMarker>, I>>(
    object: I,
  ): Action_MediaType_PlaybackMarker {
    const message = createBaseAction_MediaType_PlaybackMarker();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.time = object.time ?? 0;
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.name = object.name ?? "";
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAction_SlideType(): Action_SlideType {
  return { presentation: undefined, prop: undefined };
}

export const Action_SlideType = {
  encode(message: Action_SlideType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presentation !== undefined) {
      PresentationSlide.encode(message.presentation, writer.uint32(18).fork()).ldelim();
    }
    if (message.prop !== undefined) {
      PropSlide.encode(message.prop, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_SlideType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_SlideType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.presentation = PresentationSlide.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.prop = PropSlide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_SlideType {
    return {
      presentation: isSet(object.presentation) ? PresentationSlide.fromJSON(object.presentation) : undefined,
      prop: isSet(object.prop) ? PropSlide.fromJSON(object.prop) : undefined,
    };
  },

  toJSON(message: Action_SlideType): unknown {
    const obj: any = {};
    message.presentation !== undefined &&
      (obj.presentation = message.presentation ? PresentationSlide.toJSON(message.presentation) : undefined);
    message.prop !== undefined && (obj.prop = message.prop ? PropSlide.toJSON(message.prop) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_SlideType>, I>>(base?: I): Action_SlideType {
    return Action_SlideType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_SlideType>, I>>(object: I): Action_SlideType {
    const message = createBaseAction_SlideType();
    message.presentation = (object.presentation !== undefined && object.presentation !== null)
      ? PresentationSlide.fromPartial(object.presentation)
      : undefined;
    message.prop = (object.prop !== undefined && object.prop !== null) ? PropSlide.fromPartial(object.prop) : undefined;
    return message;
  },
};

function createBaseAction_BackgroundType(): Action_BackgroundType {
  return { element: undefined };
}

export const Action_BackgroundType = {
  encode(message: Action_BackgroundType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.element !== undefined) {
      Background.encode(message.element, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_BackgroundType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_BackgroundType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.element = Background.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_BackgroundType {
    return { element: isSet(object.element) ? Background.fromJSON(object.element) : undefined };
  },

  toJSON(message: Action_BackgroundType): unknown {
    const obj: any = {};
    message.element !== undefined && (obj.element = message.element ? Background.toJSON(message.element) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_BackgroundType>, I>>(base?: I): Action_BackgroundType {
    return Action_BackgroundType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_BackgroundType>, I>>(object: I): Action_BackgroundType {
    const message = createBaseAction_BackgroundType();
    message.element = (object.element !== undefined && object.element !== null)
      ? Background.fromPartial(object.element)
      : undefined;
    return message;
  },
};

function createBaseAction_TimerType(): Action_TimerType {
  return { actionType: 0, timerIdentification: undefined, timerConfiguration: undefined };
}

export const Action_TimerType = {
  encode(message: Action_TimerType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(16).int32(message.actionType);
    }
    if (message.timerIdentification !== undefined) {
      CollectionElementType.encode(message.timerIdentification, writer.uint32(34).fork()).ldelim();
    }
    if (message.timerConfiguration !== undefined) {
      Timer_Configuration.encode(message.timerConfiguration, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TimerType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TimerType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.timerIdentification = CollectionElementType.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.timerConfiguration = Timer_Configuration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_TimerType {
    return {
      actionType: isSet(object.actionType) ? action_TimerType_TimerActionFromJSON(object.actionType) : 0,
      timerIdentification: isSet(object.timerIdentification)
        ? CollectionElementType.fromJSON(object.timerIdentification)
        : undefined,
      timerConfiguration: isSet(object.timerConfiguration)
        ? Timer_Configuration.fromJSON(object.timerConfiguration)
        : undefined,
    };
  },

  toJSON(message: Action_TimerType): unknown {
    const obj: any = {};
    message.actionType !== undefined && (obj.actionType = action_TimerType_TimerActionToJSON(message.actionType));
    message.timerIdentification !== undefined && (obj.timerIdentification = message.timerIdentification
      ? CollectionElementType.toJSON(message.timerIdentification)
      : undefined);
    message.timerConfiguration !== undefined && (obj.timerConfiguration = message.timerConfiguration
      ? Timer_Configuration.toJSON(message.timerConfiguration)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TimerType>, I>>(base?: I): Action_TimerType {
    return Action_TimerType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TimerType>, I>>(object: I): Action_TimerType {
    const message = createBaseAction_TimerType();
    message.actionType = object.actionType ?? 0;
    message.timerIdentification = (object.timerIdentification !== undefined && object.timerIdentification !== null)
      ? CollectionElementType.fromPartial(object.timerIdentification)
      : undefined;
    message.timerConfiguration = (object.timerConfiguration !== undefined && object.timerConfiguration !== null)
      ? Timer_Configuration.fromPartial(object.timerConfiguration)
      : undefined;
    return message;
  },
};

function createBaseAction_ClearType(): Action_ClearType {
  return { targetLayer: 0, contentDestination: 0 };
}

export const Action_ClearType = {
  encode(message: Action_ClearType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetLayer !== 0) {
      writer.uint32(16).int32(message.targetLayer);
    }
    if (message.contentDestination !== 0) {
      writer.uint32(32).int32(message.contentDestination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ClearType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_ClearType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.targetLayer = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_ClearType {
    return {
      targetLayer: isSet(object.targetLayer) ? action_ClearType_ClearTargetLayerFromJSON(object.targetLayer) : 0,
      contentDestination: isSet(object.contentDestination)
        ? action_ClearType_ContentDestinationFromJSON(object.contentDestination)
        : 0,
    };
  },

  toJSON(message: Action_ClearType): unknown {
    const obj: any = {};
    message.targetLayer !== undefined &&
      (obj.targetLayer = action_ClearType_ClearTargetLayerToJSON(message.targetLayer));
    message.contentDestination !== undefined &&
      (obj.contentDestination = action_ClearType_ContentDestinationToJSON(message.contentDestination));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_ClearType>, I>>(base?: I): Action_ClearType {
    return Action_ClearType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_ClearType>, I>>(object: I): Action_ClearType {
    const message = createBaseAction_ClearType();
    message.targetLayer = object.targetLayer ?? 0;
    message.contentDestination = object.contentDestination ?? 0;
    return message;
  },
};

function createBaseAction_ClearGroupType(): Action_ClearGroupType {
  return { identification: undefined };
}

export const Action_ClearGroupType = {
  encode(message: Action_ClearGroupType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ClearGroupType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_ClearGroupType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_ClearGroupType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_ClearGroupType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_ClearGroupType>, I>>(base?: I): Action_ClearGroupType {
    return Action_ClearGroupType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_ClearGroupType>, I>>(object: I): Action_ClearGroupType {
    const message = createBaseAction_ClearGroupType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

function createBaseAction_TransportControlType(): Action_TransportControlType {
  return { play: undefined, pause: undefined, jumpToTime: undefined };
}

export const Action_TransportControlType = {
  encode(message: Action_TransportControlType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.play !== undefined) {
      Action_TransportControlType_Play.encode(message.play, writer.uint32(10).fork()).ldelim();
    }
    if (message.pause !== undefined) {
      Action_TransportControlType_Pause.encode(message.pause, writer.uint32(18).fork()).ldelim();
    }
    if (message.jumpToTime !== undefined) {
      Action_TransportControlType_JumpToTime.encode(message.jumpToTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TransportControlType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TransportControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.play = Action_TransportControlType_Play.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pause = Action_TransportControlType_Pause.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.jumpToTime = Action_TransportControlType_JumpToTime.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_TransportControlType {
    return {
      play: isSet(object.play) ? Action_TransportControlType_Play.fromJSON(object.play) : undefined,
      pause: isSet(object.pause) ? Action_TransportControlType_Pause.fromJSON(object.pause) : undefined,
      jumpToTime: isSet(object.jumpToTime)
        ? Action_TransportControlType_JumpToTime.fromJSON(object.jumpToTime)
        : undefined,
    };
  },

  toJSON(message: Action_TransportControlType): unknown {
    const obj: any = {};
    message.play !== undefined &&
      (obj.play = message.play ? Action_TransportControlType_Play.toJSON(message.play) : undefined);
    message.pause !== undefined &&
      (obj.pause = message.pause ? Action_TransportControlType_Pause.toJSON(message.pause) : undefined);
    message.jumpToTime !== undefined && (obj.jumpToTime = message.jumpToTime
      ? Action_TransportControlType_JumpToTime.toJSON(message.jumpToTime)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TransportControlType>, I>>(base?: I): Action_TransportControlType {
    return Action_TransportControlType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TransportControlType>, I>>(object: I): Action_TransportControlType {
    const message = createBaseAction_TransportControlType();
    message.play = (object.play !== undefined && object.play !== null)
      ? Action_TransportControlType_Play.fromPartial(object.play)
      : undefined;
    message.pause = (object.pause !== undefined && object.pause !== null)
      ? Action_TransportControlType_Pause.fromPartial(object.pause)
      : undefined;
    message.jumpToTime = (object.jumpToTime !== undefined && object.jumpToTime !== null)
      ? Action_TransportControlType_JumpToTime.fromPartial(object.jumpToTime)
      : undefined;
    return message;
  },
};

function createBaseAction_TransportControlType_Play(): Action_TransportControlType_Play {
  return {};
}

export const Action_TransportControlType_Play = {
  encode(_: Action_TransportControlType_Play, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TransportControlType_Play {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TransportControlType_Play();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Action_TransportControlType_Play {
    return {};
  },

  toJSON(_: Action_TransportControlType_Play): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TransportControlType_Play>, I>>(
    base?: I,
  ): Action_TransportControlType_Play {
    return Action_TransportControlType_Play.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TransportControlType_Play>, I>>(
    _: I,
  ): Action_TransportControlType_Play {
    const message = createBaseAction_TransportControlType_Play();
    return message;
  },
};

function createBaseAction_TransportControlType_Pause(): Action_TransportControlType_Pause {
  return {};
}

export const Action_TransportControlType_Pause = {
  encode(_: Action_TransportControlType_Pause, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TransportControlType_Pause {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TransportControlType_Pause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Action_TransportControlType_Pause {
    return {};
  },

  toJSON(_: Action_TransportControlType_Pause): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TransportControlType_Pause>, I>>(
    base?: I,
  ): Action_TransportControlType_Pause {
    return Action_TransportControlType_Pause.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TransportControlType_Pause>, I>>(
    _: I,
  ): Action_TransportControlType_Pause {
    const message = createBaseAction_TransportControlType_Pause();
    return message;
  },
};

function createBaseAction_TransportControlType_JumpToTime(): Action_TransportControlType_JumpToTime {
  return { time: 0 };
}

export const Action_TransportControlType_JumpToTime = {
  encode(message: Action_TransportControlType_JumpToTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_TransportControlType_JumpToTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_TransportControlType_JumpToTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.time = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_TransportControlType_JumpToTime {
    return { time: isSet(object.time) ? Number(object.time) : 0 };
  },

  toJSON(message: Action_TransportControlType_JumpToTime): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_TransportControlType_JumpToTime>, I>>(
    base?: I,
  ): Action_TransportControlType_JumpToTime {
    return Action_TransportControlType_JumpToTime.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_TransportControlType_JumpToTime>, I>>(
    object: I,
  ): Action_TransportControlType_JumpToTime {
    const message = createBaseAction_TransportControlType_JumpToTime();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseAction_StageLayoutType(): Action_StageLayoutType {
  return { stageScreenAssignments: [], slideTarget: 0 };
}

export const Action_StageLayoutType = {
  encode(message: Action_StageLayoutType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stageScreenAssignments) {
      Stage_ScreenAssignment.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.slideTarget !== 0) {
      writer.uint32(40).int32(message.slideTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_StageLayoutType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_StageLayoutType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag != 34) {
            break;
          }

          message.stageScreenAssignments.push(Stage_ScreenAssignment.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.slideTarget = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_StageLayoutType {
    return {
      stageScreenAssignments: Array.isArray(object?.stageScreenAssignments)
        ? object.stageScreenAssignments.map((e: any) => Stage_ScreenAssignment.fromJSON(e))
        : [],
      slideTarget: isSet(object.slideTarget) ? action_StageLayoutType_SlideTargetFromJSON(object.slideTarget) : 0,
    };
  },

  toJSON(message: Action_StageLayoutType): unknown {
    const obj: any = {};
    if (message.stageScreenAssignments) {
      obj.stageScreenAssignments = message.stageScreenAssignments.map((e) =>
        e ? Stage_ScreenAssignment.toJSON(e) : undefined
      );
    } else {
      obj.stageScreenAssignments = [];
    }
    message.slideTarget !== undefined &&
      (obj.slideTarget = action_StageLayoutType_SlideTargetToJSON(message.slideTarget));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_StageLayoutType>, I>>(base?: I): Action_StageLayoutType {
    return Action_StageLayoutType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_StageLayoutType>, I>>(object: I): Action_StageLayoutType {
    const message = createBaseAction_StageLayoutType();
    message.stageScreenAssignments = object.stageScreenAssignments?.map((e) => Stage_ScreenAssignment.fromPartial(e)) ||
      [];
    message.slideTarget = object.slideTarget ?? 0;
    return message;
  },
};

function createBaseAction_SlideDestinationType(): Action_SlideDestinationType {
  return { slideTarget: 0 };
}

export const Action_SlideDestinationType = {
  encode(message: Action_SlideDestinationType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slideTarget !== 0) {
      writer.uint32(8).int32(message.slideTarget);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_SlideDestinationType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_SlideDestinationType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.slideTarget = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_SlideDestinationType {
    return {
      slideTarget: isSet(object.slideTarget) ? action_SlideDestinationType_SlideTargetFromJSON(object.slideTarget) : 0,
    };
  },

  toJSON(message: Action_SlideDestinationType): unknown {
    const obj: any = {};
    message.slideTarget !== undefined &&
      (obj.slideTarget = action_SlideDestinationType_SlideTargetToJSON(message.slideTarget));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_SlideDestinationType>, I>>(base?: I): Action_SlideDestinationType {
    return Action_SlideDestinationType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_SlideDestinationType>, I>>(object: I): Action_SlideDestinationType {
    const message = createBaseAction_SlideDestinationType();
    message.slideTarget = object.slideTarget ?? 0;
    return message;
  },
};

function createBaseAction_PropType(): Action_PropType {
  return { identification: undefined };
}

export const Action_PropType = {
  encode(message: Action_PropType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_PropType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_PropType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_PropType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_PropType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_PropType>, I>>(base?: I): Action_PropType {
    return Action_PropType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_PropType>, I>>(object: I): Action_PropType {
    const message = createBaseAction_PropType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

function createBaseAction_MaskType(): Action_MaskType {
  return { identification: undefined };
}

export const Action_MaskType = {
  encode(message: Action_MaskType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MaskType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MaskType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MaskType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_MaskType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MaskType>, I>>(base?: I): Action_MaskType {
    return Action_MaskType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MaskType>, I>>(object: I): Action_MaskType {
    const message = createBaseAction_MaskType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

function createBaseAction_MessageType(): Action_MessageType {
  return { messageIdentificaton: undefined, content: [] };
}

export const Action_MessageType = {
  encode(message: Action_MessageType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageIdentificaton !== undefined) {
      CollectionElementType.encode(message.messageIdentificaton, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.content) {
      Message_TokenValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MessageType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MessageType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.messageIdentificaton = CollectionElementType.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.content.push(Message_TokenValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MessageType {
    return {
      messageIdentificaton: isSet(object.messageIdentificaton)
        ? CollectionElementType.fromJSON(object.messageIdentificaton)
        : undefined,
      content: Array.isArray(object?.content) ? object.content.map((e: any) => Message_TokenValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: Action_MessageType): unknown {
    const obj: any = {};
    message.messageIdentificaton !== undefined && (obj.messageIdentificaton = message.messageIdentificaton
      ? CollectionElementType.toJSON(message.messageIdentificaton)
      : undefined);
    if (message.content) {
      obj.content = message.content.map((e) => e ? Message_TokenValue.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MessageType>, I>>(base?: I): Action_MessageType {
    return Action_MessageType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MessageType>, I>>(object: I): Action_MessageType {
    const message = createBaseAction_MessageType();
    message.messageIdentificaton = (object.messageIdentificaton !== undefined && object.messageIdentificaton !== null)
      ? CollectionElementType.fromPartial(object.messageIdentificaton)
      : undefined;
    message.content = object.content?.map((e) => Message_TokenValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAction_SocialMediaType(): Action_SocialMediaType {
  return { actionType: 0, duration: 0 };
}

export const Action_SocialMediaType = {
  encode(message: Action_SocialMediaType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    if (message.duration !== 0) {
      writer.uint32(17).double(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_SocialMediaType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_SocialMediaType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 17) {
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

  fromJSON(object: any): Action_SocialMediaType {
    return {
      actionType: isSet(object.actionType) ? action_SocialMediaType_SocialMediaActionFromJSON(object.actionType) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: Action_SocialMediaType): unknown {
    const obj: any = {};
    message.actionType !== undefined &&
      (obj.actionType = action_SocialMediaType_SocialMediaActionToJSON(message.actionType));
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_SocialMediaType>, I>>(base?: I): Action_SocialMediaType {
    return Action_SocialMediaType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_SocialMediaType>, I>>(object: I): Action_SocialMediaType {
    const message = createBaseAction_SocialMediaType();
    message.actionType = object.actionType ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseAction_CommunicationType(): Action_CommunicationType {
  return {
    deviceIdentification: undefined,
    format: "",
    description: "",
    commands: [],
    midiCommand: undefined,
    globalCacheCommand: undefined,
    gvg100Command: undefined,
    sonyBVSCommand: undefined,
  };
}

export const Action_CommunicationType = {
  encode(message: Action_CommunicationType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deviceIdentification !== undefined) {
      CollectionElementType.encode(message.deviceIdentification, writer.uint32(10).fork()).ldelim();
    }
    if (message.format !== "") {
      writer.uint32(18).string(message.format);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.commands) {
      Action_CommunicationType_Command.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.midiCommand !== undefined) {
      Action_CommunicationType_MIDICommand.encode(message.midiCommand, writer.uint32(42).fork()).ldelim();
    }
    if (message.globalCacheCommand !== undefined) {
      Action_CommunicationType_GlobalCacheCommand.encode(message.globalCacheCommand, writer.uint32(50).fork()).ldelim();
    }
    if (message.gvg100Command !== undefined) {
      Action_CommunicationType_GVG100Command.encode(message.gvg100Command, writer.uint32(58).fork()).ldelim();
    }
    if (message.sonyBVSCommand !== undefined) {
      Action_CommunicationType_SonyBVSCommand.encode(message.sonyBVSCommand, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.deviceIdentification = CollectionElementType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.format = reader.string();
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

          message.commands.push(Action_CommunicationType_Command.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.midiCommand = Action_CommunicationType_MIDICommand.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.globalCacheCommand = Action_CommunicationType_GlobalCacheCommand.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.gvg100Command = Action_CommunicationType_GVG100Command.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.sonyBVSCommand = Action_CommunicationType_SonyBVSCommand.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType {
    return {
      deviceIdentification: isSet(object.deviceIdentification)
        ? CollectionElementType.fromJSON(object.deviceIdentification)
        : undefined,
      format: isSet(object.format) ? String(object.format) : "",
      description: isSet(object.description) ? String(object.description) : "",
      commands: Array.isArray(object?.commands)
        ? object.commands.map((e: any) => Action_CommunicationType_Command.fromJSON(e))
        : [],
      midiCommand: isSet(object.midiCommand)
        ? Action_CommunicationType_MIDICommand.fromJSON(object.midiCommand)
        : undefined,
      globalCacheCommand: isSet(object.globalCacheCommand)
        ? Action_CommunicationType_GlobalCacheCommand.fromJSON(object.globalCacheCommand)
        : undefined,
      gvg100Command: isSet(object.gvg100Command)
        ? Action_CommunicationType_GVG100Command.fromJSON(object.gvg100Command)
        : undefined,
      sonyBVSCommand: isSet(object.sonyBVSCommand)
        ? Action_CommunicationType_SonyBVSCommand.fromJSON(object.sonyBVSCommand)
        : undefined,
    };
  },

  toJSON(message: Action_CommunicationType): unknown {
    const obj: any = {};
    message.deviceIdentification !== undefined && (obj.deviceIdentification = message.deviceIdentification
      ? CollectionElementType.toJSON(message.deviceIdentification)
      : undefined);
    message.format !== undefined && (obj.format = message.format);
    message.description !== undefined && (obj.description = message.description);
    if (message.commands) {
      obj.commands = message.commands.map((e) => e ? Action_CommunicationType_Command.toJSON(e) : undefined);
    } else {
      obj.commands = [];
    }
    message.midiCommand !== undefined && (obj.midiCommand = message.midiCommand
      ? Action_CommunicationType_MIDICommand.toJSON(message.midiCommand)
      : undefined);
    message.globalCacheCommand !== undefined && (obj.globalCacheCommand = message.globalCacheCommand
      ? Action_CommunicationType_GlobalCacheCommand.toJSON(message.globalCacheCommand)
      : undefined);
    message.gvg100Command !== undefined && (obj.gvg100Command = message.gvg100Command
      ? Action_CommunicationType_GVG100Command.toJSON(message.gvg100Command)
      : undefined);
    message.sonyBVSCommand !== undefined && (obj.sonyBVSCommand = message.sonyBVSCommand
      ? Action_CommunicationType_SonyBVSCommand.toJSON(message.sonyBVSCommand)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType>, I>>(base?: I): Action_CommunicationType {
    return Action_CommunicationType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType>, I>>(object: I): Action_CommunicationType {
    const message = createBaseAction_CommunicationType();
    message.deviceIdentification = (object.deviceIdentification !== undefined && object.deviceIdentification !== null)
      ? CollectionElementType.fromPartial(object.deviceIdentification)
      : undefined;
    message.format = object.format ?? "";
    message.description = object.description ?? "";
    message.commands = object.commands?.map((e) => Action_CommunicationType_Command.fromPartial(e)) || [];
    message.midiCommand = (object.midiCommand !== undefined && object.midiCommand !== null)
      ? Action_CommunicationType_MIDICommand.fromPartial(object.midiCommand)
      : undefined;
    message.globalCacheCommand = (object.globalCacheCommand !== undefined && object.globalCacheCommand !== null)
      ? Action_CommunicationType_GlobalCacheCommand.fromPartial(object.globalCacheCommand)
      : undefined;
    message.gvg100Command = (object.gvg100Command !== undefined && object.gvg100Command !== null)
      ? Action_CommunicationType_GVG100Command.fromPartial(object.gvg100Command)
      : undefined;
    message.sonyBVSCommand = (object.sonyBVSCommand !== undefined && object.sonyBVSCommand !== null)
      ? Action_CommunicationType_SonyBVSCommand.fromPartial(object.sonyBVSCommand)
      : undefined;
    return message;
  },
};

function createBaseAction_CommunicationType_Command(): Action_CommunicationType_Command {
  return { name: "", value: "", replacementRange: undefined, possibleValues: [] };
}

export const Action_CommunicationType_Command = {
  encode(message: Action_CommunicationType_Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.replacementRange !== undefined) {
      IntRange.encode(message.replacementRange, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.possibleValues) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType_Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType_Command();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.replacementRange = IntRange.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.possibleValues.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType_Command {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
      replacementRange: isSet(object.replacementRange) ? IntRange.fromJSON(object.replacementRange) : undefined,
      possibleValues: Array.isArray(object?.possibleValues) ? object.possibleValues.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Action_CommunicationType_Command): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    message.replacementRange !== undefined &&
      (obj.replacementRange = message.replacementRange ? IntRange.toJSON(message.replacementRange) : undefined);
    if (message.possibleValues) {
      obj.possibleValues = message.possibleValues.map((e) => e);
    } else {
      obj.possibleValues = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType_Command>, I>>(
    base?: I,
  ): Action_CommunicationType_Command {
    return Action_CommunicationType_Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType_Command>, I>>(
    object: I,
  ): Action_CommunicationType_Command {
    const message = createBaseAction_CommunicationType_Command();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.replacementRange = (object.replacementRange !== undefined && object.replacementRange !== null)
      ? IntRange.fromPartial(object.replacementRange)
      : undefined;
    message.possibleValues = object.possibleValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseAction_CommunicationType_MIDICommand(): Action_CommunicationType_MIDICommand {
  return { state: 0, channel: 0, note: 0, intensity: 0 };
}

export const Action_CommunicationType_MIDICommand = {
  encode(message: Action_CommunicationType_MIDICommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.channel !== 0) {
      writer.uint32(16).uint32(message.channel);
    }
    if (message.note !== 0) {
      writer.uint32(24).uint32(message.note);
    }
    if (message.intensity !== 0) {
      writer.uint32(32).uint32(message.intensity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType_MIDICommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType_MIDICommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.channel = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.note = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.intensity = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType_MIDICommand {
    return {
      state: isSet(object.state) ? action_CommunicationType_MIDICommand_StateFromJSON(object.state) : 0,
      channel: isSet(object.channel) ? Number(object.channel) : 0,
      note: isSet(object.note) ? Number(object.note) : 0,
      intensity: isSet(object.intensity) ? Number(object.intensity) : 0,
    };
  },

  toJSON(message: Action_CommunicationType_MIDICommand): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = action_CommunicationType_MIDICommand_StateToJSON(message.state));
    message.channel !== undefined && (obj.channel = Math.round(message.channel));
    message.note !== undefined && (obj.note = Math.round(message.note));
    message.intensity !== undefined && (obj.intensity = Math.round(message.intensity));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType_MIDICommand>, I>>(
    base?: I,
  ): Action_CommunicationType_MIDICommand {
    return Action_CommunicationType_MIDICommand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType_MIDICommand>, I>>(
    object: I,
  ): Action_CommunicationType_MIDICommand {
    const message = createBaseAction_CommunicationType_MIDICommand();
    message.state = object.state ?? 0;
    message.channel = object.channel ?? 0;
    message.note = object.note ?? 0;
    message.intensity = object.intensity ?? 0;
    return message;
  },
};

function createBaseAction_CommunicationType_GlobalCacheCommand(): Action_CommunicationType_GlobalCacheCommand {
  return { commandAction: 0, output: 0, interval: 0 };
}

export const Action_CommunicationType_GlobalCacheCommand = {
  encode(message: Action_CommunicationType_GlobalCacheCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandAction !== 0) {
      writer.uint32(8).int32(message.commandAction);
    }
    if (message.output !== 0) {
      writer.uint32(16).uint32(message.output);
    }
    if (message.interval !== 0) {
      writer.uint32(24).uint32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType_GlobalCacheCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType_GlobalCacheCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandAction = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.output = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.interval = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType_GlobalCacheCommand {
    return {
      commandAction: isSet(object.commandAction)
        ? action_CommunicationType_GlobalCacheCommand_CommandActionFromJSON(object.commandAction)
        : 0,
      output: isSet(object.output) ? Number(object.output) : 0,
      interval: isSet(object.interval) ? Number(object.interval) : 0,
    };
  },

  toJSON(message: Action_CommunicationType_GlobalCacheCommand): unknown {
    const obj: any = {};
    message.commandAction !== undefined &&
      (obj.commandAction = action_CommunicationType_GlobalCacheCommand_CommandActionToJSON(message.commandAction));
    message.output !== undefined && (obj.output = Math.round(message.output));
    message.interval !== undefined && (obj.interval = Math.round(message.interval));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType_GlobalCacheCommand>, I>>(
    base?: I,
  ): Action_CommunicationType_GlobalCacheCommand {
    return Action_CommunicationType_GlobalCacheCommand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType_GlobalCacheCommand>, I>>(
    object: I,
  ): Action_CommunicationType_GlobalCacheCommand {
    const message = createBaseAction_CommunicationType_GlobalCacheCommand();
    message.commandAction = object.commandAction ?? 0;
    message.output = object.output ?? 0;
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseAction_CommunicationType_GVG100Command(): Action_CommunicationType_GVG100Command {
  return { commandAction: 0 };
}

export const Action_CommunicationType_GVG100Command = {
  encode(message: Action_CommunicationType_GVG100Command, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandAction !== 0) {
      writer.uint32(8).int32(message.commandAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType_GVG100Command {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType_GVG100Command();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandAction = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType_GVG100Command {
    return {
      commandAction: isSet(object.commandAction)
        ? action_CommunicationType_GVG100Command_CommandActionFromJSON(object.commandAction)
        : 0,
    };
  },

  toJSON(message: Action_CommunicationType_GVG100Command): unknown {
    const obj: any = {};
    message.commandAction !== undefined &&
      (obj.commandAction = action_CommunicationType_GVG100Command_CommandActionToJSON(message.commandAction));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType_GVG100Command>, I>>(
    base?: I,
  ): Action_CommunicationType_GVG100Command {
    return Action_CommunicationType_GVG100Command.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType_GVG100Command>, I>>(
    object: I,
  ): Action_CommunicationType_GVG100Command {
    const message = createBaseAction_CommunicationType_GVG100Command();
    message.commandAction = object.commandAction ?? 0;
    return message;
  },
};

function createBaseAction_CommunicationType_SonyBVSCommand(): Action_CommunicationType_SonyBVSCommand {
  return { commandAction: 0 };
}

export const Action_CommunicationType_SonyBVSCommand = {
  encode(message: Action_CommunicationType_SonyBVSCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commandAction !== 0) {
      writer.uint32(8).int32(message.commandAction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_CommunicationType_SonyBVSCommand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_CommunicationType_SonyBVSCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.commandAction = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_CommunicationType_SonyBVSCommand {
    return {
      commandAction: isSet(object.commandAction)
        ? action_CommunicationType_SonyBVSCommand_CommandActionFromJSON(object.commandAction)
        : 0,
    };
  },

  toJSON(message: Action_CommunicationType_SonyBVSCommand): unknown {
    const obj: any = {};
    message.commandAction !== undefined &&
      (obj.commandAction = action_CommunicationType_SonyBVSCommand_CommandActionToJSON(message.commandAction));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_CommunicationType_SonyBVSCommand>, I>>(
    base?: I,
  ): Action_CommunicationType_SonyBVSCommand {
    return Action_CommunicationType_SonyBVSCommand.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_CommunicationType_SonyBVSCommand>, I>>(
    object: I,
  ): Action_CommunicationType_SonyBVSCommand {
    const message = createBaseAction_CommunicationType_SonyBVSCommand();
    message.commandAction = object.commandAction ?? 0;
    return message;
  },
};

function createBaseAction_MultiScreenType(): Action_MultiScreenType {
  return { identification: undefined };
}

export const Action_MultiScreenType = {
  encode(message: Action_MultiScreenType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MultiScreenType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MultiScreenType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 26) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MultiScreenType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_MultiScreenType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MultiScreenType>, I>>(base?: I): Action_MultiScreenType {
    return Action_MultiScreenType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MultiScreenType>, I>>(object: I): Action_MultiScreenType {
    const message = createBaseAction_MultiScreenType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

function createBaseAction_DocumentType(): Action_DocumentType {
  return { identification: undefined, selectedArrangement: undefined, contentDestination: 0 };
}

export const Action_DocumentType = {
  encode(message: Action_DocumentType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectedArrangement !== undefined) {
      UUID.encode(message.selectedArrangement, writer.uint32(18).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(24).int32(message.contentDestination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_DocumentType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_DocumentType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.selectedArrangement = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_DocumentType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
      selectedArrangement: isSet(object.selectedArrangement) ? UUID.fromJSON(object.selectedArrangement) : undefined,
      contentDestination: isSet(object.contentDestination)
        ? action_DocumentType_ContentDestinationFromJSON(object.contentDestination)
        : 0,
    };
  },

  toJSON(message: Action_DocumentType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    message.selectedArrangement !== undefined &&
      (obj.selectedArrangement = message.selectedArrangement ? UUID.toJSON(message.selectedArrangement) : undefined);
    message.contentDestination !== undefined &&
      (obj.contentDestination = action_DocumentType_ContentDestinationToJSON(message.contentDestination));
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_DocumentType>, I>>(base?: I): Action_DocumentType {
    return Action_DocumentType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_DocumentType>, I>>(object: I): Action_DocumentType {
    const message = createBaseAction_DocumentType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    message.selectedArrangement = (object.selectedArrangement !== undefined && object.selectedArrangement !== null)
      ? UUID.fromPartial(object.selectedArrangement)
      : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    return message;
  },
};

function createBaseAction_ExternalPresentationType(): Action_ExternalPresentationType {
  return { url: undefined };
}

export const Action_ExternalPresentationType = {
  encode(message: Action_ExternalPresentationType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_ExternalPresentationType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_ExternalPresentationType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_ExternalPresentationType {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: Action_ExternalPresentationType): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_ExternalPresentationType>, I>>(base?: I): Action_ExternalPresentationType {
    return Action_ExternalPresentationType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_ExternalPresentationType>, I>>(
    object: I,
  ): Action_ExternalPresentationType {
    const message = createBaseAction_ExternalPresentationType();
    message.url = (object.url !== undefined && object.url !== null) ? URL.fromPartial(object.url) : undefined;
    return message;
  },
};

function createBaseAction_AudienceLookType(): Action_AudienceLookType {
  return { identification: undefined };
}

export const Action_AudienceLookType = {
  encode(message: Action_AudienceLookType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_AudienceLookType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_AudienceLookType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_AudienceLookType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_AudienceLookType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_AudienceLookType>, I>>(base?: I): Action_AudienceLookType {
    return Action_AudienceLookType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_AudienceLookType>, I>>(object: I): Action_AudienceLookType {
    const message = createBaseAction_AudienceLookType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

function createBaseAction_AudioInputType(): Action_AudioInputType {
  return { index: 0, overrideMode: false, behaviorMode: undefined, overrideVolume: false, volume: 0 };
}

export const Action_AudioInputType = {
  encode(message: Action_AudioInputType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.overrideMode === true) {
      writer.uint32(16).bool(message.overrideMode);
    }
    if (message.behaviorMode !== undefined) {
      AudioInput_BehaviorMode.encode(message.behaviorMode, writer.uint32(26).fork()).ldelim();
    }
    if (message.overrideVolume === true) {
      writer.uint32(32).bool(message.overrideVolume);
    }
    if (message.volume !== 0) {
      writer.uint32(41).double(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_AudioInputType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_AudioInputType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.overrideMode = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.behaviorMode = AudioInput_BehaviorMode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.overrideVolume = reader.bool();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.volume = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_AudioInputType {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      overrideMode: isSet(object.overrideMode) ? Boolean(object.overrideMode) : false,
      behaviorMode: isSet(object.behaviorMode) ? AudioInput_BehaviorMode.fromJSON(object.behaviorMode) : undefined,
      overrideVolume: isSet(object.overrideVolume) ? Boolean(object.overrideVolume) : false,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
    };
  },

  toJSON(message: Action_AudioInputType): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.overrideMode !== undefined && (obj.overrideMode = message.overrideMode);
    message.behaviorMode !== undefined &&
      (obj.behaviorMode = message.behaviorMode ? AudioInput_BehaviorMode.toJSON(message.behaviorMode) : undefined);
    message.overrideVolume !== undefined && (obj.overrideVolume = message.overrideVolume);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_AudioInputType>, I>>(base?: I): Action_AudioInputType {
    return Action_AudioInputType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_AudioInputType>, I>>(object: I): Action_AudioInputType {
    const message = createBaseAction_AudioInputType();
    message.index = object.index ?? 0;
    message.overrideMode = object.overrideMode ?? false;
    message.behaviorMode = (object.behaviorMode !== undefined && object.behaviorMode !== null)
      ? AudioInput_BehaviorMode.fromPartial(object.behaviorMode)
      : undefined;
    message.overrideVolume = object.overrideVolume ?? false;
    message.volume = object.volume ?? 0;
    return message;
  },
};

function createBaseAction_MacroType(): Action_MacroType {
  return { identification: undefined };
}

export const Action_MacroType = {
  encode(message: Action_MacroType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identification !== undefined) {
      CollectionElementType.encode(message.identification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action_MacroType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction_MacroType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identification = CollectionElementType.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Action_MacroType {
    return {
      identification: isSet(object.identification) ? CollectionElementType.fromJSON(object.identification) : undefined,
    };
  },

  toJSON(message: Action_MacroType): unknown {
    const obj: any = {};
    message.identification !== undefined &&
      (obj.identification = message.identification ? CollectionElementType.toJSON(message.identification) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Action_MacroType>, I>>(base?: I): Action_MacroType {
    return Action_MacroType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Action_MacroType>, I>>(object: I): Action_MacroType {
    const message = createBaseAction_MacroType();
    message.identification = (object.identification !== undefined && object.identification !== null)
      ? CollectionElementType.fromPartial(object.identification)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
