import { Action, createReducer, on } from '@ngrx/store';
import * as CountriesActions from "./countries.actions";

import { Country } from '../models/country.model';

export const initialState = {
  countries: [],
  country: Country
};

export const countriesReducer = createReducer(
  initialState,
  on(CountriesActions.updateCountries, (state, { countries }) => ({ 
    ...state,
    countries: countries
  })),
  on(CountriesActions.getCountry, (state, { index }) => ({
    ...state,
    country: state.countries[index]
  }))
);

export function reducer(state: { country: any, countries: any[] } | undefined, action: Action){
  return countriesReducer(state, action);
}