import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { WeatherComponent } from './weather/weather.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AddOrderFormComponent } from './add-order-form/add-order-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WeatherComponent,
    RestaurantsComponent,
    NavMenuComponent,
    OrderHistoryComponent,
    AddOrderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }