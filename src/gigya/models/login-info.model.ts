import type { GigyaAuthResponse, GigyaResponse } from './gigya-response.model';

export interface LoginInfo extends GigyaResponse, GigyaAuthResponse {
  newUser?: boolean;
  sessionInfo?: SessionInfo;
}

interface SessionInfo {
  cookieName?: string;
  cookieValue?: string;
}
