import React from "react";
import style from "./SubTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface SubTemplateProps {
  Components: {
    Navbar: JSX.Element;
    Header: JSX.Element;
    DetailPage: JSX.Element;
  };
}
const SubTemplate: React.SFC<SubTemplateProps> = ({ Components }) => {
  const { Navbar, Header, DetailPage } = Components;
  console.log(Components);
  return (
    <div className={cx("SubTemplate")}>
      <div className={cx("SubTemplate-Navbar")}>{Navbar}</div>
      <div className={cx("SubTemplate-Wrap")}>
        <div className={cx("SubTemplate-Wrap-header")}>{Header}</div>
        <div className={cx("SubTemplate-Wrap-Content")}>
          <div className={cx("SubTemplate-Wrap-Content-Wrap")}>
            {DetailPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTemplate;
