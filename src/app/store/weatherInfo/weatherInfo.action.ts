import { createAction, props } from '@ngrx/store';
import { stationPlace, WindData, RainData } from 'src/app/interfaces/weather-info-response.interface';

export const setLoading = createAction(
  '[WeatherInfo] Set Loading',
  props<{ isLoading: boolean }>()
);

export const setPlace = createAction(
  '[WeatherInfo] Set Place',
  props<{ place: stationPlace }>()
);

export const setTemperature = createAction(
  '[WeatherInfo] Set Temperature',
  props<{ temperature: number }>()
);

export const setHumidity = createAction(
  '[WeatherInfo] Set Humidity',
  props<{ humidity: number }>()
);

export const setPressure = createAction(
  '[WeatherInfo] Set Pressure',
  props<{ pressure: number }>()
);

export const setWind = createAction(
  '[WeatherInfo] Set Wind',
  props<{ wind: WindData }>()
);

export const setRain = createAction(
  '[WeatherInfo] Set Rain',
  props<{ rain: RainData }>()
);
