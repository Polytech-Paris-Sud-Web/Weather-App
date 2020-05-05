import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';
import {ForecastResponse, WeatherResponse} from '../../model/weather';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test weather', async () => {
    const response: WeatherResponse = await service.getWeather('London').toPromise();
    expectWeatherDefined(response);
  });

  it('test forecast', async () => {
    const forecasts: ForecastResponse[] = await service.getForecast('London').toPromise();
    expect(forecasts.length).toBeGreaterThan(0);
    for (const forecast of forecasts) {
      expect(forecast.dt).toBeDefined();
      expect(forecast.main).toBeDefined();
      expect(forecast.main.temp).toBeDefined();
      expect(forecast.main.temp_min).toBeDefined();
      expect(forecast.main.temp_max).toBeDefined();
      expect(forecast.main.pressure).toBeDefined();
      expect(forecast.main.sea_level).toBeDefined();
      expect(forecast.main.grnd_level).toBeDefined();
      expect(forecast.main.humidity).toBeDefined();
      expect(forecast.main.temp_kf).toBeDefined();
      for (const w of forecast.weather) {
        expectWeatherDefined(w);
      }
      expect(forecast.clouds).toBeDefined();
      expect(forecast.clouds.all).toBeDefined();
      expect(forecast.wind).toBeDefined();
      expect(forecast.wind.speed).toBeDefined();
      expect(forecast.wind.deg).toBeDefined();
      expect(forecast.sys).toBeDefined();
      expect(forecast.sys.pod).toBeDefined();
      expect(forecast.dt_text).toBeDefined();

    }
  });
});

function expectWeatherDefined(weather: WeatherResponse): void {
  expect(weather.description).toBeDefined();
  expect(weather.icon).toBeDefined();
  expect(weather.id).toBeDefined();
  expect(weather.main).toBeDefined();
}
