/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Color } from './proApiV1Color';
import { APIV1Identifier } from './proApiV1Identifier';

export const protobufPackage = 'rv.data';

export interface APIV1Macro {
  id: APIV1Identifier | undefined;
  color: APIV1Color | undefined;
}

export interface APIV1MacroRequest {
  macros?: APIV1MacroRequest_Macros | undefined;
  getMacro?: APIV1MacroRequest_GetMacro | undefined;
  putMacro?: APIV1MacroRequest_PutMacro | undefined;
  deleteMacro?: APIV1MacroRequest_DeleteMacro | undefined;
  triggerMacro?: APIV1MacroRequest_TriggerMacro | undefined;
}

export interface APIV1MacroRequest_Macros {}

export interface APIV1MacroRequest_GetMacro {
  id: string;
}

export interface APIV1MacroRequest_PutMacro {
  id: string;
  nameChange: string;
  colorChange: APIV1Color | undefined;
}

export interface APIV1MacroRequest_DeleteMacro {
  id: string;
}

export interface APIV1MacroRequest_TriggerMacro {
  id: string;
}

export interface APIV1MacroResponse {
  macros?: APIV1MacroResponse_Macros | undefined;
  getMacro?: APIV1MacroResponse_GetMacro | undefined;
  putMacro?: APIV1MacroResponse_PutMacro | undefined;
  deleteMacro?: APIV1MacroResponse_DeleteMacro | undefined;
  triggerMacro?: APIV1MacroResponse_TriggerMacro | undefined;
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

function createBaseAPIV1Macro(): APIV1Macro {
  return { id: undefined, color: undefined };
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
  return { id: '', nameChange: '', colorChange: undefined };
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

function createBaseAPIV1MacroResponse(): APIV1MacroResponse {
  return {
    macros: undefined,
    getMacro: undefined,
    putMacro: undefined,
    deleteMacro: undefined,
    triggerMacro: undefined,
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
