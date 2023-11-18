import type { DateType } from '../../shared.model';

/**
 * Response model for Kamereon Person API.
 */
export interface Person {
  personId?: string;
  type?: string;
  context?: string;
  country?: string;
  civility?: string;
  firstName?: string;
  firstName2?: string;
  lastName?: string;
  lastName2?: string;
  dateOfBirth?: DateType;
  idp?: Idp;
  preferredDealers?: PreferredDealer[];
  addresses?: Address[];
  emails?: Email[];
  phones?: Phone[];
  stopCommunications?: StopCommunication[];
  myrRequest?: boolean;
  accounts?: Account[];
  purposes?: Purpose[];
  partyId?: string;
  mdmId?: string;
  migrationCode?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
  locale?: string;
  agreements?: Agreement[];
  parentPersonsLinks?: unknown[];
  childPersonsLinks?: unknown[];
  trackingId?: string;
}

export interface Idp {
  idpId?: string;
  idpType?: string;
  idpStatus?: string;
  login?: string;
  loginType?: string;
  lastLoginDate?: DateType;
  termsConditionAcceptance?: boolean;
  termsConditionLastAcceptanceDate?: DateType;
  termsConditionLastModificationDate?: DateType;
}

export interface PreferredDealer {
  brand?: string;
  dealerId?: string;
  dealerName?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
}

export interface Account {
  accountId?: string;
  accountType?: string;
  accountStatus?: string;
  country?: string;
  personId?: string;
  relationType?: string;
  externalId?: string;
}

export interface Address {
  addressType?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  qualityCode?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
}

export interface Agreement {
  agreementType?: string;
  agreementValue?: boolean;
  createdDate?: null;
  lastModifiedDate?: null;
  functionalModificationDate?: DateType;
}

export interface Email {
  emailType?: string;
  emailValue?: string;
  validityFlag?: boolean;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
}

export interface Phone {
  phoneType?: string;
  phoneValue?: string;
  areaCode?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
}

export interface Purpose {
  purposeId?: string;
  country?: string;
  purposeType?: string;
  purposeStartDate?: DateType;
  purposeEndDate?: DateType;
  forceEndDate?: boolean;
  consents?: Consent[];
  createdDate?: DateType;
  lastModifiedDate?: DateType;
}

export interface Consent {
  consentId?: string;
  scopeType?: string;
  agreements?: ConsentAgreement[];
  createdDate?: DateType;
  lastModifiedDate?: DateType;
}

export interface ConsentAgreement {
  type?: string;
  value?: string;
  displayValue?: string;
  lastUpdateSourceType?: string;
  lastUpdateSubSourceType?: string;
  proof?: string;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalModificationDate?: DateType;
}

export interface StopCommunication {
  stopCommunicationType?: string;
  stopCommunicationValue?: boolean;
  createdDate?: DateType;
  lastModifiedDate?: DateType;
  functionalCreationDate?: DateType;
  functionalModificationDate?: DateType;
}
