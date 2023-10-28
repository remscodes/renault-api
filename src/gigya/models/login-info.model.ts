import type { GigyaAuthResponse } from './gigya-response.model';

/**
 * Response model of Gigya Login API.
 */
export interface LoginInfo extends GigyaAuthResponse {
  newUser?: boolean;
  sessionInfo?: SessionInfo;
}

interface SessionInfo {
  cookieName?: string;
  cookieValue?: string;
}
