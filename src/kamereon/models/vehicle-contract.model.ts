import type { DateISO } from '../../common.model';

export interface VehicleContract {
  type: string;
  contractId: string;
  code: string;
  group: string;
  durationMonths: number;
  startDate: DateISO;
  endDate: DateISO;
  status: string;
  statusLabel: string;
  description: string;
  conditions: Condition[];
}

export interface Condition {
  startDate: DateISO;
  endDate: DateISO;
  unlimitedMileage: boolean;
  maximumMileage: number;
  mileageUnit: 'km';
}
