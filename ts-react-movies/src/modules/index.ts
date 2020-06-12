import { combineReducers } from "redux";

import nowPlaying, { NowPlayingState } from "./nowPlaying";
import popular, { PopularState } from "./Popular";
import videos, { VideosState } from "./videos";
import searchResult, { SearchState } from "./Search";
import detail, { DetailState } from "./Detail";
import recommend, { RecommendState } from "./Recommend";

const reducers = combineReducers({
  nowPlaying,
  popular,
  videos,
  searchResult,
  detail,
  recommend,
});

export default reducers;

export interface RootState {
  nowPlaying: NowPlayingState;
  popular: PopularState;
  videos: VideosState;
  searchResult: SearchState;
  detail: DetailState;
  recommend: RecommendState;
}
