import type { DateISO } from '../../common.model';
import type { PlugStatus } from './battery-status-enum.model';
import type { DataResponse } from './kamereon.model';

export type BatteryStatusResponse = DataResponse<BatteryStatus>;

export interface BatteryStatus {
  timestamp: DateISO;
  batteryLevel: number;
  batteryAutonomy: number;
  batteryTemperature: number;
  batteryCapacity: number;
  batteryAvailableEnergy: number;
  plugStatus: PlugStatus;
  chargingStatus: number;
  chargingRemainingTime: number;
  chargingInstantaneousPower: number;
}

/* ------- */

export type ActionRefreshBatteryStatusResponse = DataResponse<undefined, 'RefreshBatteryStatus'>
