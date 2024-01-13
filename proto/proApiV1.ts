/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import {
  APIV1AnnouncementRequest,
  APIV1AnnouncementResponse,
} from './proApiV1Announcement';
import { APIV1AudioRequest, APIV1AudioResponse } from './proApiV1Audio';
import { APIV1CaptureRequest, APIV1CaptureResponse } from './proApiV1Capture';
import { APIV1ClearRequest, APIV1ClearResponse } from './proApiV1Clear';
import { APIV1ErrorResponse } from './proApiV1ErrorResponse';
import { APIV1GroupsRequest, APIV1GroupsResponse } from './proApiV1Groups';
import { APIV1LibraryRequest, APIV1LibraryResponse } from './proApiV1Library';
import { APIV1LinkRequest, APIV1LinkResponse } from './proApiV1Link';
import { APIV1LooksRequest, APIV1LooksResponse } from './proApiV1Looks';
import { APIV1MacroRequest, APIV1MacroResponse } from './proApiV1Macro';
import { APIV1MasksRequest, APIV1MasksResponse } from './proApiV1Masks';
import { APIV1MediaRequest, APIV1MediaResponse } from './proApiV1Media';
import { APIV1MessageRequest, APIV1MessageResponse } from './proApiV1Message';
import {
  APIV1MiscellaneousRequest,
  APIV1MiscellaneousResponse,
} from './proApiV1Miscellaneous';
import {
  APIV1PlaylistRequest,
  APIV1PlaylistResponse,
} from './proApiV1Playlist';
import { APIV1PrerollRequest, APIV1PrerollResponse } from './proApiV1Preroll';
import {
  APIV1PresentationRequest,
  APIV1PresentationResponse,
} from './proApiV1Presentation';
import { APIV1PropRequest, APIV1PropResponse } from './proApiV1Prop';
import { APIV1StageRequest, APIV1StageResponse } from './proApiV1Stage';
import { APIV1StatusRequest, APIV1StatusResponse } from './proApiV1Status';
import { APIV1ThemeRequest, APIV1ThemeResponse } from './proApiV1Theme';
import { APIV1TimerRequest, APIV1TimerResponse } from './proApiV1Timer';
import {
  APIV1TransportRequest,
  APIV1TransportResponse,
} from './proApiV1Transport';
import { APIV1TriggerRequest, APIV1TriggerResponse } from './proApiV1Trigger';
import {
  APIV1VideoInputsRequest,
  APIV1VideoInputsResponse,
} from './proApiV1VideoInputs';

export const protobufPackage = 'rv.data';

export interface NetworkAPIV1 {
  action?: NetworkAPIV1_Action | undefined;
}

export interface NetworkAPIV1_Action {
  audioRequest?: APIV1AudioRequest | undefined;
  captureRequest?: APIV1CaptureRequest | undefined;
  clearingRequest?: APIV1ClearRequest | undefined;
  groupsRequest?: APIV1GroupsRequest | undefined;
  linkRequest?: APIV1LinkRequest | undefined;
  libraryRequest?: APIV1LibraryRequest | undefined;
  looksRequest?: APIV1LooksRequest | undefined;
  macroRequest?: APIV1MacroRequest | undefined;
  masksRequest?: APIV1MasksRequest | undefined;
  mediaRequest?: APIV1MediaRequest | undefined;
  messageRequest?: APIV1MessageRequest | undefined;
  miscellaneousRequest?: APIV1MiscellaneousRequest | undefined;
  playlistRequest?: APIV1PlaylistRequest | undefined;
  prerollRequest?: APIV1PrerollRequest | undefined;
  presentationRequest?: APIV1PresentationRequest | undefined;
  propRequest?: APIV1PropRequest | undefined;
  stageRequest?: APIV1StageRequest | undefined;
  statusRequest?: APIV1StatusRequest | undefined;
  themeRequest?: APIV1ThemeRequest | undefined;
  timerRequest?: APIV1TimerRequest | undefined;
  transportRequest?: APIV1TransportRequest | undefined;
  triggerRequest?: APIV1TriggerRequest | undefined;
  videoInputsRequest?: APIV1VideoInputsRequest | undefined;
  announcementRequest?: APIV1AnnouncementRequest | undefined;
  audioResponse?: APIV1AudioResponse | undefined;
  captureResponse?: APIV1CaptureResponse | undefined;
  clearingResponse?: APIV1ClearResponse | undefined;
  groupsResponse?: APIV1GroupsResponse | undefined;
  linkResponse?: APIV1LinkResponse | undefined;
  libraryResponse?: APIV1LibraryResponse | undefined;
  looksResponse?: APIV1LooksResponse | undefined;
  macroResponse?: APIV1MacroResponse | undefined;
  masksResponse?: APIV1MasksResponse | undefined;
  mediaResponse?: APIV1MediaResponse | undefined;
  messageResponse?: APIV1MessageResponse | undefined;
  miscellaneousResponse?: APIV1MiscellaneousResponse | undefined;
  playlistResponse?: APIV1PlaylistResponse | undefined;
  prerollResponse?: APIV1PrerollResponse | undefined;
  presentationResponse?: APIV1PresentationResponse | undefined;
  propResponse?: APIV1PropResponse | undefined;
  stageResponse?: APIV1StageResponse | undefined;
  statusResponse?: APIV1StatusResponse | undefined;
  themeResponse?: APIV1ThemeResponse | undefined;
  timerResponse?: APIV1TimerResponse | undefined;
  transportResponse?: APIV1TransportResponse | undefined;
  triggerResponse?: APIV1TriggerResponse | undefined;
  videoInputsResponse?: APIV1VideoInputsResponse | undefined;
  announcementResponse?: APIV1AnnouncementResponse | undefined;
  errorResponse?: APIV1ErrorResponse | undefined;
  updateIdentifier?: string | undefined;
}

function createBaseNetworkAPIV1(): NetworkAPIV1 {
  return { action: undefined };
}

export const NetworkAPIV1 = {
  encode(
    message: NetworkAPIV1,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== undefined) {
      NetworkAPIV1_Action.encode(
        message.action,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAPIV1 {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPIV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.action = NetworkAPIV1_Action.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPIV1 {
    return {
      action: isSet(object.action)
        ? NetworkAPIV1_Action.fromJSON(object.action)
        : undefined,
    };
  },

  toJSON(message: NetworkAPIV1): unknown {
    const obj: any = {};
    if (message.action !== undefined) {
      obj.action = NetworkAPIV1_Action.toJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPIV1>, I>>(
    base?: I,
  ): NetworkAPIV1 {
    return NetworkAPIV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkAPIV1>, I>>(
    object: I,
  ): NetworkAPIV1 {
    const message = createBaseNetworkAPIV1();
    message.action =
      object.action !== undefined && object.action !== null
        ? NetworkAPIV1_Action.fromPartial(object.action)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPIV1_Action(): NetworkAPIV1_Action {
  return {
    audioRequest: undefined,
    captureRequest: undefined,
    clearingRequest: undefined,
    groupsRequest: undefined,
    linkRequest: undefined,
    libraryRequest: undefined,
    looksRequest: undefined,
    macroRequest: undefined,
    masksRequest: undefined,
    mediaRequest: undefined,
    messageRequest: undefined,
    miscellaneousRequest: undefined,
    playlistRequest: undefined,
    prerollRequest: undefined,
    presentationRequest: undefined,
    propRequest: undefined,
    stageRequest: undefined,
    statusRequest: undefined,
    themeRequest: undefined,
    timerRequest: undefined,
    transportRequest: undefined,
    triggerRequest: undefined,
    videoInputsRequest: undefined,
    announcementRequest: undefined,
    audioResponse: undefined,
    captureResponse: undefined,
    clearingResponse: undefined,
    groupsResponse: undefined,
    linkResponse: undefined,
    libraryResponse: undefined,
    looksResponse: undefined,
    macroResponse: undefined,
    masksResponse: undefined,
    mediaResponse: undefined,
    messageResponse: undefined,
    miscellaneousResponse: undefined,
    playlistResponse: undefined,
    prerollResponse: undefined,
    presentationResponse: undefined,
    propResponse: undefined,
    stageResponse: undefined,
    statusResponse: undefined,
    themeResponse: undefined,
    timerResponse: undefined,
    transportResponse: undefined,
    triggerResponse: undefined,
    videoInputsResponse: undefined,
    announcementResponse: undefined,
    errorResponse: undefined,
    updateIdentifier: undefined,
  };
}

export const NetworkAPIV1_Action = {
  encode(
    message: NetworkAPIV1_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.audioRequest !== undefined) {
      APIV1AudioRequest.encode(
        message.audioRequest,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.captureRequest !== undefined) {
      APIV1CaptureRequest.encode(
        message.captureRequest,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.clearingRequest !== undefined) {
      APIV1ClearRequest.encode(
        message.clearingRequest,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.groupsRequest !== undefined) {
      APIV1GroupsRequest.encode(
        message.groupsRequest,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.linkRequest !== undefined) {
      APIV1LinkRequest.encode(
        message.linkRequest,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.libraryRequest !== undefined) {
      APIV1LibraryRequest.encode(
        message.libraryRequest,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.looksRequest !== undefined) {
      APIV1LooksRequest.encode(
        message.looksRequest,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.macroRequest !== undefined) {
      APIV1MacroRequest.encode(
        message.macroRequest,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.masksRequest !== undefined) {
      APIV1MasksRequest.encode(
        message.masksRequest,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.mediaRequest !== undefined) {
      APIV1MediaRequest.encode(
        message.mediaRequest,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.messageRequest !== undefined) {
      APIV1MessageRequest.encode(
        message.messageRequest,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.miscellaneousRequest !== undefined) {
      APIV1MiscellaneousRequest.encode(
        message.miscellaneousRequest,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.playlistRequest !== undefined) {
      APIV1PlaylistRequest.encode(
        message.playlistRequest,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.prerollRequest !== undefined) {
      APIV1PrerollRequest.encode(
        message.prerollRequest,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.presentationRequest !== undefined) {
      APIV1PresentationRequest.encode(
        message.presentationRequest,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.propRequest !== undefined) {
      APIV1PropRequest.encode(
        message.propRequest,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.stageRequest !== undefined) {
      APIV1StageRequest.encode(
        message.stageRequest,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.statusRequest !== undefined) {
      APIV1StatusRequest.encode(
        message.statusRequest,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.themeRequest !== undefined) {
      APIV1ThemeRequest.encode(
        message.themeRequest,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.timerRequest !== undefined) {
      APIV1TimerRequest.encode(
        message.timerRequest,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.transportRequest !== undefined) {
      APIV1TransportRequest.encode(
        message.transportRequest,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.triggerRequest !== undefined) {
      APIV1TriggerRequest.encode(
        message.triggerRequest,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.videoInputsRequest !== undefined) {
      APIV1VideoInputsRequest.encode(
        message.videoInputsRequest,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.announcementRequest !== undefined) {
      APIV1AnnouncementRequest.encode(
        message.announcementRequest,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.audioResponse !== undefined) {
      APIV1AudioResponse.encode(
        message.audioResponse,
        writer.uint32(810).fork(),
      ).ldelim();
    }
    if (message.captureResponse !== undefined) {
      APIV1CaptureResponse.encode(
        message.captureResponse,
        writer.uint32(818).fork(),
      ).ldelim();
    }
    if (message.clearingResponse !== undefined) {
      APIV1ClearResponse.encode(
        message.clearingResponse,
        writer.uint32(826).fork(),
      ).ldelim();
    }
    if (message.groupsResponse !== undefined) {
      APIV1GroupsResponse.encode(
        message.groupsResponse,
        writer.uint32(834).fork(),
      ).ldelim();
    }
    if (message.linkResponse !== undefined) {
      APIV1LinkResponse.encode(
        message.linkResponse,
        writer.uint32(842).fork(),
      ).ldelim();
    }
    if (message.libraryResponse !== undefined) {
      APIV1LibraryResponse.encode(
        message.libraryResponse,
        writer.uint32(850).fork(),
      ).ldelim();
    }
    if (message.looksResponse !== undefined) {
      APIV1LooksResponse.encode(
        message.looksResponse,
        writer.uint32(858).fork(),
      ).ldelim();
    }
    if (message.macroResponse !== undefined) {
      APIV1MacroResponse.encode(
        message.macroResponse,
        writer.uint32(866).fork(),
      ).ldelim();
    }
    if (message.masksResponse !== undefined) {
      APIV1MasksResponse.encode(
        message.masksResponse,
        writer.uint32(874).fork(),
      ).ldelim();
    }
    if (message.mediaResponse !== undefined) {
      APIV1MediaResponse.encode(
        message.mediaResponse,
        writer.uint32(882).fork(),
      ).ldelim();
    }
    if (message.messageResponse !== undefined) {
      APIV1MessageResponse.encode(
        message.messageResponse,
        writer.uint32(890).fork(),
      ).ldelim();
    }
    if (message.miscellaneousResponse !== undefined) {
      APIV1MiscellaneousResponse.encode(
        message.miscellaneousResponse,
        writer.uint32(898).fork(),
      ).ldelim();
    }
    if (message.playlistResponse !== undefined) {
      APIV1PlaylistResponse.encode(
        message.playlistResponse,
        writer.uint32(906).fork(),
      ).ldelim();
    }
    if (message.prerollResponse !== undefined) {
      APIV1PrerollResponse.encode(
        message.prerollResponse,
        writer.uint32(914).fork(),
      ).ldelim();
    }
    if (message.presentationResponse !== undefined) {
      APIV1PresentationResponse.encode(
        message.presentationResponse,
        writer.uint32(922).fork(),
      ).ldelim();
    }
    if (message.propResponse !== undefined) {
      APIV1PropResponse.encode(
        message.propResponse,
        writer.uint32(930).fork(),
      ).ldelim();
    }
    if (message.stageResponse !== undefined) {
      APIV1StageResponse.encode(
        message.stageResponse,
        writer.uint32(938).fork(),
      ).ldelim();
    }
    if (message.statusResponse !== undefined) {
      APIV1StatusResponse.encode(
        message.statusResponse,
        writer.uint32(946).fork(),
      ).ldelim();
    }
    if (message.themeResponse !== undefined) {
      APIV1ThemeResponse.encode(
        message.themeResponse,
        writer.uint32(954).fork(),
      ).ldelim();
    }
    if (message.timerResponse !== undefined) {
      APIV1TimerResponse.encode(
        message.timerResponse,
        writer.uint32(962).fork(),
      ).ldelim();
    }
    if (message.transportResponse !== undefined) {
      APIV1TransportResponse.encode(
        message.transportResponse,
        writer.uint32(970).fork(),
      ).ldelim();
    }
    if (message.triggerResponse !== undefined) {
      APIV1TriggerResponse.encode(
        message.triggerResponse,
        writer.uint32(978).fork(),
      ).ldelim();
    }
    if (message.videoInputsResponse !== undefined) {
      APIV1VideoInputsResponse.encode(
        message.videoInputsResponse,
        writer.uint32(986).fork(),
      ).ldelim();
    }
    if (message.announcementResponse !== undefined) {
      APIV1AnnouncementResponse.encode(
        message.announcementResponse,
        writer.uint32(994).fork(),
      ).ldelim();
    }
    if (message.errorResponse !== undefined) {
      APIV1ErrorResponse.encode(
        message.errorResponse,
        writer.uint32(1602).fork(),
      ).ldelim();
    }
    if (message.updateIdentifier !== undefined) {
      writer.uint32(1610).string(message.updateIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAPIV1_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPIV1_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audioRequest = APIV1AudioRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.captureRequest = APIV1CaptureRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clearingRequest = APIV1ClearRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groupsRequest = APIV1GroupsRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.linkRequest = APIV1LinkRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.libraryRequest = APIV1LibraryRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.looksRequest = APIV1LooksRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.macroRequest = APIV1MacroRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.masksRequest = APIV1MasksRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.mediaRequest = APIV1MediaRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.messageRequest = APIV1MessageRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.miscellaneousRequest = APIV1MiscellaneousRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.playlistRequest = APIV1PlaylistRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.prerollRequest = APIV1PrerollRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.presentationRequest = APIV1PresentationRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.propRequest = APIV1PropRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.stageRequest = APIV1StageRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.statusRequest = APIV1StatusRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.themeRequest = APIV1ThemeRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.timerRequest = APIV1TimerRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.transportRequest = APIV1TransportRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.triggerRequest = APIV1TriggerRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.videoInputsRequest = APIV1VideoInputsRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.announcementRequest = APIV1AnnouncementRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.audioResponse = APIV1AudioResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.captureResponse = APIV1CaptureResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.clearingResponse = APIV1ClearResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.groupsResponse = APIV1GroupsResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.linkResponse = APIV1LinkResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.libraryResponse = APIV1LibraryResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 107:
          if (tag !== 858) {
            break;
          }

          message.looksResponse = APIV1LooksResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 108:
          if (tag !== 866) {
            break;
          }

          message.macroResponse = APIV1MacroResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 109:
          if (tag !== 874) {
            break;
          }

          message.masksResponse = APIV1MasksResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 110:
          if (tag !== 882) {
            break;
          }

          message.mediaResponse = APIV1MediaResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 111:
          if (tag !== 890) {
            break;
          }

          message.messageResponse = APIV1MessageResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.miscellaneousResponse = APIV1MiscellaneousResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 113:
          if (tag !== 906) {
            break;
          }

          message.playlistResponse = APIV1PlaylistResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 114:
          if (tag !== 914) {
            break;
          }

          message.prerollResponse = APIV1PrerollResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 115:
          if (tag !== 922) {
            break;
          }

          message.presentationResponse = APIV1PresentationResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 116:
          if (tag !== 930) {
            break;
          }

          message.propResponse = APIV1PropResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 117:
          if (tag !== 938) {
            break;
          }

          message.stageResponse = APIV1StageResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 118:
          if (tag !== 946) {
            break;
          }

          message.statusResponse = APIV1StatusResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 119:
          if (tag !== 954) {
            break;
          }

          message.themeResponse = APIV1ThemeResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 120:
          if (tag !== 962) {
            break;
          }

          message.timerResponse = APIV1TimerResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 121:
          if (tag !== 970) {
            break;
          }

          message.transportResponse = APIV1TransportResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 122:
          if (tag !== 978) {
            break;
          }

          message.triggerResponse = APIV1TriggerResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 123:
          if (tag !== 986) {
            break;
          }

          message.videoInputsResponse = APIV1VideoInputsResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 124:
          if (tag !== 994) {
            break;
          }

          message.announcementResponse = APIV1AnnouncementResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 200:
          if (tag !== 1602) {
            break;
          }

          message.errorResponse = APIV1ErrorResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 201:
          if (tag !== 1610) {
            break;
          }

          message.updateIdentifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPIV1_Action {
    return {
      audioRequest: isSet(object.audioRequest)
        ? APIV1AudioRequest.fromJSON(object.audioRequest)
        : undefined,
      captureRequest: isSet(object.captureRequest)
        ? APIV1CaptureRequest.fromJSON(object.captureRequest)
        : undefined,
      clearingRequest: isSet(object.clearingRequest)
        ? APIV1ClearRequest.fromJSON(object.clearingRequest)
        : undefined,
      groupsRequest: isSet(object.groupsRequest)
        ? APIV1GroupsRequest.fromJSON(object.groupsRequest)
        : undefined,
      linkRequest: isSet(object.linkRequest)
        ? APIV1LinkRequest.fromJSON(object.linkRequest)
        : undefined,
      libraryRequest: isSet(object.libraryRequest)
        ? APIV1LibraryRequest.fromJSON(object.libraryRequest)
        : undefined,
      looksRequest: isSet(object.looksRequest)
        ? APIV1LooksRequest.fromJSON(object.looksRequest)
        : undefined,
      macroRequest: isSet(object.macroRequest)
        ? APIV1MacroRequest.fromJSON(object.macroRequest)
        : undefined,
      masksRequest: isSet(object.masksRequest)
        ? APIV1MasksRequest.fromJSON(object.masksRequest)
        : undefined,
      mediaRequest: isSet(object.mediaRequest)
        ? APIV1MediaRequest.fromJSON(object.mediaRequest)
        : undefined,
      messageRequest: isSet(object.messageRequest)
        ? APIV1MessageRequest.fromJSON(object.messageRequest)
        : undefined,
      miscellaneousRequest: isSet(object.miscellaneousRequest)
        ? APIV1MiscellaneousRequest.fromJSON(object.miscellaneousRequest)
        : undefined,
      playlistRequest: isSet(object.playlistRequest)
        ? APIV1PlaylistRequest.fromJSON(object.playlistRequest)
        : undefined,
      prerollRequest: isSet(object.prerollRequest)
        ? APIV1PrerollRequest.fromJSON(object.prerollRequest)
        : undefined,
      presentationRequest: isSet(object.presentationRequest)
        ? APIV1PresentationRequest.fromJSON(object.presentationRequest)
        : undefined,
      propRequest: isSet(object.propRequest)
        ? APIV1PropRequest.fromJSON(object.propRequest)
        : undefined,
      stageRequest: isSet(object.stageRequest)
        ? APIV1StageRequest.fromJSON(object.stageRequest)
        : undefined,
      statusRequest: isSet(object.statusRequest)
        ? APIV1StatusRequest.fromJSON(object.statusRequest)
        : undefined,
      themeRequest: isSet(object.themeRequest)
        ? APIV1ThemeRequest.fromJSON(object.themeRequest)
        : undefined,
      timerRequest: isSet(object.timerRequest)
        ? APIV1TimerRequest.fromJSON(object.timerRequest)
        : undefined,
      transportRequest: isSet(object.transportRequest)
        ? APIV1TransportRequest.fromJSON(object.transportRequest)
        : undefined,
      triggerRequest: isSet(object.triggerRequest)
        ? APIV1TriggerRequest.fromJSON(object.triggerRequest)
        : undefined,
      videoInputsRequest: isSet(object.videoInputsRequest)
        ? APIV1VideoInputsRequest.fromJSON(object.videoInputsRequest)
        : undefined,
      announcementRequest: isSet(object.announcementRequest)
        ? APIV1AnnouncementRequest.fromJSON(object.announcementRequest)
        : undefined,
      audioResponse: isSet(object.audioResponse)
        ? APIV1AudioResponse.fromJSON(object.audioResponse)
        : undefined,
      captureResponse: isSet(object.captureResponse)
        ? APIV1CaptureResponse.fromJSON(object.captureResponse)
        : undefined,
      clearingResponse: isSet(object.clearingResponse)
        ? APIV1ClearResponse.fromJSON(object.clearingResponse)
        : undefined,
      groupsResponse: isSet(object.groupsResponse)
        ? APIV1GroupsResponse.fromJSON(object.groupsResponse)
        : undefined,
      linkResponse: isSet(object.linkResponse)
        ? APIV1LinkResponse.fromJSON(object.linkResponse)
        : undefined,
      libraryResponse: isSet(object.libraryResponse)
        ? APIV1LibraryResponse.fromJSON(object.libraryResponse)
        : undefined,
      looksResponse: isSet(object.looksResponse)
        ? APIV1LooksResponse.fromJSON(object.looksResponse)
        : undefined,
      macroResponse: isSet(object.macroResponse)
        ? APIV1MacroResponse.fromJSON(object.macroResponse)
        : undefined,
      masksResponse: isSet(object.masksResponse)
        ? APIV1MasksResponse.fromJSON(object.masksResponse)
        : undefined,
      mediaResponse: isSet(object.mediaResponse)
        ? APIV1MediaResponse.fromJSON(object.mediaResponse)
        : undefined,
      messageResponse: isSet(object.messageResponse)
        ? APIV1MessageResponse.fromJSON(object.messageResponse)
        : undefined,
      miscellaneousResponse: isSet(object.miscellaneousResponse)
        ? APIV1MiscellaneousResponse.fromJSON(object.miscellaneousResponse)
        : undefined,
      playlistResponse: isSet(object.playlistResponse)
        ? APIV1PlaylistResponse.fromJSON(object.playlistResponse)
        : undefined,
      prerollResponse: isSet(object.prerollResponse)
        ? APIV1PrerollResponse.fromJSON(object.prerollResponse)
        : undefined,
      presentationResponse: isSet(object.presentationResponse)
        ? APIV1PresentationResponse.fromJSON(object.presentationResponse)
        : undefined,
      propResponse: isSet(object.propResponse)
        ? APIV1PropResponse.fromJSON(object.propResponse)
        : undefined,
      stageResponse: isSet(object.stageResponse)
        ? APIV1StageResponse.fromJSON(object.stageResponse)
        : undefined,
      statusResponse: isSet(object.statusResponse)
        ? APIV1StatusResponse.fromJSON(object.statusResponse)
        : undefined,
      themeResponse: isSet(object.themeResponse)
        ? APIV1ThemeResponse.fromJSON(object.themeResponse)
        : undefined,
      timerResponse: isSet(object.timerResponse)
        ? APIV1TimerResponse.fromJSON(object.timerResponse)
        : undefined,
      transportResponse: isSet(object.transportResponse)
        ? APIV1TransportResponse.fromJSON(object.transportResponse)
        : undefined,
      triggerResponse: isSet(object.triggerResponse)
        ? APIV1TriggerResponse.fromJSON(object.triggerResponse)
        : undefined,
      videoInputsResponse: isSet(object.videoInputsResponse)
        ? APIV1VideoInputsResponse.fromJSON(object.videoInputsResponse)
        : undefined,
      announcementResponse: isSet(object.announcementResponse)
        ? APIV1AnnouncementResponse.fromJSON(object.announcementResponse)
        : undefined,
      errorResponse: isSet(object.errorResponse)
        ? APIV1ErrorResponse.fromJSON(object.errorResponse)
        : undefined,
      updateIdentifier: isSet(object.updateIdentifier)
        ? globalThis.String(object.updateIdentifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPIV1_Action): unknown {
    const obj: any = {};
    if (message.audioRequest !== undefined) {
      obj.audioRequest = APIV1AudioRequest.toJSON(message.audioRequest);
    }
    if (message.captureRequest !== undefined) {
      obj.captureRequest = APIV1CaptureRequest.toJSON(message.captureRequest);
    }
    if (message.clearingRequest !== undefined) {
      obj.clearingRequest = APIV1ClearRequest.toJSON(message.clearingRequest);
    }
    if (message.groupsRequest !== undefined) {
      obj.groupsRequest = APIV1GroupsRequest.toJSON(message.groupsRequest);
    }
    if (message.linkRequest !== undefined) {
      obj.linkRequest = APIV1LinkRequest.toJSON(message.linkRequest);
    }
    if (message.libraryRequest !== undefined) {
      obj.libraryRequest = APIV1LibraryRequest.toJSON(message.libraryRequest);
    }
    if (message.looksRequest !== undefined) {
      obj.looksRequest = APIV1LooksRequest.toJSON(message.looksRequest);
    }
    if (message.macroRequest !== undefined) {
      obj.macroRequest = APIV1MacroRequest.toJSON(message.macroRequest);
    }
    if (message.masksRequest !== undefined) {
      obj.masksRequest = APIV1MasksRequest.toJSON(message.masksRequest);
    }
    if (message.mediaRequest !== undefined) {
      obj.mediaRequest = APIV1MediaRequest.toJSON(message.mediaRequest);
    }
    if (message.messageRequest !== undefined) {
      obj.messageRequest = APIV1MessageRequest.toJSON(message.messageRequest);
    }
    if (message.miscellaneousRequest !== undefined) {
      obj.miscellaneousRequest = APIV1MiscellaneousRequest.toJSON(
        message.miscellaneousRequest,
      );
    }
    if (message.playlistRequest !== undefined) {
      obj.playlistRequest = APIV1PlaylistRequest.toJSON(
        message.playlistRequest,
      );
    }
    if (message.prerollRequest !== undefined) {
      obj.prerollRequest = APIV1PrerollRequest.toJSON(message.prerollRequest);
    }
    if (message.presentationRequest !== undefined) {
      obj.presentationRequest = APIV1PresentationRequest.toJSON(
        message.presentationRequest,
      );
    }
    if (message.propRequest !== undefined) {
      obj.propRequest = APIV1PropRequest.toJSON(message.propRequest);
    }
    if (message.stageRequest !== undefined) {
      obj.stageRequest = APIV1StageRequest.toJSON(message.stageRequest);
    }
    if (message.statusRequest !== undefined) {
      obj.statusRequest = APIV1StatusRequest.toJSON(message.statusRequest);
    }
    if (message.themeRequest !== undefined) {
      obj.themeRequest = APIV1ThemeRequest.toJSON(message.themeRequest);
    }
    if (message.timerRequest !== undefined) {
      obj.timerRequest = APIV1TimerRequest.toJSON(message.timerRequest);
    }
    if (message.transportRequest !== undefined) {
      obj.transportRequest = APIV1TransportRequest.toJSON(
        message.transportRequest,
      );
    }
    if (message.triggerRequest !== undefined) {
      obj.triggerRequest = APIV1TriggerRequest.toJSON(message.triggerRequest);
    }
    if (message.videoInputsRequest !== undefined) {
      obj.videoInputsRequest = APIV1VideoInputsRequest.toJSON(
        message.videoInputsRequest,
      );
    }
    if (message.announcementRequest !== undefined) {
      obj.announcementRequest = APIV1AnnouncementRequest.toJSON(
        message.announcementRequest,
      );
    }
    if (message.audioResponse !== undefined) {
      obj.audioResponse = APIV1AudioResponse.toJSON(message.audioResponse);
    }
    if (message.captureResponse !== undefined) {
      obj.captureResponse = APIV1CaptureResponse.toJSON(
        message.captureResponse,
      );
    }
    if (message.clearingResponse !== undefined) {
      obj.clearingResponse = APIV1ClearResponse.toJSON(
        message.clearingResponse,
      );
    }
    if (message.groupsResponse !== undefined) {
      obj.groupsResponse = APIV1GroupsResponse.toJSON(message.groupsResponse);
    }
    if (message.linkResponse !== undefined) {
      obj.linkResponse = APIV1LinkResponse.toJSON(message.linkResponse);
    }
    if (message.libraryResponse !== undefined) {
      obj.libraryResponse = APIV1LibraryResponse.toJSON(
        message.libraryResponse,
      );
    }
    if (message.looksResponse !== undefined) {
      obj.looksResponse = APIV1LooksResponse.toJSON(message.looksResponse);
    }
    if (message.macroResponse !== undefined) {
      obj.macroResponse = APIV1MacroResponse.toJSON(message.macroResponse);
    }
    if (message.masksResponse !== undefined) {
      obj.masksResponse = APIV1MasksResponse.toJSON(message.masksResponse);
    }
    if (message.mediaResponse !== undefined) {
      obj.mediaResponse = APIV1MediaResponse.toJSON(message.mediaResponse);
    }
    if (message.messageResponse !== undefined) {
      obj.messageResponse = APIV1MessageResponse.toJSON(
        message.messageResponse,
      );
    }
    if (message.miscellaneousResponse !== undefined) {
      obj.miscellaneousResponse = APIV1MiscellaneousResponse.toJSON(
        message.miscellaneousResponse,
      );
    }
    if (message.playlistResponse !== undefined) {
      obj.playlistResponse = APIV1PlaylistResponse.toJSON(
        message.playlistResponse,
      );
    }
    if (message.prerollResponse !== undefined) {
      obj.prerollResponse = APIV1PrerollResponse.toJSON(
        message.prerollResponse,
      );
    }
    if (message.presentationResponse !== undefined) {
      obj.presentationResponse = APIV1PresentationResponse.toJSON(
        message.presentationResponse,
      );
    }
    if (message.propResponse !== undefined) {
      obj.propResponse = APIV1PropResponse.toJSON(message.propResponse);
    }
    if (message.stageResponse !== undefined) {
      obj.stageResponse = APIV1StageResponse.toJSON(message.stageResponse);
    }
    if (message.statusResponse !== undefined) {
      obj.statusResponse = APIV1StatusResponse.toJSON(message.statusResponse);
    }
    if (message.themeResponse !== undefined) {
      obj.themeResponse = APIV1ThemeResponse.toJSON(message.themeResponse);
    }
    if (message.timerResponse !== undefined) {
      obj.timerResponse = APIV1TimerResponse.toJSON(message.timerResponse);
    }
    if (message.transportResponse !== undefined) {
      obj.transportResponse = APIV1TransportResponse.toJSON(
        message.transportResponse,
      );
    }
    if (message.triggerResponse !== undefined) {
      obj.triggerResponse = APIV1TriggerResponse.toJSON(
        message.triggerResponse,
      );
    }
    if (message.videoInputsResponse !== undefined) {
      obj.videoInputsResponse = APIV1VideoInputsResponse.toJSON(
        message.videoInputsResponse,
      );
    }
    if (message.announcementResponse !== undefined) {
      obj.announcementResponse = APIV1AnnouncementResponse.toJSON(
        message.announcementResponse,
      );
    }
    if (message.errorResponse !== undefined) {
      obj.errorResponse = APIV1ErrorResponse.toJSON(message.errorResponse);
    }
    if (message.updateIdentifier !== undefined) {
      obj.updateIdentifier = message.updateIdentifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPIV1_Action>, I>>(
    base?: I,
  ): NetworkAPIV1_Action {
    return NetworkAPIV1_Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkAPIV1_Action>, I>>(
    object: I,
  ): NetworkAPIV1_Action {
    const message = createBaseNetworkAPIV1_Action();
    message.audioRequest =
      object.audioRequest !== undefined && object.audioRequest !== null
        ? APIV1AudioRequest.fromPartial(object.audioRequest)
        : undefined;
    message.captureRequest =
      object.captureRequest !== undefined && object.captureRequest !== null
        ? APIV1CaptureRequest.fromPartial(object.captureRequest)
        : undefined;
    message.clearingRequest =
      object.clearingRequest !== undefined && object.clearingRequest !== null
        ? APIV1ClearRequest.fromPartial(object.clearingRequest)
        : undefined;
    message.groupsRequest =
      object.groupsRequest !== undefined && object.groupsRequest !== null
        ? APIV1GroupsRequest.fromPartial(object.groupsRequest)
        : undefined;
    message.linkRequest =
      object.linkRequest !== undefined && object.linkRequest !== null
        ? APIV1LinkRequest.fromPartial(object.linkRequest)
        : undefined;
    message.libraryRequest =
      object.libraryRequest !== undefined && object.libraryRequest !== null
        ? APIV1LibraryRequest.fromPartial(object.libraryRequest)
        : undefined;
    message.looksRequest =
      object.looksRequest !== undefined && object.looksRequest !== null
        ? APIV1LooksRequest.fromPartial(object.looksRequest)
        : undefined;
    message.macroRequest =
      object.macroRequest !== undefined && object.macroRequest !== null
        ? APIV1MacroRequest.fromPartial(object.macroRequest)
        : undefined;
    message.masksRequest =
      object.masksRequest !== undefined && object.masksRequest !== null
        ? APIV1MasksRequest.fromPartial(object.masksRequest)
        : undefined;
    message.mediaRequest =
      object.mediaRequest !== undefined && object.mediaRequest !== null
        ? APIV1MediaRequest.fromPartial(object.mediaRequest)
        : undefined;
    message.messageRequest =
      object.messageRequest !== undefined && object.messageRequest !== null
        ? APIV1MessageRequest.fromPartial(object.messageRequest)
        : undefined;
    message.miscellaneousRequest =
      object.miscellaneousRequest !== undefined &&
      object.miscellaneousRequest !== null
        ? APIV1MiscellaneousRequest.fromPartial(object.miscellaneousRequest)
        : undefined;
    message.playlistRequest =
      object.playlistRequest !== undefined && object.playlistRequest !== null
        ? APIV1PlaylistRequest.fromPartial(object.playlistRequest)
        : undefined;
    message.prerollRequest =
      object.prerollRequest !== undefined && object.prerollRequest !== null
        ? APIV1PrerollRequest.fromPartial(object.prerollRequest)
        : undefined;
    message.presentationRequest =
      object.presentationRequest !== undefined &&
      object.presentationRequest !== null
        ? APIV1PresentationRequest.fromPartial(object.presentationRequest)
        : undefined;
    message.propRequest =
      object.propRequest !== undefined && object.propRequest !== null
        ? APIV1PropRequest.fromPartial(object.propRequest)
        : undefined;
    message.stageRequest =
      object.stageRequest !== undefined && object.stageRequest !== null
        ? APIV1StageRequest.fromPartial(object.stageRequest)
        : undefined;
    message.statusRequest =
      object.statusRequest !== undefined && object.statusRequest !== null
        ? APIV1StatusRequest.fromPartial(object.statusRequest)
        : undefined;
    message.themeRequest =
      object.themeRequest !== undefined && object.themeRequest !== null
        ? APIV1ThemeRequest.fromPartial(object.themeRequest)
        : undefined;
    message.timerRequest =
      object.timerRequest !== undefined && object.timerRequest !== null
        ? APIV1TimerRequest.fromPartial(object.timerRequest)
        : undefined;
    message.transportRequest =
      object.transportRequest !== undefined && object.transportRequest !== null
        ? APIV1TransportRequest.fromPartial(object.transportRequest)
        : undefined;
    message.triggerRequest =
      object.triggerRequest !== undefined && object.triggerRequest !== null
        ? APIV1TriggerRequest.fromPartial(object.triggerRequest)
        : undefined;
    message.videoInputsRequest =
      object.videoInputsRequest !== undefined &&
      object.videoInputsRequest !== null
        ? APIV1VideoInputsRequest.fromPartial(object.videoInputsRequest)
        : undefined;
    message.announcementRequest =
      object.announcementRequest !== undefined &&
      object.announcementRequest !== null
        ? APIV1AnnouncementRequest.fromPartial(object.announcementRequest)
        : undefined;
    message.audioResponse =
      object.audioResponse !== undefined && object.audioResponse !== null
        ? APIV1AudioResponse.fromPartial(object.audioResponse)
        : undefined;
    message.captureResponse =
      object.captureResponse !== undefined && object.captureResponse !== null
        ? APIV1CaptureResponse.fromPartial(object.captureResponse)
        : undefined;
    message.clearingResponse =
      object.clearingResponse !== undefined && object.clearingResponse !== null
        ? APIV1ClearResponse.fromPartial(object.clearingResponse)
        : undefined;
    message.groupsResponse =
      object.groupsResponse !== undefined && object.groupsResponse !== null
        ? APIV1GroupsResponse.fromPartial(object.groupsResponse)
        : undefined;
    message.linkResponse =
      object.linkResponse !== undefined && object.linkResponse !== null
        ? APIV1LinkResponse.fromPartial(object.linkResponse)
        : undefined;
    message.libraryResponse =
      object.libraryResponse !== undefined && object.libraryResponse !== null
        ? APIV1LibraryResponse.fromPartial(object.libraryResponse)
        : undefined;
    message.looksResponse =
      object.looksResponse !== undefined && object.looksResponse !== null
        ? APIV1LooksResponse.fromPartial(object.looksResponse)
        : undefined;
    message.macroResponse =
      object.macroResponse !== undefined && object.macroResponse !== null
        ? APIV1MacroResponse.fromPartial(object.macroResponse)
        : undefined;
    message.masksResponse =
      object.masksResponse !== undefined && object.masksResponse !== null
        ? APIV1MasksResponse.fromPartial(object.masksResponse)
        : undefined;
    message.mediaResponse =
      object.mediaResponse !== undefined && object.mediaResponse !== null
        ? APIV1MediaResponse.fromPartial(object.mediaResponse)
        : undefined;
    message.messageResponse =
      object.messageResponse !== undefined && object.messageResponse !== null
        ? APIV1MessageResponse.fromPartial(object.messageResponse)
        : undefined;
    message.miscellaneousResponse =
      object.miscellaneousResponse !== undefined &&
      object.miscellaneousResponse !== null
        ? APIV1MiscellaneousResponse.fromPartial(object.miscellaneousResponse)
        : undefined;
    message.playlistResponse =
      object.playlistResponse !== undefined && object.playlistResponse !== null
        ? APIV1PlaylistResponse.fromPartial(object.playlistResponse)
        : undefined;
    message.prerollResponse =
      object.prerollResponse !== undefined && object.prerollResponse !== null
        ? APIV1PrerollResponse.fromPartial(object.prerollResponse)
        : undefined;
    message.presentationResponse =
      object.presentationResponse !== undefined &&
      object.presentationResponse !== null
        ? APIV1PresentationResponse.fromPartial(object.presentationResponse)
        : undefined;
    message.propResponse =
      object.propResponse !== undefined && object.propResponse !== null
        ? APIV1PropResponse.fromPartial(object.propResponse)
        : undefined;
    message.stageResponse =
      object.stageResponse !== undefined && object.stageResponse !== null
        ? APIV1StageResponse.fromPartial(object.stageResponse)
        : undefined;
    message.statusResponse =
      object.statusResponse !== undefined && object.statusResponse !== null
        ? APIV1StatusResponse.fromPartial(object.statusResponse)
        : undefined;
    message.themeResponse =
      object.themeResponse !== undefined && object.themeResponse !== null
        ? APIV1ThemeResponse.fromPartial(object.themeResponse)
        : undefined;
    message.timerResponse =
      object.timerResponse !== undefined && object.timerResponse !== null
        ? APIV1TimerResponse.fromPartial(object.timerResponse)
        : undefined;
    message.transportResponse =
      object.transportResponse !== undefined &&
      object.transportResponse !== null
        ? APIV1TransportResponse.fromPartial(object.transportResponse)
        : undefined;
    message.triggerResponse =
      object.triggerResponse !== undefined && object.triggerResponse !== null
        ? APIV1TriggerResponse.fromPartial(object.triggerResponse)
        : undefined;
    message.videoInputsResponse =
      object.videoInputsResponse !== undefined &&
      object.videoInputsResponse !== null
        ? APIV1VideoInputsResponse.fromPartial(object.videoInputsResponse)
        : undefined;
    message.announcementResponse =
      object.announcementResponse !== undefined &&
      object.announcementResponse !== null
        ? APIV1AnnouncementResponse.fromPartial(object.announcementResponse)
        : undefined;
    message.errorResponse =
      object.errorResponse !== undefined && object.errorResponse !== null
        ? APIV1ErrorResponse.fromPartial(object.errorResponse)
        : undefined;
    message.updateIdentifier = object.updateIdentifier ?? undefined;
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
