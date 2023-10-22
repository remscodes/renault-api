import type { GigyaResponse } from './gigya-response.model';

export interface LogoutInfo extends GigyaResponse {
  connectedProviders?: string;
  UID?: string;
  logoutActiveSession?: boolean;
  samlContext?: string;
  connectedSamlSessions?: string;
}
