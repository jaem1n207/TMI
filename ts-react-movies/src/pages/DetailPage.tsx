import React from "react";
import { RouteComponentProps } from "react-router-dom";
import style from "./DetailPage.scss";
import classNames from "classnames/bind";
import SubPage from "components/SubTemplate/SubTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import DetailContainer from "containers/Detail/DetailContainer";

const cx = classNames.bind(style);

export interface MatchParams {
  movieId: string;
}
interface DetailPageProps extends RouteComponentProps<MatchParams> {}
const DetailPage: React.SFC<DetailPageProps> = (props) => {
  const { movieId } = props.match.params;

  return (
    <div className={cx("PageTemplate")}>
      <div className={cx("PageTemplate-Navbar")}>
        <Navbar />
      </div>
      <div className={cx("PageTemplate-Wrap")}>
        <div className={cx("PageTemplate-Wrap-header")}>
          <Header />
        </div>
        <div className={cx("PageTemplate-Wrap-Content")}>
          <div className={cx("PageTemplate-Wrap-Content-Wrap")}>
            <div className={cx("PageTemplate-Wrap-Content-Wrap-VideoWrap")}>
              <DetailContainer movieId={movieId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
