/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface MultiTracks {}

export interface MultiTracks_Account {
  chartPro: MultiTracks_Account_Status;
  propresenterAddon: MultiTracks_Account_Status;
}

export enum MultiTracks_Account_Status {
  STATUS_DISABLED = 0,
  STATUS_CANCELLED = 1,
  STATUS_ACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function multiTracks_Account_StatusFromJSON(
  object: any,
): MultiTracks_Account_Status {
  switch (object) {
    case 0:
    case 'STATUS_DISABLED':
      return MultiTracks_Account_Status.STATUS_DISABLED;
    case 1:
    case 'STATUS_CANCELLED':
      return MultiTracks_Account_Status.STATUS_CANCELLED;
    case 2:
    case 'STATUS_ACTIVE':
      return MultiTracks_Account_Status.STATUS_ACTIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MultiTracks_Account_Status.UNRECOGNIZED;
  }
}

export function multiTracks_Account_StatusToJSON(
  object: MultiTracks_Account_Status,
): string {
  switch (object) {
    case MultiTracks_Account_Status.STATUS_DISABLED:
      return 'STATUS_DISABLED';
    case MultiTracks_Account_Status.STATUS_CANCELLED:
      return 'STATUS_CANCELLED';
    case MultiTracks_Account_Status.STATUS_ACTIVE:
      return 'STATUS_ACTIVE';
    case MultiTracks_Account_Status.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface MultiTracks_Startup {
  account: MultiTracks_Account | undefined;
}

export interface MultiTracks_Import {
  account: MultiTracks_Account | undefined;
  chartsAutomation: boolean;
  lines: number;
}

function createBaseMultiTracks(): MultiTracks {
  return {};
}

export const MultiTracks = {
  encode(_: MultiTracks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiTracks {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiTracks();
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

  fromJSON(_: any): MultiTracks {
    return {};
  },

  toJSON(_: MultiTracks): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiTracks>, I>>(base?: I): MultiTracks {
    return MultiTracks.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiTracks>, I>>(_: I): MultiTracks {
    const message = createBaseMultiTracks();
    return message;
  },
};

function createBaseMultiTracks_Account(): MultiTracks_Account {
  return { chartPro: 0, propresenterAddon: 0 };
}

export const MultiTracks_Account = {
  encode(
    message: MultiTracks_Account,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chartPro !== 0) {
      writer.uint32(8).int32(message.chartPro);
    }
    if (message.propresenterAddon !== 0) {
      writer.uint32(16).int32(message.propresenterAddon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiTracks_Account {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiTracks_Account();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.chartPro = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.propresenterAddon = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiTracks_Account {
    return {
      chartPro: isSet(object.chartPro)
        ? multiTracks_Account_StatusFromJSON(object.chartPro)
        : 0,
      propresenterAddon: isSet(object.propresenterAddon)
        ? multiTracks_Account_StatusFromJSON(object.propresenterAddon)
        : 0,
    };
  },

  toJSON(message: MultiTracks_Account): unknown {
    const obj: any = {};
    if (message.chartPro !== 0) {
      obj.chartPro = multiTracks_Account_StatusToJSON(message.chartPro);
    }
    if (message.propresenterAddon !== 0) {
      obj.propresenterAddon = multiTracks_Account_StatusToJSON(
        message.propresenterAddon,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiTracks_Account>, I>>(
    base?: I,
  ): MultiTracks_Account {
    return MultiTracks_Account.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiTracks_Account>, I>>(
    object: I,
  ): MultiTracks_Account {
    const message = createBaseMultiTracks_Account();
    message.chartPro = object.chartPro ?? 0;
    message.propresenterAddon = object.propresenterAddon ?? 0;
    return message;
  },
};

function createBaseMultiTracks_Startup(): MultiTracks_Startup {
  return { account: undefined };
}

export const MultiTracks_Startup = {
  encode(
    message: MultiTracks_Startup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== undefined) {
      MultiTracks_Account.encode(
        message.account,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiTracks_Startup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiTracks_Startup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = MultiTracks_Account.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiTracks_Startup {
    return {
      account: isSet(object.account)
        ? MultiTracks_Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: MultiTracks_Startup): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = MultiTracks_Account.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiTracks_Startup>, I>>(
    base?: I,
  ): MultiTracks_Startup {
    return MultiTracks_Startup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiTracks_Startup>, I>>(
    object: I,
  ): MultiTracks_Startup {
    const message = createBaseMultiTracks_Startup();
    message.account =
      object.account !== undefined && object.account !== null
        ? MultiTracks_Account.fromPartial(object.account)
        : undefined;
    return message;
  },
};

function createBaseMultiTracks_Import(): MultiTracks_Import {
  return { account: undefined, chartsAutomation: false, lines: 0 };
}

export const MultiTracks_Import = {
  encode(
    message: MultiTracks_Import,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== undefined) {
      MultiTracks_Account.encode(
        message.account,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.chartsAutomation === true) {
      writer.uint32(16).bool(message.chartsAutomation);
    }
    if (message.lines !== 0) {
      writer.uint32(24).int32(message.lines);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiTracks_Import {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiTracks_Import();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = MultiTracks_Account.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.chartsAutomation = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lines = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MultiTracks_Import {
    return {
      account: isSet(object.account)
        ? MultiTracks_Account.fromJSON(object.account)
        : undefined,
      chartsAutomation: isSet(object.chartsAutomation)
        ? globalThis.Boolean(object.chartsAutomation)
        : false,
      lines: isSet(object.lines) ? globalThis.Number(object.lines) : 0,
    };
  },

  toJSON(message: MultiTracks_Import): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = MultiTracks_Account.toJSON(message.account);
    }
    if (message.chartsAutomation === true) {
      obj.chartsAutomation = message.chartsAutomation;
    }
    if (message.lines !== 0) {
      obj.lines = Math.round(message.lines);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MultiTracks_Import>, I>>(
    base?: I,
  ): MultiTracks_Import {
    return MultiTracks_Import.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MultiTracks_Import>, I>>(
    object: I,
  ): MultiTracks_Import {
    const message = createBaseMultiTracks_Import();
    message.account =
      object.account !== undefined && object.account !== null
        ? MultiTracks_Account.fromPartial(object.account)
        : undefined;
    message.chartsAutomation = object.chartsAutomation ?? false;
    message.lines = object.lines ?? 0;
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
