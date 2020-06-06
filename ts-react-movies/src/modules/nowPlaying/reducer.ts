import { GET_NOW_REQUEST, GET_NOW_SUCCESS, GET_NOW_FAIL } from "./actions";
import { Action, NowPlayingState } from "./types";
import produce from "immer";

const initialState: NowPlayingState = {
  loading: false,
  page: 1,
  nowPlaying: [],
};

const reducer = (state = initialState, action: Action): NowPlayingState => {
  switch (action.type) {
    case GET_NOW_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_NOW_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.nowPlaying = action.payload.nowPlaying;
      });
    case GET_NOW_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
