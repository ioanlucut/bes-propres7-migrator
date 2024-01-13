/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'rv.data';

export interface MusicKeyScale {
  musicKey: MusicKeyScale_MusicKey;
  musicScale: MusicKeyScale_MusicScale;
}

export enum MusicKeyScale_MusicKey {
  MUSIC_KEY_A_FLAT = 0,
  MUSIC_KEY_A = 1,
  MUSIC_KEY_A_SHARP = 2,
  MUSIC_KEY_B_FLAT = 3,
  MUSIC_KEY_B = 4,
  MUSIC_KEY_B_SHARP = 5,
  MUSIC_KEY_C_FLAT = 6,
  MUSIC_KEY_C = 7,
  MUSIC_KEY_C_SHARP = 8,
  MUSIC_KEY_D_FLAT = 9,
  MUSIC_KEY_D = 10,
  MUSIC_KEY_D_SHARP = 11,
  MUSIC_KEY_E_FLAT = 12,
  MUSIC_KEY_E = 13,
  MUSIC_KEY_E_SHARP = 14,
  MUSIC_KEY_F_FLAT = 15,
  MUSIC_KEY_F = 16,
  MUSIC_KEY_F_SHARP = 17,
  MUSIC_KEY_G_FLAT = 18,
  MUSIC_KEY_G = 19,
  MUSIC_KEY_G_SHARP = 20,
  UNRECOGNIZED = -1,
}

export function musicKeyScale_MusicKeyFromJSON(
  object: any,
): MusicKeyScale_MusicKey {
  switch (object) {
    case 0:
    case 'MUSIC_KEY_A_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_A_FLAT;
    case 1:
    case 'MUSIC_KEY_A':
      return MusicKeyScale_MusicKey.MUSIC_KEY_A;
    case 2:
    case 'MUSIC_KEY_A_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_A_SHARP;
    case 3:
    case 'MUSIC_KEY_B_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_B_FLAT;
    case 4:
    case 'MUSIC_KEY_B':
      return MusicKeyScale_MusicKey.MUSIC_KEY_B;
    case 5:
    case 'MUSIC_KEY_B_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_B_SHARP;
    case 6:
    case 'MUSIC_KEY_C_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_C_FLAT;
    case 7:
    case 'MUSIC_KEY_C':
      return MusicKeyScale_MusicKey.MUSIC_KEY_C;
    case 8:
    case 'MUSIC_KEY_C_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_C_SHARP;
    case 9:
    case 'MUSIC_KEY_D_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_D_FLAT;
    case 10:
    case 'MUSIC_KEY_D':
      return MusicKeyScale_MusicKey.MUSIC_KEY_D;
    case 11:
    case 'MUSIC_KEY_D_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_D_SHARP;
    case 12:
    case 'MUSIC_KEY_E_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_E_FLAT;
    case 13:
    case 'MUSIC_KEY_E':
      return MusicKeyScale_MusicKey.MUSIC_KEY_E;
    case 14:
    case 'MUSIC_KEY_E_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_E_SHARP;
    case 15:
    case 'MUSIC_KEY_F_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_F_FLAT;
    case 16:
    case 'MUSIC_KEY_F':
      return MusicKeyScale_MusicKey.MUSIC_KEY_F;
    case 17:
    case 'MUSIC_KEY_F_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_F_SHARP;
    case 18:
    case 'MUSIC_KEY_G_FLAT':
      return MusicKeyScale_MusicKey.MUSIC_KEY_G_FLAT;
    case 19:
    case 'MUSIC_KEY_G':
      return MusicKeyScale_MusicKey.MUSIC_KEY_G;
    case 20:
    case 'MUSIC_KEY_G_SHARP':
      return MusicKeyScale_MusicKey.MUSIC_KEY_G_SHARP;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MusicKeyScale_MusicKey.UNRECOGNIZED;
  }
}

export function musicKeyScale_MusicKeyToJSON(
  object: MusicKeyScale_MusicKey,
): string {
  switch (object) {
    case MusicKeyScale_MusicKey.MUSIC_KEY_A_FLAT:
      return 'MUSIC_KEY_A_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_A:
      return 'MUSIC_KEY_A';
    case MusicKeyScale_MusicKey.MUSIC_KEY_A_SHARP:
      return 'MUSIC_KEY_A_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_B_FLAT:
      return 'MUSIC_KEY_B_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_B:
      return 'MUSIC_KEY_B';
    case MusicKeyScale_MusicKey.MUSIC_KEY_B_SHARP:
      return 'MUSIC_KEY_B_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_C_FLAT:
      return 'MUSIC_KEY_C_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_C:
      return 'MUSIC_KEY_C';
    case MusicKeyScale_MusicKey.MUSIC_KEY_C_SHARP:
      return 'MUSIC_KEY_C_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_D_FLAT:
      return 'MUSIC_KEY_D_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_D:
      return 'MUSIC_KEY_D';
    case MusicKeyScale_MusicKey.MUSIC_KEY_D_SHARP:
      return 'MUSIC_KEY_D_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_E_FLAT:
      return 'MUSIC_KEY_E_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_E:
      return 'MUSIC_KEY_E';
    case MusicKeyScale_MusicKey.MUSIC_KEY_E_SHARP:
      return 'MUSIC_KEY_E_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_F_FLAT:
      return 'MUSIC_KEY_F_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_F:
      return 'MUSIC_KEY_F';
    case MusicKeyScale_MusicKey.MUSIC_KEY_F_SHARP:
      return 'MUSIC_KEY_F_SHARP';
    case MusicKeyScale_MusicKey.MUSIC_KEY_G_FLAT:
      return 'MUSIC_KEY_G_FLAT';
    case MusicKeyScale_MusicKey.MUSIC_KEY_G:
      return 'MUSIC_KEY_G';
    case MusicKeyScale_MusicKey.MUSIC_KEY_G_SHARP:
      return 'MUSIC_KEY_G_SHARP';
    case MusicKeyScale_MusicKey.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum MusicKeyScale_MusicScale {
  MUSIC_SCALE_MAJOR = 0,
  MUSIC_SCALE_MINOR = 1,
  UNRECOGNIZED = -1,
}

export function musicKeyScale_MusicScaleFromJSON(
  object: any,
): MusicKeyScale_MusicScale {
  switch (object) {
    case 0:
    case 'MUSIC_SCALE_MAJOR':
      return MusicKeyScale_MusicScale.MUSIC_SCALE_MAJOR;
    case 1:
    case 'MUSIC_SCALE_MINOR':
      return MusicKeyScale_MusicScale.MUSIC_SCALE_MINOR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return MusicKeyScale_MusicScale.UNRECOGNIZED;
  }
}

export function musicKeyScale_MusicScaleToJSON(
  object: MusicKeyScale_MusicScale,
): string {
  switch (object) {
    case MusicKeyScale_MusicScale.MUSIC_SCALE_MAJOR:
      return 'MUSIC_SCALE_MAJOR';
    case MusicKeyScale_MusicScale.MUSIC_SCALE_MINOR:
      return 'MUSIC_SCALE_MINOR';
    case MusicKeyScale_MusicScale.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

function createBaseMusicKeyScale(): MusicKeyScale {
  return { musicKey: 0, musicScale: 0 };
}

export const MusicKeyScale = {
  encode(
    message: MusicKeyScale,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.musicKey !== 0) {
      writer.uint32(8).int32(message.musicKey);
    }
    if (message.musicScale !== 0) {
      writer.uint32(16).int32(message.musicScale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MusicKeyScale {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMusicKeyScale();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.musicKey = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.musicScale = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MusicKeyScale {
    return {
      musicKey: isSet(object.musicKey)
        ? musicKeyScale_MusicKeyFromJSON(object.musicKey)
        : 0,
      musicScale: isSet(object.musicScale)
        ? musicKeyScale_MusicScaleFromJSON(object.musicScale)
        : 0,
    };
  },

  toJSON(message: MusicKeyScale): unknown {
    const obj: any = {};
    if (message.musicKey !== 0) {
      obj.musicKey = musicKeyScale_MusicKeyToJSON(message.musicKey);
    }
    if (message.musicScale !== 0) {
      obj.musicScale = musicKeyScale_MusicScaleToJSON(message.musicScale);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MusicKeyScale>, I>>(
    base?: I,
  ): MusicKeyScale {
    return MusicKeyScale.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MusicKeyScale>, I>>(
    object: I,
  ): MusicKeyScale {
    const message = createBaseMusicKeyScale();
    message.musicKey = object.musicKey ?? 0;
    message.musicScale = object.musicScale ?? 0;
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
