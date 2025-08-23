import type { DateHH_mm, DateISO, DateTHH_mmZ, Day, Minutes } from '../../common.model';
import type { DataResponse, Vin } from './kamereon.model';
import type { Schedules } from './schedule.model';

export interface ChargeModeInputs {
  action: ChargeModeAction;
}

export type ChargeModeAction =
  // Instant Charging
  | 'always_charging'
  // Delayed Charging
  // | ''
  // Custom Charging
  | 'schedule_mode'

/* ------- */

export type ChargeScheduleInputs = Schedules<ChargeDaySchedule>;

export interface ChargeDaySchedule {
  // Ex : T06:32Z
  startTime: DateTHH_mmZ;
  duration: Minutes;
}

/* ------- */

export type ChargeHistoryResponse = DataResponse<ChargeHistory>

export interface ChargeHistory {
  chargeSummaries: ChargeSummary[];
}

export interface ChargeSummary {
  day: string,
  month: string
  totalChargesNumber: number,
  totalChargesDuration: number,
  totalChargesErrors: number
}

/* ------- */

export type ChargeModeResponse = DataResponse<ChargeMode>

export interface ChargeMode {
  chargeMode: ChargeModeStatus;
}

export type ChargeModeStatus =
  | 'always'
  | 'delayed'
  | 'scheduled'

/* ------- */

export type ChargeScheduleResponse = DataResponse<ChargeSchedule>

export interface ChargeSchedule {
  calendar: Calendar;
}

export type Calendar = Record<Day, Sched[]>

interface Sched {
  startTime: DateHH_mm;
  duration: number;
  activationState: boolean;
}

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargesResponse = DataResponse<Omit<Charges, 'id'>>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface Charges {
  id: Vin;
  charges: ChargeDetails[];
}

export interface ChargeDetails {
  chargeStartDate: DateISO,
  chargeEndDate: DateISO,
  chargeDuration: number,
  chargeStartBatteryLevel: number,
  chargeEndBatteryLevel: number,
  chargeEnergyRecovered: number;
  chargeEndStatus: ChargeEndStatus

  chargeBatteryLevelRecovered: number,
  chargePower: ChargePowerStatus,
  chargeStartInstantaneousPower: number,
}

type ChargeEndStatus =
  | 'ok'

type ChargePowerStatus =
  | 'slow'

/* ------- */

export type ChargingSettingsResponse = DataResponse<ChargingSettings>

export interface ChargingSettings extends Schedules<ChargeDaySchedule> {
  dateTime: DateISO;
  mode: ChargeModeStatus;
}

/* ------- */

export type ActionChargeModeResponse = DataResponse<ActionChargeMode>

export interface ActionChargeMode {
  action: ChargeModeAction;
}

/* ------- */

export type ActionChargeScheduleResponse = DataResponse<ActionChargeSchedule>

export interface ActionChargeSchedule {}

/* ------- */

export type ActionChargingStartResponse = DataResponse<ActionChargingStart>

export interface ActionChargingStart {}

/* ------- */

export type ActionPauseResumeResponse = DataResponse<ActionPauseResume>

export interface ActionPauseResume {}
