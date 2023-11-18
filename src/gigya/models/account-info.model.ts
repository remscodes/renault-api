import type { DateType } from '../../shared.model';
import type { GigyaAuthResponse } from './gigya-response.model';

/**
 * Response model of Gigya Account API.
 */
export interface AccountInfo extends GigyaAuthResponse {
  data?: AccountData;
  preferences?: AccountPreferences;
  emails?: AccountEmails;
  password?: AccountPassword;
}

export interface AccountData {
  migrationCode?: string;
  gigyaImportJobID?: string;
  personId?: string;
  gigyaDataCenter?: string;
  migrationExternalId?: string;
}

export interface AccountEmails {
  verified?: string[];
  unverified?: any[];
}

export interface AccountPassword {
  created?: DateType;
}

export interface AccountPreferences {}
