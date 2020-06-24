import React from "react";
import { RouteComponentProps } from "react-router-dom";
import style from "./DetailPage.scss";
import classNames from "classnames/bind";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import DetailContainer from "containers/Detail/DetailContainer";
import qs from "qs";

const cx = classNames.bind(style);

export interface MatchParams {
  movieId: string;
}
interface DetailPageProps extends RouteComponentProps<MatchParams> {}
const DetailPage: React.SFC<DetailPageProps> = (props) => {
  const { movieId } = props.match.params;
  console.log("movieId: ", movieId);

  return (
    <div className={cx("PageTemplate")}>
      <div className={cx("PageTemplate-Navbar")}>
        <Navbar />
      </div>
      <div className={cx("PageTemplate-Wrap")}>
        <div className={cx("PageTemplate-Wrap-header")}>
          <Header />
        </div>
        <div className={cx("PageTemplate-Wrap-Content1")}>
          <div className={cx("PageTemplate-Wrap-Content1-DD")}>
            <DetailContainer movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
