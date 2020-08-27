import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules/movie";
import { getTvTopRate, getMoreTvTopRate } from "modules/tv/tvTopRate";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import TvTopRate from "components/Tv/TopRate/TvTopRate";

interface TvTopRateContainerProps {
  loading: boolean | undefined;
  tvTopRate: any;
  moreTvTopRate: any;
  pages: any;
  total_pages: any;
  getTvTopRate: Function;
  getMoreTvTopRate: Function;
}
const TvDetailTopRateContiner: React.SFC<TvTopRateContainerProps> = ({
  loading,
  tvTopRate,
  pages,
  total_pages,
  getTvTopRate,
  getMoreTvTopRate,
  moreTvTopRate,
}) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [tvTopRateMovie, setTvTopRateMovie] = useState<any[]>([]);
  const [moreTvTopRateMovie, setMoreTvTopRateMovie] = useState<any[]>([]);

  useEffect(() => {
    settings();
  }, [total_pages]);
  function settings() {
    setTotalPages(total_pages);
    getTvTopRate(page);
  }

  useEffect(() => {
    setMoreTvTopRateMovie(moreTvTopRate);
    setTvTopRateMovie([tvTopRate, moreTvTopRateMovie]);
  }, [tvTopRate]);

  useEffect(() => {
    setTvTopRateMovie(tvTopRate);
    setTvTopRateMovie([...tvTopRateMovie, moreTvTopRateMovie]);
    tvTopRate = [...tvTopRateMovie, moreTvTopRate];
  }, [moreTvTopRate]);

  const getMoreTvTopMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);

    if (totalPages >= page) {
      getMoreTvTopRate(page + 1);
    }
  };

  const getLowTvTopMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page - 1);
    if (page !== 1) {
      getMoreTvTopRate(page - 1);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <TvTopRate
          getMoreMovie={getMoreTvTopMovie}
          moreTvTopRate={moreTvTopRate}
          getLowMovie={getLowTvTopMovie}
          pages={page}
          total_pages={totalPages}
          tvTopRate={tvTopRate}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.tvTopRate.loading,
    tvTopRate: state.tvTopRate.tvTopRate,
    moreTvTopRate: state.tvTopRate.moreTvTopRate,
    pages: state.tvTopRate.pages,
    total_pages: state.tvTopRate.total_pages,
  }),
  { getTvTopRate, getMoreTvTopRate }
)(TvDetailTopRateContiner);
