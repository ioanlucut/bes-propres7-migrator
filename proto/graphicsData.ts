/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { AlphaType, alphaTypeFromJSON, alphaTypeToJSON } from './alphaType';
import { Color } from './color';
import { DigitalAudio_Device_Routing } from './digitalAudio';
import { Effect } from './effects';
import { FileProperties } from './fileProperties';
import { Font } from './font';
import { IntRange } from './intRange';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Graphics {}

export interface Graphics_Element {
  uuid: UUID | undefined;
  name: string;
  bounds: Graphics_Rect | undefined;
  rotation: number;
  opacity: number;
  locked: boolean;
  aspectRatioLocked: boolean;
  path: Graphics_Path | undefined;
  fill: Graphics_Fill | undefined;
  stroke: Graphics_Stroke | undefined;
  shadow: Graphics_Shadow | undefined;
  feather: Graphics_Feather | undefined;
  text: Graphics_Text | undefined;
  flipMode: Graphics_Element_FlipMode;
  hidden: boolean;
  textLineMask?: Graphics_Text_LineFillMask | undefined;
}

export enum Graphics_Element_FlipMode {
  FLIP_MODE_NONE = 0,
  FLIP_MODE_VERTICAL = 1,
  FLIP_MODE_HORIZONTAL = 2,
  FLIP_MODE_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Element_FlipModeFromJSON(
  object: any,
): Graphics_Element_FlipMode {
  switch (object) {
    case 0:
    case 'FLIP_MODE_NONE':
      return Graphics_Element_FlipMode.FLIP_MODE_NONE;
    case 1:
    case 'FLIP_MODE_VERTICAL':
      return Graphics_Element_FlipMode.FLIP_MODE_VERTICAL;
    case 2:
    case 'FLIP_MODE_HORIZONTAL':
      return Graphics_Element_FlipMode.FLIP_MODE_HORIZONTAL;
    case 3:
    case 'FLIP_MODE_BOTH':
      return Graphics_Element_FlipMode.FLIP_MODE_BOTH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Element_FlipMode.UNRECOGNIZED;
  }
}

export function graphics_Element_FlipModeToJSON(
  object: Graphics_Element_FlipMode,
): string {
  switch (object) {
    case Graphics_Element_FlipMode.FLIP_MODE_NONE:
      return 'FLIP_MODE_NONE';
    case Graphics_Element_FlipMode.FLIP_MODE_VERTICAL:
      return 'FLIP_MODE_VERTICAL';
    case Graphics_Element_FlipMode.FLIP_MODE_HORIZONTAL:
      return 'FLIP_MODE_HORIZONTAL';
    case Graphics_Element_FlipMode.FLIP_MODE_BOTH:
      return 'FLIP_MODE_BOTH';
    case Graphics_Element_FlipMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Rect {
  origin: Graphics_Point | undefined;
  size: Graphics_Size | undefined;
}

export interface Graphics_Point {
  x: number;
  y: number;
}

export interface Graphics_Size {
  width: number;
  height: number;
}

export interface Graphics_EdgeInsets {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface Graphics_Path {
  closed: boolean;
  points: Graphics_Path_BezierPoint[];
  shape: Graphics_Path_Shape | undefined;
}

export interface Graphics_Path_BezierPoint {
  point: Graphics_Point | undefined;
  q0: Graphics_Point | undefined;
  q1: Graphics_Point | undefined;
  curved: boolean;
}

export interface Graphics_Path_Shape {
  type: Graphics_Path_Shape_Type;
  roundedRectangle?: Graphics_Path_Shape_RoundedRectangle | undefined;
  polygon?: Graphics_Path_Shape_Polygon | undefined;
  star?: Graphics_Path_Shape_Star | undefined;
  arrow?: Graphics_Path_Shape_Arrow | undefined;
}

export enum Graphics_Path_Shape_Type {
  TYPE_UNKNOWN = 0,
  TYPE_RECTANGLE = 1,
  TYPE_ELLIPSE = 2,
  TYPE_ISOSCELES_TRIANGLE = 3,
  TYPE_RIGHT_TRIANGLE = 4,
  TYPE_RHOMBUS = 5,
  TYPE_STAR = 6,
  TYPE_POLYGON = 7,
  TYPE_CUSTOM = 8,
  TYPE_RIGHT_ARROW = 9,
  TYPE_DOUBLE_ARROW = 10,
  TYPE_ROUNDED_RECTANGLE = 11,
  UNRECOGNIZED = -1,
}

export function graphics_Path_Shape_TypeFromJSON(
  object: any,
): Graphics_Path_Shape_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return Graphics_Path_Shape_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_RECTANGLE':
      return Graphics_Path_Shape_Type.TYPE_RECTANGLE;
    case 2:
    case 'TYPE_ELLIPSE':
      return Graphics_Path_Shape_Type.TYPE_ELLIPSE;
    case 3:
    case 'TYPE_ISOSCELES_TRIANGLE':
      return Graphics_Path_Shape_Type.TYPE_ISOSCELES_TRIANGLE;
    case 4:
    case 'TYPE_RIGHT_TRIANGLE':
      return Graphics_Path_Shape_Type.TYPE_RIGHT_TRIANGLE;
    case 5:
    case 'TYPE_RHOMBUS':
      return Graphics_Path_Shape_Type.TYPE_RHOMBUS;
    case 6:
    case 'TYPE_STAR':
      return Graphics_Path_Shape_Type.TYPE_STAR;
    case 7:
    case 'TYPE_POLYGON':
      return Graphics_Path_Shape_Type.TYPE_POLYGON;
    case 8:
    case 'TYPE_CUSTOM':
      return Graphics_Path_Shape_Type.TYPE_CUSTOM;
    case 9:
    case 'TYPE_RIGHT_ARROW':
      return Graphics_Path_Shape_Type.TYPE_RIGHT_ARROW;
    case 10:
    case 'TYPE_DOUBLE_ARROW':
      return Graphics_Path_Shape_Type.TYPE_DOUBLE_ARROW;
    case 11:
    case 'TYPE_ROUNDED_RECTANGLE':
      return Graphics_Path_Shape_Type.TYPE_ROUNDED_RECTANGLE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Path_Shape_Type.UNRECOGNIZED;
  }
}

export function graphics_Path_Shape_TypeToJSON(
  object: Graphics_Path_Shape_Type,
): string {
  switch (object) {
    case Graphics_Path_Shape_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case Graphics_Path_Shape_Type.TYPE_RECTANGLE:
      return 'TYPE_RECTANGLE';
    case Graphics_Path_Shape_Type.TYPE_ELLIPSE:
      return 'TYPE_ELLIPSE';
    case Graphics_Path_Shape_Type.TYPE_ISOSCELES_TRIANGLE:
      return 'TYPE_ISOSCELES_TRIANGLE';
    case Graphics_Path_Shape_Type.TYPE_RIGHT_TRIANGLE:
      return 'TYPE_RIGHT_TRIANGLE';
    case Graphics_Path_Shape_Type.TYPE_RHOMBUS:
      return 'TYPE_RHOMBUS';
    case Graphics_Path_Shape_Type.TYPE_STAR:
      return 'TYPE_STAR';
    case Graphics_Path_Shape_Type.TYPE_POLYGON:
      return 'TYPE_POLYGON';
    case Graphics_Path_Shape_Type.TYPE_CUSTOM:
      return 'TYPE_CUSTOM';
    case Graphics_Path_Shape_Type.TYPE_RIGHT_ARROW:
      return 'TYPE_RIGHT_ARROW';
    case Graphics_Path_Shape_Type.TYPE_DOUBLE_ARROW:
      return 'TYPE_DOUBLE_ARROW';
    case Graphics_Path_Shape_Type.TYPE_ROUNDED_RECTANGLE:
      return 'TYPE_ROUNDED_RECTANGLE';
    case Graphics_Path_Shape_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Path_Shape_RoundedRectangle {
  roundness: number;
}

export interface Graphics_Path_Shape_Arrow {
  corner: Graphics_Point | undefined;
}

export interface Graphics_Path_Shape_Polygon {
  numberSides: number;
}

export interface Graphics_Path_Shape_Star {
  innerRadius: number;
  numberPoints: number;
}

export interface Graphics_Fill {
  enable: boolean;
  color?: Color | undefined;
  gradient?: Graphics_Gradient | undefined;
  media?: Media | undefined;
  backgroundEffect?: Graphics_BackgroundEffect | undefined;
}

export interface Graphics_BackgroundEffect {
  backgroundBlur?: Graphics_BackgroundEffect_BackgroundEffectBlur | undefined;
  backgroundInvert?:
    | Graphics_BackgroundEffect_BackgroundEffectInvert
    | undefined;
}

export interface Graphics_BackgroundEffect_BackgroundEffectBlur {
  saturation: number;
  blurAmount: number;
}

export interface Graphics_BackgroundEffect_BackgroundEffectInvert {}

export interface Graphics_Gradient {
  type: Graphics_Gradient_Type;
  angle: number;
  length: number;
  stops: Graphics_Gradient_ColorStop[];
}

export enum Graphics_Gradient_Type {
  TYPE_LINEAR = 0,
  TYPE_RADIAL = 1,
  TYPE_ANGLE = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Gradient_TypeFromJSON(
  object: any,
): Graphics_Gradient_Type {
  switch (object) {
    case 0:
    case 'TYPE_LINEAR':
      return Graphics_Gradient_Type.TYPE_LINEAR;
    case 1:
    case 'TYPE_RADIAL':
      return Graphics_Gradient_Type.TYPE_RADIAL;
    case 2:
    case 'TYPE_ANGLE':
      return Graphics_Gradient_Type.TYPE_ANGLE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Gradient_Type.UNRECOGNIZED;
  }
}

export function graphics_Gradient_TypeToJSON(
  object: Graphics_Gradient_Type,
): string {
  switch (object) {
    case Graphics_Gradient_Type.TYPE_LINEAR:
      return 'TYPE_LINEAR';
    case Graphics_Gradient_Type.TYPE_RADIAL:
      return 'TYPE_RADIAL';
    case Graphics_Gradient_Type.TYPE_ANGLE:
      return 'TYPE_ANGLE';
    case Graphics_Gradient_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Gradient_ColorStop {
  color: Color | undefined;
  position: number;
  blendPoint: number;
}

export interface Graphics_Shadow {
  style: Graphics_Shadow_Style;
  angle: number;
  offset: number;
  radius: number;
  color: Color | undefined;
  opacity: number;
  enable: boolean;
}

export enum Graphics_Shadow_Style {
  STYLE_DROP = 0,
  UNRECOGNIZED = -1,
}

export function graphics_Shadow_StyleFromJSON(
  object: any,
): Graphics_Shadow_Style {
  switch (object) {
    case 0:
    case 'STYLE_DROP':
      return Graphics_Shadow_Style.STYLE_DROP;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Shadow_Style.UNRECOGNIZED;
  }
}

export function graphics_Shadow_StyleToJSON(
  object: Graphics_Shadow_Style,
): string {
  switch (object) {
    case Graphics_Shadow_Style.STYLE_DROP:
      return 'STYLE_DROP';
    case Graphics_Shadow_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Stroke {
  style: Graphics_Stroke_Style;
  width: number;
  color: Color | undefined;
  pattern: number[];
  enable: boolean;
}

export enum Graphics_Stroke_Style {
  STYLE_SOLID_LINE = 0,
  STYLE_SQUARE_DASH = 1,
  STYLE_SHORT_DASH = 2,
  STYLE_LONG_DASH = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Stroke_StyleFromJSON(
  object: any,
): Graphics_Stroke_Style {
  switch (object) {
    case 0:
    case 'STYLE_SOLID_LINE':
      return Graphics_Stroke_Style.STYLE_SOLID_LINE;
    case 1:
    case 'STYLE_SQUARE_DASH':
      return Graphics_Stroke_Style.STYLE_SQUARE_DASH;
    case 2:
    case 'STYLE_SHORT_DASH':
      return Graphics_Stroke_Style.STYLE_SHORT_DASH;
    case 3:
    case 'STYLE_LONG_DASH':
      return Graphics_Stroke_Style.STYLE_LONG_DASH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Stroke_Style.UNRECOGNIZED;
  }
}

export function graphics_Stroke_StyleToJSON(
  object: Graphics_Stroke_Style,
): string {
  switch (object) {
    case Graphics_Stroke_Style.STYLE_SOLID_LINE:
      return 'STYLE_SOLID_LINE';
    case Graphics_Stroke_Style.STYLE_SQUARE_DASH:
      return 'STYLE_SQUARE_DASH';
    case Graphics_Stroke_Style.STYLE_SHORT_DASH:
      return 'STYLE_SHORT_DASH';
    case Graphics_Stroke_Style.STYLE_LONG_DASH:
      return 'STYLE_LONG_DASH';
    case Graphics_Stroke_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Feather {
  style: Graphics_Feather_Style;
  radius: number;
  enable: boolean;
}

export enum Graphics_Feather_Style {
  STYLE_INSIDE = 0,
  STYLE_CENTER = 1,
  STYLE_OUTSIDE = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Feather_StyleFromJSON(
  object: any,
): Graphics_Feather_Style {
  switch (object) {
    case 0:
    case 'STYLE_INSIDE':
      return Graphics_Feather_Style.STYLE_INSIDE;
    case 1:
    case 'STYLE_CENTER':
      return Graphics_Feather_Style.STYLE_CENTER;
    case 2:
    case 'STYLE_OUTSIDE':
      return Graphics_Feather_Style.STYLE_OUTSIDE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Feather_Style.UNRECOGNIZED;
  }
}

export function graphics_Feather_StyleToJSON(
  object: Graphics_Feather_Style,
): string {
  switch (object) {
    case Graphics_Feather_Style.STYLE_INSIDE:
      return 'STYLE_INSIDE';
    case Graphics_Feather_Style.STYLE_CENTER:
      return 'STYLE_CENTER';
    case Graphics_Feather_Style.STYLE_OUTSIDE:
      return 'STYLE_OUTSIDE';
    case Graphics_Feather_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text {
  attributes: Graphics_Text_Attributes | undefined;
  shadow: Graphics_Shadow | undefined;
  rtfData: Uint8Array;
  verticalAlignment: Graphics_Text_VerticalAlignment;
  scaleBehavior: Graphics_Text_ScaleBehavior;
  margins: Graphics_EdgeInsets | undefined;
  isSuperscriptStandardized: boolean;
  transform: Graphics_Text_Transform;
  transformDelimiter: string;
  chordPro: Graphics_Text_ChordPro | undefined;
}

export enum Graphics_Text_VerticalAlignment {
  VERTICAL_ALIGNMENT_TOP = 0,
  VERTICAL_ALIGNMENT_MIDDLE = 1,
  VERTICAL_ALIGNMENT_BOTTOM = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Text_VerticalAlignmentFromJSON(
  object: any,
): Graphics_Text_VerticalAlignment {
  switch (object) {
    case 0:
    case 'VERTICAL_ALIGNMENT_TOP':
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_TOP;
    case 1:
    case 'VERTICAL_ALIGNMENT_MIDDLE':
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE;
    case 2:
    case 'VERTICAL_ALIGNMENT_BOTTOM':
      return Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_BOTTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_VerticalAlignment.UNRECOGNIZED;
  }
}

export function graphics_Text_VerticalAlignmentToJSON(
  object: Graphics_Text_VerticalAlignment,
): string {
  switch (object) {
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_TOP:
      return 'VERTICAL_ALIGNMENT_TOP';
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_MIDDLE:
      return 'VERTICAL_ALIGNMENT_MIDDLE';
    case Graphics_Text_VerticalAlignment.VERTICAL_ALIGNMENT_BOTTOM:
      return 'VERTICAL_ALIGNMENT_BOTTOM';
    case Graphics_Text_VerticalAlignment.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Graphics_Text_ScaleBehavior {
  SCALE_BEHAVIOR_NONE = 0,
  SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT = 1,
  SCALE_BEHAVIOR_SCALE_FONT_DOWN = 2,
  SCALE_BEHAVIOR_SCALE_FONT_UP = 3,
  SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_ScaleBehaviorFromJSON(
  object: any,
): Graphics_Text_ScaleBehavior {
  switch (object) {
    case 0:
    case 'SCALE_BEHAVIOR_NONE':
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_NONE;
    case 1:
    case 'SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT':
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT;
    case 2:
    case 'SCALE_BEHAVIOR_SCALE_FONT_DOWN':
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN;
    case 3:
    case 'SCALE_BEHAVIOR_SCALE_FONT_UP':
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP;
    case 4:
    case 'SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN':
      return Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_ScaleBehavior.UNRECOGNIZED;
  }
}

export function graphics_Text_ScaleBehaviorToJSON(
  object: Graphics_Text_ScaleBehavior,
): string {
  switch (object) {
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_NONE:
      return 'SCALE_BEHAVIOR_NONE';
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT:
      return 'SCALE_BEHAVIOR_ADJUST_CONTAINER_HEIGHT';
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_DOWN:
      return 'SCALE_BEHAVIOR_SCALE_FONT_DOWN';
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP:
      return 'SCALE_BEHAVIOR_SCALE_FONT_UP';
    case Graphics_Text_ScaleBehavior.SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN:
      return 'SCALE_BEHAVIOR_SCALE_FONT_UP_DOWN';
    case Graphics_Text_ScaleBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Graphics_Text_Transform {
  TRANSFORM_NONE = 0,
  TRANSFORM_SINGLE_LINE = 1,
  TRANSFORM_ONE_WORD_PER_LINE = 2,
  TRANSFORM_ONE_CHARACTER_PER_LINE = 3,
  TRANSFORM_REPLACE_LINE_RETURNS = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_TransformFromJSON(
  object: any,
): Graphics_Text_Transform {
  switch (object) {
    case 0:
    case 'TRANSFORM_NONE':
      return Graphics_Text_Transform.TRANSFORM_NONE;
    case 1:
    case 'TRANSFORM_SINGLE_LINE':
      return Graphics_Text_Transform.TRANSFORM_SINGLE_LINE;
    case 2:
    case 'TRANSFORM_ONE_WORD_PER_LINE':
      return Graphics_Text_Transform.TRANSFORM_ONE_WORD_PER_LINE;
    case 3:
    case 'TRANSFORM_ONE_CHARACTER_PER_LINE':
      return Graphics_Text_Transform.TRANSFORM_ONE_CHARACTER_PER_LINE;
    case 4:
    case 'TRANSFORM_REPLACE_LINE_RETURNS':
      return Graphics_Text_Transform.TRANSFORM_REPLACE_LINE_RETURNS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Transform.UNRECOGNIZED;
  }
}

export function graphics_Text_TransformToJSON(
  object: Graphics_Text_Transform,
): string {
  switch (object) {
    case Graphics_Text_Transform.TRANSFORM_NONE:
      return 'TRANSFORM_NONE';
    case Graphics_Text_Transform.TRANSFORM_SINGLE_LINE:
      return 'TRANSFORM_SINGLE_LINE';
    case Graphics_Text_Transform.TRANSFORM_ONE_WORD_PER_LINE:
      return 'TRANSFORM_ONE_WORD_PER_LINE';
    case Graphics_Text_Transform.TRANSFORM_ONE_CHARACTER_PER_LINE:
      return 'TRANSFORM_ONE_CHARACTER_PER_LINE';
    case Graphics_Text_Transform.TRANSFORM_REPLACE_LINE_RETURNS:
      return 'TRANSFORM_REPLACE_LINE_RETURNS';
    case Graphics_Text_Transform.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_LineFillMask {
  enabled: boolean;
  heightOffset: number;
  verticalOffset: number;
  maskStyle: Graphics_Text_LineFillMask_LineMaskStyle;
  widthOffset: number;
  horizontalOffset: number;
}

export enum Graphics_Text_LineFillMask_LineMaskStyle {
  LINE_MASK_STYLE_FULL_WIDTH = 0,
  LINE_MASK_STYLE_LINE_WIDTH = 1,
  LINE_MASK_STYLE_MAX_LINE_WIDTH = 2,
  UNRECOGNIZED = -1,
}

export function graphics_Text_LineFillMask_LineMaskStyleFromJSON(
  object: any,
): Graphics_Text_LineFillMask_LineMaskStyle {
  switch (object) {
    case 0:
    case 'LINE_MASK_STYLE_FULL_WIDTH':
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_FULL_WIDTH;
    case 1:
    case 'LINE_MASK_STYLE_LINE_WIDTH':
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_LINE_WIDTH;
    case 2:
    case 'LINE_MASK_STYLE_MAX_LINE_WIDTH':
      return Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_MAX_LINE_WIDTH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_LineFillMask_LineMaskStyle.UNRECOGNIZED;
  }
}

export function graphics_Text_LineFillMask_LineMaskStyleToJSON(
  object: Graphics_Text_LineFillMask_LineMaskStyle,
): string {
  switch (object) {
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_FULL_WIDTH:
      return 'LINE_MASK_STYLE_FULL_WIDTH';
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_LINE_WIDTH:
      return 'LINE_MASK_STYLE_LINE_WIDTH';
    case Graphics_Text_LineFillMask_LineMaskStyle.LINE_MASK_STYLE_MAX_LINE_WIDTH:
      return 'LINE_MASK_STYLE_MAX_LINE_WIDTH';
    case Graphics_Text_LineFillMask_LineMaskStyle.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_GradientFill {
  gradient: Graphics_Gradient | undefined;
  stretchToDocumentBounds: boolean;
}

export interface Graphics_Text_CutOutFill {}

export interface Graphics_Text_MediaFill {
  media: Media | undefined;
}

export interface Graphics_Text_ChordPro {
  enabled: boolean;
  notation: Graphics_Text_ChordPro_Notation;
  color: Color | undefined;
}

export enum Graphics_Text_ChordPro_Notation {
  NOTATION_CHORDS = 0,
  NOTATION_NUMBERS = 1,
  NOTATION_NUMERALS = 2,
  NOTATION_DO_RE_MI = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Text_ChordPro_NotationFromJSON(
  object: any,
): Graphics_Text_ChordPro_Notation {
  switch (object) {
    case 0:
    case 'NOTATION_CHORDS':
      return Graphics_Text_ChordPro_Notation.NOTATION_CHORDS;
    case 1:
    case 'NOTATION_NUMBERS':
      return Graphics_Text_ChordPro_Notation.NOTATION_NUMBERS;
    case 2:
    case 'NOTATION_NUMERALS':
      return Graphics_Text_ChordPro_Notation.NOTATION_NUMERALS;
    case 3:
    case 'NOTATION_DO_RE_MI':
      return Graphics_Text_ChordPro_Notation.NOTATION_DO_RE_MI;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_ChordPro_Notation.UNRECOGNIZED;
  }
}

export function graphics_Text_ChordPro_NotationToJSON(
  object: Graphics_Text_ChordPro_Notation,
): string {
  switch (object) {
    case Graphics_Text_ChordPro_Notation.NOTATION_CHORDS:
      return 'NOTATION_CHORDS';
    case Graphics_Text_ChordPro_Notation.NOTATION_NUMBERS:
      return 'NOTATION_NUMBERS';
    case Graphics_Text_ChordPro_Notation.NOTATION_NUMERALS:
      return 'NOTATION_NUMERALS';
    case Graphics_Text_ChordPro_Notation.NOTATION_DO_RE_MI:
      return 'NOTATION_DO_RE_MI';
    case Graphics_Text_ChordPro_Notation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_Attributes {
  font: Font | undefined;
  capitalization: Graphics_Text_Attributes_Capitalization;
  underlineStyle: Graphics_Text_Attributes_Underline | undefined;
  underlineColor: Color | undefined;
  paragraphStyle: Graphics_Text_Attributes_Paragraph | undefined;
  kerning: number;
  superscript: number;
  strikethroughStyle: Graphics_Text_Attributes_Underline | undefined;
  strikethroughColor: Color | undefined;
  strokeWidth: number;
  strokeColor: Color | undefined;
  customAttributes: Graphics_Text_Attributes_CustomAttribute[];
  backgroundColor: Color | undefined;
  textSolidFill?: Color | undefined;
  textGradientFill?: Graphics_Text_GradientFill | undefined;
  cutOutFill?: Graphics_Text_CutOutFill | undefined;
  mediaFill?: Graphics_Text_MediaFill | undefined;
  backgroundEffect?: Graphics_BackgroundEffect | undefined;
}

export enum Graphics_Text_Attributes_Capitalization {
  CAPITALIZATION_NONE = 0,
  CAPITALIZATION_ALL_CAPS = 1,
  CAPITALIZATION_SMALL_CAPS = 2,
  CAPITALIZATION_TITLE_CASE = 3,
  CAPITALIZATION_START_CASE = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_CapitalizationFromJSON(
  object: any,
): Graphics_Text_Attributes_Capitalization {
  switch (object) {
    case 0:
    case 'CAPITALIZATION_NONE':
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_NONE;
    case 1:
    case 'CAPITALIZATION_ALL_CAPS':
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS;
    case 2:
    case 'CAPITALIZATION_SMALL_CAPS':
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_SMALL_CAPS;
    case 3:
    case 'CAPITALIZATION_TITLE_CASE':
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_TITLE_CASE;
    case 4:
    case 'CAPITALIZATION_START_CASE':
      return Graphics_Text_Attributes_Capitalization.CAPITALIZATION_START_CASE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Attributes_Capitalization.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_CapitalizationToJSON(
  object: Graphics_Text_Attributes_Capitalization,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_NONE:
      return 'CAPITALIZATION_NONE';
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_ALL_CAPS:
      return 'CAPITALIZATION_ALL_CAPS';
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_SMALL_CAPS:
      return 'CAPITALIZATION_SMALL_CAPS';
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_TITLE_CASE:
      return 'CAPITALIZATION_TITLE_CASE';
    case Graphics_Text_Attributes_Capitalization.CAPITALIZATION_START_CASE:
      return 'CAPITALIZATION_START_CASE';
    case Graphics_Text_Attributes_Capitalization.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Graphics_Text_Attributes_Alignment {
  ALIGNMENT_LEFT = 0,
  ALIGNMENT_RIGHT = 1,
  ALIGNMENT_CENTER = 2,
  ALIGNMENT_JUSTIFIED = 3,
  ALIGNMENT_NATURAL = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_AlignmentFromJSON(
  object: any,
): Graphics_Text_Attributes_Alignment {
  switch (object) {
    case 0:
    case 'ALIGNMENT_LEFT':
      return Graphics_Text_Attributes_Alignment.ALIGNMENT_LEFT;
    case 1:
    case 'ALIGNMENT_RIGHT':
      return Graphics_Text_Attributes_Alignment.ALIGNMENT_RIGHT;
    case 2:
    case 'ALIGNMENT_CENTER':
      return Graphics_Text_Attributes_Alignment.ALIGNMENT_CENTER;
    case 3:
    case 'ALIGNMENT_JUSTIFIED':
      return Graphics_Text_Attributes_Alignment.ALIGNMENT_JUSTIFIED;
    case 4:
    case 'ALIGNMENT_NATURAL':
      return Graphics_Text_Attributes_Alignment.ALIGNMENT_NATURAL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Attributes_Alignment.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_AlignmentToJSON(
  object: Graphics_Text_Attributes_Alignment,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Alignment.ALIGNMENT_LEFT:
      return 'ALIGNMENT_LEFT';
    case Graphics_Text_Attributes_Alignment.ALIGNMENT_RIGHT:
      return 'ALIGNMENT_RIGHT';
    case Graphics_Text_Attributes_Alignment.ALIGNMENT_CENTER:
      return 'ALIGNMENT_CENTER';
    case Graphics_Text_Attributes_Alignment.ALIGNMENT_JUSTIFIED:
      return 'ALIGNMENT_JUSTIFIED';
    case Graphics_Text_Attributes_Alignment.ALIGNMENT_NATURAL:
      return 'ALIGNMENT_NATURAL';
    case Graphics_Text_Attributes_Alignment.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_Attributes_Underline {
  style: Graphics_Text_Attributes_Underline_Style;
  pattern: Graphics_Text_Attributes_Underline_Pattern;
  byWord: boolean;
}

export enum Graphics_Text_Attributes_Underline_Style {
  STYLE_NONE = 0,
  STYLE_SINGLE = 1,
  STYLE_THICK = 2,
  STYLE_DOUBLE = 3,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Underline_StyleFromJSON(
  object: any,
): Graphics_Text_Attributes_Underline_Style {
  switch (object) {
    case 0:
    case 'STYLE_NONE':
      return Graphics_Text_Attributes_Underline_Style.STYLE_NONE;
    case 1:
    case 'STYLE_SINGLE':
      return Graphics_Text_Attributes_Underline_Style.STYLE_SINGLE;
    case 2:
    case 'STYLE_THICK':
      return Graphics_Text_Attributes_Underline_Style.STYLE_THICK;
    case 3:
    case 'STYLE_DOUBLE':
      return Graphics_Text_Attributes_Underline_Style.STYLE_DOUBLE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Attributes_Underline_Style.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Underline_StyleToJSON(
  object: Graphics_Text_Attributes_Underline_Style,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Underline_Style.STYLE_NONE:
      return 'STYLE_NONE';
    case Graphics_Text_Attributes_Underline_Style.STYLE_SINGLE:
      return 'STYLE_SINGLE';
    case Graphics_Text_Attributes_Underline_Style.STYLE_THICK:
      return 'STYLE_THICK';
    case Graphics_Text_Attributes_Underline_Style.STYLE_DOUBLE:
      return 'STYLE_DOUBLE';
    case Graphics_Text_Attributes_Underline_Style.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Graphics_Text_Attributes_Underline_Pattern {
  PATTERN_SOLID = 0,
  PATTERN_DOT = 1,
  PATTERN_DASH = 2,
  PATTERN_DASH_DOT = 3,
  PATTERN_DASH_DOT_DOT = 4,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Underline_PatternFromJSON(
  object: any,
): Graphics_Text_Attributes_Underline_Pattern {
  switch (object) {
    case 0:
    case 'PATTERN_SOLID':
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_SOLID;
    case 1:
    case 'PATTERN_DOT':
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DOT;
    case 2:
    case 'PATTERN_DASH':
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH;
    case 3:
    case 'PATTERN_DASH_DOT':
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT;
    case 4:
    case 'PATTERN_DASH_DOT_DOT':
      return Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT_DOT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Attributes_Underline_Pattern.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Underline_PatternToJSON(
  object: Graphics_Text_Attributes_Underline_Pattern,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_SOLID:
      return 'PATTERN_SOLID';
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DOT:
      return 'PATTERN_DOT';
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH:
      return 'PATTERN_DASH';
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT:
      return 'PATTERN_DASH_DOT';
    case Graphics_Text_Attributes_Underline_Pattern.PATTERN_DASH_DOT_DOT:
      return 'PATTERN_DASH_DOT_DOT';
    case Graphics_Text_Attributes_Underline_Pattern.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_Attributes_Paragraph {
  alignment: Graphics_Text_Attributes_Alignment;
  firstLineHeadIndent: number;
  headIndent: number;
  tailIndent: number;
  lineHeightMultiple: number;
  maximumLineHeight: number;
  minimumLineHeight: number;
  lineSpacing: number;
  paragraphSpacing: number;
  paragraphSpacingBefore: number;
  tabStops: Graphics_Text_Attributes_Paragraph_TabStop[];
  defaultTabInterval: number;
  textList: Graphics_Text_Attributes_Paragraph_TextList | undefined;
  textLists: Graphics_Text_Attributes_Paragraph_TextList[];
}

export interface Graphics_Text_Attributes_Paragraph_TabStop {
  location: number;
  alignment: Graphics_Text_Attributes_Alignment;
}

export interface Graphics_Text_Attributes_Paragraph_TextList {
  isEnabled: boolean;
  numberType: Graphics_Text_Attributes_Paragraph_TextList_NumberType;
  prefix: string;
  postfix: string;
  startingNumber: number;
}

export enum Graphics_Text_Attributes_Paragraph_TextList_NumberType {
  NUMBER_TYPE_BOX = 0,
  NUMBER_TYPE_CHECK = 1,
  NUMBER_TYPE_CIRCLE = 2,
  NUMBER_TYPE_DIAMOND = 3,
  NUMBER_TYPE_DISC = 4,
  NUMBER_TYPE_HYPHEN = 5,
  NUMBER_TYPE_SQUARE = 6,
  NUMBER_TYPE_DECIMAL = 7,
  NUMBER_TYPE_LOWERCASE_ALPHA = 8,
  NUMBER_TYPE_UPPERCASE_ALPHA = 9,
  NUMBER_TYPE_LOWERCASE_ROMAN = 10,
  NUMBER_TYPE_UPPERCASE_ROMAN = 11,
  UNRECOGNIZED = -1,
}

export function graphics_Text_Attributes_Paragraph_TextList_NumberTypeFromJSON(
  object: any,
): Graphics_Text_Attributes_Paragraph_TextList_NumberType {
  switch (object) {
    case 0:
    case 'NUMBER_TYPE_BOX':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_BOX;
    case 1:
    case 'NUMBER_TYPE_CHECK':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CHECK;
    case 2:
    case 'NUMBER_TYPE_CIRCLE':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CIRCLE;
    case 3:
    case 'NUMBER_TYPE_DIAMOND':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DIAMOND;
    case 4:
    case 'NUMBER_TYPE_DISC':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DISC;
    case 5:
    case 'NUMBER_TYPE_HYPHEN':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_HYPHEN;
    case 6:
    case 'NUMBER_TYPE_SQUARE':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_SQUARE;
    case 7:
    case 'NUMBER_TYPE_DECIMAL':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DECIMAL;
    case 8:
    case 'NUMBER_TYPE_LOWERCASE_ALPHA':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ALPHA;
    case 9:
    case 'NUMBER_TYPE_UPPERCASE_ALPHA':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ALPHA;
    case 10:
    case 'NUMBER_TYPE_LOWERCASE_ROMAN':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ROMAN;
    case 11:
    case 'NUMBER_TYPE_UPPERCASE_ROMAN':
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ROMAN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Graphics_Text_Attributes_Paragraph_TextList_NumberType.UNRECOGNIZED;
  }
}

export function graphics_Text_Attributes_Paragraph_TextList_NumberTypeToJSON(
  object: Graphics_Text_Attributes_Paragraph_TextList_NumberType,
): string {
  switch (object) {
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_BOX:
      return 'NUMBER_TYPE_BOX';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CHECK:
      return 'NUMBER_TYPE_CHECK';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_CIRCLE:
      return 'NUMBER_TYPE_CIRCLE';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DIAMOND:
      return 'NUMBER_TYPE_DIAMOND';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DISC:
      return 'NUMBER_TYPE_DISC';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_HYPHEN:
      return 'NUMBER_TYPE_HYPHEN';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_SQUARE:
      return 'NUMBER_TYPE_SQUARE';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_DECIMAL:
      return 'NUMBER_TYPE_DECIMAL';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ALPHA:
      return 'NUMBER_TYPE_LOWERCASE_ALPHA';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ALPHA:
      return 'NUMBER_TYPE_UPPERCASE_ALPHA';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_LOWERCASE_ROMAN:
      return 'NUMBER_TYPE_LOWERCASE_ROMAN';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.NUMBER_TYPE_UPPERCASE_ROMAN:
      return 'NUMBER_TYPE_UPPERCASE_ROMAN';
    case Graphics_Text_Attributes_Paragraph_TextList_NumberType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Graphics_Text_Attributes_CustomAttribute {
  range: IntRange | undefined;
  capitalization?: Graphics_Text_Attributes_Capitalization | undefined;
  originalFontSize?: number | undefined;
  fontScaleFactor?: number | undefined;
  textGradientFill?: Graphics_Text_GradientFill | undefined;
  shouldPreserveForegroundColor?: boolean | undefined;
  chord?: string | undefined;
  cutOutFill?: Graphics_Text_CutOutFill | undefined;
  mediaFill?: Graphics_Text_MediaFill | undefined;
  backgroundEffect?: Graphics_BackgroundEffect | undefined;
}

export interface Media {
  uuid: UUID | undefined;
  url: URL | undefined;
  metadata: Media_Metadata | undefined;
  audio?: Media_AudioTypeProperties | undefined;
  image?: Media_ImageTypeProperties | undefined;
  video?: Media_VideoTypeProperties | undefined;
  liveVideo?: Media_LiveVideoTypeProperties | undefined;
  webContent?: Media_WebContentTypeProperties | undefined;
}

export enum Media_ScaleBehavior {
  SCALE_BEHAVIOR_FIT = 0,
  SCALE_BEHAVIOR_FILL = 1,
  SCALE_BEHAVIOR_STRETCH = 2,
  SCALE_BEHAVIOR_CUSTOM = 3,
  UNRECOGNIZED = -1,
}

export function media_ScaleBehaviorFromJSON(object: any): Media_ScaleBehavior {
  switch (object) {
    case 0:
    case 'SCALE_BEHAVIOR_FIT':
      return Media_ScaleBehavior.SCALE_BEHAVIOR_FIT;
    case 1:
    case 'SCALE_BEHAVIOR_FILL':
      return Media_ScaleBehavior.SCALE_BEHAVIOR_FILL;
    case 2:
    case 'SCALE_BEHAVIOR_STRETCH':
      return Media_ScaleBehavior.SCALE_BEHAVIOR_STRETCH;
    case 3:
    case 'SCALE_BEHAVIOR_CUSTOM':
      return Media_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_ScaleBehavior.UNRECOGNIZED;
  }
}

export function media_ScaleBehaviorToJSON(object: Media_ScaleBehavior): string {
  switch (object) {
    case Media_ScaleBehavior.SCALE_BEHAVIOR_FIT:
      return 'SCALE_BEHAVIOR_FIT';
    case Media_ScaleBehavior.SCALE_BEHAVIOR_FILL:
      return 'SCALE_BEHAVIOR_FILL';
    case Media_ScaleBehavior.SCALE_BEHAVIOR_STRETCH:
      return 'SCALE_BEHAVIOR_STRETCH';
    case Media_ScaleBehavior.SCALE_BEHAVIOR_CUSTOM:
      return 'SCALE_BEHAVIOR_CUSTOM';
    case Media_ScaleBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Media_ScaleAlignment {
  SCALE_ALIGNMENT_MIDDLE_CENTER = 0,
  SCALE_ALIGNMENT_TOP_LEFT = 1,
  SCALE_ALIGNMENT_TOP_CENTER = 2,
  SCALE_ALIGNMENT_TOP_RIGHT = 3,
  SCALE_ALIGNMENT_MIDDLE_RIGHT = 4,
  SCALE_ALIGNMENT_BOTTOM_RIGHT = 5,
  SCALE_ALIGNMENT_BOTTOM_CENTER = 6,
  SCALE_ALIGNMENT_BOTTOM_LEFT = 7,
  SCALE_ALIGNMENT_MIDDLE_LEFT = 8,
  UNRECOGNIZED = -1,
}

export function media_ScaleAlignmentFromJSON(
  object: any,
): Media_ScaleAlignment {
  switch (object) {
    case 0:
    case 'SCALE_ALIGNMENT_MIDDLE_CENTER':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER;
    case 1:
    case 'SCALE_ALIGNMENT_TOP_LEFT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT;
    case 2:
    case 'SCALE_ALIGNMENT_TOP_CENTER':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER;
    case 3:
    case 'SCALE_ALIGNMENT_TOP_RIGHT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT;
    case 4:
    case 'SCALE_ALIGNMENT_MIDDLE_RIGHT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT;
    case 5:
    case 'SCALE_ALIGNMENT_BOTTOM_RIGHT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT;
    case 6:
    case 'SCALE_ALIGNMENT_BOTTOM_CENTER':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER;
    case 7:
    case 'SCALE_ALIGNMENT_BOTTOM_LEFT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT;
    case 8:
    case 'SCALE_ALIGNMENT_MIDDLE_LEFT':
      return Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_ScaleAlignment.UNRECOGNIZED;
  }
}

export function media_ScaleAlignmentToJSON(
  object: Media_ScaleAlignment,
): string {
  switch (object) {
    case Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_CENTER:
      return 'SCALE_ALIGNMENT_MIDDLE_CENTER';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_LEFT:
      return 'SCALE_ALIGNMENT_TOP_LEFT';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_CENTER:
      return 'SCALE_ALIGNMENT_TOP_CENTER';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_TOP_RIGHT:
      return 'SCALE_ALIGNMENT_TOP_RIGHT';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_RIGHT:
      return 'SCALE_ALIGNMENT_MIDDLE_RIGHT';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_RIGHT:
      return 'SCALE_ALIGNMENT_BOTTOM_RIGHT';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_CENTER:
      return 'SCALE_ALIGNMENT_BOTTOM_CENTER';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_BOTTOM_LEFT:
      return 'SCALE_ALIGNMENT_BOTTOM_LEFT';
    case Media_ScaleAlignment.SCALE_ALIGNMENT_MIDDLE_LEFT:
      return 'SCALE_ALIGNMENT_MIDDLE_LEFT';
    case Media_ScaleAlignment.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Media_Metadata {
  manufactureName: string;
  manufactureUrl: URL | undefined;
  information: string;
  artist: string;
  format: string;
}

export interface Media_VideoDevice {
  type: Media_VideoDevice_Type;
  name: string;
  uniqueId: string;
  modelId: string;
  formatIndex: number;
  audioRouting: DigitalAudio_Device_Routing | undefined;
}

export enum Media_VideoDevice_Type {
  TYPE_GENERIC = 0,
  TYPE_DIRECTSHOW = 1,
  TYPE_BLACKMAGIC = 2,
  TYPE_AJA = 3,
  TYPE_AV = 4,
  TYPE_SYPHON = 5,
  TYPE_NDI = 6,
  TYPE_BLUEFISH = 7,
  UNRECOGNIZED = -1,
}

export function media_VideoDevice_TypeFromJSON(
  object: any,
): Media_VideoDevice_Type {
  switch (object) {
    case 0:
    case 'TYPE_GENERIC':
      return Media_VideoDevice_Type.TYPE_GENERIC;
    case 1:
    case 'TYPE_DIRECTSHOW':
      return Media_VideoDevice_Type.TYPE_DIRECTSHOW;
    case 2:
    case 'TYPE_BLACKMAGIC':
      return Media_VideoDevice_Type.TYPE_BLACKMAGIC;
    case 3:
    case 'TYPE_AJA':
      return Media_VideoDevice_Type.TYPE_AJA;
    case 4:
    case 'TYPE_AV':
      return Media_VideoDevice_Type.TYPE_AV;
    case 5:
    case 'TYPE_SYPHON':
      return Media_VideoDevice_Type.TYPE_SYPHON;
    case 6:
    case 'TYPE_NDI':
      return Media_VideoDevice_Type.TYPE_NDI;
    case 7:
    case 'TYPE_BLUEFISH':
      return Media_VideoDevice_Type.TYPE_BLUEFISH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_VideoDevice_Type.UNRECOGNIZED;
  }
}

export function media_VideoDevice_TypeToJSON(
  object: Media_VideoDevice_Type,
): string {
  switch (object) {
    case Media_VideoDevice_Type.TYPE_GENERIC:
      return 'TYPE_GENERIC';
    case Media_VideoDevice_Type.TYPE_DIRECTSHOW:
      return 'TYPE_DIRECTSHOW';
    case Media_VideoDevice_Type.TYPE_BLACKMAGIC:
      return 'TYPE_BLACKMAGIC';
    case Media_VideoDevice_Type.TYPE_AJA:
      return 'TYPE_AJA';
    case Media_VideoDevice_Type.TYPE_AV:
      return 'TYPE_AV';
    case Media_VideoDevice_Type.TYPE_SYPHON:
      return 'TYPE_SYPHON';
    case Media_VideoDevice_Type.TYPE_NDI:
      return 'TYPE_NDI';
    case Media_VideoDevice_Type.TYPE_BLUEFISH:
      return 'TYPE_BLUEFISH';
    case Media_VideoDevice_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Media_AudioDevice {
  name: string;
  uniqueId: string;
  modelId: string;
  channelCount: number;
}

export interface Media_Audio {}

export interface Media_Audio_Channel {
  index: number;
  muted: boolean;
  volume: number;
  compressLimit: boolean;
  outputs: Media_Audio_Channel_Output[];
}

export interface Media_Audio_Channel_Output {
  channelIndex: number;
}

export interface Media_AudioProperties {
  volume: number;
  audioChannels: Media_Audio_Channel[];
  isCustomMapping: boolean;
}

export interface Media_TransportProperties {
  playRate: number;
  inPoint: number;
  outPoint: number;
  fadeInDuration: number;
  fadeOutDuration: number;
  shouldFadeIn: boolean;
  shouldFadeOut: boolean;
  endPoint: number;
  playbackBehavior: Media_TransportProperties_PlaybackBehavior;
  loopTime: number;
  timesToLoop: number;
  retrigger: Media_TransportProperties_RetriggerSetting;
}

export enum Media_TransportProperties_PlaybackBehavior {
  PLAYBACK_BEHAVIOR_STOP = 0,
  PLAYBACK_BEHAVIOR_LOOP = 1,
  PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT = 2,
  PLAYBACK_BEHAVIOR_LOOP_FOR_TIME = 3,
  UNRECOGNIZED = -1,
}

export function media_TransportProperties_PlaybackBehaviorFromJSON(
  object: any,
): Media_TransportProperties_PlaybackBehavior {
  switch (object) {
    case 0:
    case 'PLAYBACK_BEHAVIOR_STOP':
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP;
    case 1:
    case 'PLAYBACK_BEHAVIOR_LOOP':
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP;
    case 2:
    case 'PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT':
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT;
    case 3:
    case 'PLAYBACK_BEHAVIOR_LOOP_FOR_TIME':
      return Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_TransportProperties_PlaybackBehavior.UNRECOGNIZED;
  }
}

export function media_TransportProperties_PlaybackBehaviorToJSON(
  object: Media_TransportProperties_PlaybackBehavior,
): string {
  switch (object) {
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_STOP:
      return 'PLAYBACK_BEHAVIOR_STOP';
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP:
      return 'PLAYBACK_BEHAVIOR_LOOP';
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT:
      return 'PLAYBACK_BEHAVIOR_LOOP_FOR_COUNT';
    case Media_TransportProperties_PlaybackBehavior.PLAYBACK_BEHAVIOR_LOOP_FOR_TIME:
      return 'PLAYBACK_BEHAVIOR_LOOP_FOR_TIME';
    case Media_TransportProperties_PlaybackBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Media_TransportProperties_RetriggerSetting {
  RETRIGGER_SETTING_UNSET = 0,
  RETRIGGER_SETTING_ALWAYS = 1,
  RETRIGGER_SETTING_NEVER = 2,
  RETRIGGER_SETTING_AUTOMATIC = 3,
  UNRECOGNIZED = -1,
}

export function media_TransportProperties_RetriggerSettingFromJSON(
  object: any,
): Media_TransportProperties_RetriggerSetting {
  switch (object) {
    case 0:
    case 'RETRIGGER_SETTING_UNSET':
      return Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_UNSET;
    case 1:
    case 'RETRIGGER_SETTING_ALWAYS':
      return Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_ALWAYS;
    case 2:
    case 'RETRIGGER_SETTING_NEVER':
      return Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_NEVER;
    case 3:
    case 'RETRIGGER_SETTING_AUTOMATIC':
      return Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_AUTOMATIC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_TransportProperties_RetriggerSetting.UNRECOGNIZED;
  }
}

export function media_TransportProperties_RetriggerSettingToJSON(
  object: Media_TransportProperties_RetriggerSetting,
): string {
  switch (object) {
    case Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_UNSET:
      return 'RETRIGGER_SETTING_UNSET';
    case Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_ALWAYS:
      return 'RETRIGGER_SETTING_ALWAYS';
    case Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_NEVER:
      return 'RETRIGGER_SETTING_NEVER';
    case Media_TransportProperties_RetriggerSetting.RETRIGGER_SETTING_AUTOMATIC:
      return 'RETRIGGER_SETTING_AUTOMATIC';
    case Media_TransportProperties_RetriggerSetting.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Media_DrawingProperties {
  scaleBehavior: Media_ScaleBehavior;
  isBlurred: boolean;
  scaleAlignment: Media_ScaleAlignment;
  flippedHorizontally: boolean;
  flippedVertically: boolean;
  naturalSize: Graphics_Size | undefined;
  customImageRotation: number;
  customImageBounds: Graphics_Rect | undefined;
  customImageAspectLocked: boolean;
  alphaInverted: boolean;
  nativeRotation: Media_DrawingProperties_NativeRotationType;
  selectedEffectPresetUuid: UUID | undefined;
  effects: Effect[];
  cropEnable: boolean;
  cropInsets: Graphics_EdgeInsets | undefined;
  alphaType: AlphaType;
}

export enum Media_DrawingProperties_NativeRotationType {
  NATIVE_ROTATION_TYPE_ROTATE_STANDARD = 0,
  NATIVE_ROTATION_TYPE_ROTATE_90 = 90,
  NATIVE_ROTATION_TYPE_ROTATE_180 = 180,
  NATIVE_ROTATION_TYPE_ROTATE_270 = 270,
  UNRECOGNIZED = -1,
}

export function media_DrawingProperties_NativeRotationTypeFromJSON(
  object: any,
): Media_DrawingProperties_NativeRotationType {
  switch (object) {
    case 0:
    case 'NATIVE_ROTATION_TYPE_ROTATE_STANDARD':
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD;
    case 90:
    case 'NATIVE_ROTATION_TYPE_ROTATE_90':
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90;
    case 180:
    case 'NATIVE_ROTATION_TYPE_ROTATE_180':
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180;
    case 270:
    case 'NATIVE_ROTATION_TYPE_ROTATE_270':
      return Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_DrawingProperties_NativeRotationType.UNRECOGNIZED;
  }
}

export function media_DrawingProperties_NativeRotationTypeToJSON(
  object: Media_DrawingProperties_NativeRotationType,
): string {
  switch (object) {
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_STANDARD:
      return 'NATIVE_ROTATION_TYPE_ROTATE_STANDARD';
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_90:
      return 'NATIVE_ROTATION_TYPE_ROTATE_90';
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_180:
      return 'NATIVE_ROTATION_TYPE_ROTATE_180';
    case Media_DrawingProperties_NativeRotationType.NATIVE_ROTATION_TYPE_ROTATE_270:
      return 'NATIVE_ROTATION_TYPE_ROTATE_270';
    case Media_DrawingProperties_NativeRotationType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Media_VideoProperties {
  frameRate: number;
  fieldType: Media_VideoProperties_FieldType;
  thumbnailPosition: number;
  endBehavior: Media_VideoProperties_EndBehavior;
  softLoop: boolean;
  softLoopDuration: number;
}

export enum Media_VideoProperties_EndBehavior {
  END_BEHAVIOR_STOP = 0,
  END_BEHAVIOR_STOP_ON_BLACK = 1,
  END_BEHAVIOR_STOP_ON_CLEAR = 2,
  END_BEHAVIOR_FADE_TO_BLACK = 3,
  END_BEHAVIOR_FADE_TO_CLEAR = 4,
  UNRECOGNIZED = -1,
}

export function media_VideoProperties_EndBehaviorFromJSON(
  object: any,
): Media_VideoProperties_EndBehavior {
  switch (object) {
    case 0:
    case 'END_BEHAVIOR_STOP':
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP;
    case 1:
    case 'END_BEHAVIOR_STOP_ON_BLACK':
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK;
    case 2:
    case 'END_BEHAVIOR_STOP_ON_CLEAR':
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR;
    case 3:
    case 'END_BEHAVIOR_FADE_TO_BLACK':
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK;
    case 4:
    case 'END_BEHAVIOR_FADE_TO_CLEAR':
      return Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_VideoProperties_EndBehavior.UNRECOGNIZED;
  }
}

export function media_VideoProperties_EndBehaviorToJSON(
  object: Media_VideoProperties_EndBehavior,
): string {
  switch (object) {
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP:
      return 'END_BEHAVIOR_STOP';
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_BLACK:
      return 'END_BEHAVIOR_STOP_ON_BLACK';
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_STOP_ON_CLEAR:
      return 'END_BEHAVIOR_STOP_ON_CLEAR';
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_BLACK:
      return 'END_BEHAVIOR_FADE_TO_BLACK';
    case Media_VideoProperties_EndBehavior.END_BEHAVIOR_FADE_TO_CLEAR:
      return 'END_BEHAVIOR_FADE_TO_CLEAR';
    case Media_VideoProperties_EndBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Media_VideoProperties_FieldType {
  FIELD_TYPE_UNKNOWN = 0,
  FIELD_TYPE_PROGRESSIVE = 1,
  FIELD_TYPE_INTERLACED_UPPER_FIRST = 2,
  FIELD_TYPE_INTERLACED_LOWER_FIRST = 3,
  UNRECOGNIZED = -1,
}

export function media_VideoProperties_FieldTypeFromJSON(
  object: any,
): Media_VideoProperties_FieldType {
  switch (object) {
    case 0:
    case 'FIELD_TYPE_UNKNOWN':
      return Media_VideoProperties_FieldType.FIELD_TYPE_UNKNOWN;
    case 1:
    case 'FIELD_TYPE_PROGRESSIVE':
      return Media_VideoProperties_FieldType.FIELD_TYPE_PROGRESSIVE;
    case 2:
    case 'FIELD_TYPE_INTERLACED_UPPER_FIRST':
      return Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_UPPER_FIRST;
    case 3:
    case 'FIELD_TYPE_INTERLACED_LOWER_FIRST':
      return Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_LOWER_FIRST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Media_VideoProperties_FieldType.UNRECOGNIZED;
  }
}

export function media_VideoProperties_FieldTypeToJSON(
  object: Media_VideoProperties_FieldType,
): string {
  switch (object) {
    case Media_VideoProperties_FieldType.FIELD_TYPE_UNKNOWN:
      return 'FIELD_TYPE_UNKNOWN';
    case Media_VideoProperties_FieldType.FIELD_TYPE_PROGRESSIVE:
      return 'FIELD_TYPE_PROGRESSIVE';
    case Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_UPPER_FIRST:
      return 'FIELD_TYPE_INTERLACED_UPPER_FIRST';
    case Media_VideoProperties_FieldType.FIELD_TYPE_INTERLACED_LOWER_FIRST:
      return 'FIELD_TYPE_INTERLACED_LOWER_FIRST';
    case Media_VideoProperties_FieldType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Media_LiveVideoProperties {
  videoDevice: Media_VideoDevice | undefined;
  audioDevice: Media_AudioDevice | undefined;
  liveVideoIndex: number;
}

export interface Media_AudioTypeProperties {
  audio: Media_AudioProperties | undefined;
  transport: Media_TransportProperties | undefined;
  file: FileProperties | undefined;
}

export interface Media_ImageTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  file: FileProperties | undefined;
}

export interface Media_VideoTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  audio: Media_AudioProperties | undefined;
  transport: Media_TransportProperties | undefined;
  video: Media_VideoProperties | undefined;
  file: FileProperties | undefined;
}

export interface Media_LiveVideoTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  audio: Media_AudioProperties | undefined;
  liveVideo: Media_LiveVideoProperties | undefined;
}

export interface Media_WebContentTypeProperties {
  drawing: Media_DrawingProperties | undefined;
  url: URL | undefined;
}

function createBaseGraphics(): Graphics {
  return {};
}

export const Graphics = {
  encode(_: Graphics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics();
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

  fromJSON(_: any): Graphics {
    return {};
  },

  toJSON(_: Graphics): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics>, I>>(base?: I): Graphics {
    return Graphics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics>, I>>(_: I): Graphics {
    const message = createBaseGraphics();
    return message;
  },
};

function createBaseGraphics_Element(): Graphics_Element {
  return {
    uuid: undefined,
    name: '',
    bounds: undefined,
    rotation: 0,
    opacity: 0,
    locked: false,
    aspectRatioLocked: false,
    path: undefined,
    fill: undefined,
    stroke: undefined,
    shadow: undefined,
    feather: undefined,
    text: undefined,
    flipMode: 0,
    hidden: false,
    textLineMask: undefined,
  };
}

export const Graphics_Element = {
  encode(
    message: Graphics_Element,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.bounds !== undefined) {
      Graphics_Rect.encode(message.bounds, writer.uint32(26).fork()).ldelim();
    }
    if (message.rotation !== 0) {
      writer.uint32(33).double(message.rotation);
    }
    if (message.opacity !== 0) {
      writer.uint32(41).double(message.opacity);
    }
    if (message.locked !== false) {
      writer.uint32(48).bool(message.locked);
    }
    if (message.aspectRatioLocked !== false) {
      writer.uint32(56).bool(message.aspectRatioLocked);
    }
    if (message.path !== undefined) {
      Graphics_Path.encode(message.path, writer.uint32(66).fork()).ldelim();
    }
    if (message.fill !== undefined) {
      Graphics_Fill.encode(message.fill, writer.uint32(74).fork()).ldelim();
    }
    if (message.stroke !== undefined) {
      Graphics_Stroke.encode(message.stroke, writer.uint32(82).fork()).ldelim();
    }
    if (message.shadow !== undefined) {
      Graphics_Shadow.encode(message.shadow, writer.uint32(90).fork()).ldelim();
    }
    if (message.feather !== undefined) {
      Graphics_Feather.encode(
        message.feather,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.text !== undefined) {
      Graphics_Text.encode(message.text, writer.uint32(106).fork()).ldelim();
    }
    if (message.flipMode !== 0) {
      writer.uint32(120).int32(message.flipMode);
    }
    if (message.hidden !== false) {
      writer.uint32(128).bool(message.hidden);
    }
    if (message.textLineMask !== undefined) {
      Graphics_Text_LineFillMask.encode(
        message.textLineMask,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Element {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Element();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bounds = Graphics_Rect.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.rotation = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.opacity = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.locked = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.aspectRatioLocked = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.path = Graphics_Path.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.fill = Graphics_Fill.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.stroke = Graphics_Stroke.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.shadow = Graphics_Shadow.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.feather = Graphics_Feather.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.text = Graphics_Text.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.flipMode = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.textLineMask = Graphics_Text_LineFillMask.decode(
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

  fromJSON(object: any): Graphics_Element {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      bounds: isSet(object.bounds)
        ? Graphics_Rect.fromJSON(object.bounds)
        : undefined,
      rotation: isSet(object.rotation) ? globalThis.Number(object.rotation) : 0,
      opacity: isSet(object.opacity) ? globalThis.Number(object.opacity) : 0,
      locked: isSet(object.locked) ? globalThis.Boolean(object.locked) : false,
      aspectRatioLocked: isSet(object.aspectRatioLocked)
        ? globalThis.Boolean(object.aspectRatioLocked)
        : false,
      path: isSet(object.path)
        ? Graphics_Path.fromJSON(object.path)
        : undefined,
      fill: isSet(object.fill)
        ? Graphics_Fill.fromJSON(object.fill)
        : undefined,
      stroke: isSet(object.stroke)
        ? Graphics_Stroke.fromJSON(object.stroke)
        : undefined,
      shadow: isSet(object.shadow)
        ? Graphics_Shadow.fromJSON(object.shadow)
        : undefined,
      feather: isSet(object.feather)
        ? Graphics_Feather.fromJSON(object.feather)
        : undefined,
      text: isSet(object.text)
        ? Graphics_Text.fromJSON(object.text)
        : undefined,
      flipMode: isSet(object.flipMode)
        ? graphics_Element_FlipModeFromJSON(object.flipMode)
        : 0,
      hidden: isSet(object.hidden) ? globalThis.Boolean(object.hidden) : false,
      textLineMask: isSet(object.textLineMask)
        ? Graphics_Text_LineFillMask.fromJSON(object.textLineMask)
        : undefined,
    };
  },

  toJSON(message: Graphics_Element): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.bounds !== undefined) {
      obj.bounds = Graphics_Rect.toJSON(message.bounds);
    }
    if (message.rotation !== 0) {
      obj.rotation = message.rotation;
    }
    if (message.opacity !== 0) {
      obj.opacity = message.opacity;
    }
    if (message.locked !== false) {
      obj.locked = message.locked;
    }
    if (message.aspectRatioLocked !== false) {
      obj.aspectRatioLocked = message.aspectRatioLocked;
    }
    if (message.path !== undefined) {
      obj.path = Graphics_Path.toJSON(message.path);
    }
    if (message.fill !== undefined) {
      obj.fill = Graphics_Fill.toJSON(message.fill);
    }
    if (message.stroke !== undefined) {
      obj.stroke = Graphics_Stroke.toJSON(message.stroke);
    }
    if (message.shadow !== undefined) {
      obj.shadow = Graphics_Shadow.toJSON(message.shadow);
    }
    if (message.feather !== undefined) {
      obj.feather = Graphics_Feather.toJSON(message.feather);
    }
    if (message.text !== undefined) {
      obj.text = Graphics_Text.toJSON(message.text);
    }
    if (message.flipMode !== 0) {
      obj.flipMode = graphics_Element_FlipModeToJSON(message.flipMode);
    }
    if (message.hidden !== false) {
      obj.hidden = message.hidden;
    }
    if (message.textLineMask !== undefined) {
      obj.textLineMask = Graphics_Text_LineFillMask.toJSON(
        message.textLineMask,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Element>, I>>(
    base?: I,
  ): Graphics_Element {
    return Graphics_Element.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Element>, I>>(
    object: I,
  ): Graphics_Element {
    const message = createBaseGraphics_Element();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.bounds =
      object.bounds !== undefined && object.bounds !== null
        ? Graphics_Rect.fromPartial(object.bounds)
        : undefined;
    message.rotation = object.rotation ?? 0;
    message.opacity = object.opacity ?? 0;
    message.locked = object.locked ?? false;
    message.aspectRatioLocked = object.aspectRatioLocked ?? false;
    message.path =
      object.path !== undefined && object.path !== null
        ? Graphics_Path.fromPartial(object.path)
        : undefined;
    message.fill =
      object.fill !== undefined && object.fill !== null
        ? Graphics_Fill.fromPartial(object.fill)
        : undefined;
    message.stroke =
      object.stroke !== undefined && object.stroke !== null
        ? Graphics_Stroke.fromPartial(object.stroke)
        : undefined;
    message.shadow =
      object.shadow !== undefined && object.shadow !== null
        ? Graphics_Shadow.fromPartial(object.shadow)
        : undefined;
    message.feather =
      object.feather !== undefined && object.feather !== null
        ? Graphics_Feather.fromPartial(object.feather)
        : undefined;
    message.text =
      object.text !== undefined && object.text !== null
        ? Graphics_Text.fromPartial(object.text)
        : undefined;
    message.flipMode = object.flipMode ?? 0;
    message.hidden = object.hidden ?? false;
    message.textLineMask =
      object.textLineMask !== undefined && object.textLineMask !== null
        ? Graphics_Text_LineFillMask.fromPartial(object.textLineMask)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Rect(): Graphics_Rect {
  return { origin: undefined, size: undefined };
}

export const Graphics_Rect = {
  encode(
    message: Graphics_Rect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.origin !== undefined) {
      Graphics_Point.encode(message.origin, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      Graphics_Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Rect {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Rect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.origin = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.size = Graphics_Size.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Rect {
    return {
      origin: isSet(object.origin)
        ? Graphics_Point.fromJSON(object.origin)
        : undefined,
      size: isSet(object.size)
        ? Graphics_Size.fromJSON(object.size)
        : undefined,
    };
  },

  toJSON(message: Graphics_Rect): unknown {
    const obj: any = {};
    if (message.origin !== undefined) {
      obj.origin = Graphics_Point.toJSON(message.origin);
    }
    if (message.size !== undefined) {
      obj.size = Graphics_Size.toJSON(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Rect>, I>>(
    base?: I,
  ): Graphics_Rect {
    return Graphics_Rect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Rect>, I>>(
    object: I,
  ): Graphics_Rect {
    const message = createBaseGraphics_Rect();
    message.origin =
      object.origin !== undefined && object.origin !== null
        ? Graphics_Point.fromPartial(object.origin)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? Graphics_Size.fromPartial(object.size)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Point(): Graphics_Point {
  return { x: 0, y: 0 };
}

export const Graphics_Point = {
  encode(
    message: Graphics_Point,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Point {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Point();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.x = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.y = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Point {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
    };
  },

  toJSON(message: Graphics_Point): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== 0) {
      obj.y = message.y;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Point>, I>>(
    base?: I,
  ): Graphics_Point {
    return Graphics_Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Point>, I>>(
    object: I,
  ): Graphics_Point {
    const message = createBaseGraphics_Point();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseGraphics_Size(): Graphics_Size {
  return { width: 0, height: 0 };
}

export const Graphics_Size = {
  encode(
    message: Graphics_Size,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(9).double(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(17).double(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Size {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Size();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.width = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.height = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Size {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: Graphics_Size): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = message.width;
    }
    if (message.height !== 0) {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Size>, I>>(
    base?: I,
  ): Graphics_Size {
    return Graphics_Size.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Size>, I>>(
    object: I,
  ): Graphics_Size {
    const message = createBaseGraphics_Size();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseGraphics_EdgeInsets(): Graphics_EdgeInsets {
  return { left: 0, right: 0, top: 0, bottom: 0 };
}

export const Graphics_EdgeInsets = {
  encode(
    message: Graphics_EdgeInsets,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.left !== 0) {
      writer.uint32(9).double(message.left);
    }
    if (message.right !== 0) {
      writer.uint32(17).double(message.right);
    }
    if (message.top !== 0) {
      writer.uint32(25).double(message.top);
    }
    if (message.bottom !== 0) {
      writer.uint32(33).double(message.bottom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_EdgeInsets {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_EdgeInsets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.left = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.right = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.top = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.bottom = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_EdgeInsets {
    return {
      left: isSet(object.left) ? globalThis.Number(object.left) : 0,
      right: isSet(object.right) ? globalThis.Number(object.right) : 0,
      top: isSet(object.top) ? globalThis.Number(object.top) : 0,
      bottom: isSet(object.bottom) ? globalThis.Number(object.bottom) : 0,
    };
  },

  toJSON(message: Graphics_EdgeInsets): unknown {
    const obj: any = {};
    if (message.left !== 0) {
      obj.left = message.left;
    }
    if (message.right !== 0) {
      obj.right = message.right;
    }
    if (message.top !== 0) {
      obj.top = message.top;
    }
    if (message.bottom !== 0) {
      obj.bottom = message.bottom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_EdgeInsets>, I>>(
    base?: I,
  ): Graphics_EdgeInsets {
    return Graphics_EdgeInsets.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_EdgeInsets>, I>>(
    object: I,
  ): Graphics_EdgeInsets {
    const message = createBaseGraphics_EdgeInsets();
    message.left = object.left ?? 0;
    message.right = object.right ?? 0;
    message.top = object.top ?? 0;
    message.bottom = object.bottom ?? 0;
    return message;
  },
};

function createBaseGraphics_Path(): Graphics_Path {
  return { closed: false, points: [], shape: undefined };
}

export const Graphics_Path = {
  encode(
    message: Graphics_Path,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.closed !== false) {
      writer.uint32(8).bool(message.closed);
    }
    for (const v of message.points) {
      Graphics_Path_BezierPoint.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.shape !== undefined) {
      Graphics_Path_Shape.encode(
        message.shape,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.closed = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.points.push(
            Graphics_Path_BezierPoint.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.shape = Graphics_Path_Shape.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path {
    return {
      closed: isSet(object.closed) ? globalThis.Boolean(object.closed) : false,
      points: globalThis.Array.isArray(object?.points)
        ? object.points.map((e: any) => Graphics_Path_BezierPoint.fromJSON(e))
        : [],
      shape: isSet(object.shape)
        ? Graphics_Path_Shape.fromJSON(object.shape)
        : undefined,
    };
  },

  toJSON(message: Graphics_Path): unknown {
    const obj: any = {};
    if (message.closed !== false) {
      obj.closed = message.closed;
    }
    if (message.points?.length) {
      obj.points = message.points.map((e) =>
        Graphics_Path_BezierPoint.toJSON(e),
      );
    }
    if (message.shape !== undefined) {
      obj.shape = Graphics_Path_Shape.toJSON(message.shape);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path>, I>>(
    base?: I,
  ): Graphics_Path {
    return Graphics_Path.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path>, I>>(
    object: I,
  ): Graphics_Path {
    const message = createBaseGraphics_Path();
    message.closed = object.closed ?? false;
    message.points =
      object.points?.map((e) => Graphics_Path_BezierPoint.fromPartial(e)) || [];
    message.shape =
      object.shape !== undefined && object.shape !== null
        ? Graphics_Path_Shape.fromPartial(object.shape)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Path_BezierPoint(): Graphics_Path_BezierPoint {
  return { point: undefined, q0: undefined, q1: undefined, curved: false };
}

export const Graphics_Path_BezierPoint = {
  encode(
    message: Graphics_Path_BezierPoint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.point !== undefined) {
      Graphics_Point.encode(message.point, writer.uint32(10).fork()).ldelim();
    }
    if (message.q0 !== undefined) {
      Graphics_Point.encode(message.q0, writer.uint32(18).fork()).ldelim();
    }
    if (message.q1 !== undefined) {
      Graphics_Point.encode(message.q1, writer.uint32(26).fork()).ldelim();
    }
    if (message.curved !== false) {
      writer.uint32(32).bool(message.curved);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Path_BezierPoint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_BezierPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.point = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.q0 = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.q1 = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.curved = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_BezierPoint {
    return {
      point: isSet(object.point)
        ? Graphics_Point.fromJSON(object.point)
        : undefined,
      q0: isSet(object.q0) ? Graphics_Point.fromJSON(object.q0) : undefined,
      q1: isSet(object.q1) ? Graphics_Point.fromJSON(object.q1) : undefined,
      curved: isSet(object.curved) ? globalThis.Boolean(object.curved) : false,
    };
  },

  toJSON(message: Graphics_Path_BezierPoint): unknown {
    const obj: any = {};
    if (message.point !== undefined) {
      obj.point = Graphics_Point.toJSON(message.point);
    }
    if (message.q0 !== undefined) {
      obj.q0 = Graphics_Point.toJSON(message.q0);
    }
    if (message.q1 !== undefined) {
      obj.q1 = Graphics_Point.toJSON(message.q1);
    }
    if (message.curved !== false) {
      obj.curved = message.curved;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_BezierPoint>, I>>(
    base?: I,
  ): Graphics_Path_BezierPoint {
    return Graphics_Path_BezierPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path_BezierPoint>, I>>(
    object: I,
  ): Graphics_Path_BezierPoint {
    const message = createBaseGraphics_Path_BezierPoint();
    message.point =
      object.point !== undefined && object.point !== null
        ? Graphics_Point.fromPartial(object.point)
        : undefined;
    message.q0 =
      object.q0 !== undefined && object.q0 !== null
        ? Graphics_Point.fromPartial(object.q0)
        : undefined;
    message.q1 =
      object.q1 !== undefined && object.q1 !== null
        ? Graphics_Point.fromPartial(object.q1)
        : undefined;
    message.curved = object.curved ?? false;
    return message;
  },
};

function createBaseGraphics_Path_Shape(): Graphics_Path_Shape {
  return {
    type: 0,
    roundedRectangle: undefined,
    polygon: undefined,
    star: undefined,
    arrow: undefined,
  };
}

export const Graphics_Path_Shape = {
  encode(
    message: Graphics_Path_Shape,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.roundedRectangle !== undefined) {
      Graphics_Path_Shape_RoundedRectangle.encode(
        message.roundedRectangle,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.polygon !== undefined) {
      Graphics_Path_Shape_Polygon.encode(
        message.polygon,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.star !== undefined) {
      Graphics_Path_Shape_Star.encode(
        message.star,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.arrow !== undefined) {
      Graphics_Path_Shape_Arrow.encode(
        message.arrow,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Path_Shape {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roundedRectangle =
            Graphics_Path_Shape_RoundedRectangle.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.polygon = Graphics_Path_Shape_Polygon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.star = Graphics_Path_Shape_Star.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.arrow = Graphics_Path_Shape_Arrow.decode(
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

  fromJSON(object: any): Graphics_Path_Shape {
    return {
      type: isSet(object.type)
        ? graphics_Path_Shape_TypeFromJSON(object.type)
        : 0,
      roundedRectangle: isSet(object.roundedRectangle)
        ? Graphics_Path_Shape_RoundedRectangle.fromJSON(object.roundedRectangle)
        : undefined,
      polygon: isSet(object.polygon)
        ? Graphics_Path_Shape_Polygon.fromJSON(object.polygon)
        : undefined,
      star: isSet(object.star)
        ? Graphics_Path_Shape_Star.fromJSON(object.star)
        : undefined,
      arrow: isSet(object.arrow)
        ? Graphics_Path_Shape_Arrow.fromJSON(object.arrow)
        : undefined,
    };
  },

  toJSON(message: Graphics_Path_Shape): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = graphics_Path_Shape_TypeToJSON(message.type);
    }
    if (message.roundedRectangle !== undefined) {
      obj.roundedRectangle = Graphics_Path_Shape_RoundedRectangle.toJSON(
        message.roundedRectangle,
      );
    }
    if (message.polygon !== undefined) {
      obj.polygon = Graphics_Path_Shape_Polygon.toJSON(message.polygon);
    }
    if (message.star !== undefined) {
      obj.star = Graphics_Path_Shape_Star.toJSON(message.star);
    }
    if (message.arrow !== undefined) {
      obj.arrow = Graphics_Path_Shape_Arrow.toJSON(message.arrow);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_Shape>, I>>(
    base?: I,
  ): Graphics_Path_Shape {
    return Graphics_Path_Shape.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape>, I>>(
    object: I,
  ): Graphics_Path_Shape {
    const message = createBaseGraphics_Path_Shape();
    message.type = object.type ?? 0;
    message.roundedRectangle =
      object.roundedRectangle !== undefined && object.roundedRectangle !== null
        ? Graphics_Path_Shape_RoundedRectangle.fromPartial(
            object.roundedRectangle,
          )
        : undefined;
    message.polygon =
      object.polygon !== undefined && object.polygon !== null
        ? Graphics_Path_Shape_Polygon.fromPartial(object.polygon)
        : undefined;
    message.star =
      object.star !== undefined && object.star !== null
        ? Graphics_Path_Shape_Star.fromPartial(object.star)
        : undefined;
    message.arrow =
      object.arrow !== undefined && object.arrow !== null
        ? Graphics_Path_Shape_Arrow.fromPartial(object.arrow)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Path_Shape_RoundedRectangle(): Graphics_Path_Shape_RoundedRectangle {
  return { roundness: 0 };
}

export const Graphics_Path_Shape_RoundedRectangle = {
  encode(
    message: Graphics_Path_Shape_RoundedRectangle,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.roundness !== 0) {
      writer.uint32(9).double(message.roundness);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Path_Shape_RoundedRectangle {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_RoundedRectangle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.roundness = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_RoundedRectangle {
    return {
      roundness: isSet(object.roundness)
        ? globalThis.Number(object.roundness)
        : 0,
    };
  },

  toJSON(message: Graphics_Path_Shape_RoundedRectangle): unknown {
    const obj: any = {};
    if (message.roundness !== 0) {
      obj.roundness = message.roundness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_Shape_RoundedRectangle>, I>>(
    base?: I,
  ): Graphics_Path_Shape_RoundedRectangle {
    return Graphics_Path_Shape_RoundedRectangle.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Graphics_Path_Shape_RoundedRectangle>, I>,
  >(object: I): Graphics_Path_Shape_RoundedRectangle {
    const message = createBaseGraphics_Path_Shape_RoundedRectangle();
    message.roundness = object.roundness ?? 0;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Arrow(): Graphics_Path_Shape_Arrow {
  return { corner: undefined };
}

export const Graphics_Path_Shape_Arrow = {
  encode(
    message: Graphics_Path_Shape_Arrow,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.corner !== undefined) {
      Graphics_Point.encode(message.corner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Path_Shape_Arrow {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Arrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.corner = Graphics_Point.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Arrow {
    return {
      corner: isSet(object.corner)
        ? Graphics_Point.fromJSON(object.corner)
        : undefined,
    };
  },

  toJSON(message: Graphics_Path_Shape_Arrow): unknown {
    const obj: any = {};
    if (message.corner !== undefined) {
      obj.corner = Graphics_Point.toJSON(message.corner);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_Shape_Arrow>, I>>(
    base?: I,
  ): Graphics_Path_Shape_Arrow {
    return Graphics_Path_Shape_Arrow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Arrow>, I>>(
    object: I,
  ): Graphics_Path_Shape_Arrow {
    const message = createBaseGraphics_Path_Shape_Arrow();
    message.corner =
      object.corner !== undefined && object.corner !== null
        ? Graphics_Point.fromPartial(object.corner)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Polygon(): Graphics_Path_Shape_Polygon {
  return { numberSides: 0 };
}

export const Graphics_Path_Shape_Polygon = {
  encode(
    message: Graphics_Path_Shape_Polygon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.numberSides !== 0) {
      writer.uint32(8).uint32(message.numberSides);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Path_Shape_Polygon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Polygon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberSides = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Polygon {
    return {
      numberSides: isSet(object.numberSides)
        ? globalThis.Number(object.numberSides)
        : 0,
    };
  },

  toJSON(message: Graphics_Path_Shape_Polygon): unknown {
    const obj: any = {};
    if (message.numberSides !== 0) {
      obj.numberSides = Math.round(message.numberSides);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_Shape_Polygon>, I>>(
    base?: I,
  ): Graphics_Path_Shape_Polygon {
    return Graphics_Path_Shape_Polygon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Polygon>, I>>(
    object: I,
  ): Graphics_Path_Shape_Polygon {
    const message = createBaseGraphics_Path_Shape_Polygon();
    message.numberSides = object.numberSides ?? 0;
    return message;
  },
};

function createBaseGraphics_Path_Shape_Star(): Graphics_Path_Shape_Star {
  return { innerRadius: 0, numberPoints: 0 };
}

export const Graphics_Path_Shape_Star = {
  encode(
    message: Graphics_Path_Shape_Star,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.innerRadius !== 0) {
      writer.uint32(9).double(message.innerRadius);
    }
    if (message.numberPoints !== 0) {
      writer.uint32(16).uint32(message.numberPoints);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Path_Shape_Star {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Path_Shape_Star();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.innerRadius = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.numberPoints = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Path_Shape_Star {
    return {
      innerRadius: isSet(object.innerRadius)
        ? globalThis.Number(object.innerRadius)
        : 0,
      numberPoints: isSet(object.numberPoints)
        ? globalThis.Number(object.numberPoints)
        : 0,
    };
  },

  toJSON(message: Graphics_Path_Shape_Star): unknown {
    const obj: any = {};
    if (message.innerRadius !== 0) {
      obj.innerRadius = message.innerRadius;
    }
    if (message.numberPoints !== 0) {
      obj.numberPoints = Math.round(message.numberPoints);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Path_Shape_Star>, I>>(
    base?: I,
  ): Graphics_Path_Shape_Star {
    return Graphics_Path_Shape_Star.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Path_Shape_Star>, I>>(
    object: I,
  ): Graphics_Path_Shape_Star {
    const message = createBaseGraphics_Path_Shape_Star();
    message.innerRadius = object.innerRadius ?? 0;
    message.numberPoints = object.numberPoints ?? 0;
    return message;
  },
};

function createBaseGraphics_Fill(): Graphics_Fill {
  return {
    enable: false,
    color: undefined,
    gradient: undefined,
    media: undefined,
    backgroundEffect: undefined,
  };
}

export const Graphics_Fill = {
  encode(
    message: Graphics_Fill,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(32).bool(message.enable);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(
        message.gradient,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      Media.encode(message.media, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundEffect !== undefined) {
      Graphics_BackgroundEffect.encode(
        message.backgroundEffect,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Fill {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Fill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.media = Media.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): Graphics_Fill {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      gradient: isSet(object.gradient)
        ? Graphics_Gradient.fromJSON(object.gradient)
        : undefined,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      backgroundEffect: isSet(object.backgroundEffect)
        ? Graphics_BackgroundEffect.fromJSON(object.backgroundEffect)
        : undefined,
    };
  },

  toJSON(message: Graphics_Fill): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.gradient !== undefined) {
      obj.gradient = Graphics_Gradient.toJSON(message.gradient);
    }
    if (message.media !== undefined) {
      obj.media = Media.toJSON(message.media);
    }
    if (message.backgroundEffect !== undefined) {
      obj.backgroundEffect = Graphics_BackgroundEffect.toJSON(
        message.backgroundEffect,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Fill>, I>>(
    base?: I,
  ): Graphics_Fill {
    return Graphics_Fill.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Fill>, I>>(
    object: I,
  ): Graphics_Fill {
    const message = createBaseGraphics_Fill();
    message.enable = object.enable ?? false;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.gradient =
      object.gradient !== undefined && object.gradient !== null
        ? Graphics_Gradient.fromPartial(object.gradient)
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    message.backgroundEffect =
      object.backgroundEffect !== undefined && object.backgroundEffect !== null
        ? Graphics_BackgroundEffect.fromPartial(object.backgroundEffect)
        : undefined;
    return message;
  },
};

function createBaseGraphics_BackgroundEffect(): Graphics_BackgroundEffect {
  return { backgroundBlur: undefined, backgroundInvert: undefined };
}

export const Graphics_BackgroundEffect = {
  encode(
    message: Graphics_BackgroundEffect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.backgroundBlur !== undefined) {
      Graphics_BackgroundEffect_BackgroundEffectBlur.encode(
        message.backgroundBlur,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.backgroundInvert !== undefined) {
      Graphics_BackgroundEffect_BackgroundEffectInvert.encode(
        message.backgroundInvert,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_BackgroundEffect {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_BackgroundEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.backgroundBlur =
            Graphics_BackgroundEffect_BackgroundEffectBlur.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backgroundInvert =
            Graphics_BackgroundEffect_BackgroundEffectInvert.decode(
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

  fromJSON(object: any): Graphics_BackgroundEffect {
    return {
      backgroundBlur: isSet(object.backgroundBlur)
        ? Graphics_BackgroundEffect_BackgroundEffectBlur.fromJSON(
            object.backgroundBlur,
          )
        : undefined,
      backgroundInvert: isSet(object.backgroundInvert)
        ? Graphics_BackgroundEffect_BackgroundEffectInvert.fromJSON(
            object.backgroundInvert,
          )
        : undefined,
    };
  },

  toJSON(message: Graphics_BackgroundEffect): unknown {
    const obj: any = {};
    if (message.backgroundBlur !== undefined) {
      obj.backgroundBlur =
        Graphics_BackgroundEffect_BackgroundEffectBlur.toJSON(
          message.backgroundBlur,
        );
    }
    if (message.backgroundInvert !== undefined) {
      obj.backgroundInvert =
        Graphics_BackgroundEffect_BackgroundEffectInvert.toJSON(
          message.backgroundInvert,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_BackgroundEffect>, I>>(
    base?: I,
  ): Graphics_BackgroundEffect {
    return Graphics_BackgroundEffect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_BackgroundEffect>, I>>(
    object: I,
  ): Graphics_BackgroundEffect {
    const message = createBaseGraphics_BackgroundEffect();
    message.backgroundBlur =
      object.backgroundBlur !== undefined && object.backgroundBlur !== null
        ? Graphics_BackgroundEffect_BackgroundEffectBlur.fromPartial(
            object.backgroundBlur,
          )
        : undefined;
    message.backgroundInvert =
      object.backgroundInvert !== undefined && object.backgroundInvert !== null
        ? Graphics_BackgroundEffect_BackgroundEffectInvert.fromPartial(
            object.backgroundInvert,
          )
        : undefined;
    return message;
  },
};

function createBaseGraphics_BackgroundEffect_BackgroundEffectBlur(): Graphics_BackgroundEffect_BackgroundEffectBlur {
  return { saturation: 0, blurAmount: 0 };
}

export const Graphics_BackgroundEffect_BackgroundEffectBlur = {
  encode(
    message: Graphics_BackgroundEffect_BackgroundEffectBlur,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.saturation !== 0) {
      writer.uint32(9).double(message.saturation);
    }
    if (message.blurAmount !== 0) {
      writer.uint32(17).double(message.blurAmount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_BackgroundEffect_BackgroundEffectBlur {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_BackgroundEffect_BackgroundEffectBlur();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.saturation = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.blurAmount = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_BackgroundEffect_BackgroundEffectBlur {
    return {
      saturation: isSet(object.saturation)
        ? globalThis.Number(object.saturation)
        : 0,
      blurAmount: isSet(object.blurAmount)
        ? globalThis.Number(object.blurAmount)
        : 0,
    };
  },

  toJSON(message: Graphics_BackgroundEffect_BackgroundEffectBlur): unknown {
    const obj: any = {};
    if (message.saturation !== 0) {
      obj.saturation = message.saturation;
    }
    if (message.blurAmount !== 0) {
      obj.blurAmount = message.blurAmount;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Graphics_BackgroundEffect_BackgroundEffectBlur>,
      I
    >,
  >(base?: I): Graphics_BackgroundEffect_BackgroundEffectBlur {
    return Graphics_BackgroundEffect_BackgroundEffectBlur.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Graphics_BackgroundEffect_BackgroundEffectBlur>,
      I
    >,
  >(object: I): Graphics_BackgroundEffect_BackgroundEffectBlur {
    const message = createBaseGraphics_BackgroundEffect_BackgroundEffectBlur();
    message.saturation = object.saturation ?? 0;
    message.blurAmount = object.blurAmount ?? 0;
    return message;
  },
};

function createBaseGraphics_BackgroundEffect_BackgroundEffectInvert(): Graphics_BackgroundEffect_BackgroundEffectInvert {
  return {};
}

export const Graphics_BackgroundEffect_BackgroundEffectInvert = {
  encode(
    _: Graphics_BackgroundEffect_BackgroundEffectInvert,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_BackgroundEffect_BackgroundEffectInvert {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseGraphics_BackgroundEffect_BackgroundEffectInvert();
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

  fromJSON(_: any): Graphics_BackgroundEffect_BackgroundEffectInvert {
    return {};
  },

  toJSON(_: Graphics_BackgroundEffect_BackgroundEffectInvert): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Graphics_BackgroundEffect_BackgroundEffectInvert>,
      I
    >,
  >(base?: I): Graphics_BackgroundEffect_BackgroundEffectInvert {
    return Graphics_BackgroundEffect_BackgroundEffectInvert.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Graphics_BackgroundEffect_BackgroundEffectInvert>,
      I
    >,
  >(_: I): Graphics_BackgroundEffect_BackgroundEffectInvert {
    const message =
      createBaseGraphics_BackgroundEffect_BackgroundEffectInvert();
    return message;
  },
};

function createBaseGraphics_Gradient(): Graphics_Gradient {
  return { type: 0, angle: 0, length: 0, stops: [] };
}

export const Graphics_Gradient = {
  encode(
    message: Graphics_Gradient,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.angle !== 0) {
      writer.uint32(17).double(message.angle);
    }
    if (message.length !== 0) {
      writer.uint32(25).double(message.length);
    }
    for (const v of message.stops) {
      Graphics_Gradient_ColorStop.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Gradient {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Gradient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.angle = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.length = reader.double();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stops.push(
            Graphics_Gradient_ColorStop.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Graphics_Gradient {
    return {
      type: isSet(object.type)
        ? graphics_Gradient_TypeFromJSON(object.type)
        : 0,
      angle: isSet(object.angle) ? globalThis.Number(object.angle) : 0,
      length: isSet(object.length) ? globalThis.Number(object.length) : 0,
      stops: globalThis.Array.isArray(object?.stops)
        ? object.stops.map((e: any) => Graphics_Gradient_ColorStop.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Graphics_Gradient): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = graphics_Gradient_TypeToJSON(message.type);
    }
    if (message.angle !== 0) {
      obj.angle = message.angle;
    }
    if (message.length !== 0) {
      obj.length = message.length;
    }
    if (message.stops?.length) {
      obj.stops = message.stops.map((e) =>
        Graphics_Gradient_ColorStop.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Gradient>, I>>(
    base?: I,
  ): Graphics_Gradient {
    return Graphics_Gradient.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Gradient>, I>>(
    object: I,
  ): Graphics_Gradient {
    const message = createBaseGraphics_Gradient();
    message.type = object.type ?? 0;
    message.angle = object.angle ?? 0;
    message.length = object.length ?? 0;
    message.stops =
      object.stops?.map((e) => Graphics_Gradient_ColorStop.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseGraphics_Gradient_ColorStop(): Graphics_Gradient_ColorStop {
  return { color: undefined, position: 0, blendPoint: 0 };
}

export const Graphics_Gradient_ColorStop = {
  encode(
    message: Graphics_Gradient_ColorStop,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== 0) {
      writer.uint32(17).double(message.position);
    }
    if (message.blendPoint !== 0) {
      writer.uint32(25).double(message.blendPoint);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Gradient_ColorStop {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Gradient_ColorStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.position = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.blendPoint = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Gradient_ColorStop {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      position: isSet(object.position) ? globalThis.Number(object.position) : 0,
      blendPoint: isSet(object.blendPoint)
        ? globalThis.Number(object.blendPoint)
        : 0,
    };
  },

  toJSON(message: Graphics_Gradient_ColorStop): unknown {
    const obj: any = {};
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.position !== 0) {
      obj.position = message.position;
    }
    if (message.blendPoint !== 0) {
      obj.blendPoint = message.blendPoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Gradient_ColorStop>, I>>(
    base?: I,
  ): Graphics_Gradient_ColorStop {
    return Graphics_Gradient_ColorStop.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Gradient_ColorStop>, I>>(
    object: I,
  ): Graphics_Gradient_ColorStop {
    const message = createBaseGraphics_Gradient_ColorStop();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.position = object.position ?? 0;
    message.blendPoint = object.blendPoint ?? 0;
    return message;
  },
};

function createBaseGraphics_Shadow(): Graphics_Shadow {
  return {
    style: 0,
    angle: 0,
    offset: 0,
    radius: 0,
    color: undefined,
    opacity: 0,
    enable: false,
  };
}

export const Graphics_Shadow = {
  encode(
    message: Graphics_Shadow,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.angle !== 0) {
      writer.uint32(17).double(message.angle);
    }
    if (message.offset !== 0) {
      writer.uint32(25).double(message.offset);
    }
    if (message.radius !== 0) {
      writer.uint32(33).double(message.radius);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(42).fork()).ldelim();
    }
    if (message.opacity !== 0) {
      writer.uint32(49).double(message.opacity);
    }
    if (message.enable !== false) {
      writer.uint32(56).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Shadow {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Shadow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.angle = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.offset = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.radius = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.opacity = reader.double();
          continue;
        case 7:
          if (tag !== 56) {
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

  fromJSON(object: any): Graphics_Shadow {
    return {
      style: isSet(object.style)
        ? graphics_Shadow_StyleFromJSON(object.style)
        : 0,
      angle: isSet(object.angle) ? globalThis.Number(object.angle) : 0,
      offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
      radius: isSet(object.radius) ? globalThis.Number(object.radius) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      opacity: isSet(object.opacity) ? globalThis.Number(object.opacity) : 0,
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Shadow): unknown {
    const obj: any = {};
    if (message.style !== 0) {
      obj.style = graphics_Shadow_StyleToJSON(message.style);
    }
    if (message.angle !== 0) {
      obj.angle = message.angle;
    }
    if (message.offset !== 0) {
      obj.offset = message.offset;
    }
    if (message.radius !== 0) {
      obj.radius = message.radius;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.opacity !== 0) {
      obj.opacity = message.opacity;
    }
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Shadow>, I>>(
    base?: I,
  ): Graphics_Shadow {
    return Graphics_Shadow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Shadow>, I>>(
    object: I,
  ): Graphics_Shadow {
    const message = createBaseGraphics_Shadow();
    message.style = object.style ?? 0;
    message.angle = object.angle ?? 0;
    message.offset = object.offset ?? 0;
    message.radius = object.radius ?? 0;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.opacity = object.opacity ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Stroke(): Graphics_Stroke {
  return { style: 0, width: 0, color: undefined, pattern: [], enable: false };
}

export const Graphics_Stroke = {
  encode(
    message: Graphics_Stroke,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.pattern) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.enable !== false) {
      writer.uint32(40).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Stroke {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Stroke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.width = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 33) {
            message.pattern.push(reader.double());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pattern.push(reader.double());
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): Graphics_Stroke {
    return {
      style: isSet(object.style)
        ? graphics_Stroke_StyleFromJSON(object.style)
        : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      pattern: globalThis.Array.isArray(object?.pattern)
        ? object.pattern.map((e: any) => globalThis.Number(e))
        : [],
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Stroke): unknown {
    const obj: any = {};
    if (message.style !== 0) {
      obj.style = graphics_Stroke_StyleToJSON(message.style);
    }
    if (message.width !== 0) {
      obj.width = message.width;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.pattern?.length) {
      obj.pattern = message.pattern;
    }
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Stroke>, I>>(
    base?: I,
  ): Graphics_Stroke {
    return Graphics_Stroke.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Stroke>, I>>(
    object: I,
  ): Graphics_Stroke {
    const message = createBaseGraphics_Stroke();
    message.style = object.style ?? 0;
    message.width = object.width ?? 0;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.pattern = object.pattern?.map((e) => e) || [];
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Feather(): Graphics_Feather {
  return { style: 0, radius: 0, enable: false };
}

export const Graphics_Feather = {
  encode(
    message: Graphics_Feather,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    if (message.enable !== false) {
      writer.uint32(24).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Feather {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Feather();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.radius = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): Graphics_Feather {
    return {
      style: isSet(object.style)
        ? graphics_Feather_StyleFromJSON(object.style)
        : 0,
      radius: isSet(object.radius) ? globalThis.Number(object.radius) : 0,
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
    };
  },

  toJSON(message: Graphics_Feather): unknown {
    const obj: any = {};
    if (message.style !== 0) {
      obj.style = graphics_Feather_StyleToJSON(message.style);
    }
    if (message.radius !== 0) {
      obj.radius = message.radius;
    }
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Feather>, I>>(
    base?: I,
  ): Graphics_Feather {
    return Graphics_Feather.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Feather>, I>>(
    object: I,
  ): Graphics_Feather {
    const message = createBaseGraphics_Feather();
    message.style = object.style ?? 0;
    message.radius = object.radius ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseGraphics_Text(): Graphics_Text {
  return {
    attributes: undefined,
    shadow: undefined,
    rtfData: new Uint8Array(0),
    verticalAlignment: 0,
    scaleBehavior: 0,
    margins: undefined,
    isSuperscriptStandardized: false,
    transform: 0,
    transformDelimiter: '',
    chordPro: undefined,
  };
}

export const Graphics_Text = {
  encode(
    message: Graphics_Text,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.attributes !== undefined) {
      Graphics_Text_Attributes.encode(
        message.attributes,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.shadow !== undefined) {
      Graphics_Shadow.encode(message.shadow, writer.uint32(34).fork()).ldelim();
    }
    if (message.rtfData.length !== 0) {
      writer.uint32(42).bytes(message.rtfData);
    }
    if (message.verticalAlignment !== 0) {
      writer.uint32(48).int32(message.verticalAlignment);
    }
    if (message.scaleBehavior !== 0) {
      writer.uint32(56).int32(message.scaleBehavior);
    }
    if (message.margins !== undefined) {
      Graphics_EdgeInsets.encode(
        message.margins,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.isSuperscriptStandardized !== false) {
      writer.uint32(72).bool(message.isSuperscriptStandardized);
    }
    if (message.transform !== 0) {
      writer.uint32(80).int32(message.transform);
    }
    if (message.transformDelimiter !== '') {
      writer.uint32(90).string(message.transformDelimiter);
    }
    if (message.chordPro !== undefined) {
      Graphics_Text_ChordPro.encode(
        message.chordPro,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Graphics_Text {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes = Graphics_Text_Attributes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.shadow = Graphics_Shadow.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.rtfData = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.verticalAlignment = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.scaleBehavior = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.margins = Graphics_EdgeInsets.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isSuperscriptStandardized = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.transform = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.transformDelimiter = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.chordPro = Graphics_Text_ChordPro.decode(
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

  fromJSON(object: any): Graphics_Text {
    return {
      attributes: isSet(object.attributes)
        ? Graphics_Text_Attributes.fromJSON(object.attributes)
        : undefined,
      shadow: isSet(object.shadow)
        ? Graphics_Shadow.fromJSON(object.shadow)
        : undefined,
      rtfData: isSet(object.rtfData)
        ? bytesFromBase64(object.rtfData)
        : new Uint8Array(0),
      verticalAlignment: isSet(object.verticalAlignment)
        ? graphics_Text_VerticalAlignmentFromJSON(object.verticalAlignment)
        : 0,
      scaleBehavior: isSet(object.scaleBehavior)
        ? graphics_Text_ScaleBehaviorFromJSON(object.scaleBehavior)
        : 0,
      margins: isSet(object.margins)
        ? Graphics_EdgeInsets.fromJSON(object.margins)
        : undefined,
      isSuperscriptStandardized: isSet(object.isSuperscriptStandardized)
        ? globalThis.Boolean(object.isSuperscriptStandardized)
        : false,
      transform: isSet(object.transform)
        ? graphics_Text_TransformFromJSON(object.transform)
        : 0,
      transformDelimiter: isSet(object.transformDelimiter)
        ? globalThis.String(object.transformDelimiter)
        : '',
      chordPro: isSet(object.chordPro)
        ? Graphics_Text_ChordPro.fromJSON(object.chordPro)
        : undefined,
    };
  },

  toJSON(message: Graphics_Text): unknown {
    const obj: any = {};
    if (message.attributes !== undefined) {
      obj.attributes = Graphics_Text_Attributes.toJSON(message.attributes);
    }
    if (message.shadow !== undefined) {
      obj.shadow = Graphics_Shadow.toJSON(message.shadow);
    }
    if (message.rtfData.length !== 0) {
      obj.rtfData = base64FromBytes(message.rtfData);
    }
    if (message.verticalAlignment !== 0) {
      obj.verticalAlignment = graphics_Text_VerticalAlignmentToJSON(
        message.verticalAlignment,
      );
    }
    if (message.scaleBehavior !== 0) {
      obj.scaleBehavior = graphics_Text_ScaleBehaviorToJSON(
        message.scaleBehavior,
      );
    }
    if (message.margins !== undefined) {
      obj.margins = Graphics_EdgeInsets.toJSON(message.margins);
    }
    if (message.isSuperscriptStandardized !== false) {
      obj.isSuperscriptStandardized = message.isSuperscriptStandardized;
    }
    if (message.transform !== 0) {
      obj.transform = graphics_Text_TransformToJSON(message.transform);
    }
    if (message.transformDelimiter !== '') {
      obj.transformDelimiter = message.transformDelimiter;
    }
    if (message.chordPro !== undefined) {
      obj.chordPro = Graphics_Text_ChordPro.toJSON(message.chordPro);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text>, I>>(
    base?: I,
  ): Graphics_Text {
    return Graphics_Text.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text>, I>>(
    object: I,
  ): Graphics_Text {
    const message = createBaseGraphics_Text();
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Graphics_Text_Attributes.fromPartial(object.attributes)
        : undefined;
    message.shadow =
      object.shadow !== undefined && object.shadow !== null
        ? Graphics_Shadow.fromPartial(object.shadow)
        : undefined;
    message.rtfData = object.rtfData ?? new Uint8Array(0);
    message.verticalAlignment = object.verticalAlignment ?? 0;
    message.scaleBehavior = object.scaleBehavior ?? 0;
    message.margins =
      object.margins !== undefined && object.margins !== null
        ? Graphics_EdgeInsets.fromPartial(object.margins)
        : undefined;
    message.isSuperscriptStandardized =
      object.isSuperscriptStandardized ?? false;
    message.transform = object.transform ?? 0;
    message.transformDelimiter = object.transformDelimiter ?? '';
    message.chordPro =
      object.chordPro !== undefined && object.chordPro !== null
        ? Graphics_Text_ChordPro.fromPartial(object.chordPro)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Text_LineFillMask(): Graphics_Text_LineFillMask {
  return {
    enabled: false,
    heightOffset: 0,
    verticalOffset: 0,
    maskStyle: 0,
    widthOffset: 0,
    horizontalOffset: 0,
  };
}

export const Graphics_Text_LineFillMask = {
  encode(
    message: Graphics_Text_LineFillMask,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled !== false) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.heightOffset !== 0) {
      writer.uint32(17).double(message.heightOffset);
    }
    if (message.verticalOffset !== 0) {
      writer.uint32(25).double(message.verticalOffset);
    }
    if (message.maskStyle !== 0) {
      writer.uint32(32).int32(message.maskStyle);
    }
    if (message.widthOffset !== 0) {
      writer.uint32(41).double(message.widthOffset);
    }
    if (message.horizontalOffset !== 0) {
      writer.uint32(49).double(message.horizontalOffset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_LineFillMask {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_LineFillMask();
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
          if (tag !== 17) {
            break;
          }

          message.heightOffset = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.verticalOffset = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maskStyle = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.widthOffset = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.horizontalOffset = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_LineFillMask {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
      heightOffset: isSet(object.heightOffset)
        ? globalThis.Number(object.heightOffset)
        : 0,
      verticalOffset: isSet(object.verticalOffset)
        ? globalThis.Number(object.verticalOffset)
        : 0,
      maskStyle: isSet(object.maskStyle)
        ? graphics_Text_LineFillMask_LineMaskStyleFromJSON(object.maskStyle)
        : 0,
      widthOffset: isSet(object.widthOffset)
        ? globalThis.Number(object.widthOffset)
        : 0,
      horizontalOffset: isSet(object.horizontalOffset)
        ? globalThis.Number(object.horizontalOffset)
        : 0,
    };
  },

  toJSON(message: Graphics_Text_LineFillMask): unknown {
    const obj: any = {};
    if (message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    if (message.heightOffset !== 0) {
      obj.heightOffset = message.heightOffset;
    }
    if (message.verticalOffset !== 0) {
      obj.verticalOffset = message.verticalOffset;
    }
    if (message.maskStyle !== 0) {
      obj.maskStyle = graphics_Text_LineFillMask_LineMaskStyleToJSON(
        message.maskStyle,
      );
    }
    if (message.widthOffset !== 0) {
      obj.widthOffset = message.widthOffset;
    }
    if (message.horizontalOffset !== 0) {
      obj.horizontalOffset = message.horizontalOffset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_LineFillMask>, I>>(
    base?: I,
  ): Graphics_Text_LineFillMask {
    return Graphics_Text_LineFillMask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_LineFillMask>, I>>(
    object: I,
  ): Graphics_Text_LineFillMask {
    const message = createBaseGraphics_Text_LineFillMask();
    message.enabled = object.enabled ?? false;
    message.heightOffset = object.heightOffset ?? 0;
    message.verticalOffset = object.verticalOffset ?? 0;
    message.maskStyle = object.maskStyle ?? 0;
    message.widthOffset = object.widthOffset ?? 0;
    message.horizontalOffset = object.horizontalOffset ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_GradientFill(): Graphics_Text_GradientFill {
  return { gradient: undefined, stretchToDocumentBounds: false };
}

export const Graphics_Text_GradientFill = {
  encode(
    message: Graphics_Text_GradientFill,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gradient !== undefined) {
      Graphics_Gradient.encode(
        message.gradient,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.stretchToDocumentBounds !== false) {
      writer.uint32(16).bool(message.stretchToDocumentBounds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_GradientFill {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_GradientFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.gradient = Graphics_Gradient.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.stretchToDocumentBounds = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_GradientFill {
    return {
      gradient: isSet(object.gradient)
        ? Graphics_Gradient.fromJSON(object.gradient)
        : undefined,
      stretchToDocumentBounds: isSet(object.stretchToDocumentBounds)
        ? globalThis.Boolean(object.stretchToDocumentBounds)
        : false,
    };
  },

  toJSON(message: Graphics_Text_GradientFill): unknown {
    const obj: any = {};
    if (message.gradient !== undefined) {
      obj.gradient = Graphics_Gradient.toJSON(message.gradient);
    }
    if (message.stretchToDocumentBounds !== false) {
      obj.stretchToDocumentBounds = message.stretchToDocumentBounds;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_GradientFill>, I>>(
    base?: I,
  ): Graphics_Text_GradientFill {
    return Graphics_Text_GradientFill.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_GradientFill>, I>>(
    object: I,
  ): Graphics_Text_GradientFill {
    const message = createBaseGraphics_Text_GradientFill();
    message.gradient =
      object.gradient !== undefined && object.gradient !== null
        ? Graphics_Gradient.fromPartial(object.gradient)
        : undefined;
    message.stretchToDocumentBounds = object.stretchToDocumentBounds ?? false;
    return message;
  },
};

function createBaseGraphics_Text_CutOutFill(): Graphics_Text_CutOutFill {
  return {};
}

export const Graphics_Text_CutOutFill = {
  encode(
    _: Graphics_Text_CutOutFill,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_CutOutFill {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_CutOutFill();
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

  fromJSON(_: any): Graphics_Text_CutOutFill {
    return {};
  },

  toJSON(_: Graphics_Text_CutOutFill): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_CutOutFill>, I>>(
    base?: I,
  ): Graphics_Text_CutOutFill {
    return Graphics_Text_CutOutFill.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_CutOutFill>, I>>(
    _: I,
  ): Graphics_Text_CutOutFill {
    const message = createBaseGraphics_Text_CutOutFill();
    return message;
  },
};

function createBaseGraphics_Text_MediaFill(): Graphics_Text_MediaFill {
  return { media: undefined };
}

export const Graphics_Text_MediaFill = {
  encode(
    message: Graphics_Text_MediaFill,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.media !== undefined) {
      Media.encode(message.media, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_MediaFill {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_MediaFill();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.media = Media.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_MediaFill {
    return {
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: Graphics_Text_MediaFill): unknown {
    const obj: any = {};
    if (message.media !== undefined) {
      obj.media = Media.toJSON(message.media);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_MediaFill>, I>>(
    base?: I,
  ): Graphics_Text_MediaFill {
    return Graphics_Text_MediaFill.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_MediaFill>, I>>(
    object: I,
  ): Graphics_Text_MediaFill {
    const message = createBaseGraphics_Text_MediaFill();
    message.media =
      object.media !== undefined && object.media !== null
        ? Media.fromPartial(object.media)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Text_ChordPro(): Graphics_Text_ChordPro {
  return { enabled: false, notation: 0, color: undefined };
}

export const Graphics_Text_ChordPro = {
  encode(
    message: Graphics_Text_ChordPro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled !== false) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.notation !== 0) {
      writer.uint32(16).int32(message.notation);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_ChordPro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_ChordPro();
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

          message.notation = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): Graphics_Text_ChordPro {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
      notation: isSet(object.notation)
        ? graphics_Text_ChordPro_NotationFromJSON(object.notation)
        : 0,
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: Graphics_Text_ChordPro): unknown {
    const obj: any = {};
    if (message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    if (message.notation !== 0) {
      obj.notation = graphics_Text_ChordPro_NotationToJSON(message.notation);
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_ChordPro>, I>>(
    base?: I,
  ): Graphics_Text_ChordPro {
    return Graphics_Text_ChordPro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_ChordPro>, I>>(
    object: I,
  ): Graphics_Text_ChordPro {
    const message = createBaseGraphics_Text_ChordPro();
    message.enabled = object.enabled ?? false;
    message.notation = object.notation ?? 0;
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    return message;
  },
};

function createBaseGraphics_Text_Attributes(): Graphics_Text_Attributes {
  return {
    font: undefined,
    capitalization: 0,
    underlineStyle: undefined,
    underlineColor: undefined,
    paragraphStyle: undefined,
    kerning: 0,
    superscript: 0,
    strikethroughStyle: undefined,
    strikethroughColor: undefined,
    strokeWidth: 0,
    strokeColor: undefined,
    customAttributes: [],
    backgroundColor: undefined,
    textSolidFill: undefined,
    textGradientFill: undefined,
    cutOutFill: undefined,
    mediaFill: undefined,
    backgroundEffect: undefined,
  };
}

export const Graphics_Text_Attributes = {
  encode(
    message: Graphics_Text_Attributes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.font !== undefined) {
      Font.encode(message.font, writer.uint32(10).fork()).ldelim();
    }
    if (message.capitalization !== 0) {
      writer.uint32(16).int32(message.capitalization);
    }
    if (message.underlineStyle !== undefined) {
      Graphics_Text_Attributes_Underline.encode(
        message.underlineStyle,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.underlineColor !== undefined) {
      Color.encode(message.underlineColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.paragraphStyle !== undefined) {
      Graphics_Text_Attributes_Paragraph.encode(
        message.paragraphStyle,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.kerning !== 0) {
      writer.uint32(57).double(message.kerning);
    }
    if (message.superscript !== 0) {
      writer.uint32(64).int32(message.superscript);
    }
    if (message.strikethroughStyle !== undefined) {
      Graphics_Text_Attributes_Underline.encode(
        message.strikethroughStyle,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.strikethroughColor !== undefined) {
      Color.encode(
        message.strikethroughColor,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.strokeWidth !== 0) {
      writer.uint32(89).double(message.strokeWidth);
    }
    if (message.strokeColor !== undefined) {
      Color.encode(message.strokeColor, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.customAttributes) {
      Graphics_Text_Attributes_CustomAttribute.encode(
        v!,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(122).fork()).ldelim();
    }
    if (message.textSolidFill !== undefined) {
      Color.encode(message.textSolidFill, writer.uint32(26).fork()).ldelim();
    }
    if (message.textGradientFill !== undefined) {
      Graphics_Text_GradientFill.encode(
        message.textGradientFill,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.cutOutFill !== undefined) {
      Graphics_Text_CutOutFill.encode(
        message.cutOutFill,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.mediaFill !== undefined) {
      Graphics_Text_MediaFill.encode(
        message.mediaFill,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.backgroundEffect !== undefined) {
      Graphics_BackgroundEffect.encode(
        message.backgroundEffect,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.font = Font.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.capitalization = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.underlineStyle = Graphics_Text_Attributes_Underline.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.underlineColor = Color.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.paragraphStyle = Graphics_Text_Attributes_Paragraph.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.kerning = reader.double();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.superscript = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.strikethroughStyle =
            Graphics_Text_Attributes_Underline.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.strikethroughColor = Color.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.strokeWidth = reader.double();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.strokeColor = Color.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.customAttributes.push(
            Graphics_Text_Attributes_CustomAttribute.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.backgroundColor = Color.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textSolidFill = Color.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.textGradientFill = Graphics_Text_GradientFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.cutOutFill = Graphics_Text_CutOutFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.mediaFill = Graphics_Text_MediaFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 146) {
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

  fromJSON(object: any): Graphics_Text_Attributes {
    return {
      font: isSet(object.font) ? Font.fromJSON(object.font) : undefined,
      capitalization: isSet(object.capitalization)
        ? graphics_Text_Attributes_CapitalizationFromJSON(object.capitalization)
        : 0,
      underlineStyle: isSet(object.underlineStyle)
        ? Graphics_Text_Attributes_Underline.fromJSON(object.underlineStyle)
        : undefined,
      underlineColor: isSet(object.underlineColor)
        ? Color.fromJSON(object.underlineColor)
        : undefined,
      paragraphStyle: isSet(object.paragraphStyle)
        ? Graphics_Text_Attributes_Paragraph.fromJSON(object.paragraphStyle)
        : undefined,
      kerning: isSet(object.kerning) ? globalThis.Number(object.kerning) : 0,
      superscript: isSet(object.superscript)
        ? globalThis.Number(object.superscript)
        : 0,
      strikethroughStyle: isSet(object.strikethroughStyle)
        ? Graphics_Text_Attributes_Underline.fromJSON(object.strikethroughStyle)
        : undefined,
      strikethroughColor: isSet(object.strikethroughColor)
        ? Color.fromJSON(object.strikethroughColor)
        : undefined,
      strokeWidth: isSet(object.strokeWidth)
        ? globalThis.Number(object.strokeWidth)
        : 0,
      strokeColor: isSet(object.strokeColor)
        ? Color.fromJSON(object.strokeColor)
        : undefined,
      customAttributes: globalThis.Array.isArray(object?.customAttributes)
        ? object.customAttributes.map((e: any) =>
            Graphics_Text_Attributes_CustomAttribute.fromJSON(e),
          )
        : [],
      backgroundColor: isSet(object.backgroundColor)
        ? Color.fromJSON(object.backgroundColor)
        : undefined,
      textSolidFill: isSet(object.textSolidFill)
        ? Color.fromJSON(object.textSolidFill)
        : undefined,
      textGradientFill: isSet(object.textGradientFill)
        ? Graphics_Text_GradientFill.fromJSON(object.textGradientFill)
        : undefined,
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

  toJSON(message: Graphics_Text_Attributes): unknown {
    const obj: any = {};
    if (message.font !== undefined) {
      obj.font = Font.toJSON(message.font);
    }
    if (message.capitalization !== 0) {
      obj.capitalization = graphics_Text_Attributes_CapitalizationToJSON(
        message.capitalization,
      );
    }
    if (message.underlineStyle !== undefined) {
      obj.underlineStyle = Graphics_Text_Attributes_Underline.toJSON(
        message.underlineStyle,
      );
    }
    if (message.underlineColor !== undefined) {
      obj.underlineColor = Color.toJSON(message.underlineColor);
    }
    if (message.paragraphStyle !== undefined) {
      obj.paragraphStyle = Graphics_Text_Attributes_Paragraph.toJSON(
        message.paragraphStyle,
      );
    }
    if (message.kerning !== 0) {
      obj.kerning = message.kerning;
    }
    if (message.superscript !== 0) {
      obj.superscript = Math.round(message.superscript);
    }
    if (message.strikethroughStyle !== undefined) {
      obj.strikethroughStyle = Graphics_Text_Attributes_Underline.toJSON(
        message.strikethroughStyle,
      );
    }
    if (message.strikethroughColor !== undefined) {
      obj.strikethroughColor = Color.toJSON(message.strikethroughColor);
    }
    if (message.strokeWidth !== 0) {
      obj.strokeWidth = message.strokeWidth;
    }
    if (message.strokeColor !== undefined) {
      obj.strokeColor = Color.toJSON(message.strokeColor);
    }
    if (message.customAttributes?.length) {
      obj.customAttributes = message.customAttributes.map((e) =>
        Graphics_Text_Attributes_CustomAttribute.toJSON(e),
      );
    }
    if (message.backgroundColor !== undefined) {
      obj.backgroundColor = Color.toJSON(message.backgroundColor);
    }
    if (message.textSolidFill !== undefined) {
      obj.textSolidFill = Color.toJSON(message.textSolidFill);
    }
    if (message.textGradientFill !== undefined) {
      obj.textGradientFill = Graphics_Text_GradientFill.toJSON(
        message.textGradientFill,
      );
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

  create<I extends Exact<DeepPartial<Graphics_Text_Attributes>, I>>(
    base?: I,
  ): Graphics_Text_Attributes {
    return Graphics_Text_Attributes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Graphics_Text_Attributes>, I>>(
    object: I,
  ): Graphics_Text_Attributes {
    const message = createBaseGraphics_Text_Attributes();
    message.font =
      object.font !== undefined && object.font !== null
        ? Font.fromPartial(object.font)
        : undefined;
    message.capitalization = object.capitalization ?? 0;
    message.underlineStyle =
      object.underlineStyle !== undefined && object.underlineStyle !== null
        ? Graphics_Text_Attributes_Underline.fromPartial(object.underlineStyle)
        : undefined;
    message.underlineColor =
      object.underlineColor !== undefined && object.underlineColor !== null
        ? Color.fromPartial(object.underlineColor)
        : undefined;
    message.paragraphStyle =
      object.paragraphStyle !== undefined && object.paragraphStyle !== null
        ? Graphics_Text_Attributes_Paragraph.fromPartial(object.paragraphStyle)
        : undefined;
    message.kerning = object.kerning ?? 0;
    message.superscript = object.superscript ?? 0;
    message.strikethroughStyle =
      object.strikethroughStyle !== undefined &&
      object.strikethroughStyle !== null
        ? Graphics_Text_Attributes_Underline.fromPartial(
            object.strikethroughStyle,
          )
        : undefined;
    message.strikethroughColor =
      object.strikethroughColor !== undefined &&
      object.strikethroughColor !== null
        ? Color.fromPartial(object.strikethroughColor)
        : undefined;
    message.strokeWidth = object.strokeWidth ?? 0;
    message.strokeColor =
      object.strokeColor !== undefined && object.strokeColor !== null
        ? Color.fromPartial(object.strokeColor)
        : undefined;
    message.customAttributes =
      object.customAttributes?.map((e) =>
        Graphics_Text_Attributes_CustomAttribute.fromPartial(e),
      ) || [];
    message.backgroundColor =
      object.backgroundColor !== undefined && object.backgroundColor !== null
        ? Color.fromPartial(object.backgroundColor)
        : undefined;
    message.textSolidFill =
      object.textSolidFill !== undefined && object.textSolidFill !== null
        ? Color.fromPartial(object.textSolidFill)
        : undefined;
    message.textGradientFill =
      object.textGradientFill !== undefined && object.textGradientFill !== null
        ? Graphics_Text_GradientFill.fromPartial(object.textGradientFill)
        : undefined;
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

function createBaseGraphics_Text_Attributes_Underline(): Graphics_Text_Attributes_Underline {
  return { style: 0, pattern: 0, byWord: false };
}

export const Graphics_Text_Attributes_Underline = {
  encode(
    message: Graphics_Text_Attributes_Underline,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.style !== 0) {
      writer.uint32(8).int32(message.style);
    }
    if (message.pattern !== 0) {
      writer.uint32(16).int32(message.pattern);
    }
    if (message.byWord !== false) {
      writer.uint32(24).bool(message.byWord);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes_Underline {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Underline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pattern = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.byWord = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Underline {
    return {
      style: isSet(object.style)
        ? graphics_Text_Attributes_Underline_StyleFromJSON(object.style)
        : 0,
      pattern: isSet(object.pattern)
        ? graphics_Text_Attributes_Underline_PatternFromJSON(object.pattern)
        : 0,
      byWord: isSet(object.byWord) ? globalThis.Boolean(object.byWord) : false,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Underline): unknown {
    const obj: any = {};
    if (message.style !== 0) {
      obj.style = graphics_Text_Attributes_Underline_StyleToJSON(message.style);
    }
    if (message.pattern !== 0) {
      obj.pattern = graphics_Text_Attributes_Underline_PatternToJSON(
        message.pattern,
      );
    }
    if (message.byWord !== false) {
      obj.byWord = message.byWord;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_Attributes_Underline>, I>>(
    base?: I,
  ): Graphics_Text_Attributes_Underline {
    return Graphics_Text_Attributes_Underline.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_Underline>, I>,
  >(object: I): Graphics_Text_Attributes_Underline {
    const message = createBaseGraphics_Text_Attributes_Underline();
    message.style = object.style ?? 0;
    message.pattern = object.pattern ?? 0;
    message.byWord = object.byWord ?? false;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph(): Graphics_Text_Attributes_Paragraph {
  return {
    alignment: 0,
    firstLineHeadIndent: 0,
    headIndent: 0,
    tailIndent: 0,
    lineHeightMultiple: 0,
    maximumLineHeight: 0,
    minimumLineHeight: 0,
    lineSpacing: 0,
    paragraphSpacing: 0,
    paragraphSpacingBefore: 0,
    tabStops: [],
    defaultTabInterval: 0,
    textList: undefined,
    textLists: [],
  };
}

export const Graphics_Text_Attributes_Paragraph = {
  encode(
    message: Graphics_Text_Attributes_Paragraph,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.alignment !== 0) {
      writer.uint32(8).int32(message.alignment);
    }
    if (message.firstLineHeadIndent !== 0) {
      writer.uint32(17).double(message.firstLineHeadIndent);
    }
    if (message.headIndent !== 0) {
      writer.uint32(25).double(message.headIndent);
    }
    if (message.tailIndent !== 0) {
      writer.uint32(33).double(message.tailIndent);
    }
    if (message.lineHeightMultiple !== 0) {
      writer.uint32(41).double(message.lineHeightMultiple);
    }
    if (message.maximumLineHeight !== 0) {
      writer.uint32(49).double(message.maximumLineHeight);
    }
    if (message.minimumLineHeight !== 0) {
      writer.uint32(57).double(message.minimumLineHeight);
    }
    if (message.lineSpacing !== 0) {
      writer.uint32(65).double(message.lineSpacing);
    }
    if (message.paragraphSpacing !== 0) {
      writer.uint32(73).double(message.paragraphSpacing);
    }
    if (message.paragraphSpacingBefore !== 0) {
      writer.uint32(81).double(message.paragraphSpacingBefore);
    }
    for (const v of message.tabStops) {
      Graphics_Text_Attributes_Paragraph_TabStop.encode(
        v!,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.defaultTabInterval !== 0) {
      writer.uint32(97).double(message.defaultTabInterval);
    }
    if (message.textList !== undefined) {
      Graphics_Text_Attributes_Paragraph_TextList.encode(
        message.textList,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    for (const v of message.textLists) {
      Graphics_Text_Attributes_Paragraph_TextList.encode(
        v!,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes_Paragraph {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alignment = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.firstLineHeadIndent = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.headIndent = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.tailIndent = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.lineHeightMultiple = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.maximumLineHeight = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.minimumLineHeight = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.lineSpacing = reader.double();
          continue;
        case 9:
          if (tag !== 73) {
            break;
          }

          message.paragraphSpacing = reader.double();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.paragraphSpacingBefore = reader.double();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tabStops.push(
            Graphics_Text_Attributes_Paragraph_TabStop.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.defaultTabInterval = reader.double();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.textList = Graphics_Text_Attributes_Paragraph_TextList.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.textLists.push(
            Graphics_Text_Attributes_Paragraph_TextList.decode(
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

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph {
    return {
      alignment: isSet(object.alignment)
        ? graphics_Text_Attributes_AlignmentFromJSON(object.alignment)
        : 0,
      firstLineHeadIndent: isSet(object.firstLineHeadIndent)
        ? globalThis.Number(object.firstLineHeadIndent)
        : 0,
      headIndent: isSet(object.headIndent)
        ? globalThis.Number(object.headIndent)
        : 0,
      tailIndent: isSet(object.tailIndent)
        ? globalThis.Number(object.tailIndent)
        : 0,
      lineHeightMultiple: isSet(object.lineHeightMultiple)
        ? globalThis.Number(object.lineHeightMultiple)
        : 0,
      maximumLineHeight: isSet(object.maximumLineHeight)
        ? globalThis.Number(object.maximumLineHeight)
        : 0,
      minimumLineHeight: isSet(object.minimumLineHeight)
        ? globalThis.Number(object.minimumLineHeight)
        : 0,
      lineSpacing: isSet(object.lineSpacing)
        ? globalThis.Number(object.lineSpacing)
        : 0,
      paragraphSpacing: isSet(object.paragraphSpacing)
        ? globalThis.Number(object.paragraphSpacing)
        : 0,
      paragraphSpacingBefore: isSet(object.paragraphSpacingBefore)
        ? globalThis.Number(object.paragraphSpacingBefore)
        : 0,
      tabStops: globalThis.Array.isArray(object?.tabStops)
        ? object.tabStops.map((e: any) =>
            Graphics_Text_Attributes_Paragraph_TabStop.fromJSON(e),
          )
        : [],
      defaultTabInterval: isSet(object.defaultTabInterval)
        ? globalThis.Number(object.defaultTabInterval)
        : 0,
      textList: isSet(object.textList)
        ? Graphics_Text_Attributes_Paragraph_TextList.fromJSON(object.textList)
        : undefined,
      textLists: globalThis.Array.isArray(object?.textLists)
        ? object.textLists.map((e: any) =>
            Graphics_Text_Attributes_Paragraph_TextList.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph): unknown {
    const obj: any = {};
    if (message.alignment !== 0) {
      obj.alignment = graphics_Text_Attributes_AlignmentToJSON(
        message.alignment,
      );
    }
    if (message.firstLineHeadIndent !== 0) {
      obj.firstLineHeadIndent = message.firstLineHeadIndent;
    }
    if (message.headIndent !== 0) {
      obj.headIndent = message.headIndent;
    }
    if (message.tailIndent !== 0) {
      obj.tailIndent = message.tailIndent;
    }
    if (message.lineHeightMultiple !== 0) {
      obj.lineHeightMultiple = message.lineHeightMultiple;
    }
    if (message.maximumLineHeight !== 0) {
      obj.maximumLineHeight = message.maximumLineHeight;
    }
    if (message.minimumLineHeight !== 0) {
      obj.minimumLineHeight = message.minimumLineHeight;
    }
    if (message.lineSpacing !== 0) {
      obj.lineSpacing = message.lineSpacing;
    }
    if (message.paragraphSpacing !== 0) {
      obj.paragraphSpacing = message.paragraphSpacing;
    }
    if (message.paragraphSpacingBefore !== 0) {
      obj.paragraphSpacingBefore = message.paragraphSpacingBefore;
    }
    if (message.tabStops?.length) {
      obj.tabStops = message.tabStops.map((e) =>
        Graphics_Text_Attributes_Paragraph_TabStop.toJSON(e),
      );
    }
    if (message.defaultTabInterval !== 0) {
      obj.defaultTabInterval = message.defaultTabInterval;
    }
    if (message.textList !== undefined) {
      obj.textList = Graphics_Text_Attributes_Paragraph_TextList.toJSON(
        message.textList,
      );
    }
    if (message.textLists?.length) {
      obj.textLists = message.textLists.map((e) =>
        Graphics_Text_Attributes_Paragraph_TextList.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph>, I>>(
    base?: I,
  ): Graphics_Text_Attributes_Paragraph {
    return Graphics_Text_Attributes_Paragraph.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph>, I>,
  >(object: I): Graphics_Text_Attributes_Paragraph {
    const message = createBaseGraphics_Text_Attributes_Paragraph();
    message.alignment = object.alignment ?? 0;
    message.firstLineHeadIndent = object.firstLineHeadIndent ?? 0;
    message.headIndent = object.headIndent ?? 0;
    message.tailIndent = object.tailIndent ?? 0;
    message.lineHeightMultiple = object.lineHeightMultiple ?? 0;
    message.maximumLineHeight = object.maximumLineHeight ?? 0;
    message.minimumLineHeight = object.minimumLineHeight ?? 0;
    message.lineSpacing = object.lineSpacing ?? 0;
    message.paragraphSpacing = object.paragraphSpacing ?? 0;
    message.paragraphSpacingBefore = object.paragraphSpacingBefore ?? 0;
    message.tabStops =
      object.tabStops?.map((e) =>
        Graphics_Text_Attributes_Paragraph_TabStop.fromPartial(e),
      ) || [];
    message.defaultTabInterval = object.defaultTabInterval ?? 0;
    message.textList =
      object.textList !== undefined && object.textList !== null
        ? Graphics_Text_Attributes_Paragraph_TextList.fromPartial(
            object.textList,
          )
        : undefined;
    message.textLists =
      object.textLists?.map((e) =>
        Graphics_Text_Attributes_Paragraph_TextList.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph_TabStop(): Graphics_Text_Attributes_Paragraph_TabStop {
  return { location: 0, alignment: 0 };
}

export const Graphics_Text_Attributes_Paragraph_TabStop = {
  encode(
    message: Graphics_Text_Attributes_Paragraph_TabStop,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.location !== 0) {
      writer.uint32(9).double(message.location);
    }
    if (message.alignment !== 0) {
      writer.uint32(16).int32(message.alignment);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes_Paragraph_TabStop {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph_TabStop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.location = reader.double();
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

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph_TabStop {
    return {
      location: isSet(object.location) ? globalThis.Number(object.location) : 0,
      alignment: isSet(object.alignment)
        ? graphics_Text_Attributes_AlignmentFromJSON(object.alignment)
        : 0,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph_TabStop): unknown {
    const obj: any = {};
    if (message.location !== 0) {
      obj.location = message.location;
    }
    if (message.alignment !== 0) {
      obj.alignment = graphics_Text_Attributes_AlignmentToJSON(
        message.alignment,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph_TabStop>, I>,
  >(base?: I): Graphics_Text_Attributes_Paragraph_TabStop {
    return Graphics_Text_Attributes_Paragraph_TabStop.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_Paragraph_TabStop>, I>,
  >(object: I): Graphics_Text_Attributes_Paragraph_TabStop {
    const message = createBaseGraphics_Text_Attributes_Paragraph_TabStop();
    message.location = object.location ?? 0;
    message.alignment = object.alignment ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_Paragraph_TextList(): Graphics_Text_Attributes_Paragraph_TextList {
  return {
    isEnabled: false,
    numberType: 0,
    prefix: '',
    postfix: '',
    startingNumber: 0,
  };
}

export const Graphics_Text_Attributes_Paragraph_TextList = {
  encode(
    message: Graphics_Text_Attributes_Paragraph_TextList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isEnabled !== false) {
      writer.uint32(8).bool(message.isEnabled);
    }
    if (message.numberType !== 0) {
      writer.uint32(16).int32(message.numberType);
    }
    if (message.prefix !== '') {
      writer.uint32(26).string(message.prefix);
    }
    if (message.postfix !== '') {
      writer.uint32(34).string(message.postfix);
    }
    if (message.startingNumber !== 0) {
      writer.uint32(40).int32(message.startingNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes_Paragraph_TextList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_Paragraph_TextList();
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

          message.numberType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.prefix = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.postfix = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.startingNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Graphics_Text_Attributes_Paragraph_TextList {
    return {
      isEnabled: isSet(object.isEnabled)
        ? globalThis.Boolean(object.isEnabled)
        : false,
      numberType: isSet(object.numberType)
        ? graphics_Text_Attributes_Paragraph_TextList_NumberTypeFromJSON(
            object.numberType,
          )
        : 0,
      prefix: isSet(object.prefix) ? globalThis.String(object.prefix) : '',
      postfix: isSet(object.postfix) ? globalThis.String(object.postfix) : '',
      startingNumber: isSet(object.startingNumber)
        ? globalThis.Number(object.startingNumber)
        : 0,
    };
  },

  toJSON(message: Graphics_Text_Attributes_Paragraph_TextList): unknown {
    const obj: any = {};
    if (message.isEnabled !== false) {
      obj.isEnabled = message.isEnabled;
    }
    if (message.numberType !== 0) {
      obj.numberType =
        graphics_Text_Attributes_Paragraph_TextList_NumberTypeToJSON(
          message.numberType,
        );
    }
    if (message.prefix !== '') {
      obj.prefix = message.prefix;
    }
    if (message.postfix !== '') {
      obj.postfix = message.postfix;
    }
    if (message.startingNumber !== 0) {
      obj.startingNumber = Math.round(message.startingNumber);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<Graphics_Text_Attributes_Paragraph_TextList>,
      I
    >,
  >(base?: I): Graphics_Text_Attributes_Paragraph_TextList {
    return Graphics_Text_Attributes_Paragraph_TextList.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<Graphics_Text_Attributes_Paragraph_TextList>,
      I
    >,
  >(object: I): Graphics_Text_Attributes_Paragraph_TextList {
    const message = createBaseGraphics_Text_Attributes_Paragraph_TextList();
    message.isEnabled = object.isEnabled ?? false;
    message.numberType = object.numberType ?? 0;
    message.prefix = object.prefix ?? '';
    message.postfix = object.postfix ?? '';
    message.startingNumber = object.startingNumber ?? 0;
    return message;
  },
};

function createBaseGraphics_Text_Attributes_CustomAttribute(): Graphics_Text_Attributes_CustomAttribute {
  return {
    range: undefined,
    capitalization: undefined,
    originalFontSize: undefined,
    fontScaleFactor: undefined,
    textGradientFill: undefined,
    shouldPreserveForegroundColor: undefined,
    chord: undefined,
    cutOutFill: undefined,
    mediaFill: undefined,
    backgroundEffect: undefined,
  };
}

export const Graphics_Text_Attributes_CustomAttribute = {
  encode(
    message: Graphics_Text_Attributes_CustomAttribute,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.range !== undefined) {
      IntRange.encode(message.range, writer.uint32(10).fork()).ldelim();
    }
    if (message.capitalization !== undefined) {
      writer.uint32(16).int32(message.capitalization);
    }
    if (message.originalFontSize !== undefined) {
      writer.uint32(25).double(message.originalFontSize);
    }
    if (message.fontScaleFactor !== undefined) {
      writer.uint32(33).double(message.fontScaleFactor);
    }
    if (message.textGradientFill !== undefined) {
      Graphics_Text_GradientFill.encode(
        message.textGradientFill,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.shouldPreserveForegroundColor !== undefined) {
      writer.uint32(48).bool(message.shouldPreserveForegroundColor);
    }
    if (message.chord !== undefined) {
      writer.uint32(58).string(message.chord);
    }
    if (message.cutOutFill !== undefined) {
      Graphics_Text_CutOutFill.encode(
        message.cutOutFill,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.mediaFill !== undefined) {
      Graphics_Text_MediaFill.encode(
        message.mediaFill,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.backgroundEffect !== undefined) {
      Graphics_BackgroundEffect.encode(
        message.backgroundEffect,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Graphics_Text_Attributes_CustomAttribute {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphics_Text_Attributes_CustomAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.range = IntRange.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.capitalization = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.originalFontSize = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.fontScaleFactor = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.textGradientFill = Graphics_Text_GradientFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.shouldPreserveForegroundColor = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.chord = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cutOutFill = Graphics_Text_CutOutFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mediaFill = Graphics_Text_MediaFill.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): Graphics_Text_Attributes_CustomAttribute {
    return {
      range: isSet(object.range) ? IntRange.fromJSON(object.range) : undefined,
      capitalization: isSet(object.capitalization)
        ? graphics_Text_Attributes_CapitalizationFromJSON(object.capitalization)
        : undefined,
      originalFontSize: isSet(object.originalFontSize)
        ? globalThis.Number(object.originalFontSize)
        : undefined,
      fontScaleFactor: isSet(object.fontScaleFactor)
        ? globalThis.Number(object.fontScaleFactor)
        : undefined,
      textGradientFill: isSet(object.textGradientFill)
        ? Graphics_Text_GradientFill.fromJSON(object.textGradientFill)
        : undefined,
      shouldPreserveForegroundColor: isSet(object.shouldPreserveForegroundColor)
        ? globalThis.Boolean(object.shouldPreserveForegroundColor)
        : undefined,
      chord: isSet(object.chord) ? globalThis.String(object.chord) : undefined,
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

  toJSON(message: Graphics_Text_Attributes_CustomAttribute): unknown {
    const obj: any = {};
    if (message.range !== undefined) {
      obj.range = IntRange.toJSON(message.range);
    }
    if (message.capitalization !== undefined) {
      obj.capitalization = graphics_Text_Attributes_CapitalizationToJSON(
        message.capitalization,
      );
    }
    if (message.originalFontSize !== undefined) {
      obj.originalFontSize = message.originalFontSize;
    }
    if (message.fontScaleFactor !== undefined) {
      obj.fontScaleFactor = message.fontScaleFactor;
    }
    if (message.textGradientFill !== undefined) {
      obj.textGradientFill = Graphics_Text_GradientFill.toJSON(
        message.textGradientFill,
      );
    }
    if (message.shouldPreserveForegroundColor !== undefined) {
      obj.shouldPreserveForegroundColor = message.shouldPreserveForegroundColor;
    }
    if (message.chord !== undefined) {
      obj.chord = message.chord;
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

  create<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_CustomAttribute>, I>,
  >(base?: I): Graphics_Text_Attributes_CustomAttribute {
    return Graphics_Text_Attributes_CustomAttribute.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<Graphics_Text_Attributes_CustomAttribute>, I>,
  >(object: I): Graphics_Text_Attributes_CustomAttribute {
    const message = createBaseGraphics_Text_Attributes_CustomAttribute();
    message.range =
      object.range !== undefined && object.range !== null
        ? IntRange.fromPartial(object.range)
        : undefined;
    message.capitalization = object.capitalization ?? undefined;
    message.originalFontSize = object.originalFontSize ?? undefined;
    message.fontScaleFactor = object.fontScaleFactor ?? undefined;
    message.textGradientFill =
      object.textGradientFill !== undefined && object.textGradientFill !== null
        ? Graphics_Text_GradientFill.fromPartial(object.textGradientFill)
        : undefined;
    message.shouldPreserveForegroundColor =
      object.shouldPreserveForegroundColor ?? undefined;
    message.chord = object.chord ?? undefined;
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

function createBaseMedia(): Media {
  return {
    uuid: undefined,
    url: undefined,
    metadata: undefined,
    audio: undefined,
    image: undefined,
    video: undefined,
    liveVideo: undefined,
    webContent: undefined,
  };
}

export const Media = {
  encode(message: Media, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Media_Metadata.encode(
        message.metadata,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioTypeProperties.encode(
        message.audio,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.image !== undefined) {
      Media_ImageTypeProperties.encode(
        message.image,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.video !== undefined) {
      Media_VideoTypeProperties.encode(
        message.video,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Media_LiveVideoTypeProperties.encode(
        message.liveVideo,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.webContent !== undefined) {
      Media_WebContentTypeProperties.encode(
        message.webContent,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia();
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

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.metadata = Media_Metadata.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audio = Media_AudioTypeProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.image = Media_ImageTypeProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.video = Media_VideoTypeProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.liveVideo = Media_LiveVideoTypeProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.webContent = Media_WebContentTypeProperties.decode(
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

  fromJSON(object: any): Media {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      metadata: isSet(object.metadata)
        ? Media_Metadata.fromJSON(object.metadata)
        : undefined,
      audio: isSet(object.audio)
        ? Media_AudioTypeProperties.fromJSON(object.audio)
        : undefined,
      image: isSet(object.image)
        ? Media_ImageTypeProperties.fromJSON(object.image)
        : undefined,
      video: isSet(object.video)
        ? Media_VideoTypeProperties.fromJSON(object.video)
        : undefined,
      liveVideo: isSet(object.liveVideo)
        ? Media_LiveVideoTypeProperties.fromJSON(object.liveVideo)
        : undefined,
      webContent: isSet(object.webContent)
        ? Media_WebContentTypeProperties.fromJSON(object.webContent)
        : undefined,
    };
  },

  toJSON(message: Media): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    if (message.metadata !== undefined) {
      obj.metadata = Media_Metadata.toJSON(message.metadata);
    }
    if (message.audio !== undefined) {
      obj.audio = Media_AudioTypeProperties.toJSON(message.audio);
    }
    if (message.image !== undefined) {
      obj.image = Media_ImageTypeProperties.toJSON(message.image);
    }
    if (message.video !== undefined) {
      obj.video = Media_VideoTypeProperties.toJSON(message.video);
    }
    if (message.liveVideo !== undefined) {
      obj.liveVideo = Media_LiveVideoTypeProperties.toJSON(message.liveVideo);
    }
    if (message.webContent !== undefined) {
      obj.webContent = Media_WebContentTypeProperties.toJSON(
        message.webContent,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media>, I>>(base?: I): Media {
    return Media.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media>, I>>(object: I): Media {
    const message = createBaseMedia();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Media_Metadata.fromPartial(object.metadata)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? Media_AudioTypeProperties.fromPartial(object.audio)
        : undefined;
    message.image =
      object.image !== undefined && object.image !== null
        ? Media_ImageTypeProperties.fromPartial(object.image)
        : undefined;
    message.video =
      object.video !== undefined && object.video !== null
        ? Media_VideoTypeProperties.fromPartial(object.video)
        : undefined;
    message.liveVideo =
      object.liveVideo !== undefined && object.liveVideo !== null
        ? Media_LiveVideoTypeProperties.fromPartial(object.liveVideo)
        : undefined;
    message.webContent =
      object.webContent !== undefined && object.webContent !== null
        ? Media_WebContentTypeProperties.fromPartial(object.webContent)
        : undefined;
    return message;
  },
};

function createBaseMedia_Metadata(): Media_Metadata {
  return {
    manufactureName: '',
    manufactureUrl: undefined,
    information: '',
    artist: '',
    format: '',
  };
}

export const Media_Metadata = {
  encode(
    message: Media_Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.manufactureName !== '') {
      writer.uint32(10).string(message.manufactureName);
    }
    if (message.manufactureUrl !== undefined) {
      URL.encode(message.manufactureUrl, writer.uint32(18).fork()).ldelim();
    }
    if (message.information !== '') {
      writer.uint32(26).string(message.information);
    }
    if (message.artist !== '') {
      writer.uint32(34).string(message.artist);
    }
    if (message.format !== '') {
      writer.uint32(42).string(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Metadata {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.manufactureName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.manufactureUrl = URL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.information = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.artist = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.format = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_Metadata {
    return {
      manufactureName: isSet(object.manufactureName)
        ? globalThis.String(object.manufactureName)
        : '',
      manufactureUrl: isSet(object.manufactureUrl)
        ? URL.fromJSON(object.manufactureUrl)
        : undefined,
      information: isSet(object.information)
        ? globalThis.String(object.information)
        : '',
      artist: isSet(object.artist) ? globalThis.String(object.artist) : '',
      format: isSet(object.format) ? globalThis.String(object.format) : '',
    };
  },

  toJSON(message: Media_Metadata): unknown {
    const obj: any = {};
    if (message.manufactureName !== '') {
      obj.manufactureName = message.manufactureName;
    }
    if (message.manufactureUrl !== undefined) {
      obj.manufactureUrl = URL.toJSON(message.manufactureUrl);
    }
    if (message.information !== '') {
      obj.information = message.information;
    }
    if (message.artist !== '') {
      obj.artist = message.artist;
    }
    if (message.format !== '') {
      obj.format = message.format;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_Metadata>, I>>(
    base?: I,
  ): Media_Metadata {
    return Media_Metadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_Metadata>, I>>(
    object: I,
  ): Media_Metadata {
    const message = createBaseMedia_Metadata();
    message.manufactureName = object.manufactureName ?? '';
    message.manufactureUrl =
      object.manufactureUrl !== undefined && object.manufactureUrl !== null
        ? URL.fromPartial(object.manufactureUrl)
        : undefined;
    message.information = object.information ?? '';
    message.artist = object.artist ?? '';
    message.format = object.format ?? '';
    return message;
  },
};

function createBaseMedia_VideoDevice(): Media_VideoDevice {
  return {
    type: 0,
    name: '',
    uniqueId: '',
    modelId: '',
    formatIndex: 0,
    audioRouting: undefined,
  };
}

export const Media_VideoDevice = {
  encode(
    message: Media_VideoDevice,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.uniqueId !== '') {
      writer.uint32(26).string(message.uniqueId);
    }
    if (message.modelId !== '') {
      writer.uint32(34).string(message.modelId);
    }
    if (message.formatIndex !== 0) {
      writer.uint32(40).uint32(message.formatIndex);
    }
    if (message.audioRouting !== undefined) {
      DigitalAudio_Device_Routing.encode(
        message.audioRouting,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_VideoDevice {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uniqueId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.modelId = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.formatIndex = reader.uint32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.audioRouting = DigitalAudio_Device_Routing.decode(
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

  fromJSON(object: any): Media_VideoDevice {
    return {
      type: isSet(object.type)
        ? media_VideoDevice_TypeFromJSON(object.type)
        : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      uniqueId: isSet(object.uniqueId)
        ? globalThis.String(object.uniqueId)
        : '',
      modelId: isSet(object.modelId) ? globalThis.String(object.modelId) : '',
      formatIndex: isSet(object.formatIndex)
        ? globalThis.Number(object.formatIndex)
        : 0,
      audioRouting: isSet(object.audioRouting)
        ? DigitalAudio_Device_Routing.fromJSON(object.audioRouting)
        : undefined,
    };
  },

  toJSON(message: Media_VideoDevice): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = media_VideoDevice_TypeToJSON(message.type);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.uniqueId !== '') {
      obj.uniqueId = message.uniqueId;
    }
    if (message.modelId !== '') {
      obj.modelId = message.modelId;
    }
    if (message.formatIndex !== 0) {
      obj.formatIndex = Math.round(message.formatIndex);
    }
    if (message.audioRouting !== undefined) {
      obj.audioRouting = DigitalAudio_Device_Routing.toJSON(
        message.audioRouting,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_VideoDevice>, I>>(
    base?: I,
  ): Media_VideoDevice {
    return Media_VideoDevice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_VideoDevice>, I>>(
    object: I,
  ): Media_VideoDevice {
    const message = createBaseMedia_VideoDevice();
    message.type = object.type ?? 0;
    message.name = object.name ?? '';
    message.uniqueId = object.uniqueId ?? '';
    message.modelId = object.modelId ?? '';
    message.formatIndex = object.formatIndex ?? 0;
    message.audioRouting =
      object.audioRouting !== undefined && object.audioRouting !== null
        ? DigitalAudio_Device_Routing.fromPartial(object.audioRouting)
        : undefined;
    return message;
  },
};

function createBaseMedia_AudioDevice(): Media_AudioDevice {
  return { name: '', uniqueId: '', modelId: '', channelCount: 0 };
}

export const Media_AudioDevice = {
  encode(
    message: Media_AudioDevice,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.uniqueId !== '') {
      writer.uint32(18).string(message.uniqueId);
    }
    if (message.modelId !== '') {
      writer.uint32(26).string(message.modelId);
    }
    if (message.channelCount !== 0) {
      writer.uint32(32).uint32(message.channelCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_AudioDevice {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioDevice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uniqueId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.channelCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_AudioDevice {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      uniqueId: isSet(object.uniqueId)
        ? globalThis.String(object.uniqueId)
        : '',
      modelId: isSet(object.modelId) ? globalThis.String(object.modelId) : '',
      channelCount: isSet(object.channelCount)
        ? globalThis.Number(object.channelCount)
        : 0,
    };
  },

  toJSON(message: Media_AudioDevice): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.uniqueId !== '') {
      obj.uniqueId = message.uniqueId;
    }
    if (message.modelId !== '') {
      obj.modelId = message.modelId;
    }
    if (message.channelCount !== 0) {
      obj.channelCount = Math.round(message.channelCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_AudioDevice>, I>>(
    base?: I,
  ): Media_AudioDevice {
    return Media_AudioDevice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_AudioDevice>, I>>(
    object: I,
  ): Media_AudioDevice {
    const message = createBaseMedia_AudioDevice();
    message.name = object.name ?? '';
    message.uniqueId = object.uniqueId ?? '';
    message.modelId = object.modelId ?? '';
    message.channelCount = object.channelCount ?? 0;
    return message;
  },
};

function createBaseMedia_Audio(): Media_Audio {
  return {};
}

export const Media_Audio = {
  encode(_: Media_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio();
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

  fromJSON(_: any): Media_Audio {
    return {};
  },

  toJSON(_: Media_Audio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_Audio>, I>>(base?: I): Media_Audio {
    return Media_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_Audio>, I>>(_: I): Media_Audio {
    const message = createBaseMedia_Audio();
    return message;
  },
};

function createBaseMedia_Audio_Channel(): Media_Audio_Channel {
  return {
    index: 0,
    muted: false,
    volume: 0,
    compressLimit: false,
    outputs: [],
  };
}

export const Media_Audio_Channel = {
  encode(
    message: Media_Audio_Channel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.muted !== false) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.volume !== 0) {
      writer.uint32(25).double(message.volume);
    }
    if (message.compressLimit !== false) {
      writer.uint32(32).bool(message.compressLimit);
    }
    for (const v of message.outputs) {
      Media_Audio_Channel_Output.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Media_Audio_Channel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio_Channel();
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
          if (tag !== 16) {
            break;
          }

          message.muted = reader.bool();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.volume = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.compressLimit = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outputs.push(
            Media_Audio_Channel_Output.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Media_Audio_Channel {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      muted: isSet(object.muted) ? globalThis.Boolean(object.muted) : false,
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
      compressLimit: isSet(object.compressLimit)
        ? globalThis.Boolean(object.compressLimit)
        : false,
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => Media_Audio_Channel_Output.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Media_Audio_Channel): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.muted !== false) {
      obj.muted = message.muted;
    }
    if (message.volume !== 0) {
      obj.volume = message.volume;
    }
    if (message.compressLimit !== false) {
      obj.compressLimit = message.compressLimit;
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) =>
        Media_Audio_Channel_Output.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_Audio_Channel>, I>>(
    base?: I,
  ): Media_Audio_Channel {
    return Media_Audio_Channel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_Audio_Channel>, I>>(
    object: I,
  ): Media_Audio_Channel {
    const message = createBaseMedia_Audio_Channel();
    message.index = object.index ?? 0;
    message.muted = object.muted ?? false;
    message.volume = object.volume ?? 0;
    message.compressLimit = object.compressLimit ?? false;
    message.outputs =
      object.outputs?.map((e) => Media_Audio_Channel_Output.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseMedia_Audio_Channel_Output(): Media_Audio_Channel_Output {
  return { channelIndex: 0 };
}

export const Media_Audio_Channel_Output = {
  encode(
    message: Media_Audio_Channel_Output,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(16).int32(message.channelIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_Audio_Channel_Output {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_Audio_Channel_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.channelIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_Audio_Channel_Output {
    return {
      channelIndex: isSet(object.channelIndex)
        ? globalThis.Number(object.channelIndex)
        : 0,
    };
  },

  toJSON(message: Media_Audio_Channel_Output): unknown {
    const obj: any = {};
    if (message.channelIndex !== 0) {
      obj.channelIndex = Math.round(message.channelIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_Audio_Channel_Output>, I>>(
    base?: I,
  ): Media_Audio_Channel_Output {
    return Media_Audio_Channel_Output.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_Audio_Channel_Output>, I>>(
    object: I,
  ): Media_Audio_Channel_Output {
    const message = createBaseMedia_Audio_Channel_Output();
    message.channelIndex = object.channelIndex ?? 0;
    return message;
  },
};

function createBaseMedia_AudioProperties(): Media_AudioProperties {
  return { volume: 0, audioChannels: [], isCustomMapping: false };
}

export const Media_AudioProperties = {
  encode(
    message: Media_AudioProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.volume !== 0) {
      writer.uint32(9).double(message.volume);
    }
    for (const v of message.audioChannels) {
      Media_Audio_Channel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isCustomMapping !== false) {
      writer.uint32(24).bool(message.isCustomMapping);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_AudioProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.volume = reader.double();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioChannels.push(
            Media_Audio_Channel.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isCustomMapping = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_AudioProperties {
    return {
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
      audioChannels: globalThis.Array.isArray(object?.audioChannels)
        ? object.audioChannels.map((e: any) => Media_Audio_Channel.fromJSON(e))
        : [],
      isCustomMapping: isSet(object.isCustomMapping)
        ? globalThis.Boolean(object.isCustomMapping)
        : false,
    };
  },

  toJSON(message: Media_AudioProperties): unknown {
    const obj: any = {};
    if (message.volume !== 0) {
      obj.volume = message.volume;
    }
    if (message.audioChannels?.length) {
      obj.audioChannels = message.audioChannels.map((e) =>
        Media_Audio_Channel.toJSON(e),
      );
    }
    if (message.isCustomMapping !== false) {
      obj.isCustomMapping = message.isCustomMapping;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_AudioProperties>, I>>(
    base?: I,
  ): Media_AudioProperties {
    return Media_AudioProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_AudioProperties>, I>>(
    object: I,
  ): Media_AudioProperties {
    const message = createBaseMedia_AudioProperties();
    message.volume = object.volume ?? 0;
    message.audioChannels =
      object.audioChannels?.map((e) => Media_Audio_Channel.fromPartial(e)) ||
      [];
    message.isCustomMapping = object.isCustomMapping ?? false;
    return message;
  },
};

function createBaseMedia_TransportProperties(): Media_TransportProperties {
  return {
    playRate: 0,
    inPoint: 0,
    outPoint: 0,
    fadeInDuration: 0,
    fadeOutDuration: 0,
    shouldFadeIn: false,
    shouldFadeOut: false,
    endPoint: 0,
    playbackBehavior: 0,
    loopTime: 0,
    timesToLoop: 0,
    retrigger: 0,
  };
}

export const Media_TransportProperties = {
  encode(
    message: Media_TransportProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playRate !== 0) {
      writer.uint32(9).double(message.playRate);
    }
    if (message.inPoint !== 0) {
      writer.uint32(17).double(message.inPoint);
    }
    if (message.outPoint !== 0) {
      writer.uint32(25).double(message.outPoint);
    }
    if (message.fadeInDuration !== 0) {
      writer.uint32(57).double(message.fadeInDuration);
    }
    if (message.fadeOutDuration !== 0) {
      writer.uint32(65).double(message.fadeOutDuration);
    }
    if (message.shouldFadeIn !== false) {
      writer.uint32(72).bool(message.shouldFadeIn);
    }
    if (message.shouldFadeOut !== false) {
      writer.uint32(80).bool(message.shouldFadeOut);
    }
    if (message.endPoint !== 0) {
      writer.uint32(89).double(message.endPoint);
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(96).int32(message.playbackBehavior);
    }
    if (message.loopTime !== 0) {
      writer.uint32(105).double(message.loopTime);
    }
    if (message.timesToLoop !== 0) {
      writer.uint32(112).uint32(message.timesToLoop);
    }
    if (message.retrigger !== 0) {
      writer.uint32(120).int32(message.retrigger);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_TransportProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_TransportProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.playRate = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.inPoint = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.outPoint = reader.double();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.fadeInDuration = reader.double();
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.fadeOutDuration = reader.double();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.shouldFadeIn = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.shouldFadeOut = reader.bool();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.endPoint = reader.double();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.loopTime = reader.double();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.timesToLoop = reader.uint32();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.retrigger = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_TransportProperties {
    return {
      playRate: isSet(object.playRate) ? globalThis.Number(object.playRate) : 0,
      inPoint: isSet(object.inPoint) ? globalThis.Number(object.inPoint) : 0,
      outPoint: isSet(object.outPoint) ? globalThis.Number(object.outPoint) : 0,
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
      endPoint: isSet(object.endPoint) ? globalThis.Number(object.endPoint) : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? media_TransportProperties_PlaybackBehaviorFromJSON(
            object.playbackBehavior,
          )
        : 0,
      loopTime: isSet(object.loopTime) ? globalThis.Number(object.loopTime) : 0,
      timesToLoop: isSet(object.timesToLoop)
        ? globalThis.Number(object.timesToLoop)
        : 0,
      retrigger: isSet(object.retrigger)
        ? media_TransportProperties_RetriggerSettingFromJSON(object.retrigger)
        : 0,
    };
  },

  toJSON(message: Media_TransportProperties): unknown {
    const obj: any = {};
    if (message.playRate !== 0) {
      obj.playRate = message.playRate;
    }
    if (message.inPoint !== 0) {
      obj.inPoint = message.inPoint;
    }
    if (message.outPoint !== 0) {
      obj.outPoint = message.outPoint;
    }
    if (message.fadeInDuration !== 0) {
      obj.fadeInDuration = message.fadeInDuration;
    }
    if (message.fadeOutDuration !== 0) {
      obj.fadeOutDuration = message.fadeOutDuration;
    }
    if (message.shouldFadeIn !== false) {
      obj.shouldFadeIn = message.shouldFadeIn;
    }
    if (message.shouldFadeOut !== false) {
      obj.shouldFadeOut = message.shouldFadeOut;
    }
    if (message.endPoint !== 0) {
      obj.endPoint = message.endPoint;
    }
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior = media_TransportProperties_PlaybackBehaviorToJSON(
        message.playbackBehavior,
      );
    }
    if (message.loopTime !== 0) {
      obj.loopTime = message.loopTime;
    }
    if (message.timesToLoop !== 0) {
      obj.timesToLoop = Math.round(message.timesToLoop);
    }
    if (message.retrigger !== 0) {
      obj.retrigger = media_TransportProperties_RetriggerSettingToJSON(
        message.retrigger,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_TransportProperties>, I>>(
    base?: I,
  ): Media_TransportProperties {
    return Media_TransportProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_TransportProperties>, I>>(
    object: I,
  ): Media_TransportProperties {
    const message = createBaseMedia_TransportProperties();
    message.playRate = object.playRate ?? 0;
    message.inPoint = object.inPoint ?? 0;
    message.outPoint = object.outPoint ?? 0;
    message.fadeInDuration = object.fadeInDuration ?? 0;
    message.fadeOutDuration = object.fadeOutDuration ?? 0;
    message.shouldFadeIn = object.shouldFadeIn ?? false;
    message.shouldFadeOut = object.shouldFadeOut ?? false;
    message.endPoint = object.endPoint ?? 0;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.loopTime = object.loopTime ?? 0;
    message.timesToLoop = object.timesToLoop ?? 0;
    message.retrigger = object.retrigger ?? 0;
    return message;
  },
};

function createBaseMedia_DrawingProperties(): Media_DrawingProperties {
  return {
    scaleBehavior: 0,
    isBlurred: false,
    scaleAlignment: 0,
    flippedHorizontally: false,
    flippedVertically: false,
    naturalSize: undefined,
    customImageRotation: 0,
    customImageBounds: undefined,
    customImageAspectLocked: false,
    alphaInverted: false,
    nativeRotation: 0,
    selectedEffectPresetUuid: undefined,
    effects: [],
    cropEnable: false,
    cropInsets: undefined,
    alphaType: 0,
  };
}

export const Media_DrawingProperties = {
  encode(
    message: Media_DrawingProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.scaleBehavior !== 0) {
      writer.uint32(8).int32(message.scaleBehavior);
    }
    if (message.isBlurred !== false) {
      writer.uint32(128).bool(message.isBlurred);
    }
    if (message.scaleAlignment !== 0) {
      writer.uint32(16).int32(message.scaleAlignment);
    }
    if (message.flippedHorizontally !== false) {
      writer.uint32(24).bool(message.flippedHorizontally);
    }
    if (message.flippedVertically !== false) {
      writer.uint32(32).bool(message.flippedVertically);
    }
    if (message.naturalSize !== undefined) {
      Graphics_Size.encode(
        message.naturalSize,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.customImageRotation !== 0) {
      writer.uint32(49).double(message.customImageRotation);
    }
    if (message.customImageBounds !== undefined) {
      Graphics_Rect.encode(
        message.customImageBounds,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.customImageAspectLocked !== false) {
      writer.uint32(64).bool(message.customImageAspectLocked);
    }
    if (message.alphaInverted !== false) {
      writer.uint32(72).bool(message.alphaInverted);
    }
    if (message.nativeRotation !== 0) {
      writer.uint32(80).int32(message.nativeRotation);
    }
    if (message.selectedEffectPresetUuid !== undefined) {
      UUID.encode(
        message.selectedEffectPresetUuid,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.cropEnable !== false) {
      writer.uint32(104).bool(message.cropEnable);
    }
    if (message.cropInsets !== undefined) {
      Graphics_EdgeInsets.encode(
        message.cropInsets,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.alphaType !== 0) {
      writer.uint32(120).int32(message.alphaType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_DrawingProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_DrawingProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.scaleBehavior = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.isBlurred = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.scaleAlignment = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.flippedHorizontally = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.flippedVertically = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.naturalSize = Graphics_Size.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.customImageRotation = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.customImageBounds = Graphics_Rect.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.customImageAspectLocked = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.alphaInverted = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.nativeRotation = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.selectedEffectPresetUuid = UUID.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.cropEnable = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.cropInsets = Graphics_EdgeInsets.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 120) {
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

  fromJSON(object: any): Media_DrawingProperties {
    return {
      scaleBehavior: isSet(object.scaleBehavior)
        ? media_ScaleBehaviorFromJSON(object.scaleBehavior)
        : 0,
      isBlurred: isSet(object.isBlurred)
        ? globalThis.Boolean(object.isBlurred)
        : false,
      scaleAlignment: isSet(object.scaleAlignment)
        ? media_ScaleAlignmentFromJSON(object.scaleAlignment)
        : 0,
      flippedHorizontally: isSet(object.flippedHorizontally)
        ? globalThis.Boolean(object.flippedHorizontally)
        : false,
      flippedVertically: isSet(object.flippedVertically)
        ? globalThis.Boolean(object.flippedVertically)
        : false,
      naturalSize: isSet(object.naturalSize)
        ? Graphics_Size.fromJSON(object.naturalSize)
        : undefined,
      customImageRotation: isSet(object.customImageRotation)
        ? globalThis.Number(object.customImageRotation)
        : 0,
      customImageBounds: isSet(object.customImageBounds)
        ? Graphics_Rect.fromJSON(object.customImageBounds)
        : undefined,
      customImageAspectLocked: isSet(object.customImageAspectLocked)
        ? globalThis.Boolean(object.customImageAspectLocked)
        : false,
      alphaInverted: isSet(object.alphaInverted)
        ? globalThis.Boolean(object.alphaInverted)
        : false,
      nativeRotation: isSet(object.nativeRotation)
        ? media_DrawingProperties_NativeRotationTypeFromJSON(
            object.nativeRotation,
          )
        : 0,
      selectedEffectPresetUuid: isSet(object.selectedEffectPresetUuid)
        ? UUID.fromJSON(object.selectedEffectPresetUuid)
        : undefined,
      effects: globalThis.Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
      cropEnable: isSet(object.cropEnable)
        ? globalThis.Boolean(object.cropEnable)
        : false,
      cropInsets: isSet(object.cropInsets)
        ? Graphics_EdgeInsets.fromJSON(object.cropInsets)
        : undefined,
      alphaType: isSet(object.alphaType)
        ? alphaTypeFromJSON(object.alphaType)
        : 0,
    };
  },

  toJSON(message: Media_DrawingProperties): unknown {
    const obj: any = {};
    if (message.scaleBehavior !== 0) {
      obj.scaleBehavior = media_ScaleBehaviorToJSON(message.scaleBehavior);
    }
    if (message.isBlurred !== false) {
      obj.isBlurred = message.isBlurred;
    }
    if (message.scaleAlignment !== 0) {
      obj.scaleAlignment = media_ScaleAlignmentToJSON(message.scaleAlignment);
    }
    if (message.flippedHorizontally !== false) {
      obj.flippedHorizontally = message.flippedHorizontally;
    }
    if (message.flippedVertically !== false) {
      obj.flippedVertically = message.flippedVertically;
    }
    if (message.naturalSize !== undefined) {
      obj.naturalSize = Graphics_Size.toJSON(message.naturalSize);
    }
    if (message.customImageRotation !== 0) {
      obj.customImageRotation = message.customImageRotation;
    }
    if (message.customImageBounds !== undefined) {
      obj.customImageBounds = Graphics_Rect.toJSON(message.customImageBounds);
    }
    if (message.customImageAspectLocked !== false) {
      obj.customImageAspectLocked = message.customImageAspectLocked;
    }
    if (message.alphaInverted !== false) {
      obj.alphaInverted = message.alphaInverted;
    }
    if (message.nativeRotation !== 0) {
      obj.nativeRotation = media_DrawingProperties_NativeRotationTypeToJSON(
        message.nativeRotation,
      );
    }
    if (message.selectedEffectPresetUuid !== undefined) {
      obj.selectedEffectPresetUuid = UUID.toJSON(
        message.selectedEffectPresetUuid,
      );
    }
    if (message.effects?.length) {
      obj.effects = message.effects.map((e) => Effect.toJSON(e));
    }
    if (message.cropEnable !== false) {
      obj.cropEnable = message.cropEnable;
    }
    if (message.cropInsets !== undefined) {
      obj.cropInsets = Graphics_EdgeInsets.toJSON(message.cropInsets);
    }
    if (message.alphaType !== 0) {
      obj.alphaType = alphaTypeToJSON(message.alphaType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_DrawingProperties>, I>>(
    base?: I,
  ): Media_DrawingProperties {
    return Media_DrawingProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_DrawingProperties>, I>>(
    object: I,
  ): Media_DrawingProperties {
    const message = createBaseMedia_DrawingProperties();
    message.scaleBehavior = object.scaleBehavior ?? 0;
    message.isBlurred = object.isBlurred ?? false;
    message.scaleAlignment = object.scaleAlignment ?? 0;
    message.flippedHorizontally = object.flippedHorizontally ?? false;
    message.flippedVertically = object.flippedVertically ?? false;
    message.naturalSize =
      object.naturalSize !== undefined && object.naturalSize !== null
        ? Graphics_Size.fromPartial(object.naturalSize)
        : undefined;
    message.customImageRotation = object.customImageRotation ?? 0;
    message.customImageBounds =
      object.customImageBounds !== undefined &&
      object.customImageBounds !== null
        ? Graphics_Rect.fromPartial(object.customImageBounds)
        : undefined;
    message.customImageAspectLocked = object.customImageAspectLocked ?? false;
    message.alphaInverted = object.alphaInverted ?? false;
    message.nativeRotation = object.nativeRotation ?? 0;
    message.selectedEffectPresetUuid =
      object.selectedEffectPresetUuid !== undefined &&
      object.selectedEffectPresetUuid !== null
        ? UUID.fromPartial(object.selectedEffectPresetUuid)
        : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.cropEnable = object.cropEnable ?? false;
    message.cropInsets =
      object.cropInsets !== undefined && object.cropInsets !== null
        ? Graphics_EdgeInsets.fromPartial(object.cropInsets)
        : undefined;
    message.alphaType = object.alphaType ?? 0;
    return message;
  },
};

function createBaseMedia_VideoProperties(): Media_VideoProperties {
  return {
    frameRate: 0,
    fieldType: 0,
    thumbnailPosition: 0,
    endBehavior: 0,
    softLoop: false,
    softLoopDuration: 0,
  };
}

export const Media_VideoProperties = {
  encode(
    message: Media_VideoProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.frameRate !== 0) {
      writer.uint32(9).double(message.frameRate);
    }
    if (message.fieldType !== 0) {
      writer.uint32(16).int32(message.fieldType);
    }
    if (message.thumbnailPosition !== 0) {
      writer.uint32(25).double(message.thumbnailPosition);
    }
    if (message.endBehavior !== 0) {
      writer.uint32(32).int32(message.endBehavior);
    }
    if (message.softLoop !== false) {
      writer.uint32(40).bool(message.softLoop);
    }
    if (message.softLoopDuration !== 0) {
      writer.uint32(49).double(message.softLoopDuration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_VideoProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.frameRate = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fieldType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.thumbnailPosition = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.endBehavior = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.softLoop = reader.bool();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.softLoopDuration = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_VideoProperties {
    return {
      frameRate: isSet(object.frameRate)
        ? globalThis.Number(object.frameRate)
        : 0,
      fieldType: isSet(object.fieldType)
        ? media_VideoProperties_FieldTypeFromJSON(object.fieldType)
        : 0,
      thumbnailPosition: isSet(object.thumbnailPosition)
        ? globalThis.Number(object.thumbnailPosition)
        : 0,
      endBehavior: isSet(object.endBehavior)
        ? media_VideoProperties_EndBehaviorFromJSON(object.endBehavior)
        : 0,
      softLoop: isSet(object.softLoop)
        ? globalThis.Boolean(object.softLoop)
        : false,
      softLoopDuration: isSet(object.softLoopDuration)
        ? globalThis.Number(object.softLoopDuration)
        : 0,
    };
  },

  toJSON(message: Media_VideoProperties): unknown {
    const obj: any = {};
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    if (message.fieldType !== 0) {
      obj.fieldType = media_VideoProperties_FieldTypeToJSON(message.fieldType);
    }
    if (message.thumbnailPosition !== 0) {
      obj.thumbnailPosition = message.thumbnailPosition;
    }
    if (message.endBehavior !== 0) {
      obj.endBehavior = media_VideoProperties_EndBehaviorToJSON(
        message.endBehavior,
      );
    }
    if (message.softLoop !== false) {
      obj.softLoop = message.softLoop;
    }
    if (message.softLoopDuration !== 0) {
      obj.softLoopDuration = message.softLoopDuration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_VideoProperties>, I>>(
    base?: I,
  ): Media_VideoProperties {
    return Media_VideoProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_VideoProperties>, I>>(
    object: I,
  ): Media_VideoProperties {
    const message = createBaseMedia_VideoProperties();
    message.frameRate = object.frameRate ?? 0;
    message.fieldType = object.fieldType ?? 0;
    message.thumbnailPosition = object.thumbnailPosition ?? 0;
    message.endBehavior = object.endBehavior ?? 0;
    message.softLoop = object.softLoop ?? false;
    message.softLoopDuration = object.softLoopDuration ?? 0;
    return message;
  },
};

function createBaseMedia_LiveVideoProperties(): Media_LiveVideoProperties {
  return { videoDevice: undefined, audioDevice: undefined, liveVideoIndex: 0 };
}

export const Media_LiveVideoProperties = {
  encode(
    message: Media_LiveVideoProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.videoDevice !== undefined) {
      Media_VideoDevice.encode(
        message.videoDevice,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.audioDevice !== undefined) {
      Media_AudioDevice.encode(
        message.audioDevice,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.liveVideoIndex !== 0) {
      writer.uint32(24).int32(message.liveVideoIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_LiveVideoProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_LiveVideoProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.videoDevice = Media_VideoDevice.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioDevice = Media_AudioDevice.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.liveVideoIndex = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_LiveVideoProperties {
    return {
      videoDevice: isSet(object.videoDevice)
        ? Media_VideoDevice.fromJSON(object.videoDevice)
        : undefined,
      audioDevice: isSet(object.audioDevice)
        ? Media_AudioDevice.fromJSON(object.audioDevice)
        : undefined,
      liveVideoIndex: isSet(object.liveVideoIndex)
        ? globalThis.Number(object.liveVideoIndex)
        : 0,
    };
  },

  toJSON(message: Media_LiveVideoProperties): unknown {
    const obj: any = {};
    if (message.videoDevice !== undefined) {
      obj.videoDevice = Media_VideoDevice.toJSON(message.videoDevice);
    }
    if (message.audioDevice !== undefined) {
      obj.audioDevice = Media_AudioDevice.toJSON(message.audioDevice);
    }
    if (message.liveVideoIndex !== 0) {
      obj.liveVideoIndex = Math.round(message.liveVideoIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_LiveVideoProperties>, I>>(
    base?: I,
  ): Media_LiveVideoProperties {
    return Media_LiveVideoProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_LiveVideoProperties>, I>>(
    object: I,
  ): Media_LiveVideoProperties {
    const message = createBaseMedia_LiveVideoProperties();
    message.videoDevice =
      object.videoDevice !== undefined && object.videoDevice !== null
        ? Media_VideoDevice.fromPartial(object.videoDevice)
        : undefined;
    message.audioDevice =
      object.audioDevice !== undefined && object.audioDevice !== null
        ? Media_AudioDevice.fromPartial(object.audioDevice)
        : undefined;
    message.liveVideoIndex = object.liveVideoIndex ?? 0;
    return message;
  },
};

function createBaseMedia_AudioTypeProperties(): Media_AudioTypeProperties {
  return { audio: undefined, transport: undefined, file: undefined };
}

export const Media_AudioTypeProperties = {
  encode(
    message: Media_AudioTypeProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(
        message.audio,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.transport !== undefined) {
      Media_TransportProperties.encode(
        message.transport,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.file !== undefined) {
      FileProperties.encode(message.file, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_AudioTypeProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_AudioTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transport = Media_TransportProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.file = FileProperties.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_AudioTypeProperties {
    return {
      audio: isSet(object.audio)
        ? Media_AudioProperties.fromJSON(object.audio)
        : undefined,
      transport: isSet(object.transport)
        ? Media_TransportProperties.fromJSON(object.transport)
        : undefined,
      file: isSet(object.file)
        ? FileProperties.fromJSON(object.file)
        : undefined,
    };
  },

  toJSON(message: Media_AudioTypeProperties): unknown {
    const obj: any = {};
    if (message.audio !== undefined) {
      obj.audio = Media_AudioProperties.toJSON(message.audio);
    }
    if (message.transport !== undefined) {
      obj.transport = Media_TransportProperties.toJSON(message.transport);
    }
    if (message.file !== undefined) {
      obj.file = FileProperties.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_AudioTypeProperties>, I>>(
    base?: I,
  ): Media_AudioTypeProperties {
    return Media_AudioTypeProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_AudioTypeProperties>, I>>(
    object: I,
  ): Media_AudioTypeProperties {
    const message = createBaseMedia_AudioTypeProperties();
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? Media_AudioProperties.fromPartial(object.audio)
        : undefined;
    message.transport =
      object.transport !== undefined && object.transport !== null
        ? Media_TransportProperties.fromPartial(object.transport)
        : undefined;
    message.file =
      object.file !== undefined && object.file !== null
        ? FileProperties.fromPartial(object.file)
        : undefined;
    return message;
  },
};

function createBaseMedia_ImageTypeProperties(): Media_ImageTypeProperties {
  return { drawing: undefined, file: undefined };
}

export const Media_ImageTypeProperties = {
  encode(
    message: Media_ImageTypeProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(
        message.drawing,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.file !== undefined) {
      FileProperties.encode(message.file, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_ImageTypeProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_ImageTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.drawing = Media_DrawingProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.file = FileProperties.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_ImageTypeProperties {
    return {
      drawing: isSet(object.drawing)
        ? Media_DrawingProperties.fromJSON(object.drawing)
        : undefined,
      file: isSet(object.file)
        ? FileProperties.fromJSON(object.file)
        : undefined,
    };
  },

  toJSON(message: Media_ImageTypeProperties): unknown {
    const obj: any = {};
    if (message.drawing !== undefined) {
      obj.drawing = Media_DrawingProperties.toJSON(message.drawing);
    }
    if (message.file !== undefined) {
      obj.file = FileProperties.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_ImageTypeProperties>, I>>(
    base?: I,
  ): Media_ImageTypeProperties {
    return Media_ImageTypeProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_ImageTypeProperties>, I>>(
    object: I,
  ): Media_ImageTypeProperties {
    const message = createBaseMedia_ImageTypeProperties();
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? Media_DrawingProperties.fromPartial(object.drawing)
        : undefined;
    message.file =
      object.file !== undefined && object.file !== null
        ? FileProperties.fromPartial(object.file)
        : undefined;
    return message;
  },
};

function createBaseMedia_VideoTypeProperties(): Media_VideoTypeProperties {
  return {
    drawing: undefined,
    audio: undefined,
    transport: undefined,
    video: undefined,
    file: undefined,
  };
}

export const Media_VideoTypeProperties = {
  encode(
    message: Media_VideoTypeProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(
        message.drawing,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(
        message.audio,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.transport !== undefined) {
      Media_TransportProperties.encode(
        message.transport,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.video !== undefined) {
      Media_VideoProperties.encode(
        message.video,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.file !== undefined) {
      FileProperties.encode(message.file, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_VideoTypeProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_VideoTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.drawing = Media_DrawingProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.transport = Media_TransportProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.video = Media_VideoProperties.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.file = FileProperties.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Media_VideoTypeProperties {
    return {
      drawing: isSet(object.drawing)
        ? Media_DrawingProperties.fromJSON(object.drawing)
        : undefined,
      audio: isSet(object.audio)
        ? Media_AudioProperties.fromJSON(object.audio)
        : undefined,
      transport: isSet(object.transport)
        ? Media_TransportProperties.fromJSON(object.transport)
        : undefined,
      video: isSet(object.video)
        ? Media_VideoProperties.fromJSON(object.video)
        : undefined,
      file: isSet(object.file)
        ? FileProperties.fromJSON(object.file)
        : undefined,
    };
  },

  toJSON(message: Media_VideoTypeProperties): unknown {
    const obj: any = {};
    if (message.drawing !== undefined) {
      obj.drawing = Media_DrawingProperties.toJSON(message.drawing);
    }
    if (message.audio !== undefined) {
      obj.audio = Media_AudioProperties.toJSON(message.audio);
    }
    if (message.transport !== undefined) {
      obj.transport = Media_TransportProperties.toJSON(message.transport);
    }
    if (message.video !== undefined) {
      obj.video = Media_VideoProperties.toJSON(message.video);
    }
    if (message.file !== undefined) {
      obj.file = FileProperties.toJSON(message.file);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_VideoTypeProperties>, I>>(
    base?: I,
  ): Media_VideoTypeProperties {
    return Media_VideoTypeProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_VideoTypeProperties>, I>>(
    object: I,
  ): Media_VideoTypeProperties {
    const message = createBaseMedia_VideoTypeProperties();
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? Media_DrawingProperties.fromPartial(object.drawing)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? Media_AudioProperties.fromPartial(object.audio)
        : undefined;
    message.transport =
      object.transport !== undefined && object.transport !== null
        ? Media_TransportProperties.fromPartial(object.transport)
        : undefined;
    message.video =
      object.video !== undefined && object.video !== null
        ? Media_VideoProperties.fromPartial(object.video)
        : undefined;
    message.file =
      object.file !== undefined && object.file !== null
        ? FileProperties.fromPartial(object.file)
        : undefined;
    return message;
  },
};

function createBaseMedia_LiveVideoTypeProperties(): Media_LiveVideoTypeProperties {
  return { drawing: undefined, audio: undefined, liveVideo: undefined };
}

export const Media_LiveVideoTypeProperties = {
  encode(
    message: Media_LiveVideoTypeProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(
        message.drawing,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      Media_AudioProperties.encode(
        message.audio,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.liveVideo !== undefined) {
      Media_LiveVideoProperties.encode(
        message.liveVideo,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_LiveVideoTypeProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_LiveVideoTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.drawing = Media_DrawingProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audio = Media_AudioProperties.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.liveVideo = Media_LiveVideoProperties.decode(
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

  fromJSON(object: any): Media_LiveVideoTypeProperties {
    return {
      drawing: isSet(object.drawing)
        ? Media_DrawingProperties.fromJSON(object.drawing)
        : undefined,
      audio: isSet(object.audio)
        ? Media_AudioProperties.fromJSON(object.audio)
        : undefined,
      liveVideo: isSet(object.liveVideo)
        ? Media_LiveVideoProperties.fromJSON(object.liveVideo)
        : undefined,
    };
  },

  toJSON(message: Media_LiveVideoTypeProperties): unknown {
    const obj: any = {};
    if (message.drawing !== undefined) {
      obj.drawing = Media_DrawingProperties.toJSON(message.drawing);
    }
    if (message.audio !== undefined) {
      obj.audio = Media_AudioProperties.toJSON(message.audio);
    }
    if (message.liveVideo !== undefined) {
      obj.liveVideo = Media_LiveVideoProperties.toJSON(message.liveVideo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_LiveVideoTypeProperties>, I>>(
    base?: I,
  ): Media_LiveVideoTypeProperties {
    return Media_LiveVideoTypeProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_LiveVideoTypeProperties>, I>>(
    object: I,
  ): Media_LiveVideoTypeProperties {
    const message = createBaseMedia_LiveVideoTypeProperties();
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? Media_DrawingProperties.fromPartial(object.drawing)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? Media_AudioProperties.fromPartial(object.audio)
        : undefined;
    message.liveVideo =
      object.liveVideo !== undefined && object.liveVideo !== null
        ? Media_LiveVideoProperties.fromPartial(object.liveVideo)
        : undefined;
    return message;
  },
};

function createBaseMedia_WebContentTypeProperties(): Media_WebContentTypeProperties {
  return { drawing: undefined, url: undefined };
}

export const Media_WebContentTypeProperties = {
  encode(
    message: Media_WebContentTypeProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.drawing !== undefined) {
      Media_DrawingProperties.encode(
        message.drawing,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Media_WebContentTypeProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMedia_WebContentTypeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.drawing = Media_DrawingProperties.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Media_WebContentTypeProperties {
    return {
      drawing: isSet(object.drawing)
        ? Media_DrawingProperties.fromJSON(object.drawing)
        : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
    };
  },

  toJSON(message: Media_WebContentTypeProperties): unknown {
    const obj: any = {};
    if (message.drawing !== undefined) {
      obj.drawing = Media_DrawingProperties.toJSON(message.drawing);
    }
    if (message.url !== undefined) {
      obj.url = URL.toJSON(message.url);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Media_WebContentTypeProperties>, I>>(
    base?: I,
  ): Media_WebContentTypeProperties {
    return Media_WebContentTypeProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Media_WebContentTypeProperties>, I>>(
    object: I,
  ): Media_WebContentTypeProperties {
    const message = createBaseMedia_WebContentTypeProperties();
    message.drawing =
      object.drawing !== undefined && object.drawing !== null
        ? Media_DrawingProperties.fromPartial(object.drawing)
        : undefined;
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

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
