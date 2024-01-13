/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Update {
  downgrade?: Update_Downgrade | undefined;
}

export interface Update_Downgrade {
  fromVersionType: Update_Downgrade_FromVersionType;
}

export enum Update_Downgrade_FromVersionType {
  FROM_VERSION_TYPE_UNKNOWN = 0,
  FROM_VERSION_TYPE_BETA = 1,
  FROM_VERSION_TYPE_RELEASE = 2,
  UNRECOGNIZED = -1,
}

export function update_Downgrade_FromVersionTypeFromJSON(
  object: any,
): Update_Downgrade_FromVersionType {
  switch (object) {
    case 0:
    case 'FROM_VERSION_TYPE_UNKNOWN':
      return Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_UNKNOWN;
    case 1:
    case 'FROM_VERSION_TYPE_BETA':
      return Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_BETA;
    case 2:
    case 'FROM_VERSION_TYPE_RELEASE':
      return Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_RELEASE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Update_Downgrade_FromVersionType.UNRECOGNIZED;
  }
}

export function update_Downgrade_FromVersionTypeToJSON(
  object: Update_Downgrade_FromVersionType,
): string {
  switch (object) {
    case Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_UNKNOWN:
      return 'FROM_VERSION_TYPE_UNKNOWN';
    case Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_BETA:
      return 'FROM_VERSION_TYPE_BETA';
    case Update_Downgrade_FromVersionType.FROM_VERSION_TYPE_RELEASE:
      return 'FROM_VERSION_TYPE_RELEASE';
    case Update_Downgrade_FromVersionType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseUpdate(): Update {
  return { downgrade: undefined };
}

export const Update = {
  encode(
    message: Update,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.downgrade !== undefined) {
      Update_Downgrade.encode(
        message.downgrade,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Update {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.downgrade = Update_Downgrade.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Update {
    return {
      downgrade: isSet(object.downgrade)
        ? Update_Downgrade.fromJSON(object.downgrade)
        : undefined,
    };
  },

  toJSON(message: Update): unknown {
    const obj: any = {};
    if (message.downgrade !== undefined) {
      obj.downgrade = Update_Downgrade.toJSON(message.downgrade);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Update>, I>>(base?: I): Update {
    return Update.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Update>, I>>(object: I): Update {
    const message = createBaseUpdate();
    message.downgrade =
      object.downgrade !== undefined && object.downgrade !== null
        ? Update_Downgrade.fromPartial(object.downgrade)
        : undefined;
    return message;
  },
};

function createBaseUpdate_Downgrade(): Update_Downgrade {
  return { fromVersionType: 0 };
}

export const Update_Downgrade = {
  encode(
    message: Update_Downgrade,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fromVersionType !== 0) {
      writer.uint32(8).int32(message.fromVersionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Update_Downgrade {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdate_Downgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fromVersionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Update_Downgrade {
    return {
      fromVersionType: isSet(object.fromVersionType)
        ? update_Downgrade_FromVersionTypeFromJSON(object.fromVersionType)
        : 0,
    };
  },

  toJSON(message: Update_Downgrade): unknown {
    const obj: any = {};
    if (message.fromVersionType !== 0) {
      obj.fromVersionType = update_Downgrade_FromVersionTypeToJSON(
        message.fromVersionType,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Update_Downgrade>, I>>(
    base?: I,
  ): Update_Downgrade {
    return Update_Downgrade.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Update_Downgrade>, I>>(
    object: I,
  ): Update_Downgrade {
    const message = createBaseUpdate_Downgrade();
    message.fromVersionType = object.fromVersionType ?? 0;
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
