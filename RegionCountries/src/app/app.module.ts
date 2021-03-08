import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownDirective } from "./dropdown.directive";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { RegionsComponent } from './regions/regions.component';
import { regionsReducer } from "./store/regions.reducer";
import * as countriesReducer from "./store/countries.reducer";

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    CountryDetailsComponent,
    RegionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      regions: regionsReducer,
      countries: countriesReducer.reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
