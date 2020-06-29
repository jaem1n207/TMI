/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Detail.scss";
import {
  BelongsToCollectionType,
  ProductionCompanyType,
  GenresType,
  CreditsType,
} from "modules/Detail";
import ReactHelmet from "components/common/Helmet/ReactHelmet";

const cx = classNames.bind(style);

interface DetailProps {
  detail: {
    poster_path: string;
    title: string;
    genres: Array<GenresType>;
    adult: boolean;
    credits: CreditsType;
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
    title,
    release_date,
    overview,
    credits,
    adult,
    runtime,
    production_companies,
    genres,
    homepage,
    tagline, // "영화의 역사를 뒤바꿀 마블의 클라이맥스!"
    vote_average, // 8.3
    vote_count, // 18435
  } = detail;
  const poster = require("assets/poster.png");
  const logo = require("assets/poster.png");
  const average: string = (vote_average / 2).toFixed(1);

  return (
    <>
      <ReactHelmet title={`${title} 상세보기`} description="상세정보">
        <meta charSet="utf-8" />
        <title>{`${title}`}</title>
      </ReactHelmet>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Movie Detail</h1>
      <div className={cx("Detail-Wrap")}>
        <div className={cx("Detail-Wrap-Post")}>
          {poster_path !== null ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              className={cx("Detail-Wrap-Post-Size")}
              style={{ width: "200px", height: "290px" }}
              src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img className={cx("Detail-Wrap-Post-Size")} src={poster} />
          )}
        </div>
        <div className={cx("Detail-Wrap-Name")}>
          <div className={cx("Detail-Wrap-Name-Title")}>{title}</div>
          <div className={cx("Detail-Wrap-Name-Info")}>
            공식 사이트
            {homepage !== "" ? (
              <div className={cx("Detail-Wrap-Name-Info-Div")}>
                <a href={homepage} target="_blank">
                  {title} 공식 사이트로 가기
                </a>
              </div>
            ) : (
              <span>가 없어요</span>
            )}
          </div>
        </div>
        <ul className={cx("Detail-Wrap-Info1")}>
          <li>
            <em>{adult === false ? "청소년 관람 가능" : "청소년 관람 불가"}</em>
          </li>
          <li>
            <em>
              관람객 평점 <span>★</span> {average}
              <em style={{ marginLeft: "7px", fontSize: "14px" }}>
                ({vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명
                투표)
              </em>
            </em>
          </li>
          <li>
            <em></em>
          </li>
        </ul>
        <div className={cx("Detail-Wrap-Genre")}>
          <span style={{ marginRight: "10px" }}>장르</span>
          {genres.map((m, i) => (
            <div key={i} className={cx("Detail-Wrap-Genre-Div")}>
              {" "}
              {m.name}{" "}
            </div>
          ))}
        </div>
        <ul className={cx("Detail-Wrap-Info2")}>
          <li>
            <em>
              {release_date
                ? release_date.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3")
                : "정보가 없어요"}
              개봉
            </em>
            <em>{runtime ? <span>{runtime}분</span> : "정보가 없습니다."}</em>
          </li>
          <li>
            <em style={{ marginRight: "10px" }}>감독</em>{" "}
            {credits.crew.map((item, i) => (
              <strong key={i}>
                {item.job === "Director" ? (
                  <span>
                    <a>{item.name}</a>
                  </span>
                ) : (
                  ""
                )}
              </strong>
            ))}
          </li>
          <li>
            <em style={{ marginRight: "10px" }}>출연</em>{" "}
            {credits.cast.length !== 0
              ? credits.cast.slice(0, 5).map((item, i) => (
                  <strong key={i} style={{ marginRight: "1rem" }}>
                    <a style={{ marginRight: "10x" }}>{item.name}</a>
                  </strong>
                ))
              : "정보가 없습니다."}
          </li>
        </ul>
        <div>
          {production_companies.map((item, i) => (
            <span key={i} className={cx("Detail-Wrap-Company")}>
              {item.logo_path !== null ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  style={{ width: "70px", height: "20px", border: "none" }}
                  src={`https://image.tmdb.org/t/p/w300${item.logo_path}`}
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img style={{ width: "70px", height: "20px" }} src={logo} />
              )}
            </span>
          ))}
        </div>
      </div>
      <div className={cx("Detail-Content")}>
        <div className={cx("Detail-Content-Tag")}>
          {tagline.length > 0 ? tagline : "정보가 없습니다."}
        </div>
        <div className={cx("Detail-Content-OverView")}>
          {overview.length > 0 ? overview : "줄거리에 대한 정보가 없습니다."}
        </div>
      </div>
    </>
  );
};

export default Detail;
