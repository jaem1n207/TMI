/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import style from "components/Upcoming/Upcoming.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface TvTopRateProps {
  pages: number;
  total_pages: number;
  getMoreMovies: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  tvTopRate:
    | Array<{
        poster_path: string;
        title: string;
        id: number;
        release_date: string;
        vote_average: number;
      }>
    | undefined;
}

const TvTopRate: React.FC<TvTopRateProps> = ({
  pages,
  total_pages,
  tvTopRate,
  getMoreMovies,
}) => {
  console.log("TvTopRateCompo: ", tvTopRate);
  console.log("pagesCompo: ", pages, "total_pagesCompo: ", total_pages);

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
            {tvTopRate?.map((tvTopRateItem) => (
              <TvTopRateCard
                key={tvTopRateItem.id}
                id={tvTopRateItem.id}
                poster_path={tvTopRateItem.poster_path}
                title={tvTopRateItem.title}
                release_date={tvTopRateItem.release_date}
                vote_average={tvTopRateItem.vote_average}
              />
            ))}
          </ul>
          <div className={"ButtonWrap"}>
            <div
              className={`ButtonBox ${pages >= total_pages ? "none" : "block"}`}
            >
              <button onClick={getMoreMovies}>더보기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvTopRate;

interface TvTopRateCardProps {
  poster_path: string;
  id: number;
  title: string;
  vote_average: any;
  release_date: string;
}

const TvTopRateCard: React.FC<TvTopRateCardProps> = ({
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
        <Link to={`/movie/detail/${id}`}>
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
