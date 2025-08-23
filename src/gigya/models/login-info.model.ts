import type { GigyaAuthResponse } from './gigya-response.model';

export interface LoginInfoResponse extends GigyaAuthResponse {
  newUser: boolean;
  sessionInfo: SessionInfo;
}

export interface SessionInfo {
  cookieName: string;
  cookieValue: string;
}
