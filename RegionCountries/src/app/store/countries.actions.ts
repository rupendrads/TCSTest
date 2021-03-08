import { createAction, props } from '@ngrx/store';
import { Country } from "src/app/models/country.model";

export const updateCountries = createAction(
  'UpdateCountries',
  props<{ countries: Country[] }>()
);

export const getCountry = createAction(
  'GetCountry',
  props<{ index: number }>()
);
