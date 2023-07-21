import { City } from 'src/app/city-list/city/city.model';
import { createAction, props } from '@ngrx/store';

export const selectCity = createAction(
  '[CityList] Select City',
  props<{ city: City }>()
);

export const resetSelectedCity = createAction(
  '[AppComponent] Reset Selected City'
);
