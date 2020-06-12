import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import classNames from "classnames/bind";
import style from "./DetailRecommend.scss";

const cx = classNames.bind(style);

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

interface DetailRecommendProps {
  recommend:
    | Array<{
        id: number;
        vote_average: number;
        title: string;
        release_date: string;
        backdrop_path: string;
      }>
    | undefined;
}
const DetailRecommend: React.FC<DetailRecommendProps> = ({ recommend }) => {
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
    <>
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>
        Recommended Movie
      </h1>
      <div className="Popular-Wrap">
        <div className="Popular-Wrap-Title">Popular</div>
        <Slider {...setting} className="Popular-Wrap-Slider">
          {recommend && recommend.length > 0 ? (
            recommend
              .slice(0, 18)
              .map((item, i) => (
                <RecommendCard
                  key={i}
                  id={item.id}
                  title={item.title}
                  release_date={item.release_date}
                  vote_average={item.vote_average}
                  backdrop_path={item.backdrop_path}
                />
              ))
          ) : (
            <div>정보를 얻지 못했습니다 ㅠㅠ</div>
          )}
        </Slider>
      </div>
    </>
  );
};

interface RecommendCardProps {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}
const RecommendCard: React.SFC<RecommendCardProps> = ({
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
            style={{
              width: "300px",
              height: "180px",
              marginRight: "20px",
              float: "left",
              borderRadius: "5px",
            }}
            src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className="Popular-Wrap-Content-Img"
            style={{
              width: "300px",
              height: "180px",
              marginRight: "20px",
              float: "left",
              borderRadius: "5px",
            }}
            src={backdrop}
          />
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

export default DetailRecommend;
