import type { Prefix, Uuid } from '../../common.model';

export type KcaEndpoint =
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
  | 'pressure'

export type ReadEndpoint = KcaEndpoint;

/* ------- */

export type KcaAction =
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

export interface DataResponse<A, T = 'Car'> {
  data: Data<A, T>;
}

export interface Data<A, T> {
  type: T;
  id: Vin | AccountId | Uuid;
  attributes: A;
}

/* ------- */

export type ActionEndpoint =
  | KcaActionEndpoint
  | KcmActionEndpoint

export interface Action extends Version {
  type: ActionType;
}

export type ActionType =
  | KcaActionType
  | KcmActionType

export type KcaActionType =
  | 'ChargeMode'
  | 'ChargeSchedule'
  | 'ChargingStart'
  | 'HvacSchedule'
  | 'HvacStart'
  | 'RefreshBatteryStatus'
  | 'RefreshHvacStatus'
  | 'RefreshLocation'
  | 'SendNavigation'

export type KcmActionType =
  | 'ChargePauseResume'

/* ------- */

export interface Version {
  version: 1 | 2;
}

/* ------- */

export type Vin = string
export type AccountId = string

export type ImageOrientation =
  | 'iso'
  | 'profile'
