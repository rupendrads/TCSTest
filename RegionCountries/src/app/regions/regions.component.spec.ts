import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { regionsReducer } from "../store/regions.reducer";
import { countriesReducer } from "../store/countries.reducer";

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        StoreModule.forRoot({
          regions: regionsReducer,
          countries: countriesReducer
        })
      ],
      declarations: [RegionsComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have selected index to be -1 initially", () => {
    expect(component.selectedIndex).toEqual(-1);
  });

  it("should set selectedIndex to -1 on selecting region", () => {
    component.onRegion("Asia");
    expect(component.selectedIndex).toEqual(-1);
  });

  it("should set selectedIndex to be less than 1 of argument index on selecting country", () => {
    component.onLoadCountry(1);
    expect(component.selectedIndex).toEqual(0);
  });
});
