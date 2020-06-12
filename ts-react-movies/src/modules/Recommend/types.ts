export interface RecommendState {
  loading?: boolean;
  recommend?: Array<Object>;
}

export interface ObjectType {
  id: number;
  vote_average: number;
  title: string;
  release_date: string;
  backdrop_path: string;
}

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    recommend: Array<ObjectType>;
  };
}
