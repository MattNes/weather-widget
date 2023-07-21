import { Store } from '@ngrx/store';
import { City } from './city/city.model';
import { CityService } from './city/city.service';
import { selectCity } from '../state/city/city.action';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { citySelector } from '../state/city/city.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  //@Output() newCitySelected = new EventEmitter<City>();
  cities: City[] = [];

  selectedCity: City | undefined = undefined;
  selectedCity$: Observable<City>;

  constructor(private cityService: CityService, private store: Store) {
    this.selectedCity$ = this.store.select(citySelector);
  }

  ngOnInit(): void {
    this.cities = this.cityService.getAllCities();
    this.selectedCity$.subscribe((value) => {
      if (value.id !== 0) {
        this.selectedCity = value;
      } else {
        this.selectedCity = undefined;
      }
    });
  }

  onSelect(value: City) {
    //this.selectedCity = value;
    this.store.dispatch(selectCity({ city: value }));
    //this.newCitySelected.emit(this.selectedCity);
  }
}
