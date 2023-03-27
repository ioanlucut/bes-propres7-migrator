/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Color, UUID } from "./basicTypes";
import { Effect, Transition } from "./effects";
import { HotKey } from "./hotKey";

export const protobufPackage = "rv.data";

export interface Layer {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  muted: boolean;
  hidden: boolean;
  blendMode: Layer_BlendMode;
  opacity: number;
  selectedTargetSetUuid: UUID | undefined;
  effectsPresetUuid: UUID | undefined;
  effectsBuildDuration: number;
  layerPresetUuid: UUID | undefined;
  hotKey: HotKey | undefined;
  transition: Transition | undefined;
  effects: Effect[];
  blend: Layer_Blending | undefined;
}

export enum Layer_BlendMode {
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

export function layer_BlendModeFromJSON(object: any): Layer_BlendMode {
  switch (object) {
    case 0:
    case "BLEND_MODE_NORMAL":
      return Layer_BlendMode.BLEND_MODE_NORMAL;
    case 1:
    case "BLEND_MODE_DISSOLVE":
      return Layer_BlendMode.BLEND_MODE_DISSOLVE;
    case 2:
    case "BLEND_MODE_DARKEN":
      return Layer_BlendMode.BLEND_MODE_DARKEN;
    case 3:
    case "BLEND_MODE_MULTIPLY":
      return Layer_BlendMode.BLEND_MODE_MULTIPLY;
    case 4:
    case "BLEND_MODE_COLOR_BURN":
      return Layer_BlendMode.BLEND_MODE_COLOR_BURN;
    case 5:
    case "BLEND_MODE_LINEAR_BURN":
      return Layer_BlendMode.BLEND_MODE_LINEAR_BURN;
    case 6:
    case "BLEND_MODE_DARKER_COLOR":
      return Layer_BlendMode.BLEND_MODE_DARKER_COLOR;
    case 7:
    case "BLEND_MODE_LIGHTEN":
      return Layer_BlendMode.BLEND_MODE_LIGHTEN;
    case 8:
    case "BLEND_MODE_SCREEN":
      return Layer_BlendMode.BLEND_MODE_SCREEN;
    case 9:
    case "BLEND_MODE_COLOR_DODGE":
      return Layer_BlendMode.BLEND_MODE_COLOR_DODGE;
    case 10:
    case "BLEND_MODE_LINEAR_DODGE":
      return Layer_BlendMode.BLEND_MODE_LINEAR_DODGE;
    case 11:
    case "BLEND_MODE_LIGHTER_COLOR":
      return Layer_BlendMode.BLEND_MODE_LIGHTER_COLOR;
    case 12:
    case "BLEND_MODE_OVERLAY":
      return Layer_BlendMode.BLEND_MODE_OVERLAY;
    case 13:
    case "BLEND_MODE_SOFT_LIGHT":
      return Layer_BlendMode.BLEND_MODE_SOFT_LIGHT;
    case 14:
    case "BLEND_MODE_HARD_LIGHT":
      return Layer_BlendMode.BLEND_MODE_HARD_LIGHT;
    case 15:
    case "BLEND_MODE_VIVID_LIGHT":
      return Layer_BlendMode.BLEND_MODE_VIVID_LIGHT;
    case 16:
    case "BLEND_MODE_LINEAR_LIGHT":
      return Layer_BlendMode.BLEND_MODE_LINEAR_LIGHT;
    case 17:
    case "BLEND_MODE_PIN_LIGHT":
      return Layer_BlendMode.BLEND_MODE_PIN_LIGHT;
    case 18:
    case "BLEND_MODE_HARD_MIX":
      return Layer_BlendMode.BLEND_MODE_HARD_MIX;
    case 19:
    case "BLEND_MODE_DIFFERENCE":
      return Layer_BlendMode.BLEND_MODE_DIFFERENCE;
    case 20:
    case "BLEND_MODE_EXCLUSION":
      return Layer_BlendMode.BLEND_MODE_EXCLUSION;
    case 21:
    case "BLEND_MODE_SUBTRACT":
      return Layer_BlendMode.BLEND_MODE_SUBTRACT;
    case 22:
    case "BLEND_MODE_DIVIDE":
      return Layer_BlendMode.BLEND_MODE_DIVIDE;
    case 23:
    case "BLEND_MODE_HUE":
      return Layer_BlendMode.BLEND_MODE_HUE;
    case 24:
    case "BLEND_MODE_SATURATION":
      return Layer_BlendMode.BLEND_MODE_SATURATION;
    case 25:
    case "BLEND_MODE_COLOR":
      return Layer_BlendMode.BLEND_MODE_COLOR;
    case 26:
    case "BLEND_MODE_LUMINOSITY":
      return Layer_BlendMode.BLEND_MODE_LUMINOSITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Layer_BlendMode.UNRECOGNIZED;
  }
}

export function layer_BlendModeToJSON(object: Layer_BlendMode): string {
  switch (object) {
    case Layer_BlendMode.BLEND_MODE_NORMAL:
      return "BLEND_MODE_NORMAL";
    case Layer_BlendMode.BLEND_MODE_DISSOLVE:
      return "BLEND_MODE_DISSOLVE";
    case Layer_BlendMode.BLEND_MODE_DARKEN:
      return "BLEND_MODE_DARKEN";
    case Layer_BlendMode.BLEND_MODE_MULTIPLY:
      return "BLEND_MODE_MULTIPLY";
    case Layer_BlendMode.BLEND_MODE_COLOR_BURN:
      return "BLEND_MODE_COLOR_BURN";
    case Layer_BlendMode.BLEND_MODE_LINEAR_BURN:
      return "BLEND_MODE_LINEAR_BURN";
    case Layer_BlendMode.BLEND_MODE_DARKER_COLOR:
      return "BLEND_MODE_DARKER_COLOR";
    case Layer_BlendMode.BLEND_MODE_LIGHTEN:
      return "BLEND_MODE_LIGHTEN";
    case Layer_BlendMode.BLEND_MODE_SCREEN:
      return "BLEND_MODE_SCREEN";
    case Layer_BlendMode.BLEND_MODE_COLOR_DODGE:
      return "BLEND_MODE_COLOR_DODGE";
    case Layer_BlendMode.BLEND_MODE_LINEAR_DODGE:
      return "BLEND_MODE_LINEAR_DODGE";
    case Layer_BlendMode.BLEND_MODE_LIGHTER_COLOR:
      return "BLEND_MODE_LIGHTER_COLOR";
    case Layer_BlendMode.BLEND_MODE_OVERLAY:
      return "BLEND_MODE_OVERLAY";
    case Layer_BlendMode.BLEND_MODE_SOFT_LIGHT:
      return "BLEND_MODE_SOFT_LIGHT";
    case Layer_BlendMode.BLEND_MODE_HARD_LIGHT:
      return "BLEND_MODE_HARD_LIGHT";
    case Layer_BlendMode.BLEND_MODE_VIVID_LIGHT:
      return "BLEND_MODE_VIVID_LIGHT";
    case Layer_BlendMode.BLEND_MODE_LINEAR_LIGHT:
      return "BLEND_MODE_LINEAR_LIGHT";
    case Layer_BlendMode.BLEND_MODE_PIN_LIGHT:
      return "BLEND_MODE_PIN_LIGHT";
    case Layer_BlendMode.BLEND_MODE_HARD_MIX:
      return "BLEND_MODE_HARD_MIX";
    case Layer_BlendMode.BLEND_MODE_DIFFERENCE:
      return "BLEND_MODE_DIFFERENCE";
    case Layer_BlendMode.BLEND_MODE_EXCLUSION:
      return "BLEND_MODE_EXCLUSION";
    case Layer_BlendMode.BLEND_MODE_SUBTRACT:
      return "BLEND_MODE_SUBTRACT";
    case Layer_BlendMode.BLEND_MODE_DIVIDE:
      return "BLEND_MODE_DIVIDE";
    case Layer_BlendMode.BLEND_MODE_HUE:
      return "BLEND_MODE_HUE";
    case Layer_BlendMode.BLEND_MODE_SATURATION:
      return "BLEND_MODE_SATURATION";
    case Layer_BlendMode.BLEND_MODE_COLOR:
      return "BLEND_MODE_COLOR";
    case Layer_BlendMode.BLEND_MODE_LUMINOSITY:
      return "BLEND_MODE_LUMINOSITY";
    case Layer_BlendMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Layer_Preset {
  uuid: UUID | undefined;
  name: string;
  layer: Layer | undefined;
}

export interface Layer_Blending {
  standard?: Layer_Blending_Standard | undefined;
  matte?: Layer_Blending_Matte | undefined;
}

export interface Layer_Blending_Standard {
  mode: Layer_Blending_Standard_BlendMode;
  opacity: number;
}

export enum Layer_Blending_Standard_BlendMode {
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

export function layer_Blending_Standard_BlendModeFromJSON(object: any): Layer_Blending_Standard_BlendMode {
  switch (object) {
    case 0:
    case "BLEND_MODE_NORMAL":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_NORMAL;
    case 1:
    case "BLEND_MODE_DISSOLVE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_DISSOLVE;
    case 2:
    case "BLEND_MODE_DARKEN":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_DARKEN;
    case 3:
    case "BLEND_MODE_MULTIPLY":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_MULTIPLY;
    case 4:
    case "BLEND_MODE_COLOR_BURN":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR_BURN;
    case 5:
    case "BLEND_MODE_LINEAR_BURN":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_BURN;
    case 6:
    case "BLEND_MODE_DARKER_COLOR":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_DARKER_COLOR;
    case 7:
    case "BLEND_MODE_LIGHTEN":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LIGHTEN;
    case 8:
    case "BLEND_MODE_SCREEN":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_SCREEN;
    case 9:
    case "BLEND_MODE_COLOR_DODGE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR_DODGE;
    case 10:
    case "BLEND_MODE_LINEAR_DODGE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_DODGE;
    case 11:
    case "BLEND_MODE_LIGHTER_COLOR":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LIGHTER_COLOR;
    case 12:
    case "BLEND_MODE_OVERLAY":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_OVERLAY;
    case 13:
    case "BLEND_MODE_SOFT_LIGHT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_SOFT_LIGHT;
    case 14:
    case "BLEND_MODE_HARD_LIGHT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_HARD_LIGHT;
    case 15:
    case "BLEND_MODE_VIVID_LIGHT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_VIVID_LIGHT;
    case 16:
    case "BLEND_MODE_LINEAR_LIGHT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_LIGHT;
    case 17:
    case "BLEND_MODE_PIN_LIGHT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_PIN_LIGHT;
    case 18:
    case "BLEND_MODE_HARD_MIX":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_HARD_MIX;
    case 19:
    case "BLEND_MODE_DIFFERENCE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_DIFFERENCE;
    case 20:
    case "BLEND_MODE_EXCLUSION":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_EXCLUSION;
    case 21:
    case "BLEND_MODE_SUBTRACT":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_SUBTRACT;
    case 22:
    case "BLEND_MODE_DIVIDE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_DIVIDE;
    case 23:
    case "BLEND_MODE_HUE":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_HUE;
    case 24:
    case "BLEND_MODE_SATURATION":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_SATURATION;
    case 25:
    case "BLEND_MODE_COLOR":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR;
    case 26:
    case "BLEND_MODE_LUMINOSITY":
      return Layer_Blending_Standard_BlendMode.BLEND_MODE_LUMINOSITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Layer_Blending_Standard_BlendMode.UNRECOGNIZED;
  }
}

export function layer_Blending_Standard_BlendModeToJSON(object: Layer_Blending_Standard_BlendMode): string {
  switch (object) {
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_NORMAL:
      return "BLEND_MODE_NORMAL";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_DISSOLVE:
      return "BLEND_MODE_DISSOLVE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_DARKEN:
      return "BLEND_MODE_DARKEN";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_MULTIPLY:
      return "BLEND_MODE_MULTIPLY";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR_BURN:
      return "BLEND_MODE_COLOR_BURN";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_BURN:
      return "BLEND_MODE_LINEAR_BURN";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_DARKER_COLOR:
      return "BLEND_MODE_DARKER_COLOR";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LIGHTEN:
      return "BLEND_MODE_LIGHTEN";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_SCREEN:
      return "BLEND_MODE_SCREEN";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR_DODGE:
      return "BLEND_MODE_COLOR_DODGE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_DODGE:
      return "BLEND_MODE_LINEAR_DODGE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LIGHTER_COLOR:
      return "BLEND_MODE_LIGHTER_COLOR";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_OVERLAY:
      return "BLEND_MODE_OVERLAY";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_SOFT_LIGHT:
      return "BLEND_MODE_SOFT_LIGHT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_HARD_LIGHT:
      return "BLEND_MODE_HARD_LIGHT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_VIVID_LIGHT:
      return "BLEND_MODE_VIVID_LIGHT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LINEAR_LIGHT:
      return "BLEND_MODE_LINEAR_LIGHT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_PIN_LIGHT:
      return "BLEND_MODE_PIN_LIGHT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_HARD_MIX:
      return "BLEND_MODE_HARD_MIX";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_DIFFERENCE:
      return "BLEND_MODE_DIFFERENCE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_EXCLUSION:
      return "BLEND_MODE_EXCLUSION";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_SUBTRACT:
      return "BLEND_MODE_SUBTRACT";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_DIVIDE:
      return "BLEND_MODE_DIVIDE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_HUE:
      return "BLEND_MODE_HUE";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_SATURATION:
      return "BLEND_MODE_SATURATION";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_COLOR:
      return "BLEND_MODE_COLOR";
    case Layer_Blending_Standard_BlendMode.BLEND_MODE_LUMINOSITY:
      return "BLEND_MODE_LUMINOSITY";
    case Layer_Blending_Standard_BlendMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Layer_Blending_Matte {
  alpha?: Layer_Blending_Matte_Alpha | undefined;
  luma?: Layer_Blending_Matte_Luma | undefined;
  white?: Layer_Blending_Matte_White | undefined;
}

export interface Layer_Blending_Matte_Alpha {
  inverted: boolean;
}

export interface Layer_Blending_Matte_Luma {
  inverted: boolean;
}

export interface Layer_Blending_Matte_White {
}

function createBaseLayer(): Layer {
  return {
    uuid: undefined,
    name: "",
    color: undefined,
    muted: false,
    hidden: false,
    blendMode: 0,
    opacity: 0,
    selectedTargetSetUuid: undefined,
    effectsPresetUuid: undefined,
    effectsBuildDuration: 0,
    layerPresetUuid: undefined,
    hotKey: undefined,
    transition: undefined,
    effects: [],
    blend: undefined,
  };
}

export const Layer = {
  encode(message: Layer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.muted === true) {
      writer.uint32(32).bool(message.muted);
    }
    if (message.hidden === true) {
      writer.uint32(40).bool(message.hidden);
    }
    if (message.blendMode !== 0) {
      writer.uint32(48).int32(message.blendMode);
    }
    if (message.opacity !== 0) {
      writer.uint32(57).double(message.opacity);
    }
    if (message.selectedTargetSetUuid !== undefined) {
      UUID.encode(message.selectedTargetSetUuid, writer.uint32(66).fork()).ldelim();
    }
    if (message.effectsPresetUuid !== undefined) {
      UUID.encode(message.effectsPresetUuid, writer.uint32(74).fork()).ldelim();
    }
    if (message.effectsBuildDuration !== 0) {
      writer.uint32(81).double(message.effectsBuildDuration);
    }
    if (message.layerPresetUuid !== undefined) {
      UUID.encode(message.layerPresetUuid, writer.uint32(90).fork()).ldelim();
    }
    if (message.hotKey !== undefined) {
      HotKey.encode(message.hotKey, writer.uint32(98).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.blend !== undefined) {
      Layer_Blending.encode(message.blend, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer();
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
          if (tag != 32) {
            break;
          }

          message.muted = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.blendMode = reader.int32() as any;
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.opacity = reader.double();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.selectedTargetSetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.effectsPresetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 81) {
            break;
          }

          message.effectsBuildDuration = reader.double();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.layerPresetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.hotKey = HotKey.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag != 122) {
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

  fromJSON(object: any): Layer {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      blendMode: isSet(object.blendMode) ? layer_BlendModeFromJSON(object.blendMode) : 0,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
      selectedTargetSetUuid: isSet(object.selectedTargetSetUuid)
        ? UUID.fromJSON(object.selectedTargetSetUuid)
        : undefined,
      effectsPresetUuid: isSet(object.effectsPresetUuid) ? UUID.fromJSON(object.effectsPresetUuid) : undefined,
      effectsBuildDuration: isSet(object.effectsBuildDuration) ? Number(object.effectsBuildDuration) : 0,
      layerPresetUuid: isSet(object.layerPresetUuid) ? UUID.fromJSON(object.layerPresetUuid) : undefined,
      hotKey: isSet(object.hotKey) ? HotKey.fromJSON(object.hotKey) : undefined,
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
      effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [],
      blend: isSet(object.blend) ? Layer_Blending.fromJSON(object.blend) : undefined,
    };
  },

  toJSON(message: Layer): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.muted !== undefined && (obj.muted = message.muted);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.blendMode !== undefined && (obj.blendMode = layer_BlendModeToJSON(message.blendMode));
    message.opacity !== undefined && (obj.opacity = message.opacity);
    message.selectedTargetSetUuid !== undefined && (obj.selectedTargetSetUuid = message.selectedTargetSetUuid
      ? UUID.toJSON(message.selectedTargetSetUuid)
      : undefined);
    message.effectsPresetUuid !== undefined &&
      (obj.effectsPresetUuid = message.effectsPresetUuid ? UUID.toJSON(message.effectsPresetUuid) : undefined);
    message.effectsBuildDuration !== undefined && (obj.effectsBuildDuration = message.effectsBuildDuration);
    message.layerPresetUuid !== undefined &&
      (obj.layerPresetUuid = message.layerPresetUuid ? UUID.toJSON(message.layerPresetUuid) : undefined);
    message.hotKey !== undefined && (obj.hotKey = message.hotKey ? HotKey.toJSON(message.hotKey) : undefined);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    message.blend !== undefined && (obj.blend = message.blend ? Layer_Blending.toJSON(message.blend) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer>, I>>(base?: I): Layer {
    return Layer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer>, I>>(object: I): Layer {
    const message = createBaseLayer();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.muted = object.muted ?? false;
    message.hidden = object.hidden ?? false;
    message.blendMode = object.blendMode ?? 0;
    message.opacity = object.opacity ?? 0;
    message.selectedTargetSetUuid =
      (object.selectedTargetSetUuid !== undefined && object.selectedTargetSetUuid !== null)
        ? UUID.fromPartial(object.selectedTargetSetUuid)
        : undefined;
    message.effectsPresetUuid = (object.effectsPresetUuid !== undefined && object.effectsPresetUuid !== null)
      ? UUID.fromPartial(object.effectsPresetUuid)
      : undefined;
    message.effectsBuildDuration = object.effectsBuildDuration ?? 0;
    message.layerPresetUuid = (object.layerPresetUuid !== undefined && object.layerPresetUuid !== null)
      ? UUID.fromPartial(object.layerPresetUuid)
      : undefined;
    message.hotKey = (object.hotKey !== undefined && object.hotKey !== null)
      ? HotKey.fromPartial(object.hotKey)
      : undefined;
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
      : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.blend = (object.blend !== undefined && object.blend !== null)
      ? Layer_Blending.fromPartial(object.blend)
      : undefined;
    return message;
  },
};

function createBaseLayer_Preset(): Layer_Preset {
  return { uuid: undefined, name: "", layer: undefined };
}

export const Layer_Preset = {
  encode(message: Layer_Preset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.layer !== undefined) {
      Layer.encode(message.layer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Preset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Preset();
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

          message.layer = Layer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Preset {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      layer: isSet(object.layer) ? Layer.fromJSON(object.layer) : undefined,
    };
  },

  toJSON(message: Layer_Preset): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.layer !== undefined && (obj.layer = message.layer ? Layer.toJSON(message.layer) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Preset>, I>>(base?: I): Layer_Preset {
    return Layer_Preset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Preset>, I>>(object: I): Layer_Preset {
    const message = createBaseLayer_Preset();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.layer = (object.layer !== undefined && object.layer !== null) ? Layer.fromPartial(object.layer) : undefined;
    return message;
  },
};

function createBaseLayer_Blending(): Layer_Blending {
  return { standard: undefined, matte: undefined };
}

export const Layer_Blending = {
  encode(message: Layer_Blending, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.standard !== undefined) {
      Layer_Blending_Standard.encode(message.standard, writer.uint32(10).fork()).ldelim();
    }
    if (message.matte !== undefined) {
      Layer_Blending_Matte.encode(message.matte, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.standard = Layer_Blending_Standard.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.matte = Layer_Blending_Matte.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Blending {
    return {
      standard: isSet(object.standard) ? Layer_Blending_Standard.fromJSON(object.standard) : undefined,
      matte: isSet(object.matte) ? Layer_Blending_Matte.fromJSON(object.matte) : undefined,
    };
  },

  toJSON(message: Layer_Blending): unknown {
    const obj: any = {};
    message.standard !== undefined &&
      (obj.standard = message.standard ? Layer_Blending_Standard.toJSON(message.standard) : undefined);
    message.matte !== undefined && (obj.matte = message.matte ? Layer_Blending_Matte.toJSON(message.matte) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending>, I>>(base?: I): Layer_Blending {
    return Layer_Blending.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending>, I>>(object: I): Layer_Blending {
    const message = createBaseLayer_Blending();
    message.standard = (object.standard !== undefined && object.standard !== null)
      ? Layer_Blending_Standard.fromPartial(object.standard)
      : undefined;
    message.matte = (object.matte !== undefined && object.matte !== null)
      ? Layer_Blending_Matte.fromPartial(object.matte)
      : undefined;
    return message;
  },
};

function createBaseLayer_Blending_Standard(): Layer_Blending_Standard {
  return { mode: 0, opacity: 0 };
}

export const Layer_Blending_Standard = {
  encode(message: Layer_Blending_Standard, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.opacity !== 0) {
      writer.uint32(17).double(message.opacity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending_Standard {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending_Standard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.mode = reader.int32() as any;
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.opacity = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Blending_Standard {
    return {
      mode: isSet(object.mode) ? layer_Blending_Standard_BlendModeFromJSON(object.mode) : 0,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
    };
  },

  toJSON(message: Layer_Blending_Standard): unknown {
    const obj: any = {};
    message.mode !== undefined && (obj.mode = layer_Blending_Standard_BlendModeToJSON(message.mode));
    message.opacity !== undefined && (obj.opacity = message.opacity);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending_Standard>, I>>(base?: I): Layer_Blending_Standard {
    return Layer_Blending_Standard.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending_Standard>, I>>(object: I): Layer_Blending_Standard {
    const message = createBaseLayer_Blending_Standard();
    message.mode = object.mode ?? 0;
    message.opacity = object.opacity ?? 0;
    return message;
  },
};

function createBaseLayer_Blending_Matte(): Layer_Blending_Matte {
  return { alpha: undefined, luma: undefined, white: undefined };
}

export const Layer_Blending_Matte = {
  encode(message: Layer_Blending_Matte, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alpha !== undefined) {
      Layer_Blending_Matte_Alpha.encode(message.alpha, writer.uint32(10).fork()).ldelim();
    }
    if (message.luma !== undefined) {
      Layer_Blending_Matte_Luma.encode(message.luma, writer.uint32(18).fork()).ldelim();
    }
    if (message.white !== undefined) {
      Layer_Blending_Matte_White.encode(message.white, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending_Matte {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending_Matte();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.alpha = Layer_Blending_Matte_Alpha.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.luma = Layer_Blending_Matte_Luma.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.white = Layer_Blending_Matte_White.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Blending_Matte {
    return {
      alpha: isSet(object.alpha) ? Layer_Blending_Matte_Alpha.fromJSON(object.alpha) : undefined,
      luma: isSet(object.luma) ? Layer_Blending_Matte_Luma.fromJSON(object.luma) : undefined,
      white: isSet(object.white) ? Layer_Blending_Matte_White.fromJSON(object.white) : undefined,
    };
  },

  toJSON(message: Layer_Blending_Matte): unknown {
    const obj: any = {};
    message.alpha !== undefined &&
      (obj.alpha = message.alpha ? Layer_Blending_Matte_Alpha.toJSON(message.alpha) : undefined);
    message.luma !== undefined &&
      (obj.luma = message.luma ? Layer_Blending_Matte_Luma.toJSON(message.luma) : undefined);
    message.white !== undefined &&
      (obj.white = message.white ? Layer_Blending_Matte_White.toJSON(message.white) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending_Matte>, I>>(base?: I): Layer_Blending_Matte {
    return Layer_Blending_Matte.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending_Matte>, I>>(object: I): Layer_Blending_Matte {
    const message = createBaseLayer_Blending_Matte();
    message.alpha = (object.alpha !== undefined && object.alpha !== null)
      ? Layer_Blending_Matte_Alpha.fromPartial(object.alpha)
      : undefined;
    message.luma = (object.luma !== undefined && object.luma !== null)
      ? Layer_Blending_Matte_Luma.fromPartial(object.luma)
      : undefined;
    message.white = (object.white !== undefined && object.white !== null)
      ? Layer_Blending_Matte_White.fromPartial(object.white)
      : undefined;
    return message;
  },
};

function createBaseLayer_Blending_Matte_Alpha(): Layer_Blending_Matte_Alpha {
  return { inverted: false };
}

export const Layer_Blending_Matte_Alpha = {
  encode(message: Layer_Blending_Matte_Alpha, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inverted === true) {
      writer.uint32(8).bool(message.inverted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending_Matte_Alpha {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending_Matte_Alpha();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inverted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Blending_Matte_Alpha {
    return { inverted: isSet(object.inverted) ? Boolean(object.inverted) : false };
  },

  toJSON(message: Layer_Blending_Matte_Alpha): unknown {
    const obj: any = {};
    message.inverted !== undefined && (obj.inverted = message.inverted);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending_Matte_Alpha>, I>>(base?: I): Layer_Blending_Matte_Alpha {
    return Layer_Blending_Matte_Alpha.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending_Matte_Alpha>, I>>(object: I): Layer_Blending_Matte_Alpha {
    const message = createBaseLayer_Blending_Matte_Alpha();
    message.inverted = object.inverted ?? false;
    return message;
  },
};

function createBaseLayer_Blending_Matte_Luma(): Layer_Blending_Matte_Luma {
  return { inverted: false };
}

export const Layer_Blending_Matte_Luma = {
  encode(message: Layer_Blending_Matte_Luma, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inverted === true) {
      writer.uint32(8).bool(message.inverted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending_Matte_Luma {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending_Matte_Luma();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.inverted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Layer_Blending_Matte_Luma {
    return { inverted: isSet(object.inverted) ? Boolean(object.inverted) : false };
  },

  toJSON(message: Layer_Blending_Matte_Luma): unknown {
    const obj: any = {};
    message.inverted !== undefined && (obj.inverted = message.inverted);
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending_Matte_Luma>, I>>(base?: I): Layer_Blending_Matte_Luma {
    return Layer_Blending_Matte_Luma.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending_Matte_Luma>, I>>(object: I): Layer_Blending_Matte_Luma {
    const message = createBaseLayer_Blending_Matte_Luma();
    message.inverted = object.inverted ?? false;
    return message;
  },
};

function createBaseLayer_Blending_Matte_White(): Layer_Blending_Matte_White {
  return {};
}

export const Layer_Blending_Matte_White = {
  encode(_: Layer_Blending_Matte_White, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer_Blending_Matte_White {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer_Blending_Matte_White();
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

  fromJSON(_: any): Layer_Blending_Matte_White {
    return {};
  },

  toJSON(_: Layer_Blending_Matte_White): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Layer_Blending_Matte_White>, I>>(base?: I): Layer_Blending_Matte_White {
    return Layer_Blending_Matte_White.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Layer_Blending_Matte_White>, I>>(_: I): Layer_Blending_Matte_White {
    const message = createBaseLayer_Blending_Matte_White();
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
