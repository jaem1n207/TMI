import React, { useEffect } from "react";
import DetailCastList from "components/common/Modal/Modal";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getCastDetail } from "modules/Detail/detailCast";

interface DetailCastContainerProps {
  loading: boolean | undefined;
  castInfo: any;
  castCredits: any;
  getCastDetail: Function;
  castId: string;
}
const DetailCastContainer: React.SFC<DetailCastContainerProps> = ({
  loading,
  castInfo,
  castCredits,
  getCastDetail,
  castId,
}) => {
  useEffect(() => {
    getCastDetail(castId);
  }, []);

  return <>{loading ? <LoadingPage /> : <DetailCastList />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.castInfo.loading,
    castInfo: state.castInfo.castInfo,
    castCredits: state.castInfo.castCredits,
  }),
  { getCastDetail }
)(DetailCastContainer);
