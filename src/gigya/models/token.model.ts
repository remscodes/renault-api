import type { DateType } from '../../shared.model';

export interface Token {
  callId?: string;
  errorCode?: number;
  apiVersion?: number;
  statusCode?: number;
  statusReason?: string;
  time?: DateType;
  id_token?: string;
}
