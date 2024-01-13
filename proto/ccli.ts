/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo } from './applicationInfo';
import { Template_Slide } from './template';

export const protobufPackage = 'rv.data';

export interface CCLIDocument {
  applicationInfo: ApplicationInfo | undefined;
  enableCcliDisplay: boolean;
  ccliLicense: string;
  displayType: CCLIDocument_DisplayType;
  template: Template_Slide | undefined;
}

export enum CCLIDocument_DisplayType {
  DISPLAY_TYPE_FIRST_SLIDE = 0,
  DISPLAY_TYPE_LAST_SLIDE = 1,
  DISPLAY_TYPE_FIRST_AND_LAST_SLIDE = 2,
  DISPLAY_TYPE_ALL_SLIDES = 3,
  UNRECOGNIZED = -1,
}

export function cCLIDocument_DisplayTypeFromJSON(
  object: any,
): CCLIDocument_DisplayType {
  switch (object) {
    case 0:
    case 'DISPLAY_TYPE_FIRST_SLIDE':
      return CCLIDocument_DisplayType.DISPLAY_TYPE_FIRST_SLIDE;
    case 1:
    case 'DISPLAY_TYPE_LAST_SLIDE':
      return CCLIDocument_DisplayType.DISPLAY_TYPE_LAST_SLIDE;
    case 2:
    case 'DISPLAY_TYPE_FIRST_AND_LAST_SLIDE':
      return CCLIDocument_DisplayType.DISPLAY_TYPE_FIRST_AND_LAST_SLIDE;
    case 3:
    case 'DISPLAY_TYPE_ALL_SLIDES':
      return CCLIDocument_DisplayType.DISPLAY_TYPE_ALL_SLIDES;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CCLIDocument_DisplayType.UNRECOGNIZED;
  }
}

export function cCLIDocument_DisplayTypeToJSON(
  object: CCLIDocument_DisplayType,
): string {
  switch (object) {
    case CCLIDocument_DisplayType.DISPLAY_TYPE_FIRST_SLIDE:
      return 'DISPLAY_TYPE_FIRST_SLIDE';
    case CCLIDocument_DisplayType.DISPLAY_TYPE_LAST_SLIDE:
      return 'DISPLAY_TYPE_LAST_SLIDE';
    case CCLIDocument_DisplayType.DISPLAY_TYPE_FIRST_AND_LAST_SLIDE:
      return 'DISPLAY_TYPE_FIRST_AND_LAST_SLIDE';
    case CCLIDocument_DisplayType.DISPLAY_TYPE_ALL_SLIDES:
      return 'DISPLAY_TYPE_ALL_SLIDES';
    case CCLIDocument_DisplayType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface CopyrightLayout {
  tokens: CopyrightLayout_Token[];
}

export enum CopyrightLayout_TokenType {
  Text = 0,
  Artist = 1,
  Author = 2,
  Publisher = 3,
  Title = 4,
  CopyrightYear = 5,
  LicenseNumber = 6,
  SongNumber = 7,
  UNRECOGNIZED = -1,
}

export function copyrightLayout_TokenTypeFromJSON(
  object: any,
): CopyrightLayout_TokenType {
  switch (object) {
    case 0:
    case 'Text':
      return CopyrightLayout_TokenType.Text;
    case 1:
    case 'Artist':
      return CopyrightLayout_TokenType.Artist;
    case 2:
    case 'Author':
      return CopyrightLayout_TokenType.Author;
    case 3:
    case 'Publisher':
      return CopyrightLayout_TokenType.Publisher;
    case 4:
    case 'Title':
      return CopyrightLayout_TokenType.Title;
    case 5:
    case 'CopyrightYear':
      return CopyrightLayout_TokenType.CopyrightYear;
    case 6:
    case 'LicenseNumber':
      return CopyrightLayout_TokenType.LicenseNumber;
    case 7:
    case 'SongNumber':
      return CopyrightLayout_TokenType.SongNumber;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CopyrightLayout_TokenType.UNRECOGNIZED;
  }
}

export function copyrightLayout_TokenTypeToJSON(
  object: CopyrightLayout_TokenType,
): string {
  switch (object) {
    case CopyrightLayout_TokenType.Text:
      return 'Text';
    case CopyrightLayout_TokenType.Artist:
      return 'Artist';
    case CopyrightLayout_TokenType.Author:
      return 'Author';
    case CopyrightLayout_TokenType.Publisher:
      return 'Publisher';
    case CopyrightLayout_TokenType.Title:
      return 'Title';
    case CopyrightLayout_TokenType.CopyrightYear:
      return 'CopyrightYear';
    case CopyrightLayout_TokenType.LicenseNumber:
      return 'LicenseNumber';
    case CopyrightLayout_TokenType.SongNumber:
      return 'SongNumber';
    case CopyrightLayout_TokenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface CopyrightLayout_Token {
  tokenType: CopyrightLayout_TokenType;
  text: string;
}

function createBaseCCLIDocument(): CCLIDocument {
  return {
    applicationInfo: undefined,
    enableCcliDisplay: false,
    ccliLicense: '',
    displayType: 0,
    template: undefined,
  };
}

export const CCLIDocument = {
  encode(
    message: CCLIDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.enableCcliDisplay === true) {
      writer.uint32(16).bool(message.enableCcliDisplay);
    }
    if (message.ccliLicense !== '') {
      writer.uint32(26).string(message.ccliLicense);
    }
    if (message.displayType !== 0) {
      writer.uint32(32).int32(message.displayType);
    }
    if (message.template !== undefined) {
      Template_Slide.encode(
        message.template,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CCLIDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCCLIDocument();
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
          if (tag !== 16) {
            break;
          }

          message.enableCcliDisplay = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ccliLicense = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.displayType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.template = Template_Slide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CCLIDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      enableCcliDisplay: isSet(object.enableCcliDisplay)
        ? globalThis.Boolean(object.enableCcliDisplay)
        : false,
      ccliLicense: isSet(object.ccliLicense)
        ? globalThis.String(object.ccliLicense)
        : '',
      displayType: isSet(object.displayType)
        ? cCLIDocument_DisplayTypeFromJSON(object.displayType)
        : 0,
      template: isSet(object.template)
        ? Template_Slide.fromJSON(object.template)
        : undefined,
    };
  },

  toJSON(message: CCLIDocument): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.enableCcliDisplay === true) {
      obj.enableCcliDisplay = message.enableCcliDisplay;
    }
    if (message.ccliLicense !== '') {
      obj.ccliLicense = message.ccliLicense;
    }
    if (message.displayType !== 0) {
      obj.displayType = cCLIDocument_DisplayTypeToJSON(message.displayType);
    }
    if (message.template !== undefined) {
      obj.template = Template_Slide.toJSON(message.template);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CCLIDocument>, I>>(
    base?: I,
  ): CCLIDocument {
    return CCLIDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CCLIDocument>, I>>(
    object: I,
  ): CCLIDocument {
    const message = createBaseCCLIDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.enableCcliDisplay = object.enableCcliDisplay ?? false;
    message.ccliLicense = object.ccliLicense ?? '';
    message.displayType = object.displayType ?? 0;
    message.template =
      object.template !== undefined && object.template !== null
        ? Template_Slide.fromPartial(object.template)
        : undefined;
    return message;
  },
};

function createBaseCopyrightLayout(): CopyrightLayout {
  return { tokens: [] };
}

export const CopyrightLayout = {
  encode(
    message: CopyrightLayout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.tokens) {
      CopyrightLayout_Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopyrightLayout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyrightLayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokens.push(
            CopyrightLayout_Token.decode(reader, reader.uint32()),
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

  fromJSON(object: any): CopyrightLayout {
    return {
      tokens: globalThis.Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => CopyrightLayout_Token.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CopyrightLayout): unknown {
    const obj: any = {};
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => CopyrightLayout_Token.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CopyrightLayout>, I>>(
    base?: I,
  ): CopyrightLayout {
    return CopyrightLayout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CopyrightLayout>, I>>(
    object: I,
  ): CopyrightLayout {
    const message = createBaseCopyrightLayout();
    message.tokens =
      object.tokens?.map((e) => CopyrightLayout_Token.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCopyrightLayout_Token(): CopyrightLayout_Token {
  return { tokenType: 0, text: '' };
}

export const CopyrightLayout_Token = {
  encode(
    message: CopyrightLayout_Token,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenType !== 0) {
      writer.uint32(8).int32(message.tokenType);
    }
    if (message.text !== '') {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CopyrightLayout_Token {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopyrightLayout_Token();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.tokenType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CopyrightLayout_Token {
    return {
      tokenType: isSet(object.tokenType)
        ? copyrightLayout_TokenTypeFromJSON(object.tokenType)
        : 0,
      text: isSet(object.text) ? globalThis.String(object.text) : '',
    };
  },

  toJSON(message: CopyrightLayout_Token): unknown {
    const obj: any = {};
    if (message.tokenType !== 0) {
      obj.tokenType = copyrightLayout_TokenTypeToJSON(message.tokenType);
    }
    if (message.text !== '') {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CopyrightLayout_Token>, I>>(
    base?: I,
  ): CopyrightLayout_Token {
    return CopyrightLayout_Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CopyrightLayout_Token>, I>>(
    object: I,
  ): CopyrightLayout_Token {
    const message = createBaseCopyrightLayout_Token();
    message.tokenType = object.tokenType ?? 0;
    message.text = object.text ?? '';
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
