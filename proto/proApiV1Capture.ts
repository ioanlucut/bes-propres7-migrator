/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Size } from './proApiV1Size';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export enum APIV1CaptureDestination {
  disk = 0,
  rtmp = 1,
  resi = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1CaptureDestinationFromJSON(
  object: any,
): APIV1CaptureDestination {
  switch (object) {
    case 0:
    case 'disk':
      return APIV1CaptureDestination.disk;
    case 1:
    case 'rtmp':
      return APIV1CaptureDestination.rtmp;
    case 2:
    case 'resi':
      return APIV1CaptureDestination.resi;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1CaptureDestination.UNRECOGNIZED;
  }
}

export function aPIV1CaptureDestinationToJSON(
  object: APIV1CaptureDestination,
): string {
  switch (object) {
    case APIV1CaptureDestination.disk:
      return 'disk';
    case APIV1CaptureDestination.rtmp:
      return 'rtmp';
    case APIV1CaptureDestination.resi:
      return 'resi';
    case APIV1CaptureDestination.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum APIV1CaptureStatus {
  active = 0,
  inactive = 1,
  caution = 2,
  error = 3,
  UNRECOGNIZED = -1,
}

export function aPIV1CaptureStatusFromJSON(object: any): APIV1CaptureStatus {
  switch (object) {
    case 0:
    case 'active':
      return APIV1CaptureStatus.active;
    case 1:
    case 'inactive':
      return APIV1CaptureStatus.inactive;
    case 2:
    case 'caution':
      return APIV1CaptureStatus.caution;
    case 3:
    case 'error':
      return APIV1CaptureStatus.error;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1CaptureStatus.UNRECOGNIZED;
  }
}

export function aPIV1CaptureStatusToJSON(object: APIV1CaptureStatus): string {
  switch (object) {
    case APIV1CaptureStatus.active:
      return 'active';
    case APIV1CaptureStatus.inactive:
      return 'inactive';
    case APIV1CaptureStatus.caution:
      return 'caution';
    case APIV1CaptureStatus.error:
      return 'error';
    case APIV1CaptureStatus.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1CaptureSettings {
  source: UUID | undefined;
  audioRouting: APIV1AudioRouting[];
  disk?: APIV1DiskCapture | undefined;
  rtmp?: APIV1RTMPCapture | undefined;
  resi?: APIV1ResiCapture | undefined;
}

export interface APIV1AudioRouting {
  map: number[];
}

export interface APIV1DiskCapture {
  fileLocation: string;
  codec: string;
  resolution: APIV1Size | undefined;
  frameRate: number;
}

export interface APIV1RTMPCapture {
  server: string;
  key: string;
  encoding: string;
  saveLocal: boolean;
  fileLocation: string;
}

export interface APIV1ResiCapture {
  eventName: string;
  eventDescription: string;
  destinationGroup: string;
  encoding: string;
}

export interface APIV1CaptureRequest {
  getStatus?: APIV1CaptureRequest_Status | undefined;
  operation?: APIV1CaptureRequest_Operation | undefined;
  getSettings?: APIV1CaptureRequest_GetSettings | undefined;
  setSettings?: APIV1CaptureRequest_SetSettings | undefined;
  getEncodings?: APIV1CaptureRequest_Encodings | undefined;
}

export interface APIV1CaptureRequest_Status {}

export interface APIV1CaptureRequest_Operation {
  operation: APIV1CaptureRequest_Operation_CaptureOperation;
}

export enum APIV1CaptureRequest_Operation_CaptureOperation {
  start = 0,
  stop = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1CaptureRequest_Operation_CaptureOperationFromJSON(
  object: any,
): APIV1CaptureRequest_Operation_CaptureOperation {
  switch (object) {
    case 0:
    case 'start':
      return APIV1CaptureRequest_Operation_CaptureOperation.start;
    case 1:
    case 'stop':
      return APIV1CaptureRequest_Operation_CaptureOperation.stop;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1CaptureRequest_Operation_CaptureOperation.UNRECOGNIZED;
  }
}

export function aPIV1CaptureRequest_Operation_CaptureOperationToJSON(
  object: APIV1CaptureRequest_Operation_CaptureOperation,
): string {
  switch (object) {
    case APIV1CaptureRequest_Operation_CaptureOperation.start:
      return 'start';
    case APIV1CaptureRequest_Operation_CaptureOperation.stop:
      return 'stop';
    case APIV1CaptureRequest_Operation_CaptureOperation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1CaptureRequest_GetSettings {}

export interface APIV1CaptureRequest_SetSettings {
  settings: APIV1CaptureSettings | undefined;
}

export interface APIV1CaptureRequest_Encodings {
  type: APIV1CaptureDestination;
}

export interface APIV1CaptureResponse {
  getStatus?: APIV1CaptureResponse_GetStatus | undefined;
  operation?: APIV1CaptureResponse_Operation | undefined;
  getSettings?: APIV1CaptureResponse_GetSettings | undefined;
  setSettings?: APIV1CaptureResponse_SetSettings | undefined;
  getEncodings?: APIV1CaptureResponse_Encodings | undefined;
}

export interface APIV1CaptureResponse_GetStatus {
  status: APIV1CaptureStatus;
  captureTime: string;
  statusText: string;
}

export interface APIV1CaptureResponse_Operation {}

export interface APIV1CaptureResponse_GetSettings {
  settings: APIV1CaptureSettings | undefined;
}

export interface APIV1CaptureResponse_SetSettings {}

export interface APIV1CaptureResponse_Encodings {
  encodings: string[];
}

function createBaseAPIV1CaptureSettings(): APIV1CaptureSettings {
  return {
    source: undefined,
    audioRouting: [],
    disk: undefined,
    rtmp: undefined,
    resi: undefined,
  };
}

export const APIV1CaptureSettings = {
  encode(
    message: APIV1CaptureSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.source !== undefined) {
      UUID.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.audioRouting) {
      APIV1AudioRouting.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.disk !== undefined) {
      APIV1DiskCapture.encode(message.disk, writer.uint32(26).fork()).ldelim();
    }
    if (message.rtmp !== undefined) {
      APIV1RTMPCapture.encode(message.rtmp, writer.uint32(34).fork()).ldelim();
    }
    if (message.resi !== undefined) {
      APIV1ResiCapture.encode(message.resi, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audioRouting.push(
            APIV1AudioRouting.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.disk = APIV1DiskCapture.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rtmp = APIV1RTMPCapture.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resi = APIV1ResiCapture.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1CaptureSettings {
    return {
      source: isSet(object.source) ? UUID.fromJSON(object.source) : undefined,
      audioRouting: globalThis.Array.isArray(object?.audioRouting)
        ? object.audioRouting.map((e: any) => APIV1AudioRouting.fromJSON(e))
        : [],
      disk: isSet(object.disk)
        ? APIV1DiskCapture.fromJSON(object.disk)
        : undefined,
      rtmp: isSet(object.rtmp)
        ? APIV1RTMPCapture.fromJSON(object.rtmp)
        : undefined,
      resi: isSet(object.resi)
        ? APIV1ResiCapture.fromJSON(object.resi)
        : undefined,
    };
  },

  toJSON(message: APIV1CaptureSettings): unknown {
    const obj: any = {};
    if (message.source !== undefined) {
      obj.source = UUID.toJSON(message.source);
    }
    if (message.audioRouting?.length) {
      obj.audioRouting = message.audioRouting.map((e) =>
        APIV1AudioRouting.toJSON(e),
      );
    }
    if (message.disk !== undefined) {
      obj.disk = APIV1DiskCapture.toJSON(message.disk);
    }
    if (message.rtmp !== undefined) {
      obj.rtmp = APIV1RTMPCapture.toJSON(message.rtmp);
    }
    if (message.resi !== undefined) {
      obj.resi = APIV1ResiCapture.toJSON(message.resi);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureSettings>, I>>(
    base?: I,
  ): APIV1CaptureSettings {
    return APIV1CaptureSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureSettings>, I>>(
    object: I,
  ): APIV1CaptureSettings {
    const message = createBaseAPIV1CaptureSettings();
    message.source =
      object.source !== undefined && object.source !== null
        ? UUID.fromPartial(object.source)
        : undefined;
    message.audioRouting =
      object.audioRouting?.map((e) => APIV1AudioRouting.fromPartial(e)) || [];
    message.disk =
      object.disk !== undefined && object.disk !== null
        ? APIV1DiskCapture.fromPartial(object.disk)
        : undefined;
    message.rtmp =
      object.rtmp !== undefined && object.rtmp !== null
        ? APIV1RTMPCapture.fromPartial(object.rtmp)
        : undefined;
    message.resi =
      object.resi !== undefined && object.resi !== null
        ? APIV1ResiCapture.fromPartial(object.resi)
        : undefined;
    return message;
  },
};

function createBaseAPIV1AudioRouting(): APIV1AudioRouting {
  return { map: [] };
}

export const APIV1AudioRouting = {
  encode(
    message: APIV1AudioRouting,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.map) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1AudioRouting {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AudioRouting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.map.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.map.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AudioRouting {
    return {
      map: globalThis.Array.isArray(object?.map)
        ? object.map.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: APIV1AudioRouting): unknown {
    const obj: any = {};
    if (message.map?.length) {
      obj.map = message.map.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AudioRouting>, I>>(
    base?: I,
  ): APIV1AudioRouting {
    return APIV1AudioRouting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AudioRouting>, I>>(
    object: I,
  ): APIV1AudioRouting {
    const message = createBaseAPIV1AudioRouting();
    message.map = object.map?.map((e) => e) || [];
    return message;
  },
};

function createBaseAPIV1DiskCapture(): APIV1DiskCapture {
  return { fileLocation: '', codec: '', resolution: undefined, frameRate: 0 };
}

export const APIV1DiskCapture = {
  encode(
    message: APIV1DiskCapture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fileLocation !== '') {
      writer.uint32(10).string(message.fileLocation);
    }
    if (message.codec !== '') {
      writer.uint32(18).string(message.codec);
    }
    if (message.resolution !== undefined) {
      APIV1Size.encode(message.resolution, writer.uint32(26).fork()).ldelim();
    }
    if (message.frameRate !== 0) {
      writer.uint32(33).double(message.frameRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1DiskCapture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1DiskCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fileLocation = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.codec = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resolution = APIV1Size.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.frameRate = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1DiskCapture {
    return {
      fileLocation: isSet(object.fileLocation)
        ? globalThis.String(object.fileLocation)
        : '',
      codec: isSet(object.codec) ? globalThis.String(object.codec) : '',
      resolution: isSet(object.resolution)
        ? APIV1Size.fromJSON(object.resolution)
        : undefined,
      frameRate: isSet(object.frameRate)
        ? globalThis.Number(object.frameRate)
        : 0,
    };
  },

  toJSON(message: APIV1DiskCapture): unknown {
    const obj: any = {};
    if (message.fileLocation !== '') {
      obj.fileLocation = message.fileLocation;
    }
    if (message.codec !== '') {
      obj.codec = message.codec;
    }
    if (message.resolution !== undefined) {
      obj.resolution = APIV1Size.toJSON(message.resolution);
    }
    if (message.frameRate !== 0) {
      obj.frameRate = message.frameRate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1DiskCapture>, I>>(
    base?: I,
  ): APIV1DiskCapture {
    return APIV1DiskCapture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1DiskCapture>, I>>(
    object: I,
  ): APIV1DiskCapture {
    const message = createBaseAPIV1DiskCapture();
    message.fileLocation = object.fileLocation ?? '';
    message.codec = object.codec ?? '';
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? APIV1Size.fromPartial(object.resolution)
        : undefined;
    message.frameRate = object.frameRate ?? 0;
    return message;
  },
};

function createBaseAPIV1RTMPCapture(): APIV1RTMPCapture {
  return {
    server: '',
    key: '',
    encoding: '',
    saveLocal: false,
    fileLocation: '',
  };
}

export const APIV1RTMPCapture = {
  encode(
    message: APIV1RTMPCapture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.server !== '') {
      writer.uint32(10).string(message.server);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    if (message.encoding !== '') {
      writer.uint32(26).string(message.encoding);
    }
    if (message.saveLocal === true) {
      writer.uint32(32).bool(message.saveLocal);
    }
    if (message.fileLocation !== '') {
      writer.uint32(42).string(message.fileLocation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1RTMPCapture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1RTMPCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.server = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.encoding = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.saveLocal = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fileLocation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1RTMPCapture {
    return {
      server: isSet(object.server) ? globalThis.String(object.server) : '',
      key: isSet(object.key) ? globalThis.String(object.key) : '',
      encoding: isSet(object.encoding)
        ? globalThis.String(object.encoding)
        : '',
      saveLocal: isSet(object.saveLocal)
        ? globalThis.Boolean(object.saveLocal)
        : false,
      fileLocation: isSet(object.fileLocation)
        ? globalThis.String(object.fileLocation)
        : '',
    };
  },

  toJSON(message: APIV1RTMPCapture): unknown {
    const obj: any = {};
    if (message.server !== '') {
      obj.server = message.server;
    }
    if (message.key !== '') {
      obj.key = message.key;
    }
    if (message.encoding !== '') {
      obj.encoding = message.encoding;
    }
    if (message.saveLocal === true) {
      obj.saveLocal = message.saveLocal;
    }
    if (message.fileLocation !== '') {
      obj.fileLocation = message.fileLocation;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1RTMPCapture>, I>>(
    base?: I,
  ): APIV1RTMPCapture {
    return APIV1RTMPCapture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1RTMPCapture>, I>>(
    object: I,
  ): APIV1RTMPCapture {
    const message = createBaseAPIV1RTMPCapture();
    message.server = object.server ?? '';
    message.key = object.key ?? '';
    message.encoding = object.encoding ?? '';
    message.saveLocal = object.saveLocal ?? false;
    message.fileLocation = object.fileLocation ?? '';
    return message;
  },
};

function createBaseAPIV1ResiCapture(): APIV1ResiCapture {
  return {
    eventName: '',
    eventDescription: '',
    destinationGroup: '',
    encoding: '',
  };
}

export const APIV1ResiCapture = {
  encode(
    message: APIV1ResiCapture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.eventName !== '') {
      writer.uint32(10).string(message.eventName);
    }
    if (message.eventDescription !== '') {
      writer.uint32(18).string(message.eventDescription);
    }
    if (message.destinationGroup !== '') {
      writer.uint32(26).string(message.destinationGroup);
    }
    if (message.encoding !== '') {
      writer.uint32(34).string(message.encoding);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1ResiCapture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1ResiCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventDescription = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.destinationGroup = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.encoding = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1ResiCapture {
    return {
      eventName: isSet(object.eventName)
        ? globalThis.String(object.eventName)
        : '',
      eventDescription: isSet(object.eventDescription)
        ? globalThis.String(object.eventDescription)
        : '',
      destinationGroup: isSet(object.destinationGroup)
        ? globalThis.String(object.destinationGroup)
        : '',
      encoding: isSet(object.encoding)
        ? globalThis.String(object.encoding)
        : '',
    };
  },

  toJSON(message: APIV1ResiCapture): unknown {
    const obj: any = {};
    if (message.eventName !== '') {
      obj.eventName = message.eventName;
    }
    if (message.eventDescription !== '') {
      obj.eventDescription = message.eventDescription;
    }
    if (message.destinationGroup !== '') {
      obj.destinationGroup = message.destinationGroup;
    }
    if (message.encoding !== '') {
      obj.encoding = message.encoding;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1ResiCapture>, I>>(
    base?: I,
  ): APIV1ResiCapture {
    return APIV1ResiCapture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1ResiCapture>, I>>(
    object: I,
  ): APIV1ResiCapture {
    const message = createBaseAPIV1ResiCapture();
    message.eventName = object.eventName ?? '';
    message.eventDescription = object.eventDescription ?? '';
    message.destinationGroup = object.destinationGroup ?? '';
    message.encoding = object.encoding ?? '';
    return message;
  },
};

function createBaseAPIV1CaptureRequest(): APIV1CaptureRequest {
  return {
    getStatus: undefined,
    operation: undefined,
    getSettings: undefined,
    setSettings: undefined,
    getEncodings: undefined,
  };
}

export const APIV1CaptureRequest = {
  encode(
    message: APIV1CaptureRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getStatus !== undefined) {
      APIV1CaptureRequest_Status.encode(
        message.getStatus,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.operation !== undefined) {
      APIV1CaptureRequest_Operation.encode(
        message.operation,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getSettings !== undefined) {
      APIV1CaptureRequest_GetSettings.encode(
        message.getSettings,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.setSettings !== undefined) {
      APIV1CaptureRequest_SetSettings.encode(
        message.setSettings,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getEncodings !== undefined) {
      APIV1CaptureRequest_Encodings.encode(
        message.getEncodings,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1CaptureRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getStatus = APIV1CaptureRequest_Status.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation = APIV1CaptureRequest_Operation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getSettings = APIV1CaptureRequest_GetSettings.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setSettings = APIV1CaptureRequest_SetSettings.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getEncodings = APIV1CaptureRequest_Encodings.decode(
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

  fromJSON(object: any): APIV1CaptureRequest {
    return {
      getStatus: isSet(object.getStatus)
        ? APIV1CaptureRequest_Status.fromJSON(object.getStatus)
        : undefined,
      operation: isSet(object.operation)
        ? APIV1CaptureRequest_Operation.fromJSON(object.operation)
        : undefined,
      getSettings: isSet(object.getSettings)
        ? APIV1CaptureRequest_GetSettings.fromJSON(object.getSettings)
        : undefined,
      setSettings: isSet(object.setSettings)
        ? APIV1CaptureRequest_SetSettings.fromJSON(object.setSettings)
        : undefined,
      getEncodings: isSet(object.getEncodings)
        ? APIV1CaptureRequest_Encodings.fromJSON(object.getEncodings)
        : undefined,
    };
  },

  toJSON(message: APIV1CaptureRequest): unknown {
    const obj: any = {};
    if (message.getStatus !== undefined) {
      obj.getStatus = APIV1CaptureRequest_Status.toJSON(message.getStatus);
    }
    if (message.operation !== undefined) {
      obj.operation = APIV1CaptureRequest_Operation.toJSON(message.operation);
    }
    if (message.getSettings !== undefined) {
      obj.getSettings = APIV1CaptureRequest_GetSettings.toJSON(
        message.getSettings,
      );
    }
    if (message.setSettings !== undefined) {
      obj.setSettings = APIV1CaptureRequest_SetSettings.toJSON(
        message.setSettings,
      );
    }
    if (message.getEncodings !== undefined) {
      obj.getEncodings = APIV1CaptureRequest_Encodings.toJSON(
        message.getEncodings,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest>, I>>(
    base?: I,
  ): APIV1CaptureRequest {
    return APIV1CaptureRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest>, I>>(
    object: I,
  ): APIV1CaptureRequest {
    const message = createBaseAPIV1CaptureRequest();
    message.getStatus =
      object.getStatus !== undefined && object.getStatus !== null
        ? APIV1CaptureRequest_Status.fromPartial(object.getStatus)
        : undefined;
    message.operation =
      object.operation !== undefined && object.operation !== null
        ? APIV1CaptureRequest_Operation.fromPartial(object.operation)
        : undefined;
    message.getSettings =
      object.getSettings !== undefined && object.getSettings !== null
        ? APIV1CaptureRequest_GetSettings.fromPartial(object.getSettings)
        : undefined;
    message.setSettings =
      object.setSettings !== undefined && object.setSettings !== null
        ? APIV1CaptureRequest_SetSettings.fromPartial(object.setSettings)
        : undefined;
    message.getEncodings =
      object.getEncodings !== undefined && object.getEncodings !== null
        ? APIV1CaptureRequest_Encodings.fromPartial(object.getEncodings)
        : undefined;
    return message;
  },
};

function createBaseAPIV1CaptureRequest_Status(): APIV1CaptureRequest_Status {
  return {};
}

export const APIV1CaptureRequest_Status = {
  encode(
    _: APIV1CaptureRequest_Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureRequest_Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest_Status();
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

  fromJSON(_: any): APIV1CaptureRequest_Status {
    return {};
  },

  toJSON(_: APIV1CaptureRequest_Status): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest_Status>, I>>(
    base?: I,
  ): APIV1CaptureRequest_Status {
    return APIV1CaptureRequest_Status.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest_Status>, I>>(
    _: I,
  ): APIV1CaptureRequest_Status {
    const message = createBaseAPIV1CaptureRequest_Status();
    return message;
  },
};

function createBaseAPIV1CaptureRequest_Operation(): APIV1CaptureRequest_Operation {
  return { operation: 0 };
}

export const APIV1CaptureRequest_Operation = {
  encode(
    message: APIV1CaptureRequest_Operation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureRequest_Operation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest_Operation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1CaptureRequest_Operation {
    return {
      operation: isSet(object.operation)
        ? aPIV1CaptureRequest_Operation_CaptureOperationFromJSON(
            object.operation,
          )
        : 0,
    };
  },

  toJSON(message: APIV1CaptureRequest_Operation): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = aPIV1CaptureRequest_Operation_CaptureOperationToJSON(
        message.operation,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest_Operation>, I>>(
    base?: I,
  ): APIV1CaptureRequest_Operation {
    return APIV1CaptureRequest_Operation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest_Operation>, I>>(
    object: I,
  ): APIV1CaptureRequest_Operation {
    const message = createBaseAPIV1CaptureRequest_Operation();
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1CaptureRequest_GetSettings(): APIV1CaptureRequest_GetSettings {
  return {};
}

export const APIV1CaptureRequest_GetSettings = {
  encode(
    _: APIV1CaptureRequest_GetSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureRequest_GetSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest_GetSettings();
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

  fromJSON(_: any): APIV1CaptureRequest_GetSettings {
    return {};
  },

  toJSON(_: APIV1CaptureRequest_GetSettings): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest_GetSettings>, I>>(
    base?: I,
  ): APIV1CaptureRequest_GetSettings {
    return APIV1CaptureRequest_GetSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest_GetSettings>, I>>(
    _: I,
  ): APIV1CaptureRequest_GetSettings {
    const message = createBaseAPIV1CaptureRequest_GetSettings();
    return message;
  },
};

function createBaseAPIV1CaptureRequest_SetSettings(): APIV1CaptureRequest_SetSettings {
  return { settings: undefined };
}

export const APIV1CaptureRequest_SetSettings = {
  encode(
    message: APIV1CaptureRequest_SetSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.settings !== undefined) {
      APIV1CaptureSettings.encode(
        message.settings,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureRequest_SetSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest_SetSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.settings = APIV1CaptureSettings.decode(
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

  fromJSON(object: any): APIV1CaptureRequest_SetSettings {
    return {
      settings: isSet(object.settings)
        ? APIV1CaptureSettings.fromJSON(object.settings)
        : undefined,
    };
  },

  toJSON(message: APIV1CaptureRequest_SetSettings): unknown {
    const obj: any = {};
    if (message.settings !== undefined) {
      obj.settings = APIV1CaptureSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest_SetSettings>, I>>(
    base?: I,
  ): APIV1CaptureRequest_SetSettings {
    return APIV1CaptureRequest_SetSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest_SetSettings>, I>>(
    object: I,
  ): APIV1CaptureRequest_SetSettings {
    const message = createBaseAPIV1CaptureRequest_SetSettings();
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? APIV1CaptureSettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

function createBaseAPIV1CaptureRequest_Encodings(): APIV1CaptureRequest_Encodings {
  return { type: 0 };
}

export const APIV1CaptureRequest_Encodings = {
  encode(
    message: APIV1CaptureRequest_Encodings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureRequest_Encodings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureRequest_Encodings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): APIV1CaptureRequest_Encodings {
    return {
      type: isSet(object.type)
        ? aPIV1CaptureDestinationFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: APIV1CaptureRequest_Encodings): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = aPIV1CaptureDestinationToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureRequest_Encodings>, I>>(
    base?: I,
  ): APIV1CaptureRequest_Encodings {
    return APIV1CaptureRequest_Encodings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureRequest_Encodings>, I>>(
    object: I,
  ): APIV1CaptureRequest_Encodings {
    const message = createBaseAPIV1CaptureRequest_Encodings();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAPIV1CaptureResponse(): APIV1CaptureResponse {
  return {
    getStatus: undefined,
    operation: undefined,
    getSettings: undefined,
    setSettings: undefined,
    getEncodings: undefined,
  };
}

export const APIV1CaptureResponse = {
  encode(
    message: APIV1CaptureResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getStatus !== undefined) {
      APIV1CaptureResponse_GetStatus.encode(
        message.getStatus,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.operation !== undefined) {
      APIV1CaptureResponse_Operation.encode(
        message.operation,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getSettings !== undefined) {
      APIV1CaptureResponse_GetSettings.encode(
        message.getSettings,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.setSettings !== undefined) {
      APIV1CaptureResponse_SetSettings.encode(
        message.setSettings,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getEncodings !== undefined) {
      APIV1CaptureResponse_Encodings.encode(
        message.getEncodings,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getStatus = APIV1CaptureResponse_GetStatus.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation = APIV1CaptureResponse_Operation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getSettings = APIV1CaptureResponse_GetSettings.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.setSettings = APIV1CaptureResponse_SetSettings.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getEncodings = APIV1CaptureResponse_Encodings.decode(
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

  fromJSON(object: any): APIV1CaptureResponse {
    return {
      getStatus: isSet(object.getStatus)
        ? APIV1CaptureResponse_GetStatus.fromJSON(object.getStatus)
        : undefined,
      operation: isSet(object.operation)
        ? APIV1CaptureResponse_Operation.fromJSON(object.operation)
        : undefined,
      getSettings: isSet(object.getSettings)
        ? APIV1CaptureResponse_GetSettings.fromJSON(object.getSettings)
        : undefined,
      setSettings: isSet(object.setSettings)
        ? APIV1CaptureResponse_SetSettings.fromJSON(object.setSettings)
        : undefined,
      getEncodings: isSet(object.getEncodings)
        ? APIV1CaptureResponse_Encodings.fromJSON(object.getEncodings)
        : undefined,
    };
  },

  toJSON(message: APIV1CaptureResponse): unknown {
    const obj: any = {};
    if (message.getStatus !== undefined) {
      obj.getStatus = APIV1CaptureResponse_GetStatus.toJSON(message.getStatus);
    }
    if (message.operation !== undefined) {
      obj.operation = APIV1CaptureResponse_Operation.toJSON(message.operation);
    }
    if (message.getSettings !== undefined) {
      obj.getSettings = APIV1CaptureResponse_GetSettings.toJSON(
        message.getSettings,
      );
    }
    if (message.setSettings !== undefined) {
      obj.setSettings = APIV1CaptureResponse_SetSettings.toJSON(
        message.setSettings,
      );
    }
    if (message.getEncodings !== undefined) {
      obj.getEncodings = APIV1CaptureResponse_Encodings.toJSON(
        message.getEncodings,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse>, I>>(
    base?: I,
  ): APIV1CaptureResponse {
    return APIV1CaptureResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureResponse>, I>>(
    object: I,
  ): APIV1CaptureResponse {
    const message = createBaseAPIV1CaptureResponse();
    message.getStatus =
      object.getStatus !== undefined && object.getStatus !== null
        ? APIV1CaptureResponse_GetStatus.fromPartial(object.getStatus)
        : undefined;
    message.operation =
      object.operation !== undefined && object.operation !== null
        ? APIV1CaptureResponse_Operation.fromPartial(object.operation)
        : undefined;
    message.getSettings =
      object.getSettings !== undefined && object.getSettings !== null
        ? APIV1CaptureResponse_GetSettings.fromPartial(object.getSettings)
        : undefined;
    message.setSettings =
      object.setSettings !== undefined && object.setSettings !== null
        ? APIV1CaptureResponse_SetSettings.fromPartial(object.setSettings)
        : undefined;
    message.getEncodings =
      object.getEncodings !== undefined && object.getEncodings !== null
        ? APIV1CaptureResponse_Encodings.fromPartial(object.getEncodings)
        : undefined;
    return message;
  },
};

function createBaseAPIV1CaptureResponse_GetStatus(): APIV1CaptureResponse_GetStatus {
  return { status: 0, captureTime: '', statusText: '' };
}

export const APIV1CaptureResponse_GetStatus = {
  encode(
    message: APIV1CaptureResponse_GetStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.captureTime !== '') {
      writer.uint32(18).string(message.captureTime);
    }
    if (message.statusText !== '') {
      writer.uint32(26).string(message.statusText);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse_GetStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse_GetStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.captureTime = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusText = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1CaptureResponse_GetStatus {
    return {
      status: isSet(object.status)
        ? aPIV1CaptureStatusFromJSON(object.status)
        : 0,
      captureTime: isSet(object.captureTime)
        ? globalThis.String(object.captureTime)
        : '',
      statusText: isSet(object.statusText)
        ? globalThis.String(object.statusText)
        : '',
    };
  },

  toJSON(message: APIV1CaptureResponse_GetStatus): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = aPIV1CaptureStatusToJSON(message.status);
    }
    if (message.captureTime !== '') {
      obj.captureTime = message.captureTime;
    }
    if (message.statusText !== '') {
      obj.statusText = message.statusText;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse_GetStatus>, I>>(
    base?: I,
  ): APIV1CaptureResponse_GetStatus {
    return APIV1CaptureResponse_GetStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureResponse_GetStatus>, I>>(
    object: I,
  ): APIV1CaptureResponse_GetStatus {
    const message = createBaseAPIV1CaptureResponse_GetStatus();
    message.status = object.status ?? 0;
    message.captureTime = object.captureTime ?? '';
    message.statusText = object.statusText ?? '';
    return message;
  },
};

function createBaseAPIV1CaptureResponse_Operation(): APIV1CaptureResponse_Operation {
  return {};
}

export const APIV1CaptureResponse_Operation = {
  encode(
    _: APIV1CaptureResponse_Operation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse_Operation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse_Operation();
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

  fromJSON(_: any): APIV1CaptureResponse_Operation {
    return {};
  },

  toJSON(_: APIV1CaptureResponse_Operation): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse_Operation>, I>>(
    base?: I,
  ): APIV1CaptureResponse_Operation {
    return APIV1CaptureResponse_Operation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureResponse_Operation>, I>>(
    _: I,
  ): APIV1CaptureResponse_Operation {
    const message = createBaseAPIV1CaptureResponse_Operation();
    return message;
  },
};

function createBaseAPIV1CaptureResponse_GetSettings(): APIV1CaptureResponse_GetSettings {
  return { settings: undefined };
}

export const APIV1CaptureResponse_GetSettings = {
  encode(
    message: APIV1CaptureResponse_GetSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.settings !== undefined) {
      APIV1CaptureSettings.encode(
        message.settings,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse_GetSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse_GetSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.settings = APIV1CaptureSettings.decode(
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

  fromJSON(object: any): APIV1CaptureResponse_GetSettings {
    return {
      settings: isSet(object.settings)
        ? APIV1CaptureSettings.fromJSON(object.settings)
        : undefined,
    };
  },

  toJSON(message: APIV1CaptureResponse_GetSettings): unknown {
    const obj: any = {};
    if (message.settings !== undefined) {
      obj.settings = APIV1CaptureSettings.toJSON(message.settings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse_GetSettings>, I>>(
    base?: I,
  ): APIV1CaptureResponse_GetSettings {
    return APIV1CaptureResponse_GetSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1CaptureResponse_GetSettings>, I>,
  >(object: I): APIV1CaptureResponse_GetSettings {
    const message = createBaseAPIV1CaptureResponse_GetSettings();
    message.settings =
      object.settings !== undefined && object.settings !== null
        ? APIV1CaptureSettings.fromPartial(object.settings)
        : undefined;
    return message;
  },
};

function createBaseAPIV1CaptureResponse_SetSettings(): APIV1CaptureResponse_SetSettings {
  return {};
}

export const APIV1CaptureResponse_SetSettings = {
  encode(
    _: APIV1CaptureResponse_SetSettings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse_SetSettings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse_SetSettings();
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

  fromJSON(_: any): APIV1CaptureResponse_SetSettings {
    return {};
  },

  toJSON(_: APIV1CaptureResponse_SetSettings): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse_SetSettings>, I>>(
    base?: I,
  ): APIV1CaptureResponse_SetSettings {
    return APIV1CaptureResponse_SetSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1CaptureResponse_SetSettings>, I>,
  >(_: I): APIV1CaptureResponse_SetSettings {
    const message = createBaseAPIV1CaptureResponse_SetSettings();
    return message;
  },
};

function createBaseAPIV1CaptureResponse_Encodings(): APIV1CaptureResponse_Encodings {
  return { encodings: [] };
}

export const APIV1CaptureResponse_Encodings = {
  encode(
    message: APIV1CaptureResponse_Encodings,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.encodings) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1CaptureResponse_Encodings {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1CaptureResponse_Encodings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.encodings.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1CaptureResponse_Encodings {
    return {
      encodings: globalThis.Array.isArray(object?.encodings)
        ? object.encodings.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: APIV1CaptureResponse_Encodings): unknown {
    const obj: any = {};
    if (message.encodings?.length) {
      obj.encodings = message.encodings;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1CaptureResponse_Encodings>, I>>(
    base?: I,
  ): APIV1CaptureResponse_Encodings {
    return APIV1CaptureResponse_Encodings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1CaptureResponse_Encodings>, I>>(
    object: I,
  ): APIV1CaptureResponse_Encodings {
    const message = createBaseAPIV1CaptureResponse_Encodings();
    message.encodings = object.encodings?.map((e) => e) || [];
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
