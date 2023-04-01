/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo } from './basicTypes';
import { Cue } from './cue';
import { Transition } from './effects';

export const protobufPackage = 'rv.data';

export interface PropDocument {
  applicationInfo: ApplicationInfo | undefined;
  cues: Cue[];
  transition: Transition | undefined;
}

function createBasePropDocument(): PropDocument {
  return { applicationInfo: undefined, cues: [], transition: undefined };
}

export const PropDocument = {
  encode(
    message: PropDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.cues) {
      Cue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.cues.push(Cue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): PropDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      cues: Array.isArray(object?.cues)
        ? object.cues.map((e: any) => Cue.fromJSON(e))
        : [],
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
    };
  },

  toJSON(message: PropDocument): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    if (message.cues) {
      obj.cues = message.cues.map((e) => (e ? Cue.toJSON(e) : undefined));
    } else {
      obj.cues = [];
    }
    message.transition !== undefined &&
      (obj.transition = message.transition
        ? Transition.toJSON(message.transition)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PropDocument>, I>>(
    base?: I,
  ): PropDocument {
    return PropDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PropDocument>, I>>(
    object: I,
  ): PropDocument {
    const message = createBasePropDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.cues = object.cues?.map((e) => Cue.fromPartial(e)) || [];
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
