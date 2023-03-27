/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Color, UUID } from "./basicTypes";
import { Graphics_Element } from "./graphicsData";

export const protobufPackage = "rv.data";

export interface Mask {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  mode: Mask_Mode;
  shapes: Graphics_Element[];
}

export enum Mask_Mode {
  MODE_OVERLAY = 0,
  MODE_KEYHOLE = 1,
  UNRECOGNIZED = -1,
}

export function mask_ModeFromJSON(object: any): Mask_Mode {
  switch (object) {
    case 0:
    case "MODE_OVERLAY":
      return Mask_Mode.MODE_OVERLAY;
    case 1:
    case "MODE_KEYHOLE":
      return Mask_Mode.MODE_KEYHOLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Mask_Mode.UNRECOGNIZED;
  }
}

export function mask_ModeToJSON(object: Mask_Mode): string {
  switch (object) {
    case Mask_Mode.MODE_OVERLAY:
      return "MODE_OVERLAY";
    case Mask_Mode.MODE_KEYHOLE:
      return "MODE_KEYHOLE";
    case Mask_Mode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseMask(): Mask {
  return { uuid: undefined, name: "", color: undefined, mode: 0, shapes: [] };
}

export const Mask = {
  encode(message: Mask, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    if (message.mode !== 0) {
      writer.uint32(32).int32(message.mode);
    }
    for (const v of message.shapes) {
      Graphics_Element.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mask {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMask();
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

          message.mode = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.shapes.push(Graphics_Element.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mask {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      mode: isSet(object.mode) ? mask_ModeFromJSON(object.mode) : 0,
      shapes: Array.isArray(object?.shapes) ? object.shapes.map((e: any) => Graphics_Element.fromJSON(e)) : [],
    };
  },

  toJSON(message: Mask): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined && (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.mode !== undefined && (obj.mode = mask_ModeToJSON(message.mode));
    if (message.shapes) {
      obj.shapes = message.shapes.map((e) => e ? Graphics_Element.toJSON(e) : undefined);
    } else {
      obj.shapes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Mask>, I>>(base?: I): Mask {
    return Mask.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Mask>, I>>(object: I): Mask {
    const message = createBaseMask();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.color = (object.color !== undefined && object.color !== null) ? Color.fromPartial(object.color) : undefined;
    message.mode = object.mode ?? 0;
    message.shapes = object.shapes?.map((e) => Graphics_Element.fromPartial(e)) || [];
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
