const GIGYA_URL = 'https://accounts.eu1.gigya.com' as const;
const GIGYA_API_KEY = '3_4LKbCcMMcvjDm3X89LU4z4mNKYKdl_W0oD9w-Jvih21WqgJKtFZAnb9YdUgWT9_a' as const;

const ACCOUNTS_URL = `${GIGYA_URL}/accounts` as const;

const LOGIN_URL = `${ACCOUNTS_URL}.login` as const;
const GET_ACCOUNT_INFO_URL = `${ACCOUNTS_URL}.getAccountInfo` as const;
const GET_JWT_URL = `${ACCOUNTS_URL}.getJWT` as const;
const GET_JWT_PUBLIC_KEY_URL = `${ACCOUNTS_URL}.getJWTPublicKey` as const;
const LOGOUT_URL = `${ACCOUNTS_URL}.logout` as const;

/**
 * Gigya API for authentication
 */
export const GigyaApi = {
  /**
   * Gigya API KEY.
   *
   * For every request, put it as a value for the param set "apikey".
   */
  KEY: GIGYA_API_KEY,
  /**
   * __Description__: Login to Gigya service. Required to retrieve `login_token` (from LoginInfo.sessionInfo.cookieValue).
   *
   * __Method__: POST
   *
   * __Params__:
   * - `apikey`: GigyaApi.KEY
   * - `loginID`: <login>
   * - `password`: <password>
   *
   * __Response Model__: LoginInfoResponse
   * @see LoginInfoResponse
   */
  LOGIN_URL,

  /**
   * __Description__: Get account info. Required to retrieve `personId`.
   *
   * __Method__: POST
   *
   * __Params__:
   * - `apikey`: GigyaApi.KEY
   * - `login_token`: <token> (from Login API)
   *
   * __Response Model__: AccountInfoResponse
   * (`personId` stored in AccountInfoResponse.data.personId)
   * @see AccountInfoResponse
   */
  GET_ACCOUNT_INFO_URL,

  /**
   * __Description__: Get JWT. Required to retrieve `id_token` to use Kamereon API.
   *
   * __Method__: POST
   *
   * __Params__:
   * - `apikey`: GigyaApi.KEY
   * - `login_token`: <token> (from Login API)
   * - `fields`: "data.personId,data.gigyaDataCenter"
   * - `expiration`: <ms> (expiration of the JWT)
   *
   * __Response Model__: TokenInfoResponse
   * @see TokenInfoResponse
   */
  GET_JWT_URL,

  /**
   * __Description__: Get the public key to validate the Gigya JWT.
   *
   * __Method__: POST
   *
   * __Params__:
   * - `apikey`: GigyaApi.KEY
   * - `login_token`: <token> (from Login API)
   *
   * __Response Model__: TokenPublicInfoResponse
   * @see TokenPublicInfoResponse
   */
  GET_JWT_PUBLIC_KEY_URL,

  /**
   * __Description__: Logout from Gigya service.
   *
   * __Method__: POST
   *
   * __Params__:
   * - `apikey`: GigyaApi.KEY
   * - `login_token`: <token> (from Login API)
   *
   * __Response Model__: LogoutInfoResponse
   * @see LogoutInfoResponse
   */
  LOGOUT_URL,
};
