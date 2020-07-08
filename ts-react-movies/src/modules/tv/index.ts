import { combineReducers } from "redux";

import tvTopRate, { TvTopRateState } from "./toprate";

const reducers = combineReducers({
  tvTopRate,
});

export default reducers;

export interface RootState {
  tvTopRate: TvTopRateState;
}
