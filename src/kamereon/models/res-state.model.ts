import type { DataResponse } from './kamereon.model';

export type ResStateResponse = DataResponse<ResState>

export interface ResState {
  details: string,
  code: string;
}
