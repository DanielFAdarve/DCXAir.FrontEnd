export class Journey {
    type: string; 
    flights: Flight[];
    totalPrice: number;
  
    constructor(type: string, flights: Flight[], totalPrice: number) {
      this.type = type;
      this.flights = flights;
      this.totalPrice = totalPrice;
    }
  }

  export class Flight {
    origin: string;
    destination: string;
    price: number;
    currency: string;
    transport: Transport[];
  
    constructor(
      origin: string,
      destination: string,
      price: number,
      currency: string,
      transport: Transport[]
    ) {
      this.origin = origin;
      this.destination = destination;
      this.price = price;
      this.currency = currency;
      this.transport = transport;
    }
  }
  
  export class Transport {
    flightCarrier: string; 
    flightNumber: string; 
  
    constructor(flightCarrier: string, flightNumber: string) {
      this.flightCarrier = flightCarrier;
      this.flightNumber = flightNumber;
    }
  }