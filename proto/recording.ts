/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { DigitalAudio_Device_Map } from './digitalAudio';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Recording {}

export interface Recording_SettingsDocument {
  streams: Recording_Stream[];
  presets: Recording_Preset[];
  activePreset: Recording_Preset | undefined;
}

export interface Recording_Preset {
  id: UUID | undefined;
  name: string;
  streams: Recording_Stream[];
}

export interface Recording_Stream {
  id: UUID | undefined;
  encoder: Recording_Stream_Encoder | undefined;
  destinations: Recording_Stream_Destination[];
  audioMap: DigitalAudio_Device_Map[];
  isAudioCustomMapped: boolean;
  outputScreen?: Recording_Stream_OutputScreenSource | undefined;
}

export enum Recording_Stream_Container {
  CONTAINER_UNKNOWN = 0,
  CONTAINER_MOV = 1,
  CONTAINER_MP4 = 2,
  UNRECOGNIZED = -1,
}

export function recording_Stream_ContainerFromJSON(
  object: any,
): Recording_Stream_Container {
  switch (object) {
    case 0:
    case 'CONTAINER_UNKNOWN':
      return Recording_Stream_Container.CONTAINER_UNKNOWN;
    case 1:
    case 'CONTAINER_MOV':
      return Recording_Stream_Container.CONTAINER_MOV;
    case 2:
    case 'CONTAINER_MP4':
      return Recording_Stream_Container.CONTAINER_MP4;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Recording_Stream_Container.UNRECOGNIZED;
  }
}

export function recording_Stream_ContainerToJSON(
  object: Recording_Stream_Container,
): string {
  switch (object) {
    case Recording_Stream_Container.CONTAINER_UNKNOWN:
      return 'CONTAINER_UNKNOWN';
    case Recording_Stream_Container.CONTAINER_MOV:
      return 'CONTAINER_MOV';
    case Recording_Stream_Container.CONTAINER_MP4:
      return 'CONTAINER_MP4';
    case Recording_Stream_Container.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Recording_Stream_Codec {
  CODEC_AUTOMATIC = 0,
  CODEC_H264 = 1,
  CODEC_H265 = 2,
  CODEC_PRORES_422_PROXY = 3,
  CODEC_PRORES_422_LT = 4,
  CODEC_PRORES_422 = 5,
  CODEC_PRORES_422_HQ = 6,
  CODEC_PRORES_4444 = 7,
  CODEC_PRORES_4444_XQ = 8,
  CODEC_HAP = 9,
  CODEC_HAP_ALPHA = 10,
  CODEC_HAP_Q = 11,
  CODEC_HAP_Q_ALPHA = 12,
  CODEC_NOTCH = 13,
  CODEC_H264_SOFTWARE = 14,
  CODEC_H265_SOFTWARE = 15,
  UNRECOGNIZED = -1,
}

export function recording_Stream_CodecFromJSON(
  object: any,
): Recording_Stream_Codec {
  switch (object) {
    case 0:
    case 'CODEC_AUTOMATIC':
      return Recording_Stream_Codec.CODEC_AUTOMATIC;
    case 1:
    case 'CODEC_H264':
      return Recording_Stream_Codec.CODEC_H264;
    case 2:
    case 'CODEC_H265':
      return Recording_Stream_Codec.CODEC_H265;
    case 3:
    case 'CODEC_PRORES_422_PROXY':
      return Recording_Stream_Codec.CODEC_PRORES_422_PROXY;
    case 4:
    case 'CODEC_PRORES_422_LT':
      return Recording_Stream_Codec.CODEC_PRORES_422_LT;
    case 5:
    case 'CODEC_PRORES_422':
      return Recording_Stream_Codec.CODEC_PRORES_422;
    case 6:
    case 'CODEC_PRORES_422_HQ':
      return Recording_Stream_Codec.CODEC_PRORES_422_HQ;
    case 7:
    case 'CODEC_PRORES_4444':
      return Recording_Stream_Codec.CODEC_PRORES_4444;
    case 8:
    case 'CODEC_PRORES_4444_XQ':
      return Recording_Stream_Codec.CODEC_PRORES_4444_XQ;
    case 9:
    case 'CODEC_HAP':
      return Recording_Stream_Codec.CODEC_HAP;
    case 10:
    case 'CODEC_HAP_ALPHA':
      return Recording_Stream_Codec.CODEC_HAP_ALPHA;
    case 11:
    case 'CODEC_HAP_Q':
      return Recording_Stream_Codec.CODEC_HAP_Q;
    case 12:
    case 'CODEC_HAP_Q_ALPHA':
      return Recording_Stream_Codec.CODEC_HAP_Q_ALPHA;
    case 13:
    case 'CODEC_NOTCH':
      return Recording_Stream_Codec.CODEC_NOTCH;
    case 14:
    case 'CODEC_H264_SOFTWARE':
      return Recording_Stream_Codec.CODEC_H264_SOFTWARE;
    case 15:
    case 'CODEC_H265_SOFTWARE':
      return Recording_Stream_Codec.CODEC_H265_SOFTWARE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Recording_Stream_Codec.UNRECOGNIZED;
  }
}

export function recording_Stream_CodecToJSON(
  object: Recording_Stream_Codec,
): string {
  switch (object) {
    case Recording_Stream_Codec.CODEC_AUTOMATIC:
      return 'CODEC_AUTOMATIC';
    case Recording_Stream_Codec.CODEC_H264:
      return 'CODEC_H264';
    case Recording_Stream_Codec.CODEC_H265:
      return 'CODEC_H265';
    case Recording_Stream_Codec.CODEC_PRORES_422_PROXY:
      return 'CODEC_PRORES_422_PROXY';
    case Recording_Stream_Codec.CODEC_PRORES_422_LT:
      return 'CODEC_PRORES_422_LT';
    case Recording_Stream_Codec.CODEC_PRORES_422:
      return 'CODEC_PRORES_422';
    case Recording_Stream_Codec.CODEC_PRORES_422_HQ:
      return 'CODEC_PRORES_422_HQ';
    case Recording_Stream_Codec.CODEC_PRORES_4444:
      return 'CODEC_PRORES_4444';
    case Recording_Stream_Codec.CODEC_PRORES_4444_XQ:
      return 'CODEC_PRORES_4444_XQ';
    case Recording_Stream_Codec.CODEC_HAP:
      return 'CODEC_HAP';
    case Recording_Stream_Codec.CODEC_HAP_ALPHA:
      return 'CODEC_HAP_ALPHA';
    case Recording_Stream_Codec.CODEC_HAP_Q:
      return 'CODEC_HAP_Q';
    case Recording_Stream_Codec.CODEC_HAP_Q_ALPHA:
      return 'CODEC_HAP_Q_ALPHA';
    case Recording_Stream_Codec.CODEC_NOTCH:
      return 'CODEC_NOTCH';
    case Recording_Stream_Codec.CODEC_H264_SOFTWARE:
      return 'CODEC_H264_SOFTWARE';
    case Recording_Stream_Codec.CODEC_H265_SOFTWARE:
      return 'CODEC_H265_SOFTWARE';
    case Recording_Stream_Codec.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Recording_Stream_FrameRate {
  FRAME_RATE_UNKNOWN = 0,
  FRAME_RATE_24 = 1,
  FRAME_RATE_25 = 2,
  FRAME_RATE_29_97 = 3,
  FRAME_RATE_30 = 4,
  FRAME_RATE_50 = 5,
  FRAME_RATE_59_94 = 6,
  FRAME_RATE_60 = 7,
  UNRECOGNIZED = -1,
}

export function recording_Stream_FrameRateFromJSON(
  object: any,
): Recording_Stream_FrameRate {
  switch (object) {
    case 0:
    case 'FRAME_RATE_UNKNOWN':
      return Recording_Stream_FrameRate.FRAME_RATE_UNKNOWN;
    case 1:
    case 'FRAME_RATE_24':
      return Recording_Stream_FrameRate.FRAME_RATE_24;
    case 2:
    case 'FRAME_RATE_25':
      return Recording_Stream_FrameRate.FRAME_RATE_25;
    case 3:
    case 'FRAME_RATE_29_97':
      return Recording_Stream_FrameRate.FRAME_RATE_29_97;
    case 4:
    case 'FRAME_RATE_30':
      return Recording_Stream_FrameRate.FRAME_RATE_30;
    case 5:
    case 'FRAME_RATE_50':
      return Recording_Stream_FrameRate.FRAME_RATE_50;
    case 6:
    case 'FRAME_RATE_59_94':
      return Recording_Stream_FrameRate.FRAME_RATE_59_94;
    case 7:
    case 'FRAME_RATE_60':
      return Recording_Stream_FrameRate.FRAME_RATE_60;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Recording_Stream_FrameRate.UNRECOGNIZED;
  }
}

export function recording_Stream_FrameRateToJSON(
  object: Recording_Stream_FrameRate,
): string {
  switch (object) {
    case Recording_Stream_FrameRate.FRAME_RATE_UNKNOWN:
      return 'FRAME_RATE_UNKNOWN';
    case Recording_Stream_FrameRate.FRAME_RATE_24:
      return 'FRAME_RATE_24';
    case Recording_Stream_FrameRate.FRAME_RATE_25:
      return 'FRAME_RATE_25';
    case Recording_Stream_FrameRate.FRAME_RATE_29_97:
      return 'FRAME_RATE_29_97';
    case Recording_Stream_FrameRate.FRAME_RATE_30:
      return 'FRAME_RATE_30';
    case Recording_Stream_FrameRate.FRAME_RATE_50:
      return 'FRAME_RATE_50';
    case Recording_Stream_FrameRate.FRAME_RATE_59_94:
      return 'FRAME_RATE_59_94';
    case Recording_Stream_FrameRate.FRAME_RATE_60:
      return 'FRAME_RATE_60';
    case Recording_Stream_FrameRate.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Recording_Stream_Encoder {
  codec: Recording_Stream_Codec;
  videoWidth: number;
  videoHeight: number;
  isInterlaced: boolean;
  frameRate: Recording_Stream_FrameRate;
  videoBitrate: number;
  audioBitrate: number;
}

export interface Recording_Stream_OutputScreenSource {
  screenId: UUID | undefined;
  screenName: string;
}

export interface Recording_Stream_DiskDestination {
  location: URL | undefined;
  container: Recording_Stream_Container;
}

export interface Recording_Stream_RTMPDestination {
  address: string;
  key: string;
}

export interface Recording_Stream_Destination {
  disk?: Recording_Stream_DiskDestination | undefined;
  rtmp?: Recording_Stream_RTMPDestination | undefined;
  resi?: Recording_Stream_Destination_Resi | undefined;
}

export interface Recording_Stream_Destination_Resi {
  destinationGroupId: UUID | undefined;
  encoderProfileId: UUID | undefined;
}

function createBaseRecording(): Recording {
  return {};
}

export const Recording = {
  encode(_: Recording, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recording {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording();
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

  fromJSON(_: any): Recording {
    return {};
  },

  toJSON(_: Recording): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording>, I>>(base?: I): Recording {
    return Recording.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording>, I>>(_: I): Recording {
    const message = createBaseRecording();
    return message;
  },
};

function createBaseRecording_SettingsDocument(): Recording_SettingsDocument {
  return { streams: [], presets: [], activePreset: undefined };
}

export const Recording_SettingsDocument = {
  encode(
    message: Recording_SettingsDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.streams) {
      Recording_Stream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.presets) {
      Recording_Preset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.activePreset !== undefined) {
      Recording_Preset.encode(
        message.activePreset,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_SettingsDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_SettingsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.streams.push(
            Recording_Stream.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presets.push(
            Recording_Preset.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.activePreset = Recording_Preset.decode(
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

  fromJSON(object: any): Recording_SettingsDocument {
    return {
      streams: globalThis.Array.isArray(object?.streams)
        ? object.streams.map((e: any) => Recording_Stream.fromJSON(e))
        : [],
      presets: globalThis.Array.isArray(object?.presets)
        ? object.presets.map((e: any) => Recording_Preset.fromJSON(e))
        : [],
      activePreset: isSet(object.activePreset)
        ? Recording_Preset.fromJSON(object.activePreset)
        : undefined,
    };
  },

  toJSON(message: Recording_SettingsDocument): unknown {
    const obj: any = {};
    if (message.streams?.length) {
      obj.streams = message.streams.map((e) => Recording_Stream.toJSON(e));
    }
    if (message.presets?.length) {
      obj.presets = message.presets.map((e) => Recording_Preset.toJSON(e));
    }
    if (message.activePreset !== undefined) {
      obj.activePreset = Recording_Preset.toJSON(message.activePreset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_SettingsDocument>, I>>(
    base?: I,
  ): Recording_SettingsDocument {
    return Recording_SettingsDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording_SettingsDocument>, I>>(
    object: I,
  ): Recording_SettingsDocument {
    const message = createBaseRecording_SettingsDocument();
    message.streams =
      object.streams?.map((e) => Recording_Stream.fromPartial(e)) || [];
    message.presets =
      object.presets?.map((e) => Recording_Preset.fromPartial(e)) || [];
    message.activePreset =
      object.activePreset !== undefined && object.activePreset !== null
        ? Recording_Preset.fromPartial(object.activePreset)
        : undefined;
    return message;
  },
};

function createBaseRecording_Preset(): Recording_Preset {
  return { id: undefined, name: '', streams: [] };
}

export const Recording_Preset = {
  encode(
    message: Recording_Preset,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.streams) {
      Recording_Stream.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recording_Preset {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Preset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.streams.push(
            Recording_Stream.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Recording_Preset {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      streams: globalThis.Array.isArray(object?.streams)
        ? object.streams.map((e: any) => Recording_Stream.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Recording_Preset): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.streams?.length) {
      obj.streams = message.streams.map((e) => Recording_Stream.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Preset>, I>>(
    base?: I,
  ): Recording_Preset {
    return Recording_Preset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording_Preset>, I>>(
    object: I,
  ): Recording_Preset {
    const message = createBaseRecording_Preset();
    message.id =
      object.id !== undefined && object.id !== null
        ? UUID.fromPartial(object.id)
        : undefined;
    message.name = object.name ?? '';
    message.streams =
      object.streams?.map((e) => Recording_Stream.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecording_Stream(): Recording_Stream {
  return {
    id: undefined,
    encoder: undefined,
    destinations: [],
    audioMap: [],
    isAudioCustomMapped: false,
    outputScreen: undefined,
  };
}

export const Recording_Stream = {
  encode(
    message: Recording_Stream,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.encoder !== undefined) {
      Recording_Stream_Encoder.encode(
        message.encoder,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.destinations) {
      Recording_Stream_Destination.encode(
        v!,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    for (const v of message.audioMap) {
      DigitalAudio_Device_Map.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.isAudioCustomMapped !== false) {
      writer.uint32(48).bool(message.isAudioCustomMapped);
    }
    if (message.outputScreen !== undefined) {
      Recording_Stream_OutputScreenSource.encode(
        message.outputScreen,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recording_Stream {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.encoder = Recording_Stream_Encoder.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.destinations.push(
            Recording_Stream_Destination.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.audioMap.push(
            DigitalAudio_Device_Map.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isAudioCustomMapped = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputScreen = Recording_Stream_OutputScreenSource.decode(
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

  fromJSON(object: any): Recording_Stream {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      encoder: isSet(object.encoder)
        ? Recording_Stream_Encoder.fromJSON(object.encoder)
        : undefined,
      destinations: globalThis.Array.isArray(object?.destinations)
        ? object.destinations.map((e: any) =>
            Recording_Stream_Destination.fromJSON(e),
          )
        : [],
      audioMap: globalThis.Array.isArray(object?.audioMap)
        ? object.audioMap.map((e: any) => DigitalAudio_Device_Map.fromJSON(e))
        : [],
      isAudioCustomMapped: isSet(object.isAudioCustomMapped)
        ? globalThis.Boolean(object.isAudioCustomMapped)
        : false,
      outputScreen: isSet(object.outputScreen)
        ? Recording_Stream_OutputScreenSource.fromJSON(object.outputScreen)
        : undefined,
    };
  },

  toJSON(message: Recording_Stream): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.encoder !== undefined) {
      obj.encoder = Recording_Stream_Encoder.toJSON(message.encoder);
    }
    if (message.destinations?.length) {
      obj.destinations = message.destinations.map((e) =>
        Recording_Stream_Destination.toJSON(e),
      );
    }
    if (message.audioMap?.length) {
      obj.audioMap = message.audioMap.map((e) =>
        DigitalAudio_Device_Map.toJSON(e),
      );
    }
    if (message.isAudioCustomMapped !== false) {
      obj.isAudioCustomMapped = message.isAudioCustomMapped;
    }
    if (message.outputScreen !== undefined) {
      obj.outputScreen = Recording_Stream_OutputScreenSource.toJSON(
        message.outputScreen,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream>, I>>(
    base?: I,
  ): Recording_Stream {
    return Recording_Stream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording_Stream>, I>>(
    object: I,
  ): Recording_Stream {
    const message = createBaseRecording_Stream();
    message.id =
      object.id !== undefined && object.id !== null
        ? UUID.fromPartial(object.id)
        : undefined;
    message.encoder =
      object.encoder !== undefined && object.encoder !== null
        ? Recording_Stream_Encoder.fromPartial(object.encoder)
        : undefined;
    message.destinations =
      object.destinations?.map((e) =>
        Recording_Stream_Destination.fromPartial(e),
      ) || [];
    message.audioMap =
      object.audioMap?.map((e) => DigitalAudio_Device_Map.fromPartial(e)) || [];
    message.isAudioCustomMapped = object.isAudioCustomMapped ?? false;
    message.outputScreen =
      object.outputScreen !== undefined && object.outputScreen !== null
        ? Recording_Stream_OutputScreenSource.fromPartial(object.outputScreen)
        : undefined;
    return message;
  },
};

function createBaseRecording_Stream_Encoder(): Recording_Stream_Encoder {
  return {
    codec: 0,
    videoWidth: 0,
    videoHeight: 0,
    isInterlaced: false,
    frameRate: 0,
    videoBitrate: 0,
    audioBitrate: 0,
  };
}

export const Recording_Stream_Encoder = {
  encode(
    message: Recording_Stream_Encoder,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.codec !== 0) {
      writer.uint32(8).int32(message.codec);
    }
    if (message.videoWidth !== 0) {
      writer.uint32(16).uint32(message.videoWidth);
    }
    if (message.videoHeight !== 0) {
      writer.uint32(24).uint32(message.videoHeight);
    }
    if (message.isInterlaced !== false) {
      writer.uint32(32).bool(message.isInterlaced);
    }
    if (message.frameRate !== 0) {
      writer.uint32(40).int32(message.frameRate);
    }
    if (message.videoBitrate !== 0) {
      writer.uint32(48).uint32(message.videoBitrate);
    }
    if (message.audioBitrate !== 0) {
      writer.uint32(56).uint32(message.audioBitrate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_Encoder {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_Encoder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codec = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.videoWidth = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.videoHeight = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isInterlaced = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.frameRate = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.videoBitrate = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.audioBitrate = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording_Stream_Encoder {
    return {
      codec: isSet(object.codec)
        ? recording_Stream_CodecFromJSON(object.codec)
        : 0,
      videoWidth: isSet(object.videoWidth)
        ? globalThis.Number(object.videoWidth)
        : 0,
      videoHeight: isSet(object.videoHeight)
        ? globalThis.Number(object.videoHeight)
        : 0,
      isInterlaced: isSet(object.isInterlaced)
        ? globalThis.Boolean(object.isInterlaced)
        : false,
      frameRate: isSet(object.frameRate)
        ? recording_Stream_FrameRateFromJSON(object.frameRate)
        : 0,
      videoBitrate: isSet(object.videoBitrate)
        ? globalThis.Number(object.videoBitrate)
        : 0,
      audioBitrate: isSet(object.audioBitrate)
        ? globalThis.Number(object.audioBitrate)
        : 0,
    };
  },

  toJSON(message: Recording_Stream_Encoder): unknown {
    const obj: any = {};
    if (message.codec !== 0) {
      obj.codec = recording_Stream_CodecToJSON(message.codec);
    }
    if (message.videoWidth !== 0) {
      obj.videoWidth = Math.round(message.videoWidth);
    }
    if (message.videoHeight !== 0) {
      obj.videoHeight = Math.round(message.videoHeight);
    }
    if (message.isInterlaced !== false) {
      obj.isInterlaced = message.isInterlaced;
    }
    if (message.frameRate !== 0) {
      obj.frameRate = recording_Stream_FrameRateToJSON(message.frameRate);
    }
    if (message.videoBitrate !== 0) {
      obj.videoBitrate = Math.round(message.videoBitrate);
    }
    if (message.audioBitrate !== 0) {
      obj.audioBitrate = Math.round(message.audioBitrate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_Encoder>, I>>(
    base?: I,
  ): Recording_Stream_Encoder {
    return Recording_Stream_Encoder.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording_Stream_Encoder>, I>>(
    object: I,
  ): Recording_Stream_Encoder {
    const message = createBaseRecording_Stream_Encoder();
    message.codec = object.codec ?? 0;
    message.videoWidth = object.videoWidth ?? 0;
    message.videoHeight = object.videoHeight ?? 0;
    message.isInterlaced = object.isInterlaced ?? false;
    message.frameRate = object.frameRate ?? 0;
    message.videoBitrate = object.videoBitrate ?? 0;
    message.audioBitrate = object.audioBitrate ?? 0;
    return message;
  },
};

function createBaseRecording_Stream_OutputScreenSource(): Recording_Stream_OutputScreenSource {
  return { screenId: undefined, screenName: '' };
}

export const Recording_Stream_OutputScreenSource = {
  encode(
    message: Recording_Stream_OutputScreenSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.screenId !== undefined) {
      UUID.encode(message.screenId, writer.uint32(10).fork()).ldelim();
    }
    if (message.screenName !== '') {
      writer.uint32(18).string(message.screenName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_OutputScreenSource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_OutputScreenSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.screenId = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screenName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording_Stream_OutputScreenSource {
    return {
      screenId: isSet(object.screenId)
        ? UUID.fromJSON(object.screenId)
        : undefined,
      screenName: isSet(object.screenName)
        ? globalThis.String(object.screenName)
        : '',
    };
  },

  toJSON(message: Recording_Stream_OutputScreenSource): unknown {
    const obj: any = {};
    if (message.screenId !== undefined) {
      obj.screenId = UUID.toJSON(message.screenId);
    }
    if (message.screenName !== '') {
      obj.screenName = message.screenName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_OutputScreenSource>, I>>(
    base?: I,
  ): Recording_Stream_OutputScreenSource {
    return Recording_Stream_OutputScreenSource.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Recording_Stream_OutputScreenSource>, I>,
  >(object: I): Recording_Stream_OutputScreenSource {
    const message = createBaseRecording_Stream_OutputScreenSource();
    message.screenId =
      object.screenId !== undefined && object.screenId !== null
        ? UUID.fromPartial(object.screenId)
        : undefined;
    message.screenName = object.screenName ?? '';
    return message;
  },
};

function createBaseRecording_Stream_DiskDestination(): Recording_Stream_DiskDestination {
  return { location: undefined, container: 0 };
}

export const Recording_Stream_DiskDestination = {
  encode(
    message: Recording_Stream_DiskDestination,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.location !== undefined) {
      URL.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.container !== 0) {
      writer.uint32(16).int32(message.container);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_DiskDestination {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_DiskDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = URL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.container = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording_Stream_DiskDestination {
    return {
      location: isSet(object.location)
        ? URL.fromJSON(object.location)
        : undefined,
      container: isSet(object.container)
        ? recording_Stream_ContainerFromJSON(object.container)
        : 0,
    };
  },

  toJSON(message: Recording_Stream_DiskDestination): unknown {
    const obj: any = {};
    if (message.location !== undefined) {
      obj.location = URL.toJSON(message.location);
    }
    if (message.container !== 0) {
      obj.container = recording_Stream_ContainerToJSON(message.container);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_DiskDestination>, I>>(
    base?: I,
  ): Recording_Stream_DiskDestination {
    return Recording_Stream_DiskDestination.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Recording_Stream_DiskDestination>, I>,
  >(object: I): Recording_Stream_DiskDestination {
    const message = createBaseRecording_Stream_DiskDestination();
    message.location =
      object.location !== undefined && object.location !== null
        ? URL.fromPartial(object.location)
        : undefined;
    message.container = object.container ?? 0;
    return message;
  },
};

function createBaseRecording_Stream_RTMPDestination(): Recording_Stream_RTMPDestination {
  return { address: '', key: '' };
}

export const Recording_Stream_RTMPDestination = {
  encode(
    message: Recording_Stream_RTMPDestination,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== '') {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_RTMPDestination {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_RTMPDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording_Stream_RTMPDestination {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : '',
      key: isSet(object.key) ? globalThis.String(object.key) : '',
    };
  },

  toJSON(message: Recording_Stream_RTMPDestination): unknown {
    const obj: any = {};
    if (message.address !== '') {
      obj.address = message.address;
    }
    if (message.key !== '') {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_RTMPDestination>, I>>(
    base?: I,
  ): Recording_Stream_RTMPDestination {
    return Recording_Stream_RTMPDestination.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Recording_Stream_RTMPDestination>, I>,
  >(object: I): Recording_Stream_RTMPDestination {
    const message = createBaseRecording_Stream_RTMPDestination();
    message.address = object.address ?? '';
    message.key = object.key ?? '';
    return message;
  },
};

function createBaseRecording_Stream_Destination(): Recording_Stream_Destination {
  return { disk: undefined, rtmp: undefined, resi: undefined };
}

export const Recording_Stream_Destination = {
  encode(
    message: Recording_Stream_Destination,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.disk !== undefined) {
      Recording_Stream_DiskDestination.encode(
        message.disk,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.rtmp !== undefined) {
      Recording_Stream_RTMPDestination.encode(
        message.rtmp,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.resi !== undefined) {
      Recording_Stream_Destination_Resi.encode(
        message.resi,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_Destination {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_Destination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.disk = Recording_Stream_DiskDestination.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rtmp = Recording_Stream_RTMPDestination.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resi = Recording_Stream_Destination_Resi.decode(
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

  fromJSON(object: any): Recording_Stream_Destination {
    return {
      disk: isSet(object.disk)
        ? Recording_Stream_DiskDestination.fromJSON(object.disk)
        : undefined,
      rtmp: isSet(object.rtmp)
        ? Recording_Stream_RTMPDestination.fromJSON(object.rtmp)
        : undefined,
      resi: isSet(object.resi)
        ? Recording_Stream_Destination_Resi.fromJSON(object.resi)
        : undefined,
    };
  },

  toJSON(message: Recording_Stream_Destination): unknown {
    const obj: any = {};
    if (message.disk !== undefined) {
      obj.disk = Recording_Stream_DiskDestination.toJSON(message.disk);
    }
    if (message.rtmp !== undefined) {
      obj.rtmp = Recording_Stream_RTMPDestination.toJSON(message.rtmp);
    }
    if (message.resi !== undefined) {
      obj.resi = Recording_Stream_Destination_Resi.toJSON(message.resi);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_Destination>, I>>(
    base?: I,
  ): Recording_Stream_Destination {
    return Recording_Stream_Destination.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Recording_Stream_Destination>, I>>(
    object: I,
  ): Recording_Stream_Destination {
    const message = createBaseRecording_Stream_Destination();
    message.disk =
      object.disk !== undefined && object.disk !== null
        ? Recording_Stream_DiskDestination.fromPartial(object.disk)
        : undefined;
    message.rtmp =
      object.rtmp !== undefined && object.rtmp !== null
        ? Recording_Stream_RTMPDestination.fromPartial(object.rtmp)
        : undefined;
    message.resi =
      object.resi !== undefined && object.resi !== null
        ? Recording_Stream_Destination_Resi.fromPartial(object.resi)
        : undefined;
    return message;
  },
};

function createBaseRecording_Stream_Destination_Resi(): Recording_Stream_Destination_Resi {
  return { destinationGroupId: undefined, encoderProfileId: undefined };
}

export const Recording_Stream_Destination_Resi = {
  encode(
    message: Recording_Stream_Destination_Resi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.destinationGroupId !== undefined) {
      UUID.encode(
        message.destinationGroupId,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.encoderProfileId !== undefined) {
      UUID.encode(message.encoderProfileId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Recording_Stream_Destination_Resi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecording_Stream_Destination_Resi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destinationGroupId = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.encoderProfileId = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Recording_Stream_Destination_Resi {
    return {
      destinationGroupId: isSet(object.destinationGroupId)
        ? UUID.fromJSON(object.destinationGroupId)
        : undefined,
      encoderProfileId: isSet(object.encoderProfileId)
        ? UUID.fromJSON(object.encoderProfileId)
        : undefined,
    };
  },

  toJSON(message: Recording_Stream_Destination_Resi): unknown {
    const obj: any = {};
    if (message.destinationGroupId !== undefined) {
      obj.destinationGroupId = UUID.toJSON(message.destinationGroupId);
    }
    if (message.encoderProfileId !== undefined) {
      obj.encoderProfileId = UUID.toJSON(message.encoderProfileId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Recording_Stream_Destination_Resi>, I>>(
    base?: I,
  ): Recording_Stream_Destination_Resi {
    return Recording_Stream_Destination_Resi.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Recording_Stream_Destination_Resi>, I>,
  >(object: I): Recording_Stream_Destination_Resi {
    const message = createBaseRecording_Stream_Destination_Resi();
    message.destinationGroupId =
      object.destinationGroupId !== undefined &&
      object.destinationGroupId !== null
        ? UUID.fromPartial(object.destinationGroupId)
        : undefined;
    message.encoderProfileId =
      object.encoderProfileId !== undefined && object.encoderProfileId !== null
        ? UUID.fromPartial(object.encoderProfileId)
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
