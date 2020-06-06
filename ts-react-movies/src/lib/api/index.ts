import defaultApi from "./defaultApi";

export const movies = {
  /* pupular movies */
  popular: () => defaultApi.get("movie/popular"),
  /* coming soon */
  upcoming: () => defaultApi.get("movie/upcoming"),
  /* show noyplaying movies */
  nowPlaying: (page: number) =>
    defaultApi.get("movie/now_playing", {
      params: {
        page: page, // used for show more
      },
    }),
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
