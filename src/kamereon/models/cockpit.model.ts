import type { DataResponse } from './kamereon.model';

export type CockpitResponse = DataResponse<Cockpit>;

export interface Cockpit {
  fuelQuantity: number;
  fuelAutonomy: number;
  totalMileage: number;
}
