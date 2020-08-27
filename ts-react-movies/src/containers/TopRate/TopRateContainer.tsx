import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules/movie";
import TopRate from "components/TopRate/TopRate";
import { getTopRate, getMoreTopRate } from "modules/movie/TopRate";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface TopRateContainerProps {
  loading: boolean | undefined;
  topRate: any;
  moreTopRate: any;
  pages: any;
  total_pages: any;
  getTopRate: Function;
  getMoreTopRate: Function;
}
const TopRateContainer: React.SFC<TopRateContainerProps> = ({
  loading,
  topRate,
  pages,
  total_pages,
  getTopRate,
  getMoreTopRate,
  moreTopRate,
}) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [topRateMovie, setTopRateMovie] = useState<any[]>([]);
  const [moreTopRateMovie, setMoreTopRateMovie] = useState<any[]>([]);

  useEffect(() => {
    settings();
  }, [total_pages]);
  function settings() {
    setTotalPages(total_pages);
    getTopRate(page);
  }

  useEffect(() => {
    setMoreTopRateMovie(moreTopRate);
    setTopRateMovie([topRate, moreTopRateMovie]);
  }, [topRate]);

  useEffect(() => {
    setTopRateMovie(topRate);
    setTopRateMovie([...topRateMovie, moreTopRateMovie]);
    topRate = [...topRateMovie, moreTopRate];
  }, [moreTopRate]);

  const getMoreTopMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);

    if (totalPages >= page) {
      getMoreTopRate(page + 1);
    }
  };

  const getLowTopMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page - 1);
    if (page !== 1) {
      getMoreTopRate(page - 1);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <TopRate
          getLowMovie={getLowTopMovie}
          getMoreMovie={getMoreTopMovie}
          pages={page}
          total_pages={totalPages}
          topRate={topRate}
          moreTopRate={moreTopRate}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.topRate.loading,
    topRate: state.topRate.topRate,
    moreTopRate: state.topRate.moreTopRate,
    pages: state.topRate.pages,
    total_pages: state.topRate.total_pages,
  }),
  { getTopRate, getMoreTopRate }
)(TopRateContainer);
