import { combineReducers } from "redux";

import nowPlaying, { NowPlayingState } from "./nowPlaying";

const reducers = combineReducers({
  nowPlaying,
});

export default reducers;

export interface RootState {
  nowPlaying: NowPlayingState;
}
