import React from "react";
import Modal from "containers/Detail/DetailCastContainer";
import classNames from "classnames/bind";
import style from "./DetailCast.scss";
import { CreditsType } from "modules/Detail";
import { Scrollbars } from "react-custom-scrollbars";

const cx = classNames.bind(style);

interface DetailCastProps {
  detailCast: CreditsType;
  modalStaus: boolean;
}

const DetailCast: React.SFC<DetailCastProps> = ({ detailCast, modalStaus }) => {
  return (
    <div className={cx("DetailCast-People")}>
      <div className={cx("DetailCast-People-Title")}>
        <h1 style={{ color: "#f5c518", paddingLeft: "16px" }}>Cast</h1>
      </div>
      <Scrollbars
        className="ScollbarsColor"
        style={{ width: "100%", height: "500px", scrollbarColor: "#f5c518" }}
      >
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
                    modalStatus={modalStaus}
                  />
                ))
            ) : (
              <div>정보를 얻지 못했습니다</div>
            )}
          </ul>
        </div>
      </Scrollbars>
    </div>
  );
};

export default DetailCast;

interface CastcardProps {
  id: number;
  profile_path: string | null;
  name: string;
  character: string;
  modalStatus: boolean;
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
      {/* Modal Start */}
      <div className={cx("DetailCast-People-Box-Modal")}>
        <Modal castId={id} />
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
      </div>
      <div className={cx("DetailCast-People-Box-Div")}>
        <div className={cx("DetailCast-People-Box-Div-Inner")}>
          <div>
            <span className={cx("DetailCast-People-Box-Div-Inner-Name")}>
              {name}
            </span>
          </div>
          <span className={cx("DetailCast-People-Box-Div-Inner-Ch")}>
            {character}
          </span>
        </div>
      </div>
    </li>
  );
};
