import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import {ForecastResponse, METRIC, Unit, WeatherResponse} from '../../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly weatherURL = 'https://api.openweathermap.org/data/2.5/weather';
  private readonly forecastURL = 'https://api.openweathermap.org/data/2.5/forecast';

  private readonly appID = '6cc51d73a359e8cb5411141a9f0cbcca';

  constructor(public http: HttpClient) {
  }

  getWeather(city: string, unit: Unit = METRIC): Observable<WeatherResponse> {
    return this.http.get(`${this.weatherURL}?q=${city}&APPID=${this.appID}&units=${unit}`)
      .pipe(first(), map((payload: any) => payload.weather[0]));
  }

  getForecast(city: string, unit: Unit = METRIC): Observable<ForecastResponse[]> {
    return this.http.get(
      `${this.forecastURL}?q=${city}&APPID=${this.appID}&units=${unit}`)
      .pipe(first(), map((weather: any) => weather.list));
  }
}
