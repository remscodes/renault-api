import { DateType } from '../../shared.model';
import { DataResponse, Vin } from './kamereon.model';

export type LockStatusData = DataResponse<Omit<LockStatus, 'id'>>

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
