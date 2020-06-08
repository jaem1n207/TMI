import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import TrailerList from "components/Trailer/Trailer";
import { getVideos } from "modules/videos";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface TrailerContainerProps {
  loading: boolean | undefined;
  videos: Array<any> | undefined;
  getVideos: Function;
}

function getRandomId() {
  const a: string[] = [
    "299534", // 어벤져스: 엔드 게임
    "429617", // 스파이더맨
    "475557", // 조커
    "299536", // 어벤져스: 인피니티 워
    "315635", // 스파이더맨
    "99861", // 어벤져스
    "572164", // 엑시트
    "420817", // 알라딘
    "1726", // 아이언맨1
    "10138", // 아이언맨2
  ];
  const shuffle = [];
  while (a.length > 0) {
    shuffle.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
  }
  const getId = shuffle.splice(0, 3);
  console.log(getId);

  return [...getId];
}

const TrailerContainer: React.SFC<TrailerContainerProps> = ({
  loading,
  getVideos,
  videos,
}) => {
  const randomId = useMemo(() => getRandomId(), []);
  useEffect(() => {
    getVideos(randomId[0]);
  }, []);

  return <>{loading ? <LoadingPage /> : <TrailerList videos={videos} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.videos.loading,
    videos: state.videos.videos,
  }),
  { getVideos }
)(TrailerContainer);
