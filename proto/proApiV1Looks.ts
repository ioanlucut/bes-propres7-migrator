/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1Look {
  id: APIV1Identifier | undefined;
  screens: APIV1Screen[];
}

export interface APIV1Screen {
  videoInput: boolean;
  media: boolean;
  slide: boolean;
  announcements: boolean;
  props: boolean;
  messages: boolean;
  presentation: string;
  mask: string;
}

export interface APIV1LooksRequest {
  looks?: APIV1LooksRequest_Looks | undefined;
  createLook?: APIV1LooksRequest_CreateLook | undefined;
  getCurrentLook?: APIV1LooksRequest_GetCurrentLook | undefined;
  putCurrentLook?: APIV1LooksRequest_PutCurrentLook | undefined;
  getLook?: APIV1LooksRequest_GetLook | undefined;
  putLook?: APIV1LooksRequest_PutLook | undefined;
  deleteLook?: APIV1LooksRequest_DeleteLook | undefined;
  triggerLook?: APIV1LooksRequest_TriggerLook | undefined;
}

export interface APIV1LooksRequest_Looks {}

export interface APIV1LooksRequest_CreateLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksRequest_GetCurrentLook {}

export interface APIV1LooksRequest_PutCurrentLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksRequest_GetLook {
  id: string;
}

export interface APIV1LooksRequest_PutLook {
  id: string;
  look: APIV1Look | undefined;
}

export interface APIV1LooksRequest_DeleteLook {
  id: string;
}

export interface APIV1LooksRequest_TriggerLook {
  id: string;
}

export interface APIV1LooksResponse {
  looks?: APIV1LooksResponse_Looks | undefined;
  createLook?: APIV1LooksResponse_CreateLook | undefined;
  getCurrentLook?: APIV1LooksResponse_GetCurrentLook | undefined;
  putCurrentLook?: APIV1LooksResponse_PutCurrentLook | undefined;
  getLook?: APIV1LooksResponse_GetLook | undefined;
  putLook?: APIV1LooksResponse_PutLook | undefined;
  deleteLook?: APIV1LooksResponse_DeleteLook | undefined;
  triggerLook?: APIV1LooksResponse_TriggerLook | undefined;
}

export interface APIV1LooksResponse_Looks {
  looks: APIV1Look[];
}

export interface APIV1LooksResponse_CreateLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksResponse_GetCurrentLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksResponse_PutCurrentLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksResponse_GetLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksResponse_PutLook {
  look: APIV1Look | undefined;
}

export interface APIV1LooksResponse_DeleteLook {}

export interface APIV1LooksResponse_TriggerLook {}

function createBaseAPIV1Look(): APIV1Look {
  return { id: undefined, screens: [] };
}

export const APIV1Look = {
  encode(
    message: APIV1Look,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.screens) {
      APIV1Screen.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Look {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Look();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screens.push(APIV1Screen.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Look {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => APIV1Screen.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1Look): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => APIV1Screen.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Look>, I>>(base?: I): APIV1Look {
    return APIV1Look.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Look>, I>>(
    object: I,
  ): APIV1Look {
    const message = createBaseAPIV1Look();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.screens =
      object.screens?.map((e) => APIV1Screen.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1Screen(): APIV1Screen {
  return {
    videoInput: false,
    media: false,
    slide: false,
    announcements: false,
    props: false,
    messages: false,
    presentation: '',
    mask: '',
  };
}

export const APIV1Screen = {
  encode(
    message: APIV1Screen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.videoInput !== false) {
      writer.uint32(8).bool(message.videoInput);
    }
    if (message.media !== false) {
      writer.uint32(16).bool(message.media);
    }
    if (message.slide !== false) {
      writer.uint32(24).bool(message.slide);
    }
    if (message.announcements !== false) {
      writer.uint32(32).bool(message.announcements);
    }
    if (message.props !== false) {
      writer.uint32(40).bool(message.props);
    }
    if (message.messages !== false) {
      writer.uint32(48).bool(message.messages);
    }
    if (message.presentation !== '') {
      writer.uint32(58).string(message.presentation);
    }
    if (message.mask !== '') {
      writer.uint32(66).string(message.mask);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Screen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Screen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.videoInput = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.media = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.slide = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.announcements = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.props = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.messages = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.presentation = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mask = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Screen {
    return {
      videoInput: isSet(object.videoInput)
        ? globalThis.Boolean(object.videoInput)
        : false,
      media: isSet(object.media) ? globalThis.Boolean(object.media) : false,
      slide: isSet(object.slide) ? globalThis.Boolean(object.slide) : false,
      announcements: isSet(object.announcements)
        ? globalThis.Boolean(object.announcements)
        : false,
      props: isSet(object.props) ? globalThis.Boolean(object.props) : false,
      messages: isSet(object.messages)
        ? globalThis.Boolean(object.messages)
        : false,
      presentation: isSet(object.presentation)
        ? globalThis.String(object.presentation)
        : '',
      mask: isSet(object.mask) ? globalThis.String(object.mask) : '',
    };
  },

  toJSON(message: APIV1Screen): unknown {
    const obj: any = {};
    if (message.videoInput !== false) {
      obj.videoInput = message.videoInput;
    }
    if (message.media !== false) {
      obj.media = message.media;
    }
    if (message.slide !== false) {
      obj.slide = message.slide;
    }
    if (message.announcements !== false) {
      obj.announcements = message.announcements;
    }
    if (message.props !== false) {
      obj.props = message.props;
    }
    if (message.messages !== false) {
      obj.messages = message.messages;
    }
    if (message.presentation !== '') {
      obj.presentation = message.presentation;
    }
    if (message.mask !== '') {
      obj.mask = message.mask;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Screen>, I>>(base?: I): APIV1Screen {
    return APIV1Screen.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Screen>, I>>(
    object: I,
  ): APIV1Screen {
    const message = createBaseAPIV1Screen();
    message.videoInput = object.videoInput ?? false;
    message.media = object.media ?? false;
    message.slide = object.slide ?? false;
    message.announcements = object.announcements ?? false;
    message.props = object.props ?? false;
    message.messages = object.messages ?? false;
    message.presentation = object.presentation ?? '';
    message.mask = object.mask ?? '';
    return message;
  },
};

function createBaseAPIV1LooksRequest(): APIV1LooksRequest {
  return {
    looks: undefined,
    createLook: undefined,
    getCurrentLook: undefined,
    putCurrentLook: undefined,
    getLook: undefined,
    putLook: undefined,
    deleteLook: undefined,
    triggerLook: undefined,
  };
}

export const APIV1LooksRequest = {
  encode(
    message: APIV1LooksRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.looks !== undefined) {
      APIV1LooksRequest_Looks.encode(
        message.looks,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createLook !== undefined) {
      APIV1LooksRequest_CreateLook.encode(
        message.createLook,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getCurrentLook !== undefined) {
      APIV1LooksRequest_GetCurrentLook.encode(
        message.getCurrentLook,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putCurrentLook !== undefined) {
      APIV1LooksRequest_PutCurrentLook.encode(
        message.putCurrentLook,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getLook !== undefined) {
      APIV1LooksRequest_GetLook.encode(
        message.getLook,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.putLook !== undefined) {
      APIV1LooksRequest_PutLook.encode(
        message.putLook,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteLook !== undefined) {
      APIV1LooksRequest_DeleteLook.encode(
        message.deleteLook,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.triggerLook !== undefined) {
      APIV1LooksRequest_TriggerLook.encode(
        message.triggerLook,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1LooksRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.looks = APIV1LooksRequest_Looks.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createLook = APIV1LooksRequest_CreateLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getCurrentLook = APIV1LooksRequest_GetCurrentLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putCurrentLook = APIV1LooksRequest_PutCurrentLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getLook = APIV1LooksRequest_GetLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.putLook = APIV1LooksRequest_PutLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteLook = APIV1LooksRequest_DeleteLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.triggerLook = APIV1LooksRequest_TriggerLook.decode(
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

  fromJSON(object: any): APIV1LooksRequest {
    return {
      looks: isSet(object.looks)
        ? APIV1LooksRequest_Looks.fromJSON(object.looks)
        : undefined,
      createLook: isSet(object.createLook)
        ? APIV1LooksRequest_CreateLook.fromJSON(object.createLook)
        : undefined,
      getCurrentLook: isSet(object.getCurrentLook)
        ? APIV1LooksRequest_GetCurrentLook.fromJSON(object.getCurrentLook)
        : undefined,
      putCurrentLook: isSet(object.putCurrentLook)
        ? APIV1LooksRequest_PutCurrentLook.fromJSON(object.putCurrentLook)
        : undefined,
      getLook: isSet(object.getLook)
        ? APIV1LooksRequest_GetLook.fromJSON(object.getLook)
        : undefined,
      putLook: isSet(object.putLook)
        ? APIV1LooksRequest_PutLook.fromJSON(object.putLook)
        : undefined,
      deleteLook: isSet(object.deleteLook)
        ? APIV1LooksRequest_DeleteLook.fromJSON(object.deleteLook)
        : undefined,
      triggerLook: isSet(object.triggerLook)
        ? APIV1LooksRequest_TriggerLook.fromJSON(object.triggerLook)
        : undefined,
    };
  },

  toJSON(message: APIV1LooksRequest): unknown {
    const obj: any = {};
    if (message.looks !== undefined) {
      obj.looks = APIV1LooksRequest_Looks.toJSON(message.looks);
    }
    if (message.createLook !== undefined) {
      obj.createLook = APIV1LooksRequest_CreateLook.toJSON(message.createLook);
    }
    if (message.getCurrentLook !== undefined) {
      obj.getCurrentLook = APIV1LooksRequest_GetCurrentLook.toJSON(
        message.getCurrentLook,
      );
    }
    if (message.putCurrentLook !== undefined) {
      obj.putCurrentLook = APIV1LooksRequest_PutCurrentLook.toJSON(
        message.putCurrentLook,
      );
    }
    if (message.getLook !== undefined) {
      obj.getLook = APIV1LooksRequest_GetLook.toJSON(message.getLook);
    }
    if (message.putLook !== undefined) {
      obj.putLook = APIV1LooksRequest_PutLook.toJSON(message.putLook);
    }
    if (message.deleteLook !== undefined) {
      obj.deleteLook = APIV1LooksRequest_DeleteLook.toJSON(message.deleteLook);
    }
    if (message.triggerLook !== undefined) {
      obj.triggerLook = APIV1LooksRequest_TriggerLook.toJSON(
        message.triggerLook,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest>, I>>(
    base?: I,
  ): APIV1LooksRequest {
    return APIV1LooksRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest>, I>>(
    object: I,
  ): APIV1LooksRequest {
    const message = createBaseAPIV1LooksRequest();
    message.looks =
      object.looks !== undefined && object.looks !== null
        ? APIV1LooksRequest_Looks.fromPartial(object.looks)
        : undefined;
    message.createLook =
      object.createLook !== undefined && object.createLook !== null
        ? APIV1LooksRequest_CreateLook.fromPartial(object.createLook)
        : undefined;
    message.getCurrentLook =
      object.getCurrentLook !== undefined && object.getCurrentLook !== null
        ? APIV1LooksRequest_GetCurrentLook.fromPartial(object.getCurrentLook)
        : undefined;
    message.putCurrentLook =
      object.putCurrentLook !== undefined && object.putCurrentLook !== null
        ? APIV1LooksRequest_PutCurrentLook.fromPartial(object.putCurrentLook)
        : undefined;
    message.getLook =
      object.getLook !== undefined && object.getLook !== null
        ? APIV1LooksRequest_GetLook.fromPartial(object.getLook)
        : undefined;
    message.putLook =
      object.putLook !== undefined && object.putLook !== null
        ? APIV1LooksRequest_PutLook.fromPartial(object.putLook)
        : undefined;
    message.deleteLook =
      object.deleteLook !== undefined && object.deleteLook !== null
        ? APIV1LooksRequest_DeleteLook.fromPartial(object.deleteLook)
        : undefined;
    message.triggerLook =
      object.triggerLook !== undefined && object.triggerLook !== null
        ? APIV1LooksRequest_TriggerLook.fromPartial(object.triggerLook)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksRequest_Looks(): APIV1LooksRequest_Looks {
  return {};
}

export const APIV1LooksRequest_Looks = {
  encode(
    _: APIV1LooksRequest_Looks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksRequest_Looks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_Looks();
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

  fromJSON(_: any): APIV1LooksRequest_Looks {
    return {};
  },

  toJSON(_: APIV1LooksRequest_Looks): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_Looks>, I>>(
    base?: I,
  ): APIV1LooksRequest_Looks {
    return APIV1LooksRequest_Looks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_Looks>, I>>(
    _: I,
  ): APIV1LooksRequest_Looks {
    const message = createBaseAPIV1LooksRequest_Looks();
    return message;
  },
};

function createBaseAPIV1LooksRequest_CreateLook(): APIV1LooksRequest_CreateLook {
  return { look: undefined };
}

export const APIV1LooksRequest_CreateLook = {
  encode(
    message: APIV1LooksRequest_CreateLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksRequest_CreateLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_CreateLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksRequest_CreateLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksRequest_CreateLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_CreateLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_CreateLook {
    return APIV1LooksRequest_CreateLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_CreateLook>, I>>(
    object: I,
  ): APIV1LooksRequest_CreateLook {
    const message = createBaseAPIV1LooksRequest_CreateLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksRequest_GetCurrentLook(): APIV1LooksRequest_GetCurrentLook {
  return {};
}

export const APIV1LooksRequest_GetCurrentLook = {
  encode(
    _: APIV1LooksRequest_GetCurrentLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksRequest_GetCurrentLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_GetCurrentLook();
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

  fromJSON(_: any): APIV1LooksRequest_GetCurrentLook {
    return {};
  },

  toJSON(_: APIV1LooksRequest_GetCurrentLook): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_GetCurrentLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_GetCurrentLook {
    return APIV1LooksRequest_GetCurrentLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1LooksRequest_GetCurrentLook>, I>,
  >(_: I): APIV1LooksRequest_GetCurrentLook {
    const message = createBaseAPIV1LooksRequest_GetCurrentLook();
    return message;
  },
};

function createBaseAPIV1LooksRequest_PutCurrentLook(): APIV1LooksRequest_PutCurrentLook {
  return { look: undefined };
}

export const APIV1LooksRequest_PutCurrentLook = {
  encode(
    message: APIV1LooksRequest_PutCurrentLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksRequest_PutCurrentLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_PutCurrentLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksRequest_PutCurrentLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksRequest_PutCurrentLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_PutCurrentLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_PutCurrentLook {
    return APIV1LooksRequest_PutCurrentLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1LooksRequest_PutCurrentLook>, I>,
  >(object: I): APIV1LooksRequest_PutCurrentLook {
    const message = createBaseAPIV1LooksRequest_PutCurrentLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksRequest_GetLook(): APIV1LooksRequest_GetLook {
  return { id: '' };
}

export const APIV1LooksRequest_GetLook = {
  encode(
    message: APIV1LooksRequest_GetLook,
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
  ): APIV1LooksRequest_GetLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_GetLook();
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

  fromJSON(object: any): APIV1LooksRequest_GetLook {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1LooksRequest_GetLook): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_GetLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_GetLook {
    return APIV1LooksRequest_GetLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_GetLook>, I>>(
    object: I,
  ): APIV1LooksRequest_GetLook {
    const message = createBaseAPIV1LooksRequest_GetLook();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1LooksRequest_PutLook(): APIV1LooksRequest_PutLook {
  return { id: '', look: undefined };
}

export const APIV1LooksRequest_PutLook = {
  encode(
    message: APIV1LooksRequest_PutLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksRequest_PutLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_PutLook();
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

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksRequest_PutLook {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksRequest_PutLook): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_PutLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_PutLook {
    return APIV1LooksRequest_PutLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_PutLook>, I>>(
    object: I,
  ): APIV1LooksRequest_PutLook {
    const message = createBaseAPIV1LooksRequest_PutLook();
    message.id = object.id ?? '';
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksRequest_DeleteLook(): APIV1LooksRequest_DeleteLook {
  return { id: '' };
}

export const APIV1LooksRequest_DeleteLook = {
  encode(
    message: APIV1LooksRequest_DeleteLook,
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
  ): APIV1LooksRequest_DeleteLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_DeleteLook();
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

  fromJSON(object: any): APIV1LooksRequest_DeleteLook {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1LooksRequest_DeleteLook): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_DeleteLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_DeleteLook {
    return APIV1LooksRequest_DeleteLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_DeleteLook>, I>>(
    object: I,
  ): APIV1LooksRequest_DeleteLook {
    const message = createBaseAPIV1LooksRequest_DeleteLook();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1LooksRequest_TriggerLook(): APIV1LooksRequest_TriggerLook {
  return { id: '' };
}

export const APIV1LooksRequest_TriggerLook = {
  encode(
    message: APIV1LooksRequest_TriggerLook,
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
  ): APIV1LooksRequest_TriggerLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksRequest_TriggerLook();
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

  fromJSON(object: any): APIV1LooksRequest_TriggerLook {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1LooksRequest_TriggerLook): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksRequest_TriggerLook>, I>>(
    base?: I,
  ): APIV1LooksRequest_TriggerLook {
    return APIV1LooksRequest_TriggerLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksRequest_TriggerLook>, I>>(
    object: I,
  ): APIV1LooksRequest_TriggerLook {
    const message = createBaseAPIV1LooksRequest_TriggerLook();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1LooksResponse(): APIV1LooksResponse {
  return {
    looks: undefined,
    createLook: undefined,
    getCurrentLook: undefined,
    putCurrentLook: undefined,
    getLook: undefined,
    putLook: undefined,
    deleteLook: undefined,
    triggerLook: undefined,
  };
}

export const APIV1LooksResponse = {
  encode(
    message: APIV1LooksResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.looks !== undefined) {
      APIV1LooksResponse_Looks.encode(
        message.looks,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createLook !== undefined) {
      APIV1LooksResponse_CreateLook.encode(
        message.createLook,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getCurrentLook !== undefined) {
      APIV1LooksResponse_GetCurrentLook.encode(
        message.getCurrentLook,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putCurrentLook !== undefined) {
      APIV1LooksResponse_PutCurrentLook.encode(
        message.putCurrentLook,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getLook !== undefined) {
      APIV1LooksResponse_GetLook.encode(
        message.getLook,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.putLook !== undefined) {
      APIV1LooksResponse_PutLook.encode(
        message.putLook,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteLook !== undefined) {
      APIV1LooksResponse_DeleteLook.encode(
        message.deleteLook,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.triggerLook !== undefined) {
      APIV1LooksResponse_TriggerLook.encode(
        message.triggerLook,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1LooksResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.looks = APIV1LooksResponse_Looks.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createLook = APIV1LooksResponse_CreateLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getCurrentLook = APIV1LooksResponse_GetCurrentLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putCurrentLook = APIV1LooksResponse_PutCurrentLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getLook = APIV1LooksResponse_GetLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.putLook = APIV1LooksResponse_PutLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteLook = APIV1LooksResponse_DeleteLook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.triggerLook = APIV1LooksResponse_TriggerLook.decode(
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

  fromJSON(object: any): APIV1LooksResponse {
    return {
      looks: isSet(object.looks)
        ? APIV1LooksResponse_Looks.fromJSON(object.looks)
        : undefined,
      createLook: isSet(object.createLook)
        ? APIV1LooksResponse_CreateLook.fromJSON(object.createLook)
        : undefined,
      getCurrentLook: isSet(object.getCurrentLook)
        ? APIV1LooksResponse_GetCurrentLook.fromJSON(object.getCurrentLook)
        : undefined,
      putCurrentLook: isSet(object.putCurrentLook)
        ? APIV1LooksResponse_PutCurrentLook.fromJSON(object.putCurrentLook)
        : undefined,
      getLook: isSet(object.getLook)
        ? APIV1LooksResponse_GetLook.fromJSON(object.getLook)
        : undefined,
      putLook: isSet(object.putLook)
        ? APIV1LooksResponse_PutLook.fromJSON(object.putLook)
        : undefined,
      deleteLook: isSet(object.deleteLook)
        ? APIV1LooksResponse_DeleteLook.fromJSON(object.deleteLook)
        : undefined,
      triggerLook: isSet(object.triggerLook)
        ? APIV1LooksResponse_TriggerLook.fromJSON(object.triggerLook)
        : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse): unknown {
    const obj: any = {};
    if (message.looks !== undefined) {
      obj.looks = APIV1LooksResponse_Looks.toJSON(message.looks);
    }
    if (message.createLook !== undefined) {
      obj.createLook = APIV1LooksResponse_CreateLook.toJSON(message.createLook);
    }
    if (message.getCurrentLook !== undefined) {
      obj.getCurrentLook = APIV1LooksResponse_GetCurrentLook.toJSON(
        message.getCurrentLook,
      );
    }
    if (message.putCurrentLook !== undefined) {
      obj.putCurrentLook = APIV1LooksResponse_PutCurrentLook.toJSON(
        message.putCurrentLook,
      );
    }
    if (message.getLook !== undefined) {
      obj.getLook = APIV1LooksResponse_GetLook.toJSON(message.getLook);
    }
    if (message.putLook !== undefined) {
      obj.putLook = APIV1LooksResponse_PutLook.toJSON(message.putLook);
    }
    if (message.deleteLook !== undefined) {
      obj.deleteLook = APIV1LooksResponse_DeleteLook.toJSON(message.deleteLook);
    }
    if (message.triggerLook !== undefined) {
      obj.triggerLook = APIV1LooksResponse_TriggerLook.toJSON(
        message.triggerLook,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse>, I>>(
    base?: I,
  ): APIV1LooksResponse {
    return APIV1LooksResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse>, I>>(
    object: I,
  ): APIV1LooksResponse {
    const message = createBaseAPIV1LooksResponse();
    message.looks =
      object.looks !== undefined && object.looks !== null
        ? APIV1LooksResponse_Looks.fromPartial(object.looks)
        : undefined;
    message.createLook =
      object.createLook !== undefined && object.createLook !== null
        ? APIV1LooksResponse_CreateLook.fromPartial(object.createLook)
        : undefined;
    message.getCurrentLook =
      object.getCurrentLook !== undefined && object.getCurrentLook !== null
        ? APIV1LooksResponse_GetCurrentLook.fromPartial(object.getCurrentLook)
        : undefined;
    message.putCurrentLook =
      object.putCurrentLook !== undefined && object.putCurrentLook !== null
        ? APIV1LooksResponse_PutCurrentLook.fromPartial(object.putCurrentLook)
        : undefined;
    message.getLook =
      object.getLook !== undefined && object.getLook !== null
        ? APIV1LooksResponse_GetLook.fromPartial(object.getLook)
        : undefined;
    message.putLook =
      object.putLook !== undefined && object.putLook !== null
        ? APIV1LooksResponse_PutLook.fromPartial(object.putLook)
        : undefined;
    message.deleteLook =
      object.deleteLook !== undefined && object.deleteLook !== null
        ? APIV1LooksResponse_DeleteLook.fromPartial(object.deleteLook)
        : undefined;
    message.triggerLook =
      object.triggerLook !== undefined && object.triggerLook !== null
        ? APIV1LooksResponse_TriggerLook.fromPartial(object.triggerLook)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_Looks(): APIV1LooksResponse_Looks {
  return { looks: [] };
}

export const APIV1LooksResponse_Looks = {
  encode(
    message: APIV1LooksResponse_Looks,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.looks) {
      APIV1Look.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_Looks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_Looks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.looks.push(APIV1Look.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_Looks {
    return {
      looks: globalThis.Array.isArray(object?.looks)
        ? object.looks.map((e: any) => APIV1Look.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1LooksResponse_Looks): unknown {
    const obj: any = {};
    if (message.looks?.length) {
      obj.looks = message.looks.map((e) => APIV1Look.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_Looks>, I>>(
    base?: I,
  ): APIV1LooksResponse_Looks {
    return APIV1LooksResponse_Looks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_Looks>, I>>(
    object: I,
  ): APIV1LooksResponse_Looks {
    const message = createBaseAPIV1LooksResponse_Looks();
    message.looks = object.looks?.map((e) => APIV1Look.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1LooksResponse_CreateLook(): APIV1LooksResponse_CreateLook {
  return { look: undefined };
}

export const APIV1LooksResponse_CreateLook = {
  encode(
    message: APIV1LooksResponse_CreateLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_CreateLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_CreateLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_CreateLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse_CreateLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_CreateLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_CreateLook {
    return APIV1LooksResponse_CreateLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_CreateLook>, I>>(
    object: I,
  ): APIV1LooksResponse_CreateLook {
    const message = createBaseAPIV1LooksResponse_CreateLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_GetCurrentLook(): APIV1LooksResponse_GetCurrentLook {
  return { look: undefined };
}

export const APIV1LooksResponse_GetCurrentLook = {
  encode(
    message: APIV1LooksResponse_GetCurrentLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_GetCurrentLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_GetCurrentLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_GetCurrentLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse_GetCurrentLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_GetCurrentLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_GetCurrentLook {
    return APIV1LooksResponse_GetCurrentLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1LooksResponse_GetCurrentLook>, I>,
  >(object: I): APIV1LooksResponse_GetCurrentLook {
    const message = createBaseAPIV1LooksResponse_GetCurrentLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_PutCurrentLook(): APIV1LooksResponse_PutCurrentLook {
  return { look: undefined };
}

export const APIV1LooksResponse_PutCurrentLook = {
  encode(
    message: APIV1LooksResponse_PutCurrentLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_PutCurrentLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_PutCurrentLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_PutCurrentLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse_PutCurrentLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_PutCurrentLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_PutCurrentLook {
    return APIV1LooksResponse_PutCurrentLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1LooksResponse_PutCurrentLook>, I>,
  >(object: I): APIV1LooksResponse_PutCurrentLook {
    const message = createBaseAPIV1LooksResponse_PutCurrentLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_GetLook(): APIV1LooksResponse_GetLook {
  return { look: undefined };
}

export const APIV1LooksResponse_GetLook = {
  encode(
    message: APIV1LooksResponse_GetLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_GetLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_GetLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_GetLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse_GetLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_GetLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_GetLook {
    return APIV1LooksResponse_GetLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_GetLook>, I>>(
    object: I,
  ): APIV1LooksResponse_GetLook {
    const message = createBaseAPIV1LooksResponse_GetLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_PutLook(): APIV1LooksResponse_PutLook {
  return { look: undefined };
}

export const APIV1LooksResponse_PutLook = {
  encode(
    message: APIV1LooksResponse_PutLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.look !== undefined) {
      APIV1Look.encode(message.look, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_PutLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_PutLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.look = APIV1Look.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LooksResponse_PutLook {
    return {
      look: isSet(object.look) ? APIV1Look.fromJSON(object.look) : undefined,
    };
  },

  toJSON(message: APIV1LooksResponse_PutLook): unknown {
    const obj: any = {};
    if (message.look !== undefined) {
      obj.look = APIV1Look.toJSON(message.look);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_PutLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_PutLook {
    return APIV1LooksResponse_PutLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_PutLook>, I>>(
    object: I,
  ): APIV1LooksResponse_PutLook {
    const message = createBaseAPIV1LooksResponse_PutLook();
    message.look =
      object.look !== undefined && object.look !== null
        ? APIV1Look.fromPartial(object.look)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LooksResponse_DeleteLook(): APIV1LooksResponse_DeleteLook {
  return {};
}

export const APIV1LooksResponse_DeleteLook = {
  encode(
    _: APIV1LooksResponse_DeleteLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_DeleteLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_DeleteLook();
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

  fromJSON(_: any): APIV1LooksResponse_DeleteLook {
    return {};
  },

  toJSON(_: APIV1LooksResponse_DeleteLook): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_DeleteLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_DeleteLook {
    return APIV1LooksResponse_DeleteLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_DeleteLook>, I>>(
    _: I,
  ): APIV1LooksResponse_DeleteLook {
    const message = createBaseAPIV1LooksResponse_DeleteLook();
    return message;
  },
};

function createBaseAPIV1LooksResponse_TriggerLook(): APIV1LooksResponse_TriggerLook {
  return {};
}

export const APIV1LooksResponse_TriggerLook = {
  encode(
    _: APIV1LooksResponse_TriggerLook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LooksResponse_TriggerLook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LooksResponse_TriggerLook();
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

  fromJSON(_: any): APIV1LooksResponse_TriggerLook {
    return {};
  },

  toJSON(_: APIV1LooksResponse_TriggerLook): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LooksResponse_TriggerLook>, I>>(
    base?: I,
  ): APIV1LooksResponse_TriggerLook {
    return APIV1LooksResponse_TriggerLook.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LooksResponse_TriggerLook>, I>>(
    _: I,
  ): APIV1LooksResponse_TriggerLook {
    const message = createBaseAPIV1LooksResponse_TriggerLook();
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
