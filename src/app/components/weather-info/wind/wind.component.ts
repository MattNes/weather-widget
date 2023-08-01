import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WindData } from '../../../interfaces/weather-info-response.interface';
import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import {
  windSelector,
  isLoadingSelector,
} from 'src/app/store/weatherInfo/weatherInfo.selector';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss'],
})
export class WindComponent implements OnInit {
  wind!: WindData;

  isSmall = false;
  isMedium = false;
  width = 0;

  isLoading$: Observable<boolean>;
  wind$: Observable<WindData>;

  constructor(
    private host: ElementRef,
    private zone: NgZone,
    private store: Store
  ) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.wind$ = this.store.select(windSelector);
  }

  ngOnInit() {
    const observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        this.width = entries[0].contentRect.width;
        if (this.width < 520) {
          this.isMedium = true;
          if (this.width < 380) {
            this.isSmall = true;
          } else {
            this.isSmall = false;
          }
        } else {
          this.isMedium = false;
          this.isSmall = false;
        }
      });
    });
    observer.observe(this.host.nativeElement);

    this.wind$.subscribe((value) => {
      this.wind = value;
    });
  }

  get cardTitle() {
    return 'Wind';
  }
}
