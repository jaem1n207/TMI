import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface TopRateState {
  loading?: boolean;
  pages?: number;
  total_pages?: number;
  topRate?: Array<Object>;
  moreTopRate?: Array<Object>;
}

export interface ObjectType {
  poster_path: string;
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
}

/* Actions */
const GET_TOPRATE_REQUEST = "top/GET_TOPRATE_REQUEST";
const GET_TOPRATE_SUCCESS = "top/GET_TOPRATE_SUCCESS";
const GET_TOPRATE_FAIL = "top/GET_TOPRATE_FAIL";

/* Action Creator */
export const getTopRateRequest = (payload: TopRateState) => ({
  type: GET_TOPRATE_REQUEST,
  payload,
});
export const getTopRateSuccess = (payload: TopRateState) => ({
  type: GET_TOPRATE_SUCCESS,
  payload,
});
export const getTopRateFail = (payload: TopRateState) => ({
  type: GET_TOPRATE_FAIL,
  payload,
});

/* Api actions */
export const getTopRate = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTopRateRequest({ loading: true }));

      const result = await api.movies.toprate(page);
      const topRate = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getTopRateSuccess({ loading: false, topRate, pages, total_pages })
      );
    } catch (e) {
      dispatch(getTopRateFail({ loading: false }));
    }
  };
};

export const getMoreTopRate = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTopRateRequest({ loading: true }));

      const result = await api.movies.toprate(page);
      const moreTopRate = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getTopRateSuccess({ loading: false, moreTopRate, pages, total_pages })
      );
    } catch (e) {
      dispatch(getTopRateFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: TopRateState = {
  loading: false,
  pages: 1,
  total_pages: 100,
  topRate: [],
  moreTopRate: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    topRate: Array<ObjectType>;
    moreTopRate: Array<ObjectType>;
    pages?: number;
    total_pages?: number;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): TopRateState => {
  switch (action.type) {
    case GET_TOPRATE_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_TOPRATE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.topRate = action.payload.topRate;
        draft.moreTopRate = action.payload.moreTopRate;
        draft.pages = action.payload.pages;
        draft.total_pages = action.payload.total_pages;
      });
    case GET_TOPRATE_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
