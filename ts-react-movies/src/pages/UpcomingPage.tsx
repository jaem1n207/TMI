import React from "react";
import style from "./UpcomingPage.scss";
import classNames from "classnames/bind";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import UpcomingContainer from "containers/UpComing/UpcomingContainer";
import ReactHelmet from "components/common/Helmet/ReactHelmet";

const cx = classNames.bind(style);

interface UpcomingPageProps {}
const UpcomingPage: React.SFC<UpcomingPageProps> = () => {
  return (
    <div className={cx("PageTemplate1")}>
      <ReactHelmet title="Upcoming" description="개봉예정">
        <meta charSet="utf-8" />
        <title>Upcoming</title>
      </ReactHelmet>
      <div className={cx("PageTemplate1-Navbar")}>
        <Navbar />
      </div>
      <div className={cx("PageTemplate1-Wrap")}>
        <div className={cx("PageTemplate1-Wrap-header")}>
          <Header />
        </div>
        <div className={cx("PageTemplate1-Wrap-Content")}>
          <div className={cx("PageTemplate1-Wrap-Content-Div")}>
            <UpcomingContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
