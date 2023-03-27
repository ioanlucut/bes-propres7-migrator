/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Color, UUID } from "./basicTypes";

export const protobufPackage = "rv.data";

export interface Effect {
  uuid: UUID | undefined;
  enabled: boolean;
  name: string;
  renderId: string;
  behaviorDescription: string;
  category: string;
  variables: Effect_EffectVariable[];
}

export interface Effect_EffectVariable {
  name: string;
  description: string;
  int?: Effect_EffectVariable_EffectInt | undefined;
  float?: Effect_EffectVariable_EffectFloat | undefined;
  color?: Effect_EffectVariable_EffectColor | undefined;
  direction?: Effect_EffectVariable_EffectDirection | undefined;
  double?: Effect_EffectVariable_EffectDouble | undefined;
}

export interface Effect_EffectVariable_EffectInt {
  value: number;
  defaultValue: number;
  min: number;
  max: number;
}

export interface Effect_EffectVariable_EffectFloat {
  value: number;
  defaultValue: number;
  min: number;
  max: number;
}

export interface Effect_EffectVariable_EffectDouble {
  value: number;
  defaultValue: number;
  min: number;
  max: number;
}

export interface Effect_EffectVariable_EffectColor {
  color: Color | undefined;
  defaultColor: Color | undefined;
}

export interface Effect_EffectVariable_EffectDirection {
  direction: Effect_EffectVariable_EffectDirection_EffectDirection;
  defaultDirection: Effect_EffectVariable_EffectDirection_EffectDirection;
  availableDirections: number;
}

export enum Effect_EffectVariable_EffectDirection_EffectDirection {
  EFFECT_DIRECTION_NONE = 0,
  EFFECT_DIRECTION_TOP_LEFT = 1,
  EFFECT_DIRECTION_TOP = 2,
  EFFECT_DIRECTION_TOP_RIGHT = 4,
  EFFECT_DIRECTION_LEFT = 8,
  EFFECT_DIRECTION_CENTER = 16,
  EFFECT_DIRECTION_RIGHT = 32,
  EFFECT_DIRECTION_BOTTOM_LEFT = 64,
  EFFECT_DIRECTION_BOTTOM = 128,
  EFFECT_DIRECTION_BOTTOM_RIGHT = 256,
  UNRECOGNIZED = -1,
}

export function effect_EffectVariable_EffectDirection_EffectDirectionFromJSON(
  object: any,
): Effect_EffectVariable_EffectDirection_EffectDirection {
  switch (object) {
    case 0:
    case "EFFECT_DIRECTION_NONE":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_NONE;
    case 1:
    case "EFFECT_DIRECTION_TOP_LEFT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP_LEFT;
    case 2:
    case "EFFECT_DIRECTION_TOP":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP;
    case 4:
    case "EFFECT_DIRECTION_TOP_RIGHT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP_RIGHT;
    case 8:
    case "EFFECT_DIRECTION_LEFT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_LEFT;
    case 16:
    case "EFFECT_DIRECTION_CENTER":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_CENTER;
    case 32:
    case "EFFECT_DIRECTION_RIGHT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_RIGHT;
    case 64:
    case "EFFECT_DIRECTION_BOTTOM_LEFT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM_LEFT;
    case 128:
    case "EFFECT_DIRECTION_BOTTOM":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM;
    case 256:
    case "EFFECT_DIRECTION_BOTTOM_RIGHT":
      return Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM_RIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Effect_EffectVariable_EffectDirection_EffectDirection.UNRECOGNIZED;
  }
}

export function effect_EffectVariable_EffectDirection_EffectDirectionToJSON(
  object: Effect_EffectVariable_EffectDirection_EffectDirection,
): string {
  switch (object) {
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_NONE:
      return "EFFECT_DIRECTION_NONE";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP_LEFT:
      return "EFFECT_DIRECTION_TOP_LEFT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP:
      return "EFFECT_DIRECTION_TOP";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_TOP_RIGHT:
      return "EFFECT_DIRECTION_TOP_RIGHT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_LEFT:
      return "EFFECT_DIRECTION_LEFT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_CENTER:
      return "EFFECT_DIRECTION_CENTER";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_RIGHT:
      return "EFFECT_DIRECTION_RIGHT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM_LEFT:
      return "EFFECT_DIRECTION_BOTTOM_LEFT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM:
      return "EFFECT_DIRECTION_BOTTOM";
    case Effect_EffectVariable_EffectDirection_EffectDirection.EFFECT_DIRECTION_BOTTOM_RIGHT:
      return "EFFECT_DIRECTION_BOTTOM_RIGHT";
    case Effect_EffectVariable_EffectDirection_EffectDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Effect_Preset {
  uuid: UUID | undefined;
  name: string;
  effects: Effect[];
}

export interface Transition {
  duration: number;
  favoriteUuid: UUID | undefined;
  effect: Effect | undefined;
}

export interface Transition_Preset {
  uuid: UUID | undefined;
  name: string;
  transition: Transition | undefined;
}

function createBaseEffect(): Effect {
  return {
    uuid: undefined,
    enabled: false,
    name: "",
    renderId: "",
    behaviorDescription: "",
    category: "",
    variables: [],
  };
}

export const Effect = {
  encode(message: Effect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.renderId !== "") {
      writer.uint32(34).string(message.renderId);
    }
    if (message.behaviorDescription !== "") {
      writer.uint32(42).string(message.behaviorDescription);
    }
    if (message.category !== "") {
      writer.uint32(50).string(message.category);
    }
    for (const v of message.variables) {
      Effect_EffectVariable.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect();
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

          message.enabled = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.renderId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.behaviorDescription = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.category = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.variables.push(Effect_EffectVariable.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      name: isSet(object.name) ? String(object.name) : "",
      renderId: isSet(object.renderId) ? String(object.renderId) : "",
      behaviorDescription: isSet(object.behaviorDescription) ? String(object.behaviorDescription) : "",
      category: isSet(object.category) ? String(object.category) : "",
      variables: Array.isArray(object?.variables)
        ? object.variables.map((e: any) => Effect_EffectVariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Effect): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.name !== undefined && (obj.name = message.name);
    message.renderId !== undefined && (obj.renderId = message.renderId);
    message.behaviorDescription !== undefined && (obj.behaviorDescription = message.behaviorDescription);
    message.category !== undefined && (obj.category = message.category);
    if (message.variables) {
      obj.variables = message.variables.map((e) => e ? Effect_EffectVariable.toJSON(e) : undefined);
    } else {
      obj.variables = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect>, I>>(base?: I): Effect {
    return Effect.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect>, I>>(object: I): Effect {
    const message = createBaseEffect();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.enabled = object.enabled ?? false;
    message.name = object.name ?? "";
    message.renderId = object.renderId ?? "";
    message.behaviorDescription = object.behaviorDescription ?? "";
    message.category = object.category ?? "";
    message.variables = object.variables?.map((e) => Effect_EffectVariable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEffect_EffectVariable(): Effect_EffectVariable {
  return {
    name: "",
    description: "",
    int: undefined,
    float: undefined,
    color: undefined,
    direction: undefined,
    double: undefined,
  };
}

export const Effect_EffectVariable = {
  encode(message: Effect_EffectVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.int !== undefined) {
      Effect_EffectVariable_EffectInt.encode(message.int, writer.uint32(26).fork()).ldelim();
    }
    if (message.float !== undefined) {
      Effect_EffectVariable_EffectFloat.encode(message.float, writer.uint32(34).fork()).ldelim();
    }
    if (message.color !== undefined) {
      Effect_EffectVariable_EffectColor.encode(message.color, writer.uint32(42).fork()).ldelim();
    }
    if (message.direction !== undefined) {
      Effect_EffectVariable_EffectDirection.encode(message.direction, writer.uint32(50).fork()).ldelim();
    }
    if (message.double !== undefined) {
      Effect_EffectVariable_EffectDouble.encode(message.double, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.int = Effect_EffectVariable_EffectInt.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.float = Effect_EffectVariable_EffectFloat.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.color = Effect_EffectVariable_EffectColor.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.direction = Effect_EffectVariable_EffectDirection.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.double = Effect_EffectVariable_EffectDouble.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      int: isSet(object.int) ? Effect_EffectVariable_EffectInt.fromJSON(object.int) : undefined,
      float: isSet(object.float) ? Effect_EffectVariable_EffectFloat.fromJSON(object.float) : undefined,
      color: isSet(object.color) ? Effect_EffectVariable_EffectColor.fromJSON(object.color) : undefined,
      direction: isSet(object.direction) ? Effect_EffectVariable_EffectDirection.fromJSON(object.direction) : undefined,
      double: isSet(object.double) ? Effect_EffectVariable_EffectDouble.fromJSON(object.double) : undefined,
    };
  },

  toJSON(message: Effect_EffectVariable): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.int !== undefined &&
      (obj.int = message.int ? Effect_EffectVariable_EffectInt.toJSON(message.int) : undefined);
    message.float !== undefined &&
      (obj.float = message.float ? Effect_EffectVariable_EffectFloat.toJSON(message.float) : undefined);
    message.color !== undefined &&
      (obj.color = message.color ? Effect_EffectVariable_EffectColor.toJSON(message.color) : undefined);
    message.direction !== undefined &&
      (obj.direction = message.direction ? Effect_EffectVariable_EffectDirection.toJSON(message.direction) : undefined);
    message.double !== undefined &&
      (obj.double = message.double ? Effect_EffectVariable_EffectDouble.toJSON(message.double) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable>, I>>(base?: I): Effect_EffectVariable {
    return Effect_EffectVariable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable>, I>>(object: I): Effect_EffectVariable {
    const message = createBaseEffect_EffectVariable();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.int = (object.int !== undefined && object.int !== null)
      ? Effect_EffectVariable_EffectInt.fromPartial(object.int)
      : undefined;
    message.float = (object.float !== undefined && object.float !== null)
      ? Effect_EffectVariable_EffectFloat.fromPartial(object.float)
      : undefined;
    message.color = (object.color !== undefined && object.color !== null)
      ? Effect_EffectVariable_EffectColor.fromPartial(object.color)
      : undefined;
    message.direction = (object.direction !== undefined && object.direction !== null)
      ? Effect_EffectVariable_EffectDirection.fromPartial(object.direction)
      : undefined;
    message.double = (object.double !== undefined && object.double !== null)
      ? Effect_EffectVariable_EffectDouble.fromPartial(object.double)
      : undefined;
    return message;
  },
};

function createBaseEffect_EffectVariable_EffectInt(): Effect_EffectVariable_EffectInt {
  return { value: 0, defaultValue: 0, min: 0, max: 0 };
}

export const Effect_EffectVariable_EffectInt = {
  encode(message: Effect_EffectVariable_EffectInt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    if (message.defaultValue !== 0) {
      writer.uint32(16).int32(message.defaultValue);
    }
    if (message.min !== 0) {
      writer.uint32(24).int32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(32).int32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable_EffectInt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable_EffectInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.value = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.defaultValue = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.min = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.max = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable_EffectInt {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : 0,
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0,
    };
  },

  toJSON(message: Effect_EffectVariable_EffectInt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.defaultValue !== undefined && (obj.defaultValue = Math.round(message.defaultValue));
    message.min !== undefined && (obj.min = Math.round(message.min));
    message.max !== undefined && (obj.max = Math.round(message.max));
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable_EffectInt>, I>>(base?: I): Effect_EffectVariable_EffectInt {
    return Effect_EffectVariable_EffectInt.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable_EffectInt>, I>>(
    object: I,
  ): Effect_EffectVariable_EffectInt {
    const message = createBaseEffect_EffectVariable_EffectInt();
    message.value = object.value ?? 0;
    message.defaultValue = object.defaultValue ?? 0;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseEffect_EffectVariable_EffectFloat(): Effect_EffectVariable_EffectFloat {
  return { value: 0, defaultValue: 0, min: 0, max: 0 };
}

export const Effect_EffectVariable_EffectFloat = {
  encode(message: Effect_EffectVariable_EffectFloat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }
    if (message.defaultValue !== 0) {
      writer.uint32(21).float(message.defaultValue);
    }
    if (message.min !== 0) {
      writer.uint32(29).float(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(37).float(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable_EffectFloat {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable_EffectFloat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.value = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.defaultValue = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.min = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.max = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable_EffectFloat {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : 0,
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0,
    };
  },

  toJSON(message: Effect_EffectVariable_EffectFloat): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable_EffectFloat>, I>>(
    base?: I,
  ): Effect_EffectVariable_EffectFloat {
    return Effect_EffectVariable_EffectFloat.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable_EffectFloat>, I>>(
    object: I,
  ): Effect_EffectVariable_EffectFloat {
    const message = createBaseEffect_EffectVariable_EffectFloat();
    message.value = object.value ?? 0;
    message.defaultValue = object.defaultValue ?? 0;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseEffect_EffectVariable_EffectDouble(): Effect_EffectVariable_EffectDouble {
  return { value: 0, defaultValue: 0, min: 0, max: 0 };
}

export const Effect_EffectVariable_EffectDouble = {
  encode(message: Effect_EffectVariable_EffectDouble, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.defaultValue !== 0) {
      writer.uint32(17).double(message.defaultValue);
    }
    if (message.min !== 0) {
      writer.uint32(25).double(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(33).double(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable_EffectDouble {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable_EffectDouble();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.value = reader.double();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.defaultValue = reader.double();
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.min = reader.double();
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.max = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable_EffectDouble {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      defaultValue: isSet(object.defaultValue) ? Number(object.defaultValue) : 0,
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0,
    };
  },

  toJSON(message: Effect_EffectVariable_EffectDouble): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable_EffectDouble>, I>>(
    base?: I,
  ): Effect_EffectVariable_EffectDouble {
    return Effect_EffectVariable_EffectDouble.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable_EffectDouble>, I>>(
    object: I,
  ): Effect_EffectVariable_EffectDouble {
    const message = createBaseEffect_EffectVariable_EffectDouble();
    message.value = object.value ?? 0;
    message.defaultValue = object.defaultValue ?? 0;
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseEffect_EffectVariable_EffectColor(): Effect_EffectVariable_EffectColor {
  return { color: undefined, defaultColor: undefined };
}

export const Effect_EffectVariable_EffectColor = {
  encode(message: Effect_EffectVariable_EffectColor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultColor !== undefined) {
      Color.encode(message.defaultColor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable_EffectColor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable_EffectColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.defaultColor = Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable_EffectColor {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      defaultColor: isSet(object.defaultColor) ? Color.fromJSON(object.defaultColor) : undefined,
    };
  },

  toJSON(message: Effect_EffectVariable_EffectColor): unknown {
    const obj: any = {};
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.defaultColor !== undefined &&
      (obj.defaultColor = message.defaultColor ? Color.toJSON(message.defaultColor) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable_EffectColor>, I>>(
    base?: I,
  ): Effect_EffectVariable_EffectColor {
    return Effect_EffectVariable_EffectColor.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable_EffectColor>, I>>(
    object: I,
  ): Effect_EffectVariable_EffectColor {
    const message = createBaseEffect_EffectVariable_EffectColor();
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.defaultColor = (object.defaultColor !== undefined && object.defaultColor !== null)
      ? Color.fromPartial(object.defaultColor)
      : undefined;
    return message;
  },
};

function createBaseEffect_EffectVariable_EffectDirection(): Effect_EffectVariable_EffectDirection {
  return { direction: 0, defaultDirection: 0, availableDirections: 0 };
}

export const Effect_EffectVariable_EffectDirection = {
  encode(message: Effect_EffectVariable_EffectDirection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.direction !== 0) {
      writer.uint32(8).int32(message.direction);
    }
    if (message.defaultDirection !== 0) {
      writer.uint32(16).int32(message.defaultDirection);
    }
    if (message.availableDirections !== 0) {
      writer.uint32(24).uint32(message.availableDirections);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_EffectVariable_EffectDirection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_EffectVariable_EffectDirection();
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

          message.defaultDirection = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.availableDirections = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Effect_EffectVariable_EffectDirection {
    return {
      direction: isSet(object.direction)
        ? effect_EffectVariable_EffectDirection_EffectDirectionFromJSON(object.direction)
        : 0,
      defaultDirection: isSet(object.defaultDirection)
        ? effect_EffectVariable_EffectDirection_EffectDirectionFromJSON(object.defaultDirection)
        : 0,
      availableDirections: isSet(object.availableDirections) ? Number(object.availableDirections) : 0,
    };
  },

  toJSON(message: Effect_EffectVariable_EffectDirection): unknown {
    const obj: any = {};
    message.direction !== undefined &&
      (obj.direction = effect_EffectVariable_EffectDirection_EffectDirectionToJSON(message.direction));
    message.defaultDirection !== undefined &&
      (obj.defaultDirection = effect_EffectVariable_EffectDirection_EffectDirectionToJSON(message.defaultDirection));
    message.availableDirections !== undefined && (obj.availableDirections = Math.round(message.availableDirections));
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_EffectVariable_EffectDirection>, I>>(
    base?: I,
  ): Effect_EffectVariable_EffectDirection {
    return Effect_EffectVariable_EffectDirection.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_EffectVariable_EffectDirection>, I>>(
    object: I,
  ): Effect_EffectVariable_EffectDirection {
    const message = createBaseEffect_EffectVariable_EffectDirection();
    message.direction = object.direction ?? 0;
    message.defaultDirection = object.defaultDirection ?? 0;
    message.availableDirections = object.availableDirections ?? 0;
    return message;
  },
};

function createBaseEffect_Preset(): Effect_Preset {
  return { uuid: undefined, name: "", effects: [] };
}

export const Effect_Preset = {
  encode(message: Effect_Preset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect_Preset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect_Preset();
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

  fromJSON(object: any): Effect_Preset {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      effects: Array.isArray(object?.effects) ? object.effects.map((e: any) => Effect.fromJSON(e)) : [],
    };
  },

  toJSON(message: Effect_Preset): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.effects) {
      obj.effects = message.effects.map((e) => e ? Effect.toJSON(e) : undefined);
    } else {
      obj.effects = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Effect_Preset>, I>>(base?: I): Effect_Preset {
    return Effect_Preset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Effect_Preset>, I>>(object: I): Effect_Preset {
    const message = createBaseEffect_Preset();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransition(): Transition {
  return { duration: 0, favoriteUuid: undefined, effect: undefined };
}

export const Transition = {
  encode(message: Transition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== 0) {
      writer.uint32(9).double(message.duration);
    }
    if (message.favoriteUuid !== undefined) {
      UUID.encode(message.favoriteUuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.effect !== undefined) {
      Effect.encode(message.effect, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.duration = reader.double();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.favoriteUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.effect = Effect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transition {
    return {
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      favoriteUuid: isSet(object.favoriteUuid) ? UUID.fromJSON(object.favoriteUuid) : undefined,
      effect: isSet(object.effect) ? Effect.fromJSON(object.effect) : undefined,
    };
  },

  toJSON(message: Transition): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = message.duration);
    message.favoriteUuid !== undefined &&
      (obj.favoriteUuid = message.favoriteUuid ? UUID.toJSON(message.favoriteUuid) : undefined);
    message.effect !== undefined && (obj.effect = message.effect ? Effect.toJSON(message.effect) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Transition>, I>>(base?: I): Transition {
    return Transition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transition>, I>>(object: I): Transition {
    const message = createBaseTransition();
    message.duration = object.duration ?? 0;
    message.favoriteUuid = (object.favoriteUuid !== undefined && object.favoriteUuid !== null)
      ? UUID.fromPartial(object.favoriteUuid)
      : undefined;
    message.effect = (object.effect !== undefined && object.effect !== null)
      ? Effect.fromPartial(object.effect)
      : undefined;
    return message;
  },
};

function createBaseTransition_Preset(): Transition_Preset {
  return { uuid: undefined, name: "", transition: undefined };
}

export const Transition_Preset = {
  encode(message: Transition_Preset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transition_Preset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransition_Preset();
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

  fromJSON(object: any): Transition_Preset {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      transition: isSet(object.transition) ? Transition.fromJSON(object.transition) : undefined,
    };
  },

  toJSON(message: Transition_Preset): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.transition !== undefined &&
      (obj.transition = message.transition ? Transition.toJSON(message.transition) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Transition_Preset>, I>>(base?: I): Transition_Preset {
    return Transition_Preset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transition_Preset>, I>>(object: I): Transition_Preset {
    const message = createBaseTransition_Preset();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.transition = (object.transition !== undefined && object.transition !== null)
      ? Transition.fromPartial(object.transition)
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
