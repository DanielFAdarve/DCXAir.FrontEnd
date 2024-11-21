import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Currencies, Currency, ExhangeRates } from '../model/Currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  private url: string;
  private actualCurrency: string;
  private exchangeUrl: string;

  private currencies: Currencies;
  private exchanges: ExhangeRates;

  constructor(private http: HttpClient) {
    this.url = environment.currenciesURL;
    this.exchangeUrl = environment.exchangeURL;
    this.actualCurrency = environment.actualCurrency;

    this.currencies = [];
    this.exchanges = {};

    this.loadCurrencies();
    this.loadExchangeCurrency();
  }

  loadCurrencies() {
    this.http.get<Currency>(this.url)
      .subscribe(data => {
        for (const [key, value] of Object.entries(data)) {
          if (!(key == '' || value == '')) {
            this.currencies.push({
              name: value,
              key
            });
          }
        }
      });
  }

  getCurrencies() {
    return this.currencies;
  }

  setActualCurrency(currency: string) {
    if (!this.currencies.find(it => it.key == currency)) {
      throw new Error('Currency is not supported');
    } else {
      this.actualCurrency = currency;
      this.loadExchangeCurrency();
    }
  }

  loadExchangeCurrency() {
    let exchangeUrl = this.exchangeUrl.replace('#currency', this.actualCurrency);

    this.http.get<ExhangeRates>(exchangeUrl)
      .subscribe(data => {
        this.exchanges = data;
      });
  }

  getExchange(currency: string) {
    return this.exchanges[this.actualCurrency][currency];
  }
}
