import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./DetailCast.scss";
import {
  CreditsType,
  GenresType,
  BelongsToCollectionType,
  ProductionCompanyType,
} from "modules/Detail/types";

const cx = classNames.bind(style);

interface DetailCastProps {
  detail: {
    poster_path: string;
    title: string;
    genres: Array<GenresType>;
    adult: boolean;
    credits: CreditsType;
    belongs_to_collection: Array<BelongsToCollectionType>;
    budget: number;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    production_companies: Array<ProductionCompanyType>;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

const DetailCast: React.SFC<DetailCastProps> = ({ detail }) => {
  const { credits } = detail;
  console.log(credits);

  return <div className={cx("DetailCast-Wrap")}></div>;
};

export default DetailCast;

// interface CastcardProps {
//   id: number;
//   profile_path: string;
//   name: string;
//   character: string;
// }
// const CastCard: React.SFC<CastcardProps> = ({
//   id,
//   profile_path,
//   name,
//   character,
// }) => {
//   const profile = require("assets/profile.png");

//   return (
//     <div className={cx("DetailCast-Wrap-Info")}>
//       <Link to={`/people/${id}`}>
//         {profile_path !== null ? (
//           <img
//             style={{ width: "111px", height: "139px" }}
//             src={`https://image.tmdb.org/t/p/w300${profile_path}`}
//           />
//         ) : (
//           <img src={profile} />
//         )}
//       </Link>
//     </div>
//   );
// };
