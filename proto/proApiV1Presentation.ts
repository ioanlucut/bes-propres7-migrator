/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { StringValue, UInt32Value } from './google/protobuf/wrappers';
import { APIV1Color } from './proApiV1Color';
import {
  APIV1ContentType,
  aPIV1ContentTypeFromJSON,
  aPIV1ContentTypeToJSON,
} from './proApiV1ContentType';
import { APIV1Identifier } from './proApiV1Identifier';
import { APIV1Size } from './proApiV1Size';
import {
  APIV1TimelineOperation,
  aPIV1TimelineOperationFromJSON,
  aPIV1TimelineOperationToJSON,
} from './proApiV1TimelineOperation';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface APIV1SlideIndex {
  index: number;
  presentationId: APIV1Identifier | undefined;
}

export interface APIV1Presentation {
  id: APIV1Identifier | undefined;
  groups: APIV1Presentation_SlideGroup[];
  hasTimeline: boolean;
  presentationPath: string;
  destination: APIV1Presentation_Destination;
}

export enum APIV1Presentation_Destination {
  presentation = 0,
  announcements = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1Presentation_DestinationFromJSON(
  object: any,
): APIV1Presentation_Destination {
  switch (object) {
    case 0:
    case 'presentation':
      return APIV1Presentation_Destination.presentation;
    case 1:
    case 'announcements':
      return APIV1Presentation_Destination.announcements;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1Presentation_Destination.UNRECOGNIZED;
  }
}

export function aPIV1Presentation_DestinationToJSON(
  object: APIV1Presentation_Destination,
): string {
  switch (object) {
    case APIV1Presentation_Destination.presentation:
      return 'presentation';
    case APIV1Presentation_Destination.announcements:
      return 'announcements';
    case APIV1Presentation_Destination.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1Presentation_SlideGroup {
  name: string;
  color: APIV1Color | undefined;
  slides: APIV1Presentation_SlideGroup_Slide[];
}

export interface APIV1Presentation_SlideGroup_Slide {
  enabled: boolean;
  notes: string;
  text: string;
  label: string;
  size: APIV1Size | undefined;
}

export interface APIV1PresentationRequest {
  active?: APIV1PresentationRequest_Active | undefined;
  focused?: APIV1PresentationRequest_EmptyMessage | undefined;
  slideIndex?: APIV1PresentationRequest_SlideIndex | undefined;
  chordChart?: APIV1PresentationRequest_ChordChart | undefined;
  chordChartUpdates?: APIV1PresentationRequest_ChordChartUpdates | undefined;
  presentation?: APIV1PresentationRequest_Presentation | undefined;
  deletePresentation?: APIV1PresentationRequest_DeletePresentation | undefined;
  timelineOperation?: APIV1PresentationRequest_TimelineOperation | undefined;
  activePresentationTimelineOperation?:
    | APIV1PresentationRequest_ActivePresentationTimelineOperation
    | undefined;
  focusedPresentationTimelineOperation?:
    | APIV1PresentationRequest_FocusedPresentationTimelineOperation
    | undefined;
  activePresentationTimelineStatus?:
    | APIV1PresentationRequest_ActivePresentationTimelineStatus
    | undefined;
  focusedPresentationTimelineStatus?:
    | APIV1PresentationRequest_FocusedPresentationTimelineStatus
    | undefined;
  thumbnail?: APIV1PresentationRequest_Thumbnail | undefined;
  focus?: APIV1PresentationRequest_FocusMessage | undefined;
  trigger?: APIV1PresentationRequest_TriggerMessage | undefined;
}

export interface APIV1PresentationRequest_Active {}

export interface APIV1PresentationRequest_SlideIndex {}

export interface APIV1PresentationRequest_ChordChart {
  quality: number;
}

export interface APIV1PresentationRequest_ChordChartUpdates {}

export interface APIV1PresentationRequest_Presentation {
  uuid: UUID | undefined;
}

export interface APIV1PresentationRequest_DeletePresentation {
  uuid: UUID | undefined;
}

export interface APIV1PresentationRequest_TimelineOperation {
  uuid: UUID | undefined;
  operation: APIV1TimelineOperation;
}

export interface APIV1PresentationRequest_ActivePresentationTimelineOperation {
  operation: APIV1TimelineOperation;
}

export interface APIV1PresentationRequest_FocusedPresentationTimelineOperation {
  operation: APIV1TimelineOperation;
}

export interface APIV1PresentationRequest_ActivePresentationTimelineStatus {}

export interface APIV1PresentationRequest_FocusedPresentationTimelineStatus {}

export interface APIV1PresentationRequest_Thumbnail {
  uuid: UUID | undefined;
  cueIndex: number;
  quality: number;
  contentType: APIV1ContentType;
}

export interface APIV1PresentationRequest_EmptyMessage {}

export interface APIV1PresentationRequest_FocusMessage {
  next?: APIV1PresentationRequest_EmptyMessage | undefined;
  previous?: APIV1PresentationRequest_EmptyMessage | undefined;
  active?: APIV1PresentationRequest_EmptyMessage | undefined;
  uuid?: string | undefined;
}

export interface APIV1PresentationRequest_TriggerMessage {
  focused?: APIV1PresentationRequest_EmptyMessage | undefined;
  active?: APIV1PresentationRequest_EmptyMessage | undefined;
  uuid?: string | undefined;
  first?: APIV1PresentationRequest_EmptyMessage | undefined;
  next?: APIV1PresentationRequest_EmptyMessage | undefined;
  previous?: APIV1PresentationRequest_EmptyMessage | undefined;
  index?: number | undefined;
  group?: string | undefined;
}

export interface APIV1PresentationResponse {
  active?: APIV1PresentationResponse_Active | undefined;
  slideIndex?: APIV1PresentationResponse_SlideIndex | undefined;
  chordChart?: APIV1PresentationResponse_ChordChart | undefined;
  chordChartUpdate?: APIV1PresentationResponse_ChordChartUpdates | undefined;
  presentation?: APIV1PresentationResponse_Presentation | undefined;
  deletePresentation?: APIV1PresentationResponse_DeletePresentation | undefined;
  triggerPresentation?:
    | APIV1PresentationResponse_TriggerPresentation
    | undefined;
  triggerCue?: APIV1PresentationResponse_TriggerCue | undefined;
  timelineOperation?: APIV1PresentationResponse_TimelineOperation | undefined;
  activePresentationTimelineOperation?:
    | APIV1PresentationResponse_ActivePresentationTimelineOperation
    | undefined;
  focusedPresentationTimelineOperation?:
    | APIV1PresentationResponse_FocusedPresentationTimelineOperation
    | undefined;
  activePresentationTimelineStatus?:
    | APIV1PresentationResponse_ActivePresentationTimelineStatus
    | undefined;
  focusedPresentationTimelineStatus?:
    | APIV1PresentationResponse_FocusedPresentationTimelineStatus
    | undefined;
  thumbnail?: APIV1PresentationResponse_Thumbnail | undefined;
  focused?: APIV1PresentationResponse_Focused | undefined;
  focus?: APIV1PresentationResponse_EmptyMessage | undefined;
  trigger?: APIV1PresentationResponse_EmptyMessage | undefined;
}

export interface APIV1PresentationResponse_Active {
  presentation: APIV1Presentation | undefined;
}

export interface APIV1PresentationResponse_SlideIndex {
  presentationIndex: APIV1SlideIndex | undefined;
}

export interface APIV1PresentationResponse_ChordChart {
  chordChart: Uint8Array;
}

export interface APIV1PresentationResponse_ChordChartUpdates {}

export interface APIV1PresentationResponse_Presentation {
  presentation: APIV1Presentation | undefined;
}

export interface APIV1PresentationResponse_DeletePresentation {}

export interface APIV1PresentationResponse_TriggerPresentation {}

export interface APIV1PresentationResponse_TriggerCue {}

export interface APIV1PresentationResponse_TimelineOperation {}

export interface APIV1PresentationResponse_ActivePresentationTimelineOperation {}

export interface APIV1PresentationResponse_FocusedPresentationTimelineOperation {}

export interface APIV1PresentationResponse_ActivePresentationTimelineStatus {
  isRunning: boolean;
  currentTime: number;
}

export interface APIV1PresentationResponse_FocusedPresentationTimelineStatus {
  isRunning: boolean;
  currentTime: number;
}

export interface APIV1PresentationResponse_Thumbnail {
  data: Uint8Array;
  contentType: APIV1ContentType;
}

export interface APIV1PresentationResponse_Focused {
  id: APIV1Identifier | undefined;
}

export interface APIV1PresentationResponse_EmptyMessage {}

function createBaseAPIV1SlideIndex(): APIV1SlideIndex {
  return { index: 0, presentationId: undefined };
}

export const APIV1SlideIndex = {
  encode(
    message: APIV1SlideIndex,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.presentationId !== undefined) {
      APIV1Identifier.encode(
        message.presentationId,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1SlideIndex {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1SlideIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.presentationId = APIV1Identifier.decode(
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

  fromJSON(object: any): APIV1SlideIndex {
    return {
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      presentationId: isSet(object.presentationId)
        ? APIV1Identifier.fromJSON(object.presentationId)
        : undefined,
    };
  },

  toJSON(message: APIV1SlideIndex): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.presentationId !== undefined) {
      obj.presentationId = APIV1Identifier.toJSON(message.presentationId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1SlideIndex>, I>>(
    base?: I,
  ): APIV1SlideIndex {
    return APIV1SlideIndex.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1SlideIndex>, I>>(
    object: I,
  ): APIV1SlideIndex {
    const message = createBaseAPIV1SlideIndex();
    message.index = object.index ?? 0;
    message.presentationId =
      object.presentationId !== undefined && object.presentationId !== null
        ? APIV1Identifier.fromPartial(object.presentationId)
        : undefined;
    return message;
  },
};

function createBaseAPIV1Presentation(): APIV1Presentation {
  return {
    id: undefined,
    groups: [],
    hasTimeline: false,
    presentationPath: '',
    destination: 0,
  };
}

export const APIV1Presentation = {
  encode(
    message: APIV1Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      APIV1Presentation_SlideGroup.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.hasTimeline === true) {
      writer.uint32(24).bool(message.hasTimeline);
    }
    if (message.presentationPath !== '') {
      writer.uint32(34).string(message.presentationPath);
    }
    if (message.destination !== 0) {
      writer.uint32(40).int32(message.destination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation();
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

          message.groups.push(
            APIV1Presentation_SlideGroup.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.hasTimeline = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.presentationPath = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.destination = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Presentation {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      groups: globalThis.Array.isArray(object?.groups)
        ? object.groups.map((e: any) =>
            APIV1Presentation_SlideGroup.fromJSON(e),
          )
        : [],
      hasTimeline: isSet(object.hasTimeline)
        ? globalThis.Boolean(object.hasTimeline)
        : false,
      presentationPath: isSet(object.presentationPath)
        ? globalThis.String(object.presentationPath)
        : '',
      destination: isSet(object.destination)
        ? aPIV1Presentation_DestinationFromJSON(object.destination)
        : 0,
    };
  },

  toJSON(message: APIV1Presentation): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) =>
        APIV1Presentation_SlideGroup.toJSON(e),
      );
    }
    if (message.hasTimeline === true) {
      obj.hasTimeline = message.hasTimeline;
    }
    if (message.presentationPath !== '') {
      obj.presentationPath = message.presentationPath;
    }
    if (message.destination !== 0) {
      obj.destination = aPIV1Presentation_DestinationToJSON(
        message.destination,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Presentation>, I>>(
    base?: I,
  ): APIV1Presentation {
    return APIV1Presentation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Presentation>, I>>(
    object: I,
  ): APIV1Presentation {
    const message = createBaseAPIV1Presentation();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.groups =
      object.groups?.map((e) => APIV1Presentation_SlideGroup.fromPartial(e)) ||
      [];
    message.hasTimeline = object.hasTimeline ?? false;
    message.presentationPath = object.presentationPath ?? '';
    message.destination = object.destination ?? 0;
    return message;
  },
};

function createBaseAPIV1Presentation_SlideGroup(): APIV1Presentation_SlideGroup {
  return { name: '', color: undefined, slides: [] };
}

export const APIV1Presentation_SlideGroup = {
  encode(
    message: APIV1Presentation_SlideGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.color !== undefined) {
      APIV1Color.encode(message.color, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.slides) {
      APIV1Presentation_SlideGroup_Slide.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Presentation_SlideGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation_SlideGroup();
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

          message.color = APIV1Color.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slides.push(
            APIV1Presentation_SlideGroup_Slide.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1Presentation_SlideGroup {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      color: isSet(object.color)
        ? APIV1Color.fromJSON(object.color)
        : undefined,
      slides: globalThis.Array.isArray(object?.slides)
        ? object.slides.map((e: any) =>
            APIV1Presentation_SlideGroup_Slide.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: APIV1Presentation_SlideGroup): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.color !== undefined) {
      obj.color = APIV1Color.toJSON(message.color);
    }
    if (message.slides?.length) {
      obj.slides = message.slides.map((e) =>
        APIV1Presentation_SlideGroup_Slide.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Presentation_SlideGroup>, I>>(
    base?: I,
  ): APIV1Presentation_SlideGroup {
    return APIV1Presentation_SlideGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Presentation_SlideGroup>, I>>(
    object: I,
  ): APIV1Presentation_SlideGroup {
    const message = createBaseAPIV1Presentation_SlideGroup();
    message.name = object.name ?? '';
    message.color =
      object.color !== undefined && object.color !== null
        ? APIV1Color.fromPartial(object.color)
        : undefined;
    message.slides =
      object.slides?.map((e) =>
        APIV1Presentation_SlideGroup_Slide.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseAPIV1Presentation_SlideGroup_Slide(): APIV1Presentation_SlideGroup_Slide {
  return { enabled: false, notes: '', text: '', label: '', size: undefined };
}

export const APIV1Presentation_SlideGroup_Slide = {
  encode(
    message: APIV1Presentation_SlideGroup_Slide,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.notes !== '') {
      writer.uint32(18).string(message.notes);
    }
    if (message.text !== '') {
      writer.uint32(26).string(message.text);
    }
    if (message.label !== '') {
      writer.uint32(42).string(message.label);
    }
    if (message.size !== undefined) {
      APIV1Size.encode(message.size, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Presentation_SlideGroup_Slide {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Presentation_SlideGroup_Slide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notes = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.label = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.size = APIV1Size.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Presentation_SlideGroup_Slide {
    return {
      enabled: isSet(object.enabled)
        ? globalThis.Boolean(object.enabled)
        : false,
      notes: isSet(object.notes) ? globalThis.String(object.notes) : '',
      text: isSet(object.text) ? globalThis.String(object.text) : '',
      label: isSet(object.label) ? globalThis.String(object.label) : '',
      size: isSet(object.size) ? APIV1Size.fromJSON(object.size) : undefined,
    };
  },

  toJSON(message: APIV1Presentation_SlideGroup_Slide): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.notes !== '') {
      obj.notes = message.notes;
    }
    if (message.text !== '') {
      obj.text = message.text;
    }
    if (message.label !== '') {
      obj.label = message.label;
    }
    if (message.size !== undefined) {
      obj.size = APIV1Size.toJSON(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Presentation_SlideGroup_Slide>, I>>(
    base?: I,
  ): APIV1Presentation_SlideGroup_Slide {
    return APIV1Presentation_SlideGroup_Slide.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1Presentation_SlideGroup_Slide>, I>,
  >(object: I): APIV1Presentation_SlideGroup_Slide {
    const message = createBaseAPIV1Presentation_SlideGroup_Slide();
    message.enabled = object.enabled ?? false;
    message.notes = object.notes ?? '';
    message.text = object.text ?? '';
    message.label = object.label ?? '';
    message.size =
      object.size !== undefined && object.size !== null
        ? APIV1Size.fromPartial(object.size)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationRequest(): APIV1PresentationRequest {
  return {
    active: undefined,
    focused: undefined,
    slideIndex: undefined,
    chordChart: undefined,
    chordChartUpdates: undefined,
    presentation: undefined,
    deletePresentation: undefined,
    timelineOperation: undefined,
    activePresentationTimelineOperation: undefined,
    focusedPresentationTimelineOperation: undefined,
    activePresentationTimelineStatus: undefined,
    focusedPresentationTimelineStatus: undefined,
    thumbnail: undefined,
    focus: undefined,
    trigger: undefined,
  };
}

export const APIV1PresentationRequest = {
  encode(
    message: APIV1PresentationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active !== undefined) {
      APIV1PresentationRequest_Active.encode(
        message.active,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.focused !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.focused,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.slideIndex !== undefined) {
      APIV1PresentationRequest_SlideIndex.encode(
        message.slideIndex,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.chordChart !== undefined) {
      APIV1PresentationRequest_ChordChart.encode(
        message.chordChart,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.chordChartUpdates !== undefined) {
      APIV1PresentationRequest_ChordChartUpdates.encode(
        message.chordChartUpdates,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.presentation !== undefined) {
      APIV1PresentationRequest_Presentation.encode(
        message.presentation,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.deletePresentation !== undefined) {
      APIV1PresentationRequest_DeletePresentation.encode(
        message.deletePresentation,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.timelineOperation !== undefined) {
      APIV1PresentationRequest_TimelineOperation.encode(
        message.timelineOperation,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.activePresentationTimelineOperation !== undefined) {
      APIV1PresentationRequest_ActivePresentationTimelineOperation.encode(
        message.activePresentationTimelineOperation,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.focusedPresentationTimelineOperation !== undefined) {
      APIV1PresentationRequest_FocusedPresentationTimelineOperation.encode(
        message.focusedPresentationTimelineOperation,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.activePresentationTimelineStatus !== undefined) {
      APIV1PresentationRequest_ActivePresentationTimelineStatus.encode(
        message.activePresentationTimelineStatus,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.focusedPresentationTimelineStatus !== undefined) {
      APIV1PresentationRequest_FocusedPresentationTimelineStatus.encode(
        message.focusedPresentationTimelineStatus,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.thumbnail !== undefined) {
      APIV1PresentationRequest_Thumbnail.encode(
        message.thumbnail,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.focus !== undefined) {
      APIV1PresentationRequest_FocusMessage.encode(
        message.focus,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1PresentationRequest_TriggerMessage.encode(
        message.trigger,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.active = APIV1PresentationRequest_Active.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.focused = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.slideIndex = APIV1PresentationRequest_SlideIndex.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chordChart = APIV1PresentationRequest_ChordChart.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.chordChartUpdates =
            APIV1PresentationRequest_ChordChartUpdates.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.presentation = APIV1PresentationRequest_Presentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deletePresentation =
            APIV1PresentationRequest_DeletePresentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timelineOperation =
            APIV1PresentationRequest_TimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activePresentationTimelineOperation =
            APIV1PresentationRequest_ActivePresentationTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.focusedPresentationTimelineOperation =
            APIV1PresentationRequest_FocusedPresentationTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.activePresentationTimelineStatus =
            APIV1PresentationRequest_ActivePresentationTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.focusedPresentationTimelineStatus =
            APIV1PresentationRequest_FocusedPresentationTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.thumbnail = APIV1PresentationRequest_Thumbnail.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.focus = APIV1PresentationRequest_FocusMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.trigger = APIV1PresentationRequest_TriggerMessage.decode(
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

  fromJSON(object: any): APIV1PresentationRequest {
    return {
      active: isSet(object.active)
        ? APIV1PresentationRequest_Active.fromJSON(object.active)
        : undefined,
      focused: isSet(object.focused)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.focused)
        : undefined,
      slideIndex: isSet(object.slideIndex)
        ? APIV1PresentationRequest_SlideIndex.fromJSON(object.slideIndex)
        : undefined,
      chordChart: isSet(object.chordChart)
        ? APIV1PresentationRequest_ChordChart.fromJSON(object.chordChart)
        : undefined,
      chordChartUpdates: isSet(object.chordChartUpdates)
        ? APIV1PresentationRequest_ChordChartUpdates.fromJSON(
            object.chordChartUpdates,
          )
        : undefined,
      presentation: isSet(object.presentation)
        ? APIV1PresentationRequest_Presentation.fromJSON(object.presentation)
        : undefined,
      deletePresentation: isSet(object.deletePresentation)
        ? APIV1PresentationRequest_DeletePresentation.fromJSON(
            object.deletePresentation,
          )
        : undefined,
      timelineOperation: isSet(object.timelineOperation)
        ? APIV1PresentationRequest_TimelineOperation.fromJSON(
            object.timelineOperation,
          )
        : undefined,
      activePresentationTimelineOperation: isSet(
        object.activePresentationTimelineOperation,
      )
        ? APIV1PresentationRequest_ActivePresentationTimelineOperation.fromJSON(
            object.activePresentationTimelineOperation,
          )
        : undefined,
      focusedPresentationTimelineOperation: isSet(
        object.focusedPresentationTimelineOperation,
      )
        ? APIV1PresentationRequest_FocusedPresentationTimelineOperation.fromJSON(
            object.focusedPresentationTimelineOperation,
          )
        : undefined,
      activePresentationTimelineStatus: isSet(
        object.activePresentationTimelineStatus,
      )
        ? APIV1PresentationRequest_ActivePresentationTimelineStatus.fromJSON(
            object.activePresentationTimelineStatus,
          )
        : undefined,
      focusedPresentationTimelineStatus: isSet(
        object.focusedPresentationTimelineStatus,
      )
        ? APIV1PresentationRequest_FocusedPresentationTimelineStatus.fromJSON(
            object.focusedPresentationTimelineStatus,
          )
        : undefined,
      thumbnail: isSet(object.thumbnail)
        ? APIV1PresentationRequest_Thumbnail.fromJSON(object.thumbnail)
        : undefined,
      focus: isSet(object.focus)
        ? APIV1PresentationRequest_FocusMessage.fromJSON(object.focus)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1PresentationRequest_TriggerMessage.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1PresentationRequest): unknown {
    const obj: any = {};
    if (message.active !== undefined) {
      obj.active = APIV1PresentationRequest_Active.toJSON(message.active);
    }
    if (message.focused !== undefined) {
      obj.focused = APIV1PresentationRequest_EmptyMessage.toJSON(
        message.focused,
      );
    }
    if (message.slideIndex !== undefined) {
      obj.slideIndex = APIV1PresentationRequest_SlideIndex.toJSON(
        message.slideIndex,
      );
    }
    if (message.chordChart !== undefined) {
      obj.chordChart = APIV1PresentationRequest_ChordChart.toJSON(
        message.chordChart,
      );
    }
    if (message.chordChartUpdates !== undefined) {
      obj.chordChartUpdates = APIV1PresentationRequest_ChordChartUpdates.toJSON(
        message.chordChartUpdates,
      );
    }
    if (message.presentation !== undefined) {
      obj.presentation = APIV1PresentationRequest_Presentation.toJSON(
        message.presentation,
      );
    }
    if (message.deletePresentation !== undefined) {
      obj.deletePresentation =
        APIV1PresentationRequest_DeletePresentation.toJSON(
          message.deletePresentation,
        );
    }
    if (message.timelineOperation !== undefined) {
      obj.timelineOperation = APIV1PresentationRequest_TimelineOperation.toJSON(
        message.timelineOperation,
      );
    }
    if (message.activePresentationTimelineOperation !== undefined) {
      obj.activePresentationTimelineOperation =
        APIV1PresentationRequest_ActivePresentationTimelineOperation.toJSON(
          message.activePresentationTimelineOperation,
        );
    }
    if (message.focusedPresentationTimelineOperation !== undefined) {
      obj.focusedPresentationTimelineOperation =
        APIV1PresentationRequest_FocusedPresentationTimelineOperation.toJSON(
          message.focusedPresentationTimelineOperation,
        );
    }
    if (message.activePresentationTimelineStatus !== undefined) {
      obj.activePresentationTimelineStatus =
        APIV1PresentationRequest_ActivePresentationTimelineStatus.toJSON(
          message.activePresentationTimelineStatus,
        );
    }
    if (message.focusedPresentationTimelineStatus !== undefined) {
      obj.focusedPresentationTimelineStatus =
        APIV1PresentationRequest_FocusedPresentationTimelineStatus.toJSON(
          message.focusedPresentationTimelineStatus,
        );
    }
    if (message.thumbnail !== undefined) {
      obj.thumbnail = APIV1PresentationRequest_Thumbnail.toJSON(
        message.thumbnail,
      );
    }
    if (message.focus !== undefined) {
      obj.focus = APIV1PresentationRequest_FocusMessage.toJSON(message.focus);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1PresentationRequest_TriggerMessage.toJSON(
        message.trigger,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationRequest>, I>>(
    base?: I,
  ): APIV1PresentationRequest {
    return APIV1PresentationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PresentationRequest>, I>>(
    object: I,
  ): APIV1PresentationRequest {
    const message = createBaseAPIV1PresentationRequest();
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1PresentationRequest_Active.fromPartial(object.active)
        : undefined;
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.focused)
        : undefined;
    message.slideIndex =
      object.slideIndex !== undefined && object.slideIndex !== null
        ? APIV1PresentationRequest_SlideIndex.fromPartial(object.slideIndex)
        : undefined;
    message.chordChart =
      object.chordChart !== undefined && object.chordChart !== null
        ? APIV1PresentationRequest_ChordChart.fromPartial(object.chordChart)
        : undefined;
    message.chordChartUpdates =
      object.chordChartUpdates !== undefined &&
      object.chordChartUpdates !== null
        ? APIV1PresentationRequest_ChordChartUpdates.fromPartial(
            object.chordChartUpdates,
          )
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? APIV1PresentationRequest_Presentation.fromPartial(object.presentation)
        : undefined;
    message.deletePresentation =
      object.deletePresentation !== undefined &&
      object.deletePresentation !== null
        ? APIV1PresentationRequest_DeletePresentation.fromPartial(
            object.deletePresentation,
          )
        : undefined;
    message.timelineOperation =
      object.timelineOperation !== undefined &&
      object.timelineOperation !== null
        ? APIV1PresentationRequest_TimelineOperation.fromPartial(
            object.timelineOperation,
          )
        : undefined;
    message.activePresentationTimelineOperation =
      object.activePresentationTimelineOperation !== undefined &&
      object.activePresentationTimelineOperation !== null
        ? APIV1PresentationRequest_ActivePresentationTimelineOperation.fromPartial(
            object.activePresentationTimelineOperation,
          )
        : undefined;
    message.focusedPresentationTimelineOperation =
      object.focusedPresentationTimelineOperation !== undefined &&
      object.focusedPresentationTimelineOperation !== null
        ? APIV1PresentationRequest_FocusedPresentationTimelineOperation.fromPartial(
            object.focusedPresentationTimelineOperation,
          )
        : undefined;
    message.activePresentationTimelineStatus =
      object.activePresentationTimelineStatus !== undefined &&
      object.activePresentationTimelineStatus !== null
        ? APIV1PresentationRequest_ActivePresentationTimelineStatus.fromPartial(
            object.activePresentationTimelineStatus,
          )
        : undefined;
    message.focusedPresentationTimelineStatus =
      object.focusedPresentationTimelineStatus !== undefined &&
      object.focusedPresentationTimelineStatus !== null
        ? APIV1PresentationRequest_FocusedPresentationTimelineStatus.fromPartial(
            object.focusedPresentationTimelineStatus,
          )
        : undefined;
    message.thumbnail =
      object.thumbnail !== undefined && object.thumbnail !== null
        ? APIV1PresentationRequest_Thumbnail.fromPartial(object.thumbnail)
        : undefined;
    message.focus =
      object.focus !== undefined && object.focus !== null
        ? APIV1PresentationRequest_FocusMessage.fromPartial(object.focus)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1PresentationRequest_TriggerMessage.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_Active(): APIV1PresentationRequest_Active {
  return {};
}

export const APIV1PresentationRequest_Active = {
  encode(
    _: APIV1PresentationRequest_Active,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_Active {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_Active();
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

  fromJSON(_: any): APIV1PresentationRequest_Active {
    return {};
  },

  toJSON(_: APIV1PresentationRequest_Active): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationRequest_Active>, I>>(
    base?: I,
  ): APIV1PresentationRequest_Active {
    return APIV1PresentationRequest_Active.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PresentationRequest_Active>, I>>(
    _: I,
  ): APIV1PresentationRequest_Active {
    const message = createBaseAPIV1PresentationRequest_Active();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_SlideIndex(): APIV1PresentationRequest_SlideIndex {
  return {};
}

export const APIV1PresentationRequest_SlideIndex = {
  encode(
    _: APIV1PresentationRequest_SlideIndex,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_SlideIndex {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_SlideIndex();
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

  fromJSON(_: any): APIV1PresentationRequest_SlideIndex {
    return {};
  },

  toJSON(_: APIV1PresentationRequest_SlideIndex): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationRequest_SlideIndex>, I>>(
    base?: I,
  ): APIV1PresentationRequest_SlideIndex {
    return APIV1PresentationRequest_SlideIndex.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_SlideIndex>, I>,
  >(_: I): APIV1PresentationRequest_SlideIndex {
    const message = createBaseAPIV1PresentationRequest_SlideIndex();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_ChordChart(): APIV1PresentationRequest_ChordChart {
  return { quality: 0 };
}

export const APIV1PresentationRequest_ChordChart = {
  encode(
    message: APIV1PresentationRequest_ChordChart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.quality !== 0) {
      writer.uint32(8).int32(message.quality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_ChordChart {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_ChordChart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.quality = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_ChordChart {
    return {
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
    };
  },

  toJSON(message: APIV1PresentationRequest_ChordChart): unknown {
    const obj: any = {};
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationRequest_ChordChart>, I>>(
    base?: I,
  ): APIV1PresentationRequest_ChordChart {
    return APIV1PresentationRequest_ChordChart.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_ChordChart>, I>,
  >(object: I): APIV1PresentationRequest_ChordChart {
    const message = createBaseAPIV1PresentationRequest_ChordChart();
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_ChordChartUpdates(): APIV1PresentationRequest_ChordChartUpdates {
  return {};
}

export const APIV1PresentationRequest_ChordChartUpdates = {
  encode(
    _: APIV1PresentationRequest_ChordChartUpdates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_ChordChartUpdates {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_ChordChartUpdates();
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

  fromJSON(_: any): APIV1PresentationRequest_ChordChartUpdates {
    return {};
  },

  toJSON(_: APIV1PresentationRequest_ChordChartUpdates): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_ChordChartUpdates>, I>,
  >(base?: I): APIV1PresentationRequest_ChordChartUpdates {
    return APIV1PresentationRequest_ChordChartUpdates.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_ChordChartUpdates>, I>,
  >(_: I): APIV1PresentationRequest_ChordChartUpdates {
    const message = createBaseAPIV1PresentationRequest_ChordChartUpdates();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_Presentation(): APIV1PresentationRequest_Presentation {
  return { uuid: undefined };
}

export const APIV1PresentationRequest_Presentation = {
  encode(
    message: APIV1PresentationRequest_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_Presentation {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: APIV1PresentationRequest_Presentation): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_Presentation>, I>,
  >(base?: I): APIV1PresentationRequest_Presentation {
    return APIV1PresentationRequest_Presentation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_Presentation>, I>,
  >(object: I): APIV1PresentationRequest_Presentation {
    const message = createBaseAPIV1PresentationRequest_Presentation();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_DeletePresentation(): APIV1PresentationRequest_DeletePresentation {
  return { uuid: undefined };
}

export const APIV1PresentationRequest_DeletePresentation = {
  encode(
    message: APIV1PresentationRequest_DeletePresentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_DeletePresentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_DeletePresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_DeletePresentation {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: APIV1PresentationRequest_DeletePresentation): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_DeletePresentation>,
      I
    >,
  >(base?: I): APIV1PresentationRequest_DeletePresentation {
    return APIV1PresentationRequest_DeletePresentation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_DeletePresentation>,
      I
    >,
  >(object: I): APIV1PresentationRequest_DeletePresentation {
    const message = createBaseAPIV1PresentationRequest_DeletePresentation();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_TimelineOperation(): APIV1PresentationRequest_TimelineOperation {
  return { uuid: undefined, operation: 0 };
}

export const APIV1PresentationRequest_TimelineOperation = {
  encode(
    message: APIV1PresentationRequest_TimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_TimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_TimelineOperation();
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
          if (tag !== 16) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_TimelineOperation {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      operation: isSet(object.operation)
        ? aPIV1TimelineOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(message: APIV1PresentationRequest_TimelineOperation): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.operation !== 0) {
      obj.operation = aPIV1TimelineOperationToJSON(message.operation);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_TimelineOperation>, I>,
  >(base?: I): APIV1PresentationRequest_TimelineOperation {
    return APIV1PresentationRequest_TimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_TimelineOperation>, I>,
  >(object: I): APIV1PresentationRequest_TimelineOperation {
    const message = createBaseAPIV1PresentationRequest_TimelineOperation();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_ActivePresentationTimelineOperation(): APIV1PresentationRequest_ActivePresentationTimelineOperation {
  return { operation: 0 };
}

export const APIV1PresentationRequest_ActivePresentationTimelineOperation = {
  encode(
    message: APIV1PresentationRequest_ActivePresentationTimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_ActivePresentationTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationRequest_ActivePresentationTimelineOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): APIV1PresentationRequest_ActivePresentationTimelineOperation {
    return {
      operation: isSet(object.operation)
        ? aPIV1TimelineOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(
    message: APIV1PresentationRequest_ActivePresentationTimelineOperation,
  ): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = aPIV1TimelineOperationToJSON(message.operation);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_ActivePresentationTimelineOperation>,
      I
    >,
  >(base?: I): APIV1PresentationRequest_ActivePresentationTimelineOperation {
    return APIV1PresentationRequest_ActivePresentationTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_ActivePresentationTimelineOperation>,
      I
    >,
  >(object: I): APIV1PresentationRequest_ActivePresentationTimelineOperation {
    const message =
      createBaseAPIV1PresentationRequest_ActivePresentationTimelineOperation();
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_FocusedPresentationTimelineOperation(): APIV1PresentationRequest_FocusedPresentationTimelineOperation {
  return { operation: 0 };
}

export const APIV1PresentationRequest_FocusedPresentationTimelineOperation = {
  encode(
    message: APIV1PresentationRequest_FocusedPresentationTimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_FocusedPresentationTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationRequest_FocusedPresentationTimelineOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): APIV1PresentationRequest_FocusedPresentationTimelineOperation {
    return {
      operation: isSet(object.operation)
        ? aPIV1TimelineOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(
    message: APIV1PresentationRequest_FocusedPresentationTimelineOperation,
  ): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = aPIV1TimelineOperationToJSON(message.operation);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_FocusedPresentationTimelineOperation>,
      I
    >,
  >(base?: I): APIV1PresentationRequest_FocusedPresentationTimelineOperation {
    return APIV1PresentationRequest_FocusedPresentationTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_FocusedPresentationTimelineOperation>,
      I
    >,
  >(object: I): APIV1PresentationRequest_FocusedPresentationTimelineOperation {
    const message =
      createBaseAPIV1PresentationRequest_FocusedPresentationTimelineOperation();
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_ActivePresentationTimelineStatus(): APIV1PresentationRequest_ActivePresentationTimelineStatus {
  return {};
}

export const APIV1PresentationRequest_ActivePresentationTimelineStatus = {
  encode(
    _: APIV1PresentationRequest_ActivePresentationTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_ActivePresentationTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationRequest_ActivePresentationTimelineStatus();
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

  fromJSON(_: any): APIV1PresentationRequest_ActivePresentationTimelineStatus {
    return {};
  },

  toJSON(
    _: APIV1PresentationRequest_ActivePresentationTimelineStatus,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_ActivePresentationTimelineStatus>,
      I
    >,
  >(base?: I): APIV1PresentationRequest_ActivePresentationTimelineStatus {
    return APIV1PresentationRequest_ActivePresentationTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_ActivePresentationTimelineStatus>,
      I
    >,
  >(_: I): APIV1PresentationRequest_ActivePresentationTimelineStatus {
    const message =
      createBaseAPIV1PresentationRequest_ActivePresentationTimelineStatus();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_FocusedPresentationTimelineStatus(): APIV1PresentationRequest_FocusedPresentationTimelineStatus {
  return {};
}

export const APIV1PresentationRequest_FocusedPresentationTimelineStatus = {
  encode(
    _: APIV1PresentationRequest_FocusedPresentationTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_FocusedPresentationTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationRequest_FocusedPresentationTimelineStatus();
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

  fromJSON(_: any): APIV1PresentationRequest_FocusedPresentationTimelineStatus {
    return {};
  },

  toJSON(
    _: APIV1PresentationRequest_FocusedPresentationTimelineStatus,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_FocusedPresentationTimelineStatus>,
      I
    >,
  >(base?: I): APIV1PresentationRequest_FocusedPresentationTimelineStatus {
    return APIV1PresentationRequest_FocusedPresentationTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationRequest_FocusedPresentationTimelineStatus>,
      I
    >,
  >(_: I): APIV1PresentationRequest_FocusedPresentationTimelineStatus {
    const message =
      createBaseAPIV1PresentationRequest_FocusedPresentationTimelineStatus();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_Thumbnail(): APIV1PresentationRequest_Thumbnail {
  return { uuid: undefined, cueIndex: 0, quality: 0, contentType: 0 };
}

export const APIV1PresentationRequest_Thumbnail = {
  encode(
    message: APIV1PresentationRequest_Thumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.cueIndex !== 0) {
      writer.uint32(16).uint32(message.cueIndex);
    }
    if (message.quality !== 0) {
      writer.uint32(24).int32(message.quality);
    }
    if (message.contentType !== 0) {
      writer.uint32(32).int32(message.contentType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_Thumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_Thumbnail();
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
          if (tag !== 16) {
            break;
          }

          message.cueIndex = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quality = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_Thumbnail {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      cueIndex: isSet(object.cueIndex) ? globalThis.Number(object.cueIndex) : 0,
      quality: isSet(object.quality) ? globalThis.Number(object.quality) : 0,
      contentType: isSet(object.contentType)
        ? aPIV1ContentTypeFromJSON(object.contentType)
        : 0,
    };
  },

  toJSON(message: APIV1PresentationRequest_Thumbnail): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.cueIndex !== 0) {
      obj.cueIndex = Math.round(message.cueIndex);
    }
    if (message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    if (message.contentType !== 0) {
      obj.contentType = aPIV1ContentTypeToJSON(message.contentType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationRequest_Thumbnail>, I>>(
    base?: I,
  ): APIV1PresentationRequest_Thumbnail {
    return APIV1PresentationRequest_Thumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_Thumbnail>, I>,
  >(object: I): APIV1PresentationRequest_Thumbnail {
    const message = createBaseAPIV1PresentationRequest_Thumbnail();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.cueIndex = object.cueIndex ?? 0;
    message.quality = object.quality ?? 0;
    message.contentType = object.contentType ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_EmptyMessage(): APIV1PresentationRequest_EmptyMessage {
  return {};
}

export const APIV1PresentationRequest_EmptyMessage = {
  encode(
    _: APIV1PresentationRequest_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_EmptyMessage();
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

  fromJSON(_: any): APIV1PresentationRequest_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1PresentationRequest_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_EmptyMessage>, I>,
  >(base?: I): APIV1PresentationRequest_EmptyMessage {
    return APIV1PresentationRequest_EmptyMessage.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_EmptyMessage>, I>,
  >(_: I): APIV1PresentationRequest_EmptyMessage {
    const message = createBaseAPIV1PresentationRequest_EmptyMessage();
    return message;
  },
};

function createBaseAPIV1PresentationRequest_FocusMessage(): APIV1PresentationRequest_FocusMessage {
  return {
    next: undefined,
    previous: undefined,
    active: undefined,
    uuid: undefined,
  };
}

export const APIV1PresentationRequest_FocusMessage = {
  encode(
    message: APIV1PresentationRequest_FocusMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.next !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.next,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.previous,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.active,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.uuid !== undefined) {
      writer.uint32(34).string(message.uuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_FocusMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_FocusMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.next = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.previous = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.active = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.uuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_FocusMessage {
    return {
      next: isSet(object.next)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.previous)
        : undefined,
      active: isSet(object.active)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.active)
        : undefined,
      uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : undefined,
    };
  },

  toJSON(message: APIV1PresentationRequest_FocusMessage): unknown {
    const obj: any = {};
    if (message.next !== undefined) {
      obj.next = APIV1PresentationRequest_EmptyMessage.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1PresentationRequest_EmptyMessage.toJSON(
        message.previous,
      );
    }
    if (message.active !== undefined) {
      obj.active = APIV1PresentationRequest_EmptyMessage.toJSON(message.active);
    }
    if (message.uuid !== undefined) {
      obj.uuid = message.uuid;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_FocusMessage>, I>,
  >(base?: I): APIV1PresentationRequest_FocusMessage {
    return APIV1PresentationRequest_FocusMessage.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_FocusMessage>, I>,
  >(object: I): APIV1PresentationRequest_FocusMessage {
    const message = createBaseAPIV1PresentationRequest_FocusMessage();
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.previous)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.active)
        : undefined;
    message.uuid = object.uuid ?? undefined;
    return message;
  },
};

function createBaseAPIV1PresentationRequest_TriggerMessage(): APIV1PresentationRequest_TriggerMessage {
  return {
    focused: undefined,
    active: undefined,
    uuid: undefined,
    first: undefined,
    next: undefined,
    previous: undefined,
    index: undefined,
    group: undefined,
  };
}

export const APIV1PresentationRequest_TriggerMessage = {
  encode(
    message: APIV1PresentationRequest_TriggerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.focused !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.focused,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.active,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.uuid !== undefined) {
      StringValue.encode(
        { value: message.uuid! },
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.first !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.first,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.next !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.next,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.previous !== undefined) {
      APIV1PresentationRequest_EmptyMessage.encode(
        message.previous,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.index !== undefined) {
      UInt32Value.encode(
        { value: message.index! },
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.group !== undefined) {
      StringValue.encode(
        { value: message.group! },
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationRequest_TriggerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationRequest_TriggerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.focused = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.active = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.uuid = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.first = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.next = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.previous = APIV1PresentationRequest_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.index = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.group = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationRequest_TriggerMessage {
    return {
      focused: isSet(object.focused)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.focused)
        : undefined,
      active: isSet(object.active)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.active)
        : undefined,
      uuid: isSet(object.uuid) ? String(object.uuid) : undefined,
      first: isSet(object.first)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.first)
        : undefined,
      next: isSet(object.next)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.next)
        : undefined,
      previous: isSet(object.previous)
        ? APIV1PresentationRequest_EmptyMessage.fromJSON(object.previous)
        : undefined,
      index: isSet(object.index) ? Number(object.index) : undefined,
      group: isSet(object.group) ? String(object.group) : undefined,
    };
  },

  toJSON(message: APIV1PresentationRequest_TriggerMessage): unknown {
    const obj: any = {};
    if (message.focused !== undefined) {
      obj.focused = APIV1PresentationRequest_EmptyMessage.toJSON(
        message.focused,
      );
    }
    if (message.active !== undefined) {
      obj.active = APIV1PresentationRequest_EmptyMessage.toJSON(message.active);
    }
    if (message.uuid !== undefined) {
      obj.uuid = message.uuid;
    }
    if (message.first !== undefined) {
      obj.first = APIV1PresentationRequest_EmptyMessage.toJSON(message.first);
    }
    if (message.next !== undefined) {
      obj.next = APIV1PresentationRequest_EmptyMessage.toJSON(message.next);
    }
    if (message.previous !== undefined) {
      obj.previous = APIV1PresentationRequest_EmptyMessage.toJSON(
        message.previous,
      );
    }
    if (message.index !== undefined) {
      obj.index = message.index;
    }
    if (message.group !== undefined) {
      obj.group = message.group;
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationRequest_TriggerMessage>, I>,
  >(base?: I): APIV1PresentationRequest_TriggerMessage {
    return APIV1PresentationRequest_TriggerMessage.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationRequest_TriggerMessage>, I>,
  >(object: I): APIV1PresentationRequest_TriggerMessage {
    const message = createBaseAPIV1PresentationRequest_TriggerMessage();
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.focused)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.active)
        : undefined;
    message.uuid = object.uuid ?? undefined;
    message.first =
      object.first !== undefined && object.first !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.first)
        : undefined;
    message.next =
      object.next !== undefined && object.next !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.next)
        : undefined;
    message.previous =
      object.previous !== undefined && object.previous !== null
        ? APIV1PresentationRequest_EmptyMessage.fromPartial(object.previous)
        : undefined;
    message.index = object.index ?? undefined;
    message.group = object.group ?? undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse(): APIV1PresentationResponse {
  return {
    active: undefined,
    slideIndex: undefined,
    chordChart: undefined,
    chordChartUpdate: undefined,
    presentation: undefined,
    deletePresentation: undefined,
    triggerPresentation: undefined,
    triggerCue: undefined,
    timelineOperation: undefined,
    activePresentationTimelineOperation: undefined,
    focusedPresentationTimelineOperation: undefined,
    activePresentationTimelineStatus: undefined,
    focusedPresentationTimelineStatus: undefined,
    thumbnail: undefined,
    focused: undefined,
    focus: undefined,
    trigger: undefined,
  };
}

export const APIV1PresentationResponse = {
  encode(
    message: APIV1PresentationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.active !== undefined) {
      APIV1PresentationResponse_Active.encode(
        message.active,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.slideIndex !== undefined) {
      APIV1PresentationResponse_SlideIndex.encode(
        message.slideIndex,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.chordChart !== undefined) {
      APIV1PresentationResponse_ChordChart.encode(
        message.chordChart,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.chordChartUpdate !== undefined) {
      APIV1PresentationResponse_ChordChartUpdates.encode(
        message.chordChartUpdate,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.presentation !== undefined) {
      APIV1PresentationResponse_Presentation.encode(
        message.presentation,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.deletePresentation !== undefined) {
      APIV1PresentationResponse_DeletePresentation.encode(
        message.deletePresentation,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.triggerPresentation !== undefined) {
      APIV1PresentationResponse_TriggerPresentation.encode(
        message.triggerPresentation,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.triggerCue !== undefined) {
      APIV1PresentationResponse_TriggerCue.encode(
        message.triggerCue,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.timelineOperation !== undefined) {
      APIV1PresentationResponse_TimelineOperation.encode(
        message.timelineOperation,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.activePresentationTimelineOperation !== undefined) {
      APIV1PresentationResponse_ActivePresentationTimelineOperation.encode(
        message.activePresentationTimelineOperation,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.focusedPresentationTimelineOperation !== undefined) {
      APIV1PresentationResponse_FocusedPresentationTimelineOperation.encode(
        message.focusedPresentationTimelineOperation,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.activePresentationTimelineStatus !== undefined) {
      APIV1PresentationResponse_ActivePresentationTimelineStatus.encode(
        message.activePresentationTimelineStatus,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.focusedPresentationTimelineStatus !== undefined) {
      APIV1PresentationResponse_FocusedPresentationTimelineStatus.encode(
        message.focusedPresentationTimelineStatus,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.thumbnail !== undefined) {
      APIV1PresentationResponse_Thumbnail.encode(
        message.thumbnail,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.focused !== undefined) {
      APIV1PresentationResponse_Focused.encode(
        message.focused,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.focus !== undefined) {
      APIV1PresentationResponse_EmptyMessage.encode(
        message.focus,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      APIV1PresentationResponse_EmptyMessage.encode(
        message.trigger,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.active = APIV1PresentationResponse_Active.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.slideIndex = APIV1PresentationResponse_SlideIndex.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chordChart = APIV1PresentationResponse_ChordChart.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.chordChartUpdate =
            APIV1PresentationResponse_ChordChartUpdates.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.presentation = APIV1PresentationResponse_Presentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deletePresentation =
            APIV1PresentationResponse_DeletePresentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.triggerPresentation =
            APIV1PresentationResponse_TriggerPresentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.triggerCue = APIV1PresentationResponse_TriggerCue.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.timelineOperation =
            APIV1PresentationResponse_TimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.activePresentationTimelineOperation =
            APIV1PresentationResponse_ActivePresentationTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.focusedPresentationTimelineOperation =
            APIV1PresentationResponse_FocusedPresentationTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.activePresentationTimelineStatus =
            APIV1PresentationResponse_ActivePresentationTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.focusedPresentationTimelineStatus =
            APIV1PresentationResponse_FocusedPresentationTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.thumbnail = APIV1PresentationResponse_Thumbnail.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.focused = APIV1PresentationResponse_Focused.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.focus = APIV1PresentationResponse_EmptyMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.trigger = APIV1PresentationResponse_EmptyMessage.decode(
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

  fromJSON(object: any): APIV1PresentationResponse {
    return {
      active: isSet(object.active)
        ? APIV1PresentationResponse_Active.fromJSON(object.active)
        : undefined,
      slideIndex: isSet(object.slideIndex)
        ? APIV1PresentationResponse_SlideIndex.fromJSON(object.slideIndex)
        : undefined,
      chordChart: isSet(object.chordChart)
        ? APIV1PresentationResponse_ChordChart.fromJSON(object.chordChart)
        : undefined,
      chordChartUpdate: isSet(object.chordChartUpdate)
        ? APIV1PresentationResponse_ChordChartUpdates.fromJSON(
            object.chordChartUpdate,
          )
        : undefined,
      presentation: isSet(object.presentation)
        ? APIV1PresentationResponse_Presentation.fromJSON(object.presentation)
        : undefined,
      deletePresentation: isSet(object.deletePresentation)
        ? APIV1PresentationResponse_DeletePresentation.fromJSON(
            object.deletePresentation,
          )
        : undefined,
      triggerPresentation: isSet(object.triggerPresentation)
        ? APIV1PresentationResponse_TriggerPresentation.fromJSON(
            object.triggerPresentation,
          )
        : undefined,
      triggerCue: isSet(object.triggerCue)
        ? APIV1PresentationResponse_TriggerCue.fromJSON(object.triggerCue)
        : undefined,
      timelineOperation: isSet(object.timelineOperation)
        ? APIV1PresentationResponse_TimelineOperation.fromJSON(
            object.timelineOperation,
          )
        : undefined,
      activePresentationTimelineOperation: isSet(
        object.activePresentationTimelineOperation,
      )
        ? APIV1PresentationResponse_ActivePresentationTimelineOperation.fromJSON(
            object.activePresentationTimelineOperation,
          )
        : undefined,
      focusedPresentationTimelineOperation: isSet(
        object.focusedPresentationTimelineOperation,
      )
        ? APIV1PresentationResponse_FocusedPresentationTimelineOperation.fromJSON(
            object.focusedPresentationTimelineOperation,
          )
        : undefined,
      activePresentationTimelineStatus: isSet(
        object.activePresentationTimelineStatus,
      )
        ? APIV1PresentationResponse_ActivePresentationTimelineStatus.fromJSON(
            object.activePresentationTimelineStatus,
          )
        : undefined,
      focusedPresentationTimelineStatus: isSet(
        object.focusedPresentationTimelineStatus,
      )
        ? APIV1PresentationResponse_FocusedPresentationTimelineStatus.fromJSON(
            object.focusedPresentationTimelineStatus,
          )
        : undefined,
      thumbnail: isSet(object.thumbnail)
        ? APIV1PresentationResponse_Thumbnail.fromJSON(object.thumbnail)
        : undefined,
      focused: isSet(object.focused)
        ? APIV1PresentationResponse_Focused.fromJSON(object.focused)
        : undefined,
      focus: isSet(object.focus)
        ? APIV1PresentationResponse_EmptyMessage.fromJSON(object.focus)
        : undefined,
      trigger: isSet(object.trigger)
        ? APIV1PresentationResponse_EmptyMessage.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: APIV1PresentationResponse): unknown {
    const obj: any = {};
    if (message.active !== undefined) {
      obj.active = APIV1PresentationResponse_Active.toJSON(message.active);
    }
    if (message.slideIndex !== undefined) {
      obj.slideIndex = APIV1PresentationResponse_SlideIndex.toJSON(
        message.slideIndex,
      );
    }
    if (message.chordChart !== undefined) {
      obj.chordChart = APIV1PresentationResponse_ChordChart.toJSON(
        message.chordChart,
      );
    }
    if (message.chordChartUpdate !== undefined) {
      obj.chordChartUpdate = APIV1PresentationResponse_ChordChartUpdates.toJSON(
        message.chordChartUpdate,
      );
    }
    if (message.presentation !== undefined) {
      obj.presentation = APIV1PresentationResponse_Presentation.toJSON(
        message.presentation,
      );
    }
    if (message.deletePresentation !== undefined) {
      obj.deletePresentation =
        APIV1PresentationResponse_DeletePresentation.toJSON(
          message.deletePresentation,
        );
    }
    if (message.triggerPresentation !== undefined) {
      obj.triggerPresentation =
        APIV1PresentationResponse_TriggerPresentation.toJSON(
          message.triggerPresentation,
        );
    }
    if (message.triggerCue !== undefined) {
      obj.triggerCue = APIV1PresentationResponse_TriggerCue.toJSON(
        message.triggerCue,
      );
    }
    if (message.timelineOperation !== undefined) {
      obj.timelineOperation =
        APIV1PresentationResponse_TimelineOperation.toJSON(
          message.timelineOperation,
        );
    }
    if (message.activePresentationTimelineOperation !== undefined) {
      obj.activePresentationTimelineOperation =
        APIV1PresentationResponse_ActivePresentationTimelineOperation.toJSON(
          message.activePresentationTimelineOperation,
        );
    }
    if (message.focusedPresentationTimelineOperation !== undefined) {
      obj.focusedPresentationTimelineOperation =
        APIV1PresentationResponse_FocusedPresentationTimelineOperation.toJSON(
          message.focusedPresentationTimelineOperation,
        );
    }
    if (message.activePresentationTimelineStatus !== undefined) {
      obj.activePresentationTimelineStatus =
        APIV1PresentationResponse_ActivePresentationTimelineStatus.toJSON(
          message.activePresentationTimelineStatus,
        );
    }
    if (message.focusedPresentationTimelineStatus !== undefined) {
      obj.focusedPresentationTimelineStatus =
        APIV1PresentationResponse_FocusedPresentationTimelineStatus.toJSON(
          message.focusedPresentationTimelineStatus,
        );
    }
    if (message.thumbnail !== undefined) {
      obj.thumbnail = APIV1PresentationResponse_Thumbnail.toJSON(
        message.thumbnail,
      );
    }
    if (message.focused !== undefined) {
      obj.focused = APIV1PresentationResponse_Focused.toJSON(message.focused);
    }
    if (message.focus !== undefined) {
      obj.focus = APIV1PresentationResponse_EmptyMessage.toJSON(message.focus);
    }
    if (message.trigger !== undefined) {
      obj.trigger = APIV1PresentationResponse_EmptyMessage.toJSON(
        message.trigger,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse>, I>>(
    base?: I,
  ): APIV1PresentationResponse {
    return APIV1PresentationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1PresentationResponse>, I>>(
    object: I,
  ): APIV1PresentationResponse {
    const message = createBaseAPIV1PresentationResponse();
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1PresentationResponse_Active.fromPartial(object.active)
        : undefined;
    message.slideIndex =
      object.slideIndex !== undefined && object.slideIndex !== null
        ? APIV1PresentationResponse_SlideIndex.fromPartial(object.slideIndex)
        : undefined;
    message.chordChart =
      object.chordChart !== undefined && object.chordChart !== null
        ? APIV1PresentationResponse_ChordChart.fromPartial(object.chordChart)
        : undefined;
    message.chordChartUpdate =
      object.chordChartUpdate !== undefined && object.chordChartUpdate !== null
        ? APIV1PresentationResponse_ChordChartUpdates.fromPartial(
            object.chordChartUpdate,
          )
        : undefined;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? APIV1PresentationResponse_Presentation.fromPartial(
            object.presentation,
          )
        : undefined;
    message.deletePresentation =
      object.deletePresentation !== undefined &&
      object.deletePresentation !== null
        ? APIV1PresentationResponse_DeletePresentation.fromPartial(
            object.deletePresentation,
          )
        : undefined;
    message.triggerPresentation =
      object.triggerPresentation !== undefined &&
      object.triggerPresentation !== null
        ? APIV1PresentationResponse_TriggerPresentation.fromPartial(
            object.triggerPresentation,
          )
        : undefined;
    message.triggerCue =
      object.triggerCue !== undefined && object.triggerCue !== null
        ? APIV1PresentationResponse_TriggerCue.fromPartial(object.triggerCue)
        : undefined;
    message.timelineOperation =
      object.timelineOperation !== undefined &&
      object.timelineOperation !== null
        ? APIV1PresentationResponse_TimelineOperation.fromPartial(
            object.timelineOperation,
          )
        : undefined;
    message.activePresentationTimelineOperation =
      object.activePresentationTimelineOperation !== undefined &&
      object.activePresentationTimelineOperation !== null
        ? APIV1PresentationResponse_ActivePresentationTimelineOperation.fromPartial(
            object.activePresentationTimelineOperation,
          )
        : undefined;
    message.focusedPresentationTimelineOperation =
      object.focusedPresentationTimelineOperation !== undefined &&
      object.focusedPresentationTimelineOperation !== null
        ? APIV1PresentationResponse_FocusedPresentationTimelineOperation.fromPartial(
            object.focusedPresentationTimelineOperation,
          )
        : undefined;
    message.activePresentationTimelineStatus =
      object.activePresentationTimelineStatus !== undefined &&
      object.activePresentationTimelineStatus !== null
        ? APIV1PresentationResponse_ActivePresentationTimelineStatus.fromPartial(
            object.activePresentationTimelineStatus,
          )
        : undefined;
    message.focusedPresentationTimelineStatus =
      object.focusedPresentationTimelineStatus !== undefined &&
      object.focusedPresentationTimelineStatus !== null
        ? APIV1PresentationResponse_FocusedPresentationTimelineStatus.fromPartial(
            object.focusedPresentationTimelineStatus,
          )
        : undefined;
    message.thumbnail =
      object.thumbnail !== undefined && object.thumbnail !== null
        ? APIV1PresentationResponse_Thumbnail.fromPartial(object.thumbnail)
        : undefined;
    message.focused =
      object.focused !== undefined && object.focused !== null
        ? APIV1PresentationResponse_Focused.fromPartial(object.focused)
        : undefined;
    message.focus =
      object.focus !== undefined && object.focus !== null
        ? APIV1PresentationResponse_EmptyMessage.fromPartial(object.focus)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? APIV1PresentationResponse_EmptyMessage.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_Active(): APIV1PresentationResponse_Active {
  return { presentation: undefined };
}

export const APIV1PresentationResponse_Active = {
  encode(
    message: APIV1PresentationResponse_Active,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      APIV1Presentation.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_Active {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_Active();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentation = APIV1Presentation.decode(
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

  fromJSON(object: any): APIV1PresentationResponse_Active {
    return {
      presentation: isSet(object.presentation)
        ? APIV1Presentation.fromJSON(object.presentation)
        : undefined,
    };
  },

  toJSON(message: APIV1PresentationResponse_Active): unknown {
    const obj: any = {};
    if (message.presentation !== undefined) {
      obj.presentation = APIV1Presentation.toJSON(message.presentation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_Active>, I>>(
    base?: I,
  ): APIV1PresentationResponse_Active {
    return APIV1PresentationResponse_Active.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_Active>, I>,
  >(object: I): APIV1PresentationResponse_Active {
    const message = createBaseAPIV1PresentationResponse_Active();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? APIV1Presentation.fromPartial(object.presentation)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_SlideIndex(): APIV1PresentationResponse_SlideIndex {
  return { presentationIndex: undefined };
}

export const APIV1PresentationResponse_SlideIndex = {
  encode(
    message: APIV1PresentationResponse_SlideIndex,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentationIndex !== undefined) {
      APIV1SlideIndex.encode(
        message.presentationIndex,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_SlideIndex {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_SlideIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentationIndex = APIV1SlideIndex.decode(
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

  fromJSON(object: any): APIV1PresentationResponse_SlideIndex {
    return {
      presentationIndex: isSet(object.presentationIndex)
        ? APIV1SlideIndex.fromJSON(object.presentationIndex)
        : undefined,
    };
  },

  toJSON(message: APIV1PresentationResponse_SlideIndex): unknown {
    const obj: any = {};
    if (message.presentationIndex !== undefined) {
      obj.presentationIndex = APIV1SlideIndex.toJSON(message.presentationIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_SlideIndex>, I>>(
    base?: I,
  ): APIV1PresentationResponse_SlideIndex {
    return APIV1PresentationResponse_SlideIndex.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_SlideIndex>, I>,
  >(object: I): APIV1PresentationResponse_SlideIndex {
    const message = createBaseAPIV1PresentationResponse_SlideIndex();
    message.presentationIndex =
      object.presentationIndex !== undefined &&
      object.presentationIndex !== null
        ? APIV1SlideIndex.fromPartial(object.presentationIndex)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_ChordChart(): APIV1PresentationResponse_ChordChart {
  return { chordChart: new Uint8Array(0) };
}

export const APIV1PresentationResponse_ChordChart = {
  encode(
    message: APIV1PresentationResponse_ChordChart,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.chordChart.length !== 0) {
      writer.uint32(10).bytes(message.chordChart);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_ChordChart {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_ChordChart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chordChart = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationResponse_ChordChart {
    return {
      chordChart: isSet(object.chordChart)
        ? bytesFromBase64(object.chordChart)
        : new Uint8Array(0),
    };
  },

  toJSON(message: APIV1PresentationResponse_ChordChart): unknown {
    const obj: any = {};
    if (message.chordChart.length !== 0) {
      obj.chordChart = base64FromBytes(message.chordChart);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_ChordChart>, I>>(
    base?: I,
  ): APIV1PresentationResponse_ChordChart {
    return APIV1PresentationResponse_ChordChart.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_ChordChart>, I>,
  >(object: I): APIV1PresentationResponse_ChordChart {
    const message = createBaseAPIV1PresentationResponse_ChordChart();
    message.chordChart = object.chordChart ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAPIV1PresentationResponse_ChordChartUpdates(): APIV1PresentationResponse_ChordChartUpdates {
  return {};
}

export const APIV1PresentationResponse_ChordChartUpdates = {
  encode(
    _: APIV1PresentationResponse_ChordChartUpdates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_ChordChartUpdates {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_ChordChartUpdates();
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

  fromJSON(_: any): APIV1PresentationResponse_ChordChartUpdates {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_ChordChartUpdates): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ChordChartUpdates>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_ChordChartUpdates {
    return APIV1PresentationResponse_ChordChartUpdates.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ChordChartUpdates>,
      I
    >,
  >(_: I): APIV1PresentationResponse_ChordChartUpdates {
    const message = createBaseAPIV1PresentationResponse_ChordChartUpdates();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_Presentation(): APIV1PresentationResponse_Presentation {
  return { presentation: undefined };
}

export const APIV1PresentationResponse_Presentation = {
  encode(
    message: APIV1PresentationResponse_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      APIV1Presentation.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.presentation = APIV1Presentation.decode(
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

  fromJSON(object: any): APIV1PresentationResponse_Presentation {
    return {
      presentation: isSet(object.presentation)
        ? APIV1Presentation.fromJSON(object.presentation)
        : undefined,
    };
  },

  toJSON(message: APIV1PresentationResponse_Presentation): unknown {
    const obj: any = {};
    if (message.presentation !== undefined) {
      obj.presentation = APIV1Presentation.toJSON(message.presentation);
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationResponse_Presentation>, I>,
  >(base?: I): APIV1PresentationResponse_Presentation {
    return APIV1PresentationResponse_Presentation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_Presentation>, I>,
  >(object: I): APIV1PresentationResponse_Presentation {
    const message = createBaseAPIV1PresentationResponse_Presentation();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? APIV1Presentation.fromPartial(object.presentation)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_DeletePresentation(): APIV1PresentationResponse_DeletePresentation {
  return {};
}

export const APIV1PresentationResponse_DeletePresentation = {
  encode(
    _: APIV1PresentationResponse_DeletePresentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_DeletePresentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_DeletePresentation();
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

  fromJSON(_: any): APIV1PresentationResponse_DeletePresentation {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_DeletePresentation): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_DeletePresentation>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_DeletePresentation {
    return APIV1PresentationResponse_DeletePresentation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_DeletePresentation>,
      I
    >,
  >(_: I): APIV1PresentationResponse_DeletePresentation {
    const message = createBaseAPIV1PresentationResponse_DeletePresentation();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_TriggerPresentation(): APIV1PresentationResponse_TriggerPresentation {
  return {};
}

export const APIV1PresentationResponse_TriggerPresentation = {
  encode(
    _: APIV1PresentationResponse_TriggerPresentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_TriggerPresentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_TriggerPresentation();
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

  fromJSON(_: any): APIV1PresentationResponse_TriggerPresentation {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_TriggerPresentation): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_TriggerPresentation>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_TriggerPresentation {
    return APIV1PresentationResponse_TriggerPresentation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_TriggerPresentation>,
      I
    >,
  >(_: I): APIV1PresentationResponse_TriggerPresentation {
    const message = createBaseAPIV1PresentationResponse_TriggerPresentation();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_TriggerCue(): APIV1PresentationResponse_TriggerCue {
  return {};
}

export const APIV1PresentationResponse_TriggerCue = {
  encode(
    _: APIV1PresentationResponse_TriggerCue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_TriggerCue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_TriggerCue();
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

  fromJSON(_: any): APIV1PresentationResponse_TriggerCue {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_TriggerCue): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_TriggerCue>, I>>(
    base?: I,
  ): APIV1PresentationResponse_TriggerCue {
    return APIV1PresentationResponse_TriggerCue.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_TriggerCue>, I>,
  >(_: I): APIV1PresentationResponse_TriggerCue {
    const message = createBaseAPIV1PresentationResponse_TriggerCue();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_TimelineOperation(): APIV1PresentationResponse_TimelineOperation {
  return {};
}

export const APIV1PresentationResponse_TimelineOperation = {
  encode(
    _: APIV1PresentationResponse_TimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_TimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_TimelineOperation();
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

  fromJSON(_: any): APIV1PresentationResponse_TimelineOperation {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_TimelineOperation): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_TimelineOperation>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_TimelineOperation {
    return APIV1PresentationResponse_TimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_TimelineOperation>,
      I
    >,
  >(_: I): APIV1PresentationResponse_TimelineOperation {
    const message = createBaseAPIV1PresentationResponse_TimelineOperation();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_ActivePresentationTimelineOperation(): APIV1PresentationResponse_ActivePresentationTimelineOperation {
  return {};
}

export const APIV1PresentationResponse_ActivePresentationTimelineOperation = {
  encode(
    _: APIV1PresentationResponse_ActivePresentationTimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_ActivePresentationTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationResponse_ActivePresentationTimelineOperation();
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

  fromJSON(
    _: any,
  ): APIV1PresentationResponse_ActivePresentationTimelineOperation {
    return {};
  },

  toJSON(
    _: APIV1PresentationResponse_ActivePresentationTimelineOperation,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ActivePresentationTimelineOperation>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_ActivePresentationTimelineOperation {
    return APIV1PresentationResponse_ActivePresentationTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ActivePresentationTimelineOperation>,
      I
    >,
  >(_: I): APIV1PresentationResponse_ActivePresentationTimelineOperation {
    const message =
      createBaseAPIV1PresentationResponse_ActivePresentationTimelineOperation();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_FocusedPresentationTimelineOperation(): APIV1PresentationResponse_FocusedPresentationTimelineOperation {
  return {};
}

export const APIV1PresentationResponse_FocusedPresentationTimelineOperation = {
  encode(
    _: APIV1PresentationResponse_FocusedPresentationTimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_FocusedPresentationTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationResponse_FocusedPresentationTimelineOperation();
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

  fromJSON(
    _: any,
  ): APIV1PresentationResponse_FocusedPresentationTimelineOperation {
    return {};
  },

  toJSON(
    _: APIV1PresentationResponse_FocusedPresentationTimelineOperation,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_FocusedPresentationTimelineOperation>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_FocusedPresentationTimelineOperation {
    return APIV1PresentationResponse_FocusedPresentationTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_FocusedPresentationTimelineOperation>,
      I
    >,
  >(_: I): APIV1PresentationResponse_FocusedPresentationTimelineOperation {
    const message =
      createBaseAPIV1PresentationResponse_FocusedPresentationTimelineOperation();
    return message;
  },
};

function createBaseAPIV1PresentationResponse_ActivePresentationTimelineStatus(): APIV1PresentationResponse_ActivePresentationTimelineStatus {
  return { isRunning: false, currentTime: 0 };
}

export const APIV1PresentationResponse_ActivePresentationTimelineStatus = {
  encode(
    message: APIV1PresentationResponse_ActivePresentationTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isRunning === true) {
      writer.uint32(8).bool(message.isRunning);
    }
    if (message.currentTime !== 0) {
      writer.uint32(17).double(message.currentTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_ActivePresentationTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationResponse_ActivePresentationTimelineStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRunning = reader.bool();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.currentTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): APIV1PresentationResponse_ActivePresentationTimelineStatus {
    return {
      isRunning: isSet(object.isRunning)
        ? globalThis.Boolean(object.isRunning)
        : false,
      currentTime: isSet(object.currentTime)
        ? globalThis.Number(object.currentTime)
        : 0,
    };
  },

  toJSON(
    message: APIV1PresentationResponse_ActivePresentationTimelineStatus,
  ): unknown {
    const obj: any = {};
    if (message.isRunning === true) {
      obj.isRunning = message.isRunning;
    }
    if (message.currentTime !== 0) {
      obj.currentTime = message.currentTime;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ActivePresentationTimelineStatus>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_ActivePresentationTimelineStatus {
    return APIV1PresentationResponse_ActivePresentationTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_ActivePresentationTimelineStatus>,
      I
    >,
  >(object: I): APIV1PresentationResponse_ActivePresentationTimelineStatus {
    const message =
      createBaseAPIV1PresentationResponse_ActivePresentationTimelineStatus();
    message.isRunning = object.isRunning ?? false;
    message.currentTime = object.currentTime ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_FocusedPresentationTimelineStatus(): APIV1PresentationResponse_FocusedPresentationTimelineStatus {
  return { isRunning: false, currentTime: 0 };
}

export const APIV1PresentationResponse_FocusedPresentationTimelineStatus = {
  encode(
    message: APIV1PresentationResponse_FocusedPresentationTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isRunning === true) {
      writer.uint32(8).bool(message.isRunning);
    }
    if (message.currentTime !== 0) {
      writer.uint32(17).double(message.currentTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_FocusedPresentationTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1PresentationResponse_FocusedPresentationTimelineStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRunning = reader.bool();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.currentTime = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): APIV1PresentationResponse_FocusedPresentationTimelineStatus {
    return {
      isRunning: isSet(object.isRunning)
        ? globalThis.Boolean(object.isRunning)
        : false,
      currentTime: isSet(object.currentTime)
        ? globalThis.Number(object.currentTime)
        : 0,
    };
  },

  toJSON(
    message: APIV1PresentationResponse_FocusedPresentationTimelineStatus,
  ): unknown {
    const obj: any = {};
    if (message.isRunning === true) {
      obj.isRunning = message.isRunning;
    }
    if (message.currentTime !== 0) {
      obj.currentTime = message.currentTime;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_FocusedPresentationTimelineStatus>,
      I
    >,
  >(base?: I): APIV1PresentationResponse_FocusedPresentationTimelineStatus {
    return APIV1PresentationResponse_FocusedPresentationTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1PresentationResponse_FocusedPresentationTimelineStatus>,
      I
    >,
  >(object: I): APIV1PresentationResponse_FocusedPresentationTimelineStatus {
    const message =
      createBaseAPIV1PresentationResponse_FocusedPresentationTimelineStatus();
    message.isRunning = object.isRunning ?? false;
    message.currentTime = object.currentTime ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_Thumbnail(): APIV1PresentationResponse_Thumbnail {
  return { data: new Uint8Array(0), contentType: 0 };
}

export const APIV1PresentationResponse_Thumbnail = {
  encode(
    message: APIV1PresentationResponse_Thumbnail,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.contentType !== 0) {
      writer.uint32(16).int32(message.contentType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_Thumbnail {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_Thumbnail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationResponse_Thumbnail {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(0),
      contentType: isSet(object.contentType)
        ? aPIV1ContentTypeFromJSON(object.contentType)
        : 0,
    };
  },

  toJSON(message: APIV1PresentationResponse_Thumbnail): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.contentType !== 0) {
      obj.contentType = aPIV1ContentTypeToJSON(message.contentType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_Thumbnail>, I>>(
    base?: I,
  ): APIV1PresentationResponse_Thumbnail {
    return APIV1PresentationResponse_Thumbnail.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_Thumbnail>, I>,
  >(object: I): APIV1PresentationResponse_Thumbnail {
    const message = createBaseAPIV1PresentationResponse_Thumbnail();
    message.data = object.data ?? new Uint8Array(0);
    message.contentType = object.contentType ?? 0;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_Focused(): APIV1PresentationResponse_Focused {
  return { id: undefined };
}

export const APIV1PresentationResponse_Focused = {
  encode(
    message: APIV1PresentationResponse_Focused,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_Focused {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_Focused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = APIV1Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1PresentationResponse_Focused {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: APIV1PresentationResponse_Focused): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1PresentationResponse_Focused>, I>>(
    base?: I,
  ): APIV1PresentationResponse_Focused {
    return APIV1PresentationResponse_Focused.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_Focused>, I>,
  >(object: I): APIV1PresentationResponse_Focused {
    const message = createBaseAPIV1PresentationResponse_Focused();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseAPIV1PresentationResponse_EmptyMessage(): APIV1PresentationResponse_EmptyMessage {
  return {};
}

export const APIV1PresentationResponse_EmptyMessage = {
  encode(
    _: APIV1PresentationResponse_EmptyMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1PresentationResponse_EmptyMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1PresentationResponse_EmptyMessage();
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

  fromJSON(_: any): APIV1PresentationResponse_EmptyMessage {
    return {};
  },

  toJSON(_: APIV1PresentationResponse_EmptyMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1PresentationResponse_EmptyMessage>, I>,
  >(base?: I): APIV1PresentationResponse_EmptyMessage {
    return APIV1PresentationResponse_EmptyMessage.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1PresentationResponse_EmptyMessage>, I>,
  >(_: I): APIV1PresentationResponse_EmptyMessage {
    const message = createBaseAPIV1PresentationResponse_EmptyMessage();
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
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
  if (globalThis.Buffer) {
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
