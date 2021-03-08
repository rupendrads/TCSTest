import * as RegionActions from "./regions.actions";
import { Region } from "src/app/models/region.model";

const initialState = {
  regions: [new Region("Europe"), new Region("Asia")]
};

export function regionsReducer(
  state = initialState,
  action: RegionActions.RegionsActions
) {
  switch (action.type) { 
    default:
      return state;
  }
}
