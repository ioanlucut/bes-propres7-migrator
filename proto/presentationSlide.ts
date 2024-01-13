/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { AlignmentGuide } from './alignmentGuide';
import { Transition } from './effects';
import { Graphics_Text_Attributes } from './graphicsData';
import { Slide } from './slide';
import { URL } from './url';

export const protobufPackage = 'rv.data';

export interface PresentationSlide {
  baseSlide: Slide | undefined;
  notes: PresentationSlide_Notes | undefined;
  templateGuidelines: AlignmentGuide[];
  chordChart: URL | undefined;
  transition: Transition | undefined;
}

export interface PresentationSlide_Notes {
  rtfData: Uint8Array;
  attributes: Graphics_Text_Attributes | undefined;
}

function createBasePresentationSlide(): PresentationSlide {
  return {
    baseSlide: undefined,
    notes: undefined,
    templateGuidelines: [],
    chordChart: undefined,
    transition: undefined,
  };
}

export const PresentationSlide = {
  encode(
    message: PresentationSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.notes !== undefined) {
      PresentationSlide_Notes.encode(
        message.notes,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.templateGuidelines) {
      AlignmentGuide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.chordChart !== undefined) {
      URL.encode(message.chordChart, writer.uint32(34).fork()).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PresentationSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentationSlide();
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

          message.notes = PresentationSlide_Notes.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.templateGuidelines.push(
            AlignmentGuide.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chordChart = URL.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): PresentationSlide {
    return {
      baseSlide: isSet(object.baseSlide)
        ? Slide.fromJSON(object.baseSlide)
        : undefined,
      notes: isSet(object.notes)
        ? PresentationSlide_Notes.fromJSON(object.notes)
        : undefined,
      templateGuidelines: globalThis.Array.isArray(object?.templateGuidelines)
        ? object.templateGuidelines.map((e: any) => AlignmentGuide.fromJSON(e))
        : [],
      chordChart: isSet(object.chordChart)
        ? URL.fromJSON(object.chordChart)
        : undefined,
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
    };
  },

  toJSON(message: PresentationSlide): unknown {
    const obj: any = {};
    if (message.baseSlide !== undefined) {
      obj.baseSlide = Slide.toJSON(message.baseSlide);
    }
    if (message.notes !== undefined) {
      obj.notes = PresentationSlide_Notes.toJSON(message.notes);
    }
    if (message.templateGuidelines?.length) {
      obj.templateGuidelines = message.templateGuidelines.map((e) =>
        AlignmentGuide.toJSON(e),
      );
    }
    if (message.chordChart !== undefined) {
      obj.chordChart = URL.toJSON(message.chordChart);
    }
    if (message.transition !== undefined) {
      obj.transition = Transition.toJSON(message.transition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PresentationSlide>, I>>(
    base?: I,
  ): PresentationSlide {
    return PresentationSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PresentationSlide>, I>>(
    object: I,
  ): PresentationSlide {
    const message = createBasePresentationSlide();
    message.baseSlide =
      object.baseSlide !== undefined && object.baseSlide !== null
        ? Slide.fromPartial(object.baseSlide)
        : undefined;
    message.notes =
      object.notes !== undefined && object.notes !== null
        ? PresentationSlide_Notes.fromPartial(object.notes)
        : undefined;
    message.templateGuidelines =
      object.templateGuidelines?.map((e) => AlignmentGuide.fromPartial(e)) ||
      [];
    message.chordChart =
      object.chordChart !== undefined && object.chordChart !== null
        ? URL.fromPartial(object.chordChart)
        : undefined;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? Transition.fromPartial(object.transition)
        : undefined;
    return message;
  },
};

function createBasePresentationSlide_Notes(): PresentationSlide_Notes {
  return { rtfData: new Uint8Array(0), attributes: undefined };
}

export const PresentationSlide_Notes = {
  encode(
    message: PresentationSlide_Notes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rtfData.length !== 0) {
      writer.uint32(10).bytes(message.rtfData);
    }
    if (message.attributes !== undefined) {
      Graphics_Text_Attributes.encode(
        message.attributes,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PresentationSlide_Notes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentationSlide_Notes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rtfData = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes = Graphics_Text_Attributes.decode(
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

  fromJSON(object: any): PresentationSlide_Notes {
    return {
      rtfData: isSet(object.rtfData)
        ? bytesFromBase64(object.rtfData)
        : new Uint8Array(0),
      attributes: isSet(object.attributes)
        ? Graphics_Text_Attributes.fromJSON(object.attributes)
        : undefined,
    };
  },

  toJSON(message: PresentationSlide_Notes): unknown {
    const obj: any = {};
    if (message.rtfData.length !== 0) {
      obj.rtfData = base64FromBytes(message.rtfData);
    }
    if (message.attributes !== undefined) {
      obj.attributes = Graphics_Text_Attributes.toJSON(message.attributes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PresentationSlide_Notes>, I>>(
    base?: I,
  ): PresentationSlide_Notes {
    return PresentationSlide_Notes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PresentationSlide_Notes>, I>>(
    object: I,
  ): PresentationSlide_Notes {
    const message = createBasePresentationSlide_Notes();
    message.rtfData = object.rtfData ?? new Uint8Array(0);
    message.attributes =
      object.attributes !== undefined && object.attributes !== null
        ? Graphics_Text_Attributes.fromPartial(object.attributes)
        : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

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
