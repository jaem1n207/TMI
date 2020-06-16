import { SearchState } from "./types";
import { Dispatch } from "redux";
import * as api from "lib/api";

export const GET_SEARCH_REQUEST = "search/GET_SEARCH_REQUEST";
export const GET_SEARCH_SUCCESS = "search/GET_SEARCH_SUCCESS";
export const GET_SEARCH_FAIL = "search/GET_SEARCH_FAIL";

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
