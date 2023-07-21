import { Injectable } from '@angular/core';
import { City } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private cities: City[] = [
    {
      id: 1,
      name: 'Paris',
      coordinates: {
        latNe: 48.86471476180278,
        latSw: 48.83579746243092,
        lonNe: 2.373046875,
        lonSw: 2.3291015625,
      },
    },
    {
      id: 2,
      name: 'Rome',
      coordinates: {
        latNe: 41.98788143462245,
        latSw: 41.80635523662291,
        lonNe: 12.78164001313112,
        lonSw: 12.34255000000002,
      },
    },
    {
      id: 3,
      name: 'New York',
      coordinates: {
        latNe: 40.97989806962013,
        latSw: 38.82259097617712,
        lonNe: -81.5625,
        lonSw: -81.5625,
      },
    },
    {
      id: 4,
      name: 'Berlin',
      coordinates: {
        latNe: 52.3755991766591,
        latSw: 52.26815737376817,
        lonNe: 13.7109375,
        lonSw: 13.53515625,
      },
    },
    {
      id: 5,
      name: 'London',
      coordinates: {
        latNe: 51.2132,
        latSw: 51.0273,
        lonNe: 0.5923,
        lonSw: 0.2961,
      },
    },
    {
      id: 6,
      name: 'Lisbon',
      coordinates: {
        latNe: 38.6695,
        latSw: 38.5752,
        lonNe: -8.8085,
        lonSw: -8.9292,
      },
    },
  ];

  getAllCities(): City[] {
    return this.cities;
  }

  getCityById(id: number) {
    return this.cities.find((city) => city.id === id);
  }

  constructor() {}
}

// Paris 48.86471476180278 48.83579746243092 2.373046875 2.3291015625
// New York 40.97989806962013 38.82259097617712 -81.5625 -81.5625
// Berlin 52.3755991766591 52.26815737376817 13.7109375 13.53515625
// Bogota 5.266007882805492 4.915832801313174 -75.234375 -75.5859375
