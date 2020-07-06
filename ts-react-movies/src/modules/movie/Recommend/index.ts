import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface ObjectType {
  id: number;
  vote_average: number;
  title: string;
  release_date: string;
  backdrop_path: string;
}

/* Actions */
const GET_RECOMMEND_REQUEST = "popular/GET_RECOMMEND_REQUEST";
const GET_RECOMMEND_SUCCESS = "popular/GET_RECOMMEND_SUCCESS";
const GET_RECOMMEND_FAIL = "popular/GET_RECOMMEND_FAIL";

export interface RecommendState {
  loading?: boolean;
  recommend?: Array<Object>;
}
/* Action Creator */
export const getRecommendRequest = (payload: RecommendState) => ({
  type: GET_RECOMMEND_REQUEST,
  payload,
});
export const getRecommendSuccess = (payload: RecommendState) => ({
  type: GET_RECOMMEND_SUCCESS,
  payload,
});
export const getRecommendFail = (payload: RecommendState) => ({
  type: GET_RECOMMEND_FAIL,
  payload,
});

// api actions
export const getRecommend = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getRecommendRequest({ loading: true }));

      const result = await api.movies.recommendation(id);
      const recommend = result.data.results;

      dispatch(getRecommendSuccess({ loading: false, recommend }));
    } catch (e) {
      dispatch(getRecommendFail({ loading: false }));
    }
  };
};

// initialState
const initialState: RecommendState = {
  loading: false,
  recommend: [],
};

// reducer
interface Action {
  type?: string;
  payload: {
    loading: boolean;
    recommend: Array<ObjectType>;
  };
}

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
