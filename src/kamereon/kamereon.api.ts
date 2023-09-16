import { KCA_ACTION_ENDPOINTS, KCA_READ_ENDPOINTS, KCM_ACTION_ENDPOINTS } from './kamereon.constants';
import type { ActionEndpoint, ReadEndpoint, Version } from './models/kamereon.model';

const KAMEREON_URL = 'https://api-wired-prod-1-euw1.wrd-aws.com' as const satisfies string;
const KAMEREON_API_KEY = 'YjkKtHmGfaceeuExUDKGxrLZGGvtVS0J' as const satisfies string;

const COMMERCE_URL = `${KAMEREON_URL}/commerce/v1` as const satisfies string;
const ACCOUNT_URL = (accountId: string) => `${COMMERCE_URL}/accounts/${accountId}` as const satisfies string;

const CAR_KCA_ADAPTER_URL = <V extends Version['version']>(accountId: string, vin: string, version: V) => `${ACCOUNT_URL(accountId)}/kamereon/kca/car-adapter/v${version}/cars/${vin}` as const satisfies string;
const CAR_KCM_ADAPTER_URL = <V extends Version['version']>(accountId: string, vin: string, version: V) => `${ACCOUNT_URL(accountId)}/kamereon/kcm/v${version}/vehicles/${vin}` as const satisfies string;

const PERSON_URL = (personId: string) => `${COMMERCE_URL}/persons/${personId}` as const satisfies string;
const ACCOUNT_VEHICLES_URL = (accountId: string) => `${ACCOUNT_URL(accountId)}/vehicles` as const satisfies string;
const VEHICLE_CONTRACTS_URL = (accountId: string, vin: string) => `${ACCOUNT_URL(accountId)}/vehicles/${vin}/contracts` as const satisfies string;
const VEHICLE_DETAILS_URL = (accountId: string, vin: string) => `${ACCOUNT_URL(accountId)}/vehicles/${vin}/details` as const satisfies string;

const READ_VEHICLE_KCA_DATA_URL = <V extends Version['version'], E extends ReadEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCA_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const satisfies string;

const READ_ADAPTER_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS[''].version, '');
const READ_BATTERY_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['battery-status'].version, 'battery-status');
const READ_CHARGE_HISTORY_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-history'].version, 'charge-history');
const READ_CHARGE_MODE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-mode'].version, 'charge-mode');
const READ_CHARGES_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charges'].version, 'charges');
const READ_CHARGING_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charging-settings'].version, 'charging-settings');
const READ_COCKPIT_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['cockpit'].version, 'cockpit');
const READ_HVAC_HISTORY_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-history'].version, 'hvac-history');
const READ_HVAC_SESSIONS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-sessions'].version, 'hvac-sessions');
const READ_HVAC_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-status'].version, 'hvac-status');
const READ_HVAC_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-settings'].version, 'hvac-settings');
const READ_LOCATION_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['location'].version, 'location');
const READ_LOCK_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['lock-status'].version, 'lock-status');
const READ_NOTIFICATION_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['notification-settings'].version, 'notification-settings');
const READ_RES_STATE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['res-state'].version, 'res-state');

const PERFORM_VEHICLE_KCA_ACTION_URL = <V extends Version['version'], E extends ActionEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCA_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const satisfies string;
const PERFORM_VEHICLE_KCM_ACTION_URL = <V extends Version['version'], E extends ActionEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCM_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const satisfies string;

const PERFORM_CHARGE_MODE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charge-mode'].version, 'actions/charge-mode');
const PERFORM_CHARGE_SCHEDULE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charge-schedule'].version, 'actions/charge-schedule');
const PERFORM_CHARGING_START_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charging-start'].version, 'actions/charging-start');
const PERFORM_HVAC_SCHEDULE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/hvac-schedule'].version, 'actions/hvac-schedule');
const PERFORM_HVAC_START_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/hvac-start'].version, 'actions/hvac-start');
const PERFORM_PAUSE_RESUME_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCM_ACTION_URL(accountId, vin, KCM_ACTION_ENDPOINTS['charge/pause-resume'].version, 'charge/pause-resume');

/**
 * Kamereon API to interact with the vehicle
 */
export const KamereonApi = {
  /**
   * Kamereon API KEY.
   *
   * For every request, put it as value for the header "apikey".
   */
  KEY: KAMEREON_API_KEY,
  /**
   * __Description__ : Get info of authenticated person. Required to retrieve **accountId**.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : Person
   * (**accountId** stored in Person.Accounts[i].accountId)
   */
  PERSON_URL,

  /**
   * __Description__ : Get vehicles by accountId.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : Vehicles
   */
  ACCOUNT_VEHICLES_URL,

  /**
   * __Description__ : Get vehicle contracts by vin.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   * - **local** : "fr_FR"
   * - **brand** : "RENAULT"
   * - **connectedServicesContracts** : "true"
   * - **warranty** : "true"
   * - **warrantyMaintenanceContracts** : "true"
   *
   * __Response Model__ : VehicleContract[]
   */
  VEHICLE_CONTRACTS_URL,

  /**
   * __Description__ : Get vehicle details info by vin.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : VehicleDetails
   */
  VEHICLE_DETAILS_URL,

  /**
   * __Description__ : Get vehicle adapter info.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : AdapterInfo
   */
  READ_ADAPTER_URL,

  /**
   * __Description__ : Get vehicle battery status.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : BatteryStatus
   */
  READ_BATTERY_STATUS_URL,

  /**
   * __Description__ : Get vehicle charge history.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   * - **type** : "day" | "month"
   * - **start**: (start date format YYYYMMDD)
   * - **end**: (end date format YYYYMMDD)
   *
   * __Response Model__ : ChargeHistory
   */
  READ_CHARGE_HISTORY_URL,

  /**
   * __Description__ : Get vehicle current charge mode.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : ChargeMode
   */
  READ_CHARGE_MODE_URL,

  /**
   * __Description__ : Get vehicle charges.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   * - **start**: (start date format YYYYMMDD)
   * - **end**: (end date format YYYYMMDD)
   *
   * __Response Model__ : Charges
   */
  READ_CHARGES_URL,

  /**
   * __Description__ : Get vehicle current charging settings.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : ChargingSettings
   */
  READ_CHARGING_SETTINGS_URL,

  /**
   * __Description__ : Get vehicle cockpit info.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : Cockpit
   */
  READ_COCKPIT_URL,

  /**
   * __Description__ : Get vehicle hvac history.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   * - **type** : "day" | "month"
   * - **start**: (start date format YYYYMMDD)
   * - **end**: (end date format YYYYMMDD)
   *
   * __Response Model__ : HvacHistory
   */
  READ_HVAC_HISTORY_URL,

  /**
   * __Description__ : Get vehicle hvac sessions.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   * - **start**: (start date format YYYYMMDD)
   * - **end**: (end date format YYYYMMDD)
   *
   * __Response Model__ : HvacSessions
   */
  READ_HVAC_SESSIONS_URL,

  /**
   * __Description__ : Get vehicle current hvac status.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : HvacStatus
   */
  READ_HVAC_STATUS_URL,

  /**
   * __Description__ : Get vehicle hvac settings.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : HvacSettings
   */
  READ_HVAC_SETTINGS_URL,

  /**
   * __Description__ : Get vehicle current location.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : VehicleLocation
   */
  READ_LOCATION_URL,

  /**
   * __Description__ : Get vehicle current lock status.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : LockStatus
   *
   * __\/!\\__ Not work for Megane E-Tech __\/!\\__
   */
  READ_LOCK_STATUS_URL,

  /**
   * __Description__ : Get vehicle notification settings.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : NotificationSettings
   */
  READ_NOTIFICATION_SETTINGS_URL,

  /**
   * __Description__ : Get vehicle res state.
   *
   * __Method__ : GET
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Response Model__ : ResState
   */
  READ_RES_STATE_URL,

  /**
   * __Description__ : Change vehicle charge mode.
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *    "type": "ChargeMode",
   *    "attributes": {
   *        "action": **("always" | "always_charging" | "schedule_mode")**
   *    }
   * }
   */
  PERFORM_CHARGE_MODE_URL,

  /**
   * __Description__ : Schedule vehicle charge.
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *   "type": "ChargeSchedule",
   *   "attributes": {
   *      "schedules": {
   *        "activated": **(boolean)**;
   *        "monday": DaySchedule,
   *        "tuesday": DaySchedule,
   *        "wednesday": DaySchedule,
   *        "thursday": DaySchedule,
   *        "friday": DaySchedule,
   *        "saturday": DaySchedule,
   *        "sunday": DaySchedule
   *      }
   *   }
   * }
   *
   * DaySchedule = {
   *   "startTime": **(time format THH:MMZ)**,
   *   "duration": **(minutes as number)**
   * }
   */
  PERFORM_CHARGE_SCHEDULE_URL,

  /**
   * __Description__ : Start or stop vehicle charge.
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *    "type": "ChargingStart",
   *    "attributes": {
   *        "action": **("start" | "stop")**
   *    }
   * }
   */
  PERFORM_CHARGING_START_URL,

  /**
   * __Description__ : Schedule vehicle hvac.
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *   "type": "HvacSchedule",
   *   "attributes": {
   *      "schedules": {
   *        "activated": **(boolean)**;
   *        "monday": HvacDaySchedule,
   *        "tuesday": HvacDaySchedule,
   *        "wednesday": HvacDaySchedule,
   *        "thursday": HvacDaySchedule,
   *        "friday": HvacDaySchedule,
   *        "saturday": HvacDaySchedule,
   *        "sunday": HvacDaySchedule
   *      }
   *   }
   * }
   *
   * HvacDaySchedule : { "readyAtTime": **(date)** }
   */
  PERFORM_HVAC_SCHEDULE_URL,

  /**
   * __Description__ : Start or stop vehicle hvac.
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *   "type": "HvacStart",
   *   "attributes": {
   *      "action": "start",
   *      "targetTemperature": **(temperature as number)**,
   *      "startDateTime"?: **(date format YYYY-MM-DDTHH:mm:ssZ)**
   *   }
   * }
   *
   * OR
   *
   * {
   *   "type": "HvacStart",
   *   "attributes": {
   *      "action": "cancel"
   *   }
   * }
   */
  PERFORM_HVAC_START_URL,

  /**
   * __Description__ : Start or stop vehicle charge (Dacia Spring ONLY).
   *
   * __Method__ : POST
   *
   * __Headers__ :
   * - **apikey** : KamereonApi.KEY
   * - **x-gigya-id_token** : (token retrieved with Gigya getJWT API)
   * - **Accept** : "application/json"
   * - **Content-Type** : "application/vnd.api+json"
   *
   * __Params__ :
   * - **country** : "FR"
   *
   * __Body__ :
   * {
   *    "type": "ChargePauseResume",
   *    "attributes": {
   *        "action": **("resume" | "pause")**
   *    }
   * }
   */
  PERFORM_PAUSE_RESUME_URL
};
