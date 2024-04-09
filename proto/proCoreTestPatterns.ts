/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { TestPatternDefinition, TestPatternState } from "./testPattern";
import { UUID } from "./uuid";

export const protobufPackage = "rv.data";

export interface TestPatternRequest {
  getDefinitions?: TestPatternRequest_GetDefinitions | undefined;
  setCurrentState?: TestPatternState | undefined;
  getCurrentState?: TestPatternRequest_GetCurrentState | undefined;
  getThumbnail?: TestPatternRequest_GetThumbnail | undefined;
}

export interface TestPatternRequest_GetDefinitions {
}

export interface TestPatternRequest_GetCurrentState {
}

export interface TestPatternRequest_GetThumbnail {
  pattern: TestPatternDefinition | undefined;
  width: number;
  height: number;
}

export interface TestPatternResponse {
  getDefinitions?: TestPatternResponse_GetDefinitions | undefined;
  getCurrentState?: TestPatternState | undefined;
  getThumbnail?: TestPatternResponse_GetThumbnail | undefined;
}

export interface TestPatternResponse_GetDefinitions {
  patterns: TestPatternDefinition[];
}

export interface TestPatternResponse_GetThumbnail {
  pattern: UUID | undefined;
  image: Uint8Array;
}

function createBaseTestPatternRequest(): TestPatternRequest {
  return { getDefinitions: undefined, setCurrentState: undefined, getCurrentState: undefined, getThumbnail: undefined };
}

export const TestPatternRequest = {
  encode(message: TestPatternRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getDefinitions !== undefined) {
      TestPatternRequest_GetDefinitions.encode(message.getDefinitions, writer.uint32(10).fork()).ldelim();
    }
    if (message.setCurrentState !== undefined) {
      TestPatternState.encode(message.setCurrentState, writer.uint32(18).fork()).ldelim();
    }
    if (message.getCurrentState !== undefined) {
      TestPatternRequest_GetCurrentState.encode(message.getCurrentState, writer.uint32(26).fork()).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      TestPatternRequest_GetThumbnail.encode(message.getThumbnail, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getDefinitions = TestPatternRequest_GetDefinitions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.setCurrentState = TestPatternState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getCurrentState = TestPatternRequest_GetCurrentState.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getThumbnail = TestPatternRequest_GetThumbnail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternRequest {
    return {
      getDefinitions: isSet(object.getDefinitions)
        ? TestPatternRequest_GetDefinitions.fromJSON(object.getDefinitions)
        : undefined,
      setCurrentState: isSet(object.setCurrentState) ? TestPatternState.fromJSON(object.setCurrentState) : undefined,
      getCurrentState: isSet(object.getCurrentState)
        ? TestPatternRequest_GetCurrentState.fromJSON(object.getCurrentState)
        : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? TestPatternRequest_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: TestPatternRequest): unknown {
    const obj: any = {};
    if (message.getDefinitions !== undefined) {
      obj.getDefinitions = TestPatternRequest_GetDefinitions.toJSON(message.getDefinitions);
    }
    if (message.setCurrentState !== undefined) {
      obj.setCurrentState = TestPatternState.toJSON(message.setCurrentState);
    }
    if (message.getCurrentState !== undefined) {
      obj.getCurrentState = TestPatternRequest_GetCurrentState.toJSON(message.getCurrentState);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = TestPatternRequest_GetThumbnail.toJSON(message.getThumbnail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRequest>, I>>(base?: I): TestPatternRequest {
    return TestPatternRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternRequest>, I>>(object: I): TestPatternRequest {
    const message = createBaseTestPatternRequest();
    message.getDefinitions = (object.getDefinitions !== undefined && object.getDefinitions !== null)
      ? TestPatternRequest_GetDefinitions.fromPartial(object.getDefinitions)
      : undefined;
    message.setCurrentState = (object.setCurrentState !== undefined && object.setCurrentState !== null)
      ? TestPatternState.fromPartial(object.setCurrentState)
      : undefined;
    message.getCurrentState = (object.getCurrentState !== undefined && object.getCurrentState !== null)
      ? TestPatternRequest_GetCurrentState.fromPartial(object.getCurrentState)
      : undefined;
    message.getThumbnail = (object.getThumbnail !== undefined && object.getThumbnail !== null)
      ? TestPatternRequest_GetThumbnail.fromPartial(object.getThumbnail)
      : undefined;
    return message;
  },
};

function createBaseTestPatternRequest_GetDefinitions(): TestPatternRequest_GetDefinitions {
  return {};
}

export const TestPatternRequest_GetDefinitions = {
  encode(_: TestPatternRequest_GetDefinitions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternRequest_GetDefinitions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRequest_GetDefinitions();
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

  fromJSON(_: any): TestPatternRequest_GetDefinitions {
    return {};
  },

  toJSON(_: TestPatternRequest_GetDefinitions): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRequest_GetDefinitions>, I>>(
    base?: I,
  ): TestPatternRequest_GetDefinitions {
    return TestPatternRequest_GetDefinitions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternRequest_GetDefinitions>, I>>(
    _: I,
  ): TestPatternRequest_GetDefinitions {
    const message = createBaseTestPatternRequest_GetDefinitions();
    return message;
  },
};

function createBaseTestPatternRequest_GetCurrentState(): TestPatternRequest_GetCurrentState {
  return {};
}

export const TestPatternRequest_GetCurrentState = {
  encode(_: TestPatternRequest_GetCurrentState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternRequest_GetCurrentState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRequest_GetCurrentState();
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

  fromJSON(_: any): TestPatternRequest_GetCurrentState {
    return {};
  },

  toJSON(_: TestPatternRequest_GetCurrentState): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRequest_GetCurrentState>, I>>(
    base?: I,
  ): TestPatternRequest_GetCurrentState {
    return TestPatternRequest_GetCurrentState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternRequest_GetCurrentState>, I>>(
    _: I,
  ): TestPatternRequest_GetCurrentState {
    const message = createBaseTestPatternRequest_GetCurrentState();
    return message;
  },
};

function createBaseTestPatternRequest_GetThumbnail(): TestPatternRequest_GetThumbnail {
  return { pattern: undefined, width: 0, height: 0 };
}

export const TestPatternRequest_GetThumbnail = {
  encode(message: TestPatternRequest_GetThumbnail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pattern !== undefined) {
      TestPatternDefinition.encode(message.pattern, writer.uint32(10).fork()).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(16).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(24).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternRequest_GetThumbnail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternRequest_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pattern = TestPatternDefinition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.height = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternRequest_GetThumbnail {
    return {
      pattern: isSet(object.pattern) ? TestPatternDefinition.fromJSON(object.pattern) : undefined,
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: TestPatternRequest_GetThumbnail): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = TestPatternDefinition.toJSON(message.pattern);
    }
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternRequest_GetThumbnail>, I>>(base?: I): TestPatternRequest_GetThumbnail {
    return TestPatternRequest_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternRequest_GetThumbnail>, I>>(
    object: I,
  ): TestPatternRequest_GetThumbnail {
    const message = createBaseTestPatternRequest_GetThumbnail();
    message.pattern = (object.pattern !== undefined && object.pattern !== null)
      ? TestPatternDefinition.fromPartial(object.pattern)
      : undefined;
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseTestPatternResponse(): TestPatternResponse {
  return { getDefinitions: undefined, getCurrentState: undefined, getThumbnail: undefined };
}

export const TestPatternResponse = {
  encode(message: TestPatternResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.getDefinitions !== undefined) {
      TestPatternResponse_GetDefinitions.encode(message.getDefinitions, writer.uint32(10).fork()).ldelim();
    }
    if (message.getCurrentState !== undefined) {
      TestPatternState.encode(message.getCurrentState, writer.uint32(18).fork()).ldelim();
    }
    if (message.getThumbnail !== undefined) {
      TestPatternResponse_GetThumbnail.encode(message.getThumbnail, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.getDefinitions = TestPatternResponse_GetDefinitions.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getCurrentState = TestPatternState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getThumbnail = TestPatternResponse_GetThumbnail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternResponse {
    return {
      getDefinitions: isSet(object.getDefinitions)
        ? TestPatternResponse_GetDefinitions.fromJSON(object.getDefinitions)
        : undefined,
      getCurrentState: isSet(object.getCurrentState) ? TestPatternState.fromJSON(object.getCurrentState) : undefined,
      getThumbnail: isSet(object.getThumbnail)
        ? TestPatternResponse_GetThumbnail.fromJSON(object.getThumbnail)
        : undefined,
    };
  },

  toJSON(message: TestPatternResponse): unknown {
    const obj: any = {};
    if (message.getDefinitions !== undefined) {
      obj.getDefinitions = TestPatternResponse_GetDefinitions.toJSON(message.getDefinitions);
    }
    if (message.getCurrentState !== undefined) {
      obj.getCurrentState = TestPatternState.toJSON(message.getCurrentState);
    }
    if (message.getThumbnail !== undefined) {
      obj.getThumbnail = TestPatternResponse_GetThumbnail.toJSON(message.getThumbnail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternResponse>, I>>(base?: I): TestPatternResponse {
    return TestPatternResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternResponse>, I>>(object: I): TestPatternResponse {
    const message = createBaseTestPatternResponse();
    message.getDefinitions = (object.getDefinitions !== undefined && object.getDefinitions !== null)
      ? TestPatternResponse_GetDefinitions.fromPartial(object.getDefinitions)
      : undefined;
    message.getCurrentState = (object.getCurrentState !== undefined && object.getCurrentState !== null)
      ? TestPatternState.fromPartial(object.getCurrentState)
      : undefined;
    message.getThumbnail = (object.getThumbnail !== undefined && object.getThumbnail !== null)
      ? TestPatternResponse_GetThumbnail.fromPartial(object.getThumbnail)
      : undefined;
    return message;
  },
};

function createBaseTestPatternResponse_GetDefinitions(): TestPatternResponse_GetDefinitions {
  return { patterns: [] };
}

export const TestPatternResponse_GetDefinitions = {
  encode(message: TestPatternResponse_GetDefinitions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.patterns) {
      TestPatternDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternResponse_GetDefinitions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternResponse_GetDefinitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.patterns.push(TestPatternDefinition.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternResponse_GetDefinitions {
    return {
      patterns: globalThis.Array.isArray(object?.patterns)
        ? object.patterns.map((e: any) => TestPatternDefinition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TestPatternResponse_GetDefinitions): unknown {
    const obj: any = {};
    if (message.patterns?.length) {
      obj.patterns = message.patterns.map((e) => TestPatternDefinition.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternResponse_GetDefinitions>, I>>(
    base?: I,
  ): TestPatternResponse_GetDefinitions {
    return TestPatternResponse_GetDefinitions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternResponse_GetDefinitions>, I>>(
    object: I,
  ): TestPatternResponse_GetDefinitions {
    const message = createBaseTestPatternResponse_GetDefinitions();
    message.patterns = object.patterns?.map((e) => TestPatternDefinition.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTestPatternResponse_GetThumbnail(): TestPatternResponse_GetThumbnail {
  return { pattern: undefined, image: new Uint8Array(0) };
}

export const TestPatternResponse_GetThumbnail = {
  encode(message: TestPatternResponse_GetThumbnail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pattern !== undefined) {
      UUID.encode(message.pattern, writer.uint32(10).fork()).ldelim();
    }
    if (message.image.length !== 0) {
      writer.uint32(18).bytes(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestPatternResponse_GetThumbnail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestPatternResponse_GetThumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pattern = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.image = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestPatternResponse_GetThumbnail {
    return {
      pattern: isSet(object.pattern) ? UUID.fromJSON(object.pattern) : undefined,
      image: isSet(object.image) ? bytesFromBase64(object.image) : new Uint8Array(0),
    };
  },

  toJSON(message: TestPatternResponse_GetThumbnail): unknown {
    const obj: any = {};
    if (message.pattern !== undefined) {
      obj.pattern = UUID.toJSON(message.pattern);
    }
    if (message.image.length !== 0) {
      obj.image = base64FromBytes(message.image);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TestPatternResponse_GetThumbnail>, I>>(
    base?: I,
  ): TestPatternResponse_GetThumbnail {
    return TestPatternResponse_GetThumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TestPatternResponse_GetThumbnail>, I>>(
    object: I,
  ): TestPatternResponse_GetThumbnail {
    const message = createBaseTestPatternResponse_GetThumbnail();
    message.pattern = (object.pattern !== undefined && object.pattern !== null)
      ? UUID.fromPartial(object.pattern)
      : undefined;
    message.image = object.image ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
