import type { DateType } from '../../shared.model';
import type { DataResponse } from './kamereon.model';

export type AdapterType =
  | 'kca'
  | 'kcm'

/* ------- */

/**
 * Response model for Kamereon Adapter API.
 */
export type AdapterInfoData = DataResponse<Omit<AdapterInfo, 'uuid'>>;

/**
 * Response model for Kamereon Adapter API when request header "accept"="application/json".
 */
export interface AdapterInfo {
  uuid?: string;
  vin?: string;
  vehicleId?: null;
  batteryCode?: string;
  bin?: null;
  brand?: string;
  canGeneration?: string;
  carGateway?: string;
  color?: null;
  dealerId?: null;
  deliveryCountry?: string;
  deliveryDate?: null;
  deviceSerialNumber?: null;
  electricityUnitCost?: null;
  energy?: string;
  engineType?: string;
  familyCode?: string;
  firstRegistrationDate?: null;
  fuelUnitCost?: null;
  gearbox?: string;
  modelCode?: string;
  modelCodeDetail?: string;
  modelName?: null;
  modelYear?: null;
  navigAssistCode?: null;
  nickname?: null;
  pictureUrl?: null;
  radioType?: string;
  region?: string;
  registrationCountry?: string;
  registrationNumber?: null;
  sourceReferenceId?: null;
  tcuCode?: string;
  upholstery?: null;
  vehicleSourceReference?: string;
  versionCode?: string;
  versionName?: null;
  privacyMode?: string;
  privacyModeUpdateDate?: DateType;
  svtFlag?: boolean;
  svtLastUpdateTime?: null;
  svtBlockFlag?: boolean;
  svtBlockLastUpdateTime?: null;
  packId?: null;
  packManufacturingDate?: null;
  packNominalCapacity?: null;
  packType?: null;
  temperatureUnit?: null;
  vehicleSourceType?: null;
  vehicleType?: null;
}
