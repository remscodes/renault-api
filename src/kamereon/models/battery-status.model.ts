import { DateType } from '../../shared.model';
import { DataResponse, Vin } from './kamereon.model';

export type BatteryStatusData = DataResponse<Omit<BatteryStatus, 'id'>>;

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

export enum ChargingStatus {
  CHARGE_NOT_BLOCKED = - 1,
  CHARGE_BLOCKED = 0,
  NEXT_CHARGE_BLOCKED = 1
}

export enum PlugStatus {
  NOT_PLUGGED = 0,
  PLUGGED = 1
}
