/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  Action,
  Action_ContentDestination,
  action_ContentDestinationFromJSON,
  action_ContentDestinationToJSON,
} from './action';
import { ApplicationInfo } from './applicationInfo';
import { Background } from './background';
import { Cue } from './cue';
import { Transition } from './effects';
import { Group } from './groups';
import { IntRange } from './intRange';
import { MusicKeyScale } from './musicKeyScale';
import { Timestamp } from './rvtimestamp';
import { URL } from './url';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Presentation {
  applicationInfo: ApplicationInfo | undefined;
  uuid: UUID | undefined;
  name: string;
  lastDateUsed: Timestamp | undefined;
  lastModifiedDate: Timestamp | undefined;
  category: string;
  notes: string;
  background: Background | undefined;
  chordChart: URL | undefined;
  selectedArrangement: UUID | undefined;
  arrangements: Presentation_Arrangement[];
  cueGroups: Presentation_CueGroup[];
  cues: Cue[];
  ccli: Presentation_CCLI | undefined;
  bibleReference: Presentation_BibleReference | undefined;
  timeline: Presentation_Timeline | undefined;
  transition: Transition | undefined;
  contentDestination: Action_ContentDestination;
  multiTracksLicensing: Presentation_MultiTracksLicensing | undefined;
  musicKey: string;
  music: Presentation_Music | undefined;
  slideShowDuration?: number | undefined;
}

export interface Presentation_CCLI {
  author: string;
  artistCredits: string;
  songTitle: string;
  publisher: string;
  copyrightYear: number;
  songNumber: number;
  display: boolean;
  album: string;
  artwork: Uint8Array;
}

export interface Presentation_BibleReference {
  bookIndex: number;
  bookName: string;
  chapterRange: IntRange | undefined;
  verseRange: IntRange | undefined;
  translationName: string;
  translationDisplayAbbreviation: string;
  translationInternalAbbreviation: string;
  bookKey: string;
}

export interface Presentation_Timeline {
  cues: Presentation_Timeline_Cue[];
  duration: number;
  loop: boolean;
  audioAction: Action | undefined;
  timecodeEnable: boolean;
  timecodeOffset: number;
  cuesV2: Presentation_Timeline_Cue[];
}

export interface Presentation_Timeline_Cue {
  triggerTime: number;
  name: string;
  cueId?: UUID | undefined;
  action?: Action | undefined;
}

export interface Presentation_Arrangement {
  uuid: UUID | undefined;
  name: string;
  groupIdentifiers: UUID[];
}

export interface Presentation_CueGroup {
  group: Group | undefined;
  cueIdentifiers: UUID[];
}

export interface Presentation_MultiTracksLicensing {
  songIdentifier: number;
  customerIdentifier: string;
  expirationDate: Timestamp | undefined;
  licenseExpiration: Timestamp | undefined;
  subscription: Presentation_MultiTracksLicensing_Subscription;
}

export enum Presentation_MultiTracksLicensing_Subscription {
  SUBSCRIPTION_CHART_PRO = 0,
  SUBSCRIPTION_SLIDE_PRO = 1,
  UNRECOGNIZED = -1,
}

export function presentation_MultiTracksLicensing_SubscriptionFromJSON(
  object: any,
): Presentation_MultiTracksLicensing_Subscription {
  switch (object) {
    case 0:
    case 'SUBSCRIPTION_CHART_PRO':
      return Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_CHART_PRO;
    case 1:
    case 'SUBSCRIPTION_SLIDE_PRO':
      return Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_SLIDE_PRO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Presentation_MultiTracksLicensing_Subscription.UNRECOGNIZED;
  }
}

export function presentation_MultiTracksLicensing_SubscriptionToJSON(
  object: Presentation_MultiTracksLicensing_Subscription,
): string {
  switch (object) {
    case Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_CHART_PRO:
      return 'SUBSCRIPTION_CHART_PRO';
    case Presentation_MultiTracksLicensing_Subscription.SUBSCRIPTION_SLIDE_PRO:
      return 'SUBSCRIPTION_SLIDE_PRO';
    case Presentation_MultiTracksLicensing_Subscription.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Presentation_Music {
  originalMusicKey: string;
  userMusicKey: string;
  original: MusicKeyScale | undefined;
  user: MusicKeyScale | undefined;
}

function createBasePresentation(): Presentation {
  return {
    applicationInfo: undefined,
    uuid: undefined,
    name: '',
    lastDateUsed: undefined,
    lastModifiedDate: undefined,
    category: '',
    notes: '',
    background: undefined,
    chordChart: undefined,
    selectedArrangement: undefined,
    arrangements: [],
    cueGroups: [],
    cues: [],
    ccli: undefined,
    bibleReference: undefined,
    timeline: undefined,
    transition: undefined,
    contentDestination: 0,
    multiTracksLicensing: undefined,
    musicKey: '',
    music: undefined,
    slideShowDuration: undefined,
  };
}

export const Presentation = {
  encode(
    message: Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.lastDateUsed !== undefined) {
      Timestamp.encode(message.lastDateUsed, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastModifiedDate !== undefined) {
      Timestamp.encode(
        message.lastModifiedDate,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.category !== '') {
      writer.uint32(50).string(message.category);
    }
    if (message.notes !== '') {
      writer.uint32(58).string(message.notes);
    }
    if (message.background !== undefined) {
      Background.encode(message.background, writer.uint32(66).fork()).ldelim();
    }
    if (message.chordChart !== undefined) {
      URL.encode(message.chordChart, writer.uint32(74).fork()).ldelim();
    }
    if (message.selectedArrangement !== undefined) {
      UUID.encode(
        message.selectedArrangement,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    for (const v of message.arrangements) {
      Presentation_Arrangement.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.cueGroups) {
      Presentation_CueGroup.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.cues) {
      Cue.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.ccli !== undefined) {
      Presentation_CCLI.encode(
        message.ccli,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.bibleReference !== undefined) {
      Presentation_BibleReference.encode(
        message.bibleReference,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.timeline !== undefined) {
      Presentation_Timeline.encode(
        message.timeline,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.transition !== undefined) {
      Transition.encode(message.transition, writer.uint32(146).fork()).ldelim();
    }
    if (message.contentDestination !== 0) {
      writer.uint32(152).int32(message.contentDestination);
    }
    if (message.multiTracksLicensing !== undefined) {
      Presentation_MultiTracksLicensing.encode(
        message.multiTracksLicensing,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.musicKey !== '') {
      writer.uint32(178).string(message.musicKey);
    }
    if (message.music !== undefined) {
      Presentation_Music.encode(
        message.music,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.slideShowDuration !== undefined) {
      writer.uint32(161).double(message.slideShowDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.applicationInfo = ApplicationInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastDateUsed = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastModifiedDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.category = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.background = Background.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.chordChart = URL.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.selectedArrangement = UUID.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.arrangements.push(
            Presentation_Arrangement.decode(reader, reader.uint32()),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.cueGroups.push(
            Presentation_CueGroup.decode(reader, reader.uint32()),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.cues.push(Cue.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.ccli = Presentation_CCLI.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.bibleReference = Presentation_BibleReference.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.timeline = Presentation_Timeline.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.transition = Transition.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.contentDestination = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.multiTracksLicensing =
            Presentation_MultiTracksLicensing.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.musicKey = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.music = Presentation_Music.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 161) {
            break;
          }

          message.slideShowDuration = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      lastDateUsed: isSet(object.lastDateUsed)
        ? Timestamp.fromJSON(object.lastDateUsed)
        : undefined,
      lastModifiedDate: isSet(object.lastModifiedDate)
        ? Timestamp.fromJSON(object.lastModifiedDate)
        : undefined,
      category: isSet(object.category)
        ? globalThis.String(object.category)
        : '',
      notes: isSet(object.notes) ? globalThis.String(object.notes) : '',
      background: isSet(object.background)
        ? Background.fromJSON(object.background)
        : undefined,
      chordChart: isSet(object.chordChart)
        ? URL.fromJSON(object.chordChart)
        : undefined,
      selectedArrangement: isSet(object.selectedArrangement)
        ? UUID.fromJSON(object.selectedArrangement)
        : undefined,
      arrangements: globalThis.Array.isArray(object?.arrangements)
        ? object.arrangements.map((e: any) =>
            Presentation_Arrangement.fromJSON(e),
          )
        : [],
      cueGroups: globalThis.Array.isArray(object?.cueGroups)
        ? object.cueGroups.map((e: any) => Presentation_CueGroup.fromJSON(e))
        : [],
      cues: globalThis.Array.isArray(object?.cues)
        ? object.cues.map((e: any) => Cue.fromJSON(e))
        : [],
      ccli: isSet(object.ccli)
        ? Presentation_CCLI.fromJSON(object.ccli)
        : undefined,
      bibleReference: isSet(object.bibleReference)
        ? Presentation_BibleReference.fromJSON(object.bibleReference)
        : undefined,
      timeline: isSet(object.timeline)
        ? Presentation_Timeline.fromJSON(object.timeline)
        : undefined,
      transition: isSet(object.transition)
        ? Transition.fromJSON(object.transition)
        : undefined,
      contentDestination: isSet(object.contentDestination)
        ? action_ContentDestinationFromJSON(object.contentDestination)
        : 0,
      multiTracksLicensing: isSet(object.multiTracksLicensing)
        ? Presentation_MultiTracksLicensing.fromJSON(
            object.multiTracksLicensing,
          )
        : undefined,
      musicKey: isSet(object.musicKey)
        ? globalThis.String(object.musicKey)
        : '',
      music: isSet(object.music)
        ? Presentation_Music.fromJSON(object.music)
        : undefined,
      slideShowDuration: isSet(object.slideShowDuration)
        ? globalThis.Number(object.slideShowDuration)
        : undefined,
    };
  },

  toJSON(message: Presentation): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.lastDateUsed !== undefined) {
      obj.lastDateUsed = Timestamp.toJSON(message.lastDateUsed);
    }
    if (message.lastModifiedDate !== undefined) {
      obj.lastModifiedDate = Timestamp.toJSON(message.lastModifiedDate);
    }
    if (message.category !== '') {
      obj.category = message.category;
    }
    if (message.notes !== '') {
      obj.notes = message.notes;
    }
    if (message.background !== undefined) {
      obj.background = Background.toJSON(message.background);
    }
    if (message.chordChart !== undefined) {
      obj.chordChart = URL.toJSON(message.chordChart);
    }
    if (message.selectedArrangement !== undefined) {
      obj.selectedArrangement = UUID.toJSON(message.selectedArrangement);
    }
    if (message.arrangements?.length) {
      obj.arrangements = message.arrangements.map((e) =>
        Presentation_Arrangement.toJSON(e),
      );
    }
    if (message.cueGroups?.length) {
      obj.cueGroups = message.cueGroups.map((e) =>
        Presentation_CueGroup.toJSON(e),
      );
    }
    if (message.cues?.length) {
      obj.cues = message.cues.map((e) => Cue.toJSON(e));
    }
    if (message.ccli !== undefined) {
      obj.ccli = Presentation_CCLI.toJSON(message.ccli);
    }
    if (message.bibleReference !== undefined) {
      obj.bibleReference = Presentation_BibleReference.toJSON(
        message.bibleReference,
      );
    }
    if (message.timeline !== undefined) {
      obj.timeline = Presentation_Timeline.toJSON(message.timeline);
    }
    if (message.transition !== undefined) {
      obj.transition = Transition.toJSON(message.transition);
    }
    if (message.contentDestination !== 0) {
      obj.contentDestination = action_ContentDestinationToJSON(
        message.contentDestination,
      );
    }
    if (message.multiTracksLicensing !== undefined) {
      obj.multiTracksLicensing = Presentation_MultiTracksLicensing.toJSON(
        message.multiTracksLicensing,
      );
    }
    if (message.musicKey !== '') {
      obj.musicKey = message.musicKey;
    }
    if (message.music !== undefined) {
      obj.music = Presentation_Music.toJSON(message.music);
    }
    if (message.slideShowDuration !== undefined) {
      obj.slideShowDuration = message.slideShowDuration;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation>, I>>(
    base?: I,
  ): Presentation {
    return Presentation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation>, I>>(
    object: I,
  ): Presentation {
    const message = createBasePresentation();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.lastDateUsed =
      object.lastDateUsed !== undefined && object.lastDateUsed !== null
        ? Timestamp.fromPartial(object.lastDateUsed)
        : undefined;
    message.lastModifiedDate =
      object.lastModifiedDate !== undefined && object.lastModifiedDate !== null
        ? Timestamp.fromPartial(object.lastModifiedDate)
        : undefined;
    message.category = object.category ?? '';
    message.notes = object.notes ?? '';
    message.background =
      object.background !== undefined && object.background !== null
        ? Background.fromPartial(object.background)
        : undefined;
    message.chordChart =
      object.chordChart !== undefined && object.chordChart !== null
        ? URL.fromPartial(object.chordChart)
        : undefined;
    message.selectedArrangement =
      object.selectedArrangement !== undefined &&
      object.selectedArrangement !== null
        ? UUID.fromPartial(object.selectedArrangement)
        : undefined;
    message.arrangements =
      object.arrangements?.map((e) =>
        Presentation_Arrangement.fromPartial(e),
      ) || [];
    message.cueGroups =
      object.cueGroups?.map((e) => Presentation_CueGroup.fromPartial(e)) || [];
    message.cues = object.cues?.map((e) => Cue.fromPartial(e)) || [];
    message.ccli =
      object.ccli !== undefined && object.ccli !== null
        ? Presentation_CCLI.fromPartial(object.ccli)
        : undefined;
    message.bibleReference =
      object.bibleReference !== undefined && object.bibleReference !== null
        ? Presentation_BibleReference.fromPartial(object.bibleReference)
        : undefined;
    message.timeline =
      object.timeline !== undefined && object.timeline !== null
        ? Presentation_Timeline.fromPartial(object.timeline)
        : undefined;
    message.transition =
      object.transition !== undefined && object.transition !== null
        ? Transition.fromPartial(object.transition)
        : undefined;
    message.contentDestination = object.contentDestination ?? 0;
    message.multiTracksLicensing =
      object.multiTracksLicensing !== undefined &&
      object.multiTracksLicensing !== null
        ? Presentation_MultiTracksLicensing.fromPartial(
            object.multiTracksLicensing,
          )
        : undefined;
    message.musicKey = object.musicKey ?? '';
    message.music =
      object.music !== undefined && object.music !== null
        ? Presentation_Music.fromPartial(object.music)
        : undefined;
    message.slideShowDuration = object.slideShowDuration ?? undefined;
    return message;
  },
};

function createBasePresentation_CCLI(): Presentation_CCLI {
  return {
    author: '',
    artistCredits: '',
    songTitle: '',
    publisher: '',
    copyrightYear: 0,
    songNumber: 0,
    display: false,
    album: '',
    artwork: new Uint8Array(0),
  };
}

export const Presentation_CCLI = {
  encode(
    message: Presentation_CCLI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.author !== '') {
      writer.uint32(10).string(message.author);
    }
    if (message.artistCredits !== '') {
      writer.uint32(18).string(message.artistCredits);
    }
    if (message.songTitle !== '') {
      writer.uint32(26).string(message.songTitle);
    }
    if (message.publisher !== '') {
      writer.uint32(34).string(message.publisher);
    }
    if (message.copyrightYear !== 0) {
      writer.uint32(40).uint32(message.copyrightYear);
    }
    if (message.songNumber !== 0) {
      writer.uint32(48).uint32(message.songNumber);
    }
    if (message.display !== false) {
      writer.uint32(56).bool(message.display);
    }
    if (message.album !== '') {
      writer.uint32(66).string(message.album);
    }
    if (message.artwork.length !== 0) {
      writer.uint32(74).bytes(message.artwork);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_CCLI {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_CCLI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.author = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.artistCredits = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.songTitle = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publisher = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.copyrightYear = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.songNumber = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.display = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.album = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.artwork = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_CCLI {
    return {
      author: isSet(object.author) ? globalThis.String(object.author) : '',
      artistCredits: isSet(object.artistCredits)
        ? globalThis.String(object.artistCredits)
        : '',
      songTitle: isSet(object.songTitle)
        ? globalThis.String(object.songTitle)
        : '',
      publisher: isSet(object.publisher)
        ? globalThis.String(object.publisher)
        : '',
      copyrightYear: isSet(object.copyrightYear)
        ? globalThis.Number(object.copyrightYear)
        : 0,
      songNumber: isSet(object.songNumber)
        ? globalThis.Number(object.songNumber)
        : 0,
      display: isSet(object.display)
        ? globalThis.Boolean(object.display)
        : false,
      album: isSet(object.album) ? globalThis.String(object.album) : '',
      artwork: isSet(object.artwork)
        ? bytesFromBase64(object.artwork)
        : new Uint8Array(0),
    };
  },

  toJSON(message: Presentation_CCLI): unknown {
    const obj: any = {};
    if (message.author !== '') {
      obj.author = message.author;
    }
    if (message.artistCredits !== '') {
      obj.artistCredits = message.artistCredits;
    }
    if (message.songTitle !== '') {
      obj.songTitle = message.songTitle;
    }
    if (message.publisher !== '') {
      obj.publisher = message.publisher;
    }
    if (message.copyrightYear !== 0) {
      obj.copyrightYear = Math.round(message.copyrightYear);
    }
    if (message.songNumber !== 0) {
      obj.songNumber = Math.round(message.songNumber);
    }
    if (message.display !== false) {
      obj.display = message.display;
    }
    if (message.album !== '') {
      obj.album = message.album;
    }
    if (message.artwork.length !== 0) {
      obj.artwork = base64FromBytes(message.artwork);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_CCLI>, I>>(
    base?: I,
  ): Presentation_CCLI {
    return Presentation_CCLI.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_CCLI>, I>>(
    object: I,
  ): Presentation_CCLI {
    const message = createBasePresentation_CCLI();
    message.author = object.author ?? '';
    message.artistCredits = object.artistCredits ?? '';
    message.songTitle = object.songTitle ?? '';
    message.publisher = object.publisher ?? '';
    message.copyrightYear = object.copyrightYear ?? 0;
    message.songNumber = object.songNumber ?? 0;
    message.display = object.display ?? false;
    message.album = object.album ?? '';
    message.artwork = object.artwork ?? new Uint8Array(0);
    return message;
  },
};

function createBasePresentation_BibleReference(): Presentation_BibleReference {
  return {
    bookIndex: 0,
    bookName: '',
    chapterRange: undefined,
    verseRange: undefined,
    translationName: '',
    translationDisplayAbbreviation: '',
    translationInternalAbbreviation: '',
    bookKey: '',
  };
}

export const Presentation_BibleReference = {
  encode(
    message: Presentation_BibleReference,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bookIndex !== 0) {
      writer.uint32(8).uint32(message.bookIndex);
    }
    if (message.bookName !== '') {
      writer.uint32(18).string(message.bookName);
    }
    if (message.chapterRange !== undefined) {
      IntRange.encode(message.chapterRange, writer.uint32(26).fork()).ldelim();
    }
    if (message.verseRange !== undefined) {
      IntRange.encode(message.verseRange, writer.uint32(34).fork()).ldelim();
    }
    if (message.translationName !== '') {
      writer.uint32(42).string(message.translationName);
    }
    if (message.translationDisplayAbbreviation !== '') {
      writer.uint32(50).string(message.translationDisplayAbbreviation);
    }
    if (message.translationInternalAbbreviation !== '') {
      writer.uint32(58).string(message.translationInternalAbbreviation);
    }
    if (message.bookKey !== '') {
      writer.uint32(66).string(message.bookKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_BibleReference {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_BibleReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bookIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bookName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chapterRange = IntRange.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verseRange = IntRange.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.translationName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.translationDisplayAbbreviation = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.translationInternalAbbreviation = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.bookKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_BibleReference {
    return {
      bookIndex: isSet(object.bookIndex)
        ? globalThis.Number(object.bookIndex)
        : 0,
      bookName: isSet(object.bookName)
        ? globalThis.String(object.bookName)
        : '',
      chapterRange: isSet(object.chapterRange)
        ? IntRange.fromJSON(object.chapterRange)
        : undefined,
      verseRange: isSet(object.verseRange)
        ? IntRange.fromJSON(object.verseRange)
        : undefined,
      translationName: isSet(object.translationName)
        ? globalThis.String(object.translationName)
        : '',
      translationDisplayAbbreviation: isSet(
        object.translationDisplayAbbreviation,
      )
        ? globalThis.String(object.translationDisplayAbbreviation)
        : '',
      translationInternalAbbreviation: isSet(
        object.translationInternalAbbreviation,
      )
        ? globalThis.String(object.translationInternalAbbreviation)
        : '',
      bookKey: isSet(object.bookKey) ? globalThis.String(object.bookKey) : '',
    };
  },

  toJSON(message: Presentation_BibleReference): unknown {
    const obj: any = {};
    if (message.bookIndex !== 0) {
      obj.bookIndex = Math.round(message.bookIndex);
    }
    if (message.bookName !== '') {
      obj.bookName = message.bookName;
    }
    if (message.chapterRange !== undefined) {
      obj.chapterRange = IntRange.toJSON(message.chapterRange);
    }
    if (message.verseRange !== undefined) {
      obj.verseRange = IntRange.toJSON(message.verseRange);
    }
    if (message.translationName !== '') {
      obj.translationName = message.translationName;
    }
    if (message.translationDisplayAbbreviation !== '') {
      obj.translationDisplayAbbreviation =
        message.translationDisplayAbbreviation;
    }
    if (message.translationInternalAbbreviation !== '') {
      obj.translationInternalAbbreviation =
        message.translationInternalAbbreviation;
    }
    if (message.bookKey !== '') {
      obj.bookKey = message.bookKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_BibleReference>, I>>(
    base?: I,
  ): Presentation_BibleReference {
    return Presentation_BibleReference.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_BibleReference>, I>>(
    object: I,
  ): Presentation_BibleReference {
    const message = createBasePresentation_BibleReference();
    message.bookIndex = object.bookIndex ?? 0;
    message.bookName = object.bookName ?? '';
    message.chapterRange =
      object.chapterRange !== undefined && object.chapterRange !== null
        ? IntRange.fromPartial(object.chapterRange)
        : undefined;
    message.verseRange =
      object.verseRange !== undefined && object.verseRange !== null
        ? IntRange.fromPartial(object.verseRange)
        : undefined;
    message.translationName = object.translationName ?? '';
    message.translationDisplayAbbreviation =
      object.translationDisplayAbbreviation ?? '';
    message.translationInternalAbbreviation =
      object.translationInternalAbbreviation ?? '';
    message.bookKey = object.bookKey ?? '';
    return message;
  },
};

function createBasePresentation_Timeline(): Presentation_Timeline {
  return {
    cues: [],
    duration: 0,
    loop: false,
    audioAction: undefined,
    timecodeEnable: false,
    timecodeOffset: 0,
    cuesV2: [],
  };
}

export const Presentation_Timeline = {
  encode(
    message: Presentation_Timeline,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cues) {
      Presentation_Timeline_Cue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(41).double(message.duration);
    }
    if (message.loop !== false) {
      writer.uint32(48).bool(message.loop);
    }
    if (message.audioAction !== undefined) {
      Action.encode(message.audioAction, writer.uint32(66).fork()).ldelim();
    }
    if (message.timecodeEnable !== false) {
      writer.uint32(72).bool(message.timecodeEnable);
    }
    if (message.timecodeOffset !== 0) {
      writer.uint32(81).double(message.timecodeOffset);
    }
    for (const v of message.cuesV2) {
      Presentation_Timeline_Cue.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_Timeline {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Timeline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cues.push(
            Presentation_Timeline_Cue.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.duration = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.loop = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.audioAction = Action.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.timecodeEnable = reader.bool();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.timecodeOffset = reader.double();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cuesV2.push(
            Presentation_Timeline_Cue.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Presentation_Timeline {
    return {
      cues: globalThis.Array.isArray(object?.cues)
        ? object.cues.map((e: any) => Presentation_Timeline_Cue.fromJSON(e))
        : [],
      duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
      loop: isSet(object.loop) ? globalThis.Boolean(object.loop) : false,
      audioAction: isSet(object.audioAction)
        ? Action.fromJSON(object.audioAction)
        : undefined,
      timecodeEnable: isSet(object.timecodeEnable)
        ? globalThis.Boolean(object.timecodeEnable)
        : false,
      timecodeOffset: isSet(object.timecodeOffset)
        ? globalThis.Number(object.timecodeOffset)
        : 0,
      cuesV2: globalThis.Array.isArray(object?.cuesV2)
        ? object.cuesV2.map((e: any) => Presentation_Timeline_Cue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Presentation_Timeline): unknown {
    const obj: any = {};
    if (message.cues?.length) {
      obj.cues = message.cues.map((e) => Presentation_Timeline_Cue.toJSON(e));
    }
    if (message.duration !== 0) {
      obj.duration = message.duration;
    }
    if (message.loop !== false) {
      obj.loop = message.loop;
    }
    if (message.audioAction !== undefined) {
      obj.audioAction = Action.toJSON(message.audioAction);
    }
    if (message.timecodeEnable !== false) {
      obj.timecodeEnable = message.timecodeEnable;
    }
    if (message.timecodeOffset !== 0) {
      obj.timecodeOffset = message.timecodeOffset;
    }
    if (message.cuesV2?.length) {
      obj.cuesV2 = message.cuesV2.map((e) =>
        Presentation_Timeline_Cue.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_Timeline>, I>>(
    base?: I,
  ): Presentation_Timeline {
    return Presentation_Timeline.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_Timeline>, I>>(
    object: I,
  ): Presentation_Timeline {
    const message = createBasePresentation_Timeline();
    message.cues =
      object.cues?.map((e) => Presentation_Timeline_Cue.fromPartial(e)) || [];
    message.duration = object.duration ?? 0;
    message.loop = object.loop ?? false;
    message.audioAction =
      object.audioAction !== undefined && object.audioAction !== null
        ? Action.fromPartial(object.audioAction)
        : undefined;
    message.timecodeEnable = object.timecodeEnable ?? false;
    message.timecodeOffset = object.timecodeOffset ?? 0;
    message.cuesV2 =
      object.cuesV2?.map((e) => Presentation_Timeline_Cue.fromPartial(e)) || [];
    return message;
  },
};

function createBasePresentation_Timeline_Cue(): Presentation_Timeline_Cue {
  return { triggerTime: 0, name: '', cueId: undefined, action: undefined };
}

export const Presentation_Timeline_Cue = {
  encode(
    message: Presentation_Timeline_Cue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerTime !== 0) {
      writer.uint32(9).double(message.triggerTime);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.cueId !== undefined) {
      UUID.encode(message.cueId, writer.uint32(18).fork()).ldelim();
    }
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_Timeline_Cue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Timeline_Cue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.triggerTime = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cueId = UUID.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_Timeline_Cue {
    return {
      triggerTime: isSet(object.triggerTime)
        ? globalThis.Number(object.triggerTime)
        : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      cueId: isSet(object.cueId) ? UUID.fromJSON(object.cueId) : undefined,
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
    };
  },

  toJSON(message: Presentation_Timeline_Cue): unknown {
    const obj: any = {};
    if (message.triggerTime !== 0) {
      obj.triggerTime = message.triggerTime;
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.cueId !== undefined) {
      obj.cueId = UUID.toJSON(message.cueId);
    }
    if (message.action !== undefined) {
      obj.action = Action.toJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_Timeline_Cue>, I>>(
    base?: I,
  ): Presentation_Timeline_Cue {
    return Presentation_Timeline_Cue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_Timeline_Cue>, I>>(
    object: I,
  ): Presentation_Timeline_Cue {
    const message = createBasePresentation_Timeline_Cue();
    message.triggerTime = object.triggerTime ?? 0;
    message.name = object.name ?? '';
    message.cueId =
      object.cueId !== undefined && object.cueId !== null
        ? UUID.fromPartial(object.cueId)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? Action.fromPartial(object.action)
        : undefined;
    return message;
  },
};

function createBasePresentation_Arrangement(): Presentation_Arrangement {
  return { uuid: undefined, name: '', groupIdentifiers: [] };
}

export const Presentation_Arrangement = {
  encode(
    message: Presentation_Arrangement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.groupIdentifiers) {
      UUID.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_Arrangement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Arrangement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
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

          message.groupIdentifiers.push(UUID.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_Arrangement {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      groupIdentifiers: globalThis.Array.isArray(object?.groupIdentifiers)
        ? object.groupIdentifiers.map((e: any) => UUID.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Presentation_Arrangement): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.groupIdentifiers?.length) {
      obj.groupIdentifiers = message.groupIdentifiers.map((e) =>
        UUID.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_Arrangement>, I>>(
    base?: I,
  ): Presentation_Arrangement {
    return Presentation_Arrangement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_Arrangement>, I>>(
    object: I,
  ): Presentation_Arrangement {
    const message = createBasePresentation_Arrangement();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.name = object.name ?? '';
    message.groupIdentifiers =
      object.groupIdentifiers?.map((e) => UUID.fromPartial(e)) || [];
    return message;
  },
};

function createBasePresentation_CueGroup(): Presentation_CueGroup {
  return { group: undefined, cueIdentifiers: [] };
}

export const Presentation_CueGroup = {
  encode(
    message: Presentation_CueGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.cueIdentifiers) {
      UUID.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_CueGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_CueGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cueIdentifiers.push(UUID.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_CueGroup {
    return {
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
      cueIdentifiers: globalThis.Array.isArray(object?.cueIdentifiers)
        ? object.cueIdentifiers.map((e: any) => UUID.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Presentation_CueGroup): unknown {
    const obj: any = {};
    if (message.group !== undefined) {
      obj.group = Group.toJSON(message.group);
    }
    if (message.cueIdentifiers?.length) {
      obj.cueIdentifiers = message.cueIdentifiers.map((e) => UUID.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_CueGroup>, I>>(
    base?: I,
  ): Presentation_CueGroup {
    return Presentation_CueGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_CueGroup>, I>>(
    object: I,
  ): Presentation_CueGroup {
    const message = createBasePresentation_CueGroup();
    message.group =
      object.group !== undefined && object.group !== null
        ? Group.fromPartial(object.group)
        : undefined;
    message.cueIdentifiers =
      object.cueIdentifiers?.map((e) => UUID.fromPartial(e)) || [];
    return message;
  },
};

function createBasePresentation_MultiTracksLicensing(): Presentation_MultiTracksLicensing {
  return {
    songIdentifier: 0,
    customerIdentifier: '',
    expirationDate: undefined,
    licenseExpiration: undefined,
    subscription: 0,
  };
}

export const Presentation_MultiTracksLicensing = {
  encode(
    message: Presentation_MultiTracksLicensing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.songIdentifier !== 0) {
      writer.uint32(8).int64(message.songIdentifier);
    }
    if (message.customerIdentifier !== '') {
      writer.uint32(18).string(message.customerIdentifier);
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(
        message.expirationDate,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.licenseExpiration !== undefined) {
      Timestamp.encode(
        message.licenseExpiration,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.subscription !== 0) {
      writer.uint32(40).int32(message.subscription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Presentation_MultiTracksLicensing {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_MultiTracksLicensing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.songIdentifier = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.customerIdentifier = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expirationDate = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.licenseExpiration = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.subscription = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_MultiTracksLicensing {
    return {
      songIdentifier: isSet(object.songIdentifier)
        ? globalThis.Number(object.songIdentifier)
        : 0,
      customerIdentifier: isSet(object.customerIdentifier)
        ? globalThis.String(object.customerIdentifier)
        : '',
      expirationDate: isSet(object.expirationDate)
        ? Timestamp.fromJSON(object.expirationDate)
        : undefined,
      licenseExpiration: isSet(object.licenseExpiration)
        ? Timestamp.fromJSON(object.licenseExpiration)
        : undefined,
      subscription: isSet(object.subscription)
        ? presentation_MultiTracksLicensing_SubscriptionFromJSON(
            object.subscription,
          )
        : 0,
    };
  },

  toJSON(message: Presentation_MultiTracksLicensing): unknown {
    const obj: any = {};
    if (message.songIdentifier !== 0) {
      obj.songIdentifier = Math.round(message.songIdentifier);
    }
    if (message.customerIdentifier !== '') {
      obj.customerIdentifier = message.customerIdentifier;
    }
    if (message.expirationDate !== undefined) {
      obj.expirationDate = Timestamp.toJSON(message.expirationDate);
    }
    if (message.licenseExpiration !== undefined) {
      obj.licenseExpiration = Timestamp.toJSON(message.licenseExpiration);
    }
    if (message.subscription !== 0) {
      obj.subscription = presentation_MultiTracksLicensing_SubscriptionToJSON(
        message.subscription,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_MultiTracksLicensing>, I>>(
    base?: I,
  ): Presentation_MultiTracksLicensing {
    return Presentation_MultiTracksLicensing.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Presentation_MultiTracksLicensing>, I>,
  >(object: I): Presentation_MultiTracksLicensing {
    const message = createBasePresentation_MultiTracksLicensing();
    message.songIdentifier = object.songIdentifier ?? 0;
    message.customerIdentifier = object.customerIdentifier ?? '';
    message.expirationDate =
      object.expirationDate !== undefined && object.expirationDate !== null
        ? Timestamp.fromPartial(object.expirationDate)
        : undefined;
    message.licenseExpiration =
      object.licenseExpiration !== undefined &&
      object.licenseExpiration !== null
        ? Timestamp.fromPartial(object.licenseExpiration)
        : undefined;
    message.subscription = object.subscription ?? 0;
    return message;
  },
};

function createBasePresentation_Music(): Presentation_Music {
  return {
    originalMusicKey: '',
    userMusicKey: '',
    original: undefined,
    user: undefined,
  };
}

export const Presentation_Music = {
  encode(
    message: Presentation_Music,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.originalMusicKey !== '') {
      writer.uint32(10).string(message.originalMusicKey);
    }
    if (message.userMusicKey !== '') {
      writer.uint32(18).string(message.userMusicKey);
    }
    if (message.original !== undefined) {
      MusicKeyScale.encode(message.original, writer.uint32(26).fork()).ldelim();
    }
    if (message.user !== undefined) {
      MusicKeyScale.encode(message.user, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Presentation_Music {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePresentation_Music();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.originalMusicKey = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userMusicKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.original = MusicKeyScale.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.user = MusicKeyScale.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Presentation_Music {
    return {
      originalMusicKey: isSet(object.originalMusicKey)
        ? globalThis.String(object.originalMusicKey)
        : '',
      userMusicKey: isSet(object.userMusicKey)
        ? globalThis.String(object.userMusicKey)
        : '',
      original: isSet(object.original)
        ? MusicKeyScale.fromJSON(object.original)
        : undefined,
      user: isSet(object.user)
        ? MusicKeyScale.fromJSON(object.user)
        : undefined,
    };
  },

  toJSON(message: Presentation_Music): unknown {
    const obj: any = {};
    if (message.originalMusicKey !== '') {
      obj.originalMusicKey = message.originalMusicKey;
    }
    if (message.userMusicKey !== '') {
      obj.userMusicKey = message.userMusicKey;
    }
    if (message.original !== undefined) {
      obj.original = MusicKeyScale.toJSON(message.original);
    }
    if (message.user !== undefined) {
      obj.user = MusicKeyScale.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Presentation_Music>, I>>(
    base?: I,
  ): Presentation_Music {
    return Presentation_Music.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Presentation_Music>, I>>(
    object: I,
  ): Presentation_Music {
    const message = createBasePresentation_Music();
    message.originalMusicKey = object.originalMusicKey ?? '';
    message.userMusicKey = object.userMusicKey ?? '';
    message.original =
      object.original !== undefined && object.original !== null
        ? MusicKeyScale.fromPartial(object.original)
        : undefined;
    message.user =
      object.user !== undefined && object.user !== null
        ? MusicKeyScale.fromPartial(object.user)
        : undefined;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
