/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Color, URL, UUID } from "./basicTypes";
import { Graphics_Element, Graphics_Rect, Graphics_Size, Media } from "./graphicsData";
import { TestPattern } from "./testPattern";

export const protobufPackage = "rv.data";

export interface TargetSet {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  testImagePath: URL | undefined;
  sourceSize: Graphics_Size | undefined;
  targets: Target[];
  testPattern: TestPattern | undefined;
}

export interface Target {
  uuid: UUID | undefined;
  name: string;
  sourceUnitRect: Graphics_Rect | undefined;
  testImageFill: Media | undefined;
  shape: Graphics_Element | undefined;
  flipMode: Target_FlipMode;
}

export enum Target_FlipMode {
  FLIP_MODE_NONE = 0,
  FLIP_MODE_VERTICAL = 1,
  FLIP_MODE_HORIZONTAL = 2,
  FLIP_MODE_BOTH = 3,
  UNRECOGNIZED = -1,
}

export function target_FlipModeFromJSON(object: any): Target_FlipMode {
  switch (object) {
    case 0:
    case "FLIP_MODE_NONE":
      return Target_FlipMode.FLIP_MODE_NONE;
    case 1:
    case "FLIP_MODE_VERTICAL":
      return Target_FlipMode.FLIP_MODE_VERTICAL;
    case 2:
    case "FLIP_MODE_HORIZONTAL":
      return Target_FlipMode.FLIP_MODE_HORIZONTAL;
    case 3:
    case "FLIP_MODE_BOTH":
      return Target_FlipMode.FLIP_MODE_BOTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Target_FlipMode.UNRECOGNIZED;
  }
}

export function target_FlipModeToJSON(object: Target_FlipMode): string {
  switch (object) {
    case Target_FlipMode.FLIP_MODE_NONE:
      return "FLIP_MODE_NONE";
    case Target_FlipMode.FLIP_MODE_VERTICAL:
      return "FLIP_MODE_VERTICAL";
    case Target_FlipMode.FLIP_MODE_HORIZONTAL:
      return "FLIP_MODE_HORIZONTAL";
    case Target_FlipMode.FLIP_MODE_BOTH:
      return "FLIP_MODE_BOTH";
    case Target_FlipMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTargetSet(): TargetSet {
  return {
    uuid: undefined,
    name: "",
    color: undefined,
    testImagePath: undefined,
    sourceSize: undefined,
    targets: [],
    testPattern: undefined,
  };
}

export const TargetSet = {
  encode(message: TargetSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.testImagePath !== undefined) {
      URL.encode(message.testImagePath, writer.uint32(34).fork()).ldelim();
    }
    if (message.sourceSize !== undefined) {
      Graphics_Size.encode(message.sourceSize, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.targets) {
      Target.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.testPattern !== undefined) {
      TestPattern.encode(message.testPattern, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TargetSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetSet();
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

          message.testImagePath = URL.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.sourceSize = Graphics_Size.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.targets.push(Target.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.testPattern = TestPattern.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TargetSet {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      testImagePath: isSet(object.testImagePath) ? URL.fromJSON(object.testImagePath) : undefined,
      sourceSize: isSet(object.sourceSize) ? Graphics_Size.fromJSON(object.sourceSize) : undefined,
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => Target.fromJSON(e)) : [],
      testPattern: isSet(object.testPattern) ? TestPattern.fromJSON(object.testPattern) : undefined,
    };
  },

  toJSON(message: TargetSet): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.testImagePath !== undefined &&
      (obj.testImagePath = message.testImagePath ? URL.toJSON(message.testImagePath) : undefined);
    message.sourceSize !== undefined &&
      (obj.sourceSize = message.sourceSize ? Graphics_Size.toJSON(message.sourceSize) : undefined);
    if (message.targets) {
      obj.targets = message.targets.map((e) => e ? Target.toJSON(e) : undefined);
    } else {
      obj.targets = [];
    }
    message.testPattern !== undefined &&
      (obj.testPattern = message.testPattern ? TestPattern.toJSON(message.testPattern) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<TargetSet>, I>>(base?: I): TargetSet {
    return TargetSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TargetSet>, I>>(object: I): TargetSet {
    const message = createBaseTargetSet();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.testImagePath = (object.testImagePath !== undefined && object.testImagePath !== null)
      ? URL.fromPartial(object.testImagePath)
      : undefined;
    message.sourceSize = (object.sourceSize !== undefined && object.sourceSize !== null)
      ? Graphics_Size.fromPartial(object.sourceSize)
      : undefined;
    message.targets = object.targets?.map((e) => Target.fromPartial(e)) || [];
    message.testPattern = (object.testPattern !== undefined && object.testPattern !== null)
      ? TestPattern.fromPartial(object.testPattern)
      : undefined;
    return message;
  },
};

function createBaseTarget(): Target {
  return {
    uuid: undefined,
    name: "",
    sourceUnitRect: undefined,
    testImageFill: undefined,
    shape: undefined,
    flipMode: 0,
  };
}

export const Target = {
  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.sourceUnitRect !== undefined) {
      Graphics_Rect.encode(message.sourceUnitRect, writer.uint32(26).fork()).ldelim();
    }
    if (message.testImageFill !== undefined) {
      Media.encode(message.testImageFill, writer.uint32(34).fork()).ldelim();
    }
    if (message.shape !== undefined) {
      Graphics_Element.encode(message.shape, writer.uint32(42).fork()).ldelim();
    }
    if (message.flipMode !== 0) {
      writer.uint32(48).int32(message.flipMode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
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

          message.sourceUnitRect = Graphics_Rect.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.testImageFill = Media.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.shape = Graphics_Element.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.flipMode = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      sourceUnitRect: isSet(object.sourceUnitRect) ? Graphics_Rect.fromJSON(object.sourceUnitRect) : undefined,
      testImageFill: isSet(object.testImageFill) ? Media.fromJSON(object.testImageFill) : undefined,
      shape: isSet(object.shape) ? Graphics_Element.fromJSON(object.shape) : undefined,
      flipMode: isSet(object.flipMode) ? target_FlipModeFromJSON(object.flipMode) : 0,
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.sourceUnitRect !== undefined &&
      (obj.sourceUnitRect = message.sourceUnitRect ? Graphics_Rect.toJSON(message.sourceUnitRect) : undefined);
    message.testImageFill !== undefined &&
      (obj.testImageFill = message.testImageFill ? Media.toJSON(message.testImageFill) : undefined);
    message.shape !== undefined && (obj.shape = message.shape ? Graphics_Element.toJSON(message.shape) : undefined);
    message.flipMode !== undefined && (obj.flipMode = target_FlipModeToJSON(message.flipMode));
    return obj;
  },

  create<I extends Exact<DeepPartial<Target>, I>>(base?: I): Target {
    return Target.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Target>, I>>(object: I): Target {
    const message = createBaseTarget();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.sourceUnitRect = (object.sourceUnitRect !== undefined && object.sourceUnitRect !== null)
      ? Graphics_Rect.fromPartial(object.sourceUnitRect)
      : undefined;
    message.testImageFill = (object.testImageFill !== undefined && object.testImageFill !== null)
      ? Media.fromPartial(object.testImageFill)
      : undefined;
    message.shape = (object.shape !== undefined && object.shape !== null)
      ? Graphics_Element.fromPartial(object.shape)
      : undefined;
    message.flipMode = object.flipMode ?? 0;
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
