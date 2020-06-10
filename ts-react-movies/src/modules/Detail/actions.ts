import { DetailState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_DETAIL_REQUEST = "detail/GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "detail/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAIL = "detail/GET_DETAIL_FAIL";

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

export const getDetail = (id: string) => {
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
