import React, { useEffect, useState } from "react";
import DetailList from "components/Detail/Detail";
import DetailTrailerList from "components/Detail/DetailTrailer";
import DetailCastList from "components/Detail/DetailCast";
import DetailRecommendList from "components/Detail/DetailRecommend";
import SimilarList from "components/Similar/SimilarList";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import ModalContainer from "containers/Detail/DetailCastContainer";
import { connect } from "react-redux";
import { RootState } from "modules/movie";
import { getDetail } from "modules/movie/Detail";
import { getVideos } from "modules/movie/videos";
import { getRecommend } from "modules/movie/Recommend";
import { getSimilar } from "modules/movie/Similar";
import { getCastDetail } from "modules/movie/Detail/detailCast";

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
  castInfo: any;
  castCredits: any;
  getCastDetail: Function;
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
  castInfo,
  castCredits,
  getCastDetail,
}) => {
  useEffect(() => {
    setIsModalOpen(false);
    getDetail(movieId);
    getVideos(movieId);
    getRecommend(movieId);
    getSimilar(movieId);
  }, [movieId]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [castIdx, setCastIdx] = useState<number>(1245);

  /* 클릭한 배우 정보 얻어오기 */
  const onGetCast = (id: number) => {
    setCastIdx(id);

    getCastDetail(id);

    setTimeout(() => {
      setIsModalOpen(true);
    }, 0);
  };

  /* 모달 닫기 */
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <DetailCastList
          detailCast={detailCast}
          onClickCast={onGetCast}
          modalStaus={isModalOpen}
        />
      )}
      {loading ? (
        <LoadingPage />
      ) : (
        <DetailRecommendList recommend={recommend} />
      )}
      {loading ? <LoadingPage /> : <SimilarList similar={similar} />}
      <ModalContainer
        castInfo={castInfo}
        castCredits={castCredits}
        isModal={isModalOpen}
        close={closeModal}
      />
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
    castInfo: state.castInfo.castInfo,
    castCredits: state.castInfo.castCredits,
  }),
  { getDetail, getVideos, getRecommend, getSimilar, getCastDetail }
)(DetailContainer);
