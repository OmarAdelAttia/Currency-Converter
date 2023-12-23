import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.httpClient.get('http://data.fixer.io/api/latest?access_key=b5b9bfad8776295669f117e5775136ae');
  }

  getHistoricalRate(date: any, base: any, symbols: any): Observable<any> {
    return this.httpClient.get(`http://data.fixer.io/api/${date}?access_key=b5b9bfad8776295669f117e5775136ae&base=${base}&symbols=${symbols}`);
  }

}
