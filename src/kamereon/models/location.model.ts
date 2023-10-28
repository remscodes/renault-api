import type { DateType } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Location API.
 */
export type VehicleLocationData = DataResponse<Omit<VehicleLocation, 'id'>>

/**
 * Response model for Kamereon Location API when request header "accept"="application/json".
 */
export interface VehicleLocation {
  id?: Vin;
  gpsDirection?: null;
  gpsLatitude?: number;
  gpsLongitude?: number;
  lastUpdateTime?: DateType;
}

/* ------- */

export type ActionRefreshLocationData = DataResponse<{}, 'RefreshLocation'>

export interface ActionRefreshLocation {
  id?: string;
}
