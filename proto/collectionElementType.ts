/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface CollectionElementType {
  parameterUuid: UUID | undefined;
  parameterName: string;
  parentCollection: CollectionElementType | undefined;
}

function createBaseCollectionElementType(): CollectionElementType {
  return {
    parameterUuid: undefined,
    parameterName: '',
    parentCollection: undefined,
  };
}

export const CollectionElementType = {
  encode(
    message: CollectionElementType,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.parameterUuid !== undefined) {
      UUID.encode(message.parameterUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.parameterName !== '') {
      writer.uint32(18).string(message.parameterName);
    }
    if (message.parentCollection !== undefined) {
      CollectionElementType.encode(
        message.parentCollection,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CollectionElementType {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionElementType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parameterUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parameterName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parentCollection = CollectionElementType.decode(
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

  fromJSON(object: any): CollectionElementType {
    return {
      parameterUuid: isSet(object.parameterUuid)
        ? UUID.fromJSON(object.parameterUuid)
        : undefined,
      parameterName: isSet(object.parameterName)
        ? globalThis.String(object.parameterName)
        : '',
      parentCollection: isSet(object.parentCollection)
        ? CollectionElementType.fromJSON(object.parentCollection)
        : undefined,
    };
  },

  toJSON(message: CollectionElementType): unknown {
    const obj: any = {};
    if (message.parameterUuid !== undefined) {
      obj.parameterUuid = UUID.toJSON(message.parameterUuid);
    }
    if (message.parameterName !== '') {
      obj.parameterName = message.parameterName;
    }
    if (message.parentCollection !== undefined) {
      obj.parentCollection = CollectionElementType.toJSON(
        message.parentCollection,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionElementType>, I>>(
    base?: I,
  ): CollectionElementType {
    return CollectionElementType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CollectionElementType>, I>>(
    object: I,
  ): CollectionElementType {
    const message = createBaseCollectionElementType();
    message.parameterUuid =
      object.parameterUuid !== undefined && object.parameterUuid !== null
        ? UUID.fromPartial(object.parameterUuid)
        : undefined;
    message.parameterName = object.parameterName ?? '';
    message.parentCollection =
      object.parentCollection !== undefined && object.parentCollection !== null
        ? CollectionElementType.fromPartial(object.parentCollection)
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
