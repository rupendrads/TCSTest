import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Country } from "../models/country.model";
import { CountryService } from "../services/country.service";
import { Region } from "../models/region.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  regions$: Observable<{ regions: Region[] }>;
  countries$: Observable<{ countries: Country[] }>;
  
  selectedIndex: number;

  constructor(
    private countryService: CountryService,
    private regionStore: Store<{ regions: { regions: Region[] } }>,
    private countryStore: Store<{ countries: { countries: Country[] } }>
  ) {}

  ngOnInit() {
    this.selectedIndex = -1;
    this.regions$ = this.regionStore.select("regions");              
    this.countries$ = this.countryStore.pipe(select("countries"));
    this.countries$.subscribe();
  }

  onRegion(region: string) {
    this.selectedIndex = -1;

    if (region) {
      this.countryService.getCountries(region);
    }
  }

  onLoadCountry(index: number){
    this.selectedIndex = index - 1;
    this.countryService.getCountry(this.selectedIndex);
  }
}
