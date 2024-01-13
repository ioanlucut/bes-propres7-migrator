/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Color } from './color';
import { EdgeBlend, Screen } from './screens';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface ProPresenterScreen {
  name: string;
  screenType: ProPresenterScreen_ScreenType;
  backgroundColor: Color | undefined;
  uuid: UUID | undefined;
  backgroundColorEnabled: boolean;
  arrangementSingle?: ProPresenterScreen_SingleArrangement | undefined;
  arrangementCombined?: ProPresenterScreen_CombinedArrangement | undefined;
  arrangementEdgeBlend?: ProPresenterScreen_EdgeBlendArrangement | undefined;
}

export enum ProPresenterScreen_ScreenType {
  SCREEN_TYPE_UNKNOWN = 0,
  SCREEN_TYPE_AUDIENCE = 1,
  SCREEN_TYPE_STAGE = 2,
  UNRECOGNIZED = -1,
}

export function proPresenterScreen_ScreenTypeFromJSON(
  object: any,
): ProPresenterScreen_ScreenType {
  switch (object) {
    case 0:
    case 'SCREEN_TYPE_UNKNOWN':
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_UNKNOWN;
    case 1:
    case 'SCREEN_TYPE_AUDIENCE':
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_AUDIENCE;
    case 2:
    case 'SCREEN_TYPE_STAGE':
      return ProPresenterScreen_ScreenType.SCREEN_TYPE_STAGE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ProPresenterScreen_ScreenType.UNRECOGNIZED;
  }
}

export function proPresenterScreen_ScreenTypeToJSON(
  object: ProPresenterScreen_ScreenType,
): string {
  switch (object) {
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_UNKNOWN:
      return 'SCREEN_TYPE_UNKNOWN';
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_AUDIENCE:
      return 'SCREEN_TYPE_AUDIENCE';
    case ProPresenterScreen_ScreenType.SCREEN_TYPE_STAGE:
      return 'SCREEN_TYPE_STAGE';
    case ProPresenterScreen_ScreenType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ProPresenterScreen_SingleArrangement {
  screens: Screen[];
}

export interface ProPresenterScreen_CombinedArrangement {
  screens: Screen[];
  rows: number;
  columns: number;
}

export interface ProPresenterScreen_EdgeBlendArrangement {
  screenCount: number;
  screens: Screen[];
  edgeBlends: EdgeBlend[];
}

function createBaseProPresenterScreen(): ProPresenterScreen {
  return {
    name: '',
    screenType: 0,
    backgroundColor: undefined,
    uuid: undefined,
    backgroundColorEnabled: false,
    arrangementSingle: undefined,
    arrangementCombined: undefined,
    arrangementEdgeBlend: undefined,
  };
}

export const ProPresenterScreen = {
  encode(
    message: ProPresenterScreen,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.screenType !== 0) {
      writer.uint32(16).int32(message.screenType);
    }
    if (message.backgroundColor !== undefined) {
      Color.encode(message.backgroundColor, writer.uint32(50).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(58).fork()).ldelim();
    }
    if (message.backgroundColorEnabled === true) {
      writer.uint32(64).bool(message.backgroundColorEnabled);
    }
    if (message.arrangementSingle !== undefined) {
      ProPresenterScreen_SingleArrangement.encode(
        message.arrangementSingle,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.arrangementCombined !== undefined) {
      ProPresenterScreen_CombinedArrangement.encode(
        message.arrangementCombined,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.arrangementEdgeBlend !== undefined) {
      ProPresenterScreen_EdgeBlendArrangement.encode(
        message.arrangementEdgeBlend,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterScreen {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.screenType = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.backgroundColor = Color.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.backgroundColorEnabled = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arrangementSingle =
            ProPresenterScreen_SingleArrangement.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.arrangementCombined =
            ProPresenterScreen_CombinedArrangement.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.arrangementEdgeBlend =
            ProPresenterScreen_EdgeBlendArrangement.decode(
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

  fromJSON(object: any): ProPresenterScreen {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      screenType: isSet(object.screenType)
        ? proPresenterScreen_ScreenTypeFromJSON(object.screenType)
        : 0,
      backgroundColor: isSet(object.backgroundColor)
        ? Color.fromJSON(object.backgroundColor)
        : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      backgroundColorEnabled: isSet(object.backgroundColorEnabled)
        ? globalThis.Boolean(object.backgroundColorEnabled)
        : false,
      arrangementSingle: isSet(object.arrangementSingle)
        ? ProPresenterScreen_SingleArrangement.fromJSON(
            object.arrangementSingle,
          )
        : undefined,
      arrangementCombined: isSet(object.arrangementCombined)
        ? ProPresenterScreen_CombinedArrangement.fromJSON(
            object.arrangementCombined,
          )
        : undefined,
      arrangementEdgeBlend: isSet(object.arrangementEdgeBlend)
        ? ProPresenterScreen_EdgeBlendArrangement.fromJSON(
            object.arrangementEdgeBlend,
          )
        : undefined,
    };
  },

  toJSON(message: ProPresenterScreen): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.screenType !== 0) {
      obj.screenType = proPresenterScreen_ScreenTypeToJSON(message.screenType);
    }
    if (message.backgroundColor !== undefined) {
      obj.backgroundColor = Color.toJSON(message.backgroundColor);
    }
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.backgroundColorEnabled === true) {
      obj.backgroundColorEnabled = message.backgroundColorEnabled;
    }
    if (message.arrangementSingle !== undefined) {
      obj.arrangementSingle = ProPresenterScreen_SingleArrangement.toJSON(
        message.arrangementSingle,
      );
    }
    if (message.arrangementCombined !== undefined) {
      obj.arrangementCombined = ProPresenterScreen_CombinedArrangement.toJSON(
        message.arrangementCombined,
      );
    }
    if (message.arrangementEdgeBlend !== undefined) {
      obj.arrangementEdgeBlend = ProPresenterScreen_EdgeBlendArrangement.toJSON(
        message.arrangementEdgeBlend,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProPresenterScreen>, I>>(
    base?: I,
  ): ProPresenterScreen {
    return ProPresenterScreen.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProPresenterScreen>, I>>(
    object: I,
  ): ProPresenterScreen {
    const message = createBaseProPresenterScreen();
    message.name = object.name ?? '';
    message.screenType = object.screenType ?? 0;
    message.backgroundColor =
      object.backgroundColor !== undefined && object.backgroundColor !== null
        ? Color.fromPartial(object.backgroundColor)
        : undefined;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.backgroundColorEnabled = object.backgroundColorEnabled ?? false;
    message.arrangementSingle =
      object.arrangementSingle !== undefined &&
      object.arrangementSingle !== null
        ? ProPresenterScreen_SingleArrangement.fromPartial(
            object.arrangementSingle,
          )
        : undefined;
    message.arrangementCombined =
      object.arrangementCombined !== undefined &&
      object.arrangementCombined !== null
        ? ProPresenterScreen_CombinedArrangement.fromPartial(
            object.arrangementCombined,
          )
        : undefined;
    message.arrangementEdgeBlend =
      object.arrangementEdgeBlend !== undefined &&
      object.arrangementEdgeBlend !== null
        ? ProPresenterScreen_EdgeBlendArrangement.fromPartial(
            object.arrangementEdgeBlend,
          )
        : undefined;
    return message;
  },
};

function createBaseProPresenterScreen_SingleArrangement(): ProPresenterScreen_SingleArrangement {
  return { screens: [] };
}

export const ProPresenterScreen_SingleArrangement = {
  encode(
    message: ProPresenterScreen_SingleArrangement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProPresenterScreen_SingleArrangement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_SingleArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screens.push(Screen.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_SingleArrangement {
    return {
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => Screen.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProPresenterScreen_SingleArrangement): unknown {
    const obj: any = {};
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => Screen.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProPresenterScreen_SingleArrangement>, I>>(
    base?: I,
  ): ProPresenterScreen_SingleArrangement {
    return ProPresenterScreen_SingleArrangement.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ProPresenterScreen_SingleArrangement>, I>,
  >(object: I): ProPresenterScreen_SingleArrangement {
    const message = createBaseProPresenterScreen_SingleArrangement();
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProPresenterScreen_CombinedArrangement(): ProPresenterScreen_CombinedArrangement {
  return { screens: [], rows: 0, columns: 0 };
}

export const ProPresenterScreen_CombinedArrangement = {
  encode(
    message: ProPresenterScreen_CombinedArrangement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rows !== 0) {
      writer.uint32(16).uint32(message.rows);
    }
    if (message.columns !== 0) {
      writer.uint32(24).uint32(message.columns);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProPresenterScreen_CombinedArrangement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_CombinedArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screens.push(Screen.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.rows = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.columns = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_CombinedArrangement {
    return {
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => Screen.fromJSON(e))
        : [],
      rows: isSet(object.rows) ? globalThis.Number(object.rows) : 0,
      columns: isSet(object.columns) ? globalThis.Number(object.columns) : 0,
    };
  },

  toJSON(message: ProPresenterScreen_CombinedArrangement): unknown {
    const obj: any = {};
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => Screen.toJSON(e));
    }
    if (message.rows !== 0) {
      obj.rows = Math.round(message.rows);
    }
    if (message.columns !== 0) {
      obj.columns = Math.round(message.columns);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProPresenterScreen_CombinedArrangement>, I>,
  >(base?: I): ProPresenterScreen_CombinedArrangement {
    return ProPresenterScreen_CombinedArrangement.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ProPresenterScreen_CombinedArrangement>, I>,
  >(object: I): ProPresenterScreen_CombinedArrangement {
    const message = createBaseProPresenterScreen_CombinedArrangement();
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    message.rows = object.rows ?? 0;
    message.columns = object.columns ?? 0;
    return message;
  },
};

function createBaseProPresenterScreen_EdgeBlendArrangement(): ProPresenterScreen_EdgeBlendArrangement {
  return { screenCount: 0, screens: [], edgeBlends: [] };
}

export const ProPresenterScreen_EdgeBlendArrangement = {
  encode(
    message: ProPresenterScreen_EdgeBlendArrangement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenCount !== 0) {
      writer.uint32(8).uint32(message.screenCount);
    }
    for (const v of message.screens) {
      Screen.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.edgeBlends) {
      EdgeBlend.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProPresenterScreen_EdgeBlendArrangement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterScreen_EdgeBlendArrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.screenCount = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screens.push(Screen.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.edgeBlends.push(EdgeBlend.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProPresenterScreen_EdgeBlendArrangement {
    return {
      screenCount: isSet(object.screenCount)
        ? globalThis.Number(object.screenCount)
        : 0,
      screens: globalThis.Array.isArray(object?.screens)
        ? object.screens.map((e: any) => Screen.fromJSON(e))
        : [],
      edgeBlends: globalThis.Array.isArray(object?.edgeBlends)
        ? object.edgeBlends.map((e: any) => EdgeBlend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProPresenterScreen_EdgeBlendArrangement): unknown {
    const obj: any = {};
    if (message.screenCount !== 0) {
      obj.screenCount = Math.round(message.screenCount);
    }
    if (message.screens?.length) {
      obj.screens = message.screens.map((e) => Screen.toJSON(e));
    }
    if (message.edgeBlends?.length) {
      obj.edgeBlends = message.edgeBlends.map((e) => EdgeBlend.toJSON(e));
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProPresenterScreen_EdgeBlendArrangement>, I>,
  >(base?: I): ProPresenterScreen_EdgeBlendArrangement {
    return ProPresenterScreen_EdgeBlendArrangement.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<ProPresenterScreen_EdgeBlendArrangement>, I>,
  >(object: I): ProPresenterScreen_EdgeBlendArrangement {
    const message = createBaseProPresenterScreen_EdgeBlendArrangement();
    message.screenCount = object.screenCount ?? 0;
    message.screens = object.screens?.map((e) => Screen.fromPartial(e)) || [];
    message.edgeBlends =
      object.edgeBlends?.map((e) => EdgeBlend.fromPartial(e)) || [];
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
