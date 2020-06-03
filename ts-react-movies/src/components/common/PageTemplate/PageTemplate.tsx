import React from "react";
import style from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface PageTemplateProps {}
const PageTemplate: React.SFC<PageTemplateProps> = ({ children }) => {
  return (
    <div className={cx("PageTemplate")}>
      <div className={cx("PageTemplate-Navbar")}></div>
      <div className={cx("PageTemplate-Wrap")}>
        <div className={cx("PageTemplate-Wrap-header")}></div>
        <div className={cx("PageTemplate-Wrap-Content")}></div>
      </div>
    </div>
  );
};

export default PageTemplate;
