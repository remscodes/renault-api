import type { GigyaResponse } from './gigya-response.model';

/**
 * Response model of Gigya Logout API.
 */
export interface LogoutInfo extends GigyaResponse {
  connectedProviders?: string;
  UID?: string;
  logoutActiveSession?: boolean;
  samlContext?: string;
  connectedSamlSessions?: string;
}
