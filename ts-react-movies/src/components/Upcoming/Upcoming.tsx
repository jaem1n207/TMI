/* eslint-disable jsx-a11y/alt-text */
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
        vote_average: any;
        release_date: string;
      }>
    | undefined;
}
const Upcoming: React.FC<UpcomingProps> = ({ upcoming }) => {
  return (
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Upcoming Movies</h1>
      <div className={cx("UpcomingTemplate")}>
        <div className={cx("UpcomingTemplate-Wrap")}>
          <ul
            className={cx(
              "UpcomingTemplate-Wrap-Movie UpcomingTemplate-Wrap-MovieUl"
            )}
          >
            {upcoming?.map((upcoming) => (
              <UpcomingCard
                key={upcoming.id}
                id={upcoming.id}
                poster_path={upcoming.poster_path}
                title={upcoming.title}
                release_date={upcoming.release_date}
                vote_average={upcoming.vote_average}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upcoming;

interface UpcomingCardProps {
  poster_path: string;
  id: number;
  title: string;
  vote_average: any;
  release_date: string;
}
const UpcomingCard: React.FC<UpcomingCardProps> = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  const date: string[] = release_date.split("-");
  let currentDate = new Date();
  let openDate = new Date(`${date[0]}, ${date[1]}, ${date[2]}`);
  let gap = currentDate.getTime() - openDate.getTime(); // 현재 날짜와 영화 개봉일의 차이를 밀리세컨드 단위로 변환하여 구함.
  let result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1; // (밀리초 * 초 * 분 * 시간)으로 나눔. 이 때, -1을 곱해야 날짜차이가 맞게 나온다.
  const poster = require("assets/poster.png");
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
            style={{
              fontSize: "14px",
              color: "rgb(80,131,239)",
              fontWeight: 700,
            }}
            className={cx("UpcomingTemplate-Wrap-Movie-List-Info-SubInfo-Date")}
          >
            {result.toString().indexOf("-") ? `D-${result}` : "재개봉"}
          </span>
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
