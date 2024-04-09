/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "registration.core";

export enum Status {
  Success = 0,
  ExpiredLicense = 1,
  DeactivatedLicense = 2,
  DisabledLicense = 3,
  NoSeats = 4,
  NoCopies = 5,
  MissingLicense = 6,
  TimeDiscrepancy = 7,
  BibleMissing = 8,
  BibleNotPurchased = 9,
  BibleActivationMissing = 10,
  BibleDeactivated = 11,
  NetworkError = 12,
  IOError = 13,
  NotInitialized = 14,
  UnknownError = 15,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "Success":
      return Status.Success;
    case 1:
    case "ExpiredLicense":
      return Status.ExpiredLicense;
    case 2:
    case "DeactivatedLicense":
      return Status.DeactivatedLicense;
    case 3:
    case "DisabledLicense":
      return Status.DisabledLicense;
    case 4:
    case "NoSeats":
      return Status.NoSeats;
    case 5:
    case "NoCopies":
      return Status.NoCopies;
    case 6:
    case "MissingLicense":
      return Status.MissingLicense;
    case 7:
    case "TimeDiscrepancy":
      return Status.TimeDiscrepancy;
    case 8:
    case "BibleMissing":
      return Status.BibleMissing;
    case 9:
    case "BibleNotPurchased":
      return Status.BibleNotPurchased;
    case 10:
    case "BibleActivationMissing":
      return Status.BibleActivationMissing;
    case 11:
    case "BibleDeactivated":
      return Status.BibleDeactivated;
    case 12:
    case "NetworkError":
      return Status.NetworkError;
    case 13:
    case "IOError":
      return Status.IOError;
    case 14:
    case "NotInitialized":
      return Status.NotInitialized;
    case 15:
    case "UnknownError":
      return Status.UnknownError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.Success:
      return "Success";
    case Status.ExpiredLicense:
      return "ExpiredLicense";
    case Status.DeactivatedLicense:
      return "DeactivatedLicense";
    case Status.DisabledLicense:
      return "DisabledLicense";
    case Status.NoSeats:
      return "NoSeats";
    case Status.NoCopies:
      return "NoCopies";
    case Status.MissingLicense:
      return "MissingLicense";
    case Status.TimeDiscrepancy:
      return "TimeDiscrepancy";
    case Status.BibleMissing:
      return "BibleMissing";
    case Status.BibleNotPurchased:
      return "BibleNotPurchased";
    case Status.BibleActivationMissing:
      return "BibleActivationMissing";
    case Status.BibleDeactivated:
      return "BibleDeactivated";
    case Status.NetworkError:
      return "NetworkError";
    case Status.IOError:
      return "IOError";
    case Status.NotInitialized:
      return "NotInitialized";
    case Status.UnknownError:
      return "UnknownError";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SeatType {
  Inactive = 0,
  Basic = 1,
  Advanced = 2,
  UNRECOGNIZED = -1,
}

export function seatTypeFromJSON(object: any): SeatType {
  switch (object) {
    case 0:
    case "Inactive":
      return SeatType.Inactive;
    case 1:
    case "Basic":
      return SeatType.Basic;
    case 2:
    case "Advanced":
      return SeatType.Advanced;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SeatType.UNRECOGNIZED;
  }
}

export function seatTypeToJSON(object: SeatType): string {
  switch (object) {
    case SeatType.Inactive:
      return "Inactive";
    case SeatType.Basic:
      return "Basic";
    case SeatType.Advanced:
      return "Advanced";
    case SeatType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LicenseType {
  Trial = 0,
  Rental = 1,
  Standard = 2,
  Campus = 3,
  UNRECOGNIZED = -1,
}

export function licenseTypeFromJSON(object: any): LicenseType {
  switch (object) {
    case 0:
    case "Trial":
      return LicenseType.Trial;
    case 1:
    case "Rental":
      return LicenseType.Rental;
    case 2:
    case "Standard":
      return LicenseType.Standard;
    case 3:
    case "Campus":
      return LicenseType.Campus;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LicenseType.UNRECOGNIZED;
  }
}

export function licenseTypeToJSON(object: LicenseType): string {
  switch (object) {
    case LicenseType.Trial:
      return "Trial";
    case LicenseType.Rental:
      return "Rental";
    case LicenseType.Standard:
      return "Standard";
    case LicenseType.Campus:
      return "Campus";
    case LicenseType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateChannel {
  Beta = 0,
  Production = 1,
  UNRECOGNIZED = -1,
}

export function updateChannelFromJSON(object: any): UpdateChannel {
  switch (object) {
    case 0:
    case "Beta":
      return UpdateChannel.Beta;
    case 1:
    case "Production":
      return UpdateChannel.Production;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateChannel.UNRECOGNIZED;
  }
}

export function updateChannelToJSON(object: UpdateChannel): string {
  switch (object) {
    case UpdateChannel.Beta:
      return "Beta";
    case UpdateChannel.Production:
      return "Production";
    case UpdateChannel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AlertType {
  Info = 0,
  Feature = 1,
  Warning = 2,
  UNRECOGNIZED = -1,
}

export function alertTypeFromJSON(object: any): AlertType {
  switch (object) {
    case 0:
    case "Info":
      return AlertType.Info;
    case 1:
    case "Feature":
      return AlertType.Feature;
    case 2:
    case "Warning":
      return AlertType.Warning;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlertType.UNRECOGNIZED;
  }
}

export function alertTypeToJSON(object: AlertType): string {
  switch (object) {
    case AlertType.Info:
      return "Info";
    case AlertType.Feature:
      return "Feature";
    case AlertType.Warning:
      return "Warning";
    case AlertType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum AlertContentType {
  ContentType = 0,
  Text = 1,
  InternalLink = 2,
  ExternalLink = 3,
  UNRECOGNIZED = -1,
}

export function alertContentTypeFromJSON(object: any): AlertContentType {
  switch (object) {
    case 0:
    case "ContentType":
      return AlertContentType.ContentType;
    case 1:
    case "Text":
      return AlertContentType.Text;
    case 2:
    case "InternalLink":
      return AlertContentType.InternalLink;
    case 3:
    case "ExternalLink":
      return AlertContentType.ExternalLink;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlertContentType.UNRECOGNIZED;
  }
}

export function alertContentTypeToJSON(object: AlertContentType): string {
  switch (object) {
    case AlertContentType.ContentType:
      return "ContentType";
    case AlertContentType.Text:
      return "Text";
    case AlertContentType.InternalLink:
      return "InternalLink";
    case AlertContentType.ExternalLink:
      return "ExternalLink";
    case AlertContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReadTokenStatus {
  ReadTokenSuccess = 0,
  TokenNotPresent = 1,
  UNRECOGNIZED = -1,
}

export function readTokenStatusFromJSON(object: any): ReadTokenStatus {
  switch (object) {
    case 0:
    case "ReadTokenSuccess":
      return ReadTokenStatus.ReadTokenSuccess;
    case 1:
    case "TokenNotPresent":
      return ReadTokenStatus.TokenNotPresent;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReadTokenStatus.UNRECOGNIZED;
  }
}

export function readTokenStatusToJSON(object: ReadTokenStatus): string {
  switch (object) {
    case ReadTokenStatus.ReadTokenSuccess:
      return "ReadTokenSuccess";
    case ReadTokenStatus.TokenNotPresent:
      return "TokenNotPresent";
    case ReadTokenStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProContentLicenseType {
  Free = 0,
  Premium = 1,
  UNRECOGNIZED = -1,
}

export function proContentLicenseTypeFromJSON(object: any): ProContentLicenseType {
  switch (object) {
    case 0:
    case "Free":
      return ProContentLicenseType.Free;
    case 1:
    case "Premium":
      return ProContentLicenseType.Premium;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProContentLicenseType.UNRECOGNIZED;
  }
}

export function proContentLicenseTypeToJSON(object: ProContentLicenseType): string {
  switch (object) {
    case ProContentLicenseType.Free:
      return "Free";
    case ProContentLicenseType.Premium:
      return "Premium";
    case ProContentLicenseType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PopupAlertMessage {
  NoPopupAlert = 0,
  Activation = 1,
  ActivationNoSeat = 2,
  NotSignedIn = 3,
  SignedInNoSubscription = 4,
  UNRECOGNIZED = -1,
}

export function popupAlertMessageFromJSON(object: any): PopupAlertMessage {
  switch (object) {
    case 0:
    case "NoPopupAlert":
      return PopupAlertMessage.NoPopupAlert;
    case 1:
    case "Activation":
      return PopupAlertMessage.Activation;
    case 2:
    case "ActivationNoSeat":
      return PopupAlertMessage.ActivationNoSeat;
    case 3:
    case "NotSignedIn":
      return PopupAlertMessage.NotSignedIn;
    case 4:
    case "SignedInNoSubscription":
      return PopupAlertMessage.SignedInNoSubscription;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PopupAlertMessage.UNRECOGNIZED;
  }
}

export function popupAlertMessageToJSON(object: PopupAlertMessage): string {
  switch (object) {
    case PopupAlertMessage.NoPopupAlert:
      return "NoPopupAlert";
    case PopupAlertMessage.Activation:
      return "Activation";
    case PopupAlertMessage.ActivationNoSeat:
      return "ActivationNoSeat";
    case PopupAlertMessage.NotSignedIn:
      return "NotSignedIn";
    case PopupAlertMessage.SignedInNoSubscription:
      return "SignedInNoSubscription";
    case PopupAlertMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BannerMessage {
  NoBanner = 0,
  ActivateProPresenter = 1,
  UNRECOGNIZED = -1,
}

export function bannerMessageFromJSON(object: any): BannerMessage {
  switch (object) {
    case 0:
    case "NoBanner":
      return BannerMessage.NoBanner;
    case 1:
    case "ActivateProPresenter":
      return BannerMessage.ActivateProPresenter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BannerMessage.UNRECOGNIZED;
  }
}

export function bannerMessageToJSON(object: BannerMessage): string {
  switch (object) {
    case BannerMessage.NoBanner:
      return "NoBanner";
    case BannerMessage.ActivateProPresenter:
      return "ActivateProPresenter";
    case BannerMessage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Request {
  register?: Register | undefined;
  unregister?: Unregister | undefined;
  changeSeatType?: ChangeSeatType | undefined;
  getFreeBibles?: GetFreeBibles | undefined;
  getPurchasedBibles?: GetPurchasedBibles | undefined;
  activateBible?: ActivateBible | undefined;
  deactivateBible?: DeactivateBible | undefined;
  downloadBible?: DownloadBible | undefined;
  registrationData?: RegistrationData | undefined;
  productInformation?: ProductInformation | undefined;
  getUpgradesAvailable?: GetAvailableVersion | undefined;
  getDowngradeAvailable?: GetAvailableVersion | undefined;
  downloadNewVersion?: DownloadNewVersion | undefined;
  refresh?: Refresh | undefined;
  activateLink?: ActivateLink | undefined;
  updateToken?: UpdateToken | undefined;
  oldTokenData?: OldTokenData | undefined;
}

export interface Callback {
  setWatermark?: SetWatermark | undefined;
  deactivationComplete?: DeactivationComplete | undefined;
  freeBibles?: FreeBibles | undefined;
  purchasedBibles?: PurchasedBibles | undefined;
  bibleActivationComplete?: BibleActivationComplete | undefined;
  bibleDeactivationComplete?: BibleDeactivationComplete | undefined;
  bibleDownloadProgress?: BibleDownloadProgress | undefined;
  hardExit?: HardExit | undefined;
  readRegistrationData?: ReadRegistrationData | undefined;
  writeRegistrationData?: WriteRegistrationData | undefined;
  getProductInformation?: GetProductInformation | undefined;
  log?: Log | undefined;
  upgradesAvailable?: UpgradesAvailable | undefined;
  downgradeAvailable?: DowngradeAvailable | undefined;
  downloadProgress?: DownloadProgress | undefined;
  alerts?: Alerts | undefined;
  showExpirationDialog?: ShowExpirationDialog | undefined;
  readOldToken?: ReadOldToken | undefined;
  token?: Token | undefined;
  verificationComplete?: VerificationComplete | undefined;
}

export interface Register {
  userName: string;
  registrationKey: string;
  displayName: string;
  seatType: SeatType;
  channel: UpdateChannel;
}

export interface ActivateLink {
  identifier: string;
}

export interface Unregister {
}

export interface ChangeSeatType {
  seatType: SeatType;
  channel: UpdateChannel;
}

export interface GetFreeBibles {
}

export interface GetPurchasedBibles {
}

export interface ActivateBible {
  bibleId: string;
}

export interface DeactivateBible {
  bibleId: string;
}

export interface DownloadBible {
  bibleId: string;
  filename: string;
}

export interface RegistrationData {
  data: Uint8Array;
  channel: UpdateChannel;
}

export interface ProductInformation {
  productName: string;
  majorVersion: string;
  minorVersion: string;
  patchVersion: string;
  buildNumber: string;
  buildDate: number;
}

export interface GetAvailableVersion {
  includeNotes: boolean;
  channel: string;
  format: string;
}

export interface DownloadNewVersion {
  url: string;
  filename: string;
}

export interface Refresh {
  channel: UpdateChannel;
}

export interface UpdateToken {
  tokenMetadata: TokenMetadata | undefined;
}

export interface OldTokenData {
  status: ReadTokenStatus;
  token: TokenMetadata | undefined;
}

export interface Token {
  tokenMetadata: TokenMetadata | undefined;
}

export interface SetWatermark {
  isRegistered: boolean;
  activeSeat: boolean;
}

export interface ActivationComplete {
  result: Status;
  registrationInfo: RegistrationInfo | undefined;
  availableSeats: Seats | undefined;
  totalSeats: Seats | undefined;
}

export interface DeactivationComplete {
  result: Status;
}

export interface ChangeSeatTypeComplete {
  result: Status;
  availableSeats: Seats | undefined;
  totalSeats: Seats | undefined;
  seatType: SeatType;
}

export interface FreeBibles {
  status: Status;
  bibles: Bible[];
}

export interface PurchasedBibles {
  status: Status;
  bibles: PurchasedBible[];
}

export interface BibleActivationComplete {
  status: Status;
  bibleId: string;
  downloadLink: string;
  bibles: PurchasedBible[];
}

export interface BibleDeactivationComplete {
  status: Status;
  bibleId: string;
  bibles: PurchasedBible[];
}

export interface BibleDownloadProgress {
  status: Status;
  complete: boolean;
  progress: number;
  bibleId: string;
  fileName: string;
  downloadLink: string;
}

export interface HardExit {
  reason: HardExit_Reason;
}

export enum HardExit_Reason {
  HostsFile = 0,
  SystemTime = 1,
  UNRECOGNIZED = -1,
}

export function hardExit_ReasonFromJSON(object: any): HardExit_Reason {
  switch (object) {
    case 0:
    case "HostsFile":
      return HardExit_Reason.HostsFile;
    case 1:
    case "SystemTime":
      return HardExit_Reason.SystemTime;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HardExit_Reason.UNRECOGNIZED;
  }
}

export function hardExit_ReasonToJSON(object: HardExit_Reason): string {
  switch (object) {
    case HardExit_Reason.HostsFile:
      return "HostsFile";
    case HardExit_Reason.SystemTime:
      return "SystemTime";
    case HardExit_Reason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ReadRegistrationData {
  fingerprint: string;
  identifier: string;
}

export interface ReadOldToken {
}

export interface WriteRegistrationData {
  data: Uint8Array;
}

export interface GetProductInformation {
}

export interface Log {
  level: Log_Level;
  message: string;
}

export enum Log_Level {
  Debug = 0,
  Info = 1,
  Warning = 2,
  Error = 3,
  UNRECOGNIZED = -1,
}

export function log_LevelFromJSON(object: any): Log_Level {
  switch (object) {
    case 0:
    case "Debug":
      return Log_Level.Debug;
    case 1:
    case "Info":
      return Log_Level.Info;
    case 2:
    case "Warning":
      return Log_Level.Warning;
    case 3:
    case "Error":
      return Log_Level.Error;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Log_Level.UNRECOGNIZED;
  }
}

export function log_LevelToJSON(object: Log_Level): string {
  switch (object) {
    case Log_Level.Debug:
      return "Debug";
    case Log_Level.Info:
      return "Info";
    case Log_Level.Warning:
      return "Warning";
    case Log_Level.Error:
      return "Error";
    case Log_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface UpgradesAvailable {
  status: Status;
  isNonProductionActive: boolean;
  activeChannel: string;
  releaseNotes: string;
  upgrades: BuildInformation[];
}

export interface DowngradeAvailable {
  status: Status;
  downgrade: BuildInformation | undefined;
  releaseNotes: string;
}

export interface DownloadProgress {
  status: Status;
  complete: boolean;
  progress: number;
}

export interface Alerts {
  alerts: Alert[];
}

export interface ShowExpirationDialog {
  days: number;
}

export interface LicenseInfo {
  registrationInfo: RegistrationInfo | undefined;
  availableSeats: Seats | undefined;
  totalSeats: Seats | undefined;
  legacy: boolean;
}

export interface VerificationComplete {
  result: Status;
  license: LicenseInfo | undefined;
  bibles: Bibles | undefined;
  token: TokenMetadata | undefined;
  subscriptionInfo: SubscriptionInfo | undefined;
  alert: PopupAlertMessage;
  banner: BannerMessage;
}

export interface Seats {
  basic: number;
  advanced: number;
}

export interface SupplementalInformation {
  downloadLink: string;
}

export interface Bible {
  id: string;
  name: string;
  language: string;
  publisher: string;
  copyright: string;
  displayAbbreviation: string;
  internalAbbreviation: string;
  version: string;
  info?: SupplementalInformation | undefined;
}

export interface PurchasedBible {
  metadata: Bible | undefined;
  licensingInfo: LicensingInfo | undefined;
}

export interface LicensingInfo {
  availableCopies: number;
  totalCopies: number;
  isActiveLocally: boolean;
  otherActiveCopies: ActiveCopy[];
}

export interface ActiveCopy {
  displayName: string;
  hostname: string;
}

export interface RegistrationInfo {
  userName: string;
  displayKey: string;
  displayName: string;
  expirationDate: number;
  activationKey: string;
  licenseType: LicenseType;
  registrationDate: number;
  seatType: SeatType;
  latestAvailableBuildNumber: number;
  latestAvailableVersion: string;
  hasWorshipHouseMediaSubscription: boolean;
  maintenanceExpirationDate: number;
  nonExtendedMaintenanceExpirationDate: number;
  isAutoRenewalActive: boolean;
}

export interface BuildInformation {
  buildNumber: number;
  version: string;
  minOsVersion: string;
  releaseDate: number;
  registrationDate: number;
  downloadSize: number;
  downloadUrl: string;
  channel: string;
  isBeta: boolean;
  isAvailable: boolean;
}

export interface Alert {
  alertType: AlertType;
  title: string;
  contentType: AlertContentType;
  content: string;
}

export interface TokenMetadata {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface SubscriptionInfo {
  organizationName: string;
  procontentLicenseType: ProContentLicenseType;
  procontentLicenseExpiration: number;
}

export interface DownloadLink {
  id: string;
  url: string;
}

export interface Bibles {
  freeBibles: Bible[];
  purchasedBibles: PurchasedBible[];
}

export interface FeatureFlags {
  useStaging: boolean;
  useSubscription: boolean;
}

function createBaseRequest(): Request {
  return {
    register: undefined,
    unregister: undefined,
    changeSeatType: undefined,
    getFreeBibles: undefined,
    getPurchasedBibles: undefined,
    activateBible: undefined,
    deactivateBible: undefined,
    downloadBible: undefined,
    registrationData: undefined,
    productInformation: undefined,
    getUpgradesAvailable: undefined,
    getDowngradeAvailable: undefined,
    downloadNewVersion: undefined,
    refresh: undefined,
    activateLink: undefined,
    updateToken: undefined,
    oldTokenData: undefined,
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.register !== undefined) {
      Register.encode(message.register, writer.uint32(10).fork()).ldelim();
    }
    if (message.unregister !== undefined) {
      Unregister.encode(message.unregister, writer.uint32(18).fork()).ldelim();
    }
    if (message.changeSeatType !== undefined) {
      ChangeSeatType.encode(message.changeSeatType, writer.uint32(26).fork()).ldelim();
    }
    if (message.getFreeBibles !== undefined) {
      GetFreeBibles.encode(message.getFreeBibles, writer.uint32(34).fork()).ldelim();
    }
    if (message.getPurchasedBibles !== undefined) {
      GetPurchasedBibles.encode(message.getPurchasedBibles, writer.uint32(42).fork()).ldelim();
    }
    if (message.activateBible !== undefined) {
      ActivateBible.encode(message.activateBible, writer.uint32(50).fork()).ldelim();
    }
    if (message.deactivateBible !== undefined) {
      DeactivateBible.encode(message.deactivateBible, writer.uint32(58).fork()).ldelim();
    }
    if (message.downloadBible !== undefined) {
      DownloadBible.encode(message.downloadBible, writer.uint32(66).fork()).ldelim();
    }
    if (message.registrationData !== undefined) {
      RegistrationData.encode(message.registrationData, writer.uint32(74).fork()).ldelim();
    }
    if (message.productInformation !== undefined) {
      ProductInformation.encode(message.productInformation, writer.uint32(82).fork()).ldelim();
    }
    if (message.getUpgradesAvailable !== undefined) {
      GetAvailableVersion.encode(message.getUpgradesAvailable, writer.uint32(90).fork()).ldelim();
    }
    if (message.getDowngradeAvailable !== undefined) {
      GetAvailableVersion.encode(message.getDowngradeAvailable, writer.uint32(98).fork()).ldelim();
    }
    if (message.downloadNewVersion !== undefined) {
      DownloadNewVersion.encode(message.downloadNewVersion, writer.uint32(106).fork()).ldelim();
    }
    if (message.refresh !== undefined) {
      Refresh.encode(message.refresh, writer.uint32(114).fork()).ldelim();
    }
    if (message.activateLink !== undefined) {
      ActivateLink.encode(message.activateLink, writer.uint32(122).fork()).ldelim();
    }
    if (message.updateToken !== undefined) {
      UpdateToken.encode(message.updateToken, writer.uint32(130).fork()).ldelim();
    }
    if (message.oldTokenData !== undefined) {
      OldTokenData.encode(message.oldTokenData, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.register = Register.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unregister = Unregister.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.changeSeatType = ChangeSeatType.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.getFreeBibles = GetFreeBibles.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.getPurchasedBibles = GetPurchasedBibles.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.activateBible = ActivateBible.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.deactivateBible = DeactivateBible.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.downloadBible = DownloadBible.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.registrationData = RegistrationData.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.productInformation = ProductInformation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.getUpgradesAvailable = GetAvailableVersion.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.getDowngradeAvailable = GetAvailableVersion.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.downloadNewVersion = DownloadNewVersion.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.refresh = Refresh.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.activateLink = ActivateLink.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.updateToken = UpdateToken.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.oldTokenData = OldTokenData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      register: isSet(object.register) ? Register.fromJSON(object.register) : undefined,
      unregister: isSet(object.unregister) ? Unregister.fromJSON(object.unregister) : undefined,
      changeSeatType: isSet(object.changeSeatType) ? ChangeSeatType.fromJSON(object.changeSeatType) : undefined,
      getFreeBibles: isSet(object.getFreeBibles) ? GetFreeBibles.fromJSON(object.getFreeBibles) : undefined,
      getPurchasedBibles: isSet(object.getPurchasedBibles)
        ? GetPurchasedBibles.fromJSON(object.getPurchasedBibles)
        : undefined,
      activateBible: isSet(object.activateBible) ? ActivateBible.fromJSON(object.activateBible) : undefined,
      deactivateBible: isSet(object.deactivateBible) ? DeactivateBible.fromJSON(object.deactivateBible) : undefined,
      downloadBible: isSet(object.downloadBible) ? DownloadBible.fromJSON(object.downloadBible) : undefined,
      registrationData: isSet(object.registrationData) ? RegistrationData.fromJSON(object.registrationData) : undefined,
      productInformation: isSet(object.productInformation)
        ? ProductInformation.fromJSON(object.productInformation)
        : undefined,
      getUpgradesAvailable: isSet(object.getUpgradesAvailable)
        ? GetAvailableVersion.fromJSON(object.getUpgradesAvailable)
        : undefined,
      getDowngradeAvailable: isSet(object.getDowngradeAvailable)
        ? GetAvailableVersion.fromJSON(object.getDowngradeAvailable)
        : undefined,
      downloadNewVersion: isSet(object.downloadNewVersion)
        ? DownloadNewVersion.fromJSON(object.downloadNewVersion)
        : undefined,
      refresh: isSet(object.refresh) ? Refresh.fromJSON(object.refresh) : undefined,
      activateLink: isSet(object.activateLink) ? ActivateLink.fromJSON(object.activateLink) : undefined,
      updateToken: isSet(object.updateToken) ? UpdateToken.fromJSON(object.updateToken) : undefined,
      oldTokenData: isSet(object.oldTokenData) ? OldTokenData.fromJSON(object.oldTokenData) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.register !== undefined) {
      obj.register = Register.toJSON(message.register);
    }
    if (message.unregister !== undefined) {
      obj.unregister = Unregister.toJSON(message.unregister);
    }
    if (message.changeSeatType !== undefined) {
      obj.changeSeatType = ChangeSeatType.toJSON(message.changeSeatType);
    }
    if (message.getFreeBibles !== undefined) {
      obj.getFreeBibles = GetFreeBibles.toJSON(message.getFreeBibles);
    }
    if (message.getPurchasedBibles !== undefined) {
      obj.getPurchasedBibles = GetPurchasedBibles.toJSON(message.getPurchasedBibles);
    }
    if (message.activateBible !== undefined) {
      obj.activateBible = ActivateBible.toJSON(message.activateBible);
    }
    if (message.deactivateBible !== undefined) {
      obj.deactivateBible = DeactivateBible.toJSON(message.deactivateBible);
    }
    if (message.downloadBible !== undefined) {
      obj.downloadBible = DownloadBible.toJSON(message.downloadBible);
    }
    if (message.registrationData !== undefined) {
      obj.registrationData = RegistrationData.toJSON(message.registrationData);
    }
    if (message.productInformation !== undefined) {
      obj.productInformation = ProductInformation.toJSON(message.productInformation);
    }
    if (message.getUpgradesAvailable !== undefined) {
      obj.getUpgradesAvailable = GetAvailableVersion.toJSON(message.getUpgradesAvailable);
    }
    if (message.getDowngradeAvailable !== undefined) {
      obj.getDowngradeAvailable = GetAvailableVersion.toJSON(message.getDowngradeAvailable);
    }
    if (message.downloadNewVersion !== undefined) {
      obj.downloadNewVersion = DownloadNewVersion.toJSON(message.downloadNewVersion);
    }
    if (message.refresh !== undefined) {
      obj.refresh = Refresh.toJSON(message.refresh);
    }
    if (message.activateLink !== undefined) {
      obj.activateLink = ActivateLink.toJSON(message.activateLink);
    }
    if (message.updateToken !== undefined) {
      obj.updateToken = UpdateToken.toJSON(message.updateToken);
    }
    if (message.oldTokenData !== undefined) {
      obj.oldTokenData = OldTokenData.toJSON(message.oldTokenData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.register = (object.register !== undefined && object.register !== null)
      ? Register.fromPartial(object.register)
      : undefined;
    message.unregister = (object.unregister !== undefined && object.unregister !== null)
      ? Unregister.fromPartial(object.unregister)
      : undefined;
    message.changeSeatType = (object.changeSeatType !== undefined && object.changeSeatType !== null)
      ? ChangeSeatType.fromPartial(object.changeSeatType)
      : undefined;
    message.getFreeBibles = (object.getFreeBibles !== undefined && object.getFreeBibles !== null)
      ? GetFreeBibles.fromPartial(object.getFreeBibles)
      : undefined;
    message.getPurchasedBibles = (object.getPurchasedBibles !== undefined && object.getPurchasedBibles !== null)
      ? GetPurchasedBibles.fromPartial(object.getPurchasedBibles)
      : undefined;
    message.activateBible = (object.activateBible !== undefined && object.activateBible !== null)
      ? ActivateBible.fromPartial(object.activateBible)
      : undefined;
    message.deactivateBible = (object.deactivateBible !== undefined && object.deactivateBible !== null)
      ? DeactivateBible.fromPartial(object.deactivateBible)
      : undefined;
    message.downloadBible = (object.downloadBible !== undefined && object.downloadBible !== null)
      ? DownloadBible.fromPartial(object.downloadBible)
      : undefined;
    message.registrationData = (object.registrationData !== undefined && object.registrationData !== null)
      ? RegistrationData.fromPartial(object.registrationData)
      : undefined;
    message.productInformation = (object.productInformation !== undefined && object.productInformation !== null)
      ? ProductInformation.fromPartial(object.productInformation)
      : undefined;
    message.getUpgradesAvailable = (object.getUpgradesAvailable !== undefined && object.getUpgradesAvailable !== null)
      ? GetAvailableVersion.fromPartial(object.getUpgradesAvailable)
      : undefined;
    message.getDowngradeAvailable =
      (object.getDowngradeAvailable !== undefined && object.getDowngradeAvailable !== null)
        ? GetAvailableVersion.fromPartial(object.getDowngradeAvailable)
        : undefined;
    message.downloadNewVersion = (object.downloadNewVersion !== undefined && object.downloadNewVersion !== null)
      ? DownloadNewVersion.fromPartial(object.downloadNewVersion)
      : undefined;
    message.refresh = (object.refresh !== undefined && object.refresh !== null)
      ? Refresh.fromPartial(object.refresh)
      : undefined;
    message.activateLink = (object.activateLink !== undefined && object.activateLink !== null)
      ? ActivateLink.fromPartial(object.activateLink)
      : undefined;
    message.updateToken = (object.updateToken !== undefined && object.updateToken !== null)
      ? UpdateToken.fromPartial(object.updateToken)
      : undefined;
    message.oldTokenData = (object.oldTokenData !== undefined && object.oldTokenData !== null)
      ? OldTokenData.fromPartial(object.oldTokenData)
      : undefined;
    return message;
  },
};

function createBaseCallback(): Callback {
  return {
    setWatermark: undefined,
    deactivationComplete: undefined,
    freeBibles: undefined,
    purchasedBibles: undefined,
    bibleActivationComplete: undefined,
    bibleDeactivationComplete: undefined,
    bibleDownloadProgress: undefined,
    hardExit: undefined,
    readRegistrationData: undefined,
    writeRegistrationData: undefined,
    getProductInformation: undefined,
    log: undefined,
    upgradesAvailable: undefined,
    downgradeAvailable: undefined,
    downloadProgress: undefined,
    alerts: undefined,
    showExpirationDialog: undefined,
    readOldToken: undefined,
    token: undefined,
    verificationComplete: undefined,
  };
}

export const Callback = {
  encode(message: Callback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setWatermark !== undefined) {
      SetWatermark.encode(message.setWatermark, writer.uint32(10).fork()).ldelim();
    }
    if (message.deactivationComplete !== undefined) {
      DeactivationComplete.encode(message.deactivationComplete, writer.uint32(18).fork()).ldelim();
    }
    if (message.freeBibles !== undefined) {
      FreeBibles.encode(message.freeBibles, writer.uint32(26).fork()).ldelim();
    }
    if (message.purchasedBibles !== undefined) {
      PurchasedBibles.encode(message.purchasedBibles, writer.uint32(34).fork()).ldelim();
    }
    if (message.bibleActivationComplete !== undefined) {
      BibleActivationComplete.encode(message.bibleActivationComplete, writer.uint32(42).fork()).ldelim();
    }
    if (message.bibleDeactivationComplete !== undefined) {
      BibleDeactivationComplete.encode(message.bibleDeactivationComplete, writer.uint32(50).fork()).ldelim();
    }
    if (message.bibleDownloadProgress !== undefined) {
      BibleDownloadProgress.encode(message.bibleDownloadProgress, writer.uint32(58).fork()).ldelim();
    }
    if (message.hardExit !== undefined) {
      HardExit.encode(message.hardExit, writer.uint32(66).fork()).ldelim();
    }
    if (message.readRegistrationData !== undefined) {
      ReadRegistrationData.encode(message.readRegistrationData, writer.uint32(74).fork()).ldelim();
    }
    if (message.writeRegistrationData !== undefined) {
      WriteRegistrationData.encode(message.writeRegistrationData, writer.uint32(82).fork()).ldelim();
    }
    if (message.getProductInformation !== undefined) {
      GetProductInformation.encode(message.getProductInformation, writer.uint32(90).fork()).ldelim();
    }
    if (message.log !== undefined) {
      Log.encode(message.log, writer.uint32(98).fork()).ldelim();
    }
    if (message.upgradesAvailable !== undefined) {
      UpgradesAvailable.encode(message.upgradesAvailable, writer.uint32(106).fork()).ldelim();
    }
    if (message.downgradeAvailable !== undefined) {
      DowngradeAvailable.encode(message.downgradeAvailable, writer.uint32(114).fork()).ldelim();
    }
    if (message.downloadProgress !== undefined) {
      DownloadProgress.encode(message.downloadProgress, writer.uint32(122).fork()).ldelim();
    }
    if (message.alerts !== undefined) {
      Alerts.encode(message.alerts, writer.uint32(130).fork()).ldelim();
    }
    if (message.showExpirationDialog !== undefined) {
      ShowExpirationDialog.encode(message.showExpirationDialog, writer.uint32(138).fork()).ldelim();
    }
    if (message.readOldToken !== undefined) {
      ReadOldToken.encode(message.readOldToken, writer.uint32(146).fork()).ldelim();
    }
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(154).fork()).ldelim();
    }
    if (message.verificationComplete !== undefined) {
      VerificationComplete.encode(message.verificationComplete, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Callback {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.setWatermark = SetWatermark.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deactivationComplete = DeactivationComplete.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.freeBibles = FreeBibles.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.purchasedBibles = PurchasedBibles.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bibleActivationComplete = BibleActivationComplete.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bibleDeactivationComplete = BibleDeactivationComplete.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.bibleDownloadProgress = BibleDownloadProgress.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.hardExit = HardExit.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.readRegistrationData = ReadRegistrationData.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.writeRegistrationData = WriteRegistrationData.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.getProductInformation = GetProductInformation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.log = Log.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.upgradesAvailable = UpgradesAvailable.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.downgradeAvailable = DowngradeAvailable.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.downloadProgress = DownloadProgress.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.alerts = Alerts.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.showExpirationDialog = ShowExpirationDialog.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.readOldToken = ReadOldToken.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.verificationComplete = VerificationComplete.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Callback {
    return {
      setWatermark: isSet(object.setWatermark) ? SetWatermark.fromJSON(object.setWatermark) : undefined,
      deactivationComplete: isSet(object.deactivationComplete)
        ? DeactivationComplete.fromJSON(object.deactivationComplete)
        : undefined,
      freeBibles: isSet(object.freeBibles) ? FreeBibles.fromJSON(object.freeBibles) : undefined,
      purchasedBibles: isSet(object.purchasedBibles) ? PurchasedBibles.fromJSON(object.purchasedBibles) : undefined,
      bibleActivationComplete: isSet(object.bibleActivationComplete)
        ? BibleActivationComplete.fromJSON(object.bibleActivationComplete)
        : undefined,
      bibleDeactivationComplete: isSet(object.bibleDeactivationComplete)
        ? BibleDeactivationComplete.fromJSON(object.bibleDeactivationComplete)
        : undefined,
      bibleDownloadProgress: isSet(object.bibleDownloadProgress)
        ? BibleDownloadProgress.fromJSON(object.bibleDownloadProgress)
        : undefined,
      hardExit: isSet(object.hardExit) ? HardExit.fromJSON(object.hardExit) : undefined,
      readRegistrationData: isSet(object.readRegistrationData)
        ? ReadRegistrationData.fromJSON(object.readRegistrationData)
        : undefined,
      writeRegistrationData: isSet(object.writeRegistrationData)
        ? WriteRegistrationData.fromJSON(object.writeRegistrationData)
        : undefined,
      getProductInformation: isSet(object.getProductInformation)
        ? GetProductInformation.fromJSON(object.getProductInformation)
        : undefined,
      log: isSet(object.log) ? Log.fromJSON(object.log) : undefined,
      upgradesAvailable: isSet(object.upgradesAvailable)
        ? UpgradesAvailable.fromJSON(object.upgradesAvailable)
        : undefined,
      downgradeAvailable: isSet(object.downgradeAvailable)
        ? DowngradeAvailable.fromJSON(object.downgradeAvailable)
        : undefined,
      downloadProgress: isSet(object.downloadProgress) ? DownloadProgress.fromJSON(object.downloadProgress) : undefined,
      alerts: isSet(object.alerts) ? Alerts.fromJSON(object.alerts) : undefined,
      showExpirationDialog: isSet(object.showExpirationDialog)
        ? ShowExpirationDialog.fromJSON(object.showExpirationDialog)
        : undefined,
      readOldToken: isSet(object.readOldToken) ? ReadOldToken.fromJSON(object.readOldToken) : undefined,
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      verificationComplete: isSet(object.verificationComplete)
        ? VerificationComplete.fromJSON(object.verificationComplete)
        : undefined,
    };
  },

  toJSON(message: Callback): unknown {
    const obj: any = {};
    if (message.setWatermark !== undefined) {
      obj.setWatermark = SetWatermark.toJSON(message.setWatermark);
    }
    if (message.deactivationComplete !== undefined) {
      obj.deactivationComplete = DeactivationComplete.toJSON(message.deactivationComplete);
    }
    if (message.freeBibles !== undefined) {
      obj.freeBibles = FreeBibles.toJSON(message.freeBibles);
    }
    if (message.purchasedBibles !== undefined) {
      obj.purchasedBibles = PurchasedBibles.toJSON(message.purchasedBibles);
    }
    if (message.bibleActivationComplete !== undefined) {
      obj.bibleActivationComplete = BibleActivationComplete.toJSON(message.bibleActivationComplete);
    }
    if (message.bibleDeactivationComplete !== undefined) {
      obj.bibleDeactivationComplete = BibleDeactivationComplete.toJSON(message.bibleDeactivationComplete);
    }
    if (message.bibleDownloadProgress !== undefined) {
      obj.bibleDownloadProgress = BibleDownloadProgress.toJSON(message.bibleDownloadProgress);
    }
    if (message.hardExit !== undefined) {
      obj.hardExit = HardExit.toJSON(message.hardExit);
    }
    if (message.readRegistrationData !== undefined) {
      obj.readRegistrationData = ReadRegistrationData.toJSON(message.readRegistrationData);
    }
    if (message.writeRegistrationData !== undefined) {
      obj.writeRegistrationData = WriteRegistrationData.toJSON(message.writeRegistrationData);
    }
    if (message.getProductInformation !== undefined) {
      obj.getProductInformation = GetProductInformation.toJSON(message.getProductInformation);
    }
    if (message.log !== undefined) {
      obj.log = Log.toJSON(message.log);
    }
    if (message.upgradesAvailable !== undefined) {
      obj.upgradesAvailable = UpgradesAvailable.toJSON(message.upgradesAvailable);
    }
    if (message.downgradeAvailable !== undefined) {
      obj.downgradeAvailable = DowngradeAvailable.toJSON(message.downgradeAvailable);
    }
    if (message.downloadProgress !== undefined) {
      obj.downloadProgress = DownloadProgress.toJSON(message.downloadProgress);
    }
    if (message.alerts !== undefined) {
      obj.alerts = Alerts.toJSON(message.alerts);
    }
    if (message.showExpirationDialog !== undefined) {
      obj.showExpirationDialog = ShowExpirationDialog.toJSON(message.showExpirationDialog);
    }
    if (message.readOldToken !== undefined) {
      obj.readOldToken = ReadOldToken.toJSON(message.readOldToken);
    }
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
    }
    if (message.verificationComplete !== undefined) {
      obj.verificationComplete = VerificationComplete.toJSON(message.verificationComplete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Callback>, I>>(base?: I): Callback {
    return Callback.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Callback>, I>>(object: I): Callback {
    const message = createBaseCallback();
    message.setWatermark = (object.setWatermark !== undefined && object.setWatermark !== null)
      ? SetWatermark.fromPartial(object.setWatermark)
      : undefined;
    message.deactivationComplete = (object.deactivationComplete !== undefined && object.deactivationComplete !== null)
      ? DeactivationComplete.fromPartial(object.deactivationComplete)
      : undefined;
    message.freeBibles = (object.freeBibles !== undefined && object.freeBibles !== null)
      ? FreeBibles.fromPartial(object.freeBibles)
      : undefined;
    message.purchasedBibles = (object.purchasedBibles !== undefined && object.purchasedBibles !== null)
      ? PurchasedBibles.fromPartial(object.purchasedBibles)
      : undefined;
    message.bibleActivationComplete =
      (object.bibleActivationComplete !== undefined && object.bibleActivationComplete !== null)
        ? BibleActivationComplete.fromPartial(object.bibleActivationComplete)
        : undefined;
    message.bibleDeactivationComplete =
      (object.bibleDeactivationComplete !== undefined && object.bibleDeactivationComplete !== null)
        ? BibleDeactivationComplete.fromPartial(object.bibleDeactivationComplete)
        : undefined;
    message.bibleDownloadProgress =
      (object.bibleDownloadProgress !== undefined && object.bibleDownloadProgress !== null)
        ? BibleDownloadProgress.fromPartial(object.bibleDownloadProgress)
        : undefined;
    message.hardExit = (object.hardExit !== undefined && object.hardExit !== null)
      ? HardExit.fromPartial(object.hardExit)
      : undefined;
    message.readRegistrationData = (object.readRegistrationData !== undefined && object.readRegistrationData !== null)
      ? ReadRegistrationData.fromPartial(object.readRegistrationData)
      : undefined;
    message.writeRegistrationData =
      (object.writeRegistrationData !== undefined && object.writeRegistrationData !== null)
        ? WriteRegistrationData.fromPartial(object.writeRegistrationData)
        : undefined;
    message.getProductInformation =
      (object.getProductInformation !== undefined && object.getProductInformation !== null)
        ? GetProductInformation.fromPartial(object.getProductInformation)
        : undefined;
    message.log = (object.log !== undefined && object.log !== null) ? Log.fromPartial(object.log) : undefined;
    message.upgradesAvailable = (object.upgradesAvailable !== undefined && object.upgradesAvailable !== null)
      ? UpgradesAvailable.fromPartial(object.upgradesAvailable)
      : undefined;
    message.downgradeAvailable = (object.downgradeAvailable !== undefined && object.downgradeAvailable !== null)
      ? DowngradeAvailable.fromPartial(object.downgradeAvailable)
      : undefined;
    message.downloadProgress = (object.downloadProgress !== undefined && object.downloadProgress !== null)
      ? DownloadProgress.fromPartial(object.downloadProgress)
      : undefined;
    message.alerts = (object.alerts !== undefined && object.alerts !== null)
      ? Alerts.fromPartial(object.alerts)
      : undefined;
    message.showExpirationDialog = (object.showExpirationDialog !== undefined && object.showExpirationDialog !== null)
      ? ShowExpirationDialog.fromPartial(object.showExpirationDialog)
      : undefined;
    message.readOldToken = (object.readOldToken !== undefined && object.readOldToken !== null)
      ? ReadOldToken.fromPartial(object.readOldToken)
      : undefined;
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    message.verificationComplete = (object.verificationComplete !== undefined && object.verificationComplete !== null)
      ? VerificationComplete.fromPartial(object.verificationComplete)
      : undefined;
    return message;
  },
};

function createBaseRegister(): Register {
  return { userName: "", registrationKey: "", displayName: "", seatType: 0, channel: 0 };
}

export const Register = {
  encode(message: Register, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.registrationKey !== "") {
      writer.uint32(18).string(message.registrationKey);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.seatType !== 0) {
      writer.uint32(32).int32(message.seatType);
    }
    if (message.channel !== 0) {
      writer.uint32(40).int32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Register {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegister();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registrationKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.seatType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.channel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Register {
    return {
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      registrationKey: isSet(object.registrationKey) ? globalThis.String(object.registrationKey) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      seatType: isSet(object.seatType) ? seatTypeFromJSON(object.seatType) : 0,
      channel: isSet(object.channel) ? updateChannelFromJSON(object.channel) : 0,
    };
  },

  toJSON(message: Register): unknown {
    const obj: any = {};
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.registrationKey !== "") {
      obj.registrationKey = message.registrationKey;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.seatType !== 0) {
      obj.seatType = seatTypeToJSON(message.seatType);
    }
    if (message.channel !== 0) {
      obj.channel = updateChannelToJSON(message.channel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Register>, I>>(base?: I): Register {
    return Register.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Register>, I>>(object: I): Register {
    const message = createBaseRegister();
    message.userName = object.userName ?? "";
    message.registrationKey = object.registrationKey ?? "";
    message.displayName = object.displayName ?? "";
    message.seatType = object.seatType ?? 0;
    message.channel = object.channel ?? 0;
    return message;
  },
};

function createBaseActivateLink(): ActivateLink {
  return { identifier: "" };
}

export const ActivateLink = {
  encode(message: ActivateLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.identifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateLink {
    return { identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "" };
  },

  toJSON(message: ActivateLink): unknown {
    const obj: any = {};
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateLink>, I>>(base?: I): ActivateLink {
    return ActivateLink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateLink>, I>>(object: I): ActivateLink {
    const message = createBaseActivateLink();
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseUnregister(): Unregister {
  return {};
}

export const Unregister = {
  encode(_: Unregister, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unregister {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnregister();
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

  fromJSON(_: any): Unregister {
    return {};
  },

  toJSON(_: Unregister): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Unregister>, I>>(base?: I): Unregister {
    return Unregister.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Unregister>, I>>(_: I): Unregister {
    const message = createBaseUnregister();
    return message;
  },
};

function createBaseChangeSeatType(): ChangeSeatType {
  return { seatType: 0, channel: 0 };
}

export const ChangeSeatType = {
  encode(message: ChangeSeatType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seatType !== 0) {
      writer.uint32(8).int32(message.seatType);
    }
    if (message.channel !== 0) {
      writer.uint32(16).int32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSeatType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeSeatType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.seatType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.channel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeSeatType {
    return {
      seatType: isSet(object.seatType) ? seatTypeFromJSON(object.seatType) : 0,
      channel: isSet(object.channel) ? updateChannelFromJSON(object.channel) : 0,
    };
  },

  toJSON(message: ChangeSeatType): unknown {
    const obj: any = {};
    if (message.seatType !== 0) {
      obj.seatType = seatTypeToJSON(message.seatType);
    }
    if (message.channel !== 0) {
      obj.channel = updateChannelToJSON(message.channel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeSeatType>, I>>(base?: I): ChangeSeatType {
    return ChangeSeatType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeSeatType>, I>>(object: I): ChangeSeatType {
    const message = createBaseChangeSeatType();
    message.seatType = object.seatType ?? 0;
    message.channel = object.channel ?? 0;
    return message;
  },
};

function createBaseGetFreeBibles(): GetFreeBibles {
  return {};
}

export const GetFreeBibles = {
  encode(_: GetFreeBibles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFreeBibles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFreeBibles();
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

  fromJSON(_: any): GetFreeBibles {
    return {};
  },

  toJSON(_: GetFreeBibles): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFreeBibles>, I>>(base?: I): GetFreeBibles {
    return GetFreeBibles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFreeBibles>, I>>(_: I): GetFreeBibles {
    const message = createBaseGetFreeBibles();
    return message;
  },
};

function createBaseGetPurchasedBibles(): GetPurchasedBibles {
  return {};
}

export const GetPurchasedBibles = {
  encode(_: GetPurchasedBibles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPurchasedBibles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPurchasedBibles();
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

  fromJSON(_: any): GetPurchasedBibles {
    return {};
  },

  toJSON(_: GetPurchasedBibles): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPurchasedBibles>, I>>(base?: I): GetPurchasedBibles {
    return GetPurchasedBibles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPurchasedBibles>, I>>(_: I): GetPurchasedBibles {
    const message = createBaseGetPurchasedBibles();
    return message;
  },
};

function createBaseActivateBible(): ActivateBible {
  return { bibleId: "" };
}

export const ActivateBible = {
  encode(message: ActivateBible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bibleId !== "") {
      writer.uint32(10).string(message.bibleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateBible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateBible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bibleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivateBible {
    return { bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "" };
  },

  toJSON(message: ActivateBible): unknown {
    const obj: any = {};
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivateBible>, I>>(base?: I): ActivateBible {
    return ActivateBible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivateBible>, I>>(object: I): ActivateBible {
    const message = createBaseActivateBible();
    message.bibleId = object.bibleId ?? "";
    return message;
  },
};

function createBaseDeactivateBible(): DeactivateBible {
  return { bibleId: "" };
}

export const DeactivateBible = {
  encode(message: DeactivateBible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bibleId !== "") {
      writer.uint32(10).string(message.bibleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateBible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateBible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bibleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivateBible {
    return { bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "" };
  },

  toJSON(message: DeactivateBible): unknown {
    const obj: any = {};
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivateBible>, I>>(base?: I): DeactivateBible {
    return DeactivateBible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivateBible>, I>>(object: I): DeactivateBible {
    const message = createBaseDeactivateBible();
    message.bibleId = object.bibleId ?? "";
    return message;
  },
};

function createBaseDownloadBible(): DownloadBible {
  return { bibleId: "", filename: "" };
}

export const DownloadBible = {
  encode(message: DownloadBible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bibleId !== "") {
      writer.uint32(10).string(message.bibleId);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadBible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadBible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bibleId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadBible {
    return {
      bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "",
      filename: isSet(object.filename) ? globalThis.String(object.filename) : "",
    };
  },

  toJSON(message: DownloadBible): unknown {
    const obj: any = {};
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    if (message.filename !== "") {
      obj.filename = message.filename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadBible>, I>>(base?: I): DownloadBible {
    return DownloadBible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadBible>, I>>(object: I): DownloadBible {
    const message = createBaseDownloadBible();
    message.bibleId = object.bibleId ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseRegistrationData(): RegistrationData {
  return { data: new Uint8Array(0), channel: 0 };
}

export const RegistrationData = {
  encode(message: RegistrationData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.channel !== 0) {
      writer.uint32(16).int32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.channel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegistrationData {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      channel: isSet(object.channel) ? updateChannelFromJSON(object.channel) : 0,
    };
  },

  toJSON(message: RegistrationData): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.channel !== 0) {
      obj.channel = updateChannelToJSON(message.channel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegistrationData>, I>>(base?: I): RegistrationData {
    return RegistrationData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegistrationData>, I>>(object: I): RegistrationData {
    const message = createBaseRegistrationData();
    message.data = object.data ?? new Uint8Array(0);
    message.channel = object.channel ?? 0;
    return message;
  },
};

function createBaseProductInformation(): ProductInformation {
  return { productName: "", majorVersion: "", minorVersion: "", patchVersion: "", buildNumber: "", buildDate: 0 };
}

export const ProductInformation = {
  encode(message: ProductInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productName !== "") {
      writer.uint32(10).string(message.productName);
    }
    if (message.majorVersion !== "") {
      writer.uint32(18).string(message.majorVersion);
    }
    if (message.minorVersion !== "") {
      writer.uint32(26).string(message.minorVersion);
    }
    if (message.patchVersion !== "") {
      writer.uint32(34).string(message.patchVersion);
    }
    if (message.buildNumber !== "") {
      writer.uint32(42).string(message.buildNumber);
    }
    if (message.buildDate !== 0) {
      writer.uint32(48).int64(message.buildDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.productName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.majorVersion = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minorVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.patchVersion = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.buildNumber = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.buildDate = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProductInformation {
    return {
      productName: isSet(object.productName) ? globalThis.String(object.productName) : "",
      majorVersion: isSet(object.majorVersion) ? globalThis.String(object.majorVersion) : "",
      minorVersion: isSet(object.minorVersion) ? globalThis.String(object.minorVersion) : "",
      patchVersion: isSet(object.patchVersion) ? globalThis.String(object.patchVersion) : "",
      buildNumber: isSet(object.buildNumber) ? globalThis.String(object.buildNumber) : "",
      buildDate: isSet(object.buildDate) ? globalThis.Number(object.buildDate) : 0,
    };
  },

  toJSON(message: ProductInformation): unknown {
    const obj: any = {};
    if (message.productName !== "") {
      obj.productName = message.productName;
    }
    if (message.majorVersion !== "") {
      obj.majorVersion = message.majorVersion;
    }
    if (message.minorVersion !== "") {
      obj.minorVersion = message.minorVersion;
    }
    if (message.patchVersion !== "") {
      obj.patchVersion = message.patchVersion;
    }
    if (message.buildNumber !== "") {
      obj.buildNumber = message.buildNumber;
    }
    if (message.buildDate !== 0) {
      obj.buildDate = Math.round(message.buildDate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProductInformation>, I>>(base?: I): ProductInformation {
    return ProductInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProductInformation>, I>>(object: I): ProductInformation {
    const message = createBaseProductInformation();
    message.productName = object.productName ?? "";
    message.majorVersion = object.majorVersion ?? "";
    message.minorVersion = object.minorVersion ?? "";
    message.patchVersion = object.patchVersion ?? "";
    message.buildNumber = object.buildNumber ?? "";
    message.buildDate = object.buildDate ?? 0;
    return message;
  },
};

function createBaseGetAvailableVersion(): GetAvailableVersion {
  return { includeNotes: false, channel: "", format: "" };
}

export const GetAvailableVersion = {
  encode(message: GetAvailableVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.includeNotes !== false) {
      writer.uint32(8).bool(message.includeNotes);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    if (message.format !== "") {
      writer.uint32(26).string(message.format);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAvailableVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAvailableVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.includeNotes = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.format = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAvailableVersion {
    return {
      includeNotes: isSet(object.includeNotes) ? globalThis.Boolean(object.includeNotes) : false,
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      format: isSet(object.format) ? globalThis.String(object.format) : "",
    };
  },

  toJSON(message: GetAvailableVersion): unknown {
    const obj: any = {};
    if (message.includeNotes !== false) {
      obj.includeNotes = message.includeNotes;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.format !== "") {
      obj.format = message.format;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAvailableVersion>, I>>(base?: I): GetAvailableVersion {
    return GetAvailableVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAvailableVersion>, I>>(object: I): GetAvailableVersion {
    const message = createBaseGetAvailableVersion();
    message.includeNotes = object.includeNotes ?? false;
    message.channel = object.channel ?? "";
    message.format = object.format ?? "";
    return message;
  },
};

function createBaseDownloadNewVersion(): DownloadNewVersion {
  return { url: "", filename: "" };
}

export const DownloadNewVersion = {
  encode(message: DownloadNewVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.filename !== "") {
      writer.uint32(18).string(message.filename);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadNewVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadNewVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filename = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadNewVersion {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      filename: isSet(object.filename) ? globalThis.String(object.filename) : "",
    };
  },

  toJSON(message: DownloadNewVersion): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.filename !== "") {
      obj.filename = message.filename;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadNewVersion>, I>>(base?: I): DownloadNewVersion {
    return DownloadNewVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadNewVersion>, I>>(object: I): DownloadNewVersion {
    const message = createBaseDownloadNewVersion();
    message.url = object.url ?? "";
    message.filename = object.filename ?? "";
    return message;
  },
};

function createBaseRefresh(): Refresh {
  return { channel: 0 };
}

export const Refresh = {
  encode(message: Refresh, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== 0) {
      writer.uint32(8).int32(message.channel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Refresh {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefresh();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.channel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Refresh {
    return { channel: isSet(object.channel) ? updateChannelFromJSON(object.channel) : 0 };
  },

  toJSON(message: Refresh): unknown {
    const obj: any = {};
    if (message.channel !== 0) {
      obj.channel = updateChannelToJSON(message.channel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Refresh>, I>>(base?: I): Refresh {
    return Refresh.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Refresh>, I>>(object: I): Refresh {
    const message = createBaseRefresh();
    message.channel = object.channel ?? 0;
    return message;
  },
};

function createBaseUpdateToken(): UpdateToken {
  return { tokenMetadata: undefined };
}

export const UpdateToken = {
  encode(message: UpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenMetadata !== undefined) {
      TokenMetadata.encode(message.tokenMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenMetadata = TokenMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateToken {
    return { tokenMetadata: isSet(object.tokenMetadata) ? TokenMetadata.fromJSON(object.tokenMetadata) : undefined };
  },

  toJSON(message: UpdateToken): unknown {
    const obj: any = {};
    if (message.tokenMetadata !== undefined) {
      obj.tokenMetadata = TokenMetadata.toJSON(message.tokenMetadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateToken>, I>>(base?: I): UpdateToken {
    return UpdateToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateToken>, I>>(object: I): UpdateToken {
    const message = createBaseUpdateToken();
    message.tokenMetadata = (object.tokenMetadata !== undefined && object.tokenMetadata !== null)
      ? TokenMetadata.fromPartial(object.tokenMetadata)
      : undefined;
    return message;
  },
};

function createBaseOldTokenData(): OldTokenData {
  return { status: 0, token: undefined };
}

export const OldTokenData = {
  encode(message: OldTokenData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.token !== undefined) {
      TokenMetadata.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OldTokenData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOldTokenData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.token = TokenMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OldTokenData {
    return {
      status: isSet(object.status) ? readTokenStatusFromJSON(object.status) : 0,
      token: isSet(object.token) ? TokenMetadata.fromJSON(object.token) : undefined,
    };
  },

  toJSON(message: OldTokenData): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = readTokenStatusToJSON(message.status);
    }
    if (message.token !== undefined) {
      obj.token = TokenMetadata.toJSON(message.token);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OldTokenData>, I>>(base?: I): OldTokenData {
    return OldTokenData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OldTokenData>, I>>(object: I): OldTokenData {
    const message = createBaseOldTokenData();
    message.status = object.status ?? 0;
    message.token = (object.token !== undefined && object.token !== null)
      ? TokenMetadata.fromPartial(object.token)
      : undefined;
    return message;
  },
};

function createBaseToken(): Token {
  return { tokenMetadata: undefined };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenMetadata !== undefined) {
      TokenMetadata.encode(message.tokenMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tokenMetadata = TokenMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
    return { tokenMetadata: isSet(object.tokenMetadata) ? TokenMetadata.fromJSON(object.tokenMetadata) : undefined };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    if (message.tokenMetadata !== undefined) {
      obj.tokenMetadata = TokenMetadata.toJSON(message.tokenMetadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.tokenMetadata = (object.tokenMetadata !== undefined && object.tokenMetadata !== null)
      ? TokenMetadata.fromPartial(object.tokenMetadata)
      : undefined;
    return message;
  },
};

function createBaseSetWatermark(): SetWatermark {
  return { isRegistered: false, activeSeat: false };
}

export const SetWatermark = {
  encode(message: SetWatermark, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isRegistered !== false) {
      writer.uint32(8).bool(message.isRegistered);
    }
    if (message.activeSeat !== false) {
      writer.uint32(16).bool(message.activeSeat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetWatermark {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetWatermark();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.isRegistered = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.activeSeat = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetWatermark {
    return {
      isRegistered: isSet(object.isRegistered) ? globalThis.Boolean(object.isRegistered) : false,
      activeSeat: isSet(object.activeSeat) ? globalThis.Boolean(object.activeSeat) : false,
    };
  },

  toJSON(message: SetWatermark): unknown {
    const obj: any = {};
    if (message.isRegistered !== false) {
      obj.isRegistered = message.isRegistered;
    }
    if (message.activeSeat !== false) {
      obj.activeSeat = message.activeSeat;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetWatermark>, I>>(base?: I): SetWatermark {
    return SetWatermark.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetWatermark>, I>>(object: I): SetWatermark {
    const message = createBaseSetWatermark();
    message.isRegistered = object.isRegistered ?? false;
    message.activeSeat = object.activeSeat ?? false;
    return message;
  },
};

function createBaseActivationComplete(): ActivationComplete {
  return { result: 0, registrationInfo: undefined, availableSeats: undefined, totalSeats: undefined };
}

export const ActivationComplete = {
  encode(message: ActivationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.registrationInfo !== undefined) {
      RegistrationInfo.encode(message.registrationInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.availableSeats !== undefined) {
      Seats.encode(message.availableSeats, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalSeats !== undefined) {
      Seats.encode(message.totalSeats, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivationComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registrationInfo = RegistrationInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.availableSeats = Seats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalSeats = Seats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActivationComplete {
    return {
      result: isSet(object.result) ? statusFromJSON(object.result) : 0,
      registrationInfo: isSet(object.registrationInfo) ? RegistrationInfo.fromJSON(object.registrationInfo) : undefined,
      availableSeats: isSet(object.availableSeats) ? Seats.fromJSON(object.availableSeats) : undefined,
      totalSeats: isSet(object.totalSeats) ? Seats.fromJSON(object.totalSeats) : undefined,
    };
  },

  toJSON(message: ActivationComplete): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = statusToJSON(message.result);
    }
    if (message.registrationInfo !== undefined) {
      obj.registrationInfo = RegistrationInfo.toJSON(message.registrationInfo);
    }
    if (message.availableSeats !== undefined) {
      obj.availableSeats = Seats.toJSON(message.availableSeats);
    }
    if (message.totalSeats !== undefined) {
      obj.totalSeats = Seats.toJSON(message.totalSeats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActivationComplete>, I>>(base?: I): ActivationComplete {
    return ActivationComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActivationComplete>, I>>(object: I): ActivationComplete {
    const message = createBaseActivationComplete();
    message.result = object.result ?? 0;
    message.registrationInfo = (object.registrationInfo !== undefined && object.registrationInfo !== null)
      ? RegistrationInfo.fromPartial(object.registrationInfo)
      : undefined;
    message.availableSeats = (object.availableSeats !== undefined && object.availableSeats !== null)
      ? Seats.fromPartial(object.availableSeats)
      : undefined;
    message.totalSeats = (object.totalSeats !== undefined && object.totalSeats !== null)
      ? Seats.fromPartial(object.totalSeats)
      : undefined;
    return message;
  },
};

function createBaseDeactivationComplete(): DeactivationComplete {
  return { result: 0 };
}

export const DeactivationComplete = {
  encode(message: DeactivationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivationComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeactivationComplete {
    return { result: isSet(object.result) ? statusFromJSON(object.result) : 0 };
  },

  toJSON(message: DeactivationComplete): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = statusToJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeactivationComplete>, I>>(base?: I): DeactivationComplete {
    return DeactivationComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeactivationComplete>, I>>(object: I): DeactivationComplete {
    const message = createBaseDeactivationComplete();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseChangeSeatTypeComplete(): ChangeSeatTypeComplete {
  return { result: 0, availableSeats: undefined, totalSeats: undefined, seatType: 0 };
}

export const ChangeSeatTypeComplete = {
  encode(message: ChangeSeatTypeComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.availableSeats !== undefined) {
      Seats.encode(message.availableSeats, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalSeats !== undefined) {
      Seats.encode(message.totalSeats, writer.uint32(26).fork()).ldelim();
    }
    if (message.seatType !== 0) {
      writer.uint32(32).int32(message.seatType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChangeSeatTypeComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeSeatTypeComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.availableSeats = Seats.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalSeats = Seats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.seatType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChangeSeatTypeComplete {
    return {
      result: isSet(object.result) ? statusFromJSON(object.result) : 0,
      availableSeats: isSet(object.availableSeats) ? Seats.fromJSON(object.availableSeats) : undefined,
      totalSeats: isSet(object.totalSeats) ? Seats.fromJSON(object.totalSeats) : undefined,
      seatType: isSet(object.seatType) ? seatTypeFromJSON(object.seatType) : 0,
    };
  },

  toJSON(message: ChangeSeatTypeComplete): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = statusToJSON(message.result);
    }
    if (message.availableSeats !== undefined) {
      obj.availableSeats = Seats.toJSON(message.availableSeats);
    }
    if (message.totalSeats !== undefined) {
      obj.totalSeats = Seats.toJSON(message.totalSeats);
    }
    if (message.seatType !== 0) {
      obj.seatType = seatTypeToJSON(message.seatType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChangeSeatTypeComplete>, I>>(base?: I): ChangeSeatTypeComplete {
    return ChangeSeatTypeComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChangeSeatTypeComplete>, I>>(object: I): ChangeSeatTypeComplete {
    const message = createBaseChangeSeatTypeComplete();
    message.result = object.result ?? 0;
    message.availableSeats = (object.availableSeats !== undefined && object.availableSeats !== null)
      ? Seats.fromPartial(object.availableSeats)
      : undefined;
    message.totalSeats = (object.totalSeats !== undefined && object.totalSeats !== null)
      ? Seats.fromPartial(object.totalSeats)
      : undefined;
    message.seatType = object.seatType ?? 0;
    return message;
  },
};

function createBaseFreeBibles(): FreeBibles {
  return { status: 0, bibles: [] };
}

export const FreeBibles = {
  encode(message: FreeBibles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.bibles) {
      Bible.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FreeBibles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreeBibles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bibles.push(Bible.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FreeBibles {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      bibles: globalThis.Array.isArray(object?.bibles) ? object.bibles.map((e: any) => Bible.fromJSON(e)) : [],
    };
  },

  toJSON(message: FreeBibles): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.bibles?.length) {
      obj.bibles = message.bibles.map((e) => Bible.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FreeBibles>, I>>(base?: I): FreeBibles {
    return FreeBibles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FreeBibles>, I>>(object: I): FreeBibles {
    const message = createBaseFreeBibles();
    message.status = object.status ?? 0;
    message.bibles = object.bibles?.map((e) => Bible.fromPartial(e)) || [];
    return message;
  },
};

function createBasePurchasedBibles(): PurchasedBibles {
  return { status: 0, bibles: [] };
}

export const PurchasedBibles = {
  encode(message: PurchasedBibles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    for (const v of message.bibles) {
      PurchasedBible.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PurchasedBibles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchasedBibles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bibles.push(PurchasedBible.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PurchasedBibles {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      bibles: globalThis.Array.isArray(object?.bibles) ? object.bibles.map((e: any) => PurchasedBible.fromJSON(e)) : [],
    };
  },

  toJSON(message: PurchasedBibles): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.bibles?.length) {
      obj.bibles = message.bibles.map((e) => PurchasedBible.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PurchasedBibles>, I>>(base?: I): PurchasedBibles {
    return PurchasedBibles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PurchasedBibles>, I>>(object: I): PurchasedBibles {
    const message = createBasePurchasedBibles();
    message.status = object.status ?? 0;
    message.bibles = object.bibles?.map((e) => PurchasedBible.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBibleActivationComplete(): BibleActivationComplete {
  return { status: 0, bibleId: "", downloadLink: "", bibles: [] };
}

export const BibleActivationComplete = {
  encode(message: BibleActivationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.bibleId !== "") {
      writer.uint32(18).string(message.bibleId);
    }
    if (message.downloadLink !== "") {
      writer.uint32(26).string(message.downloadLink);
    }
    for (const v of message.bibles) {
      PurchasedBible.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BibleActivationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBibleActivationComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bibleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.downloadLink = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bibles.push(PurchasedBible.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BibleActivationComplete {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "",
      downloadLink: isSet(object.downloadLink) ? globalThis.String(object.downloadLink) : "",
      bibles: globalThis.Array.isArray(object?.bibles) ? object.bibles.map((e: any) => PurchasedBible.fromJSON(e)) : [],
    };
  },

  toJSON(message: BibleActivationComplete): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    if (message.downloadLink !== "") {
      obj.downloadLink = message.downloadLink;
    }
    if (message.bibles?.length) {
      obj.bibles = message.bibles.map((e) => PurchasedBible.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BibleActivationComplete>, I>>(base?: I): BibleActivationComplete {
    return BibleActivationComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BibleActivationComplete>, I>>(object: I): BibleActivationComplete {
    const message = createBaseBibleActivationComplete();
    message.status = object.status ?? 0;
    message.bibleId = object.bibleId ?? "";
    message.downloadLink = object.downloadLink ?? "";
    message.bibles = object.bibles?.map((e) => PurchasedBible.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBibleDeactivationComplete(): BibleDeactivationComplete {
  return { status: 0, bibleId: "", bibles: [] };
}

export const BibleDeactivationComplete = {
  encode(message: BibleDeactivationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.bibleId !== "") {
      writer.uint32(18).string(message.bibleId);
    }
    for (const v of message.bibles) {
      PurchasedBible.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BibleDeactivationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBibleDeactivationComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bibleId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bibles.push(PurchasedBible.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BibleDeactivationComplete {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "",
      bibles: globalThis.Array.isArray(object?.bibles) ? object.bibles.map((e: any) => PurchasedBible.fromJSON(e)) : [],
    };
  },

  toJSON(message: BibleDeactivationComplete): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    if (message.bibles?.length) {
      obj.bibles = message.bibles.map((e) => PurchasedBible.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BibleDeactivationComplete>, I>>(base?: I): BibleDeactivationComplete {
    return BibleDeactivationComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BibleDeactivationComplete>, I>>(object: I): BibleDeactivationComplete {
    const message = createBaseBibleDeactivationComplete();
    message.status = object.status ?? 0;
    message.bibleId = object.bibleId ?? "";
    message.bibles = object.bibles?.map((e) => PurchasedBible.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBibleDownloadProgress(): BibleDownloadProgress {
  return { status: 0, complete: false, progress: 0, bibleId: "", fileName: "", downloadLink: "" };
}

export const BibleDownloadProgress = {
  encode(message: BibleDownloadProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.complete !== false) {
      writer.uint32(16).bool(message.complete);
    }
    if (message.progress !== 0) {
      writer.uint32(29).float(message.progress);
    }
    if (message.bibleId !== "") {
      writer.uint32(34).string(message.bibleId);
    }
    if (message.fileName !== "") {
      writer.uint32(42).string(message.fileName);
    }
    if (message.downloadLink !== "") {
      writer.uint32(50).string(message.downloadLink);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BibleDownloadProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBibleDownloadProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.complete = reader.bool();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.progress = reader.float();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bibleId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fileName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.downloadLink = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BibleDownloadProgress {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      complete: isSet(object.complete) ? globalThis.Boolean(object.complete) : false,
      progress: isSet(object.progress) ? globalThis.Number(object.progress) : 0,
      bibleId: isSet(object.bibleId) ? globalThis.String(object.bibleId) : "",
      fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
      downloadLink: isSet(object.downloadLink) ? globalThis.String(object.downloadLink) : "",
    };
  },

  toJSON(message: BibleDownloadProgress): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.complete !== false) {
      obj.complete = message.complete;
    }
    if (message.progress !== 0) {
      obj.progress = message.progress;
    }
    if (message.bibleId !== "") {
      obj.bibleId = message.bibleId;
    }
    if (message.fileName !== "") {
      obj.fileName = message.fileName;
    }
    if (message.downloadLink !== "") {
      obj.downloadLink = message.downloadLink;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BibleDownloadProgress>, I>>(base?: I): BibleDownloadProgress {
    return BibleDownloadProgress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BibleDownloadProgress>, I>>(object: I): BibleDownloadProgress {
    const message = createBaseBibleDownloadProgress();
    message.status = object.status ?? 0;
    message.complete = object.complete ?? false;
    message.progress = object.progress ?? 0;
    message.bibleId = object.bibleId ?? "";
    message.fileName = object.fileName ?? "";
    message.downloadLink = object.downloadLink ?? "";
    return message;
  },
};

function createBaseHardExit(): HardExit {
  return { reason: 0 };
}

export const HardExit = {
  encode(message: HardExit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== 0) {
      writer.uint32(8).int32(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HardExit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHardExit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HardExit {
    return { reason: isSet(object.reason) ? hardExit_ReasonFromJSON(object.reason) : 0 };
  },

  toJSON(message: HardExit): unknown {
    const obj: any = {};
    if (message.reason !== 0) {
      obj.reason = hardExit_ReasonToJSON(message.reason);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HardExit>, I>>(base?: I): HardExit {
    return HardExit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HardExit>, I>>(object: I): HardExit {
    const message = createBaseHardExit();
    message.reason = object.reason ?? 0;
    return message;
  },
};

function createBaseReadRegistrationData(): ReadRegistrationData {
  return { fingerprint: "", identifier: "" };
}

export const ReadRegistrationData = {
  encode(message: ReadRegistrationData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fingerprint !== "") {
      writer.uint32(10).string(message.fingerprint);
    }
    if (message.identifier !== "") {
      writer.uint32(18).string(message.identifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadRegistrationData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadRegistrationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fingerprint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.identifier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadRegistrationData {
    return {
      fingerprint: isSet(object.fingerprint) ? globalThis.String(object.fingerprint) : "",
      identifier: isSet(object.identifier) ? globalThis.String(object.identifier) : "",
    };
  },

  toJSON(message: ReadRegistrationData): unknown {
    const obj: any = {};
    if (message.fingerprint !== "") {
      obj.fingerprint = message.fingerprint;
    }
    if (message.identifier !== "") {
      obj.identifier = message.identifier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadRegistrationData>, I>>(base?: I): ReadRegistrationData {
    return ReadRegistrationData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadRegistrationData>, I>>(object: I): ReadRegistrationData {
    const message = createBaseReadRegistrationData();
    message.fingerprint = object.fingerprint ?? "";
    message.identifier = object.identifier ?? "";
    return message;
  },
};

function createBaseReadOldToken(): ReadOldToken {
  return {};
}

export const ReadOldToken = {
  encode(_: ReadOldToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadOldToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadOldToken();
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

  fromJSON(_: any): ReadOldToken {
    return {};
  },

  toJSON(_: ReadOldToken): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadOldToken>, I>>(base?: I): ReadOldToken {
    return ReadOldToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadOldToken>, I>>(_: I): ReadOldToken {
    const message = createBaseReadOldToken();
    return message;
  },
};

function createBaseWriteRegistrationData(): WriteRegistrationData {
  return { data: new Uint8Array(0) };
}

export const WriteRegistrationData = {
  encode(message: WriteRegistrationData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteRegistrationData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteRegistrationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteRegistrationData {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: WriteRegistrationData): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteRegistrationData>, I>>(base?: I): WriteRegistrationData {
    return WriteRegistrationData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteRegistrationData>, I>>(object: I): WriteRegistrationData {
    const message = createBaseWriteRegistrationData();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseGetProductInformation(): GetProductInformation {
  return {};
}

export const GetProductInformation = {
  encode(_: GetProductInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProductInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProductInformation();
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

  fromJSON(_: any): GetProductInformation {
    return {};
  },

  toJSON(_: GetProductInformation): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetProductInformation>, I>>(base?: I): GetProductInformation {
    return GetProductInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetProductInformation>, I>>(_: I): GetProductInformation {
    const message = createBaseGetProductInformation();
    return message;
  },
};

function createBaseLog(): Log {
  return { level: 0, message: "" };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.level = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Log {
    return {
      level: isSet(object.level) ? log_LevelFromJSON(object.level) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    if (message.level !== 0) {
      obj.level = log_LevelToJSON(message.level);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Log>, I>>(base?: I): Log {
    return Log.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.level = object.level ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseUpgradesAvailable(): UpgradesAvailable {
  return { status: 0, isNonProductionActive: false, activeChannel: "", releaseNotes: "", upgrades: [] };
}

export const UpgradesAvailable = {
  encode(message: UpgradesAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.isNonProductionActive !== false) {
      writer.uint32(16).bool(message.isNonProductionActive);
    }
    if (message.activeChannel !== "") {
      writer.uint32(26).string(message.activeChannel);
    }
    if (message.releaseNotes !== "") {
      writer.uint32(34).string(message.releaseNotes);
    }
    for (const v of message.upgrades) {
      BuildInformation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradesAvailable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradesAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isNonProductionActive = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.activeChannel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.releaseNotes = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.upgrades.push(BuildInformation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpgradesAvailable {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      isNonProductionActive: isSet(object.isNonProductionActive)
        ? globalThis.Boolean(object.isNonProductionActive)
        : false,
      activeChannel: isSet(object.activeChannel) ? globalThis.String(object.activeChannel) : "",
      releaseNotes: isSet(object.releaseNotes) ? globalThis.String(object.releaseNotes) : "",
      upgrades: globalThis.Array.isArray(object?.upgrades)
        ? object.upgrades.map((e: any) => BuildInformation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpgradesAvailable): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.isNonProductionActive !== false) {
      obj.isNonProductionActive = message.isNonProductionActive;
    }
    if (message.activeChannel !== "") {
      obj.activeChannel = message.activeChannel;
    }
    if (message.releaseNotes !== "") {
      obj.releaseNotes = message.releaseNotes;
    }
    if (message.upgrades?.length) {
      obj.upgrades = message.upgrades.map((e) => BuildInformation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpgradesAvailable>, I>>(base?: I): UpgradesAvailable {
    return UpgradesAvailable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpgradesAvailable>, I>>(object: I): UpgradesAvailable {
    const message = createBaseUpgradesAvailable();
    message.status = object.status ?? 0;
    message.isNonProductionActive = object.isNonProductionActive ?? false;
    message.activeChannel = object.activeChannel ?? "";
    message.releaseNotes = object.releaseNotes ?? "";
    message.upgrades = object.upgrades?.map((e) => BuildInformation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDowngradeAvailable(): DowngradeAvailable {
  return { status: 0, downgrade: undefined, releaseNotes: "" };
}

export const DowngradeAvailable = {
  encode(message: DowngradeAvailable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.downgrade !== undefined) {
      BuildInformation.encode(message.downgrade, writer.uint32(18).fork()).ldelim();
    }
    if (message.releaseNotes !== "") {
      writer.uint32(26).string(message.releaseNotes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DowngradeAvailable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDowngradeAvailable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.downgrade = BuildInformation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.releaseNotes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DowngradeAvailable {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      downgrade: isSet(object.downgrade) ? BuildInformation.fromJSON(object.downgrade) : undefined,
      releaseNotes: isSet(object.releaseNotes) ? globalThis.String(object.releaseNotes) : "",
    };
  },

  toJSON(message: DowngradeAvailable): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.downgrade !== undefined) {
      obj.downgrade = BuildInformation.toJSON(message.downgrade);
    }
    if (message.releaseNotes !== "") {
      obj.releaseNotes = message.releaseNotes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DowngradeAvailable>, I>>(base?: I): DowngradeAvailable {
    return DowngradeAvailable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DowngradeAvailable>, I>>(object: I): DowngradeAvailable {
    const message = createBaseDowngradeAvailable();
    message.status = object.status ?? 0;
    message.downgrade = (object.downgrade !== undefined && object.downgrade !== null)
      ? BuildInformation.fromPartial(object.downgrade)
      : undefined;
    message.releaseNotes = object.releaseNotes ?? "";
    return message;
  },
};

function createBaseDownloadProgress(): DownloadProgress {
  return { status: 0, complete: false, progress: 0 };
}

export const DownloadProgress = {
  encode(message: DownloadProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.complete !== false) {
      writer.uint32(16).bool(message.complete);
    }
    if (message.progress !== 0) {
      writer.uint32(29).float(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadProgress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.complete = reader.bool();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.progress = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadProgress {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      complete: isSet(object.complete) ? globalThis.Boolean(object.complete) : false,
      progress: isSet(object.progress) ? globalThis.Number(object.progress) : 0,
    };
  },

  toJSON(message: DownloadProgress): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.complete !== false) {
      obj.complete = message.complete;
    }
    if (message.progress !== 0) {
      obj.progress = message.progress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadProgress>, I>>(base?: I): DownloadProgress {
    return DownloadProgress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadProgress>, I>>(object: I): DownloadProgress {
    const message = createBaseDownloadProgress();
    message.status = object.status ?? 0;
    message.complete = object.complete ?? false;
    message.progress = object.progress ?? 0;
    return message;
  },
};

function createBaseAlerts(): Alerts {
  return { alerts: [] };
}

export const Alerts = {
  encode(message: Alerts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.alerts) {
      Alert.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alerts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlerts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alerts.push(Alert.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Alerts {
    return { alerts: globalThis.Array.isArray(object?.alerts) ? object.alerts.map((e: any) => Alert.fromJSON(e)) : [] };
  },

  toJSON(message: Alerts): unknown {
    const obj: any = {};
    if (message.alerts?.length) {
      obj.alerts = message.alerts.map((e) => Alert.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alerts>, I>>(base?: I): Alerts {
    return Alerts.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alerts>, I>>(object: I): Alerts {
    const message = createBaseAlerts();
    message.alerts = object.alerts?.map((e) => Alert.fromPartial(e)) || [];
    return message;
  },
};

function createBaseShowExpirationDialog(): ShowExpirationDialog {
  return { days: 0 };
}

export const ShowExpirationDialog = {
  encode(message: ShowExpirationDialog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.days !== 0) {
      writer.uint32(8).int32(message.days);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShowExpirationDialog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShowExpirationDialog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.days = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShowExpirationDialog {
    return { days: isSet(object.days) ? globalThis.Number(object.days) : 0 };
  },

  toJSON(message: ShowExpirationDialog): unknown {
    const obj: any = {};
    if (message.days !== 0) {
      obj.days = Math.round(message.days);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShowExpirationDialog>, I>>(base?: I): ShowExpirationDialog {
    return ShowExpirationDialog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShowExpirationDialog>, I>>(object: I): ShowExpirationDialog {
    const message = createBaseShowExpirationDialog();
    message.days = object.days ?? 0;
    return message;
  },
};

function createBaseLicenseInfo(): LicenseInfo {
  return { registrationInfo: undefined, availableSeats: undefined, totalSeats: undefined, legacy: false };
}

export const LicenseInfo = {
  encode(message: LicenseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registrationInfo !== undefined) {
      RegistrationInfo.encode(message.registrationInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.availableSeats !== undefined) {
      Seats.encode(message.availableSeats, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalSeats !== undefined) {
      Seats.encode(message.totalSeats, writer.uint32(26).fork()).ldelim();
    }
    if (message.legacy !== false) {
      writer.uint32(32).bool(message.legacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LicenseInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLicenseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registrationInfo = RegistrationInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.availableSeats = Seats.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalSeats = Seats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.legacy = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LicenseInfo {
    return {
      registrationInfo: isSet(object.registrationInfo) ? RegistrationInfo.fromJSON(object.registrationInfo) : undefined,
      availableSeats: isSet(object.availableSeats) ? Seats.fromJSON(object.availableSeats) : undefined,
      totalSeats: isSet(object.totalSeats) ? Seats.fromJSON(object.totalSeats) : undefined,
      legacy: isSet(object.legacy) ? globalThis.Boolean(object.legacy) : false,
    };
  },

  toJSON(message: LicenseInfo): unknown {
    const obj: any = {};
    if (message.registrationInfo !== undefined) {
      obj.registrationInfo = RegistrationInfo.toJSON(message.registrationInfo);
    }
    if (message.availableSeats !== undefined) {
      obj.availableSeats = Seats.toJSON(message.availableSeats);
    }
    if (message.totalSeats !== undefined) {
      obj.totalSeats = Seats.toJSON(message.totalSeats);
    }
    if (message.legacy !== false) {
      obj.legacy = message.legacy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LicenseInfo>, I>>(base?: I): LicenseInfo {
    return LicenseInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LicenseInfo>, I>>(object: I): LicenseInfo {
    const message = createBaseLicenseInfo();
    message.registrationInfo = (object.registrationInfo !== undefined && object.registrationInfo !== null)
      ? RegistrationInfo.fromPartial(object.registrationInfo)
      : undefined;
    message.availableSeats = (object.availableSeats !== undefined && object.availableSeats !== null)
      ? Seats.fromPartial(object.availableSeats)
      : undefined;
    message.totalSeats = (object.totalSeats !== undefined && object.totalSeats !== null)
      ? Seats.fromPartial(object.totalSeats)
      : undefined;
    message.legacy = object.legacy ?? false;
    return message;
  },
};

function createBaseVerificationComplete(): VerificationComplete {
  return {
    result: 0,
    license: undefined,
    bibles: undefined,
    token: undefined,
    subscriptionInfo: undefined,
    alert: 0,
    banner: 0,
  };
}

export const VerificationComplete = {
  encode(message: VerificationComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    if (message.license !== undefined) {
      LicenseInfo.encode(message.license, writer.uint32(18).fork()).ldelim();
    }
    if (message.bibles !== undefined) {
      Bibles.encode(message.bibles, writer.uint32(26).fork()).ldelim();
    }
    if (message.token !== undefined) {
      TokenMetadata.encode(message.token, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscriptionInfo !== undefined) {
      SubscriptionInfo.encode(message.subscriptionInfo, writer.uint32(42).fork()).ldelim();
    }
    if (message.alert !== 0) {
      writer.uint32(48).int32(message.alert);
    }
    if (message.banner !== 0) {
      writer.uint32(56).int32(message.banner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationComplete {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.result = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.license = LicenseInfo.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bibles = Bibles.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.token = TokenMetadata.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subscriptionInfo = SubscriptionInfo.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.alert = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.banner = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationComplete {
    return {
      result: isSet(object.result) ? statusFromJSON(object.result) : 0,
      license: isSet(object.license) ? LicenseInfo.fromJSON(object.license) : undefined,
      bibles: isSet(object.bibles) ? Bibles.fromJSON(object.bibles) : undefined,
      token: isSet(object.token) ? TokenMetadata.fromJSON(object.token) : undefined,
      subscriptionInfo: isSet(object.subscriptionInfo) ? SubscriptionInfo.fromJSON(object.subscriptionInfo) : undefined,
      alert: isSet(object.alert) ? popupAlertMessageFromJSON(object.alert) : 0,
      banner: isSet(object.banner) ? bannerMessageFromJSON(object.banner) : 0,
    };
  },

  toJSON(message: VerificationComplete): unknown {
    const obj: any = {};
    if (message.result !== 0) {
      obj.result = statusToJSON(message.result);
    }
    if (message.license !== undefined) {
      obj.license = LicenseInfo.toJSON(message.license);
    }
    if (message.bibles !== undefined) {
      obj.bibles = Bibles.toJSON(message.bibles);
    }
    if (message.token !== undefined) {
      obj.token = TokenMetadata.toJSON(message.token);
    }
    if (message.subscriptionInfo !== undefined) {
      obj.subscriptionInfo = SubscriptionInfo.toJSON(message.subscriptionInfo);
    }
    if (message.alert !== 0) {
      obj.alert = popupAlertMessageToJSON(message.alert);
    }
    if (message.banner !== 0) {
      obj.banner = bannerMessageToJSON(message.banner);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationComplete>, I>>(base?: I): VerificationComplete {
    return VerificationComplete.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationComplete>, I>>(object: I): VerificationComplete {
    const message = createBaseVerificationComplete();
    message.result = object.result ?? 0;
    message.license = (object.license !== undefined && object.license !== null)
      ? LicenseInfo.fromPartial(object.license)
      : undefined;
    message.bibles = (object.bibles !== undefined && object.bibles !== null)
      ? Bibles.fromPartial(object.bibles)
      : undefined;
    message.token = (object.token !== undefined && object.token !== null)
      ? TokenMetadata.fromPartial(object.token)
      : undefined;
    message.subscriptionInfo = (object.subscriptionInfo !== undefined && object.subscriptionInfo !== null)
      ? SubscriptionInfo.fromPartial(object.subscriptionInfo)
      : undefined;
    message.alert = object.alert ?? 0;
    message.banner = object.banner ?? 0;
    return message;
  },
};

function createBaseSeats(): Seats {
  return { basic: 0, advanced: 0 };
}

export const Seats = {
  encode(message: Seats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basic !== 0) {
      writer.uint32(8).int32(message.basic);
    }
    if (message.advanced !== 0) {
      writer.uint32(16).int32(message.advanced);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Seats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.basic = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.advanced = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Seats {
    return {
      basic: isSet(object.basic) ? globalThis.Number(object.basic) : 0,
      advanced: isSet(object.advanced) ? globalThis.Number(object.advanced) : 0,
    };
  },

  toJSON(message: Seats): unknown {
    const obj: any = {};
    if (message.basic !== 0) {
      obj.basic = Math.round(message.basic);
    }
    if (message.advanced !== 0) {
      obj.advanced = Math.round(message.advanced);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Seats>, I>>(base?: I): Seats {
    return Seats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Seats>, I>>(object: I): Seats {
    const message = createBaseSeats();
    message.basic = object.basic ?? 0;
    message.advanced = object.advanced ?? 0;
    return message;
  },
};

function createBaseSupplementalInformation(): SupplementalInformation {
  return { downloadLink: "" };
}

export const SupplementalInformation = {
  encode(message: SupplementalInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.downloadLink !== "") {
      writer.uint32(10).string(message.downloadLink);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SupplementalInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplementalInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.downloadLink = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SupplementalInformation {
    return { downloadLink: isSet(object.downloadLink) ? globalThis.String(object.downloadLink) : "" };
  },

  toJSON(message: SupplementalInformation): unknown {
    const obj: any = {};
    if (message.downloadLink !== "") {
      obj.downloadLink = message.downloadLink;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SupplementalInformation>, I>>(base?: I): SupplementalInformation {
    return SupplementalInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SupplementalInformation>, I>>(object: I): SupplementalInformation {
    const message = createBaseSupplementalInformation();
    message.downloadLink = object.downloadLink ?? "";
    return message;
  },
};

function createBaseBible(): Bible {
  return {
    id: "",
    name: "",
    language: "",
    publisher: "",
    copyright: "",
    displayAbbreviation: "",
    internalAbbreviation: "",
    version: "",
    info: undefined,
  };
}

export const Bible = {
  encode(message: Bible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.language !== "") {
      writer.uint32(26).string(message.language);
    }
    if (message.publisher !== "") {
      writer.uint32(34).string(message.publisher);
    }
    if (message.copyright !== "") {
      writer.uint32(42).string(message.copyright);
    }
    if (message.displayAbbreviation !== "") {
      writer.uint32(50).string(message.displayAbbreviation);
    }
    if (message.internalAbbreviation !== "") {
      writer.uint32(58).string(message.internalAbbreviation);
    }
    if (message.version !== "") {
      writer.uint32(66).string(message.version);
    }
    if (message.info !== undefined) {
      SupplementalInformation.encode(message.info, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.language = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publisher = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.copyright = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.displayAbbreviation = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.internalAbbreviation = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.version = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.info = SupplementalInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bible {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      language: isSet(object.language) ? globalThis.String(object.language) : "",
      publisher: isSet(object.publisher) ? globalThis.String(object.publisher) : "",
      copyright: isSet(object.copyright) ? globalThis.String(object.copyright) : "",
      displayAbbreviation: isSet(object.displayAbbreviation) ? globalThis.String(object.displayAbbreviation) : "",
      internalAbbreviation: isSet(object.internalAbbreviation) ? globalThis.String(object.internalAbbreviation) : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      info: isSet(object.info) ? SupplementalInformation.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: Bible): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.language !== "") {
      obj.language = message.language;
    }
    if (message.publisher !== "") {
      obj.publisher = message.publisher;
    }
    if (message.copyright !== "") {
      obj.copyright = message.copyright;
    }
    if (message.displayAbbreviation !== "") {
      obj.displayAbbreviation = message.displayAbbreviation;
    }
    if (message.internalAbbreviation !== "") {
      obj.internalAbbreviation = message.internalAbbreviation;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.info !== undefined) {
      obj.info = SupplementalInformation.toJSON(message.info);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bible>, I>>(base?: I): Bible {
    return Bible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bible>, I>>(object: I): Bible {
    const message = createBaseBible();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.language = object.language ?? "";
    message.publisher = object.publisher ?? "";
    message.copyright = object.copyright ?? "";
    message.displayAbbreviation = object.displayAbbreviation ?? "";
    message.internalAbbreviation = object.internalAbbreviation ?? "";
    message.version = object.version ?? "";
    message.info = (object.info !== undefined && object.info !== null)
      ? SupplementalInformation.fromPartial(object.info)
      : undefined;
    return message;
  },
};

function createBasePurchasedBible(): PurchasedBible {
  return { metadata: undefined, licensingInfo: undefined };
}

export const PurchasedBible = {
  encode(message: PurchasedBible, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Bible.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.licensingInfo !== undefined) {
      LicensingInfo.encode(message.licensingInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PurchasedBible {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePurchasedBible();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = Bible.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.licensingInfo = LicensingInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PurchasedBible {
    return {
      metadata: isSet(object.metadata) ? Bible.fromJSON(object.metadata) : undefined,
      licensingInfo: isSet(object.licensingInfo) ? LicensingInfo.fromJSON(object.licensingInfo) : undefined,
    };
  },

  toJSON(message: PurchasedBible): unknown {
    const obj: any = {};
    if (message.metadata !== undefined) {
      obj.metadata = Bible.toJSON(message.metadata);
    }
    if (message.licensingInfo !== undefined) {
      obj.licensingInfo = LicensingInfo.toJSON(message.licensingInfo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PurchasedBible>, I>>(base?: I): PurchasedBible {
    return PurchasedBible.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PurchasedBible>, I>>(object: I): PurchasedBible {
    const message = createBasePurchasedBible();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Bible.fromPartial(object.metadata)
      : undefined;
    message.licensingInfo = (object.licensingInfo !== undefined && object.licensingInfo !== null)
      ? LicensingInfo.fromPartial(object.licensingInfo)
      : undefined;
    return message;
  },
};

function createBaseLicensingInfo(): LicensingInfo {
  return { availableCopies: 0, totalCopies: 0, isActiveLocally: false, otherActiveCopies: [] };
}

export const LicensingInfo = {
  encode(message: LicensingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableCopies !== 0) {
      writer.uint32(8).int32(message.availableCopies);
    }
    if (message.totalCopies !== 0) {
      writer.uint32(16).int32(message.totalCopies);
    }
    if (message.isActiveLocally !== false) {
      writer.uint32(24).bool(message.isActiveLocally);
    }
    for (const v of message.otherActiveCopies) {
      ActiveCopy.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LicensingInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLicensingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.availableCopies = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalCopies = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isActiveLocally = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.otherActiveCopies.push(ActiveCopy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LicensingInfo {
    return {
      availableCopies: isSet(object.availableCopies) ? globalThis.Number(object.availableCopies) : 0,
      totalCopies: isSet(object.totalCopies) ? globalThis.Number(object.totalCopies) : 0,
      isActiveLocally: isSet(object.isActiveLocally) ? globalThis.Boolean(object.isActiveLocally) : false,
      otherActiveCopies: globalThis.Array.isArray(object?.otherActiveCopies)
        ? object.otherActiveCopies.map((e: any) => ActiveCopy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LicensingInfo): unknown {
    const obj: any = {};
    if (message.availableCopies !== 0) {
      obj.availableCopies = Math.round(message.availableCopies);
    }
    if (message.totalCopies !== 0) {
      obj.totalCopies = Math.round(message.totalCopies);
    }
    if (message.isActiveLocally !== false) {
      obj.isActiveLocally = message.isActiveLocally;
    }
    if (message.otherActiveCopies?.length) {
      obj.otherActiveCopies = message.otherActiveCopies.map((e) => ActiveCopy.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LicensingInfo>, I>>(base?: I): LicensingInfo {
    return LicensingInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LicensingInfo>, I>>(object: I): LicensingInfo {
    const message = createBaseLicensingInfo();
    message.availableCopies = object.availableCopies ?? 0;
    message.totalCopies = object.totalCopies ?? 0;
    message.isActiveLocally = object.isActiveLocally ?? false;
    message.otherActiveCopies = object.otherActiveCopies?.map((e) => ActiveCopy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseActiveCopy(): ActiveCopy {
  return { displayName: "", hostname: "" };
}

export const ActiveCopy = {
  encode(message: ActiveCopy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.hostname !== "") {
      writer.uint32(18).string(message.hostname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveCopy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveCopy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hostname = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActiveCopy {
    return {
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      hostname: isSet(object.hostname) ? globalThis.String(object.hostname) : "",
    };
  },

  toJSON(message: ActiveCopy): unknown {
    const obj: any = {};
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.hostname !== "") {
      obj.hostname = message.hostname;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActiveCopy>, I>>(base?: I): ActiveCopy {
    return ActiveCopy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActiveCopy>, I>>(object: I): ActiveCopy {
    const message = createBaseActiveCopy();
    message.displayName = object.displayName ?? "";
    message.hostname = object.hostname ?? "";
    return message;
  },
};

function createBaseRegistrationInfo(): RegistrationInfo {
  return {
    userName: "",
    displayKey: "",
    displayName: "",
    expirationDate: 0,
    activationKey: "",
    licenseType: 0,
    registrationDate: 0,
    seatType: 0,
    latestAvailableBuildNumber: 0,
    latestAvailableVersion: "",
    hasWorshipHouseMediaSubscription: false,
    maintenanceExpirationDate: 0,
    nonExtendedMaintenanceExpirationDate: 0,
    isAutoRenewalActive: false,
  };
}

export const RegistrationInfo = {
  encode(message: RegistrationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userName !== "") {
      writer.uint32(10).string(message.userName);
    }
    if (message.displayKey !== "") {
      writer.uint32(18).string(message.displayKey);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    if (message.expirationDate !== 0) {
      writer.uint32(32).int64(message.expirationDate);
    }
    if (message.activationKey !== "") {
      writer.uint32(42).string(message.activationKey);
    }
    if (message.licenseType !== 0) {
      writer.uint32(48).int32(message.licenseType);
    }
    if (message.registrationDate !== 0) {
      writer.uint32(56).int64(message.registrationDate);
    }
    if (message.seatType !== 0) {
      writer.uint32(64).int32(message.seatType);
    }
    if (message.latestAvailableBuildNumber !== 0) {
      writer.uint32(72).uint32(message.latestAvailableBuildNumber);
    }
    if (message.latestAvailableVersion !== "") {
      writer.uint32(82).string(message.latestAvailableVersion);
    }
    if (message.hasWorshipHouseMediaSubscription !== false) {
      writer.uint32(88).bool(message.hasWorshipHouseMediaSubscription);
    }
    if (message.maintenanceExpirationDate !== 0) {
      writer.uint32(96).int64(message.maintenanceExpirationDate);
    }
    if (message.nonExtendedMaintenanceExpirationDate !== 0) {
      writer.uint32(104).int64(message.nonExtendedMaintenanceExpirationDate);
    }
    if (message.isAutoRenewalActive !== false) {
      writer.uint32(112).bool(message.isAutoRenewalActive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegistrationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegistrationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.displayKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.expirationDate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.activationKey = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.licenseType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.registrationDate = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.seatType = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.latestAvailableBuildNumber = reader.uint32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.latestAvailableVersion = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.hasWorshipHouseMediaSubscription = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.maintenanceExpirationDate = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.nonExtendedMaintenanceExpirationDate = longToNumber(reader.int64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.isAutoRenewalActive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegistrationInfo {
    return {
      userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
      displayKey: isSet(object.displayKey) ? globalThis.String(object.displayKey) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      expirationDate: isSet(object.expirationDate) ? globalThis.Number(object.expirationDate) : 0,
      activationKey: isSet(object.activationKey) ? globalThis.String(object.activationKey) : "",
      licenseType: isSet(object.licenseType) ? licenseTypeFromJSON(object.licenseType) : 0,
      registrationDate: isSet(object.registrationDate) ? globalThis.Number(object.registrationDate) : 0,
      seatType: isSet(object.seatType) ? seatTypeFromJSON(object.seatType) : 0,
      latestAvailableBuildNumber: isSet(object.latestAvailableBuildNumber)
        ? globalThis.Number(object.latestAvailableBuildNumber)
        : 0,
      latestAvailableVersion: isSet(object.latestAvailableVersion)
        ? globalThis.String(object.latestAvailableVersion)
        : "",
      hasWorshipHouseMediaSubscription: isSet(object.hasWorshipHouseMediaSubscription)
        ? globalThis.Boolean(object.hasWorshipHouseMediaSubscription)
        : false,
      maintenanceExpirationDate: isSet(object.maintenanceExpirationDate)
        ? globalThis.Number(object.maintenanceExpirationDate)
        : 0,
      nonExtendedMaintenanceExpirationDate: isSet(object.nonExtendedMaintenanceExpirationDate)
        ? globalThis.Number(object.nonExtendedMaintenanceExpirationDate)
        : 0,
      isAutoRenewalActive: isSet(object.isAutoRenewalActive) ? globalThis.Boolean(object.isAutoRenewalActive) : false,
    };
  },

  toJSON(message: RegistrationInfo): unknown {
    const obj: any = {};
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.displayKey !== "") {
      obj.displayKey = message.displayKey;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.expirationDate !== 0) {
      obj.expirationDate = Math.round(message.expirationDate);
    }
    if (message.activationKey !== "") {
      obj.activationKey = message.activationKey;
    }
    if (message.licenseType !== 0) {
      obj.licenseType = licenseTypeToJSON(message.licenseType);
    }
    if (message.registrationDate !== 0) {
      obj.registrationDate = Math.round(message.registrationDate);
    }
    if (message.seatType !== 0) {
      obj.seatType = seatTypeToJSON(message.seatType);
    }
    if (message.latestAvailableBuildNumber !== 0) {
      obj.latestAvailableBuildNumber = Math.round(message.latestAvailableBuildNumber);
    }
    if (message.latestAvailableVersion !== "") {
      obj.latestAvailableVersion = message.latestAvailableVersion;
    }
    if (message.hasWorshipHouseMediaSubscription !== false) {
      obj.hasWorshipHouseMediaSubscription = message.hasWorshipHouseMediaSubscription;
    }
    if (message.maintenanceExpirationDate !== 0) {
      obj.maintenanceExpirationDate = Math.round(message.maintenanceExpirationDate);
    }
    if (message.nonExtendedMaintenanceExpirationDate !== 0) {
      obj.nonExtendedMaintenanceExpirationDate = Math.round(message.nonExtendedMaintenanceExpirationDate);
    }
    if (message.isAutoRenewalActive !== false) {
      obj.isAutoRenewalActive = message.isAutoRenewalActive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegistrationInfo>, I>>(base?: I): RegistrationInfo {
    return RegistrationInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegistrationInfo>, I>>(object: I): RegistrationInfo {
    const message = createBaseRegistrationInfo();
    message.userName = object.userName ?? "";
    message.displayKey = object.displayKey ?? "";
    message.displayName = object.displayName ?? "";
    message.expirationDate = object.expirationDate ?? 0;
    message.activationKey = object.activationKey ?? "";
    message.licenseType = object.licenseType ?? 0;
    message.registrationDate = object.registrationDate ?? 0;
    message.seatType = object.seatType ?? 0;
    message.latestAvailableBuildNumber = object.latestAvailableBuildNumber ?? 0;
    message.latestAvailableVersion = object.latestAvailableVersion ?? "";
    message.hasWorshipHouseMediaSubscription = object.hasWorshipHouseMediaSubscription ?? false;
    message.maintenanceExpirationDate = object.maintenanceExpirationDate ?? 0;
    message.nonExtendedMaintenanceExpirationDate = object.nonExtendedMaintenanceExpirationDate ?? 0;
    message.isAutoRenewalActive = object.isAutoRenewalActive ?? false;
    return message;
  },
};

function createBaseBuildInformation(): BuildInformation {
  return {
    buildNumber: 0,
    version: "",
    minOsVersion: "",
    releaseDate: 0,
    registrationDate: 0,
    downloadSize: 0,
    downloadUrl: "",
    channel: "",
    isBeta: false,
    isAvailable: false,
  };
}

export const BuildInformation = {
  encode(message: BuildInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buildNumber !== 0) {
      writer.uint32(8).int32(message.buildNumber);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.minOsVersion !== "") {
      writer.uint32(26).string(message.minOsVersion);
    }
    if (message.releaseDate !== 0) {
      writer.uint32(32).int64(message.releaseDate);
    }
    if (message.registrationDate !== 0) {
      writer.uint32(40).int64(message.registrationDate);
    }
    if (message.downloadSize !== 0) {
      writer.uint32(48).int64(message.downloadSize);
    }
    if (message.downloadUrl !== "") {
      writer.uint32(58).string(message.downloadUrl);
    }
    if (message.channel !== "") {
      writer.uint32(66).string(message.channel);
    }
    if (message.isBeta !== false) {
      writer.uint32(72).bool(message.isBeta);
    }
    if (message.isAvailable !== false) {
      writer.uint32(80).bool(message.isAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.buildNumber = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minOsVersion = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.releaseDate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.registrationDate = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.downloadSize = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.downloadUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.channel = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.isBeta = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.isAvailable = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInformation {
    return {
      buildNumber: isSet(object.buildNumber) ? globalThis.Number(object.buildNumber) : 0,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      minOsVersion: isSet(object.minOsVersion) ? globalThis.String(object.minOsVersion) : "",
      releaseDate: isSet(object.releaseDate) ? globalThis.Number(object.releaseDate) : 0,
      registrationDate: isSet(object.registrationDate) ? globalThis.Number(object.registrationDate) : 0,
      downloadSize: isSet(object.downloadSize) ? globalThis.Number(object.downloadSize) : 0,
      downloadUrl: isSet(object.downloadUrl) ? globalThis.String(object.downloadUrl) : "",
      channel: isSet(object.channel) ? globalThis.String(object.channel) : "",
      isBeta: isSet(object.isBeta) ? globalThis.Boolean(object.isBeta) : false,
      isAvailable: isSet(object.isAvailable) ? globalThis.Boolean(object.isAvailable) : false,
    };
  },

  toJSON(message: BuildInformation): unknown {
    const obj: any = {};
    if (message.buildNumber !== 0) {
      obj.buildNumber = Math.round(message.buildNumber);
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.minOsVersion !== "") {
      obj.minOsVersion = message.minOsVersion;
    }
    if (message.releaseDate !== 0) {
      obj.releaseDate = Math.round(message.releaseDate);
    }
    if (message.registrationDate !== 0) {
      obj.registrationDate = Math.round(message.registrationDate);
    }
    if (message.downloadSize !== 0) {
      obj.downloadSize = Math.round(message.downloadSize);
    }
    if (message.downloadUrl !== "") {
      obj.downloadUrl = message.downloadUrl;
    }
    if (message.channel !== "") {
      obj.channel = message.channel;
    }
    if (message.isBeta !== false) {
      obj.isBeta = message.isBeta;
    }
    if (message.isAvailable !== false) {
      obj.isAvailable = message.isAvailable;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInformation>, I>>(base?: I): BuildInformation {
    return BuildInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BuildInformation>, I>>(object: I): BuildInformation {
    const message = createBaseBuildInformation();
    message.buildNumber = object.buildNumber ?? 0;
    message.version = object.version ?? "";
    message.minOsVersion = object.minOsVersion ?? "";
    message.releaseDate = object.releaseDate ?? 0;
    message.registrationDate = object.registrationDate ?? 0;
    message.downloadSize = object.downloadSize ?? 0;
    message.downloadUrl = object.downloadUrl ?? "";
    message.channel = object.channel ?? "";
    message.isBeta = object.isBeta ?? false;
    message.isAvailable = object.isAvailable ?? false;
    return message;
  },
};

function createBaseAlert(): Alert {
  return { alertType: 0, title: "", contentType: 0, content: "" };
}

export const Alert = {
  encode(message: Alert, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alertType !== 0) {
      writer.uint32(8).int32(message.alertType);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.contentType !== 0) {
      writer.uint32(24).int32(message.contentType);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Alert {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlert();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.alertType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.contentType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Alert {
    return {
      alertType: isSet(object.alertType) ? alertTypeFromJSON(object.alertType) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      contentType: isSet(object.contentType) ? alertContentTypeFromJSON(object.contentType) : 0,
      content: isSet(object.content) ? globalThis.String(object.content) : "",
    };
  },

  toJSON(message: Alert): unknown {
    const obj: any = {};
    if (message.alertType !== 0) {
      obj.alertType = alertTypeToJSON(message.alertType);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.contentType !== 0) {
      obj.contentType = alertContentTypeToJSON(message.contentType);
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alert>, I>>(base?: I): Alert {
    return Alert.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alert>, I>>(object: I): Alert {
    const message = createBaseAlert();
    message.alertType = object.alertType ?? 0;
    message.title = object.title ?? "";
    message.contentType = object.contentType ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseTokenMetadata(): TokenMetadata {
  return { accessToken: "", refreshToken: "", expiresAt: 0 };
}

export const TokenMetadata = {
  encode(message: TokenMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    if (message.expiresAt !== 0) {
      writer.uint32(24).int64(message.expiresAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.expiresAt = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenMetadata {
    return {
      accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
      expiresAt: isSet(object.expiresAt) ? globalThis.Number(object.expiresAt) : 0,
    };
  },

  toJSON(message: TokenMetadata): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    if (message.expiresAt !== 0) {
      obj.expiresAt = Math.round(message.expiresAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenMetadata>, I>>(base?: I): TokenMetadata {
    return TokenMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenMetadata>, I>>(object: I): TokenMetadata {
    const message = createBaseTokenMetadata();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    message.expiresAt = object.expiresAt ?? 0;
    return message;
  },
};

function createBaseSubscriptionInfo(): SubscriptionInfo {
  return { organizationName: "", procontentLicenseType: 0, procontentLicenseExpiration: 0 };
}

export const SubscriptionInfo = {
  encode(message: SubscriptionInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.organizationName !== "") {
      writer.uint32(10).string(message.organizationName);
    }
    if (message.procontentLicenseType !== 0) {
      writer.uint32(16).int32(message.procontentLicenseType);
    }
    if (message.procontentLicenseExpiration !== 0) {
      writer.uint32(24).int64(message.procontentLicenseExpiration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscriptionInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscriptionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.organizationName = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.procontentLicenseType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.procontentLicenseExpiration = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscriptionInfo {
    return {
      organizationName: isSet(object.organizationName) ? globalThis.String(object.organizationName) : "",
      procontentLicenseType: isSet(object.procontentLicenseType)
        ? proContentLicenseTypeFromJSON(object.procontentLicenseType)
        : 0,
      procontentLicenseExpiration: isSet(object.procontentLicenseExpiration)
        ? globalThis.Number(object.procontentLicenseExpiration)
        : 0,
    };
  },

  toJSON(message: SubscriptionInfo): unknown {
    const obj: any = {};
    if (message.organizationName !== "") {
      obj.organizationName = message.organizationName;
    }
    if (message.procontentLicenseType !== 0) {
      obj.procontentLicenseType = proContentLicenseTypeToJSON(message.procontentLicenseType);
    }
    if (message.procontentLicenseExpiration !== 0) {
      obj.procontentLicenseExpiration = Math.round(message.procontentLicenseExpiration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscriptionInfo>, I>>(base?: I): SubscriptionInfo {
    return SubscriptionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscriptionInfo>, I>>(object: I): SubscriptionInfo {
    const message = createBaseSubscriptionInfo();
    message.organizationName = object.organizationName ?? "";
    message.procontentLicenseType = object.procontentLicenseType ?? 0;
    message.procontentLicenseExpiration = object.procontentLicenseExpiration ?? 0;
    return message;
  },
};

function createBaseDownloadLink(): DownloadLink {
  return { id: "", url: "" };
}

export const DownloadLink = {
  encode(message: DownloadLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DownloadLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDownloadLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DownloadLink {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: DownloadLink): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DownloadLink>, I>>(base?: I): DownloadLink {
    return DownloadLink.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DownloadLink>, I>>(object: I): DownloadLink {
    const message = createBaseDownloadLink();
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseBibles(): Bibles {
  return { freeBibles: [], purchasedBibles: [] };
}

export const Bibles = {
  encode(message: Bibles, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.freeBibles) {
      Bible.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.purchasedBibles) {
      PurchasedBible.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bibles {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBibles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.freeBibles.push(Bible.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.purchasedBibles.push(PurchasedBible.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bibles {
    return {
      freeBibles: globalThis.Array.isArray(object?.freeBibles)
        ? object.freeBibles.map((e: any) => Bible.fromJSON(e))
        : [],
      purchasedBibles: globalThis.Array.isArray(object?.purchasedBibles)
        ? object.purchasedBibles.map((e: any) => PurchasedBible.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Bibles): unknown {
    const obj: any = {};
    if (message.freeBibles?.length) {
      obj.freeBibles = message.freeBibles.map((e) => Bible.toJSON(e));
    }
    if (message.purchasedBibles?.length) {
      obj.purchasedBibles = message.purchasedBibles.map((e) => PurchasedBible.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Bibles>, I>>(base?: I): Bibles {
    return Bibles.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Bibles>, I>>(object: I): Bibles {
    const message = createBaseBibles();
    message.freeBibles = object.freeBibles?.map((e) => Bible.fromPartial(e)) || [];
    message.purchasedBibles = object.purchasedBibles?.map((e) => PurchasedBible.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeatureFlags(): FeatureFlags {
  return { useStaging: false, useSubscription: false };
}

export const FeatureFlags = {
  encode(message: FeatureFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useStaging !== false) {
      writer.uint32(8).bool(message.useStaging);
    }
    if (message.useSubscription !== false) {
      writer.uint32(16).bool(message.useSubscription);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.useStaging = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.useSubscription = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeatureFlags {
    return {
      useStaging: isSet(object.useStaging) ? globalThis.Boolean(object.useStaging) : false,
      useSubscription: isSet(object.useSubscription) ? globalThis.Boolean(object.useSubscription) : false,
    };
  },

  toJSON(message: FeatureFlags): unknown {
    const obj: any = {};
    if (message.useStaging !== false) {
      obj.useStaging = message.useStaging;
    }
    if (message.useSubscription !== false) {
      obj.useSubscription = message.useSubscription;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FeatureFlags>, I>>(base?: I): FeatureFlags {
    return FeatureFlags.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FeatureFlags>, I>>(object: I): FeatureFlags {
    const message = createBaseFeatureFlags();
    message.useStaging = object.useStaging ?? false;
    message.useSubscription = object.useSubscription ?? false;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
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
