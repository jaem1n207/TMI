import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Upcoming.scss";
import classNames from "classnames/bind";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";

const cx = classNames.bind(style);

interface UpcomingProps {
  upcoming:
    | Array<{
        poster_path: string;
        id: number;
        title: string;
        vote_average: string;
        release_date: string;
      }>
    | undefined;
}
const Upcoming: React.FC<UpcomingProps> = ({ upcoming }) => {
  return (
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Upcoming Movies</h1>
      <div className={cx("UpcomingTemplate")}>
        <div className={cx("UpcomingTemplate-Wrap")}></div>
      </div>
    </>
  );
};

export default Upcoming;
