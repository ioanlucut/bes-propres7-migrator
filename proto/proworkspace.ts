/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Audio_SettingsDocument } from "./audio";
import { DigitalAudio_Setup } from "./digitalAudio";
import { AudioInput, VideoInput } from "./input";
import { ProAudienceLook } from "./proAudienceLook";
import { ProMask } from "./proMask";
import { ProPresenterScreen } from "./proscreen";
import { Recording_SettingsDocument } from "./recording";
import { Stage_ScreenAssignment } from "./stage";

export const protobufPackage = "rv.data";

export interface ProPresenterWorkspace {
  proScreens: ProPresenterScreen[];
  audienceLooks: ProAudienceLook[];
  liveAudienceLook: ProAudienceLook | undefined;
  masks: ProMask[];
  videoInputs: VideoInput[];
  stageLayoutMappings: Stage_ScreenAssignment[];
  audioSettings: Audio_SettingsDocument | undefined;
  selectedLibraryName: string;
  recordSettings: Recording_SettingsDocument | undefined;
  digitalAudioSetup: DigitalAudio_Setup | undefined;
  audioInputs: AudioInput[];
  audioInputTransitionTime: number;
}

function createBaseProPresenterWorkspace(): ProPresenterWorkspace {
  return {
    proScreens: [],
    audienceLooks: [],
    liveAudienceLook: undefined,
    masks: [],
    videoInputs: [],
    stageLayoutMappings: [],
    audioSettings: undefined,
    selectedLibraryName: "",
    recordSettings: undefined,
    digitalAudioSetup: undefined,
    audioInputs: [],
    audioInputTransitionTime: 0,
  };
}

export const ProPresenterWorkspace = {
  encode(message: ProPresenterWorkspace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proScreens) {
      ProPresenterScreen.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.audienceLooks) {
      ProAudienceLook.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.liveAudienceLook !== undefined) {
      ProAudienceLook.encode(message.liveAudienceLook, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.masks) {
      ProMask.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.videoInputs) {
      VideoInput.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.stageLayoutMappings) {
      Stage_ScreenAssignment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.audioSettings !== undefined) {
      Audio_SettingsDocument.encode(message.audioSettings, writer.uint32(58).fork()).ldelim();
    }
    if (message.selectedLibraryName !== "") {
      writer.uint32(66).string(message.selectedLibraryName);
    }
    if (message.recordSettings !== undefined) {
      Recording_SettingsDocument.encode(message.recordSettings, writer.uint32(74).fork()).ldelim();
    }
    if (message.digitalAudioSetup !== undefined) {
      DigitalAudio_Setup.encode(message.digitalAudioSetup, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.audioInputs) {
      AudioInput.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.audioInputTransitionTime !== 0) {
      writer.uint32(97).double(message.audioInputTransitionTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProPresenterWorkspace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProPresenterWorkspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.proScreens.push(ProPresenterScreen.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.audienceLooks.push(ProAudienceLook.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.liveAudienceLook = ProAudienceLook.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.masks.push(ProMask.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.videoInputs.push(VideoInput.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.stageLayoutMappings.push(Stage_ScreenAssignment.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.audioSettings = Audio_SettingsDocument.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.selectedLibraryName = reader.string();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.recordSettings = Recording_SettingsDocument.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.digitalAudioSetup = DigitalAudio_Setup.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.audioInputs.push(AudioInput.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag != 97) {
            break;
          }

          message.audioInputTransitionTime = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProPresenterWorkspace {
    return {
      proScreens: Array.isArray(object?.proScreens)
        ? object.proScreens.map((e: any) => ProPresenterScreen.fromJSON(e))
        : [],
      audienceLooks: Array.isArray(object?.audienceLooks)
        ? object.audienceLooks.map((e: any) => ProAudienceLook.fromJSON(e))
        : [],
      liveAudienceLook: isSet(object.liveAudienceLook) ? ProAudienceLook.fromJSON(object.liveAudienceLook) : undefined,
      masks: Array.isArray(object?.masks) ? object.masks.map((e: any) => ProMask.fromJSON(e)) : [],
      videoInputs: Array.isArray(object?.videoInputs) ? object.videoInputs.map((e: any) => VideoInput.fromJSON(e)) : [],
      stageLayoutMappings: Array.isArray(object?.stageLayoutMappings)
        ? object.stageLayoutMappings.map((e: any) => Stage_ScreenAssignment.fromJSON(e))
        : [],
      audioSettings: isSet(object.audioSettings) ? Audio_SettingsDocument.fromJSON(object.audioSettings) : undefined,
      selectedLibraryName: isSet(object.selectedLibraryName) ? String(object.selectedLibraryName) : "",
      recordSettings: isSet(object.recordSettings)
        ? Recording_SettingsDocument.fromJSON(object.recordSettings)
        : undefined,
      digitalAudioSetup: isSet(object.digitalAudioSetup)
        ? DigitalAudio_Setup.fromJSON(object.digitalAudioSetup)
        : undefined,
      audioInputs: Array.isArray(object?.audioInputs) ? object.audioInputs.map((e: any) => AudioInput.fromJSON(e)) : [],
      audioInputTransitionTime: isSet(object.audioInputTransitionTime) ? Number(object.audioInputTransitionTime) : 0,
    };
  },

  toJSON(message: ProPresenterWorkspace): unknown {
    const obj: any = {};
    if (message.proScreens) {
      obj.proScreens = message.proScreens.map((e) => e ? ProPresenterScreen.toJSON(e) : undefined);
    } else {
      obj.proScreens = [];
    }
    if (message.audienceLooks) {
      obj.audienceLooks = message.audienceLooks.map((e) => e ? ProAudienceLook.toJSON(e) : undefined);
    } else {
      obj.audienceLooks = [];
    }
    message.liveAudienceLook !== undefined &&
      (obj.liveAudienceLook = message.liveAudienceLook ? ProAudienceLook.toJSON(message.liveAudienceLook) : undefined);
    if (message.masks) {
      obj.masks = message.masks.map((e) => e ? ProMask.toJSON(e) : undefined);
    } else {
      obj.masks = [];
    }
    if (message.videoInputs) {
      obj.videoInputs = message.videoInputs.map((e) => e ? VideoInput.toJSON(e) : undefined);
    } else {
      obj.videoInputs = [];
    }
    if (message.stageLayoutMappings) {
      obj.stageLayoutMappings = message.stageLayoutMappings.map((e) =>
        e ? Stage_ScreenAssignment.toJSON(e) : undefined
      );
    } else {
      obj.stageLayoutMappings = [];
    }
    message.audioSettings !== undefined &&
      (obj.audioSettings = message.audioSettings ? Audio_SettingsDocument.toJSON(message.audioSettings) : undefined);
    message.selectedLibraryName !== undefined && (obj.selectedLibraryName = message.selectedLibraryName);
    message.recordSettings !== undefined && (obj.recordSettings = message.recordSettings
      ? Recording_SettingsDocument.toJSON(message.recordSettings)
      : undefined);
    message.digitalAudioSetup !== undefined && (obj.digitalAudioSetup = message.digitalAudioSetup
      ? DigitalAudio_Setup.toJSON(message.digitalAudioSetup)
      : undefined);
    if (message.audioInputs) {
      obj.audioInputs = message.audioInputs.map((e) => e ? AudioInput.toJSON(e) : undefined);
    } else {
      obj.audioInputs = [];
    }
    message.audioInputTransitionTime !== undefined && (obj.audioInputTransitionTime = message.audioInputTransitionTime);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProPresenterWorkspace>, I>>(base?: I): ProPresenterWorkspace {
    return ProPresenterWorkspace.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProPresenterWorkspace>, I>>(object: I): ProPresenterWorkspace {
    const message = createBaseProPresenterWorkspace();
    message.proScreens = object.proScreens?.map((e) => ProPresenterScreen.fromPartial(e)) || [];
    message.audienceLooks = object.audienceLooks?.map((e) => ProAudienceLook.fromPartial(e)) || [];
    message.liveAudienceLook = (object.liveAudienceLook !== undefined && object.liveAudienceLook !== null)
      ? ProAudienceLook.fromPartial(object.liveAudienceLook)
      : undefined;
    message.masks = object.masks?.map((e) => ProMask.fromPartial(e)) || [];
    message.videoInputs = object.videoInputs?.map((e) => VideoInput.fromPartial(e)) || [];
    message.stageLayoutMappings = object.stageLayoutMappings?.map((e) => Stage_ScreenAssignment.fromPartial(e)) || [];
    message.audioSettings = (object.audioSettings !== undefined && object.audioSettings !== null)
      ? Audio_SettingsDocument.fromPartial(object.audioSettings)
      : undefined;
    message.selectedLibraryName = object.selectedLibraryName ?? "";
    message.recordSettings = (object.recordSettings !== undefined && object.recordSettings !== null)
      ? Recording_SettingsDocument.fromPartial(object.recordSettings)
      : undefined;
    message.digitalAudioSetup = (object.digitalAudioSetup !== undefined && object.digitalAudioSetup !== null)
      ? DigitalAudio_Setup.fromPartial(object.digitalAudioSetup)
      : undefined;
    message.audioInputs = object.audioInputs?.map((e) => AudioInput.fromPartial(e)) || [];
    message.audioInputTransitionTime = object.audioInputTransitionTime ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
