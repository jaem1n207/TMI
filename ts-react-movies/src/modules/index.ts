import { combineReducers } from "redux";

import nowPlaying, { NowPlayingState } from "./nowPlaying";
import popular, { PopularState } from "./Popular";

const reducers = combineReducers({
  nowPlaying,
  popular,
});

export default reducers;

export interface RootState {
  nowPlaying: NowPlayingState;
  popular: PopularState;
}
