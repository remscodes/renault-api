import type { DateISO } from '../../shared.model';

export interface DateFilter {
  period: Period;
  start: DateISO;
  end: DateISO;
}

export type Period =
  | 'day'
  | 'month'
