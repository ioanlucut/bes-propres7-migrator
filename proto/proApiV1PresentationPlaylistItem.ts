/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface APIV1PlaylistPresentationItem {
  presentationUuid: string;
}

function createBaseAPIV1PlaylistPresentationItem(): APIV1PlaylistPresentationItem {
  return { presentationUuid: "" };
}

export const APIV1PlaylistPresentationItem = {
  encode(message: APIV1PlaylistPresentationItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.presentationUuid !== "") {
      writer.uint32(10).string(message.presentationUuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PlaylistPresentationItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistPresentationItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentationUuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistPresentationItem {
    return { presentationUuid: isSet(object.presentationUuid) ? globalThis.String(object.presentationUuid) : "" };
  },

  toJSON(message: APIV1PlaylistPresentationItem): unknown {
    const obj: any = {};
    if (message.presentationUuid !== "") {
      obj.presentationUuid = message.presentationUuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistPresentationItem>, I>>(base?: I): APIV1PlaylistPresentationItem {
    return APIV1PlaylistPresentationItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistPresentationItem>, I>>(
    object: I,
  ): APIV1PlaylistPresentationItem {
    const message = createBaseAPIV1PlaylistPresentationItem();
    message.presentationUuid = object.presentationUuid ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
