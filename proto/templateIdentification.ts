/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface TemplateIdentification {
  uuid: UUID | undefined;
  name: string;
  slideUuid: UUID | undefined;
  slideName: string;
  slideIndex: number;
}

function createBaseTemplateIdentification(): TemplateIdentification {
  return {
    uuid: undefined,
    name: '',
    slideUuid: undefined,
    slideName: '',
    slideIndex: 0,
  };
}

export const TemplateIdentification = {
  encode(
    message: TemplateIdentification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.slideUuid !== undefined) {
      UUID.encode(message.slideUuid, writer.uint32(26).fork()).ldelim();
    }
    if (message.slideName !== '') {
      writer.uint32(34).string(message.slideName);
    }
    if (message.slideIndex !== 0) {
      writer.uint32(40).uint32(message.slideIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): TemplateIdentification {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTemplateIdentification();
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

          message.slideUuid = UUID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.slideName = reader.string();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.slideIndex = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TemplateIdentification {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      slideUuid: isSet(object.slideUuid)
        ? UUID.fromJSON(object.slideUuid)
        : undefined,
      slideName: isSet(object.slideName) ? String(object.slideName) : '',
      slideIndex: isSet(object.slideIndex) ? Number(object.slideIndex) : 0,
    };
  },

  toJSON(message: TemplateIdentification): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.slideUuid !== undefined &&
      (obj.slideUuid = message.slideUuid
        ? UUID.toJSON(message.slideUuid)
        : undefined);
    message.slideName !== undefined && (obj.slideName = message.slideName);
    message.slideIndex !== undefined &&
      (obj.slideIndex = Math.round(message.slideIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<TemplateIdentification>, I>>(
    base?: I,
  ): TemplateIdentification {
    return TemplateIdentification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TemplateIdentification>, I>>(
    object: I,
  ): TemplateIdentification {
    const message = createBaseTemplateIdentification();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.slideUuid =
      object.slideUuid !== undefined && object.slideUuid !== null
        ? UUID.fromPartial(object.slideUuid)
        : undefined;
    message.slideName = object.slideName ?? '';
    message.slideIndex = object.slideIndex ?? 0;
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
