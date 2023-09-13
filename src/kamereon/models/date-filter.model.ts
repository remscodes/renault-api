import { DateType } from '../../shared.model';

export interface DateFilter {
  period: Period;
  start: DateType;
  end: DateType;
}

export type Period =
  | 'day'
  | 'month'
