import { Router } from '@angular/router';
import { City } from '../city-list/city/city.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { citySelector } from '../state/city/city.selector';

@Component({
  templateUrl: './weatherMainView.component.html',
  styleUrls: ['./weatherMainView.component.scss'],
})
export class WeatherMainViewComponent implements OnInit {
  selectedCity: City | undefined = undefined;
  selectedCity$: Observable<City>;

  constructor(private route: Router, private store: Store) {
    this.selectedCity$ = this.store.select(citySelector);
  }

  ngOnInit(): void {
    this.selectedCity$.subscribe((value) => {
      if (value.id !== 0) {
        this.selectedCity = value;
      } else {
        this.selectedCity = undefined;
      }
    });
    this.route.navigateByUrl('');
  }

  // onNewCitySelected(value: City) {
  //   this.selectedCity = value;
  // }

  goToMoreInfo() {
    if (this.selectedCity)
      this.route.navigateByUrl(`more-info/${this.selectedCity.id}`);
  }
}
