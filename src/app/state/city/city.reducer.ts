import { createReducer, on } from '@ngrx/store';
import { selectCity, resetSelectedCity } from './city.action';
import { City } from 'src/app/city-list/city/city.model';

export interface CitySelected {
  selectedCity: City;
}

export const initialState: CitySelected = {
  selectedCity: {
    id: 0,
    name: '',
    coordinates: { latNe: 0, latSw: 0, lonNe: 0, lonSw: 0 },
  },
};

export const cityReducer = createReducer(
  //supply the initial state
  initialState,
  on(selectCity, (state, { city }) => ({
    ...state,
    selectedCity: city,
  })),
  on(resetSelectedCity, (state) => ({
    ...state,
    selectedCity: initialState.selectedCity,
  }))
);
