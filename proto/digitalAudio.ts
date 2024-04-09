/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface DigitalAudio {}

export interface DigitalAudio_Setup {
  buses: DigitalAudio_Bus[];
  monitorDevice: DigitalAudio_Device | undefined;
  mainOutputDevice: DigitalAudio_Device | undefined;
  enableSdiNdiDevice: boolean;
  sdiNdiDevice: DigitalAudio_Device | undefined;
  monitorOnMains: boolean;
  disableMainOutputDevice: boolean;
}

export interface DigitalAudio_Bus {
  name: string;
  muted: boolean;
  solo: boolean;
  testTone: boolean;
  masterLevel: number;
}

export interface DigitalAudio_Device {
  name: string;
  renderID: string;
  formats: DigitalAudio_Device_Format[];
  routing: DigitalAudio_Device_Routing | undefined;
}

export interface DigitalAudio_Device_Format {
  sampleRate: number;
  bitDepth: number;
  type: DigitalAudio_Device_Format_Type;
}

export enum DigitalAudio_Device_Format_Type {
  TYPE_INT = 0,
  TYPE_FLOAT = 1,
  UNRECOGNIZED = -1,
}

export function digitalAudio_Device_Format_TypeFromJSON(
  object: any,
): DigitalAudio_Device_Format_Type {
  switch (object) {
    case 0:
    case 'TYPE_INT':
      return DigitalAudio_Device_Format_Type.TYPE_INT;
    case 1:
    case 'TYPE_FLOAT':
      return DigitalAudio_Device_Format_Type.TYPE_FLOAT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return DigitalAudio_Device_Format_Type.UNRECOGNIZED;
  }
}

export function digitalAudio_Device_Format_TypeToJSON(
  object: DigitalAudio_Device_Format_Type,
): string {
  switch (object) {
    case DigitalAudio_Device_Format_Type.TYPE_INT:
      return 'TYPE_INT';
    case DigitalAudio_Device_Format_Type.TYPE_FLOAT:
      return 'TYPE_FLOAT';
    case DigitalAudio_Device_Format_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface DigitalAudio_Device_Map {
  channelIndex: number;
  mappedIndices: number[];
}

export interface DigitalAudio_Device_Channel {
  muteEnable: boolean;
  soloEnable: boolean;
  toneEnable: boolean;
  audioDelay: number;
  level: number;
}

export interface DigitalAudio_Device_Routing {
  channels: DigitalAudio_Device_Channel[];
  map: DigitalAudio_Device_Map[];
  isCustomMap: boolean;
  masterChannel: DigitalAudio_Device_Channel | undefined;
}

function createBaseDigitalAudio(): DigitalAudio {
  return {};
}

export const DigitalAudio = {
  encode(
    _: DigitalAudio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio();
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

  fromJSON(_: any): DigitalAudio {
    return {};
  },

  toJSON(_: DigitalAudio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio>, I>>(
    base?: I,
  ): DigitalAudio {
    return DigitalAudio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio>, I>>(
    _: I,
  ): DigitalAudio {
    const message = createBaseDigitalAudio();
    return message;
  },
};

function createBaseDigitalAudio_Setup(): DigitalAudio_Setup {
  return {
    buses: [],
    monitorDevice: undefined,
    mainOutputDevice: undefined,
    enableSdiNdiDevice: false,
    sdiNdiDevice: undefined,
    monitorOnMains: false,
    disableMainOutputDevice: false,
  };
}

export const DigitalAudio_Setup = {
  encode(
    message: DigitalAudio_Setup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.buses) {
      DigitalAudio_Bus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.monitorDevice !== undefined) {
      DigitalAudio_Device.encode(
        message.monitorDevice,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.mainOutputDevice !== undefined) {
      DigitalAudio_Device.encode(
        message.mainOutputDevice,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.enableSdiNdiDevice !== false) {
      writer.uint32(32).bool(message.enableSdiNdiDevice);
    }
    if (message.sdiNdiDevice !== undefined) {
      DigitalAudio_Device.encode(
        message.sdiNdiDevice,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.monitorOnMains !== false) {
      writer.uint32(48).bool(message.monitorOnMains);
    }
    if (message.disableMainOutputDevice !== false) {
      writer.uint32(56).bool(message.disableMainOutputDevice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Setup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Setup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.buses.push(DigitalAudio_Bus.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.monitorDevice = DigitalAudio_Device.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.mainOutputDevice = DigitalAudio_Device.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enableSdiNdiDevice = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sdiNdiDevice = DigitalAudio_Device.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.monitorOnMains = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.disableMainOutputDevice = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Setup {
    return {
      buses: globalThis.Array.isArray(object?.buses)
        ? object.buses.map((e: any) => DigitalAudio_Bus.fromJSON(e))
        : [],
      monitorDevice: isSet(object.monitorDevice)
        ? DigitalAudio_Device.fromJSON(object.monitorDevice)
        : undefined,
      mainOutputDevice: isSet(object.mainOutputDevice)
        ? DigitalAudio_Device.fromJSON(object.mainOutputDevice)
        : undefined,
      enableSdiNdiDevice: isSet(object.enableSdiNdiDevice)
        ? globalThis.Boolean(object.enableSdiNdiDevice)
        : false,
      sdiNdiDevice: isSet(object.sdiNdiDevice)
        ? DigitalAudio_Device.fromJSON(object.sdiNdiDevice)
        : undefined,
      monitorOnMains: isSet(object.monitorOnMains)
        ? globalThis.Boolean(object.monitorOnMains)
        : false,
      disableMainOutputDevice: isSet(object.disableMainOutputDevice)
        ? globalThis.Boolean(object.disableMainOutputDevice)
        : false,
    };
  },

  toJSON(message: DigitalAudio_Setup): unknown {
    const obj: any = {};
    if (message.buses?.length) {
      obj.buses = message.buses.map((e) => DigitalAudio_Bus.toJSON(e));
    }
    if (message.monitorDevice !== undefined) {
      obj.monitorDevice = DigitalAudio_Device.toJSON(message.monitorDevice);
    }
    if (message.mainOutputDevice !== undefined) {
      obj.mainOutputDevice = DigitalAudio_Device.toJSON(
        message.mainOutputDevice,
      );
    }
    if (message.enableSdiNdiDevice !== false) {
      obj.enableSdiNdiDevice = message.enableSdiNdiDevice;
    }
    if (message.sdiNdiDevice !== undefined) {
      obj.sdiNdiDevice = DigitalAudio_Device.toJSON(message.sdiNdiDevice);
    }
    if (message.monitorOnMains !== false) {
      obj.monitorOnMains = message.monitorOnMains;
    }
    if (message.disableMainOutputDevice !== false) {
      obj.disableMainOutputDevice = message.disableMainOutputDevice;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Setup>, I>>(
    base?: I,
  ): DigitalAudio_Setup {
    return DigitalAudio_Setup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Setup>, I>>(
    object: I,
  ): DigitalAudio_Setup {
    const message = createBaseDigitalAudio_Setup();
    message.buses =
      object.buses?.map((e) => DigitalAudio_Bus.fromPartial(e)) || [];
    message.monitorDevice =
      object.monitorDevice !== undefined && object.monitorDevice !== null
        ? DigitalAudio_Device.fromPartial(object.monitorDevice)
        : undefined;
    message.mainOutputDevice =
      object.mainOutputDevice !== undefined && object.mainOutputDevice !== null
        ? DigitalAudio_Device.fromPartial(object.mainOutputDevice)
        : undefined;
    message.enableSdiNdiDevice = object.enableSdiNdiDevice ?? false;
    message.sdiNdiDevice =
      object.sdiNdiDevice !== undefined && object.sdiNdiDevice !== null
        ? DigitalAudio_Device.fromPartial(object.sdiNdiDevice)
        : undefined;
    message.monitorOnMains = object.monitorOnMains ?? false;
    message.disableMainOutputDevice = object.disableMainOutputDevice ?? false;
    return message;
  },
};

function createBaseDigitalAudio_Bus(): DigitalAudio_Bus {
  return {
    name: '',
    muted: false,
    solo: false,
    testTone: false,
    masterLevel: 0,
  };
}

export const DigitalAudio_Bus = {
  encode(
    message: DigitalAudio_Bus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.muted !== false) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.solo !== false) {
      writer.uint32(24).bool(message.solo);
    }
    if (message.testTone !== false) {
      writer.uint32(32).bool(message.testTone);
    }
    if (message.masterLevel !== 0) {
      writer.uint32(41).double(message.masterLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Bus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Bus();
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

          message.muted = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.solo = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.testTone = reader.bool();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.masterLevel = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Bus {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      muted: isSet(object.muted) ? globalThis.Boolean(object.muted) : false,
      solo: isSet(object.solo) ? globalThis.Boolean(object.solo) : false,
      testTone: isSet(object.testTone)
        ? globalThis.Boolean(object.testTone)
        : false,
      masterLevel: isSet(object.masterLevel)
        ? globalThis.Number(object.masterLevel)
        : 0,
    };
  },

  toJSON(message: DigitalAudio_Bus): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.muted !== false) {
      obj.muted = message.muted;
    }
    if (message.solo !== false) {
      obj.solo = message.solo;
    }
    if (message.testTone !== false) {
      obj.testTone = message.testTone;
    }
    if (message.masterLevel !== 0) {
      obj.masterLevel = message.masterLevel;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Bus>, I>>(
    base?: I,
  ): DigitalAudio_Bus {
    return DigitalAudio_Bus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Bus>, I>>(
    object: I,
  ): DigitalAudio_Bus {
    const message = createBaseDigitalAudio_Bus();
    message.name = object.name ?? '';
    message.muted = object.muted ?? false;
    message.solo = object.solo ?? false;
    message.testTone = object.testTone ?? false;
    message.masterLevel = object.masterLevel ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device(): DigitalAudio_Device {
  return { name: '', renderID: '', formats: [], routing: undefined };
}

export const DigitalAudio_Device = {
  encode(
    message: DigitalAudio_Device,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.renderID !== '') {
      writer.uint32(18).string(message.renderID);
    }
    for (const v of message.formats) {
      DigitalAudio_Device_Format.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.routing !== undefined) {
      DigitalAudio_Device_Routing.encode(
        message.routing,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigitalAudio_Device {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device();
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
          if (tag !== 18) {
            break;
          }

          message.renderID = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.formats.push(
            DigitalAudio_Device_Format.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.routing = DigitalAudio_Device_Routing.decode(
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

  fromJSON(object: any): DigitalAudio_Device {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      renderID: isSet(object.renderID)
        ? globalThis.String(object.renderID)
        : '',
      formats: globalThis.Array.isArray(object?.formats)
        ? object.formats.map((e: any) => DigitalAudio_Device_Format.fromJSON(e))
        : [],
      routing: isSet(object.routing)
        ? DigitalAudio_Device_Routing.fromJSON(object.routing)
        : undefined,
    };
  },

  toJSON(message: DigitalAudio_Device): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.renderID !== '') {
      obj.renderID = message.renderID;
    }
    if (message.formats?.length) {
      obj.formats = message.formats.map((e) =>
        DigitalAudio_Device_Format.toJSON(e),
      );
    }
    if (message.routing !== undefined) {
      obj.routing = DigitalAudio_Device_Routing.toJSON(message.routing);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Device>, I>>(
    base?: I,
  ): DigitalAudio_Device {
    return DigitalAudio_Device.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device>, I>>(
    object: I,
  ): DigitalAudio_Device {
    const message = createBaseDigitalAudio_Device();
    message.name = object.name ?? '';
    message.renderID = object.renderID ?? '';
    message.formats =
      object.formats?.map((e) => DigitalAudio_Device_Format.fromPartial(e)) ||
      [];
    message.routing =
      object.routing !== undefined && object.routing !== null
        ? DigitalAudio_Device_Routing.fromPartial(object.routing)
        : undefined;
    return message;
  },
};

function createBaseDigitalAudio_Device_Format(): DigitalAudio_Device_Format {
  return { sampleRate: 0, bitDepth: 0, type: 0 };
}

export const DigitalAudio_Device_Format = {
  encode(
    message: DigitalAudio_Device_Format,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sampleRate !== 0) {
      writer.uint32(8).uint32(message.sampleRate);
    }
    if (message.bitDepth !== 0) {
      writer.uint32(16).uint32(message.bitDepth);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DigitalAudio_Device_Format {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Format();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sampleRate = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bitDepth = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Format {
    return {
      sampleRate: isSet(object.sampleRate)
        ? globalThis.Number(object.sampleRate)
        : 0,
      bitDepth: isSet(object.bitDepth) ? globalThis.Number(object.bitDepth) : 0,
      type: isSet(object.type)
        ? digitalAudio_Device_Format_TypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: DigitalAudio_Device_Format): unknown {
    const obj: any = {};
    if (message.sampleRate !== 0) {
      obj.sampleRate = Math.round(message.sampleRate);
    }
    if (message.bitDepth !== 0) {
      obj.bitDepth = Math.round(message.bitDepth);
    }
    if (message.type !== 0) {
      obj.type = digitalAudio_Device_Format_TypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Device_Format>, I>>(
    base?: I,
  ): DigitalAudio_Device_Format {
    return DigitalAudio_Device_Format.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Format>, I>>(
    object: I,
  ): DigitalAudio_Device_Format {
    const message = createBaseDigitalAudio_Device_Format();
    message.sampleRate = object.sampleRate ?? 0;
    message.bitDepth = object.bitDepth ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device_Map(): DigitalAudio_Device_Map {
  return { channelIndex: 0, mappedIndices: [] };
}

export const DigitalAudio_Device_Map = {
  encode(
    message: DigitalAudio_Device_Map,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channelIndex !== 0) {
      writer.uint32(8).uint32(message.channelIndex);
    }
    writer.uint32(18).fork();
    for (const v of message.mappedIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DigitalAudio_Device_Map {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Map();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channelIndex = reader.uint32();
          continue;
        case 2:
          if (tag === 16) {
            message.mappedIndices.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mappedIndices.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Map {
    return {
      channelIndex: isSet(object.channelIndex)
        ? globalThis.Number(object.channelIndex)
        : 0,
      mappedIndices: globalThis.Array.isArray(object?.mappedIndices)
        ? object.mappedIndices.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: DigitalAudio_Device_Map): unknown {
    const obj: any = {};
    if (message.channelIndex !== 0) {
      obj.channelIndex = Math.round(message.channelIndex);
    }
    if (message.mappedIndices?.length) {
      obj.mappedIndices = message.mappedIndices.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Device_Map>, I>>(
    base?: I,
  ): DigitalAudio_Device_Map {
    return DigitalAudio_Device_Map.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Map>, I>>(
    object: I,
  ): DigitalAudio_Device_Map {
    const message = createBaseDigitalAudio_Device_Map();
    message.channelIndex = object.channelIndex ?? 0;
    message.mappedIndices = object.mappedIndices?.map((e) => e) || [];
    return message;
  },
};

function createBaseDigitalAudio_Device_Channel(): DigitalAudio_Device_Channel {
  return {
    muteEnable: false,
    soloEnable: false,
    toneEnable: false,
    audioDelay: 0,
    level: 0,
  };
}

export const DigitalAudio_Device_Channel = {
  encode(
    message: DigitalAudio_Device_Channel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.muteEnable !== false) {
      writer.uint32(8).bool(message.muteEnable);
    }
    if (message.soloEnable !== false) {
      writer.uint32(16).bool(message.soloEnable);
    }
    if (message.toneEnable !== false) {
      writer.uint32(24).bool(message.toneEnable);
    }
    if (message.audioDelay !== 0) {
      writer.uint32(33).double(message.audioDelay);
    }
    if (message.level !== 0) {
      writer.uint32(41).double(message.level);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DigitalAudio_Device_Channel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Channel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.muteEnable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.soloEnable = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.toneEnable = reader.bool();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.audioDelay = reader.double();
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.level = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DigitalAudio_Device_Channel {
    return {
      muteEnable: isSet(object.muteEnable)
        ? globalThis.Boolean(object.muteEnable)
        : false,
      soloEnable: isSet(object.soloEnable)
        ? globalThis.Boolean(object.soloEnable)
        : false,
      toneEnable: isSet(object.toneEnable)
        ? globalThis.Boolean(object.toneEnable)
        : false,
      audioDelay: isSet(object.audioDelay)
        ? globalThis.Number(object.audioDelay)
        : 0,
      level: isSet(object.level) ? globalThis.Number(object.level) : 0,
    };
  },

  toJSON(message: DigitalAudio_Device_Channel): unknown {
    const obj: any = {};
    if (message.muteEnable !== false) {
      obj.muteEnable = message.muteEnable;
    }
    if (message.soloEnable !== false) {
      obj.soloEnable = message.soloEnable;
    }
    if (message.toneEnable !== false) {
      obj.toneEnable = message.toneEnable;
    }
    if (message.audioDelay !== 0) {
      obj.audioDelay = message.audioDelay;
    }
    if (message.level !== 0) {
      obj.level = message.level;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Device_Channel>, I>>(
    base?: I,
  ): DigitalAudio_Device_Channel {
    return DigitalAudio_Device_Channel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Channel>, I>>(
    object: I,
  ): DigitalAudio_Device_Channel {
    const message = createBaseDigitalAudio_Device_Channel();
    message.muteEnable = object.muteEnable ?? false;
    message.soloEnable = object.soloEnable ?? false;
    message.toneEnable = object.toneEnable ?? false;
    message.audioDelay = object.audioDelay ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseDigitalAudio_Device_Routing(): DigitalAudio_Device_Routing {
  return {
    channels: [],
    map: [],
    isCustomMap: false,
    masterChannel: undefined,
  };
}

export const DigitalAudio_Device_Routing = {
  encode(
    message: DigitalAudio_Device_Routing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.channels) {
      DigitalAudio_Device_Channel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.map) {
      DigitalAudio_Device_Map.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.isCustomMap !== false) {
      writer.uint32(24).bool(message.isCustomMap);
    }
    if (message.masterChannel !== undefined) {
      DigitalAudio_Device_Channel.encode(
        message.masterChannel,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DigitalAudio_Device_Routing {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigitalAudio_Device_Routing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channels.push(
            DigitalAudio_Device_Channel.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.map.push(
            DigitalAudio_Device_Map.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isCustomMap = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.masterChannel = DigitalAudio_Device_Channel.decode(
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

  fromJSON(object: any): DigitalAudio_Device_Routing {
    return {
      channels: globalThis.Array.isArray(object?.channels)
        ? object.channels.map((e: any) =>
            DigitalAudio_Device_Channel.fromJSON(e),
          )
        : [],
      map: globalThis.Array.isArray(object?.map)
        ? object.map.map((e: any) => DigitalAudio_Device_Map.fromJSON(e))
        : [],
      isCustomMap: isSet(object.isCustomMap)
        ? globalThis.Boolean(object.isCustomMap)
        : false,
      masterChannel: isSet(object.masterChannel)
        ? DigitalAudio_Device_Channel.fromJSON(object.masterChannel)
        : undefined,
    };
  },

  toJSON(message: DigitalAudio_Device_Routing): unknown {
    const obj: any = {};
    if (message.channels?.length) {
      obj.channels = message.channels.map((e) =>
        DigitalAudio_Device_Channel.toJSON(e),
      );
    }
    if (message.map?.length) {
      obj.map = message.map.map((e) => DigitalAudio_Device_Map.toJSON(e));
    }
    if (message.isCustomMap !== false) {
      obj.isCustomMap = message.isCustomMap;
    }
    if (message.masterChannel !== undefined) {
      obj.masterChannel = DigitalAudio_Device_Channel.toJSON(
        message.masterChannel,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigitalAudio_Device_Routing>, I>>(
    base?: I,
  ): DigitalAudio_Device_Routing {
    return DigitalAudio_Device_Routing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigitalAudio_Device_Routing>, I>>(
    object: I,
  ): DigitalAudio_Device_Routing {
    const message = createBaseDigitalAudio_Device_Routing();
    message.channels =
      object.channels?.map((e) => DigitalAudio_Device_Channel.fromPartial(e)) ||
      [];
    message.map =
      object.map?.map((e) => DigitalAudio_Device_Map.fromPartial(e)) || [];
    message.isCustomMap = object.isCustomMap ?? false;
    message.masterChannel =
      object.masterChannel !== undefined && object.masterChannel !== null
        ? DigitalAudio_Device_Channel.fromPartial(object.masterChannel)
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
