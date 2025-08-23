export type Prefix<T extends string, prefix extends string> = `${prefix}${T}`

export type Uuid = string
export type DateISO = string
export type DateHH_mm = string
export type DateTHH_mmZ = string
export type Minutes = number

export type Day =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
