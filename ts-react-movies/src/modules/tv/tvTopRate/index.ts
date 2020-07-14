import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface TvTopRateState {
  loading?: boolean;
  pages?: number;
  total_pages?: number;
  tvTopRate?: Array<Object>;
  moreTvTopRate?: Array<Object>;
}

export interface ObjectType {
  poster_path: string;
  name: string;
  id: number;
  first_air_date: string;
  vote_average: number;
}

/* Actions */
const GET_TV_TOPRATE_REQUEST = "top/GET_TV_TOPRATE_REQUEST";
const GET_TV_TOPRATE_SUCCESS = "top/GET_TV_TOPRATE_SUCCESS";
// const GET_TV_MORE_TOPRATE = "top/GET_TV_MORE_TOPRATE";
const GET_TV_TOPRATE_FAIL = "top/GET_TV_TOPRATE_FAIL";

/* Action Creator */
export const getTvTopRateRequest = (payload: TvTopRateState) => ({
  type: GET_TV_TOPRATE_REQUEST,
  payload,
});
export const getTvTopRateSuccess = (payload: TvTopRateState) => ({
  type: GET_TV_TOPRATE_SUCCESS,
  payload,
});
export const getTvTopRateFail = (payload: TvTopRateState) => ({
  type: GET_TV_TOPRATE_FAIL,
  payload,
});

/* Api actions */
export const getTvTopRate = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTvTopRateRequest({ loading: true }));

      const result = await api.tvAPI.toprate(page);
      const tvTopRate = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getTvTopRateSuccess({ loading: false, tvTopRate, pages, total_pages })
      );
    } catch (e) {
      dispatch(getTvTopRateFail({ loading: false }));
    }
  };
};

export const getMoreTvTopRate = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getTvTopRateRequest({ loading: true }));

      const result = await api.movies.toprate(page);
      const moreTvTopRate = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getTvTopRateSuccess({
          loading: false,
          moreTvTopRate,
          pages,
          total_pages,
        })
      );
    } catch (e) {
      dispatch(getTvTopRateFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: TvTopRateState = {
  loading: false,
  pages: 1,
  total_pages: 99,
  tvTopRate: [],
  moreTvTopRate: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    tvTopRate: Array<ObjectType>;
    moreTvTopRate: Array<ObjectType>;
    pages?: number;
    total_pages?: number;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): TvTopRateState => {
  switch (action.type) {
    case GET_TV_TOPRATE_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_TV_TOPRATE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.tvTopRate = action.payload.tvTopRate;
        draft.moreTvTopRate = action.payload.moreTvTopRate;
        draft.pages = action.payload.pages;
        draft.total_pages = action.payload.total_pages;
      });

    case GET_TV_TOPRATE_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
