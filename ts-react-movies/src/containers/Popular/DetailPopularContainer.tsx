import React, { useEffect } from "react";
import DetailPopular from "components/Popular/DetailPopular";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import * as Props from "./Props";
import { RootState } from "modules";
import { getPopular } from "modules/Popular";

const DetailPopularContainer: React.SFC<Props.PopularContainerProps> = ({
  loading,
  getPopular,
  popular,
}) => {
  useEffect(() => {
    getPopular();
  }, []);

  return <>{loading ? <LoadingPage /> : <DetailPopular popular={popular} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.popular.loading,
    popular: state.popular.popular,
  }),
  { getPopular }
)(DetailPopularContainer);
