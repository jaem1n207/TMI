export interface SearchState {
  loading?: boolean;
  total_results?: any;
  searchResult?: Array<Object>;
}

export interface ObjectType {
  popularity?: number; // 인기
  vote_count?: number;
  video?: boolean;
  poster_path: string;
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  title: string;
  vote_average?: number;
  overview?: string; // 줄거리
  release_date: string;
}

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    total_results: number;
    searchResult: Array<ObjectType>;
  };
}
