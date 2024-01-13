/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Timecode {
  startup?: Timecode_Startup | undefined;
  activate?: Timecode_Activate | undefined;
}

export interface Timecode_Startup {
  isInputConfigured: boolean;
  isEnabled: boolean;
  isPlaylistSelected: boolean;
}

export interface Timecode_Activate {
  playlistItemCount: number;
  cueCount: number;
  isStartup: boolean;
}

function createBaseTimecode(): Timecode {
  return { startup: undefined, activate: undefined };
}

export const Timecode = {
  encode(
    message: Timecode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startup !== undefined) {
      Timecode_Startup.encode(
        message.startup,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.activate !== undefined) {
      Timecode_Activate.encode(
        message.activate,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timecode {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimecode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.startup = Timecode_Startup.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activate = Timecode_Activate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timecode {
    return {
      startup: isSet(object.startup)
        ? Timecode_Startup.fromJSON(object.startup)
        : undefined,
      activate: isSet(object.activate)
        ? Timecode_Activate.fromJSON(object.activate)
        : undefined,
    };
  },

  toJSON(message: Timecode): unknown {
    const obj: any = {};
    if (message.startup !== undefined) {
      obj.startup = Timecode_Startup.toJSON(message.startup);
    }
    if (message.activate !== undefined) {
      obj.activate = Timecode_Activate.toJSON(message.activate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timecode>, I>>(base?: I): Timecode {
    return Timecode.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timecode>, I>>(object: I): Timecode {
    const message = createBaseTimecode();
    message.startup =
      object.startup !== undefined && object.startup !== null
        ? Timecode_Startup.fromPartial(object.startup)
        : undefined;
    message.activate =
      object.activate !== undefined && object.activate !== null
        ? Timecode_Activate.fromPartial(object.activate)
        : undefined;
    return message;
  },
};

function createBaseTimecode_Startup(): Timecode_Startup {
  return {
    isInputConfigured: false,
    isEnabled: false,
    isPlaylistSelected: false,
  };
}

export const Timecode_Startup = {
  encode(
    message: Timecode_Startup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isInputConfigured === true) {
      writer.uint32(8).bool(message.isInputConfigured);
    }
    if (message.isEnabled === true) {
      writer.uint32(16).bool(message.isEnabled);
    }
    if (message.isPlaylistSelected === true) {
      writer.uint32(24).bool(message.isPlaylistSelected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timecode_Startup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimecode_Startup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isInputConfigured = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isPlaylistSelected = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timecode_Startup {
    return {
      isInputConfigured: isSet(object.isInputConfigured)
        ? globalThis.Boolean(object.isInputConfigured)
        : false,
      isEnabled: isSet(object.isEnabled)
        ? globalThis.Boolean(object.isEnabled)
        : false,
      isPlaylistSelected: isSet(object.isPlaylistSelected)
        ? globalThis.Boolean(object.isPlaylistSelected)
        : false,
    };
  },

  toJSON(message: Timecode_Startup): unknown {
    const obj: any = {};
    if (message.isInputConfigured === true) {
      obj.isInputConfigured = message.isInputConfigured;
    }
    if (message.isEnabled === true) {
      obj.isEnabled = message.isEnabled;
    }
    if (message.isPlaylistSelected === true) {
      obj.isPlaylistSelected = message.isPlaylistSelected;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timecode_Startup>, I>>(
    base?: I,
  ): Timecode_Startup {
    return Timecode_Startup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timecode_Startup>, I>>(
    object: I,
  ): Timecode_Startup {
    const message = createBaseTimecode_Startup();
    message.isInputConfigured = object.isInputConfigured ?? false;
    message.isEnabled = object.isEnabled ?? false;
    message.isPlaylistSelected = object.isPlaylistSelected ?? false;
    return message;
  },
};

function createBaseTimecode_Activate(): Timecode_Activate {
  return { playlistItemCount: 0, cueCount: 0, isStartup: false };
}

export const Timecode_Activate = {
  encode(
    message: Timecode_Activate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlistItemCount !== 0) {
      writer.uint32(8).int32(message.playlistItemCount);
    }
    if (message.cueCount !== 0) {
      writer.uint32(16).int32(message.cueCount);
    }
    if (message.isStartup === true) {
      writer.uint32(24).bool(message.isStartup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timecode_Activate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimecode_Activate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playlistItemCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cueCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isStartup = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Timecode_Activate {
    return {
      playlistItemCount: isSet(object.playlistItemCount)
        ? globalThis.Number(object.playlistItemCount)
        : 0,
      cueCount: isSet(object.cueCount) ? globalThis.Number(object.cueCount) : 0,
      isStartup: isSet(object.isStartup)
        ? globalThis.Boolean(object.isStartup)
        : false,
    };
  },

  toJSON(message: Timecode_Activate): unknown {
    const obj: any = {};
    if (message.playlistItemCount !== 0) {
      obj.playlistItemCount = Math.round(message.playlistItemCount);
    }
    if (message.cueCount !== 0) {
      obj.cueCount = Math.round(message.cueCount);
    }
    if (message.isStartup === true) {
      obj.isStartup = message.isStartup;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Timecode_Activate>, I>>(
    base?: I,
  ): Timecode_Activate {
    return Timecode_Activate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Timecode_Activate>, I>>(
    object: I,
  ): Timecode_Activate {
    const message = createBaseTimecode_Activate();
    message.playlistItemCount = object.playlistItemCount ?? 0;
    message.cueCount = object.cueCount ?? 0;
    message.isStartup = object.isStartup ?? false;
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
