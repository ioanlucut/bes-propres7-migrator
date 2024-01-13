/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { PlaylistItem } from './playlist';

export const protobufPackage = 'rv.data';

export interface PlaylistTemplate {
  templates: PlaylistTemplate_Template[];
}

export interface PlaylistTemplate_Template {
  name: string;
  playlistItems: PlaylistItem[];
}

function createBasePlaylistTemplate(): PlaylistTemplate {
  return { templates: [] };
}

export const PlaylistTemplate = {
  encode(
    message: PlaylistTemplate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.templates) {
      PlaylistTemplate_Template.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistTemplate {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistTemplate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.templates.push(
            PlaylistTemplate_Template.decode(reader, reader.uint32()),
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

  fromJSON(object: any): PlaylistTemplate {
    return {
      templates: globalThis.Array.isArray(object?.templates)
        ? object.templates.map((e: any) =>
            PlaylistTemplate_Template.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: PlaylistTemplate): unknown {
    const obj: any = {};
    if (message.templates?.length) {
      obj.templates = message.templates.map((e) =>
        PlaylistTemplate_Template.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistTemplate>, I>>(
    base?: I,
  ): PlaylistTemplate {
    return PlaylistTemplate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaylistTemplate>, I>>(
    object: I,
  ): PlaylistTemplate {
    const message = createBasePlaylistTemplate();
    message.templates =
      object.templates?.map((e) => PlaylistTemplate_Template.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBasePlaylistTemplate_Template(): PlaylistTemplate_Template {
  return { name: '', playlistItems: [] };
}

export const PlaylistTemplate_Template = {
  encode(
    message: PlaylistTemplate_Template,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.playlistItems) {
      PlaylistItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlaylistTemplate_Template {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistTemplate_Template();
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
          if (tag !== 18) {
            break;
          }

          message.playlistItems.push(
            PlaylistItem.decode(reader, reader.uint32()),
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

  fromJSON(object: any): PlaylistTemplate_Template {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      playlistItems: globalThis.Array.isArray(object?.playlistItems)
        ? object.playlistItems.map((e: any) => PlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaylistTemplate_Template): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.playlistItems?.length) {
      obj.playlistItems = message.playlistItems.map((e) =>
        PlaylistItem.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistTemplate_Template>, I>>(
    base?: I,
  ): PlaylistTemplate_Template {
    return PlaylistTemplate_Template.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlaylistTemplate_Template>, I>>(
    object: I,
  ): PlaylistTemplate_Template {
    const message = createBasePlaylistTemplate_Template();
    message.name = object.name ?? '';
    message.playlistItems =
      object.playlistItems?.map((e) => PlaylistItem.fromPartial(e)) || [];
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
