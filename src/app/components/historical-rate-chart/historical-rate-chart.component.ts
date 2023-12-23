import { Component } from '@angular/core';
import { CurrenciesModel } from 'src/app/models/currencies.model';

@Component({
  selector: 'app-historical-rate-chart',
  templateUrl: './historical-rate-chart.component.html',
  styleUrls: ['./historical-rate-chart.component.scss']
})

export class HistoricalRateChartComponent {

  currenciesModel: CurrenciesModel = new CurrenciesModel();
  currencies: any = [];

  convertCurrency() {
  }

}
