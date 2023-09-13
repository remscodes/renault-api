import type { GigyaResponse } from './gigya-response.model';

export interface Token extends GigyaResponse {
  id_token?: string;
}
