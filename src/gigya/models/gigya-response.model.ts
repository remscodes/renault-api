import type { DateType } from '../../shared.model';

export interface GigyaResponse {
  callId?: string;
  errorCode?: number;
  apiVersion?: number;
  statusCode?: number;
  statusReason?: string;
  time?: DateType;
}

export interface GigyaErrorResponse extends GigyaResponse {
  errorDetails?: string;
  errorMessage?: string;
}

export interface GigyaLoginResponse {
}
