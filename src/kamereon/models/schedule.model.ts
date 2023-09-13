export interface Schedules<DaySchedule, Extra extends object = {}> {
  schedules?: Schedule<DaySchedule>[] & Extra;
}

export interface Schedule<DaySchedule> {
  id?: number;
  activated?: boolean;
  monday?: DaySchedule;
  tuesday?: DaySchedule;
  wednesday?: DaySchedule;
  thursday?: DaySchedule;
  friday?: DaySchedule;
  saturday?: DaySchedule;
  sunday?: DaySchedule;
}
