import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CitySelected } from './city.reducer';

export const selectedCityWeather =
  createFeatureSelector<CitySelected>('cityWeather');

export const citySelector = createSelector(
  selectedCityWeather,
  (cityWeather) => cityWeather.selectedCity
);
