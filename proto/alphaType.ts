/* eslint-disable */

export const protobufPackage = 'rv.data';

export enum AlphaType {
  ALPHA_TYPE_UNKNOWN = 0,
  ALPHA_TYPE_STRAIGHT = 1,
  ALPHA_TYPE_PREMULTIPLIED = 2,
  UNRECOGNIZED = -1,
}

export function alphaTypeFromJSON(object: any): AlphaType {
  switch (object) {
    case 0:
    case 'ALPHA_TYPE_UNKNOWN':
      return AlphaType.ALPHA_TYPE_UNKNOWN;
    case 1:
    case 'ALPHA_TYPE_STRAIGHT':
      return AlphaType.ALPHA_TYPE_STRAIGHT;
    case 2:
    case 'ALPHA_TYPE_PREMULTIPLIED':
      return AlphaType.ALPHA_TYPE_PREMULTIPLIED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AlphaType.UNRECOGNIZED;
  }
}

export function alphaTypeToJSON(object: AlphaType): string {
  switch (object) {
    case AlphaType.ALPHA_TYPE_UNKNOWN:
      return 'ALPHA_TYPE_UNKNOWN';
    case AlphaType.ALPHA_TYPE_STRAIGHT:
      return 'ALPHA_TYPE_STRAIGHT';
    case AlphaType.ALPHA_TYPE_PREMULTIPLIED:
      return 'ALPHA_TYPE_PREMULTIPLIED';
    case AlphaType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
