/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo } from './basicTypes';
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
          if (tag != 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.enableCcliDisplay = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ccliLicense = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.displayType = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.template = Template_Slide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
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
        ? Boolean(object.enableCcliDisplay)
        : false,
      ccliLicense: isSet(object.ccliLicense) ? String(object.ccliLicense) : '',
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
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    message.enableCcliDisplay !== undefined &&
      (obj.enableCcliDisplay = message.enableCcliDisplay);
    message.ccliLicense !== undefined &&
      (obj.ccliLicense = message.ccliLicense);
    message.displayType !== undefined &&
      (obj.displayType = cCLIDocument_DisplayTypeToJSON(message.displayType));
    message.template !== undefined &&
      (obj.template = message.template
        ? Template_Slide.toJSON(message.template)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CCLIDocument>, I>>(
    base?: I,
  ): CCLIDocument {
    return CCLIDocument.fromPartial(base ?? {});
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
