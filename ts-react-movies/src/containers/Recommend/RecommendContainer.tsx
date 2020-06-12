import React, { useEffect } from "react";
import DetailRecommend from "components/Detail/DetailRecommend";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getRecommend } from "modules/Recommend";

interface RecommendContainerProps {
  loading: boolean | undefined;
  getRecommend: Function;
  recommend: Array<any> | undefined;
}
const RecommendContainer: React.SFC<RecommendContainerProps> = ({
  loading,
  getRecommend,
  recommend,
}) => {
  useEffect(() => {
    getRecommend();
  }, []);

  return (
    <>{loading ? <LoadingPage /> : <DetailRecommend recommend={recommend} />}</>
  );
};

export default connect(
  (state: RootState) => ({
    loading: state.recommend.loading,
    recommend: state.recommend.recommend,
  }),
  { getRecommend }
)(RecommendContainer);
