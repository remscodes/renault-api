import type { DateType } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';
import type { Schedules } from './schedule.model';

export interface HvacStartInputs {
  targetTemperature: number;
  startDateTime?: DateType;
}

/* ------- */

export type HvacScheduleInputs = Schedules<HvacDaySchedule>

export interface HvacDaySchedule {
  readyAtTime: DateType;
}

/* ------- */

export type HvacHistoryData = DataResponse<HvacHistory>

export interface HvacHistory {

}

/* ------- */

/**
 * Response model for Kamereon HVAC API.
 */
export type HvacSessionsData = DataResponse<HvacSessions>

/**
 * Response model for Kamereon HVAC API when request header "accept"="application/json".
 */
export interface HvacSessions {

}

/* ------- */

/**
 * Response model for Kamereon HVAC API.
 */
export type HvacStatusData = DataResponse<HvacStatus>

/**
 * Response model for Kamereon HVAC API when request header "accept"="application/json".
 */
export interface HvacStatus {
  id?: Vin;
  socThreshold?: number;
  hvacStatus?: HvacStatusType;
  lastUpdateTime?: DateType;
}

export type HvacStatusType =
  | 'on'
  | 'off'

/* ------- */

/**
 * Response model for Kamereon HVAC API.
 */
export type HvacSettingsData = DataResponse<Omit<HvacSettings, 'id'>>

/**
 * Response model for Kamereon HVAC API when request header "accept"="application/json".
 */
export interface HvacSettings extends Schedules<HvacDaySchedule, { targetTemperature?: number }> {
  id?: Vin;
  dateTime?: DateType;
  mode?: HvacMode;
  globalTargetTemperature?: number;
}

export type HvacMode =
  | 'instant'

/* ------- */

export type ActionRefreshHvacStatusData = DataResponse<undefined, 'RefreshHvacStatus'>

export interface ActionRefreshHvacStatus {
  id?: string;
}

/* ------- */

export type ActionHvacScheduleData = DataResponse<Omit<ActionHvacSchedule, 'id'>>

export interface ActionHvacSchedule {
  id?: string;
}

/* ------- */

export type ActionHvacStartData = DataResponse<Omit<ActionHvacStart, 'id'>>

export interface ActionHvacStart {
  id?: string;
}
