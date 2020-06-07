import {
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAIL,
} from "./actions";
import { Action, VideosState } from "./types";
import produce from "immer";

const initialState: VideosState = {
  loading: false,
  videos: [],
};

const reducer = (state = initialState, action: Action): VideosState => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_VIDEOS_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.videos = action.payload.videos;
      });
    case GET_VIDEOS_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
