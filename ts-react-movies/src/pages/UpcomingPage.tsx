import React from "react";
import style from "./UpcomingPage.scss";
import classNames from "classnames/bind";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import UpcomingContainer from "containers/UpComing/UpcomingContainer";

const cx = classNames.bind(style);

interface UpcomingPageProps {}
const UpcomingPage: React.SFC<UpcomingPageProps> = () => {
  return (
    <div className={cx("PageTemplate1")}>
      <div className={cx("PageTemplate1-Navbar")}>
        <Navbar />
      </div>
      <div className={cx("PageTemplate1-Wrap")}>
        <div className={cx("PageTemplate1-Wrap-header")}>
          <Header />
        </div>
        <div className={cx("PageTemplate1-Wrap-Content")}>
          <div className={cx("PageTemplate1-Wrap-Content-Wrap")}>
            <UpcomingContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPage;
