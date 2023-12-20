import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangerComponent } from './components/currency-exchanger/currency-exchanger.component';
import { PopularCurrenciesComponent } from './components/shared/popular-currencies/popular-currencies.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HistoricalRateChartComponent } from './components/historical-rate-chart/historical-rate-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerComponent,
    PopularCurrenciesComponent,
    NavBarComponent,
    HistoricalRateChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
