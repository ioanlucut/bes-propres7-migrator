/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1PropData {
  id: APIV1Identifier | undefined;
  isActive: boolean;
}

export interface APIV1PropRequest {
  props?: APIV1PropRequest_Props | undefined;
  getProp?: APIV1PropRequest_GetProp | undefined;
  deleteProp?: APIV1PropRequest_DeleteProp | undefined;
  triggerProp?: APIV1PropRequest_TriggerProp | undefined;
  clearProp?: APIV1PropRequest_ClearProp | undefined;
  getThumbnail?: APIV1PropRequest_GetThumbnail | undefined;
}

export interface APIV1PropRequest_Props {}

export interface APIV1PropRequest_GetProp {
  id: string;
}

export interface APIV1PropRequest_DeleteProp {
  id: string;
}

export interface APIV1PropRequest_TriggerProp {
  id: string;
}

export interface APIV1PropRequest_ClearProp {
  id: string;
}

export interface APIV1PropRequest_GetThumbnail {
  id: string;
  quality: number;
}

export interface APIV1PropResponse {
  props?: APIV1PropResponse_Props | undefined;
  getProp?: APIV1PropResponse_GetProp | undefined;
  deleteProp?: APIV1PropResponse_DeleteProp | undefined;
  triggerProp?: APIV1PropResponse_TriggerProp | undefined;
  clearProp?: APIV1PropResponse_ClearProp | undefined;
  getThumbnail?: APIV1PropResponse_GetThumbnail | undefined;
}

export interface APIV1PropResponse_Props {
  props: APIV1PropData[];
}

export interface APIV1PropResponse_GetProp {
  prop: APIV1PropData | undefined;
}

export interface APIV1PropResponse_DeleteProp {}

export interface APIV1PropResponse_TriggerProp {}

export interface APIV1PropResponse_ClearProp {}

export interface APIV1PropResponse_GetThumbnail {
  data: Uint8Array;
}

function createBaseAPIV1PropData(): APIV1PropData {
  return { id: undefined, isActive: false };
}

export const APIV1PropData = {
  encode(
    message: APIV1PropData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.isActive !== false) {
      writer.uint32(16).bool(message.isActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PropData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropData();
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
          if (tag !== 16) {
            break;
          }

          message.isActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PropData {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      isActive: isSet(object.isActive)
        ? globalThis.Boolean(object.isActive)
        : false,
    };
  },

  toJSON(message: APIV1PropData): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.isActive !== false) {
      obj.isActive = message.isActive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropData>, I>>(
    base?: I,
  ): APIV1PropData {
    return APIV1PropData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropData>, I>>(
    object: I,
  ): APIV1PropData {
    const message = createBaseAPIV1PropData();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.isActive = object.isActive ?? false;
    return message;
  },
};

function createBaseAPIV1PropRequest(): APIV1PropRequest {
  return {
    props: undefined,
    getProp: undefined,
    deleteProp: undefined,
    triggerProp: undefined,
    clearProp: undefined,
    getThumbnail: undefined,
  };
}

export const APIV1PropRequest = {
  encode(
    message: APIV1PropRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.props !== undefined) {
      APIV1PropRequest_Props.encode(
        message.props,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getProp !== undefined) {
      APIV1PropRequest_GetProp.encode(
        message.getProp,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.deleteProp !== undefined) {
      APIV1PropRequest_DeleteProp.encode(
        message.deleteProp,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.triggerProp !== undefined) {
      APIV1PropRequest_TriggerProp.encode(
        message.triggerProp,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.clearProp !== undefined) {
      APIV1PropRequest_ClearProp.encode(
        message.clearProp,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1PropRequest_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PropRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.props = APIV1PropRequest_Props.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getProp = APIV1PropRequest_GetProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteProp = APIV1PropRequest_DeleteProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.triggerProp = APIV1PropRequest_TriggerProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.clearProp = APIV1PropRequest_ClearProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getThumbnail = APIV1PropRequest_GetThumbnail.decode(
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

  fromJSON(object: any): APIV1PropRequest {
    return {
      props: isSet(object.props)
        ? APIV1PropRequest_Props.fromJSON(object.props)
        : undefined,
      getProp: isSet(object.getProp)
        ? APIV1PropRequest_GetProp.fromJSON(object.getProp)
        : undefined,
      deleteProp: isSet(object.deleteProp)
        ? APIV1PropRequest_DeleteProp.fromJSON(object.deleteProp)
        : undefined,
      triggerProp: isSet(object.triggerProp)
        ? APIV1PropRequest_TriggerProp.fromJSON(object.triggerProp)
        : undefined,
      clearProp: isSet(object.clearProp)
        ? APIV1PropRequest_ClearProp.fromJSON(object.clearProp)
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1PropRequest_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: APIV1PropRequest): unknown {
    const obj: any = {};
    if (message.props !== undefined) {
      obj.props = APIV1PropRequest_Props.toJSON(message.props);
    }
    if (message.getProp !== undefined) {
      obj.getProp = APIV1PropRequest_GetProp.toJSON(message.getProp);
    }
    if (message.deleteProp !== undefined) {
      obj.deleteProp = APIV1PropRequest_DeleteProp.toJSON(message.deleteProp);
    }
    if (message.triggerProp !== undefined) {
      obj.triggerProp = APIV1PropRequest_TriggerProp.toJSON(
        message.triggerProp,
      );
    }
    if (message.clearProp !== undefined) {
      obj.clearProp = APIV1PropRequest_ClearProp.toJSON(message.clearProp);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1PropRequest_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest>, I>>(
    base?: I,
  ): APIV1PropRequest {
    return APIV1PropRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest>, I>>(
    object: I,
  ): APIV1PropRequest {
    const message = createBaseAPIV1PropRequest();
    message.props =
      object.props !== undefined && object.props !== null
        ? APIV1PropRequest_Props.fromPartial(object.props)
        : undefined;
    message.getProp =
      object.getProp !== undefined && object.getProp !== null
        ? APIV1PropRequest_GetProp.fromPartial(object.getProp)
        : undefined;
    message.deleteProp =
      object.deleteProp !== undefined && object.deleteProp !== null
        ? APIV1PropRequest_DeleteProp.fromPartial(object.deleteProp)
        : undefined;
    message.triggerProp =
      object.triggerProp !== undefined && object.triggerProp !== null
        ? APIV1PropRequest_TriggerProp.fromPartial(object.triggerProp)
        : undefined;
    message.clearProp =
      object.clearProp !== undefined && object.clearProp !== null
        ? APIV1PropRequest_ClearProp.fromPartial(object.clearProp)
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1PropRequest_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PropRequest_Props(): APIV1PropRequest_Props {
  return {};
}

export const APIV1PropRequest_Props = {
  encode(
    _: APIV1PropRequest_Props,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropRequest_Props {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_Props();
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

  fromJSON(_: any): APIV1PropRequest_Props {
    return {};
  },

  toJSON(_: APIV1PropRequest_Props): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_Props>, I>>(
    base?: I,
  ): APIV1PropRequest_Props {
    return APIV1PropRequest_Props.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_Props>, I>>(
    _: I,
  ): APIV1PropRequest_Props {
    const message = createBaseAPIV1PropRequest_Props();
    return message;
  },
};

function createBaseAPIV1PropRequest_GetProp(): APIV1PropRequest_GetProp {
  return { id: '' };
}

export const APIV1PropRequest_GetProp = {
  encode(
    message: APIV1PropRequest_GetProp,
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
  ): APIV1PropRequest_GetProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_GetProp();
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

  fromJSON(object: any): APIV1PropRequest_GetProp {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PropRequest_GetProp): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_GetProp>, I>>(
    base?: I,
  ): APIV1PropRequest_GetProp {
    return APIV1PropRequest_GetProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_GetProp>, I>>(
    object: I,
  ): APIV1PropRequest_GetProp {
    const message = createBaseAPIV1PropRequest_GetProp();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PropRequest_DeleteProp(): APIV1PropRequest_DeleteProp {
  return { id: '' };
}

export const APIV1PropRequest_DeleteProp = {
  encode(
    message: APIV1PropRequest_DeleteProp,
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
  ): APIV1PropRequest_DeleteProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_DeleteProp();
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

  fromJSON(object: any): APIV1PropRequest_DeleteProp {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PropRequest_DeleteProp): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_DeleteProp>, I>>(
    base?: I,
  ): APIV1PropRequest_DeleteProp {
    return APIV1PropRequest_DeleteProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_DeleteProp>, I>>(
    object: I,
  ): APIV1PropRequest_DeleteProp {
    const message = createBaseAPIV1PropRequest_DeleteProp();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PropRequest_TriggerProp(): APIV1PropRequest_TriggerProp {
  return { id: '' };
}

export const APIV1PropRequest_TriggerProp = {
  encode(
    message: APIV1PropRequest_TriggerProp,
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
  ): APIV1PropRequest_TriggerProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_TriggerProp();
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

  fromJSON(object: any): APIV1PropRequest_TriggerProp {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PropRequest_TriggerProp): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_TriggerProp>, I>>(
    base?: I,
  ): APIV1PropRequest_TriggerProp {
    return APIV1PropRequest_TriggerProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_TriggerProp>, I>>(
    object: I,
  ): APIV1PropRequest_TriggerProp {
    const message = createBaseAPIV1PropRequest_TriggerProp();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PropRequest_ClearProp(): APIV1PropRequest_ClearProp {
  return { id: '' };
}

export const APIV1PropRequest_ClearProp = {
  encode(
    message: APIV1PropRequest_ClearProp,
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
  ): APIV1PropRequest_ClearProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_ClearProp();
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

  fromJSON(object: any): APIV1PropRequest_ClearProp {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PropRequest_ClearProp): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_ClearProp>, I>>(
    base?: I,
  ): APIV1PropRequest_ClearProp {
    return APIV1PropRequest_ClearProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_ClearProp>, I>>(
    object: I,
  ): APIV1PropRequest_ClearProp {
    const message = createBaseAPIV1PropRequest_ClearProp();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PropRequest_GetThumbnail(): APIV1PropRequest_GetThumbnail {
  return { id: '', quality: 0 };
}

export const APIV1PropRequest_GetThumbnail = {
  encode(
    message: APIV1PropRequest_GetThumbnail,
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
  ): APIV1PropRequest_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropRequest_GetThumbnail();
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

  fromJSON(object: any): APIV1PropRequest_GetThumbnail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1PropRequest_GetThumbnail): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropRequest_GetThumbnail>, I>>(
    base?: I,
  ): APIV1PropRequest_GetThumbnail {
    return APIV1PropRequest_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropRequest_GetThumbnail>, I>>(
    object: I,
  ): APIV1PropRequest_GetThumbnail {
    const message = createBaseAPIV1PropRequest_GetThumbnail();
    message.id = object.id ?? '';
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1PropResponse(): APIV1PropResponse {
  return {
    props: undefined,
    getProp: undefined,
    deleteProp: undefined,
    triggerProp: undefined,
    clearProp: undefined,
    getThumbnail: undefined,
  };
}

export const APIV1PropResponse = {
  encode(
    message: APIV1PropResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.props !== undefined) {
      APIV1PropResponse_Props.encode(
        message.props,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getProp !== undefined) {
      APIV1PropResponse_GetProp.encode(
        message.getProp,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.deleteProp !== undefined) {
      APIV1PropResponse_DeleteProp.encode(
        message.deleteProp,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.triggerProp !== undefined) {
      APIV1PropResponse_TriggerProp.encode(
        message.triggerProp,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.clearProp !== undefined) {
      APIV1PropResponse_ClearProp.encode(
        message.clearProp,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1PropResponse_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PropResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.props = APIV1PropResponse_Props.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getProp = APIV1PropResponse_GetProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteProp = APIV1PropResponse_DeleteProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.triggerProp = APIV1PropResponse_TriggerProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.clearProp = APIV1PropResponse_ClearProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getThumbnail = APIV1PropResponse_GetThumbnail.decode(
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

  fromJSON(object: any): APIV1PropResponse {
    return {
      props: isSet(object.props)
        ? APIV1PropResponse_Props.fromJSON(object.props)
        : undefined,
      getProp: isSet(object.getProp)
        ? APIV1PropResponse_GetProp.fromJSON(object.getProp)
        : undefined,
      deleteProp: isSet(object.deleteProp)
        ? APIV1PropResponse_DeleteProp.fromJSON(object.deleteProp)
        : undefined,
      triggerProp: isSet(object.triggerProp)
        ? APIV1PropResponse_TriggerProp.fromJSON(object.triggerProp)
        : undefined,
      clearProp: isSet(object.clearProp)
        ? APIV1PropResponse_ClearProp.fromJSON(object.clearProp)
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1PropResponse_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: APIV1PropResponse): unknown {
    const obj: any = {};
    if (message.props !== undefined) {
      obj.props = APIV1PropResponse_Props.toJSON(message.props);
    }
    if (message.getProp !== undefined) {
      obj.getProp = APIV1PropResponse_GetProp.toJSON(message.getProp);
    }
    if (message.deleteProp !== undefined) {
      obj.deleteProp = APIV1PropResponse_DeleteProp.toJSON(message.deleteProp);
    }
    if (message.triggerProp !== undefined) {
      obj.triggerProp = APIV1PropResponse_TriggerProp.toJSON(
        message.triggerProp,
      );
    }
    if (message.clearProp !== undefined) {
      obj.clearProp = APIV1PropResponse_ClearProp.toJSON(message.clearProp);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1PropResponse_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse>, I>>(
    base?: I,
  ): APIV1PropResponse {
    return APIV1PropResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse>, I>>(
    object: I,
  ): APIV1PropResponse {
    const message = createBaseAPIV1PropResponse();
    message.props =
      object.props !== undefined && object.props !== null
        ? APIV1PropResponse_Props.fromPartial(object.props)
        : undefined;
    message.getProp =
      object.getProp !== undefined && object.getProp !== null
        ? APIV1PropResponse_GetProp.fromPartial(object.getProp)
        : undefined;
    message.deleteProp =
      object.deleteProp !== undefined && object.deleteProp !== null
        ? APIV1PropResponse_DeleteProp.fromPartial(object.deleteProp)
        : undefined;
    message.triggerProp =
      object.triggerProp !== undefined && object.triggerProp !== null
        ? APIV1PropResponse_TriggerProp.fromPartial(object.triggerProp)
        : undefined;
    message.clearProp =
      object.clearProp !== undefined && object.clearProp !== null
        ? APIV1PropResponse_ClearProp.fromPartial(object.clearProp)
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1PropResponse_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PropResponse_Props(): APIV1PropResponse_Props {
  return { props: [] };
}

export const APIV1PropResponse_Props = {
  encode(
    message: APIV1PropResponse_Props,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.props) {
      APIV1PropData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropResponse_Props {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_Props();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.props.push(APIV1PropData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PropResponse_Props {
    return {
      props: globalThis.Array.isArray(object?.props)
        ? object.props.map((e: any) => APIV1PropData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1PropResponse_Props): unknown {
    const obj: any = {};
    if (message.props?.length) {
      obj.props = message.props.map((e) => APIV1PropData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_Props>, I>>(
    base?: I,
  ): APIV1PropResponse_Props {
    return APIV1PropResponse_Props.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_Props>, I>>(
    object: I,
  ): APIV1PropResponse_Props {
    const message = createBaseAPIV1PropResponse_Props();
    message.props =
      object.props?.map((e) => APIV1PropData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PropResponse_GetProp(): APIV1PropResponse_GetProp {
  return { prop: undefined };
}

export const APIV1PropResponse_GetProp = {
  encode(
    message: APIV1PropResponse_GetProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.prop !== undefined) {
      APIV1PropData.encode(message.prop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropResponse_GetProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_GetProp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.prop = APIV1PropData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PropResponse_GetProp {
    return {
      prop: isSet(object.prop)
        ? APIV1PropData.fromJSON(object.prop)
        : undefined,
    };
  },

  toJSON(message: APIV1PropResponse_GetProp): unknown {
    const obj: any = {};
    if (message.prop !== undefined) {
      obj.prop = APIV1PropData.toJSON(message.prop);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_GetProp>, I>>(
    base?: I,
  ): APIV1PropResponse_GetProp {
    return APIV1PropResponse_GetProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_GetProp>, I>>(
    object: I,
  ): APIV1PropResponse_GetProp {
    const message = createBaseAPIV1PropResponse_GetProp();
    message.prop =
      object.prop !== undefined && object.prop !== null
        ? APIV1PropData.fromPartial(object.prop)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PropResponse_DeleteProp(): APIV1PropResponse_DeleteProp {
  return {};
}

export const APIV1PropResponse_DeleteProp = {
  encode(
    _: APIV1PropResponse_DeleteProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropResponse_DeleteProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_DeleteProp();
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

  fromJSON(_: any): APIV1PropResponse_DeleteProp {
    return {};
  },

  toJSON(_: APIV1PropResponse_DeleteProp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_DeleteProp>, I>>(
    base?: I,
  ): APIV1PropResponse_DeleteProp {
    return APIV1PropResponse_DeleteProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_DeleteProp>, I>>(
    _: I,
  ): APIV1PropResponse_DeleteProp {
    const message = createBaseAPIV1PropResponse_DeleteProp();
    return message;
  },
};

function createBaseAPIV1PropResponse_TriggerProp(): APIV1PropResponse_TriggerProp {
  return {};
}

export const APIV1PropResponse_TriggerProp = {
  encode(
    _: APIV1PropResponse_TriggerProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropResponse_TriggerProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_TriggerProp();
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

  fromJSON(_: any): APIV1PropResponse_TriggerProp {
    return {};
  },

  toJSON(_: APIV1PropResponse_TriggerProp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_TriggerProp>, I>>(
    base?: I,
  ): APIV1PropResponse_TriggerProp {
    return APIV1PropResponse_TriggerProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_TriggerProp>, I>>(
    _: I,
  ): APIV1PropResponse_TriggerProp {
    const message = createBaseAPIV1PropResponse_TriggerProp();
    return message;
  },
};

function createBaseAPIV1PropResponse_ClearProp(): APIV1PropResponse_ClearProp {
  return {};
}

export const APIV1PropResponse_ClearProp = {
  encode(
    _: APIV1PropResponse_ClearProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PropResponse_ClearProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_ClearProp();
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

  fromJSON(_: any): APIV1PropResponse_ClearProp {
    return {};
  },

  toJSON(_: APIV1PropResponse_ClearProp): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_ClearProp>, I>>(
    base?: I,
  ): APIV1PropResponse_ClearProp {
    return APIV1PropResponse_ClearProp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_ClearProp>, I>>(
    _: I,
  ): APIV1PropResponse_ClearProp {
    const message = createBaseAPIV1PropResponse_ClearProp();
    return message;
  },
};

function createBaseAPIV1PropResponse_GetThumbnail(): APIV1PropResponse_GetThumbnail {
  return { data: new Uint8Array(0) };
}

export const APIV1PropResponse_GetThumbnail = {
  encode(
    message: APIV1PropResponse_GetThumbnail,
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
  ): APIV1PropResponse_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PropResponse_GetThumbnail();
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

  fromJSON(object: any): APIV1PropResponse_GetThumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1PropResponse_GetThumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PropResponse_GetThumbnail>, I>>(
    base?: I,
  ): APIV1PropResponse_GetThumbnail {
    return APIV1PropResponse_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PropResponse_GetThumbnail>, I>>(
    object: I,
  ): APIV1PropResponse_GetThumbnail {
    const message = createBaseAPIV1PropResponse_GetThumbnail();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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
