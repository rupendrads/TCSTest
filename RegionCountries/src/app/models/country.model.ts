import { Currency } from "./currency.model";

export class Country {
  constructor(
    public name: string,
    public capital: string,
    public population: string,
    public currencies: Currency[],
    public flag: string
  ) {}
}
