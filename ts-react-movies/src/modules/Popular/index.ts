import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface PopularState {
  loading?: boolean;
  pages?: number;
  total_pages?: number;
  popular?: Array<Object>;
  morePopular?: Array<Object>;
}

export interface ObjectType {
  poster_path?: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  backdrop_path?: string; // 영화 배경이미지 (가로 큼)
  original_title: string; // 영어제목
  genre_ids?: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}

/* Actions */
const GET_POPULAR_REQUEST = "popular/GET_POPULAR_REQUEST";
const GET_POPULAR_SUCCESS = "popular/GET_POPULAR_SUCCESS";
const GET_POPULAR_FAIL = "popular/GET_POPULAR_FAIL";
const GET_MORE_POPULAR_REQUEST = "popular/GET_MORE_POPULAR_REQUEST";
const GET_MORE_POPULAR_SUCCESS = "popular/GET_MORE_POPULAR_SUCCESS";
const GET_MORE_POPULAR_FAIL = "popular/GET_MORE_POPULAR_FAIL";

/* Action Creator */
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

/* 더보기 */
export const getMorePopularRequest = (payload: PopularState) => ({
  type: GET_MORE_POPULAR_REQUEST,
  payload,
});
export const getMorePopularSuccess = (payload: PopularState) => ({
  type: GET_MORE_POPULAR_SUCCESS,
  payload,
});
export const getMorePopularFail = (payload: PopularState) => ({
  type: GET_MORE_POPULAR_FAIL,
  payload,
});

/* Api actions */
export const getPopular = (page: number = 1) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPopularRequest({ loading: true }));

      const result = await api.movies.popular();
      const popular = result.data.results;
      const pages = result.data.page;
      const total_pages = result.data.total_pages;

      dispatch(
        getPopularSuccess({ loading: false, popular, pages, total_pages })
      );
    } catch (e) {
      dispatch(getPopularFail({ loading: false }));
    }
  };
};

/* 더보기 */
export const getMorePopular = (page: number = 2) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getMorePopularRequest({ loading: true }));

      const result = await api.movies.popular();
      const morePopular = result.data.results;

      dispatch(getMorePopularSuccess({ loading: false, morePopular }));
    } catch (e) {
      dispatch(getMorePopularFail({ loading: false }));
    }
  };
};

/*  */
const initialState: PopularState = {
  loading: false,
  popular: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    popular: Array<ObjectType>;
    morePopular: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): PopularState => {
  switch (action.type) {
    case GET_POPULAR_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_POPULAR_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.popular = action.payload.popular;
      });
    case GET_POPULAR_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_MORE_POPULAR_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_MORE_POPULAR_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.morePopular = action.payload.morePopular;
      });
    case GET_MORE_POPULAR_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
