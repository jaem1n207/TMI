import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getMoreNowPlaying, getNowPlaying } from "modules/nowPlaying";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import NowPlayingP from "components/NowPlaying/NowPlayingP";
import { settings } from "cluster";

interface NowPlayingPContainrProps {
  loading: boolean | undefined;
  nowPlaying: any;
  morePlaying: any;
  pages: any;
  total_pages: any;
  getMoreNowPlaying: Function;
  getNowPlaying: Function;
}
const NowPlayingPContainr: React.SFC<NowPlayingPContainrProps> = ({
  loading,
  nowPlaying,
  morePlaying,
  pages,
  total_pages,
  getMoreNowPlaying,
  getNowPlaying,
}) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [playingMovies, setPlayingMovies] = useState<any[]>([]);
  const [moreMovies, setMoreMovies] = useState<any[]>([]);

  useEffect(() => {
    settings();
  }, []);
  function settings() {
    setTotalPages(total_pages);
    getNowPlaying(page);
  }

  useEffect(() => {
    setMoreMovies(morePlaying);
    setPlayingMovies([nowPlaying, moreMovies]);
  }, [nowPlaying]);
  useEffect(() => {
    setPlayingMovies(nowPlaying);
    setPlayingMovies([...playingMovies, moreMovies]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    nowPlaying = [...playingMovies, morePlaying];
    console.log("nowPlayingCont: ", nowPlaying);
    console.log("morePlayingCont: ", morePlaying);
  }, [morePlaying]);

  /* 더보기 */
  const getMoreMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);
    if (totalPages >= page) {
      console.log("page: ", page);
      console.log("totalpages: ", totalPages);

      getMoreNowPlaying(page + 1);
    }
  };

  const getLowMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page - 1);
    if (page !== 1) {
      getMoreNowPlaying(page - 1);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NowPlayingP
          getLowMovie={getLowMovie}
          getMoreMovie={getMoreMovie}
          pages={page}
          total_pages={totalPages}
          nowPlaying={nowPlaying}
          morePlaying={morePlaying}
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
