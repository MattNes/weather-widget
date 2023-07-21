import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { City } from '../city-list/city/city.model';
import { Component, OnInit } from '@angular/core';
import { citySelector } from '../state/city/city.selector';
import { WeatherInfoService } from './weather-info.service';
import { setLoading } from '../state/weatherInfo/weatherInfo.action';

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
