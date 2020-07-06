import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface CastDetailState {
  loading?: boolean;
  castInfo?: Object /* gender(1: 여자), birthday, name, deathday, place_of_birth, profile_path,  */;
  castCredits?: Array<ObjectType>;
}
export interface ObjectType {
  poster_path: string;
  id: number;
  title: string;
}

/* Actions */
const GET_CAST_DETAIL_REQUEST = "detailcast/GET_CAST_DETAIL_REQUEST";
const GET_CAST_DETAIL_SUCCESS = "detailcast/GET_CAST_DETAIL_SUCCESS";
const GET_CAST_DETAIL_FAIL = "detailcast/GET_CAST_DETAIL_FAIL";

/* Action Creator */
export const getCastDetailRequest = (payload: CastDetailState) => ({
  type: GET_CAST_DETAIL_REQUEST,
  payload,
});
export const getCastDetailSuccess = (payload: CastDetailState) => ({
  type: GET_CAST_DETAIL_SUCCESS,
  payload,
});
export const getCastDetailFail = (payload: CastDetailState) => ({
  type: GET_CAST_DETAIL_FAIL,
  payload,
});

/* Api action */
export const getCastDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getCastDetailRequest({ loading: true }));

      const result = await api.movies.detailCast(id);
      const castInfo = result.data;
      const castCredits = result.data.credits.cast;

      dispatch(getCastDetailSuccess({ loading: false, castInfo, castCredits }));
    } catch (e) {
      dispatch(getCastDetailFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: CastDetailState = {
  loading: false,
  castInfo: {},
  castCredits: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    castInfo: Object;
    castCredits: Array<ObjectType>;
  };
}

/* reducer */
const reducer = (state = initialState, action: Action): CastDetailState => {
  switch (action.type) {
    case GET_CAST_DETAIL_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case GET_CAST_DETAIL_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.castInfo = action.payload.castInfo;
        draft.castCredits = action.payload.castCredits;
      });
    case GET_CAST_DETAIL_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
