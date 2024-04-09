/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Color } from './color';
import { Font } from './font';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export enum LogoType {
  LOGO_TYPE_NONE = 0,
  LOGO_TYPE_PROPRESENTER = 1,
  LOGO_TYPE_USER = 2,
  UNRECOGNIZED = -1,
}

export function logoTypeFromJSON(object: any): LogoType {
  switch (object) {
    case 0:
    case 'LOGO_TYPE_NONE':
      return LogoType.LOGO_TYPE_NONE;
    case 1:
    case 'LOGO_TYPE_PROPRESENTER':
      return LogoType.LOGO_TYPE_PROPRESENTER;
    case 2:
    case 'LOGO_TYPE_USER':
      return LogoType.LOGO_TYPE_USER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return LogoType.UNRECOGNIZED;
  }
}

export function logoTypeToJSON(object: LogoType): string {
  switch (object) {
    case LogoType.LOGO_TYPE_NONE:
      return 'LOGO_TYPE_NONE';
    case LogoType.LOGO_TYPE_PROPRESENTER:
      return 'LOGO_TYPE_PROPRESENTER';
    case LogoType.LOGO_TYPE_USER:
      return 'LOGO_TYPE_USER';
    case LogoType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TestPattern {
  type: TestPattern_Type;
  blendGrid?: TestPattern_BlendGrid | undefined;
  customColor?: TestPattern_CustomColor | undefined;
  intensity?: TestPattern_IntensityColor | undefined;
}

export enum TestPattern_Type {
  TYPE_UNKNOWN = 0,
  TYPE_BLEND_GRID = 1,
  TYPE_COLOR_BARS = 2,
  TYPE_FOCUS = 3,
  TYPE_GRAY_SCALE = 4,
  TYPE_BLACK_COLOR = 5,
  TYPE_WHITE_COLOR = 6,
  TYPE_CUSTOM_COLOR = 7,
  TYPE_TEXT = 8,
  TYPE_VIDEO_SYNC = 9,
  UNRECOGNIZED = -1,
}

export function testPattern_TypeFromJSON(object: any): TestPattern_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return TestPattern_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_BLEND_GRID':
      return TestPattern_Type.TYPE_BLEND_GRID;
    case 2:
    case 'TYPE_COLOR_BARS':
      return TestPattern_Type.TYPE_COLOR_BARS;
    case 3:
    case 'TYPE_FOCUS':
      return TestPattern_Type.TYPE_FOCUS;
    case 4:
    case 'TYPE_GRAY_SCALE':
      return TestPattern_Type.TYPE_GRAY_SCALE;
    case 5:
    case 'TYPE_BLACK_COLOR':
      return TestPattern_Type.TYPE_BLACK_COLOR;
    case 6:
    case 'TYPE_WHITE_COLOR':
      return TestPattern_Type.TYPE_WHITE_COLOR;
    case 7:
    case 'TYPE_CUSTOM_COLOR':
      return TestPattern_Type.TYPE_CUSTOM_COLOR;
    case 8:
    case 'TYPE_TEXT':
      return TestPattern_Type.TYPE_TEXT;
    case 9:
    case 'TYPE_VIDEO_SYNC':
      return TestPattern_Type.TYPE_VIDEO_SYNC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TestPattern_Type.UNRECOGNIZED;
  }
}

export function testPattern_TypeToJSON(object: TestPattern_Type): string {
  switch (object) {
    case TestPattern_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case TestPattern_Type.TYPE_BLEND_GRID:
      return 'TYPE_BLEND_GRID';
    case TestPattern_Type.TYPE_COLOR_BARS:
      return 'TYPE_COLOR_BARS';
    case TestPattern_Type.TYPE_FOCUS:
      return 'TYPE_FOCUS';
    case TestPattern_Type.TYPE_GRAY_SCALE:
      return 'TYPE_GRAY_SCALE';
    case TestPattern_Type.TYPE_BLACK_COLOR:
      return 'TYPE_BLACK_COLOR';
    case TestPattern_Type.TYPE_WHITE_COLOR:
      return 'TYPE_WHITE_COLOR';
    case TestPattern_Type.TYPE_CUSTOM_COLOR:
      return 'TYPE_CUSTOM_COLOR';
    case TestPattern_Type.TYPE_TEXT:
      return 'TYPE_TEXT';
    case TestPattern_Type.TYPE_VIDEO_SYNC:
      return 'TYPE_VIDEO_SYNC';
    case TestPattern_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TestPattern_BlendGrid {
  drawGrid: boolean;
  drawCircles: boolean;
  drawLines: boolean;
  invertColors: boolean;
  gridSpacing: number;
}

export interface TestPattern_CustomColor {
  color: Color | undefined;
}

export interface TestPattern_IntensityColor {
  intensity: number;
}

export interface TestPatternDefinition {
  uuid: UUID | undefined;
  nameLocalizationKey: string;
  properties: TestPatternDefinition_Property[];
  showDelaySettings: boolean;
  isDefault: boolean;
}

export interface TestPatternDefinition_ColorProperty {
  value: Color | undefined;
  allowAlpha: boolean;
  defaultColors: Color[];
}

export interface TestPatternDefinition_DoubleProperty {
  value: number;
  min: number;
  max: number;
  step: number;
  units: string;
  viewType: TestPatternDefinition_DoubleProperty_ViewType;
}

export enum TestPatternDefinition_DoubleProperty_ViewType {
  VIEW_TYPE_STEPPER = 0,
  VIEW_TYPE_SLIDER = 1,
  VIEW_TYPE_SPEED_SLIDER = 2,
  UNRECOGNIZED = -1,
}

export function testPatternDefinition_DoubleProperty_ViewTypeFromJSON(
  object: any,
): TestPatternDefinition_DoubleProperty_ViewType {
  switch (object) {
    case 0:
    case 'VIEW_TYPE_STEPPER':
      return TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_STEPPER;
    case 1:
    case 'VIEW_TYPE_SLIDER':
      return TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_SLIDER;
    case 2:
    case 'VIEW_TYPE_SPEED_SLIDER':
      return TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_SPEED_SLIDER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TestPatternDefinition_DoubleProperty_ViewType.UNRECOGNIZED;
  }
}

export function testPatternDefinition_DoubleProperty_ViewTypeToJSON(
  object: TestPatternDefinition_DoubleProperty_ViewType,
): string {
  switch (object) {
    case TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_STEPPER:
      return 'VIEW_TYPE_STEPPER';
    case TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_SLIDER:
      return 'VIEW_TYPE_SLIDER';
    case TestPatternDefinition_DoubleProperty_ViewType.VIEW_TYPE_SPEED_SLIDER:
      return 'VIEW_TYPE_SPEED_SLIDER';
    case TestPatternDefinition_DoubleProperty_ViewType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TestPatternDefinition_IntProperty {
  value: number;
  min: number;
  max: number;
  units: string;
}

export interface TestPatternDefinition_BoolProperty {
  value: boolean;
  dependentProperties: TestPatternDefinition_Property[];
}

export interface TestPatternDefinition_StringProperty {
  value: string;
  minChars: number;
  maxChars: number;
}

export interface TestPatternDefinition_FontProperty {
  font: Font | undefined;
}

export interface TestPatternDefinition_SelectorProperty {
  selectedIndex: number;
  valueLocalizationKeys: string[];
}

export interface TestPatternDefinition_Property {
  nameLocalizationKey: string;
  colorProperty?: TestPatternDefinition_ColorProperty | undefined;
  doubleProperty?: TestPatternDefinition_DoubleProperty | undefined;
  intProperty?: TestPatternDefinition_IntProperty | undefined;
  boolProperty?: TestPatternDefinition_BoolProperty | undefined;
  stringProperty?: TestPatternDefinition_StringProperty | undefined;
  fontProperty?: TestPatternDefinition_FontProperty | undefined;
  selectorProperty?: TestPatternDefinition_SelectorProperty | undefined;
}

export interface TestPatternRenderSettings {
  pattern: TestPatternDefinition | undefined;
  screenName: string;
  outputs: TestPatternRenderSettings_Output[];
  logoType: LogoType;
  logoFile: string;
  renderWidth: number;
  renderHeight: number;
  enableAudio: boolean;
}

export interface TestPatternRenderSettings_Output {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  frameRate: number;
}

export interface TestPatternState {
  pattern: TestPatternDefinition | undefined;
  showPattern: boolean;
  displayLocation: TestPatternState_DisplayLocation;
  specificScreen: UUID | undefined;
  identifyScreens: boolean;
  logoType: LogoType;
  userLogoLocation: URL | undefined;
}

export enum TestPatternState_DisplayLocation {
  DISPLAY_LOCATION_ALL_SCREENS = 0,
  DISPLAY_LOCATION_AUDIENCE_SCREENS = 1,
  DISPLAY_LOCATION_STAGE_SCREENS = 2,
  DISPLAY_LOCATION_SPECIFIC_SCREEN = 3,
  UNRECOGNIZED = -1,
}

export function testPatternState_DisplayLocationFromJSON(
  object: any,
): TestPatternState_DisplayLocation {
  switch (object) {
    case 0:
    case 'DISPLAY_LOCATION_ALL_SCREENS':
      return TestPatternState_DisplayLocation.DISPLAY_LOCATION_ALL_SCREENS;
    case 1:
    case 'DISPLAY_LOCATION_AUDIENCE_SCREENS':
      return TestPatternState_DisplayLocation.DISPLAY_LOCATION_AUDIENCE_SCREENS;
    case 2:
    case 'DISPLAY_LOCATION_STAGE_SCREENS':
      return TestPatternState_DisplayLocation.DISPLAY_LOCATION_STAGE_SCREENS;
    case 3:
    case 'DISPLAY_LOCATION_SPECIFIC_SCREEN':
      return TestPatternState_DisplayLocation.DISPLAY_LOCATION_SPECIFIC_SCREEN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TestPatternState_DisplayLocation.UNRECOGNIZED;
  }
}

export function testPatternState_DisplayLocationToJSON(
  object: TestPatternState_DisplayLocation,
): string {
  switch (object) {
    case TestPatternState_DisplayLocation.DISPLAY_LOCATION_ALL_SCREENS:
      return 'DISPLAY_LOCATION_ALL_SCREENS';
    case TestPatternState_DisplayLocation.DISPLAY_LOCATION_AUDIENCE_SCREENS:
      return 'DISPLAY_LOCATION_AUDIENCE_SCREENS';
    case TestPatternState_DisplayLocation.DISPLAY_LOCATION_STAGE_SCREENS:
      return 'DISPLAY_LOCATION_STAGE_SCREENS';
    case TestPatternState_DisplayLocation.DISPLAY_LOCATION_SPECIFIC_SCREEN:
      return 'DISPLAY_LOCATION_SPECIFIC_SCREEN';
    case TestPatternState_DisplayLocation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface TestPatternDocument {
  state: TestPatternDocument_TestPatternStateData | undefined;
  patterns: TestPatternDocument_TestPatternData[];
}

export interface TestPatternDocument_TestPatternStateData {
  testPatternId: UUID | undefined;
  testPatternNameLocalizationKey: string;
  displayLocation: TestPatternState_DisplayLocation;
  specificScreen: UUID | undefined;
  identifyScreens: boolean;
  logoType: LogoType;
  userLogoLocation: URL | undefined;
}

export interface TestPatternDocument_TestPatternData {
  uuid: UUID | undefined;
  nameLocalizationKey: string;
  properties: TestPatternDocument_TestPatternData_Property[];
}

export interface TestPatternDocument_TestPatternData_ColorProperty {
  value: Color | undefined;
}

export interface TestPatternDocument_TestPatternData_DoubleProperty {
  value: number;
}

export interface TestPatternDocument_TestPatternData_IntProperty {
  value: number;
}

export interface TestPatternDocument_TestPatternData_BoolProperty {
  value: boolean;
  dependentProperties: TestPatternDocument_TestPatternData_Property[];
}

export interface TestPatternDocument_TestPatternData_StringProperty {
  value: string;
}

export interface TestPatternDocument_TestPatternData_FontProperty {
  value: Font | undefined;
}

export interface TestPatternDocument_TestPatternData_SelectorProperty {
  value: number;
}

export interface TestPatternDocument_TestPatternData_Property {
  nameLocalizationKey: string;
  colorProperty?: TestPatternDocument_TestPatternData_ColorProperty | undefined;
  doubleProperty?:
    | TestPatternDocument_TestPatternData_DoubleProperty
    | undefined;
  intProperty?: TestPatternDocument_TestPatternData_IntProperty | undefined;
  boolProperty?: TestPatternDocument_TestPatternData_BoolProperty | undefined;
  stringProperty?:
    | TestPatternDocument_TestPatternData_StringProperty
    | undefined;
  fontProperty?: TestPatternDocument_TestPatternData_FontProperty | undefined;
  selectorProperty?:
    | TestPatternDocument_TestPatternData_SelectorProperty
    | undefined;
}

function createBaseTestPattern(): TestPattern {
  return {
    type: 0,
    blendGrid: undefined,
    customColor: undefined,
    intensity: undefined,
  };
}

export const TestPattern = {
  encode(
    message: TestPattern,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.blendGrid !== undefined) {
      TestPattern_BlendGrid.encode(
        message.blendGrid,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.customColor !== undefined) {
      TestPattern_CustomColor.encode(
        message.customColor,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.intensity !== undefined) {
      TestPattern_IntensityColor.encode(
        message.intensity,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPattern {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern();
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

          message.blendGrid = TestPattern_BlendGrid.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.customColor = TestPattern_CustomColor.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.intensity = TestPattern_IntensityColor.decode(
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

  fromJSON(object: any): TestPattern {
    return {
      type: isSet(object.type) ? testPattern_TypeFromJSON(object.type) : 0,
      blendGrid: isSet(object.blendGrid)
        ? TestPattern_BlendGrid.fromJSON(object.blendGrid)
        : undefined,
      customColor: isSet(object.customColor)
        ? TestPattern_CustomColor.fromJSON(object.customColor)
        : undefined,
      intensity: isSet(object.intensity)
        ? TestPattern_IntensityColor.fromJSON(object.intensity)
        : undefined,
    };
  },

  toJSON(message: TestPattern): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = testPattern_TypeToJSON(message.type);
    }
    if (message.blendGrid !== undefined) {
      obj.blendGrid = TestPattern_BlendGrid.toJSON(message.blendGrid);
    }
    if (message.customColor !== undefined) {
      obj.customColor = TestPattern_CustomColor.toJSON(message.customColor);
    }
    if (message.intensity !== undefined) {
      obj.intensity = TestPattern_IntensityColor.toJSON(message.intensity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPattern>, I>>(base?: I): TestPattern {
    return TestPattern.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPattern>, I>>(
    object: I,
  ): TestPattern {
    const message = createBaseTestPattern();
    message.type = object.type ?? 0;
    message.blendGrid =
      object.blendGrid !== undefined && object.blendGrid !== null
        ? TestPattern_BlendGrid.fromPartial(object.blendGrid)
        : undefined;
    message.customColor =
      object.customColor !== undefined && object.customColor !== null
        ? TestPattern_CustomColor.fromPartial(object.customColor)
        : undefined;
    message.intensity =
      object.intensity !== undefined && object.intensity !== null
        ? TestPattern_IntensityColor.fromPartial(object.intensity)
        : undefined;
    return message;
  },
};

function createBaseTestPattern_BlendGrid(): TestPattern_BlendGrid {
  return {
    drawGrid: false,
    drawCircles: false,
    drawLines: false,
    invertColors: false,
    gridSpacing: 0,
  };
}

export const TestPattern_BlendGrid = {
  encode(
    message: TestPattern_BlendGrid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.drawGrid !== false) {
      writer.uint32(8).bool(message.drawGrid);
    }
    if (message.drawCircles !== false) {
      writer.uint32(16).bool(message.drawCircles);
    }
    if (message.drawLines !== false) {
      writer.uint32(24).bool(message.drawLines);
    }
    if (message.invertColors !== false) {
      writer.uint32(32).bool(message.invertColors);
    }
    if (message.gridSpacing !== 0) {
      writer.uint32(41).double(message.gridSpacing);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPattern_BlendGrid {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_BlendGrid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.drawGrid = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.drawCircles = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.drawLines = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.invertColors = reader.bool();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.gridSpacing = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPattern_BlendGrid {
    return {
      drawGrid: isSet(object.drawGrid)
        ? globalThis.Boolean(object.drawGrid)
        : false,
      drawCircles: isSet(object.drawCircles)
        ? globalThis.Boolean(object.drawCircles)
        : false,
      drawLines: isSet(object.drawLines)
        ? globalThis.Boolean(object.drawLines)
        : false,
      invertColors: isSet(object.invertColors)
        ? globalThis.Boolean(object.invertColors)
        : false,
      gridSpacing: isSet(object.gridSpacing)
        ? globalThis.Number(object.gridSpacing)
        : 0,
    };
  },

  toJSON(message: TestPattern_BlendGrid): unknown {
    const obj: any = {};
    if (message.drawGrid !== false) {
      obj.drawGrid = message.drawGrid;
    }
    if (message.drawCircles !== false) {
      obj.drawCircles = message.drawCircles;
    }
    if (message.drawLines !== false) {
      obj.drawLines = message.drawLines;
    }
    if (message.invertColors !== false) {
      obj.invertColors = message.invertColors;
    }
    if (message.gridSpacing !== 0) {
      obj.gridSpacing = message.gridSpacing;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPattern_BlendGrid>, I>>(
    base?: I,
  ): TestPattern_BlendGrid {
    return TestPattern_BlendGrid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPattern_BlendGrid>, I>>(
    object: I,
  ): TestPattern_BlendGrid {
    const message = createBaseTestPattern_BlendGrid();
    message.drawGrid = object.drawGrid ?? false;
    message.drawCircles = object.drawCircles ?? false;
    message.drawLines = object.drawLines ?? false;
    message.invertColors = object.invertColors ?? false;
    message.gridSpacing = object.gridSpacing ?? 0;
    return message;
  },
};

function createBaseTestPattern_CustomColor(): TestPattern_CustomColor {
  return { color: undefined };
}

export const TestPattern_CustomColor = {
  encode(
    message: TestPattern_CustomColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPattern_CustomColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_CustomColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): TestPattern_CustomColor {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
    };
  },

  toJSON(message: TestPattern_CustomColor): unknown {
    const obj: any = {};
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPattern_CustomColor>, I>>(
    base?: I,
  ): TestPattern_CustomColor {
    return TestPattern_CustomColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPattern_CustomColor>, I>>(
    object: I,
  ): TestPattern_CustomColor {
    const message = createBaseTestPattern_CustomColor();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    return message;
  },
};

function createBaseTestPattern_IntensityColor(): TestPattern_IntensityColor {
  return { intensity: 0 };
}

export const TestPattern_IntensityColor = {
  encode(
    message: TestPattern_IntensityColor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.intensity !== 0) {
      writer.uint32(9).double(message.intensity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPattern_IntensityColor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPattern_IntensityColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.intensity = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPattern_IntensityColor {
    return {
      intensity: isSet(object.intensity)
        ? globalThis.Number(object.intensity)
        : 0,
    };
  },

  toJSON(message: TestPattern_IntensityColor): unknown {
    const obj: any = {};
    if (message.intensity !== 0) {
      obj.intensity = message.intensity;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPattern_IntensityColor>, I>>(
    base?: I,
  ): TestPattern_IntensityColor {
    return TestPattern_IntensityColor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPattern_IntensityColor>, I>>(
    object: I,
  ): TestPattern_IntensityColor {
    const message = createBaseTestPattern_IntensityColor();
    message.intensity = object.intensity ?? 0;
    return message;
  },
};

function createBaseTestPatternDefinition(): TestPatternDefinition {
  return {
    uuid: undefined,
    nameLocalizationKey: '',
    properties: [],
    showDelaySettings: false,
    isDefault: false,
  };
}

export const TestPatternDefinition = {
  encode(
    message: TestPatternDefinition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.nameLocalizationKey !== '') {
      writer.uint32(18).string(message.nameLocalizationKey);
    }
    for (const v of message.properties) {
      TestPatternDefinition_Property.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.showDelaySettings !== false) {
      writer.uint32(32).bool(message.showDelaySettings);
    }
    if (message.isDefault !== false) {
      writer.uint32(40).bool(message.isDefault);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition();
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

          message.nameLocalizationKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.properties.push(
            TestPatternDefinition_Property.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.showDelaySettings = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isDefault = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      nameLocalizationKey: isSet(object.nameLocalizationKey)
        ? globalThis.String(object.nameLocalizationKey)
        : '',
      properties: globalThis.Array.isArray(object?.properties)
        ? object.properties.map((e: any) =>
            TestPatternDefinition_Property.fromJSON(e),
          )
        : [],
      showDelaySettings: isSet(object.showDelaySettings)
        ? globalThis.Boolean(object.showDelaySettings)
        : false,
      isDefault: isSet(object.isDefault)
        ? globalThis.Boolean(object.isDefault)
        : false,
    };
  },

  toJSON(message: TestPatternDefinition): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.nameLocalizationKey !== '') {
      obj.nameLocalizationKey = message.nameLocalizationKey;
    }
    if (message.properties?.length) {
      obj.properties = message.properties.map((e) =>
        TestPatternDefinition_Property.toJSON(e),
      );
    }
    if (message.showDelaySettings !== false) {
      obj.showDelaySettings = message.showDelaySettings;
    }
    if (message.isDefault !== false) {
      obj.isDefault = message.isDefault;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition>, I>>(
    base?: I,
  ): TestPatternDefinition {
    return TestPatternDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternDefinition>, I>>(
    object: I,
  ): TestPatternDefinition {
    const message = createBaseTestPatternDefinition();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.nameLocalizationKey = object.nameLocalizationKey ?? '';
    message.properties =
      object.properties?.map((e) =>
        TestPatternDefinition_Property.fromPartial(e),
      ) || [];
    message.showDelaySettings = object.showDelaySettings ?? false;
    message.isDefault = object.isDefault ?? false;
    return message;
  },
};

function createBaseTestPatternDefinition_ColorProperty(): TestPatternDefinition_ColorProperty {
  return { value: undefined, allowAlpha: false, defaultColors: [] };
}

export const TestPatternDefinition_ColorProperty = {
  encode(
    message: TestPatternDefinition_ColorProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      Color.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowAlpha !== false) {
      writer.uint32(16).bool(message.allowAlpha);
    }
    for (const v of message.defaultColors) {
      Color.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_ColorProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_ColorProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowAlpha = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.defaultColors.push(Color.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_ColorProperty {
    return {
      value: isSet(object.value) ? Color.fromJSON(object.value) : undefined,
      allowAlpha: isSet(object.allowAlpha)
        ? globalThis.Boolean(object.allowAlpha)
        : false,
      defaultColors: globalThis.Array.isArray(object?.defaultColors)
        ? object.defaultColors.map((e: any) => Color.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestPatternDefinition_ColorProperty): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = Color.toJSON(message.value);
    }
    if (message.allowAlpha !== false) {
      obj.allowAlpha = message.allowAlpha;
    }
    if (message.defaultColors?.length) {
      obj.defaultColors = message.defaultColors.map((e) => Color.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_ColorProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_ColorProperty {
    return TestPatternDefinition_ColorProperty.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_ColorProperty>, I>,
  >(object: I): TestPatternDefinition_ColorProperty {
    const message = createBaseTestPatternDefinition_ColorProperty();
    message.value =
      object.value !== undefined && object.value !== null
        ? Color.fromPartial(object.value)
        : undefined;
    message.allowAlpha = object.allowAlpha ?? false;
    message.defaultColors =
      object.defaultColors?.map((e) => Color.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestPatternDefinition_DoubleProperty(): TestPatternDefinition_DoubleProperty {
  return { value: 0, min: 0, max: 0, step: 0, units: '', viewType: 0 };
}

export const TestPatternDefinition_DoubleProperty = {
  encode(
    message: TestPatternDefinition_DoubleProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.min !== 0) {
      writer.uint32(17).double(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(25).double(message.max);
    }
    if (message.step !== 0) {
      writer.uint32(33).double(message.step);
    }
    if (message.units !== '') {
      writer.uint32(42).string(message.units);
    }
    if (message.viewType !== 0) {
      writer.uint32(48).int32(message.viewType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_DoubleProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_DoubleProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.min = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.max = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.step = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.units = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.viewType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_DoubleProperty {
    return {
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
      units: isSet(object.units) ? globalThis.String(object.units) : '',
      viewType: isSet(object.viewType)
        ? testPatternDefinition_DoubleProperty_ViewTypeFromJSON(object.viewType)
        : 0,
    };
  },

  toJSON(message: TestPatternDefinition_DoubleProperty): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = message.value;
    }
    if (message.min !== 0) {
      obj.min = message.min;
    }
    if (message.max !== 0) {
      obj.max = message.max;
    }
    if (message.step !== 0) {
      obj.step = message.step;
    }
    if (message.units !== '') {
      obj.units = message.units;
    }
    if (message.viewType !== 0) {
      obj.viewType = testPatternDefinition_DoubleProperty_ViewTypeToJSON(
        message.viewType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_DoubleProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_DoubleProperty {
    return TestPatternDefinition_DoubleProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_DoubleProperty>, I>,
  >(object: I): TestPatternDefinition_DoubleProperty {
    const message = createBaseTestPatternDefinition_DoubleProperty();
    message.value = object.value ?? 0;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.step = object.step ?? 0;
    message.units = object.units ?? '';
    message.viewType = object.viewType ?? 0;
    return message;
  },
};

function createBaseTestPatternDefinition_IntProperty(): TestPatternDefinition_IntProperty {
  return { value: 0, min: 0, max: 0, units: '' };
}

export const TestPatternDefinition_IntProperty = {
  encode(
    message: TestPatternDefinition_IntProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    if (message.min !== 0) {
      writer.uint32(16).int32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(24).int32(message.max);
    }
    if (message.units !== '') {
      writer.uint32(42).string(message.units);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_IntProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_IntProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.min = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.units = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_IntProperty {
    return {
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
      units: isSet(object.units) ? globalThis.String(object.units) : '',
    };
  },

  toJSON(message: TestPatternDefinition_IntProperty): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    if (message.units !== '') {
      obj.units = message.units;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_IntProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_IntProperty {
    return TestPatternDefinition_IntProperty.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_IntProperty>, I>,
  >(object: I): TestPatternDefinition_IntProperty {
    const message = createBaseTestPatternDefinition_IntProperty();
    message.value = object.value ?? 0;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.units = object.units ?? '';
    return message;
  },
};

function createBaseTestPatternDefinition_BoolProperty(): TestPatternDefinition_BoolProperty {
  return { value: false, dependentProperties: [] };
}

export const TestPatternDefinition_BoolProperty = {
  encode(
    message: TestPatternDefinition_BoolProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== false) {
      writer.uint32(8).bool(message.value);
    }
    for (const v of message.dependentProperties) {
      TestPatternDefinition_Property.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_BoolProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_BoolProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dependentProperties.push(
            TestPatternDefinition_Property.decode(reader, reader.uint32()),
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

  fromJSON(object: any): TestPatternDefinition_BoolProperty {
    return {
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
      dependentProperties: globalThis.Array.isArray(object?.dependentProperties)
        ? object.dependentProperties.map((e: any) =>
            TestPatternDefinition_Property.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TestPatternDefinition_BoolProperty): unknown {
    const obj: any = {};
    if (message.value !== false) {
      obj.value = message.value;
    }
    if (message.dependentProperties?.length) {
      obj.dependentProperties = message.dependentProperties.map((e) =>
        TestPatternDefinition_Property.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_BoolProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_BoolProperty {
    return TestPatternDefinition_BoolProperty.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_BoolProperty>, I>,
  >(object: I): TestPatternDefinition_BoolProperty {
    const message = createBaseTestPatternDefinition_BoolProperty();
    message.value = object.value ?? false;
    message.dependentProperties =
      object.dependentProperties?.map((e) =>
        TestPatternDefinition_Property.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseTestPatternDefinition_StringProperty(): TestPatternDefinition_StringProperty {
  return { value: '', minChars: 0, maxChars: 0 };
}

export const TestPatternDefinition_StringProperty = {
  encode(
    message: TestPatternDefinition_StringProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    if (message.minChars !== 0) {
      writer.uint32(16).int32(message.minChars);
    }
    if (message.maxChars !== 0) {
      writer.uint32(24).int32(message.maxChars);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_StringProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_StringProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minChars = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxChars = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_StringProperty {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : '',
      minChars: isSet(object.minChars) ? globalThis.Number(object.minChars) : 0,
      maxChars: isSet(object.maxChars) ? globalThis.Number(object.maxChars) : 0,
    };
  },

  toJSON(message: TestPatternDefinition_StringProperty): unknown {
    const obj: any = {};
    if (message.value !== '') {
      obj.value = message.value;
    }
    if (message.minChars !== 0) {
      obj.minChars = Math.round(message.minChars);
    }
    if (message.maxChars !== 0) {
      obj.maxChars = Math.round(message.maxChars);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_StringProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_StringProperty {
    return TestPatternDefinition_StringProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_StringProperty>, I>,
  >(object: I): TestPatternDefinition_StringProperty {
    const message = createBaseTestPatternDefinition_StringProperty();
    message.value = object.value ?? '';
    message.minChars = object.minChars ?? 0;
    message.maxChars = object.maxChars ?? 0;
    return message;
  },
};

function createBaseTestPatternDefinition_FontProperty(): TestPatternDefinition_FontProperty {
  return { font: undefined };
}

export const TestPatternDefinition_FontProperty = {
  encode(
    message: TestPatternDefinition_FontProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.font !== undefined) {
      Font.encode(message.font, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_FontProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_FontProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.font = Font.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_FontProperty {
    return {
      font: isSet(object.font) ? Font.fromJSON(object.font) : undefined,
    };
  },

  toJSON(message: TestPatternDefinition_FontProperty): unknown {
    const obj: any = {};
    if (message.font !== undefined) {
      obj.font = Font.toJSON(message.font);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_FontProperty>, I>>(
    base?: I,
  ): TestPatternDefinition_FontProperty {
    return TestPatternDefinition_FontProperty.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_FontProperty>, I>,
  >(object: I): TestPatternDefinition_FontProperty {
    const message = createBaseTestPatternDefinition_FontProperty();
    message.font =
      object.font !== undefined && object.font !== null
        ? Font.fromPartial(object.font)
        : undefined;
    return message;
  },
};

function createBaseTestPatternDefinition_SelectorProperty(): TestPatternDefinition_SelectorProperty {
  return { selectedIndex: 0, valueLocalizationKeys: [] };
}

export const TestPatternDefinition_SelectorProperty = {
  encode(
    message: TestPatternDefinition_SelectorProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selectedIndex !== 0) {
      writer.uint32(8).int32(message.selectedIndex);
    }
    for (const v of message.valueLocalizationKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_SelectorProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_SelectorProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.selectedIndex = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valueLocalizationKeys.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDefinition_SelectorProperty {
    return {
      selectedIndex: isSet(object.selectedIndex)
        ? globalThis.Number(object.selectedIndex)
        : 0,
      valueLocalizationKeys: globalThis.Array.isArray(
        object?.valueLocalizationKeys,
      )
        ? object.valueLocalizationKeys.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: TestPatternDefinition_SelectorProperty): unknown {
    const obj: any = {};
    if (message.selectedIndex !== 0) {
      obj.selectedIndex = Math.round(message.selectedIndex);
    }
    if (message.valueLocalizationKeys?.length) {
      obj.valueLocalizationKeys = message.valueLocalizationKeys;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TestPatternDefinition_SelectorProperty>, I>,
  >(base?: I): TestPatternDefinition_SelectorProperty {
    return TestPatternDefinition_SelectorProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDefinition_SelectorProperty>, I>,
  >(object: I): TestPatternDefinition_SelectorProperty {
    const message = createBaseTestPatternDefinition_SelectorProperty();
    message.selectedIndex = object.selectedIndex ?? 0;
    message.valueLocalizationKeys =
      object.valueLocalizationKeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseTestPatternDefinition_Property(): TestPatternDefinition_Property {
  return {
    nameLocalizationKey: '',
    colorProperty: undefined,
    doubleProperty: undefined,
    intProperty: undefined,
    boolProperty: undefined,
    stringProperty: undefined,
    fontProperty: undefined,
    selectorProperty: undefined,
  };
}

export const TestPatternDefinition_Property = {
  encode(
    message: TestPatternDefinition_Property,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nameLocalizationKey !== '') {
      writer.uint32(10).string(message.nameLocalizationKey);
    }
    if (message.colorProperty !== undefined) {
      TestPatternDefinition_ColorProperty.encode(
        message.colorProperty,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.doubleProperty !== undefined) {
      TestPatternDefinition_DoubleProperty.encode(
        message.doubleProperty,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.intProperty !== undefined) {
      TestPatternDefinition_IntProperty.encode(
        message.intProperty,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.boolProperty !== undefined) {
      TestPatternDefinition_BoolProperty.encode(
        message.boolProperty,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.stringProperty !== undefined) {
      TestPatternDefinition_StringProperty.encode(
        message.stringProperty,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.fontProperty !== undefined) {
      TestPatternDefinition_FontProperty.encode(
        message.fontProperty,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.selectorProperty !== undefined) {
      TestPatternDefinition_SelectorProperty.encode(
        message.selectorProperty,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDefinition_Property {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDefinition_Property();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nameLocalizationKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.colorProperty = TestPatternDefinition_ColorProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.doubleProperty = TestPatternDefinition_DoubleProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.intProperty = TestPatternDefinition_IntProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.boolProperty = TestPatternDefinition_BoolProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stringProperty = TestPatternDefinition_StringProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.fontProperty = TestPatternDefinition_FontProperty.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.selectorProperty =
            TestPatternDefinition_SelectorProperty.decode(
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

  fromJSON(object: any): TestPatternDefinition_Property {
    return {
      nameLocalizationKey: isSet(object.nameLocalizationKey)
        ? globalThis.String(object.nameLocalizationKey)
        : '',
      colorProperty: isSet(object.colorProperty)
        ? TestPatternDefinition_ColorProperty.fromJSON(object.colorProperty)
        : undefined,
      doubleProperty: isSet(object.doubleProperty)
        ? TestPatternDefinition_DoubleProperty.fromJSON(object.doubleProperty)
        : undefined,
      intProperty: isSet(object.intProperty)
        ? TestPatternDefinition_IntProperty.fromJSON(object.intProperty)
        : undefined,
      boolProperty: isSet(object.boolProperty)
        ? TestPatternDefinition_BoolProperty.fromJSON(object.boolProperty)
        : undefined,
      stringProperty: isSet(object.stringProperty)
        ? TestPatternDefinition_StringProperty.fromJSON(object.stringProperty)
        : undefined,
      fontProperty: isSet(object.fontProperty)
        ? TestPatternDefinition_FontProperty.fromJSON(object.fontProperty)
        : undefined,
      selectorProperty: isSet(object.selectorProperty)
        ? TestPatternDefinition_SelectorProperty.fromJSON(
            object.selectorProperty,
          )
        : undefined,
    };
  },

  toJSON(message: TestPatternDefinition_Property): unknown {
    const obj: any = {};
    if (message.nameLocalizationKey !== '') {
      obj.nameLocalizationKey = message.nameLocalizationKey;
    }
    if (message.colorProperty !== undefined) {
      obj.colorProperty = TestPatternDefinition_ColorProperty.toJSON(
        message.colorProperty,
      );
    }
    if (message.doubleProperty !== undefined) {
      obj.doubleProperty = TestPatternDefinition_DoubleProperty.toJSON(
        message.doubleProperty,
      );
    }
    if (message.intProperty !== undefined) {
      obj.intProperty = TestPatternDefinition_IntProperty.toJSON(
        message.intProperty,
      );
    }
    if (message.boolProperty !== undefined) {
      obj.boolProperty = TestPatternDefinition_BoolProperty.toJSON(
        message.boolProperty,
      );
    }
    if (message.stringProperty !== undefined) {
      obj.stringProperty = TestPatternDefinition_StringProperty.toJSON(
        message.stringProperty,
      );
    }
    if (message.fontProperty !== undefined) {
      obj.fontProperty = TestPatternDefinition_FontProperty.toJSON(
        message.fontProperty,
      );
    }
    if (message.selectorProperty !== undefined) {
      obj.selectorProperty = TestPatternDefinition_SelectorProperty.toJSON(
        message.selectorProperty,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDefinition_Property>, I>>(
    base?: I,
  ): TestPatternDefinition_Property {
    return TestPatternDefinition_Property.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternDefinition_Property>, I>>(
    object: I,
  ): TestPatternDefinition_Property {
    const message = createBaseTestPatternDefinition_Property();
    message.nameLocalizationKey = object.nameLocalizationKey ?? '';
    message.colorProperty =
      object.colorProperty !== undefined && object.colorProperty !== null
        ? TestPatternDefinition_ColorProperty.fromPartial(object.colorProperty)
        : undefined;
    message.doubleProperty =
      object.doubleProperty !== undefined && object.doubleProperty !== null
        ? TestPatternDefinition_DoubleProperty.fromPartial(
            object.doubleProperty,
          )
        : undefined;
    message.intProperty =
      object.intProperty !== undefined && object.intProperty !== null
        ? TestPatternDefinition_IntProperty.fromPartial(object.intProperty)
        : undefined;
    message.boolProperty =
      object.boolProperty !== undefined && object.boolProperty !== null
        ? TestPatternDefinition_BoolProperty.fromPartial(object.boolProperty)
        : undefined;
    message.stringProperty =
      object.stringProperty !== undefined && object.stringProperty !== null
        ? TestPatternDefinition_StringProperty.fromPartial(
            object.stringProperty,
          )
        : undefined;
    message.fontProperty =
      object.fontProperty !== undefined && object.fontProperty !== null
        ? TestPatternDefinition_FontProperty.fromPartial(object.fontProperty)
        : undefined;
    message.selectorProperty =
      object.selectorProperty !== undefined && object.selectorProperty !== null
        ? TestPatternDefinition_SelectorProperty.fromPartial(
            object.selectorProperty,
          )
        : undefined;
    return message;
  },
};

function createBaseTestPatternRenderSettings(): TestPatternRenderSettings {
  return {
    pattern: undefined,
    screenName: '',
    outputs: [],
    logoType: 0,
    logoFile: '',
    renderWidth: 0,
    renderHeight: 0,
    enableAudio: false,
  };
}

export const TestPatternRenderSettings = {
  encode(
    message: TestPatternRenderSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pattern !== undefined) {
      TestPatternDefinition.encode(
        message.pattern,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.screenName !== '') {
      writer.uint32(26).string(message.screenName);
    }
    for (const v of message.outputs) {
      TestPatternRenderSettings_Output.encode(
        v!,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.logoType !== 0) {
      writer.uint32(40).int32(message.logoType);
    }
    if (message.logoFile !== '') {
      writer.uint32(50).string(message.logoFile);
    }
    if (message.renderWidth !== 0) {
      writer.uint32(56).int32(message.renderWidth);
    }
    if (message.renderHeight !== 0) {
      writer.uint32(64).int32(message.renderHeight);
    }
    if (message.enableAudio !== false) {
      writer.uint32(72).bool(message.enableAudio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternRenderSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRenderSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pattern = TestPatternDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.screenName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.outputs.push(
            TestPatternRenderSettings_Output.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.logoType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.logoFile = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.renderWidth = reader.int32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.renderHeight = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.enableAudio = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternRenderSettings {
    return {
      pattern: isSet(object.pattern)
        ? TestPatternDefinition.fromJSON(object.pattern)
        : undefined,
      screenName: isSet(object.screenName)
        ? globalThis.String(object.screenName)
        : '',
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) =>
            TestPatternRenderSettings_Output.fromJSON(e),
          )
        : [],
      logoType: isSet(object.logoType) ? logoTypeFromJSON(object.logoType) : 0,
      logoFile: isSet(object.logoFile)
        ? globalThis.String(object.logoFile)
        : '',
      renderWidth: isSet(object.renderWidth)
        ? globalThis.Number(object.renderWidth)
        : 0,
      renderHeight: isSet(object.renderHeight)
        ? globalThis.Number(object.renderHeight)
        : 0,
      enableAudio: isSet(object.enableAudio)
        ? globalThis.Boolean(object.enableAudio)
        : false,
    };
  },

  toJSON(message: TestPatternRenderSettings): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = TestPatternDefinition.toJSON(message.pattern);
    }
    if (message.screenName !== '') {
      obj.screenName = message.screenName;
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) =>
        TestPatternRenderSettings_Output.toJSON(e),
      );
    }
    if (message.logoType !== 0) {
      obj.logoType = logoTypeToJSON(message.logoType);
    }
    if (message.logoFile !== '') {
      obj.logoFile = message.logoFile;
    }
    if (message.renderWidth !== 0) {
      obj.renderWidth = Math.round(message.renderWidth);
    }
    if (message.renderHeight !== 0) {
      obj.renderHeight = Math.round(message.renderHeight);
    }
    if (message.enableAudio !== false) {
      obj.enableAudio = message.enableAudio;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRenderSettings>, I>>(
    base?: I,
  ): TestPatternRenderSettings {
    return TestPatternRenderSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternRenderSettings>, I>>(
    object: I,
  ): TestPatternRenderSettings {
    const message = createBaseTestPatternRenderSettings();
    message.pattern =
      object.pattern !== undefined && object.pattern !== null
        ? TestPatternDefinition.fromPartial(object.pattern)
        : undefined;
    message.screenName = object.screenName ?? '';
    message.outputs =
      object.outputs?.map((e) =>
        TestPatternRenderSettings_Output.fromPartial(e),
      ) || [];
    message.logoType = object.logoType ?? 0;
    message.logoFile = object.logoFile ?? '';
    message.renderWidth = object.renderWidth ?? 0;
    message.renderHeight = object.renderHeight ?? 0;
    message.enableAudio = object.enableAudio ?? false;
    return message;
  },
};

function createBaseTestPatternRenderSettings_Output(): TestPatternRenderSettings_Output {
  return { x: 0, y: 0, width: 0, height: 0, name: '', frameRate: 0 };
}

export const TestPatternRenderSettings_Output = {
  encode(
    message: TestPatternRenderSettings_Output,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    if (message.width !== 0) {
      writer.uint32(24).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    if (message.frameRate !== 0) {
      writer.uint32(49).double(message.frameRate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternRenderSettings_Output {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRenderSettings_Output();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.height = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.frameRate = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternRenderSettings_Output {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      frameRate: isSet(object.frameRate)
        ? globalThis.Number(object.frameRate)
        : 0,
    };
  },

  toJSON(message: TestPatternRenderSettings_Output): unknown {
    const obj: any = {};
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRenderSettings_Output>, I>>(
    base?: I,
  ): TestPatternRenderSettings_Output {
    return TestPatternRenderSettings_Output.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternRenderSettings_Output>, I>,
  >(object: I): TestPatternRenderSettings_Output {
    const message = createBaseTestPatternRenderSettings_Output();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.name = object.name ?? '';
    message.frameRate = object.frameRate ?? 0;
    return message;
  },
};

function createBaseTestPatternState(): TestPatternState {
  return {
    pattern: undefined,
    showPattern: false,
    displayLocation: 0,
    specificScreen: undefined,
    identifyScreens: false,
    logoType: 0,
    userLogoLocation: undefined,
  };
}

export const TestPatternState = {
  encode(
    message: TestPatternState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pattern !== undefined) {
      TestPatternDefinition.encode(
        message.pattern,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.showPattern !== false) {
      writer.uint32(16).bool(message.showPattern);
    }
    if (message.displayLocation !== 0) {
      writer.uint32(24).int32(message.displayLocation);
    }
    if (message.specificScreen !== undefined) {
      UUID.encode(message.specificScreen, writer.uint32(34).fork()).ldelim();
    }
    if (message.identifyScreens !== false) {
      writer.uint32(40).bool(message.identifyScreens);
    }
    if (message.logoType !== 0) {
      writer.uint32(48).int32(message.logoType);
    }
    if (message.userLogoLocation !== undefined) {
      URL.encode(message.userLogoLocation, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pattern = TestPatternDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.showPattern = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.displayLocation = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.specificScreen = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.identifyScreens = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.logoType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userLogoLocation = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternState {
    return {
      pattern: isSet(object.pattern)
        ? TestPatternDefinition.fromJSON(object.pattern)
        : undefined,
      showPattern: isSet(object.showPattern)
        ? globalThis.Boolean(object.showPattern)
        : false,
      displayLocation: isSet(object.displayLocation)
        ? testPatternState_DisplayLocationFromJSON(object.displayLocation)
        : 0,
      specificScreen: isSet(object.specificScreen)
        ? UUID.fromJSON(object.specificScreen)
        : undefined,
      identifyScreens: isSet(object.identifyScreens)
        ? globalThis.Boolean(object.identifyScreens)
        : false,
      logoType: isSet(object.logoType) ? logoTypeFromJSON(object.logoType) : 0,
      userLogoLocation: isSet(object.userLogoLocation)
        ? URL.fromJSON(object.userLogoLocation)
        : undefined,
    };
  },

  toJSON(message: TestPatternState): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = TestPatternDefinition.toJSON(message.pattern);
    }
    if (message.showPattern !== false) {
      obj.showPattern = message.showPattern;
    }
    if (message.displayLocation !== 0) {
      obj.displayLocation = testPatternState_DisplayLocationToJSON(
        message.displayLocation,
      );
    }
    if (message.specificScreen !== undefined) {
      obj.specificScreen = UUID.toJSON(message.specificScreen);
    }
    if (message.identifyScreens !== false) {
      obj.identifyScreens = message.identifyScreens;
    }
    if (message.logoType !== 0) {
      obj.logoType = logoTypeToJSON(message.logoType);
    }
    if (message.userLogoLocation !== undefined) {
      obj.userLogoLocation = URL.toJSON(message.userLogoLocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternState>, I>>(
    base?: I,
  ): TestPatternState {
    return TestPatternState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternState>, I>>(
    object: I,
  ): TestPatternState {
    const message = createBaseTestPatternState();
    message.pattern =
      object.pattern !== undefined && object.pattern !== null
        ? TestPatternDefinition.fromPartial(object.pattern)
        : undefined;
    message.showPattern = object.showPattern ?? false;
    message.displayLocation = object.displayLocation ?? 0;
    message.specificScreen =
      object.specificScreen !== undefined && object.specificScreen !== null
        ? UUID.fromPartial(object.specificScreen)
        : undefined;
    message.identifyScreens = object.identifyScreens ?? false;
    message.logoType = object.logoType ?? 0;
    message.userLogoLocation =
      object.userLogoLocation !== undefined && object.userLogoLocation !== null
        ? URL.fromPartial(object.userLogoLocation)
        : undefined;
    return message;
  },
};

function createBaseTestPatternDocument(): TestPatternDocument {
  return { state: undefined, patterns: [] };
}

export const TestPatternDocument = {
  encode(
    message: TestPatternDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== undefined) {
      TestPatternDocument_TestPatternStateData.encode(
        message.state,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.patterns) {
      TestPatternDocument_TestPatternData.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = TestPatternDocument_TestPatternStateData.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.patterns.push(
            TestPatternDocument_TestPatternData.decode(reader, reader.uint32()),
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

  fromJSON(object: any): TestPatternDocument {
    return {
      state: isSet(object.state)
        ? TestPatternDocument_TestPatternStateData.fromJSON(object.state)
        : undefined,
      patterns: globalThis.Array.isArray(object?.patterns)
        ? object.patterns.map((e: any) =>
            TestPatternDocument_TestPatternData.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TestPatternDocument): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = TestPatternDocument_TestPatternStateData.toJSON(
        message.state,
      );
    }
    if (message.patterns?.length) {
      obj.patterns = message.patterns.map((e) =>
        TestPatternDocument_TestPatternData.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDocument>, I>>(
    base?: I,
  ): TestPatternDocument {
    return TestPatternDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternDocument>, I>>(
    object: I,
  ): TestPatternDocument {
    const message = createBaseTestPatternDocument();
    message.state =
      object.state !== undefined && object.state !== null
        ? TestPatternDocument_TestPatternStateData.fromPartial(object.state)
        : undefined;
    message.patterns =
      object.patterns?.map((e) =>
        TestPatternDocument_TestPatternData.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternStateData(): TestPatternDocument_TestPatternStateData {
  return {
    testPatternId: undefined,
    testPatternNameLocalizationKey: '',
    displayLocation: 0,
    specificScreen: undefined,
    identifyScreens: false,
    logoType: 0,
    userLogoLocation: undefined,
  };
}

export const TestPatternDocument_TestPatternStateData = {
  encode(
    message: TestPatternDocument_TestPatternStateData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.testPatternId !== undefined) {
      UUID.encode(message.testPatternId, writer.uint32(10).fork()).ldelim();
    }
    if (message.testPatternNameLocalizationKey !== '') {
      writer.uint32(18).string(message.testPatternNameLocalizationKey);
    }
    if (message.displayLocation !== 0) {
      writer.uint32(24).int32(message.displayLocation);
    }
    if (message.specificScreen !== undefined) {
      UUID.encode(message.specificScreen, writer.uint32(34).fork()).ldelim();
    }
    if (message.identifyScreens !== false) {
      writer.uint32(40).bool(message.identifyScreens);
    }
    if (message.logoType !== 0) {
      writer.uint32(48).int32(message.logoType);
    }
    if (message.userLogoLocation !== undefined) {
      URL.encode(message.userLogoLocation, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternStateData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDocument_TestPatternStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testPatternId = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.testPatternNameLocalizationKey = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.displayLocation = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.specificScreen = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.identifyScreens = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.logoType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userLogoLocation = URL.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternStateData {
    return {
      testPatternId: isSet(object.testPatternId)
        ? UUID.fromJSON(object.testPatternId)
        : undefined,
      testPatternNameLocalizationKey: isSet(
        object.testPatternNameLocalizationKey,
      )
        ? globalThis.String(object.testPatternNameLocalizationKey)
        : '',
      displayLocation: isSet(object.displayLocation)
        ? testPatternState_DisplayLocationFromJSON(object.displayLocation)
        : 0,
      specificScreen: isSet(object.specificScreen)
        ? UUID.fromJSON(object.specificScreen)
        : undefined,
      identifyScreens: isSet(object.identifyScreens)
        ? globalThis.Boolean(object.identifyScreens)
        : false,
      logoType: isSet(object.logoType) ? logoTypeFromJSON(object.logoType) : 0,
      userLogoLocation: isSet(object.userLogoLocation)
        ? URL.fromJSON(object.userLogoLocation)
        : undefined,
    };
  },

  toJSON(message: TestPatternDocument_TestPatternStateData): unknown {
    const obj: any = {};
    if (message.testPatternId !== undefined) {
      obj.testPatternId = UUID.toJSON(message.testPatternId);
    }
    if (message.testPatternNameLocalizationKey !== '') {
      obj.testPatternNameLocalizationKey =
        message.testPatternNameLocalizationKey;
    }
    if (message.displayLocation !== 0) {
      obj.displayLocation = testPatternState_DisplayLocationToJSON(
        message.displayLocation,
      );
    }
    if (message.specificScreen !== undefined) {
      obj.specificScreen = UUID.toJSON(message.specificScreen);
    }
    if (message.identifyScreens !== false) {
      obj.identifyScreens = message.identifyScreens;
    }
    if (message.logoType !== 0) {
      obj.logoType = logoTypeToJSON(message.logoType);
    }
    if (message.userLogoLocation !== undefined) {
      obj.userLogoLocation = URL.toJSON(message.userLogoLocation);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<TestPatternDocument_TestPatternStateData>, I>,
  >(base?: I): TestPatternDocument_TestPatternStateData {
    return TestPatternDocument_TestPatternStateData.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDocument_TestPatternStateData>, I>,
  >(object: I): TestPatternDocument_TestPatternStateData {
    const message = createBaseTestPatternDocument_TestPatternStateData();
    message.testPatternId =
      object.testPatternId !== undefined && object.testPatternId !== null
        ? UUID.fromPartial(object.testPatternId)
        : undefined;
    message.testPatternNameLocalizationKey =
      object.testPatternNameLocalizationKey ?? '';
    message.displayLocation = object.displayLocation ?? 0;
    message.specificScreen =
      object.specificScreen !== undefined && object.specificScreen !== null
        ? UUID.fromPartial(object.specificScreen)
        : undefined;
    message.identifyScreens = object.identifyScreens ?? false;
    message.logoType = object.logoType ?? 0;
    message.userLogoLocation =
      object.userLogoLocation !== undefined && object.userLogoLocation !== null
        ? URL.fromPartial(object.userLogoLocation)
        : undefined;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData(): TestPatternDocument_TestPatternData {
  return { uuid: undefined, nameLocalizationKey: '', properties: [] };
}

export const TestPatternDocument_TestPatternData = {
  encode(
    message: TestPatternDocument_TestPatternData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.nameLocalizationKey !== '') {
      writer.uint32(18).string(message.nameLocalizationKey);
    }
    for (const v of message.properties) {
      TestPatternDocument_TestPatternData_Property.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDocument_TestPatternData();
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

          message.nameLocalizationKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.properties.push(
            TestPatternDocument_TestPatternData_Property.decode(
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

  fromJSON(object: any): TestPatternDocument_TestPatternData {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      nameLocalizationKey: isSet(object.nameLocalizationKey)
        ? globalThis.String(object.nameLocalizationKey)
        : '',
      properties: globalThis.Array.isArray(object?.properties)
        ? object.properties.map((e: any) =>
            TestPatternDocument_TestPatternData_Property.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.nameLocalizationKey !== '') {
      obj.nameLocalizationKey = message.nameLocalizationKey;
    }
    if (message.properties?.length) {
      obj.properties = message.properties.map((e) =>
        TestPatternDocument_TestPatternData_Property.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternDocument_TestPatternData>, I>>(
    base?: I,
  ): TestPatternDocument_TestPatternData {
    return TestPatternDocument_TestPatternData.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<TestPatternDocument_TestPatternData>, I>,
  >(object: I): TestPatternDocument_TestPatternData {
    const message = createBaseTestPatternDocument_TestPatternData();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.nameLocalizationKey = object.nameLocalizationKey ?? '';
    message.properties =
      object.properties?.map((e) =>
        TestPatternDocument_TestPatternData_Property.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_ColorProperty(): TestPatternDocument_TestPatternData_ColorProperty {
  return { value: undefined };
}

export const TestPatternDocument_TestPatternData_ColorProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_ColorProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      Color.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_ColorProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_ColorProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_ColorProperty {
    return {
      value: isSet(object.value) ? Color.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData_ColorProperty): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = Color.toJSON(message.value);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_ColorProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_ColorProperty {
    return TestPatternDocument_TestPatternData_ColorProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_ColorProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_ColorProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_ColorProperty();
    message.value =
      object.value !== undefined && object.value !== null
        ? Color.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_DoubleProperty(): TestPatternDocument_TestPatternData_DoubleProperty {
  return { value: 0 };
}

export const TestPatternDocument_TestPatternData_DoubleProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_DoubleProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_DoubleProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_DoubleProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_DoubleProperty {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: TestPatternDocument_TestPatternData_DoubleProperty): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_DoubleProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_DoubleProperty {
    return TestPatternDocument_TestPatternData_DoubleProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_DoubleProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_DoubleProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_DoubleProperty();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_IntProperty(): TestPatternDocument_TestPatternData_IntProperty {
  return { value: 0 };
}

export const TestPatternDocument_TestPatternData_IntProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_IntProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_IntProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDocument_TestPatternData_IntProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_IntProperty {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: TestPatternDocument_TestPatternData_IntProperty): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_IntProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_IntProperty {
    return TestPatternDocument_TestPatternData_IntProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_IntProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_IntProperty {
    const message = createBaseTestPatternDocument_TestPatternData_IntProperty();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_BoolProperty(): TestPatternDocument_TestPatternData_BoolProperty {
  return { value: false, dependentProperties: [] };
}

export const TestPatternDocument_TestPatternData_BoolProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_BoolProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== false) {
      writer.uint32(8).bool(message.value);
    }
    for (const v of message.dependentProperties) {
      TestPatternDocument_TestPatternData_Property.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_BoolProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_BoolProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dependentProperties.push(
            TestPatternDocument_TestPatternData_Property.decode(
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

  fromJSON(object: any): TestPatternDocument_TestPatternData_BoolProperty {
    return {
      value: isSet(object.value) ? globalThis.Boolean(object.value) : false,
      dependentProperties: globalThis.Array.isArray(object?.dependentProperties)
        ? object.dependentProperties.map((e: any) =>
            TestPatternDocument_TestPatternData_Property.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData_BoolProperty): unknown {
    const obj: any = {};
    if (message.value !== false) {
      obj.value = message.value;
    }
    if (message.dependentProperties?.length) {
      obj.dependentProperties = message.dependentProperties.map((e) =>
        TestPatternDocument_TestPatternData_Property.toJSON(e),
      );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_BoolProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_BoolProperty {
    return TestPatternDocument_TestPatternData_BoolProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_BoolProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_BoolProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_BoolProperty();
    message.value = object.value ?? false;
    message.dependentProperties =
      object.dependentProperties?.map((e) =>
        TestPatternDocument_TestPatternData_Property.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_StringProperty(): TestPatternDocument_TestPatternData_StringProperty {
  return { value: '' };
}

export const TestPatternDocument_TestPatternData_StringProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_StringProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_StringProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_StringProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_StringProperty {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : '',
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData_StringProperty): unknown {
    const obj: any = {};
    if (message.value !== '') {
      obj.value = message.value;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_StringProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_StringProperty {
    return TestPatternDocument_TestPatternData_StringProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_StringProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_StringProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_StringProperty();
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_FontProperty(): TestPatternDocument_TestPatternData_FontProperty {
  return { value: undefined };
}

export const TestPatternDocument_TestPatternData_FontProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_FontProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== undefined) {
      Font.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_FontProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_FontProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = Font.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_FontProperty {
    return {
      value: isSet(object.value) ? Font.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData_FontProperty): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = Font.toJSON(message.value);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_FontProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_FontProperty {
    return TestPatternDocument_TestPatternData_FontProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_FontProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_FontProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_FontProperty();
    message.value =
      object.value !== undefined && object.value !== null
        ? Font.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_SelectorProperty(): TestPatternDocument_TestPatternData_SelectorProperty {
  return { value: 0 };
}

export const TestPatternDocument_TestPatternData_SelectorProperty = {
  encode(
    message: TestPatternDocument_TestPatternData_SelectorProperty,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_SelectorProperty {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseTestPatternDocument_TestPatternData_SelectorProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternDocument_TestPatternData_SelectorProperty {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(
    message: TestPatternDocument_TestPatternData_SelectorProperty,
  ): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_SelectorProperty>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_SelectorProperty {
    return TestPatternDocument_TestPatternData_SelectorProperty.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_SelectorProperty>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_SelectorProperty {
    const message =
      createBaseTestPatternDocument_TestPatternData_SelectorProperty();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseTestPatternDocument_TestPatternData_Property(): TestPatternDocument_TestPatternData_Property {
  return {
    nameLocalizationKey: '',
    colorProperty: undefined,
    doubleProperty: undefined,
    intProperty: undefined,
    boolProperty: undefined,
    stringProperty: undefined,
    fontProperty: undefined,
    selectorProperty: undefined,
  };
}

export const TestPatternDocument_TestPatternData_Property = {
  encode(
    message: TestPatternDocument_TestPatternData_Property,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nameLocalizationKey !== '') {
      writer.uint32(10).string(message.nameLocalizationKey);
    }
    if (message.colorProperty !== undefined) {
      TestPatternDocument_TestPatternData_ColorProperty.encode(
        message.colorProperty,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.doubleProperty !== undefined) {
      TestPatternDocument_TestPatternData_DoubleProperty.encode(
        message.doubleProperty,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.intProperty !== undefined) {
      TestPatternDocument_TestPatternData_IntProperty.encode(
        message.intProperty,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.boolProperty !== undefined) {
      TestPatternDocument_TestPatternData_BoolProperty.encode(
        message.boolProperty,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.stringProperty !== undefined) {
      TestPatternDocument_TestPatternData_StringProperty.encode(
        message.stringProperty,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.fontProperty !== undefined) {
      TestPatternDocument_TestPatternData_FontProperty.encode(
        message.fontProperty,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.selectorProperty !== undefined) {
      TestPatternDocument_TestPatternData_SelectorProperty.encode(
        message.selectorProperty,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TestPatternDocument_TestPatternData_Property {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternDocument_TestPatternData_Property();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nameLocalizationKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.colorProperty =
            TestPatternDocument_TestPatternData_ColorProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.doubleProperty =
            TestPatternDocument_TestPatternData_DoubleProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.intProperty =
            TestPatternDocument_TestPatternData_IntProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.boolProperty =
            TestPatternDocument_TestPatternData_BoolProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.stringProperty =
            TestPatternDocument_TestPatternData_StringProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fontProperty =
            TestPatternDocument_TestPatternData_FontProperty.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.selectorProperty =
            TestPatternDocument_TestPatternData_SelectorProperty.decode(
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

  fromJSON(object: any): TestPatternDocument_TestPatternData_Property {
    return {
      nameLocalizationKey: isSet(object.nameLocalizationKey)
        ? globalThis.String(object.nameLocalizationKey)
        : '',
      colorProperty: isSet(object.colorProperty)
        ? TestPatternDocument_TestPatternData_ColorProperty.fromJSON(
            object.colorProperty,
          )
        : undefined,
      doubleProperty: isSet(object.doubleProperty)
        ? TestPatternDocument_TestPatternData_DoubleProperty.fromJSON(
            object.doubleProperty,
          )
        : undefined,
      intProperty: isSet(object.intProperty)
        ? TestPatternDocument_TestPatternData_IntProperty.fromJSON(
            object.intProperty,
          )
        : undefined,
      boolProperty: isSet(object.boolProperty)
        ? TestPatternDocument_TestPatternData_BoolProperty.fromJSON(
            object.boolProperty,
          )
        : undefined,
      stringProperty: isSet(object.stringProperty)
        ? TestPatternDocument_TestPatternData_StringProperty.fromJSON(
            object.stringProperty,
          )
        : undefined,
      fontProperty: isSet(object.fontProperty)
        ? TestPatternDocument_TestPatternData_FontProperty.fromJSON(
            object.fontProperty,
          )
        : undefined,
      selectorProperty: isSet(object.selectorProperty)
        ? TestPatternDocument_TestPatternData_SelectorProperty.fromJSON(
            object.selectorProperty,
          )
        : undefined,
    };
  },

  toJSON(message: TestPatternDocument_TestPatternData_Property): unknown {
    const obj: any = {};
    if (message.nameLocalizationKey !== '') {
      obj.nameLocalizationKey = message.nameLocalizationKey;
    }
    if (message.colorProperty !== undefined) {
      obj.colorProperty =
        TestPatternDocument_TestPatternData_ColorProperty.toJSON(
          message.colorProperty,
        );
    }
    if (message.doubleProperty !== undefined) {
      obj.doubleProperty =
        TestPatternDocument_TestPatternData_DoubleProperty.toJSON(
          message.doubleProperty,
        );
    }
    if (message.intProperty !== undefined) {
      obj.intProperty = TestPatternDocument_TestPatternData_IntProperty.toJSON(
        message.intProperty,
      );
    }
    if (message.boolProperty !== undefined) {
      obj.boolProperty =
        TestPatternDocument_TestPatternData_BoolProperty.toJSON(
          message.boolProperty,
        );
    }
    if (message.stringProperty !== undefined) {
      obj.stringProperty =
        TestPatternDocument_TestPatternData_StringProperty.toJSON(
          message.stringProperty,
        );
    }
    if (message.fontProperty !== undefined) {
      obj.fontProperty =
        TestPatternDocument_TestPatternData_FontProperty.toJSON(
          message.fontProperty,
        );
    }
    if (message.selectorProperty !== undefined) {
      obj.selectorProperty =
        TestPatternDocument_TestPatternData_SelectorProperty.toJSON(
          message.selectorProperty,
        );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_Property>,
      I
    >,
  >(base?: I): TestPatternDocument_TestPatternData_Property {
    return TestPatternDocument_TestPatternData_Property.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<TestPatternDocument_TestPatternData_Property>,
      I
    >,
  >(object: I): TestPatternDocument_TestPatternData_Property {
    const message = createBaseTestPatternDocument_TestPatternData_Property();
    message.nameLocalizationKey = object.nameLocalizationKey ?? '';
    message.colorProperty =
      object.colorProperty !== undefined && object.colorProperty !== null
        ? TestPatternDocument_TestPatternData_ColorProperty.fromPartial(
            object.colorProperty,
          )
        : undefined;
    message.doubleProperty =
      object.doubleProperty !== undefined && object.doubleProperty !== null
        ? TestPatternDocument_TestPatternData_DoubleProperty.fromPartial(
            object.doubleProperty,
          )
        : undefined;
    message.intProperty =
      object.intProperty !== undefined && object.intProperty !== null
        ? TestPatternDocument_TestPatternData_IntProperty.fromPartial(
            object.intProperty,
          )
        : undefined;
    message.boolProperty =
      object.boolProperty !== undefined && object.boolProperty !== null
        ? TestPatternDocument_TestPatternData_BoolProperty.fromPartial(
            object.boolProperty,
          )
        : undefined;
    message.stringProperty =
      object.stringProperty !== undefined && object.stringProperty !== null
        ? TestPatternDocument_TestPatternData_StringProperty.fromPartial(
            object.stringProperty,
          )
        : undefined;
    message.fontProperty =
      object.fontProperty !== undefined && object.fontProperty !== null
        ? TestPatternDocument_TestPatternData_FontProperty.fromPartial(
            object.fontProperty,
          )
        : undefined;
    message.selectorProperty =
      object.selectorProperty !== undefined && object.selectorProperty !== null
        ? TestPatternDocument_TestPatternData_SelectorProperty.fromPartial(
            object.selectorProperty,
          )
        : undefined;
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
