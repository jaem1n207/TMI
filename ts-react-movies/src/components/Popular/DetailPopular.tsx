/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { Link } from "react-router-dom";
import style from "../Upcoming/Upcoming.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface DetailPopularProps {
  popular:
    | Array<{
        poster_path: string; // 영화 포스터 (세로 큼)
        id: number; // 고유 id
        title: string; // 제목
        vote_average: number; // 평점 (10점 만점)
        release_date: string; // 개봉일
      }>
    | undefined;
  morePopular:
    | Array<{
        poster_path: string; // 영화 포스터 (세로 큼)
        id: number; // 고유 id
        title: string; // 제목
        vote_average: number; // 평점 (10점 만점)
        release_date: string; // 개봉일
      }>
    | undefined;
  pages: number;
  total_pages: number;
  getMoreMovie: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  getLowMovie: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const DetailPopular: React.FC<DetailPopularProps> = ({
  popular,
  getLowMovie,
  getMoreMovie,
  morePopular,
  pages,
  total_pages,
}) => {
  return (
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Popular Movies</h1>
      <div className={cx("UpcomingTemplate")}>
        <div className={cx("UpcomingTemplate-Wrap")}>
          <ul
            className={cx(
              "UpcomingTemplate-Wrap-Movie UpcomingTemplate-Wrap-MovieUl"
            )}
          >
            {popular?.map((popularM) => (
              <DetailPopularCard
                key={popularM.id}
                id={popularM.id}
                poster_path={popularM.poster_path}
                title={popularM.title}
                release_date={popularM.release_date}
                vote_average={popularM.vote_average}
              />
            ))}
            {morePopular?.map((morePopularM) => (
              <DetailPopularCard
                key={morePopularM.id}
                id={morePopularM.id}
                poster_path={morePopularM.poster_path}
                title={morePopularM.title}
                release_date={morePopularM.release_date}
                vote_average={morePopularM.vote_average}
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

export default DetailPopular;

interface DetailPopularCardProps {
  poster_path: string;
  id: number;
  title: string;
  vote_average: any;
  release_date: string;
}
const DetailPopularCard: React.FC<DetailPopularCardProps> = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  const poster = require("assets/poster.png");
  const date: string[] = release_date.split("-");
  const average: string = (vote_average / 2).toFixed(1);

  return (
    <li className={cx("UpcomingTemplate-Wrap-Movie-List")}>
      <div className={cx("UpcomingTemplate-Wrap-Movie-List-Poster")}>
        <Link to={`/detail/${id}`}>
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
