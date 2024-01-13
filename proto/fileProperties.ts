/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { URL } from './url';

export const protobufPackage = 'rv.data';

export interface FileProperties {
  localUrl: URL | undefined;
  remoteProperties: FileProperties_RemoteProperties | undefined;
}

export interface FileProperties_RemoteProperties {
  procontent: FileProperties_RemoteProperties_ProContent | undefined;
}

export interface FileProperties_RemoteProperties_ProContent {
  downloadIdentifier: string;
}

function createBaseFileProperties(): FileProperties {
  return { localUrl: undefined, remoteProperties: undefined };
}

export const FileProperties = {
  encode(
    message: FileProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.localUrl !== undefined) {
      URL.encode(message.localUrl, writer.uint32(10).fork()).ldelim();
    }
    if (message.remoteProperties !== undefined) {
      FileProperties_RemoteProperties.encode(
        message.remoteProperties,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.localUrl = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remoteProperties = FileProperties_RemoteProperties.decode(
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

  fromJSON(object: any): FileProperties {
    return {
      localUrl: isSet(object.localUrl)
        ? URL.fromJSON(object.localUrl)
        : undefined,
      remoteProperties: isSet(object.remoteProperties)
        ? FileProperties_RemoteProperties.fromJSON(object.remoteProperties)
        : undefined,
    };
  },

  toJSON(message: FileProperties): unknown {
    const obj: any = {};
    if (message.localUrl !== undefined) {
      obj.localUrl = URL.toJSON(message.localUrl);
    }
    if (message.remoteProperties !== undefined) {
      obj.remoteProperties = FileProperties_RemoteProperties.toJSON(
        message.remoteProperties,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileProperties>, I>>(
    base?: I,
  ): FileProperties {
    return FileProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileProperties>, I>>(
    object: I,
  ): FileProperties {
    const message = createBaseFileProperties();
    message.localUrl =
      object.localUrl !== undefined && object.localUrl !== null
        ? URL.fromPartial(object.localUrl)
        : undefined;
    message.remoteProperties =
      object.remoteProperties !== undefined && object.remoteProperties !== null
        ? FileProperties_RemoteProperties.fromPartial(object.remoteProperties)
        : undefined;
    return message;
  },
};

function createBaseFileProperties_RemoteProperties(): FileProperties_RemoteProperties {
  return { procontent: undefined };
}

export const FileProperties_RemoteProperties = {
  encode(
    message: FileProperties_RemoteProperties,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.procontent !== undefined) {
      FileProperties_RemoteProperties_ProContent.encode(
        message.procontent,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FileProperties_RemoteProperties {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileProperties_RemoteProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.procontent =
            FileProperties_RemoteProperties_ProContent.decode(
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

  fromJSON(object: any): FileProperties_RemoteProperties {
    return {
      procontent: isSet(object.procontent)
        ? FileProperties_RemoteProperties_ProContent.fromJSON(object.procontent)
        : undefined,
    };
  },

  toJSON(message: FileProperties_RemoteProperties): unknown {
    const obj: any = {};
    if (message.procontent !== undefined) {
      obj.procontent = FileProperties_RemoteProperties_ProContent.toJSON(
        message.procontent,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileProperties_RemoteProperties>, I>>(
    base?: I,
  ): FileProperties_RemoteProperties {
    return FileProperties_RemoteProperties.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileProperties_RemoteProperties>, I>>(
    object: I,
  ): FileProperties_RemoteProperties {
    const message = createBaseFileProperties_RemoteProperties();
    message.procontent =
      object.procontent !== undefined && object.procontent !== null
        ? FileProperties_RemoteProperties_ProContent.fromPartial(
            object.procontent,
          )
        : undefined;
    return message;
  },
};

function createBaseFileProperties_RemoteProperties_ProContent(): FileProperties_RemoteProperties_ProContent {
  return { downloadIdentifier: '' };
}

export const FileProperties_RemoteProperties_ProContent = {
  encode(
    message: FileProperties_RemoteProperties_ProContent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.downloadIdentifier !== '') {
      writer.uint32(10).string(message.downloadIdentifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FileProperties_RemoteProperties_ProContent {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileProperties_RemoteProperties_ProContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.downloadIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FileProperties_RemoteProperties_ProContent {
    return {
      downloadIdentifier: isSet(object.downloadIdentifier)
        ? globalThis.String(object.downloadIdentifier)
        : '',
    };
  },

  toJSON(message: FileProperties_RemoteProperties_ProContent): unknown {
    const obj: any = {};
    if (message.downloadIdentifier !== '') {
      obj.downloadIdentifier = message.downloadIdentifier;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<FileProperties_RemoteProperties_ProContent>, I>,
  >(base?: I): FileProperties_RemoteProperties_ProContent {
    return FileProperties_RemoteProperties_ProContent.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<FileProperties_RemoteProperties_ProContent>, I>,
  >(object: I): FileProperties_RemoteProperties_ProContent {
    const message = createBaseFileProperties_RemoteProperties_ProContent();
    message.downloadIdentifier = object.downloadIdentifier ?? '';
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
