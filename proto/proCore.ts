/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Action,
  Action_CaptureType,
  Action_ContentDestination,
  action_ContentDestinationFromJSON,
  action_ContentDestinationToJSON,
  Action_MediaType_PlaybackMarker,
  Action_TimerType,
} from './action';
import { AlphaType, alphaTypeFromJSON, alphaTypeToJSON } from './alphaType';
import { CCLIDocument, CopyrightLayout } from './ccli';
import { Cue } from './cue';
import { DigitalAudio_Setup } from './digitalAudio';
import { Effect } from './effects';
import {
  Graphics_BackgroundEffect,
  Graphics_EdgeInsets,
  Graphics_Text_CutOutFill,
  Graphics_Text_MediaFill,
  Media,
  Media_AudioProperties,
  Media_DrawingProperties_NativeRotationType,
  media_DrawingProperties_NativeRotationTypeFromJSON,
  media_DrawingProperties_NativeRotationTypeToJSON,
  Media_ScaleAlignment,
  media_ScaleAlignmentFromJSON,
  media_ScaleAlignmentToJSON,
  Media_ScaleBehavior,
  media_ScaleBehaviorFromJSON,
  media_ScaleBehaviorToJSON,
} from './graphicsData';
import { AudioInput, VideoInput } from './input';
import { MacrosDocument } from './macros';
import { MessageDocument } from './messages';
import { Playlist } from './playlist';
import { Presentation } from './presentation';
import { AudienceLookCollection, ProAudienceLook } from './proAudienceLook';
import { MaskCollection } from './proMask';
import { PropDocument } from './propDocument';
import { ProPresenterWorkspace } from './proworkspace';
import {
  Recording_SettingsDocument,
  Recording_Stream,
  Recording_Stream_Encoder,
} from './recording';
import { Slide } from './slide';
import { Stage_Document } from './stage';
import { Timer, TimersDocument } from './timers';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface MediaMetadataRequestInfo {
  filePath: string;
  time: number;
  width: number;
  height: number;
  effects: Effect[];
  cropInsets: Graphics_EdgeInsets | undefined;
  nativeRotation: Media_DrawingProperties_NativeRotationType;
  flippedHorizontally: boolean;
  flippedVertically: boolean;
  alphaType: AlphaType;
}

export interface MediaMetadataRequestResponse {
  metadata: MediaMetadataRequestResponse_Metadata | undefined;
  generatedBitmapInfo: MediaMetadataRequestResponse_BitmapInfo | undefined;
}

export interface MediaMetadataRequestResponse_Metadata {
  width: number;
  height: number;
  fps: number;
  duration: number;
  numberAudioChannels: number;
  codec: string;
  artist: string;
  title: string;
  rotation: number;
  contentType: MediaMetadataRequestResponse_Metadata_ContentType;
  hasAlphaChannel: boolean;
}

export enum MediaMetadataRequestResponse_Metadata_ContentType {
  CONTENT_TYPE_UNKNOWN = 0,
  CONTENT_TYPE_AUDIO = 1,
  CONTENT_TYPE_IMAGE = 2,
  CONTENT_TYPE_VIDEO = 3,
  UNRECOGNIZED = -1,
}

export function mediaMetadataRequestResponse_Metadata_ContentTypeFromJSON(
  object: any,
): MediaMetadataRequestResponse_Metadata_ContentType {
  switch (object) {
    case 0:
    case 'CONTENT_TYPE_UNKNOWN':
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_UNKNOWN;
    case 1:
    case 'CONTENT_TYPE_AUDIO':
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_AUDIO;
    case 2:
    case 'CONTENT_TYPE_IMAGE':
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_IMAGE;
    case 3:
    case 'CONTENT_TYPE_VIDEO':
      return MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_VIDEO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MediaMetadataRequestResponse_Metadata_ContentType.UNRECOGNIZED;
  }
}

export function mediaMetadataRequestResponse_Metadata_ContentTypeToJSON(
  object: MediaMetadataRequestResponse_Metadata_ContentType,
): string {
  switch (object) {
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_UNKNOWN:
      return 'CONTENT_TYPE_UNKNOWN';
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_AUDIO:
      return 'CONTENT_TYPE_AUDIO';
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_IMAGE:
      return 'CONTENT_TYPE_IMAGE';
    case MediaMetadataRequestResponse_Metadata_ContentType.CONTENT_TYPE_VIDEO:
      return 'CONTENT_TYPE_VIDEO';
    case MediaMetadataRequestResponse_Metadata_ContentType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface MediaMetadataRequestResponse_BitmapInfo {
  width: number;
  height: number;
}

export interface TriggerSource {
  libraryLocation?: TriggerSource_Library | undefined;
  playlistLocation?: TriggerSource_Playlist | undefined;
}

export interface TriggerSource_Library {
  path: string;
  presentationName: string;
}

export interface TriggerSource_Playlist {
  identifier: UUID | undefined;
  itemIdentifier: UUID | undefined;
}

export interface NetworkIdentifier {
  identifiers: NetworkIdentifier_IndexOrName[];
}

export interface NetworkIdentifier_IndexOrName {
  index?: number | undefined;
  name?: string | undefined;
}

export interface TriggerOptions {
  contentDestination: Action_ContentDestination;
  suppressAutoStartVideo: boolean;
  suppressMediaBackground: boolean;
  forceRetrigger: boolean;
  resetChordChart: boolean;
  fromPlaylistLibrary: boolean;
  fromTimeline: boolean;
  ignoreAnalytics: boolean;
  startPosition: number;
  triggerSource: TriggerSource | undefined;
  networkIdentifier: NetworkIdentifier | undefined;
}

export interface ControlTransport {
  play?: ControlTransport_PlayControlType | undefined;
  pause?: ControlTransport_PauseControlType | undefined;
  rewind?: ControlTransport_RewindControlType | undefined;
  fastforward?: ControlTransport_FastForwardControlType | undefined;
  skipBack?: ControlTransport_SkipBackControlType | undefined;
  skipForward?: ControlTransport_SkipForwardControlType | undefined;
  stepBack?: ControlTransport_StepBackControlType | undefined;
  stepForward?: ControlTransport_StepForwardControlType | undefined;
  goToStart?: ControlTransport_GoToStartControlType | undefined;
  goToEnd?: ControlTransport_GoToEndControlType | undefined;
  jumpToTime?: ControlTransport_JumpToTimeControlType | undefined;
  jumpToPercent?: ControlTransport_JumpToPercentControlType | undefined;
  markIn?: ControlTransport_MarkInPointControlType | undefined;
  markOut?: ControlTransport_MarkOutPointControlType | undefined;
  setScaleMode?: ControlTransport_SetScaleModeControlType | undefined;
  setFlippedMode?: ControlTransport_SetFlippedModeControlType | undefined;
  setPlayRate?: ControlTransport_SetPlayRateControlType | undefined;
  setRotation?: ControlTransport_SetNativeRotationControlType | undefined;
  togglePlayback?: ControlTransport_TogglePlaybackControlType | undefined;
  setEffects?: ControlTransport_SetEffectsControlType | undefined;
  updateEffect?: ControlTransport_UpdateEffectControlType | undefined;
  beginScrub?: ControlTransport_BeginScrubControlType | undefined;
  endScrub?: ControlTransport_EndScrubControlType | undefined;
  scrubToTime?: ControlTransport_ScrubToTimeControlType | undefined;
  scrubToPercent?: ControlTransport_ScrubToPercentControlType | undefined;
  setAudioFade?: ControlTransport_SetAudioFadeType | undefined;
  setAudioProperties?: ControlTransport_SetAudioPropertiesType | undefined;
  setAlphaType?: ControlTransport_SetAlphaTypeControlType | undefined;
}

export interface ControlTransport_PlayControlType {}

export interface ControlTransport_PauseControlType {}

export interface ControlTransport_RewindControlType {}

export interface ControlTransport_FastForwardControlType {}

export interface ControlTransport_SkipBackControlType {
  offset: number;
}

export interface ControlTransport_SkipForwardControlType {
  offset: number;
}

export interface ControlTransport_StepBackControlType {}

export interface ControlTransport_StepForwardControlType {}

export interface ControlTransport_GoToStartControlType {
  offset: number;
}

export interface ControlTransport_GoToEndControlType {
  offset: number;
}

export interface ControlTransport_JumpToTimeControlType {
  time: number;
}

export interface ControlTransport_JumpToPercentControlType {
  percent: number;
}

export interface ControlTransport_MarkInPointControlType {
  time: number;
}

export interface ControlTransport_MarkOutPointControlType {
  time: number;
}

export interface ControlTransport_SetScaleModeControlType {
  mode: Media_ScaleBehavior;
  alignment: Media_ScaleAlignment;
}

export interface ControlTransport_SetFlippedModeControlType {
  horizontal: boolean;
  vertical: boolean;
}

export interface ControlTransport_SetPlayRateControlType {
  playRate: number;
}

export interface ControlTransport_SetNativeRotationControlType {
  rotation: Media_DrawingProperties_NativeRotationType;
}

export interface ControlTransport_SetAlphaTypeControlType {
  alphaType: AlphaType;
}

export interface ControlTransport_TogglePlaybackControlType {}

export interface ControlTransport_SetEffectsControlType {
  effects: Effect[];
}

export interface ControlTransport_UpdateEffectControlType {
  effect: Effect | undefined;
}

export interface ControlTransport_BeginScrubControlType {
  time: number;
}

export interface ControlTransport_EndScrubControlType {
  time: number;
}

export interface ControlTransport_ScrubToTimeControlType {
  time: number;
}

export interface ControlTransport_ScrubToPercentControlType {
  percent: number;
}

export interface ControlTransport_SetAudioFadeType {
  fadeInDuration: number;
  fadeOutDuration: number;
  shouldFadeIn: boolean;
  shouldFadeOut: boolean;
}

export interface ControlTransport_SetAudioPropertiesType {
  audioProperties: Media_AudioProperties | undefined;
  solo: boolean[];
}

export interface AudioInputSettings {
  inputs: AudioInput[];
  transitionTime: number;
}

export interface VideoInputSettings {
  inputs: VideoInput[];
}

export interface RecordRequest {
  stream: Recording_Stream | undefined;
  workingDirectory: URL | undefined;
  resi: RecordRequest_Resi | undefined;
}

export interface RecordRequest_Resi {
  gop: number;
  segmentSize: number;
  destinationGroupId: string;
  bufSize: number;
  minRate: number;
  maxRate: number;
  eventName: string;
  socialDescription: string;
}

export interface TextSegmentRequest {
  segments: TextSegmentRequest_Segment[];
  startPosition: number;
}

export interface TextSegmentRequest_Segment {
  index: number;
  size: number;
}

export interface ProClockSource {
  uuid: string;
  name: string;
  connected: boolean;
  active: boolean;
  type: ProClockSource_Type;
}

export enum ProClockSource_Type {
  TYPE_UNKOWN = 0,
  TYPE_INPUT = 1,
  TYPE_OUTPUT = 2,
  UNRECOGNIZED = -1,
}

export function proClockSource_TypeFromJSON(object: any): ProClockSource_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKOWN':
      return ProClockSource_Type.TYPE_UNKOWN;
    case 1:
    case 'TYPE_INPUT':
      return ProClockSource_Type.TYPE_INPUT;
    case 2:
    case 'TYPE_OUTPUT':
      return ProClockSource_Type.TYPE_OUTPUT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ProClockSource_Type.UNRECOGNIZED;
  }
}

export function proClockSource_TypeToJSON(object: ProClockSource_Type): string {
  switch (object) {
    case ProClockSource_Type.TYPE_UNKOWN:
      return 'TYPE_UNKOWN';
    case ProClockSource_Type.TYPE_INPUT:
      return 'TYPE_INPUT';
    case ProClockSource_Type.TYPE_OUTPUT:
      return 'TYPE_OUTPUT';
    case ProClockSource_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
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
    case 'FORMAT_24_FPS':
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_24_FPS;
    case 1:
    case 'FORMAT_25_FPS':
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_25_FPS;
    case 2:
    case 'FORMAT_29_97_FPS':
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_29_97_FPS;
    case 3:
    case 'FORMAT_30_FPS':
      return TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_30_FPS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TimedPlayback_Timing_SMPTETimecode_Format.UNRECOGNIZED;
  }
}

export function timedPlayback_Timing_SMPTETimecode_FormatToJSON(
  object: TimedPlayback_Timing_SMPTETimecode_Format,
): string {
  switch (object) {
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_24_FPS:
      return 'FORMAT_24_FPS';
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_25_FPS:
      return 'FORMAT_25_FPS';
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_29_97_FPS:
      return 'FORMAT_29_97_FPS';
    case TimedPlayback_Timing_SMPTETimecode_Format.FORMAT_30_FPS:
      return 'FORMAT_30_FPS';
    case TimedPlayback_Timing_SMPTETimecode_Format.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
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

export interface TimedPlayback_Update_Play {}

export interface TimedPlayback_Update_Record {
  isRecording: boolean;
}

export interface TimedPlayback_Update_Pause {}

export interface TimedPlayback_Update_Reset {}

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

export interface NetworkTriggerDataItem {
  triggerOptions: TriggerOptions | undefined;
  action?: Action | undefined;
  cue?: Cue | undefined;
}

export interface SlideElementTextRenderInfo {
  layers: SlideElementTextRenderInfo_Layer[];
}

export enum SlideElementTextRenderInfo_LayerType {
  LAYER_TYPE_COMPOSITE = 0,
  LAYER_TYPE_MASK = 1,
  LAYER_TYPE_OVER = 2,
  LAYER_TYPE_UNDER = 3,
  UNRECOGNIZED = -1,
}

export function slideElementTextRenderInfo_LayerTypeFromJSON(
  object: any,
): SlideElementTextRenderInfo_LayerType {
  switch (object) {
    case 0:
    case 'LAYER_TYPE_COMPOSITE':
      return SlideElementTextRenderInfo_LayerType.LAYER_TYPE_COMPOSITE;
    case 1:
    case 'LAYER_TYPE_MASK':
      return SlideElementTextRenderInfo_LayerType.LAYER_TYPE_MASK;
    case 2:
    case 'LAYER_TYPE_OVER':
      return SlideElementTextRenderInfo_LayerType.LAYER_TYPE_OVER;
    case 3:
    case 'LAYER_TYPE_UNDER':
      return SlideElementTextRenderInfo_LayerType.LAYER_TYPE_UNDER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SlideElementTextRenderInfo_LayerType.UNRECOGNIZED;
  }
}

export function slideElementTextRenderInfo_LayerTypeToJSON(
  object: SlideElementTextRenderInfo_LayerType,
): string {
  switch (object) {
    case SlideElementTextRenderInfo_LayerType.LAYER_TYPE_COMPOSITE:
      return 'LAYER_TYPE_COMPOSITE';
    case SlideElementTextRenderInfo_LayerType.LAYER_TYPE_MASK:
      return 'LAYER_TYPE_MASK';
    case SlideElementTextRenderInfo_LayerType.LAYER_TYPE_OVER:
      return 'LAYER_TYPE_OVER';
    case SlideElementTextRenderInfo_LayerType.LAYER_TYPE_UNDER:
      return 'LAYER_TYPE_UNDER';
    case SlideElementTextRenderInfo_LayerType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface SlideElementTextRenderInfo_Layer {
  layerType: SlideElementTextRenderInfo_LayerType;
  textBuildIndex: number;
  cutOutFill?: Graphics_Text_CutOutFill | undefined;
  mediaFill?: Graphics_Text_MediaFill | undefined;
  backgroundEffect?: Graphics_BackgroundEffect | undefined;
}

export interface ValidateEncoderRequest {
  encoder: Recording_Stream_Encoder | undefined;
}

export interface ValidateEncoderResponse {
  isValid: boolean;
}

export interface TriggerCue {
  triggerHandle: number;
  triggerOptions: TriggerOptions | undefined;
  cue: Cue | undefined;
  presentation: TriggerCue_PresentationCue | undefined;
  playlist: Playlist | undefined;
  clientData: number;
}

export interface TriggerCue_PresentationCue {
  presentation: Presentation | undefined;
  arrangementId: UUID | undefined;
  cueIndex: number;
}

export interface CaptureActionRequest {
  startResi?: CaptureActionRequest_StartResi | undefined;
  stopCapture?: CaptureActionRequest_StopCapture | undefined;
  error?: CaptureActionRequest_Error | undefined;
}

export interface CaptureActionRequest_StartResi {}

export interface CaptureActionRequest_StopCapture {}

export interface CaptureActionRequest_Error {
  errorCode: number;
  captureAction: Action_CaptureType | undefined;
}

export interface CaptureActionResponse {
  startResi?: CaptureActionResponse_StartResi | undefined;
  stopCapture?: CaptureActionResponse_StopCapture | undefined;
  cancelCaptureAction?: CaptureActionResponse_CancelCaptureAction | undefined;
}

export interface CaptureActionResponse_CancelCaptureAction {}

export interface CaptureActionResponse_StartResi {
  eventName: string;
  eventDescription: string;
}

export interface CaptureActionResponse_StopCapture {
  stopCapture: boolean;
}

export interface SendData {
  messageId: number;
  workspace?: ProPresenterWorkspace | undefined;
  stageDocument?: Stage_Document | undefined;
  timersDocument?: TimersDocument | undefined;
  validateEncoderRequest?: ValidateEncoderRequest | undefined;
  triggerCue?: TriggerCue | undefined;
  digitalAudioSetup?: DigitalAudio_Setup | undefined;
  macrosDocument?: MacrosDocument | undefined;
  messageDocument?: MessageDocument | undefined;
  propDocument?: PropDocument | undefined;
  ccliDocument?: CCLIDocument | undefined;
  audienceLooks?: AudienceLookCollection | undefined;
  liveAudienceLook?: ProAudienceLook | undefined;
  masks?: MaskCollection | undefined;
  recordingSettingsDocument?: Recording_SettingsDocument | undefined;
  captureActionResponse?: CaptureActionResponse | undefined;
  copyrightLayout?: CopyrightLayout | undefined;
}

export interface TimerRuntimeState {
  timerUuid: UUID | undefined;
  timerName: string;
  actionType: Action_TimerType | undefined;
  isRunning: boolean;
  hasOverrun: boolean;
  state: TimerRuntimeState_ResourceState;
}

export enum TimerRuntimeState_ResourceState {
  PREROLLING = 0,
  ACTIVATED = 1,
  UPDATED = 2,
  DEACTIVATED = 3,
  RELEASED = 4,
  UNRECOGNIZED = -1,
}

export function timerRuntimeState_ResourceStateFromJSON(
  object: any,
): TimerRuntimeState_ResourceState {
  switch (object) {
    case 0:
    case 'PREROLLING':
      return TimerRuntimeState_ResourceState.PREROLLING;
    case 1:
    case 'ACTIVATED':
      return TimerRuntimeState_ResourceState.ACTIVATED;
    case 2:
    case 'UPDATED':
      return TimerRuntimeState_ResourceState.UPDATED;
    case 3:
    case 'DEACTIVATED':
      return TimerRuntimeState_ResourceState.DEACTIVATED;
    case 4:
    case 'RELEASED':
      return TimerRuntimeState_ResourceState.RELEASED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TimerRuntimeState_ResourceState.UNRECOGNIZED;
  }
}

export function timerRuntimeState_ResourceStateToJSON(
  object: TimerRuntimeState_ResourceState,
): string {
  switch (object) {
    case TimerRuntimeState_ResourceState.PREROLLING:
      return 'PREROLLING';
    case TimerRuntimeState_ResourceState.ACTIVATED:
      return 'ACTIVATED';
    case TimerRuntimeState_ResourceState.UPDATED:
      return 'UPDATED';
    case TimerRuntimeState_ResourceState.DEACTIVATED:
      return 'DEACTIVATED';
    case TimerRuntimeState_ResourceState.RELEASED:
      return 'RELEASED';
    case TimerRuntimeState_ResourceState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TimerStateUpdate {
  timer: Timer | undefined;
  state: TimerRuntimeState | undefined;
}

export interface SendDataResponse {
  messageId: number;
  validateEncoderResponse?: ValidateEncoderResponse | undefined;
  timerState?: TimerStateUpdate | undefined;
  captureActionRequest?: CaptureActionRequest | undefined;
}

export interface TriggerTransferRenderState {
  slide: Slide | undefined;
  stageMessage: string;
  presentationMedia: TriggerTransferRenderState_MediaState | undefined;
  announcementMedia: TriggerTransferRenderState_MediaState | undefined;
  audioMedia: TriggerTransferRenderState_MediaState | undefined;
  liveVideoMedia: Media | undefined;
  presentation: TriggerTransferRenderState_SlideState | undefined;
  announcement: TriggerTransferRenderState_SlideState | undefined;
  timers: TriggerTransferRenderState_TimerState[];
  capture: TriggerTransferRenderState_CaptureState | undefined;
  timecode: TriggerTransferRenderState_TimecodeState | undefined;
  systemTime: number;
}

export interface TriggerTransferRenderState_TimerState {
  timer: Timer | undefined;
  isRunning: boolean;
  hasOverrun: boolean;
  value: number;
}

export interface TriggerTransferRenderState_MediaState {
  currentMedia: Media | undefined;
  isPlaying: boolean;
  isLooping: boolean;
  currentTime: number;
  timeRemaining: number;
  playlistUuid: UUID | undefined;
  playlistName: string;
  markers: Action_MediaType_PlaybackMarker[];
}

export interface TriggerTransferRenderState_CaptureState {
  status: TriggerTransferRenderState_CaptureState_Status;
  time: number;
}

export enum TriggerTransferRenderState_CaptureState_Status {
  Stopped = 0,
  Active = 1,
  Caution = 2,
  Error = 3,
  UNRECOGNIZED = -1,
}

export function triggerTransferRenderState_CaptureState_StatusFromJSON(
  object: any,
): TriggerTransferRenderState_CaptureState_Status {
  switch (object) {
    case 0:
    case 'Stopped':
      return TriggerTransferRenderState_CaptureState_Status.Stopped;
    case 1:
    case 'Active':
      return TriggerTransferRenderState_CaptureState_Status.Active;
    case 2:
    case 'Caution':
      return TriggerTransferRenderState_CaptureState_Status.Caution;
    case 3:
    case 'Error':
      return TriggerTransferRenderState_CaptureState_Status.Error;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerTransferRenderState_CaptureState_Status.UNRECOGNIZED;
  }
}

export function triggerTransferRenderState_CaptureState_StatusToJSON(
  object: TriggerTransferRenderState_CaptureState_Status,
): string {
  switch (object) {
    case TriggerTransferRenderState_CaptureState_Status.Stopped:
      return 'Stopped';
    case TriggerTransferRenderState_CaptureState_Status.Active:
      return 'Active';
    case TriggerTransferRenderState_CaptureState_Status.Caution:
      return 'Caution';
    case TriggerTransferRenderState_CaptureState_Status.Error:
      return 'Error';
    case TriggerTransferRenderState_CaptureState_Status.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TriggerTransferRenderState_AutoAdvanceState {
  active: boolean;
  remainingTime: number;
}

export interface TriggerTransferRenderState_TimelineState {
  active: boolean;
  currentTime: number;
  lastSlideIndex: number;
}

export interface TriggerTransferRenderState_SlideState {
  presentation: Presentation | undefined;
  playlistUuid: UUID | undefined;
  playlistName: string;
  currentCue: UUID | undefined;
  nextCue: UUID | undefined;
  autoAdvance: TriggerTransferRenderState_AutoAdvanceState | undefined;
  timelineState: TriggerTransferRenderState_TimelineState | undefined;
  currentCueIndex: number;
}

export interface TriggerTransferRenderState_TimecodeState {
  status: TriggerTransferRenderState_TimecodeState_Status;
  time: number;
}

export enum TriggerTransferRenderState_TimecodeState_Status {
  Stopped = 0,
  Playing = 1,
  Error = 2,
  UNRECOGNIZED = -1,
}

export function triggerTransferRenderState_TimecodeState_StatusFromJSON(
  object: any,
): TriggerTransferRenderState_TimecodeState_Status {
  switch (object) {
    case 0:
    case 'Stopped':
      return TriggerTransferRenderState_TimecodeState_Status.Stopped;
    case 1:
    case 'Playing':
      return TriggerTransferRenderState_TimecodeState_Status.Playing;
    case 2:
    case 'Error':
      return TriggerTransferRenderState_TimecodeState_Status.Error;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TriggerTransferRenderState_TimecodeState_Status.UNRECOGNIZED;
  }
}

export function triggerTransferRenderState_TimecodeState_StatusToJSON(
  object: TriggerTransferRenderState_TimecodeState_Status,
): string {
  switch (object) {
    case TriggerTransferRenderState_TimecodeState_Status.Stopped:
      return 'Stopped';
    case TriggerTransferRenderState_TimecodeState_Status.Playing:
      return 'Playing';
    case TriggerTransferRenderState_TimecodeState_Status.Error:
      return 'Error';
    case TriggerTransferRenderState_TimecodeState_Status.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseMediaMetadataRequestInfo(): MediaMetadataRequestInfo {
  return {
    filePath: '',
    time: 0,
    width: 0,
    height: 0,
    effects: [],
    cropInsets: undefined,
    nativeRotation: 0,
    flippedHorizontally: false,
    flippedVertically: false,
    alphaType: 0,
  };
}

export const MediaMetadataRequestInfo = {
  encode(
    message: MediaMetadataRequestInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filePath !== '') {
      writer.uint32(10).string(message.filePath);
    }
    if (message.time !== 0) {
      writer.uint32(21).float(message.time);
    }
    if (message.width !== 0) {
      writer.uint32(24).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint32(message.height);
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.cropInsets !== undefined) {
      Graphics_EdgeInsets.encode(
        message.cropInsets,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.nativeRotation !== 0) {
      writer.uint32(56).int32(message.nativeRotation);
    }
    if (message.flippedHorizontally === true) {
      writer.uint32(64).bool(message.flippedHorizontally);
    }
    if (message.flippedVertically === true) {
      writer.uint32(72).bool(message.flippedVertically);
    }
    if (message.alphaType !== 0) {
      writer.uint32(80).int32(message.alphaType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MediaMetadataRequestInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.time = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cropInsets = Graphics_EdgeInsets.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.nativeRotation = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.flippedHorizontally = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.flippedVertically = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.alphaType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestInfo {
    return {
      filePath: isSet(object.filePath)
        ? globalThis.String(object.filePath)
        : '',
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      effects: globalThis.Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
      cropInsets: isSet(object.cropInsets)
        ? Graphics_EdgeInsets.fromJSON(object.cropInsets)
        : undefined,
      nativeRotation: isSet(object.nativeRotation)
        ? media_DrawingProperties_NativeRotationTypeFromJSON(
            object.nativeRotation,
          )
        : 0,
      flippedHorizontally: isSet(object.flippedHorizontally)
        ? globalThis.Boolean(object.flippedHorizontally)
        : false,
      flippedVertically: isSet(object.flippedVertically)
        ? globalThis.Boolean(object.flippedVertically)
        : false,
      alphaType: isSet(object.alphaType)
        ? alphaTypeFromJSON(object.alphaType)
        : 0,
    };
  },

  toJSON(message: MediaMetadataRequestInfo): unknown {
    const obj: any = {};
    if (message.filePath !== '') {
      obj.filePath = message.filePath;
    }
    if (message.time !== 0) {
      obj.time = message.time;
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.effects?.length) {
      obj.effects = message.effects.map((e) => Effect.toJSON(e));
    }
    if (message.cropInsets !== undefined) {
      obj.cropInsets = Graphics_EdgeInsets.toJSON(message.cropInsets);
    }
    if (message.nativeRotation !== 0) {
      obj.nativeRotation = media_DrawingProperties_NativeRotationTypeToJSON(
        message.nativeRotation,
      );
    }
    if (message.flippedHorizontally === true) {
      obj.flippedHorizontally = message.flippedHorizontally;
    }
    if (message.flippedVertically === true) {
      obj.flippedVertically = message.flippedVertically;
    }
    if (message.alphaType !== 0) {
      obj.alphaType = alphaTypeToJSON(message.alphaType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MediaMetadataRequestInfo>, I>>(
    base?: I,
  ): MediaMetadataRequestInfo {
    return MediaMetadataRequestInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestInfo>, I>>(
    object: I,
  ): MediaMetadataRequestInfo {
    const message = createBaseMediaMetadataRequestInfo();
    message.filePath = object.filePath ?? '';
    message.time = object.time ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.cropInsets =
      object.cropInsets !== undefined && object.cropInsets !== null
        ? Graphics_EdgeInsets.fromPartial(object.cropInsets)
        : undefined;
    message.nativeRotation = object.nativeRotation ?? 0;
    message.flippedHorizontally = object.flippedHorizontally ?? false;
    message.flippedVertically = object.flippedVertically ?? false;
    message.alphaType = object.alphaType ?? 0;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse(): MediaMetadataRequestResponse {
  return { metadata: undefined, generatedBitmapInfo: undefined };
}

export const MediaMetadataRequestResponse = {
  encode(
    message: MediaMetadataRequestResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadata !== undefined) {
      MediaMetadataRequestResponse_Metadata.encode(
        message.metadata,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.generatedBitmapInfo !== undefined) {
      MediaMetadataRequestResponse_BitmapInfo.encode(
        message.generatedBitmapInfo,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MediaMetadataRequestResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = MediaMetadataRequestResponse_Metadata.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.generatedBitmapInfo =
            MediaMetadataRequestResponse_BitmapInfo.decode(
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

  fromJSON(object: any): MediaMetadataRequestResponse {
    return {
      metadata: isSet(object.metadata)
        ? MediaMetadataRequestResponse_Metadata.fromJSON(object.metadata)
        : undefined,
      generatedBitmapInfo: isSet(object.generatedBitmapInfo)
        ? MediaMetadataRequestResponse_BitmapInfo.fromJSON(
            object.generatedBitmapInfo,
          )
        : undefined,
    };
  },

  toJSON(message: MediaMetadataRequestResponse): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = MediaMetadataRequestResponse_Metadata.toJSON(
        message.metadata,
      );
    }
    if (message.generatedBitmapInfo !== undefined) {
      obj.generatedBitmapInfo = MediaMetadataRequestResponse_BitmapInfo.toJSON(
        message.generatedBitmapInfo,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MediaMetadataRequestResponse>, I>>(
    base?: I,
  ): MediaMetadataRequestResponse {
    return MediaMetadataRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MediaMetadataRequestResponse>, I>>(
    object: I,
  ): MediaMetadataRequestResponse {
    const message = createBaseMediaMetadataRequestResponse();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? MediaMetadataRequestResponse_Metadata.fromPartial(object.metadata)
        : undefined;
    message.generatedBitmapInfo =
      object.generatedBitmapInfo !== undefined &&
      object.generatedBitmapInfo !== null
        ? MediaMetadataRequestResponse_BitmapInfo.fromPartial(
            object.generatedBitmapInfo,
          )
        : undefined;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse_Metadata(): MediaMetadataRequestResponse_Metadata {
  return {
    width: 0,
    height: 0,
    fps: 0,
    duration: 0,
    numberAudioChannels: 0,
    codec: '',
    artist: '',
    title: '',
    rotation: 0,
    contentType: 0,
    hasAlphaChannel: false,
  };
}

export const MediaMetadataRequestResponse_Metadata = {
  encode(
    message: MediaMetadataRequestResponse_Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint32(message.height);
    }
    if (message.fps !== 0) {
      writer.uint32(29).float(message.fps);
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    if (message.numberAudioChannels !== 0) {
      writer.uint32(40).uint32(message.numberAudioChannels);
    }
    if (message.codec !== '') {
      writer.uint32(50).string(message.codec);
    }
    if (message.artist !== '') {
      writer.uint32(58).string(message.artist);
    }
    if (message.title !== '') {
      writer.uint32(66).string(message.title);
    }
    if (message.rotation !== 0) {
      writer.uint32(77).float(message.rotation);
    }
    if (message.contentType !== 0) {
      writer.uint32(80).int32(message.contentType);
    }
    if (message.hasAlphaChannel === true) {
      writer.uint32(88).bool(message.hasAlphaChannel);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MediaMetadataRequestResponse_Metadata {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse_Metadata();
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
        case 3:
          if (tag !== 29) {
            break;
          }

          message.fps = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.duration = reader.float();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.numberAudioChannels = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.codec = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.artist = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.title = reader.string();
          continue;
        case 9:
          if (tag !== 77) {
            break;
          }

          message.rotation = reader.float();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.hasAlphaChannel = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaMetadataRequestResponse_Metadata {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      fps: isSet(object.fps) ? globalThis.Number(object.fps) : 0,
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      numberAudioChannels: isSet(object.numberAudioChannels)
        ? globalThis.Number(object.numberAudioChannels)
        : 0,
      codec: isSet(object.codec) ? globalThis.String(object.codec) : '',
      artist: isSet(object.artist) ? globalThis.String(object.artist) : '',
      title: isSet(object.title) ? globalThis.String(object.title) : '',
      rotation: isSet(object.rotation) ? globalThis.Number(object.rotation) : 0,
      contentType: isSet(object.contentType)
        ? mediaMetadataRequestResponse_Metadata_ContentTypeFromJSON(
            object.contentType,
          )
        : 0,
      hasAlphaChannel: isSet(object.hasAlphaChannel)
        ? globalThis.Boolean(object.hasAlphaChannel)
        : false,
    };
  },

  toJSON(message: MediaMetadataRequestResponse_Metadata): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.fps !== 0) {
      obj.fps = message.fps;
    }
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    if (message.numberAudioChannels !== 0) {
      obj.numberAudioChannels = Math.round(message.numberAudioChannels);
    }
    if (message.codec !== '') {
      obj.codec = message.codec;
    }
    if (message.artist !== '') {
      obj.artist = message.artist;
    }
    if (message.title !== '') {
      obj.title = message.title;
    }
    if (message.rotation !== 0) {
      obj.rotation = message.rotation;
    }
    if (message.contentType !== 0) {
      obj.contentType = mediaMetadataRequestResponse_Metadata_ContentTypeToJSON(
        message.contentType,
      );
    }
    if (message.hasAlphaChannel === true) {
      obj.hasAlphaChannel = message.hasAlphaChannel;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<MediaMetadataRequestResponse_Metadata>, I>,
  >(base?: I): MediaMetadataRequestResponse_Metadata {
    return MediaMetadataRequestResponse_Metadata.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<MediaMetadataRequestResponse_Metadata>, I>,
  >(object: I): MediaMetadataRequestResponse_Metadata {
    const message = createBaseMediaMetadataRequestResponse_Metadata();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.fps = object.fps ?? 0;
    message.duration = object.duration ?? 0;
    message.numberAudioChannels = object.numberAudioChannels ?? 0;
    message.codec = object.codec ?? '';
    message.artist = object.artist ?? '';
    message.title = object.title ?? '';
    message.rotation = object.rotation ?? 0;
    message.contentType = object.contentType ?? 0;
    message.hasAlphaChannel = object.hasAlphaChannel ?? false;
    return message;
  },
};

function createBaseMediaMetadataRequestResponse_BitmapInfo(): MediaMetadataRequestResponse_BitmapInfo {
  return { width: 0, height: 0 };
}

export const MediaMetadataRequestResponse_BitmapInfo = {
  encode(
    message: MediaMetadataRequestResponse_BitmapInfo,
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
  ): MediaMetadataRequestResponse_BitmapInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaMetadataRequestResponse_BitmapInfo();
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

  fromJSON(object: any): MediaMetadataRequestResponse_BitmapInfo {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: MediaMetadataRequestResponse_BitmapInfo): unknown {
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
    I extends Exact<DeepPartial<MediaMetadataRequestResponse_BitmapInfo>, I>,
  >(base?: I): MediaMetadataRequestResponse_BitmapInfo {
    return MediaMetadataRequestResponse_BitmapInfo.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<MediaMetadataRequestResponse_BitmapInfo>, I>,
  >(object: I): MediaMetadataRequestResponse_BitmapInfo {
    const message = createBaseMediaMetadataRequestResponse_BitmapInfo();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseTriggerSource(): TriggerSource {
  return { libraryLocation: undefined, playlistLocation: undefined };
}

export const TriggerSource = {
  encode(
    message: TriggerSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraryLocation !== undefined) {
      TriggerSource_Library.encode(
        message.libraryLocation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlistLocation !== undefined) {
      TriggerSource_Playlist.encode(
        message.playlistLocation,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerSource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.libraryLocation = TriggerSource_Library.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlistLocation = TriggerSource_Playlist.decode(
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

  fromJSON(object: any): TriggerSource {
    return {
      libraryLocation: isSet(object.libraryLocation)
        ? TriggerSource_Library.fromJSON(object.libraryLocation)
        : undefined,
      playlistLocation: isSet(object.playlistLocation)
        ? TriggerSource_Playlist.fromJSON(object.playlistLocation)
        : undefined,
    };
  },

  toJSON(message: TriggerSource): unknown {
    const obj: any = {};
    if (message.libraryLocation !== undefined) {
      obj.libraryLocation = TriggerSource_Library.toJSON(
        message.libraryLocation,
      );
    }
    if (message.playlistLocation !== undefined) {
      obj.playlistLocation = TriggerSource_Playlist.toJSON(
        message.playlistLocation,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerSource>, I>>(
    base?: I,
  ): TriggerSource {
    return TriggerSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource>, I>>(
    object: I,
  ): TriggerSource {
    const message = createBaseTriggerSource();
    message.libraryLocation =
      object.libraryLocation !== undefined && object.libraryLocation !== null
        ? TriggerSource_Library.fromPartial(object.libraryLocation)
        : undefined;
    message.playlistLocation =
      object.playlistLocation !== undefined && object.playlistLocation !== null
        ? TriggerSource_Playlist.fromPartial(object.playlistLocation)
        : undefined;
    return message;
  },
};

function createBaseTriggerSource_Library(): TriggerSource_Library {
  return { path: '', presentationName: '' };
}

export const TriggerSource_Library = {
  encode(
    message: TriggerSource_Library,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.path !== '') {
      writer.uint32(10).string(message.path);
    }
    if (message.presentationName !== '') {
      writer.uint32(18).string(message.presentationName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerSource_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      path: isSet(object.path) ? globalThis.String(object.path) : '',
      presentationName: isSet(object.presentationName)
        ? globalThis.String(object.presentationName)
        : '',
    };
  },

  toJSON(message: TriggerSource_Library): unknown {
    const obj: any = {};
    if (message.path !== '') {
      obj.path = message.path;
    }
    if (message.presentationName !== '') {
      obj.presentationName = message.presentationName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerSource_Library>, I>>(
    base?: I,
  ): TriggerSource_Library {
    return TriggerSource_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource_Library>, I>>(
    object: I,
  ): TriggerSource_Library {
    const message = createBaseTriggerSource_Library();
    message.path = object.path ?? '';
    message.presentationName = object.presentationName ?? '';
    return message;
  },
};

function createBaseTriggerSource_Playlist(): TriggerSource_Playlist {
  return { identifier: undefined, itemIdentifier: undefined };
}

export const TriggerSource_Playlist = {
  encode(
    message: TriggerSource_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      UUID.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    if (message.itemIdentifier !== undefined) {
      UUID.encode(message.itemIdentifier, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerSource_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      identifier: isSet(object.identifier)
        ? UUID.fromJSON(object.identifier)
        : undefined,
      itemIdentifier: isSet(object.itemIdentifier)
        ? UUID.fromJSON(object.itemIdentifier)
        : undefined,
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

  create<I extends Exact<DeepPartial<TriggerSource_Playlist>, I>>(
    base?: I,
  ): TriggerSource_Playlist {
    return TriggerSource_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerSource_Playlist>, I>>(
    object: I,
  ): TriggerSource_Playlist {
    const message = createBaseTriggerSource_Playlist();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? UUID.fromPartial(object.identifier)
        : undefined;
    message.itemIdentifier =
      object.itemIdentifier !== undefined && object.itemIdentifier !== null
        ? UUID.fromPartial(object.itemIdentifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkIdentifier(): NetworkIdentifier {
  return { identifiers: [] };
}

export const NetworkIdentifier = {
  encode(
    message: NetworkIdentifier,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.identifiers) {
      NetworkIdentifier_IndexOrName.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkIdentifier {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifiers.push(
            NetworkIdentifier_IndexOrName.decode(reader, reader.uint32()),
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

  fromJSON(object: any): NetworkIdentifier {
    return {
      identifiers: globalThis.Array.isArray(object?.identifiers)
        ? object.identifiers.map((e: any) =>
            NetworkIdentifier_IndexOrName.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: NetworkIdentifier): unknown {
    const obj: any = {};
    if (message.identifiers?.length) {
      obj.identifiers = message.identifiers.map((e) =>
        NetworkIdentifier_IndexOrName.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkIdentifier>, I>>(
    base?: I,
  ): NetworkIdentifier {
    return NetworkIdentifier.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkIdentifier>, I>>(
    object: I,
  ): NetworkIdentifier {
    const message = createBaseNetworkIdentifier();
    message.identifiers =
      object.identifiers?.map((e) =>
        NetworkIdentifier_IndexOrName.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseNetworkIdentifier_IndexOrName(): NetworkIdentifier_IndexOrName {
  return { index: undefined, name: undefined };
}

export const NetworkIdentifier_IndexOrName = {
  encode(
    message: NetworkIdentifier_IndexOrName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).int32(message.index);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkIdentifier_IndexOrName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkIdentifier_IndexOrName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.int32();
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

  fromJSON(object: any): NetworkIdentifier_IndexOrName {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
    };
  },

  toJSON(message: NetworkIdentifier_IndexOrName): unknown {
    const obj: any = {};
    if (message.index !== undefined) {
      obj.index = Math.round(message.index);
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkIdentifier_IndexOrName>, I>>(
    base?: I,
  ): NetworkIdentifier_IndexOrName {
    return NetworkIdentifier_IndexOrName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkIdentifier_IndexOrName>, I>>(
    object: I,
  ): NetworkIdentifier_IndexOrName {
    const message = createBaseNetworkIdentifier_IndexOrName();
    message.index = object.index ?? undefined;
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseTriggerOptions(): TriggerOptions {
  return {
    contentDestination: 0,
    suppressAutoStartVideo: false,
    suppressMediaBackground: false,
    forceRetrigger: false,
    resetChordChart: false,
    fromPlaylistLibrary: false,
    fromTimeline: false,
    ignoreAnalytics: false,
    startPosition: 0,
    triggerSource: undefined,
    networkIdentifier: undefined,
  };
}

export const TriggerOptions = {
  encode(
    message: TriggerOptions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contentDestination !== 0) {
      writer.uint32(8).int32(message.contentDestination);
    }
    if (message.suppressAutoStartVideo === true) {
      writer.uint32(16).bool(message.suppressAutoStartVideo);
    }
    if (message.suppressMediaBackground === true) {
      writer.uint32(24).bool(message.suppressMediaBackground);
    }
    if (message.forceRetrigger === true) {
      writer.uint32(32).bool(message.forceRetrigger);
    }
    if (message.resetChordChart === true) {
      writer.uint32(40).bool(message.resetChordChart);
    }
    if (message.fromPlaylistLibrary === true) {
      writer.uint32(48).bool(message.fromPlaylistLibrary);
    }
    if (message.fromTimeline === true) {
      writer.uint32(56).bool(message.fromTimeline);
    }
    if (message.ignoreAnalytics === true) {
      writer.uint32(64).bool(message.ignoreAnalytics);
    }
    if (message.startPosition !== 0) {
      writer.uint32(73).double(message.startPosition);
    }
    if (message.triggerSource !== undefined) {
      TriggerSource.encode(
        message.triggerSource,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.networkIdentifier !== undefined) {
      NetworkIdentifier.encode(
        message.networkIdentifier,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerOptions {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.suppressAutoStartVideo = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.suppressMediaBackground = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.forceRetrigger = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.resetChordChart = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.fromPlaylistLibrary = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.fromTimeline = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.ignoreAnalytics = reader.bool();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.startPosition = reader.double();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.triggerSource = TriggerSource.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.networkIdentifier = NetworkIdentifier.decode(
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

  fromJSON(object: any): TriggerOptions {
    return {
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      suppressAutoStartVideo: isSet(object.suppressAutoStartVideo)
        ? globalThis.Boolean(object.suppressAutoStartVideo)
        : false,
      suppressMediaBackground: isSet(object.suppressMediaBackground)
        ? globalThis.Boolean(object.suppressMediaBackground)
        : false,
      forceRetrigger: isSet(object.forceRetrigger)
        ? globalThis.Boolean(object.forceRetrigger)
        : false,
      resetChordChart: isSet(object.resetChordChart)
        ? globalThis.Boolean(object.resetChordChart)
        : false,
      fromPlaylistLibrary: isSet(object.fromPlaylistLibrary)
        ? globalThis.Boolean(object.fromPlaylistLibrary)
        : false,
      fromTimeline: isSet(object.fromTimeline)
        ? globalThis.Boolean(object.fromTimeline)
        : false,
      ignoreAnalytics: isSet(object.ignoreAnalytics)
        ? globalThis.Boolean(object.ignoreAnalytics)
        : false,
      startPosition: isSet(object.startPosition)
        ? globalThis.Number(object.startPosition)
        : 0,
      triggerSource: isSet(object.triggerSource)
        ? TriggerSource.fromJSON(object.triggerSource)
        : undefined,
      networkIdentifier: isSet(object.networkIdentifier)
        ? NetworkIdentifier.fromJSON(object.networkIdentifier)
        : undefined,
    };
  },

  toJSON(message: TriggerOptions): unknown {
    const obj: any = {};
    if (message.contentDestination !== 0) {
      obj.contentDestination = action_ContentDestinationToJSON(
        message.contentDestination,
      );
    }
    if (message.suppressAutoStartVideo === true) {
      obj.suppressAutoStartVideo = message.suppressAutoStartVideo;
    }
    if (message.suppressMediaBackground === true) {
      obj.suppressMediaBackground = message.suppressMediaBackground;
    }
    if (message.forceRetrigger === true) {
      obj.forceRetrigger = message.forceRetrigger;
    }
    if (message.resetChordChart === true) {
      obj.resetChordChart = message.resetChordChart;
    }
    if (message.fromPlaylistLibrary === true) {
      obj.fromPlaylistLibrary = message.fromPlaylistLibrary;
    }
    if (message.fromTimeline === true) {
      obj.fromTimeline = message.fromTimeline;
    }
    if (message.ignoreAnalytics === true) {
      obj.ignoreAnalytics = message.ignoreAnalytics;
    }
    if (message.startPosition !== 0) {
      obj.startPosition = message.startPosition;
    }
    if (message.triggerSource !== undefined) {
      obj.triggerSource = TriggerSource.toJSON(message.triggerSource);
    }
    if (message.networkIdentifier !== undefined) {
      obj.networkIdentifier = NetworkIdentifier.toJSON(
        message.networkIdentifier,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerOptions>, I>>(
    base?: I,
  ): TriggerOptions {
    return TriggerOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerOptions>, I>>(
    object: I,
  ): TriggerOptions {
    const message = createBaseTriggerOptions();
    message.contentDestination = object.contentDestination ?? 0;
    message.suppressAutoStartVideo = object.suppressAutoStartVideo ?? false;
    message.suppressMediaBackground = object.suppressMediaBackground ?? false;
    message.forceRetrigger = object.forceRetrigger ?? false;
    message.resetChordChart = object.resetChordChart ?? false;
    message.fromPlaylistLibrary = object.fromPlaylistLibrary ?? false;
    message.fromTimeline = object.fromTimeline ?? false;
    message.ignoreAnalytics = object.ignoreAnalytics ?? false;
    message.startPosition = object.startPosition ?? 0;
    message.triggerSource =
      object.triggerSource !== undefined && object.triggerSource !== null
        ? TriggerSource.fromPartial(object.triggerSource)
        : undefined;
    message.networkIdentifier =
      object.networkIdentifier !== undefined &&
      object.networkIdentifier !== null
        ? NetworkIdentifier.fromPartial(object.networkIdentifier)
        : undefined;
    return message;
  },
};

function createBaseControlTransport(): ControlTransport {
  return {
    play: undefined,
    pause: undefined,
    rewind: undefined,
    fastforward: undefined,
    skipBack: undefined,
    skipForward: undefined,
    stepBack: undefined,
    stepForward: undefined,
    goToStart: undefined,
    goToEnd: undefined,
    jumpToTime: undefined,
    jumpToPercent: undefined,
    markIn: undefined,
    markOut: undefined,
    setScaleMode: undefined,
    setFlippedMode: undefined,
    setPlayRate: undefined,
    setRotation: undefined,
    togglePlayback: undefined,
    setEffects: undefined,
    updateEffect: undefined,
    beginScrub: undefined,
    endScrub: undefined,
    scrubToTime: undefined,
    scrubToPercent: undefined,
    setAudioFade: undefined,
    setAudioProperties: undefined,
    setAlphaType: undefined,
  };
}

export const ControlTransport = {
  encode(
    message: ControlTransport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.play !== undefined) {
      ControlTransport_PlayControlType.encode(
        message.play,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.pause !== undefined) {
      ControlTransport_PauseControlType.encode(
        message.pause,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.rewind !== undefined) {
      ControlTransport_RewindControlType.encode(
        message.rewind,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.fastforward !== undefined) {
      ControlTransport_FastForwardControlType.encode(
        message.fastforward,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.skipBack !== undefined) {
      ControlTransport_SkipBackControlType.encode(
        message.skipBack,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.skipForward !== undefined) {
      ControlTransport_SkipForwardControlType.encode(
        message.skipForward,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.stepBack !== undefined) {
      ControlTransport_StepBackControlType.encode(
        message.stepBack,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.stepForward !== undefined) {
      ControlTransport_StepForwardControlType.encode(
        message.stepForward,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.goToStart !== undefined) {
      ControlTransport_GoToStartControlType.encode(
        message.goToStart,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.goToEnd !== undefined) {
      ControlTransport_GoToEndControlType.encode(
        message.goToEnd,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.jumpToTime !== undefined) {
      ControlTransport_JumpToTimeControlType.encode(
        message.jumpToTime,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.jumpToPercent !== undefined) {
      ControlTransport_JumpToPercentControlType.encode(
        message.jumpToPercent,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.markIn !== undefined) {
      ControlTransport_MarkInPointControlType.encode(
        message.markIn,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.markOut !== undefined) {
      ControlTransport_MarkOutPointControlType.encode(
        message.markOut,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.setScaleMode !== undefined) {
      ControlTransport_SetScaleModeControlType.encode(
        message.setScaleMode,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.setFlippedMode !== undefined) {
      ControlTransport_SetFlippedModeControlType.encode(
        message.setFlippedMode,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.setPlayRate !== undefined) {
      ControlTransport_SetPlayRateControlType.encode(
        message.setPlayRate,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.setRotation !== undefined) {
      ControlTransport_SetNativeRotationControlType.encode(
        message.setRotation,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.togglePlayback !== undefined) {
      ControlTransport_TogglePlaybackControlType.encode(
        message.togglePlayback,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.setEffects !== undefined) {
      ControlTransport_SetEffectsControlType.encode(
        message.setEffects,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.updateEffect !== undefined) {
      ControlTransport_UpdateEffectControlType.encode(
        message.updateEffect,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.beginScrub !== undefined) {
      ControlTransport_BeginScrubControlType.encode(
        message.beginScrub,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.endScrub !== undefined) {
      ControlTransport_EndScrubControlType.encode(
        message.endScrub,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.scrubToTime !== undefined) {
      ControlTransport_ScrubToTimeControlType.encode(
        message.scrubToTime,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.scrubToPercent !== undefined) {
      ControlTransport_ScrubToPercentControlType.encode(
        message.scrubToPercent,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.setAudioFade !== undefined) {
      ControlTransport_SetAudioFadeType.encode(
        message.setAudioFade,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.setAudioProperties !== undefined) {
      ControlTransport_SetAudioPropertiesType.encode(
        message.setAudioProperties,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.setAlphaType !== undefined) {
      ControlTransport_SetAlphaTypeControlType.encode(
        message.setAlphaType,
        writer.uint32(226).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlTransport {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.play = ControlTransport_PlayControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pause = ControlTransport_PauseControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewind = ControlTransport_RewindControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fastforward = ControlTransport_FastForwardControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.skipBack = ControlTransport_SkipBackControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.skipForward = ControlTransport_SkipForwardControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stepBack = ControlTransport_StepBackControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.stepForward = ControlTransport_StepForwardControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.goToStart = ControlTransport_GoToStartControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.goToEnd = ControlTransport_GoToEndControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.jumpToTime = ControlTransport_JumpToTimeControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.jumpToPercent =
            ControlTransport_JumpToPercentControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.markIn = ControlTransport_MarkInPointControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.markOut = ControlTransport_MarkOutPointControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.setScaleMode =
            ControlTransport_SetScaleModeControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.setFlippedMode =
            ControlTransport_SetFlippedModeControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.setPlayRate = ControlTransport_SetPlayRateControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.setRotation =
            ControlTransport_SetNativeRotationControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.togglePlayback =
            ControlTransport_TogglePlaybackControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.setEffects = ControlTransport_SetEffectsControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.updateEffect =
            ControlTransport_UpdateEffectControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.beginScrub = ControlTransport_BeginScrubControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.endScrub = ControlTransport_EndScrubControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.scrubToTime = ControlTransport_ScrubToTimeControlType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.scrubToPercent =
            ControlTransport_ScrubToPercentControlType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.setAudioFade = ControlTransport_SetAudioFadeType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.setAudioProperties =
            ControlTransport_SetAudioPropertiesType.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.setAlphaType =
            ControlTransport_SetAlphaTypeControlType.decode(
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

  fromJSON(object: any): ControlTransport {
    return {
      play: isSet(object.play)
        ? ControlTransport_PlayControlType.fromJSON(object.play)
        : undefined,
      pause: isSet(object.pause)
        ? ControlTransport_PauseControlType.fromJSON(object.pause)
        : undefined,
      rewind: isSet(object.rewind)
        ? ControlTransport_RewindControlType.fromJSON(object.rewind)
        : undefined,
      fastforward: isSet(object.fastforward)
        ? ControlTransport_FastForwardControlType.fromJSON(object.fastforward)
        : undefined,
      skipBack: isSet(object.skipBack)
        ? ControlTransport_SkipBackControlType.fromJSON(object.skipBack)
        : undefined,
      skipForward: isSet(object.skipForward)
        ? ControlTransport_SkipForwardControlType.fromJSON(object.skipForward)
        : undefined,
      stepBack: isSet(object.stepBack)
        ? ControlTransport_StepBackControlType.fromJSON(object.stepBack)
        : undefined,
      stepForward: isSet(object.stepForward)
        ? ControlTransport_StepForwardControlType.fromJSON(object.stepForward)
        : undefined,
      goToStart: isSet(object.goToStart)
        ? ControlTransport_GoToStartControlType.fromJSON(object.goToStart)
        : undefined,
      goToEnd: isSet(object.goToEnd)
        ? ControlTransport_GoToEndControlType.fromJSON(object.goToEnd)
        : undefined,
      jumpToTime: isSet(object.jumpToTime)
        ? ControlTransport_JumpToTimeControlType.fromJSON(object.jumpToTime)
        : undefined,
      jumpToPercent: isSet(object.jumpToPercent)
        ? ControlTransport_JumpToPercentControlType.fromJSON(
            object.jumpToPercent,
          )
        : undefined,
      markIn: isSet(object.markIn)
        ? ControlTransport_MarkInPointControlType.fromJSON(object.markIn)
        : undefined,
      markOut: isSet(object.markOut)
        ? ControlTransport_MarkOutPointControlType.fromJSON(object.markOut)
        : undefined,
      setScaleMode: isSet(object.setScaleMode)
        ? ControlTransport_SetScaleModeControlType.fromJSON(object.setScaleMode)
        : undefined,
      setFlippedMode: isSet(object.setFlippedMode)
        ? ControlTransport_SetFlippedModeControlType.fromJSON(
            object.setFlippedMode,
          )
        : undefined,
      setPlayRate: isSet(object.setPlayRate)
        ? ControlTransport_SetPlayRateControlType.fromJSON(object.setPlayRate)
        : undefined,
      setRotation: isSet(object.setRotation)
        ? ControlTransport_SetNativeRotationControlType.fromJSON(
            object.setRotation,
          )
        : undefined,
      togglePlayback: isSet(object.togglePlayback)
        ? ControlTransport_TogglePlaybackControlType.fromJSON(
            object.togglePlayback,
          )
        : undefined,
      setEffects: isSet(object.setEffects)
        ? ControlTransport_SetEffectsControlType.fromJSON(object.setEffects)
        : undefined,
      updateEffect: isSet(object.updateEffect)
        ? ControlTransport_UpdateEffectControlType.fromJSON(object.updateEffect)
        : undefined,
      beginScrub: isSet(object.beginScrub)
        ? ControlTransport_BeginScrubControlType.fromJSON(object.beginScrub)
        : undefined,
      endScrub: isSet(object.endScrub)
        ? ControlTransport_EndScrubControlType.fromJSON(object.endScrub)
        : undefined,
      scrubToTime: isSet(object.scrubToTime)
        ? ControlTransport_ScrubToTimeControlType.fromJSON(object.scrubToTime)
        : undefined,
      scrubToPercent: isSet(object.scrubToPercent)
        ? ControlTransport_ScrubToPercentControlType.fromJSON(
            object.scrubToPercent,
          )
        : undefined,
      setAudioFade: isSet(object.setAudioFade)
        ? ControlTransport_SetAudioFadeType.fromJSON(object.setAudioFade)
        : undefined,
      setAudioProperties: isSet(object.setAudioProperties)
        ? ControlTransport_SetAudioPropertiesType.fromJSON(
            object.setAudioProperties,
          )
        : undefined,
      setAlphaType: isSet(object.setAlphaType)
        ? ControlTransport_SetAlphaTypeControlType.fromJSON(object.setAlphaType)
        : undefined,
    };
  },

  toJSON(message: ControlTransport): unknown {
    const obj: any = {};
    if (message.play !== undefined) {
      obj.play = ControlTransport_PlayControlType.toJSON(message.play);
    }
    if (message.pause !== undefined) {
      obj.pause = ControlTransport_PauseControlType.toJSON(message.pause);
    }
    if (message.rewind !== undefined) {
      obj.rewind = ControlTransport_RewindControlType.toJSON(message.rewind);
    }
    if (message.fastforward !== undefined) {
      obj.fastforward = ControlTransport_FastForwardControlType.toJSON(
        message.fastforward,
      );
    }
    if (message.skipBack !== undefined) {
      obj.skipBack = ControlTransport_SkipBackControlType.toJSON(
        message.skipBack,
      );
    }
    if (message.skipForward !== undefined) {
      obj.skipForward = ControlTransport_SkipForwardControlType.toJSON(
        message.skipForward,
      );
    }
    if (message.stepBack !== undefined) {
      obj.stepBack = ControlTransport_StepBackControlType.toJSON(
        message.stepBack,
      );
    }
    if (message.stepForward !== undefined) {
      obj.stepForward = ControlTransport_StepForwardControlType.toJSON(
        message.stepForward,
      );
    }
    if (message.goToStart !== undefined) {
      obj.goToStart = ControlTransport_GoToStartControlType.toJSON(
        message.goToStart,
      );
    }
    if (message.goToEnd !== undefined) {
      obj.goToEnd = ControlTransport_GoToEndControlType.toJSON(message.goToEnd);
    }
    if (message.jumpToTime !== undefined) {
      obj.jumpToTime = ControlTransport_JumpToTimeControlType.toJSON(
        message.jumpToTime,
      );
    }
    if (message.jumpToPercent !== undefined) {
      obj.jumpToPercent = ControlTransport_JumpToPercentControlType.toJSON(
        message.jumpToPercent,
      );
    }
    if (message.markIn !== undefined) {
      obj.markIn = ControlTransport_MarkInPointControlType.toJSON(
        message.markIn,
      );
    }
    if (message.markOut !== undefined) {
      obj.markOut = ControlTransport_MarkOutPointControlType.toJSON(
        message.markOut,
      );
    }
    if (message.setScaleMode !== undefined) {
      obj.setScaleMode = ControlTransport_SetScaleModeControlType.toJSON(
        message.setScaleMode,
      );
    }
    if (message.setFlippedMode !== undefined) {
      obj.setFlippedMode = ControlTransport_SetFlippedModeControlType.toJSON(
        message.setFlippedMode,
      );
    }
    if (message.setPlayRate !== undefined) {
      obj.setPlayRate = ControlTransport_SetPlayRateControlType.toJSON(
        message.setPlayRate,
      );
    }
    if (message.setRotation !== undefined) {
      obj.setRotation = ControlTransport_SetNativeRotationControlType.toJSON(
        message.setRotation,
      );
    }
    if (message.togglePlayback !== undefined) {
      obj.togglePlayback = ControlTransport_TogglePlaybackControlType.toJSON(
        message.togglePlayback,
      );
    }
    if (message.setEffects !== undefined) {
      obj.setEffects = ControlTransport_SetEffectsControlType.toJSON(
        message.setEffects,
      );
    }
    if (message.updateEffect !== undefined) {
      obj.updateEffect = ControlTransport_UpdateEffectControlType.toJSON(
        message.updateEffect,
      );
    }
    if (message.beginScrub !== undefined) {
      obj.beginScrub = ControlTransport_BeginScrubControlType.toJSON(
        message.beginScrub,
      );
    }
    if (message.endScrub !== undefined) {
      obj.endScrub = ControlTransport_EndScrubControlType.toJSON(
        message.endScrub,
      );
    }
    if (message.scrubToTime !== undefined) {
      obj.scrubToTime = ControlTransport_ScrubToTimeControlType.toJSON(
        message.scrubToTime,
      );
    }
    if (message.scrubToPercent !== undefined) {
      obj.scrubToPercent = ControlTransport_ScrubToPercentControlType.toJSON(
        message.scrubToPercent,
      );
    }
    if (message.setAudioFade !== undefined) {
      obj.setAudioFade = ControlTransport_SetAudioFadeType.toJSON(
        message.setAudioFade,
      );
    }
    if (message.setAudioProperties !== undefined) {
      obj.setAudioProperties = ControlTransport_SetAudioPropertiesType.toJSON(
        message.setAudioProperties,
      );
    }
    if (message.setAlphaType !== undefined) {
      obj.setAlphaType = ControlTransport_SetAlphaTypeControlType.toJSON(
        message.setAlphaType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport>, I>>(
    base?: I,
  ): ControlTransport {
    return ControlTransport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControlTransport>, I>>(
    object: I,
  ): ControlTransport {
    const message = createBaseControlTransport();
    message.play =
      object.play !== undefined && object.play !== null
        ? ControlTransport_PlayControlType.fromPartial(object.play)
        : undefined;
    message.pause =
      object.pause !== undefined && object.pause !== null
        ? ControlTransport_PauseControlType.fromPartial(object.pause)
        : undefined;
    message.rewind =
      object.rewind !== undefined && object.rewind !== null
        ? ControlTransport_RewindControlType.fromPartial(object.rewind)
        : undefined;
    message.fastforward =
      object.fastforward !== undefined && object.fastforward !== null
        ? ControlTransport_FastForwardControlType.fromPartial(
            object.fastforward,
          )
        : undefined;
    message.skipBack =
      object.skipBack !== undefined && object.skipBack !== null
        ? ControlTransport_SkipBackControlType.fromPartial(object.skipBack)
        : undefined;
    message.skipForward =
      object.skipForward !== undefined && object.skipForward !== null
        ? ControlTransport_SkipForwardControlType.fromPartial(
            object.skipForward,
          )
        : undefined;
    message.stepBack =
      object.stepBack !== undefined && object.stepBack !== null
        ? ControlTransport_StepBackControlType.fromPartial(object.stepBack)
        : undefined;
    message.stepForward =
      object.stepForward !== undefined && object.stepForward !== null
        ? ControlTransport_StepForwardControlType.fromPartial(
            object.stepForward,
          )
        : undefined;
    message.goToStart =
      object.goToStart !== undefined && object.goToStart !== null
        ? ControlTransport_GoToStartControlType.fromPartial(object.goToStart)
        : undefined;
    message.goToEnd =
      object.goToEnd !== undefined && object.goToEnd !== null
        ? ControlTransport_GoToEndControlType.fromPartial(object.goToEnd)
        : undefined;
    message.jumpToTime =
      object.jumpToTime !== undefined && object.jumpToTime !== null
        ? ControlTransport_JumpToTimeControlType.fromPartial(object.jumpToTime)
        : undefined;
    message.jumpToPercent =
      object.jumpToPercent !== undefined && object.jumpToPercent !== null
        ? ControlTransport_JumpToPercentControlType.fromPartial(
            object.jumpToPercent,
          )
        : undefined;
    message.markIn =
      object.markIn !== undefined && object.markIn !== null
        ? ControlTransport_MarkInPointControlType.fromPartial(object.markIn)
        : undefined;
    message.markOut =
      object.markOut !== undefined && object.markOut !== null
        ? ControlTransport_MarkOutPointControlType.fromPartial(object.markOut)
        : undefined;
    message.setScaleMode =
      object.setScaleMode !== undefined && object.setScaleMode !== null
        ? ControlTransport_SetScaleModeControlType.fromPartial(
            object.setScaleMode,
          )
        : undefined;
    message.setFlippedMode =
      object.setFlippedMode !== undefined && object.setFlippedMode !== null
        ? ControlTransport_SetFlippedModeControlType.fromPartial(
            object.setFlippedMode,
          )
        : undefined;
    message.setPlayRate =
      object.setPlayRate !== undefined && object.setPlayRate !== null
        ? ControlTransport_SetPlayRateControlType.fromPartial(
            object.setPlayRate,
          )
        : undefined;
    message.setRotation =
      object.setRotation !== undefined && object.setRotation !== null
        ? ControlTransport_SetNativeRotationControlType.fromPartial(
            object.setRotation,
          )
        : undefined;
    message.togglePlayback =
      object.togglePlayback !== undefined && object.togglePlayback !== null
        ? ControlTransport_TogglePlaybackControlType.fromPartial(
            object.togglePlayback,
          )
        : undefined;
    message.setEffects =
      object.setEffects !== undefined && object.setEffects !== null
        ? ControlTransport_SetEffectsControlType.fromPartial(object.setEffects)
        : undefined;
    message.updateEffect =
      object.updateEffect !== undefined && object.updateEffect !== null
        ? ControlTransport_UpdateEffectControlType.fromPartial(
            object.updateEffect,
          )
        : undefined;
    message.beginScrub =
      object.beginScrub !== undefined && object.beginScrub !== null
        ? ControlTransport_BeginScrubControlType.fromPartial(object.beginScrub)
        : undefined;
    message.endScrub =
      object.endScrub !== undefined && object.endScrub !== null
        ? ControlTransport_EndScrubControlType.fromPartial(object.endScrub)
        : undefined;
    message.scrubToTime =
      object.scrubToTime !== undefined && object.scrubToTime !== null
        ? ControlTransport_ScrubToTimeControlType.fromPartial(
            object.scrubToTime,
          )
        : undefined;
    message.scrubToPercent =
      object.scrubToPercent !== undefined && object.scrubToPercent !== null
        ? ControlTransport_ScrubToPercentControlType.fromPartial(
            object.scrubToPercent,
          )
        : undefined;
    message.setAudioFade =
      object.setAudioFade !== undefined && object.setAudioFade !== null
        ? ControlTransport_SetAudioFadeType.fromPartial(object.setAudioFade)
        : undefined;
    message.setAudioProperties =
      object.setAudioProperties !== undefined &&
      object.setAudioProperties !== null
        ? ControlTransport_SetAudioPropertiesType.fromPartial(
            object.setAudioProperties,
          )
        : undefined;
    message.setAlphaType =
      object.setAlphaType !== undefined && object.setAlphaType !== null
        ? ControlTransport_SetAlphaTypeControlType.fromPartial(
            object.setAlphaType,
          )
        : undefined;
    return message;
  },
};

function createBaseControlTransport_PlayControlType(): ControlTransport_PlayControlType {
  return {};
}

export const ControlTransport_PlayControlType = {
  encode(
    _: ControlTransport_PlayControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_PlayControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_PlayControlType();
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

  fromJSON(_: any): ControlTransport_PlayControlType {
    return {};
  },

  toJSON(_: ControlTransport_PlayControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_PlayControlType>, I>>(
    base?: I,
  ): ControlTransport_PlayControlType {
    return ControlTransport_PlayControlType.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_PlayControlType>, I>,
  >(_: I): ControlTransport_PlayControlType {
    const message = createBaseControlTransport_PlayControlType();
    return message;
  },
};

function createBaseControlTransport_PauseControlType(): ControlTransport_PauseControlType {
  return {};
}

export const ControlTransport_PauseControlType = {
  encode(
    _: ControlTransport_PauseControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_PauseControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_PauseControlType();
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

  fromJSON(_: any): ControlTransport_PauseControlType {
    return {};
  },

  toJSON(_: ControlTransport_PauseControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_PauseControlType>, I>>(
    base?: I,
  ): ControlTransport_PauseControlType {
    return ControlTransport_PauseControlType.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_PauseControlType>, I>,
  >(_: I): ControlTransport_PauseControlType {
    const message = createBaseControlTransport_PauseControlType();
    return message;
  },
};

function createBaseControlTransport_RewindControlType(): ControlTransport_RewindControlType {
  return {};
}

export const ControlTransport_RewindControlType = {
  encode(
    _: ControlTransport_RewindControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_RewindControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_RewindControlType();
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

  fromJSON(_: any): ControlTransport_RewindControlType {
    return {};
  },

  toJSON(_: ControlTransport_RewindControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_RewindControlType>, I>>(
    base?: I,
  ): ControlTransport_RewindControlType {
    return ControlTransport_RewindControlType.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_RewindControlType>, I>,
  >(_: I): ControlTransport_RewindControlType {
    const message = createBaseControlTransport_RewindControlType();
    return message;
  },
};

function createBaseControlTransport_FastForwardControlType(): ControlTransport_FastForwardControlType {
  return {};
}

export const ControlTransport_FastForwardControlType = {
  encode(
    _: ControlTransport_FastForwardControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_FastForwardControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_FastForwardControlType();
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

  fromJSON(_: any): ControlTransport_FastForwardControlType {
    return {};
  },

  toJSON(_: ControlTransport_FastForwardControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_FastForwardControlType>, I>,
  >(base?: I): ControlTransport_FastForwardControlType {
    return ControlTransport_FastForwardControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_FastForwardControlType>, I>,
  >(_: I): ControlTransport_FastForwardControlType {
    const message = createBaseControlTransport_FastForwardControlType();
    return message;
  },
};

function createBaseControlTransport_SkipBackControlType(): ControlTransport_SkipBackControlType {
  return { offset: 0 };
}

export const ControlTransport_SkipBackControlType = {
  encode(
    message: ControlTransport_SkipBackControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SkipBackControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SkipBackControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): ControlTransport_SkipBackControlType {
    return {
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ControlTransport_SkipBackControlType): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_SkipBackControlType>, I>>(
    base?: I,
  ): ControlTransport_SkipBackControlType {
    return ControlTransport_SkipBackControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SkipBackControlType>, I>,
  >(object: I): ControlTransport_SkipBackControlType {
    const message = createBaseControlTransport_SkipBackControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_SkipForwardControlType(): ControlTransport_SkipForwardControlType {
  return { offset: 0 };
}

export const ControlTransport_SkipForwardControlType = {
  encode(
    message: ControlTransport_SkipForwardControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SkipForwardControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SkipForwardControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): ControlTransport_SkipForwardControlType {
    return {
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ControlTransport_SkipForwardControlType): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SkipForwardControlType>, I>,
  >(base?: I): ControlTransport_SkipForwardControlType {
    return ControlTransport_SkipForwardControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SkipForwardControlType>, I>,
  >(object: I): ControlTransport_SkipForwardControlType {
    const message = createBaseControlTransport_SkipForwardControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_StepBackControlType(): ControlTransport_StepBackControlType {
  return {};
}

export const ControlTransport_StepBackControlType = {
  encode(
    _: ControlTransport_StepBackControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_StepBackControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_StepBackControlType();
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

  fromJSON(_: any): ControlTransport_StepBackControlType {
    return {};
  },

  toJSON(_: ControlTransport_StepBackControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_StepBackControlType>, I>>(
    base?: I,
  ): ControlTransport_StepBackControlType {
    return ControlTransport_StepBackControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_StepBackControlType>, I>,
  >(_: I): ControlTransport_StepBackControlType {
    const message = createBaseControlTransport_StepBackControlType();
    return message;
  },
};

function createBaseControlTransport_StepForwardControlType(): ControlTransport_StepForwardControlType {
  return {};
}

export const ControlTransport_StepForwardControlType = {
  encode(
    _: ControlTransport_StepForwardControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_StepForwardControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_StepForwardControlType();
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

  fromJSON(_: any): ControlTransport_StepForwardControlType {
    return {};
  },

  toJSON(_: ControlTransport_StepForwardControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_StepForwardControlType>, I>,
  >(base?: I): ControlTransport_StepForwardControlType {
    return ControlTransport_StepForwardControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_StepForwardControlType>, I>,
  >(_: I): ControlTransport_StepForwardControlType {
    const message = createBaseControlTransport_StepForwardControlType();
    return message;
  },
};

function createBaseControlTransport_GoToStartControlType(): ControlTransport_GoToStartControlType {
  return { offset: 0 };
}

export const ControlTransport_GoToStartControlType = {
  encode(
    message: ControlTransport_GoToStartControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_GoToStartControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_GoToStartControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): ControlTransport_GoToStartControlType {
    return {
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ControlTransport_GoToStartControlType): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_GoToStartControlType>, I>,
  >(base?: I): ControlTransport_GoToStartControlType {
    return ControlTransport_GoToStartControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_GoToStartControlType>, I>,
  >(object: I): ControlTransport_GoToStartControlType {
    const message = createBaseControlTransport_GoToStartControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_GoToEndControlType(): ControlTransport_GoToEndControlType {
  return { offset: 0 };
}

export const ControlTransport_GoToEndControlType = {
  encode(
    message: ControlTransport_GoToEndControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(9).double(message.offset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_GoToEndControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_GoToEndControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
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

  fromJSON(object: any): ControlTransport_GoToEndControlType {
    return {
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: ControlTransport_GoToEndControlType): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_GoToEndControlType>, I>>(
    base?: I,
  ): ControlTransport_GoToEndControlType {
    return ControlTransport_GoToEndControlType.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_GoToEndControlType>, I>,
  >(object: I): ControlTransport_GoToEndControlType {
    const message = createBaseControlTransport_GoToEndControlType();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseControlTransport_JumpToTimeControlType(): ControlTransport_JumpToTimeControlType {
  return { time: 0 };
}

export const ControlTransport_JumpToTimeControlType = {
  encode(
    message: ControlTransport_JumpToTimeControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_JumpToTimeControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_JumpToTimeControlType();
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

  fromJSON(object: any): ControlTransport_JumpToTimeControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_JumpToTimeControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_JumpToTimeControlType>, I>,
  >(base?: I): ControlTransport_JumpToTimeControlType {
    return ControlTransport_JumpToTimeControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_JumpToTimeControlType>, I>,
  >(object: I): ControlTransport_JumpToTimeControlType {
    const message = createBaseControlTransport_JumpToTimeControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_JumpToPercentControlType(): ControlTransport_JumpToPercentControlType {
  return { percent: 0 };
}

export const ControlTransport_JumpToPercentControlType = {
  encode(
    message: ControlTransport_JumpToPercentControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(9).double(message.percent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_JumpToPercentControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_JumpToPercentControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.percent = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_JumpToPercentControlType {
    return {
      percent: isSet(object.percent) ? globalThis.Number(object.percent) : 0,
    };
  },

  toJSON(message: ControlTransport_JumpToPercentControlType): unknown {
    const obj: any = {};
    if (message.percent !== 0) {
      obj.percent = message.percent;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_JumpToPercentControlType>, I>,
  >(base?: I): ControlTransport_JumpToPercentControlType {
    return ControlTransport_JumpToPercentControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_JumpToPercentControlType>, I>,
  >(object: I): ControlTransport_JumpToPercentControlType {
    const message = createBaseControlTransport_JumpToPercentControlType();
    message.percent = object.percent ?? 0;
    return message;
  },
};

function createBaseControlTransport_MarkInPointControlType(): ControlTransport_MarkInPointControlType {
  return { time: 0 };
}

export const ControlTransport_MarkInPointControlType = {
  encode(
    message: ControlTransport_MarkInPointControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_MarkInPointControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_MarkInPointControlType();
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

  fromJSON(object: any): ControlTransport_MarkInPointControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_MarkInPointControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_MarkInPointControlType>, I>,
  >(base?: I): ControlTransport_MarkInPointControlType {
    return ControlTransport_MarkInPointControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_MarkInPointControlType>, I>,
  >(object: I): ControlTransport_MarkInPointControlType {
    const message = createBaseControlTransport_MarkInPointControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_MarkOutPointControlType(): ControlTransport_MarkOutPointControlType {
  return { time: 0 };
}

export const ControlTransport_MarkOutPointControlType = {
  encode(
    message: ControlTransport_MarkOutPointControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_MarkOutPointControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_MarkOutPointControlType();
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

  fromJSON(object: any): ControlTransport_MarkOutPointControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_MarkOutPointControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_MarkOutPointControlType>, I>,
  >(base?: I): ControlTransport_MarkOutPointControlType {
    return ControlTransport_MarkOutPointControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_MarkOutPointControlType>, I>,
  >(object: I): ControlTransport_MarkOutPointControlType {
    const message = createBaseControlTransport_MarkOutPointControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetScaleModeControlType(): ControlTransport_SetScaleModeControlType {
  return { mode: 0, alignment: 0 };
}

export const ControlTransport_SetScaleModeControlType = {
  encode(
    message: ControlTransport_SetScaleModeControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.alignment !== 0) {
      writer.uint32(16).int32(message.alignment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetScaleModeControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetScaleModeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.alignment = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetScaleModeControlType {
    return {
      mode: isSet(object.mode) ? media_ScaleBehaviorFromJSON(object.mode) : 0,
      alignment: isSet(object.alignment)
        ? media_ScaleAlignmentFromJSON(object.alignment)
        : 0,
    };
  },

  toJSON(message: ControlTransport_SetScaleModeControlType): unknown {
    const obj: any = {};
    if (message.mode !== 0) {
      obj.mode = media_ScaleBehaviorToJSON(message.mode);
    }
    if (message.alignment !== 0) {
      obj.alignment = media_ScaleAlignmentToJSON(message.alignment);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetScaleModeControlType>, I>,
  >(base?: I): ControlTransport_SetScaleModeControlType {
    return ControlTransport_SetScaleModeControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetScaleModeControlType>, I>,
  >(object: I): ControlTransport_SetScaleModeControlType {
    const message = createBaseControlTransport_SetScaleModeControlType();
    message.mode = object.mode ?? 0;
    message.alignment = object.alignment ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetFlippedModeControlType(): ControlTransport_SetFlippedModeControlType {
  return { horizontal: false, vertical: false };
}

export const ControlTransport_SetFlippedModeControlType = {
  encode(
    message: ControlTransport_SetFlippedModeControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.horizontal === true) {
      writer.uint32(8).bool(message.horizontal);
    }
    if (message.vertical === true) {
      writer.uint32(16).bool(message.vertical);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetFlippedModeControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetFlippedModeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.horizontal = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.vertical = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetFlippedModeControlType {
    return {
      horizontal: isSet(object.horizontal)
        ? globalThis.Boolean(object.horizontal)
        : false,
      vertical: isSet(object.vertical)
        ? globalThis.Boolean(object.vertical)
        : false,
    };
  },

  toJSON(message: ControlTransport_SetFlippedModeControlType): unknown {
    const obj: any = {};
    if (message.horizontal === true) {
      obj.horizontal = message.horizontal;
    }
    if (message.vertical === true) {
      obj.vertical = message.vertical;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetFlippedModeControlType>, I>,
  >(base?: I): ControlTransport_SetFlippedModeControlType {
    return ControlTransport_SetFlippedModeControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetFlippedModeControlType>, I>,
  >(object: I): ControlTransport_SetFlippedModeControlType {
    const message = createBaseControlTransport_SetFlippedModeControlType();
    message.horizontal = object.horizontal ?? false;
    message.vertical = object.vertical ?? false;
    return message;
  },
};

function createBaseControlTransport_SetPlayRateControlType(): ControlTransport_SetPlayRateControlType {
  return { playRate: 0 };
}

export const ControlTransport_SetPlayRateControlType = {
  encode(
    message: ControlTransport_SetPlayRateControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(9).double(message.playRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetPlayRateControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetPlayRateControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.playRate = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetPlayRateControlType {
    return {
      playRate: isSet(object.playRate) ? globalThis.Number(object.playRate) : 0,
    };
  },

  toJSON(message: ControlTransport_SetPlayRateControlType): unknown {
    const obj: any = {};
    if (message.playRate !== 0) {
      obj.playRate = message.playRate;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetPlayRateControlType>, I>,
  >(base?: I): ControlTransport_SetPlayRateControlType {
    return ControlTransport_SetPlayRateControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetPlayRateControlType>, I>,
  >(object: I): ControlTransport_SetPlayRateControlType {
    const message = createBaseControlTransport_SetPlayRateControlType();
    message.playRate = object.playRate ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetNativeRotationControlType(): ControlTransport_SetNativeRotationControlType {
  return { rotation: 0 };
}

export const ControlTransport_SetNativeRotationControlType = {
  encode(
    message: ControlTransport_SetNativeRotationControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rotation !== 0) {
      writer.uint32(8).int32(message.rotation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetNativeRotationControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetNativeRotationControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rotation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetNativeRotationControlType {
    return {
      rotation: isSet(object.rotation)
        ? media_DrawingProperties_NativeRotationTypeFromJSON(object.rotation)
        : 0,
    };
  },

  toJSON(message: ControlTransport_SetNativeRotationControlType): unknown {
    const obj: any = {};
    if (message.rotation !== 0) {
      obj.rotation = media_DrawingProperties_NativeRotationTypeToJSON(
        message.rotation,
      );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ControlTransport_SetNativeRotationControlType>,
      I
    >,
  >(base?: I): ControlTransport_SetNativeRotationControlType {
    return ControlTransport_SetNativeRotationControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<ControlTransport_SetNativeRotationControlType>,
      I
    >,
  >(object: I): ControlTransport_SetNativeRotationControlType {
    const message = createBaseControlTransport_SetNativeRotationControlType();
    message.rotation = object.rotation ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetAlphaTypeControlType(): ControlTransport_SetAlphaTypeControlType {
  return { alphaType: 0 };
}

export const ControlTransport_SetAlphaTypeControlType = {
  encode(
    message: ControlTransport_SetAlphaTypeControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.alphaType !== 0) {
      writer.uint32(8).int32(message.alphaType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetAlphaTypeControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetAlphaTypeControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alphaType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetAlphaTypeControlType {
    return {
      alphaType: isSet(object.alphaType)
        ? alphaTypeFromJSON(object.alphaType)
        : 0,
    };
  },

  toJSON(message: ControlTransport_SetAlphaTypeControlType): unknown {
    const obj: any = {};
    if (message.alphaType !== 0) {
      obj.alphaType = alphaTypeToJSON(message.alphaType);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetAlphaTypeControlType>, I>,
  >(base?: I): ControlTransport_SetAlphaTypeControlType {
    return ControlTransport_SetAlphaTypeControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetAlphaTypeControlType>, I>,
  >(object: I): ControlTransport_SetAlphaTypeControlType {
    const message = createBaseControlTransport_SetAlphaTypeControlType();
    message.alphaType = object.alphaType ?? 0;
    return message;
  },
};

function createBaseControlTransport_TogglePlaybackControlType(): ControlTransport_TogglePlaybackControlType {
  return {};
}

export const ControlTransport_TogglePlaybackControlType = {
  encode(
    _: ControlTransport_TogglePlaybackControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_TogglePlaybackControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_TogglePlaybackControlType();
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

  fromJSON(_: any): ControlTransport_TogglePlaybackControlType {
    return {};
  },

  toJSON(_: ControlTransport_TogglePlaybackControlType): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_TogglePlaybackControlType>, I>,
  >(base?: I): ControlTransport_TogglePlaybackControlType {
    return ControlTransport_TogglePlaybackControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_TogglePlaybackControlType>, I>,
  >(_: I): ControlTransport_TogglePlaybackControlType {
    const message = createBaseControlTransport_TogglePlaybackControlType();
    return message;
  },
};

function createBaseControlTransport_SetEffectsControlType(): ControlTransport_SetEffectsControlType {
  return { effects: [] };
}

export const ControlTransport_SetEffectsControlType = {
  encode(
    message: ControlTransport_SetEffectsControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetEffectsControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetEffectsControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetEffectsControlType {
    return {
      effects: globalThis.Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ControlTransport_SetEffectsControlType): unknown {
    const obj: any = {};
    if (message.effects?.length) {
      obj.effects = message.effects.map((e) => Effect.toJSON(e));
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetEffectsControlType>, I>,
  >(base?: I): ControlTransport_SetEffectsControlType {
    return ControlTransport_SetEffectsControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetEffectsControlType>, I>,
  >(object: I): ControlTransport_SetEffectsControlType {
    const message = createBaseControlTransport_SetEffectsControlType();
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    return message;
  },
};

function createBaseControlTransport_UpdateEffectControlType(): ControlTransport_UpdateEffectControlType {
  return { effect: undefined };
}

export const ControlTransport_UpdateEffectControlType = {
  encode(
    message: ControlTransport_UpdateEffectControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.effect !== undefined) {
      Effect.encode(message.effect, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_UpdateEffectControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_UpdateEffectControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.effect = Effect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_UpdateEffectControlType {
    return {
      effect: isSet(object.effect) ? Effect.fromJSON(object.effect) : undefined,
    };
  },

  toJSON(message: ControlTransport_UpdateEffectControlType): unknown {
    const obj: any = {};
    if (message.effect !== undefined) {
      obj.effect = Effect.toJSON(message.effect);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_UpdateEffectControlType>, I>,
  >(base?: I): ControlTransport_UpdateEffectControlType {
    return ControlTransport_UpdateEffectControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_UpdateEffectControlType>, I>,
  >(object: I): ControlTransport_UpdateEffectControlType {
    const message = createBaseControlTransport_UpdateEffectControlType();
    message.effect =
      object.effect !== undefined && object.effect !== null
        ? Effect.fromPartial(object.effect)
        : undefined;
    return message;
  },
};

function createBaseControlTransport_BeginScrubControlType(): ControlTransport_BeginScrubControlType {
  return { time: 0 };
}

export const ControlTransport_BeginScrubControlType = {
  encode(
    message: ControlTransport_BeginScrubControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_BeginScrubControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_BeginScrubControlType();
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

  fromJSON(object: any): ControlTransport_BeginScrubControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_BeginScrubControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_BeginScrubControlType>, I>,
  >(base?: I): ControlTransport_BeginScrubControlType {
    return ControlTransport_BeginScrubControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_BeginScrubControlType>, I>,
  >(object: I): ControlTransport_BeginScrubControlType {
    const message = createBaseControlTransport_BeginScrubControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_EndScrubControlType(): ControlTransport_EndScrubControlType {
  return { time: 0 };
}

export const ControlTransport_EndScrubControlType = {
  encode(
    message: ControlTransport_EndScrubControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_EndScrubControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_EndScrubControlType();
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

  fromJSON(object: any): ControlTransport_EndScrubControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_EndScrubControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_EndScrubControlType>, I>>(
    base?: I,
  ): ControlTransport_EndScrubControlType {
    return ControlTransport_EndScrubControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_EndScrubControlType>, I>,
  >(object: I): ControlTransport_EndScrubControlType {
    const message = createBaseControlTransport_EndScrubControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_ScrubToTimeControlType(): ControlTransport_ScrubToTimeControlType {
  return { time: 0 };
}

export const ControlTransport_ScrubToTimeControlType = {
  encode(
    message: ControlTransport_ScrubToTimeControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_ScrubToTimeControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_ScrubToTimeControlType();
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

  fromJSON(object: any): ControlTransport_ScrubToTimeControlType {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: ControlTransport_ScrubToTimeControlType): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_ScrubToTimeControlType>, I>,
  >(base?: I): ControlTransport_ScrubToTimeControlType {
    return ControlTransport_ScrubToTimeControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_ScrubToTimeControlType>, I>,
  >(object: I): ControlTransport_ScrubToTimeControlType {
    const message = createBaseControlTransport_ScrubToTimeControlType();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseControlTransport_ScrubToPercentControlType(): ControlTransport_ScrubToPercentControlType {
  return { percent: 0 };
}

export const ControlTransport_ScrubToPercentControlType = {
  encode(
    message: ControlTransport_ScrubToPercentControlType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.percent !== 0) {
      writer.uint32(9).double(message.percent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_ScrubToPercentControlType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_ScrubToPercentControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.percent = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_ScrubToPercentControlType {
    return {
      percent: isSet(object.percent) ? globalThis.Number(object.percent) : 0,
    };
  },

  toJSON(message: ControlTransport_ScrubToPercentControlType): unknown {
    const obj: any = {};
    if (message.percent !== 0) {
      obj.percent = message.percent;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_ScrubToPercentControlType>, I>,
  >(base?: I): ControlTransport_ScrubToPercentControlType {
    return ControlTransport_ScrubToPercentControlType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_ScrubToPercentControlType>, I>,
  >(object: I): ControlTransport_ScrubToPercentControlType {
    const message = createBaseControlTransport_ScrubToPercentControlType();
    message.percent = object.percent ?? 0;
    return message;
  },
};

function createBaseControlTransport_SetAudioFadeType(): ControlTransport_SetAudioFadeType {
  return {
    fadeInDuration: 0,
    fadeOutDuration: 0,
    shouldFadeIn: false,
    shouldFadeOut: false,
  };
}

export const ControlTransport_SetAudioFadeType = {
  encode(
    message: ControlTransport_SetAudioFadeType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fadeInDuration !== 0) {
      writer.uint32(9).double(message.fadeInDuration);
    }
    if (message.fadeOutDuration !== 0) {
      writer.uint32(17).double(message.fadeOutDuration);
    }
    if (message.shouldFadeIn === true) {
      writer.uint32(24).bool(message.shouldFadeIn);
    }
    if (message.shouldFadeOut === true) {
      writer.uint32(32).bool(message.shouldFadeOut);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetAudioFadeType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetAudioFadeType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.fadeInDuration = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.fadeOutDuration = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.shouldFadeIn = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.shouldFadeOut = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetAudioFadeType {
    return {
      fadeInDuration: isSet(object.fadeInDuration)
        ? globalThis.Number(object.fadeInDuration)
        : 0,
      fadeOutDuration: isSet(object.fadeOutDuration)
        ? globalThis.Number(object.fadeOutDuration)
        : 0,
      shouldFadeIn: isSet(object.shouldFadeIn)
        ? globalThis.Boolean(object.shouldFadeIn)
        : false,
      shouldFadeOut: isSet(object.shouldFadeOut)
        ? globalThis.Boolean(object.shouldFadeOut)
        : false,
    };
  },

  toJSON(message: ControlTransport_SetAudioFadeType): unknown {
    const obj: any = {};
    if (message.fadeInDuration !== 0) {
      obj.fadeInDuration = message.fadeInDuration;
    }
    if (message.fadeOutDuration !== 0) {
      obj.fadeOutDuration = message.fadeOutDuration;
    }
    if (message.shouldFadeIn === true) {
      obj.shouldFadeIn = message.shouldFadeIn;
    }
    if (message.shouldFadeOut === true) {
      obj.shouldFadeOut = message.shouldFadeOut;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControlTransport_SetAudioFadeType>, I>>(
    base?: I,
  ): ControlTransport_SetAudioFadeType {
    return ControlTransport_SetAudioFadeType.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetAudioFadeType>, I>,
  >(object: I): ControlTransport_SetAudioFadeType {
    const message = createBaseControlTransport_SetAudioFadeType();
    message.fadeInDuration = object.fadeInDuration ?? 0;
    message.fadeOutDuration = object.fadeOutDuration ?? 0;
    message.shouldFadeIn = object.shouldFadeIn ?? false;
    message.shouldFadeOut = object.shouldFadeOut ?? false;
    return message;
  },
};

function createBaseControlTransport_SetAudioPropertiesType(): ControlTransport_SetAudioPropertiesType {
  return { audioProperties: undefined, solo: [] };
}

export const ControlTransport_SetAudioPropertiesType = {
  encode(
    message: ControlTransport_SetAudioPropertiesType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.audioProperties !== undefined) {
      Media_AudioProperties.encode(
        message.audioProperties,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.solo) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ControlTransport_SetAudioPropertiesType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlTransport_SetAudioPropertiesType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audioProperties = Media_AudioProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag === 16) {
            message.solo.push(reader.bool());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.solo.push(reader.bool());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ControlTransport_SetAudioPropertiesType {
    return {
      audioProperties: isSet(object.audioProperties)
        ? Media_AudioProperties.fromJSON(object.audioProperties)
        : undefined,
      solo: globalThis.Array.isArray(object?.solo)
        ? object.solo.map((e: any) => globalThis.Boolean(e))
        : [],
    };
  },

  toJSON(message: ControlTransport_SetAudioPropertiesType): unknown {
    const obj: any = {};
    if (message.audioProperties !== undefined) {
      obj.audioProperties = Media_AudioProperties.toJSON(
        message.audioProperties,
      );
    }
    if (message.solo?.length) {
      obj.solo = message.solo;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ControlTransport_SetAudioPropertiesType>, I>,
  >(base?: I): ControlTransport_SetAudioPropertiesType {
    return ControlTransport_SetAudioPropertiesType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ControlTransport_SetAudioPropertiesType>, I>,
  >(object: I): ControlTransport_SetAudioPropertiesType {
    const message = createBaseControlTransport_SetAudioPropertiesType();
    message.audioProperties =
      object.audioProperties !== undefined && object.audioProperties !== null
        ? Media_AudioProperties.fromPartial(object.audioProperties)
        : undefined;
    message.solo = object.solo?.map((e) => e) || [];
    return message;
  },
};

function createBaseAudioInputSettings(): AudioInputSettings {
  return { inputs: [], transitionTime: 0 };
}

export const AudioInputSettings = {
  encode(
    message: AudioInputSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inputs) {
      AudioInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.transitionTime !== 0) {
      writer.uint32(17).double(message.transitionTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioInputSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInputSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs.push(AudioInput.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.transitionTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioInputSettings {
    return {
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => AudioInput.fromJSON(e))
        : [],
      transitionTime: isSet(object.transitionTime)
        ? globalThis.Number(object.transitionTime)
        : 0,
    };
  },

  toJSON(message: AudioInputSettings): unknown {
    const obj: any = {};
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => AudioInput.toJSON(e));
    }
    if (message.transitionTime !== 0) {
      obj.transitionTime = message.transitionTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInputSettings>, I>>(
    base?: I,
  ): AudioInputSettings {
    return AudioInputSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AudioInputSettings>, I>>(
    object: I,
  ): AudioInputSettings {
    const message = createBaseAudioInputSettings();
    message.inputs = object.inputs?.map((e) => AudioInput.fromPartial(e)) || [];
    message.transitionTime = object.transitionTime ?? 0;
    return message;
  },
};

function createBaseVideoInputSettings(): VideoInputSettings {
  return { inputs: [] };
}

export const VideoInputSettings = {
  encode(
    message: VideoInputSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inputs) {
      VideoInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoInputSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoInputSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs.push(VideoInput.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoInputSettings {
    return {
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => VideoInput.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VideoInputSettings): unknown {
    const obj: any = {};
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => VideoInput.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VideoInputSettings>, I>>(
    base?: I,
  ): VideoInputSettings {
    return VideoInputSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VideoInputSettings>, I>>(
    object: I,
  ): VideoInputSettings {
    const message = createBaseVideoInputSettings();
    message.inputs = object.inputs?.map((e) => VideoInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecordRequest(): RecordRequest {
  return { stream: undefined, workingDirectory: undefined, resi: undefined };
}

export const RecordRequest = {
  encode(
    message: RecordRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.stream !== undefined) {
      Recording_Stream.encode(
        message.stream,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.workingDirectory !== undefined) {
      URL.encode(message.workingDirectory, writer.uint32(18).fork()).ldelim();
    }
    if (message.resi !== undefined) {
      RecordRequest_Resi.encode(
        message.resi,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stream = Recording_Stream.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workingDirectory = URL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resi = RecordRequest_Resi.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordRequest {
    return {
      stream: isSet(object.stream)
        ? Recording_Stream.fromJSON(object.stream)
        : undefined,
      workingDirectory: isSet(object.workingDirectory)
        ? URL.fromJSON(object.workingDirectory)
        : undefined,
      resi: isSet(object.resi)
        ? RecordRequest_Resi.fromJSON(object.resi)
        : undefined,
    };
  },

  toJSON(message: RecordRequest): unknown {
    const obj: any = {};
    if (message.stream !== undefined) {
      obj.stream = Recording_Stream.toJSON(message.stream);
    }
    if (message.workingDirectory !== undefined) {
      obj.workingDirectory = URL.toJSON(message.workingDirectory);
    }
    if (message.resi !== undefined) {
      obj.resi = RecordRequest_Resi.toJSON(message.resi);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordRequest>, I>>(
    base?: I,
  ): RecordRequest {
    return RecordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordRequest>, I>>(
    object: I,
  ): RecordRequest {
    const message = createBaseRecordRequest();
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? Recording_Stream.fromPartial(object.stream)
        : undefined;
    message.workingDirectory =
      object.workingDirectory !== undefined && object.workingDirectory !== null
        ? URL.fromPartial(object.workingDirectory)
        : undefined;
    message.resi =
      object.resi !== undefined && object.resi !== null
        ? RecordRequest_Resi.fromPartial(object.resi)
        : undefined;
    return message;
  },
};

function createBaseRecordRequest_Resi(): RecordRequest_Resi {
  return {
    gop: 0,
    segmentSize: 0,
    destinationGroupId: '',
    bufSize: 0,
    minRate: 0,
    maxRate: 0,
    eventName: '',
    socialDescription: '',
  };
}

export const RecordRequest_Resi = {
  encode(
    message: RecordRequest_Resi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gop !== 0) {
      writer.uint32(8).uint32(message.gop);
    }
    if (message.segmentSize !== 0) {
      writer.uint32(17).double(message.segmentSize);
    }
    if (message.destinationGroupId !== '') {
      writer.uint32(26).string(message.destinationGroupId);
    }
    if (message.bufSize !== 0) {
      writer.uint32(32).uint32(message.bufSize);
    }
    if (message.minRate !== 0) {
      writer.uint32(40).uint32(message.minRate);
    }
    if (message.maxRate !== 0) {
      writer.uint32(48).uint32(message.maxRate);
    }
    if (message.eventName !== '') {
      writer.uint32(58).string(message.eventName);
    }
    if (message.socialDescription !== '') {
      writer.uint32(66).string(message.socialDescription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordRequest_Resi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordRequest_Resi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gop = reader.uint32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.segmentSize = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationGroupId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bufSize = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.minRate = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxRate = reader.uint32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.socialDescription = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RecordRequest_Resi {
    return {
      gop: isSet(object.gop) ? globalThis.Number(object.gop) : 0,
      segmentSize: isSet(object.segmentSize)
        ? globalThis.Number(object.segmentSize)
        : 0,
      destinationGroupId: isSet(object.destinationGroupId)
        ? globalThis.String(object.destinationGroupId)
        : '',
      bufSize: isSet(object.bufSize) ? globalThis.Number(object.bufSize) : 0,
      minRate: isSet(object.minRate) ? globalThis.Number(object.minRate) : 0,
      maxRate: isSet(object.maxRate) ? globalThis.Number(object.maxRate) : 0,
      eventName: isSet(object.eventName)
        ? globalThis.String(object.eventName)
        : '',
      socialDescription: isSet(object.socialDescription)
        ? globalThis.String(object.socialDescription)
        : '',
    };
  },

  toJSON(message: RecordRequest_Resi): unknown {
    const obj: any = {};
    if (message.gop !== 0) {
      obj.gop = Math.round(message.gop);
    }
    if (message.segmentSize !== 0) {
      obj.segmentSize = message.segmentSize;
    }
    if (message.destinationGroupId !== '') {
      obj.destinationGroupId = message.destinationGroupId;
    }
    if (message.bufSize !== 0) {
      obj.bufSize = Math.round(message.bufSize);
    }
    if (message.minRate !== 0) {
      obj.minRate = Math.round(message.minRate);
    }
    if (message.maxRate !== 0) {
      obj.maxRate = Math.round(message.maxRate);
    }
    if (message.eventName !== '') {
      obj.eventName = message.eventName;
    }
    if (message.socialDescription !== '') {
      obj.socialDescription = message.socialDescription;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RecordRequest_Resi>, I>>(
    base?: I,
  ): RecordRequest_Resi {
    return RecordRequest_Resi.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RecordRequest_Resi>, I>>(
    object: I,
  ): RecordRequest_Resi {
    const message = createBaseRecordRequest_Resi();
    message.gop = object.gop ?? 0;
    message.segmentSize = object.segmentSize ?? 0;
    message.destinationGroupId = object.destinationGroupId ?? '';
    message.bufSize = object.bufSize ?? 0;
    message.minRate = object.minRate ?? 0;
    message.maxRate = object.maxRate ?? 0;
    message.eventName = object.eventName ?? '';
    message.socialDescription = object.socialDescription ?? '';
    return message;
  },
};

function createBaseTextSegmentRequest(): TextSegmentRequest {
  return { segments: [], startPosition: 0 };
}

export const TextSegmentRequest = {
  encode(
    message: TextSegmentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.segments) {
      TextSegmentRequest_Segment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.startPosition !== 0) {
      writer.uint32(17).double(message.startPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextSegmentRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSegmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.segments.push(
            TextSegmentRequest_Segment.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.startPosition = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextSegmentRequest {
    return {
      segments: globalThis.Array.isArray(object?.segments)
        ? object.segments.map((e: any) =>
            TextSegmentRequest_Segment.fromJSON(e),
          )
        : [],
      startPosition: isSet(object.startPosition)
        ? globalThis.Number(object.startPosition)
        : 0,
    };
  },

  toJSON(message: TextSegmentRequest): unknown {
    const obj: any = {};
    if (message.segments?.length) {
      obj.segments = message.segments.map((e) =>
        TextSegmentRequest_Segment.toJSON(e),
      );
    }
    if (message.startPosition !== 0) {
      obj.startPosition = message.startPosition;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextSegmentRequest>, I>>(
    base?: I,
  ): TextSegmentRequest {
    return TextSegmentRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextSegmentRequest>, I>>(
    object: I,
  ): TextSegmentRequest {
    const message = createBaseTextSegmentRequest();
    message.segments =
      object.segments?.map((e) => TextSegmentRequest_Segment.fromPartial(e)) ||
      [];
    message.startPosition = object.startPosition ?? 0;
    return message;
  },
};

function createBaseTextSegmentRequest_Segment(): TextSegmentRequest_Segment {
  return { index: 0, size: 0 };
}

export const TextSegmentRequest_Segment = {
  encode(
    message: TextSegmentRequest_Segment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.size !== 0) {
      writer.uint32(17).double(message.size);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TextSegmentRequest_Segment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSegmentRequest_Segment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.size = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextSegmentRequest_Segment {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      size: isSet(object.size) ? globalThis.Number(object.size) : 0,
    };
  },

  toJSON(message: TextSegmentRequest_Segment): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.size !== 0) {
      obj.size = message.size;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextSegmentRequest_Segment>, I>>(
    base?: I,
  ): TextSegmentRequest_Segment {
    return TextSegmentRequest_Segment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextSegmentRequest_Segment>, I>>(
    object: I,
  ): TextSegmentRequest_Segment {
    const message = createBaseTextSegmentRequest_Segment();
    message.index = object.index ?? 0;
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseProClockSource(): ProClockSource {
  return { uuid: '', name: '', connected: false, active: false, type: 0 };
}

export const ProClockSource = {
  encode(
    message: ProClockSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== '') {
      writer.uint32(10).string(message.uuid);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.connected === true) {
      writer.uint32(24).bool(message.connected);
    }
    if (message.active === true) {
      writer.uint32(32).bool(message.active);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProClockSource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProClockSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.connected = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): ProClockSource {
    return {
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      connected: isSet(object.connected)
        ? globalThis.Boolean(object.connected)
        : false,
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      type: isSet(object.type) ? proClockSource_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: ProClockSource): unknown {
    const obj: any = {};
    if (message.uuid !== '') {
      obj.uuid = message.uuid;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.connected === true) {
      obj.connected = message.connected;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.type !== 0) {
      obj.type = proClockSource_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProClockSource>, I>>(
    base?: I,
  ): ProClockSource {
    return ProClockSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProClockSource>, I>>(
    object: I,
  ): ProClockSource {
    const message = createBaseProClockSource();
    message.uuid = object.uuid ?? '';
    message.name = object.name ?? '';
    message.connected = object.connected ?? false;
    message.active = object.active ?? false;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseTimedPlayback(): TimedPlayback {
  return { sequence: undefined, timing: undefined };
}

export const TimedPlayback = {
  encode(
    message: TimedPlayback,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sequence !== undefined) {
      TimedPlayback_Sequence.encode(
        message.sequence,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.timing !== undefined) {
      TimedPlayback_Timing.encode(
        message.timing,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimedPlayback {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequence = TimedPlayback_Sequence.decode(
            reader,
            reader.uint32(),
          );
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
      sequence: isSet(object.sequence)
        ? TimedPlayback_Sequence.fromJSON(object.sequence)
        : undefined,
      timing: isSet(object.timing)
        ? TimedPlayback_Timing.fromJSON(object.timing)
        : undefined,
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

  create<I extends Exact<DeepPartial<TimedPlayback>, I>>(
    base?: I,
  ): TimedPlayback {
    return TimedPlayback.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback>, I>>(
    object: I,
  ): TimedPlayback {
    const message = createBaseTimedPlayback();
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? TimedPlayback_Sequence.fromPartial(object.sequence)
        : undefined;
    message.timing =
      object.timing !== undefined && object.timing !== null
        ? TimedPlayback_Timing.fromPartial(object.timing)
        : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Sequence(): TimedPlayback_Sequence {
  return { sequence: [], contentDestination: 0, presentation: undefined };
}

export const TimedPlayback_Sequence = {
  encode(
    message: TimedPlayback_Sequence,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sequence) {
      TimedPlayback_Sequence_SequenceItem.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(16).int32(message.contentDestination);
    }
    if (message.presentation !== undefined) {
      Presentation.encode(
        message.presentation,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Sequence {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Sequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sequence.push(
            TimedPlayback_Sequence_SequenceItem.decode(reader, reader.uint32()),
          );
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
        ? object.sequence.map((e: any) =>
            TimedPlayback_Sequence_SequenceItem.fromJSON(e),
          )
        : [],
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      presentation: isSet(object.presentation)
        ? Presentation.fromJSON(object.presentation)
        : undefined,
    };
  },

  toJSON(message: TimedPlayback_Sequence): unknown {
    const obj: any = {};
    if (message.sequence?.length) {
      obj.sequence = message.sequence.map((e) =>
        TimedPlayback_Sequence_SequenceItem.toJSON(e),
      );
    }
    if (message.contentDestination !== 0) {
      obj.contentDestination = action_ContentDestinationToJSON(
        message.contentDestination,
      );
    }
    if (message.presentation !== undefined) {
      obj.presentation = Presentation.toJSON(message.presentation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Sequence>, I>>(
    base?: I,
  ): TimedPlayback_Sequence {
    return TimedPlayback_Sequence.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Sequence>, I>>(
    object: I,
  ): TimedPlayback_Sequence {
    const message = createBaseTimedPlayback_Sequence();
    message.sequence =
      object.sequence?.map((e) =>
        TimedPlayback_Sequence_SequenceItem.fromPartial(e),
      ) || [];
    message.contentDestination = object.contentDestination ?? 0;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
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
  encode(
    message: TimedPlayback_Sequence_SequenceItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      UUID.encode(message.identifier, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.triggerSource !== undefined) {
      TriggerSource.encode(
        message.triggerSource,
        writer.uint32(26).fork(),
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Sequence_SequenceItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      identifier: isSet(object.identifier)
        ? UUID.fromJSON(object.identifier)
        : undefined,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
      triggerSource: isSet(object.triggerSource)
        ? TriggerSource.fromJSON(object.triggerSource)
        : undefined,
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
      obj.contentDestination = action_ContentDestinationToJSON(
        message.contentDestination,
      );
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
  fromPartial<
    I extends Exact<DeepPartial<TimedPlayback_Sequence_SequenceItem>, I>,
  >(object: I): TimedPlayback_Sequence_SequenceItem {
    const message = createBaseTimedPlayback_Sequence_SequenceItem();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? UUID.fromPartial(object.identifier)
        : undefined;
    message.time = object.time ?? 0;
    message.triggerSource =
      object.triggerSource !== undefined && object.triggerSource !== null
        ? TriggerSource.fromPartial(object.triggerSource)
        : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    message.endTime = object.endTime ?? 0;
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? Cue.fromPartial(object.cue)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? Action.fromPartial(object.action)
        : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Timing(): TimedPlayback_Timing {
  return {
    layerTransport: undefined,
    smpteTimecode: undefined,
    internal: undefined,
  };
}

export const TimedPlayback_Timing = {
  encode(
    message: TimedPlayback_Timing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layerTransport !== undefined) {
      TimedPlayback_Timing_LayerTransport.encode(
        message.layerTransport,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.smpteTimecode !== undefined) {
      TimedPlayback_Timing_SMPTETimecode.encode(
        message.smpteTimecode,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.internal !== undefined) {
      TimedPlayback_Timing_Internal.encode(
        message.internal,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Timing {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Timing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.layerTransport = TimedPlayback_Timing_LayerTransport.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.smpteTimecode = TimedPlayback_Timing_SMPTETimecode.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.internal = TimedPlayback_Timing_Internal.decode(
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

  fromJSON(object: any): TimedPlayback_Timing {
    return {
      layerTransport: isSet(object.layerTransport)
        ? TimedPlayback_Timing_LayerTransport.fromJSON(object.layerTransport)
        : undefined,
      smpteTimecode: isSet(object.smpteTimecode)
        ? TimedPlayback_Timing_SMPTETimecode.fromJSON(object.smpteTimecode)
        : undefined,
      internal: isSet(object.internal)
        ? TimedPlayback_Timing_Internal.fromJSON(object.internal)
        : undefined,
    };
  },

  toJSON(message: TimedPlayback_Timing): unknown {
    const obj: any = {};
    if (message.layerTransport !== undefined) {
      obj.layerTransport = TimedPlayback_Timing_LayerTransport.toJSON(
        message.layerTransport,
      );
    }
    if (message.smpteTimecode !== undefined) {
      obj.smpteTimecode = TimedPlayback_Timing_SMPTETimecode.toJSON(
        message.smpteTimecode,
      );
    }
    if (message.internal !== undefined) {
      obj.internal = TimedPlayback_Timing_Internal.toJSON(message.internal);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing>, I>>(
    base?: I,
  ): TimedPlayback_Timing {
    return TimedPlayback_Timing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Timing>, I>>(
    object: I,
  ): TimedPlayback_Timing {
    const message = createBaseTimedPlayback_Timing();
    message.layerTransport =
      object.layerTransport !== undefined && object.layerTransport !== null
        ? TimedPlayback_Timing_LayerTransport.fromPartial(object.layerTransport)
        : undefined;
    message.smpteTimecode =
      object.smpteTimecode !== undefined && object.smpteTimecode !== null
        ? TimedPlayback_Timing_SMPTETimecode.fromPartial(object.smpteTimecode)
        : undefined;
    message.internal =
      object.internal !== undefined && object.internal !== null
        ? TimedPlayback_Timing_Internal.fromPartial(object.internal)
        : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Timing_LayerTransport(): TimedPlayback_Timing_LayerTransport {
  return { layer: 0 };
}

export const TimedPlayback_Timing_LayerTransport = {
  encode(
    message: TimedPlayback_Timing_LayerTransport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Timing_LayerTransport {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
  fromPartial<
    I extends Exact<DeepPartial<TimedPlayback_Timing_LayerTransport>, I>,
  >(object: I): TimedPlayback_Timing_LayerTransport {
    const message = createBaseTimedPlayback_Timing_LayerTransport();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseTimedPlayback_Timing_SMPTETimecode(): TimedPlayback_Timing_SMPTETimecode {
  return { deviceIdentifier: '', channel: 0, format: 0, offset: 0 };
}

export const TimedPlayback_Timing_SMPTETimecode = {
  encode(
    message: TimedPlayback_Timing_SMPTETimecode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.deviceIdentifier !== '') {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Timing_SMPTETimecode {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      deviceIdentifier: isSet(object.deviceIdentifier)
        ? globalThis.String(object.deviceIdentifier)
        : '',
      channel: isSet(object.channel) ? globalThis.Number(object.channel) : 0,
      format: isSet(object.format)
        ? timedPlayback_Timing_SMPTETimecode_FormatFromJSON(object.format)
        : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
    };
  },

  toJSON(message: TimedPlayback_Timing_SMPTETimecode): unknown {
    const obj: any = {};
    if (message.deviceIdentifier !== '') {
      obj.deviceIdentifier = message.deviceIdentifier;
    }
    if (message.channel !== 0) {
      obj.channel = Math.round(message.channel);
    }
    if (message.format !== 0) {
      obj.format = timedPlayback_Timing_SMPTETimecode_FormatToJSON(
        message.format,
      );
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
  fromPartial<
    I extends Exact<DeepPartial<TimedPlayback_Timing_SMPTETimecode>, I>,
  >(object: I): TimedPlayback_Timing_SMPTETimecode {
    const message = createBaseTimedPlayback_Timing_SMPTETimecode();
    message.deviceIdentifier = object.deviceIdentifier ?? '';
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
  encode(
    message: TimedPlayback_Timing_Internal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(9).double(message.duration);
    }
    if (message.shouldLoop === true) {
      writer.uint32(16).bool(message.shouldLoop);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Timing_Internal {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      shouldLoop: isSet(object.shouldLoop)
        ? globalThis.Boolean(object.shouldLoop)
        : false,
    };
  },

  toJSON(message: TimedPlayback_Timing_Internal): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    if (message.shouldLoop === true) {
      obj.shouldLoop = message.shouldLoop;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Timing_Internal>, I>>(
    base?: I,
  ): TimedPlayback_Timing_Internal {
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
  encode(
    message: TimedPlayback_Update,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.play !== undefined) {
      TimedPlayback_Update_Play.encode(
        message.play,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.record !== undefined) {
      TimedPlayback_Update_Record.encode(
        message.record,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.pause !== undefined) {
      TimedPlayback_Update_Pause.encode(
        message.pause,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.reset !== undefined) {
      TimedPlayback_Update_Reset.encode(
        message.reset,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.jumpToTime !== undefined) {
      TimedPlayback_Update_JumpToTime.encode(
        message.jumpToTime,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.startScrub !== undefined) {
      TimedPlayback_Update_StartScrub.encode(
        message.startScrub,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.endScrub !== undefined) {
      TimedPlayback_Update_EndScrub.encode(
        message.endScrub,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.duration !== undefined) {
      TimedPlayback_Update_Duration.encode(
        message.duration,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.loop !== undefined) {
      TimedPlayback_Update_Loop.encode(
        message.loop,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.updateSequence !== undefined) {
      TimedPlayback_Sequence.encode(
        message.updateSequence,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.monitorSource !== undefined) {
      TimedPlayback_Update_MonitorSource.encode(
        message.monitorSource,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedPlayback_Update();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.play = TimedPlayback_Update_Play.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.record = TimedPlayback_Update_Record.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pause = TimedPlayback_Update_Pause.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reset = TimedPlayback_Update_Reset.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.jumpToTime = TimedPlayback_Update_JumpToTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.startScrub = TimedPlayback_Update_StartScrub.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.endScrub = TimedPlayback_Update_EndScrub.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.duration = TimedPlayback_Update_Duration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.loop = TimedPlayback_Update_Loop.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.updateSequence = TimedPlayback_Sequence.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.monitorSource = TimedPlayback_Update_MonitorSource.decode(
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

  fromJSON(object: any): TimedPlayback_Update {
    return {
      play: isSet(object.play)
        ? TimedPlayback_Update_Play.fromJSON(object.play)
        : undefined,
      record: isSet(object.record)
        ? TimedPlayback_Update_Record.fromJSON(object.record)
        : undefined,
      pause: isSet(object.pause)
        ? TimedPlayback_Update_Pause.fromJSON(object.pause)
        : undefined,
      reset: isSet(object.reset)
        ? TimedPlayback_Update_Reset.fromJSON(object.reset)
        : undefined,
      jumpToTime: isSet(object.jumpToTime)
        ? TimedPlayback_Update_JumpToTime.fromJSON(object.jumpToTime)
        : undefined,
      startScrub: isSet(object.startScrub)
        ? TimedPlayback_Update_StartScrub.fromJSON(object.startScrub)
        : undefined,
      endScrub: isSet(object.endScrub)
        ? TimedPlayback_Update_EndScrub.fromJSON(object.endScrub)
        : undefined,
      duration: isSet(object.duration)
        ? TimedPlayback_Update_Duration.fromJSON(object.duration)
        : undefined,
      loop: isSet(object.loop)
        ? TimedPlayback_Update_Loop.fromJSON(object.loop)
        : undefined,
      updateSequence: isSet(object.updateSequence)
        ? TimedPlayback_Sequence.fromJSON(object.updateSequence)
        : undefined,
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
      obj.jumpToTime = TimedPlayback_Update_JumpToTime.toJSON(
        message.jumpToTime,
      );
    }
    if (message.startScrub !== undefined) {
      obj.startScrub = TimedPlayback_Update_StartScrub.toJSON(
        message.startScrub,
      );
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
      obj.updateSequence = TimedPlayback_Sequence.toJSON(
        message.updateSequence,
      );
    }
    if (message.monitorSource !== undefined) {
      obj.monitorSource = TimedPlayback_Update_MonitorSource.toJSON(
        message.monitorSource,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update>, I>>(
    base?: I,
  ): TimedPlayback_Update {
    return TimedPlayback_Update.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update>, I>>(
    object: I,
  ): TimedPlayback_Update {
    const message = createBaseTimedPlayback_Update();
    message.play =
      object.play !== undefined && object.play !== null
        ? TimedPlayback_Update_Play.fromPartial(object.play)
        : undefined;
    message.record =
      object.record !== undefined && object.record !== null
        ? TimedPlayback_Update_Record.fromPartial(object.record)
        : undefined;
    message.pause =
      object.pause !== undefined && object.pause !== null
        ? TimedPlayback_Update_Pause.fromPartial(object.pause)
        : undefined;
    message.reset =
      object.reset !== undefined && object.reset !== null
        ? TimedPlayback_Update_Reset.fromPartial(object.reset)
        : undefined;
    message.jumpToTime =
      object.jumpToTime !== undefined && object.jumpToTime !== null
        ? TimedPlayback_Update_JumpToTime.fromPartial(object.jumpToTime)
        : undefined;
    message.startScrub =
      object.startScrub !== undefined && object.startScrub !== null
        ? TimedPlayback_Update_StartScrub.fromPartial(object.startScrub)
        : undefined;
    message.endScrub =
      object.endScrub !== undefined && object.endScrub !== null
        ? TimedPlayback_Update_EndScrub.fromPartial(object.endScrub)
        : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? TimedPlayback_Update_Duration.fromPartial(object.duration)
        : undefined;
    message.loop =
      object.loop !== undefined && object.loop !== null
        ? TimedPlayback_Update_Loop.fromPartial(object.loop)
        : undefined;
    message.updateSequence =
      object.updateSequence !== undefined && object.updateSequence !== null
        ? TimedPlayback_Sequence.fromPartial(object.updateSequence)
        : undefined;
    message.monitorSource =
      object.monitorSource !== undefined && object.monitorSource !== null
        ? TimedPlayback_Update_MonitorSource.fromPartial(object.monitorSource)
        : undefined;
    return message;
  },
};

function createBaseTimedPlayback_Update_Play(): TimedPlayback_Update_Play {
  return {};
}

export const TimedPlayback_Update_Play = {
  encode(
    _: TimedPlayback_Update_Play,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_Play {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Play>, I>>(
    base?: I,
  ): TimedPlayback_Update_Play {
    return TimedPlayback_Update_Play.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Play>, I>>(
    _: I,
  ): TimedPlayback_Update_Play {
    const message = createBaseTimedPlayback_Update_Play();
    return message;
  },
};

function createBaseTimedPlayback_Update_Record(): TimedPlayback_Update_Record {
  return { isRecording: false };
}

export const TimedPlayback_Update_Record = {
  encode(
    message: TimedPlayback_Update_Record,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isRecording === true) {
      writer.uint32(8).bool(message.isRecording);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_Record {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return {
      isRecording: isSet(object.isRecording)
        ? globalThis.Boolean(object.isRecording)
        : false,
    };
  },

  toJSON(message: TimedPlayback_Update_Record): unknown {
    const obj: any = {};
    if (message.isRecording === true) {
      obj.isRecording = message.isRecording;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Record>, I>>(
    base?: I,
  ): TimedPlayback_Update_Record {
    return TimedPlayback_Update_Record.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Record>, I>>(
    object: I,
  ): TimedPlayback_Update_Record {
    const message = createBaseTimedPlayback_Update_Record();
    message.isRecording = object.isRecording ?? false;
    return message;
  },
};

function createBaseTimedPlayback_Update_Pause(): TimedPlayback_Update_Pause {
  return {};
}

export const TimedPlayback_Update_Pause = {
  encode(
    _: TimedPlayback_Update_Pause,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_Pause {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Pause>, I>>(
    base?: I,
  ): TimedPlayback_Update_Pause {
    return TimedPlayback_Update_Pause.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Pause>, I>>(
    _: I,
  ): TimedPlayback_Update_Pause {
    const message = createBaseTimedPlayback_Update_Pause();
    return message;
  },
};

function createBaseTimedPlayback_Update_Reset(): TimedPlayback_Update_Reset {
  return {};
}

export const TimedPlayback_Update_Reset = {
  encode(
    _: TimedPlayback_Update_Reset,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_Reset {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Reset>, I>>(
    base?: I,
  ): TimedPlayback_Update_Reset {
    return TimedPlayback_Update_Reset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Reset>, I>>(
    _: I,
  ): TimedPlayback_Update_Reset {
    const message = createBaseTimedPlayback_Update_Reset();
    return message;
  },
};

function createBaseTimedPlayback_Update_JumpToTime(): TimedPlayback_Update_JumpToTime {
  return { time: 0 };
}

export const TimedPlayback_Update_JumpToTime = {
  encode(
    message: TimedPlayback_Update_JumpToTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_JumpToTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_JumpToTime>, I>>(
    base?: I,
  ): TimedPlayback_Update_JumpToTime {
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
  encode(
    message: TimedPlayback_Update_StartScrub,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_StartScrub {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_StartScrub>, I>>(
    base?: I,
  ): TimedPlayback_Update_StartScrub {
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
  encode(
    message: TimedPlayback_Update_EndScrub,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_EndScrub {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  create<I extends Exact<DeepPartial<TimedPlayback_Update_EndScrub>, I>>(
    base?: I,
  ): TimedPlayback_Update_EndScrub {
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
  encode(
    message: TimedPlayback_Update_Duration,
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
  ): TimedPlayback_Update_Duration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return {
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: TimedPlayback_Update_Duration): unknown {
    const obj: any = {};
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Duration>, I>>(
    base?: I,
  ): TimedPlayback_Update_Duration {
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
  encode(
    message: TimedPlayback_Update_Loop,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.loop === true) {
      writer.uint32(8).bool(message.loop);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_Loop {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return {
      loop: isSet(object.loop) ? globalThis.Boolean(object.loop) : false,
    };
  },

  toJSON(message: TimedPlayback_Update_Loop): unknown {
    const obj: any = {};
    if (message.loop === true) {
      obj.loop = message.loop;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_Loop>, I>>(
    base?: I,
  ): TimedPlayback_Update_Loop {
    return TimedPlayback_Update_Loop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimedPlayback_Update_Loop>, I>>(
    object: I,
  ): TimedPlayback_Update_Loop {
    const message = createBaseTimedPlayback_Update_Loop();
    message.loop = object.loop ?? false;
    return message;
  },
};

function createBaseTimedPlayback_Update_MonitorSource(): TimedPlayback_Update_MonitorSource {
  return { enable: false };
}

export const TimedPlayback_Update_MonitorSource = {
  encode(
    message: TimedPlayback_Update_MonitorSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TimedPlayback_Update_MonitorSource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
    };
  },

  toJSON(message: TimedPlayback_Update_MonitorSource): unknown {
    const obj: any = {};
    if (message.enable === true) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimedPlayback_Update_MonitorSource>, I>>(
    base?: I,
  ): TimedPlayback_Update_MonitorSource {
    return TimedPlayback_Update_MonitorSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TimedPlayback_Update_MonitorSource>, I>,
  >(object: I): TimedPlayback_Update_MonitorSource {
    const message = createBaseTimedPlayback_Update_MonitorSource();
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseNetworkTriggerDataItem(): NetworkTriggerDataItem {
  return { triggerOptions: undefined, action: undefined, cue: undefined };
}

export const NetworkTriggerDataItem = {
  encode(
    message: NetworkTriggerDataItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerOptions !== undefined) {
      TriggerOptions.encode(
        message.triggerOptions,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).ldelim();
    }
    if (message.cue !== undefined) {
      Cue.encode(message.cue, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkTriggerDataItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkTriggerDataItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.triggerOptions = TriggerOptions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cue = Cue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkTriggerDataItem {
    return {
      triggerOptions: isSet(object.triggerOptions)
        ? TriggerOptions.fromJSON(object.triggerOptions)
        : undefined,
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
      cue: isSet(object.cue) ? Cue.fromJSON(object.cue) : undefined,
    };
  },

  toJSON(message: NetworkTriggerDataItem): unknown {
    const obj: any = {};
    if (message.triggerOptions !== undefined) {
      obj.triggerOptions = TriggerOptions.toJSON(message.triggerOptions);
    }
    if (message.action !== undefined) {
      obj.action = Action.toJSON(message.action);
    }
    if (message.cue !== undefined) {
      obj.cue = Cue.toJSON(message.cue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkTriggerDataItem>, I>>(
    base?: I,
  ): NetworkTriggerDataItem {
    return NetworkTriggerDataItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkTriggerDataItem>, I>>(
    object: I,
  ): NetworkTriggerDataItem {
    const message = createBaseNetworkTriggerDataItem();
    message.triggerOptions =
      object.triggerOptions !== undefined && object.triggerOptions !== null
        ? TriggerOptions.fromPartial(object.triggerOptions)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? Action.fromPartial(object.action)
        : undefined;
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? Cue.fromPartial(object.cue)
        : undefined;
    return message;
  },
};

function createBaseSlideElementTextRenderInfo(): SlideElementTextRenderInfo {
  return { layers: [] };
}

export const SlideElementTextRenderInfo = {
  encode(
    message: SlideElementTextRenderInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.layers) {
      SlideElementTextRenderInfo_Layer.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SlideElementTextRenderInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlideElementTextRenderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.layers.push(
            SlideElementTextRenderInfo_Layer.decode(reader, reader.uint32()),
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

  fromJSON(object: any): SlideElementTextRenderInfo {
    return {
      layers: globalThis.Array.isArray(object?.layers)
        ? object.layers.map((e: any) =>
            SlideElementTextRenderInfo_Layer.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: SlideElementTextRenderInfo): unknown {
    const obj: any = {};
    if (message.layers?.length) {
      obj.layers = message.layers.map((e) =>
        SlideElementTextRenderInfo_Layer.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SlideElementTextRenderInfo>, I>>(
    base?: I,
  ): SlideElementTextRenderInfo {
    return SlideElementTextRenderInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SlideElementTextRenderInfo>, I>>(
    object: I,
  ): SlideElementTextRenderInfo {
    const message = createBaseSlideElementTextRenderInfo();
    message.layers =
      object.layers?.map((e) =>
        SlideElementTextRenderInfo_Layer.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseSlideElementTextRenderInfo_Layer(): SlideElementTextRenderInfo_Layer {
  return {
    layerType: 0,
    textBuildIndex: 0,
    cutOutFill: undefined,
    mediaFill: undefined,
    backgroundEffect: undefined,
  };
}

export const SlideElementTextRenderInfo_Layer = {
  encode(
    message: SlideElementTextRenderInfo_Layer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layerType !== 0) {
      writer.uint32(8).int32(message.layerType);
    }
    if (message.textBuildIndex !== 0) {
      writer.uint32(40).int32(message.textBuildIndex);
    }
    if (message.cutOutFill !== undefined) {
      Graphics_Text_CutOutFill.encode(
        message.cutOutFill,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.mediaFill !== undefined) {
      Graphics_Text_MediaFill.encode(
        message.mediaFill,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.backgroundEffect !== undefined) {
      Graphics_BackgroundEffect.encode(
        message.backgroundEffect,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SlideElementTextRenderInfo_Layer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlideElementTextRenderInfo_Layer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layerType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.textBuildIndex = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cutOutFill = Graphics_Text_CutOutFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mediaFill = Graphics_Text_MediaFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backgroundEffect = Graphics_BackgroundEffect.decode(
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

  fromJSON(object: any): SlideElementTextRenderInfo_Layer {
    return {
      layerType: isSet(object.layerType)
        ? slideElementTextRenderInfo_LayerTypeFromJSON(object.layerType)
        : 0,
      textBuildIndex: isSet(object.textBuildIndex)
        ? globalThis.Number(object.textBuildIndex)
        : 0,
      cutOutFill: isSet(object.cutOutFill)
        ? Graphics_Text_CutOutFill.fromJSON(object.cutOutFill)
        : undefined,
      mediaFill: isSet(object.mediaFill)
        ? Graphics_Text_MediaFill.fromJSON(object.mediaFill)
        : undefined,
      backgroundEffect: isSet(object.backgroundEffect)
        ? Graphics_BackgroundEffect.fromJSON(object.backgroundEffect)
        : undefined,
    };
  },

  toJSON(message: SlideElementTextRenderInfo_Layer): unknown {
    const obj: any = {};
    if (message.layerType !== 0) {
      obj.layerType = slideElementTextRenderInfo_LayerTypeToJSON(
        message.layerType,
      );
    }
    if (message.textBuildIndex !== 0) {
      obj.textBuildIndex = Math.round(message.textBuildIndex);
    }
    if (message.cutOutFill !== undefined) {
      obj.cutOutFill = Graphics_Text_CutOutFill.toJSON(message.cutOutFill);
    }
    if (message.mediaFill !== undefined) {
      obj.mediaFill = Graphics_Text_MediaFill.toJSON(message.mediaFill);
    }
    if (message.backgroundEffect !== undefined) {
      obj.backgroundEffect = Graphics_BackgroundEffect.toJSON(
        message.backgroundEffect,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SlideElementTextRenderInfo_Layer>, I>>(
    base?: I,
  ): SlideElementTextRenderInfo_Layer {
    return SlideElementTextRenderInfo_Layer.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<SlideElementTextRenderInfo_Layer>, I>,
  >(object: I): SlideElementTextRenderInfo_Layer {
    const message = createBaseSlideElementTextRenderInfo_Layer();
    message.layerType = object.layerType ?? 0;
    message.textBuildIndex = object.textBuildIndex ?? 0;
    message.cutOutFill =
      object.cutOutFill !== undefined && object.cutOutFill !== null
        ? Graphics_Text_CutOutFill.fromPartial(object.cutOutFill)
        : undefined;
    message.mediaFill =
      object.mediaFill !== undefined && object.mediaFill !== null
        ? Graphics_Text_MediaFill.fromPartial(object.mediaFill)
        : undefined;
    message.backgroundEffect =
      object.backgroundEffect !== undefined && object.backgroundEffect !== null
        ? Graphics_BackgroundEffect.fromPartial(object.backgroundEffect)
        : undefined;
    return message;
  },
};

function createBaseValidateEncoderRequest(): ValidateEncoderRequest {
  return { encoder: undefined };
}

export const ValidateEncoderRequest = {
  encode(
    message: ValidateEncoderRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.encoder !== undefined) {
      Recording_Stream_Encoder.encode(
        message.encoder,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidateEncoderRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateEncoderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encoder = Recording_Stream_Encoder.decode(
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

  fromJSON(object: any): ValidateEncoderRequest {
    return {
      encoder: isSet(object.encoder)
        ? Recording_Stream_Encoder.fromJSON(object.encoder)
        : undefined,
    };
  },

  toJSON(message: ValidateEncoderRequest): unknown {
    const obj: any = {};
    if (message.encoder !== undefined) {
      obj.encoder = Recording_Stream_Encoder.toJSON(message.encoder);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateEncoderRequest>, I>>(
    base?: I,
  ): ValidateEncoderRequest {
    return ValidateEncoderRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateEncoderRequest>, I>>(
    object: I,
  ): ValidateEncoderRequest {
    const message = createBaseValidateEncoderRequest();
    message.encoder =
      object.encoder !== undefined && object.encoder !== null
        ? Recording_Stream_Encoder.fromPartial(object.encoder)
        : undefined;
    return message;
  },
};

function createBaseValidateEncoderResponse(): ValidateEncoderResponse {
  return { isValid: false };
}

export const ValidateEncoderResponse = {
  encode(
    message: ValidateEncoderResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isValid === true) {
      writer.uint32(8).bool(message.isValid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidateEncoderResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateEncoderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isValid = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateEncoderResponse {
    return {
      isValid: isSet(object.isValid)
        ? globalThis.Boolean(object.isValid)
        : false,
    };
  },

  toJSON(message: ValidateEncoderResponse): unknown {
    const obj: any = {};
    if (message.isValid === true) {
      obj.isValid = message.isValid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidateEncoderResponse>, I>>(
    base?: I,
  ): ValidateEncoderResponse {
    return ValidateEncoderResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidateEncoderResponse>, I>>(
    object: I,
  ): ValidateEncoderResponse {
    const message = createBaseValidateEncoderResponse();
    message.isValid = object.isValid ?? false;
    return message;
  },
};

function createBaseTriggerCue(): TriggerCue {
  return {
    triggerHandle: 0,
    triggerOptions: undefined,
    cue: undefined,
    presentation: undefined,
    playlist: undefined,
    clientData: 0,
  };
}

export const TriggerCue = {
  encode(
    message: TriggerCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerHandle !== 0) {
      writer.uint32(8).uint64(message.triggerHandle);
    }
    if (message.triggerOptions !== undefined) {
      TriggerOptions.encode(
        message.triggerOptions,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cue !== undefined) {
      Cue.encode(message.cue, writer.uint32(26).fork()).ldelim();
    }
    if (message.presentation !== undefined) {
      TriggerCue_PresentationCue.encode(
        message.presentation,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playlist !== undefined) {
      Playlist.encode(message.playlist, writer.uint32(42).fork()).ldelim();
    }
    if (message.clientData !== 0) {
      writer.uint32(48).uint64(message.clientData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.triggerHandle = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.triggerOptions = TriggerOptions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cue = Cue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.presentation = TriggerCue_PresentationCue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playlist = Playlist.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.clientData = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerCue {
    return {
      triggerHandle: isSet(object.triggerHandle)
        ? globalThis.Number(object.triggerHandle)
        : 0,
      triggerOptions: isSet(object.triggerOptions)
        ? TriggerOptions.fromJSON(object.triggerOptions)
        : undefined,
      cue: isSet(object.cue) ? Cue.fromJSON(object.cue) : undefined,
      presentation: isSet(object.presentation)
        ? TriggerCue_PresentationCue.fromJSON(object.presentation)
        : undefined,
      playlist: isSet(object.playlist)
        ? Playlist.fromJSON(object.playlist)
        : undefined,
      clientData: isSet(object.clientData)
        ? globalThis.Number(object.clientData)
        : 0,
    };
  },

  toJSON(message: TriggerCue): unknown {
    const obj: any = {};
    if (message.triggerHandle !== 0) {
      obj.triggerHandle = Math.round(message.triggerHandle);
    }
    if (message.triggerOptions !== undefined) {
      obj.triggerOptions = TriggerOptions.toJSON(message.triggerOptions);
    }
    if (message.cue !== undefined) {
      obj.cue = Cue.toJSON(message.cue);
    }
    if (message.presentation !== undefined) {
      obj.presentation = TriggerCue_PresentationCue.toJSON(
        message.presentation,
      );
    }
    if (message.playlist !== undefined) {
      obj.playlist = Playlist.toJSON(message.playlist);
    }
    if (message.clientData !== 0) {
      obj.clientData = Math.round(message.clientData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerCue>, I>>(base?: I): TriggerCue {
    return TriggerCue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerCue>, I>>(
    object: I,
  ): TriggerCue {
    const message = createBaseTriggerCue();
    message.triggerHandle = object.triggerHandle ?? 0;
    message.triggerOptions =
      object.triggerOptions !== undefined && object.triggerOptions !== null
        ? TriggerOptions.fromPartial(object.triggerOptions)
        : undefined;
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? Cue.fromPartial(object.cue)
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? TriggerCue_PresentationCue.fromPartial(object.presentation)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? Playlist.fromPartial(object.playlist)
        : undefined;
    message.clientData = object.clientData ?? 0;
    return message;
  },
};

function createBaseTriggerCue_PresentationCue(): TriggerCue_PresentationCue {
  return { presentation: undefined, arrangementId: undefined, cueIndex: 0 };
}

export const TriggerCue_PresentationCue = {
  encode(
    message: TriggerCue_PresentationCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      Presentation.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.arrangementId !== undefined) {
      UUID.encode(message.arrangementId, writer.uint32(18).fork()).ldelim();
    }
    if (message.cueIndex !== 0) {
      writer.uint32(24).int32(message.cueIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerCue_PresentationCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerCue_PresentationCue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentation = Presentation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arrangementId = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cueIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerCue_PresentationCue {
    return {
      presentation: isSet(object.presentation)
        ? Presentation.fromJSON(object.presentation)
        : undefined,
      arrangementId: isSet(object.arrangementId)
        ? UUID.fromJSON(object.arrangementId)
        : undefined,
      cueIndex: isSet(object.cueIndex) ? globalThis.Number(object.cueIndex) : 0,
    };
  },

  toJSON(message: TriggerCue_PresentationCue): unknown {
    const obj: any = {};
    if (message.presentation !== undefined) {
      obj.presentation = Presentation.toJSON(message.presentation);
    }
    if (message.arrangementId !== undefined) {
      obj.arrangementId = UUID.toJSON(message.arrangementId);
    }
    if (message.cueIndex !== 0) {
      obj.cueIndex = Math.round(message.cueIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerCue_PresentationCue>, I>>(
    base?: I,
  ): TriggerCue_PresentationCue {
    return TriggerCue_PresentationCue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerCue_PresentationCue>, I>>(
    object: I,
  ): TriggerCue_PresentationCue {
    const message = createBaseTriggerCue_PresentationCue();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? Presentation.fromPartial(object.presentation)
        : undefined;
    message.arrangementId =
      object.arrangementId !== undefined && object.arrangementId !== null
        ? UUID.fromPartial(object.arrangementId)
        : undefined;
    message.cueIndex = object.cueIndex ?? 0;
    return message;
  },
};

function createBaseCaptureActionRequest(): CaptureActionRequest {
  return { startResi: undefined, stopCapture: undefined, error: undefined };
}

export const CaptureActionRequest = {
  encode(
    message: CaptureActionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startResi !== undefined) {
      CaptureActionRequest_StartResi.encode(
        message.startResi,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.stopCapture !== undefined) {
      CaptureActionRequest_StopCapture.encode(
        message.stopCapture,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      CaptureActionRequest_Error.encode(
        message.error,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startResi = CaptureActionRequest_StartResi.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stopCapture = CaptureActionRequest_StopCapture.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.error = CaptureActionRequest_Error.decode(
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

  fromJSON(object: any): CaptureActionRequest {
    return {
      startResi: isSet(object.startResi)
        ? CaptureActionRequest_StartResi.fromJSON(object.startResi)
        : undefined,
      stopCapture: isSet(object.stopCapture)
        ? CaptureActionRequest_StopCapture.fromJSON(object.stopCapture)
        : undefined,
      error: isSet(object.error)
        ? CaptureActionRequest_Error.fromJSON(object.error)
        : undefined,
    };
  },

  toJSON(message: CaptureActionRequest): unknown {
    const obj: any = {};
    if (message.startResi !== undefined) {
      obj.startResi = CaptureActionRequest_StartResi.toJSON(message.startResi);
    }
    if (message.stopCapture !== undefined) {
      obj.stopCapture = CaptureActionRequest_StopCapture.toJSON(
        message.stopCapture,
      );
    }
    if (message.error !== undefined) {
      obj.error = CaptureActionRequest_Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionRequest>, I>>(
    base?: I,
  ): CaptureActionRequest {
    return CaptureActionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CaptureActionRequest>, I>>(
    object: I,
  ): CaptureActionRequest {
    const message = createBaseCaptureActionRequest();
    message.startResi =
      object.startResi !== undefined && object.startResi !== null
        ? CaptureActionRequest_StartResi.fromPartial(object.startResi)
        : undefined;
    message.stopCapture =
      object.stopCapture !== undefined && object.stopCapture !== null
        ? CaptureActionRequest_StopCapture.fromPartial(object.stopCapture)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? CaptureActionRequest_Error.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseCaptureActionRequest_StartResi(): CaptureActionRequest_StartResi {
  return {};
}

export const CaptureActionRequest_StartResi = {
  encode(
    _: CaptureActionRequest_StartResi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionRequest_StartResi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionRequest_StartResi();
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

  fromJSON(_: any): CaptureActionRequest_StartResi {
    return {};
  },

  toJSON(_: CaptureActionRequest_StartResi): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionRequest_StartResi>, I>>(
    base?: I,
  ): CaptureActionRequest_StartResi {
    return CaptureActionRequest_StartResi.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CaptureActionRequest_StartResi>, I>>(
    _: I,
  ): CaptureActionRequest_StartResi {
    const message = createBaseCaptureActionRequest_StartResi();
    return message;
  },
};

function createBaseCaptureActionRequest_StopCapture(): CaptureActionRequest_StopCapture {
  return {};
}

export const CaptureActionRequest_StopCapture = {
  encode(
    _: CaptureActionRequest_StopCapture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionRequest_StopCapture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionRequest_StopCapture();
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

  fromJSON(_: any): CaptureActionRequest_StopCapture {
    return {};
  },

  toJSON(_: CaptureActionRequest_StopCapture): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionRequest_StopCapture>, I>>(
    base?: I,
  ): CaptureActionRequest_StopCapture {
    return CaptureActionRequest_StopCapture.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<CaptureActionRequest_StopCapture>, I>,
  >(_: I): CaptureActionRequest_StopCapture {
    const message = createBaseCaptureActionRequest_StopCapture();
    return message;
  },
};

function createBaseCaptureActionRequest_Error(): CaptureActionRequest_Error {
  return { errorCode: 0, captureAction: undefined };
}

export const CaptureActionRequest_Error = {
  encode(
    message: CaptureActionRequest_Error,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.errorCode !== 0) {
      writer.uint32(8).int32(message.errorCode);
    }
    if (message.captureAction !== undefined) {
      Action_CaptureType.encode(
        message.captureAction,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionRequest_Error {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionRequest_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.errorCode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.captureAction = Action_CaptureType.decode(
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

  fromJSON(object: any): CaptureActionRequest_Error {
    return {
      errorCode: isSet(object.errorCode)
        ? globalThis.Number(object.errorCode)
        : 0,
      captureAction: isSet(object.captureAction)
        ? Action_CaptureType.fromJSON(object.captureAction)
        : undefined,
    };
  },

  toJSON(message: CaptureActionRequest_Error): unknown {
    const obj: any = {};
    if (message.errorCode !== 0) {
      obj.errorCode = Math.round(message.errorCode);
    }
    if (message.captureAction !== undefined) {
      obj.captureAction = Action_CaptureType.toJSON(message.captureAction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionRequest_Error>, I>>(
    base?: I,
  ): CaptureActionRequest_Error {
    return CaptureActionRequest_Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CaptureActionRequest_Error>, I>>(
    object: I,
  ): CaptureActionRequest_Error {
    const message = createBaseCaptureActionRequest_Error();
    message.errorCode = object.errorCode ?? 0;
    message.captureAction =
      object.captureAction !== undefined && object.captureAction !== null
        ? Action_CaptureType.fromPartial(object.captureAction)
        : undefined;
    return message;
  },
};

function createBaseCaptureActionResponse(): CaptureActionResponse {
  return {
    startResi: undefined,
    stopCapture: undefined,
    cancelCaptureAction: undefined,
  };
}

export const CaptureActionResponse = {
  encode(
    message: CaptureActionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startResi !== undefined) {
      CaptureActionResponse_StartResi.encode(
        message.startResi,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.stopCapture !== undefined) {
      CaptureActionResponse_StopCapture.encode(
        message.stopCapture,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cancelCaptureAction !== undefined) {
      CaptureActionResponse_CancelCaptureAction.encode(
        message.cancelCaptureAction,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startResi = CaptureActionResponse_StartResi.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stopCapture = CaptureActionResponse_StopCapture.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cancelCaptureAction =
            CaptureActionResponse_CancelCaptureAction.decode(
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

  fromJSON(object: any): CaptureActionResponse {
    return {
      startResi: isSet(object.startResi)
        ? CaptureActionResponse_StartResi.fromJSON(object.startResi)
        : undefined,
      stopCapture: isSet(object.stopCapture)
        ? CaptureActionResponse_StopCapture.fromJSON(object.stopCapture)
        : undefined,
      cancelCaptureAction: isSet(object.cancelCaptureAction)
        ? CaptureActionResponse_CancelCaptureAction.fromJSON(
            object.cancelCaptureAction,
          )
        : undefined,
    };
  },

  toJSON(message: CaptureActionResponse): unknown {
    const obj: any = {};
    if (message.startResi !== undefined) {
      obj.startResi = CaptureActionResponse_StartResi.toJSON(message.startResi);
    }
    if (message.stopCapture !== undefined) {
      obj.stopCapture = CaptureActionResponse_StopCapture.toJSON(
        message.stopCapture,
      );
    }
    if (message.cancelCaptureAction !== undefined) {
      obj.cancelCaptureAction =
        CaptureActionResponse_CancelCaptureAction.toJSON(
          message.cancelCaptureAction,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionResponse>, I>>(
    base?: I,
  ): CaptureActionResponse {
    return CaptureActionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CaptureActionResponse>, I>>(
    object: I,
  ): CaptureActionResponse {
    const message = createBaseCaptureActionResponse();
    message.startResi =
      object.startResi !== undefined && object.startResi !== null
        ? CaptureActionResponse_StartResi.fromPartial(object.startResi)
        : undefined;
    message.stopCapture =
      object.stopCapture !== undefined && object.stopCapture !== null
        ? CaptureActionResponse_StopCapture.fromPartial(object.stopCapture)
        : undefined;
    message.cancelCaptureAction =
      object.cancelCaptureAction !== undefined &&
      object.cancelCaptureAction !== null
        ? CaptureActionResponse_CancelCaptureAction.fromPartial(
            object.cancelCaptureAction,
          )
        : undefined;
    return message;
  },
};

function createBaseCaptureActionResponse_CancelCaptureAction(): CaptureActionResponse_CancelCaptureAction {
  return {};
}

export const CaptureActionResponse_CancelCaptureAction = {
  encode(
    _: CaptureActionResponse_CancelCaptureAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionResponse_CancelCaptureAction {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionResponse_CancelCaptureAction();
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

  fromJSON(_: any): CaptureActionResponse_CancelCaptureAction {
    return {};
  },

  toJSON(_: CaptureActionResponse_CancelCaptureAction): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<CaptureActionResponse_CancelCaptureAction>, I>,
  >(base?: I): CaptureActionResponse_CancelCaptureAction {
    return CaptureActionResponse_CancelCaptureAction.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<CaptureActionResponse_CancelCaptureAction>, I>,
  >(_: I): CaptureActionResponse_CancelCaptureAction {
    const message = createBaseCaptureActionResponse_CancelCaptureAction();
    return message;
  },
};

function createBaseCaptureActionResponse_StartResi(): CaptureActionResponse_StartResi {
  return { eventName: '', eventDescription: '' };
}

export const CaptureActionResponse_StartResi = {
  encode(
    message: CaptureActionResponse_StartResi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventName !== '') {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventDescription !== '') {
      writer.uint32(18).string(message.eventDescription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionResponse_StartResi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionResponse_StartResi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventDescription = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CaptureActionResponse_StartResi {
    return {
      eventName: isSet(object.eventName)
        ? globalThis.String(object.eventName)
        : '',
      eventDescription: isSet(object.eventDescription)
        ? globalThis.String(object.eventDescription)
        : '',
    };
  },

  toJSON(message: CaptureActionResponse_StartResi): unknown {
    const obj: any = {};
    if (message.eventName !== '') {
      obj.eventName = message.eventName;
    }
    if (message.eventDescription !== '') {
      obj.eventDescription = message.eventDescription;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionResponse_StartResi>, I>>(
    base?: I,
  ): CaptureActionResponse_StartResi {
    return CaptureActionResponse_StartResi.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CaptureActionResponse_StartResi>, I>>(
    object: I,
  ): CaptureActionResponse_StartResi {
    const message = createBaseCaptureActionResponse_StartResi();
    message.eventName = object.eventName ?? '';
    message.eventDescription = object.eventDescription ?? '';
    return message;
  },
};

function createBaseCaptureActionResponse_StopCapture(): CaptureActionResponse_StopCapture {
  return { stopCapture: false };
}

export const CaptureActionResponse_StopCapture = {
  encode(
    message: CaptureActionResponse_StopCapture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.stopCapture === true) {
      writer.uint32(8).bool(message.stopCapture);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CaptureActionResponse_StopCapture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCaptureActionResponse_StopCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.stopCapture = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CaptureActionResponse_StopCapture {
    return {
      stopCapture: isSet(object.stopCapture)
        ? globalThis.Boolean(object.stopCapture)
        : false,
    };
  },

  toJSON(message: CaptureActionResponse_StopCapture): unknown {
    const obj: any = {};
    if (message.stopCapture === true) {
      obj.stopCapture = message.stopCapture;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CaptureActionResponse_StopCapture>, I>>(
    base?: I,
  ): CaptureActionResponse_StopCapture {
    return CaptureActionResponse_StopCapture.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<CaptureActionResponse_StopCapture>, I>,
  >(object: I): CaptureActionResponse_StopCapture {
    const message = createBaseCaptureActionResponse_StopCapture();
    message.stopCapture = object.stopCapture ?? false;
    return message;
  },
};

function createBaseSendData(): SendData {
  return {
    messageId: 0,
    workspace: undefined,
    stageDocument: undefined,
    timersDocument: undefined,
    validateEncoderRequest: undefined,
    triggerCue: undefined,
    digitalAudioSetup: undefined,
    macrosDocument: undefined,
    messageDocument: undefined,
    propDocument: undefined,
    ccliDocument: undefined,
    audienceLooks: undefined,
    liveAudienceLook: undefined,
    masks: undefined,
    recordingSettingsDocument: undefined,
    captureActionResponse: undefined,
    copyrightLayout: undefined,
  };
}

export const SendData = {
  encode(
    message: SendData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageId !== 0) {
      writer.uint32(8).int32(message.messageId);
    }
    if (message.workspace !== undefined) {
      ProPresenterWorkspace.encode(
        message.workspace,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.stageDocument !== undefined) {
      Stage_Document.encode(
        message.stageDocument,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.timersDocument !== undefined) {
      TimersDocument.encode(
        message.timersDocument,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.validateEncoderRequest !== undefined) {
      ValidateEncoderRequest.encode(
        message.validateEncoderRequest,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.triggerCue !== undefined) {
      TriggerCue.encode(message.triggerCue, writer.uint32(50).fork()).ldelim();
    }
    if (message.digitalAudioSetup !== undefined) {
      DigitalAudio_Setup.encode(
        message.digitalAudioSetup,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.macrosDocument !== undefined) {
      MacrosDocument.encode(
        message.macrosDocument,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.messageDocument !== undefined) {
      MessageDocument.encode(
        message.messageDocument,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.propDocument !== undefined) {
      PropDocument.encode(
        message.propDocument,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.ccliDocument !== undefined) {
      CCLIDocument.encode(
        message.ccliDocument,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.audienceLooks !== undefined) {
      AudienceLookCollection.encode(
        message.audienceLooks,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.liveAudienceLook !== undefined) {
      ProAudienceLook.encode(
        message.liveAudienceLook,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.masks !== undefined) {
      MaskCollection.encode(message.masks, writer.uint32(114).fork()).ldelim();
    }
    if (message.recordingSettingsDocument !== undefined) {
      Recording_SettingsDocument.encode(
        message.recordingSettingsDocument,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.captureActionResponse !== undefined) {
      CaptureActionResponse.encode(
        message.captureActionResponse,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.copyrightLayout !== undefined) {
      CopyrightLayout.encode(
        message.copyrightLayout,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.messageId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workspace = ProPresenterWorkspace.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stageDocument = Stage_Document.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timersDocument = TimersDocument.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.validateEncoderRequest = ValidateEncoderRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.triggerCue = TriggerCue.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.digitalAudioSetup = DigitalAudio_Setup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.macrosDocument = MacrosDocument.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.messageDocument = MessageDocument.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.propDocument = PropDocument.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ccliDocument = CCLIDocument.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.audienceLooks = AudienceLookCollection.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.liveAudienceLook = ProAudienceLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.masks = MaskCollection.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.recordingSettingsDocument = Recording_SettingsDocument.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.captureActionResponse = CaptureActionResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.copyrightLayout = CopyrightLayout.decode(
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

  fromJSON(object: any): SendData {
    return {
      messageId: isSet(object.messageId)
        ? globalThis.Number(object.messageId)
        : 0,
      workspace: isSet(object.workspace)
        ? ProPresenterWorkspace.fromJSON(object.workspace)
        : undefined,
      stageDocument: isSet(object.stageDocument)
        ? Stage_Document.fromJSON(object.stageDocument)
        : undefined,
      timersDocument: isSet(object.timersDocument)
        ? TimersDocument.fromJSON(object.timersDocument)
        : undefined,
      validateEncoderRequest: isSet(object.validateEncoderRequest)
        ? ValidateEncoderRequest.fromJSON(object.validateEncoderRequest)
        : undefined,
      triggerCue: isSet(object.triggerCue)
        ? TriggerCue.fromJSON(object.triggerCue)
        : undefined,
      digitalAudioSetup: isSet(object.digitalAudioSetup)
        ? DigitalAudio_Setup.fromJSON(object.digitalAudioSetup)
        : undefined,
      macrosDocument: isSet(object.macrosDocument)
        ? MacrosDocument.fromJSON(object.macrosDocument)
        : undefined,
      messageDocument: isSet(object.messageDocument)
        ? MessageDocument.fromJSON(object.messageDocument)
        : undefined,
      propDocument: isSet(object.propDocument)
        ? PropDocument.fromJSON(object.propDocument)
        : undefined,
      ccliDocument: isSet(object.ccliDocument)
        ? CCLIDocument.fromJSON(object.ccliDocument)
        : undefined,
      audienceLooks: isSet(object.audienceLooks)
        ? AudienceLookCollection.fromJSON(object.audienceLooks)
        : undefined,
      liveAudienceLook: isSet(object.liveAudienceLook)
        ? ProAudienceLook.fromJSON(object.liveAudienceLook)
        : undefined,
      masks: isSet(object.masks)
        ? MaskCollection.fromJSON(object.masks)
        : undefined,
      recordingSettingsDocument: isSet(object.recordingSettingsDocument)
        ? Recording_SettingsDocument.fromJSON(object.recordingSettingsDocument)
        : undefined,
      captureActionResponse: isSet(object.captureActionResponse)
        ? CaptureActionResponse.fromJSON(object.captureActionResponse)
        : undefined,
      copyrightLayout: isSet(object.copyrightLayout)
        ? CopyrightLayout.fromJSON(object.copyrightLayout)
        : undefined,
    };
  },

  toJSON(message: SendData): unknown {
    const obj: any = {};
    if (message.messageId !== 0) {
      obj.messageId = Math.round(message.messageId);
    }
    if (message.workspace !== undefined) {
      obj.workspace = ProPresenterWorkspace.toJSON(message.workspace);
    }
    if (message.stageDocument !== undefined) {
      obj.stageDocument = Stage_Document.toJSON(message.stageDocument);
    }
    if (message.timersDocument !== undefined) {
      obj.timersDocument = TimersDocument.toJSON(message.timersDocument);
    }
    if (message.validateEncoderRequest !== undefined) {
      obj.validateEncoderRequest = ValidateEncoderRequest.toJSON(
        message.validateEncoderRequest,
      );
    }
    if (message.triggerCue !== undefined) {
      obj.triggerCue = TriggerCue.toJSON(message.triggerCue);
    }
    if (message.digitalAudioSetup !== undefined) {
      obj.digitalAudioSetup = DigitalAudio_Setup.toJSON(
        message.digitalAudioSetup,
      );
    }
    if (message.macrosDocument !== undefined) {
      obj.macrosDocument = MacrosDocument.toJSON(message.macrosDocument);
    }
    if (message.messageDocument !== undefined) {
      obj.messageDocument = MessageDocument.toJSON(message.messageDocument);
    }
    if (message.propDocument !== undefined) {
      obj.propDocument = PropDocument.toJSON(message.propDocument);
    }
    if (message.ccliDocument !== undefined) {
      obj.ccliDocument = CCLIDocument.toJSON(message.ccliDocument);
    }
    if (message.audienceLooks !== undefined) {
      obj.audienceLooks = AudienceLookCollection.toJSON(message.audienceLooks);
    }
    if (message.liveAudienceLook !== undefined) {
      obj.liveAudienceLook = ProAudienceLook.toJSON(message.liveAudienceLook);
    }
    if (message.masks !== undefined) {
      obj.masks = MaskCollection.toJSON(message.masks);
    }
    if (message.recordingSettingsDocument !== undefined) {
      obj.recordingSettingsDocument = Recording_SettingsDocument.toJSON(
        message.recordingSettingsDocument,
      );
    }
    if (message.captureActionResponse !== undefined) {
      obj.captureActionResponse = CaptureActionResponse.toJSON(
        message.captureActionResponse,
      );
    }
    if (message.copyrightLayout !== undefined) {
      obj.copyrightLayout = CopyrightLayout.toJSON(message.copyrightLayout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendData>, I>>(base?: I): SendData {
    return SendData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendData>, I>>(object: I): SendData {
    const message = createBaseSendData();
    message.messageId = object.messageId ?? 0;
    message.workspace =
      object.workspace !== undefined && object.workspace !== null
        ? ProPresenterWorkspace.fromPartial(object.workspace)
        : undefined;
    message.stageDocument =
      object.stageDocument !== undefined && object.stageDocument !== null
        ? Stage_Document.fromPartial(object.stageDocument)
        : undefined;
    message.timersDocument =
      object.timersDocument !== undefined && object.timersDocument !== null
        ? TimersDocument.fromPartial(object.timersDocument)
        : undefined;
    message.validateEncoderRequest =
      object.validateEncoderRequest !== undefined &&
      object.validateEncoderRequest !== null
        ? ValidateEncoderRequest.fromPartial(object.validateEncoderRequest)
        : undefined;
    message.triggerCue =
      object.triggerCue !== undefined && object.triggerCue !== null
        ? TriggerCue.fromPartial(object.triggerCue)
        : undefined;
    message.digitalAudioSetup =
      object.digitalAudioSetup !== undefined &&
      object.digitalAudioSetup !== null
        ? DigitalAudio_Setup.fromPartial(object.digitalAudioSetup)
        : undefined;
    message.macrosDocument =
      object.macrosDocument !== undefined && object.macrosDocument !== null
        ? MacrosDocument.fromPartial(object.macrosDocument)
        : undefined;
    message.messageDocument =
      object.messageDocument !== undefined && object.messageDocument !== null
        ? MessageDocument.fromPartial(object.messageDocument)
        : undefined;
    message.propDocument =
      object.propDocument !== undefined && object.propDocument !== null
        ? PropDocument.fromPartial(object.propDocument)
        : undefined;
    message.ccliDocument =
      object.ccliDocument !== undefined && object.ccliDocument !== null
        ? CCLIDocument.fromPartial(object.ccliDocument)
        : undefined;
    message.audienceLooks =
      object.audienceLooks !== undefined && object.audienceLooks !== null
        ? AudienceLookCollection.fromPartial(object.audienceLooks)
        : undefined;
    message.liveAudienceLook =
      object.liveAudienceLook !== undefined && object.liveAudienceLook !== null
        ? ProAudienceLook.fromPartial(object.liveAudienceLook)
        : undefined;
    message.masks =
      object.masks !== undefined && object.masks !== null
        ? MaskCollection.fromPartial(object.masks)
        : undefined;
    message.recordingSettingsDocument =
      object.recordingSettingsDocument !== undefined &&
      object.recordingSettingsDocument !== null
        ? Recording_SettingsDocument.fromPartial(
            object.recordingSettingsDocument,
          )
        : undefined;
    message.captureActionResponse =
      object.captureActionResponse !== undefined &&
      object.captureActionResponse !== null
        ? CaptureActionResponse.fromPartial(object.captureActionResponse)
        : undefined;
    message.copyrightLayout =
      object.copyrightLayout !== undefined && object.copyrightLayout !== null
        ? CopyrightLayout.fromPartial(object.copyrightLayout)
        : undefined;
    return message;
  },
};

function createBaseTimerRuntimeState(): TimerRuntimeState {
  return {
    timerUuid: undefined,
    timerName: '',
    actionType: undefined,
    isRunning: false,
    hasOverrun: false,
    state: 0,
  };
}

export const TimerRuntimeState = {
  encode(
    message: TimerRuntimeState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerName !== '') {
      writer.uint32(18).string(message.timerName);
    }
    if (message.actionType !== undefined) {
      Action_TimerType.encode(
        message.actionType,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.isRunning === true) {
      writer.uint32(32).bool(message.isRunning);
    }
    if (message.hasOverrun === true) {
      writer.uint32(40).bool(message.hasOverrun);
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimerRuntimeState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerRuntimeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timerUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timerName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.actionType = Action_TimerType.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isRunning = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasOverrun = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimerRuntimeState {
    return {
      timerUuid: isSet(object.timerUuid)
        ? UUID.fromJSON(object.timerUuid)
        : undefined,
      timerName: isSet(object.timerName)
        ? globalThis.String(object.timerName)
        : '',
      actionType: isSet(object.actionType)
        ? Action_TimerType.fromJSON(object.actionType)
        : undefined,
      isRunning: isSet(object.isRunning)
        ? globalThis.Boolean(object.isRunning)
        : false,
      hasOverrun: isSet(object.hasOverrun)
        ? globalThis.Boolean(object.hasOverrun)
        : false,
      state: isSet(object.state)
        ? timerRuntimeState_ResourceStateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: TimerRuntimeState): unknown {
    const obj: any = {};
    if (message.timerUuid !== undefined) {
      obj.timerUuid = UUID.toJSON(message.timerUuid);
    }
    if (message.timerName !== '') {
      obj.timerName = message.timerName;
    }
    if (message.actionType !== undefined) {
      obj.actionType = Action_TimerType.toJSON(message.actionType);
    }
    if (message.isRunning === true) {
      obj.isRunning = message.isRunning;
    }
    if (message.hasOverrun === true) {
      obj.hasOverrun = message.hasOverrun;
    }
    if (message.state !== 0) {
      obj.state = timerRuntimeState_ResourceStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerRuntimeState>, I>>(
    base?: I,
  ): TimerRuntimeState {
    return TimerRuntimeState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerRuntimeState>, I>>(
    object: I,
  ): TimerRuntimeState {
    const message = createBaseTimerRuntimeState();
    message.timerUuid =
      object.timerUuid !== undefined && object.timerUuid !== null
        ? UUID.fromPartial(object.timerUuid)
        : undefined;
    message.timerName = object.timerName ?? '';
    message.actionType =
      object.actionType !== undefined && object.actionType !== null
        ? Action_TimerType.fromPartial(object.actionType)
        : undefined;
    message.isRunning = object.isRunning ?? false;
    message.hasOverrun = object.hasOverrun ?? false;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseTimerStateUpdate(): TimerStateUpdate {
  return { timer: undefined, state: undefined };
}

export const TimerStateUpdate = {
  encode(
    message: TimerStateUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      TimerRuntimeState.encode(
        message.state,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimerStateUpdate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimerStateUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = Timer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.state = TimerRuntimeState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimerStateUpdate {
    return {
      timer: isSet(object.timer) ? Timer.fromJSON(object.timer) : undefined,
      state: isSet(object.state)
        ? TimerRuntimeState.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: TimerStateUpdate): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = Timer.toJSON(message.timer);
    }
    if (message.state !== undefined) {
      obj.state = TimerRuntimeState.toJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TimerStateUpdate>, I>>(
    base?: I,
  ): TimerStateUpdate {
    return TimerStateUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TimerStateUpdate>, I>>(
    object: I,
  ): TimerStateUpdate {
    const message = createBaseTimerStateUpdate();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Timer.fromPartial(object.timer)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? TimerRuntimeState.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseSendDataResponse(): SendDataResponse {
  return {
    messageId: 0,
    validateEncoderResponse: undefined,
    timerState: undefined,
    captureActionRequest: undefined,
  };
}

export const SendDataResponse = {
  encode(
    message: SendDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messageId !== 0) {
      writer.uint32(8).int32(message.messageId);
    }
    if (message.validateEncoderResponse !== undefined) {
      ValidateEncoderResponse.encode(
        message.validateEncoderResponse,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timerState !== undefined) {
      TimerStateUpdate.encode(
        message.timerState,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.captureActionRequest !== undefined) {
      CaptureActionRequest.encode(
        message.captureActionRequest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendDataResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.messageId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validateEncoderResponse = ValidateEncoderResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timerState = TimerStateUpdate.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.captureActionRequest = CaptureActionRequest.decode(
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

  fromJSON(object: any): SendDataResponse {
    return {
      messageId: isSet(object.messageId)
        ? globalThis.Number(object.messageId)
        : 0,
      validateEncoderResponse: isSet(object.validateEncoderResponse)
        ? ValidateEncoderResponse.fromJSON(object.validateEncoderResponse)
        : undefined,
      timerState: isSet(object.timerState)
        ? TimerStateUpdate.fromJSON(object.timerState)
        : undefined,
      captureActionRequest: isSet(object.captureActionRequest)
        ? CaptureActionRequest.fromJSON(object.captureActionRequest)
        : undefined,
    };
  },

  toJSON(message: SendDataResponse): unknown {
    const obj: any = {};
    if (message.messageId !== 0) {
      obj.messageId = Math.round(message.messageId);
    }
    if (message.validateEncoderResponse !== undefined) {
      obj.validateEncoderResponse = ValidateEncoderResponse.toJSON(
        message.validateEncoderResponse,
      );
    }
    if (message.timerState !== undefined) {
      obj.timerState = TimerStateUpdate.toJSON(message.timerState);
    }
    if (message.captureActionRequest !== undefined) {
      obj.captureActionRequest = CaptureActionRequest.toJSON(
        message.captureActionRequest,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SendDataResponse>, I>>(
    base?: I,
  ): SendDataResponse {
    return SendDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SendDataResponse>, I>>(
    object: I,
  ): SendDataResponse {
    const message = createBaseSendDataResponse();
    message.messageId = object.messageId ?? 0;
    message.validateEncoderResponse =
      object.validateEncoderResponse !== undefined &&
      object.validateEncoderResponse !== null
        ? ValidateEncoderResponse.fromPartial(object.validateEncoderResponse)
        : undefined;
    message.timerState =
      object.timerState !== undefined && object.timerState !== null
        ? TimerStateUpdate.fromPartial(object.timerState)
        : undefined;
    message.captureActionRequest =
      object.captureActionRequest !== undefined &&
      object.captureActionRequest !== null
        ? CaptureActionRequest.fromPartial(object.captureActionRequest)
        : undefined;
    return message;
  },
};

function createBaseTriggerTransferRenderState(): TriggerTransferRenderState {
  return {
    slide: undefined,
    stageMessage: '',
    presentationMedia: undefined,
    announcementMedia: undefined,
    audioMedia: undefined,
    liveVideoMedia: undefined,
    presentation: undefined,
    announcement: undefined,
    timers: [],
    capture: undefined,
    timecode: undefined,
    systemTime: 0,
  };
}

export const TriggerTransferRenderState = {
  encode(
    message: TriggerTransferRenderState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slide !== undefined) {
      Slide.encode(message.slide, writer.uint32(10).fork()).ldelim();
    }
    if (message.stageMessage !== '') {
      writer.uint32(18).string(message.stageMessage);
    }
    if (message.presentationMedia !== undefined) {
      TriggerTransferRenderState_MediaState.encode(
        message.presentationMedia,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.announcementMedia !== undefined) {
      TriggerTransferRenderState_MediaState.encode(
        message.announcementMedia,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.audioMedia !== undefined) {
      TriggerTransferRenderState_MediaState.encode(
        message.audioMedia,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.liveVideoMedia !== undefined) {
      Media.encode(message.liveVideoMedia, writer.uint32(50).fork()).ldelim();
    }
    if (message.presentation !== undefined) {
      TriggerTransferRenderState_SlideState.encode(
        message.presentation,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.announcement !== undefined) {
      TriggerTransferRenderState_SlideState.encode(
        message.announcement,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    for (const v of message.timers) {
      TriggerTransferRenderState_TimerState.encode(
        v!,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.capture !== undefined) {
      TriggerTransferRenderState_CaptureState.encode(
        message.capture,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.timecode !== undefined) {
      TriggerTransferRenderState_TimecodeState.encode(
        message.timecode,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.systemTime !== 0) {
      writer.uint32(96).uint64(message.systemTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slide = Slide.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stageMessage = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.presentationMedia =
            TriggerTransferRenderState_MediaState.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.announcementMedia =
            TriggerTransferRenderState_MediaState.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.audioMedia = TriggerTransferRenderState_MediaState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.liveVideoMedia = Media.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.presentation = TriggerTransferRenderState_SlideState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.announcement = TriggerTransferRenderState_SlideState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.timers.push(
            TriggerTransferRenderState_TimerState.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.capture = TriggerTransferRenderState_CaptureState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.timecode = TriggerTransferRenderState_TimecodeState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.systemTime = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState {
    return {
      slide: isSet(object.slide) ? Slide.fromJSON(object.slide) : undefined,
      stageMessage: isSet(object.stageMessage)
        ? globalThis.String(object.stageMessage)
        : '',
      presentationMedia: isSet(object.presentationMedia)
        ? TriggerTransferRenderState_MediaState.fromJSON(
            object.presentationMedia,
          )
        : undefined,
      announcementMedia: isSet(object.announcementMedia)
        ? TriggerTransferRenderState_MediaState.fromJSON(
            object.announcementMedia,
          )
        : undefined,
      audioMedia: isSet(object.audioMedia)
        ? TriggerTransferRenderState_MediaState.fromJSON(object.audioMedia)
        : undefined,
      liveVideoMedia: isSet(object.liveVideoMedia)
        ? Media.fromJSON(object.liveVideoMedia)
        : undefined,
      presentation: isSet(object.presentation)
        ? TriggerTransferRenderState_SlideState.fromJSON(object.presentation)
        : undefined,
      announcement: isSet(object.announcement)
        ? TriggerTransferRenderState_SlideState.fromJSON(object.announcement)
        : undefined,
      timers: globalThis.Array.isArray(object?.timers)
        ? object.timers.map((e: any) =>
            TriggerTransferRenderState_TimerState.fromJSON(e),
          )
        : [],
      capture: isSet(object.capture)
        ? TriggerTransferRenderState_CaptureState.fromJSON(object.capture)
        : undefined,
      timecode: isSet(object.timecode)
        ? TriggerTransferRenderState_TimecodeState.fromJSON(object.timecode)
        : undefined,
      systemTime: isSet(object.systemTime)
        ? globalThis.Number(object.systemTime)
        : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState): unknown {
    const obj: any = {};
    if (message.slide !== undefined) {
      obj.slide = Slide.toJSON(message.slide);
    }
    if (message.stageMessage !== '') {
      obj.stageMessage = message.stageMessage;
    }
    if (message.presentationMedia !== undefined) {
      obj.presentationMedia = TriggerTransferRenderState_MediaState.toJSON(
        message.presentationMedia,
      );
    }
    if (message.announcementMedia !== undefined) {
      obj.announcementMedia = TriggerTransferRenderState_MediaState.toJSON(
        message.announcementMedia,
      );
    }
    if (message.audioMedia !== undefined) {
      obj.audioMedia = TriggerTransferRenderState_MediaState.toJSON(
        message.audioMedia,
      );
    }
    if (message.liveVideoMedia !== undefined) {
      obj.liveVideoMedia = Media.toJSON(message.liveVideoMedia);
    }
    if (message.presentation !== undefined) {
      obj.presentation = TriggerTransferRenderState_SlideState.toJSON(
        message.presentation,
      );
    }
    if (message.announcement !== undefined) {
      obj.announcement = TriggerTransferRenderState_SlideState.toJSON(
        message.announcement,
      );
    }
    if (message.timers?.length) {
      obj.timers = message.timers.map((e) =>
        TriggerTransferRenderState_TimerState.toJSON(e),
      );
    }
    if (message.capture !== undefined) {
      obj.capture = TriggerTransferRenderState_CaptureState.toJSON(
        message.capture,
      );
    }
    if (message.timecode !== undefined) {
      obj.timecode = TriggerTransferRenderState_TimecodeState.toJSON(
        message.timecode,
      );
    }
    if (message.systemTime !== 0) {
      obj.systemTime = Math.round(message.systemTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TriggerTransferRenderState>, I>>(
    base?: I,
  ): TriggerTransferRenderState {
    return TriggerTransferRenderState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TriggerTransferRenderState>, I>>(
    object: I,
  ): TriggerTransferRenderState {
    const message = createBaseTriggerTransferRenderState();
    message.slide =
      object.slide !== undefined && object.slide !== null
        ? Slide.fromPartial(object.slide)
        : undefined;
    message.stageMessage = object.stageMessage ?? '';
    message.presentationMedia =
      object.presentationMedia !== undefined &&
      object.presentationMedia !== null
        ? TriggerTransferRenderState_MediaState.fromPartial(
            object.presentationMedia,
          )
        : undefined;
    message.announcementMedia =
      object.announcementMedia !== undefined &&
      object.announcementMedia !== null
        ? TriggerTransferRenderState_MediaState.fromPartial(
            object.announcementMedia,
          )
        : undefined;
    message.audioMedia =
      object.audioMedia !== undefined && object.audioMedia !== null
        ? TriggerTransferRenderState_MediaState.fromPartial(object.audioMedia)
        : undefined;
    message.liveVideoMedia =
      object.liveVideoMedia !== undefined && object.liveVideoMedia !== null
        ? Media.fromPartial(object.liveVideoMedia)
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? TriggerTransferRenderState_SlideState.fromPartial(object.presentation)
        : undefined;
    message.announcement =
      object.announcement !== undefined && object.announcement !== null
        ? TriggerTransferRenderState_SlideState.fromPartial(object.announcement)
        : undefined;
    message.timers =
      object.timers?.map((e) =>
        TriggerTransferRenderState_TimerState.fromPartial(e),
      ) || [];
    message.capture =
      object.capture !== undefined && object.capture !== null
        ? TriggerTransferRenderState_CaptureState.fromPartial(object.capture)
        : undefined;
    message.timecode =
      object.timecode !== undefined && object.timecode !== null
        ? TriggerTransferRenderState_TimecodeState.fromPartial(object.timecode)
        : undefined;
    message.systemTime = object.systemTime ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_TimerState(): TriggerTransferRenderState_TimerState {
  return { timer: undefined, isRunning: false, hasOverrun: false, value: 0 };
}

export const TriggerTransferRenderState_TimerState = {
  encode(
    message: TriggerTransferRenderState_TimerState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timer !== undefined) {
      Timer.encode(message.timer, writer.uint32(10).fork()).ldelim();
    }
    if (message.isRunning === true) {
      writer.uint32(16).bool(message.isRunning);
    }
    if (message.hasOverrun === true) {
      writer.uint32(24).bool(message.hasOverrun);
    }
    if (message.value !== 0) {
      writer.uint32(37).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_TimerState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_TimerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timer = Timer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isRunning = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasOverrun = reader.bool();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.value = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_TimerState {
    return {
      timer: isSet(object.timer) ? Timer.fromJSON(object.timer) : undefined,
      isRunning: isSet(object.isRunning)
        ? globalThis.Boolean(object.isRunning)
        : false,
      hasOverrun: isSet(object.hasOverrun)
        ? globalThis.Boolean(object.hasOverrun)
        : false,
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_TimerState): unknown {
    const obj: any = {};
    if (message.timer !== undefined) {
      obj.timer = Timer.toJSON(message.timer);
    }
    if (message.isRunning === true) {
      obj.isRunning = message.isRunning;
    }
    if (message.hasOverrun === true) {
      obj.hasOverrun = message.hasOverrun;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimerState>, I>,
  >(base?: I): TriggerTransferRenderState_TimerState {
    return TriggerTransferRenderState_TimerState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimerState>, I>,
  >(object: I): TriggerTransferRenderState_TimerState {
    const message = createBaseTriggerTransferRenderState_TimerState();
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Timer.fromPartial(object.timer)
        : undefined;
    message.isRunning = object.isRunning ?? false;
    message.hasOverrun = object.hasOverrun ?? false;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_MediaState(): TriggerTransferRenderState_MediaState {
  return {
    currentMedia: undefined,
    isPlaying: false,
    isLooping: false,
    currentTime: 0,
    timeRemaining: 0,
    playlistUuid: undefined,
    playlistName: '',
    markers: [],
  };
}

export const TriggerTransferRenderState_MediaState = {
  encode(
    message: TriggerTransferRenderState_MediaState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.currentMedia !== undefined) {
      Media.encode(message.currentMedia, writer.uint32(10).fork()).ldelim();
    }
    if (message.isPlaying === true) {
      writer.uint32(16).bool(message.isPlaying);
    }
    if (message.isLooping === true) {
      writer.uint32(24).bool(message.isLooping);
    }
    if (message.currentTime !== 0) {
      writer.uint32(37).float(message.currentTime);
    }
    if (message.timeRemaining !== 0) {
      writer.uint32(45).float(message.timeRemaining);
    }
    if (message.playlistUuid !== undefined) {
      UUID.encode(message.playlistUuid, writer.uint32(50).fork()).ldelim();
    }
    if (message.playlistName !== '') {
      writer.uint32(58).string(message.playlistName);
    }
    for (const v of message.markers) {
      Action_MediaType_PlaybackMarker.encode(
        v!,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_MediaState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_MediaState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currentMedia = Media.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isPlaying = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isLooping = reader.bool();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.currentTime = reader.float();
          continue;
        case 5:
          if (tag !== 45) {
            break;
          }

          message.timeRemaining = reader.float();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.playlistUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.playlistName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.markers.push(
            Action_MediaType_PlaybackMarker.decode(reader, reader.uint32()),
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

  fromJSON(object: any): TriggerTransferRenderState_MediaState {
    return {
      currentMedia: isSet(object.currentMedia)
        ? Media.fromJSON(object.currentMedia)
        : undefined,
      isPlaying: isSet(object.isPlaying)
        ? globalThis.Boolean(object.isPlaying)
        : false,
      isLooping: isSet(object.isLooping)
        ? globalThis.Boolean(object.isLooping)
        : false,
      currentTime: isSet(object.currentTime)
        ? globalThis.Number(object.currentTime)
        : 0,
      timeRemaining: isSet(object.timeRemaining)
        ? globalThis.Number(object.timeRemaining)
        : 0,
      playlistUuid: isSet(object.playlistUuid)
        ? UUID.fromJSON(object.playlistUuid)
        : undefined,
      playlistName: isSet(object.playlistName)
        ? globalThis.String(object.playlistName)
        : '',
      markers: globalThis.Array.isArray(object?.markers)
        ? object.markers.map((e: any) =>
            Action_MediaType_PlaybackMarker.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TriggerTransferRenderState_MediaState): unknown {
    const obj: any = {};
    if (message.currentMedia !== undefined) {
      obj.currentMedia = Media.toJSON(message.currentMedia);
    }
    if (message.isPlaying === true) {
      obj.isPlaying = message.isPlaying;
    }
    if (message.isLooping === true) {
      obj.isLooping = message.isLooping;
    }
    if (message.currentTime !== 0) {
      obj.currentTime = message.currentTime;
    }
    if (message.timeRemaining !== 0) {
      obj.timeRemaining = message.timeRemaining;
    }
    if (message.playlistUuid !== undefined) {
      obj.playlistUuid = UUID.toJSON(message.playlistUuid);
    }
    if (message.playlistName !== '') {
      obj.playlistName = message.playlistName;
    }
    if (message.markers?.length) {
      obj.markers = message.markers.map((e) =>
        Action_MediaType_PlaybackMarker.toJSON(e),
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_MediaState>, I>,
  >(base?: I): TriggerTransferRenderState_MediaState {
    return TriggerTransferRenderState_MediaState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_MediaState>, I>,
  >(object: I): TriggerTransferRenderState_MediaState {
    const message = createBaseTriggerTransferRenderState_MediaState();
    message.currentMedia =
      object.currentMedia !== undefined && object.currentMedia !== null
        ? Media.fromPartial(object.currentMedia)
        : undefined;
    message.isPlaying = object.isPlaying ?? false;
    message.isLooping = object.isLooping ?? false;
    message.currentTime = object.currentTime ?? 0;
    message.timeRemaining = object.timeRemaining ?? 0;
    message.playlistUuid =
      object.playlistUuid !== undefined && object.playlistUuid !== null
        ? UUID.fromPartial(object.playlistUuid)
        : undefined;
    message.playlistName = object.playlistName ?? '';
    message.markers =
      object.markers?.map((e) =>
        Action_MediaType_PlaybackMarker.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseTriggerTransferRenderState_CaptureState(): TriggerTransferRenderState_CaptureState {
  return { status: 0, time: 0 };
}

export const TriggerTransferRenderState_CaptureState = {
  encode(
    message: TriggerTransferRenderState_CaptureState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.time !== 0) {
      writer.uint32(21).float(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_CaptureState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_CaptureState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.time = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_CaptureState {
    return {
      status: isSet(object.status)
        ? triggerTransferRenderState_CaptureState_StatusFromJSON(object.status)
        : 0,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_CaptureState): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = triggerTransferRenderState_CaptureState_StatusToJSON(
        message.status,
      );
    }
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_CaptureState>, I>,
  >(base?: I): TriggerTransferRenderState_CaptureState {
    return TriggerTransferRenderState_CaptureState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_CaptureState>, I>,
  >(object: I): TriggerTransferRenderState_CaptureState {
    const message = createBaseTriggerTransferRenderState_CaptureState();
    message.status = object.status ?? 0;
    message.time = object.time ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_AutoAdvanceState(): TriggerTransferRenderState_AutoAdvanceState {
  return { active: false, remainingTime: 0 };
}

export const TriggerTransferRenderState_AutoAdvanceState = {
  encode(
    message: TriggerTransferRenderState_AutoAdvanceState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.remainingTime !== 0) {
      writer.uint32(21).float(message.remainingTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_AutoAdvanceState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_AutoAdvanceState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.remainingTime = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_AutoAdvanceState {
    return {
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      remainingTime: isSet(object.remainingTime)
        ? globalThis.Number(object.remainingTime)
        : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_AutoAdvanceState): unknown {
    const obj: any = {};
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.remainingTime !== 0) {
      obj.remainingTime = message.remainingTime;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TriggerTransferRenderState_AutoAdvanceState>,
      I
    >,
  >(base?: I): TriggerTransferRenderState_AutoAdvanceState {
    return TriggerTransferRenderState_AutoAdvanceState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TriggerTransferRenderState_AutoAdvanceState>,
      I
    >,
  >(object: I): TriggerTransferRenderState_AutoAdvanceState {
    const message = createBaseTriggerTransferRenderState_AutoAdvanceState();
    message.active = object.active ?? false;
    message.remainingTime = object.remainingTime ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_TimelineState(): TriggerTransferRenderState_TimelineState {
  return { active: false, currentTime: 0, lastSlideIndex: 0 };
}

export const TriggerTransferRenderState_TimelineState = {
  encode(
    message: TriggerTransferRenderState_TimelineState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.currentTime !== 0) {
      writer.uint32(21).float(message.currentTime);
    }
    if (message.lastSlideIndex !== 0) {
      writer.uint32(24).int32(message.lastSlideIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_TimelineState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_TimelineState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.bool();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.currentTime = reader.float();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lastSlideIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_TimelineState {
    return {
      active: isSet(object.active) ? globalThis.Boolean(object.active) : false,
      currentTime: isSet(object.currentTime)
        ? globalThis.Number(object.currentTime)
        : 0,
      lastSlideIndex: isSet(object.lastSlideIndex)
        ? globalThis.Number(object.lastSlideIndex)
        : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_TimelineState): unknown {
    const obj: any = {};
    if (message.active === true) {
      obj.active = message.active;
    }
    if (message.currentTime !== 0) {
      obj.currentTime = message.currentTime;
    }
    if (message.lastSlideIndex !== 0) {
      obj.lastSlideIndex = Math.round(message.lastSlideIndex);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimelineState>, I>,
  >(base?: I): TriggerTransferRenderState_TimelineState {
    return TriggerTransferRenderState_TimelineState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimelineState>, I>,
  >(object: I): TriggerTransferRenderState_TimelineState {
    const message = createBaseTriggerTransferRenderState_TimelineState();
    message.active = object.active ?? false;
    message.currentTime = object.currentTime ?? 0;
    message.lastSlideIndex = object.lastSlideIndex ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_SlideState(): TriggerTransferRenderState_SlideState {
  return {
    presentation: undefined,
    playlistUuid: undefined,
    playlistName: '',
    currentCue: undefined,
    nextCue: undefined,
    autoAdvance: undefined,
    timelineState: undefined,
    currentCueIndex: 0,
  };
}

export const TriggerTransferRenderState_SlideState = {
  encode(
    message: TriggerTransferRenderState_SlideState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      Presentation.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlistUuid !== undefined) {
      UUID.encode(message.playlistUuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.playlistName !== '') {
      writer.uint32(26).string(message.playlistName);
    }
    if (message.currentCue !== undefined) {
      UUID.encode(message.currentCue, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextCue !== undefined) {
      UUID.encode(message.nextCue, writer.uint32(42).fork()).ldelim();
    }
    if (message.autoAdvance !== undefined) {
      TriggerTransferRenderState_AutoAdvanceState.encode(
        message.autoAdvance,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.timelineState !== undefined) {
      TriggerTransferRenderState_TimelineState.encode(
        message.timelineState,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.currentCueIndex !== 0) {
      writer.uint32(64).int32(message.currentCueIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_SlideState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_SlideState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentation = Presentation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlistUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playlistName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.currentCue = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nextCue = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.autoAdvance =
            TriggerTransferRenderState_AutoAdvanceState.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.timelineState =
            TriggerTransferRenderState_TimelineState.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.currentCueIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_SlideState {
    return {
      presentation: isSet(object.presentation)
        ? Presentation.fromJSON(object.presentation)
        : undefined,
      playlistUuid: isSet(object.playlistUuid)
        ? UUID.fromJSON(object.playlistUuid)
        : undefined,
      playlistName: isSet(object.playlistName)
        ? globalThis.String(object.playlistName)
        : '',
      currentCue: isSet(object.currentCue)
        ? UUID.fromJSON(object.currentCue)
        : undefined,
      nextCue: isSet(object.nextCue)
        ? UUID.fromJSON(object.nextCue)
        : undefined,
      autoAdvance: isSet(object.autoAdvance)
        ? TriggerTransferRenderState_AutoAdvanceState.fromJSON(
            object.autoAdvance,
          )
        : undefined,
      timelineState: isSet(object.timelineState)
        ? TriggerTransferRenderState_TimelineState.fromJSON(
            object.timelineState,
          )
        : undefined,
      currentCueIndex: isSet(object.currentCueIndex)
        ? globalThis.Number(object.currentCueIndex)
        : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_SlideState): unknown {
    const obj: any = {};
    if (message.presentation !== undefined) {
      obj.presentation = Presentation.toJSON(message.presentation);
    }
    if (message.playlistUuid !== undefined) {
      obj.playlistUuid = UUID.toJSON(message.playlistUuid);
    }
    if (message.playlistName !== '') {
      obj.playlistName = message.playlistName;
    }
    if (message.currentCue !== undefined) {
      obj.currentCue = UUID.toJSON(message.currentCue);
    }
    if (message.nextCue !== undefined) {
      obj.nextCue = UUID.toJSON(message.nextCue);
    }
    if (message.autoAdvance !== undefined) {
      obj.autoAdvance = TriggerTransferRenderState_AutoAdvanceState.toJSON(
        message.autoAdvance,
      );
    }
    if (message.timelineState !== undefined) {
      obj.timelineState = TriggerTransferRenderState_TimelineState.toJSON(
        message.timelineState,
      );
    }
    if (message.currentCueIndex !== 0) {
      obj.currentCueIndex = Math.round(message.currentCueIndex);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_SlideState>, I>,
  >(base?: I): TriggerTransferRenderState_SlideState {
    return TriggerTransferRenderState_SlideState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_SlideState>, I>,
  >(object: I): TriggerTransferRenderState_SlideState {
    const message = createBaseTriggerTransferRenderState_SlideState();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? Presentation.fromPartial(object.presentation)
        : undefined;
    message.playlistUuid =
      object.playlistUuid !== undefined && object.playlistUuid !== null
        ? UUID.fromPartial(object.playlistUuid)
        : undefined;
    message.playlistName = object.playlistName ?? '';
    message.currentCue =
      object.currentCue !== undefined && object.currentCue !== null
        ? UUID.fromPartial(object.currentCue)
        : undefined;
    message.nextCue =
      object.nextCue !== undefined && object.nextCue !== null
        ? UUID.fromPartial(object.nextCue)
        : undefined;
    message.autoAdvance =
      object.autoAdvance !== undefined && object.autoAdvance !== null
        ? TriggerTransferRenderState_AutoAdvanceState.fromPartial(
            object.autoAdvance,
          )
        : undefined;
    message.timelineState =
      object.timelineState !== undefined && object.timelineState !== null
        ? TriggerTransferRenderState_TimelineState.fromPartial(
            object.timelineState,
          )
        : undefined;
    message.currentCueIndex = object.currentCueIndex ?? 0;
    return message;
  },
};

function createBaseTriggerTransferRenderState_TimecodeState(): TriggerTransferRenderState_TimecodeState {
  return { status: 0, time: 0 };
}

export const TriggerTransferRenderState_TimecodeState = {
  encode(
    message: TriggerTransferRenderState_TimecodeState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.time !== 0) {
      writer.uint32(21).float(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TriggerTransferRenderState_TimecodeState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerTransferRenderState_TimecodeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.time = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TriggerTransferRenderState_TimecodeState {
    return {
      status: isSet(object.status)
        ? triggerTransferRenderState_TimecodeState_StatusFromJSON(object.status)
        : 0,
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
    };
  },

  toJSON(message: TriggerTransferRenderState_TimecodeState): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = triggerTransferRenderState_TimecodeState_StatusToJSON(
        message.status,
      );
    }
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimecodeState>, I>,
  >(base?: I): TriggerTransferRenderState_TimecodeState {
    return TriggerTransferRenderState_TimecodeState.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TriggerTransferRenderState_TimecodeState>, I>,
  >(object: I): TriggerTransferRenderState_TimecodeState {
    const message = createBaseTriggerTransferRenderState_TimecodeState();
    message.status = object.status ?? 0;
    message.time = object.time ?? 0;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
