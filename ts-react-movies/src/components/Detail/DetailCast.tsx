import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./DetailCast.scss";
import { CreditsType } from "modules/Detail/types";

const cx = classNames.bind(style);

interface DetailCastProps {
  detailCast: CreditsType;
}

const DetailCast: React.SFC<DetailCastProps> = ({ detailCast }) => {
  console.log(detailCast.cast);

  return (
    <div className={cx("DetailCast-Wrap")}>
      <ul>
        {detailCast.cast && detailCast.cast.length > 0 ? (
          detailCast.cast
            .slice(0, 36)
            .map((item, i) => (
              <CastCard
                key={i}
                id={item.id}
                profile_path={item.profile_path}
                name={item.name}
                character={item.character}
              />
            ))
        ) : (
          <div>정보를 얻지 못했습니다</div>
        )}
      </ul>
    </div>
  );
};

export default DetailCast;

interface CastcardProps {
  id: number;
  profile_path: string | null;
  name: string;
  character: string;
}
const CastCard: React.SFC<CastcardProps> = ({
  id,
  profile_path,
  name,
  character,
}) => {
  const profile = require("assets/profile.png");

  return (
    <li className={cx("DetailCast-Wrap-Info")}>
      <Link to={`/people/${id}`}>
        {profile_path !== null ? (
          <img
            style={{ width: "111px", height: "139px" }}
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
          />
        ) : (
          <img src={profile} />
        )}
      </Link>
      <div className={cx("DetailCast-Wrap-Info-Div")}>
        <div className={cx("DetailCast-Wrap-Info-Div-Inner")}>
          <span className={cx("DetailCast-Wrap-Info-Div-Inner-Name")}>
            {name}
          </span>
          <span className={cx("DetailCast-Wrap-Info-Div-Inner-C")}>
            {character}
          </span>
        </div>
      </div>
    </li>
  );
};
