import type { DateType } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';
import type { Schedules } from './schedule.model';

export interface ChargeModeInputs {
  action: ChargeModeType;
}

export type ChargeModeType =
  | 'always'
  | 'always_charging'
  | 'schedule'

/* ------- */

export interface ChargeStartInputs {

}

/* ------- */

export interface ChargeStopInputs {

}

/* ------- */

export type ChargeScheduleInputs = Schedules<ChargeDaySchedule>;

export interface ChargeDaySchedule {
  // Ex : T06:32Z
  startTime?: string;
  // minutes
  duration?: number;
}

/* ------- */

export type ChargeHistoryData = DataResponse<Omit<ChargeHistory, 'id'>>

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

export type ChargeModeData = DataResponse<Omit<ChargeMode, 'id'>>

export interface ChargeMode {
  id?: Vin;
  chargeMode?: ChargeModeStatus;
}

export type ChargeModeStatus =
  | 'always'
  | 'generic_unknown'
  | 'pause_resume'
  | 'scheduled'
  | 'delayed'
  | 'delegated'
  | 'offpeak'
  | 'pause'
  | 'resume'

/* ------- */

export type ChargesData = DataResponse<Omit<Charges, 'id'>>

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

export type ChargingSettingsData = DataResponse<Omit<ChargingSettings, 'id'>>

export interface ChargingSettings extends Schedules<ChargeDaySchedule> {
  id?: Vin;
  dateTime?: DateType;
  mode?: ChargeModeType;
}
