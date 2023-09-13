import { KCA_ACTION_ENDPOINTS, KCA_READ_ENDPOINTS, KCM_ACTION_ENDPOINTS } from './kamereon.constants';
import type { ActionEndpoint, ReadEndpoint, Version } from './models/kamereon.model';

const KAMEREON_URL = 'https://api-wired-prod-1-euw1.wrd-aws.com';

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
const READ_CHARGES_HISTORY_URL = (accountId: string, vin: string) => READ_VEHICLE_KCA_DATA_URL(accountId, vin, KCA_READ_ENDPOINTS['charge-history'].version, 'charge-history');
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

export const KamereonAPI = {
  COMMERCE_URL,
  ACCOUNT_URL,
  PERSON_URL,

  ACCOUNT_VEHICLES_URL,
  VEHICLE_CONTRACTS_URL,
  VEHICLE_DETAILS_URL,

  READ_ADAPTER_URL,
  READ_BATTERY_STATUS_URL,
  READ_CHARGES_HISTORY_URL,
  READ_CHARGE_MODE_URL,
  READ_CHARGES_URL,
  READ_CHARGING_SETTINGS_URL,
  READ_COCKPIT_URL,
  READ_HVAC_HISTORY_URL,
  READ_HVAC_SESSIONS_URL,
  READ_HVAC_STATUS_URL,
  READ_HVAC_SETTINGS_URL,
  READ_LOCATION_URL,
  READ_LOCK_STATUS_URL,
  READ_NOTIFICATION_SETTINGS_URL,
  READ_RES_STATE_URL,

  PERFORM_CHARGE_MODE_URL,
  PERFORM_CHARGE_SCHEDULE_URL,
  PERFORM_CHARGING_START_URL,
  PERFORM_HVAC_SCHEDULE_URL,
  PERFORM_HVAC_START_URL,
  PERFORM_PAUSE_RESUME_URL
};
