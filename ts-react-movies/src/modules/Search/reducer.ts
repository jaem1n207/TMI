import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from "./actions";
import { Action, SearchState } from "./types";
import produce from "immer";

const initialState: SearchState = {
  loading: false,
  searchResult: [],
};

const reducer = (state = initialState, action: Action): SearchState => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_SEARCH_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
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
