import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Pressure API.
 */
export type PressureData = DataResponse<Pressure>

/**
 * Response model for Kamereon Pressure API when request header "accept"="application/json".
 */
export interface Pressure {
  id: Vin;
  flPressure: number;
  frPressure: number;
  rlPressure: number;
  rrPressure: number;
  flStatus: number;
  frStatus: number;
  rlStatus: number;
  rrStatus: number;
}
