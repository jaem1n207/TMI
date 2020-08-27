import { Dispatch } from "redux";
import * as api from "lib/api";
import produce from "immer";

/* Types */
export interface DetailState {
  loading?: boolean;
  detail?: Object;
  detailCast?: Array<ObjectType>;
}
export interface ObjectType {
  cast_id?: number;
  character: string; // 역할
  credit_id?: string;
  gender: number; // 1:여자 2: 남자
  id: number;
  name: string; // 이름
  order?: number;
  profile_path: null | string;
}

export interface BelongsToCollectionType {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface ProductionCompanyType {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface CreditsType {
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  cast_id?: number;
  character: string; // 역할
  credit_id?: string;
  gender: number; // 1:여자 2: 남자
  id: number;
  name: string; // 이름
  order?: number;
  profile_path: null | string;
}

export interface Crew {
  credit_id: string;
  department: Department;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: null | string;
}

export enum Department {
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Lighting = "Lighting",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

export interface GenresType {
  id?: string;
  name: string;
}

/* Actions */
const GET_DETAIL_REQUEST = "detail/GET_DETAIL_REQUEST";
const GET_DETAIL_SUCCESS = "detail/GET_DETAIL_SUCCESS";
const GET_DETAIL_FAIL = "detail/GET_DETAIL_FAIL";

/* Action Creator */
export const getDetailRequest = (payload: DetailState) => ({
  type: GET_DETAIL_REQUEST,
  payload,
});
export const getDetailSuccess = (payload: DetailState) => ({
  type: GET_DETAIL_SUCCESS,
  payload,
});
export const getDetailFail = (payload: DetailState) => ({
  type: GET_DETAIL_FAIL,
  payload,
});

/* Api action */
export const getDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(getDetailRequest({ loading: true }));

      const result = await api.movies.detail(id);
      const detail = result.data;
      const detailCast = result.data.credits;

      dispatch(getDetailSuccess({ loading: false, detail, detailCast }));
    } catch (e) {
      dispatch(getDetailFail({ loading: false }));
    }
  };
};

/* initialState */
const initialState: DetailState = {
  loading: false,
  detail: {},
  detailCast: [],
};

interface Action {
  type?: string;
  payload: {
    loading: boolean;
    detail: Object;
    detailCast: Array<ObjectType>;
  };
}

/* reducer */
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
