import { Component, OnInit} from "@angular/core";
import { Store } from '@ngrx/store';

import { Country } from "../models/country.model";
import { Observable } from 'rxjs';

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"]
})
export class CountryDetailsComponent implements OnInit {
  country: Country;
  countries$: Observable<{ country: Country }>;

  constructor(private countryStore: Store<{ countries: { country: Country } }>) {}

  ngOnInit() {
    this.countries$ = this.countryStore.select("countries");
    this.countries$.subscribe(data => {
     this.country = data.country;
    });    
  }
}
