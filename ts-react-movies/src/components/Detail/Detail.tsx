import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Detail.scss";
import {
  BelongsToCollectionType,
  ProductionCompanyType,
  GenresType,
} from "modules/Detail/types";

const cx = classNames.bind(style);

interface DetailProps {
  detail: {
    poster_path: string;
    title: string;
    genres: Array<GenresType>;
    adult: boolean;
    credits: any;
    belongs_to_collection: Array<BelongsToCollectionType>;
    budget: number;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    production_companies: Array<ProductionCompanyType>;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}
const Detail: React.SFC<DetailProps> = ({ detail }) => {
  const {
    poster_path,
    original_title,
    title,
    release_date,
    overview,
    credits,
    adult,
    runtime,
    production_companies,
    belongs_to_collection,
    genres,
    homepage,
    tagline, // "영화의 역사를 뒤바꿀 마블의 클라이맥스!"
    vote_average, // 8.3
    vote_count, // 18435
  } = detail;
  const poster = require("assets/poster.png");

  return (
    <div className={cx("Detail-Wrap")}>
      <div className={cx("Detail-Wrap-Info")}>
        <div className={cx("Detail-Wrap-Info-Div")}>
          <div className={cx("Detail-Wrap-Info-Div-Post")}>
            {poster_path !== null ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className={cx("Detail-Wrap-Info-Div-Post-Size")}
                src={`https://image.tmdb.org/t/p/w400${poster_path}`}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                className={cx("Detail-Wrap-Info-Div-Post-Size")}
                src={poster}
              />
            )}
          </div>
          <div className={cx("Detail-Wrap-Info-Div-Name")}>
            <div className={cx("Detail-Wrap-Info-Div-Name-Adult")}>
              {adult === false ? "청소년 관람 가능" : "청소년 관람 불가"}
            </div>
            <div className={cx("Detail-Wrap-Info-Div-Name-KrNm")}>{title}</div>
            <div className={cx("Detail-Wrap-Info-Div-Name-EnNm")}>
              {original_title}
            </div>
          </div>
          <div className={cx("Detail-Wrap-Info-Div-Vote")}>
            <div>
              관람객 평점 ★{vote_average}
              <span style={{ marginLeft: "15px" }}>
                {vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
                투표
              </span>
            </div>
          </div>
          <div className={cx("Detail-Wrap-Info-Div-Tag")}>{tagline}</div>
          <div className={cx("Detail-Wrap-Info-Div-OverView")}>{overview}</div>
        </div>
        <div className={cx("Detail-Wrap-Info-Bottom")}>
          <div className={cx("Detail-Wrap-Info-Bottom-Top")}>
            <div className={cx("Detail-Wrap-Info-Bottom-Top-Genre")}>
              장르:{" "}
              {genres.map((m, i) => (
                <div>{m.name}</div>
              ))}
            </div>
            <div className={cx("Detail-Wrap-Info-Bottom-Top-Date")}>
              개봉:{" "}
              {release_date
                ? release_date.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")
                : "정보가 없어요"}
            </div>
            <div className={cx("Detail-Wrap-Info-Bottom-Top-Runtime")}>
              {runtime}분
            </div>
            <div className={cx("Detail-Wrap-Info-Bottom-Middle")}>
              <div className={cx("Detail-Wrap-Info-Bottom-Middle-")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
