import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import {
  humiditySelector,
  isLoadingSelector,
} from 'src/app/store/weatherInfo/weatherInfo.selector';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
})
export class HumidityComponent implements OnInit {
  //@Input() humidity!: number;

  isLoading$: Observable<boolean>;
  humidity$: Observable<number>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.humidity$ = this.store.select(humiditySelector);
  }

  ngOnInit(): void {}

  get cardTitle() {
    return 'Humidity';
  }
}
