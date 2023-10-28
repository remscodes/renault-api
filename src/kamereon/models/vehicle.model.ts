import type { DateType } from '../../shared.model';

/**
 * Response model for Kamereon Account API.
 */
export interface Vehicles {
  accountId?: string;
  country?: string;
  vehicleLinks?: VehicleLink[];
}

export interface VehicleLink {
  brand?: string;
  vin?: string;
  status?: string;
  linkType?: string;
  garageBrand?: string;
  startDate?: DateType;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  ownershipStartDate?: DateType;
  cancellationReason?: unknown;
  preferredDealer?: PreferredDealer;
  connectedDriver?: ConnectedDriver;
  vehicleDetails?: VehicleDetails;
}

interface ConnectedDriver {
  role?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
}

interface PreferredDealer {
  dealerId?: string;
  dealerName?: string;
  brand?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
}

export interface VehicleDetails {
  vin?: string;
  registrationDate?: DateType;
  firstRegistrationDate?: DateType;
  engineType?: string;
  engineRatio?: string;
  modelSCR?: string;
  deliveryCountry?: DeliveryCountry;
  family?: Tag;
  tcu?: Tag;
  navigationAssistanceLevel?: Tag;
  battery?: Tag;
  radioType?: Tag;
  registrationCountry?: RegistrationCountry;
  brand?: Brand;
  model?: Tag;
  gearbox?: Tag;
  version?: RegistrationCountry;
  energy?: Tag;
  registrationNumber?: string;
  vcd?: string;
  assets?: Asset[];
  yearsOfMaintenance?: number;
  connectivityTechnology?: string;
  easyConnectStore?: boolean;
  electrical?: boolean;
  rlinkStore?: boolean;
  deliveryDate?: DateType;
  retrievedFromDhs?: boolean;
  engineEnergyType?: string;
  radioCode?: string;
}

interface Asset {
  assetType?: string;
  viewpoint?: ImageViewpointType;
  renditions?: Rendition[];
}

type ImageViewpointType =
  | 'mybrand_2'
  | 'mybrand_5'

interface Rendition {
  resolutionType?: ImageResolutionType;
  url?: string;
}

type ImageResolutionType =
  | 'ONE_MYRENAULT_LARGE'
  | 'ONE_MYRENAULT_SMALL'

interface Tag {
  code?: string;
  label?: string;
  group?: string;
}

interface Brand {
  label?: string;
}

interface DeliveryCountry {
  code?: string;
  label?: string;
}

interface RegistrationCountry {
  code?: string;
}
