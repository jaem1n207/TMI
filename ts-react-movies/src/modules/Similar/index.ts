import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface SimilarState {
  loading?: boolean;
  similar?: Array<Object>;
}

export interface ObjectType {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

/* Actions */
const GET_SIMILAR_REQUEST = "similar/GET_SIMILER_REQUEST";
const GET_SIMILAR_SUCCESS = "similar/GET_SIMILER_SUCCESS";
const GET_SIMILAR_FAIL = "similar/GET_SIMILER_FAIL";

/* Action Creator */
export const getSimilarRequest = (payload: SimilarState) => ({
  type: GET_SIMILAR_REQUEST,
  payload,
});
export const getSimilarSuccess = (payload: SimilarState) => ({
  type: GET_SIMILAR_SUCCESS,
  payload,
});
export const getSimilarFail = (payload: SimilarState) => ({
  type: GET_SIMILAR_FAIL,
  payload,
});

/* Api actions */
export const getSimilar = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getSimilarRequest({ loading: true }));

      const result = await api.movies.similar(id);
      const similar = result.data.results;

      dispatch(getSimilarSuccess({ loading: true, similar }));
    } catch (e) {
      dispatch(getSimilarFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: SimilarState = {
  loading: false,
  similar: [],
};

/* Action Type */
interface Action {
  type?: string;
  payload: {
    loading: boolean;
    similar: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): SimilarState => {
  switch (action.type) {
    case GET_SIMILAR_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_SIMILAR_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.similar = action.payload.similar;
      });
    case GET_SIMILAR_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
