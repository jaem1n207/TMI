import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";
import reducer from "modules/nowPlaying";

/* Types */
export interface UpcomingState {
  loading?: boolean;
  page?: number;
  total_pages?: number;
  upcoming?: Array<Object>;
}

interface Action {
  type?: string;
  page?: number;
  total_pages?: number;
  payload: {
    loading: boolean;
    upcoming: Array<ObjectType>;
  };
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

/* Actions Creators */
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

export const getUpcoming = (page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getUpcomingRequest({ loading: true }));

      const result = await api.movies.upcoming(page);
      const upcoming = result.data.results;

      dispatch(getUpcomingSuccess({ loading: false, upcoming }));
    } catch (e) {
      dispatch(getUpcomingFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: UpcomingState = {
  loading: false,
  page: 1,
  upcoming: [],
};

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
