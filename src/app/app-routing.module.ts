import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreInfoComponent } from './views/more-info/more-info.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherMainViewComponent } from './views/weather-main-view/weatherMainView.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Weather',
    component: WeatherMainViewComponent,
    children: [
      {
        path: ':id',

        component: WeatherInfoComponent,
      },
    ],
  },
  {
    path: 'more-info/:id',
    title: 'Weather info',
    component: MoreInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
