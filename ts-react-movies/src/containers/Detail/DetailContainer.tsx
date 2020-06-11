import React, { useEffect } from "react";
import DetailList from "components/Detail/Detail";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getDetail } from "modules/Detail";

interface DetailContainerProps {
  movieId: string;
  loading: boolean | undefined;
  detail: any;
  getDetail: Function;
}
const DetailContainer: React.SFC<DetailContainerProps> = ({
  movieId,
  loading,
  detail,
  getDetail,
}) => {
  useEffect(() => {
    getDetail(movieId);
  }, [movieId]);

  useEffect(() => {
    return () => {
      getDetail("");
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        Object.keys(detail).length > 0 && <DetailList detail={detail} />
      )}
    </>
  );
};

export default connect(
  (state: RootState) => ({
    loading: state.detail.loading,
    detail: state.detail.detail,
  }),
  { getDetail }
)(DetailContainer);
