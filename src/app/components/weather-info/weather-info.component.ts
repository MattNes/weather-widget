import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city.interface';
import { citySelector } from 'src/app/store/city/city.selector';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  selectedCity$: Observable<City>;

  constructor(private store: Store) {
    this.selectedCity$ = this.store.select(citySelector);
  }

  ngOnInit() {}
}
