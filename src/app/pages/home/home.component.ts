import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities;

  constructor(public auth: AuthenticationService) {
  }

  ngOnInit() {
    this.cities = this.auth.getCities();
  }
}
