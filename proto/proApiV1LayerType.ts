/* eslint-disable */

export const protobufPackage = 'rv.data';

export enum APIV1LayerType {
  audio = 0,
  props = 1,
  messages = 2,
  announcements = 3,
  slide = 4,
  media = 5,
  video_input = 6,
  UNRECOGNIZED = -1,
}

export function aPIV1LayerTypeFromJSON(object: any): APIV1LayerType {
  switch (object) {
    case 0:
    case 'audio':
      return APIV1LayerType.audio;
    case 1:
    case 'props':
      return APIV1LayerType.props;
    case 2:
    case 'messages':
      return APIV1LayerType.messages;
    case 3:
    case 'announcements':
      return APIV1LayerType.announcements;
    case 4:
    case 'slide':
      return APIV1LayerType.slide;
    case 5:
    case 'media':
      return APIV1LayerType.media;
    case 6:
    case 'video_input':
      return APIV1LayerType.video_input;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return APIV1LayerType.UNRECOGNIZED;
  }
}

export function aPIV1LayerTypeToJSON(object: APIV1LayerType): string {
  switch (object) {
    case APIV1LayerType.audio:
      return 'audio';
    case APIV1LayerType.props:
      return 'props';
    case APIV1LayerType.messages:
      return 'messages';
    case APIV1LayerType.announcements:
      return 'announcements';
    case APIV1LayerType.slide:
      return 'slide';
    case APIV1LayerType.media:
      return 'media';
    case APIV1LayerType.video_input:
      return 'video_input';
    case APIV1LayerType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}
