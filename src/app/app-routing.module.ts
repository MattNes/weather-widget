import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherMainViewComponent } from './weather-main-view/weatherMainView.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { MoreInfoComponent } from './more-info/more-info.component';

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
