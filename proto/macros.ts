/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action } from './action';
import { ApplicationInfo, Color, UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface MacrosDocument {
  applicationInfo: ApplicationInfo | undefined;
  macros: MacrosDocument_Macro[];
}

export interface MacrosDocument_Macro {
  uuid: UUID | undefined;
  name: string;
  color: Color | undefined;
  actions: Action[];
  triggerOnStartup: boolean;
}

function createBaseMacrosDocument(): MacrosDocument {
  return { applicationInfo: undefined, macros: [] };
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

          message.macros.push(
            MacrosDocument_Macro.decode(reader, reader.uint32()),
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

  fromJSON(object: any): MacrosDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      macros: Array.isArray(object?.macros)
        ? object.macros.map((e: any) => MacrosDocument_Macro.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MacrosDocument): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    if (message.macros) {
      obj.macros = message.macros.map((e) =>
        e ? MacrosDocument_Macro.toJSON(e) : undefined,
      );
    } else {
      obj.macros = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument>, I>>(
    base?: I,
  ): MacrosDocument {
    return MacrosDocument.fromPartial(base ?? {});
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
    if (message.triggerOnStartup === true) {
      writer.uint32(40).bool(message.triggerOnStartup);
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

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.triggerOnStartup = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MacrosDocument_Macro {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
      triggerOnStartup: isSet(object.triggerOnStartup)
        ? Boolean(object.triggerOnStartup)
        : false,
    };
  },

  toJSON(message: MacrosDocument_Macro): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    message.triggerOnStartup !== undefined &&
      (obj.triggerOnStartup = message.triggerOnStartup);
    return obj;
  },

  create<I extends Exact<DeepPartial<MacrosDocument_Macro>, I>>(
    base?: I,
  ): MacrosDocument_Macro {
    return MacrosDocument_Macro.fromPartial(base ?? {});
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
