import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public http: HttpClient, public weather: WeatherService, public authentication: AuthenticationService) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

}
