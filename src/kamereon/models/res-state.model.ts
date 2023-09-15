import type { DataResponse, Vin } from './kamereon.model';

export type ResStateData = DataResponse<ResState>

export interface ResState {
  id?: Vin;
  details?: string,
  code?: string;
}
