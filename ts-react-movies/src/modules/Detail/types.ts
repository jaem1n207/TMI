export interface DetailState {
  loading?: boolean;
  detail?: Object;
}

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    detail: Object;
  };
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
}

export interface Cast {
  cast_id?: number;
  character: string; // 역할
  credit_id?: string;
  gender: number; // 1:여자 2: 남자
  id?: number;
  name: string; // 이름
  order?: number;
  profile_path: null | string;
}

export interface GenresType {
  id?: string;
  name: string;
}
