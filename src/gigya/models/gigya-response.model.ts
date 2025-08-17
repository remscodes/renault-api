import type { DateISO } from '../../shared.model';

/**
 * Common response model of Gigya API.
 */
export interface GigyaResponse {
  callId: string;
  errorCode: number;
  apiVersion: number;
  statusCode: number;
  statusReason: string;
  time: DateISO;
}

/**
 * Common error response model of Gigya API.
 */
export interface GigyaErrorResponse extends GigyaResponse {
  errorDetails: string;
  errorMessage: string;
}

/**
 * Common response model of Gigya Login and Account API.
 */
export interface GigyaAuthResponse extends GigyaResponse {
  registeredTimestamp: number;
  UID: string;
  UIDSignature: string;
  signatureTimestamp: number;
  created: DateISO;
  createdTimestamp: number;
  isActive: boolean;
  isRegistered: boolean;
  isVerified: boolean;
  lastLogin: DateISO;
  lastLoginTimestamp: number;
  lastUpdated: DateISO;
  lastUpdatedTimestamp: number;
  loginProvider: string;
  oldestDataUpdated: DateISO;
  oldestDataUpdatedTimestamp: number;
  profile: Profile;
  registered: DateISO;
  socialProviders: string;
  verified: DateISO;
  verifiedTimestamp: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
}
