export type Prefix<T extends string, prefix extends string> = `${prefix}${T}`

export type DateType =
  | Date
  | string;

export type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
