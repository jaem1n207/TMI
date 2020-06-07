import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Trailer.scss";
import ReactPlayer from "react-player";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

interface TrailerProps {
  videos:
    | Array<{
        id?: string;
        key: string;
        name?: string;
        site?: string;
        size?: number;
        type?: string;
      }>
    | undefined;
}
const Trailer: React.FC<TrailerProps> = ({ videos }) => {
  const [playing, setPlaying] = useState(Boolean);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleOnReady = () => {
    setTimeout(() => setPlaying(true), 100);
  };

  return (
    <>
      <div className="VideoTitle">Movie Trailer</div>
      {videos?.length === 0 ? (
        <div>정보를 얻지 못했습니다 ㅠㅠ</div>
      ) : (
        <div className="Video-Wrap">
          <Slider {...settings}>
            {videos?.map((k, i) => (
              <ReactPlayer
                url={`https://www.youtube.com/embed/${k.key}`}
                width="1200px"
                height="500px"
                left="0px !important"
                muted={true}
                playing={i === 0 ? playing : false}
                controls={true}
                onReady={handleOnReady}
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Trailer;
