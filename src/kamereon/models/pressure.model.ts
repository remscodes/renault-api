import type { DataResponse } from './kamereon.model';

export type PressureResponse = DataResponse<Pressure>

export interface Pressure {
  flPressure: number;
  frPressure: number;
  rlPressure: number;
  rrPressure: number;
  flStatus: number;
  frStatus: number;
  rlStatus: number;
  rrStatus: number;
}
