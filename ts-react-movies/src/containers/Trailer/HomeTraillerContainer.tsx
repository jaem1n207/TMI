import React, { useMemo, useEffect, useState } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import TrailerList from "components/Trailer/Trailer";
import OtherTrailer from "components/Trailer/OtherTrailer";
import { getVideos } from "modules/videos";
import { getPopular } from "modules/Popular";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface HomeTrailerContainerProps {
  loading: boolean | undefined;
  videos: Array<any> | undefined;
  getVideos: Function;
  popular: Array<any> | undefined;
  getPopular: Function;
  movieKeys: string | undefined;
}

function getRandomId(popular: any[] | undefined) {
  console.log("getRandomId");

  const movieIds: any[] | undefined = popular?.map(
    (item: any, i: number) => item.id
  );
  const shuffle = [];
  while (movieIds?.length !== 0) {
    shuffle.push(
      movieIds?.splice(Math.floor(Math.random() * movieIds.length), 1)[0]
    );
  }

  const getId = shuffle.splice(0, 8);

  return [...getId];
}

const HomeTrailerContainer: React.SFC<HomeTrailerContainerProps> = ({
  loading,
  getVideos,
  popular,
  videos,
  getPopular,
  movieKeys,
}) => {
  useEffect(() => {
    getPopular();
  }, []);
  const randomId = useMemo(() => getRandomId(popular), [popular?.length]);
  const [movieKeyIds, setMovieKeyIds] = useState<any[]>([]);

  async function handleKeys() {
    let i = 0;
    while (i < randomId.length) {
      await getVideos(randomId[i]);
      i++;
    }
  }

  function getMovieKeyList() {
    setMovieKeyIds([movieKeys, ...movieKeyIds]);
  }

  useEffect(() => {
    handleKeys();
  }, [randomId]);
  useEffect(() => {
    getMovieKeyList();
  }, [movieKeys]);

  const result = movieKeyIds.filter((word) => word.length > 1);

  return <>{loading ? <LoadingPage /> : <OtherTrailer movieKeys={result} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.videos.loading,
    videos: state.videos.videos,
    popular: state.popular.popular,
    movieKeys: state.videos.movieKeys,
  }),
  { getVideos, getPopular }
)(HomeTrailerContainer);
