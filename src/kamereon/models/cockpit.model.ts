import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Cockpit API.
 */
export type CockpitData = DataResponse<Omit<Cockpit, 'id'>>;

/**
 * Response model for Kamereon Cockpit API when request header "accept"="application/json".
 */
export interface Cockpit {
  id?: Vin;
  fuelQuantity?: number;
  fuelAutonomy?: number;
  totalMileage?: number;
}
