import { combineReducers } from "redux";

import nowPlaying, { NowPlayingState } from "./nowPlaying";
import popular, { PopularState } from "./Popular";
import videos, { VideosState } from "./videos";

const reducers = combineReducers({
  nowPlaying,
  popular,
  videos,
});

export default reducers;

export interface RootState {
  nowPlaying: NowPlayingState;
  popular: PopularState;
  videos: VideosState;
}
