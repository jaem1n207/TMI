import React, { useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "modules";
import PopularList from "components/Popular/Popular";
import { getPopular } from "modules/Popular";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface PopularContainerProps {
  loading: boolean | undefined;
  popular: Array<any> | undefined;
  getPopular: Function;
}
const PopularContainer: React.SFC<PopularContainerProps> = ({
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
