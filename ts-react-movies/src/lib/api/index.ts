import defaultApi from "./defaultApi";
import Axios from "axios";
import { MOVIE_API_KEY } from "config/config.json";

export const movies = {
  /* movie trailer */
  videos: (id: string) =>
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${MOVIE_API_KEY}&language=ko`
    ),
  /* pupular movies */
  popular: () =>
    Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=ko&region=KR`
    ),
  /* coming soon */
  upcoming: () => defaultApi.get("movie/upcoming"),
  /* show noyplaying movies */
  nowPlaying: (page: number) =>
    Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}&language=ko&region=KR`
    ),
  /* search movies */
  search: (text: string) =>
    defaultApi.get("search/movie", {
      params: {
        query: text,
      },
    }),
  /* show detail movie */
  detail: (id: string) =>
    defaultApi.get(`movie/${id}`, {
      params: {
        append_to_response: "credits, videos", // show cast, trailer
      },
    }),
};
