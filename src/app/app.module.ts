import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { cityReducer } from './state/city/city.reducer';
import { MatCommonModule } from '@angular/material/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WeatherMainViewComponent } from './weather-main-view/weatherMainView.component';
import { WindComponent } from './weather-info/wind/wind.component';
import { RainComponent } from './weather-info/rain/rain.component';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HumidityComponent } from './weather-info/humidity/humidity.component';
import { PressureComponent } from './weather-info/pressure/pressure.component';
import { TemperatureComponent } from './weather-info/temperature/temperature.component';
import { weatherInfoReducer } from './state/weatherInfo/weatherInfo.reducer';
import { cityEffects } from './state/city/city.effect';
import { MoreInfoComponent } from './more-info/more-info.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
