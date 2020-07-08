import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules/tv";
import { getTvTopRate } from "modules/tv/toprate";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import TvTopRate from "components/Tv/TopRate/TvTopRate";

interface TvTopRateContainerProps {
  loading: boolean | undefined;
  tvTopRate: any;
  pages: any;
  total_pages: any;
  getTvTopRate: Function;
}
const TvDetailTopRateContiner: React.SFC<TvTopRateContainerProps> = ({
  loading,
  tvTopRate,
  pages,
  total_pages,
  getTvTopRate,
}) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [tvTopRateMovie, setTvTopRateMovie] = useState<any[]>([]);

  const getMoreMovies = () => {
    setPage(page + 1);
    getTvTopRate(page);
  };

  useEffect(() => {
    getTvTopRate(page);
  }, []);

  return <>{loading ? <LoadingPage /> : <TvTopRate />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.tvTopRate.loading,
    tvTopRate: state.tvTopRate.tvTopRate,
    pages: state.tvTopRate.pages,
    total_pages: state.tvTopRate.total_pages,
  }),
  {
    getTvTopRate,
  }
)(TvDetailTopRateContiner);
