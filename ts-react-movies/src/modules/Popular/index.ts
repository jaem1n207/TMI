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

/* Api actions */
export const getPopular = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPopularRequest({ loading: true }));

      const result = await api.movies.popular(page);
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
export const getMorePopular = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getPopularRequest({ loading: true }));

      const result = await api.movies.popular(page);
      const morePopular = result.data.results;
      const pages = result.data.pages;
      const total_pages = result.data.total_pages;

      dispatch(
        getPopularSuccess({ loading: false, morePopular, pages, total_pages })
      );
    } catch (e) {
      dispatch(getPopularFail({ loading: false }));
    }
  };
};

/*  */
const initialState: PopularState = {
  loading: false,
  popular: [],
  pages: 1,
  total_pages: 99,
  morePopular: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    popular: Array<ObjectType>;
    morePopular: Array<ObjectType>;
    pages?: number;
    total_pages?: number;
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
        draft.morePopular = action.payload.morePopular;
        draft.pages = action.payload.pages;
        draft.total_pages = action.payload.total_pages;
      });
    case GET_POPULAR_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });

    default:
      return state;
  }
};

export default reducer;
