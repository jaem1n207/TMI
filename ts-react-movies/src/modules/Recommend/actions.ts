import { RecommendState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_RECOMMEND_REQUEST = "popular/GET_RECOMMEND_REQUEST";
export const GET_RECOMMEND_SUCCESS = "popular/GET_RECOMMEND_SUCCESS";
export const GET_RECOMMEND_FAIL = "popular/GET_RECOMMEND_FAIL";

export const getRecommendRequest = (payload: RecommendState) => ({
  type: GET_RECOMMEND_REQUEST,
  payload,
});
export const getRecommendSuccess = (payload: RecommendState) => ({
  type: GET_RECOMMEND_SUCCESS,
  payload,
});
export const getRecommendFail = (payload: RecommendState) => ({
  type: GET_RECOMMEND_FAIL,
  payload,
});

export const getRecommend = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getRecommendRequest({ loading: true }));

      const result = await api.movies.recommendation(id);
      const recommend = result.data.results;

      dispatch(getRecommendSuccess({ loading: false, recommend }));
    } catch (e) {
      dispatch(getRecommendFail({ loading: false }));
    }
  };
};
