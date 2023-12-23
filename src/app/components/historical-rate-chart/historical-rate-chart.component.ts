import { Component, OnInit } from '@angular/core';
import { CurrenciesModel } from 'src/app/models/currencies.model';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-historical-rate-chart',
  templateUrl: './historical-rate-chart.component.html',
  styleUrls: ['./historical-rate-chart.component.scss']
})

export class HistoricalRateChartComponent implements OnInit {

  currenciesModel: CurrenciesModel = new CurrenciesModel();
  currencies: any = [];
  title: any;

  constructor(private getCurrencySrv: CurrencyService) { }

  ngOnInit(): void {
    // setting data from the service
    this.currenciesModel.amount = this.getCurrencySrv.amount;
    this.currenciesModel.toCurrency = this.getCurrencySrv.symbol;
    this.currenciesModel.fromCurrency = this.getCurrencySrv.base;

    // getting the title (the API not working)
    this.getCurrencySrv.getFullCurrencyName().subscribe(data => {
      this.title = Object.values(data.symbols)[0];
    });

    // getting the currencies
    this.getCurrencySrv.getCurrencies().subscribe(data => {
      this.currencies = Object.entries(data.rates).map(([key, value]) => ({ key, value }));
    });

    // getting the historical rate
    this.convertCurrency();
  }

  getTodayTime() {
    // getting date
    let today = new Date();
    let time = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return time;
  }

  convertCurrency() {
    let approximatingNumber: number = 1;

    let time = this.getTodayTime();

    this.getCurrencySrv.getHistoricalRate(time, this.currenciesModel.fromCurrency, this.currenciesModel.toCurrency).subscribe(data => {
      // console.log(data);

      // decalaring the variables
      if (!this.currenciesModel.amount) this.currenciesModel.amount = 1;

      let convertedToValue = this.gettingCurrency('convertTo');

      let convertedFromValue = this.gettingCurrency('convertFrom');

      if (convertedFromValue.value !== 1) approximatingNumber = 1 / convertedFromValue.value;

      // setting default values
      this.currenciesModel.defaultValue = `${approximatingNumber * convertedFromValue.value} ${this.currenciesModel.fromCurrency} = ${(convertedToValue.value * approximatingNumber).toFixed(2)} ${this.currenciesModel.toCurrency}`;

      // setting value with amount after converting
      this.currenciesModel.valueWithAmount = `${(convertedToValue.value * this.currenciesModel.amount * approximatingNumber).toFixed(2)} ${this.currenciesModel.toCurrency}`;
    });
  }

  gettingCurrency(type: string) {
    let calculatedValue;
    if (type === 'convertTo') {
      // getting toCurrency
      calculatedValue = this.currencies.find((element: { key: string; value: any; }) => {
        if (element.key === this.currenciesModel.toCurrency) return element.value
      });
    }
    if (type === 'convertFrom') {
      // getting fromCurrency
      calculatedValue = this.currencies.find((element: { key: string; value: any; }) => {
        if (element.key === this.currenciesModel.fromCurrency) return element.value
      });
    }
    return calculatedValue;
  }

}
