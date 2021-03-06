import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
// import {ForecastResponse, METRIC, Unit, WeatherResponse} from '../../model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';

  private readonly appID = '6cc51d73a359e8cb5411141a9f0cbcca';

  constructor(public http: HttpClient) {
  }

  getWeather(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.weatherURL}${city}&units=${metric}&APPID=${this.appID}`).pipe((first()));
  }

  getForecast(city: string, metric: 'metric' | 'imperial' = 'metric'): Observable<any> {
    return this.http.get(
      `${this.forecastURL}${city}&units=${metric}&APPID=${this.appID}`)
      .pipe(first(), map((weather) => weather['list']));
  }
}
