import axios from 'axios';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  setHumidity,
  setLoading,
  setPressure,
  setRain,
  setTemperature,
  setWind,
  setPlace,
} from '../store/weatherInfo/weatherInfo.action';
import { City } from '../interfaces/city.interface';
import {
  RainData,
  WeatherInfoData,
  WeatherInfoResponse,
  WindData,
} from '../interfaces/weather-info-response.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherInfoService {
  private weatherUrl = 'https://api.netatmo.com/api'; //url to web api
  private weatherInfoData: WeatherInfoData | undefined;
  private mainModule: string = '';
  private tempModuleOne: string = '';
  private windModuleTwo: string = '';
  private rainModuleThree: string = '';

  constructor(private store: Store) {}

  async getWeatherInfo(location: City) {
    this.store.dispatch(setLoading({ isLoading: true }));

    const apiResponse = await this.weatherInfoGET(location);
    this.weatherInfoData = apiResponse.body.find((data) =>
      this.findNaModules(data).every((module) => module !== '')
    );
    this.retrievePlace();
    this.retrieveTemperatureAndHumidity();
    this.retrievePressure();
    this.retrieveWind();
    this.retrieveRain();

    setTimeout(
      () => this.store.dispatch(setLoading({ isLoading: false })),
      300
    );
    return apiResponse;
  }

  async weatherInfoGET(location: City): Promise<WeatherInfoResponse> {
    const auth = await this.getAuthToken();
    const url = this.weatherUrl + '/getpublicdata';
    const head = {
      accept: 'application/json',
      Authorization: `Bearer ${auth}`,
    };
    const query = {
      lat_ne: location.coordinates.latNe,
      lon_ne: location.coordinates.lonNe,
      lat_sw: location.coordinates.latSw,
      lon_sw: location.coordinates.lonSw,
      required_data: 'wind',
      filter: true,
    };

    const response = await axios.get(url, { headers: head, params: query });
    return response.data;
  }

  private async getAuthToken(): Promise<string> {
    const ulrToAuth = 'https://api.netatmo.com/oauth2/token';

    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token:
        '64a2d85bc263a3c55403c871|11040cb294d45c9a4dab0f868d4395b7',
      client_id: '64a2d8f33bd15cce47065cb3',
      client_secret: 'M4js54c3g76bwRKf1WNBUIoGfbyLzFoJ',
    });

    const response = await axios.post(ulrToAuth, params);
    return response.data.access_token;
  }

  private findNaModules(
    weatherInfoData: WeatherInfoData | undefined
  ): string[] {
    if (weatherInfoData === undefined) return [];
    this.mainModule = weatherInfoData._id;
    const objKeys = Object.keys(weatherInfoData.module_types);
    this.tempModuleOne =
      objKeys.find(
        (key) => weatherInfoData?.module_types[key] === 'NAModule1'
      ) || '';
    this.windModuleTwo =
      objKeys.find(
        (key) => weatherInfoData?.module_types[key] === 'NAModule2'
      ) || '';
    this.rainModuleThree =
      objKeys.find(
        (key) => weatherInfoData?.module_types[key] === 'NAModule3'
      ) || '';
    return [
      this.mainModule,
      this.tempModuleOne,
      this.windModuleTwo,
      this.rainModuleThree,
    ];
  }

  private retrievePlace(){
    if (this.weatherInfoData !== undefined) {
      const place = this.weatherInfoData.place;
      this.store.dispatch(setPlace({ place: place }));
    }
  }

  private retrieveTemperatureAndHumidity() {
    if (this.weatherInfoData !== undefined) {
      const tempRes = this.weatherInfoData.measures[this.tempModuleOne].res;
      let objKey = Object.keys(tempRes);
      const temperature = tempRes[objKey[0]][0];
      const humidity = tempRes[objKey[0]][1];
      this.store.dispatch(setTemperature({ temperature: temperature }));
      this.store.dispatch(setHumidity({ humidity: humidity }));
    }
  }

  private retrievePressure() {
    if (this.weatherInfoData !== undefined) {
      const pressRes = this.weatherInfoData.measures[this.mainModule].res;
      let objKey = Object.keys(pressRes);
      const pressure = pressRes[objKey[0]][0];
      this.store.dispatch(setPressure({ pressure: pressure }));
    }
  }

  private retrieveWind() {
    if (this.weatherInfoData !== undefined) {
      const windRes = this.weatherInfoData.measures[this.windModuleTwo];
      const wind = windRes as WindData;
      this.store.dispatch(setWind({ wind: wind }));
    }
  }

  private retrieveRain() {
    if (this.weatherInfoData !== undefined) {
      const rainRes = this.weatherInfoData.measures[this.rainModuleThree];
      const rain = rainRes as RainData;
      this.store.dispatch(setRain({ rain: rain }));
    }
  }
}
