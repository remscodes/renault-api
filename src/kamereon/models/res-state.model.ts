import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon ResState API.
 */
export type ResStateData = DataResponse<ResState>

/**
 * Response model for Kamereon ResState API when request header "accept"="application/json".
 */
export interface ResState {
  id?: Vin;
  details?: string,
  code?: string;
}
