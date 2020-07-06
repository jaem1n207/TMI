import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules/movie";
import Upcoming from "components/Upcoming/Upcoming";
import { getUpcoming } from "modules/movie/Upcoming";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface UpcomingContainerProps {
  loading: boolean | undefined;
  upcoming: Array<any> | undefined;
  pages?: number;
  total_pages?: number;
  getUpcoming: Function;
}
const UpcomingContainer: React.SFC<UpcomingContainerProps> = ({
  loading,
  upcoming,
  pages,
  total_pages,
  getUpcoming,
}) => {
  useEffect(() => {
    getUpcoming(pages);
  }, [pages]);

  return <>{loading ? <LoadingPage /> : <Upcoming upcoming={upcoming} />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.upcoming.loading,
    upcoming: state.upcoming.upcoming,
    pages: state.upcoming.pages,
    total_pages: state.upcoming.total_pages,
  }),
  { getUpcoming }
)(UpcomingContainer);
