/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Sync {
  local?: Sync_Local | undefined;
}

export interface Sync_Local {
  syncType: Sync_Local_SyncType;
  includeLibrary: boolean;
  includeMedia: boolean;
  includePlaylists: boolean;
  includeThemes: boolean;
  includeSupportFiles: boolean;
  replaceFiles: boolean;
}

export enum Sync_Local_SyncType {
  SYNC_TYPE_UP = 0,
  SYNC_TYPE_DOWN = 1,
  UNRECOGNIZED = -1,
}

export function sync_Local_SyncTypeFromJSON(object: any): Sync_Local_SyncType {
  switch (object) {
    case 0:
    case 'SYNC_TYPE_UP':
      return Sync_Local_SyncType.SYNC_TYPE_UP;
    case 1:
    case 'SYNC_TYPE_DOWN':
      return Sync_Local_SyncType.SYNC_TYPE_DOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Sync_Local_SyncType.UNRECOGNIZED;
  }
}

export function sync_Local_SyncTypeToJSON(object: Sync_Local_SyncType): string {
  switch (object) {
    case Sync_Local_SyncType.SYNC_TYPE_UP:
      return 'SYNC_TYPE_UP';
    case Sync_Local_SyncType.SYNC_TYPE_DOWN:
      return 'SYNC_TYPE_DOWN';
    case Sync_Local_SyncType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseSync(): Sync {
  return { local: undefined };
}

export const Sync = {
  encode(message: Sync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      Sync_Local.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sync {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = Sync_Local.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sync {
    return {
      local: isSet(object.local)
        ? Sync_Local.fromJSON(object.local)
        : undefined,
    };
  },

  toJSON(message: Sync): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = Sync_Local.toJSON(message.local);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sync>, I>>(base?: I): Sync {
    return Sync.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sync>, I>>(object: I): Sync {
    const message = createBaseSync();
    message.local =
      object.local !== undefined && object.local !== null
        ? Sync_Local.fromPartial(object.local)
        : undefined;
    return message;
  },
};

function createBaseSync_Local(): Sync_Local {
  return {
    syncType: 0,
    includeLibrary: false,
    includeMedia: false,
    includePlaylists: false,
    includeThemes: false,
    includeSupportFiles: false,
    replaceFiles: false,
  };
}

export const Sync_Local = {
  encode(
    message: Sync_Local,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.syncType !== 0) {
      writer.uint32(8).int32(message.syncType);
    }
    if (message.includeLibrary !== false) {
      writer.uint32(16).bool(message.includeLibrary);
    }
    if (message.includeMedia !== false) {
      writer.uint32(24).bool(message.includeMedia);
    }
    if (message.includePlaylists !== false) {
      writer.uint32(32).bool(message.includePlaylists);
    }
    if (message.includeThemes !== false) {
      writer.uint32(40).bool(message.includeThemes);
    }
    if (message.includeSupportFiles !== false) {
      writer.uint32(48).bool(message.includeSupportFiles);
    }
    if (message.replaceFiles !== false) {
      writer.uint32(56).bool(message.replaceFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sync_Local {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSync_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.syncType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.includeLibrary = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.includeMedia = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.includePlaylists = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.includeThemes = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.includeSupportFiles = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.replaceFiles = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sync_Local {
    return {
      syncType: isSet(object.syncType)
        ? sync_Local_SyncTypeFromJSON(object.syncType)
        : 0,
      includeLibrary: isSet(object.includeLibrary)
        ? globalThis.Boolean(object.includeLibrary)
        : false,
      includeMedia: isSet(object.includeMedia)
        ? globalThis.Boolean(object.includeMedia)
        : false,
      includePlaylists: isSet(object.includePlaylists)
        ? globalThis.Boolean(object.includePlaylists)
        : false,
      includeThemes: isSet(object.includeThemes)
        ? globalThis.Boolean(object.includeThemes)
        : false,
      includeSupportFiles: isSet(object.includeSupportFiles)
        ? globalThis.Boolean(object.includeSupportFiles)
        : false,
      replaceFiles: isSet(object.replaceFiles)
        ? globalThis.Boolean(object.replaceFiles)
        : false,
    };
  },

  toJSON(message: Sync_Local): unknown {
    const obj: any = {};
    if (message.syncType !== 0) {
      obj.syncType = sync_Local_SyncTypeToJSON(message.syncType);
    }
    if (message.includeLibrary !== false) {
      obj.includeLibrary = message.includeLibrary;
    }
    if (message.includeMedia !== false) {
      obj.includeMedia = message.includeMedia;
    }
    if (message.includePlaylists !== false) {
      obj.includePlaylists = message.includePlaylists;
    }
    if (message.includeThemes !== false) {
      obj.includeThemes = message.includeThemes;
    }
    if (message.includeSupportFiles !== false) {
      obj.includeSupportFiles = message.includeSupportFiles;
    }
    if (message.replaceFiles !== false) {
      obj.replaceFiles = message.replaceFiles;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sync_Local>, I>>(base?: I): Sync_Local {
    return Sync_Local.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sync_Local>, I>>(
    object: I,
  ): Sync_Local {
    const message = createBaseSync_Local();
    message.syncType = object.syncType ?? 0;
    message.includeLibrary = object.includeLibrary ?? false;
    message.includeMedia = object.includeMedia ?? false;
    message.includePlaylists = object.includePlaylists ?? false;
    message.includeThemes = object.includeThemes ?? false;
    message.includeSupportFiles = object.includeSupportFiles ?? false;
    message.replaceFiles = object.replaceFiles ?? false;
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
