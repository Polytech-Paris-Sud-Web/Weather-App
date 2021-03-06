export type WeatherResponse = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type ForecastResponse = {
  dt: number,
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: WeatherResponse[],
  clouds: {
    all: number
  },
  wind: {
    speed: number,
    deg: number
  },
  sys: {
    pod: string
  },
  dt_text: string
};

export type Unit = 'metric' | 'imperial';

export const METRIC: Unit = 'metric';
export const IMPERIAL: Unit = 'metric';
