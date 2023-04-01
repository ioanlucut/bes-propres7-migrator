/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface Audio {}

export interface Audio_SettingsDocument {
  outputSetup: Audio_OutputSetup | undefined;
  monitorDevice: Audio_Device | undefined;
  monitorOnMains: boolean;
}

export interface Audio_OutputSetup {
  uuid: UUID | undefined;
  audioDevice: Audio_Device | undefined;
  logicalChannels: Audio_LogicalChannel[];
  audioDelay: number;
  masterLevel: number;
  physicalChanels: Audio_PhysicalChannel[];
}

export interface Audio_Device {
  name: string;
  renderID: string;
  inputChannelCount: number;
  outputChannelCount: number;
  formats: Audio_Device_Format[];
}

export interface Audio_Device_Format {
  sampleRate: number;
  bitDepth: number;
  type: Audio_Device_Format_Type;
}

export enum Audio_Device_Format_Type {
  TYPE_INT = 0,
  TYPE_FLOAT = 1,
  UNRECOGNIZED = -1,
}

export function audio_Device_Format_TypeFromJSON(
  object: any,
): Audio_Device_Format_Type {
  switch (object) {
    case 0:
    case 'TYPE_INT':
      return Audio_Device_Format_Type.TYPE_INT;
    case 1:
    case 'TYPE_FLOAT':
      return Audio_Device_Format_Type.TYPE_FLOAT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Audio_Device_Format_Type.UNRECOGNIZED;
  }
}

export function audio_Device_Format_TypeToJSON(
  object: Audio_Device_Format_Type,
): string {
  switch (object) {
    case Audio_Device_Format_Type.TYPE_INT:
      return 'TYPE_INT';
    case Audio_Device_Format_Type.TYPE_FLOAT:
      return 'TYPE_FLOAT';
    case Audio_Device_Format_Type.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Audio_LogicalChannel {
  uuid: UUID | undefined;
  name: string;
  index: number;
  muted: boolean;
  physicalAudioChannels: Audio_LogicalChannel_OutputChannel[];
  solo: boolean;
  testTone: boolean;
}

export interface Audio_LogicalChannel_OutputChannel {
  index: number;
  muted: boolean;
  solo: boolean;
  testTone: boolean;
}

export interface Audio_PhysicalChannel {
  index: number;
  muteEnable: boolean;
  soloEnable: boolean;
  toneEnable: boolean;
}

function createBaseAudio(): Audio {
  return {};
}

export const Audio = {
  encode(_: Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Audio {
    return {};
  },

  toJSON(_: Audio): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio>, I>>(base?: I): Audio {
    return Audio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio>, I>>(_: I): Audio {
    const message = createBaseAudio();
    return message;
  },
};

function createBaseAudio_SettingsDocument(): Audio_SettingsDocument {
  return {
    outputSetup: undefined,
    monitorDevice: undefined,
    monitorOnMains: false,
  };
}

export const Audio_SettingsDocument = {
  encode(
    message: Audio_SettingsDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.outputSetup !== undefined) {
      Audio_OutputSetup.encode(
        message.outputSetup,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.monitorDevice !== undefined) {
      Audio_Device.encode(
        message.monitorDevice,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.monitorOnMains === true) {
      writer.uint32(24).bool(message.monitorOnMains);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Audio_SettingsDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_SettingsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.outputSetup = Audio_OutputSetup.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.monitorDevice = Audio_Device.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.monitorOnMains = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_SettingsDocument {
    return {
      outputSetup: isSet(object.outputSetup)
        ? Audio_OutputSetup.fromJSON(object.outputSetup)
        : undefined,
      monitorDevice: isSet(object.monitorDevice)
        ? Audio_Device.fromJSON(object.monitorDevice)
        : undefined,
      monitorOnMains: isSet(object.monitorOnMains)
        ? Boolean(object.monitorOnMains)
        : false,
    };
  },

  toJSON(message: Audio_SettingsDocument): unknown {
    const obj: any = {};
    message.outputSetup !== undefined &&
      (obj.outputSetup = message.outputSetup
        ? Audio_OutputSetup.toJSON(message.outputSetup)
        : undefined);
    message.monitorDevice !== undefined &&
      (obj.monitorDevice = message.monitorDevice
        ? Audio_Device.toJSON(message.monitorDevice)
        : undefined);
    message.monitorOnMains !== undefined &&
      (obj.monitorOnMains = message.monitorOnMains);
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_SettingsDocument>, I>>(
    base?: I,
  ): Audio_SettingsDocument {
    return Audio_SettingsDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_SettingsDocument>, I>>(
    object: I,
  ): Audio_SettingsDocument {
    const message = createBaseAudio_SettingsDocument();
    message.outputSetup =
      object.outputSetup !== undefined && object.outputSetup !== null
        ? Audio_OutputSetup.fromPartial(object.outputSetup)
        : undefined;
    message.monitorDevice =
      object.monitorDevice !== undefined && object.monitorDevice !== null
        ? Audio_Device.fromPartial(object.monitorDevice)
        : undefined;
    message.monitorOnMains = object.monitorOnMains ?? false;
    return message;
  },
};

function createBaseAudio_OutputSetup(): Audio_OutputSetup {
  return {
    uuid: undefined,
    audioDevice: undefined,
    logicalChannels: [],
    audioDelay: 0,
    masterLevel: 0,
    physicalChanels: [],
  };
}

export const Audio_OutputSetup = {
  encode(
    message: Audio_OutputSetup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.audioDevice !== undefined) {
      Audio_Device.encode(
        message.audioDevice,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.logicalChannels) {
      Audio_LogicalChannel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.audioDelay !== 0) {
      writer.uint32(33).double(message.audioDelay);
    }
    if (message.masterLevel !== 0) {
      writer.uint32(41).double(message.masterLevel);
    }
    for (const v of message.physicalChanels) {
      Audio_PhysicalChannel.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Audio_OutputSetup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_OutputSetup();
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

          message.audioDevice = Audio_Device.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.logicalChannels.push(
            Audio_LogicalChannel.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag != 33) {
            break;
          }

          message.audioDelay = reader.double();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.masterLevel = reader.double();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.physicalChanels.push(
            Audio_PhysicalChannel.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_OutputSetup {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      audioDevice: isSet(object.audioDevice)
        ? Audio_Device.fromJSON(object.audioDevice)
        : undefined,
      logicalChannels: Array.isArray(object?.logicalChannels)
        ? object.logicalChannels.map((e: any) =>
            Audio_LogicalChannel.fromJSON(e),
          )
        : [],
      audioDelay: isSet(object.audioDelay) ? Number(object.audioDelay) : 0,
      masterLevel: isSet(object.masterLevel) ? Number(object.masterLevel) : 0,
      physicalChanels: Array.isArray(object?.physicalChanels)
        ? object.physicalChanels.map((e: any) =>
            Audio_PhysicalChannel.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: Audio_OutputSetup): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.audioDevice !== undefined &&
      (obj.audioDevice = message.audioDevice
        ? Audio_Device.toJSON(message.audioDevice)
        : undefined);
    if (message.logicalChannels) {
      obj.logicalChannels = message.logicalChannels.map((e) =>
        e ? Audio_LogicalChannel.toJSON(e) : undefined,
      );
    } else {
      obj.logicalChannels = [];
    }
    message.audioDelay !== undefined && (obj.audioDelay = message.audioDelay);
    message.masterLevel !== undefined &&
      (obj.masterLevel = message.masterLevel);
    if (message.physicalChanels) {
      obj.physicalChanels = message.physicalChanels.map((e) =>
        e ? Audio_PhysicalChannel.toJSON(e) : undefined,
      );
    } else {
      obj.physicalChanels = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_OutputSetup>, I>>(
    base?: I,
  ): Audio_OutputSetup {
    return Audio_OutputSetup.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_OutputSetup>, I>>(
    object: I,
  ): Audio_OutputSetup {
    const message = createBaseAudio_OutputSetup();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.audioDevice =
      object.audioDevice !== undefined && object.audioDevice !== null
        ? Audio_Device.fromPartial(object.audioDevice)
        : undefined;
    message.logicalChannels =
      object.logicalChannels?.map((e) => Audio_LogicalChannel.fromPartial(e)) ||
      [];
    message.audioDelay = object.audioDelay ?? 0;
    message.masterLevel = object.masterLevel ?? 0;
    message.physicalChanels =
      object.physicalChanels?.map((e) =>
        Audio_PhysicalChannel.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseAudio_Device(): Audio_Device {
  return {
    name: '',
    renderID: '',
    inputChannelCount: 0,
    outputChannelCount: 0,
    formats: [],
  };
}

export const Audio_Device = {
  encode(
    message: Audio_Device,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.renderID !== '') {
      writer.uint32(18).string(message.renderID);
    }
    if (message.inputChannelCount !== 0) {
      writer.uint32(24).uint32(message.inputChannelCount);
    }
    if (message.outputChannelCount !== 0) {
      writer.uint32(32).uint32(message.outputChannelCount);
    }
    for (const v of message.formats) {
      Audio_Device_Format.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Audio_Device {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_Device();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.renderID = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.inputChannelCount = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.outputChannelCount = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.formats.push(
            Audio_Device_Format.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_Device {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      renderID: isSet(object.renderID) ? String(object.renderID) : '',
      inputChannelCount: isSet(object.inputChannelCount)
        ? Number(object.inputChannelCount)
        : 0,
      outputChannelCount: isSet(object.outputChannelCount)
        ? Number(object.outputChannelCount)
        : 0,
      formats: Array.isArray(object?.formats)
        ? object.formats.map((e: any) => Audio_Device_Format.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Audio_Device): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.renderID !== undefined && (obj.renderID = message.renderID);
    message.inputChannelCount !== undefined &&
      (obj.inputChannelCount = Math.round(message.inputChannelCount));
    message.outputChannelCount !== undefined &&
      (obj.outputChannelCount = Math.round(message.outputChannelCount));
    if (message.formats) {
      obj.formats = message.formats.map((e) =>
        e ? Audio_Device_Format.toJSON(e) : undefined,
      );
    } else {
      obj.formats = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_Device>, I>>(
    base?: I,
  ): Audio_Device {
    return Audio_Device.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_Device>, I>>(
    object: I,
  ): Audio_Device {
    const message = createBaseAudio_Device();
    message.name = object.name ?? '';
    message.renderID = object.renderID ?? '';
    message.inputChannelCount = object.inputChannelCount ?? 0;
    message.outputChannelCount = object.outputChannelCount ?? 0;
    message.formats =
      object.formats?.map((e) => Audio_Device_Format.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAudio_Device_Format(): Audio_Device_Format {
  return { sampleRate: 0, bitDepth: 0, type: 0 };
}

export const Audio_Device_Format = {
  encode(
    message: Audio_Device_Format,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Audio_Device_Format {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_Device_Format();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sampleRate = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.bitDepth = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_Device_Format {
    return {
      sampleRate: isSet(object.sampleRate) ? Number(object.sampleRate) : 0,
      bitDepth: isSet(object.bitDepth) ? Number(object.bitDepth) : 0,
      type: isSet(object.type)
        ? audio_Device_Format_TypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: Audio_Device_Format): unknown {
    const obj: any = {};
    message.sampleRate !== undefined &&
      (obj.sampleRate = Math.round(message.sampleRate));
    message.bitDepth !== undefined &&
      (obj.bitDepth = Math.round(message.bitDepth));
    message.type !== undefined &&
      (obj.type = audio_Device_Format_TypeToJSON(message.type));
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_Device_Format>, I>>(
    base?: I,
  ): Audio_Device_Format {
    return Audio_Device_Format.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_Device_Format>, I>>(
    object: I,
  ): Audio_Device_Format {
    const message = createBaseAudio_Device_Format();
    message.sampleRate = object.sampleRate ?? 0;
    message.bitDepth = object.bitDepth ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAudio_LogicalChannel(): Audio_LogicalChannel {
  return {
    uuid: undefined,
    name: '',
    index: 0,
    muted: false,
    physicalAudioChannels: [],
    solo: false,
    testTone: false,
  };
}

export const Audio_LogicalChannel = {
  encode(
    message: Audio_LogicalChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.muted === true) {
      writer.uint32(32).bool(message.muted);
    }
    for (const v of message.physicalAudioChannels) {
      Audio_LogicalChannel_OutputChannel.encode(
        v!,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.solo === true) {
      writer.uint32(48).bool(message.solo);
    }
    if (message.testTone === true) {
      writer.uint32(56).bool(message.testTone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Audio_LogicalChannel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_LogicalChannel();
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
          if (tag != 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.muted = reader.bool();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.physicalAudioChannels.push(
            Audio_LogicalChannel_OutputChannel.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.solo = reader.bool();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.testTone = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_LogicalChannel {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? String(object.name) : '',
      index: isSet(object.index) ? Number(object.index) : 0,
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      physicalAudioChannels: Array.isArray(object?.physicalAudioChannels)
        ? object.physicalAudioChannels.map((e: any) =>
            Audio_LogicalChannel_OutputChannel.fromJSON(e),
          )
        : [],
      solo: isSet(object.solo) ? Boolean(object.solo) : false,
      testTone: isSet(object.testTone) ? Boolean(object.testTone) : false,
    };
  },

  toJSON(message: Audio_LogicalChannel): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.muted !== undefined && (obj.muted = message.muted);
    if (message.physicalAudioChannels) {
      obj.physicalAudioChannels = message.physicalAudioChannels.map((e) =>
        e ? Audio_LogicalChannel_OutputChannel.toJSON(e) : undefined,
      );
    } else {
      obj.physicalAudioChannels = [];
    }
    message.solo !== undefined && (obj.solo = message.solo);
    message.testTone !== undefined && (obj.testTone = message.testTone);
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_LogicalChannel>, I>>(
    base?: I,
  ): Audio_LogicalChannel {
    return Audio_LogicalChannel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_LogicalChannel>, I>>(
    object: I,
  ): Audio_LogicalChannel {
    const message = createBaseAudio_LogicalChannel();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.index = object.index ?? 0;
    message.muted = object.muted ?? false;
    message.physicalAudioChannels =
      object.physicalAudioChannels?.map((e) =>
        Audio_LogicalChannel_OutputChannel.fromPartial(e),
      ) || [];
    message.solo = object.solo ?? false;
    message.testTone = object.testTone ?? false;
    return message;
  },
};

function createBaseAudio_LogicalChannel_OutputChannel(): Audio_LogicalChannel_OutputChannel {
  return { index: 0, muted: false, solo: false, testTone: false };
}

export const Audio_LogicalChannel_OutputChannel = {
  encode(
    message: Audio_LogicalChannel_OutputChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.muted === true) {
      writer.uint32(16).bool(message.muted);
    }
    if (message.solo === true) {
      writer.uint32(24).bool(message.solo);
    }
    if (message.testTone === true) {
      writer.uint32(32).bool(message.testTone);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Audio_LogicalChannel_OutputChannel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_LogicalChannel_OutputChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.muted = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.solo = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.testTone = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_LogicalChannel_OutputChannel {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      muted: isSet(object.muted) ? Boolean(object.muted) : false,
      solo: isSet(object.solo) ? Boolean(object.solo) : false,
      testTone: isSet(object.testTone) ? Boolean(object.testTone) : false,
    };
  },

  toJSON(message: Audio_LogicalChannel_OutputChannel): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.muted !== undefined && (obj.muted = message.muted);
    message.solo !== undefined && (obj.solo = message.solo);
    message.testTone !== undefined && (obj.testTone = message.testTone);
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_LogicalChannel_OutputChannel>, I>>(
    base?: I,
  ): Audio_LogicalChannel_OutputChannel {
    return Audio_LogicalChannel_OutputChannel.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<Audio_LogicalChannel_OutputChannel>, I>,
  >(object: I): Audio_LogicalChannel_OutputChannel {
    const message = createBaseAudio_LogicalChannel_OutputChannel();
    message.index = object.index ?? 0;
    message.muted = object.muted ?? false;
    message.solo = object.solo ?? false;
    message.testTone = object.testTone ?? false;
    return message;
  },
};

function createBaseAudio_PhysicalChannel(): Audio_PhysicalChannel {
  return { index: 0, muteEnable: false, soloEnable: false, toneEnable: false };
}

export const Audio_PhysicalChannel = {
  encode(
    message: Audio_PhysicalChannel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.muteEnable === true) {
      writer.uint32(16).bool(message.muteEnable);
    }
    if (message.soloEnable === true) {
      writer.uint32(24).bool(message.soloEnable);
    }
    if (message.toneEnable === true) {
      writer.uint32(32).bool(message.toneEnable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Audio_PhysicalChannel {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudio_PhysicalChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.muteEnable = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.soloEnable = reader.bool();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.toneEnable = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Audio_PhysicalChannel {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      muteEnable: isSet(object.muteEnable) ? Boolean(object.muteEnable) : false,
      soloEnable: isSet(object.soloEnable) ? Boolean(object.soloEnable) : false,
      toneEnable: isSet(object.toneEnable) ? Boolean(object.toneEnable) : false,
    };
  },

  toJSON(message: Audio_PhysicalChannel): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.muteEnable !== undefined && (obj.muteEnable = message.muteEnable);
    message.soloEnable !== undefined && (obj.soloEnable = message.soloEnable);
    message.toneEnable !== undefined && (obj.toneEnable = message.toneEnable);
    return obj;
  },

  create<I extends Exact<DeepPartial<Audio_PhysicalChannel>, I>>(
    base?: I,
  ): Audio_PhysicalChannel {
    return Audio_PhysicalChannel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Audio_PhysicalChannel>, I>>(
    object: I,
  ): Audio_PhysicalChannel {
    const message = createBaseAudio_PhysicalChannel();
    message.index = object.index ?? 0;
    message.muteEnable = object.muteEnable ?? false;
    message.soloEnable = object.soloEnable ?? false;
    message.toneEnable = object.toneEnable ?? false;
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
