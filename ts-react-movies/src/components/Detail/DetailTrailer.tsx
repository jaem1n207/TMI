import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./DetailTrailer.scss";
import ReactPlayer from "react-player";
import { width } from "@fortawesome/free-solid-svg-icons/faSearch";

interface DetailTrailerProps {
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

const DetailTrailer: React.FC<DetailTrailerProps> = ({ videos }) => {
  const [playing, setPlaying] = useState(Boolean);
  const backdrop = require("assets/backdrop.png");

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
      <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Movie Trailer</h1>
      {videos?.length === 0 ? (
        <div className="DetailVideo-Wrap-Fail">
          <p>Trailer를 제공하지 않는 영화입니다.</p>
          <img
            className="DetailRecommend-Wrap-Content-Img"
            style={{
              width: "300px",
              height: "180px",
              marginRight: "20px",
              float: "left",
              borderRadius: "5px",
            }}
            src={backdrop}
          />
        </div>
      ) : (
        <div className="DetailVideo-Wrap">
          <Slider {...settings} className="DetailVideo-Wrap-VideoSlider">
            {videos?.map((k, i) => (
              <ReactPlayer
                key={i}
                url={`https://www.youtube.com/embed/${k.key}?enablejsapi=1&origin=http://localhost:9999/`}
                width="100%"
                height="480px"
                left="0px !important"
                muted={true}
                playing={i === 0 ? playing : false}
                controls={true}
                onReady={handleOnReady}
                className="DetailVideo-Wrap-Player"
                /*  config={{
                  youtube: {
                    embedOptions: {
                      host: "https://www.youtube-nocookie.com",
                    },
                  },
                }} */
              />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default DetailTrailer;
