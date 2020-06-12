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
  return (
    <div className={cx("DetailCast-People")}>
      <div className={cx("DetailCast-People-Title")}>
        <h2 className={cx("DetailCast-People-Title-Info")}>Cast</h2>
      </div>
      <div className={cx("DetailCast-People-Box")}>
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
    <li>
      <Link to={`/people/${id}`}>
        <span className={cx("DetailCast-People-Box-Post")}>
          {profile_path !== null ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img
              style={{ width: "100%" }}
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={profile} />
          )}
        </span>
      </Link>
      <div className={cx("DetailCast-People-Box-Div")}>
        <div className={cx("DetailCast-People-Box-Div-Inner")}>
          <span className={cx("DetailCast-People-Box-Div-Inner-Name")}>
            {name}
          </span>
          <span className={cx("DetailCast-People-Box-Div-Inner-Ch")}>
            {character}
          </span>
        </div>
      </div>
    </li>
  );
};
