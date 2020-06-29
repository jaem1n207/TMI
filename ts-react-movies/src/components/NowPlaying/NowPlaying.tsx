/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames/bind";
import style from "./NowPlaying.scss";
import "./NowPlaying.scss";

const cx = classnames.bind(style);

interface NowPlayingProps {
  pages: number | undefined;
  total_pages: number | undefined;
  nowPlaying:
    | Array<{
        poster_path: string; // 영화 포스터 (세로 큼)
        id: number; // 고유 id
        adult?: boolean; // 청소년 관람 불가 or 가능 (boolean)
        backdrop_path: string; // 영화 배경이미지 (가로 큼)
        original_language?: string; // 언어
        original_title?: string; // 영어제목
        genre_ids: number[]; // 장르
        title: string; // 제목
        vote_average: number; // 평점 (10점 만점)
        overview?: string; // 줄거리
        release_date: string; // 개봉일
      }>
    | undefined;
}
const NowPlaying: React.FC<NowPlayingProps> = ({ nowPlaying }) => {
  return (
    <div className="NowPlaying-Wrap">
      <div className="NowPlaying-Wrap-Title">Now Playing</div>
      {nowPlaying && nowPlaying.length > 0 ? (
        nowPlaying
          .slice(0, 20)
          .map((n, i) => (
            <NowCard
              key={i}
              id={n.id}
              backdrop_path={n.backdrop_path}
              title={n.title}
              release_date={n.release_date}
              vote_average={n.vote_average}
            />
          ))
      ) : (
        <div>정보를 얻지 못했습니다 ㅠㅠ</div>
      )}
    </div>
  );
};

interface NowCardProps {
  poster_path?: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  adult?: boolean; // 청소년 관람 불가 or 가능 (boolean)
  backdrop_path: string; // 영화 배경이미지 (가로 큼)
  original_language?: string; // 언어
  original_title?: string; // 영어제목
  genre_ids?: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}
const NowCard: React.SFC<NowCardProps> = ({
  id,
  backdrop_path,
  release_date,
  title,
  vote_average,
}) => {
  const date: string[] = release_date.split("-");
  const backdrop = require("assets/backdrop.png");
  const average: string = (vote_average / 2).toFixed(1);

  return (
    <div className="NowPlaying-Wrap-Content">
      <Link to={`/TMI/detail/${id}`}>
        {backdrop_path !== null ? (
          <img
            className="NowPlaying-Wrap-Content-Img"
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          />
        ) : (
          <img src={backdrop} className="NowPlaying-Wrap-Content-Img" />
        )}
      </Link>
      <div className="NowPlaying-Wrap-Content-Info">
        <div className="NowPlaying-Wrap-Content-Info-Title">
          {title.length < 18 ? title : title.slice(0, 18).concat("...")}
        </div>
        <div className="NowPlaying-Wrap-Content-Info-Vote">
          <div className="NowPlaying-Wrap-Content-Info-Vote-Date">{`${date[0]}.${date[1]}.${date[2]}`}</div>
          <div>
            <span className="NowPlaying-Wrap-Content-Info-Vote-Star">★</span>
            {average}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
