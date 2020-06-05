import axios from "axios";

const defaultApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export default defaultApi;
