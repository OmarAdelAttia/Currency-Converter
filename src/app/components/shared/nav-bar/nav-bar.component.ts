import { Component } from '@angular/core';
import { CurrenciesModel } from 'src/app/models/currencies.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent {

  currenciesModel: CurrenciesModel = new CurrenciesModel();

  currencyDetails(type: string) {
    type === 'GBP' ? this.currenciesModel.toCurrency = 'GBP' : this.currenciesModel.toCurrency = 'USD';
  }

}
