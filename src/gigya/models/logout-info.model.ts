import type { GigyaResponse } from './gigya-response.model';

export interface LogoutInfoResponse extends GigyaResponse {
  connectedProviders: string;
  UID: string;
  logoutActiveSession: boolean;
  samlContext: string;
  connectedSamlSessions: string;
}
