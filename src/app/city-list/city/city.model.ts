export interface City {
  id: number;
  name: string;
  coordinates: Coordinates;
}

interface Coordinates {
  latNe: number;
  latSw: number;
  lonNe: number;
  lonSw: number;
}
