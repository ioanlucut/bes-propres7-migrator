/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action } from './action';
import { ApplicationInfo } from './applicationInfo';
import { Color } from './color';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface MacrosDocument {
  applicationInfo: ApplicationInfo | undefined;
  macros: MacrosDocument_Macro[];
  macroCollections: MacrosDocument_MacroCollection[];
}

export interface MacrosDocument_Macro {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  actions: Action[];
  triggerOnStartup: boolean;
  imageType: MacrosDocument_Macro_ImageType;
  imageData: Uint8Array;
}

export enum MacrosDocument_Macro_ImageType {
  ImageTypeDefault = 0,
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
  ImageTypeArrow = 11,
  ImageTypeAudio = 12,
  ImageTypeBell = 13,
  ImageTypeBulb = 14,
  ImageTypeCloud = 15,
  ImageTypeCupcake = 16,
  ImageTypeExclamation = 17,
  ImageTypeFlask = 18,
  ImageTypeFlower = 19,
  ImageTypeGlasses = 20,
  ImageTypeHashtag = 21,
  ImageTypeHat = 22,
  ImageTypeHeart = 23,
  ImageTypeMegaphone = 24,
  ImageTypeMessage = 25,
  ImageTypePaperclip = 26,
  ImageTypePlay = 27,
  ImageTypeSlide = 28,
  ImageTypeStar = 29,
  ImageTypeSun = 30,
  ImageTypeSunglasses = 31,
  ImageTypeTarget = 32,
  ImageTypeTimer = 33,
  ImageTypeVideoInput = 34,
  ImageTypeXClear = 35,
  ImageTypeLetterA = 36,
  ImageTypeLetterB = 37,
  ImageTypeLetterC = 38,
  ImageTypeLetterD = 39,
  ImageTypeLetterE = 40,
  ImageTypeLetterF = 41,
  ImageTypeLetterG = 42,
  ImageTypeLetterH = 43,
  ImageTypeLetterI = 44,
  ImageTypeLetterJ = 45,
  ImageTypeLetterK = 46,
  ImageTypeLetterL = 47,
  ImageTypeLetterM = 48,
  ImageTypeLetterN = 49,
  ImageTypeLetterO = 50,
  ImageTypeLetterP = 51,
  ImageTypeLetterQ = 52,
  ImageTypeLetterR = 53,
  ImageTypeLetterS = 54,
  ImageTypeLetterT = 55,
  ImageTypeLetterU = 56,
  ImageTypeLetterV = 57,
  ImageTypeLetterW = 58,
  ImageTypeLetterX = 59,
  ImageTypeLetterY = 60,
  ImageTypeLetterZ = 61,
  ImageTypeCustom = 62,
  UNRECOGNIZED = -1,
}

export function macrosDocument_Macro_ImageTypeFromJSON(
  object: any,
): MacrosDocument_Macro_ImageType {
  switch (object) {
    case 0:
    case 'ImageTypeDefault':
      return MacrosDocument_Macro_ImageType.ImageTypeDefault;
    case 1:
    case 'ImageTypeOne':
      return MacrosDocument_Macro_ImageType.ImageTypeOne;
    case 2:
    case 'ImageTypeTwo':
      return MacrosDocument_Macro_ImageType.ImageTypeTwo;
    case 3:
    case 'ImageTypeThree':
      return MacrosDocument_Macro_ImageType.ImageTypeThree;
    case 4:
    case 'ImageTypeFour':
      return MacrosDocument_Macro_ImageType.ImageTypeFour;
    case 5:
    case 'ImageTypeFive':
      return MacrosDocument_Macro_ImageType.ImageTypeFive;
    case 6:
    case 'ImageTypeSix':
      return MacrosDocument_Macro_ImageType.ImageTypeSix;
    case 7:
    case 'ImageTypeSeven':
      return MacrosDocument_Macro_ImageType.ImageTypeSeven;
    case 8:
    case 'ImageTypeEight':
      return MacrosDocument_Macro_ImageType.ImageTypeEight;
    case 9:
    case 'ImageTypeNine':
      return MacrosDocument_Macro_ImageType.ImageTypeNine;
    case 10:
    case 'ImageTypeZero':
      return MacrosDocument_Macro_ImageType.ImageTypeZero;
    case 11:
    case 'ImageTypeArrow':
      return MacrosDocument_Macro_ImageType.ImageTypeArrow;
    case 12:
    case 'ImageTypeAudio':
      return MacrosDocument_Macro_ImageType.ImageTypeAudio;
    case 13:
    case 'ImageTypeBell':
      return MacrosDocument_Macro_ImageType.ImageTypeBell;
    case 14:
    case 'ImageTypeBulb':
      return MacrosDocument_Macro_ImageType.ImageTypeBulb;
    case 15:
    case 'ImageTypeCloud':
      return MacrosDocument_Macro_ImageType.ImageTypeCloud;
    case 16:
    case 'ImageTypeCupcake':
      return MacrosDocument_Macro_ImageType.ImageTypeCupcake;
    case 17:
    case 'ImageTypeExclamation':
      return MacrosDocument_Macro_ImageType.ImageTypeExclamation;
    case 18:
    case 'ImageTypeFlask':
      return MacrosDocument_Macro_ImageType.ImageTypeFlask;
    case 19:
    case 'ImageTypeFlower':
      return MacrosDocument_Macro_ImageType.ImageTypeFlower;
    case 20:
    case 'ImageTypeGlasses':
      return MacrosDocument_Macro_ImageType.ImageTypeGlasses;
    case 21:
    case 'ImageTypeHashtag':
      return MacrosDocument_Macro_ImageType.ImageTypeHashtag;
    case 22:
    case 'ImageTypeHat':
      return MacrosDocument_Macro_ImageType.ImageTypeHat;
    case 23:
    case 'ImageTypeHeart':
      return MacrosDocument_Macro_ImageType.ImageTypeHeart;
    case 24:
    case 'ImageTypeMegaphone':
      return MacrosDocument_Macro_ImageType.ImageTypeMegaphone;
    case 25:
    case 'ImageTypeMessage':
      return MacrosDocument_Macro_ImageType.ImageTypeMessage;
    case 26:
    case 'ImageTypePaperclip':
      return MacrosDocument_Macro_ImageType.ImageTypePaperclip;
    case 27:
    case 'ImageTypePlay':
      return MacrosDocument_Macro_ImageType.ImageTypePlay;
    case 28:
    case 'ImageTypeSlide':
      return MacrosDocument_Macro_ImageType.ImageTypeSlide;
    case 29:
    case 'ImageTypeStar':
      return MacrosDocument_Macro_ImageType.ImageTypeStar;
    case 30:
    case 'ImageTypeSun':
      return MacrosDocument_Macro_ImageType.ImageTypeSun;
    case 31:
    case 'ImageTypeSunglasses':
      return MacrosDocument_Macro_ImageType.ImageTypeSunglasses;
    case 32:
    case 'ImageTypeTarget':
      return MacrosDocument_Macro_ImageType.ImageTypeTarget;
    case 33:
    case 'ImageTypeTimer':
      return MacrosDocument_Macro_ImageType.ImageTypeTimer;
    case 34:
    case 'ImageTypeVideoInput':
      return MacrosDocument_Macro_ImageType.ImageTypeVideoInput;
    case 35:
    case 'ImageTypeXClear':
      return MacrosDocument_Macro_ImageType.ImageTypeXClear;
    case 36:
    case 'ImageTypeLetterA':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterA;
    case 37:
    case 'ImageTypeLetterB':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterB;
    case 38:
    case 'ImageTypeLetterC':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterC;
    case 39:
    case 'ImageTypeLetterD':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterD;
    case 40:
    case 'ImageTypeLetterE':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterE;
    case 41:
    case 'ImageTypeLetterF':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterF;
    case 42:
    case 'ImageTypeLetterG':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterG;
    case 43:
    case 'ImageTypeLetterH':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterH;
    case 44:
    case 'ImageTypeLetterI':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterI;
    case 45:
    case 'ImageTypeLetterJ':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterJ;
    case 46:
    case 'ImageTypeLetterK':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterK;
    case 47:
    case 'ImageTypeLetterL':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterL;
    case 48:
    case 'ImageTypeLetterM':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterM;
    case 49:
    case 'ImageTypeLetterN':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterN;
    case 50:
    case 'ImageTypeLetterO':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterO;
    case 51:
    case 'ImageTypeLetterP':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterP;
    case 52:
    case 'ImageTypeLetterQ':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterQ;
    case 53:
    case 'ImageTypeLetterR':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterR;
    case 54:
    case 'ImageTypeLetterS':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterS;
    case 55:
    case 'ImageTypeLetterT':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterT;
    case 56:
    case 'ImageTypeLetterU':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterU;
    case 57:
    case 'ImageTypeLetterV':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterV;
    case 58:
    case 'ImageTypeLetterW':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterW;
    case 59:
    case 'ImageTypeLetterX':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterX;
    case 60:
    case 'ImageTypeLetterY':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterY;
    case 61:
    case 'ImageTypeLetterZ':
      return MacrosDocument_Macro_ImageType.ImageTypeLetterZ;
    case 62:
    case 'ImageTypeCustom':
      return MacrosDocument_Macro_ImageType.ImageTypeCustom;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MacrosDocument_Macro_ImageType.UNRECOGNIZED;
  }
}

export function macrosDocument_Macro_ImageTypeToJSON(
  object: MacrosDocument_Macro_ImageType,
): string {
  switch (object) {
    case MacrosDocument_Macro_ImageType.ImageTypeDefault:
      return 'ImageTypeDefault';
    case MacrosDocument_Macro_ImageType.ImageTypeOne:
      return 'ImageTypeOne';
    case MacrosDocument_Macro_ImageType.ImageTypeTwo:
      return 'ImageTypeTwo';
    case MacrosDocument_Macro_ImageType.ImageTypeThree:
      return 'ImageTypeThree';
    case MacrosDocument_Macro_ImageType.ImageTypeFour:
      return 'ImageTypeFour';
    case MacrosDocument_Macro_ImageType.ImageTypeFive:
      return 'ImageTypeFive';
    case MacrosDocument_Macro_ImageType.ImageTypeSix:
      return 'ImageTypeSix';
    case MacrosDocument_Macro_ImageType.ImageTypeSeven:
      return 'ImageTypeSeven';
    case MacrosDocument_Macro_ImageType.ImageTypeEight:
      return 'ImageTypeEight';
    case MacrosDocument_Macro_ImageType.ImageTypeNine:
      return 'ImageTypeNine';
    case MacrosDocument_Macro_ImageType.ImageTypeZero:
      return 'ImageTypeZero';
    case MacrosDocument_Macro_ImageType.ImageTypeArrow:
      return 'ImageTypeArrow';
    case MacrosDocument_Macro_ImageType.ImageTypeAudio:
      return 'ImageTypeAudio';
    case MacrosDocument_Macro_ImageType.ImageTypeBell:
      return 'ImageTypeBell';
    case MacrosDocument_Macro_ImageType.ImageTypeBulb:
      return 'ImageTypeBulb';
    case MacrosDocument_Macro_ImageType.ImageTypeCloud:
      return 'ImageTypeCloud';
    case MacrosDocument_Macro_ImageType.ImageTypeCupcake:
      return 'ImageTypeCupcake';
    case MacrosDocument_Macro_ImageType.ImageTypeExclamation:
      return 'ImageTypeExclamation';
    case MacrosDocument_Macro_ImageType.ImageTypeFlask:
      return 'ImageTypeFlask';
    case MacrosDocument_Macro_ImageType.ImageTypeFlower:
      return 'ImageTypeFlower';
    case MacrosDocument_Macro_ImageType.ImageTypeGlasses:
      return 'ImageTypeGlasses';
    case MacrosDocument_Macro_ImageType.ImageTypeHashtag:
      return 'ImageTypeHashtag';
    case MacrosDocument_Macro_ImageType.ImageTypeHat:
      return 'ImageTypeHat';
    case MacrosDocument_Macro_ImageType.ImageTypeHeart:
      return 'ImageTypeHeart';
    case MacrosDocument_Macro_ImageType.ImageTypeMegaphone:
      return 'ImageTypeMegaphone';
    case MacrosDocument_Macro_ImageType.ImageTypeMessage:
      return 'ImageTypeMessage';
    case MacrosDocument_Macro_ImageType.ImageTypePaperclip:
      return 'ImageTypePaperclip';
    case MacrosDocument_Macro_ImageType.ImageTypePlay:
      return 'ImageTypePlay';
    case MacrosDocument_Macro_ImageType.ImageTypeSlide:
      return 'ImageTypeSlide';
    case MacrosDocument_Macro_ImageType.ImageTypeStar:
      return 'ImageTypeStar';
    case MacrosDocument_Macro_ImageType.ImageTypeSun:
      return 'ImageTypeSun';
    case MacrosDocument_Macro_ImageType.ImageTypeSunglasses:
      return 'ImageTypeSunglasses';
    case MacrosDocument_Macro_ImageType.ImageTypeTarget:
      return 'ImageTypeTarget';
    case MacrosDocument_Macro_ImageType.ImageTypeTimer:
      return 'ImageTypeTimer';
    case MacrosDocument_Macro_ImageType.ImageTypeVideoInput:
      return 'ImageTypeVideoInput';
    case MacrosDocument_Macro_ImageType.ImageTypeXClear:
      return 'ImageTypeXClear';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterA:
      return 'ImageTypeLetterA';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterB:
      return 'ImageTypeLetterB';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterC:
      return 'ImageTypeLetterC';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterD:
      return 'ImageTypeLetterD';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterE:
      return 'ImageTypeLetterE';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterF:
      return 'ImageTypeLetterF';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterG:
      return 'ImageTypeLetterG';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterH:
      return 'ImageTypeLetterH';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterI:
      return 'ImageTypeLetterI';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterJ:
      return 'ImageTypeLetterJ';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterK:
      return 'ImageTypeLetterK';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterL:
      return 'ImageTypeLetterL';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterM:
      return 'ImageTypeLetterM';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterN:
      return 'ImageTypeLetterN';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterO:
      return 'ImageTypeLetterO';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterP:
      return 'ImageTypeLetterP';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterQ:
      return 'ImageTypeLetterQ';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterR:
      return 'ImageTypeLetterR';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterS:
      return 'ImageTypeLetterS';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterT:
      return 'ImageTypeLetterT';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterU:
      return 'ImageTypeLetterU';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterV:
      return 'ImageTypeLetterV';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterW:
      return 'ImageTypeLetterW';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterX:
      return 'ImageTypeLetterX';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterY:
      return 'ImageTypeLetterY';
    case MacrosDocument_Macro_ImageType.ImageTypeLetterZ:
      return 'ImageTypeLetterZ';
    case MacrosDocument_Macro_ImageType.ImageTypeCustom:
      return 'ImageTypeCustom';
    case MacrosDocument_Macro_ImageType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface MacrosDocument_MacroCollection {
  uuid: UUID | undefined;
  name: string;
  items: MacrosDocument_MacroCollection_Item[];
}

export interface MacrosDocument_MacroCollection_Item {
  macroId?: UUID | undefined;
}

function createBaseMacrosDocument(): MacrosDocument {
  return { applicationInfo: undefined, macros: [], macroCollections: [] };
}

export const MacrosDocument = {
  encode(
    message: MacrosDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.macros) {
      MacrosDocument_Macro.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.macroCollections) {
      MacrosDocument_MacroCollection.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MacrosDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacrosDocument();
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

          message.macros.push(
            MacrosDocument_Macro.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.macroCollections.push(
            MacrosDocument_MacroCollection.decode(reader, reader.uint32()),
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

  fromJSON(object: any): MacrosDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      macros: globalThis.Array.isArray(object?.macros)
        ? object.macros.map((e: any) => MacrosDocument_Macro.fromJSON(e))
        : [],
      macroCollections: globalThis.Array.isArray(object?.macroCollections)
        ? object.macroCollections.map((e: any) =>
            MacrosDocument_MacroCollection.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MacrosDocument): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.macros?.length) {
      obj.macros = message.macros.map((e) => MacrosDocument_Macro.toJSON(e));
    }
    if (message.macroCollections?.length) {
      obj.macroCollections = message.macroCollections.map((e) =>
        MacrosDocument_MacroCollection.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument>, I>>(
    base?: I,
  ): MacrosDocument {
    return MacrosDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MacrosDocument>, I>>(
    object: I,
  ): MacrosDocument {
    const message = createBaseMacrosDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.macros =
      object.macros?.map((e) => MacrosDocument_Macro.fromPartial(e)) || [];
    message.macroCollections =
      object.macroCollections?.map((e) =>
        MacrosDocument_MacroCollection.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseMacrosDocument_Macro(): MacrosDocument_Macro {
  return {
    uuid: undefined,
    name: '',
    color: undefined,
    actions: [],
    triggerOnStartup: false,
    imageType: 0,
    imageData: new Uint8Array(0),
  };
}

export const MacrosDocument_Macro = {
  encode(
    message: MacrosDocument_Macro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.triggerOnStartup !== false) {
      writer.uint32(40).bool(message.triggerOnStartup);
    }
    if (message.imageType !== 0) {
      writer.uint32(48).int32(message.imageType);
    }
    if (message.imageData.length !== 0) {
      writer.uint32(58).bytes(message.imageData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MacrosDocument_Macro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacrosDocument_Macro();
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

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.triggerOnStartup = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.imageType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.imageData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MacrosDocument_Macro {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
      triggerOnStartup: isSet(object.triggerOnStartup)
        ? globalThis.Boolean(object.triggerOnStartup)
        : false,
      imageType: isSet(object.imageType)
        ? macrosDocument_Macro_ImageTypeFromJSON(object.imageType)
        : 0,
      imageData: isSet(object.imageData)
        ? bytesFromBase64(object.imageData)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MacrosDocument_Macro): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.color !== undefined) {
      obj.color = Color.toJSON(message.color);
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => Action.toJSON(e));
    }
    if (message.triggerOnStartup !== false) {
      obj.triggerOnStartup = message.triggerOnStartup;
    }
    if (message.imageType !== 0) {
      obj.imageType = macrosDocument_Macro_ImageTypeToJSON(message.imageType);
    }
    if (message.imageData.length !== 0) {
      obj.imageData = base64FromBytes(message.imageData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument_Macro>, I>>(
    base?: I,
  ): MacrosDocument_Macro {
    return MacrosDocument_Macro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MacrosDocument_Macro>, I>>(
    object: I,
  ): MacrosDocument_Macro {
    const message = createBaseMacrosDocument_Macro();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    message.triggerOnStartup = object.triggerOnStartup ?? false;
    message.imageType = object.imageType ?? 0;
    message.imageData = object.imageData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMacrosDocument_MacroCollection(): MacrosDocument_MacroCollection {
  return { uuid: undefined, name: '', items: [] };
}

export const MacrosDocument_MacroCollection = {
  encode(
    message: MacrosDocument_MacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.items) {
      MacrosDocument_MacroCollection_Item.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MacrosDocument_MacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacrosDocument_MacroCollection();
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

          message.items.push(
            MacrosDocument_MacroCollection_Item.decode(reader, reader.uint32()),
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

  fromJSON(object: any): MacrosDocument_MacroCollection {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) =>
            MacrosDocument_MacroCollection_Item.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: MacrosDocument_MacroCollection): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) =>
        MacrosDocument_MacroCollection_Item.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument_MacroCollection>, I>>(
    base?: I,
  ): MacrosDocument_MacroCollection {
    return MacrosDocument_MacroCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MacrosDocument_MacroCollection>, I>>(
    object: I,
  ): MacrosDocument_MacroCollection {
    const message = createBaseMacrosDocument_MacroCollection();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.items =
      object.items?.map((e) =>
        MacrosDocument_MacroCollection_Item.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseMacrosDocument_MacroCollection_Item(): MacrosDocument_MacroCollection_Item {
  return { macroId: undefined };
}

export const MacrosDocument_MacroCollection_Item = {
  encode(
    message: MacrosDocument_MacroCollection_Item,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macroId !== undefined) {
      UUID.encode(message.macroId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MacrosDocument_MacroCollection_Item {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMacrosDocument_MacroCollection_Item();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macroId = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MacrosDocument_MacroCollection_Item {
    return {
      macroId: isSet(object.macroId)
        ? UUID.fromJSON(object.macroId)
        : undefined,
    };
  },

  toJSON(message: MacrosDocument_MacroCollection_Item): unknown {
    const obj: any = {};
    if (message.macroId !== undefined) {
      obj.macroId = UUID.toJSON(message.macroId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument_MacroCollection_Item>, I>>(
    base?: I,
  ): MacrosDocument_MacroCollection_Item {
    return MacrosDocument_MacroCollection_Item.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<MacrosDocument_MacroCollection_Item>, I>,
  >(object: I): MacrosDocument_MacroCollection_Item {
    const message = createBaseMacrosDocument_MacroCollection_Item();
    message.macroId =
      object.macroId !== undefined && object.macroId !== null
        ? UUID.fromPartial(object.macroId)
        : undefined;
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
