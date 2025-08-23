import type { DateISO } from '../../common.model';

export interface DateFilter {
  period: Period;
  start: DateISO;
  end: DateISO;
}

export type Period =
  | 'day'
  | 'month'
