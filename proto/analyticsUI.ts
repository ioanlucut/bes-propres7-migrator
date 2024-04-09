/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface UI {
  quickSearch?: UI_QuickSearch | undefined;
  toolbar?: UI_Toolbar | undefined;
  mainView?: UI_MainView | undefined;
  looks?: UI_Looks | undefined;
  screenConfiguration?: UI_ScreenConfiguration | undefined;
  lowerRight?: UI_LowerRight | undefined;
  textInspector?: UI_TextInspector | undefined;
  show?: UI_Show | undefined;
  inAppStore?: UI_InAppStore | undefined;
  editor?: UI_Editor | undefined;
  whatsNew?: UI_WhatsNew | undefined;
  clearGroups?: UI_ClearGroups | undefined;
  previewArea?: UI_PreviewArea | undefined;
  placeholder?: UI_Placeholder | undefined;
  planningCenterLive?: UI_PlanningCenterLive | undefined;
  networkGroup?: UI_NetworkGroup | undefined;
  ccli?: UI_CCLI | undefined;
  capture?: UI_Capture | undefined;
  welcomeToProPresenter?: UI_WelcomeToProPresenter | undefined;
  testPattern?: UI_TestPattern | undefined;
  preferences?: UI_Preferences | undefined;
}

export interface UI_QuickSearch {
  shown?: UI_QuickSearch_Shown | undefined;
  search?: UI_QuickSearch_Search | undefined;
  openItems?: UI_QuickSearch_OpenItems | undefined;
}

export interface UI_QuickSearch_Shown {
  source: UI_QuickSearch_Shown_Source;
}

export enum UI_QuickSearch_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_TOOLBAR = 2,
  SOURCE_UNLINKED_HEADER = 3,
  UNRECOGNIZED = -1,
}

export function uI_QuickSearch_Shown_SourceFromJSON(
  object: any,
): UI_QuickSearch_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_QuickSearch_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return UI_QuickSearch_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_TOOLBAR':
      return UI_QuickSearch_Shown_Source.SOURCE_TOOLBAR;
    case 3:
    case 'SOURCE_UNLINKED_HEADER':
      return UI_QuickSearch_Shown_Source.SOURCE_UNLINKED_HEADER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_QuickSearch_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_QuickSearch_Shown_SourceToJSON(
  object: UI_QuickSearch_Shown_Source,
): string {
  switch (object) {
    case UI_QuickSearch_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_QuickSearch_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_QuickSearch_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_QuickSearch_Shown_Source.SOURCE_UNLINKED_HEADER:
      return 'SOURCE_UNLINKED_HEADER';
    case UI_QuickSearch_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_QuickSearch_Search {
  source: UI_QuickSearch_Search_Source;
}

export enum UI_QuickSearch_Search_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_LIBRARY = 1,
  SOURCE_SONG_SELECT = 2,
  SOURCE_MULTI_TRACKS = 3,
  UNRECOGNIZED = -1,
}

export function uI_QuickSearch_Search_SourceFromJSON(
  object: any,
): UI_QuickSearch_Search_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_QuickSearch_Search_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_LIBRARY':
      return UI_QuickSearch_Search_Source.SOURCE_LIBRARY;
    case 2:
    case 'SOURCE_SONG_SELECT':
      return UI_QuickSearch_Search_Source.SOURCE_SONG_SELECT;
    case 3:
    case 'SOURCE_MULTI_TRACKS':
      return UI_QuickSearch_Search_Source.SOURCE_MULTI_TRACKS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_QuickSearch_Search_Source.UNRECOGNIZED;
  }
}

export function uI_QuickSearch_Search_SourceToJSON(
  object: UI_QuickSearch_Search_Source,
): string {
  switch (object) {
    case UI_QuickSearch_Search_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_QuickSearch_Search_Source.SOURCE_LIBRARY:
      return 'SOURCE_LIBRARY';
    case UI_QuickSearch_Search_Source.SOURCE_SONG_SELECT:
      return 'SOURCE_SONG_SELECT';
    case UI_QuickSearch_Search_Source.SOURCE_MULTI_TRACKS:
      return 'SOURCE_MULTI_TRACKS';
    case UI_QuickSearch_Search_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_QuickSearch_OpenItems {
  source: UI_QuickSearch_OpenItems_Source;
  style: UI_QuickSearch_OpenItems_Style;
  count: number;
}

export enum UI_QuickSearch_OpenItems_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_LIBRARY = 1,
  SOURCE_SONG_SELECT = 2,
  SOURCE_MULTI_TRACKS = 3,
  UNRECOGNIZED = -1,
}

export function uI_QuickSearch_OpenItems_SourceFromJSON(
  object: any,
): UI_QuickSearch_OpenItems_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_QuickSearch_OpenItems_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_LIBRARY':
      return UI_QuickSearch_OpenItems_Source.SOURCE_LIBRARY;
    case 2:
    case 'SOURCE_SONG_SELECT':
      return UI_QuickSearch_OpenItems_Source.SOURCE_SONG_SELECT;
    case 3:
    case 'SOURCE_MULTI_TRACKS':
      return UI_QuickSearch_OpenItems_Source.SOURCE_MULTI_TRACKS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_QuickSearch_OpenItems_Source.UNRECOGNIZED;
  }
}

export function uI_QuickSearch_OpenItems_SourceToJSON(
  object: UI_QuickSearch_OpenItems_Source,
): string {
  switch (object) {
    case UI_QuickSearch_OpenItems_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_QuickSearch_OpenItems_Source.SOURCE_LIBRARY:
      return 'SOURCE_LIBRARY';
    case UI_QuickSearch_OpenItems_Source.SOURCE_SONG_SELECT:
      return 'SOURCE_SONG_SELECT';
    case UI_QuickSearch_OpenItems_Source.SOURCE_MULTI_TRACKS:
      return 'SOURCE_MULTI_TRACKS';
    case UI_QuickSearch_OpenItems_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum UI_QuickSearch_OpenItems_Style {
  STYLE_UNKNOWN = 0,
  STYLE_RETURN_KEY = 1,
  STYLE_COMMAND_RETURN_KEY = 2,
  STYLE_DRAG_DROP = 3,
  UNRECOGNIZED = -1,
}

export function uI_QuickSearch_OpenItems_StyleFromJSON(
  object: any,
): UI_QuickSearch_OpenItems_Style {
  switch (object) {
    case 0:
    case 'STYLE_UNKNOWN':
      return UI_QuickSearch_OpenItems_Style.STYLE_UNKNOWN;
    case 1:
    case 'STYLE_RETURN_KEY':
      return UI_QuickSearch_OpenItems_Style.STYLE_RETURN_KEY;
    case 2:
    case 'STYLE_COMMAND_RETURN_KEY':
      return UI_QuickSearch_OpenItems_Style.STYLE_COMMAND_RETURN_KEY;
    case 3:
    case 'STYLE_DRAG_DROP':
      return UI_QuickSearch_OpenItems_Style.STYLE_DRAG_DROP;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_QuickSearch_OpenItems_Style.UNRECOGNIZED;
  }
}

export function uI_QuickSearch_OpenItems_StyleToJSON(
  object: UI_QuickSearch_OpenItems_Style,
): string {
  switch (object) {
    case UI_QuickSearch_OpenItems_Style.STYLE_UNKNOWN:
      return 'STYLE_UNKNOWN';
    case UI_QuickSearch_OpenItems_Style.STYLE_RETURN_KEY:
      return 'STYLE_RETURN_KEY';
    case UI_QuickSearch_OpenItems_Style.STYLE_COMMAND_RETURN_KEY:
      return 'STYLE_COMMAND_RETURN_KEY';
    case UI_QuickSearch_OpenItems_Style.STYLE_DRAG_DROP:
      return 'STYLE_DRAG_DROP';
    case UI_QuickSearch_OpenItems_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Toolbar {
  textStyle?: UI_Toolbar_TextStyle | undefined;
  theme?: UI_Toolbar_Theme | undefined;
}

export interface UI_Toolbar_TextStyle {
  shown?: UI_Toolbar_TextStyle_Shown | undefined;
  change?: UI_Toolbar_TextStyle_Change | undefined;
}

export interface UI_Toolbar_TextStyle_Shown {}

export interface UI_Toolbar_TextStyle_Change {
  property: UI_Toolbar_TextStyle_Change_Property;
  target: UI_Toolbar_TextStyle_Change_Target;
}

export enum UI_Toolbar_TextStyle_Change_Property {
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

export function uI_Toolbar_TextStyle_Change_PropertyFromJSON(
  object: any,
): UI_Toolbar_TextStyle_Change_Property {
  switch (object) {
    case 0:
    case 'PROPERTY_UNKNOWN':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_UNKNOWN;
    case 1:
    case 'PROPERTY_FONT_TYPEFACE':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_TYPEFACE;
    case 2:
    case 'PROPERTY_FONT_WEIGHT':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_WEIGHT;
    case 3:
    case 'PROPERTY_FONT_CAPITALIZATION':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_CAPITALIZATION;
    case 4:
    case 'PROPERTY_FONT_SIZE':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_SIZE;
    case 5:
    case 'PROPERTY_FONT_COLOR':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_COLOR;
    case 6:
    case 'PROPERTY_HORIZONTAL_ALIGNMENT':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_HORIZONTAL_ALIGNMENT;
    case 7:
    case 'PROPERTY_VERTICAL_ALIGNMENT':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_VERTICAL_ALIGNMENT;
    case 8:
    case 'PROPERTY_STROKE_ENABLE':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_ENABLE;
    case 9:
    case 'PROPERTY_STROKE_WIDTH':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_WIDTH;
    case 10:
    case 'PROPERTY_STROKE_COLOR':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_COLOR;
    case 11:
    case 'PROPERTY_SHADOW_ENABLE':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ENABLE;
    case 12:
    case 'PROPERTY_SHADOW_BLUR':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_BLUR;
    case 13:
    case 'PROPERTY_SHADOW_OPACITY':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OPACITY;
    case 14:
    case 'PROPERTY_SHADOW_COLOR':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_COLOR;
    case 15:
    case 'PROPERTY_SHADOW_ANGLE':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ANGLE;
    case 16:
    case 'PROPERTY_SHADOW_OFFSET':
      return UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OFFSET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Toolbar_TextStyle_Change_Property.UNRECOGNIZED;
  }
}

export function uI_Toolbar_TextStyle_Change_PropertyToJSON(
  object: UI_Toolbar_TextStyle_Change_Property,
): string {
  switch (object) {
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_UNKNOWN:
      return 'PROPERTY_UNKNOWN';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_TYPEFACE:
      return 'PROPERTY_FONT_TYPEFACE';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_WEIGHT:
      return 'PROPERTY_FONT_WEIGHT';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_CAPITALIZATION:
      return 'PROPERTY_FONT_CAPITALIZATION';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_SIZE:
      return 'PROPERTY_FONT_SIZE';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_FONT_COLOR:
      return 'PROPERTY_FONT_COLOR';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_HORIZONTAL_ALIGNMENT:
      return 'PROPERTY_HORIZONTAL_ALIGNMENT';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_VERTICAL_ALIGNMENT:
      return 'PROPERTY_VERTICAL_ALIGNMENT';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_ENABLE:
      return 'PROPERTY_STROKE_ENABLE';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_WIDTH:
      return 'PROPERTY_STROKE_WIDTH';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_STROKE_COLOR:
      return 'PROPERTY_STROKE_COLOR';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ENABLE:
      return 'PROPERTY_SHADOW_ENABLE';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_BLUR:
      return 'PROPERTY_SHADOW_BLUR';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OPACITY:
      return 'PROPERTY_SHADOW_OPACITY';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_COLOR:
      return 'PROPERTY_SHADOW_COLOR';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_ANGLE:
      return 'PROPERTY_SHADOW_ANGLE';
    case UI_Toolbar_TextStyle_Change_Property.PROPERTY_SHADOW_OFFSET:
      return 'PROPERTY_SHADOW_OFFSET';
    case UI_Toolbar_TextStyle_Change_Property.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum UI_Toolbar_TextStyle_Change_Target {
  TARGET_UNKNOWN = 0,
  TARGET_SLIDE_SELECTION = 1,
  TARGET_PRESENTATION_SELECTION = 2,
  UNRECOGNIZED = -1,
}

export function uI_Toolbar_TextStyle_Change_TargetFromJSON(
  object: any,
): UI_Toolbar_TextStyle_Change_Target {
  switch (object) {
    case 0:
    case 'TARGET_UNKNOWN':
      return UI_Toolbar_TextStyle_Change_Target.TARGET_UNKNOWN;
    case 1:
    case 'TARGET_SLIDE_SELECTION':
      return UI_Toolbar_TextStyle_Change_Target.TARGET_SLIDE_SELECTION;
    case 2:
    case 'TARGET_PRESENTATION_SELECTION':
      return UI_Toolbar_TextStyle_Change_Target.TARGET_PRESENTATION_SELECTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Toolbar_TextStyle_Change_Target.UNRECOGNIZED;
  }
}

export function uI_Toolbar_TextStyle_Change_TargetToJSON(
  object: UI_Toolbar_TextStyle_Change_Target,
): string {
  switch (object) {
    case UI_Toolbar_TextStyle_Change_Target.TARGET_UNKNOWN:
      return 'TARGET_UNKNOWN';
    case UI_Toolbar_TextStyle_Change_Target.TARGET_SLIDE_SELECTION:
      return 'TARGET_SLIDE_SELECTION';
    case UI_Toolbar_TextStyle_Change_Target.TARGET_PRESENTATION_SELECTION:
      return 'TARGET_PRESENTATION_SELECTION';
    case UI_Toolbar_TextStyle_Change_Target.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Toolbar_Theme {
  shown?: UI_Toolbar_Theme_Shown | undefined;
  applied?: UI_Toolbar_Theme_Applied | undefined;
}

export interface UI_Toolbar_Theme_Shown {}

export interface UI_Toolbar_Theme_Applied {
  target: UI_Toolbar_Theme_Applied_Target;
}

export enum UI_Toolbar_Theme_Applied_Target {
  TARGET_UNKNOWN = 0,
  TARGET_SLIDE_SELECTION = 1,
  TARGET_PRESENTATION_SELECTION = 2,
  UNRECOGNIZED = -1,
}

export function uI_Toolbar_Theme_Applied_TargetFromJSON(
  object: any,
): UI_Toolbar_Theme_Applied_Target {
  switch (object) {
    case 0:
    case 'TARGET_UNKNOWN':
      return UI_Toolbar_Theme_Applied_Target.TARGET_UNKNOWN;
    case 1:
    case 'TARGET_SLIDE_SELECTION':
      return UI_Toolbar_Theme_Applied_Target.TARGET_SLIDE_SELECTION;
    case 2:
    case 'TARGET_PRESENTATION_SELECTION':
      return UI_Toolbar_Theme_Applied_Target.TARGET_PRESENTATION_SELECTION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Toolbar_Theme_Applied_Target.UNRECOGNIZED;
  }
}

export function uI_Toolbar_Theme_Applied_TargetToJSON(
  object: UI_Toolbar_Theme_Applied_Target,
): string {
  switch (object) {
    case UI_Toolbar_Theme_Applied_Target.TARGET_UNKNOWN:
      return 'TARGET_UNKNOWN';
    case UI_Toolbar_Theme_Applied_Target.TARGET_SLIDE_SELECTION:
      return 'TARGET_SLIDE_SELECTION';
    case UI_Toolbar_Theme_Applied_Target.TARGET_PRESENTATION_SELECTION:
      return 'TARGET_PRESENTATION_SELECTION';
    case UI_Toolbar_Theme_Applied_Target.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView {
  show?: UI_MainView_Show | undefined;
  presentationEditor?: UI_MainView_PresentationEditor | undefined;
  reflowEditor?: UI_MainView_ReflowEditor | undefined;
  bible?: UI_MainView_Bible | undefined;
  stageEditor?: UI_MainView_StageEditor | undefined;
  themeEditor?: UI_MainView_ThemeEditor | undefined;
  copyrightEditor?: UI_MainView_CopyrightEditor | undefined;
  propsEditor?: UI_MainView_PropsEditor | undefined;
  maskEditor?: UI_MainView_MaskEditor | undefined;
}

export interface UI_MainView_Show {
  shown?: UI_MainView_Show_Shown | undefined;
}

export interface UI_MainView_Show_Shown {
  source: UI_MainView_Show_Shown_Source;
}

export enum UI_MainView_Show_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Show_Shown_SourceFromJSON(
  object: any,
): UI_MainView_Show_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_Show_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_Show_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_APPLICATION_MENU':
      return UI_MainView_Show_Shown_Source.SOURCE_APPLICATION_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Show_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_Show_Shown_SourceToJSON(
  object: UI_MainView_Show_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_Show_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_Show_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_Show_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_MainView_Show_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_PresentationEditor {
  shown?: UI_MainView_PresentationEditor_Shown | undefined;
}

export interface UI_MainView_PresentationEditor_Shown {
  source: UI_MainView_PresentationEditor_Shown_Source;
}

export enum UI_MainView_PresentationEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_CONTEXT_MENU = 3,
  UNRECOGNIZED = -1,
}

export function uI_MainView_PresentationEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_PresentationEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_PresentationEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_PresentationEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_APPLICATION_MENU':
      return UI_MainView_PresentationEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case 'SOURCE_CONTEXT_MENU':
      return UI_MainView_PresentationEditor_Shown_Source.SOURCE_CONTEXT_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_PresentationEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_PresentationEditor_Shown_SourceToJSON(
  object: UI_MainView_PresentationEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_PresentationEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_PresentationEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_PresentationEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_MainView_PresentationEditor_Shown_Source.SOURCE_CONTEXT_MENU:
      return 'SOURCE_CONTEXT_MENU';
    case UI_MainView_PresentationEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_ReflowEditor {
  shown?: UI_MainView_ReflowEditor_Shown | undefined;
}

export interface UI_MainView_ReflowEditor_Shown {
  source: UI_MainView_ReflowEditor_Shown_Source;
}

export enum UI_MainView_ReflowEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_LIBRARY_CONTEXT_MENU = 3,
  UNRECOGNIZED = -1,
}

export function uI_MainView_ReflowEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_ReflowEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_ReflowEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_ReflowEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_APPLICATION_MENU':
      return UI_MainView_ReflowEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case 'SOURCE_LIBRARY_CONTEXT_MENU':
      return UI_MainView_ReflowEditor_Shown_Source.SOURCE_LIBRARY_CONTEXT_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_ReflowEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_ReflowEditor_Shown_SourceToJSON(
  object: UI_MainView_ReflowEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_ReflowEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_ReflowEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_ReflowEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_MainView_ReflowEditor_Shown_Source.SOURCE_LIBRARY_CONTEXT_MENU:
      return 'SOURCE_LIBRARY_CONTEXT_MENU';
    case UI_MainView_ReflowEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible {
  shown?: UI_MainView_Bible_Shown | undefined;
  trigger?: UI_MainView_Bible_Trigger | undefined;
  generateSlides?: UI_MainView_Bible_GenerateSlides | undefined;
  generateNext?: UI_MainView_Bible_GenerateNext | undefined;
  generatePrevious?: UI_MainView_Bible_GeneratePrevious | undefined;
  saveSlides?: UI_MainView_Bible_SaveSlides | undefined;
  lookup?: UI_MainView_Bible_Lookup | undefined;
  install?: UI_MainView_Bible_BibleCount | undefined;
  remove?: UI_MainView_Bible_BibleCount | undefined;
  startup?: UI_MainView_Bible_BibleCount | undefined;
}

export enum UI_MainView_Bible_Location {
  LOCATION_UNKNOWN = 0,
  LOCATION_PRESENTATION = 1,
  LOCATION_BIBLE_MODULE = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_LocationFromJSON(
  object: any,
): UI_MainView_Bible_Location {
  switch (object) {
    case 0:
    case 'LOCATION_UNKNOWN':
      return UI_MainView_Bible_Location.LOCATION_UNKNOWN;
    case 1:
    case 'LOCATION_PRESENTATION':
      return UI_MainView_Bible_Location.LOCATION_PRESENTATION;
    case 2:
    case 'LOCATION_BIBLE_MODULE':
      return UI_MainView_Bible_Location.LOCATION_BIBLE_MODULE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_Location.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_LocationToJSON(
  object: UI_MainView_Bible_Location,
): string {
  switch (object) {
    case UI_MainView_Bible_Location.LOCATION_UNKNOWN:
      return 'LOCATION_UNKNOWN';
    case UI_MainView_Bible_Location.LOCATION_PRESENTATION:
      return 'LOCATION_PRESENTATION';
    case UI_MainView_Bible_Location.LOCATION_BIBLE_MODULE:
      return 'LOCATION_BIBLE_MODULE';
    case UI_MainView_Bible_Location.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible_Shown {
  source: UI_MainView_Bible_Shown_Source;
}

export enum UI_MainView_Bible_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_Shown_SourceFromJSON(
  object: any,
): UI_MainView_Bible_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_Bible_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_Bible_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_APPLICATION_MENU':
      return UI_MainView_Bible_Shown_Source.SOURCE_APPLICATION_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_Shown_SourceToJSON(
  object: UI_MainView_Bible_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_Bible_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_Bible_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_Bible_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_MainView_Bible_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible_Trigger {
  location: UI_MainView_Bible_Location;
}

export interface UI_MainView_Bible_GenerateSlides {
  translationCount: number;
  slideCount: number;
  verseLocation: UI_MainView_Bible_GenerateSlides_TextBoxLocation;
  referenceLocation: UI_MainView_Bible_GenerateSlides_TextBoxLocation;
  showVerseNumbers: boolean;
  breakNewVerse: boolean;
  displayTranslation: boolean;
  preserveFontColor: boolean;
  referenceStyle: UI_MainView_Bible_GenerateSlides_ReferenceType;
}

export enum UI_MainView_Bible_GenerateSlides_TextBoxLocation {
  TEXT_BOX_LOCATION_UNKNOWN = 0,
  TEXT_BOX_LOCATION_NONE = 1,
  TEXT_BOX_LOCATION_TEXT_BOX = 2,
  TEXT_BOX_LOCATION_WITH_VERSE = 3,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(
  object: any,
): UI_MainView_Bible_GenerateSlides_TextBoxLocation {
  switch (object) {
    case 0:
    case 'TEXT_BOX_LOCATION_UNKNOWN':
      return UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_UNKNOWN;
    case 1:
    case 'TEXT_BOX_LOCATION_NONE':
      return UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_NONE;
    case 2:
    case 'TEXT_BOX_LOCATION_TEXT_BOX':
      return UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_TEXT_BOX;
    case 3:
    case 'TEXT_BOX_LOCATION_WITH_VERSE':
      return UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_WITH_VERSE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_GenerateSlides_TextBoxLocation.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(
  object: UI_MainView_Bible_GenerateSlides_TextBoxLocation,
): string {
  switch (object) {
    case UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_UNKNOWN:
      return 'TEXT_BOX_LOCATION_UNKNOWN';
    case UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_NONE:
      return 'TEXT_BOX_LOCATION_NONE';
    case UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_TEXT_BOX:
      return 'TEXT_BOX_LOCATION_TEXT_BOX';
    case UI_MainView_Bible_GenerateSlides_TextBoxLocation.TEXT_BOX_LOCATION_WITH_VERSE:
      return 'TEXT_BOX_LOCATION_WITH_VERSE';
    case UI_MainView_Bible_GenerateSlides_TextBoxLocation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum UI_MainView_Bible_GenerateSlides_ReferenceType {
  REFERENCE_TYPE_UNKNOWN = 0,
  REFERENCE_TYPE_PASSAGE_NONE = 1,
  REFERENCE_TYPE_PASSAGE_EACH = 2,
  REFERENCE_TYPE_PASSAGE_LAST = 3,
  REFERENCE_TYPE_VERSE = 4,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_GenerateSlides_ReferenceTypeFromJSON(
  object: any,
): UI_MainView_Bible_GenerateSlides_ReferenceType {
  switch (object) {
    case 0:
    case 'REFERENCE_TYPE_UNKNOWN':
      return UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_UNKNOWN;
    case 1:
    case 'REFERENCE_TYPE_PASSAGE_NONE':
      return UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_NONE;
    case 2:
    case 'REFERENCE_TYPE_PASSAGE_EACH':
      return UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_EACH;
    case 3:
    case 'REFERENCE_TYPE_PASSAGE_LAST':
      return UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_LAST;
    case 4:
    case 'REFERENCE_TYPE_VERSE':
      return UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_VERSE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_GenerateSlides_ReferenceType.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_GenerateSlides_ReferenceTypeToJSON(
  object: UI_MainView_Bible_GenerateSlides_ReferenceType,
): string {
  switch (object) {
    case UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_UNKNOWN:
      return 'REFERENCE_TYPE_UNKNOWN';
    case UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_NONE:
      return 'REFERENCE_TYPE_PASSAGE_NONE';
    case UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_EACH:
      return 'REFERENCE_TYPE_PASSAGE_EACH';
    case UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_PASSAGE_LAST:
      return 'REFERENCE_TYPE_PASSAGE_LAST';
    case UI_MainView_Bible_GenerateSlides_ReferenceType.REFERENCE_TYPE_VERSE:
      return 'REFERENCE_TYPE_VERSE';
    case UI_MainView_Bible_GenerateSlides_ReferenceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible_GenerateNext {
  location: UI_MainView_Bible_Location;
}

export interface UI_MainView_Bible_GeneratePrevious {
  location: UI_MainView_Bible_Location;
}

export interface UI_MainView_Bible_SaveSlides {
  destination: UI_MainView_Bible_SaveSlides_SlideDestination;
}

export enum UI_MainView_Bible_SaveSlides_SlideDestination {
  SLIDE_DESTINATION_UNKNOWN = 0,
  SLIDE_DESTINATION_SAVE_TO_LIBRARY = 1,
  SLIDE_DESTINATION_SAVE_TO_PLAYLIST = 2,
  SLIDE_DESTINATION_COPY_TO_PRESENTATION = 3,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_SaveSlides_SlideDestinationFromJSON(
  object: any,
): UI_MainView_Bible_SaveSlides_SlideDestination {
  switch (object) {
    case 0:
    case 'SLIDE_DESTINATION_UNKNOWN':
      return UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_UNKNOWN;
    case 1:
    case 'SLIDE_DESTINATION_SAVE_TO_LIBRARY':
      return UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_LIBRARY;
    case 2:
    case 'SLIDE_DESTINATION_SAVE_TO_PLAYLIST':
      return UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_PLAYLIST;
    case 3:
    case 'SLIDE_DESTINATION_COPY_TO_PRESENTATION':
      return UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_COPY_TO_PRESENTATION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_SaveSlides_SlideDestination.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_SaveSlides_SlideDestinationToJSON(
  object: UI_MainView_Bible_SaveSlides_SlideDestination,
): string {
  switch (object) {
    case UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_UNKNOWN:
      return 'SLIDE_DESTINATION_UNKNOWN';
    case UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_LIBRARY:
      return 'SLIDE_DESTINATION_SAVE_TO_LIBRARY';
    case UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_SAVE_TO_PLAYLIST:
      return 'SLIDE_DESTINATION_SAVE_TO_PLAYLIST';
    case UI_MainView_Bible_SaveSlides_SlideDestination.SLIDE_DESTINATION_COPY_TO_PRESENTATION:
      return 'SLIDE_DESTINATION_COPY_TO_PRESENTATION';
    case UI_MainView_Bible_SaveSlides_SlideDestination.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible_Lookup {
  location: UI_MainView_Bible_Lookup_LookupLocation;
}

export enum UI_MainView_Bible_Lookup_LookupLocation {
  LOOKUP_LOCATION_UNKNOWN = 0,
  LOOKUP_LOCATION_TEXT_REFERENCE = 1,
  LOOKUP_LOCATION_MENU_BOOK = 2,
  LOOKUP_LOCATION_MENU_CHAPTER = 3,
  LOOKUP_LOCATION_MENU_VERSE = 4,
  LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER = 5,
  LOOKUP_LOCATION_TEXT_SEARCH_VERSE = 6,
  UNRECOGNIZED = -1,
}

export function uI_MainView_Bible_Lookup_LookupLocationFromJSON(
  object: any,
): UI_MainView_Bible_Lookup_LookupLocation {
  switch (object) {
    case 0:
    case 'LOOKUP_LOCATION_UNKNOWN':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_UNKNOWN;
    case 1:
    case 'LOOKUP_LOCATION_TEXT_REFERENCE':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_REFERENCE;
    case 2:
    case 'LOOKUP_LOCATION_MENU_BOOK':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_BOOK;
    case 3:
    case 'LOOKUP_LOCATION_MENU_CHAPTER':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_CHAPTER;
    case 4:
    case 'LOOKUP_LOCATION_MENU_VERSE':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_VERSE;
    case 5:
    case 'LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER;
    case 6:
    case 'LOOKUP_LOCATION_TEXT_SEARCH_VERSE':
      return UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_VERSE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_Bible_Lookup_LookupLocation.UNRECOGNIZED;
  }
}

export function uI_MainView_Bible_Lookup_LookupLocationToJSON(
  object: UI_MainView_Bible_Lookup_LookupLocation,
): string {
  switch (object) {
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_UNKNOWN:
      return 'LOOKUP_LOCATION_UNKNOWN';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_REFERENCE:
      return 'LOOKUP_LOCATION_TEXT_REFERENCE';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_BOOK:
      return 'LOOKUP_LOCATION_MENU_BOOK';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_CHAPTER:
      return 'LOOKUP_LOCATION_MENU_CHAPTER';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_MENU_VERSE:
      return 'LOOKUP_LOCATION_MENU_VERSE';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER:
      return 'LOOKUP_LOCATION_TEXT_SEARCH_CHAPTER';
    case UI_MainView_Bible_Lookup_LookupLocation.LOOKUP_LOCATION_TEXT_SEARCH_VERSE:
      return 'LOOKUP_LOCATION_TEXT_SEARCH_VERSE';
    case UI_MainView_Bible_Lookup_LookupLocation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_Bible_BibleCount {
  freeInstalledCount: number;
  purchasedInstalledCount: number;
}

export interface UI_MainView_StageEditor {
  shown?: UI_MainView_StageEditor_Shown | undefined;
}

export interface UI_MainView_StageEditor_Shown {
  source: UI_MainView_StageEditor_Shown_Source;
}

export enum UI_MainView_StageEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_APPLICATION_MENU = 2,
  SOURCE_LOWER_RIGHT = 3,
  UNRECOGNIZED = -1,
}

export function uI_MainView_StageEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_StageEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_StageEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_StageEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_APPLICATION_MENU':
      return UI_MainView_StageEditor_Shown_Source.SOURCE_APPLICATION_MENU;
    case 3:
    case 'SOURCE_LOWER_RIGHT':
      return UI_MainView_StageEditor_Shown_Source.SOURCE_LOWER_RIGHT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_StageEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_StageEditor_Shown_SourceToJSON(
  object: UI_MainView_StageEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_StageEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_StageEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_StageEditor_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_MainView_StageEditor_Shown_Source.SOURCE_LOWER_RIGHT:
      return 'SOURCE_LOWER_RIGHT';
    case UI_MainView_StageEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_ThemeEditor {
  shown?: UI_MainView_ThemeEditor_Shown | undefined;
}

export interface UI_MainView_ThemeEditor_Shown {
  source: UI_MainView_ThemeEditor_Shown_Source;
}

export enum UI_MainView_ThemeEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_THEME_CONTEXT_MENU = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_ThemeEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_ThemeEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_ThemeEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_ThemeEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_THEME_CONTEXT_MENU':
      return UI_MainView_ThemeEditor_Shown_Source.SOURCE_THEME_CONTEXT_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_ThemeEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_ThemeEditor_Shown_SourceToJSON(
  object: UI_MainView_ThemeEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_ThemeEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_ThemeEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_ThemeEditor_Shown_Source.SOURCE_THEME_CONTEXT_MENU:
      return 'SOURCE_THEME_CONTEXT_MENU';
    case UI_MainView_ThemeEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_CopyrightEditor {
  shown?: UI_MainView_CopyrightEditor_Shown | undefined;
}

export interface UI_MainView_CopyrightEditor_Shown {
  source: UI_MainView_CopyrightEditor_Shown_Source;
}

export enum UI_MainView_CopyrightEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_PREFERENCE = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_CopyrightEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_CopyrightEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_CopyrightEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_CopyrightEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_PREFERENCE':
      return UI_MainView_CopyrightEditor_Shown_Source.SOURCE_PREFERENCE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_CopyrightEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_CopyrightEditor_Shown_SourceToJSON(
  object: UI_MainView_CopyrightEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_CopyrightEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_CopyrightEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_CopyrightEditor_Shown_Source.SOURCE_PREFERENCE:
      return 'SOURCE_PREFERENCE';
    case UI_MainView_CopyrightEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_PropsEditor {
  shown?: UI_MainView_PropsEditor_Shown | undefined;
}

export interface UI_MainView_PropsEditor_Shown {
  source: UI_MainView_PropsEditor_Shown_Source;
}

export enum UI_MainView_PropsEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_LOWER_RIGHT = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_PropsEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_PropsEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_PropsEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_PropsEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_LOWER_RIGHT':
      return UI_MainView_PropsEditor_Shown_Source.SOURCE_LOWER_RIGHT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_PropsEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_PropsEditor_Shown_SourceToJSON(
  object: UI_MainView_PropsEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_PropsEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_PropsEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_PropsEditor_Shown_Source.SOURCE_LOWER_RIGHT:
      return 'SOURCE_LOWER_RIGHT';
    case UI_MainView_PropsEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_MainView_MaskEditor {
  shown?: UI_MainView_MaskEditor_Shown | undefined;
}

export interface UI_MainView_MaskEditor_Shown {
  source: UI_MainView_MaskEditor_Shown_Source;
}

export enum UI_MainView_MaskEditor_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_LOOKS_WINDOW = 2,
  UNRECOGNIZED = -1,
}

export function uI_MainView_MaskEditor_Shown_SourceFromJSON(
  object: any,
): UI_MainView_MaskEditor_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_MainView_MaskEditor_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_MainView_MaskEditor_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_LOOKS_WINDOW':
      return UI_MainView_MaskEditor_Shown_Source.SOURCE_LOOKS_WINDOW;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_MainView_MaskEditor_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_MainView_MaskEditor_Shown_SourceToJSON(
  object: UI_MainView_MaskEditor_Shown_Source,
): string {
  switch (object) {
    case UI_MainView_MaskEditor_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_MainView_MaskEditor_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_MainView_MaskEditor_Shown_Source.SOURCE_LOOKS_WINDOW:
      return 'SOURCE_LOOKS_WINDOW';
    case UI_MainView_MaskEditor_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Looks {
  shown?: UI_Looks_Shown | undefined;
}

export interface UI_Looks_Shown {
  source: UI_Looks_Shown_Source;
}

export enum UI_Looks_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_PRESENTATION_VIEW = 2,
  UNRECOGNIZED = -1,
}

export function uI_Looks_Shown_SourceFromJSON(
  object: any,
): UI_Looks_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Looks_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return UI_Looks_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_PRESENTATION_VIEW':
      return UI_Looks_Shown_Source.SOURCE_PRESENTATION_VIEW;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Looks_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_Looks_Shown_SourceToJSON(
  object: UI_Looks_Shown_Source,
): string {
  switch (object) {
    case UI_Looks_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Looks_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_Looks_Shown_Source.SOURCE_PRESENTATION_VIEW:
      return 'SOURCE_PRESENTATION_VIEW';
    case UI_Looks_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_ScreenConfiguration {
  shown?: UI_ScreenConfiguration_Shown | undefined;
}

export interface UI_ScreenConfiguration_Shown {
  source: UI_ScreenConfiguration_Shown_Source;
}

export enum UI_ScreenConfiguration_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function uI_ScreenConfiguration_Shown_SourceFromJSON(
  object: any,
): UI_ScreenConfiguration_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_ScreenConfiguration_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return UI_ScreenConfiguration_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_STAGE':
      return UI_ScreenConfiguration_Shown_Source.SOURCE_STAGE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_ScreenConfiguration_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_ScreenConfiguration_Shown_SourceToJSON(
  object: UI_ScreenConfiguration_Shown_Source,
): string {
  switch (object) {
    case UI_ScreenConfiguration_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_ScreenConfiguration_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_ScreenConfiguration_Shown_Source.SOURCE_STAGE:
      return 'SOURCE_STAGE';
    case UI_ScreenConfiguration_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight {
  timers?: UI_LowerRight_Timers | undefined;
  messages?: UI_LowerRight_Messages | undefined;
  props?: UI_LowerRight_Props | undefined;
  stage?: UI_LowerRight_Stage | undefined;
  audioBin?: UI_LowerRight_AudioBin | undefined;
  macros?: UI_LowerRight_Macros | undefined;
}

export interface UI_LowerRight_Timers {
  shown?: UI_LowerRight_Timers_Shown | undefined;
  collapse?: UI_LowerRight_Timers_Collapse | undefined;
  edit?: UI_LowerRight_Timers_Edit | undefined;
  state?: UI_LowerRight_Timers_State | undefined;
  create?: UI_LowerRight_Timers_Create | undefined;
  delete?: UI_LowerRight_Timers_Delete | undefined;
}

export interface UI_LowerRight_Timers_Shown {}

export interface UI_LowerRight_Timers_Collapse {
  state: UI_LowerRight_Timers_Collapse_State;
}

export enum UI_LowerRight_Timers_Collapse_State {
  STATE_UNKNOWN = 0,
  STATE_COLLAPSED = 1,
  STATE_EXPANDED = 2,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Timers_Collapse_StateFromJSON(
  object: any,
): UI_LowerRight_Timers_Collapse_State {
  switch (object) {
    case 0:
    case 'STATE_UNKNOWN':
      return UI_LowerRight_Timers_Collapse_State.STATE_UNKNOWN;
    case 1:
    case 'STATE_COLLAPSED':
      return UI_LowerRight_Timers_Collapse_State.STATE_COLLAPSED;
    case 2:
    case 'STATE_EXPANDED':
      return UI_LowerRight_Timers_Collapse_State.STATE_EXPANDED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Timers_Collapse_State.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Timers_Collapse_StateToJSON(
  object: UI_LowerRight_Timers_Collapse_State,
): string {
  switch (object) {
    case UI_LowerRight_Timers_Collapse_State.STATE_UNKNOWN:
      return 'STATE_UNKNOWN';
    case UI_LowerRight_Timers_Collapse_State.STATE_COLLAPSED:
      return 'STATE_COLLAPSED';
    case UI_LowerRight_Timers_Collapse_State.STATE_EXPANDED:
      return 'STATE_EXPANDED';
    case UI_LowerRight_Timers_Collapse_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Timers_Edit {
  field: UI_LowerRight_Timers_Edit_Field;
}

export enum UI_LowerRight_Timers_Edit_Field {
  FIELD_UNKNOWN = 0,
  FIELD_TYPE = 1,
  FIELD_VALUE = 2,
  FIELD_OVERRUN = 3,
  FIELD_NAME = 4,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Timers_Edit_FieldFromJSON(
  object: any,
): UI_LowerRight_Timers_Edit_Field {
  switch (object) {
    case 0:
    case 'FIELD_UNKNOWN':
      return UI_LowerRight_Timers_Edit_Field.FIELD_UNKNOWN;
    case 1:
    case 'FIELD_TYPE':
      return UI_LowerRight_Timers_Edit_Field.FIELD_TYPE;
    case 2:
    case 'FIELD_VALUE':
      return UI_LowerRight_Timers_Edit_Field.FIELD_VALUE;
    case 3:
    case 'FIELD_OVERRUN':
      return UI_LowerRight_Timers_Edit_Field.FIELD_OVERRUN;
    case 4:
    case 'FIELD_NAME':
      return UI_LowerRight_Timers_Edit_Field.FIELD_NAME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Timers_Edit_Field.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Timers_Edit_FieldToJSON(
  object: UI_LowerRight_Timers_Edit_Field,
): string {
  switch (object) {
    case UI_LowerRight_Timers_Edit_Field.FIELD_UNKNOWN:
      return 'FIELD_UNKNOWN';
    case UI_LowerRight_Timers_Edit_Field.FIELD_TYPE:
      return 'FIELD_TYPE';
    case UI_LowerRight_Timers_Edit_Field.FIELD_VALUE:
      return 'FIELD_VALUE';
    case UI_LowerRight_Timers_Edit_Field.FIELD_OVERRUN:
      return 'FIELD_OVERRUN';
    case UI_LowerRight_Timers_Edit_Field.FIELD_NAME:
      return 'FIELD_NAME';
    case UI_LowerRight_Timers_Edit_Field.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Timers_State {
  state: UI_LowerRight_Timers_State_State;
}

export enum UI_LowerRight_Timers_State_State {
  STATE_UNKNOWN = 0,
  STATE_START = 1,
  STATE_STOP = 2,
  STATE_RESET = 3,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Timers_State_StateFromJSON(
  object: any,
): UI_LowerRight_Timers_State_State {
  switch (object) {
    case 0:
    case 'STATE_UNKNOWN':
      return UI_LowerRight_Timers_State_State.STATE_UNKNOWN;
    case 1:
    case 'STATE_START':
      return UI_LowerRight_Timers_State_State.STATE_START;
    case 2:
    case 'STATE_STOP':
      return UI_LowerRight_Timers_State_State.STATE_STOP;
    case 3:
    case 'STATE_RESET':
      return UI_LowerRight_Timers_State_State.STATE_RESET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Timers_State_State.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Timers_State_StateToJSON(
  object: UI_LowerRight_Timers_State_State,
): string {
  switch (object) {
    case UI_LowerRight_Timers_State_State.STATE_UNKNOWN:
      return 'STATE_UNKNOWN';
    case UI_LowerRight_Timers_State_State.STATE_START:
      return 'STATE_START';
    case UI_LowerRight_Timers_State_State.STATE_STOP:
      return 'STATE_STOP';
    case UI_LowerRight_Timers_State_State.STATE_RESET:
      return 'STATE_RESET';
    case UI_LowerRight_Timers_State_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Timers_Create {}

export interface UI_LowerRight_Timers_Delete {}

export interface UI_LowerRight_Messages {
  shown?: UI_LowerRight_Messages_Shown | undefined;
  edit?: UI_LowerRight_Messages_Edit | undefined;
  state?: UI_LowerRight_Messages_State | undefined;
  create?: UI_LowerRight_Messages_Create | undefined;
  delete?: UI_LowerRight_Messages_Delete | undefined;
}

export interface UI_LowerRight_Messages_Shown {}

export interface UI_LowerRight_Messages_Edit {
  action: UI_LowerRight_Messages_Edit_Action;
}

export enum UI_LowerRight_Messages_Edit_Action {
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

export function uI_LowerRight_Messages_Edit_ActionFromJSON(
  object: any,
): UI_LowerRight_Messages_Edit_Action {
  switch (object) {
    case 0:
    case 'ACTION_UNKNOWN':
      return UI_LowerRight_Messages_Edit_Action.ACTION_UNKNOWN;
    case 1:
    case 'ACTION_ADD_TEXT_TOKEN':
      return UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TEXT_TOKEN;
    case 2:
    case 'ACTION_ADD_TIMER_TOKEN':
      return UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TIMER_TOKEN;
    case 3:
    case 'ACTION_ADD_CUSTOM_TOKEN':
      return UI_LowerRight_Messages_Edit_Action.ACTION_ADD_CUSTOM_TOKEN;
    case 4:
    case 'ACTION_SET_THEME':
      return UI_LowerRight_Messages_Edit_Action.ACTION_SET_THEME;
    case 5:
    case 'ACTION_SET_TEXT':
      return UI_LowerRight_Messages_Edit_Action.ACTION_SET_TEXT;
    case 6:
    case 'ACTION_SET_WEB_NOTIFICATION':
      return UI_LowerRight_Messages_Edit_Action.ACTION_SET_WEB_NOTIFICATION;
    case 7:
    case 'ACTION_SET_DISMISS_BEHAVIOR':
      return UI_LowerRight_Messages_Edit_Action.ACTION_SET_DISMISS_BEHAVIOR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Messages_Edit_Action.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Messages_Edit_ActionToJSON(
  object: UI_LowerRight_Messages_Edit_Action,
): string {
  switch (object) {
    case UI_LowerRight_Messages_Edit_Action.ACTION_UNKNOWN:
      return 'ACTION_UNKNOWN';
    case UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TEXT_TOKEN:
      return 'ACTION_ADD_TEXT_TOKEN';
    case UI_LowerRight_Messages_Edit_Action.ACTION_ADD_TIMER_TOKEN:
      return 'ACTION_ADD_TIMER_TOKEN';
    case UI_LowerRight_Messages_Edit_Action.ACTION_ADD_CUSTOM_TOKEN:
      return 'ACTION_ADD_CUSTOM_TOKEN';
    case UI_LowerRight_Messages_Edit_Action.ACTION_SET_THEME:
      return 'ACTION_SET_THEME';
    case UI_LowerRight_Messages_Edit_Action.ACTION_SET_TEXT:
      return 'ACTION_SET_TEXT';
    case UI_LowerRight_Messages_Edit_Action.ACTION_SET_WEB_NOTIFICATION:
      return 'ACTION_SET_WEB_NOTIFICATION';
    case UI_LowerRight_Messages_Edit_Action.ACTION_SET_DISMISS_BEHAVIOR:
      return 'ACTION_SET_DISMISS_BEHAVIOR';
    case UI_LowerRight_Messages_Edit_Action.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Messages_State {
  state: UI_LowerRight_Messages_State_State;
}

export enum UI_LowerRight_Messages_State_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Messages_State_StateFromJSON(
  object: any,
): UI_LowerRight_Messages_State_State {
  switch (object) {
    case 0:
    case 'STATE_UNKNOWN':
      return UI_LowerRight_Messages_State_State.STATE_UNKNOWN;
    case 1:
    case 'STATE_SHOW':
      return UI_LowerRight_Messages_State_State.STATE_SHOW;
    case 2:
    case 'STATE_CLEAR':
      return UI_LowerRight_Messages_State_State.STATE_CLEAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Messages_State_State.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Messages_State_StateToJSON(
  object: UI_LowerRight_Messages_State_State,
): string {
  switch (object) {
    case UI_LowerRight_Messages_State_State.STATE_UNKNOWN:
      return 'STATE_UNKNOWN';
    case UI_LowerRight_Messages_State_State.STATE_SHOW:
      return 'STATE_SHOW';
    case UI_LowerRight_Messages_State_State.STATE_CLEAR:
      return 'STATE_CLEAR';
    case UI_LowerRight_Messages_State_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Messages_Create {}

export interface UI_LowerRight_Messages_Delete {}

export interface UI_LowerRight_Props {
  shown?: UI_LowerRight_Props_Shown | undefined;
  transition?: UI_LowerRight_Props_Transition | undefined;
  state?: UI_LowerRight_Props_State | undefined;
  create?: UI_LowerRight_Props_Create | undefined;
  delete?: UI_LowerRight_Props_Delete | undefined;
}

export interface UI_LowerRight_Props_Shown {}

export interface UI_LowerRight_Props_Transition {}

export interface UI_LowerRight_Props_State {
  state: UI_LowerRight_Props_State_State;
}

export enum UI_LowerRight_Props_State_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Props_State_StateFromJSON(
  object: any,
): UI_LowerRight_Props_State_State {
  switch (object) {
    case 0:
    case 'STATE_UNKNOWN':
      return UI_LowerRight_Props_State_State.STATE_UNKNOWN;
    case 1:
    case 'STATE_SHOW':
      return UI_LowerRight_Props_State_State.STATE_SHOW;
    case 2:
    case 'STATE_CLEAR':
      return UI_LowerRight_Props_State_State.STATE_CLEAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Props_State_State.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Props_State_StateToJSON(
  object: UI_LowerRight_Props_State_State,
): string {
  switch (object) {
    case UI_LowerRight_Props_State_State.STATE_UNKNOWN:
      return 'STATE_UNKNOWN';
    case UI_LowerRight_Props_State_State.STATE_SHOW:
      return 'STATE_SHOW';
    case UI_LowerRight_Props_State_State.STATE_CLEAR:
      return 'STATE_CLEAR';
    case UI_LowerRight_Props_State_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Props_Create {}

export interface UI_LowerRight_Props_Delete {}

export interface UI_LowerRight_Stage {
  shown?: UI_LowerRight_Stage_Shown | undefined;
  changeLayout?: UI_LowerRight_Stage_ChangeLayout | undefined;
  messageState?: UI_LowerRight_Stage_MessageState | undefined;
  configureScreens?: UI_LowerRight_Stage_ConfigureScreens | undefined;
  editLayouts?: UI_LowerRight_Stage_EditLayouts | undefined;
}

export interface UI_LowerRight_Stage_Shown {}

export interface UI_LowerRight_Stage_ChangeLayout {}

export interface UI_LowerRight_Stage_MessageState {
  state: UI_LowerRight_Stage_MessageState_State;
}

export enum UI_LowerRight_Stage_MessageState_State {
  STATE_UNKNOWN = 0,
  STATE_SHOW = 1,
  STATE_CLEAR = 2,
  UNRECOGNIZED = -1,
}

export function uI_LowerRight_Stage_MessageState_StateFromJSON(
  object: any,
): UI_LowerRight_Stage_MessageState_State {
  switch (object) {
    case 0:
    case 'STATE_UNKNOWN':
      return UI_LowerRight_Stage_MessageState_State.STATE_UNKNOWN;
    case 1:
    case 'STATE_SHOW':
      return UI_LowerRight_Stage_MessageState_State.STATE_SHOW;
    case 2:
    case 'STATE_CLEAR':
      return UI_LowerRight_Stage_MessageState_State.STATE_CLEAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_LowerRight_Stage_MessageState_State.UNRECOGNIZED;
  }
}

export function uI_LowerRight_Stage_MessageState_StateToJSON(
  object: UI_LowerRight_Stage_MessageState_State,
): string {
  switch (object) {
    case UI_LowerRight_Stage_MessageState_State.STATE_UNKNOWN:
      return 'STATE_UNKNOWN';
    case UI_LowerRight_Stage_MessageState_State.STATE_SHOW:
      return 'STATE_SHOW';
    case UI_LowerRight_Stage_MessageState_State.STATE_CLEAR:
      return 'STATE_CLEAR';
    case UI_LowerRight_Stage_MessageState_State.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_LowerRight_Stage_ConfigureScreens {}

export interface UI_LowerRight_Stage_EditLayouts {}

export interface UI_LowerRight_AudioBin {}

export interface UI_LowerRight_Macros {
  shown?: UI_LowerRight_Macros_Shown | undefined;
  trigger?: UI_LowerRight_Macros_Trigger | undefined;
  create?: UI_LowerRight_Macros_Create | undefined;
  delete?: UI_LowerRight_Macros_Delete | undefined;
}

export interface UI_LowerRight_Macros_Shown {}

export interface UI_LowerRight_Macros_Trigger {}

export interface UI_LowerRight_Macros_Create {}

export interface UI_LowerRight_Macros_Delete {}

export interface UI_TextInspector {
  shown?: UI_TextInspector_Shown | undefined;
  foreground?: UI_TextInspector_Foreground | undefined;
  underlineColor?: UI_TextInspector_UnderlineColor | undefined;
  backgroundColor?: UI_TextInspector_BackgroundColor | undefined;
  scrollingText?: UI_TextInspector_ScrollingText | undefined;
  lineTransform?: UI_TextInspector_LineTransform | undefined;
}

export enum UI_TextInspector_SelectionMode {
  SELECTION_MODE_UNKNOWN = 0,
  SELECTION_MODE_OBJECT = 1,
  SELECTION_MODE_RANGE = 2,
  UNRECOGNIZED = -1,
}

export function uI_TextInspector_SelectionModeFromJSON(
  object: any,
): UI_TextInspector_SelectionMode {
  switch (object) {
    case 0:
    case 'SELECTION_MODE_UNKNOWN':
      return UI_TextInspector_SelectionMode.SELECTION_MODE_UNKNOWN;
    case 1:
    case 'SELECTION_MODE_OBJECT':
      return UI_TextInspector_SelectionMode.SELECTION_MODE_OBJECT;
    case 2:
    case 'SELECTION_MODE_RANGE':
      return UI_TextInspector_SelectionMode.SELECTION_MODE_RANGE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_TextInspector_SelectionMode.UNRECOGNIZED;
  }
}

export function uI_TextInspector_SelectionModeToJSON(
  object: UI_TextInspector_SelectionMode,
): string {
  switch (object) {
    case UI_TextInspector_SelectionMode.SELECTION_MODE_UNKNOWN:
      return 'SELECTION_MODE_UNKNOWN';
    case UI_TextInspector_SelectionMode.SELECTION_MODE_OBJECT:
      return 'SELECTION_MODE_OBJECT';
    case UI_TextInspector_SelectionMode.SELECTION_MODE_RANGE:
      return 'SELECTION_MODE_RANGE';
    case UI_TextInspector_SelectionMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_TextInspector_Shown {}

export interface UI_TextInspector_Foreground {
  fillType: UI_TextInspector_Foreground_FillType;
  selectionMode: UI_TextInspector_SelectionMode;
}

export enum UI_TextInspector_Foreground_FillType {
  FILL_TYPE_UNKNOWN = 0,
  FILL_TYPE_SOLID = 1,
  FILL_TYPE_GRADIENT = 2,
  UNRECOGNIZED = -1,
}

export function uI_TextInspector_Foreground_FillTypeFromJSON(
  object: any,
): UI_TextInspector_Foreground_FillType {
  switch (object) {
    case 0:
    case 'FILL_TYPE_UNKNOWN':
      return UI_TextInspector_Foreground_FillType.FILL_TYPE_UNKNOWN;
    case 1:
    case 'FILL_TYPE_SOLID':
      return UI_TextInspector_Foreground_FillType.FILL_TYPE_SOLID;
    case 2:
    case 'FILL_TYPE_GRADIENT':
      return UI_TextInspector_Foreground_FillType.FILL_TYPE_GRADIENT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_TextInspector_Foreground_FillType.UNRECOGNIZED;
  }
}

export function uI_TextInspector_Foreground_FillTypeToJSON(
  object: UI_TextInspector_Foreground_FillType,
): string {
  switch (object) {
    case UI_TextInspector_Foreground_FillType.FILL_TYPE_UNKNOWN:
      return 'FILL_TYPE_UNKNOWN';
    case UI_TextInspector_Foreground_FillType.FILL_TYPE_SOLID:
      return 'FILL_TYPE_SOLID';
    case UI_TextInspector_Foreground_FillType.FILL_TYPE_GRADIENT:
      return 'FILL_TYPE_GRADIENT';
    case UI_TextInspector_Foreground_FillType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_TextInspector_UnderlineColor {
  isEnabled: boolean;
  selectionMode: UI_TextInspector_SelectionMode;
}

export interface UI_TextInspector_BackgroundColor {
  colorType: UI_TextInspector_BackgroundColor_ColorType;
  selectionMode: UI_TextInspector_SelectionMode;
}

export enum UI_TextInspector_BackgroundColor_ColorType {
  COLOR_TYPE_UNKNOWN = 0,
  COLOR_TYPE_CLEAR = 1,
  COLOR_TYPE_OTHER = 2,
  UNRECOGNIZED = -1,
}

export function uI_TextInspector_BackgroundColor_ColorTypeFromJSON(
  object: any,
): UI_TextInspector_BackgroundColor_ColorType {
  switch (object) {
    case 0:
    case 'COLOR_TYPE_UNKNOWN':
      return UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_UNKNOWN;
    case 1:
    case 'COLOR_TYPE_CLEAR':
      return UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_CLEAR;
    case 2:
    case 'COLOR_TYPE_OTHER':
      return UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_OTHER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_TextInspector_BackgroundColor_ColorType.UNRECOGNIZED;
  }
}

export function uI_TextInspector_BackgroundColor_ColorTypeToJSON(
  object: UI_TextInspector_BackgroundColor_ColorType,
): string {
  switch (object) {
    case UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_UNKNOWN:
      return 'COLOR_TYPE_UNKNOWN';
    case UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_CLEAR:
      return 'COLOR_TYPE_CLEAR';
    case UI_TextInspector_BackgroundColor_ColorType.COLOR_TYPE_OTHER:
      return 'COLOR_TYPE_OTHER';
    case UI_TextInspector_BackgroundColor_ColorType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_TextInspector_ScrollingText {
  enable?: UI_TextInspector_ScrollingText_Enable | undefined;
}

export interface UI_TextInspector_ScrollingText_Enable {
  enabled: boolean;
}

export interface UI_TextInspector_LineTransform {
  transformType: UI_TextInspector_LineTransform_TransformType;
}

export enum UI_TextInspector_LineTransform_TransformType {
  TRANSFORM_TYPE_UNKNOWN = 0,
  TRANSFORM_TYPE_NONE = 1,
  TRANSFORM_TYPE_REMOVE_LINE_RETURNS = 2,
  TRANSFORM_TYPE_REPLACE_LINE_RETURNS = 3,
  TRANSFORM_TYPE_ONE_WORD_PER_LINE = 4,
  TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE = 5,
  UNRECOGNIZED = -1,
}

export function uI_TextInspector_LineTransform_TransformTypeFromJSON(
  object: any,
): UI_TextInspector_LineTransform_TransformType {
  switch (object) {
    case 0:
    case 'TRANSFORM_TYPE_UNKNOWN':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_UNKNOWN;
    case 1:
    case 'TRANSFORM_TYPE_NONE':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_NONE;
    case 2:
    case 'TRANSFORM_TYPE_REMOVE_LINE_RETURNS':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REMOVE_LINE_RETURNS;
    case 3:
    case 'TRANSFORM_TYPE_REPLACE_LINE_RETURNS':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REPLACE_LINE_RETURNS;
    case 4:
    case 'TRANSFORM_TYPE_ONE_WORD_PER_LINE':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_WORD_PER_LINE;
    case 5:
    case 'TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE':
      return UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_TextInspector_LineTransform_TransformType.UNRECOGNIZED;
  }
}

export function uI_TextInspector_LineTransform_TransformTypeToJSON(
  object: UI_TextInspector_LineTransform_TransformType,
): string {
  switch (object) {
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_UNKNOWN:
      return 'TRANSFORM_TYPE_UNKNOWN';
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_NONE:
      return 'TRANSFORM_TYPE_NONE';
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REMOVE_LINE_RETURNS:
      return 'TRANSFORM_TYPE_REMOVE_LINE_RETURNS';
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_REPLACE_LINE_RETURNS:
      return 'TRANSFORM_TYPE_REPLACE_LINE_RETURNS';
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_WORD_PER_LINE:
      return 'TRANSFORM_TYPE_ONE_WORD_PER_LINE';
    case UI_TextInspector_LineTransform_TransformType.TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE:
      return 'TRANSFORM_TYPE_ONE_CHARACTER_PER_LINE';
    case UI_TextInspector_LineTransform_TransformType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Show {
  slideLabel?: UI_Show_SlideLabel | undefined;
}

export interface UI_Show_SlideLabel {
  shown?: UI_Show_SlideLabel_Shown | undefined;
  change?: UI_Show_SlideLabel_Change | undefined;
}

export interface UI_Show_SlideLabel_Shown {}

export interface UI_Show_SlideLabel_Change {
  numberOfSlides: number;
  source: UI_Show_SlideLabel_Change_Source;
}

export enum UI_Show_SlideLabel_Change_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_CONTEXT_MENU = 1,
  SOURCE_POPOVER = 2,
  UNRECOGNIZED = -1,
}

export function uI_Show_SlideLabel_Change_SourceFromJSON(
  object: any,
): UI_Show_SlideLabel_Change_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Show_SlideLabel_Change_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_CONTEXT_MENU':
      return UI_Show_SlideLabel_Change_Source.SOURCE_CONTEXT_MENU;
    case 2:
    case 'SOURCE_POPOVER':
      return UI_Show_SlideLabel_Change_Source.SOURCE_POPOVER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Show_SlideLabel_Change_Source.UNRECOGNIZED;
  }
}

export function uI_Show_SlideLabel_Change_SourceToJSON(
  object: UI_Show_SlideLabel_Change_Source,
): string {
  switch (object) {
    case UI_Show_SlideLabel_Change_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Show_SlideLabel_Change_Source.SOURCE_CONTEXT_MENU:
      return 'SOURCE_CONTEXT_MENU';
    case UI_Show_SlideLabel_Change_Source.SOURCE_POPOVER:
      return 'SOURCE_POPOVER';
    case UI_Show_SlideLabel_Change_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_InAppStore {
  trial?: UI_InAppStore_Trial | undefined;
}

export interface UI_InAppStore_Trial {
  shown?: UI_InAppStore_Trial_Shown | undefined;
  complete?: UI_InAppStore_Trial_Complete | undefined;
}

export interface UI_InAppStore_Trial_Shown {}

export interface UI_InAppStore_Trial_Complete {
  result: UI_InAppStore_Trial_Complete_Result;
}

export enum UI_InAppStore_Trial_Complete_Result {
  RESULT_UNKNOWN = 0,
  RESULT_SUCCESS = 1,
  RESULT_EARLY_EXIT = 2,
  UNRECOGNIZED = -1,
}

export function uI_InAppStore_Trial_Complete_ResultFromJSON(
  object: any,
): UI_InAppStore_Trial_Complete_Result {
  switch (object) {
    case 0:
    case 'RESULT_UNKNOWN':
      return UI_InAppStore_Trial_Complete_Result.RESULT_UNKNOWN;
    case 1:
    case 'RESULT_SUCCESS':
      return UI_InAppStore_Trial_Complete_Result.RESULT_SUCCESS;
    case 2:
    case 'RESULT_EARLY_EXIT':
      return UI_InAppStore_Trial_Complete_Result.RESULT_EARLY_EXIT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_InAppStore_Trial_Complete_Result.UNRECOGNIZED;
  }
}

export function uI_InAppStore_Trial_Complete_ResultToJSON(
  object: UI_InAppStore_Trial_Complete_Result,
): string {
  switch (object) {
    case UI_InAppStore_Trial_Complete_Result.RESULT_UNKNOWN:
      return 'RESULT_UNKNOWN';
    case UI_InAppStore_Trial_Complete_Result.RESULT_SUCCESS:
      return 'RESULT_SUCCESS';
    case UI_InAppStore_Trial_Complete_Result.RESULT_EARLY_EXIT:
      return 'RESULT_EARLY_EXIT';
    case UI_InAppStore_Trial_Complete_Result.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Editor {
  overlay?: UI_Editor_Overlay | undefined;
}

export interface UI_Editor_Overlay {
  shown?: UI_Editor_Overlay_Shown | undefined;
  closed?: UI_Editor_Overlay_Closed | undefined;
}

export interface UI_Editor_Overlay_Shown {
  source: UI_Editor_Overlay_Shown_Source;
}

export enum UI_Editor_Overlay_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_DOUBLE_CLICK = 1,
  SOURCE_CONTEXTUAL_MENU = 2,
  SOURCE_PLUS_BUTTON_MENU = 3,
  UNRECOGNIZED = -1,
}

export function uI_Editor_Overlay_Shown_SourceFromJSON(
  object: any,
): UI_Editor_Overlay_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Editor_Overlay_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_DOUBLE_CLICK':
      return UI_Editor_Overlay_Shown_Source.SOURCE_DOUBLE_CLICK;
    case 2:
    case 'SOURCE_CONTEXTUAL_MENU':
      return UI_Editor_Overlay_Shown_Source.SOURCE_CONTEXTUAL_MENU;
    case 3:
    case 'SOURCE_PLUS_BUTTON_MENU':
      return UI_Editor_Overlay_Shown_Source.SOURCE_PLUS_BUTTON_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Editor_Overlay_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_Editor_Overlay_Shown_SourceToJSON(
  object: UI_Editor_Overlay_Shown_Source,
): string {
  switch (object) {
    case UI_Editor_Overlay_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Editor_Overlay_Shown_Source.SOURCE_DOUBLE_CLICK:
      return 'SOURCE_DOUBLE_CLICK';
    case UI_Editor_Overlay_Shown_Source.SOURCE_CONTEXTUAL_MENU:
      return 'SOURCE_CONTEXTUAL_MENU';
    case UI_Editor_Overlay_Shown_Source.SOURCE_PLUS_BUTTON_MENU:
      return 'SOURCE_PLUS_BUTTON_MENU';
    case UI_Editor_Overlay_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Editor_Overlay_Closed {
  source: UI_Editor_Overlay_Closed_Source;
}

export enum UI_Editor_Overlay_Closed_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_CLICK_OFF_ELEMENT = 1,
  SOURCE_ESCAPE_KEY = 2,
  SOURCE_CLOSE_BUTTON = 3,
  UNRECOGNIZED = -1,
}

export function uI_Editor_Overlay_Closed_SourceFromJSON(
  object: any,
): UI_Editor_Overlay_Closed_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Editor_Overlay_Closed_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_CLICK_OFF_ELEMENT':
      return UI_Editor_Overlay_Closed_Source.SOURCE_CLICK_OFF_ELEMENT;
    case 2:
    case 'SOURCE_ESCAPE_KEY':
      return UI_Editor_Overlay_Closed_Source.SOURCE_ESCAPE_KEY;
    case 3:
    case 'SOURCE_CLOSE_BUTTON':
      return UI_Editor_Overlay_Closed_Source.SOURCE_CLOSE_BUTTON;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Editor_Overlay_Closed_Source.UNRECOGNIZED;
  }
}

export function uI_Editor_Overlay_Closed_SourceToJSON(
  object: UI_Editor_Overlay_Closed_Source,
): string {
  switch (object) {
    case UI_Editor_Overlay_Closed_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Editor_Overlay_Closed_Source.SOURCE_CLICK_OFF_ELEMENT:
      return 'SOURCE_CLICK_OFF_ELEMENT';
    case UI_Editor_Overlay_Closed_Source.SOURCE_ESCAPE_KEY:
      return 'SOURCE_ESCAPE_KEY';
    case UI_Editor_Overlay_Closed_Source.SOURCE_CLOSE_BUTTON:
      return 'SOURCE_CLOSE_BUTTON';
    case UI_Editor_Overlay_Closed_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_WhatsNew {
  viewed?: UI_WhatsNew_Viewed | undefined;
}

export interface UI_WhatsNew_Viewed {
  version: string;
  resourceName: string;
  viewTime: number;
}

export interface UI_ClearGroups {
  shown?: UI_ClearGroups_Shown | undefined;
  create?: UI_ClearGroups_Create | undefined;
  delete?: UI_ClearGroups_Delete | undefined;
  group?: UI_ClearGroups_Group | undefined;
}

export interface UI_ClearGroups_Shown {
  source: UI_ClearGroups_Shown_Source;
}

export enum UI_ClearGroups_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_PREVIEW_MENU = 2,
  SOURCE_ACTION_MENU = 3,
  UNRECOGNIZED = -1,
}

export function uI_ClearGroups_Shown_SourceFromJSON(
  object: any,
): UI_ClearGroups_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_ClearGroups_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return UI_ClearGroups_Shown_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_PREVIEW_MENU':
      return UI_ClearGroups_Shown_Source.SOURCE_PREVIEW_MENU;
    case 3:
    case 'SOURCE_ACTION_MENU':
      return UI_ClearGroups_Shown_Source.SOURCE_ACTION_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_ClearGroups_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_ClearGroups_Shown_SourceToJSON(
  object: UI_ClearGroups_Shown_Source,
): string {
  switch (object) {
    case UI_ClearGroups_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_ClearGroups_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_ClearGroups_Shown_Source.SOURCE_PREVIEW_MENU:
      return 'SOURCE_PREVIEW_MENU';
    case UI_ClearGroups_Shown_Source.SOURCE_ACTION_MENU:
      return 'SOURCE_ACTION_MENU';
    case UI_ClearGroups_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_ClearGroups_Create {}

export interface UI_ClearGroups_Delete {}

export interface UI_ClearGroups_Group {
  changeVisibility?: UI_ClearGroups_Group_ChangeVisibility | undefined;
  changeIcon?: UI_ClearGroups_Group_ChangeIcon | undefined;
}

export interface UI_ClearGroups_Group_ChangeVisibility {
  visibility: UI_ClearGroups_Group_ChangeVisibility_Visibility;
}

export enum UI_ClearGroups_Group_ChangeVisibility_Visibility {
  VISIBILITY_UNKNOWN = 0,
  VISIBILITY_SHOWN = 1,
  VISIBILITY_HIDDEN = 2,
  UNRECOGNIZED = -1,
}

export function uI_ClearGroups_Group_ChangeVisibility_VisibilityFromJSON(
  object: any,
): UI_ClearGroups_Group_ChangeVisibility_Visibility {
  switch (object) {
    case 0:
    case 'VISIBILITY_UNKNOWN':
      return UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_UNKNOWN;
    case 1:
    case 'VISIBILITY_SHOWN':
      return UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_SHOWN;
    case 2:
    case 'VISIBILITY_HIDDEN':
      return UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_HIDDEN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_ClearGroups_Group_ChangeVisibility_Visibility.UNRECOGNIZED;
  }
}

export function uI_ClearGroups_Group_ChangeVisibility_VisibilityToJSON(
  object: UI_ClearGroups_Group_ChangeVisibility_Visibility,
): string {
  switch (object) {
    case UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_UNKNOWN:
      return 'VISIBILITY_UNKNOWN';
    case UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_SHOWN:
      return 'VISIBILITY_SHOWN';
    case UI_ClearGroups_Group_ChangeVisibility_Visibility.VISIBILITY_HIDDEN:
      return 'VISIBILITY_HIDDEN';
    case UI_ClearGroups_Group_ChangeVisibility_Visibility.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_ClearGroups_Group_ChangeIcon {
  iconType: UI_ClearGroups_Group_ChangeIcon_IconType;
  isTinted: boolean;
}

export enum UI_ClearGroups_Group_ChangeIcon_IconType {
  ICON_TYPE_UNKNOWN = 0,
  ICON_TYPE_DEFAULT = 1,
  ICON_TYPE_CUSTOM = 2,
  UNRECOGNIZED = -1,
}

export function uI_ClearGroups_Group_ChangeIcon_IconTypeFromJSON(
  object: any,
): UI_ClearGroups_Group_ChangeIcon_IconType {
  switch (object) {
    case 0:
    case 'ICON_TYPE_UNKNOWN':
      return UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_UNKNOWN;
    case 1:
    case 'ICON_TYPE_DEFAULT':
      return UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_DEFAULT;
    case 2:
    case 'ICON_TYPE_CUSTOM':
      return UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_ClearGroups_Group_ChangeIcon_IconType.UNRECOGNIZED;
  }
}

export function uI_ClearGroups_Group_ChangeIcon_IconTypeToJSON(
  object: UI_ClearGroups_Group_ChangeIcon_IconType,
): string {
  switch (object) {
    case UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_UNKNOWN:
      return 'ICON_TYPE_UNKNOWN';
    case UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_DEFAULT:
      return 'ICON_TYPE_DEFAULT';
    case UI_ClearGroups_Group_ChangeIcon_IconType.ICON_TYPE_CUSTOM:
      return 'ICON_TYPE_CUSTOM';
    case UI_ClearGroups_Group_ChangeIcon_IconType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_PreviewArea {
  clearGroups?: UI_PreviewArea_ClearGroups | undefined;
}

export interface UI_PreviewArea_ClearGroups {
  trigger?: UI_PreviewArea_ClearGroups_Trigger | undefined;
  changed?: UI_PreviewArea_ClearGroups_Changed | undefined;
}

export interface UI_PreviewArea_ClearGroups_Trigger {}

export interface UI_PreviewArea_ClearGroups_Changed {
  count: number;
}

export interface UI_Placeholder {
  link?: UI_Placeholder_Link | undefined;
  unlink?: UI_Placeholder_Unlink | undefined;
}

export interface UI_Placeholder_Link {
  linkType: UI_Placeholder_Link_Type;
  linkSource: UI_Placeholder_Link_Source;
}

export enum UI_Placeholder_Link_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PRESENTATION = 1,
  TYPE_MEDIA = 2,
  TYPE_EXTERNAL_PRESENTATION = 3,
  UNRECOGNIZED = -1,
}

export function uI_Placeholder_Link_TypeFromJSON(
  object: any,
): UI_Placeholder_Link_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return UI_Placeholder_Link_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_PRESENTATION':
      return UI_Placeholder_Link_Type.TYPE_PRESENTATION;
    case 2:
    case 'TYPE_MEDIA':
      return UI_Placeholder_Link_Type.TYPE_MEDIA;
    case 3:
    case 'TYPE_EXTERNAL_PRESENTATION':
      return UI_Placeholder_Link_Type.TYPE_EXTERNAL_PRESENTATION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Placeholder_Link_Type.UNRECOGNIZED;
  }
}

export function uI_Placeholder_Link_TypeToJSON(
  object: UI_Placeholder_Link_Type,
): string {
  switch (object) {
    case UI_Placeholder_Link_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case UI_Placeholder_Link_Type.TYPE_PRESENTATION:
      return 'TYPE_PRESENTATION';
    case UI_Placeholder_Link_Type.TYPE_MEDIA:
      return 'TYPE_MEDIA';
    case UI_Placeholder_Link_Type.TYPE_EXTERNAL_PRESENTATION:
      return 'TYPE_EXTERNAL_PRESENTATION';
    case UI_Placeholder_Link_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum UI_Placeholder_Link_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_QUICK_SEARCH = 1,
  SOURCE_IMPORT_BUTTON = 2,
  SOURCE_CREATE_BUTTON = 3,
  SOURCE_DRAG_DROP = 4,
  SOURCE_AUTOMATIC = 5,
  UNRECOGNIZED = -1,
}

export function uI_Placeholder_Link_SourceFromJSON(
  object: any,
): UI_Placeholder_Link_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Placeholder_Link_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_QUICK_SEARCH':
      return UI_Placeholder_Link_Source.SOURCE_QUICK_SEARCH;
    case 2:
    case 'SOURCE_IMPORT_BUTTON':
      return UI_Placeholder_Link_Source.SOURCE_IMPORT_BUTTON;
    case 3:
    case 'SOURCE_CREATE_BUTTON':
      return UI_Placeholder_Link_Source.SOURCE_CREATE_BUTTON;
    case 4:
    case 'SOURCE_DRAG_DROP':
      return UI_Placeholder_Link_Source.SOURCE_DRAG_DROP;
    case 5:
    case 'SOURCE_AUTOMATIC':
      return UI_Placeholder_Link_Source.SOURCE_AUTOMATIC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Placeholder_Link_Source.UNRECOGNIZED;
  }
}

export function uI_Placeholder_Link_SourceToJSON(
  object: UI_Placeholder_Link_Source,
): string {
  switch (object) {
    case UI_Placeholder_Link_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Placeholder_Link_Source.SOURCE_QUICK_SEARCH:
      return 'SOURCE_QUICK_SEARCH';
    case UI_Placeholder_Link_Source.SOURCE_IMPORT_BUTTON:
      return 'SOURCE_IMPORT_BUTTON';
    case UI_Placeholder_Link_Source.SOURCE_CREATE_BUTTON:
      return 'SOURCE_CREATE_BUTTON';
    case UI_Placeholder_Link_Source.SOURCE_DRAG_DROP:
      return 'SOURCE_DRAG_DROP';
    case UI_Placeholder_Link_Source.SOURCE_AUTOMATIC:
      return 'SOURCE_AUTOMATIC';
    case UI_Placeholder_Link_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Placeholder_Unlink {}

export interface UI_PlanningCenterLive {
  shown?: UI_PlanningCenterLive_Shown | undefined;
}

export interface UI_PlanningCenterLive_Shown {
  windowType: UI_PlanningCenterLive_Shown_WindowType;
}

export enum UI_PlanningCenterLive_Shown_WindowType {
  WINDOW_TYPE_UNKNOWN = 0,
  WINDOW_TYPE_DOCKED = 1,
  WINDOW_TYPE_FLOATING = 2,
  UNRECOGNIZED = -1,
}

export function uI_PlanningCenterLive_Shown_WindowTypeFromJSON(
  object: any,
): UI_PlanningCenterLive_Shown_WindowType {
  switch (object) {
    case 0:
    case 'WINDOW_TYPE_UNKNOWN':
      return UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_UNKNOWN;
    case 1:
    case 'WINDOW_TYPE_DOCKED':
      return UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_DOCKED;
    case 2:
    case 'WINDOW_TYPE_FLOATING':
      return UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_FLOATING;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_PlanningCenterLive_Shown_WindowType.UNRECOGNIZED;
  }
}

export function uI_PlanningCenterLive_Shown_WindowTypeToJSON(
  object: UI_PlanningCenterLive_Shown_WindowType,
): string {
  switch (object) {
    case UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_UNKNOWN:
      return 'WINDOW_TYPE_UNKNOWN';
    case UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_DOCKED:
      return 'WINDOW_TYPE_DOCKED';
    case UI_PlanningCenterLive_Shown_WindowType.WINDOW_TYPE_FLOATING:
      return 'WINDOW_TYPE_FLOATING';
    case UI_PlanningCenterLive_Shown_WindowType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_NetworkGroup {
  create?: UI_NetworkGroup_Create | undefined;
  add?: UI_NetworkGroup_Add | undefined;
  join?: UI_NetworkGroup_Join | undefined;
  invite?: UI_NetworkGroup_Invite | undefined;
  leave?: UI_NetworkGroup_Leave | undefined;
  remove?: UI_NetworkGroup_Remove | undefined;
}

export interface UI_NetworkGroup_Create {}

export interface UI_NetworkGroup_Add {}

export interface UI_NetworkGroup_Join {}

export interface UI_NetworkGroup_Invite {
  didAccept: boolean;
}

export interface UI_NetworkGroup_Leave {}

export interface UI_NetworkGroup_Remove {}

export interface UI_CCLI {
  report: UI_CCLI_Report | undefined;
}

export interface UI_CCLI_Report {
  shown?: UI_CCLI_Report_Shown | undefined;
  reset?: UI_CCLI_Report_Reset | undefined;
  export?: UI_CCLI_Report_Export | undefined;
}

export interface UI_CCLI_Report_Shown {}

export interface UI_CCLI_Report_Reset {}

export interface UI_CCLI_Report_Export {}

export interface UI_Capture {
  shown?: UI_Capture_Shown | undefined;
}

export interface UI_Capture_Shown {
  source: UI_Capture_Shown_Source;
}

export enum UI_Capture_Shown_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_TOOLBAR = 1,
  SOURCE_ACTION_POPOVER = 2,
  SOURCE_ACTION_CONTEXTUAL_MENU = 3,
  SOURCE_CALENDAR = 4,
  SOURCE_PREFERENCES_RESI = 5,
  SOURCE_MAIN_MENU = 6,
  UNRECOGNIZED = -1,
}

export function uI_Capture_Shown_SourceFromJSON(
  object: any,
): UI_Capture_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return UI_Capture_Shown_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_TOOLBAR':
      return UI_Capture_Shown_Source.SOURCE_TOOLBAR;
    case 2:
    case 'SOURCE_ACTION_POPOVER':
      return UI_Capture_Shown_Source.SOURCE_ACTION_POPOVER;
    case 3:
    case 'SOURCE_ACTION_CONTEXTUAL_MENU':
      return UI_Capture_Shown_Source.SOURCE_ACTION_CONTEXTUAL_MENU;
    case 4:
    case 'SOURCE_CALENDAR':
      return UI_Capture_Shown_Source.SOURCE_CALENDAR;
    case 5:
    case 'SOURCE_PREFERENCES_RESI':
      return UI_Capture_Shown_Source.SOURCE_PREFERENCES_RESI;
    case 6:
    case 'SOURCE_MAIN_MENU':
      return UI_Capture_Shown_Source.SOURCE_MAIN_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_Capture_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_Capture_Shown_SourceToJSON(
  object: UI_Capture_Shown_Source,
): string {
  switch (object) {
    case UI_Capture_Shown_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case UI_Capture_Shown_Source.SOURCE_TOOLBAR:
      return 'SOURCE_TOOLBAR';
    case UI_Capture_Shown_Source.SOURCE_ACTION_POPOVER:
      return 'SOURCE_ACTION_POPOVER';
    case UI_Capture_Shown_Source.SOURCE_ACTION_CONTEXTUAL_MENU:
      return 'SOURCE_ACTION_CONTEXTUAL_MENU';
    case UI_Capture_Shown_Source.SOURCE_CALENDAR:
      return 'SOURCE_CALENDAR';
    case UI_Capture_Shown_Source.SOURCE_PREFERENCES_RESI:
      return 'SOURCE_PREFERENCES_RESI';
    case UI_Capture_Shown_Source.SOURCE_MAIN_MENU:
      return 'SOURCE_MAIN_MENU';
    case UI_Capture_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_WelcomeToProPresenter {
  shown?: UI_WelcomeToProPresenter_Shown | undefined;
  migration?: UI_WelcomeToProPresenter_Migration | undefined;
  screenConfigurationHelp?:
    | UI_WelcomeToProPresenter_ScreenConfigurationHelp
    | undefined;
  downloadSampleContent?:
    | UI_WelcomeToProPresenter_DownloadSampleContent
    | undefined;
  userGroup?: UI_WelcomeToProPresenter_UserGroup | undefined;
  tutorials?: UI_WelcomeToProPresenter_Tutorials | undefined;
  knowledgeBase?: UI_WelcomeToProPresenter_KnowledgeBase | undefined;
  blog?: UI_WelcomeToProPresenter_Blog | undefined;
  instagram?: UI_WelcomeToProPresenter_Instagram | undefined;
  facebook?: UI_WelcomeToProPresenter_Facebook | undefined;
}

export interface UI_WelcomeToProPresenter_Shown {
  source: UI_WelcomeToProPresenter_Shown_Source;
}

export enum UI_WelcomeToProPresenter_Shown_Source {
  SOURCE_FIRST_LAUNCH = 0,
  SOURCE_APPLICATION_MENU = 1,
  UNRECOGNIZED = -1,
}

export function uI_WelcomeToProPresenter_Shown_SourceFromJSON(
  object: any,
): UI_WelcomeToProPresenter_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_FIRST_LAUNCH':
      return UI_WelcomeToProPresenter_Shown_Source.SOURCE_FIRST_LAUNCH;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return UI_WelcomeToProPresenter_Shown_Source.SOURCE_APPLICATION_MENU;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_WelcomeToProPresenter_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_WelcomeToProPresenter_Shown_SourceToJSON(
  object: UI_WelcomeToProPresenter_Shown_Source,
): string {
  switch (object) {
    case UI_WelcomeToProPresenter_Shown_Source.SOURCE_FIRST_LAUNCH:
      return 'SOURCE_FIRST_LAUNCH';
    case UI_WelcomeToProPresenter_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_WelcomeToProPresenter_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_WelcomeToProPresenter_Migration {}

export interface UI_WelcomeToProPresenter_ScreenConfigurationHelp {}

export interface UI_WelcomeToProPresenter_DownloadSampleContent {}

export interface UI_WelcomeToProPresenter_UserGroup {}

export interface UI_WelcomeToProPresenter_Tutorials {}

export interface UI_WelcomeToProPresenter_KnowledgeBase {}

export interface UI_WelcomeToProPresenter_Blog {}

export interface UI_WelcomeToProPresenter_Instagram {}

export interface UI_WelcomeToProPresenter_Facebook {}

export interface UI_TestPattern {
  shown?: UI_TestPattern_Shown | undefined;
}

export interface UI_TestPattern_Shown {
  source: UI_TestPattern_Shown_Source;
}

export enum UI_TestPattern_Shown_Source {
  SOURCE_APPLICATION_MENU = 0,
  SOURCE_SCREEN_CONFIGURATION = 1,
  UNRECOGNIZED = -1,
}

export function uI_TestPattern_Shown_SourceFromJSON(
  object: any,
): UI_TestPattern_Shown_Source {
  switch (object) {
    case 0:
    case 'SOURCE_APPLICATION_MENU':
      return UI_TestPattern_Shown_Source.SOURCE_APPLICATION_MENU;
    case 1:
    case 'SOURCE_SCREEN_CONFIGURATION':
      return UI_TestPattern_Shown_Source.SOURCE_SCREEN_CONFIGURATION;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return UI_TestPattern_Shown_Source.UNRECOGNIZED;
  }
}

export function uI_TestPattern_Shown_SourceToJSON(
  object: UI_TestPattern_Shown_Source,
): string {
  switch (object) {
    case UI_TestPattern_Shown_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case UI_TestPattern_Shown_Source.SOURCE_SCREEN_CONFIGURATION:
      return 'SOURCE_SCREEN_CONFIGURATION';
    case UI_TestPattern_Shown_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface UI_Preferences {
  customLogo?: UI_Preferences_CustomLogo | undefined;
}

export interface UI_Preferences_CustomLogo {
  hasLogo: boolean;
}

function createBaseUI(): UI {
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
    capture: undefined,
    welcomeToProPresenter: undefined,
    testPattern: undefined,
    preferences: undefined,
  };
}

export const UI = {
  encode(message: UI, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quickSearch !== undefined) {
      UI_QuickSearch.encode(
        message.quickSearch,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.toolbar !== undefined) {
      UI_Toolbar.encode(message.toolbar, writer.uint32(18).fork()).ldelim();
    }
    if (message.mainView !== undefined) {
      UI_MainView.encode(message.mainView, writer.uint32(26).fork()).ldelim();
    }
    if (message.looks !== undefined) {
      UI_Looks.encode(message.looks, writer.uint32(34).fork()).ldelim();
    }
    if (message.screenConfiguration !== undefined) {
      UI_ScreenConfiguration.encode(
        message.screenConfiguration,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.lowerRight !== undefined) {
      UI_LowerRight.encode(
        message.lowerRight,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.textInspector !== undefined) {
      UI_TextInspector.encode(
        message.textInspector,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.show !== undefined) {
      UI_Show.encode(message.show, writer.uint32(66).fork()).ldelim();
    }
    if (message.inAppStore !== undefined) {
      UI_InAppStore.encode(
        message.inAppStore,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.editor !== undefined) {
      UI_Editor.encode(message.editor, writer.uint32(82).fork()).ldelim();
    }
    if (message.whatsNew !== undefined) {
      UI_WhatsNew.encode(message.whatsNew, writer.uint32(90).fork()).ldelim();
    }
    if (message.clearGroups !== undefined) {
      UI_ClearGroups.encode(
        message.clearGroups,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.previewArea !== undefined) {
      UI_PreviewArea.encode(
        message.previewArea,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.placeholder !== undefined) {
      UI_Placeholder.encode(
        message.placeholder,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.planningCenterLive !== undefined) {
      UI_PlanningCenterLive.encode(
        message.planningCenterLive,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.networkGroup !== undefined) {
      UI_NetworkGroup.encode(
        message.networkGroup,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.ccli !== undefined) {
      UI_CCLI.encode(message.ccli, writer.uint32(138).fork()).ldelim();
    }
    if (message.capture !== undefined) {
      UI_Capture.encode(message.capture, writer.uint32(146).fork()).ldelim();
    }
    if (message.welcomeToProPresenter !== undefined) {
      UI_WelcomeToProPresenter.encode(
        message.welcomeToProPresenter,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.testPattern !== undefined) {
      UI_TestPattern.encode(
        message.testPattern,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.preferences !== undefined) {
      UI_Preferences.encode(
        message.preferences,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quickSearch = UI_QuickSearch.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toolbar = UI_Toolbar.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mainView = UI_MainView.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.looks = UI_Looks.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.screenConfiguration = UI_ScreenConfiguration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lowerRight = UI_LowerRight.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.textInspector = UI_TextInspector.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.show = UI_Show.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.inAppStore = UI_InAppStore.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.editor = UI_Editor.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.whatsNew = UI_WhatsNew.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.clearGroups = UI_ClearGroups.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.previewArea = UI_PreviewArea.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.placeholder = UI_Placeholder.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.planningCenterLive = UI_PlanningCenterLive.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.networkGroup = UI_NetworkGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.ccli = UI_CCLI.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.capture = UI_Capture.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.welcomeToProPresenter = UI_WelcomeToProPresenter.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.testPattern = UI_TestPattern.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.preferences = UI_Preferences.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI {
    return {
      quickSearch: isSet(object.quickSearch)
        ? UI_QuickSearch.fromJSON(object.quickSearch)
        : undefined,
      toolbar: isSet(object.toolbar)
        ? UI_Toolbar.fromJSON(object.toolbar)
        : undefined,
      mainView: isSet(object.mainView)
        ? UI_MainView.fromJSON(object.mainView)
        : undefined,
      looks: isSet(object.looks) ? UI_Looks.fromJSON(object.looks) : undefined,
      screenConfiguration: isSet(object.screenConfiguration)
        ? UI_ScreenConfiguration.fromJSON(object.screenConfiguration)
        : undefined,
      lowerRight: isSet(object.lowerRight)
        ? UI_LowerRight.fromJSON(object.lowerRight)
        : undefined,
      textInspector: isSet(object.textInspector)
        ? UI_TextInspector.fromJSON(object.textInspector)
        : undefined,
      show: isSet(object.show) ? UI_Show.fromJSON(object.show) : undefined,
      inAppStore: isSet(object.inAppStore)
        ? UI_InAppStore.fromJSON(object.inAppStore)
        : undefined,
      editor: isSet(object.editor)
        ? UI_Editor.fromJSON(object.editor)
        : undefined,
      whatsNew: isSet(object.whatsNew)
        ? UI_WhatsNew.fromJSON(object.whatsNew)
        : undefined,
      clearGroups: isSet(object.clearGroups)
        ? UI_ClearGroups.fromJSON(object.clearGroups)
        : undefined,
      previewArea: isSet(object.previewArea)
        ? UI_PreviewArea.fromJSON(object.previewArea)
        : undefined,
      placeholder: isSet(object.placeholder)
        ? UI_Placeholder.fromJSON(object.placeholder)
        : undefined,
      planningCenterLive: isSet(object.planningCenterLive)
        ? UI_PlanningCenterLive.fromJSON(object.planningCenterLive)
        : undefined,
      networkGroup: isSet(object.networkGroup)
        ? UI_NetworkGroup.fromJSON(object.networkGroup)
        : undefined,
      ccli: isSet(object.ccli) ? UI_CCLI.fromJSON(object.ccli) : undefined,
      capture: isSet(object.capture)
        ? UI_Capture.fromJSON(object.capture)
        : undefined,
      welcomeToProPresenter: isSet(object.welcomeToProPresenter)
        ? UI_WelcomeToProPresenter.fromJSON(object.welcomeToProPresenter)
        : undefined,
      testPattern: isSet(object.testPattern)
        ? UI_TestPattern.fromJSON(object.testPattern)
        : undefined,
      preferences: isSet(object.preferences)
        ? UI_Preferences.fromJSON(object.preferences)
        : undefined,
    };
  },

  toJSON(message: UI): unknown {
    const obj: any = {};
    if (message.quickSearch !== undefined) {
      obj.quickSearch = UI_QuickSearch.toJSON(message.quickSearch);
    }
    if (message.toolbar !== undefined) {
      obj.toolbar = UI_Toolbar.toJSON(message.toolbar);
    }
    if (message.mainView !== undefined) {
      obj.mainView = UI_MainView.toJSON(message.mainView);
    }
    if (message.looks !== undefined) {
      obj.looks = UI_Looks.toJSON(message.looks);
    }
    if (message.screenConfiguration !== undefined) {
      obj.screenConfiguration = UI_ScreenConfiguration.toJSON(
        message.screenConfiguration,
      );
    }
    if (message.lowerRight !== undefined) {
      obj.lowerRight = UI_LowerRight.toJSON(message.lowerRight);
    }
    if (message.textInspector !== undefined) {
      obj.textInspector = UI_TextInspector.toJSON(message.textInspector);
    }
    if (message.show !== undefined) {
      obj.show = UI_Show.toJSON(message.show);
    }
    if (message.inAppStore !== undefined) {
      obj.inAppStore = UI_InAppStore.toJSON(message.inAppStore);
    }
    if (message.editor !== undefined) {
      obj.editor = UI_Editor.toJSON(message.editor);
    }
    if (message.whatsNew !== undefined) {
      obj.whatsNew = UI_WhatsNew.toJSON(message.whatsNew);
    }
    if (message.clearGroups !== undefined) {
      obj.clearGroups = UI_ClearGroups.toJSON(message.clearGroups);
    }
    if (message.previewArea !== undefined) {
      obj.previewArea = UI_PreviewArea.toJSON(message.previewArea);
    }
    if (message.placeholder !== undefined) {
      obj.placeholder = UI_Placeholder.toJSON(message.placeholder);
    }
    if (message.planningCenterLive !== undefined) {
      obj.planningCenterLive = UI_PlanningCenterLive.toJSON(
        message.planningCenterLive,
      );
    }
    if (message.networkGroup !== undefined) {
      obj.networkGroup = UI_NetworkGroup.toJSON(message.networkGroup);
    }
    if (message.ccli !== undefined) {
      obj.ccli = UI_CCLI.toJSON(message.ccli);
    }
    if (message.capture !== undefined) {
      obj.capture = UI_Capture.toJSON(message.capture);
    }
    if (message.welcomeToProPresenter !== undefined) {
      obj.welcomeToProPresenter = UI_WelcomeToProPresenter.toJSON(
        message.welcomeToProPresenter,
      );
    }
    if (message.testPattern !== undefined) {
      obj.testPattern = UI_TestPattern.toJSON(message.testPattern);
    }
    if (message.preferences !== undefined) {
      obj.preferences = UI_Preferences.toJSON(message.preferences);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI>, I>>(base?: I): UI {
    return UI.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI>, I>>(object: I): UI {
    const message = createBaseUI();
    message.quickSearch =
      object.quickSearch !== undefined && object.quickSearch !== null
        ? UI_QuickSearch.fromPartial(object.quickSearch)
        : undefined;
    message.toolbar =
      object.toolbar !== undefined && object.toolbar !== null
        ? UI_Toolbar.fromPartial(object.toolbar)
        : undefined;
    message.mainView =
      object.mainView !== undefined && object.mainView !== null
        ? UI_MainView.fromPartial(object.mainView)
        : undefined;
    message.looks =
      object.looks !== undefined && object.looks !== null
        ? UI_Looks.fromPartial(object.looks)
        : undefined;
    message.screenConfiguration =
      object.screenConfiguration !== undefined &&
      object.screenConfiguration !== null
        ? UI_ScreenConfiguration.fromPartial(object.screenConfiguration)
        : undefined;
    message.lowerRight =
      object.lowerRight !== undefined && object.lowerRight !== null
        ? UI_LowerRight.fromPartial(object.lowerRight)
        : undefined;
    message.textInspector =
      object.textInspector !== undefined && object.textInspector !== null
        ? UI_TextInspector.fromPartial(object.textInspector)
        : undefined;
    message.show =
      object.show !== undefined && object.show !== null
        ? UI_Show.fromPartial(object.show)
        : undefined;
    message.inAppStore =
      object.inAppStore !== undefined && object.inAppStore !== null
        ? UI_InAppStore.fromPartial(object.inAppStore)
        : undefined;
    message.editor =
      object.editor !== undefined && object.editor !== null
        ? UI_Editor.fromPartial(object.editor)
        : undefined;
    message.whatsNew =
      object.whatsNew !== undefined && object.whatsNew !== null
        ? UI_WhatsNew.fromPartial(object.whatsNew)
        : undefined;
    message.clearGroups =
      object.clearGroups !== undefined && object.clearGroups !== null
        ? UI_ClearGroups.fromPartial(object.clearGroups)
        : undefined;
    message.previewArea =
      object.previewArea !== undefined && object.previewArea !== null
        ? UI_PreviewArea.fromPartial(object.previewArea)
        : undefined;
    message.placeholder =
      object.placeholder !== undefined && object.placeholder !== null
        ? UI_Placeholder.fromPartial(object.placeholder)
        : undefined;
    message.planningCenterLive =
      object.planningCenterLive !== undefined &&
      object.planningCenterLive !== null
        ? UI_PlanningCenterLive.fromPartial(object.planningCenterLive)
        : undefined;
    message.networkGroup =
      object.networkGroup !== undefined && object.networkGroup !== null
        ? UI_NetworkGroup.fromPartial(object.networkGroup)
        : undefined;
    message.ccli =
      object.ccli !== undefined && object.ccli !== null
        ? UI_CCLI.fromPartial(object.ccli)
        : undefined;
    message.capture =
      object.capture !== undefined && object.capture !== null
        ? UI_Capture.fromPartial(object.capture)
        : undefined;
    message.welcomeToProPresenter =
      object.welcomeToProPresenter !== undefined &&
      object.welcomeToProPresenter !== null
        ? UI_WelcomeToProPresenter.fromPartial(object.welcomeToProPresenter)
        : undefined;
    message.testPattern =
      object.testPattern !== undefined && object.testPattern !== null
        ? UI_TestPattern.fromPartial(object.testPattern)
        : undefined;
    message.preferences =
      object.preferences !== undefined && object.preferences !== null
        ? UI_Preferences.fromPartial(object.preferences)
        : undefined;
    return message;
  },
};

function createBaseUI_QuickSearch(): UI_QuickSearch {
  return { shown: undefined, search: undefined, openItems: undefined };
}

export const UI_QuickSearch = {
  encode(
    message: UI_QuickSearch,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_QuickSearch_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.search !== undefined) {
      UI_QuickSearch_Search.encode(
        message.search,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.openItems !== undefined) {
      UI_QuickSearch_OpenItems.encode(
        message.openItems,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_QuickSearch {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_QuickSearch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_QuickSearch_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.search = UI_QuickSearch_Search.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.openItems = UI_QuickSearch_OpenItems.decode(
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

  fromJSON(object: any): UI_QuickSearch {
    return {
      shown: isSet(object.shown)
        ? UI_QuickSearch_Shown.fromJSON(object.shown)
        : undefined,
      search: isSet(object.search)
        ? UI_QuickSearch_Search.fromJSON(object.search)
        : undefined,
      openItems: isSet(object.openItems)
        ? UI_QuickSearch_OpenItems.fromJSON(object.openItems)
        : undefined,
    };
  },

  toJSON(message: UI_QuickSearch): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_QuickSearch_Shown.toJSON(message.shown);
    }
    if (message.search !== undefined) {
      obj.search = UI_QuickSearch_Search.toJSON(message.search);
    }
    if (message.openItems !== undefined) {
      obj.openItems = UI_QuickSearch_OpenItems.toJSON(message.openItems);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_QuickSearch>, I>>(
    base?: I,
  ): UI_QuickSearch {
    return UI_QuickSearch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_QuickSearch>, I>>(
    object: I,
  ): UI_QuickSearch {
    const message = createBaseUI_QuickSearch();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_QuickSearch_Shown.fromPartial(object.shown)
        : undefined;
    message.search =
      object.search !== undefined && object.search !== null
        ? UI_QuickSearch_Search.fromPartial(object.search)
        : undefined;
    message.openItems =
      object.openItems !== undefined && object.openItems !== null
        ? UI_QuickSearch_OpenItems.fromPartial(object.openItems)
        : undefined;
    return message;
  },
};

function createBaseUI_QuickSearch_Shown(): UI_QuickSearch_Shown {
  return { source: 0 };
}

export const UI_QuickSearch_Shown = {
  encode(
    message: UI_QuickSearch_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_QuickSearch_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_QuickSearch_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_QuickSearch_Shown {
    return {
      source: isSet(object.source)
        ? uI_QuickSearch_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_QuickSearch_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_QuickSearch_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_QuickSearch_Shown>, I>>(
    base?: I,
  ): UI_QuickSearch_Shown {
    return UI_QuickSearch_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_QuickSearch_Shown>, I>>(
    object: I,
  ): UI_QuickSearch_Shown {
    const message = createBaseUI_QuickSearch_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_QuickSearch_Search(): UI_QuickSearch_Search {
  return { source: 0 };
}

export const UI_QuickSearch_Search = {
  encode(
    message: UI_QuickSearch_Search,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_QuickSearch_Search {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_QuickSearch_Search();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_QuickSearch_Search {
    return {
      source: isSet(object.source)
        ? uI_QuickSearch_Search_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_QuickSearch_Search): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_QuickSearch_Search_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_QuickSearch_Search>, I>>(
    base?: I,
  ): UI_QuickSearch_Search {
    return UI_QuickSearch_Search.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_QuickSearch_Search>, I>>(
    object: I,
  ): UI_QuickSearch_Search {
    const message = createBaseUI_QuickSearch_Search();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_QuickSearch_OpenItems(): UI_QuickSearch_OpenItems {
  return { source: 0, style: 0, count: 0 };
}

export const UI_QuickSearch_OpenItems = {
  encode(
    message: UI_QuickSearch_OpenItems,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_QuickSearch_OpenItems {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_QuickSearch_OpenItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.style = reader.int32() as any;
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

  fromJSON(object: any): UI_QuickSearch_OpenItems {
    return {
      source: isSet(object.source)
        ? uI_QuickSearch_OpenItems_SourceFromJSON(object.source)
        : 0,
      style: isSet(object.style)
        ? uI_QuickSearch_OpenItems_StyleFromJSON(object.style)
        : 0,
      count: isSet(object.count) ? globalThis.Number(object.count) : 0,
    };
  },

  toJSON(message: UI_QuickSearch_OpenItems): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_QuickSearch_OpenItems_SourceToJSON(message.source);
    }
    if (message.style !== 0) {
      obj.style = uI_QuickSearch_OpenItems_StyleToJSON(message.style);
    }
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_QuickSearch_OpenItems>, I>>(
    base?: I,
  ): UI_QuickSearch_OpenItems {
    return UI_QuickSearch_OpenItems.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_QuickSearch_OpenItems>, I>>(
    object: I,
  ): UI_QuickSearch_OpenItems {
    const message = createBaseUI_QuickSearch_OpenItems();
    message.source = object.source ?? 0;
    message.style = object.style ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseUI_Toolbar(): UI_Toolbar {
  return { textStyle: undefined, theme: undefined };
}

export const UI_Toolbar = {
  encode(
    message: UI_Toolbar,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.textStyle !== undefined) {
      UI_Toolbar_TextStyle.encode(
        message.textStyle,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.theme !== undefined) {
      UI_Toolbar_Theme.encode(message.theme, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Toolbar {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.textStyle = UI_Toolbar_TextStyle.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.theme = UI_Toolbar_Theme.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Toolbar {
    return {
      textStyle: isSet(object.textStyle)
        ? UI_Toolbar_TextStyle.fromJSON(object.textStyle)
        : undefined,
      theme: isSet(object.theme)
        ? UI_Toolbar_Theme.fromJSON(object.theme)
        : undefined,
    };
  },

  toJSON(message: UI_Toolbar): unknown {
    const obj: any = {};
    if (message.textStyle !== undefined) {
      obj.textStyle = UI_Toolbar_TextStyle.toJSON(message.textStyle);
    }
    if (message.theme !== undefined) {
      obj.theme = UI_Toolbar_Theme.toJSON(message.theme);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar>, I>>(base?: I): UI_Toolbar {
    return UI_Toolbar.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar>, I>>(
    object: I,
  ): UI_Toolbar {
    const message = createBaseUI_Toolbar();
    message.textStyle =
      object.textStyle !== undefined && object.textStyle !== null
        ? UI_Toolbar_TextStyle.fromPartial(object.textStyle)
        : undefined;
    message.theme =
      object.theme !== undefined && object.theme !== null
        ? UI_Toolbar_Theme.fromPartial(object.theme)
        : undefined;
    return message;
  },
};

function createBaseUI_Toolbar_TextStyle(): UI_Toolbar_TextStyle {
  return { shown: undefined, change: undefined };
}

export const UI_Toolbar_TextStyle = {
  encode(
    message: UI_Toolbar_TextStyle,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Toolbar_TextStyle_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.change !== undefined) {
      UI_Toolbar_TextStyle_Change.encode(
        message.change,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Toolbar_TextStyle {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_TextStyle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Toolbar_TextStyle_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.change = UI_Toolbar_TextStyle_Change.decode(
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

  fromJSON(object: any): UI_Toolbar_TextStyle {
    return {
      shown: isSet(object.shown)
        ? UI_Toolbar_TextStyle_Shown.fromJSON(object.shown)
        : undefined,
      change: isSet(object.change)
        ? UI_Toolbar_TextStyle_Change.fromJSON(object.change)
        : undefined,
    };
  },

  toJSON(message: UI_Toolbar_TextStyle): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Toolbar_TextStyle_Shown.toJSON(message.shown);
    }
    if (message.change !== undefined) {
      obj.change = UI_Toolbar_TextStyle_Change.toJSON(message.change);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_TextStyle>, I>>(
    base?: I,
  ): UI_Toolbar_TextStyle {
    return UI_Toolbar_TextStyle.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_TextStyle>, I>>(
    object: I,
  ): UI_Toolbar_TextStyle {
    const message = createBaseUI_Toolbar_TextStyle();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Toolbar_TextStyle_Shown.fromPartial(object.shown)
        : undefined;
    message.change =
      object.change !== undefined && object.change !== null
        ? UI_Toolbar_TextStyle_Change.fromPartial(object.change)
        : undefined;
    return message;
  },
};

function createBaseUI_Toolbar_TextStyle_Shown(): UI_Toolbar_TextStyle_Shown {
  return {};
}

export const UI_Toolbar_TextStyle_Shown = {
  encode(
    _: UI_Toolbar_TextStyle_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Toolbar_TextStyle_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_TextStyle_Shown();
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

  fromJSON(_: any): UI_Toolbar_TextStyle_Shown {
    return {};
  },

  toJSON(_: UI_Toolbar_TextStyle_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_TextStyle_Shown>, I>>(
    base?: I,
  ): UI_Toolbar_TextStyle_Shown {
    return UI_Toolbar_TextStyle_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_TextStyle_Shown>, I>>(
    _: I,
  ): UI_Toolbar_TextStyle_Shown {
    const message = createBaseUI_Toolbar_TextStyle_Shown();
    return message;
  },
};

function createBaseUI_Toolbar_TextStyle_Change(): UI_Toolbar_TextStyle_Change {
  return { property: 0, target: 0 };
}

export const UI_Toolbar_TextStyle_Change = {
  encode(
    message: UI_Toolbar_TextStyle_Change,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.target !== 0) {
      writer.uint32(16).int32(message.target);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Toolbar_TextStyle_Change {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_TextStyle_Change();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.property = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.target = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Toolbar_TextStyle_Change {
    return {
      property: isSet(object.property)
        ? uI_Toolbar_TextStyle_Change_PropertyFromJSON(object.property)
        : 0,
      target: isSet(object.target)
        ? uI_Toolbar_TextStyle_Change_TargetFromJSON(object.target)
        : 0,
    };
  },

  toJSON(message: UI_Toolbar_TextStyle_Change): unknown {
    const obj: any = {};
    if (message.property !== 0) {
      obj.property = uI_Toolbar_TextStyle_Change_PropertyToJSON(
        message.property,
      );
    }
    if (message.target !== 0) {
      obj.target = uI_Toolbar_TextStyle_Change_TargetToJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_TextStyle_Change>, I>>(
    base?: I,
  ): UI_Toolbar_TextStyle_Change {
    return UI_Toolbar_TextStyle_Change.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_TextStyle_Change>, I>>(
    object: I,
  ): UI_Toolbar_TextStyle_Change {
    const message = createBaseUI_Toolbar_TextStyle_Change();
    message.property = object.property ?? 0;
    message.target = object.target ?? 0;
    return message;
  },
};

function createBaseUI_Toolbar_Theme(): UI_Toolbar_Theme {
  return { shown: undefined, applied: undefined };
}

export const UI_Toolbar_Theme = {
  encode(
    message: UI_Toolbar_Theme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Toolbar_Theme_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.applied !== undefined) {
      UI_Toolbar_Theme_Applied.encode(
        message.applied,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Toolbar_Theme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_Theme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Toolbar_Theme_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.applied = UI_Toolbar_Theme_Applied.decode(
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

  fromJSON(object: any): UI_Toolbar_Theme {
    return {
      shown: isSet(object.shown)
        ? UI_Toolbar_Theme_Shown.fromJSON(object.shown)
        : undefined,
      applied: isSet(object.applied)
        ? UI_Toolbar_Theme_Applied.fromJSON(object.applied)
        : undefined,
    };
  },

  toJSON(message: UI_Toolbar_Theme): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Toolbar_Theme_Shown.toJSON(message.shown);
    }
    if (message.applied !== undefined) {
      obj.applied = UI_Toolbar_Theme_Applied.toJSON(message.applied);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_Theme>, I>>(
    base?: I,
  ): UI_Toolbar_Theme {
    return UI_Toolbar_Theme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_Theme>, I>>(
    object: I,
  ): UI_Toolbar_Theme {
    const message = createBaseUI_Toolbar_Theme();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Toolbar_Theme_Shown.fromPartial(object.shown)
        : undefined;
    message.applied =
      object.applied !== undefined && object.applied !== null
        ? UI_Toolbar_Theme_Applied.fromPartial(object.applied)
        : undefined;
    return message;
  },
};

function createBaseUI_Toolbar_Theme_Shown(): UI_Toolbar_Theme_Shown {
  return {};
}

export const UI_Toolbar_Theme_Shown = {
  encode(
    _: UI_Toolbar_Theme_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Toolbar_Theme_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_Theme_Shown();
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

  fromJSON(_: any): UI_Toolbar_Theme_Shown {
    return {};
  },

  toJSON(_: UI_Toolbar_Theme_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_Theme_Shown>, I>>(
    base?: I,
  ): UI_Toolbar_Theme_Shown {
    return UI_Toolbar_Theme_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_Theme_Shown>, I>>(
    _: I,
  ): UI_Toolbar_Theme_Shown {
    const message = createBaseUI_Toolbar_Theme_Shown();
    return message;
  },
};

function createBaseUI_Toolbar_Theme_Applied(): UI_Toolbar_Theme_Applied {
  return { target: 0 };
}

export const UI_Toolbar_Theme_Applied = {
  encode(
    message: UI_Toolbar_Theme_Applied,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.target !== 0) {
      writer.uint32(8).int32(message.target);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Toolbar_Theme_Applied {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Toolbar_Theme_Applied();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.target = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Toolbar_Theme_Applied {
    return {
      target: isSet(object.target)
        ? uI_Toolbar_Theme_Applied_TargetFromJSON(object.target)
        : 0,
    };
  },

  toJSON(message: UI_Toolbar_Theme_Applied): unknown {
    const obj: any = {};
    if (message.target !== 0) {
      obj.target = uI_Toolbar_Theme_Applied_TargetToJSON(message.target);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Toolbar_Theme_Applied>, I>>(
    base?: I,
  ): UI_Toolbar_Theme_Applied {
    return UI_Toolbar_Theme_Applied.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Toolbar_Theme_Applied>, I>>(
    object: I,
  ): UI_Toolbar_Theme_Applied {
    const message = createBaseUI_Toolbar_Theme_Applied();
    message.target = object.target ?? 0;
    return message;
  },
};

function createBaseUI_MainView(): UI_MainView {
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

export const UI_MainView = {
  encode(
    message: UI_MainView,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.show !== undefined) {
      UI_MainView_Show.encode(message.show, writer.uint32(10).fork()).ldelim();
    }
    if (message.presentationEditor !== undefined) {
      UI_MainView_PresentationEditor.encode(
        message.presentationEditor,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.reflowEditor !== undefined) {
      UI_MainView_ReflowEditor.encode(
        message.reflowEditor,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.bible !== undefined) {
      UI_MainView_Bible.encode(
        message.bible,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.stageEditor !== undefined) {
      UI_MainView_StageEditor.encode(
        message.stageEditor,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.themeEditor !== undefined) {
      UI_MainView_ThemeEditor.encode(
        message.themeEditor,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.copyrightEditor !== undefined) {
      UI_MainView_CopyrightEditor.encode(
        message.copyrightEditor,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.propsEditor !== undefined) {
      UI_MainView_PropsEditor.encode(
        message.propsEditor,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.maskEditor !== undefined) {
      UI_MainView_MaskEditor.encode(
        message.maskEditor,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_MainView {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.show = UI_MainView_Show.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presentationEditor = UI_MainView_PresentationEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reflowEditor = UI_MainView_ReflowEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bible = UI_MainView_Bible.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.stageEditor = UI_MainView_StageEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.themeEditor = UI_MainView_ThemeEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.copyrightEditor = UI_MainView_CopyrightEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.propsEditor = UI_MainView_PropsEditor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maskEditor = UI_MainView_MaskEditor.decode(
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

  fromJSON(object: any): UI_MainView {
    return {
      show: isSet(object.show)
        ? UI_MainView_Show.fromJSON(object.show)
        : undefined,
      presentationEditor: isSet(object.presentationEditor)
        ? UI_MainView_PresentationEditor.fromJSON(object.presentationEditor)
        : undefined,
      reflowEditor: isSet(object.reflowEditor)
        ? UI_MainView_ReflowEditor.fromJSON(object.reflowEditor)
        : undefined,
      bible: isSet(object.bible)
        ? UI_MainView_Bible.fromJSON(object.bible)
        : undefined,
      stageEditor: isSet(object.stageEditor)
        ? UI_MainView_StageEditor.fromJSON(object.stageEditor)
        : undefined,
      themeEditor: isSet(object.themeEditor)
        ? UI_MainView_ThemeEditor.fromJSON(object.themeEditor)
        : undefined,
      copyrightEditor: isSet(object.copyrightEditor)
        ? UI_MainView_CopyrightEditor.fromJSON(object.copyrightEditor)
        : undefined,
      propsEditor: isSet(object.propsEditor)
        ? UI_MainView_PropsEditor.fromJSON(object.propsEditor)
        : undefined,
      maskEditor: isSet(object.maskEditor)
        ? UI_MainView_MaskEditor.fromJSON(object.maskEditor)
        : undefined,
    };
  },

  toJSON(message: UI_MainView): unknown {
    const obj: any = {};
    if (message.show !== undefined) {
      obj.show = UI_MainView_Show.toJSON(message.show);
    }
    if (message.presentationEditor !== undefined) {
      obj.presentationEditor = UI_MainView_PresentationEditor.toJSON(
        message.presentationEditor,
      );
    }
    if (message.reflowEditor !== undefined) {
      obj.reflowEditor = UI_MainView_ReflowEditor.toJSON(message.reflowEditor);
    }
    if (message.bible !== undefined) {
      obj.bible = UI_MainView_Bible.toJSON(message.bible);
    }
    if (message.stageEditor !== undefined) {
      obj.stageEditor = UI_MainView_StageEditor.toJSON(message.stageEditor);
    }
    if (message.themeEditor !== undefined) {
      obj.themeEditor = UI_MainView_ThemeEditor.toJSON(message.themeEditor);
    }
    if (message.copyrightEditor !== undefined) {
      obj.copyrightEditor = UI_MainView_CopyrightEditor.toJSON(
        message.copyrightEditor,
      );
    }
    if (message.propsEditor !== undefined) {
      obj.propsEditor = UI_MainView_PropsEditor.toJSON(message.propsEditor);
    }
    if (message.maskEditor !== undefined) {
      obj.maskEditor = UI_MainView_MaskEditor.toJSON(message.maskEditor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView>, I>>(base?: I): UI_MainView {
    return UI_MainView.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView>, I>>(
    object: I,
  ): UI_MainView {
    const message = createBaseUI_MainView();
    message.show =
      object.show !== undefined && object.show !== null
        ? UI_MainView_Show.fromPartial(object.show)
        : undefined;
    message.presentationEditor =
      object.presentationEditor !== undefined &&
      object.presentationEditor !== null
        ? UI_MainView_PresentationEditor.fromPartial(object.presentationEditor)
        : undefined;
    message.reflowEditor =
      object.reflowEditor !== undefined && object.reflowEditor !== null
        ? UI_MainView_ReflowEditor.fromPartial(object.reflowEditor)
        : undefined;
    message.bible =
      object.bible !== undefined && object.bible !== null
        ? UI_MainView_Bible.fromPartial(object.bible)
        : undefined;
    message.stageEditor =
      object.stageEditor !== undefined && object.stageEditor !== null
        ? UI_MainView_StageEditor.fromPartial(object.stageEditor)
        : undefined;
    message.themeEditor =
      object.themeEditor !== undefined && object.themeEditor !== null
        ? UI_MainView_ThemeEditor.fromPartial(object.themeEditor)
        : undefined;
    message.copyrightEditor =
      object.copyrightEditor !== undefined && object.copyrightEditor !== null
        ? UI_MainView_CopyrightEditor.fromPartial(object.copyrightEditor)
        : undefined;
    message.propsEditor =
      object.propsEditor !== undefined && object.propsEditor !== null
        ? UI_MainView_PropsEditor.fromPartial(object.propsEditor)
        : undefined;
    message.maskEditor =
      object.maskEditor !== undefined && object.maskEditor !== null
        ? UI_MainView_MaskEditor.fromPartial(object.maskEditor)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_Show(): UI_MainView_Show {
  return { shown: undefined };
}

export const UI_MainView_Show = {
  encode(
    message: UI_MainView_Show,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_Show_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_MainView_Show {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Show();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_Show_Shown.decode(
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

  fromJSON(object: any): UI_MainView_Show {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_Show_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_Show): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_Show_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Show>, I>>(
    base?: I,
  ): UI_MainView_Show {
    return UI_MainView_Show.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Show>, I>>(
    object: I,
  ): UI_MainView_Show {
    const message = createBaseUI_MainView_Show();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_Show_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_Show_Shown(): UI_MainView_Show_Shown {
  return { source: 0 };
}

export const UI_MainView_Show_Shown = {
  encode(
    message: UI_MainView_Show_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Show_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Show_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_Show_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_Show_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Show_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_Show_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Show_Shown>, I>>(
    base?: I,
  ): UI_MainView_Show_Shown {
    return UI_MainView_Show_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Show_Shown>, I>>(
    object: I,
  ): UI_MainView_Show_Shown {
    const message = createBaseUI_MainView_Show_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_PresentationEditor(): UI_MainView_PresentationEditor {
  return { shown: undefined };
}

export const UI_MainView_PresentationEditor = {
  encode(
    message: UI_MainView_PresentationEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_PresentationEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_PresentationEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_PresentationEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_PresentationEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_PresentationEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_PresentationEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_PresentationEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_PresentationEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_PresentationEditor>, I>>(
    base?: I,
  ): UI_MainView_PresentationEditor {
    return UI_MainView_PresentationEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_PresentationEditor>, I>>(
    object: I,
  ): UI_MainView_PresentationEditor {
    const message = createBaseUI_MainView_PresentationEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_PresentationEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_PresentationEditor_Shown(): UI_MainView_PresentationEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_PresentationEditor_Shown = {
  encode(
    message: UI_MainView_PresentationEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_PresentationEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_PresentationEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_PresentationEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_PresentationEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_PresentationEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_PresentationEditor_Shown_SourceToJSON(
        message.source,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_PresentationEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_PresentationEditor_Shown {
    return UI_MainView_PresentationEditor_Shown.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_MainView_PresentationEditor_Shown>, I>,
  >(object: I): UI_MainView_PresentationEditor_Shown {
    const message = createBaseUI_MainView_PresentationEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_ReflowEditor(): UI_MainView_ReflowEditor {
  return { shown: undefined };
}

export const UI_MainView_ReflowEditor = {
  encode(
    message: UI_MainView_ReflowEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_ReflowEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_ReflowEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_ReflowEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_ReflowEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_ReflowEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_ReflowEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_ReflowEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_ReflowEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_ReflowEditor>, I>>(
    base?: I,
  ): UI_MainView_ReflowEditor {
    return UI_MainView_ReflowEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_ReflowEditor>, I>>(
    object: I,
  ): UI_MainView_ReflowEditor {
    const message = createBaseUI_MainView_ReflowEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_ReflowEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_ReflowEditor_Shown(): UI_MainView_ReflowEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_ReflowEditor_Shown = {
  encode(
    message: UI_MainView_ReflowEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_ReflowEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_ReflowEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_ReflowEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_ReflowEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_ReflowEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_ReflowEditor_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_ReflowEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_ReflowEditor_Shown {
    return UI_MainView_ReflowEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_ReflowEditor_Shown>, I>>(
    object: I,
  ): UI_MainView_ReflowEditor_Shown {
    const message = createBaseUI_MainView_ReflowEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible(): UI_MainView_Bible {
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

export const UI_MainView_Bible = {
  encode(
    message: UI_MainView_Bible,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_Bible_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      UI_MainView_Bible_Trigger.encode(
        message.trigger,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.generateSlides !== undefined) {
      UI_MainView_Bible_GenerateSlides.encode(
        message.generateSlides,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.generateNext !== undefined) {
      UI_MainView_Bible_GenerateNext.encode(
        message.generateNext,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.generatePrevious !== undefined) {
      UI_MainView_Bible_GeneratePrevious.encode(
        message.generatePrevious,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.saveSlides !== undefined) {
      UI_MainView_Bible_SaveSlides.encode(
        message.saveSlides,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.lookup !== undefined) {
      UI_MainView_Bible_Lookup.encode(
        message.lookup,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.install !== undefined) {
      UI_MainView_Bible_BibleCount.encode(
        message.install,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.remove !== undefined) {
      UI_MainView_Bible_BibleCount.encode(
        message.remove,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.startup !== undefined) {
      UI_MainView_Bible_BibleCount.encode(
        message.startup,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_MainView_Bible {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_Bible_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trigger = UI_MainView_Bible_Trigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.generateSlides = UI_MainView_Bible_GenerateSlides.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.generateNext = UI_MainView_Bible_GenerateNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.generatePrevious = UI_MainView_Bible_GeneratePrevious.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.saveSlides = UI_MainView_Bible_SaveSlides.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lookup = UI_MainView_Bible_Lookup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.install = UI_MainView_Bible_BibleCount.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.remove = UI_MainView_Bible_BibleCount.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.startup = UI_MainView_Bible_BibleCount.decode(
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

  fromJSON(object: any): UI_MainView_Bible {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_Bible_Shown.fromJSON(object.shown)
        : undefined,
      trigger: isSet(object.trigger)
        ? UI_MainView_Bible_Trigger.fromJSON(object.trigger)
        : undefined,
      generateSlides: isSet(object.generateSlides)
        ? UI_MainView_Bible_GenerateSlides.fromJSON(object.generateSlides)
        : undefined,
      generateNext: isSet(object.generateNext)
        ? UI_MainView_Bible_GenerateNext.fromJSON(object.generateNext)
        : undefined,
      generatePrevious: isSet(object.generatePrevious)
        ? UI_MainView_Bible_GeneratePrevious.fromJSON(object.generatePrevious)
        : undefined,
      saveSlides: isSet(object.saveSlides)
        ? UI_MainView_Bible_SaveSlides.fromJSON(object.saveSlides)
        : undefined,
      lookup: isSet(object.lookup)
        ? UI_MainView_Bible_Lookup.fromJSON(object.lookup)
        : undefined,
      install: isSet(object.install)
        ? UI_MainView_Bible_BibleCount.fromJSON(object.install)
        : undefined,
      remove: isSet(object.remove)
        ? UI_MainView_Bible_BibleCount.fromJSON(object.remove)
        : undefined,
      startup: isSet(object.startup)
        ? UI_MainView_Bible_BibleCount.fromJSON(object.startup)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_Bible): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_Bible_Shown.toJSON(message.shown);
    }
    if (message.trigger !== undefined) {
      obj.trigger = UI_MainView_Bible_Trigger.toJSON(message.trigger);
    }
    if (message.generateSlides !== undefined) {
      obj.generateSlides = UI_MainView_Bible_GenerateSlides.toJSON(
        message.generateSlides,
      );
    }
    if (message.generateNext !== undefined) {
      obj.generateNext = UI_MainView_Bible_GenerateNext.toJSON(
        message.generateNext,
      );
    }
    if (message.generatePrevious !== undefined) {
      obj.generatePrevious = UI_MainView_Bible_GeneratePrevious.toJSON(
        message.generatePrevious,
      );
    }
    if (message.saveSlides !== undefined) {
      obj.saveSlides = UI_MainView_Bible_SaveSlides.toJSON(message.saveSlides);
    }
    if (message.lookup !== undefined) {
      obj.lookup = UI_MainView_Bible_Lookup.toJSON(message.lookup);
    }
    if (message.install !== undefined) {
      obj.install = UI_MainView_Bible_BibleCount.toJSON(message.install);
    }
    if (message.remove !== undefined) {
      obj.remove = UI_MainView_Bible_BibleCount.toJSON(message.remove);
    }
    if (message.startup !== undefined) {
      obj.startup = UI_MainView_Bible_BibleCount.toJSON(message.startup);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible>, I>>(
    base?: I,
  ): UI_MainView_Bible {
    return UI_MainView_Bible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible>, I>>(
    object: I,
  ): UI_MainView_Bible {
    const message = createBaseUI_MainView_Bible();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_Bible_Shown.fromPartial(object.shown)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? UI_MainView_Bible_Trigger.fromPartial(object.trigger)
        : undefined;
    message.generateSlides =
      object.generateSlides !== undefined && object.generateSlides !== null
        ? UI_MainView_Bible_GenerateSlides.fromPartial(object.generateSlides)
        : undefined;
    message.generateNext =
      object.generateNext !== undefined && object.generateNext !== null
        ? UI_MainView_Bible_GenerateNext.fromPartial(object.generateNext)
        : undefined;
    message.generatePrevious =
      object.generatePrevious !== undefined && object.generatePrevious !== null
        ? UI_MainView_Bible_GeneratePrevious.fromPartial(
            object.generatePrevious,
          )
        : undefined;
    message.saveSlides =
      object.saveSlides !== undefined && object.saveSlides !== null
        ? UI_MainView_Bible_SaveSlides.fromPartial(object.saveSlides)
        : undefined;
    message.lookup =
      object.lookup !== undefined && object.lookup !== null
        ? UI_MainView_Bible_Lookup.fromPartial(object.lookup)
        : undefined;
    message.install =
      object.install !== undefined && object.install !== null
        ? UI_MainView_Bible_BibleCount.fromPartial(object.install)
        : undefined;
    message.remove =
      object.remove !== undefined && object.remove !== null
        ? UI_MainView_Bible_BibleCount.fromPartial(object.remove)
        : undefined;
    message.startup =
      object.startup !== undefined && object.startup !== null
        ? UI_MainView_Bible_BibleCount.fromPartial(object.startup)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_Bible_Shown(): UI_MainView_Bible_Shown {
  return { source: 0 };
}

export const UI_MainView_Bible_Shown = {
  encode(
    message: UI_MainView_Bible_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Bible_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_Bible_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_Bible_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_Bible_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_Shown>, I>>(
    base?: I,
  ): UI_MainView_Bible_Shown {
    return UI_MainView_Bible_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_Shown>, I>>(
    object: I,
  ): UI_MainView_Bible_Shown {
    const message = createBaseUI_MainView_Bible_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_Trigger(): UI_MainView_Bible_Trigger {
  return { location: 0 };
}

export const UI_MainView_Bible_Trigger = {
  encode(
    message: UI_MainView_Bible_Trigger,
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
  ): UI_MainView_Bible_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_Trigger();
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

  fromJSON(object: any): UI_MainView_Bible_Trigger {
    return {
      location: isSet(object.location)
        ? uI_MainView_Bible_LocationFromJSON(object.location)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_Trigger): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = uI_MainView_Bible_LocationToJSON(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_Trigger>, I>>(
    base?: I,
  ): UI_MainView_Bible_Trigger {
    return UI_MainView_Bible_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_Trigger>, I>>(
    object: I,
  ): UI_MainView_Bible_Trigger {
    const message = createBaseUI_MainView_Bible_Trigger();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_GenerateSlides(): UI_MainView_Bible_GenerateSlides {
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

export const UI_MainView_Bible_GenerateSlides = {
  encode(
    message: UI_MainView_Bible_GenerateSlides,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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
    if (message.showVerseNumbers !== false) {
      writer.uint32(40).bool(message.showVerseNumbers);
    }
    if (message.breakNewVerse !== false) {
      writer.uint32(48).bool(message.breakNewVerse);
    }
    if (message.displayTranslation !== false) {
      writer.uint32(56).bool(message.displayTranslation);
    }
    if (message.preserveFontColor !== false) {
      writer.uint32(64).bool(message.preserveFontColor);
    }
    if (message.referenceStyle !== 0) {
      writer.uint32(72).int32(message.referenceStyle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Bible_GenerateSlides {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_GenerateSlides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.translationCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.slideCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.verseLocation = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.referenceLocation = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.showVerseNumbers = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.breakNewVerse = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.displayTranslation = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.preserveFontColor = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.referenceStyle = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_Bible_GenerateSlides {
    return {
      translationCount: isSet(object.translationCount)
        ? globalThis.Number(object.translationCount)
        : 0,
      slideCount: isSet(object.slideCount)
        ? globalThis.Number(object.slideCount)
        : 0,
      verseLocation: isSet(object.verseLocation)
        ? uI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(
            object.verseLocation,
          )
        : 0,
      referenceLocation: isSet(object.referenceLocation)
        ? uI_MainView_Bible_GenerateSlides_TextBoxLocationFromJSON(
            object.referenceLocation,
          )
        : 0,
      showVerseNumbers: isSet(object.showVerseNumbers)
        ? globalThis.Boolean(object.showVerseNumbers)
        : false,
      breakNewVerse: isSet(object.breakNewVerse)
        ? globalThis.Boolean(object.breakNewVerse)
        : false,
      displayTranslation: isSet(object.displayTranslation)
        ? globalThis.Boolean(object.displayTranslation)
        : false,
      preserveFontColor: isSet(object.preserveFontColor)
        ? globalThis.Boolean(object.preserveFontColor)
        : false,
      referenceStyle: isSet(object.referenceStyle)
        ? uI_MainView_Bible_GenerateSlides_ReferenceTypeFromJSON(
            object.referenceStyle,
          )
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_GenerateSlides): unknown {
    const obj: any = {};
    if (message.translationCount !== 0) {
      obj.translationCount = Math.round(message.translationCount);
    }
    if (message.slideCount !== 0) {
      obj.slideCount = Math.round(message.slideCount);
    }
    if (message.verseLocation !== 0) {
      obj.verseLocation =
        uI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(
          message.verseLocation,
        );
    }
    if (message.referenceLocation !== 0) {
      obj.referenceLocation =
        uI_MainView_Bible_GenerateSlides_TextBoxLocationToJSON(
          message.referenceLocation,
        );
    }
    if (message.showVerseNumbers !== false) {
      obj.showVerseNumbers = message.showVerseNumbers;
    }
    if (message.breakNewVerse !== false) {
      obj.breakNewVerse = message.breakNewVerse;
    }
    if (message.displayTranslation !== false) {
      obj.displayTranslation = message.displayTranslation;
    }
    if (message.preserveFontColor !== false) {
      obj.preserveFontColor = message.preserveFontColor;
    }
    if (message.referenceStyle !== 0) {
      obj.referenceStyle = uI_MainView_Bible_GenerateSlides_ReferenceTypeToJSON(
        message.referenceStyle,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_GenerateSlides>, I>>(
    base?: I,
  ): UI_MainView_Bible_GenerateSlides {
    return UI_MainView_Bible_GenerateSlides.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_MainView_Bible_GenerateSlides>, I>,
  >(object: I): UI_MainView_Bible_GenerateSlides {
    const message = createBaseUI_MainView_Bible_GenerateSlides();
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

function createBaseUI_MainView_Bible_GenerateNext(): UI_MainView_Bible_GenerateNext {
  return { location: 0 };
}

export const UI_MainView_Bible_GenerateNext = {
  encode(
    message: UI_MainView_Bible_GenerateNext,
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
  ): UI_MainView_Bible_GenerateNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_GenerateNext();
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

  fromJSON(object: any): UI_MainView_Bible_GenerateNext {
    return {
      location: isSet(object.location)
        ? uI_MainView_Bible_LocationFromJSON(object.location)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_GenerateNext): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = uI_MainView_Bible_LocationToJSON(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_GenerateNext>, I>>(
    base?: I,
  ): UI_MainView_Bible_GenerateNext {
    return UI_MainView_Bible_GenerateNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_GenerateNext>, I>>(
    object: I,
  ): UI_MainView_Bible_GenerateNext {
    const message = createBaseUI_MainView_Bible_GenerateNext();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_GeneratePrevious(): UI_MainView_Bible_GeneratePrevious {
  return { location: 0 };
}

export const UI_MainView_Bible_GeneratePrevious = {
  encode(
    message: UI_MainView_Bible_GeneratePrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(16).int32(message.location);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Bible_GeneratePrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_GeneratePrevious();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): UI_MainView_Bible_GeneratePrevious {
    return {
      location: isSet(object.location)
        ? uI_MainView_Bible_LocationFromJSON(object.location)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_GeneratePrevious): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = uI_MainView_Bible_LocationToJSON(message.location);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_GeneratePrevious>, I>>(
    base?: I,
  ): UI_MainView_Bible_GeneratePrevious {
    return UI_MainView_Bible_GeneratePrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_MainView_Bible_GeneratePrevious>, I>,
  >(object: I): UI_MainView_Bible_GeneratePrevious {
    const message = createBaseUI_MainView_Bible_GeneratePrevious();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_SaveSlides(): UI_MainView_Bible_SaveSlides {
  return { destination: 0 };
}

export const UI_MainView_Bible_SaveSlides = {
  encode(
    message: UI_MainView_Bible_SaveSlides,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destination !== 0) {
      writer.uint32(8).int32(message.destination);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Bible_SaveSlides {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_SaveSlides();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.destination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_Bible_SaveSlides {
    return {
      destination: isSet(object.destination)
        ? uI_MainView_Bible_SaveSlides_SlideDestinationFromJSON(
            object.destination,
          )
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_SaveSlides): unknown {
    const obj: any = {};
    if (message.destination !== 0) {
      obj.destination = uI_MainView_Bible_SaveSlides_SlideDestinationToJSON(
        message.destination,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_SaveSlides>, I>>(
    base?: I,
  ): UI_MainView_Bible_SaveSlides {
    return UI_MainView_Bible_SaveSlides.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_SaveSlides>, I>>(
    object: I,
  ): UI_MainView_Bible_SaveSlides {
    const message = createBaseUI_MainView_Bible_SaveSlides();
    message.destination = object.destination ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_Lookup(): UI_MainView_Bible_Lookup {
  return { location: 0 };
}

export const UI_MainView_Bible_Lookup = {
  encode(
    message: UI_MainView_Bible_Lookup,
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
  ): UI_MainView_Bible_Lookup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_Lookup();
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

  fromJSON(object: any): UI_MainView_Bible_Lookup {
    return {
      location: isSet(object.location)
        ? uI_MainView_Bible_Lookup_LookupLocationFromJSON(object.location)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_Lookup): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = uI_MainView_Bible_Lookup_LookupLocationToJSON(
        message.location,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_Lookup>, I>>(
    base?: I,
  ): UI_MainView_Bible_Lookup {
    return UI_MainView_Bible_Lookup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_Lookup>, I>>(
    object: I,
  ): UI_MainView_Bible_Lookup {
    const message = createBaseUI_MainView_Bible_Lookup();
    message.location = object.location ?? 0;
    return message;
  },
};

function createBaseUI_MainView_Bible_BibleCount(): UI_MainView_Bible_BibleCount {
  return { freeInstalledCount: 0, purchasedInstalledCount: 0 };
}

export const UI_MainView_Bible_BibleCount = {
  encode(
    message: UI_MainView_Bible_BibleCount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.freeInstalledCount !== 0) {
      writer.uint32(8).int32(message.freeInstalledCount);
    }
    if (message.purchasedInstalledCount !== 0) {
      writer.uint32(16).int32(message.purchasedInstalledCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_Bible_BibleCount {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_Bible_BibleCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.freeInstalledCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.purchasedInstalledCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_Bible_BibleCount {
    return {
      freeInstalledCount: isSet(object.freeInstalledCount)
        ? globalThis.Number(object.freeInstalledCount)
        : 0,
      purchasedInstalledCount: isSet(object.purchasedInstalledCount)
        ? globalThis.Number(object.purchasedInstalledCount)
        : 0,
    };
  },

  toJSON(message: UI_MainView_Bible_BibleCount): unknown {
    const obj: any = {};
    if (message.freeInstalledCount !== 0) {
      obj.freeInstalledCount = Math.round(message.freeInstalledCount);
    }
    if (message.purchasedInstalledCount !== 0) {
      obj.purchasedInstalledCount = Math.round(message.purchasedInstalledCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_Bible_BibleCount>, I>>(
    base?: I,
  ): UI_MainView_Bible_BibleCount {
    return UI_MainView_Bible_BibleCount.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_Bible_BibleCount>, I>>(
    object: I,
  ): UI_MainView_Bible_BibleCount {
    const message = createBaseUI_MainView_Bible_BibleCount();
    message.freeInstalledCount = object.freeInstalledCount ?? 0;
    message.purchasedInstalledCount = object.purchasedInstalledCount ?? 0;
    return message;
  },
};

function createBaseUI_MainView_StageEditor(): UI_MainView_StageEditor {
  return { shown: undefined };
}

export const UI_MainView_StageEditor = {
  encode(
    message: UI_MainView_StageEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_StageEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_StageEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_StageEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_StageEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_StageEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_StageEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_StageEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_StageEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_StageEditor>, I>>(
    base?: I,
  ): UI_MainView_StageEditor {
    return UI_MainView_StageEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_StageEditor>, I>>(
    object: I,
  ): UI_MainView_StageEditor {
    const message = createBaseUI_MainView_StageEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_StageEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_StageEditor_Shown(): UI_MainView_StageEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_StageEditor_Shown = {
  encode(
    message: UI_MainView_StageEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_StageEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_StageEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_StageEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_StageEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_StageEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_StageEditor_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_StageEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_StageEditor_Shown {
    return UI_MainView_StageEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_StageEditor_Shown>, I>>(
    object: I,
  ): UI_MainView_StageEditor_Shown {
    const message = createBaseUI_MainView_StageEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_ThemeEditor(): UI_MainView_ThemeEditor {
  return { shown: undefined };
}

export const UI_MainView_ThemeEditor = {
  encode(
    message: UI_MainView_ThemeEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_ThemeEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_ThemeEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_ThemeEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_ThemeEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_ThemeEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_ThemeEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_ThemeEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_ThemeEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_ThemeEditor>, I>>(
    base?: I,
  ): UI_MainView_ThemeEditor {
    return UI_MainView_ThemeEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_ThemeEditor>, I>>(
    object: I,
  ): UI_MainView_ThemeEditor {
    const message = createBaseUI_MainView_ThemeEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_ThemeEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_ThemeEditor_Shown(): UI_MainView_ThemeEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_ThemeEditor_Shown = {
  encode(
    message: UI_MainView_ThemeEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_ThemeEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_ThemeEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_ThemeEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_ThemeEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_ThemeEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_ThemeEditor_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_ThemeEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_ThemeEditor_Shown {
    return UI_MainView_ThemeEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_ThemeEditor_Shown>, I>>(
    object: I,
  ): UI_MainView_ThemeEditor_Shown {
    const message = createBaseUI_MainView_ThemeEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_CopyrightEditor(): UI_MainView_CopyrightEditor {
  return { shown: undefined };
}

export const UI_MainView_CopyrightEditor = {
  encode(
    message: UI_MainView_CopyrightEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_CopyrightEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_CopyrightEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_CopyrightEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_CopyrightEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_CopyrightEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_CopyrightEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_CopyrightEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_CopyrightEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_CopyrightEditor>, I>>(
    base?: I,
  ): UI_MainView_CopyrightEditor {
    return UI_MainView_CopyrightEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_CopyrightEditor>, I>>(
    object: I,
  ): UI_MainView_CopyrightEditor {
    const message = createBaseUI_MainView_CopyrightEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_CopyrightEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_CopyrightEditor_Shown(): UI_MainView_CopyrightEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_CopyrightEditor_Shown = {
  encode(
    message: UI_MainView_CopyrightEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_CopyrightEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_CopyrightEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_CopyrightEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_CopyrightEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_CopyrightEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_CopyrightEditor_Shown_SourceToJSON(
        message.source,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_CopyrightEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_CopyrightEditor_Shown {
    return UI_MainView_CopyrightEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_MainView_CopyrightEditor_Shown>, I>,
  >(object: I): UI_MainView_CopyrightEditor_Shown {
    const message = createBaseUI_MainView_CopyrightEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_PropsEditor(): UI_MainView_PropsEditor {
  return { shown: undefined };
}

export const UI_MainView_PropsEditor = {
  encode(
    message: UI_MainView_PropsEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_PropsEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_PropsEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_PropsEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_PropsEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_PropsEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_PropsEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_PropsEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_PropsEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_PropsEditor>, I>>(
    base?: I,
  ): UI_MainView_PropsEditor {
    return UI_MainView_PropsEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_PropsEditor>, I>>(
    object: I,
  ): UI_MainView_PropsEditor {
    const message = createBaseUI_MainView_PropsEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_PropsEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_PropsEditor_Shown(): UI_MainView_PropsEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_PropsEditor_Shown = {
  encode(
    message: UI_MainView_PropsEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_PropsEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_PropsEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_PropsEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_PropsEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_PropsEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_PropsEditor_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_PropsEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_PropsEditor_Shown {
    return UI_MainView_PropsEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_PropsEditor_Shown>, I>>(
    object: I,
  ): UI_MainView_PropsEditor_Shown {
    const message = createBaseUI_MainView_PropsEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_MainView_MaskEditor(): UI_MainView_MaskEditor {
  return { shown: undefined };
}

export const UI_MainView_MaskEditor = {
  encode(
    message: UI_MainView_MaskEditor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_MainView_MaskEditor_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_MaskEditor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_MaskEditor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_MainView_MaskEditor_Shown.decode(
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

  fromJSON(object: any): UI_MainView_MaskEditor {
    return {
      shown: isSet(object.shown)
        ? UI_MainView_MaskEditor_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_MainView_MaskEditor): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_MainView_MaskEditor_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_MaskEditor>, I>>(
    base?: I,
  ): UI_MainView_MaskEditor {
    return UI_MainView_MaskEditor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_MaskEditor>, I>>(
    object: I,
  ): UI_MainView_MaskEditor {
    const message = createBaseUI_MainView_MaskEditor();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_MainView_MaskEditor_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_MainView_MaskEditor_Shown(): UI_MainView_MaskEditor_Shown {
  return { source: 0 };
}

export const UI_MainView_MaskEditor_Shown = {
  encode(
    message: UI_MainView_MaskEditor_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_MainView_MaskEditor_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_MainView_MaskEditor_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_MainView_MaskEditor_Shown {
    return {
      source: isSet(object.source)
        ? uI_MainView_MaskEditor_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_MainView_MaskEditor_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_MainView_MaskEditor_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_MainView_MaskEditor_Shown>, I>>(
    base?: I,
  ): UI_MainView_MaskEditor_Shown {
    return UI_MainView_MaskEditor_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_MainView_MaskEditor_Shown>, I>>(
    object: I,
  ): UI_MainView_MaskEditor_Shown {
    const message = createBaseUI_MainView_MaskEditor_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_Looks(): UI_Looks {
  return { shown: undefined };
}

export const UI_Looks = {
  encode(
    message: UI_Looks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Looks_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Looks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Looks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Looks_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Looks {
    return {
      shown: isSet(object.shown)
        ? UI_Looks_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_Looks): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Looks_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Looks>, I>>(base?: I): UI_Looks {
    return UI_Looks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Looks>, I>>(object: I): UI_Looks {
    const message = createBaseUI_Looks();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Looks_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_Looks_Shown(): UI_Looks_Shown {
  return { source: 0 };
}

export const UI_Looks_Shown = {
  encode(
    message: UI_Looks_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Looks_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Looks_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Looks_Shown {
    return {
      source: isSet(object.source)
        ? uI_Looks_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_Looks_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_Looks_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Looks_Shown>, I>>(
    base?: I,
  ): UI_Looks_Shown {
    return UI_Looks_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Looks_Shown>, I>>(
    object: I,
  ): UI_Looks_Shown {
    const message = createBaseUI_Looks_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_ScreenConfiguration(): UI_ScreenConfiguration {
  return { shown: undefined };
}

export const UI_ScreenConfiguration = {
  encode(
    message: UI_ScreenConfiguration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_ScreenConfiguration_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ScreenConfiguration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ScreenConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_ScreenConfiguration_Shown.decode(
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

  fromJSON(object: any): UI_ScreenConfiguration {
    return {
      shown: isSet(object.shown)
        ? UI_ScreenConfiguration_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_ScreenConfiguration): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_ScreenConfiguration_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ScreenConfiguration>, I>>(
    base?: I,
  ): UI_ScreenConfiguration {
    return UI_ScreenConfiguration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ScreenConfiguration>, I>>(
    object: I,
  ): UI_ScreenConfiguration {
    const message = createBaseUI_ScreenConfiguration();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_ScreenConfiguration_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_ScreenConfiguration_Shown(): UI_ScreenConfiguration_Shown {
  return { source: 0 };
}

export const UI_ScreenConfiguration_Shown = {
  encode(
    message: UI_ScreenConfiguration_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ScreenConfiguration_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ScreenConfiguration_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_ScreenConfiguration_Shown {
    return {
      source: isSet(object.source)
        ? uI_ScreenConfiguration_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_ScreenConfiguration_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_ScreenConfiguration_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ScreenConfiguration_Shown>, I>>(
    base?: I,
  ): UI_ScreenConfiguration_Shown {
    return UI_ScreenConfiguration_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ScreenConfiguration_Shown>, I>>(
    object: I,
  ): UI_ScreenConfiguration_Shown {
    const message = createBaseUI_ScreenConfiguration_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight(): UI_LowerRight {
  return {
    timers: undefined,
    messages: undefined,
    props: undefined,
    stage: undefined,
    audioBin: undefined,
    macros: undefined,
  };
}

export const UI_LowerRight = {
  encode(
    message: UI_LowerRight,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timers !== undefined) {
      UI_LowerRight_Timers.encode(
        message.timers,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.messages !== undefined) {
      UI_LowerRight_Messages.encode(
        message.messages,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.props !== undefined) {
      UI_LowerRight_Props.encode(
        message.props,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.stage !== undefined) {
      UI_LowerRight_Stage.encode(
        message.stage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.audioBin !== undefined) {
      UI_LowerRight_AudioBin.encode(
        message.audioBin,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.macros !== undefined) {
      UI_LowerRight_Macros.encode(
        message.macros,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_LowerRight {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timers = UI_LowerRight_Timers.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.messages = UI_LowerRight_Messages.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.props = UI_LowerRight_Props.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stage = UI_LowerRight_Stage.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.audioBin = UI_LowerRight_AudioBin.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.macros = UI_LowerRight_Macros.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_LowerRight {
    return {
      timers: isSet(object.timers)
        ? UI_LowerRight_Timers.fromJSON(object.timers)
        : undefined,
      messages: isSet(object.messages)
        ? UI_LowerRight_Messages.fromJSON(object.messages)
        : undefined,
      props: isSet(object.props)
        ? UI_LowerRight_Props.fromJSON(object.props)
        : undefined,
      stage: isSet(object.stage)
        ? UI_LowerRight_Stage.fromJSON(object.stage)
        : undefined,
      audioBin: isSet(object.audioBin)
        ? UI_LowerRight_AudioBin.fromJSON(object.audioBin)
        : undefined,
      macros: isSet(object.macros)
        ? UI_LowerRight_Macros.fromJSON(object.macros)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight): unknown {
    const obj: any = {};
    if (message.timers !== undefined) {
      obj.timers = UI_LowerRight_Timers.toJSON(message.timers);
    }
    if (message.messages !== undefined) {
      obj.messages = UI_LowerRight_Messages.toJSON(message.messages);
    }
    if (message.props !== undefined) {
      obj.props = UI_LowerRight_Props.toJSON(message.props);
    }
    if (message.stage !== undefined) {
      obj.stage = UI_LowerRight_Stage.toJSON(message.stage);
    }
    if (message.audioBin !== undefined) {
      obj.audioBin = UI_LowerRight_AudioBin.toJSON(message.audioBin);
    }
    if (message.macros !== undefined) {
      obj.macros = UI_LowerRight_Macros.toJSON(message.macros);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight>, I>>(
    base?: I,
  ): UI_LowerRight {
    return UI_LowerRight.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight>, I>>(
    object: I,
  ): UI_LowerRight {
    const message = createBaseUI_LowerRight();
    message.timers =
      object.timers !== undefined && object.timers !== null
        ? UI_LowerRight_Timers.fromPartial(object.timers)
        : undefined;
    message.messages =
      object.messages !== undefined && object.messages !== null
        ? UI_LowerRight_Messages.fromPartial(object.messages)
        : undefined;
    message.props =
      object.props !== undefined && object.props !== null
        ? UI_LowerRight_Props.fromPartial(object.props)
        : undefined;
    message.stage =
      object.stage !== undefined && object.stage !== null
        ? UI_LowerRight_Stage.fromPartial(object.stage)
        : undefined;
    message.audioBin =
      object.audioBin !== undefined && object.audioBin !== null
        ? UI_LowerRight_AudioBin.fromPartial(object.audioBin)
        : undefined;
    message.macros =
      object.macros !== undefined && object.macros !== null
        ? UI_LowerRight_Macros.fromPartial(object.macros)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Timers(): UI_LowerRight_Timers {
  return {
    shown: undefined,
    collapse: undefined,
    edit: undefined,
    state: undefined,
    create: undefined,
    delete: undefined,
  };
}

export const UI_LowerRight_Timers = {
  encode(
    message: UI_LowerRight_Timers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_LowerRight_Timers_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.collapse !== undefined) {
      UI_LowerRight_Timers_Collapse.encode(
        message.collapse,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.edit !== undefined) {
      UI_LowerRight_Timers_Edit.encode(
        message.edit,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.state !== undefined) {
      UI_LowerRight_Timers_State.encode(
        message.state,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.create !== undefined) {
      UI_LowerRight_Timers_Create.encode(
        message.create,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.delete !== undefined) {
      UI_LowerRight_Timers_Delete.encode(
        message.delete,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_LowerRight_Timers_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.collapse = UI_LowerRight_Timers_Collapse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.edit = UI_LowerRight_Timers_Edit.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.state = UI_LowerRight_Timers_State.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.create = UI_LowerRight_Timers_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.delete = UI_LowerRight_Timers_Delete.decode(
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

  fromJSON(object: any): UI_LowerRight_Timers {
    return {
      shown: isSet(object.shown)
        ? UI_LowerRight_Timers_Shown.fromJSON(object.shown)
        : undefined,
      collapse: isSet(object.collapse)
        ? UI_LowerRight_Timers_Collapse.fromJSON(object.collapse)
        : undefined,
      edit: isSet(object.edit)
        ? UI_LowerRight_Timers_Edit.fromJSON(object.edit)
        : undefined,
      state: isSet(object.state)
        ? UI_LowerRight_Timers_State.fromJSON(object.state)
        : undefined,
      create: isSet(object.create)
        ? UI_LowerRight_Timers_Create.fromJSON(object.create)
        : undefined,
      delete: isSet(object.delete)
        ? UI_LowerRight_Timers_Delete.fromJSON(object.delete)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight_Timers): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_LowerRight_Timers_Shown.toJSON(message.shown);
    }
    if (message.collapse !== undefined) {
      obj.collapse = UI_LowerRight_Timers_Collapse.toJSON(message.collapse);
    }
    if (message.edit !== undefined) {
      obj.edit = UI_LowerRight_Timers_Edit.toJSON(message.edit);
    }
    if (message.state !== undefined) {
      obj.state = UI_LowerRight_Timers_State.toJSON(message.state);
    }
    if (message.create !== undefined) {
      obj.create = UI_LowerRight_Timers_Create.toJSON(message.create);
    }
    if (message.delete !== undefined) {
      obj.delete = UI_LowerRight_Timers_Delete.toJSON(message.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers>, I>>(
    base?: I,
  ): UI_LowerRight_Timers {
    return UI_LowerRight_Timers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers>, I>>(
    object: I,
  ): UI_LowerRight_Timers {
    const message = createBaseUI_LowerRight_Timers();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_LowerRight_Timers_Shown.fromPartial(object.shown)
        : undefined;
    message.collapse =
      object.collapse !== undefined && object.collapse !== null
        ? UI_LowerRight_Timers_Collapse.fromPartial(object.collapse)
        : undefined;
    message.edit =
      object.edit !== undefined && object.edit !== null
        ? UI_LowerRight_Timers_Edit.fromPartial(object.edit)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? UI_LowerRight_Timers_State.fromPartial(object.state)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_LowerRight_Timers_Create.fromPartial(object.create)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? UI_LowerRight_Timers_Delete.fromPartial(object.delete)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Timers_Shown(): UI_LowerRight_Timers_Shown {
  return {};
}

export const UI_LowerRight_Timers_Shown = {
  encode(
    _: UI_LowerRight_Timers_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_Shown();
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

  fromJSON(_: any): UI_LowerRight_Timers_Shown {
    return {};
  },

  toJSON(_: UI_LowerRight_Timers_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_Shown>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_Shown {
    return UI_LowerRight_Timers_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_Shown>, I>>(
    _: I,
  ): UI_LowerRight_Timers_Shown {
    const message = createBaseUI_LowerRight_Timers_Shown();
    return message;
  },
};

function createBaseUI_LowerRight_Timers_Collapse(): UI_LowerRight_Timers_Collapse {
  return { state: 0 };
}

export const UI_LowerRight_Timers_Collapse = {
  encode(
    message: UI_LowerRight_Timers_Collapse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_Collapse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_Collapse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_LowerRight_Timers_Collapse {
    return {
      state: isSet(object.state)
        ? uI_LowerRight_Timers_Collapse_StateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Timers_Collapse): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = uI_LowerRight_Timers_Collapse_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_Collapse>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_Collapse {
    return UI_LowerRight_Timers_Collapse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_Collapse>, I>>(
    object: I,
  ): UI_LowerRight_Timers_Collapse {
    const message = createBaseUI_LowerRight_Timers_Collapse();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Timers_Edit(): UI_LowerRight_Timers_Edit {
  return { field: 0 };
}

export const UI_LowerRight_Timers_Edit = {
  encode(
    message: UI_LowerRight_Timers_Edit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.field !== 0) {
      writer.uint32(8).int32(message.field);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_Edit {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_Edit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.field = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_LowerRight_Timers_Edit {
    return {
      field: isSet(object.field)
        ? uI_LowerRight_Timers_Edit_FieldFromJSON(object.field)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Timers_Edit): unknown {
    const obj: any = {};
    if (message.field !== 0) {
      obj.field = uI_LowerRight_Timers_Edit_FieldToJSON(message.field);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_Edit>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_Edit {
    return UI_LowerRight_Timers_Edit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_Edit>, I>>(
    object: I,
  ): UI_LowerRight_Timers_Edit {
    const message = createBaseUI_LowerRight_Timers_Edit();
    message.field = object.field ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Timers_State(): UI_LowerRight_Timers_State {
  return { state: 0 };
}

export const UI_LowerRight_Timers_State = {
  encode(
    message: UI_LowerRight_Timers_State,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_State {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_LowerRight_Timers_State {
    return {
      state: isSet(object.state)
        ? uI_LowerRight_Timers_State_StateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Timers_State): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = uI_LowerRight_Timers_State_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_State>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_State {
    return UI_LowerRight_Timers_State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_State>, I>>(
    object: I,
  ): UI_LowerRight_Timers_State {
    const message = createBaseUI_LowerRight_Timers_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Timers_Create(): UI_LowerRight_Timers_Create {
  return {};
}

export const UI_LowerRight_Timers_Create = {
  encode(
    _: UI_LowerRight_Timers_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_Create();
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

  fromJSON(_: any): UI_LowerRight_Timers_Create {
    return {};
  },

  toJSON(_: UI_LowerRight_Timers_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_Create>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_Create {
    return UI_LowerRight_Timers_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_Create>, I>>(
    _: I,
  ): UI_LowerRight_Timers_Create {
    const message = createBaseUI_LowerRight_Timers_Create();
    return message;
  },
};

function createBaseUI_LowerRight_Timers_Delete(): UI_LowerRight_Timers_Delete {
  return {};
}

export const UI_LowerRight_Timers_Delete = {
  encode(
    _: UI_LowerRight_Timers_Delete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Timers_Delete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Timers_Delete();
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

  fromJSON(_: any): UI_LowerRight_Timers_Delete {
    return {};
  },

  toJSON(_: UI_LowerRight_Timers_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Timers_Delete>, I>>(
    base?: I,
  ): UI_LowerRight_Timers_Delete {
    return UI_LowerRight_Timers_Delete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Timers_Delete>, I>>(
    _: I,
  ): UI_LowerRight_Timers_Delete {
    const message = createBaseUI_LowerRight_Timers_Delete();
    return message;
  },
};

function createBaseUI_LowerRight_Messages(): UI_LowerRight_Messages {
  return {
    shown: undefined,
    edit: undefined,
    state: undefined,
    create: undefined,
    delete: undefined,
  };
}

export const UI_LowerRight_Messages = {
  encode(
    message: UI_LowerRight_Messages,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_LowerRight_Messages_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.edit !== undefined) {
      UI_LowerRight_Messages_Edit.encode(
        message.edit,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.state !== undefined) {
      UI_LowerRight_Messages_State.encode(
        message.state,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.create !== undefined) {
      UI_LowerRight_Messages_Create.encode(
        message.create,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.delete !== undefined) {
      UI_LowerRight_Messages_Delete.encode(
        message.delete,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_LowerRight_Messages_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.edit = UI_LowerRight_Messages_Edit.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.state = UI_LowerRight_Messages_State.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.create = UI_LowerRight_Messages_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delete = UI_LowerRight_Messages_Delete.decode(
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

  fromJSON(object: any): UI_LowerRight_Messages {
    return {
      shown: isSet(object.shown)
        ? UI_LowerRight_Messages_Shown.fromJSON(object.shown)
        : undefined,
      edit: isSet(object.edit)
        ? UI_LowerRight_Messages_Edit.fromJSON(object.edit)
        : undefined,
      state: isSet(object.state)
        ? UI_LowerRight_Messages_State.fromJSON(object.state)
        : undefined,
      create: isSet(object.create)
        ? UI_LowerRight_Messages_Create.fromJSON(object.create)
        : undefined,
      delete: isSet(object.delete)
        ? UI_LowerRight_Messages_Delete.fromJSON(object.delete)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight_Messages): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_LowerRight_Messages_Shown.toJSON(message.shown);
    }
    if (message.edit !== undefined) {
      obj.edit = UI_LowerRight_Messages_Edit.toJSON(message.edit);
    }
    if (message.state !== undefined) {
      obj.state = UI_LowerRight_Messages_State.toJSON(message.state);
    }
    if (message.create !== undefined) {
      obj.create = UI_LowerRight_Messages_Create.toJSON(message.create);
    }
    if (message.delete !== undefined) {
      obj.delete = UI_LowerRight_Messages_Delete.toJSON(message.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages>, I>>(
    base?: I,
  ): UI_LowerRight_Messages {
    return UI_LowerRight_Messages.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages>, I>>(
    object: I,
  ): UI_LowerRight_Messages {
    const message = createBaseUI_LowerRight_Messages();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_LowerRight_Messages_Shown.fromPartial(object.shown)
        : undefined;
    message.edit =
      object.edit !== undefined && object.edit !== null
        ? UI_LowerRight_Messages_Edit.fromPartial(object.edit)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? UI_LowerRight_Messages_State.fromPartial(object.state)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_LowerRight_Messages_Create.fromPartial(object.create)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? UI_LowerRight_Messages_Delete.fromPartial(object.delete)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Messages_Shown(): UI_LowerRight_Messages_Shown {
  return {};
}

export const UI_LowerRight_Messages_Shown = {
  encode(
    _: UI_LowerRight_Messages_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages_Shown();
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

  fromJSON(_: any): UI_LowerRight_Messages_Shown {
    return {};
  },

  toJSON(_: UI_LowerRight_Messages_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages_Shown>, I>>(
    base?: I,
  ): UI_LowerRight_Messages_Shown {
    return UI_LowerRight_Messages_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages_Shown>, I>>(
    _: I,
  ): UI_LowerRight_Messages_Shown {
    const message = createBaseUI_LowerRight_Messages_Shown();
    return message;
  },
};

function createBaseUI_LowerRight_Messages_Edit(): UI_LowerRight_Messages_Edit {
  return { action: 0 };
}

export const UI_LowerRight_Messages_Edit = {
  encode(
    message: UI_LowerRight_Messages_Edit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages_Edit {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages_Edit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_LowerRight_Messages_Edit {
    return {
      action: isSet(object.action)
        ? uI_LowerRight_Messages_Edit_ActionFromJSON(object.action)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Messages_Edit): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = uI_LowerRight_Messages_Edit_ActionToJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages_Edit>, I>>(
    base?: I,
  ): UI_LowerRight_Messages_Edit {
    return UI_LowerRight_Messages_Edit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages_Edit>, I>>(
    object: I,
  ): UI_LowerRight_Messages_Edit {
    const message = createBaseUI_LowerRight_Messages_Edit();
    message.action = object.action ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Messages_State(): UI_LowerRight_Messages_State {
  return { state: 0 };
}

export const UI_LowerRight_Messages_State = {
  encode(
    message: UI_LowerRight_Messages_State,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages_State {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_LowerRight_Messages_State {
    return {
      state: isSet(object.state)
        ? uI_LowerRight_Messages_State_StateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Messages_State): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = uI_LowerRight_Messages_State_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages_State>, I>>(
    base?: I,
  ): UI_LowerRight_Messages_State {
    return UI_LowerRight_Messages_State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages_State>, I>>(
    object: I,
  ): UI_LowerRight_Messages_State {
    const message = createBaseUI_LowerRight_Messages_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Messages_Create(): UI_LowerRight_Messages_Create {
  return {};
}

export const UI_LowerRight_Messages_Create = {
  encode(
    _: UI_LowerRight_Messages_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages_Create();
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

  fromJSON(_: any): UI_LowerRight_Messages_Create {
    return {};
  },

  toJSON(_: UI_LowerRight_Messages_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages_Create>, I>>(
    base?: I,
  ): UI_LowerRight_Messages_Create {
    return UI_LowerRight_Messages_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages_Create>, I>>(
    _: I,
  ): UI_LowerRight_Messages_Create {
    const message = createBaseUI_LowerRight_Messages_Create();
    return message;
  },
};

function createBaseUI_LowerRight_Messages_Delete(): UI_LowerRight_Messages_Delete {
  return {};
}

export const UI_LowerRight_Messages_Delete = {
  encode(
    _: UI_LowerRight_Messages_Delete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Messages_Delete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Messages_Delete();
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

  fromJSON(_: any): UI_LowerRight_Messages_Delete {
    return {};
  },

  toJSON(_: UI_LowerRight_Messages_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Messages_Delete>, I>>(
    base?: I,
  ): UI_LowerRight_Messages_Delete {
    return UI_LowerRight_Messages_Delete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Messages_Delete>, I>>(
    _: I,
  ): UI_LowerRight_Messages_Delete {
    const message = createBaseUI_LowerRight_Messages_Delete();
    return message;
  },
};

function createBaseUI_LowerRight_Props(): UI_LowerRight_Props {
  return {
    shown: undefined,
    transition: undefined,
    state: undefined,
    create: undefined,
    delete: undefined,
  };
}

export const UI_LowerRight_Props = {
  encode(
    message: UI_LowerRight_Props,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_LowerRight_Props_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.transition !== undefined) {
      UI_LowerRight_Props_Transition.encode(
        message.transition,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.state !== undefined) {
      UI_LowerRight_Props_State.encode(
        message.state,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.create !== undefined) {
      UI_LowerRight_Props_Create.encode(
        message.create,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.delete !== undefined) {
      UI_LowerRight_Props_Delete.encode(
        message.delete,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_LowerRight_Props {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_LowerRight_Props_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transition = UI_LowerRight_Props_Transition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.state = UI_LowerRight_Props_State.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.create = UI_LowerRight_Props_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.delete = UI_LowerRight_Props_Delete.decode(
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

  fromJSON(object: any): UI_LowerRight_Props {
    return {
      shown: isSet(object.shown)
        ? UI_LowerRight_Props_Shown.fromJSON(object.shown)
        : undefined,
      transition: isSet(object.transition)
        ? UI_LowerRight_Props_Transition.fromJSON(object.transition)
        : undefined,
      state: isSet(object.state)
        ? UI_LowerRight_Props_State.fromJSON(object.state)
        : undefined,
      create: isSet(object.create)
        ? UI_LowerRight_Props_Create.fromJSON(object.create)
        : undefined,
      delete: isSet(object.delete)
        ? UI_LowerRight_Props_Delete.fromJSON(object.delete)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight_Props): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_LowerRight_Props_Shown.toJSON(message.shown);
    }
    if (message.transition !== undefined) {
      obj.transition = UI_LowerRight_Props_Transition.toJSON(
        message.transition,
      );
    }
    if (message.state !== undefined) {
      obj.state = UI_LowerRight_Props_State.toJSON(message.state);
    }
    if (message.create !== undefined) {
      obj.create = UI_LowerRight_Props_Create.toJSON(message.create);
    }
    if (message.delete !== undefined) {
      obj.delete = UI_LowerRight_Props_Delete.toJSON(message.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props>, I>>(
    base?: I,
  ): UI_LowerRight_Props {
    return UI_LowerRight_Props.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props>, I>>(
    object: I,
  ): UI_LowerRight_Props {
    const message = createBaseUI_LowerRight_Props();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_LowerRight_Props_Shown.fromPartial(object.shown)
        : undefined;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? UI_LowerRight_Props_Transition.fromPartial(object.transition)
        : undefined;
    message.state =
      object.state !== undefined && object.state !== null
        ? UI_LowerRight_Props_State.fromPartial(object.state)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_LowerRight_Props_Create.fromPartial(object.create)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? UI_LowerRight_Props_Delete.fromPartial(object.delete)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Props_Shown(): UI_LowerRight_Props_Shown {
  return {};
}

export const UI_LowerRight_Props_Shown = {
  encode(
    _: UI_LowerRight_Props_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Props_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props_Shown();
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

  fromJSON(_: any): UI_LowerRight_Props_Shown {
    return {};
  },

  toJSON(_: UI_LowerRight_Props_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props_Shown>, I>>(
    base?: I,
  ): UI_LowerRight_Props_Shown {
    return UI_LowerRight_Props_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props_Shown>, I>>(
    _: I,
  ): UI_LowerRight_Props_Shown {
    const message = createBaseUI_LowerRight_Props_Shown();
    return message;
  },
};

function createBaseUI_LowerRight_Props_Transition(): UI_LowerRight_Props_Transition {
  return {};
}

export const UI_LowerRight_Props_Transition = {
  encode(
    _: UI_LowerRight_Props_Transition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Props_Transition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props_Transition();
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

  fromJSON(_: any): UI_LowerRight_Props_Transition {
    return {};
  },

  toJSON(_: UI_LowerRight_Props_Transition): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props_Transition>, I>>(
    base?: I,
  ): UI_LowerRight_Props_Transition {
    return UI_LowerRight_Props_Transition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props_Transition>, I>>(
    _: I,
  ): UI_LowerRight_Props_Transition {
    const message = createBaseUI_LowerRight_Props_Transition();
    return message;
  },
};

function createBaseUI_LowerRight_Props_State(): UI_LowerRight_Props_State {
  return { state: 0 };
}

export const UI_LowerRight_Props_State = {
  encode(
    message: UI_LowerRight_Props_State,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Props_State {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_LowerRight_Props_State {
    return {
      state: isSet(object.state)
        ? uI_LowerRight_Props_State_StateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Props_State): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = uI_LowerRight_Props_State_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props_State>, I>>(
    base?: I,
  ): UI_LowerRight_Props_State {
    return UI_LowerRight_Props_State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props_State>, I>>(
    object: I,
  ): UI_LowerRight_Props_State {
    const message = createBaseUI_LowerRight_Props_State();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Props_Create(): UI_LowerRight_Props_Create {
  return {};
}

export const UI_LowerRight_Props_Create = {
  encode(
    _: UI_LowerRight_Props_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Props_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props_Create();
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

  fromJSON(_: any): UI_LowerRight_Props_Create {
    return {};
  },

  toJSON(_: UI_LowerRight_Props_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props_Create>, I>>(
    base?: I,
  ): UI_LowerRight_Props_Create {
    return UI_LowerRight_Props_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props_Create>, I>>(
    _: I,
  ): UI_LowerRight_Props_Create {
    const message = createBaseUI_LowerRight_Props_Create();
    return message;
  },
};

function createBaseUI_LowerRight_Props_Delete(): UI_LowerRight_Props_Delete {
  return {};
}

export const UI_LowerRight_Props_Delete = {
  encode(
    _: UI_LowerRight_Props_Delete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Props_Delete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Props_Delete();
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

  fromJSON(_: any): UI_LowerRight_Props_Delete {
    return {};
  },

  toJSON(_: UI_LowerRight_Props_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Props_Delete>, I>>(
    base?: I,
  ): UI_LowerRight_Props_Delete {
    return UI_LowerRight_Props_Delete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Props_Delete>, I>>(
    _: I,
  ): UI_LowerRight_Props_Delete {
    const message = createBaseUI_LowerRight_Props_Delete();
    return message;
  },
};

function createBaseUI_LowerRight_Stage(): UI_LowerRight_Stage {
  return {
    shown: undefined,
    changeLayout: undefined,
    messageState: undefined,
    configureScreens: undefined,
    editLayouts: undefined,
  };
}

export const UI_LowerRight_Stage = {
  encode(
    message: UI_LowerRight_Stage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_LowerRight_Stage_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.changeLayout !== undefined) {
      UI_LowerRight_Stage_ChangeLayout.encode(
        message.changeLayout,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.messageState !== undefined) {
      UI_LowerRight_Stage_MessageState.encode(
        message.messageState,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.configureScreens !== undefined) {
      UI_LowerRight_Stage_ConfigureScreens.encode(
        message.configureScreens,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.editLayouts !== undefined) {
      UI_LowerRight_Stage_EditLayouts.encode(
        message.editLayouts,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_LowerRight_Stage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_LowerRight_Stage_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changeLayout = UI_LowerRight_Stage_ChangeLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.messageState = UI_LowerRight_Stage_MessageState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.configureScreens =
            UI_LowerRight_Stage_ConfigureScreens.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.editLayouts = UI_LowerRight_Stage_EditLayouts.decode(
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

  fromJSON(object: any): UI_LowerRight_Stage {
    return {
      shown: isSet(object.shown)
        ? UI_LowerRight_Stage_Shown.fromJSON(object.shown)
        : undefined,
      changeLayout: isSet(object.changeLayout)
        ? UI_LowerRight_Stage_ChangeLayout.fromJSON(object.changeLayout)
        : undefined,
      messageState: isSet(object.messageState)
        ? UI_LowerRight_Stage_MessageState.fromJSON(object.messageState)
        : undefined,
      configureScreens: isSet(object.configureScreens)
        ? UI_LowerRight_Stage_ConfigureScreens.fromJSON(object.configureScreens)
        : undefined,
      editLayouts: isSet(object.editLayouts)
        ? UI_LowerRight_Stage_EditLayouts.fromJSON(object.editLayouts)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight_Stage): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_LowerRight_Stage_Shown.toJSON(message.shown);
    }
    if (message.changeLayout !== undefined) {
      obj.changeLayout = UI_LowerRight_Stage_ChangeLayout.toJSON(
        message.changeLayout,
      );
    }
    if (message.messageState !== undefined) {
      obj.messageState = UI_LowerRight_Stage_MessageState.toJSON(
        message.messageState,
      );
    }
    if (message.configureScreens !== undefined) {
      obj.configureScreens = UI_LowerRight_Stage_ConfigureScreens.toJSON(
        message.configureScreens,
      );
    }
    if (message.editLayouts !== undefined) {
      obj.editLayouts = UI_LowerRight_Stage_EditLayouts.toJSON(
        message.editLayouts,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage>, I>>(
    base?: I,
  ): UI_LowerRight_Stage {
    return UI_LowerRight_Stage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Stage>, I>>(
    object: I,
  ): UI_LowerRight_Stage {
    const message = createBaseUI_LowerRight_Stage();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_LowerRight_Stage_Shown.fromPartial(object.shown)
        : undefined;
    message.changeLayout =
      object.changeLayout !== undefined && object.changeLayout !== null
        ? UI_LowerRight_Stage_ChangeLayout.fromPartial(object.changeLayout)
        : undefined;
    message.messageState =
      object.messageState !== undefined && object.messageState !== null
        ? UI_LowerRight_Stage_MessageState.fromPartial(object.messageState)
        : undefined;
    message.configureScreens =
      object.configureScreens !== undefined && object.configureScreens !== null
        ? UI_LowerRight_Stage_ConfigureScreens.fromPartial(
            object.configureScreens,
          )
        : undefined;
    message.editLayouts =
      object.editLayouts !== undefined && object.editLayouts !== null
        ? UI_LowerRight_Stage_EditLayouts.fromPartial(object.editLayouts)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Stage_Shown(): UI_LowerRight_Stage_Shown {
  return {};
}

export const UI_LowerRight_Stage_Shown = {
  encode(
    _: UI_LowerRight_Stage_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Stage_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage_Shown();
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

  fromJSON(_: any): UI_LowerRight_Stage_Shown {
    return {};
  },

  toJSON(_: UI_LowerRight_Stage_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage_Shown>, I>>(
    base?: I,
  ): UI_LowerRight_Stage_Shown {
    return UI_LowerRight_Stage_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Stage_Shown>, I>>(
    _: I,
  ): UI_LowerRight_Stage_Shown {
    const message = createBaseUI_LowerRight_Stage_Shown();
    return message;
  },
};

function createBaseUI_LowerRight_Stage_ChangeLayout(): UI_LowerRight_Stage_ChangeLayout {
  return {};
}

export const UI_LowerRight_Stage_ChangeLayout = {
  encode(
    _: UI_LowerRight_Stage_ChangeLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Stage_ChangeLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage_ChangeLayout();
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

  fromJSON(_: any): UI_LowerRight_Stage_ChangeLayout {
    return {};
  },

  toJSON(_: UI_LowerRight_Stage_ChangeLayout): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage_ChangeLayout>, I>>(
    base?: I,
  ): UI_LowerRight_Stage_ChangeLayout {
    return UI_LowerRight_Stage_ChangeLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_LowerRight_Stage_ChangeLayout>, I>,
  >(_: I): UI_LowerRight_Stage_ChangeLayout {
    const message = createBaseUI_LowerRight_Stage_ChangeLayout();
    return message;
  },
};

function createBaseUI_LowerRight_Stage_MessageState(): UI_LowerRight_Stage_MessageState {
  return { state: 0 };
}

export const UI_LowerRight_Stage_MessageState = {
  encode(
    message: UI_LowerRight_Stage_MessageState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Stage_MessageState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage_MessageState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_LowerRight_Stage_MessageState {
    return {
      state: isSet(object.state)
        ? uI_LowerRight_Stage_MessageState_StateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: UI_LowerRight_Stage_MessageState): unknown {
    const obj: any = {};
    if (message.state !== 0) {
      obj.state = uI_LowerRight_Stage_MessageState_StateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage_MessageState>, I>>(
    base?: I,
  ): UI_LowerRight_Stage_MessageState {
    return UI_LowerRight_Stage_MessageState.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_LowerRight_Stage_MessageState>, I>,
  >(object: I): UI_LowerRight_Stage_MessageState {
    const message = createBaseUI_LowerRight_Stage_MessageState();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseUI_LowerRight_Stage_ConfigureScreens(): UI_LowerRight_Stage_ConfigureScreens {
  return {};
}

export const UI_LowerRight_Stage_ConfigureScreens = {
  encode(
    _: UI_LowerRight_Stage_ConfigureScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Stage_ConfigureScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage_ConfigureScreens();
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

  fromJSON(_: any): UI_LowerRight_Stage_ConfigureScreens {
    return {};
  },

  toJSON(_: UI_LowerRight_Stage_ConfigureScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage_ConfigureScreens>, I>>(
    base?: I,
  ): UI_LowerRight_Stage_ConfigureScreens {
    return UI_LowerRight_Stage_ConfigureScreens.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_LowerRight_Stage_ConfigureScreens>, I>,
  >(_: I): UI_LowerRight_Stage_ConfigureScreens {
    const message = createBaseUI_LowerRight_Stage_ConfigureScreens();
    return message;
  },
};

function createBaseUI_LowerRight_Stage_EditLayouts(): UI_LowerRight_Stage_EditLayouts {
  return {};
}

export const UI_LowerRight_Stage_EditLayouts = {
  encode(
    _: UI_LowerRight_Stage_EditLayouts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Stage_EditLayouts {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Stage_EditLayouts();
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

  fromJSON(_: any): UI_LowerRight_Stage_EditLayouts {
    return {};
  },

  toJSON(_: UI_LowerRight_Stage_EditLayouts): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Stage_EditLayouts>, I>>(
    base?: I,
  ): UI_LowerRight_Stage_EditLayouts {
    return UI_LowerRight_Stage_EditLayouts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Stage_EditLayouts>, I>>(
    _: I,
  ): UI_LowerRight_Stage_EditLayouts {
    const message = createBaseUI_LowerRight_Stage_EditLayouts();
    return message;
  },
};

function createBaseUI_LowerRight_AudioBin(): UI_LowerRight_AudioBin {
  return {};
}

export const UI_LowerRight_AudioBin = {
  encode(
    _: UI_LowerRight_AudioBin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_AudioBin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_AudioBin();
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

  fromJSON(_: any): UI_LowerRight_AudioBin {
    return {};
  },

  toJSON(_: UI_LowerRight_AudioBin): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_AudioBin>, I>>(
    base?: I,
  ): UI_LowerRight_AudioBin {
    return UI_LowerRight_AudioBin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_AudioBin>, I>>(
    _: I,
  ): UI_LowerRight_AudioBin {
    const message = createBaseUI_LowerRight_AudioBin();
    return message;
  },
};

function createBaseUI_LowerRight_Macros(): UI_LowerRight_Macros {
  return {
    shown: undefined,
    trigger: undefined,
    create: undefined,
    delete: undefined,
  };
}

export const UI_LowerRight_Macros = {
  encode(
    message: UI_LowerRight_Macros,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_LowerRight_Macros_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      UI_LowerRight_Macros_Trigger.encode(
        message.trigger,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.create !== undefined) {
      UI_LowerRight_Macros_Create.encode(
        message.create,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.delete !== undefined) {
      UI_LowerRight_Macros_Delete.encode(
        message.delete,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Macros {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Macros();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_LowerRight_Macros_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trigger = UI_LowerRight_Macros_Trigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.create = UI_LowerRight_Macros_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.delete = UI_LowerRight_Macros_Delete.decode(
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

  fromJSON(object: any): UI_LowerRight_Macros {
    return {
      shown: isSet(object.shown)
        ? UI_LowerRight_Macros_Shown.fromJSON(object.shown)
        : undefined,
      trigger: isSet(object.trigger)
        ? UI_LowerRight_Macros_Trigger.fromJSON(object.trigger)
        : undefined,
      create: isSet(object.create)
        ? UI_LowerRight_Macros_Create.fromJSON(object.create)
        : undefined,
      delete: isSet(object.delete)
        ? UI_LowerRight_Macros_Delete.fromJSON(object.delete)
        : undefined,
    };
  },

  toJSON(message: UI_LowerRight_Macros): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_LowerRight_Macros_Shown.toJSON(message.shown);
    }
    if (message.trigger !== undefined) {
      obj.trigger = UI_LowerRight_Macros_Trigger.toJSON(message.trigger);
    }
    if (message.create !== undefined) {
      obj.create = UI_LowerRight_Macros_Create.toJSON(message.create);
    }
    if (message.delete !== undefined) {
      obj.delete = UI_LowerRight_Macros_Delete.toJSON(message.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Macros>, I>>(
    base?: I,
  ): UI_LowerRight_Macros {
    return UI_LowerRight_Macros.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Macros>, I>>(
    object: I,
  ): UI_LowerRight_Macros {
    const message = createBaseUI_LowerRight_Macros();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_LowerRight_Macros_Shown.fromPartial(object.shown)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? UI_LowerRight_Macros_Trigger.fromPartial(object.trigger)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_LowerRight_Macros_Create.fromPartial(object.create)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? UI_LowerRight_Macros_Delete.fromPartial(object.delete)
        : undefined;
    return message;
  },
};

function createBaseUI_LowerRight_Macros_Shown(): UI_LowerRight_Macros_Shown {
  return {};
}

export const UI_LowerRight_Macros_Shown = {
  encode(
    _: UI_LowerRight_Macros_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Macros_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Macros_Shown();
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

  fromJSON(_: any): UI_LowerRight_Macros_Shown {
    return {};
  },

  toJSON(_: UI_LowerRight_Macros_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Macros_Shown>, I>>(
    base?: I,
  ): UI_LowerRight_Macros_Shown {
    return UI_LowerRight_Macros_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Macros_Shown>, I>>(
    _: I,
  ): UI_LowerRight_Macros_Shown {
    const message = createBaseUI_LowerRight_Macros_Shown();
    return message;
  },
};

function createBaseUI_LowerRight_Macros_Trigger(): UI_LowerRight_Macros_Trigger {
  return {};
}

export const UI_LowerRight_Macros_Trigger = {
  encode(
    _: UI_LowerRight_Macros_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Macros_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Macros_Trigger();
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

  fromJSON(_: any): UI_LowerRight_Macros_Trigger {
    return {};
  },

  toJSON(_: UI_LowerRight_Macros_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Macros_Trigger>, I>>(
    base?: I,
  ): UI_LowerRight_Macros_Trigger {
    return UI_LowerRight_Macros_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Macros_Trigger>, I>>(
    _: I,
  ): UI_LowerRight_Macros_Trigger {
    const message = createBaseUI_LowerRight_Macros_Trigger();
    return message;
  },
};

function createBaseUI_LowerRight_Macros_Create(): UI_LowerRight_Macros_Create {
  return {};
}

export const UI_LowerRight_Macros_Create = {
  encode(
    _: UI_LowerRight_Macros_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Macros_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Macros_Create();
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

  fromJSON(_: any): UI_LowerRight_Macros_Create {
    return {};
  },

  toJSON(_: UI_LowerRight_Macros_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Macros_Create>, I>>(
    base?: I,
  ): UI_LowerRight_Macros_Create {
    return UI_LowerRight_Macros_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Macros_Create>, I>>(
    _: I,
  ): UI_LowerRight_Macros_Create {
    const message = createBaseUI_LowerRight_Macros_Create();
    return message;
  },
};

function createBaseUI_LowerRight_Macros_Delete(): UI_LowerRight_Macros_Delete {
  return {};
}

export const UI_LowerRight_Macros_Delete = {
  encode(
    _: UI_LowerRight_Macros_Delete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_LowerRight_Macros_Delete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_LowerRight_Macros_Delete();
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

  fromJSON(_: any): UI_LowerRight_Macros_Delete {
    return {};
  },

  toJSON(_: UI_LowerRight_Macros_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_LowerRight_Macros_Delete>, I>>(
    base?: I,
  ): UI_LowerRight_Macros_Delete {
    return UI_LowerRight_Macros_Delete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_LowerRight_Macros_Delete>, I>>(
    _: I,
  ): UI_LowerRight_Macros_Delete {
    const message = createBaseUI_LowerRight_Macros_Delete();
    return message;
  },
};

function createBaseUI_TextInspector(): UI_TextInspector {
  return {
    shown: undefined,
    foreground: undefined,
    underlineColor: undefined,
    backgroundColor: undefined,
    scrollingText: undefined,
    lineTransform: undefined,
  };
}

export const UI_TextInspector = {
  encode(
    message: UI_TextInspector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_TextInspector_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.foreground !== undefined) {
      UI_TextInspector_Foreground.encode(
        message.foreground,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.underlineColor !== undefined) {
      UI_TextInspector_UnderlineColor.encode(
        message.underlineColor,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      UI_TextInspector_BackgroundColor.encode(
        message.backgroundColor,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.scrollingText !== undefined) {
      UI_TextInspector_ScrollingText.encode(
        message.scrollingText,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.lineTransform !== undefined) {
      UI_TextInspector_LineTransform.encode(
        message.lineTransform,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_TextInspector {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_TextInspector_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.foreground = UI_TextInspector_Foreground.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.underlineColor = UI_TextInspector_UnderlineColor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backgroundColor = UI_TextInspector_BackgroundColor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.scrollingText = UI_TextInspector_ScrollingText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.lineTransform = UI_TextInspector_LineTransform.decode(
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

  fromJSON(object: any): UI_TextInspector {
    return {
      shown: isSet(object.shown)
        ? UI_TextInspector_Shown.fromJSON(object.shown)
        : undefined,
      foreground: isSet(object.foreground)
        ? UI_TextInspector_Foreground.fromJSON(object.foreground)
        : undefined,
      underlineColor: isSet(object.underlineColor)
        ? UI_TextInspector_UnderlineColor.fromJSON(object.underlineColor)
        : undefined,
      backgroundColor: isSet(object.backgroundColor)
        ? UI_TextInspector_BackgroundColor.fromJSON(object.backgroundColor)
        : undefined,
      scrollingText: isSet(object.scrollingText)
        ? UI_TextInspector_ScrollingText.fromJSON(object.scrollingText)
        : undefined,
      lineTransform: isSet(object.lineTransform)
        ? UI_TextInspector_LineTransform.fromJSON(object.lineTransform)
        : undefined,
    };
  },

  toJSON(message: UI_TextInspector): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_TextInspector_Shown.toJSON(message.shown);
    }
    if (message.foreground !== undefined) {
      obj.foreground = UI_TextInspector_Foreground.toJSON(message.foreground);
    }
    if (message.underlineColor !== undefined) {
      obj.underlineColor = UI_TextInspector_UnderlineColor.toJSON(
        message.underlineColor,
      );
    }
    if (message.backgroundColor !== undefined) {
      obj.backgroundColor = UI_TextInspector_BackgroundColor.toJSON(
        message.backgroundColor,
      );
    }
    if (message.scrollingText !== undefined) {
      obj.scrollingText = UI_TextInspector_ScrollingText.toJSON(
        message.scrollingText,
      );
    }
    if (message.lineTransform !== undefined) {
      obj.lineTransform = UI_TextInspector_LineTransform.toJSON(
        message.lineTransform,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector>, I>>(
    base?: I,
  ): UI_TextInspector {
    return UI_TextInspector.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector>, I>>(
    object: I,
  ): UI_TextInspector {
    const message = createBaseUI_TextInspector();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_TextInspector_Shown.fromPartial(object.shown)
        : undefined;
    message.foreground =
      object.foreground !== undefined && object.foreground !== null
        ? UI_TextInspector_Foreground.fromPartial(object.foreground)
        : undefined;
    message.underlineColor =
      object.underlineColor !== undefined && object.underlineColor !== null
        ? UI_TextInspector_UnderlineColor.fromPartial(object.underlineColor)
        : undefined;
    message.backgroundColor =
      object.backgroundColor !== undefined && object.backgroundColor !== null
        ? UI_TextInspector_BackgroundColor.fromPartial(object.backgroundColor)
        : undefined;
    message.scrollingText =
      object.scrollingText !== undefined && object.scrollingText !== null
        ? UI_TextInspector_ScrollingText.fromPartial(object.scrollingText)
        : undefined;
    message.lineTransform =
      object.lineTransform !== undefined && object.lineTransform !== null
        ? UI_TextInspector_LineTransform.fromPartial(object.lineTransform)
        : undefined;
    return message;
  },
};

function createBaseUI_TextInspector_Shown(): UI_TextInspector_Shown {
  return {};
}

export const UI_TextInspector_Shown = {
  encode(
    _: UI_TextInspector_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_Shown();
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

  fromJSON(_: any): UI_TextInspector_Shown {
    return {};
  },

  toJSON(_: UI_TextInspector_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_Shown>, I>>(
    base?: I,
  ): UI_TextInspector_Shown {
    return UI_TextInspector_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector_Shown>, I>>(
    _: I,
  ): UI_TextInspector_Shown {
    const message = createBaseUI_TextInspector_Shown();
    return message;
  },
};

function createBaseUI_TextInspector_Foreground(): UI_TextInspector_Foreground {
  return { fillType: 0, selectionMode: 0 };
}

export const UI_TextInspector_Foreground = {
  encode(
    message: UI_TextInspector_Foreground,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fillType !== 0) {
      writer.uint32(8).int32(message.fillType);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_Foreground {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_Foreground();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fillType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TextInspector_Foreground {
    return {
      fillType: isSet(object.fillType)
        ? uI_TextInspector_Foreground_FillTypeFromJSON(object.fillType)
        : 0,
      selectionMode: isSet(object.selectionMode)
        ? uI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: UI_TextInspector_Foreground): unknown {
    const obj: any = {};
    if (message.fillType !== 0) {
      obj.fillType = uI_TextInspector_Foreground_FillTypeToJSON(
        message.fillType,
      );
    }
    if (message.selectionMode !== 0) {
      obj.selectionMode = uI_TextInspector_SelectionModeToJSON(
        message.selectionMode,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_Foreground>, I>>(
    base?: I,
  ): UI_TextInspector_Foreground {
    return UI_TextInspector_Foreground.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector_Foreground>, I>>(
    object: I,
  ): UI_TextInspector_Foreground {
    const message = createBaseUI_TextInspector_Foreground();
    message.fillType = object.fillType ?? 0;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseUI_TextInspector_UnderlineColor(): UI_TextInspector_UnderlineColor {
  return { isEnabled: false, selectionMode: 0 };
}

export const UI_TextInspector_UnderlineColor = {
  encode(
    message: UI_TextInspector_UnderlineColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isEnabled !== false) {
      writer.uint32(8).bool(message.isEnabled);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_UnderlineColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_UnderlineColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TextInspector_UnderlineColor {
    return {
      isEnabled: isSet(object.isEnabled)
        ? globalThis.Boolean(object.isEnabled)
        : false,
      selectionMode: isSet(object.selectionMode)
        ? uI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: UI_TextInspector_UnderlineColor): unknown {
    const obj: any = {};
    if (message.isEnabled !== false) {
      obj.isEnabled = message.isEnabled;
    }
    if (message.selectionMode !== 0) {
      obj.selectionMode = uI_TextInspector_SelectionModeToJSON(
        message.selectionMode,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_UnderlineColor>, I>>(
    base?: I,
  ): UI_TextInspector_UnderlineColor {
    return UI_TextInspector_UnderlineColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector_UnderlineColor>, I>>(
    object: I,
  ): UI_TextInspector_UnderlineColor {
    const message = createBaseUI_TextInspector_UnderlineColor();
    message.isEnabled = object.isEnabled ?? false;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseUI_TextInspector_BackgroundColor(): UI_TextInspector_BackgroundColor {
  return { colorType: 0, selectionMode: 0 };
}

export const UI_TextInspector_BackgroundColor = {
  encode(
    message: UI_TextInspector_BackgroundColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.colorType !== 0) {
      writer.uint32(8).int32(message.colorType);
    }
    if (message.selectionMode !== 0) {
      writer.uint32(16).int32(message.selectionMode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_BackgroundColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_BackgroundColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.colorType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.selectionMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TextInspector_BackgroundColor {
    return {
      colorType: isSet(object.colorType)
        ? uI_TextInspector_BackgroundColor_ColorTypeFromJSON(object.colorType)
        : 0,
      selectionMode: isSet(object.selectionMode)
        ? uI_TextInspector_SelectionModeFromJSON(object.selectionMode)
        : 0,
    };
  },

  toJSON(message: UI_TextInspector_BackgroundColor): unknown {
    const obj: any = {};
    if (message.colorType !== 0) {
      obj.colorType = uI_TextInspector_BackgroundColor_ColorTypeToJSON(
        message.colorType,
      );
    }
    if (message.selectionMode !== 0) {
      obj.selectionMode = uI_TextInspector_SelectionModeToJSON(
        message.selectionMode,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_BackgroundColor>, I>>(
    base?: I,
  ): UI_TextInspector_BackgroundColor {
    return UI_TextInspector_BackgroundColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_TextInspector_BackgroundColor>, I>,
  >(object: I): UI_TextInspector_BackgroundColor {
    const message = createBaseUI_TextInspector_BackgroundColor();
    message.colorType = object.colorType ?? 0;
    message.selectionMode = object.selectionMode ?? 0;
    return message;
  },
};

function createBaseUI_TextInspector_ScrollingText(): UI_TextInspector_ScrollingText {
  return { enable: undefined };
}

export const UI_TextInspector_ScrollingText = {
  encode(
    message: UI_TextInspector_ScrollingText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enable !== undefined) {
      UI_TextInspector_ScrollingText_Enable.encode(
        message.enable,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_ScrollingText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_ScrollingText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enable = UI_TextInspector_ScrollingText_Enable.decode(
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

  fromJSON(object: any): UI_TextInspector_ScrollingText {
    return {
      enable: isSet(object.enable)
        ? UI_TextInspector_ScrollingText_Enable.fromJSON(object.enable)
        : undefined,
    };
  },

  toJSON(message: UI_TextInspector_ScrollingText): unknown {
    const obj: any = {};
    if (message.enable !== undefined) {
      obj.enable = UI_TextInspector_ScrollingText_Enable.toJSON(message.enable);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_ScrollingText>, I>>(
    base?: I,
  ): UI_TextInspector_ScrollingText {
    return UI_TextInspector_ScrollingText.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector_ScrollingText>, I>>(
    object: I,
  ): UI_TextInspector_ScrollingText {
    const message = createBaseUI_TextInspector_ScrollingText();
    message.enable =
      object.enable !== undefined && object.enable !== null
        ? UI_TextInspector_ScrollingText_Enable.fromPartial(object.enable)
        : undefined;
    return message;
  },
};

function createBaseUI_TextInspector_ScrollingText_Enable(): UI_TextInspector_ScrollingText_Enable {
  return { enabled: false };
}

export const UI_TextInspector_ScrollingText_Enable = {
  encode(
    message: UI_TextInspector_ScrollingText_Enable,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled !== false) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_ScrollingText_Enable {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_ScrollingText_Enable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TextInspector_ScrollingText_Enable {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
    };
  },

  toJSON(message: UI_TextInspector_ScrollingText_Enable): unknown {
    const obj: any = {};
    if (message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<UI_TextInspector_ScrollingText_Enable>, I>,
  >(base?: I): UI_TextInspector_ScrollingText_Enable {
    return UI_TextInspector_ScrollingText_Enable.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_TextInspector_ScrollingText_Enable>, I>,
  >(object: I): UI_TextInspector_ScrollingText_Enable {
    const message = createBaseUI_TextInspector_ScrollingText_Enable();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseUI_TextInspector_LineTransform(): UI_TextInspector_LineTransform {
  return { transformType: 0 };
}

export const UI_TextInspector_LineTransform = {
  encode(
    message: UI_TextInspector_LineTransform,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.transformType !== 0) {
      writer.uint32(8).int32(message.transformType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TextInspector_LineTransform {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TextInspector_LineTransform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.transformType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TextInspector_LineTransform {
    return {
      transformType: isSet(object.transformType)
        ? uI_TextInspector_LineTransform_TransformTypeFromJSON(
            object.transformType,
          )
        : 0,
    };
  },

  toJSON(message: UI_TextInspector_LineTransform): unknown {
    const obj: any = {};
    if (message.transformType !== 0) {
      obj.transformType = uI_TextInspector_LineTransform_TransformTypeToJSON(
        message.transformType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TextInspector_LineTransform>, I>>(
    base?: I,
  ): UI_TextInspector_LineTransform {
    return UI_TextInspector_LineTransform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TextInspector_LineTransform>, I>>(
    object: I,
  ): UI_TextInspector_LineTransform {
    const message = createBaseUI_TextInspector_LineTransform();
    message.transformType = object.transformType ?? 0;
    return message;
  },
};

function createBaseUI_Show(): UI_Show {
  return { slideLabel: undefined };
}

export const UI_Show = {
  encode(
    message: UI_Show,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.slideLabel !== undefined) {
      UI_Show_SlideLabel.encode(
        message.slideLabel,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Show {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Show();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slideLabel = UI_Show_SlideLabel.decode(
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

  fromJSON(object: any): UI_Show {
    return {
      slideLabel: isSet(object.slideLabel)
        ? UI_Show_SlideLabel.fromJSON(object.slideLabel)
        : undefined,
    };
  },

  toJSON(message: UI_Show): unknown {
    const obj: any = {};
    if (message.slideLabel !== undefined) {
      obj.slideLabel = UI_Show_SlideLabel.toJSON(message.slideLabel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Show>, I>>(base?: I): UI_Show {
    return UI_Show.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Show>, I>>(object: I): UI_Show {
    const message = createBaseUI_Show();
    message.slideLabel =
      object.slideLabel !== undefined && object.slideLabel !== null
        ? UI_Show_SlideLabel.fromPartial(object.slideLabel)
        : undefined;
    return message;
  },
};

function createBaseUI_Show_SlideLabel(): UI_Show_SlideLabel {
  return { shown: undefined, change: undefined };
}

export const UI_Show_SlideLabel = {
  encode(
    message: UI_Show_SlideLabel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Show_SlideLabel_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.change !== undefined) {
      UI_Show_SlideLabel_Change.encode(
        message.change,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Show_SlideLabel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Show_SlideLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Show_SlideLabel_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.change = UI_Show_SlideLabel_Change.decode(
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

  fromJSON(object: any): UI_Show_SlideLabel {
    return {
      shown: isSet(object.shown)
        ? UI_Show_SlideLabel_Shown.fromJSON(object.shown)
        : undefined,
      change: isSet(object.change)
        ? UI_Show_SlideLabel_Change.fromJSON(object.change)
        : undefined,
    };
  },

  toJSON(message: UI_Show_SlideLabel): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Show_SlideLabel_Shown.toJSON(message.shown);
    }
    if (message.change !== undefined) {
      obj.change = UI_Show_SlideLabel_Change.toJSON(message.change);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Show_SlideLabel>, I>>(
    base?: I,
  ): UI_Show_SlideLabel {
    return UI_Show_SlideLabel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Show_SlideLabel>, I>>(
    object: I,
  ): UI_Show_SlideLabel {
    const message = createBaseUI_Show_SlideLabel();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Show_SlideLabel_Shown.fromPartial(object.shown)
        : undefined;
    message.change =
      object.change !== undefined && object.change !== null
        ? UI_Show_SlideLabel_Change.fromPartial(object.change)
        : undefined;
    return message;
  },
};

function createBaseUI_Show_SlideLabel_Shown(): UI_Show_SlideLabel_Shown {
  return {};
}

export const UI_Show_SlideLabel_Shown = {
  encode(
    _: UI_Show_SlideLabel_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Show_SlideLabel_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Show_SlideLabel_Shown();
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

  fromJSON(_: any): UI_Show_SlideLabel_Shown {
    return {};
  },

  toJSON(_: UI_Show_SlideLabel_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Show_SlideLabel_Shown>, I>>(
    base?: I,
  ): UI_Show_SlideLabel_Shown {
    return UI_Show_SlideLabel_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Show_SlideLabel_Shown>, I>>(
    _: I,
  ): UI_Show_SlideLabel_Shown {
    const message = createBaseUI_Show_SlideLabel_Shown();
    return message;
  },
};

function createBaseUI_Show_SlideLabel_Change(): UI_Show_SlideLabel_Change {
  return { numberOfSlides: 0, source: 0 };
}

export const UI_Show_SlideLabel_Change = {
  encode(
    message: UI_Show_SlideLabel_Change,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.numberOfSlides !== 0) {
      writer.uint32(8).int32(message.numberOfSlides);
    }
    if (message.source !== 0) {
      writer.uint32(16).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Show_SlideLabel_Change {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Show_SlideLabel_Change();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberOfSlides = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Show_SlideLabel_Change {
    return {
      numberOfSlides: isSet(object.numberOfSlides)
        ? globalThis.Number(object.numberOfSlides)
        : 0,
      source: isSet(object.source)
        ? uI_Show_SlideLabel_Change_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_Show_SlideLabel_Change): unknown {
    const obj: any = {};
    if (message.numberOfSlides !== 0) {
      obj.numberOfSlides = Math.round(message.numberOfSlides);
    }
    if (message.source !== 0) {
      obj.source = uI_Show_SlideLabel_Change_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Show_SlideLabel_Change>, I>>(
    base?: I,
  ): UI_Show_SlideLabel_Change {
    return UI_Show_SlideLabel_Change.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Show_SlideLabel_Change>, I>>(
    object: I,
  ): UI_Show_SlideLabel_Change {
    const message = createBaseUI_Show_SlideLabel_Change();
    message.numberOfSlides = object.numberOfSlides ?? 0;
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_InAppStore(): UI_InAppStore {
  return { trial: undefined };
}

export const UI_InAppStore = {
  encode(
    message: UI_InAppStore,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trial !== undefined) {
      UI_InAppStore_Trial.encode(
        message.trial,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_InAppStore {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_InAppStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trial = UI_InAppStore_Trial.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_InAppStore {
    return {
      trial: isSet(object.trial)
        ? UI_InAppStore_Trial.fromJSON(object.trial)
        : undefined,
    };
  },

  toJSON(message: UI_InAppStore): unknown {
    const obj: any = {};
    if (message.trial !== undefined) {
      obj.trial = UI_InAppStore_Trial.toJSON(message.trial);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_InAppStore>, I>>(
    base?: I,
  ): UI_InAppStore {
    return UI_InAppStore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_InAppStore>, I>>(
    object: I,
  ): UI_InAppStore {
    const message = createBaseUI_InAppStore();
    message.trial =
      object.trial !== undefined && object.trial !== null
        ? UI_InAppStore_Trial.fromPartial(object.trial)
        : undefined;
    return message;
  },
};

function createBaseUI_InAppStore_Trial(): UI_InAppStore_Trial {
  return { shown: undefined, complete: undefined };
}

export const UI_InAppStore_Trial = {
  encode(
    message: UI_InAppStore_Trial,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_InAppStore_Trial_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.complete !== undefined) {
      UI_InAppStore_Trial_Complete.encode(
        message.complete,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_InAppStore_Trial {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_InAppStore_Trial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_InAppStore_Trial_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.complete = UI_InAppStore_Trial_Complete.decode(
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

  fromJSON(object: any): UI_InAppStore_Trial {
    return {
      shown: isSet(object.shown)
        ? UI_InAppStore_Trial_Shown.fromJSON(object.shown)
        : undefined,
      complete: isSet(object.complete)
        ? UI_InAppStore_Trial_Complete.fromJSON(object.complete)
        : undefined,
    };
  },

  toJSON(message: UI_InAppStore_Trial): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_InAppStore_Trial_Shown.toJSON(message.shown);
    }
    if (message.complete !== undefined) {
      obj.complete = UI_InAppStore_Trial_Complete.toJSON(message.complete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_InAppStore_Trial>, I>>(
    base?: I,
  ): UI_InAppStore_Trial {
    return UI_InAppStore_Trial.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_InAppStore_Trial>, I>>(
    object: I,
  ): UI_InAppStore_Trial {
    const message = createBaseUI_InAppStore_Trial();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_InAppStore_Trial_Shown.fromPartial(object.shown)
        : undefined;
    message.complete =
      object.complete !== undefined && object.complete !== null
        ? UI_InAppStore_Trial_Complete.fromPartial(object.complete)
        : undefined;
    return message;
  },
};

function createBaseUI_InAppStore_Trial_Shown(): UI_InAppStore_Trial_Shown {
  return {};
}

export const UI_InAppStore_Trial_Shown = {
  encode(
    _: UI_InAppStore_Trial_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_InAppStore_Trial_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_InAppStore_Trial_Shown();
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

  fromJSON(_: any): UI_InAppStore_Trial_Shown {
    return {};
  },

  toJSON(_: UI_InAppStore_Trial_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_InAppStore_Trial_Shown>, I>>(
    base?: I,
  ): UI_InAppStore_Trial_Shown {
    return UI_InAppStore_Trial_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_InAppStore_Trial_Shown>, I>>(
    _: I,
  ): UI_InAppStore_Trial_Shown {
    const message = createBaseUI_InAppStore_Trial_Shown();
    return message;
  },
};

function createBaseUI_InAppStore_Trial_Complete(): UI_InAppStore_Trial_Complete {
  return { result: 0 };
}

export const UI_InAppStore_Trial_Complete = {
  encode(
    message: UI_InAppStore_Trial_Complete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_InAppStore_Trial_Complete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_InAppStore_Trial_Complete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_InAppStore_Trial_Complete {
    return {
      result: isSet(object.result)
        ? uI_InAppStore_Trial_Complete_ResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: UI_InAppStore_Trial_Complete): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = uI_InAppStore_Trial_Complete_ResultToJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_InAppStore_Trial_Complete>, I>>(
    base?: I,
  ): UI_InAppStore_Trial_Complete {
    return UI_InAppStore_Trial_Complete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_InAppStore_Trial_Complete>, I>>(
    object: I,
  ): UI_InAppStore_Trial_Complete {
    const message = createBaseUI_InAppStore_Trial_Complete();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseUI_Editor(): UI_Editor {
  return { overlay: undefined };
}

export const UI_Editor = {
  encode(
    message: UI_Editor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.overlay !== undefined) {
      UI_Editor_Overlay.encode(
        message.overlay,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Editor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Editor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.overlay = UI_Editor_Overlay.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Editor {
    return {
      overlay: isSet(object.overlay)
        ? UI_Editor_Overlay.fromJSON(object.overlay)
        : undefined,
    };
  },

  toJSON(message: UI_Editor): unknown {
    const obj: any = {};
    if (message.overlay !== undefined) {
      obj.overlay = UI_Editor_Overlay.toJSON(message.overlay);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Editor>, I>>(base?: I): UI_Editor {
    return UI_Editor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Editor>, I>>(
    object: I,
  ): UI_Editor {
    const message = createBaseUI_Editor();
    message.overlay =
      object.overlay !== undefined && object.overlay !== null
        ? UI_Editor_Overlay.fromPartial(object.overlay)
        : undefined;
    return message;
  },
};

function createBaseUI_Editor_Overlay(): UI_Editor_Overlay {
  return { shown: undefined, closed: undefined };
}

export const UI_Editor_Overlay = {
  encode(
    message: UI_Editor_Overlay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Editor_Overlay_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.closed !== undefined) {
      UI_Editor_Overlay_Closed.encode(
        message.closed,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Editor_Overlay {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Editor_Overlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Editor_Overlay_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.closed = UI_Editor_Overlay_Closed.decode(
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

  fromJSON(object: any): UI_Editor_Overlay {
    return {
      shown: isSet(object.shown)
        ? UI_Editor_Overlay_Shown.fromJSON(object.shown)
        : undefined,
      closed: isSet(object.closed)
        ? UI_Editor_Overlay_Closed.fromJSON(object.closed)
        : undefined,
    };
  },

  toJSON(message: UI_Editor_Overlay): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Editor_Overlay_Shown.toJSON(message.shown);
    }
    if (message.closed !== undefined) {
      obj.closed = UI_Editor_Overlay_Closed.toJSON(message.closed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Editor_Overlay>, I>>(
    base?: I,
  ): UI_Editor_Overlay {
    return UI_Editor_Overlay.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Editor_Overlay>, I>>(
    object: I,
  ): UI_Editor_Overlay {
    const message = createBaseUI_Editor_Overlay();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Editor_Overlay_Shown.fromPartial(object.shown)
        : undefined;
    message.closed =
      object.closed !== undefined && object.closed !== null
        ? UI_Editor_Overlay_Closed.fromPartial(object.closed)
        : undefined;
    return message;
  },
};

function createBaseUI_Editor_Overlay_Shown(): UI_Editor_Overlay_Shown {
  return { source: 0 };
}

export const UI_Editor_Overlay_Shown = {
  encode(
    message: UI_Editor_Overlay_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Editor_Overlay_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Editor_Overlay_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Editor_Overlay_Shown {
    return {
      source: isSet(object.source)
        ? uI_Editor_Overlay_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_Editor_Overlay_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_Editor_Overlay_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Editor_Overlay_Shown>, I>>(
    base?: I,
  ): UI_Editor_Overlay_Shown {
    return UI_Editor_Overlay_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Editor_Overlay_Shown>, I>>(
    object: I,
  ): UI_Editor_Overlay_Shown {
    const message = createBaseUI_Editor_Overlay_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_Editor_Overlay_Closed(): UI_Editor_Overlay_Closed {
  return { source: 0 };
}

export const UI_Editor_Overlay_Closed = {
  encode(
    message: UI_Editor_Overlay_Closed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Editor_Overlay_Closed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Editor_Overlay_Closed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Editor_Overlay_Closed {
    return {
      source: isSet(object.source)
        ? uI_Editor_Overlay_Closed_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_Editor_Overlay_Closed): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_Editor_Overlay_Closed_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Editor_Overlay_Closed>, I>>(
    base?: I,
  ): UI_Editor_Overlay_Closed {
    return UI_Editor_Overlay_Closed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Editor_Overlay_Closed>, I>>(
    object: I,
  ): UI_Editor_Overlay_Closed {
    const message = createBaseUI_Editor_Overlay_Closed();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_WhatsNew(): UI_WhatsNew {
  return { viewed: undefined };
}

export const UI_WhatsNew = {
  encode(
    message: UI_WhatsNew,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.viewed !== undefined) {
      UI_WhatsNew_Viewed.encode(
        message.viewed,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_WhatsNew {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WhatsNew();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.viewed = UI_WhatsNew_Viewed.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_WhatsNew {
    return {
      viewed: isSet(object.viewed)
        ? UI_WhatsNew_Viewed.fromJSON(object.viewed)
        : undefined,
    };
  },

  toJSON(message: UI_WhatsNew): unknown {
    const obj: any = {};
    if (message.viewed !== undefined) {
      obj.viewed = UI_WhatsNew_Viewed.toJSON(message.viewed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WhatsNew>, I>>(base?: I): UI_WhatsNew {
    return UI_WhatsNew.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_WhatsNew>, I>>(
    object: I,
  ): UI_WhatsNew {
    const message = createBaseUI_WhatsNew();
    message.viewed =
      object.viewed !== undefined && object.viewed !== null
        ? UI_WhatsNew_Viewed.fromPartial(object.viewed)
        : undefined;
    return message;
  },
};

function createBaseUI_WhatsNew_Viewed(): UI_WhatsNew_Viewed {
  return { version: '', resourceName: '', viewTime: 0 };
}

export const UI_WhatsNew_Viewed = {
  encode(
    message: UI_WhatsNew_Viewed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== '') {
      writer.uint32(10).string(message.version);
    }
    if (message.resourceName !== '') {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.viewTime !== 0) {
      writer.uint32(24).int32(message.viewTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_WhatsNew_Viewed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WhatsNew_Viewed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.viewTime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_WhatsNew_Viewed {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : '',
      resourceName: isSet(object.resourceName)
        ? globalThis.String(object.resourceName)
        : '',
      viewTime: isSet(object.viewTime) ? globalThis.Number(object.viewTime) : 0,
    };
  },

  toJSON(message: UI_WhatsNew_Viewed): unknown {
    const obj: any = {};
    if (message.version !== '') {
      obj.version = message.version;
    }
    if (message.resourceName !== '') {
      obj.resourceName = message.resourceName;
    }
    if (message.viewTime !== 0) {
      obj.viewTime = Math.round(message.viewTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WhatsNew_Viewed>, I>>(
    base?: I,
  ): UI_WhatsNew_Viewed {
    return UI_WhatsNew_Viewed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_WhatsNew_Viewed>, I>>(
    object: I,
  ): UI_WhatsNew_Viewed {
    const message = createBaseUI_WhatsNew_Viewed();
    message.version = object.version ?? '';
    message.resourceName = object.resourceName ?? '';
    message.viewTime = object.viewTime ?? 0;
    return message;
  },
};

function createBaseUI_ClearGroups(): UI_ClearGroups {
  return {
    shown: undefined,
    create: undefined,
    delete: undefined,
    group: undefined,
  };
}

export const UI_ClearGroups = {
  encode(
    message: UI_ClearGroups,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_ClearGroups_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.create !== undefined) {
      UI_ClearGroups_Create.encode(
        message.create,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.delete !== undefined) {
      UI_ClearGroups_Delete.encode(
        message.delete,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.group !== undefined) {
      UI_ClearGroups_Group.encode(
        message.group,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_ClearGroups {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_ClearGroups_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.create = UI_ClearGroups_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.delete = UI_ClearGroups_Delete.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.group = UI_ClearGroups_Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_ClearGroups {
    return {
      shown: isSet(object.shown)
        ? UI_ClearGroups_Shown.fromJSON(object.shown)
        : undefined,
      create: isSet(object.create)
        ? UI_ClearGroups_Create.fromJSON(object.create)
        : undefined,
      delete: isSet(object.delete)
        ? UI_ClearGroups_Delete.fromJSON(object.delete)
        : undefined,
      group: isSet(object.group)
        ? UI_ClearGroups_Group.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: UI_ClearGroups): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_ClearGroups_Shown.toJSON(message.shown);
    }
    if (message.create !== undefined) {
      obj.create = UI_ClearGroups_Create.toJSON(message.create);
    }
    if (message.delete !== undefined) {
      obj.delete = UI_ClearGroups_Delete.toJSON(message.delete);
    }
    if (message.group !== undefined) {
      obj.group = UI_ClearGroups_Group.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups>, I>>(
    base?: I,
  ): UI_ClearGroups {
    return UI_ClearGroups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups>, I>>(
    object: I,
  ): UI_ClearGroups {
    const message = createBaseUI_ClearGroups();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_ClearGroups_Shown.fromPartial(object.shown)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_ClearGroups_Create.fromPartial(object.create)
        : undefined;
    message.delete =
      object.delete !== undefined && object.delete !== null
        ? UI_ClearGroups_Delete.fromPartial(object.delete)
        : undefined;
    message.group =
      object.group !== undefined && object.group !== null
        ? UI_ClearGroups_Group.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseUI_ClearGroups_Shown(): UI_ClearGroups_Shown {
  return { source: 0 };
}

export const UI_ClearGroups_Shown = {
  encode(
    message: UI_ClearGroups_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_ClearGroups_Shown {
    return {
      source: isSet(object.source)
        ? uI_ClearGroups_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_ClearGroups_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_ClearGroups_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups_Shown>, I>>(
    base?: I,
  ): UI_ClearGroups_Shown {
    return UI_ClearGroups_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups_Shown>, I>>(
    object: I,
  ): UI_ClearGroups_Shown {
    const message = createBaseUI_ClearGroups_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_ClearGroups_Create(): UI_ClearGroups_Create {
  return {};
}

export const UI_ClearGroups_Create = {
  encode(
    _: UI_ClearGroups_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Create();
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

  fromJSON(_: any): UI_ClearGroups_Create {
    return {};
  },

  toJSON(_: UI_ClearGroups_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups_Create>, I>>(
    base?: I,
  ): UI_ClearGroups_Create {
    return UI_ClearGroups_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups_Create>, I>>(
    _: I,
  ): UI_ClearGroups_Create {
    const message = createBaseUI_ClearGroups_Create();
    return message;
  },
};

function createBaseUI_ClearGroups_Delete(): UI_ClearGroups_Delete {
  return {};
}

export const UI_ClearGroups_Delete = {
  encode(
    _: UI_ClearGroups_Delete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Delete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Delete();
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

  fromJSON(_: any): UI_ClearGroups_Delete {
    return {};
  },

  toJSON(_: UI_ClearGroups_Delete): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups_Delete>, I>>(
    base?: I,
  ): UI_ClearGroups_Delete {
    return UI_ClearGroups_Delete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups_Delete>, I>>(
    _: I,
  ): UI_ClearGroups_Delete {
    const message = createBaseUI_ClearGroups_Delete();
    return message;
  },
};

function createBaseUI_ClearGroups_Group(): UI_ClearGroups_Group {
  return { changeVisibility: undefined, changeIcon: undefined };
}

export const UI_ClearGroups_Group = {
  encode(
    message: UI_ClearGroups_Group,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.changeVisibility !== undefined) {
      UI_ClearGroups_Group_ChangeVisibility.encode(
        message.changeVisibility,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.changeIcon !== undefined) {
      UI_ClearGroups_Group_ChangeIcon.encode(
        message.changeIcon,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Group {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changeVisibility =
            UI_ClearGroups_Group_ChangeVisibility.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changeIcon = UI_ClearGroups_Group_ChangeIcon.decode(
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

  fromJSON(object: any): UI_ClearGroups_Group {
    return {
      changeVisibility: isSet(object.changeVisibility)
        ? UI_ClearGroups_Group_ChangeVisibility.fromJSON(
            object.changeVisibility,
          )
        : undefined,
      changeIcon: isSet(object.changeIcon)
        ? UI_ClearGroups_Group_ChangeIcon.fromJSON(object.changeIcon)
        : undefined,
    };
  },

  toJSON(message: UI_ClearGroups_Group): unknown {
    const obj: any = {};
    if (message.changeVisibility !== undefined) {
      obj.changeVisibility = UI_ClearGroups_Group_ChangeVisibility.toJSON(
        message.changeVisibility,
      );
    }
    if (message.changeIcon !== undefined) {
      obj.changeIcon = UI_ClearGroups_Group_ChangeIcon.toJSON(
        message.changeIcon,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups_Group>, I>>(
    base?: I,
  ): UI_ClearGroups_Group {
    return UI_ClearGroups_Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups_Group>, I>>(
    object: I,
  ): UI_ClearGroups_Group {
    const message = createBaseUI_ClearGroups_Group();
    message.changeVisibility =
      object.changeVisibility !== undefined && object.changeVisibility !== null
        ? UI_ClearGroups_Group_ChangeVisibility.fromPartial(
            object.changeVisibility,
          )
        : undefined;
    message.changeIcon =
      object.changeIcon !== undefined && object.changeIcon !== null
        ? UI_ClearGroups_Group_ChangeIcon.fromPartial(object.changeIcon)
        : undefined;
    return message;
  },
};

function createBaseUI_ClearGroups_Group_ChangeVisibility(): UI_ClearGroups_Group_ChangeVisibility {
  return { visibility: 0 };
}

export const UI_ClearGroups_Group_ChangeVisibility = {
  encode(
    message: UI_ClearGroups_Group_ChangeVisibility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibility !== 0) {
      writer.uint32(8).int32(message.visibility);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Group_ChangeVisibility {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Group_ChangeVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.visibility = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_ClearGroups_Group_ChangeVisibility {
    return {
      visibility: isSet(object.visibility)
        ? uI_ClearGroups_Group_ChangeVisibility_VisibilityFromJSON(
            object.visibility,
          )
        : 0,
    };
  },

  toJSON(message: UI_ClearGroups_Group_ChangeVisibility): unknown {
    const obj: any = {};
    if (message.visibility !== 0) {
      obj.visibility = uI_ClearGroups_Group_ChangeVisibility_VisibilityToJSON(
        message.visibility,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<UI_ClearGroups_Group_ChangeVisibility>, I>,
  >(base?: I): UI_ClearGroups_Group_ChangeVisibility {
    return UI_ClearGroups_Group_ChangeVisibility.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_ClearGroups_Group_ChangeVisibility>, I>,
  >(object: I): UI_ClearGroups_Group_ChangeVisibility {
    const message = createBaseUI_ClearGroups_Group_ChangeVisibility();
    message.visibility = object.visibility ?? 0;
    return message;
  },
};

function createBaseUI_ClearGroups_Group_ChangeIcon(): UI_ClearGroups_Group_ChangeIcon {
  return { iconType: 0, isTinted: false };
}

export const UI_ClearGroups_Group_ChangeIcon = {
  encode(
    message: UI_ClearGroups_Group_ChangeIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.iconType !== 0) {
      writer.uint32(8).int32(message.iconType);
    }
    if (message.isTinted !== false) {
      writer.uint32(16).bool(message.isTinted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_ClearGroups_Group_ChangeIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_ClearGroups_Group_ChangeIcon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.iconType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isTinted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_ClearGroups_Group_ChangeIcon {
    return {
      iconType: isSet(object.iconType)
        ? uI_ClearGroups_Group_ChangeIcon_IconTypeFromJSON(object.iconType)
        : 0,
      isTinted: isSet(object.isTinted)
        ? globalThis.Boolean(object.isTinted)
        : false,
    };
  },

  toJSON(message: UI_ClearGroups_Group_ChangeIcon): unknown {
    const obj: any = {};
    if (message.iconType !== 0) {
      obj.iconType = uI_ClearGroups_Group_ChangeIcon_IconTypeToJSON(
        message.iconType,
      );
    }
    if (message.isTinted !== false) {
      obj.isTinted = message.isTinted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_ClearGroups_Group_ChangeIcon>, I>>(
    base?: I,
  ): UI_ClearGroups_Group_ChangeIcon {
    return UI_ClearGroups_Group_ChangeIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_ClearGroups_Group_ChangeIcon>, I>>(
    object: I,
  ): UI_ClearGroups_Group_ChangeIcon {
    const message = createBaseUI_ClearGroups_Group_ChangeIcon();
    message.iconType = object.iconType ?? 0;
    message.isTinted = object.isTinted ?? false;
    return message;
  },
};

function createBaseUI_PreviewArea(): UI_PreviewArea {
  return { clearGroups: undefined };
}

export const UI_PreviewArea = {
  encode(
    message: UI_PreviewArea,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clearGroups !== undefined) {
      UI_PreviewArea_ClearGroups.encode(
        message.clearGroups,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_PreviewArea {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PreviewArea();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clearGroups = UI_PreviewArea_ClearGroups.decode(
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

  fromJSON(object: any): UI_PreviewArea {
    return {
      clearGroups: isSet(object.clearGroups)
        ? UI_PreviewArea_ClearGroups.fromJSON(object.clearGroups)
        : undefined,
    };
  },

  toJSON(message: UI_PreviewArea): unknown {
    const obj: any = {};
    if (message.clearGroups !== undefined) {
      obj.clearGroups = UI_PreviewArea_ClearGroups.toJSON(message.clearGroups);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PreviewArea>, I>>(
    base?: I,
  ): UI_PreviewArea {
    return UI_PreviewArea.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_PreviewArea>, I>>(
    object: I,
  ): UI_PreviewArea {
    const message = createBaseUI_PreviewArea();
    message.clearGroups =
      object.clearGroups !== undefined && object.clearGroups !== null
        ? UI_PreviewArea_ClearGroups.fromPartial(object.clearGroups)
        : undefined;
    return message;
  },
};

function createBaseUI_PreviewArea_ClearGroups(): UI_PreviewArea_ClearGroups {
  return { trigger: undefined, changed: undefined };
}

export const UI_PreviewArea_ClearGroups = {
  encode(
    message: UI_PreviewArea_ClearGroups,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trigger !== undefined) {
      UI_PreviewArea_ClearGroups_Trigger.encode(
        message.trigger,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.changed !== undefined) {
      UI_PreviewArea_ClearGroups_Changed.encode(
        message.changed,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_PreviewArea_ClearGroups {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PreviewArea_ClearGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trigger = UI_PreviewArea_ClearGroups_Trigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changed = UI_PreviewArea_ClearGroups_Changed.decode(
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

  fromJSON(object: any): UI_PreviewArea_ClearGroups {
    return {
      trigger: isSet(object.trigger)
        ? UI_PreviewArea_ClearGroups_Trigger.fromJSON(object.trigger)
        : undefined,
      changed: isSet(object.changed)
        ? UI_PreviewArea_ClearGroups_Changed.fromJSON(object.changed)
        : undefined,
    };
  },

  toJSON(message: UI_PreviewArea_ClearGroups): unknown {
    const obj: any = {};
    if (message.trigger !== undefined) {
      obj.trigger = UI_PreviewArea_ClearGroups_Trigger.toJSON(message.trigger);
    }
    if (message.changed !== undefined) {
      obj.changed = UI_PreviewArea_ClearGroups_Changed.toJSON(message.changed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups>, I>>(
    base?: I,
  ): UI_PreviewArea_ClearGroups {
    return UI_PreviewArea_ClearGroups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups>, I>>(
    object: I,
  ): UI_PreviewArea_ClearGroups {
    const message = createBaseUI_PreviewArea_ClearGroups();
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? UI_PreviewArea_ClearGroups_Trigger.fromPartial(object.trigger)
        : undefined;
    message.changed =
      object.changed !== undefined && object.changed !== null
        ? UI_PreviewArea_ClearGroups_Changed.fromPartial(object.changed)
        : undefined;
    return message;
  },
};

function createBaseUI_PreviewArea_ClearGroups_Trigger(): UI_PreviewArea_ClearGroups_Trigger {
  return {};
}

export const UI_PreviewArea_ClearGroups_Trigger = {
  encode(
    _: UI_PreviewArea_ClearGroups_Trigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_PreviewArea_ClearGroups_Trigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PreviewArea_ClearGroups_Trigger();
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

  fromJSON(_: any): UI_PreviewArea_ClearGroups_Trigger {
    return {};
  },

  toJSON(_: UI_PreviewArea_ClearGroups_Trigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups_Trigger>, I>>(
    base?: I,
  ): UI_PreviewArea_ClearGroups_Trigger {
    return UI_PreviewArea_ClearGroups_Trigger.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups_Trigger>, I>,
  >(_: I): UI_PreviewArea_ClearGroups_Trigger {
    const message = createBaseUI_PreviewArea_ClearGroups_Trigger();
    return message;
  },
};

function createBaseUI_PreviewArea_ClearGroups_Changed(): UI_PreviewArea_ClearGroups_Changed {
  return { count: 0 };
}

export const UI_PreviewArea_ClearGroups_Changed = {
  encode(
    message: UI_PreviewArea_ClearGroups_Changed,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_PreviewArea_ClearGroups_Changed {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PreviewArea_ClearGroups_Changed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): UI_PreviewArea_ClearGroups_Changed {
    return { count: isSet(object.count) ? globalThis.Number(object.count) : 0 };
  },

  toJSON(message: UI_PreviewArea_ClearGroups_Changed): unknown {
    const obj: any = {};
    if (message.count !== 0) {
      obj.count = Math.round(message.count);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups_Changed>, I>>(
    base?: I,
  ): UI_PreviewArea_ClearGroups_Changed {
    return UI_PreviewArea_ClearGroups_Changed.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_PreviewArea_ClearGroups_Changed>, I>,
  >(object: I): UI_PreviewArea_ClearGroups_Changed {
    const message = createBaseUI_PreviewArea_ClearGroups_Changed();
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseUI_Placeholder(): UI_Placeholder {
  return { link: undefined, unlink: undefined };
}

export const UI_Placeholder = {
  encode(
    message: UI_Placeholder,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.link !== undefined) {
      UI_Placeholder_Link.encode(
        message.link,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.unlink !== undefined) {
      UI_Placeholder_Unlink.encode(
        message.unlink,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Placeholder {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Placeholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.link = UI_Placeholder_Link.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unlink = UI_Placeholder_Unlink.decode(
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

  fromJSON(object: any): UI_Placeholder {
    return {
      link: isSet(object.link)
        ? UI_Placeholder_Link.fromJSON(object.link)
        : undefined,
      unlink: isSet(object.unlink)
        ? UI_Placeholder_Unlink.fromJSON(object.unlink)
        : undefined,
    };
  },

  toJSON(message: UI_Placeholder): unknown {
    const obj: any = {};
    if (message.link !== undefined) {
      obj.link = UI_Placeholder_Link.toJSON(message.link);
    }
    if (message.unlink !== undefined) {
      obj.unlink = UI_Placeholder_Unlink.toJSON(message.unlink);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Placeholder>, I>>(
    base?: I,
  ): UI_Placeholder {
    return UI_Placeholder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Placeholder>, I>>(
    object: I,
  ): UI_Placeholder {
    const message = createBaseUI_Placeholder();
    message.link =
      object.link !== undefined && object.link !== null
        ? UI_Placeholder_Link.fromPartial(object.link)
        : undefined;
    message.unlink =
      object.unlink !== undefined && object.unlink !== null
        ? UI_Placeholder_Unlink.fromPartial(object.unlink)
        : undefined;
    return message;
  },
};

function createBaseUI_Placeholder_Link(): UI_Placeholder_Link {
  return { linkType: 0, linkSource: 0 };
}

export const UI_Placeholder_Link = {
  encode(
    message: UI_Placeholder_Link,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.linkType !== 0) {
      writer.uint32(8).int32(message.linkType);
    }
    if (message.linkSource !== 0) {
      writer.uint32(16).int32(message.linkSource);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Placeholder_Link {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Placeholder_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.linkType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.linkSource = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Placeholder_Link {
    return {
      linkType: isSet(object.linkType)
        ? uI_Placeholder_Link_TypeFromJSON(object.linkType)
        : 0,
      linkSource: isSet(object.linkSource)
        ? uI_Placeholder_Link_SourceFromJSON(object.linkSource)
        : 0,
    };
  },

  toJSON(message: UI_Placeholder_Link): unknown {
    const obj: any = {};
    if (message.linkType !== 0) {
      obj.linkType = uI_Placeholder_Link_TypeToJSON(message.linkType);
    }
    if (message.linkSource !== 0) {
      obj.linkSource = uI_Placeholder_Link_SourceToJSON(message.linkSource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Placeholder_Link>, I>>(
    base?: I,
  ): UI_Placeholder_Link {
    return UI_Placeholder_Link.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Placeholder_Link>, I>>(
    object: I,
  ): UI_Placeholder_Link {
    const message = createBaseUI_Placeholder_Link();
    message.linkType = object.linkType ?? 0;
    message.linkSource = object.linkSource ?? 0;
    return message;
  },
};

function createBaseUI_Placeholder_Unlink(): UI_Placeholder_Unlink {
  return {};
}

export const UI_Placeholder_Unlink = {
  encode(
    _: UI_Placeholder_Unlink,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Placeholder_Unlink {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Placeholder_Unlink();
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

  fromJSON(_: any): UI_Placeholder_Unlink {
    return {};
  },

  toJSON(_: UI_Placeholder_Unlink): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Placeholder_Unlink>, I>>(
    base?: I,
  ): UI_Placeholder_Unlink {
    return UI_Placeholder_Unlink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Placeholder_Unlink>, I>>(
    _: I,
  ): UI_Placeholder_Unlink {
    const message = createBaseUI_Placeholder_Unlink();
    return message;
  },
};

function createBaseUI_PlanningCenterLive(): UI_PlanningCenterLive {
  return { shown: undefined };
}

export const UI_PlanningCenterLive = {
  encode(
    message: UI_PlanningCenterLive,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_PlanningCenterLive_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_PlanningCenterLive {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PlanningCenterLive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_PlanningCenterLive_Shown.decode(
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

  fromJSON(object: any): UI_PlanningCenterLive {
    return {
      shown: isSet(object.shown)
        ? UI_PlanningCenterLive_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_PlanningCenterLive): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_PlanningCenterLive_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PlanningCenterLive>, I>>(
    base?: I,
  ): UI_PlanningCenterLive {
    return UI_PlanningCenterLive.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_PlanningCenterLive>, I>>(
    object: I,
  ): UI_PlanningCenterLive {
    const message = createBaseUI_PlanningCenterLive();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_PlanningCenterLive_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_PlanningCenterLive_Shown(): UI_PlanningCenterLive_Shown {
  return { windowType: 0 };
}

export const UI_PlanningCenterLive_Shown = {
  encode(
    message: UI_PlanningCenterLive_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.windowType !== 0) {
      writer.uint32(8).int32(message.windowType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_PlanningCenterLive_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_PlanningCenterLive_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.windowType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_PlanningCenterLive_Shown {
    return {
      windowType: isSet(object.windowType)
        ? uI_PlanningCenterLive_Shown_WindowTypeFromJSON(object.windowType)
        : 0,
    };
  },

  toJSON(message: UI_PlanningCenterLive_Shown): unknown {
    const obj: any = {};
    if (message.windowType !== 0) {
      obj.windowType = uI_PlanningCenterLive_Shown_WindowTypeToJSON(
        message.windowType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_PlanningCenterLive_Shown>, I>>(
    base?: I,
  ): UI_PlanningCenterLive_Shown {
    return UI_PlanningCenterLive_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_PlanningCenterLive_Shown>, I>>(
    object: I,
  ): UI_PlanningCenterLive_Shown {
    const message = createBaseUI_PlanningCenterLive_Shown();
    message.windowType = object.windowType ?? 0;
    return message;
  },
};

function createBaseUI_NetworkGroup(): UI_NetworkGroup {
  return {
    create: undefined,
    add: undefined,
    join: undefined,
    invite: undefined,
    leave: undefined,
    remove: undefined,
  };
}

export const UI_NetworkGroup = {
  encode(
    message: UI_NetworkGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.create !== undefined) {
      UI_NetworkGroup_Create.encode(
        message.create,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.add !== undefined) {
      UI_NetworkGroup_Add.encode(
        message.add,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.join !== undefined) {
      UI_NetworkGroup_Join.encode(
        message.join,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.invite !== undefined) {
      UI_NetworkGroup_Invite.encode(
        message.invite,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.leave !== undefined) {
      UI_NetworkGroup_Leave.encode(
        message.leave,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.remove !== undefined) {
      UI_NetworkGroup_Remove.encode(
        message.remove,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_NetworkGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.create = UI_NetworkGroup_Create.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.add = UI_NetworkGroup_Add.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.join = UI_NetworkGroup_Join.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.invite = UI_NetworkGroup_Invite.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.leave = UI_NetworkGroup_Leave.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.remove = UI_NetworkGroup_Remove.decode(
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

  fromJSON(object: any): UI_NetworkGroup {
    return {
      create: isSet(object.create)
        ? UI_NetworkGroup_Create.fromJSON(object.create)
        : undefined,
      add: isSet(object.add)
        ? UI_NetworkGroup_Add.fromJSON(object.add)
        : undefined,
      join: isSet(object.join)
        ? UI_NetworkGroup_Join.fromJSON(object.join)
        : undefined,
      invite: isSet(object.invite)
        ? UI_NetworkGroup_Invite.fromJSON(object.invite)
        : undefined,
      leave: isSet(object.leave)
        ? UI_NetworkGroup_Leave.fromJSON(object.leave)
        : undefined,
      remove: isSet(object.remove)
        ? UI_NetworkGroup_Remove.fromJSON(object.remove)
        : undefined,
    };
  },

  toJSON(message: UI_NetworkGroup): unknown {
    const obj: any = {};
    if (message.create !== undefined) {
      obj.create = UI_NetworkGroup_Create.toJSON(message.create);
    }
    if (message.add !== undefined) {
      obj.add = UI_NetworkGroup_Add.toJSON(message.add);
    }
    if (message.join !== undefined) {
      obj.join = UI_NetworkGroup_Join.toJSON(message.join);
    }
    if (message.invite !== undefined) {
      obj.invite = UI_NetworkGroup_Invite.toJSON(message.invite);
    }
    if (message.leave !== undefined) {
      obj.leave = UI_NetworkGroup_Leave.toJSON(message.leave);
    }
    if (message.remove !== undefined) {
      obj.remove = UI_NetworkGroup_Remove.toJSON(message.remove);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup>, I>>(
    base?: I,
  ): UI_NetworkGroup {
    return UI_NetworkGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup>, I>>(
    object: I,
  ): UI_NetworkGroup {
    const message = createBaseUI_NetworkGroup();
    message.create =
      object.create !== undefined && object.create !== null
        ? UI_NetworkGroup_Create.fromPartial(object.create)
        : undefined;
    message.add =
      object.add !== undefined && object.add !== null
        ? UI_NetworkGroup_Add.fromPartial(object.add)
        : undefined;
    message.join =
      object.join !== undefined && object.join !== null
        ? UI_NetworkGroup_Join.fromPartial(object.join)
        : undefined;
    message.invite =
      object.invite !== undefined && object.invite !== null
        ? UI_NetworkGroup_Invite.fromPartial(object.invite)
        : undefined;
    message.leave =
      object.leave !== undefined && object.leave !== null
        ? UI_NetworkGroup_Leave.fromPartial(object.leave)
        : undefined;
    message.remove =
      object.remove !== undefined && object.remove !== null
        ? UI_NetworkGroup_Remove.fromPartial(object.remove)
        : undefined;
    return message;
  },
};

function createBaseUI_NetworkGroup_Create(): UI_NetworkGroup_Create {
  return {};
}

export const UI_NetworkGroup_Create = {
  encode(
    _: UI_NetworkGroup_Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_NetworkGroup_Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Create();
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

  fromJSON(_: any): UI_NetworkGroup_Create {
    return {};
  },

  toJSON(_: UI_NetworkGroup_Create): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Create>, I>>(
    base?: I,
  ): UI_NetworkGroup_Create {
    return UI_NetworkGroup_Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Create>, I>>(
    _: I,
  ): UI_NetworkGroup_Create {
    const message = createBaseUI_NetworkGroup_Create();
    return message;
  },
};

function createBaseUI_NetworkGroup_Add(): UI_NetworkGroup_Add {
  return {};
}

export const UI_NetworkGroup_Add = {
  encode(
    _: UI_NetworkGroup_Add,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_NetworkGroup_Add {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Add();
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

  fromJSON(_: any): UI_NetworkGroup_Add {
    return {};
  },

  toJSON(_: UI_NetworkGroup_Add): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Add>, I>>(
    base?: I,
  ): UI_NetworkGroup_Add {
    return UI_NetworkGroup_Add.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Add>, I>>(
    _: I,
  ): UI_NetworkGroup_Add {
    const message = createBaseUI_NetworkGroup_Add();
    return message;
  },
};

function createBaseUI_NetworkGroup_Join(): UI_NetworkGroup_Join {
  return {};
}

export const UI_NetworkGroup_Join = {
  encode(
    _: UI_NetworkGroup_Join,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_NetworkGroup_Join {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Join();
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

  fromJSON(_: any): UI_NetworkGroup_Join {
    return {};
  },

  toJSON(_: UI_NetworkGroup_Join): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Join>, I>>(
    base?: I,
  ): UI_NetworkGroup_Join {
    return UI_NetworkGroup_Join.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Join>, I>>(
    _: I,
  ): UI_NetworkGroup_Join {
    const message = createBaseUI_NetworkGroup_Join();
    return message;
  },
};

function createBaseUI_NetworkGroup_Invite(): UI_NetworkGroup_Invite {
  return { didAccept: false };
}

export const UI_NetworkGroup_Invite = {
  encode(
    message: UI_NetworkGroup_Invite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.didAccept !== false) {
      writer.uint32(8).bool(message.didAccept);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_NetworkGroup_Invite {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Invite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.didAccept = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_NetworkGroup_Invite {
    return {
      didAccept: isSet(object.didAccept)
        ? globalThis.Boolean(object.didAccept)
        : false,
    };
  },

  toJSON(message: UI_NetworkGroup_Invite): unknown {
    const obj: any = {};
    if (message.didAccept !== false) {
      obj.didAccept = message.didAccept;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Invite>, I>>(
    base?: I,
  ): UI_NetworkGroup_Invite {
    return UI_NetworkGroup_Invite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Invite>, I>>(
    object: I,
  ): UI_NetworkGroup_Invite {
    const message = createBaseUI_NetworkGroup_Invite();
    message.didAccept = object.didAccept ?? false;
    return message;
  },
};

function createBaseUI_NetworkGroup_Leave(): UI_NetworkGroup_Leave {
  return {};
}

export const UI_NetworkGroup_Leave = {
  encode(
    _: UI_NetworkGroup_Leave,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_NetworkGroup_Leave {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Leave();
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

  fromJSON(_: any): UI_NetworkGroup_Leave {
    return {};
  },

  toJSON(_: UI_NetworkGroup_Leave): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Leave>, I>>(
    base?: I,
  ): UI_NetworkGroup_Leave {
    return UI_NetworkGroup_Leave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Leave>, I>>(
    _: I,
  ): UI_NetworkGroup_Leave {
    const message = createBaseUI_NetworkGroup_Leave();
    return message;
  },
};

function createBaseUI_NetworkGroup_Remove(): UI_NetworkGroup_Remove {
  return {};
}

export const UI_NetworkGroup_Remove = {
  encode(
    _: UI_NetworkGroup_Remove,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_NetworkGroup_Remove {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_NetworkGroup_Remove();
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

  fromJSON(_: any): UI_NetworkGroup_Remove {
    return {};
  },

  toJSON(_: UI_NetworkGroup_Remove): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_NetworkGroup_Remove>, I>>(
    base?: I,
  ): UI_NetworkGroup_Remove {
    return UI_NetworkGroup_Remove.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_NetworkGroup_Remove>, I>>(
    _: I,
  ): UI_NetworkGroup_Remove {
    const message = createBaseUI_NetworkGroup_Remove();
    return message;
  },
};

function createBaseUI_CCLI(): UI_CCLI {
  return { report: undefined };
}

export const UI_CCLI = {
  encode(
    message: UI_CCLI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.report !== undefined) {
      UI_CCLI_Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_CCLI {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_CCLI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.report = UI_CCLI_Report.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_CCLI {
    return {
      report: isSet(object.report)
        ? UI_CCLI_Report.fromJSON(object.report)
        : undefined,
    };
  },

  toJSON(message: UI_CCLI): unknown {
    const obj: any = {};
    if (message.report !== undefined) {
      obj.report = UI_CCLI_Report.toJSON(message.report);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_CCLI>, I>>(base?: I): UI_CCLI {
    return UI_CCLI.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_CCLI>, I>>(object: I): UI_CCLI {
    const message = createBaseUI_CCLI();
    message.report =
      object.report !== undefined && object.report !== null
        ? UI_CCLI_Report.fromPartial(object.report)
        : undefined;
    return message;
  },
};

function createBaseUI_CCLI_Report(): UI_CCLI_Report {
  return { shown: undefined, reset: undefined, export: undefined };
}

export const UI_CCLI_Report = {
  encode(
    message: UI_CCLI_Report,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_CCLI_Report_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.reset !== undefined) {
      UI_CCLI_Report_Reset.encode(
        message.reset,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.export !== undefined) {
      UI_CCLI_Report_Export.encode(
        message.export,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_CCLI_Report {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_CCLI_Report();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_CCLI_Report_Shown.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reset = UI_CCLI_Report_Reset.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.export = UI_CCLI_Report_Export.decode(
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

  fromJSON(object: any): UI_CCLI_Report {
    return {
      shown: isSet(object.shown)
        ? UI_CCLI_Report_Shown.fromJSON(object.shown)
        : undefined,
      reset: isSet(object.reset)
        ? UI_CCLI_Report_Reset.fromJSON(object.reset)
        : undefined,
      export: isSet(object.export)
        ? UI_CCLI_Report_Export.fromJSON(object.export)
        : undefined,
    };
  },

  toJSON(message: UI_CCLI_Report): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_CCLI_Report_Shown.toJSON(message.shown);
    }
    if (message.reset !== undefined) {
      obj.reset = UI_CCLI_Report_Reset.toJSON(message.reset);
    }
    if (message.export !== undefined) {
      obj.export = UI_CCLI_Report_Export.toJSON(message.export);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_CCLI_Report>, I>>(
    base?: I,
  ): UI_CCLI_Report {
    return UI_CCLI_Report.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_CCLI_Report>, I>>(
    object: I,
  ): UI_CCLI_Report {
    const message = createBaseUI_CCLI_Report();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_CCLI_Report_Shown.fromPartial(object.shown)
        : undefined;
    message.reset =
      object.reset !== undefined && object.reset !== null
        ? UI_CCLI_Report_Reset.fromPartial(object.reset)
        : undefined;
    message.export =
      object.export !== undefined && object.export !== null
        ? UI_CCLI_Report_Export.fromPartial(object.export)
        : undefined;
    return message;
  },
};

function createBaseUI_CCLI_Report_Shown(): UI_CCLI_Report_Shown {
  return {};
}

export const UI_CCLI_Report_Shown = {
  encode(
    _: UI_CCLI_Report_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_CCLI_Report_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_CCLI_Report_Shown();
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

  fromJSON(_: any): UI_CCLI_Report_Shown {
    return {};
  },

  toJSON(_: UI_CCLI_Report_Shown): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_CCLI_Report_Shown>, I>>(
    base?: I,
  ): UI_CCLI_Report_Shown {
    return UI_CCLI_Report_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_CCLI_Report_Shown>, I>>(
    _: I,
  ): UI_CCLI_Report_Shown {
    const message = createBaseUI_CCLI_Report_Shown();
    return message;
  },
};

function createBaseUI_CCLI_Report_Reset(): UI_CCLI_Report_Reset {
  return {};
}

export const UI_CCLI_Report_Reset = {
  encode(
    _: UI_CCLI_Report_Reset,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_CCLI_Report_Reset {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_CCLI_Report_Reset();
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

  fromJSON(_: any): UI_CCLI_Report_Reset {
    return {};
  },

  toJSON(_: UI_CCLI_Report_Reset): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_CCLI_Report_Reset>, I>>(
    base?: I,
  ): UI_CCLI_Report_Reset {
    return UI_CCLI_Report_Reset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_CCLI_Report_Reset>, I>>(
    _: I,
  ): UI_CCLI_Report_Reset {
    const message = createBaseUI_CCLI_Report_Reset();
    return message;
  },
};

function createBaseUI_CCLI_Report_Export(): UI_CCLI_Report_Export {
  return {};
}

export const UI_CCLI_Report_Export = {
  encode(
    _: UI_CCLI_Report_Export,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_CCLI_Report_Export {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_CCLI_Report_Export();
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

  fromJSON(_: any): UI_CCLI_Report_Export {
    return {};
  },

  toJSON(_: UI_CCLI_Report_Export): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_CCLI_Report_Export>, I>>(
    base?: I,
  ): UI_CCLI_Report_Export {
    return UI_CCLI_Report_Export.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_CCLI_Report_Export>, I>>(
    _: I,
  ): UI_CCLI_Report_Export {
    const message = createBaseUI_CCLI_Report_Export();
    return message;
  },
};

function createBaseUI_Capture(): UI_Capture {
  return { shown: undefined };
}

export const UI_Capture = {
  encode(
    message: UI_Capture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_Capture_Shown.encode(message.shown, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Capture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Capture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_Capture_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Capture {
    return {
      shown: isSet(object.shown)
        ? UI_Capture_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_Capture): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_Capture_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Capture>, I>>(base?: I): UI_Capture {
    return UI_Capture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Capture>, I>>(
    object: I,
  ): UI_Capture {
    const message = createBaseUI_Capture();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_Capture_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_Capture_Shown(): UI_Capture_Shown {
  return { source: 0 };
}

export const UI_Capture_Shown = {
  encode(
    message: UI_Capture_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Capture_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Capture_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Capture_Shown {
    return {
      source: isSet(object.source)
        ? uI_Capture_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_Capture_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_Capture_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Capture_Shown>, I>>(
    base?: I,
  ): UI_Capture_Shown {
    return UI_Capture_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Capture_Shown>, I>>(
    object: I,
  ): UI_Capture_Shown {
    const message = createBaseUI_Capture_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter(): UI_WelcomeToProPresenter {
  return {
    shown: undefined,
    migration: undefined,
    screenConfigurationHelp: undefined,
    downloadSampleContent: undefined,
    userGroup: undefined,
    tutorials: undefined,
    knowledgeBase: undefined,
    blog: undefined,
    instagram: undefined,
    facebook: undefined,
  };
}

export const UI_WelcomeToProPresenter = {
  encode(
    message: UI_WelcomeToProPresenter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_WelcomeToProPresenter_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.migration !== undefined) {
      UI_WelcomeToProPresenter_Migration.encode(
        message.migration,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.screenConfigurationHelp !== undefined) {
      UI_WelcomeToProPresenter_ScreenConfigurationHelp.encode(
        message.screenConfigurationHelp,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.downloadSampleContent !== undefined) {
      UI_WelcomeToProPresenter_DownloadSampleContent.encode(
        message.downloadSampleContent,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.userGroup !== undefined) {
      UI_WelcomeToProPresenter_UserGroup.encode(
        message.userGroup,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.tutorials !== undefined) {
      UI_WelcomeToProPresenter_Tutorials.encode(
        message.tutorials,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.knowledgeBase !== undefined) {
      UI_WelcomeToProPresenter_KnowledgeBase.encode(
        message.knowledgeBase,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.blog !== undefined) {
      UI_WelcomeToProPresenter_Blog.encode(
        message.blog,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.instagram !== undefined) {
      UI_WelcomeToProPresenter_Instagram.encode(
        message.instagram,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.facebook !== undefined) {
      UI_WelcomeToProPresenter_Facebook.encode(
        message.facebook,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_WelcomeToProPresenter_Shown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.migration = UI_WelcomeToProPresenter_Migration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.screenConfigurationHelp =
            UI_WelcomeToProPresenter_ScreenConfigurationHelp.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.downloadSampleContent =
            UI_WelcomeToProPresenter_DownloadSampleContent.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userGroup = UI_WelcomeToProPresenter_UserGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tutorials = UI_WelcomeToProPresenter_Tutorials.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.knowledgeBase = UI_WelcomeToProPresenter_KnowledgeBase.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.blog = UI_WelcomeToProPresenter_Blog.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.instagram = UI_WelcomeToProPresenter_Instagram.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.facebook = UI_WelcomeToProPresenter_Facebook.decode(
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

  fromJSON(object: any): UI_WelcomeToProPresenter {
    return {
      shown: isSet(object.shown)
        ? UI_WelcomeToProPresenter_Shown.fromJSON(object.shown)
        : undefined,
      migration: isSet(object.migration)
        ? UI_WelcomeToProPresenter_Migration.fromJSON(object.migration)
        : undefined,
      screenConfigurationHelp: isSet(object.screenConfigurationHelp)
        ? UI_WelcomeToProPresenter_ScreenConfigurationHelp.fromJSON(
            object.screenConfigurationHelp,
          )
        : undefined,
      downloadSampleContent: isSet(object.downloadSampleContent)
        ? UI_WelcomeToProPresenter_DownloadSampleContent.fromJSON(
            object.downloadSampleContent,
          )
        : undefined,
      userGroup: isSet(object.userGroup)
        ? UI_WelcomeToProPresenter_UserGroup.fromJSON(object.userGroup)
        : undefined,
      tutorials: isSet(object.tutorials)
        ? UI_WelcomeToProPresenter_Tutorials.fromJSON(object.tutorials)
        : undefined,
      knowledgeBase: isSet(object.knowledgeBase)
        ? UI_WelcomeToProPresenter_KnowledgeBase.fromJSON(object.knowledgeBase)
        : undefined,
      blog: isSet(object.blog)
        ? UI_WelcomeToProPresenter_Blog.fromJSON(object.blog)
        : undefined,
      instagram: isSet(object.instagram)
        ? UI_WelcomeToProPresenter_Instagram.fromJSON(object.instagram)
        : undefined,
      facebook: isSet(object.facebook)
        ? UI_WelcomeToProPresenter_Facebook.fromJSON(object.facebook)
        : undefined,
    };
  },

  toJSON(message: UI_WelcomeToProPresenter): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_WelcomeToProPresenter_Shown.toJSON(message.shown);
    }
    if (message.migration !== undefined) {
      obj.migration = UI_WelcomeToProPresenter_Migration.toJSON(
        message.migration,
      );
    }
    if (message.screenConfigurationHelp !== undefined) {
      obj.screenConfigurationHelp =
        UI_WelcomeToProPresenter_ScreenConfigurationHelp.toJSON(
          message.screenConfigurationHelp,
        );
    }
    if (message.downloadSampleContent !== undefined) {
      obj.downloadSampleContent =
        UI_WelcomeToProPresenter_DownloadSampleContent.toJSON(
          message.downloadSampleContent,
        );
    }
    if (message.userGroup !== undefined) {
      obj.userGroup = UI_WelcomeToProPresenter_UserGroup.toJSON(
        message.userGroup,
      );
    }
    if (message.tutorials !== undefined) {
      obj.tutorials = UI_WelcomeToProPresenter_Tutorials.toJSON(
        message.tutorials,
      );
    }
    if (message.knowledgeBase !== undefined) {
      obj.knowledgeBase = UI_WelcomeToProPresenter_KnowledgeBase.toJSON(
        message.knowledgeBase,
      );
    }
    if (message.blog !== undefined) {
      obj.blog = UI_WelcomeToProPresenter_Blog.toJSON(message.blog);
    }
    if (message.instagram !== undefined) {
      obj.instagram = UI_WelcomeToProPresenter_Instagram.toJSON(
        message.instagram,
      );
    }
    if (message.facebook !== undefined) {
      obj.facebook = UI_WelcomeToProPresenter_Facebook.toJSON(message.facebook);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter {
    return UI_WelcomeToProPresenter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_WelcomeToProPresenter>, I>>(
    object: I,
  ): UI_WelcomeToProPresenter {
    const message = createBaseUI_WelcomeToProPresenter();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_WelcomeToProPresenter_Shown.fromPartial(object.shown)
        : undefined;
    message.migration =
      object.migration !== undefined && object.migration !== null
        ? UI_WelcomeToProPresenter_Migration.fromPartial(object.migration)
        : undefined;
    message.screenConfigurationHelp =
      object.screenConfigurationHelp !== undefined &&
      object.screenConfigurationHelp !== null
        ? UI_WelcomeToProPresenter_ScreenConfigurationHelp.fromPartial(
            object.screenConfigurationHelp,
          )
        : undefined;
    message.downloadSampleContent =
      object.downloadSampleContent !== undefined &&
      object.downloadSampleContent !== null
        ? UI_WelcomeToProPresenter_DownloadSampleContent.fromPartial(
            object.downloadSampleContent,
          )
        : undefined;
    message.userGroup =
      object.userGroup !== undefined && object.userGroup !== null
        ? UI_WelcomeToProPresenter_UserGroup.fromPartial(object.userGroup)
        : undefined;
    message.tutorials =
      object.tutorials !== undefined && object.tutorials !== null
        ? UI_WelcomeToProPresenter_Tutorials.fromPartial(object.tutorials)
        : undefined;
    message.knowledgeBase =
      object.knowledgeBase !== undefined && object.knowledgeBase !== null
        ? UI_WelcomeToProPresenter_KnowledgeBase.fromPartial(
            object.knowledgeBase,
          )
        : undefined;
    message.blog =
      object.blog !== undefined && object.blog !== null
        ? UI_WelcomeToProPresenter_Blog.fromPartial(object.blog)
        : undefined;
    message.instagram =
      object.instagram !== undefined && object.instagram !== null
        ? UI_WelcomeToProPresenter_Instagram.fromPartial(object.instagram)
        : undefined;
    message.facebook =
      object.facebook !== undefined && object.facebook !== null
        ? UI_WelcomeToProPresenter_Facebook.fromPartial(object.facebook)
        : undefined;
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Shown(): UI_WelcomeToProPresenter_Shown {
  return { source: 0 };
}

export const UI_WelcomeToProPresenter_Shown = {
  encode(
    message: UI_WelcomeToProPresenter_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_WelcomeToProPresenter_Shown {
    return {
      source: isSet(object.source)
        ? uI_WelcomeToProPresenter_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_WelcomeToProPresenter_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_WelcomeToProPresenter_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Shown>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Shown {
    return UI_WelcomeToProPresenter_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Shown>, I>>(
    object: I,
  ): UI_WelcomeToProPresenter_Shown {
    const message = createBaseUI_WelcomeToProPresenter_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Migration(): UI_WelcomeToProPresenter_Migration {
  return {};
}

export const UI_WelcomeToProPresenter_Migration = {
  encode(
    _: UI_WelcomeToProPresenter_Migration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Migration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Migration();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_Migration {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_Migration): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Migration>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Migration {
    return UI_WelcomeToProPresenter_Migration.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Migration>, I>,
  >(_: I): UI_WelcomeToProPresenter_Migration {
    const message = createBaseUI_WelcomeToProPresenter_Migration();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_ScreenConfigurationHelp(): UI_WelcomeToProPresenter_ScreenConfigurationHelp {
  return {};
}

export const UI_WelcomeToProPresenter_ScreenConfigurationHelp = {
  encode(
    _: UI_WelcomeToProPresenter_ScreenConfigurationHelp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_ScreenConfigurationHelp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseUI_WelcomeToProPresenter_ScreenConfigurationHelp();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_ScreenConfigurationHelp {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_ScreenConfigurationHelp): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<UI_WelcomeToProPresenter_ScreenConfigurationHelp>,
      I
    >,
  >(base?: I): UI_WelcomeToProPresenter_ScreenConfigurationHelp {
    return UI_WelcomeToProPresenter_ScreenConfigurationHelp.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<UI_WelcomeToProPresenter_ScreenConfigurationHelp>,
      I
    >,
  >(_: I): UI_WelcomeToProPresenter_ScreenConfigurationHelp {
    const message =
      createBaseUI_WelcomeToProPresenter_ScreenConfigurationHelp();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_DownloadSampleContent(): UI_WelcomeToProPresenter_DownloadSampleContent {
  return {};
}

export const UI_WelcomeToProPresenter_DownloadSampleContent = {
  encode(
    _: UI_WelcomeToProPresenter_DownloadSampleContent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_DownloadSampleContent {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_DownloadSampleContent();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_DownloadSampleContent {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_DownloadSampleContent): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<UI_WelcomeToProPresenter_DownloadSampleContent>,
      I
    >,
  >(base?: I): UI_WelcomeToProPresenter_DownloadSampleContent {
    return UI_WelcomeToProPresenter_DownloadSampleContent.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<UI_WelcomeToProPresenter_DownloadSampleContent>,
      I
    >,
  >(_: I): UI_WelcomeToProPresenter_DownloadSampleContent {
    const message = createBaseUI_WelcomeToProPresenter_DownloadSampleContent();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_UserGroup(): UI_WelcomeToProPresenter_UserGroup {
  return {};
}

export const UI_WelcomeToProPresenter_UserGroup = {
  encode(
    _: UI_WelcomeToProPresenter_UserGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_UserGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_UserGroup();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_UserGroup {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_UserGroup): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_UserGroup>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_UserGroup {
    return UI_WelcomeToProPresenter_UserGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_UserGroup>, I>,
  >(_: I): UI_WelcomeToProPresenter_UserGroup {
    const message = createBaseUI_WelcomeToProPresenter_UserGroup();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Tutorials(): UI_WelcomeToProPresenter_Tutorials {
  return {};
}

export const UI_WelcomeToProPresenter_Tutorials = {
  encode(
    _: UI_WelcomeToProPresenter_Tutorials,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Tutorials {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Tutorials();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_Tutorials {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_Tutorials): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Tutorials>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Tutorials {
    return UI_WelcomeToProPresenter_Tutorials.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Tutorials>, I>,
  >(_: I): UI_WelcomeToProPresenter_Tutorials {
    const message = createBaseUI_WelcomeToProPresenter_Tutorials();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_KnowledgeBase(): UI_WelcomeToProPresenter_KnowledgeBase {
  return {};
}

export const UI_WelcomeToProPresenter_KnowledgeBase = {
  encode(
    _: UI_WelcomeToProPresenter_KnowledgeBase,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_KnowledgeBase {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_KnowledgeBase();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_KnowledgeBase {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_KnowledgeBase): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_KnowledgeBase>, I>,
  >(base?: I): UI_WelcomeToProPresenter_KnowledgeBase {
    return UI_WelcomeToProPresenter_KnowledgeBase.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_KnowledgeBase>, I>,
  >(_: I): UI_WelcomeToProPresenter_KnowledgeBase {
    const message = createBaseUI_WelcomeToProPresenter_KnowledgeBase();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Blog(): UI_WelcomeToProPresenter_Blog {
  return {};
}

export const UI_WelcomeToProPresenter_Blog = {
  encode(
    _: UI_WelcomeToProPresenter_Blog,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Blog {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Blog();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_Blog {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_Blog): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Blog>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Blog {
    return UI_WelcomeToProPresenter_Blog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Blog>, I>>(
    _: I,
  ): UI_WelcomeToProPresenter_Blog {
    const message = createBaseUI_WelcomeToProPresenter_Blog();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Instagram(): UI_WelcomeToProPresenter_Instagram {
  return {};
}

export const UI_WelcomeToProPresenter_Instagram = {
  encode(
    _: UI_WelcomeToProPresenter_Instagram,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Instagram {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Instagram();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_Instagram {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_Instagram): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Instagram>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Instagram {
    return UI_WelcomeToProPresenter_Instagram.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Instagram>, I>,
  >(_: I): UI_WelcomeToProPresenter_Instagram {
    const message = createBaseUI_WelcomeToProPresenter_Instagram();
    return message;
  },
};

function createBaseUI_WelcomeToProPresenter_Facebook(): UI_WelcomeToProPresenter_Facebook {
  return {};
}

export const UI_WelcomeToProPresenter_Facebook = {
  encode(
    _: UI_WelcomeToProPresenter_Facebook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_WelcomeToProPresenter_Facebook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_WelcomeToProPresenter_Facebook();
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

  fromJSON(_: any): UI_WelcomeToProPresenter_Facebook {
    return {};
  },

  toJSON(_: UI_WelcomeToProPresenter_Facebook): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Facebook>, I>>(
    base?: I,
  ): UI_WelcomeToProPresenter_Facebook {
    return UI_WelcomeToProPresenter_Facebook.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<UI_WelcomeToProPresenter_Facebook>, I>,
  >(_: I): UI_WelcomeToProPresenter_Facebook {
    const message = createBaseUI_WelcomeToProPresenter_Facebook();
    return message;
  },
};

function createBaseUI_TestPattern(): UI_TestPattern {
  return { shown: undefined };
}

export const UI_TestPattern = {
  encode(
    message: UI_TestPattern,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.shown !== undefined) {
      UI_TestPattern_Shown.encode(
        message.shown,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_TestPattern {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TestPattern();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.shown = UI_TestPattern_Shown.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TestPattern {
    return {
      shown: isSet(object.shown)
        ? UI_TestPattern_Shown.fromJSON(object.shown)
        : undefined,
    };
  },

  toJSON(message: UI_TestPattern): unknown {
    const obj: any = {};
    if (message.shown !== undefined) {
      obj.shown = UI_TestPattern_Shown.toJSON(message.shown);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TestPattern>, I>>(
    base?: I,
  ): UI_TestPattern {
    return UI_TestPattern.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TestPattern>, I>>(
    object: I,
  ): UI_TestPattern {
    const message = createBaseUI_TestPattern();
    message.shown =
      object.shown !== undefined && object.shown !== null
        ? UI_TestPattern_Shown.fromPartial(object.shown)
        : undefined;
    return message;
  },
};

function createBaseUI_TestPattern_Shown(): UI_TestPattern_Shown {
  return { source: 0 };
}

export const UI_TestPattern_Shown = {
  encode(
    message: UI_TestPattern_Shown,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_TestPattern_Shown {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_TestPattern_Shown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_TestPattern_Shown {
    return {
      source: isSet(object.source)
        ? uI_TestPattern_Shown_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: UI_TestPattern_Shown): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = uI_TestPattern_Shown_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_TestPattern_Shown>, I>>(
    base?: I,
  ): UI_TestPattern_Shown {
    return UI_TestPattern_Shown.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_TestPattern_Shown>, I>>(
    object: I,
  ): UI_TestPattern_Shown {
    const message = createBaseUI_TestPattern_Shown();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseUI_Preferences(): UI_Preferences {
  return { customLogo: undefined };
}

export const UI_Preferences = {
  encode(
    message: UI_Preferences,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.customLogo !== undefined) {
      UI_Preferences_CustomLogo.encode(
        message.customLogo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UI_Preferences {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Preferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.customLogo = UI_Preferences_CustomLogo.decode(
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

  fromJSON(object: any): UI_Preferences {
    return {
      customLogo: isSet(object.customLogo)
        ? UI_Preferences_CustomLogo.fromJSON(object.customLogo)
        : undefined,
    };
  },

  toJSON(message: UI_Preferences): unknown {
    const obj: any = {};
    if (message.customLogo !== undefined) {
      obj.customLogo = UI_Preferences_CustomLogo.toJSON(message.customLogo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Preferences>, I>>(
    base?: I,
  ): UI_Preferences {
    return UI_Preferences.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Preferences>, I>>(
    object: I,
  ): UI_Preferences {
    const message = createBaseUI_Preferences();
    message.customLogo =
      object.customLogo !== undefined && object.customLogo !== null
        ? UI_Preferences_CustomLogo.fromPartial(object.customLogo)
        : undefined;
    return message;
  },
};

function createBaseUI_Preferences_CustomLogo(): UI_Preferences_CustomLogo {
  return { hasLogo: false };
}

export const UI_Preferences_CustomLogo = {
  encode(
    message: UI_Preferences_CustomLogo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hasLogo !== false) {
      writer.uint32(8).bool(message.hasLogo);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): UI_Preferences_CustomLogo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUI_Preferences_CustomLogo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hasLogo = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UI_Preferences_CustomLogo {
    return {
      hasLogo: isSet(object.hasLogo)
        ? globalThis.Boolean(object.hasLogo)
        : false,
    };
  },

  toJSON(message: UI_Preferences_CustomLogo): unknown {
    const obj: any = {};
    if (message.hasLogo !== false) {
      obj.hasLogo = message.hasLogo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UI_Preferences_CustomLogo>, I>>(
    base?: I,
  ): UI_Preferences_CustomLogo {
    return UI_Preferences_CustomLogo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UI_Preferences_CustomLogo>, I>>(
    object: I,
  ): UI_Preferences_CustomLogo {
    const message = createBaseUI_Preferences_CustomLogo();
    message.hasLogo = object.hasLogo ?? false;
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
