/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action_Label } from './action';
import { ApplicationInfo } from './applicationInfo';
import { Playlist, Playlist_Tag } from './playlist';

export const protobufPackage = 'rv.data';

export interface PlaylistDocument {
  applicationInfo: ApplicationInfo | undefined;
  type: PlaylistDocument_Type;
  rootNode: Playlist | undefined;
  tags: Playlist_Tag[];
  liveVideoPlaylist: Playlist | undefined;
  downloadsPlaylist: Playlist | undefined;
}

export enum PlaylistDocument_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PRESENTATION = 1,
  TYPE_MEDIA = 2,
  TYPE_AUDIO = 3,
  UNRECOGNIZED = -1,
}

export function playlistDocument_TypeFromJSON(
  object: any,
): PlaylistDocument_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return PlaylistDocument_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_PRESENTATION':
      return PlaylistDocument_Type.TYPE_PRESENTATION;
    case 2:
    case 'TYPE_MEDIA':
      return PlaylistDocument_Type.TYPE_MEDIA;
    case 3:
    case 'TYPE_AUDIO':
      return PlaylistDocument_Type.TYPE_AUDIO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PlaylistDocument_Type.UNRECOGNIZED;
  }
}

export function playlistDocument_TypeToJSON(
  object: PlaylistDocument_Type,
): string {
  switch (object) {
    case PlaylistDocument_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case PlaylistDocument_Type.TYPE_PRESENTATION:
      return 'TYPE_PRESENTATION';
    case PlaylistDocument_Type.TYPE_MEDIA:
      return 'TYPE_MEDIA';
    case PlaylistDocument_Type.TYPE_AUDIO:
      return 'TYPE_AUDIO';
    case PlaylistDocument_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface SettingsDocument {
  labels: Action_Label[];
}

function createBasePlaylistDocument(): PlaylistDocument {
  return {
    applicationInfo: undefined,
    type: 0,
    rootNode: undefined,
    tags: [],
    liveVideoPlaylist: undefined,
    downloadsPlaylist: undefined,
  };
}

export const PlaylistDocument = {
  encode(
    message: PlaylistDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.rootNode !== undefined) {
      Playlist.encode(message.rootNode, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tags) {
      Playlist_Tag.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.liveVideoPlaylist !== undefined) {
      Playlist.encode(
        message.liveVideoPlaylist,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.downloadsPlaylist !== undefined) {
      Playlist.encode(
        message.downloadsPlaylist,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistDocument();
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
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rootNode = Playlist.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tags.push(Playlist_Tag.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.liveVideoPlaylist = Playlist.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.downloadsPlaylist = Playlist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      type: isSet(object.type) ? playlistDocument_TypeFromJSON(object.type) : 0,
      rootNode: isSet(object.rootNode)
        ? Playlist.fromJSON(object.rootNode)
        : undefined,
      tags: globalThis.Array.isArray(object?.tags)
        ? object.tags.map((e: any) => Playlist_Tag.fromJSON(e))
        : [],
      liveVideoPlaylist: isSet(object.liveVideoPlaylist)
        ? Playlist.fromJSON(object.liveVideoPlaylist)
        : undefined,
      downloadsPlaylist: isSet(object.downloadsPlaylist)
        ? Playlist.fromJSON(object.downloadsPlaylist)
        : undefined,
    };
  },

  toJSON(message: PlaylistDocument): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.type !== 0) {
      obj.type = playlistDocument_TypeToJSON(message.type);
    }
    if (message.rootNode !== undefined) {
      obj.rootNode = Playlist.toJSON(message.rootNode);
    }
    if (message.tags?.length) {
      obj.tags = message.tags.map((e) => Playlist_Tag.toJSON(e));
    }
    if (message.liveVideoPlaylist !== undefined) {
      obj.liveVideoPlaylist = Playlist.toJSON(message.liveVideoPlaylist);
    }
    if (message.downloadsPlaylist !== undefined) {
      obj.downloadsPlaylist = Playlist.toJSON(message.downloadsPlaylist);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistDocument>, I>>(
    base?: I,
  ): PlaylistDocument {
    return PlaylistDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaylistDocument>, I>>(
    object: I,
  ): PlaylistDocument {
    const message = createBasePlaylistDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.type = object.type ?? 0;
    message.rootNode =
      object.rootNode !== undefined && object.rootNode !== null
        ? Playlist.fromPartial(object.rootNode)
        : undefined;
    message.tags = object.tags?.map((e) => Playlist_Tag.fromPartial(e)) || [];
    message.liveVideoPlaylist =
      object.liveVideoPlaylist !== undefined &&
      object.liveVideoPlaylist !== null
        ? Playlist.fromPartial(object.liveVideoPlaylist)
        : undefined;
    message.downloadsPlaylist =
      object.downloadsPlaylist !== undefined &&
      object.downloadsPlaylist !== null
        ? Playlist.fromPartial(object.downloadsPlaylist)
        : undefined;
    return message;
  },
};

function createBaseSettingsDocument(): SettingsDocument {
  return { labels: [] };
}

export const SettingsDocument = {
  encode(
    message: SettingsDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.labels) {
      Action_Label.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SettingsDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettingsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.labels.push(Action_Label.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SettingsDocument {
    return {
      labels: globalThis.Array.isArray(object?.labels)
        ? object.labels.map((e: any) => Action_Label.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SettingsDocument): unknown {
    const obj: any = {};
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => Action_Label.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SettingsDocument>, I>>(
    base?: I,
  ): SettingsDocument {
    return SettingsDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SettingsDocument>, I>>(
    object: I,
  ): SettingsDocument {
    const message = createBaseSettingsDocument();
    message.labels =
      object.labels?.map((e) => Action_Label.fromPartial(e)) || [];
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
