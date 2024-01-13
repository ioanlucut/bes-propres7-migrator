/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Color } from './proApiV1Color';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1GroupsRequest {
  groupsRequest?: APIV1GroupsRequest_GroupsRequest | undefined;
  triggerGroup?: APIV1GroupsRequest_TriggerGroup | undefined;
}

export interface APIV1GroupsRequest_GroupsRequest {}

export interface APIV1GroupsRequest_TriggerGroup {
  id: string;
}

export interface APIV1GroupsResponse {
  groups?: APIV1GroupsResponse_GroupsRequest | undefined;
  triggerGroup?: APIV1GroupsResponse_TriggerGroup | undefined;
}

export interface APIV1GroupsResponse_GroupsRequest {
  groups: APIV1GroupsResponse_GroupsRequest_Group[];
}

export interface APIV1GroupsResponse_GroupsRequest_Group {
  id: APIV1Identifier | undefined;
  color: APIV1Color | undefined;
}

export interface APIV1GroupsResponse_TriggerGroup {}

function createBaseAPIV1GroupsRequest(): APIV1GroupsRequest {
  return { groupsRequest: undefined, triggerGroup: undefined };
}

export const APIV1GroupsRequest = {
  encode(
    message: APIV1GroupsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupsRequest !== undefined) {
      APIV1GroupsRequest_GroupsRequest.encode(
        message.groupsRequest,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.triggerGroup !== undefined) {
      APIV1GroupsRequest_TriggerGroup.encode(
        message.triggerGroup,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupsRequest = APIV1GroupsRequest_GroupsRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.triggerGroup = APIV1GroupsRequest_TriggerGroup.decode(
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

  fromJSON(object: any): APIV1GroupsRequest {
    return {
      groupsRequest: isSet(object.groupsRequest)
        ? APIV1GroupsRequest_GroupsRequest.fromJSON(object.groupsRequest)
        : undefined,
      triggerGroup: isSet(object.triggerGroup)
        ? APIV1GroupsRequest_TriggerGroup.fromJSON(object.triggerGroup)
        : undefined,
    };
  },

  toJSON(message: APIV1GroupsRequest): unknown {
    const obj: any = {};
    if (message.groupsRequest !== undefined) {
      obj.groupsRequest = APIV1GroupsRequest_GroupsRequest.toJSON(
        message.groupsRequest,
      );
    }
    if (message.triggerGroup !== undefined) {
      obj.triggerGroup = APIV1GroupsRequest_TriggerGroup.toJSON(
        message.triggerGroup,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsRequest>, I>>(
    base?: I,
  ): APIV1GroupsRequest {
    return APIV1GroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupsRequest>, I>>(
    object: I,
  ): APIV1GroupsRequest {
    const message = createBaseAPIV1GroupsRequest();
    message.groupsRequest =
      object.groupsRequest !== undefined && object.groupsRequest !== null
        ? APIV1GroupsRequest_GroupsRequest.fromPartial(object.groupsRequest)
        : undefined;
    message.triggerGroup =
      object.triggerGroup !== undefined && object.triggerGroup !== null
        ? APIV1GroupsRequest_TriggerGroup.fromPartial(object.triggerGroup)
        : undefined;
    return message;
  },
};

function createBaseAPIV1GroupsRequest_GroupsRequest(): APIV1GroupsRequest_GroupsRequest {
  return {};
}

export const APIV1GroupsRequest_GroupsRequest = {
  encode(
    _: APIV1GroupsRequest_GroupsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupsRequest_GroupsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsRequest_GroupsRequest();
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

  fromJSON(_: any): APIV1GroupsRequest_GroupsRequest {
    return {};
  },

  toJSON(_: APIV1GroupsRequest_GroupsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsRequest_GroupsRequest>, I>>(
    base?: I,
  ): APIV1GroupsRequest_GroupsRequest {
    return APIV1GroupsRequest_GroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1GroupsRequest_GroupsRequest>, I>,
  >(_: I): APIV1GroupsRequest_GroupsRequest {
    const message = createBaseAPIV1GroupsRequest_GroupsRequest();
    return message;
  },
};

function createBaseAPIV1GroupsRequest_TriggerGroup(): APIV1GroupsRequest_TriggerGroup {
  return { id: '' };
}

export const APIV1GroupsRequest_TriggerGroup = {
  encode(
    message: APIV1GroupsRequest_TriggerGroup,
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
  ): APIV1GroupsRequest_TriggerGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsRequest_TriggerGroup();
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

  fromJSON(object: any): APIV1GroupsRequest_TriggerGroup {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1GroupsRequest_TriggerGroup): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsRequest_TriggerGroup>, I>>(
    base?: I,
  ): APIV1GroupsRequest_TriggerGroup {
    return APIV1GroupsRequest_TriggerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupsRequest_TriggerGroup>, I>>(
    object: I,
  ): APIV1GroupsRequest_TriggerGroup {
    const message = createBaseAPIV1GroupsRequest_TriggerGroup();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1GroupsResponse(): APIV1GroupsResponse {
  return { groups: undefined, triggerGroup: undefined };
}

export const APIV1GroupsResponse = {
  encode(
    message: APIV1GroupsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groups !== undefined) {
      APIV1GroupsResponse_GroupsRequest.encode(
        message.groups,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.triggerGroup !== undefined) {
      APIV1GroupsResponse_TriggerGroup.encode(
        message.triggerGroup,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1GroupsResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups = APIV1GroupsResponse_GroupsRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.triggerGroup = APIV1GroupsResponse_TriggerGroup.decode(
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

  fromJSON(object: any): APIV1GroupsResponse {
    return {
      groups: isSet(object.groups)
        ? APIV1GroupsResponse_GroupsRequest.fromJSON(object.groups)
        : undefined,
      triggerGroup: isSet(object.triggerGroup)
        ? APIV1GroupsResponse_TriggerGroup.fromJSON(object.triggerGroup)
        : undefined,
    };
  },

  toJSON(message: APIV1GroupsResponse): unknown {
    const obj: any = {};
    if (message.groups !== undefined) {
      obj.groups = APIV1GroupsResponse_GroupsRequest.toJSON(message.groups);
    }
    if (message.triggerGroup !== undefined) {
      obj.triggerGroup = APIV1GroupsResponse_TriggerGroup.toJSON(
        message.triggerGroup,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsResponse>, I>>(
    base?: I,
  ): APIV1GroupsResponse {
    return APIV1GroupsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1GroupsResponse>, I>>(
    object: I,
  ): APIV1GroupsResponse {
    const message = createBaseAPIV1GroupsResponse();
    message.groups =
      object.groups !== undefined && object.groups !== null
        ? APIV1GroupsResponse_GroupsRequest.fromPartial(object.groups)
        : undefined;
    message.triggerGroup =
      object.triggerGroup !== undefined && object.triggerGroup !== null
        ? APIV1GroupsResponse_TriggerGroup.fromPartial(object.triggerGroup)
        : undefined;
    return message;
  },
};

function createBaseAPIV1GroupsResponse_GroupsRequest(): APIV1GroupsResponse_GroupsRequest {
  return { groups: [] };
}

export const APIV1GroupsResponse_GroupsRequest = {
  encode(
    message: APIV1GroupsResponse_GroupsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      APIV1GroupsResponse_GroupsRequest_Group.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupsResponse_GroupsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsResponse_GroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(
            APIV1GroupsResponse_GroupsRequest_Group.decode(
              reader,
              reader.uint32(),
            ),
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

  fromJSON(object: any): APIV1GroupsResponse_GroupsRequest {
    return {
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) =>
            APIV1GroupsResponse_GroupsRequest_Group.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: APIV1GroupsResponse_GroupsRequest): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) =>
        APIV1GroupsResponse_GroupsRequest_Group.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsResponse_GroupsRequest>, I>>(
    base?: I,
  ): APIV1GroupsResponse_GroupsRequest {
    return APIV1GroupsResponse_GroupsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1GroupsResponse_GroupsRequest>, I>,
  >(object: I): APIV1GroupsResponse_GroupsRequest {
    const message = createBaseAPIV1GroupsResponse_GroupsRequest();
    message.groups =
      object.groups?.map((e) =>
        APIV1GroupsResponse_GroupsRequest_Group.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseAPIV1GroupsResponse_GroupsRequest_Group(): APIV1GroupsResponse_GroupsRequest_Group {
  return { id: undefined, color: undefined };
}

export const APIV1GroupsResponse_GroupsRequest_Group = {
  encode(
    message: APIV1GroupsResponse_GroupsRequest_Group,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.color !== undefined) {
      APIV1Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupsResponse_GroupsRequest_Group {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsResponse_GroupsRequest_Group();
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

          message.color = APIV1Color.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1GroupsResponse_GroupsRequest_Group {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      color: isSet(object.color)
        ? APIV1Color.fromJSON(object.color)
        : undefined,
    };
  },

  toJSON(message: APIV1GroupsResponse_GroupsRequest_Group): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.color !== undefined) {
      obj.color = APIV1Color.toJSON(message.color);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1GroupsResponse_GroupsRequest_Group>, I>,
  >(base?: I): APIV1GroupsResponse_GroupsRequest_Group {
    return APIV1GroupsResponse_GroupsRequest_Group.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1GroupsResponse_GroupsRequest_Group>, I>,
  >(object: I): APIV1GroupsResponse_GroupsRequest_Group {
    const message = createBaseAPIV1GroupsResponse_GroupsRequest_Group();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.color =
      object.color !== undefined && object.color !== null
        ? APIV1Color.fromPartial(object.color)
        : undefined;
    return message;
  },
};

function createBaseAPIV1GroupsResponse_TriggerGroup(): APIV1GroupsResponse_TriggerGroup {
  return {};
}

export const APIV1GroupsResponse_TriggerGroup = {
  encode(
    _: APIV1GroupsResponse_TriggerGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1GroupsResponse_TriggerGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1GroupsResponse_TriggerGroup();
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

  fromJSON(_: any): APIV1GroupsResponse_TriggerGroup {
    return {};
  },

  toJSON(_: APIV1GroupsResponse_TriggerGroup): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1GroupsResponse_TriggerGroup>, I>>(
    base?: I,
  ): APIV1GroupsResponse_TriggerGroup {
    return APIV1GroupsResponse_TriggerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1GroupsResponse_TriggerGroup>, I>,
  >(_: I): APIV1GroupsResponse_TriggerGroup {
    const message = createBaseAPIV1GroupsResponse_TriggerGroup();
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
