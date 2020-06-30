import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import NowPlayingList from "components/NowPlaying/NowPlaying";
import { getNowPlaying } from "modules/nowPlaying";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface NowPlayingContainerProps {
  loading: boolean | undefined;
  nowPlaying: Array<any> | undefined;
  pages?: number;
  total_pages?: number;
  getNowPlaying: Function;
}
const NowPlayingContainer: React.SFC<NowPlayingContainerProps> = ({
  loading,
  nowPlaying,
  pages,
  total_pages,
  getNowPlaying,
}) => {
  console.log(pages, total_pages);

  useEffect(() => {
    getNowPlaying(1);
  }, [pages]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NowPlayingList
          pages={pages}
          total_pages={total_pages}
          nowPlaying={nowPlaying}
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
    pages: state.nowPlaying.pages,
    total_pages: state.nowPlaying.total_pages,
  }),
  { getNowPlaying }
)(NowPlayingContainer);
