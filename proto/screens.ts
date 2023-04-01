/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Color, UUID } from './basicTypes';
import { Graphics_Point, Graphics_Rect } from './graphicsData';

export const protobufPackage = 'rv.data';

export interface Screen {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  bounds: Graphics_Rect | undefined;
  aspectRatioLocked: boolean;
  outputBoundsAspectRatioLocked: boolean;
  cornerPinningEnabled: boolean;
  subscreenUnitRect: Graphics_Rect | undefined;
  rotation: number;
  gamma: number;
  blackLevel: number;
  blendedEdges: number;
  cornerValues: CornerValues | undefined;
  outputDisplay: OutputDisplay | undefined;
  colorEnabled: boolean;
  colorAdjustment: Screen_ColorAdjustment | undefined;
  blendCompensation: Screen_BlendCompensation | undefined;
}

export interface Screen_ColorAdjustment {
  gamma: number;
  blackLevel: number;
  redLevel: number;
  greenLevel: number;
  blueLevel: number;
  brightness: number;
  contrast: number;
}

export interface Screen_BlendCompensation {
  blackLevel: number;
}

export interface CornerValues {
  topLeft: Graphics_Point | undefined;
  topRight: Graphics_Point | undefined;
  bottomLeft: Graphics_Point | undefined;
  bottomRight: Graphics_Point | undefined;
}

export interface DisplayMode {
  name: string;
  width: number;
  height: number;
  refreshRate: number;
  interlaced: boolean;
}

export interface OutputDisplay {
  name: string;
  model: string;
  serial: string;
  deviceName: string;
  vendor: string;
  modeIndex: number;
  bounds: Graphics_Rect | undefined;
  type: OutputDisplay_Type;
  mode: DisplayMode | undefined;
  renderId: string;
  blackMagicAlphaKeySettings?:
    | OutputDisplay_BlackmagicAlphaKeySettings
    | undefined;
}

export enum OutputDisplay_Type {
  TYPE_UNKNOWN = 0,
  TYPE_SCREEN = 1,
  TYPE_CARD = 2,
  TYPE_NDI = 3,
  TYPE_SYPHON = 4,
  TYPE_CUSTOM = 5,
  UNRECOGNIZED = -1,
}

export function outputDisplay_TypeFromJSON(object: any): OutputDisplay_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return OutputDisplay_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_SCREEN':
      return OutputDisplay_Type.TYPE_SCREEN;
    case 2:
    case 'TYPE_CARD':
      return OutputDisplay_Type.TYPE_CARD;
    case 3:
    case 'TYPE_NDI':
      return OutputDisplay_Type.TYPE_NDI;
    case 4:
    case 'TYPE_SYPHON':
      return OutputDisplay_Type.TYPE_SYPHON;
    case 5:
    case 'TYPE_CUSTOM':
      return OutputDisplay_Type.TYPE_CUSTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OutputDisplay_Type.UNRECOGNIZED;
  }
}

export function outputDisplay_TypeToJSON(object: OutputDisplay_Type): string {
  switch (object) {
    case OutputDisplay_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case OutputDisplay_Type.TYPE_SCREEN:
      return 'TYPE_SCREEN';
    case OutputDisplay_Type.TYPE_CARD:
      return 'TYPE_CARD';
    case OutputDisplay_Type.TYPE_NDI:
      return 'TYPE_NDI';
    case OutputDisplay_Type.TYPE_SYPHON:
      return 'TYPE_SYPHON';
    case OutputDisplay_Type.TYPE_CUSTOM:
      return 'TYPE_CUSTOM';
    case OutputDisplay_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface OutputDisplay_BlackmagicAlphaKeySettings {
  enabled: boolean;
  keyMode: OutputDisplay_BlackmagicAlphaKeySettings_KeyMode;
  blendValue: number;
}

export enum OutputDisplay_BlackmagicAlphaKeySettings_KeyMode {
  KEY_MODE_INTERNAL = 0,
  KEY_MODE_EXTERNAL = 1,
  UNRECOGNIZED = -1,
}

export function outputDisplay_BlackmagicAlphaKeySettings_KeyModeFromJSON(
  object: any,
): OutputDisplay_BlackmagicAlphaKeySettings_KeyMode {
  switch (object) {
    case 0:
    case 'KEY_MODE_INTERNAL':
      return OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.KEY_MODE_INTERNAL;
    case 1:
    case 'KEY_MODE_EXTERNAL':
      return OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.KEY_MODE_EXTERNAL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.UNRECOGNIZED;
  }
}

export function outputDisplay_BlackmagicAlphaKeySettings_KeyModeToJSON(
  object: OutputDisplay_BlackmagicAlphaKeySettings_KeyMode,
): string {
  switch (object) {
    case OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.KEY_MODE_INTERNAL:
      return 'KEY_MODE_INTERNAL';
    case OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.KEY_MODE_EXTERNAL:
      return 'KEY_MODE_EXTERNAL';
    case OutputDisplay_BlackmagicAlphaKeySettings_KeyMode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface EdgeBlend {
  uuid: UUID | undefined;
  radius: number;
  intensity: number;
  mode: EdgeBlend_Mode;
  firstScreen: EdgeBlend_Screen | undefined;
  secondScreen: EdgeBlend_Screen | undefined;
  leftScreen: EdgeBlend_Screen | undefined;
  rightScreen: EdgeBlend_Screen | undefined;
  topScreen: EdgeBlend_Screen | undefined;
  bottomScreen: EdgeBlend_Screen | undefined;
}

export enum EdgeBlend_Mode {
  MODE_LINEAR = 0,
  MODE_CUBIC = 1,
  MODE_QUADRATIC = 2,
  UNRECOGNIZED = -1,
}

export function edgeBlend_ModeFromJSON(object: any): EdgeBlend_Mode {
  switch (object) {
    case 0:
    case 'MODE_LINEAR':
      return EdgeBlend_Mode.MODE_LINEAR;
    case 1:
    case 'MODE_CUBIC':
      return EdgeBlend_Mode.MODE_CUBIC;
    case 2:
    case 'MODE_QUADRATIC':
      return EdgeBlend_Mode.MODE_QUADRATIC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return EdgeBlend_Mode.UNRECOGNIZED;
  }
}

export function edgeBlend_ModeToJSON(object: EdgeBlend_Mode): string {
  switch (object) {
    case EdgeBlend_Mode.MODE_LINEAR:
      return 'MODE_LINEAR';
    case EdgeBlend_Mode.MODE_CUBIC:
      return 'MODE_CUBIC';
    case EdgeBlend_Mode.MODE_QUADRATIC:
      return 'MODE_QUADRATIC';
    case EdgeBlend_Mode.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface EdgeBlend_Screen {
  uuid: UUID | undefined;
  edge: EdgeBlend_Screen_Edge;
  gamma: number;
  blackLevel: number;
  mode: EdgeBlend_Mode;
  radius: number;
  intensity: number;
}

export enum EdgeBlend_Screen_Edge {
  EDGE_UNKNOWN = 0,
  EDGE_LEFT = 1,
  EDGE_RIGHT = 2,
  EDGE_TOP = 3,
  EDGE_BOTTOM = 4,
  UNRECOGNIZED = -1,
}

export function edgeBlend_Screen_EdgeFromJSON(
  object: any,
): EdgeBlend_Screen_Edge {
  switch (object) {
    case 0:
    case 'EDGE_UNKNOWN':
      return EdgeBlend_Screen_Edge.EDGE_UNKNOWN;
    case 1:
    case 'EDGE_LEFT':
      return EdgeBlend_Screen_Edge.EDGE_LEFT;
    case 2:
    case 'EDGE_RIGHT':
      return EdgeBlend_Screen_Edge.EDGE_RIGHT;
    case 3:
    case 'EDGE_TOP':
      return EdgeBlend_Screen_Edge.EDGE_TOP;
    case 4:
    case 'EDGE_BOTTOM':
      return EdgeBlend_Screen_Edge.EDGE_BOTTOM;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return EdgeBlend_Screen_Edge.UNRECOGNIZED;
  }
}

export function edgeBlend_Screen_EdgeToJSON(
  object: EdgeBlend_Screen_Edge,
): string {
  switch (object) {
    case EdgeBlend_Screen_Edge.EDGE_UNKNOWN:
      return 'EDGE_UNKNOWN';
    case EdgeBlend_Screen_Edge.EDGE_LEFT:
      return 'EDGE_LEFT';
    case EdgeBlend_Screen_Edge.EDGE_RIGHT:
      return 'EDGE_RIGHT';
    case EdgeBlend_Screen_Edge.EDGE_TOP:
      return 'EDGE_TOP';
    case EdgeBlend_Screen_Edge.EDGE_BOTTOM:
      return 'EDGE_BOTTOM';
    case EdgeBlend_Screen_Edge.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseScreen(): Screen {
  return {
    uuid: undefined,
    name: '',
    color: undefined,
    bounds: undefined,
    aspectRatioLocked: false,
    outputBoundsAspectRatioLocked: false,
    cornerPinningEnabled: false,
    subscreenUnitRect: undefined,
    rotation: 0,
    gamma: 0,
    blackLevel: 0,
    blendedEdges: 0,
    cornerValues: undefined,
    outputDisplay: undefined,
    colorEnabled: false,
    colorAdjustment: undefined,
    blendCompensation: undefined,
  };
}

export const Screen = {
  encode(
    message: Screen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.bounds !== undefined) {
      Graphics_Rect.encode(message.bounds, writer.uint32(34).fork()).ldelim();
    }
    if (message.aspectRatioLocked === true) {
      writer.uint32(40).bool(message.aspectRatioLocked);
    }
    if (message.outputBoundsAspectRatioLocked === true) {
      writer.uint32(48).bool(message.outputBoundsAspectRatioLocked);
    }
    if (message.cornerPinningEnabled === true) {
      writer.uint32(56).bool(message.cornerPinningEnabled);
    }
    if (message.subscreenUnitRect !== undefined) {
      Graphics_Rect.encode(
        message.subscreenUnitRect,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.rotation !== 0) {
      writer.uint32(73).double(message.rotation);
    }
    if (message.gamma !== 0) {
      writer.uint32(81).double(message.gamma);
    }
    if (message.blackLevel !== 0) {
      writer.uint32(89).double(message.blackLevel);
    }
    if (message.blendedEdges !== 0) {
      writer.uint32(96).uint32(message.blendedEdges);
    }
    if (message.cornerValues !== undefined) {
      CornerValues.encode(
        message.cornerValues,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.outputDisplay !== undefined) {
      OutputDisplay.encode(
        message.outputDisplay,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.colorEnabled === true) {
      writer.uint32(120).bool(message.colorEnabled);
    }
    if (message.colorAdjustment !== undefined) {
      Screen_ColorAdjustment.encode(
        message.colorAdjustment,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.blendCompensation !== undefined) {
      Screen_BlendCompensation.encode(
        message.blendCompensation,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Screen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScreen();
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

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.bounds = Graphics_Rect.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.aspectRatioLocked = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.outputBoundsAspectRatioLocked = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.cornerPinningEnabled = reader.bool();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.subscreenUnitRect = Graphics_Rect.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 73) {
            break;
          }

          message.rotation = reader.double();
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.gamma = reader.double();
          continue;
        case 11:
          if (tag != 89) {
            break;
          }

          message.blackLevel = reader.double();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.blendedEdges = reader.uint32();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.cornerValues = CornerValues.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.outputDisplay = OutputDisplay.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag != 120) {
            break;
          }

          message.colorEnabled = reader.bool();
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.colorAdjustment = Screen_ColorAdjustment.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.blendCompensation = Screen_BlendCompensation.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Screen {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      bounds: isSet(object.bounds)
        ? Graphics_Rect.fromJSON(object.bounds)
        : undefined,
      aspectRatioLocked: isSet(object.aspectRatioLocked)
        ? Boolean(object.aspectRatioLocked)
        : false,
      outputBoundsAspectRatioLocked: isSet(object.outputBoundsAspectRatioLocked)
        ? Boolean(object.outputBoundsAspectRatioLocked)
        : false,
      cornerPinningEnabled: isSet(object.cornerPinningEnabled)
        ? Boolean(object.cornerPinningEnabled)
        : false,
      subscreenUnitRect: isSet(object.subscreenUnitRect)
        ? Graphics_Rect.fromJSON(object.subscreenUnitRect)
        : undefined,
      rotation: isSet(object.rotation) ? Number(object.rotation) : 0,
      gamma: isSet(object.gamma) ? Number(object.gamma) : 0,
      blackLevel: isSet(object.blackLevel) ? Number(object.blackLevel) : 0,
      blendedEdges: isSet(object.blendedEdges)
        ? Number(object.blendedEdges)
        : 0,
      cornerValues: isSet(object.cornerValues)
        ? CornerValues.fromJSON(object.cornerValues)
        : undefined,
      outputDisplay: isSet(object.outputDisplay)
        ? OutputDisplay.fromJSON(object.outputDisplay)
        : undefined,
      colorEnabled: isSet(object.colorEnabled)
        ? Boolean(object.colorEnabled)
        : false,
      colorAdjustment: isSet(object.colorAdjustment)
        ? Screen_ColorAdjustment.fromJSON(object.colorAdjustment)
        : undefined,
      blendCompensation: isSet(object.blendCompensation)
        ? Screen_BlendCompensation.fromJSON(object.blendCompensation)
        : undefined,
    };
  },

  toJSON(message: Screen): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.bounds !== undefined &&
      (obj.bounds = message.bounds
        ? Graphics_Rect.toJSON(message.bounds)
        : undefined);
    message.aspectRatioLocked !== undefined &&
      (obj.aspectRatioLocked = message.aspectRatioLocked);
    message.outputBoundsAspectRatioLocked !== undefined &&
      (obj.outputBoundsAspectRatioLocked =
        message.outputBoundsAspectRatioLocked);
    message.cornerPinningEnabled !== undefined &&
      (obj.cornerPinningEnabled = message.cornerPinningEnabled);
    message.subscreenUnitRect !== undefined &&
      (obj.subscreenUnitRect = message.subscreenUnitRect
        ? Graphics_Rect.toJSON(message.subscreenUnitRect)
        : undefined);
    message.rotation !== undefined && (obj.rotation = message.rotation);
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.blackLevel !== undefined && (obj.blackLevel = message.blackLevel);
    message.blendedEdges !== undefined &&
      (obj.blendedEdges = Math.round(message.blendedEdges));
    message.cornerValues !== undefined &&
      (obj.cornerValues = message.cornerValues
        ? CornerValues.toJSON(message.cornerValues)
        : undefined);
    message.outputDisplay !== undefined &&
      (obj.outputDisplay = message.outputDisplay
        ? OutputDisplay.toJSON(message.outputDisplay)
        : undefined);
    message.colorEnabled !== undefined &&
      (obj.colorEnabled = message.colorEnabled);
    message.colorAdjustment !== undefined &&
      (obj.colorAdjustment = message.colorAdjustment
        ? Screen_ColorAdjustment.toJSON(message.colorAdjustment)
        : undefined);
    message.blendCompensation !== undefined &&
      (obj.blendCompensation = message.blendCompensation
        ? Screen_BlendCompensation.toJSON(message.blendCompensation)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Screen>, I>>(base?: I): Screen {
    return Screen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Screen>, I>>(object: I): Screen {
    const message = createBaseScreen();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.bounds =
      object.bounds !== undefined && object.bounds !== null
        ? Graphics_Rect.fromPartial(object.bounds)
        : undefined;
    message.aspectRatioLocked = object.aspectRatioLocked ?? false;
    message.outputBoundsAspectRatioLocked =
      object.outputBoundsAspectRatioLocked ?? false;
    message.cornerPinningEnabled = object.cornerPinningEnabled ?? false;
    message.subscreenUnitRect =
      object.subscreenUnitRect !== undefined &&
      object.subscreenUnitRect !== null
        ? Graphics_Rect.fromPartial(object.subscreenUnitRect)
        : undefined;
    message.rotation = object.rotation ?? 0;
    message.gamma = object.gamma ?? 0;
    message.blackLevel = object.blackLevel ?? 0;
    message.blendedEdges = object.blendedEdges ?? 0;
    message.cornerValues =
      object.cornerValues !== undefined && object.cornerValues !== null
        ? CornerValues.fromPartial(object.cornerValues)
        : undefined;
    message.outputDisplay =
      object.outputDisplay !== undefined && object.outputDisplay !== null
        ? OutputDisplay.fromPartial(object.outputDisplay)
        : undefined;
    message.colorEnabled = object.colorEnabled ?? false;
    message.colorAdjustment =
      object.colorAdjustment !== undefined && object.colorAdjustment !== null
        ? Screen_ColorAdjustment.fromPartial(object.colorAdjustment)
        : undefined;
    message.blendCompensation =
      object.blendCompensation !== undefined &&
      object.blendCompensation !== null
        ? Screen_BlendCompensation.fromPartial(object.blendCompensation)
        : undefined;
    return message;
  },
};

function createBaseScreen_ColorAdjustment(): Screen_ColorAdjustment {
  return {
    gamma: 0,
    blackLevel: 0,
    redLevel: 0,
    greenLevel: 0,
    blueLevel: 0,
    brightness: 0,
    contrast: 0,
  };
}

export const Screen_ColorAdjustment = {
  encode(
    message: Screen_ColorAdjustment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gamma !== 0) {
      writer.uint32(9).double(message.gamma);
    }
    if (message.blackLevel !== 0) {
      writer.uint32(17).double(message.blackLevel);
    }
    if (message.redLevel !== 0) {
      writer.uint32(25).double(message.redLevel);
    }
    if (message.greenLevel !== 0) {
      writer.uint32(33).double(message.greenLevel);
    }
    if (message.blueLevel !== 0) {
      writer.uint32(41).double(message.blueLevel);
    }
    if (message.brightness !== 0) {
      writer.uint32(49).double(message.brightness);
    }
    if (message.contrast !== 0) {
      writer.uint32(57).double(message.contrast);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Screen_ColorAdjustment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScreen_ColorAdjustment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.gamma = reader.double();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.blackLevel = reader.double();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.redLevel = reader.double();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.greenLevel = reader.double();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.blueLevel = reader.double();
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.brightness = reader.double();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.contrast = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Screen_ColorAdjustment {
    return {
      gamma: isSet(object.gamma) ? Number(object.gamma) : 0,
      blackLevel: isSet(object.blackLevel) ? Number(object.blackLevel) : 0,
      redLevel: isSet(object.redLevel) ? Number(object.redLevel) : 0,
      greenLevel: isSet(object.greenLevel) ? Number(object.greenLevel) : 0,
      blueLevel: isSet(object.blueLevel) ? Number(object.blueLevel) : 0,
      brightness: isSet(object.brightness) ? Number(object.brightness) : 0,
      contrast: isSet(object.contrast) ? Number(object.contrast) : 0,
    };
  },

  toJSON(message: Screen_ColorAdjustment): unknown {
    const obj: any = {};
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.blackLevel !== undefined && (obj.blackLevel = message.blackLevel);
    message.redLevel !== undefined && (obj.redLevel = message.redLevel);
    message.greenLevel !== undefined && (obj.greenLevel = message.greenLevel);
    message.blueLevel !== undefined && (obj.blueLevel = message.blueLevel);
    message.brightness !== undefined && (obj.brightness = message.brightness);
    message.contrast !== undefined && (obj.contrast = message.contrast);
    return obj;
  },

  create<I extends Exact<DeepPartial<Screen_ColorAdjustment>, I>>(
    base?: I,
  ): Screen_ColorAdjustment {
    return Screen_ColorAdjustment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Screen_ColorAdjustment>, I>>(
    object: I,
  ): Screen_ColorAdjustment {
    const message = createBaseScreen_ColorAdjustment();
    message.gamma = object.gamma ?? 0;
    message.blackLevel = object.blackLevel ?? 0;
    message.redLevel = object.redLevel ?? 0;
    message.greenLevel = object.greenLevel ?? 0;
    message.blueLevel = object.blueLevel ?? 0;
    message.brightness = object.brightness ?? 0;
    message.contrast = object.contrast ?? 0;
    return message;
  },
};

function createBaseScreen_BlendCompensation(): Screen_BlendCompensation {
  return { blackLevel: 0 };
}

export const Screen_BlendCompensation = {
  encode(
    message: Screen_BlendCompensation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blackLevel !== 0) {
      writer.uint32(9).double(message.blackLevel);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Screen_BlendCompensation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScreen_BlendCompensation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.blackLevel = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Screen_BlendCompensation {
    return {
      blackLevel: isSet(object.blackLevel) ? Number(object.blackLevel) : 0,
    };
  },

  toJSON(message: Screen_BlendCompensation): unknown {
    const obj: any = {};
    message.blackLevel !== undefined && (obj.blackLevel = message.blackLevel);
    return obj;
  },

  create<I extends Exact<DeepPartial<Screen_BlendCompensation>, I>>(
    base?: I,
  ): Screen_BlendCompensation {
    return Screen_BlendCompensation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Screen_BlendCompensation>, I>>(
    object: I,
  ): Screen_BlendCompensation {
    const message = createBaseScreen_BlendCompensation();
    message.blackLevel = object.blackLevel ?? 0;
    return message;
  },
};

function createBaseCornerValues(): CornerValues {
  return {
    topLeft: undefined,
    topRight: undefined,
    bottomLeft: undefined,
    bottomRight: undefined,
  };
}

export const CornerValues = {
  encode(
    message: CornerValues,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.topLeft !== undefined) {
      Graphics_Point.encode(message.topLeft, writer.uint32(10).fork()).ldelim();
    }
    if (message.topRight !== undefined) {
      Graphics_Point.encode(
        message.topRight,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.bottomLeft !== undefined) {
      Graphics_Point.encode(
        message.bottomLeft,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.bottomRight !== undefined) {
      Graphics_Point.encode(
        message.bottomRight,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CornerValues {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCornerValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.topLeft = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.topRight = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.bottomLeft = Graphics_Point.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.bottomRight = Graphics_Point.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CornerValues {
    return {
      topLeft: isSet(object.topLeft)
        ? Graphics_Point.fromJSON(object.topLeft)
        : undefined,
      topRight: isSet(object.topRight)
        ? Graphics_Point.fromJSON(object.topRight)
        : undefined,
      bottomLeft: isSet(object.bottomLeft)
        ? Graphics_Point.fromJSON(object.bottomLeft)
        : undefined,
      bottomRight: isSet(object.bottomRight)
        ? Graphics_Point.fromJSON(object.bottomRight)
        : undefined,
    };
  },

  toJSON(message: CornerValues): unknown {
    const obj: any = {};
    message.topLeft !== undefined &&
      (obj.topLeft = message.topLeft
        ? Graphics_Point.toJSON(message.topLeft)
        : undefined);
    message.topRight !== undefined &&
      (obj.topRight = message.topRight
        ? Graphics_Point.toJSON(message.topRight)
        : undefined);
    message.bottomLeft !== undefined &&
      (obj.bottomLeft = message.bottomLeft
        ? Graphics_Point.toJSON(message.bottomLeft)
        : undefined);
    message.bottomRight !== undefined &&
      (obj.bottomRight = message.bottomRight
        ? Graphics_Point.toJSON(message.bottomRight)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CornerValues>, I>>(
    base?: I,
  ): CornerValues {
    return CornerValues.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CornerValues>, I>>(
    object: I,
  ): CornerValues {
    const message = createBaseCornerValues();
    message.topLeft =
      object.topLeft !== undefined && object.topLeft !== null
        ? Graphics_Point.fromPartial(object.topLeft)
        : undefined;
    message.topRight =
      object.topRight !== undefined && object.topRight !== null
        ? Graphics_Point.fromPartial(object.topRight)
        : undefined;
    message.bottomLeft =
      object.bottomLeft !== undefined && object.bottomLeft !== null
        ? Graphics_Point.fromPartial(object.bottomLeft)
        : undefined;
    message.bottomRight =
      object.bottomRight !== undefined && object.bottomRight !== null
        ? Graphics_Point.fromPartial(object.bottomRight)
        : undefined;
    return message;
  },
};

function createBaseDisplayMode(): DisplayMode {
  return { name: '', width: 0, height: 0, refreshRate: 0, interlaced: false };
}

export const DisplayMode = {
  encode(
    message: DisplayMode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.width !== 0) {
      writer.uint32(16).uint32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint32(message.height);
    }
    if (message.refreshRate !== 0) {
      writer.uint32(33).double(message.refreshRate);
    }
    if (message.interlaced === true) {
      writer.uint32(40).bool(message.interlaced);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisplayMode {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayMode();
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
          if (tag != 16) {
            break;
          }

          message.width = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.height = reader.uint32();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.refreshRate = reader.double();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.interlaced = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DisplayMode {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      refreshRate: isSet(object.refreshRate) ? Number(object.refreshRate) : 0,
      interlaced: isSet(object.interlaced) ? Boolean(object.interlaced) : false,
    };
  },

  toJSON(message: DisplayMode): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.width !== undefined && (obj.width = Math.round(message.width));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.refreshRate !== undefined &&
      (obj.refreshRate = message.refreshRate);
    message.interlaced !== undefined && (obj.interlaced = message.interlaced);
    return obj;
  },

  create<I extends Exact<DeepPartial<DisplayMode>, I>>(base?: I): DisplayMode {
    return DisplayMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DisplayMode>, I>>(
    object: I,
  ): DisplayMode {
    const message = createBaseDisplayMode();
    message.name = object.name ?? '';
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.refreshRate = object.refreshRate ?? 0;
    message.interlaced = object.interlaced ?? false;
    return message;
  },
};

function createBaseOutputDisplay(): OutputDisplay {
  return {
    name: '',
    model: '',
    serial: '',
    deviceName: '',
    vendor: '',
    modeIndex: 0,
    bounds: undefined,
    type: 0,
    mode: undefined,
    renderId: '',
    blackMagicAlphaKeySettings: undefined,
  };
}

export const OutputDisplay = {
  encode(
    message: OutputDisplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.model !== '') {
      writer.uint32(18).string(message.model);
    }
    if (message.serial !== '') {
      writer.uint32(26).string(message.serial);
    }
    if (message.deviceName !== '') {
      writer.uint32(34).string(message.deviceName);
    }
    if (message.vendor !== '') {
      writer.uint32(42).string(message.vendor);
    }
    if (message.modeIndex !== 0) {
      writer.uint32(48).uint32(message.modeIndex);
    }
    if (message.bounds !== undefined) {
      Graphics_Rect.encode(message.bounds, writer.uint32(58).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(64).int32(message.type);
    }
    if (message.mode !== undefined) {
      DisplayMode.encode(message.mode, writer.uint32(74).fork()).ldelim();
    }
    if (message.renderId !== '') {
      writer.uint32(82).string(message.renderId);
    }
    if (message.blackMagicAlphaKeySettings !== undefined) {
      OutputDisplay_BlackmagicAlphaKeySettings.encode(
        message.blackMagicAlphaKeySettings,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OutputDisplay {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputDisplay();
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

          message.model = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.serial = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.deviceName = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.vendor = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.modeIndex = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.bounds = Graphics_Rect.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.mode = DisplayMode.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.renderId = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.blackMagicAlphaKeySettings =
            OutputDisplay_BlackmagicAlphaKeySettings.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputDisplay {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      model: isSet(object.model) ? String(object.model) : '',
      serial: isSet(object.serial) ? String(object.serial) : '',
      deviceName: isSet(object.deviceName) ? String(object.deviceName) : '',
      vendor: isSet(object.vendor) ? String(object.vendor) : '',
      modeIndex: isSet(object.modeIndex) ? Number(object.modeIndex) : 0,
      bounds: isSet(object.bounds)
        ? Graphics_Rect.fromJSON(object.bounds)
        : undefined,
      type: isSet(object.type) ? outputDisplay_TypeFromJSON(object.type) : 0,
      mode: isSet(object.mode) ? DisplayMode.fromJSON(object.mode) : undefined,
      renderId: isSet(object.renderId) ? String(object.renderId) : '',
      blackMagicAlphaKeySettings: isSet(object.blackMagicAlphaKeySettings)
        ? OutputDisplay_BlackmagicAlphaKeySettings.fromJSON(
            object.blackMagicAlphaKeySettings,
          )
        : undefined,
    };
  },

  toJSON(message: OutputDisplay): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.model !== undefined && (obj.model = message.model);
    message.serial !== undefined && (obj.serial = message.serial);
    message.deviceName !== undefined && (obj.deviceName = message.deviceName);
    message.vendor !== undefined && (obj.vendor = message.vendor);
    message.modeIndex !== undefined &&
      (obj.modeIndex = Math.round(message.modeIndex));
    message.bounds !== undefined &&
      (obj.bounds = message.bounds
        ? Graphics_Rect.toJSON(message.bounds)
        : undefined);
    message.type !== undefined &&
      (obj.type = outputDisplay_TypeToJSON(message.type));
    message.mode !== undefined &&
      (obj.mode = message.mode ? DisplayMode.toJSON(message.mode) : undefined);
    message.renderId !== undefined && (obj.renderId = message.renderId);
    message.blackMagicAlphaKeySettings !== undefined &&
      (obj.blackMagicAlphaKeySettings = message.blackMagicAlphaKeySettings
        ? OutputDisplay_BlackmagicAlphaKeySettings.toJSON(
            message.blackMagicAlphaKeySettings,
          )
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<OutputDisplay>, I>>(
    base?: I,
  ): OutputDisplay {
    return OutputDisplay.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OutputDisplay>, I>>(
    object: I,
  ): OutputDisplay {
    const message = createBaseOutputDisplay();
    message.name = object.name ?? '';
    message.model = object.model ?? '';
    message.serial = object.serial ?? '';
    message.deviceName = object.deviceName ?? '';
    message.vendor = object.vendor ?? '';
    message.modeIndex = object.modeIndex ?? 0;
    message.bounds =
      object.bounds !== undefined && object.bounds !== null
        ? Graphics_Rect.fromPartial(object.bounds)
        : undefined;
    message.type = object.type ?? 0;
    message.mode =
      object.mode !== undefined && object.mode !== null
        ? DisplayMode.fromPartial(object.mode)
        : undefined;
    message.renderId = object.renderId ?? '';
    message.blackMagicAlphaKeySettings =
      object.blackMagicAlphaKeySettings !== undefined &&
      object.blackMagicAlphaKeySettings !== null
        ? OutputDisplay_BlackmagicAlphaKeySettings.fromPartial(
            object.blackMagicAlphaKeySettings,
          )
        : undefined;
    return message;
  },
};

function createBaseOutputDisplay_BlackmagicAlphaKeySettings(): OutputDisplay_BlackmagicAlphaKeySettings {
  return { enabled: false, keyMode: 0, blendValue: 0 };
}

export const OutputDisplay_BlackmagicAlphaKeySettings = {
  encode(
    message: OutputDisplay_BlackmagicAlphaKeySettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.keyMode !== 0) {
      writer.uint32(16).int32(message.keyMode);
    }
    if (message.blendValue !== 0) {
      writer.uint32(25).double(message.blendValue);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): OutputDisplay_BlackmagicAlphaKeySettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutputDisplay_BlackmagicAlphaKeySettings();
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

          message.keyMode = reader.int32() as any;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.blendValue = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutputDisplay_BlackmagicAlphaKeySettings {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      keyMode: isSet(object.keyMode)
        ? outputDisplay_BlackmagicAlphaKeySettings_KeyModeFromJSON(
            object.keyMode,
          )
        : 0,
      blendValue: isSet(object.blendValue) ? Number(object.blendValue) : 0,
    };
  },

  toJSON(message: OutputDisplay_BlackmagicAlphaKeySettings): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.keyMode !== undefined &&
      (obj.keyMode = outputDisplay_BlackmagicAlphaKeySettings_KeyModeToJSON(
        message.keyMode,
      ));
    message.blendValue !== undefined && (obj.blendValue = message.blendValue);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<OutputDisplay_BlackmagicAlphaKeySettings>, I>,
  >(base?: I): OutputDisplay_BlackmagicAlphaKeySettings {
    return OutputDisplay_BlackmagicAlphaKeySettings.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<OutputDisplay_BlackmagicAlphaKeySettings>, I>,
  >(object: I): OutputDisplay_BlackmagicAlphaKeySettings {
    const message = createBaseOutputDisplay_BlackmagicAlphaKeySettings();
    message.enabled = object.enabled ?? false;
    message.keyMode = object.keyMode ?? 0;
    message.blendValue = object.blendValue ?? 0;
    return message;
  },
};

function createBaseEdgeBlend(): EdgeBlend {
  return {
    uuid: undefined,
    radius: 0,
    intensity: 0,
    mode: 0,
    firstScreen: undefined,
    secondScreen: undefined,
    leftScreen: undefined,
    rightScreen: undefined,
    topScreen: undefined,
    bottomScreen: undefined,
  };
}

export const EdgeBlend = {
  encode(
    message: EdgeBlend,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(17).double(message.radius);
    }
    if (message.intensity !== 0) {
      writer.uint32(25).double(message.intensity);
    }
    if (message.mode !== 0) {
      writer.uint32(32).int32(message.mode);
    }
    if (message.firstScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.firstScreen,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.secondScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.secondScreen,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.leftScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.leftScreen,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.rightScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.rightScreen,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.topScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.topScreen,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.bottomScreen !== undefined) {
      EdgeBlend_Screen.encode(
        message.bottomScreen,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeBlend {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeBlend();
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

          message.radius = reader.double();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.intensity = reader.double();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.firstScreen = EdgeBlend_Screen.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.secondScreen = EdgeBlend_Screen.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.leftScreen = EdgeBlend_Screen.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.rightScreen = EdgeBlend_Screen.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.topScreen = EdgeBlend_Screen.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.bottomScreen = EdgeBlend_Screen.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeBlend {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      intensity: isSet(object.intensity) ? Number(object.intensity) : 0,
      mode: isSet(object.mode) ? edgeBlend_ModeFromJSON(object.mode) : 0,
      firstScreen: isSet(object.firstScreen)
        ? EdgeBlend_Screen.fromJSON(object.firstScreen)
        : undefined,
      secondScreen: isSet(object.secondScreen)
        ? EdgeBlend_Screen.fromJSON(object.secondScreen)
        : undefined,
      leftScreen: isSet(object.leftScreen)
        ? EdgeBlend_Screen.fromJSON(object.leftScreen)
        : undefined,
      rightScreen: isSet(object.rightScreen)
        ? EdgeBlend_Screen.fromJSON(object.rightScreen)
        : undefined,
      topScreen: isSet(object.topScreen)
        ? EdgeBlend_Screen.fromJSON(object.topScreen)
        : undefined,
      bottomScreen: isSet(object.bottomScreen)
        ? EdgeBlend_Screen.fromJSON(object.bottomScreen)
        : undefined,
    };
  },

  toJSON(message: EdgeBlend): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    message.intensity !== undefined && (obj.intensity = message.intensity);
    message.mode !== undefined &&
      (obj.mode = edgeBlend_ModeToJSON(message.mode));
    message.firstScreen !== undefined &&
      (obj.firstScreen = message.firstScreen
        ? EdgeBlend_Screen.toJSON(message.firstScreen)
        : undefined);
    message.secondScreen !== undefined &&
      (obj.secondScreen = message.secondScreen
        ? EdgeBlend_Screen.toJSON(message.secondScreen)
        : undefined);
    message.leftScreen !== undefined &&
      (obj.leftScreen = message.leftScreen
        ? EdgeBlend_Screen.toJSON(message.leftScreen)
        : undefined);
    message.rightScreen !== undefined &&
      (obj.rightScreen = message.rightScreen
        ? EdgeBlend_Screen.toJSON(message.rightScreen)
        : undefined);
    message.topScreen !== undefined &&
      (obj.topScreen = message.topScreen
        ? EdgeBlend_Screen.toJSON(message.topScreen)
        : undefined);
    message.bottomScreen !== undefined &&
      (obj.bottomScreen = message.bottomScreen
        ? EdgeBlend_Screen.toJSON(message.bottomScreen)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeBlend>, I>>(base?: I): EdgeBlend {
    return EdgeBlend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeBlend>, I>>(
    object: I,
  ): EdgeBlend {
    const message = createBaseEdgeBlend();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.radius = object.radius ?? 0;
    message.intensity = object.intensity ?? 0;
    message.mode = object.mode ?? 0;
    message.firstScreen =
      object.firstScreen !== undefined && object.firstScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.firstScreen)
        : undefined;
    message.secondScreen =
      object.secondScreen !== undefined && object.secondScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.secondScreen)
        : undefined;
    message.leftScreen =
      object.leftScreen !== undefined && object.leftScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.leftScreen)
        : undefined;
    message.rightScreen =
      object.rightScreen !== undefined && object.rightScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.rightScreen)
        : undefined;
    message.topScreen =
      object.topScreen !== undefined && object.topScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.topScreen)
        : undefined;
    message.bottomScreen =
      object.bottomScreen !== undefined && object.bottomScreen !== null
        ? EdgeBlend_Screen.fromPartial(object.bottomScreen)
        : undefined;
    return message;
  },
};

function createBaseEdgeBlend_Screen(): EdgeBlend_Screen {
  return {
    uuid: undefined,
    edge: 0,
    gamma: 0,
    blackLevel: 0,
    mode: 0,
    radius: 0,
    intensity: 0,
  };
}

export const EdgeBlend_Screen = {
  encode(
    message: EdgeBlend_Screen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.edge !== 0) {
      writer.uint32(16).int32(message.edge);
    }
    if (message.gamma !== 0) {
      writer.uint32(25).double(message.gamma);
    }
    if (message.blackLevel !== 0) {
      writer.uint32(33).double(message.blackLevel);
    }
    if (message.mode !== 0) {
      writer.uint32(40).int32(message.mode);
    }
    if (message.radius !== 0) {
      writer.uint32(49).double(message.radius);
    }
    if (message.intensity !== 0) {
      writer.uint32(57).double(message.intensity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeBlend_Screen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeBlend_Screen();
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
          if (tag != 16) {
            break;
          }

          message.edge = reader.int32() as any;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.gamma = reader.double();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.blackLevel = reader.double();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.radius = reader.double();
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.intensity = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeBlend_Screen {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      edge: isSet(object.edge) ? edgeBlend_Screen_EdgeFromJSON(object.edge) : 0,
      gamma: isSet(object.gamma) ? Number(object.gamma) : 0,
      blackLevel: isSet(object.blackLevel) ? Number(object.blackLevel) : 0,
      mode: isSet(object.mode) ? edgeBlend_ModeFromJSON(object.mode) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      intensity: isSet(object.intensity) ? Number(object.intensity) : 0,
    };
  },

  toJSON(message: EdgeBlend_Screen): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.edge !== undefined &&
      (obj.edge = edgeBlend_Screen_EdgeToJSON(message.edge));
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.blackLevel !== undefined && (obj.blackLevel = message.blackLevel);
    message.mode !== undefined &&
      (obj.mode = edgeBlend_ModeToJSON(message.mode));
    message.radius !== undefined && (obj.radius = message.radius);
    message.intensity !== undefined && (obj.intensity = message.intensity);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeBlend_Screen>, I>>(
    base?: I,
  ): EdgeBlend_Screen {
    return EdgeBlend_Screen.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeBlend_Screen>, I>>(
    object: I,
  ): EdgeBlend_Screen {
    const message = createBaseEdgeBlend_Screen();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.edge = object.edge ?? 0;
    message.gamma = object.gamma ?? 0;
    message.blackLevel = object.blackLevel ?? 0;
    message.mode = object.mode ?? 0;
    message.radius = object.radius ?? 0;
    message.intensity = object.intensity ?? 0;
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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
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
