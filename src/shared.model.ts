export type Prefix<T extends string, prefix extends string> = `${prefix}${T}`

export type DateISO = string;
export type DateHH_MM = string;

export type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
