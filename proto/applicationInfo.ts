/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Version } from './version';

export const protobufPackage = 'rv.data';

export interface ApplicationInfo {
  platform: ApplicationInfo_Platform;
  platformVersion: Version | undefined;
  application: ApplicationInfo_Application;
  applicationVersion: Version | undefined;
}

export enum ApplicationInfo_Platform {
  PLATFORM_UNDEFINED = 0,
  PLATFORM_MACOS = 1,
  PLATFORM_WINDOWS = 2,
  UNRECOGNIZED = -1,
}

export function applicationInfo_PlatformFromJSON(
  object: any,
): ApplicationInfo_Platform {
  switch (object) {
    case 0:
    case 'PLATFORM_UNDEFINED':
      return ApplicationInfo_Platform.PLATFORM_UNDEFINED;
    case 1:
    case 'PLATFORM_MACOS':
      return ApplicationInfo_Platform.PLATFORM_MACOS;
    case 2:
    case 'PLATFORM_WINDOWS':
      return ApplicationInfo_Platform.PLATFORM_WINDOWS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ApplicationInfo_Platform.UNRECOGNIZED;
  }
}

export function applicationInfo_PlatformToJSON(
  object: ApplicationInfo_Platform,
): string {
  switch (object) {
    case ApplicationInfo_Platform.PLATFORM_UNDEFINED:
      return 'PLATFORM_UNDEFINED';
    case ApplicationInfo_Platform.PLATFORM_MACOS:
      return 'PLATFORM_MACOS';
    case ApplicationInfo_Platform.PLATFORM_WINDOWS:
      return 'PLATFORM_WINDOWS';
    case ApplicationInfo_Platform.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum ApplicationInfo_Application {
  APPLICATION_UNDEFINED = 0,
  APPLICATION_PROPRESENTER = 1,
  APPLICATION_PVP = 2,
  APPLICATION_PROVIDEOSERVER = 3,
  APPLICATION_SCOREBOARD = 4,
  UNRECOGNIZED = -1,
}

export function applicationInfo_ApplicationFromJSON(
  object: any,
): ApplicationInfo_Application {
  switch (object) {
    case 0:
    case 'APPLICATION_UNDEFINED':
      return ApplicationInfo_Application.APPLICATION_UNDEFINED;
    case 1:
    case 'APPLICATION_PROPRESENTER':
      return ApplicationInfo_Application.APPLICATION_PROPRESENTER;
    case 2:
    case 'APPLICATION_PVP':
      return ApplicationInfo_Application.APPLICATION_PVP;
    case 3:
    case 'APPLICATION_PROVIDEOSERVER':
      return ApplicationInfo_Application.APPLICATION_PROVIDEOSERVER;
    case 4:
    case 'APPLICATION_SCOREBOARD':
      return ApplicationInfo_Application.APPLICATION_SCOREBOARD;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ApplicationInfo_Application.UNRECOGNIZED;
  }
}

export function applicationInfo_ApplicationToJSON(
  object: ApplicationInfo_Application,
): string {
  switch (object) {
    case ApplicationInfo_Application.APPLICATION_UNDEFINED:
      return 'APPLICATION_UNDEFINED';
    case ApplicationInfo_Application.APPLICATION_PROPRESENTER:
      return 'APPLICATION_PROPRESENTER';
    case ApplicationInfo_Application.APPLICATION_PVP:
      return 'APPLICATION_PVP';
    case ApplicationInfo_Application.APPLICATION_PROVIDEOSERVER:
      return 'APPLICATION_PROVIDEOSERVER';
    case ApplicationInfo_Application.APPLICATION_SCOREBOARD:
      return 'APPLICATION_SCOREBOARD';
    case ApplicationInfo_Application.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseApplicationInfo(): ApplicationInfo {
  return {
    platform: 0,
    platformVersion: undefined,
    application: 0,
    applicationVersion: undefined,
  };
}

export const ApplicationInfo = {
  encode(
    message: ApplicationInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    if (message.platformVersion !== undefined) {
      Version.encode(
        message.platformVersion,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.application !== 0) {
      writer.uint32(24).int32(message.application);
    }
    if (message.applicationVersion !== undefined) {
      Version.encode(
        message.applicationVersion,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformVersion = Version.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.application = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.applicationVersion = Version.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplicationInfo {
    return {
      platform: isSet(object.platform)
        ? applicationInfo_PlatformFromJSON(object.platform)
        : 0,
      platformVersion: isSet(object.platformVersion)
        ? Version.fromJSON(object.platformVersion)
        : undefined,
      application: isSet(object.application)
        ? applicationInfo_ApplicationFromJSON(object.application)
        : 0,
      applicationVersion: isSet(object.applicationVersion)
        ? Version.fromJSON(object.applicationVersion)
        : undefined,
    };
  },

  toJSON(message: ApplicationInfo): unknown {
    const obj: any = {};
    if (message.platform !== 0) {
      obj.platform = applicationInfo_PlatformToJSON(message.platform);
    }
    if (message.platformVersion !== undefined) {
      obj.platformVersion = Version.toJSON(message.platformVersion);
    }
    if (message.application !== 0) {
      obj.application = applicationInfo_ApplicationToJSON(message.application);
    }
    if (message.applicationVersion !== undefined) {
      obj.applicationVersion = Version.toJSON(message.applicationVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationInfo>, I>>(
    base?: I,
  ): ApplicationInfo {
    return ApplicationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationInfo>, I>>(
    object: I,
  ): ApplicationInfo {
    const message = createBaseApplicationInfo();
    message.platform = object.platform ?? 0;
    message.platformVersion =
      object.platformVersion !== undefined && object.platformVersion !== null
        ? Version.fromPartial(object.platformVersion)
        : undefined;
    message.application = object.application ?? 0;
    message.applicationVersion =
      object.applicationVersion !== undefined &&
      object.applicationVersion !== null
        ? Version.fromPartial(object.applicationVersion)
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
