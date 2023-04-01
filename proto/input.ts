/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Color, URL, UUID } from './basicTypes';
import { DigitalAudio_Device } from './digitalAudio';
import { Media_VideoDevice } from './graphicsData';

export const protobufPackage = 'rv.data';

export interface VideoInput {
  uuid: UUID | undefined;
  userDescription: string;
  videoInputDevice: Media_VideoDevice | undefined;
  displayColor: Color | undefined;
  thumbnailPath: URL | undefined;
  audioType: VideoInput_AudioDeviceType;
  audioDevice?: DigitalAudio_Device | undefined;
  videoDevice?: Media_VideoDevice | undefined;
}

export enum VideoInput_AudioDeviceType {
  AUDIO_DEVICE_TYPE_DEFAULT = 0,
  AUDIO_DEVICE_TYPE_NONE = 1,
  AUDIO_DEVICE_TYPE_ALTERNATE = 2,
  UNRECOGNIZED = -1,
}

export function videoInput_AudioDeviceTypeFromJSON(
  object: any,
): VideoInput_AudioDeviceType {
  switch (object) {
    case 0:
    case 'AUDIO_DEVICE_TYPE_DEFAULT':
      return VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_DEFAULT;
    case 1:
    case 'AUDIO_DEVICE_TYPE_NONE':
      return VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_NONE;
    case 2:
    case 'AUDIO_DEVICE_TYPE_ALTERNATE':
      return VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_ALTERNATE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return VideoInput_AudioDeviceType.UNRECOGNIZED;
  }
}

export function videoInput_AudioDeviceTypeToJSON(
  object: VideoInput_AudioDeviceType,
): string {
  switch (object) {
    case VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_DEFAULT:
      return 'AUDIO_DEVICE_TYPE_DEFAULT';
    case VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_NONE:
      return 'AUDIO_DEVICE_TYPE_NONE';
    case VideoInput_AudioDeviceType.AUDIO_DEVICE_TYPE_ALTERNATE:
      return 'AUDIO_DEVICE_TYPE_ALTERNATE';
    case VideoInput_AudioDeviceType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface VideoInput_SettingsDocument {
  inputs: VideoInput[];
}

export interface AudioInput {
  uuid: UUID | undefined;
  userDescription: string;
  behaviorMode: AudioInput_BehaviorMode | undefined;
  audioDevice?: DigitalAudio_Device | undefined;
  videoDevice?: Media_VideoDevice | undefined;
}

export interface AudioInput_BehaviorMode {
  on?: AudioInput_BehaviorMode_On | undefined;
  off?: AudioInput_BehaviorMode_Off | undefined;
  autoOn?: AudioInput_BehaviorMode_AutoOn | undefined;
  autoOff?: AudioInput_BehaviorMode_AutoOff | undefined;
}

export interface AudioInput_BehaviorMode_On {}

export interface AudioInput_BehaviorMode_Off {}

export interface AudioInput_BehaviorMode_AutoOff {}

export interface AudioInput_BehaviorMode_AutoOn {
  linkedVideoInputs: number[];
}

function createBaseVideoInput(): VideoInput {
  return {
    uuid: undefined,
    userDescription: '',
    videoInputDevice: undefined,
    displayColor: undefined,
    thumbnailPath: undefined,
    audioType: 0,
    audioDevice: undefined,
    videoDevice: undefined,
  };
}

export const VideoInput = {
  encode(
    message: VideoInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.userDescription !== '') {
      writer.uint32(18).string(message.userDescription);
    }
    if (message.videoInputDevice !== undefined) {
      Media_VideoDevice.encode(
        message.videoInputDevice,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.displayColor !== undefined) {
      Color.encode(message.displayColor, writer.uint32(34).fork()).ldelim();
    }
    if (message.thumbnailPath !== undefined) {
      URL.encode(message.thumbnailPath, writer.uint32(42).fork()).ldelim();
    }
    if (message.audioType !== 0) {
      writer.uint32(64).int32(message.audioType);
    }
    if (message.audioDevice !== undefined) {
      DigitalAudio_Device.encode(
        message.audioDevice,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.videoDevice !== undefined) {
      Media_VideoDevice.encode(
        message.videoDevice,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VideoInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoInput();
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

          message.userDescription = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.videoInputDevice = Media_VideoDevice.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.displayColor = Color.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.thumbnailPath = URL.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.audioType = reader.int32() as any;
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.audioDevice = DigitalAudio_Device.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.videoDevice = Media_VideoDevice.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): VideoInput {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      userDescription: isSet(object.userDescription)
        ? String(object.userDescription)
        : '',
      videoInputDevice: isSet(object.videoInputDevice)
        ? Media_VideoDevice.fromJSON(object.videoInputDevice)
        : undefined,
      displayColor: isSet(object.displayColor)
        ? Color.fromJSON(object.displayColor)
        : undefined,
      thumbnailPath: isSet(object.thumbnailPath)
        ? URL.fromJSON(object.thumbnailPath)
        : undefined,
      audioType: isSet(object.audioType)
        ? videoInput_AudioDeviceTypeFromJSON(object.audioType)
        : 0,
      audioDevice: isSet(object.audioDevice)
        ? DigitalAudio_Device.fromJSON(object.audioDevice)
        : undefined,
      videoDevice: isSet(object.videoDevice)
        ? Media_VideoDevice.fromJSON(object.videoDevice)
        : undefined,
    };
  },

  toJSON(message: VideoInput): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.userDescription !== undefined &&
      (obj.userDescription = message.userDescription);
    message.videoInputDevice !== undefined &&
      (obj.videoInputDevice = message.videoInputDevice
        ? Media_VideoDevice.toJSON(message.videoInputDevice)
        : undefined);
    message.displayColor !== undefined &&
      (obj.displayColor = message.displayColor
        ? Color.toJSON(message.displayColor)
        : undefined);
    message.thumbnailPath !== undefined &&
      (obj.thumbnailPath = message.thumbnailPath
        ? URL.toJSON(message.thumbnailPath)
        : undefined);
    message.audioType !== undefined &&
      (obj.audioType = videoInput_AudioDeviceTypeToJSON(message.audioType));
    message.audioDevice !== undefined &&
      (obj.audioDevice = message.audioDevice
        ? DigitalAudio_Device.toJSON(message.audioDevice)
        : undefined);
    message.videoDevice !== undefined &&
      (obj.videoDevice = message.videoDevice
        ? Media_VideoDevice.toJSON(message.videoDevice)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VideoInput>, I>>(base?: I): VideoInput {
    return VideoInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VideoInput>, I>>(
    object: I,
  ): VideoInput {
    const message = createBaseVideoInput();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.userDescription = object.userDescription ?? '';
    message.videoInputDevice =
      object.videoInputDevice !== undefined && object.videoInputDevice !== null
        ? Media_VideoDevice.fromPartial(object.videoInputDevice)
        : undefined;
    message.displayColor =
      object.displayColor !== undefined && object.displayColor !== null
        ? Color.fromPartial(object.displayColor)
        : undefined;
    message.thumbnailPath =
      object.thumbnailPath !== undefined && object.thumbnailPath !== null
        ? URL.fromPartial(object.thumbnailPath)
        : undefined;
    message.audioType = object.audioType ?? 0;
    message.audioDevice =
      object.audioDevice !== undefined && object.audioDevice !== null
        ? DigitalAudio_Device.fromPartial(object.audioDevice)
        : undefined;
    message.videoDevice =
      object.videoDevice !== undefined && object.videoDevice !== null
        ? Media_VideoDevice.fromPartial(object.videoDevice)
        : undefined;
    return message;
  },
};

function createBaseVideoInput_SettingsDocument(): VideoInput_SettingsDocument {
  return { inputs: [] };
}

export const VideoInput_SettingsDocument = {
  encode(
    message: VideoInput_SettingsDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inputs) {
      VideoInput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): VideoInput_SettingsDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVideoInput_SettingsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.inputs.push(VideoInput.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VideoInput_SettingsDocument {
    return {
      inputs: Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => VideoInput.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VideoInput_SettingsDocument): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) =>
        e ? VideoInput.toJSON(e) : undefined,
      );
    } else {
      obj.inputs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VideoInput_SettingsDocument>, I>>(
    base?: I,
  ): VideoInput_SettingsDocument {
    return VideoInput_SettingsDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VideoInput_SettingsDocument>, I>>(
    object: I,
  ): VideoInput_SettingsDocument {
    const message = createBaseVideoInput_SettingsDocument();
    message.inputs = object.inputs?.map((e) => VideoInput.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAudioInput(): AudioInput {
  return {
    uuid: undefined,
    userDescription: '',
    behaviorMode: undefined,
    audioDevice: undefined,
    videoDevice: undefined,
  };
}

export const AudioInput = {
  encode(
    message: AudioInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.userDescription !== '') {
      writer.uint32(18).string(message.userDescription);
    }
    if (message.behaviorMode !== undefined) {
      AudioInput_BehaviorMode.encode(
        message.behaviorMode,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.audioDevice !== undefined) {
      DigitalAudio_Device.encode(
        message.audioDevice,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.videoDevice !== undefined) {
      Media_VideoDevice.encode(
        message.videoDevice,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AudioInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput();
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

          message.userDescription = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.behaviorMode = AudioInput_BehaviorMode.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.audioDevice = DigitalAudio_Device.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.videoDevice = Media_VideoDevice.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): AudioInput {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      userDescription: isSet(object.userDescription)
        ? String(object.userDescription)
        : '',
      behaviorMode: isSet(object.behaviorMode)
        ? AudioInput_BehaviorMode.fromJSON(object.behaviorMode)
        : undefined,
      audioDevice: isSet(object.audioDevice)
        ? DigitalAudio_Device.fromJSON(object.audioDevice)
        : undefined,
      videoDevice: isSet(object.videoDevice)
        ? Media_VideoDevice.fromJSON(object.videoDevice)
        : undefined,
    };
  },

  toJSON(message: AudioInput): unknown {
    const obj: any = {};
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    message.userDescription !== undefined &&
      (obj.userDescription = message.userDescription);
    message.behaviorMode !== undefined &&
      (obj.behaviorMode = message.behaviorMode
        ? AudioInput_BehaviorMode.toJSON(message.behaviorMode)
        : undefined);
    message.audioDevice !== undefined &&
      (obj.audioDevice = message.audioDevice
        ? DigitalAudio_Device.toJSON(message.audioDevice)
        : undefined);
    message.videoDevice !== undefined &&
      (obj.videoDevice = message.videoDevice
        ? Media_VideoDevice.toJSON(message.videoDevice)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput>, I>>(base?: I): AudioInput {
    return AudioInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput>, I>>(
    object: I,
  ): AudioInput {
    const message = createBaseAudioInput();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.userDescription = object.userDescription ?? '';
    message.behaviorMode =
      object.behaviorMode !== undefined && object.behaviorMode !== null
        ? AudioInput_BehaviorMode.fromPartial(object.behaviorMode)
        : undefined;
    message.audioDevice =
      object.audioDevice !== undefined && object.audioDevice !== null
        ? DigitalAudio_Device.fromPartial(object.audioDevice)
        : undefined;
    message.videoDevice =
      object.videoDevice !== undefined && object.videoDevice !== null
        ? Media_VideoDevice.fromPartial(object.videoDevice)
        : undefined;
    return message;
  },
};

function createBaseAudioInput_BehaviorMode(): AudioInput_BehaviorMode {
  return {
    on: undefined,
    off: undefined,
    autoOn: undefined,
    autoOff: undefined,
  };
}

export const AudioInput_BehaviorMode = {
  encode(
    message: AudioInput_BehaviorMode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.on !== undefined) {
      AudioInput_BehaviorMode_On.encode(
        message.on,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.off !== undefined) {
      AudioInput_BehaviorMode_Off.encode(
        message.off,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.autoOn !== undefined) {
      AudioInput_BehaviorMode_AutoOn.encode(
        message.autoOn,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.autoOff !== undefined) {
      AudioInput_BehaviorMode_AutoOff.encode(
        message.autoOff,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AudioInput_BehaviorMode {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput_BehaviorMode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.on = AudioInput_BehaviorMode_On.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.off = AudioInput_BehaviorMode_Off.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.autoOn = AudioInput_BehaviorMode_AutoOn.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.autoOff = AudioInput_BehaviorMode_AutoOff.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): AudioInput_BehaviorMode {
    return {
      on: isSet(object.on)
        ? AudioInput_BehaviorMode_On.fromJSON(object.on)
        : undefined,
      off: isSet(object.off)
        ? AudioInput_BehaviorMode_Off.fromJSON(object.off)
        : undefined,
      autoOn: isSet(object.autoOn)
        ? AudioInput_BehaviorMode_AutoOn.fromJSON(object.autoOn)
        : undefined,
      autoOff: isSet(object.autoOff)
        ? AudioInput_BehaviorMode_AutoOff.fromJSON(object.autoOff)
        : undefined,
    };
  },

  toJSON(message: AudioInput_BehaviorMode): unknown {
    const obj: any = {};
    message.on !== undefined &&
      (obj.on = message.on
        ? AudioInput_BehaviorMode_On.toJSON(message.on)
        : undefined);
    message.off !== undefined &&
      (obj.off = message.off
        ? AudioInput_BehaviorMode_Off.toJSON(message.off)
        : undefined);
    message.autoOn !== undefined &&
      (obj.autoOn = message.autoOn
        ? AudioInput_BehaviorMode_AutoOn.toJSON(message.autoOn)
        : undefined);
    message.autoOff !== undefined &&
      (obj.autoOff = message.autoOff
        ? AudioInput_BehaviorMode_AutoOff.toJSON(message.autoOff)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput_BehaviorMode>, I>>(
    base?: I,
  ): AudioInput_BehaviorMode {
    return AudioInput_BehaviorMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput_BehaviorMode>, I>>(
    object: I,
  ): AudioInput_BehaviorMode {
    const message = createBaseAudioInput_BehaviorMode();
    message.on =
      object.on !== undefined && object.on !== null
        ? AudioInput_BehaviorMode_On.fromPartial(object.on)
        : undefined;
    message.off =
      object.off !== undefined && object.off !== null
        ? AudioInput_BehaviorMode_Off.fromPartial(object.off)
        : undefined;
    message.autoOn =
      object.autoOn !== undefined && object.autoOn !== null
        ? AudioInput_BehaviorMode_AutoOn.fromPartial(object.autoOn)
        : undefined;
    message.autoOff =
      object.autoOff !== undefined && object.autoOff !== null
        ? AudioInput_BehaviorMode_AutoOff.fromPartial(object.autoOff)
        : undefined;
    return message;
  },
};

function createBaseAudioInput_BehaviorMode_On(): AudioInput_BehaviorMode_On {
  return {};
}

export const AudioInput_BehaviorMode_On = {
  encode(
    _: AudioInput_BehaviorMode_On,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AudioInput_BehaviorMode_On {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput_BehaviorMode_On();
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

  fromJSON(_: any): AudioInput_BehaviorMode_On {
    return {};
  },

  toJSON(_: AudioInput_BehaviorMode_On): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput_BehaviorMode_On>, I>>(
    base?: I,
  ): AudioInput_BehaviorMode_On {
    return AudioInput_BehaviorMode_On.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput_BehaviorMode_On>, I>>(
    _: I,
  ): AudioInput_BehaviorMode_On {
    const message = createBaseAudioInput_BehaviorMode_On();
    return message;
  },
};

function createBaseAudioInput_BehaviorMode_Off(): AudioInput_BehaviorMode_Off {
  return {};
}

export const AudioInput_BehaviorMode_Off = {
  encode(
    _: AudioInput_BehaviorMode_Off,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AudioInput_BehaviorMode_Off {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput_BehaviorMode_Off();
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

  fromJSON(_: any): AudioInput_BehaviorMode_Off {
    return {};
  },

  toJSON(_: AudioInput_BehaviorMode_Off): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput_BehaviorMode_Off>, I>>(
    base?: I,
  ): AudioInput_BehaviorMode_Off {
    return AudioInput_BehaviorMode_Off.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput_BehaviorMode_Off>, I>>(
    _: I,
  ): AudioInput_BehaviorMode_Off {
    const message = createBaseAudioInput_BehaviorMode_Off();
    return message;
  },
};

function createBaseAudioInput_BehaviorMode_AutoOff(): AudioInput_BehaviorMode_AutoOff {
  return {};
}

export const AudioInput_BehaviorMode_AutoOff = {
  encode(
    _: AudioInput_BehaviorMode_AutoOff,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AudioInput_BehaviorMode_AutoOff {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput_BehaviorMode_AutoOff();
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

  fromJSON(_: any): AudioInput_BehaviorMode_AutoOff {
    return {};
  },

  toJSON(_: AudioInput_BehaviorMode_AutoOff): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput_BehaviorMode_AutoOff>, I>>(
    base?: I,
  ): AudioInput_BehaviorMode_AutoOff {
    return AudioInput_BehaviorMode_AutoOff.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput_BehaviorMode_AutoOff>, I>>(
    _: I,
  ): AudioInput_BehaviorMode_AutoOff {
    const message = createBaseAudioInput_BehaviorMode_AutoOff();
    return message;
  },
};

function createBaseAudioInput_BehaviorMode_AutoOn(): AudioInput_BehaviorMode_AutoOn {
  return { linkedVideoInputs: [] };
}

export const AudioInput_BehaviorMode_AutoOn = {
  encode(
    message: AudioInput_BehaviorMode_AutoOn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.linkedVideoInputs) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AudioInput_BehaviorMode_AutoOn {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudioInput_BehaviorMode_AutoOn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.linkedVideoInputs.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.linkedVideoInputs.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudioInput_BehaviorMode_AutoOn {
    return {
      linkedVideoInputs: Array.isArray(object?.linkedVideoInputs)
        ? object.linkedVideoInputs.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: AudioInput_BehaviorMode_AutoOn): unknown {
    const obj: any = {};
    if (message.linkedVideoInputs) {
      obj.linkedVideoInputs = message.linkedVideoInputs.map((e) =>
        Math.round(e),
      );
    } else {
      obj.linkedVideoInputs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AudioInput_BehaviorMode_AutoOn>, I>>(
    base?: I,
  ): AudioInput_BehaviorMode_AutoOn {
    return AudioInput_BehaviorMode_AutoOn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AudioInput_BehaviorMode_AutoOn>, I>>(
    object: I,
  ): AudioInput_BehaviorMode_AutoOn {
    const message = createBaseAudioInput_BehaviorMode_AutoOn();
    message.linkedVideoInputs = object.linkedVideoInputs?.map((e) => e) || [];
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
