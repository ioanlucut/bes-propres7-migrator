/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Graphics_BackgroundEffect, Graphics_Text_CutOutFill, Media } from "./graphicsData";

export const protobufPackage = "rv.data";

export interface IdentificationOverlay {
  screenName: string;
  outputs: IdentificationOverlay_Output[];
}

export interface IdentificationOverlay_Output {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  frameRate: number;
}

export interface LayerIdentificationOverlay {
  layer: LayerIdentificationOverlay_Layer;
  layerName: string;
}

export enum LayerIdentificationOverlay_Layer {
  LAYER_VIDEO_INPUT = 0,
  LAYER_MEDIA = 1,
  LAYER_PRESENTATION = 2,
  LAYER_ANNOUNCEMENTS = 3,
  LAYER_PROPS = 4,
  LAYER_MESSAGES = 5,
  UNRECOGNIZED = -1,
}

export function layerIdentificationOverlay_LayerFromJSON(object: any): LayerIdentificationOverlay_Layer {
  switch (object) {
    case 0:
    case "LAYER_VIDEO_INPUT":
      return LayerIdentificationOverlay_Layer.LAYER_VIDEO_INPUT;
    case 1:
    case "LAYER_MEDIA":
      return LayerIdentificationOverlay_Layer.LAYER_MEDIA;
    case 2:
    case "LAYER_PRESENTATION":
      return LayerIdentificationOverlay_Layer.LAYER_PRESENTATION;
    case 3:
    case "LAYER_ANNOUNCEMENTS":
      return LayerIdentificationOverlay_Layer.LAYER_ANNOUNCEMENTS;
    case 4:
    case "LAYER_PROPS":
      return LayerIdentificationOverlay_Layer.LAYER_PROPS;
    case 5:
    case "LAYER_MESSAGES":
      return LayerIdentificationOverlay_Layer.LAYER_MESSAGES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LayerIdentificationOverlay_Layer.UNRECOGNIZED;
  }
}

export function layerIdentificationOverlay_LayerToJSON(object: LayerIdentificationOverlay_Layer): string {
  switch (object) {
    case LayerIdentificationOverlay_Layer.LAYER_VIDEO_INPUT:
      return "LAYER_VIDEO_INPUT";
    case LayerIdentificationOverlay_Layer.LAYER_MEDIA:
      return "LAYER_MEDIA";
    case LayerIdentificationOverlay_Layer.LAYER_PRESENTATION:
      return "LAYER_PRESENTATION";
    case LayerIdentificationOverlay_Layer.LAYER_ANNOUNCEMENTS:
      return "LAYER_ANNOUNCEMENTS";
    case LayerIdentificationOverlay_Layer.LAYER_PROPS:
      return "LAYER_PROPS";
    case LayerIdentificationOverlay_Layer.LAYER_MESSAGES:
      return "LAYER_MESSAGES";
    case LayerIdentificationOverlay_Layer.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TextLayer {
  composite?: TextLayer_Composite | undefined;
  media?: Media | undefined;
  cutOut?: Graphics_Text_CutOutFill | undefined;
  backgroundEffect?: Graphics_BackgroundEffect | undefined;
}

export interface TextLayer_Composite {
}

function createBaseIdentificationOverlay(): IdentificationOverlay {
  return { screenName: "", outputs: [] };
}

export const IdentificationOverlay = {
  encode(message: IdentificationOverlay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.screenName !== "") {
      writer.uint32(26).string(message.screenName);
    }
    for (const v of message.outputs) {
      IdentificationOverlay_Output.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentificationOverlay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentificationOverlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.screenName = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputs.push(IdentificationOverlay_Output.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IdentificationOverlay {
    return {
      screenName: isSet(object.screenName) ? globalThis.String(object.screenName) : "",
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => IdentificationOverlay_Output.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IdentificationOverlay): unknown {
    const obj: any = {};
    if (message.screenName !== "") {
      obj.screenName = message.screenName;
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) => IdentificationOverlay_Output.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IdentificationOverlay>, I>>(base?: I): IdentificationOverlay {
    return IdentificationOverlay.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IdentificationOverlay>, I>>(object: I): IdentificationOverlay {
    const message = createBaseIdentificationOverlay();
    message.screenName = object.screenName ?? "";
    message.outputs = object.outputs?.map((e) => IdentificationOverlay_Output.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIdentificationOverlay_Output(): IdentificationOverlay_Output {
  return { x: 0, y: 0, width: 0, height: 0, name: "", frameRate: 0 };
}

export const IdentificationOverlay_Output = {
  encode(message: IdentificationOverlay_Output, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.frameRate !== 0) {
      writer.uint32(49).double(message.frameRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentificationOverlay_Output {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentificationOverlay_Output();
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

  fromJSON(object: any): IdentificationOverlay_Output {
    return {
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      frameRate: isSet(object.frameRate) ? globalThis.Number(object.frameRate) : 0,
    };
  },

  toJSON(message: IdentificationOverlay_Output): unknown {
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
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IdentificationOverlay_Output>, I>>(base?: I): IdentificationOverlay_Output {
    return IdentificationOverlay_Output.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IdentificationOverlay_Output>, I>>(object: I): IdentificationOverlay_Output {
    const message = createBaseIdentificationOverlay_Output();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    message.name = object.name ?? "";
    message.frameRate = object.frameRate ?? 0;
    return message;
  },
};

function createBaseLayerIdentificationOverlay(): LayerIdentificationOverlay {
  return { layer: 0, layerName: "" };
}

export const LayerIdentificationOverlay = {
  encode(message: LayerIdentificationOverlay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.layerName !== "") {
      writer.uint32(18).string(message.layerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerIdentificationOverlay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerIdentificationOverlay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.layerName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LayerIdentificationOverlay {
    return {
      layer: isSet(object.layer) ? layerIdentificationOverlay_LayerFromJSON(object.layer) : 0,
      layerName: isSet(object.layerName) ? globalThis.String(object.layerName) : "",
    };
  },

  toJSON(message: LayerIdentificationOverlay): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = layerIdentificationOverlay_LayerToJSON(message.layer);
    }
    if (message.layerName !== "") {
      obj.layerName = message.layerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LayerIdentificationOverlay>, I>>(base?: I): LayerIdentificationOverlay {
    return LayerIdentificationOverlay.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LayerIdentificationOverlay>, I>>(object: I): LayerIdentificationOverlay {
    const message = createBaseLayerIdentificationOverlay();
    message.layer = object.layer ?? 0;
    message.layerName = object.layerName ?? "";
    return message;
  },
};

function createBaseTextLayer(): TextLayer {
  return { composite: undefined, media: undefined, cutOut: undefined, backgroundEffect: undefined };
}

export const TextLayer = {
  encode(message: TextLayer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.composite !== undefined) {
      TextLayer_Composite.encode(message.composite, writer.uint32(10).fork()).ldelim();
    }
    if (message.media !== undefined) {
      Media.encode(message.media, writer.uint32(18).fork()).ldelim();
    }
    if (message.cutOut !== undefined) {
      Graphics_Text_CutOutFill.encode(message.cutOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.backgroundEffect !== undefined) {
      Graphics_BackgroundEffect.encode(message.backgroundEffect, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextLayer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextLayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.composite = TextLayer_Composite.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.media = Media.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cutOut = Graphics_Text_CutOutFill.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.backgroundEffect = Graphics_BackgroundEffect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextLayer {
    return {
      composite: isSet(object.composite) ? TextLayer_Composite.fromJSON(object.composite) : undefined,
      media: isSet(object.media) ? Media.fromJSON(object.media) : undefined,
      cutOut: isSet(object.cutOut) ? Graphics_Text_CutOutFill.fromJSON(object.cutOut) : undefined,
      backgroundEffect: isSet(object.backgroundEffect)
        ? Graphics_BackgroundEffect.fromJSON(object.backgroundEffect)
        : undefined,
    };
  },

  toJSON(message: TextLayer): unknown {
    const obj: any = {};
    if (message.composite !== undefined) {
      obj.composite = TextLayer_Composite.toJSON(message.composite);
    }
    if (message.media !== undefined) {
      obj.media = Media.toJSON(message.media);
    }
    if (message.cutOut !== undefined) {
      obj.cutOut = Graphics_Text_CutOutFill.toJSON(message.cutOut);
    }
    if (message.backgroundEffect !== undefined) {
      obj.backgroundEffect = Graphics_BackgroundEffect.toJSON(message.backgroundEffect);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TextLayer>, I>>(base?: I): TextLayer {
    return TextLayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextLayer>, I>>(object: I): TextLayer {
    const message = createBaseTextLayer();
    message.composite = (object.composite !== undefined && object.composite !== null)
      ? TextLayer_Composite.fromPartial(object.composite)
      : undefined;
    message.media = (object.media !== undefined && object.media !== null) ? Media.fromPartial(object.media) : undefined;
    message.cutOut = (object.cutOut !== undefined && object.cutOut !== null)
      ? Graphics_Text_CutOutFill.fromPartial(object.cutOut)
      : undefined;
    message.backgroundEffect = (object.backgroundEffect !== undefined && object.backgroundEffect !== null)
      ? Graphics_BackgroundEffect.fromPartial(object.backgroundEffect)
      : undefined;
    return message;
  },
};

function createBaseTextLayer_Composite(): TextLayer_Composite {
  return {};
}

export const TextLayer_Composite = {
  encode(_: TextLayer_Composite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TextLayer_Composite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextLayer_Composite();
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

  fromJSON(_: any): TextLayer_Composite {
    return {};
  },

  toJSON(_: TextLayer_Composite): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TextLayer_Composite>, I>>(base?: I): TextLayer_Composite {
    return TextLayer_Composite.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TextLayer_Composite>, I>>(_: I): TextLayer_Composite {
    const message = createBaseTextLayer_Composite();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
