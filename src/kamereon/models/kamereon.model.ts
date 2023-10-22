import type { Prefix } from '../../shared.model';

type KcaEndpoint =
  | ''
  | 'battery-status'
  | 'battery-inhibition-status'
  | 'charge-history'
  | 'charge-mode'
  | 'charge-schedule'
  | 'charges'
  | 'charging-settings'
  | 'cockpit'
  | 'hvac-history'
  | 'hvac-sessions'
  | 'hvac-settings'
  | 'hvac-status'
  | 'location'
  | 'lock-status'
  | 'notification-settings'
  | 'res-state'

export type ReadEndpoint = KcaEndpoint;

/* ------- */

type KcaAction =
  | 'charge-mode'
  | 'charge-schedule'
  | 'charging-start'
  | 'hvac-schedule'
  | 'hvac-start'
  | 'refresh-battery-status'
  | 'refresh-hvac-status'
  | 'refresh-location'
  | 'send-navigation'

export type KcaActionEndpoint = Prefix<KcaAction, 'actions/'>

/* ------- */

type KcmAction =
  | 'pause-resume'

export type KcmActionEndpoint = Prefix<KcmAction, 'charge/'>

/* ------- */

// Use when Header has not 'Accept'='application/json'
export interface DataResponse<A, T = 'Car'> {
  data: Data<A, T>;
}

interface Data<A, T> {
  type?: T;
  id?: Vin;
  attributes?: A;
}

/* ------- */

export type ActionEndpoint =
  | KcaActionEndpoint
  | KcmActionEndpoint

export interface Action extends Version {
  type: ActionType;
}

type ActionType =
  | KcaActionType
  | KcmActionType

type KcaActionType =
  | 'ChargeMode'
  | 'ChargeSchedule'
  | 'ChargingStart'
  | 'HvacSchedule'
  | 'HvacStart'
  | 'RefreshBatteryStatus'
  | 'RefreshHvacStatus'
  | 'RefreshLocation'
  | 'SendNavigation'

type KcmActionType =
  | 'ChargePauseResume'

/* ------- */

export interface Version {
  version: 1 | 2;
}

/* ------- */

export type Vin = string
