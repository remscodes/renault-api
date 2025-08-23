import type { GigyaResponse } from './gigya-response.model';

export interface TokenInfoResponse extends GigyaResponse {
  id_token: string;
}

export interface TokenPublicInfoResponse extends GigyaResponse {
  alg: string;
  kid: string;
  kty: string;
  n: string;
  e: string;
  use: string;
}
