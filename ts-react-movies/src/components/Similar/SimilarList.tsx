import * as React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Similar.scss";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

interface SimilarListProps {
  similar:
    | Array<{
        id: number;
        title: string;
        backdrop_path: string;
        release_date: string;
        vote_average: number;
      }>
    | undefined;
}
const SimilarList: React.FC<SimilarListProps> = ({ similar }) => {
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
    <div className="SimilarList">
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Similar Movie</h1>
      <div className="SimilarList-Wrap">
        <div className="SimilarList-Wrap-Title"></div>
        <Slider {...setting} className="SimilarList-Wrap-Slider1">
          {similar && similar.length > 0 ? (
            similar
              .slice(0, 18)
              .map((item, i) => (
                <SimilarCard
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
    </div>
  );
};

export default SimilarList;

interface SimilarCardProps {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}
const SimilarCard: React.SFC<SimilarCardProps> = ({
  id,
  backdrop_path,
  title,
  release_date,
  vote_average,
}) => {
  const year: string = release_date.split("-")[0];
  const month: string = release_date.split("-")[1];
  const backdrop = require("assets/backdrop.png");
  const average: string = (vote_average / 2).toFixed(1);

  return (
    <div className="SimilarList-Wrap-Content">
      <Link to={`/TMI/detail/${id}`}>
        {backdrop_path !== null ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            className="SimilarList-Wrap-Content-Img"
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
            className="SimilarList-Wrap-Content-Img"
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
      <div className="SimilarList-Wrap-Content-Info">
        <div className="SimilarList-Wrap-Content-Info-TDG">
          <div className="SimilarList-Wrap-Content-Info-TDG-Title">{title}</div>
        </div>
        <div className="SimilarList-Wrap-Content-Info-TDG-Date">
          {year}.{month}
        </div>
        <div className="SimilarList-Wrap-Content-Info-Vote">
          <span className="SimilarList-Wrap-Content-Info-Vote-Star">★</span>
          {average}{" "}
        </div>
      </div>
    </div>
  );
};
