/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { Link } from "react-router-dom";
import style from "../Upcoming/Upcoming.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface TopRateProps {
  pages: number;
  total_pages: number;
  getMoreMovie: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  getLowMovie: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  topRate:
    | Array<{
        poster_path: string;
        title: string;
        id: number;
        release_date: string;
        vote_average: number;
      }>
    | undefined;
  moreTopRate:
    | Array<{
        poster_path: string;
        title: string;
        id: number;
        release_date: string;
        vote_average: number;
      }>
    | undefined;
}
const TopRate: React.FC<TopRateProps> = ({
  topRate,
  getLowMovie,
  getMoreMovie,
  moreTopRate,
  pages,
  total_pages,
}) => {
  console.log("topRateCom: ", topRate, "moreTopRate: ", moreTopRate);

  return (
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>TopRate Movies</h1>
      <div className={cx("UpcomingTemplate")}>
        <div className={cx("UpcomingTemplate-Wrap")}>
          <ul
            className={cx(
              "UpcomingTemplate-Wrap-Movie UpcomingTemplate-Wrap-MovieUl"
            )}
          >
            {topRate?.map((item) => (
              <TopRateCard
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
              />
            ))}
            {moreTopRate?.map((item) => (
              <TopRateCard
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                release_date={item.release_date}
                title={item.title}
                vote_average={item.vote_average}
              />
            ))}
          </ul>
          <div className={"ButtonWrap"}>
            <div className={`ButtonBox ${pages <= 1 ? "none" : "block"}`}>
              <button onClick={getLowMovie}>이전</button>
            </div>
            <span
              className={"ButtonWrap-PageNumber"}
            >{`${pages}/${total_pages}`}</span>
            <div
              className={`ButtonBox ${pages >= total_pages ? "none" : "block"}`}
            >
              <button onClick={getMoreMovie}>다음</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRate;

interface TopRateCardProps {
  poster_path: string;
  id: number;
  title: string;
  vote_average: any;
  release_date: string;
}
const TopRateCard: React.FC<TopRateCardProps> = ({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
}) => {
  const poster = require("assets/poster.png");
  const date: string[] = release_date.split("-");
  const average: string = (vote_average / 2).toFixed(1);

  return (
    <li className={cx("UpcomingTemplate-Wrap-Movie-List")}>
      <div className={cx("UpcomingTemplate-Wrap-Movie-List-Poster")}>
        <Link to={`/TMI/detail/${id}`}>
          <span className={cx("UpcomingTemplate-Wrap-Movie-List-Poster-Info")}>
            {poster_path !== null ? (
              <img
                className={cx(
                  "UpcomingTemplate-Wrap-Movie-List-Poster-Info-Img"
                )}
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
              />
            ) : (
              <img
                className={cx(
                  "UpcomingTemplate-Wrap-Movie-List-Poster-Info-Img"
                )}
                src={poster}
              />
            )}
          </span>
        </Link>
      </div>
      <div className={cx("UpcomingTemplate-Wrap-Movie-List-Info")}>
        <strong className={cx("UpcomingTemplate-Wrap-Movie-List-Info-Title")}>
          {title}
        </strong>
        <span className={cx("UpcomingTemplate-Wrap-Movie-List-Info-SubInfo")}>
          <span
            className={cx("UpcomingTemplate-Wrap-Movie-List-Info-SubInfo-Date")}
          >{`${date[0]}.${date[1]}.${date[2]}`}</span>
          <span
            className={cx("UpcomingTemplate-Wrap-Movie-List-Info-SubInfo-Vote")}
          >
            <span
              className={cx(
                "UpcomingTemplate-Wrap-Movie-List-Info-SubInfo-Vote-S"
              )}
            >
              ★
            </span>
            <span
              className={cx(
                "UpcomingTemplate-Wrap-Movie-List-Info-SubInfo-Vote-V"
              )}
            >
              {average !== "0.0" ? average : "-"}
            </span>
          </span>
        </span>
      </div>
    </li>
  );
};
