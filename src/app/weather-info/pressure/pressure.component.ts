import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import {
  pressureSelector,
  isLoadingSelector,
} from 'src/app/state/weatherInfo/weatherInfo.selector';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss'],
})
export class PressureComponent implements OnInit {
  //@Input() pressure!: number;

  press!: number;
  isLoading$: Observable<boolean>;
  pressure$: Observable<number>;

  constructor(private store: Store) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.pressure$ = this.store.select(pressureSelector);
  }

  ngOnInit(): void {
    this.pressure$.subscribe((value) => (this.press = Math.round(value)));
  }

  // ngOnChanges() {
  //   this.press = Math.round(this.pressure);
  // }

  get cardTitle() {
    return 'Pressure';
  }
}
