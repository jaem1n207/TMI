import * as React from "react";
import { Link } from "react-router-dom";
import genres from "lib/types/genre";
import Slider from "react-slick";

interface PopularProps {
  popular:
    | Array<{
        poster_path?: string; // 영화 포스터 (세로 큼)
        id: number; // 고유 id
        backdrop_path?: string; // 영화 배경이미지 (가로 큼)
        genre_ids?: number[]; // 장르
        title: string; // 제목
        vote_average: number; // 평점 (10점 만점)
        overview?: string; // 줄거리
        release_date: string; // 개봉일
      }>
    | undefined;
}
const Popular: React.FC<PopularProps> = ({ popular }) => {
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...setting}>
        {popular && popular.length > 0 ? (
          popular
            .slice(0, 5)
            .map((p, i) => (
              <PopularCard
                key={i}
                id={p.id}
                backdrop_path={p.backdrop_path}
                title={p.title}
                release_date={p.release_date}
                vote_average={p.vote_average}
                genre_ids={p.genre_ids}
              />
            ))
        ) : (
          <div>정보를 얻지 못했습니다 ㅠㅠ</div>
        )}
      </Slider>
    </div>
  );
};

interface PopularCardProps {
  poster_path?: string; // 영화 포스터 (세로 큼)
  id: number; // 고유 id
  backdrop_path?: string; // 영화 배경이미지 (가로 큼)
  genre_ids: number[]; // 장르
  title: string; // 제목
  vote_average: number; // 평점 (10점 만점)
  overview?: string; // 줄거리
  release_date: string; // 개봉일
}
const PopularCard: React.SFC<PopularCardProps> = ({
  id,
  release_date,
  title,
  vote_average,
  backdrop_path,
  genre_ids,
}) => {
  const date: string = release_date.split("-")[0];
  const genresArr: string[] = genre_ids.map((genre) => genres[genre]);
  const backdrop = require("assets/backdrop.png");

  return (
    <div>
      <Link to={`/detail:/${id}`}>
        {backdrop_path !== null ? (
          <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
        ) : (
          <img src={backdrop} />
        )}
      </Link>
      <div>
        <div>
          <div>{title}</div>
          <div>{date}</div>
          <div>
            {genresArr.map((genre, i) => (
              <div key={i}>{genre}</div>
            ))}
          </div>
        </div>
        <div>{vote_average}</div>
      </div>
    </div>
  );
};

export default Popular;
