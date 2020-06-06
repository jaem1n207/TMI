import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import NowPlayingList from "components/NowPlaying/NowPlaying";
import { getNowPlaying, getMoreNowPlaying } from "modules/nowPlaying";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface NowPlayingContainerProps {
  loading: boolean | undefined;
  nowPlaying: Array<any> | undefined;
  page?: number;
  total_pages?: number;
  getNowPlaying: Function;
  getMoreNowPlaying: Function;
}
const NowPlayingContainer: React.SFC<NowPlayingContainerProps> = ({
  loading,
  nowPlaying,
  page,
  total_pages,
  getMoreNowPlaying,
  getNowPlaying,
}) => {
  useEffect(() => {
    getNowPlaying(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NowPlayingList
          nowPlaying={nowPlaying}
          getMoreNowPlaying={getMoreNowPlaying}
        />
      )}
      {/* <div page={page} total_pages={total_pages}>
        <button onClick={getMoreNowPlaying}>더보기</button>
      </div> */}
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
)(NowPlayingContainer);
