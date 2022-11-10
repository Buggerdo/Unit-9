import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [ 
  {path: 'weather', component: WeatherComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'counter', component: CounterComponent},
  {path: '', component: RestaurantsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
