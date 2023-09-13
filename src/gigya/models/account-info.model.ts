import type { DateType } from '../../shared.model';
import type { GigyaResponse } from './gigya-response.model';

export interface AccountInfo extends GigyaResponse {
  registeredTimestamp?: number;
  UID?: string;
  UIDSignature?: string;
  signatureTimestamp?: string;
  created?: DateType;
  createdTimestamp?: number;
  data?: Data;
  preferences?: Preferences;
  emails?: Emails;
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
  password?: Password;
  profile?: Profile;
  registered?: DateType;
  socialProviders?: string;
  verified?: DateType;
  verifiedTimestamp?: number;
}

interface Data {
  migrationCode?: string;
  gigyaImportJobID?: string;
  personId?: string;
  gigyaDataCenter?: string;
  migrationExternalId?: string;
}

interface Emails {
  verified?: string[];
  unverified?: any[];
}

interface Password {
  created?: DateType;
}

interface Preferences {
}

interface Profile {
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: string;
}
