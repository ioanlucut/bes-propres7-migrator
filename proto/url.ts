/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

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
    case 'PLATFORM_UNKNOWN':
      return URL_Platform.PLATFORM_UNKNOWN;
    case 1:
    case 'PLATFORM_MACOS':
      return URL_Platform.PLATFORM_MACOS;
    case 2:
    case 'PLATFORM_WIN32':
      return URL_Platform.PLATFORM_WIN32;
    case 3:
    case 'PLATFORM_WEB':
      return URL_Platform.PLATFORM_WEB;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return URL_Platform.UNRECOGNIZED;
  }
}

export function uRL_PlatformToJSON(object: URL_Platform): string {
  switch (object) {
    case URL_Platform.PLATFORM_UNKNOWN:
      return 'PLATFORM_UNKNOWN';
    case URL_Platform.PLATFORM_MACOS:
      return 'PLATFORM_MACOS';
    case URL_Platform.PLATFORM_WIN32:
      return 'PLATFORM_WIN32';
    case URL_Platform.PLATFORM_WEB:
      return 'PLATFORM_WEB';
    case URL_Platform.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
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

export function uRL_LocalRelativePath_RootFromJSON(
  object: any,
): URL_LocalRelativePath_Root {
  switch (object) {
    case 0:
    case 'ROOT_UNKNOWN':
      return URL_LocalRelativePath_Root.ROOT_UNKNOWN;
    case 1:
    case 'ROOT_BOOT_VOLUME':
      return URL_LocalRelativePath_Root.ROOT_BOOT_VOLUME;
    case 2:
    case 'ROOT_USER_HOME':
      return URL_LocalRelativePath_Root.ROOT_USER_HOME;
    case 3:
    case 'ROOT_USER_DOCUMENTS':
      return URL_LocalRelativePath_Root.ROOT_USER_DOCUMENTS;
    case 4:
    case 'ROOT_USER_DOWNLOADS':
      return URL_LocalRelativePath_Root.ROOT_USER_DOWNLOADS;
    case 5:
    case 'ROOT_USER_MUSIC':
      return URL_LocalRelativePath_Root.ROOT_USER_MUSIC;
    case 6:
    case 'ROOT_USER_PICTURES':
      return URL_LocalRelativePath_Root.ROOT_USER_PICTURES;
    case 7:
    case 'ROOT_USER_VIDEOS':
      return URL_LocalRelativePath_Root.ROOT_USER_VIDEOS;
    case 11:
    case 'ROOT_USER_DESKTOP':
      return URL_LocalRelativePath_Root.ROOT_USER_DESKTOP;
    case 8:
    case 'ROOT_USER_APP_SUPPORT':
      return URL_LocalRelativePath_Root.ROOT_USER_APP_SUPPORT;
    case 9:
    case 'ROOT_SHARED':
      return URL_LocalRelativePath_Root.ROOT_SHARED;
    case 10:
    case 'ROOT_SHOW':
      return URL_LocalRelativePath_Root.ROOT_SHOW;
    case 12:
    case 'ROOT_CURRENT_RESOURCE':
      return URL_LocalRelativePath_Root.ROOT_CURRENT_RESOURCE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return URL_LocalRelativePath_Root.UNRECOGNIZED;
  }
}

export function uRL_LocalRelativePath_RootToJSON(
  object: URL_LocalRelativePath_Root,
): string {
  switch (object) {
    case URL_LocalRelativePath_Root.ROOT_UNKNOWN:
      return 'ROOT_UNKNOWN';
    case URL_LocalRelativePath_Root.ROOT_BOOT_VOLUME:
      return 'ROOT_BOOT_VOLUME';
    case URL_LocalRelativePath_Root.ROOT_USER_HOME:
      return 'ROOT_USER_HOME';
    case URL_LocalRelativePath_Root.ROOT_USER_DOCUMENTS:
      return 'ROOT_USER_DOCUMENTS';
    case URL_LocalRelativePath_Root.ROOT_USER_DOWNLOADS:
      return 'ROOT_USER_DOWNLOADS';
    case URL_LocalRelativePath_Root.ROOT_USER_MUSIC:
      return 'ROOT_USER_MUSIC';
    case URL_LocalRelativePath_Root.ROOT_USER_PICTURES:
      return 'ROOT_USER_PICTURES';
    case URL_LocalRelativePath_Root.ROOT_USER_VIDEOS:
      return 'ROOT_USER_VIDEOS';
    case URL_LocalRelativePath_Root.ROOT_USER_DESKTOP:
      return 'ROOT_USER_DESKTOP';
    case URL_LocalRelativePath_Root.ROOT_USER_APP_SUPPORT:
      return 'ROOT_USER_APP_SUPPORT';
    case URL_LocalRelativePath_Root.ROOT_SHARED:
      return 'ROOT_SHARED';
    case URL_LocalRelativePath_Root.ROOT_SHOW:
      return 'ROOT_SHOW';
    case URL_LocalRelativePath_Root.ROOT_CURRENT_RESOURCE:
      return 'ROOT_CURRENT_RESOURCE';
    case URL_LocalRelativePath_Root.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
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

function createBaseURL(): URL {
  return {
    platform: 0,
    absoluteString: undefined,
    relativePath: undefined,
    local: undefined,
    external: undefined,
  };
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
      URL_LocalRelativePath.encode(
        message.local,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.external !== undefined) {
      URL_ExternalRelativePath.encode(
        message.external,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URL {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.absoluteString = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relativePath = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.local = URL_LocalRelativePath.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.external = URL_ExternalRelativePath.decode(
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

  fromJSON(object: any): URL {
    return {
      platform: isSet(object.platform)
        ? uRL_PlatformFromJSON(object.platform)
        : 0,
      absoluteString: isSet(object.absoluteString)
        ? globalThis.String(object.absoluteString)
        : undefined,
      relativePath: isSet(object.relativePath)
        ? globalThis.String(object.relativePath)
        : undefined,
      local: isSet(object.local)
        ? URL_LocalRelativePath.fromJSON(object.local)
        : undefined,
      external: isSet(object.external)
        ? URL_ExternalRelativePath.fromJSON(object.external)
        : undefined,
    };
  },

  toJSON(message: URL): unknown {
    const obj: any = {};
    if (message.platform !== 0) {
      obj.platform = uRL_PlatformToJSON(message.platform);
    }
    if (message.absoluteString !== undefined) {
      obj.absoluteString = message.absoluteString;
    }
    if (message.relativePath !== undefined) {
      obj.relativePath = message.relativePath;
    }
    if (message.local !== undefined) {
      obj.local = URL_LocalRelativePath.toJSON(message.local);
    }
    if (message.external !== undefined) {
      obj.external = URL_ExternalRelativePath.toJSON(message.external);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URL>, I>>(base?: I): URL {
    return URL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<URL>, I>>(object: I): URL {
    const message = createBaseURL();
    message.platform = object.platform ?? 0;
    message.absoluteString = object.absoluteString ?? undefined;
    message.relativePath = object.relativePath ?? undefined;
    message.local =
      object.local !== undefined && object.local !== null
        ? URL_LocalRelativePath.fromPartial(object.local)
        : undefined;
    message.external =
      object.external !== undefined && object.external !== null
        ? URL_ExternalRelativePath.fromPartial(object.external)
        : undefined;
    return message;
  },
};

function createBaseURL_LocalRelativePath(): URL_LocalRelativePath {
  return { root: 0, path: '' };
}

export const URL_LocalRelativePath = {
  encode(
    message: URL_LocalRelativePath,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.root !== 0) {
      writer.uint32(8).int32(message.root);
    }
    if (message.path !== '') {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): URL_LocalRelativePath {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_LocalRelativePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.root = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_LocalRelativePath {
    return {
      root: isSet(object.root)
        ? uRL_LocalRelativePath_RootFromJSON(object.root)
        : 0,
      path: isSet(object.path) ? globalThis.String(object.path) : '',
    };
  },

  toJSON(message: URL_LocalRelativePath): unknown {
    const obj: any = {};
    if (message.root !== 0) {
      obj.root = uRL_LocalRelativePath_RootToJSON(message.root);
    }
    if (message.path !== '') {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_LocalRelativePath>, I>>(
    base?: I,
  ): URL_LocalRelativePath {
    return URL_LocalRelativePath.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<URL_LocalRelativePath>, I>>(
    object: I,
  ): URL_LocalRelativePath {
    const message = createBaseURL_LocalRelativePath();
    message.root = object.root ?? 0;
    message.path = object.path ?? '';
    return message;
  },
};

function createBaseURL_ExternalRelativePath(): URL_ExternalRelativePath {
  return { macos: undefined, win32: undefined, path: '' };
}

export const URL_ExternalRelativePath = {
  encode(
    message: URL_ExternalRelativePath,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macos !== undefined) {
      URL_ExternalRelativePath_MacOSExternalVolume.encode(
        message.macos,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.win32 !== undefined) {
      URL_ExternalRelativePath_Win32ExternalVolume.encode(
        message.win32,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.path !== '') {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): URL_ExternalRelativePath {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macos = URL_ExternalRelativePath_MacOSExternalVolume.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.win32 = URL_ExternalRelativePath_Win32ExternalVolume.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath {
    return {
      macos: isSet(object.macos)
        ? URL_ExternalRelativePath_MacOSExternalVolume.fromJSON(object.macos)
        : undefined,
      win32: isSet(object.win32)
        ? URL_ExternalRelativePath_Win32ExternalVolume.fromJSON(object.win32)
        : undefined,
      path: isSet(object.path) ? globalThis.String(object.path) : '',
    };
  },

  toJSON(message: URL_ExternalRelativePath): unknown {
    const obj: any = {};
    if (message.macos !== undefined) {
      obj.macos = URL_ExternalRelativePath_MacOSExternalVolume.toJSON(
        message.macos,
      );
    }
    if (message.win32 !== undefined) {
      obj.win32 = URL_ExternalRelativePath_Win32ExternalVolume.toJSON(
        message.win32,
      );
    }
    if (message.path !== '') {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URL_ExternalRelativePath>, I>>(
    base?: I,
  ): URL_ExternalRelativePath {
    return URL_ExternalRelativePath.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<URL_ExternalRelativePath>, I>>(
    object: I,
  ): URL_ExternalRelativePath {
    const message = createBaseURL_ExternalRelativePath();
    message.macos =
      object.macos !== undefined && object.macos !== null
        ? URL_ExternalRelativePath_MacOSExternalVolume.fromPartial(object.macos)
        : undefined;
    message.win32 =
      object.win32 !== undefined && object.win32 !== null
        ? URL_ExternalRelativePath_Win32ExternalVolume.fromPartial(object.win32)
        : undefined;
    message.path = object.path ?? '';
    return message;
  },
};

function createBaseURL_ExternalRelativePath_MacOSExternalVolume(): URL_ExternalRelativePath_MacOSExternalVolume {
  return { volumeName: '' };
}

export const URL_ExternalRelativePath_MacOSExternalVolume = {
  encode(
    message: URL_ExternalRelativePath_MacOSExternalVolume,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.volumeName !== '') {
      writer.uint32(10).string(message.volumeName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): URL_ExternalRelativePath_MacOSExternalVolume {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath_MacOSExternalVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.volumeName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath_MacOSExternalVolume {
    return {
      volumeName: isSet(object.volumeName)
        ? globalThis.String(object.volumeName)
        : '',
    };
  },

  toJSON(message: URL_ExternalRelativePath_MacOSExternalVolume): unknown {
    const obj: any = {};
    if (message.volumeName !== '') {
      obj.volumeName = message.volumeName;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<URL_ExternalRelativePath_MacOSExternalVolume>,
      I
    >,
  >(base?: I): URL_ExternalRelativePath_MacOSExternalVolume {
    return URL_ExternalRelativePath_MacOSExternalVolume.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<URL_ExternalRelativePath_MacOSExternalVolume>,
      I
    >,
  >(object: I): URL_ExternalRelativePath_MacOSExternalVolume {
    const message = createBaseURL_ExternalRelativePath_MacOSExternalVolume();
    message.volumeName = object.volumeName ?? '';
    return message;
  },
};

function createBaseURL_ExternalRelativePath_Win32ExternalVolume(): URL_ExternalRelativePath_Win32ExternalVolume {
  return { driveLetter: '', volumeName: '', networkShare: false };
}

export const URL_ExternalRelativePath_Win32ExternalVolume = {
  encode(
    message: URL_ExternalRelativePath_Win32ExternalVolume,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.driveLetter !== '') {
      writer.uint32(10).string(message.driveLetter);
    }
    if (message.volumeName !== '') {
      writer.uint32(18).string(message.volumeName);
    }
    if (message.networkShare !== false) {
      writer.uint32(24).bool(message.networkShare);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): URL_ExternalRelativePath_Win32ExternalVolume {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURL_ExternalRelativePath_Win32ExternalVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.driveLetter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.volumeName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.networkShare = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URL_ExternalRelativePath_Win32ExternalVolume {
    return {
      driveLetter: isSet(object.driveLetter)
        ? globalThis.String(object.driveLetter)
        : '',
      volumeName: isSet(object.volumeName)
        ? globalThis.String(object.volumeName)
        : '',
      networkShare: isSet(object.networkShare)
        ? globalThis.Boolean(object.networkShare)
        : false,
    };
  },

  toJSON(message: URL_ExternalRelativePath_Win32ExternalVolume): unknown {
    const obj: any = {};
    if (message.driveLetter !== '') {
      obj.driveLetter = message.driveLetter;
    }
    if (message.volumeName !== '') {
      obj.volumeName = message.volumeName;
    }
    if (message.networkShare !== false) {
      obj.networkShare = message.networkShare;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<URL_ExternalRelativePath_Win32ExternalVolume>,
      I
    >,
  >(base?: I): URL_ExternalRelativePath_Win32ExternalVolume {
    return URL_ExternalRelativePath_Win32ExternalVolume.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<URL_ExternalRelativePath_Win32ExternalVolume>,
      I
    >,
  >(object: I): URL_ExternalRelativePath_Win32ExternalVolume {
    const message = createBaseURL_ExternalRelativePath_Win32ExternalVolume();
    message.driveLetter = object.driveLetter ?? '';
    message.volumeName = object.volumeName ?? '';
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
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURLs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.urls.push(URL.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URLs {
    return {
      urls: globalThis.Array.isArray(object?.urls)
        ? object.urls.map((e: any) => URL.fromJSON(e))
        : [],
    };
  },

  toJSON(message: URLs): unknown {
    const obj: any = {};
    if (message.urls?.length) {
      obj.urls = message.urls.map((e) => URL.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URLs>, I>>(base?: I): URLs {
    return URLs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<URLs>, I>>(object: I): URLs {
    const message = createBaseURLs();
    message.urls = object.urls?.map((e) => URL.fromPartial(e)) || [];
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
