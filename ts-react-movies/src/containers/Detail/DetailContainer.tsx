import React, { useEffect } from "react";
import DetailList from "components/Detail/Detail";
import DetailTrailerList from "components/Detail/DetailTrailer";
import DetailCastList from "components/Detail/DetailCast";
import DetailRecommendList from "components/Detail/DetailRecommend";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getDetail } from "modules/Detail";
import { getVideos } from "modules/videos";
import { getRecommend } from "modules/Recommend";

interface DetailContainerProps {
  movieId: string;
  loading: boolean | undefined;
  detail: any;
  detailCast: any;
  getDetail: Function;
  videos: Array<any> | undefined;
  getVideos: Function;
  recommend: Array<any> | undefined;
  getRecommend: Function;
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
}) => {
  useEffect(() => {
    getDetail(movieId);
    getVideos(movieId);
    getRecommend(movieId);
  }, [movieId]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        Object.keys(detail).length > 0 && <DetailList detail={detail} />
      )}
      {loading ? <LoadingPage /> : <DetailTrailerList videos={videos} />}

      {loading ? <LoadingPage /> : <DetailCastList detailCast={detailCast} />}
      {loading ? (
        <LoadingPage />
      ) : (
        <DetailRecommendList recommend={recommend} />
      )}
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
  }),
  { getDetail, getVideos, getRecommend }
)(DetailContainer);
