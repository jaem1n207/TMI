import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface SearchState {
  loading?: boolean;
  total_results?: any;
  searchResult?: Array<Object>;
}

export interface ObjectType {
  popularity?: number; // 인기
  vote_count?: number;
  video?: boolean;
  poster_path: string;
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  title: string;
  vote_average?: number;
  overview?: string; // 줄거리
  release_date: string;
}

/* Actions */
const GET_SEARCH_REQUEST = "search/GET_SEARCH_REQUEST";
const GET_SEARCH_SUCCESS = "search/GET_SEARCH_SUCCESS";
const GET_SEARCH_FAIL = "search/GET_SEARCH_FAIL";

/* Action Creator */
export const getSearchRequest = (payload: SearchState) => ({
  type: GET_SEARCH_REQUEST,
  payload,
});
export const getSearchSuccess = (payload: SearchState) => ({
  type: GET_SEARCH_SUCCESS,
  payload,
});
export const getSearchFail = (payload: SearchState) => ({
  type: GET_SEARCH_FAIL,
  payload,
});

/* Api actions */
export const getSearch = (text: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getSearchRequest({ loading: true }));

      const result = await api.movies.search(text);
      const total_results = result.data;
      const searchResult = result.data.results;

      dispatch(
        getSearchSuccess({ loading: false, searchResult, total_results })
      );
    } catch (e) {
      dispatch(getSearchFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: SearchState = {
  loading: false,
  total_results: 0,
  searchResult: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    total_results: number;
    searchResult: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): SearchState => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_SEARCH_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.total_results = action.payload.total_results;
        draft.searchResult = action.payload.searchResult;
      });
    case GET_SEARCH_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
