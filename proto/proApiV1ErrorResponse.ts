/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface APIV1ErrorResponse {
  error: APIV1ErrorResponse_APIV1ErrorType;
}

export enum APIV1ErrorResponse_APIV1ErrorType {
  NOT_FOUND = 0,
  BAD_REQUEST = 1,
  INTERNAL_ERROR = 2,
  UNAUTHORIZED = 3,
  UNRECOGNIZED = -1,
}

export function aPIV1ErrorResponse_APIV1ErrorTypeFromJSON(
  object: any,
): APIV1ErrorResponse_APIV1ErrorType {
  switch (object) {
    case 0:
    case 'NOT_FOUND':
      return APIV1ErrorResponse_APIV1ErrorType.NOT_FOUND;
    case 1:
    case 'BAD_REQUEST':
      return APIV1ErrorResponse_APIV1ErrorType.BAD_REQUEST;
    case 2:
    case 'INTERNAL_ERROR':
      return APIV1ErrorResponse_APIV1ErrorType.INTERNAL_ERROR;
    case 3:
    case 'UNAUTHORIZED':
      return APIV1ErrorResponse_APIV1ErrorType.UNAUTHORIZED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1ErrorResponse_APIV1ErrorType.UNRECOGNIZED;
  }
}

export function aPIV1ErrorResponse_APIV1ErrorTypeToJSON(
  object: APIV1ErrorResponse_APIV1ErrorType,
): string {
  switch (object) {
    case APIV1ErrorResponse_APIV1ErrorType.NOT_FOUND:
      return 'NOT_FOUND';
    case APIV1ErrorResponse_APIV1ErrorType.BAD_REQUEST:
      return 'BAD_REQUEST';
    case APIV1ErrorResponse_APIV1ErrorType.INTERNAL_ERROR:
      return 'INTERNAL_ERROR';
    case APIV1ErrorResponse_APIV1ErrorType.UNAUTHORIZED:
      return 'UNAUTHORIZED';
    case APIV1ErrorResponse_APIV1ErrorType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseAPIV1ErrorResponse(): APIV1ErrorResponse {
  return { error: 0 };
}

export const APIV1ErrorResponse = {
  encode(
    message: APIV1ErrorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ErrorResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.error = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ErrorResponse {
    return {
      error: isSet(object.error)
        ? aPIV1ErrorResponse_APIV1ErrorTypeFromJSON(object.error)
        : 0,
    };
  },

  toJSON(message: APIV1ErrorResponse): unknown {
    const obj: any = {};
    if (message.error !== 0) {
      obj.error = aPIV1ErrorResponse_APIV1ErrorTypeToJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ErrorResponse>, I>>(
    base?: I,
  ): APIV1ErrorResponse {
    return APIV1ErrorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ErrorResponse>, I>>(
    object: I,
  ): APIV1ErrorResponse {
    const message = createBaseAPIV1ErrorResponse();
    message.error = object.error ?? 0;
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
