/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Action } from './action';
import { UUID } from './basicTypes';

export const protobufPackage = 'rv.data';

export interface LiveVideoPlaylist {
  actions: Action[];
  targetedLayerUUID: UUID | undefined;
  uuid: UUID | undefined;
}

function createBaseLiveVideoPlaylist(): LiveVideoPlaylist {
  return { actions: [], targetedLayerUUID: undefined, uuid: undefined };
}

export const LiveVideoPlaylist = {
  encode(
    message: LiveVideoPlaylist,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.targetedLayerUUID !== undefined) {
      UUID.encode(message.targetedLayerUUID, writer.uint32(18).fork()).ldelim();
    }
    if (message.uuid !== undefined) {
      UUID.encode(message.uuid, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiveVideoPlaylist {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiveVideoPlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.actions.push(Action.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.targetedLayerUUID = UUID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.uuid = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LiveVideoPlaylist {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
      targetedLayerUUID: isSet(object.targetedLayerUUID)
        ? UUID.fromJSON(object.targetedLayerUUID)
        : undefined,
      uuid: isSet(object.uuid) ? UUID.fromJSON(object.uuid) : undefined,
    };
  },

  toJSON(message: LiveVideoPlaylist): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    message.targetedLayerUUID !== undefined &&
      (obj.targetedLayerUUID = message.targetedLayerUUID
        ? UUID.toJSON(message.targetedLayerUUID)
        : undefined);
    message.uuid !== undefined &&
      (obj.uuid = message.uuid ? UUID.toJSON(message.uuid) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<LiveVideoPlaylist>, I>>(
    base?: I,
  ): LiveVideoPlaylist {
    return LiveVideoPlaylist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiveVideoPlaylist>, I>>(
    object: I,
  ): LiveVideoPlaylist {
    const message = createBaseLiveVideoPlaylist();
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    message.targetedLayerUUID =
      object.targetedLayerUUID !== undefined &&
      object.targetedLayerUUID !== null
        ? UUID.fromPartial(object.targetedLayerUUID)
        : undefined;
    message.uuid =
      object.uuid !== undefined && object.uuid !== null
        ? UUID.fromPartial(object.uuid)
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
