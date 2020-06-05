import defaultApi from "./defaultApi";
import { MOVIE_API_KEY } from "config/config.json";

const DEFAULT_ADD = `api_key=${MOVIE_API_KEY}&language=ko-KR&page=1&region=kr`;

export const getNowPlaying = (page = 1, language = "en-US") => {
  return defaultApi.get(
    `now_playing?api_key=${MOVIE_API_KEY}&language=${language}&page=${page}`
  );
};
