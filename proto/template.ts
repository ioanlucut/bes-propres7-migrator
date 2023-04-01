/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action } from './action';
import { ApplicationInfo } from './basicTypes';
import { Slide } from './slide';

export const protobufPackage = 'rv.data';

export interface Template {}

export interface Template_Slide {
  baseSlide: Slide | undefined;
  name: string;
  actions: Action[];
}

export interface Template_Document {
  applicationInfo: ApplicationInfo | undefined;
  slides: Template_Slide[];
}

function createBaseTemplate(): Template {
  return {};
}

export const Template = {
  encode(_: Template, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate();
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

  fromJSON(_: any): Template {
    return {};
  },

  toJSON(_: Template): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Template>, I>>(base?: I): Template {
    return Template.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Template>, I>>(_: I): Template {
    const message = createBaseTemplate();
    return message;
  },
};

function createBaseTemplate_Slide(): Template_Slide {
  return { baseSlide: undefined, name: '', actions: [] };
}

export const Template_Slide = {
  encode(
    message: Template_Slide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.baseSlide !== undefined) {
      Slide.encode(message.baseSlide, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template_Slide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate_Slide();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Template_Slide {
    return {
      baseSlide: isSet(object.baseSlide)
        ? Slide.fromJSON(object.baseSlide)
        : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Template_Slide): unknown {
    const obj: any = {};
    message.baseSlide !== undefined &&
      (obj.baseSlide = message.baseSlide
        ? Slide.toJSON(message.baseSlide)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Template_Slide>, I>>(
    base?: I,
  ): Template_Slide {
    return Template_Slide.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Template_Slide>, I>>(
    object: I,
  ): Template_Slide {
    const message = createBaseTemplate_Slide();
    message.baseSlide =
      object.baseSlide !== undefined && object.baseSlide !== null
        ? Slide.fromPartial(object.baseSlide)
        : undefined;
    message.name = object.name ?? '';
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTemplate_Document(): Template_Document {
  return { applicationInfo: undefined, slides: [] };
}

export const Template_Document = {
  encode(
    message: Template_Document,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.slides) {
      Template_Slide.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Template_Document {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplate_Document();
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
        case 3:
          if (tag != 26) {
            break;
          }

          message.slides.push(Template_Slide.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Template_Document {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      slides: Array.isArray(object?.slides)
        ? object.slides.map((e: any) => Template_Slide.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Template_Document): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    if (message.slides) {
      obj.slides = message.slides.map((e) =>
        e ? Template_Slide.toJSON(e) : undefined,
      );
    } else {
      obj.slides = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Template_Document>, I>>(
    base?: I,
  ): Template_Document {
    return Template_Document.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Template_Document>, I>>(
    object: I,
  ): Template_Document {
    const message = createBaseTemplate_Document();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.slides =
      object.slides?.map((e) => Template_Slide.fromPartial(e)) || [];
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
