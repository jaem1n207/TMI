import React, { useState, useEffect } from "react";
import DetailPopular from "components/Popular/DetailPopular";
import LoadingPage from "components/common/LoadingPage/LoadingPage";
import { connect } from "react-redux";
import * as Props from "./Props";
import { RootState } from "modules";
import { getPopular, getMorePopular } from "modules/Popular";

interface PopularContainerProps {
  loading: boolean | undefined;
  popular: any;
  morePopular: any;
  pages: any;
  total_pages: any;
  getPopular: Function;
  getMorePopular: Function;
}

const DetailPopularContainer: React.SFC<PopularContainerProps> = ({
  loading,
  getPopular,
  popular,
  morePopular,
  pages,
  getMorePopular,
  total_pages,
}) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [popularMovie, setPopularMovie] = useState<any[]>([]);
  const [morePopularMovie, setMorePopularMovie] = useState<any[]>([]);

  useEffect(() => {
    settings();
  }, [total_pages]);
  function settings() {
    setTotalPages(total_pages);
    getPopular(page);
  }

  useEffect(() => {
    setMorePopularMovie(morePopular);
    setPopularMovie([popular, morePopularMovie]);
  }, [popular]);

  useEffect(() => {
    setPopularMovie(popular);
    setPopularMovie([...popularMovie, morePopularMovie]);
    popular = [...popularMovie, morePopular];
  }, [morePopular]);

  const getMorePopularMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);

    if (totalPages >= page) {
      getMorePopular(page + 1);
    }
  };

  const getLowPopularMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPage(page + 1);

    if (page !== 1) {
      getMorePopular(page - 1);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <DetailPopular
          popular={popular}
          morePopular={morePopular}
          pages={page}
          total_pages={totalPages}
          getLowMovie={getLowPopularMovie}
          getMoreMovie={getMorePopularMovie}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.popular.loading,
    popular: state.popular.popular,
    morePopular: state.popular.morePopular,
    pages: state.popular.pages,
    total_pages: state.popular.total_pages,
  }),
  { getPopular, getMorePopular }
)(DetailPopularContainer);
