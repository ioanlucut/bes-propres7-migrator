/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.analytics';

export interface Capture {
  start?: Capture_Start | undefined;
}

export enum Capture_Codec {
  CODEC_UNKNOWN = 0,
  CODEC_AUTOMATIC = 1,
  CODEC_H264 = 2,
  CODEC_H264_SOFTWARE = 3,
  CODEC_H265 = 4,
  CODEC_H265_SOFTWARE = 5,
  CODEC_PRORES_422_PROXY = 6,
  CODEC_PRORES_422_LT = 7,
  CODEC_PRORES_422 = 8,
  CODEC_PRORES_422_HQ = 9,
  CODEC_PRORES_4444 = 10,
  CODEC_PRORES_4444_XQ = 11,
  CODEC_HAP = 12,
  CODEC_HAP_ALPHA = 13,
  CODEC_HAP_Q = 14,
  CODEC_HAP_Q_ALPHA = 15,
  CODEC_NOTCH = 16,
  UNRECOGNIZED = -1,
}

export function capture_CodecFromJSON(object: any): Capture_Codec {
  switch (object) {
    case 0:
    case 'CODEC_UNKNOWN':
      return Capture_Codec.CODEC_UNKNOWN;
    case 1:
    case 'CODEC_AUTOMATIC':
      return Capture_Codec.CODEC_AUTOMATIC;
    case 2:
    case 'CODEC_H264':
      return Capture_Codec.CODEC_H264;
    case 3:
    case 'CODEC_H264_SOFTWARE':
      return Capture_Codec.CODEC_H264_SOFTWARE;
    case 4:
    case 'CODEC_H265':
      return Capture_Codec.CODEC_H265;
    case 5:
    case 'CODEC_H265_SOFTWARE':
      return Capture_Codec.CODEC_H265_SOFTWARE;
    case 6:
    case 'CODEC_PRORES_422_PROXY':
      return Capture_Codec.CODEC_PRORES_422_PROXY;
    case 7:
    case 'CODEC_PRORES_422_LT':
      return Capture_Codec.CODEC_PRORES_422_LT;
    case 8:
    case 'CODEC_PRORES_422':
      return Capture_Codec.CODEC_PRORES_422;
    case 9:
    case 'CODEC_PRORES_422_HQ':
      return Capture_Codec.CODEC_PRORES_422_HQ;
    case 10:
    case 'CODEC_PRORES_4444':
      return Capture_Codec.CODEC_PRORES_4444;
    case 11:
    case 'CODEC_PRORES_4444_XQ':
      return Capture_Codec.CODEC_PRORES_4444_XQ;
    case 12:
    case 'CODEC_HAP':
      return Capture_Codec.CODEC_HAP;
    case 13:
    case 'CODEC_HAP_ALPHA':
      return Capture_Codec.CODEC_HAP_ALPHA;
    case 14:
    case 'CODEC_HAP_Q':
      return Capture_Codec.CODEC_HAP_Q;
    case 15:
    case 'CODEC_HAP_Q_ALPHA':
      return Capture_Codec.CODEC_HAP_Q_ALPHA;
    case 16:
    case 'CODEC_NOTCH':
      return Capture_Codec.CODEC_NOTCH;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Capture_Codec.UNRECOGNIZED;
  }
}

export function capture_CodecToJSON(object: Capture_Codec): string {
  switch (object) {
    case Capture_Codec.CODEC_UNKNOWN:
      return 'CODEC_UNKNOWN';
    case Capture_Codec.CODEC_AUTOMATIC:
      return 'CODEC_AUTOMATIC';
    case Capture_Codec.CODEC_H264:
      return 'CODEC_H264';
    case Capture_Codec.CODEC_H264_SOFTWARE:
      return 'CODEC_H264_SOFTWARE';
    case Capture_Codec.CODEC_H265:
      return 'CODEC_H265';
    case Capture_Codec.CODEC_H265_SOFTWARE:
      return 'CODEC_H265_SOFTWARE';
    case Capture_Codec.CODEC_PRORES_422_PROXY:
      return 'CODEC_PRORES_422_PROXY';
    case Capture_Codec.CODEC_PRORES_422_LT:
      return 'CODEC_PRORES_422_LT';
    case Capture_Codec.CODEC_PRORES_422:
      return 'CODEC_PRORES_422';
    case Capture_Codec.CODEC_PRORES_422_HQ:
      return 'CODEC_PRORES_422_HQ';
    case Capture_Codec.CODEC_PRORES_4444:
      return 'CODEC_PRORES_4444';
    case Capture_Codec.CODEC_PRORES_4444_XQ:
      return 'CODEC_PRORES_4444_XQ';
    case Capture_Codec.CODEC_HAP:
      return 'CODEC_HAP';
    case Capture_Codec.CODEC_HAP_ALPHA:
      return 'CODEC_HAP_ALPHA';
    case Capture_Codec.CODEC_HAP_Q:
      return 'CODEC_HAP_Q';
    case Capture_Codec.CODEC_HAP_Q_ALPHA:
      return 'CODEC_HAP_Q_ALPHA';
    case Capture_Codec.CODEC_NOTCH:
      return 'CODEC_NOTCH';
    case Capture_Codec.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum Capture_FrameRate {
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

export function capture_FrameRateFromJSON(object: any): Capture_FrameRate {
  switch (object) {
    case 0:
    case 'FRAME_RATE_UNKNOWN':
      return Capture_FrameRate.FRAME_RATE_UNKNOWN;
    case 1:
    case 'FRAME_RATE_24':
      return Capture_FrameRate.FRAME_RATE_24;
    case 2:
    case 'FRAME_RATE_25':
      return Capture_FrameRate.FRAME_RATE_25;
    case 3:
    case 'FRAME_RATE_29_97':
      return Capture_FrameRate.FRAME_RATE_29_97;
    case 4:
    case 'FRAME_RATE_30':
      return Capture_FrameRate.FRAME_RATE_30;
    case 5:
    case 'FRAME_RATE_50':
      return Capture_FrameRate.FRAME_RATE_50;
    case 6:
    case 'FRAME_RATE_59_94':
      return Capture_FrameRate.FRAME_RATE_59_94;
    case 7:
    case 'FRAME_RATE_60':
      return Capture_FrameRate.FRAME_RATE_60;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Capture_FrameRate.UNRECOGNIZED;
  }
}

export function capture_FrameRateToJSON(object: Capture_FrameRate): string {
  switch (object) {
    case Capture_FrameRate.FRAME_RATE_UNKNOWN:
      return 'FRAME_RATE_UNKNOWN';
    case Capture_FrameRate.FRAME_RATE_24:
      return 'FRAME_RATE_24';
    case Capture_FrameRate.FRAME_RATE_25:
      return 'FRAME_RATE_25';
    case Capture_FrameRate.FRAME_RATE_29_97:
      return 'FRAME_RATE_29_97';
    case Capture_FrameRate.FRAME_RATE_30:
      return 'FRAME_RATE_30';
    case Capture_FrameRate.FRAME_RATE_50:
      return 'FRAME_RATE_50';
    case Capture_FrameRate.FRAME_RATE_59_94:
      return 'FRAME_RATE_59_94';
    case Capture_FrameRate.FRAME_RATE_60:
      return 'FRAME_RATE_60';
    case Capture_FrameRate.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Capture_Resolution {
  width: number;
  height: number;
}

export interface Capture_Start {
  rtmp?: Capture_Start_RTMP | undefined;
  disk?: Capture_Start_Disk | undefined;
  resi?: Capture_Start_Resi | undefined;
}

export interface Capture_Start_RTMP {
  codec: Capture_Codec;
  frameRate: Capture_FrameRate;
  host: string;
  resolution: Capture_Resolution | undefined;
  streamStarted: boolean;
  videoBitrate: number;
}

export interface Capture_Start_Disk {
  codec: Capture_Codec;
  frameRate: Capture_FrameRate;
  resolution: Capture_Resolution | undefined;
  streamStarted: boolean;
  videoBitrate: number;
}

export interface Capture_Start_Resi {
  codec: Capture_Codec;
  frameRate: Capture_FrameRate;
  resolution: Capture_Resolution | undefined;
  streamStarted: boolean;
  videoBitrate: number;
}

function createBaseCapture(): Capture {
  return { start: undefined };
}

export const Capture = {
  encode(
    message: Capture,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.start !== undefined) {
      Capture_Start.encode(message.start, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start = Capture_Start.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Capture {
    return {
      start: isSet(object.start)
        ? Capture_Start.fromJSON(object.start)
        : undefined,
    };
  },

  toJSON(message: Capture): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = Capture_Start.toJSON(message.start);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture>, I>>(base?: I): Capture {
    return Capture.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture>, I>>(object: I): Capture {
    const message = createBaseCapture();
    message.start =
      object.start !== undefined && object.start !== null
        ? Capture_Start.fromPartial(object.start)
        : undefined;
    return message;
  },
};

function createBaseCapture_Resolution(): Capture_Resolution {
  return { width: 0, height: 0 };
}

export const Capture_Resolution = {
  encode(
    message: Capture_Resolution,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture_Resolution {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture_Resolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
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

  fromJSON(object: any): Capture_Resolution {
    return {
      width: isSet(object.width) ? globalThis.Number(object.width) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: Capture_Resolution): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture_Resolution>, I>>(
    base?: I,
  ): Capture_Resolution {
    return Capture_Resolution.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture_Resolution>, I>>(
    object: I,
  ): Capture_Resolution {
    const message = createBaseCapture_Resolution();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseCapture_Start(): Capture_Start {
  return { rtmp: undefined, disk: undefined, resi: undefined };
}

export const Capture_Start = {
  encode(
    message: Capture_Start,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.rtmp !== undefined) {
      Capture_Start_RTMP.encode(
        message.rtmp,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.disk !== undefined) {
      Capture_Start_Disk.encode(
        message.disk,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.resi !== undefined) {
      Capture_Start_Resi.encode(
        message.resi,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture_Start {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture_Start();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rtmp = Capture_Start_RTMP.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.disk = Capture_Start_Disk.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resi = Capture_Start_Resi.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Capture_Start {
    return {
      rtmp: isSet(object.rtmp)
        ? Capture_Start_RTMP.fromJSON(object.rtmp)
        : undefined,
      disk: isSet(object.disk)
        ? Capture_Start_Disk.fromJSON(object.disk)
        : undefined,
      resi: isSet(object.resi)
        ? Capture_Start_Resi.fromJSON(object.resi)
        : undefined,
    };
  },

  toJSON(message: Capture_Start): unknown {
    const obj: any = {};
    if (message.rtmp !== undefined) {
      obj.rtmp = Capture_Start_RTMP.toJSON(message.rtmp);
    }
    if (message.disk !== undefined) {
      obj.disk = Capture_Start_Disk.toJSON(message.disk);
    }
    if (message.resi !== undefined) {
      obj.resi = Capture_Start_Resi.toJSON(message.resi);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture_Start>, I>>(
    base?: I,
  ): Capture_Start {
    return Capture_Start.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture_Start>, I>>(
    object: I,
  ): Capture_Start {
    const message = createBaseCapture_Start();
    message.rtmp =
      object.rtmp !== undefined && object.rtmp !== null
        ? Capture_Start_RTMP.fromPartial(object.rtmp)
        : undefined;
    message.disk =
      object.disk !== undefined && object.disk !== null
        ? Capture_Start_Disk.fromPartial(object.disk)
        : undefined;
    message.resi =
      object.resi !== undefined && object.resi !== null
        ? Capture_Start_Resi.fromPartial(object.resi)
        : undefined;
    return message;
  },
};

function createBaseCapture_Start_RTMP(): Capture_Start_RTMP {
  return {
    codec: 0,
    frameRate: 0,
    host: '',
    resolution: undefined,
    streamStarted: false,
    videoBitrate: 0,
  };
}

export const Capture_Start_RTMP = {
  encode(
    message: Capture_Start_RTMP,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.codec !== 0) {
      writer.uint32(8).int32(message.codec);
    }
    if (message.frameRate !== 0) {
      writer.uint32(16).int32(message.frameRate);
    }
    if (message.host !== '') {
      writer.uint32(26).string(message.host);
    }
    if (message.resolution !== undefined) {
      Capture_Resolution.encode(
        message.resolution,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.streamStarted === true) {
      writer.uint32(40).bool(message.streamStarted);
    }
    if (message.videoBitrate !== 0) {
      writer.uint32(48).int32(message.videoBitrate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture_Start_RTMP {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture_Start_RTMP();
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

          message.frameRate = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resolution = Capture_Resolution.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.streamStarted = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.videoBitrate = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Capture_Start_RTMP {
    return {
      codec: isSet(object.codec) ? capture_CodecFromJSON(object.codec) : 0,
      frameRate: isSet(object.frameRate)
        ? capture_FrameRateFromJSON(object.frameRate)
        : 0,
      host: isSet(object.host) ? globalThis.String(object.host) : '',
      resolution: isSet(object.resolution)
        ? Capture_Resolution.fromJSON(object.resolution)
        : undefined,
      streamStarted: isSet(object.streamStarted)
        ? globalThis.Boolean(object.streamStarted)
        : false,
      videoBitrate: isSet(object.videoBitrate)
        ? globalThis.Number(object.videoBitrate)
        : 0,
    };
  },

  toJSON(message: Capture_Start_RTMP): unknown {
    const obj: any = {};
    if (message.codec !== 0) {
      obj.codec = capture_CodecToJSON(message.codec);
    }
    if (message.frameRate !== 0) {
      obj.frameRate = capture_FrameRateToJSON(message.frameRate);
    }
    if (message.host !== '') {
      obj.host = message.host;
    }
    if (message.resolution !== undefined) {
      obj.resolution = Capture_Resolution.toJSON(message.resolution);
    }
    if (message.streamStarted === true) {
      obj.streamStarted = message.streamStarted;
    }
    if (message.videoBitrate !== 0) {
      obj.videoBitrate = Math.round(message.videoBitrate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture_Start_RTMP>, I>>(
    base?: I,
  ): Capture_Start_RTMP {
    return Capture_Start_RTMP.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture_Start_RTMP>, I>>(
    object: I,
  ): Capture_Start_RTMP {
    const message = createBaseCapture_Start_RTMP();
    message.codec = object.codec ?? 0;
    message.frameRate = object.frameRate ?? 0;
    message.host = object.host ?? '';
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Capture_Resolution.fromPartial(object.resolution)
        : undefined;
    message.streamStarted = object.streamStarted ?? false;
    message.videoBitrate = object.videoBitrate ?? 0;
    return message;
  },
};

function createBaseCapture_Start_Disk(): Capture_Start_Disk {
  return {
    codec: 0,
    frameRate: 0,
    resolution: undefined,
    streamStarted: false,
    videoBitrate: 0,
  };
}

export const Capture_Start_Disk = {
  encode(
    message: Capture_Start_Disk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.codec !== 0) {
      writer.uint32(8).int32(message.codec);
    }
    if (message.frameRate !== 0) {
      writer.uint32(16).int32(message.frameRate);
    }
    if (message.resolution !== undefined) {
      Capture_Resolution.encode(
        message.resolution,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.streamStarted === true) {
      writer.uint32(32).bool(message.streamStarted);
    }
    if (message.videoBitrate !== 0) {
      writer.uint32(40).int32(message.videoBitrate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture_Start_Disk {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture_Start_Disk();
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

          message.frameRate = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resolution = Capture_Resolution.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.streamStarted = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.videoBitrate = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Capture_Start_Disk {
    return {
      codec: isSet(object.codec) ? capture_CodecFromJSON(object.codec) : 0,
      frameRate: isSet(object.frameRate)
        ? capture_FrameRateFromJSON(object.frameRate)
        : 0,
      resolution: isSet(object.resolution)
        ? Capture_Resolution.fromJSON(object.resolution)
        : undefined,
      streamStarted: isSet(object.streamStarted)
        ? globalThis.Boolean(object.streamStarted)
        : false,
      videoBitrate: isSet(object.videoBitrate)
        ? globalThis.Number(object.videoBitrate)
        : 0,
    };
  },

  toJSON(message: Capture_Start_Disk): unknown {
    const obj: any = {};
    if (message.codec !== 0) {
      obj.codec = capture_CodecToJSON(message.codec);
    }
    if (message.frameRate !== 0) {
      obj.frameRate = capture_FrameRateToJSON(message.frameRate);
    }
    if (message.resolution !== undefined) {
      obj.resolution = Capture_Resolution.toJSON(message.resolution);
    }
    if (message.streamStarted === true) {
      obj.streamStarted = message.streamStarted;
    }
    if (message.videoBitrate !== 0) {
      obj.videoBitrate = Math.round(message.videoBitrate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture_Start_Disk>, I>>(
    base?: I,
  ): Capture_Start_Disk {
    return Capture_Start_Disk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture_Start_Disk>, I>>(
    object: I,
  ): Capture_Start_Disk {
    const message = createBaseCapture_Start_Disk();
    message.codec = object.codec ?? 0;
    message.frameRate = object.frameRate ?? 0;
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Capture_Resolution.fromPartial(object.resolution)
        : undefined;
    message.streamStarted = object.streamStarted ?? false;
    message.videoBitrate = object.videoBitrate ?? 0;
    return message;
  },
};

function createBaseCapture_Start_Resi(): Capture_Start_Resi {
  return {
    codec: 0,
    frameRate: 0,
    resolution: undefined,
    streamStarted: false,
    videoBitrate: 0,
  };
}

export const Capture_Start_Resi = {
  encode(
    message: Capture_Start_Resi,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.codec !== 0) {
      writer.uint32(8).int32(message.codec);
    }
    if (message.frameRate !== 0) {
      writer.uint32(16).int32(message.frameRate);
    }
    if (message.resolution !== undefined) {
      Capture_Resolution.encode(
        message.resolution,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.streamStarted === true) {
      writer.uint32(32).bool(message.streamStarted);
    }
    if (message.videoBitrate !== 0) {
      writer.uint32(40).int32(message.videoBitrate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capture_Start_Resi {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapture_Start_Resi();
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

          message.frameRate = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resolution = Capture_Resolution.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.streamStarted = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.videoBitrate = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Capture_Start_Resi {
    return {
      codec: isSet(object.codec) ? capture_CodecFromJSON(object.codec) : 0,
      frameRate: isSet(object.frameRate)
        ? capture_FrameRateFromJSON(object.frameRate)
        : 0,
      resolution: isSet(object.resolution)
        ? Capture_Resolution.fromJSON(object.resolution)
        : undefined,
      streamStarted: isSet(object.streamStarted)
        ? globalThis.Boolean(object.streamStarted)
        : false,
      videoBitrate: isSet(object.videoBitrate)
        ? globalThis.Number(object.videoBitrate)
        : 0,
    };
  },

  toJSON(message: Capture_Start_Resi): unknown {
    const obj: any = {};
    if (message.codec !== 0) {
      obj.codec = capture_CodecToJSON(message.codec);
    }
    if (message.frameRate !== 0) {
      obj.frameRate = capture_FrameRateToJSON(message.frameRate);
    }
    if (message.resolution !== undefined) {
      obj.resolution = Capture_Resolution.toJSON(message.resolution);
    }
    if (message.streamStarted === true) {
      obj.streamStarted = message.streamStarted;
    }
    if (message.videoBitrate !== 0) {
      obj.videoBitrate = Math.round(message.videoBitrate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Capture_Start_Resi>, I>>(
    base?: I,
  ): Capture_Start_Resi {
    return Capture_Start_Resi.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Capture_Start_Resi>, I>>(
    object: I,
  ): Capture_Start_Resi {
    const message = createBaseCapture_Start_Resi();
    message.codec = object.codec ?? 0;
    message.frameRate = object.frameRate ?? 0;
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Capture_Resolution.fromPartial(object.resolution)
        : undefined;
    message.streamStarted = object.streamStarted ?? false;
    message.videoBitrate = object.videoBitrate ?? 0;
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
