import React from "react";
import style from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface PageTemplateProps {
  Components: {
    Navbar: JSX.Element;
    Header: JSX.Element;
  };
}
const PageTemplate: React.SFC<PageTemplateProps> = ({ Components }) => {
  const { Navbar, Header } = Components;
  console.log(Components);
  return (
    <div className={cx("PageTemplate")}>
      <div className={cx("PageTemplate-Navbar")}>{Navbar}</div>
      <div className={cx("PageTemplate-Wrap")}>
        <div className={cx("PageTemplate-Wrap-header")}>{Header}</div>
        <div className={cx("PageTemplate-Wrap-Content")}></div>
      </div>
    </div>
  );
};

export default PageTemplate;
