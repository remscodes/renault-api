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

export type HvacSessionsData = DataResponse<HvacSessions>

export interface HvacSessions {

}

/* ------- */

export type HvacStatusData = DataResponse<HvacStatus>

export interface HvacStatus {

}

/* ------- */

export type HvacSettingsData = DataResponse<Omit<HvacSettings, 'id'>>

export interface HvacSettings extends Schedules<HvacDaySchedule, { targetTemperature?: number }> {
  id?: Vin;
  dateTime?: DateType;
  mode?: HvacMode;
  globalTargetTemperature?: number;
}

export type HvacMode =
  | 'instant'

