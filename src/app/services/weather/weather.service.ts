import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private readonly appID = '6cc51d73a359e8cb5411141a9f0cbcca';

  constructor(public http: HttpClient) {
  }

  getWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.weatherURL}${city}&APPID=${this.appID}`).pipe((first()));
  }
}
