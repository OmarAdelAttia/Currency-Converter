import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  base: any;
  symbol: any;
  amount: any;

  constructor(private httpClient: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.httpClient.get('http://data.fixer.io/api/latest?access_key=78e8eae33d8c606822dfe0e1a558caf3');
  }

  getHistoricalRate(date: any, base: any = this.base, symbols: any = this.symbol): Observable<any> {
    return this.httpClient.get(`http://data.fixer.io/api/${date}?access_key=78e8eae33d8c606822dfe0e1a558caf3&base=${base}&symbols=${symbols}`);
  }

  getFullCurrencyName(): Observable<any> {
    return this.httpClient.get(`http://data.fixer.io/api/${this.base}?access_key=78e8eae33d8c606822dfe0e1a558caf3`);
  }

}
