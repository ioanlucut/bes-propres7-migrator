/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface APIV1TriggerRequest {
  cue?: APIV1TriggerRequest_Cue | undefined;
  playlist?: APIV1TriggerRequest_Playlist | undefined;
  media?: APIV1TriggerRequest_Media | undefined;
  audio?: APIV1TriggerRequest_Audio | undefined;
  videoInput?: APIV1TriggerRequest_VideoInput | undefined;
  library?: APIV1TriggerRequest_Library | undefined;
  next?: APIV1TriggerRequest_Next | undefined;
  previous?: APIV1TriggerRequest_Previous | undefined;
  mediaNext?: APIV1TriggerRequest_MediaNext | undefined;
  mediaPrevious?: APIV1TriggerRequest_MediaPrevious | undefined;
  audioNext?: APIV1TriggerRequest_AudioNext | undefined;
  audioPrevious?: APIV1TriggerRequest_AudioPrevious | undefined;
}

export interface APIV1TriggerRequest_Cue {
  index: number;
}

export interface APIV1TriggerRequest_Playlist {
  id: string;
}

export interface APIV1TriggerRequest_Media {
  id: string;
}

export interface APIV1TriggerRequest_MediaNext {}

export interface APIV1TriggerRequest_MediaPrevious {}

export interface APIV1TriggerRequest_Audio {
  id: string;
}

export interface APIV1TriggerRequest_AudioNext {}

export interface APIV1TriggerRequest_AudioPrevious {}

export interface APIV1TriggerRequest_VideoInput {
  id: string;
}

export interface APIV1TriggerRequest_Library {
  id: string;
}

export interface APIV1TriggerRequest_Next {}

export interface APIV1TriggerRequest_Previous {}

export interface APIV1TriggerResponse {
  cue?: APIV1TriggerResponse_Cue | undefined;
  playlist?: APIV1TriggerResponse_Playlist | undefined;
  media?: APIV1TriggerResponse_Media | undefined;
  audio?: APIV1TriggerResponse_Audio | undefined;
  videoInput?: APIV1TriggerResponse_VideoInput | undefined;
  library?: APIV1TriggerResponse_Library | undefined;
  next?: APIV1TriggerResponse_Next | undefined;
  previous?: APIV1TriggerResponse_Previous | undefined;
  mediaNext?: APIV1TriggerResponse_MediaNext | undefined;
  mediaPrevious?: APIV1TriggerResponse_MediaPrevious | undefined;
  audioNext?: APIV1TriggerResponse_AudioNext | undefined;
  audioPrevious?: APIV1TriggerResponse_AudioPrevious | undefined;
}

export interface APIV1TriggerResponse_Cue {}

export interface APIV1TriggerResponse_Playlist {}

export interface APIV1TriggerResponse_Media {}

export interface APIV1TriggerResponse_MediaNext {}

export interface APIV1TriggerResponse_MediaPrevious {}

export interface APIV1TriggerResponse_Audio {}

export interface APIV1TriggerResponse_AudioNext {}

export interface APIV1TriggerResponse_AudioPrevious {}

export interface APIV1TriggerResponse_VideoInput {}

export interface APIV1TriggerResponse_Library {}

export interface APIV1TriggerResponse_Next {}

export interface APIV1TriggerResponse_Previous {}

function createBaseAPIV1TriggerRequest(): APIV1TriggerRequest {
  return {
    cue: undefined,
    playlist: undefined,
    media: undefined,
    audio: undefined,
    videoInput: undefined,
    library: undefined,
    next: undefined,
    previous: undefined,
    mediaNext: undefined,
    mediaPrevious: undefined,
    audioNext: undefined,
    audioPrevious: undefined,
  };
}

export const APIV1TriggerRequest = {
  encode(
    message: APIV1TriggerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cue !== undefined) {
      APIV1TriggerRequest_Cue.encode(
        message.cue,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlist !== undefined) {
      APIV1TriggerRequest_Playlist.encode(
        message.playlist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      APIV1TriggerRequest_Media.encode(
        message.media,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      APIV1TriggerRequest_Audio.encode(
        message.audio,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.videoInput !== undefined) {
      APIV1TriggerRequest_VideoInput.encode(
        message.videoInput,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.library !== undefined) {
      APIV1TriggerRequest_Library.encode(
        message.library,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.next !== undefined) {
      APIV1TriggerRequest_Next.encode(
        message.next,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1TriggerRequest_Previous.encode(
        message.previous,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.mediaNext !== undefined) {
      APIV1TriggerRequest_MediaNext.encode(
        message.mediaNext,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.mediaPrevious !== undefined) {
      APIV1TriggerRequest_MediaPrevious.encode(
        message.mediaPrevious,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.audioNext !== undefined) {
      APIV1TriggerRequest_AudioNext.encode(
        message.audioNext,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.audioPrevious !== undefined) {
      APIV1TriggerRequest_AudioPrevious.encode(
        message.audioPrevious,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1TriggerRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cue = APIV1TriggerRequest_Cue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlist = APIV1TriggerRequest_Playlist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.media = APIV1TriggerRequest_Media.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audio = APIV1TriggerRequest_Audio.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.videoInput = APIV1TriggerRequest_VideoInput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.library = APIV1TriggerRequest_Library.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.next = APIV1TriggerRequest_Next.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.previous = APIV1TriggerRequest_Previous.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mediaNext = APIV1TriggerRequest_MediaNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mediaPrevious = APIV1TriggerRequest_MediaPrevious.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.audioNext = APIV1TriggerRequest_AudioNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.audioPrevious = APIV1TriggerRequest_AudioPrevious.decode(
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

  fromJSON(object: any): APIV1TriggerRequest {
    return {
      cue: isSet(object.cue)
        ? APIV1TriggerRequest_Cue.fromJSON(object.cue)
        : undefined,
      playlist: isSet(object.playlist)
        ? APIV1TriggerRequest_Playlist.fromJSON(object.playlist)
        : undefined,
      media: isSet(object.media)
        ? APIV1TriggerRequest_Media.fromJSON(object.media)
        : undefined,
      audio: isSet(object.audio)
        ? APIV1TriggerRequest_Audio.fromJSON(object.audio)
        : undefined,
      videoInput: isSet(object.videoInput)
        ? APIV1TriggerRequest_VideoInput.fromJSON(object.videoInput)
        : undefined,
      library: isSet(object.library)
        ? APIV1TriggerRequest_Library.fromJSON(object.library)
        : undefined,
      next: isSet(object.next)
        ? APIV1TriggerRequest_Next.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1TriggerRequest_Previous.fromJSON(object.previous)
        : undefined,
      mediaNext: isSet(object.mediaNext)
        ? APIV1TriggerRequest_MediaNext.fromJSON(object.mediaNext)
        : undefined,
      mediaPrevious: isSet(object.mediaPrevious)
        ? APIV1TriggerRequest_MediaPrevious.fromJSON(object.mediaPrevious)
        : undefined,
      audioNext: isSet(object.audioNext)
        ? APIV1TriggerRequest_AudioNext.fromJSON(object.audioNext)
        : undefined,
      audioPrevious: isSet(object.audioPrevious)
        ? APIV1TriggerRequest_AudioPrevious.fromJSON(object.audioPrevious)
        : undefined,
    };
  },

  toJSON(message: APIV1TriggerRequest): unknown {
    const obj: any = {};
    if (message.cue !== undefined) {
      obj.cue = APIV1TriggerRequest_Cue.toJSON(message.cue);
    }
    if (message.playlist !== undefined) {
      obj.playlist = APIV1TriggerRequest_Playlist.toJSON(message.playlist);
    }
    if (message.media !== undefined) {
      obj.media = APIV1TriggerRequest_Media.toJSON(message.media);
    }
    if (message.audio !== undefined) {
      obj.audio = APIV1TriggerRequest_Audio.toJSON(message.audio);
    }
    if (message.videoInput !== undefined) {
      obj.videoInput = APIV1TriggerRequest_VideoInput.toJSON(
        message.videoInput,
      );
    }
    if (message.library !== undefined) {
      obj.library = APIV1TriggerRequest_Library.toJSON(message.library);
    }
    if (message.next !== undefined) {
      obj.next = APIV1TriggerRequest_Next.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1TriggerRequest_Previous.toJSON(message.previous);
    }
    if (message.mediaNext !== undefined) {
      obj.mediaNext = APIV1TriggerRequest_MediaNext.toJSON(message.mediaNext);
    }
    if (message.mediaPrevious !== undefined) {
      obj.mediaPrevious = APIV1TriggerRequest_MediaPrevious.toJSON(
        message.mediaPrevious,
      );
    }
    if (message.audioNext !== undefined) {
      obj.audioNext = APIV1TriggerRequest_AudioNext.toJSON(message.audioNext);
    }
    if (message.audioPrevious !== undefined) {
      obj.audioPrevious = APIV1TriggerRequest_AudioPrevious.toJSON(
        message.audioPrevious,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest>, I>>(
    base?: I,
  ): APIV1TriggerRequest {
    return APIV1TriggerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest>, I>>(
    object: I,
  ): APIV1TriggerRequest {
    const message = createBaseAPIV1TriggerRequest();
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? APIV1TriggerRequest_Cue.fromPartial(object.cue)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1TriggerRequest_Playlist.fromPartial(object.playlist)
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? APIV1TriggerRequest_Media.fromPartial(object.media)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? APIV1TriggerRequest_Audio.fromPartial(object.audio)
        : undefined;
    message.videoInput =
      object.videoInput !== undefined && object.videoInput !== null
        ? APIV1TriggerRequest_VideoInput.fromPartial(object.videoInput)
        : undefined;
    message.library =
      object.library !== undefined && object.library !== null
        ? APIV1TriggerRequest_Library.fromPartial(object.library)
        : undefined;
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1TriggerRequest_Next.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1TriggerRequest_Previous.fromPartial(object.previous)
        : undefined;
    message.mediaNext =
      object.mediaNext !== undefined && object.mediaNext !== null
        ? APIV1TriggerRequest_MediaNext.fromPartial(object.mediaNext)
        : undefined;
    message.mediaPrevious =
      object.mediaPrevious !== undefined && object.mediaPrevious !== null
        ? APIV1TriggerRequest_MediaPrevious.fromPartial(object.mediaPrevious)
        : undefined;
    message.audioNext =
      object.audioNext !== undefined && object.audioNext !== null
        ? APIV1TriggerRequest_AudioNext.fromPartial(object.audioNext)
        : undefined;
    message.audioPrevious =
      object.audioPrevious !== undefined && object.audioPrevious !== null
        ? APIV1TriggerRequest_AudioPrevious.fromPartial(object.audioPrevious)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Cue(): APIV1TriggerRequest_Cue {
  return { index: 0 };
}

export const APIV1TriggerRequest_Cue = {
  encode(
    message: APIV1TriggerRequest_Cue,
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
  ): APIV1TriggerRequest_Cue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Cue();
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

  fromJSON(object: any): APIV1TriggerRequest_Cue {
    return { index: isSet(object.index) ? globalThis.Number(object.index) : 0 };
  },

  toJSON(message: APIV1TriggerRequest_Cue): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Cue>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Cue {
    return APIV1TriggerRequest_Cue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Cue>, I>>(
    object: I,
  ): APIV1TriggerRequest_Cue {
    const message = createBaseAPIV1TriggerRequest_Cue();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Playlist(): APIV1TriggerRequest_Playlist {
  return { id: '' };
}

export const APIV1TriggerRequest_Playlist = {
  encode(
    message: APIV1TriggerRequest_Playlist,
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
  ): APIV1TriggerRequest_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Playlist();
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

  fromJSON(object: any): APIV1TriggerRequest_Playlist {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TriggerRequest_Playlist): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Playlist>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Playlist {
    return APIV1TriggerRequest_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Playlist>, I>>(
    object: I,
  ): APIV1TriggerRequest_Playlist {
    const message = createBaseAPIV1TriggerRequest_Playlist();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Media(): APIV1TriggerRequest_Media {
  return { id: '' };
}

export const APIV1TriggerRequest_Media = {
  encode(
    message: APIV1TriggerRequest_Media,
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
  ): APIV1TriggerRequest_Media {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Media();
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

  fromJSON(object: any): APIV1TriggerRequest_Media {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TriggerRequest_Media): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Media>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Media {
    return APIV1TriggerRequest_Media.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Media>, I>>(
    object: I,
  ): APIV1TriggerRequest_Media {
    const message = createBaseAPIV1TriggerRequest_Media();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TriggerRequest_MediaNext(): APIV1TriggerRequest_MediaNext {
  return {};
}

export const APIV1TriggerRequest_MediaNext = {
  encode(
    _: APIV1TriggerRequest_MediaNext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_MediaNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_MediaNext();
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

  fromJSON(_: any): APIV1TriggerRequest_MediaNext {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_MediaNext): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_MediaNext>, I>>(
    base?: I,
  ): APIV1TriggerRequest_MediaNext {
    return APIV1TriggerRequest_MediaNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_MediaNext>, I>>(
    _: I,
  ): APIV1TriggerRequest_MediaNext {
    const message = createBaseAPIV1TriggerRequest_MediaNext();
    return message;
  },
};

function createBaseAPIV1TriggerRequest_MediaPrevious(): APIV1TriggerRequest_MediaPrevious {
  return {};
}

export const APIV1TriggerRequest_MediaPrevious = {
  encode(
    _: APIV1TriggerRequest_MediaPrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_MediaPrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_MediaPrevious();
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

  fromJSON(_: any): APIV1TriggerRequest_MediaPrevious {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_MediaPrevious): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_MediaPrevious>, I>>(
    base?: I,
  ): APIV1TriggerRequest_MediaPrevious {
    return APIV1TriggerRequest_MediaPrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TriggerRequest_MediaPrevious>, I>,
  >(_: I): APIV1TriggerRequest_MediaPrevious {
    const message = createBaseAPIV1TriggerRequest_MediaPrevious();
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Audio(): APIV1TriggerRequest_Audio {
  return { id: '' };
}

export const APIV1TriggerRequest_Audio = {
  encode(
    message: APIV1TriggerRequest_Audio,
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
  ): APIV1TriggerRequest_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Audio();
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

  fromJSON(object: any): APIV1TriggerRequest_Audio {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TriggerRequest_Audio): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Audio>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Audio {
    return APIV1TriggerRequest_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Audio>, I>>(
    object: I,
  ): APIV1TriggerRequest_Audio {
    const message = createBaseAPIV1TriggerRequest_Audio();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TriggerRequest_AudioNext(): APIV1TriggerRequest_AudioNext {
  return {};
}

export const APIV1TriggerRequest_AudioNext = {
  encode(
    _: APIV1TriggerRequest_AudioNext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_AudioNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_AudioNext();
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

  fromJSON(_: any): APIV1TriggerRequest_AudioNext {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_AudioNext): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_AudioNext>, I>>(
    base?: I,
  ): APIV1TriggerRequest_AudioNext {
    return APIV1TriggerRequest_AudioNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_AudioNext>, I>>(
    _: I,
  ): APIV1TriggerRequest_AudioNext {
    const message = createBaseAPIV1TriggerRequest_AudioNext();
    return message;
  },
};

function createBaseAPIV1TriggerRequest_AudioPrevious(): APIV1TriggerRequest_AudioPrevious {
  return {};
}

export const APIV1TriggerRequest_AudioPrevious = {
  encode(
    _: APIV1TriggerRequest_AudioPrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_AudioPrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_AudioPrevious();
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

  fromJSON(_: any): APIV1TriggerRequest_AudioPrevious {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_AudioPrevious): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_AudioPrevious>, I>>(
    base?: I,
  ): APIV1TriggerRequest_AudioPrevious {
    return APIV1TriggerRequest_AudioPrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TriggerRequest_AudioPrevious>, I>,
  >(_: I): APIV1TriggerRequest_AudioPrevious {
    const message = createBaseAPIV1TriggerRequest_AudioPrevious();
    return message;
  },
};

function createBaseAPIV1TriggerRequest_VideoInput(): APIV1TriggerRequest_VideoInput {
  return { id: '' };
}

export const APIV1TriggerRequest_VideoInput = {
  encode(
    message: APIV1TriggerRequest_VideoInput,
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
  ): APIV1TriggerRequest_VideoInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_VideoInput();
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

  fromJSON(object: any): APIV1TriggerRequest_VideoInput {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TriggerRequest_VideoInput): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_VideoInput>, I>>(
    base?: I,
  ): APIV1TriggerRequest_VideoInput {
    return APIV1TriggerRequest_VideoInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_VideoInput>, I>>(
    object: I,
  ): APIV1TriggerRequest_VideoInput {
    const message = createBaseAPIV1TriggerRequest_VideoInput();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Library(): APIV1TriggerRequest_Library {
  return { id: '' };
}

export const APIV1TriggerRequest_Library = {
  encode(
    message: APIV1TriggerRequest_Library,
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
  ): APIV1TriggerRequest_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Library();
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

  fromJSON(object: any): APIV1TriggerRequest_Library {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1TriggerRequest_Library): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Library>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Library {
    return APIV1TriggerRequest_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Library>, I>>(
    object: I,
  ): APIV1TriggerRequest_Library {
    const message = createBaseAPIV1TriggerRequest_Library();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Next(): APIV1TriggerRequest_Next {
  return {};
}

export const APIV1TriggerRequest_Next = {
  encode(
    _: APIV1TriggerRequest_Next,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_Next {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Next();
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

  fromJSON(_: any): APIV1TriggerRequest_Next {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_Next): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Next>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Next {
    return APIV1TriggerRequest_Next.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Next>, I>>(
    _: I,
  ): APIV1TriggerRequest_Next {
    const message = createBaseAPIV1TriggerRequest_Next();
    return message;
  },
};

function createBaseAPIV1TriggerRequest_Previous(): APIV1TriggerRequest_Previous {
  return {};
}

export const APIV1TriggerRequest_Previous = {
  encode(
    _: APIV1TriggerRequest_Previous,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerRequest_Previous {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerRequest_Previous();
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

  fromJSON(_: any): APIV1TriggerRequest_Previous {
    return {};
  },

  toJSON(_: APIV1TriggerRequest_Previous): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerRequest_Previous>, I>>(
    base?: I,
  ): APIV1TriggerRequest_Previous {
    return APIV1TriggerRequest_Previous.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerRequest_Previous>, I>>(
    _: I,
  ): APIV1TriggerRequest_Previous {
    const message = createBaseAPIV1TriggerRequest_Previous();
    return message;
  },
};

function createBaseAPIV1TriggerResponse(): APIV1TriggerResponse {
  return {
    cue: undefined,
    playlist: undefined,
    media: undefined,
    audio: undefined,
    videoInput: undefined,
    library: undefined,
    next: undefined,
    previous: undefined,
    mediaNext: undefined,
    mediaPrevious: undefined,
    audioNext: undefined,
    audioPrevious: undefined,
  };
}

export const APIV1TriggerResponse = {
  encode(
    message: APIV1TriggerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cue !== undefined) {
      APIV1TriggerResponse_Cue.encode(
        message.cue,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.playlist !== undefined) {
      APIV1TriggerResponse_Playlist.encode(
        message.playlist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      APIV1TriggerResponse_Media.encode(
        message.media,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      APIV1TriggerResponse_Audio.encode(
        message.audio,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.videoInput !== undefined) {
      APIV1TriggerResponse_VideoInput.encode(
        message.videoInput,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.library !== undefined) {
      APIV1TriggerResponse_Library.encode(
        message.library,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.next !== undefined) {
      APIV1TriggerResponse_Next.encode(
        message.next,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1TriggerResponse_Previous.encode(
        message.previous,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.mediaNext !== undefined) {
      APIV1TriggerResponse_MediaNext.encode(
        message.mediaNext,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.mediaPrevious !== undefined) {
      APIV1TriggerResponse_MediaPrevious.encode(
        message.mediaPrevious,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.audioNext !== undefined) {
      APIV1TriggerResponse_AudioNext.encode(
        message.audioNext,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.audioPrevious !== undefined) {
      APIV1TriggerResponse_AudioPrevious.encode(
        message.audioPrevious,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cue = APIV1TriggerResponse_Cue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlist = APIV1TriggerResponse_Playlist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.media = APIV1TriggerResponse_Media.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audio = APIV1TriggerResponse_Audio.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.videoInput = APIV1TriggerResponse_VideoInput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.library = APIV1TriggerResponse_Library.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.next = APIV1TriggerResponse_Next.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.previous = APIV1TriggerResponse_Previous.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.mediaNext = APIV1TriggerResponse_MediaNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mediaPrevious = APIV1TriggerResponse_MediaPrevious.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.audioNext = APIV1TriggerResponse_AudioNext.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.audioPrevious = APIV1TriggerResponse_AudioPrevious.decode(
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

  fromJSON(object: any): APIV1TriggerResponse {
    return {
      cue: isSet(object.cue)
        ? APIV1TriggerResponse_Cue.fromJSON(object.cue)
        : undefined,
      playlist: isSet(object.playlist)
        ? APIV1TriggerResponse_Playlist.fromJSON(object.playlist)
        : undefined,
      media: isSet(object.media)
        ? APIV1TriggerResponse_Media.fromJSON(object.media)
        : undefined,
      audio: isSet(object.audio)
        ? APIV1TriggerResponse_Audio.fromJSON(object.audio)
        : undefined,
      videoInput: isSet(object.videoInput)
        ? APIV1TriggerResponse_VideoInput.fromJSON(object.videoInput)
        : undefined,
      library: isSet(object.library)
        ? APIV1TriggerResponse_Library.fromJSON(object.library)
        : undefined,
      next: isSet(object.next)
        ? APIV1TriggerResponse_Next.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1TriggerResponse_Previous.fromJSON(object.previous)
        : undefined,
      mediaNext: isSet(object.mediaNext)
        ? APIV1TriggerResponse_MediaNext.fromJSON(object.mediaNext)
        : undefined,
      mediaPrevious: isSet(object.mediaPrevious)
        ? APIV1TriggerResponse_MediaPrevious.fromJSON(object.mediaPrevious)
        : undefined,
      audioNext: isSet(object.audioNext)
        ? APIV1TriggerResponse_AudioNext.fromJSON(object.audioNext)
        : undefined,
      audioPrevious: isSet(object.audioPrevious)
        ? APIV1TriggerResponse_AudioPrevious.fromJSON(object.audioPrevious)
        : undefined,
    };
  },

  toJSON(message: APIV1TriggerResponse): unknown {
    const obj: any = {};
    if (message.cue !== undefined) {
      obj.cue = APIV1TriggerResponse_Cue.toJSON(message.cue);
    }
    if (message.playlist !== undefined) {
      obj.playlist = APIV1TriggerResponse_Playlist.toJSON(message.playlist);
    }
    if (message.media !== undefined) {
      obj.media = APIV1TriggerResponse_Media.toJSON(message.media);
    }
    if (message.audio !== undefined) {
      obj.audio = APIV1TriggerResponse_Audio.toJSON(message.audio);
    }
    if (message.videoInput !== undefined) {
      obj.videoInput = APIV1TriggerResponse_VideoInput.toJSON(
        message.videoInput,
      );
    }
    if (message.library !== undefined) {
      obj.library = APIV1TriggerResponse_Library.toJSON(message.library);
    }
    if (message.next !== undefined) {
      obj.next = APIV1TriggerResponse_Next.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1TriggerResponse_Previous.toJSON(message.previous);
    }
    if (message.mediaNext !== undefined) {
      obj.mediaNext = APIV1TriggerResponse_MediaNext.toJSON(message.mediaNext);
    }
    if (message.mediaPrevious !== undefined) {
      obj.mediaPrevious = APIV1TriggerResponse_MediaPrevious.toJSON(
        message.mediaPrevious,
      );
    }
    if (message.audioNext !== undefined) {
      obj.audioNext = APIV1TriggerResponse_AudioNext.toJSON(message.audioNext);
    }
    if (message.audioPrevious !== undefined) {
      obj.audioPrevious = APIV1TriggerResponse_AudioPrevious.toJSON(
        message.audioPrevious,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse>, I>>(
    base?: I,
  ): APIV1TriggerResponse {
    return APIV1TriggerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse>, I>>(
    object: I,
  ): APIV1TriggerResponse {
    const message = createBaseAPIV1TriggerResponse();
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? APIV1TriggerResponse_Cue.fromPartial(object.cue)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? APIV1TriggerResponse_Playlist.fromPartial(object.playlist)
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? APIV1TriggerResponse_Media.fromPartial(object.media)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? APIV1TriggerResponse_Audio.fromPartial(object.audio)
        : undefined;
    message.videoInput =
      object.videoInput !== undefined && object.videoInput !== null
        ? APIV1TriggerResponse_VideoInput.fromPartial(object.videoInput)
        : undefined;
    message.library =
      object.library !== undefined && object.library !== null
        ? APIV1TriggerResponse_Library.fromPartial(object.library)
        : undefined;
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1TriggerResponse_Next.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1TriggerResponse_Previous.fromPartial(object.previous)
        : undefined;
    message.mediaNext =
      object.mediaNext !== undefined && object.mediaNext !== null
        ? APIV1TriggerResponse_MediaNext.fromPartial(object.mediaNext)
        : undefined;
    message.mediaPrevious =
      object.mediaPrevious !== undefined && object.mediaPrevious !== null
        ? APIV1TriggerResponse_MediaPrevious.fromPartial(object.mediaPrevious)
        : undefined;
    message.audioNext =
      object.audioNext !== undefined && object.audioNext !== null
        ? APIV1TriggerResponse_AudioNext.fromPartial(object.audioNext)
        : undefined;
    message.audioPrevious =
      object.audioPrevious !== undefined && object.audioPrevious !== null
        ? APIV1TriggerResponse_AudioPrevious.fromPartial(object.audioPrevious)
        : undefined;
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Cue(): APIV1TriggerResponse_Cue {
  return {};
}

export const APIV1TriggerResponse_Cue = {
  encode(
    _: APIV1TriggerResponse_Cue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Cue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Cue();
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

  fromJSON(_: any): APIV1TriggerResponse_Cue {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Cue): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Cue>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Cue {
    return APIV1TriggerResponse_Cue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Cue>, I>>(
    _: I,
  ): APIV1TriggerResponse_Cue {
    const message = createBaseAPIV1TriggerResponse_Cue();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Playlist(): APIV1TriggerResponse_Playlist {
  return {};
}

export const APIV1TriggerResponse_Playlist = {
  encode(
    _: APIV1TriggerResponse_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Playlist();
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

  fromJSON(_: any): APIV1TriggerResponse_Playlist {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Playlist): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Playlist>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Playlist {
    return APIV1TriggerResponse_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Playlist>, I>>(
    _: I,
  ): APIV1TriggerResponse_Playlist {
    const message = createBaseAPIV1TriggerResponse_Playlist();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Media(): APIV1TriggerResponse_Media {
  return {};
}

export const APIV1TriggerResponse_Media = {
  encode(
    _: APIV1TriggerResponse_Media,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Media {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Media();
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

  fromJSON(_: any): APIV1TriggerResponse_Media {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Media): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Media>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Media {
    return APIV1TriggerResponse_Media.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Media>, I>>(
    _: I,
  ): APIV1TriggerResponse_Media {
    const message = createBaseAPIV1TriggerResponse_Media();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_MediaNext(): APIV1TriggerResponse_MediaNext {
  return {};
}

export const APIV1TriggerResponse_MediaNext = {
  encode(
    _: APIV1TriggerResponse_MediaNext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_MediaNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_MediaNext();
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

  fromJSON(_: any): APIV1TriggerResponse_MediaNext {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_MediaNext): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_MediaNext>, I>>(
    base?: I,
  ): APIV1TriggerResponse_MediaNext {
    return APIV1TriggerResponse_MediaNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_MediaNext>, I>>(
    _: I,
  ): APIV1TriggerResponse_MediaNext {
    const message = createBaseAPIV1TriggerResponse_MediaNext();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_MediaPrevious(): APIV1TriggerResponse_MediaPrevious {
  return {};
}

export const APIV1TriggerResponse_MediaPrevious = {
  encode(
    _: APIV1TriggerResponse_MediaPrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_MediaPrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_MediaPrevious();
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

  fromJSON(_: any): APIV1TriggerResponse_MediaPrevious {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_MediaPrevious): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_MediaPrevious>, I>>(
    base?: I,
  ): APIV1TriggerResponse_MediaPrevious {
    return APIV1TriggerResponse_MediaPrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TriggerResponse_MediaPrevious>, I>,
  >(_: I): APIV1TriggerResponse_MediaPrevious {
    const message = createBaseAPIV1TriggerResponse_MediaPrevious();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Audio(): APIV1TriggerResponse_Audio {
  return {};
}

export const APIV1TriggerResponse_Audio = {
  encode(
    _: APIV1TriggerResponse_Audio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Audio();
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

  fromJSON(_: any): APIV1TriggerResponse_Audio {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Audio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Audio>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Audio {
    return APIV1TriggerResponse_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Audio>, I>>(
    _: I,
  ): APIV1TriggerResponse_Audio {
    const message = createBaseAPIV1TriggerResponse_Audio();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_AudioNext(): APIV1TriggerResponse_AudioNext {
  return {};
}

export const APIV1TriggerResponse_AudioNext = {
  encode(
    _: APIV1TriggerResponse_AudioNext,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_AudioNext {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_AudioNext();
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

  fromJSON(_: any): APIV1TriggerResponse_AudioNext {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_AudioNext): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_AudioNext>, I>>(
    base?: I,
  ): APIV1TriggerResponse_AudioNext {
    return APIV1TriggerResponse_AudioNext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_AudioNext>, I>>(
    _: I,
  ): APIV1TriggerResponse_AudioNext {
    const message = createBaseAPIV1TriggerResponse_AudioNext();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_AudioPrevious(): APIV1TriggerResponse_AudioPrevious {
  return {};
}

export const APIV1TriggerResponse_AudioPrevious = {
  encode(
    _: APIV1TriggerResponse_AudioPrevious,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_AudioPrevious {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_AudioPrevious();
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

  fromJSON(_: any): APIV1TriggerResponse_AudioPrevious {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_AudioPrevious): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_AudioPrevious>, I>>(
    base?: I,
  ): APIV1TriggerResponse_AudioPrevious {
    return APIV1TriggerResponse_AudioPrevious.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1TriggerResponse_AudioPrevious>, I>,
  >(_: I): APIV1TriggerResponse_AudioPrevious {
    const message = createBaseAPIV1TriggerResponse_AudioPrevious();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_VideoInput(): APIV1TriggerResponse_VideoInput {
  return {};
}

export const APIV1TriggerResponse_VideoInput = {
  encode(
    _: APIV1TriggerResponse_VideoInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_VideoInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_VideoInput();
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

  fromJSON(_: any): APIV1TriggerResponse_VideoInput {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_VideoInput): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_VideoInput>, I>>(
    base?: I,
  ): APIV1TriggerResponse_VideoInput {
    return APIV1TriggerResponse_VideoInput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_VideoInput>, I>>(
    _: I,
  ): APIV1TriggerResponse_VideoInput {
    const message = createBaseAPIV1TriggerResponse_VideoInput();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Library(): APIV1TriggerResponse_Library {
  return {};
}

export const APIV1TriggerResponse_Library = {
  encode(
    _: APIV1TriggerResponse_Library,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Library();
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

  fromJSON(_: any): APIV1TriggerResponse_Library {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Library): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Library>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Library {
    return APIV1TriggerResponse_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Library>, I>>(
    _: I,
  ): APIV1TriggerResponse_Library {
    const message = createBaseAPIV1TriggerResponse_Library();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Next(): APIV1TriggerResponse_Next {
  return {};
}

export const APIV1TriggerResponse_Next = {
  encode(
    _: APIV1TriggerResponse_Next,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Next {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Next();
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

  fromJSON(_: any): APIV1TriggerResponse_Next {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Next): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Next>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Next {
    return APIV1TriggerResponse_Next.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Next>, I>>(
    _: I,
  ): APIV1TriggerResponse_Next {
    const message = createBaseAPIV1TriggerResponse_Next();
    return message;
  },
};

function createBaseAPIV1TriggerResponse_Previous(): APIV1TriggerResponse_Previous {
  return {};
}

export const APIV1TriggerResponse_Previous = {
  encode(
    _: APIV1TriggerResponse_Previous,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1TriggerResponse_Previous {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1TriggerResponse_Previous();
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

  fromJSON(_: any): APIV1TriggerResponse_Previous {
    return {};
  },

  toJSON(_: APIV1TriggerResponse_Previous): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1TriggerResponse_Previous>, I>>(
    base?: I,
  ): APIV1TriggerResponse_Previous {
    return APIV1TriggerResponse_Previous.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1TriggerResponse_Previous>, I>>(
    _: I,
  ): APIV1TriggerResponse_Previous {
    const message = createBaseAPIV1TriggerResponse_Previous();
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
