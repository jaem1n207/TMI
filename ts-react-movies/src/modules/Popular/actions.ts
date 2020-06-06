import { PopularState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_POPULAR_REQUEST = "popular/GET_POPULAR_REQUEST";
export const GET_POPULAR_SUCCESS = "popular/GET_POPULAR_SUCCESS";
export const GET_POPULAR_FAIL = "popular/GET_POPULAR_FAIL";

export const getPopularRequest = (payload: PopularState) => ({
  type: GET_POPULAR_REQUEST,
  payload,
});
export const getPopularSuccess = (payload: PopularState) => ({
  type: GET_POPULAR_SUCCESS,
  payload,
});
export const getPopularFail = (payload: PopularState) => ({
  type: GET_POPULAR_FAIL,
  payload,
});

export const getPopular = (page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPopularRequest({ loading: true }));

      const result = await api.movies.popular();
      const popular = result.data.results;

      dispatch(getPopularSuccess({ loading: false, popular }));
    } catch (e) {
      dispatch(getPopularFail({ loading: false }));
    }
  };
};
