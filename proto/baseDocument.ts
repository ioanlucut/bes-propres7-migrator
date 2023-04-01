/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo, URL, UUID, Version } from './basicTypes';
import { Workspace } from './workspace';

export const protobufPackage = 'rv.data';

export interface Document {
  applicationInfo: ApplicationInfo | undefined;
  uuid: UUID | undefined;
  usesRelativeUrls: boolean;
  workspace: Workspace | undefined;
}

export interface CacheInfo {
  uuid: UUID | undefined;
  applicationVersion: Version | undefined;
  url: URL | undefined;
  lastModifiedDate: number;
}

export interface PVPDocumentState {
  primaryPlaylist: PVPDocumentState_PlaylistState | undefined;
  alternatePlaylist: PVPDocumentState_PlaylistState | undefined;
  playlistSplitIsVertical: boolean;
  targetedLayer: UUID | undefined;
  selectedLayer: UUID | undefined;
  lockedLayer: UUID | undefined;
  liveVideoPlaylistScale: number;
  splitViewDividerPosition: number;
}

export interface PVPDocumentState_PlaylistState {
  uuid: UUID | undefined;
  layout: PVPDocumentState_PlaylistState_LayoutType;
  itemScale: number;
}

export enum PVPDocumentState_PlaylistState_LayoutType {
  LAYOUT_TYPE_CUE = 0,
  LAYOUT_TYPE_ACTION = 1,
  LAYOUT_TYPE_LIVE_VIDEO = 2,
  UNRECOGNIZED = -1,
}

export function pVPDocumentState_PlaylistState_LayoutTypeFromJSON(
  object: any,
): PVPDocumentState_PlaylistState_LayoutType {
  switch (object) {
    case 0:
    case 'LAYOUT_TYPE_CUE':
      return PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_CUE;
    case 1:
    case 'LAYOUT_TYPE_ACTION':
      return PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_ACTION;
    case 2:
    case 'LAYOUT_TYPE_LIVE_VIDEO':
      return PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_LIVE_VIDEO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PVPDocumentState_PlaylistState_LayoutType.UNRECOGNIZED;
  }
}

export function pVPDocumentState_PlaylistState_LayoutTypeToJSON(
  object: PVPDocumentState_PlaylistState_LayoutType,
): string {
  switch (object) {
    case PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_CUE:
      return 'LAYOUT_TYPE_CUE';
    case PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_ACTION:
      return 'LAYOUT_TYPE_ACTION';
    case PVPDocumentState_PlaylistState_LayoutType.LAYOUT_TYPE_LIVE_VIDEO:
      return 'LAYOUT_TYPE_LIVE_VIDEO';
    case PVPDocumentState_PlaylistState_LayoutType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseDocument(): Document {
  return {
    applicationInfo: undefined,
    uuid: undefined,
    usesRelativeUrls: false,
    workspace: undefined,
  };
}

export const Document = {
  encode(
    message: Document,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.usesRelativeUrls === true) {
      writer.uint32(24).bool(message.usesRelativeUrls);
    }
    if (message.workspace !== undefined) {
      Workspace.encode(message.workspace, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.usesRelativeUrls = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.workspace = Workspace.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Document {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      usesRelativeUrls: isSet(object.usesRelativeUrls)
        ? Boolean(object.usesRelativeUrls)
        : false,
      workspace: isSet(object.workspace)
        ? Workspace.fromJSON(object.workspace)
        : undefined,
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    message.applicationInfo !== undefined &&
      (obj.applicationInfo = message.applicationInfo
        ? ApplicationInfo.toJSON(message.applicationInfo)
        : undefined);
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.usesRelativeUrls !== undefined &&
      (obj.usesRelativeUrls = message.usesRelativeUrls);
    message.workspace !== undefined &&
      (obj.workspace = message.workspace
        ? Workspace.toJSON(message.workspace)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Document>, I>>(base?: I): Document {
    return Document.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.usesRelativeUrls = object.usesRelativeUrls ?? false;
    message.workspace =
      object.workspace !== undefined && object.workspace !== null
        ? Workspace.fromPartial(object.workspace)
        : undefined;
    return message;
  },
};

function createBaseCacheInfo(): CacheInfo {
  return {
    uuid: undefined,
    applicationVersion: undefined,
    url: undefined,
    lastModifiedDate: 0,
  };
}

export const CacheInfo = {
  encode(
    message: CacheInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      Version.encode(
        message.applicationVersion,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastModifiedDate !== 0) {
      writer.uint32(33).double(message.lastModifiedDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CacheInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCacheInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.applicationVersion = Version.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.lastModifiedDate = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CacheInfo {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      applicationVersion: isSet(object.applicationVersion)
        ? Version.fromJSON(object.applicationVersion)
        : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      lastModifiedDate: isSet(object.lastModifiedDate)
        ? Number(object.lastModifiedDate)
        : 0,
    };
  },

  toJSON(message: CacheInfo): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion
        ? Version.toJSON(message.applicationVersion)
        : undefined);
    message.url !== undefined &&
      (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.lastModifiedDate !== undefined &&
      (obj.lastModifiedDate = message.lastModifiedDate);
    return obj;
  },

  create<I extends Exact<DeepPartial<CacheInfo>, I>>(base?: I): CacheInfo {
    return CacheInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CacheInfo>, I>>(
    object: I,
  ): CacheInfo {
    const message = createBaseCacheInfo();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.applicationVersion =
      object.applicationVersion !== undefined &&
      object.applicationVersion !== null
        ? Version.fromPartial(object.applicationVersion)
        : undefined;
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.lastModifiedDate = object.lastModifiedDate ?? 0;
    return message;
  },
};

function createBasePVPDocumentState(): PVPDocumentState {
  return {
    primaryPlaylist: undefined,
    alternatePlaylist: undefined,
    playlistSplitIsVertical: false,
    targetedLayer: undefined,
    selectedLayer: undefined,
    lockedLayer: undefined,
    liveVideoPlaylistScale: 0,
    splitViewDividerPosition: 0,
  };
}

export const PVPDocumentState = {
  encode(
    message: PVPDocumentState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.primaryPlaylist !== undefined) {
      PVPDocumentState_PlaylistState.encode(
        message.primaryPlaylist,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.alternatePlaylist !== undefined) {
      PVPDocumentState_PlaylistState.encode(
        message.alternatePlaylist,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.playlistSplitIsVertical === true) {
      writer.uint32(24).bool(message.playlistSplitIsVertical);
    }
    if (message.targetedLayer !== undefined) {
      UUID.encode(message.targetedLayer, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectedLayer !== undefined) {
      UUID.encode(message.selectedLayer, writer.uint32(42).fork()).ldelim();
    }
    if (message.lockedLayer !== undefined) {
      UUID.encode(message.lockedLayer, writer.uint32(50).fork()).ldelim();
    }
    if (message.liveVideoPlaylistScale !== 0) {
      writer.uint32(57).double(message.liveVideoPlaylistScale);
    }
    if (message.splitViewDividerPosition !== 0) {
      writer.uint32(65).double(message.splitViewDividerPosition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PVPDocumentState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePVPDocumentState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.primaryPlaylist = PVPDocumentState_PlaylistState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.alternatePlaylist = PVPDocumentState_PlaylistState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.playlistSplitIsVertical = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.targetedLayer = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.selectedLayer = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.lockedLayer = UUID.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 57) {
            break;
          }

          message.liveVideoPlaylistScale = reader.double();
          continue;
        case 8:
          if (tag != 65) {
            break;
          }

          message.splitViewDividerPosition = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PVPDocumentState {
    return {
      primaryPlaylist: isSet(object.primaryPlaylist)
        ? PVPDocumentState_PlaylistState.fromJSON(object.primaryPlaylist)
        : undefined,
      alternatePlaylist: isSet(object.alternatePlaylist)
        ? PVPDocumentState_PlaylistState.fromJSON(object.alternatePlaylist)
        : undefined,
      playlistSplitIsVertical: isSet(object.playlistSplitIsVertical)
        ? Boolean(object.playlistSplitIsVertical)
        : false,
      targetedLayer: isSet(object.targetedLayer)
        ? UUID.fromJSON(object.targetedLayer)
        : undefined,
      selectedLayer: isSet(object.selectedLayer)
        ? UUID.fromJSON(object.selectedLayer)
        : undefined,
      lockedLayer: isSet(object.lockedLayer)
        ? UUID.fromJSON(object.lockedLayer)
        : undefined,
      liveVideoPlaylistScale: isSet(object.liveVideoPlaylistScale)
        ? Number(object.liveVideoPlaylistScale)
        : 0,
      splitViewDividerPosition: isSet(object.splitViewDividerPosition)
        ? Number(object.splitViewDividerPosition)
        : 0,
    };
  },

  toJSON(message: PVPDocumentState): unknown {
    const obj: any = {};
    message.primaryPlaylist !== undefined &&
      (obj.primaryPlaylist = message.primaryPlaylist
        ? PVPDocumentState_PlaylistState.toJSON(message.primaryPlaylist)
        : undefined);
    message.alternatePlaylist !== undefined &&
      (obj.alternatePlaylist = message.alternatePlaylist
        ? PVPDocumentState_PlaylistState.toJSON(message.alternatePlaylist)
        : undefined);
    message.playlistSplitIsVertical !== undefined &&
      (obj.playlistSplitIsVertical = message.playlistSplitIsVertical);
    message.targetedLayer !== undefined &&
      (obj.targetedLayer = message.targetedLayer
        ? UUID.toJSON(message.targetedLayer)
        : undefined);
    message.selectedLayer !== undefined &&
      (obj.selectedLayer = message.selectedLayer
        ? UUID.toJSON(message.selectedLayer)
        : undefined);
    message.lockedLayer !== undefined &&
      (obj.lockedLayer = message.lockedLayer
        ? UUID.toJSON(message.lockedLayer)
        : undefined);
    message.liveVideoPlaylistScale !== undefined &&
      (obj.liveVideoPlaylistScale = message.liveVideoPlaylistScale);
    message.splitViewDividerPosition !== undefined &&
      (obj.splitViewDividerPosition = message.splitViewDividerPosition);
    return obj;
  },

  create<I extends Exact<DeepPartial<PVPDocumentState>, I>>(
    base?: I,
  ): PVPDocumentState {
    return PVPDocumentState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PVPDocumentState>, I>>(
    object: I,
  ): PVPDocumentState {
    const message = createBasePVPDocumentState();
    message.primaryPlaylist =
      object.primaryPlaylist !== undefined && object.primaryPlaylist !== null
        ? PVPDocumentState_PlaylistState.fromPartial(object.primaryPlaylist)
        : undefined;
    message.alternatePlaylist =
      object.alternatePlaylist !== undefined &&
      object.alternatePlaylist !== null
        ? PVPDocumentState_PlaylistState.fromPartial(object.alternatePlaylist)
        : undefined;
    message.playlistSplitIsVertical = object.playlistSplitIsVertical ?? false;
    message.targetedLayer =
      object.targetedLayer !== undefined && object.targetedLayer !== null
        ? UUID.fromPartial(object.targetedLayer)
        : undefined;
    message.selectedLayer =
      object.selectedLayer !== undefined && object.selectedLayer !== null
        ? UUID.fromPartial(object.selectedLayer)
        : undefined;
    message.lockedLayer =
      object.lockedLayer !== undefined && object.lockedLayer !== null
        ? UUID.fromPartial(object.lockedLayer)
        : undefined;
    message.liveVideoPlaylistScale = object.liveVideoPlaylistScale ?? 0;
    message.splitViewDividerPosition = object.splitViewDividerPosition ?? 0;
    return message;
  },
};

function createBasePVPDocumentState_PlaylistState(): PVPDocumentState_PlaylistState {
  return { uuid: undefined, layout: 0, itemScale: 0 };
}

export const PVPDocumentState_PlaylistState = {
  encode(
    message: PVPDocumentState_PlaylistState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.layout !== 0) {
      writer.uint32(24).int32(message.layout);
    }
    if (message.itemScale !== 0) {
      writer.uint32(33).double(message.itemScale);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PVPDocumentState_PlaylistState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePVPDocumentState_PlaylistState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.layout = reader.int32() as any;
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.itemScale = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PVPDocumentState_PlaylistState {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      layout: isSet(object.layout)
        ? pVPDocumentState_PlaylistState_LayoutTypeFromJSON(object.layout)
        : 0,
      itemScale: isSet(object.itemScale) ? Number(object.itemScale) : 0,
    };
  },

  toJSON(message: PVPDocumentState_PlaylistState): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.layout !== undefined &&
      (obj.layout = pVPDocumentState_PlaylistState_LayoutTypeToJSON(
        message.layout,
      ));
    message.itemScale !== undefined && (obj.itemScale = message.itemScale);
    return obj;
  },

  create<I extends Exact<DeepPartial<PVPDocumentState_PlaylistState>, I>>(
    base?: I,
  ): PVPDocumentState_PlaylistState {
    return PVPDocumentState_PlaylistState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PVPDocumentState_PlaylistState>, I>>(
    object: I,
  ): PVPDocumentState_PlaylistState {
    const message = createBasePVPDocumentState_PlaylistState();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.layout = object.layout ?? 0;
    message.itemScale = object.itemScale ?? 0;
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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
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
