/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { URL } from './basicTypes';
import { Presentation_CCLI } from './presentation';
import { Timestamp } from './rvtimestamp';

export const protobufPackage = 'rv.data';

export interface PlanningCenterPlan {
  planIdNum: number;
  parentIdNum: number;
  seriesTitle: string;
  planTitle: string;
  dateList: string;
  createdDate: Timestamp | undefined;
  updateDate: Timestamp | undefined;
  lastUpdateCheckDate: Timestamp | undefined;
  planIdStr: string;
  parentIdStr: string;
}

export interface PlanningCenterPlan_PlanItem {
  itemType: PlanningCenterPlan_PlanItem_PlanItemType;
  pcoIdNum: number;
  serviceIdNum: number;
  parentIdNum: number;
  name: string;
  attachments: PlanningCenterPlan_PlanItem_Attachment[];
  updateDate: Timestamp | undefined;
  linkedSong: PlanningCenterPlan_PlanItem_SongItem | undefined;
  pcoIdStr: string;
  serviceIdStr: string;
  parentIdStr: string;
}

export enum PlanningCenterPlan_PlanItem_PlanItemType {
  PLAN_ITEM_TYPE_ITEM = 0,
  PLAN_ITEM_TYPE_SONG = 1,
  PLAN_ITEM_TYPE_MEDIA = 2,
  PLAN_ITEM_TYPE_HEADER = 3,
  UNRECOGNIZED = -1,
}

export function planningCenterPlan_PlanItem_PlanItemTypeFromJSON(
  object: any,
): PlanningCenterPlan_PlanItem_PlanItemType {
  switch (object) {
    case 0:
    case 'PLAN_ITEM_TYPE_ITEM':
      return PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_ITEM;
    case 1:
    case 'PLAN_ITEM_TYPE_SONG':
      return PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_SONG;
    case 2:
    case 'PLAN_ITEM_TYPE_MEDIA':
      return PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_MEDIA;
    case 3:
    case 'PLAN_ITEM_TYPE_HEADER':
      return PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_HEADER;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PlanningCenterPlan_PlanItem_PlanItemType.UNRECOGNIZED;
  }
}

export function planningCenterPlan_PlanItem_PlanItemTypeToJSON(
  object: PlanningCenterPlan_PlanItem_PlanItemType,
): string {
  switch (object) {
    case PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_ITEM:
      return 'PLAN_ITEM_TYPE_ITEM';
    case PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_SONG:
      return 'PLAN_ITEM_TYPE_SONG';
    case PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_MEDIA:
      return 'PLAN_ITEM_TYPE_MEDIA';
    case PlanningCenterPlan_PlanItem_PlanItemType.PLAN_ITEM_TYPE_HEADER:
      return 'PLAN_ITEM_TYPE_HEADER';
    case PlanningCenterPlan_PlanItem_PlanItemType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface PlanningCenterPlan_PlanItem_Attachment {
  name: string;
  url: URL | undefined;
  createdDate: Timestamp | undefined;
  linkedPath: URL | undefined;
  pcoIdNum: number;
  needsUpdate: boolean;
  updateDate: Timestamp | undefined;
  pcoIdStr: string;
}

export interface PlanningCenterPlan_PlanItem_SongItem {
  pcoIdNum: number;
  arrangementIdNum: number;
  ccli: Presentation_CCLI | undefined;
  sequence: PlanningCenterPlan_PlanItem_SongItem_Sequence | undefined;
  pcoIdStr: string;
  arrangementIdStr: string;
}

export interface PlanningCenterPlan_PlanItem_SongItem_Sequence {
  pcoIdNum: number;
  name: string;
  groupNames: string[];
  pcoIdStr: string;
}

function createBasePlanningCenterPlan(): PlanningCenterPlan {
  return {
    planIdNum: 0,
    parentIdNum: 0,
    seriesTitle: '',
    planTitle: '',
    dateList: '',
    createdDate: undefined,
    updateDate: undefined,
    lastUpdateCheckDate: undefined,
    planIdStr: '',
    parentIdStr: '',
  };
}

export const PlanningCenterPlan = {
  encode(
    message: PlanningCenterPlan,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.planIdNum !== 0) {
      writer.uint32(8).uint32(message.planIdNum);
    }
    if (message.parentIdNum !== 0) {
      writer.uint32(16).uint32(message.parentIdNum);
    }
    if (message.seriesTitle !== '') {
      writer.uint32(26).string(message.seriesTitle);
    }
    if (message.planTitle !== '') {
      writer.uint32(34).string(message.planTitle);
    }
    if (message.dateList !== '') {
      writer.uint32(42).string(message.dateList);
    }
    if (message.createdDate !== undefined) {
      Timestamp.encode(message.createdDate, writer.uint32(50).fork()).ldelim();
    }
    if (message.updateDate !== undefined) {
      Timestamp.encode(message.updateDate, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastUpdateCheckDate !== undefined) {
      Timestamp.encode(
        message.lastUpdateCheckDate,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.planIdStr !== '') {
      writer.uint32(74).string(message.planIdStr);
    }
    if (message.parentIdStr !== '') {
      writer.uint32(82).string(message.parentIdStr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanningCenterPlan {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanningCenterPlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.planIdNum = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.parentIdNum = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.seriesTitle = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.planTitle = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.dateList = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.createdDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.updateDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.lastUpdateCheckDate = Timestamp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.planIdStr = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.parentIdStr = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanningCenterPlan {
    return {
      planIdNum: isSet(object.planIdNum) ? Number(object.planIdNum) : 0,
      parentIdNum: isSet(object.parentIdNum) ? Number(object.parentIdNum) : 0,
      seriesTitle: isSet(object.seriesTitle) ? String(object.seriesTitle) : '',
      planTitle: isSet(object.planTitle) ? String(object.planTitle) : '',
      dateList: isSet(object.dateList) ? String(object.dateList) : '',
      createdDate: isSet(object.createdDate)
        ? Timestamp.fromJSON(object.createdDate)
        : undefined,
      updateDate: isSet(object.updateDate)
        ? Timestamp.fromJSON(object.updateDate)
        : undefined,
      lastUpdateCheckDate: isSet(object.lastUpdateCheckDate)
        ? Timestamp.fromJSON(object.lastUpdateCheckDate)
        : undefined,
      planIdStr: isSet(object.planIdStr) ? String(object.planIdStr) : '',
      parentIdStr: isSet(object.parentIdStr) ? String(object.parentIdStr) : '',
    };
  },

  toJSON(message: PlanningCenterPlan): unknown {
    const obj: any = {};
    message.planIdNum !== undefined &&
      (obj.planIdNum = Math.round(message.planIdNum));
    message.parentIdNum !== undefined &&
      (obj.parentIdNum = Math.round(message.parentIdNum));
    message.seriesTitle !== undefined &&
      (obj.seriesTitle = message.seriesTitle);
    message.planTitle !== undefined && (obj.planTitle = message.planTitle);
    message.dateList !== undefined && (obj.dateList = message.dateList);
    message.createdDate !== undefined &&
      (obj.createdDate = message.createdDate
        ? Timestamp.toJSON(message.createdDate)
        : undefined);
    message.updateDate !== undefined &&
      (obj.updateDate = message.updateDate
        ? Timestamp.toJSON(message.updateDate)
        : undefined);
    message.lastUpdateCheckDate !== undefined &&
      (obj.lastUpdateCheckDate = message.lastUpdateCheckDate
        ? Timestamp.toJSON(message.lastUpdateCheckDate)
        : undefined);
    message.planIdStr !== undefined && (obj.planIdStr = message.planIdStr);
    message.parentIdStr !== undefined &&
      (obj.parentIdStr = message.parentIdStr);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanningCenterPlan>, I>>(
    base?: I,
  ): PlanningCenterPlan {
    return PlanningCenterPlan.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlanningCenterPlan>, I>>(
    object: I,
  ): PlanningCenterPlan {
    const message = createBasePlanningCenterPlan();
    message.planIdNum = object.planIdNum ?? 0;
    message.parentIdNum = object.parentIdNum ?? 0;
    message.seriesTitle = object.seriesTitle ?? '';
    message.planTitle = object.planTitle ?? '';
    message.dateList = object.dateList ?? '';
    message.createdDate =
      object.createdDate !== undefined && object.createdDate !== null
        ? Timestamp.fromPartial(object.createdDate)
        : undefined;
    message.updateDate =
      object.updateDate !== undefined && object.updateDate !== null
        ? Timestamp.fromPartial(object.updateDate)
        : undefined;
    message.lastUpdateCheckDate =
      object.lastUpdateCheckDate !== undefined &&
      object.lastUpdateCheckDate !== null
        ? Timestamp.fromPartial(object.lastUpdateCheckDate)
        : undefined;
    message.planIdStr = object.planIdStr ?? '';
    message.parentIdStr = object.parentIdStr ?? '';
    return message;
  },
};

function createBasePlanningCenterPlan_PlanItem(): PlanningCenterPlan_PlanItem {
  return {
    itemType: 0,
    pcoIdNum: 0,
    serviceIdNum: 0,
    parentIdNum: 0,
    name: '',
    attachments: [],
    updateDate: undefined,
    linkedSong: undefined,
    pcoIdStr: '',
    serviceIdStr: '',
    parentIdStr: '',
  };
}

export const PlanningCenterPlan_PlanItem = {
  encode(
    message: PlanningCenterPlan_PlanItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.itemType !== 0) {
      writer.uint32(8).int32(message.itemType);
    }
    if (message.pcoIdNum !== 0) {
      writer.uint32(16).uint32(message.pcoIdNum);
    }
    if (message.serviceIdNum !== 0) {
      writer.uint32(24).uint32(message.serviceIdNum);
    }
    if (message.parentIdNum !== 0) {
      writer.uint32(32).uint32(message.parentIdNum);
    }
    if (message.name !== '') {
      writer.uint32(42).string(message.name);
    }
    for (const v of message.attachments) {
      PlanningCenterPlan_PlanItem_Attachment.encode(
        v!,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.updateDate !== undefined) {
      Timestamp.encode(message.updateDate, writer.uint32(58).fork()).ldelim();
    }
    if (message.linkedSong !== undefined) {
      PlanningCenterPlan_PlanItem_SongItem.encode(
        message.linkedSong,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.pcoIdStr !== '') {
      writer.uint32(74).string(message.pcoIdStr);
    }
    if (message.serviceIdStr !== '') {
      writer.uint32(82).string(message.serviceIdStr);
    }
    if (message.parentIdStr !== '') {
      writer.uint32(90).string(message.parentIdStr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanningCenterPlan_PlanItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanningCenterPlan_PlanItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.itemType = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.pcoIdNum = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.serviceIdNum = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.parentIdNum = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.attachments.push(
            PlanningCenterPlan_PlanItem_Attachment.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.updateDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.linkedSong = PlanningCenterPlan_PlanItem_SongItem.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.pcoIdStr = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.serviceIdStr = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.parentIdStr = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanningCenterPlan_PlanItem {
    return {
      itemType: isSet(object.itemType)
        ? planningCenterPlan_PlanItem_PlanItemTypeFromJSON(object.itemType)
        : 0,
      pcoIdNum: isSet(object.pcoIdNum) ? Number(object.pcoIdNum) : 0,
      serviceIdNum: isSet(object.serviceIdNum)
        ? Number(object.serviceIdNum)
        : 0,
      parentIdNum: isSet(object.parentIdNum) ? Number(object.parentIdNum) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      attachments: Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) =>
            PlanningCenterPlan_PlanItem_Attachment.fromJSON(e),
          )
        : [],
      updateDate: isSet(object.updateDate)
        ? Timestamp.fromJSON(object.updateDate)
        : undefined,
      linkedSong: isSet(object.linkedSong)
        ? PlanningCenterPlan_PlanItem_SongItem.fromJSON(object.linkedSong)
        : undefined,
      pcoIdStr: isSet(object.pcoIdStr) ? String(object.pcoIdStr) : '',
      serviceIdStr: isSet(object.serviceIdStr)
        ? String(object.serviceIdStr)
        : '',
      parentIdStr: isSet(object.parentIdStr) ? String(object.parentIdStr) : '',
    };
  },

  toJSON(message: PlanningCenterPlan_PlanItem): unknown {
    const obj: any = {};
    message.itemType !== undefined &&
      (obj.itemType = planningCenterPlan_PlanItem_PlanItemTypeToJSON(
        message.itemType,
      ));
    message.pcoIdNum !== undefined &&
      (obj.pcoIdNum = Math.round(message.pcoIdNum));
    message.serviceIdNum !== undefined &&
      (obj.serviceIdNum = Math.round(message.serviceIdNum));
    message.parentIdNum !== undefined &&
      (obj.parentIdNum = Math.round(message.parentIdNum));
    message.name !== undefined && (obj.name = message.name);
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? PlanningCenterPlan_PlanItem_Attachment.toJSON(e) : undefined,
      );
    } else {
      obj.attachments = [];
    }
    message.updateDate !== undefined &&
      (obj.updateDate = message.updateDate
        ? Timestamp.toJSON(message.updateDate)
        : undefined);
    message.linkedSong !== undefined &&
      (obj.linkedSong = message.linkedSong
        ? PlanningCenterPlan_PlanItem_SongItem.toJSON(message.linkedSong)
        : undefined);
    message.pcoIdStr !== undefined && (obj.pcoIdStr = message.pcoIdStr);
    message.serviceIdStr !== undefined &&
      (obj.serviceIdStr = message.serviceIdStr);
    message.parentIdStr !== undefined &&
      (obj.parentIdStr = message.parentIdStr);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem>, I>>(
    base?: I,
  ): PlanningCenterPlan_PlanItem {
    return PlanningCenterPlan_PlanItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem>, I>>(
    object: I,
  ): PlanningCenterPlan_PlanItem {
    const message = createBasePlanningCenterPlan_PlanItem();
    message.itemType = object.itemType ?? 0;
    message.pcoIdNum = object.pcoIdNum ?? 0;
    message.serviceIdNum = object.serviceIdNum ?? 0;
    message.parentIdNum = object.parentIdNum ?? 0;
    message.name = object.name ?? '';
    message.attachments =
      object.attachments?.map((e) =>
        PlanningCenterPlan_PlanItem_Attachment.fromPartial(e),
      ) || [];
    message.updateDate =
      object.updateDate !== undefined && object.updateDate !== null
        ? Timestamp.fromPartial(object.updateDate)
        : undefined;
    message.linkedSong =
      object.linkedSong !== undefined && object.linkedSong !== null
        ? PlanningCenterPlan_PlanItem_SongItem.fromPartial(object.linkedSong)
        : undefined;
    message.pcoIdStr = object.pcoIdStr ?? '';
    message.serviceIdStr = object.serviceIdStr ?? '';
    message.parentIdStr = object.parentIdStr ?? '';
    return message;
  },
};

function createBasePlanningCenterPlan_PlanItem_Attachment(): PlanningCenterPlan_PlanItem_Attachment {
  return {
    name: '',
    url: undefined,
    createdDate: undefined,
    linkedPath: undefined,
    pcoIdNum: 0,
    needsUpdate: false,
    updateDate: undefined,
    pcoIdStr: '',
  };
}

export const PlanningCenterPlan_PlanItem_Attachment = {
  encode(
    message: PlanningCenterPlan_PlanItem_Attachment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== undefined) {
      URL.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    if (message.createdDate !== undefined) {
      Timestamp.encode(message.createdDate, writer.uint32(26).fork()).ldelim();
    }
    if (message.linkedPath !== undefined) {
      URL.encode(message.linkedPath, writer.uint32(34).fork()).ldelim();
    }
    if (message.pcoIdNum !== 0) {
      writer.uint32(40).uint32(message.pcoIdNum);
    }
    if (message.needsUpdate === true) {
      writer.uint32(48).bool(message.needsUpdate);
    }
    if (message.updateDate !== undefined) {
      Timestamp.encode(message.updateDate, writer.uint32(58).fork()).ldelim();
    }
    if (message.pcoIdStr !== '') {
      writer.uint32(66).string(message.pcoIdStr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanningCenterPlan_PlanItem_Attachment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanningCenterPlan_PlanItem_Attachment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.url = URL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.createdDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.linkedPath = URL.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.pcoIdNum = reader.uint32();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.needsUpdate = reader.bool();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.updateDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.pcoIdStr = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanningCenterPlan_PlanItem_Attachment {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      url: isSet(object.url) ? URL.fromJSON(object.url) : undefined,
      createdDate: isSet(object.createdDate)
        ? Timestamp.fromJSON(object.createdDate)
        : undefined,
      linkedPath: isSet(object.linkedPath)
        ? URL.fromJSON(object.linkedPath)
        : undefined,
      pcoIdNum: isSet(object.pcoIdNum) ? Number(object.pcoIdNum) : 0,
      needsUpdate: isSet(object.needsUpdate)
        ? Boolean(object.needsUpdate)
        : false,
      updateDate: isSet(object.updateDate)
        ? Timestamp.fromJSON(object.updateDate)
        : undefined,
      pcoIdStr: isSet(object.pcoIdStr) ? String(object.pcoIdStr) : '',
    };
  },

  toJSON(message: PlanningCenterPlan_PlanItem_Attachment): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined &&
      (obj.url = message.url ? URL.toJSON(message.url) : undefined);
    message.createdDate !== undefined &&
      (obj.createdDate = message.createdDate
        ? Timestamp.toJSON(message.createdDate)
        : undefined);
    message.linkedPath !== undefined &&
      (obj.linkedPath = message.linkedPath
        ? URL.toJSON(message.linkedPath)
        : undefined);
    message.pcoIdNum !== undefined &&
      (obj.pcoIdNum = Math.round(message.pcoIdNum));
    message.needsUpdate !== undefined &&
      (obj.needsUpdate = message.needsUpdate);
    message.updateDate !== undefined &&
      (obj.updateDate = message.updateDate
        ? Timestamp.toJSON(message.updateDate)
        : undefined);
    message.pcoIdStr !== undefined && (obj.pcoIdStr = message.pcoIdStr);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem_Attachment>, I>,
  >(base?: I): PlanningCenterPlan_PlanItem_Attachment {
    return PlanningCenterPlan_PlanItem_Attachment.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem_Attachment>, I>,
  >(object: I): PlanningCenterPlan_PlanItem_Attachment {
    const message = createBasePlanningCenterPlan_PlanItem_Attachment();
    message.name = object.name ?? '';
    message.url =
      object.url !== undefined && object.url !== null
        ? URL.fromPartial(object.url)
        : undefined;
    message.createdDate =
      object.createdDate !== undefined && object.createdDate !== null
        ? Timestamp.fromPartial(object.createdDate)
        : undefined;
    message.linkedPath =
      object.linkedPath !== undefined && object.linkedPath !== null
        ? URL.fromPartial(object.linkedPath)
        : undefined;
    message.pcoIdNum = object.pcoIdNum ?? 0;
    message.needsUpdate = object.needsUpdate ?? false;
    message.updateDate =
      object.updateDate !== undefined && object.updateDate !== null
        ? Timestamp.fromPartial(object.updateDate)
        : undefined;
    message.pcoIdStr = object.pcoIdStr ?? '';
    return message;
  },
};

function createBasePlanningCenterPlan_PlanItem_SongItem(): PlanningCenterPlan_PlanItem_SongItem {
  return {
    pcoIdNum: 0,
    arrangementIdNum: 0,
    ccli: undefined,
    sequence: undefined,
    pcoIdStr: '',
    arrangementIdStr: '',
  };
}

export const PlanningCenterPlan_PlanItem_SongItem = {
  encode(
    message: PlanningCenterPlan_PlanItem_SongItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pcoIdNum !== 0) {
      writer.uint32(8).uint32(message.pcoIdNum);
    }
    if (message.arrangementIdNum !== 0) {
      writer.uint32(16).uint32(message.arrangementIdNum);
    }
    if (message.ccli !== undefined) {
      Presentation_CCLI.encode(message.ccli, writer.uint32(26).fork()).ldelim();
    }
    if (message.sequence !== undefined) {
      PlanningCenterPlan_PlanItem_SongItem_Sequence.encode(
        message.sequence,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.pcoIdStr !== '') {
      writer.uint32(42).string(message.pcoIdStr);
    }
    if (message.arrangementIdStr !== '') {
      writer.uint32(50).string(message.arrangementIdStr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanningCenterPlan_PlanItem_SongItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanningCenterPlan_PlanItem_SongItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pcoIdNum = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.arrangementIdNum = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.ccli = Presentation_CCLI.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.sequence =
            PlanningCenterPlan_PlanItem_SongItem_Sequence.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.pcoIdStr = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.arrangementIdStr = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanningCenterPlan_PlanItem_SongItem {
    return {
      pcoIdNum: isSet(object.pcoIdNum) ? Number(object.pcoIdNum) : 0,
      arrangementIdNum: isSet(object.arrangementIdNum)
        ? Number(object.arrangementIdNum)
        : 0,
      ccli: isSet(object.ccli)
        ? Presentation_CCLI.fromJSON(object.ccli)
        : undefined,
      sequence: isSet(object.sequence)
        ? PlanningCenterPlan_PlanItem_SongItem_Sequence.fromJSON(
            object.sequence,
          )
        : undefined,
      pcoIdStr: isSet(object.pcoIdStr) ? String(object.pcoIdStr) : '',
      arrangementIdStr: isSet(object.arrangementIdStr)
        ? String(object.arrangementIdStr)
        : '',
    };
  },

  toJSON(message: PlanningCenterPlan_PlanItem_SongItem): unknown {
    const obj: any = {};
    message.pcoIdNum !== undefined &&
      (obj.pcoIdNum = Math.round(message.pcoIdNum));
    message.arrangementIdNum !== undefined &&
      (obj.arrangementIdNum = Math.round(message.arrangementIdNum));
    message.ccli !== undefined &&
      (obj.ccli = message.ccli
        ? Presentation_CCLI.toJSON(message.ccli)
        : undefined);
    message.sequence !== undefined &&
      (obj.sequence = message.sequence
        ? PlanningCenterPlan_PlanItem_SongItem_Sequence.toJSON(message.sequence)
        : undefined);
    message.pcoIdStr !== undefined && (obj.pcoIdStr = message.pcoIdStr);
    message.arrangementIdStr !== undefined &&
      (obj.arrangementIdStr = message.arrangementIdStr);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem_SongItem>, I>>(
    base?: I,
  ): PlanningCenterPlan_PlanItem_SongItem {
    return PlanningCenterPlan_PlanItem_SongItem.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<PlanningCenterPlan_PlanItem_SongItem>, I>,
  >(object: I): PlanningCenterPlan_PlanItem_SongItem {
    const message = createBasePlanningCenterPlan_PlanItem_SongItem();
    message.pcoIdNum = object.pcoIdNum ?? 0;
    message.arrangementIdNum = object.arrangementIdNum ?? 0;
    message.ccli =
      object.ccli !== undefined && object.ccli !== null
        ? Presentation_CCLI.fromPartial(object.ccli)
        : undefined;
    message.sequence =
      object.sequence !== undefined && object.sequence !== null
        ? PlanningCenterPlan_PlanItem_SongItem_Sequence.fromPartial(
            object.sequence,
          )
        : undefined;
    message.pcoIdStr = object.pcoIdStr ?? '';
    message.arrangementIdStr = object.arrangementIdStr ?? '';
    return message;
  },
};

function createBasePlanningCenterPlan_PlanItem_SongItem_Sequence(): PlanningCenterPlan_PlanItem_SongItem_Sequence {
  return { pcoIdNum: 0, name: '', groupNames: [], pcoIdStr: '' };
}

export const PlanningCenterPlan_PlanItem_SongItem_Sequence = {
  encode(
    message: PlanningCenterPlan_PlanItem_SongItem_Sequence,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pcoIdNum !== 0) {
      writer.uint32(8).uint32(message.pcoIdNum);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.groupNames) {
      writer.uint32(26).string(v!);
    }
    if (message.pcoIdStr !== '') {
      writer.uint32(34).string(message.pcoIdStr);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanningCenterPlan_PlanItem_SongItem_Sequence {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanningCenterPlan_PlanItem_SongItem_Sequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pcoIdNum = reader.uint32();
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

          message.groupNames.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.pcoIdStr = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanningCenterPlan_PlanItem_SongItem_Sequence {
    return {
      pcoIdNum: isSet(object.pcoIdNum) ? Number(object.pcoIdNum) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      groupNames: Array.isArray(object?.groupNames)
        ? object.groupNames.map((e: any) => String(e))
        : [],
      pcoIdStr: isSet(object.pcoIdStr) ? String(object.pcoIdStr) : '',
    };
  },

  toJSON(message: PlanningCenterPlan_PlanItem_SongItem_Sequence): unknown {
    const obj: any = {};
    message.pcoIdNum !== undefined &&
      (obj.pcoIdNum = Math.round(message.pcoIdNum));
    message.name !== undefined && (obj.name = message.name);
    if (message.groupNames) {
      obj.groupNames = message.groupNames.map((e) => e);
    } else {
      obj.groupNames = [];
    }
    message.pcoIdStr !== undefined && (obj.pcoIdStr = message.pcoIdStr);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<PlanningCenterPlan_PlanItem_SongItem_Sequence>,
      I
    >,
  >(base?: I): PlanningCenterPlan_PlanItem_SongItem_Sequence {
    return PlanningCenterPlan_PlanItem_SongItem_Sequence.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<PlanningCenterPlan_PlanItem_SongItem_Sequence>,
      I
    >,
  >(object: I): PlanningCenterPlan_PlanItem_SongItem_Sequence {
    const message = createBasePlanningCenterPlan_PlanItem_SongItem_Sequence();
    message.pcoIdNum = object.pcoIdNum ?? 0;
    message.name = object.name ?? '';
    message.groupNames = object.groupNames?.map((e) => e) || [];
    message.pcoIdStr = object.pcoIdStr ?? '';
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
