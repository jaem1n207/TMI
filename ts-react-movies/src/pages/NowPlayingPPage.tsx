import React from "react";
import style from "./UpcomingPage.scss";
import classNames from "classnames/bind";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import NowPlayingPContainer from "containers/NowPlayingPContainer";

const cx = classNames.bind(style);

interface NowPlayingPPageProps {}
const NowPlayingPPage: React.SFC<NowPlayingPPageProps> = () => {
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
          <div className={cx("PageTemplate1-Wrap-Content-Div")}>
            <NowPlayingPContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingPPage;
