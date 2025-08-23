import type { DateISO } from '../../common.model';
import type { DataResponse } from './kamereon.model';

export type LockStatusResponse = DataResponse<LockStatus>

export interface LockStatus {
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
