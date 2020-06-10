export interface DetailState {
  loading?: boolean;
  detail?: Object;
}

/* export interface ObjectType {
  adult: boolean;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
} */

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    detail: Object;
  };
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Credits {
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
