import React, { useEffect, useState } from "react";
import DetailList from "components/Detail/Detail";
import DetailTrailerList from "components/Detail/DetailTrailer";
import DetailCastList from "components/Detail/DetailCast";
import DetailRecommendList from "components/Detail/DetailRecommend";
import SimilarList from "components/Similar/SimilarList";

import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getDetail } from "modules/Detail";
import { getVideos } from "modules/videos";
import { getRecommend } from "modules/Recommend";
import { getSimilar } from "modules/Similar";

interface DetailContainerProps {
  /* Movie */
  movieId: string;
  loading: boolean | undefined;
  /* Cast */
  detail: any;
  detailCast: any;
  getDetail: Function;
  /* Trailler */
  videos: Array<any> | undefined;
  getVideos: Function;
  /* Recommend */
  recommend: Array<any> | undefined;
  getRecommend: Function;
  /* Similar */
  similar: Array<any> | undefined;
  getSimilar: Function;
  /* PeopleModal */
}
const DetailContainer: React.SFC<DetailContainerProps> = ({
  movieId,
  loading,
  detail,
  detailCast,
  getDetail,
  getVideos,
  videos,
  recommend,
  getRecommend,
  similar,
  getSimilar,
}) => {
  useEffect(() => {
    getDetail(movieId);
    getVideos(movieId);
    getRecommend(movieId);
    getSimilar(movieId);
  }, [movieId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        Object.keys(detail).length > 0 && <DetailList detail={detail} />
      )}
      {loading ? <LoadingPage /> : <DetailTrailerList videos={videos} />}

      {loading ? (
        <LoadingPage />
      ) : (
        <DetailCastList detailCast={detailCast} modalStaus={isModalOpen} />
      )}
      {loading ? (
        <LoadingPage />
      ) : (
        <DetailRecommendList recommend={recommend} />
      )}
      {loading ? <LoadingPage /> : <SimilarList similar={similar} />}
    </>
  );
};

export default connect(
  (state: RootState) => ({
    loading: state.detail.loading,
    detail: state.detail.detail,
    videos: state.videos.videos,
    detailCast: state.detail.detailCast,
    recommend: state.recommend.recommend,
    similar: state.similar.similar,
  }),
  { getDetail, getVideos, getRecommend, getSimilar }
)(DetailContainer);
