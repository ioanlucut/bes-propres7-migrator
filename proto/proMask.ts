/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Slide } from './slide';

export const protobufPackage = 'rv.data';

export interface ProMask {
  baseSlide: Slide | undefined;
  name: string;
}

function createBaseProMask(): ProMask {
  return { baseSlide: undefined, name: '' };
}

export const ProMask = {
  encode(
    message: ProMask,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProMask {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProMask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.baseSlide = Slide.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProMask {
    return {
      baseSlide: isSet(object.baseSlide)
        ? Slide.fromJSON(object.baseSlide)
        : undefined,
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: ProMask): unknown {
    const obj: any = {};
    message.baseSlide !== undefined &&
      (obj.baseSlide = message.baseSlide
        ? Slide.toJSON(message.baseSlide)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProMask>, I>>(base?: I): ProMask {
    return ProMask.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProMask>, I>>(object: I): ProMask {
    const message = createBaseProMask();
    message.baseSlide =
      object.baseSlide !== undefined && object.baseSlide !== null
        ? Slide.fromPartial(object.baseSlide)
        : undefined;
    message.name = object.name ?? '';
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
