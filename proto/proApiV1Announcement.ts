/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Presentation, APIV1SlideIndex } from './proApiV1Presentation';
import {
  APIV1TimelineOperation,
  aPIV1TimelineOperationFromJSON,
  aPIV1TimelineOperationToJSON,
} from './proApiV1TimelineOperation';

export const protobufPackage = 'rv.data';

export interface APIV1AnnouncementRequest {
  activeTimelineOperation?:
    | APIV1AnnouncementRequest_ActiveTimelineOperation
    | undefined;
  activeTimelineStatus?:
    | APIV1AnnouncementRequest_ActiveTimelineStatus
    | undefined;
  active?: APIV1AnnouncementRequest_Active | undefined;
  slideIndex?: APIV1AnnouncementRequest_AnnouncementIndex | undefined;
  activeFocus?: APIV1AnnouncementRequest_ActiveFocus | undefined;
  activeTrigger?: APIV1AnnouncementRequest_ActiveTrigger | undefined;
  activeNextTrigger?: APIV1AnnouncementRequest_ActiveNextTrigger | undefined;
  activePreviousTrigger?:
    | APIV1AnnouncementRequest_ActivePreviousTrigger
    | undefined;
  activeIndexTrigger?: APIV1AnnouncementRequest_ActiveIndexTrigger | undefined;
}

export interface APIV1AnnouncementRequest_ActiveTimelineOperation {
  operation: APIV1TimelineOperation;
}

export interface APIV1AnnouncementRequest_ActiveTimelineStatus {}

export interface APIV1AnnouncementRequest_Active {}

export interface APIV1AnnouncementRequest_AnnouncementIndex {}

export interface APIV1AnnouncementRequest_ActiveFocus {}

export interface APIV1AnnouncementRequest_ActiveTrigger {}

export interface APIV1AnnouncementRequest_ActiveNextTrigger {}

export interface APIV1AnnouncementRequest_ActivePreviousTrigger {}

export interface APIV1AnnouncementRequest_ActiveIndexTrigger {
  index: number;
}

export interface APIV1AnnouncementResponse {
  activeTimelineOperation?:
    | APIV1AnnouncementResponse_ActiveTimelineOperation
    | undefined;
  activeTimelineStatus?:
    | APIV1AnnouncementResponse_ActiveTimelineStatus
    | undefined;
  active?: APIV1AnnouncementResponse_Active | undefined;
  slideIndex?: APIV1AnnouncementResponse_SlideIndex | undefined;
  activeFocus?: APIV1AnnouncementResponse_ActiveFocus | undefined;
  activeTrigger?: APIV1AnnouncementResponse_ActiveTrigger | undefined;
  activeNextTrigger?: APIV1AnnouncementResponse_ActiveNextTrigger | undefined;
  activePreviousTrigger?:
    | APIV1AnnouncementResponse_ActivePreviousTrigger
    | undefined;
  activeIndexTrigger?: APIV1AnnouncementResponse_ActiveIndexTrigger | undefined;
}

export interface APIV1AnnouncementResponse_ActiveTimelineOperation {}

export interface APIV1AnnouncementResponse_ActiveTimelineStatus {
  isRunning: boolean;
  currentTime: number;
}

export interface APIV1AnnouncementResponse_Active {
  announcement: APIV1Presentation | undefined;
}

export interface APIV1AnnouncementResponse_SlideIndex {
  announcementIndex: APIV1SlideIndex | undefined;
}

export interface APIV1AnnouncementResponse_ActiveFocus {}

export interface APIV1AnnouncementResponse_ActiveTrigger {}

export interface APIV1AnnouncementResponse_ActiveNextTrigger {}

export interface APIV1AnnouncementResponse_ActivePreviousTrigger {}

export interface APIV1AnnouncementResponse_ActiveIndexTrigger {}

function createBaseAPIV1AnnouncementRequest(): APIV1AnnouncementRequest {
  return {
    activeTimelineOperation: undefined,
    activeTimelineStatus: undefined,
    active: undefined,
    slideIndex: undefined,
    activeFocus: undefined,
    activeTrigger: undefined,
    activeNextTrigger: undefined,
    activePreviousTrigger: undefined,
    activeIndexTrigger: undefined,
  };
}

export const APIV1AnnouncementRequest = {
  encode(
    message: APIV1AnnouncementRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.activeTimelineOperation !== undefined) {
      APIV1AnnouncementRequest_ActiveTimelineOperation.encode(
        message.activeTimelineOperation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.activeTimelineStatus !== undefined) {
      APIV1AnnouncementRequest_ActiveTimelineStatus.encode(
        message.activeTimelineStatus,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1AnnouncementRequest_Active.encode(
        message.active,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.slideIndex !== undefined) {
      APIV1AnnouncementRequest_AnnouncementIndex.encode(
        message.slideIndex,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.activeFocus !== undefined) {
      APIV1AnnouncementRequest_ActiveFocus.encode(
        message.activeFocus,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.activeTrigger !== undefined) {
      APIV1AnnouncementRequest_ActiveTrigger.encode(
        message.activeTrigger,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.activeNextTrigger !== undefined) {
      APIV1AnnouncementRequest_ActiveNextTrigger.encode(
        message.activeNextTrigger,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.activePreviousTrigger !== undefined) {
      APIV1AnnouncementRequest_ActivePreviousTrigger.encode(
        message.activePreviousTrigger,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.activeIndexTrigger !== undefined) {
      APIV1AnnouncementRequest_ActiveIndexTrigger.encode(
        message.activeIndexTrigger,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activeTimelineOperation =
            APIV1AnnouncementRequest_ActiveTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activeTimelineStatus =
            APIV1AnnouncementRequest_ActiveTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.active = APIV1AnnouncementRequest_Active.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.slideIndex =
            APIV1AnnouncementRequest_AnnouncementIndex.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.activeFocus = APIV1AnnouncementRequest_ActiveFocus.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.activeTrigger = APIV1AnnouncementRequest_ActiveTrigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.activeNextTrigger =
            APIV1AnnouncementRequest_ActiveNextTrigger.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.activePreviousTrigger =
            APIV1AnnouncementRequest_ActivePreviousTrigger.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activeIndexTrigger =
            APIV1AnnouncementRequest_ActiveIndexTrigger.decode(
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

  fromJSON(object: any): APIV1AnnouncementRequest {
    return {
      activeTimelineOperation: isSet(object.activeTimelineOperation)
        ? APIV1AnnouncementRequest_ActiveTimelineOperation.fromJSON(
            object.activeTimelineOperation,
          )
        : undefined,
      activeTimelineStatus: isSet(object.activeTimelineStatus)
        ? APIV1AnnouncementRequest_ActiveTimelineStatus.fromJSON(
            object.activeTimelineStatus,
          )
        : undefined,
      active: isSet(object.active)
        ? APIV1AnnouncementRequest_Active.fromJSON(object.active)
        : undefined,
      slideIndex: isSet(object.slideIndex)
        ? APIV1AnnouncementRequest_AnnouncementIndex.fromJSON(object.slideIndex)
        : undefined,
      activeFocus: isSet(object.activeFocus)
        ? APIV1AnnouncementRequest_ActiveFocus.fromJSON(object.activeFocus)
        : undefined,
      activeTrigger: isSet(object.activeTrigger)
        ? APIV1AnnouncementRequest_ActiveTrigger.fromJSON(object.activeTrigger)
        : undefined,
      activeNextTrigger: isSet(object.activeNextTrigger)
        ? APIV1AnnouncementRequest_ActiveNextTrigger.fromJSON(
            object.activeNextTrigger,
          )
        : undefined,
      activePreviousTrigger: isSet(object.activePreviousTrigger)
        ? APIV1AnnouncementRequest_ActivePreviousTrigger.fromJSON(
            object.activePreviousTrigger,
          )
        : undefined,
      activeIndexTrigger: isSet(object.activeIndexTrigger)
        ? APIV1AnnouncementRequest_ActiveIndexTrigger.fromJSON(
            object.activeIndexTrigger,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1AnnouncementRequest): unknown {
    const obj: any = {};
    if (message.activeTimelineOperation !== undefined) {
      obj.activeTimelineOperation =
        APIV1AnnouncementRequest_ActiveTimelineOperation.toJSON(
          message.activeTimelineOperation,
        );
    }
    if (message.activeTimelineStatus !== undefined) {
      obj.activeTimelineStatus =
        APIV1AnnouncementRequest_ActiveTimelineStatus.toJSON(
          message.activeTimelineStatus,
        );
    }
    if (message.active !== undefined) {
      obj.active = APIV1AnnouncementRequest_Active.toJSON(message.active);
    }
    if (message.slideIndex !== undefined) {
      obj.slideIndex = APIV1AnnouncementRequest_AnnouncementIndex.toJSON(
        message.slideIndex,
      );
    }
    if (message.activeFocus !== undefined) {
      obj.activeFocus = APIV1AnnouncementRequest_ActiveFocus.toJSON(
        message.activeFocus,
      );
    }
    if (message.activeTrigger !== undefined) {
      obj.activeTrigger = APIV1AnnouncementRequest_ActiveTrigger.toJSON(
        message.activeTrigger,
      );
    }
    if (message.activeNextTrigger !== undefined) {
      obj.activeNextTrigger = APIV1AnnouncementRequest_ActiveNextTrigger.toJSON(
        message.activeNextTrigger,
      );
    }
    if (message.activePreviousTrigger !== undefined) {
      obj.activePreviousTrigger =
        APIV1AnnouncementRequest_ActivePreviousTrigger.toJSON(
          message.activePreviousTrigger,
        );
    }
    if (message.activeIndexTrigger !== undefined) {
      obj.activeIndexTrigger =
        APIV1AnnouncementRequest_ActiveIndexTrigger.toJSON(
          message.activeIndexTrigger,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementRequest>, I>>(
    base?: I,
  ): APIV1AnnouncementRequest {
    return APIV1AnnouncementRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AnnouncementRequest>, I>>(
    object: I,
  ): APIV1AnnouncementRequest {
    const message = createBaseAPIV1AnnouncementRequest();
    message.activeTimelineOperation =
      object.activeTimelineOperation !== undefined &&
      object.activeTimelineOperation !== null
        ? APIV1AnnouncementRequest_ActiveTimelineOperation.fromPartial(
            object.activeTimelineOperation,
          )
        : undefined;
    message.activeTimelineStatus =
      object.activeTimelineStatus !== undefined &&
      object.activeTimelineStatus !== null
        ? APIV1AnnouncementRequest_ActiveTimelineStatus.fromPartial(
            object.activeTimelineStatus,
          )
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1AnnouncementRequest_Active.fromPartial(object.active)
        : undefined;
    message.slideIndex =
      object.slideIndex !== undefined && object.slideIndex !== null
        ? APIV1AnnouncementRequest_AnnouncementIndex.fromPartial(
            object.slideIndex,
          )
        : undefined;
    message.activeFocus =
      object.activeFocus !== undefined && object.activeFocus !== null
        ? APIV1AnnouncementRequest_ActiveFocus.fromPartial(object.activeFocus)
        : undefined;
    message.activeTrigger =
      object.activeTrigger !== undefined && object.activeTrigger !== null
        ? APIV1AnnouncementRequest_ActiveTrigger.fromPartial(
            object.activeTrigger,
          )
        : undefined;
    message.activeNextTrigger =
      object.activeNextTrigger !== undefined &&
      object.activeNextTrigger !== null
        ? APIV1AnnouncementRequest_ActiveNextTrigger.fromPartial(
            object.activeNextTrigger,
          )
        : undefined;
    message.activePreviousTrigger =
      object.activePreviousTrigger !== undefined &&
      object.activePreviousTrigger !== null
        ? APIV1AnnouncementRequest_ActivePreviousTrigger.fromPartial(
            object.activePreviousTrigger,
          )
        : undefined;
    message.activeIndexTrigger =
      object.activeIndexTrigger !== undefined &&
      object.activeIndexTrigger !== null
        ? APIV1AnnouncementRequest_ActiveIndexTrigger.fromPartial(
            object.activeIndexTrigger,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveTimelineOperation(): APIV1AnnouncementRequest_ActiveTimelineOperation {
  return { operation: 0 };
}

export const APIV1AnnouncementRequest_ActiveTimelineOperation = {
  encode(
    message: APIV1AnnouncementRequest_ActiveTimelineOperation,
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
  ): APIV1AnnouncementRequest_ActiveTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1AnnouncementRequest_ActiveTimelineOperation();
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

  fromJSON(object: any): APIV1AnnouncementRequest_ActiveTimelineOperation {
    return {
      operation: isSet(object.operation)
        ? aPIV1TimelineOperationFromJSON(object.operation)
        : 0,
    };
  },

  toJSON(message: APIV1AnnouncementRequest_ActiveTimelineOperation): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = aPIV1TimelineOperationToJSON(message.operation);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveTimelineOperation>,
      I
    >,
  >(base?: I): APIV1AnnouncementRequest_ActiveTimelineOperation {
    return APIV1AnnouncementRequest_ActiveTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveTimelineOperation>,
      I
    >,
  >(object: I): APIV1AnnouncementRequest_ActiveTimelineOperation {
    const message =
      createBaseAPIV1AnnouncementRequest_ActiveTimelineOperation();
    message.operation = object.operation ?? 0;
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveTimelineStatus(): APIV1AnnouncementRequest_ActiveTimelineStatus {
  return {};
}

export const APIV1AnnouncementRequest_ActiveTimelineStatus = {
  encode(
    _: APIV1AnnouncementRequest_ActiveTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActiveTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActiveTimelineStatus();
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

  fromJSON(_: any): APIV1AnnouncementRequest_ActiveTimelineStatus {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_ActiveTimelineStatus): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveTimelineStatus>,
      I
    >,
  >(base?: I): APIV1AnnouncementRequest_ActiveTimelineStatus {
    return APIV1AnnouncementRequest_ActiveTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveTimelineStatus>,
      I
    >,
  >(_: I): APIV1AnnouncementRequest_ActiveTimelineStatus {
    const message = createBaseAPIV1AnnouncementRequest_ActiveTimelineStatus();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_Active(): APIV1AnnouncementRequest_Active {
  return {};
}

export const APIV1AnnouncementRequest_Active = {
  encode(
    _: APIV1AnnouncementRequest_Active,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_Active {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_Active();
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

  fromJSON(_: any): APIV1AnnouncementRequest_Active {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_Active): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementRequest_Active>, I>>(
    base?: I,
  ): APIV1AnnouncementRequest_Active {
    return APIV1AnnouncementRequest_Active.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AnnouncementRequest_Active>, I>>(
    _: I,
  ): APIV1AnnouncementRequest_Active {
    const message = createBaseAPIV1AnnouncementRequest_Active();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_AnnouncementIndex(): APIV1AnnouncementRequest_AnnouncementIndex {
  return {};
}

export const APIV1AnnouncementRequest_AnnouncementIndex = {
  encode(
    _: APIV1AnnouncementRequest_AnnouncementIndex,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_AnnouncementIndex {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_AnnouncementIndex();
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

  fromJSON(_: any): APIV1AnnouncementRequest_AnnouncementIndex {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_AnnouncementIndex): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_AnnouncementIndex>, I>,
  >(base?: I): APIV1AnnouncementRequest_AnnouncementIndex {
    return APIV1AnnouncementRequest_AnnouncementIndex.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_AnnouncementIndex>, I>,
  >(_: I): APIV1AnnouncementRequest_AnnouncementIndex {
    const message = createBaseAPIV1AnnouncementRequest_AnnouncementIndex();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveFocus(): APIV1AnnouncementRequest_ActiveFocus {
  return {};
}

export const APIV1AnnouncementRequest_ActiveFocus = {
  encode(
    _: APIV1AnnouncementRequest_ActiveFocus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActiveFocus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActiveFocus();
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

  fromJSON(_: any): APIV1AnnouncementRequest_ActiveFocus {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_ActiveFocus): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveFocus>, I>>(
    base?: I,
  ): APIV1AnnouncementRequest_ActiveFocus {
    return APIV1AnnouncementRequest_ActiveFocus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveFocus>, I>,
  >(_: I): APIV1AnnouncementRequest_ActiveFocus {
    const message = createBaseAPIV1AnnouncementRequest_ActiveFocus();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveTrigger(): APIV1AnnouncementRequest_ActiveTrigger {
  return {};
}

export const APIV1AnnouncementRequest_ActiveTrigger = {
  encode(
    _: APIV1AnnouncementRequest_ActiveTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActiveTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActiveTrigger();
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

  fromJSON(_: any): APIV1AnnouncementRequest_ActiveTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_ActiveTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveTrigger>, I>,
  >(base?: I): APIV1AnnouncementRequest_ActiveTrigger {
    return APIV1AnnouncementRequest_ActiveTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveTrigger>, I>,
  >(_: I): APIV1AnnouncementRequest_ActiveTrigger {
    const message = createBaseAPIV1AnnouncementRequest_ActiveTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveNextTrigger(): APIV1AnnouncementRequest_ActiveNextTrigger {
  return {};
}

export const APIV1AnnouncementRequest_ActiveNextTrigger = {
  encode(
    _: APIV1AnnouncementRequest_ActiveNextTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActiveNextTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActiveNextTrigger();
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

  fromJSON(_: any): APIV1AnnouncementRequest_ActiveNextTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_ActiveNextTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveNextTrigger>, I>,
  >(base?: I): APIV1AnnouncementRequest_ActiveNextTrigger {
    return APIV1AnnouncementRequest_ActiveNextTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementRequest_ActiveNextTrigger>, I>,
  >(_: I): APIV1AnnouncementRequest_ActiveNextTrigger {
    const message = createBaseAPIV1AnnouncementRequest_ActiveNextTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActivePreviousTrigger(): APIV1AnnouncementRequest_ActivePreviousTrigger {
  return {};
}

export const APIV1AnnouncementRequest_ActivePreviousTrigger = {
  encode(
    _: APIV1AnnouncementRequest_ActivePreviousTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActivePreviousTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActivePreviousTrigger();
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

  fromJSON(_: any): APIV1AnnouncementRequest_ActivePreviousTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementRequest_ActivePreviousTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActivePreviousTrigger>,
      I
    >,
  >(base?: I): APIV1AnnouncementRequest_ActivePreviousTrigger {
    return APIV1AnnouncementRequest_ActivePreviousTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActivePreviousTrigger>,
      I
    >,
  >(_: I): APIV1AnnouncementRequest_ActivePreviousTrigger {
    const message = createBaseAPIV1AnnouncementRequest_ActivePreviousTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementRequest_ActiveIndexTrigger(): APIV1AnnouncementRequest_ActiveIndexTrigger {
  return { index: 0 };
}

export const APIV1AnnouncementRequest_ActiveIndexTrigger = {
  encode(
    message: APIV1AnnouncementRequest_ActiveIndexTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementRequest_ActiveIndexTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementRequest_ActiveIndexTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1AnnouncementRequest_ActiveIndexTrigger {
    return { index: isSet(object.index) ? globalThis.Number(object.index) : 0 };
  },

  toJSON(message: APIV1AnnouncementRequest_ActiveIndexTrigger): unknown {
    const obj: any = {};
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveIndexTrigger>,
      I
    >,
  >(base?: I): APIV1AnnouncementRequest_ActiveIndexTrigger {
    return APIV1AnnouncementRequest_ActiveIndexTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementRequest_ActiveIndexTrigger>,
      I
    >,
  >(object: I): APIV1AnnouncementRequest_ActiveIndexTrigger {
    const message = createBaseAPIV1AnnouncementRequest_ActiveIndexTrigger();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse(): APIV1AnnouncementResponse {
  return {
    activeTimelineOperation: undefined,
    activeTimelineStatus: undefined,
    active: undefined,
    slideIndex: undefined,
    activeFocus: undefined,
    activeTrigger: undefined,
    activeNextTrigger: undefined,
    activePreviousTrigger: undefined,
    activeIndexTrigger: undefined,
  };
}

export const APIV1AnnouncementResponse = {
  encode(
    message: APIV1AnnouncementResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.activeTimelineOperation !== undefined) {
      APIV1AnnouncementResponse_ActiveTimelineOperation.encode(
        message.activeTimelineOperation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.activeTimelineStatus !== undefined) {
      APIV1AnnouncementResponse_ActiveTimelineStatus.encode(
        message.activeTimelineStatus,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      APIV1AnnouncementResponse_Active.encode(
        message.active,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.slideIndex !== undefined) {
      APIV1AnnouncementResponse_SlideIndex.encode(
        message.slideIndex,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.activeFocus !== undefined) {
      APIV1AnnouncementResponse_ActiveFocus.encode(
        message.activeFocus,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.activeTrigger !== undefined) {
      APIV1AnnouncementResponse_ActiveTrigger.encode(
        message.activeTrigger,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.activeNextTrigger !== undefined) {
      APIV1AnnouncementResponse_ActiveNextTrigger.encode(
        message.activeNextTrigger,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.activePreviousTrigger !== undefined) {
      APIV1AnnouncementResponse_ActivePreviousTrigger.encode(
        message.activePreviousTrigger,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.activeIndexTrigger !== undefined) {
      APIV1AnnouncementResponse_ActiveIndexTrigger.encode(
        message.activeIndexTrigger,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.activeTimelineOperation =
            APIV1AnnouncementResponse_ActiveTimelineOperation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.activeTimelineStatus =
            APIV1AnnouncementResponse_ActiveTimelineStatus.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.active = APIV1AnnouncementResponse_Active.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.slideIndex = APIV1AnnouncementResponse_SlideIndex.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.activeFocus = APIV1AnnouncementResponse_ActiveFocus.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.activeTrigger =
            APIV1AnnouncementResponse_ActiveTrigger.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.activeNextTrigger =
            APIV1AnnouncementResponse_ActiveNextTrigger.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.activePreviousTrigger =
            APIV1AnnouncementResponse_ActivePreviousTrigger.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.activeIndexTrigger =
            APIV1AnnouncementResponse_ActiveIndexTrigger.decode(
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

  fromJSON(object: any): APIV1AnnouncementResponse {
    return {
      activeTimelineOperation: isSet(object.activeTimelineOperation)
        ? APIV1AnnouncementResponse_ActiveTimelineOperation.fromJSON(
            object.activeTimelineOperation,
          )
        : undefined,
      activeTimelineStatus: isSet(object.activeTimelineStatus)
        ? APIV1AnnouncementResponse_ActiveTimelineStatus.fromJSON(
            object.activeTimelineStatus,
          )
        : undefined,
      active: isSet(object.active)
        ? APIV1AnnouncementResponse_Active.fromJSON(object.active)
        : undefined,
      slideIndex: isSet(object.slideIndex)
        ? APIV1AnnouncementResponse_SlideIndex.fromJSON(object.slideIndex)
        : undefined,
      activeFocus: isSet(object.activeFocus)
        ? APIV1AnnouncementResponse_ActiveFocus.fromJSON(object.activeFocus)
        : undefined,
      activeTrigger: isSet(object.activeTrigger)
        ? APIV1AnnouncementResponse_ActiveTrigger.fromJSON(object.activeTrigger)
        : undefined,
      activeNextTrigger: isSet(object.activeNextTrigger)
        ? APIV1AnnouncementResponse_ActiveNextTrigger.fromJSON(
            object.activeNextTrigger,
          )
        : undefined,
      activePreviousTrigger: isSet(object.activePreviousTrigger)
        ? APIV1AnnouncementResponse_ActivePreviousTrigger.fromJSON(
            object.activePreviousTrigger,
          )
        : undefined,
      activeIndexTrigger: isSet(object.activeIndexTrigger)
        ? APIV1AnnouncementResponse_ActiveIndexTrigger.fromJSON(
            object.activeIndexTrigger,
          )
        : undefined,
    };
  },

  toJSON(message: APIV1AnnouncementResponse): unknown {
    const obj: any = {};
    if (message.activeTimelineOperation !== undefined) {
      obj.activeTimelineOperation =
        APIV1AnnouncementResponse_ActiveTimelineOperation.toJSON(
          message.activeTimelineOperation,
        );
    }
    if (message.activeTimelineStatus !== undefined) {
      obj.activeTimelineStatus =
        APIV1AnnouncementResponse_ActiveTimelineStatus.toJSON(
          message.activeTimelineStatus,
        );
    }
    if (message.active !== undefined) {
      obj.active = APIV1AnnouncementResponse_Active.toJSON(message.active);
    }
    if (message.slideIndex !== undefined) {
      obj.slideIndex = APIV1AnnouncementResponse_SlideIndex.toJSON(
        message.slideIndex,
      );
    }
    if (message.activeFocus !== undefined) {
      obj.activeFocus = APIV1AnnouncementResponse_ActiveFocus.toJSON(
        message.activeFocus,
      );
    }
    if (message.activeTrigger !== undefined) {
      obj.activeTrigger = APIV1AnnouncementResponse_ActiveTrigger.toJSON(
        message.activeTrigger,
      );
    }
    if (message.activeNextTrigger !== undefined) {
      obj.activeNextTrigger =
        APIV1AnnouncementResponse_ActiveNextTrigger.toJSON(
          message.activeNextTrigger,
        );
    }
    if (message.activePreviousTrigger !== undefined) {
      obj.activePreviousTrigger =
        APIV1AnnouncementResponse_ActivePreviousTrigger.toJSON(
          message.activePreviousTrigger,
        );
    }
    if (message.activeIndexTrigger !== undefined) {
      obj.activeIndexTrigger =
        APIV1AnnouncementResponse_ActiveIndexTrigger.toJSON(
          message.activeIndexTrigger,
        );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementResponse>, I>>(
    base?: I,
  ): APIV1AnnouncementResponse {
    return APIV1AnnouncementResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1AnnouncementResponse>, I>>(
    object: I,
  ): APIV1AnnouncementResponse {
    const message = createBaseAPIV1AnnouncementResponse();
    message.activeTimelineOperation =
      object.activeTimelineOperation !== undefined &&
      object.activeTimelineOperation !== null
        ? APIV1AnnouncementResponse_ActiveTimelineOperation.fromPartial(
            object.activeTimelineOperation,
          )
        : undefined;
    message.activeTimelineStatus =
      object.activeTimelineStatus !== undefined &&
      object.activeTimelineStatus !== null
        ? APIV1AnnouncementResponse_ActiveTimelineStatus.fromPartial(
            object.activeTimelineStatus,
          )
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? APIV1AnnouncementResponse_Active.fromPartial(object.active)
        : undefined;
    message.slideIndex =
      object.slideIndex !== undefined && object.slideIndex !== null
        ? APIV1AnnouncementResponse_SlideIndex.fromPartial(object.slideIndex)
        : undefined;
    message.activeFocus =
      object.activeFocus !== undefined && object.activeFocus !== null
        ? APIV1AnnouncementResponse_ActiveFocus.fromPartial(object.activeFocus)
        : undefined;
    message.activeTrigger =
      object.activeTrigger !== undefined && object.activeTrigger !== null
        ? APIV1AnnouncementResponse_ActiveTrigger.fromPartial(
            object.activeTrigger,
          )
        : undefined;
    message.activeNextTrigger =
      object.activeNextTrigger !== undefined &&
      object.activeNextTrigger !== null
        ? APIV1AnnouncementResponse_ActiveNextTrigger.fromPartial(
            object.activeNextTrigger,
          )
        : undefined;
    message.activePreviousTrigger =
      object.activePreviousTrigger !== undefined &&
      object.activePreviousTrigger !== null
        ? APIV1AnnouncementResponse_ActivePreviousTrigger.fromPartial(
            object.activePreviousTrigger,
          )
        : undefined;
    message.activeIndexTrigger =
      object.activeIndexTrigger !== undefined &&
      object.activeIndexTrigger !== null
        ? APIV1AnnouncementResponse_ActiveIndexTrigger.fromPartial(
            object.activeIndexTrigger,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveTimelineOperation(): APIV1AnnouncementResponse_ActiveTimelineOperation {
  return {};
}

export const APIV1AnnouncementResponse_ActiveTimelineOperation = {
  encode(
    _: APIV1AnnouncementResponse_ActiveTimelineOperation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActiveTimelineOperation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseAPIV1AnnouncementResponse_ActiveTimelineOperation();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActiveTimelineOperation {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActiveTimelineOperation): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveTimelineOperation>,
      I
    >,
  >(base?: I): APIV1AnnouncementResponse_ActiveTimelineOperation {
    return APIV1AnnouncementResponse_ActiveTimelineOperation.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveTimelineOperation>,
      I
    >,
  >(_: I): APIV1AnnouncementResponse_ActiveTimelineOperation {
    const message =
      createBaseAPIV1AnnouncementResponse_ActiveTimelineOperation();
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveTimelineStatus(): APIV1AnnouncementResponse_ActiveTimelineStatus {
  return { isRunning: false, currentTime: 0 };
}

export const APIV1AnnouncementResponse_ActiveTimelineStatus = {
  encode(
    message: APIV1AnnouncementResponse_ActiveTimelineStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isRunning !== false) {
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
  ): APIV1AnnouncementResponse_ActiveTimelineStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActiveTimelineStatus();
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

  fromJSON(object: any): APIV1AnnouncementResponse_ActiveTimelineStatus {
    return {
      isRunning: isSet(object.isRunning)
        ? globalThis.Boolean(object.isRunning)
        : false,
      currentTime: isSet(object.currentTime)
        ? globalThis.Number(object.currentTime)
        : 0,
    };
  },

  toJSON(message: APIV1AnnouncementResponse_ActiveTimelineStatus): unknown {
    const obj: any = {};
    if (message.isRunning !== false) {
      obj.isRunning = message.isRunning;
    }
    if (message.currentTime !== 0) {
      obj.currentTime = message.currentTime;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveTimelineStatus>,
      I
    >,
  >(base?: I): APIV1AnnouncementResponse_ActiveTimelineStatus {
    return APIV1AnnouncementResponse_ActiveTimelineStatus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveTimelineStatus>,
      I
    >,
  >(object: I): APIV1AnnouncementResponse_ActiveTimelineStatus {
    const message = createBaseAPIV1AnnouncementResponse_ActiveTimelineStatus();
    message.isRunning = object.isRunning ?? false;
    message.currentTime = object.currentTime ?? 0;
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_Active(): APIV1AnnouncementResponse_Active {
  return { announcement: undefined };
}

export const APIV1AnnouncementResponse_Active = {
  encode(
    message: APIV1AnnouncementResponse_Active,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.announcement !== undefined) {
      APIV1Presentation.encode(
        message.announcement,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_Active {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_Active();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.announcement = APIV1Presentation.decode(
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

  fromJSON(object: any): APIV1AnnouncementResponse_Active {
    return {
      announcement: isSet(object.announcement)
        ? APIV1Presentation.fromJSON(object.announcement)
        : undefined,
    };
  },

  toJSON(message: APIV1AnnouncementResponse_Active): unknown {
    const obj: any = {};
    if (message.announcement !== undefined) {
      obj.announcement = APIV1Presentation.toJSON(message.announcement);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementResponse_Active>, I>>(
    base?: I,
  ): APIV1AnnouncementResponse_Active {
    return APIV1AnnouncementResponse_Active.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_Active>, I>,
  >(object: I): APIV1AnnouncementResponse_Active {
    const message = createBaseAPIV1AnnouncementResponse_Active();
    message.announcement =
      object.announcement !== undefined && object.announcement !== null
        ? APIV1Presentation.fromPartial(object.announcement)
        : undefined;
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_SlideIndex(): APIV1AnnouncementResponse_SlideIndex {
  return { announcementIndex: undefined };
}

export const APIV1AnnouncementResponse_SlideIndex = {
  encode(
    message: APIV1AnnouncementResponse_SlideIndex,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.announcementIndex !== undefined) {
      APIV1SlideIndex.encode(
        message.announcementIndex,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_SlideIndex {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_SlideIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.announcementIndex = APIV1SlideIndex.decode(
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

  fromJSON(object: any): APIV1AnnouncementResponse_SlideIndex {
    return {
      announcementIndex: isSet(object.announcementIndex)
        ? APIV1SlideIndex.fromJSON(object.announcementIndex)
        : undefined,
    };
  },

  toJSON(message: APIV1AnnouncementResponse_SlideIndex): unknown {
    const obj: any = {};
    if (message.announcementIndex !== undefined) {
      obj.announcementIndex = APIV1SlideIndex.toJSON(message.announcementIndex);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1AnnouncementResponse_SlideIndex>, I>>(
    base?: I,
  ): APIV1AnnouncementResponse_SlideIndex {
    return APIV1AnnouncementResponse_SlideIndex.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_SlideIndex>, I>,
  >(object: I): APIV1AnnouncementResponse_SlideIndex {
    const message = createBaseAPIV1AnnouncementResponse_SlideIndex();
    message.announcementIndex =
      object.announcementIndex !== undefined &&
      object.announcementIndex !== null
        ? APIV1SlideIndex.fromPartial(object.announcementIndex)
        : undefined;
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveFocus(): APIV1AnnouncementResponse_ActiveFocus {
  return {};
}

export const APIV1AnnouncementResponse_ActiveFocus = {
  encode(
    _: APIV1AnnouncementResponse_ActiveFocus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActiveFocus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActiveFocus();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActiveFocus {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActiveFocus): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_ActiveFocus>, I>,
  >(base?: I): APIV1AnnouncementResponse_ActiveFocus {
    return APIV1AnnouncementResponse_ActiveFocus.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_ActiveFocus>, I>,
  >(_: I): APIV1AnnouncementResponse_ActiveFocus {
    const message = createBaseAPIV1AnnouncementResponse_ActiveFocus();
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveTrigger(): APIV1AnnouncementResponse_ActiveTrigger {
  return {};
}

export const APIV1AnnouncementResponse_ActiveTrigger = {
  encode(
    _: APIV1AnnouncementResponse_ActiveTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActiveTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActiveTrigger();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActiveTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActiveTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_ActiveTrigger>, I>,
  >(base?: I): APIV1AnnouncementResponse_ActiveTrigger {
    return APIV1AnnouncementResponse_ActiveTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1AnnouncementResponse_ActiveTrigger>, I>,
  >(_: I): APIV1AnnouncementResponse_ActiveTrigger {
    const message = createBaseAPIV1AnnouncementResponse_ActiveTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveNextTrigger(): APIV1AnnouncementResponse_ActiveNextTrigger {
  return {};
}

export const APIV1AnnouncementResponse_ActiveNextTrigger = {
  encode(
    _: APIV1AnnouncementResponse_ActiveNextTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActiveNextTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActiveNextTrigger();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActiveNextTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActiveNextTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveNextTrigger>,
      I
    >,
  >(base?: I): APIV1AnnouncementResponse_ActiveNextTrigger {
    return APIV1AnnouncementResponse_ActiveNextTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveNextTrigger>,
      I
    >,
  >(_: I): APIV1AnnouncementResponse_ActiveNextTrigger {
    const message = createBaseAPIV1AnnouncementResponse_ActiveNextTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActivePreviousTrigger(): APIV1AnnouncementResponse_ActivePreviousTrigger {
  return {};
}

export const APIV1AnnouncementResponse_ActivePreviousTrigger = {
  encode(
    _: APIV1AnnouncementResponse_ActivePreviousTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActivePreviousTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActivePreviousTrigger();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActivePreviousTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActivePreviousTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActivePreviousTrigger>,
      I
    >,
  >(base?: I): APIV1AnnouncementResponse_ActivePreviousTrigger {
    return APIV1AnnouncementResponse_ActivePreviousTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActivePreviousTrigger>,
      I
    >,
  >(_: I): APIV1AnnouncementResponse_ActivePreviousTrigger {
    const message = createBaseAPIV1AnnouncementResponse_ActivePreviousTrigger();
    return message;
  },
};

function createBaseAPIV1AnnouncementResponse_ActiveIndexTrigger(): APIV1AnnouncementResponse_ActiveIndexTrigger {
  return {};
}

export const APIV1AnnouncementResponse_ActiveIndexTrigger = {
  encode(
    _: APIV1AnnouncementResponse_ActiveIndexTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1AnnouncementResponse_ActiveIndexTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1AnnouncementResponse_ActiveIndexTrigger();
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

  fromJSON(_: any): APIV1AnnouncementResponse_ActiveIndexTrigger {
    return {};
  },

  toJSON(_: APIV1AnnouncementResponse_ActiveIndexTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveIndexTrigger>,
      I
    >,
  >(base?: I): APIV1AnnouncementResponse_ActiveIndexTrigger {
    return APIV1AnnouncementResponse_ActiveIndexTrigger.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1AnnouncementResponse_ActiveIndexTrigger>,
      I
    >,
  >(_: I): APIV1AnnouncementResponse_ActiveIndexTrigger {
    const message = createBaseAPIV1AnnouncementResponse_ActiveIndexTrigger();
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
