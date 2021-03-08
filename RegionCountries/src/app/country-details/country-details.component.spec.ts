import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from "@angular/core/testing";

import { StoreModule, Store } from "@ngrx/store";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { countriesReducer } from "../store/countries.reducer";
import { CountryDetailsComponent } from "./country-details.component";
import { Country } from '../models/country.model';

describe("CountryDetailsComponent", () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          countries: countriesReducer
        })
      ],
      declarations: [CountryDetailsComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should get country from the store", () => {    
    expect(component.country).not.toBeNull();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
