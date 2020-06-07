import { VideosState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_VIDEOS_REQUEST = "now/GET_VIDEOS_REQUEST";
export const GET_VIDEOS_SUCCESS = "now/GET_VIDEOS_SUCCESS";
export const GET_VIDEOS_FAIL = "now/GET_VIDEOS_FAIL";

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

export const getVideos = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getVideosRequest({ loading: true }));

      const result = await api.movies.videos(id);
      const videos = result.data.results;

      dispatch(getVideosSuccess({ loading: false, videos }));
    } catch (e) {
      dispatch(getVideosFail({ loading: false }));
    }
  };
};
