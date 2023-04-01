/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  ApplicationInfo_Platform,
  applicationInfo_PlatformFromJSON,
  applicationInfo_PlatformToJSON,
  UUID,
} from './basicTypes';
import { Message_TokenValue } from './messages';
import { NetworkAPIV1 } from './proApiV1';
import { Timestamp } from './rvtimestamp';
import { Timer_Configuration } from './timers';

export const protobufPackage = 'rv.data';

export interface ProApiIn {
  handlerIn?: ProLink_HandlerIn | undefined;
  networkApi?: NetworkAPI | undefined;
  networkApiV1?: NetworkAPIV1 | undefined;
}

export interface ProApiOut {
  handlerOut?: ProLink_HandlerOut | undefined;
  clientAction?: ProLink_ClientAction | undefined;
  networkApi?: NetworkAPI | undefined;
  networkApiV1?: NetworkAPIV1 | undefined;
}

export interface ProApiNetworkConfiguration {
  enableNetwork: boolean;
  port: number;
  networkName: string;
  remoteEnable: boolean;
  remoteControlEnable: boolean;
  remoteControlPassword: string;
  remoteObserveEnable: boolean;
  remoteObservePassword: string;
  stageEnable: boolean;
  stagePassword: string;
  linkEnable: boolean;
  webResourceRoot: string;
}

export interface ProLink {}

export interface ProLink_GroupDefinition {
  timestamp: Timestamp | undefined;
  secret: string;
  name: string;
  members: ProLink_GroupDefinition_Member[];
  groupIdentifier: UUID | undefined;
}

export interface ProLink_GroupDefinition_Member {
  ip: string;
  port: number;
}

export interface ProLink_ZeroConfig {}

export interface ProLink_ZeroConfig_NetworkEnvironment {
  availableGroups: ProLink_GroupDefinition[];
  availableDevices: ProLink_MemberStatus[];
}

export interface ProLink_ZeroConfig_MulticastPacket {
  group: ProLink_GroupDefinition | undefined;
  device: ProLink_MemberStatus | undefined;
}

export interface ProLink_TowerMessage {}

export interface ProLink_TowerMessage_TowerStatusRequest {}

export interface ProLink_TowerMessage_TowerStatusResponse {
  memberName: string;
  groupDefinition?: ProLink_GroupDefinition | undefined;
}

export interface ProLink_TowerMessage_TowerAddMemberRequest {
  groupDefinition?: ProLink_GroupDefinition | undefined;
  joiningMember?: ProLink_GroupDefinition_Member | undefined;
}

export interface ProLink_TowerMessage_TowerRemoveMemberRequest {
  removingMember: ProLink_GroupDefinition_Member | undefined;
}

export interface ProLink_TowerMessage_TowerAddMemberResponse {
  groupDefinition?: ProLink_GroupDefinition | undefined;
  accept?: ProLink_TowerMessage_TowerAddMemberResponse_Accept | undefined;
  declineReason?:
    | ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason
    | undefined;
}

export enum ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason {
  ALREADY_IN_GROUP = 0,
  USER_DECLINED = 1,
  UNRECOGNIZED = -1,
}

export function proLink_TowerMessage_TowerAddMemberResponse_DeclineReasonFromJSON(
  object: any,
): ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason {
  switch (object) {
    case 0:
    case 'ALREADY_IN_GROUP':
      return ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.ALREADY_IN_GROUP;
    case 1:
    case 'USER_DECLINED':
      return ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.USER_DECLINED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.UNRECOGNIZED;
  }
}

export function proLink_TowerMessage_TowerAddMemberResponse_DeclineReasonToJSON(
  object: ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason,
): string {
  switch (object) {
    case ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.ALREADY_IN_GROUP:
      return 'ALREADY_IN_GROUP';
    case ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.USER_DECLINED:
      return 'USER_DECLINED';
    case ProLink_TowerMessage_TowerAddMemberResponse_DeclineReason.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ProLink_TowerMessage_TowerAddMemberResponse_Accept {}

export interface ProLink_TowerMessage_TowerHeartbeatRequest {}

export interface ProLink_TowerMessage_TowerHeartbeatResponse {
  groupDefinition: ProLink_GroupDefinition | undefined;
}

export interface ProLink_MemberStatus {
  ip: string;
  port: number;
  name: string;
  platform: ApplicationInfo_Platform;
  osVersion: string;
  hostDescription: string;
  apiVersion: string;
  connectionStatus: ProLink_MemberStatus_ConnectionStatus;
}

export enum ProLink_MemberStatus_ConnectionStatus {
  CONNECTION_STATUS_UNKNOWN = 0,
  CONNECTION_STATUS_CONNECTED = 1,
  CONNECTION_STATUS_DISCONNECTED = 2,
  UNRECOGNIZED = -1,
}

export function proLink_MemberStatus_ConnectionStatusFromJSON(
  object: any,
): ProLink_MemberStatus_ConnectionStatus {
  switch (object) {
    case 0:
    case 'CONNECTION_STATUS_UNKNOWN':
      return ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_UNKNOWN;
    case 1:
    case 'CONNECTION_STATUS_CONNECTED':
      return ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_CONNECTED;
    case 2:
    case 'CONNECTION_STATUS_DISCONNECTED':
      return ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_DISCONNECTED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ProLink_MemberStatus_ConnectionStatus.UNRECOGNIZED;
  }
}

export function proLink_MemberStatus_ConnectionStatusToJSON(
  object: ProLink_MemberStatus_ConnectionStatus,
): string {
  switch (object) {
    case ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_UNKNOWN:
      return 'CONNECTION_STATUS_UNKNOWN';
    case ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_CONNECTED:
      return 'CONNECTION_STATUS_CONNECTED';
    case ProLink_MemberStatus_ConnectionStatus.CONNECTION_STATUS_DISCONNECTED:
      return 'CONNECTION_STATUS_DISCONNECTED';
    case ProLink_MemberStatus_ConnectionStatus.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ProLink_ClientAction {
  addConnection?: ProLink_ClientAction_AddConnection | undefined;
  removeConnection?: ProLink_ClientAction_RemoveConnection | undefined;
  cancelAction?: ProLink_ClientAction_CancelAction | undefined;
  renderTime?: ProLink_ClientAction_RenderTime | undefined;
}

export interface ProLink_ClientAction_AddConnection {
  ip: string;
  port: number;
  groupName: string;
}

export interface ProLink_ClientAction_RemoveConnection {
  ip: string;
  port: number;
}

export interface ProLink_ClientAction_CancelAction {}

export interface ProLink_ClientAction_RenderTime {
  latency: number;
  renderTime: number;
}

export interface ProLink_HandlerIn {
  groupName?: ProLink_HandlerIn_GroupName | undefined;
  groupDefinitionRequest?: ProLink_HandlerIn_GroupDefinitionRequest | undefined;
  groupJoinConfirmation?: ProLink_HandlerIn_GroupJoinConfirmation | undefined;
  groupJoinPassword?: ProLink_HandlerIn_GroupJoinPassword | undefined;
  addConnectionResult?: ProLink_HandlerIn_AddConnectionResult | undefined;
  groupUpdate?: ProLink_GroupDefinition | undefined;
  memberStatusChange?: ProLink_HandlerIn_MemberStatusChange | undefined;
  propresenterInfo?: ProLink_HandlerIn_ProPresenterInfo | undefined;
  serverState?: ProLink_HandlerIn_ServerState | undefined;
  configurationRequest?: ProLink_HandlerIn_ConfigurationRequest | undefined;
  zeroconfigNetworkEnvironmentChange?:
    | ProLink_ZeroConfig_NetworkEnvironment
    | undefined;
  logRequest?: ProLink_HandlerIn_LogRequest | undefined;
}

export interface ProLink_HandlerIn_GroupName {}

export interface ProLink_HandlerIn_GroupDefinitionRequest {}

export interface ProLink_HandlerIn_GroupJoinConfirmation {
  name: string;
}

export interface ProLink_HandlerIn_GroupJoinPassword {
  name: string;
}

export interface ProLink_HandlerIn_AddConnectionResult {
  success?: ProLink_HandlerIn_AddConnectionResult_Success | undefined;
  failure?: ProLink_HandlerIn_AddConnectionResult_Failure | undefined;
}

export interface ProLink_HandlerIn_AddConnectionResult_Success {
  newGroupDefinition: ProLink_GroupDefinition | undefined;
}

export interface ProLink_HandlerIn_AddConnectionResult_Failure {
  unexpected?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected
    | undefined;
  declined?: ProLink_HandlerIn_AddConnectionResult_Failure_Declined | undefined;
  timeout?: ProLink_HandlerIn_AddConnectionResult_Failure_Timeout | undefined;
  linkDisabled?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled
    | undefined;
  inOtherGroup?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup
    | undefined;
  invalidIpAddress?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress
    | undefined;
  alreadyInGroup?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup
    | undefined;
  couldNotAdd?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd
    | undefined;
  couldNotJoin?:
    | ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin
    | undefined;
}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_Declined {}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
  memberName: string;
  groupName: string;
}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
  memberName: string;
  groupName: string;
}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
  memberName: string;
}

export interface ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
  groupName: string;
}

export interface ProLink_HandlerIn_MemberStatusChange {
  members: ProLink_MemberStatus[];
}

export interface ProLink_HandlerIn_ProPresenterInfo {}

export interface ProLink_HandlerIn_ServerState {
  localIp: string;
  publicIp: string;
  port: number;
  success: boolean;
}

export interface ProLink_HandlerIn_ConfigurationRequest {}

export interface ProLink_HandlerIn_LogRequest {
  severity: ProLink_HandlerIn_LogRequest_Severity;
  message: string;
}

export enum ProLink_HandlerIn_LogRequest_Severity {
  SEVERITY_DEBUG = 0,
  SEVERITY_DEBUG_WARNING = 1,
  SEVERITY_INFO = 2,
  SEVERITY_WARNING = 3,
  SEVERITY_ERROR = 4,
  SEVERITY_FATAL_ERROR = 5,
  UNRECOGNIZED = -1,
}

export function proLink_HandlerIn_LogRequest_SeverityFromJSON(
  object: any,
): ProLink_HandlerIn_LogRequest_Severity {
  switch (object) {
    case 0:
    case 'SEVERITY_DEBUG':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_DEBUG;
    case 1:
    case 'SEVERITY_DEBUG_WARNING':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_DEBUG_WARNING;
    case 2:
    case 'SEVERITY_INFO':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_INFO;
    case 3:
    case 'SEVERITY_WARNING':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_WARNING;
    case 4:
    case 'SEVERITY_ERROR':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_ERROR;
    case 5:
    case 'SEVERITY_FATAL_ERROR':
      return ProLink_HandlerIn_LogRequest_Severity.SEVERITY_FATAL_ERROR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ProLink_HandlerIn_LogRequest_Severity.UNRECOGNIZED;
  }
}

export function proLink_HandlerIn_LogRequest_SeverityToJSON(
  object: ProLink_HandlerIn_LogRequest_Severity,
): string {
  switch (object) {
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_DEBUG:
      return 'SEVERITY_DEBUG';
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_DEBUG_WARNING:
      return 'SEVERITY_DEBUG_WARNING';
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_INFO:
      return 'SEVERITY_INFO';
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_WARNING:
      return 'SEVERITY_WARNING';
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_ERROR:
      return 'SEVERITY_ERROR';
    case ProLink_HandlerIn_LogRequest_Severity.SEVERITY_FATAL_ERROR:
      return 'SEVERITY_FATAL_ERROR';
    case ProLink_HandlerIn_LogRequest_Severity.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface ProLink_HandlerOut {
  groupName?: ProLink_HandlerOut_GroupName | undefined;
  groupDefinition?: ProLink_GroupDefinition | undefined;
  groupJoinConfirmation?: ProLink_HandlerOut_GroupJoinConfirmation | undefined;
  groupJoinPassword?: ProLink_HandlerOut_GroupJoinPassword | undefined;
  propresenterInfo?: ProLink_HandlerOut_ProPresenterInfo | undefined;
  configuration?: ProApiNetworkConfiguration | undefined;
}

export interface ProLink_HandlerOut_GroupName {
  name: string;
}

export interface ProLink_HandlerOut_GroupJoinConfirmation {
  accept: boolean;
}

export interface ProLink_HandlerOut_GroupJoinPassword {
  password: string;
}

export interface ProLink_HandlerOut_ProPresenterInfo {
  platform: ApplicationInfo_Platform;
  osVersion: string;
  hostDescription: string;
}

export interface NetworkAPI {
  action?: NetworkAPI_Action | undefined;
  serverState?: NetworkAPI_ServerState | undefined;
  groupChange?: NetworkAPI_GroupChange | undefined;
  groupResponse?: NetworkAPI_GroupResponse | undefined;
}

export interface NetworkAPI_LinkStatus {
  platform: ApplicationInfo_Platform;
  osVersion: string;
  version: string;
  description: string;
  groupInfo: NetworkAPI_Group | undefined;
}

export interface NetworkAPI_Group {
  name: string;
  members: NetworkAPI_Group_Member[];
}

export interface NetworkAPI_Group_Member {
  ipAddress: string;
  port: number;
}

export interface NetworkAPI_GroupChange {
  invite?: NetworkAPI_GroupInvite | undefined;
  join?: NetworkAPI_GroupJoin | undefined;
  kick?: NetworkAPI_GroupKick | undefined;
  status?: NetworkAPI_GroupStatus | undefined;
}

export interface NetworkAPI_GroupResponse {
  success?: NetworkAPI_GroupResponse_Success | undefined;
  status?: NetworkAPI_GroupResponse_Status | undefined;
}

export interface NetworkAPI_GroupResponse_Success {}

export interface NetworkAPI_GroupResponse_Status {
  memberName: string;
  groupName: string;
}

export interface NetworkAPI_GroupStatus {
  member: NetworkAPI_Group_Member | undefined;
}

export interface NetworkAPI_GroupInvite {
  groupInfo: NetworkAPI_Group | undefined;
  secret: string;
  prospect: NetworkAPI_Group_Member | undefined;
}

export interface NetworkAPI_GroupJoin {
  sponsor: NetworkAPI_Group_Member | undefined;
  prospect: NetworkAPI_Group_Member | undefined;
}

export interface NetworkAPI_GroupKick {
  member: NetworkAPI_Group_Member | undefined;
}

export interface NetworkAPI_ServerState {
  localIp: string;
  publicIp: string;
  port: number;
}

export interface NetworkAPI_Action {
  clear?: NetworkAPI_Action_APIClear | undefined;
  trigger?: NetworkAPI_Action_APITrigger | undefined;
  transport?: NetworkAPI_Action_APITransport | undefined;
  prop?: NetworkAPI_Action_APIProp | undefined;
  timer?: NetworkAPI_Action_APITimer | undefined;
  message?: NetworkAPI_Action_APIMessage | undefined;
  macro?: NetworkAPI_Action_APIMacro | undefined;
  look?: NetworkAPI_Action_APILook | undefined;
  stage?: NetworkAPI_Action_APIStage | undefined;
  status?: NetworkAPI_Action_APIStatus | undefined;
  statusResponse?: NetworkAPI_Action_APIStatusResponse | undefined;
  twoStepTrigger?: NetworkAPI_Action_APITwoStepTrigger | undefined;
  prerollComplete?: NetworkAPI_Action_APIPrerollComplete | undefined;
}

export interface NetworkAPI_Action_APIClear {
  layer?: NetworkAPI_Action_APIClear_Layer | undefined;
  groupIdentifier?: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export enum NetworkAPI_Action_APIClear_Layer {
  LAYER_UNKNOWN = 0,
  LAYER_VIDEO_INPUT = 1,
  LAYER_MEDIA = 2,
  LAYER_PRESENTATION = 3,
  LAYER_ANNOUNCEMENT = 4,
  LAYER_PROP = 5,
  LAYER_MESSAGE = 6,
  LAYER_AUDIO = 7,
  UNRECOGNIZED = -1,
}

export function networkAPI_Action_APIClear_LayerFromJSON(
  object: any,
): NetworkAPI_Action_APIClear_Layer {
  switch (object) {
    case 0:
    case 'LAYER_UNKNOWN':
      return NetworkAPI_Action_APIClear_Layer.LAYER_UNKNOWN;
    case 1:
    case 'LAYER_VIDEO_INPUT':
      return NetworkAPI_Action_APIClear_Layer.LAYER_VIDEO_INPUT;
    case 2:
    case 'LAYER_MEDIA':
      return NetworkAPI_Action_APIClear_Layer.LAYER_MEDIA;
    case 3:
    case 'LAYER_PRESENTATION':
      return NetworkAPI_Action_APIClear_Layer.LAYER_PRESENTATION;
    case 4:
    case 'LAYER_ANNOUNCEMENT':
      return NetworkAPI_Action_APIClear_Layer.LAYER_ANNOUNCEMENT;
    case 5:
    case 'LAYER_PROP':
      return NetworkAPI_Action_APIClear_Layer.LAYER_PROP;
    case 6:
    case 'LAYER_MESSAGE':
      return NetworkAPI_Action_APIClear_Layer.LAYER_MESSAGE;
    case 7:
    case 'LAYER_AUDIO':
      return NetworkAPI_Action_APIClear_Layer.LAYER_AUDIO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NetworkAPI_Action_APIClear_Layer.UNRECOGNIZED;
  }
}

export function networkAPI_Action_APIClear_LayerToJSON(
  object: NetworkAPI_Action_APIClear_Layer,
): string {
  switch (object) {
    case NetworkAPI_Action_APIClear_Layer.LAYER_UNKNOWN:
      return 'LAYER_UNKNOWN';
    case NetworkAPI_Action_APIClear_Layer.LAYER_VIDEO_INPUT:
      return 'LAYER_VIDEO_INPUT';
    case NetworkAPI_Action_APIClear_Layer.LAYER_MEDIA:
      return 'LAYER_MEDIA';
    case NetworkAPI_Action_APIClear_Layer.LAYER_PRESENTATION:
      return 'LAYER_PRESENTATION';
    case NetworkAPI_Action_APIClear_Layer.LAYER_ANNOUNCEMENT:
      return 'LAYER_ANNOUNCEMENT';
    case NetworkAPI_Action_APIClear_Layer.LAYER_PROP:
      return 'LAYER_PROP';
    case NetworkAPI_Action_APIClear_Layer.LAYER_MESSAGE:
      return 'LAYER_MESSAGE';
    case NetworkAPI_Action_APIClear_Layer.LAYER_AUDIO:
      return 'LAYER_AUDIO';
    case NetworkAPI_Action_APIClear_Layer.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface NetworkAPI_Action_APITwoStepTrigger {
  id: number;
  operation: NetworkAPI_Action_APITwoStepTrigger_Operation;
  renderTime: number;
  presentation?: NetworkAPI_Action_APITrigger_Presentation | undefined;
  media?: NetworkAPI_Action_APITrigger_Media | undefined;
  videoInput?: NetworkAPI_Action_APITrigger_VideoInput | undefined;
  audio?: NetworkAPI_Action_APITrigger_Audio | undefined;
  prop?: NetworkAPI_Action_APIProp_TriggerProp | undefined;
  message?: NetworkAPI_Action_APIMessage_TriggerMessage | undefined;
}

export enum NetworkAPI_Action_APITwoStepTrigger_Operation {
  OPERATION_PREROLL = 0,
  OPERATION_ACTIVATE = 1,
  UNRECOGNIZED = -1,
}

export function networkAPI_Action_APITwoStepTrigger_OperationFromJSON(
  object: any,
): NetworkAPI_Action_APITwoStepTrigger_Operation {
  switch (object) {
    case 0:
    case 'OPERATION_PREROLL':
      return NetworkAPI_Action_APITwoStepTrigger_Operation.OPERATION_PREROLL;
    case 1:
    case 'OPERATION_ACTIVATE':
      return NetworkAPI_Action_APITwoStepTrigger_Operation.OPERATION_ACTIVATE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NetworkAPI_Action_APITwoStepTrigger_Operation.UNRECOGNIZED;
  }
}

export function networkAPI_Action_APITwoStepTrigger_OperationToJSON(
  object: NetworkAPI_Action_APITwoStepTrigger_Operation,
): string {
  switch (object) {
    case NetworkAPI_Action_APITwoStepTrigger_Operation.OPERATION_PREROLL:
      return 'OPERATION_PREROLL';
    case NetworkAPI_Action_APITwoStepTrigger_Operation.OPERATION_ACTIVATE:
      return 'OPERATION_ACTIVATE';
    case NetworkAPI_Action_APITwoStepTrigger_Operation.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface NetworkAPI_Action_APIPrerollComplete {
  id: number;
  failed: boolean;
  latency: number;
}

export interface NetworkAPI_Action_APITrigger {
  presentation?: NetworkAPI_Action_APITrigger_Presentation | undefined;
  media?: NetworkAPI_Action_APITrigger_Media | undefined;
  videoInput?: NetworkAPI_Action_APITrigger_VideoInput | undefined;
  audio?: NetworkAPI_Action_APITrigger_Audio | undefined;
}

export interface NetworkAPI_Action_APITrigger_Presentation {
  playlistIndexPath?:
    | NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation
    | undefined;
  libraryIndexPath?:
    | NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation
    | undefined;
}

export interface NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
  indexPathComponents: NetworkAPI_IndexOrNameIdentifier[];
}

export interface NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
  libraryComponent: NetworkAPI_IndexOrNameIdentifier | undefined;
  presentationComponent: NetworkAPI_IndexOrNameIdentifier | undefined;
  cueComponent: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITrigger_Media {
  indexPathComponents: NetworkAPI_IndexOrNameIdentifier[];
}

export interface NetworkAPI_Action_APITrigger_VideoInput {
  videoInputId: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITrigger_Audio {
  indexPathComponents: NetworkAPI_IndexOrNameIdentifier[];
}

export interface NetworkAPI_Action_APITransport {
  layer: NetworkAPI_Action_APITransport_TransportLayer;
  play?: NetworkAPI_Action_APITransport_Play | undefined;
  pause?: NetworkAPI_Action_APITransport_Pause | undefined;
  skipBackward?: NetworkAPI_Action_APITransport_SkipBackward | undefined;
  skipForward?: NetworkAPI_Action_APITransport_SkipForward | undefined;
  goToEnd?: NetworkAPI_Action_APITransport_GoToEnd | undefined;
}

export enum NetworkAPI_Action_APITransport_TransportLayer {
  TRANSPORT_LAYER_UNKNOWN = 0,
  TRANSPORT_LAYER_PRESENTATION = 1,
  TRANSPORT_LAYER_ANNOUNCEMENT = 2,
  TRANSPORT_LAYER_AUDIO = 3,
  UNRECOGNIZED = -1,
}

export function networkAPI_Action_APITransport_TransportLayerFromJSON(
  object: any,
): NetworkAPI_Action_APITransport_TransportLayer {
  switch (object) {
    case 0:
    case 'TRANSPORT_LAYER_UNKNOWN':
      return NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_UNKNOWN;
    case 1:
    case 'TRANSPORT_LAYER_PRESENTATION':
      return NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_PRESENTATION;
    case 2:
    case 'TRANSPORT_LAYER_ANNOUNCEMENT':
      return NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_ANNOUNCEMENT;
    case 3:
    case 'TRANSPORT_LAYER_AUDIO':
      return NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_AUDIO;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return NetworkAPI_Action_APITransport_TransportLayer.UNRECOGNIZED;
  }
}

export function networkAPI_Action_APITransport_TransportLayerToJSON(
  object: NetworkAPI_Action_APITransport_TransportLayer,
): string {
  switch (object) {
    case NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_UNKNOWN:
      return 'TRANSPORT_LAYER_UNKNOWN';
    case NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_PRESENTATION:
      return 'TRANSPORT_LAYER_PRESENTATION';
    case NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_ANNOUNCEMENT:
      return 'TRANSPORT_LAYER_ANNOUNCEMENT';
    case NetworkAPI_Action_APITransport_TransportLayer.TRANSPORT_LAYER_AUDIO:
      return 'TRANSPORT_LAYER_AUDIO';
    case NetworkAPI_Action_APITransport_TransportLayer.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface NetworkAPI_Action_APITransport_Play {}

export interface NetworkAPI_Action_APITransport_Pause {}

export interface NetworkAPI_Action_APITransport_SkipBackward {
  seconds: number;
}

export interface NetworkAPI_Action_APITransport_SkipForward {
  seconds: number;
}

export interface NetworkAPI_Action_APITransport_GoToEnd {
  secondsToEnd: number;
}

export interface NetworkAPI_Action_APIProp {
  trigger?: NetworkAPI_Action_APIProp_TriggerProp | undefined;
  clear?: NetworkAPI_Action_APIProp_ClearProp | undefined;
}

export interface NetworkAPI_Action_APIProp_TriggerProp {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APIProp_ClearProp {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITimer {
  start?: NetworkAPI_Action_APITimer_StartTimer | undefined;
  stop?: NetworkAPI_Action_APITimer_StopTimer | undefined;
  reset?: NetworkAPI_Action_APITimer_ResetTimer | undefined;
  configure?: NetworkAPI_Action_APITimer_ConfigureTimer | undefined;
}

export interface NetworkAPI_Action_APITimer_StartTimer {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITimer_StopTimer {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITimer_ResetTimer {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APITimer_ConfigureTimer {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
  configuration: Timer_Configuration | undefined;
}

export interface NetworkAPI_Action_APIMessage {
  trigger?: NetworkAPI_Action_APIMessage_TriggerMessage | undefined;
  clear?: NetworkAPI_Action_APIMessage_ClearMessage | undefined;
}

export interface NetworkAPI_Action_APIMessage_TriggerMessage {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
  tokenValues: Message_TokenValue[];
}

export interface NetworkAPI_Action_APIMessage_ClearMessage {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APIMacro {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APILook {
  identifier: NetworkAPI_IndexOrNameIdentifier | undefined;
}

export interface NetworkAPI_Action_APIStage {
  layouts?: NetworkAPI_Action_APIStage_StageLayouts | undefined;
  message?: NetworkAPI_Action_APIStage_StageMessage | undefined;
}

export interface NetworkAPI_Action_APIStage_StageLayouts {
  layouts: NetworkAPI_IndexOrNameIdentifierPair[];
}

export interface NetworkAPI_Action_APIStage_StageMessage {
  showMessage?: NetworkAPI_Action_APIStage_StageMessage_ShowMessage | undefined;
  clearMessage?:
    | NetworkAPI_Action_APIStage_StageMessage_ClearMessage
    | undefined;
  hideMessage?: NetworkAPI_Action_APIStage_StageMessage_HideMessage | undefined;
}

export interface NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
  message: string;
}

export interface NetworkAPI_Action_APIStage_StageMessage_ClearMessage {}

export interface NetworkAPI_Action_APIStage_StageMessage_HideMessage {}

export interface NetworkAPI_Action_StatusRequest {}

export interface NetworkAPI_Action_APIStatus {}

export interface NetworkAPI_Action_APIStatusResponse {
  groupDefinition: ProLink_GroupDefinition | undefined;
  status: ProLink_MemberStatus | undefined;
}

export interface NetworkAPI_IndexOrNameIdentifier {
  index?: number | undefined;
  name?: string | undefined;
}

export interface NetworkAPI_IndexOrNameIdentifierPair {
  key: NetworkAPI_IndexOrNameIdentifier | undefined;
  value: NetworkAPI_IndexOrNameIdentifier | undefined;
}

function createBaseProApiIn(): ProApiIn {
  return {
    handlerIn: undefined,
    networkApi: undefined,
    networkApiV1: undefined,
  };
}

export const ProApiIn = {
  encode(
    message: ProApiIn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.handlerIn !== undefined) {
      ProLink_HandlerIn.encode(
        message.handlerIn,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.networkApi !== undefined) {
      NetworkAPI.encode(message.networkApi, writer.uint32(18).fork()).ldelim();
    }
    if (message.networkApiV1 !== undefined) {
      NetworkAPIV1.encode(
        message.networkApiV1,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProApiIn {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProApiIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.handlerIn = ProLink_HandlerIn.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.networkApi = NetworkAPI.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.networkApiV1 = NetworkAPIV1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProApiIn {
    return {
      handlerIn: isSet(object.handlerIn)
        ? ProLink_HandlerIn.fromJSON(object.handlerIn)
        : undefined,
      networkApi: isSet(object.networkApi)
        ? NetworkAPI.fromJSON(object.networkApi)
        : undefined,
      networkApiV1: isSet(object.networkApiV1)
        ? NetworkAPIV1.fromJSON(object.networkApiV1)
        : undefined,
    };
  },

  toJSON(message: ProApiIn): unknown {
    const obj: any = {};
    message.handlerIn !== undefined &&
      (obj.handlerIn = message.handlerIn
        ? ProLink_HandlerIn.toJSON(message.handlerIn)
        : undefined);
    message.networkApi !== undefined &&
      (obj.networkApi = message.networkApi
        ? NetworkAPI.toJSON(message.networkApi)
        : undefined);
    message.networkApiV1 !== undefined &&
      (obj.networkApiV1 = message.networkApiV1
        ? NetworkAPIV1.toJSON(message.networkApiV1)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProApiIn>, I>>(base?: I): ProApiIn {
    return ProApiIn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProApiIn>, I>>(object: I): ProApiIn {
    const message = createBaseProApiIn();
    message.handlerIn =
      object.handlerIn !== undefined && object.handlerIn !== null
        ? ProLink_HandlerIn.fromPartial(object.handlerIn)
        : undefined;
    message.networkApi =
      object.networkApi !== undefined && object.networkApi !== null
        ? NetworkAPI.fromPartial(object.networkApi)
        : undefined;
    message.networkApiV1 =
      object.networkApiV1 !== undefined && object.networkApiV1 !== null
        ? NetworkAPIV1.fromPartial(object.networkApiV1)
        : undefined;
    return message;
  },
};

function createBaseProApiOut(): ProApiOut {
  return {
    handlerOut: undefined,
    clientAction: undefined,
    networkApi: undefined,
    networkApiV1: undefined,
  };
}

export const ProApiOut = {
  encode(
    message: ProApiOut,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.handlerOut !== undefined) {
      ProLink_HandlerOut.encode(
        message.handlerOut,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.clientAction !== undefined) {
      ProLink_ClientAction.encode(
        message.clientAction,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.networkApi !== undefined) {
      NetworkAPI.encode(message.networkApi, writer.uint32(26).fork()).ldelim();
    }
    if (message.networkApiV1 !== undefined) {
      NetworkAPIV1.encode(
        message.networkApiV1,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProApiOut {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProApiOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.handlerOut = ProLink_HandlerOut.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clientAction = ProLink_ClientAction.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.networkApi = NetworkAPI.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.networkApiV1 = NetworkAPIV1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProApiOut {
    return {
      handlerOut: isSet(object.handlerOut)
        ? ProLink_HandlerOut.fromJSON(object.handlerOut)
        : undefined,
      clientAction: isSet(object.clientAction)
        ? ProLink_ClientAction.fromJSON(object.clientAction)
        : undefined,
      networkApi: isSet(object.networkApi)
        ? NetworkAPI.fromJSON(object.networkApi)
        : undefined,
      networkApiV1: isSet(object.networkApiV1)
        ? NetworkAPIV1.fromJSON(object.networkApiV1)
        : undefined,
    };
  },

  toJSON(message: ProApiOut): unknown {
    const obj: any = {};
    message.handlerOut !== undefined &&
      (obj.handlerOut = message.handlerOut
        ? ProLink_HandlerOut.toJSON(message.handlerOut)
        : undefined);
    message.clientAction !== undefined &&
      (obj.clientAction = message.clientAction
        ? ProLink_ClientAction.toJSON(message.clientAction)
        : undefined);
    message.networkApi !== undefined &&
      (obj.networkApi = message.networkApi
        ? NetworkAPI.toJSON(message.networkApi)
        : undefined);
    message.networkApiV1 !== undefined &&
      (obj.networkApiV1 = message.networkApiV1
        ? NetworkAPIV1.toJSON(message.networkApiV1)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProApiOut>, I>>(base?: I): ProApiOut {
    return ProApiOut.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProApiOut>, I>>(
    object: I,
  ): ProApiOut {
    const message = createBaseProApiOut();
    message.handlerOut =
      object.handlerOut !== undefined && object.handlerOut !== null
        ? ProLink_HandlerOut.fromPartial(object.handlerOut)
        : undefined;
    message.clientAction =
      object.clientAction !== undefined && object.clientAction !== null
        ? ProLink_ClientAction.fromPartial(object.clientAction)
        : undefined;
    message.networkApi =
      object.networkApi !== undefined && object.networkApi !== null
        ? NetworkAPI.fromPartial(object.networkApi)
        : undefined;
    message.networkApiV1 =
      object.networkApiV1 !== undefined && object.networkApiV1 !== null
        ? NetworkAPIV1.fromPartial(object.networkApiV1)
        : undefined;
    return message;
  },
};

function createBaseProApiNetworkConfiguration(): ProApiNetworkConfiguration {
  return {
    enableNetwork: false,
    port: 0,
    networkName: '',
    remoteEnable: false,
    remoteControlEnable: false,
    remoteControlPassword: '',
    remoteObserveEnable: false,
    remoteObservePassword: '',
    stageEnable: false,
    stagePassword: '',
    linkEnable: false,
    webResourceRoot: '',
  };
}

export const ProApiNetworkConfiguration = {
  encode(
    message: ProApiNetworkConfiguration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.enableNetwork === true) {
      writer.uint32(8).bool(message.enableNetwork);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.networkName !== '') {
      writer.uint32(26).string(message.networkName);
    }
    if (message.remoteEnable === true) {
      writer.uint32(32).bool(message.remoteEnable);
    }
    if (message.remoteControlEnable === true) {
      writer.uint32(40).bool(message.remoteControlEnable);
    }
    if (message.remoteControlPassword !== '') {
      writer.uint32(50).string(message.remoteControlPassword);
    }
    if (message.remoteObserveEnable === true) {
      writer.uint32(56).bool(message.remoteObserveEnable);
    }
    if (message.remoteObservePassword !== '') {
      writer.uint32(66).string(message.remoteObservePassword);
    }
    if (message.stageEnable === true) {
      writer.uint32(72).bool(message.stageEnable);
    }
    if (message.stagePassword !== '') {
      writer.uint32(82).string(message.stagePassword);
    }
    if (message.linkEnable === true) {
      writer.uint32(88).bool(message.linkEnable);
    }
    if (message.webResourceRoot !== '') {
      writer.uint32(98).string(message.webResourceRoot);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProApiNetworkConfiguration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProApiNetworkConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.enableNetwork = reader.bool();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.networkName = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.remoteEnable = reader.bool();
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.remoteControlEnable = reader.bool();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.remoteControlPassword = reader.string();
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.remoteObserveEnable = reader.bool();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.remoteObservePassword = reader.string();
          continue;
        case 9:
          if (tag != 72) {
            break;
          }

          message.stageEnable = reader.bool();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.stagePassword = reader.string();
          continue;
        case 11:
          if (tag != 88) {
            break;
          }

          message.linkEnable = reader.bool();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.webResourceRoot = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProApiNetworkConfiguration {
    return {
      enableNetwork: isSet(object.enableNetwork)
        ? Boolean(object.enableNetwork)
        : false,
      port: isSet(object.port) ? Number(object.port) : 0,
      networkName: isSet(object.networkName) ? String(object.networkName) : '',
      remoteEnable: isSet(object.remoteEnable)
        ? Boolean(object.remoteEnable)
        : false,
      remoteControlEnable: isSet(object.remoteControlEnable)
        ? Boolean(object.remoteControlEnable)
        : false,
      remoteControlPassword: isSet(object.remoteControlPassword)
        ? String(object.remoteControlPassword)
        : '',
      remoteObserveEnable: isSet(object.remoteObserveEnable)
        ? Boolean(object.remoteObserveEnable)
        : false,
      remoteObservePassword: isSet(object.remoteObservePassword)
        ? String(object.remoteObservePassword)
        : '',
      stageEnable: isSet(object.stageEnable)
        ? Boolean(object.stageEnable)
        : false,
      stagePassword: isSet(object.stagePassword)
        ? String(object.stagePassword)
        : '',
      linkEnable: isSet(object.linkEnable) ? Boolean(object.linkEnable) : false,
      webResourceRoot: isSet(object.webResourceRoot)
        ? String(object.webResourceRoot)
        : '',
    };
  },

  toJSON(message: ProApiNetworkConfiguration): unknown {
    const obj: any = {};
    message.enableNetwork !== undefined &&
      (obj.enableNetwork = message.enableNetwork);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.networkName !== undefined &&
      (obj.networkName = message.networkName);
    message.remoteEnable !== undefined &&
      (obj.remoteEnable = message.remoteEnable);
    message.remoteControlEnable !== undefined &&
      (obj.remoteControlEnable = message.remoteControlEnable);
    message.remoteControlPassword !== undefined &&
      (obj.remoteControlPassword = message.remoteControlPassword);
    message.remoteObserveEnable !== undefined &&
      (obj.remoteObserveEnable = message.remoteObserveEnable);
    message.remoteObservePassword !== undefined &&
      (obj.remoteObservePassword = message.remoteObservePassword);
    message.stageEnable !== undefined &&
      (obj.stageEnable = message.stageEnable);
    message.stagePassword !== undefined &&
      (obj.stagePassword = message.stagePassword);
    message.linkEnable !== undefined && (obj.linkEnable = message.linkEnable);
    message.webResourceRoot !== undefined &&
      (obj.webResourceRoot = message.webResourceRoot);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProApiNetworkConfiguration>, I>>(
    base?: I,
  ): ProApiNetworkConfiguration {
    return ProApiNetworkConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProApiNetworkConfiguration>, I>>(
    object: I,
  ): ProApiNetworkConfiguration {
    const message = createBaseProApiNetworkConfiguration();
    message.enableNetwork = object.enableNetwork ?? false;
    message.port = object.port ?? 0;
    message.networkName = object.networkName ?? '';
    message.remoteEnable = object.remoteEnable ?? false;
    message.remoteControlEnable = object.remoteControlEnable ?? false;
    message.remoteControlPassword = object.remoteControlPassword ?? '';
    message.remoteObserveEnable = object.remoteObserveEnable ?? false;
    message.remoteObservePassword = object.remoteObservePassword ?? '';
    message.stageEnable = object.stageEnable ?? false;
    message.stagePassword = object.stagePassword ?? '';
    message.linkEnable = object.linkEnable ?? false;
    message.webResourceRoot = object.webResourceRoot ?? '';
    return message;
  },
};

function createBaseProLink(): ProLink {
  return {};
}

export const ProLink = {
  encode(_: ProLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProLink {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink {
    return {};
  },

  toJSON(_: ProLink): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink>, I>>(base?: I): ProLink {
    return ProLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink>, I>>(_: I): ProLink {
    const message = createBaseProLink();
    return message;
  },
};

function createBaseProLink_GroupDefinition(): ProLink_GroupDefinition {
  return {
    timestamp: undefined,
    secret: '',
    name: '',
    members: [],
    groupIdentifier: undefined,
  };
}

export const ProLink_GroupDefinition = {
  encode(
    message: ProLink_GroupDefinition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== '') {
      writer.uint32(18).string(message.secret);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.members) {
      ProLink_GroupDefinition_Member.encode(
        v!,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.groupIdentifier !== undefined) {
      UUID.encode(message.groupIdentifier, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_GroupDefinition {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_GroupDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.timestamp = Timestamp.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.secret = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.members.push(
            ProLink_GroupDefinition_Member.decode(reader, reader.uint32()),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.groupIdentifier = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_GroupDefinition {
    return {
      timestamp: isSet(object.timestamp)
        ? Timestamp.fromJSON(object.timestamp)
        : undefined,
      secret: isSet(object.secret) ? String(object.secret) : '',
      name: isSet(object.name) ? String(object.name) : '',
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) =>
            ProLink_GroupDefinition_Member.fromJSON(e),
          )
        : [],
      groupIdentifier: isSet(object.groupIdentifier)
        ? UUID.fromJSON(object.groupIdentifier)
        : undefined,
    };
  },

  toJSON(message: ProLink_GroupDefinition): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp
        ? Timestamp.toJSON(message.timestamp)
        : undefined);
    message.secret !== undefined && (obj.secret = message.secret);
    message.name !== undefined && (obj.name = message.name);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? ProLink_GroupDefinition_Member.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.groupIdentifier !== undefined &&
      (obj.groupIdentifier = message.groupIdentifier
        ? UUID.toJSON(message.groupIdentifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_GroupDefinition>, I>>(
    base?: I,
  ): ProLink_GroupDefinition {
    return ProLink_GroupDefinition.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_GroupDefinition>, I>>(
    object: I,
  ): ProLink_GroupDefinition {
    const message = createBaseProLink_GroupDefinition();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Timestamp.fromPartial(object.timestamp)
        : undefined;
    message.secret = object.secret ?? '';
    message.name = object.name ?? '';
    message.members =
      object.members?.map((e) =>
        ProLink_GroupDefinition_Member.fromPartial(e),
      ) || [];
    message.groupIdentifier =
      object.groupIdentifier !== undefined && object.groupIdentifier !== null
        ? UUID.fromPartial(object.groupIdentifier)
        : undefined;
    return message;
  },
};

function createBaseProLink_GroupDefinition_Member(): ProLink_GroupDefinition_Member {
  return { ip: '', port: 0 };
}

export const ProLink_GroupDefinition_Member = {
  encode(
    message: ProLink_GroupDefinition_Member,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_GroupDefinition_Member {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_GroupDefinition_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_GroupDefinition_Member {
    return {
      ip: isSet(object.ip) ? String(object.ip) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: ProLink_GroupDefinition_Member): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_GroupDefinition_Member>, I>>(
    base?: I,
  ): ProLink_GroupDefinition_Member {
    return ProLink_GroupDefinition_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_GroupDefinition_Member>, I>>(
    object: I,
  ): ProLink_GroupDefinition_Member {
    const message = createBaseProLink_GroupDefinition_Member();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseProLink_ZeroConfig(): ProLink_ZeroConfig {
  return {};
}

export const ProLink_ZeroConfig = {
  encode(
    _: ProLink_ZeroConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProLink_ZeroConfig {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ZeroConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_ZeroConfig {
    return {};
  },

  toJSON(_: ProLink_ZeroConfig): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ZeroConfig>, I>>(
    base?: I,
  ): ProLink_ZeroConfig {
    return ProLink_ZeroConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_ZeroConfig>, I>>(
    _: I,
  ): ProLink_ZeroConfig {
    const message = createBaseProLink_ZeroConfig();
    return message;
  },
};

function createBaseProLink_ZeroConfig_NetworkEnvironment(): ProLink_ZeroConfig_NetworkEnvironment {
  return { availableGroups: [], availableDevices: [] };
}

export const ProLink_ZeroConfig_NetworkEnvironment = {
  encode(
    message: ProLink_ZeroConfig_NetworkEnvironment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.availableGroups) {
      ProLink_GroupDefinition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.availableDevices) {
      ProLink_MemberStatus.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ZeroConfig_NetworkEnvironment {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ZeroConfig_NetworkEnvironment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.availableGroups.push(
            ProLink_GroupDefinition.decode(reader, reader.uint32()),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.availableDevices.push(
            ProLink_MemberStatus.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ZeroConfig_NetworkEnvironment {
    return {
      availableGroups: Array.isArray(object?.availableGroups)
        ? object.availableGroups.map((e: any) =>
            ProLink_GroupDefinition.fromJSON(e),
          )
        : [],
      availableDevices: Array.isArray(object?.availableDevices)
        ? object.availableDevices.map((e: any) =>
            ProLink_MemberStatus.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: ProLink_ZeroConfig_NetworkEnvironment): unknown {
    const obj: any = {};
    if (message.availableGroups) {
      obj.availableGroups = message.availableGroups.map((e) =>
        e ? ProLink_GroupDefinition.toJSON(e) : undefined,
      );
    } else {
      obj.availableGroups = [];
    }
    if (message.availableDevices) {
      obj.availableDevices = message.availableDevices.map((e) =>
        e ? ProLink_MemberStatus.toJSON(e) : undefined,
      );
    } else {
      obj.availableDevices = [];
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_ZeroConfig_NetworkEnvironment>, I>,
  >(base?: I): ProLink_ZeroConfig_NetworkEnvironment {
    return ProLink_ZeroConfig_NetworkEnvironment.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_ZeroConfig_NetworkEnvironment>, I>,
  >(object: I): ProLink_ZeroConfig_NetworkEnvironment {
    const message = createBaseProLink_ZeroConfig_NetworkEnvironment();
    message.availableGroups =
      object.availableGroups?.map((e) =>
        ProLink_GroupDefinition.fromPartial(e),
      ) || [];
    message.availableDevices =
      object.availableDevices?.map((e) =>
        ProLink_MemberStatus.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseProLink_ZeroConfig_MulticastPacket(): ProLink_ZeroConfig_MulticastPacket {
  return { group: undefined, device: undefined };
}

export const ProLink_ZeroConfig_MulticastPacket = {
  encode(
    message: ProLink_ZeroConfig_MulticastPacket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.group !== undefined) {
      ProLink_GroupDefinition.encode(
        message.group,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.device !== undefined) {
      ProLink_MemberStatus.encode(
        message.device,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ZeroConfig_MulticastPacket {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ZeroConfig_MulticastPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.group = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.device = ProLink_MemberStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ZeroConfig_MulticastPacket {
    return {
      group: isSet(object.group)
        ? ProLink_GroupDefinition.fromJSON(object.group)
        : undefined,
      device: isSet(object.device)
        ? ProLink_MemberStatus.fromJSON(object.device)
        : undefined,
    };
  },

  toJSON(message: ProLink_ZeroConfig_MulticastPacket): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group
        ? ProLink_GroupDefinition.toJSON(message.group)
        : undefined);
    message.device !== undefined &&
      (obj.device = message.device
        ? ProLink_MemberStatus.toJSON(message.device)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ZeroConfig_MulticastPacket>, I>>(
    base?: I,
  ): ProLink_ZeroConfig_MulticastPacket {
    return ProLink_ZeroConfig_MulticastPacket.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_ZeroConfig_MulticastPacket>, I>,
  >(object: I): ProLink_ZeroConfig_MulticastPacket {
    const message = createBaseProLink_ZeroConfig_MulticastPacket();
    message.group =
      object.group !== undefined && object.group !== null
        ? ProLink_GroupDefinition.fromPartial(object.group)
        : undefined;
    message.device =
      object.device !== undefined && object.device !== null
        ? ProLink_MemberStatus.fromPartial(object.device)
        : undefined;
    return message;
  },
};

function createBaseProLink_TowerMessage(): ProLink_TowerMessage {
  return {};
}

export const ProLink_TowerMessage = {
  encode(
    _: ProLink_TowerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_TowerMessage {
    return {};
  },

  toJSON(_: ProLink_TowerMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_TowerMessage>, I>>(
    base?: I,
  ): ProLink_TowerMessage {
    return ProLink_TowerMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_TowerMessage>, I>>(
    _: I,
  ): ProLink_TowerMessage {
    const message = createBaseProLink_TowerMessage();
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerStatusRequest(): ProLink_TowerMessage_TowerStatusRequest {
  return {};
}

export const ProLink_TowerMessage_TowerStatusRequest = {
  encode(
    _: ProLink_TowerMessage_TowerStatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerStatusRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_TowerMessage_TowerStatusRequest {
    return {};
  },

  toJSON(_: ProLink_TowerMessage_TowerStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerStatusRequest>, I>,
  >(base?: I): ProLink_TowerMessage_TowerStatusRequest {
    return ProLink_TowerMessage_TowerStatusRequest.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerStatusRequest>, I>,
  >(_: I): ProLink_TowerMessage_TowerStatusRequest {
    const message = createBaseProLink_TowerMessage_TowerStatusRequest();
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerStatusResponse(): ProLink_TowerMessage_TowerStatusResponse {
  return { memberName: '', groupDefinition: undefined };
}

export const ProLink_TowerMessage_TowerStatusResponse = {
  encode(
    message: ProLink_TowerMessage_TowerStatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberName !== '') {
      writer.uint32(18).string(message.memberName);
    }
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerStatusResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.memberName = reader.string();
          continue;
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_TowerMessage_TowerStatusResponse {
    return {
      memberName: isSet(object.memberName) ? String(object.memberName) : '',
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
    };
  },

  toJSON(message: ProLink_TowerMessage_TowerStatusResponse): unknown {
    const obj: any = {};
    message.memberName !== undefined && (obj.memberName = message.memberName);
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerStatusResponse>, I>,
  >(base?: I): ProLink_TowerMessage_TowerStatusResponse {
    return ProLink_TowerMessage_TowerStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerStatusResponse>, I>,
  >(object: I): ProLink_TowerMessage_TowerStatusResponse {
    const message = createBaseProLink_TowerMessage_TowerStatusResponse();
    message.memberName = object.memberName ?? '';
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerAddMemberRequest(): ProLink_TowerMessage_TowerAddMemberRequest {
  return { groupDefinition: undefined, joiningMember: undefined };
}

export const ProLink_TowerMessage_TowerAddMemberRequest = {
  encode(
    message: ProLink_TowerMessage_TowerAddMemberRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.joiningMember !== undefined) {
      ProLink_GroupDefinition_Member.encode(
        message.joiningMember,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerAddMemberRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerAddMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.joiningMember = ProLink_GroupDefinition_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_TowerMessage_TowerAddMemberRequest {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      joiningMember: isSet(object.joiningMember)
        ? ProLink_GroupDefinition_Member.fromJSON(object.joiningMember)
        : undefined,
    };
  },

  toJSON(message: ProLink_TowerMessage_TowerAddMemberRequest): unknown {
    const obj: any = {};
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    message.joiningMember !== undefined &&
      (obj.joiningMember = message.joiningMember
        ? ProLink_GroupDefinition_Member.toJSON(message.joiningMember)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerAddMemberRequest>, I>,
  >(base?: I): ProLink_TowerMessage_TowerAddMemberRequest {
    return ProLink_TowerMessage_TowerAddMemberRequest.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerAddMemberRequest>, I>,
  >(object: I): ProLink_TowerMessage_TowerAddMemberRequest {
    const message = createBaseProLink_TowerMessage_TowerAddMemberRequest();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.joiningMember =
      object.joiningMember !== undefined && object.joiningMember !== null
        ? ProLink_GroupDefinition_Member.fromPartial(object.joiningMember)
        : undefined;
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerRemoveMemberRequest(): ProLink_TowerMessage_TowerRemoveMemberRequest {
  return { removingMember: undefined };
}

export const ProLink_TowerMessage_TowerRemoveMemberRequest = {
  encode(
    message: ProLink_TowerMessage_TowerRemoveMemberRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.removingMember !== undefined) {
      ProLink_GroupDefinition_Member.encode(
        message.removingMember,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerRemoveMemberRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerRemoveMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.removingMember = ProLink_GroupDefinition_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_TowerMessage_TowerRemoveMemberRequest {
    return {
      removingMember: isSet(object.removingMember)
        ? ProLink_GroupDefinition_Member.fromJSON(object.removingMember)
        : undefined,
    };
  },

  toJSON(message: ProLink_TowerMessage_TowerRemoveMemberRequest): unknown {
    const obj: any = {};
    message.removingMember !== undefined &&
      (obj.removingMember = message.removingMember
        ? ProLink_GroupDefinition_Member.toJSON(message.removingMember)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerRemoveMemberRequest>,
      I
    >,
  >(base?: I): ProLink_TowerMessage_TowerRemoveMemberRequest {
    return ProLink_TowerMessage_TowerRemoveMemberRequest.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerRemoveMemberRequest>,
      I
    >,
  >(object: I): ProLink_TowerMessage_TowerRemoveMemberRequest {
    const message = createBaseProLink_TowerMessage_TowerRemoveMemberRequest();
    message.removingMember =
      object.removingMember !== undefined && object.removingMember !== null
        ? ProLink_GroupDefinition_Member.fromPartial(object.removingMember)
        : undefined;
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerAddMemberResponse(): ProLink_TowerMessage_TowerAddMemberResponse {
  return {
    groupDefinition: undefined,
    accept: undefined,
    declineReason: undefined,
  };
}

export const ProLink_TowerMessage_TowerAddMemberResponse = {
  encode(
    message: ProLink_TowerMessage_TowerAddMemberResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.accept !== undefined) {
      ProLink_TowerMessage_TowerAddMemberResponse_Accept.encode(
        message.accept,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.declineReason !== undefined) {
      writer.uint32(24).int32(message.declineReason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerAddMemberResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerAddMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.accept =
            ProLink_TowerMessage_TowerAddMemberResponse_Accept.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.declineReason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_TowerMessage_TowerAddMemberResponse {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      accept: isSet(object.accept)
        ? ProLink_TowerMessage_TowerAddMemberResponse_Accept.fromJSON(
            object.accept,
          )
        : undefined,
      declineReason: isSet(object.declineReason)
        ? proLink_TowerMessage_TowerAddMemberResponse_DeclineReasonFromJSON(
            object.declineReason,
          )
        : undefined,
    };
  },

  toJSON(message: ProLink_TowerMessage_TowerAddMemberResponse): unknown {
    const obj: any = {};
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    message.accept !== undefined &&
      (obj.accept = message.accept
        ? ProLink_TowerMessage_TowerAddMemberResponse_Accept.toJSON(
            message.accept,
          )
        : undefined);
    message.declineReason !== undefined &&
      (obj.declineReason =
        message.declineReason !== undefined
          ? proLink_TowerMessage_TowerAddMemberResponse_DeclineReasonToJSON(
              message.declineReason,
            )
          : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerAddMemberResponse>,
      I
    >,
  >(base?: I): ProLink_TowerMessage_TowerAddMemberResponse {
    return ProLink_TowerMessage_TowerAddMemberResponse.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerAddMemberResponse>,
      I
    >,
  >(object: I): ProLink_TowerMessage_TowerAddMemberResponse {
    const message = createBaseProLink_TowerMessage_TowerAddMemberResponse();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.accept =
      object.accept !== undefined && object.accept !== null
        ? ProLink_TowerMessage_TowerAddMemberResponse_Accept.fromPartial(
            object.accept,
          )
        : undefined;
    message.declineReason = object.declineReason ?? undefined;
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerAddMemberResponse_Accept(): ProLink_TowerMessage_TowerAddMemberResponse_Accept {
  return {};
}

export const ProLink_TowerMessage_TowerAddMemberResponse_Accept = {
  encode(
    _: ProLink_TowerMessage_TowerAddMemberResponse_Accept,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerAddMemberResponse_Accept {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_TowerMessage_TowerAddMemberResponse_Accept();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_TowerMessage_TowerAddMemberResponse_Accept {
    return {};
  },

  toJSON(_: ProLink_TowerMessage_TowerAddMemberResponse_Accept): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerAddMemberResponse_Accept>,
      I
    >,
  >(base?: I): ProLink_TowerMessage_TowerAddMemberResponse_Accept {
    return ProLink_TowerMessage_TowerAddMemberResponse_Accept.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerAddMemberResponse_Accept>,
      I
    >,
  >(_: I): ProLink_TowerMessage_TowerAddMemberResponse_Accept {
    const message =
      createBaseProLink_TowerMessage_TowerAddMemberResponse_Accept();
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerHeartbeatRequest(): ProLink_TowerMessage_TowerHeartbeatRequest {
  return {};
}

export const ProLink_TowerMessage_TowerHeartbeatRequest = {
  encode(
    _: ProLink_TowerMessage_TowerHeartbeatRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerHeartbeatRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerHeartbeatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_TowerMessage_TowerHeartbeatRequest {
    return {};
  },

  toJSON(_: ProLink_TowerMessage_TowerHeartbeatRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerHeartbeatRequest>, I>,
  >(base?: I): ProLink_TowerMessage_TowerHeartbeatRequest {
    return ProLink_TowerMessage_TowerHeartbeatRequest.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_TowerMessage_TowerHeartbeatRequest>, I>,
  >(_: I): ProLink_TowerMessage_TowerHeartbeatRequest {
    const message = createBaseProLink_TowerMessage_TowerHeartbeatRequest();
    return message;
  },
};

function createBaseProLink_TowerMessage_TowerHeartbeatResponse(): ProLink_TowerMessage_TowerHeartbeatResponse {
  return { groupDefinition: undefined };
}

export const ProLink_TowerMessage_TowerHeartbeatResponse = {
  encode(
    message: ProLink_TowerMessage_TowerHeartbeatResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_TowerMessage_TowerHeartbeatResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_TowerMessage_TowerHeartbeatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_TowerMessage_TowerHeartbeatResponse {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
    };
  },

  toJSON(message: ProLink_TowerMessage_TowerHeartbeatResponse): unknown {
    const obj: any = {};
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerHeartbeatResponse>,
      I
    >,
  >(base?: I): ProLink_TowerMessage_TowerHeartbeatResponse {
    return ProLink_TowerMessage_TowerHeartbeatResponse.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_TowerMessage_TowerHeartbeatResponse>,
      I
    >,
  >(object: I): ProLink_TowerMessage_TowerHeartbeatResponse {
    const message = createBaseProLink_TowerMessage_TowerHeartbeatResponse();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    return message;
  },
};

function createBaseProLink_MemberStatus(): ProLink_MemberStatus {
  return {
    ip: '',
    port: 0,
    name: '',
    platform: 0,
    osVersion: '',
    hostDescription: '',
    apiVersion: '',
    connectionStatus: 0,
  };
}

export const ProLink_MemberStatus = {
  encode(
    message: ProLink_MemberStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.platform !== 0) {
      writer.uint32(32).int32(message.platform);
    }
    if (message.osVersion !== '') {
      writer.uint32(42).string(message.osVersion);
    }
    if (message.hostDescription !== '') {
      writer.uint32(50).string(message.hostDescription);
    }
    if (message.apiVersion !== '') {
      writer.uint32(58).string(message.apiVersion);
    }
    if (message.connectionStatus !== 0) {
      writer.uint32(64).int32(message.connectionStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_MemberStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_MemberStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.osVersion = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.hostDescription = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.apiVersion = reader.string();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.connectionStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_MemberStatus {
    return {
      ip: isSet(object.ip) ? String(object.ip) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      platform: isSet(object.platform)
        ? applicationInfo_PlatformFromJSON(object.platform)
        : 0,
      osVersion: isSet(object.osVersion) ? String(object.osVersion) : '',
      hostDescription: isSet(object.hostDescription)
        ? String(object.hostDescription)
        : '',
      apiVersion: isSet(object.apiVersion) ? String(object.apiVersion) : '',
      connectionStatus: isSet(object.connectionStatus)
        ? proLink_MemberStatus_ConnectionStatusFromJSON(object.connectionStatus)
        : 0,
    };
  },

  toJSON(message: ProLink_MemberStatus): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.name !== undefined && (obj.name = message.name);
    message.platform !== undefined &&
      (obj.platform = applicationInfo_PlatformToJSON(message.platform));
    message.osVersion !== undefined && (obj.osVersion = message.osVersion);
    message.hostDescription !== undefined &&
      (obj.hostDescription = message.hostDescription);
    message.apiVersion !== undefined && (obj.apiVersion = message.apiVersion);
    message.connectionStatus !== undefined &&
      (obj.connectionStatus = proLink_MemberStatus_ConnectionStatusToJSON(
        message.connectionStatus,
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_MemberStatus>, I>>(
    base?: I,
  ): ProLink_MemberStatus {
    return ProLink_MemberStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_MemberStatus>, I>>(
    object: I,
  ): ProLink_MemberStatus {
    const message = createBaseProLink_MemberStatus();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    message.name = object.name ?? '';
    message.platform = object.platform ?? 0;
    message.osVersion = object.osVersion ?? '';
    message.hostDescription = object.hostDescription ?? '';
    message.apiVersion = object.apiVersion ?? '';
    message.connectionStatus = object.connectionStatus ?? 0;
    return message;
  },
};

function createBaseProLink_ClientAction(): ProLink_ClientAction {
  return {
    addConnection: undefined,
    removeConnection: undefined,
    cancelAction: undefined,
    renderTime: undefined,
  };
}

export const ProLink_ClientAction = {
  encode(
    message: ProLink_ClientAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.addConnection !== undefined) {
      ProLink_ClientAction_AddConnection.encode(
        message.addConnection,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.removeConnection !== undefined) {
      ProLink_ClientAction_RemoveConnection.encode(
        message.removeConnection,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cancelAction !== undefined) {
      ProLink_ClientAction_CancelAction.encode(
        message.cancelAction,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.renderTime !== undefined) {
      ProLink_ClientAction_RenderTime.encode(
        message.renderTime,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ClientAction {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ClientAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.addConnection = ProLink_ClientAction_AddConnection.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.removeConnection =
            ProLink_ClientAction_RemoveConnection.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.cancelAction = ProLink_ClientAction_CancelAction.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.renderTime = ProLink_ClientAction_RenderTime.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ClientAction {
    return {
      addConnection: isSet(object.addConnection)
        ? ProLink_ClientAction_AddConnection.fromJSON(object.addConnection)
        : undefined,
      removeConnection: isSet(object.removeConnection)
        ? ProLink_ClientAction_RemoveConnection.fromJSON(
            object.removeConnection,
          )
        : undefined,
      cancelAction: isSet(object.cancelAction)
        ? ProLink_ClientAction_CancelAction.fromJSON(object.cancelAction)
        : undefined,
      renderTime: isSet(object.renderTime)
        ? ProLink_ClientAction_RenderTime.fromJSON(object.renderTime)
        : undefined,
    };
  },

  toJSON(message: ProLink_ClientAction): unknown {
    const obj: any = {};
    message.addConnection !== undefined &&
      (obj.addConnection = message.addConnection
        ? ProLink_ClientAction_AddConnection.toJSON(message.addConnection)
        : undefined);
    message.removeConnection !== undefined &&
      (obj.removeConnection = message.removeConnection
        ? ProLink_ClientAction_RemoveConnection.toJSON(message.removeConnection)
        : undefined);
    message.cancelAction !== undefined &&
      (obj.cancelAction = message.cancelAction
        ? ProLink_ClientAction_CancelAction.toJSON(message.cancelAction)
        : undefined);
    message.renderTime !== undefined &&
      (obj.renderTime = message.renderTime
        ? ProLink_ClientAction_RenderTime.toJSON(message.renderTime)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ClientAction>, I>>(
    base?: I,
  ): ProLink_ClientAction {
    return ProLink_ClientAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_ClientAction>, I>>(
    object: I,
  ): ProLink_ClientAction {
    const message = createBaseProLink_ClientAction();
    message.addConnection =
      object.addConnection !== undefined && object.addConnection !== null
        ? ProLink_ClientAction_AddConnection.fromPartial(object.addConnection)
        : undefined;
    message.removeConnection =
      object.removeConnection !== undefined && object.removeConnection !== null
        ? ProLink_ClientAction_RemoveConnection.fromPartial(
            object.removeConnection,
          )
        : undefined;
    message.cancelAction =
      object.cancelAction !== undefined && object.cancelAction !== null
        ? ProLink_ClientAction_CancelAction.fromPartial(object.cancelAction)
        : undefined;
    message.renderTime =
      object.renderTime !== undefined && object.renderTime !== null
        ? ProLink_ClientAction_RenderTime.fromPartial(object.renderTime)
        : undefined;
    return message;
  },
};

function createBaseProLink_ClientAction_AddConnection(): ProLink_ClientAction_AddConnection {
  return { ip: '', port: 0, groupName: '' };
}

export const ProLink_ClientAction_AddConnection = {
  encode(
    message: ProLink_ClientAction_AddConnection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.groupName !== '') {
      writer.uint32(26).string(message.groupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ClientAction_AddConnection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ClientAction_AddConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.groupName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ClientAction_AddConnection {
    return {
      ip: isSet(object.ip) ? String(object.ip) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : '',
    };
  },

  toJSON(message: ProLink_ClientAction_AddConnection): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ClientAction_AddConnection>, I>>(
    base?: I,
  ): ProLink_ClientAction_AddConnection {
    return ProLink_ClientAction_AddConnection.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_ClientAction_AddConnection>, I>,
  >(object: I): ProLink_ClientAction_AddConnection {
    const message = createBaseProLink_ClientAction_AddConnection();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    message.groupName = object.groupName ?? '';
    return message;
  },
};

function createBaseProLink_ClientAction_RemoveConnection(): ProLink_ClientAction_RemoveConnection {
  return { ip: '', port: 0 };
}

export const ProLink_ClientAction_RemoveConnection = {
  encode(
    message: ProLink_ClientAction_RemoveConnection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ip !== '') {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ClientAction_RemoveConnection {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ClientAction_RemoveConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ClientAction_RemoveConnection {
    return {
      ip: isSet(object.ip) ? String(object.ip) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: ProLink_ClientAction_RemoveConnection): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_ClientAction_RemoveConnection>, I>,
  >(base?: I): ProLink_ClientAction_RemoveConnection {
    return ProLink_ClientAction_RemoveConnection.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_ClientAction_RemoveConnection>, I>,
  >(object: I): ProLink_ClientAction_RemoveConnection {
    const message = createBaseProLink_ClientAction_RemoveConnection();
    message.ip = object.ip ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseProLink_ClientAction_CancelAction(): ProLink_ClientAction_CancelAction {
  return {};
}

export const ProLink_ClientAction_CancelAction = {
  encode(
    _: ProLink_ClientAction_CancelAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ClientAction_CancelAction {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ClientAction_CancelAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_ClientAction_CancelAction {
    return {};
  },

  toJSON(_: ProLink_ClientAction_CancelAction): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ClientAction_CancelAction>, I>>(
    base?: I,
  ): ProLink_ClientAction_CancelAction {
    return ProLink_ClientAction_CancelAction.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_ClientAction_CancelAction>, I>,
  >(_: I): ProLink_ClientAction_CancelAction {
    const message = createBaseProLink_ClientAction_CancelAction();
    return message;
  },
};

function createBaseProLink_ClientAction_RenderTime(): ProLink_ClientAction_RenderTime {
  return { latency: 0, renderTime: 0 };
}

export const ProLink_ClientAction_RenderTime = {
  encode(
    message: ProLink_ClientAction_RenderTime,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.latency !== 0) {
      writer.uint32(8).uint64(message.latency);
    }
    if (message.renderTime !== 0) {
      writer.uint32(16).uint64(message.renderTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_ClientAction_RenderTime {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_ClientAction_RenderTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.latency = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.renderTime = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_ClientAction_RenderTime {
    return {
      latency: isSet(object.latency) ? Number(object.latency) : 0,
      renderTime: isSet(object.renderTime) ? Number(object.renderTime) : 0,
    };
  },

  toJSON(message: ProLink_ClientAction_RenderTime): unknown {
    const obj: any = {};
    message.latency !== undefined &&
      (obj.latency = Math.round(message.latency));
    message.renderTime !== undefined &&
      (obj.renderTime = Math.round(message.renderTime));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_ClientAction_RenderTime>, I>>(
    base?: I,
  ): ProLink_ClientAction_RenderTime {
    return ProLink_ClientAction_RenderTime.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_ClientAction_RenderTime>, I>>(
    object: I,
  ): ProLink_ClientAction_RenderTime {
    const message = createBaseProLink_ClientAction_RenderTime();
    message.latency = object.latency ?? 0;
    message.renderTime = object.renderTime ?? 0;
    return message;
  },
};

function createBaseProLink_HandlerIn(): ProLink_HandlerIn {
  return {
    groupName: undefined,
    groupDefinitionRequest: undefined,
    groupJoinConfirmation: undefined,
    groupJoinPassword: undefined,
    addConnectionResult: undefined,
    groupUpdate: undefined,
    memberStatusChange: undefined,
    propresenterInfo: undefined,
    serverState: undefined,
    configurationRequest: undefined,
    zeroconfigNetworkEnvironmentChange: undefined,
    logRequest: undefined,
  };
}

export const ProLink_HandlerIn = {
  encode(
    message: ProLink_HandlerIn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupName !== undefined) {
      ProLink_HandlerIn_GroupName.encode(
        message.groupName,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.groupDefinitionRequest !== undefined) {
      ProLink_HandlerIn_GroupDefinitionRequest.encode(
        message.groupDefinitionRequest,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.groupJoinConfirmation !== undefined) {
      ProLink_HandlerIn_GroupJoinConfirmation.encode(
        message.groupJoinConfirmation,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.groupJoinPassword !== undefined) {
      ProLink_HandlerIn_GroupJoinPassword.encode(
        message.groupJoinPassword,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.addConnectionResult !== undefined) {
      ProLink_HandlerIn_AddConnectionResult.encode(
        message.addConnectionResult,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.groupUpdate !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupUpdate,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.memberStatusChange !== undefined) {
      ProLink_HandlerIn_MemberStatusChange.encode(
        message.memberStatusChange,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.propresenterInfo !== undefined) {
      ProLink_HandlerIn_ProPresenterInfo.encode(
        message.propresenterInfo,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.serverState !== undefined) {
      ProLink_HandlerIn_ServerState.encode(
        message.serverState,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.configurationRequest !== undefined) {
      ProLink_HandlerIn_ConfigurationRequest.encode(
        message.configurationRequest,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.zeroconfigNetworkEnvironmentChange !== undefined) {
      ProLink_ZeroConfig_NetworkEnvironment.encode(
        message.zeroconfigNetworkEnvironmentChange,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.logRequest !== undefined) {
      ProLink_HandlerIn_LogRequest.encode(
        message.logRequest,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProLink_HandlerIn {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupName = ProLink_HandlerIn_GroupName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupDefinitionRequest =
            ProLink_HandlerIn_GroupDefinitionRequest.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.groupJoinConfirmation =
            ProLink_HandlerIn_GroupJoinConfirmation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.groupJoinPassword =
            ProLink_HandlerIn_GroupJoinPassword.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.addConnectionResult =
            ProLink_HandlerIn_AddConnectionResult.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.groupUpdate = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.memberStatusChange =
            ProLink_HandlerIn_MemberStatusChange.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.propresenterInfo = ProLink_HandlerIn_ProPresenterInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.serverState = ProLink_HandlerIn_ServerState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.configurationRequest =
            ProLink_HandlerIn_ConfigurationRequest.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.zeroconfigNetworkEnvironmentChange =
            ProLink_ZeroConfig_NetworkEnvironment.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.logRequest = ProLink_HandlerIn_LogRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn {
    return {
      groupName: isSet(object.groupName)
        ? ProLink_HandlerIn_GroupName.fromJSON(object.groupName)
        : undefined,
      groupDefinitionRequest: isSet(object.groupDefinitionRequest)
        ? ProLink_HandlerIn_GroupDefinitionRequest.fromJSON(
            object.groupDefinitionRequest,
          )
        : undefined,
      groupJoinConfirmation: isSet(object.groupJoinConfirmation)
        ? ProLink_HandlerIn_GroupJoinConfirmation.fromJSON(
            object.groupJoinConfirmation,
          )
        : undefined,
      groupJoinPassword: isSet(object.groupJoinPassword)
        ? ProLink_HandlerIn_GroupJoinPassword.fromJSON(object.groupJoinPassword)
        : undefined,
      addConnectionResult: isSet(object.addConnectionResult)
        ? ProLink_HandlerIn_AddConnectionResult.fromJSON(
            object.addConnectionResult,
          )
        : undefined,
      groupUpdate: isSet(object.groupUpdate)
        ? ProLink_GroupDefinition.fromJSON(object.groupUpdate)
        : undefined,
      memberStatusChange: isSet(object.memberStatusChange)
        ? ProLink_HandlerIn_MemberStatusChange.fromJSON(
            object.memberStatusChange,
          )
        : undefined,
      propresenterInfo: isSet(object.propresenterInfo)
        ? ProLink_HandlerIn_ProPresenterInfo.fromJSON(object.propresenterInfo)
        : undefined,
      serverState: isSet(object.serverState)
        ? ProLink_HandlerIn_ServerState.fromJSON(object.serverState)
        : undefined,
      configurationRequest: isSet(object.configurationRequest)
        ? ProLink_HandlerIn_ConfigurationRequest.fromJSON(
            object.configurationRequest,
          )
        : undefined,
      zeroconfigNetworkEnvironmentChange: isSet(
        object.zeroconfigNetworkEnvironmentChange,
      )
        ? ProLink_ZeroConfig_NetworkEnvironment.fromJSON(
            object.zeroconfigNetworkEnvironmentChange,
          )
        : undefined,
      logRequest: isSet(object.logRequest)
        ? ProLink_HandlerIn_LogRequest.fromJSON(object.logRequest)
        : undefined,
    };
  },

  toJSON(message: ProLink_HandlerIn): unknown {
    const obj: any = {};
    message.groupName !== undefined &&
      (obj.groupName = message.groupName
        ? ProLink_HandlerIn_GroupName.toJSON(message.groupName)
        : undefined);
    message.groupDefinitionRequest !== undefined &&
      (obj.groupDefinitionRequest = message.groupDefinitionRequest
        ? ProLink_HandlerIn_GroupDefinitionRequest.toJSON(
            message.groupDefinitionRequest,
          )
        : undefined);
    message.groupJoinConfirmation !== undefined &&
      (obj.groupJoinConfirmation = message.groupJoinConfirmation
        ? ProLink_HandlerIn_GroupJoinConfirmation.toJSON(
            message.groupJoinConfirmation,
          )
        : undefined);
    message.groupJoinPassword !== undefined &&
      (obj.groupJoinPassword = message.groupJoinPassword
        ? ProLink_HandlerIn_GroupJoinPassword.toJSON(message.groupJoinPassword)
        : undefined);
    message.addConnectionResult !== undefined &&
      (obj.addConnectionResult = message.addConnectionResult
        ? ProLink_HandlerIn_AddConnectionResult.toJSON(
            message.addConnectionResult,
          )
        : undefined);
    message.groupUpdate !== undefined &&
      (obj.groupUpdate = message.groupUpdate
        ? ProLink_GroupDefinition.toJSON(message.groupUpdate)
        : undefined);
    message.memberStatusChange !== undefined &&
      (obj.memberStatusChange = message.memberStatusChange
        ? ProLink_HandlerIn_MemberStatusChange.toJSON(
            message.memberStatusChange,
          )
        : undefined);
    message.propresenterInfo !== undefined &&
      (obj.propresenterInfo = message.propresenterInfo
        ? ProLink_HandlerIn_ProPresenterInfo.toJSON(message.propresenterInfo)
        : undefined);
    message.serverState !== undefined &&
      (obj.serverState = message.serverState
        ? ProLink_HandlerIn_ServerState.toJSON(message.serverState)
        : undefined);
    message.configurationRequest !== undefined &&
      (obj.configurationRequest = message.configurationRequest
        ? ProLink_HandlerIn_ConfigurationRequest.toJSON(
            message.configurationRequest,
          )
        : undefined);
    message.zeroconfigNetworkEnvironmentChange !== undefined &&
      (obj.zeroconfigNetworkEnvironmentChange =
        message.zeroconfigNetworkEnvironmentChange
          ? ProLink_ZeroConfig_NetworkEnvironment.toJSON(
              message.zeroconfigNetworkEnvironmentChange,
            )
          : undefined);
    message.logRequest !== undefined &&
      (obj.logRequest = message.logRequest
        ? ProLink_HandlerIn_LogRequest.toJSON(message.logRequest)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn>, I>>(
    base?: I,
  ): ProLink_HandlerIn {
    return ProLink_HandlerIn.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerIn>, I>>(
    object: I,
  ): ProLink_HandlerIn {
    const message = createBaseProLink_HandlerIn();
    message.groupName =
      object.groupName !== undefined && object.groupName !== null
        ? ProLink_HandlerIn_GroupName.fromPartial(object.groupName)
        : undefined;
    message.groupDefinitionRequest =
      object.groupDefinitionRequest !== undefined &&
      object.groupDefinitionRequest !== null
        ? ProLink_HandlerIn_GroupDefinitionRequest.fromPartial(
            object.groupDefinitionRequest,
          )
        : undefined;
    message.groupJoinConfirmation =
      object.groupJoinConfirmation !== undefined &&
      object.groupJoinConfirmation !== null
        ? ProLink_HandlerIn_GroupJoinConfirmation.fromPartial(
            object.groupJoinConfirmation,
          )
        : undefined;
    message.groupJoinPassword =
      object.groupJoinPassword !== undefined &&
      object.groupJoinPassword !== null
        ? ProLink_HandlerIn_GroupJoinPassword.fromPartial(
            object.groupJoinPassword,
          )
        : undefined;
    message.addConnectionResult =
      object.addConnectionResult !== undefined &&
      object.addConnectionResult !== null
        ? ProLink_HandlerIn_AddConnectionResult.fromPartial(
            object.addConnectionResult,
          )
        : undefined;
    message.groupUpdate =
      object.groupUpdate !== undefined && object.groupUpdate !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupUpdate)
        : undefined;
    message.memberStatusChange =
      object.memberStatusChange !== undefined &&
      object.memberStatusChange !== null
        ? ProLink_HandlerIn_MemberStatusChange.fromPartial(
            object.memberStatusChange,
          )
        : undefined;
    message.propresenterInfo =
      object.propresenterInfo !== undefined && object.propresenterInfo !== null
        ? ProLink_HandlerIn_ProPresenterInfo.fromPartial(
            object.propresenterInfo,
          )
        : undefined;
    message.serverState =
      object.serverState !== undefined && object.serverState !== null
        ? ProLink_HandlerIn_ServerState.fromPartial(object.serverState)
        : undefined;
    message.configurationRequest =
      object.configurationRequest !== undefined &&
      object.configurationRequest !== null
        ? ProLink_HandlerIn_ConfigurationRequest.fromPartial(
            object.configurationRequest,
          )
        : undefined;
    message.zeroconfigNetworkEnvironmentChange =
      object.zeroconfigNetworkEnvironmentChange !== undefined &&
      object.zeroconfigNetworkEnvironmentChange !== null
        ? ProLink_ZeroConfig_NetworkEnvironment.fromPartial(
            object.zeroconfigNetworkEnvironmentChange,
          )
        : undefined;
    message.logRequest =
      object.logRequest !== undefined && object.logRequest !== null
        ? ProLink_HandlerIn_LogRequest.fromPartial(object.logRequest)
        : undefined;
    return message;
  },
};

function createBaseProLink_HandlerIn_GroupName(): ProLink_HandlerIn_GroupName {
  return {};
}

export const ProLink_HandlerIn_GroupName = {
  encode(
    _: ProLink_HandlerIn_GroupName,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_GroupName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_GroupName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_GroupName {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_GroupName): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_GroupName>, I>>(
    base?: I,
  ): ProLink_HandlerIn_GroupName {
    return ProLink_HandlerIn_GroupName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerIn_GroupName>, I>>(
    _: I,
  ): ProLink_HandlerIn_GroupName {
    const message = createBaseProLink_HandlerIn_GroupName();
    return message;
  },
};

function createBaseProLink_HandlerIn_GroupDefinitionRequest(): ProLink_HandlerIn_GroupDefinitionRequest {
  return {};
}

export const ProLink_HandlerIn_GroupDefinitionRequest = {
  encode(
    _: ProLink_HandlerIn_GroupDefinitionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_GroupDefinitionRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_GroupDefinitionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_GroupDefinitionRequest {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_GroupDefinitionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_HandlerIn_GroupDefinitionRequest>, I>,
  >(base?: I): ProLink_HandlerIn_GroupDefinitionRequest {
    return ProLink_HandlerIn_GroupDefinitionRequest.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_GroupDefinitionRequest>, I>,
  >(_: I): ProLink_HandlerIn_GroupDefinitionRequest {
    const message = createBaseProLink_HandlerIn_GroupDefinitionRequest();
    return message;
  },
};

function createBaseProLink_HandlerIn_GroupJoinConfirmation(): ProLink_HandlerIn_GroupJoinConfirmation {
  return { name: '' };
}

export const ProLink_HandlerIn_GroupJoinConfirmation = {
  encode(
    message: ProLink_HandlerIn_GroupJoinConfirmation,
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
  ): ProLink_HandlerIn_GroupJoinConfirmation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_GroupJoinConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_GroupJoinConfirmation {
    return { name: isSet(object.name) ? String(object.name) : '' };
  },

  toJSON(message: ProLink_HandlerIn_GroupJoinConfirmation): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_HandlerIn_GroupJoinConfirmation>, I>,
  >(base?: I): ProLink_HandlerIn_GroupJoinConfirmation {
    return ProLink_HandlerIn_GroupJoinConfirmation.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_GroupJoinConfirmation>, I>,
  >(object: I): ProLink_HandlerIn_GroupJoinConfirmation {
    const message = createBaseProLink_HandlerIn_GroupJoinConfirmation();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_GroupJoinPassword(): ProLink_HandlerIn_GroupJoinPassword {
  return { name: '' };
}

export const ProLink_HandlerIn_GroupJoinPassword = {
  encode(
    message: ProLink_HandlerIn_GroupJoinPassword,
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
  ): ProLink_HandlerIn_GroupJoinPassword {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_GroupJoinPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_GroupJoinPassword {
    return { name: isSet(object.name) ? String(object.name) : '' };
  },

  toJSON(message: ProLink_HandlerIn_GroupJoinPassword): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_GroupJoinPassword>, I>>(
    base?: I,
  ): ProLink_HandlerIn_GroupJoinPassword {
    return ProLink_HandlerIn_GroupJoinPassword.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_GroupJoinPassword>, I>,
  >(object: I): ProLink_HandlerIn_GroupJoinPassword {
    const message = createBaseProLink_HandlerIn_GroupJoinPassword();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult(): ProLink_HandlerIn_AddConnectionResult {
  return { success: undefined, failure: undefined };
}

export const ProLink_HandlerIn_AddConnectionResult = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Success.encode(
        message.success,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.failure !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure.encode(
        message.failure,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_AddConnectionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.success =
            ProLink_HandlerIn_AddConnectionResult_Success.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.failure =
            ProLink_HandlerIn_AddConnectionResult_Failure.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_AddConnectionResult {
    return {
      success: isSet(object.success)
        ? ProLink_HandlerIn_AddConnectionResult_Success.fromJSON(object.success)
        : undefined,
      failure: isSet(object.failure)
        ? ProLink_HandlerIn_AddConnectionResult_Failure.fromJSON(object.failure)
        : undefined,
    };
  },

  toJSON(message: ProLink_HandlerIn_AddConnectionResult): unknown {
    const obj: any = {};
    message.success !== undefined &&
      (obj.success = message.success
        ? ProLink_HandlerIn_AddConnectionResult_Success.toJSON(message.success)
        : undefined);
    message.failure !== undefined &&
      (obj.failure = message.failure
        ? ProLink_HandlerIn_AddConnectionResult_Failure.toJSON(message.failure)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_HandlerIn_AddConnectionResult>, I>,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult {
    return ProLink_HandlerIn_AddConnectionResult.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_AddConnectionResult>, I>,
  >(object: I): ProLink_HandlerIn_AddConnectionResult {
    const message = createBaseProLink_HandlerIn_AddConnectionResult();
    message.success =
      object.success !== undefined && object.success !== null
        ? ProLink_HandlerIn_AddConnectionResult_Success.fromPartial(
            object.success,
          )
        : undefined;
    message.failure =
      object.failure !== undefined && object.failure !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure.fromPartial(
            object.failure,
          )
        : undefined;
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Success(): ProLink_HandlerIn_AddConnectionResult_Success {
  return { newGroupDefinition: undefined };
}

export const ProLink_HandlerIn_AddConnectionResult_Success = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Success,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.newGroupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.newGroupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Success {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_AddConnectionResult_Success();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.newGroupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_AddConnectionResult_Success {
    return {
      newGroupDefinition: isSet(object.newGroupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.newGroupDefinition)
        : undefined,
    };
  },

  toJSON(message: ProLink_HandlerIn_AddConnectionResult_Success): unknown {
    const obj: any = {};
    message.newGroupDefinition !== undefined &&
      (obj.newGroupDefinition = message.newGroupDefinition
        ? ProLink_GroupDefinition.toJSON(message.newGroupDefinition)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Success>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Success {
    return ProLink_HandlerIn_AddConnectionResult_Success.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Success>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Success {
    const message = createBaseProLink_HandlerIn_AddConnectionResult_Success();
    message.newGroupDefinition =
      object.newGroupDefinition !== undefined &&
      object.newGroupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.newGroupDefinition)
        : undefined;
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure(): ProLink_HandlerIn_AddConnectionResult_Failure {
  return {
    unexpected: undefined,
    declined: undefined,
    timeout: undefined,
    linkDisabled: undefined,
    inOtherGroup: undefined,
    invalidIpAddress: undefined,
    alreadyInGroup: undefined,
    couldNotAdd: undefined,
    couldNotJoin: undefined,
  };
}

export const ProLink_HandlerIn_AddConnectionResult_Failure = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Failure,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unexpected !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.encode(
        message.unexpected,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.declined !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_Declined.encode(
        message.declined,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.timeout !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.encode(
        message.timeout,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.linkDisabled !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.encode(
        message.linkDisabled,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.inOtherGroup !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.encode(
        message.inOtherGroup,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.invalidIpAddress !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.encode(
        message.invalidIpAddress,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.alreadyInGroup !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.encode(
        message.alreadyInGroup,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.couldNotAdd !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.encode(
        message.couldNotAdd,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.couldNotJoin !== undefined) {
      ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.encode(
        message.couldNotJoin,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_AddConnectionResult_Failure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.unexpected =
            ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.declined =
            ProLink_HandlerIn_AddConnectionResult_Failure_Declined.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.timeout =
            ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.linkDisabled =
            ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.inOtherGroup =
            ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.invalidIpAddress =
            ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.alreadyInGroup =
            ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.couldNotAdd =
            ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.couldNotJoin =
            ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_AddConnectionResult_Failure {
    return {
      unexpected: isSet(object.unexpected)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.fromJSON(
            object.unexpected,
          )
        : undefined,
      declined: isSet(object.declined)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Declined.fromJSON(
            object.declined,
          )
        : undefined,
      timeout: isSet(object.timeout)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.fromJSON(
            object.timeout,
          )
        : undefined,
      linkDisabled: isSet(object.linkDisabled)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.fromJSON(
            object.linkDisabled,
          )
        : undefined,
      inOtherGroup: isSet(object.inOtherGroup)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.fromJSON(
            object.inOtherGroup,
          )
        : undefined,
      invalidIpAddress: isSet(object.invalidIpAddress)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.fromJSON(
            object.invalidIpAddress,
          )
        : undefined,
      alreadyInGroup: isSet(object.alreadyInGroup)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.fromJSON(
            object.alreadyInGroup,
          )
        : undefined,
      couldNotAdd: isSet(object.couldNotAdd)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.fromJSON(
            object.couldNotAdd,
          )
        : undefined,
      couldNotJoin: isSet(object.couldNotJoin)
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.fromJSON(
            object.couldNotJoin,
          )
        : undefined,
    };
  },

  toJSON(message: ProLink_HandlerIn_AddConnectionResult_Failure): unknown {
    const obj: any = {};
    message.unexpected !== undefined &&
      (obj.unexpected = message.unexpected
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.toJSON(
            message.unexpected,
          )
        : undefined);
    message.declined !== undefined &&
      (obj.declined = message.declined
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Declined.toJSON(
            message.declined,
          )
        : undefined);
    message.timeout !== undefined &&
      (obj.timeout = message.timeout
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.toJSON(
            message.timeout,
          )
        : undefined);
    message.linkDisabled !== undefined &&
      (obj.linkDisabled = message.linkDisabled
        ? ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.toJSON(
            message.linkDisabled,
          )
        : undefined);
    message.inOtherGroup !== undefined &&
      (obj.inOtherGroup = message.inOtherGroup
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.toJSON(
            message.inOtherGroup,
          )
        : undefined);
    message.invalidIpAddress !== undefined &&
      (obj.invalidIpAddress = message.invalidIpAddress
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.toJSON(
            message.invalidIpAddress,
          )
        : undefined);
    message.alreadyInGroup !== undefined &&
      (obj.alreadyInGroup = message.alreadyInGroup
        ? ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.toJSON(
            message.alreadyInGroup,
          )
        : undefined);
    message.couldNotAdd !== undefined &&
      (obj.couldNotAdd = message.couldNotAdd
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.toJSON(
            message.couldNotAdd,
          )
        : undefined);
    message.couldNotJoin !== undefined &&
      (obj.couldNotJoin = message.couldNotJoin
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.toJSON(
            message.couldNotJoin,
          )
        : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure {
    return ProLink_HandlerIn_AddConnectionResult_Failure.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Failure {
    const message = createBaseProLink_HandlerIn_AddConnectionResult_Failure();
    message.unexpected =
      object.unexpected !== undefined && object.unexpected !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.fromPartial(
            object.unexpected,
          )
        : undefined;
    message.declined =
      object.declined !== undefined && object.declined !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Declined.fromPartial(
            object.declined,
          )
        : undefined;
    message.timeout =
      object.timeout !== undefined && object.timeout !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.fromPartial(
            object.timeout,
          )
        : undefined;
    message.linkDisabled =
      object.linkDisabled !== undefined && object.linkDisabled !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.fromPartial(
            object.linkDisabled,
          )
        : undefined;
    message.inOtherGroup =
      object.inOtherGroup !== undefined && object.inOtherGroup !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.fromPartial(
            object.inOtherGroup,
          )
        : undefined;
    message.invalidIpAddress =
      object.invalidIpAddress !== undefined && object.invalidIpAddress !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.fromPartial(
            object.invalidIpAddress,
          )
        : undefined;
    message.alreadyInGroup =
      object.alreadyInGroup !== undefined && object.alreadyInGroup !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.fromPartial(
            object.alreadyInGroup,
          )
        : undefined;
    message.couldNotAdd =
      object.couldNotAdd !== undefined && object.couldNotAdd !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.fromPartial(
            object.couldNotAdd,
          )
        : undefined;
    message.couldNotJoin =
      object.couldNotJoin !== undefined && object.couldNotJoin !== null
        ? ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.fromPartial(
            object.couldNotJoin,
          )
        : undefined;
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_Unexpected(): ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {
  return {};
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected = {
  encode(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Unexpected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {
    return ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected>,
      I
    >,
  >(_: I): ProLink_HandlerIn_AddConnectionResult_Failure_Unexpected {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Unexpected();
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_Declined(): ProLink_HandlerIn_AddConnectionResult_Failure_Declined {
  return {};
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_Declined = {
  encode(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_Declined,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_Declined {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Declined();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_AddConnectionResult_Failure_Declined {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_AddConnectionResult_Failure_Declined): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Declined>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_Declined {
    return ProLink_HandlerIn_AddConnectionResult_Failure_Declined.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Declined>,
      I
    >,
  >(_: I): ProLink_HandlerIn_AddConnectionResult_Failure_Declined {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Declined();
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_Timeout(): ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {
  return {};
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_Timeout = {
  encode(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_Timeout,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Timeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_AddConnectionResult_Failure_Timeout): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Timeout>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {
    return ProLink_HandlerIn_AddConnectionResult_Failure_Timeout.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_Timeout>,
      I
    >,
  >(_: I): ProLink_HandlerIn_AddConnectionResult_Failure_Timeout {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_Timeout();
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled(): ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {
  return {};
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled = {
  encode(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {
    return {};
  },

  toJSON(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {
    return ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled>,
      I
    >,
  >(_: I): ProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_LinkDisabled();
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup(): ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
  return { memberName: '', groupName: '' };
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberName !== '') {
      writer.uint32(10).string(message.memberName);
    }
    if (message.groupName !== '') {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.memberName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
    return {
      memberName: isSet(object.memberName) ? String(object.memberName) : '',
      groupName: isSet(object.groupName) ? String(object.groupName) : '',
    };
  },

  toJSON(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup,
  ): unknown {
    const obj: any = {};
    message.memberName !== undefined && (obj.memberName = message.memberName);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
    return ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_InOtherGroup();
    message.memberName = object.memberName ?? '';
    message.groupName = object.groupName ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress(): ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {
  return {};
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress = {
  encode(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    _: any,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {
    return {};
  },

  toJSON(
    _: ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress,
  ): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {
    return ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress>,
      I
    >,
  >(_: I): ProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_InvalidIpAddress();
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup(): ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
  return { memberName: '', groupName: '' };
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberName !== '') {
      writer.uint32(10).string(message.memberName);
    }
    if (message.groupName !== '') {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.memberName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
    return {
      memberName: isSet(object.memberName) ? String(object.memberName) : '',
      groupName: isSet(object.groupName) ? String(object.groupName) : '',
    };
  },

  toJSON(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup,
  ): unknown {
    const obj: any = {};
    message.memberName !== undefined && (obj.memberName = message.memberName);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
    return ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_AlreadyInGroup();
    message.memberName = object.memberName ?? '';
    message.groupName = object.groupName ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd(): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
  return { memberName: '' };
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberName !== '') {
      writer.uint32(10).string(message.memberName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.memberName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
    return {
      memberName: isSet(object.memberName) ? String(object.memberName) : '',
    };
  },

  toJSON(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd,
  ): unknown {
    const obj: any = {};
    message.memberName !== undefined && (obj.memberName = message.memberName);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
    return ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotAdd();
    message.memberName = object.memberName ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin(): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
  return { groupName: '' };
}

export const ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin = {
  encode(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupName !== '') {
      writer.uint32(10).string(message.groupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
    return {
      groupName: isSet(object.groupName) ? String(object.groupName) : '',
    };
  },

  toJSON(
    message: ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin,
  ): unknown {
    const obj: any = {};
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin>,
      I
    >,
  >(base?: I): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
    return ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin>,
      I
    >,
  >(object: I): ProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin {
    const message =
      createBaseProLink_HandlerIn_AddConnectionResult_Failure_CouldNotJoin();
    message.groupName = object.groupName ?? '';
    return message;
  },
};

function createBaseProLink_HandlerIn_MemberStatusChange(): ProLink_HandlerIn_MemberStatusChange {
  return { members: [] };
}

export const ProLink_HandlerIn_MemberStatusChange = {
  encode(
    message: ProLink_HandlerIn_MemberStatusChange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.members) {
      ProLink_MemberStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_MemberStatusChange {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_MemberStatusChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.members.push(
            ProLink_MemberStatus.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_MemberStatusChange {
    return {
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => ProLink_MemberStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProLink_HandlerIn_MemberStatusChange): unknown {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? ProLink_MemberStatus.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_MemberStatusChange>, I>>(
    base?: I,
  ): ProLink_HandlerIn_MemberStatusChange {
    return ProLink_HandlerIn_MemberStatusChange.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_MemberStatusChange>, I>,
  >(object: I): ProLink_HandlerIn_MemberStatusChange {
    const message = createBaseProLink_HandlerIn_MemberStatusChange();
    message.members =
      object.members?.map((e) => ProLink_MemberStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProLink_HandlerIn_ProPresenterInfo(): ProLink_HandlerIn_ProPresenterInfo {
  return {};
}

export const ProLink_HandlerIn_ProPresenterInfo = {
  encode(
    _: ProLink_HandlerIn_ProPresenterInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_ProPresenterInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_ProPresenterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_ProPresenterInfo {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_ProPresenterInfo): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_ProPresenterInfo>, I>>(
    base?: I,
  ): ProLink_HandlerIn_ProPresenterInfo {
    return ProLink_HandlerIn_ProPresenterInfo.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_ProPresenterInfo>, I>,
  >(_: I): ProLink_HandlerIn_ProPresenterInfo {
    const message = createBaseProLink_HandlerIn_ProPresenterInfo();
    return message;
  },
};

function createBaseProLink_HandlerIn_ServerState(): ProLink_HandlerIn_ServerState {
  return { localIp: '', publicIp: '', port: 0, success: false };
}

export const ProLink_HandlerIn_ServerState = {
  encode(
    message: ProLink_HandlerIn_ServerState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.localIp !== '') {
      writer.uint32(10).string(message.localIp);
    }
    if (message.publicIp !== '') {
      writer.uint32(18).string(message.publicIp);
    }
    if (message.port !== 0) {
      writer.uint32(24).uint32(message.port);
    }
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_ServerState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_ServerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.localIp = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.publicIp = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_ServerState {
    return {
      localIp: isSet(object.localIp) ? String(object.localIp) : '',
      publicIp: isSet(object.publicIp) ? String(object.publicIp) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: ProLink_HandlerIn_ServerState): unknown {
    const obj: any = {};
    message.localIp !== undefined && (obj.localIp = message.localIp);
    message.publicIp !== undefined && (obj.publicIp = message.publicIp);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_ServerState>, I>>(
    base?: I,
  ): ProLink_HandlerIn_ServerState {
    return ProLink_HandlerIn_ServerState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerIn_ServerState>, I>>(
    object: I,
  ): ProLink_HandlerIn_ServerState {
    const message = createBaseProLink_HandlerIn_ServerState();
    message.localIp = object.localIp ?? '';
    message.publicIp = object.publicIp ?? '';
    message.port = object.port ?? 0;
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseProLink_HandlerIn_ConfigurationRequest(): ProLink_HandlerIn_ConfigurationRequest {
  return {};
}

export const ProLink_HandlerIn_ConfigurationRequest = {
  encode(
    _: ProLink_HandlerIn_ConfigurationRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_ConfigurationRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_ConfigurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProLink_HandlerIn_ConfigurationRequest {
    return {};
  },

  toJSON(_: ProLink_HandlerIn_ConfigurationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_HandlerIn_ConfigurationRequest>, I>,
  >(base?: I): ProLink_HandlerIn_ConfigurationRequest {
    return ProLink_HandlerIn_ConfigurationRequest.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerIn_ConfigurationRequest>, I>,
  >(_: I): ProLink_HandlerIn_ConfigurationRequest {
    const message = createBaseProLink_HandlerIn_ConfigurationRequest();
    return message;
  },
};

function createBaseProLink_HandlerIn_LogRequest(): ProLink_HandlerIn_LogRequest {
  return { severity: 0, message: '' };
}

export const ProLink_HandlerIn_LogRequest = {
  encode(
    message: ProLink_HandlerIn_LogRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }
    if (message.message !== '') {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerIn_LogRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerIn_LogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.severity = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerIn_LogRequest {
    return {
      severity: isSet(object.severity)
        ? proLink_HandlerIn_LogRequest_SeverityFromJSON(object.severity)
        : 0,
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: ProLink_HandlerIn_LogRequest): unknown {
    const obj: any = {};
    message.severity !== undefined &&
      (obj.severity = proLink_HandlerIn_LogRequest_SeverityToJSON(
        message.severity,
      ));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerIn_LogRequest>, I>>(
    base?: I,
  ): ProLink_HandlerIn_LogRequest {
    return ProLink_HandlerIn_LogRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerIn_LogRequest>, I>>(
    object: I,
  ): ProLink_HandlerIn_LogRequest {
    const message = createBaseProLink_HandlerIn_LogRequest();
    message.severity = object.severity ?? 0;
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseProLink_HandlerOut(): ProLink_HandlerOut {
  return {
    groupName: undefined,
    groupDefinition: undefined,
    groupJoinConfirmation: undefined,
    groupJoinPassword: undefined,
    propresenterInfo: undefined,
    configuration: undefined,
  };
}

export const ProLink_HandlerOut = {
  encode(
    message: ProLink_HandlerOut,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupName !== undefined) {
      ProLink_HandlerOut_GroupName.encode(
        message.groupName,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.groupJoinConfirmation !== undefined) {
      ProLink_HandlerOut_GroupJoinConfirmation.encode(
        message.groupJoinConfirmation,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.groupJoinPassword !== undefined) {
      ProLink_HandlerOut_GroupJoinPassword.encode(
        message.groupJoinPassword,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.propresenterInfo !== undefined) {
      ProLink_HandlerOut_ProPresenterInfo.encode(
        message.propresenterInfo,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.configuration !== undefined) {
      ProApiNetworkConfiguration.encode(
        message.configuration,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProLink_HandlerOut {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupName = ProLink_HandlerOut_GroupName.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.groupJoinConfirmation =
            ProLink_HandlerOut_GroupJoinConfirmation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.groupJoinPassword =
            ProLink_HandlerOut_GroupJoinPassword.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.propresenterInfo = ProLink_HandlerOut_ProPresenterInfo.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.configuration = ProApiNetworkConfiguration.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerOut {
    return {
      groupName: isSet(object.groupName)
        ? ProLink_HandlerOut_GroupName.fromJSON(object.groupName)
        : undefined,
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      groupJoinConfirmation: isSet(object.groupJoinConfirmation)
        ? ProLink_HandlerOut_GroupJoinConfirmation.fromJSON(
            object.groupJoinConfirmation,
          )
        : undefined,
      groupJoinPassword: isSet(object.groupJoinPassword)
        ? ProLink_HandlerOut_GroupJoinPassword.fromJSON(
            object.groupJoinPassword,
          )
        : undefined,
      propresenterInfo: isSet(object.propresenterInfo)
        ? ProLink_HandlerOut_ProPresenterInfo.fromJSON(object.propresenterInfo)
        : undefined,
      configuration: isSet(object.configuration)
        ? ProApiNetworkConfiguration.fromJSON(object.configuration)
        : undefined,
    };
  },

  toJSON(message: ProLink_HandlerOut): unknown {
    const obj: any = {};
    message.groupName !== undefined &&
      (obj.groupName = message.groupName
        ? ProLink_HandlerOut_GroupName.toJSON(message.groupName)
        : undefined);
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    message.groupJoinConfirmation !== undefined &&
      (obj.groupJoinConfirmation = message.groupJoinConfirmation
        ? ProLink_HandlerOut_GroupJoinConfirmation.toJSON(
            message.groupJoinConfirmation,
          )
        : undefined);
    message.groupJoinPassword !== undefined &&
      (obj.groupJoinPassword = message.groupJoinPassword
        ? ProLink_HandlerOut_GroupJoinPassword.toJSON(message.groupJoinPassword)
        : undefined);
    message.propresenterInfo !== undefined &&
      (obj.propresenterInfo = message.propresenterInfo
        ? ProLink_HandlerOut_ProPresenterInfo.toJSON(message.propresenterInfo)
        : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? ProApiNetworkConfiguration.toJSON(message.configuration)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerOut>, I>>(
    base?: I,
  ): ProLink_HandlerOut {
    return ProLink_HandlerOut.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerOut>, I>>(
    object: I,
  ): ProLink_HandlerOut {
    const message = createBaseProLink_HandlerOut();
    message.groupName =
      object.groupName !== undefined && object.groupName !== null
        ? ProLink_HandlerOut_GroupName.fromPartial(object.groupName)
        : undefined;
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.groupJoinConfirmation =
      object.groupJoinConfirmation !== undefined &&
      object.groupJoinConfirmation !== null
        ? ProLink_HandlerOut_GroupJoinConfirmation.fromPartial(
            object.groupJoinConfirmation,
          )
        : undefined;
    message.groupJoinPassword =
      object.groupJoinPassword !== undefined &&
      object.groupJoinPassword !== null
        ? ProLink_HandlerOut_GroupJoinPassword.fromPartial(
            object.groupJoinPassword,
          )
        : undefined;
    message.propresenterInfo =
      object.propresenterInfo !== undefined && object.propresenterInfo !== null
        ? ProLink_HandlerOut_ProPresenterInfo.fromPartial(
            object.propresenterInfo,
          )
        : undefined;
    message.configuration =
      object.configuration !== undefined && object.configuration !== null
        ? ProApiNetworkConfiguration.fromPartial(object.configuration)
        : undefined;
    return message;
  },
};

function createBaseProLink_HandlerOut_GroupName(): ProLink_HandlerOut_GroupName {
  return { name: '' };
}

export const ProLink_HandlerOut_GroupName = {
  encode(
    message: ProLink_HandlerOut_GroupName,
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
  ): ProLink_HandlerOut_GroupName {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerOut_GroupName();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerOut_GroupName {
    return { name: isSet(object.name) ? String(object.name) : '' };
  },

  toJSON(message: ProLink_HandlerOut_GroupName): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerOut_GroupName>, I>>(
    base?: I,
  ): ProLink_HandlerOut_GroupName {
    return ProLink_HandlerOut_GroupName.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProLink_HandlerOut_GroupName>, I>>(
    object: I,
  ): ProLink_HandlerOut_GroupName {
    const message = createBaseProLink_HandlerOut_GroupName();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseProLink_HandlerOut_GroupJoinConfirmation(): ProLink_HandlerOut_GroupJoinConfirmation {
  return { accept: false };
}

export const ProLink_HandlerOut_GroupJoinConfirmation = {
  encode(
    message: ProLink_HandlerOut_GroupJoinConfirmation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.accept === true) {
      writer.uint32(8).bool(message.accept);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerOut_GroupJoinConfirmation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerOut_GroupJoinConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.accept = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerOut_GroupJoinConfirmation {
    return { accept: isSet(object.accept) ? Boolean(object.accept) : false };
  },

  toJSON(message: ProLink_HandlerOut_GroupJoinConfirmation): unknown {
    const obj: any = {};
    message.accept !== undefined && (obj.accept = message.accept);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ProLink_HandlerOut_GroupJoinConfirmation>, I>,
  >(base?: I): ProLink_HandlerOut_GroupJoinConfirmation {
    return ProLink_HandlerOut_GroupJoinConfirmation.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerOut_GroupJoinConfirmation>, I>,
  >(object: I): ProLink_HandlerOut_GroupJoinConfirmation {
    const message = createBaseProLink_HandlerOut_GroupJoinConfirmation();
    message.accept = object.accept ?? false;
    return message;
  },
};

function createBaseProLink_HandlerOut_GroupJoinPassword(): ProLink_HandlerOut_GroupJoinPassword {
  return { password: '' };
}

export const ProLink_HandlerOut_GroupJoinPassword = {
  encode(
    message: ProLink_HandlerOut_GroupJoinPassword,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.password !== '') {
      writer.uint32(10).string(message.password);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerOut_GroupJoinPassword {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerOut_GroupJoinPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerOut_GroupJoinPassword {
    return { password: isSet(object.password) ? String(object.password) : '' };
  },

  toJSON(message: ProLink_HandlerOut_GroupJoinPassword): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerOut_GroupJoinPassword>, I>>(
    base?: I,
  ): ProLink_HandlerOut_GroupJoinPassword {
    return ProLink_HandlerOut_GroupJoinPassword.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerOut_GroupJoinPassword>, I>,
  >(object: I): ProLink_HandlerOut_GroupJoinPassword {
    const message = createBaseProLink_HandlerOut_GroupJoinPassword();
    message.password = object.password ?? '';
    return message;
  },
};

function createBaseProLink_HandlerOut_ProPresenterInfo(): ProLink_HandlerOut_ProPresenterInfo {
  return { platform: 0, osVersion: '', hostDescription: '' };
}

export const ProLink_HandlerOut_ProPresenterInfo = {
  encode(
    message: ProLink_HandlerOut_ProPresenterInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    if (message.osVersion !== '') {
      writer.uint32(18).string(message.osVersion);
    }
    if (message.hostDescription !== '') {
      writer.uint32(26).string(message.hostDescription);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ProLink_HandlerOut_ProPresenterInfo {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProLink_HandlerOut_ProPresenterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.osVersion = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hostDescription = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProLink_HandlerOut_ProPresenterInfo {
    return {
      platform: isSet(object.platform)
        ? applicationInfo_PlatformFromJSON(object.platform)
        : 0,
      osVersion: isSet(object.osVersion) ? String(object.osVersion) : '',
      hostDescription: isSet(object.hostDescription)
        ? String(object.hostDescription)
        : '',
    };
  },

  toJSON(message: ProLink_HandlerOut_ProPresenterInfo): unknown {
    const obj: any = {};
    message.platform !== undefined &&
      (obj.platform = applicationInfo_PlatformToJSON(message.platform));
    message.osVersion !== undefined && (obj.osVersion = message.osVersion);
    message.hostDescription !== undefined &&
      (obj.hostDescription = message.hostDescription);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProLink_HandlerOut_ProPresenterInfo>, I>>(
    base?: I,
  ): ProLink_HandlerOut_ProPresenterInfo {
    return ProLink_HandlerOut_ProPresenterInfo.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ProLink_HandlerOut_ProPresenterInfo>, I>,
  >(object: I): ProLink_HandlerOut_ProPresenterInfo {
    const message = createBaseProLink_HandlerOut_ProPresenterInfo();
    message.platform = object.platform ?? 0;
    message.osVersion = object.osVersion ?? '';
    message.hostDescription = object.hostDescription ?? '';
    return message;
  },
};

function createBaseNetworkAPI(): NetworkAPI {
  return {
    action: undefined,
    serverState: undefined,
    groupChange: undefined,
    groupResponse: undefined,
  };
}

export const NetworkAPI = {
  encode(
    message: NetworkAPI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== undefined) {
      NetworkAPI_Action.encode(
        message.action,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.serverState !== undefined) {
      NetworkAPI_ServerState.encode(
        message.serverState,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.groupChange !== undefined) {
      NetworkAPI_GroupChange.encode(
        message.groupChange,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.groupResponse !== undefined) {
      NetworkAPI_GroupResponse.encode(
        message.groupResponse,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAPI {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.action = NetworkAPI_Action.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.serverState = NetworkAPI_ServerState.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.groupChange = NetworkAPI_GroupChange.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.groupResponse = NetworkAPI_GroupResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI {
    return {
      action: isSet(object.action)
        ? NetworkAPI_Action.fromJSON(object.action)
        : undefined,
      serverState: isSet(object.serverState)
        ? NetworkAPI_ServerState.fromJSON(object.serverState)
        : undefined,
      groupChange: isSet(object.groupChange)
        ? NetworkAPI_GroupChange.fromJSON(object.groupChange)
        : undefined,
      groupResponse: isSet(object.groupResponse)
        ? NetworkAPI_GroupResponse.fromJSON(object.groupResponse)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = message.action
        ? NetworkAPI_Action.toJSON(message.action)
        : undefined);
    message.serverState !== undefined &&
      (obj.serverState = message.serverState
        ? NetworkAPI_ServerState.toJSON(message.serverState)
        : undefined);
    message.groupChange !== undefined &&
      (obj.groupChange = message.groupChange
        ? NetworkAPI_GroupChange.toJSON(message.groupChange)
        : undefined);
    message.groupResponse !== undefined &&
      (obj.groupResponse = message.groupResponse
        ? NetworkAPI_GroupResponse.toJSON(message.groupResponse)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI>, I>>(base?: I): NetworkAPI {
    return NetworkAPI.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI>, I>>(
    object: I,
  ): NetworkAPI {
    const message = createBaseNetworkAPI();
    message.action =
      object.action !== undefined && object.action !== null
        ? NetworkAPI_Action.fromPartial(object.action)
        : undefined;
    message.serverState =
      object.serverState !== undefined && object.serverState !== null
        ? NetworkAPI_ServerState.fromPartial(object.serverState)
        : undefined;
    message.groupChange =
      object.groupChange !== undefined && object.groupChange !== null
        ? NetworkAPI_GroupChange.fromPartial(object.groupChange)
        : undefined;
    message.groupResponse =
      object.groupResponse !== undefined && object.groupResponse !== null
        ? NetworkAPI_GroupResponse.fromPartial(object.groupResponse)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_LinkStatus(): NetworkAPI_LinkStatus {
  return {
    platform: 0,
    osVersion: '',
    version: '',
    description: '',
    groupInfo: undefined,
  };
}

export const NetworkAPI_LinkStatus = {
  encode(
    message: NetworkAPI_LinkStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.platform !== 0) {
      writer.uint32(8).int32(message.platform);
    }
    if (message.osVersion !== '') {
      writer.uint32(18).string(message.osVersion);
    }
    if (message.version !== '') {
      writer.uint32(26).string(message.version);
    }
    if (message.description !== '') {
      writer.uint32(34).string(message.description);
    }
    if (message.groupInfo !== undefined) {
      NetworkAPI_Group.encode(
        message.groupInfo,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_LinkStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_LinkStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.platform = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.osVersion = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.groupInfo = NetworkAPI_Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_LinkStatus {
    return {
      platform: isSet(object.platform)
        ? applicationInfo_PlatformFromJSON(object.platform)
        : 0,
      osVersion: isSet(object.osVersion) ? String(object.osVersion) : '',
      version: isSet(object.version) ? String(object.version) : '',
      description: isSet(object.description) ? String(object.description) : '',
      groupInfo: isSet(object.groupInfo)
        ? NetworkAPI_Group.fromJSON(object.groupInfo)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_LinkStatus): unknown {
    const obj: any = {};
    message.platform !== undefined &&
      (obj.platform = applicationInfo_PlatformToJSON(message.platform));
    message.osVersion !== undefined && (obj.osVersion = message.osVersion);
    message.version !== undefined && (obj.version = message.version);
    message.description !== undefined &&
      (obj.description = message.description);
    message.groupInfo !== undefined &&
      (obj.groupInfo = message.groupInfo
        ? NetworkAPI_Group.toJSON(message.groupInfo)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_LinkStatus>, I>>(
    base?: I,
  ): NetworkAPI_LinkStatus {
    return NetworkAPI_LinkStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_LinkStatus>, I>>(
    object: I,
  ): NetworkAPI_LinkStatus {
    const message = createBaseNetworkAPI_LinkStatus();
    message.platform = object.platform ?? 0;
    message.osVersion = object.osVersion ?? '';
    message.version = object.version ?? '';
    message.description = object.description ?? '';
    message.groupInfo =
      object.groupInfo !== undefined && object.groupInfo !== null
        ? NetworkAPI_Group.fromPartial(object.groupInfo)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Group(): NetworkAPI_Group {
  return { name: '', members: [] };
}

export const NetworkAPI_Group = {
  encode(
    message: NetworkAPI_Group,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.members) {
      NetworkAPI_Group_Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAPI_Group {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.members.push(
            NetworkAPI_Group_Member.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Group {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      members: Array.isArray(object?.members)
        ? object.members.map((e: any) => NetworkAPI_Group_Member.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetworkAPI_Group): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? NetworkAPI_Group_Member.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Group>, I>>(
    base?: I,
  ): NetworkAPI_Group {
    return NetworkAPI_Group.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Group>, I>>(
    object: I,
  ): NetworkAPI_Group {
    const message = createBaseNetworkAPI_Group();
    message.name = object.name ?? '';
    message.members =
      object.members?.map((e) => NetworkAPI_Group_Member.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNetworkAPI_Group_Member(): NetworkAPI_Group_Member {
  return { ipAddress: '', port: 0 };
}

export const NetworkAPI_Group_Member = {
  encode(
    message: NetworkAPI_Group_Member,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ipAddress !== '') {
      writer.uint32(10).string(message.ipAddress);
    }
    if (message.port !== 0) {
      writer.uint32(16).int32(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Group_Member {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Group_Member();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.port = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Group_Member {
    return {
      ipAddress: isSet(object.ipAddress) ? String(object.ipAddress) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: NetworkAPI_Group_Member): unknown {
    const obj: any = {};
    message.ipAddress !== undefined && (obj.ipAddress = message.ipAddress);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Group_Member>, I>>(
    base?: I,
  ): NetworkAPI_Group_Member {
    return NetworkAPI_Group_Member.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Group_Member>, I>>(
    object: I,
  ): NetworkAPI_Group_Member {
    const message = createBaseNetworkAPI_Group_Member();
    message.ipAddress = object.ipAddress ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_GroupChange(): NetworkAPI_GroupChange {
  return {
    invite: undefined,
    join: undefined,
    kick: undefined,
    status: undefined,
  };
}

export const NetworkAPI_GroupChange = {
  encode(
    message: NetworkAPI_GroupChange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.invite !== undefined) {
      NetworkAPI_GroupInvite.encode(
        message.invite,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.join !== undefined) {
      NetworkAPI_GroupJoin.encode(
        message.join,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.kick !== undefined) {
      NetworkAPI_GroupKick.encode(
        message.kick,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      NetworkAPI_GroupStatus.encode(
        message.status,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupChange {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.invite = NetworkAPI_GroupInvite.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.join = NetworkAPI_GroupJoin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.kick = NetworkAPI_GroupKick.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.status = NetworkAPI_GroupStatus.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupChange {
    return {
      invite: isSet(object.invite)
        ? NetworkAPI_GroupInvite.fromJSON(object.invite)
        : undefined,
      join: isSet(object.join)
        ? NetworkAPI_GroupJoin.fromJSON(object.join)
        : undefined,
      kick: isSet(object.kick)
        ? NetworkAPI_GroupKick.fromJSON(object.kick)
        : undefined,
      status: isSet(object.status)
        ? NetworkAPI_GroupStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupChange): unknown {
    const obj: any = {};
    message.invite !== undefined &&
      (obj.invite = message.invite
        ? NetworkAPI_GroupInvite.toJSON(message.invite)
        : undefined);
    message.join !== undefined &&
      (obj.join = message.join
        ? NetworkAPI_GroupJoin.toJSON(message.join)
        : undefined);
    message.kick !== undefined &&
      (obj.kick = message.kick
        ? NetworkAPI_GroupKick.toJSON(message.kick)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? NetworkAPI_GroupStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupChange>, I>>(
    base?: I,
  ): NetworkAPI_GroupChange {
    return NetworkAPI_GroupChange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupChange>, I>>(
    object: I,
  ): NetworkAPI_GroupChange {
    const message = createBaseNetworkAPI_GroupChange();
    message.invite =
      object.invite !== undefined && object.invite !== null
        ? NetworkAPI_GroupInvite.fromPartial(object.invite)
        : undefined;
    message.join =
      object.join !== undefined && object.join !== null
        ? NetworkAPI_GroupJoin.fromPartial(object.join)
        : undefined;
    message.kick =
      object.kick !== undefined && object.kick !== null
        ? NetworkAPI_GroupKick.fromPartial(object.kick)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? NetworkAPI_GroupStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_GroupResponse(): NetworkAPI_GroupResponse {
  return { success: undefined, status: undefined };
}

export const NetworkAPI_GroupResponse = {
  encode(
    message: NetworkAPI_GroupResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.success !== undefined) {
      NetworkAPI_GroupResponse_Success.encode(
        message.success,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      NetworkAPI_GroupResponse_Status.encode(
        message.status,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.success = NetworkAPI_GroupResponse_Success.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.status = NetworkAPI_GroupResponse_Status.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupResponse {
    return {
      success: isSet(object.success)
        ? NetworkAPI_GroupResponse_Success.fromJSON(object.success)
        : undefined,
      status: isSet(object.status)
        ? NetworkAPI_GroupResponse_Status.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupResponse): unknown {
    const obj: any = {};
    message.success !== undefined &&
      (obj.success = message.success
        ? NetworkAPI_GroupResponse_Success.toJSON(message.success)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? NetworkAPI_GroupResponse_Status.toJSON(message.status)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupResponse>, I>>(
    base?: I,
  ): NetworkAPI_GroupResponse {
    return NetworkAPI_GroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupResponse>, I>>(
    object: I,
  ): NetworkAPI_GroupResponse {
    const message = createBaseNetworkAPI_GroupResponse();
    message.success =
      object.success !== undefined && object.success !== null
        ? NetworkAPI_GroupResponse_Success.fromPartial(object.success)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? NetworkAPI_GroupResponse_Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_GroupResponse_Success(): NetworkAPI_GroupResponse_Success {
  return {};
}

export const NetworkAPI_GroupResponse_Success = {
  encode(
    _: NetworkAPI_GroupResponse_Success,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupResponse_Success {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupResponse_Success();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_GroupResponse_Success {
    return {};
  },

  toJSON(_: NetworkAPI_GroupResponse_Success): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupResponse_Success>, I>>(
    base?: I,
  ): NetworkAPI_GroupResponse_Success {
    return NetworkAPI_GroupResponse_Success.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_GroupResponse_Success>, I>,
  >(_: I): NetworkAPI_GroupResponse_Success {
    const message = createBaseNetworkAPI_GroupResponse_Success();
    return message;
  },
};

function createBaseNetworkAPI_GroupResponse_Status(): NetworkAPI_GroupResponse_Status {
  return { memberName: '', groupName: '' };
}

export const NetworkAPI_GroupResponse_Status = {
  encode(
    message: NetworkAPI_GroupResponse_Status,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.memberName !== '') {
      writer.uint32(10).string(message.memberName);
    }
    if (message.groupName !== '') {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupResponse_Status {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupResponse_Status();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.memberName = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupResponse_Status {
    return {
      memberName: isSet(object.memberName) ? String(object.memberName) : '',
      groupName: isSet(object.groupName) ? String(object.groupName) : '',
    };
  },

  toJSON(message: NetworkAPI_GroupResponse_Status): unknown {
    const obj: any = {};
    message.memberName !== undefined && (obj.memberName = message.memberName);
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupResponse_Status>, I>>(
    base?: I,
  ): NetworkAPI_GroupResponse_Status {
    return NetworkAPI_GroupResponse_Status.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupResponse_Status>, I>>(
    object: I,
  ): NetworkAPI_GroupResponse_Status {
    const message = createBaseNetworkAPI_GroupResponse_Status();
    message.memberName = object.memberName ?? '';
    message.groupName = object.groupName ?? '';
    return message;
  },
};

function createBaseNetworkAPI_GroupStatus(): NetworkAPI_GroupStatus {
  return { member: undefined };
}

export const NetworkAPI_GroupStatus = {
  encode(
    message: NetworkAPI_GroupStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      NetworkAPI_Group_Member.encode(
        message.member,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.member = NetworkAPI_Group_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupStatus {
    return {
      member: isSet(object.member)
        ? NetworkAPI_Group_Member.fromJSON(object.member)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupStatus): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member
        ? NetworkAPI_Group_Member.toJSON(message.member)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupStatus>, I>>(
    base?: I,
  ): NetworkAPI_GroupStatus {
    return NetworkAPI_GroupStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupStatus>, I>>(
    object: I,
  ): NetworkAPI_GroupStatus {
    const message = createBaseNetworkAPI_GroupStatus();
    message.member =
      object.member !== undefined && object.member !== null
        ? NetworkAPI_Group_Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_GroupInvite(): NetworkAPI_GroupInvite {
  return { groupInfo: undefined, secret: '', prospect: undefined };
}

export const NetworkAPI_GroupInvite = {
  encode(
    message: NetworkAPI_GroupInvite,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupInfo !== undefined) {
      NetworkAPI_Group.encode(
        message.groupInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.secret !== '') {
      writer.uint32(18).string(message.secret);
    }
    if (message.prospect !== undefined) {
      NetworkAPI_Group_Member.encode(
        message.prospect,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupInvite {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupInvite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupInfo = NetworkAPI_Group.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.secret = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.prospect = NetworkAPI_Group_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupInvite {
    return {
      groupInfo: isSet(object.groupInfo)
        ? NetworkAPI_Group.fromJSON(object.groupInfo)
        : undefined,
      secret: isSet(object.secret) ? String(object.secret) : '',
      prospect: isSet(object.prospect)
        ? NetworkAPI_Group_Member.fromJSON(object.prospect)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupInvite): unknown {
    const obj: any = {};
    message.groupInfo !== undefined &&
      (obj.groupInfo = message.groupInfo
        ? NetworkAPI_Group.toJSON(message.groupInfo)
        : undefined);
    message.secret !== undefined && (obj.secret = message.secret);
    message.prospect !== undefined &&
      (obj.prospect = message.prospect
        ? NetworkAPI_Group_Member.toJSON(message.prospect)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupInvite>, I>>(
    base?: I,
  ): NetworkAPI_GroupInvite {
    return NetworkAPI_GroupInvite.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupInvite>, I>>(
    object: I,
  ): NetworkAPI_GroupInvite {
    const message = createBaseNetworkAPI_GroupInvite();
    message.groupInfo =
      object.groupInfo !== undefined && object.groupInfo !== null
        ? NetworkAPI_Group.fromPartial(object.groupInfo)
        : undefined;
    message.secret = object.secret ?? '';
    message.prospect =
      object.prospect !== undefined && object.prospect !== null
        ? NetworkAPI_Group_Member.fromPartial(object.prospect)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_GroupJoin(): NetworkAPI_GroupJoin {
  return { sponsor: undefined, prospect: undefined };
}

export const NetworkAPI_GroupJoin = {
  encode(
    message: NetworkAPI_GroupJoin,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sponsor !== undefined) {
      NetworkAPI_Group_Member.encode(
        message.sponsor,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.prospect !== undefined) {
      NetworkAPI_Group_Member.encode(
        message.prospect,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupJoin {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.sponsor = NetworkAPI_Group_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.prospect = NetworkAPI_Group_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupJoin {
    return {
      sponsor: isSet(object.sponsor)
        ? NetworkAPI_Group_Member.fromJSON(object.sponsor)
        : undefined,
      prospect: isSet(object.prospect)
        ? NetworkAPI_Group_Member.fromJSON(object.prospect)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupJoin): unknown {
    const obj: any = {};
    message.sponsor !== undefined &&
      (obj.sponsor = message.sponsor
        ? NetworkAPI_Group_Member.toJSON(message.sponsor)
        : undefined);
    message.prospect !== undefined &&
      (obj.prospect = message.prospect
        ? NetworkAPI_Group_Member.toJSON(message.prospect)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupJoin>, I>>(
    base?: I,
  ): NetworkAPI_GroupJoin {
    return NetworkAPI_GroupJoin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupJoin>, I>>(
    object: I,
  ): NetworkAPI_GroupJoin {
    const message = createBaseNetworkAPI_GroupJoin();
    message.sponsor =
      object.sponsor !== undefined && object.sponsor !== null
        ? NetworkAPI_Group_Member.fromPartial(object.sponsor)
        : undefined;
    message.prospect =
      object.prospect !== undefined && object.prospect !== null
        ? NetworkAPI_Group_Member.fromPartial(object.prospect)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_GroupKick(): NetworkAPI_GroupKick {
  return { member: undefined };
}

export const NetworkAPI_GroupKick = {
  encode(
    message: NetworkAPI_GroupKick,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.member !== undefined) {
      NetworkAPI_Group_Member.encode(
        message.member,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_GroupKick {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_GroupKick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.member = NetworkAPI_Group_Member.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_GroupKick {
    return {
      member: isSet(object.member)
        ? NetworkAPI_Group_Member.fromJSON(object.member)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_GroupKick): unknown {
    const obj: any = {};
    message.member !== undefined &&
      (obj.member = message.member
        ? NetworkAPI_Group_Member.toJSON(message.member)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_GroupKick>, I>>(
    base?: I,
  ): NetworkAPI_GroupKick {
    return NetworkAPI_GroupKick.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_GroupKick>, I>>(
    object: I,
  ): NetworkAPI_GroupKick {
    const message = createBaseNetworkAPI_GroupKick();
    message.member =
      object.member !== undefined && object.member !== null
        ? NetworkAPI_Group_Member.fromPartial(object.member)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_ServerState(): NetworkAPI_ServerState {
  return { localIp: '', publicIp: '', port: 0 };
}

export const NetworkAPI_ServerState = {
  encode(
    message: NetworkAPI_ServerState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.localIp !== '') {
      writer.uint32(10).string(message.localIp);
    }
    if (message.publicIp !== '') {
      writer.uint32(18).string(message.publicIp);
    }
    if (message.port !== 0) {
      writer.uint32(24).int32(message.port);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_ServerState {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_ServerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.localIp = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.publicIp = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.port = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_ServerState {
    return {
      localIp: isSet(object.localIp) ? String(object.localIp) : '',
      publicIp: isSet(object.publicIp) ? String(object.publicIp) : '',
      port: isSet(object.port) ? Number(object.port) : 0,
    };
  },

  toJSON(message: NetworkAPI_ServerState): unknown {
    const obj: any = {};
    message.localIp !== undefined && (obj.localIp = message.localIp);
    message.publicIp !== undefined && (obj.publicIp = message.publicIp);
    message.port !== undefined && (obj.port = Math.round(message.port));
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_ServerState>, I>>(
    base?: I,
  ): NetworkAPI_ServerState {
    return NetworkAPI_ServerState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_ServerState>, I>>(
    object: I,
  ): NetworkAPI_ServerState {
    const message = createBaseNetworkAPI_ServerState();
    message.localIp = object.localIp ?? '';
    message.publicIp = object.publicIp ?? '';
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_Action(): NetworkAPI_Action {
  return {
    clear: undefined,
    trigger: undefined,
    transport: undefined,
    prop: undefined,
    timer: undefined,
    message: undefined,
    macro: undefined,
    look: undefined,
    stage: undefined,
    status: undefined,
    statusResponse: undefined,
    twoStepTrigger: undefined,
    prerollComplete: undefined,
  };
}

export const NetworkAPI_Action = {
  encode(
    message: NetworkAPI_Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clear !== undefined) {
      NetworkAPI_Action_APIClear.encode(
        message.clear,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.trigger !== undefined) {
      NetworkAPI_Action_APITrigger.encode(
        message.trigger,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.transport !== undefined) {
      NetworkAPI_Action_APITransport.encode(
        message.transport,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.prop !== undefined) {
      NetworkAPI_Action_APIProp.encode(
        message.prop,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.timer !== undefined) {
      NetworkAPI_Action_APITimer.encode(
        message.timer,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.message !== undefined) {
      NetworkAPI_Action_APIMessage.encode(
        message.message,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.macro !== undefined) {
      NetworkAPI_Action_APIMacro.encode(
        message.macro,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.look !== undefined) {
      NetworkAPI_Action_APILook.encode(
        message.look,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.stage !== undefined) {
      NetworkAPI_Action_APIStage.encode(
        message.stage,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      NetworkAPI_Action_APIStatus.encode(
        message.status,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.statusResponse !== undefined) {
      NetworkAPI_Action_APIStatusResponse.encode(
        message.statusResponse,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.twoStepTrigger !== undefined) {
      NetworkAPI_Action_APITwoStepTrigger.encode(
        message.twoStepTrigger,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.prerollComplete !== undefined) {
      NetworkAPI_Action_APIPrerollComplete.encode(
        message.prerollComplete,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAPI_Action {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.clear = NetworkAPI_Action_APIClear.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.trigger = NetworkAPI_Action_APITrigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.transport = NetworkAPI_Action_APITransport.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.prop = NetworkAPI_Action_APIProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.timer = NetworkAPI_Action_APITimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.message = NetworkAPI_Action_APIMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.macro = NetworkAPI_Action_APIMacro.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.look = NetworkAPI_Action_APILook.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.stage = NetworkAPI_Action_APIStage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.status = NetworkAPI_Action_APIStatus.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.statusResponse = NetworkAPI_Action_APIStatusResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.twoStepTrigger = NetworkAPI_Action_APITwoStepTrigger.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.prerollComplete = NetworkAPI_Action_APIPrerollComplete.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action {
    return {
      clear: isSet(object.clear)
        ? NetworkAPI_Action_APIClear.fromJSON(object.clear)
        : undefined,
      trigger: isSet(object.trigger)
        ? NetworkAPI_Action_APITrigger.fromJSON(object.trigger)
        : undefined,
      transport: isSet(object.transport)
        ? NetworkAPI_Action_APITransport.fromJSON(object.transport)
        : undefined,
      prop: isSet(object.prop)
        ? NetworkAPI_Action_APIProp.fromJSON(object.prop)
        : undefined,
      timer: isSet(object.timer)
        ? NetworkAPI_Action_APITimer.fromJSON(object.timer)
        : undefined,
      message: isSet(object.message)
        ? NetworkAPI_Action_APIMessage.fromJSON(object.message)
        : undefined,
      macro: isSet(object.macro)
        ? NetworkAPI_Action_APIMacro.fromJSON(object.macro)
        : undefined,
      look: isSet(object.look)
        ? NetworkAPI_Action_APILook.fromJSON(object.look)
        : undefined,
      stage: isSet(object.stage)
        ? NetworkAPI_Action_APIStage.fromJSON(object.stage)
        : undefined,
      status: isSet(object.status)
        ? NetworkAPI_Action_APIStatus.fromJSON(object.status)
        : undefined,
      statusResponse: isSet(object.statusResponse)
        ? NetworkAPI_Action_APIStatusResponse.fromJSON(object.statusResponse)
        : undefined,
      twoStepTrigger: isSet(object.twoStepTrigger)
        ? NetworkAPI_Action_APITwoStepTrigger.fromJSON(object.twoStepTrigger)
        : undefined,
      prerollComplete: isSet(object.prerollComplete)
        ? NetworkAPI_Action_APIPrerollComplete.fromJSON(object.prerollComplete)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action): unknown {
    const obj: any = {};
    message.clear !== undefined &&
      (obj.clear = message.clear
        ? NetworkAPI_Action_APIClear.toJSON(message.clear)
        : undefined);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? NetworkAPI_Action_APITrigger.toJSON(message.trigger)
        : undefined);
    message.transport !== undefined &&
      (obj.transport = message.transport
        ? NetworkAPI_Action_APITransport.toJSON(message.transport)
        : undefined);
    message.prop !== undefined &&
      (obj.prop = message.prop
        ? NetworkAPI_Action_APIProp.toJSON(message.prop)
        : undefined);
    message.timer !== undefined &&
      (obj.timer = message.timer
        ? NetworkAPI_Action_APITimer.toJSON(message.timer)
        : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? NetworkAPI_Action_APIMessage.toJSON(message.message)
        : undefined);
    message.macro !== undefined &&
      (obj.macro = message.macro
        ? NetworkAPI_Action_APIMacro.toJSON(message.macro)
        : undefined);
    message.look !== undefined &&
      (obj.look = message.look
        ? NetworkAPI_Action_APILook.toJSON(message.look)
        : undefined);
    message.stage !== undefined &&
      (obj.stage = message.stage
        ? NetworkAPI_Action_APIStage.toJSON(message.stage)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? NetworkAPI_Action_APIStatus.toJSON(message.status)
        : undefined);
    message.statusResponse !== undefined &&
      (obj.statusResponse = message.statusResponse
        ? NetworkAPI_Action_APIStatusResponse.toJSON(message.statusResponse)
        : undefined);
    message.twoStepTrigger !== undefined &&
      (obj.twoStepTrigger = message.twoStepTrigger
        ? NetworkAPI_Action_APITwoStepTrigger.toJSON(message.twoStepTrigger)
        : undefined);
    message.prerollComplete !== undefined &&
      (obj.prerollComplete = message.prerollComplete
        ? NetworkAPI_Action_APIPrerollComplete.toJSON(message.prerollComplete)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action>, I>>(
    base?: I,
  ): NetworkAPI_Action {
    return NetworkAPI_Action.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action>, I>>(
    object: I,
  ): NetworkAPI_Action {
    const message = createBaseNetworkAPI_Action();
    message.clear =
      object.clear !== undefined && object.clear !== null
        ? NetworkAPI_Action_APIClear.fromPartial(object.clear)
        : undefined;
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? NetworkAPI_Action_APITrigger.fromPartial(object.trigger)
        : undefined;
    message.transport =
      object.transport !== undefined && object.transport !== null
        ? NetworkAPI_Action_APITransport.fromPartial(object.transport)
        : undefined;
    message.prop =
      object.prop !== undefined && object.prop !== null
        ? NetworkAPI_Action_APIProp.fromPartial(object.prop)
        : undefined;
    message.timer =
      object.timer !== undefined && object.timer !== null
        ? NetworkAPI_Action_APITimer.fromPartial(object.timer)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? NetworkAPI_Action_APIMessage.fromPartial(object.message)
        : undefined;
    message.macro =
      object.macro !== undefined && object.macro !== null
        ? NetworkAPI_Action_APIMacro.fromPartial(object.macro)
        : undefined;
    message.look =
      object.look !== undefined && object.look !== null
        ? NetworkAPI_Action_APILook.fromPartial(object.look)
        : undefined;
    message.stage =
      object.stage !== undefined && object.stage !== null
        ? NetworkAPI_Action_APIStage.fromPartial(object.stage)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? NetworkAPI_Action_APIStatus.fromPartial(object.status)
        : undefined;
    message.statusResponse =
      object.statusResponse !== undefined && object.statusResponse !== null
        ? NetworkAPI_Action_APIStatusResponse.fromPartial(object.statusResponse)
        : undefined;
    message.twoStepTrigger =
      object.twoStepTrigger !== undefined && object.twoStepTrigger !== null
        ? NetworkAPI_Action_APITwoStepTrigger.fromPartial(object.twoStepTrigger)
        : undefined;
    message.prerollComplete =
      object.prerollComplete !== undefined && object.prerollComplete !== null
        ? NetworkAPI_Action_APIPrerollComplete.fromPartial(
            object.prerollComplete,
          )
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIClear(): NetworkAPI_Action_APIClear {
  return { layer: undefined, groupIdentifier: undefined };
}

export const NetworkAPI_Action_APIClear = {
  encode(
    message: NetworkAPI_Action_APIClear,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== undefined) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.groupIdentifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.groupIdentifier,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIClear {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIClear();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groupIdentifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIClear {
    return {
      layer: isSet(object.layer)
        ? networkAPI_Action_APIClear_LayerFromJSON(object.layer)
        : undefined,
      groupIdentifier: isSet(object.groupIdentifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.groupIdentifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIClear): unknown {
    const obj: any = {};
    message.layer !== undefined &&
      (obj.layer =
        message.layer !== undefined
          ? networkAPI_Action_APIClear_LayerToJSON(message.layer)
          : undefined);
    message.groupIdentifier !== undefined &&
      (obj.groupIdentifier = message.groupIdentifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.groupIdentifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIClear>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIClear {
    return NetworkAPI_Action_APIClear.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIClear>, I>>(
    object: I,
  ): NetworkAPI_Action_APIClear {
    const message = createBaseNetworkAPI_Action_APIClear();
    message.layer = object.layer ?? undefined;
    message.groupIdentifier =
      object.groupIdentifier !== undefined && object.groupIdentifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.groupIdentifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITwoStepTrigger(): NetworkAPI_Action_APITwoStepTrigger {
  return {
    id: 0,
    operation: 0,
    renderTime: 0,
    presentation: undefined,
    media: undefined,
    videoInput: undefined,
    audio: undefined,
    prop: undefined,
    message: undefined,
  };
}

export const NetworkAPI_Action_APITwoStepTrigger = {
  encode(
    message: NetworkAPI_Action_APITwoStepTrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.operation !== 0) {
      writer.uint32(16).int32(message.operation);
    }
    if (message.renderTime !== 0) {
      writer.uint32(24).uint64(message.renderTime);
    }
    if (message.presentation !== undefined) {
      NetworkAPI_Action_APITrigger_Presentation.encode(
        message.presentation,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      NetworkAPI_Action_APITrigger_Media.encode(
        message.media,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.videoInput !== undefined) {
      NetworkAPI_Action_APITrigger_VideoInput.encode(
        message.videoInput,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      NetworkAPI_Action_APITrigger_Audio.encode(
        message.audio,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.prop !== undefined) {
      NetworkAPI_Action_APIProp_TriggerProp.encode(
        message.prop,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.message !== undefined) {
      NetworkAPI_Action_APIMessage_TriggerMessage.encode(
        message.message,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITwoStepTrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITwoStepTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.renderTime = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.presentation =
            NetworkAPI_Action_APITrigger_Presentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.media = NetworkAPI_Action_APITrigger_Media.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.videoInput = NetworkAPI_Action_APITrigger_VideoInput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.audio = NetworkAPI_Action_APITrigger_Audio.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.prop = NetworkAPI_Action_APIProp_TriggerProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.message = NetworkAPI_Action_APIMessage_TriggerMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITwoStepTrigger {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      operation: isSet(object.operation)
        ? networkAPI_Action_APITwoStepTrigger_OperationFromJSON(
            object.operation,
          )
        : 0,
      renderTime: isSet(object.renderTime) ? Number(object.renderTime) : 0,
      presentation: isSet(object.presentation)
        ? NetworkAPI_Action_APITrigger_Presentation.fromJSON(
            object.presentation,
          )
        : undefined,
      media: isSet(object.media)
        ? NetworkAPI_Action_APITrigger_Media.fromJSON(object.media)
        : undefined,
      videoInput: isSet(object.videoInput)
        ? NetworkAPI_Action_APITrigger_VideoInput.fromJSON(object.videoInput)
        : undefined,
      audio: isSet(object.audio)
        ? NetworkAPI_Action_APITrigger_Audio.fromJSON(object.audio)
        : undefined,
      prop: isSet(object.prop)
        ? NetworkAPI_Action_APIProp_TriggerProp.fromJSON(object.prop)
        : undefined,
      message: isSet(object.message)
        ? NetworkAPI_Action_APIMessage_TriggerMessage.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITwoStepTrigger): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.operation !== undefined &&
      (obj.operation = networkAPI_Action_APITwoStepTrigger_OperationToJSON(
        message.operation,
      ));
    message.renderTime !== undefined &&
      (obj.renderTime = Math.round(message.renderTime));
    message.presentation !== undefined &&
      (obj.presentation = message.presentation
        ? NetworkAPI_Action_APITrigger_Presentation.toJSON(message.presentation)
        : undefined);
    message.media !== undefined &&
      (obj.media = message.media
        ? NetworkAPI_Action_APITrigger_Media.toJSON(message.media)
        : undefined);
    message.videoInput !== undefined &&
      (obj.videoInput = message.videoInput
        ? NetworkAPI_Action_APITrigger_VideoInput.toJSON(message.videoInput)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? NetworkAPI_Action_APITrigger_Audio.toJSON(message.audio)
        : undefined);
    message.prop !== undefined &&
      (obj.prop = message.prop
        ? NetworkAPI_Action_APIProp_TriggerProp.toJSON(message.prop)
        : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? NetworkAPI_Action_APIMessage_TriggerMessage.toJSON(message.message)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITwoStepTrigger>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITwoStepTrigger {
    return NetworkAPI_Action_APITwoStepTrigger.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITwoStepTrigger>, I>,
  >(object: I): NetworkAPI_Action_APITwoStepTrigger {
    const message = createBaseNetworkAPI_Action_APITwoStepTrigger();
    message.id = object.id ?? 0;
    message.operation = object.operation ?? 0;
    message.renderTime = object.renderTime ?? 0;
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? NetworkAPI_Action_APITrigger_Presentation.fromPartial(
            object.presentation,
          )
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? NetworkAPI_Action_APITrigger_Media.fromPartial(object.media)
        : undefined;
    message.videoInput =
      object.videoInput !== undefined && object.videoInput !== null
        ? NetworkAPI_Action_APITrigger_VideoInput.fromPartial(object.videoInput)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? NetworkAPI_Action_APITrigger_Audio.fromPartial(object.audio)
        : undefined;
    message.prop =
      object.prop !== undefined && object.prop !== null
        ? NetworkAPI_Action_APIProp_TriggerProp.fromPartial(object.prop)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? NetworkAPI_Action_APIMessage_TriggerMessage.fromPartial(
            object.message,
          )
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIPrerollComplete(): NetworkAPI_Action_APIPrerollComplete {
  return { id: 0, failed: false, latency: 0 };
}

export const NetworkAPI_Action_APIPrerollComplete = {
  encode(
    message: NetworkAPI_Action_APIPrerollComplete,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.failed === true) {
      writer.uint32(16).bool(message.failed);
    }
    if (message.latency !== 0) {
      writer.uint32(24).uint64(message.latency);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIPrerollComplete {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIPrerollComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.failed = reader.bool();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.latency = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIPrerollComplete {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      failed: isSet(object.failed) ? Boolean(object.failed) : false,
      latency: isSet(object.latency) ? Number(object.latency) : 0,
    };
  },

  toJSON(message: NetworkAPI_Action_APIPrerollComplete): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.failed !== undefined && (obj.failed = message.failed);
    message.latency !== undefined &&
      (obj.latency = Math.round(message.latency));
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIPrerollComplete>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIPrerollComplete {
    return NetworkAPI_Action_APIPrerollComplete.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIPrerollComplete>, I>,
  >(object: I): NetworkAPI_Action_APIPrerollComplete {
    const message = createBaseNetworkAPI_Action_APIPrerollComplete();
    message.id = object.id ?? 0;
    message.failed = object.failed ?? false;
    message.latency = object.latency ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger(): NetworkAPI_Action_APITrigger {
  return {
    presentation: undefined,
    media: undefined,
    videoInput: undefined,
    audio: undefined,
  };
}

export const NetworkAPI_Action_APITrigger = {
  encode(
    message: NetworkAPI_Action_APITrigger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.presentation !== undefined) {
      NetworkAPI_Action_APITrigger_Presentation.encode(
        message.presentation,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.media !== undefined) {
      NetworkAPI_Action_APITrigger_Media.encode(
        message.media,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.videoInput !== undefined) {
      NetworkAPI_Action_APITrigger_VideoInput.encode(
        message.videoInput,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.audio !== undefined) {
      NetworkAPI_Action_APITrigger_Audio.encode(
        message.audio,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.presentation =
            NetworkAPI_Action_APITrigger_Presentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.media = NetworkAPI_Action_APITrigger_Media.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.videoInput = NetworkAPI_Action_APITrigger_VideoInput.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.audio = NetworkAPI_Action_APITrigger_Audio.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITrigger {
    return {
      presentation: isSet(object.presentation)
        ? NetworkAPI_Action_APITrigger_Presentation.fromJSON(
            object.presentation,
          )
        : undefined,
      media: isSet(object.media)
        ? NetworkAPI_Action_APITrigger_Media.fromJSON(object.media)
        : undefined,
      videoInput: isSet(object.videoInput)
        ? NetworkAPI_Action_APITrigger_VideoInput.fromJSON(object.videoInput)
        : undefined,
      audio: isSet(object.audio)
        ? NetworkAPI_Action_APITrigger_Audio.fromJSON(object.audio)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITrigger): unknown {
    const obj: any = {};
    message.presentation !== undefined &&
      (obj.presentation = message.presentation
        ? NetworkAPI_Action_APITrigger_Presentation.toJSON(message.presentation)
        : undefined);
    message.media !== undefined &&
      (obj.media = message.media
        ? NetworkAPI_Action_APITrigger_Media.toJSON(message.media)
        : undefined);
    message.videoInput !== undefined &&
      (obj.videoInput = message.videoInput
        ? NetworkAPI_Action_APITrigger_VideoInput.toJSON(message.videoInput)
        : undefined);
    message.audio !== undefined &&
      (obj.audio = message.audio
        ? NetworkAPI_Action_APITrigger_Audio.toJSON(message.audio)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITrigger {
    return NetworkAPI_Action_APITrigger.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger>, I>>(
    object: I,
  ): NetworkAPI_Action_APITrigger {
    const message = createBaseNetworkAPI_Action_APITrigger();
    message.presentation =
      object.presentation !== undefined && object.presentation !== null
        ? NetworkAPI_Action_APITrigger_Presentation.fromPartial(
            object.presentation,
          )
        : undefined;
    message.media =
      object.media !== undefined && object.media !== null
        ? NetworkAPI_Action_APITrigger_Media.fromPartial(object.media)
        : undefined;
    message.videoInput =
      object.videoInput !== undefined && object.videoInput !== null
        ? NetworkAPI_Action_APITrigger_VideoInput.fromPartial(object.videoInput)
        : undefined;
    message.audio =
      object.audio !== undefined && object.audio !== null
        ? NetworkAPI_Action_APITrigger_Audio.fromPartial(object.audio)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_Presentation(): NetworkAPI_Action_APITrigger_Presentation {
  return { playlistIndexPath: undefined, libraryIndexPath: undefined };
}

export const NetworkAPI_Action_APITrigger_Presentation = {
  encode(
    message: NetworkAPI_Action_APITrigger_Presentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playlistIndexPath !== undefined) {
      NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.encode(
        message.playlistIndexPath,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.libraryIndexPath !== undefined) {
      NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.encode(
        message.libraryIndexPath,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_Presentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITrigger_Presentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag != 18) {
            break;
          }

          message.playlistIndexPath =
            NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.libraryIndexPath =
            NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITrigger_Presentation {
    return {
      playlistIndexPath: isSet(object.playlistIndexPath)
        ? NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.fromJSON(
            object.playlistIndexPath,
          )
        : undefined,
      libraryIndexPath: isSet(object.libraryIndexPath)
        ? NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.fromJSON(
            object.libraryIndexPath,
          )
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITrigger_Presentation): unknown {
    const obj: any = {};
    message.playlistIndexPath !== undefined &&
      (obj.playlistIndexPath = message.playlistIndexPath
        ? NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.toJSON(
            message.playlistIndexPath,
          )
        : undefined);
    message.libraryIndexPath !== undefined &&
      (obj.libraryIndexPath = message.libraryIndexPath
        ? NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.toJSON(
            message.libraryIndexPath,
          )
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Presentation>, I>,
  >(base?: I): NetworkAPI_Action_APITrigger_Presentation {
    return NetworkAPI_Action_APITrigger_Presentation.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Presentation>, I>,
  >(object: I): NetworkAPI_Action_APITrigger_Presentation {
    const message = createBaseNetworkAPI_Action_APITrigger_Presentation();
    message.playlistIndexPath =
      object.playlistIndexPath !== undefined &&
      object.playlistIndexPath !== null
        ? NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.fromPartial(
            object.playlistIndexPath,
          )
        : undefined;
    message.libraryIndexPath =
      object.libraryIndexPath !== undefined && object.libraryIndexPath !== null
        ? NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.fromPartial(
            object.libraryIndexPath,
          )
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation(): NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
  return { indexPathComponents: [] };
}

export const NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation = {
  encode(
    message: NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.indexPathComponents) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseNetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.indexPathComponents.push(
            NetworkAPI_IndexOrNameIdentifier.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
    return {
      indexPathComponents: Array.isArray(object?.indexPathComponents)
        ? object.indexPathComponents.map((e: any) =>
            NetworkAPI_IndexOrNameIdentifier.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(
    message: NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation,
  ): unknown {
    const obj: any = {};
    if (message.indexPathComponents) {
      obj.indexPathComponents = message.indexPathComponents.map((e) =>
        e ? NetworkAPI_IndexOrNameIdentifier.toJSON(e) : undefined,
      );
    } else {
      obj.indexPathComponents = [];
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
    return NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation>,
      I
    >,
  >(object: I): NetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation {
    const message =
      createBaseNetworkAPI_Action_APITrigger_Presentation_PlaylistPresentation();
    message.indexPathComponents =
      object.indexPathComponents?.map((e) =>
        NetworkAPI_IndexOrNameIdentifier.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_Presentation_LibraryPresentation(): NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
  return {
    libraryComponent: undefined,
    presentationComponent: undefined,
    cueComponent: undefined,
  };
}

export const NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation = {
  encode(
    message: NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.libraryComponent !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.libraryComponent,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.presentationComponent !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.presentationComponent,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cueComponent !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.cueComponent,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseNetworkAPI_Action_APITrigger_Presentation_LibraryPresentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.libraryComponent = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.presentationComponent =
            NetworkAPI_IndexOrNameIdentifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.cueComponent = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
    return {
      libraryComponent: isSet(object.libraryComponent)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.libraryComponent)
        : undefined,
      presentationComponent: isSet(object.presentationComponent)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(
            object.presentationComponent,
          )
        : undefined,
      cueComponent: isSet(object.cueComponent)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.cueComponent)
        : undefined,
    };
  },

  toJSON(
    message: NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation,
  ): unknown {
    const obj: any = {};
    message.libraryComponent !== undefined &&
      (obj.libraryComponent = message.libraryComponent
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.libraryComponent)
        : undefined);
    message.presentationComponent !== undefined &&
      (obj.presentationComponent = message.presentationComponent
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.presentationComponent)
        : undefined);
    message.cueComponent !== undefined &&
      (obj.cueComponent = message.cueComponent
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.cueComponent)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
    return NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation>,
      I
    >,
  >(object: I): NetworkAPI_Action_APITrigger_Presentation_LibraryPresentation {
    const message =
      createBaseNetworkAPI_Action_APITrigger_Presentation_LibraryPresentation();
    message.libraryComponent =
      object.libraryComponent !== undefined && object.libraryComponent !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.libraryComponent)
        : undefined;
    message.presentationComponent =
      object.presentationComponent !== undefined &&
      object.presentationComponent !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(
            object.presentationComponent,
          )
        : undefined;
    message.cueComponent =
      object.cueComponent !== undefined && object.cueComponent !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.cueComponent)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_Media(): NetworkAPI_Action_APITrigger_Media {
  return { indexPathComponents: [] };
}

export const NetworkAPI_Action_APITrigger_Media = {
  encode(
    message: NetworkAPI_Action_APITrigger_Media,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.indexPathComponents) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_Media {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITrigger_Media();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.indexPathComponents.push(
            NetworkAPI_IndexOrNameIdentifier.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITrigger_Media {
    return {
      indexPathComponents: Array.isArray(object?.indexPathComponents)
        ? object.indexPathComponents.map((e: any) =>
            NetworkAPI_IndexOrNameIdentifier.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: NetworkAPI_Action_APITrigger_Media): unknown {
    const obj: any = {};
    if (message.indexPathComponents) {
      obj.indexPathComponents = message.indexPathComponents.map((e) =>
        e ? NetworkAPI_IndexOrNameIdentifier.toJSON(e) : undefined,
      );
    } else {
      obj.indexPathComponents = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Media>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITrigger_Media {
    return NetworkAPI_Action_APITrigger_Media.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Media>, I>,
  >(object: I): NetworkAPI_Action_APITrigger_Media {
    const message = createBaseNetworkAPI_Action_APITrigger_Media();
    message.indexPathComponents =
      object.indexPathComponents?.map((e) =>
        NetworkAPI_IndexOrNameIdentifier.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_VideoInput(): NetworkAPI_Action_APITrigger_VideoInput {
  return { videoInputId: undefined };
}

export const NetworkAPI_Action_APITrigger_VideoInput = {
  encode(
    message: NetworkAPI_Action_APITrigger_VideoInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.videoInputId !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.videoInputId,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_VideoInput {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITrigger_VideoInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.videoInputId = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITrigger_VideoInput {
    return {
      videoInputId: isSet(object.videoInputId)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.videoInputId)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITrigger_VideoInput): unknown {
    const obj: any = {};
    message.videoInputId !== undefined &&
      (obj.videoInputId = message.videoInputId
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.videoInputId)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_VideoInput>, I>,
  >(base?: I): NetworkAPI_Action_APITrigger_VideoInput {
    return NetworkAPI_Action_APITrigger_VideoInput.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_VideoInput>, I>,
  >(object: I): NetworkAPI_Action_APITrigger_VideoInput {
    const message = createBaseNetworkAPI_Action_APITrigger_VideoInput();
    message.videoInputId =
      object.videoInputId !== undefined && object.videoInputId !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.videoInputId)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITrigger_Audio(): NetworkAPI_Action_APITrigger_Audio {
  return { indexPathComponents: [] };
}

export const NetworkAPI_Action_APITrigger_Audio = {
  encode(
    message: NetworkAPI_Action_APITrigger_Audio,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.indexPathComponents) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITrigger_Audio {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITrigger_Audio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.indexPathComponents.push(
            NetworkAPI_IndexOrNameIdentifier.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITrigger_Audio {
    return {
      indexPathComponents: Array.isArray(object?.indexPathComponents)
        ? object.indexPathComponents.map((e: any) =>
            NetworkAPI_IndexOrNameIdentifier.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: NetworkAPI_Action_APITrigger_Audio): unknown {
    const obj: any = {};
    if (message.indexPathComponents) {
      obj.indexPathComponents = message.indexPathComponents.map((e) =>
        e ? NetworkAPI_IndexOrNameIdentifier.toJSON(e) : undefined,
      );
    } else {
      obj.indexPathComponents = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Audio>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITrigger_Audio {
    return NetworkAPI_Action_APITrigger_Audio.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITrigger_Audio>, I>,
  >(object: I): NetworkAPI_Action_APITrigger_Audio {
    const message = createBaseNetworkAPI_Action_APITrigger_Audio();
    message.indexPathComponents =
      object.indexPathComponents?.map((e) =>
        NetworkAPI_IndexOrNameIdentifier.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport(): NetworkAPI_Action_APITransport {
  return {
    layer: 0,
    play: undefined,
    pause: undefined,
    skipBackward: undefined,
    skipForward: undefined,
    goToEnd: undefined,
  };
}

export const NetworkAPI_Action_APITransport = {
  encode(
    message: NetworkAPI_Action_APITransport,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layer !== 0) {
      writer.uint32(8).int32(message.layer);
    }
    if (message.play !== undefined) {
      NetworkAPI_Action_APITransport_Play.encode(
        message.play,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.pause !== undefined) {
      NetworkAPI_Action_APITransport_Pause.encode(
        message.pause,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.skipBackward !== undefined) {
      NetworkAPI_Action_APITransport_SkipBackward.encode(
        message.skipBackward,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.skipForward !== undefined) {
      NetworkAPI_Action_APITransport_SkipForward.encode(
        message.skipForward,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.goToEnd !== undefined) {
      NetworkAPI_Action_APITransport_GoToEnd.encode(
        message.goToEnd,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.layer = reader.int32() as any;
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.play = NetworkAPI_Action_APITransport_Play.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.pause = NetworkAPI_Action_APITransport_Pause.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.skipBackward =
            NetworkAPI_Action_APITransport_SkipBackward.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.skipForward =
            NetworkAPI_Action_APITransport_SkipForward.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.goToEnd = NetworkAPI_Action_APITransport_GoToEnd.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITransport {
    return {
      layer: isSet(object.layer)
        ? networkAPI_Action_APITransport_TransportLayerFromJSON(object.layer)
        : 0,
      play: isSet(object.play)
        ? NetworkAPI_Action_APITransport_Play.fromJSON(object.play)
        : undefined,
      pause: isSet(object.pause)
        ? NetworkAPI_Action_APITransport_Pause.fromJSON(object.pause)
        : undefined,
      skipBackward: isSet(object.skipBackward)
        ? NetworkAPI_Action_APITransport_SkipBackward.fromJSON(
            object.skipBackward,
          )
        : undefined,
      skipForward: isSet(object.skipForward)
        ? NetworkAPI_Action_APITransport_SkipForward.fromJSON(
            object.skipForward,
          )
        : undefined,
      goToEnd: isSet(object.goToEnd)
        ? NetworkAPI_Action_APITransport_GoToEnd.fromJSON(object.goToEnd)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITransport): unknown {
    const obj: any = {};
    message.layer !== undefined &&
      (obj.layer = networkAPI_Action_APITransport_TransportLayerToJSON(
        message.layer,
      ));
    message.play !== undefined &&
      (obj.play = message.play
        ? NetworkAPI_Action_APITransport_Play.toJSON(message.play)
        : undefined);
    message.pause !== undefined &&
      (obj.pause = message.pause
        ? NetworkAPI_Action_APITransport_Pause.toJSON(message.pause)
        : undefined);
    message.skipBackward !== undefined &&
      (obj.skipBackward = message.skipBackward
        ? NetworkAPI_Action_APITransport_SkipBackward.toJSON(
            message.skipBackward,
          )
        : undefined);
    message.skipForward !== undefined &&
      (obj.skipForward = message.skipForward
        ? NetworkAPI_Action_APITransport_SkipForward.toJSON(message.skipForward)
        : undefined);
    message.goToEnd !== undefined &&
      (obj.goToEnd = message.goToEnd
        ? NetworkAPI_Action_APITransport_GoToEnd.toJSON(message.goToEnd)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITransport>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITransport {
    return NetworkAPI_Action_APITransport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APITransport>, I>>(
    object: I,
  ): NetworkAPI_Action_APITransport {
    const message = createBaseNetworkAPI_Action_APITransport();
    message.layer = object.layer ?? 0;
    message.play =
      object.play !== undefined && object.play !== null
        ? NetworkAPI_Action_APITransport_Play.fromPartial(object.play)
        : undefined;
    message.pause =
      object.pause !== undefined && object.pause !== null
        ? NetworkAPI_Action_APITransport_Pause.fromPartial(object.pause)
        : undefined;
    message.skipBackward =
      object.skipBackward !== undefined && object.skipBackward !== null
        ? NetworkAPI_Action_APITransport_SkipBackward.fromPartial(
            object.skipBackward,
          )
        : undefined;
    message.skipForward =
      object.skipForward !== undefined && object.skipForward !== null
        ? NetworkAPI_Action_APITransport_SkipForward.fromPartial(
            object.skipForward,
          )
        : undefined;
    message.goToEnd =
      object.goToEnd !== undefined && object.goToEnd !== null
        ? NetworkAPI_Action_APITransport_GoToEnd.fromPartial(object.goToEnd)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport_Play(): NetworkAPI_Action_APITransport_Play {
  return {};
}

export const NetworkAPI_Action_APITransport_Play = {
  encode(
    _: NetworkAPI_Action_APITransport_Play,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport_Play {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport_Play();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_APITransport_Play {
    return {};
  },

  toJSON(_: NetworkAPI_Action_APITransport_Play): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_Play>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITransport_Play {
    return NetworkAPI_Action_APITransport_Play.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_Play>, I>,
  >(_: I): NetworkAPI_Action_APITransport_Play {
    const message = createBaseNetworkAPI_Action_APITransport_Play();
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport_Pause(): NetworkAPI_Action_APITransport_Pause {
  return {};
}

export const NetworkAPI_Action_APITransport_Pause = {
  encode(
    _: NetworkAPI_Action_APITransport_Pause,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport_Pause {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport_Pause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_APITransport_Pause {
    return {};
  },

  toJSON(_: NetworkAPI_Action_APITransport_Pause): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_Pause>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITransport_Pause {
    return NetworkAPI_Action_APITransport_Pause.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_Pause>, I>,
  >(_: I): NetworkAPI_Action_APITransport_Pause {
    const message = createBaseNetworkAPI_Action_APITransport_Pause();
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport_SkipBackward(): NetworkAPI_Action_APITransport_SkipBackward {
  return { seconds: 0 };
}

export const NetworkAPI_Action_APITransport_SkipBackward = {
  encode(
    message: NetworkAPI_Action_APITransport_SkipBackward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int32(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport_SkipBackward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport_SkipBackward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.seconds = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITransport_SkipBackward {
    return { seconds: isSet(object.seconds) ? Number(object.seconds) : 0 };
  },

  toJSON(message: NetworkAPI_Action_APITransport_SkipBackward): unknown {
    const obj: any = {};
    message.seconds !== undefined &&
      (obj.seconds = Math.round(message.seconds));
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITransport_SkipBackward>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APITransport_SkipBackward {
    return NetworkAPI_Action_APITransport_SkipBackward.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APITransport_SkipBackward>,
      I
    >,
  >(object: I): NetworkAPI_Action_APITransport_SkipBackward {
    const message = createBaseNetworkAPI_Action_APITransport_SkipBackward();
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport_SkipForward(): NetworkAPI_Action_APITransport_SkipForward {
  return { seconds: 0 };
}

export const NetworkAPI_Action_APITransport_SkipForward = {
  encode(
    message: NetworkAPI_Action_APITransport_SkipForward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int32(message.seconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport_SkipForward {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport_SkipForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.seconds = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITransport_SkipForward {
    return { seconds: isSet(object.seconds) ? Number(object.seconds) : 0 };
  },

  toJSON(message: NetworkAPI_Action_APITransport_SkipForward): unknown {
    const obj: any = {};
    message.seconds !== undefined &&
      (obj.seconds = Math.round(message.seconds));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_SkipForward>, I>,
  >(base?: I): NetworkAPI_Action_APITransport_SkipForward {
    return NetworkAPI_Action_APITransport_SkipForward.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_SkipForward>, I>,
  >(object: I): NetworkAPI_Action_APITransport_SkipForward {
    const message = createBaseNetworkAPI_Action_APITransport_SkipForward();
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITransport_GoToEnd(): NetworkAPI_Action_APITransport_GoToEnd {
  return { secondsToEnd: 0 };
}

export const NetworkAPI_Action_APITransport_GoToEnd = {
  encode(
    message: NetworkAPI_Action_APITransport_GoToEnd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.secondsToEnd !== 0) {
      writer.uint32(8).int32(message.secondsToEnd);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITransport_GoToEnd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITransport_GoToEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.secondsToEnd = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITransport_GoToEnd {
    return {
      secondsToEnd: isSet(object.secondsToEnd)
        ? Number(object.secondsToEnd)
        : 0,
    };
  },

  toJSON(message: NetworkAPI_Action_APITransport_GoToEnd): unknown {
    const obj: any = {};
    message.secondsToEnd !== undefined &&
      (obj.secondsToEnd = Math.round(message.secondsToEnd));
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_GoToEnd>, I>,
  >(base?: I): NetworkAPI_Action_APITransport_GoToEnd {
    return NetworkAPI_Action_APITransport_GoToEnd.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITransport_GoToEnd>, I>,
  >(object: I): NetworkAPI_Action_APITransport_GoToEnd {
    const message = createBaseNetworkAPI_Action_APITransport_GoToEnd();
    message.secondsToEnd = object.secondsToEnd ?? 0;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIProp(): NetworkAPI_Action_APIProp {
  return { trigger: undefined, clear: undefined };
}

export const NetworkAPI_Action_APIProp = {
  encode(
    message: NetworkAPI_Action_APIProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trigger !== undefined) {
      NetworkAPI_Action_APIProp_TriggerProp.encode(
        message.trigger,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.clear !== undefined) {
      NetworkAPI_Action_APIProp_ClearProp.encode(
        message.clear,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIProp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trigger = NetworkAPI_Action_APIProp_TriggerProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clear = NetworkAPI_Action_APIProp_ClearProp.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIProp {
    return {
      trigger: isSet(object.trigger)
        ? NetworkAPI_Action_APIProp_TriggerProp.fromJSON(object.trigger)
        : undefined,
      clear: isSet(object.clear)
        ? NetworkAPI_Action_APIProp_ClearProp.fromJSON(object.clear)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIProp): unknown {
    const obj: any = {};
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? NetworkAPI_Action_APIProp_TriggerProp.toJSON(message.trigger)
        : undefined);
    message.clear !== undefined &&
      (obj.clear = message.clear
        ? NetworkAPI_Action_APIProp_ClearProp.toJSON(message.clear)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIProp>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIProp {
    return NetworkAPI_Action_APIProp.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIProp>, I>>(
    object: I,
  ): NetworkAPI_Action_APIProp {
    const message = createBaseNetworkAPI_Action_APIProp();
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? NetworkAPI_Action_APIProp_TriggerProp.fromPartial(object.trigger)
        : undefined;
    message.clear =
      object.clear !== undefined && object.clear !== null
        ? NetworkAPI_Action_APIProp_ClearProp.fromPartial(object.clear)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIProp_TriggerProp(): NetworkAPI_Action_APIProp_TriggerProp {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APIProp_TriggerProp = {
  encode(
    message: NetworkAPI_Action_APIProp_TriggerProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIProp_TriggerProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIProp_TriggerProp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIProp_TriggerProp {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIProp_TriggerProp): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIProp_TriggerProp>, I>,
  >(base?: I): NetworkAPI_Action_APIProp_TriggerProp {
    return NetworkAPI_Action_APIProp_TriggerProp.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIProp_TriggerProp>, I>,
  >(object: I): NetworkAPI_Action_APIProp_TriggerProp {
    const message = createBaseNetworkAPI_Action_APIProp_TriggerProp();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIProp_ClearProp(): NetworkAPI_Action_APIProp_ClearProp {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APIProp_ClearProp = {
  encode(
    message: NetworkAPI_Action_APIProp_ClearProp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIProp_ClearProp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIProp_ClearProp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIProp_ClearProp {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIProp_ClearProp): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIProp_ClearProp>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIProp_ClearProp {
    return NetworkAPI_Action_APIProp_ClearProp.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIProp_ClearProp>, I>,
  >(object: I): NetworkAPI_Action_APIProp_ClearProp {
    const message = createBaseNetworkAPI_Action_APIProp_ClearProp();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITimer(): NetworkAPI_Action_APITimer {
  return {
    start: undefined,
    stop: undefined,
    reset: undefined,
    configure: undefined,
  };
}

export const NetworkAPI_Action_APITimer = {
  encode(
    message: NetworkAPI_Action_APITimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.start !== undefined) {
      NetworkAPI_Action_APITimer_StartTimer.encode(
        message.start,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.stop !== undefined) {
      NetworkAPI_Action_APITimer_StopTimer.encode(
        message.stop,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.reset !== undefined) {
      NetworkAPI_Action_APITimer_ResetTimer.encode(
        message.reset,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.configure !== undefined) {
      NetworkAPI_Action_APITimer_ConfigureTimer.encode(
        message.configure,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.start = NetworkAPI_Action_APITimer_StartTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.stop = NetworkAPI_Action_APITimer_StopTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.reset = NetworkAPI_Action_APITimer_ResetTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.configure = NetworkAPI_Action_APITimer_ConfigureTimer.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITimer {
    return {
      start: isSet(object.start)
        ? NetworkAPI_Action_APITimer_StartTimer.fromJSON(object.start)
        : undefined,
      stop: isSet(object.stop)
        ? NetworkAPI_Action_APITimer_StopTimer.fromJSON(object.stop)
        : undefined,
      reset: isSet(object.reset)
        ? NetworkAPI_Action_APITimer_ResetTimer.fromJSON(object.reset)
        : undefined,
      configure: isSet(object.configure)
        ? NetworkAPI_Action_APITimer_ConfigureTimer.fromJSON(object.configure)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITimer): unknown {
    const obj: any = {};
    message.start !== undefined &&
      (obj.start = message.start
        ? NetworkAPI_Action_APITimer_StartTimer.toJSON(message.start)
        : undefined);
    message.stop !== undefined &&
      (obj.stop = message.stop
        ? NetworkAPI_Action_APITimer_StopTimer.toJSON(message.stop)
        : undefined);
    message.reset !== undefined &&
      (obj.reset = message.reset
        ? NetworkAPI_Action_APITimer_ResetTimer.toJSON(message.reset)
        : undefined);
    message.configure !== undefined &&
      (obj.configure = message.configure
        ? NetworkAPI_Action_APITimer_ConfigureTimer.toJSON(message.configure)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITimer>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITimer {
    return NetworkAPI_Action_APITimer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APITimer>, I>>(
    object: I,
  ): NetworkAPI_Action_APITimer {
    const message = createBaseNetworkAPI_Action_APITimer();
    message.start =
      object.start !== undefined && object.start !== null
        ? NetworkAPI_Action_APITimer_StartTimer.fromPartial(object.start)
        : undefined;
    message.stop =
      object.stop !== undefined && object.stop !== null
        ? NetworkAPI_Action_APITimer_StopTimer.fromPartial(object.stop)
        : undefined;
    message.reset =
      object.reset !== undefined && object.reset !== null
        ? NetworkAPI_Action_APITimer_ResetTimer.fromPartial(object.reset)
        : undefined;
    message.configure =
      object.configure !== undefined && object.configure !== null
        ? NetworkAPI_Action_APITimer_ConfigureTimer.fromPartial(
            object.configure,
          )
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITimer_StartTimer(): NetworkAPI_Action_APITimer_StartTimer {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APITimer_StartTimer = {
  encode(
    message: NetworkAPI_Action_APITimer_StartTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITimer_StartTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITimer_StartTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITimer_StartTimer {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITimer_StartTimer): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_StartTimer>, I>,
  >(base?: I): NetworkAPI_Action_APITimer_StartTimer {
    return NetworkAPI_Action_APITimer_StartTimer.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_StartTimer>, I>,
  >(object: I): NetworkAPI_Action_APITimer_StartTimer {
    const message = createBaseNetworkAPI_Action_APITimer_StartTimer();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITimer_StopTimer(): NetworkAPI_Action_APITimer_StopTimer {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APITimer_StopTimer = {
  encode(
    message: NetworkAPI_Action_APITimer_StopTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITimer_StopTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITimer_StopTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITimer_StopTimer {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITimer_StopTimer): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_StopTimer>, I>>(
    base?: I,
  ): NetworkAPI_Action_APITimer_StopTimer {
    return NetworkAPI_Action_APITimer_StopTimer.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_StopTimer>, I>,
  >(object: I): NetworkAPI_Action_APITimer_StopTimer {
    const message = createBaseNetworkAPI_Action_APITimer_StopTimer();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITimer_ResetTimer(): NetworkAPI_Action_APITimer_ResetTimer {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APITimer_ResetTimer = {
  encode(
    message: NetworkAPI_Action_APITimer_ResetTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITimer_ResetTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITimer_ResetTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITimer_ResetTimer {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITimer_ResetTimer): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_ResetTimer>, I>,
  >(base?: I): NetworkAPI_Action_APITimer_ResetTimer {
    return NetworkAPI_Action_APITimer_ResetTimer.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_ResetTimer>, I>,
  >(object: I): NetworkAPI_Action_APITimer_ResetTimer {
    const message = createBaseNetworkAPI_Action_APITimer_ResetTimer();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APITimer_ConfigureTimer(): NetworkAPI_Action_APITimer_ConfigureTimer {
  return { identifier: undefined, configuration: undefined };
}

export const NetworkAPI_Action_APITimer_ConfigureTimer = {
  encode(
    message: NetworkAPI_Action_APITimer_ConfigureTimer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.configuration !== undefined) {
      Timer_Configuration.encode(
        message.configuration,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APITimer_ConfigureTimer {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APITimer_ConfigureTimer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.configuration = Timer_Configuration.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APITimer_ConfigureTimer {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
      configuration: isSet(object.configuration)
        ? Timer_Configuration.fromJSON(object.configuration)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APITimer_ConfigureTimer): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? Timer_Configuration.toJSON(message.configuration)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_ConfigureTimer>, I>,
  >(base?: I): NetworkAPI_Action_APITimer_ConfigureTimer {
    return NetworkAPI_Action_APITimer_ConfigureTimer.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APITimer_ConfigureTimer>, I>,
  >(object: I): NetworkAPI_Action_APITimer_ConfigureTimer {
    const message = createBaseNetworkAPI_Action_APITimer_ConfigureTimer();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    message.configuration =
      object.configuration !== undefined && object.configuration !== null
        ? Timer_Configuration.fromPartial(object.configuration)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIMessage(): NetworkAPI_Action_APIMessage {
  return { trigger: undefined, clear: undefined };
}

export const NetworkAPI_Action_APIMessage = {
  encode(
    message: NetworkAPI_Action_APIMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trigger !== undefined) {
      NetworkAPI_Action_APIMessage_TriggerMessage.encode(
        message.trigger,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.clear !== undefined) {
      NetworkAPI_Action_APIMessage_ClearMessage.encode(
        message.clear,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.trigger = NetworkAPI_Action_APIMessage_TriggerMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clear = NetworkAPI_Action_APIMessage_ClearMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIMessage {
    return {
      trigger: isSet(object.trigger)
        ? NetworkAPI_Action_APIMessage_TriggerMessage.fromJSON(object.trigger)
        : undefined,
      clear: isSet(object.clear)
        ? NetworkAPI_Action_APIMessage_ClearMessage.fromJSON(object.clear)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIMessage): unknown {
    const obj: any = {};
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? NetworkAPI_Action_APIMessage_TriggerMessage.toJSON(message.trigger)
        : undefined);
    message.clear !== undefined &&
      (obj.clear = message.clear
        ? NetworkAPI_Action_APIMessage_ClearMessage.toJSON(message.clear)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIMessage>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIMessage {
    return NetworkAPI_Action_APIMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIMessage>, I>>(
    object: I,
  ): NetworkAPI_Action_APIMessage {
    const message = createBaseNetworkAPI_Action_APIMessage();
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? NetworkAPI_Action_APIMessage_TriggerMessage.fromPartial(
            object.trigger,
          )
        : undefined;
    message.clear =
      object.clear !== undefined && object.clear !== null
        ? NetworkAPI_Action_APIMessage_ClearMessage.fromPartial(object.clear)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIMessage_TriggerMessage(): NetworkAPI_Action_APIMessage_TriggerMessage {
  return { identifier: undefined, tokenValues: [] };
}

export const NetworkAPI_Action_APIMessage_TriggerMessage = {
  encode(
    message: NetworkAPI_Action_APIMessage_TriggerMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.tokenValues) {
      Message_TokenValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIMessage_TriggerMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIMessage_TriggerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenValues.push(
            Message_TokenValue.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIMessage_TriggerMessage {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
      tokenValues: Array.isArray(object?.tokenValues)
        ? object.tokenValues.map((e: any) => Message_TokenValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetworkAPI_Action_APIMessage_TriggerMessage): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    if (message.tokenValues) {
      obj.tokenValues = message.tokenValues.map((e) =>
        e ? Message_TokenValue.toJSON(e) : undefined,
      );
    } else {
      obj.tokenValues = [];
    }
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIMessage_TriggerMessage>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APIMessage_TriggerMessage {
    return NetworkAPI_Action_APIMessage_TriggerMessage.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIMessage_TriggerMessage>,
      I
    >,
  >(object: I): NetworkAPI_Action_APIMessage_TriggerMessage {
    const message = createBaseNetworkAPI_Action_APIMessage_TriggerMessage();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    message.tokenValues =
      object.tokenValues?.map((e) => Message_TokenValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNetworkAPI_Action_APIMessage_ClearMessage(): NetworkAPI_Action_APIMessage_ClearMessage {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APIMessage_ClearMessage = {
  encode(
    message: NetworkAPI_Action_APIMessage_ClearMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIMessage_ClearMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIMessage_ClearMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIMessage_ClearMessage {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIMessage_ClearMessage): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIMessage_ClearMessage>, I>,
  >(base?: I): NetworkAPI_Action_APIMessage_ClearMessage {
    return NetworkAPI_Action_APIMessage_ClearMessage.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIMessage_ClearMessage>, I>,
  >(object: I): NetworkAPI_Action_APIMessage_ClearMessage {
    const message = createBaseNetworkAPI_Action_APIMessage_ClearMessage();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIMacro(): NetworkAPI_Action_APIMacro {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APIMacro = {
  encode(
    message: NetworkAPI_Action_APIMacro,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIMacro {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIMacro();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIMacro {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIMacro): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIMacro>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIMacro {
    return NetworkAPI_Action_APIMacro.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIMacro>, I>>(
    object: I,
  ): NetworkAPI_Action_APIMacro {
    const message = createBaseNetworkAPI_Action_APIMacro();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APILook(): NetworkAPI_Action_APILook {
  return { identifier: undefined };
}

export const NetworkAPI_Action_APILook = {
  encode(
    message: NetworkAPI_Action_APILook,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.identifier !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.identifier,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APILook {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APILook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.identifier = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APILook {
    return {
      identifier: isSet(object.identifier)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.identifier)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APILook): unknown {
    const obj: any = {};
    message.identifier !== undefined &&
      (obj.identifier = message.identifier
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.identifier)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APILook>, I>>(
    base?: I,
  ): NetworkAPI_Action_APILook {
    return NetworkAPI_Action_APILook.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APILook>, I>>(
    object: I,
  ): NetworkAPI_Action_APILook {
    const message = createBaseNetworkAPI_Action_APILook();
    message.identifier =
      object.identifier !== undefined && object.identifier !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.identifier)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage(): NetworkAPI_Action_APIStage {
  return { layouts: undefined, message: undefined };
}

export const NetworkAPI_Action_APIStage = {
  encode(
    message: NetworkAPI_Action_APIStage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.layouts !== undefined) {
      NetworkAPI_Action_APIStage_StageLayouts.encode(
        message.layouts,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.message !== undefined) {
      NetworkAPI_Action_APIStage_StageMessage.encode(
        message.message,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIStage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.layouts = NetworkAPI_Action_APIStage_StageLayouts.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.message = NetworkAPI_Action_APIStage_StageMessage.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIStage {
    return {
      layouts: isSet(object.layouts)
        ? NetworkAPI_Action_APIStage_StageLayouts.fromJSON(object.layouts)
        : undefined,
      message: isSet(object.message)
        ? NetworkAPI_Action_APIStage_StageMessage.fromJSON(object.message)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIStage): unknown {
    const obj: any = {};
    message.layouts !== undefined &&
      (obj.layouts = message.layouts
        ? NetworkAPI_Action_APIStage_StageLayouts.toJSON(message.layouts)
        : undefined);
    message.message !== undefined &&
      (obj.message = message.message
        ? NetworkAPI_Action_APIStage_StageMessage.toJSON(message.message)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIStage>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIStage {
    return NetworkAPI_Action_APIStage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIStage>, I>>(
    object: I,
  ): NetworkAPI_Action_APIStage {
    const message = createBaseNetworkAPI_Action_APIStage();
    message.layouts =
      object.layouts !== undefined && object.layouts !== null
        ? NetworkAPI_Action_APIStage_StageLayouts.fromPartial(object.layouts)
        : undefined;
    message.message =
      object.message !== undefined && object.message !== null
        ? NetworkAPI_Action_APIStage_StageMessage.fromPartial(object.message)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage_StageLayouts(): NetworkAPI_Action_APIStage_StageLayouts {
  return { layouts: [] };
}

export const NetworkAPI_Action_APIStage_StageLayouts = {
  encode(
    message: NetworkAPI_Action_APIStage_StageLayouts,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.layouts) {
      NetworkAPI_IndexOrNameIdentifierPair.encode(
        v!,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage_StageLayouts {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIStage_StageLayouts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.layouts.push(
            NetworkAPI_IndexOrNameIdentifierPair.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIStage_StageLayouts {
    return {
      layouts: Array.isArray(object?.layouts)
        ? object.layouts.map((e: any) =>
            NetworkAPI_IndexOrNameIdentifierPair.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: NetworkAPI_Action_APIStage_StageLayouts): unknown {
    const obj: any = {};
    if (message.layouts) {
      obj.layouts = message.layouts.map((e) =>
        e ? NetworkAPI_IndexOrNameIdentifierPair.toJSON(e) : undefined,
      );
    } else {
      obj.layouts = [];
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIStage_StageLayouts>, I>,
  >(base?: I): NetworkAPI_Action_APIStage_StageLayouts {
    return NetworkAPI_Action_APIStage_StageLayouts.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIStage_StageLayouts>, I>,
  >(object: I): NetworkAPI_Action_APIStage_StageLayouts {
    const message = createBaseNetworkAPI_Action_APIStage_StageLayouts();
    message.layouts =
      object.layouts?.map((e) =>
        NetworkAPI_IndexOrNameIdentifierPair.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage_StageMessage(): NetworkAPI_Action_APIStage_StageMessage {
  return {
    showMessage: undefined,
    clearMessage: undefined,
    hideMessage: undefined,
  };
}

export const NetworkAPI_Action_APIStage_StageMessage = {
  encode(
    message: NetworkAPI_Action_APIStage_StageMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.showMessage !== undefined) {
      NetworkAPI_Action_APIStage_StageMessage_ShowMessage.encode(
        message.showMessage,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.clearMessage !== undefined) {
      NetworkAPI_Action_APIStage_StageMessage_ClearMessage.encode(
        message.clearMessage,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.hideMessage !== undefined) {
      NetworkAPI_Action_APIStage_StageMessage_HideMessage.encode(
        message.hideMessage,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage_StageMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIStage_StageMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.showMessage =
            NetworkAPI_Action_APIStage_StageMessage_ShowMessage.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.clearMessage =
            NetworkAPI_Action_APIStage_StageMessage_ClearMessage.decode(
              reader,
              reader.uint32(),
            );
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.hideMessage =
            NetworkAPI_Action_APIStage_StageMessage_HideMessage.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIStage_StageMessage {
    return {
      showMessage: isSet(object.showMessage)
        ? NetworkAPI_Action_APIStage_StageMessage_ShowMessage.fromJSON(
            object.showMessage,
          )
        : undefined,
      clearMessage: isSet(object.clearMessage)
        ? NetworkAPI_Action_APIStage_StageMessage_ClearMessage.fromJSON(
            object.clearMessage,
          )
        : undefined,
      hideMessage: isSet(object.hideMessage)
        ? NetworkAPI_Action_APIStage_StageMessage_HideMessage.fromJSON(
            object.hideMessage,
          )
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIStage_StageMessage): unknown {
    const obj: any = {};
    message.showMessage !== undefined &&
      (obj.showMessage = message.showMessage
        ? NetworkAPI_Action_APIStage_StageMessage_ShowMessage.toJSON(
            message.showMessage,
          )
        : undefined);
    message.clearMessage !== undefined &&
      (obj.clearMessage = message.clearMessage
        ? NetworkAPI_Action_APIStage_StageMessage_ClearMessage.toJSON(
            message.clearMessage,
          )
        : undefined);
    message.hideMessage !== undefined &&
      (obj.hideMessage = message.hideMessage
        ? NetworkAPI_Action_APIStage_StageMessage_HideMessage.toJSON(
            message.hideMessage,
          )
        : undefined);
    return obj;
  },

  create<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIStage_StageMessage>, I>,
  >(base?: I): NetworkAPI_Action_APIStage_StageMessage {
    return NetworkAPI_Action_APIStage_StageMessage.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIStage_StageMessage>, I>,
  >(object: I): NetworkAPI_Action_APIStage_StageMessage {
    const message = createBaseNetworkAPI_Action_APIStage_StageMessage();
    message.showMessage =
      object.showMessage !== undefined && object.showMessage !== null
        ? NetworkAPI_Action_APIStage_StageMessage_ShowMessage.fromPartial(
            object.showMessage,
          )
        : undefined;
    message.clearMessage =
      object.clearMessage !== undefined && object.clearMessage !== null
        ? NetworkAPI_Action_APIStage_StageMessage_ClearMessage.fromPartial(
            object.clearMessage,
          )
        : undefined;
    message.hideMessage =
      object.hideMessage !== undefined && object.hideMessage !== null
        ? NetworkAPI_Action_APIStage_StageMessage_HideMessage.fromPartial(
            object.hideMessage,
          )
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage_StageMessage_ShowMessage(): NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
  return { message: '' };
}

export const NetworkAPI_Action_APIStage_StageMessage_ShowMessage = {
  encode(
    message: NetworkAPI_Action_APIStage_StageMessage_ShowMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_ShowMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
    return { message: isSet(object.message) ? String(object.message) : '' };
  },

  toJSON(
    message: NetworkAPI_Action_APIStage_StageMessage_ShowMessage,
  ): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_ShowMessage>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
    return NetworkAPI_Action_APIStage_StageMessage_ShowMessage.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_ShowMessage>,
      I
    >,
  >(object: I): NetworkAPI_Action_APIStage_StageMessage_ShowMessage {
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_ShowMessage();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage_StageMessage_ClearMessage(): NetworkAPI_Action_APIStage_StageMessage_ClearMessage {
  return {};
}

export const NetworkAPI_Action_APIStage_StageMessage_ClearMessage = {
  encode(
    _: NetworkAPI_Action_APIStage_StageMessage_ClearMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage_StageMessage_ClearMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_ClearMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_APIStage_StageMessage_ClearMessage {
    return {};
  },

  toJSON(_: NetworkAPI_Action_APIStage_StageMessage_ClearMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_ClearMessage>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APIStage_StageMessage_ClearMessage {
    return NetworkAPI_Action_APIStage_StageMessage_ClearMessage.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_ClearMessage>,
      I
    >,
  >(_: I): NetworkAPI_Action_APIStage_StageMessage_ClearMessage {
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_ClearMessage();
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStage_StageMessage_HideMessage(): NetworkAPI_Action_APIStage_StageMessage_HideMessage {
  return {};
}

export const NetworkAPI_Action_APIStage_StageMessage_HideMessage = {
  encode(
    _: NetworkAPI_Action_APIStage_StageMessage_HideMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStage_StageMessage_HideMessage {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_HideMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_APIStage_StageMessage_HideMessage {
    return {};
  },

  toJSON(_: NetworkAPI_Action_APIStage_StageMessage_HideMessage): unknown {
    const obj: any = {};
    return obj;
  },

  create<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_HideMessage>,
      I
    >,
  >(base?: I): NetworkAPI_Action_APIStage_StageMessage_HideMessage {
    return NetworkAPI_Action_APIStage_StageMessage_HideMessage.fromPartial(
      base ?? {},
    );
  },

  fromPartial<
    I extends Exact<
      DeepPartial<NetworkAPI_Action_APIStage_StageMessage_HideMessage>,
      I
    >,
  >(_: I): NetworkAPI_Action_APIStage_StageMessage_HideMessage {
    const message =
      createBaseNetworkAPI_Action_APIStage_StageMessage_HideMessage();
    return message;
  },
};

function createBaseNetworkAPI_Action_StatusRequest(): NetworkAPI_Action_StatusRequest {
  return {};
}

export const NetworkAPI_Action_StatusRequest = {
  encode(
    _: NetworkAPI_Action_StatusRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_StatusRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_StatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_StatusRequest {
    return {};
  },

  toJSON(_: NetworkAPI_Action_StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_StatusRequest>, I>>(
    base?: I,
  ): NetworkAPI_Action_StatusRequest {
    return NetworkAPI_Action_StatusRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_StatusRequest>, I>>(
    _: I,
  ): NetworkAPI_Action_StatusRequest {
    const message = createBaseNetworkAPI_Action_StatusRequest();
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStatus(): NetworkAPI_Action_APIStatus {
  return {};
}

export const NetworkAPI_Action_APIStatus = {
  encode(
    _: NetworkAPI_Action_APIStatus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NetworkAPI_Action_APIStatus {
    return {};
  },

  toJSON(_: NetworkAPI_Action_APIStatus): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIStatus>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIStatus {
    return NetworkAPI_Action_APIStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NetworkAPI_Action_APIStatus>, I>>(
    _: I,
  ): NetworkAPI_Action_APIStatus {
    const message = createBaseNetworkAPI_Action_APIStatus();
    return message;
  },
};

function createBaseNetworkAPI_Action_APIStatusResponse(): NetworkAPI_Action_APIStatusResponse {
  return { groupDefinition: undefined, status: undefined };
}

export const NetworkAPI_Action_APIStatusResponse = {
  encode(
    message: NetworkAPI_Action_APIStatusResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.groupDefinition !== undefined) {
      ProLink_GroupDefinition.encode(
        message.groupDefinition,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.status !== undefined) {
      ProLink_MemberStatus.encode(
        message.status,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_Action_APIStatusResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_Action_APIStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.groupDefinition = ProLink_GroupDefinition.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.status = ProLink_MemberStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_Action_APIStatusResponse {
    return {
      groupDefinition: isSet(object.groupDefinition)
        ? ProLink_GroupDefinition.fromJSON(object.groupDefinition)
        : undefined,
      status: isSet(object.status)
        ? ProLink_MemberStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_Action_APIStatusResponse): unknown {
    const obj: any = {};
    message.groupDefinition !== undefined &&
      (obj.groupDefinition = message.groupDefinition
        ? ProLink_GroupDefinition.toJSON(message.groupDefinition)
        : undefined);
    message.status !== undefined &&
      (obj.status = message.status
        ? ProLink_MemberStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_Action_APIStatusResponse>, I>>(
    base?: I,
  ): NetworkAPI_Action_APIStatusResponse {
    return NetworkAPI_Action_APIStatusResponse.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_Action_APIStatusResponse>, I>,
  >(object: I): NetworkAPI_Action_APIStatusResponse {
    const message = createBaseNetworkAPI_Action_APIStatusResponse();
    message.groupDefinition =
      object.groupDefinition !== undefined && object.groupDefinition !== null
        ? ProLink_GroupDefinition.fromPartial(object.groupDefinition)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? ProLink_MemberStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseNetworkAPI_IndexOrNameIdentifier(): NetworkAPI_IndexOrNameIdentifier {
  return { index: undefined, name: undefined };
}

export const NetworkAPI_IndexOrNameIdentifier = {
  encode(
    message: NetworkAPI_IndexOrNameIdentifier,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.index !== undefined) {
      writer.uint32(8).int32(message.index);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_IndexOrNameIdentifier {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_IndexOrNameIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.index = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_IndexOrNameIdentifier {
    return {
      index: isSet(object.index) ? Number(object.index) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
    };
  },

  toJSON(message: NetworkAPI_IndexOrNameIdentifier): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_IndexOrNameIdentifier>, I>>(
    base?: I,
  ): NetworkAPI_IndexOrNameIdentifier {
    return NetworkAPI_IndexOrNameIdentifier.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_IndexOrNameIdentifier>, I>,
  >(object: I): NetworkAPI_IndexOrNameIdentifier {
    const message = createBaseNetworkAPI_IndexOrNameIdentifier();
    message.index = object.index ?? undefined;
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseNetworkAPI_IndexOrNameIdentifierPair(): NetworkAPI_IndexOrNameIdentifierPair {
  return { key: undefined, value: undefined };
}

export const NetworkAPI_IndexOrNameIdentifierPair = {
  encode(
    message: NetworkAPI_IndexOrNameIdentifierPair,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.key,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.value !== undefined) {
      NetworkAPI_IndexOrNameIdentifier.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): NetworkAPI_IndexOrNameIdentifierPair {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAPI_IndexOrNameIdentifierPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = NetworkAPI_IndexOrNameIdentifier.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkAPI_IndexOrNameIdentifierPair {
    return {
      key: isSet(object.key)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.key)
        : undefined,
      value: isSet(object.value)
        ? NetworkAPI_IndexOrNameIdentifier.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: NetworkAPI_IndexOrNameIdentifierPair): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.key)
        : undefined);
    message.value !== undefined &&
      (obj.value = message.value
        ? NetworkAPI_IndexOrNameIdentifier.toJSON(message.value)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkAPI_IndexOrNameIdentifierPair>, I>>(
    base?: I,
  ): NetworkAPI_IndexOrNameIdentifierPair {
    return NetworkAPI_IndexOrNameIdentifierPair.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<NetworkAPI_IndexOrNameIdentifierPair>, I>,
  >(object: I): NetworkAPI_IndexOrNameIdentifierPair {
    const message = createBaseNetworkAPI_IndexOrNameIdentifierPair();
    message.key =
      object.key !== undefined && object.key !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.key)
        : undefined;
    message.value =
      object.value !== undefined && object.value !== null
        ? NetworkAPI_IndexOrNameIdentifier.fromPartial(object.value)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      'Value is larger than Number.MAX_SAFE_INTEGER',
    );
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
