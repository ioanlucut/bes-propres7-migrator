/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { APIV1Identifier } from './proApiV1Identifier';
import {
  APIV1Timer_APIV1TimerCountdown,
  APIV1Timer_APIV1TimerCountdownToTime,
  APIV1Timer_APIV1TimerElapsed,
  APIV1TimerFormat,
} from './proApiV1Timer';

export const protobufPackage = 'rv.data';

export interface APIV1Message {
  id: APIV1Identifier | undefined;
  message: string;
  tokens: APIV1Message_APIV1MessageToken[];
  theme: APIV1Identifier | undefined;
  visibleOnNetwork: boolean;
}

export interface APIV1Message_APIV1MessageToken {
  name: string;
  text?: APIV1Message_APIV1MessageToken_APIV1TextToken | undefined;
  timer?: APIV1Message_APIV1MessageToken_APIV1TimerToken | undefined;
  clock?: APIV1Message_APIV1MessageToken_APIV1ClockToken | undefined;
}

export interface APIV1Message_APIV1MessageToken_APIV1TextToken {
  text: string;
}

export interface APIV1Message_APIV1MessageToken_APIV1TimerToken {
  id: APIV1Identifier | undefined;
  allowsOverrun: boolean;
  format: APIV1TimerFormat | undefined;
  countdown?: APIV1Timer_APIV1TimerCountdown | undefined;
  countDownToTime?: APIV1Timer_APIV1TimerCountdownToTime | undefined;
  elapsed?: APIV1Timer_APIV1TimerElapsed | undefined;
}

export interface APIV1Message_APIV1MessageToken_APIV1ClockToken {
  date: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat;
  time: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat;
  is24Hours: boolean;
}

export enum APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat {
  none = 0,
  short = 1,
  medium = 2,
  long = 3,
  full = 4,
  UNRECOGNIZED = -1,
}

export function aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(
  object: any,
): APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat {
  switch (object) {
    case 0:
    case 'none':
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.none;
    case 1:
    case 'short':
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.short;
    case 2:
    case 'medium':
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.medium;
    case 3:
    case 'long':
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.long;
    case 4:
    case 'full':
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.full;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.UNRECOGNIZED;
  }
}

export function aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(
  object: APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat,
): string {
  switch (object) {
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.none:
      return 'none';
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.short:
      return 'short';
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.medium:
      return 'medium';
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.long:
      return 'long';
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.full:
      return 'full';
    case APIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormat.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface APIV1MessageRequest {
  messages?: APIV1MessageRequest_Messages | undefined;
  createMessage?: APIV1MessageRequest_CreateMessage | undefined;
  getMessage?: APIV1MessageRequest_GetMessage | undefined;
  putMessage?: APIV1MessageRequest_PutMessage | undefined;
  deleteMessage?: APIV1MessageRequest_DeleteMessage | undefined;
  triggerMessage?: APIV1MessageRequest_TriggerMessage | undefined;
  clearMessage?: APIV1MessageRequest_ClearMessage | undefined;
}

export interface APIV1MessageRequest_Messages {}

export interface APIV1MessageRequest_CreateMessage {
  message: APIV1Message | undefined;
}

export interface APIV1MessageRequest_GetMessage {
  id: string;
}

export interface APIV1MessageRequest_PutMessage {
  id: string;
  message: APIV1Message | undefined;
}

export interface APIV1MessageRequest_DeleteMessage {
  id: string;
}

export interface APIV1MessageRequest_TriggerMessage {
  id: string;
  tokens: APIV1Message_APIV1MessageToken[];
}

export interface APIV1MessageRequest_ClearMessage {
  id: string;
}

export interface APIV1MessageResponse {
  messages?: APIV1MessageResponse_Messages | undefined;
  createMessage?: APIV1MessageResponse_CreateMessage | undefined;
  getMessage?: APIV1MessageResponse_GetMessage | undefined;
  putMessage?: APIV1MessageResponse_PutMessage | undefined;
  deleteMessage?: APIV1MessageResponse_DeleteMessage | undefined;
  triggerMessage?: APIV1MessageResponse_TriggerMessage | undefined;
  clearMessage?: APIV1MessageResponse_ClearMessage | undefined;
}

export interface APIV1MessageResponse_Messages {
  messages: APIV1Message[];
}

export interface APIV1MessageResponse_CreateMessage {
  message: APIV1Message | undefined;
}

export interface APIV1MessageResponse_GetMessage {
  message: APIV1Message | undefined;
}

export interface APIV1MessageResponse_PutMessage {
  message: APIV1Message | undefined;
}

export interface APIV1MessageResponse_DeleteMessage {}

export interface APIV1MessageResponse_TriggerMessage {}

export interface APIV1MessageResponse_ClearMessage {}

function createBaseAPIV1Message(): APIV1Message {
  return {
    id: undefined,
    message: '',
    tokens: [],
    theme: undefined,
    visibleOnNetwork: false,
  };
}

export const APIV1Message = {
  encode(
    message: APIV1Message,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    for (const v of message.tokens) {
      APIV1Message_APIV1MessageToken.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.theme !== undefined) {
      APIV1Identifier.encode(message.theme, writer.uint32(34).fork()).ldelim();
    }
    if (message.visibleOnNetwork !== false) {
      writer.uint32(40).bool(message.visibleOnNetwork);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1Message {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message();
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

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokens.push(
            APIV1Message_APIV1MessageToken.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.theme = APIV1Identifier.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.visibleOnNetwork = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Message {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : '',
      tokens: globalThis.Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) =>
            APIV1Message_APIV1MessageToken.fromJSON(e),
          )
        : [],
      theme: isSet(object.theme)
        ? APIV1Identifier.fromJSON(object.theme)
        : undefined,
      visibleOnNetwork: isSet(object.visibleOnNetwork)
        ? globalThis.Boolean(object.visibleOnNetwork)
        : false,
    };
  },

  toJSON(message: APIV1Message): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.message !== '') {
      obj.message = message.message;
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) =>
        APIV1Message_APIV1MessageToken.toJSON(e),
      );
    }
    if (message.theme !== undefined) {
      obj.theme = APIV1Identifier.toJSON(message.theme);
    }
    if (message.visibleOnNetwork !== false) {
      obj.visibleOnNetwork = message.visibleOnNetwork;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Message>, I>>(
    base?: I,
  ): APIV1Message {
    return APIV1Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Message>, I>>(
    object: I,
  ): APIV1Message {
    const message = createBaseAPIV1Message();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.message = object.message ?? '';
    message.tokens =
      object.tokens?.map((e) =>
        APIV1Message_APIV1MessageToken.fromPartial(e),
      ) || [];
    message.theme =
      object.theme !== undefined && object.theme !== null
        ? APIV1Identifier.fromPartial(object.theme)
        : undefined;
    message.visibleOnNetwork = object.visibleOnNetwork ?? false;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken(): APIV1Message_APIV1MessageToken {
  return { name: '', text: undefined, timer: undefined, clock: undefined };
}

export const APIV1Message_APIV1MessageToken = {
  encode(
    message: APIV1Message_APIV1MessageToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.text !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1TextToken.encode(
        message.text,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timer !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1TimerToken.encode(
        message.timer,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.clock !== undefined) {
      APIV1Message_APIV1MessageToken_APIV1ClockToken.encode(
        message.clock,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Message_APIV1MessageToken {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken();
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

          message.text = APIV1Message_APIV1MessageToken_APIV1TextToken.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timer = APIV1Message_APIV1MessageToken_APIV1TimerToken.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clock = APIV1Message_APIV1MessageToken_APIV1ClockToken.decode(
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

  fromJSON(object: any): APIV1Message_APIV1MessageToken {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      text: isSet(object.text)
        ? APIV1Message_APIV1MessageToken_APIV1TextToken.fromJSON(object.text)
        : undefined,
      timer: isSet(object.timer)
        ? APIV1Message_APIV1MessageToken_APIV1TimerToken.fromJSON(object.timer)
        : undefined,
      clock: isSet(object.clock)
        ? APIV1Message_APIV1MessageToken_APIV1ClockToken.fromJSON(object.clock)
        : undefined,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.text !== undefined) {
      obj.text = APIV1Message_APIV1MessageToken_APIV1TextToken.toJSON(
        message.text,
      );
    }
    if (message.timer !== undefined) {
      obj.timer = APIV1Message_APIV1MessageToken_APIV1TimerToken.toJSON(
        message.timer,
      );
    }
    if (message.clock !== undefined) {
      obj.clock = APIV1Message_APIV1MessageToken_APIV1ClockToken.toJSON(
        message.clock,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken>, I>>(
    base?: I,
  ): APIV1Message_APIV1MessageToken {
    return APIV1Message_APIV1MessageToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1Message_APIV1MessageToken>, I>>(
    object: I,
  ): APIV1Message_APIV1MessageToken {
    const message = createBaseAPIV1Message_APIV1MessageToken();
    message.name = object.name ?? '';
    message.text =
      object.text !== undefined && object.text !== null
        ? APIV1Message_APIV1MessageToken_APIV1TextToken.fromPartial(object.text)
        : undefined;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? APIV1Message_APIV1MessageToken_APIV1TimerToken.fromPartial(
            object.timer,
          )
        : undefined;
    message.clock =
      object.clock !== undefined && object.clock !== null
        ? APIV1Message_APIV1MessageToken_APIV1ClockToken.fromPartial(
            object.clock,
          )
        : undefined;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken(): APIV1Message_APIV1MessageToken_APIV1TextToken {
  return { text: '' };
}

export const APIV1Message_APIV1MessageToken_APIV1TextToken = {
  encode(
    message: APIV1Message_APIV1MessageToken_APIV1TextToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.text !== '') {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Message_APIV1MessageToken_APIV1TextToken {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1TextToken {
    return { text: isSet(object.text) ? globalThis.String(object.text) : '' };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1TextToken): unknown {
    const obj: any = {};
    if (message.text !== '') {
      obj.text = message.text;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1TextToken>,
      I
    >,
  >(base?: I): APIV1Message_APIV1MessageToken_APIV1TextToken {
    return APIV1Message_APIV1MessageToken_APIV1TextToken.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1TextToken>,
      I
    >,
  >(object: I): APIV1Message_APIV1MessageToken_APIV1TextToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TextToken();
    message.text = object.text ?? '';
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken(): APIV1Message_APIV1MessageToken_APIV1TimerToken {
  return {
    id: undefined,
    allowsOverrun: false,
    format: undefined,
    countdown: undefined,
    countDownToTime: undefined,
    elapsed: undefined,
  };
}

export const APIV1Message_APIV1MessageToken_APIV1TimerToken = {
  encode(
    message: APIV1Message_APIV1MessageToken_APIV1TimerToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== undefined) {
      APIV1Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.allowsOverrun !== false) {
      writer.uint32(16).bool(message.allowsOverrun);
    }
    if (message.format !== undefined) {
      APIV1TimerFormat.encode(
        message.format,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.countdown !== undefined) {
      APIV1Timer_APIV1TimerCountdown.encode(
        message.countdown,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.countDownToTime !== undefined) {
      APIV1Timer_APIV1TimerCountdownToTime.encode(
        message.countDownToTime,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.elapsed !== undefined) {
      APIV1Timer_APIV1TimerElapsed.encode(
        message.elapsed,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken();
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
          if (tag !== 16) {
            break;
          }

          message.allowsOverrun = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.format = APIV1TimerFormat.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.countdown = APIV1Timer_APIV1TimerCountdown.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.elapsed = APIV1Timer_APIV1TimerElapsed.decode(
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

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    return {
      id: isSet(object.id) ? APIV1Identifier.fromJSON(object.id) : undefined,
      allowsOverrun: isSet(object.allowsOverrun)
        ? globalThis.Boolean(object.allowsOverrun)
        : false,
      format: isSet(object.format)
        ? APIV1TimerFormat.fromJSON(object.format)
        : undefined,
      countdown: isSet(object.countdown)
        ? APIV1Timer_APIV1TimerCountdown.fromJSON(object.countdown)
        : undefined,
      countDownToTime: isSet(object.countDownToTime)
        ? APIV1Timer_APIV1TimerCountdownToTime.fromJSON(object.countDownToTime)
        : undefined,
      elapsed: isSet(object.elapsed)
        ? APIV1Timer_APIV1TimerElapsed.fromJSON(object.elapsed)
        : undefined,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1TimerToken): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = APIV1Identifier.toJSON(message.id);
    }
    if (message.allowsOverrun !== false) {
      obj.allowsOverrun = message.allowsOverrun;
    }
    if (message.format !== undefined) {
      obj.format = APIV1TimerFormat.toJSON(message.format);
    }
    if (message.countdown !== undefined) {
      obj.countdown = APIV1Timer_APIV1TimerCountdown.toJSON(message.countdown);
    }
    if (message.countDownToTime !== undefined) {
      obj.countDownToTime = APIV1Timer_APIV1TimerCountdownToTime.toJSON(
        message.countDownToTime,
      );
    }
    if (message.elapsed !== undefined) {
      obj.elapsed = APIV1Timer_APIV1TimerElapsed.toJSON(message.elapsed);
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1TimerToken>,
      I
    >,
  >(base?: I): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    return APIV1Message_APIV1MessageToken_APIV1TimerToken.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1TimerToken>,
      I
    >,
  >(object: I): APIV1Message_APIV1MessageToken_APIV1TimerToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1TimerToken();
    message.id =
      object.id !== undefined && object.id !== null
        ? APIV1Identifier.fromPartial(object.id)
        : undefined;
    message.allowsOverrun = object.allowsOverrun ?? false;
    message.format =
      object.format !== undefined && object.format !== null
        ? APIV1TimerFormat.fromPartial(object.format)
        : undefined;
    message.countdown =
      object.countdown !== undefined && object.countdown !== null
        ? APIV1Timer_APIV1TimerCountdown.fromPartial(object.countdown)
        : undefined;
    message.countDownToTime =
      object.countDownToTime !== undefined && object.countDownToTime !== null
        ? APIV1Timer_APIV1TimerCountdownToTime.fromPartial(
            object.countDownToTime,
          )
        : undefined;
    message.elapsed =
      object.elapsed !== undefined && object.elapsed !== null
        ? APIV1Timer_APIV1TimerElapsed.fromPartial(object.elapsed)
        : undefined;
    return message;
  },
};

function createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken(): APIV1Message_APIV1MessageToken_APIV1ClockToken {
  return { date: 0, time: 0, is24Hours: false };
}

export const APIV1Message_APIV1MessageToken_APIV1ClockToken = {
  encode(
    message: APIV1Message_APIV1MessageToken_APIV1ClockToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.date !== 0) {
      writer.uint32(8).int32(message.date);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.is24Hours !== false) {
      writer.uint32(24).bool(message.is24Hours);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.date = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.time = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.is24Hours = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    return {
      date: isSet(object.date)
        ? aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(
            object.date,
          )
        : 0,
      time: isSet(object.time)
        ? aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatFromJSON(
            object.time,
          )
        : 0,
      is24Hours: isSet(object.is24Hours)
        ? globalThis.Boolean(object.is24Hours)
        : false,
    };
  },

  toJSON(message: APIV1Message_APIV1MessageToken_APIV1ClockToken): unknown {
    const obj: any = {};
    if (message.date !== 0) {
      obj.date =
        aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(
          message.date,
        );
    }
    if (message.time !== 0) {
      obj.time =
        aPIV1Message_APIV1MessageToken_APIV1ClockToken_APIV1ClockTokenFormatToJSON(
          message.time,
        );
    }
    if (message.is24Hours !== false) {
      obj.is24Hours = message.is24Hours;
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1ClockToken>,
      I
    >,
  >(base?: I): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    return APIV1Message_APIV1MessageToken_APIV1ClockToken.fromPartial(
      base ?? ({} as any),
    );
  },
  fromPartial<
    I extends Exact<
      DeepPartial<APIV1Message_APIV1MessageToken_APIV1ClockToken>,
      I
    >,
  >(object: I): APIV1Message_APIV1MessageToken_APIV1ClockToken {
    const message = createBaseAPIV1Message_APIV1MessageToken_APIV1ClockToken();
    message.date = object.date ?? 0;
    message.time = object.time ?? 0;
    message.is24Hours = object.is24Hours ?? false;
    return message;
  },
};

function createBaseAPIV1MessageRequest(): APIV1MessageRequest {
  return {
    messages: undefined,
    createMessage: undefined,
    getMessage: undefined,
    putMessage: undefined,
    deleteMessage: undefined,
    triggerMessage: undefined,
    clearMessage: undefined,
  };
}

export const APIV1MessageRequest = {
  encode(
    message: APIV1MessageRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messages !== undefined) {
      APIV1MessageRequest_Messages.encode(
        message.messages,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createMessage !== undefined) {
      APIV1MessageRequest_CreateMessage.encode(
        message.createMessage,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getMessage !== undefined) {
      APIV1MessageRequest_GetMessage.encode(
        message.getMessage,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putMessage !== undefined) {
      APIV1MessageRequest_PutMessage.encode(
        message.putMessage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.deleteMessage !== undefined) {
      APIV1MessageRequest_DeleteMessage.encode(
        message.deleteMessage,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.triggerMessage !== undefined) {
      APIV1MessageRequest_TriggerMessage.encode(
        message.triggerMessage,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.clearMessage !== undefined) {
      APIV1MessageRequest_ClearMessage.encode(
        message.clearMessage,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): APIV1MessageRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages = APIV1MessageRequest_Messages.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createMessage = APIV1MessageRequest_CreateMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getMessage = APIV1MessageRequest_GetMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putMessage = APIV1MessageRequest_PutMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleteMessage = APIV1MessageRequest_DeleteMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.triggerMessage = APIV1MessageRequest_TriggerMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clearMessage = APIV1MessageRequest_ClearMessage.decode(
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

  fromJSON(object: any): APIV1MessageRequest {
    return {
      messages: isSet(object.messages)
        ? APIV1MessageRequest_Messages.fromJSON(object.messages)
        : undefined,
      createMessage: isSet(object.createMessage)
        ? APIV1MessageRequest_CreateMessage.fromJSON(object.createMessage)
        : undefined,
      getMessage: isSet(object.getMessage)
        ? APIV1MessageRequest_GetMessage.fromJSON(object.getMessage)
        : undefined,
      putMessage: isSet(object.putMessage)
        ? APIV1MessageRequest_PutMessage.fromJSON(object.putMessage)
        : undefined,
      deleteMessage: isSet(object.deleteMessage)
        ? APIV1MessageRequest_DeleteMessage.fromJSON(object.deleteMessage)
        : undefined,
      triggerMessage: isSet(object.triggerMessage)
        ? APIV1MessageRequest_TriggerMessage.fromJSON(object.triggerMessage)
        : undefined,
      clearMessage: isSet(object.clearMessage)
        ? APIV1MessageRequest_ClearMessage.fromJSON(object.clearMessage)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageRequest): unknown {
    const obj: any = {};
    if (message.messages !== undefined) {
      obj.messages = APIV1MessageRequest_Messages.toJSON(message.messages);
    }
    if (message.createMessage !== undefined) {
      obj.createMessage = APIV1MessageRequest_CreateMessage.toJSON(
        message.createMessage,
      );
    }
    if (message.getMessage !== undefined) {
      obj.getMessage = APIV1MessageRequest_GetMessage.toJSON(
        message.getMessage,
      );
    }
    if (message.putMessage !== undefined) {
      obj.putMessage = APIV1MessageRequest_PutMessage.toJSON(
        message.putMessage,
      );
    }
    if (message.deleteMessage !== undefined) {
      obj.deleteMessage = APIV1MessageRequest_DeleteMessage.toJSON(
        message.deleteMessage,
      );
    }
    if (message.triggerMessage !== undefined) {
      obj.triggerMessage = APIV1MessageRequest_TriggerMessage.toJSON(
        message.triggerMessage,
      );
    }
    if (message.clearMessage !== undefined) {
      obj.clearMessage = APIV1MessageRequest_ClearMessage.toJSON(
        message.clearMessage,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest>, I>>(
    base?: I,
  ): APIV1MessageRequest {
    return APIV1MessageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageRequest>, I>>(
    object: I,
  ): APIV1MessageRequest {
    const message = createBaseAPIV1MessageRequest();
    message.messages =
      object.messages !== undefined && object.messages !== null
        ? APIV1MessageRequest_Messages.fromPartial(object.messages)
        : undefined;
    message.createMessage =
      object.createMessage !== undefined && object.createMessage !== null
        ? APIV1MessageRequest_CreateMessage.fromPartial(object.createMessage)
        : undefined;
    message.getMessage =
      object.getMessage !== undefined && object.getMessage !== null
        ? APIV1MessageRequest_GetMessage.fromPartial(object.getMessage)
        : undefined;
    message.putMessage =
      object.putMessage !== undefined && object.putMessage !== null
        ? APIV1MessageRequest_PutMessage.fromPartial(object.putMessage)
        : undefined;
    message.deleteMessage =
      object.deleteMessage !== undefined && object.deleteMessage !== null
        ? APIV1MessageRequest_DeleteMessage.fromPartial(object.deleteMessage)
        : undefined;
    message.triggerMessage =
      object.triggerMessage !== undefined && object.triggerMessage !== null
        ? APIV1MessageRequest_TriggerMessage.fromPartial(object.triggerMessage)
        : undefined;
    message.clearMessage =
      object.clearMessage !== undefined && object.clearMessage !== null
        ? APIV1MessageRequest_ClearMessage.fromPartial(object.clearMessage)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageRequest_Messages(): APIV1MessageRequest_Messages {
  return {};
}

export const APIV1MessageRequest_Messages = {
  encode(
    _: APIV1MessageRequest_Messages,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_Messages {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_Messages();
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

  fromJSON(_: any): APIV1MessageRequest_Messages {
    return {};
  },

  toJSON(_: APIV1MessageRequest_Messages): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_Messages>, I>>(
    base?: I,
  ): APIV1MessageRequest_Messages {
    return APIV1MessageRequest_Messages.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageRequest_Messages>, I>>(
    _: I,
  ): APIV1MessageRequest_Messages {
    const message = createBaseAPIV1MessageRequest_Messages();
    return message;
  },
};

function createBaseAPIV1MessageRequest_CreateMessage(): APIV1MessageRequest_CreateMessage {
  return { message: undefined };
}

export const APIV1MessageRequest_CreateMessage = {
  encode(
    message: APIV1MessageRequest_CreateMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      APIV1Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_CreateMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_CreateMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = APIV1Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageRequest_CreateMessage {
    return {
      message: isSet(object.message)
        ? APIV1Message.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageRequest_CreateMessage): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = APIV1Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_CreateMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_CreateMessage {
    return APIV1MessageRequest_CreateMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageRequest_CreateMessage>, I>,
  >(object: I): APIV1MessageRequest_CreateMessage {
    const message = createBaseAPIV1MessageRequest_CreateMessage();
    message.message =
      object.message !== undefined && object.message !== null
        ? APIV1Message.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageRequest_GetMessage(): APIV1MessageRequest_GetMessage {
  return { id: '' };
}

export const APIV1MessageRequest_GetMessage = {
  encode(
    message: APIV1MessageRequest_GetMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_GetMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_GetMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageRequest_GetMessage {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MessageRequest_GetMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_GetMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_GetMessage {
    return APIV1MessageRequest_GetMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageRequest_GetMessage>, I>>(
    object: I,
  ): APIV1MessageRequest_GetMessage {
    const message = createBaseAPIV1MessageRequest_GetMessage();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MessageRequest_PutMessage(): APIV1MessageRequest_PutMessage {
  return { id: '', message: undefined };
}

export const APIV1MessageRequest_PutMessage = {
  encode(
    message: APIV1MessageRequest_PutMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.message !== undefined) {
      APIV1Message.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_PutMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_PutMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = APIV1Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageRequest_PutMessage {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      message: isSet(object.message)
        ? APIV1Message.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageRequest_PutMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.message !== undefined) {
      obj.message = APIV1Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_PutMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_PutMessage {
    return APIV1MessageRequest_PutMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageRequest_PutMessage>, I>>(
    object: I,
  ): APIV1MessageRequest_PutMessage {
    const message = createBaseAPIV1MessageRequest_PutMessage();
    message.id = object.id ?? '';
    message.message =
      object.message !== undefined && object.message !== null
        ? APIV1Message.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageRequest_DeleteMessage(): APIV1MessageRequest_DeleteMessage {
  return { id: '' };
}

export const APIV1MessageRequest_DeleteMessage = {
  encode(
    message: APIV1MessageRequest_DeleteMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_DeleteMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_DeleteMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageRequest_DeleteMessage {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MessageRequest_DeleteMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_DeleteMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_DeleteMessage {
    return APIV1MessageRequest_DeleteMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageRequest_DeleteMessage>, I>,
  >(object: I): APIV1MessageRequest_DeleteMessage {
    const message = createBaseAPIV1MessageRequest_DeleteMessage();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MessageRequest_TriggerMessage(): APIV1MessageRequest_TriggerMessage {
  return { id: '', tokens: [] };
}

export const APIV1MessageRequest_TriggerMessage = {
  encode(
    message: APIV1MessageRequest_TriggerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.tokens) {
      APIV1Message_APIV1MessageToken.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_TriggerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_TriggerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tokens.push(
            APIV1Message_APIV1MessageToken.decode(reader, reader.uint32()),
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

  fromJSON(object: any): APIV1MessageRequest_TriggerMessage {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : '',
      tokens: globalThis.Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) =>
            APIV1Message_APIV1MessageToken.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: APIV1MessageRequest_TriggerMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) =>
        APIV1Message_APIV1MessageToken.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_TriggerMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_TriggerMessage {
    return APIV1MessageRequest_TriggerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageRequest_TriggerMessage>, I>,
  >(object: I): APIV1MessageRequest_TriggerMessage {
    const message = createBaseAPIV1MessageRequest_TriggerMessage();
    message.id = object.id ?? '';
    message.tokens =
      object.tokens?.map((e) =>
        APIV1Message_APIV1MessageToken.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseAPIV1MessageRequest_ClearMessage(): APIV1MessageRequest_ClearMessage {
  return { id: '' };
}

export const APIV1MessageRequest_ClearMessage = {
  encode(
    message: APIV1MessageRequest_ClearMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageRequest_ClearMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageRequest_ClearMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageRequest_ClearMessage {
    return { id: isSet(object.id) ? globalThis.String(object.id) : '' };
  },

  toJSON(message: APIV1MessageRequest_ClearMessage): unknown {
    const obj: any = {};
    if (message.id !== '') {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageRequest_ClearMessage>, I>>(
    base?: I,
  ): APIV1MessageRequest_ClearMessage {
    return APIV1MessageRequest_ClearMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageRequest_ClearMessage>, I>,
  >(object: I): APIV1MessageRequest_ClearMessage {
    const message = createBaseAPIV1MessageRequest_ClearMessage();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseAPIV1MessageResponse(): APIV1MessageResponse {
  return {
    messages: undefined,
    createMessage: undefined,
    getMessage: undefined,
    putMessage: undefined,
    deleteMessage: undefined,
    triggerMessage: undefined,
    clearMessage: undefined,
  };
}

export const APIV1MessageResponse = {
  encode(
    message: APIV1MessageResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.messages !== undefined) {
      APIV1MessageResponse_Messages.encode(
        message.messages,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.createMessage !== undefined) {
      APIV1MessageResponse_CreateMessage.encode(
        message.createMessage,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getMessage !== undefined) {
      APIV1MessageResponse_GetMessage.encode(
        message.getMessage,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.putMessage !== undefined) {
      APIV1MessageResponse_PutMessage.encode(
        message.putMessage,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.deleteMessage !== undefined) {
      APIV1MessageResponse_DeleteMessage.encode(
        message.deleteMessage,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.triggerMessage !== undefined) {
      APIV1MessageResponse_TriggerMessage.encode(
        message.triggerMessage,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.clearMessage !== undefined) {
      APIV1MessageResponse_ClearMessage.encode(
        message.clearMessage,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages = APIV1MessageResponse_Messages.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createMessage = APIV1MessageResponse_CreateMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.getMessage = APIV1MessageResponse_GetMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.putMessage = APIV1MessageResponse_PutMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.deleteMessage = APIV1MessageResponse_DeleteMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.triggerMessage = APIV1MessageResponse_TriggerMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clearMessage = APIV1MessageResponse_ClearMessage.decode(
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

  fromJSON(object: any): APIV1MessageResponse {
    return {
      messages: isSet(object.messages)
        ? APIV1MessageResponse_Messages.fromJSON(object.messages)
        : undefined,
      createMessage: isSet(object.createMessage)
        ? APIV1MessageResponse_CreateMessage.fromJSON(object.createMessage)
        : undefined,
      getMessage: isSet(object.getMessage)
        ? APIV1MessageResponse_GetMessage.fromJSON(object.getMessage)
        : undefined,
      putMessage: isSet(object.putMessage)
        ? APIV1MessageResponse_PutMessage.fromJSON(object.putMessage)
        : undefined,
      deleteMessage: isSet(object.deleteMessage)
        ? APIV1MessageResponse_DeleteMessage.fromJSON(object.deleteMessage)
        : undefined,
      triggerMessage: isSet(object.triggerMessage)
        ? APIV1MessageResponse_TriggerMessage.fromJSON(object.triggerMessage)
        : undefined,
      clearMessage: isSet(object.clearMessage)
        ? APIV1MessageResponse_ClearMessage.fromJSON(object.clearMessage)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageResponse): unknown {
    const obj: any = {};
    if (message.messages !== undefined) {
      obj.messages = APIV1MessageResponse_Messages.toJSON(message.messages);
    }
    if (message.createMessage !== undefined) {
      obj.createMessage = APIV1MessageResponse_CreateMessage.toJSON(
        message.createMessage,
      );
    }
    if (message.getMessage !== undefined) {
      obj.getMessage = APIV1MessageResponse_GetMessage.toJSON(
        message.getMessage,
      );
    }
    if (message.putMessage !== undefined) {
      obj.putMessage = APIV1MessageResponse_PutMessage.toJSON(
        message.putMessage,
      );
    }
    if (message.deleteMessage !== undefined) {
      obj.deleteMessage = APIV1MessageResponse_DeleteMessage.toJSON(
        message.deleteMessage,
      );
    }
    if (message.triggerMessage !== undefined) {
      obj.triggerMessage = APIV1MessageResponse_TriggerMessage.toJSON(
        message.triggerMessage,
      );
    }
    if (message.clearMessage !== undefined) {
      obj.clearMessage = APIV1MessageResponse_ClearMessage.toJSON(
        message.clearMessage,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse>, I>>(
    base?: I,
  ): APIV1MessageResponse {
    return APIV1MessageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageResponse>, I>>(
    object: I,
  ): APIV1MessageResponse {
    const message = createBaseAPIV1MessageResponse();
    message.messages =
      object.messages !== undefined && object.messages !== null
        ? APIV1MessageResponse_Messages.fromPartial(object.messages)
        : undefined;
    message.createMessage =
      object.createMessage !== undefined && object.createMessage !== null
        ? APIV1MessageResponse_CreateMessage.fromPartial(object.createMessage)
        : undefined;
    message.getMessage =
      object.getMessage !== undefined && object.getMessage !== null
        ? APIV1MessageResponse_GetMessage.fromPartial(object.getMessage)
        : undefined;
    message.putMessage =
      object.putMessage !== undefined && object.putMessage !== null
        ? APIV1MessageResponse_PutMessage.fromPartial(object.putMessage)
        : undefined;
    message.deleteMessage =
      object.deleteMessage !== undefined && object.deleteMessage !== null
        ? APIV1MessageResponse_DeleteMessage.fromPartial(object.deleteMessage)
        : undefined;
    message.triggerMessage =
      object.triggerMessage !== undefined && object.triggerMessage !== null
        ? APIV1MessageResponse_TriggerMessage.fromPartial(object.triggerMessage)
        : undefined;
    message.clearMessage =
      object.clearMessage !== undefined && object.clearMessage !== null
        ? APIV1MessageResponse_ClearMessage.fromPartial(object.clearMessage)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageResponse_Messages(): APIV1MessageResponse_Messages {
  return { messages: [] };
}

export const APIV1MessageResponse_Messages = {
  encode(
    message: APIV1MessageResponse_Messages,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.messages) {
      APIV1Message.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_Messages {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_Messages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(APIV1Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageResponse_Messages {
    return {
      messages: globalThis.Array.isArray(object?.messages)
        ? object.messages.map((e: any) => APIV1Message.fromJSON(e))
        : [],
    };
  },

  toJSON(message: APIV1MessageResponse_Messages): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => APIV1Message.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_Messages>, I>>(
    base?: I,
  ): APIV1MessageResponse_Messages {
    return APIV1MessageResponse_Messages.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageResponse_Messages>, I>>(
    object: I,
  ): APIV1MessageResponse_Messages {
    const message = createBaseAPIV1MessageResponse_Messages();
    message.messages =
      object.messages?.map((e) => APIV1Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAPIV1MessageResponse_CreateMessage(): APIV1MessageResponse_CreateMessage {
  return { message: undefined };
}

export const APIV1MessageResponse_CreateMessage = {
  encode(
    message: APIV1MessageResponse_CreateMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      APIV1Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_CreateMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_CreateMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = APIV1Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageResponse_CreateMessage {
    return {
      message: isSet(object.message)
        ? APIV1Message.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageResponse_CreateMessage): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = APIV1Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_CreateMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_CreateMessage {
    return APIV1MessageResponse_CreateMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageResponse_CreateMessage>, I>,
  >(object: I): APIV1MessageResponse_CreateMessage {
    const message = createBaseAPIV1MessageResponse_CreateMessage();
    message.message =
      object.message !== undefined && object.message !== null
        ? APIV1Message.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageResponse_GetMessage(): APIV1MessageResponse_GetMessage {
  return { message: undefined };
}

export const APIV1MessageResponse_GetMessage = {
  encode(
    message: APIV1MessageResponse_GetMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      APIV1Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_GetMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_GetMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = APIV1Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageResponse_GetMessage {
    return {
      message: isSet(object.message)
        ? APIV1Message.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageResponse_GetMessage): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = APIV1Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_GetMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_GetMessage {
    return APIV1MessageResponse_GetMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageResponse_GetMessage>, I>>(
    object: I,
  ): APIV1MessageResponse_GetMessage {
    const message = createBaseAPIV1MessageResponse_GetMessage();
    message.message =
      object.message !== undefined && object.message !== null
        ? APIV1Message.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageResponse_PutMessage(): APIV1MessageResponse_PutMessage {
  return { message: undefined };
}

export const APIV1MessageResponse_PutMessage = {
  encode(
    message: APIV1MessageResponse_PutMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== undefined) {
      APIV1Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_PutMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_PutMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = APIV1Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): APIV1MessageResponse_PutMessage {
    return {
      message: isSet(object.message)
        ? APIV1Message.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: APIV1MessageResponse_PutMessage): unknown {
    const obj: any = {};
    if (message.message !== undefined) {
      obj.message = APIV1Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_PutMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_PutMessage {
    return APIV1MessageResponse_PutMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<APIV1MessageResponse_PutMessage>, I>>(
    object: I,
  ): APIV1MessageResponse_PutMessage {
    const message = createBaseAPIV1MessageResponse_PutMessage();
    message.message =
      object.message !== undefined && object.message !== null
        ? APIV1Message.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseAPIV1MessageResponse_DeleteMessage(): APIV1MessageResponse_DeleteMessage {
  return {};
}

export const APIV1MessageResponse_DeleteMessage = {
  encode(
    _: APIV1MessageResponse_DeleteMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_DeleteMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_DeleteMessage();
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

  fromJSON(_: any): APIV1MessageResponse_DeleteMessage {
    return {};
  },

  toJSON(_: APIV1MessageResponse_DeleteMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_DeleteMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_DeleteMessage {
    return APIV1MessageResponse_DeleteMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageResponse_DeleteMessage>, I>,
  >(_: I): APIV1MessageResponse_DeleteMessage {
    const message = createBaseAPIV1MessageResponse_DeleteMessage();
    return message;
  },
};

function createBaseAPIV1MessageResponse_TriggerMessage(): APIV1MessageResponse_TriggerMessage {
  return {};
}

export const APIV1MessageResponse_TriggerMessage = {
  encode(
    _: APIV1MessageResponse_TriggerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_TriggerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_TriggerMessage();
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

  fromJSON(_: any): APIV1MessageResponse_TriggerMessage {
    return {};
  },

  toJSON(_: APIV1MessageResponse_TriggerMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_TriggerMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_TriggerMessage {
    return APIV1MessageResponse_TriggerMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageResponse_TriggerMessage>, I>,
  >(_: I): APIV1MessageResponse_TriggerMessage {
    const message = createBaseAPIV1MessageResponse_TriggerMessage();
    return message;
  },
};

function createBaseAPIV1MessageResponse_ClearMessage(): APIV1MessageResponse_ClearMessage {
  return {};
}

export const APIV1MessageResponse_ClearMessage = {
  encode(
    _: APIV1MessageResponse_ClearMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): APIV1MessageResponse_ClearMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPIV1MessageResponse_ClearMessage();
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

  fromJSON(_: any): APIV1MessageResponse_ClearMessage {
    return {};
  },

  toJSON(_: APIV1MessageResponse_ClearMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<APIV1MessageResponse_ClearMessage>, I>>(
    base?: I,
  ): APIV1MessageResponse_ClearMessage {
    return APIV1MessageResponse_ClearMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<APIV1MessageResponse_ClearMessage>, I>,
  >(_: I): APIV1MessageResponse_ClearMessage {
    const message = createBaseAPIV1MessageResponse_ClearMessage();
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
