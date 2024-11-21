export class Currency {
    [key: string]: string;
}

export class Rate {
    [key: string]: number;
}

export class Currencies extends Array<{ name: string, key: string }> { }

export class ExhangeRates {
    [key: string]: Rate;
}