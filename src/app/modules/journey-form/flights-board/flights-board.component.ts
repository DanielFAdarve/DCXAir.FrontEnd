import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Currencies, Currency } from 'src/app/model/Currencies';
import { Journey } from 'src/app/model/Journey';
import { CurrenciesService } from 'src/app/services/currencies.service';
import { FligthsService } from 'src/app/services/fligths.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flights-board',
  templateUrl: './flights-board.component.html',
  styleUrls: ['./flights-board.component.scss']
})
export class FlightsBoardComponent implements OnInit {
  origin: string = '';
  destination: string = '';
  fetchingFlights: boolean = false;
  actualCurrency: string = environment.actualCurrency;
  currencies: Currencies = []; 
  exchangeCurrency: string = environment.actualCurrency; 
  exchangeRate?: number; 
  flights?: Journey[]; 
  journeys: Journey[] = []; 
  totalRoutes: number = 0; 


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flightsService: FligthsService,
    private currencyService: CurrenciesService
  ) {}

  ngOnInit(): void {

    this.currencies = this.currencyService.getCurrencies().sort((a, b) => a.name.localeCompare(b.name));


    this.route.queryParamMap.subscribe((params) => {
      this.origin = String(params.get('origin') || '');
      this.destination = String(params.get('destination') || '');

      if (!this.origin || !this.destination) {
        this.router.navigate(['..']);
        return;
      }

      this.fetchPath();
    });
  }

  fetchPath(): void {
    this.fetchingFlights = true;
  
    if (!this.origin || !this.destination) {
      this.router.navigate(['..']);
      return;
    }
  
    // Cambiar el tipo de viaje en la solicitud para uno o dos trayectos
    const journeyType = this.route.snapshot.queryParams['journeyType'] || 'one-way';
  
    this.flightsService.fetchJourneyPath(this.origin, this.destination, journeyType)
      .subscribe(response => {
        this.fetchingFlights = false;
        this.flights = response.journeys; 
      });
  }


  exhangeCurrency(value: number): string {
    if (!this.exchangeCurrency || this.exchangeCurrency === this.actualCurrency) {
      return value.toFixed(2); 
    }

    let rate = this.currencyService.getExchange(this.exchangeCurrency);
    if (!rate) return value.toFixed(2); 

    return (value * rate).toFixed(2); 
  }

  getISOCurrency(): string {
    const currency = this.currencies.find(it => it.key === this.exchangeCurrency);
    return currency ? currency.key.toLocaleUpperCase() : this.actualCurrency;
  }
}
