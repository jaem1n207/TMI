import defaultApi from "./defaultApi";
import { MOVIE_API_KEY } from "config/config.json";

export const movies = {
  /* movie trailer */
  videos: (id: string) =>
    defaultApi.get(`movie/${id}/videos?api_key=${MOVIE_API_KEY}&language=ko`),
  /* pupular movies */
  popular: () =>
    defaultApi.get(
      `movie/popular?api_key=${MOVIE_API_KEY}&language=ko&region=KR`
    ),
  /* coming soon */
  upcoming: () => defaultApi.get("movie/upcoming"),
  /* show noyplaying movies */
  nowPlaying: (page: number) =>
    defaultApi.get(
      `movie/now_playing?api_key=${MOVIE_API_KEY}&language=ko&page=${page}&region=KR`
    ),
  /* search movies */
  search: (text: string) =>
    defaultApi.get(
      `search/movie?api_key=${MOVIE_API_KEY}&language=ko&query=${text}&page=1&include_adult=true&include_adult=false&region=KR`
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
};
