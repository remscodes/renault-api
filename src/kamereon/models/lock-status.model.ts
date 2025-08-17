import type { DateISO } from '../../shared.model';
import type { DataResponse, Vin } from './kamereon.model';

/**
 * Response model for Kamereon Lock API.
 */
export type LockStatusData = DataResponse<Omit<LockStatus, 'id'>>

/**
 * Response model for Kamereon Lock API when request header "accept"="application/json".
 */
export interface LockStatus {
  id: Vin;
  doorStatusFrontLeft: LockType;
  doorStatusFrontRight: LockType;
  doorStatusRearLeft: LockType;
  doorStatusRearRight: LockType;
  hatchStatus: LockType;
  lastUpdateTime: DateISO;
  lockStatus: LockType;
}

export type LockType =
  | 'locked'
  | 'unlocked'
