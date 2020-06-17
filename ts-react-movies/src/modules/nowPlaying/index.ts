import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface NowPlayingState {
  loading?: boolean;
  page?: number;
  total_pages?: number;
  nowPlaying?: Array<Object>;
}

export interface ObjectType {
  poster_path: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  adult: boolean; // 청소년 관람 불가 or 가능 (boolean)
  backdrop_path: string; // 영화 배경이미지 (가로 큼)
  original_language?: string; // 언어
  original_title: string; // 영어제목
  genre_ids: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}

/* Actions */
const GET_NOW_REQUEST = "now/GET_NOW_REQUEST";
const GET_NOW_SUCCESS = "now/GET_NOW_SUCCESS";
const GET_NOW_FAIL = "now/GET_NOW_FAIL";

/* Action Creator */
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

/* Api actions */
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

export const getMoreNowPlaying = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getNowRequest({ loading: true }));

      const result = await api.movies.nowPlaying(page + 1);
      const nowPlaying = result.data.results;

      dispatch(getNowSuccess({ loading: false, nowPlaying }));
    } catch (e) {
      dispatch(getNowFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: NowPlayingState = {
  loading: false,
  page: 1,
  nowPlaying: [],
};

interface Action {
  type?: string;
  page?: number;
  total_pages?: number;
  payload: {
    loading: boolean;
    nowPlaying: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): NowPlayingState => {
  switch (action.type) {
    case GET_NOW_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_NOW_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.nowPlaying = action.payload.nowPlaying;
      });
    case GET_NOW_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
