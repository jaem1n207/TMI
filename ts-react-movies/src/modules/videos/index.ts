import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface VideosState {
  loading?: boolean;
  videos?: Array<Object>;
  movieKeys?: string;
}

export interface ObjectType {
  id?: string;
  key: string;
  name?: string;
  site?: string;
  size?: number;
  type?: string;
}

/* Actions */
const GET_VIDEOS_REQUEST = "now/GET_VIDEOS_REQUEST";
const GET_VIDEOS_SUCCESS = "now/GET_VIDEOS_SUCCESS";
const GET_VIDEOS_FAIL = "now/GET_VIDEOS_FAIL";

/* Action Creators */
export const getVideosRequest = (payload: VideosState) => ({
  type: GET_VIDEOS_REQUEST,
  payload,
});
export const getVideosSuccess = (payload: VideosState) => ({
  type: GET_VIDEOS_SUCCESS,
  payload,
});
export const getVideosFail = (payload: VideosState) => ({
  type: GET_VIDEOS_FAIL,
  payload,
});

/* Api actions */
export const getVideos = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getVideosRequest({ loading: true }));

      const result = await api.movies.videos(id);
      const videos = result.data.results;
      const movieKeys = videos[0].key;

      dispatch(getVideosSuccess({ loading: false, videos, movieKeys }));
    } catch (e) {
      dispatch(getVideosFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: VideosState = {
  loading: false,
  videos: [],
  movieKeys: "",
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    movieKeys: string;
    videos: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): VideosState => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.videos = action.payload.videos;
      });
    case GET_VIDEOS_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.videos = action.payload.videos;
        draft.movieKeys = action.payload.movieKeys;
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
