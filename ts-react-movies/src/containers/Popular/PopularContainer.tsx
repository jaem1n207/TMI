import React, { useEffect } from "react";
import PopularList from "components/Popular/Popular";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import * as Props from "./Props";
import { RootState } from "modules/movie";
import { getPopular } from "modules/movie/Popular";

const PopularContainer: React.SFC<Props.PopularContainerProps> = ({
  loading,
  getPopular,
  popular,
}) => {
  useEffect(() => {
    getPopular();
  }, []);

  return <>{loading ? <LoadingPage /> : <PopularList popular={popular} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.popular.loading,
    popular: state.popular.popular,
  }),
  { getPopular }
)(PopularContainer);
