/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1MediaPlaylistItem {
  id: APIV1Identifier | undefined;
  type: APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType;
  artist: string;
  duration: number;
}

export enum APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType {
  audio = 0,
  image = 1,
  video = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeFromJSON(
  object: any,
): APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType {
  switch (object) {
    case 0:
    case 'audio':
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.audio;
    case 1:
    case 'image':
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.image;
    case 2:
    case 'video':
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.video;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.UNRECOGNIZED;
  }
}

export function aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeToJSON(
  object: APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType,
): string {
  switch (object) {
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.audio:
      return 'audio';
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.image:
      return 'image';
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.video:
      return 'video';
    case APIV1MediaPlaylistItem_APIV1MediaPlaylistItemType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseAPIV1MediaPlaylistItem(): APIV1MediaPlaylistItem {
  return { id: undefined, type: 0, artist: '', duration: 0 };
}

export const APIV1MediaPlaylistItem = {
  encode(
    message: APIV1MediaPlaylistItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.artist !== '') {
      writer.uint32(26).string(message.artist);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint32(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaPlaylistItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaPlaylistItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.artist = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.duration = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaPlaylistItem {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type)
        ? aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeFromJSON(object.type)
        : 0,
      artist: isSet(object.artist) ? globalThis.String(object.artist) : '',
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
    };
  },

  toJSON(message: APIV1MediaPlaylistItem): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.type !== 0) {
      obj.type = aPIV1MediaPlaylistItem_APIV1MediaPlaylistItemTypeToJSON(
        message.type,
      );
    }
    if (message.artist !== '') {
      obj.artist = message.artist;
    }
    if (message.duration !== 0) {
      obj.duration = Math.round(message.duration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaPlaylistItem>, I>>(
    base?: I,
  ): APIV1MediaPlaylistItem {
    return APIV1MediaPlaylistItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaPlaylistItem>, I>>(
    object: I,
  ): APIV1MediaPlaylistItem {
    const message = createBaseAPIV1MediaPlaylistItem();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.type = object.type ?? 0;
    message.artist = object.artist ?? '';
    message.duration = object.duration ?? 0;
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
