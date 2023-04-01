/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import {
  Action,
  Action_ContentDestination,
  action_ContentDestinationFromJSON,
  action_ContentDestinationToJSON,
} from './action';
import { Color, MusicKeyScale, URL, UUID } from './basicTypes';
import { Cue } from './cue';
import { HotKey } from './hotKey';
import {
  PlanningCenterPlan,
  PlanningCenterPlan_PlanItem,
} from './planningCenter';

export const protobufPackage = 'rv.data';

export interface Playlist {
  uuid: UUID | undefined;
  name: string;
  type: Playlist_Type;
  expanded: boolean;
  targetedLayerUuid: UUID | undefined;
  smartDirectoryPath: URL | undefined;
  hotKey: HotKey | undefined;
  cues: Cue[];
  children: Playlist[];
  timecodeEnabled: boolean;
  timing: Playlist_TimingType;
  startupInfo: Playlist_StartupInfo | undefined;
  playlists?: Playlist_PlaylistArray | undefined;
  items?: Playlist_PlaylistItems | undefined;
  smartDirectory?: Playlist_FolderDirectory | undefined;
  pcoPlan?: PlanningCenterPlan | undefined;
}

export enum Playlist_Type {
  TYPE_UNKNOWN = 0,
  TYPE_PLAYLIST = 1,
  TYPE_GROUP = 2,
  TYPE_SMART = 3,
  TYPE_ROOT = 4,
  UNRECOGNIZED = -1,
}

export function playlist_TypeFromJSON(object: any): Playlist_Type {
  switch (object) {
    case 0:
    case 'TYPE_UNKNOWN':
      return Playlist_Type.TYPE_UNKNOWN;
    case 1:
    case 'TYPE_PLAYLIST':
      return Playlist_Type.TYPE_PLAYLIST;
    case 2:
    case 'TYPE_GROUP':
      return Playlist_Type.TYPE_GROUP;
    case 3:
    case 'TYPE_SMART':
      return Playlist_Type.TYPE_SMART;
    case 4:
    case 'TYPE_ROOT':
      return Playlist_Type.TYPE_ROOT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Playlist_Type.UNRECOGNIZED;
  }
}

export function playlist_TypeToJSON(object: Playlist_Type): string {
  switch (object) {
    case Playlist_Type.TYPE_UNKNOWN:
      return 'TYPE_UNKNOWN';
    case Playlist_Type.TYPE_PLAYLIST:
      return 'TYPE_PLAYLIST';
    case Playlist_Type.TYPE_GROUP:
      return 'TYPE_GROUP';
    case Playlist_Type.TYPE_SMART:
      return 'TYPE_SMART';
    case Playlist_Type.TYPE_ROOT:
      return 'TYPE_ROOT';
    case Playlist_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Playlist_TimingType {
  TIMING_TYPE_NONE = 0,
  TIMING_TYPE_TIMECODE = 1,
  TIMING_TYPE_TIME_OF_DAY = 2,
  UNRECOGNIZED = -1,
}

export function playlist_TimingTypeFromJSON(object: any): Playlist_TimingType {
  switch (object) {
    case 0:
    case 'TIMING_TYPE_NONE':
      return Playlist_TimingType.TIMING_TYPE_NONE;
    case 1:
    case 'TIMING_TYPE_TIMECODE':
      return Playlist_TimingType.TIMING_TYPE_TIMECODE;
    case 2:
    case 'TIMING_TYPE_TIME_OF_DAY':
      return Playlist_TimingType.TIMING_TYPE_TIME_OF_DAY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Playlist_TimingType.UNRECOGNIZED;
  }
}

export function playlist_TimingTypeToJSON(object: Playlist_TimingType): string {
  switch (object) {
    case Playlist_TimingType.TIMING_TYPE_NONE:
      return 'TIMING_TYPE_NONE';
    case Playlist_TimingType.TIMING_TYPE_TIMECODE:
      return 'TIMING_TYPE_TIMECODE';
    case Playlist_TimingType.TIMING_TYPE_TIME_OF_DAY:
      return 'TIMING_TYPE_TIME_OF_DAY';
    case Playlist_TimingType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Playlist_PlaylistArray {
  playlists: Playlist[];
}

export interface Playlist_PlaylistItems {
  items: PlaylistItem[];
}

export interface Playlist_FolderDirectory {
  smartDirectory: URL | undefined;
  importBehavior: Playlist_FolderDirectory_ImportBehavior;
}

export enum Playlist_FolderDirectory_ImportBehavior {
  IMPORT_BEHAVIOR_BACKGROUND = 0,
  IMPORT_BEHAVIOR_FOREGROUND = 1,
  UNRECOGNIZED = -1,
}

export function playlist_FolderDirectory_ImportBehaviorFromJSON(
  object: any,
): Playlist_FolderDirectory_ImportBehavior {
  switch (object) {
    case 0:
    case 'IMPORT_BEHAVIOR_BACKGROUND':
      return Playlist_FolderDirectory_ImportBehavior.IMPORT_BEHAVIOR_BACKGROUND;
    case 1:
    case 'IMPORT_BEHAVIOR_FOREGROUND':
      return Playlist_FolderDirectory_ImportBehavior.IMPORT_BEHAVIOR_FOREGROUND;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Playlist_FolderDirectory_ImportBehavior.UNRECOGNIZED;
  }
}

export function playlist_FolderDirectory_ImportBehaviorToJSON(
  object: Playlist_FolderDirectory_ImportBehavior,
): string {
  switch (object) {
    case Playlist_FolderDirectory_ImportBehavior.IMPORT_BEHAVIOR_BACKGROUND:
      return 'IMPORT_BEHAVIOR_BACKGROUND';
    case Playlist_FolderDirectory_ImportBehavior.IMPORT_BEHAVIOR_FOREGROUND:
      return 'IMPORT_BEHAVIOR_FOREGROUND';
    case Playlist_FolderDirectory_ImportBehavior.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Playlist_Tag {
  color: Color | undefined;
  name: string;
  uuid: UUID | undefined;
}

export interface Playlist_StartupInfo {
  triggerOnStartup: boolean;
}

export interface PlaylistItem {
  uuid: UUID | undefined;
  name: string;
  tags: UUID[];
  isHidden: boolean;
  header?: PlaylistItem_Header | undefined;
  presentation?: PlaylistItem_Presentation | undefined;
  cue?: Cue | undefined;
  planningCenter?: PlaylistItem_PlanningCenter | undefined;
  placeholder?: PlaylistItem_Placeholder | undefined;
}

export interface PlaylistItem_Header {
  color: Color | undefined;
  actions: Action[];
}

export interface PlaylistItem_Presentation {
  documentPath: URL | undefined;
  arrangement: UUID | undefined;
  contentDestination: Action_ContentDestination;
  userMusicKey: MusicKeyScale | undefined;
}

export interface PlaylistItem_PlanningCenter {
  item: PlanningCenterPlan_PlanItem | undefined;
  linkedData: PlaylistItem | undefined;
}

export interface PlaylistItem_Placeholder {
  linkedData: PlaylistItem | undefined;
}

function createBasePlaylist(): Playlist {
  return {
    uuid: undefined,
    name: '',
    type: 0,
    expanded: false,
    targetedLayerUuid: undefined,
    smartDirectoryPath: undefined,
    hotKey: undefined,
    cues: [],
    children: [],
    timecodeEnabled: false,
    timing: 0,
    startupInfo: undefined,
    playlists: undefined,
    items: undefined,
    smartDirectory: undefined,
    pcoPlan: undefined,
  };
}

export const Playlist = {
  encode(
    message: Playlist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.expanded === true) {
      writer.uint32(32).bool(message.expanded);
    }
    if (message.targetedLayerUuid !== undefined) {
      UUID.encode(message.targetedLayerUuid, writer.uint32(42).fork()).ldelim();
    }
    if (message.smartDirectoryPath !== undefined) {
      URL.encode(message.smartDirectoryPath, writer.uint32(50).fork()).ldelim();
    }
    if (message.hotKey !== undefined) {
      HotKey.encode(message.hotKey, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.cues) {
      Cue.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.children) {
      Playlist.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.timecodeEnabled === true) {
      writer.uint32(80).bool(message.timecodeEnabled);
    }
    if (message.timing !== 0) {
      writer.uint32(88).int32(message.timing);
    }
    if (message.startupInfo !== undefined) {
      Playlist_StartupInfo.encode(
        message.startupInfo,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.playlists !== undefined) {
      Playlist_PlaylistArray.encode(
        message.playlists,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.items !== undefined) {
      Playlist_PlaylistItems.encode(
        message.items,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.smartDirectory !== undefined) {
      Playlist_FolderDirectory.encode(
        message.smartDirectory,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.pcoPlan !== undefined) {
      PlanningCenterPlan.encode(
        message.pcoPlan,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Playlist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.expanded = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.targetedLayerUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.smartDirectoryPath = URL.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.hotKey = HotKey.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.cues.push(Cue.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.children.push(Playlist.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.timecodeEnabled = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.timing = reader.int32() as any;
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.startupInfo = Playlist_StartupInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.playlists = Playlist_PlaylistArray.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.items = Playlist_PlaylistItems.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.smartDirectory = Playlist_FolderDirectory.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.pcoPlan = PlanningCenterPlan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      type: isSet(object.type) ? playlist_TypeFromJSON(object.type) : 0,
      expanded: isSet(object.expanded) ? Boolean(object.expanded) : false,
      targetedLayerUuid: isSet(object.targetedLayerUuid)
        ? UUID.fromJSON(object.targetedLayerUuid)
        : undefined,
      smartDirectoryPath: isSet(object.smartDirectoryPath)
        ? URL.fromJSON(object.smartDirectoryPath)
        : undefined,
      hotKey: isSet(object.hotKey) ? HotKey.fromJSON(object.hotKey) : undefined,
      cues: Array.isArray(object?.cues)
        ? object.cues.map((e: any) => Cue.fromJSON(e))
        : [],
      children: Array.isArray(object?.children)
        ? object.children.map((e: any) => Playlist.fromJSON(e))
        : [],
      timecodeEnabled: isSet(object.timecodeEnabled)
        ? Boolean(object.timecodeEnabled)
        : false,
      timing: isSet(object.timing)
        ? playlist_TimingTypeFromJSON(object.timing)
        : 0,
      startupInfo: isSet(object.startupInfo)
        ? Playlist_StartupInfo.fromJSON(object.startupInfo)
        : undefined,
      playlists: isSet(object.playlists)
        ? Playlist_PlaylistArray.fromJSON(object.playlists)
        : undefined,
      items: isSet(object.items)
        ? Playlist_PlaylistItems.fromJSON(object.items)
        : undefined,
      smartDirectory: isSet(object.smartDirectory)
        ? Playlist_FolderDirectory.fromJSON(object.smartDirectory)
        : undefined,
      pcoPlan: isSet(object.pcoPlan)
        ? PlanningCenterPlan.fromJSON(object.pcoPlan)
        : undefined,
    };
  },

  toJSON(message: Playlist): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = playlist_TypeToJSON(message.type));
    message.expanded !== undefined && (obj.expanded = message.expanded);
    message.targetedLayerUuid !== undefined &&
      (obj.targetedLayerUuid = message.targetedLayerUuid
        ? UUID.toJSON(message.targetedLayerUuid)
        : undefined);
    message.smartDirectoryPath !== undefined &&
      (obj.smartDirectoryPath = message.smartDirectoryPath
        ? URL.toJSON(message.smartDirectoryPath)
        : undefined);
    message.hotKey !== undefined &&
      (obj.hotKey = message.hotKey ? HotKey.toJSON(message.hotKey) : undefined);
    if (message.cues) {
      obj.cues = message.cues.map((e) => (e ? Cue.toJSON(e) : undefined));
    } else {
      obj.cues = [];
    }
    if (message.children) {
      obj.children = message.children.map((e) =>
        e ? Playlist.toJSON(e) : undefined,
      );
    } else {
      obj.children = [];
    }
    message.timecodeEnabled !== undefined &&
      (obj.timecodeEnabled = message.timecodeEnabled);
    message.timing !== undefined &&
      (obj.timing = playlist_TimingTypeToJSON(message.timing));
    message.startupInfo !== undefined &&
      (obj.startupInfo = message.startupInfo
        ? Playlist_StartupInfo.toJSON(message.startupInfo)
        : undefined);
    message.playlists !== undefined &&
      (obj.playlists = message.playlists
        ? Playlist_PlaylistArray.toJSON(message.playlists)
        : undefined);
    message.items !== undefined &&
      (obj.items = message.items
        ? Playlist_PlaylistItems.toJSON(message.items)
        : undefined);
    message.smartDirectory !== undefined &&
      (obj.smartDirectory = message.smartDirectory
        ? Playlist_FolderDirectory.toJSON(message.smartDirectory)
        : undefined);
    message.pcoPlan !== undefined &&
      (obj.pcoPlan = message.pcoPlan
        ? PlanningCenterPlan.toJSON(message.pcoPlan)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist>, I>>(base?: I): Playlist {
    return Playlist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist>, I>>(object: I): Playlist {
    const message = createBasePlaylist();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.type = object.type ?? 0;
    message.expanded = object.expanded ?? false;
    message.targetedLayerUuid =
      object.targetedLayerUuid !== undefined &&
      object.targetedLayerUuid !== null
        ? UUID.fromPartial(object.targetedLayerUuid)
        : undefined;
    message.smartDirectoryPath =
      object.smartDirectoryPath !== undefined &&
      object.smartDirectoryPath !== null
        ? URL.fromPartial(object.smartDirectoryPath)
        : undefined;
    message.hotKey =
      object.hotKey !== undefined && object.hotKey !== null
        ? HotKey.fromPartial(object.hotKey)
        : undefined;
    message.cues = object.cues?.map((e) => Cue.fromPartial(e)) || [];
    message.children =
      object.children?.map((e) => Playlist.fromPartial(e)) || [];
    message.timecodeEnabled = object.timecodeEnabled ?? false;
    message.timing = object.timing ?? 0;
    message.startupInfo =
      object.startupInfo !== undefined && object.startupInfo !== null
        ? Playlist_StartupInfo.fromPartial(object.startupInfo)
        : undefined;
    message.playlists =
      object.playlists !== undefined && object.playlists !== null
        ? Playlist_PlaylistArray.fromPartial(object.playlists)
        : undefined;
    message.items =
      object.items !== undefined && object.items !== null
        ? Playlist_PlaylistItems.fromPartial(object.items)
        : undefined;
    message.smartDirectory =
      object.smartDirectory !== undefined && object.smartDirectory !== null
        ? Playlist_FolderDirectory.fromPartial(object.smartDirectory)
        : undefined;
    message.pcoPlan =
      object.pcoPlan !== undefined && object.pcoPlan !== null
        ? PlanningCenterPlan.fromPartial(object.pcoPlan)
        : undefined;
    return message;
  },
};

function createBasePlaylist_PlaylistArray(): Playlist_PlaylistArray {
  return { playlists: [] };
}

export const Playlist_PlaylistArray = {
  encode(
    message: Playlist_PlaylistArray,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.playlists) {
      Playlist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Playlist_PlaylistArray {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist_PlaylistArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.playlists.push(Playlist.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist_PlaylistArray {
    return {
      playlists: Array.isArray(object?.playlists)
        ? object.playlists.map((e: any) => Playlist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Playlist_PlaylistArray): unknown {
    const obj: any = {};
    if (message.playlists) {
      obj.playlists = message.playlists.map((e) =>
        e ? Playlist.toJSON(e) : undefined,
      );
    } else {
      obj.playlists = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist_PlaylistArray>, I>>(
    base?: I,
  ): Playlist_PlaylistArray {
    return Playlist_PlaylistArray.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist_PlaylistArray>, I>>(
    object: I,
  ): Playlist_PlaylistArray {
    const message = createBasePlaylist_PlaylistArray();
    message.playlists =
      object.playlists?.map((e) => Playlist.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlaylist_PlaylistItems(): Playlist_PlaylistItems {
  return { items: [] };
}

export const Playlist_PlaylistItems = {
  encode(
    message: Playlist_PlaylistItems,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.items) {
      PlaylistItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Playlist_PlaylistItems {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist_PlaylistItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.items.push(PlaylistItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist_PlaylistItems {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => PlaylistItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Playlist_PlaylistItems): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? PlaylistItem.toJSON(e) : undefined,
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist_PlaylistItems>, I>>(
    base?: I,
  ): Playlist_PlaylistItems {
    return Playlist_PlaylistItems.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist_PlaylistItems>, I>>(
    object: I,
  ): Playlist_PlaylistItems {
    const message = createBasePlaylist_PlaylistItems();
    message.items = object.items?.map((e) => PlaylistItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlaylist_FolderDirectory(): Playlist_FolderDirectory {
  return { smartDirectory: undefined, importBehavior: 0 };
}

export const Playlist_FolderDirectory = {
  encode(
    message: Playlist_FolderDirectory,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.smartDirectory !== undefined) {
      URL.encode(message.smartDirectory, writer.uint32(10).fork()).ldelim();
    }
    if (message.importBehavior !== 0) {
      writer.uint32(16).int32(message.importBehavior);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Playlist_FolderDirectory {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist_FolderDirectory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.smartDirectory = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.importBehavior = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist_FolderDirectory {
    return {
      smartDirectory: isSet(object.smartDirectory)
        ? URL.fromJSON(object.smartDirectory)
        : undefined,
      importBehavior: isSet(object.importBehavior)
        ? playlist_FolderDirectory_ImportBehaviorFromJSON(object.importBehavior)
        : 0,
    };
  },

  toJSON(message: Playlist_FolderDirectory): unknown {
    const obj: any = {};
    message.smartDirectory !== undefined &&
      (obj.smartDirectory = message.smartDirectory
        ? URL.toJSON(message.smartDirectory)
        : undefined);
    message.importBehavior !== undefined &&
      (obj.importBehavior = playlist_FolderDirectory_ImportBehaviorToJSON(
        message.importBehavior,
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist_FolderDirectory>, I>>(
    base?: I,
  ): Playlist_FolderDirectory {
    return Playlist_FolderDirectory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist_FolderDirectory>, I>>(
    object: I,
  ): Playlist_FolderDirectory {
    const message = createBasePlaylist_FolderDirectory();
    message.smartDirectory =
      object.smartDirectory !== undefined && object.smartDirectory !== null
        ? URL.fromPartial(object.smartDirectory)
        : undefined;
    message.importBehavior = object.importBehavior ?? 0;
    return message;
  },
};

function createBasePlaylist_Tag(): Playlist_Tag {
  return { color: undefined, name: '', uuid: undefined };
}

export const Playlist_Tag = {
  encode(
    message: Playlist_Tag,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Playlist_Tag {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist_Tag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist_Tag {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: Playlist_Tag): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist_Tag>, I>>(
    base?: I,
  ): Playlist_Tag {
    return Playlist_Tag.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist_Tag>, I>>(
    object: I,
  ): Playlist_Tag {
    const message = createBasePlaylist_Tag();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.name = object.name ?? '';
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    return message;
  },
};

function createBasePlaylist_StartupInfo(): Playlist_StartupInfo {
  return { triggerOnStartup: false };
}

export const Playlist_StartupInfo = {
  encode(
    message: Playlist_StartupInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerOnStartup === true) {
      writer.uint32(8).bool(message.triggerOnStartup);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Playlist_StartupInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist_StartupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.triggerOnStartup = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist_StartupInfo {
    return {
      triggerOnStartup: isSet(object.triggerOnStartup)
        ? Boolean(object.triggerOnStartup)
        : false,
    };
  },

  toJSON(message: Playlist_StartupInfo): unknown {
    const obj: any = {};
    message.triggerOnStartup !== undefined &&
      (obj.triggerOnStartup = message.triggerOnStartup);
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist_StartupInfo>, I>>(
    base?: I,
  ): Playlist_StartupInfo {
    return Playlist_StartupInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist_StartupInfo>, I>>(
    object: I,
  ): Playlist_StartupInfo {
    const message = createBasePlaylist_StartupInfo();
    message.triggerOnStartup = object.triggerOnStartup ?? false;
    return message;
  },
};

function createBasePlaylistItem(): PlaylistItem {
  return {
    uuid: undefined,
    name: '',
    tags: [],
    isHidden: false,
    header: undefined,
    presentation: undefined,
    cue: undefined,
    planningCenter: undefined,
    placeholder: undefined,
  };
}

export const PlaylistItem = {
  encode(
    message: PlaylistItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.tags) {
      UUID.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.isHidden === true) {
      writer.uint32(72).bool(message.isHidden);
    }
    if (message.header !== undefined) {
      PlaylistItem_Header.encode(
        message.header,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.presentation !== undefined) {
      PlaylistItem_Presentation.encode(
        message.presentation,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.cue !== undefined) {
      Cue.encode(message.cue, writer.uint32(42).fork()).ldelim();
    }
    if (message.planningCenter !== undefined) {
      PlaylistItem_PlanningCenter.encode(
        message.planningCenter,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.placeholder !== undefined) {
      PlaylistItem_Placeholder.encode(
        message.placeholder,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistItem();
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

          message.name = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.tags.push(UUID.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.isHidden = reader.bool();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.header = PlaylistItem_Header.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.presentation = PlaylistItem_Presentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.cue = Cue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.planningCenter = PlaylistItem_PlanningCenter.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.placeholder = PlaylistItem_Placeholder.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistItem {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => UUID.fromJSON(e))
        : [],
      isHidden: isSet(object.isHidden) ? Boolean(object.isHidden) : false,
      header: isSet(object.header)
        ? PlaylistItem_Header.fromJSON(object.header)
        : undefined,
      presentation: isSet(object.presentation)
        ? PlaylistItem_Presentation.fromJSON(object.presentation)
        : undefined,
      cue: isSet(object.cue) ? Cue.fromJSON(object.cue) : undefined,
      planningCenter: isSet(object.planningCenter)
        ? PlaylistItem_PlanningCenter.fromJSON(object.planningCenter)
        : undefined,
      placeholder: isSet(object.placeholder)
        ? PlaylistItem_Placeholder.fromJSON(object.placeholder)
        : undefined,
    };
  },

  toJSON(message: PlaylistItem): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? UUID.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.isHidden !== undefined && (obj.isHidden = message.isHidden);
    message.header !== undefined &&
      (obj.header = message.header
        ? PlaylistItem_Header.toJSON(message.header)
        : undefined);
    message.presentation !== undefined &&
      (obj.presentation = message.presentation
        ? PlaylistItem_Presentation.toJSON(message.presentation)
        : undefined);
    message.cue !== undefined &&
      (obj.cue = message.cue ? Cue.toJSON(message.cue) : undefined);
    message.planningCenter !== undefined &&
      (obj.planningCenter = message.planningCenter
        ? PlaylistItem_PlanningCenter.toJSON(message.planningCenter)
        : undefined);
    message.placeholder !== undefined &&
      (obj.placeholder = message.placeholder
        ? PlaylistItem_Placeholder.toJSON(message.placeholder)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistItem>, I>>(
    base?: I,
  ): PlaylistItem {
    return PlaylistItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaylistItem>, I>>(
    object: I,
  ): PlaylistItem {
    const message = createBasePlaylistItem();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.tags = object.tags?.map((e) => UUID.fromPartial(e)) || [];
    message.isHidden = object.isHidden ?? false;
    message.header =
      object.header !== undefined && object.header !== null
        ? PlaylistItem_Header.fromPartial(object.header)
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? PlaylistItem_Presentation.fromPartial(object.presentation)
        : undefined;
    message.cue =
      object.cue !== undefined && object.cue !== null
        ? Cue.fromPartial(object.cue)
        : undefined;
    message.planningCenter =
      object.planningCenter !== undefined && object.planningCenter !== null
        ? PlaylistItem_PlanningCenter.fromPartial(object.planningCenter)
        : undefined;
    message.placeholder =
      object.placeholder !== undefined && object.placeholder !== null
        ? PlaylistItem_Placeholder.fromPartial(object.placeholder)
        : undefined;
    return message;
  },
};

function createBasePlaylistItem_Header(): PlaylistItem_Header {
  return { color: undefined, actions: [] };
}

export const PlaylistItem_Header = {
  encode(
    message: PlaylistItem_Header,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaylistItem_Header {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistItem_Header();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.color = Color.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistItem_Header {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaylistItem_Header): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistItem_Header>, I>>(
    base?: I,
  ): PlaylistItem_Header {
    return PlaylistItem_Header.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaylistItem_Header>, I>>(
    object: I,
  ): PlaylistItem_Header {
    const message = createBasePlaylistItem_Header();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlaylistItem_Presentation(): PlaylistItem_Presentation {
  return {
    documentPath: undefined,
    arrangement: undefined,
    contentDestination: 0,
    userMusicKey: undefined,
  };
}

export const PlaylistItem_Presentation = {
  encode(
    message: PlaylistItem_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.documentPath !== undefined) {
      URL.encode(message.documentPath, writer.uint32(10).fork()).ldelim();
    }
    if (message.arrangement !== undefined) {
      UUID.encode(message.arrangement, writer.uint32(18).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(24).int32(message.contentDestination);
    }
    if (message.userMusicKey !== undefined) {
      MusicKeyScale.encode(
        message.userMusicKey,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlaylistItem_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistItem_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.documentPath = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.arrangement = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.userMusicKey = MusicKeyScale.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistItem_Presentation {
    return {
      documentPath: isSet(object.documentPath)
        ? URL.fromJSON(object.documentPath)
        : undefined,
      arrangement: isSet(object.arrangement)
        ? UUID.fromJSON(object.arrangement)
        : undefined,
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      userMusicKey: isSet(object.userMusicKey)
        ? MusicKeyScale.fromJSON(object.userMusicKey)
        : undefined,
    };
  },

  toJSON(message: PlaylistItem_Presentation): unknown {
    const obj: any = {};
    message.documentPath !== undefined &&
      (obj.documentPath = message.documentPath
        ? URL.toJSON(message.documentPath)
        : undefined);
    message.arrangement !== undefined &&
      (obj.arrangement = message.arrangement
        ? UUID.toJSON(message.arrangement)
        : undefined);
    message.contentDestination !== undefined &&
      (obj.contentDestination = action_ContentDestinationToJSON(
        message.contentDestination,
      ));
    message.userMusicKey !== undefined &&
      (obj.userMusicKey = message.userMusicKey
        ? MusicKeyScale.toJSON(message.userMusicKey)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistItem_Presentation>, I>>(
    base?: I,
  ): PlaylistItem_Presentation {
    return PlaylistItem_Presentation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaylistItem_Presentation>, I>>(
    object: I,
  ): PlaylistItem_Presentation {
    const message = createBasePlaylistItem_Presentation();
    message.documentPath =
      object.documentPath !== undefined && object.documentPath !== null
        ? URL.fromPartial(object.documentPath)
        : undefined;
    message.arrangement =
      object.arrangement !== undefined && object.arrangement !== null
        ? UUID.fromPartial(object.arrangement)
        : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    message.userMusicKey =
      object.userMusicKey !== undefined && object.userMusicKey !== null
        ? MusicKeyScale.fromPartial(object.userMusicKey)
        : undefined;
    return message;
  },
};

function createBasePlaylistItem_PlanningCenter(): PlaylistItem_PlanningCenter {
  return { item: undefined, linkedData: undefined };
}

export const PlaylistItem_PlanningCenter = {
  encode(
    message: PlaylistItem_PlanningCenter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.item !== undefined) {
      PlanningCenterPlan_PlanItem.encode(
        message.item,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.linkedData !== undefined) {
      PlaylistItem.encode(
        message.linkedData,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlaylistItem_PlanningCenter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistItem_PlanningCenter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.item = PlanningCenterPlan_PlanItem.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.linkedData = PlaylistItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistItem_PlanningCenter {
    return {
      item: isSet(object.item)
        ? PlanningCenterPlan_PlanItem.fromJSON(object.item)
        : undefined,
      linkedData: isSet(object.linkedData)
        ? PlaylistItem.fromJSON(object.linkedData)
        : undefined,
    };
  },

  toJSON(message: PlaylistItem_PlanningCenter): unknown {
    const obj: any = {};
    message.item !== undefined &&
      (obj.item = message.item
        ? PlanningCenterPlan_PlanItem.toJSON(message.item)
        : undefined);
    message.linkedData !== undefined &&
      (obj.linkedData = message.linkedData
        ? PlaylistItem.toJSON(message.linkedData)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistItem_PlanningCenter>, I>>(
    base?: I,
  ): PlaylistItem_PlanningCenter {
    return PlaylistItem_PlanningCenter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaylistItem_PlanningCenter>, I>>(
    object: I,
  ): PlaylistItem_PlanningCenter {
    const message = createBasePlaylistItem_PlanningCenter();
    message.item =
      object.item !== undefined && object.item !== null
        ? PlanningCenterPlan_PlanItem.fromPartial(object.item)
        : undefined;
    message.linkedData =
      object.linkedData !== undefined && object.linkedData !== null
        ? PlaylistItem.fromPartial(object.linkedData)
        : undefined;
    return message;
  },
};

function createBasePlaylistItem_Placeholder(): PlaylistItem_Placeholder {
  return { linkedData: undefined };
}

export const PlaylistItem_Placeholder = {
  encode(
    message: PlaylistItem_Placeholder,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.linkedData !== undefined) {
      PlaylistItem.encode(
        message.linkedData,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlaylistItem_Placeholder {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylistItem_Placeholder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.linkedData = PlaylistItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlaylistItem_Placeholder {
    return {
      linkedData: isSet(object.linkedData)
        ? PlaylistItem.fromJSON(object.linkedData)
        : undefined,
    };
  },

  toJSON(message: PlaylistItem_Placeholder): unknown {
    const obj: any = {};
    message.linkedData !== undefined &&
      (obj.linkedData = message.linkedData
        ? PlaylistItem.toJSON(message.linkedData)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaylistItem_Placeholder>, I>>(
    base?: I,
  ): PlaylistItem_Placeholder {
    return PlaylistItem_Placeholder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaylistItem_Placeholder>, I>>(
    object: I,
  ): PlaylistItem_Placeholder {
    const message = createBasePlaylistItem_Placeholder();
    message.linkedData =
      object.linkedData !== undefined && object.linkedData !== null
        ? PlaylistItem.fromPartial(object.linkedData)
        : undefined;
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
