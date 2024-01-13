/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { MultiTracks_Startup } from './analyticsMultiTracks';

export const protobufPackage = 'rv.analytics';

export interface Startup {
  looks?: Startup_Looks | undefined;
  screenConfiguration?: Startup_ScreenConfiguration | undefined;
  preferences?: Startup_Preferences | undefined;
  screens?: Startup_Screens | undefined;
  planningCenter?: Startup_PlanningCenter | undefined;
  songSelect?: Startup_SongSelect | undefined;
  audio?: Startup_Audio | undefined;
  communications?: Startup_Communications | undefined;
  resi?: Startup_Resi | undefined;
  interface?: Startup_Interface | undefined;
  content?: Startup_Content | undefined;
  themes?: Startup_Themes | undefined;
  macro?: Startup_Macro | undefined;
  clearGroup?: Startup_ClearGroup | undefined;
  keyMapping?: Startup_KeyMapping | undefined;
  multitracks?: MultiTracks_Startup | undefined;
  networkLink?: Startup_NetworkLink | undefined;
  capture?: Startup_Capture | undefined;
}

export interface Startup_Looks {
  numberPresets: number;
}

export interface Startup_ScreenConfiguration {
  summary?: Startup_ScreenConfiguration_Summary | undefined;
  output?: Startup_ScreenConfiguration_Output | undefined;
  single?: Startup_ScreenConfiguration_Single | undefined;
  mirrored?: Startup_ScreenConfiguration_Mirrored | undefined;
  edgeBlend?: Startup_ScreenConfiguration_EdgeBlend | undefined;
  grouped?: Startup_ScreenConfiguration_Grouped | undefined;
}

export enum Startup_ScreenConfiguration_ScreenType {
  SCREEN_TYPE_UNKNOWN = 0,
  SCREEN_TYPE_AUDIENCE = 1,
  SCREEN_TYPE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_ScreenTypeFromJSON(
  object: any,
): Startup_ScreenConfiguration_ScreenType {
  switch (object) {
    case 0:
    case 'SCREEN_TYPE_UNKNOWN':
      return Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_UNKNOWN;
    case 1:
    case 'SCREEN_TYPE_AUDIENCE':
      return Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_AUDIENCE;
    case 2:
    case 'SCREEN_TYPE_STAGE':
      return Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_STAGE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_ScreenType.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_ScreenTypeToJSON(
  object: Startup_ScreenConfiguration_ScreenType,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_UNKNOWN:
      return 'SCREEN_TYPE_UNKNOWN';
    case Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_AUDIENCE:
      return 'SCREEN_TYPE_AUDIENCE';
    case Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_STAGE:
      return 'SCREEN_TYPE_STAGE';
    case Startup_ScreenConfiguration_ScreenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_ScreenConfiguration_Summary {
  totalScreens: number;
  audienceScreenCount: number;
  stageScreenCount: number;
}

export interface Startup_ScreenConfiguration_Output {
  proscreenType: Startup_ScreenConfiguration_Output_ProScreenType;
  outputType: Startup_ScreenConfiguration_Output_OutputType;
  colorCorrectionEnabled: boolean;
  cornerPinEnabled: boolean;
  alignment: Startup_ScreenConfiguration_Output_Alignment;
  width: number;
  height: number;
  screen: Startup_ScreenConfiguration_Screen | undefined;
}

export enum Startup_ScreenConfiguration_Output_ProScreenType {
  PRO_SCREEN_TYPE_UNKNOWN = 0,
  PRO_SCREEN_TYPE_SINGLE = 1,
  PRO_SCREEN_TYPE_MIRRORED = 2,
  PRO_SCREEN_TYPE_EDGE_BLEND = 3,
  PRO_SCREEN_TYPE_GROUPED = 4,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_Output_ProScreenTypeFromJSON(
  object: any,
): Startup_ScreenConfiguration_Output_ProScreenType {
  switch (object) {
    case 0:
    case 'PRO_SCREEN_TYPE_UNKNOWN':
      return Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_UNKNOWN;
    case 1:
    case 'PRO_SCREEN_TYPE_SINGLE':
      return Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_SINGLE;
    case 2:
    case 'PRO_SCREEN_TYPE_MIRRORED':
      return Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_MIRRORED;
    case 3:
    case 'PRO_SCREEN_TYPE_EDGE_BLEND':
      return Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_EDGE_BLEND;
    case 4:
    case 'PRO_SCREEN_TYPE_GROUPED':
      return Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_GROUPED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_Output_ProScreenType.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_Output_ProScreenTypeToJSON(
  object: Startup_ScreenConfiguration_Output_ProScreenType,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_UNKNOWN:
      return 'PRO_SCREEN_TYPE_UNKNOWN';
    case Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_SINGLE:
      return 'PRO_SCREEN_TYPE_SINGLE';
    case Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_MIRRORED:
      return 'PRO_SCREEN_TYPE_MIRRORED';
    case Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_EDGE_BLEND:
      return 'PRO_SCREEN_TYPE_EDGE_BLEND';
    case Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_GROUPED:
      return 'PRO_SCREEN_TYPE_GROUPED';
    case Startup_ScreenConfiguration_Output_ProScreenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_ScreenConfiguration_Output_OutputType {
  OUTPUT_TYPE_UNKNOWN = 0,
  OUTPUT_TYPE_SDI = 1,
  OUTPUT_TYPE_NDI = 2,
  OUTPUT_TYPE_SYPHON = 3,
  OUTPUT_TYPE_SYSTEM = 4,
  OUTPUT_TYPE_PLACEHOLDER = 5,
  OUTPUT_TYPE_DVI = 6,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_Output_OutputTypeFromJSON(
  object: any,
): Startup_ScreenConfiguration_Output_OutputType {
  switch (object) {
    case 0:
    case 'OUTPUT_TYPE_UNKNOWN':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_UNKNOWN;
    case 1:
    case 'OUTPUT_TYPE_SDI':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SDI;
    case 2:
    case 'OUTPUT_TYPE_NDI':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_NDI;
    case 3:
    case 'OUTPUT_TYPE_SYPHON':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYPHON;
    case 4:
    case 'OUTPUT_TYPE_SYSTEM':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYSTEM;
    case 5:
    case 'OUTPUT_TYPE_PLACEHOLDER':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_PLACEHOLDER;
    case 6:
    case 'OUTPUT_TYPE_DVI':
      return Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_DVI;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_Output_OutputType.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_Output_OutputTypeToJSON(
  object: Startup_ScreenConfiguration_Output_OutputType,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_UNKNOWN:
      return 'OUTPUT_TYPE_UNKNOWN';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SDI:
      return 'OUTPUT_TYPE_SDI';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_NDI:
      return 'OUTPUT_TYPE_NDI';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYPHON:
      return 'OUTPUT_TYPE_SYPHON';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYSTEM:
      return 'OUTPUT_TYPE_SYSTEM';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_PLACEHOLDER:
      return 'OUTPUT_TYPE_PLACEHOLDER';
    case Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_DVI:
      return 'OUTPUT_TYPE_DVI';
    case Startup_ScreenConfiguration_Output_OutputType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_ScreenConfiguration_Output_Alignment {
  ALIGNMENT_UNKNOWN = 0,
  ALIGNMENT_FULL = 1,
  ALIGNMENT_2X1 = 2,
  ALIGNMENT_3X1 = 3,
  ALIGNMENT_2X2 = 4,
  ALIGNMENT_CUSTOM = 5,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_Output_AlignmentFromJSON(
  object: any,
): Startup_ScreenConfiguration_Output_Alignment {
  switch (object) {
    case 0:
    case 'ALIGNMENT_UNKNOWN':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_UNKNOWN;
    case 1:
    case 'ALIGNMENT_FULL':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_FULL;
    case 2:
    case 'ALIGNMENT_2X1':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X1;
    case 3:
    case 'ALIGNMENT_3X1':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_3X1;
    case 4:
    case 'ALIGNMENT_2X2':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X2;
    case 5:
    case 'ALIGNMENT_CUSTOM':
      return Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_Output_Alignment.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_Output_AlignmentToJSON(
  object: Startup_ScreenConfiguration_Output_Alignment,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_UNKNOWN:
      return 'ALIGNMENT_UNKNOWN';
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_FULL:
      return 'ALIGNMENT_FULL';
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X1:
      return 'ALIGNMENT_2X1';
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_3X1:
      return 'ALIGNMENT_3X1';
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X2:
      return 'ALIGNMENT_2X2';
    case Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_CUSTOM:
      return 'ALIGNMENT_CUSTOM';
    case Startup_ScreenConfiguration_Output_Alignment.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_ScreenConfiguration_Single {
  screenType: Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
}

export interface Startup_ScreenConfiguration_Mirrored {
  screenType: Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  count: number;
}

export interface Startup_ScreenConfiguration_EdgeBlend {
  screenType: Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  count: number;
}

export interface Startup_ScreenConfiguration_Grouped {
  screenType: Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  columns: number;
  rows: number;
}

export interface Startup_ScreenConfiguration_Screen {
  alphaKeyMode: Startup_ScreenConfiguration_Screen_AlphaKeyMode;
  alphaDevice: Startup_ScreenConfiguration_Screen_AlphaDevice;
}

export enum Startup_ScreenConfiguration_Screen_AlphaKeyMode {
  ALPHA_KEY_MODE_NONE = 0,
  ALPHA_KEY_MODE_PREMULTIPLIED = 1,
  ALPHA_KEY_MODE_STRAIGHT = 2,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_Screen_AlphaKeyModeFromJSON(
  object: any,
): Startup_ScreenConfiguration_Screen_AlphaKeyMode {
  switch (object) {
    case 0:
    case 'ALPHA_KEY_MODE_NONE':
      return Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_NONE;
    case 1:
    case 'ALPHA_KEY_MODE_PREMULTIPLIED':
      return Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_PREMULTIPLIED;
    case 2:
    case 'ALPHA_KEY_MODE_STRAIGHT':
      return Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_STRAIGHT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_Screen_AlphaKeyMode.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_Screen_AlphaKeyModeToJSON(
  object: Startup_ScreenConfiguration_Screen_AlphaKeyMode,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_NONE:
      return 'ALPHA_KEY_MODE_NONE';
    case Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_PREMULTIPLIED:
      return 'ALPHA_KEY_MODE_PREMULTIPLIED';
    case Startup_ScreenConfiguration_Screen_AlphaKeyMode.ALPHA_KEY_MODE_STRAIGHT:
      return 'ALPHA_KEY_MODE_STRAIGHT';
    case Startup_ScreenConfiguration_Screen_AlphaKeyMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_ScreenConfiguration_Screen_AlphaDevice {
  ALPHA_DEVICE_NONE = 0,
  ALPHA_DEVICE_SELF = 1,
  ALPHA_DEVICE_OTHER = 2,
  UNRECOGNIZED = -1,
}

export function startup_ScreenConfiguration_Screen_AlphaDeviceFromJSON(
  object: any,
): Startup_ScreenConfiguration_Screen_AlphaDevice {
  switch (object) {
    case 0:
    case 'ALPHA_DEVICE_NONE':
      return Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_NONE;
    case 1:
    case 'ALPHA_DEVICE_SELF':
      return Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_SELF;
    case 2:
    case 'ALPHA_DEVICE_OTHER':
      return Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_OTHER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_ScreenConfiguration_Screen_AlphaDevice.UNRECOGNIZED;
  }
}

export function startup_ScreenConfiguration_Screen_AlphaDeviceToJSON(
  object: Startup_ScreenConfiguration_Screen_AlphaDevice,
): string {
  switch (object) {
    case Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_NONE:
      return 'ALPHA_DEVICE_NONE';
    case Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_SELF:
      return 'ALPHA_DEVICE_SELF';
    case Startup_ScreenConfiguration_Screen_AlphaDevice.ALPHA_DEVICE_OTHER:
      return 'ALPHA_DEVICE_OTHER';
    case Startup_ScreenConfiguration_Screen_AlphaDevice.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_Preferences {
  houseOfWorship: boolean;
  hasCustomLogo: boolean;
  copyrightEnabled: boolean;
  copyrightStyle: Startup_Preferences_CopyrightStyle;
  copyrightHasLicense: boolean;
  renderMode: Startup_Preferences_RenderMode;
  suppressAutoStart: boolean;
  manageMediaAutomatically: boolean;
  searchPathsRelink: boolean;
  updateChannel: Startup_Preferences_UpdateChannel;
}

export enum Startup_Preferences_CopyrightStyle {
  COPYRIGHT_STYLE_UNKNOWN = 0,
  COPYRIGHT_STYLE_FIRST = 1,
  COPYRIGHT_STYLE_LAST = 2,
  COPYRIGHT_STYLE_FIRST_AND_LAST = 3,
  COPYRIGHT_STYLE_ALL_SLIDES = 4,
  UNRECOGNIZED = -1,
}

export function startup_Preferences_CopyrightStyleFromJSON(
  object: any,
): Startup_Preferences_CopyrightStyle {
  switch (object) {
    case 0:
    case 'COPYRIGHT_STYLE_UNKNOWN':
      return Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_UNKNOWN;
    case 1:
    case 'COPYRIGHT_STYLE_FIRST':
      return Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST;
    case 2:
    case 'COPYRIGHT_STYLE_LAST':
      return Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_LAST;
    case 3:
    case 'COPYRIGHT_STYLE_FIRST_AND_LAST':
      return Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST_AND_LAST;
    case 4:
    case 'COPYRIGHT_STYLE_ALL_SLIDES':
      return Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_ALL_SLIDES;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Preferences_CopyrightStyle.UNRECOGNIZED;
  }
}

export function startup_Preferences_CopyrightStyleToJSON(
  object: Startup_Preferences_CopyrightStyle,
): string {
  switch (object) {
    case Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_UNKNOWN:
      return 'COPYRIGHT_STYLE_UNKNOWN';
    case Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST:
      return 'COPYRIGHT_STYLE_FIRST';
    case Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_LAST:
      return 'COPYRIGHT_STYLE_LAST';
    case Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST_AND_LAST:
      return 'COPYRIGHT_STYLE_FIRST_AND_LAST';
    case Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_ALL_SLIDES:
      return 'COPYRIGHT_STYLE_ALL_SLIDES';
    case Startup_Preferences_CopyrightStyle.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Preferences_RenderMode {
  RENDER_MODE_UNKNOWN = 0,
  RENDER_MODE_OPENGL = 1,
  RENDER_MODE_METAL = 2,
  RENDER_MODE_DIRECTX = 3,
  UNRECOGNIZED = -1,
}

export function startup_Preferences_RenderModeFromJSON(
  object: any,
): Startup_Preferences_RenderMode {
  switch (object) {
    case 0:
    case 'RENDER_MODE_UNKNOWN':
      return Startup_Preferences_RenderMode.RENDER_MODE_UNKNOWN;
    case 1:
    case 'RENDER_MODE_OPENGL':
      return Startup_Preferences_RenderMode.RENDER_MODE_OPENGL;
    case 2:
    case 'RENDER_MODE_METAL':
      return Startup_Preferences_RenderMode.RENDER_MODE_METAL;
    case 3:
    case 'RENDER_MODE_DIRECTX':
      return Startup_Preferences_RenderMode.RENDER_MODE_DIRECTX;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Preferences_RenderMode.UNRECOGNIZED;
  }
}

export function startup_Preferences_RenderModeToJSON(
  object: Startup_Preferences_RenderMode,
): string {
  switch (object) {
    case Startup_Preferences_RenderMode.RENDER_MODE_UNKNOWN:
      return 'RENDER_MODE_UNKNOWN';
    case Startup_Preferences_RenderMode.RENDER_MODE_OPENGL:
      return 'RENDER_MODE_OPENGL';
    case Startup_Preferences_RenderMode.RENDER_MODE_METAL:
      return 'RENDER_MODE_METAL';
    case Startup_Preferences_RenderMode.RENDER_MODE_DIRECTX:
      return 'RENDER_MODE_DIRECTX';
    case Startup_Preferences_RenderMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Preferences_UpdateChannel {
  UPDATE_CHANNEL_UNKNOWN = 0,
  UPDATE_CHANNEL_RELEASE = 1,
  UPDATE_CHANNEL_BETA = 2,
  UNRECOGNIZED = -1,
}

export function startup_Preferences_UpdateChannelFromJSON(
  object: any,
): Startup_Preferences_UpdateChannel {
  switch (object) {
    case 0:
    case 'UPDATE_CHANNEL_UNKNOWN':
      return Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_UNKNOWN;
    case 1:
    case 'UPDATE_CHANNEL_RELEASE':
      return Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_RELEASE;
    case 2:
    case 'UPDATE_CHANNEL_BETA':
      return Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_BETA;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Preferences_UpdateChannel.UNRECOGNIZED;
  }
}

export function startup_Preferences_UpdateChannelToJSON(
  object: Startup_Preferences_UpdateChannel,
): string {
  switch (object) {
    case Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_UNKNOWN:
      return 'UPDATE_CHANNEL_UNKNOWN';
    case Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_RELEASE:
      return 'UPDATE_CHANNEL_RELEASE';
    case Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_BETA:
      return 'UPDATE_CHANNEL_BETA';
    case Startup_Preferences_UpdateChannel.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_Screens {
  showScreensLaunch: boolean;
  showPerformanceOnScreen: boolean;
  ignoreBackgroundColors: boolean;
  showKeynotePptScreens: boolean;
}

export interface Startup_PlanningCenter {
  loggedIn: boolean;
  autoUpdate: boolean;
  matchSongs: boolean;
  showHistory: boolean;
  makeArrangements: boolean;
  autoUpload: boolean;
  autoDownload: boolean;
}

export interface Startup_SongSelect {
  loggedIn: boolean;
}

export interface Startup_Audio {
  busCount: number;
  inspectorDevice: Startup_Audio_AudioDevice;
  inspectorRouting: Startup_Audio_InspectorRouting;
  mainDevice: Startup_Audio_AudioDevice;
  mainRouting: Startup_Audio_AudioRouting;
  mainDelay: number;
  sdiNdi: boolean;
  sdiNdiRouting: Startup_Audio_AudioRouting;
  sdiNdiDelay: number;
}

export enum Startup_Audio_AudioDevice {
  AUDIO_DEVICE_UNKNOWN = 0,
  AUDIO_DEVICE_MAIN = 1,
  AUDIO_DEVICE_SYSTEM = 2,
  AUDIO_DEVICE_OTHER = 3,
  AUDIO_DEVICE_NONE = 4,
  UNRECOGNIZED = -1,
}

export function startup_Audio_AudioDeviceFromJSON(
  object: any,
): Startup_Audio_AudioDevice {
  switch (object) {
    case 0:
    case 'AUDIO_DEVICE_UNKNOWN':
      return Startup_Audio_AudioDevice.AUDIO_DEVICE_UNKNOWN;
    case 1:
    case 'AUDIO_DEVICE_MAIN':
      return Startup_Audio_AudioDevice.AUDIO_DEVICE_MAIN;
    case 2:
    case 'AUDIO_DEVICE_SYSTEM':
      return Startup_Audio_AudioDevice.AUDIO_DEVICE_SYSTEM;
    case 3:
    case 'AUDIO_DEVICE_OTHER':
      return Startup_Audio_AudioDevice.AUDIO_DEVICE_OTHER;
    case 4:
    case 'AUDIO_DEVICE_NONE':
      return Startup_Audio_AudioDevice.AUDIO_DEVICE_NONE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Audio_AudioDevice.UNRECOGNIZED;
  }
}

export function startup_Audio_AudioDeviceToJSON(
  object: Startup_Audio_AudioDevice,
): string {
  switch (object) {
    case Startup_Audio_AudioDevice.AUDIO_DEVICE_UNKNOWN:
      return 'AUDIO_DEVICE_UNKNOWN';
    case Startup_Audio_AudioDevice.AUDIO_DEVICE_MAIN:
      return 'AUDIO_DEVICE_MAIN';
    case Startup_Audio_AudioDevice.AUDIO_DEVICE_SYSTEM:
      return 'AUDIO_DEVICE_SYSTEM';
    case Startup_Audio_AudioDevice.AUDIO_DEVICE_OTHER:
      return 'AUDIO_DEVICE_OTHER';
    case Startup_Audio_AudioDevice.AUDIO_DEVICE_NONE:
      return 'AUDIO_DEVICE_NONE';
    case Startup_Audio_AudioDevice.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Audio_InspectorRouting {
  INSPECTOR_ROUTING_UNKNOWN = 0,
  INSPECTOR_ROUTING_DEFAULT = 1,
  INSPECTOR_ROUTING_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function startup_Audio_InspectorRoutingFromJSON(
  object: any,
): Startup_Audio_InspectorRouting {
  switch (object) {
    case 0:
    case 'INSPECTOR_ROUTING_UNKNOWN':
      return Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_UNKNOWN;
    case 1:
    case 'INSPECTOR_ROUTING_DEFAULT':
      return Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_DEFAULT;
    case 2:
    case 'INSPECTOR_ROUTING_CUSTOM':
      return Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Audio_InspectorRouting.UNRECOGNIZED;
  }
}

export function startup_Audio_InspectorRoutingToJSON(
  object: Startup_Audio_InspectorRouting,
): string {
  switch (object) {
    case Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_UNKNOWN:
      return 'INSPECTOR_ROUTING_UNKNOWN';
    case Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_DEFAULT:
      return 'INSPECTOR_ROUTING_DEFAULT';
    case Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_CUSTOM:
      return 'INSPECTOR_ROUTING_CUSTOM';
    case Startup_Audio_InspectorRouting.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Audio_AudioRouting {
  AUDIO_ROUTING_UNKNOWN = 0,
  AUDIO_ROUTING_DEFAULT = 1,
  AUDIO_ROUTING_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function startup_Audio_AudioRoutingFromJSON(
  object: any,
): Startup_Audio_AudioRouting {
  switch (object) {
    case 0:
    case 'AUDIO_ROUTING_UNKNOWN':
      return Startup_Audio_AudioRouting.AUDIO_ROUTING_UNKNOWN;
    case 1:
    case 'AUDIO_ROUTING_DEFAULT':
      return Startup_Audio_AudioRouting.AUDIO_ROUTING_DEFAULT;
    case 2:
    case 'AUDIO_ROUTING_CUSTOM':
      return Startup_Audio_AudioRouting.AUDIO_ROUTING_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Audio_AudioRouting.UNRECOGNIZED;
  }
}

export function startup_Audio_AudioRoutingToJSON(
  object: Startup_Audio_AudioRouting,
): string {
  switch (object) {
    case Startup_Audio_AudioRouting.AUDIO_ROUTING_UNKNOWN:
      return 'AUDIO_ROUTING_UNKNOWN';
    case Startup_Audio_AudioRouting.AUDIO_ROUTING_DEFAULT:
      return 'AUDIO_ROUTING_DEFAULT';
    case Startup_Audio_AudioRouting.AUDIO_ROUTING_CUSTOM:
      return 'AUDIO_ROUTING_CUSTOM';
    case Startup_Audio_AudioRouting.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_Communications {
  totalDeviceCount: number;
}

export interface Startup_Resi {
  loggedIn: boolean;
}

export interface Startup_Interface {
  libraryOutline: Startup_Interface_SplitViewState;
  mediaOutline: Startup_Interface_SplitViewState;
  audioOutline: Startup_Interface_SplitViewState;
  continuousPlaylist: boolean;
  mediaBin: Startup_Interface_SplitViewState;
  presentationViewStyle: Startup_Interface_PresentationViewStyle;
  presentationGridColumnCount: number;
  presentationTableColumnCount: number;
  mediaBinViewStyle: Startup_Interface_MediaBinViewStyle;
  mediaBinGridColumnCount: number;
  mediaBinTableColumnCount: number;
  presentationTransition: string;
  mediaTransition: string;
  audioShuffle: boolean;
}

export enum Startup_Interface_SplitViewState {
  SPLIT_VIEW_STATE_UNKNOWN = 0,
  SPLIT_VIEW_STATE_COLLAPSED = 1,
  SPLIT_VIEW_STATE_EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function startup_Interface_SplitViewStateFromJSON(
  object: any,
): Startup_Interface_SplitViewState {
  switch (object) {
    case 0:
    case 'SPLIT_VIEW_STATE_UNKNOWN':
      return Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_UNKNOWN;
    case 1:
    case 'SPLIT_VIEW_STATE_COLLAPSED':
      return Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_COLLAPSED;
    case 2:
    case 'SPLIT_VIEW_STATE_EXPANDED':
      return Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_EXPANDED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Interface_SplitViewState.UNRECOGNIZED;
  }
}

export function startup_Interface_SplitViewStateToJSON(
  object: Startup_Interface_SplitViewState,
): string {
  switch (object) {
    case Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_UNKNOWN:
      return 'SPLIT_VIEW_STATE_UNKNOWN';
    case Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_COLLAPSED:
      return 'SPLIT_VIEW_STATE_COLLAPSED';
    case Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_EXPANDED:
      return 'SPLIT_VIEW_STATE_EXPANDED';
    case Startup_Interface_SplitViewState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Interface_PresentationViewStyle {
  PRESENTATION_VIEW_STYLE_UNKNOWN = 0,
  PRESENTATION_VIEW_STYLE_GRID = 1,
  PRESENTATION_VIEW_STYLE_EASY = 2,
  PRESENTATION_VIEW_STYLE_TABLE = 3,
  UNRECOGNIZED = -1,
}

export function startup_Interface_PresentationViewStyleFromJSON(
  object: any,
): Startup_Interface_PresentationViewStyle {
  switch (object) {
    case 0:
    case 'PRESENTATION_VIEW_STYLE_UNKNOWN':
      return Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_UNKNOWN;
    case 1:
    case 'PRESENTATION_VIEW_STYLE_GRID':
      return Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_GRID;
    case 2:
    case 'PRESENTATION_VIEW_STYLE_EASY':
      return Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_EASY;
    case 3:
    case 'PRESENTATION_VIEW_STYLE_TABLE':
      return Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_TABLE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Interface_PresentationViewStyle.UNRECOGNIZED;
  }
}

export function startup_Interface_PresentationViewStyleToJSON(
  object: Startup_Interface_PresentationViewStyle,
): string {
  switch (object) {
    case Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_UNKNOWN:
      return 'PRESENTATION_VIEW_STYLE_UNKNOWN';
    case Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_GRID:
      return 'PRESENTATION_VIEW_STYLE_GRID';
    case Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_EASY:
      return 'PRESENTATION_VIEW_STYLE_EASY';
    case Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_TABLE:
      return 'PRESENTATION_VIEW_STYLE_TABLE';
    case Startup_Interface_PresentationViewStyle.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Startup_Interface_MediaBinViewStyle {
  MEDIA_BIN_VIEW_STYLE_UNKNOWN = 0,
  MEDIA_BIN_VIEW_STYLE_GRID = 1,
  MEDIA_BIN_VIEW_STYLE_TABLE = 2,
  UNRECOGNIZED = -1,
}

export function startup_Interface_MediaBinViewStyleFromJSON(
  object: any,
): Startup_Interface_MediaBinViewStyle {
  switch (object) {
    case 0:
    case 'MEDIA_BIN_VIEW_STYLE_UNKNOWN':
      return Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_UNKNOWN;
    case 1:
    case 'MEDIA_BIN_VIEW_STYLE_GRID':
      return Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_GRID;
    case 2:
    case 'MEDIA_BIN_VIEW_STYLE_TABLE':
      return Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_TABLE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Startup_Interface_MediaBinViewStyle.UNRECOGNIZED;
  }
}

export function startup_Interface_MediaBinViewStyleToJSON(
  object: Startup_Interface_MediaBinViewStyle,
): string {
  switch (object) {
    case Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_UNKNOWN:
      return 'MEDIA_BIN_VIEW_STYLE_UNKNOWN';
    case Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_GRID:
      return 'MEDIA_BIN_VIEW_STYLE_GRID';
    case Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_TABLE:
      return 'MEDIA_BIN_VIEW_STYLE_TABLE';
    case Startup_Interface_MediaBinViewStyle.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Startup_Content {
  libraryCount: number;
  libraryPlaylistCount: number;
  libraryPlaylistFolderCount: number;
  libraryPlaylistMaxDepth: number;
  mediaBinTotalPlaylistCount: number;
  mediaBinPlaylistFolderCount: number;
  mediaBinPlaylistMaxDepth: number;
  mediaBinNormalPlaylistCount: number;
  mediaBinSmartPlaylistCount: number;
  mediaBinVideoInputCount: number;
  audioBinPlaylistCount: number;
  audioBinPlaylistFolderCount: number;
  audioBinPlaylistMaxDepth: number;
  timerCount: number;
  messagesCount: number;
  propsCount: number;
  stageLayoutCount: number;
  macrosCount: number;
}

export interface Startup_Themes {
  themeCount: number;
  themeFolderCount: number;
  themeFolderMaxDepth: number;
  themeSlidesCount: number;
}

export interface Startup_Macro {
  triggerOnStartupCount: number;
}

export interface Startup_ClearGroup {
  clearGroupCount: number;
  hiddenClearGroupCount: number;
  defaultIconCount: number;
  customIconCount: number;
  iconTintCount: number;
}

export interface Startup_KeyMapping {
  totalMapped: number;
  clearGroups: number;
  groups: number;
  macros: number;
  props: number;
  menus: number;
}

export interface Startup_NetworkLink {
  enabled: boolean;
  memberCount: number;
}

export interface Startup_Capture {
  presetsCount: number;
  diskPresetsCount: number;
  rtmpPresetsCount: number;
  resiPresetsCount: number;
}

function createBaseStartup(): Startup {
  return {
    looks: undefined,
    screenConfiguration: undefined,
    preferences: undefined,
    screens: undefined,
    planningCenter: undefined,
    songSelect: undefined,
    audio: undefined,
    communications: undefined,
    resi: undefined,
    interface: undefined,
    content: undefined,
    themes: undefined,
    macro: undefined,
    clearGroup: undefined,
    keyMapping: undefined,
    multitracks: undefined,
    networkLink: undefined,
    capture: undefined,
  };
}

export const Startup = {
  encode(
    message: Startup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.looks !== undefined) {
      Startup_Looks.encode(message.looks, writer.uint32(10).fork()).ldelim();
    }
    if (message.screenConfiguration !== undefined) {
      Startup_ScreenConfiguration.encode(
        message.screenConfiguration,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.preferences !== undefined) {
      Startup_Preferences.encode(
        message.preferences,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.screens !== undefined) {
      Startup_Screens.encode(
        message.screens,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.planningCenter !== undefined) {
      Startup_PlanningCenter.encode(
        message.planningCenter,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.songSelect !== undefined) {
      Startup_SongSelect.encode(
        message.songSelect,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      Startup_Audio.encode(message.audio, writer.uint32(58).fork()).ldelim();
    }
    if (message.communications !== undefined) {
      Startup_Communications.encode(
        message.communications,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.resi !== undefined) {
      Startup_Resi.encode(message.resi, writer.uint32(74).fork()).ldelim();
    }
    if (message.interface !== undefined) {
      Startup_Interface.encode(
        message.interface,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.content !== undefined) {
      Startup_Content.encode(
        message.content,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.themes !== undefined) {
      Startup_Themes.encode(message.themes, writer.uint32(98).fork()).ldelim();
    }
    if (message.macro !== undefined) {
      Startup_Macro.encode(message.macro, writer.uint32(106).fork()).ldelim();
    }
    if (message.clearGroup !== undefined) {
      Startup_ClearGroup.encode(
        message.clearGroup,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.keyMapping !== undefined) {
      Startup_KeyMapping.encode(
        message.keyMapping,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.multitracks !== undefined) {
      MultiTracks_Startup.encode(
        message.multitracks,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.networkLink !== undefined) {
      Startup_NetworkLink.encode(
        message.networkLink,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.capture !== undefined) {
      Startup_Capture.encode(
        message.capture,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.looks = Startup_Looks.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screenConfiguration = Startup_ScreenConfiguration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.preferences = Startup_Preferences.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.screens = Startup_Screens.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.planningCenter = Startup_PlanningCenter.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.songSelect = Startup_SongSelect.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.audio = Startup_Audio.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.communications = Startup_Communications.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.resi = Startup_Resi.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.interface = Startup_Interface.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.content = Startup_Content.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.themes = Startup_Themes.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.macro = Startup_Macro.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.clearGroup = Startup_ClearGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.keyMapping = Startup_KeyMapping.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.multitracks = MultiTracks_Startup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.networkLink = Startup_NetworkLink.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.capture = Startup_Capture.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup {
    return {
      looks: isSet(object.looks)
        ? Startup_Looks.fromJSON(object.looks)
        : undefined,
      screenConfiguration: isSet(object.screenConfiguration)
        ? Startup_ScreenConfiguration.fromJSON(object.screenConfiguration)
        : undefined,
      preferences: isSet(object.preferences)
        ? Startup_Preferences.fromJSON(object.preferences)
        : undefined,
      screens: isSet(object.screens)
        ? Startup_Screens.fromJSON(object.screens)
        : undefined,
      planningCenter: isSet(object.planningCenter)
        ? Startup_PlanningCenter.fromJSON(object.planningCenter)
        : undefined,
      songSelect: isSet(object.songSelect)
        ? Startup_SongSelect.fromJSON(object.songSelect)
        : undefined,
      audio: isSet(object.audio)
        ? Startup_Audio.fromJSON(object.audio)
        : undefined,
      communications: isSet(object.communications)
        ? Startup_Communications.fromJSON(object.communications)
        : undefined,
      resi: isSet(object.resi) ? Startup_Resi.fromJSON(object.resi) : undefined,
      interface: isSet(object.interface)
        ? Startup_Interface.fromJSON(object.interface)
        : undefined,
      content: isSet(object.content)
        ? Startup_Content.fromJSON(object.content)
        : undefined,
      themes: isSet(object.themes)
        ? Startup_Themes.fromJSON(object.themes)
        : undefined,
      macro: isSet(object.macro)
        ? Startup_Macro.fromJSON(object.macro)
        : undefined,
      clearGroup: isSet(object.clearGroup)
        ? Startup_ClearGroup.fromJSON(object.clearGroup)
        : undefined,
      keyMapping: isSet(object.keyMapping)
        ? Startup_KeyMapping.fromJSON(object.keyMapping)
        : undefined,
      multitracks: isSet(object.multitracks)
        ? MultiTracks_Startup.fromJSON(object.multitracks)
        : undefined,
      networkLink: isSet(object.networkLink)
        ? Startup_NetworkLink.fromJSON(object.networkLink)
        : undefined,
      capture: isSet(object.capture)
        ? Startup_Capture.fromJSON(object.capture)
        : undefined,
    };
  },

  toJSON(message: Startup): unknown {
    const obj: any = {};
    if (message.looks !== undefined) {
      obj.looks = Startup_Looks.toJSON(message.looks);
    }
    if (message.screenConfiguration !== undefined) {
      obj.screenConfiguration = Startup_ScreenConfiguration.toJSON(
        message.screenConfiguration,
      );
    }
    if (message.preferences !== undefined) {
      obj.preferences = Startup_Preferences.toJSON(message.preferences);
    }
    if (message.screens !== undefined) {
      obj.screens = Startup_Screens.toJSON(message.screens);
    }
    if (message.planningCenter !== undefined) {
      obj.planningCenter = Startup_PlanningCenter.toJSON(
        message.planningCenter,
      );
    }
    if (message.songSelect !== undefined) {
      obj.songSelect = Startup_SongSelect.toJSON(message.songSelect);
    }
    if (message.audio !== undefined) {
      obj.audio = Startup_Audio.toJSON(message.audio);
    }
    if (message.communications !== undefined) {
      obj.communications = Startup_Communications.toJSON(
        message.communications,
      );
    }
    if (message.resi !== undefined) {
      obj.resi = Startup_Resi.toJSON(message.resi);
    }
    if (message.interface !== undefined) {
      obj.interface = Startup_Interface.toJSON(message.interface);
    }
    if (message.content !== undefined) {
      obj.content = Startup_Content.toJSON(message.content);
    }
    if (message.themes !== undefined) {
      obj.themes = Startup_Themes.toJSON(message.themes);
    }
    if (message.macro !== undefined) {
      obj.macro = Startup_Macro.toJSON(message.macro);
    }
    if (message.clearGroup !== undefined) {
      obj.clearGroup = Startup_ClearGroup.toJSON(message.clearGroup);
    }
    if (message.keyMapping !== undefined) {
      obj.keyMapping = Startup_KeyMapping.toJSON(message.keyMapping);
    }
    if (message.multitracks !== undefined) {
      obj.multitracks = MultiTracks_Startup.toJSON(message.multitracks);
    }
    if (message.networkLink !== undefined) {
      obj.networkLink = Startup_NetworkLink.toJSON(message.networkLink);
    }
    if (message.capture !== undefined) {
      obj.capture = Startup_Capture.toJSON(message.capture);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup>, I>>(base?: I): Startup {
    return Startup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup>, I>>(object: I): Startup {
    const message = createBaseStartup();
    message.looks =
      object.looks !== undefined && object.looks !== null
        ? Startup_Looks.fromPartial(object.looks)
        : undefined;
    message.screenConfiguration =
      object.screenConfiguration !== undefined &&
      object.screenConfiguration !== null
        ? Startup_ScreenConfiguration.fromPartial(object.screenConfiguration)
        : undefined;
    message.preferences =
      object.preferences !== undefined && object.preferences !== null
        ? Startup_Preferences.fromPartial(object.preferences)
        : undefined;
    message.screens =
      object.screens !== undefined && object.screens !== null
        ? Startup_Screens.fromPartial(object.screens)
        : undefined;
    message.planningCenter =
      object.planningCenter !== undefined && object.planningCenter !== null
        ? Startup_PlanningCenter.fromPartial(object.planningCenter)
        : undefined;
    message.songSelect =
      object.songSelect !== undefined && object.songSelect !== null
        ? Startup_SongSelect.fromPartial(object.songSelect)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? Startup_Audio.fromPartial(object.audio)
        : undefined;
    message.communications =
      object.communications !== undefined && object.communications !== null
        ? Startup_Communications.fromPartial(object.communications)
        : undefined;
    message.resi =
      object.resi !== undefined && object.resi !== null
        ? Startup_Resi.fromPartial(object.resi)
        : undefined;
    message.interface =
      object.interface !== undefined && object.interface !== null
        ? Startup_Interface.fromPartial(object.interface)
        : undefined;
    message.content =
      object.content !== undefined && object.content !== null
        ? Startup_Content.fromPartial(object.content)
        : undefined;
    message.themes =
      object.themes !== undefined && object.themes !== null
        ? Startup_Themes.fromPartial(object.themes)
        : undefined;
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? Startup_Macro.fromPartial(object.macro)
        : undefined;
    message.clearGroup =
      object.clearGroup !== undefined && object.clearGroup !== null
        ? Startup_ClearGroup.fromPartial(object.clearGroup)
        : undefined;
    message.keyMapping =
      object.keyMapping !== undefined && object.keyMapping !== null
        ? Startup_KeyMapping.fromPartial(object.keyMapping)
        : undefined;
    message.multitracks =
      object.multitracks !== undefined && object.multitracks !== null
        ? MultiTracks_Startup.fromPartial(object.multitracks)
        : undefined;
    message.networkLink =
      object.networkLink !== undefined && object.networkLink !== null
        ? Startup_NetworkLink.fromPartial(object.networkLink)
        : undefined;
    message.capture =
      object.capture !== undefined && object.capture !== null
        ? Startup_Capture.fromPartial(object.capture)
        : undefined;
    return message;
  },
};

function createBaseStartup_Looks(): Startup_Looks {
  return { numberPresets: 0 };
}

export const Startup_Looks = {
  encode(
    message: Startup_Looks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.numberPresets !== 0) {
      writer.uint32(8).int32(message.numberPresets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Looks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Looks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberPresets = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Looks {
    return {
      numberPresets: isSet(object.numberPresets)
        ? globalThis.Number(object.numberPresets)
        : 0,
    };
  },

  toJSON(message: Startup_Looks): unknown {
    const obj: any = {};
    if (message.numberPresets !== 0) {
      obj.numberPresets = Math.round(message.numberPresets);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Looks>, I>>(
    base?: I,
  ): Startup_Looks {
    return Startup_Looks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Looks>, I>>(
    object: I,
  ): Startup_Looks {
    const message = createBaseStartup_Looks();
    message.numberPresets = object.numberPresets ?? 0;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration(): Startup_ScreenConfiguration {
  return {
    summary: undefined,
    output: undefined,
    single: undefined,
    mirrored: undefined,
    edgeBlend: undefined,
    grouped: undefined,
  };
}

export const Startup_ScreenConfiguration = {
  encode(
    message: Startup_ScreenConfiguration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.summary !== undefined) {
      Startup_ScreenConfiguration_Summary.encode(
        message.summary,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.output !== undefined) {
      Startup_ScreenConfiguration_Output.encode(
        message.output,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.single !== undefined) {
      Startup_ScreenConfiguration_Single.encode(
        message.single,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.mirrored !== undefined) {
      Startup_ScreenConfiguration_Mirrored.encode(
        message.mirrored,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.edgeBlend !== undefined) {
      Startup_ScreenConfiguration_EdgeBlend.encode(
        message.edgeBlend,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.grouped !== undefined) {
      Startup_ScreenConfiguration_Grouped.encode(
        message.grouped,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.summary = Startup_ScreenConfiguration_Summary.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.output = Startup_ScreenConfiguration_Output.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.single = Startup_ScreenConfiguration_Single.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mirrored = Startup_ScreenConfiguration_Mirrored.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.edgeBlend = Startup_ScreenConfiguration_EdgeBlend.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.grouped = Startup_ScreenConfiguration_Grouped.decode(
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

  fromJSON(object: any): Startup_ScreenConfiguration {
    return {
      summary: isSet(object.summary)
        ? Startup_ScreenConfiguration_Summary.fromJSON(object.summary)
        : undefined,
      output: isSet(object.output)
        ? Startup_ScreenConfiguration_Output.fromJSON(object.output)
        : undefined,
      single: isSet(object.single)
        ? Startup_ScreenConfiguration_Single.fromJSON(object.single)
        : undefined,
      mirrored: isSet(object.mirrored)
        ? Startup_ScreenConfiguration_Mirrored.fromJSON(object.mirrored)
        : undefined,
      edgeBlend: isSet(object.edgeBlend)
        ? Startup_ScreenConfiguration_EdgeBlend.fromJSON(object.edgeBlend)
        : undefined,
      grouped: isSet(object.grouped)
        ? Startup_ScreenConfiguration_Grouped.fromJSON(object.grouped)
        : undefined,
    };
  },

  toJSON(message: Startup_ScreenConfiguration): unknown {
    const obj: any = {};
    if (message.summary !== undefined) {
      obj.summary = Startup_ScreenConfiguration_Summary.toJSON(message.summary);
    }
    if (message.output !== undefined) {
      obj.output = Startup_ScreenConfiguration_Output.toJSON(message.output);
    }
    if (message.single !== undefined) {
      obj.single = Startup_ScreenConfiguration_Single.toJSON(message.single);
    }
    if (message.mirrored !== undefined) {
      obj.mirrored = Startup_ScreenConfiguration_Mirrored.toJSON(
        message.mirrored,
      );
    }
    if (message.edgeBlend !== undefined) {
      obj.edgeBlend = Startup_ScreenConfiguration_EdgeBlend.toJSON(
        message.edgeBlend,
      );
    }
    if (message.grouped !== undefined) {
      obj.grouped = Startup_ScreenConfiguration_Grouped.toJSON(message.grouped);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration {
    return Startup_ScreenConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_ScreenConfiguration>, I>>(
    object: I,
  ): Startup_ScreenConfiguration {
    const message = createBaseStartup_ScreenConfiguration();
    message.summary =
      object.summary !== undefined && object.summary !== null
        ? Startup_ScreenConfiguration_Summary.fromPartial(object.summary)
        : undefined;
    message.output =
      object.output !== undefined && object.output !== null
        ? Startup_ScreenConfiguration_Output.fromPartial(object.output)
        : undefined;
    message.single =
      object.single !== undefined && object.single !== null
        ? Startup_ScreenConfiguration_Single.fromPartial(object.single)
        : undefined;
    message.mirrored =
      object.mirrored !== undefined && object.mirrored !== null
        ? Startup_ScreenConfiguration_Mirrored.fromPartial(object.mirrored)
        : undefined;
    message.edgeBlend =
      object.edgeBlend !== undefined && object.edgeBlend !== null
        ? Startup_ScreenConfiguration_EdgeBlend.fromPartial(object.edgeBlend)
        : undefined;
    message.grouped =
      object.grouped !== undefined && object.grouped !== null
        ? Startup_ScreenConfiguration_Grouped.fromPartial(object.grouped)
        : undefined;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Summary(): Startup_ScreenConfiguration_Summary {
  return { totalScreens: 0, audienceScreenCount: 0, stageScreenCount: 0 };
}

export const Startup_ScreenConfiguration_Summary = {
  encode(
    message: Startup_ScreenConfiguration_Summary,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalScreens !== 0) {
      writer.uint32(8).int32(message.totalScreens);
    }
    if (message.audienceScreenCount !== 0) {
      writer.uint32(16).int32(message.audienceScreenCount);
    }
    if (message.stageScreenCount !== 0) {
      writer.uint32(24).int32(message.stageScreenCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Summary {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Summary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalScreens = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.audienceScreenCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stageScreenCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_Summary {
    return {
      totalScreens: isSet(object.totalScreens)
        ? globalThis.Number(object.totalScreens)
        : 0,
      audienceScreenCount: isSet(object.audienceScreenCount)
        ? globalThis.Number(object.audienceScreenCount)
        : 0,
      stageScreenCount: isSet(object.stageScreenCount)
        ? globalThis.Number(object.stageScreenCount)
        : 0,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Summary): unknown {
    const obj: any = {};
    if (message.totalScreens !== 0) {
      obj.totalScreens = Math.round(message.totalScreens);
    }
    if (message.audienceScreenCount !== 0) {
      obj.audienceScreenCount = Math.round(message.audienceScreenCount);
    }
    if (message.stageScreenCount !== 0) {
      obj.stageScreenCount = Math.round(message.stageScreenCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Summary>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Summary {
    return Startup_ScreenConfiguration_Summary.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Summary>, I>,
  >(object: I): Startup_ScreenConfiguration_Summary {
    const message = createBaseStartup_ScreenConfiguration_Summary();
    message.totalScreens = object.totalScreens ?? 0;
    message.audienceScreenCount = object.audienceScreenCount ?? 0;
    message.stageScreenCount = object.stageScreenCount ?? 0;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Output(): Startup_ScreenConfiguration_Output {
  return {
    proscreenType: 0,
    outputType: 0,
    colorCorrectionEnabled: false,
    cornerPinEnabled: false,
    alignment: 0,
    width: 0,
    height: 0,
    screen: undefined,
  };
}

export const Startup_ScreenConfiguration_Output = {
  encode(
    message: Startup_ScreenConfiguration_Output,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.proscreenType !== 0) {
      writer.uint32(8).int32(message.proscreenType);
    }
    if (message.outputType !== 0) {
      writer.uint32(16).int32(message.outputType);
    }
    if (message.colorCorrectionEnabled === true) {
      writer.uint32(24).bool(message.colorCorrectionEnabled);
    }
    if (message.cornerPinEnabled === true) {
      writer.uint32(32).bool(message.cornerPinEnabled);
    }
    if (message.alignment !== 0) {
      writer.uint32(48).int32(message.alignment);
    }
    if (message.width !== 0) {
      writer.uint32(56).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(64).int32(message.height);
    }
    if (message.screen !== undefined) {
      Startup_ScreenConfiguration_Screen.encode(
        message.screen,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Output {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.proscreenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.outputType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.colorCorrectionEnabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.cornerPinEnabled = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.alignment = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.height = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.screen = Startup_ScreenConfiguration_Screen.decode(
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

  fromJSON(object: any): Startup_ScreenConfiguration_Output {
    return {
      proscreenType: isSet(object.proscreenType)
        ? startup_ScreenConfiguration_Output_ProScreenTypeFromJSON(
            object.proscreenType,
          )
        : 0,
      outputType: isSet(object.outputType)
        ? startup_ScreenConfiguration_Output_OutputTypeFromJSON(
            object.outputType,
          )
        : 0,
      colorCorrectionEnabled: isSet(object.colorCorrectionEnabled)
        ? globalThis.Boolean(object.colorCorrectionEnabled)
        : false,
      cornerPinEnabled: isSet(object.cornerPinEnabled)
        ? globalThis.Boolean(object.cornerPinEnabled)
        : false,
      alignment: isSet(object.alignment)
        ? startup_ScreenConfiguration_Output_AlignmentFromJSON(object.alignment)
        : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      screen: isSet(object.screen)
        ? Startup_ScreenConfiguration_Screen.fromJSON(object.screen)
        : undefined,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Output): unknown {
    const obj: any = {};
    if (message.proscreenType !== 0) {
      obj.proscreenType =
        startup_ScreenConfiguration_Output_ProScreenTypeToJSON(
          message.proscreenType,
        );
    }
    if (message.outputType !== 0) {
      obj.outputType = startup_ScreenConfiguration_Output_OutputTypeToJSON(
        message.outputType,
      );
    }
    if (message.colorCorrectionEnabled === true) {
      obj.colorCorrectionEnabled = message.colorCorrectionEnabled;
    }
    if (message.cornerPinEnabled === true) {
      obj.cornerPinEnabled = message.cornerPinEnabled;
    }
    if (message.alignment !== 0) {
      obj.alignment = startup_ScreenConfiguration_Output_AlignmentToJSON(
        message.alignment,
      );
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.screen !== undefined) {
      obj.screen = Startup_ScreenConfiguration_Screen.toJSON(message.screen);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Output>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Output {
    return Startup_ScreenConfiguration_Output.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Output>, I>,
  >(object: I): Startup_ScreenConfiguration_Output {
    const message = createBaseStartup_ScreenConfiguration_Output();
    message.proscreenType = object.proscreenType ?? 0;
    message.outputType = object.outputType ?? 0;
    message.colorCorrectionEnabled = object.colorCorrectionEnabled ?? false;
    message.cornerPinEnabled = object.cornerPinEnabled ?? false;
    message.alignment = object.alignment ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.screen =
      object.screen !== undefined && object.screen !== null
        ? Startup_ScreenConfiguration_Screen.fromPartial(object.screen)
        : undefined;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Single(): Startup_ScreenConfiguration_Single {
  return { screenType: 0, screenColorEnabled: false };
}

export const Startup_ScreenConfiguration_Single = {
  encode(
    message: Startup_ScreenConfiguration_Single,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenType !== 0) {
      writer.uint32(8).int32(message.screenType);
    }
    if (message.screenColorEnabled === true) {
      writer.uint32(16).bool(message.screenColorEnabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Single {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_Single {
    return {
      screenType: isSet(object.screenType)
        ? startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled)
        ? globalThis.Boolean(object.screenColorEnabled)
        : false,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Single): unknown {
    const obj: any = {};
    if (message.screenType !== 0) {
      obj.screenType = startup_ScreenConfiguration_ScreenTypeToJSON(
        message.screenType,
      );
    }
    if (message.screenColorEnabled === true) {
      obj.screenColorEnabled = message.screenColorEnabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Single>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Single {
    return Startup_ScreenConfiguration_Single.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Single>, I>,
  >(object: I): Startup_ScreenConfiguration_Single {
    const message = createBaseStartup_ScreenConfiguration_Single();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Mirrored(): Startup_ScreenConfiguration_Mirrored {
  return { screenType: 0, screenColorEnabled: false, count: 0 };
}

export const Startup_ScreenConfiguration_Mirrored = {
  encode(
    message: Startup_ScreenConfiguration_Mirrored,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenType !== 0) {
      writer.uint32(8).int32(message.screenType);
    }
    if (message.screenColorEnabled === true) {
      writer.uint32(16).bool(message.screenColorEnabled);
    }
    if (message.count !== 0) {
      writer.uint32(24).int32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Mirrored {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Mirrored();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_Mirrored {
    return {
      screenType: isSet(object.screenType)
        ? startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled)
        ? globalThis.Boolean(object.screenColorEnabled)
        : false,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Mirrored): unknown {
    const obj: any = {};
    if (message.screenType !== 0) {
      obj.screenType = startup_ScreenConfiguration_ScreenTypeToJSON(
        message.screenType,
      );
    }
    if (message.screenColorEnabled === true) {
      obj.screenColorEnabled = message.screenColorEnabled;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Mirrored>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Mirrored {
    return Startup_ScreenConfiguration_Mirrored.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Mirrored>, I>,
  >(object: I): Startup_ScreenConfiguration_Mirrored {
    const message = createBaseStartup_ScreenConfiguration_Mirrored();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_EdgeBlend(): Startup_ScreenConfiguration_EdgeBlend {
  return { screenType: 0, screenColorEnabled: false, count: 0 };
}

export const Startup_ScreenConfiguration_EdgeBlend = {
  encode(
    message: Startup_ScreenConfiguration_EdgeBlend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenType !== 0) {
      writer.uint32(8).int32(message.screenType);
    }
    if (message.screenColorEnabled === true) {
      writer.uint32(16).bool(message.screenColorEnabled);
    }
    if (message.count !== 0) {
      writer.uint32(24).int32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_EdgeBlend {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_EdgeBlend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_EdgeBlend {
    return {
      screenType: isSet(object.screenType)
        ? startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled)
        ? globalThis.Boolean(object.screenColorEnabled)
        : false,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_EdgeBlend): unknown {
    const obj: any = {};
    if (message.screenType !== 0) {
      obj.screenType = startup_ScreenConfiguration_ScreenTypeToJSON(
        message.screenType,
      );
    }
    if (message.screenColorEnabled === true) {
      obj.screenColorEnabled = message.screenColorEnabled;
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_EdgeBlend>, I>,
  >(base?: I): Startup_ScreenConfiguration_EdgeBlend {
    return Startup_ScreenConfiguration_EdgeBlend.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_EdgeBlend>, I>,
  >(object: I): Startup_ScreenConfiguration_EdgeBlend {
    const message = createBaseStartup_ScreenConfiguration_EdgeBlend();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Grouped(): Startup_ScreenConfiguration_Grouped {
  return { screenType: 0, screenColorEnabled: false, columns: 0, rows: 0 };
}

export const Startup_ScreenConfiguration_Grouped = {
  encode(
    message: Startup_ScreenConfiguration_Grouped,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenType !== 0) {
      writer.uint32(8).int32(message.screenType);
    }
    if (message.screenColorEnabled === true) {
      writer.uint32(16).bool(message.screenColorEnabled);
    }
    if (message.columns !== 0) {
      writer.uint32(24).int32(message.columns);
    }
    if (message.rows !== 0) {
      writer.uint32(32).int32(message.rows);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Grouped {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Grouped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.columns = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rows = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_Grouped {
    return {
      screenType: isSet(object.screenType)
        ? startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled)
        ? globalThis.Boolean(object.screenColorEnabled)
        : false,
      columns: isSet(object.columns) ? globalThis.Number(object.columns) : 0,
      rows: isSet(object.rows) ? globalThis.Number(object.rows) : 0,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Grouped): unknown {
    const obj: any = {};
    if (message.screenType !== 0) {
      obj.screenType = startup_ScreenConfiguration_ScreenTypeToJSON(
        message.screenType,
      );
    }
    if (message.screenColorEnabled === true) {
      obj.screenColorEnabled = message.screenColorEnabled;
    }
    if (message.columns !== 0) {
      obj.columns = Math.round(message.columns);
    }
    if (message.rows !== 0) {
      obj.rows = Math.round(message.rows);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Grouped>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Grouped {
    return Startup_ScreenConfiguration_Grouped.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Grouped>, I>,
  >(object: I): Startup_ScreenConfiguration_Grouped {
    const message = createBaseStartup_ScreenConfiguration_Grouped();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.columns = object.columns ?? 0;
    message.rows = object.rows ?? 0;
    return message;
  },
};

function createBaseStartup_ScreenConfiguration_Screen(): Startup_ScreenConfiguration_Screen {
  return { alphaKeyMode: 0, alphaDevice: 0 };
}

export const Startup_ScreenConfiguration_Screen = {
  encode(
    message: Startup_ScreenConfiguration_Screen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.alphaKeyMode !== 0) {
      writer.uint32(8).int32(message.alphaKeyMode);
    }
    if (message.alphaDevice !== 0) {
      writer.uint32(16).int32(message.alphaDevice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_ScreenConfiguration_Screen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ScreenConfiguration_Screen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alphaKeyMode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.alphaDevice = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ScreenConfiguration_Screen {
    return {
      alphaKeyMode: isSet(object.alphaKeyMode)
        ? startup_ScreenConfiguration_Screen_AlphaKeyModeFromJSON(
            object.alphaKeyMode,
          )
        : 0,
      alphaDevice: isSet(object.alphaDevice)
        ? startup_ScreenConfiguration_Screen_AlphaDeviceFromJSON(
            object.alphaDevice,
          )
        : 0,
    };
  },

  toJSON(message: Startup_ScreenConfiguration_Screen): unknown {
    const obj: any = {};
    if (message.alphaKeyMode !== 0) {
      obj.alphaKeyMode = startup_ScreenConfiguration_Screen_AlphaKeyModeToJSON(
        message.alphaKeyMode,
      );
    }
    if (message.alphaDevice !== 0) {
      obj.alphaDevice = startup_ScreenConfiguration_Screen_AlphaDeviceToJSON(
        message.alphaDevice,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ScreenConfiguration_Screen>, I>>(
    base?: I,
  ): Startup_ScreenConfiguration_Screen {
    return Startup_ScreenConfiguration_Screen.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Startup_ScreenConfiguration_Screen>, I>,
  >(object: I): Startup_ScreenConfiguration_Screen {
    const message = createBaseStartup_ScreenConfiguration_Screen();
    message.alphaKeyMode = object.alphaKeyMode ?? 0;
    message.alphaDevice = object.alphaDevice ?? 0;
    return message;
  },
};

function createBaseStartup_Preferences(): Startup_Preferences {
  return {
    houseOfWorship: false,
    hasCustomLogo: false,
    copyrightEnabled: false,
    copyrightStyle: 0,
    copyrightHasLicense: false,
    renderMode: 0,
    suppressAutoStart: false,
    manageMediaAutomatically: false,
    searchPathsRelink: false,
    updateChannel: 0,
  };
}

export const Startup_Preferences = {
  encode(
    message: Startup_Preferences,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.houseOfWorship === true) {
      writer.uint32(8).bool(message.houseOfWorship);
    }
    if (message.hasCustomLogo === true) {
      writer.uint32(16).bool(message.hasCustomLogo);
    }
    if (message.copyrightEnabled === true) {
      writer.uint32(24).bool(message.copyrightEnabled);
    }
    if (message.copyrightStyle !== 0) {
      writer.uint32(32).int32(message.copyrightStyle);
    }
    if (message.copyrightHasLicense === true) {
      writer.uint32(40).bool(message.copyrightHasLicense);
    }
    if (message.renderMode !== 0) {
      writer.uint32(48).int32(message.renderMode);
    }
    if (message.suppressAutoStart === true) {
      writer.uint32(56).bool(message.suppressAutoStart);
    }
    if (message.manageMediaAutomatically === true) {
      writer.uint32(64).bool(message.manageMediaAutomatically);
    }
    if (message.searchPathsRelink === true) {
      writer.uint32(72).bool(message.searchPathsRelink);
    }
    if (message.updateChannel !== 0) {
      writer.uint32(80).int32(message.updateChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Preferences {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Preferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.houseOfWorship = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.hasCustomLogo = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.copyrightEnabled = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.copyrightStyle = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.copyrightHasLicense = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.renderMode = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.suppressAutoStart = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.manageMediaAutomatically = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.searchPathsRelink = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.updateChannel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Preferences {
    return {
      houseOfWorship: isSet(object.houseOfWorship)
        ? globalThis.Boolean(object.houseOfWorship)
        : false,
      hasCustomLogo: isSet(object.hasCustomLogo)
        ? globalThis.Boolean(object.hasCustomLogo)
        : false,
      copyrightEnabled: isSet(object.copyrightEnabled)
        ? globalThis.Boolean(object.copyrightEnabled)
        : false,
      copyrightStyle: isSet(object.copyrightStyle)
        ? startup_Preferences_CopyrightStyleFromJSON(object.copyrightStyle)
        : 0,
      copyrightHasLicense: isSet(object.copyrightHasLicense)
        ? globalThis.Boolean(object.copyrightHasLicense)
        : false,
      renderMode: isSet(object.renderMode)
        ? startup_Preferences_RenderModeFromJSON(object.renderMode)
        : 0,
      suppressAutoStart: isSet(object.suppressAutoStart)
        ? globalThis.Boolean(object.suppressAutoStart)
        : false,
      manageMediaAutomatically: isSet(object.manageMediaAutomatically)
        ? globalThis.Boolean(object.manageMediaAutomatically)
        : false,
      searchPathsRelink: isSet(object.searchPathsRelink)
        ? globalThis.Boolean(object.searchPathsRelink)
        : false,
      updateChannel: isSet(object.updateChannel)
        ? startup_Preferences_UpdateChannelFromJSON(object.updateChannel)
        : 0,
    };
  },

  toJSON(message: Startup_Preferences): unknown {
    const obj: any = {};
    if (message.houseOfWorship === true) {
      obj.houseOfWorship = message.houseOfWorship;
    }
    if (message.hasCustomLogo === true) {
      obj.hasCustomLogo = message.hasCustomLogo;
    }
    if (message.copyrightEnabled === true) {
      obj.copyrightEnabled = message.copyrightEnabled;
    }
    if (message.copyrightStyle !== 0) {
      obj.copyrightStyle = startup_Preferences_CopyrightStyleToJSON(
        message.copyrightStyle,
      );
    }
    if (message.copyrightHasLicense === true) {
      obj.copyrightHasLicense = message.copyrightHasLicense;
    }
    if (message.renderMode !== 0) {
      obj.renderMode = startup_Preferences_RenderModeToJSON(message.renderMode);
    }
    if (message.suppressAutoStart === true) {
      obj.suppressAutoStart = message.suppressAutoStart;
    }
    if (message.manageMediaAutomatically === true) {
      obj.manageMediaAutomatically = message.manageMediaAutomatically;
    }
    if (message.searchPathsRelink === true) {
      obj.searchPathsRelink = message.searchPathsRelink;
    }
    if (message.updateChannel !== 0) {
      obj.updateChannel = startup_Preferences_UpdateChannelToJSON(
        message.updateChannel,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Preferences>, I>>(
    base?: I,
  ): Startup_Preferences {
    return Startup_Preferences.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Preferences>, I>>(
    object: I,
  ): Startup_Preferences {
    const message = createBaseStartup_Preferences();
    message.houseOfWorship = object.houseOfWorship ?? false;
    message.hasCustomLogo = object.hasCustomLogo ?? false;
    message.copyrightEnabled = object.copyrightEnabled ?? false;
    message.copyrightStyle = object.copyrightStyle ?? 0;
    message.copyrightHasLicense = object.copyrightHasLicense ?? false;
    message.renderMode = object.renderMode ?? 0;
    message.suppressAutoStart = object.suppressAutoStart ?? false;
    message.manageMediaAutomatically = object.manageMediaAutomatically ?? false;
    message.searchPathsRelink = object.searchPathsRelink ?? false;
    message.updateChannel = object.updateChannel ?? 0;
    return message;
  },
};

function createBaseStartup_Screens(): Startup_Screens {
  return {
    showScreensLaunch: false,
    showPerformanceOnScreen: false,
    ignoreBackgroundColors: false,
    showKeynotePptScreens: false,
  };
}

export const Startup_Screens = {
  encode(
    message: Startup_Screens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.showScreensLaunch === true) {
      writer.uint32(8).bool(message.showScreensLaunch);
    }
    if (message.showPerformanceOnScreen === true) {
      writer.uint32(16).bool(message.showPerformanceOnScreen);
    }
    if (message.ignoreBackgroundColors === true) {
      writer.uint32(24).bool(message.ignoreBackgroundColors);
    }
    if (message.showKeynotePptScreens === true) {
      writer.uint32(32).bool(message.showKeynotePptScreens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Screens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Screens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.showScreensLaunch = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.showPerformanceOnScreen = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ignoreBackgroundColors = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.showKeynotePptScreens = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Screens {
    return {
      showScreensLaunch: isSet(object.showScreensLaunch)
        ? globalThis.Boolean(object.showScreensLaunch)
        : false,
      showPerformanceOnScreen: isSet(object.showPerformanceOnScreen)
        ? globalThis.Boolean(object.showPerformanceOnScreen)
        : false,
      ignoreBackgroundColors: isSet(object.ignoreBackgroundColors)
        ? globalThis.Boolean(object.ignoreBackgroundColors)
        : false,
      showKeynotePptScreens: isSet(object.showKeynotePptScreens)
        ? globalThis.Boolean(object.showKeynotePptScreens)
        : false,
    };
  },

  toJSON(message: Startup_Screens): unknown {
    const obj: any = {};
    if (message.showScreensLaunch === true) {
      obj.showScreensLaunch = message.showScreensLaunch;
    }
    if (message.showPerformanceOnScreen === true) {
      obj.showPerformanceOnScreen = message.showPerformanceOnScreen;
    }
    if (message.ignoreBackgroundColors === true) {
      obj.ignoreBackgroundColors = message.ignoreBackgroundColors;
    }
    if (message.showKeynotePptScreens === true) {
      obj.showKeynotePptScreens = message.showKeynotePptScreens;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Screens>, I>>(
    base?: I,
  ): Startup_Screens {
    return Startup_Screens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Screens>, I>>(
    object: I,
  ): Startup_Screens {
    const message = createBaseStartup_Screens();
    message.showScreensLaunch = object.showScreensLaunch ?? false;
    message.showPerformanceOnScreen = object.showPerformanceOnScreen ?? false;
    message.ignoreBackgroundColors = object.ignoreBackgroundColors ?? false;
    message.showKeynotePptScreens = object.showKeynotePptScreens ?? false;
    return message;
  },
};

function createBaseStartup_PlanningCenter(): Startup_PlanningCenter {
  return {
    loggedIn: false,
    autoUpdate: false,
    matchSongs: false,
    showHistory: false,
    makeArrangements: false,
    autoUpload: false,
    autoDownload: false,
  };
}

export const Startup_PlanningCenter = {
  encode(
    message: Startup_PlanningCenter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.loggedIn === true) {
      writer.uint32(8).bool(message.loggedIn);
    }
    if (message.autoUpdate === true) {
      writer.uint32(16).bool(message.autoUpdate);
    }
    if (message.matchSongs === true) {
      writer.uint32(24).bool(message.matchSongs);
    }
    if (message.showHistory === true) {
      writer.uint32(32).bool(message.showHistory);
    }
    if (message.makeArrangements === true) {
      writer.uint32(40).bool(message.makeArrangements);
    }
    if (message.autoUpload === true) {
      writer.uint32(48).bool(message.autoUpload);
    }
    if (message.autoDownload === true) {
      writer.uint32(56).bool(message.autoDownload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_PlanningCenter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_PlanningCenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.autoUpdate = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.matchSongs = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.showHistory = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.makeArrangements = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.autoUpload = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.autoDownload = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_PlanningCenter {
    return {
      loggedIn: isSet(object.loggedIn)
        ? globalThis.Boolean(object.loggedIn)
        : false,
      autoUpdate: isSet(object.autoUpdate)
        ? globalThis.Boolean(object.autoUpdate)
        : false,
      matchSongs: isSet(object.matchSongs)
        ? globalThis.Boolean(object.matchSongs)
        : false,
      showHistory: isSet(object.showHistory)
        ? globalThis.Boolean(object.showHistory)
        : false,
      makeArrangements: isSet(object.makeArrangements)
        ? globalThis.Boolean(object.makeArrangements)
        : false,
      autoUpload: isSet(object.autoUpload)
        ? globalThis.Boolean(object.autoUpload)
        : false,
      autoDownload: isSet(object.autoDownload)
        ? globalThis.Boolean(object.autoDownload)
        : false,
    };
  },

  toJSON(message: Startup_PlanningCenter): unknown {
    const obj: any = {};
    if (message.loggedIn === true) {
      obj.loggedIn = message.loggedIn;
    }
    if (message.autoUpdate === true) {
      obj.autoUpdate = message.autoUpdate;
    }
    if (message.matchSongs === true) {
      obj.matchSongs = message.matchSongs;
    }
    if (message.showHistory === true) {
      obj.showHistory = message.showHistory;
    }
    if (message.makeArrangements === true) {
      obj.makeArrangements = message.makeArrangements;
    }
    if (message.autoUpload === true) {
      obj.autoUpload = message.autoUpload;
    }
    if (message.autoDownload === true) {
      obj.autoDownload = message.autoDownload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_PlanningCenter>, I>>(
    base?: I,
  ): Startup_PlanningCenter {
    return Startup_PlanningCenter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_PlanningCenter>, I>>(
    object: I,
  ): Startup_PlanningCenter {
    const message = createBaseStartup_PlanningCenter();
    message.loggedIn = object.loggedIn ?? false;
    message.autoUpdate = object.autoUpdate ?? false;
    message.matchSongs = object.matchSongs ?? false;
    message.showHistory = object.showHistory ?? false;
    message.makeArrangements = object.makeArrangements ?? false;
    message.autoUpload = object.autoUpload ?? false;
    message.autoDownload = object.autoDownload ?? false;
    return message;
  },
};

function createBaseStartup_SongSelect(): Startup_SongSelect {
  return { loggedIn: false };
}

export const Startup_SongSelect = {
  encode(
    message: Startup_SongSelect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.loggedIn === true) {
      writer.uint32(8).bool(message.loggedIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_SongSelect {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_SongSelect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_SongSelect {
    return {
      loggedIn: isSet(object.loggedIn)
        ? globalThis.Boolean(object.loggedIn)
        : false,
    };
  },

  toJSON(message: Startup_SongSelect): unknown {
    const obj: any = {};
    if (message.loggedIn === true) {
      obj.loggedIn = message.loggedIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_SongSelect>, I>>(
    base?: I,
  ): Startup_SongSelect {
    return Startup_SongSelect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_SongSelect>, I>>(
    object: I,
  ): Startup_SongSelect {
    const message = createBaseStartup_SongSelect();
    message.loggedIn = object.loggedIn ?? false;
    return message;
  },
};

function createBaseStartup_Audio(): Startup_Audio {
  return {
    busCount: 0,
    inspectorDevice: 0,
    inspectorRouting: 0,
    mainDevice: 0,
    mainRouting: 0,
    mainDelay: 0,
    sdiNdi: false,
    sdiNdiRouting: 0,
    sdiNdiDelay: 0,
  };
}

export const Startup_Audio = {
  encode(
    message: Startup_Audio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.busCount !== 0) {
      writer.uint32(8).int32(message.busCount);
    }
    if (message.inspectorDevice !== 0) {
      writer.uint32(16).int32(message.inspectorDevice);
    }
    if (message.inspectorRouting !== 0) {
      writer.uint32(24).int32(message.inspectorRouting);
    }
    if (message.mainDevice !== 0) {
      writer.uint32(32).int32(message.mainDevice);
    }
    if (message.mainRouting !== 0) {
      writer.uint32(40).int32(message.mainRouting);
    }
    if (message.mainDelay !== 0) {
      writer.uint32(48).int32(message.mainDelay);
    }
    if (message.sdiNdi === true) {
      writer.uint32(56).bool(message.sdiNdi);
    }
    if (message.sdiNdiRouting !== 0) {
      writer.uint32(64).int32(message.sdiNdiRouting);
    }
    if (message.sdiNdiDelay !== 0) {
      writer.uint32(72).int32(message.sdiNdiDelay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Audio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.busCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.inspectorDevice = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.inspectorRouting = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.mainDevice = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mainRouting = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.mainDelay = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.sdiNdi = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.sdiNdiRouting = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.sdiNdiDelay = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Audio {
    return {
      busCount: isSet(object.busCount) ? globalThis.Number(object.busCount) : 0,
      inspectorDevice: isSet(object.inspectorDevice)
        ? startup_Audio_AudioDeviceFromJSON(object.inspectorDevice)
        : 0,
      inspectorRouting: isSet(object.inspectorRouting)
        ? startup_Audio_InspectorRoutingFromJSON(object.inspectorRouting)
        : 0,
      mainDevice: isSet(object.mainDevice)
        ? startup_Audio_AudioDeviceFromJSON(object.mainDevice)
        : 0,
      mainRouting: isSet(object.mainRouting)
        ? startup_Audio_AudioRoutingFromJSON(object.mainRouting)
        : 0,
      mainDelay: isSet(object.mainDelay)
        ? globalThis.Number(object.mainDelay)
        : 0,
      sdiNdi: isSet(object.sdiNdi) ? globalThis.Boolean(object.sdiNdi) : false,
      sdiNdiRouting: isSet(object.sdiNdiRouting)
        ? startup_Audio_AudioRoutingFromJSON(object.sdiNdiRouting)
        : 0,
      sdiNdiDelay: isSet(object.sdiNdiDelay)
        ? globalThis.Number(object.sdiNdiDelay)
        : 0,
    };
  },

  toJSON(message: Startup_Audio): unknown {
    const obj: any = {};
    if (message.busCount !== 0) {
      obj.busCount = Math.round(message.busCount);
    }
    if (message.inspectorDevice !== 0) {
      obj.inspectorDevice = startup_Audio_AudioDeviceToJSON(
        message.inspectorDevice,
      );
    }
    if (message.inspectorRouting !== 0) {
      obj.inspectorRouting = startup_Audio_InspectorRoutingToJSON(
        message.inspectorRouting,
      );
    }
    if (message.mainDevice !== 0) {
      obj.mainDevice = startup_Audio_AudioDeviceToJSON(message.mainDevice);
    }
    if (message.mainRouting !== 0) {
      obj.mainRouting = startup_Audio_AudioRoutingToJSON(message.mainRouting);
    }
    if (message.mainDelay !== 0) {
      obj.mainDelay = Math.round(message.mainDelay);
    }
    if (message.sdiNdi === true) {
      obj.sdiNdi = message.sdiNdi;
    }
    if (message.sdiNdiRouting !== 0) {
      obj.sdiNdiRouting = startup_Audio_AudioRoutingToJSON(
        message.sdiNdiRouting,
      );
    }
    if (message.sdiNdiDelay !== 0) {
      obj.sdiNdiDelay = Math.round(message.sdiNdiDelay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Audio>, I>>(
    base?: I,
  ): Startup_Audio {
    return Startup_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Audio>, I>>(
    object: I,
  ): Startup_Audio {
    const message = createBaseStartup_Audio();
    message.busCount = object.busCount ?? 0;
    message.inspectorDevice = object.inspectorDevice ?? 0;
    message.inspectorRouting = object.inspectorRouting ?? 0;
    message.mainDevice = object.mainDevice ?? 0;
    message.mainRouting = object.mainRouting ?? 0;
    message.mainDelay = object.mainDelay ?? 0;
    message.sdiNdi = object.sdiNdi ?? false;
    message.sdiNdiRouting = object.sdiNdiRouting ?? 0;
    message.sdiNdiDelay = object.sdiNdiDelay ?? 0;
    return message;
  },
};

function createBaseStartup_Communications(): Startup_Communications {
  return { totalDeviceCount: 0 };
}

export const Startup_Communications = {
  encode(
    message: Startup_Communications,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalDeviceCount !== 0) {
      writer.uint32(8).int32(message.totalDeviceCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Startup_Communications {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Communications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalDeviceCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Communications {
    return {
      totalDeviceCount: isSet(object.totalDeviceCount)
        ? globalThis.Number(object.totalDeviceCount)
        : 0,
    };
  },

  toJSON(message: Startup_Communications): unknown {
    const obj: any = {};
    if (message.totalDeviceCount !== 0) {
      obj.totalDeviceCount = Math.round(message.totalDeviceCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Communications>, I>>(
    base?: I,
  ): Startup_Communications {
    return Startup_Communications.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Communications>, I>>(
    object: I,
  ): Startup_Communications {
    const message = createBaseStartup_Communications();
    message.totalDeviceCount = object.totalDeviceCount ?? 0;
    return message;
  },
};

function createBaseStartup_Resi(): Startup_Resi {
  return { loggedIn: false };
}

export const Startup_Resi = {
  encode(
    message: Startup_Resi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.loggedIn === true) {
      writer.uint32(8).bool(message.loggedIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Resi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Resi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Resi {
    return {
      loggedIn: isSet(object.loggedIn)
        ? globalThis.Boolean(object.loggedIn)
        : false,
    };
  },

  toJSON(message: Startup_Resi): unknown {
    const obj: any = {};
    if (message.loggedIn === true) {
      obj.loggedIn = message.loggedIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Resi>, I>>(
    base?: I,
  ): Startup_Resi {
    return Startup_Resi.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Resi>, I>>(
    object: I,
  ): Startup_Resi {
    const message = createBaseStartup_Resi();
    message.loggedIn = object.loggedIn ?? false;
    return message;
  },
};

function createBaseStartup_Interface(): Startup_Interface {
  return {
    libraryOutline: 0,
    mediaOutline: 0,
    audioOutline: 0,
    continuousPlaylist: false,
    mediaBin: 0,
    presentationViewStyle: 0,
    presentationGridColumnCount: 0,
    presentationTableColumnCount: 0,
    mediaBinViewStyle: 0,
    mediaBinGridColumnCount: 0,
    mediaBinTableColumnCount: 0,
    presentationTransition: '',
    mediaTransition: '',
    audioShuffle: false,
  };
}

export const Startup_Interface = {
  encode(
    message: Startup_Interface,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraryOutline !== 0) {
      writer.uint32(8).int32(message.libraryOutline);
    }
    if (message.mediaOutline !== 0) {
      writer.uint32(16).int32(message.mediaOutline);
    }
    if (message.audioOutline !== 0) {
      writer.uint32(24).int32(message.audioOutline);
    }
    if (message.continuousPlaylist === true) {
      writer.uint32(32).bool(message.continuousPlaylist);
    }
    if (message.mediaBin !== 0) {
      writer.uint32(40).int32(message.mediaBin);
    }
    if (message.presentationViewStyle !== 0) {
      writer.uint32(48).int32(message.presentationViewStyle);
    }
    if (message.presentationGridColumnCount !== 0) {
      writer.uint32(56).int32(message.presentationGridColumnCount);
    }
    if (message.presentationTableColumnCount !== 0) {
      writer.uint32(64).int32(message.presentationTableColumnCount);
    }
    if (message.mediaBinViewStyle !== 0) {
      writer.uint32(72).int32(message.mediaBinViewStyle);
    }
    if (message.mediaBinGridColumnCount !== 0) {
      writer.uint32(80).int32(message.mediaBinGridColumnCount);
    }
    if (message.mediaBinTableColumnCount !== 0) {
      writer.uint32(88).int32(message.mediaBinTableColumnCount);
    }
    if (message.presentationTransition !== '') {
      writer.uint32(98).string(message.presentationTransition);
    }
    if (message.mediaTransition !== '') {
      writer.uint32(106).string(message.mediaTransition);
    }
    if (message.audioShuffle === true) {
      writer.uint32(112).bool(message.audioShuffle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Interface {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Interface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.libraryOutline = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mediaOutline = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.audioOutline = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.continuousPlaylist = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mediaBin = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.presentationViewStyle = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.presentationGridColumnCount = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.presentationTableColumnCount = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.mediaBinViewStyle = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.mediaBinGridColumnCount = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.mediaBinTableColumnCount = reader.int32();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.presentationTransition = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.mediaTransition = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.audioShuffle = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Interface {
    return {
      libraryOutline: isSet(object.libraryOutline)
        ? startup_Interface_SplitViewStateFromJSON(object.libraryOutline)
        : 0,
      mediaOutline: isSet(object.mediaOutline)
        ? startup_Interface_SplitViewStateFromJSON(object.mediaOutline)
        : 0,
      audioOutline: isSet(object.audioOutline)
        ? startup_Interface_SplitViewStateFromJSON(object.audioOutline)
        : 0,
      continuousPlaylist: isSet(object.continuousPlaylist)
        ? globalThis.Boolean(object.continuousPlaylist)
        : false,
      mediaBin: isSet(object.mediaBin)
        ? startup_Interface_SplitViewStateFromJSON(object.mediaBin)
        : 0,
      presentationViewStyle: isSet(object.presentationViewStyle)
        ? startup_Interface_PresentationViewStyleFromJSON(
            object.presentationViewStyle,
          )
        : 0,
      presentationGridColumnCount: isSet(object.presentationGridColumnCount)
        ? globalThis.Number(object.presentationGridColumnCount)
        : 0,
      presentationTableColumnCount: isSet(object.presentationTableColumnCount)
        ? globalThis.Number(object.presentationTableColumnCount)
        : 0,
      mediaBinViewStyle: isSet(object.mediaBinViewStyle)
        ? startup_Interface_MediaBinViewStyleFromJSON(object.mediaBinViewStyle)
        : 0,
      mediaBinGridColumnCount: isSet(object.mediaBinGridColumnCount)
        ? globalThis.Number(object.mediaBinGridColumnCount)
        : 0,
      mediaBinTableColumnCount: isSet(object.mediaBinTableColumnCount)
        ? globalThis.Number(object.mediaBinTableColumnCount)
        : 0,
      presentationTransition: isSet(object.presentationTransition)
        ? globalThis.String(object.presentationTransition)
        : '',
      mediaTransition: isSet(object.mediaTransition)
        ? globalThis.String(object.mediaTransition)
        : '',
      audioShuffle: isSet(object.audioShuffle)
        ? globalThis.Boolean(object.audioShuffle)
        : false,
    };
  },

  toJSON(message: Startup_Interface): unknown {
    const obj: any = {};
    if (message.libraryOutline !== 0) {
      obj.libraryOutline = startup_Interface_SplitViewStateToJSON(
        message.libraryOutline,
      );
    }
    if (message.mediaOutline !== 0) {
      obj.mediaOutline = startup_Interface_SplitViewStateToJSON(
        message.mediaOutline,
      );
    }
    if (message.audioOutline !== 0) {
      obj.audioOutline = startup_Interface_SplitViewStateToJSON(
        message.audioOutline,
      );
    }
    if (message.continuousPlaylist === true) {
      obj.continuousPlaylist = message.continuousPlaylist;
    }
    if (message.mediaBin !== 0) {
      obj.mediaBin = startup_Interface_SplitViewStateToJSON(message.mediaBin);
    }
    if (message.presentationViewStyle !== 0) {
      obj.presentationViewStyle = startup_Interface_PresentationViewStyleToJSON(
        message.presentationViewStyle,
      );
    }
    if (message.presentationGridColumnCount !== 0) {
      obj.presentationGridColumnCount = Math.round(
        message.presentationGridColumnCount,
      );
    }
    if (message.presentationTableColumnCount !== 0) {
      obj.presentationTableColumnCount = Math.round(
        message.presentationTableColumnCount,
      );
    }
    if (message.mediaBinViewStyle !== 0) {
      obj.mediaBinViewStyle = startup_Interface_MediaBinViewStyleToJSON(
        message.mediaBinViewStyle,
      );
    }
    if (message.mediaBinGridColumnCount !== 0) {
      obj.mediaBinGridColumnCount = Math.round(message.mediaBinGridColumnCount);
    }
    if (message.mediaBinTableColumnCount !== 0) {
      obj.mediaBinTableColumnCount = Math.round(
        message.mediaBinTableColumnCount,
      );
    }
    if (message.presentationTransition !== '') {
      obj.presentationTransition = message.presentationTransition;
    }
    if (message.mediaTransition !== '') {
      obj.mediaTransition = message.mediaTransition;
    }
    if (message.audioShuffle === true) {
      obj.audioShuffle = message.audioShuffle;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Interface>, I>>(
    base?: I,
  ): Startup_Interface {
    return Startup_Interface.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Interface>, I>>(
    object: I,
  ): Startup_Interface {
    const message = createBaseStartup_Interface();
    message.libraryOutline = object.libraryOutline ?? 0;
    message.mediaOutline = object.mediaOutline ?? 0;
    message.audioOutline = object.audioOutline ?? 0;
    message.continuousPlaylist = object.continuousPlaylist ?? false;
    message.mediaBin = object.mediaBin ?? 0;
    message.presentationViewStyle = object.presentationViewStyle ?? 0;
    message.presentationGridColumnCount =
      object.presentationGridColumnCount ?? 0;
    message.presentationTableColumnCount =
      object.presentationTableColumnCount ?? 0;
    message.mediaBinViewStyle = object.mediaBinViewStyle ?? 0;
    message.mediaBinGridColumnCount = object.mediaBinGridColumnCount ?? 0;
    message.mediaBinTableColumnCount = object.mediaBinTableColumnCount ?? 0;
    message.presentationTransition = object.presentationTransition ?? '';
    message.mediaTransition = object.mediaTransition ?? '';
    message.audioShuffle = object.audioShuffle ?? false;
    return message;
  },
};

function createBaseStartup_Content(): Startup_Content {
  return {
    libraryCount: 0,
    libraryPlaylistCount: 0,
    libraryPlaylistFolderCount: 0,
    libraryPlaylistMaxDepth: 0,
    mediaBinTotalPlaylistCount: 0,
    mediaBinPlaylistFolderCount: 0,
    mediaBinPlaylistMaxDepth: 0,
    mediaBinNormalPlaylistCount: 0,
    mediaBinSmartPlaylistCount: 0,
    mediaBinVideoInputCount: 0,
    audioBinPlaylistCount: 0,
    audioBinPlaylistFolderCount: 0,
    audioBinPlaylistMaxDepth: 0,
    timerCount: 0,
    messagesCount: 0,
    propsCount: 0,
    stageLayoutCount: 0,
    macrosCount: 0,
  };
}

export const Startup_Content = {
  encode(
    message: Startup_Content,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraryCount !== 0) {
      writer.uint32(8).int32(message.libraryCount);
    }
    if (message.libraryPlaylistCount !== 0) {
      writer.uint32(16).int32(message.libraryPlaylistCount);
    }
    if (message.libraryPlaylistFolderCount !== 0) {
      writer.uint32(24).int32(message.libraryPlaylistFolderCount);
    }
    if (message.libraryPlaylistMaxDepth !== 0) {
      writer.uint32(32).int32(message.libraryPlaylistMaxDepth);
    }
    if (message.mediaBinTotalPlaylistCount !== 0) {
      writer.uint32(40).int32(message.mediaBinTotalPlaylistCount);
    }
    if (message.mediaBinPlaylistFolderCount !== 0) {
      writer.uint32(48).int32(message.mediaBinPlaylistFolderCount);
    }
    if (message.mediaBinPlaylistMaxDepth !== 0) {
      writer.uint32(56).int32(message.mediaBinPlaylistMaxDepth);
    }
    if (message.mediaBinNormalPlaylistCount !== 0) {
      writer.uint32(64).int32(message.mediaBinNormalPlaylistCount);
    }
    if (message.mediaBinSmartPlaylistCount !== 0) {
      writer.uint32(72).int32(message.mediaBinSmartPlaylistCount);
    }
    if (message.mediaBinVideoInputCount !== 0) {
      writer.uint32(80).int32(message.mediaBinVideoInputCount);
    }
    if (message.audioBinPlaylistCount !== 0) {
      writer.uint32(88).int32(message.audioBinPlaylistCount);
    }
    if (message.audioBinPlaylistFolderCount !== 0) {
      writer.uint32(96).int32(message.audioBinPlaylistFolderCount);
    }
    if (message.audioBinPlaylistMaxDepth !== 0) {
      writer.uint32(104).int32(message.audioBinPlaylistMaxDepth);
    }
    if (message.timerCount !== 0) {
      writer.uint32(112).int32(message.timerCount);
    }
    if (message.messagesCount !== 0) {
      writer.uint32(120).int32(message.messagesCount);
    }
    if (message.propsCount !== 0) {
      writer.uint32(128).int32(message.propsCount);
    }
    if (message.stageLayoutCount !== 0) {
      writer.uint32(136).int32(message.stageLayoutCount);
    }
    if (message.macrosCount !== 0) {
      writer.uint32(144).int32(message.macrosCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Content {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Content();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.libraryCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.libraryPlaylistCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.libraryPlaylistFolderCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.libraryPlaylistMaxDepth = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mediaBinTotalPlaylistCount = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.mediaBinPlaylistFolderCount = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mediaBinPlaylistMaxDepth = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.mediaBinNormalPlaylistCount = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.mediaBinSmartPlaylistCount = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.mediaBinVideoInputCount = reader.int32();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.audioBinPlaylistCount = reader.int32();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.audioBinPlaylistFolderCount = reader.int32();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.audioBinPlaylistMaxDepth = reader.int32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.timerCount = reader.int32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.messagesCount = reader.int32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.propsCount = reader.int32();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.stageLayoutCount = reader.int32();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.macrosCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Content {
    return {
      libraryCount: isSet(object.libraryCount)
        ? globalThis.Number(object.libraryCount)
        : 0,
      libraryPlaylistCount: isSet(object.libraryPlaylistCount)
        ? globalThis.Number(object.libraryPlaylistCount)
        : 0,
      libraryPlaylistFolderCount: isSet(object.libraryPlaylistFolderCount)
        ? globalThis.Number(object.libraryPlaylistFolderCount)
        : 0,
      libraryPlaylistMaxDepth: isSet(object.libraryPlaylistMaxDepth)
        ? globalThis.Number(object.libraryPlaylistMaxDepth)
        : 0,
      mediaBinTotalPlaylistCount: isSet(object.mediaBinTotalPlaylistCount)
        ? globalThis.Number(object.mediaBinTotalPlaylistCount)
        : 0,
      mediaBinPlaylistFolderCount: isSet(object.mediaBinPlaylistFolderCount)
        ? globalThis.Number(object.mediaBinPlaylistFolderCount)
        : 0,
      mediaBinPlaylistMaxDepth: isSet(object.mediaBinPlaylistMaxDepth)
        ? globalThis.Number(object.mediaBinPlaylistMaxDepth)
        : 0,
      mediaBinNormalPlaylistCount: isSet(object.mediaBinNormalPlaylistCount)
        ? globalThis.Number(object.mediaBinNormalPlaylistCount)
        : 0,
      mediaBinSmartPlaylistCount: isSet(object.mediaBinSmartPlaylistCount)
        ? globalThis.Number(object.mediaBinSmartPlaylistCount)
        : 0,
      mediaBinVideoInputCount: isSet(object.mediaBinVideoInputCount)
        ? globalThis.Number(object.mediaBinVideoInputCount)
        : 0,
      audioBinPlaylistCount: isSet(object.audioBinPlaylistCount)
        ? globalThis.Number(object.audioBinPlaylistCount)
        : 0,
      audioBinPlaylistFolderCount: isSet(object.audioBinPlaylistFolderCount)
        ? globalThis.Number(object.audioBinPlaylistFolderCount)
        : 0,
      audioBinPlaylistMaxDepth: isSet(object.audioBinPlaylistMaxDepth)
        ? globalThis.Number(object.audioBinPlaylistMaxDepth)
        : 0,
      timerCount: isSet(object.timerCount)
        ? globalThis.Number(object.timerCount)
        : 0,
      messagesCount: isSet(object.messagesCount)
        ? globalThis.Number(object.messagesCount)
        : 0,
      propsCount: isSet(object.propsCount)
        ? globalThis.Number(object.propsCount)
        : 0,
      stageLayoutCount: isSet(object.stageLayoutCount)
        ? globalThis.Number(object.stageLayoutCount)
        : 0,
      macrosCount: isSet(object.macrosCount)
        ? globalThis.Number(object.macrosCount)
        : 0,
    };
  },

  toJSON(message: Startup_Content): unknown {
    const obj: any = {};
    if (message.libraryCount !== 0) {
      obj.libraryCount = Math.round(message.libraryCount);
    }
    if (message.libraryPlaylistCount !== 0) {
      obj.libraryPlaylistCount = Math.round(message.libraryPlaylistCount);
    }
    if (message.libraryPlaylistFolderCount !== 0) {
      obj.libraryPlaylistFolderCount = Math.round(
        message.libraryPlaylistFolderCount,
      );
    }
    if (message.libraryPlaylistMaxDepth !== 0) {
      obj.libraryPlaylistMaxDepth = Math.round(message.libraryPlaylistMaxDepth);
    }
    if (message.mediaBinTotalPlaylistCount !== 0) {
      obj.mediaBinTotalPlaylistCount = Math.round(
        message.mediaBinTotalPlaylistCount,
      );
    }
    if (message.mediaBinPlaylistFolderCount !== 0) {
      obj.mediaBinPlaylistFolderCount = Math.round(
        message.mediaBinPlaylistFolderCount,
      );
    }
    if (message.mediaBinPlaylistMaxDepth !== 0) {
      obj.mediaBinPlaylistMaxDepth = Math.round(
        message.mediaBinPlaylistMaxDepth,
      );
    }
    if (message.mediaBinNormalPlaylistCount !== 0) {
      obj.mediaBinNormalPlaylistCount = Math.round(
        message.mediaBinNormalPlaylistCount,
      );
    }
    if (message.mediaBinSmartPlaylistCount !== 0) {
      obj.mediaBinSmartPlaylistCount = Math.round(
        message.mediaBinSmartPlaylistCount,
      );
    }
    if (message.mediaBinVideoInputCount !== 0) {
      obj.mediaBinVideoInputCount = Math.round(message.mediaBinVideoInputCount);
    }
    if (message.audioBinPlaylistCount !== 0) {
      obj.audioBinPlaylistCount = Math.round(message.audioBinPlaylistCount);
    }
    if (message.audioBinPlaylistFolderCount !== 0) {
      obj.audioBinPlaylistFolderCount = Math.round(
        message.audioBinPlaylistFolderCount,
      );
    }
    if (message.audioBinPlaylistMaxDepth !== 0) {
      obj.audioBinPlaylistMaxDepth = Math.round(
        message.audioBinPlaylistMaxDepth,
      );
    }
    if (message.timerCount !== 0) {
      obj.timerCount = Math.round(message.timerCount);
    }
    if (message.messagesCount !== 0) {
      obj.messagesCount = Math.round(message.messagesCount);
    }
    if (message.propsCount !== 0) {
      obj.propsCount = Math.round(message.propsCount);
    }
    if (message.stageLayoutCount !== 0) {
      obj.stageLayoutCount = Math.round(message.stageLayoutCount);
    }
    if (message.macrosCount !== 0) {
      obj.macrosCount = Math.round(message.macrosCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Content>, I>>(
    base?: I,
  ): Startup_Content {
    return Startup_Content.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Content>, I>>(
    object: I,
  ): Startup_Content {
    const message = createBaseStartup_Content();
    message.libraryCount = object.libraryCount ?? 0;
    message.libraryPlaylistCount = object.libraryPlaylistCount ?? 0;
    message.libraryPlaylistFolderCount = object.libraryPlaylistFolderCount ?? 0;
    message.libraryPlaylistMaxDepth = object.libraryPlaylistMaxDepth ?? 0;
    message.mediaBinTotalPlaylistCount = object.mediaBinTotalPlaylistCount ?? 0;
    message.mediaBinPlaylistFolderCount =
      object.mediaBinPlaylistFolderCount ?? 0;
    message.mediaBinPlaylistMaxDepth = object.mediaBinPlaylistMaxDepth ?? 0;
    message.mediaBinNormalPlaylistCount =
      object.mediaBinNormalPlaylistCount ?? 0;
    message.mediaBinSmartPlaylistCount = object.mediaBinSmartPlaylistCount ?? 0;
    message.mediaBinVideoInputCount = object.mediaBinVideoInputCount ?? 0;
    message.audioBinPlaylistCount = object.audioBinPlaylistCount ?? 0;
    message.audioBinPlaylistFolderCount =
      object.audioBinPlaylistFolderCount ?? 0;
    message.audioBinPlaylistMaxDepth = object.audioBinPlaylistMaxDepth ?? 0;
    message.timerCount = object.timerCount ?? 0;
    message.messagesCount = object.messagesCount ?? 0;
    message.propsCount = object.propsCount ?? 0;
    message.stageLayoutCount = object.stageLayoutCount ?? 0;
    message.macrosCount = object.macrosCount ?? 0;
    return message;
  },
};

function createBaseStartup_Themes(): Startup_Themes {
  return {
    themeCount: 0,
    themeFolderCount: 0,
    themeFolderMaxDepth: 0,
    themeSlidesCount: 0,
  };
}

export const Startup_Themes = {
  encode(
    message: Startup_Themes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.themeCount !== 0) {
      writer.uint32(8).int32(message.themeCount);
    }
    if (message.themeFolderCount !== 0) {
      writer.uint32(16).int32(message.themeFolderCount);
    }
    if (message.themeFolderMaxDepth !== 0) {
      writer.uint32(24).int32(message.themeFolderMaxDepth);
    }
    if (message.themeSlidesCount !== 0) {
      writer.uint32(32).int32(message.themeSlidesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Themes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Themes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.themeCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.themeFolderCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.themeFolderMaxDepth = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.themeSlidesCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Themes {
    return {
      themeCount: isSet(object.themeCount)
        ? globalThis.Number(object.themeCount)
        : 0,
      themeFolderCount: isSet(object.themeFolderCount)
        ? globalThis.Number(object.themeFolderCount)
        : 0,
      themeFolderMaxDepth: isSet(object.themeFolderMaxDepth)
        ? globalThis.Number(object.themeFolderMaxDepth)
        : 0,
      themeSlidesCount: isSet(object.themeSlidesCount)
        ? globalThis.Number(object.themeSlidesCount)
        : 0,
    };
  },

  toJSON(message: Startup_Themes): unknown {
    const obj: any = {};
    if (message.themeCount !== 0) {
      obj.themeCount = Math.round(message.themeCount);
    }
    if (message.themeFolderCount !== 0) {
      obj.themeFolderCount = Math.round(message.themeFolderCount);
    }
    if (message.themeFolderMaxDepth !== 0) {
      obj.themeFolderMaxDepth = Math.round(message.themeFolderMaxDepth);
    }
    if (message.themeSlidesCount !== 0) {
      obj.themeSlidesCount = Math.round(message.themeSlidesCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Themes>, I>>(
    base?: I,
  ): Startup_Themes {
    return Startup_Themes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Themes>, I>>(
    object: I,
  ): Startup_Themes {
    const message = createBaseStartup_Themes();
    message.themeCount = object.themeCount ?? 0;
    message.themeFolderCount = object.themeFolderCount ?? 0;
    message.themeFolderMaxDepth = object.themeFolderMaxDepth ?? 0;
    message.themeSlidesCount = object.themeSlidesCount ?? 0;
    return message;
  },
};

function createBaseStartup_Macro(): Startup_Macro {
  return { triggerOnStartupCount: 0 };
}

export const Startup_Macro = {
  encode(
    message: Startup_Macro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerOnStartupCount !== 0) {
      writer.uint32(8).int32(message.triggerOnStartupCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Macro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.triggerOnStartupCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Macro {
    return {
      triggerOnStartupCount: isSet(object.triggerOnStartupCount)
        ? globalThis.Number(object.triggerOnStartupCount)
        : 0,
    };
  },

  toJSON(message: Startup_Macro): unknown {
    const obj: any = {};
    if (message.triggerOnStartupCount !== 0) {
      obj.triggerOnStartupCount = Math.round(message.triggerOnStartupCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Macro>, I>>(
    base?: I,
  ): Startup_Macro {
    return Startup_Macro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Macro>, I>>(
    object: I,
  ): Startup_Macro {
    const message = createBaseStartup_Macro();
    message.triggerOnStartupCount = object.triggerOnStartupCount ?? 0;
    return message;
  },
};

function createBaseStartup_ClearGroup(): Startup_ClearGroup {
  return {
    clearGroupCount: 0,
    hiddenClearGroupCount: 0,
    defaultIconCount: 0,
    customIconCount: 0,
    iconTintCount: 0,
  };
}

export const Startup_ClearGroup = {
  encode(
    message: Startup_ClearGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clearGroupCount !== 0) {
      writer.uint32(8).int32(message.clearGroupCount);
    }
    if (message.hiddenClearGroupCount !== 0) {
      writer.uint32(16).int32(message.hiddenClearGroupCount);
    }
    if (message.defaultIconCount !== 0) {
      writer.uint32(24).int32(message.defaultIconCount);
    }
    if (message.customIconCount !== 0) {
      writer.uint32(32).int32(message.customIconCount);
    }
    if (message.iconTintCount !== 0) {
      writer.uint32(40).int32(message.iconTintCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_ClearGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.clearGroupCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.hiddenClearGroupCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.defaultIconCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.customIconCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.iconTintCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_ClearGroup {
    return {
      clearGroupCount: isSet(object.clearGroupCount)
        ? globalThis.Number(object.clearGroupCount)
        : 0,
      hiddenClearGroupCount: isSet(object.hiddenClearGroupCount)
        ? globalThis.Number(object.hiddenClearGroupCount)
        : 0,
      defaultIconCount: isSet(object.defaultIconCount)
        ? globalThis.Number(object.defaultIconCount)
        : 0,
      customIconCount: isSet(object.customIconCount)
        ? globalThis.Number(object.customIconCount)
        : 0,
      iconTintCount: isSet(object.iconTintCount)
        ? globalThis.Number(object.iconTintCount)
        : 0,
    };
  },

  toJSON(message: Startup_ClearGroup): unknown {
    const obj: any = {};
    if (message.clearGroupCount !== 0) {
      obj.clearGroupCount = Math.round(message.clearGroupCount);
    }
    if (message.hiddenClearGroupCount !== 0) {
      obj.hiddenClearGroupCount = Math.round(message.hiddenClearGroupCount);
    }
    if (message.defaultIconCount !== 0) {
      obj.defaultIconCount = Math.round(message.defaultIconCount);
    }
    if (message.customIconCount !== 0) {
      obj.customIconCount = Math.round(message.customIconCount);
    }
    if (message.iconTintCount !== 0) {
      obj.iconTintCount = Math.round(message.iconTintCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_ClearGroup>, I>>(
    base?: I,
  ): Startup_ClearGroup {
    return Startup_ClearGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_ClearGroup>, I>>(
    object: I,
  ): Startup_ClearGroup {
    const message = createBaseStartup_ClearGroup();
    message.clearGroupCount = object.clearGroupCount ?? 0;
    message.hiddenClearGroupCount = object.hiddenClearGroupCount ?? 0;
    message.defaultIconCount = object.defaultIconCount ?? 0;
    message.customIconCount = object.customIconCount ?? 0;
    message.iconTintCount = object.iconTintCount ?? 0;
    return message;
  },
};

function createBaseStartup_KeyMapping(): Startup_KeyMapping {
  return {
    totalMapped: 0,
    clearGroups: 0,
    groups: 0,
    macros: 0,
    props: 0,
    menus: 0,
  };
}

export const Startup_KeyMapping = {
  encode(
    message: Startup_KeyMapping,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalMapped !== 0) {
      writer.uint32(8).int32(message.totalMapped);
    }
    if (message.clearGroups !== 0) {
      writer.uint32(16).int32(message.clearGroups);
    }
    if (message.groups !== 0) {
      writer.uint32(24).int32(message.groups);
    }
    if (message.macros !== 0) {
      writer.uint32(32).int32(message.macros);
    }
    if (message.props !== 0) {
      writer.uint32(40).int32(message.props);
    }
    if (message.menus !== 0) {
      writer.uint32(48).int32(message.menus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_KeyMapping {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_KeyMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalMapped = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.clearGroups = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.groups = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.macros = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.props = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.menus = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_KeyMapping {
    return {
      totalMapped: isSet(object.totalMapped)
        ? globalThis.Number(object.totalMapped)
        : 0,
      clearGroups: isSet(object.clearGroups)
        ? globalThis.Number(object.clearGroups)
        : 0,
      groups: isSet(object.groups) ? globalThis.Number(object.groups) : 0,
      macros: isSet(object.macros) ? globalThis.Number(object.macros) : 0,
      props: isSet(object.props) ? globalThis.Number(object.props) : 0,
      menus: isSet(object.menus) ? globalThis.Number(object.menus) : 0,
    };
  },

  toJSON(message: Startup_KeyMapping): unknown {
    const obj: any = {};
    if (message.totalMapped !== 0) {
      obj.totalMapped = Math.round(message.totalMapped);
    }
    if (message.clearGroups !== 0) {
      obj.clearGroups = Math.round(message.clearGroups);
    }
    if (message.groups !== 0) {
      obj.groups = Math.round(message.groups);
    }
    if (message.macros !== 0) {
      obj.macros = Math.round(message.macros);
    }
    if (message.props !== 0) {
      obj.props = Math.round(message.props);
    }
    if (message.menus !== 0) {
      obj.menus = Math.round(message.menus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_KeyMapping>, I>>(
    base?: I,
  ): Startup_KeyMapping {
    return Startup_KeyMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_KeyMapping>, I>>(
    object: I,
  ): Startup_KeyMapping {
    const message = createBaseStartup_KeyMapping();
    message.totalMapped = object.totalMapped ?? 0;
    message.clearGroups = object.clearGroups ?? 0;
    message.groups = object.groups ?? 0;
    message.macros = object.macros ?? 0;
    message.props = object.props ?? 0;
    message.menus = object.menus ?? 0;
    return message;
  },
};

function createBaseStartup_NetworkLink(): Startup_NetworkLink {
  return { enabled: false, memberCount: 0 };
}

export const Startup_NetworkLink = {
  encode(
    message: Startup_NetworkLink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.memberCount !== 0) {
      writer.uint32(16).uint32(message.memberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_NetworkLink {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_NetworkLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_NetworkLink {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
      memberCount: isSet(object.memberCount)
        ? globalThis.Number(object.memberCount)
        : 0,
    };
  },

  toJSON(message: Startup_NetworkLink): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.memberCount !== 0) {
      obj.memberCount = Math.round(message.memberCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_NetworkLink>, I>>(
    base?: I,
  ): Startup_NetworkLink {
    return Startup_NetworkLink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_NetworkLink>, I>>(
    object: I,
  ): Startup_NetworkLink {
    const message = createBaseStartup_NetworkLink();
    message.enabled = object.enabled ?? false;
    message.memberCount = object.memberCount ?? 0;
    return message;
  },
};

function createBaseStartup_Capture(): Startup_Capture {
  return {
    presetsCount: 0,
    diskPresetsCount: 0,
    rtmpPresetsCount: 0,
    resiPresetsCount: 0,
  };
}

export const Startup_Capture = {
  encode(
    message: Startup_Capture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presetsCount !== 0) {
      writer.uint32(8).int32(message.presetsCount);
    }
    if (message.diskPresetsCount !== 0) {
      writer.uint32(16).int32(message.diskPresetsCount);
    }
    if (message.rtmpPresetsCount !== 0) {
      writer.uint32(24).int32(message.rtmpPresetsCount);
    }
    if (message.resiPresetsCount !== 0) {
      writer.uint32(32).int32(message.resiPresetsCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Startup_Capture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartup_Capture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.presetsCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.diskPresetsCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rtmpPresetsCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.resiPresetsCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Startup_Capture {
    return {
      presetsCount: isSet(object.presetsCount)
        ? globalThis.Number(object.presetsCount)
        : 0,
      diskPresetsCount: isSet(object.diskPresetsCount)
        ? globalThis.Number(object.diskPresetsCount)
        : 0,
      rtmpPresetsCount: isSet(object.rtmpPresetsCount)
        ? globalThis.Number(object.rtmpPresetsCount)
        : 0,
      resiPresetsCount: isSet(object.resiPresetsCount)
        ? globalThis.Number(object.resiPresetsCount)
        : 0,
    };
  },

  toJSON(message: Startup_Capture): unknown {
    const obj: any = {};
    if (message.presetsCount !== 0) {
      obj.presetsCount = Math.round(message.presetsCount);
    }
    if (message.diskPresetsCount !== 0) {
      obj.diskPresetsCount = Math.round(message.diskPresetsCount);
    }
    if (message.rtmpPresetsCount !== 0) {
      obj.rtmpPresetsCount = Math.round(message.rtmpPresetsCount);
    }
    if (message.resiPresetsCount !== 0) {
      obj.resiPresetsCount = Math.round(message.resiPresetsCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Startup_Capture>, I>>(
    base?: I,
  ): Startup_Capture {
    return Startup_Capture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Startup_Capture>, I>>(
    object: I,
  ): Startup_Capture {
    const message = createBaseStartup_Capture();
    message.presetsCount = object.presetsCount ?? 0;
    message.diskPresetsCount = object.diskPresetsCount ?? 0;
    message.rtmpPresetsCount = object.rtmpPresetsCount ?? 0;
    message.resiPresetsCount = object.resiPresetsCount ?? 0;
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
