/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { MultiTracks_Import } from './analyticsMultiTracks';

export const protobufPackage = 'rv.analytics';

export interface Import {
  songSelect?: Import_SongSelect | undefined;
  multitracks?: MultiTracks_Import | undefined;
}

export interface Import_SongSelect {
  templateSlideTextElementCount: number;
  importIntoPlaylist: boolean;
  lineDelimiter: Import_SongSelect_LineDelimiter;
  lineDelimiterCount: number;
  didOpenEditView: boolean;
}

export enum Import_SongSelect_LineDelimiter {
  LINE_DELIMITER_UNKNOWN = 0,
  LINE_DELIMITER_LINE_BREAK = 1,
  LINE_DELIMITER_PARAGRAPH_BREAK = 2,
  UNRECOGNIZED = -1,
}

export function import_SongSelect_LineDelimiterFromJSON(
  object: any,
): Import_SongSelect_LineDelimiter {
  switch (object) {
    case 0:
    case 'LINE_DELIMITER_UNKNOWN':
      return Import_SongSelect_LineDelimiter.LINE_DELIMITER_UNKNOWN;
    case 1:
    case 'LINE_DELIMITER_LINE_BREAK':
      return Import_SongSelect_LineDelimiter.LINE_DELIMITER_LINE_BREAK;
    case 2:
    case 'LINE_DELIMITER_PARAGRAPH_BREAK':
      return Import_SongSelect_LineDelimiter.LINE_DELIMITER_PARAGRAPH_BREAK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Import_SongSelect_LineDelimiter.UNRECOGNIZED;
  }
}

export function import_SongSelect_LineDelimiterToJSON(
  object: Import_SongSelect_LineDelimiter,
): string {
  switch (object) {
    case Import_SongSelect_LineDelimiter.LINE_DELIMITER_UNKNOWN:
      return 'LINE_DELIMITER_UNKNOWN';
    case Import_SongSelect_LineDelimiter.LINE_DELIMITER_LINE_BREAK:
      return 'LINE_DELIMITER_LINE_BREAK';
    case Import_SongSelect_LineDelimiter.LINE_DELIMITER_PARAGRAPH_BREAK:
      return 'LINE_DELIMITER_PARAGRAPH_BREAK';
    case Import_SongSelect_LineDelimiter.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseImport(): Import {
  return { songSelect: undefined, multitracks: undefined };
}

export const Import = {
  encode(
    message: Import,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.songSelect !== undefined) {
      Import_SongSelect.encode(
        message.songSelect,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.multitracks !== undefined) {
      MultiTracks_Import.encode(
        message.multitracks,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Import {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.songSelect = Import_SongSelect.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.multitracks = MultiTracks_Import.decode(
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

  fromJSON(object: any): Import {
    return {
      songSelect: isSet(object.songSelect)
        ? Import_SongSelect.fromJSON(object.songSelect)
        : undefined,
      multitracks: isSet(object.multitracks)
        ? MultiTracks_Import.fromJSON(object.multitracks)
        : undefined,
    };
  },

  toJSON(message: Import): unknown {
    const obj: any = {};
    if (message.songSelect !== undefined) {
      obj.songSelect = Import_SongSelect.toJSON(message.songSelect);
    }
    if (message.multitracks !== undefined) {
      obj.multitracks = MultiTracks_Import.toJSON(message.multitracks);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Import>, I>>(base?: I): Import {
    return Import.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Import>, I>>(object: I): Import {
    const message = createBaseImport();
    message.songSelect =
      object.songSelect !== undefined && object.songSelect !== null
        ? Import_SongSelect.fromPartial(object.songSelect)
        : undefined;
    message.multitracks =
      object.multitracks !== undefined && object.multitracks !== null
        ? MultiTracks_Import.fromPartial(object.multitracks)
        : undefined;
    return message;
  },
};

function createBaseImport_SongSelect(): Import_SongSelect {
  return {
    templateSlideTextElementCount: 0,
    importIntoPlaylist: false,
    lineDelimiter: 0,
    lineDelimiterCount: 0,
    didOpenEditView: false,
  };
}

export const Import_SongSelect = {
  encode(
    message: Import_SongSelect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.templateSlideTextElementCount !== 0) {
      writer.uint32(8).int32(message.templateSlideTextElementCount);
    }
    if (message.importIntoPlaylist !== false) {
      writer.uint32(16).bool(message.importIntoPlaylist);
    }
    if (message.lineDelimiter !== 0) {
      writer.uint32(24).int32(message.lineDelimiter);
    }
    if (message.lineDelimiterCount !== 0) {
      writer.uint32(32).int32(message.lineDelimiterCount);
    }
    if (message.didOpenEditView !== false) {
      writer.uint32(40).bool(message.didOpenEditView);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Import_SongSelect {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImport_SongSelect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.templateSlideTextElementCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.importIntoPlaylist = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lineDelimiter = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lineDelimiterCount = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.didOpenEditView = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Import_SongSelect {
    return {
      templateSlideTextElementCount: isSet(object.templateSlideTextElementCount)
        ? globalThis.Number(object.templateSlideTextElementCount)
        : 0,
      importIntoPlaylist: isSet(object.importIntoPlaylist)
        ? globalThis.Boolean(object.importIntoPlaylist)
        : false,
      lineDelimiter: isSet(object.lineDelimiter)
        ? import_SongSelect_LineDelimiterFromJSON(object.lineDelimiter)
        : 0,
      lineDelimiterCount: isSet(object.lineDelimiterCount)
        ? globalThis.Number(object.lineDelimiterCount)
        : 0,
      didOpenEditView: isSet(object.didOpenEditView)
        ? globalThis.Boolean(object.didOpenEditView)
        : false,
    };
  },

  toJSON(message: Import_SongSelect): unknown {
    const obj: any = {};
    if (message.templateSlideTextElementCount !== 0) {
      obj.templateSlideTextElementCount = Math.round(
        message.templateSlideTextElementCount,
      );
    }
    if (message.importIntoPlaylist !== false) {
      obj.importIntoPlaylist = message.importIntoPlaylist;
    }
    if (message.lineDelimiter !== 0) {
      obj.lineDelimiter = import_SongSelect_LineDelimiterToJSON(
        message.lineDelimiter,
      );
    }
    if (message.lineDelimiterCount !== 0) {
      obj.lineDelimiterCount = Math.round(message.lineDelimiterCount);
    }
    if (message.didOpenEditView !== false) {
      obj.didOpenEditView = message.didOpenEditView;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Import_SongSelect>, I>>(
    base?: I,
  ): Import_SongSelect {
    return Import_SongSelect.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Import_SongSelect>, I>>(
    object: I,
  ): Import_SongSelect {
    const message = createBaseImport_SongSelect();
    message.templateSlideTextElementCount =
      object.templateSlideTextElementCount ?? 0;
    message.importIntoPlaylist = object.importIntoPlaylist ?? false;
    message.lineDelimiter = object.lineDelimiter ?? 0;
    message.lineDelimiterCount = object.lineDelimiterCount ?? 0;
    message.didOpenEditView = object.didOpenEditView ?? false;
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
