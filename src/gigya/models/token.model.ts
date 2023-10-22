import type { GigyaResponse } from './gigya-response.model';

export interface Token extends GigyaResponse {
  id_token?: string;
}

export interface TokenPublicKey extends GigyaResponse {
  alg?: string;
  kid?: string;
  kty?: string;
  n?: string;
  e?: string;
  use?: string;
}
