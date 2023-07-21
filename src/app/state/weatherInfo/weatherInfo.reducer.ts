import { createReducer, on } from '@ngrx/store';
import {
  RainData,
  WindData,
  stationPlace,
} from 'src/app/weather-info/weather-info-response.model';
import {
  setHumidity,
  setLoading,
  setPlace,
  setPressure,
  setRain,
  setTemperature,
  setWind,
} from './weatherInfo.action';

export interface WeatherInterface {
  loading: boolean;
  place: stationPlace;
  temperature: number;
  humidity: number;
  pressure: number;
  wind: WindData;
  rain: RainData;
}

export const initialState: WeatherInterface = {
  loading: false,
  place: {
    timezone: '',
    country: '',
    altitude: 0,
    location: [],
    city: '',
    street: '',
  },
  temperature: 0,
  humidity: 0,
  pressure: 0,
  wind: {
    wind_strength: 0,
    gust_strength: 0,
    wind_angle: 0,
    gust_angle: 0,
    wind_timeutc: 0,
  },
  rain: {
    rain_live: 0,
    rain_60min: 0,
    rain_24h: 0,
    rain_timeutc: 0,
  },
};

export const weatherInfoReducer = createReducer(
  //supply the initial state
  initialState,
  on(setLoading, (state, { isLoading }) => ({ ...state, loading: isLoading })),
  on(setPlace, (state, { place }) => ({ ...state, place: place })),
  on(setTemperature, (state, { temperature }) => ({
    ...state,
    temperature: temperature,
  })),
  on(setHumidity, (state, { humidity }) => ({ ...state, humidity: humidity })),
  on(setPressure, (state, { pressure }) => ({ ...state, pressure: pressure })),
  on(setWind, (state, { wind }) => ({ ...state, wind: wind })),
  on(setRain, (state, { rain }) => ({ ...state, rain: rain }))
);
