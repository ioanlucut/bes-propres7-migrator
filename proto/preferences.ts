/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Action_LayerType, action_LayerTypeFromJSON, action_LayerTypeToJSON } from "./action";
import { Cue_CompletionTargetType, cue_CompletionTargetTypeFromJSON, cue_CompletionTargetTypeToJSON } from "./cue";
import {
  Media_ScaleBehavior,
  media_ScaleBehaviorFromJSON,
  media_ScaleBehaviorToJSON,
  Media_TransportProperties_PlaybackBehavior,
  media_TransportProperties_PlaybackBehaviorFromJSON,
  media_TransportProperties_PlaybackBehaviorToJSON,
  Media_VideoProperties_EndBehavior,
  media_VideoProperties_EndBehaviorFromJSON,
  media_VideoProperties_EndBehaviorToJSON,
} from "./graphicsData";
import { ProGroupsDocument } from "./groups";
import { ProLabelsDocument } from "./labels";
import { ProClockSource } from "./proClockSource";
import {
  URL_LocalRelativePath_Root,
  uRL_LocalRelativePath_RootFromJSON,
  uRL_LocalRelativePath_RootToJSON,
} from "./url";

export const protobufPackage = "rv.data";

export interface Preferences {
  general: Preferences_General | undefined;
  screens: Preferences_Screens | undefined;
  import: Preferences_Import | undefined;
  groups: Preferences_Groups | undefined;
  network: Preferences_Network | undefined;
  sync: Preferences_Sync | undefined;
  advanced: Preferences_Advanced | undefined;
  updates: Preferences_Updates | undefined;
}

export interface Preferences_General {
  houseOfWorshipIntegrations: boolean;
  crashReports: boolean;
  analytics: boolean;
  logoPath: string;
  language: string;
}

export interface Preferences_Screens {
  enableAtLaunch: boolean;
  showPerformanceStats: boolean;
  ignoreBackgroundColors: boolean;
  clockSource: ProClockSource | undefined;
  showKeynoteAndPowerpoint: boolean;
  disableBlackmagicSyncGroups: boolean;
  useDirectxRendering: boolean;
}

export interface Preferences_Import {
  foregroundScaling: Media_ScaleBehavior;
  foregroundIsBlurred: boolean;
  backgroundScaling: Media_ScaleBehavior;
  backgroundIsBlurred: boolean;
  image: Preferences_Import_Image | undefined;
  video: Preferences_Import_Video | undefined;
  audio: Preferences_Import_Audio | undefined;
}

export interface Preferences_Import_Image {
  layerType: Action_LayerType;
  duration: Preferences_Import_Image_Duration | undefined;
  nextBehavior: Cue_CompletionTargetType;
}

export interface Preferences_Import_Image_Duration {
  none?: Preferences_Import_Image_Duration_None | undefined;
  time?: Preferences_Import_Image_Duration_Time | undefined;
  random?: Preferences_Import_Image_Duration_Random | undefined;
}

export interface Preferences_Import_Image_Duration_None {
}

export interface Preferences_Import_Image_Duration_Time {
  time: number;
}

export interface Preferences_Import_Image_Duration_Random {
  minimumTime: number;
  maximumTime: number;
}

export interface Preferences_Import_Video {
  layerType: Action_LayerType;
  playbackBehavior: Media_TransportProperties_PlaybackBehavior;
  endBehavior: Media_VideoProperties_EndBehavior;
  nextBehavior: Cue_CompletionTargetType;
}

export interface Preferences_Import_Audio {
  playbackBehavior: Media_TransportProperties_PlaybackBehavior;
  nextBehavior: Cue_CompletionTargetType;
}

export interface Preferences_Groups {
  groups: ProGroupsDocument | undefined;
  labels: ProLabelsDocument | undefined;
}

export interface Preferences_Network {
  network: Preferences_Network_Network | undefined;
  remotes: Preferences_Network_Remotes | undefined;
  link: Preferences_Network_Link | undefined;
}

export interface Preferences_Network_Network {
  enable: boolean;
  name: string;
  port: number;
}

export interface Preferences_Network_Remotes {
  proRemote: Preferences_Network_Remotes_ProRemote | undefined;
  stageApp: Preferences_Network_Remotes_StageApp | undefined;
}

export interface Preferences_Network_Remotes_ProRemote {
  enable: boolean;
  enableController: boolean;
  controllerPassword: string;
  enableObserver: boolean;
  observerPassword: string;
}

export interface Preferences_Network_Remotes_StageApp {
  enable: boolean;
  password: string;
}

export interface Preferences_Network_Link {
  enable: boolean;
  linkGroup: string;
}

export interface Preferences_Sync {
  repository: string;
  includeLibraries: boolean;
  includeMedia: boolean;
  includePlaylists: boolean;
  includeThemes: boolean;
  includeSupportFiles: boolean;
  direction: Preferences_Sync_SyncDirection;
  replaceDestinationFiles: boolean;
}

export enum Preferences_Sync_SyncDirection {
  SYNC_DOWN = 0,
  SYNC_UP = 1,
  UNRECOGNIZED = -1,
}

export function preferences_Sync_SyncDirectionFromJSON(object: any): Preferences_Sync_SyncDirection {
  switch (object) {
    case 0:
    case "SYNC_DOWN":
      return Preferences_Sync_SyncDirection.SYNC_DOWN;
    case 1:
    case "SYNC_UP":
      return Preferences_Sync_SyncDirection.SYNC_UP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Preferences_Sync_SyncDirection.UNRECOGNIZED;
  }
}

export function preferences_Sync_SyncDirectionToJSON(object: Preferences_Sync_SyncDirection): string {
  switch (object) {
    case Preferences_Sync_SyncDirection.SYNC_DOWN:
      return "SYNC_DOWN";
    case Preferences_Sync_SyncDirection.SYNC_UP:
      return "SYNC_UP";
    case Preferences_Sync_SyncDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Preferences_Advanced {
  suppressAutoStart: boolean;
  presentationAudioBehavior: Preferences_Advanced_AudioForegroundMediaBehavior;
  announcementsAudioBehavior: Preferences_Advanced_AudioForegroundMediaBehavior;
  ndiDiscovery: Preferences_Advanced_NDIDiscovery | undefined;
  supportFilesPath: string;
  manageMediaAutomatically: boolean;
  searchPaths: Preferences_Advanced_SearchPaths | undefined;
}

export enum Preferences_Advanced_AudioForegroundMediaBehavior {
  IGNORE_FOREGROUND_MEDIA = 0,
  CLEAR_FOR_ALL_MEDIA = 1,
  CLEAR_IF_AUDIO = 2,
  PAUSE_FOR_ALL_MEDIA = 3,
  PAUSE_IF_AUDIO = 4,
  UNRECOGNIZED = -1,
}

export function preferences_Advanced_AudioForegroundMediaBehaviorFromJSON(
  object: any,
): Preferences_Advanced_AudioForegroundMediaBehavior {
  switch (object) {
    case 0:
    case "IGNORE_FOREGROUND_MEDIA":
      return Preferences_Advanced_AudioForegroundMediaBehavior.IGNORE_FOREGROUND_MEDIA;
    case 1:
    case "CLEAR_FOR_ALL_MEDIA":
      return Preferences_Advanced_AudioForegroundMediaBehavior.CLEAR_FOR_ALL_MEDIA;
    case 2:
    case "CLEAR_IF_AUDIO":
      return Preferences_Advanced_AudioForegroundMediaBehavior.CLEAR_IF_AUDIO;
    case 3:
    case "PAUSE_FOR_ALL_MEDIA":
      return Preferences_Advanced_AudioForegroundMediaBehavior.PAUSE_FOR_ALL_MEDIA;
    case 4:
    case "PAUSE_IF_AUDIO":
      return Preferences_Advanced_AudioForegroundMediaBehavior.PAUSE_IF_AUDIO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Preferences_Advanced_AudioForegroundMediaBehavior.UNRECOGNIZED;
  }
}

export function preferences_Advanced_AudioForegroundMediaBehaviorToJSON(
  object: Preferences_Advanced_AudioForegroundMediaBehavior,
): string {
  switch (object) {
    case Preferences_Advanced_AudioForegroundMediaBehavior.IGNORE_FOREGROUND_MEDIA:
      return "IGNORE_FOREGROUND_MEDIA";
    case Preferences_Advanced_AudioForegroundMediaBehavior.CLEAR_FOR_ALL_MEDIA:
      return "CLEAR_FOR_ALL_MEDIA";
    case Preferences_Advanced_AudioForegroundMediaBehavior.CLEAR_IF_AUDIO:
      return "CLEAR_IF_AUDIO";
    case Preferences_Advanced_AudioForegroundMediaBehavior.PAUSE_FOR_ALL_MEDIA:
      return "PAUSE_FOR_ALL_MEDIA";
    case Preferences_Advanced_AudioForegroundMediaBehavior.PAUSE_IF_AUDIO:
      return "PAUSE_IF_AUDIO";
    case Preferences_Advanced_AudioForegroundMediaBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Preferences_Advanced_NDIDiscovery {
  showLocalSources: boolean;
  receiveGroups: string;
  additionalSearchIps: string;
}

export interface Preferences_Advanced_SearchPaths {
  automaticallyRelink: boolean;
  paths: Preferences_Advanced_SearchPaths_Path[];
}

export interface Preferences_Advanced_SearchPaths_Path {
  enable: boolean;
  name: string;
  path: string;
  urlRoot: URL_LocalRelativePath_Root;
}

export interface Preferences_Updates {
  notifyWhenAvailable: boolean;
  updateChannel: Preferences_Updates_Channel;
}

export enum Preferences_Updates_Channel {
  production = 0,
  beta = 1,
  UNRECOGNIZED = -1,
}

export function preferences_Updates_ChannelFromJSON(object: any): Preferences_Updates_Channel {
  switch (object) {
    case 0:
    case "production":
      return Preferences_Updates_Channel.production;
    case 1:
    case "beta":
      return Preferences_Updates_Channel.beta;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Preferences_Updates_Channel.UNRECOGNIZED;
  }
}

export function preferences_Updates_ChannelToJSON(object: Preferences_Updates_Channel): string {
  switch (object) {
    case Preferences_Updates_Channel.production:
      return "production";
    case Preferences_Updates_Channel.beta:
      return "beta";
    case Preferences_Updates_Channel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePreferences(): Preferences {
  return {
    general: undefined,
    screens: undefined,
    import: undefined,
    groups: undefined,
    network: undefined,
    sync: undefined,
    advanced: undefined,
    updates: undefined,
  };
}

export const Preferences = {
  encode(message: Preferences, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.general !== undefined) {
      Preferences_General.encode(message.general, writer.uint32(10).fork()).ldelim();
    }
    if (message.screens !== undefined) {
      Preferences_Screens.encode(message.screens, writer.uint32(18).fork()).ldelim();
    }
    if (message.import !== undefined) {
      Preferences_Import.encode(message.import, writer.uint32(26).fork()).ldelim();
    }
    if (message.groups !== undefined) {
      Preferences_Groups.encode(message.groups, writer.uint32(34).fork()).ldelim();
    }
    if (message.network !== undefined) {
      Preferences_Network.encode(message.network, writer.uint32(42).fork()).ldelim();
    }
    if (message.sync !== undefined) {
      Preferences_Sync.encode(message.sync, writer.uint32(50).fork()).ldelim();
    }
    if (message.advanced !== undefined) {
      Preferences_Advanced.encode(message.advanced, writer.uint32(58).fork()).ldelim();
    }
    if (message.updates !== undefined) {
      Preferences_Updates.encode(message.updates, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.general = Preferences_General.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.screens = Preferences_Screens.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.import = Preferences_Import.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groups = Preferences_Groups.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.network = Preferences_Network.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sync = Preferences_Sync.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.advanced = Preferences_Advanced.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.updates = Preferences_Updates.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences {
    return {
      general: isSet(object.general) ? Preferences_General.fromJSON(object.general) : undefined,
      screens: isSet(object.screens) ? Preferences_Screens.fromJSON(object.screens) : undefined,
      import: isSet(object.import) ? Preferences_Import.fromJSON(object.import) : undefined,
      groups: isSet(object.groups) ? Preferences_Groups.fromJSON(object.groups) : undefined,
      network: isSet(object.network) ? Preferences_Network.fromJSON(object.network) : undefined,
      sync: isSet(object.sync) ? Preferences_Sync.fromJSON(object.sync) : undefined,
      advanced: isSet(object.advanced) ? Preferences_Advanced.fromJSON(object.advanced) : undefined,
      updates: isSet(object.updates) ? Preferences_Updates.fromJSON(object.updates) : undefined,
    };
  },

  toJSON(message: Preferences): unknown {
    const obj: any = {};
    if (message.general !== undefined) {
      obj.general = Preferences_General.toJSON(message.general);
    }
    if (message.screens !== undefined) {
      obj.screens = Preferences_Screens.toJSON(message.screens);
    }
    if (message.import !== undefined) {
      obj.import = Preferences_Import.toJSON(message.import);
    }
    if (message.groups !== undefined) {
      obj.groups = Preferences_Groups.toJSON(message.groups);
    }
    if (message.network !== undefined) {
      obj.network = Preferences_Network.toJSON(message.network);
    }
    if (message.sync !== undefined) {
      obj.sync = Preferences_Sync.toJSON(message.sync);
    }
    if (message.advanced !== undefined) {
      obj.advanced = Preferences_Advanced.toJSON(message.advanced);
    }
    if (message.updates !== undefined) {
      obj.updates = Preferences_Updates.toJSON(message.updates);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences>, I>>(base?: I): Preferences {
    return Preferences.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences>, I>>(object: I): Preferences {
    const message = createBasePreferences();
    message.general = (object.general !== undefined && object.general !== null)
      ? Preferences_General.fromPartial(object.general)
      : undefined;
    message.screens = (object.screens !== undefined && object.screens !== null)
      ? Preferences_Screens.fromPartial(object.screens)
      : undefined;
    message.import = (object.import !== undefined && object.import !== null)
      ? Preferences_Import.fromPartial(object.import)
      : undefined;
    message.groups = (object.groups !== undefined && object.groups !== null)
      ? Preferences_Groups.fromPartial(object.groups)
      : undefined;
    message.network = (object.network !== undefined && object.network !== null)
      ? Preferences_Network.fromPartial(object.network)
      : undefined;
    message.sync = (object.sync !== undefined && object.sync !== null)
      ? Preferences_Sync.fromPartial(object.sync)
      : undefined;
    message.advanced = (object.advanced !== undefined && object.advanced !== null)
      ? Preferences_Advanced.fromPartial(object.advanced)
      : undefined;
    message.updates = (object.updates !== undefined && object.updates !== null)
      ? Preferences_Updates.fromPartial(object.updates)
      : undefined;
    return message;
  },
};

function createBasePreferences_General(): Preferences_General {
  return { houseOfWorshipIntegrations: false, crashReports: false, analytics: false, logoPath: "", language: "" };
}

export const Preferences_General = {
  encode(message: Preferences_General, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.houseOfWorshipIntegrations !== false) {
      writer.uint32(8).bool(message.houseOfWorshipIntegrations);
    }
    if (message.crashReports !== false) {
      writer.uint32(16).bool(message.crashReports);
    }
    if (message.analytics !== false) {
      writer.uint32(24).bool(message.analytics);
    }
    if (message.logoPath !== "") {
      writer.uint32(34).string(message.logoPath);
    }
    if (message.language !== "") {
      writer.uint32(42).string(message.language);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_General {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_General();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.houseOfWorshipIntegrations = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.crashReports = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.analytics = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.logoPath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.language = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_General {
    return {
      houseOfWorshipIntegrations: isSet(object.houseOfWorshipIntegrations)
        ? globalThis.Boolean(object.houseOfWorshipIntegrations)
        : false,
      crashReports: isSet(object.crashReports) ? globalThis.Boolean(object.crashReports) : false,
      analytics: isSet(object.analytics) ? globalThis.Boolean(object.analytics) : false,
      logoPath: isSet(object.logoPath) ? globalThis.String(object.logoPath) : "",
      language: isSet(object.language) ? globalThis.String(object.language) : "",
    };
  },

  toJSON(message: Preferences_General): unknown {
    const obj: any = {};
    if (message.houseOfWorshipIntegrations !== false) {
      obj.houseOfWorshipIntegrations = message.houseOfWorshipIntegrations;
    }
    if (message.crashReports !== false) {
      obj.crashReports = message.crashReports;
    }
    if (message.analytics !== false) {
      obj.analytics = message.analytics;
    }
    if (message.logoPath !== "") {
      obj.logoPath = message.logoPath;
    }
    if (message.language !== "") {
      obj.language = message.language;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_General>, I>>(base?: I): Preferences_General {
    return Preferences_General.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_General>, I>>(object: I): Preferences_General {
    const message = createBasePreferences_General();
    message.houseOfWorshipIntegrations = object.houseOfWorshipIntegrations ?? false;
    message.crashReports = object.crashReports ?? false;
    message.analytics = object.analytics ?? false;
    message.logoPath = object.logoPath ?? "";
    message.language = object.language ?? "";
    return message;
  },
};

function createBasePreferences_Screens(): Preferences_Screens {
  return {
    enableAtLaunch: false,
    showPerformanceStats: false,
    ignoreBackgroundColors: false,
    clockSource: undefined,
    showKeynoteAndPowerpoint: false,
    disableBlackmagicSyncGroups: false,
    useDirectxRendering: false,
  };
}

export const Preferences_Screens = {
  encode(message: Preferences_Screens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableAtLaunch !== false) {
      writer.uint32(8).bool(message.enableAtLaunch);
    }
    if (message.showPerformanceStats !== false) {
      writer.uint32(16).bool(message.showPerformanceStats);
    }
    if (message.ignoreBackgroundColors !== false) {
      writer.uint32(24).bool(message.ignoreBackgroundColors);
    }
    if (message.clockSource !== undefined) {
      ProClockSource.encode(message.clockSource, writer.uint32(34).fork()).ldelim();
    }
    if (message.showKeynoteAndPowerpoint !== false) {
      writer.uint32(40).bool(message.showKeynoteAndPowerpoint);
    }
    if (message.disableBlackmagicSyncGroups !== false) {
      writer.uint32(48).bool(message.disableBlackmagicSyncGroups);
    }
    if (message.useDirectxRendering !== false) {
      writer.uint32(56).bool(message.useDirectxRendering);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Screens {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Screens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enableAtLaunch = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.showPerformanceStats = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ignoreBackgroundColors = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clockSource = ProClockSource.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.showKeynoteAndPowerpoint = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.disableBlackmagicSyncGroups = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.useDirectxRendering = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Screens {
    return {
      enableAtLaunch: isSet(object.enableAtLaunch) ? globalThis.Boolean(object.enableAtLaunch) : false,
      showPerformanceStats: isSet(object.showPerformanceStats)
        ? globalThis.Boolean(object.showPerformanceStats)
        : false,
      ignoreBackgroundColors: isSet(object.ignoreBackgroundColors)
        ? globalThis.Boolean(object.ignoreBackgroundColors)
        : false,
      clockSource: isSet(object.clockSource) ? ProClockSource.fromJSON(object.clockSource) : undefined,
      showKeynoteAndPowerpoint: isSet(object.showKeynoteAndPowerpoint)
        ? globalThis.Boolean(object.showKeynoteAndPowerpoint)
        : false,
      disableBlackmagicSyncGroups: isSet(object.disableBlackmagicSyncGroups)
        ? globalThis.Boolean(object.disableBlackmagicSyncGroups)
        : false,
      useDirectxRendering: isSet(object.useDirectxRendering) ? globalThis.Boolean(object.useDirectxRendering) : false,
    };
  },

  toJSON(message: Preferences_Screens): unknown {
    const obj: any = {};
    if (message.enableAtLaunch !== false) {
      obj.enableAtLaunch = message.enableAtLaunch;
    }
    if (message.showPerformanceStats !== false) {
      obj.showPerformanceStats = message.showPerformanceStats;
    }
    if (message.ignoreBackgroundColors !== false) {
      obj.ignoreBackgroundColors = message.ignoreBackgroundColors;
    }
    if (message.clockSource !== undefined) {
      obj.clockSource = ProClockSource.toJSON(message.clockSource);
    }
    if (message.showKeynoteAndPowerpoint !== false) {
      obj.showKeynoteAndPowerpoint = message.showKeynoteAndPowerpoint;
    }
    if (message.disableBlackmagicSyncGroups !== false) {
      obj.disableBlackmagicSyncGroups = message.disableBlackmagicSyncGroups;
    }
    if (message.useDirectxRendering !== false) {
      obj.useDirectxRendering = message.useDirectxRendering;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Screens>, I>>(base?: I): Preferences_Screens {
    return Preferences_Screens.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Screens>, I>>(object: I): Preferences_Screens {
    const message = createBasePreferences_Screens();
    message.enableAtLaunch = object.enableAtLaunch ?? false;
    message.showPerformanceStats = object.showPerformanceStats ?? false;
    message.ignoreBackgroundColors = object.ignoreBackgroundColors ?? false;
    message.clockSource = (object.clockSource !== undefined && object.clockSource !== null)
      ? ProClockSource.fromPartial(object.clockSource)
      : undefined;
    message.showKeynoteAndPowerpoint = object.showKeynoteAndPowerpoint ?? false;
    message.disableBlackmagicSyncGroups = object.disableBlackmagicSyncGroups ?? false;
    message.useDirectxRendering = object.useDirectxRendering ?? false;
    return message;
  },
};

function createBasePreferences_Import(): Preferences_Import {
  return {
    foregroundScaling: 0,
    foregroundIsBlurred: false,
    backgroundScaling: 0,
    backgroundIsBlurred: false,
    image: undefined,
    video: undefined,
    audio: undefined,
  };
}

export const Preferences_Import = {
  encode(message: Preferences_Import, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.foregroundScaling !== 0) {
      writer.uint32(8).int32(message.foregroundScaling);
    }
    if (message.foregroundIsBlurred !== false) {
      writer.uint32(48).bool(message.foregroundIsBlurred);
    }
    if (message.backgroundScaling !== 0) {
      writer.uint32(16).int32(message.backgroundScaling);
    }
    if (message.backgroundIsBlurred !== false) {
      writer.uint32(56).bool(message.backgroundIsBlurred);
    }
    if (message.image !== undefined) {
      Preferences_Import_Image.encode(message.image, writer.uint32(26).fork()).ldelim();
    }
    if (message.video !== undefined) {
      Preferences_Import_Video.encode(message.video, writer.uint32(34).fork()).ldelim();
    }
    if (message.audio !== undefined) {
      Preferences_Import_Audio.encode(message.audio, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.foregroundScaling = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.foregroundIsBlurred = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.backgroundScaling = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.backgroundIsBlurred = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = Preferences_Import_Image.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.video = Preferences_Import_Video.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.audio = Preferences_Import_Audio.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import {
    return {
      foregroundScaling: isSet(object.foregroundScaling) ? media_ScaleBehaviorFromJSON(object.foregroundScaling) : 0,
      foregroundIsBlurred: isSet(object.foregroundIsBlurred) ? globalThis.Boolean(object.foregroundIsBlurred) : false,
      backgroundScaling: isSet(object.backgroundScaling) ? media_ScaleBehaviorFromJSON(object.backgroundScaling) : 0,
      backgroundIsBlurred: isSet(object.backgroundIsBlurred) ? globalThis.Boolean(object.backgroundIsBlurred) : false,
      image: isSet(object.image) ? Preferences_Import_Image.fromJSON(object.image) : undefined,
      video: isSet(object.video) ? Preferences_Import_Video.fromJSON(object.video) : undefined,
      audio: isSet(object.audio) ? Preferences_Import_Audio.fromJSON(object.audio) : undefined,
    };
  },

  toJSON(message: Preferences_Import): unknown {
    const obj: any = {};
    if (message.foregroundScaling !== 0) {
      obj.foregroundScaling = media_ScaleBehaviorToJSON(message.foregroundScaling);
    }
    if (message.foregroundIsBlurred !== false) {
      obj.foregroundIsBlurred = message.foregroundIsBlurred;
    }
    if (message.backgroundScaling !== 0) {
      obj.backgroundScaling = media_ScaleBehaviorToJSON(message.backgroundScaling);
    }
    if (message.backgroundIsBlurred !== false) {
      obj.backgroundIsBlurred = message.backgroundIsBlurred;
    }
    if (message.image !== undefined) {
      obj.image = Preferences_Import_Image.toJSON(message.image);
    }
    if (message.video !== undefined) {
      obj.video = Preferences_Import_Video.toJSON(message.video);
    }
    if (message.audio !== undefined) {
      obj.audio = Preferences_Import_Audio.toJSON(message.audio);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import>, I>>(base?: I): Preferences_Import {
    return Preferences_Import.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import>, I>>(object: I): Preferences_Import {
    const message = createBasePreferences_Import();
    message.foregroundScaling = object.foregroundScaling ?? 0;
    message.foregroundIsBlurred = object.foregroundIsBlurred ?? false;
    message.backgroundScaling = object.backgroundScaling ?? 0;
    message.backgroundIsBlurred = object.backgroundIsBlurred ?? false;
    message.image = (object.image !== undefined && object.image !== null)
      ? Preferences_Import_Image.fromPartial(object.image)
      : undefined;
    message.video = (object.video !== undefined && object.video !== null)
      ? Preferences_Import_Video.fromPartial(object.video)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? Preferences_Import_Audio.fromPartial(object.audio)
      : undefined;
    return message;
  },
};

function createBasePreferences_Import_Image(): Preferences_Import_Image {
  return { layerType: 0, duration: undefined, nextBehavior: 0 };
}

export const Preferences_Import_Image = {
  encode(message: Preferences_Import_Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layerType !== 0) {
      writer.uint32(8).int32(message.layerType);
    }
    if (message.duration !== undefined) {
      Preferences_Import_Image_Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextBehavior !== 0) {
      writer.uint32(24).int32(message.nextBehavior);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Image();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layerType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.duration = Preferences_Import_Image_Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nextBehavior = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Image {
    return {
      layerType: isSet(object.layerType) ? action_LayerTypeFromJSON(object.layerType) : 0,
      duration: isSet(object.duration) ? Preferences_Import_Image_Duration.fromJSON(object.duration) : undefined,
      nextBehavior: isSet(object.nextBehavior) ? cue_CompletionTargetTypeFromJSON(object.nextBehavior) : 0,
    };
  },

  toJSON(message: Preferences_Import_Image): unknown {
    const obj: any = {};
    if (message.layerType !== 0) {
      obj.layerType = action_LayerTypeToJSON(message.layerType);
    }
    if (message.duration !== undefined) {
      obj.duration = Preferences_Import_Image_Duration.toJSON(message.duration);
    }
    if (message.nextBehavior !== 0) {
      obj.nextBehavior = cue_CompletionTargetTypeToJSON(message.nextBehavior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Image>, I>>(base?: I): Preferences_Import_Image {
    return Preferences_Import_Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Image>, I>>(object: I): Preferences_Import_Image {
    const message = createBasePreferences_Import_Image();
    message.layerType = object.layerType ?? 0;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? Preferences_Import_Image_Duration.fromPartial(object.duration)
      : undefined;
    message.nextBehavior = object.nextBehavior ?? 0;
    return message;
  },
};

function createBasePreferences_Import_Image_Duration(): Preferences_Import_Image_Duration {
  return { none: undefined, time: undefined, random: undefined };
}

export const Preferences_Import_Image_Duration = {
  encode(message: Preferences_Import_Image_Duration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.none !== undefined) {
      Preferences_Import_Image_Duration_None.encode(message.none, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Preferences_Import_Image_Duration_Time.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.random !== undefined) {
      Preferences_Import_Image_Duration_Random.encode(message.random, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Image_Duration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Image_Duration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.none = Preferences_Import_Image_Duration_None.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.time = Preferences_Import_Image_Duration_Time.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.random = Preferences_Import_Image_Duration_Random.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Image_Duration {
    return {
      none: isSet(object.none) ? Preferences_Import_Image_Duration_None.fromJSON(object.none) : undefined,
      time: isSet(object.time) ? Preferences_Import_Image_Duration_Time.fromJSON(object.time) : undefined,
      random: isSet(object.random) ? Preferences_Import_Image_Duration_Random.fromJSON(object.random) : undefined,
    };
  },

  toJSON(message: Preferences_Import_Image_Duration): unknown {
    const obj: any = {};
    if (message.none !== undefined) {
      obj.none = Preferences_Import_Image_Duration_None.toJSON(message.none);
    }
    if (message.time !== undefined) {
      obj.time = Preferences_Import_Image_Duration_Time.toJSON(message.time);
    }
    if (message.random !== undefined) {
      obj.random = Preferences_Import_Image_Duration_Random.toJSON(message.random);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Image_Duration>, I>>(
    base?: I,
  ): Preferences_Import_Image_Duration {
    return Preferences_Import_Image_Duration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Image_Duration>, I>>(
    object: I,
  ): Preferences_Import_Image_Duration {
    const message = createBasePreferences_Import_Image_Duration();
    message.none = (object.none !== undefined && object.none !== null)
      ? Preferences_Import_Image_Duration_None.fromPartial(object.none)
      : undefined;
    message.time = (object.time !== undefined && object.time !== null)
      ? Preferences_Import_Image_Duration_Time.fromPartial(object.time)
      : undefined;
    message.random = (object.random !== undefined && object.random !== null)
      ? Preferences_Import_Image_Duration_Random.fromPartial(object.random)
      : undefined;
    return message;
  },
};

function createBasePreferences_Import_Image_Duration_None(): Preferences_Import_Image_Duration_None {
  return {};
}

export const Preferences_Import_Image_Duration_None = {
  encode(_: Preferences_Import_Image_Duration_None, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Image_Duration_None {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Image_Duration_None();
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

  fromJSON(_: any): Preferences_Import_Image_Duration_None {
    return {};
  },

  toJSON(_: Preferences_Import_Image_Duration_None): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_None>, I>>(
    base?: I,
  ): Preferences_Import_Image_Duration_None {
    return Preferences_Import_Image_Duration_None.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_None>, I>>(
    _: I,
  ): Preferences_Import_Image_Duration_None {
    const message = createBasePreferences_Import_Image_Duration_None();
    return message;
  },
};

function createBasePreferences_Import_Image_Duration_Time(): Preferences_Import_Image_Duration_Time {
  return { time: 0 };
}

export const Preferences_Import_Image_Duration_Time = {
  encode(message: Preferences_Import_Image_Duration_Time, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(9).double(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Image_Duration_Time {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Image_Duration_Time();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.time = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Image_Duration_Time {
    return { time: isSet(object.time) ? globalThis.Number(object.time) : 0 };
  },

  toJSON(message: Preferences_Import_Image_Duration_Time): unknown {
    const obj: any = {};
    if (message.time !== 0) {
      obj.time = message.time;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_Time>, I>>(
    base?: I,
  ): Preferences_Import_Image_Duration_Time {
    return Preferences_Import_Image_Duration_Time.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_Time>, I>>(
    object: I,
  ): Preferences_Import_Image_Duration_Time {
    const message = createBasePreferences_Import_Image_Duration_Time();
    message.time = object.time ?? 0;
    return message;
  },
};

function createBasePreferences_Import_Image_Duration_Random(): Preferences_Import_Image_Duration_Random {
  return { minimumTime: 0, maximumTime: 0 };
}

export const Preferences_Import_Image_Duration_Random = {
  encode(message: Preferences_Import_Image_Duration_Random, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minimumTime !== 0) {
      writer.uint32(9).double(message.minimumTime);
    }
    if (message.maximumTime !== 0) {
      writer.uint32(17).double(message.maximumTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Image_Duration_Random {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Image_Duration_Random();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.minimumTime = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.maximumTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Image_Duration_Random {
    return {
      minimumTime: isSet(object.minimumTime) ? globalThis.Number(object.minimumTime) : 0,
      maximumTime: isSet(object.maximumTime) ? globalThis.Number(object.maximumTime) : 0,
    };
  },

  toJSON(message: Preferences_Import_Image_Duration_Random): unknown {
    const obj: any = {};
    if (message.minimumTime !== 0) {
      obj.minimumTime = message.minimumTime;
    }
    if (message.maximumTime !== 0) {
      obj.maximumTime = message.maximumTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_Random>, I>>(
    base?: I,
  ): Preferences_Import_Image_Duration_Random {
    return Preferences_Import_Image_Duration_Random.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Image_Duration_Random>, I>>(
    object: I,
  ): Preferences_Import_Image_Duration_Random {
    const message = createBasePreferences_Import_Image_Duration_Random();
    message.minimumTime = object.minimumTime ?? 0;
    message.maximumTime = object.maximumTime ?? 0;
    return message;
  },
};

function createBasePreferences_Import_Video(): Preferences_Import_Video {
  return { layerType: 0, playbackBehavior: 0, endBehavior: 0, nextBehavior: 0 };
}

export const Preferences_Import_Video = {
  encode(message: Preferences_Import_Video, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layerType !== 0) {
      writer.uint32(8).int32(message.layerType);
    }
    if (message.playbackBehavior !== 0) {
      writer.uint32(16).int32(message.playbackBehavior);
    }
    if (message.endBehavior !== 0) {
      writer.uint32(24).int32(message.endBehavior);
    }
    if (message.nextBehavior !== 0) {
      writer.uint32(32).int32(message.nextBehavior);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Video {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Video();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.layerType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.endBehavior = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nextBehavior = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Video {
    return {
      layerType: isSet(object.layerType) ? action_LayerTypeFromJSON(object.layerType) : 0,
      playbackBehavior: isSet(object.playbackBehavior)
        ? media_TransportProperties_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      endBehavior: isSet(object.endBehavior) ? media_VideoProperties_EndBehaviorFromJSON(object.endBehavior) : 0,
      nextBehavior: isSet(object.nextBehavior) ? cue_CompletionTargetTypeFromJSON(object.nextBehavior) : 0,
    };
  },

  toJSON(message: Preferences_Import_Video): unknown {
    const obj: any = {};
    if (message.layerType !== 0) {
      obj.layerType = action_LayerTypeToJSON(message.layerType);
    }
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior = media_TransportProperties_PlaybackBehaviorToJSON(message.playbackBehavior);
    }
    if (message.endBehavior !== 0) {
      obj.endBehavior = media_VideoProperties_EndBehaviorToJSON(message.endBehavior);
    }
    if (message.nextBehavior !== 0) {
      obj.nextBehavior = cue_CompletionTargetTypeToJSON(message.nextBehavior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Video>, I>>(base?: I): Preferences_Import_Video {
    return Preferences_Import_Video.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Video>, I>>(object: I): Preferences_Import_Video {
    const message = createBasePreferences_Import_Video();
    message.layerType = object.layerType ?? 0;
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.endBehavior = object.endBehavior ?? 0;
    message.nextBehavior = object.nextBehavior ?? 0;
    return message;
  },
};

function createBasePreferences_Import_Audio(): Preferences_Import_Audio {
  return { playbackBehavior: 0, nextBehavior: 0 };
}

export const Preferences_Import_Audio = {
  encode(message: Preferences_Import_Audio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.playbackBehavior !== 0) {
      writer.uint32(8).int32(message.playbackBehavior);
    }
    if (message.nextBehavior !== 0) {
      writer.uint32(16).int32(message.nextBehavior);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Import_Audio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Import_Audio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.playbackBehavior = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nextBehavior = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Import_Audio {
    return {
      playbackBehavior: isSet(object.playbackBehavior)
        ? media_TransportProperties_PlaybackBehaviorFromJSON(object.playbackBehavior)
        : 0,
      nextBehavior: isSet(object.nextBehavior) ? cue_CompletionTargetTypeFromJSON(object.nextBehavior) : 0,
    };
  },

  toJSON(message: Preferences_Import_Audio): unknown {
    const obj: any = {};
    if (message.playbackBehavior !== 0) {
      obj.playbackBehavior = media_TransportProperties_PlaybackBehaviorToJSON(message.playbackBehavior);
    }
    if (message.nextBehavior !== 0) {
      obj.nextBehavior = cue_CompletionTargetTypeToJSON(message.nextBehavior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Import_Audio>, I>>(base?: I): Preferences_Import_Audio {
    return Preferences_Import_Audio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Import_Audio>, I>>(object: I): Preferences_Import_Audio {
    const message = createBasePreferences_Import_Audio();
    message.playbackBehavior = object.playbackBehavior ?? 0;
    message.nextBehavior = object.nextBehavior ?? 0;
    return message;
  },
};

function createBasePreferences_Groups(): Preferences_Groups {
  return { groups: undefined, labels: undefined };
}

export const Preferences_Groups = {
  encode(message: Preferences_Groups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groups !== undefined) {
      ProGroupsDocument.encode(message.groups, writer.uint32(10).fork()).ldelim();
    }
    if (message.labels !== undefined) {
      ProLabelsDocument.encode(message.labels, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Groups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Groups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups = ProGroupsDocument.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.labels = ProLabelsDocument.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Groups {
    return {
      groups: isSet(object.groups) ? ProGroupsDocument.fromJSON(object.groups) : undefined,
      labels: isSet(object.labels) ? ProLabelsDocument.fromJSON(object.labels) : undefined,
    };
  },

  toJSON(message: Preferences_Groups): unknown {
    const obj: any = {};
    if (message.groups !== undefined) {
      obj.groups = ProGroupsDocument.toJSON(message.groups);
    }
    if (message.labels !== undefined) {
      obj.labels = ProLabelsDocument.toJSON(message.labels);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Groups>, I>>(base?: I): Preferences_Groups {
    return Preferences_Groups.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Groups>, I>>(object: I): Preferences_Groups {
    const message = createBasePreferences_Groups();
    message.groups = (object.groups !== undefined && object.groups !== null)
      ? ProGroupsDocument.fromPartial(object.groups)
      : undefined;
    message.labels = (object.labels !== undefined && object.labels !== null)
      ? ProLabelsDocument.fromPartial(object.labels)
      : undefined;
    return message;
  },
};

function createBasePreferences_Network(): Preferences_Network {
  return { network: undefined, remotes: undefined, link: undefined };
}

export const Preferences_Network = {
  encode(message: Preferences_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== undefined) {
      Preferences_Network_Network.encode(message.network, writer.uint32(10).fork()).ldelim();
    }
    if (message.remotes !== undefined) {
      Preferences_Network_Remotes.encode(message.remotes, writer.uint32(18).fork()).ldelim();
    }
    if (message.link !== undefined) {
      Preferences_Network_Link.encode(message.link, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.network = Preferences_Network_Network.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.remotes = Preferences_Network_Remotes.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.link = Preferences_Network_Link.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network {
    return {
      network: isSet(object.network) ? Preferences_Network_Network.fromJSON(object.network) : undefined,
      remotes: isSet(object.remotes) ? Preferences_Network_Remotes.fromJSON(object.remotes) : undefined,
      link: isSet(object.link) ? Preferences_Network_Link.fromJSON(object.link) : undefined,
    };
  },

  toJSON(message: Preferences_Network): unknown {
    const obj: any = {};
    if (message.network !== undefined) {
      obj.network = Preferences_Network_Network.toJSON(message.network);
    }
    if (message.remotes !== undefined) {
      obj.remotes = Preferences_Network_Remotes.toJSON(message.remotes);
    }
    if (message.link !== undefined) {
      obj.link = Preferences_Network_Link.toJSON(message.link);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network>, I>>(base?: I): Preferences_Network {
    return Preferences_Network.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network>, I>>(object: I): Preferences_Network {
    const message = createBasePreferences_Network();
    message.network = (object.network !== undefined && object.network !== null)
      ? Preferences_Network_Network.fromPartial(object.network)
      : undefined;
    message.remotes = (object.remotes !== undefined && object.remotes !== null)
      ? Preferences_Network_Remotes.fromPartial(object.remotes)
      : undefined;
    message.link = (object.link !== undefined && object.link !== null)
      ? Preferences_Network_Link.fromPartial(object.link)
      : undefined;
    return message;
  },
};

function createBasePreferences_Network_Network(): Preferences_Network_Network {
  return { enable: false, name: "", port: 0 };
}

export const Preferences_Network_Network = {
  encode(message: Preferences_Network_Network, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network_Network {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network_Network();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network_Network {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
    };
  },

  toJSON(message: Preferences_Network_Network): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network_Network>, I>>(base?: I): Preferences_Network_Network {
    return Preferences_Network_Network.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network_Network>, I>>(object: I): Preferences_Network_Network {
    const message = createBasePreferences_Network_Network();
    message.enable = object.enable ?? false;
    message.name = object.name ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

function createBasePreferences_Network_Remotes(): Preferences_Network_Remotes {
  return { proRemote: undefined, stageApp: undefined };
}

export const Preferences_Network_Remotes = {
  encode(message: Preferences_Network_Remotes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proRemote !== undefined) {
      Preferences_Network_Remotes_ProRemote.encode(message.proRemote, writer.uint32(10).fork()).ldelim();
    }
    if (message.stageApp !== undefined) {
      Preferences_Network_Remotes_StageApp.encode(message.stageApp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network_Remotes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network_Remotes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proRemote = Preferences_Network_Remotes_ProRemote.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.stageApp = Preferences_Network_Remotes_StageApp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network_Remotes {
    return {
      proRemote: isSet(object.proRemote) ? Preferences_Network_Remotes_ProRemote.fromJSON(object.proRemote) : undefined,
      stageApp: isSet(object.stageApp) ? Preferences_Network_Remotes_StageApp.fromJSON(object.stageApp) : undefined,
    };
  },

  toJSON(message: Preferences_Network_Remotes): unknown {
    const obj: any = {};
    if (message.proRemote !== undefined) {
      obj.proRemote = Preferences_Network_Remotes_ProRemote.toJSON(message.proRemote);
    }
    if (message.stageApp !== undefined) {
      obj.stageApp = Preferences_Network_Remotes_StageApp.toJSON(message.stageApp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network_Remotes>, I>>(base?: I): Preferences_Network_Remotes {
    return Preferences_Network_Remotes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network_Remotes>, I>>(object: I): Preferences_Network_Remotes {
    const message = createBasePreferences_Network_Remotes();
    message.proRemote = (object.proRemote !== undefined && object.proRemote !== null)
      ? Preferences_Network_Remotes_ProRemote.fromPartial(object.proRemote)
      : undefined;
    message.stageApp = (object.stageApp !== undefined && object.stageApp !== null)
      ? Preferences_Network_Remotes_StageApp.fromPartial(object.stageApp)
      : undefined;
    return message;
  },
};

function createBasePreferences_Network_Remotes_ProRemote(): Preferences_Network_Remotes_ProRemote {
  return {
    enable: false,
    enableController: false,
    controllerPassword: "",
    enableObserver: false,
    observerPassword: "",
  };
}

export const Preferences_Network_Remotes_ProRemote = {
  encode(message: Preferences_Network_Remotes_ProRemote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.enableController !== false) {
      writer.uint32(16).bool(message.enableController);
    }
    if (message.controllerPassword !== "") {
      writer.uint32(26).string(message.controllerPassword);
    }
    if (message.enableObserver !== false) {
      writer.uint32(32).bool(message.enableObserver);
    }
    if (message.observerPassword !== "") {
      writer.uint32(42).string(message.observerPassword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network_Remotes_ProRemote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network_Remotes_ProRemote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.enableController = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.controllerPassword = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.enableObserver = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.observerPassword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network_Remotes_ProRemote {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      enableController: isSet(object.enableController) ? globalThis.Boolean(object.enableController) : false,
      controllerPassword: isSet(object.controllerPassword) ? globalThis.String(object.controllerPassword) : "",
      enableObserver: isSet(object.enableObserver) ? globalThis.Boolean(object.enableObserver) : false,
      observerPassword: isSet(object.observerPassword) ? globalThis.String(object.observerPassword) : "",
    };
  },

  toJSON(message: Preferences_Network_Remotes_ProRemote): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.enableController !== false) {
      obj.enableController = message.enableController;
    }
    if (message.controllerPassword !== "") {
      obj.controllerPassword = message.controllerPassword;
    }
    if (message.enableObserver !== false) {
      obj.enableObserver = message.enableObserver;
    }
    if (message.observerPassword !== "") {
      obj.observerPassword = message.observerPassword;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network_Remotes_ProRemote>, I>>(
    base?: I,
  ): Preferences_Network_Remotes_ProRemote {
    return Preferences_Network_Remotes_ProRemote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network_Remotes_ProRemote>, I>>(
    object: I,
  ): Preferences_Network_Remotes_ProRemote {
    const message = createBasePreferences_Network_Remotes_ProRemote();
    message.enable = object.enable ?? false;
    message.enableController = object.enableController ?? false;
    message.controllerPassword = object.controllerPassword ?? "";
    message.enableObserver = object.enableObserver ?? false;
    message.observerPassword = object.observerPassword ?? "";
    return message;
  },
};

function createBasePreferences_Network_Remotes_StageApp(): Preferences_Network_Remotes_StageApp {
  return { enable: false, password: "" };
}

export const Preferences_Network_Remotes_StageApp = {
  encode(message: Preferences_Network_Remotes_StageApp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network_Remotes_StageApp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network_Remotes_StageApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network_Remotes_StageApp {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: Preferences_Network_Remotes_StageApp): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network_Remotes_StageApp>, I>>(
    base?: I,
  ): Preferences_Network_Remotes_StageApp {
    return Preferences_Network_Remotes_StageApp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network_Remotes_StageApp>, I>>(
    object: I,
  ): Preferences_Network_Remotes_StageApp {
    const message = createBasePreferences_Network_Remotes_StageApp();
    message.enable = object.enable ?? false;
    message.password = object.password ?? "";
    return message;
  },
};

function createBasePreferences_Network_Link(): Preferences_Network_Link {
  return { enable: false, linkGroup: "" };
}

export const Preferences_Network_Link = {
  encode(message: Preferences_Network_Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.linkGroup !== "") {
      writer.uint32(18).string(message.linkGroup);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Network_Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Network_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.linkGroup = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Network_Link {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      linkGroup: isSet(object.linkGroup) ? globalThis.String(object.linkGroup) : "",
    };
  },

  toJSON(message: Preferences_Network_Link): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.linkGroup !== "") {
      obj.linkGroup = message.linkGroup;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Network_Link>, I>>(base?: I): Preferences_Network_Link {
    return Preferences_Network_Link.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Network_Link>, I>>(object: I): Preferences_Network_Link {
    const message = createBasePreferences_Network_Link();
    message.enable = object.enable ?? false;
    message.linkGroup = object.linkGroup ?? "";
    return message;
  },
};

function createBasePreferences_Sync(): Preferences_Sync {
  return {
    repository: "",
    includeLibraries: false,
    includeMedia: false,
    includePlaylists: false,
    includeThemes: false,
    includeSupportFiles: false,
    direction: 0,
    replaceDestinationFiles: false,
  };
}

export const Preferences_Sync = {
  encode(message: Preferences_Sync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repository !== "") {
      writer.uint32(10).string(message.repository);
    }
    if (message.includeLibraries !== false) {
      writer.uint32(16).bool(message.includeLibraries);
    }
    if (message.includeMedia !== false) {
      writer.uint32(24).bool(message.includeMedia);
    }
    if (message.includePlaylists !== false) {
      writer.uint32(32).bool(message.includePlaylists);
    }
    if (message.includeThemes !== false) {
      writer.uint32(40).bool(message.includeThemes);
    }
    if (message.includeSupportFiles !== false) {
      writer.uint32(48).bool(message.includeSupportFiles);
    }
    if (message.direction !== 0) {
      writer.uint32(56).int32(message.direction);
    }
    if (message.replaceDestinationFiles !== false) {
      writer.uint32(64).bool(message.replaceDestinationFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Sync {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Sync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repository = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.includeLibraries = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.includeMedia = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.includePlaylists = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.includeThemes = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.includeSupportFiles = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.replaceDestinationFiles = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Sync {
    return {
      repository: isSet(object.repository) ? globalThis.String(object.repository) : "",
      includeLibraries: isSet(object.includeLibraries) ? globalThis.Boolean(object.includeLibraries) : false,
      includeMedia: isSet(object.includeMedia) ? globalThis.Boolean(object.includeMedia) : false,
      includePlaylists: isSet(object.includePlaylists) ? globalThis.Boolean(object.includePlaylists) : false,
      includeThemes: isSet(object.includeThemes) ? globalThis.Boolean(object.includeThemes) : false,
      includeSupportFiles: isSet(object.includeSupportFiles) ? globalThis.Boolean(object.includeSupportFiles) : false,
      direction: isSet(object.direction) ? preferences_Sync_SyncDirectionFromJSON(object.direction) : 0,
      replaceDestinationFiles: isSet(object.replaceDestinationFiles)
        ? globalThis.Boolean(object.replaceDestinationFiles)
        : false,
    };
  },

  toJSON(message: Preferences_Sync): unknown {
    const obj: any = {};
    if (message.repository !== "") {
      obj.repository = message.repository;
    }
    if (message.includeLibraries !== false) {
      obj.includeLibraries = message.includeLibraries;
    }
    if (message.includeMedia !== false) {
      obj.includeMedia = message.includeMedia;
    }
    if (message.includePlaylists !== false) {
      obj.includePlaylists = message.includePlaylists;
    }
    if (message.includeThemes !== false) {
      obj.includeThemes = message.includeThemes;
    }
    if (message.includeSupportFiles !== false) {
      obj.includeSupportFiles = message.includeSupportFiles;
    }
    if (message.direction !== 0) {
      obj.direction = preferences_Sync_SyncDirectionToJSON(message.direction);
    }
    if (message.replaceDestinationFiles !== false) {
      obj.replaceDestinationFiles = message.replaceDestinationFiles;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Sync>, I>>(base?: I): Preferences_Sync {
    return Preferences_Sync.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Sync>, I>>(object: I): Preferences_Sync {
    const message = createBasePreferences_Sync();
    message.repository = object.repository ?? "";
    message.includeLibraries = object.includeLibraries ?? false;
    message.includeMedia = object.includeMedia ?? false;
    message.includePlaylists = object.includePlaylists ?? false;
    message.includeThemes = object.includeThemes ?? false;
    message.includeSupportFiles = object.includeSupportFiles ?? false;
    message.direction = object.direction ?? 0;
    message.replaceDestinationFiles = object.replaceDestinationFiles ?? false;
    return message;
  },
};

function createBasePreferences_Advanced(): Preferences_Advanced {
  return {
    suppressAutoStart: false,
    presentationAudioBehavior: 0,
    announcementsAudioBehavior: 0,
    ndiDiscovery: undefined,
    supportFilesPath: "",
    manageMediaAutomatically: false,
    searchPaths: undefined,
  };
}

export const Preferences_Advanced = {
  encode(message: Preferences_Advanced, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.suppressAutoStart !== false) {
      writer.uint32(8).bool(message.suppressAutoStart);
    }
    if (message.presentationAudioBehavior !== 0) {
      writer.uint32(16).int32(message.presentationAudioBehavior);
    }
    if (message.announcementsAudioBehavior !== 0) {
      writer.uint32(24).int32(message.announcementsAudioBehavior);
    }
    if (message.ndiDiscovery !== undefined) {
      Preferences_Advanced_NDIDiscovery.encode(message.ndiDiscovery, writer.uint32(34).fork()).ldelim();
    }
    if (message.supportFilesPath !== "") {
      writer.uint32(42).string(message.supportFilesPath);
    }
    if (message.manageMediaAutomatically !== false) {
      writer.uint32(48).bool(message.manageMediaAutomatically);
    }
    if (message.searchPaths !== undefined) {
      Preferences_Advanced_SearchPaths.encode(message.searchPaths, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Advanced {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Advanced();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.suppressAutoStart = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.presentationAudioBehavior = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.announcementsAudioBehavior = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ndiDiscovery = Preferences_Advanced_NDIDiscovery.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.supportFilesPath = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.manageMediaAutomatically = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.searchPaths = Preferences_Advanced_SearchPaths.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Advanced {
    return {
      suppressAutoStart: isSet(object.suppressAutoStart) ? globalThis.Boolean(object.suppressAutoStart) : false,
      presentationAudioBehavior: isSet(object.presentationAudioBehavior)
        ? preferences_Advanced_AudioForegroundMediaBehaviorFromJSON(object.presentationAudioBehavior)
        : 0,
      announcementsAudioBehavior: isSet(object.announcementsAudioBehavior)
        ? preferences_Advanced_AudioForegroundMediaBehaviorFromJSON(object.announcementsAudioBehavior)
        : 0,
      ndiDiscovery: isSet(object.ndiDiscovery)
        ? Preferences_Advanced_NDIDiscovery.fromJSON(object.ndiDiscovery)
        : undefined,
      supportFilesPath: isSet(object.supportFilesPath) ? globalThis.String(object.supportFilesPath) : "",
      manageMediaAutomatically: isSet(object.manageMediaAutomatically)
        ? globalThis.Boolean(object.manageMediaAutomatically)
        : false,
      searchPaths: isSet(object.searchPaths)
        ? Preferences_Advanced_SearchPaths.fromJSON(object.searchPaths)
        : undefined,
    };
  },

  toJSON(message: Preferences_Advanced): unknown {
    const obj: any = {};
    if (message.suppressAutoStart !== false) {
      obj.suppressAutoStart = message.suppressAutoStart;
    }
    if (message.presentationAudioBehavior !== 0) {
      obj.presentationAudioBehavior = preferences_Advanced_AudioForegroundMediaBehaviorToJSON(
        message.presentationAudioBehavior,
      );
    }
    if (message.announcementsAudioBehavior !== 0) {
      obj.announcementsAudioBehavior = preferences_Advanced_AudioForegroundMediaBehaviorToJSON(
        message.announcementsAudioBehavior,
      );
    }
    if (message.ndiDiscovery !== undefined) {
      obj.ndiDiscovery = Preferences_Advanced_NDIDiscovery.toJSON(message.ndiDiscovery);
    }
    if (message.supportFilesPath !== "") {
      obj.supportFilesPath = message.supportFilesPath;
    }
    if (message.manageMediaAutomatically !== false) {
      obj.manageMediaAutomatically = message.manageMediaAutomatically;
    }
    if (message.searchPaths !== undefined) {
      obj.searchPaths = Preferences_Advanced_SearchPaths.toJSON(message.searchPaths);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Advanced>, I>>(base?: I): Preferences_Advanced {
    return Preferences_Advanced.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Advanced>, I>>(object: I): Preferences_Advanced {
    const message = createBasePreferences_Advanced();
    message.suppressAutoStart = object.suppressAutoStart ?? false;
    message.presentationAudioBehavior = object.presentationAudioBehavior ?? 0;
    message.announcementsAudioBehavior = object.announcementsAudioBehavior ?? 0;
    message.ndiDiscovery = (object.ndiDiscovery !== undefined && object.ndiDiscovery !== null)
      ? Preferences_Advanced_NDIDiscovery.fromPartial(object.ndiDiscovery)
      : undefined;
    message.supportFilesPath = object.supportFilesPath ?? "";
    message.manageMediaAutomatically = object.manageMediaAutomatically ?? false;
    message.searchPaths = (object.searchPaths !== undefined && object.searchPaths !== null)
      ? Preferences_Advanced_SearchPaths.fromPartial(object.searchPaths)
      : undefined;
    return message;
  },
};

function createBasePreferences_Advanced_NDIDiscovery(): Preferences_Advanced_NDIDiscovery {
  return { showLocalSources: false, receiveGroups: "", additionalSearchIps: "" };
}

export const Preferences_Advanced_NDIDiscovery = {
  encode(message: Preferences_Advanced_NDIDiscovery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.showLocalSources !== false) {
      writer.uint32(8).bool(message.showLocalSources);
    }
    if (message.receiveGroups !== "") {
      writer.uint32(18).string(message.receiveGroups);
    }
    if (message.additionalSearchIps !== "") {
      writer.uint32(26).string(message.additionalSearchIps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Advanced_NDIDiscovery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Advanced_NDIDiscovery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.showLocalSources = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiveGroups = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.additionalSearchIps = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Advanced_NDIDiscovery {
    return {
      showLocalSources: isSet(object.showLocalSources) ? globalThis.Boolean(object.showLocalSources) : false,
      receiveGroups: isSet(object.receiveGroups) ? globalThis.String(object.receiveGroups) : "",
      additionalSearchIps: isSet(object.additionalSearchIps) ? globalThis.String(object.additionalSearchIps) : "",
    };
  },

  toJSON(message: Preferences_Advanced_NDIDiscovery): unknown {
    const obj: any = {};
    if (message.showLocalSources !== false) {
      obj.showLocalSources = message.showLocalSources;
    }
    if (message.receiveGroups !== "") {
      obj.receiveGroups = message.receiveGroups;
    }
    if (message.additionalSearchIps !== "") {
      obj.additionalSearchIps = message.additionalSearchIps;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Advanced_NDIDiscovery>, I>>(
    base?: I,
  ): Preferences_Advanced_NDIDiscovery {
    return Preferences_Advanced_NDIDiscovery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Advanced_NDIDiscovery>, I>>(
    object: I,
  ): Preferences_Advanced_NDIDiscovery {
    const message = createBasePreferences_Advanced_NDIDiscovery();
    message.showLocalSources = object.showLocalSources ?? false;
    message.receiveGroups = object.receiveGroups ?? "";
    message.additionalSearchIps = object.additionalSearchIps ?? "";
    return message;
  },
};

function createBasePreferences_Advanced_SearchPaths(): Preferences_Advanced_SearchPaths {
  return { automaticallyRelink: false, paths: [] };
}

export const Preferences_Advanced_SearchPaths = {
  encode(message: Preferences_Advanced_SearchPaths, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.automaticallyRelink !== false) {
      writer.uint32(8).bool(message.automaticallyRelink);
    }
    for (const v of message.paths) {
      Preferences_Advanced_SearchPaths_Path.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Advanced_SearchPaths {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Advanced_SearchPaths();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.automaticallyRelink = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paths.push(Preferences_Advanced_SearchPaths_Path.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Advanced_SearchPaths {
    return {
      automaticallyRelink: isSet(object.automaticallyRelink) ? globalThis.Boolean(object.automaticallyRelink) : false,
      paths: globalThis.Array.isArray(object?.paths)
        ? object.paths.map((e: any) => Preferences_Advanced_SearchPaths_Path.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Preferences_Advanced_SearchPaths): unknown {
    const obj: any = {};
    if (message.automaticallyRelink !== false) {
      obj.automaticallyRelink = message.automaticallyRelink;
    }
    if (message.paths?.length) {
      obj.paths = message.paths.map((e) => Preferences_Advanced_SearchPaths_Path.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Advanced_SearchPaths>, I>>(
    base?: I,
  ): Preferences_Advanced_SearchPaths {
    return Preferences_Advanced_SearchPaths.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Advanced_SearchPaths>, I>>(
    object: I,
  ): Preferences_Advanced_SearchPaths {
    const message = createBasePreferences_Advanced_SearchPaths();
    message.automaticallyRelink = object.automaticallyRelink ?? false;
    message.paths = object.paths?.map((e) => Preferences_Advanced_SearchPaths_Path.fromPartial(e)) || [];
    return message;
  },
};

function createBasePreferences_Advanced_SearchPaths_Path(): Preferences_Advanced_SearchPaths_Path {
  return { enable: false, name: "", path: "", urlRoot: 0 };
}

export const Preferences_Advanced_SearchPaths_Path = {
  encode(message: Preferences_Advanced_SearchPaths_Path, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== false) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    if (message.urlRoot !== 0) {
      writer.uint32(32).int32(message.urlRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Advanced_SearchPaths_Path {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Advanced_SearchPaths_Path();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
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

          message.path = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.urlRoot = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Advanced_SearchPaths_Path {
    return {
      enable: isSet(object.enable) ? globalThis.Boolean(object.enable) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      path: isSet(object.path) ? globalThis.String(object.path) : "",
      urlRoot: isSet(object.urlRoot) ? uRL_LocalRelativePath_RootFromJSON(object.urlRoot) : 0,
    };
  },

  toJSON(message: Preferences_Advanced_SearchPaths_Path): unknown {
    const obj: any = {};
    if (message.enable !== false) {
      obj.enable = message.enable;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    if (message.urlRoot !== 0) {
      obj.urlRoot = uRL_LocalRelativePath_RootToJSON(message.urlRoot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Advanced_SearchPaths_Path>, I>>(
    base?: I,
  ): Preferences_Advanced_SearchPaths_Path {
    return Preferences_Advanced_SearchPaths_Path.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Advanced_SearchPaths_Path>, I>>(
    object: I,
  ): Preferences_Advanced_SearchPaths_Path {
    const message = createBasePreferences_Advanced_SearchPaths_Path();
    message.enable = object.enable ?? false;
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    message.urlRoot = object.urlRoot ?? 0;
    return message;
  },
};

function createBasePreferences_Updates(): Preferences_Updates {
  return { notifyWhenAvailable: false, updateChannel: 0 };
}

export const Preferences_Updates = {
  encode(message: Preferences_Updates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notifyWhenAvailable !== false) {
      writer.uint32(8).bool(message.notifyWhenAvailable);
    }
    if (message.updateChannel !== 0) {
      writer.uint32(16).int32(message.updateChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preferences_Updates {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreferences_Updates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.notifyWhenAvailable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.updateChannel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preferences_Updates {
    return {
      notifyWhenAvailable: isSet(object.notifyWhenAvailable) ? globalThis.Boolean(object.notifyWhenAvailable) : false,
      updateChannel: isSet(object.updateChannel) ? preferences_Updates_ChannelFromJSON(object.updateChannel) : 0,
    };
  },

  toJSON(message: Preferences_Updates): unknown {
    const obj: any = {};
    if (message.notifyWhenAvailable !== false) {
      obj.notifyWhenAvailable = message.notifyWhenAvailable;
    }
    if (message.updateChannel !== 0) {
      obj.updateChannel = preferences_Updates_ChannelToJSON(message.updateChannel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preferences_Updates>, I>>(base?: I): Preferences_Updates {
    return Preferences_Updates.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preferences_Updates>, I>>(object: I): Preferences_Updates {
    const message = createBasePreferences_Updates();
    message.notifyWhenAvailable = object.notifyWhenAvailable ?? false;
    message.updateChannel = object.updateChannel ?? 0;
    return message;
  },
};

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
