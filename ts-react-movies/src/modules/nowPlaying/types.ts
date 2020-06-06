import genre from "lib/types/genre";

export interface NowPlayingState {
  readonly type?: string;
  readonly loading?: boolean;
  page?: number;
  total_pages?: number;
  readonly nowPlaying?: Object;
}

export interface ObjectType {
  poster_path: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  adult: boolean; // 청소년 관람 불가 or 가능 (boolean)
  backdrop_path: string; // 영화 배경이미지 (가로 큼)
  original_language?: string; // 언어
  original_title: string; // 영어제목
  genre_ids: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}

export interface Action {
  type: string;
  page?: number;
  total_pages?: number;
  payload: {
    loading: boolean;
    nowPlaying: Array<ObjectType>;
  };
}
