import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface NowPlayingState {
  loading?: boolean;
  pages?: number;
  total_pages?: number;
  nowPlaying?: Array<Object>;
  morePlaying?: Array<object>;
}

export interface ObjectType {
  poster_path: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  adult: boolean; // 청소년 관람 불가 or 가능 (boolean)
  backdrop_path: string; // 영화 배경이미지 (가로 큼)
  original_language?: string; // 언어
  original_title: string; // 영어제목
  genre_ids?: number[]; // 장르
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
export const getNowPlaying = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getNowRequest({ loading: true }));

      const result = await api.movies.nowPlaying(page);
      const nowPlaying = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getNowSuccess({ loading: false, nowPlaying, pages, total_pages })
      );
    } catch (e) {
      dispatch(getNowFail({ loading: false }));
    }
  };
};

export const getMoreNowPlaying = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getNowRequest({ loading: true }));

      const result = await api.movies.nowPlaying(page);
      const morePlaying = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getNowSuccess({ loading: false, morePlaying, pages, total_pages })
      );
    } catch (e) {
      dispatch(getNowFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: NowPlayingState = {
  loading: false,
  pages: 1,
  total_pages: 5,
  nowPlaying: [],
  morePlaying: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    nowPlaying: Array<ObjectType>;
    morePlaying: Array<ObjectType>;
    pages?: number;
    total_pages?: number;
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
        draft.morePlaying = action.payload.morePlaying;
        draft.pages = action.payload.pages;
        draft.total_pages = action.payload.total_pages;
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
