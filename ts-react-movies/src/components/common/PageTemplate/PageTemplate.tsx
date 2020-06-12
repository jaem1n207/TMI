import React from "react";
import style from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface PageTemplateProps {
  Components: {
    Navbar: JSX.Element;
    Header: JSX.Element;
    NowPlayingPage: JSX.Element;
    PopularPage: JSX.Element;
    VideosPage: JSX.Element;
  };
}
const PageTemplate: React.SFC<PageTemplateProps> = ({ Components }) => {
  const {
    Navbar,
    Header,
    NowPlayingPage,
    PopularPage,
    VideosPage,
  } = Components;
  return (
    <div className={cx("PageTemplate")}>
      <div className={cx("PageTemplate-Navbar")}>{Navbar}</div>
      <div className={cx("PageTemplate-Wrap")}>
        <div className={cx("PageTemplate-Wrap-header")}>{Header}</div>
        <div className={cx("PageTemplate-Wrap-Content")}>
          <div className={cx("PageTemplate-Wrap-Content-Wrap")}>
            <div className={cx("PageTemplate-Wrap-Content-Wrap-VideoWrap")}>
              {VideosPage}
            </div>
            <div className={cx("PageTemplate-Wrap-Content-Wrap-PopularWrap")}>
              {PopularPage}
            </div>
          </div>
          <div className={cx("PageTemplate-Wrap-Content-NowWrap")}>
            {NowPlayingPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
