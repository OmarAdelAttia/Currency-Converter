import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.scss']
})
export class CurrencyExchangerComponent {

  amount: number | undefined;
  fromCurrency: string | undefined;
  toCurrency: string | undefined;

  constructor(private getCurrencySrv: CurrencyService) { }

  convertCurrency() {
    this.getCurrencySrv.getCurrencies().subscribe(data => {
      console.log(data)
    });
  }

  getCurrenciesChanges() {
    setTimeout(() => this.convertCurrency(), 60000);
  }

}
