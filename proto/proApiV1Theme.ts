/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Color } from './proApiV1Color';
import { APIV1Identifier } from './proApiV1Identifier';
import { APIV1Size } from './proApiV1Size';

export const protobufPackage = 'rv.data';

export interface APIV1ThemeGroup {
  id: APIV1Identifier | undefined;
  groups: APIV1ThemeGroup[];
  themes: APIV1Theme[];
}

export interface APIV1Theme {
  id: APIV1Identifier | undefined;
  slides: APIV1ThemeSlide[];
}

export interface APIV1ThemeSlide {
  id: APIV1Identifier | undefined;
  size: APIV1Size | undefined;
  background: APIV1Color | undefined;
}

export interface APIV1ThemeRequest {
  getAll?: APIV1ThemeRequest_GetAll | undefined;
  getTheme?: APIV1ThemeRequest_GetTheme | undefined;
  deleteTheme?: APIV1ThemeRequest_DeleteTheme | undefined;
  getThemeName?: APIV1ThemeRequest_GetThemeName | undefined;
  putThemeName?: APIV1ThemeRequest_PutThemeName | undefined;
  getThemeSlide?: APIV1ThemeRequest_GetThemeSlide | undefined;
  putThemeSlide?: APIV1ThemeRequest_PutThemeSlide | undefined;
  deleteThemeSlide?: APIV1ThemeRequest_DeleteThemeSlide | undefined;
  getThemeSlideThumbnail?: APIV1ThemeRequest_GetThemeSlideThumbnail | undefined;
}

export interface APIV1ThemeRequest_GetAll {}

export interface APIV1ThemeRequest_GetTheme {
  id: string;
}

export interface APIV1ThemeRequest_DeleteTheme {
  id: string;
}

export interface APIV1ThemeRequest_GetThemeName {
  id: string;
}

export interface APIV1ThemeRequest_PutThemeName {
  id: string;
  name: string;
}

export interface APIV1ThemeRequest_GetThemeSlide {
  id: string;
  themeSlide: string;
}

export interface APIV1ThemeRequest_PutThemeSlide {
  id: string;
  themeSlide: string;
  slide: APIV1ThemeSlide | undefined;
}

export interface APIV1ThemeRequest_DeleteThemeSlide {
  id: string;
  themeSlide: string;
}

export interface APIV1ThemeRequest_GetThemeSlideThumbnail {
  id: string;
  themeSlide: string;
  quality: number;
}

export interface APIV1ThemeResponse {
  getAll?: APIV1ThemeResponse_GetAll | undefined;
  getTheme?: APIV1ThemeResponse_GetTheme | undefined;
  deleteTheme?: APIV1ThemeResponse_DeleteTheme | undefined;
  getThemeName?: APIV1ThemeResponse_GetThemeName | undefined;
  putThemeName?: APIV1ThemeResponse_PutThemeName | undefined;
  getThemeSlide?: APIV1ThemeResponse_GetThemeSlide | undefined;
  putThemeSlide?: APIV1ThemeResponse_PutThemeSlide | undefined;
  deleteThemeSlide?: APIV1ThemeResponse_DeleteThemeSlide | undefined;
  getThemeSlideThumbnail?:
    | APIV1ThemeResponse_GetThemeSlideThumbnail
    | undefined;
}

export interface APIV1ThemeResponse_GetAll {
  groups: APIV1ThemeGroup[];
  themes: APIV1Theme[];
}

export interface APIV1ThemeResponse_GetTheme {
  theme?: APIV1Theme | undefined;
  group?: APIV1ThemeGroup | undefined;
}

export interface APIV1ThemeResponse_DeleteTheme {}

export interface APIV1ThemeResponse_GetThemeName {
  name: string;
}

export interface APIV1ThemeResponse_PutThemeName {}

export interface APIV1ThemeResponse_GetThemeSlide {
  themeSlide: APIV1ThemeSlide | undefined;
}

export interface APIV1ThemeResponse_PutThemeSlide {}

export interface APIV1ThemeResponse_DeleteThemeSlide {}

export interface APIV1ThemeResponse_GetThemeSlideThumbnail {
  data: Uint8Array;
}

function createBaseAPIV1ThemeGroup(): APIV1ThemeGroup {
  return { id: undefined, groups: [], themes: [] };
}

export const APIV1ThemeGroup = {
  encode(
    message: APIV1ThemeGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      APIV1ThemeGroup.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.themes) {
      APIV1Theme.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeGroup();
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

          message.groups.push(APIV1ThemeGroup.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.themes.push(APIV1Theme.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeGroup {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => APIV1ThemeGroup.fromJSON(e))
        : [],
      themes: globalThis.Array.isArray(object?.themes)
        ? object.themes.map((e: any) => APIV1Theme.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1ThemeGroup): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => APIV1ThemeGroup.toJSON(e));
    }
    if (message.themes?.length) {
      obj.themes = message.themes.map((e) => APIV1Theme.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeGroup>, I>>(
    base?: I,
  ): APIV1ThemeGroup {
    return APIV1ThemeGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeGroup>, I>>(
    object: I,
  ): APIV1ThemeGroup {
    const message = createBaseAPIV1ThemeGroup();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.groups =
      object.groups?.map((e) => APIV1ThemeGroup.fromPartial(e)) || [];
    message.themes = object.themes?.map((e) => APIV1Theme.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1Theme(): APIV1Theme {
  return { id: undefined, slides: [] };
}

export const APIV1Theme = {
  encode(
    message: APIV1Theme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.slides) {
      APIV1ThemeSlide.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Theme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Theme();
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

          message.slides.push(APIV1ThemeSlide.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Theme {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      slides: globalThis.Array.isArray(object?.slides)
        ? object.slides.map((e: any) => APIV1ThemeSlide.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1Theme): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.slides?.length) {
      obj.slides = message.slides.map((e) => APIV1ThemeSlide.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Theme>, I>>(base?: I): APIV1Theme {
    return APIV1Theme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Theme>, I>>(
    object: I,
  ): APIV1Theme {
    const message = createBaseAPIV1Theme();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.slides =
      object.slides?.map((e) => APIV1ThemeSlide.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1ThemeSlide(): APIV1ThemeSlide {
  return { id: undefined, size: undefined, background: undefined };
}

export const APIV1ThemeSlide = {
  encode(
    message: APIV1ThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    if (message.background !== undefined) {
      APIV1Color.encode(message.background, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeSlide();
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
          if (tag !== 26) {
            break;
          }

          message.background = APIV1Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeSlide {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
      background: isSet(object.background)
        ? APIV1Color.fromJSON(object.background)
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeSlide): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.size !== undefined) {
      obj.size = APIV1Size.toJSON(message.size);
    }
    if (message.background !== undefined) {
      obj.background = APIV1Color.toJSON(message.background);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeSlide {
    return APIV1ThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeSlide>, I>>(
    object: I,
  ): APIV1ThemeSlide {
    const message = createBaseAPIV1ThemeSlide();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.size =
      object.size !== undefined && object.size !== null
        ? APIV1Size.fromPartial(object.size)
        : undefined;
    message.background =
      object.background !== undefined && object.background !== null
        ? APIV1Color.fromPartial(object.background)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeRequest(): APIV1ThemeRequest {
  return {
    getAll: undefined,
    getTheme: undefined,
    deleteTheme: undefined,
    getThemeName: undefined,
    putThemeName: undefined,
    getThemeSlide: undefined,
    putThemeSlide: undefined,
    deleteThemeSlide: undefined,
    getThemeSlideThumbnail: undefined,
  };
}

export const APIV1ThemeRequest = {
  encode(
    message: APIV1ThemeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getAll !== undefined) {
      APIV1ThemeRequest_GetAll.encode(
        message.getAll,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getTheme !== undefined) {
      APIV1ThemeRequest_GetTheme.encode(
        message.getTheme,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.deleteTheme !== undefined) {
      APIV1ThemeRequest_DeleteTheme.encode(
        message.deleteTheme,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getThemeName !== undefined) {
      APIV1ThemeRequest_GetThemeName.encode(
        message.getThemeName,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.putThemeName !== undefined) {
      APIV1ThemeRequest_PutThemeName.encode(
        message.putThemeName,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getThemeSlide !== undefined) {
      APIV1ThemeRequest_GetThemeSlide.encode(
        message.getThemeSlide,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.putThemeSlide !== undefined) {
      APIV1ThemeRequest_PutThemeSlide.encode(
        message.putThemeSlide,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.deleteThemeSlide !== undefined) {
      APIV1ThemeRequest_DeleteThemeSlide.encode(
        message.deleteThemeSlide,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getThemeSlideThumbnail !== undefined) {
      APIV1ThemeRequest_GetThemeSlideThumbnail.encode(
        message.getThemeSlideThumbnail,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getAll = APIV1ThemeRequest_GetAll.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getTheme = APIV1ThemeRequest_GetTheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteTheme = APIV1ThemeRequest_DeleteTheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getThemeName = APIV1ThemeRequest_GetThemeName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.putThemeName = APIV1ThemeRequest_PutThemeName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getThemeSlide = APIV1ThemeRequest_GetThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.putThemeSlide = APIV1ThemeRequest_PutThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deleteThemeSlide = APIV1ThemeRequest_DeleteThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getThemeSlideThumbnail =
            APIV1ThemeRequest_GetThemeSlideThumbnail.decode(
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

  fromJSON(object: any): APIV1ThemeRequest {
    return {
      getAll: isSet(object.getAll)
        ? APIV1ThemeRequest_GetAll.fromJSON(object.getAll)
        : undefined,
      getTheme: isSet(object.getTheme)
        ? APIV1ThemeRequest_GetTheme.fromJSON(object.getTheme)
        : undefined,
      deleteTheme: isSet(object.deleteTheme)
        ? APIV1ThemeRequest_DeleteTheme.fromJSON(object.deleteTheme)
        : undefined,
      getThemeName: isSet(object.getThemeName)
        ? APIV1ThemeRequest_GetThemeName.fromJSON(object.getThemeName)
        : undefined,
      putThemeName: isSet(object.putThemeName)
        ? APIV1ThemeRequest_PutThemeName.fromJSON(object.putThemeName)
        : undefined,
      getThemeSlide: isSet(object.getThemeSlide)
        ? APIV1ThemeRequest_GetThemeSlide.fromJSON(object.getThemeSlide)
        : undefined,
      putThemeSlide: isSet(object.putThemeSlide)
        ? APIV1ThemeRequest_PutThemeSlide.fromJSON(object.putThemeSlide)
        : undefined,
      deleteThemeSlide: isSet(object.deleteThemeSlide)
        ? APIV1ThemeRequest_DeleteThemeSlide.fromJSON(object.deleteThemeSlide)
        : undefined,
      getThemeSlideThumbnail: isSet(object.getThemeSlideThumbnail)
        ? APIV1ThemeRequest_GetThemeSlideThumbnail.fromJSON(
            object.getThemeSlideThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeRequest): unknown {
    const obj: any = {};
    if (message.getAll !== undefined) {
      obj.getAll = APIV1ThemeRequest_GetAll.toJSON(message.getAll);
    }
    if (message.getTheme !== undefined) {
      obj.getTheme = APIV1ThemeRequest_GetTheme.toJSON(message.getTheme);
    }
    if (message.deleteTheme !== undefined) {
      obj.deleteTheme = APIV1ThemeRequest_DeleteTheme.toJSON(
        message.deleteTheme,
      );
    }
    if (message.getThemeName !== undefined) {
      obj.getThemeName = APIV1ThemeRequest_GetThemeName.toJSON(
        message.getThemeName,
      );
    }
    if (message.putThemeName !== undefined) {
      obj.putThemeName = APIV1ThemeRequest_PutThemeName.toJSON(
        message.putThemeName,
      );
    }
    if (message.getThemeSlide !== undefined) {
      obj.getThemeSlide = APIV1ThemeRequest_GetThemeSlide.toJSON(
        message.getThemeSlide,
      );
    }
    if (message.putThemeSlide !== undefined) {
      obj.putThemeSlide = APIV1ThemeRequest_PutThemeSlide.toJSON(
        message.putThemeSlide,
      );
    }
    if (message.deleteThemeSlide !== undefined) {
      obj.deleteThemeSlide = APIV1ThemeRequest_DeleteThemeSlide.toJSON(
        message.deleteThemeSlide,
      );
    }
    if (message.getThemeSlideThumbnail !== undefined) {
      obj.getThemeSlideThumbnail =
        APIV1ThemeRequest_GetThemeSlideThumbnail.toJSON(
          message.getThemeSlideThumbnail,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest>, I>>(
    base?: I,
  ): APIV1ThemeRequest {
    return APIV1ThemeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest>, I>>(
    object: I,
  ): APIV1ThemeRequest {
    const message = createBaseAPIV1ThemeRequest();
    message.getAll =
      object.getAll !== undefined && object.getAll !== null
        ? APIV1ThemeRequest_GetAll.fromPartial(object.getAll)
        : undefined;
    message.getTheme =
      object.getTheme !== undefined && object.getTheme !== null
        ? APIV1ThemeRequest_GetTheme.fromPartial(object.getTheme)
        : undefined;
    message.deleteTheme =
      object.deleteTheme !== undefined && object.deleteTheme !== null
        ? APIV1ThemeRequest_DeleteTheme.fromPartial(object.deleteTheme)
        : undefined;
    message.getThemeName =
      object.getThemeName !== undefined && object.getThemeName !== null
        ? APIV1ThemeRequest_GetThemeName.fromPartial(object.getThemeName)
        : undefined;
    message.putThemeName =
      object.putThemeName !== undefined && object.putThemeName !== null
        ? APIV1ThemeRequest_PutThemeName.fromPartial(object.putThemeName)
        : undefined;
    message.getThemeSlide =
      object.getThemeSlide !== undefined && object.getThemeSlide !== null
        ? APIV1ThemeRequest_GetThemeSlide.fromPartial(object.getThemeSlide)
        : undefined;
    message.putThemeSlide =
      object.putThemeSlide !== undefined && object.putThemeSlide !== null
        ? APIV1ThemeRequest_PutThemeSlide.fromPartial(object.putThemeSlide)
        : undefined;
    message.deleteThemeSlide =
      object.deleteThemeSlide !== undefined && object.deleteThemeSlide !== null
        ? APIV1ThemeRequest_DeleteThemeSlide.fromPartial(
            object.deleteThemeSlide,
          )
        : undefined;
    message.getThemeSlideThumbnail =
      object.getThemeSlideThumbnail !== undefined &&
      object.getThemeSlideThumbnail !== null
        ? APIV1ThemeRequest_GetThemeSlideThumbnail.fromPartial(
            object.getThemeSlideThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeRequest_GetAll(): APIV1ThemeRequest_GetAll {
  return {};
}

export const APIV1ThemeRequest_GetAll = {
  encode(
    _: APIV1ThemeRequest_GetAll,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_GetAll {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_GetAll();
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

  fromJSON(_: any): APIV1ThemeRequest_GetAll {
    return {};
  },

  toJSON(_: APIV1ThemeRequest_GetAll): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_GetAll>, I>>(
    base?: I,
  ): APIV1ThemeRequest_GetAll {
    return APIV1ThemeRequest_GetAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_GetAll>, I>>(
    _: I,
  ): APIV1ThemeRequest_GetAll {
    const message = createBaseAPIV1ThemeRequest_GetAll();
    return message;
  },
};

function createBaseAPIV1ThemeRequest_GetTheme(): APIV1ThemeRequest_GetTheme {
  return { id: '' };
}

export const APIV1ThemeRequest_GetTheme = {
  encode(
    message: APIV1ThemeRequest_GetTheme,
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
  ): APIV1ThemeRequest_GetTheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_GetTheme();
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

  fromJSON(object: any): APIV1ThemeRequest_GetTheme {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ThemeRequest_GetTheme): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_GetTheme>, I>>(
    base?: I,
  ): APIV1ThemeRequest_GetTheme {
    return APIV1ThemeRequest_GetTheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_GetTheme>, I>>(
    object: I,
  ): APIV1ThemeRequest_GetTheme {
    const message = createBaseAPIV1ThemeRequest_GetTheme();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_DeleteTheme(): APIV1ThemeRequest_DeleteTheme {
  return { id: '' };
}

export const APIV1ThemeRequest_DeleteTheme = {
  encode(
    message: APIV1ThemeRequest_DeleteTheme,
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
  ): APIV1ThemeRequest_DeleteTheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_DeleteTheme();
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

  fromJSON(object: any): APIV1ThemeRequest_DeleteTheme {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ThemeRequest_DeleteTheme): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_DeleteTheme>, I>>(
    base?: I,
  ): APIV1ThemeRequest_DeleteTheme {
    return APIV1ThemeRequest_DeleteTheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_DeleteTheme>, I>>(
    object: I,
  ): APIV1ThemeRequest_DeleteTheme {
    const message = createBaseAPIV1ThemeRequest_DeleteTheme();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_GetThemeName(): APIV1ThemeRequest_GetThemeName {
  return { id: '' };
}

export const APIV1ThemeRequest_GetThemeName = {
  encode(
    message: APIV1ThemeRequest_GetThemeName,
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
  ): APIV1ThemeRequest_GetThemeName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_GetThemeName();
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

  fromJSON(object: any): APIV1ThemeRequest_GetThemeName {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ThemeRequest_GetThemeName): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeName>, I>>(
    base?: I,
  ): APIV1ThemeRequest_GetThemeName {
    return APIV1ThemeRequest_GetThemeName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeName>, I>>(
    object: I,
  ): APIV1ThemeRequest_GetThemeName {
    const message = createBaseAPIV1ThemeRequest_GetThemeName();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_PutThemeName(): APIV1ThemeRequest_PutThemeName {
  return { id: '', name: '' };
}

export const APIV1ThemeRequest_PutThemeName = {
  encode(
    message: APIV1ThemeRequest_PutThemeName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_PutThemeName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_PutThemeName();
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

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeRequest_PutThemeName {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
    };
  },

  toJSON(message: APIV1ThemeRequest_PutThemeName): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_PutThemeName>, I>>(
    base?: I,
  ): APIV1ThemeRequest_PutThemeName {
    return APIV1ThemeRequest_PutThemeName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_PutThemeName>, I>>(
    object: I,
  ): APIV1ThemeRequest_PutThemeName {
    const message = createBaseAPIV1ThemeRequest_PutThemeName();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_GetThemeSlide(): APIV1ThemeRequest_GetThemeSlide {
  return { id: '', themeSlide: '' };
}

export const APIV1ThemeRequest_GetThemeSlide = {
  encode(
    message: APIV1ThemeRequest_GetThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.themeSlide !== '') {
      writer.uint32(18).string(message.themeSlide);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_GetThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_GetThemeSlide();
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

          message.themeSlide = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeRequest_GetThemeSlide {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      themeSlide: isSet(object.themeSlide)
        ? globalThis.String(object.themeSlide)
        : '',
    };
  },

  toJSON(message: APIV1ThemeRequest_GetThemeSlide): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.themeSlide !== '') {
      obj.themeSlide = message.themeSlide;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeRequest_GetThemeSlide {
    return APIV1ThemeRequest_GetThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeSlide>, I>>(
    object: I,
  ): APIV1ThemeRequest_GetThemeSlide {
    const message = createBaseAPIV1ThemeRequest_GetThemeSlide();
    message.id = object.id ?? '';
    message.themeSlide = object.themeSlide ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_PutThemeSlide(): APIV1ThemeRequest_PutThemeSlide {
  return { id: '', themeSlide: '', slide: undefined };
}

export const APIV1ThemeRequest_PutThemeSlide = {
  encode(
    message: APIV1ThemeRequest_PutThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.themeSlide !== '') {
      writer.uint32(18).string(message.themeSlide);
    }
    if (message.slide !== undefined) {
      APIV1ThemeSlide.encode(message.slide, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_PutThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_PutThemeSlide();
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

          message.themeSlide = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slide = APIV1ThemeSlide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeRequest_PutThemeSlide {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      themeSlide: isSet(object.themeSlide)
        ? globalThis.String(object.themeSlide)
        : '',
      slide: isSet(object.slide)
        ? APIV1ThemeSlide.fromJSON(object.slide)
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeRequest_PutThemeSlide): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.themeSlide !== '') {
      obj.themeSlide = message.themeSlide;
    }
    if (message.slide !== undefined) {
      obj.slide = APIV1ThemeSlide.toJSON(message.slide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_PutThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeRequest_PutThemeSlide {
    return APIV1ThemeRequest_PutThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeRequest_PutThemeSlide>, I>>(
    object: I,
  ): APIV1ThemeRequest_PutThemeSlide {
    const message = createBaseAPIV1ThemeRequest_PutThemeSlide();
    message.id = object.id ?? '';
    message.themeSlide = object.themeSlide ?? '';
    message.slide =
      object.slide !== undefined && object.slide !== null
        ? APIV1ThemeSlide.fromPartial(object.slide)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeRequest_DeleteThemeSlide(): APIV1ThemeRequest_DeleteThemeSlide {
  return { id: '', themeSlide: '' };
}

export const APIV1ThemeRequest_DeleteThemeSlide = {
  encode(
    message: APIV1ThemeRequest_DeleteThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.themeSlide !== '') {
      writer.uint32(18).string(message.themeSlide);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_DeleteThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_DeleteThemeSlide();
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

          message.themeSlide = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeRequest_DeleteThemeSlide {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      themeSlide: isSet(object.themeSlide)
        ? globalThis.String(object.themeSlide)
        : '',
    };
  },

  toJSON(message: APIV1ThemeRequest_DeleteThemeSlide): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.themeSlide !== '') {
      obj.themeSlide = message.themeSlide;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeRequest_DeleteThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeRequest_DeleteThemeSlide {
    return APIV1ThemeRequest_DeleteThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeRequest_DeleteThemeSlide>, I>,
  >(object: I): APIV1ThemeRequest_DeleteThemeSlide {
    const message = createBaseAPIV1ThemeRequest_DeleteThemeSlide();
    message.id = object.id ?? '';
    message.themeSlide = object.themeSlide ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeRequest_GetThemeSlideThumbnail(): APIV1ThemeRequest_GetThemeSlideThumbnail {
  return { id: '', themeSlide: '', quality: 0 };
}

export const APIV1ThemeRequest_GetThemeSlideThumbnail = {
  encode(
    message: APIV1ThemeRequest_GetThemeSlideThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.themeSlide !== '') {
      writer.uint32(18).string(message.themeSlide);
    }
    if (message.quality !== 0) {
      writer.uint32(24).int32(message.quality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeRequest_GetThemeSlideThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeRequest_GetThemeSlideThumbnail();
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

          message.themeSlide = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): APIV1ThemeRequest_GetThemeSlideThumbnail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      themeSlide: isSet(object.themeSlide)
        ? globalThis.String(object.themeSlide)
        : '',
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1ThemeRequest_GetThemeSlideThumbnail): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.themeSlide !== '') {
      obj.themeSlide = message.themeSlide;
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeSlideThumbnail>, I>,
  >(base?: I): APIV1ThemeRequest_GetThemeSlideThumbnail {
    return APIV1ThemeRequest_GetThemeSlideThumbnail.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeRequest_GetThemeSlideThumbnail>, I>,
  >(object: I): APIV1ThemeRequest_GetThemeSlideThumbnail {
    const message = createBaseAPIV1ThemeRequest_GetThemeSlideThumbnail();
    message.id = object.id ?? '';
    message.themeSlide = object.themeSlide ?? '';
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1ThemeResponse(): APIV1ThemeResponse {
  return {
    getAll: undefined,
    getTheme: undefined,
    deleteTheme: undefined,
    getThemeName: undefined,
    putThemeName: undefined,
    getThemeSlide: undefined,
    putThemeSlide: undefined,
    deleteThemeSlide: undefined,
    getThemeSlideThumbnail: undefined,
  };
}

export const APIV1ThemeResponse = {
  encode(
    message: APIV1ThemeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getAll !== undefined) {
      APIV1ThemeResponse_GetAll.encode(
        message.getAll,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getTheme !== undefined) {
      APIV1ThemeResponse_GetTheme.encode(
        message.getTheme,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.deleteTheme !== undefined) {
      APIV1ThemeResponse_DeleteTheme.encode(
        message.deleteTheme,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getThemeName !== undefined) {
      APIV1ThemeResponse_GetThemeName.encode(
        message.getThemeName,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.putThemeName !== undefined) {
      APIV1ThemeResponse_PutThemeName.encode(
        message.putThemeName,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getThemeSlide !== undefined) {
      APIV1ThemeResponse_GetThemeSlide.encode(
        message.getThemeSlide,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.putThemeSlide !== undefined) {
      APIV1ThemeResponse_PutThemeSlide.encode(
        message.putThemeSlide,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.deleteThemeSlide !== undefined) {
      APIV1ThemeResponse_DeleteThemeSlide.encode(
        message.deleteThemeSlide,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getThemeSlideThumbnail !== undefined) {
      APIV1ThemeResponse_GetThemeSlideThumbnail.encode(
        message.getThemeSlideThumbnail,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ThemeResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getAll = APIV1ThemeResponse_GetAll.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getTheme = APIV1ThemeResponse_GetTheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deleteTheme = APIV1ThemeResponse_DeleteTheme.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getThemeName = APIV1ThemeResponse_GetThemeName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.putThemeName = APIV1ThemeResponse_PutThemeName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getThemeSlide = APIV1ThemeResponse_GetThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.putThemeSlide = APIV1ThemeResponse_PutThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.deleteThemeSlide = APIV1ThemeResponse_DeleteThemeSlide.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getThemeSlideThumbnail =
            APIV1ThemeResponse_GetThemeSlideThumbnail.decode(
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

  fromJSON(object: any): APIV1ThemeResponse {
    return {
      getAll: isSet(object.getAll)
        ? APIV1ThemeResponse_GetAll.fromJSON(object.getAll)
        : undefined,
      getTheme: isSet(object.getTheme)
        ? APIV1ThemeResponse_GetTheme.fromJSON(object.getTheme)
        : undefined,
      deleteTheme: isSet(object.deleteTheme)
        ? APIV1ThemeResponse_DeleteTheme.fromJSON(object.deleteTheme)
        : undefined,
      getThemeName: isSet(object.getThemeName)
        ? APIV1ThemeResponse_GetThemeName.fromJSON(object.getThemeName)
        : undefined,
      putThemeName: isSet(object.putThemeName)
        ? APIV1ThemeResponse_PutThemeName.fromJSON(object.putThemeName)
        : undefined,
      getThemeSlide: isSet(object.getThemeSlide)
        ? APIV1ThemeResponse_GetThemeSlide.fromJSON(object.getThemeSlide)
        : undefined,
      putThemeSlide: isSet(object.putThemeSlide)
        ? APIV1ThemeResponse_PutThemeSlide.fromJSON(object.putThemeSlide)
        : undefined,
      deleteThemeSlide: isSet(object.deleteThemeSlide)
        ? APIV1ThemeResponse_DeleteThemeSlide.fromJSON(object.deleteThemeSlide)
        : undefined,
      getThemeSlideThumbnail: isSet(object.getThemeSlideThumbnail)
        ? APIV1ThemeResponse_GetThemeSlideThumbnail.fromJSON(
            object.getThemeSlideThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeResponse): unknown {
    const obj: any = {};
    if (message.getAll !== undefined) {
      obj.getAll = APIV1ThemeResponse_GetAll.toJSON(message.getAll);
    }
    if (message.getTheme !== undefined) {
      obj.getTheme = APIV1ThemeResponse_GetTheme.toJSON(message.getTheme);
    }
    if (message.deleteTheme !== undefined) {
      obj.deleteTheme = APIV1ThemeResponse_DeleteTheme.toJSON(
        message.deleteTheme,
      );
    }
    if (message.getThemeName !== undefined) {
      obj.getThemeName = APIV1ThemeResponse_GetThemeName.toJSON(
        message.getThemeName,
      );
    }
    if (message.putThemeName !== undefined) {
      obj.putThemeName = APIV1ThemeResponse_PutThemeName.toJSON(
        message.putThemeName,
      );
    }
    if (message.getThemeSlide !== undefined) {
      obj.getThemeSlide = APIV1ThemeResponse_GetThemeSlide.toJSON(
        message.getThemeSlide,
      );
    }
    if (message.putThemeSlide !== undefined) {
      obj.putThemeSlide = APIV1ThemeResponse_PutThemeSlide.toJSON(
        message.putThemeSlide,
      );
    }
    if (message.deleteThemeSlide !== undefined) {
      obj.deleteThemeSlide = APIV1ThemeResponse_DeleteThemeSlide.toJSON(
        message.deleteThemeSlide,
      );
    }
    if (message.getThemeSlideThumbnail !== undefined) {
      obj.getThemeSlideThumbnail =
        APIV1ThemeResponse_GetThemeSlideThumbnail.toJSON(
          message.getThemeSlideThumbnail,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse>, I>>(
    base?: I,
  ): APIV1ThemeResponse {
    return APIV1ThemeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse>, I>>(
    object: I,
  ): APIV1ThemeResponse {
    const message = createBaseAPIV1ThemeResponse();
    message.getAll =
      object.getAll !== undefined && object.getAll !== null
        ? APIV1ThemeResponse_GetAll.fromPartial(object.getAll)
        : undefined;
    message.getTheme =
      object.getTheme !== undefined && object.getTheme !== null
        ? APIV1ThemeResponse_GetTheme.fromPartial(object.getTheme)
        : undefined;
    message.deleteTheme =
      object.deleteTheme !== undefined && object.deleteTheme !== null
        ? APIV1ThemeResponse_DeleteTheme.fromPartial(object.deleteTheme)
        : undefined;
    message.getThemeName =
      object.getThemeName !== undefined && object.getThemeName !== null
        ? APIV1ThemeResponse_GetThemeName.fromPartial(object.getThemeName)
        : undefined;
    message.putThemeName =
      object.putThemeName !== undefined && object.putThemeName !== null
        ? APIV1ThemeResponse_PutThemeName.fromPartial(object.putThemeName)
        : undefined;
    message.getThemeSlide =
      object.getThemeSlide !== undefined && object.getThemeSlide !== null
        ? APIV1ThemeResponse_GetThemeSlide.fromPartial(object.getThemeSlide)
        : undefined;
    message.putThemeSlide =
      object.putThemeSlide !== undefined && object.putThemeSlide !== null
        ? APIV1ThemeResponse_PutThemeSlide.fromPartial(object.putThemeSlide)
        : undefined;
    message.deleteThemeSlide =
      object.deleteThemeSlide !== undefined && object.deleteThemeSlide !== null
        ? APIV1ThemeResponse_DeleteThemeSlide.fromPartial(
            object.deleteThemeSlide,
          )
        : undefined;
    message.getThemeSlideThumbnail =
      object.getThemeSlideThumbnail !== undefined &&
      object.getThemeSlideThumbnail !== null
        ? APIV1ThemeResponse_GetThemeSlideThumbnail.fromPartial(
            object.getThemeSlideThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeResponse_GetAll(): APIV1ThemeResponse_GetAll {
  return { groups: [], themes: [] };
}

export const APIV1ThemeResponse_GetAll = {
  encode(
    message: APIV1ThemeResponse_GetAll,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      APIV1ThemeGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.themes) {
      APIV1Theme.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_GetAll {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_GetAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(APIV1ThemeGroup.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.themes.push(APIV1Theme.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeResponse_GetAll {
    return {
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => APIV1ThemeGroup.fromJSON(e))
        : [],
      themes: globalThis.Array.isArray(object?.themes)
        ? object.themes.map((e: any) => APIV1Theme.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1ThemeResponse_GetAll): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => APIV1ThemeGroup.toJSON(e));
    }
    if (message.themes?.length) {
      obj.themes = message.themes.map((e) => APIV1Theme.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_GetAll>, I>>(
    base?: I,
  ): APIV1ThemeResponse_GetAll {
    return APIV1ThemeResponse_GetAll.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse_GetAll>, I>>(
    object: I,
  ): APIV1ThemeResponse_GetAll {
    const message = createBaseAPIV1ThemeResponse_GetAll();
    message.groups =
      object.groups?.map((e) => APIV1ThemeGroup.fromPartial(e)) || [];
    message.themes = object.themes?.map((e) => APIV1Theme.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1ThemeResponse_GetTheme(): APIV1ThemeResponse_GetTheme {
  return { theme: undefined, group: undefined };
}

export const APIV1ThemeResponse_GetTheme = {
  encode(
    message: APIV1ThemeResponse_GetTheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.theme !== undefined) {
      APIV1Theme.encode(message.theme, writer.uint32(10).fork()).ldelim();
    }
    if (message.group !== undefined) {
      APIV1ThemeGroup.encode(message.group, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_GetTheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_GetTheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.theme = APIV1Theme.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.group = APIV1ThemeGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeResponse_GetTheme {
    return {
      theme: isSet(object.theme)
        ? APIV1Theme.fromJSON(object.theme)
        : undefined,
      group: isSet(object.group)
        ? APIV1ThemeGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeResponse_GetTheme): unknown {
    const obj: any = {};
    if (message.theme !== undefined) {
      obj.theme = APIV1Theme.toJSON(message.theme);
    }
    if (message.group !== undefined) {
      obj.group = APIV1ThemeGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_GetTheme>, I>>(
    base?: I,
  ): APIV1ThemeResponse_GetTheme {
    return APIV1ThemeResponse_GetTheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse_GetTheme>, I>>(
    object: I,
  ): APIV1ThemeResponse_GetTheme {
    const message = createBaseAPIV1ThemeResponse_GetTheme();
    message.theme =
      object.theme !== undefined && object.theme !== null
        ? APIV1Theme.fromPartial(object.theme)
        : undefined;
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ThemeGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeResponse_DeleteTheme(): APIV1ThemeResponse_DeleteTheme {
  return {};
}

export const APIV1ThemeResponse_DeleteTheme = {
  encode(
    _: APIV1ThemeResponse_DeleteTheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_DeleteTheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_DeleteTheme();
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

  fromJSON(_: any): APIV1ThemeResponse_DeleteTheme {
    return {};
  },

  toJSON(_: APIV1ThemeResponse_DeleteTheme): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_DeleteTheme>, I>>(
    base?: I,
  ): APIV1ThemeResponse_DeleteTheme {
    return APIV1ThemeResponse_DeleteTheme.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse_DeleteTheme>, I>>(
    _: I,
  ): APIV1ThemeResponse_DeleteTheme {
    const message = createBaseAPIV1ThemeResponse_DeleteTheme();
    return message;
  },
};

function createBaseAPIV1ThemeResponse_GetThemeName(): APIV1ThemeResponse_GetThemeName {
  return { name: '' };
}

export const APIV1ThemeResponse_GetThemeName = {
  encode(
    message: APIV1ThemeResponse_GetThemeName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_GetThemeName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_GetThemeName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeResponse_GetThemeName {
    return { name: isSet(object.name) ? globalThis.String(object.name) : '' };
  },

  toJSON(message: APIV1ThemeResponse_GetThemeName): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeName>, I>>(
    base?: I,
  ): APIV1ThemeResponse_GetThemeName {
    return APIV1ThemeResponse_GetThemeName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeName>, I>>(
    object: I,
  ): APIV1ThemeResponse_GetThemeName {
    const message = createBaseAPIV1ThemeResponse_GetThemeName();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseAPIV1ThemeResponse_PutThemeName(): APIV1ThemeResponse_PutThemeName {
  return {};
}

export const APIV1ThemeResponse_PutThemeName = {
  encode(
    _: APIV1ThemeResponse_PutThemeName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_PutThemeName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_PutThemeName();
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

  fromJSON(_: any): APIV1ThemeResponse_PutThemeName {
    return {};
  },

  toJSON(_: APIV1ThemeResponse_PutThemeName): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_PutThemeName>, I>>(
    base?: I,
  ): APIV1ThemeResponse_PutThemeName {
    return APIV1ThemeResponse_PutThemeName.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ThemeResponse_PutThemeName>, I>>(
    _: I,
  ): APIV1ThemeResponse_PutThemeName {
    const message = createBaseAPIV1ThemeResponse_PutThemeName();
    return message;
  },
};

function createBaseAPIV1ThemeResponse_GetThemeSlide(): APIV1ThemeResponse_GetThemeSlide {
  return { themeSlide: undefined };
}

export const APIV1ThemeResponse_GetThemeSlide = {
  encode(
    message: APIV1ThemeResponse_GetThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.themeSlide !== undefined) {
      APIV1ThemeSlide.encode(
        message.themeSlide,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_GetThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_GetThemeSlide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.themeSlide = APIV1ThemeSlide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ThemeResponse_GetThemeSlide {
    return {
      themeSlide: isSet(object.themeSlide)
        ? APIV1ThemeSlide.fromJSON(object.themeSlide)
        : undefined,
    };
  },

  toJSON(message: APIV1ThemeResponse_GetThemeSlide): unknown {
    const obj: any = {};
    if (message.themeSlide !== undefined) {
      obj.themeSlide = APIV1ThemeSlide.toJSON(message.themeSlide);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeResponse_GetThemeSlide {
    return APIV1ThemeResponse_GetThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeSlide>, I>,
  >(object: I): APIV1ThemeResponse_GetThemeSlide {
    const message = createBaseAPIV1ThemeResponse_GetThemeSlide();
    message.themeSlide =
      object.themeSlide !== undefined && object.themeSlide !== null
        ? APIV1ThemeSlide.fromPartial(object.themeSlide)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ThemeResponse_PutThemeSlide(): APIV1ThemeResponse_PutThemeSlide {
  return {};
}

export const APIV1ThemeResponse_PutThemeSlide = {
  encode(
    _: APIV1ThemeResponse_PutThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_PutThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_PutThemeSlide();
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

  fromJSON(_: any): APIV1ThemeResponse_PutThemeSlide {
    return {};
  },

  toJSON(_: APIV1ThemeResponse_PutThemeSlide): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_PutThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeResponse_PutThemeSlide {
    return APIV1ThemeResponse_PutThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeResponse_PutThemeSlide>, I>,
  >(_: I): APIV1ThemeResponse_PutThemeSlide {
    const message = createBaseAPIV1ThemeResponse_PutThemeSlide();
    return message;
  },
};

function createBaseAPIV1ThemeResponse_DeleteThemeSlide(): APIV1ThemeResponse_DeleteThemeSlide {
  return {};
}

export const APIV1ThemeResponse_DeleteThemeSlide = {
  encode(
    _: APIV1ThemeResponse_DeleteThemeSlide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ThemeResponse_DeleteThemeSlide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_DeleteThemeSlide();
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

  fromJSON(_: any): APIV1ThemeResponse_DeleteThemeSlide {
    return {};
  },

  toJSON(_: APIV1ThemeResponse_DeleteThemeSlide): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ThemeResponse_DeleteThemeSlide>, I>>(
    base?: I,
  ): APIV1ThemeResponse_DeleteThemeSlide {
    return APIV1ThemeResponse_DeleteThemeSlide.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeResponse_DeleteThemeSlide>, I>,
  >(_: I): APIV1ThemeResponse_DeleteThemeSlide {
    const message = createBaseAPIV1ThemeResponse_DeleteThemeSlide();
    return message;
  },
};

function createBaseAPIV1ThemeResponse_GetThemeSlideThumbnail(): APIV1ThemeResponse_GetThemeSlideThumbnail {
  return { data: new Uint8Array(0) };
}

export const APIV1ThemeResponse_GetThemeSlideThumbnail = {
  encode(
    message: APIV1ThemeResponse_GetThemeSlideThumbnail,
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
  ): APIV1ThemeResponse_GetThemeSlideThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ThemeResponse_GetThemeSlideThumbnail();
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

  fromJSON(object: any): APIV1ThemeResponse_GetThemeSlideThumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1ThemeResponse_GetThemeSlideThumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeSlideThumbnail>, I>,
  >(base?: I): APIV1ThemeResponse_GetThemeSlideThumbnail {
    return APIV1ThemeResponse_GetThemeSlideThumbnail.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1ThemeResponse_GetThemeSlideThumbnail>, I>,
  >(object: I): APIV1ThemeResponse_GetThemeSlideThumbnail {
    const message = createBaseAPIV1ThemeResponse_GetThemeSlideThumbnail();
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
