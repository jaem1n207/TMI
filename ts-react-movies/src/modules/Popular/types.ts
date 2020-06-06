export interface PopularState {
  loading?: boolean;
  popular?: Array<Object>;
}

export interface ObjectType {
  poster_path?: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  backdrop_path?: string; // 영화 배경이미지 (가로 큼)
  original_title: string; // 영어제목
  genre_ids?: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    popular: Array<ObjectType>;
  };
}
