import { DetailState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_DETAIL_REQUEST = "popular/GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "popular/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAIL = "popular/GET_DETAIL_FAIL";

export const getDetailRequest = (payload: DetailState) => ({
  type: GET_DETAIL_REQUEST,
  payload,
});
export const getDetailSuccess = (payload: DetailState) => ({
  type: GET_DETAIL_SUCCESS,
  payload,
});
export const getDetailFail = (payload: DetailState) => ({
  type: GET_DETAIL_FAIL,
  payload,
});

export const getPopular = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getDetailRequest({ loading: true }));

      const result = await api.movies.detail(id);
      const detail = result.data;

      dispatch(getDetailSuccess({ loading: false, detail }));
    } catch (e) {
      dispatch(getDetailFail({ loading: false }));
    }
  };
};
