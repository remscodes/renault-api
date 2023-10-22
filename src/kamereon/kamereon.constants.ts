import type { Action, KcaActionEndpoint, KcmActionEndpoint, Period, ReadEndpoint, Version } from './models';

export const KCA_READ_ENDPOINTS = {
  '': { version: 2 },
  'battery-inhibition-status': { version: 1 },
  'battery-status': { version: 2 },
  'charge-history': { version: 1 },
  'charge-mode': { version: 1 },
  'charge-schedule': { version: 1 },
  'charges': { version: 1 },
  'charging-settings': { version: 1 },
  'cockpit': { version: 2 },
  'hvac-history': { version: 1 },
  'hvac-sessions': { version: 1 },
  'hvac-settings': { version: 1 },
  'hvac-status': { version: 1 },
  'location': { version: 1 },
  'lock-status': { version: 1 },
  'notification-settings': { version: 1 },
  'res-state': { version: 1 }
} as const satisfies Record<ReadEndpoint, Version>;

export const KCA_ACTION_ENDPOINTS = {
  'actions/charge-mode': { version: 1, type: 'ChargeMode' },
  'actions/charge-schedule': { version: 2, type: 'ChargeSchedule' },
  'actions/charging-start': { version: 1, type: 'ChargingStart' },
  'actions/hvac-schedule': { version: 2, type: 'HvacSchedule' },
  'actions/hvac-start': { version: 1, type: 'HvacStart' },
  'actions/refresh-battery-status': { version: 1, type: 'RefreshBatteryStatus' },
  'actions/refresh-hvac-status': { version: 1, type: 'RefreshHvacStatus' },
  'actions/refresh-location': { version: 1, type: 'RefreshLocation' },
  'actions/send-navigation': { version: 1, type: 'SendNavigation' }
} as const satisfies Record<KcaActionEndpoint, Action>;

export const KCM_ACTION_ENDPOINTS = {
  'charge/pause-resume': { version: 1, type: 'ChargePauseResume' }
} as const satisfies Record<KcmActionEndpoint, Action>;

export const PERIOD_FORMATS = {
  day: 'YYYYMMDD',
  month: 'YYYYMM'
} as const satisfies Record<Period, string>;

export const PERIOD_TZ_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ' as const satisfies string;

export const IMAGE_ORIENTATION_KEY = {
  iso: 'mybrand_2',
  profile: 'mybrand_5'
} as const satisfies Record<Orientation, string>;

type Orientation =
  | 'iso'
  | 'profile'
