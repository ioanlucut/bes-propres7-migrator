/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';
import { APIV1Size } from './proApiV1Size';

export const protobufPackage = 'rv.data';

export enum APIV1ScreenType {
  audience = 0,
  stage = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1ScreenTypeFromJSON(object: any): APIV1ScreenType {
  switch (object) {
    case 0:
    case 'audience':
      return APIV1ScreenType.audience;
    case 1:
    case 'stage':
      return APIV1ScreenType.stage;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1ScreenType.UNRECOGNIZED;
  }
}

export function aPIV1ScreenTypeToJSON(object: APIV1ScreenType): string {
  switch (object) {
    case APIV1ScreenType.audience:
      return 'audience';
    case APIV1ScreenType.stage:
      return 'stage';
    case APIV1ScreenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1SlideDisplayDetails {
  text: string;
  notes: string;
  uuid: string;
}

export interface APIV1ScreenConfig {
  id: APIV1Identifier | undefined;
  size: APIV1Size | undefined;
  screenType: APIV1ScreenType;
}

export interface APIV1StatusRequest {
  getLayers?: APIV1StatusRequest_GetLayers | undefined;
  getStageScreens?: APIV1StatusRequest_GetStageScreens | undefined;
  putStageScreens?: APIV1StatusRequest_PutStageScreens | undefined;
  getAudienceScreens?: APIV1StatusRequest_GetAudienceScreens | undefined;
  putAudienceScreens?: APIV1StatusRequest_PutAudienceScreens | undefined;
  getScreens?: APIV1StatusRequest_GetScreens | undefined;
  getSlide?: APIV1StatusRequest_GetSlide | undefined;
}

export interface APIV1StatusRequest_GetLayers {}

export interface APIV1StatusRequest_GetStageScreens {}

export interface APIV1StatusRequest_PutStageScreens {
  enabled: boolean;
}

export interface APIV1StatusRequest_GetAudienceScreens {}

export interface APIV1StatusRequest_PutAudienceScreens {
  enabled: boolean;
}

export interface APIV1StatusRequest_GetScreens {}

export interface APIV1StatusRequest_GetSlide {}

export interface APIV1StatusResponse {
  getLayers?: APIV1StatusResponse_GetLayers | undefined;
  getStageScreens?: APIV1StatusResponse_GetStageScreens | undefined;
  putStageScreens?: APIV1StatusResponse_PutStageScreens | undefined;
  getAudienceScreens?: APIV1StatusResponse_GetAudienceScreens | undefined;
  putAudienceScreens?: APIV1StatusResponse_PutAudienceScreens | undefined;
  getScreens?: APIV1StatusResponse_GetScreens | undefined;
  getSlide?: APIV1StatusResponse_GetSlide | undefined;
}

export interface APIV1StatusResponse_GetLayers {
  videoInput: boolean;
  media: boolean;
  slide: boolean;
  announcements: boolean;
  props: boolean;
  messages: boolean;
  audio: boolean;
}

export interface APIV1StatusResponse_GetStageScreens {
  enabled: boolean;
}

export interface APIV1StatusResponse_PutStageScreens {}

export interface APIV1StatusResponse_GetAudienceScreens {
  enabled: boolean;
}

export interface APIV1StatusResponse_PutAudienceScreens {}

export interface APIV1StatusResponse_GetScreens {
  screens: APIV1ScreenConfig[];
}

export interface APIV1StatusResponse_GetSlide {
  current: APIV1SlideDisplayDetails | undefined;
  next: APIV1SlideDisplayDetails | undefined;
}

function createBaseAPIV1SlideDisplayDetails(): APIV1SlideDisplayDetails {
  return { text: '', notes: '', uuid: '' };
}

export const APIV1SlideDisplayDetails = {
  encode(
    message: APIV1SlideDisplayDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.text !== '') {
      writer.uint32(10).string(message.text);
    }
    if (message.notes !== '') {
      writer.uint32(18).string(message.notes);
    }
    if (message.uuid !== '') {
      writer.uint32(26).string(message.uuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1SlideDisplayDetails {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1SlideDisplayDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1SlideDisplayDetails {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : '',
      notes: isSet(object.notes) ? globalThis.String(object.notes) : '',
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : '',
    };
  },

  toJSON(message: APIV1SlideDisplayDetails): unknown {
    const obj: any = {};
    if (message.text !== '') {
      obj.text = message.text;
    }
    if (message.notes !== '') {
      obj.notes = message.notes;
    }
    if (message.uuid !== '') {
      obj.uuid = message.uuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1SlideDisplayDetails>, I>>(
    base?: I,
  ): APIV1SlideDisplayDetails {
    return APIV1SlideDisplayDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1SlideDisplayDetails>, I>>(
    object: I,
  ): APIV1SlideDisplayDetails {
    const message = createBaseAPIV1SlideDisplayDetails();
    message.text = object.text ?? '';
    message.notes = object.notes ?? '';
    message.uuid = object.uuid ?? '';
    return message;
  },
};

function createBaseAPIV1ScreenConfig(): APIV1ScreenConfig {
  return { id: undefined, size: undefined, screenType: 0 };
}

export const APIV1ScreenConfig = {
  encode(
    message: APIV1ScreenConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    if (message.screenType !== 0) {
      writer.uint32(24).int32(message.screenType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ScreenConfig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ScreenConfig();
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

          message.size = APIV1Size.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ScreenConfig {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
      screenType: isSet(object.screenType)
        ? aPIV1ScreenTypeFromJSON(object.screenType)
        : 0,
    };
  },

  toJSON(message: APIV1ScreenConfig): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.size !== undefined) {
      obj.size = APIV1Size.toJSON(message.size);
    }
    if (message.screenType !== 0) {
      obj.screenType = aPIV1ScreenTypeToJSON(message.screenType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ScreenConfig>, I>>(
    base?: I,
  ): APIV1ScreenConfig {
    return APIV1ScreenConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ScreenConfig>, I>>(
    object: I,
  ): APIV1ScreenConfig {
    const message = createBaseAPIV1ScreenConfig();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? APIV1Size.fromPartial(object.size)
        : undefined;
    message.screenType = object.screenType ?? 0;
    return message;
  },
};

function createBaseAPIV1StatusRequest(): APIV1StatusRequest {
  return {
    getLayers: undefined,
    getStageScreens: undefined,
    putStageScreens: undefined,
    getAudienceScreens: undefined,
    putAudienceScreens: undefined,
    getScreens: undefined,
    getSlide: undefined,
  };
}

export const APIV1StatusRequest = {
  encode(
    message: APIV1StatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getLayers !== undefined) {
      APIV1StatusRequest_GetLayers.encode(
        message.getLayers,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getStageScreens !== undefined) {
      APIV1StatusRequest_GetStageScreens.encode(
        message.getStageScreens,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.putStageScreens !== undefined) {
      APIV1StatusRequest_PutStageScreens.encode(
        message.putStageScreens,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getAudienceScreens !== undefined) {
      APIV1StatusRequest_GetAudienceScreens.encode(
        message.getAudienceScreens,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.putAudienceScreens !== undefined) {
      APIV1StatusRequest_PutAudienceScreens.encode(
        message.putAudienceScreens,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getScreens !== undefined) {
      APIV1StatusRequest_GetScreens.encode(
        message.getScreens,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getSlide !== undefined) {
      APIV1StatusRequest_GetSlide.encode(
        message.getSlide,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StatusRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getLayers = APIV1StatusRequest_GetLayers.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getStageScreens = APIV1StatusRequest_GetStageScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.putStageScreens = APIV1StatusRequest_PutStageScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getAudienceScreens =
            APIV1StatusRequest_GetAudienceScreens.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.putAudienceScreens =
            APIV1StatusRequest_PutAudienceScreens.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getScreens = APIV1StatusRequest_GetScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getSlide = APIV1StatusRequest_GetSlide.decode(
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

  fromJSON(object: any): APIV1StatusRequest {
    return {
      getLayers: isSet(object.getLayers)
        ? APIV1StatusRequest_GetLayers.fromJSON(object.getLayers)
        : undefined,
      getStageScreens: isSet(object.getStageScreens)
        ? APIV1StatusRequest_GetStageScreens.fromJSON(object.getStageScreens)
        : undefined,
      putStageScreens: isSet(object.putStageScreens)
        ? APIV1StatusRequest_PutStageScreens.fromJSON(object.putStageScreens)
        : undefined,
      getAudienceScreens: isSet(object.getAudienceScreens)
        ? APIV1StatusRequest_GetAudienceScreens.fromJSON(
            object.getAudienceScreens,
          )
        : undefined,
      putAudienceScreens: isSet(object.putAudienceScreens)
        ? APIV1StatusRequest_PutAudienceScreens.fromJSON(
            object.putAudienceScreens,
          )
        : undefined,
      getScreens: isSet(object.getScreens)
        ? APIV1StatusRequest_GetScreens.fromJSON(object.getScreens)
        : undefined,
      getSlide: isSet(object.getSlide)
        ? APIV1StatusRequest_GetSlide.fromJSON(object.getSlide)
        : undefined,
    };
  },

  toJSON(message: APIV1StatusRequest): unknown {
    const obj: any = {};
    if (message.getLayers !== undefined) {
      obj.getLayers = APIV1StatusRequest_GetLayers.toJSON(message.getLayers);
    }
    if (message.getStageScreens !== undefined) {
      obj.getStageScreens = APIV1StatusRequest_GetStageScreens.toJSON(
        message.getStageScreens,
      );
    }
    if (message.putStageScreens !== undefined) {
      obj.putStageScreens = APIV1StatusRequest_PutStageScreens.toJSON(
        message.putStageScreens,
      );
    }
    if (message.getAudienceScreens !== undefined) {
      obj.getAudienceScreens = APIV1StatusRequest_GetAudienceScreens.toJSON(
        message.getAudienceScreens,
      );
    }
    if (message.putAudienceScreens !== undefined) {
      obj.putAudienceScreens = APIV1StatusRequest_PutAudienceScreens.toJSON(
        message.putAudienceScreens,
      );
    }
    if (message.getScreens !== undefined) {
      obj.getScreens = APIV1StatusRequest_GetScreens.toJSON(message.getScreens);
    }
    if (message.getSlide !== undefined) {
      obj.getSlide = APIV1StatusRequest_GetSlide.toJSON(message.getSlide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest>, I>>(
    base?: I,
  ): APIV1StatusRequest {
    return APIV1StatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusRequest>, I>>(
    object: I,
  ): APIV1StatusRequest {
    const message = createBaseAPIV1StatusRequest();
    message.getLayers =
      object.getLayers !== undefined && object.getLayers !== null
        ? APIV1StatusRequest_GetLayers.fromPartial(object.getLayers)
        : undefined;
    message.getStageScreens =
      object.getStageScreens !== undefined && object.getStageScreens !== null
        ? APIV1StatusRequest_GetStageScreens.fromPartial(object.getStageScreens)
        : undefined;
    message.putStageScreens =
      object.putStageScreens !== undefined && object.putStageScreens !== null
        ? APIV1StatusRequest_PutStageScreens.fromPartial(object.putStageScreens)
        : undefined;
    message.getAudienceScreens =
      object.getAudienceScreens !== undefined &&
      object.getAudienceScreens !== null
        ? APIV1StatusRequest_GetAudienceScreens.fromPartial(
            object.getAudienceScreens,
          )
        : undefined;
    message.putAudienceScreens =
      object.putAudienceScreens !== undefined &&
      object.putAudienceScreens !== null
        ? APIV1StatusRequest_PutAudienceScreens.fromPartial(
            object.putAudienceScreens,
          )
        : undefined;
    message.getScreens =
      object.getScreens !== undefined && object.getScreens !== null
        ? APIV1StatusRequest_GetScreens.fromPartial(object.getScreens)
        : undefined;
    message.getSlide =
      object.getSlide !== undefined && object.getSlide !== null
        ? APIV1StatusRequest_GetSlide.fromPartial(object.getSlide)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StatusRequest_GetLayers(): APIV1StatusRequest_GetLayers {
  return {};
}

export const APIV1StatusRequest_GetLayers = {
  encode(
    _: APIV1StatusRequest_GetLayers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_GetLayers {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_GetLayers();
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

  fromJSON(_: any): APIV1StatusRequest_GetLayers {
    return {};
  },

  toJSON(_: APIV1StatusRequest_GetLayers): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest_GetLayers>, I>>(
    base?: I,
  ): APIV1StatusRequest_GetLayers {
    return APIV1StatusRequest_GetLayers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusRequest_GetLayers>, I>>(
    _: I,
  ): APIV1StatusRequest_GetLayers {
    const message = createBaseAPIV1StatusRequest_GetLayers();
    return message;
  },
};

function createBaseAPIV1StatusRequest_GetStageScreens(): APIV1StatusRequest_GetStageScreens {
  return {};
}

export const APIV1StatusRequest_GetStageScreens = {
  encode(
    _: APIV1StatusRequest_GetStageScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_GetStageScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_GetStageScreens();
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

  fromJSON(_: any): APIV1StatusRequest_GetStageScreens {
    return {};
  },

  toJSON(_: APIV1StatusRequest_GetStageScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest_GetStageScreens>, I>>(
    base?: I,
  ): APIV1StatusRequest_GetStageScreens {
    return APIV1StatusRequest_GetStageScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusRequest_GetStageScreens>, I>,
  >(_: I): APIV1StatusRequest_GetStageScreens {
    const message = createBaseAPIV1StatusRequest_GetStageScreens();
    return message;
  },
};

function createBaseAPIV1StatusRequest_PutStageScreens(): APIV1StatusRequest_PutStageScreens {
  return { enabled: false };
}

export const APIV1StatusRequest_PutStageScreens = {
  encode(
    message: APIV1StatusRequest_PutStageScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_PutStageScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_PutStageScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StatusRequest_PutStageScreens {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
    };
  },

  toJSON(message: APIV1StatusRequest_PutStageScreens): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest_PutStageScreens>, I>>(
    base?: I,
  ): APIV1StatusRequest_PutStageScreens {
    return APIV1StatusRequest_PutStageScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusRequest_PutStageScreens>, I>,
  >(object: I): APIV1StatusRequest_PutStageScreens {
    const message = createBaseAPIV1StatusRequest_PutStageScreens();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseAPIV1StatusRequest_GetAudienceScreens(): APIV1StatusRequest_GetAudienceScreens {
  return {};
}

export const APIV1StatusRequest_GetAudienceScreens = {
  encode(
    _: APIV1StatusRequest_GetAudienceScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_GetAudienceScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_GetAudienceScreens();
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

  fromJSON(_: any): APIV1StatusRequest_GetAudienceScreens {
    return {};
  },

  toJSON(_: APIV1StatusRequest_GetAudienceScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1StatusRequest_GetAudienceScreens>, I>,
  >(base?: I): APIV1StatusRequest_GetAudienceScreens {
    return APIV1StatusRequest_GetAudienceScreens.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusRequest_GetAudienceScreens>, I>,
  >(_: I): APIV1StatusRequest_GetAudienceScreens {
    const message = createBaseAPIV1StatusRequest_GetAudienceScreens();
    return message;
  },
};

function createBaseAPIV1StatusRequest_PutAudienceScreens(): APIV1StatusRequest_PutAudienceScreens {
  return { enabled: false };
}

export const APIV1StatusRequest_PutAudienceScreens = {
  encode(
    message: APIV1StatusRequest_PutAudienceScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_PutAudienceScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_PutAudienceScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StatusRequest_PutAudienceScreens {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
    };
  },

  toJSON(message: APIV1StatusRequest_PutAudienceScreens): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1StatusRequest_PutAudienceScreens>, I>,
  >(base?: I): APIV1StatusRequest_PutAudienceScreens {
    return APIV1StatusRequest_PutAudienceScreens.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusRequest_PutAudienceScreens>, I>,
  >(object: I): APIV1StatusRequest_PutAudienceScreens {
    const message = createBaseAPIV1StatusRequest_PutAudienceScreens();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseAPIV1StatusRequest_GetScreens(): APIV1StatusRequest_GetScreens {
  return {};
}

export const APIV1StatusRequest_GetScreens = {
  encode(
    _: APIV1StatusRequest_GetScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_GetScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_GetScreens();
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

  fromJSON(_: any): APIV1StatusRequest_GetScreens {
    return {};
  },

  toJSON(_: APIV1StatusRequest_GetScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest_GetScreens>, I>>(
    base?: I,
  ): APIV1StatusRequest_GetScreens {
    return APIV1StatusRequest_GetScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusRequest_GetScreens>, I>>(
    _: I,
  ): APIV1StatusRequest_GetScreens {
    const message = createBaseAPIV1StatusRequest_GetScreens();
    return message;
  },
};

function createBaseAPIV1StatusRequest_GetSlide(): APIV1StatusRequest_GetSlide {
  return {};
}

export const APIV1StatusRequest_GetSlide = {
  encode(
    _: APIV1StatusRequest_GetSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusRequest_GetSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusRequest_GetSlide();
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

  fromJSON(_: any): APIV1StatusRequest_GetSlide {
    return {};
  },

  toJSON(_: APIV1StatusRequest_GetSlide): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusRequest_GetSlide>, I>>(
    base?: I,
  ): APIV1StatusRequest_GetSlide {
    return APIV1StatusRequest_GetSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusRequest_GetSlide>, I>>(
    _: I,
  ): APIV1StatusRequest_GetSlide {
    const message = createBaseAPIV1StatusRequest_GetSlide();
    return message;
  },
};

function createBaseAPIV1StatusResponse(): APIV1StatusResponse {
  return {
    getLayers: undefined,
    getStageScreens: undefined,
    putStageScreens: undefined,
    getAudienceScreens: undefined,
    putAudienceScreens: undefined,
    getScreens: undefined,
    getSlide: undefined,
  };
}

export const APIV1StatusResponse = {
  encode(
    message: APIV1StatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getLayers !== undefined) {
      APIV1StatusResponse_GetLayers.encode(
        message.getLayers,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getStageScreens !== undefined) {
      APIV1StatusResponse_GetStageScreens.encode(
        message.getStageScreens,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.putStageScreens !== undefined) {
      APIV1StatusResponse_PutStageScreens.encode(
        message.putStageScreens,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getAudienceScreens !== undefined) {
      APIV1StatusResponse_GetAudienceScreens.encode(
        message.getAudienceScreens,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.putAudienceScreens !== undefined) {
      APIV1StatusResponse_PutAudienceScreens.encode(
        message.putAudienceScreens,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getScreens !== undefined) {
      APIV1StatusResponse_GetScreens.encode(
        message.getScreens,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getSlide !== undefined) {
      APIV1StatusResponse_GetSlide.encode(
        message.getSlide,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1StatusResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getLayers = APIV1StatusResponse_GetLayers.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getStageScreens = APIV1StatusResponse_GetStageScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.putStageScreens = APIV1StatusResponse_PutStageScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getAudienceScreens =
            APIV1StatusResponse_GetAudienceScreens.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.putAudienceScreens =
            APIV1StatusResponse_PutAudienceScreens.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getScreens = APIV1StatusResponse_GetScreens.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getSlide = APIV1StatusResponse_GetSlide.decode(
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

  fromJSON(object: any): APIV1StatusResponse {
    return {
      getLayers: isSet(object.getLayers)
        ? APIV1StatusResponse_GetLayers.fromJSON(object.getLayers)
        : undefined,
      getStageScreens: isSet(object.getStageScreens)
        ? APIV1StatusResponse_GetStageScreens.fromJSON(object.getStageScreens)
        : undefined,
      putStageScreens: isSet(object.putStageScreens)
        ? APIV1StatusResponse_PutStageScreens.fromJSON(object.putStageScreens)
        : undefined,
      getAudienceScreens: isSet(object.getAudienceScreens)
        ? APIV1StatusResponse_GetAudienceScreens.fromJSON(
            object.getAudienceScreens,
          )
        : undefined,
      putAudienceScreens: isSet(object.putAudienceScreens)
        ? APIV1StatusResponse_PutAudienceScreens.fromJSON(
            object.putAudienceScreens,
          )
        : undefined,
      getScreens: isSet(object.getScreens)
        ? APIV1StatusResponse_GetScreens.fromJSON(object.getScreens)
        : undefined,
      getSlide: isSet(object.getSlide)
        ? APIV1StatusResponse_GetSlide.fromJSON(object.getSlide)
        : undefined,
    };
  },

  toJSON(message: APIV1StatusResponse): unknown {
    const obj: any = {};
    if (message.getLayers !== undefined) {
      obj.getLayers = APIV1StatusResponse_GetLayers.toJSON(message.getLayers);
    }
    if (message.getStageScreens !== undefined) {
      obj.getStageScreens = APIV1StatusResponse_GetStageScreens.toJSON(
        message.getStageScreens,
      );
    }
    if (message.putStageScreens !== undefined) {
      obj.putStageScreens = APIV1StatusResponse_PutStageScreens.toJSON(
        message.putStageScreens,
      );
    }
    if (message.getAudienceScreens !== undefined) {
      obj.getAudienceScreens = APIV1StatusResponse_GetAudienceScreens.toJSON(
        message.getAudienceScreens,
      );
    }
    if (message.putAudienceScreens !== undefined) {
      obj.putAudienceScreens = APIV1StatusResponse_PutAudienceScreens.toJSON(
        message.putAudienceScreens,
      );
    }
    if (message.getScreens !== undefined) {
      obj.getScreens = APIV1StatusResponse_GetScreens.toJSON(
        message.getScreens,
      );
    }
    if (message.getSlide !== undefined) {
      obj.getSlide = APIV1StatusResponse_GetSlide.toJSON(message.getSlide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse>, I>>(
    base?: I,
  ): APIV1StatusResponse {
    return APIV1StatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusResponse>, I>>(
    object: I,
  ): APIV1StatusResponse {
    const message = createBaseAPIV1StatusResponse();
    message.getLayers =
      object.getLayers !== undefined && object.getLayers !== null
        ? APIV1StatusResponse_GetLayers.fromPartial(object.getLayers)
        : undefined;
    message.getStageScreens =
      object.getStageScreens !== undefined && object.getStageScreens !== null
        ? APIV1StatusResponse_GetStageScreens.fromPartial(
            object.getStageScreens,
          )
        : undefined;
    message.putStageScreens =
      object.putStageScreens !== undefined && object.putStageScreens !== null
        ? APIV1StatusResponse_PutStageScreens.fromPartial(
            object.putStageScreens,
          )
        : undefined;
    message.getAudienceScreens =
      object.getAudienceScreens !== undefined &&
      object.getAudienceScreens !== null
        ? APIV1StatusResponse_GetAudienceScreens.fromPartial(
            object.getAudienceScreens,
          )
        : undefined;
    message.putAudienceScreens =
      object.putAudienceScreens !== undefined &&
      object.putAudienceScreens !== null
        ? APIV1StatusResponse_PutAudienceScreens.fromPartial(
            object.putAudienceScreens,
          )
        : undefined;
    message.getScreens =
      object.getScreens !== undefined && object.getScreens !== null
        ? APIV1StatusResponse_GetScreens.fromPartial(object.getScreens)
        : undefined;
    message.getSlide =
      object.getSlide !== undefined && object.getSlide !== null
        ? APIV1StatusResponse_GetSlide.fromPartial(object.getSlide)
        : undefined;
    return message;
  },
};

function createBaseAPIV1StatusResponse_GetLayers(): APIV1StatusResponse_GetLayers {
  return {
    videoInput: false,
    media: false,
    slide: false,
    announcements: false,
    props: false,
    messages: false,
    audio: false,
  };
}

export const APIV1StatusResponse_GetLayers = {
  encode(
    message: APIV1StatusResponse_GetLayers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.videoInput === true) {
      writer.uint32(8).bool(message.videoInput);
    }
    if (message.media === true) {
      writer.uint32(16).bool(message.media);
    }
    if (message.slide === true) {
      writer.uint32(24).bool(message.slide);
    }
    if (message.announcements === true) {
      writer.uint32(32).bool(message.announcements);
    }
    if (message.props === true) {
      writer.uint32(40).bool(message.props);
    }
    if (message.messages === true) {
      writer.uint32(48).bool(message.messages);
    }
    if (message.audio === true) {
      writer.uint32(56).bool(message.audio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_GetLayers {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_GetLayers();
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
          if (tag !== 56) {
            break;
          }

          message.audio = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StatusResponse_GetLayers {
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
      audio: isSet(object.audio) ? globalThis.Boolean(object.audio) : false,
    };
  },

  toJSON(message: APIV1StatusResponse_GetLayers): unknown {
    const obj: any = {};
    if (message.videoInput === true) {
      obj.videoInput = message.videoInput;
    }
    if (message.media === true) {
      obj.media = message.media;
    }
    if (message.slide === true) {
      obj.slide = message.slide;
    }
    if (message.announcements === true) {
      obj.announcements = message.announcements;
    }
    if (message.props === true) {
      obj.props = message.props;
    }
    if (message.messages === true) {
      obj.messages = message.messages;
    }
    if (message.audio === true) {
      obj.audio = message.audio;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse_GetLayers>, I>>(
    base?: I,
  ): APIV1StatusResponse_GetLayers {
    return APIV1StatusResponse_GetLayers.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusResponse_GetLayers>, I>>(
    object: I,
  ): APIV1StatusResponse_GetLayers {
    const message = createBaseAPIV1StatusResponse_GetLayers();
    message.videoInput = object.videoInput ?? false;
    message.media = object.media ?? false;
    message.slide = object.slide ?? false;
    message.announcements = object.announcements ?? false;
    message.props = object.props ?? false;
    message.messages = object.messages ?? false;
    message.audio = object.audio ?? false;
    return message;
  },
};

function createBaseAPIV1StatusResponse_GetStageScreens(): APIV1StatusResponse_GetStageScreens {
  return { enabled: false };
}

export const APIV1StatusResponse_GetStageScreens = {
  encode(
    message: APIV1StatusResponse_GetStageScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_GetStageScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_GetStageScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StatusResponse_GetStageScreens {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
    };
  },

  toJSON(message: APIV1StatusResponse_GetStageScreens): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse_GetStageScreens>, I>>(
    base?: I,
  ): APIV1StatusResponse_GetStageScreens {
    return APIV1StatusResponse_GetStageScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusResponse_GetStageScreens>, I>,
  >(object: I): APIV1StatusResponse_GetStageScreens {
    const message = createBaseAPIV1StatusResponse_GetStageScreens();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseAPIV1StatusResponse_PutStageScreens(): APIV1StatusResponse_PutStageScreens {
  return {};
}

export const APIV1StatusResponse_PutStageScreens = {
  encode(
    _: APIV1StatusResponse_PutStageScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_PutStageScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_PutStageScreens();
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

  fromJSON(_: any): APIV1StatusResponse_PutStageScreens {
    return {};
  },

  toJSON(_: APIV1StatusResponse_PutStageScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse_PutStageScreens>, I>>(
    base?: I,
  ): APIV1StatusResponse_PutStageScreens {
    return APIV1StatusResponse_PutStageScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusResponse_PutStageScreens>, I>,
  >(_: I): APIV1StatusResponse_PutStageScreens {
    const message = createBaseAPIV1StatusResponse_PutStageScreens();
    return message;
  },
};

function createBaseAPIV1StatusResponse_GetAudienceScreens(): APIV1StatusResponse_GetAudienceScreens {
  return { enabled: false };
}

export const APIV1StatusResponse_GetAudienceScreens = {
  encode(
    message: APIV1StatusResponse_GetAudienceScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_GetAudienceScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_GetAudienceScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1StatusResponse_GetAudienceScreens {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
    };
  },

  toJSON(message: APIV1StatusResponse_GetAudienceScreens): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1StatusResponse_GetAudienceScreens>, I>,
  >(base?: I): APIV1StatusResponse_GetAudienceScreens {
    return APIV1StatusResponse_GetAudienceScreens.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusResponse_GetAudienceScreens>, I>,
  >(object: I): APIV1StatusResponse_GetAudienceScreens {
    const message = createBaseAPIV1StatusResponse_GetAudienceScreens();
    message.enabled = object.enabled ?? false;
    return message;
  },
};

function createBaseAPIV1StatusResponse_PutAudienceScreens(): APIV1StatusResponse_PutAudienceScreens {
  return {};
}

export const APIV1StatusResponse_PutAudienceScreens = {
  encode(
    _: APIV1StatusResponse_PutAudienceScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_PutAudienceScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_PutAudienceScreens();
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

  fromJSON(_: any): APIV1StatusResponse_PutAudienceScreens {
    return {};
  },

  toJSON(_: APIV1StatusResponse_PutAudienceScreens): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1StatusResponse_PutAudienceScreens>, I>,
  >(base?: I): APIV1StatusResponse_PutAudienceScreens {
    return APIV1StatusResponse_PutAudienceScreens.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1StatusResponse_PutAudienceScreens>, I>,
  >(_: I): APIV1StatusResponse_PutAudienceScreens {
    const message = createBaseAPIV1StatusResponse_PutAudienceScreens();
    return message;
  },
};

function createBaseAPIV1StatusResponse_GetScreens(): APIV1StatusResponse_GetScreens {
  return { screens: [] };
}

export const APIV1StatusResponse_GetScreens = {
  encode(
    message: APIV1StatusResponse_GetScreens,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.screens) {
      APIV1ScreenConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_GetScreens {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_GetScreens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screens.push(
            APIV1ScreenConfig.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1StatusResponse_GetScreens {
    return {
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => APIV1ScreenConfig.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1StatusResponse_GetScreens): unknown {
    const obj: any = {};
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => APIV1ScreenConfig.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse_GetScreens>, I>>(
    base?: I,
  ): APIV1StatusResponse_GetScreens {
    return APIV1StatusResponse_GetScreens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusResponse_GetScreens>, I>>(
    object: I,
  ): APIV1StatusResponse_GetScreens {
    const message = createBaseAPIV1StatusResponse_GetScreens();
    message.screens =
      object.screens?.map((e) => APIV1ScreenConfig.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1StatusResponse_GetSlide(): APIV1StatusResponse_GetSlide {
  return { current: undefined, next: undefined };
}

export const APIV1StatusResponse_GetSlide = {
  encode(
    message: APIV1StatusResponse_GetSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.current !== undefined) {
      APIV1SlideDisplayDetails.encode(
        message.current,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.next !== undefined) {
      APIV1SlideDisplayDetails.encode(
        message.next,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1StatusResponse_GetSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1StatusResponse_GetSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.current = APIV1SlideDisplayDetails.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.next = APIV1SlideDisplayDetails.decode(
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

  fromJSON(object: any): APIV1StatusResponse_GetSlide {
    return {
      current: isSet(object.current)
        ? APIV1SlideDisplayDetails.fromJSON(object.current)
        : undefined,
      next: isSet(object.next)
        ? APIV1SlideDisplayDetails.fromJSON(object.next)
        : undefined,
    };
  },

  toJSON(message: APIV1StatusResponse_GetSlide): unknown {
    const obj: any = {};
    if (message.current !== undefined) {
      obj.current = APIV1SlideDisplayDetails.toJSON(message.current);
    }
    if (message.next !== undefined) {
      obj.next = APIV1SlideDisplayDetails.toJSON(message.next);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1StatusResponse_GetSlide>, I>>(
    base?: I,
  ): APIV1StatusResponse_GetSlide {
    return APIV1StatusResponse_GetSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1StatusResponse_GetSlide>, I>>(
    object: I,
  ): APIV1StatusResponse_GetSlide {
    const message = createBaseAPIV1StatusResponse_GetSlide();
    message.current =
      object.current !== undefined && object.current !== null
        ? APIV1SlideDisplayDetails.fromPartial(object.current)
        : undefined;
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1SlideDisplayDetails.fromPartial(object.next)
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
