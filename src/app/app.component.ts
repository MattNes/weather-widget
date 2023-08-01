import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { resetSelectedCity } from './store/city/city.action';

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
