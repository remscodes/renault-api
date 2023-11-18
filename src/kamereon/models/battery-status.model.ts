import type { DateType } from '../../shared.model';
import type { PlugStatus } from './battery-status-enum.model';
import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Battery API.
 */
export type BatteryStatusData = DataResponse<Omit<BatteryStatus, 'id'>>;

/**
 * Response model for Kamereon Battery API when request header "accept"="application/json".
 */
export interface BatteryStatus {
  id?: Vin;
  timestamp: DateType;
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

export type ActionRefreshBatteryStatusData = DataResponse<undefined, 'RefreshBatteryStatus'>

export interface ActionRefreshBatteryStatus {
  id?: string;
}
