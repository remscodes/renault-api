const GIGYA_URL = 'https://accounts.eu1.gigya.com';

const ACCOUNTS_URL = `${GIGYA_URL}/accounts`;

const LOGIN_URL = `${ACCOUNTS_URL}.login` as const satisfies string;
const GET_ACCOUNT_INFO_URL = `${ACCOUNTS_URL}.getAccountInfo` as const satisfies string;
const GET_JWT_URL = `${ACCOUNTS_URL}.getJWT` as const satisfies string;

export const GigyaAPI = {
  LOGIN_URL,
  GET_ACCOUNT_INFO_URL,
  GET_JWT_URL
};
