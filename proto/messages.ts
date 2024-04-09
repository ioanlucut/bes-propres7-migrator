/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { ApplicationInfo } from './applicationInfo';
import { TemplateIdentification } from './templateIdentification';
import { Clock_Format, Timer_Configuration, Timer_Format } from './timers';
import { UUID } from './uuid';

export const protobufPackage = 'rv.data';

export interface Message {
  uuid: UUID | undefined;
  title: string;
  timeToRemove: number;
  visibleOnNetwork: boolean;
  template: TemplateIdentification | undefined;
  clearType: Message_ClearType;
  messageText: string;
  tokens: Message_Token[];
  tokenValues: Message_TokenValue[];
}

export enum Message_ClearType {
  CLEAR_TYPE_MANUAL = 0,
  CLEAR_TYPE_AFTER_TIME = 1,
  CLEAR_TYPE_AFTER_TIMERS = 2,
  UNRECOGNIZED = -1,
}

export function message_ClearTypeFromJSON(object: any): Message_ClearType {
  switch (object) {
    case 0:
    case 'CLEAR_TYPE_MANUAL':
      return Message_ClearType.CLEAR_TYPE_MANUAL;
    case 1:
    case 'CLEAR_TYPE_AFTER_TIME':
      return Message_ClearType.CLEAR_TYPE_AFTER_TIME;
    case 2:
    case 'CLEAR_TYPE_AFTER_TIMERS':
      return Message_ClearType.CLEAR_TYPE_AFTER_TIMERS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Message_ClearType.UNRECOGNIZED;
  }
}

export function message_ClearTypeToJSON(object: Message_ClearType): string {
  switch (object) {
    case Message_ClearType.CLEAR_TYPE_MANUAL:
      return 'CLEAR_TYPE_MANUAL';
    case Message_ClearType.CLEAR_TYPE_AFTER_TIME:
      return 'CLEAR_TYPE_AFTER_TIME';
    case Message_ClearType.CLEAR_TYPE_AFTER_TIMERS:
      return 'CLEAR_TYPE_AFTER_TIMERS';
    case Message_ClearType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Message_Token {
  uuid: UUID | undefined;
  text?: Message_Token_TokenTypeText | undefined;
  timer?: Message_Token_TokenTypeTimer | undefined;
  clock?: Message_Token_TokenTypeClock | undefined;
}

export interface Message_Token_TokenTypeText {
  name: string;
}

export interface Message_Token_TokenTypeTimer {
  name: string;
  timerUuid: UUID | undefined;
}

export interface Message_Token_TokenTypeClock {}

export interface Message_TokenValue {
  tokenId: UUID | undefined;
  tokenName: string;
  text?: Message_TokenValue_TokenValueText | undefined;
  timer?: Message_TokenValue_TokenValueTimer | undefined;
  clock?: Message_TokenValue_TokenValueClock | undefined;
}

export interface Message_TokenValue_TokenValueText {
  value: string;
}

export interface Message_TokenValue_TokenValueTimer {
  configuration: Timer_Configuration | undefined;
  format: Timer_Format | undefined;
}

export interface Message_TokenValue_TokenValueClock {
  format: Clock_Format | undefined;
}

export interface MessageDocument {
  applicationInfo: ApplicationInfo | undefined;
  messages: Message[];
}

function createBaseMessage(): Message {
  return {
    uuid: undefined,
    title: '',
    timeToRemove: 0,
    visibleOnNetwork: false,
    template: undefined,
    clearType: 0,
    messageText: '',
    tokens: [],
    tokenValues: [],
  };
}

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.title !== '') {
      writer.uint32(18).string(message.title);
    }
    if (message.timeToRemove !== 0) {
      writer.uint32(25).double(message.timeToRemove);
    }
    if (message.visibleOnNetwork !== false) {
      writer.uint32(32).bool(message.visibleOnNetwork);
    }
    if (message.template !== undefined) {
      TemplateIdentification.encode(
        message.template,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.clearType !== 0) {
      writer.uint32(72).int32(message.clearType);
    }
    if (message.messageText !== '') {
      writer.uint32(82).string(message.messageText);
    }
    for (const v of message.tokens) {
      Message_Token.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.tokenValues) {
      Message_TokenValue.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.timeToRemove = reader.double();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.visibleOnNetwork = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.template = TemplateIdentification.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.clearType = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.messageText = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.tokens.push(Message_Token.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.tokenValues.push(
            Message_TokenValue.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Message {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : '',
      timeToRemove: isSet(object.timeToRemove)
        ? globalThis.Number(object.timeToRemove)
        : 0,
      visibleOnNetwork: isSet(object.visibleOnNetwork)
        ? globalThis.Boolean(object.visibleOnNetwork)
        : false,
      template: isSet(object.template)
        ? TemplateIdentification.fromJSON(object.template)
        : undefined,
      clearType: isSet(object.clearType)
        ? message_ClearTypeFromJSON(object.clearType)
        : 0,
      messageText: isSet(object.messageText)
        ? globalThis.String(object.messageText)
        : '',
      tokens: globalThis.Array.isArray(object?.tokens)
        ? object.tokens.map((e: any) => Message_Token.fromJSON(e))
        : [],
      tokenValues: globalThis.Array.isArray(object?.tokenValues)
        ? object.tokenValues.map((e: any) => Message_TokenValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.title !== '') {
      obj.title = message.title;
    }
    if (message.timeToRemove !== 0) {
      obj.timeToRemove = message.timeToRemove;
    }
    if (message.visibleOnNetwork !== false) {
      obj.visibleOnNetwork = message.visibleOnNetwork;
    }
    if (message.template !== undefined) {
      obj.template = TemplateIdentification.toJSON(message.template);
    }
    if (message.clearType !== 0) {
      obj.clearType = message_ClearTypeToJSON(message.clearType);
    }
    if (message.messageText !== '') {
      obj.messageText = message.messageText;
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => Message_Token.toJSON(e));
    }
    if (message.tokenValues?.length) {
      obj.tokenValues = message.tokenValues.map((e) =>
        Message_TokenValue.toJSON(e),
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.title = object.title ?? '';
    message.timeToRemove = object.timeToRemove ?? 0;
    message.visibleOnNetwork = object.visibleOnNetwork ?? false;
    message.template =
      object.template !== undefined && object.template !== null
        ? TemplateIdentification.fromPartial(object.template)
        : undefined;
    message.clearType = object.clearType ?? 0;
    message.messageText = object.messageText ?? '';
    message.tokens =
      object.tokens?.map((e) => Message_Token.fromPartial(e)) || [];
    message.tokenValues =
      object.tokenValues?.map((e) => Message_TokenValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage_Token(): Message_Token {
  return {
    uuid: undefined,
    text: undefined,
    timer: undefined,
    clock: undefined,
  };
}

export const Message_Token = {
  encode(
    message: Message_Token,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== undefined) {
      Message_Token_TokenTypeText.encode(
        message.text,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timer !== undefined) {
      Message_Token_TokenTypeTimer.encode(
        message.timer,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.clock !== undefined) {
      Message_Token_TokenTypeClock.encode(
        message.clock,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_Token {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Token();
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

          message.text = Message_Token_TokenTypeText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timer = Message_Token_TokenTypeTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clock = Message_Token_TokenTypeClock.decode(
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

  fromJSON(object: any): Message_Token {
    return {
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
      text: isSet(object.text)
        ? Message_Token_TokenTypeText.fromJSON(object.text)
        : undefined,
      timer: isSet(object.timer)
        ? Message_Token_TokenTypeTimer.fromJSON(object.timer)
        : undefined,
      clock: isSet(object.clock)
        ? Message_Token_TokenTypeClock.fromJSON(object.clock)
        : undefined,
    };
  },

  toJSON(message: Message_Token): unknown {
    const obj: any = {};
    if (message.uuid !== undefined) {
      obj.uuid = UUID.toJSON(message.uuid);
    }
    if (message.text !== undefined) {
      obj.text = Message_Token_TokenTypeText.toJSON(message.text);
    }
    if (message.timer !== undefined) {
      obj.timer = Message_Token_TokenTypeTimer.toJSON(message.timer);
    }
    if (message.clock !== undefined) {
      obj.clock = Message_Token_TokenTypeClock.toJSON(message.clock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Token>, I>>(
    base?: I,
  ): Message_Token {
    return Message_Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Token>, I>>(
    object: I,
  ): Message_Token {
    const message = createBaseMessage_Token();
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
        : undefined;
    message.text =
      object.text !== undefined && object.text !== null
        ? Message_Token_TokenTypeText.fromPartial(object.text)
        : undefined;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Message_Token_TokenTypeTimer.fromPartial(object.timer)
        : undefined;
    message.clock =
      object.clock !== undefined && object.clock !== null
        ? Message_Token_TokenTypeClock.fromPartial(object.clock)
        : undefined;
    return message;
  },
};

function createBaseMessage_Token_TokenTypeText(): Message_Token_TokenTypeText {
  return { name: '' };
}

export const Message_Token_TokenTypeText = {
  encode(
    message: Message_Token_TokenTypeText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_Token_TokenTypeText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Token_TokenTypeText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Token_TokenTypeText {
    return { name: isSet(object.name) ? globalThis.String(object.name) : '' };
  },

  toJSON(message: Message_Token_TokenTypeText): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Token_TokenTypeText>, I>>(
    base?: I,
  ): Message_Token_TokenTypeText {
    return Message_Token_TokenTypeText.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Token_TokenTypeText>, I>>(
    object: I,
  ): Message_Token_TokenTypeText {
    const message = createBaseMessage_Token_TokenTypeText();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseMessage_Token_TokenTypeTimer(): Message_Token_TokenTypeTimer {
  return { name: '', timerUuid: undefined };
}

export const Message_Token_TokenTypeTimer = {
  encode(
    message: Message_Token_TokenTypeTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.timerUuid !== undefined) {
      UUID.encode(message.timerUuid, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_Token_TokenTypeTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Token_TokenTypeTimer();
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

          message.timerUuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_Token_TokenTypeTimer {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      timerUuid: isSet(object.timerUuid)
        ? UUID.fromJSON(object.timerUuid)
        : undefined,
    };
  },

  toJSON(message: Message_Token_TokenTypeTimer): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.timerUuid !== undefined) {
      obj.timerUuid = UUID.toJSON(message.timerUuid);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Token_TokenTypeTimer>, I>>(
    base?: I,
  ): Message_Token_TokenTypeTimer {
    return Message_Token_TokenTypeTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Token_TokenTypeTimer>, I>>(
    object: I,
  ): Message_Token_TokenTypeTimer {
    const message = createBaseMessage_Token_TokenTypeTimer();
    message.name = object.name ?? '';
    message.timerUuid =
      object.timerUuid !== undefined && object.timerUuid !== null
        ? UUID.fromPartial(object.timerUuid)
        : undefined;
    return message;
  },
};

function createBaseMessage_Token_TokenTypeClock(): Message_Token_TokenTypeClock {
  return {};
}

export const Message_Token_TokenTypeClock = {
  encode(
    _: Message_Token_TokenTypeClock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_Token_TokenTypeClock {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_Token_TokenTypeClock();
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

  fromJSON(_: any): Message_Token_TokenTypeClock {
    return {};
  },

  toJSON(_: Message_Token_TokenTypeClock): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_Token_TokenTypeClock>, I>>(
    base?: I,
  ): Message_Token_TokenTypeClock {
    return Message_Token_TokenTypeClock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_Token_TokenTypeClock>, I>>(
    _: I,
  ): Message_Token_TokenTypeClock {
    const message = createBaseMessage_Token_TokenTypeClock();
    return message;
  },
};

function createBaseMessage_TokenValue(): Message_TokenValue {
  return {
    tokenId: undefined,
    tokenName: '',
    text: undefined,
    timer: undefined,
    clock: undefined,
  };
}

export const Message_TokenValue = {
  encode(
    message: Message_TokenValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tokenId !== undefined) {
      UUID.encode(message.tokenId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenName !== '') {
      writer.uint32(42).string(message.tokenName);
    }
    if (message.text !== undefined) {
      Message_TokenValue_TokenValueText.encode(
        message.text,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timer !== undefined) {
      Message_TokenValue_TokenValueTimer.encode(
        message.timer,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.clock !== undefined) {
      Message_TokenValue_TokenValueClock.encode(
        message.clock,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_TokenValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_TokenValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenId = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tokenName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = Message_TokenValue_TokenValueText.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timer = Message_TokenValue_TokenValueTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clock = Message_TokenValue_TokenValueClock.decode(
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

  fromJSON(object: any): Message_TokenValue {
    return {
      tokenId: isSet(object.tokenId)
        ? UUID.fromJSON(object.tokenId)
        : undefined,
      tokenName: isSet(object.tokenName)
        ? globalThis.String(object.tokenName)
        : '',
      text: isSet(object.text)
        ? Message_TokenValue_TokenValueText.fromJSON(object.text)
        : undefined,
      timer: isSet(object.timer)
        ? Message_TokenValue_TokenValueTimer.fromJSON(object.timer)
        : undefined,
      clock: isSet(object.clock)
        ? Message_TokenValue_TokenValueClock.fromJSON(object.clock)
        : undefined,
    };
  },

  toJSON(message: Message_TokenValue): unknown {
    const obj: any = {};
    if (message.tokenId !== undefined) {
      obj.tokenId = UUID.toJSON(message.tokenId);
    }
    if (message.tokenName !== '') {
      obj.tokenName = message.tokenName;
    }
    if (message.text !== undefined) {
      obj.text = Message_TokenValue_TokenValueText.toJSON(message.text);
    }
    if (message.timer !== undefined) {
      obj.timer = Message_TokenValue_TokenValueTimer.toJSON(message.timer);
    }
    if (message.clock !== undefined) {
      obj.clock = Message_TokenValue_TokenValueClock.toJSON(message.clock);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_TokenValue>, I>>(
    base?: I,
  ): Message_TokenValue {
    return Message_TokenValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message_TokenValue>, I>>(
    object: I,
  ): Message_TokenValue {
    const message = createBaseMessage_TokenValue();
    message.tokenId =
      object.tokenId !== undefined && object.tokenId !== null
        ? UUID.fromPartial(object.tokenId)
        : undefined;
    message.tokenName = object.tokenName ?? '';
    message.text =
      object.text !== undefined && object.text !== null
        ? Message_TokenValue_TokenValueText.fromPartial(object.text)
        : undefined;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? Message_TokenValue_TokenValueTimer.fromPartial(object.timer)
        : undefined;
    message.clock =
      object.clock !== undefined && object.clock !== null
        ? Message_TokenValue_TokenValueClock.fromPartial(object.clock)
        : undefined;
    return message;
  },
};

function createBaseMessage_TokenValue_TokenValueText(): Message_TokenValue_TokenValueText {
  return { value: '' };
}

export const Message_TokenValue_TokenValueText = {
  encode(
    message: Message_TokenValue_TokenValueText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.value !== '') {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_TokenValue_TokenValueText {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_TokenValue_TokenValueText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_TokenValue_TokenValueText {
    return {
      value: isSet(object.value) ? globalThis.String(object.value) : '',
    };
  },

  toJSON(message: Message_TokenValue_TokenValueText): unknown {
    const obj: any = {};
    if (message.value !== '') {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_TokenValue_TokenValueText>, I>>(
    base?: I,
  ): Message_TokenValue_TokenValueText {
    return Message_TokenValue_TokenValueText.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Message_TokenValue_TokenValueText>, I>,
  >(object: I): Message_TokenValue_TokenValueText {
    const message = createBaseMessage_TokenValue_TokenValueText();
    message.value = object.value ?? '';
    return message;
  },
};

function createBaseMessage_TokenValue_TokenValueTimer(): Message_TokenValue_TokenValueTimer {
  return { configuration: undefined, format: undefined };
}

export const Message_TokenValue_TokenValueTimer = {
  encode(
    message: Message_TokenValue_TokenValueTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.configuration !== undefined) {
      Timer_Configuration.encode(
        message.configuration,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.format !== undefined) {
      Timer_Format.encode(message.format, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_TokenValue_TokenValueTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_TokenValue_TokenValueTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configuration = Timer_Configuration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.format = Timer_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_TokenValue_TokenValueTimer {
    return {
      configuration: isSet(object.configuration)
        ? Timer_Configuration.fromJSON(object.configuration)
        : undefined,
      format: isSet(object.format)
        ? Timer_Format.fromJSON(object.format)
        : undefined,
    };
  },

  toJSON(message: Message_TokenValue_TokenValueTimer): unknown {
    const obj: any = {};
    if (message.configuration !== undefined) {
      obj.configuration = Timer_Configuration.toJSON(message.configuration);
    }
    if (message.format !== undefined) {
      obj.format = Timer_Format.toJSON(message.format);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_TokenValue_TokenValueTimer>, I>>(
    base?: I,
  ): Message_TokenValue_TokenValueTimer {
    return Message_TokenValue_TokenValueTimer.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Message_TokenValue_TokenValueTimer>, I>,
  >(object: I): Message_TokenValue_TokenValueTimer {
    const message = createBaseMessage_TokenValue_TokenValueTimer();
    message.configuration =
      object.configuration !== undefined && object.configuration !== null
        ? Timer_Configuration.fromPartial(object.configuration)
        : undefined;
    message.format =
      object.format !== undefined && object.format !== null
        ? Timer_Format.fromPartial(object.format)
        : undefined;
    return message;
  },
};

function createBaseMessage_TokenValue_TokenValueClock(): Message_TokenValue_TokenValueClock {
  return { format: undefined };
}

export const Message_TokenValue_TokenValueClock = {
  encode(
    message: Message_TokenValue_TokenValueClock,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.format !== undefined) {
      Clock_Format.encode(message.format, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Message_TokenValue_TokenValueClock {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_TokenValue_TokenValueClock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.format = Clock_Format.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message_TokenValue_TokenValueClock {
    return {
      format: isSet(object.format)
        ? Clock_Format.fromJSON(object.format)
        : undefined,
    };
  },

  toJSON(message: Message_TokenValue_TokenValueClock): unknown {
    const obj: any = {};
    if (message.format !== undefined) {
      obj.format = Clock_Format.toJSON(message.format);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message_TokenValue_TokenValueClock>, I>>(
    base?: I,
  ): Message_TokenValue_TokenValueClock {
    return Message_TokenValue_TokenValueClock.fromPartial(base ?? ({} as any));
  },
  fromPartial<
    I extends Exact<DeepPartial<Message_TokenValue_TokenValueClock>, I>,
  >(object: I): Message_TokenValue_TokenValueClock {
    const message = createBaseMessage_TokenValue_TokenValueClock();
    message.format =
      object.format !== undefined && object.format !== null
        ? Clock_Format.fromPartial(object.format)
        : undefined;
    return message;
  },
};

function createBaseMessageDocument(): MessageDocument {
  return { applicationInfo: undefined, messages: [] };
}

export const MessageDocument = {
  encode(
    message: MessageDocument,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.applicationInfo !== undefined) {
      ApplicationInfo.encode(
        message.applicationInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.messages) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageDocument {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageDocument();
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

          message.messages.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageDocument {
    return {
      applicationInfo: isSet(object.applicationInfo)
        ? ApplicationInfo.fromJSON(object.applicationInfo)
        : undefined,
      messages: globalThis.Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Message.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MessageDocument): unknown {
    const obj: any = {};
    if (message.applicationInfo !== undefined) {
      obj.applicationInfo = ApplicationInfo.toJSON(message.applicationInfo);
    }
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageDocument>, I>>(
    base?: I,
  ): MessageDocument {
    return MessageDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageDocument>, I>>(
    object: I,
  ): MessageDocument {
    const message = createBaseMessageDocument();
    message.applicationInfo =
      object.applicationInfo !== undefined && object.applicationInfo !== null
        ? ApplicationInfo.fromPartial(object.applicationInfo)
        : undefined;
    message.messages =
      object.messages?.map((e) => Message.fromPartial(e)) || [];
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
