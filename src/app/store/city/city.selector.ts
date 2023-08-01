import { CitySelected } from './city.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectedCityWeather =
  createFeatureSelector<CitySelected>('cityWeather');

export const citySelector = createSelector(
  selectedCityWeather,
  (cityWeather) => cityWeather.selectedCity
);
