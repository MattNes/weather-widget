import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetSelectedCity } from './state/city/city.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather';

  goBackMainPage() {
    this.store.dispatch(resetSelectedCity());
    this.route.navigateByUrl('');
  }
  constructor(private route: Router, private store: Store) {}
}
