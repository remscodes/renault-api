import { DataResponse, Vin } from './kamereon.model';

export type CockpitData = DataResponse<Omit<Cockpit, 'id'>>;

export interface Cockpit {
  id?: Vin;
  fuelQuantity?: number;
  fuelAutonomy?: number;
  totalMileage?: number;
}
