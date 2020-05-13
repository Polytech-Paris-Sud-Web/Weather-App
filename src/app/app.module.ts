import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { ErrorComponent } from './ui/error/error.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AngularFireLite } from 'angularfire-lite';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ErrorComponent,
    WeatherCardComponent,
    AddComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    AngularFireLite.forRoot(environment.config),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
