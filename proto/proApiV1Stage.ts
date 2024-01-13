/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1StageLayoutMap {
  entries: APIV1StageLayoutMap_Entry[];
}

export interface APIV1StageLayoutMap_Entry {
  screen: APIV1Identifier | undefined;
  layout: APIV1Identifier | undefined;
}

export interface APIV1StageRequest {
  getLayoutMap?: APIV1StageRequest_GetLayoutMap | undefined;
  setLayoutMap?: APIV1StageRequest_SetLayoutMap | undefined;
  getMessage?: APIV1StageRequest_GetMessage | undefined;
  putMessage?: APIV1StageRequest_PutMessage | undefined;
  deleteMessage?: APIV1StageRequest_DeleteMessage | undefined;
  getScreens?: APIV1StageRequest_GetScreens | undefined;
  getScreenLayout?: APIV1StageRequest_GetScreenLayout | undefined;
  setScreenLayout?: APIV1StageRequest_SetScreenLayout | undefined;
  getLayouts?: APIV1StageRequest_GetLayouts | undefined;
  deleteLayout?: APIV1StageRequest_DeleteLayout | undefined;
  getLayoutThumbnail?: APIV1StageRequest_GetLayoutThumbnail | undefined;
}

export interface APIV1StageRequest_GetLayoutMap {}

export interface APIV1StageRequest_SetLayoutMap {
  map: APIV1StageLayoutMap | undefined;
}

export interface APIV1StageRequest_GetMessage {}

export interface APIV1StageRequest_PutMessage {
  message: string;
}

export interface APIV1StageRequest_DeleteMessage {}

export interface APIV1StageRequest_GetScreens {}

export interface APIV1StageRequest_GetScreenLayout {
  id: string;
}

export interface APIV1StageRequest_SetScreenLayout {
  id: string;
  layout: string;
}

export interface APIV1StageRequest_GetLayouts {}

export interface APIV1StageRequest_DeleteLayout {
  id: string;
}

export interface APIV1StageRequest_GetLayoutThumbnail {
  id: string;
  quality: number;
}

export interface APIV1StageResponse {
  getLayoutMap?: APIV1StageResponse_GetLayoutMap | undefined;
  setLayoutMap?: APIV1StageResponse_SetLayoutMap | undefined;
  getMessage?: APIV1StageResponse_GetMessage | undefined;
  putMessage?: APIV1StageResponse_PutMessage | undefined;
  deleteMessage?: APIV1StageResponse_DeleteMessage | undefined;
  getScreens?: APIV1StageResponse_GetScreens | undefined;
  getScreenLayout?: APIV1StageResponse_GetScreenLayout | undefined;
  setScreenLayout?: APIV1StageResponse_SetScreenLayout | undefined;
  getLayouts?: APIV1StageResponse_GetLayouts | undefined;
  deleteLayout?: APIV1StageResponse_DeleteLayout | undefined;
  getLayoutThumbnail?: APIV1StageResponse_GetLayoutThumbnail | undefined;
}

export interface APIV1StageResponse_GetLayoutMap {
  map: APIV1StageLayoutMap | undefined;
}

export interface APIV1StageResponse_SetLayoutMap {}

export interface APIV1StageResponse_GetMessage {
  message: string;
}

export interface APIV1StageResponse_PutMessage {}

export interface APIV1StageResponse_DeleteMessage {}

export interface APIV1StageResponse_GetScreens {
  screens: APIV1Identifier[];
}

export interface APIV1StageResponse_GetScreenLayout {
  id: APIV1Identifier | undefined;
}

export interface APIV1StageResponse_SetScreenLayout {}

export interface APIV1StageResponse_GetLayouts {
  layouts: APIV1StageResponse_GetLayouts_Layout[];
}

export interface APIV1StageResponse_GetLayouts_Layout {
  id: APIV1Identifier | undefined;
}

export interface APIV1StageResponse_DeleteLayout {}

export interface APIV1StageResponse_GetLayoutThumbnail {
  data: Uint8Array;
}

function createBaseAPIV1StageLayoutMap(): APIV1StageLayoutMap {
  return { entries: [] };
}

export const APIV1StageLayoutMap = {
  encode(
    message: APIV1StageLayoutMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.entries) {
      APIV1StageLayoutMap_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StageLayoutMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageLayoutMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entries.push(
            APIV1StageLayoutMap_Entry.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1StageLayoutMap {
    return {
      entries: globalThis.Array.isArray(object?.entries)
        ? object.entries.map((e: any) => APIV1StageLayoutMap_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1StageLayoutMap): unknown {
    const obj: any = {};
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) =>
        APIV1StageLayoutMap_Entry.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageLayoutMap>, I>>(
    base?: I,
  ): APIV1StageLayoutMap {
    return APIV1StageLayoutMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageLayoutMap>, I>>(
    object: I,
  ): APIV1StageLayoutMap {
    const message = createBaseAPIV1StageLayoutMap();
    message.entries =
      object.entries?.map((e) => APIV1StageLayoutMap_Entry.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAPIV1StageLayoutMap_Entry(): APIV1StageLayoutMap_Entry {
  return { screen: undefined, layout: undefined };
}

export const APIV1StageLayoutMap_Entry = {
  encode(
    message: APIV1StageLayoutMap_Entry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screen !== undefined) {
      APIV1Identifier.encode(message.screen, writer.uint32(10).fork()).ldelim();
    }
    if (message.layout !== undefined) {
      APIV1Identifier.encode(message.layout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageLayoutMap_Entry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageLayoutMap_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screen = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.layout = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageLayoutMap_Entry {
    return {
      screen: isSet(object.screen)
        ? APIV1Identifier.fromJSON(object.screen)
        : undefined,
      layout: isSet(object.layout)
        ? APIV1Identifier.fromJSON(object.layout)
        : undefined,
    };
  },

  toJSON(message: APIV1StageLayoutMap_Entry): unknown {
    const obj: any = {};
    if (message.screen !== undefined) {
      obj.screen = APIV1Identifier.toJSON(message.screen);
    }
    if (message.layout !== undefined) {
      obj.layout = APIV1Identifier.toJSON(message.layout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageLayoutMap_Entry>, I>>(
    base?: I,
  ): APIV1StageLayoutMap_Entry {
    return APIV1StageLayoutMap_Entry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageLayoutMap_Entry>, I>>(
    object: I,
  ): APIV1StageLayoutMap_Entry {
    const message = createBaseAPIV1StageLayoutMap_Entry();
    message.screen =
      object.screen !== undefined && object.screen !== null
        ? APIV1Identifier.fromPartial(object.screen)
        : undefined;
    message.layout =
      object.layout !== undefined && object.layout !== null
        ? APIV1Identifier.fromPartial(object.layout)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageRequest(): APIV1StageRequest {
  return {
    getLayoutMap: undefined,
    setLayoutMap: undefined,
    getMessage: undefined,
    putMessage: undefined,
    deleteMessage: undefined,
    getScreens: undefined,
    getScreenLayout: undefined,
    setScreenLayout: undefined,
    getLayouts: undefined,
    deleteLayout: undefined,
    getLayoutThumbnail: undefined,
  };
}

export const APIV1StageRequest = {
  encode(
    message: APIV1StageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getLayoutMap !== undefined) {
      APIV1StageRequest_GetLayoutMap.encode(
        message.getLayoutMap,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.setLayoutMap !== undefined) {
      APIV1StageRequest_SetLayoutMap.encode(
        message.setLayoutMap,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getMessage !== undefined) {
      APIV1StageRequest_GetMessage.encode(
        message.getMessage,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putMessage !== undefined) {
      APIV1StageRequest_PutMessage.encode(
        message.putMessage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.deleteMessage !== undefined) {
      APIV1StageRequest_DeleteMessage.encode(
        message.deleteMessage,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getScreens !== undefined) {
      APIV1StageRequest_GetScreens.encode(
        message.getScreens,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getScreenLayout !== undefined) {
      APIV1StageRequest_GetScreenLayout.encode(
        message.getScreenLayout,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.setScreenLayout !== undefined) {
      APIV1StageRequest_SetScreenLayout.encode(
        message.setScreenLayout,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getLayouts !== undefined) {
      APIV1StageRequest_GetLayouts.encode(
        message.getLayouts,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.deleteLayout !== undefined) {
      APIV1StageRequest_DeleteLayout.encode(
        message.deleteLayout,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.getLayoutThumbnail !== undefined) {
      APIV1StageRequest_GetLayoutThumbnail.encode(
        message.getLayoutThumbnail,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StageRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getLayoutMap = APIV1StageRequest_GetLayoutMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setLayoutMap = APIV1StageRequest_SetLayoutMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getMessage = APIV1StageRequest_GetMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putMessage = APIV1StageRequest_PutMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleteMessage = APIV1StageRequest_DeleteMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getScreens = APIV1StageRequest_GetScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getScreenLayout = APIV1StageRequest_GetScreenLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.setScreenLayout = APIV1StageRequest_SetScreenLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getLayouts = APIV1StageRequest_GetLayouts.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.deleteLayout = APIV1StageRequest_DeleteLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.getLayoutThumbnail =
            APIV1StageRequest_GetLayoutThumbnail.decode(
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

  fromJSON(object: any): APIV1StageRequest {
    return {
      getLayoutMap: isSet(object.getLayoutMap)
        ? APIV1StageRequest_GetLayoutMap.fromJSON(object.getLayoutMap)
        : undefined,
      setLayoutMap: isSet(object.setLayoutMap)
        ? APIV1StageRequest_SetLayoutMap.fromJSON(object.setLayoutMap)
        : undefined,
      getMessage: isSet(object.getMessage)
        ? APIV1StageRequest_GetMessage.fromJSON(object.getMessage)
        : undefined,
      putMessage: isSet(object.putMessage)
        ? APIV1StageRequest_PutMessage.fromJSON(object.putMessage)
        : undefined,
      deleteMessage: isSet(object.deleteMessage)
        ? APIV1StageRequest_DeleteMessage.fromJSON(object.deleteMessage)
        : undefined,
      getScreens: isSet(object.getScreens)
        ? APIV1StageRequest_GetScreens.fromJSON(object.getScreens)
        : undefined,
      getScreenLayout: isSet(object.getScreenLayout)
        ? APIV1StageRequest_GetScreenLayout.fromJSON(object.getScreenLayout)
        : undefined,
      setScreenLayout: isSet(object.setScreenLayout)
        ? APIV1StageRequest_SetScreenLayout.fromJSON(object.setScreenLayout)
        : undefined,
      getLayouts: isSet(object.getLayouts)
        ? APIV1StageRequest_GetLayouts.fromJSON(object.getLayouts)
        : undefined,
      deleteLayout: isSet(object.deleteLayout)
        ? APIV1StageRequest_DeleteLayout.fromJSON(object.deleteLayout)
        : undefined,
      getLayoutThumbnail: isSet(object.getLayoutThumbnail)
        ? APIV1StageRequest_GetLayoutThumbnail.fromJSON(
            object.getLayoutThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1StageRequest): unknown {
    const obj: any = {};
    if (message.getLayoutMap !== undefined) {
      obj.getLayoutMap = APIV1StageRequest_GetLayoutMap.toJSON(
        message.getLayoutMap,
      );
    }
    if (message.setLayoutMap !== undefined) {
      obj.setLayoutMap = APIV1StageRequest_SetLayoutMap.toJSON(
        message.setLayoutMap,
      );
    }
    if (message.getMessage !== undefined) {
      obj.getMessage = APIV1StageRequest_GetMessage.toJSON(message.getMessage);
    }
    if (message.putMessage !== undefined) {
      obj.putMessage = APIV1StageRequest_PutMessage.toJSON(message.putMessage);
    }
    if (message.deleteMessage !== undefined) {
      obj.deleteMessage = APIV1StageRequest_DeleteMessage.toJSON(
        message.deleteMessage,
      );
    }
    if (message.getScreens !== undefined) {
      obj.getScreens = APIV1StageRequest_GetScreens.toJSON(message.getScreens);
    }
    if (message.getScreenLayout !== undefined) {
      obj.getScreenLayout = APIV1StageRequest_GetScreenLayout.toJSON(
        message.getScreenLayout,
      );
    }
    if (message.setScreenLayout !== undefined) {
      obj.setScreenLayout = APIV1StageRequest_SetScreenLayout.toJSON(
        message.setScreenLayout,
      );
    }
    if (message.getLayouts !== undefined) {
      obj.getLayouts = APIV1StageRequest_GetLayouts.toJSON(message.getLayouts);
    }
    if (message.deleteLayout !== undefined) {
      obj.deleteLayout = APIV1StageRequest_DeleteLayout.toJSON(
        message.deleteLayout,
      );
    }
    if (message.getLayoutThumbnail !== undefined) {
      obj.getLayoutThumbnail = APIV1StageRequest_GetLayoutThumbnail.toJSON(
        message.getLayoutThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest>, I>>(
    base?: I,
  ): APIV1StageRequest {
    return APIV1StageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest>, I>>(
    object: I,
  ): APIV1StageRequest {
    const message = createBaseAPIV1StageRequest();
    message.getLayoutMap =
      object.getLayoutMap !== undefined && object.getLayoutMap !== null
        ? APIV1StageRequest_GetLayoutMap.fromPartial(object.getLayoutMap)
        : undefined;
    message.setLayoutMap =
      object.setLayoutMap !== undefined && object.setLayoutMap !== null
        ? APIV1StageRequest_SetLayoutMap.fromPartial(object.setLayoutMap)
        : undefined;
    message.getMessage =
      object.getMessage !== undefined && object.getMessage !== null
        ? APIV1StageRequest_GetMessage.fromPartial(object.getMessage)
        : undefined;
    message.putMessage =
      object.putMessage !== undefined && object.putMessage !== null
        ? APIV1StageRequest_PutMessage.fromPartial(object.putMessage)
        : undefined;
    message.deleteMessage =
      object.deleteMessage !== undefined && object.deleteMessage !== null
        ? APIV1StageRequest_DeleteMessage.fromPartial(object.deleteMessage)
        : undefined;
    message.getScreens =
      object.getScreens !== undefined && object.getScreens !== null
        ? APIV1StageRequest_GetScreens.fromPartial(object.getScreens)
        : undefined;
    message.getScreenLayout =
      object.getScreenLayout !== undefined && object.getScreenLayout !== null
        ? APIV1StageRequest_GetScreenLayout.fromPartial(object.getScreenLayout)
        : undefined;
    message.setScreenLayout =
      object.setScreenLayout !== undefined && object.setScreenLayout !== null
        ? APIV1StageRequest_SetScreenLayout.fromPartial(object.setScreenLayout)
        : undefined;
    message.getLayouts =
      object.getLayouts !== undefined && object.getLayouts !== null
        ? APIV1StageRequest_GetLayouts.fromPartial(object.getLayouts)
        : undefined;
    message.deleteLayout =
      object.deleteLayout !== undefined && object.deleteLayout !== null
        ? APIV1StageRequest_DeleteLayout.fromPartial(object.deleteLayout)
        : undefined;
    message.getLayoutThumbnail =
      object.getLayoutThumbnail !== undefined &&
      object.getLayoutThumbnail !== null
        ? APIV1StageRequest_GetLayoutThumbnail.fromPartial(
            object.getLayoutThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageRequest_GetLayoutMap(): APIV1StageRequest_GetLayoutMap {
  return {};
}

export const APIV1StageRequest_GetLayoutMap = {
  encode(
    _: APIV1StageRequest_GetLayoutMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetLayoutMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetLayoutMap();
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

  fromJSON(_: any): APIV1StageRequest_GetLayoutMap {
    return {};
  },

  toJSON(_: APIV1StageRequest_GetLayoutMap): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetLayoutMap>, I>>(
    base?: I,
  ): APIV1StageRequest_GetLayoutMap {
    return APIV1StageRequest_GetLayoutMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_GetLayoutMap>, I>>(
    _: I,
  ): APIV1StageRequest_GetLayoutMap {
    const message = createBaseAPIV1StageRequest_GetLayoutMap();
    return message;
  },
};

function createBaseAPIV1StageRequest_SetLayoutMap(): APIV1StageRequest_SetLayoutMap {
  return { map: undefined };
}

export const APIV1StageRequest_SetLayoutMap = {
  encode(
    message: APIV1StageRequest_SetLayoutMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.map !== undefined) {
      APIV1StageLayoutMap.encode(
        message.map,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_SetLayoutMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_SetLayoutMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.map = APIV1StageLayoutMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_SetLayoutMap {
    return {
      map: isSet(object.map)
        ? APIV1StageLayoutMap.fromJSON(object.map)
        : undefined,
    };
  },

  toJSON(message: APIV1StageRequest_SetLayoutMap): unknown {
    const obj: any = {};
    if (message.map !== undefined) {
      obj.map = APIV1StageLayoutMap.toJSON(message.map);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_SetLayoutMap>, I>>(
    base?: I,
  ): APIV1StageRequest_SetLayoutMap {
    return APIV1StageRequest_SetLayoutMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_SetLayoutMap>, I>>(
    object: I,
  ): APIV1StageRequest_SetLayoutMap {
    const message = createBaseAPIV1StageRequest_SetLayoutMap();
    message.map =
      object.map !== undefined && object.map !== null
        ? APIV1StageLayoutMap.fromPartial(object.map)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageRequest_GetMessage(): APIV1StageRequest_GetMessage {
  return {};
}

export const APIV1StageRequest_GetMessage = {
  encode(
    _: APIV1StageRequest_GetMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetMessage();
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

  fromJSON(_: any): APIV1StageRequest_GetMessage {
    return {};
  },

  toJSON(_: APIV1StageRequest_GetMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetMessage>, I>>(
    base?: I,
  ): APIV1StageRequest_GetMessage {
    return APIV1StageRequest_GetMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_GetMessage>, I>>(
    _: I,
  ): APIV1StageRequest_GetMessage {
    const message = createBaseAPIV1StageRequest_GetMessage();
    return message;
  },
};

function createBaseAPIV1StageRequest_PutMessage(): APIV1StageRequest_PutMessage {
  return { message: '' };
}

export const APIV1StageRequest_PutMessage = {
  encode(
    message: APIV1StageRequest_PutMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_PutMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_PutMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_PutMessage {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : '',
    };
  },

  toJSON(message: APIV1StageRequest_PutMessage): unknown {
    const obj: any = {};
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_PutMessage>, I>>(
    base?: I,
  ): APIV1StageRequest_PutMessage {
    return APIV1StageRequest_PutMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_PutMessage>, I>>(
    object: I,
  ): APIV1StageRequest_PutMessage {
    const message = createBaseAPIV1StageRequest_PutMessage();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseAPIV1StageRequest_DeleteMessage(): APIV1StageRequest_DeleteMessage {
  return {};
}

export const APIV1StageRequest_DeleteMessage = {
  encode(
    _: APIV1StageRequest_DeleteMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_DeleteMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_DeleteMessage();
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

  fromJSON(_: any): APIV1StageRequest_DeleteMessage {
    return {};
  },

  toJSON(_: APIV1StageRequest_DeleteMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_DeleteMessage>, I>>(
    base?: I,
  ): APIV1StageRequest_DeleteMessage {
    return APIV1StageRequest_DeleteMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_DeleteMessage>, I>>(
    _: I,
  ): APIV1StageRequest_DeleteMessage {
    const message = createBaseAPIV1StageRequest_DeleteMessage();
    return message;
  },
};

function createBaseAPIV1StageRequest_GetScreens(): APIV1StageRequest_GetScreens {
  return {};
}

export const APIV1StageRequest_GetScreens = {
  encode(
    _: APIV1StageRequest_GetScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetScreens();
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

  fromJSON(_: any): APIV1StageRequest_GetScreens {
    return {};
  },

  toJSON(_: APIV1StageRequest_GetScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetScreens>, I>>(
    base?: I,
  ): APIV1StageRequest_GetScreens {
    return APIV1StageRequest_GetScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_GetScreens>, I>>(
    _: I,
  ): APIV1StageRequest_GetScreens {
    const message = createBaseAPIV1StageRequest_GetScreens();
    return message;
  },
};

function createBaseAPIV1StageRequest_GetScreenLayout(): APIV1StageRequest_GetScreenLayout {
  return { id: '' };
}

export const APIV1StageRequest_GetScreenLayout = {
  encode(
    message: APIV1StageRequest_GetScreenLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetScreenLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetScreenLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_GetScreenLayout {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1StageRequest_GetScreenLayout): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetScreenLayout>, I>>(
    base?: I,
  ): APIV1StageRequest_GetScreenLayout {
    return APIV1StageRequest_GetScreenLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageRequest_GetScreenLayout>, I>,
  >(object: I): APIV1StageRequest_GetScreenLayout {
    const message = createBaseAPIV1StageRequest_GetScreenLayout();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1StageRequest_SetScreenLayout(): APIV1StageRequest_SetScreenLayout {
  return { id: '', layout: '' };
}

export const APIV1StageRequest_SetScreenLayout = {
  encode(
    message: APIV1StageRequest_SetScreenLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.layout !== '') {
      writer.uint32(18).string(message.layout);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_SetScreenLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_SetScreenLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.layout = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_SetScreenLayout {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      layout: isSet(object.layout) ? globalThis.String(object.layout) : '',
    };
  },

  toJSON(message: APIV1StageRequest_SetScreenLayout): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.layout !== '') {
      obj.layout = message.layout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_SetScreenLayout>, I>>(
    base?: I,
  ): APIV1StageRequest_SetScreenLayout {
    return APIV1StageRequest_SetScreenLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageRequest_SetScreenLayout>, I>,
  >(object: I): APIV1StageRequest_SetScreenLayout {
    const message = createBaseAPIV1StageRequest_SetScreenLayout();
    message.id = object.id ?? '';
    message.layout = object.layout ?? '';
    return message;
  },
};

function createBaseAPIV1StageRequest_GetLayouts(): APIV1StageRequest_GetLayouts {
  return {};
}

export const APIV1StageRequest_GetLayouts = {
  encode(
    _: APIV1StageRequest_GetLayouts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetLayouts {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetLayouts();
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

  fromJSON(_: any): APIV1StageRequest_GetLayouts {
    return {};
  },

  toJSON(_: APIV1StageRequest_GetLayouts): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetLayouts>, I>>(
    base?: I,
  ): APIV1StageRequest_GetLayouts {
    return APIV1StageRequest_GetLayouts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_GetLayouts>, I>>(
    _: I,
  ): APIV1StageRequest_GetLayouts {
    const message = createBaseAPIV1StageRequest_GetLayouts();
    return message;
  },
};

function createBaseAPIV1StageRequest_DeleteLayout(): APIV1StageRequest_DeleteLayout {
  return { id: '' };
}

export const APIV1StageRequest_DeleteLayout = {
  encode(
    message: APIV1StageRequest_DeleteLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_DeleteLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_DeleteLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_DeleteLayout {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1StageRequest_DeleteLayout): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_DeleteLayout>, I>>(
    base?: I,
  ): APIV1StageRequest_DeleteLayout {
    return APIV1StageRequest_DeleteLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageRequest_DeleteLayout>, I>>(
    object: I,
  ): APIV1StageRequest_DeleteLayout {
    const message = createBaseAPIV1StageRequest_DeleteLayout();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1StageRequest_GetLayoutThumbnail(): APIV1StageRequest_GetLayoutThumbnail {
  return { id: '', quality: 0 };
}

export const APIV1StageRequest_GetLayoutThumbnail = {
  encode(
    message: APIV1StageRequest_GetLayoutThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.quality !== 0) {
      writer.uint32(16).int32(message.quality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageRequest_GetLayoutThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageRequest_GetLayoutThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quality = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageRequest_GetLayoutThumbnail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1StageRequest_GetLayoutThumbnail): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageRequest_GetLayoutThumbnail>, I>>(
    base?: I,
  ): APIV1StageRequest_GetLayoutThumbnail {
    return APIV1StageRequest_GetLayoutThumbnail.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageRequest_GetLayoutThumbnail>, I>,
  >(object: I): APIV1StageRequest_GetLayoutThumbnail {
    const message = createBaseAPIV1StageRequest_GetLayoutThumbnail();
    message.id = object.id ?? '';
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1StageResponse(): APIV1StageResponse {
  return {
    getLayoutMap: undefined,
    setLayoutMap: undefined,
    getMessage: undefined,
    putMessage: undefined,
    deleteMessage: undefined,
    getScreens: undefined,
    getScreenLayout: undefined,
    setScreenLayout: undefined,
    getLayouts: undefined,
    deleteLayout: undefined,
    getLayoutThumbnail: undefined,
  };
}

export const APIV1StageResponse = {
  encode(
    message: APIV1StageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getLayoutMap !== undefined) {
      APIV1StageResponse_GetLayoutMap.encode(
        message.getLayoutMap,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.setLayoutMap !== undefined) {
      APIV1StageResponse_SetLayoutMap.encode(
        message.setLayoutMap,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getMessage !== undefined) {
      APIV1StageResponse_GetMessage.encode(
        message.getMessage,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putMessage !== undefined) {
      APIV1StageResponse_PutMessage.encode(
        message.putMessage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.deleteMessage !== undefined) {
      APIV1StageResponse_DeleteMessage.encode(
        message.deleteMessage,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getScreens !== undefined) {
      APIV1StageResponse_GetScreens.encode(
        message.getScreens,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getScreenLayout !== undefined) {
      APIV1StageResponse_GetScreenLayout.encode(
        message.getScreenLayout,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.setScreenLayout !== undefined) {
      APIV1StageResponse_SetScreenLayout.encode(
        message.setScreenLayout,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getLayouts !== undefined) {
      APIV1StageResponse_GetLayouts.encode(
        message.getLayouts,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.deleteLayout !== undefined) {
      APIV1StageResponse_DeleteLayout.encode(
        message.deleteLayout,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.getLayoutThumbnail !== undefined) {
      APIV1StageResponse_GetLayoutThumbnail.encode(
        message.getLayoutThumbnail,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StageResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getLayoutMap = APIV1StageResponse_GetLayoutMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setLayoutMap = APIV1StageResponse_SetLayoutMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getMessage = APIV1StageResponse_GetMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putMessage = APIV1StageResponse_PutMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleteMessage = APIV1StageResponse_DeleteMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getScreens = APIV1StageResponse_GetScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getScreenLayout = APIV1StageResponse_GetScreenLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.setScreenLayout = APIV1StageResponse_SetScreenLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getLayouts = APIV1StageResponse_GetLayouts.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.deleteLayout = APIV1StageResponse_DeleteLayout.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.getLayoutThumbnail =
            APIV1StageResponse_GetLayoutThumbnail.decode(
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

  fromJSON(object: any): APIV1StageResponse {
    return {
      getLayoutMap: isSet(object.getLayoutMap)
        ? APIV1StageResponse_GetLayoutMap.fromJSON(object.getLayoutMap)
        : undefined,
      setLayoutMap: isSet(object.setLayoutMap)
        ? APIV1StageResponse_SetLayoutMap.fromJSON(object.setLayoutMap)
        : undefined,
      getMessage: isSet(object.getMessage)
        ? APIV1StageResponse_GetMessage.fromJSON(object.getMessage)
        : undefined,
      putMessage: isSet(object.putMessage)
        ? APIV1StageResponse_PutMessage.fromJSON(object.putMessage)
        : undefined,
      deleteMessage: isSet(object.deleteMessage)
        ? APIV1StageResponse_DeleteMessage.fromJSON(object.deleteMessage)
        : undefined,
      getScreens: isSet(object.getScreens)
        ? APIV1StageResponse_GetScreens.fromJSON(object.getScreens)
        : undefined,
      getScreenLayout: isSet(object.getScreenLayout)
        ? APIV1StageResponse_GetScreenLayout.fromJSON(object.getScreenLayout)
        : undefined,
      setScreenLayout: isSet(object.setScreenLayout)
        ? APIV1StageResponse_SetScreenLayout.fromJSON(object.setScreenLayout)
        : undefined,
      getLayouts: isSet(object.getLayouts)
        ? APIV1StageResponse_GetLayouts.fromJSON(object.getLayouts)
        : undefined,
      deleteLayout: isSet(object.deleteLayout)
        ? APIV1StageResponse_DeleteLayout.fromJSON(object.deleteLayout)
        : undefined,
      getLayoutThumbnail: isSet(object.getLayoutThumbnail)
        ? APIV1StageResponse_GetLayoutThumbnail.fromJSON(
            object.getLayoutThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1StageResponse): unknown {
    const obj: any = {};
    if (message.getLayoutMap !== undefined) {
      obj.getLayoutMap = APIV1StageResponse_GetLayoutMap.toJSON(
        message.getLayoutMap,
      );
    }
    if (message.setLayoutMap !== undefined) {
      obj.setLayoutMap = APIV1StageResponse_SetLayoutMap.toJSON(
        message.setLayoutMap,
      );
    }
    if (message.getMessage !== undefined) {
      obj.getMessage = APIV1StageResponse_GetMessage.toJSON(message.getMessage);
    }
    if (message.putMessage !== undefined) {
      obj.putMessage = APIV1StageResponse_PutMessage.toJSON(message.putMessage);
    }
    if (message.deleteMessage !== undefined) {
      obj.deleteMessage = APIV1StageResponse_DeleteMessage.toJSON(
        message.deleteMessage,
      );
    }
    if (message.getScreens !== undefined) {
      obj.getScreens = APIV1StageResponse_GetScreens.toJSON(message.getScreens);
    }
    if (message.getScreenLayout !== undefined) {
      obj.getScreenLayout = APIV1StageResponse_GetScreenLayout.toJSON(
        message.getScreenLayout,
      );
    }
    if (message.setScreenLayout !== undefined) {
      obj.setScreenLayout = APIV1StageResponse_SetScreenLayout.toJSON(
        message.setScreenLayout,
      );
    }
    if (message.getLayouts !== undefined) {
      obj.getLayouts = APIV1StageResponse_GetLayouts.toJSON(message.getLayouts);
    }
    if (message.deleteLayout !== undefined) {
      obj.deleteLayout = APIV1StageResponse_DeleteLayout.toJSON(
        message.deleteLayout,
      );
    }
    if (message.getLayoutThumbnail !== undefined) {
      obj.getLayoutThumbnail = APIV1StageResponse_GetLayoutThumbnail.toJSON(
        message.getLayoutThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse>, I>>(
    base?: I,
  ): APIV1StageResponse {
    return APIV1StageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse>, I>>(
    object: I,
  ): APIV1StageResponse {
    const message = createBaseAPIV1StageResponse();
    message.getLayoutMap =
      object.getLayoutMap !== undefined && object.getLayoutMap !== null
        ? APIV1StageResponse_GetLayoutMap.fromPartial(object.getLayoutMap)
        : undefined;
    message.setLayoutMap =
      object.setLayoutMap !== undefined && object.setLayoutMap !== null
        ? APIV1StageResponse_SetLayoutMap.fromPartial(object.setLayoutMap)
        : undefined;
    message.getMessage =
      object.getMessage !== undefined && object.getMessage !== null
        ? APIV1StageResponse_GetMessage.fromPartial(object.getMessage)
        : undefined;
    message.putMessage =
      object.putMessage !== undefined && object.putMessage !== null
        ? APIV1StageResponse_PutMessage.fromPartial(object.putMessage)
        : undefined;
    message.deleteMessage =
      object.deleteMessage !== undefined && object.deleteMessage !== null
        ? APIV1StageResponse_DeleteMessage.fromPartial(object.deleteMessage)
        : undefined;
    message.getScreens =
      object.getScreens !== undefined && object.getScreens !== null
        ? APIV1StageResponse_GetScreens.fromPartial(object.getScreens)
        : undefined;
    message.getScreenLayout =
      object.getScreenLayout !== undefined && object.getScreenLayout !== null
        ? APIV1StageResponse_GetScreenLayout.fromPartial(object.getScreenLayout)
        : undefined;
    message.setScreenLayout =
      object.setScreenLayout !== undefined && object.setScreenLayout !== null
        ? APIV1StageResponse_SetScreenLayout.fromPartial(object.setScreenLayout)
        : undefined;
    message.getLayouts =
      object.getLayouts !== undefined && object.getLayouts !== null
        ? APIV1StageResponse_GetLayouts.fromPartial(object.getLayouts)
        : undefined;
    message.deleteLayout =
      object.deleteLayout !== undefined && object.deleteLayout !== null
        ? APIV1StageResponse_DeleteLayout.fromPartial(object.deleteLayout)
        : undefined;
    message.getLayoutThumbnail =
      object.getLayoutThumbnail !== undefined &&
      object.getLayoutThumbnail !== null
        ? APIV1StageResponse_GetLayoutThumbnail.fromPartial(
            object.getLayoutThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageResponse_GetLayoutMap(): APIV1StageResponse_GetLayoutMap {
  return { map: undefined };
}

export const APIV1StageResponse_GetLayoutMap = {
  encode(
    message: APIV1StageResponse_GetLayoutMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.map !== undefined) {
      APIV1StageLayoutMap.encode(
        message.map,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetLayoutMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetLayoutMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.map = APIV1StageLayoutMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetLayoutMap {
    return {
      map: isSet(object.map)
        ? APIV1StageLayoutMap.fromJSON(object.map)
        : undefined,
    };
  },

  toJSON(message: APIV1StageResponse_GetLayoutMap): unknown {
    const obj: any = {};
    if (message.map !== undefined) {
      obj.map = APIV1StageLayoutMap.toJSON(message.map);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetLayoutMap>, I>>(
    base?: I,
  ): APIV1StageResponse_GetLayoutMap {
    return APIV1StageResponse_GetLayoutMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_GetLayoutMap>, I>>(
    object: I,
  ): APIV1StageResponse_GetLayoutMap {
    const message = createBaseAPIV1StageResponse_GetLayoutMap();
    message.map =
      object.map !== undefined && object.map !== null
        ? APIV1StageLayoutMap.fromPartial(object.map)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageResponse_SetLayoutMap(): APIV1StageResponse_SetLayoutMap {
  return {};
}

export const APIV1StageResponse_SetLayoutMap = {
  encode(
    _: APIV1StageResponse_SetLayoutMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_SetLayoutMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_SetLayoutMap();
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

  fromJSON(_: any): APIV1StageResponse_SetLayoutMap {
    return {};
  },

  toJSON(_: APIV1StageResponse_SetLayoutMap): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_SetLayoutMap>, I>>(
    base?: I,
  ): APIV1StageResponse_SetLayoutMap {
    return APIV1StageResponse_SetLayoutMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_SetLayoutMap>, I>>(
    _: I,
  ): APIV1StageResponse_SetLayoutMap {
    const message = createBaseAPIV1StageResponse_SetLayoutMap();
    return message;
  },
};

function createBaseAPIV1StageResponse_GetMessage(): APIV1StageResponse_GetMessage {
  return { message: '' };
}

export const APIV1StageResponse_GetMessage = {
  encode(
    message: APIV1StageResponse_GetMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetMessage {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : '',
    };
  },

  toJSON(message: APIV1StageResponse_GetMessage): unknown {
    const obj: any = {};
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetMessage>, I>>(
    base?: I,
  ): APIV1StageResponse_GetMessage {
    return APIV1StageResponse_GetMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_GetMessage>, I>>(
    object: I,
  ): APIV1StageResponse_GetMessage {
    const message = createBaseAPIV1StageResponse_GetMessage();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseAPIV1StageResponse_PutMessage(): APIV1StageResponse_PutMessage {
  return {};
}

export const APIV1StageResponse_PutMessage = {
  encode(
    _: APIV1StageResponse_PutMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_PutMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_PutMessage();
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

  fromJSON(_: any): APIV1StageResponse_PutMessage {
    return {};
  },

  toJSON(_: APIV1StageResponse_PutMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_PutMessage>, I>>(
    base?: I,
  ): APIV1StageResponse_PutMessage {
    return APIV1StageResponse_PutMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_PutMessage>, I>>(
    _: I,
  ): APIV1StageResponse_PutMessage {
    const message = createBaseAPIV1StageResponse_PutMessage();
    return message;
  },
};

function createBaseAPIV1StageResponse_DeleteMessage(): APIV1StageResponse_DeleteMessage {
  return {};
}

export const APIV1StageResponse_DeleteMessage = {
  encode(
    _: APIV1StageResponse_DeleteMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_DeleteMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_DeleteMessage();
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

  fromJSON(_: any): APIV1StageResponse_DeleteMessage {
    return {};
  },

  toJSON(_: APIV1StageResponse_DeleteMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_DeleteMessage>, I>>(
    base?: I,
  ): APIV1StageResponse_DeleteMessage {
    return APIV1StageResponse_DeleteMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageResponse_DeleteMessage>, I>,
  >(_: I): APIV1StageResponse_DeleteMessage {
    const message = createBaseAPIV1StageResponse_DeleteMessage();
    return message;
  },
};

function createBaseAPIV1StageResponse_GetScreens(): APIV1StageResponse_GetScreens {
  return { screens: [] };
}

export const APIV1StageResponse_GetScreens = {
  encode(
    message: APIV1StageResponse_GetScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.screens) {
      APIV1Identifier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screens.push(APIV1Identifier.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetScreens {
    return {
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => APIV1Identifier.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1StageResponse_GetScreens): unknown {
    const obj: any = {};
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => APIV1Identifier.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetScreens>, I>>(
    base?: I,
  ): APIV1StageResponse_GetScreens {
    return APIV1StageResponse_GetScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_GetScreens>, I>>(
    object: I,
  ): APIV1StageResponse_GetScreens {
    const message = createBaseAPIV1StageResponse_GetScreens();
    message.screens =
      object.screens?.map((e) => APIV1Identifier.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1StageResponse_GetScreenLayout(): APIV1StageResponse_GetScreenLayout {
  return { id: undefined };
}

export const APIV1StageResponse_GetScreenLayout = {
  encode(
    message: APIV1StageResponse_GetScreenLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetScreenLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetScreenLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetScreenLayout {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1StageResponse_GetScreenLayout): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetScreenLayout>, I>>(
    base?: I,
  ): APIV1StageResponse_GetScreenLayout {
    return APIV1StageResponse_GetScreenLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageResponse_GetScreenLayout>, I>,
  >(object: I): APIV1StageResponse_GetScreenLayout {
    const message = createBaseAPIV1StageResponse_GetScreenLayout();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageResponse_SetScreenLayout(): APIV1StageResponse_SetScreenLayout {
  return {};
}

export const APIV1StageResponse_SetScreenLayout = {
  encode(
    _: APIV1StageResponse_SetScreenLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_SetScreenLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_SetScreenLayout();
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

  fromJSON(_: any): APIV1StageResponse_SetScreenLayout {
    return {};
  },

  toJSON(_: APIV1StageResponse_SetScreenLayout): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_SetScreenLayout>, I>>(
    base?: I,
  ): APIV1StageResponse_SetScreenLayout {
    return APIV1StageResponse_SetScreenLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageResponse_SetScreenLayout>, I>,
  >(_: I): APIV1StageResponse_SetScreenLayout {
    const message = createBaseAPIV1StageResponse_SetScreenLayout();
    return message;
  },
};

function createBaseAPIV1StageResponse_GetLayouts(): APIV1StageResponse_GetLayouts {
  return { layouts: [] };
}

export const APIV1StageResponse_GetLayouts = {
  encode(
    message: APIV1StageResponse_GetLayouts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.layouts) {
      APIV1StageResponse_GetLayouts_Layout.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetLayouts {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetLayouts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.layouts.push(
            APIV1StageResponse_GetLayouts_Layout.decode(
              reader,
              reader.uint32(),
            ),
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

  fromJSON(object: any): APIV1StageResponse_GetLayouts {
    return {
      layouts: globalThis.Array.isArray(object?.layouts)
        ? object.layouts.map((e: any) =>
            APIV1StageResponse_GetLayouts_Layout.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: APIV1StageResponse_GetLayouts): unknown {
    const obj: any = {};
    if (message.layouts?.length) {
      obj.layouts = message.layouts.map((e) =>
        APIV1StageResponse_GetLayouts_Layout.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetLayouts>, I>>(
    base?: I,
  ): APIV1StageResponse_GetLayouts {
    return APIV1StageResponse_GetLayouts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_GetLayouts>, I>>(
    object: I,
  ): APIV1StageResponse_GetLayouts {
    const message = createBaseAPIV1StageResponse_GetLayouts();
    message.layouts =
      object.layouts?.map((e) =>
        APIV1StageResponse_GetLayouts_Layout.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseAPIV1StageResponse_GetLayouts_Layout(): APIV1StageResponse_GetLayouts_Layout {
  return { id: undefined };
}

export const APIV1StageResponse_GetLayouts_Layout = {
  encode(
    message: APIV1StageResponse_GetLayouts_Layout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetLayouts_Layout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetLayouts_Layout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetLayouts_Layout {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1StageResponse_GetLayouts_Layout): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_GetLayouts_Layout>, I>>(
    base?: I,
  ): APIV1StageResponse_GetLayouts_Layout {
    return APIV1StageResponse_GetLayouts_Layout.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageResponse_GetLayouts_Layout>, I>,
  >(object: I): APIV1StageResponse_GetLayouts_Layout {
    const message = createBaseAPIV1StageResponse_GetLayouts_Layout();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StageResponse_DeleteLayout(): APIV1StageResponse_DeleteLayout {
  return {};
}

export const APIV1StageResponse_DeleteLayout = {
  encode(
    _: APIV1StageResponse_DeleteLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_DeleteLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_DeleteLayout();
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

  fromJSON(_: any): APIV1StageResponse_DeleteLayout {
    return {};
  },

  toJSON(_: APIV1StageResponse_DeleteLayout): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StageResponse_DeleteLayout>, I>>(
    base?: I,
  ): APIV1StageResponse_DeleteLayout {
    return APIV1StageResponse_DeleteLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StageResponse_DeleteLayout>, I>>(
    _: I,
  ): APIV1StageResponse_DeleteLayout {
    const message = createBaseAPIV1StageResponse_DeleteLayout();
    return message;
  },
};

function createBaseAPIV1StageResponse_GetLayoutThumbnail(): APIV1StageResponse_GetLayoutThumbnail {
  return { data: new Uint8Array(0) };
}

export const APIV1StageResponse_GetLayoutThumbnail = {
  encode(
    message: APIV1StageResponse_GetLayoutThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StageResponse_GetLayoutThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StageResponse_GetLayoutThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StageResponse_GetLayoutThumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1StageResponse_GetLayoutThumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1StageResponse_GetLayoutThumbnail>, I>,
  >(base?: I): APIV1StageResponse_GetLayoutThumbnail {
    return APIV1StageResponse_GetLayoutThumbnail.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StageResponse_GetLayoutThumbnail>, I>,
  >(object: I): APIV1StageResponse_GetLayoutThumbnail {
    const message = createBaseAPIV1StageResponse_GetLayoutThumbnail();
    message.data = object.data ?? new Uint8Array(0);
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
