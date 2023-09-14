import type { Prefix } from '../../shared.model';

type KcaEndpoint =
  | ''
  | 'battery-status'
  | 'charge-history'
  | 'charge-mode'
  | 'charges'
  | 'charging-settings'
  | 'cockpit'
  | 'hvac-history'
  | 'hvac-sessions'
  | 'hvac-status'
  | 'hvac-settings'
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

export type KcaActionEndpoint = Prefix<KcaAction, 'actions/'>

/* ------- */

type KcmAction =
  | 'pause-resume'

export type KcmActionEndpoint = Prefix<KcmAction, 'charge/'>

/* ------- */

// Use when Header has 'Accept'='application/vnd.api+json'
export interface DataResponse<T> {
  data: Data<T>;
}

interface Data<T> {
  type?: 'Car';
  id?: Vin | string;
  attributes?: T;
}

/* ------- */

export type ActionEndpoint =
  | KcaActionEndpoint
  | KcmActionEndpoint

export interface Action extends Version {
  type: ActionType;
}

type ActionType =
  | 'ChargeMode'
  | 'ChargeSchedule'
  | 'ChargingStart'
  | 'HvacSchedule'
  | 'HvacStart'
  | 'ChargePauseResume';

/* ------- */

export interface Version {
  version: 1 | 2;
}

/* ------- */

export interface PerformedAction<T> {

}

export type Vin = string
