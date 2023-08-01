export interface WeatherInfoData {
  _id: string;
  place: {
    timezone: string;
    country: string;
    altitude: number;
    location: number[];
    city: string;
    street: string;
  };
  mark: number;
  measures: {
    [key: string]: {
      res: {
        [time_stamp: string]: number[];
      };
      type?: string[];
      rain_60min?: number;
      rain_24h?: number;
      rain_live?: number;
      rain_timeutc?: number;
      wind_strength?: number;
      wind_angle?: number;
      gust_strength?: number;
      gust_angle?: number;
      wind_timeutc?: number;
    };
  };
  modules: string[];
  module_types: {
    [key: string]: string;
  };
}

export interface WeatherInfoResponse {
  body: WeatherInfoData[];
}

export interface WindData {
  wind_strength: number;
  wind_angle: number;
  gust_strength: number;
  gust_angle: number;
  wind_timeutc: number;
}

export interface RainData {
  rain_60min: number;
  rain_24h: number;
  rain_live: number;
  rain_timeutc: number;
}

export interface stationPlace {
  timezone: string;
  country: string;
  altitude: number;
  location: number[];
  city: string;
  street: string;
}
