import type { DateISO } from '../../common.model';
import type { DataResponse } from './kamereon.model';
import type { Schedules } from './schedule.model';

export interface HvacStartInputs {
  targetTemperature: number;
  startDateTime?: DateISO;
}

/* ------- */

export type HvacScheduleInputs = Schedules<HvacDaySchedule>

export interface HvacDaySchedule {
  readyAtTime: DateISO;
}

/* ------- */

export type HvacHistoryResponse = DataResponse<HvacHistory>

export interface HvacHistory {}

/* ------- */

export type HvacSessionsResponse = DataResponse<HvacSessions>

export interface HvacSessions {}

/* ------- */

export type HvacStatusResponse = DataResponse<HvacStatus>

export interface HvacStatus {
  socThreshold: number;
  hvacStatus: HvacStatusType;
  lastUpdateTime: DateISO;
}

export type HvacStatusType =
  | 'on'
  | 'off'

/* ------- */

export type HvacSettingsResponse = DataResponse<HvacSettings>

export interface HvacSettings extends Schedules<HvacDaySchedule, { targetTemperature?: number }> {
  dateTime: DateISO;
  mode: HvacMode;
  globalTargetTemperature: number;
}

export type HvacMode =
  | 'instant'

/* ------- */

export type ActionRefreshHvacStatusResponse = DataResponse<undefined, 'RefreshHvacStatus'>

/* ------- */

export type ActionHvacScheduleResponse = DataResponse<ActionHvacSchedule>

export interface ActionHvacSchedule {}

/* ------- */

export type ActionHvacStartResponse = DataResponse<ActionHvacStart>

export interface ActionHvacStart {}
