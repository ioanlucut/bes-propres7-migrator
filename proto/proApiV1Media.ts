/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { StringValue } from './google/protobuf/wrappers';
import { APIV1Identifier } from './proApiV1Identifier';
import { APIV1MediaPlaylistItem } from './proApiV1MediaPlaylistItem';
import { APIV1Playlist } from './proApiV1Playlist';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface APIV1MediaRequest {
  playlists?: APIV1MediaRequest_Playlists | undefined;
  getPlaylist?: APIV1MediaRequest_GetPlaylist | undefined;
  getPlaylistUpdates?: APIV1MediaRequest_GetPlaylistUpdates | undefined;
  getThumbnail?: APIV1MediaRequest_GetThumbnail | undefined;
  playlistFocused?: APIV1MediaRequest_EmptyMessage | undefined;
  playlistActive?: APIV1MediaRequest_EmptyMessage | undefined;
  focus?: APIV1MediaRequest_FocusMessage | undefined;
  trigger?: APIV1MediaRequest_TriggerMessage | undefined;
}

export interface APIV1MediaRequest_Playlists {}

export interface APIV1MediaRequest_GetPlaylist {
  id: string;
  start: number;
}

export interface APIV1MediaRequest_GetPlaylistUpdates {
  id: string;
}

export interface APIV1MediaRequest_GetThumbnail {
  uuid: UUID | undefined;
  quality: number;
}

export interface APIV1MediaRequest_EmptyMessage {}

export interface APIV1MediaRequest_FocusMessage {
  next?: APIV1MediaRequest_EmptyMessage | undefined;
  previous?: APIV1MediaRequest_EmptyMessage | undefined;
  active?: APIV1MediaRequest_EmptyMessage | undefined;
  id?: string | undefined;
}

export interface APIV1MediaRequest_TriggerMessage {
  focused?: APIV1MediaRequest_EmptyMessage | undefined;
  active?: APIV1MediaRequest_EmptyMessage | undefined;
  playlistId?: string | undefined;
  start?: APIV1MediaRequest_EmptyMessage | undefined;
  next?: APIV1MediaRequest_EmptyMessage | undefined;
  previous?: APIV1MediaRequest_EmptyMessage | undefined;
  mediaId?: string | undefined;
}

export interface APIV1MediaResponse {
  playlists?: APIV1MediaResponse_Playlists | undefined;
  getPlaylist?: APIV1MediaResponse_GetPlaylist | undefined;
  getPlaylistUpdates?: APIV1MediaResponse_GetPlaylistUpdates | undefined;
  getThumbnail?: APIV1MediaResponse_GetThumbnail | undefined;
  playlistFocused?: APIV1MediaResponse_GetFocusedPlaylist | undefined;
  playlistActive?: APIV1MediaResponse_GetActivePlaylist | undefined;
  focus?: APIV1MediaResponse_EmptyMessage | undefined;
  trigger?: APIV1MediaResponse_EmptyMessage | undefined;
}

export interface APIV1MediaResponse_Playlists {
  playlists: APIV1Playlist[];
}

export interface APIV1MediaResponse_GetPlaylist {
  id: APIV1Identifier | undefined;
  items: APIV1MediaPlaylistItem[];
}

export interface APIV1MediaResponse_GetPlaylistUpdates {
  id: APIV1Identifier | undefined;
}

export interface APIV1MediaResponse_GetThumbnail {
  uuid: UUID | undefined;
  thumbnailData: Uint8Array;
}

export interface APIV1MediaResponse_GetFocusedPlaylist {
  id: APIV1Identifier | undefined;
}

export interface APIV1MediaResponse_GetActivePlaylist {
  playlist: APIV1Identifier | undefined;
  item: APIV1Identifier | undefined;
}

export interface APIV1MediaResponse_EmptyMessage {}

function createBaseAPIV1MediaRequest(): APIV1MediaRequest {
  return {
    playlists: undefined,
    getPlaylist: undefined,
    getPlaylistUpdates: undefined,
    getThumbnail: undefined,
    playlistFocused: undefined,
    playlistActive: undefined,
    focus: undefined,
    trigger: undefined,
  };
}

export const APIV1MediaRequest = {
  encode(
    message: APIV1MediaRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1MediaRequest_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getPlaylist !== undefined) {
      APIV1MediaRequest_GetPlaylist.encode(
        message.getPlaylist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPlaylistUpdates !== undefined) {
      APIV1MediaRequest_GetPlaylistUpdates.encode(
        message.getPlaylistUpdates,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1MediaRequest_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playlistFocused !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.playlistFocused,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.playlistActive !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.playlistActive,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.focus !== undefined) {
      APIV1MediaRequest_FocusMessage.encode(
        message.focus,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1MediaRequest_TriggerMessage.encode(
        message.trigger,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MediaRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1MediaRequest_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getPlaylist = APIV1MediaRequest_GetPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getPlaylistUpdates =
            APIV1MediaRequest_GetPlaylistUpdates.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getThumbnail = APIV1MediaRequest_GetThumbnail.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playlistFocused = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.playlistActive = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.focus = APIV1MediaRequest_FocusMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.trigger = APIV1MediaRequest_TriggerMessage.decode(
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

  fromJSON(object: any): APIV1MediaRequest {
    return {
      playlists: isSet(object.playlists)
        ? APIV1MediaRequest_Playlists.fromJSON(object.playlists)
        : undefined,
      getPlaylist: isSet(object.getPlaylist)
        ? APIV1MediaRequest_GetPlaylist.fromJSON(object.getPlaylist)
        : undefined,
      getPlaylistUpdates: isSet(object.getPlaylistUpdates)
        ? APIV1MediaRequest_GetPlaylistUpdates.fromJSON(
            object.getPlaylistUpdates,
          )
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1MediaRequest_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
      playlistFocused: isSet(object.playlistFocused)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.playlistFocused)
        : undefined,
      playlistActive: isSet(object.playlistActive)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.playlistActive)
        : undefined,
      focus: isSet(object.focus)
        ? APIV1MediaRequest_FocusMessage.fromJSON(object.focus)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1MediaRequest_TriggerMessage.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1MediaRequest): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1MediaRequest_Playlists.toJSON(message.playlists);
    }
    if (message.getPlaylist !== undefined) {
      obj.getPlaylist = APIV1MediaRequest_GetPlaylist.toJSON(
        message.getPlaylist,
      );
    }
    if (message.getPlaylistUpdates !== undefined) {
      obj.getPlaylistUpdates = APIV1MediaRequest_GetPlaylistUpdates.toJSON(
        message.getPlaylistUpdates,
      );
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1MediaRequest_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    if (message.playlistFocused !== undefined) {
      obj.playlistFocused = APIV1MediaRequest_EmptyMessage.toJSON(
        message.playlistFocused,
      );
    }
    if (message.playlistActive !== undefined) {
      obj.playlistActive = APIV1MediaRequest_EmptyMessage.toJSON(
        message.playlistActive,
      );
    }
    if (message.focus !== undefined) {
      obj.focus = APIV1MediaRequest_FocusMessage.toJSON(message.focus);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1MediaRequest_TriggerMessage.toJSON(message.trigger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest>, I>>(
    base?: I,
  ): APIV1MediaRequest {
    return APIV1MediaRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest>, I>>(
    object: I,
  ): APIV1MediaRequest {
    const message = createBaseAPIV1MediaRequest();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1MediaRequest_Playlists.fromPartial(object.playlists)
        : undefined;
    message.getPlaylist =
      object.getPlaylist !== undefined && object.getPlaylist !== null
        ? APIV1MediaRequest_GetPlaylist.fromPartial(object.getPlaylist)
        : undefined;
    message.getPlaylistUpdates =
      object.getPlaylistUpdates !== undefined &&
      object.getPlaylistUpdates !== null
        ? APIV1MediaRequest_GetPlaylistUpdates.fromPartial(
            object.getPlaylistUpdates,
          )
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1MediaRequest_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    message.playlistFocused =
      object.playlistFocused !== undefined && object.playlistFocused !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.playlistFocused)
        : undefined;
    message.playlistActive =
      object.playlistActive !== undefined && object.playlistActive !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.playlistActive)
        : undefined;
    message.focus =
      object.focus !== undefined && object.focus !== null
        ? APIV1MediaRequest_FocusMessage.fromPartial(object.focus)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1MediaRequest_TriggerMessage.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MediaRequest_Playlists(): APIV1MediaRequest_Playlists {
  return {};
}

export const APIV1MediaRequest_Playlists = {
  encode(
    _: APIV1MediaRequest_Playlists,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_Playlists();
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

  fromJSON(_: any): APIV1MediaRequest_Playlists {
    return {};
  },

  toJSON(_: APIV1MediaRequest_Playlists): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_Playlists>, I>>(
    base?: I,
  ): APIV1MediaRequest_Playlists {
    return APIV1MediaRequest_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest_Playlists>, I>>(
    _: I,
  ): APIV1MediaRequest_Playlists {
    const message = createBaseAPIV1MediaRequest_Playlists();
    return message;
  },
};

function createBaseAPIV1MediaRequest_GetPlaylist(): APIV1MediaRequest_GetPlaylist {
  return { id: '', start: 0 };
}

export const APIV1MediaRequest_GetPlaylist = {
  encode(
    message: APIV1MediaRequest_GetPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.start !== 0) {
      writer.uint32(32).uint32(message.start);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_GetPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_GetPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.start = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaRequest_GetPlaylist {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      start: isSet(object.start) ? globalThis.Number(object.start) : 0,
    };
  },

  toJSON(message: APIV1MediaRequest_GetPlaylist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_GetPlaylist>, I>>(
    base?: I,
  ): APIV1MediaRequest_GetPlaylist {
    return APIV1MediaRequest_GetPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest_GetPlaylist>, I>>(
    object: I,
  ): APIV1MediaRequest_GetPlaylist {
    const message = createBaseAPIV1MediaRequest_GetPlaylist();
    message.id = object.id ?? '';
    message.start = object.start ?? 0;
    return message;
  },
};

function createBaseAPIV1MediaRequest_GetPlaylistUpdates(): APIV1MediaRequest_GetPlaylistUpdates {
  return { id: '' };
}

export const APIV1MediaRequest_GetPlaylistUpdates = {
  encode(
    message: APIV1MediaRequest_GetPlaylistUpdates,
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
  ): APIV1MediaRequest_GetPlaylistUpdates {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_GetPlaylistUpdates();
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

  fromJSON(object: any): APIV1MediaRequest_GetPlaylistUpdates {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MediaRequest_GetPlaylistUpdates): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_GetPlaylistUpdates>, I>>(
    base?: I,
  ): APIV1MediaRequest_GetPlaylistUpdates {
    return APIV1MediaRequest_GetPlaylistUpdates.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MediaRequest_GetPlaylistUpdates>, I>,
  >(object: I): APIV1MediaRequest_GetPlaylistUpdates {
    const message = createBaseAPIV1MediaRequest_GetPlaylistUpdates();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MediaRequest_GetThumbnail(): APIV1MediaRequest_GetThumbnail {
  return { uuid: undefined, quality: 0 };
}

export const APIV1MediaRequest_GetThumbnail = {
  encode(
    message: APIV1MediaRequest_GetThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.quality !== 0) {
      writer.uint32(16).int32(message.quality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quality = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaRequest_GetThumbnail {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1MediaRequest_GetThumbnail): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_GetThumbnail>, I>>(
    base?: I,
  ): APIV1MediaRequest_GetThumbnail {
    return APIV1MediaRequest_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest_GetThumbnail>, I>>(
    object: I,
  ): APIV1MediaRequest_GetThumbnail {
    const message = createBaseAPIV1MediaRequest_GetThumbnail();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1MediaRequest_EmptyMessage(): APIV1MediaRequest_EmptyMessage {
  return {};
}

export const APIV1MediaRequest_EmptyMessage = {
  encode(
    _: APIV1MediaRequest_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_EmptyMessage();
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

  fromJSON(_: any): APIV1MediaRequest_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1MediaRequest_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_EmptyMessage>, I>>(
    base?: I,
  ): APIV1MediaRequest_EmptyMessage {
    return APIV1MediaRequest_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest_EmptyMessage>, I>>(
    _: I,
  ): APIV1MediaRequest_EmptyMessage {
    const message = createBaseAPIV1MediaRequest_EmptyMessage();
    return message;
  },
};

function createBaseAPIV1MediaRequest_FocusMessage(): APIV1MediaRequest_FocusMessage {
  return {
    next: undefined,
    previous: undefined,
    active: undefined,
    id: undefined,
  };
}

export const APIV1MediaRequest_FocusMessage = {
  encode(
    message: APIV1MediaRequest_FocusMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.next !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.next,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.previous,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.active,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.id !== undefined) {
      StringValue.encode(
        { value: message.id! },
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_FocusMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_FocusMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.next = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.previous = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.active = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaRequest_FocusMessage {
    return {
      next: isSet(object.next)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.previous)
        : undefined,
      active: isSet(object.active)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.active)
        : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
    };
  },

  toJSON(message: APIV1MediaRequest_FocusMessage): unknown {
    const obj: any = {};
    if (message.next !== undefined) {
      obj.next = APIV1MediaRequest_EmptyMessage.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1MediaRequest_EmptyMessage.toJSON(message.previous);
    }
    if (message.active !== undefined) {
      obj.active = APIV1MediaRequest_EmptyMessage.toJSON(message.active);
    }
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_FocusMessage>, I>>(
    base?: I,
  ): APIV1MediaRequest_FocusMessage {
    return APIV1MediaRequest_FocusMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaRequest_FocusMessage>, I>>(
    object: I,
  ): APIV1MediaRequest_FocusMessage {
    const message = createBaseAPIV1MediaRequest_FocusMessage();
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.previous)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.active)
        : undefined;
    message.id = object.id ?? undefined;
    return message;
  },
};

function createBaseAPIV1MediaRequest_TriggerMessage(): APIV1MediaRequest_TriggerMessage {
  return {
    focused: undefined,
    active: undefined,
    playlistId: undefined,
    start: undefined,
    next: undefined,
    previous: undefined,
    mediaId: undefined,
  };
}

export const APIV1MediaRequest_TriggerMessage = {
  encode(
    message: APIV1MediaRequest_TriggerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.focused !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.focused,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.active,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.playlistId !== undefined) {
      StringValue.encode(
        { value: message.playlistId! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.start !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.start,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.next !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.next,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1MediaRequest_EmptyMessage.encode(
        message.previous,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.mediaId !== undefined) {
      StringValue.encode(
        { value: message.mediaId! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaRequest_TriggerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaRequest_TriggerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.focused = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.active = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.playlistId = StringValue.decode(
            reader,
            reader.uint32(),
          ).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.start = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.next = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.previous = APIV1MediaRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mediaId = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaRequest_TriggerMessage {
    return {
      focused: isSet(object.focused)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.focused)
        : undefined,
      active: isSet(object.active)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.active)
        : undefined,
      playlistId: isSet(object.playlistId)
        ? String(object.playlistId)
        : undefined,
      start: isSet(object.start)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.start)
        : undefined,
      next: isSet(object.next)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1MediaRequest_EmptyMessage.fromJSON(object.previous)
        : undefined,
      mediaId: isSet(object.mediaId) ? String(object.mediaId) : undefined,
    };
  },

  toJSON(message: APIV1MediaRequest_TriggerMessage): unknown {
    const obj: any = {};
    if (message.focused !== undefined) {
      obj.focused = APIV1MediaRequest_EmptyMessage.toJSON(message.focused);
    }
    if (message.active !== undefined) {
      obj.active = APIV1MediaRequest_EmptyMessage.toJSON(message.active);
    }
    if (message.playlistId !== undefined) {
      obj.playlistId = message.playlistId;
    }
    if (message.start !== undefined) {
      obj.start = APIV1MediaRequest_EmptyMessage.toJSON(message.start);
    }
    if (message.next !== undefined) {
      obj.next = APIV1MediaRequest_EmptyMessage.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1MediaRequest_EmptyMessage.toJSON(message.previous);
    }
    if (message.mediaId !== undefined) {
      obj.mediaId = message.mediaId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaRequest_TriggerMessage>, I>>(
    base?: I,
  ): APIV1MediaRequest_TriggerMessage {
    return APIV1MediaRequest_TriggerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MediaRequest_TriggerMessage>, I>,
  >(object: I): APIV1MediaRequest_TriggerMessage {
    const message = createBaseAPIV1MediaRequest_TriggerMessage();
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.focused)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.active)
        : undefined;
    message.playlistId = object.playlistId ?? undefined;
    message.start =
      object.start !== undefined && object.start !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.start)
        : undefined;
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1MediaRequest_EmptyMessage.fromPartial(object.previous)
        : undefined;
    message.mediaId = object.mediaId ?? undefined;
    return message;
  },
};

function createBaseAPIV1MediaResponse(): APIV1MediaResponse {
  return {
    playlists: undefined,
    getPlaylist: undefined,
    getPlaylistUpdates: undefined,
    getThumbnail: undefined,
    playlistFocused: undefined,
    playlistActive: undefined,
    focus: undefined,
    trigger: undefined,
  };
}

export const APIV1MediaResponse = {
  encode(
    message: APIV1MediaResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlists !== undefined) {
      APIV1MediaResponse_Playlists.encode(
        message.playlists,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getPlaylist !== undefined) {
      APIV1MediaResponse_GetPlaylist.encode(
        message.getPlaylist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPlaylistUpdates !== undefined) {
      APIV1MediaResponse_GetPlaylistUpdates.encode(
        message.getPlaylistUpdates,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      APIV1MediaResponse_GetThumbnail.encode(
        message.getThumbnail,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playlistFocused !== undefined) {
      APIV1MediaResponse_GetFocusedPlaylist.encode(
        message.playlistFocused,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.playlistActive !== undefined) {
      APIV1MediaResponse_GetActivePlaylist.encode(
        message.playlistActive,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.focus !== undefined) {
      APIV1MediaResponse_EmptyMessage.encode(
        message.focus,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1MediaResponse_EmptyMessage.encode(
        message.trigger,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MediaResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playlists = APIV1MediaResponse_Playlists.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getPlaylist = APIV1MediaResponse_GetPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getPlaylistUpdates =
            APIV1MediaResponse_GetPlaylistUpdates.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getThumbnail = APIV1MediaResponse_GetThumbnail.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.playlistFocused =
            APIV1MediaResponse_GetFocusedPlaylist.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.playlistActive = APIV1MediaResponse_GetActivePlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.focus = APIV1MediaResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.trigger = APIV1MediaResponse_EmptyMessage.decode(
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

  fromJSON(object: any): APIV1MediaResponse {
    return {
      playlists: isSet(object.playlists)
        ? APIV1MediaResponse_Playlists.fromJSON(object.playlists)
        : undefined,
      getPlaylist: isSet(object.getPlaylist)
        ? APIV1MediaResponse_GetPlaylist.fromJSON(object.getPlaylist)
        : undefined,
      getPlaylistUpdates: isSet(object.getPlaylistUpdates)
        ? APIV1MediaResponse_GetPlaylistUpdates.fromJSON(
            object.getPlaylistUpdates,
          )
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? APIV1MediaResponse_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
      playlistFocused: isSet(object.playlistFocused)
        ? APIV1MediaResponse_GetFocusedPlaylist.fromJSON(object.playlistFocused)
        : undefined,
      playlistActive: isSet(object.playlistActive)
        ? APIV1MediaResponse_GetActivePlaylist.fromJSON(object.playlistActive)
        : undefined,
      focus: isSet(object.focus)
        ? APIV1MediaResponse_EmptyMessage.fromJSON(object.focus)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1MediaResponse_EmptyMessage.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1MediaResponse): unknown {
    const obj: any = {};
    if (message.playlists !== undefined) {
      obj.playlists = APIV1MediaResponse_Playlists.toJSON(message.playlists);
    }
    if (message.getPlaylist !== undefined) {
      obj.getPlaylist = APIV1MediaResponse_GetPlaylist.toJSON(
        message.getPlaylist,
      );
    }
    if (message.getPlaylistUpdates !== undefined) {
      obj.getPlaylistUpdates = APIV1MediaResponse_GetPlaylistUpdates.toJSON(
        message.getPlaylistUpdates,
      );
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = APIV1MediaResponse_GetThumbnail.toJSON(
        message.getThumbnail,
      );
    }
    if (message.playlistFocused !== undefined) {
      obj.playlistFocused = APIV1MediaResponse_GetFocusedPlaylist.toJSON(
        message.playlistFocused,
      );
    }
    if (message.playlistActive !== undefined) {
      obj.playlistActive = APIV1MediaResponse_GetActivePlaylist.toJSON(
        message.playlistActive,
      );
    }
    if (message.focus !== undefined) {
      obj.focus = APIV1MediaResponse_EmptyMessage.toJSON(message.focus);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1MediaResponse_EmptyMessage.toJSON(message.trigger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse>, I>>(
    base?: I,
  ): APIV1MediaResponse {
    return APIV1MediaResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaResponse>, I>>(
    object: I,
  ): APIV1MediaResponse {
    const message = createBaseAPIV1MediaResponse();
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? APIV1MediaResponse_Playlists.fromPartial(object.playlists)
        : undefined;
    message.getPlaylist =
      object.getPlaylist !== undefined && object.getPlaylist !== null
        ? APIV1MediaResponse_GetPlaylist.fromPartial(object.getPlaylist)
        : undefined;
    message.getPlaylistUpdates =
      object.getPlaylistUpdates !== undefined &&
      object.getPlaylistUpdates !== null
        ? APIV1MediaResponse_GetPlaylistUpdates.fromPartial(
            object.getPlaylistUpdates,
          )
        : undefined;
    message.getThumbnail =
      object.getThumbnail !== undefined && object.getThumbnail !== null
        ? APIV1MediaResponse_GetThumbnail.fromPartial(object.getThumbnail)
        : undefined;
    message.playlistFocused =
      object.playlistFocused !== undefined && object.playlistFocused !== null
        ? APIV1MediaResponse_GetFocusedPlaylist.fromPartial(
            object.playlistFocused,
          )
        : undefined;
    message.playlistActive =
      object.playlistActive !== undefined && object.playlistActive !== null
        ? APIV1MediaResponse_GetActivePlaylist.fromPartial(
            object.playlistActive,
          )
        : undefined;
    message.focus =
      object.focus !== undefined && object.focus !== null
        ? APIV1MediaResponse_EmptyMessage.fromPartial(object.focus)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1MediaResponse_EmptyMessage.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MediaResponse_Playlists(): APIV1MediaResponse_Playlists {
  return { playlists: [] };
}

export const APIV1MediaResponse_Playlists = {
  encode(
    message: APIV1MediaResponse_Playlists,
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
  ): APIV1MediaResponse_Playlists {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_Playlists();
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

  fromJSON(object: any): APIV1MediaResponse_Playlists {
    return {
      playlists: globalThis.Array.isArray(object?.playlists)
        ? object.playlists.map((e: any) => APIV1Playlist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MediaResponse_Playlists): unknown {
    const obj: any = {};
    if (message.playlists?.length) {
      obj.playlists = message.playlists.map((e) => APIV1Playlist.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse_Playlists>, I>>(
    base?: I,
  ): APIV1MediaResponse_Playlists {
    return APIV1MediaResponse_Playlists.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaResponse_Playlists>, I>>(
    object: I,
  ): APIV1MediaResponse_Playlists {
    const message = createBaseAPIV1MediaResponse_Playlists();
    message.playlists =
      object.playlists?.map((e) => APIV1Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MediaResponse_GetPlaylist(): APIV1MediaResponse_GetPlaylist {
  return { id: undefined, items: [] };
}

export const APIV1MediaResponse_GetPlaylist = {
  encode(
    message: APIV1MediaResponse_GetPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.items) {
      APIV1MediaPlaylistItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaResponse_GetPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_GetPlaylist();
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

          message.items.push(
            APIV1MediaPlaylistItem.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1MediaResponse_GetPlaylist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      items: globalThis.Array.isArray(object?.items)
        ? object.items.map((e: any) => APIV1MediaPlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MediaResponse_GetPlaylist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => APIV1MediaPlaylistItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse_GetPlaylist>, I>>(
    base?: I,
  ): APIV1MediaResponse_GetPlaylist {
    return APIV1MediaResponse_GetPlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaResponse_GetPlaylist>, I>>(
    object: I,
  ): APIV1MediaResponse_GetPlaylist {
    const message = createBaseAPIV1MediaResponse_GetPlaylist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.items =
      object.items?.map((e) => APIV1MediaPlaylistItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MediaResponse_GetPlaylistUpdates(): APIV1MediaResponse_GetPlaylistUpdates {
  return { id: undefined };
}

export const APIV1MediaResponse_GetPlaylistUpdates = {
  encode(
    message: APIV1MediaResponse_GetPlaylistUpdates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaResponse_GetPlaylistUpdates {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_GetPlaylistUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaResponse_GetPlaylistUpdates {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1MediaResponse_GetPlaylistUpdates): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MediaResponse_GetPlaylistUpdates>, I>,
  >(base?: I): APIV1MediaResponse_GetPlaylistUpdates {
    return APIV1MediaResponse_GetPlaylistUpdates.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MediaResponse_GetPlaylistUpdates>, I>,
  >(object: I): APIV1MediaResponse_GetPlaylistUpdates {
    const message = createBaseAPIV1MediaResponse_GetPlaylistUpdates();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MediaResponse_GetThumbnail(): APIV1MediaResponse_GetThumbnail {
  return { uuid: undefined, thumbnailData: new Uint8Array(0) };
}

export const APIV1MediaResponse_GetThumbnail = {
  encode(
    message: APIV1MediaResponse_GetThumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.thumbnailData.length !== 0) {
      writer.uint32(18).bytes(message.thumbnailData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaResponse_GetThumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.thumbnailData = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaResponse_GetThumbnail {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      thumbnailData: isSet(object.thumbnailData)
        ? bytesFromBase64(object.thumbnailData)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1MediaResponse_GetThumbnail): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.thumbnailData.length !== 0) {
      obj.thumbnailData = base64FromBytes(message.thumbnailData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse_GetThumbnail>, I>>(
    base?: I,
  ): APIV1MediaResponse_GetThumbnail {
    return APIV1MediaResponse_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaResponse_GetThumbnail>, I>>(
    object: I,
  ): APIV1MediaResponse_GetThumbnail {
    const message = createBaseAPIV1MediaResponse_GetThumbnail();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.thumbnailData = object.thumbnailData ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1MediaResponse_GetFocusedPlaylist(): APIV1MediaResponse_GetFocusedPlaylist {
  return { id: undefined };
}

export const APIV1MediaResponse_GetFocusedPlaylist = {
  encode(
    message: APIV1MediaResponse_GetFocusedPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaResponse_GetFocusedPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_GetFocusedPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MediaResponse_GetFocusedPlaylist {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1MediaResponse_GetFocusedPlaylist): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MediaResponse_GetFocusedPlaylist>, I>,
  >(base?: I): APIV1MediaResponse_GetFocusedPlaylist {
    return APIV1MediaResponse_GetFocusedPlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MediaResponse_GetFocusedPlaylist>, I>,
  >(object: I): APIV1MediaResponse_GetFocusedPlaylist {
    const message = createBaseAPIV1MediaResponse_GetFocusedPlaylist();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MediaResponse_GetActivePlaylist(): APIV1MediaResponse_GetActivePlaylist {
  return { playlist: undefined, item: undefined };
}

export const APIV1MediaResponse_GetActivePlaylist = {
  encode(
    message: APIV1MediaResponse_GetActivePlaylist,
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
  ): APIV1MediaResponse_GetActivePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_GetActivePlaylist();
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

  fromJSON(object: any): APIV1MediaResponse_GetActivePlaylist {
    return {
      playlist: isSet(object.playlist)
        ? APIV1Identifier.fromJSON(object.playlist)
        : undefined,
      item: isSet(object.item)
        ? APIV1Identifier.fromJSON(object.item)
        : undefined,
    };
  },

  toJSON(message: APIV1MediaResponse_GetActivePlaylist): unknown {
    const obj: any = {};
    if (message.playlist !== undefined) {
      obj.playlist = APIV1Identifier.toJSON(message.playlist);
    }
    if (message.item !== undefined) {
      obj.item = APIV1Identifier.toJSON(message.item);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse_GetActivePlaylist>, I>>(
    base?: I,
  ): APIV1MediaResponse_GetActivePlaylist {
    return APIV1MediaResponse_GetActivePlaylist.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MediaResponse_GetActivePlaylist>, I>,
  >(object: I): APIV1MediaResponse_GetActivePlaylist {
    const message = createBaseAPIV1MediaResponse_GetActivePlaylist();
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

function createBaseAPIV1MediaResponse_EmptyMessage(): APIV1MediaResponse_EmptyMessage {
  return {};
}

export const APIV1MediaResponse_EmptyMessage = {
  encode(
    _: APIV1MediaResponse_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MediaResponse_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MediaResponse_EmptyMessage();
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

  fromJSON(_: any): APIV1MediaResponse_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1MediaResponse_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MediaResponse_EmptyMessage>, I>>(
    base?: I,
  ): APIV1MediaResponse_EmptyMessage {
    return APIV1MediaResponse_EmptyMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MediaResponse_EmptyMessage>, I>>(
    _: I,
  ): APIV1MediaResponse_EmptyMessage {
    const message = createBaseAPIV1MediaResponse_EmptyMessage();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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
