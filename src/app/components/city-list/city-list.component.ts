import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { City } from '../../interfaces/city.interface';
import { CityService } from '../../services/city.service';
import { selectCity } from 'src/app/store/city/city.action';
import { citySelector } from 'src/app/store/city/city.selector';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
