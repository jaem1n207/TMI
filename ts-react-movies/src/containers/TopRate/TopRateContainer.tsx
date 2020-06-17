import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules";
import TopRate from "components/TopRate/TopRate";
import { getTopRate, getMoreTopRate } from "modules/TopRate";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface TopRateContainerProps {
  loading: boolean | undefined;
  topRate: Array<any> | undefined;
  page?: number;
  total_pages?: number;
  getTopRate: Function;
  getMoreTopRate: Function;
}
const TopRateContainer: React.SFC<TopRateContainerProps> = ({
  loading,
  topRate,
  page,
  total_pages,
  getTopRate,
  getMoreTopRate,
}) => {
  useEffect(() => {
    getTopRate(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <TopRate getMoreTopRate={getMoreTopRate} topRate={topRate} />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.topRate.loading,
    topRate: state.topRate.topRate,
    page: state.topRate.page,
    total_pages: state.topRate.total_pages,
  }),
  { getTopRate, getMoreTopRate }
)(TopRateContainer);
