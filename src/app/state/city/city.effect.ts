import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherInfoService } from 'src/app/weather-info/weather-info.service';
import { from, switchMap, withLatestFrom } from 'rxjs';
import { selectCity } from './city.action';
import { Store } from '@ngrx/store';
import { citySelector } from './city.selector';

@Injectable()
export class cityEffects {
  selectCity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(selectCity),
        withLatestFrom(this.store.select(citySelector)),
        switchMap(([action, city]) =>
          from(this.weatherInfoService.getWeatherInfo(city))
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private weatherInfoService: WeatherInfoService
  ) {}
}
