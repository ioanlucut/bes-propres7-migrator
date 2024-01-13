/* eslint-disable */

export const protobufPackage = 'rv.data';

export enum APIV1ContentType {
  PNG = 0,
  JPEG = 1,
  UNRECOGNIZED = -1,
}

export function aPIV1ContentTypeFromJSON(object: any): APIV1ContentType {
  switch (object) {
    case 0:
    case 'PNG':
      return APIV1ContentType.PNG;
    case 1:
    case 'JPEG':
      return APIV1ContentType.JPEG;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1ContentType.UNRECOGNIZED;
  }
}

export function aPIV1ContentTypeToJSON(object: APIV1ContentType): string {
  switch (object) {
    case APIV1ContentType.PNG:
      return 'PNG';
    case APIV1ContentType.JPEG:
      return 'JPEG';
    case APIV1ContentType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
