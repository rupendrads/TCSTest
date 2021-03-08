import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Country } from "../models/country.model";
import { Store } from "@ngrx/store";
import * as CountriesActions from "../store/countries.actions";

@Injectable({ providedIn: "root" })
export class CountryService {
   constructor(
    private http: HttpClient,
    private store: Store<{ countries: Country[], country: Country }>
  ) {}

  getCountries(region: string) {
    const url = "https://restcountries.eu/rest/v2/region/" + region;

    this.http
      .get(url)
      .pipe(
        map(responseData => {
          const countries: Country[] = Object.keys(responseData).map(
            key => responseData[key]
          );
          return countries;
        })
      )
      .subscribe(data => {
        this.store.dispatch(CountriesActions.updateCountries({ countries: data}));
      });
  }

  getCountry(index: number){
    this.store.dispatch(CountriesActions.getCountry({ index: index}));
  }
}
