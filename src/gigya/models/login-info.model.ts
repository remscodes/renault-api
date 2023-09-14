import type { GigyaAuthResponse } from './gigya-response.model';

export interface LoginInfo extends GigyaAuthResponse {
  newUser?: boolean;
  sessionInfo?: SessionInfo;
}

interface SessionInfo {
  cookieName?: string;
  cookieValue?: string;
}
