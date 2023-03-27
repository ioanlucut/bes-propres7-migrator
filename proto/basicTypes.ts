/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "rv.data";

export interface URL {
  platform: URL_Platform;
  absoluteString?: string | undefined;
  relativePath?: string | undefined;
  local?: URL_LocalRelativePath | undefined;
  external?: URL_ExternalRelativePath | undefined;
}

export enum URL_Platform {
  PLATFORM_UNKNOWN = 0,
  PLATFORM_MACOS = 1,
  PLATFORM_WIN32 = 2,
  PLATFORM_WEB = 3,
  UNRECOGNIZED = -1,
}

export function uRL_PlatformFromJSON(object: any): URL_Platform {
  switch (object) {
    case 0:
    case "PLATFORM_UNKNOWN":
      return URL_Platform.PLATFORM_UNKNOWN;
    case 1:
    case "PLATFORM_MACOS":
      return URL_Platform.PLATFORM_MACOS;
    case 2:
    case "PLATFORM_WIN32":
      return URL_Platform.PLATFORM_WIN32;
    case 3:
    case "PLATFORM_WEB":
      return URL_Platform.PLATFORM_WEB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return URL_Platform.UNRECOGNIZED;
  }
}

export function uRL_PlatformToJSON(object: URL_Platform): string {
  switch (object) {
    case URL_Platform.PLATFORM_UNKNOWN:
      return "PLATFORM_UNKNOWN";
    case URL_Platform.PLATFORM_MACOS:
      return "PLATFORM_MACOS";
    case URL_Platform.PLATFORM_WIN32:
      return "PLATFORM_WIN32";
    case URL_Platform.PLATFORM_WEB:
      return "PLATFORM_WEB";
    case URL_Platform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface URL_LocalRelativePath {
  root: URL_LocalRelativePath_Root;
  path: string;
}

export enum URL_LocalRelativePath_Root {
  ROOT_UNKNOWN = 0,
  ROOT_BOOT_VOLUME = 1,
  ROOT_USER_HOME = 2,
  ROOT_USER_DOCUMENTS = 3,
  ROOT_USER_DOWNLOADS = 4,
  ROOT_USER_MUSIC = 5,
  ROOT_USER_PICTURES = 6,
  ROOT_USER_VIDEOS = 7,
  ROOT_USER_DESKTOP = 11,
  ROOT_USER_APP_SUPPORT = 8,
  ROOT_SHARED = 9,
  ROOT_SHOW = 10,
  ROOT_CURRENT_RESOURCE = 12,
  UNRECOGNIZED = -1,
}

export function uRL_LocalRelativePath_RootFromJSON(object: any): URL_LocalRelativePath_Root {
  switch (object) {
    case 0:
    case "ROOT_UNKNOWN":
      return URL_LocalRelativePath_Root.ROOT_UNKNOWN;
    case 1:
    case "ROOT_BOOT_VOLUME":
      return URL_LocalRelativePath_Root.ROOT_BOOT_VOLUME;
    case 2:
    case "ROOT_USER_HOME":
      return URL_LocalRelativePath_Root.ROOT_USER_HOME;
    case 3:
    case "ROOT_USER_DOCUMENTS":
      return URL_LocalRelativePath_Root.ROOT_USER_DOCUMENTS;
    case 4:
    case "ROOT_USER_DOWNLOADS":
      return URL_LocalRelativePath_Root.ROOT_USER_DOWNLOADS;
    case 5:
    case "ROOT_USER_MUSIC":
      return URL_LocalRelativePath_Root.ROOT_USER_MUSIC;
    case 6:
    case "ROOT_USER_PICTURES":
      return URL_LocalRelativePath_Root.ROOT_USER_PICTURES;
    case 7:
    case "ROOT_USER_VIDEOS":
      return URL_LocalRelativePath_Root.ROOT_USER_VIDEOS;
    case 11:
    case "ROOT_USER_DESKTOP":
      return URL_LocalRelativePath_Root.ROOT_USER_DESKTOP;
    case 8:
    case "ROOT_USER_APP_SUPPORT":
      return URL_LocalRelativePath_Root.ROOT_USER_APP_SUPPORT;
    case 9:
    case "ROOT_SHARED":
      return URL_LocalRelativePath_Root.ROOT_SHARED;
    case 10:
    case "ROOT_SHOW":
      return URL_LocalRelativePath_Root.ROOT_SHOW;
    case 12:
    case "ROOT_CURRENT_RESOURCE":
      return URL_LocalRelativePath_Root.ROOT_CURRENT_RESOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return URL_LocalRelativePath_Root.UNRECOGNIZED;
  }
}

export function uRL_LocalRelativePath_RootToJSON(object: URL_LocalRelativePath_Root): string {
  switch (object) {
    case URL_LocalRelativePath_Root.ROOT_UNKNOWN:
      return "ROOT_UNKNOWN";
    case URL_LocalRelativePath_Root.ROOT_BOOT_VOLUME:
      return "ROOT_BOOT_VOLUME";
    case URL_LocalRelativePath_Root.ROOT_USER_HOME:
      return "ROOT_USER_HOME";
    case URL_LocalRelativePath_Root.ROOT_USER_DOCUMENTS:
      return "ROOT_USER_DOCUMENTS";
    case URL_LocalRelativePath_Root.ROOT_USER_DOWNLOADS:
      return "ROOT_USER_DOWNLOADS";
    case URL_LocalRelativePath_Root.ROOT_USER_MUSIC:
      return "ROOT_USER_MUSIC";
    case URL_LocalRelativePath_Root.ROOT_USER_PICTURES:
      return "ROOT_USER_PICTURES";
    case URL_LocalRelativePath_Root.ROOT_USER_VIDEOS:
      return "ROOT_USER_VIDEOS";
    case URL_LocalRelativePath_Root.ROOT_USER_DESKTOP:
      return "ROOT_USER_DESKTOP";
    case URL_LocalRelativePath_Root.ROOT_USER_APP_SUPPORT:
      return "ROOT_USER_APP_SUPPORT";
    case URL_LocalRelativePath_Root.ROOT_SHARED:
      return "ROOT_SHARED";
    case URL_LocalRelativePath_Root.ROOT_SHOW:
      return "ROOT_SHOW";
    case URL_LocalRelativePath_Root.ROOT_CURRENT_RESOURCE:
      return "ROOT_CURRENT_RESOURCE";
    case URL_LocalRelativePath_Root.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface URL_ExternalRelativePath {
  macos: URL_ExternalRelativePath_MacOSExternalVolume | undefined;
  win32: URL_ExternalRelativePath_Win32ExternalVolume | undefined;
  path: string;
}

export interface URL_ExternalRelativePath_MacOSExternalVolume {
  volumeName: string;
}

export interface URL_ExternalRelativePath_Win32ExternalVolume {
  driveLetter: string;
  volumeName: string;
  networkShare: boolean;
}

export interface URLs {
  urls: URL[];
}

export interface UUID {
  string: string;
}

export interface IntRange {
  start: number;
  end: number;
}

export interface Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

export interface Version {
  majorVersion: number;
  minorVersion: number;
  patchVersion: number;
  build: string;
}

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

export function applicationInfo_PlatformFromJSON(object: any): ApplicationInfo_Platform {
  switch (object) {
    case 0:
    case "PLATFORM_UNDEFINED":
      return ApplicationInfo_Platform.PLATFORM_UNDEFINED;
    case 1:
    case "PLATFORM_MACOS":
      return ApplicationInfo_Platform.PLATFORM_MACOS;
    case 2:
    case "PLATFORM_WINDOWS":
      return ApplicationInfo_Platform.PLATFORM_WINDOWS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplicationInfo_Platform.UNRECOGNIZED;
  }
}

export function applicationInfo_PlatformToJSON(object: ApplicationInfo_Platform): string {
  switch (object) {
    case ApplicationInfo_Platform.PLATFORM_UNDEFINED:
      return "PLATFORM_UNDEFINED";
    case ApplicationInfo_Platform.PLATFORM_MACOS:
      return "PLATFORM_MACOS";
    case ApplicationInfo_Platform.PLATFORM_WINDOWS:
      return "PLATFORM_WINDOWS";
    case ApplicationInfo_Platform.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

export function applicationInfo_ApplicationFromJSON(object: any): ApplicationInfo_Application {
  switch (object) {
    case 0:
    case "APPLICATION_UNDEFINED":
      return ApplicationInfo_Application.APPLICATION_UNDEFINED;
    case 1:
    case "APPLICATION_PROPRESENTER":
      return ApplicationInfo_Application.APPLICATION_PROPRESENTER;
    case 2:
    case "APPLICATION_PVP":
      return ApplicationInfo_Application.APPLICATION_PVP;
    case 3:
    case "APPLICATION_PROVIDEOSERVER":
      return ApplicationInfo_Application.APPLICATION_PROVIDEOSERVER;
    case 4:
    case "APPLICATION_SCOREBOARD":
      return ApplicationInfo_Application.APPLICATION_SCOREBOARD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplicationInfo_Application.UNRECOGNIZED;
  }
}

export function applicationInfo_ApplicationToJSON(object: ApplicationInfo_Application): string {
  switch (object) {
    case ApplicationInfo_Application.APPLICATION_UNDEFINED:
      return "APPLICATION_UNDEFINED";
    case ApplicationInfo_Application.APPLICATION_PROPRESENTER:
      return "APPLICATION_PROPRESENTER";
    case ApplicationInfo_Application.APPLICATION_PVP:
      return "APPLICATION_PVP";
    case ApplicationInfo_Application.APPLICATION_PROVIDEOSERVER:
      return "APPLICATION_PROVIDEOSERVER";
    case ApplicationInfo_Application.APPLICATION_SCOREBOARD:
      return "APPLICATION_SCOREBOARD";
    case ApplicationInfo_Application.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CollectionElementType {
  parameterUuid: UUID | undefined;
  parameterName: string;
}

export interface MusicKeyScale {
  musicKey: MusicKeyScale_MusicKey;
  musicScale: MusicKeyScale_MusicScale;
}

export enum MusicKeyScale_MusicKey {
  MUSIC_KEY_A_FLAT = 0,
  MUSIC_KEY_A = 1,
  MUSIC_KEY_A_SHARP = 2,
  MUSIC_KEY_B_FLAT = 3,
  MUSIC_KEY_B = 4,
  MUSIC_KEY_B_SHARP = 5,
  MUSIC_KEY_C_FLAT = 6,
  MUSIC_KEY_C = 7,
  MUSIC_KEY_C_SHARP = 8,
  MUSIC_KEY_D_FLAT = 9,
  MUSIC_KEY_D = 10,
  MUSIC_KEY_D_SHARP = 11,
  MUSIC_KEY_E_FLAT = 12,
  MUSIC_KEY_E = 13,
  MUSIC_KEY_E_SHARP = 14,
  MUSIC_KEY_F_FLAT = 15,
  MUSIC_KEY_F = 16,
  MUSIC_KEY_F_SHARP = 17,
  MUSIC_KEY_G_FLAT = 18,
  MUSIC_KEY_G = 19,
  MUSIC_KEY_G_SHARP = 20,
  UNRECOGNIZED = -1,
}

export function musicKeyScale_MusicKeyFromJSON(object: any): MusicKeyScale_MusicKey {
  switch (object) {
    case 0:
    case "MUSIC_KEY_A_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_A_FLAT;
    case 1:
    case "MUSIC_KEY_A":
      return MusicKeyScale_MusicKey.MUSIC_KEY_A;
    case 2:
    case "MUSIC_KEY_A_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_A_SHARP;
    case 3:
    case "MUSIC_KEY_B_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_B_FLAT;
    case 4:
    case "MUSIC_KEY_B":
      return MusicKeyScale_MusicKey.MUSIC_KEY_B;
    case 5:
    case "MUSIC_KEY_B_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_B_SHARP;
    case 6:
    case "MUSIC_KEY_C_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_C_FLAT;
    case 7:
    case "MUSIC_KEY_C":
      return MusicKeyScale_MusicKey.MUSIC_KEY_C;
    case 8:
    case "MUSIC_KEY_C_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_C_SHARP;
    case 9:
    case "MUSIC_KEY_D_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_D_FLAT;
    case 10:
    case "MUSIC_KEY_D":
      return MusicKeyScale_MusicKey.MUSIC_KEY_D;
    case 11:
    case "MUSIC_KEY_D_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_D_SHARP;
    case 12:
    case "MUSIC_KEY_E_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_E_FLAT;
    case 13:
    case "MUSIC_KEY_E":
      return MusicKeyScale_MusicKey.MUSIC_KEY_E;
    case 14:
    case "MUSIC_KEY_E_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_E_SHARP;
    case 15:
    case "MUSIC_KEY_F_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_F_FLAT;
    case 16:
    case "MUSIC_KEY_F":
      return MusicKeyScale_MusicKey.MUSIC_KEY_F;
    case 17:
    case "MUSIC_KEY_F_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_F_SHARP;
    case 18:
    case "MUSIC_KEY_G_FLAT":
      return MusicKeyScale_MusicKey.MUSIC_KEY_G_FLAT;
    case 19:
    case "MUSIC_KEY_G":
      return MusicKeyScale_MusicKey.MUSIC_KEY_G;
    case 20:
    case "MUSIC_KEY_G_SHARP":
      return MusicKeyScale_MusicKey.MUSIC_KEY_G_SHARP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MusicKeyScale_MusicKey.UNRECOGNIZED;
  }
}

export function musicKeyScale_MusicKeyToJSON(object: MusicKeyScale_MusicKey): string {
  switch (object) {
    case MusicKeyScale_MusicKey.MUSIC_KEY_A_FLAT:
      return "MUSIC_KEY_A_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_A:
      return "MUSIC_KEY_A";
    case MusicKeyScale_MusicKey.MUSIC_KEY_A_SHARP:
      return "MUSIC_KEY_A_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_B_FLAT:
      return "MUSIC_KEY_B_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_B:
      return "MUSIC_KEY_B";
    case MusicKeyScale_MusicKey.MUSIC_KEY_B_SHARP:
      return "MUSIC_KEY_B_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_C_FLAT:
      return "MUSIC_KEY_C_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_C:
      return "MUSIC_KEY_C";
    case MusicKeyScale_MusicKey.MUSIC_KEY_C_SHARP:
      return "MUSIC_KEY_C_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_D_FLAT:
      return "MUSIC_KEY_D_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_D:
      return "MUSIC_KEY_D";
    case MusicKeyScale_MusicKey.MUSIC_KEY_D_SHARP:
      return "MUSIC_KEY_D_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_E_FLAT:
      return "MUSIC_KEY_E_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_E:
      return "MUSIC_KEY_E";
    case MusicKeyScale_MusicKey.MUSIC_KEY_E_SHARP:
      return "MUSIC_KEY_E_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_F_FLAT:
      return "MUSIC_KEY_F_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_F:
      return "MUSIC_KEY_F";
    case MusicKeyScale_MusicKey.MUSIC_KEY_F_SHARP:
      return "MUSIC_KEY_F_SHARP";
    case MusicKeyScale_MusicKey.MUSIC_KEY_G_FLAT:
      return "MUSIC_KEY_G_FLAT";
    case MusicKeyScale_MusicKey.MUSIC_KEY_G:
      return "MUSIC_KEY_G";
    case MusicKeyScale_MusicKey.MUSIC_KEY_G_SHARP:
      return "MUSIC_KEY_G_SHARP";
    case MusicKeyScale_MusicKey.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MusicKeyScale_MusicScale {
  MUSIC_SCALE_MAJOR = 0,
  MUSIC_SCALE_MINOR = 1,
  UNRECOGNIZED = -1,
}

export function musicKeyScale_MusicScaleFromJSON(object: any): MusicKeyScale_MusicScale {
  switch (object) {
    case 0:
    case "MUSIC_SCALE_MAJOR":
      return MusicKeyScale_MusicScale.MUSIC_SCALE_MAJOR;
    case 1:
    case "MUSIC_SCALE_MINOR":
      return MusicKeyScale_MusicScale.MUSIC_SCALE_MINOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MusicKeyScale_MusicScale.UNRECOGNIZED;
  }
}

export function musicKeyScale_MusicScaleToJSON(object: MusicKeyScale_MusicScale): string {
  switch (object) {
    case MusicKeyScale_MusicScale.MUSIC_SCALE_MAJOR:
      return "MUSIC_SCALE_MAJOR";
    case MusicKeyScale_MusicScale.MUSIC_SCALE_MINOR:
      return "MUSIC_SCALE_MINOR";
    case MusicKeyScale_MusicScale.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseURL(): URL {
  return { platform: 0, absoluteString: undefined, relativePath: undefined, local: undefined, external: undefined };
}

export const URL = {
  encode(message: URL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(24).int32(message.platform);
    }
    if (message.absoluteString !== undefined) {
      writer.uint32(10).string(message.absoluteString);
    }
    if (message.relativePath !== undefined) {
      writer.uint32(18).string(message.relativePath);
    }
    if (message.local !== undefined) {
      URL_LocalRelativePath.encode(message.local, writer.uint32(34).fork()).ldelim();
    }
    if (message.external !== undefined) {
      URL_ExternalRelativePath.encode(message.external, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag != 24) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 1:
          if (tag != 10) {
            break;
          }

          message.absoluteString = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.relativePath = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.local = URL_LocalRelativePath.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.external = URL_ExternalRelativePath.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL {
    return {
      platform: isSet(object.platform) ? uRL_PlatformFromJSON(object.platform) : 0,
      absoluteString: isSet(object.absoluteString) ? String(object.absoluteString) : undefined,
      relativePath: isSet(object.relativePath) ? String(object.relativePath) : undefined,
      local: isSet(object.local) ? URL_LocalRelativePath.fromJSON(object.local) : undefined,
      external: isSet(object.external) ? URL_ExternalRelativePath.fromJSON(object.external) : undefined,
    };
  },

  toJSON(message: URL): unknown {
    const obj: any = {};
    message.platform !== undefined && (obj.platform = uRL_PlatformToJSON(message.platform));
    message.absoluteString !== undefined && (obj.absoluteString = message.absoluteString);
    message.relativePath !== undefined && (obj.relativePath = message.relativePath);
    message.local !== undefined &&
      (obj.local = message.local ? URL_LocalRelativePath.toJSON(message.local) : undefined);
    message.external !== undefined &&
      (obj.external = message.external ? URL_ExternalRelativePath.toJSON(message.external) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<URL>, I>>(base?: I): URL {
    return URL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URL>, I>>(object: I): URL {
    const message = createBaseURL();
    message.platform = object.platform ?? 0;
    message.absoluteString = object.absoluteString ?? undefined;
    message.relativePath = object.relativePath ?? undefined;
    message.local = (object.local !== undefined && object.local !== null)
      ? URL_LocalRelativePath.fromPartial(object.local)
      : undefined;
    message.external = (object.external !== undefined && object.external !== null)
      ? URL_ExternalRelativePath.fromPartial(object.external)
      : undefined;
    return message;
  },
};

function createBaseURL_LocalRelativePath(): URL_LocalRelativePath {
  return { root: 0, path: "" };
}

export const URL_LocalRelativePath = {
  encode(message: URL_LocalRelativePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.root !== 0) {
      writer.uint32(8).int32(message.root);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL_LocalRelativePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_LocalRelativePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.root = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_LocalRelativePath {
    return {
      root: isSet(object.root) ? uRL_LocalRelativePath_RootFromJSON(object.root) : 0,
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: URL_LocalRelativePath): unknown {
    const obj: any = {};
    message.root !== undefined && (obj.root = uRL_LocalRelativePath_RootToJSON(message.root));
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_LocalRelativePath>, I>>(base?: I): URL_LocalRelativePath {
    return URL_LocalRelativePath.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URL_LocalRelativePath>, I>>(object: I): URL_LocalRelativePath {
    const message = createBaseURL_LocalRelativePath();
    message.root = object.root ?? 0;
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseURL_ExternalRelativePath(): URL_ExternalRelativePath {
  return { macos: undefined, win32: undefined, path: "" };
}

export const URL_ExternalRelativePath = {
  encode(message: URL_ExternalRelativePath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.macos !== undefined) {
      URL_ExternalRelativePath_MacOSExternalVolume.encode(message.macos, writer.uint32(10).fork()).ldelim();
    }
    if (message.win32 !== undefined) {
      URL_ExternalRelativePath_Win32ExternalVolume.encode(message.win32, writer.uint32(18).fork()).ldelim();
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL_ExternalRelativePath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.macos = URL_ExternalRelativePath_MacOSExternalVolume.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.win32 = URL_ExternalRelativePath_Win32ExternalVolume.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath {
    return {
      macos: isSet(object.macos) ? URL_ExternalRelativePath_MacOSExternalVolume.fromJSON(object.macos) : undefined,
      win32: isSet(object.win32) ? URL_ExternalRelativePath_Win32ExternalVolume.fromJSON(object.win32) : undefined,
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: URL_ExternalRelativePath): unknown {
    const obj: any = {};
    message.macos !== undefined &&
      (obj.macos = message.macos ? URL_ExternalRelativePath_MacOSExternalVolume.toJSON(message.macos) : undefined);
    message.win32 !== undefined &&
      (obj.win32 = message.win32 ? URL_ExternalRelativePath_Win32ExternalVolume.toJSON(message.win32) : undefined);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_ExternalRelativePath>, I>>(base?: I): URL_ExternalRelativePath {
    return URL_ExternalRelativePath.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URL_ExternalRelativePath>, I>>(object: I): URL_ExternalRelativePath {
    const message = createBaseURL_ExternalRelativePath();
    message.macos = (object.macos !== undefined && object.macos !== null)
      ? URL_ExternalRelativePath_MacOSExternalVolume.fromPartial(object.macos)
      : undefined;
    message.win32 = (object.win32 !== undefined && object.win32 !== null)
      ? URL_ExternalRelativePath_Win32ExternalVolume.fromPartial(object.win32)
      : undefined;
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseURL_ExternalRelativePath_MacOSExternalVolume(): URL_ExternalRelativePath_MacOSExternalVolume {
  return { volumeName: "" };
}

export const URL_ExternalRelativePath_MacOSExternalVolume = {
  encode(message: URL_ExternalRelativePath_MacOSExternalVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volumeName !== "") {
      writer.uint32(10).string(message.volumeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL_ExternalRelativePath_MacOSExternalVolume {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath_MacOSExternalVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.volumeName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath_MacOSExternalVolume {
    return { volumeName: isSet(object.volumeName) ? String(object.volumeName) : "" };
  },

  toJSON(message: URL_ExternalRelativePath_MacOSExternalVolume): unknown {
    const obj: any = {};
    message.volumeName !== undefined && (obj.volumeName = message.volumeName);
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_ExternalRelativePath_MacOSExternalVolume>, I>>(
    base?: I,
  ): URL_ExternalRelativePath_MacOSExternalVolume {
    return URL_ExternalRelativePath_MacOSExternalVolume.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URL_ExternalRelativePath_MacOSExternalVolume>, I>>(
    object: I,
  ): URL_ExternalRelativePath_MacOSExternalVolume {
    const message = createBaseURL_ExternalRelativePath_MacOSExternalVolume();
    message.volumeName = object.volumeName ?? "";
    return message;
  },
};

function createBaseURL_ExternalRelativePath_Win32ExternalVolume(): URL_ExternalRelativePath_Win32ExternalVolume {
  return { driveLetter: "", volumeName: "", networkShare: false };
}

export const URL_ExternalRelativePath_Win32ExternalVolume = {
  encode(message: URL_ExternalRelativePath_Win32ExternalVolume, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.driveLetter !== "") {
      writer.uint32(10).string(message.driveLetter);
    }
    if (message.volumeName !== "") {
      writer.uint32(18).string(message.volumeName);
    }
    if (message.networkShare === true) {
      writer.uint32(24).bool(message.networkShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL_ExternalRelativePath_Win32ExternalVolume {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath_Win32ExternalVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.driveLetter = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.volumeName = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.networkShare = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath_Win32ExternalVolume {
    return {
      driveLetter: isSet(object.driveLetter) ? String(object.driveLetter) : "",
      volumeName: isSet(object.volumeName) ? String(object.volumeName) : "",
      networkShare: isSet(object.networkShare) ? Boolean(object.networkShare) : false,
    };
  },

  toJSON(message: URL_ExternalRelativePath_Win32ExternalVolume): unknown {
    const obj: any = {};
    message.driveLetter !== undefined && (obj.driveLetter = message.driveLetter);
    message.volumeName !== undefined && (obj.volumeName = message.volumeName);
    message.networkShare !== undefined && (obj.networkShare = message.networkShare);
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_ExternalRelativePath_Win32ExternalVolume>, I>>(
    base?: I,
  ): URL_ExternalRelativePath_Win32ExternalVolume {
    return URL_ExternalRelativePath_Win32ExternalVolume.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URL_ExternalRelativePath_Win32ExternalVolume>, I>>(
    object: I,
  ): URL_ExternalRelativePath_Win32ExternalVolume {
    const message = createBaseURL_ExternalRelativePath_Win32ExternalVolume();
    message.driveLetter = object.driveLetter ?? "";
    message.volumeName = object.volumeName ?? "";
    message.networkShare = object.networkShare ?? false;
    return message;
  },
};

function createBaseURLs(): URLs {
  return { urls: [] };
}

export const URLs = {
  encode(message: URLs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.urls) {
      URL.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URLs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURLs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.urls.push(URL.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URLs {
    return { urls: Array.isArray(object?.urls) ? object.urls.map((e: any) => URL.fromJSON(e)) : [] };
  },

  toJSON(message: URLs): unknown {
    const obj: any = {};
    if (message.urls) {
      obj.urls = message.urls.map((e) => e ? URL.toJSON(e) : undefined);
    } else {
      obj.urls = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URLs>, I>>(base?: I): URLs {
    return URLs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URLs>, I>>(object: I): URLs {
    const message = createBaseURLs();
    message.urls = object.urls?.map((e) => URL.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUUID(): UUID {
  return { string: "" };
}

export const UUID = {
  encode(message: UUID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.string !== "") {
      writer.uint32(10).string(message.string);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UUID {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUUID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.string = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UUID {
    return { string: isSet(object.string) ? String(object.string) : "" };
  },

  toJSON(message: UUID): unknown {
    const obj: any = {};
    message.string !== undefined && (obj.string = message.string);
    return obj;
  },

  create<I extends Exact<DeepPartial<UUID>, I>>(base?: I): UUID {
    return UUID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UUID>, I>>(object: I): UUID {
    const message = createBaseUUID();
    message.string = object.string ?? "";
    return message;
  },
};

function createBaseIntRange(): IntRange {
  return { start: 0, end: 0 };
}

export const IntRange = {
  encode(message: IntRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntRange {
    return { start: isSet(object.start) ? Number(object.start) : 0, end: isSet(object.end) ? Number(object.end) : 0 };
  },

  toJSON(message: IntRange): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    return obj;
  },

  create<I extends Exact<DeepPartial<IntRange>, I>>(base?: I): IntRange {
    return IntRange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntRange>, I>>(object: I): IntRange {
    const message = createBaseIntRange();
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    return message;
  },
};

function createBaseColor(): Color {
  return { red: 0, green: 0, blue: 0, alpha: 0 };
}

export const Color = {
  encode(message: Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.red !== 0) {
      writer.uint32(13).float(message.red);
    }
    if (message.green !== 0) {
      writer.uint32(21).float(message.green);
    }
    if (message.blue !== 0) {
      writer.uint32(29).float(message.blue);
    }
    if (message.alpha !== 0) {
      writer.uint32(37).float(message.alpha);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Color {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 13) {
            break;
          }

          message.red = reader.float();
          continue;
        case 2:
          if (tag != 21) {
            break;
          }

          message.green = reader.float();
          continue;
        case 3:
          if (tag != 29) {
            break;
          }

          message.blue = reader.float();
          continue;
        case 4:
          if (tag != 37) {
            break;
          }

          message.alpha = reader.float();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Color {
    return {
      red: isSet(object.red) ? Number(object.red) : 0,
      green: isSet(object.green) ? Number(object.green) : 0,
      blue: isSet(object.blue) ? Number(object.blue) : 0,
      alpha: isSet(object.alpha) ? Number(object.alpha) : 0,
    };
  },

  toJSON(message: Color): unknown {
    const obj: any = {};
    message.red !== undefined && (obj.red = message.red);
    message.green !== undefined && (obj.green = message.green);
    message.blue !== undefined && (obj.blue = message.blue);
    message.alpha !== undefined && (obj.alpha = message.alpha);
    return obj;
  },

  create<I extends Exact<DeepPartial<Color>, I>>(base?: I): Color {
    return Color.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Color>, I>>(object: I): Color {
    const message = createBaseColor();
    message.red = object.red ?? 0;
    message.green = object.green ?? 0;
    message.blue = object.blue ?? 0;
    message.alpha = object.alpha ?? 0;
    return message;
  },
};

function createBaseVersion(): Version {
  return { majorVersion: 0, minorVersion: 0, patchVersion: 0, build: "" };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.majorVersion !== 0) {
      writer.uint32(8).uint32(message.majorVersion);
    }
    if (message.minorVersion !== 0) {
      writer.uint32(16).uint32(message.minorVersion);
    }
    if (message.patchVersion !== 0) {
      writer.uint32(24).uint32(message.patchVersion);
    }
    if (message.build !== "") {
      writer.uint32(34).string(message.build);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.majorVersion = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minorVersion = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.patchVersion = reader.uint32();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.build = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      majorVersion: isSet(object.majorVersion) ? Number(object.majorVersion) : 0,
      minorVersion: isSet(object.minorVersion) ? Number(object.minorVersion) : 0,
      patchVersion: isSet(object.patchVersion) ? Number(object.patchVersion) : 0,
      build: isSet(object.build) ? String(object.build) : "",
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    message.majorVersion !== undefined && (obj.majorVersion = Math.round(message.majorVersion));
    message.minorVersion !== undefined && (obj.minorVersion = Math.round(message.minorVersion));
    message.patchVersion !== undefined && (obj.patchVersion = Math.round(message.patchVersion));
    message.build !== undefined && (obj.build = message.build);
    return obj;
  },

  create<I extends Exact<DeepPartial<Version>, I>>(base?: I): Version {
    return Version.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Version>, I>>(object: I): Version {
    const message = createBaseVersion();
    message.majorVersion = object.majorVersion ?? 0;
    message.minorVersion = object.minorVersion ?? 0;
    message.patchVersion = object.patchVersion ?? 0;
    message.build = object.build ?? "";
    return message;
  },
};

function createBaseApplicationInfo(): ApplicationInfo {
  return { platform: 0, platformVersion: undefined, application: 0, applicationVersion: undefined };
}

export const ApplicationInfo = {
  encode(message: ApplicationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    if (message.platformVersion !== undefined) {
      Version.encode(message.platformVersion, writer.uint32(18).fork()).ldelim();
    }
    if (message.application !== 0) {
      writer.uint32(24).int32(message.application);
    }
    if (message.applicationVersion !== undefined) {
      Version.encode(message.applicationVersion, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApplicationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.platformVersion = Version.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.application = reader.int32() as any;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.applicationVersion = Version.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApplicationInfo {
    return {
      platform: isSet(object.platform) ? applicationInfo_PlatformFromJSON(object.platform) : 0,
      platformVersion: isSet(object.platformVersion) ? Version.fromJSON(object.platformVersion) : undefined,
      application: isSet(object.application) ? applicationInfo_ApplicationFromJSON(object.application) : 0,
      applicationVersion: isSet(object.applicationVersion) ? Version.fromJSON(object.applicationVersion) : undefined,
    };
  },

  toJSON(message: ApplicationInfo): unknown {
    const obj: any = {};
    message.platform !== undefined && (obj.platform = applicationInfo_PlatformToJSON(message.platform));
    message.platformVersion !== undefined &&
      (obj.platformVersion = message.platformVersion ? Version.toJSON(message.platformVersion) : undefined);
    message.application !== undefined && (obj.application = applicationInfo_ApplicationToJSON(message.application));
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion ? Version.toJSON(message.applicationVersion) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationInfo>, I>>(base?: I): ApplicationInfo {
    return ApplicationInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApplicationInfo>, I>>(object: I): ApplicationInfo {
    const message = createBaseApplicationInfo();
    message.platform = object.platform ?? 0;
    message.platformVersion = (object.platformVersion !== undefined && object.platformVersion !== null)
      ? Version.fromPartial(object.platformVersion)
      : undefined;
    message.application = object.application ?? 0;
    message.applicationVersion = (object.applicationVersion !== undefined && object.applicationVersion !== null)
      ? Version.fromPartial(object.applicationVersion)
      : undefined;
    return message;
  },
};

function createBaseCollectionElementType(): CollectionElementType {
  return { parameterUuid: undefined, parameterName: "" };
}

export const CollectionElementType = {
  encode(message: CollectionElementType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parameterUuid !== undefined) {
      UUID.encode(message.parameterUuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.parameterName !== "") {
      writer.uint32(18).string(message.parameterName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionElementType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionElementType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.parameterUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.parameterName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CollectionElementType {
    return {
      parameterUuid: isSet(object.parameterUuid) ? UUID.fromJSON(object.parameterUuid) : undefined,
      parameterName: isSet(object.parameterName) ? String(object.parameterName) : "",
    };
  },

  toJSON(message: CollectionElementType): unknown {
    const obj: any = {};
    message.parameterUuid !== undefined &&
      (obj.parameterUuid = message.parameterUuid ? UUID.toJSON(message.parameterUuid) : undefined);
    message.parameterName !== undefined && (obj.parameterName = message.parameterName);
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectionElementType>, I>>(base?: I): CollectionElementType {
    return CollectionElementType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CollectionElementType>, I>>(object: I): CollectionElementType {
    const message = createBaseCollectionElementType();
    message.parameterUuid = (object.parameterUuid !== undefined && object.parameterUuid !== null)
      ? UUID.fromPartial(object.parameterUuid)
      : undefined;
    message.parameterName = object.parameterName ?? "";
    return message;
  },
};

function createBaseMusicKeyScale(): MusicKeyScale {
  return { musicKey: 0, musicScale: 0 };
}

export const MusicKeyScale = {
  encode(message: MusicKeyScale, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.musicKey !== 0) {
      writer.uint32(8).int32(message.musicKey);
    }
    if (message.musicScale !== 0) {
      writer.uint32(16).int32(message.musicScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MusicKeyScale {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMusicKeyScale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.musicKey = reader.int32() as any;
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.musicScale = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MusicKeyScale {
    return {
      musicKey: isSet(object.musicKey) ? musicKeyScale_MusicKeyFromJSON(object.musicKey) : 0,
      musicScale: isSet(object.musicScale) ? musicKeyScale_MusicScaleFromJSON(object.musicScale) : 0,
    };
  },

  toJSON(message: MusicKeyScale): unknown {
    const obj: any = {};
    message.musicKey !== undefined && (obj.musicKey = musicKeyScale_MusicKeyToJSON(message.musicKey));
    message.musicScale !== undefined && (obj.musicScale = musicKeyScale_MusicScaleToJSON(message.musicScale));
    return obj;
  },

  create<I extends Exact<DeepPartial<MusicKeyScale>, I>>(base?: I): MusicKeyScale {
    return MusicKeyScale.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MusicKeyScale>, I>>(object: I): MusicKeyScale {
    const message = createBaseMusicKeyScale();
    message.musicKey = object.musicKey ?? 0;
    message.musicScale = object.musicScale ?? 0;
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
