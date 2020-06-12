import {
  GET_RECOMMEND_REQUEST,
  GET_RECOMMEND_SUCCESS,
  GET_RECOMMEND_FAIL,
} from "./actions";
import { Action, RecommendState } from "./types";
import produce from "immer";

const initialState: RecommendState = {
  loading: false,
  recommend: [],
};

const reducer = (state = initialState, action: Action): RecommendState => {
  switch (action.type) {
    case GET_RECOMMEND_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_RECOMMEND_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.recommend = action.payload.recommend;
      });
    case GET_RECOMMEND_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
