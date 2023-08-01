import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  temperatureSelector,
  isLoadingSelector,
} from 'src/app/store/weatherInfo/weatherInfo.selector';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  //@Input() temperature!: number;

  temp!: string;
  tempDecimal: string = '';
  isLoading$: Observable<boolean>;
  temperature$: Observable<number>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.temperature$ = this.store.select(temperatureSelector);
  }

  ngOnInit(): void {
    this.temperature$.subscribe((value) => {
      const separatedTemp = value.toString().split('.');
      this.temp = separatedTemp[0];
      this.tempDecimal = separatedTemp[1] || '0';
    });
  }

  // ngOnChanges() {
  //   const separatedTemp = this.temperature.toString().split('.');
  //   this.temp = separatedTemp[0];
  //   this.tempDecimal = separatedTemp[1] || '0';
  // }

  get cardTitle() {
    return 'Temperature';
  }
}
