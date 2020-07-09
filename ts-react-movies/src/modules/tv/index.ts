import { combineReducers } from "redux";

import tvTopRate, { TvTopRateState } from "./tvTopRate";

const reducers = combineReducers({
  tvTopRate,
});

export default reducers;

export interface RootState {
  tvTopRate: TvTopRateState;
}
