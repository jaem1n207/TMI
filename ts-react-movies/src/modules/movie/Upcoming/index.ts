import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface UpcomingState {
  loading?: boolean;
  pages?: number;
  total_pages?: number;
  upcoming?: Array<Object>;
  moreUpcoming?: Array<Object>;
}

export interface ObjectType {
  poster_path: string;
  id: number;
  title: string;
  vote_average: string;
  release_date: string;
}

/* Actions */
const GET_UPCOMING_REQUEST = "upcoming/GET_UPCOMING_REQUEST";
const GET_UPCOMING_SUCCESS = "popular/GET_UPCOMING_SUCCESS";
const GET_UPCOMING_FAIL = "popular/GET_UPCOMING_FAIL";

/* Action Creator */
export const getUpcomingRequest = (payload: UpcomingState) => ({
  type: GET_UPCOMING_REQUEST,
  payload,
});
export const getUpcomingSuccess = (payload: UpcomingState) => ({
  type: GET_UPCOMING_SUCCESS,
  payload,
});
export const getUpcomingFail = (payload: UpcomingState) => ({
  type: GET_UPCOMING_FAIL,
  payload,
});

/* Api actions */
export const getUpcoming = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getUpcomingRequest({ loading: true }));

      const result = await api.movies.upcoming(page);
      const upcoming = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getUpcomingSuccess({ loading: false, upcoming, total_pages, pages })
      );
    } catch (e) {
      dispatch(getUpcomingFail({ loading: false }));
    }
  };
};

export const getMoreNowPlaying = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getUpcomingRequest({ loading: true }));

      const result = await api.movies.nowPlaying(page);
      const moreUpcoming = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getUpcomingSuccess({ loading: false, moreUpcoming, pages, total_pages })
      );
    } catch (e) {
      dispatch(getUpcomingFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: UpcomingState = {
  loading: false,
  pages: 1,
  total_pages: 5,
  upcoming: [],
  moreUpcoming: [],
};

interface Action {
  type?: string;

  payload: {
    loading: boolean;
    upcoming: Array<ObjectType>;
    moreUpcoming: Array<ObjectType>;
    pages?: number;
    total_pages?: number;
  };
}

/* Reducer */
const reducer = (state = initialState, action: Action): UpcomingState => {
  switch (action.type) {
    case GET_UPCOMING_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_UPCOMING_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.upcoming = action.payload.upcoming;
        draft.moreUpcoming = action.payload.moreUpcoming;
        draft.pages = action.payload.pages;
        draft.total_pages = action.payload.total_pages;
      });
    case GET_UPCOMING_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
