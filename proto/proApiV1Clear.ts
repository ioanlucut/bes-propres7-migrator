/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Color } from './proApiV1Color';
import { APIV1Identifier } from './proApiV1Identifier';
import {
  APIV1LayerType,
  aPIV1LayerTypeFromJSON,
  aPIV1LayerTypeToJSON,
} from './proApiV1LayerType';

export const protobufPackage = 'rv.data';

export interface APIV1ClearGroup {
  id: APIV1Identifier | undefined;
  icon: string;
  tint: APIV1Color | undefined;
  layers: APIV1ClearGroup_APIV1ClearGroupLayerType[];
  stopTimelineAnnouncements: boolean;
  stopTimelinePresentation: boolean;
  clearNextPresentation: boolean;
}

export enum APIV1ClearGroup_APIV1ClearGroupLayerType {
  music = 0,
  audio_effects = 1,
  props = 2,
  messages = 3,
  announcements = 4,
  presentation = 5,
  presentation_media = 6,
  video_input = 7,
  UNRECOGNIZED = -1,
}

export function aPIV1ClearGroup_APIV1ClearGroupLayerTypeFromJSON(
  object: any,
): APIV1ClearGroup_APIV1ClearGroupLayerType {
  switch (object) {
    case 0:
    case 'music':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.music;
    case 1:
    case 'audio_effects':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.audio_effects;
    case 2:
    case 'props':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.props;
    case 3:
    case 'messages':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.messages;
    case 4:
    case 'announcements':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.announcements;
    case 5:
    case 'presentation':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.presentation;
    case 6:
    case 'presentation_media':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.presentation_media;
    case 7:
    case 'video_input':
      return APIV1ClearGroup_APIV1ClearGroupLayerType.video_input;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1ClearGroup_APIV1ClearGroupLayerType.UNRECOGNIZED;
  }
}

export function aPIV1ClearGroup_APIV1ClearGroupLayerTypeToJSON(
  object: APIV1ClearGroup_APIV1ClearGroupLayerType,
): string {
  switch (object) {
    case APIV1ClearGroup_APIV1ClearGroupLayerType.music:
      return 'music';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.audio_effects:
      return 'audio_effects';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.props:
      return 'props';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.messages:
      return 'messages';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.announcements:
      return 'announcements';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.presentation:
      return 'presentation';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.presentation_media:
      return 'presentation_media';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.video_input:
      return 'video_input';
    case APIV1ClearGroup_APIV1ClearGroupLayerType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1ClearRequest {
  clearLayer?: APIV1ClearRequest_ClearLayer | undefined;
  createGroup?: APIV1ClearRequest_CreateGroup | undefined;
  getGroup?: APIV1ClearRequest_GetGroup | undefined;
  putGroup?: APIV1ClearRequest_PutGroup | undefined;
  getGroupIcon?: APIV1ClearRequest_GetGroupIcon | undefined;
  putGroupIcon?: APIV1ClearRequest_PutGroupIcon | undefined;
  deleteGroup?: APIV1ClearRequest_DeleteGroup | undefined;
  triggerGroup?: APIV1ClearRequest_TriggerGroup | undefined;
  getGroups?: APIV1ClearRequest_GetGroups | undefined;
}

export interface APIV1ClearRequest_ClearLayer {
  layer: APIV1LayerType;
}

export interface APIV1ClearRequest_CreateGroup {
  group: APIV1ClearGroup | undefined;
}

export interface APIV1ClearRequest_GetGroup {
  id: string;
}

export interface APIV1ClearRequest_PutGroup {
  id: string;
  group: APIV1ClearGroup | undefined;
}

export interface APIV1ClearRequest_GetGroupIcon {
  id: string;
}

export interface APIV1ClearRequest_PutGroupIcon {
  id: string;
  contentType: string;
  icon: Uint8Array;
}

export interface APIV1ClearRequest_DeleteGroup {
  id: string;
}

export interface APIV1ClearRequest_TriggerGroup {
  id: string;
}

export interface APIV1ClearRequest_GetGroups {}

export interface APIV1ClearResponse {
  clearLayer?: APIV1ClearResponse_ClearLayer | undefined;
  createGroup?: APIV1ClearResponse_CreateGroup | undefined;
  getGroup?: APIV1ClearResponse_GetGroup | undefined;
  putGroup?: APIV1ClearResponse_PutGroup | undefined;
  deleteGroup?: APIV1ClearResponse_DeleteGroup | undefined;
  triggerGroup?: APIV1ClearResponse_TriggerGroup | undefined;
  getGroups?: APIV1ClearResponse_GetGroups | undefined;
  getGroupIcon?: APIV1ClearResponse_GetGroupIcon | undefined;
  putGroupIcon?: APIV1ClearResponse_PutGroupIcon | undefined;
}

export interface APIV1ClearResponse_ClearLayer {}

export interface APIV1ClearResponse_PutGroup {
  group: APIV1ClearGroup | undefined;
}

export interface APIV1ClearResponse_DeleteGroup {}

export interface APIV1ClearResponse_TriggerGroup {}

export interface APIV1ClearResponse_CreateGroup {
  group: APIV1ClearGroup | undefined;
}

export interface APIV1ClearResponse_GetGroup {
  group: APIV1ClearGroup | undefined;
}

export interface APIV1ClearResponse_GetGroups {
  groups: APIV1ClearGroup[];
}

export interface APIV1ClearResponse_GetGroupIcon {
  contentType: string;
  icon: Uint8Array;
}

export interface APIV1ClearResponse_PutGroupIcon {}

function createBaseAPIV1ClearGroup(): APIV1ClearGroup {
  return {
    id: undefined,
    icon: '',
    tint: undefined,
    layers: [],
    stopTimelineAnnouncements: false,
    stopTimelinePresentation: false,
    clearNextPresentation: false,
  };
}

export const APIV1ClearGroup = {
  encode(
    message: APIV1ClearGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.icon !== '') {
      writer.uint32(18).string(message.icon);
    }
    if (message.tint !== undefined) {
      APIV1Color.encode(message.tint, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.layers) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.stopTimelineAnnouncements === true) {
      writer.uint32(40).bool(message.stopTimelineAnnouncements);
    }
    if (message.stopTimelinePresentation === true) {
      writer.uint32(48).bool(message.stopTimelinePresentation);
    }
    if (message.clearNextPresentation === true) {
      writer.uint32(56).bool(message.clearNextPresentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ClearGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearGroup();
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

          message.icon = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tint = APIV1Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag === 32) {
            message.layers.push(reader.int32() as any);

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.layers.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.stopTimelineAnnouncements = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.stopTimelinePresentation = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.clearNextPresentation = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearGroup {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      icon: isSet(object.icon) ? globalThis.String(object.icon) : '',
      tint: isSet(object.tint) ? APIV1Color.fromJSON(object.tint) : undefined,
      layers: globalThis.Array.isArray(object?.layers)
        ? object.layers.map((e: any) =>
            aPIV1ClearGroup_APIV1ClearGroupLayerTypeFromJSON(e),
          )
        : [],
      stopTimelineAnnouncements: isSet(object.stopTimelineAnnouncements)
        ? globalThis.Boolean(object.stopTimelineAnnouncements)
        : false,
      stopTimelinePresentation: isSet(object.stopTimelinePresentation)
        ? globalThis.Boolean(object.stopTimelinePresentation)
        : false,
      clearNextPresentation: isSet(object.clearNextPresentation)
        ? globalThis.Boolean(object.clearNextPresentation)
        : false,
    };
  },

  toJSON(message: APIV1ClearGroup): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.icon !== '') {
      obj.icon = message.icon;
    }
    if (message.tint !== undefined) {
      obj.tint = APIV1Color.toJSON(message.tint);
    }
    if (message.layers?.length) {
      obj.layers = message.layers.map((e) =>
        aPIV1ClearGroup_APIV1ClearGroupLayerTypeToJSON(e),
      );
    }
    if (message.stopTimelineAnnouncements === true) {
      obj.stopTimelineAnnouncements = message.stopTimelineAnnouncements;
    }
    if (message.stopTimelinePresentation === true) {
      obj.stopTimelinePresentation = message.stopTimelinePresentation;
    }
    if (message.clearNextPresentation === true) {
      obj.clearNextPresentation = message.clearNextPresentation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearGroup>, I>>(
    base?: I,
  ): APIV1ClearGroup {
    return APIV1ClearGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearGroup>, I>>(
    object: I,
  ): APIV1ClearGroup {
    const message = createBaseAPIV1ClearGroup();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.icon = object.icon ?? '';
    message.tint =
      object.tint !== undefined && object.tint !== null
        ? APIV1Color.fromPartial(object.tint)
        : undefined;
    message.layers = object.layers?.map((e) => e) || [];
    message.stopTimelineAnnouncements =
      object.stopTimelineAnnouncements ?? false;
    message.stopTimelinePresentation = object.stopTimelinePresentation ?? false;
    message.clearNextPresentation = object.clearNextPresentation ?? false;
    return message;
  },
};

function createBaseAPIV1ClearRequest(): APIV1ClearRequest {
  return {
    clearLayer: undefined,
    createGroup: undefined,
    getGroup: undefined,
    putGroup: undefined,
    getGroupIcon: undefined,
    putGroupIcon: undefined,
    deleteGroup: undefined,
    triggerGroup: undefined,
    getGroups: undefined,
  };
}

export const APIV1ClearRequest = {
  encode(
    message: APIV1ClearRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clearLayer !== undefined) {
      APIV1ClearRequest_ClearLayer.encode(
        message.clearLayer,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createGroup !== undefined) {
      APIV1ClearRequest_CreateGroup.encode(
        message.createGroup,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getGroup !== undefined) {
      APIV1ClearRequest_GetGroup.encode(
        message.getGroup,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putGroup !== undefined) {
      APIV1ClearRequest_PutGroup.encode(
        message.putGroup,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getGroupIcon !== undefined) {
      APIV1ClearRequest_GetGroupIcon.encode(
        message.getGroupIcon,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.putGroupIcon !== undefined) {
      APIV1ClearRequest_PutGroupIcon.encode(
        message.putGroupIcon,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deleteGroup !== undefined) {
      APIV1ClearRequest_DeleteGroup.encode(
        message.deleteGroup,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.triggerGroup !== undefined) {
      APIV1ClearRequest_TriggerGroup.encode(
        message.triggerGroup,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.getGroups !== undefined) {
      APIV1ClearRequest_GetGroups.encode(
        message.getGroups,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ClearRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clearLayer = APIV1ClearRequest_ClearLayer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createGroup = APIV1ClearRequest_CreateGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getGroup = APIV1ClearRequest_GetGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putGroup = APIV1ClearRequest_PutGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getGroupIcon = APIV1ClearRequest_GetGroupIcon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.putGroupIcon = APIV1ClearRequest_PutGroupIcon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deleteGroup = APIV1ClearRequest_DeleteGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.triggerGroup = APIV1ClearRequest_TriggerGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.getGroups = APIV1ClearRequest_GetGroups.decode(
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

  fromJSON(object: any): APIV1ClearRequest {
    return {
      clearLayer: isSet(object.clearLayer)
        ? APIV1ClearRequest_ClearLayer.fromJSON(object.clearLayer)
        : undefined,
      createGroup: isSet(object.createGroup)
        ? APIV1ClearRequest_CreateGroup.fromJSON(object.createGroup)
        : undefined,
      getGroup: isSet(object.getGroup)
        ? APIV1ClearRequest_GetGroup.fromJSON(object.getGroup)
        : undefined,
      putGroup: isSet(object.putGroup)
        ? APIV1ClearRequest_PutGroup.fromJSON(object.putGroup)
        : undefined,
      getGroupIcon: isSet(object.getGroupIcon)
        ? APIV1ClearRequest_GetGroupIcon.fromJSON(object.getGroupIcon)
        : undefined,
      putGroupIcon: isSet(object.putGroupIcon)
        ? APIV1ClearRequest_PutGroupIcon.fromJSON(object.putGroupIcon)
        : undefined,
      deleteGroup: isSet(object.deleteGroup)
        ? APIV1ClearRequest_DeleteGroup.fromJSON(object.deleteGroup)
        : undefined,
      triggerGroup: isSet(object.triggerGroup)
        ? APIV1ClearRequest_TriggerGroup.fromJSON(object.triggerGroup)
        : undefined,
      getGroups: isSet(object.getGroups)
        ? APIV1ClearRequest_GetGroups.fromJSON(object.getGroups)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearRequest): unknown {
    const obj: any = {};
    if (message.clearLayer !== undefined) {
      obj.clearLayer = APIV1ClearRequest_ClearLayer.toJSON(message.clearLayer);
    }
    if (message.createGroup !== undefined) {
      obj.createGroup = APIV1ClearRequest_CreateGroup.toJSON(
        message.createGroup,
      );
    }
    if (message.getGroup !== undefined) {
      obj.getGroup = APIV1ClearRequest_GetGroup.toJSON(message.getGroup);
    }
    if (message.putGroup !== undefined) {
      obj.putGroup = APIV1ClearRequest_PutGroup.toJSON(message.putGroup);
    }
    if (message.getGroupIcon !== undefined) {
      obj.getGroupIcon = APIV1ClearRequest_GetGroupIcon.toJSON(
        message.getGroupIcon,
      );
    }
    if (message.putGroupIcon !== undefined) {
      obj.putGroupIcon = APIV1ClearRequest_PutGroupIcon.toJSON(
        message.putGroupIcon,
      );
    }
    if (message.deleteGroup !== undefined) {
      obj.deleteGroup = APIV1ClearRequest_DeleteGroup.toJSON(
        message.deleteGroup,
      );
    }
    if (message.triggerGroup !== undefined) {
      obj.triggerGroup = APIV1ClearRequest_TriggerGroup.toJSON(
        message.triggerGroup,
      );
    }
    if (message.getGroups !== undefined) {
      obj.getGroups = APIV1ClearRequest_GetGroups.toJSON(message.getGroups);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest>, I>>(
    base?: I,
  ): APIV1ClearRequest {
    return APIV1ClearRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest>, I>>(
    object: I,
  ): APIV1ClearRequest {
    const message = createBaseAPIV1ClearRequest();
    message.clearLayer =
      object.clearLayer !== undefined && object.clearLayer !== null
        ? APIV1ClearRequest_ClearLayer.fromPartial(object.clearLayer)
        : undefined;
    message.createGroup =
      object.createGroup !== undefined && object.createGroup !== null
        ? APIV1ClearRequest_CreateGroup.fromPartial(object.createGroup)
        : undefined;
    message.getGroup =
      object.getGroup !== undefined && object.getGroup !== null
        ? APIV1ClearRequest_GetGroup.fromPartial(object.getGroup)
        : undefined;
    message.putGroup =
      object.putGroup !== undefined && object.putGroup !== null
        ? APIV1ClearRequest_PutGroup.fromPartial(object.putGroup)
        : undefined;
    message.getGroupIcon =
      object.getGroupIcon !== undefined && object.getGroupIcon !== null
        ? APIV1ClearRequest_GetGroupIcon.fromPartial(object.getGroupIcon)
        : undefined;
    message.putGroupIcon =
      object.putGroupIcon !== undefined && object.putGroupIcon !== null
        ? APIV1ClearRequest_PutGroupIcon.fromPartial(object.putGroupIcon)
        : undefined;
    message.deleteGroup =
      object.deleteGroup !== undefined && object.deleteGroup !== null
        ? APIV1ClearRequest_DeleteGroup.fromPartial(object.deleteGroup)
        : undefined;
    message.triggerGroup =
      object.triggerGroup !== undefined && object.triggerGroup !== null
        ? APIV1ClearRequest_TriggerGroup.fromPartial(object.triggerGroup)
        : undefined;
    message.getGroups =
      object.getGroups !== undefined && object.getGroups !== null
        ? APIV1ClearRequest_GetGroups.fromPartial(object.getGroups)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearRequest_ClearLayer(): APIV1ClearRequest_ClearLayer {
  return { layer: 0 };
}

export const APIV1ClearRequest_ClearLayer = {
  encode(
    message: APIV1ClearRequest_ClearLayer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearRequest_ClearLayer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_ClearLayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearRequest_ClearLayer {
    return {
      layer: isSet(object.layer) ? aPIV1LayerTypeFromJSON(object.layer) : 0,
    };
  },

  toJSON(message: APIV1ClearRequest_ClearLayer): unknown {
    const obj: any = {};
    if (message.layer !== 0) {
      obj.layer = aPIV1LayerTypeToJSON(message.layer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_ClearLayer>, I>>(
    base?: I,
  ): APIV1ClearRequest_ClearLayer {
    return APIV1ClearRequest_ClearLayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_ClearLayer>, I>>(
    object: I,
  ): APIV1ClearRequest_ClearLayer {
    const message = createBaseAPIV1ClearRequest_ClearLayer();
    message.layer = object.layer ?? 0;
    return message;
  },
};

function createBaseAPIV1ClearRequest_CreateGroup(): APIV1ClearRequest_CreateGroup {
  return { group: undefined };
}

export const APIV1ClearRequest_CreateGroup = {
  encode(
    message: APIV1ClearRequest_CreateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      APIV1ClearGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearRequest_CreateGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_CreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = APIV1ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearRequest_CreateGroup {
    return {
      group: isSet(object.group)
        ? APIV1ClearGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearRequest_CreateGroup): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = APIV1ClearGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_CreateGroup>, I>>(
    base?: I,
  ): APIV1ClearRequest_CreateGroup {
    return APIV1ClearRequest_CreateGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_CreateGroup>, I>>(
    object: I,
  ): APIV1ClearRequest_CreateGroup {
    const message = createBaseAPIV1ClearRequest_CreateGroup();
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ClearGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearRequest_GetGroup(): APIV1ClearRequest_GetGroup {
  return { id: '' };
}

export const APIV1ClearRequest_GetGroup = {
  encode(
    message: APIV1ClearRequest_GetGroup,
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
  ): APIV1ClearRequest_GetGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_GetGroup();
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

  fromJSON(object: any): APIV1ClearRequest_GetGroup {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ClearRequest_GetGroup): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroup>, I>>(
    base?: I,
  ): APIV1ClearRequest_GetGroup {
    return APIV1ClearRequest_GetGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroup>, I>>(
    object: I,
  ): APIV1ClearRequest_GetGroup {
    const message = createBaseAPIV1ClearRequest_GetGroup();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ClearRequest_PutGroup(): APIV1ClearRequest_PutGroup {
  return { id: '', group: undefined };
}

export const APIV1ClearRequest_PutGroup = {
  encode(
    message: APIV1ClearRequest_PutGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.group !== undefined) {
      APIV1ClearGroup.encode(message.group, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearRequest_PutGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_PutGroup();
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

          message.group = APIV1ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearRequest_PutGroup {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      group: isSet(object.group)
        ? APIV1ClearGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearRequest_PutGroup): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.group !== undefined) {
      obj.group = APIV1ClearGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_PutGroup>, I>>(
    base?: I,
  ): APIV1ClearRequest_PutGroup {
    return APIV1ClearRequest_PutGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_PutGroup>, I>>(
    object: I,
  ): APIV1ClearRequest_PutGroup {
    const message = createBaseAPIV1ClearRequest_PutGroup();
    message.id = object.id ?? '';
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ClearGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearRequest_GetGroupIcon(): APIV1ClearRequest_GetGroupIcon {
  return { id: '' };
}

export const APIV1ClearRequest_GetGroupIcon = {
  encode(
    message: APIV1ClearRequest_GetGroupIcon,
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
  ): APIV1ClearRequest_GetGroupIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_GetGroupIcon();
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

  fromJSON(object: any): APIV1ClearRequest_GetGroupIcon {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ClearRequest_GetGroupIcon): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroupIcon>, I>>(
    base?: I,
  ): APIV1ClearRequest_GetGroupIcon {
    return APIV1ClearRequest_GetGroupIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroupIcon>, I>>(
    object: I,
  ): APIV1ClearRequest_GetGroupIcon {
    const message = createBaseAPIV1ClearRequest_GetGroupIcon();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ClearRequest_PutGroupIcon(): APIV1ClearRequest_PutGroupIcon {
  return { id: '', contentType: '', icon: new Uint8Array(0) };
}

export const APIV1ClearRequest_PutGroupIcon = {
  encode(
    message: APIV1ClearRequest_PutGroupIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.contentType !== '') {
      writer.uint32(18).string(message.contentType);
    }
    if (message.icon.length !== 0) {
      writer.uint32(26).bytes(message.icon);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearRequest_PutGroupIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_PutGroupIcon();
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

          message.contentType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.icon = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearRequest_PutGroupIcon {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      contentType: isSet(object.contentType)
        ? globalThis.String(object.contentType)
        : '',
      icon: isSet(object.icon)
        ? bytesFromBase64(object.icon)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1ClearRequest_PutGroupIcon): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.contentType !== '') {
      obj.contentType = message.contentType;
    }
    if (message.icon.length !== 0) {
      obj.icon = base64FromBytes(message.icon);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_PutGroupIcon>, I>>(
    base?: I,
  ): APIV1ClearRequest_PutGroupIcon {
    return APIV1ClearRequest_PutGroupIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_PutGroupIcon>, I>>(
    object: I,
  ): APIV1ClearRequest_PutGroupIcon {
    const message = createBaseAPIV1ClearRequest_PutGroupIcon();
    message.id = object.id ?? '';
    message.contentType = object.contentType ?? '';
    message.icon = object.icon ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1ClearRequest_DeleteGroup(): APIV1ClearRequest_DeleteGroup {
  return { id: '' };
}

export const APIV1ClearRequest_DeleteGroup = {
  encode(
    message: APIV1ClearRequest_DeleteGroup,
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
  ): APIV1ClearRequest_DeleteGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_DeleteGroup();
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

  fromJSON(object: any): APIV1ClearRequest_DeleteGroup {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ClearRequest_DeleteGroup): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_DeleteGroup>, I>>(
    base?: I,
  ): APIV1ClearRequest_DeleteGroup {
    return APIV1ClearRequest_DeleteGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_DeleteGroup>, I>>(
    object: I,
  ): APIV1ClearRequest_DeleteGroup {
    const message = createBaseAPIV1ClearRequest_DeleteGroup();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ClearRequest_TriggerGroup(): APIV1ClearRequest_TriggerGroup {
  return { id: '' };
}

export const APIV1ClearRequest_TriggerGroup = {
  encode(
    message: APIV1ClearRequest_TriggerGroup,
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
  ): APIV1ClearRequest_TriggerGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_TriggerGroup();
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

  fromJSON(object: any): APIV1ClearRequest_TriggerGroup {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1ClearRequest_TriggerGroup): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_TriggerGroup>, I>>(
    base?: I,
  ): APIV1ClearRequest_TriggerGroup {
    return APIV1ClearRequest_TriggerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_TriggerGroup>, I>>(
    object: I,
  ): APIV1ClearRequest_TriggerGroup {
    const message = createBaseAPIV1ClearRequest_TriggerGroup();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1ClearRequest_GetGroups(): APIV1ClearRequest_GetGroups {
  return {};
}

export const APIV1ClearRequest_GetGroups = {
  encode(
    _: APIV1ClearRequest_GetGroups,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearRequest_GetGroups {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearRequest_GetGroups();
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

  fromJSON(_: any): APIV1ClearRequest_GetGroups {
    return {};
  },

  toJSON(_: APIV1ClearRequest_GetGroups): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroups>, I>>(
    base?: I,
  ): APIV1ClearRequest_GetGroups {
    return APIV1ClearRequest_GetGroups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearRequest_GetGroups>, I>>(
    _: I,
  ): APIV1ClearRequest_GetGroups {
    const message = createBaseAPIV1ClearRequest_GetGroups();
    return message;
  },
};

function createBaseAPIV1ClearResponse(): APIV1ClearResponse {
  return {
    clearLayer: undefined,
    createGroup: undefined,
    getGroup: undefined,
    putGroup: undefined,
    deleteGroup: undefined,
    triggerGroup: undefined,
    getGroups: undefined,
    getGroupIcon: undefined,
    putGroupIcon: undefined,
  };
}

export const APIV1ClearResponse = {
  encode(
    message: APIV1ClearResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clearLayer !== undefined) {
      APIV1ClearResponse_ClearLayer.encode(
        message.clearLayer,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createGroup !== undefined) {
      APIV1ClearResponse_CreateGroup.encode(
        message.createGroup,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getGroup !== undefined) {
      APIV1ClearResponse_GetGroup.encode(
        message.getGroup,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putGroup !== undefined) {
      APIV1ClearResponse_PutGroup.encode(
        message.putGroup,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.deleteGroup !== undefined) {
      APIV1ClearResponse_DeleteGroup.encode(
        message.deleteGroup,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.triggerGroup !== undefined) {
      APIV1ClearResponse_TriggerGroup.encode(
        message.triggerGroup,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getGroups !== undefined) {
      APIV1ClearResponse_GetGroups.encode(
        message.getGroups,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getGroupIcon !== undefined) {
      APIV1ClearResponse_GetGroupIcon.encode(
        message.getGroupIcon,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.putGroupIcon !== undefined) {
      APIV1ClearResponse_PutGroupIcon.encode(
        message.putGroupIcon,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ClearResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clearLayer = APIV1ClearResponse_ClearLayer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createGroup = APIV1ClearResponse_CreateGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getGroup = APIV1ClearResponse_GetGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putGroup = APIV1ClearResponse_PutGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleteGroup = APIV1ClearResponse_DeleteGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.triggerGroup = APIV1ClearResponse_TriggerGroup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getGroups = APIV1ClearResponse_GetGroups.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.getGroupIcon = APIV1ClearResponse_GetGroupIcon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.putGroupIcon = APIV1ClearResponse_PutGroupIcon.decode(
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

  fromJSON(object: any): APIV1ClearResponse {
    return {
      clearLayer: isSet(object.clearLayer)
        ? APIV1ClearResponse_ClearLayer.fromJSON(object.clearLayer)
        : undefined,
      createGroup: isSet(object.createGroup)
        ? APIV1ClearResponse_CreateGroup.fromJSON(object.createGroup)
        : undefined,
      getGroup: isSet(object.getGroup)
        ? APIV1ClearResponse_GetGroup.fromJSON(object.getGroup)
        : undefined,
      putGroup: isSet(object.putGroup)
        ? APIV1ClearResponse_PutGroup.fromJSON(object.putGroup)
        : undefined,
      deleteGroup: isSet(object.deleteGroup)
        ? APIV1ClearResponse_DeleteGroup.fromJSON(object.deleteGroup)
        : undefined,
      triggerGroup: isSet(object.triggerGroup)
        ? APIV1ClearResponse_TriggerGroup.fromJSON(object.triggerGroup)
        : undefined,
      getGroups: isSet(object.getGroups)
        ? APIV1ClearResponse_GetGroups.fromJSON(object.getGroups)
        : undefined,
      getGroupIcon: isSet(object.getGroupIcon)
        ? APIV1ClearResponse_GetGroupIcon.fromJSON(object.getGroupIcon)
        : undefined,
      putGroupIcon: isSet(object.putGroupIcon)
        ? APIV1ClearResponse_PutGroupIcon.fromJSON(object.putGroupIcon)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearResponse): unknown {
    const obj: any = {};
    if (message.clearLayer !== undefined) {
      obj.clearLayer = APIV1ClearResponse_ClearLayer.toJSON(message.clearLayer);
    }
    if (message.createGroup !== undefined) {
      obj.createGroup = APIV1ClearResponse_CreateGroup.toJSON(
        message.createGroup,
      );
    }
    if (message.getGroup !== undefined) {
      obj.getGroup = APIV1ClearResponse_GetGroup.toJSON(message.getGroup);
    }
    if (message.putGroup !== undefined) {
      obj.putGroup = APIV1ClearResponse_PutGroup.toJSON(message.putGroup);
    }
    if (message.deleteGroup !== undefined) {
      obj.deleteGroup = APIV1ClearResponse_DeleteGroup.toJSON(
        message.deleteGroup,
      );
    }
    if (message.triggerGroup !== undefined) {
      obj.triggerGroup = APIV1ClearResponse_TriggerGroup.toJSON(
        message.triggerGroup,
      );
    }
    if (message.getGroups !== undefined) {
      obj.getGroups = APIV1ClearResponse_GetGroups.toJSON(message.getGroups);
    }
    if (message.getGroupIcon !== undefined) {
      obj.getGroupIcon = APIV1ClearResponse_GetGroupIcon.toJSON(
        message.getGroupIcon,
      );
    }
    if (message.putGroupIcon !== undefined) {
      obj.putGroupIcon = APIV1ClearResponse_PutGroupIcon.toJSON(
        message.putGroupIcon,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse>, I>>(
    base?: I,
  ): APIV1ClearResponse {
    return APIV1ClearResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse>, I>>(
    object: I,
  ): APIV1ClearResponse {
    const message = createBaseAPIV1ClearResponse();
    message.clearLayer =
      object.clearLayer !== undefined && object.clearLayer !== null
        ? APIV1ClearResponse_ClearLayer.fromPartial(object.clearLayer)
        : undefined;
    message.createGroup =
      object.createGroup !== undefined && object.createGroup !== null
        ? APIV1ClearResponse_CreateGroup.fromPartial(object.createGroup)
        : undefined;
    message.getGroup =
      object.getGroup !== undefined && object.getGroup !== null
        ? APIV1ClearResponse_GetGroup.fromPartial(object.getGroup)
        : undefined;
    message.putGroup =
      object.putGroup !== undefined && object.putGroup !== null
        ? APIV1ClearResponse_PutGroup.fromPartial(object.putGroup)
        : undefined;
    message.deleteGroup =
      object.deleteGroup !== undefined && object.deleteGroup !== null
        ? APIV1ClearResponse_DeleteGroup.fromPartial(object.deleteGroup)
        : undefined;
    message.triggerGroup =
      object.triggerGroup !== undefined && object.triggerGroup !== null
        ? APIV1ClearResponse_TriggerGroup.fromPartial(object.triggerGroup)
        : undefined;
    message.getGroups =
      object.getGroups !== undefined && object.getGroups !== null
        ? APIV1ClearResponse_GetGroups.fromPartial(object.getGroups)
        : undefined;
    message.getGroupIcon =
      object.getGroupIcon !== undefined && object.getGroupIcon !== null
        ? APIV1ClearResponse_GetGroupIcon.fromPartial(object.getGroupIcon)
        : undefined;
    message.putGroupIcon =
      object.putGroupIcon !== undefined && object.putGroupIcon !== null
        ? APIV1ClearResponse_PutGroupIcon.fromPartial(object.putGroupIcon)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearResponse_ClearLayer(): APIV1ClearResponse_ClearLayer {
  return {};
}

export const APIV1ClearResponse_ClearLayer = {
  encode(
    _: APIV1ClearResponse_ClearLayer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_ClearLayer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_ClearLayer();
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

  fromJSON(_: any): APIV1ClearResponse_ClearLayer {
    return {};
  },

  toJSON(_: APIV1ClearResponse_ClearLayer): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_ClearLayer>, I>>(
    base?: I,
  ): APIV1ClearResponse_ClearLayer {
    return APIV1ClearResponse_ClearLayer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_ClearLayer>, I>>(
    _: I,
  ): APIV1ClearResponse_ClearLayer {
    const message = createBaseAPIV1ClearResponse_ClearLayer();
    return message;
  },
};

function createBaseAPIV1ClearResponse_PutGroup(): APIV1ClearResponse_PutGroup {
  return { group: undefined };
}

export const APIV1ClearResponse_PutGroup = {
  encode(
    message: APIV1ClearResponse_PutGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      APIV1ClearGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_PutGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_PutGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = APIV1ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearResponse_PutGroup {
    return {
      group: isSet(object.group)
        ? APIV1ClearGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearResponse_PutGroup): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = APIV1ClearGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_PutGroup>, I>>(
    base?: I,
  ): APIV1ClearResponse_PutGroup {
    return APIV1ClearResponse_PutGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_PutGroup>, I>>(
    object: I,
  ): APIV1ClearResponse_PutGroup {
    const message = createBaseAPIV1ClearResponse_PutGroup();
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ClearGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearResponse_DeleteGroup(): APIV1ClearResponse_DeleteGroup {
  return {};
}

export const APIV1ClearResponse_DeleteGroup = {
  encode(
    _: APIV1ClearResponse_DeleteGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_DeleteGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_DeleteGroup();
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

  fromJSON(_: any): APIV1ClearResponse_DeleteGroup {
    return {};
  },

  toJSON(_: APIV1ClearResponse_DeleteGroup): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_DeleteGroup>, I>>(
    base?: I,
  ): APIV1ClearResponse_DeleteGroup {
    return APIV1ClearResponse_DeleteGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_DeleteGroup>, I>>(
    _: I,
  ): APIV1ClearResponse_DeleteGroup {
    const message = createBaseAPIV1ClearResponse_DeleteGroup();
    return message;
  },
};

function createBaseAPIV1ClearResponse_TriggerGroup(): APIV1ClearResponse_TriggerGroup {
  return {};
}

export const APIV1ClearResponse_TriggerGroup = {
  encode(
    _: APIV1ClearResponse_TriggerGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_TriggerGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_TriggerGroup();
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

  fromJSON(_: any): APIV1ClearResponse_TriggerGroup {
    return {};
  },

  toJSON(_: APIV1ClearResponse_TriggerGroup): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_TriggerGroup>, I>>(
    base?: I,
  ): APIV1ClearResponse_TriggerGroup {
    return APIV1ClearResponse_TriggerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_TriggerGroup>, I>>(
    _: I,
  ): APIV1ClearResponse_TriggerGroup {
    const message = createBaseAPIV1ClearResponse_TriggerGroup();
    return message;
  },
};

function createBaseAPIV1ClearResponse_CreateGroup(): APIV1ClearResponse_CreateGroup {
  return { group: undefined };
}

export const APIV1ClearResponse_CreateGroup = {
  encode(
    message: APIV1ClearResponse_CreateGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      APIV1ClearGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_CreateGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_CreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = APIV1ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearResponse_CreateGroup {
    return {
      group: isSet(object.group)
        ? APIV1ClearGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearResponse_CreateGroup): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = APIV1ClearGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_CreateGroup>, I>>(
    base?: I,
  ): APIV1ClearResponse_CreateGroup {
    return APIV1ClearResponse_CreateGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_CreateGroup>, I>>(
    object: I,
  ): APIV1ClearResponse_CreateGroup {
    const message = createBaseAPIV1ClearResponse_CreateGroup();
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ClearGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearResponse_GetGroup(): APIV1ClearResponse_GetGroup {
  return { group: undefined };
}

export const APIV1ClearResponse_GetGroup = {
  encode(
    message: APIV1ClearResponse_GetGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      APIV1ClearGroup.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_GetGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_GetGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = APIV1ClearGroup.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearResponse_GetGroup {
    return {
      group: isSet(object.group)
        ? APIV1ClearGroup.fromJSON(object.group)
        : undefined,
    };
  },

  toJSON(message: APIV1ClearResponse_GetGroup): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = APIV1ClearGroup.toJSON(message.group);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroup>, I>>(
    base?: I,
  ): APIV1ClearResponse_GetGroup {
    return APIV1ClearResponse_GetGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroup>, I>>(
    object: I,
  ): APIV1ClearResponse_GetGroup {
    const message = createBaseAPIV1ClearResponse_GetGroup();
    message.group =
      object.group !== undefined && object.group !== null
        ? APIV1ClearGroup.fromPartial(object.group)
        : undefined;
    return message;
  },
};

function createBaseAPIV1ClearResponse_GetGroups(): APIV1ClearResponse_GetGroups {
  return { groups: [] };
}

export const APIV1ClearResponse_GetGroups = {
  encode(
    message: APIV1ClearResponse_GetGroups,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      APIV1ClearGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_GetGroups {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_GetGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(APIV1ClearGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearResponse_GetGroups {
    return {
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) => APIV1ClearGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1ClearResponse_GetGroups): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => APIV1ClearGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroups>, I>>(
    base?: I,
  ): APIV1ClearResponse_GetGroups {
    return APIV1ClearResponse_GetGroups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroups>, I>>(
    object: I,
  ): APIV1ClearResponse_GetGroups {
    const message = createBaseAPIV1ClearResponse_GetGroups();
    message.groups =
      object.groups?.map((e) => APIV1ClearGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1ClearResponse_GetGroupIcon(): APIV1ClearResponse_GetGroupIcon {
  return { contentType: '', icon: new Uint8Array(0) };
}

export const APIV1ClearResponse_GetGroupIcon = {
  encode(
    message: APIV1ClearResponse_GetGroupIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contentType !== '') {
      writer.uint32(10).string(message.contentType);
    }
    if (message.icon.length !== 0) {
      writer.uint32(18).bytes(message.icon);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_GetGroupIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_GetGroupIcon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.icon = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ClearResponse_GetGroupIcon {
    return {
      contentType: isSet(object.contentType)
        ? globalThis.String(object.contentType)
        : '',
      icon: isSet(object.icon)
        ? bytesFromBase64(object.icon)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1ClearResponse_GetGroupIcon): unknown {
    const obj: any = {};
    if (message.contentType !== '') {
      obj.contentType = message.contentType;
    }
    if (message.icon.length !== 0) {
      obj.icon = base64FromBytes(message.icon);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroupIcon>, I>>(
    base?: I,
  ): APIV1ClearResponse_GetGroupIcon {
    return APIV1ClearResponse_GetGroupIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_GetGroupIcon>, I>>(
    object: I,
  ): APIV1ClearResponse_GetGroupIcon {
    const message = createBaseAPIV1ClearResponse_GetGroupIcon();
    message.contentType = object.contentType ?? '';
    message.icon = object.icon ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1ClearResponse_PutGroupIcon(): APIV1ClearResponse_PutGroupIcon {
  return {};
}

export const APIV1ClearResponse_PutGroupIcon = {
  encode(
    _: APIV1ClearResponse_PutGroupIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1ClearResponse_PutGroupIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ClearResponse_PutGroupIcon();
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

  fromJSON(_: any): APIV1ClearResponse_PutGroupIcon {
    return {};
  },

  toJSON(_: APIV1ClearResponse_PutGroupIcon): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ClearResponse_PutGroupIcon>, I>>(
    base?: I,
  ): APIV1ClearResponse_PutGroupIcon {
    return APIV1ClearResponse_PutGroupIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ClearResponse_PutGroupIcon>, I>>(
    _: I,
  ): APIV1ClearResponse_PutGroupIcon {
    const message = createBaseAPIV1ClearResponse_PutGroupIcon();
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
