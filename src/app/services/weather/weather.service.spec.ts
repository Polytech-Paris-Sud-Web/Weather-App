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

  it('should weather response be correct', async () => {
    const response: WeatherResponse = await service.getWeather('London').toPromise();
    expect(response.description).toBeDefined();
    expect(response.icon).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.main).toBeDefined();
  });
});
