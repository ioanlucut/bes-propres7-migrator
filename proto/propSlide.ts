/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Transition } from './effects';
import { Slide } from './slide';

export const protobufPackage = 'rv.data';

export interface PropSlide {
  baseSlide: Slide | undefined;
  transition: Transition | undefined;
}

function createBasePropSlide(): PropSlide {
  return { baseSlide: undefined, transition: undefined };
}

export const PropSlide = {
  encode(
    message: PropSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseSlide = Slide.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PropSlide {
    return {
      baseSlide: isSet(object.baseSlide)
        ? Slide.fromJSON(object.baseSlide)
        : undefined,
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
    };
  },

  toJSON(message: PropSlide): unknown {
    const obj: any = {};
    if (message.baseSlide !== undefined) {
      obj.baseSlide = Slide.toJSON(message.baseSlide);
    }
    if (message.transition !== undefined) {
      obj.transition = Transition.toJSON(message.transition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PropSlide>, I>>(base?: I): PropSlide {
    return PropSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PropSlide>, I>>(
    object: I,
  ): PropSlide {
    const message = createBasePropSlide();
    message.baseSlide =
      object.baseSlide !== undefined && object.baseSlide !== null
        ? Slide.fromPartial(object.baseSlide)
        : undefined;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? Transition.fromPartial(object.transition)
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
