import type { DateType, Day } from '../../shared.model';
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
  startTime?: string;
  // minutes
  duration?: number;
}

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargeHistoryData = DataResponse<Omit<ChargeHistory, 'id'>>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface ChargeHistory {
  id?: Vin;
  chargeSummaries?: ChargeSummary[];
}

export interface ChargeSummary {
  day?: string,
  month?: string
  totalChargesNumber?: number,
  totalChargesDuration?: number,
  totalChargesErrors?: number
}

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargeModeData = DataResponse<Omit<ChargeMode, 'id'>>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface ChargeMode {
  id?: Vin;
  chargeMode?: ChargeModeStatus;
}

export type ChargeModeStatus =
  | 'always'
  | 'delayed'
  | 'scheduled'

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargeScheduleData = DataResponse<ChargeSchedule>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface ChargeSchedule {
  id?: Vin;
  calendar?: Record<Day, Sched[]>;
}

interface Sched {
  // Format HHMM
  startTime?: string;
  duration?: number;
  activationState?: boolean;
}

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargesData = DataResponse<Omit<Charges, 'id'>>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface Charges {
  id?: Vin;
  charges?: ChargeDetails[];
}

export interface ChargeDetails {
  chargeStartDate?: DateType,
  chargeEndDate?: DateType,
  chargeDuration?: number,
  chargeStartBatteryLevel?: number,
  chargeEndBatteryLevel?: number,
  chargeEnergyRecovered?: number;
  chargeEndStatus?: ChargeEndStatus

  chargeBatteryLevelRecovered?: number,
  chargePower?: ChargePowerStatus,
  chargeStartInstantaneousPower?: number,
}

type ChargeEndStatus =
  |'ok'

type ChargePowerStatus =
  |'slow'

/* ------- */

/**
 * Response model for Kamereon Charge API.
 */
export type ChargingSettingsData = DataResponse<Omit<ChargingSettings, 'id'>>

/**
 * Response model for Kamereon Charge API when request header "accept"="application/json".
 */
export interface ChargingSettings extends Schedules<ChargeDaySchedule> {
  id?: Vin;
  dateTime?: DateType;
  mode?: ChargeModeAction;
}

/* ------- */

export interface ActionChargeMode {
  id?: string;
  action?: ChargeModeAction;
}

/* ------- */

export type ActionChargeScheduleData = DataResponse<Omit<ActionChargeSchedule, 'id'>>

export interface ActionChargeSchedule {
  id?: string;
}

/* ------- */

export type ActionChargingStartData = DataResponse<Omit<ActionChargeMode, 'id'>>

export interface ActionChargingStart {
  id?: string;
}

/* ------- */

export type ActionPauseResumeData = DataResponse<Omit<ActionPauseResume, 'id'>>

export interface ActionPauseResume {
  id?: string;
}
