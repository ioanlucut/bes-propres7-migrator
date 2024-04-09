/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Color } from './proApiV1Color';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1Macro {
  id: APIV1Identifier | undefined;
  color: APIV1Color | undefined;
  imageType: string;
}

export interface APIV1MacroCollection {
  id: APIV1Identifier | undefined;
  macros: APIV1Macro[];
}

export interface APIV1MacroRequest {
  macros?: APIV1MacroRequest_Macros | undefined;
  getMacro?: APIV1MacroRequest_GetMacro | undefined;
  putMacro?: APIV1MacroRequest_PutMacro | undefined;
  deleteMacro?: APIV1MacroRequest_DeleteMacro | undefined;
  triggerMacro?: APIV1MacroRequest_TriggerMacro | undefined;
  macroCollections?: APIV1MacroRequest_MacroCollections | undefined;
  getMacroCollection?: APIV1MacroRequest_GetMacroCollection | undefined;
  postMacroCollections?: APIV1MacroRequest_PostMacroCollections | undefined;
  putMacroCollection?: APIV1MacroRequest_PutMacroCollection | undefined;
  deleteMacroCollection?: APIV1MacroRequest_DeleteMacroCollection | undefined;
  macroIcon?: APIV1MacroRequest_MacroIcon | undefined;
  putMacroIcon?: APIV1MacroRequest_PutMacroIcon | undefined;
}

export interface APIV1MacroRequest_Macros {}

export interface APIV1MacroRequest_GetMacro {
  id: string;
}

export interface APIV1MacroRequest_PutMacro {
  id: string;
  nameChange: string;
  colorChange: APIV1Color | undefined;
  imageTypeChange: string;
}

export interface APIV1MacroRequest_DeleteMacro {
  id: string;
}

export interface APIV1MacroRequest_TriggerMacro {
  id: string;
}

export interface APIV1MacroRequest_MacroCollections {}

export interface APIV1MacroRequest_GetMacroCollection {
  id: string;
}

export interface APIV1MacroRequest_PostMacroCollections {
  name: string;
}

export interface APIV1MacroRequest_PutMacroCollection {
  id: string;
  changes: APIV1MacroCollection | undefined;
}

export interface APIV1MacroRequest_DeleteMacroCollection {
  id: string;
}

export interface APIV1MacroRequest_MacroIcon {
  id: string;
}

export interface APIV1MacroRequest_PutMacroIcon {
  id: string;
  contentType: string;
  icon: Uint8Array;
}

export interface APIV1MacroResponse {
  macros?: APIV1MacroResponse_Macros | undefined;
  getMacro?: APIV1MacroResponse_GetMacro | undefined;
  putMacro?: APIV1MacroResponse_PutMacro | undefined;
  deleteMacro?: APIV1MacroResponse_DeleteMacro | undefined;
  triggerMacro?: APIV1MacroResponse_TriggerMacro | undefined;
  macroCollections?: APIV1MacroResponse_MacroCollections | undefined;
  getMacroCollection?: APIV1MacroResponse_GetMacroCollection | undefined;
  postMacroCollections?: APIV1MacroResponse_PostMacroCollections | undefined;
  putMacroCollection?: APIV1MacroResponse_PutMacroCollection | undefined;
  deleteMacroCollection?: APIV1MacroResponse_DeleteMacroCollection | undefined;
  macroIcon?: APIV1MacroResponse_MacroIcon | undefined;
  putMacroIcon?: APIV1MacroResponse_PutMacroIcon | undefined;
}

export interface APIV1MacroResponse_Macros {
  macros: APIV1Macro[];
}

export interface APIV1MacroResponse_GetMacro {
  macro: APIV1Macro | undefined;
}

export interface APIV1MacroResponse_PutMacro {
  macro: APIV1Macro | undefined;
}

export interface APIV1MacroResponse_DeleteMacro {}

export interface APIV1MacroResponse_TriggerMacro {}

export interface APIV1MacroResponse_MacroCollections {
  macroCollections: APIV1MacroResponse_MacroCollections_Collections | undefined;
}

export interface APIV1MacroResponse_MacroCollections_Collections {
  collections: APIV1MacroCollection[];
}

export interface APIV1MacroResponse_GetMacroCollection {
  macroCollection: APIV1MacroCollection | undefined;
}

export interface APIV1MacroResponse_PostMacroCollections {
  macroCollection: APIV1MacroCollection | undefined;
}

export interface APIV1MacroResponse_PutMacroCollection {
  macroCollection: APIV1MacroCollection | undefined;
}

export interface APIV1MacroResponse_DeleteMacroCollection {}

export interface APIV1MacroResponse_MacroIcon {
  contentType: string;
  icon: Uint8Array;
}

export interface APIV1MacroResponse_PutMacroIcon {}

function createBaseAPIV1Macro(): APIV1Macro {
  return { id: undefined, color: undefined, imageType: '' };
}

export const APIV1Macro = {
  encode(
    message: APIV1Macro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.color !== undefined) {
      APIV1Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    if (message.imageType !== '') {
      writer.uint32(26).string(message.imageType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Macro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Macro();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.imageType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Macro {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      color: isSet(object.color)
        ? APIV1Color.fromJSON(object.color)
        : undefined,
      imageType: isSet(object.imageType)
        ? globalThis.String(object.imageType)
        : '',
    };
  },

  toJSON(message: APIV1Macro): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.color !== undefined) {
      obj.color = APIV1Color.toJSON(message.color);
    }
    if (message.imageType !== '') {
      obj.imageType = message.imageType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Macro>, I>>(base?: I): APIV1Macro {
    return APIV1Macro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Macro>, I>>(
    object: I,
  ): APIV1Macro {
    const message = createBaseAPIV1Macro();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.color =
      object.color !== undefined && object.color !== null
        ? APIV1Color.fromPartial(object.color)
        : undefined;
    message.imageType = object.imageType ?? '';
    return message;
  },
};

function createBaseAPIV1MacroCollection(): APIV1MacroCollection {
  return { id: undefined, macros: [] };
}

export const APIV1MacroCollection = {
  encode(
    message: APIV1MacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.macros) {
      APIV1Macro.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroCollection();
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

          message.macros.push(APIV1Macro.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroCollection {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      macros: globalThis.Array.isArray(object?.macros)
        ? object.macros.map((e: any) => APIV1Macro.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MacroCollection): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.macros?.length) {
      obj.macros = message.macros.map((e) => APIV1Macro.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroCollection>, I>>(
    base?: I,
  ): APIV1MacroCollection {
    return APIV1MacroCollection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroCollection>, I>>(
    object: I,
  ): APIV1MacroCollection {
    const message = createBaseAPIV1MacroCollection();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.macros = object.macros?.map((e) => APIV1Macro.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MacroRequest(): APIV1MacroRequest {
  return {
    macros: undefined,
    getMacro: undefined,
    putMacro: undefined,
    deleteMacro: undefined,
    triggerMacro: undefined,
    macroCollections: undefined,
    getMacroCollection: undefined,
    postMacroCollections: undefined,
    putMacroCollection: undefined,
    deleteMacroCollection: undefined,
    macroIcon: undefined,
    putMacroIcon: undefined,
  };
}

export const APIV1MacroRequest = {
  encode(
    message: APIV1MacroRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macros !== undefined) {
      APIV1MacroRequest_Macros.encode(
        message.macros,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getMacro !== undefined) {
      APIV1MacroRequest_GetMacro.encode(
        message.getMacro,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.putMacro !== undefined) {
      APIV1MacroRequest_PutMacro.encode(
        message.putMacro,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.deleteMacro !== undefined) {
      APIV1MacroRequest_DeleteMacro.encode(
        message.deleteMacro,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.triggerMacro !== undefined) {
      APIV1MacroRequest_TriggerMacro.encode(
        message.triggerMacro,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.macroCollections !== undefined) {
      APIV1MacroRequest_MacroCollections.encode(
        message.macroCollections,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getMacroCollection !== undefined) {
      APIV1MacroRequest_GetMacroCollection.encode(
        message.getMacroCollection,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.postMacroCollections !== undefined) {
      APIV1MacroRequest_PostMacroCollections.encode(
        message.postMacroCollections,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.putMacroCollection !== undefined) {
      APIV1MacroRequest_PutMacroCollection.encode(
        message.putMacroCollection,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.deleteMacroCollection !== undefined) {
      APIV1MacroRequest_DeleteMacroCollection.encode(
        message.deleteMacroCollection,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.macroIcon !== undefined) {
      APIV1MacroRequest_MacroIcon.encode(
        message.macroIcon,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.putMacroIcon !== undefined) {
      APIV1MacroRequest_PutMacroIcon.encode(
        message.putMacroIcon,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MacroRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macros = APIV1MacroRequest_Macros.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getMacro = APIV1MacroRequest_GetMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.putMacro = APIV1MacroRequest_PutMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deleteMacro = APIV1MacroRequest_DeleteMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.triggerMacro = APIV1MacroRequest_TriggerMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.macroCollections = APIV1MacroRequest_MacroCollections.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getMacroCollection =
            APIV1MacroRequest_GetMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postMacroCollections =
            APIV1MacroRequest_PostMacroCollections.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.putMacroCollection =
            APIV1MacroRequest_PutMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.deleteMacroCollection =
            APIV1MacroRequest_DeleteMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.macroIcon = APIV1MacroRequest_MacroIcon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.putMacroIcon = APIV1MacroRequest_PutMacroIcon.decode(
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

  fromJSON(object: any): APIV1MacroRequest {
    return {
      macros: isSet(object.macros)
        ? APIV1MacroRequest_Macros.fromJSON(object.macros)
        : undefined,
      getMacro: isSet(object.getMacro)
        ? APIV1MacroRequest_GetMacro.fromJSON(object.getMacro)
        : undefined,
      putMacro: isSet(object.putMacro)
        ? APIV1MacroRequest_PutMacro.fromJSON(object.putMacro)
        : undefined,
      deleteMacro: isSet(object.deleteMacro)
        ? APIV1MacroRequest_DeleteMacro.fromJSON(object.deleteMacro)
        : undefined,
      triggerMacro: isSet(object.triggerMacro)
        ? APIV1MacroRequest_TriggerMacro.fromJSON(object.triggerMacro)
        : undefined,
      macroCollections: isSet(object.macroCollections)
        ? APIV1MacroRequest_MacroCollections.fromJSON(object.macroCollections)
        : undefined,
      getMacroCollection: isSet(object.getMacroCollection)
        ? APIV1MacroRequest_GetMacroCollection.fromJSON(
            object.getMacroCollection,
          )
        : undefined,
      postMacroCollections: isSet(object.postMacroCollections)
        ? APIV1MacroRequest_PostMacroCollections.fromJSON(
            object.postMacroCollections,
          )
        : undefined,
      putMacroCollection: isSet(object.putMacroCollection)
        ? APIV1MacroRequest_PutMacroCollection.fromJSON(
            object.putMacroCollection,
          )
        : undefined,
      deleteMacroCollection: isSet(object.deleteMacroCollection)
        ? APIV1MacroRequest_DeleteMacroCollection.fromJSON(
            object.deleteMacroCollection,
          )
        : undefined,
      macroIcon: isSet(object.macroIcon)
        ? APIV1MacroRequest_MacroIcon.fromJSON(object.macroIcon)
        : undefined,
      putMacroIcon: isSet(object.putMacroIcon)
        ? APIV1MacroRequest_PutMacroIcon.fromJSON(object.putMacroIcon)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroRequest): unknown {
    const obj: any = {};
    if (message.macros !== undefined) {
      obj.macros = APIV1MacroRequest_Macros.toJSON(message.macros);
    }
    if (message.getMacro !== undefined) {
      obj.getMacro = APIV1MacroRequest_GetMacro.toJSON(message.getMacro);
    }
    if (message.putMacro !== undefined) {
      obj.putMacro = APIV1MacroRequest_PutMacro.toJSON(message.putMacro);
    }
    if (message.deleteMacro !== undefined) {
      obj.deleteMacro = APIV1MacroRequest_DeleteMacro.toJSON(
        message.deleteMacro,
      );
    }
    if (message.triggerMacro !== undefined) {
      obj.triggerMacro = APIV1MacroRequest_TriggerMacro.toJSON(
        message.triggerMacro,
      );
    }
    if (message.macroCollections !== undefined) {
      obj.macroCollections = APIV1MacroRequest_MacroCollections.toJSON(
        message.macroCollections,
      );
    }
    if (message.getMacroCollection !== undefined) {
      obj.getMacroCollection = APIV1MacroRequest_GetMacroCollection.toJSON(
        message.getMacroCollection,
      );
    }
    if (message.postMacroCollections !== undefined) {
      obj.postMacroCollections = APIV1MacroRequest_PostMacroCollections.toJSON(
        message.postMacroCollections,
      );
    }
    if (message.putMacroCollection !== undefined) {
      obj.putMacroCollection = APIV1MacroRequest_PutMacroCollection.toJSON(
        message.putMacroCollection,
      );
    }
    if (message.deleteMacroCollection !== undefined) {
      obj.deleteMacroCollection =
        APIV1MacroRequest_DeleteMacroCollection.toJSON(
          message.deleteMacroCollection,
        );
    }
    if (message.macroIcon !== undefined) {
      obj.macroIcon = APIV1MacroRequest_MacroIcon.toJSON(message.macroIcon);
    }
    if (message.putMacroIcon !== undefined) {
      obj.putMacroIcon = APIV1MacroRequest_PutMacroIcon.toJSON(
        message.putMacroIcon,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest>, I>>(
    base?: I,
  ): APIV1MacroRequest {
    return APIV1MacroRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest>, I>>(
    object: I,
  ): APIV1MacroRequest {
    const message = createBaseAPIV1MacroRequest();
    message.macros =
      object.macros !== undefined && object.macros !== null
        ? APIV1MacroRequest_Macros.fromPartial(object.macros)
        : undefined;
    message.getMacro =
      object.getMacro !== undefined && object.getMacro !== null
        ? APIV1MacroRequest_GetMacro.fromPartial(object.getMacro)
        : undefined;
    message.putMacro =
      object.putMacro !== undefined && object.putMacro !== null
        ? APIV1MacroRequest_PutMacro.fromPartial(object.putMacro)
        : undefined;
    message.deleteMacro =
      object.deleteMacro !== undefined && object.deleteMacro !== null
        ? APIV1MacroRequest_DeleteMacro.fromPartial(object.deleteMacro)
        : undefined;
    message.triggerMacro =
      object.triggerMacro !== undefined && object.triggerMacro !== null
        ? APIV1MacroRequest_TriggerMacro.fromPartial(object.triggerMacro)
        : undefined;
    message.macroCollections =
      object.macroCollections !== undefined && object.macroCollections !== null
        ? APIV1MacroRequest_MacroCollections.fromPartial(
            object.macroCollections,
          )
        : undefined;
    message.getMacroCollection =
      object.getMacroCollection !== undefined &&
      object.getMacroCollection !== null
        ? APIV1MacroRequest_GetMacroCollection.fromPartial(
            object.getMacroCollection,
          )
        : undefined;
    message.postMacroCollections =
      object.postMacroCollections !== undefined &&
      object.postMacroCollections !== null
        ? APIV1MacroRequest_PostMacroCollections.fromPartial(
            object.postMacroCollections,
          )
        : undefined;
    message.putMacroCollection =
      object.putMacroCollection !== undefined &&
      object.putMacroCollection !== null
        ? APIV1MacroRequest_PutMacroCollection.fromPartial(
            object.putMacroCollection,
          )
        : undefined;
    message.deleteMacroCollection =
      object.deleteMacroCollection !== undefined &&
      object.deleteMacroCollection !== null
        ? APIV1MacroRequest_DeleteMacroCollection.fromPartial(
            object.deleteMacroCollection,
          )
        : undefined;
    message.macroIcon =
      object.macroIcon !== undefined && object.macroIcon !== null
        ? APIV1MacroRequest_MacroIcon.fromPartial(object.macroIcon)
        : undefined;
    message.putMacroIcon =
      object.putMacroIcon !== undefined && object.putMacroIcon !== null
        ? APIV1MacroRequest_PutMacroIcon.fromPartial(object.putMacroIcon)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroRequest_Macros(): APIV1MacroRequest_Macros {
  return {};
}

export const APIV1MacroRequest_Macros = {
  encode(
    _: APIV1MacroRequest_Macros,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_Macros {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_Macros();
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

  fromJSON(_: any): APIV1MacroRequest_Macros {
    return {};
  },

  toJSON(_: APIV1MacroRequest_Macros): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_Macros>, I>>(
    base?: I,
  ): APIV1MacroRequest_Macros {
    return APIV1MacroRequest_Macros.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_Macros>, I>>(
    _: I,
  ): APIV1MacroRequest_Macros {
    const message = createBaseAPIV1MacroRequest_Macros();
    return message;
  },
};

function createBaseAPIV1MacroRequest_GetMacro(): APIV1MacroRequest_GetMacro {
  return { id: '' };
}

export const APIV1MacroRequest_GetMacro = {
  encode(
    message: APIV1MacroRequest_GetMacro,
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
  ): APIV1MacroRequest_GetMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_GetMacro();
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

  fromJSON(object: any): APIV1MacroRequest_GetMacro {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_GetMacro): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_GetMacro>, I>>(
    base?: I,
  ): APIV1MacroRequest_GetMacro {
    return APIV1MacroRequest_GetMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_GetMacro>, I>>(
    object: I,
  ): APIV1MacroRequest_GetMacro {
    const message = createBaseAPIV1MacroRequest_GetMacro();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_PutMacro(): APIV1MacroRequest_PutMacro {
  return {
    id: '',
    nameChange: '',
    colorChange: undefined,
    imageTypeChange: '',
  };
}

export const APIV1MacroRequest_PutMacro = {
  encode(
    message: APIV1MacroRequest_PutMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.nameChange !== '') {
      writer.uint32(18).string(message.nameChange);
    }
    if (message.colorChange !== undefined) {
      APIV1Color.encode(message.colorChange, writer.uint32(26).fork()).ldelim();
    }
    if (message.imageTypeChange !== '') {
      writer.uint32(34).string(message.imageTypeChange);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_PutMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_PutMacro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nameChange = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.colorChange = APIV1Color.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.imageTypeChange = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroRequest_PutMacro {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      nameChange: isSet(object.nameChange)
        ? globalThis.String(object.nameChange)
        : '',
      colorChange: isSet(object.colorChange)
        ? APIV1Color.fromJSON(object.colorChange)
        : undefined,
      imageTypeChange: isSet(object.imageTypeChange)
        ? globalThis.String(object.imageTypeChange)
        : '',
    };
  },

  toJSON(message: APIV1MacroRequest_PutMacro): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.nameChange !== '') {
      obj.nameChange = message.nameChange;
    }
    if (message.colorChange !== undefined) {
      obj.colorChange = APIV1Color.toJSON(message.colorChange);
    }
    if (message.imageTypeChange !== '') {
      obj.imageTypeChange = message.imageTypeChange;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_PutMacro>, I>>(
    base?: I,
  ): APIV1MacroRequest_PutMacro {
    return APIV1MacroRequest_PutMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_PutMacro>, I>>(
    object: I,
  ): APIV1MacroRequest_PutMacro {
    const message = createBaseAPIV1MacroRequest_PutMacro();
    message.id = object.id ?? '';
    message.nameChange = object.nameChange ?? '';
    message.colorChange =
      object.colorChange !== undefined && object.colorChange !== null
        ? APIV1Color.fromPartial(object.colorChange)
        : undefined;
    message.imageTypeChange = object.imageTypeChange ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_DeleteMacro(): APIV1MacroRequest_DeleteMacro {
  return { id: '' };
}

export const APIV1MacroRequest_DeleteMacro = {
  encode(
    message: APIV1MacroRequest_DeleteMacro,
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
  ): APIV1MacroRequest_DeleteMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_DeleteMacro();
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

  fromJSON(object: any): APIV1MacroRequest_DeleteMacro {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_DeleteMacro): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_DeleteMacro>, I>>(
    base?: I,
  ): APIV1MacroRequest_DeleteMacro {
    return APIV1MacroRequest_DeleteMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_DeleteMacro>, I>>(
    object: I,
  ): APIV1MacroRequest_DeleteMacro {
    const message = createBaseAPIV1MacroRequest_DeleteMacro();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_TriggerMacro(): APIV1MacroRequest_TriggerMacro {
  return { id: '' };
}

export const APIV1MacroRequest_TriggerMacro = {
  encode(
    message: APIV1MacroRequest_TriggerMacro,
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
  ): APIV1MacroRequest_TriggerMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_TriggerMacro();
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

  fromJSON(object: any): APIV1MacroRequest_TriggerMacro {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_TriggerMacro): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_TriggerMacro>, I>>(
    base?: I,
  ): APIV1MacroRequest_TriggerMacro {
    return APIV1MacroRequest_TriggerMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_TriggerMacro>, I>>(
    object: I,
  ): APIV1MacroRequest_TriggerMacro {
    const message = createBaseAPIV1MacroRequest_TriggerMacro();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_MacroCollections(): APIV1MacroRequest_MacroCollections {
  return {};
}

export const APIV1MacroRequest_MacroCollections = {
  encode(
    _: APIV1MacroRequest_MacroCollections,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_MacroCollections {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_MacroCollections();
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

  fromJSON(_: any): APIV1MacroRequest_MacroCollections {
    return {};
  },

  toJSON(_: APIV1MacroRequest_MacroCollections): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_MacroCollections>, I>>(
    base?: I,
  ): APIV1MacroRequest_MacroCollections {
    return APIV1MacroRequest_MacroCollections.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroRequest_MacroCollections>, I>,
  >(_: I): APIV1MacroRequest_MacroCollections {
    const message = createBaseAPIV1MacroRequest_MacroCollections();
    return message;
  },
};

function createBaseAPIV1MacroRequest_GetMacroCollection(): APIV1MacroRequest_GetMacroCollection {
  return { id: '' };
}

export const APIV1MacroRequest_GetMacroCollection = {
  encode(
    message: APIV1MacroRequest_GetMacroCollection,
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
  ): APIV1MacroRequest_GetMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_GetMacroCollection();
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

  fromJSON(object: any): APIV1MacroRequest_GetMacroCollection {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_GetMacroCollection): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_GetMacroCollection>, I>>(
    base?: I,
  ): APIV1MacroRequest_GetMacroCollection {
    return APIV1MacroRequest_GetMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroRequest_GetMacroCollection>, I>,
  >(object: I): APIV1MacroRequest_GetMacroCollection {
    const message = createBaseAPIV1MacroRequest_GetMacroCollection();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_PostMacroCollections(): APIV1MacroRequest_PostMacroCollections {
  return { name: '' };
}

export const APIV1MacroRequest_PostMacroCollections = {
  encode(
    message: APIV1MacroRequest_PostMacroCollections,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_PostMacroCollections {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_PostMacroCollections();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroRequest_PostMacroCollections {
    return { name: isSet(object.name) ? globalThis.String(object.name) : '' };
  },

  toJSON(message: APIV1MacroRequest_PostMacroCollections): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroRequest_PostMacroCollections>, I>,
  >(base?: I): APIV1MacroRequest_PostMacroCollections {
    return APIV1MacroRequest_PostMacroCollections.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroRequest_PostMacroCollections>, I>,
  >(object: I): APIV1MacroRequest_PostMacroCollections {
    const message = createBaseAPIV1MacroRequest_PostMacroCollections();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_PutMacroCollection(): APIV1MacroRequest_PutMacroCollection {
  return { id: '', changes: undefined };
}

export const APIV1MacroRequest_PutMacroCollection = {
  encode(
    message: APIV1MacroRequest_PutMacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.changes !== undefined) {
      APIV1MacroCollection.encode(
        message.changes,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_PutMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_PutMacroCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.changes = APIV1MacroCollection.decode(
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

  fromJSON(object: any): APIV1MacroRequest_PutMacroCollection {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      changes: isSet(object.changes)
        ? APIV1MacroCollection.fromJSON(object.changes)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroRequest_PutMacroCollection): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.changes !== undefined) {
      obj.changes = APIV1MacroCollection.toJSON(message.changes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_PutMacroCollection>, I>>(
    base?: I,
  ): APIV1MacroRequest_PutMacroCollection {
    return APIV1MacroRequest_PutMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroRequest_PutMacroCollection>, I>,
  >(object: I): APIV1MacroRequest_PutMacroCollection {
    const message = createBaseAPIV1MacroRequest_PutMacroCollection();
    message.id = object.id ?? '';
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? APIV1MacroCollection.fromPartial(object.changes)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroRequest_DeleteMacroCollection(): APIV1MacroRequest_DeleteMacroCollection {
  return { id: '' };
}

export const APIV1MacroRequest_DeleteMacroCollection = {
  encode(
    message: APIV1MacroRequest_DeleteMacroCollection,
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
  ): APIV1MacroRequest_DeleteMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_DeleteMacroCollection();
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

  fromJSON(object: any): APIV1MacroRequest_DeleteMacroCollection {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_DeleteMacroCollection): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroRequest_DeleteMacroCollection>, I>,
  >(base?: I): APIV1MacroRequest_DeleteMacroCollection {
    return APIV1MacroRequest_DeleteMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroRequest_DeleteMacroCollection>, I>,
  >(object: I): APIV1MacroRequest_DeleteMacroCollection {
    const message = createBaseAPIV1MacroRequest_DeleteMacroCollection();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_MacroIcon(): APIV1MacroRequest_MacroIcon {
  return { id: '' };
}

export const APIV1MacroRequest_MacroIcon = {
  encode(
    message: APIV1MacroRequest_MacroIcon,
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
  ): APIV1MacroRequest_MacroIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_MacroIcon();
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

  fromJSON(object: any): APIV1MacroRequest_MacroIcon {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MacroRequest_MacroIcon): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_MacroIcon>, I>>(
    base?: I,
  ): APIV1MacroRequest_MacroIcon {
    return APIV1MacroRequest_MacroIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_MacroIcon>, I>>(
    object: I,
  ): APIV1MacroRequest_MacroIcon {
    const message = createBaseAPIV1MacroRequest_MacroIcon();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MacroRequest_PutMacroIcon(): APIV1MacroRequest_PutMacroIcon {
  return { id: '', contentType: '', icon: new Uint8Array(0) };
}

export const APIV1MacroRequest_PutMacroIcon = {
  encode(
    message: APIV1MacroRequest_PutMacroIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.contentType !== '') {
      writer.uint32(18).string(message.contentType);
    }
    if (message.icon.length !== 0) {
      writer.uint32(26).bytes(message.icon);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroRequest_PutMacroIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroRequest_PutMacroIcon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.icon = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroRequest_PutMacroIcon {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      contentType: isSet(object.contentType)
        ? globalThis.String(object.contentType)
        : '',
      icon: isSet(object.icon)
        ? bytesFromBase64(object.icon)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1MacroRequest_PutMacroIcon): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.contentType !== '') {
      obj.contentType = message.contentType;
    }
    if (message.icon.length !== 0) {
      obj.icon = base64FromBytes(message.icon);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroRequest_PutMacroIcon>, I>>(
    base?: I,
  ): APIV1MacroRequest_PutMacroIcon {
    return APIV1MacroRequest_PutMacroIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroRequest_PutMacroIcon>, I>>(
    object: I,
  ): APIV1MacroRequest_PutMacroIcon {
    const message = createBaseAPIV1MacroRequest_PutMacroIcon();
    message.id = object.id ?? '';
    message.contentType = object.contentType ?? '';
    message.icon = object.icon ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1MacroResponse(): APIV1MacroResponse {
  return {
    macros: undefined,
    getMacro: undefined,
    putMacro: undefined,
    deleteMacro: undefined,
    triggerMacro: undefined,
    macroCollections: undefined,
    getMacroCollection: undefined,
    postMacroCollections: undefined,
    putMacroCollection: undefined,
    deleteMacroCollection: undefined,
    macroIcon: undefined,
    putMacroIcon: undefined,
  };
}

export const APIV1MacroResponse = {
  encode(
    message: APIV1MacroResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macros !== undefined) {
      APIV1MacroResponse_Macros.encode(
        message.macros,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getMacro !== undefined) {
      APIV1MacroResponse_GetMacro.encode(
        message.getMacro,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.putMacro !== undefined) {
      APIV1MacroResponse_PutMacro.encode(
        message.putMacro,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.deleteMacro !== undefined) {
      APIV1MacroResponse_DeleteMacro.encode(
        message.deleteMacro,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.triggerMacro !== undefined) {
      APIV1MacroResponse_TriggerMacro.encode(
        message.triggerMacro,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.macroCollections !== undefined) {
      APIV1MacroResponse_MacroCollections.encode(
        message.macroCollections,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.getMacroCollection !== undefined) {
      APIV1MacroResponse_GetMacroCollection.encode(
        message.getMacroCollection,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.postMacroCollections !== undefined) {
      APIV1MacroResponse_PostMacroCollections.encode(
        message.postMacroCollections,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.putMacroCollection !== undefined) {
      APIV1MacroResponse_PutMacroCollection.encode(
        message.putMacroCollection,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.deleteMacroCollection !== undefined) {
      APIV1MacroResponse_DeleteMacroCollection.encode(
        message.deleteMacroCollection,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.macroIcon !== undefined) {
      APIV1MacroResponse_MacroIcon.encode(
        message.macroIcon,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.putMacroIcon !== undefined) {
      APIV1MacroResponse_PutMacroIcon.encode(
        message.putMacroIcon,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MacroResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macros = APIV1MacroResponse_Macros.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getMacro = APIV1MacroResponse_GetMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.putMacro = APIV1MacroResponse_PutMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deleteMacro = APIV1MacroResponse_DeleteMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.triggerMacro = APIV1MacroResponse_TriggerMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.macroCollections = APIV1MacroResponse_MacroCollections.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.getMacroCollection =
            APIV1MacroResponse_GetMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.postMacroCollections =
            APIV1MacroResponse_PostMacroCollections.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.putMacroCollection =
            APIV1MacroResponse_PutMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.deleteMacroCollection =
            APIV1MacroResponse_DeleteMacroCollection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.macroIcon = APIV1MacroResponse_MacroIcon.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.putMacroIcon = APIV1MacroResponse_PutMacroIcon.decode(
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

  fromJSON(object: any): APIV1MacroResponse {
    return {
      macros: isSet(object.macros)
        ? APIV1MacroResponse_Macros.fromJSON(object.macros)
        : undefined,
      getMacro: isSet(object.getMacro)
        ? APIV1MacroResponse_GetMacro.fromJSON(object.getMacro)
        : undefined,
      putMacro: isSet(object.putMacro)
        ? APIV1MacroResponse_PutMacro.fromJSON(object.putMacro)
        : undefined,
      deleteMacro: isSet(object.deleteMacro)
        ? APIV1MacroResponse_DeleteMacro.fromJSON(object.deleteMacro)
        : undefined,
      triggerMacro: isSet(object.triggerMacro)
        ? APIV1MacroResponse_TriggerMacro.fromJSON(object.triggerMacro)
        : undefined,
      macroCollections: isSet(object.macroCollections)
        ? APIV1MacroResponse_MacroCollections.fromJSON(object.macroCollections)
        : undefined,
      getMacroCollection: isSet(object.getMacroCollection)
        ? APIV1MacroResponse_GetMacroCollection.fromJSON(
            object.getMacroCollection,
          )
        : undefined,
      postMacroCollections: isSet(object.postMacroCollections)
        ? APIV1MacroResponse_PostMacroCollections.fromJSON(
            object.postMacroCollections,
          )
        : undefined,
      putMacroCollection: isSet(object.putMacroCollection)
        ? APIV1MacroResponse_PutMacroCollection.fromJSON(
            object.putMacroCollection,
          )
        : undefined,
      deleteMacroCollection: isSet(object.deleteMacroCollection)
        ? APIV1MacroResponse_DeleteMacroCollection.fromJSON(
            object.deleteMacroCollection,
          )
        : undefined,
      macroIcon: isSet(object.macroIcon)
        ? APIV1MacroResponse_MacroIcon.fromJSON(object.macroIcon)
        : undefined,
      putMacroIcon: isSet(object.putMacroIcon)
        ? APIV1MacroResponse_PutMacroIcon.fromJSON(object.putMacroIcon)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse): unknown {
    const obj: any = {};
    if (message.macros !== undefined) {
      obj.macros = APIV1MacroResponse_Macros.toJSON(message.macros);
    }
    if (message.getMacro !== undefined) {
      obj.getMacro = APIV1MacroResponse_GetMacro.toJSON(message.getMacro);
    }
    if (message.putMacro !== undefined) {
      obj.putMacro = APIV1MacroResponse_PutMacro.toJSON(message.putMacro);
    }
    if (message.deleteMacro !== undefined) {
      obj.deleteMacro = APIV1MacroResponse_DeleteMacro.toJSON(
        message.deleteMacro,
      );
    }
    if (message.triggerMacro !== undefined) {
      obj.triggerMacro = APIV1MacroResponse_TriggerMacro.toJSON(
        message.triggerMacro,
      );
    }
    if (message.macroCollections !== undefined) {
      obj.macroCollections = APIV1MacroResponse_MacroCollections.toJSON(
        message.macroCollections,
      );
    }
    if (message.getMacroCollection !== undefined) {
      obj.getMacroCollection = APIV1MacroResponse_GetMacroCollection.toJSON(
        message.getMacroCollection,
      );
    }
    if (message.postMacroCollections !== undefined) {
      obj.postMacroCollections = APIV1MacroResponse_PostMacroCollections.toJSON(
        message.postMacroCollections,
      );
    }
    if (message.putMacroCollection !== undefined) {
      obj.putMacroCollection = APIV1MacroResponse_PutMacroCollection.toJSON(
        message.putMacroCollection,
      );
    }
    if (message.deleteMacroCollection !== undefined) {
      obj.deleteMacroCollection =
        APIV1MacroResponse_DeleteMacroCollection.toJSON(
          message.deleteMacroCollection,
        );
    }
    if (message.macroIcon !== undefined) {
      obj.macroIcon = APIV1MacroResponse_MacroIcon.toJSON(message.macroIcon);
    }
    if (message.putMacroIcon !== undefined) {
      obj.putMacroIcon = APIV1MacroResponse_PutMacroIcon.toJSON(
        message.putMacroIcon,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse>, I>>(
    base?: I,
  ): APIV1MacroResponse {
    return APIV1MacroResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse>, I>>(
    object: I,
  ): APIV1MacroResponse {
    const message = createBaseAPIV1MacroResponse();
    message.macros =
      object.macros !== undefined && object.macros !== null
        ? APIV1MacroResponse_Macros.fromPartial(object.macros)
        : undefined;
    message.getMacro =
      object.getMacro !== undefined && object.getMacro !== null
        ? APIV1MacroResponse_GetMacro.fromPartial(object.getMacro)
        : undefined;
    message.putMacro =
      object.putMacro !== undefined && object.putMacro !== null
        ? APIV1MacroResponse_PutMacro.fromPartial(object.putMacro)
        : undefined;
    message.deleteMacro =
      object.deleteMacro !== undefined && object.deleteMacro !== null
        ? APIV1MacroResponse_DeleteMacro.fromPartial(object.deleteMacro)
        : undefined;
    message.triggerMacro =
      object.triggerMacro !== undefined && object.triggerMacro !== null
        ? APIV1MacroResponse_TriggerMacro.fromPartial(object.triggerMacro)
        : undefined;
    message.macroCollections =
      object.macroCollections !== undefined && object.macroCollections !== null
        ? APIV1MacroResponse_MacroCollections.fromPartial(
            object.macroCollections,
          )
        : undefined;
    message.getMacroCollection =
      object.getMacroCollection !== undefined &&
      object.getMacroCollection !== null
        ? APIV1MacroResponse_GetMacroCollection.fromPartial(
            object.getMacroCollection,
          )
        : undefined;
    message.postMacroCollections =
      object.postMacroCollections !== undefined &&
      object.postMacroCollections !== null
        ? APIV1MacroResponse_PostMacroCollections.fromPartial(
            object.postMacroCollections,
          )
        : undefined;
    message.putMacroCollection =
      object.putMacroCollection !== undefined &&
      object.putMacroCollection !== null
        ? APIV1MacroResponse_PutMacroCollection.fromPartial(
            object.putMacroCollection,
          )
        : undefined;
    message.deleteMacroCollection =
      object.deleteMacroCollection !== undefined &&
      object.deleteMacroCollection !== null
        ? APIV1MacroResponse_DeleteMacroCollection.fromPartial(
            object.deleteMacroCollection,
          )
        : undefined;
    message.macroIcon =
      object.macroIcon !== undefined && object.macroIcon !== null
        ? APIV1MacroResponse_MacroIcon.fromPartial(object.macroIcon)
        : undefined;
    message.putMacroIcon =
      object.putMacroIcon !== undefined && object.putMacroIcon !== null
        ? APIV1MacroResponse_PutMacroIcon.fromPartial(object.putMacroIcon)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_Macros(): APIV1MacroResponse_Macros {
  return { macros: [] };
}

export const APIV1MacroResponse_Macros = {
  encode(
    message: APIV1MacroResponse_Macros,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.macros) {
      APIV1Macro.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_Macros {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_Macros();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macros.push(APIV1Macro.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroResponse_Macros {
    return {
      macros: globalThis.Array.isArray(object?.macros)
        ? object.macros.map((e: any) => APIV1Macro.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MacroResponse_Macros): unknown {
    const obj: any = {};
    if (message.macros?.length) {
      obj.macros = message.macros.map((e) => APIV1Macro.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_Macros>, I>>(
    base?: I,
  ): APIV1MacroResponse_Macros {
    return APIV1MacroResponse_Macros.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_Macros>, I>>(
    object: I,
  ): APIV1MacroResponse_Macros {
    const message = createBaseAPIV1MacroResponse_Macros();
    message.macros = object.macros?.map((e) => APIV1Macro.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MacroResponse_GetMacro(): APIV1MacroResponse_GetMacro {
  return { macro: undefined };
}

export const APIV1MacroResponse_GetMacro = {
  encode(
    message: APIV1MacroResponse_GetMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macro !== undefined) {
      APIV1Macro.encode(message.macro, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_GetMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_GetMacro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macro = APIV1Macro.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroResponse_GetMacro {
    return {
      macro: isSet(object.macro)
        ? APIV1Macro.fromJSON(object.macro)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_GetMacro): unknown {
    const obj: any = {};
    if (message.macro !== undefined) {
      obj.macro = APIV1Macro.toJSON(message.macro);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_GetMacro>, I>>(
    base?: I,
  ): APIV1MacroResponse_GetMacro {
    return APIV1MacroResponse_GetMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_GetMacro>, I>>(
    object: I,
  ): APIV1MacroResponse_GetMacro {
    const message = createBaseAPIV1MacroResponse_GetMacro();
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? APIV1Macro.fromPartial(object.macro)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_PutMacro(): APIV1MacroResponse_PutMacro {
  return { macro: undefined };
}

export const APIV1MacroResponse_PutMacro = {
  encode(
    message: APIV1MacroResponse_PutMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macro !== undefined) {
      APIV1Macro.encode(message.macro, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_PutMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_PutMacro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macro = APIV1Macro.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroResponse_PutMacro {
    return {
      macro: isSet(object.macro)
        ? APIV1Macro.fromJSON(object.macro)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_PutMacro): unknown {
    const obj: any = {};
    if (message.macro !== undefined) {
      obj.macro = APIV1Macro.toJSON(message.macro);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_PutMacro>, I>>(
    base?: I,
  ): APIV1MacroResponse_PutMacro {
    return APIV1MacroResponse_PutMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_PutMacro>, I>>(
    object: I,
  ): APIV1MacroResponse_PutMacro {
    const message = createBaseAPIV1MacroResponse_PutMacro();
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? APIV1Macro.fromPartial(object.macro)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_DeleteMacro(): APIV1MacroResponse_DeleteMacro {
  return {};
}

export const APIV1MacroResponse_DeleteMacro = {
  encode(
    _: APIV1MacroResponse_DeleteMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_DeleteMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_DeleteMacro();
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

  fromJSON(_: any): APIV1MacroResponse_DeleteMacro {
    return {};
  },

  toJSON(_: APIV1MacroResponse_DeleteMacro): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_DeleteMacro>, I>>(
    base?: I,
  ): APIV1MacroResponse_DeleteMacro {
    return APIV1MacroResponse_DeleteMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_DeleteMacro>, I>>(
    _: I,
  ): APIV1MacroResponse_DeleteMacro {
    const message = createBaseAPIV1MacroResponse_DeleteMacro();
    return message;
  },
};

function createBaseAPIV1MacroResponse_TriggerMacro(): APIV1MacroResponse_TriggerMacro {
  return {};
}

export const APIV1MacroResponse_TriggerMacro = {
  encode(
    _: APIV1MacroResponse_TriggerMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_TriggerMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_TriggerMacro();
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

  fromJSON(_: any): APIV1MacroResponse_TriggerMacro {
    return {};
  },

  toJSON(_: APIV1MacroResponse_TriggerMacro): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_TriggerMacro>, I>>(
    base?: I,
  ): APIV1MacroResponse_TriggerMacro {
    return APIV1MacroResponse_TriggerMacro.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_TriggerMacro>, I>>(
    _: I,
  ): APIV1MacroResponse_TriggerMacro {
    const message = createBaseAPIV1MacroResponse_TriggerMacro();
    return message;
  },
};

function createBaseAPIV1MacroResponse_MacroCollections(): APIV1MacroResponse_MacroCollections {
  return { macroCollections: undefined };
}

export const APIV1MacroResponse_MacroCollections = {
  encode(
    message: APIV1MacroResponse_MacroCollections,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macroCollections !== undefined) {
      APIV1MacroResponse_MacroCollections_Collections.encode(
        message.macroCollections,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_MacroCollections {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_MacroCollections();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macroCollections =
            APIV1MacroResponse_MacroCollections_Collections.decode(
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

  fromJSON(object: any): APIV1MacroResponse_MacroCollections {
    return {
      macroCollections: isSet(object.macroCollections)
        ? APIV1MacroResponse_MacroCollections_Collections.fromJSON(
            object.macroCollections,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_MacroCollections): unknown {
    const obj: any = {};
    if (message.macroCollections !== undefined) {
      obj.macroCollections =
        APIV1MacroResponse_MacroCollections_Collections.toJSON(
          message.macroCollections,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_MacroCollections>, I>>(
    base?: I,
  ): APIV1MacroResponse_MacroCollections {
    return APIV1MacroResponse_MacroCollections.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroResponse_MacroCollections>, I>,
  >(object: I): APIV1MacroResponse_MacroCollections {
    const message = createBaseAPIV1MacroResponse_MacroCollections();
    message.macroCollections =
      object.macroCollections !== undefined && object.macroCollections !== null
        ? APIV1MacroResponse_MacroCollections_Collections.fromPartial(
            object.macroCollections,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_MacroCollections_Collections(): APIV1MacroResponse_MacroCollections_Collections {
  return { collections: [] };
}

export const APIV1MacroResponse_MacroCollections_Collections = {
  encode(
    message: APIV1MacroResponse_MacroCollections_Collections,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.collections) {
      APIV1MacroCollection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_MacroCollections_Collections {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_MacroCollections_Collections();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collections.push(
            APIV1MacroCollection.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1MacroResponse_MacroCollections_Collections {
    return {
      collections: globalThis.Array.isArray(object?.collections)
        ? object.collections.map((e: any) => APIV1MacroCollection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MacroResponse_MacroCollections_Collections): unknown {
    const obj: any = {};
    if (message.collections?.length) {
      obj.collections = message.collections.map((e) =>
        APIV1MacroCollection.toJSON(e),
      );
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1MacroResponse_MacroCollections_Collections>,
      I
    >,
  >(base?: I): APIV1MacroResponse_MacroCollections_Collections {
    return APIV1MacroResponse_MacroCollections_Collections.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1MacroResponse_MacroCollections_Collections>,
      I
    >,
  >(object: I): APIV1MacroResponse_MacroCollections_Collections {
    const message = createBaseAPIV1MacroResponse_MacroCollections_Collections();
    message.collections =
      object.collections?.map((e) => APIV1MacroCollection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MacroResponse_GetMacroCollection(): APIV1MacroResponse_GetMacroCollection {
  return { macroCollection: undefined };
}

export const APIV1MacroResponse_GetMacroCollection = {
  encode(
    message: APIV1MacroResponse_GetMacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macroCollection !== undefined) {
      APIV1MacroCollection.encode(
        message.macroCollection,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_GetMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_GetMacroCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macroCollection = APIV1MacroCollection.decode(
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

  fromJSON(object: any): APIV1MacroResponse_GetMacroCollection {
    return {
      macroCollection: isSet(object.macroCollection)
        ? APIV1MacroCollection.fromJSON(object.macroCollection)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_GetMacroCollection): unknown {
    const obj: any = {};
    if (message.macroCollection !== undefined) {
      obj.macroCollection = APIV1MacroCollection.toJSON(
        message.macroCollection,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroResponse_GetMacroCollection>, I>,
  >(base?: I): APIV1MacroResponse_GetMacroCollection {
    return APIV1MacroResponse_GetMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroResponse_GetMacroCollection>, I>,
  >(object: I): APIV1MacroResponse_GetMacroCollection {
    const message = createBaseAPIV1MacroResponse_GetMacroCollection();
    message.macroCollection =
      object.macroCollection !== undefined && object.macroCollection !== null
        ? APIV1MacroCollection.fromPartial(object.macroCollection)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_PostMacroCollections(): APIV1MacroResponse_PostMacroCollections {
  return { macroCollection: undefined };
}

export const APIV1MacroResponse_PostMacroCollections = {
  encode(
    message: APIV1MacroResponse_PostMacroCollections,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macroCollection !== undefined) {
      APIV1MacroCollection.encode(
        message.macroCollection,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_PostMacroCollections {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_PostMacroCollections();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macroCollection = APIV1MacroCollection.decode(
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

  fromJSON(object: any): APIV1MacroResponse_PostMacroCollections {
    return {
      macroCollection: isSet(object.macroCollection)
        ? APIV1MacroCollection.fromJSON(object.macroCollection)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_PostMacroCollections): unknown {
    const obj: any = {};
    if (message.macroCollection !== undefined) {
      obj.macroCollection = APIV1MacroCollection.toJSON(
        message.macroCollection,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroResponse_PostMacroCollections>, I>,
  >(base?: I): APIV1MacroResponse_PostMacroCollections {
    return APIV1MacroResponse_PostMacroCollections.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroResponse_PostMacroCollections>, I>,
  >(object: I): APIV1MacroResponse_PostMacroCollections {
    const message = createBaseAPIV1MacroResponse_PostMacroCollections();
    message.macroCollection =
      object.macroCollection !== undefined && object.macroCollection !== null
        ? APIV1MacroCollection.fromPartial(object.macroCollection)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_PutMacroCollection(): APIV1MacroResponse_PutMacroCollection {
  return { macroCollection: undefined };
}

export const APIV1MacroResponse_PutMacroCollection = {
  encode(
    message: APIV1MacroResponse_PutMacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.macroCollection !== undefined) {
      APIV1MacroCollection.encode(
        message.macroCollection,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_PutMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_PutMacroCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.macroCollection = APIV1MacroCollection.decode(
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

  fromJSON(object: any): APIV1MacroResponse_PutMacroCollection {
    return {
      macroCollection: isSet(object.macroCollection)
        ? APIV1MacroCollection.fromJSON(object.macroCollection)
        : undefined,
    };
  },

  toJSON(message: APIV1MacroResponse_PutMacroCollection): unknown {
    const obj: any = {};
    if (message.macroCollection !== undefined) {
      obj.macroCollection = APIV1MacroCollection.toJSON(
        message.macroCollection,
      );
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroResponse_PutMacroCollection>, I>,
  >(base?: I): APIV1MacroResponse_PutMacroCollection {
    return APIV1MacroResponse_PutMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroResponse_PutMacroCollection>, I>,
  >(object: I): APIV1MacroResponse_PutMacroCollection {
    const message = createBaseAPIV1MacroResponse_PutMacroCollection();
    message.macroCollection =
      object.macroCollection !== undefined && object.macroCollection !== null
        ? APIV1MacroCollection.fromPartial(object.macroCollection)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MacroResponse_DeleteMacroCollection(): APIV1MacroResponse_DeleteMacroCollection {
  return {};
}

export const APIV1MacroResponse_DeleteMacroCollection = {
  encode(
    _: APIV1MacroResponse_DeleteMacroCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_DeleteMacroCollection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_DeleteMacroCollection();
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

  fromJSON(_: any): APIV1MacroResponse_DeleteMacroCollection {
    return {};
  },

  toJSON(_: APIV1MacroResponse_DeleteMacroCollection): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1MacroResponse_DeleteMacroCollection>, I>,
  >(base?: I): APIV1MacroResponse_DeleteMacroCollection {
    return APIV1MacroResponse_DeleteMacroCollection.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MacroResponse_DeleteMacroCollection>, I>,
  >(_: I): APIV1MacroResponse_DeleteMacroCollection {
    const message = createBaseAPIV1MacroResponse_DeleteMacroCollection();
    return message;
  },
};

function createBaseAPIV1MacroResponse_MacroIcon(): APIV1MacroResponse_MacroIcon {
  return { contentType: '', icon: new Uint8Array(0) };
}

export const APIV1MacroResponse_MacroIcon = {
  encode(
    message: APIV1MacroResponse_MacroIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.contentType !== '') {
      writer.uint32(10).string(message.contentType);
    }
    if (message.icon.length !== 0) {
      writer.uint32(18).bytes(message.icon);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_MacroIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_MacroIcon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.icon = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MacroResponse_MacroIcon {
    return {
      contentType: isSet(object.contentType)
        ? globalThis.String(object.contentType)
        : '',
      icon: isSet(object.icon)
        ? bytesFromBase64(object.icon)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1MacroResponse_MacroIcon): unknown {
    const obj: any = {};
    if (message.contentType !== '') {
      obj.contentType = message.contentType;
    }
    if (message.icon.length !== 0) {
      obj.icon = base64FromBytes(message.icon);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_MacroIcon>, I>>(
    base?: I,
  ): APIV1MacroResponse_MacroIcon {
    return APIV1MacroResponse_MacroIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_MacroIcon>, I>>(
    object: I,
  ): APIV1MacroResponse_MacroIcon {
    const message = createBaseAPIV1MacroResponse_MacroIcon();
    message.contentType = object.contentType ?? '';
    message.icon = object.icon ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1MacroResponse_PutMacroIcon(): APIV1MacroResponse_PutMacroIcon {
  return {};
}

export const APIV1MacroResponse_PutMacroIcon = {
  encode(
    _: APIV1MacroResponse_PutMacroIcon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MacroResponse_PutMacroIcon {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MacroResponse_PutMacroIcon();
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

  fromJSON(_: any): APIV1MacroResponse_PutMacroIcon {
    return {};
  },

  toJSON(_: APIV1MacroResponse_PutMacroIcon): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MacroResponse_PutMacroIcon>, I>>(
    base?: I,
  ): APIV1MacroResponse_PutMacroIcon {
    return APIV1MacroResponse_PutMacroIcon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MacroResponse_PutMacroIcon>, I>>(
    _: I,
  ): APIV1MacroResponse_PutMacroIcon {
    const message = createBaseAPIV1MacroResponse_PutMacroIcon();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
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
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

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
