import { Component, OnInit } from '@angular/core';
import { CurrenciesModel } from 'src/app/models/currencies.model';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})

export class CurrencyExchangerComponent implements OnInit {

  currenciesModel: CurrenciesModel = new CurrenciesModel();

  popularCurrencies: any = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'NZD', 'HKD'];
  currenciesDashboard: any = [];
  currencies: any = [];
  currenciesDashboardList: any = [];

  constructor(private getCurrencySrv: CurrencyService) { }

  ngOnInit(): void {
    this.currenciesModel.toCurrency = 'USD';
    this.currenciesModel.fromCurrency = 'EUR';
    this.convertCurrency();
  }

  convertCurrency() {
    let approximatingNumber: number = 1;
    this.getCurrencySrv.getCurrencies().subscribe(data => {
      this.currencies = Object.entries(data.rates).map(([key, value]) => ({ key, value }));

      // decalaring the variables
      if (!this.currenciesModel.amount) this.currenciesModel.amount = 1;

      let convertedToValue = this.gettingCurrency('convertTo');

      let convertedFromValue = this.gettingCurrency('convertFrom');

      if (convertedFromValue.value !== 1) approximatingNumber = 1 / convertedFromValue.value;

      // setting default values
      this.currenciesModel.defaultValue = `${approximatingNumber * convertedFromValue.value} ${this.currenciesModel.fromCurrency} = ${(convertedToValue.value * approximatingNumber).toFixed(2)} ${this.currenciesModel.toCurrency}`;

      // setting value with amount after converting
      this.currenciesModel.valueWithAmount = `${(convertedToValue.value * this.currenciesModel.amount * approximatingNumber).toFixed(2)} ${this.currenciesModel.toCurrency}`;

      this.clearingDashboard();

      this.creatingDashboard();

      this.currenciesDashboardList = this.settingDashboard(convertedToValue);
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

  clearingDashboard() {
    // clearing the dashboard array
    this.currenciesDashboard.splice(0, this.currenciesDashboard.length);
    this.currenciesDashboardList.splice(0, this.currenciesDashboardList.length);
  }

  creatingDashboard() {
    // creating dashboard array
    this.currencies.map((element: { key: any; }) => {
      // condition to get the popular currencies and avoid getting the same converted to currency
      if (this.popularCurrencies.includes(element.key) && element.key !== this.currenciesModel.toCurrency) {
        this.currenciesDashboard.push(element);
      }
    });
  }

  settingDashboard(calculatedValue: { value: number; }) {
    // setting data in dashboard
    return this.currenciesDashboard.map((element: any) => {
      element.value = (element.value * this.currenciesModel.amount * calculatedValue.value);
      return element = `${this.currenciesModel.amount} ${element.key} = ${element.value.toFixed(2)} ${this.currenciesModel.toCurrency}`
    });
  }

  getDetails() {
    this.getCurrencySrv.amount = this.currenciesModel.amount;
    this.getCurrencySrv.base = this.currenciesModel.fromCurrency;
    this.getCurrencySrv.symbol = this.currenciesModel.toCurrency;
  }

  sawpBtn() {
    [this.currenciesModel.fromCurrency, this.currenciesModel.toCurrency] = [this.currenciesModel.toCurrency, this.currenciesModel.fromCurrency];
    this.convertCurrency();
  }

}
