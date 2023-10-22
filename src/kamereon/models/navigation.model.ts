export interface SendNavigationInputs {
  downloadTrafficInfo: boolean;
  destinations: Destination[];
}

interface Destination {
  id: number;
  latitude: number;
  longitude: number;
  calculationCondition: NavigationCondition;
}

export type NavigationCondition =
  | 0
  | 1
  | 2
  | 3
