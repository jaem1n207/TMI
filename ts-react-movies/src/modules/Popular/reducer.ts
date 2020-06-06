import {
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAIL,
} from "./actions";
import { Action, PopularState } from "./types";
import produce from "immer";

const initialState: PopularState = {
  loading: false,
  popular: [],
};

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
    default:
      return state;
  }
};

export default reducer;
