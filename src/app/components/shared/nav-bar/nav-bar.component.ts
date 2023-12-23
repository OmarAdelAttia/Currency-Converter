import { Component } from '@angular/core';
import { CurrenciesModel } from 'src/app/models/currencies.model';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  currenciesModel: CurrenciesModel = new CurrenciesModel();

  constructor(private getCurrencySrv: CurrencyService) { }

  currencyDetails(type: string) {
    this.getCurrencySrv.amount = 1;
    this.getCurrencySrv.base = this.currenciesModel.fromCurrency = 'EUR';
    type === 'GBP' ? this.currenciesModel.toCurrency = this.getCurrencySrv.symbol = 'GBP' : this.currenciesModel.toCurrency = this.getCurrencySrv.symbol = 'USD';
  }

}
