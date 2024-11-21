import { Journey } from './Journey';

export class APIResponse {
  origin: string;
  destination: string;
  currency: string;
  totalRoutes: number;
  journeys: Journey[]; 

  constructor(
    origin: string,
    destination: string,
    currency: string,
    totalRoutes: number,
    journeys: Journey[]
  ) {
    this.origin = origin;
    this.destination = destination;
    this.currency = currency;
    this.totalRoutes = totalRoutes;
    this.journeys = journeys;
  }
}

