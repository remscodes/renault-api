import type { DateISO } from '../../common.model';

export interface Person {
  personId: string;
  type: string;
  context: string;
  country: string;
  civility: string;
  firstName: string;
  firstName2: string;
  lastName: string;
  lastName2: string;
  dateOfBirth: DateISO;
  idp: Idp;
  preferredDealers: PreferredDealer[];
  addresses: Address[];
  emails: Email[];
  phones: Phone[];
  stopCommunications: StopCommunication[];
  myrRequest: boolean;
  accounts: Account[];
  purposes: Purpose[];
  partyId: string;
  mdmId: string;
  migrationCode: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
  locale: string;
  agreements: Agreement[];
  parentPersonsLinks: unknown[];
  childPersonsLinks: unknown[];
  trackingId: string;
}

export interface Idp {
  idpId: string;
  idpType: string;
  idpStatus: string;
  login: string;
  loginType: string;
  lastLoginDate: DateISO;
  termsConditionAcceptance: boolean;
  termsConditionLastAcceptanceDate: DateISO;
  termsConditionLastModificationDate: DateISO;
}

export interface PreferredDealer {
  brand: string;
  dealerId: string;
  dealerName: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
}

export interface Account {
  accountId: string;
  accountType: string;
  accountStatus: string;
  country: string;
  personId: string;
  relationType: string;
  externalId: string;
}

export interface Address {
  addressType: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  city: string;
  postalCode: string;
  country: string;
  qualityCode: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
}

export interface Agreement {
  agreementType: string;
  agreementValue: boolean;
  createdDate: null;
  lastModifiedDate: null;
  functionalModificationDate: DateISO;
}

export interface Email {
  emailType: string;
  emailValue: string;
  validityFlag: boolean;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
}

export interface Phone {
  phoneType: string;
  phoneValue: string;
  areaCode: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
}

export interface Purpose {
  purposeId: string;
  country: string;
  purposeType: string;
  purposeStartDate: DateISO;
  purposeEndDate: DateISO;
  forceEndDate: boolean;
  consents: Consent[];
  createdDate: DateISO;
  lastModifiedDate: DateISO;
}

export interface Consent {
  consentId: string;
  scopeType: string;
  agreements: ConsentAgreement[];
  createdDate: DateISO;
  lastModifiedDate: DateISO;
}

export interface ConsentAgreement {
  type: string;
  value: string;
  displayValue: string;
  lastUpdateSourceType: string;
  lastUpdateSubSourceType: string;
  proof: string;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalModificationDate: DateISO;
}

export interface StopCommunication {
  stopCommunicationType: string;
  stopCommunicationValue: boolean;
  createdDate: DateISO;
  lastModifiedDate: DateISO;
  functionalCreationDate: DateISO;
  functionalModificationDate: DateISO;
}
