import { createAction, props } from '@ngrx/store';
import { City } from 'src/app/interfaces/city.interface';

export const selectCity = createAction(
  '[CityList] Select City',
  props<{ city: City }>()
);

export const resetSelectedCity = createAction(
  '[AppComponent] Reset Selected City'
);
