import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Trailer.scss";
import ReactPlayer from "react-player";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "Trailer-Dots",
  };

  const handleOnReady = () => {
    setTimeout(() => setPlaying(true), 100);
  };

  return (
    <>
      <div className="VideoTitle">Movie Trailer</div>
      {videos?.length === 0 ? (
        <div>Trailer를 제공하지 않는 영화입니다.</div>
      ) : (
        <div className="Video-Wrap">
          <Slider {...settings}>
            {videos?.map((k, i) => (
              <ReactPlayer
                url={`https://www.youtube.com/embed/${k.key}`}
                width="1264px"
                height="517px"
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
