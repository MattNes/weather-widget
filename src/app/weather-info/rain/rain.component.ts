import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RainData } from '../weather-info-response.model';
import { Component, OnInit, Input, ElementRef, NgZone } from '@angular/core';
import {
  rainSelector,
  isLoadingSelector,
} from 'src/app/state/weatherInfo/weatherInfo.selector';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss'],
})
export class RainComponent implements OnInit {
  rain!: RainData;

  isSmall = false;
  width = 0;

  isLoading$: Observable<boolean>;
  rain$: Observable<RainData>;

  constructor(
    private host: ElementRef,
    private zone: NgZone,
    private store: Store
  ) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.rain$ = this.store.select(rainSelector);
  }

  ngOnInit() {
    const observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        this.width = entries[0].contentRect.width;
        if (this.width < 380) {
          this.isSmall = true;
        } else {
          this.isSmall = false;
        }
      });
    });

    observer.observe(this.host.nativeElement);

    this.rain$.subscribe((value) => {
      this.rain = value;
    });
  }

  get cardTitle() {
    return 'Rain';
  }
}
