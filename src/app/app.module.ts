import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NgChartsModule } from 'ng2-charts';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { cityEffects } from './store/city/city.effect';
import { AppRoutingModule } from './app-routing.module';
import { cityReducer } from './store/city/city.reducer';
import { MatCommonModule } from '@angular/material/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoreInfoComponent } from './views/more-info/more-info.component';
import { weatherInfoReducer } from './store/weatherInfo/weatherInfo.reducer';
import { WindComponent } from './components/weather-info/wind/wind.component';
import { RainComponent } from './components/weather-info/rain/rain.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CityListComponent } from './components/city-list/city-list.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { HumidityComponent } from './components/weather-info/humidity/humidity.component';
import { PressureComponent } from './components/weather-info/pressure/pressure.component';
import { WeatherMainViewComponent } from './views/weather-main-view/weatherMainView.component';
import { TemperatureComponent } from './components/weather-info/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    WindComponent,
    RainComponent,
    WeatherMainViewComponent,
    PressureComponent,
    HumidityComponent,
    TemperatureComponent,
    WeatherInfoComponent,
    CityListComponent,
    MoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      cityWeather: cityReducer,
      weatherInfo: weatherInfoReducer,
    }),
    EffectsModule.forRoot([cityEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
