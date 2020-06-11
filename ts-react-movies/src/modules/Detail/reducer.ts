import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAIL,
} from "./actions";
import { Action, DetailState } from "./types";
import produce from "immer";

const initialState: DetailState = {
  loading: false,
  detail: {},
  detailCast: [],
};

const reducer = (state = initialState, action: Action): DetailState => {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_DETAIL_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.detail = action.payload.detail;
        draft.detailCast = action.payload.detailCast;
      });
    case GET_DETAIL_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
