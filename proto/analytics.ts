/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { APIAnalytics } from "./proApiV1Analytics";

export const protobufPackage = "rv.data";

export interface Analytics {
}

export interface Analytics_Event {
  ui?: Analytics_UI | undefined;
  startup?: Analytics_Startup | undefined;
  trigger?: Analytics_Trigger | undefined;
  create?: Analytics_Create | undefined;
  import?: Analytics_Import | undefined;
  timeline?: Analytics_Timeline | undefined;
  sync?: Analytics_Sync | undefined;
  api?: APIAnalytics | undefined;
  timecode?: Analytics_Timecode | undefined;
  playbackMarker?: Analytics_PlaybackMarker | undefined;
  update?: Analytics_Update | undefined;
  whmStore?: Analytics_WHMStore | undefined;
  proContent?: Analytics_ProContent | undefined;
}

export interface Analytics_Timeline {
  triggerCue?: Analytics_Timeline_TriggerCue | undefined;
  action?: Analytics_Timeline_Action | undefined;
  recordCue?: Analytics_Timeline_RecordCue | undefined;
}

export interface Analytics_Timeline_TriggerCue {
  triggerType: Analytics_Timeline_TriggerCue_TriggerType;
  timingSource: Analytics_Timeline_TriggerCue_TimingSource;
}

export enum Analytics_Timeline_TriggerCue_TriggerType {
  TRIGGER_TYPE_SLIDE = 0,
  TRIGGER_TYPE_MEDIA = 1,
  TRIGGER_TYPE_AUDIO = 2,
  TRIGGER_TYPE_ACTION = 3,
  UNRECOGNIZED = -1,
}

export function analytics_Timeline_TriggerCue_TriggerTypeFromJSON(
  object: any,
): Analytics_Timeline_TriggerCue_TriggerType {
  switch (object) {
    case 0:
    case "TRIGGER_TYPE_SLIDE":
      return Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_SLIDE;
    case 1:
    case "TRIGGER_TYPE_MEDIA":
      return Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_MEDIA;
    case 2:
    case "TRIGGER_TYPE_AUDIO":
      return Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_AUDIO;
    case 3:
    case "TRIGGER_TYPE_ACTION":
      return Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_ACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Timeline_TriggerCue_TriggerType.UNRECOGNIZED;
  }
}

export function analytics_Timeline_TriggerCue_TriggerTypeToJSON(
  object: Analytics_Timeline_TriggerCue_TriggerType,
): string {
  switch (object) {
    case Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_SLIDE:
      return "TRIGGER_TYPE_SLIDE";
    case Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_MEDIA:
      return "TRIGGER_TYPE_MEDIA";
    case Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_AUDIO:
      return "TRIGGER_TYPE_AUDIO";
    case Analytics_Timeline_TriggerCue_TriggerType.TRIGGER_TYPE_ACTION:
      return "TRIGGER_TYPE_ACTION";
    case Analytics_Timeline_TriggerCue_TriggerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Timeline_TriggerCue_TimingSource {
  TIMING_SOURCE_INTERNAL = 0,
  TIMING_SOURCE_SMPTE = 1,
  UNRECOGNIZED = -1,
}

export function analytics_Timeline_TriggerCue_TimingSourceFromJSON(
  object: any,
): Analytics_Timeline_TriggerCue_TimingSource {
  switch (object) {
    case 0:
    case "TIMING_SOURCE_INTERNAL":
      return Analytics_Timeline_TriggerCue_TimingSource.TIMING_SOURCE_INTERNAL;
    case 1:
    case "TIMING_SOURCE_SMPTE":
      return Analytics_Timeline_TriggerCue_TimingSource.TIMING_SOURCE_SMPTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Timeline_TriggerCue_TimingSource.UNRECOGNIZED;
  }
}

export function analytics_Timeline_TriggerCue_TimingSourceToJSON(
  object: Analytics_Timeline_TriggerCue_TimingSource,
): string {
  switch (object) {
    case Analytics_Timeline_TriggerCue_TimingSource.TIMING_SOURCE_INTERNAL:
      return "TIMING_SOURCE_INTERNAL";
    case Analytics_Timeline_TriggerCue_TimingSource.TIMING_SOURCE_SMPTE:
      return "TIMING_SOURCE_SMPTE";
    case Analytics_Timeline_TriggerCue_TimingSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Timeline_Action {
  actionType: Analytics_Timeline_Action_ActionType;
}

export enum Analytics_Timeline_Action_ActionType {
  ACTION_TYPE_PLAY = 0,
  ACTION_TYPE_STOP = 1,
  ACTION_TYPE_RESET = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Timeline_Action_ActionTypeFromJSON(object: any): Analytics_Timeline_Action_ActionType {
  switch (object) {
    case 0:
    case "ACTION_TYPE_PLAY":
      return Analytics_Timeline_Action_ActionType.ACTION_TYPE_PLAY;
    case 1:
    case "ACTION_TYPE_STOP":
      return Analytics_Timeline_Action_ActionType.ACTION_TYPE_STOP;
    case 2:
    case "ACTION_TYPE_RESET":
      return Analytics_Timeline_Action_ActionType.ACTION_TYPE_RESET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Timeline_Action_ActionType.UNRECOGNIZED;
  }
}

export function analytics_Timeline_Action_ActionTypeToJSON(object: Analytics_Timeline_Action_ActionType): string {
  switch (object) {
    case Analytics_Timeline_Action_ActionType.ACTION_TYPE_PLAY:
      return "ACTION_TYPE_PLAY";
    case Analytics_Timeline_Action_ActionType.ACTION_TYPE_STOP:
      return "ACTION_TYPE_STOP";
    case Analytics_Timeline_Action_ActionType.ACTION_TYPE_RESET:
      return "ACTION_TYPE_RESET";
    case Analytics_Timeline_Action_ActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Timeline_RecordCue {
}

export interface Analytics_Timecode {
  startup?: Analytics_Timecode_Startup | undefined;
  activate?: Analytics_Timecode_Activate | undefined;
}

export interface Analytics_Timecode_Startup {
  isInputConfigured: boolean;
  isEnabled: boolean;
  isPlaylistSelected: boolean;
}

export interface Analytics_Timecode_Activate {
  playlistItemCount: number;
  cueCount: number;
  isStartup: boolean;
}

export interface Analytics_Sync {
  local?: Analytics_Sync_Local | undefined;
}

export interface Analytics_Sync_Local {
  syncType: Analytics_Sync_Local_SyncType;
  includeLibrary: boolean;
  includeMedia: boolean;
  includePlaylists: boolean;
  includeThemes: boolean;
  includeSupportFiles: boolean;
  replaceFiles: boolean;
}

export enum Analytics_Sync_Local_SyncType {
  SYNC_TYPE_UP = 0,
  SYNC_TYPE_DOWN = 1,
  UNRECOGNIZED = -1,
}

export function analytics_Sync_Local_SyncTypeFromJSON(object: any): Analytics_Sync_Local_SyncType {
  switch (object) {
    case 0:
    case "SYNC_TYPE_UP":
      return Analytics_Sync_Local_SyncType.SYNC_TYPE_UP;
    case 1:
    case "SYNC_TYPE_DOWN":
      return Analytics_Sync_Local_SyncType.SYNC_TYPE_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Sync_Local_SyncType.UNRECOGNIZED;
  }
}

export function analytics_Sync_Local_SyncTypeToJSON(object: Analytics_Sync_Local_SyncType): string {
  switch (object) {
    case Analytics_Sync_Local_SyncType.SYNC_TYPE_UP:
      return "SYNC_TYPE_UP";
    case Analytics_Sync_Local_SyncType.SYNC_TYPE_DOWN:
      return "SYNC_TYPE_DOWN";
    case Analytics_Sync_Local_SyncType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_MultiTracks {
}

export interface Analytics_MultiTracks_Account {
  chartPro: Analytics_MultiTracks_Account_Status;
  propresenterAddon: Analytics_MultiTracks_Account_Status;
}

export enum Analytics_MultiTracks_Account_Status {
  STATUS_DISABLED = 0,
  STATUS_CANCELLED = 1,
  STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_MultiTracks_Account_StatusFromJSON(object: any): Analytics_MultiTracks_Account_Status {
  switch (object) {
    case 0:
    case "STATUS_DISABLED":
      return Analytics_MultiTracks_Account_Status.STATUS_DISABLED;
    case 1:
    case "STATUS_CANCELLED":
      return Analytics_MultiTracks_Account_Status.STATUS_CANCELLED;
    case 2:
    case "STATUS_ACTIVE":
      return Analytics_MultiTracks_Account_Status.STATUS_ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_MultiTracks_Account_Status.UNRECOGNIZED;
  }
}

export function analytics_MultiTracks_Account_StatusToJSON(object: Analytics_MultiTracks_Account_Status): string {
  switch (object) {
    case Analytics_MultiTracks_Account_Status.STATUS_DISABLED:
      return "STATUS_DISABLED";
    case Analytics_MultiTracks_Account_Status.STATUS_CANCELLED:
      return "STATUS_CANCELLED";
    case Analytics_MultiTracks_Account_Status.STATUS_ACTIVE:
      return "STATUS_ACTIVE";
    case Analytics_MultiTracks_Account_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_MultiTracks_Startup {
  account: Analytics_MultiTracks_Account | undefined;
}

export interface Analytics_MultiTracks_Import {
  account: Analytics_MultiTracks_Account | undefined;
  chartsAutomation: boolean;
  lines: number;
}

export interface Analytics_TriggerMediaInformation {
  sourceType: Analytics_TriggerMediaInformation_SourceType;
  video?: Analytics_TriggerMediaInformation_Video | undefined;
  image?: Analytics_TriggerMediaInformation_Image | undefined;
  audio?: Analytics_TriggerMediaInformation_Audio | undefined;
  liveVideo?: Analytics_TriggerMediaInformation_LiveVideo | undefined;
}

export enum Analytics_TriggerMediaInformation_SourceType {
  SOURCE_TYPE_LOCAL = 0,
  SOURCE_TYPE_PROCONTENT = 1,
  UNRECOGNIZED = -1,
}

export function analytics_TriggerMediaInformation_SourceTypeFromJSON(
  object: any,
): Analytics_TriggerMediaInformation_SourceType {
  switch (object) {
    case 0:
    case "SOURCE_TYPE_LOCAL":
      return Analytics_TriggerMediaInformation_SourceType.SOURCE_TYPE_LOCAL;
    case 1:
    case "SOURCE_TYPE_PROCONTENT":
      return Analytics_TriggerMediaInformation_SourceType.SOURCE_TYPE_PROCONTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_TriggerMediaInformation_SourceType.UNRECOGNIZED;
  }
}

export function analytics_TriggerMediaInformation_SourceTypeToJSON(
  object: Analytics_TriggerMediaInformation_SourceType,
): string {
  switch (object) {
    case Analytics_TriggerMediaInformation_SourceType.SOURCE_TYPE_LOCAL:
      return "SOURCE_TYPE_LOCAL";
    case Analytics_TriggerMediaInformation_SourceType.SOURCE_TYPE_PROCONTENT:
      return "SOURCE_TYPE_PROCONTENT";
    case Analytics_TriggerMediaInformation_SourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_TriggerMediaInformation_Video {
  sourceDurationRange: Analytics_TriggerMediaInformation_Video_DurationRange;
  playbackMarkerCount: number;
  playbackBehavior: Analytics_TriggerMediaInformation_Video_PlaybackBehavior;
  scaleMode: Analytics_TriggerMediaInformation_Video_ScaleMode;
  hasInPoint: boolean;
  hasOutPoint: boolean;
  hasEffects: boolean;
  hasTransition: boolean;
  hasAudio: boolean;
}

export enum Analytics_TriggerMediaInformation_Video_DurationRange {
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

export function analytics_TriggerMediaInformation_Video_DurationRangeFromJSON(
  object: any,
): Analytics_TriggerMediaInformation_Video_DurationRange {
  switch (object) {
    case 0:
    case "DURATION_UNDER_10S":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_UNDER_10S;
    case 1:
    case "DURATION_10S_TO_30S":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_10S_TO_30S;
    case 2:
    case "DURATION_30S_TO_60S":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_30S_TO_60S;
    case 3:
    case "DURATION_1M_TO_5M":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_1M_TO_5M;
    case 4:
    case "DURATION_5M_TO_10M":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_5M_TO_10M;
    case 5:
    case "DURATION_10M_TO_30M":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_10M_TO_30M;
    case 6:
    case "DURATION_30M_TO_60M":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_30M_TO_60M;
    case 7:
    case "DURATION_1H_TO_2H":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_1H_TO_2H;
    case 8:
    case "DURATION_OVER_2H":
      return Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_OVER_2H;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_TriggerMediaInformation_Video_DurationRange.UNRECOGNIZED;
  }
}

export function analytics_TriggerMediaInformation_Video_DurationRangeToJSON(
  object: Analytics_TriggerMediaInformation_Video_DurationRange,
): string {
  switch (object) {
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_UNDER_10S:
      return "DURATION_UNDER_10S";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_10S_TO_30S:
      return "DURATION_10S_TO_30S";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_30S_TO_60S:
      return "DURATION_30S_TO_60S";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_1M_TO_5M:
      return "DURATION_1M_TO_5M";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_5M_TO_10M:
      return "DURATION_5M_TO_10M";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_10M_TO_30M:
      return "DURATION_10M_TO_30M";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_30M_TO_60M:
      return "DURATION_30M_TO_60M";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_1H_TO_2H:
      return "DURATION_1H_TO_2H";
    case Analytics_TriggerMediaInformation_Video_DurationRange.DURATION_OVER_2H:
      return "DURATION_OVER_2H";
    case Analytics_TriggerMediaInformation_Video_DurationRange.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_TriggerMediaInformation_Video_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  PLAYBACK_BEHAVIOR_SOFT_LOOP = 4,
  UNRECOGNIZED = -1,
}

export function analytics_TriggerMediaInformation_Video_PlaybackBehaviorFromJSON(
  object: any,
): Analytics_TriggerMediaInformation_Video_PlaybackBehavior {
  switch (object) {
    case 0:
    case "PLAYBACK_BEHAVIOR_STOP":
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case "PLAYBACK_BEHAVIOR_LOOP":
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT":
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT;
    case 3:
    case "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME":
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case 4:
    case "PLAYBACK_BEHAVIOR_SOFT_LOOP":
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_SOFT_LOOP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_TriggerMediaInformation_Video_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function analytics_TriggerMediaInformation_Video_PlaybackBehaviorToJSON(
  object: Analytics_TriggerMediaInformation_Video_PlaybackBehavior,
): string {
  switch (object) {
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return "PLAYBACK_BEHAVIOR_STOP";
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return "PLAYBACK_BEHAVIOR_LOOP";
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_PLAY_COUNT";
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return "PLAYBACK_BEHAVIOR_LOOP_FOR_TIME";
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.PLAYBACK_BEHAVIOR_SOFT_LOOP:
      return "PLAYBACK_BEHAVIOR_SOFT_LOOP";
    case Analytics_TriggerMediaInformation_Video_PlaybackBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_TriggerMediaInformation_Video_ScaleMode {
  SCALE_MODE_FIT = 0,
  SCALE_MODE_FILL = 1,
  SCALE_MODE_STRETCH = 2,
  UNRECOGNIZED = -1,
}

export function analytics_TriggerMediaInformation_Video_ScaleModeFromJSON(
  object: any,
): Analytics_TriggerMediaInformation_Video_ScaleMode {
  switch (object) {
    case 0:
    case "SCALE_MODE_FIT":
      return Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FIT;
    case 1:
    case "SCALE_MODE_FILL":
      return Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FILL;
    case 2:
    case "SCALE_MODE_STRETCH":
      return Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_STRETCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_TriggerMediaInformation_Video_ScaleMode.UNRECOGNIZED;
  }
}

export function analytics_TriggerMediaInformation_Video_ScaleModeToJSON(
  object: Analytics_TriggerMediaInformation_Video_ScaleMode,
): string {
  switch (object) {
    case Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FIT:
      return "SCALE_MODE_FIT";
    case Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_FILL:
      return "SCALE_MODE_FILL";
    case Analytics_TriggerMediaInformation_Video_ScaleMode.SCALE_MODE_STRETCH:
      return "SCALE_MODE_STRETCH";
    case Analytics_TriggerMediaInformation_Video_ScaleMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_TriggerMediaInformation_Audio {
}

export interface Analytics_TriggerMediaInformation_Image {
}

export interface Analytics_TriggerMediaInformation_LiveVideo {
}

export interface Analytics_PlaybackMarker {
  create?: Analytics_PlaybackMarker_CreateMarker | undefined;
}

export interface Analytics_PlaybackMarker_CreateMarker {
  location: Analytics_PlaybackMarker_CreateMarker_Location;
}

export enum Analytics_PlaybackMarker_CreateMarker_Location {
  LOCATION_INSPECTOR = 0,
  LOCATION_SIDEBAR = 1,
  UNRECOGNIZED = -1,
}

export function analytics_PlaybackMarker_CreateMarker_LocationFromJSON(
  object: any,
): Analytics_PlaybackMarker_CreateMarker_Location {
  switch (object) {
    case 0:
    case "LOCATION_INSPECTOR":
      return Analytics_PlaybackMarker_CreateMarker_Location.LOCATION_INSPECTOR;
    case 1:
    case "LOCATION_SIDEBAR":
      return Analytics_PlaybackMarker_CreateMarker_Location.LOCATION_SIDEBAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_PlaybackMarker_CreateMarker_Location.UNRECOGNIZED;
  }
}

export function analytics_PlaybackMarker_CreateMarker_LocationToJSON(
  object: Analytics_PlaybackMarker_CreateMarker_Location,
): string {
  switch (object) {
    case Analytics_PlaybackMarker_CreateMarker_Location.LOCATION_INSPECTOR:
      return "LOCATION_INSPECTOR";
    case Analytics_PlaybackMarker_CreateMarker_Location.LOCATION_SIDEBAR:
      return "LOCATION_SIDEBAR";
    case Analytics_PlaybackMarker_CreateMarker_Location.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI {
  quickSearch?: Analytics_UI_QuickSearch | undefined;
  toolbar?: Analytics_UI_Toolbar | undefined;
  mainView?: Analytics_UI_MainView | undefined;
  looks?: Analytics_UI_Looks | undefined;
  screenConfiguration?: Analytics_UI_ScreenConfiguration | undefined;
  lowerRight?: Analytics_UI_LowerRight | undefined;
  textInspector?: Analytics_UI_TextInspector | undefined;
  show?: Analytics_UI_Show | undefined;
  inAppStore?: Analytics_UI_InAppStore | undefined;
  editor?: Analytics_UI_Editor | undefined;
  whatsNew?: Analytics_UI_WhatsNew | undefined;
  clearGroups?: Analytics_UI_ClearGroups | undefined;
  previewArea?: Analytics_UI_PreviewArea | undefined;
  placeholder?: Analytics_UI_Placeholder | undefined;
  planningCenterLive?: Analytics_UI_PlanningCenterLive | undefined;
  networkGroup?: Analytics_UI_NetworkGroup | undefined;
  ccli?: Analytics_UI_CCLI | undefined;
}

export interface Analytics_UI_QuickSearch {
  shown?: Analytics_UI_QuickSearch_Shown | undefined;
  search?: Analytics_UI_QuickSearch_Search | undefined;
  openItems?: Analytics_UI_QuickSearch_OpenItems | undefined;
}

export interface Analytics_UI_QuickSearch_Shown {
  source: Analytics_UI_QuickSearch_Shown_Source;
}

export enum Analytics_UI_QuickSearch_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_TOOLBAR = 2,
  SOURCE_UNLINKED_HEADER = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_QuickSearch_Shown_SourceFromJSON(object: any): Analytics_UI_QuickSearch_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_QuickSearch_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_QuickSearch_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_QuickSearch_Shown_Source.SOURCE_TOOLBAR;
    case 3:
    case "SOURCE_UNLINKED_HEADER":
      return Analytics_UI_QuickSearch_Shown_Source.SOURCE_UNLINKED_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_QuickSearch_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_QuickSearch_Shown_SourceToJSON(object: Analytics_UI_QuickSearch_Shown_Source): string {
  switch (object) {
    case Analytics_UI_QuickSearch_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_QuickSearch_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_QuickSearch_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_QuickSearch_Shown_Source.SOURCE_UNLINKED_HEADER:
      return "SOURCE_UNLINKED_HEADER";
    case Analytics_UI_QuickSearch_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_QuickSearch_Search {
  source: Analytics_UI_QuickSearch_Search_Source;
}

export enum Analytics_UI_QuickSearch_Search_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_LIBRARY = 1,
  SOURCE_SONG_SELECT = 2,
  SOURCE_MULTI_TRACKS = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_QuickSearch_Search_SourceFromJSON(object: any): Analytics_UI_QuickSearch_Search_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_QuickSearch_Search_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_LIBRARY":
      return Analytics_UI_QuickSearch_Search_Source.SOURCE_LIBRARY;
    case 2:
    case "SOURCE_SONG_SELECT":
      return Analytics_UI_QuickSearch_Search_Source.SOURCE_SONG_SELECT;
    case 3:
    case "SOURCE_MULTI_TRACKS":
      return Analytics_UI_QuickSearch_Search_Source.SOURCE_MULTI_TRACKS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_QuickSearch_Search_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_QuickSearch_Search_SourceToJSON(object: Analytics_UI_QuickSearch_Search_Source): string {
  switch (object) {
    case Analytics_UI_QuickSearch_Search_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_QuickSearch_Search_Source.SOURCE_LIBRARY:
      return "SOURCE_LIBRARY";
    case Analytics_UI_QuickSearch_Search_Source.SOURCE_SONG_SELECT:
      return "SOURCE_SONG_SELECT";
    case Analytics_UI_QuickSearch_Search_Source.SOURCE_MULTI_TRACKS:
      return "SOURCE_MULTI_TRACKS";
    case Analytics_UI_QuickSearch_Search_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_QuickSearch_OpenItems {
  source: Analytics_UI_QuickSearch_OpenItems_Source;
  style: Analytics_UI_QuickSearch_OpenItems_Style;
  count: number;
}

export enum Analytics_UI_QuickSearch_OpenItems_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_LIBRARY = 1,
  SOURCE_SONG_SELECT = 2,
  SOURCE_MULTI_TRACKS = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_QuickSearch_OpenItems_SourceFromJSON(
  object: any,
): Analytics_UI_QuickSearch_OpenItems_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_LIBRARY":
      return Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_LIBRARY;
    case 2:
    case "SOURCE_SONG_SELECT":
      return Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_SONG_SELECT;
    case 3:
    case "SOURCE_MULTI_TRACKS":
      return Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_MULTI_TRACKS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_QuickSearch_OpenItems_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_QuickSearch_OpenItems_SourceToJSON(
  object: Analytics_UI_QuickSearch_OpenItems_Source,
): string {
  switch (object) {
    case Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_LIBRARY:
      return "SOURCE_LIBRARY";
    case Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_SONG_SELECT:
      return "SOURCE_SONG_SELECT";
    case Analytics_UI_QuickSearch_OpenItems_Source.SOURCE_MULTI_TRACKS:
      return "SOURCE_MULTI_TRACKS";
    case Analytics_UI_QuickSearch_OpenItems_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_UI_QuickSearch_OpenItems_Style {
  STYLE_UNKNOWN = 0,
  STYLE_RETURN_KEY = 1,
  STYLE_COMMAND_RETURN_KEY = 2,
  STYLE_DRAG_DROP = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_QuickSearch_OpenItems_StyleFromJSON(
  object: any,
): Analytics_UI_QuickSearch_OpenItems_Style {
  switch (object) {
    case 0:
    case "STYLE_UNKNOWN":
      return Analytics_UI_QuickSearch_OpenItems_Style.STYLE_UNKNOWN;
    case 1:
    case "STYLE_RETURN_KEY":
      return Analytics_UI_QuickSearch_OpenItems_Style.STYLE_RETURN_KEY;
    case 2:
    case "STYLE_COMMAND_RETURN_KEY":
      return Analytics_UI_QuickSearch_OpenItems_Style.STYLE_COMMAND_RETURN_KEY;
    case 3:
    case "STYLE_DRAG_DROP":
      return Analytics_UI_QuickSearch_OpenItems_Style.STYLE_DRAG_DROP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_QuickSearch_OpenItems_Style.UNRECOGNIZED;
  }
}

export function analytics_UI_QuickSearch_OpenItems_StyleToJSON(
  object: Analytics_UI_QuickSearch_OpenItems_Style,
): string {
  switch (object) {
    case Analytics_UI_QuickSearch_OpenItems_Style.STYLE_UNKNOWN:
      return "STYLE_UNKNOWN";
    case Analytics_UI_QuickSearch_OpenItems_Style.STYLE_RETURN_KEY:
      return "STYLE_RETURN_KEY";
    case Analytics_UI_QuickSearch_OpenItems_Style.STYLE_COMMAND_RETURN_KEY:
      return "STYLE_COMMAND_RETURN_KEY";
    case Analytics_UI_QuickSearch_OpenItems_Style.STYLE_DRAG_DROP:
      return "STYLE_DRAG_DROP";
    case Analytics_UI_QuickSearch_OpenItems_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Toolbar {
  textStyle?: Analytics_UI_Toolbar_TextStyle | undefined;
  theme?: Analytics_UI_Toolbar_Theme | undefined;
}

export interface Analytics_UI_Toolbar_TextStyle {
  shown?: Analytics_UI_Toolbar_TextStyle_Shown | undefined;
  change?: Analytics_UI_Toolbar_TextStyle_Change | undefined;
}

export interface Analytics_UI_Toolbar_TextStyle_Shown {
}

export interface Analytics_UI_Toolbar_TextStyle_Change {
  property: Analytics_UI_Toolbar_TextStyle_Change_Property;
  target: Analytics_UI_Toolbar_TextStyle_Change_Target;
}

export enum Analytics_UI_Toolbar_TextStyle_Change_Property {
  PROPERTY_UNKNOWN = 0,
  PROPERTY_FONT_TYPEFACE = 1,
  PROPERTY_FONT_WEIGHT = 2,
  PROPERTY_FONT_CAPITALIZATION = 3,
  PROPERTY_FONT_SIZE = 4,
  PROPERTY_FONT_COLOR = 5,
  PROPERTY_HORIZONTAL_ALIGNMENT = 6,
  PROPERTY_VERTICAL_ALIGNMENT = 7,
  PROPERTY_STROKE_ENABLE = 8,
  PROPERTY_STROKE_WIDTH = 9,
  PROPERTY_STROKE_COLOR = 10,
  PROPERTY_SHADOW_ENABLE = 11,
  PROPERTY_SHADOW_BLUR = 12,
  PROPERTY_SHADOW_OPACITY = 13,
  PROPERTY_SHADOW_COLOR = 14,
  PROPERTY_SHADOW_ANGLE = 15,
  PROPERTY_SHADOW_OFFSET = 16,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Toolbar_TextStyle_Change_PropertyFromJSON(
  object: any,
): Analytics_UI_Toolbar_TextStyle_Change_Property {
  switch (object) {
    case 0:
    case "PROPERTY_UNKNOWN":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_UNKNOWN;
    case 1:
    case "PROPERTY_FONT_TYPEFACE":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_TYPEFACE;
    case 2:
    case "PROPERTY_FONT_WEIGHT":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_WEIGHT;
    case 3:
    case "PROPERTY_FONT_CAPITALIZATION":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_CAPITALIZATION;
    case 4:
    case "PROPERTY_FONT_SIZE":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_SIZE;
    case 5:
    case "PROPERTY_FONT_COLOR":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_COLOR;
    case 6:
    case "PROPERTY_HORIZONTAL_ALIGNMENT":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_HORIZONTAL_ALIGNMENT;
    case 7:
    case "PROPERTY_VERTICAL_ALIGNMENT":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_VERTICAL_ALIGNMENT;
    case 8:
    case "PROPERTY_STROKE_ENABLE":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_ENABLE;
    case 9:
    case "PROPERTY_STROKE_WIDTH":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_WIDTH;
    case 10:
    case "PROPERTY_STROKE_COLOR":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_COLOR;
    case 11:
    case "PROPERTY_SHADOW_ENABLE":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ENABLE;
    case 12:
    case "PROPERTY_SHADOW_BLUR":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_BLUR;
    case 13:
    case "PROPERTY_SHADOW_OPACITY":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OPACITY;
    case 14:
    case "PROPERTY_SHADOW_COLOR":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_COLOR;
    case 15:
    case "PROPERTY_SHADOW_ANGLE":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ANGLE;
    case 16:
    case "PROPERTY_SHADOW_OFFSET":
      return Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OFFSET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Toolbar_TextStyle_Change_Property.UNRECOGNIZED;
  }
}

export function analytics_UI_Toolbar_TextStyle_Change_PropertyToJSON(
  object: Analytics_UI_Toolbar_TextStyle_Change_Property,
): string {
  switch (object) {
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_UNKNOWN:
      return "PROPERTY_UNKNOWN";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_TYPEFACE:
      return "PROPERTY_FONT_TYPEFACE";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_WEIGHT:
      return "PROPERTY_FONT_WEIGHT";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_CAPITALIZATION:
      return "PROPERTY_FONT_CAPITALIZATION";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_SIZE:
      return "PROPERTY_FONT_SIZE";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_COLOR:
      return "PROPERTY_FONT_COLOR";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_HORIZONTAL_ALIGNMENT:
      return "PROPERTY_HORIZONTAL_ALIGNMENT";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_VERTICAL_ALIGNMENT:
      return "PROPERTY_VERTICAL_ALIGNMENT";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_ENABLE:
      return "PROPERTY_STROKE_ENABLE";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_WIDTH:
      return "PROPERTY_STROKE_WIDTH";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_COLOR:
      return "PROPERTY_STROKE_COLOR";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ENABLE:
      return "PROPERTY_SHADOW_ENABLE";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_BLUR:
      return "PROPERTY_SHADOW_BLUR";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OPACITY:
      return "PROPERTY_SHADOW_OPACITY";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_COLOR:
      return "PROPERTY_SHADOW_COLOR";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ANGLE:
      return "PROPERTY_SHADOW_ANGLE";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OFFSET:
      return "PROPERTY_SHADOW_OFFSET";
    case Analytics_UI_Toolbar_TextStyle_Change_Property.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_UI_Toolbar_TextStyle_Change_Target {
  TARGET_UNKNOWN = 0,
  TARGET_SLIDE_SELECTION = 1,
  TARGET_PRESENTATION_SELECTION = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Toolbar_TextStyle_Change_TargetFromJSON(
  object: any,
): Analytics_UI_Toolbar_TextStyle_Change_Target {
  switch (object) {
    case 0:
    case "TARGET_UNKNOWN":
      return Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_UNKNOWN;
    case 1:
    case "TARGET_SLIDE_SELECTION":
      return Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_SLIDE_SELECTION;
    case 2:
    case "TARGET_PRESENTATION_SELECTION":
      return Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_PRESENTATION_SELECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Toolbar_TextStyle_Change_Target.UNRECOGNIZED;
  }
}

export function analytics_UI_Toolbar_TextStyle_Change_TargetToJSON(
  object: Analytics_UI_Toolbar_TextStyle_Change_Target,
): string {
  switch (object) {
    case Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_UNKNOWN:
      return "TARGET_UNKNOWN";
    case Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_SLIDE_SELECTION:
      return "TARGET_SLIDE_SELECTION";
    case Analytics_UI_Toolbar_TextStyle_Change_Target.TARGET_PRESENTATION_SELECTION:
      return "TARGET_PRESENTATION_SELECTION";
    case Analytics_UI_Toolbar_TextStyle_Change_Target.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Toolbar_Theme {
  shown?: Analytics_UI_Toolbar_Theme_Shown | undefined;
  applied?: Analytics_UI_Toolbar_Theme_Applied | undefined;
}

export interface Analytics_UI_Toolbar_Theme_Shown {
}

export interface Analytics_UI_Toolbar_Theme_Applied {
  target: Analytics_UI_Toolbar_Theme_Applied_Target;
}

export enum Analytics_UI_Toolbar_Theme_Applied_Target {
  TARGET_UNKNOWN = 0,
  TARGET_SLIDE_SELECTION = 1,
  TARGET_PRESENTATION_SELECTION = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Toolbar_Theme_Applied_TargetFromJSON(
  object: any,
): Analytics_UI_Toolbar_Theme_Applied_Target {
  switch (object) {
    case 0:
    case "TARGET_UNKNOWN":
      return Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_UNKNOWN;
    case 1:
    case "TARGET_SLIDE_SELECTION":
      return Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_SLIDE_SELECTION;
    case 2:
    case "TARGET_PRESENTATION_SELECTION":
      return Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_PRESENTATION_SELECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Toolbar_Theme_Applied_Target.UNRECOGNIZED;
  }
}

export function analytics_UI_Toolbar_Theme_Applied_TargetToJSON(
  object: Analytics_UI_Toolbar_Theme_Applied_Target,
): string {
  switch (object) {
    case Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_UNKNOWN:
      return "TARGET_UNKNOWN";
    case Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_SLIDE_SELECTION:
      return "TARGET_SLIDE_SELECTION";
    case Analytics_UI_Toolbar_Theme_Applied_Target.TARGET_PRESENTATION_SELECTION:
      return "TARGET_PRESENTATION_SELECTION";
    case Analytics_UI_Toolbar_Theme_Applied_Target.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView {
  show?: Analytics_UI_MainView_Show | undefined;
  presentationEditor?: Analytics_UI_MainView_PresentationEditor | undefined;
  reflowEditor?: Analytics_UI_MainView_ReflowEditor | undefined;
  bible?: Analytics_UI_MainView_Bible | undefined;
  stageEditor?: Analytics_UI_MainView_StageEditor | undefined;
  themeEditor?: Analytics_UI_MainView_ThemeEditor | undefined;
  copyrightEditor?: Analytics_UI_MainView_CopyrightEditor | undefined;
  propsEditor?: Analytics_UI_MainView_PropsEditor | undefined;
  maskEditor?: Analytics_UI_MainView_MaskEditor | undefined;
}

export interface Analytics_UI_MainView_Show {
  shown?: Analytics_UI_MainView_Show_Shown | undefined;
}

export interface Analytics_UI_MainView_Show_Shown {
  source: Analytics_UI_MainView_Show_Shown_Source;
}

export enum Analytics_UI_MainView_Show_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Show_Shown_SourceFromJSON(object: any): Analytics_UI_MainView_Show_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_Show_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_Show_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_MainView_Show_Shown_Source.SOURCE_APPLICATION_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Show_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Show_Shown_SourceToJSON(object: Analytics_UI_MainView_Show_Shown_Source): string {
  switch (object) {
    case Analytics_UI_MainView_Show_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_Show_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_Show_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_MainView_Show_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_PresentationEditor {
  shown?: Analytics_UI_MainView_PresentationEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_PresentationEditor_Shown {
  source: Analytics_UI_MainView_PresentationEditor_Shown_Source;
}

export enum Analytics_UI_MainView_PresentationEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_CONTEXT_MENU = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_PresentationEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_PresentationEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case "SOURCE_CONTEXT_MENU":
      return Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_CONTEXT_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_PresentationEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_PresentationEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_PresentationEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_MainView_PresentationEditor_Shown_Source.SOURCE_CONTEXT_MENU:
      return "SOURCE_CONTEXT_MENU";
    case Analytics_UI_MainView_PresentationEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_ReflowEditor {
  shown?: Analytics_UI_MainView_ReflowEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_ReflowEditor_Shown {
  source: Analytics_UI_MainView_ReflowEditor_Shown_Source;
}

export enum Analytics_UI_MainView_ReflowEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_LIBRARY_CONTEXT_MENU = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_ReflowEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_ReflowEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case "SOURCE_LIBRARY_CONTEXT_MENU":
      return Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_LIBRARY_CONTEXT_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_ReflowEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_ReflowEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_ReflowEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_MainView_ReflowEditor_Shown_Source.SOURCE_LIBRARY_CONTEXT_MENU:
      return "SOURCE_LIBRARY_CONTEXT_MENU";
    case Analytics_UI_MainView_ReflowEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible {
  shown?: Analytics_UI_MainView_Bible_Shown | undefined;
  trigger?: Analytics_UI_MainView_Bible_Trigger | undefined;
  generateSlides?: Analytics_UI_MainView_Bible_GenerateSlides | undefined;
  generateNext?: Analytics_UI_MainView_Bible_GenerateNext | undefined;
  generatePrevious?: Analytics_UI_MainView_Bible_GeneratePrevious | undefined;
  saveSlides?: Analytics_UI_MainView_Bible_SaveSlides | undefined;
  lookup?: Analytics_UI_MainView_Bible_Lookup | undefined;
  install?: Analytics_UI_MainView_Bible_BibleCount | undefined;
  remove?: Analytics_UI_MainView_Bible_BibleCount | undefined;
  startup?: Analytics_UI_MainView_Bible_BibleCount | undefined;
}

export enum Analytics_UI_MainView_Bible_Location {
  LOCATION_UNKNOWN = 0,
  LOCATION_PRESENTATION = 1,
  LOCATION_BIBLE_MODULE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_LocationFromJSON(object: any): Analytics_UI_MainView_Bible_Location {
  switch (object) {
    case 0:
    case "LOCATION_UNKNOWN":
      return Analytics_UI_MainView_Bible_Location.LOCATION_UNKNOWN;
    case 1:
    case "LOCATION_PRESENTATION":
      return Analytics_UI_MainView_Bible_Location.LOCATION_PRESENTATION;
    case 2:
    case "LOCATION_BIBLE_MODULE":
      return Analytics_UI_MainView_Bible_Location.LOCATION_BIBLE_MODULE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_Location.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_LocationToJSON(object: Analytics_UI_MainView_Bible_Location): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_Location.LOCATION_UNKNOWN:
      return "LOCATION_UNKNOWN";
    case Analytics_UI_MainView_Bible_Location.LOCATION_PRESENTATION:
      return "LOCATION_PRESENTATION";
    case Analytics_UI_MainView_Bible_Location.LOCATION_BIBLE_MODULE:
      return "LOCATION_BIBLE_MODULE";
    case Analytics_UI_MainView_Bible_Location.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible_Shown {
  source: Analytics_UI_MainView_Bible_Shown_Source;
}

export enum Analytics_UI_MainView_Bible_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_Bible_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_Bible_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_Bible_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_MainView_Bible_Shown_Source.SOURCE_APPLICATION_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_Shown_SourceToJSON(
  object: Analytics_UI_MainView_Bible_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_Bible_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_Bible_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_MainView_Bible_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible_Trigger {
  location: Analytics_UI_MainView_Bible_Location;
}

export interface Analytics_UI_MainView_Bible_GenerateSlides {
  translationCount: number;
  slideCount: number;
  verseLocation: Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation;
  referenceLocation: Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation;
  showVerseNumbers: boolean;
  breakNewVerse: boolean;
  displayTranslation: boolean;
  preserveFontColor: boolean;
  referenceStyle: Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType;
}

export enum Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation {
  TEXT_BOX_LOCATION_UNKNOWN = 0,
  TEXT_BOX_LOCATION_NONE = 1,
  TEXT_BOX_LOCATION_TEXT_BOX = 2,
  TEXT_BOX_LOCATION_WITH_VERSE = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(
  object: any,
): Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation {
  switch (object) {
    case 0:
    case "TEXT_BOX_LOCATION_UNKNOWN":
      return Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_UNKNOWN;
    case 1:
    case "TEXT_BOX_LOCATION_NONE":
      return Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_NONE;
    case 2:
    case "TEXT_BOX_LOCATION_TEXT_BOX":
      return Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_TEXT_BOX;
    case 3:
    case "TEXT_BOX_LOCATION_WITH_VERSE":
      return Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_WITH_VERSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(
  object: Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation,
): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_UNKNOWN:
      return "TEXT_BOX_LOCATION_UNKNOWN";
    case Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_NONE:
      return "TEXT_BOX_LOCATION_NONE";
    case Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_TEXT_BOX:
      return "TEXT_BOX_LOCATION_TEXT_BOX";
    case Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_WITH_VERSE:
      return "TEXT_BOX_LOCATION_WITH_VERSE";
    case Analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType {
  REFERENCE_TYPE_UNKNOWN = 0,
  REFERENCE_TYPE_PASSAGE_NONE = 1,
  REFERENCE_TYPE_PASSAGE_EACH = 2,
  REFERENCE_TYPE_PASSAGE_LAST = 3,
  REFERENCE_TYPE_VERSE = 4,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_GenerateSlides_ReferenceTypeFromJSON(
  object: any,
): Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType {
  switch (object) {
    case 0:
    case "REFERENCE_TYPE_UNKNOWN":
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_UNKNOWN;
    case 1:
    case "REFERENCE_TYPE_PASSAGE_NONE":
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_NONE;
    case 2:
    case "REFERENCE_TYPE_PASSAGE_EACH":
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_EACH;
    case 3:
    case "REFERENCE_TYPE_PASSAGE_LAST":
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_LAST;
    case 4:
    case "REFERENCE_TYPE_VERSE":
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_VERSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_GenerateSlides_ReferenceTypeToJSON(
  object: Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType,
): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_UNKNOWN:
      return "REFERENCE_TYPE_UNKNOWN";
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_NONE:
      return "REFERENCE_TYPE_PASSAGE_NONE";
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_EACH:
      return "REFERENCE_TYPE_PASSAGE_EACH";
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_LAST:
      return "REFERENCE_TYPE_PASSAGE_LAST";
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_VERSE:
      return "REFERENCE_TYPE_VERSE";
    case Analytics_UI_MainView_Bible_GenerateSlides_ReferenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible_GenerateNext {
  location: Analytics_UI_MainView_Bible_Location;
}

export interface Analytics_UI_MainView_Bible_GeneratePrevious {
  location: Analytics_UI_MainView_Bible_Location;
}

export interface Analytics_UI_MainView_Bible_SaveSlides {
  destination: Analytics_UI_MainView_Bible_SaveSlides_SlideDestination;
}

export enum Analytics_UI_MainView_Bible_SaveSlides_SlideDestination {
  SLIDE_DESTINATION_UNKNOWN = 0,
  SLIDE_DESTINATION_SAVE_TO_LIBRARY = 1,
  SLIDE_DESTINATION_SAVE_TO_PLAYLIST = 2,
  SLIDE_DESTINATION_COPY_TO_PRESENTATION = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_SaveSlides_SlideDestinationFromJSON(
  object: any,
): Analytics_UI_MainView_Bible_SaveSlides_SlideDestination {
  switch (object) {
    case 0:
    case "SLIDE_DESTINATION_UNKNOWN":
      return Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_UNKNOWN;
    case 1:
    case "SLIDE_DESTINATION_SAVE_TO_LIBRARY":
      return Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_LIBRARY;
    case 2:
    case "SLIDE_DESTINATION_SAVE_TO_PLAYLIST":
      return Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_PLAYLIST;
    case 3:
    case "SLIDE_DESTINATION_COPY_TO_PRESENTATION":
      return Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_COPY_TO_PRESENTATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_SaveSlides_SlideDestinationToJSON(
  object: Analytics_UI_MainView_Bible_SaveSlides_SlideDestination,
): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_UNKNOWN:
      return "SLIDE_DESTINATION_UNKNOWN";
    case Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_LIBRARY:
      return "SLIDE_DESTINATION_SAVE_TO_LIBRARY";
    case Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_PLAYLIST:
      return "SLIDE_DESTINATION_SAVE_TO_PLAYLIST";
    case Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_COPY_TO_PRESENTATION:
      return "SLIDE_DESTINATION_COPY_TO_PRESENTATION";
    case Analytics_UI_MainView_Bible_SaveSlides_SlideDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible_Lookup {
  location: Analytics_UI_MainView_Bible_Lookup_LookupLocation;
}

export enum Analytics_UI_MainView_Bible_Lookup_LookupLocation {
  LOOKUP_LOCATION_UNKNOWN = 0,
  LOOKUP_LOCATION_TEXT_REFERENCE = 1,
  LOOKUP_LOCATION_MENU_BOOK = 2,
  LOOKUP_LOCATION_MENU_CHAPTER = 3,
  LOOKUP_LOCATION_MENU_VERSE = 4,
  LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER = 5,
  LOOKUP_LOCATION_TEXT_SEARCH_VERSE = 6,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_Bible_Lookup_LookupLocationFromJSON(
  object: any,
): Analytics_UI_MainView_Bible_Lookup_LookupLocation {
  switch (object) {
    case 0:
    case "LOOKUP_LOCATION_UNKNOWN":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_UNKNOWN;
    case 1:
    case "LOOKUP_LOCATION_TEXT_REFERENCE":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_REFERENCE;
    case 2:
    case "LOOKUP_LOCATION_MENU_BOOK":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_BOOK;
    case 3:
    case "LOOKUP_LOCATION_MENU_CHAPTER":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_CHAPTER;
    case 4:
    case "LOOKUP_LOCATION_MENU_VERSE":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_VERSE;
    case 5:
    case "LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER;
    case 6:
    case "LOOKUP_LOCATION_TEXT_SEARCH_VERSE":
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_VERSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_Bible_Lookup_LookupLocation.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_Bible_Lookup_LookupLocationToJSON(
  object: Analytics_UI_MainView_Bible_Lookup_LookupLocation,
): string {
  switch (object) {
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_UNKNOWN:
      return "LOOKUP_LOCATION_UNKNOWN";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_REFERENCE:
      return "LOOKUP_LOCATION_TEXT_REFERENCE";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_BOOK:
      return "LOOKUP_LOCATION_MENU_BOOK";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_CHAPTER:
      return "LOOKUP_LOCATION_MENU_CHAPTER";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_VERSE:
      return "LOOKUP_LOCATION_MENU_VERSE";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER:
      return "LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_VERSE:
      return "LOOKUP_LOCATION_TEXT_SEARCH_VERSE";
    case Analytics_UI_MainView_Bible_Lookup_LookupLocation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_Bible_BibleCount {
  freeInstalledCount: number;
  purchasedInstalledCount: number;
}

export interface Analytics_UI_MainView_StageEditor {
  shown?: Analytics_UI_MainView_StageEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_StageEditor_Shown {
  source: Analytics_UI_MainView_StageEditor_Shown_Source;
}

export enum Analytics_UI_MainView_StageEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_LOWER_RIGHT = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_StageEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_StageEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case "SOURCE_LOWER_RIGHT":
      return Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_LOWER_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_StageEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_StageEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_StageEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_MainView_StageEditor_Shown_Source.SOURCE_LOWER_RIGHT:
      return "SOURCE_LOWER_RIGHT";
    case Analytics_UI_MainView_StageEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_ThemeEditor {
  shown?: Analytics_UI_MainView_ThemeEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_ThemeEditor_Shown {
  source: Analytics_UI_MainView_ThemeEditor_Shown_Source;
}

export enum Analytics_UI_MainView_ThemeEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_THEME_CONTEXT_MENU = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_ThemeEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_ThemeEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_THEME_CONTEXT_MENU":
      return Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_THEME_CONTEXT_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_ThemeEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_ThemeEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_ThemeEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_ThemeEditor_Shown_Source.SOURCE_THEME_CONTEXT_MENU:
      return "SOURCE_THEME_CONTEXT_MENU";
    case Analytics_UI_MainView_ThemeEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_CopyrightEditor {
  shown?: Analytics_UI_MainView_CopyrightEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_CopyrightEditor_Shown {
  source: Analytics_UI_MainView_CopyrightEditor_Shown_Source;
}

export enum Analytics_UI_MainView_CopyrightEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_PREFERENCE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_CopyrightEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_CopyrightEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_PREFERENCE":
      return Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_PREFERENCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_CopyrightEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_CopyrightEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_CopyrightEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_CopyrightEditor_Shown_Source.SOURCE_PREFERENCE:
      return "SOURCE_PREFERENCE";
    case Analytics_UI_MainView_CopyrightEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_PropsEditor {
  shown?: Analytics_UI_MainView_PropsEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_PropsEditor_Shown {
  source: Analytics_UI_MainView_PropsEditor_Shown_Source;
}

export enum Analytics_UI_MainView_PropsEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_LOWER_RIGHT = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_PropsEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_PropsEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_LOWER_RIGHT":
      return Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_LOWER_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_PropsEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_PropsEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_PropsEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_PropsEditor_Shown_Source.SOURCE_LOWER_RIGHT:
      return "SOURCE_LOWER_RIGHT";
    case Analytics_UI_MainView_PropsEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_MainView_MaskEditor {
  shown?: Analytics_UI_MainView_MaskEditor_Shown | undefined;
}

export interface Analytics_UI_MainView_MaskEditor_Shown {
  source: Analytics_UI_MainView_MaskEditor_Shown_Source;
}

export enum Analytics_UI_MainView_MaskEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_LOOKS_WINDOW = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_MainView_MaskEditor_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_MainView_MaskEditor_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_TOOLBAR":
      return Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case "SOURCE_LOOKS_WINDOW":
      return Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_LOOKS_WINDOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_MainView_MaskEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_MainView_MaskEditor_Shown_SourceToJSON(
  object: Analytics_UI_MainView_MaskEditor_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_TOOLBAR:
      return "SOURCE_TOOLBAR";
    case Analytics_UI_MainView_MaskEditor_Shown_Source.SOURCE_LOOKS_WINDOW:
      return "SOURCE_LOOKS_WINDOW";
    case Analytics_UI_MainView_MaskEditor_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Looks {
  shown?: Analytics_UI_Looks_Shown | undefined;
}

export interface Analytics_UI_Looks_Shown {
  source: Analytics_UI_Looks_Shown_Source;
}

export enum Analytics_UI_Looks_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_PRESENTATION_VIEW = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Looks_Shown_SourceFromJSON(object: any): Analytics_UI_Looks_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_Looks_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_Looks_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_PRESENTATION_VIEW":
      return Analytics_UI_Looks_Shown_Source.SOURCE_PRESENTATION_VIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Looks_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_Looks_Shown_SourceToJSON(object: Analytics_UI_Looks_Shown_Source): string {
  switch (object) {
    case Analytics_UI_Looks_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_Looks_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_Looks_Shown_Source.SOURCE_PRESENTATION_VIEW:
      return "SOURCE_PRESENTATION_VIEW";
    case Analytics_UI_Looks_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_ScreenConfiguration {
  shown?: Analytics_UI_ScreenConfiguration_Shown | undefined;
}

export interface Analytics_UI_ScreenConfiguration_Shown {
  source: Analytics_UI_ScreenConfiguration_Shown_Source;
}

export enum Analytics_UI_ScreenConfiguration_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_ScreenConfiguration_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_ScreenConfiguration_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_STAGE":
      return Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_STAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_ScreenConfiguration_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_ScreenConfiguration_Shown_SourceToJSON(
  object: Analytics_UI_ScreenConfiguration_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_ScreenConfiguration_Shown_Source.SOURCE_STAGE:
      return "SOURCE_STAGE";
    case Analytics_UI_ScreenConfiguration_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight {
  timers?: Analytics_UI_LowerRight_Timers | undefined;
  messages?: Analytics_UI_LowerRight_Messages | undefined;
  props?: Analytics_UI_LowerRight_Props | undefined;
  stage?: Analytics_UI_LowerRight_Stage | undefined;
  audioBin?: Analytics_UI_LowerRight_AudioBin | undefined;
  macros?: Analytics_UI_LowerRight_Macros | undefined;
}

export interface Analytics_UI_LowerRight_Timers {
  shown?: Analytics_UI_LowerRight_Timers_Shown | undefined;
  collapse?: Analytics_UI_LowerRight_Timers_Collapse | undefined;
  edit?: Analytics_UI_LowerRight_Timers_Edit | undefined;
  state?: Analytics_UI_LowerRight_Timers_State | undefined;
  create?: Analytics_UI_LowerRight_Timers_Create | undefined;
  delete?: Analytics_UI_LowerRight_Timers_Delete | undefined;
}

export interface Analytics_UI_LowerRight_Timers_Shown {
}

export interface Analytics_UI_LowerRight_Timers_Collapse {
  state: Analytics_UI_LowerRight_Timers_Collapse_State;
}

export enum Analytics_UI_LowerRight_Timers_Collapse_State {
  STATE_UNKNOWN = 0,
  STATE_COLLAPSED = 1,
  STATE_EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Timers_Collapse_StateFromJSON(
  object: any,
): Analytics_UI_LowerRight_Timers_Collapse_State {
  switch (object) {
    case 0:
    case "STATE_UNKNOWN":
      return Analytics_UI_LowerRight_Timers_Collapse_State.STATE_UNKNOWN;
    case 1:
    case "STATE_COLLAPSED":
      return Analytics_UI_LowerRight_Timers_Collapse_State.STATE_COLLAPSED;
    case 2:
    case "STATE_EXPANDED":
      return Analytics_UI_LowerRight_Timers_Collapse_State.STATE_EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Timers_Collapse_State.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Timers_Collapse_StateToJSON(
  object: Analytics_UI_LowerRight_Timers_Collapse_State,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Timers_Collapse_State.STATE_UNKNOWN:
      return "STATE_UNKNOWN";
    case Analytics_UI_LowerRight_Timers_Collapse_State.STATE_COLLAPSED:
      return "STATE_COLLAPSED";
    case Analytics_UI_LowerRight_Timers_Collapse_State.STATE_EXPANDED:
      return "STATE_EXPANDED";
    case Analytics_UI_LowerRight_Timers_Collapse_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Timers_Edit {
  field: Analytics_UI_LowerRight_Timers_Edit_Field;
}

export enum Analytics_UI_LowerRight_Timers_Edit_Field {
  FIELD_UNKNOWN = 0,
  FIELD_TYPE = 1,
  FIELD_VALUE = 2,
  FIELD_OVERRUN = 3,
  FIELD_NAME = 4,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Timers_Edit_FieldFromJSON(
  object: any,
): Analytics_UI_LowerRight_Timers_Edit_Field {
  switch (object) {
    case 0:
    case "FIELD_UNKNOWN":
      return Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_UNKNOWN;
    case 1:
    case "FIELD_TYPE":
      return Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_TYPE;
    case 2:
    case "FIELD_VALUE":
      return Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_VALUE;
    case 3:
    case "FIELD_OVERRUN":
      return Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_OVERRUN;
    case 4:
    case "FIELD_NAME":
      return Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_NAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Timers_Edit_Field.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Timers_Edit_FieldToJSON(
  object: Analytics_UI_LowerRight_Timers_Edit_Field,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_UNKNOWN:
      return "FIELD_UNKNOWN";
    case Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_TYPE:
      return "FIELD_TYPE";
    case Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_VALUE:
      return "FIELD_VALUE";
    case Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_OVERRUN:
      return "FIELD_OVERRUN";
    case Analytics_UI_LowerRight_Timers_Edit_Field.FIELD_NAME:
      return "FIELD_NAME";
    case Analytics_UI_LowerRight_Timers_Edit_Field.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Timers_State {
  state: Analytics_UI_LowerRight_Timers_State_State;
}

export enum Analytics_UI_LowerRight_Timers_State_State {
  STATE_UNKNOWN = 0,
  STATE_START = 1,
  STATE_STOP = 2,
  STATE_RESET = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Timers_State_StateFromJSON(
  object: any,
): Analytics_UI_LowerRight_Timers_State_State {
  switch (object) {
    case 0:
    case "STATE_UNKNOWN":
      return Analytics_UI_LowerRight_Timers_State_State.STATE_UNKNOWN;
    case 1:
    case "STATE_START":
      return Analytics_UI_LowerRight_Timers_State_State.STATE_START;
    case 2:
    case "STATE_STOP":
      return Analytics_UI_LowerRight_Timers_State_State.STATE_STOP;
    case 3:
    case "STATE_RESET":
      return Analytics_UI_LowerRight_Timers_State_State.STATE_RESET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Timers_State_State.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Timers_State_StateToJSON(
  object: Analytics_UI_LowerRight_Timers_State_State,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Timers_State_State.STATE_UNKNOWN:
      return "STATE_UNKNOWN";
    case Analytics_UI_LowerRight_Timers_State_State.STATE_START:
      return "STATE_START";
    case Analytics_UI_LowerRight_Timers_State_State.STATE_STOP:
      return "STATE_STOP";
    case Analytics_UI_LowerRight_Timers_State_State.STATE_RESET:
      return "STATE_RESET";
    case Analytics_UI_LowerRight_Timers_State_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Timers_Create {
}

export interface Analytics_UI_LowerRight_Timers_Delete {
}

export interface Analytics_UI_LowerRight_Messages {
  shown?: Analytics_UI_LowerRight_Messages_Shown | undefined;
  edit?: Analytics_UI_LowerRight_Messages_Edit | undefined;
  state?: Analytics_UI_LowerRight_Messages_State | undefined;
  create?: Analytics_UI_LowerRight_Messages_Create | undefined;
  delete?: Analytics_UI_LowerRight_Messages_Delete | undefined;
}

export interface Analytics_UI_LowerRight_Messages_Shown {
}

export interface Analytics_UI_LowerRight_Messages_Edit {
  action: Analytics_UI_LowerRight_Messages_Edit_Action;
}

export enum Analytics_UI_LowerRight_Messages_Edit_Action {
  ACTION_UNKNOWN = 0,
  ACTION_ADD_TEXT_TOKEN = 1,
  ACTION_ADD_TIMER_TOKEN = 2,
  ACTION_ADD_CUSTOM_TOKEN = 3,
  ACTION_SET_THEME = 4,
  ACTION_SET_TEXT = 5,
  ACTION_SET_WEB_NOTIFICATION = 6,
  ACTION_SET_DISMISS_BEHAVIOR = 7,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Messages_Edit_ActionFromJSON(
  object: any,
): Analytics_UI_LowerRight_Messages_Edit_Action {
  switch (object) {
    case 0:
    case "ACTION_UNKNOWN":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_UNKNOWN;
    case 1:
    case "ACTION_ADD_TEXT_TOKEN":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TEXT_TOKEN;
    case 2:
    case "ACTION_ADD_TIMER_TOKEN":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TIMER_TOKEN;
    case 3:
    case "ACTION_ADD_CUSTOM_TOKEN":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_CUSTOM_TOKEN;
    case 4:
    case "ACTION_SET_THEME":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_THEME;
    case 5:
    case "ACTION_SET_TEXT":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_TEXT;
    case 6:
    case "ACTION_SET_WEB_NOTIFICATION":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_WEB_NOTIFICATION;
    case 7:
    case "ACTION_SET_DISMISS_BEHAVIOR":
      return Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_DISMISS_BEHAVIOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Messages_Edit_Action.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Messages_Edit_ActionToJSON(
  object: Analytics_UI_LowerRight_Messages_Edit_Action,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_UNKNOWN:
      return "ACTION_UNKNOWN";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TEXT_TOKEN:
      return "ACTION_ADD_TEXT_TOKEN";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TIMER_TOKEN:
      return "ACTION_ADD_TIMER_TOKEN";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_ADD_CUSTOM_TOKEN:
      return "ACTION_ADD_CUSTOM_TOKEN";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_THEME:
      return "ACTION_SET_THEME";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_TEXT:
      return "ACTION_SET_TEXT";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_WEB_NOTIFICATION:
      return "ACTION_SET_WEB_NOTIFICATION";
    case Analytics_UI_LowerRight_Messages_Edit_Action.ACTION_SET_DISMISS_BEHAVIOR:
      return "ACTION_SET_DISMISS_BEHAVIOR";
    case Analytics_UI_LowerRight_Messages_Edit_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Messages_State {
  state: Analytics_UI_LowerRight_Messages_State_State;
}

export enum Analytics_UI_LowerRight_Messages_State_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Messages_State_StateFromJSON(
  object: any,
): Analytics_UI_LowerRight_Messages_State_State {
  switch (object) {
    case 0:
    case "STATE_UNKNOWN":
      return Analytics_UI_LowerRight_Messages_State_State.STATE_UNKNOWN;
    case 1:
    case "STATE_SHOW":
      return Analytics_UI_LowerRight_Messages_State_State.STATE_SHOW;
    case 2:
    case "STATE_CLEAR":
      return Analytics_UI_LowerRight_Messages_State_State.STATE_CLEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Messages_State_State.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Messages_State_StateToJSON(
  object: Analytics_UI_LowerRight_Messages_State_State,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Messages_State_State.STATE_UNKNOWN:
      return "STATE_UNKNOWN";
    case Analytics_UI_LowerRight_Messages_State_State.STATE_SHOW:
      return "STATE_SHOW";
    case Analytics_UI_LowerRight_Messages_State_State.STATE_CLEAR:
      return "STATE_CLEAR";
    case Analytics_UI_LowerRight_Messages_State_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Messages_Create {
}

export interface Analytics_UI_LowerRight_Messages_Delete {
}

export interface Analytics_UI_LowerRight_Props {
  shown?: Analytics_UI_LowerRight_Props_Shown | undefined;
  transition?: Analytics_UI_LowerRight_Props_Transition | undefined;
  state?: Analytics_UI_LowerRight_Props_State | undefined;
  create?: Analytics_UI_LowerRight_Props_Create | undefined;
  delete?: Analytics_UI_LowerRight_Props_Delete | undefined;
}

export interface Analytics_UI_LowerRight_Props_Shown {
}

export interface Analytics_UI_LowerRight_Props_Transition {
}

export interface Analytics_UI_LowerRight_Props_State {
  state: Analytics_UI_LowerRight_Props_State_State;
}

export enum Analytics_UI_LowerRight_Props_State_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Props_State_StateFromJSON(
  object: any,
): Analytics_UI_LowerRight_Props_State_State {
  switch (object) {
    case 0:
    case "STATE_UNKNOWN":
      return Analytics_UI_LowerRight_Props_State_State.STATE_UNKNOWN;
    case 1:
    case "STATE_SHOW":
      return Analytics_UI_LowerRight_Props_State_State.STATE_SHOW;
    case 2:
    case "STATE_CLEAR":
      return Analytics_UI_LowerRight_Props_State_State.STATE_CLEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Props_State_State.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Props_State_StateToJSON(
  object: Analytics_UI_LowerRight_Props_State_State,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Props_State_State.STATE_UNKNOWN:
      return "STATE_UNKNOWN";
    case Analytics_UI_LowerRight_Props_State_State.STATE_SHOW:
      return "STATE_SHOW";
    case Analytics_UI_LowerRight_Props_State_State.STATE_CLEAR:
      return "STATE_CLEAR";
    case Analytics_UI_LowerRight_Props_State_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Props_Create {
}

export interface Analytics_UI_LowerRight_Props_Delete {
}

export interface Analytics_UI_LowerRight_Stage {
  shown?: Analytics_UI_LowerRight_Stage_Shown | undefined;
  changeLayout?: Analytics_UI_LowerRight_Stage_ChangeLayout | undefined;
  messageState?: Analytics_UI_LowerRight_Stage_MessageState | undefined;
  configureScreens?: Analytics_UI_LowerRight_Stage_ConfigureScreens | undefined;
  editLayouts?: Analytics_UI_LowerRight_Stage_EditLayouts | undefined;
}

export interface Analytics_UI_LowerRight_Stage_Shown {
}

export interface Analytics_UI_LowerRight_Stage_ChangeLayout {
}

export interface Analytics_UI_LowerRight_Stage_MessageState {
  state: Analytics_UI_LowerRight_Stage_MessageState_State;
}

export enum Analytics_UI_LowerRight_Stage_MessageState_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_LowerRight_Stage_MessageState_StateFromJSON(
  object: any,
): Analytics_UI_LowerRight_Stage_MessageState_State {
  switch (object) {
    case 0:
    case "STATE_UNKNOWN":
      return Analytics_UI_LowerRight_Stage_MessageState_State.STATE_UNKNOWN;
    case 1:
    case "STATE_SHOW":
      return Analytics_UI_LowerRight_Stage_MessageState_State.STATE_SHOW;
    case 2:
    case "STATE_CLEAR":
      return Analytics_UI_LowerRight_Stage_MessageState_State.STATE_CLEAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_LowerRight_Stage_MessageState_State.UNRECOGNIZED;
  }
}

export function analytics_UI_LowerRight_Stage_MessageState_StateToJSON(
  object: Analytics_UI_LowerRight_Stage_MessageState_State,
): string {
  switch (object) {
    case Analytics_UI_LowerRight_Stage_MessageState_State.STATE_UNKNOWN:
      return "STATE_UNKNOWN";
    case Analytics_UI_LowerRight_Stage_MessageState_State.STATE_SHOW:
      return "STATE_SHOW";
    case Analytics_UI_LowerRight_Stage_MessageState_State.STATE_CLEAR:
      return "STATE_CLEAR";
    case Analytics_UI_LowerRight_Stage_MessageState_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_LowerRight_Stage_ConfigureScreens {
}

export interface Analytics_UI_LowerRight_Stage_EditLayouts {
}

export interface Analytics_UI_LowerRight_AudioBin {
}

export interface Analytics_UI_LowerRight_Macros {
  shown?: Analytics_UI_LowerRight_Macros_Shown | undefined;
  trigger?: Analytics_UI_LowerRight_Macros_Trigger | undefined;
  create?: Analytics_UI_LowerRight_Macros_Create | undefined;
  delete?: Analytics_UI_LowerRight_Macros_Delete | undefined;
}

export interface Analytics_UI_LowerRight_Macros_Shown {
}

export interface Analytics_UI_LowerRight_Macros_Trigger {
}

export interface Analytics_UI_LowerRight_Macros_Create {
}

export interface Analytics_UI_LowerRight_Macros_Delete {
}

export interface Analytics_UI_TextInspector {
  shown?: Analytics_UI_TextInspector_Shown | undefined;
  foreground?: Analytics_UI_TextInspector_Foreground | undefined;
  underlineColor?: Analytics_UI_TextInspector_UnderlineColor | undefined;
  backgroundColor?: Analytics_UI_TextInspector_BackgroundColor | undefined;
  scrollingText?: Analytics_UI_TextInspector_ScrollingText | undefined;
  lineTransform?: Analytics_UI_TextInspector_LineTransform | undefined;
}

export enum Analytics_UI_TextInspector_SelectionMode {
  SELECTION_MODE_UNKNOWN = 0,
  SELECTION_MODE_OBJECT = 1,
  SELECTION_MODE_RANGE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_TextInspector_SelectionModeFromJSON(
  object: any,
): Analytics_UI_TextInspector_SelectionMode {
  switch (object) {
    case 0:
    case "SELECTION_MODE_UNKNOWN":
      return Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_UNKNOWN;
    case 1:
    case "SELECTION_MODE_OBJECT":
      return Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_OBJECT;
    case 2:
    case "SELECTION_MODE_RANGE":
      return Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_RANGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_TextInspector_SelectionMode.UNRECOGNIZED;
  }
}

export function analytics_UI_TextInspector_SelectionModeToJSON(
  object: Analytics_UI_TextInspector_SelectionMode,
): string {
  switch (object) {
    case Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_UNKNOWN:
      return "SELECTION_MODE_UNKNOWN";
    case Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_OBJECT:
      return "SELECTION_MODE_OBJECT";
    case Analytics_UI_TextInspector_SelectionMode.SELECTION_MODE_RANGE:
      return "SELECTION_MODE_RANGE";
    case Analytics_UI_TextInspector_SelectionMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_TextInspector_Shown {
}

export interface Analytics_UI_TextInspector_Foreground {
  fillType: Analytics_UI_TextInspector_Foreground_FillType;
  selectionMode: Analytics_UI_TextInspector_SelectionMode;
}

export enum Analytics_UI_TextInspector_Foreground_FillType {
  FILL_TYPE_UNKNOWN = 0,
  FILL_TYPE_SOLID = 1,
  FILL_TYPE_GRADIENT = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_TextInspector_Foreground_FillTypeFromJSON(
  object: any,
): Analytics_UI_TextInspector_Foreground_FillType {
  switch (object) {
    case 0:
    case "FILL_TYPE_UNKNOWN":
      return Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_UNKNOWN;
    case 1:
    case "FILL_TYPE_SOLID":
      return Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_SOLID;
    case 2:
    case "FILL_TYPE_GRADIENT":
      return Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_GRADIENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_TextInspector_Foreground_FillType.UNRECOGNIZED;
  }
}

export function analytics_UI_TextInspector_Foreground_FillTypeToJSON(
  object: Analytics_UI_TextInspector_Foreground_FillType,
): string {
  switch (object) {
    case Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_UNKNOWN:
      return "FILL_TYPE_UNKNOWN";
    case Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_SOLID:
      return "FILL_TYPE_SOLID";
    case Analytics_UI_TextInspector_Foreground_FillType.FILL_TYPE_GRADIENT:
      return "FILL_TYPE_GRADIENT";
    case Analytics_UI_TextInspector_Foreground_FillType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_TextInspector_UnderlineColor {
  isEnabled: boolean;
  selectionMode: Analytics_UI_TextInspector_SelectionMode;
}

export interface Analytics_UI_TextInspector_BackgroundColor {
  colorType: Analytics_UI_TextInspector_BackgroundColor_ColorType;
  selectionMode: Analytics_UI_TextInspector_SelectionMode;
}

export enum Analytics_UI_TextInspector_BackgroundColor_ColorType {
  COLOR_TYPE_UNKNOWN = 0,
  COLOR_TYPE_CLEAR = 1,
  COLOR_TYPE_OTHER = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_TextInspector_BackgroundColor_ColorTypeFromJSON(
  object: any,
): Analytics_UI_TextInspector_BackgroundColor_ColorType {
  switch (object) {
    case 0:
    case "COLOR_TYPE_UNKNOWN":
      return Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_UNKNOWN;
    case 1:
    case "COLOR_TYPE_CLEAR":
      return Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_CLEAR;
    case 2:
    case "COLOR_TYPE_OTHER":
      return Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_TextInspector_BackgroundColor_ColorType.UNRECOGNIZED;
  }
}

export function analytics_UI_TextInspector_BackgroundColor_ColorTypeToJSON(
  object: Analytics_UI_TextInspector_BackgroundColor_ColorType,
): string {
  switch (object) {
    case Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_UNKNOWN:
      return "COLOR_TYPE_UNKNOWN";
    case Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_CLEAR:
      return "COLOR_TYPE_CLEAR";
    case Analytics_UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_OTHER:
      return "COLOR_TYPE_OTHER";
    case Analytics_UI_TextInspector_BackgroundColor_ColorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_TextInspector_ScrollingText {
  enable?: Analytics_UI_TextInspector_ScrollingText_Enable | undefined;
}

export interface Analytics_UI_TextInspector_ScrollingText_Enable {
  enabled: boolean;
}

export interface Analytics_UI_TextInspector_LineTransform {
  transformType: Analytics_UI_TextInspector_LineTransform_TransformType;
}

export enum Analytics_UI_TextInspector_LineTransform_TransformType {
  TRANSFORM_TYPE_UNKNOWN = 0,
  TRANSFORM_TYPE_NONE = 1,
  TRANSFORM_TYPE_REMOVE_LINE_RETURNS = 2,
  TRANSFORM_TYPE_REPLACE_LINE_RETURNS = 3,
  TRANSFORM_TYPE_ONE_WORD_PER_LINE = 4,
  TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE = 5,
  UNRECOGNIZED = -1,
}

export function analytics_UI_TextInspector_LineTransform_TransformTypeFromJSON(
  object: any,
): Analytics_UI_TextInspector_LineTransform_TransformType {
  switch (object) {
    case 0:
    case "TRANSFORM_TYPE_UNKNOWN":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_UNKNOWN;
    case 1:
    case "TRANSFORM_TYPE_NONE":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_NONE;
    case 2:
    case "TRANSFORM_TYPE_REMOVE_LINE_RETURNS":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REMOVE_LINE_RETURNS;
    case 3:
    case "TRANSFORM_TYPE_REPLACE_LINE_RETURNS":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REPLACE_LINE_RETURNS;
    case 4:
    case "TRANSFORM_TYPE_ONE_WORD_PER_LINE":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_WORD_PER_LINE;
    case 5:
    case "TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE":
      return Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_TextInspector_LineTransform_TransformType.UNRECOGNIZED;
  }
}

export function analytics_UI_TextInspector_LineTransform_TransformTypeToJSON(
  object: Analytics_UI_TextInspector_LineTransform_TransformType,
): string {
  switch (object) {
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_UNKNOWN:
      return "TRANSFORM_TYPE_UNKNOWN";
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_NONE:
      return "TRANSFORM_TYPE_NONE";
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REMOVE_LINE_RETURNS:
      return "TRANSFORM_TYPE_REMOVE_LINE_RETURNS";
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REPLACE_LINE_RETURNS:
      return "TRANSFORM_TYPE_REPLACE_LINE_RETURNS";
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_WORD_PER_LINE:
      return "TRANSFORM_TYPE_ONE_WORD_PER_LINE";
    case Analytics_UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE:
      return "TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE";
    case Analytics_UI_TextInspector_LineTransform_TransformType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Show {
  slideLabel?: Analytics_UI_Show_SlideLabel | undefined;
}

export interface Analytics_UI_Show_SlideLabel {
  shown?: Analytics_UI_Show_SlideLabel_Shown | undefined;
  change?: Analytics_UI_Show_SlideLabel_Change | undefined;
}

export interface Analytics_UI_Show_SlideLabel_Shown {
}

export interface Analytics_UI_Show_SlideLabel_Change {
  numberOfSlides: number;
  source: Analytics_UI_Show_SlideLabel_Change_Source;
}

export enum Analytics_UI_Show_SlideLabel_Change_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_CONTEXT_MENU = 1,
  SOURCE_POPOVER = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Show_SlideLabel_Change_SourceFromJSON(
  object: any,
): Analytics_UI_Show_SlideLabel_Change_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_CONTEXT_MENU":
      return Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_CONTEXT_MENU;
    case 2:
    case "SOURCE_POPOVER":
      return Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_POPOVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Show_SlideLabel_Change_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_Show_SlideLabel_Change_SourceToJSON(
  object: Analytics_UI_Show_SlideLabel_Change_Source,
): string {
  switch (object) {
    case Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_CONTEXT_MENU:
      return "SOURCE_CONTEXT_MENU";
    case Analytics_UI_Show_SlideLabel_Change_Source.SOURCE_POPOVER:
      return "SOURCE_POPOVER";
    case Analytics_UI_Show_SlideLabel_Change_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_InAppStore {
  trial?: Analytics_UI_InAppStore_Trial | undefined;
}

export interface Analytics_UI_InAppStore_Trial {
  shown?: Analytics_UI_InAppStore_Trial_Shown | undefined;
  complete?: Analytics_UI_InAppStore_Trial_Complete | undefined;
}

export interface Analytics_UI_InAppStore_Trial_Shown {
}

export interface Analytics_UI_InAppStore_Trial_Complete {
  result: Analytics_UI_InAppStore_Trial_Complete_Result;
}

export enum Analytics_UI_InAppStore_Trial_Complete_Result {
  RESULT_UNKNOWN = 0,
  RESULT_SUCCESS = 1,
  RESULT_EARLY_EXIT = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_InAppStore_Trial_Complete_ResultFromJSON(
  object: any,
): Analytics_UI_InAppStore_Trial_Complete_Result {
  switch (object) {
    case 0:
    case "RESULT_UNKNOWN":
      return Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_UNKNOWN;
    case 1:
    case "RESULT_SUCCESS":
      return Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_SUCCESS;
    case 2:
    case "RESULT_EARLY_EXIT":
      return Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_EARLY_EXIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_InAppStore_Trial_Complete_Result.UNRECOGNIZED;
  }
}

export function analytics_UI_InAppStore_Trial_Complete_ResultToJSON(
  object: Analytics_UI_InAppStore_Trial_Complete_Result,
): string {
  switch (object) {
    case Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_UNKNOWN:
      return "RESULT_UNKNOWN";
    case Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_SUCCESS:
      return "RESULT_SUCCESS";
    case Analytics_UI_InAppStore_Trial_Complete_Result.RESULT_EARLY_EXIT:
      return "RESULT_EARLY_EXIT";
    case Analytics_UI_InAppStore_Trial_Complete_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Editor {
  overlay?: Analytics_UI_Editor_Overlay | undefined;
}

export interface Analytics_UI_Editor_Overlay {
  shown?: Analytics_UI_Editor_Overlay_Shown | undefined;
  closed?: Analytics_UI_Editor_Overlay_Closed | undefined;
}

export interface Analytics_UI_Editor_Overlay_Shown {
  source: Analytics_UI_Editor_Overlay_Shown_Source;
}

export enum Analytics_UI_Editor_Overlay_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_DOUBLE_CLICK = 1,
  SOURCE_CONTEXTUAL_MENU = 2,
  SOURCE_PLUS_BUTTON_MENU = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Editor_Overlay_Shown_SourceFromJSON(
  object: any,
): Analytics_UI_Editor_Overlay_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_DOUBLE_CLICK":
      return Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_DOUBLE_CLICK;
    case 2:
    case "SOURCE_CONTEXTUAL_MENU":
      return Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_CONTEXTUAL_MENU;
    case 3:
    case "SOURCE_PLUS_BUTTON_MENU":
      return Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_PLUS_BUTTON_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Editor_Overlay_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_Editor_Overlay_Shown_SourceToJSON(
  object: Analytics_UI_Editor_Overlay_Shown_Source,
): string {
  switch (object) {
    case Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_DOUBLE_CLICK:
      return "SOURCE_DOUBLE_CLICK";
    case Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_CONTEXTUAL_MENU:
      return "SOURCE_CONTEXTUAL_MENU";
    case Analytics_UI_Editor_Overlay_Shown_Source.SOURCE_PLUS_BUTTON_MENU:
      return "SOURCE_PLUS_BUTTON_MENU";
    case Analytics_UI_Editor_Overlay_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Editor_Overlay_Closed {
  source: Analytics_UI_Editor_Overlay_Closed_Source;
}

export enum Analytics_UI_Editor_Overlay_Closed_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_CLICK_OFF_ELEMENT = 1,
  SOURCE_ESCAPE_KEY = 2,
  SOURCE_CLOSE_BUTTON = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Editor_Overlay_Closed_SourceFromJSON(
  object: any,
): Analytics_UI_Editor_Overlay_Closed_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_CLICK_OFF_ELEMENT":
      return Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_CLICK_OFF_ELEMENT;
    case 2:
    case "SOURCE_ESCAPE_KEY":
      return Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_ESCAPE_KEY;
    case 3:
    case "SOURCE_CLOSE_BUTTON":
      return Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_CLOSE_BUTTON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Editor_Overlay_Closed_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_Editor_Overlay_Closed_SourceToJSON(
  object: Analytics_UI_Editor_Overlay_Closed_Source,
): string {
  switch (object) {
    case Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_CLICK_OFF_ELEMENT:
      return "SOURCE_CLICK_OFF_ELEMENT";
    case Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_ESCAPE_KEY:
      return "SOURCE_ESCAPE_KEY";
    case Analytics_UI_Editor_Overlay_Closed_Source.SOURCE_CLOSE_BUTTON:
      return "SOURCE_CLOSE_BUTTON";
    case Analytics_UI_Editor_Overlay_Closed_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_WhatsNew {
  viewed?: Analytics_UI_WhatsNew_Viewed | undefined;
}

export interface Analytics_UI_WhatsNew_Viewed {
  version: string;
  resourceName: string;
  viewTime: number;
}

export interface Analytics_UI_ClearGroups {
  shown?: Analytics_UI_ClearGroups_Shown | undefined;
  create?: Analytics_UI_ClearGroups_Create | undefined;
  delete?: Analytics_UI_ClearGroups_Delete | undefined;
  group?: Analytics_UI_ClearGroups_Group | undefined;
}

export interface Analytics_UI_ClearGroups_Shown {
  source: Analytics_UI_ClearGroups_Shown_Source;
}

export enum Analytics_UI_ClearGroups_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_PREVIEW_MENU = 2,
  SOURCE_ACTION_MENU = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_ClearGroups_Shown_SourceFromJSON(object: any): Analytics_UI_ClearGroups_Shown_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_ClearGroups_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_UI_ClearGroups_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_PREVIEW_MENU":
      return Analytics_UI_ClearGroups_Shown_Source.SOURCE_PREVIEW_MENU;
    case 3:
    case "SOURCE_ACTION_MENU":
      return Analytics_UI_ClearGroups_Shown_Source.SOURCE_ACTION_MENU;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_ClearGroups_Shown_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_ClearGroups_Shown_SourceToJSON(object: Analytics_UI_ClearGroups_Shown_Source): string {
  switch (object) {
    case Analytics_UI_ClearGroups_Shown_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_ClearGroups_Shown_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_UI_ClearGroups_Shown_Source.SOURCE_PREVIEW_MENU:
      return "SOURCE_PREVIEW_MENU";
    case Analytics_UI_ClearGroups_Shown_Source.SOURCE_ACTION_MENU:
      return "SOURCE_ACTION_MENU";
    case Analytics_UI_ClearGroups_Shown_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_ClearGroups_Create {
}

export interface Analytics_UI_ClearGroups_Delete {
}

export interface Analytics_UI_ClearGroups_Group {
  changeVisibility?: Analytics_UI_ClearGroups_Group_ChangeVisibility | undefined;
  changeIcon?: Analytics_UI_ClearGroups_Group_ChangeIcon | undefined;
}

export interface Analytics_UI_ClearGroups_Group_ChangeVisibility {
  visibility: Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility;
}

export enum Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility {
  VISIBILITY_UNKNOWN = 0,
  VISIBILITY_SHOWN = 1,
  VISIBILITY_HIDDEN = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_ClearGroups_Group_ChangeVisibility_VisibilityFromJSON(
  object: any,
): Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility {
  switch (object) {
    case 0:
    case "VISIBILITY_UNKNOWN":
      return Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_UNKNOWN;
    case 1:
    case "VISIBILITY_SHOWN":
      return Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_SHOWN;
    case 2:
    case "VISIBILITY_HIDDEN":
      return Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_HIDDEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.UNRECOGNIZED;
  }
}

export function analytics_UI_ClearGroups_Group_ChangeVisibility_VisibilityToJSON(
  object: Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility,
): string {
  switch (object) {
    case Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_UNKNOWN:
      return "VISIBILITY_UNKNOWN";
    case Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_SHOWN:
      return "VISIBILITY_SHOWN";
    case Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_HIDDEN:
      return "VISIBILITY_HIDDEN";
    case Analytics_UI_ClearGroups_Group_ChangeVisibility_Visibility.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_ClearGroups_Group_ChangeIcon {
  iconType: Analytics_UI_ClearGroups_Group_ChangeIcon_IconType;
  isTinted: boolean;
}

export enum Analytics_UI_ClearGroups_Group_ChangeIcon_IconType {
  ICON_TYPE_UNKNOWN = 0,
  ICON_TYPE_DEFAULT = 1,
  ICON_TYPE_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_ClearGroups_Group_ChangeIcon_IconTypeFromJSON(
  object: any,
): Analytics_UI_ClearGroups_Group_ChangeIcon_IconType {
  switch (object) {
    case 0:
    case "ICON_TYPE_UNKNOWN":
      return Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_UNKNOWN;
    case 1:
    case "ICON_TYPE_DEFAULT":
      return Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_DEFAULT;
    case 2:
    case "ICON_TYPE_CUSTOM":
      return Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.UNRECOGNIZED;
  }
}

export function analytics_UI_ClearGroups_Group_ChangeIcon_IconTypeToJSON(
  object: Analytics_UI_ClearGroups_Group_ChangeIcon_IconType,
): string {
  switch (object) {
    case Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_UNKNOWN:
      return "ICON_TYPE_UNKNOWN";
    case Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_DEFAULT:
      return "ICON_TYPE_DEFAULT";
    case Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_CUSTOM:
      return "ICON_TYPE_CUSTOM";
    case Analytics_UI_ClearGroups_Group_ChangeIcon_IconType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_PreviewArea {
  clearGroups?: Analytics_UI_PreviewArea_ClearGroups | undefined;
}

export interface Analytics_UI_PreviewArea_ClearGroups {
  trigger?: Analytics_UI_PreviewArea_ClearGroups_Trigger | undefined;
  changed?: Analytics_UI_PreviewArea_ClearGroups_Changed | undefined;
}

export interface Analytics_UI_PreviewArea_ClearGroups_Trigger {
}

export interface Analytics_UI_PreviewArea_ClearGroups_Changed {
  count: number;
}

export interface Analytics_UI_Placeholder {
  link?: Analytics_UI_Placeholder_Link | undefined;
  unlink?: Analytics_UI_Placeholder_Unlink | undefined;
}

export interface Analytics_UI_Placeholder_Link {
  linkType: Analytics_UI_Placeholder_Link_Type;
  linkSource: Analytics_UI_Placeholder_Link_Source;
}

export enum Analytics_UI_Placeholder_Link_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PRESENTATION = 1,
  TYPE_MEDIA = 2,
  TYPE_EXTERNAL_PRESENTATION = 3,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Placeholder_Link_TypeFromJSON(object: any): Analytics_UI_Placeholder_Link_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Analytics_UI_Placeholder_Link_Type.TYPE_UNKNOWN;
    case 1:
    case "TYPE_PRESENTATION":
      return Analytics_UI_Placeholder_Link_Type.TYPE_PRESENTATION;
    case 2:
    case "TYPE_MEDIA":
      return Analytics_UI_Placeholder_Link_Type.TYPE_MEDIA;
    case 3:
    case "TYPE_EXTERNAL_PRESENTATION":
      return Analytics_UI_Placeholder_Link_Type.TYPE_EXTERNAL_PRESENTATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Placeholder_Link_Type.UNRECOGNIZED;
  }
}

export function analytics_UI_Placeholder_Link_TypeToJSON(object: Analytics_UI_Placeholder_Link_Type): string {
  switch (object) {
    case Analytics_UI_Placeholder_Link_Type.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Analytics_UI_Placeholder_Link_Type.TYPE_PRESENTATION:
      return "TYPE_PRESENTATION";
    case Analytics_UI_Placeholder_Link_Type.TYPE_MEDIA:
      return "TYPE_MEDIA";
    case Analytics_UI_Placeholder_Link_Type.TYPE_EXTERNAL_PRESENTATION:
      return "TYPE_EXTERNAL_PRESENTATION";
    case Analytics_UI_Placeholder_Link_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_UI_Placeholder_Link_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_QUICK_SEARCH = 1,
  SOURCE_IMPORT_BUTTON = 2,
  SOURCE_CREATE_BUTTON = 3,
  SOURCE_DRAG_DROP = 4,
  SOURCE_AUTOMATIC = 5,
  UNRECOGNIZED = -1,
}

export function analytics_UI_Placeholder_Link_SourceFromJSON(object: any): Analytics_UI_Placeholder_Link_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_QUICK_SEARCH":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_QUICK_SEARCH;
    case 2:
    case "SOURCE_IMPORT_BUTTON":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_IMPORT_BUTTON;
    case 3:
    case "SOURCE_CREATE_BUTTON":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_CREATE_BUTTON;
    case 4:
    case "SOURCE_DRAG_DROP":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_DRAG_DROP;
    case 5:
    case "SOURCE_AUTOMATIC":
      return Analytics_UI_Placeholder_Link_Source.SOURCE_AUTOMATIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_Placeholder_Link_Source.UNRECOGNIZED;
  }
}

export function analytics_UI_Placeholder_Link_SourceToJSON(object: Analytics_UI_Placeholder_Link_Source): string {
  switch (object) {
    case Analytics_UI_Placeholder_Link_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_UI_Placeholder_Link_Source.SOURCE_QUICK_SEARCH:
      return "SOURCE_QUICK_SEARCH";
    case Analytics_UI_Placeholder_Link_Source.SOURCE_IMPORT_BUTTON:
      return "SOURCE_IMPORT_BUTTON";
    case Analytics_UI_Placeholder_Link_Source.SOURCE_CREATE_BUTTON:
      return "SOURCE_CREATE_BUTTON";
    case Analytics_UI_Placeholder_Link_Source.SOURCE_DRAG_DROP:
      return "SOURCE_DRAG_DROP";
    case Analytics_UI_Placeholder_Link_Source.SOURCE_AUTOMATIC:
      return "SOURCE_AUTOMATIC";
    case Analytics_UI_Placeholder_Link_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_Placeholder_Unlink {
}

export interface Analytics_UI_PlanningCenterLive {
  shown?: Analytics_UI_PlanningCenterLive_Shown | undefined;
}

export interface Analytics_UI_PlanningCenterLive_Shown {
  windowType: Analytics_UI_PlanningCenterLive_Shown_WindowType;
}

export enum Analytics_UI_PlanningCenterLive_Shown_WindowType {
  WINDOW_TYPE_UNKNOWN = 0,
  WINDOW_TYPE_DOCKED = 1,
  WINDOW_TYPE_FLOATING = 2,
  UNRECOGNIZED = -1,
}

export function analytics_UI_PlanningCenterLive_Shown_WindowTypeFromJSON(
  object: any,
): Analytics_UI_PlanningCenterLive_Shown_WindowType {
  switch (object) {
    case 0:
    case "WINDOW_TYPE_UNKNOWN":
      return Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_UNKNOWN;
    case 1:
    case "WINDOW_TYPE_DOCKED":
      return Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_DOCKED;
    case 2:
    case "WINDOW_TYPE_FLOATING":
      return Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_FLOATING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_UI_PlanningCenterLive_Shown_WindowType.UNRECOGNIZED;
  }
}

export function analytics_UI_PlanningCenterLive_Shown_WindowTypeToJSON(
  object: Analytics_UI_PlanningCenterLive_Shown_WindowType,
): string {
  switch (object) {
    case Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_UNKNOWN:
      return "WINDOW_TYPE_UNKNOWN";
    case Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_DOCKED:
      return "WINDOW_TYPE_DOCKED";
    case Analytics_UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_FLOATING:
      return "WINDOW_TYPE_FLOATING";
    case Analytics_UI_PlanningCenterLive_Shown_WindowType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_UI_NetworkGroup {
  create?: Analytics_UI_NetworkGroup_Create | undefined;
  add?: Analytics_UI_NetworkGroup_Add | undefined;
  join?: Analytics_UI_NetworkGroup_Join | undefined;
  invite?: Analytics_UI_NetworkGroup_Invite | undefined;
  leave?: Analytics_UI_NetworkGroup_Leave | undefined;
  remove?: Analytics_UI_NetworkGroup_Remove | undefined;
}

export interface Analytics_UI_NetworkGroup_Create {
}

export interface Analytics_UI_NetworkGroup_Add {
}

export interface Analytics_UI_NetworkGroup_Join {
}

export interface Analytics_UI_NetworkGroup_Invite {
  didAccept: boolean;
}

export interface Analytics_UI_NetworkGroup_Leave {
}

export interface Analytics_UI_NetworkGroup_Remove {
}

export interface Analytics_UI_CCLI {
  report: Analytics_UI_CCLI_Report | undefined;
}

export interface Analytics_UI_CCLI_Report {
  shown?: Analytics_UI_CCLI_Report_Shown | undefined;
  reset?: Analytics_UI_CCLI_Report_Reset | undefined;
  export?: Analytics_UI_CCLI_Report_Export | undefined;
}

export interface Analytics_UI_CCLI_Report_Shown {
}

export interface Analytics_UI_CCLI_Report_Reset {
}

export interface Analytics_UI_CCLI_Report_Export {
}

export interface Analytics_Startup {
  looks?: Analytics_Startup_Looks | undefined;
  screenConfiguration?: Analytics_Startup_ScreenConfiguration | undefined;
  preferences?: Analytics_Startup_Preferences | undefined;
  screens?: Analytics_Startup_Screens | undefined;
  planningCenter?: Analytics_Startup_PlanningCenter | undefined;
  songSelect?: Analytics_Startup_SongSelect | undefined;
  audio?: Analytics_Startup_Audio | undefined;
  communications?: Analytics_Startup_Communications | undefined;
  resi?: Analytics_Startup_Resi | undefined;
  interface?: Analytics_Startup_Interface | undefined;
  content?: Analytics_Startup_Content | undefined;
  themes?: Analytics_Startup_Themes | undefined;
  macro?: Analytics_Startup_Macro | undefined;
  clearGroup?: Analytics_Startup_ClearGroup | undefined;
  keyMapping?: Analytics_Startup_KeyMapping | undefined;
  multitracks?: Analytics_MultiTracks_Startup | undefined;
  networkLink?: Analytics_Startup_NetworkLink | undefined;
}

export interface Analytics_Startup_Looks {
  numberPresets: number;
}

export interface Analytics_Startup_ScreenConfiguration {
  summary?: Analytics_Startup_ScreenConfiguration_Summary | undefined;
  output?: Analytics_Startup_ScreenConfiguration_Output | undefined;
  single?: Analytics_Startup_ScreenConfiguration_Single | undefined;
  mirrored?: Analytics_Startup_ScreenConfiguration_Mirrored | undefined;
  edgeBlend?: Analytics_Startup_ScreenConfiguration_EdgeBlend | undefined;
  grouped?: Analytics_Startup_ScreenConfiguration_Grouped | undefined;
}

export enum Analytics_Startup_ScreenConfiguration_ScreenType {
  SCREEN_TYPE_UNKNOWN = 0,
  SCREEN_TYPE_AUDIENCE = 1,
  SCREEN_TYPE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_ScreenConfiguration_ScreenTypeFromJSON(
  object: any,
): Analytics_Startup_ScreenConfiguration_ScreenType {
  switch (object) {
    case 0:
    case "SCREEN_TYPE_UNKNOWN":
      return Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_UNKNOWN;
    case 1:
    case "SCREEN_TYPE_AUDIENCE":
      return Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_AUDIENCE;
    case 2:
    case "SCREEN_TYPE_STAGE":
      return Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_STAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_ScreenConfiguration_ScreenType.UNRECOGNIZED;
  }
}

export function analytics_Startup_ScreenConfiguration_ScreenTypeToJSON(
  object: Analytics_Startup_ScreenConfiguration_ScreenType,
): string {
  switch (object) {
    case Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_UNKNOWN:
      return "SCREEN_TYPE_UNKNOWN";
    case Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_AUDIENCE:
      return "SCREEN_TYPE_AUDIENCE";
    case Analytics_Startup_ScreenConfiguration_ScreenType.SCREEN_TYPE_STAGE:
      return "SCREEN_TYPE_STAGE";
    case Analytics_Startup_ScreenConfiguration_ScreenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Startup_ScreenConfiguration_Summary {
  totalScreens: number;
  audienceScreenCount: number;
  stageScreenCount: number;
}

export interface Analytics_Startup_ScreenConfiguration_Output {
  proscreenType: Analytics_Startup_ScreenConfiguration_Output_ProScreenType;
  outputType: Analytics_Startup_ScreenConfiguration_Output_OutputType;
  colorCorrectionEnabled: boolean;
  cornerPinEnabled: boolean;
  alphaKeyEnabled: Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState;
  alignment: Analytics_Startup_ScreenConfiguration_Output_Alignment;
  width: number;
  height: number;
}

export enum Analytics_Startup_ScreenConfiguration_Output_ProScreenType {
  PRO_SCREEN_TYPE_UNKNOWN = 0,
  PRO_SCREEN_TYPE_SINGLE = 1,
  PRO_SCREEN_TYPE_MIRRORED = 2,
  PRO_SCREEN_TYPE_EDGE_BLEND = 3,
  PRO_SCREEN_TYPE_GROUPED = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_ScreenConfiguration_Output_ProScreenTypeFromJSON(
  object: any,
): Analytics_Startup_ScreenConfiguration_Output_ProScreenType {
  switch (object) {
    case 0:
    case "PRO_SCREEN_TYPE_UNKNOWN":
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_UNKNOWN;
    case 1:
    case "PRO_SCREEN_TYPE_SINGLE":
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_SINGLE;
    case 2:
    case "PRO_SCREEN_TYPE_MIRRORED":
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_MIRRORED;
    case 3:
    case "PRO_SCREEN_TYPE_EDGE_BLEND":
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_EDGE_BLEND;
    case 4:
    case "PRO_SCREEN_TYPE_GROUPED":
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_GROUPED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_ScreenConfiguration_Output_ProScreenType.UNRECOGNIZED;
  }
}

export function analytics_Startup_ScreenConfiguration_Output_ProScreenTypeToJSON(
  object: Analytics_Startup_ScreenConfiguration_Output_ProScreenType,
): string {
  switch (object) {
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_UNKNOWN:
      return "PRO_SCREEN_TYPE_UNKNOWN";
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_SINGLE:
      return "PRO_SCREEN_TYPE_SINGLE";
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_MIRRORED:
      return "PRO_SCREEN_TYPE_MIRRORED";
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_EDGE_BLEND:
      return "PRO_SCREEN_TYPE_EDGE_BLEND";
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.PRO_SCREEN_TYPE_GROUPED:
      return "PRO_SCREEN_TYPE_GROUPED";
    case Analytics_Startup_ScreenConfiguration_Output_ProScreenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_ScreenConfiguration_Output_OutputType {
  OUTPUT_TYPE_UNKNOWN = 0,
  OUTPUT_TYPE_SDI = 1,
  OUTPUT_TYPE_NDI = 2,
  OUTPUT_TYPE_SYPHON = 3,
  OUTPUT_TYPE_SYSTEM = 4,
  OUTPUT_TYPE_PLACEHOLDER = 5,
  OUTPUT_TYPE_DVI = 6,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_ScreenConfiguration_Output_OutputTypeFromJSON(
  object: any,
): Analytics_Startup_ScreenConfiguration_Output_OutputType {
  switch (object) {
    case 0:
    case "OUTPUT_TYPE_UNKNOWN":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_UNKNOWN;
    case 1:
    case "OUTPUT_TYPE_SDI":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SDI;
    case 2:
    case "OUTPUT_TYPE_NDI":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_NDI;
    case 3:
    case "OUTPUT_TYPE_SYPHON":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYPHON;
    case 4:
    case "OUTPUT_TYPE_SYSTEM":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYSTEM;
    case 5:
    case "OUTPUT_TYPE_PLACEHOLDER":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_PLACEHOLDER;
    case 6:
    case "OUTPUT_TYPE_DVI":
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_DVI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_ScreenConfiguration_Output_OutputType.UNRECOGNIZED;
  }
}

export function analytics_Startup_ScreenConfiguration_Output_OutputTypeToJSON(
  object: Analytics_Startup_ScreenConfiguration_Output_OutputType,
): string {
  switch (object) {
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_UNKNOWN:
      return "OUTPUT_TYPE_UNKNOWN";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SDI:
      return "OUTPUT_TYPE_SDI";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_NDI:
      return "OUTPUT_TYPE_NDI";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYPHON:
      return "OUTPUT_TYPE_SYPHON";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_SYSTEM:
      return "OUTPUT_TYPE_SYSTEM";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_PLACEHOLDER:
      return "OUTPUT_TYPE_PLACEHOLDER";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.OUTPUT_TYPE_DVI:
      return "OUTPUT_TYPE_DVI";
    case Analytics_Startup_ScreenConfiguration_Output_OutputType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState {
  ALPHA_KEY_STATE_UNKNOWN = 0,
  ALPHA_KEY_STATE_NOT_AVAILABLE = 1,
  ALPHA_KEY_STATE_ENABLED = 2,
  ALPHA_KEY_STATE_DISABLED = 3,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_ScreenConfiguration_Output_AlphaKeyStateFromJSON(
  object: any,
): Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState {
  switch (object) {
    case 0:
    case "ALPHA_KEY_STATE_UNKNOWN":
      return Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_UNKNOWN;
    case 1:
    case "ALPHA_KEY_STATE_NOT_AVAILABLE":
      return Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_NOT_AVAILABLE;
    case 2:
    case "ALPHA_KEY_STATE_ENABLED":
      return Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_ENABLED;
    case 3:
    case "ALPHA_KEY_STATE_DISABLED":
      return Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.UNRECOGNIZED;
  }
}

export function analytics_Startup_ScreenConfiguration_Output_AlphaKeyStateToJSON(
  object: Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState,
): string {
  switch (object) {
    case Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_UNKNOWN:
      return "ALPHA_KEY_STATE_UNKNOWN";
    case Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_NOT_AVAILABLE:
      return "ALPHA_KEY_STATE_NOT_AVAILABLE";
    case Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_ENABLED:
      return "ALPHA_KEY_STATE_ENABLED";
    case Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.ALPHA_KEY_STATE_DISABLED:
      return "ALPHA_KEY_STATE_DISABLED";
    case Analytics_Startup_ScreenConfiguration_Output_AlphaKeyState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_ScreenConfiguration_Output_Alignment {
  ALIGNMENT_UNKNOWN = 0,
  ALIGNMENT_FULL = 1,
  ALIGNMENT_2X1 = 2,
  ALIGNMENT_3X1 = 3,
  ALIGNMENT_2X2 = 4,
  ALIGNMENT_CUSTOM = 5,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_ScreenConfiguration_Output_AlignmentFromJSON(
  object: any,
): Analytics_Startup_ScreenConfiguration_Output_Alignment {
  switch (object) {
    case 0:
    case "ALIGNMENT_UNKNOWN":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_UNKNOWN;
    case 1:
    case "ALIGNMENT_FULL":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_FULL;
    case 2:
    case "ALIGNMENT_2X1":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X1;
    case 3:
    case "ALIGNMENT_3X1":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_3X1;
    case 4:
    case "ALIGNMENT_2X2":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X2;
    case 5:
    case "ALIGNMENT_CUSTOM":
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_ScreenConfiguration_Output_Alignment.UNRECOGNIZED;
  }
}

export function analytics_Startup_ScreenConfiguration_Output_AlignmentToJSON(
  object: Analytics_Startup_ScreenConfiguration_Output_Alignment,
): string {
  switch (object) {
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_UNKNOWN:
      return "ALIGNMENT_UNKNOWN";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_FULL:
      return "ALIGNMENT_FULL";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X1:
      return "ALIGNMENT_2X1";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_3X1:
      return "ALIGNMENT_3X1";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_2X2:
      return "ALIGNMENT_2X2";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.ALIGNMENT_CUSTOM:
      return "ALIGNMENT_CUSTOM";
    case Analytics_Startup_ScreenConfiguration_Output_Alignment.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Startup_ScreenConfiguration_Single {
  screenType: Analytics_Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
}

export interface Analytics_Startup_ScreenConfiguration_Mirrored {
  screenType: Analytics_Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  count: number;
}

export interface Analytics_Startup_ScreenConfiguration_EdgeBlend {
  screenType: Analytics_Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  count: number;
}

export interface Analytics_Startup_ScreenConfiguration_Grouped {
  screenType: Analytics_Startup_ScreenConfiguration_ScreenType;
  screenColorEnabled: boolean;
  columns: number;
  rows: number;
}

export interface Analytics_Startup_Preferences {
  houseOfWorship: boolean;
  hasCustomLogo: boolean;
  copyrightEnabled: boolean;
  copyrightStyle: Analytics_Startup_Preferences_CopyrightStyle;
  copyrightHasLicense: boolean;
  renderMode: Analytics_Startup_Preferences_RenderMode;
  suppressAutoStart: boolean;
  manageMediaAutomatically: boolean;
  searchPathsRelink: boolean;
  updateChannel: Analytics_Startup_Preferences_UpdateChannel;
}

export enum Analytics_Startup_Preferences_CopyrightStyle {
  COPYRIGHT_STYLE_UNKNOWN = 0,
  COPYRIGHT_STYLE_FIRST = 1,
  COPYRIGHT_STYLE_LAST = 2,
  COPYRIGHT_STYLE_FIRST_AND_LAST = 3,
  COPYRIGHT_STYLE_ALL_SLIDES = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Preferences_CopyrightStyleFromJSON(
  object: any,
): Analytics_Startup_Preferences_CopyrightStyle {
  switch (object) {
    case 0:
    case "COPYRIGHT_STYLE_UNKNOWN":
      return Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_UNKNOWN;
    case 1:
    case "COPYRIGHT_STYLE_FIRST":
      return Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST;
    case 2:
    case "COPYRIGHT_STYLE_LAST":
      return Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_LAST;
    case 3:
    case "COPYRIGHT_STYLE_FIRST_AND_LAST":
      return Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST_AND_LAST;
    case 4:
    case "COPYRIGHT_STYLE_ALL_SLIDES":
      return Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_ALL_SLIDES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Preferences_CopyrightStyle.UNRECOGNIZED;
  }
}

export function analytics_Startup_Preferences_CopyrightStyleToJSON(
  object: Analytics_Startup_Preferences_CopyrightStyle,
): string {
  switch (object) {
    case Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_UNKNOWN:
      return "COPYRIGHT_STYLE_UNKNOWN";
    case Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST:
      return "COPYRIGHT_STYLE_FIRST";
    case Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_LAST:
      return "COPYRIGHT_STYLE_LAST";
    case Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_FIRST_AND_LAST:
      return "COPYRIGHT_STYLE_FIRST_AND_LAST";
    case Analytics_Startup_Preferences_CopyrightStyle.COPYRIGHT_STYLE_ALL_SLIDES:
      return "COPYRIGHT_STYLE_ALL_SLIDES";
    case Analytics_Startup_Preferences_CopyrightStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Preferences_RenderMode {
  RENDER_MODE_UNKNOWN = 0,
  RENDER_MODE_OPENGL = 1,
  RENDER_MODE_METAL = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Preferences_RenderModeFromJSON(
  object: any,
): Analytics_Startup_Preferences_RenderMode {
  switch (object) {
    case 0:
    case "RENDER_MODE_UNKNOWN":
      return Analytics_Startup_Preferences_RenderMode.RENDER_MODE_UNKNOWN;
    case 1:
    case "RENDER_MODE_OPENGL":
      return Analytics_Startup_Preferences_RenderMode.RENDER_MODE_OPENGL;
    case 2:
    case "RENDER_MODE_METAL":
      return Analytics_Startup_Preferences_RenderMode.RENDER_MODE_METAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Preferences_RenderMode.UNRECOGNIZED;
  }
}

export function analytics_Startup_Preferences_RenderModeToJSON(
  object: Analytics_Startup_Preferences_RenderMode,
): string {
  switch (object) {
    case Analytics_Startup_Preferences_RenderMode.RENDER_MODE_UNKNOWN:
      return "RENDER_MODE_UNKNOWN";
    case Analytics_Startup_Preferences_RenderMode.RENDER_MODE_OPENGL:
      return "RENDER_MODE_OPENGL";
    case Analytics_Startup_Preferences_RenderMode.RENDER_MODE_METAL:
      return "RENDER_MODE_METAL";
    case Analytics_Startup_Preferences_RenderMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Preferences_UpdateChannel {
  UPDATE_CHANNEL_UNKNOWN = 0,
  UPDATE_CHANNEL_RELEASE = 1,
  UPDATE_CHANNEL_BETA = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Preferences_UpdateChannelFromJSON(
  object: any,
): Analytics_Startup_Preferences_UpdateChannel {
  switch (object) {
    case 0:
    case "UPDATE_CHANNEL_UNKNOWN":
      return Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_UNKNOWN;
    case 1:
    case "UPDATE_CHANNEL_RELEASE":
      return Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_RELEASE;
    case 2:
    case "UPDATE_CHANNEL_BETA":
      return Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_BETA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Preferences_UpdateChannel.UNRECOGNIZED;
  }
}

export function analytics_Startup_Preferences_UpdateChannelToJSON(
  object: Analytics_Startup_Preferences_UpdateChannel,
): string {
  switch (object) {
    case Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_UNKNOWN:
      return "UPDATE_CHANNEL_UNKNOWN";
    case Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_RELEASE:
      return "UPDATE_CHANNEL_RELEASE";
    case Analytics_Startup_Preferences_UpdateChannel.UPDATE_CHANNEL_BETA:
      return "UPDATE_CHANNEL_BETA";
    case Analytics_Startup_Preferences_UpdateChannel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Startup_Screens {
  showScreensLaunch: boolean;
  showPerformanceOnScreen: boolean;
  ignoreBackgroundColors: boolean;
  showKeynotePptScreens: boolean;
}

export interface Analytics_Startup_PlanningCenter {
  loggedIn: boolean;
  autoUpdate: boolean;
  matchSongs: boolean;
  showHistory: boolean;
  makeArrangements: boolean;
  autoUpload: boolean;
  autoDownload: boolean;
}

export interface Analytics_Startup_SongSelect {
  loggedIn: boolean;
}

export interface Analytics_Startup_Audio {
  busCount: number;
  inspectorDevice: Analytics_Startup_Audio_AudioDevice;
  inspectorRouting: Analytics_Startup_Audio_InspectorRouting;
  mainDevice: Analytics_Startup_Audio_AudioDevice;
  mainRouting: Analytics_Startup_Audio_AudioRouting;
  mainDelay: number;
  sdiNdi: boolean;
  sdiNdiRouting: Analytics_Startup_Audio_AudioRouting;
  sdiNdiDelay: number;
}

export enum Analytics_Startup_Audio_AudioDevice {
  AUDIO_DEVICE_UNKNOWN = 0,
  AUDIO_DEVICE_MAIN = 1,
  AUDIO_DEVICE_SYSTEM = 2,
  AUDIO_DEVICE_OTHER = 3,
  AUDIO_DEVICE_NONE = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Audio_AudioDeviceFromJSON(object: any): Analytics_Startup_Audio_AudioDevice {
  switch (object) {
    case 0:
    case "AUDIO_DEVICE_UNKNOWN":
      return Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_UNKNOWN;
    case 1:
    case "AUDIO_DEVICE_MAIN":
      return Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_MAIN;
    case 2:
    case "AUDIO_DEVICE_SYSTEM":
      return Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_SYSTEM;
    case 3:
    case "AUDIO_DEVICE_OTHER":
      return Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_OTHER;
    case 4:
    case "AUDIO_DEVICE_NONE":
      return Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_NONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Audio_AudioDevice.UNRECOGNIZED;
  }
}

export function analytics_Startup_Audio_AudioDeviceToJSON(object: Analytics_Startup_Audio_AudioDevice): string {
  switch (object) {
    case Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_UNKNOWN:
      return "AUDIO_DEVICE_UNKNOWN";
    case Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_MAIN:
      return "AUDIO_DEVICE_MAIN";
    case Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_SYSTEM:
      return "AUDIO_DEVICE_SYSTEM";
    case Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_OTHER:
      return "AUDIO_DEVICE_OTHER";
    case Analytics_Startup_Audio_AudioDevice.AUDIO_DEVICE_NONE:
      return "AUDIO_DEVICE_NONE";
    case Analytics_Startup_Audio_AudioDevice.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Audio_InspectorRouting {
  INSPECTOR_ROUTING_UNKNOWN = 0,
  INSPECTOR_ROUTING_DEFAULT = 1,
  INSPECTOR_ROUTING_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Audio_InspectorRoutingFromJSON(
  object: any,
): Analytics_Startup_Audio_InspectorRouting {
  switch (object) {
    case 0:
    case "INSPECTOR_ROUTING_UNKNOWN":
      return Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_UNKNOWN;
    case 1:
    case "INSPECTOR_ROUTING_DEFAULT":
      return Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_DEFAULT;
    case 2:
    case "INSPECTOR_ROUTING_CUSTOM":
      return Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Audio_InspectorRouting.UNRECOGNIZED;
  }
}

export function analytics_Startup_Audio_InspectorRoutingToJSON(
  object: Analytics_Startup_Audio_InspectorRouting,
): string {
  switch (object) {
    case Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_UNKNOWN:
      return "INSPECTOR_ROUTING_UNKNOWN";
    case Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_DEFAULT:
      return "INSPECTOR_ROUTING_DEFAULT";
    case Analytics_Startup_Audio_InspectorRouting.INSPECTOR_ROUTING_CUSTOM:
      return "INSPECTOR_ROUTING_CUSTOM";
    case Analytics_Startup_Audio_InspectorRouting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Audio_AudioRouting {
  AUDIO_ROUTING_UNKNOWN = 0,
  AUDIO_ROUTING_DEFAULT = 1,
  AUDIO_ROUTING_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Audio_AudioRoutingFromJSON(object: any): Analytics_Startup_Audio_AudioRouting {
  switch (object) {
    case 0:
    case "AUDIO_ROUTING_UNKNOWN":
      return Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_UNKNOWN;
    case 1:
    case "AUDIO_ROUTING_DEFAULT":
      return Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_DEFAULT;
    case 2:
    case "AUDIO_ROUTING_CUSTOM":
      return Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_CUSTOM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Audio_AudioRouting.UNRECOGNIZED;
  }
}

export function analytics_Startup_Audio_AudioRoutingToJSON(object: Analytics_Startup_Audio_AudioRouting): string {
  switch (object) {
    case Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_UNKNOWN:
      return "AUDIO_ROUTING_UNKNOWN";
    case Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_DEFAULT:
      return "AUDIO_ROUTING_DEFAULT";
    case Analytics_Startup_Audio_AudioRouting.AUDIO_ROUTING_CUSTOM:
      return "AUDIO_ROUTING_CUSTOM";
    case Analytics_Startup_Audio_AudioRouting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Startup_Communications {
  totalDeviceCount: number;
}

export interface Analytics_Startup_Resi {
  loggedIn: boolean;
}

export interface Analytics_Startup_Interface {
  libraryOutline: Analytics_Startup_Interface_SplitViewState;
  mediaOutline: Analytics_Startup_Interface_SplitViewState;
  audioOutline: Analytics_Startup_Interface_SplitViewState;
  continuousPlaylist: boolean;
  mediaBin: Analytics_Startup_Interface_SplitViewState;
  presentationViewStyle: Analytics_Startup_Interface_PresentationViewStyle;
  presentationGridColumnCount: number;
  presentationTableColumnCount: number;
  mediaBinViewStyle: Analytics_Startup_Interface_MediaBinViewStyle;
  mediaBinGridColumnCount: number;
  mediaBinTableColumnCount: number;
  presentationTransition: string;
  mediaTransition: string;
  audioShuffle: boolean;
}

export enum Analytics_Startup_Interface_SplitViewState {
  SPLIT_VIEW_STATE_UNKNOWN = 0,
  SPLIT_VIEW_STATE_COLLAPSED = 1,
  SPLIT_VIEW_STATE_EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Interface_SplitViewStateFromJSON(
  object: any,
): Analytics_Startup_Interface_SplitViewState {
  switch (object) {
    case 0:
    case "SPLIT_VIEW_STATE_UNKNOWN":
      return Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_UNKNOWN;
    case 1:
    case "SPLIT_VIEW_STATE_COLLAPSED":
      return Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_COLLAPSED;
    case 2:
    case "SPLIT_VIEW_STATE_EXPANDED":
      return Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_EXPANDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Interface_SplitViewState.UNRECOGNIZED;
  }
}

export function analytics_Startup_Interface_SplitViewStateToJSON(
  object: Analytics_Startup_Interface_SplitViewState,
): string {
  switch (object) {
    case Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_UNKNOWN:
      return "SPLIT_VIEW_STATE_UNKNOWN";
    case Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_COLLAPSED:
      return "SPLIT_VIEW_STATE_COLLAPSED";
    case Analytics_Startup_Interface_SplitViewState.SPLIT_VIEW_STATE_EXPANDED:
      return "SPLIT_VIEW_STATE_EXPANDED";
    case Analytics_Startup_Interface_SplitViewState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Interface_PresentationViewStyle {
  PRESENTATION_VIEW_STYLE_UNKNOWN = 0,
  PRESENTATION_VIEW_STYLE_GRID = 1,
  PRESENTATION_VIEW_STYLE_EASY = 2,
  PRESENTATION_VIEW_STYLE_TABLE = 3,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Interface_PresentationViewStyleFromJSON(
  object: any,
): Analytics_Startup_Interface_PresentationViewStyle {
  switch (object) {
    case 0:
    case "PRESENTATION_VIEW_STYLE_UNKNOWN":
      return Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_UNKNOWN;
    case 1:
    case "PRESENTATION_VIEW_STYLE_GRID":
      return Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_GRID;
    case 2:
    case "PRESENTATION_VIEW_STYLE_EASY":
      return Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_EASY;
    case 3:
    case "PRESENTATION_VIEW_STYLE_TABLE":
      return Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_TABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Interface_PresentationViewStyle.UNRECOGNIZED;
  }
}

export function analytics_Startup_Interface_PresentationViewStyleToJSON(
  object: Analytics_Startup_Interface_PresentationViewStyle,
): string {
  switch (object) {
    case Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_UNKNOWN:
      return "PRESENTATION_VIEW_STYLE_UNKNOWN";
    case Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_GRID:
      return "PRESENTATION_VIEW_STYLE_GRID";
    case Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_EASY:
      return "PRESENTATION_VIEW_STYLE_EASY";
    case Analytics_Startup_Interface_PresentationViewStyle.PRESENTATION_VIEW_STYLE_TABLE:
      return "PRESENTATION_VIEW_STYLE_TABLE";
    case Analytics_Startup_Interface_PresentationViewStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Startup_Interface_MediaBinViewStyle {
  MEDIA_BIN_VIEW_STYLE_UNKNOWN = 0,
  MEDIA_BIN_VIEW_STYLE_GRID = 1,
  MEDIA_BIN_VIEW_STYLE_TABLE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Startup_Interface_MediaBinViewStyleFromJSON(
  object: any,
): Analytics_Startup_Interface_MediaBinViewStyle {
  switch (object) {
    case 0:
    case "MEDIA_BIN_VIEW_STYLE_UNKNOWN":
      return Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_UNKNOWN;
    case 1:
    case "MEDIA_BIN_VIEW_STYLE_GRID":
      return Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_GRID;
    case 2:
    case "MEDIA_BIN_VIEW_STYLE_TABLE":
      return Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_TABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Startup_Interface_MediaBinViewStyle.UNRECOGNIZED;
  }
}

export function analytics_Startup_Interface_MediaBinViewStyleToJSON(
  object: Analytics_Startup_Interface_MediaBinViewStyle,
): string {
  switch (object) {
    case Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_UNKNOWN:
      return "MEDIA_BIN_VIEW_STYLE_UNKNOWN";
    case Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_GRID:
      return "MEDIA_BIN_VIEW_STYLE_GRID";
    case Analytics_Startup_Interface_MediaBinViewStyle.MEDIA_BIN_VIEW_STYLE_TABLE:
      return "MEDIA_BIN_VIEW_STYLE_TABLE";
    case Analytics_Startup_Interface_MediaBinViewStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Startup_Content {
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

export interface Analytics_Startup_Themes {
  themeCount: number;
  themeFolderCount: number;
  themeFolderMaxDepth: number;
  themeSlidesCount: number;
}

export interface Analytics_Startup_Macro {
  triggerOnStartupCount: number;
}

export interface Analytics_Startup_ClearGroup {
  clearGroupCount: number;
  hiddenClearGroupCount: number;
  defaultIconCount: number;
  customIconCount: number;
  iconTintCount: number;
}

export interface Analytics_Startup_KeyMapping {
  totalMapped: number;
  clearGroups: number;
  groups: number;
  macros: number;
  props: number;
  menus: number;
}

export interface Analytics_Startup_NetworkLink {
  enabled: boolean;
  memberCount: number;
}

export interface Analytics_Trigger {
  cue?: Analytics_Trigger_Cue | undefined;
  action?: Analytics_Trigger_Action | undefined;
  mediaBin?: Analytics_Trigger_MediaBin | undefined;
  audioBin?: Analytics_Trigger_AudioBin | undefined;
}

export interface Analytics_Trigger_Cue {
  slide?: Analytics_Trigger_Cue_Slide | undefined;
}

export interface Analytics_Trigger_Cue_Slide {
  trigger?: Analytics_Trigger_Cue_Slide_Trigger | undefined;
  scrollingTextElement?: Analytics_Trigger_Cue_Slide_ScrollingTextElement | undefined;
  rssFeedElement?: Analytics_Trigger_Cue_Slide_RSSFeedElement | undefined;
  fileFeedElement?: Analytics_Trigger_Cue_Slide_FileFeedElement | undefined;
}

export enum Analytics_Trigger_Cue_Slide_DestinationLayer {
  DESTINATION_LAYER_UNKNOWN = 0,
  DESTINATION_LAYER_ANNOUNCEMENT = 1,
  DESTINATION_LAYER_PRESENTATION = 2,
  DESTINATION_LAYER_STAGE = 3,
  DESTINATION_LAYER_PROPS = 4,
  DESTINATION_LAYER_MESSAGES = 5,
  DESTINATION_LAYER_MASK = 6,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Cue_Slide_DestinationLayerFromJSON(
  object: any,
): Analytics_Trigger_Cue_Slide_DestinationLayer {
  switch (object) {
    case 0:
    case "DESTINATION_LAYER_UNKNOWN":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_UNKNOWN;
    case 1:
    case "DESTINATION_LAYER_ANNOUNCEMENT":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_ANNOUNCEMENT;
    case 2:
    case "DESTINATION_LAYER_PRESENTATION":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PRESENTATION;
    case 3:
    case "DESTINATION_LAYER_STAGE":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_STAGE;
    case 4:
    case "DESTINATION_LAYER_PROPS":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PROPS;
    case 5:
    case "DESTINATION_LAYER_MESSAGES":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MESSAGES;
    case 6:
    case "DESTINATION_LAYER_MASK":
      return Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MASK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Cue_Slide_DestinationLayer.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Cue_Slide_DestinationLayerToJSON(
  object: Analytics_Trigger_Cue_Slide_DestinationLayer,
): string {
  switch (object) {
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_UNKNOWN:
      return "DESTINATION_LAYER_UNKNOWN";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_ANNOUNCEMENT:
      return "DESTINATION_LAYER_ANNOUNCEMENT";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PRESENTATION:
      return "DESTINATION_LAYER_PRESENTATION";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_STAGE:
      return "DESTINATION_LAYER_STAGE";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_PROPS:
      return "DESTINATION_LAYER_PROPS";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MESSAGES:
      return "DESTINATION_LAYER_MESSAGES";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.DESTINATION_LAYER_MASK:
      return "DESTINATION_LAYER_MASK";
    case Analytics_Trigger_Cue_Slide_DestinationLayer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Trigger_Cue_Slide_Trigger {
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

export interface Analytics_Trigger_Cue_Slide_ScrollingTextElement {
  direction: Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction;
  startPosition: Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition;
  isRepeatEnabled: boolean;
  speed: Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed;
  destinationLayer: Analytics_Trigger_Cue_Slide_DestinationLayer;
}

export enum Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction {
  DIRECTION_UNKNOWN = 0,
  DIRECTION_LEFT = 1,
  DIRECTION_RIGHT = 2,
  DIRECTION_UP = 3,
  DIRECTION_DOWN = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_DirectionFromJSON(
  object: any,
): Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction {
  switch (object) {
    case 0:
    case "DIRECTION_UNKNOWN":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UNKNOWN;
    case 1:
    case "DIRECTION_LEFT":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_LEFT;
    case 2:
    case "DIRECTION_RIGHT":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_RIGHT;
    case 3:
    case "DIRECTION_UP":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UP;
    case 4:
    case "DIRECTION_DOWN":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_DOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_DirectionToJSON(
  object: Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction,
): string {
  switch (object) {
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UNKNOWN:
      return "DIRECTION_UNKNOWN";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_LEFT:
      return "DIRECTION_LEFT";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_RIGHT:
      return "DIRECTION_RIGHT";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_UP:
      return "DIRECTION_UP";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.DIRECTION_DOWN:
      return "DIRECTION_DOWN";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition {
  START_POSITION_UNKNOWN = 0,
  START_POSITION_AUTOMATIC = 1,
  START_POSITION_OFF_SCREEN = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPositionFromJSON(
  object: any,
): Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition {
  switch (object) {
    case 0:
    case "START_POSITION_UNKNOWN":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_UNKNOWN;
    case 1:
    case "START_POSITION_AUTOMATIC":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_AUTOMATIC;
    case 2:
    case "START_POSITION_OFF_SCREEN":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_OFF_SCREEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPositionToJSON(
  object: Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition,
): string {
  switch (object) {
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_UNKNOWN:
      return "START_POSITION_UNKNOWN";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_AUTOMATIC:
      return "START_POSITION_AUTOMATIC";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.START_POSITION_OFF_SCREEN:
      return "START_POSITION_OFF_SCREEN";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPosition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed {
  SPEED_UNKNOWN = 0,
  SPEED_VERY_SLOW = 1,
  SPEED_SLOW = 2,
  SPEED_MEDIUM = 3,
  SPEED_FAST = 4,
  SPEED_VERY_FAST = 5,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_SpeedFromJSON(
  object: any,
): Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed {
  switch (object) {
    case 0:
    case "SPEED_UNKNOWN":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_UNKNOWN;
    case 1:
    case "SPEED_VERY_SLOW":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_SLOW;
    case 2:
    case "SPEED_SLOW":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_SLOW;
    case 3:
    case "SPEED_MEDIUM":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_MEDIUM;
    case 4:
    case "SPEED_FAST":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_FAST;
    case 5:
    case "SPEED_VERY_FAST":
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_FAST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Cue_Slide_ScrollingTextElement_SpeedToJSON(
  object: Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed,
): string {
  switch (object) {
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_UNKNOWN:
      return "SPEED_UNKNOWN";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_SLOW:
      return "SPEED_VERY_SLOW";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_SLOW:
      return "SPEED_SLOW";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_MEDIUM:
      return "SPEED_MEDIUM";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_FAST:
      return "SPEED_FAST";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.SPEED_VERY_FAST:
      return "SPEED_VERY_FAST";
    case Analytics_Trigger_Cue_Slide_ScrollingTextElement_Speed.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Trigger_Cue_Slide_RSSFeedElement {
  content: Analytics_Trigger_Cue_Slide_RSSFeedElement_Content;
  isDelimiterEnabled: boolean;
  destinationLayer: Analytics_Trigger_Cue_Slide_DestinationLayer;
}

export enum Analytics_Trigger_Cue_Slide_RSSFeedElement_Content {
  CONTENT_UNKNOWN = 0,
  CONTENT_TITLE = 1,
  CONTENT_TITLE_AND_DESCRIPTION = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Cue_Slide_RSSFeedElement_ContentFromJSON(
  object: any,
): Analytics_Trigger_Cue_Slide_RSSFeedElement_Content {
  switch (object) {
    case 0:
    case "CONTENT_UNKNOWN":
      return Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_UNKNOWN;
    case 1:
    case "CONTENT_TITLE":
      return Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE;
    case 2:
    case "CONTENT_TITLE_AND_DESCRIPTION":
      return Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE_AND_DESCRIPTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Cue_Slide_RSSFeedElement_ContentToJSON(
  object: Analytics_Trigger_Cue_Slide_RSSFeedElement_Content,
): string {
  switch (object) {
    case Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_UNKNOWN:
      return "CONTENT_UNKNOWN";
    case Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE:
      return "CONTENT_TITLE";
    case Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.CONTENT_TITLE_AND_DESCRIPTION:
      return "CONTENT_TITLE_AND_DESCRIPTION";
    case Analytics_Trigger_Cue_Slide_RSSFeedElement_Content.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Trigger_Cue_Slide_FileFeedElement {
  destinationLayer: Analytics_Trigger_Cue_Slide_DestinationLayer;
}

export interface Analytics_Trigger_Action {
  clear?: Analytics_Trigger_Action_ClearLayer | undefined;
  media?: Analytics_TriggerMediaInformation | undefined;
  mediaBinPlaylist?: Analytics_Trigger_Action_MediaBinPlaylist | undefined;
  audioBinPlaylist?: Analytics_Trigger_Action_AudioBinPlaylist | undefined;
  stage?: Analytics_Trigger_Action_Stage | undefined;
  timer?: Analytics_Trigger_Action_Timer | undefined;
  prop?: Analytics_Trigger_Action_Prop | undefined;
  look?: Analytics_Trigger_Action_Look | undefined;
  message?: Analytics_Trigger_Action_Message | undefined;
  communications?: Analytics_Trigger_Action_Communications | undefined;
  slideDestination?: Analytics_Trigger_Action_SlideDestination | undefined;
  macro?: Analytics_Trigger_Action_Macro | undefined;
  clearGroup?: Analytics_Trigger_Action_ClearGroup | undefined;
}

export interface Analytics_Trigger_Action_ClearLayer {
}

export interface Analytics_Trigger_Action_MediaBinPlaylist {
}

export interface Analytics_Trigger_Action_AudioBinPlaylist {
}

export interface Analytics_Trigger_Action_Stage {
  layoutChangeCount: number;
  totalStageScreens: number;
}

export interface Analytics_Trigger_Action_SlideDestination {
  changeSlideDestination: Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination;
}

export enum Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination {
  CHANGE_SLIDE_DESTINATION_UNKNOWN = 0,
  CHANGE_SLIDE_DESTINATION_NO_CHANGE = 1,
  CHANGE_SLIDE_DESTINATION_STAGE_ONLY = 2,
  CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE = 3,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Action_SlideDestination_ChangeSlideDestinationFromJSON(
  object: any,
): Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination {
  switch (object) {
    case 0:
    case "CHANGE_SLIDE_DESTINATION_UNKNOWN":
      return Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_UNKNOWN;
    case 1:
    case "CHANGE_SLIDE_DESTINATION_NO_CHANGE":
      return Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_NO_CHANGE;
    case 2:
    case "CHANGE_SLIDE_DESTINATION_STAGE_ONLY":
      return Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_ONLY;
    case 3:
    case "CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE":
      return Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Action_SlideDestination_ChangeSlideDestinationToJSON(
  object: Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination,
): string {
  switch (object) {
    case Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_UNKNOWN:
      return "CHANGE_SLIDE_DESTINATION_UNKNOWN";
    case Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_NO_CHANGE:
      return "CHANGE_SLIDE_DESTINATION_NO_CHANGE";
    case Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_ONLY:
      return "CHANGE_SLIDE_DESTINATION_STAGE_ONLY";
    case Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE:
      return "CHANGE_SLIDE_DESTINATION_STAGE_AUDIENCE";
    case Analytics_Trigger_Action_SlideDestination_ChangeSlideDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Trigger_Action_Timer {
  type: Analytics_Trigger_Action_Timer_Type;
}

export enum Analytics_Trigger_Action_Timer_Type {
  TYPE_UNKNOWN = 0,
  TYPE_START_SET_CONFIGURATION = 1,
  TYPE_START = 2,
  TYPE_STOP = 3,
  TYPE_RESET = 4,
  TYPE_STOP_SET_CONFIGURATION = 5,
  TYPE_INCREMENT = 6,
  UNRECOGNIZED = -1,
}

export function analytics_Trigger_Action_Timer_TypeFromJSON(object: any): Analytics_Trigger_Action_Timer_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Analytics_Trigger_Action_Timer_Type.TYPE_UNKNOWN;
    case 1:
    case "TYPE_START_SET_CONFIGURATION":
      return Analytics_Trigger_Action_Timer_Type.TYPE_START_SET_CONFIGURATION;
    case 2:
    case "TYPE_START":
      return Analytics_Trigger_Action_Timer_Type.TYPE_START;
    case 3:
    case "TYPE_STOP":
      return Analytics_Trigger_Action_Timer_Type.TYPE_STOP;
    case 4:
    case "TYPE_RESET":
      return Analytics_Trigger_Action_Timer_Type.TYPE_RESET;
    case 5:
    case "TYPE_STOP_SET_CONFIGURATION":
      return Analytics_Trigger_Action_Timer_Type.TYPE_STOP_SET_CONFIGURATION;
    case 6:
    case "TYPE_INCREMENT":
      return Analytics_Trigger_Action_Timer_Type.TYPE_INCREMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Trigger_Action_Timer_Type.UNRECOGNIZED;
  }
}

export function analytics_Trigger_Action_Timer_TypeToJSON(object: Analytics_Trigger_Action_Timer_Type): string {
  switch (object) {
    case Analytics_Trigger_Action_Timer_Type.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Analytics_Trigger_Action_Timer_Type.TYPE_START_SET_CONFIGURATION:
      return "TYPE_START_SET_CONFIGURATION";
    case Analytics_Trigger_Action_Timer_Type.TYPE_START:
      return "TYPE_START";
    case Analytics_Trigger_Action_Timer_Type.TYPE_STOP:
      return "TYPE_STOP";
    case Analytics_Trigger_Action_Timer_Type.TYPE_RESET:
      return "TYPE_RESET";
    case Analytics_Trigger_Action_Timer_Type.TYPE_STOP_SET_CONFIGURATION:
      return "TYPE_STOP_SET_CONFIGURATION";
    case Analytics_Trigger_Action_Timer_Type.TYPE_INCREMENT:
      return "TYPE_INCREMENT";
    case Analytics_Trigger_Action_Timer_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Trigger_Action_Prop {
  transition: string;
}

export interface Analytics_Trigger_Action_Look {
}

export interface Analytics_Trigger_Action_Message {
  tokenCount: number;
  textTokenCount: number;
  timerTokenCount: number;
  clockTokenCount: number;
  showingCount: number;
}

export interface Analytics_Trigger_Action_Communications {
}

export interface Analytics_Trigger_Action_Macro {
  actionCount: number;
  cueActionCount: number;
  totalActionCount: number;
}

export interface Analytics_Trigger_Action_ClearGroup {
  layerAudio: boolean;
  layerMessages: boolean;
  layerProps: boolean;
  layerAnnouncement: boolean;
  layerSlide: boolean;
  layerMedia: boolean;
  layerVideoInput: boolean;
}

export interface Analytics_Trigger_MediaBin {
}

export interface Analytics_Trigger_AudioBin {
}

export interface Analytics_Create {
  library?: Analytics_Create_Library | undefined;
  playlist?: Analytics_Create_Playlist | undefined;
  presentation?: Analytics_Create_Presentation | undefined;
  templatePlaylist?: Analytics_Create_TemplatePlaylist | undefined;
}

export interface Analytics_Create_Library {
  source: Analytics_Create_Library_Source;
}

export enum Analytics_Create_Library_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Create_Library_SourceFromJSON(object: any): Analytics_Create_Library_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_Create_Library_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_Create_Library_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON":
      return Analytics_Create_Library_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Create_Library_Source.UNRECOGNIZED;
  }
}

export function analytics_Create_Library_SourceToJSON(object: Analytics_Create_Library_Source): string {
  switch (object) {
    case Analytics_Create_Library_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_Create_Library_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_Create_Library_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON";
    case Analytics_Create_Library_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Create_Playlist {
  source: Analytics_Create_Playlist_Source;
  type: Analytics_Create_Playlist_Type;
}

export enum Analytics_Create_Playlist_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Create_Playlist_SourceFromJSON(object: any): Analytics_Create_Playlist_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_Create_Playlist_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_Create_Playlist_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON":
      return Analytics_Create_Playlist_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Create_Playlist_Source.UNRECOGNIZED;
  }
}

export function analytics_Create_Playlist_SourceToJSON(object: Analytics_Create_Playlist_Source): string {
  switch (object) {
    case Analytics_Create_Playlist_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_Create_Playlist_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_Create_Playlist_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON";
    case Analytics_Create_Playlist_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Analytics_Create_Playlist_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PRESENTATION = 1,
  TYPE_PLANNING_CENTER = 2,
  TYPE_FOLDER = 3,
  TYPE_TEMPLATE_PLAYLIST = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Create_Playlist_TypeFromJSON(object: any): Analytics_Create_Playlist_Type {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Analytics_Create_Playlist_Type.TYPE_UNKNOWN;
    case 1:
    case "TYPE_PRESENTATION":
      return Analytics_Create_Playlist_Type.TYPE_PRESENTATION;
    case 2:
    case "TYPE_PLANNING_CENTER":
      return Analytics_Create_Playlist_Type.TYPE_PLANNING_CENTER;
    case 3:
    case "TYPE_FOLDER":
      return Analytics_Create_Playlist_Type.TYPE_FOLDER;
    case 4:
    case "TYPE_TEMPLATE_PLAYLIST":
      return Analytics_Create_Playlist_Type.TYPE_TEMPLATE_PLAYLIST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Create_Playlist_Type.UNRECOGNIZED;
  }
}

export function analytics_Create_Playlist_TypeToJSON(object: Analytics_Create_Playlist_Type): string {
  switch (object) {
    case Analytics_Create_Playlist_Type.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Analytics_Create_Playlist_Type.TYPE_PRESENTATION:
      return "TYPE_PRESENTATION";
    case Analytics_Create_Playlist_Type.TYPE_PLANNING_CENTER:
      return "TYPE_PLANNING_CENTER";
    case Analytics_Create_Playlist_Type.TYPE_FOLDER:
      return "TYPE_FOLDER";
    case Analytics_Create_Playlist_Type.TYPE_TEMPLATE_PLAYLIST:
      return "TYPE_TEMPLATE_PLAYLIST";
    case Analytics_Create_Playlist_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Create_Presentation {
  source: Analytics_Create_Presentation_Source;
}

export enum Analytics_Create_Presentation_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  SOURCE_DETAIL_ADD_BUTTON = 3,
  SOURCE_UNLINKED_HEADER = 4,
  UNRECOGNIZED = -1,
}

export function analytics_Create_Presentation_SourceFromJSON(object: any): Analytics_Create_Presentation_Source {
  switch (object) {
    case 0:
    case "SOURCE_UNKNOWN":
      return Analytics_Create_Presentation_Source.SOURCE_UNKNOWN;
    case 1:
    case "SOURCE_APPLICATION_MENU":
      return Analytics_Create_Presentation_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON":
      return Analytics_Create_Presentation_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case 3:
    case "SOURCE_DETAIL_ADD_BUTTON":
      return Analytics_Create_Presentation_Source.SOURCE_DETAIL_ADD_BUTTON;
    case 4:
    case "SOURCE_UNLINKED_HEADER":
      return Analytics_Create_Presentation_Source.SOURCE_UNLINKED_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Create_Presentation_Source.UNRECOGNIZED;
  }
}

export function analytics_Create_Presentation_SourceToJSON(object: Analytics_Create_Presentation_Source): string {
  switch (object) {
    case Analytics_Create_Presentation_Source.SOURCE_UNKNOWN:
      return "SOURCE_UNKNOWN";
    case Analytics_Create_Presentation_Source.SOURCE_APPLICATION_MENU:
      return "SOURCE_APPLICATION_MENU";
    case Analytics_Create_Presentation_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return "SOURCE_LIBRARY_OUTLINE_ADD_BUTTON";
    case Analytics_Create_Presentation_Source.SOURCE_DETAIL_ADD_BUTTON:
      return "SOURCE_DETAIL_ADD_BUTTON";
    case Analytics_Create_Presentation_Source.SOURCE_UNLINKED_HEADER:
      return "SOURCE_UNLINKED_HEADER";
    case Analytics_Create_Presentation_Source.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Create_TemplatePlaylist {
  totalItemCount: number;
  headerCount: number;
  placeholderCount: number;
  presentationCount: number;
  mediaCount: number;
}

export interface Analytics_Import {
  songSelect?: Analytics_Import_SongSelect | undefined;
  multitracks?: Analytics_MultiTracks_Import | undefined;
}

export interface Analytics_Import_SongSelect {
  templateSlideTextElementCount: number;
  importIntoPlaylist: boolean;
  lineDelimiter: Analytics_Import_SongSelect_LineDelimiter;
  lineDelimiterCount: number;
  didOpenEditView: boolean;
}

export enum Analytics_Import_SongSelect_LineDelimiter {
  LINE_DELIMITER_UNKNOWN = 0,
  LINE_DELIMITER_LINE_BREAK = 1,
  LINE_DELIMITER_PARAGRAPH_BREAK = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Import_SongSelect_LineDelimiterFromJSON(
  object: any,
): Analytics_Import_SongSelect_LineDelimiter {
  switch (object) {
    case 0:
    case "LINE_DELIMITER_UNKNOWN":
      return Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_UNKNOWN;
    case 1:
    case "LINE_DELIMITER_LINE_BREAK":
      return Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_LINE_BREAK;
    case 2:
    case "LINE_DELIMITER_PARAGRAPH_BREAK":
      return Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_PARAGRAPH_BREAK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Import_SongSelect_LineDelimiter.UNRECOGNIZED;
  }
}

export function analytics_Import_SongSelect_LineDelimiterToJSON(
  object: Analytics_Import_SongSelect_LineDelimiter,
): string {
  switch (object) {
    case Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_UNKNOWN:
      return "LINE_DELIMITER_UNKNOWN";
    case Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_LINE_BREAK:
      return "LINE_DELIMITER_LINE_BREAK";
    case Analytics_Import_SongSelect_LineDelimiter.LINE_DELIMITER_PARAGRAPH_BREAK:
      return "LINE_DELIMITER_PARAGRAPH_BREAK";
    case Analytics_Import_SongSelect_LineDelimiter.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_Update {
  downgrade?: Analytics_Update_Downgrade | undefined;
}

export interface Analytics_Update_Downgrade {
  fromVersionType: Analytics_Update_Downgrade_FromVersionType;
}

export enum Analytics_Update_Downgrade_FromVersionType {
  FROM_VERSION_TYPE_UNKNOWN = 0,
  FROM_VERSION_TYPE_BETA = 1,
  FROM_VERSION_TYPE_RELEASE = 2,
  UNRECOGNIZED = -1,
}

export function analytics_Update_Downgrade_FromVersionTypeFromJSON(
  object: any,
): Analytics_Update_Downgrade_FromVersionType {
  switch (object) {
    case 0:
    case "FROM_VERSION_TYPE_UNKNOWN":
      return Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_UNKNOWN;
    case 1:
    case "FROM_VERSION_TYPE_BETA":
      return Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_BETA;
    case 2:
    case "FROM_VERSION_TYPE_RELEASE":
      return Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_RELEASE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Analytics_Update_Downgrade_FromVersionType.UNRECOGNIZED;
  }
}

export function analytics_Update_Downgrade_FromVersionTypeToJSON(
  object: Analytics_Update_Downgrade_FromVersionType,
): string {
  switch (object) {
    case Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_UNKNOWN:
      return "FROM_VERSION_TYPE_UNKNOWN";
    case Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_BETA:
      return "FROM_VERSION_TYPE_BETA";
    case Analytics_Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_RELEASE:
      return "FROM_VERSION_TYPE_RELEASE";
    case Analytics_Update_Downgrade_FromVersionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Analytics_WHMStore {
  viewStore?: Analytics_WHMStore_ViewStore | undefined;
  download?: Analytics_WHMStore_Download | undefined;
}

export interface Analytics_WHMStore_ViewStore {
}

export interface Analytics_WHMStore_Download {
}

export interface Analytics_ProContent {
  mediaBin?: Analytics_ProContent_ViewMediaBin | undefined;
  download?: Analytics_ProContent_Download | undefined;
}

export interface Analytics_ProContent_ViewMediaBin {
}

export interface Analytics_ProContent_Download {
}

function createBaseAnalytics(): Analytics {
  return {};
}

export const Analytics = {
  encode(_: Analytics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics();
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

  fromJSON(_: any): Analytics {
    return {};
  },

  toJSON(_: Analytics): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics>, I>>(base?: I): Analytics {
    return Analytics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics>, I>>(_: I): Analytics {
    const message = createBaseAnalytics();
    return message;
  },
};

function createBaseAnalytics_Event(): Analytics_Event {
  return {
    ui: undefined,
    startup: undefined,
    trigger: undefined,
    create: undefined,
    import: undefined,
    timeline: undefined,
    sync: undefined,
    api: undefined,
    timecode: undefined,
    playbackMarker: undefined,
    update: undefined,
    whmStore: undefined,
    proContent: undefined,
  };
}

export const Analytics_Event = {
  encode(message: Analytics_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ui !== undefined) {
      Analytics_UI.encode(message.ui, writer.uint32(10).fork()).ldelim();
    }
    if (message.startup !== undefined) {
      Analytics_Startup.encode(message.startup, writer.uint32(18).fork()).ldelim();
    }
    if (message.trigger !== undefined) {
      Analytics_Trigger.encode(message.trigger, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_Create.encode(message.create, writer.uint32(34).fork()).ldelim();
    }
    if (message.import !== undefined) {
      Analytics_Import.encode(message.import, writer.uint32(42).fork()).ldelim();
    }
    if (message.timeline !== undefined) {
      Analytics_Timeline.encode(message.timeline, writer.uint32(50).fork()).ldelim();
    }
    if (message.sync !== undefined) {
      Analytics_Sync.encode(message.sync, writer.uint32(58).fork()).ldelim();
    }
    if (message.api !== undefined) {
      APIAnalytics.encode(message.api, writer.uint32(66).fork()).ldelim();
    }
    if (message.timecode !== undefined) {
      Analytics_Timecode.encode(message.timecode, writer.uint32(74).fork()).ldelim();
    }
    if (message.playbackMarker !== undefined) {
      Analytics_PlaybackMarker.encode(message.playbackMarker, writer.uint32(82).fork()).ldelim();
    }
    if (message.update !== undefined) {
      Analytics_Update.encode(message.update, writer.uint32(90).fork()).ldelim();
    }
    if (message.whmStore !== undefined) {
      Analytics_WHMStore.encode(message.whmStore, writer.uint32(98).fork()).ldelim();
    }
    if (message.proContent !== undefined) {
      Analytics_ProContent.encode(message.proContent, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ui = Analytics_UI.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.startup = Analytics_Startup.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.trigger = Analytics_Trigger.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.create = Analytics_Create.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.import = Analytics_Import.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.timeline = Analytics_Timeline.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.sync = Analytics_Sync.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.api = APIAnalytics.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.timecode = Analytics_Timecode.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.playbackMarker = Analytics_PlaybackMarker.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.update = Analytics_Update.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.whmStore = Analytics_WHMStore.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.proContent = Analytics_ProContent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Event {
    return {
      ui: isSet(object.ui) ? Analytics_UI.fromJSON(object.ui) : undefined,
      startup: isSet(object.startup) ? Analytics_Startup.fromJSON(object.startup) : undefined,
      trigger: isSet(object.trigger) ? Analytics_Trigger.fromJSON(object.trigger) : undefined,
      create: isSet(object.create) ? Analytics_Create.fromJSON(object.create) : undefined,
      import: isSet(object.import) ? Analytics_Import.fromJSON(object.import) : undefined,
      timeline: isSet(object.timeline) ? Analytics_Timeline.fromJSON(object.timeline) : undefined,
      sync: isSet(object.sync) ? Analytics_Sync.fromJSON(object.sync) : undefined,
      api: isSet(object.api) ? APIAnalytics.fromJSON(object.api) : undefined,
      timecode: isSet(object.timecode) ? Analytics_Timecode.fromJSON(object.timecode) : undefined,
      playbackMarker: isSet(object.playbackMarker)
        ? Analytics_PlaybackMarker.fromJSON(object.playbackMarker)
        : undefined,
      update: isSet(object.update) ? Analytics_Update.fromJSON(object.update) : undefined,
      whmStore: isSet(object.whmStore) ? Analytics_WHMStore.fromJSON(object.whmStore) : undefined,
      proContent: isSet(object.proContent) ? Analytics_ProContent.fromJSON(object.proContent) : undefined,
    };
  },

  toJSON(message: Analytics_Event): unknown {
    const obj: any = {};
    message.ui !== undefined && (obj.ui = message.ui ? Analytics_UI.toJSON(message.ui) : undefined);
    message.startup !== undefined &&
      (obj.startup = message.startup ? Analytics_Startup.toJSON(message.startup) : undefined);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger ? Analytics_Trigger.toJSON(message.trigger) : undefined);
    message.create !== undefined && (obj.create = message.create ? Analytics_Create.toJSON(message.create) : undefined);
    message.import !== undefined && (obj.import = message.import ? Analytics_Import.toJSON(message.import) : undefined);
    message.timeline !== undefined &&
      (obj.timeline = message.timeline ? Analytics_Timeline.toJSON(message.timeline) : undefined);
    message.sync !== undefined && (obj.sync = message.sync ? Analytics_Sync.toJSON(message.sync) : undefined);
    message.api !== undefined && (obj.api = message.api ? APIAnalytics.toJSON(message.api) : undefined);
    message.timecode !== undefined &&
      (obj.timecode = message.timecode ? Analytics_Timecode.toJSON(message.timecode) : undefined);
    message.playbackMarker !== undefined &&
      (obj.playbackMarker = message.playbackMarker
        ? Analytics_PlaybackMarker.toJSON(message.playbackMarker)
        : undefined);
    message.update !== undefined && (obj.update = message.update ? Analytics_Update.toJSON(message.update) : undefined);
    message.whmStore !== undefined &&
      (obj.whmStore = message.whmStore ? Analytics_WHMStore.toJSON(message.whmStore) : undefined);
    message.proContent !== undefined &&
      (obj.proContent = message.proContent ? Analytics_ProContent.toJSON(message.proContent) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Event>, I>>(base?: I): Analytics_Event {
    return Analytics_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Event>, I>>(object: I): Analytics_Event {
    const message = createBaseAnalytics_Event();
    message.ui = (object.ui !== undefined && object.ui !== null) ? Analytics_UI.fromPartial(object.ui) : undefined;
    message.startup = (object.startup !== undefined && object.startup !== null)
      ? Analytics_Startup.fromPartial(object.startup)
      : undefined;
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? Analytics_Trigger.fromPartial(object.trigger)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_Create.fromPartial(object.create)
      : undefined;
    message.import = (object.import !== undefined && object.import !== null)
      ? Analytics_Import.fromPartial(object.import)
      : undefined;
    message.timeline = (object.timeline !== undefined && object.timeline !== null)
      ? Analytics_Timeline.fromPartial(object.timeline)
      : undefined;
    message.sync = (object.sync !== undefined && object.sync !== null)
      ? Analytics_Sync.fromPartial(object.sync)
      : undefined;
    message.api = (object.api !== undefined && object.api !== null) ? APIAnalytics.fromPartial(object.api) : undefined;
    message.timecode = (object.timecode !== undefined && object.timecode !== null)
      ? Analytics_Timecode.fromPartial(object.timecode)
      : undefined;
    message.playbackMarker = (object.playbackMarker !== undefined && object.playbackMarker !== null)
      ? Analytics_PlaybackMarker.fromPartial(object.playbackMarker)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? Analytics_Update.fromPartial(object.update)
      : undefined;
    message.whmStore = (object.whmStore !== undefined && object.whmStore !== null)
      ? Analytics_WHMStore.fromPartial(object.whmStore)
      : undefined;
    message.proContent = (object.proContent !== undefined && object.proContent !== null)
      ? Analytics_ProContent.fromPartial(object.proContent)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Timeline(): Analytics_Timeline {
  return { triggerCue: undefined, action: undefined, recordCue: undefined };
}

export const Analytics_Timeline = {
  encode(message: Analytics_Timeline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerCue !== undefined) {
      Analytics_Timeline_TriggerCue.encode(message.triggerCue, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Analytics_Timeline_Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    if (message.recordCue !== undefined) {
      Analytics_Timeline_RecordCue.encode(message.recordCue, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timeline {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timeline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.triggerCue = Analytics_Timeline_TriggerCue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.action = Analytics_Timeline_Action.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.recordCue = Analytics_Timeline_RecordCue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timeline {
    return {
      triggerCue: isSet(object.triggerCue) ? Analytics_Timeline_TriggerCue.fromJSON(object.triggerCue) : undefined,
      action: isSet(object.action) ? Analytics_Timeline_Action.fromJSON(object.action) : undefined,
      recordCue: isSet(object.recordCue) ? Analytics_Timeline_RecordCue.fromJSON(object.recordCue) : undefined,
    };
  },

  toJSON(message: Analytics_Timeline): unknown {
    const obj: any = {};
    message.triggerCue !== undefined &&
      (obj.triggerCue = message.triggerCue ? Analytics_Timeline_TriggerCue.toJSON(message.triggerCue) : undefined);
    message.action !== undefined &&
      (obj.action = message.action ? Analytics_Timeline_Action.toJSON(message.action) : undefined);
    message.recordCue !== undefined &&
      (obj.recordCue = message.recordCue ? Analytics_Timeline_RecordCue.toJSON(message.recordCue) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timeline>, I>>(base?: I): Analytics_Timeline {
    return Analytics_Timeline.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timeline>, I>>(object: I): Analytics_Timeline {
    const message = createBaseAnalytics_Timeline();
    message.triggerCue = (object.triggerCue !== undefined && object.triggerCue !== null)
      ? Analytics_Timeline_TriggerCue.fromPartial(object.triggerCue)
      : undefined;
    message.action = (object.action !== undefined && object.action !== null)
      ? Analytics_Timeline_Action.fromPartial(object.action)
      : undefined;
    message.recordCue = (object.recordCue !== undefined && object.recordCue !== null)
      ? Analytics_Timeline_RecordCue.fromPartial(object.recordCue)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Timeline_TriggerCue(): Analytics_Timeline_TriggerCue {
  return { triggerType: 0, timingSource: 0 };
}

export const Analytics_Timeline_TriggerCue = {
  encode(message: Analytics_Timeline_TriggerCue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerType !== 0) {
      writer.uint32(8).int32(message.triggerType);
    }
    if (message.timingSource !== 0) {
      writer.uint32(16).int32(message.timingSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timeline_TriggerCue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timeline_TriggerCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.triggerType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.timingSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timeline_TriggerCue {
    return {
      triggerType: isSet(object.triggerType)
        ? analytics_Timeline_TriggerCue_TriggerTypeFromJSON(object.triggerType)
        : 0,
      timingSource: isSet(object.timingSource)
        ? analytics_Timeline_TriggerCue_TimingSourceFromJSON(object.timingSource)
        : 0,
    };
  },

  toJSON(message: Analytics_Timeline_TriggerCue): unknown {
    const obj: any = {};
    message.triggerType !== undefined &&
      (obj.triggerType = analytics_Timeline_TriggerCue_TriggerTypeToJSON(message.triggerType));
    message.timingSource !== undefined &&
      (obj.timingSource = analytics_Timeline_TriggerCue_TimingSourceToJSON(message.timingSource));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timeline_TriggerCue>, I>>(base?: I): Analytics_Timeline_TriggerCue {
    return Analytics_Timeline_TriggerCue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timeline_TriggerCue>, I>>(
    object: I,
  ): Analytics_Timeline_TriggerCue {
    const message = createBaseAnalytics_Timeline_TriggerCue();
    message.triggerType = object.triggerType ?? 0;
    message.timingSource = object.timingSource ?? 0;
    return message;
  },
};

function createBaseAnalytics_Timeline_Action(): Analytics_Timeline_Action {
  return { actionType: 0 };
}

export const Analytics_Timeline_Action = {
  encode(message: Analytics_Timeline_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actionType !== 0) {
      writer.uint32(8).int32(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timeline_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timeline_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timeline_Action {
    return {
      actionType: isSet(object.actionType) ? analytics_Timeline_Action_ActionTypeFromJSON(object.actionType) : 0,
    };
  },

  toJSON(message: Analytics_Timeline_Action): unknown {
    const obj: any = {};
    message.actionType !== undefined &&
      (obj.actionType = analytics_Timeline_Action_ActionTypeToJSON(message.actionType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timeline_Action>, I>>(base?: I): Analytics_Timeline_Action {
    return Analytics_Timeline_Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timeline_Action>, I>>(object: I): Analytics_Timeline_Action {
    const message = createBaseAnalytics_Timeline_Action();
    message.actionType = object.actionType ?? 0;
    return message;
  },
};

function createBaseAnalytics_Timeline_RecordCue(): Analytics_Timeline_RecordCue {
  return {};
}

export const Analytics_Timeline_RecordCue = {
  encode(_: Analytics_Timeline_RecordCue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timeline_RecordCue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timeline_RecordCue();
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

  fromJSON(_: any): Analytics_Timeline_RecordCue {
    return {};
  },

  toJSON(_: Analytics_Timeline_RecordCue): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timeline_RecordCue>, I>>(base?: I): Analytics_Timeline_RecordCue {
    return Analytics_Timeline_RecordCue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timeline_RecordCue>, I>>(_: I): Analytics_Timeline_RecordCue {
    const message = createBaseAnalytics_Timeline_RecordCue();
    return message;
  },
};

function createBaseAnalytics_Timecode(): Analytics_Timecode {
  return { startup: undefined, activate: undefined };
}

export const Analytics_Timecode = {
  encode(message: Analytics_Timecode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startup !== undefined) {
      Analytics_Timecode_Startup.encode(message.startup, writer.uint32(10).fork()).ldelim();
    }
    if (message.activate !== undefined) {
      Analytics_Timecode_Activate.encode(message.activate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timecode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timecode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.startup = Analytics_Timecode_Startup.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.activate = Analytics_Timecode_Activate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timecode {
    return {
      startup: isSet(object.startup) ? Analytics_Timecode_Startup.fromJSON(object.startup) : undefined,
      activate: isSet(object.activate) ? Analytics_Timecode_Activate.fromJSON(object.activate) : undefined,
    };
  },

  toJSON(message: Analytics_Timecode): unknown {
    const obj: any = {};
    message.startup !== undefined &&
      (obj.startup = message.startup ? Analytics_Timecode_Startup.toJSON(message.startup) : undefined);
    message.activate !== undefined &&
      (obj.activate = message.activate ? Analytics_Timecode_Activate.toJSON(message.activate) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timecode>, I>>(base?: I): Analytics_Timecode {
    return Analytics_Timecode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timecode>, I>>(object: I): Analytics_Timecode {
    const message = createBaseAnalytics_Timecode();
    message.startup = (object.startup !== undefined && object.startup !== null)
      ? Analytics_Timecode_Startup.fromPartial(object.startup)
      : undefined;
    message.activate = (object.activate !== undefined && object.activate !== null)
      ? Analytics_Timecode_Activate.fromPartial(object.activate)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Timecode_Startup(): Analytics_Timecode_Startup {
  return { isInputConfigured: false, isEnabled: false, isPlaylistSelected: false };
}

export const Analytics_Timecode_Startup = {
  encode(message: Analytics_Timecode_Startup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isInputConfigured === true) {
      writer.uint32(8).bool(message.isInputConfigured);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    if (message.isPlaylistSelected === true) {
      writer.uint32(24).bool(message.isPlaylistSelected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timecode_Startup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timecode_Startup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isInputConfigured = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isPlaylistSelected = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timecode_Startup {
    return {
      isInputConfigured: isSet(object.isInputConfigured) ? Boolean(object.isInputConfigured) : false,
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      isPlaylistSelected: isSet(object.isPlaylistSelected) ? Boolean(object.isPlaylistSelected) : false,
    };
  },

  toJSON(message: Analytics_Timecode_Startup): unknown {
    const obj: any = {};
    message.isInputConfigured !== undefined && (obj.isInputConfigured = message.isInputConfigured);
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.isPlaylistSelected !== undefined && (obj.isPlaylistSelected = message.isPlaylistSelected);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timecode_Startup>, I>>(base?: I): Analytics_Timecode_Startup {
    return Analytics_Timecode_Startup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timecode_Startup>, I>>(object: I): Analytics_Timecode_Startup {
    const message = createBaseAnalytics_Timecode_Startup();
    message.isInputConfigured = object.isInputConfigured ?? false;
    message.isEnabled = object.isEnabled ?? false;
    message.isPlaylistSelected = object.isPlaylistSelected ?? false;
    return message;
  },
};

function createBaseAnalytics_Timecode_Activate(): Analytics_Timecode_Activate {
  return { playlistItemCount: 0, cueCount: 0, isStartup: false };
}

export const Analytics_Timecode_Activate = {
  encode(message: Analytics_Timecode_Activate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playlistItemCount !== 0) {
      writer.uint32(8).int32(message.playlistItemCount);
    }
    if (message.cueCount !== 0) {
      writer.uint32(16).int32(message.cueCount);
    }
    if (message.isStartup === true) {
      writer.uint32(24).bool(message.isStartup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Timecode_Activate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Timecode_Activate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.playlistItemCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cueCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isStartup = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Timecode_Activate {
    return {
      playlistItemCount: isSet(object.playlistItemCount) ? Number(object.playlistItemCount) : 0,
      cueCount: isSet(object.cueCount) ? Number(object.cueCount) : 0,
      isStartup: isSet(object.isStartup) ? Boolean(object.isStartup) : false,
    };
  },

  toJSON(message: Analytics_Timecode_Activate): unknown {
    const obj: any = {};
    message.playlistItemCount !== undefined && (obj.playlistItemCount = Math.round(message.playlistItemCount));
    message.cueCount !== undefined && (obj.cueCount = Math.round(message.cueCount));
    message.isStartup !== undefined && (obj.isStartup = message.isStartup);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Timecode_Activate>, I>>(base?: I): Analytics_Timecode_Activate {
    return Analytics_Timecode_Activate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Timecode_Activate>, I>>(object: I): Analytics_Timecode_Activate {
    const message = createBaseAnalytics_Timecode_Activate();
    message.playlistItemCount = object.playlistItemCount ?? 0;
    message.cueCount = object.cueCount ?? 0;
    message.isStartup = object.isStartup ?? false;
    return message;
  },
};

function createBaseAnalytics_Sync(): Analytics_Sync {
  return { local: undefined };
}

export const Analytics_Sync = {
  encode(message: Analytics_Sync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      Analytics_Sync_Local.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Sync {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Sync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.local = Analytics_Sync_Local.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Sync {
    return { local: isSet(object.local) ? Analytics_Sync_Local.fromJSON(object.local) : undefined };
  },

  toJSON(message: Analytics_Sync): unknown {
    const obj: any = {};
    message.local !== undefined && (obj.local = message.local ? Analytics_Sync_Local.toJSON(message.local) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Sync>, I>>(base?: I): Analytics_Sync {
    return Analytics_Sync.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Sync>, I>>(object: I): Analytics_Sync {
    const message = createBaseAnalytics_Sync();
    message.local = (object.local !== undefined && object.local !== null)
      ? Analytics_Sync_Local.fromPartial(object.local)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Sync_Local(): Analytics_Sync_Local {
  return {
    syncType: 0,
    includeLibrary: false,
    includeMedia: false,
    includePlaylists: false,
    includeThemes: false,
    includeSupportFiles: false,
    replaceFiles: false,
  };
}

export const Analytics_Sync_Local = {
  encode(message: Analytics_Sync_Local, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syncType !== 0) {
      writer.uint32(8).int32(message.syncType);
    }
    if (message.includeLibrary === true) {
      writer.uint32(16).bool(message.includeLibrary);
    }
    if (message.includeMedia === true) {
      writer.uint32(24).bool(message.includeMedia);
    }
    if (message.includePlaylists === true) {
      writer.uint32(32).bool(message.includePlaylists);
    }
    if (message.includeThemes === true) {
      writer.uint32(40).bool(message.includeThemes);
    }
    if (message.includeSupportFiles === true) {
      writer.uint32(48).bool(message.includeSupportFiles);
    }
    if (message.replaceFiles === true) {
      writer.uint32(56).bool(message.replaceFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Sync_Local {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Sync_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.syncType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.includeLibrary = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.includeMedia = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.includePlaylists = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.includeThemes = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.includeSupportFiles = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.replaceFiles = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Sync_Local {
    return {
      syncType: isSet(object.syncType) ? analytics_Sync_Local_SyncTypeFromJSON(object.syncType) : 0,
      includeLibrary: isSet(object.includeLibrary) ? Boolean(object.includeLibrary) : false,
      includeMedia: isSet(object.includeMedia) ? Boolean(object.includeMedia) : false,
      includePlaylists: isSet(object.includePlaylists) ? Boolean(object.includePlaylists) : false,
      includeThemes: isSet(object.includeThemes) ? Boolean(object.includeThemes) : false,
      includeSupportFiles: isSet(object.includeSupportFiles) ? Boolean(object.includeSupportFiles) : false,
      replaceFiles: isSet(object.replaceFiles) ? Boolean(object.replaceFiles) : false,
    };
  },

  toJSON(message: Analytics_Sync_Local): unknown {
    const obj: any = {};
    message.syncType !== undefined && (obj.syncType = analytics_Sync_Local_SyncTypeToJSON(message.syncType));
    message.includeLibrary !== undefined && (obj.includeLibrary = message.includeLibrary);
    message.includeMedia !== undefined && (obj.includeMedia = message.includeMedia);
    message.includePlaylists !== undefined && (obj.includePlaylists = message.includePlaylists);
    message.includeThemes !== undefined && (obj.includeThemes = message.includeThemes);
    message.includeSupportFiles !== undefined && (obj.includeSupportFiles = message.includeSupportFiles);
    message.replaceFiles !== undefined && (obj.replaceFiles = message.replaceFiles);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Sync_Local>, I>>(base?: I): Analytics_Sync_Local {
    return Analytics_Sync_Local.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Sync_Local>, I>>(object: I): Analytics_Sync_Local {
    const message = createBaseAnalytics_Sync_Local();
    message.syncType = object.syncType ?? 0;
    message.includeLibrary = object.includeLibrary ?? false;
    message.includeMedia = object.includeMedia ?? false;
    message.includePlaylists = object.includePlaylists ?? false;
    message.includeThemes = object.includeThemes ?? false;
    message.includeSupportFiles = object.includeSupportFiles ?? false;
    message.replaceFiles = object.replaceFiles ?? false;
    return message;
  },
};

function createBaseAnalytics_MultiTracks(): Analytics_MultiTracks {
  return {};
}

export const Analytics_MultiTracks = {
  encode(_: Analytics_MultiTracks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_MultiTracks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_MultiTracks();
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

  fromJSON(_: any): Analytics_MultiTracks {
    return {};
  },

  toJSON(_: Analytics_MultiTracks): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_MultiTracks>, I>>(base?: I): Analytics_MultiTracks {
    return Analytics_MultiTracks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_MultiTracks>, I>>(_: I): Analytics_MultiTracks {
    const message = createBaseAnalytics_MultiTracks();
    return message;
  },
};

function createBaseAnalytics_MultiTracks_Account(): Analytics_MultiTracks_Account {
  return { chartPro: 0, propresenterAddon: 0 };
}

export const Analytics_MultiTracks_Account = {
  encode(message: Analytics_MultiTracks_Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chartPro !== 0) {
      writer.uint32(8).int32(message.chartPro);
    }
    if (message.propresenterAddon !== 0) {
      writer.uint32(16).int32(message.propresenterAddon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_MultiTracks_Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_MultiTracks_Account();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.chartPro = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.propresenterAddon = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_MultiTracks_Account {
    return {
      chartPro: isSet(object.chartPro) ? analytics_MultiTracks_Account_StatusFromJSON(object.chartPro) : 0,
      propresenterAddon: isSet(object.propresenterAddon)
        ? analytics_MultiTracks_Account_StatusFromJSON(object.propresenterAddon)
        : 0,
    };
  },

  toJSON(message: Analytics_MultiTracks_Account): unknown {
    const obj: any = {};
    message.chartPro !== undefined && (obj.chartPro = analytics_MultiTracks_Account_StatusToJSON(message.chartPro));
    message.propresenterAddon !== undefined &&
      (obj.propresenterAddon = analytics_MultiTracks_Account_StatusToJSON(message.propresenterAddon));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_MultiTracks_Account>, I>>(base?: I): Analytics_MultiTracks_Account {
    return Analytics_MultiTracks_Account.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_MultiTracks_Account>, I>>(
    object: I,
  ): Analytics_MultiTracks_Account {
    const message = createBaseAnalytics_MultiTracks_Account();
    message.chartPro = object.chartPro ?? 0;
    message.propresenterAddon = object.propresenterAddon ?? 0;
    return message;
  },
};

function createBaseAnalytics_MultiTracks_Startup(): Analytics_MultiTracks_Startup {
  return { account: undefined };
}

export const Analytics_MultiTracks_Startup = {
  encode(message: Analytics_MultiTracks_Startup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Analytics_MultiTracks_Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_MultiTracks_Startup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_MultiTracks_Startup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.account = Analytics_MultiTracks_Account.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_MultiTracks_Startup {
    return { account: isSet(object.account) ? Analytics_MultiTracks_Account.fromJSON(object.account) : undefined };
  },

  toJSON(message: Analytics_MultiTracks_Startup): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Analytics_MultiTracks_Account.toJSON(message.account) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_MultiTracks_Startup>, I>>(base?: I): Analytics_MultiTracks_Startup {
    return Analytics_MultiTracks_Startup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_MultiTracks_Startup>, I>>(
    object: I,
  ): Analytics_MultiTracks_Startup {
    const message = createBaseAnalytics_MultiTracks_Startup();
    message.account = (object.account !== undefined && object.account !== null)
      ? Analytics_MultiTracks_Account.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_MultiTracks_Import(): Analytics_MultiTracks_Import {
  return { account: undefined, chartsAutomation: false, lines: 0 };
}

export const Analytics_MultiTracks_Import = {
  encode(message: Analytics_MultiTracks_Import, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Analytics_MultiTracks_Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.chartsAutomation === true) {
      writer.uint32(16).bool(message.chartsAutomation);
    }
    if (message.lines !== 0) {
      writer.uint32(24).int32(message.lines);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_MultiTracks_Import {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_MultiTracks_Import();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.account = Analytics_MultiTracks_Account.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.chartsAutomation = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lines = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_MultiTracks_Import {
    return {
      account: isSet(object.account) ? Analytics_MultiTracks_Account.fromJSON(object.account) : undefined,
      chartsAutomation: isSet(object.chartsAutomation) ? Boolean(object.chartsAutomation) : false,
      lines: isSet(object.lines) ? Number(object.lines) : 0,
    };
  },

  toJSON(message: Analytics_MultiTracks_Import): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? Analytics_MultiTracks_Account.toJSON(message.account) : undefined);
    message.chartsAutomation !== undefined && (obj.chartsAutomation = message.chartsAutomation);
    message.lines !== undefined && (obj.lines = Math.round(message.lines));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_MultiTracks_Import>, I>>(base?: I): Analytics_MultiTracks_Import {
    return Analytics_MultiTracks_Import.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_MultiTracks_Import>, I>>(object: I): Analytics_MultiTracks_Import {
    const message = createBaseAnalytics_MultiTracks_Import();
    message.account = (object.account !== undefined && object.account !== null)
      ? Analytics_MultiTracks_Account.fromPartial(object.account)
      : undefined;
    message.chartsAutomation = object.chartsAutomation ?? false;
    message.lines = object.lines ?? 0;
    return message;
  },
};

function createBaseAnalytics_TriggerMediaInformation(): Analytics_TriggerMediaInformation {
  return { sourceType: 0, video: undefined, image: undefined, audio: undefined, liveVideo: undefined };
}

export const Analytics_TriggerMediaInformation = {
  encode(message: Analytics_TriggerMediaInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceType !== 0) {
      writer.uint32(8).int32(message.sourceType);
    }
    if (message.video !== undefined) {
      Analytics_TriggerMediaInformation_Video.encode(message.video, writer.uint32(18).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Analytics_TriggerMediaInformation_Image.encode(message.image, writer.uint32(26).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Analytics_TriggerMediaInformation_Audio.encode(message.audio, writer.uint32(34).fork()).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Analytics_TriggerMediaInformation_LiveVideo.encode(message.liveVideo, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_TriggerMediaInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_TriggerMediaInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.video = Analytics_TriggerMediaInformation_Video.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.image = Analytics_TriggerMediaInformation_Image.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.audio = Analytics_TriggerMediaInformation_Audio.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.liveVideo = Analytics_TriggerMediaInformation_LiveVideo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_TriggerMediaInformation {
    return {
      sourceType: isSet(object.sourceType)
        ? analytics_TriggerMediaInformation_SourceTypeFromJSON(object.sourceType)
        : 0,
      video: isSet(object.video) ? Analytics_TriggerMediaInformation_Video.fromJSON(object.video) : undefined,
      image: isSet(object.image) ? Analytics_TriggerMediaInformation_Image.fromJSON(object.image) : undefined,
      audio: isSet(object.audio) ? Analytics_TriggerMediaInformation_Audio.fromJSON(object.audio) : undefined,
      liveVideo: isSet(object.liveVideo)
        ? Analytics_TriggerMediaInformation_LiveVideo.fromJSON(object.liveVideo)
        : undefined,
    };
  },

  toJSON(message: Analytics_TriggerMediaInformation): unknown {
    const obj: any = {};
    message.sourceType !== undefined &&
      (obj.sourceType = analytics_TriggerMediaInformation_SourceTypeToJSON(message.sourceType));
    message.video !== undefined &&
      (obj.video = message.video ? Analytics_TriggerMediaInformation_Video.toJSON(message.video) : undefined);
    message.image !== undefined &&
      (obj.image = message.image ? Analytics_TriggerMediaInformation_Image.toJSON(message.image) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Analytics_TriggerMediaInformation_Audio.toJSON(message.audio) : undefined);
    message.liveVideo !== undefined && (obj.liveVideo = message.liveVideo
      ? Analytics_TriggerMediaInformation_LiveVideo.toJSON(message.liveVideo)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation>, I>>(
    base?: I,
  ): Analytics_TriggerMediaInformation {
    return Analytics_TriggerMediaInformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation>, I>>(
    object: I,
  ): Analytics_TriggerMediaInformation {
    const message = createBaseAnalytics_TriggerMediaInformation();
    message.sourceType = object.sourceType ?? 0;
    message.video = (object.video !== undefined && object.video !== null)
      ? Analytics_TriggerMediaInformation_Video.fromPartial(object.video)
      : undefined;
    message.image = (object.image !== undefined && object.image !== null)
      ? Analytics_TriggerMediaInformation_Image.fromPartial(object.image)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Analytics_TriggerMediaInformation_Audio.fromPartial(object.audio)
      : undefined;
    message.liveVideo = (object.liveVideo !== undefined && object.liveVideo !== null)
      ? Analytics_TriggerMediaInformation_LiveVideo.fromPartial(object.liveVideo)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_TriggerMediaInformation_Video(): Analytics_TriggerMediaInformation_Video {
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

export const Analytics_TriggerMediaInformation_Video = {
  encode(message: Analytics_TriggerMediaInformation_Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_TriggerMediaInformation_Video {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_TriggerMediaInformation_Video();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sourceDurationRange = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.playbackMarkerCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.scaleMode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hasInPoint = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.hasOutPoint = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.hasEffects = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.hasTransition = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.hasAudio = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_TriggerMediaInformation_Video {
    return {
      sourceDurationRange: isSet(object.sourceDurationRange)
        ? analytics_TriggerMediaInformation_Video_DurationRangeFromJSON(object.sourceDurationRange)
        : 0,
      playbackMarkerCount: isSet(object.playbackMarkerCount) ? Number(object.playbackMarkerCount) : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? analytics_TriggerMediaInformation_Video_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      scaleMode: isSet(object.scaleMode)
        ? analytics_TriggerMediaInformation_Video_ScaleModeFromJSON(object.scaleMode)
        : 0,
      hasInPoint: isSet(object.hasInPoint) ? Boolean(object.hasInPoint) : false,
      hasOutPoint: isSet(object.hasOutPoint) ? Boolean(object.hasOutPoint) : false,
      hasEffects: isSet(object.hasEffects) ? Boolean(object.hasEffects) : false,
      hasTransition: isSet(object.hasTransition) ? Boolean(object.hasTransition) : false,
      hasAudio: isSet(object.hasAudio) ? Boolean(object.hasAudio) : false,
    };
  },

  toJSON(message: Analytics_TriggerMediaInformation_Video): unknown {
    const obj: any = {};
    message.sourceDurationRange !== undefined &&
      (obj.sourceDurationRange = analytics_TriggerMediaInformation_Video_DurationRangeToJSON(
        message.sourceDurationRange,
      ));
    message.playbackMarkerCount !== undefined && (obj.playbackMarkerCount = Math.round(message.playbackMarkerCount));
    message.playbackBehavior !== undefined &&
      (obj.playbackBehavior = analytics_TriggerMediaInformation_Video_PlaybackBehaviorToJSON(message.playbackBehavior));
    message.scaleMode !== undefined &&
      (obj.scaleMode = analytics_TriggerMediaInformation_Video_ScaleModeToJSON(message.scaleMode));
    message.hasInPoint !== undefined && (obj.hasInPoint = message.hasInPoint);
    message.hasOutPoint !== undefined && (obj.hasOutPoint = message.hasOutPoint);
    message.hasEffects !== undefined && (obj.hasEffects = message.hasEffects);
    message.hasTransition !== undefined && (obj.hasTransition = message.hasTransition);
    message.hasAudio !== undefined && (obj.hasAudio = message.hasAudio);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Video>, I>>(
    base?: I,
  ): Analytics_TriggerMediaInformation_Video {
    return Analytics_TriggerMediaInformation_Video.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Video>, I>>(
    object: I,
  ): Analytics_TriggerMediaInformation_Video {
    const message = createBaseAnalytics_TriggerMediaInformation_Video();
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

function createBaseAnalytics_TriggerMediaInformation_Audio(): Analytics_TriggerMediaInformation_Audio {
  return {};
}

export const Analytics_TriggerMediaInformation_Audio = {
  encode(_: Analytics_TriggerMediaInformation_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_TriggerMediaInformation_Audio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_TriggerMediaInformation_Audio();
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

  fromJSON(_: any): Analytics_TriggerMediaInformation_Audio {
    return {};
  },

  toJSON(_: Analytics_TriggerMediaInformation_Audio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Audio>, I>>(
    base?: I,
  ): Analytics_TriggerMediaInformation_Audio {
    return Analytics_TriggerMediaInformation_Audio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Audio>, I>>(
    _: I,
  ): Analytics_TriggerMediaInformation_Audio {
    const message = createBaseAnalytics_TriggerMediaInformation_Audio();
    return message;
  },
};

function createBaseAnalytics_TriggerMediaInformation_Image(): Analytics_TriggerMediaInformation_Image {
  return {};
}

export const Analytics_TriggerMediaInformation_Image = {
  encode(_: Analytics_TriggerMediaInformation_Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_TriggerMediaInformation_Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_TriggerMediaInformation_Image();
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

  fromJSON(_: any): Analytics_TriggerMediaInformation_Image {
    return {};
  },

  toJSON(_: Analytics_TriggerMediaInformation_Image): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Image>, I>>(
    base?: I,
  ): Analytics_TriggerMediaInformation_Image {
    return Analytics_TriggerMediaInformation_Image.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_Image>, I>>(
    _: I,
  ): Analytics_TriggerMediaInformation_Image {
    const message = createBaseAnalytics_TriggerMediaInformation_Image();
    return message;
  },
};

function createBaseAnalytics_TriggerMediaInformation_LiveVideo(): Analytics_TriggerMediaInformation_LiveVideo {
  return {};
}

export const Analytics_TriggerMediaInformation_LiveVideo = {
  encode(_: Analytics_TriggerMediaInformation_LiveVideo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_TriggerMediaInformation_LiveVideo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_TriggerMediaInformation_LiveVideo();
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

  fromJSON(_: any): Analytics_TriggerMediaInformation_LiveVideo {
    return {};
  },

  toJSON(_: Analytics_TriggerMediaInformation_LiveVideo): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_LiveVideo>, I>>(
    base?: I,
  ): Analytics_TriggerMediaInformation_LiveVideo {
    return Analytics_TriggerMediaInformation_LiveVideo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_TriggerMediaInformation_LiveVideo>, I>>(
    _: I,
  ): Analytics_TriggerMediaInformation_LiveVideo {
    const message = createBaseAnalytics_TriggerMediaInformation_LiveVideo();
    return message;
  },
};

function createBaseAnalytics_PlaybackMarker(): Analytics_PlaybackMarker {
  return { create: undefined };
}

export const Analytics_PlaybackMarker = {
  encode(message: Analytics_PlaybackMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.create !== undefined) {
      Analytics_PlaybackMarker_CreateMarker.encode(message.create, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_PlaybackMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_PlaybackMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.create = Analytics_PlaybackMarker_CreateMarker.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_PlaybackMarker {
    return { create: isSet(object.create) ? Analytics_PlaybackMarker_CreateMarker.fromJSON(object.create) : undefined };
  },

  toJSON(message: Analytics_PlaybackMarker): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_PlaybackMarker_CreateMarker.toJSON(message.create) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_PlaybackMarker>, I>>(base?: I): Analytics_PlaybackMarker {
    return Analytics_PlaybackMarker.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_PlaybackMarker>, I>>(object: I): Analytics_PlaybackMarker {
    const message = createBaseAnalytics_PlaybackMarker();
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_PlaybackMarker_CreateMarker.fromPartial(object.create)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_PlaybackMarker_CreateMarker(): Analytics_PlaybackMarker_CreateMarker {
  return { location: 0 };
}

export const Analytics_PlaybackMarker_CreateMarker = {
  encode(message: Analytics_PlaybackMarker_CreateMarker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_PlaybackMarker_CreateMarker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_PlaybackMarker_CreateMarker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_PlaybackMarker_CreateMarker {
    return {
      location: isSet(object.location) ? analytics_PlaybackMarker_CreateMarker_LocationFromJSON(object.location) : 0,
    };
  },

  toJSON(message: Analytics_PlaybackMarker_CreateMarker): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = analytics_PlaybackMarker_CreateMarker_LocationToJSON(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_PlaybackMarker_CreateMarker>, I>>(
    base?: I,
  ): Analytics_PlaybackMarker_CreateMarker {
    return Analytics_PlaybackMarker_CreateMarker.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_PlaybackMarker_CreateMarker>, I>>(
    object: I,
  ): Analytics_PlaybackMarker_CreateMarker {
    const message = createBaseAnalytics_PlaybackMarker_CreateMarker();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI(): Analytics_UI {
  return {
    quickSearch: undefined,
    toolbar: undefined,
    mainView: undefined,
    looks: undefined,
    screenConfiguration: undefined,
    lowerRight: undefined,
    textInspector: undefined,
    show: undefined,
    inAppStore: undefined,
    editor: undefined,
    whatsNew: undefined,
    clearGroups: undefined,
    previewArea: undefined,
    placeholder: undefined,
    planningCenterLive: undefined,
    networkGroup: undefined,
    ccli: undefined,
  };
}

export const Analytics_UI = {
  encode(message: Analytics_UI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quickSearch !== undefined) {
      Analytics_UI_QuickSearch.encode(message.quickSearch, writer.uint32(10).fork()).ldelim();
    }
    if (message.toolbar !== undefined) {
      Analytics_UI_Toolbar.encode(message.toolbar, writer.uint32(18).fork()).ldelim();
    }
    if (message.mainView !== undefined) {
      Analytics_UI_MainView.encode(message.mainView, writer.uint32(26).fork()).ldelim();
    }
    if (message.looks !== undefined) {
      Analytics_UI_Looks.encode(message.looks, writer.uint32(34).fork()).ldelim();
    }
    if (message.screenConfiguration !== undefined) {
      Analytics_UI_ScreenConfiguration.encode(message.screenConfiguration, writer.uint32(42).fork()).ldelim();
    }
    if (message.lowerRight !== undefined) {
      Analytics_UI_LowerRight.encode(message.lowerRight, writer.uint32(50).fork()).ldelim();
    }
    if (message.textInspector !== undefined) {
      Analytics_UI_TextInspector.encode(message.textInspector, writer.uint32(58).fork()).ldelim();
    }
    if (message.show !== undefined) {
      Analytics_UI_Show.encode(message.show, writer.uint32(66).fork()).ldelim();
    }
    if (message.inAppStore !== undefined) {
      Analytics_UI_InAppStore.encode(message.inAppStore, writer.uint32(74).fork()).ldelim();
    }
    if (message.editor !== undefined) {
      Analytics_UI_Editor.encode(message.editor, writer.uint32(82).fork()).ldelim();
    }
    if (message.whatsNew !== undefined) {
      Analytics_UI_WhatsNew.encode(message.whatsNew, writer.uint32(90).fork()).ldelim();
    }
    if (message.clearGroups !== undefined) {
      Analytics_UI_ClearGroups.encode(message.clearGroups, writer.uint32(98).fork()).ldelim();
    }
    if (message.previewArea !== undefined) {
      Analytics_UI_PreviewArea.encode(message.previewArea, writer.uint32(106).fork()).ldelim();
    }
    if (message.placeholder !== undefined) {
      Analytics_UI_Placeholder.encode(message.placeholder, writer.uint32(114).fork()).ldelim();
    }
    if (message.planningCenterLive !== undefined) {
      Analytics_UI_PlanningCenterLive.encode(message.planningCenterLive, writer.uint32(122).fork()).ldelim();
    }
    if (message.networkGroup !== undefined) {
      Analytics_UI_NetworkGroup.encode(message.networkGroup, writer.uint32(130).fork()).ldelim();
    }
    if (message.ccli !== undefined) {
      Analytics_UI_CCLI.encode(message.ccli, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.quickSearch = Analytics_UI_QuickSearch.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.toolbar = Analytics_UI_Toolbar.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mainView = Analytics_UI_MainView.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.looks = Analytics_UI_Looks.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.screenConfiguration = Analytics_UI_ScreenConfiguration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.lowerRight = Analytics_UI_LowerRight.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.textInspector = Analytics_UI_TextInspector.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.show = Analytics_UI_Show.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.inAppStore = Analytics_UI_InAppStore.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.editor = Analytics_UI_Editor.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.whatsNew = Analytics_UI_WhatsNew.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.clearGroups = Analytics_UI_ClearGroups.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.previewArea = Analytics_UI_PreviewArea.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.placeholder = Analytics_UI_Placeholder.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.planningCenterLive = Analytics_UI_PlanningCenterLive.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.networkGroup = Analytics_UI_NetworkGroup.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.ccli = Analytics_UI_CCLI.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI {
    return {
      quickSearch: isSet(object.quickSearch) ? Analytics_UI_QuickSearch.fromJSON(object.quickSearch) : undefined,
      toolbar: isSet(object.toolbar) ? Analytics_UI_Toolbar.fromJSON(object.toolbar) : undefined,
      mainView: isSet(object.mainView) ? Analytics_UI_MainView.fromJSON(object.mainView) : undefined,
      looks: isSet(object.looks) ? Analytics_UI_Looks.fromJSON(object.looks) : undefined,
      screenConfiguration: isSet(object.screenConfiguration)
        ? Analytics_UI_ScreenConfiguration.fromJSON(object.screenConfiguration)
        : undefined,
      lowerRight: isSet(object.lowerRight) ? Analytics_UI_LowerRight.fromJSON(object.lowerRight) : undefined,
      textInspector: isSet(object.textInspector)
        ? Analytics_UI_TextInspector.fromJSON(object.textInspector)
        : undefined,
      show: isSet(object.show) ? Analytics_UI_Show.fromJSON(object.show) : undefined,
      inAppStore: isSet(object.inAppStore) ? Analytics_UI_InAppStore.fromJSON(object.inAppStore) : undefined,
      editor: isSet(object.editor) ? Analytics_UI_Editor.fromJSON(object.editor) : undefined,
      whatsNew: isSet(object.whatsNew) ? Analytics_UI_WhatsNew.fromJSON(object.whatsNew) : undefined,
      clearGroups: isSet(object.clearGroups) ? Analytics_UI_ClearGroups.fromJSON(object.clearGroups) : undefined,
      previewArea: isSet(object.previewArea) ? Analytics_UI_PreviewArea.fromJSON(object.previewArea) : undefined,
      placeholder: isSet(object.placeholder) ? Analytics_UI_Placeholder.fromJSON(object.placeholder) : undefined,
      planningCenterLive: isSet(object.planningCenterLive)
        ? Analytics_UI_PlanningCenterLive.fromJSON(object.planningCenterLive)
        : undefined,
      networkGroup: isSet(object.networkGroup) ? Analytics_UI_NetworkGroup.fromJSON(object.networkGroup) : undefined,
      ccli: isSet(object.ccli) ? Analytics_UI_CCLI.fromJSON(object.ccli) : undefined,
    };
  },

  toJSON(message: Analytics_UI): unknown {
    const obj: any = {};
    message.quickSearch !== undefined &&
      (obj.quickSearch = message.quickSearch ? Analytics_UI_QuickSearch.toJSON(message.quickSearch) : undefined);
    message.toolbar !== undefined &&
      (obj.toolbar = message.toolbar ? Analytics_UI_Toolbar.toJSON(message.toolbar) : undefined);
    message.mainView !== undefined &&
      (obj.mainView = message.mainView ? Analytics_UI_MainView.toJSON(message.mainView) : undefined);
    message.looks !== undefined && (obj.looks = message.looks ? Analytics_UI_Looks.toJSON(message.looks) : undefined);
    message.screenConfiguration !== undefined && (obj.screenConfiguration = message.screenConfiguration
      ? Analytics_UI_ScreenConfiguration.toJSON(message.screenConfiguration)
      : undefined);
    message.lowerRight !== undefined &&
      (obj.lowerRight = message.lowerRight ? Analytics_UI_LowerRight.toJSON(message.lowerRight) : undefined);
    message.textInspector !== undefined &&
      (obj.textInspector = message.textInspector
        ? Analytics_UI_TextInspector.toJSON(message.textInspector)
        : undefined);
    message.show !== undefined && (obj.show = message.show ? Analytics_UI_Show.toJSON(message.show) : undefined);
    message.inAppStore !== undefined &&
      (obj.inAppStore = message.inAppStore ? Analytics_UI_InAppStore.toJSON(message.inAppStore) : undefined);
    message.editor !== undefined &&
      (obj.editor = message.editor ? Analytics_UI_Editor.toJSON(message.editor) : undefined);
    message.whatsNew !== undefined &&
      (obj.whatsNew = message.whatsNew ? Analytics_UI_WhatsNew.toJSON(message.whatsNew) : undefined);
    message.clearGroups !== undefined &&
      (obj.clearGroups = message.clearGroups ? Analytics_UI_ClearGroups.toJSON(message.clearGroups) : undefined);
    message.previewArea !== undefined &&
      (obj.previewArea = message.previewArea ? Analytics_UI_PreviewArea.toJSON(message.previewArea) : undefined);
    message.placeholder !== undefined &&
      (obj.placeholder = message.placeholder ? Analytics_UI_Placeholder.toJSON(message.placeholder) : undefined);
    message.planningCenterLive !== undefined && (obj.planningCenterLive = message.planningCenterLive
      ? Analytics_UI_PlanningCenterLive.toJSON(message.planningCenterLive)
      : undefined);
    message.networkGroup !== undefined &&
      (obj.networkGroup = message.networkGroup ? Analytics_UI_NetworkGroup.toJSON(message.networkGroup) : undefined);
    message.ccli !== undefined && (obj.ccli = message.ccli ? Analytics_UI_CCLI.toJSON(message.ccli) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI>, I>>(base?: I): Analytics_UI {
    return Analytics_UI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI>, I>>(object: I): Analytics_UI {
    const message = createBaseAnalytics_UI();
    message.quickSearch = (object.quickSearch !== undefined && object.quickSearch !== null)
      ? Analytics_UI_QuickSearch.fromPartial(object.quickSearch)
      : undefined;
    message.toolbar = (object.toolbar !== undefined && object.toolbar !== null)
      ? Analytics_UI_Toolbar.fromPartial(object.toolbar)
      : undefined;
    message.mainView = (object.mainView !== undefined && object.mainView !== null)
      ? Analytics_UI_MainView.fromPartial(object.mainView)
      : undefined;
    message.looks = (object.looks !== undefined && object.looks !== null)
      ? Analytics_UI_Looks.fromPartial(object.looks)
      : undefined;
    message.screenConfiguration = (object.screenConfiguration !== undefined && object.screenConfiguration !== null)
      ? Analytics_UI_ScreenConfiguration.fromPartial(object.screenConfiguration)
      : undefined;
    message.lowerRight = (object.lowerRight !== undefined && object.lowerRight !== null)
      ? Analytics_UI_LowerRight.fromPartial(object.lowerRight)
      : undefined;
    message.textInspector = (object.textInspector !== undefined && object.textInspector !== null)
      ? Analytics_UI_TextInspector.fromPartial(object.textInspector)
      : undefined;
    message.show = (object.show !== undefined && object.show !== null)
      ? Analytics_UI_Show.fromPartial(object.show)
      : undefined;
    message.inAppStore = (object.inAppStore !== undefined && object.inAppStore !== null)
      ? Analytics_UI_InAppStore.fromPartial(object.inAppStore)
      : undefined;
    message.editor = (object.editor !== undefined && object.editor !== null)
      ? Analytics_UI_Editor.fromPartial(object.editor)
      : undefined;
    message.whatsNew = (object.whatsNew !== undefined && object.whatsNew !== null)
      ? Analytics_UI_WhatsNew.fromPartial(object.whatsNew)
      : undefined;
    message.clearGroups = (object.clearGroups !== undefined && object.clearGroups !== null)
      ? Analytics_UI_ClearGroups.fromPartial(object.clearGroups)
      : undefined;
    message.previewArea = (object.previewArea !== undefined && object.previewArea !== null)
      ? Analytics_UI_PreviewArea.fromPartial(object.previewArea)
      : undefined;
    message.placeholder = (object.placeholder !== undefined && object.placeholder !== null)
      ? Analytics_UI_Placeholder.fromPartial(object.placeholder)
      : undefined;
    message.planningCenterLive = (object.planningCenterLive !== undefined && object.planningCenterLive !== null)
      ? Analytics_UI_PlanningCenterLive.fromPartial(object.planningCenterLive)
      : undefined;
    message.networkGroup = (object.networkGroup !== undefined && object.networkGroup !== null)
      ? Analytics_UI_NetworkGroup.fromPartial(object.networkGroup)
      : undefined;
    message.ccli = (object.ccli !== undefined && object.ccli !== null)
      ? Analytics_UI_CCLI.fromPartial(object.ccli)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_QuickSearch(): Analytics_UI_QuickSearch {
  return { shown: undefined, search: undefined, openItems: undefined };
}

export const Analytics_UI_QuickSearch = {
  encode(message: Analytics_UI_QuickSearch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_QuickSearch_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== undefined) {
      Analytics_UI_QuickSearch_Search.encode(message.search, writer.uint32(18).fork()).ldelim();
    }
    if (message.openItems !== undefined) {
      Analytics_UI_QuickSearch_OpenItems.encode(message.openItems, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_QuickSearch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_QuickSearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_QuickSearch_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.search = Analytics_UI_QuickSearch_Search.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.openItems = Analytics_UI_QuickSearch_OpenItems.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_QuickSearch {
    return {
      shown: isSet(object.shown) ? Analytics_UI_QuickSearch_Shown.fromJSON(object.shown) : undefined,
      search: isSet(object.search) ? Analytics_UI_QuickSearch_Search.fromJSON(object.search) : undefined,
      openItems: isSet(object.openItems) ? Analytics_UI_QuickSearch_OpenItems.fromJSON(object.openItems) : undefined,
    };
  },

  toJSON(message: Analytics_UI_QuickSearch): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_QuickSearch_Shown.toJSON(message.shown) : undefined);
    message.search !== undefined &&
      (obj.search = message.search ? Analytics_UI_QuickSearch_Search.toJSON(message.search) : undefined);
    message.openItems !== undefined &&
      (obj.openItems = message.openItems ? Analytics_UI_QuickSearch_OpenItems.toJSON(message.openItems) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_QuickSearch>, I>>(base?: I): Analytics_UI_QuickSearch {
    return Analytics_UI_QuickSearch.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_QuickSearch>, I>>(object: I): Analytics_UI_QuickSearch {
    const message = createBaseAnalytics_UI_QuickSearch();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_QuickSearch_Shown.fromPartial(object.shown)
      : undefined;
    message.search = (object.search !== undefined && object.search !== null)
      ? Analytics_UI_QuickSearch_Search.fromPartial(object.search)
      : undefined;
    message.openItems = (object.openItems !== undefined && object.openItems !== null)
      ? Analytics_UI_QuickSearch_OpenItems.fromPartial(object.openItems)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_QuickSearch_Shown(): Analytics_UI_QuickSearch_Shown {
  return { source: 0 };
}

export const Analytics_UI_QuickSearch_Shown = {
  encode(message: Analytics_UI_QuickSearch_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_QuickSearch_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_QuickSearch_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_QuickSearch_Shown {
    return { source: isSet(object.source) ? analytics_UI_QuickSearch_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_QuickSearch_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_QuickSearch_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_Shown>, I>>(base?: I): Analytics_UI_QuickSearch_Shown {
    return Analytics_UI_QuickSearch_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_Shown>, I>>(
    object: I,
  ): Analytics_UI_QuickSearch_Shown {
    const message = createBaseAnalytics_UI_QuickSearch_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_QuickSearch_Search(): Analytics_UI_QuickSearch_Search {
  return { source: 0 };
}

export const Analytics_UI_QuickSearch_Search = {
  encode(message: Analytics_UI_QuickSearch_Search, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_QuickSearch_Search {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_QuickSearch_Search();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_QuickSearch_Search {
    return { source: isSet(object.source) ? analytics_UI_QuickSearch_Search_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_QuickSearch_Search): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_QuickSearch_Search_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_Search>, I>>(base?: I): Analytics_UI_QuickSearch_Search {
    return Analytics_UI_QuickSearch_Search.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_Search>, I>>(
    object: I,
  ): Analytics_UI_QuickSearch_Search {
    const message = createBaseAnalytics_UI_QuickSearch_Search();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_QuickSearch_OpenItems(): Analytics_UI_QuickSearch_OpenItems {
  return { source: 0, style: 0, count: 0 };
}

export const Analytics_UI_QuickSearch_OpenItems = {
  encode(message: Analytics_UI_QuickSearch_OpenItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.style !== 0) {
      writer.uint32(16).int32(message.style);
    }
    if (message.count !== 0) {
      writer.uint32(24).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_QuickSearch_OpenItems {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_QuickSearch_OpenItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_QuickSearch_OpenItems {
    return {
      source: isSet(object.source) ? analytics_UI_QuickSearch_OpenItems_SourceFromJSON(object.source) : 0,
      style: isSet(object.style) ? analytics_UI_QuickSearch_OpenItems_StyleFromJSON(object.style) : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: Analytics_UI_QuickSearch_OpenItems): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_QuickSearch_OpenItems_SourceToJSON(message.source));
    message.style !== undefined && (obj.style = analytics_UI_QuickSearch_OpenItems_StyleToJSON(message.style));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_OpenItems>, I>>(
    base?: I,
  ): Analytics_UI_QuickSearch_OpenItems {
    return Analytics_UI_QuickSearch_OpenItems.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_QuickSearch_OpenItems>, I>>(
    object: I,
  ): Analytics_UI_QuickSearch_OpenItems {
    const message = createBaseAnalytics_UI_QuickSearch_OpenItems();
    message.source = object.source ?? 0;
    message.style = object.style ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar(): Analytics_UI_Toolbar {
  return { textStyle: undefined, theme: undefined };
}

export const Analytics_UI_Toolbar = {
  encode(message: Analytics_UI_Toolbar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.textStyle !== undefined) {
      Analytics_UI_Toolbar_TextStyle.encode(message.textStyle, writer.uint32(10).fork()).ldelim();
    }
    if (message.theme !== undefined) {
      Analytics_UI_Toolbar_Theme.encode(message.theme, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.textStyle = Analytics_UI_Toolbar_TextStyle.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.theme = Analytics_UI_Toolbar_Theme.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Toolbar {
    return {
      textStyle: isSet(object.textStyle) ? Analytics_UI_Toolbar_TextStyle.fromJSON(object.textStyle) : undefined,
      theme: isSet(object.theme) ? Analytics_UI_Toolbar_Theme.fromJSON(object.theme) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Toolbar): unknown {
    const obj: any = {};
    message.textStyle !== undefined &&
      (obj.textStyle = message.textStyle ? Analytics_UI_Toolbar_TextStyle.toJSON(message.textStyle) : undefined);
    message.theme !== undefined &&
      (obj.theme = message.theme ? Analytics_UI_Toolbar_Theme.toJSON(message.theme) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar>, I>>(base?: I): Analytics_UI_Toolbar {
    return Analytics_UI_Toolbar.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar>, I>>(object: I): Analytics_UI_Toolbar {
    const message = createBaseAnalytics_UI_Toolbar();
    message.textStyle = (object.textStyle !== undefined && object.textStyle !== null)
      ? Analytics_UI_Toolbar_TextStyle.fromPartial(object.textStyle)
      : undefined;
    message.theme = (object.theme !== undefined && object.theme !== null)
      ? Analytics_UI_Toolbar_Theme.fromPartial(object.theme)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_TextStyle(): Analytics_UI_Toolbar_TextStyle {
  return { shown: undefined, change: undefined };
}

export const Analytics_UI_Toolbar_TextStyle = {
  encode(message: Analytics_UI_Toolbar_TextStyle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_Toolbar_TextStyle_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.change !== undefined) {
      Analytics_UI_Toolbar_TextStyle_Change.encode(message.change, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_TextStyle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_TextStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_Toolbar_TextStyle_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.change = Analytics_UI_Toolbar_TextStyle_Change.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Toolbar_TextStyle {
    return {
      shown: isSet(object.shown) ? Analytics_UI_Toolbar_TextStyle_Shown.fromJSON(object.shown) : undefined,
      change: isSet(object.change) ? Analytics_UI_Toolbar_TextStyle_Change.fromJSON(object.change) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Toolbar_TextStyle): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_Toolbar_TextStyle_Shown.toJSON(message.shown) : undefined);
    message.change !== undefined &&
      (obj.change = message.change ? Analytics_UI_Toolbar_TextStyle_Change.toJSON(message.change) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle>, I>>(base?: I): Analytics_UI_Toolbar_TextStyle {
    return Analytics_UI_Toolbar_TextStyle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle>, I>>(
    object: I,
  ): Analytics_UI_Toolbar_TextStyle {
    const message = createBaseAnalytics_UI_Toolbar_TextStyle();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_Toolbar_TextStyle_Shown.fromPartial(object.shown)
      : undefined;
    message.change = (object.change !== undefined && object.change !== null)
      ? Analytics_UI_Toolbar_TextStyle_Change.fromPartial(object.change)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_TextStyle_Shown(): Analytics_UI_Toolbar_TextStyle_Shown {
  return {};
}

export const Analytics_UI_Toolbar_TextStyle_Shown = {
  encode(_: Analytics_UI_Toolbar_TextStyle_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_TextStyle_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_TextStyle_Shown();
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

  fromJSON(_: any): Analytics_UI_Toolbar_TextStyle_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_Toolbar_TextStyle_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle_Shown>, I>>(
    base?: I,
  ): Analytics_UI_Toolbar_TextStyle_Shown {
    return Analytics_UI_Toolbar_TextStyle_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle_Shown>, I>>(
    _: I,
  ): Analytics_UI_Toolbar_TextStyle_Shown {
    const message = createBaseAnalytics_UI_Toolbar_TextStyle_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_TextStyle_Change(): Analytics_UI_Toolbar_TextStyle_Change {
  return { property: 0, target: 0 };
}

export const Analytics_UI_Toolbar_TextStyle_Change = {
  encode(message: Analytics_UI_Toolbar_TextStyle_Change, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.target !== 0) {
      writer.uint32(16).int32(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_TextStyle_Change {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_TextStyle_Change();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.property = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.target = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Toolbar_TextStyle_Change {
    return {
      property: isSet(object.property) ? analytics_UI_Toolbar_TextStyle_Change_PropertyFromJSON(object.property) : 0,
      target: isSet(object.target) ? analytics_UI_Toolbar_TextStyle_Change_TargetFromJSON(object.target) : 0,
    };
  },

  toJSON(message: Analytics_UI_Toolbar_TextStyle_Change): unknown {
    const obj: any = {};
    message.property !== undefined &&
      (obj.property = analytics_UI_Toolbar_TextStyle_Change_PropertyToJSON(message.property));
    message.target !== undefined && (obj.target = analytics_UI_Toolbar_TextStyle_Change_TargetToJSON(message.target));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle_Change>, I>>(
    base?: I,
  ): Analytics_UI_Toolbar_TextStyle_Change {
    return Analytics_UI_Toolbar_TextStyle_Change.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_TextStyle_Change>, I>>(
    object: I,
  ): Analytics_UI_Toolbar_TextStyle_Change {
    const message = createBaseAnalytics_UI_Toolbar_TextStyle_Change();
    message.property = object.property ?? 0;
    message.target = object.target ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_Theme(): Analytics_UI_Toolbar_Theme {
  return { shown: undefined, applied: undefined };
}

export const Analytics_UI_Toolbar_Theme = {
  encode(message: Analytics_UI_Toolbar_Theme, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_Toolbar_Theme_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.applied !== undefined) {
      Analytics_UI_Toolbar_Theme_Applied.encode(message.applied, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_Theme {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_Theme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_Toolbar_Theme_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.applied = Analytics_UI_Toolbar_Theme_Applied.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Toolbar_Theme {
    return {
      shown: isSet(object.shown) ? Analytics_UI_Toolbar_Theme_Shown.fromJSON(object.shown) : undefined,
      applied: isSet(object.applied) ? Analytics_UI_Toolbar_Theme_Applied.fromJSON(object.applied) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Toolbar_Theme): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_Toolbar_Theme_Shown.toJSON(message.shown) : undefined);
    message.applied !== undefined &&
      (obj.applied = message.applied ? Analytics_UI_Toolbar_Theme_Applied.toJSON(message.applied) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme>, I>>(base?: I): Analytics_UI_Toolbar_Theme {
    return Analytics_UI_Toolbar_Theme.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme>, I>>(object: I): Analytics_UI_Toolbar_Theme {
    const message = createBaseAnalytics_UI_Toolbar_Theme();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_Toolbar_Theme_Shown.fromPartial(object.shown)
      : undefined;
    message.applied = (object.applied !== undefined && object.applied !== null)
      ? Analytics_UI_Toolbar_Theme_Applied.fromPartial(object.applied)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_Theme_Shown(): Analytics_UI_Toolbar_Theme_Shown {
  return {};
}

export const Analytics_UI_Toolbar_Theme_Shown = {
  encode(_: Analytics_UI_Toolbar_Theme_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_Theme_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_Theme_Shown();
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

  fromJSON(_: any): Analytics_UI_Toolbar_Theme_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_Toolbar_Theme_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme_Shown>, I>>(
    base?: I,
  ): Analytics_UI_Toolbar_Theme_Shown {
    return Analytics_UI_Toolbar_Theme_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme_Shown>, I>>(
    _: I,
  ): Analytics_UI_Toolbar_Theme_Shown {
    const message = createBaseAnalytics_UI_Toolbar_Theme_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_Toolbar_Theme_Applied(): Analytics_UI_Toolbar_Theme_Applied {
  return { target: 0 };
}

export const Analytics_UI_Toolbar_Theme_Applied = {
  encode(message: Analytics_UI_Toolbar_Theme_Applied, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== 0) {
      writer.uint32(8).int32(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Toolbar_Theme_Applied {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Toolbar_Theme_Applied();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.target = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Toolbar_Theme_Applied {
    return { target: isSet(object.target) ? analytics_UI_Toolbar_Theme_Applied_TargetFromJSON(object.target) : 0 };
  },

  toJSON(message: Analytics_UI_Toolbar_Theme_Applied): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = analytics_UI_Toolbar_Theme_Applied_TargetToJSON(message.target));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme_Applied>, I>>(
    base?: I,
  ): Analytics_UI_Toolbar_Theme_Applied {
    return Analytics_UI_Toolbar_Theme_Applied.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Toolbar_Theme_Applied>, I>>(
    object: I,
  ): Analytics_UI_Toolbar_Theme_Applied {
    const message = createBaseAnalytics_UI_Toolbar_Theme_Applied();
    message.target = object.target ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView(): Analytics_UI_MainView {
  return {
    show: undefined,
    presentationEditor: undefined,
    reflowEditor: undefined,
    bible: undefined,
    stageEditor: undefined,
    themeEditor: undefined,
    copyrightEditor: undefined,
    propsEditor: undefined,
    maskEditor: undefined,
  };
}

export const Analytics_UI_MainView = {
  encode(message: Analytics_UI_MainView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.show !== undefined) {
      Analytics_UI_MainView_Show.encode(message.show, writer.uint32(10).fork()).ldelim();
    }
    if (message.presentationEditor !== undefined) {
      Analytics_UI_MainView_PresentationEditor.encode(message.presentationEditor, writer.uint32(18).fork()).ldelim();
    }
    if (message.reflowEditor !== undefined) {
      Analytics_UI_MainView_ReflowEditor.encode(message.reflowEditor, writer.uint32(26).fork()).ldelim();
    }
    if (message.bible !== undefined) {
      Analytics_UI_MainView_Bible.encode(message.bible, writer.uint32(34).fork()).ldelim();
    }
    if (message.stageEditor !== undefined) {
      Analytics_UI_MainView_StageEditor.encode(message.stageEditor, writer.uint32(42).fork()).ldelim();
    }
    if (message.themeEditor !== undefined) {
      Analytics_UI_MainView_ThemeEditor.encode(message.themeEditor, writer.uint32(50).fork()).ldelim();
    }
    if (message.copyrightEditor !== undefined) {
      Analytics_UI_MainView_CopyrightEditor.encode(message.copyrightEditor, writer.uint32(58).fork()).ldelim();
    }
    if (message.propsEditor !== undefined) {
      Analytics_UI_MainView_PropsEditor.encode(message.propsEditor, writer.uint32(66).fork()).ldelim();
    }
    if (message.maskEditor !== undefined) {
      Analytics_UI_MainView_MaskEditor.encode(message.maskEditor, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.show = Analytics_UI_MainView_Show.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.presentationEditor = Analytics_UI_MainView_PresentationEditor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.reflowEditor = Analytics_UI_MainView_ReflowEditor.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.bible = Analytics_UI_MainView_Bible.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.stageEditor = Analytics_UI_MainView_StageEditor.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.themeEditor = Analytics_UI_MainView_ThemeEditor.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.copyrightEditor = Analytics_UI_MainView_CopyrightEditor.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.propsEditor = Analytics_UI_MainView_PropsEditor.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.maskEditor = Analytics_UI_MainView_MaskEditor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView {
    return {
      show: isSet(object.show) ? Analytics_UI_MainView_Show.fromJSON(object.show) : undefined,
      presentationEditor: isSet(object.presentationEditor)
        ? Analytics_UI_MainView_PresentationEditor.fromJSON(object.presentationEditor)
        : undefined,
      reflowEditor: isSet(object.reflowEditor)
        ? Analytics_UI_MainView_ReflowEditor.fromJSON(object.reflowEditor)
        : undefined,
      bible: isSet(object.bible) ? Analytics_UI_MainView_Bible.fromJSON(object.bible) : undefined,
      stageEditor: isSet(object.stageEditor)
        ? Analytics_UI_MainView_StageEditor.fromJSON(object.stageEditor)
        : undefined,
      themeEditor: isSet(object.themeEditor)
        ? Analytics_UI_MainView_ThemeEditor.fromJSON(object.themeEditor)
        : undefined,
      copyrightEditor: isSet(object.copyrightEditor)
        ? Analytics_UI_MainView_CopyrightEditor.fromJSON(object.copyrightEditor)
        : undefined,
      propsEditor: isSet(object.propsEditor)
        ? Analytics_UI_MainView_PropsEditor.fromJSON(object.propsEditor)
        : undefined,
      maskEditor: isSet(object.maskEditor) ? Analytics_UI_MainView_MaskEditor.fromJSON(object.maskEditor) : undefined,
    };
  },

  toJSON(message: Analytics_UI_MainView): unknown {
    const obj: any = {};
    message.show !== undefined &&
      (obj.show = message.show ? Analytics_UI_MainView_Show.toJSON(message.show) : undefined);
    message.presentationEditor !== undefined && (obj.presentationEditor = message.presentationEditor
      ? Analytics_UI_MainView_PresentationEditor.toJSON(message.presentationEditor)
      : undefined);
    message.reflowEditor !== undefined && (obj.reflowEditor = message.reflowEditor
      ? Analytics_UI_MainView_ReflowEditor.toJSON(message.reflowEditor)
      : undefined);
    message.bible !== undefined &&
      (obj.bible = message.bible ? Analytics_UI_MainView_Bible.toJSON(message.bible) : undefined);
    message.stageEditor !== undefined &&
      (obj.stageEditor = message.stageEditor
        ? Analytics_UI_MainView_StageEditor.toJSON(message.stageEditor)
        : undefined);
    message.themeEditor !== undefined &&
      (obj.themeEditor = message.themeEditor
        ? Analytics_UI_MainView_ThemeEditor.toJSON(message.themeEditor)
        : undefined);
    message.copyrightEditor !== undefined && (obj.copyrightEditor = message.copyrightEditor
      ? Analytics_UI_MainView_CopyrightEditor.toJSON(message.copyrightEditor)
      : undefined);
    message.propsEditor !== undefined &&
      (obj.propsEditor = message.propsEditor
        ? Analytics_UI_MainView_PropsEditor.toJSON(message.propsEditor)
        : undefined);
    message.maskEditor !== undefined &&
      (obj.maskEditor = message.maskEditor ? Analytics_UI_MainView_MaskEditor.toJSON(message.maskEditor) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView>, I>>(base?: I): Analytics_UI_MainView {
    return Analytics_UI_MainView.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView>, I>>(object: I): Analytics_UI_MainView {
    const message = createBaseAnalytics_UI_MainView();
    message.show = (object.show !== undefined && object.show !== null)
      ? Analytics_UI_MainView_Show.fromPartial(object.show)
      : undefined;
    message.presentationEditor = (object.presentationEditor !== undefined && object.presentationEditor !== null)
      ? Analytics_UI_MainView_PresentationEditor.fromPartial(object.presentationEditor)
      : undefined;
    message.reflowEditor = (object.reflowEditor !== undefined && object.reflowEditor !== null)
      ? Analytics_UI_MainView_ReflowEditor.fromPartial(object.reflowEditor)
      : undefined;
    message.bible = (object.bible !== undefined && object.bible !== null)
      ? Analytics_UI_MainView_Bible.fromPartial(object.bible)
      : undefined;
    message.stageEditor = (object.stageEditor !== undefined && object.stageEditor !== null)
      ? Analytics_UI_MainView_StageEditor.fromPartial(object.stageEditor)
      : undefined;
    message.themeEditor = (object.themeEditor !== undefined && object.themeEditor !== null)
      ? Analytics_UI_MainView_ThemeEditor.fromPartial(object.themeEditor)
      : undefined;
    message.copyrightEditor = (object.copyrightEditor !== undefined && object.copyrightEditor !== null)
      ? Analytics_UI_MainView_CopyrightEditor.fromPartial(object.copyrightEditor)
      : undefined;
    message.propsEditor = (object.propsEditor !== undefined && object.propsEditor !== null)
      ? Analytics_UI_MainView_PropsEditor.fromPartial(object.propsEditor)
      : undefined;
    message.maskEditor = (object.maskEditor !== undefined && object.maskEditor !== null)
      ? Analytics_UI_MainView_MaskEditor.fromPartial(object.maskEditor)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Show(): Analytics_UI_MainView_Show {
  return { shown: undefined };
}

export const Analytics_UI_MainView_Show = {
  encode(message: Analytics_UI_MainView_Show, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_Show_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Show {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Show();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_Show_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Show {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_Show_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_Show): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_Show_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Show>, I>>(base?: I): Analytics_UI_MainView_Show {
    return Analytics_UI_MainView_Show.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Show>, I>>(object: I): Analytics_UI_MainView_Show {
    const message = createBaseAnalytics_UI_MainView_Show();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_Show_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Show_Shown(): Analytics_UI_MainView_Show_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_Show_Shown = {
  encode(message: Analytics_UI_MainView_Show_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Show_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Show_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Show_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_Show_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_Show_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_Show_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Show_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Show_Shown {
    return Analytics_UI_MainView_Show_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Show_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_Show_Shown {
    const message = createBaseAnalytics_UI_MainView_Show_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_PresentationEditor(): Analytics_UI_MainView_PresentationEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_PresentationEditor = {
  encode(message: Analytics_UI_MainView_PresentationEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_PresentationEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_PresentationEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_PresentationEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_PresentationEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_PresentationEditor {
    return {
      shown: isSet(object.shown) ? Analytics_UI_MainView_PresentationEditor_Shown.fromJSON(object.shown) : undefined,
    };
  },

  toJSON(message: Analytics_UI_MainView_PresentationEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_PresentationEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_PresentationEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_PresentationEditor {
    return Analytics_UI_MainView_PresentationEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_PresentationEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_PresentationEditor {
    const message = createBaseAnalytics_UI_MainView_PresentationEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_PresentationEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_PresentationEditor_Shown(): Analytics_UI_MainView_PresentationEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_PresentationEditor_Shown = {
  encode(
    message: Analytics_UI_MainView_PresentationEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_PresentationEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_PresentationEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_PresentationEditor_Shown {
    return {
      source: isSet(object.source) ? analytics_UI_MainView_PresentationEditor_Shown_SourceFromJSON(object.source) : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_PresentationEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = analytics_UI_MainView_PresentationEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_PresentationEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_PresentationEditor_Shown {
    return Analytics_UI_MainView_PresentationEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_PresentationEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_PresentationEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_PresentationEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_ReflowEditor(): Analytics_UI_MainView_ReflowEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_ReflowEditor = {
  encode(message: Analytics_UI_MainView_ReflowEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_ReflowEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_ReflowEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_ReflowEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_ReflowEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_ReflowEditor {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_ReflowEditor_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_ReflowEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_ReflowEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_ReflowEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_ReflowEditor {
    return Analytics_UI_MainView_ReflowEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_ReflowEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_ReflowEditor {
    const message = createBaseAnalytics_UI_MainView_ReflowEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_ReflowEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_ReflowEditor_Shown(): Analytics_UI_MainView_ReflowEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_ReflowEditor_Shown = {
  encode(message: Analytics_UI_MainView_ReflowEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_ReflowEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_ReflowEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_ReflowEditor_Shown {
    return {
      source: isSet(object.source) ? analytics_UI_MainView_ReflowEditor_Shown_SourceFromJSON(object.source) : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_ReflowEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = analytics_UI_MainView_ReflowEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_ReflowEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_ReflowEditor_Shown {
    return Analytics_UI_MainView_ReflowEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_ReflowEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_ReflowEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_ReflowEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible(): Analytics_UI_MainView_Bible {
  return {
    shown: undefined,
    trigger: undefined,
    generateSlides: undefined,
    generateNext: undefined,
    generatePrevious: undefined,
    saveSlides: undefined,
    lookup: undefined,
    install: undefined,
    remove: undefined,
    startup: undefined,
  };
}

export const Analytics_UI_MainView_Bible = {
  encode(message: Analytics_UI_MainView_Bible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_Bible_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.trigger !== undefined) {
      Analytics_UI_MainView_Bible_Trigger.encode(message.trigger, writer.uint32(18).fork()).ldelim();
    }
    if (message.generateSlides !== undefined) {
      Analytics_UI_MainView_Bible_GenerateSlides.encode(message.generateSlides, writer.uint32(26).fork()).ldelim();
    }
    if (message.generateNext !== undefined) {
      Analytics_UI_MainView_Bible_GenerateNext.encode(message.generateNext, writer.uint32(34).fork()).ldelim();
    }
    if (message.generatePrevious !== undefined) {
      Analytics_UI_MainView_Bible_GeneratePrevious.encode(message.generatePrevious, writer.uint32(42).fork()).ldelim();
    }
    if (message.saveSlides !== undefined) {
      Analytics_UI_MainView_Bible_SaveSlides.encode(message.saveSlides, writer.uint32(50).fork()).ldelim();
    }
    if (message.lookup !== undefined) {
      Analytics_UI_MainView_Bible_Lookup.encode(message.lookup, writer.uint32(58).fork()).ldelim();
    }
    if (message.install !== undefined) {
      Analytics_UI_MainView_Bible_BibleCount.encode(message.install, writer.uint32(66).fork()).ldelim();
    }
    if (message.remove !== undefined) {
      Analytics_UI_MainView_Bible_BibleCount.encode(message.remove, writer.uint32(74).fork()).ldelim();
    }
    if (message.startup !== undefined) {
      Analytics_UI_MainView_Bible_BibleCount.encode(message.startup, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_Bible_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.trigger = Analytics_UI_MainView_Bible_Trigger.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.generateSlides = Analytics_UI_MainView_Bible_GenerateSlides.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.generateNext = Analytics_UI_MainView_Bible_GenerateNext.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.generatePrevious = Analytics_UI_MainView_Bible_GeneratePrevious.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.saveSlides = Analytics_UI_MainView_Bible_SaveSlides.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.lookup = Analytics_UI_MainView_Bible_Lookup.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.install = Analytics_UI_MainView_Bible_BibleCount.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.remove = Analytics_UI_MainView_Bible_BibleCount.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.startup = Analytics_UI_MainView_Bible_BibleCount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible {
    return {
      shown: isSet(object.shown) ? Analytics_UI_MainView_Bible_Shown.fromJSON(object.shown) : undefined,
      trigger: isSet(object.trigger) ? Analytics_UI_MainView_Bible_Trigger.fromJSON(object.trigger) : undefined,
      generateSlides: isSet(object.generateSlides)
        ? Analytics_UI_MainView_Bible_GenerateSlides.fromJSON(object.generateSlides)
        : undefined,
      generateNext: isSet(object.generateNext)
        ? Analytics_UI_MainView_Bible_GenerateNext.fromJSON(object.generateNext)
        : undefined,
      generatePrevious: isSet(object.generatePrevious)
        ? Analytics_UI_MainView_Bible_GeneratePrevious.fromJSON(object.generatePrevious)
        : undefined,
      saveSlides: isSet(object.saveSlides)
        ? Analytics_UI_MainView_Bible_SaveSlides.fromJSON(object.saveSlides)
        : undefined,
      lookup: isSet(object.lookup) ? Analytics_UI_MainView_Bible_Lookup.fromJSON(object.lookup) : undefined,
      install: isSet(object.install) ? Analytics_UI_MainView_Bible_BibleCount.fromJSON(object.install) : undefined,
      remove: isSet(object.remove) ? Analytics_UI_MainView_Bible_BibleCount.fromJSON(object.remove) : undefined,
      startup: isSet(object.startup) ? Analytics_UI_MainView_Bible_BibleCount.fromJSON(object.startup) : undefined,
    };
  },

  toJSON(message: Analytics_UI_MainView_Bible): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_Bible_Shown.toJSON(message.shown) : undefined);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger ? Analytics_UI_MainView_Bible_Trigger.toJSON(message.trigger) : undefined);
    message.generateSlides !== undefined && (obj.generateSlides = message.generateSlides
      ? Analytics_UI_MainView_Bible_GenerateSlides.toJSON(message.generateSlides)
      : undefined);
    message.generateNext !== undefined && (obj.generateNext = message.generateNext
      ? Analytics_UI_MainView_Bible_GenerateNext.toJSON(message.generateNext)
      : undefined);
    message.generatePrevious !== undefined && (obj.generatePrevious = message.generatePrevious
      ? Analytics_UI_MainView_Bible_GeneratePrevious.toJSON(message.generatePrevious)
      : undefined);
    message.saveSlides !== undefined && (obj.saveSlides = message.saveSlides
      ? Analytics_UI_MainView_Bible_SaveSlides.toJSON(message.saveSlides)
      : undefined);
    message.lookup !== undefined &&
      (obj.lookup = message.lookup ? Analytics_UI_MainView_Bible_Lookup.toJSON(message.lookup) : undefined);
    message.install !== undefined &&
      (obj.install = message.install ? Analytics_UI_MainView_Bible_BibleCount.toJSON(message.install) : undefined);
    message.remove !== undefined &&
      (obj.remove = message.remove ? Analytics_UI_MainView_Bible_BibleCount.toJSON(message.remove) : undefined);
    message.startup !== undefined &&
      (obj.startup = message.startup ? Analytics_UI_MainView_Bible_BibleCount.toJSON(message.startup) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible>, I>>(base?: I): Analytics_UI_MainView_Bible {
    return Analytics_UI_MainView_Bible.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible>, I>>(object: I): Analytics_UI_MainView_Bible {
    const message = createBaseAnalytics_UI_MainView_Bible();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_Bible_Shown.fromPartial(object.shown)
      : undefined;
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? Analytics_UI_MainView_Bible_Trigger.fromPartial(object.trigger)
      : undefined;
    message.generateSlides = (object.generateSlides !== undefined && object.generateSlides !== null)
      ? Analytics_UI_MainView_Bible_GenerateSlides.fromPartial(object.generateSlides)
      : undefined;
    message.generateNext = (object.generateNext !== undefined && object.generateNext !== null)
      ? Analytics_UI_MainView_Bible_GenerateNext.fromPartial(object.generateNext)
      : undefined;
    message.generatePrevious = (object.generatePrevious !== undefined && object.generatePrevious !== null)
      ? Analytics_UI_MainView_Bible_GeneratePrevious.fromPartial(object.generatePrevious)
      : undefined;
    message.saveSlides = (object.saveSlides !== undefined && object.saveSlides !== null)
      ? Analytics_UI_MainView_Bible_SaveSlides.fromPartial(object.saveSlides)
      : undefined;
    message.lookup = (object.lookup !== undefined && object.lookup !== null)
      ? Analytics_UI_MainView_Bible_Lookup.fromPartial(object.lookup)
      : undefined;
    message.install = (object.install !== undefined && object.install !== null)
      ? Analytics_UI_MainView_Bible_BibleCount.fromPartial(object.install)
      : undefined;
    message.remove = (object.remove !== undefined && object.remove !== null)
      ? Analytics_UI_MainView_Bible_BibleCount.fromPartial(object.remove)
      : undefined;
    message.startup = (object.startup !== undefined && object.startup !== null)
      ? Analytics_UI_MainView_Bible_BibleCount.fromPartial(object.startup)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_Shown(): Analytics_UI_MainView_Bible_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_Bible_Shown = {
  encode(message: Analytics_UI_MainView_Bible_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_Bible_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_Bible_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_Bible_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_Shown {
    return Analytics_UI_MainView_Bible_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_Shown {
    const message = createBaseAnalytics_UI_MainView_Bible_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_Trigger(): Analytics_UI_MainView_Bible_Trigger {
  return { location: 0 };
}

export const Analytics_UI_MainView_Bible_Trigger = {
  encode(message: Analytics_UI_MainView_Bible_Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_Trigger {
    return { location: isSet(object.location) ? analytics_UI_MainView_Bible_LocationFromJSON(object.location) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_Bible_Trigger): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = analytics_UI_MainView_Bible_LocationToJSON(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Trigger>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_Trigger {
    return Analytics_UI_MainView_Bible_Trigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Trigger>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_Trigger {
    const message = createBaseAnalytics_UI_MainView_Bible_Trigger();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_GenerateSlides(): Analytics_UI_MainView_Bible_GenerateSlides {
  return {
    translationCount: 0,
    slideCount: 0,
    verseLocation: 0,
    referenceLocation: 0,
    showVerseNumbers: false,
    breakNewVerse: false,
    displayTranslation: false,
    preserveFontColor: false,
    referenceStyle: 0,
  };
}

export const Analytics_UI_MainView_Bible_GenerateSlides = {
  encode(message: Analytics_UI_MainView_Bible_GenerateSlides, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.translationCount !== 0) {
      writer.uint32(8).int32(message.translationCount);
    }
    if (message.slideCount !== 0) {
      writer.uint32(16).int32(message.slideCount);
    }
    if (message.verseLocation !== 0) {
      writer.uint32(24).int32(message.verseLocation);
    }
    if (message.referenceLocation !== 0) {
      writer.uint32(32).int32(message.referenceLocation);
    }
    if (message.showVerseNumbers === true) {
      writer.uint32(40).bool(message.showVerseNumbers);
    }
    if (message.breakNewVerse === true) {
      writer.uint32(48).bool(message.breakNewVerse);
    }
    if (message.displayTranslation === true) {
      writer.uint32(56).bool(message.displayTranslation);
    }
    if (message.preserveFontColor === true) {
      writer.uint32(64).bool(message.preserveFontColor);
    }
    if (message.referenceStyle !== 0) {
      writer.uint32(72).int32(message.referenceStyle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_GenerateSlides {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_GenerateSlides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.translationCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.slideCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.verseLocation = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.referenceLocation = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.showVerseNumbers = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.breakNewVerse = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.displayTranslation = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.preserveFontColor = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.referenceStyle = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_GenerateSlides {
    return {
      translationCount: isSet(object.translationCount) ? Number(object.translationCount) : 0,
      slideCount: isSet(object.slideCount) ? Number(object.slideCount) : 0,
      verseLocation: isSet(object.verseLocation)
        ? analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(object.verseLocation)
        : 0,
      referenceLocation: isSet(object.referenceLocation)
        ? analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(object.referenceLocation)
        : 0,
      showVerseNumbers: isSet(object.showVerseNumbers) ? Boolean(object.showVerseNumbers) : false,
      breakNewVerse: isSet(object.breakNewVerse) ? Boolean(object.breakNewVerse) : false,
      displayTranslation: isSet(object.displayTranslation) ? Boolean(object.displayTranslation) : false,
      preserveFontColor: isSet(object.preserveFontColor) ? Boolean(object.preserveFontColor) : false,
      referenceStyle: isSet(object.referenceStyle)
        ? analytics_UI_MainView_Bible_GenerateSlides_ReferenceTypeFromJSON(object.referenceStyle)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_Bible_GenerateSlides): unknown {
    const obj: any = {};
    message.translationCount !== undefined && (obj.translationCount = Math.round(message.translationCount));
    message.slideCount !== undefined && (obj.slideCount = Math.round(message.slideCount));
    message.verseLocation !== undefined &&
      (obj.verseLocation = analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(message.verseLocation));
    message.referenceLocation !== undefined &&
      (obj.referenceLocation = analytics_UI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(
        message.referenceLocation,
      ));
    message.showVerseNumbers !== undefined && (obj.showVerseNumbers = message.showVerseNumbers);
    message.breakNewVerse !== undefined && (obj.breakNewVerse = message.breakNewVerse);
    message.displayTranslation !== undefined && (obj.displayTranslation = message.displayTranslation);
    message.preserveFontColor !== undefined && (obj.preserveFontColor = message.preserveFontColor);
    message.referenceStyle !== undefined &&
      (obj.referenceStyle = analytics_UI_MainView_Bible_GenerateSlides_ReferenceTypeToJSON(message.referenceStyle));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GenerateSlides>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_GenerateSlides {
    return Analytics_UI_MainView_Bible_GenerateSlides.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GenerateSlides>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_GenerateSlides {
    const message = createBaseAnalytics_UI_MainView_Bible_GenerateSlides();
    message.translationCount = object.translationCount ?? 0;
    message.slideCount = object.slideCount ?? 0;
    message.verseLocation = object.verseLocation ?? 0;
    message.referenceLocation = object.referenceLocation ?? 0;
    message.showVerseNumbers = object.showVerseNumbers ?? false;
    message.breakNewVerse = object.breakNewVerse ?? false;
    message.displayTranslation = object.displayTranslation ?? false;
    message.preserveFontColor = object.preserveFontColor ?? false;
    message.referenceStyle = object.referenceStyle ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_GenerateNext(): Analytics_UI_MainView_Bible_GenerateNext {
  return { location: 0 };
}

export const Analytics_UI_MainView_Bible_GenerateNext = {
  encode(message: Analytics_UI_MainView_Bible_GenerateNext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_GenerateNext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_GenerateNext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_GenerateNext {
    return { location: isSet(object.location) ? analytics_UI_MainView_Bible_LocationFromJSON(object.location) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_Bible_GenerateNext): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = analytics_UI_MainView_Bible_LocationToJSON(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GenerateNext>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_GenerateNext {
    return Analytics_UI_MainView_Bible_GenerateNext.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GenerateNext>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_GenerateNext {
    const message = createBaseAnalytics_UI_MainView_Bible_GenerateNext();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_GeneratePrevious(): Analytics_UI_MainView_Bible_GeneratePrevious {
  return { location: 0 };
}

export const Analytics_UI_MainView_Bible_GeneratePrevious = {
  encode(message: Analytics_UI_MainView_Bible_GeneratePrevious, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(16).int32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_GeneratePrevious {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_GeneratePrevious();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 16) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_GeneratePrevious {
    return { location: isSet(object.location) ? analytics_UI_MainView_Bible_LocationFromJSON(object.location) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_Bible_GeneratePrevious): unknown {
    const obj: any = {};
    message.location !== undefined && (obj.location = analytics_UI_MainView_Bible_LocationToJSON(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GeneratePrevious>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_GeneratePrevious {
    return Analytics_UI_MainView_Bible_GeneratePrevious.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_GeneratePrevious>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_GeneratePrevious {
    const message = createBaseAnalytics_UI_MainView_Bible_GeneratePrevious();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_SaveSlides(): Analytics_UI_MainView_Bible_SaveSlides {
  return { destination: 0 };
}

export const Analytics_UI_MainView_Bible_SaveSlides = {
  encode(message: Analytics_UI_MainView_Bible_SaveSlides, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destination !== 0) {
      writer.uint32(8).int32(message.destination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_SaveSlides {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_SaveSlides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_SaveSlides {
    return {
      destination: isSet(object.destination)
        ? analytics_UI_MainView_Bible_SaveSlides_SlideDestinationFromJSON(object.destination)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_Bible_SaveSlides): unknown {
    const obj: any = {};
    message.destination !== undefined &&
      (obj.destination = analytics_UI_MainView_Bible_SaveSlides_SlideDestinationToJSON(message.destination));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_SaveSlides>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_SaveSlides {
    return Analytics_UI_MainView_Bible_SaveSlides.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_SaveSlides>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_SaveSlides {
    const message = createBaseAnalytics_UI_MainView_Bible_SaveSlides();
    message.destination = object.destination ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_Lookup(): Analytics_UI_MainView_Bible_Lookup {
  return { location: 0 };
}

export const Analytics_UI_MainView_Bible_Lookup = {
  encode(message: Analytics_UI_MainView_Bible_Lookup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(8).int32(message.location);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_Lookup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_Lookup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.location = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_Lookup {
    return {
      location: isSet(object.location) ? analytics_UI_MainView_Bible_Lookup_LookupLocationFromJSON(object.location) : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_Bible_Lookup): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = analytics_UI_MainView_Bible_Lookup_LookupLocationToJSON(message.location));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Lookup>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_Lookup {
    return Analytics_UI_MainView_Bible_Lookup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_Lookup>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_Lookup {
    const message = createBaseAnalytics_UI_MainView_Bible_Lookup();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_Bible_BibleCount(): Analytics_UI_MainView_Bible_BibleCount {
  return { freeInstalledCount: 0, purchasedInstalledCount: 0 };
}

export const Analytics_UI_MainView_Bible_BibleCount = {
  encode(message: Analytics_UI_MainView_Bible_BibleCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.freeInstalledCount !== 0) {
      writer.uint32(8).int32(message.freeInstalledCount);
    }
    if (message.purchasedInstalledCount !== 0) {
      writer.uint32(16).int32(message.purchasedInstalledCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_Bible_BibleCount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_Bible_BibleCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.freeInstalledCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.purchasedInstalledCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_Bible_BibleCount {
    return {
      freeInstalledCount: isSet(object.freeInstalledCount) ? Number(object.freeInstalledCount) : 0,
      purchasedInstalledCount: isSet(object.purchasedInstalledCount) ? Number(object.purchasedInstalledCount) : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_Bible_BibleCount): unknown {
    const obj: any = {};
    message.freeInstalledCount !== undefined && (obj.freeInstalledCount = Math.round(message.freeInstalledCount));
    message.purchasedInstalledCount !== undefined &&
      (obj.purchasedInstalledCount = Math.round(message.purchasedInstalledCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_BibleCount>, I>>(
    base?: I,
  ): Analytics_UI_MainView_Bible_BibleCount {
    return Analytics_UI_MainView_Bible_BibleCount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_Bible_BibleCount>, I>>(
    object: I,
  ): Analytics_UI_MainView_Bible_BibleCount {
    const message = createBaseAnalytics_UI_MainView_Bible_BibleCount();
    message.freeInstalledCount = object.freeInstalledCount ?? 0;
    message.purchasedInstalledCount = object.purchasedInstalledCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_StageEditor(): Analytics_UI_MainView_StageEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_StageEditor = {
  encode(message: Analytics_UI_MainView_StageEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_StageEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_StageEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_StageEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_StageEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_StageEditor {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_StageEditor_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_StageEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_StageEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_StageEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_StageEditor {
    return Analytics_UI_MainView_StageEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_StageEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_StageEditor {
    const message = createBaseAnalytics_UI_MainView_StageEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_StageEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_StageEditor_Shown(): Analytics_UI_MainView_StageEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_StageEditor_Shown = {
  encode(message: Analytics_UI_MainView_StageEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_StageEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_StageEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_StageEditor_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_StageEditor_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_StageEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_StageEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_StageEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_StageEditor_Shown {
    return Analytics_UI_MainView_StageEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_StageEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_StageEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_StageEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_ThemeEditor(): Analytics_UI_MainView_ThemeEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_ThemeEditor = {
  encode(message: Analytics_UI_MainView_ThemeEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_ThemeEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_ThemeEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_ThemeEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_ThemeEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_ThemeEditor {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_ThemeEditor_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_ThemeEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_ThemeEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_ThemeEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_ThemeEditor {
    return Analytics_UI_MainView_ThemeEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_ThemeEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_ThemeEditor {
    const message = createBaseAnalytics_UI_MainView_ThemeEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_ThemeEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_ThemeEditor_Shown(): Analytics_UI_MainView_ThemeEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_ThemeEditor_Shown = {
  encode(message: Analytics_UI_MainView_ThemeEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_ThemeEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_ThemeEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_ThemeEditor_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_ThemeEditor_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_ThemeEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_ThemeEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_ThemeEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_ThemeEditor_Shown {
    return Analytics_UI_MainView_ThemeEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_ThemeEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_ThemeEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_ThemeEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_CopyrightEditor(): Analytics_UI_MainView_CopyrightEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_CopyrightEditor = {
  encode(message: Analytics_UI_MainView_CopyrightEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_CopyrightEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_CopyrightEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_CopyrightEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_CopyrightEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_CopyrightEditor {
    return {
      shown: isSet(object.shown) ? Analytics_UI_MainView_CopyrightEditor_Shown.fromJSON(object.shown) : undefined,
    };
  },

  toJSON(message: Analytics_UI_MainView_CopyrightEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_CopyrightEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_CopyrightEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_CopyrightEditor {
    return Analytics_UI_MainView_CopyrightEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_CopyrightEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_CopyrightEditor {
    const message = createBaseAnalytics_UI_MainView_CopyrightEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_CopyrightEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_CopyrightEditor_Shown(): Analytics_UI_MainView_CopyrightEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_CopyrightEditor_Shown = {
  encode(message: Analytics_UI_MainView_CopyrightEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_CopyrightEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_CopyrightEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_CopyrightEditor_Shown {
    return {
      source: isSet(object.source) ? analytics_UI_MainView_CopyrightEditor_Shown_SourceFromJSON(object.source) : 0,
    };
  },

  toJSON(message: Analytics_UI_MainView_CopyrightEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = analytics_UI_MainView_CopyrightEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_CopyrightEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_CopyrightEditor_Shown {
    return Analytics_UI_MainView_CopyrightEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_CopyrightEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_CopyrightEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_CopyrightEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_PropsEditor(): Analytics_UI_MainView_PropsEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_PropsEditor = {
  encode(message: Analytics_UI_MainView_PropsEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_PropsEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_PropsEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_PropsEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_PropsEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_PropsEditor {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_PropsEditor_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_PropsEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_PropsEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_PropsEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_PropsEditor {
    return Analytics_UI_MainView_PropsEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_PropsEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_PropsEditor {
    const message = createBaseAnalytics_UI_MainView_PropsEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_PropsEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_PropsEditor_Shown(): Analytics_UI_MainView_PropsEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_PropsEditor_Shown = {
  encode(message: Analytics_UI_MainView_PropsEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_PropsEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_PropsEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_PropsEditor_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_PropsEditor_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_PropsEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_PropsEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_PropsEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_PropsEditor_Shown {
    return Analytics_UI_MainView_PropsEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_PropsEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_PropsEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_PropsEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_MaskEditor(): Analytics_UI_MainView_MaskEditor {
  return { shown: undefined };
}

export const Analytics_UI_MainView_MaskEditor = {
  encode(message: Analytics_UI_MainView_MaskEditor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_MainView_MaskEditor_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_MaskEditor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_MaskEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_MainView_MaskEditor_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_MaskEditor {
    return { shown: isSet(object.shown) ? Analytics_UI_MainView_MaskEditor_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_MainView_MaskEditor): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_MainView_MaskEditor_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_MaskEditor>, I>>(
    base?: I,
  ): Analytics_UI_MainView_MaskEditor {
    return Analytics_UI_MainView_MaskEditor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_MaskEditor>, I>>(
    object: I,
  ): Analytics_UI_MainView_MaskEditor {
    const message = createBaseAnalytics_UI_MainView_MaskEditor();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_MainView_MaskEditor_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_MainView_MaskEditor_Shown(): Analytics_UI_MainView_MaskEditor_Shown {
  return { source: 0 };
}

export const Analytics_UI_MainView_MaskEditor_Shown = {
  encode(message: Analytics_UI_MainView_MaskEditor_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_MainView_MaskEditor_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_MainView_MaskEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_MainView_MaskEditor_Shown {
    return { source: isSet(object.source) ? analytics_UI_MainView_MaskEditor_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_MainView_MaskEditor_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_MainView_MaskEditor_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_MainView_MaskEditor_Shown>, I>>(
    base?: I,
  ): Analytics_UI_MainView_MaskEditor_Shown {
    return Analytics_UI_MainView_MaskEditor_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_MainView_MaskEditor_Shown>, I>>(
    object: I,
  ): Analytics_UI_MainView_MaskEditor_Shown {
    const message = createBaseAnalytics_UI_MainView_MaskEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Looks(): Analytics_UI_Looks {
  return { shown: undefined };
}

export const Analytics_UI_Looks = {
  encode(message: Analytics_UI_Looks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_Looks_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Looks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Looks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_Looks_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Looks {
    return { shown: isSet(object.shown) ? Analytics_UI_Looks_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_Looks): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_Looks_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Looks>, I>>(base?: I): Analytics_UI_Looks {
    return Analytics_UI_Looks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Looks>, I>>(object: I): Analytics_UI_Looks {
    const message = createBaseAnalytics_UI_Looks();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_Looks_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Looks_Shown(): Analytics_UI_Looks_Shown {
  return { source: 0 };
}

export const Analytics_UI_Looks_Shown = {
  encode(message: Analytics_UI_Looks_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Looks_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Looks_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Looks_Shown {
    return { source: isSet(object.source) ? analytics_UI_Looks_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_Looks_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_Looks_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Looks_Shown>, I>>(base?: I): Analytics_UI_Looks_Shown {
    return Analytics_UI_Looks_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Looks_Shown>, I>>(object: I): Analytics_UI_Looks_Shown {
    const message = createBaseAnalytics_UI_Looks_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_ScreenConfiguration(): Analytics_UI_ScreenConfiguration {
  return { shown: undefined };
}

export const Analytics_UI_ScreenConfiguration = {
  encode(message: Analytics_UI_ScreenConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_ScreenConfiguration_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ScreenConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ScreenConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_ScreenConfiguration_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ScreenConfiguration {
    return { shown: isSet(object.shown) ? Analytics_UI_ScreenConfiguration_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_ScreenConfiguration): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_ScreenConfiguration_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ScreenConfiguration>, I>>(
    base?: I,
  ): Analytics_UI_ScreenConfiguration {
    return Analytics_UI_ScreenConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ScreenConfiguration>, I>>(
    object: I,
  ): Analytics_UI_ScreenConfiguration {
    const message = createBaseAnalytics_UI_ScreenConfiguration();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_ScreenConfiguration_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_ScreenConfiguration_Shown(): Analytics_UI_ScreenConfiguration_Shown {
  return { source: 0 };
}

export const Analytics_UI_ScreenConfiguration_Shown = {
  encode(message: Analytics_UI_ScreenConfiguration_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ScreenConfiguration_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ScreenConfiguration_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ScreenConfiguration_Shown {
    return { source: isSet(object.source) ? analytics_UI_ScreenConfiguration_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_ScreenConfiguration_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_ScreenConfiguration_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ScreenConfiguration_Shown>, I>>(
    base?: I,
  ): Analytics_UI_ScreenConfiguration_Shown {
    return Analytics_UI_ScreenConfiguration_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ScreenConfiguration_Shown>, I>>(
    object: I,
  ): Analytics_UI_ScreenConfiguration_Shown {
    const message = createBaseAnalytics_UI_ScreenConfiguration_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight(): Analytics_UI_LowerRight {
  return {
    timers: undefined,
    messages: undefined,
    props: undefined,
    stage: undefined,
    audioBin: undefined,
    macros: undefined,
  };
}

export const Analytics_UI_LowerRight = {
  encode(message: Analytics_UI_LowerRight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timers !== undefined) {
      Analytics_UI_LowerRight_Timers.encode(message.timers, writer.uint32(10).fork()).ldelim();
    }
    if (message.messages !== undefined) {
      Analytics_UI_LowerRight_Messages.encode(message.messages, writer.uint32(18).fork()).ldelim();
    }
    if (message.props !== undefined) {
      Analytics_UI_LowerRight_Props.encode(message.props, writer.uint32(26).fork()).ldelim();
    }
    if (message.stage !== undefined) {
      Analytics_UI_LowerRight_Stage.encode(message.stage, writer.uint32(34).fork()).ldelim();
    }
    if (message.audioBin !== undefined) {
      Analytics_UI_LowerRight_AudioBin.encode(message.audioBin, writer.uint32(42).fork()).ldelim();
    }
    if (message.macros !== undefined) {
      Analytics_UI_LowerRight_Macros.encode(message.macros, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.timers = Analytics_UI_LowerRight_Timers.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.messages = Analytics_UI_LowerRight_Messages.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.props = Analytics_UI_LowerRight_Props.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.stage = Analytics_UI_LowerRight_Stage.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.audioBin = Analytics_UI_LowerRight_AudioBin.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.macros = Analytics_UI_LowerRight_Macros.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight {
    return {
      timers: isSet(object.timers) ? Analytics_UI_LowerRight_Timers.fromJSON(object.timers) : undefined,
      messages: isSet(object.messages) ? Analytics_UI_LowerRight_Messages.fromJSON(object.messages) : undefined,
      props: isSet(object.props) ? Analytics_UI_LowerRight_Props.fromJSON(object.props) : undefined,
      stage: isSet(object.stage) ? Analytics_UI_LowerRight_Stage.fromJSON(object.stage) : undefined,
      audioBin: isSet(object.audioBin) ? Analytics_UI_LowerRight_AudioBin.fromJSON(object.audioBin) : undefined,
      macros: isSet(object.macros) ? Analytics_UI_LowerRight_Macros.fromJSON(object.macros) : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight): unknown {
    const obj: any = {};
    message.timers !== undefined &&
      (obj.timers = message.timers ? Analytics_UI_LowerRight_Timers.toJSON(message.timers) : undefined);
    message.messages !== undefined &&
      (obj.messages = message.messages ? Analytics_UI_LowerRight_Messages.toJSON(message.messages) : undefined);
    message.props !== undefined &&
      (obj.props = message.props ? Analytics_UI_LowerRight_Props.toJSON(message.props) : undefined);
    message.stage !== undefined &&
      (obj.stage = message.stage ? Analytics_UI_LowerRight_Stage.toJSON(message.stage) : undefined);
    message.audioBin !== undefined &&
      (obj.audioBin = message.audioBin ? Analytics_UI_LowerRight_AudioBin.toJSON(message.audioBin) : undefined);
    message.macros !== undefined &&
      (obj.macros = message.macros ? Analytics_UI_LowerRight_Macros.toJSON(message.macros) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight>, I>>(base?: I): Analytics_UI_LowerRight {
    return Analytics_UI_LowerRight.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight>, I>>(object: I): Analytics_UI_LowerRight {
    const message = createBaseAnalytics_UI_LowerRight();
    message.timers = (object.timers !== undefined && object.timers !== null)
      ? Analytics_UI_LowerRight_Timers.fromPartial(object.timers)
      : undefined;
    message.messages = (object.messages !== undefined && object.messages !== null)
      ? Analytics_UI_LowerRight_Messages.fromPartial(object.messages)
      : undefined;
    message.props = (object.props !== undefined && object.props !== null)
      ? Analytics_UI_LowerRight_Props.fromPartial(object.props)
      : undefined;
    message.stage = (object.stage !== undefined && object.stage !== null)
      ? Analytics_UI_LowerRight_Stage.fromPartial(object.stage)
      : undefined;
    message.audioBin = (object.audioBin !== undefined && object.audioBin !== null)
      ? Analytics_UI_LowerRight_AudioBin.fromPartial(object.audioBin)
      : undefined;
    message.macros = (object.macros !== undefined && object.macros !== null)
      ? Analytics_UI_LowerRight_Macros.fromPartial(object.macros)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers(): Analytics_UI_LowerRight_Timers {
  return {
    shown: undefined,
    collapse: undefined,
    edit: undefined,
    state: undefined,
    create: undefined,
    delete: undefined,
  };
}

export const Analytics_UI_LowerRight_Timers = {
  encode(message: Analytics_UI_LowerRight_Timers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_LowerRight_Timers_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.collapse !== undefined) {
      Analytics_UI_LowerRight_Timers_Collapse.encode(message.collapse, writer.uint32(18).fork()).ldelim();
    }
    if (message.edit !== undefined) {
      Analytics_UI_LowerRight_Timers_Edit.encode(message.edit, writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== undefined) {
      Analytics_UI_LowerRight_Timers_State.encode(message.state, writer.uint32(34).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_UI_LowerRight_Timers_Create.encode(message.create, writer.uint32(42).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      Analytics_UI_LowerRight_Timers_Delete.encode(message.delete, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_LowerRight_Timers_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.collapse = Analytics_UI_LowerRight_Timers_Collapse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.edit = Analytics_UI_LowerRight_Timers_Edit.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.state = Analytics_UI_LowerRight_Timers_State.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.create = Analytics_UI_LowerRight_Timers_Create.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.delete = Analytics_UI_LowerRight_Timers_Delete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Timers {
    return {
      shown: isSet(object.shown) ? Analytics_UI_LowerRight_Timers_Shown.fromJSON(object.shown) : undefined,
      collapse: isSet(object.collapse) ? Analytics_UI_LowerRight_Timers_Collapse.fromJSON(object.collapse) : undefined,
      edit: isSet(object.edit) ? Analytics_UI_LowerRight_Timers_Edit.fromJSON(object.edit) : undefined,
      state: isSet(object.state) ? Analytics_UI_LowerRight_Timers_State.fromJSON(object.state) : undefined,
      create: isSet(object.create) ? Analytics_UI_LowerRight_Timers_Create.fromJSON(object.create) : undefined,
      delete: isSet(object.delete) ? Analytics_UI_LowerRight_Timers_Delete.fromJSON(object.delete) : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight_Timers): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_LowerRight_Timers_Shown.toJSON(message.shown) : undefined);
    message.collapse !== undefined &&
      (obj.collapse = message.collapse ? Analytics_UI_LowerRight_Timers_Collapse.toJSON(message.collapse) : undefined);
    message.edit !== undefined &&
      (obj.edit = message.edit ? Analytics_UI_LowerRight_Timers_Edit.toJSON(message.edit) : undefined);
    message.state !== undefined &&
      (obj.state = message.state ? Analytics_UI_LowerRight_Timers_State.toJSON(message.state) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_LowerRight_Timers_Create.toJSON(message.create) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? Analytics_UI_LowerRight_Timers_Delete.toJSON(message.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers>, I>>(base?: I): Analytics_UI_LowerRight_Timers {
    return Analytics_UI_LowerRight_Timers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Timers {
    const message = createBaseAnalytics_UI_LowerRight_Timers();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_LowerRight_Timers_Shown.fromPartial(object.shown)
      : undefined;
    message.collapse = (object.collapse !== undefined && object.collapse !== null)
      ? Analytics_UI_LowerRight_Timers_Collapse.fromPartial(object.collapse)
      : undefined;
    message.edit = (object.edit !== undefined && object.edit !== null)
      ? Analytics_UI_LowerRight_Timers_Edit.fromPartial(object.edit)
      : undefined;
    message.state = (object.state !== undefined && object.state !== null)
      ? Analytics_UI_LowerRight_Timers_State.fromPartial(object.state)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_LowerRight_Timers_Create.fromPartial(object.create)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? Analytics_UI_LowerRight_Timers_Delete.fromPartial(object.delete)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_Shown(): Analytics_UI_LowerRight_Timers_Shown {
  return {};
}

export const Analytics_UI_LowerRight_Timers_Shown = {
  encode(_: Analytics_UI_LowerRight_Timers_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_Shown();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Timers_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Timers_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Shown>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_Shown {
    return Analytics_UI_LowerRight_Timers_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Shown>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Timers_Shown {
    const message = createBaseAnalytics_UI_LowerRight_Timers_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_Collapse(): Analytics_UI_LowerRight_Timers_Collapse {
  return { state: 0 };
}

export const Analytics_UI_LowerRight_Timers_Collapse = {
  encode(message: Analytics_UI_LowerRight_Timers_Collapse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_Collapse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_Collapse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Timers_Collapse {
    return { state: isSet(object.state) ? analytics_UI_LowerRight_Timers_Collapse_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Timers_Collapse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = analytics_UI_LowerRight_Timers_Collapse_StateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Collapse>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_Collapse {
    return Analytics_UI_LowerRight_Timers_Collapse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Collapse>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Timers_Collapse {
    const message = createBaseAnalytics_UI_LowerRight_Timers_Collapse();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_Edit(): Analytics_UI_LowerRight_Timers_Edit {
  return { field: 0 };
}

export const Analytics_UI_LowerRight_Timers_Edit = {
  encode(message: Analytics_UI_LowerRight_Timers_Edit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== 0) {
      writer.uint32(8).int32(message.field);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_Edit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_Edit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.field = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Timers_Edit {
    return { field: isSet(object.field) ? analytics_UI_LowerRight_Timers_Edit_FieldFromJSON(object.field) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Timers_Edit): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = analytics_UI_LowerRight_Timers_Edit_FieldToJSON(message.field));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Edit>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_Edit {
    return Analytics_UI_LowerRight_Timers_Edit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Edit>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Timers_Edit {
    const message = createBaseAnalytics_UI_LowerRight_Timers_Edit();
    message.field = object.field ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_State(): Analytics_UI_LowerRight_Timers_State {
  return { state: 0 };
}

export const Analytics_UI_LowerRight_Timers_State = {
  encode(message: Analytics_UI_LowerRight_Timers_State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Timers_State {
    return { state: isSet(object.state) ? analytics_UI_LowerRight_Timers_State_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Timers_State): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = analytics_UI_LowerRight_Timers_State_StateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_State>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_State {
    return Analytics_UI_LowerRight_Timers_State.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_State>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Timers_State {
    const message = createBaseAnalytics_UI_LowerRight_Timers_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_Create(): Analytics_UI_LowerRight_Timers_Create {
  return {};
}

export const Analytics_UI_LowerRight_Timers_Create = {
  encode(_: Analytics_UI_LowerRight_Timers_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_Create();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Timers_Create {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Timers_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Create>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_Create {
    return Analytics_UI_LowerRight_Timers_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Create>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Timers_Create {
    const message = createBaseAnalytics_UI_LowerRight_Timers_Create();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Timers_Delete(): Analytics_UI_LowerRight_Timers_Delete {
  return {};
}

export const Analytics_UI_LowerRight_Timers_Delete = {
  encode(_: Analytics_UI_LowerRight_Timers_Delete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Timers_Delete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Timers_Delete();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Timers_Delete {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Timers_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Delete>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Timers_Delete {
    return Analytics_UI_LowerRight_Timers_Delete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Timers_Delete>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Timers_Delete {
    const message = createBaseAnalytics_UI_LowerRight_Timers_Delete();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages(): Analytics_UI_LowerRight_Messages {
  return { shown: undefined, edit: undefined, state: undefined, create: undefined, delete: undefined };
}

export const Analytics_UI_LowerRight_Messages = {
  encode(message: Analytics_UI_LowerRight_Messages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_LowerRight_Messages_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.edit !== undefined) {
      Analytics_UI_LowerRight_Messages_Edit.encode(message.edit, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined) {
      Analytics_UI_LowerRight_Messages_State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_UI_LowerRight_Messages_Create.encode(message.create, writer.uint32(34).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      Analytics_UI_LowerRight_Messages_Delete.encode(message.delete, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_LowerRight_Messages_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.edit = Analytics_UI_LowerRight_Messages_Edit.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.state = Analytics_UI_LowerRight_Messages_State.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.create = Analytics_UI_LowerRight_Messages_Create.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.delete = Analytics_UI_LowerRight_Messages_Delete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Messages {
    return {
      shown: isSet(object.shown) ? Analytics_UI_LowerRight_Messages_Shown.fromJSON(object.shown) : undefined,
      edit: isSet(object.edit) ? Analytics_UI_LowerRight_Messages_Edit.fromJSON(object.edit) : undefined,
      state: isSet(object.state) ? Analytics_UI_LowerRight_Messages_State.fromJSON(object.state) : undefined,
      create: isSet(object.create) ? Analytics_UI_LowerRight_Messages_Create.fromJSON(object.create) : undefined,
      delete: isSet(object.delete) ? Analytics_UI_LowerRight_Messages_Delete.fromJSON(object.delete) : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight_Messages): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_LowerRight_Messages_Shown.toJSON(message.shown) : undefined);
    message.edit !== undefined &&
      (obj.edit = message.edit ? Analytics_UI_LowerRight_Messages_Edit.toJSON(message.edit) : undefined);
    message.state !== undefined &&
      (obj.state = message.state ? Analytics_UI_LowerRight_Messages_State.toJSON(message.state) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_LowerRight_Messages_Create.toJSON(message.create) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? Analytics_UI_LowerRight_Messages_Delete.toJSON(message.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages {
    return Analytics_UI_LowerRight_Messages.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Messages {
    const message = createBaseAnalytics_UI_LowerRight_Messages();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_LowerRight_Messages_Shown.fromPartial(object.shown)
      : undefined;
    message.edit = (object.edit !== undefined && object.edit !== null)
      ? Analytics_UI_LowerRight_Messages_Edit.fromPartial(object.edit)
      : undefined;
    message.state = (object.state !== undefined && object.state !== null)
      ? Analytics_UI_LowerRight_Messages_State.fromPartial(object.state)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_LowerRight_Messages_Create.fromPartial(object.create)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? Analytics_UI_LowerRight_Messages_Delete.fromPartial(object.delete)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages_Shown(): Analytics_UI_LowerRight_Messages_Shown {
  return {};
}

export const Analytics_UI_LowerRight_Messages_Shown = {
  encode(_: Analytics_UI_LowerRight_Messages_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages_Shown();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Messages_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Messages_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Shown>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages_Shown {
    return Analytics_UI_LowerRight_Messages_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Shown>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Messages_Shown {
    const message = createBaseAnalytics_UI_LowerRight_Messages_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages_Edit(): Analytics_UI_LowerRight_Messages_Edit {
  return { action: 0 };
}

export const Analytics_UI_LowerRight_Messages_Edit = {
  encode(message: Analytics_UI_LowerRight_Messages_Edit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages_Edit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages_Edit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Messages_Edit {
    return { action: isSet(object.action) ? analytics_UI_LowerRight_Messages_Edit_ActionFromJSON(object.action) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Messages_Edit): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = analytics_UI_LowerRight_Messages_Edit_ActionToJSON(message.action));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Edit>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages_Edit {
    return Analytics_UI_LowerRight_Messages_Edit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Edit>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Messages_Edit {
    const message = createBaseAnalytics_UI_LowerRight_Messages_Edit();
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages_State(): Analytics_UI_LowerRight_Messages_State {
  return { state: 0 };
}

export const Analytics_UI_LowerRight_Messages_State = {
  encode(message: Analytics_UI_LowerRight_Messages_State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages_State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Messages_State {
    return { state: isSet(object.state) ? analytics_UI_LowerRight_Messages_State_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Messages_State): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = analytics_UI_LowerRight_Messages_State_StateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_State>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages_State {
    return Analytics_UI_LowerRight_Messages_State.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_State>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Messages_State {
    const message = createBaseAnalytics_UI_LowerRight_Messages_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages_Create(): Analytics_UI_LowerRight_Messages_Create {
  return {};
}

export const Analytics_UI_LowerRight_Messages_Create = {
  encode(_: Analytics_UI_LowerRight_Messages_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages_Create();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Messages_Create {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Messages_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Create>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages_Create {
    return Analytics_UI_LowerRight_Messages_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Create>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Messages_Create {
    const message = createBaseAnalytics_UI_LowerRight_Messages_Create();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Messages_Delete(): Analytics_UI_LowerRight_Messages_Delete {
  return {};
}

export const Analytics_UI_LowerRight_Messages_Delete = {
  encode(_: Analytics_UI_LowerRight_Messages_Delete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Messages_Delete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Messages_Delete();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Messages_Delete {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Messages_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Delete>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Messages_Delete {
    return Analytics_UI_LowerRight_Messages_Delete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Messages_Delete>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Messages_Delete {
    const message = createBaseAnalytics_UI_LowerRight_Messages_Delete();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props(): Analytics_UI_LowerRight_Props {
  return { shown: undefined, transition: undefined, state: undefined, create: undefined, delete: undefined };
}

export const Analytics_UI_LowerRight_Props = {
  encode(message: Analytics_UI_LowerRight_Props, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_LowerRight_Props_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Analytics_UI_LowerRight_Props_Transition.encode(message.transition, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== undefined) {
      Analytics_UI_LowerRight_Props_State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_UI_LowerRight_Props_Create.encode(message.create, writer.uint32(34).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      Analytics_UI_LowerRight_Props_Delete.encode(message.delete, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_LowerRight_Props_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.transition = Analytics_UI_LowerRight_Props_Transition.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.state = Analytics_UI_LowerRight_Props_State.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.create = Analytics_UI_LowerRight_Props_Create.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.delete = Analytics_UI_LowerRight_Props_Delete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Props {
    return {
      shown: isSet(object.shown) ? Analytics_UI_LowerRight_Props_Shown.fromJSON(object.shown) : undefined,
      transition: isSet(object.transition)
        ? Analytics_UI_LowerRight_Props_Transition.fromJSON(object.transition)
        : undefined,
      state: isSet(object.state) ? Analytics_UI_LowerRight_Props_State.fromJSON(object.state) : undefined,
      create: isSet(object.create) ? Analytics_UI_LowerRight_Props_Create.fromJSON(object.create) : undefined,
      delete: isSet(object.delete) ? Analytics_UI_LowerRight_Props_Delete.fromJSON(object.delete) : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight_Props): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_LowerRight_Props_Shown.toJSON(message.shown) : undefined);
    message.transition !== undefined && (obj.transition = message.transition
      ? Analytics_UI_LowerRight_Props_Transition.toJSON(message.transition)
      : undefined);
    message.state !== undefined &&
      (obj.state = message.state ? Analytics_UI_LowerRight_Props_State.toJSON(message.state) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_LowerRight_Props_Create.toJSON(message.create) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? Analytics_UI_LowerRight_Props_Delete.toJSON(message.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props>, I>>(base?: I): Analytics_UI_LowerRight_Props {
    return Analytics_UI_LowerRight_Props.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Props {
    const message = createBaseAnalytics_UI_LowerRight_Props();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_LowerRight_Props_Shown.fromPartial(object.shown)
      : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Analytics_UI_LowerRight_Props_Transition.fromPartial(object.transition)
      : undefined;
    message.state = (object.state !== undefined && object.state !== null)
      ? Analytics_UI_LowerRight_Props_State.fromPartial(object.state)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_LowerRight_Props_Create.fromPartial(object.create)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? Analytics_UI_LowerRight_Props_Delete.fromPartial(object.delete)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props_Shown(): Analytics_UI_LowerRight_Props_Shown {
  return {};
}

export const Analytics_UI_LowerRight_Props_Shown = {
  encode(_: Analytics_UI_LowerRight_Props_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props_Shown();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Props_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Props_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Shown>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Props_Shown {
    return Analytics_UI_LowerRight_Props_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Shown>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Props_Shown {
    const message = createBaseAnalytics_UI_LowerRight_Props_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props_Transition(): Analytics_UI_LowerRight_Props_Transition {
  return {};
}

export const Analytics_UI_LowerRight_Props_Transition = {
  encode(_: Analytics_UI_LowerRight_Props_Transition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props_Transition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props_Transition();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Props_Transition {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Props_Transition): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Transition>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Props_Transition {
    return Analytics_UI_LowerRight_Props_Transition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Transition>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Props_Transition {
    const message = createBaseAnalytics_UI_LowerRight_Props_Transition();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props_State(): Analytics_UI_LowerRight_Props_State {
  return { state: 0 };
}

export const Analytics_UI_LowerRight_Props_State = {
  encode(message: Analytics_UI_LowerRight_Props_State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props_State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Props_State {
    return { state: isSet(object.state) ? analytics_UI_LowerRight_Props_State_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Props_State): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = analytics_UI_LowerRight_Props_State_StateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_State>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Props_State {
    return Analytics_UI_LowerRight_Props_State.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_State>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Props_State {
    const message = createBaseAnalytics_UI_LowerRight_Props_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props_Create(): Analytics_UI_LowerRight_Props_Create {
  return {};
}

export const Analytics_UI_LowerRight_Props_Create = {
  encode(_: Analytics_UI_LowerRight_Props_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props_Create();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Props_Create {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Props_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Create>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Props_Create {
    return Analytics_UI_LowerRight_Props_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Create>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Props_Create {
    const message = createBaseAnalytics_UI_LowerRight_Props_Create();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Props_Delete(): Analytics_UI_LowerRight_Props_Delete {
  return {};
}

export const Analytics_UI_LowerRight_Props_Delete = {
  encode(_: Analytics_UI_LowerRight_Props_Delete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Props_Delete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Props_Delete();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Props_Delete {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Props_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Delete>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Props_Delete {
    return Analytics_UI_LowerRight_Props_Delete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Props_Delete>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Props_Delete {
    const message = createBaseAnalytics_UI_LowerRight_Props_Delete();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage(): Analytics_UI_LowerRight_Stage {
  return {
    shown: undefined,
    changeLayout: undefined,
    messageState: undefined,
    configureScreens: undefined,
    editLayouts: undefined,
  };
}

export const Analytics_UI_LowerRight_Stage = {
  encode(message: Analytics_UI_LowerRight_Stage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_LowerRight_Stage_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.changeLayout !== undefined) {
      Analytics_UI_LowerRight_Stage_ChangeLayout.encode(message.changeLayout, writer.uint32(18).fork()).ldelim();
    }
    if (message.messageState !== undefined) {
      Analytics_UI_LowerRight_Stage_MessageState.encode(message.messageState, writer.uint32(26).fork()).ldelim();
    }
    if (message.configureScreens !== undefined) {
      Analytics_UI_LowerRight_Stage_ConfigureScreens.encode(message.configureScreens, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.editLayouts !== undefined) {
      Analytics_UI_LowerRight_Stage_EditLayouts.encode(message.editLayouts, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_LowerRight_Stage_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.changeLayout = Analytics_UI_LowerRight_Stage_ChangeLayout.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.messageState = Analytics_UI_LowerRight_Stage_MessageState.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.configureScreens = Analytics_UI_LowerRight_Stage_ConfigureScreens.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.editLayouts = Analytics_UI_LowerRight_Stage_EditLayouts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Stage {
    return {
      shown: isSet(object.shown) ? Analytics_UI_LowerRight_Stage_Shown.fromJSON(object.shown) : undefined,
      changeLayout: isSet(object.changeLayout)
        ? Analytics_UI_LowerRight_Stage_ChangeLayout.fromJSON(object.changeLayout)
        : undefined,
      messageState: isSet(object.messageState)
        ? Analytics_UI_LowerRight_Stage_MessageState.fromJSON(object.messageState)
        : undefined,
      configureScreens: isSet(object.configureScreens)
        ? Analytics_UI_LowerRight_Stage_ConfigureScreens.fromJSON(object.configureScreens)
        : undefined,
      editLayouts: isSet(object.editLayouts)
        ? Analytics_UI_LowerRight_Stage_EditLayouts.fromJSON(object.editLayouts)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight_Stage): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_LowerRight_Stage_Shown.toJSON(message.shown) : undefined);
    message.changeLayout !== undefined && (obj.changeLayout = message.changeLayout
      ? Analytics_UI_LowerRight_Stage_ChangeLayout.toJSON(message.changeLayout)
      : undefined);
    message.messageState !== undefined && (obj.messageState = message.messageState
      ? Analytics_UI_LowerRight_Stage_MessageState.toJSON(message.messageState)
      : undefined);
    message.configureScreens !== undefined && (obj.configureScreens = message.configureScreens
      ? Analytics_UI_LowerRight_Stage_ConfigureScreens.toJSON(message.configureScreens)
      : undefined);
    message.editLayouts !== undefined && (obj.editLayouts = message.editLayouts
      ? Analytics_UI_LowerRight_Stage_EditLayouts.toJSON(message.editLayouts)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage>, I>>(base?: I): Analytics_UI_LowerRight_Stage {
    return Analytics_UI_LowerRight_Stage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Stage {
    const message = createBaseAnalytics_UI_LowerRight_Stage();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_LowerRight_Stage_Shown.fromPartial(object.shown)
      : undefined;
    message.changeLayout = (object.changeLayout !== undefined && object.changeLayout !== null)
      ? Analytics_UI_LowerRight_Stage_ChangeLayout.fromPartial(object.changeLayout)
      : undefined;
    message.messageState = (object.messageState !== undefined && object.messageState !== null)
      ? Analytics_UI_LowerRight_Stage_MessageState.fromPartial(object.messageState)
      : undefined;
    message.configureScreens = (object.configureScreens !== undefined && object.configureScreens !== null)
      ? Analytics_UI_LowerRight_Stage_ConfigureScreens.fromPartial(object.configureScreens)
      : undefined;
    message.editLayouts = (object.editLayouts !== undefined && object.editLayouts !== null)
      ? Analytics_UI_LowerRight_Stage_EditLayouts.fromPartial(object.editLayouts)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage_Shown(): Analytics_UI_LowerRight_Stage_Shown {
  return {};
}

export const Analytics_UI_LowerRight_Stage_Shown = {
  encode(_: Analytics_UI_LowerRight_Stage_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage_Shown();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Stage_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Stage_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_Shown>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Stage_Shown {
    return Analytics_UI_LowerRight_Stage_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_Shown>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Stage_Shown {
    const message = createBaseAnalytics_UI_LowerRight_Stage_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage_ChangeLayout(): Analytics_UI_LowerRight_Stage_ChangeLayout {
  return {};
}

export const Analytics_UI_LowerRight_Stage_ChangeLayout = {
  encode(_: Analytics_UI_LowerRight_Stage_ChangeLayout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage_ChangeLayout {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage_ChangeLayout();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Stage_ChangeLayout {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Stage_ChangeLayout): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_ChangeLayout>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Stage_ChangeLayout {
    return Analytics_UI_LowerRight_Stage_ChangeLayout.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_ChangeLayout>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Stage_ChangeLayout {
    const message = createBaseAnalytics_UI_LowerRight_Stage_ChangeLayout();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage_MessageState(): Analytics_UI_LowerRight_Stage_MessageState {
  return { state: 0 };
}

export const Analytics_UI_LowerRight_Stage_MessageState = {
  encode(message: Analytics_UI_LowerRight_Stage_MessageState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage_MessageState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage_MessageState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Stage_MessageState {
    return { state: isSet(object.state) ? analytics_UI_LowerRight_Stage_MessageState_StateFromJSON(object.state) : 0 };
  },

  toJSON(message: Analytics_UI_LowerRight_Stage_MessageState): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = analytics_UI_LowerRight_Stage_MessageState_StateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_MessageState>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Stage_MessageState {
    return Analytics_UI_LowerRight_Stage_MessageState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_MessageState>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Stage_MessageState {
    const message = createBaseAnalytics_UI_LowerRight_Stage_MessageState();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage_ConfigureScreens(): Analytics_UI_LowerRight_Stage_ConfigureScreens {
  return {};
}

export const Analytics_UI_LowerRight_Stage_ConfigureScreens = {
  encode(_: Analytics_UI_LowerRight_Stage_ConfigureScreens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage_ConfigureScreens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage_ConfigureScreens();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Stage_ConfigureScreens {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Stage_ConfigureScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_ConfigureScreens>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Stage_ConfigureScreens {
    return Analytics_UI_LowerRight_Stage_ConfigureScreens.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_ConfigureScreens>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Stage_ConfigureScreens {
    const message = createBaseAnalytics_UI_LowerRight_Stage_ConfigureScreens();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Stage_EditLayouts(): Analytics_UI_LowerRight_Stage_EditLayouts {
  return {};
}

export const Analytics_UI_LowerRight_Stage_EditLayouts = {
  encode(_: Analytics_UI_LowerRight_Stage_EditLayouts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Stage_EditLayouts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Stage_EditLayouts();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Stage_EditLayouts {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Stage_EditLayouts): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_EditLayouts>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Stage_EditLayouts {
    return Analytics_UI_LowerRight_Stage_EditLayouts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Stage_EditLayouts>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Stage_EditLayouts {
    const message = createBaseAnalytics_UI_LowerRight_Stage_EditLayouts();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_AudioBin(): Analytics_UI_LowerRight_AudioBin {
  return {};
}

export const Analytics_UI_LowerRight_AudioBin = {
  encode(_: Analytics_UI_LowerRight_AudioBin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_AudioBin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_AudioBin();
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

  fromJSON(_: any): Analytics_UI_LowerRight_AudioBin {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_AudioBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_AudioBin>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_AudioBin {
    return Analytics_UI_LowerRight_AudioBin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_AudioBin>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_AudioBin {
    const message = createBaseAnalytics_UI_LowerRight_AudioBin();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Macros(): Analytics_UI_LowerRight_Macros {
  return { shown: undefined, trigger: undefined, create: undefined, delete: undefined };
}

export const Analytics_UI_LowerRight_Macros = {
  encode(message: Analytics_UI_LowerRight_Macros, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_LowerRight_Macros_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.trigger !== undefined) {
      Analytics_UI_LowerRight_Macros_Trigger.encode(message.trigger, writer.uint32(18).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_UI_LowerRight_Macros_Create.encode(message.create, writer.uint32(26).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      Analytics_UI_LowerRight_Macros_Delete.encode(message.delete, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Macros {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Macros();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_LowerRight_Macros_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.trigger = Analytics_UI_LowerRight_Macros_Trigger.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.create = Analytics_UI_LowerRight_Macros_Create.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.delete = Analytics_UI_LowerRight_Macros_Delete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_LowerRight_Macros {
    return {
      shown: isSet(object.shown) ? Analytics_UI_LowerRight_Macros_Shown.fromJSON(object.shown) : undefined,
      trigger: isSet(object.trigger) ? Analytics_UI_LowerRight_Macros_Trigger.fromJSON(object.trigger) : undefined,
      create: isSet(object.create) ? Analytics_UI_LowerRight_Macros_Create.fromJSON(object.create) : undefined,
      delete: isSet(object.delete) ? Analytics_UI_LowerRight_Macros_Delete.fromJSON(object.delete) : undefined,
    };
  },

  toJSON(message: Analytics_UI_LowerRight_Macros): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_LowerRight_Macros_Shown.toJSON(message.shown) : undefined);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger ? Analytics_UI_LowerRight_Macros_Trigger.toJSON(message.trigger) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_LowerRight_Macros_Create.toJSON(message.create) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? Analytics_UI_LowerRight_Macros_Delete.toJSON(message.delete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros>, I>>(base?: I): Analytics_UI_LowerRight_Macros {
    return Analytics_UI_LowerRight_Macros.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros>, I>>(
    object: I,
  ): Analytics_UI_LowerRight_Macros {
    const message = createBaseAnalytics_UI_LowerRight_Macros();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_LowerRight_Macros_Shown.fromPartial(object.shown)
      : undefined;
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? Analytics_UI_LowerRight_Macros_Trigger.fromPartial(object.trigger)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_LowerRight_Macros_Create.fromPartial(object.create)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? Analytics_UI_LowerRight_Macros_Delete.fromPartial(object.delete)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Macros_Shown(): Analytics_UI_LowerRight_Macros_Shown {
  return {};
}

export const Analytics_UI_LowerRight_Macros_Shown = {
  encode(_: Analytics_UI_LowerRight_Macros_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Macros_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Macros_Shown();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Macros_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Macros_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Shown>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Macros_Shown {
    return Analytics_UI_LowerRight_Macros_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Shown>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Macros_Shown {
    const message = createBaseAnalytics_UI_LowerRight_Macros_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Macros_Trigger(): Analytics_UI_LowerRight_Macros_Trigger {
  return {};
}

export const Analytics_UI_LowerRight_Macros_Trigger = {
  encode(_: Analytics_UI_LowerRight_Macros_Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Macros_Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Macros_Trigger();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Macros_Trigger {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Macros_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Trigger>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Macros_Trigger {
    return Analytics_UI_LowerRight_Macros_Trigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Trigger>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Macros_Trigger {
    const message = createBaseAnalytics_UI_LowerRight_Macros_Trigger();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Macros_Create(): Analytics_UI_LowerRight_Macros_Create {
  return {};
}

export const Analytics_UI_LowerRight_Macros_Create = {
  encode(_: Analytics_UI_LowerRight_Macros_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Macros_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Macros_Create();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Macros_Create {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Macros_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Create>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Macros_Create {
    return Analytics_UI_LowerRight_Macros_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Create>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Macros_Create {
    const message = createBaseAnalytics_UI_LowerRight_Macros_Create();
    return message;
  },
};

function createBaseAnalytics_UI_LowerRight_Macros_Delete(): Analytics_UI_LowerRight_Macros_Delete {
  return {};
}

export const Analytics_UI_LowerRight_Macros_Delete = {
  encode(_: Analytics_UI_LowerRight_Macros_Delete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_LowerRight_Macros_Delete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_LowerRight_Macros_Delete();
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

  fromJSON(_: any): Analytics_UI_LowerRight_Macros_Delete {
    return {};
  },

  toJSON(_: Analytics_UI_LowerRight_Macros_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Delete>, I>>(
    base?: I,
  ): Analytics_UI_LowerRight_Macros_Delete {
    return Analytics_UI_LowerRight_Macros_Delete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_LowerRight_Macros_Delete>, I>>(
    _: I,
  ): Analytics_UI_LowerRight_Macros_Delete {
    const message = createBaseAnalytics_UI_LowerRight_Macros_Delete();
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector(): Analytics_UI_TextInspector {
  return {
    shown: undefined,
    foreground: undefined,
    underlineColor: undefined,
    backgroundColor: undefined,
    scrollingText: undefined,
    lineTransform: undefined,
  };
}

export const Analytics_UI_TextInspector = {
  encode(message: Analytics_UI_TextInspector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_TextInspector_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.foreground !== undefined) {
      Analytics_UI_TextInspector_Foreground.encode(message.foreground, writer.uint32(18).fork()).ldelim();
    }
    if (message.underlineColor !== undefined) {
      Analytics_UI_TextInspector_UnderlineColor.encode(message.underlineColor, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      Analytics_UI_TextInspector_BackgroundColor.encode(message.backgroundColor, writer.uint32(34).fork()).ldelim();
    }
    if (message.scrollingText !== undefined) {
      Analytics_UI_TextInspector_ScrollingText.encode(message.scrollingText, writer.uint32(42).fork()).ldelim();
    }
    if (message.lineTransform !== undefined) {
      Analytics_UI_TextInspector_LineTransform.encode(message.lineTransform, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_TextInspector_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.foreground = Analytics_UI_TextInspector_Foreground.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.underlineColor = Analytics_UI_TextInspector_UnderlineColor.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.backgroundColor = Analytics_UI_TextInspector_BackgroundColor.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.scrollingText = Analytics_UI_TextInspector_ScrollingText.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.lineTransform = Analytics_UI_TextInspector_LineTransform.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector {
    return {
      shown: isSet(object.shown) ? Analytics_UI_TextInspector_Shown.fromJSON(object.shown) : undefined,
      foreground: isSet(object.foreground)
        ? Analytics_UI_TextInspector_Foreground.fromJSON(object.foreground)
        : undefined,
      underlineColor: isSet(object.underlineColor)
        ? Analytics_UI_TextInspector_UnderlineColor.fromJSON(object.underlineColor)
        : undefined,
      backgroundColor: isSet(object.backgroundColor)
        ? Analytics_UI_TextInspector_BackgroundColor.fromJSON(object.backgroundColor)
        : undefined,
      scrollingText: isSet(object.scrollingText)
        ? Analytics_UI_TextInspector_ScrollingText.fromJSON(object.scrollingText)
        : undefined,
      lineTransform: isSet(object.lineTransform)
        ? Analytics_UI_TextInspector_LineTransform.fromJSON(object.lineTransform)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_TextInspector): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_TextInspector_Shown.toJSON(message.shown) : undefined);
    message.foreground !== undefined && (obj.foreground = message.foreground
      ? Analytics_UI_TextInspector_Foreground.toJSON(message.foreground)
      : undefined);
    message.underlineColor !== undefined && (obj.underlineColor = message.underlineColor
      ? Analytics_UI_TextInspector_UnderlineColor.toJSON(message.underlineColor)
      : undefined);
    message.backgroundColor !== undefined && (obj.backgroundColor = message.backgroundColor
      ? Analytics_UI_TextInspector_BackgroundColor.toJSON(message.backgroundColor)
      : undefined);
    message.scrollingText !== undefined && (obj.scrollingText = message.scrollingText
      ? Analytics_UI_TextInspector_ScrollingText.toJSON(message.scrollingText)
      : undefined);
    message.lineTransform !== undefined && (obj.lineTransform = message.lineTransform
      ? Analytics_UI_TextInspector_LineTransform.toJSON(message.lineTransform)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector>, I>>(base?: I): Analytics_UI_TextInspector {
    return Analytics_UI_TextInspector.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector>, I>>(object: I): Analytics_UI_TextInspector {
    const message = createBaseAnalytics_UI_TextInspector();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_TextInspector_Shown.fromPartial(object.shown)
      : undefined;
    message.foreground = (object.foreground !== undefined && object.foreground !== null)
      ? Analytics_UI_TextInspector_Foreground.fromPartial(object.foreground)
      : undefined;
    message.underlineColor = (object.underlineColor !== undefined && object.underlineColor !== null)
      ? Analytics_UI_TextInspector_UnderlineColor.fromPartial(object.underlineColor)
      : undefined;
    message.backgroundColor = (object.backgroundColor !== undefined && object.backgroundColor !== null)
      ? Analytics_UI_TextInspector_BackgroundColor.fromPartial(object.backgroundColor)
      : undefined;
    message.scrollingText = (object.scrollingText !== undefined && object.scrollingText !== null)
      ? Analytics_UI_TextInspector_ScrollingText.fromPartial(object.scrollingText)
      : undefined;
    message.lineTransform = (object.lineTransform !== undefined && object.lineTransform !== null)
      ? Analytics_UI_TextInspector_LineTransform.fromPartial(object.lineTransform)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_Shown(): Analytics_UI_TextInspector_Shown {
  return {};
}

export const Analytics_UI_TextInspector_Shown = {
  encode(_: Analytics_UI_TextInspector_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_Shown();
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

  fromJSON(_: any): Analytics_UI_TextInspector_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_TextInspector_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_Shown>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_Shown {
    return Analytics_UI_TextInspector_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_Shown>, I>>(
    _: I,
  ): Analytics_UI_TextInspector_Shown {
    const message = createBaseAnalytics_UI_TextInspector_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_Foreground(): Analytics_UI_TextInspector_Foreground {
  return { fillType: 0, selectionMode: 0 };
}

export const Analytics_UI_TextInspector_Foreground = {
  encode(message: Analytics_UI_TextInspector_Foreground, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fillType !== 0) {
      writer.uint32(8).int32(message.fillType);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_Foreground {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_Foreground();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fillType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_Foreground {
    return {
      fillType: isSet(object.fillType) ? analytics_UI_TextInspector_Foreground_FillTypeFromJSON(object.fillType) : 0,
      selectionMode: isSet(object.selectionMode)
        ? analytics_UI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_TextInspector_Foreground): unknown {
    const obj: any = {};
    message.fillType !== undefined &&
      (obj.fillType = analytics_UI_TextInspector_Foreground_FillTypeToJSON(message.fillType));
    message.selectionMode !== undefined &&
      (obj.selectionMode = analytics_UI_TextInspector_SelectionModeToJSON(message.selectionMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_Foreground>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_Foreground {
    return Analytics_UI_TextInspector_Foreground.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_Foreground>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_Foreground {
    const message = createBaseAnalytics_UI_TextInspector_Foreground();
    message.fillType = object.fillType ?? 0;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_UnderlineColor(): Analytics_UI_TextInspector_UnderlineColor {
  return { isEnabled: false, selectionMode: 0 };
}

export const Analytics_UI_TextInspector_UnderlineColor = {
  encode(message: Analytics_UI_TextInspector_UnderlineColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEnabled === true) {
      writer.uint32(8).bool(message.isEnabled);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_UnderlineColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_UnderlineColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_UnderlineColor {
    return {
      isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
      selectionMode: isSet(object.selectionMode)
        ? analytics_UI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_TextInspector_UnderlineColor): unknown {
    const obj: any = {};
    message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
    message.selectionMode !== undefined &&
      (obj.selectionMode = analytics_UI_TextInspector_SelectionModeToJSON(message.selectionMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_UnderlineColor>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_UnderlineColor {
    return Analytics_UI_TextInspector_UnderlineColor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_UnderlineColor>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_UnderlineColor {
    const message = createBaseAnalytics_UI_TextInspector_UnderlineColor();
    message.isEnabled = object.isEnabled ?? false;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_BackgroundColor(): Analytics_UI_TextInspector_BackgroundColor {
  return { colorType: 0, selectionMode: 0 };
}

export const Analytics_UI_TextInspector_BackgroundColor = {
  encode(message: Analytics_UI_TextInspector_BackgroundColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.colorType !== 0) {
      writer.uint32(8).int32(message.colorType);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_BackgroundColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_BackgroundColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.colorType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_BackgroundColor {
    return {
      colorType: isSet(object.colorType)
        ? analytics_UI_TextInspector_BackgroundColor_ColorTypeFromJSON(object.colorType)
        : 0,
      selectionMode: isSet(object.selectionMode)
        ? analytics_UI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_TextInspector_BackgroundColor): unknown {
    const obj: any = {};
    message.colorType !== undefined &&
      (obj.colorType = analytics_UI_TextInspector_BackgroundColor_ColorTypeToJSON(message.colorType));
    message.selectionMode !== undefined &&
      (obj.selectionMode = analytics_UI_TextInspector_SelectionModeToJSON(message.selectionMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_BackgroundColor>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_BackgroundColor {
    return Analytics_UI_TextInspector_BackgroundColor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_BackgroundColor>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_BackgroundColor {
    const message = createBaseAnalytics_UI_TextInspector_BackgroundColor();
    message.colorType = object.colorType ?? 0;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_ScrollingText(): Analytics_UI_TextInspector_ScrollingText {
  return { enable: undefined };
}

export const Analytics_UI_TextInspector_ScrollingText = {
  encode(message: Analytics_UI_TextInspector_ScrollingText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== undefined) {
      Analytics_UI_TextInspector_ScrollingText_Enable.encode(message.enable, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_ScrollingText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_ScrollingText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.enable = Analytics_UI_TextInspector_ScrollingText_Enable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_ScrollingText {
    return {
      enable: isSet(object.enable)
        ? Analytics_UI_TextInspector_ScrollingText_Enable.fromJSON(object.enable)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_TextInspector_ScrollingText): unknown {
    const obj: any = {};
    message.enable !== undefined &&
      (obj.enable = message.enable
        ? Analytics_UI_TextInspector_ScrollingText_Enable.toJSON(message.enable)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_ScrollingText>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_ScrollingText {
    return Analytics_UI_TextInspector_ScrollingText.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_ScrollingText>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_ScrollingText {
    const message = createBaseAnalytics_UI_TextInspector_ScrollingText();
    message.enable = (object.enable !== undefined && object.enable !== null)
      ? Analytics_UI_TextInspector_ScrollingText_Enable.fromPartial(object.enable)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_ScrollingText_Enable(): Analytics_UI_TextInspector_ScrollingText_Enable {
  return { enabled: false };
}

export const Analytics_UI_TextInspector_ScrollingText_Enable = {
  encode(
    message: Analytics_UI_TextInspector_ScrollingText_Enable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_ScrollingText_Enable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_ScrollingText_Enable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_ScrollingText_Enable {
    return { enabled: isSet(object.enabled) ? Boolean(object.enabled) : false };
  },

  toJSON(message: Analytics_UI_TextInspector_ScrollingText_Enable): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_ScrollingText_Enable>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_ScrollingText_Enable {
    return Analytics_UI_TextInspector_ScrollingText_Enable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_ScrollingText_Enable>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_ScrollingText_Enable {
    const message = createBaseAnalytics_UI_TextInspector_ScrollingText_Enable();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseAnalytics_UI_TextInspector_LineTransform(): Analytics_UI_TextInspector_LineTransform {
  return { transformType: 0 };
}

export const Analytics_UI_TextInspector_LineTransform = {
  encode(message: Analytics_UI_TextInspector_LineTransform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transformType !== 0) {
      writer.uint32(8).int32(message.transformType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_TextInspector_LineTransform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_TextInspector_LineTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.transformType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_TextInspector_LineTransform {
    return {
      transformType: isSet(object.transformType)
        ? analytics_UI_TextInspector_LineTransform_TransformTypeFromJSON(object.transformType)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_TextInspector_LineTransform): unknown {
    const obj: any = {};
    message.transformType !== undefined &&
      (obj.transformType = analytics_UI_TextInspector_LineTransform_TransformTypeToJSON(message.transformType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_TextInspector_LineTransform>, I>>(
    base?: I,
  ): Analytics_UI_TextInspector_LineTransform {
    return Analytics_UI_TextInspector_LineTransform.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_TextInspector_LineTransform>, I>>(
    object: I,
  ): Analytics_UI_TextInspector_LineTransform {
    const message = createBaseAnalytics_UI_TextInspector_LineTransform();
    message.transformType = object.transformType ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Show(): Analytics_UI_Show {
  return { slideLabel: undefined };
}

export const Analytics_UI_Show = {
  encode(message: Analytics_UI_Show, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slideLabel !== undefined) {
      Analytics_UI_Show_SlideLabel.encode(message.slideLabel, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Show {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Show();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slideLabel = Analytics_UI_Show_SlideLabel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Show {
    return {
      slideLabel: isSet(object.slideLabel) ? Analytics_UI_Show_SlideLabel.fromJSON(object.slideLabel) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Show): unknown {
    const obj: any = {};
    message.slideLabel !== undefined &&
      (obj.slideLabel = message.slideLabel ? Analytics_UI_Show_SlideLabel.toJSON(message.slideLabel) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Show>, I>>(base?: I): Analytics_UI_Show {
    return Analytics_UI_Show.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Show>, I>>(object: I): Analytics_UI_Show {
    const message = createBaseAnalytics_UI_Show();
    message.slideLabel = (object.slideLabel !== undefined && object.slideLabel !== null)
      ? Analytics_UI_Show_SlideLabel.fromPartial(object.slideLabel)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Show_SlideLabel(): Analytics_UI_Show_SlideLabel {
  return { shown: undefined, change: undefined };
}

export const Analytics_UI_Show_SlideLabel = {
  encode(message: Analytics_UI_Show_SlideLabel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_Show_SlideLabel_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.change !== undefined) {
      Analytics_UI_Show_SlideLabel_Change.encode(message.change, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Show_SlideLabel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Show_SlideLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_Show_SlideLabel_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.change = Analytics_UI_Show_SlideLabel_Change.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Show_SlideLabel {
    return {
      shown: isSet(object.shown) ? Analytics_UI_Show_SlideLabel_Shown.fromJSON(object.shown) : undefined,
      change: isSet(object.change) ? Analytics_UI_Show_SlideLabel_Change.fromJSON(object.change) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Show_SlideLabel): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_Show_SlideLabel_Shown.toJSON(message.shown) : undefined);
    message.change !== undefined &&
      (obj.change = message.change ? Analytics_UI_Show_SlideLabel_Change.toJSON(message.change) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel>, I>>(base?: I): Analytics_UI_Show_SlideLabel {
    return Analytics_UI_Show_SlideLabel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel>, I>>(object: I): Analytics_UI_Show_SlideLabel {
    const message = createBaseAnalytics_UI_Show_SlideLabel();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_Show_SlideLabel_Shown.fromPartial(object.shown)
      : undefined;
    message.change = (object.change !== undefined && object.change !== null)
      ? Analytics_UI_Show_SlideLabel_Change.fromPartial(object.change)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Show_SlideLabel_Shown(): Analytics_UI_Show_SlideLabel_Shown {
  return {};
}

export const Analytics_UI_Show_SlideLabel_Shown = {
  encode(_: Analytics_UI_Show_SlideLabel_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Show_SlideLabel_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Show_SlideLabel_Shown();
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

  fromJSON(_: any): Analytics_UI_Show_SlideLabel_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_Show_SlideLabel_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel_Shown>, I>>(
    base?: I,
  ): Analytics_UI_Show_SlideLabel_Shown {
    return Analytics_UI_Show_SlideLabel_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel_Shown>, I>>(
    _: I,
  ): Analytics_UI_Show_SlideLabel_Shown {
    const message = createBaseAnalytics_UI_Show_SlideLabel_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_Show_SlideLabel_Change(): Analytics_UI_Show_SlideLabel_Change {
  return { numberOfSlides: 0, source: 0 };
}

export const Analytics_UI_Show_SlideLabel_Change = {
  encode(message: Analytics_UI_Show_SlideLabel_Change, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberOfSlides !== 0) {
      writer.uint32(8).int32(message.numberOfSlides);
    }
    if (message.source !== 0) {
      writer.uint32(16).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Show_SlideLabel_Change {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Show_SlideLabel_Change();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.numberOfSlides = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Show_SlideLabel_Change {
    return {
      numberOfSlides: isSet(object.numberOfSlides) ? Number(object.numberOfSlides) : 0,
      source: isSet(object.source) ? analytics_UI_Show_SlideLabel_Change_SourceFromJSON(object.source) : 0,
    };
  },

  toJSON(message: Analytics_UI_Show_SlideLabel_Change): unknown {
    const obj: any = {};
    message.numberOfSlides !== undefined && (obj.numberOfSlides = Math.round(message.numberOfSlides));
    message.source !== undefined && (obj.source = analytics_UI_Show_SlideLabel_Change_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel_Change>, I>>(
    base?: I,
  ): Analytics_UI_Show_SlideLabel_Change {
    return Analytics_UI_Show_SlideLabel_Change.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Show_SlideLabel_Change>, I>>(
    object: I,
  ): Analytics_UI_Show_SlideLabel_Change {
    const message = createBaseAnalytics_UI_Show_SlideLabel_Change();
    message.numberOfSlides = object.numberOfSlides ?? 0;
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_InAppStore(): Analytics_UI_InAppStore {
  return { trial: undefined };
}

export const Analytics_UI_InAppStore = {
  encode(message: Analytics_UI_InAppStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trial !== undefined) {
      Analytics_UI_InAppStore_Trial.encode(message.trial, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_InAppStore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_InAppStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trial = Analytics_UI_InAppStore_Trial.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_InAppStore {
    return { trial: isSet(object.trial) ? Analytics_UI_InAppStore_Trial.fromJSON(object.trial) : undefined };
  },

  toJSON(message: Analytics_UI_InAppStore): unknown {
    const obj: any = {};
    message.trial !== undefined &&
      (obj.trial = message.trial ? Analytics_UI_InAppStore_Trial.toJSON(message.trial) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_InAppStore>, I>>(base?: I): Analytics_UI_InAppStore {
    return Analytics_UI_InAppStore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_InAppStore>, I>>(object: I): Analytics_UI_InAppStore {
    const message = createBaseAnalytics_UI_InAppStore();
    message.trial = (object.trial !== undefined && object.trial !== null)
      ? Analytics_UI_InAppStore_Trial.fromPartial(object.trial)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_InAppStore_Trial(): Analytics_UI_InAppStore_Trial {
  return { shown: undefined, complete: undefined };
}

export const Analytics_UI_InAppStore_Trial = {
  encode(message: Analytics_UI_InAppStore_Trial, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_InAppStore_Trial_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.complete !== undefined) {
      Analytics_UI_InAppStore_Trial_Complete.encode(message.complete, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_InAppStore_Trial {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_InAppStore_Trial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_InAppStore_Trial_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.complete = Analytics_UI_InAppStore_Trial_Complete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_InAppStore_Trial {
    return {
      shown: isSet(object.shown) ? Analytics_UI_InAppStore_Trial_Shown.fromJSON(object.shown) : undefined,
      complete: isSet(object.complete) ? Analytics_UI_InAppStore_Trial_Complete.fromJSON(object.complete) : undefined,
    };
  },

  toJSON(message: Analytics_UI_InAppStore_Trial): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_InAppStore_Trial_Shown.toJSON(message.shown) : undefined);
    message.complete !== undefined &&
      (obj.complete = message.complete ? Analytics_UI_InAppStore_Trial_Complete.toJSON(message.complete) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial>, I>>(base?: I): Analytics_UI_InAppStore_Trial {
    return Analytics_UI_InAppStore_Trial.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial>, I>>(
    object: I,
  ): Analytics_UI_InAppStore_Trial {
    const message = createBaseAnalytics_UI_InAppStore_Trial();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_InAppStore_Trial_Shown.fromPartial(object.shown)
      : undefined;
    message.complete = (object.complete !== undefined && object.complete !== null)
      ? Analytics_UI_InAppStore_Trial_Complete.fromPartial(object.complete)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_InAppStore_Trial_Shown(): Analytics_UI_InAppStore_Trial_Shown {
  return {};
}

export const Analytics_UI_InAppStore_Trial_Shown = {
  encode(_: Analytics_UI_InAppStore_Trial_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_InAppStore_Trial_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_InAppStore_Trial_Shown();
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

  fromJSON(_: any): Analytics_UI_InAppStore_Trial_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_InAppStore_Trial_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial_Shown>, I>>(
    base?: I,
  ): Analytics_UI_InAppStore_Trial_Shown {
    return Analytics_UI_InAppStore_Trial_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial_Shown>, I>>(
    _: I,
  ): Analytics_UI_InAppStore_Trial_Shown {
    const message = createBaseAnalytics_UI_InAppStore_Trial_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_InAppStore_Trial_Complete(): Analytics_UI_InAppStore_Trial_Complete {
  return { result: 0 };
}

export const Analytics_UI_InAppStore_Trial_Complete = {
  encode(message: Analytics_UI_InAppStore_Trial_Complete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_InAppStore_Trial_Complete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_InAppStore_Trial_Complete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_InAppStore_Trial_Complete {
    return { result: isSet(object.result) ? analytics_UI_InAppStore_Trial_Complete_ResultFromJSON(object.result) : 0 };
  },

  toJSON(message: Analytics_UI_InAppStore_Trial_Complete): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = analytics_UI_InAppStore_Trial_Complete_ResultToJSON(message.result));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial_Complete>, I>>(
    base?: I,
  ): Analytics_UI_InAppStore_Trial_Complete {
    return Analytics_UI_InAppStore_Trial_Complete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_InAppStore_Trial_Complete>, I>>(
    object: I,
  ): Analytics_UI_InAppStore_Trial_Complete {
    const message = createBaseAnalytics_UI_InAppStore_Trial_Complete();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Editor(): Analytics_UI_Editor {
  return { overlay: undefined };
}

export const Analytics_UI_Editor = {
  encode(message: Analytics_UI_Editor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.overlay !== undefined) {
      Analytics_UI_Editor_Overlay.encode(message.overlay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Editor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Editor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.overlay = Analytics_UI_Editor_Overlay.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Editor {
    return { overlay: isSet(object.overlay) ? Analytics_UI_Editor_Overlay.fromJSON(object.overlay) : undefined };
  },

  toJSON(message: Analytics_UI_Editor): unknown {
    const obj: any = {};
    message.overlay !== undefined &&
      (obj.overlay = message.overlay ? Analytics_UI_Editor_Overlay.toJSON(message.overlay) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Editor>, I>>(base?: I): Analytics_UI_Editor {
    return Analytics_UI_Editor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Editor>, I>>(object: I): Analytics_UI_Editor {
    const message = createBaseAnalytics_UI_Editor();
    message.overlay = (object.overlay !== undefined && object.overlay !== null)
      ? Analytics_UI_Editor_Overlay.fromPartial(object.overlay)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Editor_Overlay(): Analytics_UI_Editor_Overlay {
  return { shown: undefined, closed: undefined };
}

export const Analytics_UI_Editor_Overlay = {
  encode(message: Analytics_UI_Editor_Overlay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_Editor_Overlay_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.closed !== undefined) {
      Analytics_UI_Editor_Overlay_Closed.encode(message.closed, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Editor_Overlay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Editor_Overlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_Editor_Overlay_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.closed = Analytics_UI_Editor_Overlay_Closed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Editor_Overlay {
    return {
      shown: isSet(object.shown) ? Analytics_UI_Editor_Overlay_Shown.fromJSON(object.shown) : undefined,
      closed: isSet(object.closed) ? Analytics_UI_Editor_Overlay_Closed.fromJSON(object.closed) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Editor_Overlay): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_Editor_Overlay_Shown.toJSON(message.shown) : undefined);
    message.closed !== undefined &&
      (obj.closed = message.closed ? Analytics_UI_Editor_Overlay_Closed.toJSON(message.closed) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay>, I>>(base?: I): Analytics_UI_Editor_Overlay {
    return Analytics_UI_Editor_Overlay.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay>, I>>(object: I): Analytics_UI_Editor_Overlay {
    const message = createBaseAnalytics_UI_Editor_Overlay();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_Editor_Overlay_Shown.fromPartial(object.shown)
      : undefined;
    message.closed = (object.closed !== undefined && object.closed !== null)
      ? Analytics_UI_Editor_Overlay_Closed.fromPartial(object.closed)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Editor_Overlay_Shown(): Analytics_UI_Editor_Overlay_Shown {
  return { source: 0 };
}

export const Analytics_UI_Editor_Overlay_Shown = {
  encode(message: Analytics_UI_Editor_Overlay_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Editor_Overlay_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Editor_Overlay_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Editor_Overlay_Shown {
    return { source: isSet(object.source) ? analytics_UI_Editor_Overlay_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_Editor_Overlay_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_Editor_Overlay_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay_Shown>, I>>(
    base?: I,
  ): Analytics_UI_Editor_Overlay_Shown {
    return Analytics_UI_Editor_Overlay_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay_Shown>, I>>(
    object: I,
  ): Analytics_UI_Editor_Overlay_Shown {
    const message = createBaseAnalytics_UI_Editor_Overlay_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Editor_Overlay_Closed(): Analytics_UI_Editor_Overlay_Closed {
  return { source: 0 };
}

export const Analytics_UI_Editor_Overlay_Closed = {
  encode(message: Analytics_UI_Editor_Overlay_Closed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Editor_Overlay_Closed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Editor_Overlay_Closed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Editor_Overlay_Closed {
    return { source: isSet(object.source) ? analytics_UI_Editor_Overlay_Closed_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_Editor_Overlay_Closed): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_Editor_Overlay_Closed_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay_Closed>, I>>(
    base?: I,
  ): Analytics_UI_Editor_Overlay_Closed {
    return Analytics_UI_Editor_Overlay_Closed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Editor_Overlay_Closed>, I>>(
    object: I,
  ): Analytics_UI_Editor_Overlay_Closed {
    const message = createBaseAnalytics_UI_Editor_Overlay_Closed();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_WhatsNew(): Analytics_UI_WhatsNew {
  return { viewed: undefined };
}

export const Analytics_UI_WhatsNew = {
  encode(message: Analytics_UI_WhatsNew, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.viewed !== undefined) {
      Analytics_UI_WhatsNew_Viewed.encode(message.viewed, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_WhatsNew {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_WhatsNew();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.viewed = Analytics_UI_WhatsNew_Viewed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_WhatsNew {
    return { viewed: isSet(object.viewed) ? Analytics_UI_WhatsNew_Viewed.fromJSON(object.viewed) : undefined };
  },

  toJSON(message: Analytics_UI_WhatsNew): unknown {
    const obj: any = {};
    message.viewed !== undefined &&
      (obj.viewed = message.viewed ? Analytics_UI_WhatsNew_Viewed.toJSON(message.viewed) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_WhatsNew>, I>>(base?: I): Analytics_UI_WhatsNew {
    return Analytics_UI_WhatsNew.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_WhatsNew>, I>>(object: I): Analytics_UI_WhatsNew {
    const message = createBaseAnalytics_UI_WhatsNew();
    message.viewed = (object.viewed !== undefined && object.viewed !== null)
      ? Analytics_UI_WhatsNew_Viewed.fromPartial(object.viewed)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_WhatsNew_Viewed(): Analytics_UI_WhatsNew_Viewed {
  return { version: "", resourceName: "", viewTime: 0 };
}

export const Analytics_UI_WhatsNew_Viewed = {
  encode(message: Analytics_UI_WhatsNew_Viewed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.viewTime !== 0) {
      writer.uint32(24).int32(message.viewTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_WhatsNew_Viewed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_WhatsNew_Viewed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.viewTime = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_WhatsNew_Viewed {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      resourceName: isSet(object.resourceName) ? String(object.resourceName) : "",
      viewTime: isSet(object.viewTime) ? Number(object.viewTime) : 0,
    };
  },

  toJSON(message: Analytics_UI_WhatsNew_Viewed): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.viewTime !== undefined && (obj.viewTime = Math.round(message.viewTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_WhatsNew_Viewed>, I>>(base?: I): Analytics_UI_WhatsNew_Viewed {
    return Analytics_UI_WhatsNew_Viewed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_WhatsNew_Viewed>, I>>(object: I): Analytics_UI_WhatsNew_Viewed {
    const message = createBaseAnalytics_UI_WhatsNew_Viewed();
    message.version = object.version ?? "";
    message.resourceName = object.resourceName ?? "";
    message.viewTime = object.viewTime ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups(): Analytics_UI_ClearGroups {
  return { shown: undefined, create: undefined, delete: undefined, group: undefined };
}

export const Analytics_UI_ClearGroups = {
  encode(message: Analytics_UI_ClearGroups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_ClearGroups_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Analytics_UI_ClearGroups_Create.encode(message.create, writer.uint32(18).fork()).ldelim();
    }
    if (message.delete !== undefined) {
      Analytics_UI_ClearGroups_Delete.encode(message.delete, writer.uint32(26).fork()).ldelim();
    }
    if (message.group !== undefined) {
      Analytics_UI_ClearGroups_Group.encode(message.group, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_ClearGroups_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.create = Analytics_UI_ClearGroups_Create.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.delete = Analytics_UI_ClearGroups_Delete.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.group = Analytics_UI_ClearGroups_Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ClearGroups {
    return {
      shown: isSet(object.shown) ? Analytics_UI_ClearGroups_Shown.fromJSON(object.shown) : undefined,
      create: isSet(object.create) ? Analytics_UI_ClearGroups_Create.fromJSON(object.create) : undefined,
      delete: isSet(object.delete) ? Analytics_UI_ClearGroups_Delete.fromJSON(object.delete) : undefined,
      group: isSet(object.group) ? Analytics_UI_ClearGroups_Group.fromJSON(object.group) : undefined,
    };
  },

  toJSON(message: Analytics_UI_ClearGroups): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_ClearGroups_Shown.toJSON(message.shown) : undefined);
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_ClearGroups_Create.toJSON(message.create) : undefined);
    message.delete !== undefined &&
      (obj.delete = message.delete ? Analytics_UI_ClearGroups_Delete.toJSON(message.delete) : undefined);
    message.group !== undefined &&
      (obj.group = message.group ? Analytics_UI_ClearGroups_Group.toJSON(message.group) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups>, I>>(base?: I): Analytics_UI_ClearGroups {
    return Analytics_UI_ClearGroups.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups>, I>>(object: I): Analytics_UI_ClearGroups {
    const message = createBaseAnalytics_UI_ClearGroups();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_ClearGroups_Shown.fromPartial(object.shown)
      : undefined;
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_ClearGroups_Create.fromPartial(object.create)
      : undefined;
    message.delete = (object.delete !== undefined && object.delete !== null)
      ? Analytics_UI_ClearGroups_Delete.fromPartial(object.delete)
      : undefined;
    message.group = (object.group !== undefined && object.group !== null)
      ? Analytics_UI_ClearGroups_Group.fromPartial(object.group)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Shown(): Analytics_UI_ClearGroups_Shown {
  return { source: 0 };
}

export const Analytics_UI_ClearGroups_Shown = {
  encode(message: Analytics_UI_ClearGroups_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ClearGroups_Shown {
    return { source: isSet(object.source) ? analytics_UI_ClearGroups_Shown_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_UI_ClearGroups_Shown): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_UI_ClearGroups_Shown_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Shown>, I>>(base?: I): Analytics_UI_ClearGroups_Shown {
    return Analytics_UI_ClearGroups_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Shown>, I>>(
    object: I,
  ): Analytics_UI_ClearGroups_Shown {
    const message = createBaseAnalytics_UI_ClearGroups_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Create(): Analytics_UI_ClearGroups_Create {
  return {};
}

export const Analytics_UI_ClearGroups_Create = {
  encode(_: Analytics_UI_ClearGroups_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Create();
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

  fromJSON(_: any): Analytics_UI_ClearGroups_Create {
    return {};
  },

  toJSON(_: Analytics_UI_ClearGroups_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Create>, I>>(base?: I): Analytics_UI_ClearGroups_Create {
    return Analytics_UI_ClearGroups_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Create>, I>>(_: I): Analytics_UI_ClearGroups_Create {
    const message = createBaseAnalytics_UI_ClearGroups_Create();
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Delete(): Analytics_UI_ClearGroups_Delete {
  return {};
}

export const Analytics_UI_ClearGroups_Delete = {
  encode(_: Analytics_UI_ClearGroups_Delete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Delete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Delete();
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

  fromJSON(_: any): Analytics_UI_ClearGroups_Delete {
    return {};
  },

  toJSON(_: Analytics_UI_ClearGroups_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Delete>, I>>(base?: I): Analytics_UI_ClearGroups_Delete {
    return Analytics_UI_ClearGroups_Delete.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Delete>, I>>(_: I): Analytics_UI_ClearGroups_Delete {
    const message = createBaseAnalytics_UI_ClearGroups_Delete();
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Group(): Analytics_UI_ClearGroups_Group {
  return { changeVisibility: undefined, changeIcon: undefined };
}

export const Analytics_UI_ClearGroups_Group = {
  encode(message: Analytics_UI_ClearGroups_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeVisibility !== undefined) {
      Analytics_UI_ClearGroups_Group_ChangeVisibility.encode(message.changeVisibility, writer.uint32(10).fork())
        .ldelim();
    }
    if (message.changeIcon !== undefined) {
      Analytics_UI_ClearGroups_Group_ChangeIcon.encode(message.changeIcon, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.changeVisibility = Analytics_UI_ClearGroups_Group_ChangeVisibility.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.changeIcon = Analytics_UI_ClearGroups_Group_ChangeIcon.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ClearGroups_Group {
    return {
      changeVisibility: isSet(object.changeVisibility)
        ? Analytics_UI_ClearGroups_Group_ChangeVisibility.fromJSON(object.changeVisibility)
        : undefined,
      changeIcon: isSet(object.changeIcon)
        ? Analytics_UI_ClearGroups_Group_ChangeIcon.fromJSON(object.changeIcon)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_ClearGroups_Group): unknown {
    const obj: any = {};
    message.changeVisibility !== undefined && (obj.changeVisibility = message.changeVisibility
      ? Analytics_UI_ClearGroups_Group_ChangeVisibility.toJSON(message.changeVisibility)
      : undefined);
    message.changeIcon !== undefined && (obj.changeIcon = message.changeIcon
      ? Analytics_UI_ClearGroups_Group_ChangeIcon.toJSON(message.changeIcon)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group>, I>>(base?: I): Analytics_UI_ClearGroups_Group {
    return Analytics_UI_ClearGroups_Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group>, I>>(
    object: I,
  ): Analytics_UI_ClearGroups_Group {
    const message = createBaseAnalytics_UI_ClearGroups_Group();
    message.changeVisibility = (object.changeVisibility !== undefined && object.changeVisibility !== null)
      ? Analytics_UI_ClearGroups_Group_ChangeVisibility.fromPartial(object.changeVisibility)
      : undefined;
    message.changeIcon = (object.changeIcon !== undefined && object.changeIcon !== null)
      ? Analytics_UI_ClearGroups_Group_ChangeIcon.fromPartial(object.changeIcon)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Group_ChangeVisibility(): Analytics_UI_ClearGroups_Group_ChangeVisibility {
  return { visibility: 0 };
}

export const Analytics_UI_ClearGroups_Group_ChangeVisibility = {
  encode(
    message: Analytics_UI_ClearGroups_Group_ChangeVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibility !== 0) {
      writer.uint32(8).int32(message.visibility);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Group_ChangeVisibility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Group_ChangeVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ClearGroups_Group_ChangeVisibility {
    return {
      visibility: isSet(object.visibility)
        ? analytics_UI_ClearGroups_Group_ChangeVisibility_VisibilityFromJSON(object.visibility)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_ClearGroups_Group_ChangeVisibility): unknown {
    const obj: any = {};
    message.visibility !== undefined &&
      (obj.visibility = analytics_UI_ClearGroups_Group_ChangeVisibility_VisibilityToJSON(message.visibility));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group_ChangeVisibility>, I>>(
    base?: I,
  ): Analytics_UI_ClearGroups_Group_ChangeVisibility {
    return Analytics_UI_ClearGroups_Group_ChangeVisibility.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group_ChangeVisibility>, I>>(
    object: I,
  ): Analytics_UI_ClearGroups_Group_ChangeVisibility {
    const message = createBaseAnalytics_UI_ClearGroups_Group_ChangeVisibility();
    message.visibility = object.visibility ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_ClearGroups_Group_ChangeIcon(): Analytics_UI_ClearGroups_Group_ChangeIcon {
  return { iconType: 0, isTinted: false };
}

export const Analytics_UI_ClearGroups_Group_ChangeIcon = {
  encode(message: Analytics_UI_ClearGroups_Group_ChangeIcon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iconType !== 0) {
      writer.uint32(8).int32(message.iconType);
    }
    if (message.isTinted === true) {
      writer.uint32(16).bool(message.isTinted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_ClearGroups_Group_ChangeIcon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_ClearGroups_Group_ChangeIcon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.iconType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isTinted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_ClearGroups_Group_ChangeIcon {
    return {
      iconType: isSet(object.iconType)
        ? analytics_UI_ClearGroups_Group_ChangeIcon_IconTypeFromJSON(object.iconType)
        : 0,
      isTinted: isSet(object.isTinted) ? Boolean(object.isTinted) : false,
    };
  },

  toJSON(message: Analytics_UI_ClearGroups_Group_ChangeIcon): unknown {
    const obj: any = {};
    message.iconType !== undefined &&
      (obj.iconType = analytics_UI_ClearGroups_Group_ChangeIcon_IconTypeToJSON(message.iconType));
    message.isTinted !== undefined && (obj.isTinted = message.isTinted);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group_ChangeIcon>, I>>(
    base?: I,
  ): Analytics_UI_ClearGroups_Group_ChangeIcon {
    return Analytics_UI_ClearGroups_Group_ChangeIcon.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_ClearGroups_Group_ChangeIcon>, I>>(
    object: I,
  ): Analytics_UI_ClearGroups_Group_ChangeIcon {
    const message = createBaseAnalytics_UI_ClearGroups_Group_ChangeIcon();
    message.iconType = object.iconType ?? 0;
    message.isTinted = object.isTinted ?? false;
    return message;
  },
};

function createBaseAnalytics_UI_PreviewArea(): Analytics_UI_PreviewArea {
  return { clearGroups: undefined };
}

export const Analytics_UI_PreviewArea = {
  encode(message: Analytics_UI_PreviewArea, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clearGroups !== undefined) {
      Analytics_UI_PreviewArea_ClearGroups.encode(message.clearGroups, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PreviewArea {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PreviewArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.clearGroups = Analytics_UI_PreviewArea_ClearGroups.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_PreviewArea {
    return {
      clearGroups: isSet(object.clearGroups)
        ? Analytics_UI_PreviewArea_ClearGroups.fromJSON(object.clearGroups)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_PreviewArea): unknown {
    const obj: any = {};
    message.clearGroups !== undefined && (obj.clearGroups = message.clearGroups
      ? Analytics_UI_PreviewArea_ClearGroups.toJSON(message.clearGroups)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PreviewArea>, I>>(base?: I): Analytics_UI_PreviewArea {
    return Analytics_UI_PreviewArea.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PreviewArea>, I>>(object: I): Analytics_UI_PreviewArea {
    const message = createBaseAnalytics_UI_PreviewArea();
    message.clearGroups = (object.clearGroups !== undefined && object.clearGroups !== null)
      ? Analytics_UI_PreviewArea_ClearGroups.fromPartial(object.clearGroups)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_PreviewArea_ClearGroups(): Analytics_UI_PreviewArea_ClearGroups {
  return { trigger: undefined, changed: undefined };
}

export const Analytics_UI_PreviewArea_ClearGroups = {
  encode(message: Analytics_UI_PreviewArea_ClearGroups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trigger !== undefined) {
      Analytics_UI_PreviewArea_ClearGroups_Trigger.encode(message.trigger, writer.uint32(10).fork()).ldelim();
    }
    if (message.changed !== undefined) {
      Analytics_UI_PreviewArea_ClearGroups_Changed.encode(message.changed, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PreviewArea_ClearGroups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trigger = Analytics_UI_PreviewArea_ClearGroups_Trigger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.changed = Analytics_UI_PreviewArea_ClearGroups_Changed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_PreviewArea_ClearGroups {
    return {
      trigger: isSet(object.trigger)
        ? Analytics_UI_PreviewArea_ClearGroups_Trigger.fromJSON(object.trigger)
        : undefined,
      changed: isSet(object.changed)
        ? Analytics_UI_PreviewArea_ClearGroups_Changed.fromJSON(object.changed)
        : undefined,
    };
  },

  toJSON(message: Analytics_UI_PreviewArea_ClearGroups): unknown {
    const obj: any = {};
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? Analytics_UI_PreviewArea_ClearGroups_Trigger.toJSON(message.trigger)
        : undefined);
    message.changed !== undefined &&
      (obj.changed = message.changed
        ? Analytics_UI_PreviewArea_ClearGroups_Changed.toJSON(message.changed)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups>, I>>(
    base?: I,
  ): Analytics_UI_PreviewArea_ClearGroups {
    return Analytics_UI_PreviewArea_ClearGroups.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups>, I>>(
    object: I,
  ): Analytics_UI_PreviewArea_ClearGroups {
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups();
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? Analytics_UI_PreviewArea_ClearGroups_Trigger.fromPartial(object.trigger)
      : undefined;
    message.changed = (object.changed !== undefined && object.changed !== null)
      ? Analytics_UI_PreviewArea_ClearGroups_Changed.fromPartial(object.changed)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_PreviewArea_ClearGroups_Trigger(): Analytics_UI_PreviewArea_ClearGroups_Trigger {
  return {};
}

export const Analytics_UI_PreviewArea_ClearGroups_Trigger = {
  encode(_: Analytics_UI_PreviewArea_ClearGroups_Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PreviewArea_ClearGroups_Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups_Trigger();
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

  fromJSON(_: any): Analytics_UI_PreviewArea_ClearGroups_Trigger {
    return {};
  },

  toJSON(_: Analytics_UI_PreviewArea_ClearGroups_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups_Trigger>, I>>(
    base?: I,
  ): Analytics_UI_PreviewArea_ClearGroups_Trigger {
    return Analytics_UI_PreviewArea_ClearGroups_Trigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups_Trigger>, I>>(
    _: I,
  ): Analytics_UI_PreviewArea_ClearGroups_Trigger {
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups_Trigger();
    return message;
  },
};

function createBaseAnalytics_UI_PreviewArea_ClearGroups_Changed(): Analytics_UI_PreviewArea_ClearGroups_Changed {
  return { count: 0 };
}

export const Analytics_UI_PreviewArea_ClearGroups_Changed = {
  encode(message: Analytics_UI_PreviewArea_ClearGroups_Changed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PreviewArea_ClearGroups_Changed {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups_Changed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_PreviewArea_ClearGroups_Changed {
    return { count: isSet(object.count) ? Number(object.count) : 0 };
  },

  toJSON(message: Analytics_UI_PreviewArea_ClearGroups_Changed): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups_Changed>, I>>(
    base?: I,
  ): Analytics_UI_PreviewArea_ClearGroups_Changed {
    return Analytics_UI_PreviewArea_ClearGroups_Changed.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PreviewArea_ClearGroups_Changed>, I>>(
    object: I,
  ): Analytics_UI_PreviewArea_ClearGroups_Changed {
    const message = createBaseAnalytics_UI_PreviewArea_ClearGroups_Changed();
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Placeholder(): Analytics_UI_Placeholder {
  return { link: undefined, unlink: undefined };
}

export const Analytics_UI_Placeholder = {
  encode(message: Analytics_UI_Placeholder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.link !== undefined) {
      Analytics_UI_Placeholder_Link.encode(message.link, writer.uint32(10).fork()).ldelim();
    }
    if (message.unlink !== undefined) {
      Analytics_UI_Placeholder_Unlink.encode(message.unlink, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Placeholder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Placeholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.link = Analytics_UI_Placeholder_Link.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.unlink = Analytics_UI_Placeholder_Unlink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Placeholder {
    return {
      link: isSet(object.link) ? Analytics_UI_Placeholder_Link.fromJSON(object.link) : undefined,
      unlink: isSet(object.unlink) ? Analytics_UI_Placeholder_Unlink.fromJSON(object.unlink) : undefined,
    };
  },

  toJSON(message: Analytics_UI_Placeholder): unknown {
    const obj: any = {};
    message.link !== undefined &&
      (obj.link = message.link ? Analytics_UI_Placeholder_Link.toJSON(message.link) : undefined);
    message.unlink !== undefined &&
      (obj.unlink = message.unlink ? Analytics_UI_Placeholder_Unlink.toJSON(message.unlink) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Placeholder>, I>>(base?: I): Analytics_UI_Placeholder {
    return Analytics_UI_Placeholder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Placeholder>, I>>(object: I): Analytics_UI_Placeholder {
    const message = createBaseAnalytics_UI_Placeholder();
    message.link = (object.link !== undefined && object.link !== null)
      ? Analytics_UI_Placeholder_Link.fromPartial(object.link)
      : undefined;
    message.unlink = (object.unlink !== undefined && object.unlink !== null)
      ? Analytics_UI_Placeholder_Unlink.fromPartial(object.unlink)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_Placeholder_Link(): Analytics_UI_Placeholder_Link {
  return { linkType: 0, linkSource: 0 };
}

export const Analytics_UI_Placeholder_Link = {
  encode(message: Analytics_UI_Placeholder_Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linkType !== 0) {
      writer.uint32(8).int32(message.linkType);
    }
    if (message.linkSource !== 0) {
      writer.uint32(16).int32(message.linkSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Placeholder_Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Placeholder_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.linkType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.linkSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_Placeholder_Link {
    return {
      linkType: isSet(object.linkType) ? analytics_UI_Placeholder_Link_TypeFromJSON(object.linkType) : 0,
      linkSource: isSet(object.linkSource) ? analytics_UI_Placeholder_Link_SourceFromJSON(object.linkSource) : 0,
    };
  },

  toJSON(message: Analytics_UI_Placeholder_Link): unknown {
    const obj: any = {};
    message.linkType !== undefined && (obj.linkType = analytics_UI_Placeholder_Link_TypeToJSON(message.linkType));
    message.linkSource !== undefined &&
      (obj.linkSource = analytics_UI_Placeholder_Link_SourceToJSON(message.linkSource));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Placeholder_Link>, I>>(base?: I): Analytics_UI_Placeholder_Link {
    return Analytics_UI_Placeholder_Link.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Placeholder_Link>, I>>(
    object: I,
  ): Analytics_UI_Placeholder_Link {
    const message = createBaseAnalytics_UI_Placeholder_Link();
    message.linkType = object.linkType ?? 0;
    message.linkSource = object.linkSource ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_Placeholder_Unlink(): Analytics_UI_Placeholder_Unlink {
  return {};
}

export const Analytics_UI_Placeholder_Unlink = {
  encode(_: Analytics_UI_Placeholder_Unlink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_Placeholder_Unlink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_Placeholder_Unlink();
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

  fromJSON(_: any): Analytics_UI_Placeholder_Unlink {
    return {};
  },

  toJSON(_: Analytics_UI_Placeholder_Unlink): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_Placeholder_Unlink>, I>>(base?: I): Analytics_UI_Placeholder_Unlink {
    return Analytics_UI_Placeholder_Unlink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_Placeholder_Unlink>, I>>(_: I): Analytics_UI_Placeholder_Unlink {
    const message = createBaseAnalytics_UI_Placeholder_Unlink();
    return message;
  },
};

function createBaseAnalytics_UI_PlanningCenterLive(): Analytics_UI_PlanningCenterLive {
  return { shown: undefined };
}

export const Analytics_UI_PlanningCenterLive = {
  encode(message: Analytics_UI_PlanningCenterLive, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_PlanningCenterLive_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PlanningCenterLive {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PlanningCenterLive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_PlanningCenterLive_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_PlanningCenterLive {
    return { shown: isSet(object.shown) ? Analytics_UI_PlanningCenterLive_Shown.fromJSON(object.shown) : undefined };
  },

  toJSON(message: Analytics_UI_PlanningCenterLive): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_PlanningCenterLive_Shown.toJSON(message.shown) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PlanningCenterLive>, I>>(base?: I): Analytics_UI_PlanningCenterLive {
    return Analytics_UI_PlanningCenterLive.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PlanningCenterLive>, I>>(
    object: I,
  ): Analytics_UI_PlanningCenterLive {
    const message = createBaseAnalytics_UI_PlanningCenterLive();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_PlanningCenterLive_Shown.fromPartial(object.shown)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_PlanningCenterLive_Shown(): Analytics_UI_PlanningCenterLive_Shown {
  return { windowType: 0 };
}

export const Analytics_UI_PlanningCenterLive_Shown = {
  encode(message: Analytics_UI_PlanningCenterLive_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.windowType !== 0) {
      writer.uint32(8).int32(message.windowType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_PlanningCenterLive_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_PlanningCenterLive_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.windowType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_PlanningCenterLive_Shown {
    return {
      windowType: isSet(object.windowType)
        ? analytics_UI_PlanningCenterLive_Shown_WindowTypeFromJSON(object.windowType)
        : 0,
    };
  },

  toJSON(message: Analytics_UI_PlanningCenterLive_Shown): unknown {
    const obj: any = {};
    message.windowType !== undefined &&
      (obj.windowType = analytics_UI_PlanningCenterLive_Shown_WindowTypeToJSON(message.windowType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_PlanningCenterLive_Shown>, I>>(
    base?: I,
  ): Analytics_UI_PlanningCenterLive_Shown {
    return Analytics_UI_PlanningCenterLive_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_PlanningCenterLive_Shown>, I>>(
    object: I,
  ): Analytics_UI_PlanningCenterLive_Shown {
    const message = createBaseAnalytics_UI_PlanningCenterLive_Shown();
    message.windowType = object.windowType ?? 0;
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup(): Analytics_UI_NetworkGroup {
  return { create: undefined, add: undefined, join: undefined, invite: undefined, leave: undefined, remove: undefined };
}

export const Analytics_UI_NetworkGroup = {
  encode(message: Analytics_UI_NetworkGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.create !== undefined) {
      Analytics_UI_NetworkGroup_Create.encode(message.create, writer.uint32(10).fork()).ldelim();
    }
    if (message.add !== undefined) {
      Analytics_UI_NetworkGroup_Add.encode(message.add, writer.uint32(18).fork()).ldelim();
    }
    if (message.join !== undefined) {
      Analytics_UI_NetworkGroup_Join.encode(message.join, writer.uint32(26).fork()).ldelim();
    }
    if (message.invite !== undefined) {
      Analytics_UI_NetworkGroup_Invite.encode(message.invite, writer.uint32(34).fork()).ldelim();
    }
    if (message.leave !== undefined) {
      Analytics_UI_NetworkGroup_Leave.encode(message.leave, writer.uint32(42).fork()).ldelim();
    }
    if (message.remove !== undefined) {
      Analytics_UI_NetworkGroup_Remove.encode(message.remove, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.create = Analytics_UI_NetworkGroup_Create.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.add = Analytics_UI_NetworkGroup_Add.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.join = Analytics_UI_NetworkGroup_Join.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.invite = Analytics_UI_NetworkGroup_Invite.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.leave = Analytics_UI_NetworkGroup_Leave.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.remove = Analytics_UI_NetworkGroup_Remove.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_NetworkGroup {
    return {
      create: isSet(object.create) ? Analytics_UI_NetworkGroup_Create.fromJSON(object.create) : undefined,
      add: isSet(object.add) ? Analytics_UI_NetworkGroup_Add.fromJSON(object.add) : undefined,
      join: isSet(object.join) ? Analytics_UI_NetworkGroup_Join.fromJSON(object.join) : undefined,
      invite: isSet(object.invite) ? Analytics_UI_NetworkGroup_Invite.fromJSON(object.invite) : undefined,
      leave: isSet(object.leave) ? Analytics_UI_NetworkGroup_Leave.fromJSON(object.leave) : undefined,
      remove: isSet(object.remove) ? Analytics_UI_NetworkGroup_Remove.fromJSON(object.remove) : undefined,
    };
  },

  toJSON(message: Analytics_UI_NetworkGroup): unknown {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create ? Analytics_UI_NetworkGroup_Create.toJSON(message.create) : undefined);
    message.add !== undefined &&
      (obj.add = message.add ? Analytics_UI_NetworkGroup_Add.toJSON(message.add) : undefined);
    message.join !== undefined &&
      (obj.join = message.join ? Analytics_UI_NetworkGroup_Join.toJSON(message.join) : undefined);
    message.invite !== undefined &&
      (obj.invite = message.invite ? Analytics_UI_NetworkGroup_Invite.toJSON(message.invite) : undefined);
    message.leave !== undefined &&
      (obj.leave = message.leave ? Analytics_UI_NetworkGroup_Leave.toJSON(message.leave) : undefined);
    message.remove !== undefined &&
      (obj.remove = message.remove ? Analytics_UI_NetworkGroup_Remove.toJSON(message.remove) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup>, I>>(base?: I): Analytics_UI_NetworkGroup {
    return Analytics_UI_NetworkGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup>, I>>(object: I): Analytics_UI_NetworkGroup {
    const message = createBaseAnalytics_UI_NetworkGroup();
    message.create = (object.create !== undefined && object.create !== null)
      ? Analytics_UI_NetworkGroup_Create.fromPartial(object.create)
      : undefined;
    message.add = (object.add !== undefined && object.add !== null)
      ? Analytics_UI_NetworkGroup_Add.fromPartial(object.add)
      : undefined;
    message.join = (object.join !== undefined && object.join !== null)
      ? Analytics_UI_NetworkGroup_Join.fromPartial(object.join)
      : undefined;
    message.invite = (object.invite !== undefined && object.invite !== null)
      ? Analytics_UI_NetworkGroup_Invite.fromPartial(object.invite)
      : undefined;
    message.leave = (object.leave !== undefined && object.leave !== null)
      ? Analytics_UI_NetworkGroup_Leave.fromPartial(object.leave)
      : undefined;
    message.remove = (object.remove !== undefined && object.remove !== null)
      ? Analytics_UI_NetworkGroup_Remove.fromPartial(object.remove)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Create(): Analytics_UI_NetworkGroup_Create {
  return {};
}

export const Analytics_UI_NetworkGroup_Create = {
  encode(_: Analytics_UI_NetworkGroup_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Create();
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

  fromJSON(_: any): Analytics_UI_NetworkGroup_Create {
    return {};
  },

  toJSON(_: Analytics_UI_NetworkGroup_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Create>, I>>(
    base?: I,
  ): Analytics_UI_NetworkGroup_Create {
    return Analytics_UI_NetworkGroup_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Create>, I>>(
    _: I,
  ): Analytics_UI_NetworkGroup_Create {
    const message = createBaseAnalytics_UI_NetworkGroup_Create();
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Add(): Analytics_UI_NetworkGroup_Add {
  return {};
}

export const Analytics_UI_NetworkGroup_Add = {
  encode(_: Analytics_UI_NetworkGroup_Add, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Add {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Add();
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

  fromJSON(_: any): Analytics_UI_NetworkGroup_Add {
    return {};
  },

  toJSON(_: Analytics_UI_NetworkGroup_Add): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Add>, I>>(base?: I): Analytics_UI_NetworkGroup_Add {
    return Analytics_UI_NetworkGroup_Add.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Add>, I>>(_: I): Analytics_UI_NetworkGroup_Add {
    const message = createBaseAnalytics_UI_NetworkGroup_Add();
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Join(): Analytics_UI_NetworkGroup_Join {
  return {};
}

export const Analytics_UI_NetworkGroup_Join = {
  encode(_: Analytics_UI_NetworkGroup_Join, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Join {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Join();
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

  fromJSON(_: any): Analytics_UI_NetworkGroup_Join {
    return {};
  },

  toJSON(_: Analytics_UI_NetworkGroup_Join): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Join>, I>>(base?: I): Analytics_UI_NetworkGroup_Join {
    return Analytics_UI_NetworkGroup_Join.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Join>, I>>(_: I): Analytics_UI_NetworkGroup_Join {
    const message = createBaseAnalytics_UI_NetworkGroup_Join();
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Invite(): Analytics_UI_NetworkGroup_Invite {
  return { didAccept: false };
}

export const Analytics_UI_NetworkGroup_Invite = {
  encode(message: Analytics_UI_NetworkGroup_Invite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didAccept === true) {
      writer.uint32(8).bool(message.didAccept);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Invite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Invite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.didAccept = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_NetworkGroup_Invite {
    return { didAccept: isSet(object.didAccept) ? Boolean(object.didAccept) : false };
  },

  toJSON(message: Analytics_UI_NetworkGroup_Invite): unknown {
    const obj: any = {};
    message.didAccept !== undefined && (obj.didAccept = message.didAccept);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Invite>, I>>(
    base?: I,
  ): Analytics_UI_NetworkGroup_Invite {
    return Analytics_UI_NetworkGroup_Invite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Invite>, I>>(
    object: I,
  ): Analytics_UI_NetworkGroup_Invite {
    const message = createBaseAnalytics_UI_NetworkGroup_Invite();
    message.didAccept = object.didAccept ?? false;
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Leave(): Analytics_UI_NetworkGroup_Leave {
  return {};
}

export const Analytics_UI_NetworkGroup_Leave = {
  encode(_: Analytics_UI_NetworkGroup_Leave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Leave {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Leave();
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

  fromJSON(_: any): Analytics_UI_NetworkGroup_Leave {
    return {};
  },

  toJSON(_: Analytics_UI_NetworkGroup_Leave): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Leave>, I>>(base?: I): Analytics_UI_NetworkGroup_Leave {
    return Analytics_UI_NetworkGroup_Leave.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Leave>, I>>(_: I): Analytics_UI_NetworkGroup_Leave {
    const message = createBaseAnalytics_UI_NetworkGroup_Leave();
    return message;
  },
};

function createBaseAnalytics_UI_NetworkGroup_Remove(): Analytics_UI_NetworkGroup_Remove {
  return {};
}

export const Analytics_UI_NetworkGroup_Remove = {
  encode(_: Analytics_UI_NetworkGroup_Remove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_NetworkGroup_Remove {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_NetworkGroup_Remove();
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

  fromJSON(_: any): Analytics_UI_NetworkGroup_Remove {
    return {};
  },

  toJSON(_: Analytics_UI_NetworkGroup_Remove): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Remove>, I>>(
    base?: I,
  ): Analytics_UI_NetworkGroup_Remove {
    return Analytics_UI_NetworkGroup_Remove.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_NetworkGroup_Remove>, I>>(
    _: I,
  ): Analytics_UI_NetworkGroup_Remove {
    const message = createBaseAnalytics_UI_NetworkGroup_Remove();
    return message;
  },
};

function createBaseAnalytics_UI_CCLI(): Analytics_UI_CCLI {
  return { report: undefined };
}

export const Analytics_UI_CCLI = {
  encode(message: Analytics_UI_CCLI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.report !== undefined) {
      Analytics_UI_CCLI_Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_CCLI {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_CCLI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.report = Analytics_UI_CCLI_Report.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_CCLI {
    return { report: isSet(object.report) ? Analytics_UI_CCLI_Report.fromJSON(object.report) : undefined };
  },

  toJSON(message: Analytics_UI_CCLI): unknown {
    const obj: any = {};
    message.report !== undefined &&
      (obj.report = message.report ? Analytics_UI_CCLI_Report.toJSON(message.report) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_CCLI>, I>>(base?: I): Analytics_UI_CCLI {
    return Analytics_UI_CCLI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_CCLI>, I>>(object: I): Analytics_UI_CCLI {
    const message = createBaseAnalytics_UI_CCLI();
    message.report = (object.report !== undefined && object.report !== null)
      ? Analytics_UI_CCLI_Report.fromPartial(object.report)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_CCLI_Report(): Analytics_UI_CCLI_Report {
  return { shown: undefined, reset: undefined, export: undefined };
}

export const Analytics_UI_CCLI_Report = {
  encode(message: Analytics_UI_CCLI_Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shown !== undefined) {
      Analytics_UI_CCLI_Report_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    if (message.reset !== undefined) {
      Analytics_UI_CCLI_Report_Reset.encode(message.reset, writer.uint32(18).fork()).ldelim();
    }
    if (message.export !== undefined) {
      Analytics_UI_CCLI_Report_Export.encode(message.export, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_CCLI_Report {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_CCLI_Report();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.shown = Analytics_UI_CCLI_Report_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.reset = Analytics_UI_CCLI_Report_Reset.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.export = Analytics_UI_CCLI_Report_Export.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_UI_CCLI_Report {
    return {
      shown: isSet(object.shown) ? Analytics_UI_CCLI_Report_Shown.fromJSON(object.shown) : undefined,
      reset: isSet(object.reset) ? Analytics_UI_CCLI_Report_Reset.fromJSON(object.reset) : undefined,
      export: isSet(object.export) ? Analytics_UI_CCLI_Report_Export.fromJSON(object.export) : undefined,
    };
  },

  toJSON(message: Analytics_UI_CCLI_Report): unknown {
    const obj: any = {};
    message.shown !== undefined &&
      (obj.shown = message.shown ? Analytics_UI_CCLI_Report_Shown.toJSON(message.shown) : undefined);
    message.reset !== undefined &&
      (obj.reset = message.reset ? Analytics_UI_CCLI_Report_Reset.toJSON(message.reset) : undefined);
    message.export !== undefined &&
      (obj.export = message.export ? Analytics_UI_CCLI_Report_Export.toJSON(message.export) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report>, I>>(base?: I): Analytics_UI_CCLI_Report {
    return Analytics_UI_CCLI_Report.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report>, I>>(object: I): Analytics_UI_CCLI_Report {
    const message = createBaseAnalytics_UI_CCLI_Report();
    message.shown = (object.shown !== undefined && object.shown !== null)
      ? Analytics_UI_CCLI_Report_Shown.fromPartial(object.shown)
      : undefined;
    message.reset = (object.reset !== undefined && object.reset !== null)
      ? Analytics_UI_CCLI_Report_Reset.fromPartial(object.reset)
      : undefined;
    message.export = (object.export !== undefined && object.export !== null)
      ? Analytics_UI_CCLI_Report_Export.fromPartial(object.export)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_UI_CCLI_Report_Shown(): Analytics_UI_CCLI_Report_Shown {
  return {};
}

export const Analytics_UI_CCLI_Report_Shown = {
  encode(_: Analytics_UI_CCLI_Report_Shown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_CCLI_Report_Shown {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_CCLI_Report_Shown();
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

  fromJSON(_: any): Analytics_UI_CCLI_Report_Shown {
    return {};
  },

  toJSON(_: Analytics_UI_CCLI_Report_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Shown>, I>>(base?: I): Analytics_UI_CCLI_Report_Shown {
    return Analytics_UI_CCLI_Report_Shown.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Shown>, I>>(_: I): Analytics_UI_CCLI_Report_Shown {
    const message = createBaseAnalytics_UI_CCLI_Report_Shown();
    return message;
  },
};

function createBaseAnalytics_UI_CCLI_Report_Reset(): Analytics_UI_CCLI_Report_Reset {
  return {};
}

export const Analytics_UI_CCLI_Report_Reset = {
  encode(_: Analytics_UI_CCLI_Report_Reset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_CCLI_Report_Reset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_CCLI_Report_Reset();
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

  fromJSON(_: any): Analytics_UI_CCLI_Report_Reset {
    return {};
  },

  toJSON(_: Analytics_UI_CCLI_Report_Reset): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Reset>, I>>(base?: I): Analytics_UI_CCLI_Report_Reset {
    return Analytics_UI_CCLI_Report_Reset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Reset>, I>>(_: I): Analytics_UI_CCLI_Report_Reset {
    const message = createBaseAnalytics_UI_CCLI_Report_Reset();
    return message;
  },
};

function createBaseAnalytics_UI_CCLI_Report_Export(): Analytics_UI_CCLI_Report_Export {
  return {};
}

export const Analytics_UI_CCLI_Report_Export = {
  encode(_: Analytics_UI_CCLI_Report_Export, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_UI_CCLI_Report_Export {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_UI_CCLI_Report_Export();
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

  fromJSON(_: any): Analytics_UI_CCLI_Report_Export {
    return {};
  },

  toJSON(_: Analytics_UI_CCLI_Report_Export): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Export>, I>>(base?: I): Analytics_UI_CCLI_Report_Export {
    return Analytics_UI_CCLI_Report_Export.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_UI_CCLI_Report_Export>, I>>(_: I): Analytics_UI_CCLI_Report_Export {
    const message = createBaseAnalytics_UI_CCLI_Report_Export();
    return message;
  },
};

function createBaseAnalytics_Startup(): Analytics_Startup {
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
  };
}

export const Analytics_Startup = {
  encode(message: Analytics_Startup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.looks !== undefined) {
      Analytics_Startup_Looks.encode(message.looks, writer.uint32(10).fork()).ldelim();
    }
    if (message.screenConfiguration !== undefined) {
      Analytics_Startup_ScreenConfiguration.encode(message.screenConfiguration, writer.uint32(18).fork()).ldelim();
    }
    if (message.preferences !== undefined) {
      Analytics_Startup_Preferences.encode(message.preferences, writer.uint32(26).fork()).ldelim();
    }
    if (message.screens !== undefined) {
      Analytics_Startup_Screens.encode(message.screens, writer.uint32(34).fork()).ldelim();
    }
    if (message.planningCenter !== undefined) {
      Analytics_Startup_PlanningCenter.encode(message.planningCenter, writer.uint32(42).fork()).ldelim();
    }
    if (message.songSelect !== undefined) {
      Analytics_Startup_SongSelect.encode(message.songSelect, writer.uint32(50).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Analytics_Startup_Audio.encode(message.audio, writer.uint32(58).fork()).ldelim();
    }
    if (message.communications !== undefined) {
      Analytics_Startup_Communications.encode(message.communications, writer.uint32(66).fork()).ldelim();
    }
    if (message.resi !== undefined) {
      Analytics_Startup_Resi.encode(message.resi, writer.uint32(74).fork()).ldelim();
    }
    if (message.interface !== undefined) {
      Analytics_Startup_Interface.encode(message.interface, writer.uint32(82).fork()).ldelim();
    }
    if (message.content !== undefined) {
      Analytics_Startup_Content.encode(message.content, writer.uint32(90).fork()).ldelim();
    }
    if (message.themes !== undefined) {
      Analytics_Startup_Themes.encode(message.themes, writer.uint32(98).fork()).ldelim();
    }
    if (message.macro !== undefined) {
      Analytics_Startup_Macro.encode(message.macro, writer.uint32(106).fork()).ldelim();
    }
    if (message.clearGroup !== undefined) {
      Analytics_Startup_ClearGroup.encode(message.clearGroup, writer.uint32(114).fork()).ldelim();
    }
    if (message.keyMapping !== undefined) {
      Analytics_Startup_KeyMapping.encode(message.keyMapping, writer.uint32(122).fork()).ldelim();
    }
    if (message.multitracks !== undefined) {
      Analytics_MultiTracks_Startup.encode(message.multitracks, writer.uint32(130).fork()).ldelim();
    }
    if (message.networkLink !== undefined) {
      Analytics_Startup_NetworkLink.encode(message.networkLink, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.looks = Analytics_Startup_Looks.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.screenConfiguration = Analytics_Startup_ScreenConfiguration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.preferences = Analytics_Startup_Preferences.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.screens = Analytics_Startup_Screens.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.planningCenter = Analytics_Startup_PlanningCenter.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.songSelect = Analytics_Startup_SongSelect.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.audio = Analytics_Startup_Audio.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.communications = Analytics_Startup_Communications.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.resi = Analytics_Startup_Resi.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.interface = Analytics_Startup_Interface.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.content = Analytics_Startup_Content.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.themes = Analytics_Startup_Themes.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.macro = Analytics_Startup_Macro.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.clearGroup = Analytics_Startup_ClearGroup.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.keyMapping = Analytics_Startup_KeyMapping.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.multitracks = Analytics_MultiTracks_Startup.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.networkLink = Analytics_Startup_NetworkLink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup {
    return {
      looks: isSet(object.looks) ? Analytics_Startup_Looks.fromJSON(object.looks) : undefined,
      screenConfiguration: isSet(object.screenConfiguration)
        ? Analytics_Startup_ScreenConfiguration.fromJSON(object.screenConfiguration)
        : undefined,
      preferences: isSet(object.preferences) ? Analytics_Startup_Preferences.fromJSON(object.preferences) : undefined,
      screens: isSet(object.screens) ? Analytics_Startup_Screens.fromJSON(object.screens) : undefined,
      planningCenter: isSet(object.planningCenter)
        ? Analytics_Startup_PlanningCenter.fromJSON(object.planningCenter)
        : undefined,
      songSelect: isSet(object.songSelect) ? Analytics_Startup_SongSelect.fromJSON(object.songSelect) : undefined,
      audio: isSet(object.audio) ? Analytics_Startup_Audio.fromJSON(object.audio) : undefined,
      communications: isSet(object.communications)
        ? Analytics_Startup_Communications.fromJSON(object.communications)
        : undefined,
      resi: isSet(object.resi) ? Analytics_Startup_Resi.fromJSON(object.resi) : undefined,
      interface: isSet(object.interface) ? Analytics_Startup_Interface.fromJSON(object.interface) : undefined,
      content: isSet(object.content) ? Analytics_Startup_Content.fromJSON(object.content) : undefined,
      themes: isSet(object.themes) ? Analytics_Startup_Themes.fromJSON(object.themes) : undefined,
      macro: isSet(object.macro) ? Analytics_Startup_Macro.fromJSON(object.macro) : undefined,
      clearGroup: isSet(object.clearGroup) ? Analytics_Startup_ClearGroup.fromJSON(object.clearGroup) : undefined,
      keyMapping: isSet(object.keyMapping) ? Analytics_Startup_KeyMapping.fromJSON(object.keyMapping) : undefined,
      multitracks: isSet(object.multitracks) ? Analytics_MultiTracks_Startup.fromJSON(object.multitracks) : undefined,
      networkLink: isSet(object.networkLink) ? Analytics_Startup_NetworkLink.fromJSON(object.networkLink) : undefined,
    };
  },

  toJSON(message: Analytics_Startup): unknown {
    const obj: any = {};
    message.looks !== undefined &&
      (obj.looks = message.looks ? Analytics_Startup_Looks.toJSON(message.looks) : undefined);
    message.screenConfiguration !== undefined && (obj.screenConfiguration = message.screenConfiguration
      ? Analytics_Startup_ScreenConfiguration.toJSON(message.screenConfiguration)
      : undefined);
    message.preferences !== undefined &&
      (obj.preferences = message.preferences ? Analytics_Startup_Preferences.toJSON(message.preferences) : undefined);
    message.screens !== undefined &&
      (obj.screens = message.screens ? Analytics_Startup_Screens.toJSON(message.screens) : undefined);
    message.planningCenter !== undefined && (obj.planningCenter = message.planningCenter
      ? Analytics_Startup_PlanningCenter.toJSON(message.planningCenter)
      : undefined);
    message.songSelect !== undefined &&
      (obj.songSelect = message.songSelect ? Analytics_Startup_SongSelect.toJSON(message.songSelect) : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio ? Analytics_Startup_Audio.toJSON(message.audio) : undefined);
    message.communications !== undefined && (obj.communications = message.communications
      ? Analytics_Startup_Communications.toJSON(message.communications)
      : undefined);
    message.resi !== undefined && (obj.resi = message.resi ? Analytics_Startup_Resi.toJSON(message.resi) : undefined);
    message.interface !== undefined &&
      (obj.interface = message.interface ? Analytics_Startup_Interface.toJSON(message.interface) : undefined);
    message.content !== undefined &&
      (obj.content = message.content ? Analytics_Startup_Content.toJSON(message.content) : undefined);
    message.themes !== undefined &&
      (obj.themes = message.themes ? Analytics_Startup_Themes.toJSON(message.themes) : undefined);
    message.macro !== undefined &&
      (obj.macro = message.macro ? Analytics_Startup_Macro.toJSON(message.macro) : undefined);
    message.clearGroup !== undefined &&
      (obj.clearGroup = message.clearGroup ? Analytics_Startup_ClearGroup.toJSON(message.clearGroup) : undefined);
    message.keyMapping !== undefined &&
      (obj.keyMapping = message.keyMapping ? Analytics_Startup_KeyMapping.toJSON(message.keyMapping) : undefined);
    message.multitracks !== undefined &&
      (obj.multitracks = message.multitracks ? Analytics_MultiTracks_Startup.toJSON(message.multitracks) : undefined);
    message.networkLink !== undefined &&
      (obj.networkLink = message.networkLink ? Analytics_Startup_NetworkLink.toJSON(message.networkLink) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup>, I>>(base?: I): Analytics_Startup {
    return Analytics_Startup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup>, I>>(object: I): Analytics_Startup {
    const message = createBaseAnalytics_Startup();
    message.looks = (object.looks !== undefined && object.looks !== null)
      ? Analytics_Startup_Looks.fromPartial(object.looks)
      : undefined;
    message.screenConfiguration = (object.screenConfiguration !== undefined && object.screenConfiguration !== null)
      ? Analytics_Startup_ScreenConfiguration.fromPartial(object.screenConfiguration)
      : undefined;
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? Analytics_Startup_Preferences.fromPartial(object.preferences)
      : undefined;
    message.screens = (object.screens !== undefined && object.screens !== null)
      ? Analytics_Startup_Screens.fromPartial(object.screens)
      : undefined;
    message.planningCenter = (object.planningCenter !== undefined && object.planningCenter !== null)
      ? Analytics_Startup_PlanningCenter.fromPartial(object.planningCenter)
      : undefined;
    message.songSelect = (object.songSelect !== undefined && object.songSelect !== null)
      ? Analytics_Startup_SongSelect.fromPartial(object.songSelect)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Analytics_Startup_Audio.fromPartial(object.audio)
      : undefined;
    message.communications = (object.communications !== undefined && object.communications !== null)
      ? Analytics_Startup_Communications.fromPartial(object.communications)
      : undefined;
    message.resi = (object.resi !== undefined && object.resi !== null)
      ? Analytics_Startup_Resi.fromPartial(object.resi)
      : undefined;
    message.interface = (object.interface !== undefined && object.interface !== null)
      ? Analytics_Startup_Interface.fromPartial(object.interface)
      : undefined;
    message.content = (object.content !== undefined && object.content !== null)
      ? Analytics_Startup_Content.fromPartial(object.content)
      : undefined;
    message.themes = (object.themes !== undefined && object.themes !== null)
      ? Analytics_Startup_Themes.fromPartial(object.themes)
      : undefined;
    message.macro = (object.macro !== undefined && object.macro !== null)
      ? Analytics_Startup_Macro.fromPartial(object.macro)
      : undefined;
    message.clearGroup = (object.clearGroup !== undefined && object.clearGroup !== null)
      ? Analytics_Startup_ClearGroup.fromPartial(object.clearGroup)
      : undefined;
    message.keyMapping = (object.keyMapping !== undefined && object.keyMapping !== null)
      ? Analytics_Startup_KeyMapping.fromPartial(object.keyMapping)
      : undefined;
    message.multitracks = (object.multitracks !== undefined && object.multitracks !== null)
      ? Analytics_MultiTracks_Startup.fromPartial(object.multitracks)
      : undefined;
    message.networkLink = (object.networkLink !== undefined && object.networkLink !== null)
      ? Analytics_Startup_NetworkLink.fromPartial(object.networkLink)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Startup_Looks(): Analytics_Startup_Looks {
  return { numberPresets: 0 };
}

export const Analytics_Startup_Looks = {
  encode(message: Analytics_Startup_Looks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberPresets !== 0) {
      writer.uint32(8).int32(message.numberPresets);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Looks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Looks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.numberPresets = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Looks {
    return { numberPresets: isSet(object.numberPresets) ? Number(object.numberPresets) : 0 };
  },

  toJSON(message: Analytics_Startup_Looks): unknown {
    const obj: any = {};
    message.numberPresets !== undefined && (obj.numberPresets = Math.round(message.numberPresets));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Looks>, I>>(base?: I): Analytics_Startup_Looks {
    return Analytics_Startup_Looks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Looks>, I>>(object: I): Analytics_Startup_Looks {
    const message = createBaseAnalytics_Startup_Looks();
    message.numberPresets = object.numberPresets ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration(): Analytics_Startup_ScreenConfiguration {
  return {
    summary: undefined,
    output: undefined,
    single: undefined,
    mirrored: undefined,
    edgeBlend: undefined,
    grouped: undefined,
  };
}

export const Analytics_Startup_ScreenConfiguration = {
  encode(message: Analytics_Startup_ScreenConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== undefined) {
      Analytics_Startup_ScreenConfiguration_Summary.encode(message.summary, writer.uint32(10).fork()).ldelim();
    }
    if (message.output !== undefined) {
      Analytics_Startup_ScreenConfiguration_Output.encode(message.output, writer.uint32(18).fork()).ldelim();
    }
    if (message.single !== undefined) {
      Analytics_Startup_ScreenConfiguration_Single.encode(message.single, writer.uint32(26).fork()).ldelim();
    }
    if (message.mirrored !== undefined) {
      Analytics_Startup_ScreenConfiguration_Mirrored.encode(message.mirrored, writer.uint32(34).fork()).ldelim();
    }
    if (message.edgeBlend !== undefined) {
      Analytics_Startup_ScreenConfiguration_EdgeBlend.encode(message.edgeBlend, writer.uint32(42).fork()).ldelim();
    }
    if (message.grouped !== undefined) {
      Analytics_Startup_ScreenConfiguration_Grouped.encode(message.grouped, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.summary = Analytics_Startup_ScreenConfiguration_Summary.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.output = Analytics_Startup_ScreenConfiguration_Output.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.single = Analytics_Startup_ScreenConfiguration_Single.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.mirrored = Analytics_Startup_ScreenConfiguration_Mirrored.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.edgeBlend = Analytics_Startup_ScreenConfiguration_EdgeBlend.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.grouped = Analytics_Startup_ScreenConfiguration_Grouped.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration {
    return {
      summary: isSet(object.summary)
        ? Analytics_Startup_ScreenConfiguration_Summary.fromJSON(object.summary)
        : undefined,
      output: isSet(object.output) ? Analytics_Startup_ScreenConfiguration_Output.fromJSON(object.output) : undefined,
      single: isSet(object.single) ? Analytics_Startup_ScreenConfiguration_Single.fromJSON(object.single) : undefined,
      mirrored: isSet(object.mirrored)
        ? Analytics_Startup_ScreenConfiguration_Mirrored.fromJSON(object.mirrored)
        : undefined,
      edgeBlend: isSet(object.edgeBlend)
        ? Analytics_Startup_ScreenConfiguration_EdgeBlend.fromJSON(object.edgeBlend)
        : undefined,
      grouped: isSet(object.grouped)
        ? Analytics_Startup_ScreenConfiguration_Grouped.fromJSON(object.grouped)
        : undefined,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration): unknown {
    const obj: any = {};
    message.summary !== undefined &&
      (obj.summary = message.summary
        ? Analytics_Startup_ScreenConfiguration_Summary.toJSON(message.summary)
        : undefined);
    message.output !== undefined &&
      (obj.output = message.output ? Analytics_Startup_ScreenConfiguration_Output.toJSON(message.output) : undefined);
    message.single !== undefined &&
      (obj.single = message.single ? Analytics_Startup_ScreenConfiguration_Single.toJSON(message.single) : undefined);
    message.mirrored !== undefined && (obj.mirrored = message.mirrored
      ? Analytics_Startup_ScreenConfiguration_Mirrored.toJSON(message.mirrored)
      : undefined);
    message.edgeBlend !== undefined && (obj.edgeBlend = message.edgeBlend
      ? Analytics_Startup_ScreenConfiguration_EdgeBlend.toJSON(message.edgeBlend)
      : undefined);
    message.grouped !== undefined &&
      (obj.grouped = message.grouped
        ? Analytics_Startup_ScreenConfiguration_Grouped.toJSON(message.grouped)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration {
    return Analytics_Startup_ScreenConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration {
    const message = createBaseAnalytics_Startup_ScreenConfiguration();
    message.summary = (object.summary !== undefined && object.summary !== null)
      ? Analytics_Startup_ScreenConfiguration_Summary.fromPartial(object.summary)
      : undefined;
    message.output = (object.output !== undefined && object.output !== null)
      ? Analytics_Startup_ScreenConfiguration_Output.fromPartial(object.output)
      : undefined;
    message.single = (object.single !== undefined && object.single !== null)
      ? Analytics_Startup_ScreenConfiguration_Single.fromPartial(object.single)
      : undefined;
    message.mirrored = (object.mirrored !== undefined && object.mirrored !== null)
      ? Analytics_Startup_ScreenConfiguration_Mirrored.fromPartial(object.mirrored)
      : undefined;
    message.edgeBlend = (object.edgeBlend !== undefined && object.edgeBlend !== null)
      ? Analytics_Startup_ScreenConfiguration_EdgeBlend.fromPartial(object.edgeBlend)
      : undefined;
    message.grouped = (object.grouped !== undefined && object.grouped !== null)
      ? Analytics_Startup_ScreenConfiguration_Grouped.fromPartial(object.grouped)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_Summary(): Analytics_Startup_ScreenConfiguration_Summary {
  return { totalScreens: 0, audienceScreenCount: 0, stageScreenCount: 0 };
}

export const Analytics_Startup_ScreenConfiguration_Summary = {
  encode(message: Analytics_Startup_ScreenConfiguration_Summary, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_Summary {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Summary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalScreens = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.audienceScreenCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.stageScreenCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_Summary {
    return {
      totalScreens: isSet(object.totalScreens) ? Number(object.totalScreens) : 0,
      audienceScreenCount: isSet(object.audienceScreenCount) ? Number(object.audienceScreenCount) : 0,
      stageScreenCount: isSet(object.stageScreenCount) ? Number(object.stageScreenCount) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_Summary): unknown {
    const obj: any = {};
    message.totalScreens !== undefined && (obj.totalScreens = Math.round(message.totalScreens));
    message.audienceScreenCount !== undefined && (obj.audienceScreenCount = Math.round(message.audienceScreenCount));
    message.stageScreenCount !== undefined && (obj.stageScreenCount = Math.round(message.stageScreenCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Summary>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_Summary {
    return Analytics_Startup_ScreenConfiguration_Summary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Summary>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_Summary {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Summary();
    message.totalScreens = object.totalScreens ?? 0;
    message.audienceScreenCount = object.audienceScreenCount ?? 0;
    message.stageScreenCount = object.stageScreenCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_Output(): Analytics_Startup_ScreenConfiguration_Output {
  return {
    proscreenType: 0,
    outputType: 0,
    colorCorrectionEnabled: false,
    cornerPinEnabled: false,
    alphaKeyEnabled: 0,
    alignment: 0,
    width: 0,
    height: 0,
  };
}

export const Analytics_Startup_ScreenConfiguration_Output = {
  encode(message: Analytics_Startup_ScreenConfiguration_Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.alphaKeyEnabled !== 0) {
      writer.uint32(40).int32(message.alphaKeyEnabled);
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_Output {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.proscreenType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.outputType = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.colorCorrectionEnabled = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.cornerPinEnabled = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.alphaKeyEnabled = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.alignment = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.height = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_Output {
    return {
      proscreenType: isSet(object.proscreenType)
        ? analytics_Startup_ScreenConfiguration_Output_ProScreenTypeFromJSON(object.proscreenType)
        : 0,
      outputType: isSet(object.outputType)
        ? analytics_Startup_ScreenConfiguration_Output_OutputTypeFromJSON(object.outputType)
        : 0,
      colorCorrectionEnabled: isSet(object.colorCorrectionEnabled) ? Boolean(object.colorCorrectionEnabled) : false,
      cornerPinEnabled: isSet(object.cornerPinEnabled) ? Boolean(object.cornerPinEnabled) : false,
      alphaKeyEnabled: isSet(object.alphaKeyEnabled)
        ? analytics_Startup_ScreenConfiguration_Output_AlphaKeyStateFromJSON(object.alphaKeyEnabled)
        : 0,
      alignment: isSet(object.alignment)
        ? analytics_Startup_ScreenConfiguration_Output_AlignmentFromJSON(object.alignment)
        : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_Output): unknown {
    const obj: any = {};
    message.proscreenType !== undefined &&
      (obj.proscreenType = analytics_Startup_ScreenConfiguration_Output_ProScreenTypeToJSON(message.proscreenType));
    message.outputType !== undefined &&
      (obj.outputType = analytics_Startup_ScreenConfiguration_Output_OutputTypeToJSON(message.outputType));
    message.colorCorrectionEnabled !== undefined && (obj.colorCorrectionEnabled = message.colorCorrectionEnabled);
    message.cornerPinEnabled !== undefined && (obj.cornerPinEnabled = message.cornerPinEnabled);
    message.alphaKeyEnabled !== undefined &&
      (obj.alphaKeyEnabled = analytics_Startup_ScreenConfiguration_Output_AlphaKeyStateToJSON(message.alphaKeyEnabled));
    message.alignment !== undefined &&
      (obj.alignment = analytics_Startup_ScreenConfiguration_Output_AlignmentToJSON(message.alignment));
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Output>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_Output {
    return Analytics_Startup_ScreenConfiguration_Output.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Output>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_Output {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Output();
    message.proscreenType = object.proscreenType ?? 0;
    message.outputType = object.outputType ?? 0;
    message.colorCorrectionEnabled = object.colorCorrectionEnabled ?? false;
    message.cornerPinEnabled = object.cornerPinEnabled ?? false;
    message.alphaKeyEnabled = object.alphaKeyEnabled ?? 0;
    message.alignment = object.alignment ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_Single(): Analytics_Startup_ScreenConfiguration_Single {
  return { screenType: 0, screenColorEnabled: false };
}

export const Analytics_Startup_ScreenConfiguration_Single = {
  encode(message: Analytics_Startup_ScreenConfiguration_Single, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenType !== 0) {
      writer.uint32(8).int32(message.screenType);
    }
    if (message.screenColorEnabled === true) {
      writer.uint32(16).bool(message.screenColorEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_Single {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_Single {
    return {
      screenType: isSet(object.screenType)
        ? analytics_Startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled) ? Boolean(object.screenColorEnabled) : false,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_Single): unknown {
    const obj: any = {};
    message.screenType !== undefined &&
      (obj.screenType = analytics_Startup_ScreenConfiguration_ScreenTypeToJSON(message.screenType));
    message.screenColorEnabled !== undefined && (obj.screenColorEnabled = message.screenColorEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Single>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_Single {
    return Analytics_Startup_ScreenConfiguration_Single.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Single>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_Single {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Single();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_Mirrored(): Analytics_Startup_ScreenConfiguration_Mirrored {
  return { screenType: 0, screenColorEnabled: false, count: 0 };
}

export const Analytics_Startup_ScreenConfiguration_Mirrored = {
  encode(
    message: Analytics_Startup_ScreenConfiguration_Mirrored,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_Mirrored {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Mirrored();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_Mirrored {
    return {
      screenType: isSet(object.screenType)
        ? analytics_Startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled) ? Boolean(object.screenColorEnabled) : false,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_Mirrored): unknown {
    const obj: any = {};
    message.screenType !== undefined &&
      (obj.screenType = analytics_Startup_ScreenConfiguration_ScreenTypeToJSON(message.screenType));
    message.screenColorEnabled !== undefined && (obj.screenColorEnabled = message.screenColorEnabled);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Mirrored>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_Mirrored {
    return Analytics_Startup_ScreenConfiguration_Mirrored.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Mirrored>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_Mirrored {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Mirrored();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_EdgeBlend(): Analytics_Startup_ScreenConfiguration_EdgeBlend {
  return { screenType: 0, screenColorEnabled: false, count: 0 };
}

export const Analytics_Startup_ScreenConfiguration_EdgeBlend = {
  encode(
    message: Analytics_Startup_ScreenConfiguration_EdgeBlend,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_EdgeBlend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_EdgeBlend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.count = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_EdgeBlend {
    return {
      screenType: isSet(object.screenType)
        ? analytics_Startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled) ? Boolean(object.screenColorEnabled) : false,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_EdgeBlend): unknown {
    const obj: any = {};
    message.screenType !== undefined &&
      (obj.screenType = analytics_Startup_ScreenConfiguration_ScreenTypeToJSON(message.screenType));
    message.screenColorEnabled !== undefined && (obj.screenColorEnabled = message.screenColorEnabled);
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_EdgeBlend>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_EdgeBlend {
    return Analytics_Startup_ScreenConfiguration_EdgeBlend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_EdgeBlend>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_EdgeBlend {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_EdgeBlend();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ScreenConfiguration_Grouped(): Analytics_Startup_ScreenConfiguration_Grouped {
  return { screenType: 0, screenColorEnabled: false, columns: 0, rows: 0 };
}

export const Analytics_Startup_ScreenConfiguration_Grouped = {
  encode(message: Analytics_Startup_ScreenConfiguration_Grouped, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ScreenConfiguration_Grouped {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Grouped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.screenColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.columns = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.rows = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ScreenConfiguration_Grouped {
    return {
      screenType: isSet(object.screenType)
        ? analytics_Startup_ScreenConfiguration_ScreenTypeFromJSON(object.screenType)
        : 0,
      screenColorEnabled: isSet(object.screenColorEnabled) ? Boolean(object.screenColorEnabled) : false,
      columns: isSet(object.columns) ? Number(object.columns) : 0,
      rows: isSet(object.rows) ? Number(object.rows) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ScreenConfiguration_Grouped): unknown {
    const obj: any = {};
    message.screenType !== undefined &&
      (obj.screenType = analytics_Startup_ScreenConfiguration_ScreenTypeToJSON(message.screenType));
    message.screenColorEnabled !== undefined && (obj.screenColorEnabled = message.screenColorEnabled);
    message.columns !== undefined && (obj.columns = Math.round(message.columns));
    message.rows !== undefined && (obj.rows = Math.round(message.rows));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Grouped>, I>>(
    base?: I,
  ): Analytics_Startup_ScreenConfiguration_Grouped {
    return Analytics_Startup_ScreenConfiguration_Grouped.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ScreenConfiguration_Grouped>, I>>(
    object: I,
  ): Analytics_Startup_ScreenConfiguration_Grouped {
    const message = createBaseAnalytics_Startup_ScreenConfiguration_Grouped();
    message.screenType = object.screenType ?? 0;
    message.screenColorEnabled = object.screenColorEnabled ?? false;
    message.columns = object.columns ?? 0;
    message.rows = object.rows ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_Preferences(): Analytics_Startup_Preferences {
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

export const Analytics_Startup_Preferences = {
  encode(message: Analytics_Startup_Preferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Preferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Preferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.houseOfWorship = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hasCustomLogo = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.copyrightEnabled = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.copyrightStyle = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.copyrightHasLicense = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.renderMode = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.suppressAutoStart = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.manageMediaAutomatically = reader.bool();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.searchPathsRelink = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.updateChannel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Preferences {
    return {
      houseOfWorship: isSet(object.houseOfWorship) ? Boolean(object.houseOfWorship) : false,
      hasCustomLogo: isSet(object.hasCustomLogo) ? Boolean(object.hasCustomLogo) : false,
      copyrightEnabled: isSet(object.copyrightEnabled) ? Boolean(object.copyrightEnabled) : false,
      copyrightStyle: isSet(object.copyrightStyle)
        ? analytics_Startup_Preferences_CopyrightStyleFromJSON(object.copyrightStyle)
        : 0,
      copyrightHasLicense: isSet(object.copyrightHasLicense) ? Boolean(object.copyrightHasLicense) : false,
      renderMode: isSet(object.renderMode) ? analytics_Startup_Preferences_RenderModeFromJSON(object.renderMode) : 0,
      suppressAutoStart: isSet(object.suppressAutoStart) ? Boolean(object.suppressAutoStart) : false,
      manageMediaAutomatically: isSet(object.manageMediaAutomatically)
        ? Boolean(object.manageMediaAutomatically)
        : false,
      searchPathsRelink: isSet(object.searchPathsRelink) ? Boolean(object.searchPathsRelink) : false,
      updateChannel: isSet(object.updateChannel)
        ? analytics_Startup_Preferences_UpdateChannelFromJSON(object.updateChannel)
        : 0,
    };
  },

  toJSON(message: Analytics_Startup_Preferences): unknown {
    const obj: any = {};
    message.houseOfWorship !== undefined && (obj.houseOfWorship = message.houseOfWorship);
    message.hasCustomLogo !== undefined && (obj.hasCustomLogo = message.hasCustomLogo);
    message.copyrightEnabled !== undefined && (obj.copyrightEnabled = message.copyrightEnabled);
    message.copyrightStyle !== undefined &&
      (obj.copyrightStyle = analytics_Startup_Preferences_CopyrightStyleToJSON(message.copyrightStyle));
    message.copyrightHasLicense !== undefined && (obj.copyrightHasLicense = message.copyrightHasLicense);
    message.renderMode !== undefined &&
      (obj.renderMode = analytics_Startup_Preferences_RenderModeToJSON(message.renderMode));
    message.suppressAutoStart !== undefined && (obj.suppressAutoStart = message.suppressAutoStart);
    message.manageMediaAutomatically !== undefined && (obj.manageMediaAutomatically = message.manageMediaAutomatically);
    message.searchPathsRelink !== undefined && (obj.searchPathsRelink = message.searchPathsRelink);
    message.updateChannel !== undefined &&
      (obj.updateChannel = analytics_Startup_Preferences_UpdateChannelToJSON(message.updateChannel));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Preferences>, I>>(base?: I): Analytics_Startup_Preferences {
    return Analytics_Startup_Preferences.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Preferences>, I>>(
    object: I,
  ): Analytics_Startup_Preferences {
    const message = createBaseAnalytics_Startup_Preferences();
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

function createBaseAnalytics_Startup_Screens(): Analytics_Startup_Screens {
  return {
    showScreensLaunch: false,
    showPerformanceOnScreen: false,
    ignoreBackgroundColors: false,
    showKeynotePptScreens: false,
  };
}

export const Analytics_Startup_Screens = {
  encode(message: Analytics_Startup_Screens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Screens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Screens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.showScreensLaunch = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.showPerformanceOnScreen = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.ignoreBackgroundColors = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.showKeynotePptScreens = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Screens {
    return {
      showScreensLaunch: isSet(object.showScreensLaunch) ? Boolean(object.showScreensLaunch) : false,
      showPerformanceOnScreen: isSet(object.showPerformanceOnScreen) ? Boolean(object.showPerformanceOnScreen) : false,
      ignoreBackgroundColors: isSet(object.ignoreBackgroundColors) ? Boolean(object.ignoreBackgroundColors) : false,
      showKeynotePptScreens: isSet(object.showKeynotePptScreens) ? Boolean(object.showKeynotePptScreens) : false,
    };
  },

  toJSON(message: Analytics_Startup_Screens): unknown {
    const obj: any = {};
    message.showScreensLaunch !== undefined && (obj.showScreensLaunch = message.showScreensLaunch);
    message.showPerformanceOnScreen !== undefined && (obj.showPerformanceOnScreen = message.showPerformanceOnScreen);
    message.ignoreBackgroundColors !== undefined && (obj.ignoreBackgroundColors = message.ignoreBackgroundColors);
    message.showKeynotePptScreens !== undefined && (obj.showKeynotePptScreens = message.showKeynotePptScreens);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Screens>, I>>(base?: I): Analytics_Startup_Screens {
    return Analytics_Startup_Screens.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Screens>, I>>(object: I): Analytics_Startup_Screens {
    const message = createBaseAnalytics_Startup_Screens();
    message.showScreensLaunch = object.showScreensLaunch ?? false;
    message.showPerformanceOnScreen = object.showPerformanceOnScreen ?? false;
    message.ignoreBackgroundColors = object.ignoreBackgroundColors ?? false;
    message.showKeynotePptScreens = object.showKeynotePptScreens ?? false;
    return message;
  },
};

function createBaseAnalytics_Startup_PlanningCenter(): Analytics_Startup_PlanningCenter {
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

export const Analytics_Startup_PlanningCenter = {
  encode(message: Analytics_Startup_PlanningCenter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_PlanningCenter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_PlanningCenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.autoUpdate = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.matchSongs = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.showHistory = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.makeArrangements = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.autoUpload = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.autoDownload = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_PlanningCenter {
    return {
      loggedIn: isSet(object.loggedIn) ? Boolean(object.loggedIn) : false,
      autoUpdate: isSet(object.autoUpdate) ? Boolean(object.autoUpdate) : false,
      matchSongs: isSet(object.matchSongs) ? Boolean(object.matchSongs) : false,
      showHistory: isSet(object.showHistory) ? Boolean(object.showHistory) : false,
      makeArrangements: isSet(object.makeArrangements) ? Boolean(object.makeArrangements) : false,
      autoUpload: isSet(object.autoUpload) ? Boolean(object.autoUpload) : false,
      autoDownload: isSet(object.autoDownload) ? Boolean(object.autoDownload) : false,
    };
  },

  toJSON(message: Analytics_Startup_PlanningCenter): unknown {
    const obj: any = {};
    message.loggedIn !== undefined && (obj.loggedIn = message.loggedIn);
    message.autoUpdate !== undefined && (obj.autoUpdate = message.autoUpdate);
    message.matchSongs !== undefined && (obj.matchSongs = message.matchSongs);
    message.showHistory !== undefined && (obj.showHistory = message.showHistory);
    message.makeArrangements !== undefined && (obj.makeArrangements = message.makeArrangements);
    message.autoUpload !== undefined && (obj.autoUpload = message.autoUpload);
    message.autoDownload !== undefined && (obj.autoDownload = message.autoDownload);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_PlanningCenter>, I>>(
    base?: I,
  ): Analytics_Startup_PlanningCenter {
    return Analytics_Startup_PlanningCenter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_PlanningCenter>, I>>(
    object: I,
  ): Analytics_Startup_PlanningCenter {
    const message = createBaseAnalytics_Startup_PlanningCenter();
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

function createBaseAnalytics_Startup_SongSelect(): Analytics_Startup_SongSelect {
  return { loggedIn: false };
}

export const Analytics_Startup_SongSelect = {
  encode(message: Analytics_Startup_SongSelect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loggedIn === true) {
      writer.uint32(8).bool(message.loggedIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_SongSelect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_SongSelect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_SongSelect {
    return { loggedIn: isSet(object.loggedIn) ? Boolean(object.loggedIn) : false };
  },

  toJSON(message: Analytics_Startup_SongSelect): unknown {
    const obj: any = {};
    message.loggedIn !== undefined && (obj.loggedIn = message.loggedIn);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_SongSelect>, I>>(base?: I): Analytics_Startup_SongSelect {
    return Analytics_Startup_SongSelect.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_SongSelect>, I>>(object: I): Analytics_Startup_SongSelect {
    const message = createBaseAnalytics_Startup_SongSelect();
    message.loggedIn = object.loggedIn ?? false;
    return message;
  },
};

function createBaseAnalytics_Startup_Audio(): Analytics_Startup_Audio {
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

export const Analytics_Startup_Audio = {
  encode(message: Analytics_Startup_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Audio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Audio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.busCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.inspectorDevice = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inspectorRouting = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.mainDevice = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mainRouting = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.mainDelay = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.sdiNdi = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.sdiNdiRouting = reader.int32() as any;
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.sdiNdiDelay = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Audio {
    return {
      busCount: isSet(object.busCount) ? Number(object.busCount) : 0,
      inspectorDevice: isSet(object.inspectorDevice)
        ? analytics_Startup_Audio_AudioDeviceFromJSON(object.inspectorDevice)
        : 0,
      inspectorRouting: isSet(object.inspectorRouting)
        ? analytics_Startup_Audio_InspectorRoutingFromJSON(object.inspectorRouting)
        : 0,
      mainDevice: isSet(object.mainDevice) ? analytics_Startup_Audio_AudioDeviceFromJSON(object.mainDevice) : 0,
      mainRouting: isSet(object.mainRouting) ? analytics_Startup_Audio_AudioRoutingFromJSON(object.mainRouting) : 0,
      mainDelay: isSet(object.mainDelay) ? Number(object.mainDelay) : 0,
      sdiNdi: isSet(object.sdiNdi) ? Boolean(object.sdiNdi) : false,
      sdiNdiRouting: isSet(object.sdiNdiRouting)
        ? analytics_Startup_Audio_AudioRoutingFromJSON(object.sdiNdiRouting)
        : 0,
      sdiNdiDelay: isSet(object.sdiNdiDelay) ? Number(object.sdiNdiDelay) : 0,
    };
  },

  toJSON(message: Analytics_Startup_Audio): unknown {
    const obj: any = {};
    message.busCount !== undefined && (obj.busCount = Math.round(message.busCount));
    message.inspectorDevice !== undefined &&
      (obj.inspectorDevice = analytics_Startup_Audio_AudioDeviceToJSON(message.inspectorDevice));
    message.inspectorRouting !== undefined &&
      (obj.inspectorRouting = analytics_Startup_Audio_InspectorRoutingToJSON(message.inspectorRouting));
    message.mainDevice !== undefined &&
      (obj.mainDevice = analytics_Startup_Audio_AudioDeviceToJSON(message.mainDevice));
    message.mainRouting !== undefined &&
      (obj.mainRouting = analytics_Startup_Audio_AudioRoutingToJSON(message.mainRouting));
    message.mainDelay !== undefined && (obj.mainDelay = Math.round(message.mainDelay));
    message.sdiNdi !== undefined && (obj.sdiNdi = message.sdiNdi);
    message.sdiNdiRouting !== undefined &&
      (obj.sdiNdiRouting = analytics_Startup_Audio_AudioRoutingToJSON(message.sdiNdiRouting));
    message.sdiNdiDelay !== undefined && (obj.sdiNdiDelay = Math.round(message.sdiNdiDelay));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Audio>, I>>(base?: I): Analytics_Startup_Audio {
    return Analytics_Startup_Audio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Audio>, I>>(object: I): Analytics_Startup_Audio {
    const message = createBaseAnalytics_Startup_Audio();
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

function createBaseAnalytics_Startup_Communications(): Analytics_Startup_Communications {
  return { totalDeviceCount: 0 };
}

export const Analytics_Startup_Communications = {
  encode(message: Analytics_Startup_Communications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalDeviceCount !== 0) {
      writer.uint32(8).int32(message.totalDeviceCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Communications {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Communications();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalDeviceCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Communications {
    return { totalDeviceCount: isSet(object.totalDeviceCount) ? Number(object.totalDeviceCount) : 0 };
  },

  toJSON(message: Analytics_Startup_Communications): unknown {
    const obj: any = {};
    message.totalDeviceCount !== undefined && (obj.totalDeviceCount = Math.round(message.totalDeviceCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Communications>, I>>(
    base?: I,
  ): Analytics_Startup_Communications {
    return Analytics_Startup_Communications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Communications>, I>>(
    object: I,
  ): Analytics_Startup_Communications {
    const message = createBaseAnalytics_Startup_Communications();
    message.totalDeviceCount = object.totalDeviceCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_Resi(): Analytics_Startup_Resi {
  return { loggedIn: false };
}

export const Analytics_Startup_Resi = {
  encode(message: Analytics_Startup_Resi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.loggedIn === true) {
      writer.uint32(8).bool(message.loggedIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Resi {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Resi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.loggedIn = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Resi {
    return { loggedIn: isSet(object.loggedIn) ? Boolean(object.loggedIn) : false };
  },

  toJSON(message: Analytics_Startup_Resi): unknown {
    const obj: any = {};
    message.loggedIn !== undefined && (obj.loggedIn = message.loggedIn);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Resi>, I>>(base?: I): Analytics_Startup_Resi {
    return Analytics_Startup_Resi.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Resi>, I>>(object: I): Analytics_Startup_Resi {
    const message = createBaseAnalytics_Startup_Resi();
    message.loggedIn = object.loggedIn ?? false;
    return message;
  },
};

function createBaseAnalytics_Startup_Interface(): Analytics_Startup_Interface {
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
    presentationTransition: "",
    mediaTransition: "",
    audioShuffle: false,
  };
}

export const Analytics_Startup_Interface = {
  encode(message: Analytics_Startup_Interface, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.presentationTransition !== "") {
      writer.uint32(98).string(message.presentationTransition);
    }
    if (message.mediaTransition !== "") {
      writer.uint32(106).string(message.mediaTransition);
    }
    if (message.audioShuffle === true) {
      writer.uint32(112).bool(message.audioShuffle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Interface {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Interface();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.libraryOutline = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.mediaOutline = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.audioOutline = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.continuousPlaylist = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mediaBin = reader.int32() as any;
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.presentationViewStyle = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.presentationGridColumnCount = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.presentationTableColumnCount = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.mediaBinViewStyle = reader.int32() as any;
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.mediaBinGridColumnCount = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.mediaBinTableColumnCount = reader.int32();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.presentationTransition = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.mediaTransition = reader.string();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.audioShuffle = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Interface {
    return {
      libraryOutline: isSet(object.libraryOutline)
        ? analytics_Startup_Interface_SplitViewStateFromJSON(object.libraryOutline)
        : 0,
      mediaOutline: isSet(object.mediaOutline)
        ? analytics_Startup_Interface_SplitViewStateFromJSON(object.mediaOutline)
        : 0,
      audioOutline: isSet(object.audioOutline)
        ? analytics_Startup_Interface_SplitViewStateFromJSON(object.audioOutline)
        : 0,
      continuousPlaylist: isSet(object.continuousPlaylist) ? Boolean(object.continuousPlaylist) : false,
      mediaBin: isSet(object.mediaBin) ? analytics_Startup_Interface_SplitViewStateFromJSON(object.mediaBin) : 0,
      presentationViewStyle: isSet(object.presentationViewStyle)
        ? analytics_Startup_Interface_PresentationViewStyleFromJSON(object.presentationViewStyle)
        : 0,
      presentationGridColumnCount: isSet(object.presentationGridColumnCount)
        ? Number(object.presentationGridColumnCount)
        : 0,
      presentationTableColumnCount: isSet(object.presentationTableColumnCount)
        ? Number(object.presentationTableColumnCount)
        : 0,
      mediaBinViewStyle: isSet(object.mediaBinViewStyle)
        ? analytics_Startup_Interface_MediaBinViewStyleFromJSON(object.mediaBinViewStyle)
        : 0,
      mediaBinGridColumnCount: isSet(object.mediaBinGridColumnCount) ? Number(object.mediaBinGridColumnCount) : 0,
      mediaBinTableColumnCount: isSet(object.mediaBinTableColumnCount) ? Number(object.mediaBinTableColumnCount) : 0,
      presentationTransition: isSet(object.presentationTransition) ? String(object.presentationTransition) : "",
      mediaTransition: isSet(object.mediaTransition) ? String(object.mediaTransition) : "",
      audioShuffle: isSet(object.audioShuffle) ? Boolean(object.audioShuffle) : false,
    };
  },

  toJSON(message: Analytics_Startup_Interface): unknown {
    const obj: any = {};
    message.libraryOutline !== undefined &&
      (obj.libraryOutline = analytics_Startup_Interface_SplitViewStateToJSON(message.libraryOutline));
    message.mediaOutline !== undefined &&
      (obj.mediaOutline = analytics_Startup_Interface_SplitViewStateToJSON(message.mediaOutline));
    message.audioOutline !== undefined &&
      (obj.audioOutline = analytics_Startup_Interface_SplitViewStateToJSON(message.audioOutline));
    message.continuousPlaylist !== undefined && (obj.continuousPlaylist = message.continuousPlaylist);
    message.mediaBin !== undefined &&
      (obj.mediaBin = analytics_Startup_Interface_SplitViewStateToJSON(message.mediaBin));
    message.presentationViewStyle !== undefined &&
      (obj.presentationViewStyle = analytics_Startup_Interface_PresentationViewStyleToJSON(
        message.presentationViewStyle,
      ));
    message.presentationGridColumnCount !== undefined &&
      (obj.presentationGridColumnCount = Math.round(message.presentationGridColumnCount));
    message.presentationTableColumnCount !== undefined &&
      (obj.presentationTableColumnCount = Math.round(message.presentationTableColumnCount));
    message.mediaBinViewStyle !== undefined &&
      (obj.mediaBinViewStyle = analytics_Startup_Interface_MediaBinViewStyleToJSON(message.mediaBinViewStyle));
    message.mediaBinGridColumnCount !== undefined &&
      (obj.mediaBinGridColumnCount = Math.round(message.mediaBinGridColumnCount));
    message.mediaBinTableColumnCount !== undefined &&
      (obj.mediaBinTableColumnCount = Math.round(message.mediaBinTableColumnCount));
    message.presentationTransition !== undefined && (obj.presentationTransition = message.presentationTransition);
    message.mediaTransition !== undefined && (obj.mediaTransition = message.mediaTransition);
    message.audioShuffle !== undefined && (obj.audioShuffle = message.audioShuffle);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Interface>, I>>(base?: I): Analytics_Startup_Interface {
    return Analytics_Startup_Interface.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Interface>, I>>(object: I): Analytics_Startup_Interface {
    const message = createBaseAnalytics_Startup_Interface();
    message.libraryOutline = object.libraryOutline ?? 0;
    message.mediaOutline = object.mediaOutline ?? 0;
    message.audioOutline = object.audioOutline ?? 0;
    message.continuousPlaylist = object.continuousPlaylist ?? false;
    message.mediaBin = object.mediaBin ?? 0;
    message.presentationViewStyle = object.presentationViewStyle ?? 0;
    message.presentationGridColumnCount = object.presentationGridColumnCount ?? 0;
    message.presentationTableColumnCount = object.presentationTableColumnCount ?? 0;
    message.mediaBinViewStyle = object.mediaBinViewStyle ?? 0;
    message.mediaBinGridColumnCount = object.mediaBinGridColumnCount ?? 0;
    message.mediaBinTableColumnCount = object.mediaBinTableColumnCount ?? 0;
    message.presentationTransition = object.presentationTransition ?? "";
    message.mediaTransition = object.mediaTransition ?? "";
    message.audioShuffle = object.audioShuffle ?? false;
    return message;
  },
};

function createBaseAnalytics_Startup_Content(): Analytics_Startup_Content {
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

export const Analytics_Startup_Content = {
  encode(message: Analytics_Startup_Content, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Content {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Content();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.libraryCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.libraryPlaylistCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.libraryPlaylistFolderCount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.libraryPlaylistMaxDepth = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mediaBinTotalPlaylistCount = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.mediaBinPlaylistFolderCount = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.mediaBinPlaylistMaxDepth = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.mediaBinNormalPlaylistCount = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.mediaBinSmartPlaylistCount = reader.int32();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.mediaBinVideoInputCount = reader.int32();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.audioBinPlaylistCount = reader.int32();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.audioBinPlaylistFolderCount = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.audioBinPlaylistMaxDepth = reader.int32();
          continue;
        case 14:
          if (tag != 112) {
            break;
          }

          message.timerCount = reader.int32();
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.messagesCount = reader.int32();
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.propsCount = reader.int32();
          continue;
        case 17:
          if (tag != 136) {
            break;
          }

          message.stageLayoutCount = reader.int32();
          continue;
        case 18:
          if (tag != 144) {
            break;
          }

          message.macrosCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Content {
    return {
      libraryCount: isSet(object.libraryCount) ? Number(object.libraryCount) : 0,
      libraryPlaylistCount: isSet(object.libraryPlaylistCount) ? Number(object.libraryPlaylistCount) : 0,
      libraryPlaylistFolderCount: isSet(object.libraryPlaylistFolderCount)
        ? Number(object.libraryPlaylistFolderCount)
        : 0,
      libraryPlaylistMaxDepth: isSet(object.libraryPlaylistMaxDepth) ? Number(object.libraryPlaylistMaxDepth) : 0,
      mediaBinTotalPlaylistCount: isSet(object.mediaBinTotalPlaylistCount)
        ? Number(object.mediaBinTotalPlaylistCount)
        : 0,
      mediaBinPlaylistFolderCount: isSet(object.mediaBinPlaylistFolderCount)
        ? Number(object.mediaBinPlaylistFolderCount)
        : 0,
      mediaBinPlaylistMaxDepth: isSet(object.mediaBinPlaylistMaxDepth) ? Number(object.mediaBinPlaylistMaxDepth) : 0,
      mediaBinNormalPlaylistCount: isSet(object.mediaBinNormalPlaylistCount)
        ? Number(object.mediaBinNormalPlaylistCount)
        : 0,
      mediaBinSmartPlaylistCount: isSet(object.mediaBinSmartPlaylistCount)
        ? Number(object.mediaBinSmartPlaylistCount)
        : 0,
      mediaBinVideoInputCount: isSet(object.mediaBinVideoInputCount) ? Number(object.mediaBinVideoInputCount) : 0,
      audioBinPlaylistCount: isSet(object.audioBinPlaylistCount) ? Number(object.audioBinPlaylistCount) : 0,
      audioBinPlaylistFolderCount: isSet(object.audioBinPlaylistFolderCount)
        ? Number(object.audioBinPlaylistFolderCount)
        : 0,
      audioBinPlaylistMaxDepth: isSet(object.audioBinPlaylistMaxDepth) ? Number(object.audioBinPlaylistMaxDepth) : 0,
      timerCount: isSet(object.timerCount) ? Number(object.timerCount) : 0,
      messagesCount: isSet(object.messagesCount) ? Number(object.messagesCount) : 0,
      propsCount: isSet(object.propsCount) ? Number(object.propsCount) : 0,
      stageLayoutCount: isSet(object.stageLayoutCount) ? Number(object.stageLayoutCount) : 0,
      macrosCount: isSet(object.macrosCount) ? Number(object.macrosCount) : 0,
    };
  },

  toJSON(message: Analytics_Startup_Content): unknown {
    const obj: any = {};
    message.libraryCount !== undefined && (obj.libraryCount = Math.round(message.libraryCount));
    message.libraryPlaylistCount !== undefined && (obj.libraryPlaylistCount = Math.round(message.libraryPlaylistCount));
    message.libraryPlaylistFolderCount !== undefined &&
      (obj.libraryPlaylistFolderCount = Math.round(message.libraryPlaylistFolderCount));
    message.libraryPlaylistMaxDepth !== undefined &&
      (obj.libraryPlaylistMaxDepth = Math.round(message.libraryPlaylistMaxDepth));
    message.mediaBinTotalPlaylistCount !== undefined &&
      (obj.mediaBinTotalPlaylistCount = Math.round(message.mediaBinTotalPlaylistCount));
    message.mediaBinPlaylistFolderCount !== undefined &&
      (obj.mediaBinPlaylistFolderCount = Math.round(message.mediaBinPlaylistFolderCount));
    message.mediaBinPlaylistMaxDepth !== undefined &&
      (obj.mediaBinPlaylistMaxDepth = Math.round(message.mediaBinPlaylistMaxDepth));
    message.mediaBinNormalPlaylistCount !== undefined &&
      (obj.mediaBinNormalPlaylistCount = Math.round(message.mediaBinNormalPlaylistCount));
    message.mediaBinSmartPlaylistCount !== undefined &&
      (obj.mediaBinSmartPlaylistCount = Math.round(message.mediaBinSmartPlaylistCount));
    message.mediaBinVideoInputCount !== undefined &&
      (obj.mediaBinVideoInputCount = Math.round(message.mediaBinVideoInputCount));
    message.audioBinPlaylistCount !== undefined &&
      (obj.audioBinPlaylistCount = Math.round(message.audioBinPlaylistCount));
    message.audioBinPlaylistFolderCount !== undefined &&
      (obj.audioBinPlaylistFolderCount = Math.round(message.audioBinPlaylistFolderCount));
    message.audioBinPlaylistMaxDepth !== undefined &&
      (obj.audioBinPlaylistMaxDepth = Math.round(message.audioBinPlaylistMaxDepth));
    message.timerCount !== undefined && (obj.timerCount = Math.round(message.timerCount));
    message.messagesCount !== undefined && (obj.messagesCount = Math.round(message.messagesCount));
    message.propsCount !== undefined && (obj.propsCount = Math.round(message.propsCount));
    message.stageLayoutCount !== undefined && (obj.stageLayoutCount = Math.round(message.stageLayoutCount));
    message.macrosCount !== undefined && (obj.macrosCount = Math.round(message.macrosCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Content>, I>>(base?: I): Analytics_Startup_Content {
    return Analytics_Startup_Content.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Content>, I>>(object: I): Analytics_Startup_Content {
    const message = createBaseAnalytics_Startup_Content();
    message.libraryCount = object.libraryCount ?? 0;
    message.libraryPlaylistCount = object.libraryPlaylistCount ?? 0;
    message.libraryPlaylistFolderCount = object.libraryPlaylistFolderCount ?? 0;
    message.libraryPlaylistMaxDepth = object.libraryPlaylistMaxDepth ?? 0;
    message.mediaBinTotalPlaylistCount = object.mediaBinTotalPlaylistCount ?? 0;
    message.mediaBinPlaylistFolderCount = object.mediaBinPlaylistFolderCount ?? 0;
    message.mediaBinPlaylistMaxDepth = object.mediaBinPlaylistMaxDepth ?? 0;
    message.mediaBinNormalPlaylistCount = object.mediaBinNormalPlaylistCount ?? 0;
    message.mediaBinSmartPlaylistCount = object.mediaBinSmartPlaylistCount ?? 0;
    message.mediaBinVideoInputCount = object.mediaBinVideoInputCount ?? 0;
    message.audioBinPlaylistCount = object.audioBinPlaylistCount ?? 0;
    message.audioBinPlaylistFolderCount = object.audioBinPlaylistFolderCount ?? 0;
    message.audioBinPlaylistMaxDepth = object.audioBinPlaylistMaxDepth ?? 0;
    message.timerCount = object.timerCount ?? 0;
    message.messagesCount = object.messagesCount ?? 0;
    message.propsCount = object.propsCount ?? 0;
    message.stageLayoutCount = object.stageLayoutCount ?? 0;
    message.macrosCount = object.macrosCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_Themes(): Analytics_Startup_Themes {
  return { themeCount: 0, themeFolderCount: 0, themeFolderMaxDepth: 0, themeSlidesCount: 0 };
}

export const Analytics_Startup_Themes = {
  encode(message: Analytics_Startup_Themes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Themes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Themes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.themeCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.themeFolderCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.themeFolderMaxDepth = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.themeSlidesCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Themes {
    return {
      themeCount: isSet(object.themeCount) ? Number(object.themeCount) : 0,
      themeFolderCount: isSet(object.themeFolderCount) ? Number(object.themeFolderCount) : 0,
      themeFolderMaxDepth: isSet(object.themeFolderMaxDepth) ? Number(object.themeFolderMaxDepth) : 0,
      themeSlidesCount: isSet(object.themeSlidesCount) ? Number(object.themeSlidesCount) : 0,
    };
  },

  toJSON(message: Analytics_Startup_Themes): unknown {
    const obj: any = {};
    message.themeCount !== undefined && (obj.themeCount = Math.round(message.themeCount));
    message.themeFolderCount !== undefined && (obj.themeFolderCount = Math.round(message.themeFolderCount));
    message.themeFolderMaxDepth !== undefined && (obj.themeFolderMaxDepth = Math.round(message.themeFolderMaxDepth));
    message.themeSlidesCount !== undefined && (obj.themeSlidesCount = Math.round(message.themeSlidesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Themes>, I>>(base?: I): Analytics_Startup_Themes {
    return Analytics_Startup_Themes.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Themes>, I>>(object: I): Analytics_Startup_Themes {
    const message = createBaseAnalytics_Startup_Themes();
    message.themeCount = object.themeCount ?? 0;
    message.themeFolderCount = object.themeFolderCount ?? 0;
    message.themeFolderMaxDepth = object.themeFolderMaxDepth ?? 0;
    message.themeSlidesCount = object.themeSlidesCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_Macro(): Analytics_Startup_Macro {
  return { triggerOnStartupCount: 0 };
}

export const Analytics_Startup_Macro = {
  encode(message: Analytics_Startup_Macro, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.triggerOnStartupCount !== 0) {
      writer.uint32(8).int32(message.triggerOnStartupCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_Macro {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.triggerOnStartupCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_Macro {
    return { triggerOnStartupCount: isSet(object.triggerOnStartupCount) ? Number(object.triggerOnStartupCount) : 0 };
  },

  toJSON(message: Analytics_Startup_Macro): unknown {
    const obj: any = {};
    message.triggerOnStartupCount !== undefined &&
      (obj.triggerOnStartupCount = Math.round(message.triggerOnStartupCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_Macro>, I>>(base?: I): Analytics_Startup_Macro {
    return Analytics_Startup_Macro.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_Macro>, I>>(object: I): Analytics_Startup_Macro {
    const message = createBaseAnalytics_Startup_Macro();
    message.triggerOnStartupCount = object.triggerOnStartupCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_ClearGroup(): Analytics_Startup_ClearGroup {
  return { clearGroupCount: 0, hiddenClearGroupCount: 0, defaultIconCount: 0, customIconCount: 0, iconTintCount: 0 };
}

export const Analytics_Startup_ClearGroup = {
  encode(message: Analytics_Startup_ClearGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_ClearGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.clearGroupCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.hiddenClearGroupCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.defaultIconCount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.customIconCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.iconTintCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_ClearGroup {
    return {
      clearGroupCount: isSet(object.clearGroupCount) ? Number(object.clearGroupCount) : 0,
      hiddenClearGroupCount: isSet(object.hiddenClearGroupCount) ? Number(object.hiddenClearGroupCount) : 0,
      defaultIconCount: isSet(object.defaultIconCount) ? Number(object.defaultIconCount) : 0,
      customIconCount: isSet(object.customIconCount) ? Number(object.customIconCount) : 0,
      iconTintCount: isSet(object.iconTintCount) ? Number(object.iconTintCount) : 0,
    };
  },

  toJSON(message: Analytics_Startup_ClearGroup): unknown {
    const obj: any = {};
    message.clearGroupCount !== undefined && (obj.clearGroupCount = Math.round(message.clearGroupCount));
    message.hiddenClearGroupCount !== undefined &&
      (obj.hiddenClearGroupCount = Math.round(message.hiddenClearGroupCount));
    message.defaultIconCount !== undefined && (obj.defaultIconCount = Math.round(message.defaultIconCount));
    message.customIconCount !== undefined && (obj.customIconCount = Math.round(message.customIconCount));
    message.iconTintCount !== undefined && (obj.iconTintCount = Math.round(message.iconTintCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_ClearGroup>, I>>(base?: I): Analytics_Startup_ClearGroup {
    return Analytics_Startup_ClearGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_ClearGroup>, I>>(object: I): Analytics_Startup_ClearGroup {
    const message = createBaseAnalytics_Startup_ClearGroup();
    message.clearGroupCount = object.clearGroupCount ?? 0;
    message.hiddenClearGroupCount = object.hiddenClearGroupCount ?? 0;
    message.defaultIconCount = object.defaultIconCount ?? 0;
    message.customIconCount = object.customIconCount ?? 0;
    message.iconTintCount = object.iconTintCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_KeyMapping(): Analytics_Startup_KeyMapping {
  return { totalMapped: 0, clearGroups: 0, groups: 0, macros: 0, props: 0, menus: 0 };
}

export const Analytics_Startup_KeyMapping = {
  encode(message: Analytics_Startup_KeyMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_KeyMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_KeyMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalMapped = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.clearGroups = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.groups = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.macros = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.props = reader.int32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.menus = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_KeyMapping {
    return {
      totalMapped: isSet(object.totalMapped) ? Number(object.totalMapped) : 0,
      clearGroups: isSet(object.clearGroups) ? Number(object.clearGroups) : 0,
      groups: isSet(object.groups) ? Number(object.groups) : 0,
      macros: isSet(object.macros) ? Number(object.macros) : 0,
      props: isSet(object.props) ? Number(object.props) : 0,
      menus: isSet(object.menus) ? Number(object.menus) : 0,
    };
  },

  toJSON(message: Analytics_Startup_KeyMapping): unknown {
    const obj: any = {};
    message.totalMapped !== undefined && (obj.totalMapped = Math.round(message.totalMapped));
    message.clearGroups !== undefined && (obj.clearGroups = Math.round(message.clearGroups));
    message.groups !== undefined && (obj.groups = Math.round(message.groups));
    message.macros !== undefined && (obj.macros = Math.round(message.macros));
    message.props !== undefined && (obj.props = Math.round(message.props));
    message.menus !== undefined && (obj.menus = Math.round(message.menus));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_KeyMapping>, I>>(base?: I): Analytics_Startup_KeyMapping {
    return Analytics_Startup_KeyMapping.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_KeyMapping>, I>>(object: I): Analytics_Startup_KeyMapping {
    const message = createBaseAnalytics_Startup_KeyMapping();
    message.totalMapped = object.totalMapped ?? 0;
    message.clearGroups = object.clearGroups ?? 0;
    message.groups = object.groups ?? 0;
    message.macros = object.macros ?? 0;
    message.props = object.props ?? 0;
    message.menus = object.menus ?? 0;
    return message;
  },
};

function createBaseAnalytics_Startup_NetworkLink(): Analytics_Startup_NetworkLink {
  return { enabled: false, memberCount: 0 };
}

export const Analytics_Startup_NetworkLink = {
  encode(message: Analytics_Startup_NetworkLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.memberCount !== 0) {
      writer.uint32(16).uint32(message.memberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Startup_NetworkLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Startup_NetworkLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.memberCount = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Startup_NetworkLink {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
    };
  },

  toJSON(message: Analytics_Startup_NetworkLink): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.memberCount !== undefined && (obj.memberCount = Math.round(message.memberCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Startup_NetworkLink>, I>>(base?: I): Analytics_Startup_NetworkLink {
    return Analytics_Startup_NetworkLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Startup_NetworkLink>, I>>(
    object: I,
  ): Analytics_Startup_NetworkLink {
    const message = createBaseAnalytics_Startup_NetworkLink();
    message.enabled = object.enabled ?? false;
    message.memberCount = object.memberCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger(): Analytics_Trigger {
  return { cue: undefined, action: undefined, mediaBin: undefined, audioBin: undefined };
}

export const Analytics_Trigger = {
  encode(message: Analytics_Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cue !== undefined) {
      Analytics_Trigger_Cue.encode(message.cue, writer.uint32(10).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Analytics_Trigger_Action.encode(message.action, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaBin !== undefined) {
      Analytics_Trigger_MediaBin.encode(message.mediaBin, writer.uint32(26).fork()).ldelim();
    }
    if (message.audioBin !== undefined) {
      Analytics_Trigger_AudioBin.encode(message.audioBin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.cue = Analytics_Trigger_Cue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.action = Analytics_Trigger_Action.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mediaBin = Analytics_Trigger_MediaBin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.audioBin = Analytics_Trigger_AudioBin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger {
    return {
      cue: isSet(object.cue) ? Analytics_Trigger_Cue.fromJSON(object.cue) : undefined,
      action: isSet(object.action) ? Analytics_Trigger_Action.fromJSON(object.action) : undefined,
      mediaBin: isSet(object.mediaBin) ? Analytics_Trigger_MediaBin.fromJSON(object.mediaBin) : undefined,
      audioBin: isSet(object.audioBin) ? Analytics_Trigger_AudioBin.fromJSON(object.audioBin) : undefined,
    };
  },

  toJSON(message: Analytics_Trigger): unknown {
    const obj: any = {};
    message.cue !== undefined && (obj.cue = message.cue ? Analytics_Trigger_Cue.toJSON(message.cue) : undefined);
    message.action !== undefined &&
      (obj.action = message.action ? Analytics_Trigger_Action.toJSON(message.action) : undefined);
    message.mediaBin !== undefined &&
      (obj.mediaBin = message.mediaBin ? Analytics_Trigger_MediaBin.toJSON(message.mediaBin) : undefined);
    message.audioBin !== undefined &&
      (obj.audioBin = message.audioBin ? Analytics_Trigger_AudioBin.toJSON(message.audioBin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger>, I>>(base?: I): Analytics_Trigger {
    return Analytics_Trigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger>, I>>(object: I): Analytics_Trigger {
    const message = createBaseAnalytics_Trigger();
    message.cue = (object.cue !== undefined && object.cue !== null)
      ? Analytics_Trigger_Cue.fromPartial(object.cue)
      : undefined;
    message.action = (object.action !== undefined && object.action !== null)
      ? Analytics_Trigger_Action.fromPartial(object.action)
      : undefined;
    message.mediaBin = (object.mediaBin !== undefined && object.mediaBin !== null)
      ? Analytics_Trigger_MediaBin.fromPartial(object.mediaBin)
      : undefined;
    message.audioBin = (object.audioBin !== undefined && object.audioBin !== null)
      ? Analytics_Trigger_AudioBin.fromPartial(object.audioBin)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue(): Analytics_Trigger_Cue {
  return { slide: undefined };
}

export const Analytics_Trigger_Cue = {
  encode(message: Analytics_Trigger_Cue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slide !== undefined) {
      Analytics_Trigger_Cue_Slide.encode(message.slide, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.slide = Analytics_Trigger_Cue_Slide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue {
    return { slide: isSet(object.slide) ? Analytics_Trigger_Cue_Slide.fromJSON(object.slide) : undefined };
  },

  toJSON(message: Analytics_Trigger_Cue): unknown {
    const obj: any = {};
    message.slide !== undefined &&
      (obj.slide = message.slide ? Analytics_Trigger_Cue_Slide.toJSON(message.slide) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue>, I>>(base?: I): Analytics_Trigger_Cue {
    return Analytics_Trigger_Cue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue>, I>>(object: I): Analytics_Trigger_Cue {
    const message = createBaseAnalytics_Trigger_Cue();
    message.slide = (object.slide !== undefined && object.slide !== null)
      ? Analytics_Trigger_Cue_Slide.fromPartial(object.slide)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue_Slide(): Analytics_Trigger_Cue_Slide {
  return { trigger: undefined, scrollingTextElement: undefined, rssFeedElement: undefined, fileFeedElement: undefined };
}

export const Analytics_Trigger_Cue_Slide = {
  encode(message: Analytics_Trigger_Cue_Slide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trigger !== undefined) {
      Analytics_Trigger_Cue_Slide_Trigger.encode(message.trigger, writer.uint32(10).fork()).ldelim();
    }
    if (message.scrollingTextElement !== undefined) {
      Analytics_Trigger_Cue_Slide_ScrollingTextElement.encode(message.scrollingTextElement, writer.uint32(18).fork())
        .ldelim();
    }
    if (message.rssFeedElement !== undefined) {
      Analytics_Trigger_Cue_Slide_RSSFeedElement.encode(message.rssFeedElement, writer.uint32(26).fork()).ldelim();
    }
    if (message.fileFeedElement !== undefined) {
      Analytics_Trigger_Cue_Slide_FileFeedElement.encode(message.fileFeedElement, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue_Slide {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue_Slide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trigger = Analytics_Trigger_Cue_Slide_Trigger.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.scrollingTextElement = Analytics_Trigger_Cue_Slide_ScrollingTextElement.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.rssFeedElement = Analytics_Trigger_Cue_Slide_RSSFeedElement.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.fileFeedElement = Analytics_Trigger_Cue_Slide_FileFeedElement.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue_Slide {
    return {
      trigger: isSet(object.trigger) ? Analytics_Trigger_Cue_Slide_Trigger.fromJSON(object.trigger) : undefined,
      scrollingTextElement: isSet(object.scrollingTextElement)
        ? Analytics_Trigger_Cue_Slide_ScrollingTextElement.fromJSON(object.scrollingTextElement)
        : undefined,
      rssFeedElement: isSet(object.rssFeedElement)
        ? Analytics_Trigger_Cue_Slide_RSSFeedElement.fromJSON(object.rssFeedElement)
        : undefined,
      fileFeedElement: isSet(object.fileFeedElement)
        ? Analytics_Trigger_Cue_Slide_FileFeedElement.fromJSON(object.fileFeedElement)
        : undefined,
    };
  },

  toJSON(message: Analytics_Trigger_Cue_Slide): unknown {
    const obj: any = {};
    message.trigger !== undefined &&
      (obj.trigger = message.trigger ? Analytics_Trigger_Cue_Slide_Trigger.toJSON(message.trigger) : undefined);
    message.scrollingTextElement !== undefined && (obj.scrollingTextElement = message.scrollingTextElement
      ? Analytics_Trigger_Cue_Slide_ScrollingTextElement.toJSON(message.scrollingTextElement)
      : undefined);
    message.rssFeedElement !== undefined && (obj.rssFeedElement = message.rssFeedElement
      ? Analytics_Trigger_Cue_Slide_RSSFeedElement.toJSON(message.rssFeedElement)
      : undefined);
    message.fileFeedElement !== undefined && (obj.fileFeedElement = message.fileFeedElement
      ? Analytics_Trigger_Cue_Slide_FileFeedElement.toJSON(message.fileFeedElement)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide>, I>>(base?: I): Analytics_Trigger_Cue_Slide {
    return Analytics_Trigger_Cue_Slide.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide>, I>>(object: I): Analytics_Trigger_Cue_Slide {
    const message = createBaseAnalytics_Trigger_Cue_Slide();
    message.trigger = (object.trigger !== undefined && object.trigger !== null)
      ? Analytics_Trigger_Cue_Slide_Trigger.fromPartial(object.trigger)
      : undefined;
    message.scrollingTextElement = (object.scrollingTextElement !== undefined && object.scrollingTextElement !== null)
      ? Analytics_Trigger_Cue_Slide_ScrollingTextElement.fromPartial(object.scrollingTextElement)
      : undefined;
    message.rssFeedElement = (object.rssFeedElement !== undefined && object.rssFeedElement !== null)
      ? Analytics_Trigger_Cue_Slide_RSSFeedElement.fromPartial(object.rssFeedElement)
      : undefined;
    message.fileFeedElement = (object.fileFeedElement !== undefined && object.fileFeedElement !== null)
      ? Analytics_Trigger_Cue_Slide_FileFeedElement.fromPartial(object.fileFeedElement)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue_Slide_Trigger(): Analytics_Trigger_Cue_Slide_Trigger {
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

export const Analytics_Trigger_Cue_Slide_Trigger = {
  encode(message: Analytics_Trigger_Cue_Slide_Trigger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue_Slide_Trigger {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue_Slide_Trigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.objectCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.scrollingObjectCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.backgroundFxObjectCount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.actionCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hasTextFx = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.mediaTextFillObjectCount = reader.int32();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.cutOutTextFillObjectCount = reader.int32();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.backgroundBlurTextFillObjectCount = reader.int32();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.backgroundInvertTextFillObjectCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue_Slide_Trigger {
    return {
      objectCount: isSet(object.objectCount) ? Number(object.objectCount) : 0,
      scrollingObjectCount: isSet(object.scrollingObjectCount) ? Number(object.scrollingObjectCount) : 0,
      backgroundFxObjectCount: isSet(object.backgroundFxObjectCount) ? Number(object.backgroundFxObjectCount) : 0,
      actionCount: isSet(object.actionCount) ? Number(object.actionCount) : 0,
      hasTextFx: isSet(object.hasTextFx) ? Boolean(object.hasTextFx) : false,
      mediaTextFillObjectCount: isSet(object.mediaTextFillObjectCount) ? Number(object.mediaTextFillObjectCount) : 0,
      cutOutTextFillObjectCount: isSet(object.cutOutTextFillObjectCount) ? Number(object.cutOutTextFillObjectCount) : 0,
      backgroundBlurTextFillObjectCount: isSet(object.backgroundBlurTextFillObjectCount)
        ? Number(object.backgroundBlurTextFillObjectCount)
        : 0,
      backgroundInvertTextFillObjectCount: isSet(object.backgroundInvertTextFillObjectCount)
        ? Number(object.backgroundInvertTextFillObjectCount)
        : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Cue_Slide_Trigger): unknown {
    const obj: any = {};
    message.objectCount !== undefined && (obj.objectCount = Math.round(message.objectCount));
    message.scrollingObjectCount !== undefined && (obj.scrollingObjectCount = Math.round(message.scrollingObjectCount));
    message.backgroundFxObjectCount !== undefined &&
      (obj.backgroundFxObjectCount = Math.round(message.backgroundFxObjectCount));
    message.actionCount !== undefined && (obj.actionCount = Math.round(message.actionCount));
    message.hasTextFx !== undefined && (obj.hasTextFx = message.hasTextFx);
    message.mediaTextFillObjectCount !== undefined &&
      (obj.mediaTextFillObjectCount = Math.round(message.mediaTextFillObjectCount));
    message.cutOutTextFillObjectCount !== undefined &&
      (obj.cutOutTextFillObjectCount = Math.round(message.cutOutTextFillObjectCount));
    message.backgroundBlurTextFillObjectCount !== undefined &&
      (obj.backgroundBlurTextFillObjectCount = Math.round(message.backgroundBlurTextFillObjectCount));
    message.backgroundInvertTextFillObjectCount !== undefined &&
      (obj.backgroundInvertTextFillObjectCount = Math.round(message.backgroundInvertTextFillObjectCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_Trigger>, I>>(
    base?: I,
  ): Analytics_Trigger_Cue_Slide_Trigger {
    return Analytics_Trigger_Cue_Slide_Trigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_Trigger>, I>>(
    object: I,
  ): Analytics_Trigger_Cue_Slide_Trigger {
    const message = createBaseAnalytics_Trigger_Cue_Slide_Trigger();
    message.objectCount = object.objectCount ?? 0;
    message.scrollingObjectCount = object.scrollingObjectCount ?? 0;
    message.backgroundFxObjectCount = object.backgroundFxObjectCount ?? 0;
    message.actionCount = object.actionCount ?? 0;
    message.hasTextFx = object.hasTextFx ?? false;
    message.mediaTextFillObjectCount = object.mediaTextFillObjectCount ?? 0;
    message.cutOutTextFillObjectCount = object.cutOutTextFillObjectCount ?? 0;
    message.backgroundBlurTextFillObjectCount = object.backgroundBlurTextFillObjectCount ?? 0;
    message.backgroundInvertTextFillObjectCount = object.backgroundInvertTextFillObjectCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue_Slide_ScrollingTextElement(): Analytics_Trigger_Cue_Slide_ScrollingTextElement {
  return { direction: 0, startPosition: 0, isRepeatEnabled: false, speed: 0, destinationLayer: 0 };
}

export const Analytics_Trigger_Cue_Slide_ScrollingTextElement = {
  encode(
    message: Analytics_Trigger_Cue_Slide_ScrollingTextElement,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue_Slide_ScrollingTextElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue_Slide_ScrollingTextElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.startPosition = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.isRepeatEnabled = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.speed = reader.int32() as any;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue_Slide_ScrollingTextElement {
    return {
      direction: isSet(object.direction)
        ? analytics_Trigger_Cue_Slide_ScrollingTextElement_DirectionFromJSON(object.direction)
        : 0,
      startPosition: isSet(object.startPosition)
        ? analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPositionFromJSON(object.startPosition)
        : 0,
      isRepeatEnabled: isSet(object.isRepeatEnabled) ? Boolean(object.isRepeatEnabled) : false,
      speed: isSet(object.speed) ? analytics_Trigger_Cue_Slide_ScrollingTextElement_SpeedFromJSON(object.speed) : 0,
      destinationLayer: isSet(object.destinationLayer)
        ? analytics_Trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Cue_Slide_ScrollingTextElement): unknown {
    const obj: any = {};
    message.direction !== undefined &&
      (obj.direction = analytics_Trigger_Cue_Slide_ScrollingTextElement_DirectionToJSON(message.direction));
    message.startPosition !== undefined &&
      (obj.startPosition = analytics_Trigger_Cue_Slide_ScrollingTextElement_StartPositionToJSON(message.startPosition));
    message.isRepeatEnabled !== undefined && (obj.isRepeatEnabled = message.isRepeatEnabled);
    message.speed !== undefined &&
      (obj.speed = analytics_Trigger_Cue_Slide_ScrollingTextElement_SpeedToJSON(message.speed));
    message.destinationLayer !== undefined &&
      (obj.destinationLayer = analytics_Trigger_Cue_Slide_DestinationLayerToJSON(message.destinationLayer));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_ScrollingTextElement>, I>>(
    base?: I,
  ): Analytics_Trigger_Cue_Slide_ScrollingTextElement {
    return Analytics_Trigger_Cue_Slide_ScrollingTextElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_ScrollingTextElement>, I>>(
    object: I,
  ): Analytics_Trigger_Cue_Slide_ScrollingTextElement {
    const message = createBaseAnalytics_Trigger_Cue_Slide_ScrollingTextElement();
    message.direction = object.direction ?? 0;
    message.startPosition = object.startPosition ?? 0;
    message.isRepeatEnabled = object.isRepeatEnabled ?? false;
    message.speed = object.speed ?? 0;
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue_Slide_RSSFeedElement(): Analytics_Trigger_Cue_Slide_RSSFeedElement {
  return { content: 0, isDelimiterEnabled: false, destinationLayer: 0 };
}

export const Analytics_Trigger_Cue_Slide_RSSFeedElement = {
  encode(message: Analytics_Trigger_Cue_Slide_RSSFeedElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue_Slide_RSSFeedElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue_Slide_RSSFeedElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.content = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.isDelimiterEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue_Slide_RSSFeedElement {
    return {
      content: isSet(object.content) ? analytics_Trigger_Cue_Slide_RSSFeedElement_ContentFromJSON(object.content) : 0,
      isDelimiterEnabled: isSet(object.isDelimiterEnabled) ? Boolean(object.isDelimiterEnabled) : false,
      destinationLayer: isSet(object.destinationLayer)
        ? analytics_Trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Cue_Slide_RSSFeedElement): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = analytics_Trigger_Cue_Slide_RSSFeedElement_ContentToJSON(message.content));
    message.isDelimiterEnabled !== undefined && (obj.isDelimiterEnabled = message.isDelimiterEnabled);
    message.destinationLayer !== undefined &&
      (obj.destinationLayer = analytics_Trigger_Cue_Slide_DestinationLayerToJSON(message.destinationLayer));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_RSSFeedElement>, I>>(
    base?: I,
  ): Analytics_Trigger_Cue_Slide_RSSFeedElement {
    return Analytics_Trigger_Cue_Slide_RSSFeedElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_RSSFeedElement>, I>>(
    object: I,
  ): Analytics_Trigger_Cue_Slide_RSSFeedElement {
    const message = createBaseAnalytics_Trigger_Cue_Slide_RSSFeedElement();
    message.content = object.content ?? 0;
    message.isDelimiterEnabled = object.isDelimiterEnabled ?? false;
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Cue_Slide_FileFeedElement(): Analytics_Trigger_Cue_Slide_FileFeedElement {
  return { destinationLayer: 0 };
}

export const Analytics_Trigger_Cue_Slide_FileFeedElement = {
  encode(message: Analytics_Trigger_Cue_Slide_FileFeedElement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destinationLayer !== 0) {
      writer.uint32(8).int32(message.destinationLayer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Cue_Slide_FileFeedElement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Cue_Slide_FileFeedElement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.destinationLayer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Cue_Slide_FileFeedElement {
    return {
      destinationLayer: isSet(object.destinationLayer)
        ? analytics_Trigger_Cue_Slide_DestinationLayerFromJSON(object.destinationLayer)
        : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Cue_Slide_FileFeedElement): unknown {
    const obj: any = {};
    message.destinationLayer !== undefined &&
      (obj.destinationLayer = analytics_Trigger_Cue_Slide_DestinationLayerToJSON(message.destinationLayer));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_FileFeedElement>, I>>(
    base?: I,
  ): Analytics_Trigger_Cue_Slide_FileFeedElement {
    return Analytics_Trigger_Cue_Slide_FileFeedElement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Cue_Slide_FileFeedElement>, I>>(
    object: I,
  ): Analytics_Trigger_Cue_Slide_FileFeedElement {
    const message = createBaseAnalytics_Trigger_Cue_Slide_FileFeedElement();
    message.destinationLayer = object.destinationLayer ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action(): Analytics_Trigger_Action {
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
  };
}

export const Analytics_Trigger_Action = {
  encode(message: Analytics_Trigger_Action, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clear !== undefined) {
      Analytics_Trigger_Action_ClearLayer.encode(message.clear, writer.uint32(10).fork()).ldelim();
    }
    if (message.media !== undefined) {
      Analytics_TriggerMediaInformation.encode(message.media, writer.uint32(18).fork()).ldelim();
    }
    if (message.mediaBinPlaylist !== undefined) {
      Analytics_Trigger_Action_MediaBinPlaylist.encode(message.mediaBinPlaylist, writer.uint32(26).fork()).ldelim();
    }
    if (message.audioBinPlaylist !== undefined) {
      Analytics_Trigger_Action_AudioBinPlaylist.encode(message.audioBinPlaylist, writer.uint32(34).fork()).ldelim();
    }
    if (message.stage !== undefined) {
      Analytics_Trigger_Action_Stage.encode(message.stage, writer.uint32(42).fork()).ldelim();
    }
    if (message.timer !== undefined) {
      Analytics_Trigger_Action_Timer.encode(message.timer, writer.uint32(50).fork()).ldelim();
    }
    if (message.prop !== undefined) {
      Analytics_Trigger_Action_Prop.encode(message.prop, writer.uint32(58).fork()).ldelim();
    }
    if (message.look !== undefined) {
      Analytics_Trigger_Action_Look.encode(message.look, writer.uint32(66).fork()).ldelim();
    }
    if (message.message !== undefined) {
      Analytics_Trigger_Action_Message.encode(message.message, writer.uint32(74).fork()).ldelim();
    }
    if (message.communications !== undefined) {
      Analytics_Trigger_Action_Communications.encode(message.communications, writer.uint32(82).fork()).ldelim();
    }
    if (message.slideDestination !== undefined) {
      Analytics_Trigger_Action_SlideDestination.encode(message.slideDestination, writer.uint32(90).fork()).ldelim();
    }
    if (message.macro !== undefined) {
      Analytics_Trigger_Action_Macro.encode(message.macro, writer.uint32(98).fork()).ldelim();
    }
    if (message.clearGroup !== undefined) {
      Analytics_Trigger_Action_ClearGroup.encode(message.clearGroup, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.clear = Analytics_Trigger_Action_ClearLayer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.media = Analytics_TriggerMediaInformation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mediaBinPlaylist = Analytics_Trigger_Action_MediaBinPlaylist.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.audioBinPlaylist = Analytics_Trigger_Action_AudioBinPlaylist.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.stage = Analytics_Trigger_Action_Stage.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.timer = Analytics_Trigger_Action_Timer.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.prop = Analytics_Trigger_Action_Prop.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.look = Analytics_Trigger_Action_Look.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.message = Analytics_Trigger_Action_Message.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.communications = Analytics_Trigger_Action_Communications.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.slideDestination = Analytics_Trigger_Action_SlideDestination.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.macro = Analytics_Trigger_Action_Macro.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.clearGroup = Analytics_Trigger_Action_ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action {
    return {
      clear: isSet(object.clear) ? Analytics_Trigger_Action_ClearLayer.fromJSON(object.clear) : undefined,
      media: isSet(object.media) ? Analytics_TriggerMediaInformation.fromJSON(object.media) : undefined,
      mediaBinPlaylist: isSet(object.mediaBinPlaylist)
        ? Analytics_Trigger_Action_MediaBinPlaylist.fromJSON(object.mediaBinPlaylist)
        : undefined,
      audioBinPlaylist: isSet(object.audioBinPlaylist)
        ? Analytics_Trigger_Action_AudioBinPlaylist.fromJSON(object.audioBinPlaylist)
        : undefined,
      stage: isSet(object.stage) ? Analytics_Trigger_Action_Stage.fromJSON(object.stage) : undefined,
      timer: isSet(object.timer) ? Analytics_Trigger_Action_Timer.fromJSON(object.timer) : undefined,
      prop: isSet(object.prop) ? Analytics_Trigger_Action_Prop.fromJSON(object.prop) : undefined,
      look: isSet(object.look) ? Analytics_Trigger_Action_Look.fromJSON(object.look) : undefined,
      message: isSet(object.message) ? Analytics_Trigger_Action_Message.fromJSON(object.message) : undefined,
      communications: isSet(object.communications)
        ? Analytics_Trigger_Action_Communications.fromJSON(object.communications)
        : undefined,
      slideDestination: isSet(object.slideDestination)
        ? Analytics_Trigger_Action_SlideDestination.fromJSON(object.slideDestination)
        : undefined,
      macro: isSet(object.macro) ? Analytics_Trigger_Action_Macro.fromJSON(object.macro) : undefined,
      clearGroup: isSet(object.clearGroup)
        ? Analytics_Trigger_Action_ClearGroup.fromJSON(object.clearGroup)
        : undefined,
    };
  },

  toJSON(message: Analytics_Trigger_Action): unknown {
    const obj: any = {};
    message.clear !== undefined &&
      (obj.clear = message.clear ? Analytics_Trigger_Action_ClearLayer.toJSON(message.clear) : undefined);
    message.media !== undefined &&
      (obj.media = message.media ? Analytics_TriggerMediaInformation.toJSON(message.media) : undefined);
    message.mediaBinPlaylist !== undefined && (obj.mediaBinPlaylist = message.mediaBinPlaylist
      ? Analytics_Trigger_Action_MediaBinPlaylist.toJSON(message.mediaBinPlaylist)
      : undefined);
    message.audioBinPlaylist !== undefined && (obj.audioBinPlaylist = message.audioBinPlaylist
      ? Analytics_Trigger_Action_AudioBinPlaylist.toJSON(message.audioBinPlaylist)
      : undefined);
    message.stage !== undefined &&
      (obj.stage = message.stage ? Analytics_Trigger_Action_Stage.toJSON(message.stage) : undefined);
    message.timer !== undefined &&
      (obj.timer = message.timer ? Analytics_Trigger_Action_Timer.toJSON(message.timer) : undefined);
    message.prop !== undefined &&
      (obj.prop = message.prop ? Analytics_Trigger_Action_Prop.toJSON(message.prop) : undefined);
    message.look !== undefined &&
      (obj.look = message.look ? Analytics_Trigger_Action_Look.toJSON(message.look) : undefined);
    message.message !== undefined &&
      (obj.message = message.message ? Analytics_Trigger_Action_Message.toJSON(message.message) : undefined);
    message.communications !== undefined && (obj.communications = message.communications
      ? Analytics_Trigger_Action_Communications.toJSON(message.communications)
      : undefined);
    message.slideDestination !== undefined && (obj.slideDestination = message.slideDestination
      ? Analytics_Trigger_Action_SlideDestination.toJSON(message.slideDestination)
      : undefined);
    message.macro !== undefined &&
      (obj.macro = message.macro ? Analytics_Trigger_Action_Macro.toJSON(message.macro) : undefined);
    message.clearGroup !== undefined &&
      (obj.clearGroup = message.clearGroup
        ? Analytics_Trigger_Action_ClearGroup.toJSON(message.clearGroup)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action>, I>>(base?: I): Analytics_Trigger_Action {
    return Analytics_Trigger_Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action>, I>>(object: I): Analytics_Trigger_Action {
    const message = createBaseAnalytics_Trigger_Action();
    message.clear = (object.clear !== undefined && object.clear !== null)
      ? Analytics_Trigger_Action_ClearLayer.fromPartial(object.clear)
      : undefined;
    message.media = (object.media !== undefined && object.media !== null)
      ? Analytics_TriggerMediaInformation.fromPartial(object.media)
      : undefined;
    message.mediaBinPlaylist = (object.mediaBinPlaylist !== undefined && object.mediaBinPlaylist !== null)
      ? Analytics_Trigger_Action_MediaBinPlaylist.fromPartial(object.mediaBinPlaylist)
      : undefined;
    message.audioBinPlaylist = (object.audioBinPlaylist !== undefined && object.audioBinPlaylist !== null)
      ? Analytics_Trigger_Action_AudioBinPlaylist.fromPartial(object.audioBinPlaylist)
      : undefined;
    message.stage = (object.stage !== undefined && object.stage !== null)
      ? Analytics_Trigger_Action_Stage.fromPartial(object.stage)
      : undefined;
    message.timer = (object.timer !== undefined && object.timer !== null)
      ? Analytics_Trigger_Action_Timer.fromPartial(object.timer)
      : undefined;
    message.prop = (object.prop !== undefined && object.prop !== null)
      ? Analytics_Trigger_Action_Prop.fromPartial(object.prop)
      : undefined;
    message.look = (object.look !== undefined && object.look !== null)
      ? Analytics_Trigger_Action_Look.fromPartial(object.look)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? Analytics_Trigger_Action_Message.fromPartial(object.message)
      : undefined;
    message.communications = (object.communications !== undefined && object.communications !== null)
      ? Analytics_Trigger_Action_Communications.fromPartial(object.communications)
      : undefined;
    message.slideDestination = (object.slideDestination !== undefined && object.slideDestination !== null)
      ? Analytics_Trigger_Action_SlideDestination.fromPartial(object.slideDestination)
      : undefined;
    message.macro = (object.macro !== undefined && object.macro !== null)
      ? Analytics_Trigger_Action_Macro.fromPartial(object.macro)
      : undefined;
    message.clearGroup = (object.clearGroup !== undefined && object.clearGroup !== null)
      ? Analytics_Trigger_Action_ClearGroup.fromPartial(object.clearGroup)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_ClearLayer(): Analytics_Trigger_Action_ClearLayer {
  return {};
}

export const Analytics_Trigger_Action_ClearLayer = {
  encode(_: Analytics_Trigger_Action_ClearLayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_ClearLayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_ClearLayer();
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

  fromJSON(_: any): Analytics_Trigger_Action_ClearLayer {
    return {};
  },

  toJSON(_: Analytics_Trigger_Action_ClearLayer): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_ClearLayer>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_ClearLayer {
    return Analytics_Trigger_Action_ClearLayer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_ClearLayer>, I>>(
    _: I,
  ): Analytics_Trigger_Action_ClearLayer {
    const message = createBaseAnalytics_Trigger_Action_ClearLayer();
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_MediaBinPlaylist(): Analytics_Trigger_Action_MediaBinPlaylist {
  return {};
}

export const Analytics_Trigger_Action_MediaBinPlaylist = {
  encode(_: Analytics_Trigger_Action_MediaBinPlaylist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_MediaBinPlaylist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_MediaBinPlaylist();
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

  fromJSON(_: any): Analytics_Trigger_Action_MediaBinPlaylist {
    return {};
  },

  toJSON(_: Analytics_Trigger_Action_MediaBinPlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_MediaBinPlaylist>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_MediaBinPlaylist {
    return Analytics_Trigger_Action_MediaBinPlaylist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_MediaBinPlaylist>, I>>(
    _: I,
  ): Analytics_Trigger_Action_MediaBinPlaylist {
    const message = createBaseAnalytics_Trigger_Action_MediaBinPlaylist();
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_AudioBinPlaylist(): Analytics_Trigger_Action_AudioBinPlaylist {
  return {};
}

export const Analytics_Trigger_Action_AudioBinPlaylist = {
  encode(_: Analytics_Trigger_Action_AudioBinPlaylist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_AudioBinPlaylist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_AudioBinPlaylist();
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

  fromJSON(_: any): Analytics_Trigger_Action_AudioBinPlaylist {
    return {};
  },

  toJSON(_: Analytics_Trigger_Action_AudioBinPlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_AudioBinPlaylist>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_AudioBinPlaylist {
    return Analytics_Trigger_Action_AudioBinPlaylist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_AudioBinPlaylist>, I>>(
    _: I,
  ): Analytics_Trigger_Action_AudioBinPlaylist {
    const message = createBaseAnalytics_Trigger_Action_AudioBinPlaylist();
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Stage(): Analytics_Trigger_Action_Stage {
  return { layoutChangeCount: 0, totalStageScreens: 0 };
}

export const Analytics_Trigger_Action_Stage = {
  encode(message: Analytics_Trigger_Action_Stage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layoutChangeCount !== 0) {
      writer.uint32(8).int32(message.layoutChangeCount);
    }
    if (message.totalStageScreens !== 0) {
      writer.uint32(16).int32(message.totalStageScreens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Stage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Stage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.layoutChangeCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.totalStageScreens = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_Stage {
    return {
      layoutChangeCount: isSet(object.layoutChangeCount) ? Number(object.layoutChangeCount) : 0,
      totalStageScreens: isSet(object.totalStageScreens) ? Number(object.totalStageScreens) : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Action_Stage): unknown {
    const obj: any = {};
    message.layoutChangeCount !== undefined && (obj.layoutChangeCount = Math.round(message.layoutChangeCount));
    message.totalStageScreens !== undefined && (obj.totalStageScreens = Math.round(message.totalStageScreens));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Stage>, I>>(base?: I): Analytics_Trigger_Action_Stage {
    return Analytics_Trigger_Action_Stage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Stage>, I>>(
    object: I,
  ): Analytics_Trigger_Action_Stage {
    const message = createBaseAnalytics_Trigger_Action_Stage();
    message.layoutChangeCount = object.layoutChangeCount ?? 0;
    message.totalStageScreens = object.totalStageScreens ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_SlideDestination(): Analytics_Trigger_Action_SlideDestination {
  return { changeSlideDestination: 0 };
}

export const Analytics_Trigger_Action_SlideDestination = {
  encode(message: Analytics_Trigger_Action_SlideDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changeSlideDestination !== 0) {
      writer.uint32(8).int32(message.changeSlideDestination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_SlideDestination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_SlideDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.changeSlideDestination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_SlideDestination {
    return {
      changeSlideDestination: isSet(object.changeSlideDestination)
        ? analytics_Trigger_Action_SlideDestination_ChangeSlideDestinationFromJSON(object.changeSlideDestination)
        : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Action_SlideDestination): unknown {
    const obj: any = {};
    message.changeSlideDestination !== undefined &&
      (obj.changeSlideDestination = analytics_Trigger_Action_SlideDestination_ChangeSlideDestinationToJSON(
        message.changeSlideDestination,
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_SlideDestination>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_SlideDestination {
    return Analytics_Trigger_Action_SlideDestination.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_SlideDestination>, I>>(
    object: I,
  ): Analytics_Trigger_Action_SlideDestination {
    const message = createBaseAnalytics_Trigger_Action_SlideDestination();
    message.changeSlideDestination = object.changeSlideDestination ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Timer(): Analytics_Trigger_Action_Timer {
  return { type: 0 };
}

export const Analytics_Trigger_Action_Timer = {
  encode(message: Analytics_Trigger_Action_Timer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Timer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Timer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_Timer {
    return { type: isSet(object.type) ? analytics_Trigger_Action_Timer_TypeFromJSON(object.type) : 0 };
  },

  toJSON(message: Analytics_Trigger_Action_Timer): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = analytics_Trigger_Action_Timer_TypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Timer>, I>>(base?: I): Analytics_Trigger_Action_Timer {
    return Analytics_Trigger_Action_Timer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Timer>, I>>(
    object: I,
  ): Analytics_Trigger_Action_Timer {
    const message = createBaseAnalytics_Trigger_Action_Timer();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Prop(): Analytics_Trigger_Action_Prop {
  return { transition: "" };
}

export const Analytics_Trigger_Action_Prop = {
  encode(message: Analytics_Trigger_Action_Prop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transition !== "") {
      writer.uint32(10).string(message.transition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Prop {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Prop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.transition = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_Prop {
    return { transition: isSet(object.transition) ? String(object.transition) : "" };
  },

  toJSON(message: Analytics_Trigger_Action_Prop): unknown {
    const obj: any = {};
    message.transition !== undefined && (obj.transition = message.transition);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Prop>, I>>(base?: I): Analytics_Trigger_Action_Prop {
    return Analytics_Trigger_Action_Prop.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Prop>, I>>(
    object: I,
  ): Analytics_Trigger_Action_Prop {
    const message = createBaseAnalytics_Trigger_Action_Prop();
    message.transition = object.transition ?? "";
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Look(): Analytics_Trigger_Action_Look {
  return {};
}

export const Analytics_Trigger_Action_Look = {
  encode(_: Analytics_Trigger_Action_Look, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Look {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Look();
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

  fromJSON(_: any): Analytics_Trigger_Action_Look {
    return {};
  },

  toJSON(_: Analytics_Trigger_Action_Look): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Look>, I>>(base?: I): Analytics_Trigger_Action_Look {
    return Analytics_Trigger_Action_Look.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Look>, I>>(_: I): Analytics_Trigger_Action_Look {
    const message = createBaseAnalytics_Trigger_Action_Look();
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Message(): Analytics_Trigger_Action_Message {
  return { tokenCount: 0, textTokenCount: 0, timerTokenCount: 0, clockTokenCount: 0, showingCount: 0 };
}

export const Analytics_Trigger_Action_Message = {
  encode(message: Analytics_Trigger_Action_Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.tokenCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.textTokenCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.timerTokenCount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.clockTokenCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.showingCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_Message {
    return {
      tokenCount: isSet(object.tokenCount) ? Number(object.tokenCount) : 0,
      textTokenCount: isSet(object.textTokenCount) ? Number(object.textTokenCount) : 0,
      timerTokenCount: isSet(object.timerTokenCount) ? Number(object.timerTokenCount) : 0,
      clockTokenCount: isSet(object.clockTokenCount) ? Number(object.clockTokenCount) : 0,
      showingCount: isSet(object.showingCount) ? Number(object.showingCount) : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Action_Message): unknown {
    const obj: any = {};
    message.tokenCount !== undefined && (obj.tokenCount = Math.round(message.tokenCount));
    message.textTokenCount !== undefined && (obj.textTokenCount = Math.round(message.textTokenCount));
    message.timerTokenCount !== undefined && (obj.timerTokenCount = Math.round(message.timerTokenCount));
    message.clockTokenCount !== undefined && (obj.clockTokenCount = Math.round(message.clockTokenCount));
    message.showingCount !== undefined && (obj.showingCount = Math.round(message.showingCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Message>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_Message {
    return Analytics_Trigger_Action_Message.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Message>, I>>(
    object: I,
  ): Analytics_Trigger_Action_Message {
    const message = createBaseAnalytics_Trigger_Action_Message();
    message.tokenCount = object.tokenCount ?? 0;
    message.textTokenCount = object.textTokenCount ?? 0;
    message.timerTokenCount = object.timerTokenCount ?? 0;
    message.clockTokenCount = object.clockTokenCount ?? 0;
    message.showingCount = object.showingCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Communications(): Analytics_Trigger_Action_Communications {
  return {};
}

export const Analytics_Trigger_Action_Communications = {
  encode(_: Analytics_Trigger_Action_Communications, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Communications {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Communications();
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

  fromJSON(_: any): Analytics_Trigger_Action_Communications {
    return {};
  },

  toJSON(_: Analytics_Trigger_Action_Communications): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Communications>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_Communications {
    return Analytics_Trigger_Action_Communications.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Communications>, I>>(
    _: I,
  ): Analytics_Trigger_Action_Communications {
    const message = createBaseAnalytics_Trigger_Action_Communications();
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_Macro(): Analytics_Trigger_Action_Macro {
  return { actionCount: 0, cueActionCount: 0, totalActionCount: 0 };
}

export const Analytics_Trigger_Action_Macro = {
  encode(message: Analytics_Trigger_Action_Macro, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_Macro {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_Macro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.actionCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.cueActionCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalActionCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_Macro {
    return {
      actionCount: isSet(object.actionCount) ? Number(object.actionCount) : 0,
      cueActionCount: isSet(object.cueActionCount) ? Number(object.cueActionCount) : 0,
      totalActionCount: isSet(object.totalActionCount) ? Number(object.totalActionCount) : 0,
    };
  },

  toJSON(message: Analytics_Trigger_Action_Macro): unknown {
    const obj: any = {};
    message.actionCount !== undefined && (obj.actionCount = Math.round(message.actionCount));
    message.cueActionCount !== undefined && (obj.cueActionCount = Math.round(message.cueActionCount));
    message.totalActionCount !== undefined && (obj.totalActionCount = Math.round(message.totalActionCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_Macro>, I>>(base?: I): Analytics_Trigger_Action_Macro {
    return Analytics_Trigger_Action_Macro.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_Macro>, I>>(
    object: I,
  ): Analytics_Trigger_Action_Macro {
    const message = createBaseAnalytics_Trigger_Action_Macro();
    message.actionCount = object.actionCount ?? 0;
    message.cueActionCount = object.cueActionCount ?? 0;
    message.totalActionCount = object.totalActionCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Trigger_Action_ClearGroup(): Analytics_Trigger_Action_ClearGroup {
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

export const Analytics_Trigger_Action_ClearGroup = {
  encode(message: Analytics_Trigger_Action_ClearGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_Action_ClearGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_Action_ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.layerAudio = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.layerMessages = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.layerProps = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.layerAnnouncement = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.layerSlide = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.layerMedia = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.layerVideoInput = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Trigger_Action_ClearGroup {
    return {
      layerAudio: isSet(object.layerAudio) ? Boolean(object.layerAudio) : false,
      layerMessages: isSet(object.layerMessages) ? Boolean(object.layerMessages) : false,
      layerProps: isSet(object.layerProps) ? Boolean(object.layerProps) : false,
      layerAnnouncement: isSet(object.layerAnnouncement) ? Boolean(object.layerAnnouncement) : false,
      layerSlide: isSet(object.layerSlide) ? Boolean(object.layerSlide) : false,
      layerMedia: isSet(object.layerMedia) ? Boolean(object.layerMedia) : false,
      layerVideoInput: isSet(object.layerVideoInput) ? Boolean(object.layerVideoInput) : false,
    };
  },

  toJSON(message: Analytics_Trigger_Action_ClearGroup): unknown {
    const obj: any = {};
    message.layerAudio !== undefined && (obj.layerAudio = message.layerAudio);
    message.layerMessages !== undefined && (obj.layerMessages = message.layerMessages);
    message.layerProps !== undefined && (obj.layerProps = message.layerProps);
    message.layerAnnouncement !== undefined && (obj.layerAnnouncement = message.layerAnnouncement);
    message.layerSlide !== undefined && (obj.layerSlide = message.layerSlide);
    message.layerMedia !== undefined && (obj.layerMedia = message.layerMedia);
    message.layerVideoInput !== undefined && (obj.layerVideoInput = message.layerVideoInput);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_Action_ClearGroup>, I>>(
    base?: I,
  ): Analytics_Trigger_Action_ClearGroup {
    return Analytics_Trigger_Action_ClearGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_Action_ClearGroup>, I>>(
    object: I,
  ): Analytics_Trigger_Action_ClearGroup {
    const message = createBaseAnalytics_Trigger_Action_ClearGroup();
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

function createBaseAnalytics_Trigger_MediaBin(): Analytics_Trigger_MediaBin {
  return {};
}

export const Analytics_Trigger_MediaBin = {
  encode(_: Analytics_Trigger_MediaBin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_MediaBin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_MediaBin();
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

  fromJSON(_: any): Analytics_Trigger_MediaBin {
    return {};
  },

  toJSON(_: Analytics_Trigger_MediaBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_MediaBin>, I>>(base?: I): Analytics_Trigger_MediaBin {
    return Analytics_Trigger_MediaBin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_MediaBin>, I>>(_: I): Analytics_Trigger_MediaBin {
    const message = createBaseAnalytics_Trigger_MediaBin();
    return message;
  },
};

function createBaseAnalytics_Trigger_AudioBin(): Analytics_Trigger_AudioBin {
  return {};
}

export const Analytics_Trigger_AudioBin = {
  encode(_: Analytics_Trigger_AudioBin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Trigger_AudioBin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Trigger_AudioBin();
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

  fromJSON(_: any): Analytics_Trigger_AudioBin {
    return {};
  },

  toJSON(_: Analytics_Trigger_AudioBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Trigger_AudioBin>, I>>(base?: I): Analytics_Trigger_AudioBin {
    return Analytics_Trigger_AudioBin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Trigger_AudioBin>, I>>(_: I): Analytics_Trigger_AudioBin {
    const message = createBaseAnalytics_Trigger_AudioBin();
    return message;
  },
};

function createBaseAnalytics_Create(): Analytics_Create {
  return { library: undefined, playlist: undefined, presentation: undefined, templatePlaylist: undefined };
}

export const Analytics_Create = {
  encode(message: Analytics_Create, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.library !== undefined) {
      Analytics_Create_Library.encode(message.library, writer.uint32(10).fork()).ldelim();
    }
    if (message.playlist !== undefined) {
      Analytics_Create_Playlist.encode(message.playlist, writer.uint32(18).fork()).ldelim();
    }
    if (message.presentation !== undefined) {
      Analytics_Create_Presentation.encode(message.presentation, writer.uint32(26).fork()).ldelim();
    }
    if (message.templatePlaylist !== undefined) {
      Analytics_Create_TemplatePlaylist.encode(message.templatePlaylist, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Create {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Create();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.library = Analytics_Create_Library.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playlist = Analytics_Create_Playlist.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.presentation = Analytics_Create_Presentation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.templatePlaylist = Analytics_Create_TemplatePlaylist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Create {
    return {
      library: isSet(object.library) ? Analytics_Create_Library.fromJSON(object.library) : undefined,
      playlist: isSet(object.playlist) ? Analytics_Create_Playlist.fromJSON(object.playlist) : undefined,
      presentation: isSet(object.presentation)
        ? Analytics_Create_Presentation.fromJSON(object.presentation)
        : undefined,
      templatePlaylist: isSet(object.templatePlaylist)
        ? Analytics_Create_TemplatePlaylist.fromJSON(object.templatePlaylist)
        : undefined,
    };
  },

  toJSON(message: Analytics_Create): unknown {
    const obj: any = {};
    message.library !== undefined &&
      (obj.library = message.library ? Analytics_Create_Library.toJSON(message.library) : undefined);
    message.playlist !== undefined &&
      (obj.playlist = message.playlist ? Analytics_Create_Playlist.toJSON(message.playlist) : undefined);
    message.presentation !== undefined &&
      (obj.presentation = message.presentation
        ? Analytics_Create_Presentation.toJSON(message.presentation)
        : undefined);
    message.templatePlaylist !== undefined && (obj.templatePlaylist = message.templatePlaylist
      ? Analytics_Create_TemplatePlaylist.toJSON(message.templatePlaylist)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Create>, I>>(base?: I): Analytics_Create {
    return Analytics_Create.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Create>, I>>(object: I): Analytics_Create {
    const message = createBaseAnalytics_Create();
    message.library = (object.library !== undefined && object.library !== null)
      ? Analytics_Create_Library.fromPartial(object.library)
      : undefined;
    message.playlist = (object.playlist !== undefined && object.playlist !== null)
      ? Analytics_Create_Playlist.fromPartial(object.playlist)
      : undefined;
    message.presentation = (object.presentation !== undefined && object.presentation !== null)
      ? Analytics_Create_Presentation.fromPartial(object.presentation)
      : undefined;
    message.templatePlaylist = (object.templatePlaylist !== undefined && object.templatePlaylist !== null)
      ? Analytics_Create_TemplatePlaylist.fromPartial(object.templatePlaylist)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Create_Library(): Analytics_Create_Library {
  return { source: 0 };
}

export const Analytics_Create_Library = {
  encode(message: Analytics_Create_Library, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Create_Library {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Create_Library();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Create_Library {
    return { source: isSet(object.source) ? analytics_Create_Library_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_Create_Library): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_Create_Library_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Create_Library>, I>>(base?: I): Analytics_Create_Library {
    return Analytics_Create_Library.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Create_Library>, I>>(object: I): Analytics_Create_Library {
    const message = createBaseAnalytics_Create_Library();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_Create_Playlist(): Analytics_Create_Playlist {
  return { source: 0, type: 0 };
}

export const Analytics_Create_Playlist = {
  encode(message: Analytics_Create_Playlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Create_Playlist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Create_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Create_Playlist {
    return {
      source: isSet(object.source) ? analytics_Create_Playlist_SourceFromJSON(object.source) : 0,
      type: isSet(object.type) ? analytics_Create_Playlist_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Analytics_Create_Playlist): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_Create_Playlist_SourceToJSON(message.source));
    message.type !== undefined && (obj.type = analytics_Create_Playlist_TypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Create_Playlist>, I>>(base?: I): Analytics_Create_Playlist {
    return Analytics_Create_Playlist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Create_Playlist>, I>>(object: I): Analytics_Create_Playlist {
    const message = createBaseAnalytics_Create_Playlist();
    message.source = object.source ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAnalytics_Create_Presentation(): Analytics_Create_Presentation {
  return { source: 0 };
}

export const Analytics_Create_Presentation = {
  encode(message: Analytics_Create_Presentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Create_Presentation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Create_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Create_Presentation {
    return { source: isSet(object.source) ? analytics_Create_Presentation_SourceFromJSON(object.source) : 0 };
  },

  toJSON(message: Analytics_Create_Presentation): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = analytics_Create_Presentation_SourceToJSON(message.source));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Create_Presentation>, I>>(base?: I): Analytics_Create_Presentation {
    return Analytics_Create_Presentation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Create_Presentation>, I>>(
    object: I,
  ): Analytics_Create_Presentation {
    const message = createBaseAnalytics_Create_Presentation();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseAnalytics_Create_TemplatePlaylist(): Analytics_Create_TemplatePlaylist {
  return { totalItemCount: 0, headerCount: 0, placeholderCount: 0, presentationCount: 0, mediaCount: 0 };
}

export const Analytics_Create_TemplatePlaylist = {
  encode(message: Analytics_Create_TemplatePlaylist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalItemCount !== 0) {
      writer.uint32(8).int32(message.totalItemCount);
    }
    if (message.headerCount !== 0) {
      writer.uint32(16).int32(message.headerCount);
    }
    if (message.placeholderCount !== 0) {
      writer.uint32(24).int32(message.placeholderCount);
    }
    if (message.presentationCount !== 0) {
      writer.uint32(32).int32(message.presentationCount);
    }
    if (message.mediaCount !== 0) {
      writer.uint32(40).int32(message.mediaCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Create_TemplatePlaylist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Create_TemplatePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.totalItemCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.headerCount = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.placeholderCount = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.presentationCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mediaCount = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Create_TemplatePlaylist {
    return {
      totalItemCount: isSet(object.totalItemCount) ? Number(object.totalItemCount) : 0,
      headerCount: isSet(object.headerCount) ? Number(object.headerCount) : 0,
      placeholderCount: isSet(object.placeholderCount) ? Number(object.placeholderCount) : 0,
      presentationCount: isSet(object.presentationCount) ? Number(object.presentationCount) : 0,
      mediaCount: isSet(object.mediaCount) ? Number(object.mediaCount) : 0,
    };
  },

  toJSON(message: Analytics_Create_TemplatePlaylist): unknown {
    const obj: any = {};
    message.totalItemCount !== undefined && (obj.totalItemCount = Math.round(message.totalItemCount));
    message.headerCount !== undefined && (obj.headerCount = Math.round(message.headerCount));
    message.placeholderCount !== undefined && (obj.placeholderCount = Math.round(message.placeholderCount));
    message.presentationCount !== undefined && (obj.presentationCount = Math.round(message.presentationCount));
    message.mediaCount !== undefined && (obj.mediaCount = Math.round(message.mediaCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Create_TemplatePlaylist>, I>>(
    base?: I,
  ): Analytics_Create_TemplatePlaylist {
    return Analytics_Create_TemplatePlaylist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Create_TemplatePlaylist>, I>>(
    object: I,
  ): Analytics_Create_TemplatePlaylist {
    const message = createBaseAnalytics_Create_TemplatePlaylist();
    message.totalItemCount = object.totalItemCount ?? 0;
    message.headerCount = object.headerCount ?? 0;
    message.placeholderCount = object.placeholderCount ?? 0;
    message.presentationCount = object.presentationCount ?? 0;
    message.mediaCount = object.mediaCount ?? 0;
    return message;
  },
};

function createBaseAnalytics_Import(): Analytics_Import {
  return { songSelect: undefined, multitracks: undefined };
}

export const Analytics_Import = {
  encode(message: Analytics_Import, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.songSelect !== undefined) {
      Analytics_Import_SongSelect.encode(message.songSelect, writer.uint32(10).fork()).ldelim();
    }
    if (message.multitracks !== undefined) {
      Analytics_MultiTracks_Import.encode(message.multitracks, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Import {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Import();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.songSelect = Analytics_Import_SongSelect.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.multitracks = Analytics_MultiTracks_Import.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Import {
    return {
      songSelect: isSet(object.songSelect) ? Analytics_Import_SongSelect.fromJSON(object.songSelect) : undefined,
      multitracks: isSet(object.multitracks) ? Analytics_MultiTracks_Import.fromJSON(object.multitracks) : undefined,
    };
  },

  toJSON(message: Analytics_Import): unknown {
    const obj: any = {};
    message.songSelect !== undefined &&
      (obj.songSelect = message.songSelect ? Analytics_Import_SongSelect.toJSON(message.songSelect) : undefined);
    message.multitracks !== undefined &&
      (obj.multitracks = message.multitracks ? Analytics_MultiTracks_Import.toJSON(message.multitracks) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Import>, I>>(base?: I): Analytics_Import {
    return Analytics_Import.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Import>, I>>(object: I): Analytics_Import {
    const message = createBaseAnalytics_Import();
    message.songSelect = (object.songSelect !== undefined && object.songSelect !== null)
      ? Analytics_Import_SongSelect.fromPartial(object.songSelect)
      : undefined;
    message.multitracks = (object.multitracks !== undefined && object.multitracks !== null)
      ? Analytics_MultiTracks_Import.fromPartial(object.multitracks)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Import_SongSelect(): Analytics_Import_SongSelect {
  return {
    templateSlideTextElementCount: 0,
    importIntoPlaylist: false,
    lineDelimiter: 0,
    lineDelimiterCount: 0,
    didOpenEditView: false,
  };
}

export const Analytics_Import_SongSelect = {
  encode(message: Analytics_Import_SongSelect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.templateSlideTextElementCount !== 0) {
      writer.uint32(8).int32(message.templateSlideTextElementCount);
    }
    if (message.importIntoPlaylist === true) {
      writer.uint32(16).bool(message.importIntoPlaylist);
    }
    if (message.lineDelimiter !== 0) {
      writer.uint32(24).int32(message.lineDelimiter);
    }
    if (message.lineDelimiterCount !== 0) {
      writer.uint32(32).int32(message.lineDelimiterCount);
    }
    if (message.didOpenEditView === true) {
      writer.uint32(40).bool(message.didOpenEditView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Import_SongSelect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Import_SongSelect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.templateSlideTextElementCount = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.importIntoPlaylist = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.lineDelimiter = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.lineDelimiterCount = reader.int32();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.didOpenEditView = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Import_SongSelect {
    return {
      templateSlideTextElementCount: isSet(object.templateSlideTextElementCount)
        ? Number(object.templateSlideTextElementCount)
        : 0,
      importIntoPlaylist: isSet(object.importIntoPlaylist) ? Boolean(object.importIntoPlaylist) : false,
      lineDelimiter: isSet(object.lineDelimiter)
        ? analytics_Import_SongSelect_LineDelimiterFromJSON(object.lineDelimiter)
        : 0,
      lineDelimiterCount: isSet(object.lineDelimiterCount) ? Number(object.lineDelimiterCount) : 0,
      didOpenEditView: isSet(object.didOpenEditView) ? Boolean(object.didOpenEditView) : false,
    };
  },

  toJSON(message: Analytics_Import_SongSelect): unknown {
    const obj: any = {};
    message.templateSlideTextElementCount !== undefined &&
      (obj.templateSlideTextElementCount = Math.round(message.templateSlideTextElementCount));
    message.importIntoPlaylist !== undefined && (obj.importIntoPlaylist = message.importIntoPlaylist);
    message.lineDelimiter !== undefined &&
      (obj.lineDelimiter = analytics_Import_SongSelect_LineDelimiterToJSON(message.lineDelimiter));
    message.lineDelimiterCount !== undefined && (obj.lineDelimiterCount = Math.round(message.lineDelimiterCount));
    message.didOpenEditView !== undefined && (obj.didOpenEditView = message.didOpenEditView);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Import_SongSelect>, I>>(base?: I): Analytics_Import_SongSelect {
    return Analytics_Import_SongSelect.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Import_SongSelect>, I>>(object: I): Analytics_Import_SongSelect {
    const message = createBaseAnalytics_Import_SongSelect();
    message.templateSlideTextElementCount = object.templateSlideTextElementCount ?? 0;
    message.importIntoPlaylist = object.importIntoPlaylist ?? false;
    message.lineDelimiter = object.lineDelimiter ?? 0;
    message.lineDelimiterCount = object.lineDelimiterCount ?? 0;
    message.didOpenEditView = object.didOpenEditView ?? false;
    return message;
  },
};

function createBaseAnalytics_Update(): Analytics_Update {
  return { downgrade: undefined };
}

export const Analytics_Update = {
  encode(message: Analytics_Update, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downgrade !== undefined) {
      Analytics_Update_Downgrade.encode(message.downgrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Update {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Update();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.downgrade = Analytics_Update_Downgrade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Update {
    return { downgrade: isSet(object.downgrade) ? Analytics_Update_Downgrade.fromJSON(object.downgrade) : undefined };
  },

  toJSON(message: Analytics_Update): unknown {
    const obj: any = {};
    message.downgrade !== undefined &&
      (obj.downgrade = message.downgrade ? Analytics_Update_Downgrade.toJSON(message.downgrade) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Update>, I>>(base?: I): Analytics_Update {
    return Analytics_Update.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Update>, I>>(object: I): Analytics_Update {
    const message = createBaseAnalytics_Update();
    message.downgrade = (object.downgrade !== undefined && object.downgrade !== null)
      ? Analytics_Update_Downgrade.fromPartial(object.downgrade)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_Update_Downgrade(): Analytics_Update_Downgrade {
  return { fromVersionType: 0 };
}

export const Analytics_Update_Downgrade = {
  encode(message: Analytics_Update_Downgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromVersionType !== 0) {
      writer.uint32(8).int32(message.fromVersionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_Update_Downgrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_Update_Downgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.fromVersionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_Update_Downgrade {
    return {
      fromVersionType: isSet(object.fromVersionType)
        ? analytics_Update_Downgrade_FromVersionTypeFromJSON(object.fromVersionType)
        : 0,
    };
  },

  toJSON(message: Analytics_Update_Downgrade): unknown {
    const obj: any = {};
    message.fromVersionType !== undefined &&
      (obj.fromVersionType = analytics_Update_Downgrade_FromVersionTypeToJSON(message.fromVersionType));
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_Update_Downgrade>, I>>(base?: I): Analytics_Update_Downgrade {
    return Analytics_Update_Downgrade.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_Update_Downgrade>, I>>(object: I): Analytics_Update_Downgrade {
    const message = createBaseAnalytics_Update_Downgrade();
    message.fromVersionType = object.fromVersionType ?? 0;
    return message;
  },
};

function createBaseAnalytics_WHMStore(): Analytics_WHMStore {
  return { viewStore: undefined, download: undefined };
}

export const Analytics_WHMStore = {
  encode(message: Analytics_WHMStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.viewStore !== undefined) {
      Analytics_WHMStore_ViewStore.encode(message.viewStore, writer.uint32(10).fork()).ldelim();
    }
    if (message.download !== undefined) {
      Analytics_WHMStore_Download.encode(message.download, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_WHMStore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_WHMStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.viewStore = Analytics_WHMStore_ViewStore.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.download = Analytics_WHMStore_Download.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_WHMStore {
    return {
      viewStore: isSet(object.viewStore) ? Analytics_WHMStore_ViewStore.fromJSON(object.viewStore) : undefined,
      download: isSet(object.download) ? Analytics_WHMStore_Download.fromJSON(object.download) : undefined,
    };
  },

  toJSON(message: Analytics_WHMStore): unknown {
    const obj: any = {};
    message.viewStore !== undefined &&
      (obj.viewStore = message.viewStore ? Analytics_WHMStore_ViewStore.toJSON(message.viewStore) : undefined);
    message.download !== undefined &&
      (obj.download = message.download ? Analytics_WHMStore_Download.toJSON(message.download) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_WHMStore>, I>>(base?: I): Analytics_WHMStore {
    return Analytics_WHMStore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_WHMStore>, I>>(object: I): Analytics_WHMStore {
    const message = createBaseAnalytics_WHMStore();
    message.viewStore = (object.viewStore !== undefined && object.viewStore !== null)
      ? Analytics_WHMStore_ViewStore.fromPartial(object.viewStore)
      : undefined;
    message.download = (object.download !== undefined && object.download !== null)
      ? Analytics_WHMStore_Download.fromPartial(object.download)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_WHMStore_ViewStore(): Analytics_WHMStore_ViewStore {
  return {};
}

export const Analytics_WHMStore_ViewStore = {
  encode(_: Analytics_WHMStore_ViewStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_WHMStore_ViewStore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_WHMStore_ViewStore();
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

  fromJSON(_: any): Analytics_WHMStore_ViewStore {
    return {};
  },

  toJSON(_: Analytics_WHMStore_ViewStore): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_WHMStore_ViewStore>, I>>(base?: I): Analytics_WHMStore_ViewStore {
    return Analytics_WHMStore_ViewStore.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_WHMStore_ViewStore>, I>>(_: I): Analytics_WHMStore_ViewStore {
    const message = createBaseAnalytics_WHMStore_ViewStore();
    return message;
  },
};

function createBaseAnalytics_WHMStore_Download(): Analytics_WHMStore_Download {
  return {};
}

export const Analytics_WHMStore_Download = {
  encode(_: Analytics_WHMStore_Download, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_WHMStore_Download {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_WHMStore_Download();
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

  fromJSON(_: any): Analytics_WHMStore_Download {
    return {};
  },

  toJSON(_: Analytics_WHMStore_Download): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_WHMStore_Download>, I>>(base?: I): Analytics_WHMStore_Download {
    return Analytics_WHMStore_Download.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_WHMStore_Download>, I>>(_: I): Analytics_WHMStore_Download {
    const message = createBaseAnalytics_WHMStore_Download();
    return message;
  },
};

function createBaseAnalytics_ProContent(): Analytics_ProContent {
  return { mediaBin: undefined, download: undefined };
}

export const Analytics_ProContent = {
  encode(message: Analytics_ProContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mediaBin !== undefined) {
      Analytics_ProContent_ViewMediaBin.encode(message.mediaBin, writer.uint32(10).fork()).ldelim();
    }
    if (message.download !== undefined) {
      Analytics_ProContent_Download.encode(message.download, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_ProContent {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_ProContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.mediaBin = Analytics_ProContent_ViewMediaBin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.download = Analytics_ProContent_Download.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_ProContent {
    return {
      mediaBin: isSet(object.mediaBin) ? Analytics_ProContent_ViewMediaBin.fromJSON(object.mediaBin) : undefined,
      download: isSet(object.download) ? Analytics_ProContent_Download.fromJSON(object.download) : undefined,
    };
  },

  toJSON(message: Analytics_ProContent): unknown {
    const obj: any = {};
    message.mediaBin !== undefined &&
      (obj.mediaBin = message.mediaBin ? Analytics_ProContent_ViewMediaBin.toJSON(message.mediaBin) : undefined);
    message.download !== undefined &&
      (obj.download = message.download ? Analytics_ProContent_Download.toJSON(message.download) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_ProContent>, I>>(base?: I): Analytics_ProContent {
    return Analytics_ProContent.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_ProContent>, I>>(object: I): Analytics_ProContent {
    const message = createBaseAnalytics_ProContent();
    message.mediaBin = (object.mediaBin !== undefined && object.mediaBin !== null)
      ? Analytics_ProContent_ViewMediaBin.fromPartial(object.mediaBin)
      : undefined;
    message.download = (object.download !== undefined && object.download !== null)
      ? Analytics_ProContent_Download.fromPartial(object.download)
      : undefined;
    return message;
  },
};

function createBaseAnalytics_ProContent_ViewMediaBin(): Analytics_ProContent_ViewMediaBin {
  return {};
}

export const Analytics_ProContent_ViewMediaBin = {
  encode(_: Analytics_ProContent_ViewMediaBin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_ProContent_ViewMediaBin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_ProContent_ViewMediaBin();
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

  fromJSON(_: any): Analytics_ProContent_ViewMediaBin {
    return {};
  },

  toJSON(_: Analytics_ProContent_ViewMediaBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_ProContent_ViewMediaBin>, I>>(
    base?: I,
  ): Analytics_ProContent_ViewMediaBin {
    return Analytics_ProContent_ViewMediaBin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_ProContent_ViewMediaBin>, I>>(
    _: I,
  ): Analytics_ProContent_ViewMediaBin {
    const message = createBaseAnalytics_ProContent_ViewMediaBin();
    return message;
  },
};

function createBaseAnalytics_ProContent_Download(): Analytics_ProContent_Download {
  return {};
}

export const Analytics_ProContent_Download = {
  encode(_: Analytics_ProContent_Download, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Analytics_ProContent_Download {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_ProContent_Download();
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

  fromJSON(_: any): Analytics_ProContent_Download {
    return {};
  },

  toJSON(_: Analytics_ProContent_Download): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_ProContent_Download>, I>>(base?: I): Analytics_ProContent_Download {
    return Analytics_ProContent_Download.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Analytics_ProContent_Download>, I>>(_: I): Analytics_ProContent_Download {
    const message = createBaseAnalytics_ProContent_Download();
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
