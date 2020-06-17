import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "modules";
import Upcoming from "components/Upcoming/Upcoming";
import { getUpcoming } from "modules/Upcoming";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

interface UpcomingContainerProps {
  loading: boolean | undefined;
  upcoming: Array<any> | undefined;
  page?: number;
  total_pages?: number;
  getUpcoming: Function;
}
const UpcomingContainer: React.SFC<UpcomingContainerProps> = ({
  loading,
  upcoming,
  page,
  total_pages,
  getUpcoming,
}) => {
  useEffect(() => {
    getUpcoming(page);
  }, [page]);

  return <>{loading ? <LoadingPage /> : <Upcoming />}</>;
};

export default connect(
  (state: RootState, props) => ({
    loading: state.upcoming.loading,
    upcoming: state.upcoming.upcoming,
    page: state.upcoming.page,
    total_pages: state.upcoming.total_pages,
  }),
  { getUpcoming }
)(UpcomingContainer);
