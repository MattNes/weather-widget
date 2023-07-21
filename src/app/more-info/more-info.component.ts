import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { City } from '../city-list/city/city.model';
import { citySelector } from '../state/city/city.selector';

@Component({
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  selectedCity$: Observable<City>;
  selectedCity: City | undefined;

  constructor(private store: Store) {
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
  }
}
