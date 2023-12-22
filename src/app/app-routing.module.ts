import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangerComponent } from './components/currency-exchanger/currency-exchanger.component';
import { HistoricalRateChartComponent } from './components/historical-rate-chart/historical-rate-chart.component';

const routes: Routes = [
  { path: '', component: CurrencyExchangerComponent },
  { path: 'currencyDetails', component: HistoricalRateChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
