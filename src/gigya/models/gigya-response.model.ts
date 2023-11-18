import type { DateType } from '../../shared.model';

/**
 * Common response model of Gigya API.
 */
export interface GigyaResponse {
  callId?: string;
  errorCode?: number;
  apiVersion?: number;
  statusCode?: number;
  statusReason?: string;
  time?: DateType;
}

/**
 * Common error response model of Gigya API.
 */
export interface GigyaErrorResponse extends GigyaResponse {
  errorDetails?: string;
  errorMessage?: string;
}

/**
 * Common response model of Gigya Login and Account API.
 */
export interface GigyaAuthResponse extends GigyaResponse {
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
}

export interface Profile {
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: string;
}
