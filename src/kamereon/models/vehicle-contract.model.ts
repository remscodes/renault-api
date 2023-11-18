import type { DateType } from '../../shared.model';

/**
 * Response model for Kamereon VehicleContract API.
 */
export interface VehicleContract {
  type?: string;
  contractId?: string;
  code?: string;
  group?: string;
  durationMonths?: number;
  startDate?: DateType;
  endDate?: DateType;
  status?: string;
  statusLabel?: string;
  description?: string;
  conditions?: Condition[];
}

export interface Condition {
  startDate?: DateType;
  endDate?: DateType;
  unlimitedMileage?: boolean;
  maximumMileage?: number;
  mileageUnit?: 'km';
}
