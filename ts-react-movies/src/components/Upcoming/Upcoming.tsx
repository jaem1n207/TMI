import * as React from "react";
import { Link } from "react-router-dom";
import style from "./Upcoming.scss";
import classNames from "classnames/bind";

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
  return <div>hello</div>;
};

export default Upcoming;
