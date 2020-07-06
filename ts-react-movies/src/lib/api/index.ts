import defaultApi from "./defaultApi";
import { MOVIE_API_KEY } from "config/config.json";

export const movies = {
  /* movie trailer */
  videos: (id: string) =>
    defaultApi.get(`movie/${id}/videos?api_key=${MOVIE_API_KEY}&language=ko`),
  /* pupular movies */
  popular: (page: number) =>
    defaultApi.get(
      `movie/popular?api_key=${MOVIE_API_KEY}&language=ko&page=${page}&region=KR`
    ),
  /* coming soon */
  upcoming: (page: number) =>
    defaultApi.get(
      `movie/upcoming?api_key=${MOVIE_API_KEY}&language=ko&page=${page}&region=KR`
    ),
  /* show noyplaying movies */
  nowPlaying: (page: number) =>
    defaultApi.get(
      `movie/now_playing?api_key=${MOVIE_API_KEY}&language=ko&page=${page}&region=KR`
    ),
  /* search movies */
  search: (text: string) =>
    defaultApi.get(
      `search/movie?api_key=${MOVIE_API_KEY}&language=ko&query=${text}&page=1&include_adult=true&region=KR`
    ),
  /* show detail movie */
  detail: (id: string) =>
    defaultApi.get(
      `movie/${id}?api_key=${MOVIE_API_KEY}&language=ko&append_to_response=credits`
    ),
  recommendation: (id: string) =>
    defaultApi.get(
      `movie/${id}/recommendations?api_key=${MOVIE_API_KEY}&language=ko&page=1`
    ),
  toprate: (page: number) =>
    defaultApi.get(
      `movie/top_rated?api_key=${MOVIE_API_KEY}&language=ko&page=${page}&region=KR`
    ),
  similar: (id: string) =>
    defaultApi.get(
      `movie/${id}/similar?api_key=${MOVIE_API_KEY}&language=ko&page=1`
    ),
  detailCast: (id: string) =>
    defaultApi.get(
      `person/${id}?api_key=${MOVIE_API_KEY}&language=ko&append_to_response=credits`
    ),
};

export const tvAPI = {
  /* 
    TMDB에서 가장 인기있는 TV 프로그램 목록을 가져옵니다.
  */
  toprate: (page: number) =>
    defaultApi.get(
      `tv/top_rated?api_key=${MOVIE_API_KEY}&language=ko&page=${page}`
    ),
  /* 
    현재 방송중인 쇼 목록을 가져옵니다. 
    이 쿼리는 다음 7 일 동안 방송 된 에피소드가있는 TV 프로그램을 찾습니다. 
  */
  onTheAir: (page: number) =>
    defaultApi.get(
      `tv/on_the_air?api_key=${MOVIE_API_KEY}&language=ko&page=${page}`
    ),
  /* 
    오늘 방영되는 TV 프로그램 목록을 가져옵니다. 
    이 쿼리는 현재 방송 시간을 지원하지 않기 때문에 순전히 하루를 기준으로합니다. 
    요일 계산을 오프셋 할 시간대를 지정할 수 있습니다. 
    지정된 시간대가 없으면이 쿼리의 기본값은 EST (Eastern Time UTC-05 : 00)입니다.
  */
  airingToday: (page: number) =>
    defaultApi.get(
      `tv/airing_today?api_key=${MOVIE_API_KEY}&language=ko&page=${page}`
    ),
  /* 
    TMDb에서 현재 인기있는 TV 프로그램 목록을 가져옵니다.. 
    이 목록은 매일 업데이트됩니다.
  */
  popular: (page: number) =>
    defaultApi.get(
      `tv/popular?api_key=${MOVIE_API_KEY}&language=ko&page=${page}`
    ),
};
