import type { DateISO } from '../../common.model';
import type { DataResponse } from './kamereon.model';

export type VehicleLocationResponse = DataResponse<VehicleLocation>

export interface VehicleLocation {
  gpsDirection: null;
  gpsLatitude: number;
  gpsLongitude: number;
  lastUpdateTime: DateISO;
}

/* ------- */

export type ActionRefreshLocationResponse = DataResponse<undefined, 'RefreshLocation'>
