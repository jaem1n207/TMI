import * as React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "./Trailer.scss";
import ReactPlayer from "react-player";

interface TrailerProps {
  movieKeys: any[] | undefined;
}
const OtherTrailer: React.FC<TrailerProps> = ({ movieKeys }) => {
  const [playing, setPlaying] = useState(Boolean);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* settings with modules */
    dotsClass: "Trailer-Dots",
  };

  const handleOnReady = () => {
    setTimeout(() => setPlaying(true), 100);
  };

  return (
    <>
      <div className="VideoTitle">Movie Trailer</div>
      {movieKeys?.length === 0 ? (
        <div>Trailer를 제공하지 않는 영화입니다.</div>
      ) : (
        <div className="Video-Wrap">
          <Slider {...settings} className="Video-Wrap-Slick">
            {movieKeys?.map((k, i) => (
              <ReactPlayer
                key={k}
                url={`https://www.youtube.com/embed/${k}?enablejsapi=1&origin=http://localhost:9999/`}
                width="100%"
                height="100%"
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

export default OtherTrailer;
