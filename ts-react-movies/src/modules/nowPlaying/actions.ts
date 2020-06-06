import { NowPlayingState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_NOW_REQUEST = "now/GET_NOW_REQUEST";
export const GET_NOW_SUCCESS = "now/GET_NOW_SUCCESS";
export const GET_NOW_FAIL = "now/GET_NOW_FAIL";

export const getNowRequest = (payload: NowPlayingState) => ({
  type: GET_NOW_REQUEST,
  payload,
});
export const getNowSuccess = (payload: NowPlayingState) => ({
  type: GET_NOW_SUCCESS,
  payload,
});
export const getNowFail = (payload: NowPlayingState) => ({
  type: GET_NOW_FAIL,
  payload,
});

export const getNowPlaying = (page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getNowRequest({ loading: true }));

      const result = await api.movies.nowPlaying(page);
      const nowPlaying = result.data.results;

      dispatch(getNowSuccess({ loading: false, nowPlaying }));
    } catch (e) {
      dispatch(getNowFail({ loading: false }));
    }
  };
};
