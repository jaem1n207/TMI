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

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    detail: Object;
    detailCast: Array<ObjectType>;
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
