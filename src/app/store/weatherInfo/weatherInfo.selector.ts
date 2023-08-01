import { WeatherInterface } from './weatherInfo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const weatherInfoFeature =
  createFeatureSelector<WeatherInterface>('weatherInfo');

export const isLoadingSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.loading
);

export const temperatureSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.temperature
);

export const humiditySelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.humidity
);

export const pressureSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.pressure
);

export const windSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.wind
);

export const rainSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather.rain
);

export const weatherSelector = createSelector(
  weatherInfoFeature,
  (weather) => weather
);
