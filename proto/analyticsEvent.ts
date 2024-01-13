/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { API } from './analyticsApi';
import { Capture } from './analyticsCapture';
import { Create } from './analyticsCreate';
import { Import } from './analyticsImport';
import { PlaybackMarker } from './analyticsPlaybackMarker';
import { ProContent } from './analyticsProContent';
import { Startup } from './analyticsStartup';
import { Sync } from './analyticsSync';
import { Timecode } from './analyticsTimecode';
import { Timeline } from './analyticsTimeline';
import { Trigger } from './analyticsTrigger';
import { UI } from './analyticsUI';
import { Update } from './analyticsUpdate';
import { WHMStore } from './analyticsWHMStore';

export const protobufPackage = 'rv.analytics';

export interface Event {
  ui?: UI | undefined;
  startup?: Startup | undefined;
  trigger?: Trigger | undefined;
  create?: Create | undefined;
  import?: Import | undefined;
  timeline?: Timeline | undefined;
  sync?: Sync | undefined;
  api?: API | undefined;
  timecode?: Timecode | undefined;
  playbackMarker?: PlaybackMarker | undefined;
  update?: Update | undefined;
  whmStore?: WHMStore | undefined;
  proContent?: ProContent | undefined;
  capture?: Capture | undefined;
}

function createBaseEvent(): Event {
  return {
    ui: undefined,
    startup: undefined,
    trigger: undefined,
    create: undefined,
    import: undefined,
    timeline: undefined,
    sync: undefined,
    api: undefined,
    timecode: undefined,
    playbackMarker: undefined,
    update: undefined,
    whmStore: undefined,
    proContent: undefined,
    capture: undefined,
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ui !== undefined) {
      UI.encode(message.ui, writer.uint32(10).fork()).ldelim();
    }
    if (message.startup !== undefined) {
      Startup.encode(message.startup, writer.uint32(18).fork()).ldelim();
    }
    if (message.trigger !== undefined) {
      Trigger.encode(message.trigger, writer.uint32(26).fork()).ldelim();
    }
    if (message.create !== undefined) {
      Create.encode(message.create, writer.uint32(34).fork()).ldelim();
    }
    if (message.import !== undefined) {
      Import.encode(message.import, writer.uint32(42).fork()).ldelim();
    }
    if (message.timeline !== undefined) {
      Timeline.encode(message.timeline, writer.uint32(50).fork()).ldelim();
    }
    if (message.sync !== undefined) {
      Sync.encode(message.sync, writer.uint32(58).fork()).ldelim();
    }
    if (message.api !== undefined) {
      API.encode(message.api, writer.uint32(66).fork()).ldelim();
    }
    if (message.timecode !== undefined) {
      Timecode.encode(message.timecode, writer.uint32(74).fork()).ldelim();
    }
    if (message.playbackMarker !== undefined) {
      PlaybackMarker.encode(
        message.playbackMarker,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.update !== undefined) {
      Update.encode(message.update, writer.uint32(90).fork()).ldelim();
    }
    if (message.whmStore !== undefined) {
      WHMStore.encode(message.whmStore, writer.uint32(98).fork()).ldelim();
    }
    if (message.proContent !== undefined) {
      ProContent.encode(message.proContent, writer.uint32(106).fork()).ldelim();
    }
    if (message.capture !== undefined) {
      Capture.encode(message.capture, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ui = UI.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startup = Startup.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.trigger = Trigger.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.create = Create.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.import = Import.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.timeline = Timeline.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sync = Sync.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.api = API.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.timecode = Timecode.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.playbackMarker = PlaybackMarker.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.update = Update.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.whmStore = WHMStore.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.proContent = ProContent.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.capture = Capture.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      ui: isSet(object.ui) ? UI.fromJSON(object.ui) : undefined,
      startup: isSet(object.startup)
        ? Startup.fromJSON(object.startup)
        : undefined,
      trigger: isSet(object.trigger)
        ? Trigger.fromJSON(object.trigger)
        : undefined,
      create: isSet(object.create) ? Create.fromJSON(object.create) : undefined,
      import: isSet(object.import) ? Import.fromJSON(object.import) : undefined,
      timeline: isSet(object.timeline)
        ? Timeline.fromJSON(object.timeline)
        : undefined,
      sync: isSet(object.sync) ? Sync.fromJSON(object.sync) : undefined,
      api: isSet(object.api) ? API.fromJSON(object.api) : undefined,
      timecode: isSet(object.timecode)
        ? Timecode.fromJSON(object.timecode)
        : undefined,
      playbackMarker: isSet(object.playbackMarker)
        ? PlaybackMarker.fromJSON(object.playbackMarker)
        : undefined,
      update: isSet(object.update) ? Update.fromJSON(object.update) : undefined,
      whmStore: isSet(object.whmStore)
        ? WHMStore.fromJSON(object.whmStore)
        : undefined,
      proContent: isSet(object.proContent)
        ? ProContent.fromJSON(object.proContent)
        : undefined,
      capture: isSet(object.capture)
        ? Capture.fromJSON(object.capture)
        : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.ui !== undefined) {
      obj.ui = UI.toJSON(message.ui);
    }
    if (message.startup !== undefined) {
      obj.startup = Startup.toJSON(message.startup);
    }
    if (message.trigger !== undefined) {
      obj.trigger = Trigger.toJSON(message.trigger);
    }
    if (message.create !== undefined) {
      obj.create = Create.toJSON(message.create);
    }
    if (message.import !== undefined) {
      obj.import = Import.toJSON(message.import);
    }
    if (message.timeline !== undefined) {
      obj.timeline = Timeline.toJSON(message.timeline);
    }
    if (message.sync !== undefined) {
      obj.sync = Sync.toJSON(message.sync);
    }
    if (message.api !== undefined) {
      obj.api = API.toJSON(message.api);
    }
    if (message.timecode !== undefined) {
      obj.timecode = Timecode.toJSON(message.timecode);
    }
    if (message.playbackMarker !== undefined) {
      obj.playbackMarker = PlaybackMarker.toJSON(message.playbackMarker);
    }
    if (message.update !== undefined) {
      obj.update = Update.toJSON(message.update);
    }
    if (message.whmStore !== undefined) {
      obj.whmStore = WHMStore.toJSON(message.whmStore);
    }
    if (message.proContent !== undefined) {
      obj.proContent = ProContent.toJSON(message.proContent);
    }
    if (message.capture !== undefined) {
      obj.capture = Capture.toJSON(message.capture);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.ui =
      object.ui !== undefined && object.ui !== null
        ? UI.fromPartial(object.ui)
        : undefined;
    message.startup =
      object.startup !== undefined && object.startup !== null
        ? Startup.fromPartial(object.startup)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? Trigger.fromPartial(object.trigger)
        : undefined;
    message.create =
      object.create !== undefined && object.create !== null
        ? Create.fromPartial(object.create)
        : undefined;
    message.import =
      object.import !== undefined && object.import !== null
        ? Import.fromPartial(object.import)
        : undefined;
    message.timeline =
      object.timeline !== undefined && object.timeline !== null
        ? Timeline.fromPartial(object.timeline)
        : undefined;
    message.sync =
      object.sync !== undefined && object.sync !== null
        ? Sync.fromPartial(object.sync)
        : undefined;
    message.api =
      object.api !== undefined && object.api !== null
        ? API.fromPartial(object.api)
        : undefined;
    message.timecode =
      object.timecode !== undefined && object.timecode !== null
        ? Timecode.fromPartial(object.timecode)
        : undefined;
    message.playbackMarker =
      object.playbackMarker !== undefined && object.playbackMarker !== null
        ? PlaybackMarker.fromPartial(object.playbackMarker)
        : undefined;
    message.update =
      object.update !== undefined && object.update !== null
        ? Update.fromPartial(object.update)
        : undefined;
    message.whmStore =
      object.whmStore !== undefined && object.whmStore !== null
        ? WHMStore.fromPartial(object.whmStore)
        : undefined;
    message.proContent =
      object.proContent !== undefined && object.proContent !== null
        ? ProContent.fromPartial(object.proContent)
        : undefined;
    message.capture =
      object.capture !== undefined && object.capture !== null
        ? Capture.fromPartial(object.capture)
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
