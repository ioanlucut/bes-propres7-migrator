/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Create {
  library?: Create_Library | undefined;
  playlist?: Create_Playlist | undefined;
  presentation?: Create_Presentation | undefined;
  templatePlaylist?: Create_TemplatePlaylist | undefined;
}

export interface Create_Library {
  source: Create_Library_Source;
}

export enum Create_Library_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  UNRECOGNIZED = -1,
}

export function create_Library_SourceFromJSON(
  object: any,
): Create_Library_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return Create_Library_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return Create_Library_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON':
      return Create_Library_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Create_Library_Source.UNRECOGNIZED;
  }
}

export function create_Library_SourceToJSON(
  object: Create_Library_Source,
): string {
  switch (object) {
    case Create_Library_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case Create_Library_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case Create_Library_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON';
    case Create_Library_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Create_Playlist {
  source: Create_Playlist_Source;
  type: Create_Playlist_Type;
}

export enum Create_Playlist_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  UNRECOGNIZED = -1,
}

export function create_Playlist_SourceFromJSON(
  object: any,
): Create_Playlist_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return Create_Playlist_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return Create_Playlist_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON':
      return Create_Playlist_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Create_Playlist_Source.UNRECOGNIZED;
  }
}

export function create_Playlist_SourceToJSON(
  object: Create_Playlist_Source,
): string {
  switch (object) {
    case Create_Playlist_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case Create_Playlist_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case Create_Playlist_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON';
    case Create_Playlist_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Create_Playlist_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PRESENTATION = 1,
  TYPE_PLANNING_CENTER = 2,
  TYPE_FOLDER = 3,
  TYPE_TEMPLATE_PLAYLIST = 4,
  UNRECOGNIZED = -1,
}

export function create_Playlist_TypeFromJSON(
  object: any,
): Create_Playlist_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return Create_Playlist_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_PRESENTATION':
      return Create_Playlist_Type.TYPE_PRESENTATION;
    case 2:
    case 'TYPE_PLANNING_CENTER':
      return Create_Playlist_Type.TYPE_PLANNING_CENTER;
    case 3:
    case 'TYPE_FOLDER':
      return Create_Playlist_Type.TYPE_FOLDER;
    case 4:
    case 'TYPE_TEMPLATE_PLAYLIST':
      return Create_Playlist_Type.TYPE_TEMPLATE_PLAYLIST;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Create_Playlist_Type.UNRECOGNIZED;
  }
}

export function create_Playlist_TypeToJSON(
  object: Create_Playlist_Type,
): string {
  switch (object) {
    case Create_Playlist_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case Create_Playlist_Type.TYPE_PRESENTATION:
      return 'TYPE_PRESENTATION';
    case Create_Playlist_Type.TYPE_PLANNING_CENTER:
      return 'TYPE_PLANNING_CENTER';
    case Create_Playlist_Type.TYPE_FOLDER:
      return 'TYPE_FOLDER';
    case Create_Playlist_Type.TYPE_TEMPLATE_PLAYLIST:
      return 'TYPE_TEMPLATE_PLAYLIST';
    case Create_Playlist_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Create_Presentation {
  source: Create_Presentation_Source;
}

export enum Create_Presentation_Source {
  SOURCE_UNKNOWN = 0,
  SOURCE_APPLICATION_MENU = 1,
  SOURCE_LIBRARY_OUTLINE_ADD_BUTTON = 2,
  SOURCE_DETAIL_ADD_BUTTON = 3,
  SOURCE_UNLINKED_HEADER = 4,
  UNRECOGNIZED = -1,
}

export function create_Presentation_SourceFromJSON(
  object: any,
): Create_Presentation_Source {
  switch (object) {
    case 0:
    case 'SOURCE_UNKNOWN':
      return Create_Presentation_Source.SOURCE_UNKNOWN;
    case 1:
    case 'SOURCE_APPLICATION_MENU':
      return Create_Presentation_Source.SOURCE_APPLICATION_MENU;
    case 2:
    case 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON':
      return Create_Presentation_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON;
    case 3:
    case 'SOURCE_DETAIL_ADD_BUTTON':
      return Create_Presentation_Source.SOURCE_DETAIL_ADD_BUTTON;
    case 4:
    case 'SOURCE_UNLINKED_HEADER':
      return Create_Presentation_Source.SOURCE_UNLINKED_HEADER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Create_Presentation_Source.UNRECOGNIZED;
  }
}

export function create_Presentation_SourceToJSON(
  object: Create_Presentation_Source,
): string {
  switch (object) {
    case Create_Presentation_Source.SOURCE_UNKNOWN:
      return 'SOURCE_UNKNOWN';
    case Create_Presentation_Source.SOURCE_APPLICATION_MENU:
      return 'SOURCE_APPLICATION_MENU';
    case Create_Presentation_Source.SOURCE_LIBRARY_OUTLINE_ADD_BUTTON:
      return 'SOURCE_LIBRARY_OUTLINE_ADD_BUTTON';
    case Create_Presentation_Source.SOURCE_DETAIL_ADD_BUTTON:
      return 'SOURCE_DETAIL_ADD_BUTTON';
    case Create_Presentation_Source.SOURCE_UNLINKED_HEADER:
      return 'SOURCE_UNLINKED_HEADER';
    case Create_Presentation_Source.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Create_TemplatePlaylist {
  totalItemCount: number;
  headerCount: number;
  placeholderCount: number;
  presentationCount: number;
  mediaCount: number;
}

function createBaseCreate(): Create {
  return {
    library: undefined,
    playlist: undefined,
    presentation: undefined,
    templatePlaylist: undefined,
  };
}

export const Create = {
  encode(
    message: Create,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.library !== undefined) {
      Create_Library.encode(message.library, writer.uint32(10).fork()).ldelim();
    }
    if (message.playlist !== undefined) {
      Create_Playlist.encode(
        message.playlist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.presentation !== undefined) {
      Create_Presentation.encode(
        message.presentation,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.templatePlaylist !== undefined) {
      Create_TemplatePlaylist.encode(
        message.templatePlaylist,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.library = Create_Library.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playlist = Create_Playlist.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.presentation = Create_Presentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.templatePlaylist = Create_TemplatePlaylist.decode(
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

  fromJSON(object: any): Create {
    return {
      library: isSet(object.library)
        ? Create_Library.fromJSON(object.library)
        : undefined,
      playlist: isSet(object.playlist)
        ? Create_Playlist.fromJSON(object.playlist)
        : undefined,
      presentation: isSet(object.presentation)
        ? Create_Presentation.fromJSON(object.presentation)
        : undefined,
      templatePlaylist: isSet(object.templatePlaylist)
        ? Create_TemplatePlaylist.fromJSON(object.templatePlaylist)
        : undefined,
    };
  },

  toJSON(message: Create): unknown {
    const obj: any = {};
    if (message.library !== undefined) {
      obj.library = Create_Library.toJSON(message.library);
    }
    if (message.playlist !== undefined) {
      obj.playlist = Create_Playlist.toJSON(message.playlist);
    }
    if (message.presentation !== undefined) {
      obj.presentation = Create_Presentation.toJSON(message.presentation);
    }
    if (message.templatePlaylist !== undefined) {
      obj.templatePlaylist = Create_TemplatePlaylist.toJSON(
        message.templatePlaylist,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Create>, I>>(base?: I): Create {
    return Create.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Create>, I>>(object: I): Create {
    const message = createBaseCreate();
    message.library =
      object.library !== undefined && object.library !== null
        ? Create_Library.fromPartial(object.library)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? Create_Playlist.fromPartial(object.playlist)
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? Create_Presentation.fromPartial(object.presentation)
        : undefined;
    message.templatePlaylist =
      object.templatePlaylist !== undefined && object.templatePlaylist !== null
        ? Create_TemplatePlaylist.fromPartial(object.templatePlaylist)
        : undefined;
    return message;
  },
};

function createBaseCreate_Library(): Create_Library {
  return { source: 0 };
}

export const Create_Library = {
  encode(
    message: Create_Library,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create_Library {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreate_Library();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Create_Library {
    return {
      source: isSet(object.source)
        ? create_Library_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: Create_Library): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = create_Library_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Create_Library>, I>>(
    base?: I,
  ): Create_Library {
    return Create_Library.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Create_Library>, I>>(
    object: I,
  ): Create_Library {
    const message = createBaseCreate_Library();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseCreate_Playlist(): Create_Playlist {
  return { source: 0, type: 0 };
}

export const Create_Playlist = {
  encode(
    message: Create_Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create_Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreate_Playlist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
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

  fromJSON(object: any): Create_Playlist {
    return {
      source: isSet(object.source)
        ? create_Playlist_SourceFromJSON(object.source)
        : 0,
      type: isSet(object.type) ? create_Playlist_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Create_Playlist): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = create_Playlist_SourceToJSON(message.source);
    }
    if (message.type !== 0) {
      obj.type = create_Playlist_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Create_Playlist>, I>>(
    base?: I,
  ): Create_Playlist {
    return Create_Playlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Create_Playlist>, I>>(
    object: I,
  ): Create_Playlist {
    const message = createBaseCreate_Playlist();
    message.source = object.source ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseCreate_Presentation(): Create_Presentation {
  return { source: 0 };
}

export const Create_Presentation = {
  encode(
    message: Create_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Create_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreate_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.source = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Create_Presentation {
    return {
      source: isSet(object.source)
        ? create_Presentation_SourceFromJSON(object.source)
        : 0,
    };
  },

  toJSON(message: Create_Presentation): unknown {
    const obj: any = {};
    if (message.source !== 0) {
      obj.source = create_Presentation_SourceToJSON(message.source);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Create_Presentation>, I>>(
    base?: I,
  ): Create_Presentation {
    return Create_Presentation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Create_Presentation>, I>>(
    object: I,
  ): Create_Presentation {
    const message = createBaseCreate_Presentation();
    message.source = object.source ?? 0;
    return message;
  },
};

function createBaseCreate_TemplatePlaylist(): Create_TemplatePlaylist {
  return {
    totalItemCount: 0,
    headerCount: 0,
    placeholderCount: 0,
    presentationCount: 0,
    mediaCount: 0,
  };
}

export const Create_TemplatePlaylist = {
  encode(
    message: Create_TemplatePlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalItemCount !== 0) {
      writer.uint32(8).int32(message.totalItemCount);
    }
    if (message.headerCount !== 0) {
      writer.uint32(16).int32(message.headerCount);
    }
    if (message.placeholderCount !== 0) {
      writer.uint32(24).int32(message.placeholderCount);
    }
    if (message.presentationCount !== 0) {
      writer.uint32(32).int32(message.presentationCount);
    }
    if (message.mediaCount !== 0) {
      writer.uint32(40).int32(message.mediaCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Create_TemplatePlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreate_TemplatePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalItemCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.headerCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.placeholderCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.presentationCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mediaCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Create_TemplatePlaylist {
    return {
      totalItemCount: isSet(object.totalItemCount)
        ? globalThis.Number(object.totalItemCount)
        : 0,
      headerCount: isSet(object.headerCount)
        ? globalThis.Number(object.headerCount)
        : 0,
      placeholderCount: isSet(object.placeholderCount)
        ? globalThis.Number(object.placeholderCount)
        : 0,
      presentationCount: isSet(object.presentationCount)
        ? globalThis.Number(object.presentationCount)
        : 0,
      mediaCount: isSet(object.mediaCount)
        ? globalThis.Number(object.mediaCount)
        : 0,
    };
  },

  toJSON(message: Create_TemplatePlaylist): unknown {
    const obj: any = {};
    if (message.totalItemCount !== 0) {
      obj.totalItemCount = Math.round(message.totalItemCount);
    }
    if (message.headerCount !== 0) {
      obj.headerCount = Math.round(message.headerCount);
    }
    if (message.placeholderCount !== 0) {
      obj.placeholderCount = Math.round(message.placeholderCount);
    }
    if (message.presentationCount !== 0) {
      obj.presentationCount = Math.round(message.presentationCount);
    }
    if (message.mediaCount !== 0) {
      obj.mediaCount = Math.round(message.mediaCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Create_TemplatePlaylist>, I>>(
    base?: I,
  ): Create_TemplatePlaylist {
    return Create_TemplatePlaylist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Create_TemplatePlaylist>, I>>(
    object: I,
  ): Create_TemplatePlaylist {
    const message = createBaseCreate_TemplatePlaylist();
    message.totalItemCount = object.totalItemCount ?? 0;
    message.headerCount = object.headerCount ?? 0;
    message.placeholderCount = object.placeholderCount ?? 0;
    message.presentationCount = object.presentationCount ?? 0;
    message.mediaCount = object.mediaCount ?? 0;
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
