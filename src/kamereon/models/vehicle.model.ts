import type { DateISO } from '../../common.model';
import type { PreferredDealer } from './person.model';

export interface Vehicles {
  accountId: string;
  country: string;
  vehicleLinks: VehicleLink[];
}

export interface VehicleLink {
  brand: string;
  vin: string;
  status: string;
  linkType: string;
  garageBrand: string;
  startDate: DateISO;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  ownershipStartDate: DateISO;
  cancellationReason: unknown;
  preferredDealer: PreferredDealer;
  connectedDriver: ConnectedDriver;
  vehicleDetails: VehicleDetails;
}

export interface ConnectedDriver {
  role: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
}

export interface VehicleDetails {
  vin: string;
  registrationDate: DateISO;
  firstRegistrationDate: DateISO;
  engineType: string;
  engineRatio: string;
  modelSCR: string;
  deliveryCountry: DeliveryCountry;
  family: Tag;
  tcu: Tag;
  navigationAssistanceLevel: Tag;
  battery: Tag;
  radioType: Tag;
  registrationCountry: RegistrationCountry;
  brand: Brand;
  model: Tag;
  gearbox: Tag;
  version: RegistrationCountry;
  energy: Tag;
  registrationNumber: string;
  vcd: string;
  manufacturingDate: string;
  assets: Asset[];
  yearsOfMaintenance: number;
  connectivityTechnology: string;
  easyConnectStore: boolean;
  electrical: boolean;
  rlinkStore: boolean;
  deliveryDate: DateISO;
  retrievedFromDhs: boolean;
  engineEnergyType: string;
  radioCode: string;
}

export interface Asset {
  assetType: string;
  viewpoint: ImageViewpointType;
  renditions: Rendition[];
}

export type ImageViewpointType =
  | 'mybrand_2'
  | 'mybrand_5'

export interface Rendition {
  resolutionType: ImageResolutionType;
  url: string;
}

export type ImageResolutionType =
  | 'ONE_MYRENAULT_LARGE'
  | 'ONE_MYRENAULT_SMALL'

export interface Tag {
  code: string;
  label: string;
  group: string;
}

export interface Brand {
  label: string;
}

export interface DeliveryCountry {
  code: string;
  label: string;
}

export interface RegistrationCountry {
  code: string;
}
