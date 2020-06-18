import * as React from "react";
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
  return <div></div>;
};

export default SimilarList;
