/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Timestamp } from './rvtimestamp';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface APIV1GroupMember {
  ip: string;
  port: number;
}

export interface APIV1GroupMemberStatus {
  ip: string;
  port: number;
  name: string;
  platform: APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform;
  osVersion: string;
  hostDescription: string;
  apiVersion: string;
  connectionStatus: APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus;
}

export enum APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus {
  CONNECTION_STATUS_UNKNOWN = 0,
  CONNECTION_STATUS_CONNECTED = 1,
  CONNECTION_STATUS_DISCONNECTED = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusFromJSON(
  object: any,
): APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus {
  switch (object) {
    case 0:
    case 'CONNECTION_STATUS_UNKNOWN':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_UNKNOWN;
    case 1:
    case 'CONNECTION_STATUS_CONNECTED':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_CONNECTED;
    case 2:
    case 'CONNECTION_STATUS_DISCONNECTED':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_DISCONNECTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.UNRECOGNIZED;
  }
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusToJSON(
  object: APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus,
): string {
  switch (object) {
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_UNKNOWN:
      return 'CONNECTION_STATUS_UNKNOWN';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_CONNECTED:
      return 'CONNECTION_STATUS_CONNECTED';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.CONNECTION_STATUS_DISCONNECTED:
      return 'CONNECTION_STATUS_DISCONNECTED';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatus.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform {
  PLATFORM_UNKNOWN = 0,
  PLATFORM_MACOS = 1,
  PLATFORM_WIN32 = 2,
  PLATFORM_WEB = 3,
  UNRECOGNIZED = -1,
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformFromJSON(
  object: any,
): APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform {
  switch (object) {
    case 0:
    case 'PLATFORM_UNKNOWN':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_UNKNOWN;
    case 1:
    case 'PLATFORM_MACOS':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_MACOS;
    case 2:
    case 'PLATFORM_WIN32':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WIN32;
    case 3:
    case 'PLATFORM_WEB':
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WEB;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.UNRECOGNIZED;
  }
}

export function aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformToJSON(
  object: APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform,
): string {
  switch (object) {
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_UNKNOWN:
      return 'PLATFORM_UNKNOWN';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_MACOS:
      return 'PLATFORM_MACOS';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WIN32:
      return 'PLATFORM_WIN32';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.PLATFORM_WEB:
      return 'PLATFORM_WEB';
    case APIV1GroupMemberStatus_APIV1GroupMemberStatusPlatform.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1GroupDefinition {
  timestamp: Timestamp | undefined;
  secret: string;
  name: string;
  members: APIV1GroupMember[];
  groupIdentifier: UUID | undefined;
}

export interface APIV1LinkRequest {
  heartbeat?: APIV1LinkRequest_Heartbeat | undefined;
  status?: APIV1LinkRequest_Status | undefined;
  addMember?: APIV1LinkRequest_AddMember | undefined;
  removeMember?: APIV1LinkRequest_RemoveMember | undefined;
}

export interface APIV1LinkRequest_Heartbeat {
  port: number;
  ifModifiedSince: string;
}

export interface APIV1LinkRequest_Status {}

export interface APIV1LinkRequest_AddMember {
  groupDefinition?: APIV1GroupDefinition | undefined;
  memberDetails?: APIV1GroupMember | undefined;
}

export interface APIV1LinkRequest_RemoveMember {
  memberDetails: APIV1GroupMember | undefined;
}

export interface APIV1LinkResponse {
  heartbeat?: APIV1LinkResponse_Heartbeat | undefined;
  status?: APIV1LinkResponse_Status | undefined;
  addMember?: APIV1LinkResponse_AddMember | undefined;
  removeMember?: APIV1LinkResponse_RemoveMember | undefined;
}

export interface APIV1LinkResponse_Heartbeat {
  groupDefinition: APIV1GroupDefinition | undefined;
  status: APIV1GroupMemberStatus | undefined;
}

export interface APIV1LinkResponse_Status {
  groupDefinition: APIV1GroupDefinition | undefined;
  memberName: string;
}

export interface APIV1LinkResponse_AddMember {
  groupDefinition?: APIV1GroupDefinition | undefined;
  accept?: APIV1LinkResponse_AddMember_RemoteMachineAccepts | undefined;
  decline?: APIV1LinkResponse_AddMember_RemoteMachineDecline | undefined;
}

export interface APIV1LinkResponse_AddMember_RemoteMachineAccepts {}

export interface APIV1LinkResponse_AddMember_RemoteMachineDecline {
  reason: APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason;
}

export enum APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason {
  ALREADY_IN_GROUP = 0,
  USER_DECLINED = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReasonFromJSON(
  object: any,
): APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason {
  switch (object) {
    case 0:
    case 'ALREADY_IN_GROUP':
      return APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.ALREADY_IN_GROUP;
    case 1:
    case 'USER_DECLINED':
      return APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.USER_DECLINED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.UNRECOGNIZED;
  }
}

export function aPIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReasonToJSON(
  object: APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason,
): string {
  switch (object) {
    case APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.ALREADY_IN_GROUP:
      return 'ALREADY_IN_GROUP';
    case APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.USER_DECLINED:
      return 'USER_DECLINED';
    case APIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReason.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1LinkResponse_RemoveMember {}

function createBaseAPIV1GroupMember(): APIV1GroupMember {
  return { ip: '', port: 0 };
}

export const APIV1GroupMember = {
  encode(
    message: APIV1GroupMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupMember {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupMember {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : '',
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
    };
  },

  toJSON(message: APIV1GroupMember): unknown {
    const obj: any = {};
    if (message.ip !== '') {
      obj.ip = message.ip;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupMember>, I>>(
    base?: I,
  ): APIV1GroupMember {
    return APIV1GroupMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupMember>, I>>(
    object: I,
  ): APIV1GroupMember {
    const message = createBaseAPIV1GroupMember();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseAPIV1GroupMemberStatus(): APIV1GroupMemberStatus {
  return {
    ip: '',
    port: 0,
    name: '',
    platform: 0,
    osVersion: '',
    hostDescription: '',
    apiVersion: '',
    connectionStatus: 0,
  };
}

export const APIV1GroupMemberStatus = {
  encode(
    message: APIV1GroupMemberStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.platform !== 0) {
      writer.uint32(32).int32(message.platform);
    }
    if (message.osVersion !== '') {
      writer.uint32(42).string(message.osVersion);
    }
    if (message.hostDescription !== '') {
      writer.uint32(50).string(message.hostDescription);
    }
    if (message.apiVersion !== '') {
      writer.uint32(58).string(message.apiVersion);
    }
    if (message.connectionStatus !== 0) {
      writer.uint32(64).int32(message.connectionStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupMemberStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupMemberStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.osVersion = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.hostDescription = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.connectionStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupMemberStatus {
    return {
      ip: isSet(object.ip) ? globalThis.String(object.ip) : '',
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      platform: isSet(object.platform)
        ? aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformFromJSON(
            object.platform,
          )
        : 0,
      osVersion: isSet(object.osVersion)
        ? globalThis.String(object.osVersion)
        : '',
      hostDescription: isSet(object.hostDescription)
        ? globalThis.String(object.hostDescription)
        : '',
      apiVersion: isSet(object.apiVersion)
        ? globalThis.String(object.apiVersion)
        : '',
      connectionStatus: isSet(object.connectionStatus)
        ? aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusFromJSON(
            object.connectionStatus,
          )
        : 0,
    };
  },

  toJSON(message: APIV1GroupMemberStatus): unknown {
    const obj: any = {};
    if (message.ip !== '') {
      obj.ip = message.ip;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.platform !== 0) {
      obj.platform =
        aPIV1GroupMemberStatus_APIV1GroupMemberStatusPlatformToJSON(
          message.platform,
        );
    }
    if (message.osVersion !== '') {
      obj.osVersion = message.osVersion;
    }
    if (message.hostDescription !== '') {
      obj.hostDescription = message.hostDescription;
    }
    if (message.apiVersion !== '') {
      obj.apiVersion = message.apiVersion;
    }
    if (message.connectionStatus !== 0) {
      obj.connectionStatus =
        aPIV1GroupMemberStatus_APIV1GroupMemberStatusConnectionStatusToJSON(
          message.connectionStatus,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupMemberStatus>, I>>(
    base?: I,
  ): APIV1GroupMemberStatus {
    return APIV1GroupMemberStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupMemberStatus>, I>>(
    object: I,
  ): APIV1GroupMemberStatus {
    const message = createBaseAPIV1GroupMemberStatus();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    message.name = object.name ?? '';
    message.platform = object.platform ?? 0;
    message.osVersion = object.osVersion ?? '';
    message.hostDescription = object.hostDescription ?? '';
    message.apiVersion = object.apiVersion ?? '';
    message.connectionStatus = object.connectionStatus ?? 0;
    return message;
  },
};

function createBaseAPIV1GroupDefinition(): APIV1GroupDefinition {
  return {
    timestamp: undefined,
    secret: '',
    name: '',
    members: [],
    groupIdentifier: undefined,
  };
}

export const APIV1GroupDefinition = {
  encode(
    message: APIV1GroupDefinition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== '') {
      writer.uint32(18).string(message.secret);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.members) {
      APIV1GroupMember.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.groupIdentifier !== undefined) {
      UUID.encode(message.groupIdentifier, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupDefinition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timestamp = Timestamp.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secret = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.members.push(
            APIV1GroupMember.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.groupIdentifier = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupDefinition {
    return {
      timestamp: isSet(object.timestamp)
        ? Timestamp.fromJSON(object.timestamp)
        : undefined,
      secret: isSet(object.secret) ? globalThis.String(object.secret) : '',
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      members: globalThis.Array.isArray(object?.members)
        ? object.members.map((e: any) => APIV1GroupMember.fromJSON(e))
        : [],
      groupIdentifier: isSet(object.groupIdentifier)
        ? UUID.fromJSON(object.groupIdentifier)
        : undefined,
    };
  },

  toJSON(message: APIV1GroupDefinition): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = Timestamp.toJSON(message.timestamp);
    }
    if (message.secret !== '') {
      obj.secret = message.secret;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.members?.length) {
      obj.members = message.members.map((e) => APIV1GroupMember.toJSON(e));
    }
    if (message.groupIdentifier !== undefined) {
      obj.groupIdentifier = UUID.toJSON(message.groupIdentifier);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupDefinition>, I>>(
    base?: I,
  ): APIV1GroupDefinition {
    return APIV1GroupDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupDefinition>, I>>(
    object: I,
  ): APIV1GroupDefinition {
    const message = createBaseAPIV1GroupDefinition();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.secret = object.secret ?? '';
    message.name = object.name ?? '';
    message.members =
      object.members?.map((e) => APIV1GroupMember.fromPartial(e)) || [];
    message.groupIdentifier =
      object.groupIdentifier !== undefined && object.groupIdentifier !== null
        ? UUID.fromPartial(object.groupIdentifier)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkRequest(): APIV1LinkRequest {
  return {
    heartbeat: undefined,
    status: undefined,
    addMember: undefined,
    removeMember: undefined,
  };
}

export const APIV1LinkRequest = {
  encode(
    message: APIV1LinkRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heartbeat !== undefined) {
      APIV1LinkRequest_Heartbeat.encode(
        message.heartbeat,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      APIV1LinkRequest_Status.encode(
        message.status,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.addMember !== undefined) {
      APIV1LinkRequest_AddMember.encode(
        message.addMember,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.removeMember !== undefined) {
      APIV1LinkRequest_RemoveMember.encode(
        message.removeMember,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1LinkRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.heartbeat = APIV1LinkRequest_Heartbeat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = APIV1LinkRequest_Status.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addMember = APIV1LinkRequest_AddMember.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.removeMember = APIV1LinkRequest_RemoveMember.decode(
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

  fromJSON(object: any): APIV1LinkRequest {
    return {
      heartbeat: isSet(object.heartbeat)
        ? APIV1LinkRequest_Heartbeat.fromJSON(object.heartbeat)
        : undefined,
      status: isSet(object.status)
        ? APIV1LinkRequest_Status.fromJSON(object.status)
        : undefined,
      addMember: isSet(object.addMember)
        ? APIV1LinkRequest_AddMember.fromJSON(object.addMember)
        : undefined,
      removeMember: isSet(object.removeMember)
        ? APIV1LinkRequest_RemoveMember.fromJSON(object.removeMember)
        : undefined,
    };
  },

  toJSON(message: APIV1LinkRequest): unknown {
    const obj: any = {};
    if (message.heartbeat !== undefined) {
      obj.heartbeat = APIV1LinkRequest_Heartbeat.toJSON(message.heartbeat);
    }
    if (message.status !== undefined) {
      obj.status = APIV1LinkRequest_Status.toJSON(message.status);
    }
    if (message.addMember !== undefined) {
      obj.addMember = APIV1LinkRequest_AddMember.toJSON(message.addMember);
    }
    if (message.removeMember !== undefined) {
      obj.removeMember = APIV1LinkRequest_RemoveMember.toJSON(
        message.removeMember,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkRequest>, I>>(
    base?: I,
  ): APIV1LinkRequest {
    return APIV1LinkRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkRequest>, I>>(
    object: I,
  ): APIV1LinkRequest {
    const message = createBaseAPIV1LinkRequest();
    message.heartbeat =
      object.heartbeat !== undefined && object.heartbeat !== null
        ? APIV1LinkRequest_Heartbeat.fromPartial(object.heartbeat)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? APIV1LinkRequest_Status.fromPartial(object.status)
        : undefined;
    message.addMember =
      object.addMember !== undefined && object.addMember !== null
        ? APIV1LinkRequest_AddMember.fromPartial(object.addMember)
        : undefined;
    message.removeMember =
      object.removeMember !== undefined && object.removeMember !== null
        ? APIV1LinkRequest_RemoveMember.fromPartial(object.removeMember)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkRequest_Heartbeat(): APIV1LinkRequest_Heartbeat {
  return { port: 0, ifModifiedSince: '' };
}

export const APIV1LinkRequest_Heartbeat = {
  encode(
    message: APIV1LinkRequest_Heartbeat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.ifModifiedSince !== '') {
      writer.uint32(18).string(message.ifModifiedSince);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkRequest_Heartbeat {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkRequest_Heartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ifModifiedSince = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LinkRequest_Heartbeat {
    return {
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
      ifModifiedSince: isSet(object.ifModifiedSince)
        ? globalThis.String(object.ifModifiedSince)
        : '',
    };
  },

  toJSON(message: APIV1LinkRequest_Heartbeat): unknown {
    const obj: any = {};
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    if (message.ifModifiedSince !== '') {
      obj.ifModifiedSince = message.ifModifiedSince;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkRequest_Heartbeat>, I>>(
    base?: I,
  ): APIV1LinkRequest_Heartbeat {
    return APIV1LinkRequest_Heartbeat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkRequest_Heartbeat>, I>>(
    object: I,
  ): APIV1LinkRequest_Heartbeat {
    const message = createBaseAPIV1LinkRequest_Heartbeat();
    message.port = object.port ?? 0;
    message.ifModifiedSince = object.ifModifiedSince ?? '';
    return message;
  },
};

function createBaseAPIV1LinkRequest_Status(): APIV1LinkRequest_Status {
  return {};
}

export const APIV1LinkRequest_Status = {
  encode(
    _: APIV1LinkRequest_Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkRequest_Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkRequest_Status();
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

  fromJSON(_: any): APIV1LinkRequest_Status {
    return {};
  },

  toJSON(_: APIV1LinkRequest_Status): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkRequest_Status>, I>>(
    base?: I,
  ): APIV1LinkRequest_Status {
    return APIV1LinkRequest_Status.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkRequest_Status>, I>>(
    _: I,
  ): APIV1LinkRequest_Status {
    const message = createBaseAPIV1LinkRequest_Status();
    return message;
  },
};

function createBaseAPIV1LinkRequest_AddMember(): APIV1LinkRequest_AddMember {
  return { groupDefinition: undefined, memberDetails: undefined };
}

export const APIV1LinkRequest_AddMember = {
  encode(
    message: APIV1LinkRequest_AddMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      APIV1GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.memberDetails !== undefined) {
      APIV1GroupMember.encode(
        message.memberDetails,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkRequest_AddMember {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkRequest_AddMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupDefinition = APIV1GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memberDetails = APIV1GroupMember.decode(
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

  fromJSON(object: any): APIV1LinkRequest_AddMember {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? APIV1GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      memberDetails: isSet(object.memberDetails)
        ? APIV1GroupMember.fromJSON(object.memberDetails)
        : undefined,
    };
  },

  toJSON(message: APIV1LinkRequest_AddMember): unknown {
    const obj: any = {};
    if (message.groupDefinition !== undefined) {
      obj.groupDefinition = APIV1GroupDefinition.toJSON(
        message.groupDefinition,
      );
    }
    if (message.memberDetails !== undefined) {
      obj.memberDetails = APIV1GroupMember.toJSON(message.memberDetails);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkRequest_AddMember>, I>>(
    base?: I,
  ): APIV1LinkRequest_AddMember {
    return APIV1LinkRequest_AddMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkRequest_AddMember>, I>>(
    object: I,
  ): APIV1LinkRequest_AddMember {
    const message = createBaseAPIV1LinkRequest_AddMember();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? APIV1GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.memberDetails =
      object.memberDetails !== undefined && object.memberDetails !== null
        ? APIV1GroupMember.fromPartial(object.memberDetails)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkRequest_RemoveMember(): APIV1LinkRequest_RemoveMember {
  return { memberDetails: undefined };
}

export const APIV1LinkRequest_RemoveMember = {
  encode(
    message: APIV1LinkRequest_RemoveMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberDetails !== undefined) {
      APIV1GroupMember.encode(
        message.memberDetails,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkRequest_RemoveMember {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkRequest_RemoveMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.memberDetails = APIV1GroupMember.decode(
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

  fromJSON(object: any): APIV1LinkRequest_RemoveMember {
    return {
      memberDetails: isSet(object.memberDetails)
        ? APIV1GroupMember.fromJSON(object.memberDetails)
        : undefined,
    };
  },

  toJSON(message: APIV1LinkRequest_RemoveMember): unknown {
    const obj: any = {};
    if (message.memberDetails !== undefined) {
      obj.memberDetails = APIV1GroupMember.toJSON(message.memberDetails);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkRequest_RemoveMember>, I>>(
    base?: I,
  ): APIV1LinkRequest_RemoveMember {
    return APIV1LinkRequest_RemoveMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkRequest_RemoveMember>, I>>(
    object: I,
  ): APIV1LinkRequest_RemoveMember {
    const message = createBaseAPIV1LinkRequest_RemoveMember();
    message.memberDetails =
      object.memberDetails !== undefined && object.memberDetails !== null
        ? APIV1GroupMember.fromPartial(object.memberDetails)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkResponse(): APIV1LinkResponse {
  return {
    heartbeat: undefined,
    status: undefined,
    addMember: undefined,
    removeMember: undefined,
  };
}

export const APIV1LinkResponse = {
  encode(
    message: APIV1LinkResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heartbeat !== undefined) {
      APIV1LinkResponse_Heartbeat.encode(
        message.heartbeat,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      APIV1LinkResponse_Status.encode(
        message.status,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.addMember !== undefined) {
      APIV1LinkResponse_AddMember.encode(
        message.addMember,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.removeMember !== undefined) {
      APIV1LinkResponse_RemoveMember.encode(
        message.removeMember,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1LinkResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.heartbeat = APIV1LinkResponse_Heartbeat.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = APIV1LinkResponse_Status.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addMember = APIV1LinkResponse_AddMember.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.removeMember = APIV1LinkResponse_RemoveMember.decode(
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

  fromJSON(object: any): APIV1LinkResponse {
    return {
      heartbeat: isSet(object.heartbeat)
        ? APIV1LinkResponse_Heartbeat.fromJSON(object.heartbeat)
        : undefined,
      status: isSet(object.status)
        ? APIV1LinkResponse_Status.fromJSON(object.status)
        : undefined,
      addMember: isSet(object.addMember)
        ? APIV1LinkResponse_AddMember.fromJSON(object.addMember)
        : undefined,
      removeMember: isSet(object.removeMember)
        ? APIV1LinkResponse_RemoveMember.fromJSON(object.removeMember)
        : undefined,
    };
  },

  toJSON(message: APIV1LinkResponse): unknown {
    const obj: any = {};
    if (message.heartbeat !== undefined) {
      obj.heartbeat = APIV1LinkResponse_Heartbeat.toJSON(message.heartbeat);
    }
    if (message.status !== undefined) {
      obj.status = APIV1LinkResponse_Status.toJSON(message.status);
    }
    if (message.addMember !== undefined) {
      obj.addMember = APIV1LinkResponse_AddMember.toJSON(message.addMember);
    }
    if (message.removeMember !== undefined) {
      obj.removeMember = APIV1LinkResponse_RemoveMember.toJSON(
        message.removeMember,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkResponse>, I>>(
    base?: I,
  ): APIV1LinkResponse {
    return APIV1LinkResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkResponse>, I>>(
    object: I,
  ): APIV1LinkResponse {
    const message = createBaseAPIV1LinkResponse();
    message.heartbeat =
      object.heartbeat !== undefined && object.heartbeat !== null
        ? APIV1LinkResponse_Heartbeat.fromPartial(object.heartbeat)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? APIV1LinkResponse_Status.fromPartial(object.status)
        : undefined;
    message.addMember =
      object.addMember !== undefined && object.addMember !== null
        ? APIV1LinkResponse_AddMember.fromPartial(object.addMember)
        : undefined;
    message.removeMember =
      object.removeMember !== undefined && object.removeMember !== null
        ? APIV1LinkResponse_RemoveMember.fromPartial(object.removeMember)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkResponse_Heartbeat(): APIV1LinkResponse_Heartbeat {
  return { groupDefinition: undefined, status: undefined };
}

export const APIV1LinkResponse_Heartbeat = {
  encode(
    message: APIV1LinkResponse_Heartbeat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      APIV1GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      APIV1GroupMemberStatus.encode(
        message.status,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_Heartbeat {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkResponse_Heartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupDefinition = APIV1GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = APIV1GroupMemberStatus.decode(
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

  fromJSON(object: any): APIV1LinkResponse_Heartbeat {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? APIV1GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      status: isSet(object.status)
        ? APIV1GroupMemberStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: APIV1LinkResponse_Heartbeat): unknown {
    const obj: any = {};
    if (message.groupDefinition !== undefined) {
      obj.groupDefinition = APIV1GroupDefinition.toJSON(
        message.groupDefinition,
      );
    }
    if (message.status !== undefined) {
      obj.status = APIV1GroupMemberStatus.toJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkResponse_Heartbeat>, I>>(
    base?: I,
  ): APIV1LinkResponse_Heartbeat {
    return APIV1LinkResponse_Heartbeat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkResponse_Heartbeat>, I>>(
    object: I,
  ): APIV1LinkResponse_Heartbeat {
    const message = createBaseAPIV1LinkResponse_Heartbeat();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? APIV1GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? APIV1GroupMemberStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkResponse_Status(): APIV1LinkResponse_Status {
  return { groupDefinition: undefined, memberName: '' };
}

export const APIV1LinkResponse_Status = {
  encode(
    message: APIV1LinkResponse_Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      APIV1GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.memberName !== '') {
      writer.uint32(18).string(message.memberName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkResponse_Status();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupDefinition = APIV1GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.memberName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LinkResponse_Status {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? APIV1GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      memberName: isSet(object.memberName)
        ? globalThis.String(object.memberName)
        : '',
    };
  },

  toJSON(message: APIV1LinkResponse_Status): unknown {
    const obj: any = {};
    if (message.groupDefinition !== undefined) {
      obj.groupDefinition = APIV1GroupDefinition.toJSON(
        message.groupDefinition,
      );
    }
    if (message.memberName !== '') {
      obj.memberName = message.memberName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkResponse_Status>, I>>(
    base?: I,
  ): APIV1LinkResponse_Status {
    return APIV1LinkResponse_Status.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkResponse_Status>, I>>(
    object: I,
  ): APIV1LinkResponse_Status {
    const message = createBaseAPIV1LinkResponse_Status();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? APIV1GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.memberName = object.memberName ?? '';
    return message;
  },
};

function createBaseAPIV1LinkResponse_AddMember(): APIV1LinkResponse_AddMember {
  return { groupDefinition: undefined, accept: undefined, decline: undefined };
}

export const APIV1LinkResponse_AddMember = {
  encode(
    message: APIV1LinkResponse_AddMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      APIV1GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.accept !== undefined) {
      APIV1LinkResponse_AddMember_RemoteMachineAccepts.encode(
        message.accept,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.decline !== undefined) {
      APIV1LinkResponse_AddMember_RemoteMachineDecline.encode(
        message.decline,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_AddMember {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkResponse_AddMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupDefinition = APIV1GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accept =
            APIV1LinkResponse_AddMember_RemoteMachineAccepts.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.decline =
            APIV1LinkResponse_AddMember_RemoteMachineDecline.decode(
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

  fromJSON(object: any): APIV1LinkResponse_AddMember {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? APIV1GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      accept: isSet(object.accept)
        ? APIV1LinkResponse_AddMember_RemoteMachineAccepts.fromJSON(
            object.accept,
          )
        : undefined,
      decline: isSet(object.decline)
        ? APIV1LinkResponse_AddMember_RemoteMachineDecline.fromJSON(
            object.decline,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1LinkResponse_AddMember): unknown {
    const obj: any = {};
    if (message.groupDefinition !== undefined) {
      obj.groupDefinition = APIV1GroupDefinition.toJSON(
        message.groupDefinition,
      );
    }
    if (message.accept !== undefined) {
      obj.accept = APIV1LinkResponse_AddMember_RemoteMachineAccepts.toJSON(
        message.accept,
      );
    }
    if (message.decline !== undefined) {
      obj.decline = APIV1LinkResponse_AddMember_RemoteMachineDecline.toJSON(
        message.decline,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkResponse_AddMember>, I>>(
    base?: I,
  ): APIV1LinkResponse_AddMember {
    return APIV1LinkResponse_AddMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkResponse_AddMember>, I>>(
    object: I,
  ): APIV1LinkResponse_AddMember {
    const message = createBaseAPIV1LinkResponse_AddMember();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? APIV1GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.accept =
      object.accept !== undefined && object.accept !== null
        ? APIV1LinkResponse_AddMember_RemoteMachineAccepts.fromPartial(
            object.accept,
          )
        : undefined;
    message.decline =
      object.decline !== undefined && object.decline !== null
        ? APIV1LinkResponse_AddMember_RemoteMachineDecline.fromPartial(
            object.decline,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1LinkResponse_AddMember_RemoteMachineAccepts(): APIV1LinkResponse_AddMember_RemoteMachineAccepts {
  return {};
}

export const APIV1LinkResponse_AddMember_RemoteMachineAccepts = {
  encode(
    _: APIV1LinkResponse_AddMember_RemoteMachineAccepts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_AddMember_RemoteMachineAccepts {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1LinkResponse_AddMember_RemoteMachineAccepts();
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

  fromJSON(_: any): APIV1LinkResponse_AddMember_RemoteMachineAccepts {
    return {};
  },

  toJSON(_: APIV1LinkResponse_AddMember_RemoteMachineAccepts): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1LinkResponse_AddMember_RemoteMachineAccepts>,
      I
    >,
  >(base?: I): APIV1LinkResponse_AddMember_RemoteMachineAccepts {
    return APIV1LinkResponse_AddMember_RemoteMachineAccepts.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1LinkResponse_AddMember_RemoteMachineAccepts>,
      I
    >,
  >(_: I): APIV1LinkResponse_AddMember_RemoteMachineAccepts {
    const message =
      createBaseAPIV1LinkResponse_AddMember_RemoteMachineAccepts();
    return message;
  },
};

function createBaseAPIV1LinkResponse_AddMember_RemoteMachineDecline(): APIV1LinkResponse_AddMember_RemoteMachineDecline {
  return { reason: 0 };
}

export const APIV1LinkResponse_AddMember_RemoteMachineDecline = {
  encode(
    message: APIV1LinkResponse_AddMember_RemoteMachineDecline,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_AddMember_RemoteMachineDecline {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1LinkResponse_AddMember_RemoteMachineDecline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1LinkResponse_AddMember_RemoteMachineDecline {
    return {
      reason: isSet(object.reason)
        ? aPIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReasonFromJSON(
            object.reason,
          )
        : 0,
    };
  },

  toJSON(message: APIV1LinkResponse_AddMember_RemoteMachineDecline): unknown {
    const obj: any = {};
    if (message.reason !== 0) {
      obj.reason =
        aPIV1LinkResponse_AddMember_RemoteMachineDecline_DeclineReasonToJSON(
          message.reason,
        );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1LinkResponse_AddMember_RemoteMachineDecline>,
      I
    >,
  >(base?: I): APIV1LinkResponse_AddMember_RemoteMachineDecline {
    return APIV1LinkResponse_AddMember_RemoteMachineDecline.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1LinkResponse_AddMember_RemoteMachineDecline>,
      I
    >,
  >(object: I): APIV1LinkResponse_AddMember_RemoteMachineDecline {
    const message =
      createBaseAPIV1LinkResponse_AddMember_RemoteMachineDecline();
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseAPIV1LinkResponse_RemoveMember(): APIV1LinkResponse_RemoveMember {
  return {};
}

export const APIV1LinkResponse_RemoveMember = {
  encode(
    _: APIV1LinkResponse_RemoveMember,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1LinkResponse_RemoveMember {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1LinkResponse_RemoveMember();
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

  fromJSON(_: any): APIV1LinkResponse_RemoveMember {
    return {};
  },

  toJSON(_: APIV1LinkResponse_RemoveMember): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1LinkResponse_RemoveMember>, I>>(
    base?: I,
  ): APIV1LinkResponse_RemoveMember {
    return APIV1LinkResponse_RemoveMember.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1LinkResponse_RemoveMember>, I>>(
    _: I,
  ): APIV1LinkResponse_RemoveMember {
    const message = createBaseAPIV1LinkResponse_RemoveMember();
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
