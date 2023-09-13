import type { DateType } from '../../shared.model';
import type { GigyaResponse } from './gigya-response.model';

export interface LoginInfo extends GigyaResponse {
  registeredTimestamp?: number;
  UID?: string;
  UIDSignature?: string;
  signatureTimestamp?: number;
  created?: DateType;
  createdTimestamp?: number;
  isActive?: boolean;
  isRegistered?: boolean;
  isVerified?: boolean;
  lastLogin?: DateType;
  lastLoginTimestamp?: number;
  lastUpdated?: DateType;
  lastUpdatedTimestamp?: number;
  loginProvider?: string;
  oldestDataUpdated?: DateType;
  oldestDataUpdatedTimestamp?: number;
  profile?: Profile;
  registered?: DateType;
  socialProviders?: string;
  verified?: DateType;
  verifiedTimestamp?: number;
  newUser?: boolean;
  sessionInfo?: SessionInfo;
}

interface Profile {
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: string;
}

interface SessionInfo {
  cookieName?: string;
  cookieValue?: string;
}
