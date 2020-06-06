import axios from "axios";
import { MOVIE_API_KEY } from "config/config.json";

const defaultApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: MOVIE_API_KEY,
    language: "ko",
    region: "KR",
  },
});

export default defaultApi;
