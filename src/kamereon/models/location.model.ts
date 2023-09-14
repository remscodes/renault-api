import type { DateType } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';

export type VehicleLocationData = DataResponse<Omit<VehicleLocation, 'id'>>

export interface VehicleLocation {
  id?: Vin;
  gpsDirection?: null;
  gpsLatitude?: number;
  gpsLongitude?: number;
  lastUpdateTime?: DateType;
}
