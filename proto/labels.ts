/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Action_Label } from "./action";

export const protobufPackage = "rv.data";

export interface ProLabelsDocument {
  labels: Action_Label[];
}

function createBaseProLabelsDocument(): ProLabelsDocument {
  return { labels: [] };
}

export const ProLabelsDocument = {
  encode(message: ProLabelsDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.labels) {
      Action_Label.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProLabelsDocument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLabelsDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.labels.push(Action_Label.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLabelsDocument {
    return { labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => Action_Label.fromJSON(e)) : [] };
  },

  toJSON(message: ProLabelsDocument): unknown {
    const obj: any = {};
    if (message.labels) {
      obj.labels = message.labels.map((e) => e ? Action_Label.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLabelsDocument>, I>>(base?: I): ProLabelsDocument {
    return ProLabelsDocument.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLabelsDocument>, I>>(object: I): ProLabelsDocument {
    const message = createBaseProLabelsDocument();
    message.labels = object.labels?.map((e) => Action_Label.fromPartial(e)) || [];
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
