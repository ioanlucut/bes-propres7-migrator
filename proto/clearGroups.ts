/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import {
  Action_ClearType,
  Action_ContentDestination,
  action_ContentDestinationFromJSON,
  action_ContentDestinationToJSON,
} from './action';
import { ApplicationInfo, Color, UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface ClearGroupsDocument {
  applicationInfo: ApplicationInfo | undefined;
  groups: ClearGroupsDocument_ClearGroup[];
}

export interface ClearGroupsDocument_ClearGroup {
  uuid: UUID | undefined;
  name: string;
  layerTargets: Action_ClearType[];
  isHiddenInPreview: boolean;
  imageData: Uint8Array;
  imageType: ClearGroupsDocument_ClearGroup_ImageType;
  isIconTinted: boolean;
  iconTintColor: Color | undefined;
  timelineTargets: Action_ContentDestination[];
  clearPresentationNextSlide: boolean;
}

export enum ClearGroupsDocument_ClearGroup_ImageType {
  ImageTypeCustom = 0,
  ImageTypeOne = 1,
  ImageTypeTwo = 2,
  ImageTypeThree = 3,
  ImageTypeFour = 4,
  ImageTypeFive = 5,
  ImageTypeSix = 6,
  ImageTypeSeven = 7,
  ImageTypeEight = 8,
  ImageTypeNine = 9,
  ImageTypeZero = 10,
  ImageTypeAll = 11,
  ImageTypeMegahorn = 12,
  ImageTypePlay = 13,
  ImageTypeBulb = 14,
  ImageTypeSunglasses = 15,
  ImageTypeArrow = 16,
  ImageTypeTarget = 17,
  ImageTypeStar = 18,
  ImageTypeSun = 19,
  ImageTypeBell = 20,
  ImageTypePaperclip = 21,
  ImageTypeFlask = 22,
  ImageTypeEyeglasses = 23,
  ImageTypeCupcake = 24,
  ImageTypeSlide = 25,
  ImageTypeHat = 26,
  ImageTypeFlower = 27,
  ImageTypeHeart = 28,
  ImageTypeMessage = 29,
  ImageTypeAudio = 30,
  ImageTypeCloud = 31,
  ImageTypeExclamation = 32,
  UNRECOGNIZED = -1,
}

export function clearGroupsDocument_ClearGroup_ImageTypeFromJSON(
  object: any,
): ClearGroupsDocument_ClearGroup_ImageType {
  switch (object) {
    case 0:
    case 'ImageTypeCustom':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCustom;
    case 1:
    case 'ImageTypeOne':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeOne;
    case 2:
    case 'ImageTypeTwo':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeTwo;
    case 3:
    case 'ImageTypeThree':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeThree;
    case 4:
    case 'ImageTypeFour':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFour;
    case 5:
    case 'ImageTypeFive':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFive;
    case 6:
    case 'ImageTypeSix':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSix;
    case 7:
    case 'ImageTypeSeven':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSeven;
    case 8:
    case 'ImageTypeEight':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeEight;
    case 9:
    case 'ImageTypeNine':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeNine;
    case 10:
    case 'ImageTypeZero':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeZero;
    case 11:
    case 'ImageTypeAll':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeAll;
    case 12:
    case 'ImageTypeMegahorn':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeMegahorn;
    case 13:
    case 'ImageTypePlay':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypePlay;
    case 14:
    case 'ImageTypeBulb':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeBulb;
    case 15:
    case 'ImageTypeSunglasses':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSunglasses;
    case 16:
    case 'ImageTypeArrow':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeArrow;
    case 17:
    case 'ImageTypeTarget':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeTarget;
    case 18:
    case 'ImageTypeStar':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeStar;
    case 19:
    case 'ImageTypeSun':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSun;
    case 20:
    case 'ImageTypeBell':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeBell;
    case 21:
    case 'ImageTypePaperclip':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypePaperclip;
    case 22:
    case 'ImageTypeFlask':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFlask;
    case 23:
    case 'ImageTypeEyeglasses':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeEyeglasses;
    case 24:
    case 'ImageTypeCupcake':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCupcake;
    case 25:
    case 'ImageTypeSlide':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSlide;
    case 26:
    case 'ImageTypeHat':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeHat;
    case 27:
    case 'ImageTypeFlower':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFlower;
    case 28:
    case 'ImageTypeHeart':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeHeart;
    case 29:
    case 'ImageTypeMessage':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeMessage;
    case 30:
    case 'ImageTypeAudio':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeAudio;
    case 31:
    case 'ImageTypeCloud':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCloud;
    case 32:
    case 'ImageTypeExclamation':
      return ClearGroupsDocument_ClearGroup_ImageType.ImageTypeExclamation;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ClearGroupsDocument_ClearGroup_ImageType.UNRECOGNIZED;
  }
}

export function clearGroupsDocument_ClearGroup_ImageTypeToJSON(
  object: ClearGroupsDocument_ClearGroup_ImageType,
): string {
  switch (object) {
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCustom:
      return 'ImageTypeCustom';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeOne:
      return 'ImageTypeOne';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeTwo:
      return 'ImageTypeTwo';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeThree:
      return 'ImageTypeThree';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFour:
      return 'ImageTypeFour';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFive:
      return 'ImageTypeFive';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSix:
      return 'ImageTypeSix';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSeven:
      return 'ImageTypeSeven';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeEight:
      return 'ImageTypeEight';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeNine:
      return 'ImageTypeNine';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeZero:
      return 'ImageTypeZero';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeAll:
      return 'ImageTypeAll';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeMegahorn:
      return 'ImageTypeMegahorn';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypePlay:
      return 'ImageTypePlay';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeBulb:
      return 'ImageTypeBulb';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSunglasses:
      return 'ImageTypeSunglasses';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeArrow:
      return 'ImageTypeArrow';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeTarget:
      return 'ImageTypeTarget';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeStar:
      return 'ImageTypeStar';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSun:
      return 'ImageTypeSun';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeBell:
      return 'ImageTypeBell';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypePaperclip:
      return 'ImageTypePaperclip';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFlask:
      return 'ImageTypeFlask';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeEyeglasses:
      return 'ImageTypeEyeglasses';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCupcake:
      return 'ImageTypeCupcake';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeSlide:
      return 'ImageTypeSlide';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeHat:
      return 'ImageTypeHat';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeFlower:
      return 'ImageTypeFlower';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeHeart:
      return 'ImageTypeHeart';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeMessage:
      return 'ImageTypeMessage';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeAudio:
      return 'ImageTypeAudio';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeCloud:
      return 'ImageTypeCloud';
    case ClearGroupsDocument_ClearGroup_ImageType.ImageTypeExclamation:
      return 'ImageTypeExclamation';
    case ClearGroupsDocument_ClearGroup_ImageType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseClearGroupsDocument(): ClearGroupsDocument {
  return { applicationInfo: undefined, groups: [] };
}

export const ClearGroupsDocument = {
  encode(
    message: ClearGroupsDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.groups) {
      ClearGroupsDocument_ClearGroup.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearGroupsDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearGroupsDocument();
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
          if (tag != 18) {
            break;
          }

          message.groups.push(
            ClearGroupsDocument_ClearGroup.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClearGroupsDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) =>
            ClearGroupsDocument_ClearGroup.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: ClearGroupsDocument): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? ClearGroupsDocument_ClearGroup.toJSON(e) : undefined,
      );
    } else {
      obj.groups = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClearGroupsDocument>, I>>(
    base?: I,
  ): ClearGroupsDocument {
    return ClearGroupsDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClearGroupsDocument>, I>>(
    object: I,
  ): ClearGroupsDocument {
    const message = createBaseClearGroupsDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.groups =
      object.groups?.map((e) =>
        ClearGroupsDocument_ClearGroup.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseClearGroupsDocument_ClearGroup(): ClearGroupsDocument_ClearGroup {
  return {
    uuid: undefined,
    name: '',
    layerTargets: [],
    isHiddenInPreview: false,
    imageData: new Uint8Array(),
    imageType: 0,
    isIconTinted: false,
    iconTintColor: undefined,
    timelineTargets: [],
    clearPresentationNextSlide: false,
  };
}

export const ClearGroupsDocument_ClearGroup = {
  encode(
    message: ClearGroupsDocument_ClearGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.layerTargets) {
      Action_ClearType.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.isHiddenInPreview === true) {
      writer.uint32(32).bool(message.isHiddenInPreview);
    }
    if (message.imageData.length !== 0) {
      writer.uint32(42).bytes(message.imageData);
    }
    if (message.imageType !== 0) {
      writer.uint32(48).int32(message.imageType);
    }
    if (message.isIconTinted === true) {
      writer.uint32(56).bool(message.isIconTinted);
    }
    if (message.iconTintColor !== undefined) {
      Color.encode(message.iconTintColor, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.timelineTargets) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.clearPresentationNextSlide === true) {
      writer.uint32(80).bool(message.clearPresentationNextSlide);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ClearGroupsDocument_ClearGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearGroupsDocument_ClearGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
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

          message.layerTargets.push(
            Action_ClearType.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.isHiddenInPreview = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.imageData = reader.bytes();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.imageType = reader.int32() as any;
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isIconTinted = reader.bool();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.iconTintColor = Color.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag == 72) {
            message.timelineTargets.push(reader.int32() as any);
            continue;
          }

          if (tag == 74) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.timelineTargets.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 10:
          if (tag != 80) {
            break;
          }

          message.clearPresentationNextSlide = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClearGroupsDocument_ClearGroup {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      layerTargets: Array.isArray(object?.layerTargets)
        ? object.layerTargets.map((e: any) => Action_ClearType.fromJSON(e))
        : [],
      isHiddenInPreview: isSet(object.isHiddenInPreview)
        ? Boolean(object.isHiddenInPreview)
        : false,
      imageData: isSet(object.imageData)
        ? bytesFromBase64(object.imageData)
        : new Uint8Array(),
      imageType: isSet(object.imageType)
        ? clearGroupsDocument_ClearGroup_ImageTypeFromJSON(object.imageType)
        : 0,
      isIconTinted: isSet(object.isIconTinted)
        ? Boolean(object.isIconTinted)
        : false,
      iconTintColor: isSet(object.iconTintColor)
        ? Color.fromJSON(object.iconTintColor)
        : undefined,
      timelineTargets: Array.isArray(object?.timelineTargets)
        ? object.timelineTargets.map((e: any) =>
            action_ContentDestinationFromJSON(e),
          )
        : [],
      clearPresentationNextSlide: isSet(object.clearPresentationNextSlide)
        ? Boolean(object.clearPresentationNextSlide)
        : false,
    };
  },

  toJSON(message: ClearGroupsDocument_ClearGroup): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.layerTargets) {
      obj.layerTargets = message.layerTargets.map((e) =>
        e ? Action_ClearType.toJSON(e) : undefined,
      );
    } else {
      obj.layerTargets = [];
    }
    message.isHiddenInPreview !== undefined &&
      (obj.isHiddenInPreview = message.isHiddenInPreview);
    message.imageData !== undefined &&
      (obj.imageData = base64FromBytes(
        message.imageData !== undefined ? message.imageData : new Uint8Array(),
      ));
    message.imageType !== undefined &&
      (obj.imageType = clearGroupsDocument_ClearGroup_ImageTypeToJSON(
        message.imageType,
      ));
    message.isIconTinted !== undefined &&
      (obj.isIconTinted = message.isIconTinted);
    message.iconTintColor !== undefined &&
      (obj.iconTintColor = message.iconTintColor
        ? Color.toJSON(message.iconTintColor)
        : undefined);
    if (message.timelineTargets) {
      obj.timelineTargets = message.timelineTargets.map((e) =>
        action_ContentDestinationToJSON(e),
      );
    } else {
      obj.timelineTargets = [];
    }
    message.clearPresentationNextSlide !== undefined &&
      (obj.clearPresentationNextSlide = message.clearPresentationNextSlide);
    return obj;
  },

  create<I extends Exact<DeepPartial<ClearGroupsDocument_ClearGroup>, I>>(
    base?: I,
  ): ClearGroupsDocument_ClearGroup {
    return ClearGroupsDocument_ClearGroup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClearGroupsDocument_ClearGroup>, I>>(
    object: I,
  ): ClearGroupsDocument_ClearGroup {
    const message = createBaseClearGroupsDocument_ClearGroup();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.layerTargets =
      object.layerTargets?.map((e) => Action_ClearType.fromPartial(e)) || [];
    message.isHiddenInPreview = object.isHiddenInPreview ?? false;
    message.imageData = object.imageData ?? new Uint8Array();
    message.imageType = object.imageType ?? 0;
    message.isIconTinted = object.isIconTinted ?? false;
    message.iconTintColor =
      object.iconTintColor !== undefined && object.iconTintColor !== null
        ? Color.fromPartial(object.iconTintColor)
        : undefined;
    message.timelineTargets = object.timelineTargets?.map((e) => e) || [];
    message.clearPresentationNextSlide =
      object.clearPresentationNextSlide ?? false;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(''));
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
