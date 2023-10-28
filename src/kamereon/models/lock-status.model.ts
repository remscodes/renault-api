import type { DateType } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Lock API.
 */
export type LockStatusData = DataResponse<Omit<LockStatus, 'id'>>

/**
 * Response model for Kamereon Lock API when request header "accept"="application/json".
 */
export interface LockStatus {
  id?: Vin;
  doorStatusFrontLeft?: Lock;
  doorStatusFrontRight?: Lock;
  doorStatusRearLeft?: Lock;
  doorStatusRearRight?: Lock;
  hatchStatus?: Lock;
  lastUpdateTime?: DateType;
  lockStatus?: Lock;
}

type Lock =
  | 'locked'
  | 'unlocked'
