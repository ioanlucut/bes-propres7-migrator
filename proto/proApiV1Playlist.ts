/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { UInt32Value } from './google/protobuf/wrappers';
import { APIV1Color } from './proApiV1Color';
import {
  APIV1ContentType,
  aPIV1ContentTypeFromJSON,
  aPIV1ContentTypeToJSON,
} from './proApiV1ContentType';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1Playlist {
  id: APIV1Identifier | undefined;
  type: APIV1Playlist_APIV1PlaylistType;
  children: APIV1Playlist[];
}

export enum APIV1Playlist_APIV1PlaylistType {
  group = 0,
  playlist = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1Playlist_APIV1PlaylistTypeFromJSON(
  object: any,
): APIV1Playlist_APIV1PlaylistType {
  switch (object) {
    case 0:
    case 'group':
      return APIV1Playlist_APIV1PlaylistType.group;
    case 1:
    case 'playlist':
      return APIV1Playlist_APIV1PlaylistType.playlist;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1Playlist_APIV1PlaylistType.UNRECOGNIZED;
  }
}

export function aPIV1Playlist_APIV1PlaylistTypeToJSON(
  object: APIV1Playlist_APIV1PlaylistType,
): string {
  switch (object) {
    case APIV1Playlist_APIV1PlaylistType.group:
      return 'group';
    case APIV1Playlist_APIV1PlaylistType.playlist:
      return 'playlist';
    case APIV1Playlist_APIV1PlaylistType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1PlaylistAndItem {
  playlist: APIV1Identifier | undefined;
  item: APIV1Identifier | undefined;
}

export interface APIV1PlaylistItem {
  id: APIV1Identifier | undefined;
  type: APIV1PlaylistItem_APIV1PlaylistItemType;
  isHidden: boolean;
  isPco: boolean;
  headerColor: APIV1Color | undefined;
  duration: number | undefined;
}

export enum APIV1PlaylistItem_APIV1PlaylistItemType {
  presentation = 0,
  placeholder = 1,
  header = 2,
  media = 3,
  audio = 4,
  livevideo = 5,
  UNRECOGNIZED = -1,
}

export function aPIV1PlaylistItem_APIV1PlaylistItemTypeFromJSON(
  object: any,
): APIV1PlaylistItem_APIV1PlaylistItemType {
  switch (object) {
    case 0:
    case 'presentation':
      return APIV1PlaylistItem_APIV1PlaylistItemType.presentation;
    case 1:
    case 'placeholder':
      return APIV1PlaylistItem_APIV1PlaylistItemType.placeholder;
    case 2:
    case 'header':
      return APIV1PlaylistItem_APIV1PlaylistItemType.header;
    case 3:
    case 'media':
      return APIV1PlaylistItem_APIV1PlaylistItemType.media;
    case 4:
    case 'audio':
      return APIV1PlaylistItem_APIV1PlaylistItemType.audio;
    case 5:
    case 'livevideo':
      return APIV1PlaylistItem_APIV1PlaylistItemType.livevideo;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1PlaylistItem_APIV1PlaylistItemType.UNRECOGNIZED;
  }
}

export function aPIV1PlaylistItem_APIV1PlaylistItemTypeToJSON(
  object: APIV1PlaylistItem_APIV1PlaylistItemType,
): string {
  switch (object) {
    case APIV1PlaylistItem_APIV1PlaylistItemType.presentation:
      return 'presentation';
    case APIV1PlaylistItem_APIV1PlaylistItemType.placeholder:
      return 'placeholder';
    case APIV1PlaylistItem_APIV1PlaylistItemType.header:
      return 'header';
    case APIV1PlaylistItem_APIV1PlaylistItemType.media:
      return 'media';
    case APIV1PlaylistItem_APIV1PlaylistItemType.audio:
      return 'audio';
    case APIV1PlaylistItem_APIV1PlaylistItemType.livevideo:
      return 'livevideo';
    case APIV1PlaylistItem_APIV1PlaylistItemType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1PlaylistRequest {
  playlists?: APIV1PlaylistRequest_Playlists | undefined;
  createPlaylist?: APIV1PlaylistRequest_CreatePlaylist | undefined;
  getPlaylist?: APIV1PlaylistRequest_GetPlaylist | undefined;
  putPlaylist?: APIV1PlaylistRequest_PutPlaylist | undefined;
  postPlaylist?: APIV1PlaylistRequest_PostPlaylist | undefined;
  getActivePlaylist?: APIV1PlaylistRequest_GetActivePlaylist | undefined;
  focused?: APIV1PlaylistRequest_GetActivePlaylist | undefined;
  nextFocus?: APIV1PlaylistRequest_EmptyMessage | undefined;
  previousFocus?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activePresentationFocus?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activeAnnouncementFocus?: APIV1PlaylistRequest_EmptyMessage | undefined;
  focusedTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activePresentationTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activeAnnouncementTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  focusedNextTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  focusedPreviousTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activePresentationNextTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activeAnnouncementNextTrigger?: APIV1PlaylistRequest_EmptyMessage | undefined;
  activePresentationPreviousTrigger?:
    | APIV1PlaylistRequest_EmptyMessage
    | undefined;
  activeAnnouncementPreviousTrigger?:
    | APIV1PlaylistRequest_EmptyMessage
    | undefined;
  idFocus?: APIV1PlaylistRequest_IdMessage | undefined;
  idTrigger?: APIV1PlaylistRequest_IdMessage | undefined;
  idNextTrigger?: APIV1PlaylistRequest_IdMessage | undefined;
  idPreviousTrigger?: APIV1PlaylistRequest_IdMessage | undefined;
  focusedIndexTrigger?: APIV1PlaylistRequest_IndexMessage | undefined;
  activePresentationIndexTrigger?:
    | APIV1PlaylistRequest_IndexMessage
    | undefined;
  activeAnnouncementIndexTrigger?:
    | APIV1PlaylistRequest_IndexMessage
    | undefined;
  idUpdates?: APIV1PlaylistRequest_IdMessage | undefined;
  activePresentationThumbnail?: APIV1PlaylistRequest_Thumbnail | undefined;
  activeAnnouncementThumbnail?: APIV1PlaylistRequest_Thumbnail | undefined;
}

export interface APIV1PlaylistRequest_Playlists {}

export interface APIV1PlaylistRequest_CreatePlaylist {
  name: string;
  type: APIV1Playlist_APIV1PlaylistType;
}

export interface APIV1PlaylistRequest_GetActivePlaylist {}

export interface APIV1PlaylistRequest_GetPlaylist {
  id: string;
}

export interface APIV1PlaylistRequest_PutPlaylist {
  id: string;
  items: APIV1PlaylistItem[];
}

export interface APIV1PlaylistRequest_PostPlaylist {
  id: string;
  name: string;
  type: APIV1Playlist_APIV1PlaylistType;
}

export interface APIV1PlaylistRequest_Thumbnail {
  index: number;
  cueIndex: number;
  quality: number;
  contentType: APIV1ContentType;
}

export interface APIV1PlaylistRequest_EmptyMessage {}

export interface APIV1PlaylistRequest_IdMessage {
  id: string;
}

export interface APIV1PlaylistRequest_IndexMessage {
  index: number;
}

export interface APIV1PlaylistResponse {
  playlists?: APIV1PlaylistResponse_Playlists | undefined;
  createPlaylist?: APIV1PlaylistResponse_CreatePlaylist | undefined;
  getPlaylist?: APIV1PlaylistResponse_GetPlaylist | undefined;
  putPlaylist?: APIV1PlaylistResponse_PutPlaylist | undefined;
  postPlaylist?: APIV1PlaylistResponse_PostPlaylist | undefined;
  getActivePlaylist?: APIV1PlaylistResponse_GetActivePlaylist | undefined;
  focused?: APIV1PlaylistResponse_GetFocusedPlaylist | undefined;
  nextFocus?: APIV1PlaylistResponse_EmptyMessage | undefined;
  previousFocus?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activePresentationFocus?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activeAnnouncementFocus?: APIV1PlaylistResponse_EmptyMessage | undefined;
  focusedTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activePresentationTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activeAnnouncementTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  focusedNextTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  focusedPreviousTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activePresentationNextTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  activeAnnouncementNextTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  activePresentationPreviousTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  activeAnnouncementPreviousTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  idFocus?: APIV1PlaylistResponse_EmptyMessage | undefined;
  idTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  idNextTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  idPreviousTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  focusedIndexTrigger?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activePresentationIndexTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  activeAnnouncementIndexTrigger?:
    | APIV1PlaylistResponse_EmptyMessage
    | undefined;
  idUpdates?: APIV1PlaylistResponse_EmptyMessage | undefined;
  activePresentationThumbnail?: APIV1PlaylistResponse_Thumbnail | undefined;
  activeAnnouncementThumbnail?: APIV1PlaylistResponse_Thumbnail | undefined;
}

export interface APIV1PlaylistResponse_Playlists {
  playlists: APIV1Playlist[];
}

export interface APIV1PlaylistResponse_CreatePlaylist {
  playlist: APIV1Playlist | undefined;
}

export interface APIV1PlaylistResponse_GetActivePlaylist {
  presentation: APIV1PlaylistAndItem | undefined;
  announcements: APIV1PlaylistAndItem | undefined;
}

export interface APIV1PlaylistResponse_GetPlaylist {
  id: APIV1Identifier | undefined;
  items: APIV1PlaylistItem[];
}

export interface APIV1PlaylistResponse_PutPlaylist {}

export interface APIV1PlaylistResponse_PostPlaylist {
  playlist: APIV1Playlist | undefined;
}

export interface APIV1PlaylistResponse_GetFocusedPlaylist {
  playlist: APIV1PlaylistAndItem | undefined;
}

export interface APIV1PlaylistResponse_Thumbnail {
  data: Uint8Array;
  contentType: APIV1ContentType;
}

export interface APIV1PlaylistResponse_EmptyMessage {}

function createBaseAPIV1Playlist(): APIV1Playlist {
  return { id: undefined, type: 0, children: [] };
}

export const APIV1Playlist = {
  encode(
    message: APIV1Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    for (const v of message.children) {
      APIV1Playlist.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Playlist();
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

          message.children.push(APIV1Playlist.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Playlist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type)
        ? aPIV1Playlist_APIV1PlaylistTypeFromJSON(object.type)
        : 0,
      children: globalThis.Array.isArray(object?.children)
        ? object.children.map((e: any) => APIV1Playlist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1Playlist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.type !== 0) {
      obj.type = aPIV1Playlist_APIV1PlaylistTypeToJSON(message.type);
    }
    if (message.children?.length) {
      obj.children = message.children.map((e) => APIV1Playlist.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Playlist>, I>>(
    base?: I,
  ): APIV1Playlist {
    return APIV1Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Playlist>, I>>(
    object: I,
  ): APIV1Playlist {
    const message = createBaseAPIV1Playlist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.type = object.type ?? 0;
    message.children =
      object.children?.map((e) => APIV1Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PlaylistAndItem(): APIV1PlaylistAndItem {
  return { playlist: undefined, item: undefined };
}

export const APIV1PlaylistAndItem = {
  encode(
    message: APIV1PlaylistAndItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1Identifier.encode(
        message.playlist,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.item !== undefined) {
      APIV1Identifier.encode(message.item, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistAndItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistAndItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlist = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.item = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistAndItem {
    return {
      playlist: isSet(object.playlist)
        ? APIV1Identifier.fromJSON(object.playlist)
        : undefined,
      item: isSet(object.item)
        ? APIV1Identifier.fromJSON(object.item)
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistAndItem): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1Identifier.toJSON(message.playlist);
    }
    if (message.item !== undefined) {
      obj.item = APIV1Identifier.toJSON(message.item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistAndItem>, I>>(
    base?: I,
  ): APIV1PlaylistAndItem {
    return APIV1PlaylistAndItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistAndItem>, I>>(
    object: I,
  ): APIV1PlaylistAndItem {
    const message = createBaseAPIV1PlaylistAndItem();
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1Identifier.fromPartial(object.playlist)
        : undefined;
    message.item =
      object.item !== undefined && object.item !== null
        ? APIV1Identifier.fromPartial(object.item)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistItem(): APIV1PlaylistItem {
  return {
    id: undefined,
    type: 0,
    isHidden: false,
    isPco: false,
    headerColor: undefined,
    duration: undefined,
  };
}

export const APIV1PlaylistItem = {
  encode(
    message: APIV1PlaylistItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.isHidden === true) {
      writer.uint32(24).bool(message.isHidden);
    }
    if (message.isPco === true) {
      writer.uint32(32).bool(message.isPco);
    }
    if (message.headerColor !== undefined) {
      APIV1Color.encode(message.headerColor, writer.uint32(42).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      UInt32Value.encode(
        { value: message.duration! },
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1PlaylistItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistItem();
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
          if (tag !== 24) {
            break;
          }

          message.isHidden = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isPco = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.headerColor = APIV1Color.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.duration = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistItem {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      type: isSet(object.type)
        ? aPIV1PlaylistItem_APIV1PlaylistItemTypeFromJSON(object.type)
        : 0,
      isHidden: isSet(object.isHidden)
        ? globalThis.Boolean(object.isHidden)
        : false,
      isPco: isSet(object.isPco) ? globalThis.Boolean(object.isPco) : false,
      headerColor: isSet(object.headerColor)
        ? APIV1Color.fromJSON(object.headerColor)
        : undefined,
      duration: isSet(object.duration) ? Number(object.duration) : undefined,
    };
  },

  toJSON(message: APIV1PlaylistItem): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.type !== 0) {
      obj.type = aPIV1PlaylistItem_APIV1PlaylistItemTypeToJSON(message.type);
    }
    if (message.isHidden === true) {
      obj.isHidden = message.isHidden;
    }
    if (message.isPco === true) {
      obj.isPco = message.isPco;
    }
    if (message.headerColor !== undefined) {
      obj.headerColor = APIV1Color.toJSON(message.headerColor);
    }
    if (message.duration !== undefined) {
      obj.duration = message.duration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistItem>, I>>(
    base?: I,
  ): APIV1PlaylistItem {
    return APIV1PlaylistItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistItem>, I>>(
    object: I,
  ): APIV1PlaylistItem {
    const message = createBaseAPIV1PlaylistItem();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.type = object.type ?? 0;
    message.isHidden = object.isHidden ?? false;
    message.isPco = object.isPco ?? false;
    message.headerColor =
      object.headerColor !== undefined && object.headerColor !== null
        ? APIV1Color.fromPartial(object.headerColor)
        : undefined;
    message.duration = object.duration ?? undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistRequest(): APIV1PlaylistRequest {
  return {
    playlists: undefined,
    createPlaylist: undefined,
    getPlaylist: undefined,
    putPlaylist: undefined,
    postPlaylist: undefined,
    getActivePlaylist: undefined,
    focused: undefined,
    nextFocus: undefined,
    previousFocus: undefined,
    activePresentationFocus: undefined,
    activeAnnouncementFocus: undefined,
    focusedTrigger: undefined,
    activePresentationTrigger: undefined,
    activeAnnouncementTrigger: undefined,
    focusedNextTrigger: undefined,
    focusedPreviousTrigger: undefined,
    activePresentationNextTrigger: undefined,
    activeAnnouncementNextTrigger: undefined,
    activePresentationPreviousTrigger: undefined,
    activeAnnouncementPreviousTrigger: undefined,
    idFocus: undefined,
    idTrigger: undefined,
    idNextTrigger: undefined,
    idPreviousTrigger: undefined,
    focusedIndexTrigger: undefined,
    activePresentationIndexTrigger: undefined,
    activeAnnouncementIndexTrigger: undefined,
    idUpdates: undefined,
    activePresentationThumbnail: undefined,
    activeAnnouncementThumbnail: undefined,
  };
}

export const APIV1PlaylistRequest = {
  encode(
    message: APIV1PlaylistRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1PlaylistRequest_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createPlaylist !== undefined) {
      APIV1PlaylistRequest_CreatePlaylist.encode(
        message.createPlaylist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPlaylist !== undefined) {
      APIV1PlaylistRequest_GetPlaylist.encode(
        message.getPlaylist,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putPlaylist !== undefined) {
      APIV1PlaylistRequest_PutPlaylist.encode(
        message.putPlaylist,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.postPlaylist !== undefined) {
      APIV1PlaylistRequest_PostPlaylist.encode(
        message.postPlaylist,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getActivePlaylist !== undefined) {
      APIV1PlaylistRequest_GetActivePlaylist.encode(
        message.getActivePlaylist,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.focused !== undefined) {
      APIV1PlaylistRequest_GetActivePlaylist.encode(
        message.focused,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.nextFocus !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.nextFocus,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.previousFocus !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.previousFocus,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.activePresentationFocus !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activePresentationFocus,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementFocus !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activeAnnouncementFocus,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.focusedTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.focusedTrigger,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.activePresentationTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activePresentationTrigger,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activeAnnouncementTrigger,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.focusedNextTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.focusedNextTrigger,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.focusedPreviousTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.focusedPreviousTrigger,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.activePresentationNextTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activePresentationNextTrigger,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementNextTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activeAnnouncementNextTrigger,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.activePresentationPreviousTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activePresentationPreviousTrigger,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementPreviousTrigger !== undefined) {
      APIV1PlaylistRequest_EmptyMessage.encode(
        message.activeAnnouncementPreviousTrigger,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.idFocus !== undefined) {
      APIV1PlaylistRequest_IdMessage.encode(
        message.idFocus,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.idTrigger !== undefined) {
      APIV1PlaylistRequest_IdMessage.encode(
        message.idTrigger,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.idNextTrigger !== undefined) {
      APIV1PlaylistRequest_IdMessage.encode(
        message.idNextTrigger,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.idPreviousTrigger !== undefined) {
      APIV1PlaylistRequest_IdMessage.encode(
        message.idPreviousTrigger,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.focusedIndexTrigger !== undefined) {
      APIV1PlaylistRequest_IndexMessage.encode(
        message.focusedIndexTrigger,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.activePresentationIndexTrigger !== undefined) {
      APIV1PlaylistRequest_IndexMessage.encode(
        message.activePresentationIndexTrigger,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementIndexTrigger !== undefined) {
      APIV1PlaylistRequest_IndexMessage.encode(
        message.activeAnnouncementIndexTrigger,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.idUpdates !== undefined) {
      APIV1PlaylistRequest_IdMessage.encode(
        message.idUpdates,
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.activePresentationThumbnail !== undefined) {
      APIV1PlaylistRequest_Thumbnail.encode(
        message.activePresentationThumbnail,
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementThumbnail !== undefined) {
      APIV1PlaylistRequest_Thumbnail.encode(
        message.activeAnnouncementThumbnail,
        writer.uint32(242).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1PlaylistRequest_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createPlaylist = APIV1PlaylistRequest_CreatePlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getPlaylist = APIV1PlaylistRequest_GetPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putPlaylist = APIV1PlaylistRequest_PutPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postPlaylist = APIV1PlaylistRequest_PostPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getActivePlaylist =
            APIV1PlaylistRequest_GetActivePlaylist.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.focused = APIV1PlaylistRequest_GetActivePlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nextFocus = APIV1PlaylistRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.previousFocus = APIV1PlaylistRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.activePresentationFocus =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.activeAnnouncementFocus =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.focusedTrigger = APIV1PlaylistRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.activePresentationTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.activeAnnouncementTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.focusedNextTrigger = APIV1PlaylistRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.focusedPreviousTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.activePresentationNextTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.activeAnnouncementNextTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.activePresentationPreviousTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.activeAnnouncementPreviousTrigger =
            APIV1PlaylistRequest_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.idFocus = APIV1PlaylistRequest_IdMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.idTrigger = APIV1PlaylistRequest_IdMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.idNextTrigger = APIV1PlaylistRequest_IdMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.idPreviousTrigger = APIV1PlaylistRequest_IdMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.focusedIndexTrigger =
            APIV1PlaylistRequest_IndexMessage.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.activePresentationIndexTrigger =
            APIV1PlaylistRequest_IndexMessage.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.activeAnnouncementIndexTrigger =
            APIV1PlaylistRequest_IndexMessage.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.idUpdates = APIV1PlaylistRequest_IdMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.activePresentationThumbnail =
            APIV1PlaylistRequest_Thumbnail.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.activeAnnouncementThumbnail =
            APIV1PlaylistRequest_Thumbnail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest {
    return {
      playlists: isSet(object.playlists)
        ? APIV1PlaylistRequest_Playlists.fromJSON(object.playlists)
        : undefined,
      createPlaylist: isSet(object.createPlaylist)
        ? APIV1PlaylistRequest_CreatePlaylist.fromJSON(object.createPlaylist)
        : undefined,
      getPlaylist: isSet(object.getPlaylist)
        ? APIV1PlaylistRequest_GetPlaylist.fromJSON(object.getPlaylist)
        : undefined,
      putPlaylist: isSet(object.putPlaylist)
        ? APIV1PlaylistRequest_PutPlaylist.fromJSON(object.putPlaylist)
        : undefined,
      postPlaylist: isSet(object.postPlaylist)
        ? APIV1PlaylistRequest_PostPlaylist.fromJSON(object.postPlaylist)
        : undefined,
      getActivePlaylist: isSet(object.getActivePlaylist)
        ? APIV1PlaylistRequest_GetActivePlaylist.fromJSON(
            object.getActivePlaylist,
          )
        : undefined,
      focused: isSet(object.focused)
        ? APIV1PlaylistRequest_GetActivePlaylist.fromJSON(object.focused)
        : undefined,
      nextFocus: isSet(object.nextFocus)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(object.nextFocus)
        : undefined,
      previousFocus: isSet(object.previousFocus)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(object.previousFocus)
        : undefined,
      activePresentationFocus: isSet(object.activePresentationFocus)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activePresentationFocus,
          )
        : undefined,
      activeAnnouncementFocus: isSet(object.activeAnnouncementFocus)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activeAnnouncementFocus,
          )
        : undefined,
      focusedTrigger: isSet(object.focusedTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(object.focusedTrigger)
        : undefined,
      activePresentationTrigger: isSet(object.activePresentationTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activePresentationTrigger,
          )
        : undefined,
      activeAnnouncementTrigger: isSet(object.activeAnnouncementTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activeAnnouncementTrigger,
          )
        : undefined,
      focusedNextTrigger: isSet(object.focusedNextTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(object.focusedNextTrigger)
        : undefined,
      focusedPreviousTrigger: isSet(object.focusedPreviousTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.focusedPreviousTrigger,
          )
        : undefined,
      activePresentationNextTrigger: isSet(object.activePresentationNextTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activePresentationNextTrigger,
          )
        : undefined,
      activeAnnouncementNextTrigger: isSet(object.activeAnnouncementNextTrigger)
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activeAnnouncementNextTrigger,
          )
        : undefined,
      activePresentationPreviousTrigger: isSet(
        object.activePresentationPreviousTrigger,
      )
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activePresentationPreviousTrigger,
          )
        : undefined,
      activeAnnouncementPreviousTrigger: isSet(
        object.activeAnnouncementPreviousTrigger,
      )
        ? APIV1PlaylistRequest_EmptyMessage.fromJSON(
            object.activeAnnouncementPreviousTrigger,
          )
        : undefined,
      idFocus: isSet(object.idFocus)
        ? APIV1PlaylistRequest_IdMessage.fromJSON(object.idFocus)
        : undefined,
      idTrigger: isSet(object.idTrigger)
        ? APIV1PlaylistRequest_IdMessage.fromJSON(object.idTrigger)
        : undefined,
      idNextTrigger: isSet(object.idNextTrigger)
        ? APIV1PlaylistRequest_IdMessage.fromJSON(object.idNextTrigger)
        : undefined,
      idPreviousTrigger: isSet(object.idPreviousTrigger)
        ? APIV1PlaylistRequest_IdMessage.fromJSON(object.idPreviousTrigger)
        : undefined,
      focusedIndexTrigger: isSet(object.focusedIndexTrigger)
        ? APIV1PlaylistRequest_IndexMessage.fromJSON(object.focusedIndexTrigger)
        : undefined,
      activePresentationIndexTrigger: isSet(
        object.activePresentationIndexTrigger,
      )
        ? APIV1PlaylistRequest_IndexMessage.fromJSON(
            object.activePresentationIndexTrigger,
          )
        : undefined,
      activeAnnouncementIndexTrigger: isSet(
        object.activeAnnouncementIndexTrigger,
      )
        ? APIV1PlaylistRequest_IndexMessage.fromJSON(
            object.activeAnnouncementIndexTrigger,
          )
        : undefined,
      idUpdates: isSet(object.idUpdates)
        ? APIV1PlaylistRequest_IdMessage.fromJSON(object.idUpdates)
        : undefined,
      activePresentationThumbnail: isSet(object.activePresentationThumbnail)
        ? APIV1PlaylistRequest_Thumbnail.fromJSON(
            object.activePresentationThumbnail,
          )
        : undefined,
      activeAnnouncementThumbnail: isSet(object.activeAnnouncementThumbnail)
        ? APIV1PlaylistRequest_Thumbnail.fromJSON(
            object.activeAnnouncementThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistRequest): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1PlaylistRequest_Playlists.toJSON(message.playlists);
    }
    if (message.createPlaylist !== undefined) {
      obj.createPlaylist = APIV1PlaylistRequest_CreatePlaylist.toJSON(
        message.createPlaylist,
      );
    }
    if (message.getPlaylist !== undefined) {
      obj.getPlaylist = APIV1PlaylistRequest_GetPlaylist.toJSON(
        message.getPlaylist,
      );
    }
    if (message.putPlaylist !== undefined) {
      obj.putPlaylist = APIV1PlaylistRequest_PutPlaylist.toJSON(
        message.putPlaylist,
      );
    }
    if (message.postPlaylist !== undefined) {
      obj.postPlaylist = APIV1PlaylistRequest_PostPlaylist.toJSON(
        message.postPlaylist,
      );
    }
    if (message.getActivePlaylist !== undefined) {
      obj.getActivePlaylist = APIV1PlaylistRequest_GetActivePlaylist.toJSON(
        message.getActivePlaylist,
      );
    }
    if (message.focused !== undefined) {
      obj.focused = APIV1PlaylistRequest_GetActivePlaylist.toJSON(
        message.focused,
      );
    }
    if (message.nextFocus !== undefined) {
      obj.nextFocus = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.nextFocus,
      );
    }
    if (message.previousFocus !== undefined) {
      obj.previousFocus = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.previousFocus,
      );
    }
    if (message.activePresentationFocus !== undefined) {
      obj.activePresentationFocus = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.activePresentationFocus,
      );
    }
    if (message.activeAnnouncementFocus !== undefined) {
      obj.activeAnnouncementFocus = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.activeAnnouncementFocus,
      );
    }
    if (message.focusedTrigger !== undefined) {
      obj.focusedTrigger = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.focusedTrigger,
      );
    }
    if (message.activePresentationTrigger !== undefined) {
      obj.activePresentationTrigger = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.activePresentationTrigger,
      );
    }
    if (message.activeAnnouncementTrigger !== undefined) {
      obj.activeAnnouncementTrigger = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.activeAnnouncementTrigger,
      );
    }
    if (message.focusedNextTrigger !== undefined) {
      obj.focusedNextTrigger = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.focusedNextTrigger,
      );
    }
    if (message.focusedPreviousTrigger !== undefined) {
      obj.focusedPreviousTrigger = APIV1PlaylistRequest_EmptyMessage.toJSON(
        message.focusedPreviousTrigger,
      );
    }
    if (message.activePresentationNextTrigger !== undefined) {
      obj.activePresentationNextTrigger =
        APIV1PlaylistRequest_EmptyMessage.toJSON(
          message.activePresentationNextTrigger,
        );
    }
    if (message.activeAnnouncementNextTrigger !== undefined) {
      obj.activeAnnouncementNextTrigger =
        APIV1PlaylistRequest_EmptyMessage.toJSON(
          message.activeAnnouncementNextTrigger,
        );
    }
    if (message.activePresentationPreviousTrigger !== undefined) {
      obj.activePresentationPreviousTrigger =
        APIV1PlaylistRequest_EmptyMessage.toJSON(
          message.activePresentationPreviousTrigger,
        );
    }
    if (message.activeAnnouncementPreviousTrigger !== undefined) {
      obj.activeAnnouncementPreviousTrigger =
        APIV1PlaylistRequest_EmptyMessage.toJSON(
          message.activeAnnouncementPreviousTrigger,
        );
    }
    if (message.idFocus !== undefined) {
      obj.idFocus = APIV1PlaylistRequest_IdMessage.toJSON(message.idFocus);
    }
    if (message.idTrigger !== undefined) {
      obj.idTrigger = APIV1PlaylistRequest_IdMessage.toJSON(message.idTrigger);
    }
    if (message.idNextTrigger !== undefined) {
      obj.idNextTrigger = APIV1PlaylistRequest_IdMessage.toJSON(
        message.idNextTrigger,
      );
    }
    if (message.idPreviousTrigger !== undefined) {
      obj.idPreviousTrigger = APIV1PlaylistRequest_IdMessage.toJSON(
        message.idPreviousTrigger,
      );
    }
    if (message.focusedIndexTrigger !== undefined) {
      obj.focusedIndexTrigger = APIV1PlaylistRequest_IndexMessage.toJSON(
        message.focusedIndexTrigger,
      );
    }
    if (message.activePresentationIndexTrigger !== undefined) {
      obj.activePresentationIndexTrigger =
        APIV1PlaylistRequest_IndexMessage.toJSON(
          message.activePresentationIndexTrigger,
        );
    }
    if (message.activeAnnouncementIndexTrigger !== undefined) {
      obj.activeAnnouncementIndexTrigger =
        APIV1PlaylistRequest_IndexMessage.toJSON(
          message.activeAnnouncementIndexTrigger,
        );
    }
    if (message.idUpdates !== undefined) {
      obj.idUpdates = APIV1PlaylistRequest_IdMessage.toJSON(message.idUpdates);
    }
    if (message.activePresentationThumbnail !== undefined) {
      obj.activePresentationThumbnail = APIV1PlaylistRequest_Thumbnail.toJSON(
        message.activePresentationThumbnail,
      );
    }
    if (message.activeAnnouncementThumbnail !== undefined) {
      obj.activeAnnouncementThumbnail = APIV1PlaylistRequest_Thumbnail.toJSON(
        message.activeAnnouncementThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest>, I>>(
    base?: I,
  ): APIV1PlaylistRequest {
    return APIV1PlaylistRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistRequest>, I>>(
    object: I,
  ): APIV1PlaylistRequest {
    const message = createBaseAPIV1PlaylistRequest();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1PlaylistRequest_Playlists.fromPartial(object.playlists)
        : undefined;
    message.createPlaylist =
      object.createPlaylist !== undefined && object.createPlaylist !== null
        ? APIV1PlaylistRequest_CreatePlaylist.fromPartial(object.createPlaylist)
        : undefined;
    message.getPlaylist =
      object.getPlaylist !== undefined && object.getPlaylist !== null
        ? APIV1PlaylistRequest_GetPlaylist.fromPartial(object.getPlaylist)
        : undefined;
    message.putPlaylist =
      object.putPlaylist !== undefined && object.putPlaylist !== null
        ? APIV1PlaylistRequest_PutPlaylist.fromPartial(object.putPlaylist)
        : undefined;
    message.postPlaylist =
      object.postPlaylist !== undefined && object.postPlaylist !== null
        ? APIV1PlaylistRequest_PostPlaylist.fromPartial(object.postPlaylist)
        : undefined;
    message.getActivePlaylist =
      object.getActivePlaylist !== undefined &&
      object.getActivePlaylist !== null
        ? APIV1PlaylistRequest_GetActivePlaylist.fromPartial(
            object.getActivePlaylist,
          )
        : undefined;
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1PlaylistRequest_GetActivePlaylist.fromPartial(object.focused)
        : undefined;
    message.nextFocus =
      object.nextFocus !== undefined && object.nextFocus !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(object.nextFocus)
        : undefined;
    message.previousFocus =
      object.previousFocus !== undefined && object.previousFocus !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(object.previousFocus)
        : undefined;
    message.activePresentationFocus =
      object.activePresentationFocus !== undefined &&
      object.activePresentationFocus !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activePresentationFocus,
          )
        : undefined;
    message.activeAnnouncementFocus =
      object.activeAnnouncementFocus !== undefined &&
      object.activeAnnouncementFocus !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activeAnnouncementFocus,
          )
        : undefined;
    message.focusedTrigger =
      object.focusedTrigger !== undefined && object.focusedTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(object.focusedTrigger)
        : undefined;
    message.activePresentationTrigger =
      object.activePresentationTrigger !== undefined &&
      object.activePresentationTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activePresentationTrigger,
          )
        : undefined;
    message.activeAnnouncementTrigger =
      object.activeAnnouncementTrigger !== undefined &&
      object.activeAnnouncementTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activeAnnouncementTrigger,
          )
        : undefined;
    message.focusedNextTrigger =
      object.focusedNextTrigger !== undefined &&
      object.focusedNextTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.focusedNextTrigger,
          )
        : undefined;
    message.focusedPreviousTrigger =
      object.focusedPreviousTrigger !== undefined &&
      object.focusedPreviousTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.focusedPreviousTrigger,
          )
        : undefined;
    message.activePresentationNextTrigger =
      object.activePresentationNextTrigger !== undefined &&
      object.activePresentationNextTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activePresentationNextTrigger,
          )
        : undefined;
    message.activeAnnouncementNextTrigger =
      object.activeAnnouncementNextTrigger !== undefined &&
      object.activeAnnouncementNextTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activeAnnouncementNextTrigger,
          )
        : undefined;
    message.activePresentationPreviousTrigger =
      object.activePresentationPreviousTrigger !== undefined &&
      object.activePresentationPreviousTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activePresentationPreviousTrigger,
          )
        : undefined;
    message.activeAnnouncementPreviousTrigger =
      object.activeAnnouncementPreviousTrigger !== undefined &&
      object.activeAnnouncementPreviousTrigger !== null
        ? APIV1PlaylistRequest_EmptyMessage.fromPartial(
            object.activeAnnouncementPreviousTrigger,
          )
        : undefined;
    message.idFocus =
      object.idFocus !== undefined && object.idFocus !== null
        ? APIV1PlaylistRequest_IdMessage.fromPartial(object.idFocus)
        : undefined;
    message.idTrigger =
      object.idTrigger !== undefined && object.idTrigger !== null
        ? APIV1PlaylistRequest_IdMessage.fromPartial(object.idTrigger)
        : undefined;
    message.idNextTrigger =
      object.idNextTrigger !== undefined && object.idNextTrigger !== null
        ? APIV1PlaylistRequest_IdMessage.fromPartial(object.idNextTrigger)
        : undefined;
    message.idPreviousTrigger =
      object.idPreviousTrigger !== undefined &&
      object.idPreviousTrigger !== null
        ? APIV1PlaylistRequest_IdMessage.fromPartial(object.idPreviousTrigger)
        : undefined;
    message.focusedIndexTrigger =
      object.focusedIndexTrigger !== undefined &&
      object.focusedIndexTrigger !== null
        ? APIV1PlaylistRequest_IndexMessage.fromPartial(
            object.focusedIndexTrigger,
          )
        : undefined;
    message.activePresentationIndexTrigger =
      object.activePresentationIndexTrigger !== undefined &&
      object.activePresentationIndexTrigger !== null
        ? APIV1PlaylistRequest_IndexMessage.fromPartial(
            object.activePresentationIndexTrigger,
          )
        : undefined;
    message.activeAnnouncementIndexTrigger =
      object.activeAnnouncementIndexTrigger !== undefined &&
      object.activeAnnouncementIndexTrigger !== null
        ? APIV1PlaylistRequest_IndexMessage.fromPartial(
            object.activeAnnouncementIndexTrigger,
          )
        : undefined;
    message.idUpdates =
      object.idUpdates !== undefined && object.idUpdates !== null
        ? APIV1PlaylistRequest_IdMessage.fromPartial(object.idUpdates)
        : undefined;
    message.activePresentationThumbnail =
      object.activePresentationThumbnail !== undefined &&
      object.activePresentationThumbnail !== null
        ? APIV1PlaylistRequest_Thumbnail.fromPartial(
            object.activePresentationThumbnail,
          )
        : undefined;
    message.activeAnnouncementThumbnail =
      object.activeAnnouncementThumbnail !== undefined &&
      object.activeAnnouncementThumbnail !== null
        ? APIV1PlaylistRequest_Thumbnail.fromPartial(
            object.activeAnnouncementThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_Playlists(): APIV1PlaylistRequest_Playlists {
  return {};
}

export const APIV1PlaylistRequest_Playlists = {
  encode(
    _: APIV1PlaylistRequest_Playlists,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_Playlists();
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

  fromJSON(_: any): APIV1PlaylistRequest_Playlists {
    return {};
  },

  toJSON(_: APIV1PlaylistRequest_Playlists): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_Playlists>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_Playlists {
    return APIV1PlaylistRequest_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistRequest_Playlists>, I>>(
    _: I,
  ): APIV1PlaylistRequest_Playlists {
    const message = createBaseAPIV1PlaylistRequest_Playlists();
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_CreatePlaylist(): APIV1PlaylistRequest_CreatePlaylist {
  return { name: '', type: 0 };
}

export const APIV1PlaylistRequest_CreatePlaylist = {
  encode(
    message: APIV1PlaylistRequest_CreatePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_CreatePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_CreatePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_CreatePlaylist {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      type: isSet(object.type)
        ? aPIV1Playlist_APIV1PlaylistTypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: APIV1PlaylistRequest_CreatePlaylist): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = aPIV1Playlist_APIV1PlaylistTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_CreatePlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_CreatePlaylist {
    return APIV1PlaylistRequest_CreatePlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_CreatePlaylist>, I>,
  >(object: I): APIV1PlaylistRequest_CreatePlaylist {
    const message = createBaseAPIV1PlaylistRequest_CreatePlaylist();
    message.name = object.name ?? '';
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_GetActivePlaylist(): APIV1PlaylistRequest_GetActivePlaylist {
  return {};
}

export const APIV1PlaylistRequest_GetActivePlaylist = {
  encode(
    _: APIV1PlaylistRequest_GetActivePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_GetActivePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_GetActivePlaylist();
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

  fromJSON(_: any): APIV1PlaylistRequest_GetActivePlaylist {
    return {};
  },

  toJSON(_: APIV1PlaylistRequest_GetActivePlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_GetActivePlaylist>, I>,
  >(base?: I): APIV1PlaylistRequest_GetActivePlaylist {
    return APIV1PlaylistRequest_GetActivePlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_GetActivePlaylist>, I>,
  >(_: I): APIV1PlaylistRequest_GetActivePlaylist {
    const message = createBaseAPIV1PlaylistRequest_GetActivePlaylist();
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_GetPlaylist(): APIV1PlaylistRequest_GetPlaylist {
  return { id: '' };
}

export const APIV1PlaylistRequest_GetPlaylist = {
  encode(
    message: APIV1PlaylistRequest_GetPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_GetPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_GetPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_GetPlaylist {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PlaylistRequest_GetPlaylist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_GetPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_GetPlaylist {
    return APIV1PlaylistRequest_GetPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_GetPlaylist>, I>,
  >(object: I): APIV1PlaylistRequest_GetPlaylist {
    const message = createBaseAPIV1PlaylistRequest_GetPlaylist();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_PutPlaylist(): APIV1PlaylistRequest_PutPlaylist {
  return { id: '', items: [] };
}

export const APIV1PlaylistRequest_PutPlaylist = {
  encode(
    message: APIV1PlaylistRequest_PutPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.items) {
      APIV1PlaylistItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_PutPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_PutPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.items.push(APIV1PlaylistItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_PutPlaylist {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => APIV1PlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1PlaylistRequest_PutPlaylist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => APIV1PlaylistItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_PutPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_PutPlaylist {
    return APIV1PlaylistRequest_PutPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_PutPlaylist>, I>,
  >(object: I): APIV1PlaylistRequest_PutPlaylist {
    const message = createBaseAPIV1PlaylistRequest_PutPlaylist();
    message.id = object.id ?? '';
    message.items =
      object.items?.map((e) => APIV1PlaylistItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_PostPlaylist(): APIV1PlaylistRequest_PostPlaylist {
  return { id: '', name: '', type: 0 };
}

export const APIV1PlaylistRequest_PostPlaylist = {
  encode(
    message: APIV1PlaylistRequest_PostPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_PostPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_PostPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_PostPlaylist {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      type: isSet(object.type)
        ? aPIV1Playlist_APIV1PlaylistTypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: APIV1PlaylistRequest_PostPlaylist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = aPIV1Playlist_APIV1PlaylistTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_PostPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_PostPlaylist {
    return APIV1PlaylistRequest_PostPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_PostPlaylist>, I>,
  >(object: I): APIV1PlaylistRequest_PostPlaylist {
    const message = createBaseAPIV1PlaylistRequest_PostPlaylist();
    message.id = object.id ?? '';
    message.name = object.name ?? '';
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_Thumbnail(): APIV1PlaylistRequest_Thumbnail {
  return { index: 0, cueIndex: 0, quality: 0, contentType: 0 };
}

export const APIV1PlaylistRequest_Thumbnail = {
  encode(
    message: APIV1PlaylistRequest_Thumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.cueIndex !== 0) {
      writer.uint32(16).uint32(message.cueIndex);
    }
    if (message.quality !== 0) {
      writer.uint32(24).int32(message.quality);
    }
    if (message.contentType !== 0) {
      writer.uint32(32).int32(message.contentType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_Thumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_Thumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.cueIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quality = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_Thumbnail {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      cueIndex: isSet(object.cueIndex) ? globalThis.Number(object.cueIndex) : 0,
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
      contentType: isSet(object.contentType)
        ? aPIV1ContentTypeFromJSON(object.contentType)
        : 0,
    };
  },

  toJSON(message: APIV1PlaylistRequest_Thumbnail): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.cueIndex !== 0) {
      obj.cueIndex = Math.round(message.cueIndex);
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    if (message.contentType !== 0) {
      obj.contentType = aPIV1ContentTypeToJSON(message.contentType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_Thumbnail>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_Thumbnail {
    return APIV1PlaylistRequest_Thumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistRequest_Thumbnail>, I>>(
    object: I,
  ): APIV1PlaylistRequest_Thumbnail {
    const message = createBaseAPIV1PlaylistRequest_Thumbnail();
    message.index = object.index ?? 0;
    message.cueIndex = object.cueIndex ?? 0;
    message.quality = object.quality ?? 0;
    message.contentType = object.contentType ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_EmptyMessage(): APIV1PlaylistRequest_EmptyMessage {
  return {};
}

export const APIV1PlaylistRequest_EmptyMessage = {
  encode(
    _: APIV1PlaylistRequest_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_EmptyMessage();
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

  fromJSON(_: any): APIV1PlaylistRequest_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1PlaylistRequest_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_EmptyMessage>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_EmptyMessage {
    return APIV1PlaylistRequest_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_EmptyMessage>, I>,
  >(_: I): APIV1PlaylistRequest_EmptyMessage {
    const message = createBaseAPIV1PlaylistRequest_EmptyMessage();
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_IdMessage(): APIV1PlaylistRequest_IdMessage {
  return { id: '' };
}

export const APIV1PlaylistRequest_IdMessage = {
  encode(
    message: APIV1PlaylistRequest_IdMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_IdMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_IdMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_IdMessage {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1PlaylistRequest_IdMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_IdMessage>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_IdMessage {
    return APIV1PlaylistRequest_IdMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistRequest_IdMessage>, I>>(
    object: I,
  ): APIV1PlaylistRequest_IdMessage {
    const message = createBaseAPIV1PlaylistRequest_IdMessage();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1PlaylistRequest_IndexMessage(): APIV1PlaylistRequest_IndexMessage {
  return { index: 0 };
}

export const APIV1PlaylistRequest_IndexMessage = {
  encode(
    message: APIV1PlaylistRequest_IndexMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistRequest_IndexMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistRequest_IndexMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistRequest_IndexMessage {
    return { index: isSet(object.index) ? globalThis.Number(object.index) : 0 };
  },

  toJSON(message: APIV1PlaylistRequest_IndexMessage): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistRequest_IndexMessage>, I>>(
    base?: I,
  ): APIV1PlaylistRequest_IndexMessage {
    return APIV1PlaylistRequest_IndexMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistRequest_IndexMessage>, I>,
  >(object: I): APIV1PlaylistRequest_IndexMessage {
    const message = createBaseAPIV1PlaylistRequest_IndexMessage();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse(): APIV1PlaylistResponse {
  return {
    playlists: undefined,
    createPlaylist: undefined,
    getPlaylist: undefined,
    putPlaylist: undefined,
    postPlaylist: undefined,
    getActivePlaylist: undefined,
    focused: undefined,
    nextFocus: undefined,
    previousFocus: undefined,
    activePresentationFocus: undefined,
    activeAnnouncementFocus: undefined,
    focusedTrigger: undefined,
    activePresentationTrigger: undefined,
    activeAnnouncementTrigger: undefined,
    focusedNextTrigger: undefined,
    focusedPreviousTrigger: undefined,
    activePresentationNextTrigger: undefined,
    activeAnnouncementNextTrigger: undefined,
    activePresentationPreviousTrigger: undefined,
    activeAnnouncementPreviousTrigger: undefined,
    idFocus: undefined,
    idTrigger: undefined,
    idNextTrigger: undefined,
    idPreviousTrigger: undefined,
    focusedIndexTrigger: undefined,
    activePresentationIndexTrigger: undefined,
    activeAnnouncementIndexTrigger: undefined,
    idUpdates: undefined,
    activePresentationThumbnail: undefined,
    activeAnnouncementThumbnail: undefined,
  };
}

export const APIV1PlaylistResponse = {
  encode(
    message: APIV1PlaylistResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1PlaylistResponse_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createPlaylist !== undefined) {
      APIV1PlaylistResponse_CreatePlaylist.encode(
        message.createPlaylist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPlaylist !== undefined) {
      APIV1PlaylistResponse_GetPlaylist.encode(
        message.getPlaylist,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putPlaylist !== undefined) {
      APIV1PlaylistResponse_PutPlaylist.encode(
        message.putPlaylist,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.postPlaylist !== undefined) {
      APIV1PlaylistResponse_PostPlaylist.encode(
        message.postPlaylist,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getActivePlaylist !== undefined) {
      APIV1PlaylistResponse_GetActivePlaylist.encode(
        message.getActivePlaylist,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.focused !== undefined) {
      APIV1PlaylistResponse_GetFocusedPlaylist.encode(
        message.focused,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.nextFocus !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.nextFocus,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.previousFocus !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.previousFocus,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.activePresentationFocus !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activePresentationFocus,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementFocus !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activeAnnouncementFocus,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.focusedTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.focusedTrigger,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.activePresentationTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activePresentationTrigger,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activeAnnouncementTrigger,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.focusedNextTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.focusedNextTrigger,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.focusedPreviousTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.focusedPreviousTrigger,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.activePresentationNextTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activePresentationNextTrigger,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementNextTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activeAnnouncementNextTrigger,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.activePresentationPreviousTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activePresentationPreviousTrigger,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementPreviousTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activeAnnouncementPreviousTrigger,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.idFocus !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.idFocus,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.idTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.idTrigger,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.idNextTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.idNextTrigger,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.idPreviousTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.idPreviousTrigger,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.focusedIndexTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.focusedIndexTrigger,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.activePresentationIndexTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activePresentationIndexTrigger,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementIndexTrigger !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.activeAnnouncementIndexTrigger,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.idUpdates !== undefined) {
      APIV1PlaylistResponse_EmptyMessage.encode(
        message.idUpdates,
        writer.uint32(226).fork(),
      ).ldelim();
    }
    if (message.activePresentationThumbnail !== undefined) {
      APIV1PlaylistResponse_Thumbnail.encode(
        message.activePresentationThumbnail,
        writer.uint32(234).fork(),
      ).ldelim();
    }
    if (message.activeAnnouncementThumbnail !== undefined) {
      APIV1PlaylistResponse_Thumbnail.encode(
        message.activeAnnouncementThumbnail,
        writer.uint32(242).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1PlaylistResponse_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createPlaylist = APIV1PlaylistResponse_CreatePlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getPlaylist = APIV1PlaylistResponse_GetPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putPlaylist = APIV1PlaylistResponse_PutPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.postPlaylist = APIV1PlaylistResponse_PostPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getActivePlaylist =
            APIV1PlaylistResponse_GetActivePlaylist.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.focused = APIV1PlaylistResponse_GetFocusedPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nextFocus = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.previousFocus = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.activePresentationFocus =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.activeAnnouncementFocus =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.focusedTrigger = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.activePresentationTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.activeAnnouncementTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.focusedNextTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.focusedPreviousTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.activePresentationNextTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.activeAnnouncementNextTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.activePresentationPreviousTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.activeAnnouncementPreviousTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.idFocus = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.idTrigger = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.idNextTrigger = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.idPreviousTrigger = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.focusedIndexTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.activePresentationIndexTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.activeAnnouncementIndexTrigger =
            APIV1PlaylistResponse_EmptyMessage.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.idUpdates = APIV1PlaylistResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.activePresentationThumbnail =
            APIV1PlaylistResponse_Thumbnail.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.activeAnnouncementThumbnail =
            APIV1PlaylistResponse_Thumbnail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse {
    return {
      playlists: isSet(object.playlists)
        ? APIV1PlaylistResponse_Playlists.fromJSON(object.playlists)
        : undefined,
      createPlaylist: isSet(object.createPlaylist)
        ? APIV1PlaylistResponse_CreatePlaylist.fromJSON(object.createPlaylist)
        : undefined,
      getPlaylist: isSet(object.getPlaylist)
        ? APIV1PlaylistResponse_GetPlaylist.fromJSON(object.getPlaylist)
        : undefined,
      putPlaylist: isSet(object.putPlaylist)
        ? APIV1PlaylistResponse_PutPlaylist.fromJSON(object.putPlaylist)
        : undefined,
      postPlaylist: isSet(object.postPlaylist)
        ? APIV1PlaylistResponse_PostPlaylist.fromJSON(object.postPlaylist)
        : undefined,
      getActivePlaylist: isSet(object.getActivePlaylist)
        ? APIV1PlaylistResponse_GetActivePlaylist.fromJSON(
            object.getActivePlaylist,
          )
        : undefined,
      focused: isSet(object.focused)
        ? APIV1PlaylistResponse_GetFocusedPlaylist.fromJSON(object.focused)
        : undefined,
      nextFocus: isSet(object.nextFocus)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.nextFocus)
        : undefined,
      previousFocus: isSet(object.previousFocus)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.previousFocus)
        : undefined,
      activePresentationFocus: isSet(object.activePresentationFocus)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activePresentationFocus,
          )
        : undefined,
      activeAnnouncementFocus: isSet(object.activeAnnouncementFocus)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activeAnnouncementFocus,
          )
        : undefined,
      focusedTrigger: isSet(object.focusedTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.focusedTrigger)
        : undefined,
      activePresentationTrigger: isSet(object.activePresentationTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activePresentationTrigger,
          )
        : undefined,
      activeAnnouncementTrigger: isSet(object.activeAnnouncementTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activeAnnouncementTrigger,
          )
        : undefined,
      focusedNextTrigger: isSet(object.focusedNextTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.focusedNextTrigger)
        : undefined,
      focusedPreviousTrigger: isSet(object.focusedPreviousTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.focusedPreviousTrigger,
          )
        : undefined,
      activePresentationNextTrigger: isSet(object.activePresentationNextTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activePresentationNextTrigger,
          )
        : undefined,
      activeAnnouncementNextTrigger: isSet(object.activeAnnouncementNextTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activeAnnouncementNextTrigger,
          )
        : undefined,
      activePresentationPreviousTrigger: isSet(
        object.activePresentationPreviousTrigger,
      )
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activePresentationPreviousTrigger,
          )
        : undefined,
      activeAnnouncementPreviousTrigger: isSet(
        object.activeAnnouncementPreviousTrigger,
      )
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activeAnnouncementPreviousTrigger,
          )
        : undefined,
      idFocus: isSet(object.idFocus)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.idFocus)
        : undefined,
      idTrigger: isSet(object.idTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.idTrigger)
        : undefined,
      idNextTrigger: isSet(object.idNextTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.idNextTrigger)
        : undefined,
      idPreviousTrigger: isSet(object.idPreviousTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.idPreviousTrigger)
        : undefined,
      focusedIndexTrigger: isSet(object.focusedIndexTrigger)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.focusedIndexTrigger,
          )
        : undefined,
      activePresentationIndexTrigger: isSet(
        object.activePresentationIndexTrigger,
      )
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activePresentationIndexTrigger,
          )
        : undefined,
      activeAnnouncementIndexTrigger: isSet(
        object.activeAnnouncementIndexTrigger,
      )
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(
            object.activeAnnouncementIndexTrigger,
          )
        : undefined,
      idUpdates: isSet(object.idUpdates)
        ? APIV1PlaylistResponse_EmptyMessage.fromJSON(object.idUpdates)
        : undefined,
      activePresentationThumbnail: isSet(object.activePresentationThumbnail)
        ? APIV1PlaylistResponse_Thumbnail.fromJSON(
            object.activePresentationThumbnail,
          )
        : undefined,
      activeAnnouncementThumbnail: isSet(object.activeAnnouncementThumbnail)
        ? APIV1PlaylistResponse_Thumbnail.fromJSON(
            object.activeAnnouncementThumbnail,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistResponse): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1PlaylistResponse_Playlists.toJSON(message.playlists);
    }
    if (message.createPlaylist !== undefined) {
      obj.createPlaylist = APIV1PlaylistResponse_CreatePlaylist.toJSON(
        message.createPlaylist,
      );
    }
    if (message.getPlaylist !== undefined) {
      obj.getPlaylist = APIV1PlaylistResponse_GetPlaylist.toJSON(
        message.getPlaylist,
      );
    }
    if (message.putPlaylist !== undefined) {
      obj.putPlaylist = APIV1PlaylistResponse_PutPlaylist.toJSON(
        message.putPlaylist,
      );
    }
    if (message.postPlaylist !== undefined) {
      obj.postPlaylist = APIV1PlaylistResponse_PostPlaylist.toJSON(
        message.postPlaylist,
      );
    }
    if (message.getActivePlaylist !== undefined) {
      obj.getActivePlaylist = APIV1PlaylistResponse_GetActivePlaylist.toJSON(
        message.getActivePlaylist,
      );
    }
    if (message.focused !== undefined) {
      obj.focused = APIV1PlaylistResponse_GetFocusedPlaylist.toJSON(
        message.focused,
      );
    }
    if (message.nextFocus !== undefined) {
      obj.nextFocus = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.nextFocus,
      );
    }
    if (message.previousFocus !== undefined) {
      obj.previousFocus = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.previousFocus,
      );
    }
    if (message.activePresentationFocus !== undefined) {
      obj.activePresentationFocus = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.activePresentationFocus,
      );
    }
    if (message.activeAnnouncementFocus !== undefined) {
      obj.activeAnnouncementFocus = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.activeAnnouncementFocus,
      );
    }
    if (message.focusedTrigger !== undefined) {
      obj.focusedTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.focusedTrigger,
      );
    }
    if (message.activePresentationTrigger !== undefined) {
      obj.activePresentationTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.activePresentationTrigger,
      );
    }
    if (message.activeAnnouncementTrigger !== undefined) {
      obj.activeAnnouncementTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.activeAnnouncementTrigger,
      );
    }
    if (message.focusedNextTrigger !== undefined) {
      obj.focusedNextTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.focusedNextTrigger,
      );
    }
    if (message.focusedPreviousTrigger !== undefined) {
      obj.focusedPreviousTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.focusedPreviousTrigger,
      );
    }
    if (message.activePresentationNextTrigger !== undefined) {
      obj.activePresentationNextTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activePresentationNextTrigger,
        );
    }
    if (message.activeAnnouncementNextTrigger !== undefined) {
      obj.activeAnnouncementNextTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activeAnnouncementNextTrigger,
        );
    }
    if (message.activePresentationPreviousTrigger !== undefined) {
      obj.activePresentationPreviousTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activePresentationPreviousTrigger,
        );
    }
    if (message.activeAnnouncementPreviousTrigger !== undefined) {
      obj.activeAnnouncementPreviousTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activeAnnouncementPreviousTrigger,
        );
    }
    if (message.idFocus !== undefined) {
      obj.idFocus = APIV1PlaylistResponse_EmptyMessage.toJSON(message.idFocus);
    }
    if (message.idTrigger !== undefined) {
      obj.idTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.idTrigger,
      );
    }
    if (message.idNextTrigger !== undefined) {
      obj.idNextTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.idNextTrigger,
      );
    }
    if (message.idPreviousTrigger !== undefined) {
      obj.idPreviousTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.idPreviousTrigger,
      );
    }
    if (message.focusedIndexTrigger !== undefined) {
      obj.focusedIndexTrigger = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.focusedIndexTrigger,
      );
    }
    if (message.activePresentationIndexTrigger !== undefined) {
      obj.activePresentationIndexTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activePresentationIndexTrigger,
        );
    }
    if (message.activeAnnouncementIndexTrigger !== undefined) {
      obj.activeAnnouncementIndexTrigger =
        APIV1PlaylistResponse_EmptyMessage.toJSON(
          message.activeAnnouncementIndexTrigger,
        );
    }
    if (message.idUpdates !== undefined) {
      obj.idUpdates = APIV1PlaylistResponse_EmptyMessage.toJSON(
        message.idUpdates,
      );
    }
    if (message.activePresentationThumbnail !== undefined) {
      obj.activePresentationThumbnail = APIV1PlaylistResponse_Thumbnail.toJSON(
        message.activePresentationThumbnail,
      );
    }
    if (message.activeAnnouncementThumbnail !== undefined) {
      obj.activeAnnouncementThumbnail = APIV1PlaylistResponse_Thumbnail.toJSON(
        message.activeAnnouncementThumbnail,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse>, I>>(
    base?: I,
  ): APIV1PlaylistResponse {
    return APIV1PlaylistResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistResponse>, I>>(
    object: I,
  ): APIV1PlaylistResponse {
    const message = createBaseAPIV1PlaylistResponse();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1PlaylistResponse_Playlists.fromPartial(object.playlists)
        : undefined;
    message.createPlaylist =
      object.createPlaylist !== undefined && object.createPlaylist !== null
        ? APIV1PlaylistResponse_CreatePlaylist.fromPartial(
            object.createPlaylist,
          )
        : undefined;
    message.getPlaylist =
      object.getPlaylist !== undefined && object.getPlaylist !== null
        ? APIV1PlaylistResponse_GetPlaylist.fromPartial(object.getPlaylist)
        : undefined;
    message.putPlaylist =
      object.putPlaylist !== undefined && object.putPlaylist !== null
        ? APIV1PlaylistResponse_PutPlaylist.fromPartial(object.putPlaylist)
        : undefined;
    message.postPlaylist =
      object.postPlaylist !== undefined && object.postPlaylist !== null
        ? APIV1PlaylistResponse_PostPlaylist.fromPartial(object.postPlaylist)
        : undefined;
    message.getActivePlaylist =
      object.getActivePlaylist !== undefined &&
      object.getActivePlaylist !== null
        ? APIV1PlaylistResponse_GetActivePlaylist.fromPartial(
            object.getActivePlaylist,
          )
        : undefined;
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1PlaylistResponse_GetFocusedPlaylist.fromPartial(object.focused)
        : undefined;
    message.nextFocus =
      object.nextFocus !== undefined && object.nextFocus !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.nextFocus)
        : undefined;
    message.previousFocus =
      object.previousFocus !== undefined && object.previousFocus !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.previousFocus)
        : undefined;
    message.activePresentationFocus =
      object.activePresentationFocus !== undefined &&
      object.activePresentationFocus !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activePresentationFocus,
          )
        : undefined;
    message.activeAnnouncementFocus =
      object.activeAnnouncementFocus !== undefined &&
      object.activeAnnouncementFocus !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activeAnnouncementFocus,
          )
        : undefined;
    message.focusedTrigger =
      object.focusedTrigger !== undefined && object.focusedTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.focusedTrigger)
        : undefined;
    message.activePresentationTrigger =
      object.activePresentationTrigger !== undefined &&
      object.activePresentationTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activePresentationTrigger,
          )
        : undefined;
    message.activeAnnouncementTrigger =
      object.activeAnnouncementTrigger !== undefined &&
      object.activeAnnouncementTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activeAnnouncementTrigger,
          )
        : undefined;
    message.focusedNextTrigger =
      object.focusedNextTrigger !== undefined &&
      object.focusedNextTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.focusedNextTrigger,
          )
        : undefined;
    message.focusedPreviousTrigger =
      object.focusedPreviousTrigger !== undefined &&
      object.focusedPreviousTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.focusedPreviousTrigger,
          )
        : undefined;
    message.activePresentationNextTrigger =
      object.activePresentationNextTrigger !== undefined &&
      object.activePresentationNextTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activePresentationNextTrigger,
          )
        : undefined;
    message.activeAnnouncementNextTrigger =
      object.activeAnnouncementNextTrigger !== undefined &&
      object.activeAnnouncementNextTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activeAnnouncementNextTrigger,
          )
        : undefined;
    message.activePresentationPreviousTrigger =
      object.activePresentationPreviousTrigger !== undefined &&
      object.activePresentationPreviousTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activePresentationPreviousTrigger,
          )
        : undefined;
    message.activeAnnouncementPreviousTrigger =
      object.activeAnnouncementPreviousTrigger !== undefined &&
      object.activeAnnouncementPreviousTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activeAnnouncementPreviousTrigger,
          )
        : undefined;
    message.idFocus =
      object.idFocus !== undefined && object.idFocus !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.idFocus)
        : undefined;
    message.idTrigger =
      object.idTrigger !== undefined && object.idTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.idTrigger)
        : undefined;
    message.idNextTrigger =
      object.idNextTrigger !== undefined && object.idNextTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.idNextTrigger)
        : undefined;
    message.idPreviousTrigger =
      object.idPreviousTrigger !== undefined &&
      object.idPreviousTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.idPreviousTrigger,
          )
        : undefined;
    message.focusedIndexTrigger =
      object.focusedIndexTrigger !== undefined &&
      object.focusedIndexTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.focusedIndexTrigger,
          )
        : undefined;
    message.activePresentationIndexTrigger =
      object.activePresentationIndexTrigger !== undefined &&
      object.activePresentationIndexTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activePresentationIndexTrigger,
          )
        : undefined;
    message.activeAnnouncementIndexTrigger =
      object.activeAnnouncementIndexTrigger !== undefined &&
      object.activeAnnouncementIndexTrigger !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(
            object.activeAnnouncementIndexTrigger,
          )
        : undefined;
    message.idUpdates =
      object.idUpdates !== undefined && object.idUpdates !== null
        ? APIV1PlaylistResponse_EmptyMessage.fromPartial(object.idUpdates)
        : undefined;
    message.activePresentationThumbnail =
      object.activePresentationThumbnail !== undefined &&
      object.activePresentationThumbnail !== null
        ? APIV1PlaylistResponse_Thumbnail.fromPartial(
            object.activePresentationThumbnail,
          )
        : undefined;
    message.activeAnnouncementThumbnail =
      object.activeAnnouncementThumbnail !== undefined &&
      object.activeAnnouncementThumbnail !== null
        ? APIV1PlaylistResponse_Thumbnail.fromPartial(
            object.activeAnnouncementThumbnail,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_Playlists(): APIV1PlaylistResponse_Playlists {
  return { playlists: [] };
}

export const APIV1PlaylistResponse_Playlists = {
  encode(
    message: APIV1PlaylistResponse_Playlists,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.playlists) {
      APIV1Playlist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_Playlists();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists.push(APIV1Playlist.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse_Playlists {
    return {
      playlists: globalThis.Array.isArray(object?.playlists)
        ? object.playlists.map((e: any) => APIV1Playlist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1PlaylistResponse_Playlists): unknown {
    const obj: any = {};
    if (message.playlists?.length) {
      obj.playlists = message.playlists.map((e) => APIV1Playlist.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_Playlists>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_Playlists {
    return APIV1PlaylistResponse_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistResponse_Playlists>, I>>(
    object: I,
  ): APIV1PlaylistResponse_Playlists {
    const message = createBaseAPIV1PlaylistResponse_Playlists();
    message.playlists =
      object.playlists?.map((e) => APIV1Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_CreatePlaylist(): APIV1PlaylistResponse_CreatePlaylist {
  return { playlist: undefined };
}

export const APIV1PlaylistResponse_CreatePlaylist = {
  encode(
    message: APIV1PlaylistResponse_CreatePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1Playlist.encode(message.playlist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_CreatePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_CreatePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlist = APIV1Playlist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse_CreatePlaylist {
    return {
      playlist: isSet(object.playlist)
        ? APIV1Playlist.fromJSON(object.playlist)
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistResponse_CreatePlaylist): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1Playlist.toJSON(message.playlist);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_CreatePlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_CreatePlaylist {
    return APIV1PlaylistResponse_CreatePlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_CreatePlaylist>, I>,
  >(object: I): APIV1PlaylistResponse_CreatePlaylist {
    const message = createBaseAPIV1PlaylistResponse_CreatePlaylist();
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1Playlist.fromPartial(object.playlist)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_GetActivePlaylist(): APIV1PlaylistResponse_GetActivePlaylist {
  return { presentation: undefined, announcements: undefined };
}

export const APIV1PlaylistResponse_GetActivePlaylist = {
  encode(
    message: APIV1PlaylistResponse_GetActivePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      APIV1PlaylistAndItem.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.announcements !== undefined) {
      APIV1PlaylistAndItem.encode(
        message.announcements,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_GetActivePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_GetActivePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentation = APIV1PlaylistAndItem.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.announcements = APIV1PlaylistAndItem.decode(
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

  fromJSON(object: any): APIV1PlaylistResponse_GetActivePlaylist {
    return {
      presentation: isSet(object.presentation)
        ? APIV1PlaylistAndItem.fromJSON(object.presentation)
        : undefined,
      announcements: isSet(object.announcements)
        ? APIV1PlaylistAndItem.fromJSON(object.announcements)
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistResponse_GetActivePlaylist): unknown {
    const obj: any = {};
    if (message.presentation !== undefined) {
      obj.presentation = APIV1PlaylistAndItem.toJSON(message.presentation);
    }
    if (message.announcements !== undefined) {
      obj.announcements = APIV1PlaylistAndItem.toJSON(message.announcements);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_GetActivePlaylist>, I>,
  >(base?: I): APIV1PlaylistResponse_GetActivePlaylist {
    return APIV1PlaylistResponse_GetActivePlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_GetActivePlaylist>, I>,
  >(object: I): APIV1PlaylistResponse_GetActivePlaylist {
    const message = createBaseAPIV1PlaylistResponse_GetActivePlaylist();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? APIV1PlaylistAndItem.fromPartial(object.presentation)
        : undefined;
    message.announcements =
      object.announcements !== undefined && object.announcements !== null
        ? APIV1PlaylistAndItem.fromPartial(object.announcements)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_GetPlaylist(): APIV1PlaylistResponse_GetPlaylist {
  return { id: undefined, items: [] };
}

export const APIV1PlaylistResponse_GetPlaylist = {
  encode(
    message: APIV1PlaylistResponse_GetPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      APIV1PlaylistItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_GetPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_GetPlaylist();
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
          if (tag !== 18) {
            break;
          }

          message.items.push(APIV1PlaylistItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse_GetPlaylist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => APIV1PlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1PlaylistResponse_GetPlaylist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => APIV1PlaylistItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_GetPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_GetPlaylist {
    return APIV1PlaylistResponse_GetPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_GetPlaylist>, I>,
  >(object: I): APIV1PlaylistResponse_GetPlaylist {
    const message = createBaseAPIV1PlaylistResponse_GetPlaylist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.items =
      object.items?.map((e) => APIV1PlaylistItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_PutPlaylist(): APIV1PlaylistResponse_PutPlaylist {
  return {};
}

export const APIV1PlaylistResponse_PutPlaylist = {
  encode(
    _: APIV1PlaylistResponse_PutPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_PutPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_PutPlaylist();
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

  fromJSON(_: any): APIV1PlaylistResponse_PutPlaylist {
    return {};
  },

  toJSON(_: APIV1PlaylistResponse_PutPlaylist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_PutPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_PutPlaylist {
    return APIV1PlaylistResponse_PutPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_PutPlaylist>, I>,
  >(_: I): APIV1PlaylistResponse_PutPlaylist {
    const message = createBaseAPIV1PlaylistResponse_PutPlaylist();
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_PostPlaylist(): APIV1PlaylistResponse_PostPlaylist {
  return { playlist: undefined };
}

export const APIV1PlaylistResponse_PostPlaylist = {
  encode(
    message: APIV1PlaylistResponse_PostPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1Playlist.encode(message.playlist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_PostPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_PostPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlist = APIV1Playlist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse_PostPlaylist {
    return {
      playlist: isSet(object.playlist)
        ? APIV1Playlist.fromJSON(object.playlist)
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistResponse_PostPlaylist): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1Playlist.toJSON(message.playlist);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_PostPlaylist>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_PostPlaylist {
    return APIV1PlaylistResponse_PostPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_PostPlaylist>, I>,
  >(object: I): APIV1PlaylistResponse_PostPlaylist {
    const message = createBaseAPIV1PlaylistResponse_PostPlaylist();
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1Playlist.fromPartial(object.playlist)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_GetFocusedPlaylist(): APIV1PlaylistResponse_GetFocusedPlaylist {
  return { playlist: undefined };
}

export const APIV1PlaylistResponse_GetFocusedPlaylist = {
  encode(
    message: APIV1PlaylistResponse_GetFocusedPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlist !== undefined) {
      APIV1PlaylistAndItem.encode(
        message.playlist,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_GetFocusedPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_GetFocusedPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlist = APIV1PlaylistAndItem.decode(
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

  fromJSON(object: any): APIV1PlaylistResponse_GetFocusedPlaylist {
    return {
      playlist: isSet(object.playlist)
        ? APIV1PlaylistAndItem.fromJSON(object.playlist)
        : undefined,
    };
  },

  toJSON(message: APIV1PlaylistResponse_GetFocusedPlaylist): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1PlaylistAndItem.toJSON(message.playlist);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_GetFocusedPlaylist>, I>,
  >(base?: I): APIV1PlaylistResponse_GetFocusedPlaylist {
    return APIV1PlaylistResponse_GetFocusedPlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_GetFocusedPlaylist>, I>,
  >(object: I): APIV1PlaylistResponse_GetFocusedPlaylist {
    const message = createBaseAPIV1PlaylistResponse_GetFocusedPlaylist();
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1PlaylistAndItem.fromPartial(object.playlist)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_Thumbnail(): APIV1PlaylistResponse_Thumbnail {
  return { data: new Uint8Array(0), contentType: 0 };
}

export const APIV1PlaylistResponse_Thumbnail = {
  encode(
    message: APIV1PlaylistResponse_Thumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.contentType !== 0) {
      writer.uint32(16).int32(message.contentType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_Thumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_Thumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PlaylistResponse_Thumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
      contentType: isSet(object.contentType)
        ? aPIV1ContentTypeFromJSON(object.contentType)
        : 0,
    };
  },

  toJSON(message: APIV1PlaylistResponse_Thumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.contentType !== 0) {
      obj.contentType = aPIV1ContentTypeToJSON(message.contentType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_Thumbnail>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_Thumbnail {
    return APIV1PlaylistResponse_Thumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PlaylistResponse_Thumbnail>, I>>(
    object: I,
  ): APIV1PlaylistResponse_Thumbnail {
    const message = createBaseAPIV1PlaylistResponse_Thumbnail();
    message.data = object.data ?? new Uint8Array(0);
    message.contentType = object.contentType ?? 0;
    return message;
  },
};

function createBaseAPIV1PlaylistResponse_EmptyMessage(): APIV1PlaylistResponse_EmptyMessage {
  return {};
}

export const APIV1PlaylistResponse_EmptyMessage = {
  encode(
    _: APIV1PlaylistResponse_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PlaylistResponse_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PlaylistResponse_EmptyMessage();
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

  fromJSON(_: any): APIV1PlaylistResponse_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1PlaylistResponse_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PlaylistResponse_EmptyMessage>, I>>(
    base?: I,
  ): APIV1PlaylistResponse_EmptyMessage {
    return APIV1PlaylistResponse_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PlaylistResponse_EmptyMessage>, I>,
  >(_: I): APIV1PlaylistResponse_EmptyMessage {
    const message = createBaseAPIV1PlaylistResponse_EmptyMessage();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

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
