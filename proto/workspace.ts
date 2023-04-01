/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { AlignmentGuide } from './alignmentGuide';
import { URL, UUID } from './basicTypes';
import { Calendar } from './calendar';
import { Effect, Transition } from './effects';
import { Graphics_Rect } from './graphicsData';
import { HotKey } from './hotKey';
import { Layer } from './layers';
import { LiveVideoPlaylist } from './liveVideoPlaylist';
import { Mask } from './masks';
import { Playlist } from './playlist';
import { EdgeBlend, OutputDisplay, Screen } from './screens';
import { TargetSet } from './targets';

export const protobufPackage = 'rv.data';

export interface Workspace {
  uuid: UUID | undefined;
  muted: boolean;
  hidden: boolean;
  editorBackground: Workspace_EditorBackground | undefined;
  effectPresetUuid: UUID | undefined;
  effectBuildDuration: number;
  transition: Transition | undefined;
  activeMaskUuid: UUID | undefined;
  playlist: Playlist | undefined;
  unitScaling: Workspace_UnitScaling | undefined;
  effects: Effect[];
  masks: Mask[];
  screens: Screen[];
  edgeBlends: EdgeBlend[];
  layers: Layer[];
  targetSets: TargetSet[];
  hotKeys: HotKey[];
  calendar: Calendar | undefined;
  alignmentGuides: AlignmentGuide[];
  liveVideoPlaylist: LiveVideoPlaylist | undefined;
  outputPreviewDisplay: OutputDisplay | undefined;
}

export interface Workspace_EditorBackground {
  enabled: boolean;
  frame: Graphics_Rect | undefined;
  url: URL | undefined;
  opacity: number;
}

export interface Workspace_UnitScaling {
  length: number;
  unit: Workspace_UnitScaling_UnitType;
  points: number;
}

export enum Workspace_UnitScaling_UnitType {
  UNIT_TYPE_POINTS = 0,
  UNIT_TYPE_MILLIMETERS = 1,
  UNIT_TYPE_CENTIMETERS = 2,
  UNIT_TYPE_METERS = 3,
  UNIT_TYPE_INCHES = 4,
  UNIT_TYPE_FEET = 5,
  UNRECOGNIZED = -1,
}

export function workspace_UnitScaling_UnitTypeFromJSON(
  object: any,
): Workspace_UnitScaling_UnitType {
  switch (object) {
    case 0:
    case 'UNIT_TYPE_POINTS':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_POINTS;
    case 1:
    case 'UNIT_TYPE_MILLIMETERS':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_MILLIMETERS;
    case 2:
    case 'UNIT_TYPE_CENTIMETERS':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_CENTIMETERS;
    case 3:
    case 'UNIT_TYPE_METERS':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_METERS;
    case 4:
    case 'UNIT_TYPE_INCHES':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_INCHES;
    case 5:
    case 'UNIT_TYPE_FEET':
      return Workspace_UnitScaling_UnitType.UNIT_TYPE_FEET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Workspace_UnitScaling_UnitType.UNRECOGNIZED;
  }
}

export function workspace_UnitScaling_UnitTypeToJSON(
  object: Workspace_UnitScaling_UnitType,
): string {
  switch (object) {
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_POINTS:
      return 'UNIT_TYPE_POINTS';
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_MILLIMETERS:
      return 'UNIT_TYPE_MILLIMETERS';
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_CENTIMETERS:
      return 'UNIT_TYPE_CENTIMETERS';
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_METERS:
      return 'UNIT_TYPE_METERS';
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_INCHES:
      return 'UNIT_TYPE_INCHES';
    case Workspace_UnitScaling_UnitType.UNIT_TYPE_FEET:
      return 'UNIT_TYPE_FEET';
    case Workspace_UnitScaling_UnitType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseWorkspace(): Workspace {
  return {
    uuid: undefined,
    muted: false,
    hidden: false,
    editorBackground: undefined,
    effectPresetUuid: undefined,
    effectBuildDuration: 0,
    transition: undefined,
    activeMaskUuid: undefined,
    playlist: undefined,
    unitScaling: undefined,
    effects: [],
    masks: [],
    screens: [],
    edgeBlends: [],
    layers: [],
    targetSets: [],
    hotKeys: [],
    calendar: undefined,
    alignmentGuides: [],
    liveVideoPlaylist: undefined,
    outputPreviewDisplay: undefined,
  };
}

export const Workspace = {
  encode(
    message: Workspace,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.muted === true) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.hidden === true) {
      writer.uint32(24).bool(message.hidden);
    }
    if (message.editorBackground !== undefined) {
      Workspace_EditorBackground.encode(
        message.editorBackground,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.effectPresetUuid !== undefined) {
      UUID.encode(message.effectPresetUuid, writer.uint32(42).fork()).ldelim();
    }
    if (message.effectBuildDuration !== 0) {
      writer.uint32(49).double(message.effectBuildDuration);
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(58).fork()).ldelim();
    }
    if (message.activeMaskUuid !== undefined) {
      UUID.encode(message.activeMaskUuid, writer.uint32(66).fork()).ldelim();
    }
    if (message.playlist !== undefined) {
      Playlist.encode(message.playlist, writer.uint32(74).fork()).ldelim();
    }
    if (message.unitScaling !== undefined) {
      Workspace_UnitScaling.encode(
        message.unitScaling,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.masks) {
      Mask.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.edgeBlends) {
      EdgeBlend.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.layers) {
      Layer.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.targetSets) {
      TargetSet.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.hotKeys) {
      HotKey.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.calendar !== undefined) {
      Calendar.encode(message.calendar, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.alignmentGuides) {
      AlignmentGuide.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.liveVideoPlaylist !== undefined) {
      LiveVideoPlaylist.encode(
        message.liveVideoPlaylist,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.outputPreviewDisplay !== undefined) {
      OutputDisplay.encode(
        message.outputPreviewDisplay,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Workspace {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspace();
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
          if (tag != 16) {
            break;
          }

          message.muted = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.hidden = reader.bool();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.editorBackground = Workspace_EditorBackground.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.effectPresetUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 49) {
            break;
          }

          message.effectBuildDuration = reader.double();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.activeMaskUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.playlist = Playlist.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.unitScaling = Workspace_UnitScaling.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag != 130) {
            break;
          }

          message.effects.push(Effect.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag != 138) {
            break;
          }

          message.masks.push(Mask.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag != 146) {
            break;
          }

          message.screens.push(Screen.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag != 154) {
            break;
          }

          message.edgeBlends.push(EdgeBlend.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag != 162) {
            break;
          }

          message.layers.push(Layer.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag != 170) {
            break;
          }

          message.targetSets.push(TargetSet.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag != 178) {
            break;
          }

          message.hotKeys.push(HotKey.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag != 186) {
            break;
          }

          message.calendar = Calendar.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag != 194) {
            break;
          }

          message.alignmentGuides.push(
            AlignmentGuide.decode(reader, reader.uint32()),
          );
          continue;
        case 25:
          if (tag != 202) {
            break;
          }

          message.liveVideoPlaylist = LiveVideoPlaylist.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 26:
          if (tag != 210) {
            break;
          }

          message.outputPreviewDisplay = OutputDisplay.decode(
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

  fromJSON(object: any): Workspace {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false,
      editorBackground: isSet(object.editorBackground)
        ? Workspace_EditorBackground.fromJSON(object.editorBackground)
        : undefined,
      effectPresetUuid: isSet(object.effectPresetUuid)
        ? UUID.fromJSON(object.effectPresetUuid)
        : undefined,
      effectBuildDuration: isSet(object.effectBuildDuration)
        ? Number(object.effectBuildDuration)
        : 0,
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
      activeMaskUuid: isSet(object.activeMaskUuid)
        ? UUID.fromJSON(object.activeMaskUuid)
        : undefined,
      playlist: isSet(object.playlist)
        ? Playlist.fromJSON(object.playlist)
        : undefined,
      unitScaling: isSet(object.unitScaling)
        ? Workspace_UnitScaling.fromJSON(object.unitScaling)
        : undefined,
      effects: Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
      masks: Array.isArray(object?.masks)
        ? object.masks.map((e: any) => Mask.fromJSON(e))
        : [],
      screens: Array.isArray(object?.screens)
        ? object.screens.map((e: any) => Screen.fromJSON(e))
        : [],
      edgeBlends: Array.isArray(object?.edgeBlends)
        ? object.edgeBlends.map((e: any) => EdgeBlend.fromJSON(e))
        : [],
      layers: Array.isArray(object?.layers)
        ? object.layers.map((e: any) => Layer.fromJSON(e))
        : [],
      targetSets: Array.isArray(object?.targetSets)
        ? object.targetSets.map((e: any) => TargetSet.fromJSON(e))
        : [],
      hotKeys: Array.isArray(object?.hotKeys)
        ? object.hotKeys.map((e: any) => HotKey.fromJSON(e))
        : [],
      calendar: isSet(object.calendar)
        ? Calendar.fromJSON(object.calendar)
        : undefined,
      alignmentGuides: Array.isArray(object?.alignmentGuides)
        ? object.alignmentGuides.map((e: any) => AlignmentGuide.fromJSON(e))
        : [],
      liveVideoPlaylist: isSet(object.liveVideoPlaylist)
        ? LiveVideoPlaylist.fromJSON(object.liveVideoPlaylist)
        : undefined,
      outputPreviewDisplay: isSet(object.outputPreviewDisplay)
        ? OutputDisplay.fromJSON(object.outputPreviewDisplay)
        : undefined,
    };
  },

  toJSON(message: Workspace): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.muted !== undefined && (obj.muted = message.muted);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    message.editorBackground !== undefined &&
      (obj.editorBackground = message.editorBackground
        ? Workspace_EditorBackground.toJSON(message.editorBackground)
        : undefined);
    message.effectPresetUuid !== undefined &&
      (obj.effectPresetUuid = message.effectPresetUuid
        ? UUID.toJSON(message.effectPresetUuid)
        : undefined);
    message.effectBuildDuration !== undefined &&
      (obj.effectBuildDuration = message.effectBuildDuration);
    message.transition !== undefined &&
      (obj.transition = message.transition
        ? Transition.toJSON(message.transition)
        : undefined);
    message.activeMaskUuid !== undefined &&
      (obj.activeMaskUuid = message.activeMaskUuid
        ? UUID.toJSON(message.activeMaskUuid)
        : undefined);
    message.playlist !== undefined &&
      (obj.playlist = message.playlist
        ? Playlist.toJSON(message.playlist)
        : undefined);
    message.unitScaling !== undefined &&
      (obj.unitScaling = message.unitScaling
        ? Workspace_UnitScaling.toJSON(message.unitScaling)
        : undefined);
    if (message.effects) {
      obj.effects = message.effects.map((e) =>
        e ? Effect.toJSON(e) : undefined,
      );
    } else {
      obj.effects = [];
    }
    if (message.masks) {
      obj.masks = message.masks.map((e) => (e ? Mask.toJSON(e) : undefined));
    } else {
      obj.masks = [];
    }
    if (message.screens) {
      obj.screens = message.screens.map((e) =>
        e ? Screen.toJSON(e) : undefined,
      );
    } else {
      obj.screens = [];
    }
    if (message.edgeBlends) {
      obj.edgeBlends = message.edgeBlends.map((e) =>
        e ? EdgeBlend.toJSON(e) : undefined,
      );
    } else {
      obj.edgeBlends = [];
    }
    if (message.layers) {
      obj.layers = message.layers.map((e) => (e ? Layer.toJSON(e) : undefined));
    } else {
      obj.layers = [];
    }
    if (message.targetSets) {
      obj.targetSets = message.targetSets.map((e) =>
        e ? TargetSet.toJSON(e) : undefined,
      );
    } else {
      obj.targetSets = [];
    }
    if (message.hotKeys) {
      obj.hotKeys = message.hotKeys.map((e) =>
        e ? HotKey.toJSON(e) : undefined,
      );
    } else {
      obj.hotKeys = [];
    }
    message.calendar !== undefined &&
      (obj.calendar = message.calendar
        ? Calendar.toJSON(message.calendar)
        : undefined);
    if (message.alignmentGuides) {
      obj.alignmentGuides = message.alignmentGuides.map((e) =>
        e ? AlignmentGuide.toJSON(e) : undefined,
      );
    } else {
      obj.alignmentGuides = [];
    }
    message.liveVideoPlaylist !== undefined &&
      (obj.liveVideoPlaylist = message.liveVideoPlaylist
        ? LiveVideoPlaylist.toJSON(message.liveVideoPlaylist)
        : undefined);
    message.outputPreviewDisplay !== undefined &&
      (obj.outputPreviewDisplay = message.outputPreviewDisplay
        ? OutputDisplay.toJSON(message.outputPreviewDisplay)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Workspace>, I>>(base?: I): Workspace {
    return Workspace.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Workspace>, I>>(
    object: I,
  ): Workspace {
    const message = createBaseWorkspace();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.muted = object.muted ?? false;
    message.hidden = object.hidden ?? false;
    message.editorBackground =
      object.editorBackground !== undefined && object.editorBackground !== null
        ? Workspace_EditorBackground.fromPartial(object.editorBackground)
        : undefined;
    message.effectPresetUuid =
      object.effectPresetUuid !== undefined && object.effectPresetUuid !== null
        ? UUID.fromPartial(object.effectPresetUuid)
        : undefined;
    message.effectBuildDuration = object.effectBuildDuration ?? 0;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? Transition.fromPartial(object.transition)
        : undefined;
    message.activeMaskUuid =
      object.activeMaskUuid !== undefined && object.activeMaskUuid !== null
        ? UUID.fromPartial(object.activeMaskUuid)
        : undefined;
    message.playlist =
      object.playlist !== undefined && object.playlist !== null
        ? Playlist.fromPartial(object.playlist)
        : undefined;
    message.unitScaling =
      object.unitScaling !== undefined && object.unitScaling !== null
        ? Workspace_UnitScaling.fromPartial(object.unitScaling)
        : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.masks = object.masks?.map((e) => Mask.fromPartial(e)) || [];
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    message.edgeBlends =
      object.edgeBlends?.map((e) => EdgeBlend.fromPartial(e)) || [];
    message.layers = object.layers?.map((e) => Layer.fromPartial(e)) || [];
    message.targetSets =
      object.targetSets?.map((e) => TargetSet.fromPartial(e)) || [];
    message.hotKeys = object.hotKeys?.map((e) => HotKey.fromPartial(e)) || [];
    message.calendar =
      object.calendar !== undefined && object.calendar !== null
        ? Calendar.fromPartial(object.calendar)
        : undefined;
    message.alignmentGuides =
      object.alignmentGuides?.map((e) => AlignmentGuide.fromPartial(e)) || [];
    message.liveVideoPlaylist =
      object.liveVideoPlaylist !== undefined &&
      object.liveVideoPlaylist !== null
        ? LiveVideoPlaylist.fromPartial(object.liveVideoPlaylist)
        : undefined;
    message.outputPreviewDisplay =
      object.outputPreviewDisplay !== undefined &&
      object.outputPreviewDisplay !== null
        ? OutputDisplay.fromPartial(object.outputPreviewDisplay)
        : undefined;
    return message;
  },
};

function createBaseWorkspace_EditorBackground(): Workspace_EditorBackground {
  return { enabled: false, frame: undefined, url: undefined, opacity: 0 };
}

export const Workspace_EditorBackground = {
  encode(
    message: Workspace_EditorBackground,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.frame !== undefined) {
      Graphics_Rect.encode(message.frame, writer.uint32(18).fork()).ldelim();
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(26).fork()).ldelim();
    }
    if (message.opacity !== 0) {
      writer.uint32(33).double(message.opacity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Workspace_EditorBackground {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspace_EditorBackground();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.frame = Graphics_Rect.decode(reader, reader.uint32());
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

          message.opacity = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workspace_EditorBackground {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      frame: isSet(object.frame)
        ? Graphics_Rect.fromJSON(object.frame)
        : undefined,
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      opacity: isSet(object.opacity) ? Number(object.opacity) : 0,
    };
  },

  toJSON(message: Workspace_EditorBackground): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.frame !== undefined &&
      (obj.frame = message.frame
        ? Graphics_Rect.toJSON(message.frame)
        : undefined);
    message.url !== undefined &&
      (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.opacity !== undefined && (obj.opacity = message.opacity);
    return obj;
  },

  create<I extends Exact<DeepPartial<Workspace_EditorBackground>, I>>(
    base?: I,
  ): Workspace_EditorBackground {
    return Workspace_EditorBackground.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Workspace_EditorBackground>, I>>(
    object: I,
  ): Workspace_EditorBackground {
    const message = createBaseWorkspace_EditorBackground();
    message.enabled = object.enabled ?? false;
    message.frame =
      object.frame !== undefined && object.frame !== null
        ? Graphics_Rect.fromPartial(object.frame)
        : undefined;
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.opacity = object.opacity ?? 0;
    return message;
  },
};

function createBaseWorkspace_UnitScaling(): Workspace_UnitScaling {
  return { length: 0, unit: 0, points: 0 };
}

export const Workspace_UnitScaling = {
  encode(
    message: Workspace_UnitScaling,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.length !== 0) {
      writer.uint32(9).double(message.length);
    }
    if (message.unit !== 0) {
      writer.uint32(16).int32(message.unit);
    }
    if (message.points !== 0) {
      writer.uint32(25).double(message.points);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Workspace_UnitScaling {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkspace_UnitScaling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.length = reader.double();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.unit = reader.int32() as any;
          continue;
        case 3:
          if (tag != 25) {
            break;
          }

          message.points = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Workspace_UnitScaling {
    return {
      length: isSet(object.length) ? Number(object.length) : 0,
      unit: isSet(object.unit)
        ? workspace_UnitScaling_UnitTypeFromJSON(object.unit)
        : 0,
      points: isSet(object.points) ? Number(object.points) : 0,
    };
  },

  toJSON(message: Workspace_UnitScaling): unknown {
    const obj: any = {};
    message.length !== undefined && (obj.length = message.length);
    message.unit !== undefined &&
      (obj.unit = workspace_UnitScaling_UnitTypeToJSON(message.unit));
    message.points !== undefined && (obj.points = message.points);
    return obj;
  },

  create<I extends Exact<DeepPartial<Workspace_UnitScaling>, I>>(
    base?: I,
  ): Workspace_UnitScaling {
    return Workspace_UnitScaling.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Workspace_UnitScaling>, I>>(
    object: I,
  ): Workspace_UnitScaling {
    const message = createBaseWorkspace_UnitScaling();
    message.length = object.length ?? 0;
    message.unit = object.unit ?? 0;
    message.points = object.points ?? 0;
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
