import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getMoreNowPlaying, getNowPlaying } from "modules/nowPlaying";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import NowPlayingP from "components/NowPlaying/NowPlayingP";

interface NowPlayingPContainrProps {
  loading: boolean | undefined;
  nowPlaying: any;
  morePlaying: any;
  pages?: number;
  total_pages: any;
  getMoreNowPlaying: Function;
  getNowPlaying: Function;
}
const NowPlayingPContainr: React.SFC<NowPlayingPContainrProps> = ({
  loading,
  nowPlaying,
  pages,
  total_pages,
  getMoreNowPlaying,
  getNowPlaying,
}) => {
  const [page, setPage] = useState(1);
  const [playingMovies, setPlayingMovies] = useState<any[]>([]);
  const [moreMovies, setMoreMovies] = useState<any[]>([]);

  console.log("pages: ", pages, "page: ", page);

  useEffect(() => {
    getNowPlaying(page);
    setPlayingMovies(nowPlaying);
  }, []);

  /* 더보기 */
  const getMoreMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);
    if (total_pages > page) {
      getNowPlaying(page);
      getMoreNowPlaying(page);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NowPlayingP
          getMoreMovie={getMoreMovie}
          pages={pages}
          total_pages={total_pages}
          nowPlaying={nowPlaying}
          moreMovies={moreMovies}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.nowPlaying.loading,
    nowPlaying: state.nowPlaying.nowPlaying,
    morePlaying: state.nowPlaying.morePlaying,
    pages: state.nowPlaying.pages,
    total_pages: state.nowPlaying.total_pages,
  }),
  { getMoreNowPlaying, getNowPlaying }
)(NowPlayingPContainr);
