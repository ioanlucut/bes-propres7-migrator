/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo } from './applicationInfo';
import { CollectionElementType } from './collectionElementType';
import { Slide } from './slide';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Stage {}

export interface Stage_Layout {
  uuid: UUID | undefined;
  name: string;
  slide: Slide | undefined;
}

export interface Stage_Document {
  applicationInfo: ApplicationInfo | undefined;
  layouts: Stage_Layout[];
}

export interface Stage_ScreenAssignment {
  screen: CollectionElementType | undefined;
  layout: CollectionElementType | undefined;
}

function createBaseStage(): Stage {
  return {};
}

export const Stage = {
  encode(_: Stage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStage();
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

  fromJSON(_: any): Stage {
    return {};
  },

  toJSON(_: Stage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Stage>, I>>(base?: I): Stage {
    return Stage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stage>, I>>(_: I): Stage {
    const message = createBaseStage();
    return message;
  },
};

function createBaseStage_Layout(): Stage_Layout {
  return { uuid: undefined, name: '', slide: undefined };
}

export const Stage_Layout = {
  encode(
    message: Stage_Layout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.slide !== undefined) {
      Slide.encode(message.slide, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stage_Layout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStage_Layout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slide = Slide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stage_Layout {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      slide: isSet(object.slide) ? Slide.fromJSON(object.slide) : undefined,
    };
  },

  toJSON(message: Stage_Layout): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.slide !== undefined) {
      obj.slide = Slide.toJSON(message.slide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stage_Layout>, I>>(
    base?: I,
  ): Stage_Layout {
    return Stage_Layout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stage_Layout>, I>>(
    object: I,
  ): Stage_Layout {
    const message = createBaseStage_Layout();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.slide =
      object.slide !== undefined && object.slide !== null
        ? Slide.fromPartial(object.slide)
        : undefined;
    return message;
  },
};

function createBaseStage_Document(): Stage_Document {
  return { applicationInfo: undefined, layouts: [] };
}

export const Stage_Document = {
  encode(
    message: Stage_Document,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.layouts) {
      Stage_Layout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stage_Document {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStage_Document();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.layouts.push(Stage_Layout.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Stage_Document {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      layouts: globalThis.Array.isArray(object?.layouts)
        ? object.layouts.map((e: any) => Stage_Layout.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Stage_Document): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.layouts?.length) {
      obj.layouts = message.layouts.map((e) => Stage_Layout.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stage_Document>, I>>(
    base?: I,
  ): Stage_Document {
    return Stage_Document.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stage_Document>, I>>(
    object: I,
  ): Stage_Document {
    const message = createBaseStage_Document();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.layouts =
      object.layouts?.map((e) => Stage_Layout.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStage_ScreenAssignment(): Stage_ScreenAssignment {
  return { screen: undefined, layout: undefined };
}

export const Stage_ScreenAssignment = {
  encode(
    message: Stage_ScreenAssignment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screen !== undefined) {
      CollectionElementType.encode(
        message.screen,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.layout !== undefined) {
      CollectionElementType.encode(
        message.layout,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Stage_ScreenAssignment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStage_ScreenAssignment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screen = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.layout = CollectionElementType.decode(
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

  fromJSON(object: any): Stage_ScreenAssignment {
    return {
      screen: isSet(object.screen)
        ? CollectionElementType.fromJSON(object.screen)
        : undefined,
      layout: isSet(object.layout)
        ? CollectionElementType.fromJSON(object.layout)
        : undefined,
    };
  },

  toJSON(message: Stage_ScreenAssignment): unknown {
    const obj: any = {};
    if (message.screen !== undefined) {
      obj.screen = CollectionElementType.toJSON(message.screen);
    }
    if (message.layout !== undefined) {
      obj.layout = CollectionElementType.toJSON(message.layout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Stage_ScreenAssignment>, I>>(
    base?: I,
  ): Stage_ScreenAssignment {
    return Stage_ScreenAssignment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Stage_ScreenAssignment>, I>>(
    object: I,
  ): Stage_ScreenAssignment {
    const message = createBaseStage_ScreenAssignment();
    message.screen =
      object.screen !== undefined && object.screen !== null
        ? CollectionElementType.fromPartial(object.screen)
        : undefined;
    message.layout =
      object.layout !== undefined && object.layout !== null
        ? CollectionElementType.fromPartial(object.layout)
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
