/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { AlignmentGuide } from './alignmentGuide';
import { Color } from './color';
import { Transition } from './effects';
import { Graphics_Element, Graphics_Size } from './graphicsData';
import { Clock_Format, Timer_Format } from './timers';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Slide {
  elements: Slide_Element[];
  elementBuildOrder: UUID[];
  guidelines: AlignmentGuide[];
  drawsBackgroundColor: boolean;
  backgroundColor: Color | undefined;
  size: Graphics_Size | undefined;
  uuid: UUID | undefined;
}

export interface Slide_Element {
  element: Graphics_Element | undefined;
  buildIn: Slide_Element_Build | undefined;
  buildOut: Slide_Element_Build | undefined;
  info: number;
  revealType: Slide_Element_TextRevealType;
  dataLinks: Slide_Element_DataLink[];
  childBuilds: Slide_Element_ChildBuild[];
  revealFromIndex: number;
  textScroller: Slide_Element_TextScroller | undefined;
}

export enum Slide_Element_TextRevealType {
  TEXT_REVEAL_TYPE_NONE = 0,
  TEXT_REVEAL_TYPE_BULLET = 1,
  TEXT_REVEAL_TYPE_UNDERLINE = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_TextRevealTypeFromJSON(
  object: any,
): Slide_Element_TextRevealType {
  switch (object) {
    case 0:
    case 'TEXT_REVEAL_TYPE_NONE':
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_NONE;
    case 1:
    case 'TEXT_REVEAL_TYPE_BULLET':
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_BULLET;
    case 2:
    case 'TEXT_REVEAL_TYPE_UNDERLINE':
      return Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_UNDERLINE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_TextRevealType.UNRECOGNIZED;
  }
}

export function slide_Element_TextRevealTypeToJSON(
  object: Slide_Element_TextRevealType,
): string {
  switch (object) {
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_NONE:
      return 'TEXT_REVEAL_TYPE_NONE';
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_BULLET:
      return 'TEXT_REVEAL_TYPE_BULLET';
    case Slide_Element_TextRevealType.TEXT_REVEAL_TYPE_UNDERLINE:
      return 'TEXT_REVEAL_TYPE_UNDERLINE';
    case Slide_Element_TextRevealType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Slide_Element_Info {
  INFO_NONE = 0,
  INFO_IS_TEMPLATE_ELEMENT = 1,
  INFO_IS_TEXT_ELEMENT = 2,
  INFO_IS_TEXT_TICKER = 4,
  UNRECOGNIZED = -1,
}

export function slide_Element_InfoFromJSON(object: any): Slide_Element_Info {
  switch (object) {
    case 0:
    case 'INFO_NONE':
      return Slide_Element_Info.INFO_NONE;
    case 1:
    case 'INFO_IS_TEMPLATE_ELEMENT':
      return Slide_Element_Info.INFO_IS_TEMPLATE_ELEMENT;
    case 2:
    case 'INFO_IS_TEXT_ELEMENT':
      return Slide_Element_Info.INFO_IS_TEXT_ELEMENT;
    case 4:
    case 'INFO_IS_TEXT_TICKER':
      return Slide_Element_Info.INFO_IS_TEXT_TICKER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_Info.UNRECOGNIZED;
  }
}

export function slide_Element_InfoToJSON(object: Slide_Element_Info): string {
  switch (object) {
    case Slide_Element_Info.INFO_NONE:
      return 'INFO_NONE';
    case Slide_Element_Info.INFO_IS_TEMPLATE_ELEMENT:
      return 'INFO_IS_TEMPLATE_ELEMENT';
    case Slide_Element_Info.INFO_IS_TEXT_ELEMENT:
      return 'INFO_IS_TEXT_ELEMENT';
    case Slide_Element_Info.INFO_IS_TEXT_TICKER:
      return 'INFO_IS_TEXT_TICKER';
    case Slide_Element_Info.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_Build {
  uuid: UUID | undefined;
  elementUUID: UUID | undefined;
  start: Slide_Element_Build_Start;
  delayTime: number;
  transition: Transition | undefined;
}

export enum Slide_Element_Build_Start {
  START_ON_CLICK = 0,
  START_WITH_PREVIOUS = 1,
  START_AFTER_PREVIOUS = 2,
  START_WITH_SLIDE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_Build_StartFromJSON(
  object: any,
): Slide_Element_Build_Start {
  switch (object) {
    case 0:
    case 'START_ON_CLICK':
      return Slide_Element_Build_Start.START_ON_CLICK;
    case 1:
    case 'START_WITH_PREVIOUS':
      return Slide_Element_Build_Start.START_WITH_PREVIOUS;
    case 2:
    case 'START_AFTER_PREVIOUS':
      return Slide_Element_Build_Start.START_AFTER_PREVIOUS;
    case 3:
    case 'START_WITH_SLIDE':
      return Slide_Element_Build_Start.START_WITH_SLIDE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_Build_Start.UNRECOGNIZED;
  }
}

export function slide_Element_Build_StartToJSON(
  object: Slide_Element_Build_Start,
): string {
  switch (object) {
    case Slide_Element_Build_Start.START_ON_CLICK:
      return 'START_ON_CLICK';
    case Slide_Element_Build_Start.START_WITH_PREVIOUS:
      return 'START_WITH_PREVIOUS';
    case Slide_Element_Build_Start.START_AFTER_PREVIOUS:
      return 'START_AFTER_PREVIOUS';
    case Slide_Element_Build_Start.START_WITH_SLIDE:
      return 'START_WITH_SLIDE';
    case Slide_Element_Build_Start.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_ChildBuild {
  uuid: UUID | undefined;
  start: Slide_Element_Build_Start;
  delayTime: number;
  index: number;
}

export interface Slide_Element_DataLink {
  ticker?: Slide_Element_DataLink_Ticker | undefined;
  alternateText?: Slide_Element_DataLink_AlternateElementText | undefined;
  timerText?: Slide_Element_DataLink_TimerText | undefined;
  clockText?: Slide_Element_DataLink_ClockText | undefined;
  chordChart?: Slide_Element_DataLink_ChordChart | undefined;
  outputScreen?: Slide_Element_DataLink_OutputScreen | undefined;
  pcoLive?: Slide_Element_DataLink_PCOLive | undefined;
  alternateFill?: Slide_Element_DataLink_AlternateElementFill | undefined;
  visibilityLink?: Slide_Element_DataLink_VisibilityLink | undefined;
  slideText?: Slide_Element_DataLink_SlideText | undefined;
  stageMessage?: Slide_Element_DataLink_StageMessage | undefined;
  videoCountdown?: Slide_Element_DataLink_VideoCountdown | undefined;
  slideImage?: Slide_Element_DataLink_SlideImage | undefined;
  ccliText?: Slide_Element_DataLink_CCLIText | undefined;
  groupName?: Slide_Element_DataLink_GroupName | undefined;
  groupColor?: Slide_Element_DataLink_GroupColor | undefined;
  presentationNotes?: Slide_Element_DataLink_PresentationNotes | undefined;
  playlistItem?: Slide_Element_DataLink_PlaylistItem | undefined;
  autoAdvanceTimeRemaining?:
    | Slide_Element_DataLink_AutoAdvanceTimeRemaining
    | undefined;
  captureStatusText?: Slide_Element_DataLink_CaptureStatusText | undefined;
  captureStatusColor?: Slide_Element_DataLink_CaptureStatusColor | undefined;
  slideCount?: Slide_Element_DataLink_SlideCount | undefined;
  audioCountdown?: Slide_Element_DataLink_AudioCountdown | undefined;
  presentation?: Slide_Element_DataLink_Presentation | undefined;
  slideLabelText?: Slide_Element_DataLink_SlideLabelText | undefined;
  slideLabelColor?: Slide_Element_DataLink_SlideLabelColor | undefined;
  rssFeed?: Slide_Element_DataLink_RSSFeed | undefined;
  fileFeed?: Slide_Element_DataLink_FileFeed | undefined;
  chordProChart?: Slide_Element_DataLink_ChordProChart | undefined;
  playbackMarkerText?: Slide_Element_DataLink_PlaybackMarkerText | undefined;
  playbackMarkerColor?:
    | Slide_Element_DataLink_PlaybackMarkerIdentifier
    | undefined;
  timecodeText?: Slide_Element_DataLink_TimecodeText | undefined;
  timecodeStatus?: Slide_Element_DataLink_TimecodeStatus | undefined;
}

export enum Slide_Element_DataLink_SlideSourceType {
  SLIDE_SOURCE_TYPE_CURRENT_SLIDE = 0,
  SLIDE_SOURCE_TYPE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_SlideSourceType {
  switch (object) {
    case 0:
    case 'SLIDE_SOURCE_TYPE_CURRENT_SLIDE':
      return Slide_Element_DataLink_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case 'SLIDE_SOURCE_TYPE_NEXT_SLIDE':
      return Slide_Element_DataLink_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_SlideSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideSourceTypeToJSON(
  object: Slide_Element_DataLink_SlideSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideSourceType.SLIDE_SOURCE_TYPE_CURRENT_SLIDE:
      return 'SLIDE_SOURCE_TYPE_CURRENT_SLIDE';
    case Slide_Element_DataLink_SlideSourceType.SLIDE_SOURCE_TYPE_NEXT_SLIDE:
      return 'SLIDE_SOURCE_TYPE_NEXT_SLIDE';
    case Slide_Element_DataLink_SlideSourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Slide_Element_DataLink_GroupSourceType {
  GROUP_SOURCE_TYPE_CURRENT_SLIDE = 0,
  GROUP_SOURCE_TYPE_NEXT_SLIDE = 1,
  GROUP_SOURCE_TYPE_NEXT_GROUP = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_GroupSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_GroupSourceType {
  switch (object) {
    case 0:
    case 'GROUP_SOURCE_TYPE_CURRENT_SLIDE':
      return Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE;
    case 1:
    case 'GROUP_SOURCE_TYPE_NEXT_SLIDE':
      return Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE;
    case 2:
    case 'GROUP_SOURCE_TYPE_NEXT_GROUP':
      return Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_GroupSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_GroupSourceTypeToJSON(
  object: Slide_Element_DataLink_GroupSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_CURRENT_SLIDE:
      return 'GROUP_SOURCE_TYPE_CURRENT_SLIDE';
    case Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_SLIDE:
      return 'GROUP_SOURCE_TYPE_NEXT_SLIDE';
    case Slide_Element_DataLink_GroupSourceType.GROUP_SOURCE_TYPE_NEXT_GROUP:
      return 'GROUP_SOURCE_TYPE_NEXT_GROUP';
    case Slide_Element_DataLink_GroupSourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Slide_Element_DataLink_SlideLabelSource {
  SLIDE_LABEL_SOURCE_CURRENT_SLIDE = 0,
  SLIDE_LABEL_SOURCE_NEXT_SLIDE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideLabelSourceFromJSON(
  object: any,
): Slide_Element_DataLink_SlideLabelSource {
  switch (object) {
    case 0:
    case 'SLIDE_LABEL_SOURCE_CURRENT_SLIDE':
      return Slide_Element_DataLink_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE;
    case 1:
    case 'SLIDE_LABEL_SOURCE_NEXT_SLIDE':
      return Slide_Element_DataLink_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_SlideLabelSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideLabelSourceToJSON(
  object: Slide_Element_DataLink_SlideLabelSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideLabelSource.SLIDE_LABEL_SOURCE_CURRENT_SLIDE:
      return 'SLIDE_LABEL_SOURCE_CURRENT_SLIDE';
    case Slide_Element_DataLink_SlideLabelSource.SLIDE_LABEL_SOURCE_NEXT_SLIDE:
      return 'SLIDE_LABEL_SOURCE_NEXT_SLIDE';
    case Slide_Element_DataLink_SlideLabelSource.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_RSSFeed {
  url: URL | undefined;
  content: Slide_Element_DataLink_RSSFeed_ContentType;
  textDelimiter: string;
}

export enum Slide_Element_DataLink_RSSFeed_ContentType {
  CONTENT_TYPE_TITLE_ONLY = 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_RSSFeed_ContentTypeFromJSON(
  object: any,
): Slide_Element_DataLink_RSSFeed_ContentType {
  switch (object) {
    case 0:
    case 'CONTENT_TYPE_TITLE_ONLY':
      return Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_ONLY;
    case 1:
    case 'CONTENT_TYPE_TITLE_AND_DESCRIPTION':
      return Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_RSSFeed_ContentType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_RSSFeed_ContentTypeToJSON(
  object: Slide_Element_DataLink_RSSFeed_ContentType,
): string {
  switch (object) {
    case Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_ONLY:
      return 'CONTENT_TYPE_TITLE_ONLY';
    case Slide_Element_DataLink_RSSFeed_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION:
      return 'CONTENT_TYPE_TITLE_AND_DESCRIPTION';
    case Slide_Element_DataLink_RSSFeed_ContentType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_FileFeed {
  url: URL | undefined;
}

export interface Slide_Element_DataLink_Ticker {
  playRate: number;
  shouldLoop: boolean;
  loopDelay: number;
  textDelimiter: string;
  textType?: Slide_Element_DataLink_Ticker_TextType | undefined;
  rssType?: Slide_Element_DataLink_Ticker_RSSType | undefined;
  fileType?: Slide_Element_DataLink_Ticker_FileType | undefined;
}

export interface Slide_Element_DataLink_Ticker_TextType {
  text: string;
}

export interface Slide_Element_DataLink_Ticker_RSSType {
  url: URL | undefined;
  content: Slide_Element_DataLink_Ticker_RSSType_ContentType;
}

export enum Slide_Element_DataLink_Ticker_RSSType_ContentType {
  CONTENT_TYPE_TITLE_ONLY = 0,
  CONTENT_TYPE_TITLE_AND_DESCRIPTION = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_Ticker_RSSType_ContentTypeFromJSON(
  object: any,
): Slide_Element_DataLink_Ticker_RSSType_ContentType {
  switch (object) {
    case 0:
    case 'CONTENT_TYPE_TITLE_ONLY':
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_ONLY;
    case 1:
    case 'CONTENT_TYPE_TITLE_AND_DESCRIPTION':
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_Ticker_RSSType_ContentType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_Ticker_RSSType_ContentTypeToJSON(
  object: Slide_Element_DataLink_Ticker_RSSType_ContentType,
): string {
  switch (object) {
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_ONLY:
      return 'CONTENT_TYPE_TITLE_ONLY';
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.CONTENT_TYPE_TITLE_AND_DESCRIPTION:
      return 'CONTENT_TYPE_TITLE_AND_DESCRIPTION';
    case Slide_Element_DataLink_Ticker_RSSType_ContentType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_Ticker_FileType {
  url: URL | undefined;
}

export interface Slide_Element_DataLink_AlternateElementText {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
  textTransformOptions: number;
  textTransform: Slide_Element_DataLink_AlternateElementText_TextTransformOption;
}

export enum Slide_Element_DataLink_AlternateElementText_TextTransformOption {
  TEXT_TRANSFORM_OPTION_NONE = 0,
  TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS = 1,
  TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE = 2,
  TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_AlternateElementText_TextTransformOptionFromJSON(
  object: any,
): Slide_Element_DataLink_AlternateElementText_TextTransformOption {
  switch (object) {
    case 0:
    case 'TEXT_TRANSFORM_OPTION_NONE':
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE;
    case 1:
    case 'TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS':
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS;
    case 2:
    case 'TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE':
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE;
    case 3:
    case 'TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE':
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_AlternateElementText_TextTransformOption.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_AlternateElementText_TextTransformOptionToJSON(
  object: Slide_Element_DataLink_AlternateElementText_TextTransformOption,
): string {
  switch (object) {
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_NONE:
      return 'TEXT_TRANSFORM_OPTION_NONE';
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS:
      return 'TEXT_TRANSFORM_OPTION_REMOVE_LINE_RETURNS';
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE:
      return 'TEXT_TRANSFORM_OPTION_ONE_WORD_PER_LINE';
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE:
      return 'TEXT_TRANSFORM_OPTION_ONE_CHARACTER_PER_LINE';
    case Slide_Element_DataLink_AlternateElementText_TextTransformOption.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_CCLIText {}

export interface Slide_Element_DataLink_ColorTrigger {
  time: number;
  color: Color | undefined;
}

export interface Slide_Element_DataLink_TimerText {
  timerUuid: UUID | undefined;
  timerName: string;
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
}

export interface Slide_Element_DataLink_ClockText {
  clockFormatString: string;
  format: Clock_Format | undefined;
}

export interface Slide_Element_DataLink_ChordChart {}

export interface Slide_Element_DataLink_OutputScreen {
  screenId: UUID | undefined;
  screenName: string;
}

export interface Slide_Element_DataLink_PCOLive {
  theme: Slide_Element_DataLink_PCOLive_Theme;
  countdownType: Slide_Element_DataLink_PCOLive_CountdownType;
}

export enum Slide_Element_DataLink_PCOLive_Theme {
  PCOLIVE_THEME_LIGHT = 0,
  PCOLIVE_THEME_DARK = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PCOLive_ThemeFromJSON(
  object: any,
): Slide_Element_DataLink_PCOLive_Theme {
  switch (object) {
    case 0:
    case 'PCOLIVE_THEME_LIGHT':
      return Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_LIGHT;
    case 1:
    case 'PCOLIVE_THEME_DARK':
      return Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_DARK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_PCOLive_Theme.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PCOLive_ThemeToJSON(
  object: Slide_Element_DataLink_PCOLive_Theme,
): string {
  switch (object) {
    case Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_LIGHT:
      return 'PCOLIVE_THEME_LIGHT';
    case Slide_Element_DataLink_PCOLive_Theme.PCOLIVE_THEME_DARK:
      return 'PCOLIVE_THEME_DARK';
    case Slide_Element_DataLink_PCOLive_Theme.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Slide_Element_DataLink_PCOLive_CountdownType {
  COUNTDOWN_TYPE_FULL_ITEM_LENGTH = 0,
  COUNTDOWN_TYPE_END_ITEM_ON_TIME = 1,
  COUNTDOWN_TYPE_END_SERVICE_ON_TIME = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PCOLive_CountdownTypeFromJSON(
  object: any,
): Slide_Element_DataLink_PCOLive_CountdownType {
  switch (object) {
    case 0:
    case 'COUNTDOWN_TYPE_FULL_ITEM_LENGTH':
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_FULL_ITEM_LENGTH;
    case 1:
    case 'COUNTDOWN_TYPE_END_ITEM_ON_TIME':
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_ITEM_ON_TIME;
    case 2:
    case 'COUNTDOWN_TYPE_END_SERVICE_ON_TIME':
      return Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_SERVICE_ON_TIME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_PCOLive_CountdownType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PCOLive_CountdownTypeToJSON(
  object: Slide_Element_DataLink_PCOLive_CountdownType,
): string {
  switch (object) {
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_FULL_ITEM_LENGTH:
      return 'COUNTDOWN_TYPE_FULL_ITEM_LENGTH';
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_ITEM_ON_TIME:
      return 'COUNTDOWN_TYPE_END_ITEM_ON_TIME';
    case Slide_Element_DataLink_PCOLive_CountdownType.COUNTDOWN_TYPE_END_SERVICE_ON_TIME:
      return 'COUNTDOWN_TYPE_END_SERVICE_ON_TIME';
    case Slide_Element_DataLink_PCOLive_CountdownType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_AlternateElementFill {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
}

export interface Slide_Element_DataLink_VisibilityLink {
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_VisibilityCriterion;
  conditions: Slide_Element_DataLink_VisibilityLink_Condition[];
}

export enum Slide_Element_DataLink_VisibilityLink_VisibilityCriterion {
  VISIBILITY_CRITERION_ALL = 0,
  VISIBILITY_CRITERION_ANY = 1,
  VISIBILITY_CRITERION_NONE = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_VisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_VisibilityCriterion {
  switch (object) {
    case 0:
    case 'VISIBILITY_CRITERION_ALL':
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ALL;
    case 1:
    case 'VISIBILITY_CRITERION_ANY':
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ANY;
    case 2:
    case 'VISIBILITY_CRITERION_NONE':
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_NONE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_VisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_VisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ALL:
      return 'VISIBILITY_CRITERION_ALL';
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_ANY:
      return 'VISIBILITY_CRITERION_ANY';
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.VISIBILITY_CRITERION_NONE:
      return 'VISIBILITY_CRITERION_NONE';
    case Slide_Element_DataLink_VisibilityLink_VisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition {
  elementVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility
    | undefined;
  timerVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility
    | undefined;
  videoCountdownVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility
    | undefined;
  captureSessionVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility
    | undefined;
  videoInputVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility
    | undefined;
  audioCountdownVisibility?:
    | Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility
    | undefined;
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
  otherElementUuid: UUID | undefined;
  otherElementName: string;
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion {
  ELEMENT_VISIBILITY_CRITERION_HAS_TEXT = 0,
  ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion {
  switch (object) {
    case 0:
    case 'ELEMENT_VISIBILITY_CRITERION_HAS_TEXT':
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.ELEMENT_VISIBILITY_CRITERION_HAS_TEXT;
    case 1:
    case 'ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT':
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.ELEMENT_VISIBILITY_CRITERION_HAS_TEXT:
      return 'ELEMENT_VISIBILITY_CRITERION_HAS_TEXT';
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT:
      return 'ELEMENT_VISIBILITY_CRITERION_HAS_NO_TEXT';
    case Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
  timerUuid: UUID | undefined;
  timerName: string;
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion {
  TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  TIMER_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  TIMER_VISIBILITY_CRITERION_IS_RUNNING = 2,
  TIMER_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion {
  switch (object) {
    case 0:
    case 'TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING':
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case 'TIMER_VISIBILITY_CRITERION_HAS_EXPIRED':
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case 'TIMER_VISIBILITY_CRITERION_IS_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case 'TIMER_VISIBILITY_CRITERION_NOT_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_NOT_RUNNING;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return 'TIMER_VISIBILITY_CRITERION_HAS_TIME_REMAINING';
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_HAS_EXPIRED:
      return 'TIMER_VISIBILITY_CRITERION_HAS_EXPIRED';
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_IS_RUNNING:
      return 'TIMER_VISIBILITY_CRITERION_IS_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.TIMER_VISIBILITY_CRITERION_NOT_RUNNING:
      return 'TIMER_VISIBILITY_CRITERION_NOT_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion {
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING = 2,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING = 4,
  VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING = 5,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion {
  switch (object) {
    case 0:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING;
    case 4:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING;
    case 5:
    case 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING:
      return 'VIDEO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion {
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING = 0,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED = 1,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING = 2,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING = 3,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING = 4,
  AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING = 5,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion {
  switch (object) {
    case 0:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING;
    case 1:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED;
    case 2:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING;
    case 3:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING;
    case 4:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING;
    case 5:
    case 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING':
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_TIME_REMAINING';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_HAS_EXPIRED';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_IS_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_RUNNING';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_LOOPING';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING:
      return 'AUDIO_COUNTDOWN_VISIBILITY_CRITERION_NOT_LOOPING';
    case Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion {
  CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE = 0,
  CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion {
  switch (object) {
    case 0:
    case 'CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE':
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE;
    case 1:
    case 'CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE':
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE:
      return 'CAPTURE_SESSION_VISIBILITY_CRITERION_ACTIVE';
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE:
      return 'CAPTURE_SESSION_VISIBILITY_CRITERION_INACTIVE';
    case Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
  videoInputIndex: number;
  visibilityCriterion: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion;
}

export enum Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion {
  VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE = 0,
  VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionFromJSON(
  object: any,
): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion {
  switch (object) {
    case 0:
    case 'VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE;
    case 1:
    case 'VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE':
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionToJSON(
  object: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion,
): string {
  switch (object) {
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE:
      return 'VIDEO_INPUT_VISIBILITY_CRITERION_ACTIVE';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE:
      return 'VIDEO_INPUT_VISIBILITY_CRITERION_INACTIVE';
    case Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterion.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_SlideText {
  sourceSlide: Slide_Element_DataLink_SlideSourceType;
  sourceOption: Slide_Element_DataLink_SlideText_TextSourceOption;
  preserveNotesFormat: boolean;
  nameToMatch: string;
  elementTextTransform: Slide_Element_DataLink_AlternateElementText_TextTransformOption;
}

export enum Slide_Element_DataLink_SlideText_TextSourceOption {
  TEXT_SOURCE_OPTION_TEXT = 0,
  TEXT_SOURCE_OPTION_NOTES = 1,
  TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideText_TextSourceOptionFromJSON(
  object: any,
): Slide_Element_DataLink_SlideText_TextSourceOption {
  switch (object) {
    case 0:
    case 'TEXT_SOURCE_OPTION_TEXT':
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_TEXT;
    case 1:
    case 'TEXT_SOURCE_OPTION_NOTES':
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_NOTES;
    case 2:
    case 'TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME':
      return Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_SlideText_TextSourceOption.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideText_TextSourceOptionToJSON(
  object: Slide_Element_DataLink_SlideText_TextSourceOption,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_TEXT:
      return 'TEXT_SOURCE_OPTION_TEXT';
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_NOTES:
      return 'TEXT_SOURCE_OPTION_NOTES';
    case Slide_Element_DataLink_SlideText_TextSourceOption.TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME:
      return 'TEXT_SOURCE_OPTION_ELEMENT_MATCHING_NAME';
    case Slide_Element_DataLink_SlideText_TextSourceOption.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_SlideImage {
  sourceSlide: Slide_Element_DataLink_SlideSourceType;
}

export interface Slide_Element_DataLink_StageMessage {
  shouldFlash: boolean;
  flashColor: Color | undefined;
}

export interface Slide_Element_DataLink_VideoCountdown {
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
  ignoreLoopingVideos: boolean;
  videoCountdownSource: Slide_Element_DataLink_VideoCountdown_VideoCountdownSource;
}

export enum Slide_Element_DataLink_VideoCountdown_VideoCountdownSource {
  VIDEO_COUNTDOWN_SOURCE_PRESENTATION = 0,
  VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_VideoCountdown_VideoCountdownSourceFromJSON(
  object: any,
): Slide_Element_DataLink_VideoCountdown_VideoCountdownSource {
  switch (object) {
    case 0:
    case 'VIDEO_COUNTDOWN_SOURCE_PRESENTATION':
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_PRESENTATION;
    case 1:
    case 'VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT':
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_VideoCountdown_VideoCountdownSourceToJSON(
  object: Slide_Element_DataLink_VideoCountdown_VideoCountdownSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_PRESENTATION:
      return 'VIDEO_COUNTDOWN_SOURCE_PRESENTATION';
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT:
      return 'VIDEO_COUNTDOWN_SOURCE_ANNOUNCEMENT';
    case Slide_Element_DataLink_VideoCountdown_VideoCountdownSource.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_AudioCountdown {
  timerFormat: Timer_Format | undefined;
  timerFormatString: string;
  colorTriggers: Slide_Element_DataLink_ColorTrigger[];
  ignoreLoopingAudio: boolean;
}

export interface Slide_Element_DataLink_GroupName {
  groupSource: Slide_Element_DataLink_GroupSourceType;
}

export interface Slide_Element_DataLink_GroupColor {
  groupSource: Slide_Element_DataLink_GroupSourceType;
}

export interface Slide_Element_DataLink_SlideLabelText {
  slideLabelSource: Slide_Element_DataLink_SlideLabelSource;
}

export interface Slide_Element_DataLink_SlideLabelColor {
  slideLabelSource: Slide_Element_DataLink_SlideLabelSource;
}

export interface Slide_Element_DataLink_PresentationNotes {}

export interface Slide_Element_DataLink_Presentation {
  presentationSource: Slide_Element_DataLink_Presentation_PresentationSource;
}

export enum Slide_Element_DataLink_Presentation_PresentationSource {
  PRESENTATION_SOURCE_PRESENTATION = 0,
  PRESENTATION_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_Presentation_PresentationSourceFromJSON(
  object: any,
): Slide_Element_DataLink_Presentation_PresentationSource {
  switch (object) {
    case 0:
    case 'PRESENTATION_SOURCE_PRESENTATION':
      return Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_PRESENTATION;
    case 1:
    case 'PRESENTATION_SOURCE_ANNOUNCEMENT':
      return Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_ANNOUNCEMENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_Presentation_PresentationSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_Presentation_PresentationSourceToJSON(
  object: Slide_Element_DataLink_Presentation_PresentationSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_PRESENTATION:
      return 'PRESENTATION_SOURCE_PRESENTATION';
    case Slide_Element_DataLink_Presentation_PresentationSource.PRESENTATION_SOURCE_ANNOUNCEMENT:
      return 'PRESENTATION_SOURCE_ANNOUNCEMENT';
    case Slide_Element_DataLink_Presentation_PresentationSource.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_PlaylistItem {
  playlistItemSource: Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType;
  showArrangement: boolean;
}

export enum Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType {
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT = 0,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT = 1,
  PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER = 2,
  PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER = 3,
  PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST = 4,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType {
  switch (object) {
    case 0:
    case 'PLAYLIST_ITEM_SOURCE_TYPE_CURRENT':
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT;
    case 1:
    case 'PLAYLIST_ITEM_SOURCE_TYPE_NEXT':
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT;
    case 2:
    case 'PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER':
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER;
    case 3:
    case 'PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER':
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER;
    case 4:
    case 'PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST':
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeToJSON(
  object: Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT:
      return 'PLAYLIST_ITEM_SOURCE_TYPE_CURRENT';
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT:
      return 'PLAYLIST_ITEM_SOURCE_TYPE_NEXT';
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER:
      return 'PLAYLIST_ITEM_SOURCE_TYPE_CURRENT_HEADER';
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER:
      return 'PLAYLIST_ITEM_SOURCE_TYPE_NEXT_HEADER';
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST:
      return 'PLAYLIST_ITEM_SOURCE_TYPE_PARENT_PLAYLIST';
    case Slide_Element_DataLink_PlaylistItem_PlaylistItemSourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_AutoAdvanceTimeRemaining {
  autoAdvanceSource: Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource;
  timerFormat: Timer_Format | undefined;
}

export enum Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource {
  AUTO_ADVANCE_SOURCE_PRESENTATION = 0,
  AUTO_ADVANCE_SOURCE_ANNOUNCEMENT = 1,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceFromJSON(
  object: any,
): Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource {
  switch (object) {
    case 0:
    case 'AUTO_ADVANCE_SOURCE_PRESENTATION':
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_PRESENTATION;
    case 1:
    case 'AUTO_ADVANCE_SOURCE_ANNOUNCEMENT':
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_ANNOUNCEMENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceToJSON(
  object: Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource,
): string {
  switch (object) {
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_PRESENTATION:
      return 'AUTO_ADVANCE_SOURCE_PRESENTATION';
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.AUTO_ADVANCE_SOURCE_ANNOUNCEMENT:
      return 'AUTO_ADVANCE_SOURCE_ANNOUNCEMENT';
    case Slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSource.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_CaptureStatusText {
  statusText?: Slide_Element_DataLink_CaptureStatusText_StatusText | undefined;
  elapsedTime?:
    | Slide_Element_DataLink_CaptureStatusText_ElapsedTime
    | undefined;
}

export interface Slide_Element_DataLink_CaptureStatusText_StatusText {}

export interface Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
  timerFormat: Timer_Format | undefined;
}

export interface Slide_Element_DataLink_CaptureStatusColor {}

export interface Slide_Element_DataLink_SlideCount {
  slideCountSourceType: Slide_Element_DataLink_SlideCount_SlideCountSourceType;
}

export enum Slide_Element_DataLink_SlideCount_SlideCountSourceType {
  SLIDE_COUNT_SOURCE_TYPE_CURRENT = 0,
  SLIDE_COUNT_SOURCE_TYPE_REMAINING = 1,
  SLIDE_COUNT_SOURCE_TYPE_TOTAL = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_SlideCount_SlideCountSourceTypeFromJSON(
  object: any,
): Slide_Element_DataLink_SlideCount_SlideCountSourceType {
  switch (object) {
    case 0:
    case 'SLIDE_COUNT_SOURCE_TYPE_CURRENT':
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_CURRENT;
    case 1:
    case 'SLIDE_COUNT_SOURCE_TYPE_REMAINING':
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_REMAINING;
    case 2:
    case 'SLIDE_COUNT_SOURCE_TYPE_TOTAL':
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_TOTAL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_SlideCount_SlideCountSourceType.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_SlideCount_SlideCountSourceTypeToJSON(
  object: Slide_Element_DataLink_SlideCount_SlideCountSourceType,
): string {
  switch (object) {
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_CURRENT:
      return 'SLIDE_COUNT_SOURCE_TYPE_CURRENT';
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_REMAINING:
      return 'SLIDE_COUNT_SOURCE_TYPE_REMAINING';
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.SLIDE_COUNT_SOURCE_TYPE_TOTAL:
      return 'SLIDE_COUNT_SOURCE_TYPE_TOTAL';
    case Slide_Element_DataLink_SlideCount_SlideCountSourceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_PlaybackMarkerIdentifier {
  destination: Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination;
  type: Slide_Element_DataLink_PlaybackMarkerIdentifier_Type;
  name: string;
}

export enum Slide_Element_DataLink_PlaybackMarkerIdentifier_Type {
  PLAYBACK_MARKER_IDENTIFIER_FIRST = 0,
  PLAYBACK_MARKER_IDENTIFIER_PREVIOUS = 1,
  PLAYBACK_MARKER_IDENTIFIER_NEXT = 2,
  PLAYBACK_MARKER_IDENTIFIER_LAST = 3,
  PLAYBACK_MARKER_IDENTIFIER_NAME = 4,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PlaybackMarkerIdentifier_TypeFromJSON(
  object: any,
): Slide_Element_DataLink_PlaybackMarkerIdentifier_Type {
  switch (object) {
    case 0:
    case 'PLAYBACK_MARKER_IDENTIFIER_FIRST':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_FIRST;
    case 1:
    case 'PLAYBACK_MARKER_IDENTIFIER_PREVIOUS':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_PREVIOUS;
    case 2:
    case 'PLAYBACK_MARKER_IDENTIFIER_NEXT':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_NEXT;
    case 3:
    case 'PLAYBACK_MARKER_IDENTIFIER_LAST':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_LAST;
    case 4:
    case 'PLAYBACK_MARKER_IDENTIFIER_NAME':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_NAME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PlaybackMarkerIdentifier_TypeToJSON(
  object: Slide_Element_DataLink_PlaybackMarkerIdentifier_Type,
): string {
  switch (object) {
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_FIRST:
      return 'PLAYBACK_MARKER_IDENTIFIER_FIRST';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_PREVIOUS:
      return 'PLAYBACK_MARKER_IDENTIFIER_PREVIOUS';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_NEXT:
      return 'PLAYBACK_MARKER_IDENTIFIER_NEXT';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_LAST:
      return 'PLAYBACK_MARKER_IDENTIFIER_LAST';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.PLAYBACK_MARKER_IDENTIFIER_NAME:
      return 'PLAYBACK_MARKER_IDENTIFIER_NAME';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination {
  PLAYBACK_MARKER_DESTINATION_PRESENTATION = 0,
  PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT = 1,
  PLAYBACK_MARKER_DESTINATION_AUDIO = 2,
  UNRECOGNIZED = -1,
}

export function slide_Element_DataLink_PlaybackMarkerIdentifier_DestinationFromJSON(
  object: any,
): Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination {
  switch (object) {
    case 0:
    case 'PLAYBACK_MARKER_DESTINATION_PRESENTATION':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_PRESENTATION;
    case 1:
    case 'PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT;
    case 2:
    case 'PLAYBACK_MARKER_DESTINATION_AUDIO':
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_AUDIO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.UNRECOGNIZED;
  }
}

export function slide_Element_DataLink_PlaybackMarkerIdentifier_DestinationToJSON(
  object: Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination,
): string {
  switch (object) {
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_PRESENTATION:
      return 'PLAYBACK_MARKER_DESTINATION_PRESENTATION';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT:
      return 'PLAYBACK_MARKER_DESTINATION_ANNOUNCEMENT';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.PLAYBACK_MARKER_DESTINATION_AUDIO:
      return 'PLAYBACK_MARKER_DESTINATION_AUDIO';
    case Slide_Element_DataLink_PlaybackMarkerIdentifier_Destination.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Slide_Element_DataLink_PlaybackMarkerText {
  identifier: Slide_Element_DataLink_PlaybackMarkerIdentifier | undefined;
  shouldUseMarkerColor: boolean;
  name?: Slide_Element_DataLink_PlaybackMarkerText_Name | undefined;
  time?: Slide_Element_DataLink_PlaybackMarkerText_Time | undefined;
}

export interface Slide_Element_DataLink_PlaybackMarkerText_Name {}

export interface Slide_Element_DataLink_PlaybackMarkerText_Time {
  format: Timer_Format | undefined;
}

export interface Slide_Element_DataLink_ChordProChart {}

export interface Slide_Element_DataLink_TimecodeText {}

export interface Slide_Element_DataLink_TimecodeStatus {}

export interface Slide_Element_TextScroller {
  shouldScroll: boolean;
  scrollRate: number;
  shouldRepeat: boolean;
  repeatDistance: number;
  scrollingDirection: Slide_Element_TextScroller_Direction;
  startsOffScreen: boolean;
  fadeLeft: number;
  fadeRight: number;
}

export enum Slide_Element_TextScroller_Direction {
  DIRECTION_LEFT = 0,
  DIRECTION_RIGHT = 1,
  DIRECTION_UP = 2,
  DIRECTION_DOWN = 3,
  UNRECOGNIZED = -1,
}

export function slide_Element_TextScroller_DirectionFromJSON(
  object: any,
): Slide_Element_TextScroller_Direction {
  switch (object) {
    case 0:
    case 'DIRECTION_LEFT':
      return Slide_Element_TextScroller_Direction.DIRECTION_LEFT;
    case 1:
    case 'DIRECTION_RIGHT':
      return Slide_Element_TextScroller_Direction.DIRECTION_RIGHT;
    case 2:
    case 'DIRECTION_UP':
      return Slide_Element_TextScroller_Direction.DIRECTION_UP;
    case 3:
    case 'DIRECTION_DOWN':
      return Slide_Element_TextScroller_Direction.DIRECTION_DOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Slide_Element_TextScroller_Direction.UNRECOGNIZED;
  }
}

export function slide_Element_TextScroller_DirectionToJSON(
  object: Slide_Element_TextScroller_Direction,
): string {
  switch (object) {
    case Slide_Element_TextScroller_Direction.DIRECTION_LEFT:
      return 'DIRECTION_LEFT';
    case Slide_Element_TextScroller_Direction.DIRECTION_RIGHT:
      return 'DIRECTION_RIGHT';
    case Slide_Element_TextScroller_Direction.DIRECTION_UP:
      return 'DIRECTION_UP';
    case Slide_Element_TextScroller_Direction.DIRECTION_DOWN:
      return 'DIRECTION_DOWN';
    case Slide_Element_TextScroller_Direction.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseSlide(): Slide {
  return {
    elements: [],
    elementBuildOrder: [],
    guidelines: [],
    drawsBackgroundColor: false,
    backgroundColor: undefined,
    size: undefined,
    uuid: undefined,
  };
}

export const Slide = {
  encode(message: Slide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      Slide_Element.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.elementBuildOrder) {
      UUID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.guidelines) {
      AlignmentGuide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.drawsBackgroundColor === true) {
      writer.uint32(32).bool(message.drawsBackgroundColor);
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.size !== undefined) {
      Graphics_Size.encode(message.size, writer.uint32(50).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elements.push(Slide_Element.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elementBuildOrder.push(UUID.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.guidelines.push(
            AlignmentGuide.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.drawsBackgroundColor = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.backgroundColor = Color.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.size = Graphics_Size.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide {
    return {
      elements: globalThis.Array.isArray(object?.elements)
        ? object.elements.map((e: any) => Slide_Element.fromJSON(e))
        : [],
      elementBuildOrder: globalThis.Array.isArray(object?.elementBuildOrder)
        ? object.elementBuildOrder.map((e: any) => UUID.fromJSON(e))
        : [],
      guidelines: globalThis.Array.isArray(object?.guidelines)
        ? object.guidelines.map((e: any) => AlignmentGuide.fromJSON(e))
        : [],
      drawsBackgroundColor: isSet(object.drawsBackgroundColor)
        ? globalThis.Boolean(object.drawsBackgroundColor)
        : false,
      backgroundColor: isSet(object.backgroundColor)
        ? Color.fromJSON(object.backgroundColor)
        : undefined,
      size: isSet(object.size)
        ? Graphics_Size.fromJSON(object.size)
        : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: Slide): unknown {
    const obj: any = {};
    if (message.elements?.length) {
      obj.elements = message.elements.map((e) => Slide_Element.toJSON(e));
    }
    if (message.elementBuildOrder?.length) {
      obj.elementBuildOrder = message.elementBuildOrder.map((e) =>
        UUID.toJSON(e),
      );
    }
    if (message.guidelines?.length) {
      obj.guidelines = message.guidelines.map((e) => AlignmentGuide.toJSON(e));
    }
    if (message.drawsBackgroundColor === true) {
      obj.drawsBackgroundColor = message.drawsBackgroundColor;
    }
    if (message.backgroundColor !== undefined) {
      obj.backgroundColor = Color.toJSON(message.backgroundColor);
    }
    if (message.size !== undefined) {
      obj.size = Graphics_Size.toJSON(message.size);
    }
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide>, I>>(base?: I): Slide {
    return Slide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide>, I>>(object: I): Slide {
    const message = createBaseSlide();
    message.elements =
      object.elements?.map((e) => Slide_Element.fromPartial(e)) || [];
    message.elementBuildOrder =
      object.elementBuildOrder?.map((e) => UUID.fromPartial(e)) || [];
    message.guidelines =
      object.guidelines?.map((e) => AlignmentGuide.fromPartial(e)) || [];
    message.drawsBackgroundColor = object.drawsBackgroundColor ?? false;
    message.backgroundColor =
      object.backgroundColor !== undefined && object.backgroundColor !== null
        ? Color.fromPartial(object.backgroundColor)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Graphics_Size.fromPartial(object.size)
        : undefined;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element(): Slide_Element {
  return {
    element: undefined,
    buildIn: undefined,
    buildOut: undefined,
    info: 0,
    revealType: 0,
    dataLinks: [],
    childBuilds: [],
    revealFromIndex: 0,
    textScroller: undefined,
  };
}

export const Slide_Element = {
  encode(
    message: Slide_Element,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.element !== undefined) {
      Graphics_Element.encode(
        message.element,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.buildIn !== undefined) {
      Slide_Element_Build.encode(
        message.buildIn,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.buildOut !== undefined) {
      Slide_Element_Build.encode(
        message.buildOut,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.info !== 0) {
      writer.uint32(32).uint32(message.info);
    }
    if (message.revealType !== 0) {
      writer.uint32(40).int32(message.revealType);
    }
    for (const v of message.dataLinks) {
      Slide_Element_DataLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.childBuilds) {
      Slide_Element_ChildBuild.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.revealFromIndex !== 0) {
      writer.uint32(64).uint32(message.revealFromIndex);
    }
    if (message.textScroller !== undefined) {
      Slide_Element_TextScroller.encode(
        message.textScroller,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.element = Graphics_Element.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.buildIn = Slide_Element_Build.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buildOut = Slide_Element_Build.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.info = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.revealType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dataLinks.push(
            Slide_Element_DataLink.decode(reader, reader.uint32()),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.childBuilds.push(
            Slide_Element_ChildBuild.decode(reader, reader.uint32()),
          );
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.revealFromIndex = reader.uint32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.textScroller = Slide_Element_TextScroller.decode(
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

  fromJSON(object: any): Slide_Element {
    return {
      element: isSet(object.element)
        ? Graphics_Element.fromJSON(object.element)
        : undefined,
      buildIn: isSet(object.buildIn)
        ? Slide_Element_Build.fromJSON(object.buildIn)
        : undefined,
      buildOut: isSet(object.buildOut)
        ? Slide_Element_Build.fromJSON(object.buildOut)
        : undefined,
      info: isSet(object.info) ? globalThis.Number(object.info) : 0,
      revealType: isSet(object.revealType)
        ? slide_Element_TextRevealTypeFromJSON(object.revealType)
        : 0,
      dataLinks: globalThis.Array.isArray(object?.dataLinks)
        ? object.dataLinks.map((e: any) => Slide_Element_DataLink.fromJSON(e))
        : [],
      childBuilds: globalThis.Array.isArray(object?.childBuilds)
        ? object.childBuilds.map((e: any) =>
            Slide_Element_ChildBuild.fromJSON(e),
          )
        : [],
      revealFromIndex: isSet(object.revealFromIndex)
        ? globalThis.Number(object.revealFromIndex)
        : 0,
      textScroller: isSet(object.textScroller)
        ? Slide_Element_TextScroller.fromJSON(object.textScroller)
        : undefined,
    };
  },

  toJSON(message: Slide_Element): unknown {
    const obj: any = {};
    if (message.element !== undefined) {
      obj.element = Graphics_Element.toJSON(message.element);
    }
    if (message.buildIn !== undefined) {
      obj.buildIn = Slide_Element_Build.toJSON(message.buildIn);
    }
    if (message.buildOut !== undefined) {
      obj.buildOut = Slide_Element_Build.toJSON(message.buildOut);
    }
    if (message.info !== 0) {
      obj.info = Math.round(message.info);
    }
    if (message.revealType !== 0) {
      obj.revealType = slide_Element_TextRevealTypeToJSON(message.revealType);
    }
    if (message.dataLinks?.length) {
      obj.dataLinks = message.dataLinks.map((e) =>
        Slide_Element_DataLink.toJSON(e),
      );
    }
    if (message.childBuilds?.length) {
      obj.childBuilds = message.childBuilds.map((e) =>
        Slide_Element_ChildBuild.toJSON(e),
      );
    }
    if (message.revealFromIndex !== 0) {
      obj.revealFromIndex = Math.round(message.revealFromIndex);
    }
    if (message.textScroller !== undefined) {
      obj.textScroller = Slide_Element_TextScroller.toJSON(
        message.textScroller,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element>, I>>(
    base?: I,
  ): Slide_Element {
    return Slide_Element.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element>, I>>(
    object: I,
  ): Slide_Element {
    const message = createBaseSlide_Element();
    message.element =
      object.element !== undefined && object.element !== null
        ? Graphics_Element.fromPartial(object.element)
        : undefined;
    message.buildIn =
      object.buildIn !== undefined && object.buildIn !== null
        ? Slide_Element_Build.fromPartial(object.buildIn)
        : undefined;
    message.buildOut =
      object.buildOut !== undefined && object.buildOut !== null
        ? Slide_Element_Build.fromPartial(object.buildOut)
        : undefined;
    message.info = object.info ?? 0;
    message.revealType = object.revealType ?? 0;
    message.dataLinks =
      object.dataLinks?.map((e) => Slide_Element_DataLink.fromPartial(e)) || [];
    message.childBuilds =
      object.childBuilds?.map((e) => Slide_Element_ChildBuild.fromPartial(e)) ||
      [];
    message.revealFromIndex = object.revealFromIndex ?? 0;
    message.textScroller =
      object.textScroller !== undefined && object.textScroller !== null
        ? Slide_Element_TextScroller.fromPartial(object.textScroller)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_Build(): Slide_Element_Build {
  return {
    uuid: undefined,
    elementUUID: undefined,
    start: 0,
    delayTime: 0,
    transition: undefined,
  };
}

export const Slide_Element_Build = {
  encode(
    message: Slide_Element_Build,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.elementUUID !== undefined) {
      UUID.encode(message.elementUUID, writer.uint32(18).fork()).ldelim();
    }
    if (message.start !== 0) {
      writer.uint32(24).int32(message.start);
    }
    if (message.delayTime !== 0) {
      writer.uint32(33).double(message.delayTime);
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Slide_Element_Build {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_Build();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elementUUID = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.start = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.delayTime = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_Build {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      elementUUID: isSet(object.elementUUID)
        ? UUID.fromJSON(object.elementUUID)
        : undefined,
      start: isSet(object.start)
        ? slide_Element_Build_StartFromJSON(object.start)
        : 0,
      delayTime: isSet(object.delayTime)
        ? globalThis.Number(object.delayTime)
        : 0,
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_Build): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.elementUUID !== undefined) {
      obj.elementUUID = UUID.toJSON(message.elementUUID);
    }
    if (message.start !== 0) {
      obj.start = slide_Element_Build_StartToJSON(message.start);
    }
    if (message.delayTime !== 0) {
      obj.delayTime = message.delayTime;
    }
    if (message.transition !== undefined) {
      obj.transition = Transition.toJSON(message.transition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_Build>, I>>(
    base?: I,
  ): Slide_Element_Build {
    return Slide_Element_Build.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_Build>, I>>(
    object: I,
  ): Slide_Element_Build {
    const message = createBaseSlide_Element_Build();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.elementUUID =
      object.elementUUID !== undefined && object.elementUUID !== null
        ? UUID.fromPartial(object.elementUUID)
        : undefined;
    message.start = object.start ?? 0;
    message.delayTime = object.delayTime ?? 0;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? Transition.fromPartial(object.transition)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_ChildBuild(): Slide_Element_ChildBuild {
  return { uuid: undefined, start: 0, delayTime: 0, index: 0 };
}

export const Slide_Element_ChildBuild = {
  encode(
    message: Slide_Element_ChildBuild,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.start !== 0) {
      writer.uint32(16).int32(message.start);
    }
    if (message.delayTime !== 0) {
      writer.uint32(25).double(message.delayTime);
    }
    if (message.index !== 0) {
      writer.uint32(32).uint32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_ChildBuild {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_ChildBuild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.start = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.delayTime = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_ChildBuild {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      start: isSet(object.start)
        ? slide_Element_Build_StartFromJSON(object.start)
        : 0,
      delayTime: isSet(object.delayTime)
        ? globalThis.Number(object.delayTime)
        : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: Slide_Element_ChildBuild): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.start !== 0) {
      obj.start = slide_Element_Build_StartToJSON(message.start);
    }
    if (message.delayTime !== 0) {
      obj.delayTime = message.delayTime;
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_ChildBuild>, I>>(
    base?: I,
  ): Slide_Element_ChildBuild {
    return Slide_Element_ChildBuild.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_ChildBuild>, I>>(
    object: I,
  ): Slide_Element_ChildBuild {
    const message = createBaseSlide_Element_ChildBuild();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.start = object.start ?? 0;
    message.delayTime = object.delayTime ?? 0;
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink(): Slide_Element_DataLink {
  return {
    ticker: undefined,
    alternateText: undefined,
    timerText: undefined,
    clockText: undefined,
    chordChart: undefined,
    outputScreen: undefined,
    pcoLive: undefined,
    alternateFill: undefined,
    visibilityLink: undefined,
    slideText: undefined,
    stageMessage: undefined,
    videoCountdown: undefined,
    slideImage: undefined,
    ccliText: undefined,
    groupName: undefined,
    groupColor: undefined,
    presentationNotes: undefined,
    playlistItem: undefined,
    autoAdvanceTimeRemaining: undefined,
    captureStatusText: undefined,
    captureStatusColor: undefined,
    slideCount: undefined,
    audioCountdown: undefined,
    presentation: undefined,
    slideLabelText: undefined,
    slideLabelColor: undefined,
    rssFeed: undefined,
    fileFeed: undefined,
    chordProChart: undefined,
    playbackMarkerText: undefined,
    playbackMarkerColor: undefined,
    timecodeText: undefined,
    timecodeStatus: undefined,
  };
}

export const Slide_Element_DataLink = {
  encode(
    message: Slide_Element_DataLink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ticker !== undefined) {
      Slide_Element_DataLink_Ticker.encode(
        message.ticker,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.alternateText !== undefined) {
      Slide_Element_DataLink_AlternateElementText.encode(
        message.alternateText,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timerText !== undefined) {
      Slide_Element_DataLink_TimerText.encode(
        message.timerText,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.clockText !== undefined) {
      Slide_Element_DataLink_ClockText.encode(
        message.clockText,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.chordChart !== undefined) {
      Slide_Element_DataLink_ChordChart.encode(
        message.chordChart,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.outputScreen !== undefined) {
      Slide_Element_DataLink_OutputScreen.encode(
        message.outputScreen,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.pcoLive !== undefined) {
      Slide_Element_DataLink_PCOLive.encode(
        message.pcoLive,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.alternateFill !== undefined) {
      Slide_Element_DataLink_AlternateElementFill.encode(
        message.alternateFill,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.visibilityLink !== undefined) {
      Slide_Element_DataLink_VisibilityLink.encode(
        message.visibilityLink,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.slideText !== undefined) {
      Slide_Element_DataLink_SlideText.encode(
        message.slideText,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.stageMessage !== undefined) {
      Slide_Element_DataLink_StageMessage.encode(
        message.stageMessage,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.videoCountdown !== undefined) {
      Slide_Element_DataLink_VideoCountdown.encode(
        message.videoCountdown,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.slideImage !== undefined) {
      Slide_Element_DataLink_SlideImage.encode(
        message.slideImage,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.ccliText !== undefined) {
      Slide_Element_DataLink_CCLIText.encode(
        message.ccliText,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.groupName !== undefined) {
      Slide_Element_DataLink_GroupName.encode(
        message.groupName,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.groupColor !== undefined) {
      Slide_Element_DataLink_GroupColor.encode(
        message.groupColor,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.presentationNotes !== undefined) {
      Slide_Element_DataLink_PresentationNotes.encode(
        message.presentationNotes,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.playlistItem !== undefined) {
      Slide_Element_DataLink_PlaylistItem.encode(
        message.playlistItem,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.autoAdvanceTimeRemaining !== undefined) {
      Slide_Element_DataLink_AutoAdvanceTimeRemaining.encode(
        message.autoAdvanceTimeRemaining,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.captureStatusText !== undefined) {
      Slide_Element_DataLink_CaptureStatusText.encode(
        message.captureStatusText,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.captureStatusColor !== undefined) {
      Slide_Element_DataLink_CaptureStatusColor.encode(
        message.captureStatusColor,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.slideCount !== undefined) {
      Slide_Element_DataLink_SlideCount.encode(
        message.slideCount,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.audioCountdown !== undefined) {
      Slide_Element_DataLink_AudioCountdown.encode(
        message.audioCountdown,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.presentation !== undefined) {
      Slide_Element_DataLink_Presentation.encode(
        message.presentation,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.slideLabelText !== undefined) {
      Slide_Element_DataLink_SlideLabelText.encode(
        message.slideLabelText,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.slideLabelColor !== undefined) {
      Slide_Element_DataLink_SlideLabelColor.encode(
        message.slideLabelColor,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.rssFeed !== undefined) {
      Slide_Element_DataLink_RSSFeed.encode(
        message.rssFeed,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.fileFeed !== undefined) {
      Slide_Element_DataLink_FileFeed.encode(
        message.fileFeed,
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.chordProChart !== undefined) {
      Slide_Element_DataLink_ChordProChart.encode(
        message.chordProChart,
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.playbackMarkerText !== undefined) {
      Slide_Element_DataLink_PlaybackMarkerText.encode(
        message.playbackMarkerText,
        writer.uint32(242).fork(),
      ).ldelim();
    }
    if (message.playbackMarkerColor !== undefined) {
      Slide_Element_DataLink_PlaybackMarkerIdentifier.encode(
        message.playbackMarkerColor,
        writer.uint32(258).fork(),
      ).ldelim();
    }
    if (message.timecodeText !== undefined) {
      Slide_Element_DataLink_TimecodeText.encode(
        message.timecodeText,
        writer.uint32(266).fork(),
      ).ldelim();
    }
    if (message.timecodeStatus !== undefined) {
      Slide_Element_DataLink_TimecodeStatus.encode(
        message.timecodeStatus,
        writer.uint32(274).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ticker = Slide_Element_DataLink_Ticker.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alternateText =
            Slide_Element_DataLink_AlternateElementText.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timerText = Slide_Element_DataLink_TimerText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clockText = Slide_Element_DataLink_ClockText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chordChart = Slide_Element_DataLink_ChordChart.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.outputScreen = Slide_Element_DataLink_OutputScreen.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pcoLive = Slide_Element_DataLink_PCOLive.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.alternateFill =
            Slide_Element_DataLink_AlternateElementFill.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.visibilityLink = Slide_Element_DataLink_VisibilityLink.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.slideText = Slide_Element_DataLink_SlideText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.stageMessage = Slide_Element_DataLink_StageMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.videoCountdown = Slide_Element_DataLink_VideoCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.slideImage = Slide_Element_DataLink_SlideImage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.ccliText = Slide_Element_DataLink_CCLIText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.groupName = Slide_Element_DataLink_GroupName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.groupColor = Slide_Element_DataLink_GroupColor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.presentationNotes =
            Slide_Element_DataLink_PresentationNotes.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.playlistItem = Slide_Element_DataLink_PlaylistItem.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.autoAdvanceTimeRemaining =
            Slide_Element_DataLink_AutoAdvanceTimeRemaining.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.captureStatusText =
            Slide_Element_DataLink_CaptureStatusText.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.captureStatusColor =
            Slide_Element_DataLink_CaptureStatusColor.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.slideCount = Slide_Element_DataLink_SlideCount.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.audioCountdown = Slide_Element_DataLink_AudioCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.presentation = Slide_Element_DataLink_Presentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.slideLabelText = Slide_Element_DataLink_SlideLabelText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.slideLabelColor =
            Slide_Element_DataLink_SlideLabelColor.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.rssFeed = Slide_Element_DataLink_RSSFeed.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.fileFeed = Slide_Element_DataLink_FileFeed.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.chordProChart = Slide_Element_DataLink_ChordProChart.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.playbackMarkerText =
            Slide_Element_DataLink_PlaybackMarkerText.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.playbackMarkerColor =
            Slide_Element_DataLink_PlaybackMarkerIdentifier.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.timecodeText = Slide_Element_DataLink_TimecodeText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.timecodeStatus = Slide_Element_DataLink_TimecodeStatus.decode(
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

  fromJSON(object: any): Slide_Element_DataLink {
    return {
      ticker: isSet(object.ticker)
        ? Slide_Element_DataLink_Ticker.fromJSON(object.ticker)
        : undefined,
      alternateText: isSet(object.alternateText)
        ? Slide_Element_DataLink_AlternateElementText.fromJSON(
            object.alternateText,
          )
        : undefined,
      timerText: isSet(object.timerText)
        ? Slide_Element_DataLink_TimerText.fromJSON(object.timerText)
        : undefined,
      clockText: isSet(object.clockText)
        ? Slide_Element_DataLink_ClockText.fromJSON(object.clockText)
        : undefined,
      chordChart: isSet(object.chordChart)
        ? Slide_Element_DataLink_ChordChart.fromJSON(object.chordChart)
        : undefined,
      outputScreen: isSet(object.outputScreen)
        ? Slide_Element_DataLink_OutputScreen.fromJSON(object.outputScreen)
        : undefined,
      pcoLive: isSet(object.pcoLive)
        ? Slide_Element_DataLink_PCOLive.fromJSON(object.pcoLive)
        : undefined,
      alternateFill: isSet(object.alternateFill)
        ? Slide_Element_DataLink_AlternateElementFill.fromJSON(
            object.alternateFill,
          )
        : undefined,
      visibilityLink: isSet(object.visibilityLink)
        ? Slide_Element_DataLink_VisibilityLink.fromJSON(object.visibilityLink)
        : undefined,
      slideText: isSet(object.slideText)
        ? Slide_Element_DataLink_SlideText.fromJSON(object.slideText)
        : undefined,
      stageMessage: isSet(object.stageMessage)
        ? Slide_Element_DataLink_StageMessage.fromJSON(object.stageMessage)
        : undefined,
      videoCountdown: isSet(object.videoCountdown)
        ? Slide_Element_DataLink_VideoCountdown.fromJSON(object.videoCountdown)
        : undefined,
      slideImage: isSet(object.slideImage)
        ? Slide_Element_DataLink_SlideImage.fromJSON(object.slideImage)
        : undefined,
      ccliText: isSet(object.ccliText)
        ? Slide_Element_DataLink_CCLIText.fromJSON(object.ccliText)
        : undefined,
      groupName: isSet(object.groupName)
        ? Slide_Element_DataLink_GroupName.fromJSON(object.groupName)
        : undefined,
      groupColor: isSet(object.groupColor)
        ? Slide_Element_DataLink_GroupColor.fromJSON(object.groupColor)
        : undefined,
      presentationNotes: isSet(object.presentationNotes)
        ? Slide_Element_DataLink_PresentationNotes.fromJSON(
            object.presentationNotes,
          )
        : undefined,
      playlistItem: isSet(object.playlistItem)
        ? Slide_Element_DataLink_PlaylistItem.fromJSON(object.playlistItem)
        : undefined,
      autoAdvanceTimeRemaining: isSet(object.autoAdvanceTimeRemaining)
        ? Slide_Element_DataLink_AutoAdvanceTimeRemaining.fromJSON(
            object.autoAdvanceTimeRemaining,
          )
        : undefined,
      captureStatusText: isSet(object.captureStatusText)
        ? Slide_Element_DataLink_CaptureStatusText.fromJSON(
            object.captureStatusText,
          )
        : undefined,
      captureStatusColor: isSet(object.captureStatusColor)
        ? Slide_Element_DataLink_CaptureStatusColor.fromJSON(
            object.captureStatusColor,
          )
        : undefined,
      slideCount: isSet(object.slideCount)
        ? Slide_Element_DataLink_SlideCount.fromJSON(object.slideCount)
        : undefined,
      audioCountdown: isSet(object.audioCountdown)
        ? Slide_Element_DataLink_AudioCountdown.fromJSON(object.audioCountdown)
        : undefined,
      presentation: isSet(object.presentation)
        ? Slide_Element_DataLink_Presentation.fromJSON(object.presentation)
        : undefined,
      slideLabelText: isSet(object.slideLabelText)
        ? Slide_Element_DataLink_SlideLabelText.fromJSON(object.slideLabelText)
        : undefined,
      slideLabelColor: isSet(object.slideLabelColor)
        ? Slide_Element_DataLink_SlideLabelColor.fromJSON(
            object.slideLabelColor,
          )
        : undefined,
      rssFeed: isSet(object.rssFeed)
        ? Slide_Element_DataLink_RSSFeed.fromJSON(object.rssFeed)
        : undefined,
      fileFeed: isSet(object.fileFeed)
        ? Slide_Element_DataLink_FileFeed.fromJSON(object.fileFeed)
        : undefined,
      chordProChart: isSet(object.chordProChart)
        ? Slide_Element_DataLink_ChordProChart.fromJSON(object.chordProChart)
        : undefined,
      playbackMarkerText: isSet(object.playbackMarkerText)
        ? Slide_Element_DataLink_PlaybackMarkerText.fromJSON(
            object.playbackMarkerText,
          )
        : undefined,
      playbackMarkerColor: isSet(object.playbackMarkerColor)
        ? Slide_Element_DataLink_PlaybackMarkerIdentifier.fromJSON(
            object.playbackMarkerColor,
          )
        : undefined,
      timecodeText: isSet(object.timecodeText)
        ? Slide_Element_DataLink_TimecodeText.fromJSON(object.timecodeText)
        : undefined,
      timecodeStatus: isSet(object.timecodeStatus)
        ? Slide_Element_DataLink_TimecodeStatus.fromJSON(object.timecodeStatus)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink): unknown {
    const obj: any = {};
    if (message.ticker !== undefined) {
      obj.ticker = Slide_Element_DataLink_Ticker.toJSON(message.ticker);
    }
    if (message.alternateText !== undefined) {
      obj.alternateText = Slide_Element_DataLink_AlternateElementText.toJSON(
        message.alternateText,
      );
    }
    if (message.timerText !== undefined) {
      obj.timerText = Slide_Element_DataLink_TimerText.toJSON(
        message.timerText,
      );
    }
    if (message.clockText !== undefined) {
      obj.clockText = Slide_Element_DataLink_ClockText.toJSON(
        message.clockText,
      );
    }
    if (message.chordChart !== undefined) {
      obj.chordChart = Slide_Element_DataLink_ChordChart.toJSON(
        message.chordChart,
      );
    }
    if (message.outputScreen !== undefined) {
      obj.outputScreen = Slide_Element_DataLink_OutputScreen.toJSON(
        message.outputScreen,
      );
    }
    if (message.pcoLive !== undefined) {
      obj.pcoLive = Slide_Element_DataLink_PCOLive.toJSON(message.pcoLive);
    }
    if (message.alternateFill !== undefined) {
      obj.alternateFill = Slide_Element_DataLink_AlternateElementFill.toJSON(
        message.alternateFill,
      );
    }
    if (message.visibilityLink !== undefined) {
      obj.visibilityLink = Slide_Element_DataLink_VisibilityLink.toJSON(
        message.visibilityLink,
      );
    }
    if (message.slideText !== undefined) {
      obj.slideText = Slide_Element_DataLink_SlideText.toJSON(
        message.slideText,
      );
    }
    if (message.stageMessage !== undefined) {
      obj.stageMessage = Slide_Element_DataLink_StageMessage.toJSON(
        message.stageMessage,
      );
    }
    if (message.videoCountdown !== undefined) {
      obj.videoCountdown = Slide_Element_DataLink_VideoCountdown.toJSON(
        message.videoCountdown,
      );
    }
    if (message.slideImage !== undefined) {
      obj.slideImage = Slide_Element_DataLink_SlideImage.toJSON(
        message.slideImage,
      );
    }
    if (message.ccliText !== undefined) {
      obj.ccliText = Slide_Element_DataLink_CCLIText.toJSON(message.ccliText);
    }
    if (message.groupName !== undefined) {
      obj.groupName = Slide_Element_DataLink_GroupName.toJSON(
        message.groupName,
      );
    }
    if (message.groupColor !== undefined) {
      obj.groupColor = Slide_Element_DataLink_GroupColor.toJSON(
        message.groupColor,
      );
    }
    if (message.presentationNotes !== undefined) {
      obj.presentationNotes = Slide_Element_DataLink_PresentationNotes.toJSON(
        message.presentationNotes,
      );
    }
    if (message.playlistItem !== undefined) {
      obj.playlistItem = Slide_Element_DataLink_PlaylistItem.toJSON(
        message.playlistItem,
      );
    }
    if (message.autoAdvanceTimeRemaining !== undefined) {
      obj.autoAdvanceTimeRemaining =
        Slide_Element_DataLink_AutoAdvanceTimeRemaining.toJSON(
          message.autoAdvanceTimeRemaining,
        );
    }
    if (message.captureStatusText !== undefined) {
      obj.captureStatusText = Slide_Element_DataLink_CaptureStatusText.toJSON(
        message.captureStatusText,
      );
    }
    if (message.captureStatusColor !== undefined) {
      obj.captureStatusColor = Slide_Element_DataLink_CaptureStatusColor.toJSON(
        message.captureStatusColor,
      );
    }
    if (message.slideCount !== undefined) {
      obj.slideCount = Slide_Element_DataLink_SlideCount.toJSON(
        message.slideCount,
      );
    }
    if (message.audioCountdown !== undefined) {
      obj.audioCountdown = Slide_Element_DataLink_AudioCountdown.toJSON(
        message.audioCountdown,
      );
    }
    if (message.presentation !== undefined) {
      obj.presentation = Slide_Element_DataLink_Presentation.toJSON(
        message.presentation,
      );
    }
    if (message.slideLabelText !== undefined) {
      obj.slideLabelText = Slide_Element_DataLink_SlideLabelText.toJSON(
        message.slideLabelText,
      );
    }
    if (message.slideLabelColor !== undefined) {
      obj.slideLabelColor = Slide_Element_DataLink_SlideLabelColor.toJSON(
        message.slideLabelColor,
      );
    }
    if (message.rssFeed !== undefined) {
      obj.rssFeed = Slide_Element_DataLink_RSSFeed.toJSON(message.rssFeed);
    }
    if (message.fileFeed !== undefined) {
      obj.fileFeed = Slide_Element_DataLink_FileFeed.toJSON(message.fileFeed);
    }
    if (message.chordProChart !== undefined) {
      obj.chordProChart = Slide_Element_DataLink_ChordProChart.toJSON(
        message.chordProChart,
      );
    }
    if (message.playbackMarkerText !== undefined) {
      obj.playbackMarkerText = Slide_Element_DataLink_PlaybackMarkerText.toJSON(
        message.playbackMarkerText,
      );
    }
    if (message.playbackMarkerColor !== undefined) {
      obj.playbackMarkerColor =
        Slide_Element_DataLink_PlaybackMarkerIdentifier.toJSON(
          message.playbackMarkerColor,
        );
    }
    if (message.timecodeText !== undefined) {
      obj.timecodeText = Slide_Element_DataLink_TimecodeText.toJSON(
        message.timecodeText,
      );
    }
    if (message.timecodeStatus !== undefined) {
      obj.timecodeStatus = Slide_Element_DataLink_TimecodeStatus.toJSON(
        message.timecodeStatus,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink>, I>>(
    base?: I,
  ): Slide_Element_DataLink {
    return Slide_Element_DataLink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink>, I>>(
    object: I,
  ): Slide_Element_DataLink {
    const message = createBaseSlide_Element_DataLink();
    message.ticker =
      object.ticker !== undefined && object.ticker !== null
        ? Slide_Element_DataLink_Ticker.fromPartial(object.ticker)
        : undefined;
    message.alternateText =
      object.alternateText !== undefined && object.alternateText !== null
        ? Slide_Element_DataLink_AlternateElementText.fromPartial(
            object.alternateText,
          )
        : undefined;
    message.timerText =
      object.timerText !== undefined && object.timerText !== null
        ? Slide_Element_DataLink_TimerText.fromPartial(object.timerText)
        : undefined;
    message.clockText =
      object.clockText !== undefined && object.clockText !== null
        ? Slide_Element_DataLink_ClockText.fromPartial(object.clockText)
        : undefined;
    message.chordChart =
      object.chordChart !== undefined && object.chordChart !== null
        ? Slide_Element_DataLink_ChordChart.fromPartial(object.chordChart)
        : undefined;
    message.outputScreen =
      object.outputScreen !== undefined && object.outputScreen !== null
        ? Slide_Element_DataLink_OutputScreen.fromPartial(object.outputScreen)
        : undefined;
    message.pcoLive =
      object.pcoLive !== undefined && object.pcoLive !== null
        ? Slide_Element_DataLink_PCOLive.fromPartial(object.pcoLive)
        : undefined;
    message.alternateFill =
      object.alternateFill !== undefined && object.alternateFill !== null
        ? Slide_Element_DataLink_AlternateElementFill.fromPartial(
            object.alternateFill,
          )
        : undefined;
    message.visibilityLink =
      object.visibilityLink !== undefined && object.visibilityLink !== null
        ? Slide_Element_DataLink_VisibilityLink.fromPartial(
            object.visibilityLink,
          )
        : undefined;
    message.slideText =
      object.slideText !== undefined && object.slideText !== null
        ? Slide_Element_DataLink_SlideText.fromPartial(object.slideText)
        : undefined;
    message.stageMessage =
      object.stageMessage !== undefined && object.stageMessage !== null
        ? Slide_Element_DataLink_StageMessage.fromPartial(object.stageMessage)
        : undefined;
    message.videoCountdown =
      object.videoCountdown !== undefined && object.videoCountdown !== null
        ? Slide_Element_DataLink_VideoCountdown.fromPartial(
            object.videoCountdown,
          )
        : undefined;
    message.slideImage =
      object.slideImage !== undefined && object.slideImage !== null
        ? Slide_Element_DataLink_SlideImage.fromPartial(object.slideImage)
        : undefined;
    message.ccliText =
      object.ccliText !== undefined && object.ccliText !== null
        ? Slide_Element_DataLink_CCLIText.fromPartial(object.ccliText)
        : undefined;
    message.groupName =
      object.groupName !== undefined && object.groupName !== null
        ? Slide_Element_DataLink_GroupName.fromPartial(object.groupName)
        : undefined;
    message.groupColor =
      object.groupColor !== undefined && object.groupColor !== null
        ? Slide_Element_DataLink_GroupColor.fromPartial(object.groupColor)
        : undefined;
    message.presentationNotes =
      object.presentationNotes !== undefined &&
      object.presentationNotes !== null
        ? Slide_Element_DataLink_PresentationNotes.fromPartial(
            object.presentationNotes,
          )
        : undefined;
    message.playlistItem =
      object.playlistItem !== undefined && object.playlistItem !== null
        ? Slide_Element_DataLink_PlaylistItem.fromPartial(object.playlistItem)
        : undefined;
    message.autoAdvanceTimeRemaining =
      object.autoAdvanceTimeRemaining !== undefined &&
      object.autoAdvanceTimeRemaining !== null
        ? Slide_Element_DataLink_AutoAdvanceTimeRemaining.fromPartial(
            object.autoAdvanceTimeRemaining,
          )
        : undefined;
    message.captureStatusText =
      object.captureStatusText !== undefined &&
      object.captureStatusText !== null
        ? Slide_Element_DataLink_CaptureStatusText.fromPartial(
            object.captureStatusText,
          )
        : undefined;
    message.captureStatusColor =
      object.captureStatusColor !== undefined &&
      object.captureStatusColor !== null
        ? Slide_Element_DataLink_CaptureStatusColor.fromPartial(
            object.captureStatusColor,
          )
        : undefined;
    message.slideCount =
      object.slideCount !== undefined && object.slideCount !== null
        ? Slide_Element_DataLink_SlideCount.fromPartial(object.slideCount)
        : undefined;
    message.audioCountdown =
      object.audioCountdown !== undefined && object.audioCountdown !== null
        ? Slide_Element_DataLink_AudioCountdown.fromPartial(
            object.audioCountdown,
          )
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? Slide_Element_DataLink_Presentation.fromPartial(object.presentation)
        : undefined;
    message.slideLabelText =
      object.slideLabelText !== undefined && object.slideLabelText !== null
        ? Slide_Element_DataLink_SlideLabelText.fromPartial(
            object.slideLabelText,
          )
        : undefined;
    message.slideLabelColor =
      object.slideLabelColor !== undefined && object.slideLabelColor !== null
        ? Slide_Element_DataLink_SlideLabelColor.fromPartial(
            object.slideLabelColor,
          )
        : undefined;
    message.rssFeed =
      object.rssFeed !== undefined && object.rssFeed !== null
        ? Slide_Element_DataLink_RSSFeed.fromPartial(object.rssFeed)
        : undefined;
    message.fileFeed =
      object.fileFeed !== undefined && object.fileFeed !== null
        ? Slide_Element_DataLink_FileFeed.fromPartial(object.fileFeed)
        : undefined;
    message.chordProChart =
      object.chordProChart !== undefined && object.chordProChart !== null
        ? Slide_Element_DataLink_ChordProChart.fromPartial(object.chordProChart)
        : undefined;
    message.playbackMarkerText =
      object.playbackMarkerText !== undefined &&
      object.playbackMarkerText !== null
        ? Slide_Element_DataLink_PlaybackMarkerText.fromPartial(
            object.playbackMarkerText,
          )
        : undefined;
    message.playbackMarkerColor =
      object.playbackMarkerColor !== undefined &&
      object.playbackMarkerColor !== null
        ? Slide_Element_DataLink_PlaybackMarkerIdentifier.fromPartial(
            object.playbackMarkerColor,
          )
        : undefined;
    message.timecodeText =
      object.timecodeText !== undefined && object.timecodeText !== null
        ? Slide_Element_DataLink_TimecodeText.fromPartial(object.timecodeText)
        : undefined;
    message.timecodeStatus =
      object.timecodeStatus !== undefined && object.timecodeStatus !== null
        ? Slide_Element_DataLink_TimecodeStatus.fromPartial(
            object.timecodeStatus,
          )
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_RSSFeed(): Slide_Element_DataLink_RSSFeed {
  return { url: undefined, content: 0, textDelimiter: '' };
}

export const Slide_Element_DataLink_RSSFeed = {
  encode(
    message: Slide_Element_DataLink_RSSFeed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== 0) {
      writer.uint32(16).int32(message.content);
    }
    if (message.textDelimiter !== '') {
      writer.uint32(26).string(message.textDelimiter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_RSSFeed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_RSSFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.content = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textDelimiter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_RSSFeed {
    return {
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      content: isSet(object.content)
        ? slide_Element_DataLink_RSSFeed_ContentTypeFromJSON(object.content)
        : 0,
      textDelimiter: isSet(object.textDelimiter)
        ? globalThis.String(object.textDelimiter)
        : '',
    };
  },

  toJSON(message: Slide_Element_DataLink_RSSFeed): unknown {
    const obj: any = {};
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    if (message.content !== 0) {
      obj.content = slide_Element_DataLink_RSSFeed_ContentTypeToJSON(
        message.content,
      );
    }
    if (message.textDelimiter !== '') {
      obj.textDelimiter = message.textDelimiter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_RSSFeed>, I>>(
    base?: I,
  ): Slide_Element_DataLink_RSSFeed {
    return Slide_Element_DataLink_RSSFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_RSSFeed>, I>>(
    object: I,
  ): Slide_Element_DataLink_RSSFeed {
    const message = createBaseSlide_Element_DataLink_RSSFeed();
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.content = object.content ?? 0;
    message.textDelimiter = object.textDelimiter ?? '';
    return message;
  },
};

function createBaseSlide_Element_DataLink_FileFeed(): Slide_Element_DataLink_FileFeed {
  return { url: undefined };
}

export const Slide_Element_DataLink_FileFeed = {
  encode(
    message: Slide_Element_DataLink_FileFeed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_FileFeed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_FileFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_FileFeed {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: Slide_Element_DataLink_FileFeed): unknown {
    const obj: any = {};
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_FileFeed>, I>>(
    base?: I,
  ): Slide_Element_DataLink_FileFeed {
    return Slide_Element_DataLink_FileFeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_FileFeed>, I>>(
    object: I,
  ): Slide_Element_DataLink_FileFeed {
    const message = createBaseSlide_Element_DataLink_FileFeed();
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker(): Slide_Element_DataLink_Ticker {
  return {
    playRate: 0,
    shouldLoop: false,
    loopDelay: 0,
    textDelimiter: '',
    textType: undefined,
    rssType: undefined,
    fileType: undefined,
  };
}

export const Slide_Element_DataLink_Ticker = {
  encode(
    message: Slide_Element_DataLink_Ticker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(33).double(message.playRate);
    }
    if (message.shouldLoop === true) {
      writer.uint32(40).bool(message.shouldLoop);
    }
    if (message.loopDelay !== 0) {
      writer.uint32(49).double(message.loopDelay);
    }
    if (message.textDelimiter !== '') {
      writer.uint32(58).string(message.textDelimiter);
    }
    if (message.textType !== undefined) {
      Slide_Element_DataLink_Ticker_TextType.encode(
        message.textType,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.rssType !== undefined) {
      Slide_Element_DataLink_Ticker_RSSType.encode(
        message.rssType,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.fileType !== undefined) {
      Slide_Element_DataLink_Ticker_FileType.encode(
        message.fileType,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_Ticker {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 33) {
            break;
          }

          message.playRate = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.shouldLoop = reader.bool();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.loopDelay = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.textDelimiter = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textType = Slide_Element_DataLink_Ticker_TextType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rssType = Slide_Element_DataLink_Ticker_RSSType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileType = Slide_Element_DataLink_Ticker_FileType.decode(
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

  fromJSON(object: any): Slide_Element_DataLink_Ticker {
    return {
      playRate: isSet(object.playRate) ? globalThis.Number(object.playRate) : 0,
      shouldLoop: isSet(object.shouldLoop)
        ? globalThis.Boolean(object.shouldLoop)
        : false,
      loopDelay: isSet(object.loopDelay)
        ? globalThis.Number(object.loopDelay)
        : 0,
      textDelimiter: isSet(object.textDelimiter)
        ? globalThis.String(object.textDelimiter)
        : '',
      textType: isSet(object.textType)
        ? Slide_Element_DataLink_Ticker_TextType.fromJSON(object.textType)
        : undefined,
      rssType: isSet(object.rssType)
        ? Slide_Element_DataLink_Ticker_RSSType.fromJSON(object.rssType)
        : undefined,
      fileType: isSet(object.fileType)
        ? Slide_Element_DataLink_Ticker_FileType.fromJSON(object.fileType)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_Ticker): unknown {
    const obj: any = {};
    if (message.playRate !== 0) {
      obj.playRate = message.playRate;
    }
    if (message.shouldLoop === true) {
      obj.shouldLoop = message.shouldLoop;
    }
    if (message.loopDelay !== 0) {
      obj.loopDelay = message.loopDelay;
    }
    if (message.textDelimiter !== '') {
      obj.textDelimiter = message.textDelimiter;
    }
    if (message.textType !== undefined) {
      obj.textType = Slide_Element_DataLink_Ticker_TextType.toJSON(
        message.textType,
      );
    }
    if (message.rssType !== undefined) {
      obj.rssType = Slide_Element_DataLink_Ticker_RSSType.toJSON(
        message.rssType,
      );
    }
    if (message.fileType !== undefined) {
      obj.fileType = Slide_Element_DataLink_Ticker_FileType.toJSON(
        message.fileType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker>, I>>(
    base?: I,
  ): Slide_Element_DataLink_Ticker {
    return Slide_Element_DataLink_Ticker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker>, I>>(
    object: I,
  ): Slide_Element_DataLink_Ticker {
    const message = createBaseSlide_Element_DataLink_Ticker();
    message.playRate = object.playRate ?? 0;
    message.shouldLoop = object.shouldLoop ?? false;
    message.loopDelay = object.loopDelay ?? 0;
    message.textDelimiter = object.textDelimiter ?? '';
    message.textType =
      object.textType !== undefined && object.textType !== null
        ? Slide_Element_DataLink_Ticker_TextType.fromPartial(object.textType)
        : undefined;
    message.rssType =
      object.rssType !== undefined && object.rssType !== null
        ? Slide_Element_DataLink_Ticker_RSSType.fromPartial(object.rssType)
        : undefined;
    message.fileType =
      object.fileType !== undefined && object.fileType !== null
        ? Slide_Element_DataLink_Ticker_FileType.fromPartial(object.fileType)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_TextType(): Slide_Element_DataLink_Ticker_TextType {
  return { text: '' };
}

export const Slide_Element_DataLink_Ticker_TextType = {
  encode(
    message: Slide_Element_DataLink_Ticker_TextType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.text !== '') {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_Ticker_TextType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_TextType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker_TextType {
    return { text: isSet(object.text) ? globalThis.String(object.text) : '' };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_TextType): unknown {
    const obj: any = {};
    if (message.text !== '') {
      obj.text = message.text;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_TextType>, I>,
  >(base?: I): Slide_Element_DataLink_Ticker_TextType {
    return Slide_Element_DataLink_Ticker_TextType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_TextType>, I>,
  >(object: I): Slide_Element_DataLink_Ticker_TextType {
    const message = createBaseSlide_Element_DataLink_Ticker_TextType();
    message.text = object.text ?? '';
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_RSSType(): Slide_Element_DataLink_Ticker_RSSType {
  return { url: undefined, content: 0 };
}

export const Slide_Element_DataLink_Ticker_RSSType = {
  encode(
    message: Slide_Element_DataLink_Ticker_RSSType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== 0) {
      writer.uint32(16).int32(message.content);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_Ticker_RSSType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_RSSType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.content = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker_RSSType {
    return {
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      content: isSet(object.content)
        ? slide_Element_DataLink_Ticker_RSSType_ContentTypeFromJSON(
            object.content,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_RSSType): unknown {
    const obj: any = {};
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    if (message.content !== 0) {
      obj.content = slide_Element_DataLink_Ticker_RSSType_ContentTypeToJSON(
        message.content,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_RSSType>, I>,
  >(base?: I): Slide_Element_DataLink_Ticker_RSSType {
    return Slide_Element_DataLink_Ticker_RSSType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_RSSType>, I>,
  >(object: I): Slide_Element_DataLink_Ticker_RSSType {
    const message = createBaseSlide_Element_DataLink_Ticker_RSSType();
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.content = object.content ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_Ticker_FileType(): Slide_Element_DataLink_Ticker_FileType {
  return { url: undefined };
}

export const Slide_Element_DataLink_Ticker_FileType = {
  encode(
    message: Slide_Element_DataLink_Ticker_FileType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_Ticker_FileType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Ticker_FileType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Ticker_FileType {
    return { url: isSet(object.url) ? URL.fromJSON(object.url) : undefined };
  },

  toJSON(message: Slide_Element_DataLink_Ticker_FileType): unknown {
    const obj: any = {};
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_FileType>, I>,
  >(base?: I): Slide_Element_DataLink_Ticker_FileType {
    return Slide_Element_DataLink_Ticker_FileType.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Ticker_FileType>, I>,
  >(object: I): Slide_Element_DataLink_Ticker_FileType {
    const message = createBaseSlide_Element_DataLink_Ticker_FileType();
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AlternateElementText(): Slide_Element_DataLink_AlternateElementText {
  return {
    otherElementUuid: undefined,
    otherElementName: '',
    textTransformOptions: 0,
    textTransform: 0,
  };
}

export const Slide_Element_DataLink_AlternateElementText = {
  encode(
    message: Slide_Element_DataLink_AlternateElementText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.otherElementUuid !== undefined) {
      UUID.encode(message.otherElementUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherElementName !== '') {
      writer.uint32(18).string(message.otherElementName);
    }
    if (message.textTransformOptions !== 0) {
      writer.uint32(24).uint32(message.textTransformOptions);
    }
    if (message.textTransform !== 0) {
      writer.uint32(32).int32(message.textTransform);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_AlternateElementText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AlternateElementText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.otherElementUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.otherElementName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.textTransformOptions = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.textTransform = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AlternateElementText {
    return {
      otherElementUuid: isSet(object.otherElementUuid)
        ? UUID.fromJSON(object.otherElementUuid)
        : undefined,
      otherElementName: isSet(object.otherElementName)
        ? globalThis.String(object.otherElementName)
        : '',
      textTransformOptions: isSet(object.textTransformOptions)
        ? globalThis.Number(object.textTransformOptions)
        : 0,
      textTransform: isSet(object.textTransform)
        ? slide_Element_DataLink_AlternateElementText_TextTransformOptionFromJSON(
            object.textTransform,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_AlternateElementText): unknown {
    const obj: any = {};
    if (message.otherElementUuid !== undefined) {
      obj.otherElementUuid = UUID.toJSON(message.otherElementUuid);
    }
    if (message.otherElementName !== '') {
      obj.otherElementName = message.otherElementName;
    }
    if (message.textTransformOptions !== 0) {
      obj.textTransformOptions = Math.round(message.textTransformOptions);
    }
    if (message.textTransform !== 0) {
      obj.textTransform =
        slide_Element_DataLink_AlternateElementText_TextTransformOptionToJSON(
          message.textTransform,
        );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AlternateElementText>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_AlternateElementText {
    return Slide_Element_DataLink_AlternateElementText.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AlternateElementText>,
      I
    >,
  >(object: I): Slide_Element_DataLink_AlternateElementText {
    const message = createBaseSlide_Element_DataLink_AlternateElementText();
    message.otherElementUuid =
      object.otherElementUuid !== undefined && object.otherElementUuid !== null
        ? UUID.fromPartial(object.otherElementUuid)
        : undefined;
    message.otherElementName = object.otherElementName ?? '';
    message.textTransformOptions = object.textTransformOptions ?? 0;
    message.textTransform = object.textTransform ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CCLIText(): Slide_Element_DataLink_CCLIText {
  return {};
}

export const Slide_Element_DataLink_CCLIText = {
  encode(
    _: Slide_Element_DataLink_CCLIText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_CCLIText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CCLIText();
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

  fromJSON(_: any): Slide_Element_DataLink_CCLIText {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CCLIText): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_CCLIText>, I>>(
    base?: I,
  ): Slide_Element_DataLink_CCLIText {
    return Slide_Element_DataLink_CCLIText.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_CCLIText>, I>>(
    _: I,
  ): Slide_Element_DataLink_CCLIText {
    const message = createBaseSlide_Element_DataLink_CCLIText();
    return message;
  },
};

function createBaseSlide_Element_DataLink_ColorTrigger(): Slide_Element_DataLink_ColorTrigger {
  return { time: 0, color: undefined };
}

export const Slide_Element_DataLink_ColorTrigger = {
  encode(
    message: Slide_Element_DataLink_ColorTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_ColorTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ColorTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_ColorTrigger {
    return {
      time: isSet(object.time) ? globalThis.Number(object.time) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_ColorTrigger): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_ColorTrigger>, I>>(
    base?: I,
  ): Slide_Element_DataLink_ColorTrigger {
    return Slide_Element_DataLink_ColorTrigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_ColorTrigger>, I>,
  >(object: I): Slide_Element_DataLink_ColorTrigger {
    const message = createBaseSlide_Element_DataLink_ColorTrigger();
    message.time = object.time ?? 0;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_TimerText(): Slide_Element_DataLink_TimerText {
  return {
    timerUuid: undefined,
    timerName: '',
    timerFormat: undefined,
    timerFormatString: '',
    colorTriggers: [],
  };
}

export const Slide_Element_DataLink_TimerText = {
  encode(
    message: Slide_Element_DataLink_TimerText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerName !== '') {
      writer.uint32(18).string(message.timerName);
    }
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(
        message.timerFormat,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.timerFormatString !== '') {
      writer.uint32(34).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(
        v!,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_TimerText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_TimerText();
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

          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.timerFormatString = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.colorTriggers.push(
            Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Slide_Element_DataLink_TimerText {
    return {
      timerUuid: isSet(object.timerUuid)
        ? UUID.fromJSON(object.timerUuid)
        : undefined,
      timerName: isSet(object.timerName)
        ? globalThis.String(object.timerName)
        : '',
      timerFormat: isSet(object.timerFormat)
        ? Timer_Format.fromJSON(object.timerFormat)
        : undefined,
      timerFormatString: isSet(object.timerFormatString)
        ? globalThis.String(object.timerFormatString)
        : '',
      colorTriggers: globalThis.Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) =>
            Slide_Element_DataLink_ColorTrigger.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: Slide_Element_DataLink_TimerText): unknown {
    const obj: any = {};
    if (message.timerUuid !== undefined) {
      obj.timerUuid = UUID.toJSON(message.timerUuid);
    }
    if (message.timerName !== '') {
      obj.timerName = message.timerName;
    }
    if (message.timerFormat !== undefined) {
      obj.timerFormat = Timer_Format.toJSON(message.timerFormat);
    }
    if (message.timerFormatString !== '') {
      obj.timerFormatString = message.timerFormatString;
    }
    if (message.colorTriggers?.length) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        Slide_Element_DataLink_ColorTrigger.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_TimerText>, I>>(
    base?: I,
  ): Slide_Element_DataLink_TimerText {
    return Slide_Element_DataLink_TimerText.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_TimerText>, I>,
  >(object: I): Slide_Element_DataLink_TimerText {
    const message = createBaseSlide_Element_DataLink_TimerText();
    message.timerUuid =
      object.timerUuid !== undefined && object.timerUuid !== null
        ? UUID.fromPartial(object.timerUuid)
        : undefined;
    message.timerName = object.timerName ?? '';
    message.timerFormat =
      object.timerFormat !== undefined && object.timerFormat !== null
        ? Timer_Format.fromPartial(object.timerFormat)
        : undefined;
    message.timerFormatString = object.timerFormatString ?? '';
    message.colorTriggers =
      object.colorTriggers?.map((e) =>
        Slide_Element_DataLink_ColorTrigger.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseSlide_Element_DataLink_ClockText(): Slide_Element_DataLink_ClockText {
  return { clockFormatString: '', format: undefined };
}

export const Slide_Element_DataLink_ClockText = {
  encode(
    message: Slide_Element_DataLink_ClockText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clockFormatString !== '') {
      writer.uint32(10).string(message.clockFormatString);
    }
    if (message.format !== undefined) {
      Clock_Format.encode(message.format, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_ClockText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ClockText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clockFormatString = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.format = Clock_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_ClockText {
    return {
      clockFormatString: isSet(object.clockFormatString)
        ? globalThis.String(object.clockFormatString)
        : '',
      format: isSet(object.format)
        ? Clock_Format.fromJSON(object.format)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_ClockText): unknown {
    const obj: any = {};
    if (message.clockFormatString !== '') {
      obj.clockFormatString = message.clockFormatString;
    }
    if (message.format !== undefined) {
      obj.format = Clock_Format.toJSON(message.format);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_ClockText>, I>>(
    base?: I,
  ): Slide_Element_DataLink_ClockText {
    return Slide_Element_DataLink_ClockText.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_ClockText>, I>,
  >(object: I): Slide_Element_DataLink_ClockText {
    const message = createBaseSlide_Element_DataLink_ClockText();
    message.clockFormatString = object.clockFormatString ?? '';
    message.format =
      object.format !== undefined && object.format !== null
        ? Clock_Format.fromPartial(object.format)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_ChordChart(): Slide_Element_DataLink_ChordChart {
  return {};
}

export const Slide_Element_DataLink_ChordChart = {
  encode(
    _: Slide_Element_DataLink_ChordChart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_ChordChart {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ChordChart();
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

  fromJSON(_: any): Slide_Element_DataLink_ChordChart {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_ChordChart): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_ChordChart>, I>>(
    base?: I,
  ): Slide_Element_DataLink_ChordChart {
    return Slide_Element_DataLink_ChordChart.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_ChordChart>, I>,
  >(_: I): Slide_Element_DataLink_ChordChart {
    const message = createBaseSlide_Element_DataLink_ChordChart();
    return message;
  },
};

function createBaseSlide_Element_DataLink_OutputScreen(): Slide_Element_DataLink_OutputScreen {
  return { screenId: undefined, screenName: '' };
}

export const Slide_Element_DataLink_OutputScreen = {
  encode(
    message: Slide_Element_DataLink_OutputScreen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenId !== undefined) {
      UUID.encode(message.screenId, writer.uint32(10).fork()).ldelim();
    }
    if (message.screenName !== '') {
      writer.uint32(18).string(message.screenName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_OutputScreen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_OutputScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screenId = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_OutputScreen {
    return {
      screenId: isSet(object.screenId)
        ? UUID.fromJSON(object.screenId)
        : undefined,
      screenName: isSet(object.screenName)
        ? globalThis.String(object.screenName)
        : '',
    };
  },

  toJSON(message: Slide_Element_DataLink_OutputScreen): unknown {
    const obj: any = {};
    if (message.screenId !== undefined) {
      obj.screenId = UUID.toJSON(message.screenId);
    }
    if (message.screenName !== '') {
      obj.screenName = message.screenName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_OutputScreen>, I>>(
    base?: I,
  ): Slide_Element_DataLink_OutputScreen {
    return Slide_Element_DataLink_OutputScreen.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_OutputScreen>, I>,
  >(object: I): Slide_Element_DataLink_OutputScreen {
    const message = createBaseSlide_Element_DataLink_OutputScreen();
    message.screenId =
      object.screenId !== undefined && object.screenId !== null
        ? UUID.fromPartial(object.screenId)
        : undefined;
    message.screenName = object.screenName ?? '';
    return message;
  },
};

function createBaseSlide_Element_DataLink_PCOLive(): Slide_Element_DataLink_PCOLive {
  return { theme: 0, countdownType: 0 };
}

export const Slide_Element_DataLink_PCOLive = {
  encode(
    message: Slide_Element_DataLink_PCOLive,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.theme !== 0) {
      writer.uint32(16).int32(message.theme);
    }
    if (message.countdownType !== 0) {
      writer.uint32(24).int32(message.countdownType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PCOLive {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PCOLive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.theme = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.countdownType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_PCOLive {
    return {
      theme: isSet(object.theme)
        ? slide_Element_DataLink_PCOLive_ThemeFromJSON(object.theme)
        : 0,
      countdownType: isSet(object.countdownType)
        ? slide_Element_DataLink_PCOLive_CountdownTypeFromJSON(
            object.countdownType,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_PCOLive): unknown {
    const obj: any = {};
    if (message.theme !== 0) {
      obj.theme = slide_Element_DataLink_PCOLive_ThemeToJSON(message.theme);
    }
    if (message.countdownType !== 0) {
      obj.countdownType = slide_Element_DataLink_PCOLive_CountdownTypeToJSON(
        message.countdownType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_PCOLive>, I>>(
    base?: I,
  ): Slide_Element_DataLink_PCOLive {
    return Slide_Element_DataLink_PCOLive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_DataLink_PCOLive>, I>>(
    object: I,
  ): Slide_Element_DataLink_PCOLive {
    const message = createBaseSlide_Element_DataLink_PCOLive();
    message.theme = object.theme ?? 0;
    message.countdownType = object.countdownType ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AlternateElementFill(): Slide_Element_DataLink_AlternateElementFill {
  return { otherElementUuid: undefined, otherElementName: '' };
}

export const Slide_Element_DataLink_AlternateElementFill = {
  encode(
    message: Slide_Element_DataLink_AlternateElementFill,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.otherElementUuid !== undefined) {
      UUID.encode(message.otherElementUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.otherElementName !== '') {
      writer.uint32(18).string(message.otherElementName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_AlternateElementFill {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AlternateElementFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.otherElementUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.otherElementName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AlternateElementFill {
    return {
      otherElementUuid: isSet(object.otherElementUuid)
        ? UUID.fromJSON(object.otherElementUuid)
        : undefined,
      otherElementName: isSet(object.otherElementName)
        ? globalThis.String(object.otherElementName)
        : '',
    };
  },

  toJSON(message: Slide_Element_DataLink_AlternateElementFill): unknown {
    const obj: any = {};
    if (message.otherElementUuid !== undefined) {
      obj.otherElementUuid = UUID.toJSON(message.otherElementUuid);
    }
    if (message.otherElementName !== '') {
      obj.otherElementName = message.otherElementName;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AlternateElementFill>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_AlternateElementFill {
    return Slide_Element_DataLink_AlternateElementFill.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AlternateElementFill>,
      I
    >,
  >(object: I): Slide_Element_DataLink_AlternateElementFill {
    const message = createBaseSlide_Element_DataLink_AlternateElementFill();
    message.otherElementUuid =
      object.otherElementUuid !== undefined && object.otherElementUuid !== null
        ? UUID.fromPartial(object.otherElementUuid)
        : undefined;
    message.otherElementName = object.otherElementName ?? '';
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink(): Slide_Element_DataLink_VisibilityLink {
  return { visibilityCriterion: 0, conditions: [] };
}

export const Slide_Element_DataLink_VisibilityLink = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibilityCriterion !== 0) {
      writer.uint32(8).int32(message.visibilityCriterion);
    }
    for (const v of message.conditions) {
      Slide_Element_DataLink_VisibilityLink_Condition.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.visibilityCriterion = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.conditions.push(
            Slide_Element_DataLink_VisibilityLink_Condition.decode(
              reader,
              reader.uint32(),
            ),
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

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink {
    return {
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_VisibilityCriterionFromJSON(
            object.visibilityCriterion,
          )
        : 0,
      conditions: globalThis.Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) =>
            Slide_Element_DataLink_VisibilityLink_Condition.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink): unknown {
    const obj: any = {};
    if (message.visibilityCriterion !== 0) {
      obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_VisibilityCriterionToJSON(
          message.visibilityCriterion,
        );
    }
    if (message.conditions?.length) {
      obj.conditions = message.conditions.map((e) =>
        Slide_Element_DataLink_VisibilityLink_Condition.toJSON(e),
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink>, I>,
  >(base?: I): Slide_Element_DataLink_VisibilityLink {
    return Slide_Element_DataLink_VisibilityLink.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VisibilityLink>, I>,
  >(object: I): Slide_Element_DataLink_VisibilityLink {
    const message = createBaseSlide_Element_DataLink_VisibilityLink();
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    message.conditions =
      object.conditions?.map((e) =>
        Slide_Element_DataLink_VisibilityLink_Condition.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition(): Slide_Element_DataLink_VisibilityLink_Condition {
  return {
    elementVisibility: undefined,
    timerVisibility: undefined,
    videoCountdownVisibility: undefined,
    captureSessionVisibility: undefined,
    videoInputVisibility: undefined,
    audioCountdownVisibility: undefined,
  };
}

export const Slide_Element_DataLink_VisibilityLink_Condition = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.elementVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.encode(
        message.elementVisibility,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.timerVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.encode(
        message.timerVisibility,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.videoCountdownVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.encode(
        message.videoCountdownVisibility,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.captureSessionVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.encode(
        message.captureSessionVisibility,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.videoInputVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.encode(
        message.videoInputVisibility,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.audioCountdownVisibility !== undefined) {
      Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.encode(
        message.audioCountdownVisibility,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elementVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timerVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.videoCountdownVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.captureSessionVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.videoInputVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.audioCountdownVisibility =
            Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.decode(
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

  fromJSON(object: any): Slide_Element_DataLink_VisibilityLink_Condition {
    return {
      elementVisibility: isSet(object.elementVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.fromJSON(
            object.elementVisibility,
          )
        : undefined,
      timerVisibility: isSet(object.timerVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.fromJSON(
            object.timerVisibility,
          )
        : undefined,
      videoCountdownVisibility: isSet(object.videoCountdownVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.fromJSON(
            object.videoCountdownVisibility,
          )
        : undefined,
      captureSessionVisibility: isSet(object.captureSessionVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.fromJSON(
            object.captureSessionVisibility,
          )
        : undefined,
      videoInputVisibility: isSet(object.videoInputVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.fromJSON(
            object.videoInputVisibility,
          )
        : undefined,
      audioCountdownVisibility: isSet(object.audioCountdownVisibility)
        ? Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.fromJSON(
            object.audioCountdownVisibility,
          )
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_VisibilityLink_Condition): unknown {
    const obj: any = {};
    if (message.elementVisibility !== undefined) {
      obj.elementVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.toJSON(
          message.elementVisibility,
        );
    }
    if (message.timerVisibility !== undefined) {
      obj.timerVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.toJSON(
          message.timerVisibility,
        );
    }
    if (message.videoCountdownVisibility !== undefined) {
      obj.videoCountdownVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.toJSON(
          message.videoCountdownVisibility,
        );
    }
    if (message.captureSessionVisibility !== undefined) {
      obj.captureSessionVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.toJSON(
          message.captureSessionVisibility,
        );
    }
    if (message.videoInputVisibility !== undefined) {
      obj.videoInputVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.toJSON(
          message.videoInputVisibility,
        );
    }
    if (message.audioCountdownVisibility !== undefined) {
      obj.audioCountdownVisibility =
        Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.toJSON(
          message.audioCountdownVisibility,
        );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_VisibilityLink_Condition {
    return Slide_Element_DataLink_VisibilityLink_Condition.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition>,
      I
    >,
  >(object: I): Slide_Element_DataLink_VisibilityLink_Condition {
    const message = createBaseSlide_Element_DataLink_VisibilityLink_Condition();
    message.elementVisibility =
      object.elementVisibility !== undefined &&
      object.elementVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.fromPartial(
            object.elementVisibility,
          )
        : undefined;
    message.timerVisibility =
      object.timerVisibility !== undefined && object.timerVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.fromPartial(
            object.timerVisibility,
          )
        : undefined;
    message.videoCountdownVisibility =
      object.videoCountdownVisibility !== undefined &&
      object.videoCountdownVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.fromPartial(
            object.videoCountdownVisibility,
          )
        : undefined;
    message.captureSessionVisibility =
      object.captureSessionVisibility !== undefined &&
      object.captureSessionVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.fromPartial(
            object.captureSessionVisibility,
          )
        : undefined;
    message.videoInputVisibility =
      object.videoInputVisibility !== undefined &&
      object.videoInputVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.fromPartial(
            object.videoInputVisibility,
          )
        : undefined;
    message.audioCountdownVisibility =
      object.audioCountdownVisibility !== undefined &&
      object.audioCountdownVisibility !== null
        ? Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.fromPartial(
            object.audioCountdownVisibility,
          )
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
  return {
    otherElementUuid: undefined,
    otherElementName: '',
    visibilityCriterion: 0,
  };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility =
  {
    encode(
      message: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.otherElementUuid !== undefined) {
        UUID.encode(
          message.otherElementUuid,
          writer.uint32(10).fork(),
        ).ldelim();
      }
      if (message.otherElementName !== '') {
        writer.uint32(18).string(message.otherElementName);
      }
      if (message.visibilityCriterion !== 0) {
        writer.uint32(24).int32(message.visibilityCriterion);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
      const reader =
        input instanceof _m0.Reader ? input : _m0.Reader.create(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break;
            }

            message.otherElementUuid = UUID.decode(reader, reader.uint32());
            continue;
          case 2:
            if (tag !== 18) {
              break;
            }

            message.otherElementName = reader.string();
            continue;
          case 3:
            if (tag !== 24) {
              break;
            }

            message.visibilityCriterion = reader.int32() as any;
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skipType(tag & 7);
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
      return {
        otherElementUuid: isSet(object.otherElementUuid)
          ? UUID.fromJSON(object.otherElementUuid)
          : undefined,
        otherElementName: isSet(object.otherElementName)
          ? globalThis.String(object.otherElementName)
          : '',
        visibilityCriterion: isSet(object.visibilityCriterion)
          ? slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionFromJSON(
              object.visibilityCriterion,
            )
          : 0,
      };
    },

    toJSON(
      message: Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility,
    ): unknown {
      const obj: any = {};
      if (message.otherElementUuid !== undefined) {
        obj.otherElementUuid = UUID.toJSON(message.otherElementUuid);
      }
      if (message.otherElementName !== '') {
        obj.otherElementName = message.otherElementName;
      }
      if (message.visibilityCriterion !== 0) {
        obj.visibilityCriterion =
          slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility_ElementVisibilityCriterionToJSON(
            message.visibilityCriterion,
          );
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility>,
        I
      >,
    >(
      base?: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
      return Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility.fromPartial(
        base ?? ({} as any),
      );
    },
    fromPartial<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility>,
        I
      >,
    >(
      object: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_ElementVisibility {
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_ElementVisibility();
      message.otherElementUuid =
        object.otherElementUuid !== undefined &&
        object.otherElementUuid !== null
          ? UUID.fromPartial(object.otherElementUuid)
          : undefined;
      message.otherElementName = object.otherElementName ?? '';
      message.visibilityCriterion = object.visibilityCriterion ?? 0;
      return message;
    },
  };

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
  return { timerUuid: undefined, timerName: '', visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility = {
  encode(
    message: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.timerName !== '') {
      writer.uint32(18).string(message.timerName);
    }
    if (message.visibilityCriterion !== 0) {
      writer.uint32(24).int32(message.visibilityCriterion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility();
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
          if (tag !== 24) {
            break;
          }

          message.visibilityCriterion = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    return {
      timerUuid: isSet(object.timerUuid)
        ? UUID.fromJSON(object.timerUuid)
        : undefined,
      timerName: isSet(object.timerName)
        ? globalThis.String(object.timerName)
        : '',
      visibilityCriterion: isSet(object.visibilityCriterion)
        ? slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionFromJSON(
            object.visibilityCriterion,
          )
        : 0,
    };
  },

  toJSON(
    message: Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility,
  ): unknown {
    const obj: any = {};
    if (message.timerUuid !== undefined) {
      obj.timerUuid = UUID.toJSON(message.timerUuid);
    }
    if (message.timerName !== '') {
      obj.timerName = message.timerName;
    }
    if (message.visibilityCriterion !== 0) {
      obj.visibilityCriterion =
        slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility_TimerVisibilityCriterionToJSON(
          message.visibilityCriterion,
        );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    return Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility>,
      I
    >,
  >(
    object: I,
  ): Slide_Element_DataLink_VisibilityLink_Condition_TimerVisibility {
    const message =
      createBaseSlide_Element_DataLink_VisibilityLink_Condition_TimerVisibility();
    message.timerUuid =
      object.timerUuid !== undefined && object.timerUuid !== null
        ? UUID.fromPartial(object.timerUuid)
        : undefined;
    message.timerName = object.timerName ?? '';
    message.visibilityCriterion = object.visibilityCriterion ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility =
  {
    encode(
      message: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.visibilityCriterion !== 0) {
        writer.uint32(8).int32(message.visibilityCriterion);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
      const reader =
        input instanceof _m0.Reader ? input : _m0.Reader.create(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 8) {
              break;
            }

            message.visibilityCriterion = reader.int32() as any;
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skipType(tag & 7);
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
      return {
        visibilityCriterion: isSet(object.visibilityCriterion)
          ? slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionFromJSON(
              object.visibilityCriterion,
            )
          : 0,
      };
    },

    toJSON(
      message: Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility,
    ): unknown {
      const obj: any = {};
      if (message.visibilityCriterion !== 0) {
        obj.visibilityCriterion =
          slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility_VideoCountdownVisibilityCriterionToJSON(
            message.visibilityCriterion,
          );
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility>,
        I
      >,
    >(
      base?: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility.fromPartial(
        base ?? ({} as any),
      );
    },
    fromPartial<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility>,
        I
      >,
    >(
      object: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility {
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoCountdownVisibility();
      message.visibilityCriterion = object.visibilityCriterion ?? 0;
      return message;
    },
  };

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility =
  {
    encode(
      message: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.visibilityCriterion !== 0) {
        writer.uint32(8).int32(message.visibilityCriterion);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
      const reader =
        input instanceof _m0.Reader ? input : _m0.Reader.create(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 8) {
              break;
            }

            message.visibilityCriterion = reader.int32() as any;
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skipType(tag & 7);
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
      return {
        visibilityCriterion: isSet(object.visibilityCriterion)
          ? slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionFromJSON(
              object.visibilityCriterion,
            )
          : 0,
      };
    },

    toJSON(
      message: Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility,
    ): unknown {
      const obj: any = {};
      if (message.visibilityCriterion !== 0) {
        obj.visibilityCriterion =
          slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility_AudioCountdownVisibilityCriterionToJSON(
            message.visibilityCriterion,
          );
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility>,
        I
      >,
    >(
      base?: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
      return Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility.fromPartial(
        base ?? ({} as any),
      );
    },
    fromPartial<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility>,
        I
      >,
    >(
      object: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility {
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_AudioCountdownVisibility();
      message.visibilityCriterion = object.visibilityCriterion ?? 0;
      return message;
    },
  };

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
  return { visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility =
  {
    encode(
      message: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.visibilityCriterion !== 0) {
        writer.uint32(8).int32(message.visibilityCriterion);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
      const reader =
        input instanceof _m0.Reader ? input : _m0.Reader.create(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 8) {
              break;
            }

            message.visibilityCriterion = reader.int32() as any;
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skipType(tag & 7);
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
      return {
        visibilityCriterion: isSet(object.visibilityCriterion)
          ? slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionFromJSON(
              object.visibilityCriterion,
            )
          : 0,
      };
    },

    toJSON(
      message: Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility,
    ): unknown {
      const obj: any = {};
      if (message.visibilityCriterion !== 0) {
        obj.visibilityCriterion =
          slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility_CaptureSessionVisibilityCriterionToJSON(
            message.visibilityCriterion,
          );
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility>,
        I
      >,
    >(
      base?: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
      return Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility.fromPartial(
        base ?? ({} as any),
      );
    },
    fromPartial<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility>,
        I
      >,
    >(
      object: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility {
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_CaptureSessionVisibility();
      message.visibilityCriterion = object.visibilityCriterion ?? 0;
      return message;
    },
  };

function createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility(): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
  return { videoInputIndex: 0, visibilityCriterion: 0 };
}

export const Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility =
  {
    encode(
      message: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility,
      writer: _m0.Writer = _m0.Writer.create(),
    ): _m0.Writer {
      if (message.videoInputIndex !== 0) {
        writer.uint32(8).int32(message.videoInputIndex);
      }
      if (message.visibilityCriterion !== 0) {
        writer.uint32(16).int32(message.visibilityCriterion);
      }
      return writer;
    },

    decode(
      input: _m0.Reader | Uint8Array,
      length?: number,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
      const reader =
        input instanceof _m0.Reader ? input : _m0.Reader.create(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 8) {
              break;
            }

            message.videoInputIndex = reader.int32();
            continue;
          case 2:
            if (tag !== 16) {
              break;
            }

            message.visibilityCriterion = reader.int32() as any;
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skipType(tag & 7);
      }
      return message;
    },

    fromJSON(
      object: any,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
      return {
        videoInputIndex: isSet(object.videoInputIndex)
          ? globalThis.Number(object.videoInputIndex)
          : 0,
        visibilityCriterion: isSet(object.visibilityCriterion)
          ? slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionFromJSON(
              object.visibilityCriterion,
            )
          : 0,
      };
    },

    toJSON(
      message: Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility,
    ): unknown {
      const obj: any = {};
      if (message.videoInputIndex !== 0) {
        obj.videoInputIndex = Math.round(message.videoInputIndex);
      }
      if (message.visibilityCriterion !== 0) {
        obj.visibilityCriterion =
          slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility_VideoInputVisibilityCriterionToJSON(
            message.visibilityCriterion,
          );
      }
      return obj;
    },

    create<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility>,
        I
      >,
    >(
      base?: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
      return Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility.fromPartial(
        base ?? ({} as any),
      );
    },
    fromPartial<
      I extends Exact<
        DeepPartial<Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility>,
        I
      >,
    >(
      object: I,
    ): Slide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility {
      const message =
        createBaseSlide_Element_DataLink_VisibilityLink_Condition_VideoInputVisibility();
      message.videoInputIndex = object.videoInputIndex ?? 0;
      message.visibilityCriterion = object.visibilityCriterion ?? 0;
      return message;
    },
  };

function createBaseSlide_Element_DataLink_SlideText(): Slide_Element_DataLink_SlideText {
  return {
    sourceSlide: 0,
    sourceOption: 0,
    preserveNotesFormat: false,
    nameToMatch: '',
    elementTextTransform: 0,
  };
}

export const Slide_Element_DataLink_SlideText = {
  encode(
    message: Slide_Element_DataLink_SlideText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceSlide !== 0) {
      writer.uint32(8).int32(message.sourceSlide);
    }
    if (message.sourceOption !== 0) {
      writer.uint32(16).int32(message.sourceOption);
    }
    if (message.preserveNotesFormat === true) {
      writer.uint32(24).bool(message.preserveNotesFormat);
    }
    if (message.nameToMatch !== '') {
      writer.uint32(34).string(message.nameToMatch);
    }
    if (message.elementTextTransform !== 0) {
      writer.uint32(40).int32(message.elementTextTransform);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_SlideText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceSlide = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sourceOption = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.preserveNotesFormat = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nameToMatch = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.elementTextTransform = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideText {
    return {
      sourceSlide: isSet(object.sourceSlide)
        ? slide_Element_DataLink_SlideSourceTypeFromJSON(object.sourceSlide)
        : 0,
      sourceOption: isSet(object.sourceOption)
        ? slide_Element_DataLink_SlideText_TextSourceOptionFromJSON(
            object.sourceOption,
          )
        : 0,
      preserveNotesFormat: isSet(object.preserveNotesFormat)
        ? globalThis.Boolean(object.preserveNotesFormat)
        : false,
      nameToMatch: isSet(object.nameToMatch)
        ? globalThis.String(object.nameToMatch)
        : '',
      elementTextTransform: isSet(object.elementTextTransform)
        ? slide_Element_DataLink_AlternateElementText_TextTransformOptionFromJSON(
            object.elementTextTransform,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideText): unknown {
    const obj: any = {};
    if (message.sourceSlide !== 0) {
      obj.sourceSlide = slide_Element_DataLink_SlideSourceTypeToJSON(
        message.sourceSlide,
      );
    }
    if (message.sourceOption !== 0) {
      obj.sourceOption =
        slide_Element_DataLink_SlideText_TextSourceOptionToJSON(
          message.sourceOption,
        );
    }
    if (message.preserveNotesFormat === true) {
      obj.preserveNotesFormat = message.preserveNotesFormat;
    }
    if (message.nameToMatch !== '') {
      obj.nameToMatch = message.nameToMatch;
    }
    if (message.elementTextTransform !== 0) {
      obj.elementTextTransform =
        slide_Element_DataLink_AlternateElementText_TextTransformOptionToJSON(
          message.elementTextTransform,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideText>, I>>(
    base?: I,
  ): Slide_Element_DataLink_SlideText {
    return Slide_Element_DataLink_SlideText.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideText>, I>,
  >(object: I): Slide_Element_DataLink_SlideText {
    const message = createBaseSlide_Element_DataLink_SlideText();
    message.sourceSlide = object.sourceSlide ?? 0;
    message.sourceOption = object.sourceOption ?? 0;
    message.preserveNotesFormat = object.preserveNotesFormat ?? false;
    message.nameToMatch = object.nameToMatch ?? '';
    message.elementTextTransform = object.elementTextTransform ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideImage(): Slide_Element_DataLink_SlideImage {
  return { sourceSlide: 0 };
}

export const Slide_Element_DataLink_SlideImage = {
  encode(
    message: Slide_Element_DataLink_SlideImage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sourceSlide !== 0) {
      writer.uint32(8).int32(message.sourceSlide);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_SlideImage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sourceSlide = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideImage {
    return {
      sourceSlide: isSet(object.sourceSlide)
        ? slide_Element_DataLink_SlideSourceTypeFromJSON(object.sourceSlide)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideImage): unknown {
    const obj: any = {};
    if (message.sourceSlide !== 0) {
      obj.sourceSlide = slide_Element_DataLink_SlideSourceTypeToJSON(
        message.sourceSlide,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideImage>, I>>(
    base?: I,
  ): Slide_Element_DataLink_SlideImage {
    return Slide_Element_DataLink_SlideImage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideImage>, I>,
  >(object: I): Slide_Element_DataLink_SlideImage {
    const message = createBaseSlide_Element_DataLink_SlideImage();
    message.sourceSlide = object.sourceSlide ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_StageMessage(): Slide_Element_DataLink_StageMessage {
  return { shouldFlash: false, flashColor: undefined };
}

export const Slide_Element_DataLink_StageMessage = {
  encode(
    message: Slide_Element_DataLink_StageMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shouldFlash === true) {
      writer.uint32(8).bool(message.shouldFlash);
    }
    if (message.flashColor !== undefined) {
      Color.encode(message.flashColor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_StageMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_StageMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.shouldFlash = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.flashColor = Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_StageMessage {
    return {
      shouldFlash: isSet(object.shouldFlash)
        ? globalThis.Boolean(object.shouldFlash)
        : false,
      flashColor: isSet(object.flashColor)
        ? Color.fromJSON(object.flashColor)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_StageMessage): unknown {
    const obj: any = {};
    if (message.shouldFlash === true) {
      obj.shouldFlash = message.shouldFlash;
    }
    if (message.flashColor !== undefined) {
      obj.flashColor = Color.toJSON(message.flashColor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_StageMessage>, I>>(
    base?: I,
  ): Slide_Element_DataLink_StageMessage {
    return Slide_Element_DataLink_StageMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_StageMessage>, I>,
  >(object: I): Slide_Element_DataLink_StageMessage {
    const message = createBaseSlide_Element_DataLink_StageMessage();
    message.shouldFlash = object.shouldFlash ?? false;
    message.flashColor =
      object.flashColor !== undefined && object.flashColor !== null
        ? Color.fromPartial(object.flashColor)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_VideoCountdown(): Slide_Element_DataLink_VideoCountdown {
  return {
    timerFormat: undefined,
    timerFormatString: '',
    colorTriggers: [],
    ignoreLoopingVideos: false,
    videoCountdownSource: 0,
  };
}

export const Slide_Element_DataLink_VideoCountdown = {
  encode(
    message: Slide_Element_DataLink_VideoCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(
        message.timerFormat,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.timerFormatString !== '') {
      writer.uint32(18).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.ignoreLoopingVideos === true) {
      writer.uint32(32).bool(message.ignoreLoopingVideos);
    }
    if (message.videoCountdownSource !== 0) {
      writer.uint32(40).int32(message.videoCountdownSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_VideoCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_VideoCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timerFormatString = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.colorTriggers.push(
            Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.ignoreLoopingVideos = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.videoCountdownSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_VideoCountdown {
    return {
      timerFormat: isSet(object.timerFormat)
        ? Timer_Format.fromJSON(object.timerFormat)
        : undefined,
      timerFormatString: isSet(object.timerFormatString)
        ? globalThis.String(object.timerFormatString)
        : '',
      colorTriggers: globalThis.Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) =>
            Slide_Element_DataLink_ColorTrigger.fromJSON(e),
          )
        : [],
      ignoreLoopingVideos: isSet(object.ignoreLoopingVideos)
        ? globalThis.Boolean(object.ignoreLoopingVideos)
        : false,
      videoCountdownSource: isSet(object.videoCountdownSource)
        ? slide_Element_DataLink_VideoCountdown_VideoCountdownSourceFromJSON(
            object.videoCountdownSource,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_VideoCountdown): unknown {
    const obj: any = {};
    if (message.timerFormat !== undefined) {
      obj.timerFormat = Timer_Format.toJSON(message.timerFormat);
    }
    if (message.timerFormatString !== '') {
      obj.timerFormatString = message.timerFormatString;
    }
    if (message.colorTriggers?.length) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        Slide_Element_DataLink_ColorTrigger.toJSON(e),
      );
    }
    if (message.ignoreLoopingVideos === true) {
      obj.ignoreLoopingVideos = message.ignoreLoopingVideos;
    }
    if (message.videoCountdownSource !== 0) {
      obj.videoCountdownSource =
        slide_Element_DataLink_VideoCountdown_VideoCountdownSourceToJSON(
          message.videoCountdownSource,
        );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VideoCountdown>, I>,
  >(base?: I): Slide_Element_DataLink_VideoCountdown {
    return Slide_Element_DataLink_VideoCountdown.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_VideoCountdown>, I>,
  >(object: I): Slide_Element_DataLink_VideoCountdown {
    const message = createBaseSlide_Element_DataLink_VideoCountdown();
    message.timerFormat =
      object.timerFormat !== undefined && object.timerFormat !== null
        ? Timer_Format.fromPartial(object.timerFormat)
        : undefined;
    message.timerFormatString = object.timerFormatString ?? '';
    message.colorTriggers =
      object.colorTriggers?.map((e) =>
        Slide_Element_DataLink_ColorTrigger.fromPartial(e),
      ) || [];
    message.ignoreLoopingVideos = object.ignoreLoopingVideos ?? false;
    message.videoCountdownSource = object.videoCountdownSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AudioCountdown(): Slide_Element_DataLink_AudioCountdown {
  return {
    timerFormat: undefined,
    timerFormatString: '',
    colorTriggers: [],
    ignoreLoopingAudio: false,
  };
}

export const Slide_Element_DataLink_AudioCountdown = {
  encode(
    message: Slide_Element_DataLink_AudioCountdown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(
        message.timerFormat,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.timerFormatString !== '') {
      writer.uint32(18).string(message.timerFormatString);
    }
    for (const v of message.colorTriggers) {
      Slide_Element_DataLink_ColorTrigger.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.ignoreLoopingAudio === true) {
      writer.uint32(32).bool(message.ignoreLoopingAudio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_AudioCountdown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AudioCountdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timerFormatString = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.colorTriggers.push(
            Slide_Element_DataLink_ColorTrigger.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.ignoreLoopingAudio = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AudioCountdown {
    return {
      timerFormat: isSet(object.timerFormat)
        ? Timer_Format.fromJSON(object.timerFormat)
        : undefined,
      timerFormatString: isSet(object.timerFormatString)
        ? globalThis.String(object.timerFormatString)
        : '',
      colorTriggers: globalThis.Array.isArray(object?.colorTriggers)
        ? object.colorTriggers.map((e: any) =>
            Slide_Element_DataLink_ColorTrigger.fromJSON(e),
          )
        : [],
      ignoreLoopingAudio: isSet(object.ignoreLoopingAudio)
        ? globalThis.Boolean(object.ignoreLoopingAudio)
        : false,
    };
  },

  toJSON(message: Slide_Element_DataLink_AudioCountdown): unknown {
    const obj: any = {};
    if (message.timerFormat !== undefined) {
      obj.timerFormat = Timer_Format.toJSON(message.timerFormat);
    }
    if (message.timerFormatString !== '') {
      obj.timerFormatString = message.timerFormatString;
    }
    if (message.colorTriggers?.length) {
      obj.colorTriggers = message.colorTriggers.map((e) =>
        Slide_Element_DataLink_ColorTrigger.toJSON(e),
      );
    }
    if (message.ignoreLoopingAudio === true) {
      obj.ignoreLoopingAudio = message.ignoreLoopingAudio;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_AudioCountdown>, I>,
  >(base?: I): Slide_Element_DataLink_AudioCountdown {
    return Slide_Element_DataLink_AudioCountdown.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_AudioCountdown>, I>,
  >(object: I): Slide_Element_DataLink_AudioCountdown {
    const message = createBaseSlide_Element_DataLink_AudioCountdown();
    message.timerFormat =
      object.timerFormat !== undefined && object.timerFormat !== null
        ? Timer_Format.fromPartial(object.timerFormat)
        : undefined;
    message.timerFormatString = object.timerFormatString ?? '';
    message.colorTriggers =
      object.colorTriggers?.map((e) =>
        Slide_Element_DataLink_ColorTrigger.fromPartial(e),
      ) || [];
    message.ignoreLoopingAudio = object.ignoreLoopingAudio ?? false;
    return message;
  },
};

function createBaseSlide_Element_DataLink_GroupName(): Slide_Element_DataLink_GroupName {
  return { groupSource: 0 };
}

export const Slide_Element_DataLink_GroupName = {
  encode(
    message: Slide_Element_DataLink_GroupName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupSource !== 0) {
      writer.uint32(8).int32(message.groupSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_GroupName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_GroupName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_GroupName {
    return {
      groupSource: isSet(object.groupSource)
        ? slide_Element_DataLink_GroupSourceTypeFromJSON(object.groupSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_GroupName): unknown {
    const obj: any = {};
    if (message.groupSource !== 0) {
      obj.groupSource = slide_Element_DataLink_GroupSourceTypeToJSON(
        message.groupSource,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_GroupName>, I>>(
    base?: I,
  ): Slide_Element_DataLink_GroupName {
    return Slide_Element_DataLink_GroupName.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_GroupName>, I>,
  >(object: I): Slide_Element_DataLink_GroupName {
    const message = createBaseSlide_Element_DataLink_GroupName();
    message.groupSource = object.groupSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_GroupColor(): Slide_Element_DataLink_GroupColor {
  return { groupSource: 0 };
}

export const Slide_Element_DataLink_GroupColor = {
  encode(
    message: Slide_Element_DataLink_GroupColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupSource !== 0) {
      writer.uint32(8).int32(message.groupSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_GroupColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_GroupColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.groupSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_GroupColor {
    return {
      groupSource: isSet(object.groupSource)
        ? slide_Element_DataLink_GroupSourceTypeFromJSON(object.groupSource)
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_GroupColor): unknown {
    const obj: any = {};
    if (message.groupSource !== 0) {
      obj.groupSource = slide_Element_DataLink_GroupSourceTypeToJSON(
        message.groupSource,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_GroupColor>, I>>(
    base?: I,
  ): Slide_Element_DataLink_GroupColor {
    return Slide_Element_DataLink_GroupColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_GroupColor>, I>,
  >(object: I): Slide_Element_DataLink_GroupColor {
    const message = createBaseSlide_Element_DataLink_GroupColor();
    message.groupSource = object.groupSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideLabelText(): Slide_Element_DataLink_SlideLabelText {
  return { slideLabelSource: 0 };
}

export const Slide_Element_DataLink_SlideLabelText = {
  encode(
    message: Slide_Element_DataLink_SlideLabelText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slideLabelSource !== 0) {
      writer.uint32(8).int32(message.slideLabelSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_SlideLabelText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideLabelText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.slideLabelSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideLabelText {
    return {
      slideLabelSource: isSet(object.slideLabelSource)
        ? slide_Element_DataLink_SlideLabelSourceFromJSON(
            object.slideLabelSource,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideLabelText): unknown {
    const obj: any = {};
    if (message.slideLabelSource !== 0) {
      obj.slideLabelSource = slide_Element_DataLink_SlideLabelSourceToJSON(
        message.slideLabelSource,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelText>, I>,
  >(base?: I): Slide_Element_DataLink_SlideLabelText {
    return Slide_Element_DataLink_SlideLabelText.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelText>, I>,
  >(object: I): Slide_Element_DataLink_SlideLabelText {
    const message = createBaseSlide_Element_DataLink_SlideLabelText();
    message.slideLabelSource = object.slideLabelSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideLabelColor(): Slide_Element_DataLink_SlideLabelColor {
  return { slideLabelSource: 0 };
}

export const Slide_Element_DataLink_SlideLabelColor = {
  encode(
    message: Slide_Element_DataLink_SlideLabelColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slideLabelSource !== 0) {
      writer.uint32(8).int32(message.slideLabelSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_SlideLabelColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideLabelColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.slideLabelSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideLabelColor {
    return {
      slideLabelSource: isSet(object.slideLabelSource)
        ? slide_Element_DataLink_SlideLabelSourceFromJSON(
            object.slideLabelSource,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideLabelColor): unknown {
    const obj: any = {};
    if (message.slideLabelSource !== 0) {
      obj.slideLabelSource = slide_Element_DataLink_SlideLabelSourceToJSON(
        message.slideLabelSource,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelColor>, I>,
  >(base?: I): Slide_Element_DataLink_SlideLabelColor {
    return Slide_Element_DataLink_SlideLabelColor.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideLabelColor>, I>,
  >(object: I): Slide_Element_DataLink_SlideLabelColor {
    const message = createBaseSlide_Element_DataLink_SlideLabelColor();
    message.slideLabelSource = object.slideLabelSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PresentationNotes(): Slide_Element_DataLink_PresentationNotes {
  return {};
}

export const Slide_Element_DataLink_PresentationNotes = {
  encode(
    _: Slide_Element_DataLink_PresentationNotes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PresentationNotes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PresentationNotes();
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

  fromJSON(_: any): Slide_Element_DataLink_PresentationNotes {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_PresentationNotes): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_PresentationNotes>, I>,
  >(base?: I): Slide_Element_DataLink_PresentationNotes {
    return Slide_Element_DataLink_PresentationNotes.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_PresentationNotes>, I>,
  >(_: I): Slide_Element_DataLink_PresentationNotes {
    const message = createBaseSlide_Element_DataLink_PresentationNotes();
    return message;
  },
};

function createBaseSlide_Element_DataLink_Presentation(): Slide_Element_DataLink_Presentation {
  return { presentationSource: 0 };
}

export const Slide_Element_DataLink_Presentation = {
  encode(
    message: Slide_Element_DataLink_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentationSource !== 0) {
      writer.uint32(8).int32(message.presentationSource);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.presentationSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_Presentation {
    return {
      presentationSource: isSet(object.presentationSource)
        ? slide_Element_DataLink_Presentation_PresentationSourceFromJSON(
            object.presentationSource,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_Presentation): unknown {
    const obj: any = {};
    if (message.presentationSource !== 0) {
      obj.presentationSource =
        slide_Element_DataLink_Presentation_PresentationSourceToJSON(
          message.presentationSource,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_Presentation>, I>>(
    base?: I,
  ): Slide_Element_DataLink_Presentation {
    return Slide_Element_DataLink_Presentation.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_Presentation>, I>,
  >(object: I): Slide_Element_DataLink_Presentation {
    const message = createBaseSlide_Element_DataLink_Presentation();
    message.presentationSource = object.presentationSource ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaylistItem(): Slide_Element_DataLink_PlaylistItem {
  return { playlistItemSource: 0, showArrangement: false };
}

export const Slide_Element_DataLink_PlaylistItem = {
  encode(
    message: Slide_Element_DataLink_PlaylistItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlistItemSource !== 0) {
      writer.uint32(8).int32(message.playlistItemSource);
    }
    if (message.showArrangement === true) {
      writer.uint32(16).bool(message.showArrangement);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PlaylistItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playlistItemSource = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.showArrangement = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_PlaylistItem {
    return {
      playlistItemSource: isSet(object.playlistItemSource)
        ? slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeFromJSON(
            object.playlistItemSource,
          )
        : 0,
      showArrangement: isSet(object.showArrangement)
        ? globalThis.Boolean(object.showArrangement)
        : false,
    };
  },

  toJSON(message: Slide_Element_DataLink_PlaylistItem): unknown {
    const obj: any = {};
    if (message.playlistItemSource !== 0) {
      obj.playlistItemSource =
        slide_Element_DataLink_PlaylistItem_PlaylistItemSourceTypeToJSON(
          message.playlistItemSource,
        );
    }
    if (message.showArrangement === true) {
      obj.showArrangement = message.showArrangement;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_PlaylistItem>, I>>(
    base?: I,
  ): Slide_Element_DataLink_PlaylistItem {
    return Slide_Element_DataLink_PlaylistItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_PlaylistItem>, I>,
  >(object: I): Slide_Element_DataLink_PlaylistItem {
    const message = createBaseSlide_Element_DataLink_PlaylistItem();
    message.playlistItemSource = object.playlistItemSource ?? 0;
    message.showArrangement = object.showArrangement ?? false;
    return message;
  },
};

function createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining(): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
  return { autoAdvanceSource: 0, timerFormat: undefined };
}

export const Slide_Element_DataLink_AutoAdvanceTimeRemaining = {
  encode(
    message: Slide_Element_DataLink_AutoAdvanceTimeRemaining,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.autoAdvanceSource !== 0) {
      writer.uint32(8).int32(message.autoAdvanceSource);
    }
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(
        message.timerFormat,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.autoAdvanceSource = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    return {
      autoAdvanceSource: isSet(object.autoAdvanceSource)
        ? slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceFromJSON(
            object.autoAdvanceSource,
          )
        : 0,
      timerFormat: isSet(object.timerFormat)
        ? Timer_Format.fromJSON(object.timerFormat)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_AutoAdvanceTimeRemaining): unknown {
    const obj: any = {};
    if (message.autoAdvanceSource !== 0) {
      obj.autoAdvanceSource =
        slide_Element_DataLink_AutoAdvanceTimeRemaining_AutoAdvanceSourceToJSON(
          message.autoAdvanceSource,
        );
    }
    if (message.timerFormat !== undefined) {
      obj.timerFormat = Timer_Format.toJSON(message.timerFormat);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AutoAdvanceTimeRemaining>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    return Slide_Element_DataLink_AutoAdvanceTimeRemaining.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_AutoAdvanceTimeRemaining>,
      I
    >,
  >(object: I): Slide_Element_DataLink_AutoAdvanceTimeRemaining {
    const message = createBaseSlide_Element_DataLink_AutoAdvanceTimeRemaining();
    message.autoAdvanceSource = object.autoAdvanceSource ?? 0;
    message.timerFormat =
      object.timerFormat !== undefined && object.timerFormat !== null
        ? Timer_Format.fromPartial(object.timerFormat)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText(): Slide_Element_DataLink_CaptureStatusText {
  return { statusText: undefined, elapsedTime: undefined };
}

export const Slide_Element_DataLink_CaptureStatusText = {
  encode(
    message: Slide_Element_DataLink_CaptureStatusText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.statusText !== undefined) {
      Slide_Element_DataLink_CaptureStatusText_StatusText.encode(
        message.statusText,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.elapsedTime !== undefined) {
      Slide_Element_DataLink_CaptureStatusText_ElapsedTime.encode(
        message.elapsedTime,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_CaptureStatusText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.statusText =
            Slide_Element_DataLink_CaptureStatusText_StatusText.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.elapsedTime =
            Slide_Element_DataLink_CaptureStatusText_ElapsedTime.decode(
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

  fromJSON(object: any): Slide_Element_DataLink_CaptureStatusText {
    return {
      statusText: isSet(object.statusText)
        ? Slide_Element_DataLink_CaptureStatusText_StatusText.fromJSON(
            object.statusText,
          )
        : undefined,
      elapsedTime: isSet(object.elapsedTime)
        ? Slide_Element_DataLink_CaptureStatusText_ElapsedTime.fromJSON(
            object.elapsedTime,
          )
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_CaptureStatusText): unknown {
    const obj: any = {};
    if (message.statusText !== undefined) {
      obj.statusText =
        Slide_Element_DataLink_CaptureStatusText_StatusText.toJSON(
          message.statusText,
        );
    }
    if (message.elapsedTime !== undefined) {
      obj.elapsedTime =
        Slide_Element_DataLink_CaptureStatusText_ElapsedTime.toJSON(
          message.elapsedTime,
        );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusText>, I>,
  >(base?: I): Slide_Element_DataLink_CaptureStatusText {
    return Slide_Element_DataLink_CaptureStatusText.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusText>, I>,
  >(object: I): Slide_Element_DataLink_CaptureStatusText {
    const message = createBaseSlide_Element_DataLink_CaptureStatusText();
    message.statusText =
      object.statusText !== undefined && object.statusText !== null
        ? Slide_Element_DataLink_CaptureStatusText_StatusText.fromPartial(
            object.statusText,
          )
        : undefined;
    message.elapsedTime =
      object.elapsedTime !== undefined && object.elapsedTime !== null
        ? Slide_Element_DataLink_CaptureStatusText_ElapsedTime.fromPartial(
            object.elapsedTime,
          )
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText_StatusText(): Slide_Element_DataLink_CaptureStatusText_StatusText {
  return {};
}

export const Slide_Element_DataLink_CaptureStatusText_StatusText = {
  encode(
    _: Slide_Element_DataLink_CaptureStatusText_StatusText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_CaptureStatusText_StatusText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSlide_Element_DataLink_CaptureStatusText_StatusText();
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

  fromJSON(_: any): Slide_Element_DataLink_CaptureStatusText_StatusText {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CaptureStatusText_StatusText): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_CaptureStatusText_StatusText>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_CaptureStatusText_StatusText {
    return Slide_Element_DataLink_CaptureStatusText_StatusText.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_CaptureStatusText_StatusText>,
      I
    >,
  >(_: I): Slide_Element_DataLink_CaptureStatusText_StatusText {
    const message =
      createBaseSlide_Element_DataLink_CaptureStatusText_StatusText();
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime(): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
  return { timerFormat: undefined };
}

export const Slide_Element_DataLink_CaptureStatusText_ElapsedTime = {
  encode(
    message: Slide_Element_DataLink_CaptureStatusText_ElapsedTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timerFormat !== undefined) {
      Timer_Format.encode(
        message.timerFormat,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timerFormat = Timer_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    return {
      timerFormat: isSet(object.timerFormat)
        ? Timer_Format.fromJSON(object.timerFormat)
        : undefined,
    };
  },

  toJSON(
    message: Slide_Element_DataLink_CaptureStatusText_ElapsedTime,
  ): unknown {
    const obj: any = {};
    if (message.timerFormat !== undefined) {
      obj.timerFormat = Timer_Format.toJSON(message.timerFormat);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_CaptureStatusText_ElapsedTime>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    return Slide_Element_DataLink_CaptureStatusText_ElapsedTime.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_CaptureStatusText_ElapsedTime>,
      I
    >,
  >(object: I): Slide_Element_DataLink_CaptureStatusText_ElapsedTime {
    const message =
      createBaseSlide_Element_DataLink_CaptureStatusText_ElapsedTime();
    message.timerFormat =
      object.timerFormat !== undefined && object.timerFormat !== null
        ? Timer_Format.fromPartial(object.timerFormat)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_CaptureStatusColor(): Slide_Element_DataLink_CaptureStatusColor {
  return {};
}

export const Slide_Element_DataLink_CaptureStatusColor = {
  encode(
    _: Slide_Element_DataLink_CaptureStatusColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_CaptureStatusColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_CaptureStatusColor();
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

  fromJSON(_: any): Slide_Element_DataLink_CaptureStatusColor {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_CaptureStatusColor): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusColor>, I>,
  >(base?: I): Slide_Element_DataLink_CaptureStatusColor {
    return Slide_Element_DataLink_CaptureStatusColor.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_CaptureStatusColor>, I>,
  >(_: I): Slide_Element_DataLink_CaptureStatusColor {
    const message = createBaseSlide_Element_DataLink_CaptureStatusColor();
    return message;
  },
};

function createBaseSlide_Element_DataLink_SlideCount(): Slide_Element_DataLink_SlideCount {
  return { slideCountSourceType: 0 };
}

export const Slide_Element_DataLink_SlideCount = {
  encode(
    message: Slide_Element_DataLink_SlideCount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slideCountSourceType !== 0) {
      writer.uint32(8).int32(message.slideCountSourceType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_SlideCount {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_SlideCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.slideCountSourceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_SlideCount {
    return {
      slideCountSourceType: isSet(object.slideCountSourceType)
        ? slide_Element_DataLink_SlideCount_SlideCountSourceTypeFromJSON(
            object.slideCountSourceType,
          )
        : 0,
    };
  },

  toJSON(message: Slide_Element_DataLink_SlideCount): unknown {
    const obj: any = {};
    if (message.slideCountSourceType !== 0) {
      obj.slideCountSourceType =
        slide_Element_DataLink_SlideCount_SlideCountSourceTypeToJSON(
          message.slideCountSourceType,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_SlideCount>, I>>(
    base?: I,
  ): Slide_Element_DataLink_SlideCount {
    return Slide_Element_DataLink_SlideCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_SlideCount>, I>,
  >(object: I): Slide_Element_DataLink_SlideCount {
    const message = createBaseSlide_Element_DataLink_SlideCount();
    message.slideCountSourceType = object.slideCountSourceType ?? 0;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaybackMarkerIdentifier(): Slide_Element_DataLink_PlaybackMarkerIdentifier {
  return { destination: 0, type: 0, name: '' };
}

export const Slide_Element_DataLink_PlaybackMarkerIdentifier = {
  encode(
    message: Slide_Element_DataLink_PlaybackMarkerIdentifier,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destination !== 0) {
      writer.uint32(8).int32(message.destination);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PlaybackMarkerIdentifier {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.destination = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Slide_Element_DataLink_PlaybackMarkerIdentifier {
    return {
      destination: isSet(object.destination)
        ? slide_Element_DataLink_PlaybackMarkerIdentifier_DestinationFromJSON(
            object.destination,
          )
        : 0,
      type: isSet(object.type)
        ? slide_Element_DataLink_PlaybackMarkerIdentifier_TypeFromJSON(
            object.type,
          )
        : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
    };
  },

  toJSON(message: Slide_Element_DataLink_PlaybackMarkerIdentifier): unknown {
    const obj: any = {};
    if (message.destination !== 0) {
      obj.destination =
        slide_Element_DataLink_PlaybackMarkerIdentifier_DestinationToJSON(
          message.destination,
        );
    }
    if (message.type !== 0) {
      obj.type = slide_Element_DataLink_PlaybackMarkerIdentifier_TypeToJSON(
        message.type,
      );
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerIdentifier>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_PlaybackMarkerIdentifier {
    return Slide_Element_DataLink_PlaybackMarkerIdentifier.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerIdentifier>,
      I
    >,
  >(object: I): Slide_Element_DataLink_PlaybackMarkerIdentifier {
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerIdentifier();
    message.destination = object.destination ?? 0;
    message.type = object.type ?? 0;
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaybackMarkerText(): Slide_Element_DataLink_PlaybackMarkerText {
  return {
    identifier: undefined,
    shouldUseMarkerColor: false,
    name: undefined,
    time: undefined,
  };
}

export const Slide_Element_DataLink_PlaybackMarkerText = {
  encode(
    message: Slide_Element_DataLink_PlaybackMarkerText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      Slide_Element_DataLink_PlaybackMarkerIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.shouldUseMarkerColor === true) {
      writer.uint32(32).bool(message.shouldUseMarkerColor);
    }
    if (message.name !== undefined) {
      Slide_Element_DataLink_PlaybackMarkerText_Name.encode(
        message.name,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.time !== undefined) {
      Slide_Element_DataLink_PlaybackMarkerText_Time.encode(
        message.time,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PlaybackMarkerText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier =
            Slide_Element_DataLink_PlaybackMarkerIdentifier.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.shouldUseMarkerColor = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = Slide_Element_DataLink_PlaybackMarkerText_Name.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.time = Slide_Element_DataLink_PlaybackMarkerText_Time.decode(
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

  fromJSON(object: any): Slide_Element_DataLink_PlaybackMarkerText {
    return {
      identifier: isSet(object.identifier)
        ? Slide_Element_DataLink_PlaybackMarkerIdentifier.fromJSON(
            object.identifier,
          )
        : undefined,
      shouldUseMarkerColor: isSet(object.shouldUseMarkerColor)
        ? globalThis.Boolean(object.shouldUseMarkerColor)
        : false,
      name: isSet(object.name)
        ? Slide_Element_DataLink_PlaybackMarkerText_Name.fromJSON(object.name)
        : undefined,
      time: isSet(object.time)
        ? Slide_Element_DataLink_PlaybackMarkerText_Time.fromJSON(object.time)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_PlaybackMarkerText): unknown {
    const obj: any = {};
    if (message.identifier !== undefined) {
      obj.identifier = Slide_Element_DataLink_PlaybackMarkerIdentifier.toJSON(
        message.identifier,
      );
    }
    if (message.shouldUseMarkerColor === true) {
      obj.shouldUseMarkerColor = message.shouldUseMarkerColor;
    }
    if (message.name !== undefined) {
      obj.name = Slide_Element_DataLink_PlaybackMarkerText_Name.toJSON(
        message.name,
      );
    }
    if (message.time !== undefined) {
      obj.time = Slide_Element_DataLink_PlaybackMarkerText_Time.toJSON(
        message.time,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_PlaybackMarkerText>, I>,
  >(base?: I): Slide_Element_DataLink_PlaybackMarkerText {
    return Slide_Element_DataLink_PlaybackMarkerText.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_PlaybackMarkerText>, I>,
  >(object: I): Slide_Element_DataLink_PlaybackMarkerText {
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? Slide_Element_DataLink_PlaybackMarkerIdentifier.fromPartial(
            object.identifier,
          )
        : undefined;
    message.shouldUseMarkerColor = object.shouldUseMarkerColor ?? false;
    message.name =
      object.name !== undefined && object.name !== null
        ? Slide_Element_DataLink_PlaybackMarkerText_Name.fromPartial(
            object.name,
          )
        : undefined;
    message.time =
      object.time !== undefined && object.time !== null
        ? Slide_Element_DataLink_PlaybackMarkerText_Time.fromPartial(
            object.time,
          )
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaybackMarkerText_Name(): Slide_Element_DataLink_PlaybackMarkerText_Name {
  return {};
}

export const Slide_Element_DataLink_PlaybackMarkerText_Name = {
  encode(
    _: Slide_Element_DataLink_PlaybackMarkerText_Name,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PlaybackMarkerText_Name {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText_Name();
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

  fromJSON(_: any): Slide_Element_DataLink_PlaybackMarkerText_Name {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_PlaybackMarkerText_Name): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerText_Name>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_PlaybackMarkerText_Name {
    return Slide_Element_DataLink_PlaybackMarkerText_Name.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerText_Name>,
      I
    >,
  >(_: I): Slide_Element_DataLink_PlaybackMarkerText_Name {
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText_Name();
    return message;
  },
};

function createBaseSlide_Element_DataLink_PlaybackMarkerText_Time(): Slide_Element_DataLink_PlaybackMarkerText_Time {
  return { format: undefined };
}

export const Slide_Element_DataLink_PlaybackMarkerText_Time = {
  encode(
    message: Slide_Element_DataLink_PlaybackMarkerText_Time,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.format !== undefined) {
      Timer_Format.encode(message.format, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_PlaybackMarkerText_Time {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText_Time();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.format = Timer_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_DataLink_PlaybackMarkerText_Time {
    return {
      format: isSet(object.format)
        ? Timer_Format.fromJSON(object.format)
        : undefined,
    };
  },

  toJSON(message: Slide_Element_DataLink_PlaybackMarkerText_Time): unknown {
    const obj: any = {};
    if (message.format !== undefined) {
      obj.format = Timer_Format.toJSON(message.format);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerText_Time>,
      I
    >,
  >(base?: I): Slide_Element_DataLink_PlaybackMarkerText_Time {
    return Slide_Element_DataLink_PlaybackMarkerText_Time.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Slide_Element_DataLink_PlaybackMarkerText_Time>,
      I
    >,
  >(object: I): Slide_Element_DataLink_PlaybackMarkerText_Time {
    const message = createBaseSlide_Element_DataLink_PlaybackMarkerText_Time();
    message.format =
      object.format !== undefined && object.format !== null
        ? Timer_Format.fromPartial(object.format)
        : undefined;
    return message;
  },
};

function createBaseSlide_Element_DataLink_ChordProChart(): Slide_Element_DataLink_ChordProChart {
  return {};
}

export const Slide_Element_DataLink_ChordProChart = {
  encode(
    _: Slide_Element_DataLink_ChordProChart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_ChordProChart {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_ChordProChart();
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

  fromJSON(_: any): Slide_Element_DataLink_ChordProChart {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_ChordProChart): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_ChordProChart>, I>>(
    base?: I,
  ): Slide_Element_DataLink_ChordProChart {
    return Slide_Element_DataLink_ChordProChart.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_ChordProChart>, I>,
  >(_: I): Slide_Element_DataLink_ChordProChart {
    const message = createBaseSlide_Element_DataLink_ChordProChart();
    return message;
  },
};

function createBaseSlide_Element_DataLink_TimecodeText(): Slide_Element_DataLink_TimecodeText {
  return {};
}

export const Slide_Element_DataLink_TimecodeText = {
  encode(
    _: Slide_Element_DataLink_TimecodeText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_TimecodeText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_TimecodeText();
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

  fromJSON(_: any): Slide_Element_DataLink_TimecodeText {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_TimecodeText): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_DataLink_TimecodeText>, I>>(
    base?: I,
  ): Slide_Element_DataLink_TimecodeText {
    return Slide_Element_DataLink_TimecodeText.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_TimecodeText>, I>,
  >(_: I): Slide_Element_DataLink_TimecodeText {
    const message = createBaseSlide_Element_DataLink_TimecodeText();
    return message;
  },
};

function createBaseSlide_Element_DataLink_TimecodeStatus(): Slide_Element_DataLink_TimecodeStatus {
  return {};
}

export const Slide_Element_DataLink_TimecodeStatus = {
  encode(
    _: Slide_Element_DataLink_TimecodeStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_DataLink_TimecodeStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_DataLink_TimecodeStatus();
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

  fromJSON(_: any): Slide_Element_DataLink_TimecodeStatus {
    return {};
  },

  toJSON(_: Slide_Element_DataLink_TimecodeStatus): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Slide_Element_DataLink_TimecodeStatus>, I>,
  >(base?: I): Slide_Element_DataLink_TimecodeStatus {
    return Slide_Element_DataLink_TimecodeStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Slide_Element_DataLink_TimecodeStatus>, I>,
  >(_: I): Slide_Element_DataLink_TimecodeStatus {
    const message = createBaseSlide_Element_DataLink_TimecodeStatus();
    return message;
  },
};

function createBaseSlide_Element_TextScroller(): Slide_Element_TextScroller {
  return {
    shouldScroll: false,
    scrollRate: 0,
    shouldRepeat: false,
    repeatDistance: 0,
    scrollingDirection: 0,
    startsOffScreen: false,
    fadeLeft: 0,
    fadeRight: 0,
  };
}

export const Slide_Element_TextScroller = {
  encode(
    message: Slide_Element_TextScroller,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shouldScroll === true) {
      writer.uint32(8).bool(message.shouldScroll);
    }
    if (message.scrollRate !== 0) {
      writer.uint32(17).double(message.scrollRate);
    }
    if (message.shouldRepeat === true) {
      writer.uint32(24).bool(message.shouldRepeat);
    }
    if (message.repeatDistance !== 0) {
      writer.uint32(33).double(message.repeatDistance);
    }
    if (message.scrollingDirection !== 0) {
      writer.uint32(40).int32(message.scrollingDirection);
    }
    if (message.startsOffScreen === true) {
      writer.uint32(48).bool(message.startsOffScreen);
    }
    if (message.fadeLeft !== 0) {
      writer.uint32(57).double(message.fadeLeft);
    }
    if (message.fadeRight !== 0) {
      writer.uint32(65).double(message.fadeRight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Slide_Element_TextScroller {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlide_Element_TextScroller();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.shouldScroll = reader.bool();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.scrollRate = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.shouldRepeat = reader.bool();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.repeatDistance = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.scrollingDirection = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startsOffScreen = reader.bool();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.fadeLeft = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.fadeRight = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Slide_Element_TextScroller {
    return {
      shouldScroll: isSet(object.shouldScroll)
        ? globalThis.Boolean(object.shouldScroll)
        : false,
      scrollRate: isSet(object.scrollRate)
        ? globalThis.Number(object.scrollRate)
        : 0,
      shouldRepeat: isSet(object.shouldRepeat)
        ? globalThis.Boolean(object.shouldRepeat)
        : false,
      repeatDistance: isSet(object.repeatDistance)
        ? globalThis.Number(object.repeatDistance)
        : 0,
      scrollingDirection: isSet(object.scrollingDirection)
        ? slide_Element_TextScroller_DirectionFromJSON(
            object.scrollingDirection,
          )
        : 0,
      startsOffScreen: isSet(object.startsOffScreen)
        ? globalThis.Boolean(object.startsOffScreen)
        : false,
      fadeLeft: isSet(object.fadeLeft) ? globalThis.Number(object.fadeLeft) : 0,
      fadeRight: isSet(object.fadeRight)
        ? globalThis.Number(object.fadeRight)
        : 0,
    };
  },

  toJSON(message: Slide_Element_TextScroller): unknown {
    const obj: any = {};
    if (message.shouldScroll === true) {
      obj.shouldScroll = message.shouldScroll;
    }
    if (message.scrollRate !== 0) {
      obj.scrollRate = message.scrollRate;
    }
    if (message.shouldRepeat === true) {
      obj.shouldRepeat = message.shouldRepeat;
    }
    if (message.repeatDistance !== 0) {
      obj.repeatDistance = message.repeatDistance;
    }
    if (message.scrollingDirection !== 0) {
      obj.scrollingDirection = slide_Element_TextScroller_DirectionToJSON(
        message.scrollingDirection,
      );
    }
    if (message.startsOffScreen === true) {
      obj.startsOffScreen = message.startsOffScreen;
    }
    if (message.fadeLeft !== 0) {
      obj.fadeLeft = message.fadeLeft;
    }
    if (message.fadeRight !== 0) {
      obj.fadeRight = message.fadeRight;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Slide_Element_TextScroller>, I>>(
    base?: I,
  ): Slide_Element_TextScroller {
    return Slide_Element_TextScroller.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Slide_Element_TextScroller>, I>>(
    object: I,
  ): Slide_Element_TextScroller {
    const message = createBaseSlide_Element_TextScroller();
    message.shouldScroll = object.shouldScroll ?? false;
    message.scrollRate = object.scrollRate ?? 0;
    message.shouldRepeat = object.shouldRepeat ?? false;
    message.repeatDistance = object.repeatDistance ?? 0;
    message.scrollingDirection = object.scrollingDirection ?? 0;
    message.startsOffScreen = object.startsOffScreen ?? false;
    message.fadeLeft = object.fadeLeft ?? 0;
    message.fadeRight = object.fadeRight ?? 0;
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
