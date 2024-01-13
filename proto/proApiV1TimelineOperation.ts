/* eslint-disable */

export const protobufPackage = 'rv.data';

export enum APIV1TimelineOperation {
  play = 0,
  pause = 1,
  rewind = 2,
  UNRECOGNIZED = -1,
}

export function aPIV1TimelineOperationFromJSON(
  object: any,
): APIV1TimelineOperation {
  switch (object) {
    case 0:
    case 'play':
      return APIV1TimelineOperation.play;
    case 1:
    case 'pause':
      return APIV1TimelineOperation.pause;
    case 2:
    case 'rewind':
      return APIV1TimelineOperation.rewind;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1TimelineOperation.UNRECOGNIZED;
  }
}

export function aPIV1TimelineOperationToJSON(
  object: APIV1TimelineOperation,
): string {
  switch (object) {
    case APIV1TimelineOperation.play:
      return 'play';
    case APIV1TimelineOperation.pause:
      return 'pause';
    case APIV1TimelineOperation.rewind:
      return 'rewind';
    case APIV1TimelineOperation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
