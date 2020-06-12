import * as React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Popular.scss";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

interface PopularProps {
  popular:
    | Array<{
        poster_path?: string; // 영화 포스터 (세로 큼)
        id: number; // 고유 id
        backdrop_path?: string; // 영화 배경이미지 (가로 큼)
        genre_ids: number[]; // 장르
        title: string; // 제목
        vote_average: number; // 평점 (10점 만점)
        overview?: string; // 줄거리
        release_date: string; // 개봉일
      }>
    | undefined;
}
const Popular: React.FC<PopularProps> = ({ popular }) => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <div className="Popular-Wrap">
      <div className="Popular-Wrap-Title">Popular</div>
      <Slider {...setting} className="Popular-Wrap-Slider">
        {popular && popular.length > 0 ? (
          popular
            .slice(0, 18)
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
}) => {
  const year: string = release_date.split("-")[0];
  const month: string = release_date.split("-")[1];
  const backdrop = require("assets/backdrop.png");

  return (
    <div className="Popular-Wrap-Content">
      <Link to={`/detail/${id}`}>
        {backdrop_path !== null ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className="Popular-Wrap-Content-Img"
            src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img className="Popular-Wrap-Content-Img" src={backdrop} />
        )}
      </Link>
      <div className="Popular-Wrap-Content-Info">
        <div className="Popular-Wrap-Content-Info-TDG">
          <div className="Popular-Wrap-Content-Info-TDG-Title">{title}</div>
        </div>
        <div className="Popular-Wrap-Content-Info-TDG-Date">
          {year}.{month}
        </div>
        <div className="Popular-Wrap-Content-Info-Vote">
          <span className="Popular-Wrap-Content-Info-Vote-Star">★</span>
          {vote_average}{" "}
        </div>
      </div>
    </div>
  );
};

export default Popular;
