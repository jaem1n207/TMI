import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules/tv";
import { getTvTopRate } from "modules/tv/tvTopRate";
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

  /* 더보기 */
  const getMoreMovies = () => {
    setPage(page + 1);
    console.log("page: ", page);
    getTvTopRate(page);
  };

  useEffect(() => {
    const movies = getTvTopRate(page);
    setTvTopRateMovie([movies]);

    console.log("tvTopRateMovie: ", tvTopRateMovie);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <TvTopRate
          getMoreMovies={getMoreMovies}
          pages={page}
          total_pages={totalPages}
          tvTopRate={tvTopRateMovie}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.tvTopRate.loading,
    tvTopRate: state.tvTopRate.tvTopRate,
    pages: state.tvTopRate.pages,
    total_pages: state.tvTopRate.total_pages,
  }),
  { getTvTopRate }
)(TvDetailTopRateContiner);
