import { KCA_ACTION_ENDPOINTS, KCA_READ_ENDPOINTS, KCM_ACTION_ENDPOINTS } from './kamereon.constants';
import type { ActionEndpoint, ReadEndpoint, Version } from './models';

const KAMEREON_URL = 'https://api-wired-prod-1-euw1.wrd-aws.com' as const;
const KAMEREON_API_KEY = 'YjkKtHmGfaceeuExUDKGxrLZGGvtVS0J' as const;

const COMMERCE_URL = `${KAMEREON_URL}/commerce/v1` as const;
const ACCOUNT_URL = (accountId: string) => `${COMMERCE_URL}/accounts/${accountId}` as const;

const CAR_KCA_ADAPTER_URL = <V extends Version['version']>(accountId: string, vin: string, version: V) => `${ACCOUNT_URL(accountId)}/kamereon/kca/car-adapter/v${version}/cars/${vin}` as const;
const CAR_KCM_ADAPTER_URL = <V extends Version['version']>(accountId: string, vin: string, version: V) => `${ACCOUNT_URL(accountId)}/kamereon/kcm/v${version}/vehicles/${vin}` as const;

const PERSON_URL = (personId: string) => `${COMMERCE_URL}/persons/${personId}` as const;
const ACCOUNT_VEHICLES_URL = (accountId: string) => `${ACCOUNT_URL(accountId)}/vehicles` as const;
const VEHICLE_CONTRACTS_URL = (accountId: string, vin: string) => `${ACCOUNT_URL(accountId)}/vehicles/${vin}/contracts` as const;
const VEHICLE_DETAILS_URL = (accountId: string, vin: string) => `${ACCOUNT_URL(accountId)}/vehicles/${vin}/details` as const;

const READ_VEHICLE_KCA_DATA_URL = <V extends Version['version'], E extends ReadEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCA_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const;

const READ_ADAPTER_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS[''].version, '');
const READ_BATTERY_INHIBITION_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['battery-inhibition-status'].version, 'battery-inhibition-status');
const READ_BATTERY_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['battery-status'].version, 'battery-status');
const READ_CHARGE_HISTORY_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-history'].version, 'charge-history');
const READ_CHARGE_MODE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-mode'].version, 'charge-mode');
const READ_CHARGE_SCHEDULE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-schedule'].version, 'charge-schedule');
const READ_CHARGES_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charges'].version, 'charges');
const READ_CHARGING_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charging-settings'].version, 'charging-settings');
const READ_COCKPIT_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['cockpit'].version, 'cockpit');
const READ_HVAC_HISTORY_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-history'].version, 'hvac-history');
const READ_HVAC_SESSIONS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-sessions'].version, 'hvac-sessions');
const READ_HVAC_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-settings'].version, 'hvac-settings');
const READ_HVAC_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['hvac-status'].version, 'hvac-status');
const READ_LOCATION_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['location'].version, 'location');
const READ_LOCK_STATUS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['lock-status'].version, 'lock-status');
const READ_NOTIFICATION_SETTINGS_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['notification-settings'].version, 'notification-settings');
const READ_RES_STATE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['res-state'].version, 'res-state');
const READ_PRESSURE_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['pressure'].version, 'pressure');

const PERFORM_VEHICLE_KCA_ACTION_URL = <V extends Version['version'], E extends ActionEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCA_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const;
const PERFORM_VEHICLE_KCM_ACTION_URL = <V extends Version['version'], E extends ActionEndpoint>(accountId: string, vin: string, version: V, endpoint: E) => `${CAR_KCM_ADAPTER_URL<V>(accountId, vin, version)}/${endpoint}` as const;

const PERFORM_CHARGE_MODE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charge-mode'].version, 'actions/charge-mode');
const PERFORM_CHARGE_SCHEDULE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charge-schedule'].version, 'actions/charge-schedule');
const PERFORM_CHARGING_START_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/charging-start'].version, 'actions/charging-start');
const PERFORM_HVAC_SCHEDULE_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/hvac-schedule'].version, 'actions/hvac-schedule');
const PERFORM_HVAC_START_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/hvac-start'].version, 'actions/hvac-start');
const PERFORM_PAUSE_RESUME_URL = (accountId: string, vin: string) => PERFORM_VEHICLE_KCM_ACTION_URL(accountId, vin, KCM_ACTION_ENDPOINTS['charge/pause-resume'].version, 'charge/pause-resume');

const PERFORM_REFRESH_BATTERY_STATUS = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/refresh-battery-status'].version, 'actions/refresh-battery-status');
const PERFORM_REFRESH_HVAC_STATUS = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/refresh-hvac-status'].version, 'actions/refresh-hvac-status');
const PERFORM_REFRESH_LOCATION = (accountId: string, vin: string) => PERFORM_VEHICLE_KCA_ACTION_URL(accountId, vin, KCA_ACTION_ENDPOINTS['actions/refresh-location'].version, 'actions/refresh-location');

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
   * __Description__: Get info of an authenticated person. Required to retrieve `accountId` (from Person.Accounts[n].accountId).
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: Person
   * @see Person
   */
  PERSON_URL,

  /**
   * __Description__: Get vehicles by `accountId`.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: Vehicles
   * @see Vehicles
   */
  ACCOUNT_VEHICLES_URL,

  /**
   * __Description__: Get vehicle contracts by vin.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   * - `local`: <locale code> (ex. "fr_FR")
   * - `brand`: "RENAULT"
   * - `connectedServicesContracts`: "true"
   * - `warranty`: "true"
   * - `warrantyMaintenanceContracts`: "true"
   *
   * __Response Model__: VehicleContract[]
   * @see VehicleContract
   */
  VEHICLE_CONTRACTS_URL,

  /**
   * __Description__: Get vehicle details info by vin.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: VehicleDetails
   * @see VehicleDetails
   */
  VEHICLE_DETAILS_URL,

  /**
   * __Description__: Get vehicle adapter info.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: AdapterInfo
   * @see AdapterInfo
   * @deprecated Does not work anymore.
   */
  READ_ADAPTER_URL,

  /**
   * __Description__: Get vehicle battery status.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: BatteryStatus
   * @see BatteryStatus
   */
  READ_BATTERY_INHIBITION_STATUS_URL,

  /**
   * __Description__: Get vehicle battery status.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: BatteryStatus
   * @see BatteryStatus
   */
  READ_BATTERY_STATUS_URL,

  /**
   * __Description__: Get vehicle charge history.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   * - `type`: "day" | "month"
   * - `start`: <date> (format YYYYMMDD)
   * - `end`: <date> (format YYYYMMDD)
   *
   * __Response Model__: ChargeHistory
   * @see ChargeHistory
   */
  READ_CHARGE_HISTORY_URL,

  /**
   * __Description__: Get vehicle current charge mode.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: ChargeMode
   * @see ChargeMode
   */
  READ_CHARGE_MODE_URL,

  /**
   * __Description__: Get vehicle charge schedule.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: ChargeSchedule
   * @see ChargeSchedule
   */
  READ_CHARGE_SCHEDULE_URL,
  /**
   * __Description__: Get vehicle charges.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   * - `start`: <date> (format YYYYMMDD)
   * - `end`: <date> (format YYYYMMDD)
   *
   * __Response Model__: Charges
   * @see Charges
   */
  READ_CHARGES_URL,

  /**
   * __Description__: Get vehicle current charging settings.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: ChargingSettings
   * @see ChargingSettings
   */
  READ_CHARGING_SETTINGS_URL,

  /**
   * __Description__: Get vehicle cockpit info.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__ : Cockpit
   * @see Cockpit
   */
  READ_COCKPIT_URL,

  /**
   * __Description__: Get vehicle hvac history.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   * - `type`: "day" | "month"
   * - `start`: <date> (format YYYYMMDD)
   * - `end`: <date> (format YYYYMMDD)
   *
   * __Response Model__ : HvacHistory
   * @see HvacHistory
   */
  READ_HVAC_HISTORY_URL,

  /**
   * __Description__: Get vehicle hvac sessions.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__ :
   * - `country`: <country code> (ex. "FR")
   * - `start`: <date> (format YYYYMMDD)
   * - `end`: <date> (format YYYYMMDD)
   *
   * __Response Model__ : HvacSessions
   * @see HvacSessions
   */
  READ_HVAC_SESSIONS_URL,

  /**
   * __Description__: Get vehicle current hvac status.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: HvacStatus
   * @see HvacStatus
   */
  READ_HVAC_STATUS_URL,

  /**
   * __Description__: Get vehicle hvac settings.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: HvacSettings
   * @see HvacSettings
   */
  READ_HVAC_SETTINGS_URL,

  /**
   * __Description__: Get vehicle's current location.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: VehicleLocation
   * @see VehicleLocation
   */
  READ_LOCATION_URL,

  /**
   * __Description__: Get vehicle current lock status. **Does not work for Megane E-Tech.**
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: LockStatus
   * @see LockStatus
   */
  READ_LOCK_STATUS_URL,

  /**
   * __Description__: Get vehicle notification settings.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: NotificationSettings
   * @see NotificationSettings
   */
  READ_NOTIFICATION_SETTINGS_URL,

  /**
   * __Description__: Get vehicle res state.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: ResState
   * @see ResState
   */
  READ_RES_STATE_URL,

  /**
   * __Description__: Get vehicle pressure.
   *
   * __Method__: GET
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Response Model__: Pressure
   * @see Pressure
   */
  READ_PRESSURE_URL,

  /**
   * __Description__: Change vehicle charge mode.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *   "data": {
   *      "type": "ChargeMode",
   *      "attributes": {
   *        "action": **("always_charging" | "schedule_mode")**
   *      }
   *   }
   * }
   *
   * __Response Model__: ActionChargeMode
   * @see ActionChargeMode
   */
  PERFORM_CHARGE_MODE_URL,

  /**
   * __Description__: Schedule vehicle charge.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *   "data": {
   *      "type": "ChargeSchedule",
   *      "attributes": {
   *        "schedules": {
   *          "activated": <boolean>;
   *          "monday": DaySchedule,
   *          "tuesday": DaySchedule,
   *          "wednesday": DaySchedule,
   *          "thursday": DaySchedule,
   *          "friday": DaySchedule,
   *          "saturday": DaySchedule,
   *          "sunday": DaySchedule
   *        }
   *      }
   *   }
   * }
   *
   * DaySchedule = {
   *   "startTime": <time> (format THH:MMZ),
   *   "duration": <minutes>
   * }
   *
   * __Response Model__: ActionChargeSchedule
   * @see ActionChargeSchedule
   */
  PERFORM_CHARGE_SCHEDULE_URL,

  /**
   * __Description__: Start or stop a vehicle charge.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *    "data": {
   *      "type": "ChargingStart",
   *      "attributes": {
   *        "action": **("start" | "stop")**
   *      }
   *    }
   * }
   *
   * __Response Model__: ActionChargingStart
   * @see ActionChargingStart
   */
  PERFORM_CHARGING_START_URL,

  /**
   * __Description__: Schedule vehicle hvac.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *   "data": {
   *     "type": "HvacSchedule",
   *      "attributes": {
   *        "schedules": {
   *          "activated": **<boolean>**;
   *          "monday": HvacDaySchedule,
   *          "tuesday": HvacDaySchedule,
   *          "wednesday": HvacDaySchedule,
   *          "thursday": HvacDaySchedule,
   *          "friday": HvacDaySchedule,
   *          "saturday": HvacDaySchedule,
   *          "sunday": HvacDaySchedule
   *        }
   *      }
   *   }
   * }
   *
   * HvacDaySchedule: { "readyAtTime": **<date>** }
   *
   * __Response Model__: ActionHvacSchedule
   * @see ActionHvacSchedule
   */
  PERFORM_HVAC_SCHEDULE_URL,

  /**
   * __Description__: Start or stop vehicle hvac.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *   "data": {
   *     "type": "HvacStart",
   *      "attributes": {
   *        "action": "start",
   *        "targetTemperature": **<number>**,
   *        "startDateTime"?: **<date> (format ISO)**
   *      }
   *   }
   * }
   *
   * OR
   *
   * {
   *   "data": {
   *     "type": "HvacStart",
   *      "attributes": {
   *        "action": "cancel"
   *      }
   *   }
   * }
   *
   * __Response Model__: ActionHvacStart
   * @see ActionHvacStart
   */
  PERFORM_HVAC_START_URL,

  /**
   * __Description__: Start or stop vehicle charge (Dacia Spring ONLY).
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *    "data": {
   *      "type": "ChargePauseResume",
   *      "attributes": {
   *        "action": **("resume" | "pause")**
   *      }
   *    }
   * }
   *
   * __Response Model__: ActionPauseResume
   * @see ActionPauseResume
   */
  PERFORM_PAUSE_RESUME_URL,

  /**
   * __Description__: Refresh vehicle battery status.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *    "data": {
   *      "type": "RefreshBatteryStatus"
   *    }
   * }
   *
   * __Response Model__: ActionRefreshBatteryStatus
   * @see ActionRefreshBatteryStatus
   */
  PERFORM_REFRESH_BATTERY_STATUS,

  /**
   * __Description__: Refresh vehicle hvac status.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *    "data": {
   *      "type": "RefreshHvacStatus"
   *    }
   * }
   *
   * __Response Model__: ActionRefreshHvacStatus
   * @see ActionRefreshHvacStatus
   */
  PERFORM_REFRESH_HVAC_STATUS,

  /**
   * __Description__: Refresh vehicle location.
   *
   * __Method__: POST
   *
   * __Headers__:
   * - `apikey`: KamereonApi.KEY
   * - `x-gigya-id_token`: <token> (from Gigya.getJWT API)
   * - `content-type`: "application/vnd.api+json"
   *
   * __Params__:
   * - `country`: <country code> (ex. "FR")
   *
   * __Body__ :
   * {
   *    "data": {
   *      "type": "RefreshLocation"
   *    }
   * }
   *
   * __Response Model__: ActionRefreshLocation
   * @see ActionRefreshLocation
   */
  PERFORM_REFRESH_LOCATION,
};
