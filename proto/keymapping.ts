/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo, CollectionElementType } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface KeyMapping {
  keyboard: KeyMapping_ComputerKeyboard | undefined;
  midi: KeyMapping_MIDIKeyboard | undefined;
  menuItem?: string | undefined;
  clearGroupIdentifier?: CollectionElementType | undefined;
  cueIdentifier?: CollectionElementType | undefined;
  groupIdentifier?: CollectionElementType | undefined;
  macroIdentifier?: CollectionElementType | undefined;
  propIdentifier?: CollectionElementType | undefined;
  timerIdentifier?: CollectionElementType | undefined;
}

export interface KeyMapping_ComputerKeyboard {
  keyEquivalent: string;
  keyEquivalentModifierFlags: KeyMapping_ComputerKeyboard_ModifierFlags[];
}

export enum KeyMapping_ComputerKeyboard_ModifierFlags {
  MODIFIERFLAGS_COMMAND_KEY = 0,
  MODIFIERFLAGS_SHIFT_KEY = 1,
  MODIFIERFLAGS_OPTION_KEY = 2,
  MODIFIERFLAGS_CONTROL_KEY = 3,
  MODIFIERFLAGS_FUNCTION_KEY = 4,
  UNRECOGNIZED = -1,
}

export function keyMapping_ComputerKeyboard_ModifierFlagsFromJSON(
  object: any,
): KeyMapping_ComputerKeyboard_ModifierFlags {
  switch (object) {
    case 0:
    case 'MODIFIERFLAGS_COMMAND_KEY':
      return KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_COMMAND_KEY;
    case 1:
    case 'MODIFIERFLAGS_SHIFT_KEY':
      return KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_SHIFT_KEY;
    case 2:
    case 'MODIFIERFLAGS_OPTION_KEY':
      return KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_OPTION_KEY;
    case 3:
    case 'MODIFIERFLAGS_CONTROL_KEY':
      return KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_CONTROL_KEY;
    case 4:
    case 'MODIFIERFLAGS_FUNCTION_KEY':
      return KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_FUNCTION_KEY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return KeyMapping_ComputerKeyboard_ModifierFlags.UNRECOGNIZED;
  }
}

export function keyMapping_ComputerKeyboard_ModifierFlagsToJSON(
  object: KeyMapping_ComputerKeyboard_ModifierFlags,
): string {
  switch (object) {
    case KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_COMMAND_KEY:
      return 'MODIFIERFLAGS_COMMAND_KEY';
    case KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_SHIFT_KEY:
      return 'MODIFIERFLAGS_SHIFT_KEY';
    case KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_OPTION_KEY:
      return 'MODIFIERFLAGS_OPTION_KEY';
    case KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_CONTROL_KEY:
      return 'MODIFIERFLAGS_CONTROL_KEY';
    case KeyMapping_ComputerKeyboard_ModifierFlags.MODIFIERFLAGS_FUNCTION_KEY:
      return 'MODIFIERFLAGS_FUNCTION_KEY';
    case KeyMapping_ComputerKeyboard_ModifierFlags.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface KeyMapping_MIDIKeyboard {
  channel: number;
  pitch: number;
  velocity: number;
}

export interface KeyMappingDocument {
  applicationInfo: ApplicationInfo | undefined;
  keymappings: KeyMapping[];
  macosKeymappings: KeyMapping[];
  windowsKeymappings: KeyMapping[];
}

function createBaseKeyMapping(): KeyMapping {
  return {
    keyboard: undefined,
    midi: undefined,
    menuItem: undefined,
    clearGroupIdentifier: undefined,
    cueIdentifier: undefined,
    groupIdentifier: undefined,
    macroIdentifier: undefined,
    propIdentifier: undefined,
    timerIdentifier: undefined,
  };
}

export const KeyMapping = {
  encode(
    message: KeyMapping,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyboard !== undefined) {
      KeyMapping_ComputerKeyboard.encode(
        message.keyboard,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.midi !== undefined) {
      KeyMapping_MIDIKeyboard.encode(
        message.midi,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.menuItem !== undefined) {
      writer.uint32(802).string(message.menuItem);
    }
    if (message.clearGroupIdentifier !== undefined) {
      CollectionElementType.encode(
        message.clearGroupIdentifier,
        writer.uint32(810).fork(),
      ).ldelim();
    }
    if (message.cueIdentifier !== undefined) {
      CollectionElementType.encode(
        message.cueIdentifier,
        writer.uint32(818).fork(),
      ).ldelim();
    }
    if (message.groupIdentifier !== undefined) {
      CollectionElementType.encode(
        message.groupIdentifier,
        writer.uint32(826).fork(),
      ).ldelim();
    }
    if (message.macroIdentifier !== undefined) {
      CollectionElementType.encode(
        message.macroIdentifier,
        writer.uint32(834).fork(),
      ).ldelim();
    }
    if (message.propIdentifier !== undefined) {
      CollectionElementType.encode(
        message.propIdentifier,
        writer.uint32(842).fork(),
      ).ldelim();
    }
    if (message.timerIdentifier !== undefined) {
      CollectionElementType.encode(
        message.timerIdentifier,
        writer.uint32(850).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyMapping {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyboard = KeyMapping_ComputerKeyboard.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.midi = KeyMapping_MIDIKeyboard.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 100:
          if (tag !== 802) {
            break;
          }

          message.menuItem = reader.string();
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.clearGroupIdentifier = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.cueIdentifier = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.groupIdentifier = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.macroIdentifier = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.propIdentifier = CollectionElementType.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.timerIdentifier = CollectionElementType.decode(
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

  fromJSON(object: any): KeyMapping {
    return {
      keyboard: isSet(object.keyboard)
        ? KeyMapping_ComputerKeyboard.fromJSON(object.keyboard)
        : undefined,
      midi: isSet(object.midi)
        ? KeyMapping_MIDIKeyboard.fromJSON(object.midi)
        : undefined,
      menuItem: isSet(object.menuItem)
        ? globalThis.String(object.menuItem)
        : undefined,
      clearGroupIdentifier: isSet(object.clearGroupIdentifier)
        ? CollectionElementType.fromJSON(object.clearGroupIdentifier)
        : undefined,
      cueIdentifier: isSet(object.cueIdentifier)
        ? CollectionElementType.fromJSON(object.cueIdentifier)
        : undefined,
      groupIdentifier: isSet(object.groupIdentifier)
        ? CollectionElementType.fromJSON(object.groupIdentifier)
        : undefined,
      macroIdentifier: isSet(object.macroIdentifier)
        ? CollectionElementType.fromJSON(object.macroIdentifier)
        : undefined,
      propIdentifier: isSet(object.propIdentifier)
        ? CollectionElementType.fromJSON(object.propIdentifier)
        : undefined,
      timerIdentifier: isSet(object.timerIdentifier)
        ? CollectionElementType.fromJSON(object.timerIdentifier)
        : undefined,
    };
  },

  toJSON(message: KeyMapping): unknown {
    const obj: any = {};
    if (message.keyboard !== undefined) {
      obj.keyboard = KeyMapping_ComputerKeyboard.toJSON(message.keyboard);
    }
    if (message.midi !== undefined) {
      obj.midi = KeyMapping_MIDIKeyboard.toJSON(message.midi);
    }
    if (message.menuItem !== undefined) {
      obj.menuItem = message.menuItem;
    }
    if (message.clearGroupIdentifier !== undefined) {
      obj.clearGroupIdentifier = CollectionElementType.toJSON(
        message.clearGroupIdentifier,
      );
    }
    if (message.cueIdentifier !== undefined) {
      obj.cueIdentifier = CollectionElementType.toJSON(message.cueIdentifier);
    }
    if (message.groupIdentifier !== undefined) {
      obj.groupIdentifier = CollectionElementType.toJSON(
        message.groupIdentifier,
      );
    }
    if (message.macroIdentifier !== undefined) {
      obj.macroIdentifier = CollectionElementType.toJSON(
        message.macroIdentifier,
      );
    }
    if (message.propIdentifier !== undefined) {
      obj.propIdentifier = CollectionElementType.toJSON(message.propIdentifier);
    }
    if (message.timerIdentifier !== undefined) {
      obj.timerIdentifier = CollectionElementType.toJSON(
        message.timerIdentifier,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyMapping>, I>>(base?: I): KeyMapping {
    return KeyMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyMapping>, I>>(
    object: I,
  ): KeyMapping {
    const message = createBaseKeyMapping();
    message.keyboard =
      object.keyboard !== undefined && object.keyboard !== null
        ? KeyMapping_ComputerKeyboard.fromPartial(object.keyboard)
        : undefined;
    message.midi =
      object.midi !== undefined && object.midi !== null
        ? KeyMapping_MIDIKeyboard.fromPartial(object.midi)
        : undefined;
    message.menuItem = object.menuItem ?? undefined;
    message.clearGroupIdentifier =
      object.clearGroupIdentifier !== undefined &&
      object.clearGroupIdentifier !== null
        ? CollectionElementType.fromPartial(object.clearGroupIdentifier)
        : undefined;
    message.cueIdentifier =
      object.cueIdentifier !== undefined && object.cueIdentifier !== null
        ? CollectionElementType.fromPartial(object.cueIdentifier)
        : undefined;
    message.groupIdentifier =
      object.groupIdentifier !== undefined && object.groupIdentifier !== null
        ? CollectionElementType.fromPartial(object.groupIdentifier)
        : undefined;
    message.macroIdentifier =
      object.macroIdentifier !== undefined && object.macroIdentifier !== null
        ? CollectionElementType.fromPartial(object.macroIdentifier)
        : undefined;
    message.propIdentifier =
      object.propIdentifier !== undefined && object.propIdentifier !== null
        ? CollectionElementType.fromPartial(object.propIdentifier)
        : undefined;
    message.timerIdentifier =
      object.timerIdentifier !== undefined && object.timerIdentifier !== null
        ? CollectionElementType.fromPartial(object.timerIdentifier)
        : undefined;
    return message;
  },
};

function createBaseKeyMapping_ComputerKeyboard(): KeyMapping_ComputerKeyboard {
  return { keyEquivalent: '', keyEquivalentModifierFlags: [] };
}

export const KeyMapping_ComputerKeyboard = {
  encode(
    message: KeyMapping_ComputerKeyboard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.keyEquivalent !== '') {
      writer.uint32(10).string(message.keyEquivalent);
    }
    writer.uint32(18).fork();
    for (const v of message.keyEquivalentModifierFlags) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): KeyMapping_ComputerKeyboard {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyMapping_ComputerKeyboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.keyEquivalent = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.keyEquivalentModifierFlags.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.keyEquivalentModifierFlags.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyMapping_ComputerKeyboard {
    return {
      keyEquivalent: isSet(object.keyEquivalent)
        ? globalThis.String(object.keyEquivalent)
        : '',
      keyEquivalentModifierFlags: globalThis.Array.isArray(
        object?.keyEquivalentModifierFlags,
      )
        ? object.keyEquivalentModifierFlags.map((e: any) =>
            keyMapping_ComputerKeyboard_ModifierFlagsFromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: KeyMapping_ComputerKeyboard): unknown {
    const obj: any = {};
    if (message.keyEquivalent !== '') {
      obj.keyEquivalent = message.keyEquivalent;
    }
    if (message.keyEquivalentModifierFlags?.length) {
      obj.keyEquivalentModifierFlags = message.keyEquivalentModifierFlags.map(
        (e) => keyMapping_ComputerKeyboard_ModifierFlagsToJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyMapping_ComputerKeyboard>, I>>(
    base?: I,
  ): KeyMapping_ComputerKeyboard {
    return KeyMapping_ComputerKeyboard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyMapping_ComputerKeyboard>, I>>(
    object: I,
  ): KeyMapping_ComputerKeyboard {
    const message = createBaseKeyMapping_ComputerKeyboard();
    message.keyEquivalent = object.keyEquivalent ?? '';
    message.keyEquivalentModifierFlags =
      object.keyEquivalentModifierFlags?.map((e) => e) || [];
    return message;
  },
};

function createBaseKeyMapping_MIDIKeyboard(): KeyMapping_MIDIKeyboard {
  return { channel: 0, pitch: 0, velocity: 0 };
}

export const KeyMapping_MIDIKeyboard = {
  encode(
    message: KeyMapping_MIDIKeyboard,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).int32(message.channel);
    }
    if (message.pitch !== 0) {
      writer.uint32(16).int32(message.pitch);
    }
    if (message.velocity !== 0) {
      writer.uint32(24).int32(message.velocity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): KeyMapping_MIDIKeyboard {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyMapping_MIDIKeyboard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channel = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pitch = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.velocity = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyMapping_MIDIKeyboard {
    return {
      channel: isSet(object.channel) ? globalThis.Number(object.channel) : 0,
      pitch: isSet(object.pitch) ? globalThis.Number(object.pitch) : 0,
      velocity: isSet(object.velocity) ? globalThis.Number(object.velocity) : 0,
    };
  },

  toJSON(message: KeyMapping_MIDIKeyboard): unknown {
    const obj: any = {};
    if (message.channel !== 0) {
      obj.channel = Math.round(message.channel);
    }
    if (message.pitch !== 0) {
      obj.pitch = Math.round(message.pitch);
    }
    if (message.velocity !== 0) {
      obj.velocity = Math.round(message.velocity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyMapping_MIDIKeyboard>, I>>(
    base?: I,
  ): KeyMapping_MIDIKeyboard {
    return KeyMapping_MIDIKeyboard.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyMapping_MIDIKeyboard>, I>>(
    object: I,
  ): KeyMapping_MIDIKeyboard {
    const message = createBaseKeyMapping_MIDIKeyboard();
    message.channel = object.channel ?? 0;
    message.pitch = object.pitch ?? 0;
    message.velocity = object.velocity ?? 0;
    return message;
  },
};

function createBaseKeyMappingDocument(): KeyMappingDocument {
  return {
    applicationInfo: undefined,
    keymappings: [],
    macosKeymappings: [],
    windowsKeymappings: [],
  };
}

export const KeyMappingDocument = {
  encode(
    message: KeyMappingDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.keymappings) {
      KeyMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.macosKeymappings) {
      KeyMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.windowsKeymappings) {
      KeyMapping.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyMappingDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyMappingDocument();
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

          message.keymappings.push(KeyMapping.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.macosKeymappings.push(
            KeyMapping.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.windowsKeymappings.push(
            KeyMapping.decode(reader, reader.uint32()),
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

  fromJSON(object: any): KeyMappingDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      keymappings: globalThis.Array.isArray(object?.keymappings)
        ? object.keymappings.map((e: any) => KeyMapping.fromJSON(e))
        : [],
      macosKeymappings: globalThis.Array.isArray(object?.macosKeymappings)
        ? object.macosKeymappings.map((e: any) => KeyMapping.fromJSON(e))
        : [],
      windowsKeymappings: globalThis.Array.isArray(object?.windowsKeymappings)
        ? object.windowsKeymappings.map((e: any) => KeyMapping.fromJSON(e))
        : [],
    };
  },

  toJSON(message: KeyMappingDocument): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.keymappings?.length) {
      obj.keymappings = message.keymappings.map((e) => KeyMapping.toJSON(e));
    }
    if (message.macosKeymappings?.length) {
      obj.macosKeymappings = message.macosKeymappings.map((e) =>
        KeyMapping.toJSON(e),
      );
    }
    if (message.windowsKeymappings?.length) {
      obj.windowsKeymappings = message.windowsKeymappings.map((e) =>
        KeyMapping.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyMappingDocument>, I>>(
    base?: I,
  ): KeyMappingDocument {
    return KeyMappingDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyMappingDocument>, I>>(
    object: I,
  ): KeyMappingDocument {
    const message = createBaseKeyMappingDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.keymappings =
      object.keymappings?.map((e) => KeyMapping.fromPartial(e)) || [];
    message.macosKeymappings =
      object.macosKeymappings?.map((e) => KeyMapping.fromPartial(e)) || [];
    message.windowsKeymappings =
      object.windowsKeymappings?.map((e) => KeyMapping.fromPartial(e)) || [];
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
