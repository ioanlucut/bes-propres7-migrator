/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { URL, UUID } from "./basicTypes";

export const protobufPackage = "rv.data";

export interface ProAudienceLook {
  uuid: UUID | undefined;
  name: string;
  screenLooks: ProAudienceLook_ProScreenLook[];
  originalLookUuid: UUID | undefined;
}

export interface ProAudienceLook_ProScreenLook {
  proScreenUuid: UUID | undefined;
  propsEnabled: boolean;
  liveVideoEnabled: boolean;
  presentationBackgroundEnabled: boolean;
  templateDocumentFilePath: URL | undefined;
  templateSlideUuid: UUID | undefined;
  presentationForegroundEnabled: boolean;
  maskUuid: UUID | undefined;
  announcementsEnabled: boolean;
  propsLayerEnabled: boolean;
  messagesLayerEnabled: boolean;
}

function createBaseProAudienceLook(): ProAudienceLook {
  return { uuid: undefined, name: "", screenLooks: [], originalLookUuid: undefined };
}

export const ProAudienceLook = {
  encode(message: ProAudienceLook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.screenLooks) {
      ProAudienceLook_ProScreenLook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.originalLookUuid !== undefined) {
      UUID.encode(message.originalLookUuid, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProAudienceLook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProAudienceLook();
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
          if (tag != 26) {
            break;
          }

          message.screenLooks.push(ProAudienceLook_ProScreenLook.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.originalLookUuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProAudienceLook {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      screenLooks: Array.isArray(object?.screenLooks)
        ? object.screenLooks.map((e: any) => ProAudienceLook_ProScreenLook.fromJSON(e))
        : [],
      originalLookUuid: isSet(object.originalLookUuid) ? UUID.fromJSON(object.originalLookUuid) : undefined,
    };
  },

  toJSON(message: ProAudienceLook): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    if (message.screenLooks) {
      obj.screenLooks = message.screenLooks.map((e) => e ? ProAudienceLook_ProScreenLook.toJSON(e) : undefined);
    } else {
      obj.screenLooks = [];
    }
    message.originalLookUuid !== undefined &&
      (obj.originalLookUuid = message.originalLookUuid ? UUID.toJSON(message.originalLookUuid) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProAudienceLook>, I>>(base?: I): ProAudienceLook {
    return ProAudienceLook.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProAudienceLook>, I>>(object: I): ProAudienceLook {
    const message = createBaseProAudienceLook();
    message.uuid = (object.uuid !== undefined && object.uuid !== null) ? UUID.fromPartial(object.uuid) : undefined;
    message.name = object.name ?? "";
    message.screenLooks = object.screenLooks?.map((e) => ProAudienceLook_ProScreenLook.fromPartial(e)) || [];
    message.originalLookUuid = (object.originalLookUuid !== undefined && object.originalLookUuid !== null)
      ? UUID.fromPartial(object.originalLookUuid)
      : undefined;
    return message;
  },
};

function createBaseProAudienceLook_ProScreenLook(): ProAudienceLook_ProScreenLook {
  return {
    proScreenUuid: undefined,
    propsEnabled: false,
    liveVideoEnabled: false,
    presentationBackgroundEnabled: false,
    templateDocumentFilePath: undefined,
    templateSlideUuid: undefined,
    presentationForegroundEnabled: false,
    maskUuid: undefined,
    announcementsEnabled: false,
    propsLayerEnabled: false,
    messagesLayerEnabled: false,
  };
}

export const ProAudienceLook_ProScreenLook = {
  encode(message: ProAudienceLook_ProScreenLook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proScreenUuid !== undefined) {
      UUID.encode(message.proScreenUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.propsEnabled === true) {
      writer.uint32(16).bool(message.propsEnabled);
    }
    if (message.liveVideoEnabled === true) {
      writer.uint32(24).bool(message.liveVideoEnabled);
    }
    if (message.presentationBackgroundEnabled === true) {
      writer.uint32(32).bool(message.presentationBackgroundEnabled);
    }
    if (message.templateDocumentFilePath !== undefined) {
      URL.encode(message.templateDocumentFilePath, writer.uint32(42).fork()).ldelim();
    }
    if (message.templateSlideUuid !== undefined) {
      UUID.encode(message.templateSlideUuid, writer.uint32(50).fork()).ldelim();
    }
    if (message.presentationForegroundEnabled === true) {
      writer.uint32(56).bool(message.presentationForegroundEnabled);
    }
    if (message.maskUuid !== undefined) {
      UUID.encode(message.maskUuid, writer.uint32(66).fork()).ldelim();
    }
    if (message.announcementsEnabled === true) {
      writer.uint32(72).bool(message.announcementsEnabled);
    }
    if (message.propsLayerEnabled === true) {
      writer.uint32(80).bool(message.propsLayerEnabled);
    }
    if (message.messagesLayerEnabled === true) {
      writer.uint32(88).bool(message.messagesLayerEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProAudienceLook_ProScreenLook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProAudienceLook_ProScreenLook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.proScreenUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.propsEnabled = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.liveVideoEnabled = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.presentationBackgroundEnabled = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.templateDocumentFilePath = URL.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.templateSlideUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.presentationForegroundEnabled = reader.bool();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.maskUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.announcementsEnabled = reader.bool();
          continue;
        case 10:
          if (tag != 80) {
            break;
          }

          message.propsLayerEnabled = reader.bool();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.messagesLayerEnabled = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProAudienceLook_ProScreenLook {
    return {
      proScreenUuid: isSet(object.proScreenUuid) ? UUID.fromJSON(object.proScreenUuid) : undefined,
      propsEnabled: isSet(object.propsEnabled) ? Boolean(object.propsEnabled) : false,
      liveVideoEnabled: isSet(object.liveVideoEnabled) ? Boolean(object.liveVideoEnabled) : false,
      presentationBackgroundEnabled: isSet(object.presentationBackgroundEnabled)
        ? Boolean(object.presentationBackgroundEnabled)
        : false,
      templateDocumentFilePath: isSet(object.templateDocumentFilePath)
        ? URL.fromJSON(object.templateDocumentFilePath)
        : undefined,
      templateSlideUuid: isSet(object.templateSlideUuid) ? UUID.fromJSON(object.templateSlideUuid) : undefined,
      presentationForegroundEnabled: isSet(object.presentationForegroundEnabled)
        ? Boolean(object.presentationForegroundEnabled)
        : false,
      maskUuid: isSet(object.maskUuid) ? UUID.fromJSON(object.maskUuid) : undefined,
      announcementsEnabled: isSet(object.announcementsEnabled) ? Boolean(object.announcementsEnabled) : false,
      propsLayerEnabled: isSet(object.propsLayerEnabled) ? Boolean(object.propsLayerEnabled) : false,
      messagesLayerEnabled: isSet(object.messagesLayerEnabled) ? Boolean(object.messagesLayerEnabled) : false,
    };
  },

  toJSON(message: ProAudienceLook_ProScreenLook): unknown {
    const obj: any = {};
    message.proScreenUuid !== undefined &&
      (obj.proScreenUuid = message.proScreenUuid ? UUID.toJSON(message.proScreenUuid) : undefined);
    message.propsEnabled !== undefined && (obj.propsEnabled = message.propsEnabled);
    message.liveVideoEnabled !== undefined && (obj.liveVideoEnabled = message.liveVideoEnabled);
    message.presentationBackgroundEnabled !== undefined &&
      (obj.presentationBackgroundEnabled = message.presentationBackgroundEnabled);
    message.templateDocumentFilePath !== undefined && (obj.templateDocumentFilePath = message.templateDocumentFilePath
      ? URL.toJSON(message.templateDocumentFilePath)
      : undefined);
    message.templateSlideUuid !== undefined &&
      (obj.templateSlideUuid = message.templateSlideUuid ? UUID.toJSON(message.templateSlideUuid) : undefined);
    message.presentationForegroundEnabled !== undefined &&
      (obj.presentationForegroundEnabled = message.presentationForegroundEnabled);
    message.maskUuid !== undefined && (obj.maskUuid = message.maskUuid ? UUID.toJSON(message.maskUuid) : undefined);
    message.announcementsEnabled !== undefined && (obj.announcementsEnabled = message.announcementsEnabled);
    message.propsLayerEnabled !== undefined && (obj.propsLayerEnabled = message.propsLayerEnabled);
    message.messagesLayerEnabled !== undefined && (obj.messagesLayerEnabled = message.messagesLayerEnabled);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProAudienceLook_ProScreenLook>, I>>(base?: I): ProAudienceLook_ProScreenLook {
    return ProAudienceLook_ProScreenLook.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProAudienceLook_ProScreenLook>, I>>(
    object: I,
  ): ProAudienceLook_ProScreenLook {
    const message = createBaseProAudienceLook_ProScreenLook();
    message.proScreenUuid = (object.proScreenUuid !== undefined && object.proScreenUuid !== null)
      ? UUID.fromPartial(object.proScreenUuid)
      : undefined;
    message.propsEnabled = object.propsEnabled ?? false;
    message.liveVideoEnabled = object.liveVideoEnabled ?? false;
    message.presentationBackgroundEnabled = object.presentationBackgroundEnabled ?? false;
    message.templateDocumentFilePath =
      (object.templateDocumentFilePath !== undefined && object.templateDocumentFilePath !== null)
        ? URL.fromPartial(object.templateDocumentFilePath)
        : undefined;
    message.templateSlideUuid = (object.templateSlideUuid !== undefined && object.templateSlideUuid !== null)
      ? UUID.fromPartial(object.templateSlideUuid)
      : undefined;
    message.presentationForegroundEnabled = object.presentationForegroundEnabled ?? false;
    message.maskUuid = (object.maskUuid !== undefined && object.maskUuid !== null)
      ? UUID.fromPartial(object.maskUuid)
      : undefined;
    message.announcementsEnabled = object.announcementsEnabled ?? false;
    message.propsLayerEnabled = object.propsLayerEnabled ?? false;
    message.messagesLayerEnabled = object.messagesLayerEnabled ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
