import type { GigyaResponse } from './gigya-response.model';

/**
 * Response model of Gigya Token API.
 */
export interface TokenInfo extends GigyaResponse {
  id_token?: string;
}

export interface TokenPublicInfo extends GigyaResponse {
  alg?: string;
  kid?: string;
  kty?: string;
  n?: string;
  e?: string;
  use?: string;
}
