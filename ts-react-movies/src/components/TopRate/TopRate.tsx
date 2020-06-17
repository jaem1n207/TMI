import * as React from "react";
import {} from "react-router-dom";
import style from "../Upcoming/Upcoming.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface TopRateProps {
  topRate:
    | Array<{
        poster_path: string;
        title: string;
        id: number;
        release_date: string;
      }>
    | undefined;
  getMoreTopRate: Function;
}
const TopRate: React.FC<TopRateProps> = ({ topRate, getMoreTopRate }) => {
  return (
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>TopRate Movies</h1>
    </>
  );
};

export default TopRate;
