import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should success', async () => {
    const response = await service.getWeather('London').toPromise();
    expect(response.id).toEqual(1);
  });
});
