import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getNowPlaying, getMoreNowPlaying } from "modules/nowPlaying";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import NowPlayingP from "components/NowPlaying/NowPlayingP";

interface NowPlayingPContainrProps {
  loading: boolean | undefined;
  nowPlaying: Array<any> | undefined;
  page?: number;
  total_pages?: number;
  getNowPlaying: Function;
  getMoreNowPlaying: Function;
}
const NowPlayingPContainr: React.SFC<NowPlayingPContainrProps> = ({
  loading,
  nowPlaying,
  page,
  total_pages,
  getNowPlaying,
  getMoreNowPlaying,
}) => {
  useEffect(() => {
    getNowPlaying(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NowPlayingP
          getMoreNowPlaying={getMoreNowPlaying}
          nowPlaying={nowPlaying}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.nowPlaying.loading,
    nowPlaying: state.nowPlaying.nowPlaying,
    page: state.nowPlaying.page,
    total_pages: state.nowPlaying.total_pages,
  }),
  { getNowPlaying, getMoreNowPlaying }
)(NowPlayingPContainr);
