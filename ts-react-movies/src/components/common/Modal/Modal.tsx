/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import style from "./Modal.scss";
import classNames from "classnames/bind";
import { Scrollbars } from "react-custom-scrollbars";
import ReactTransitionGroup from "react-addons-css-transition-group";

const cx = classNames.bind(style);

interface ModalProps {
  castInfo: any /* gender(1: 여자), birthday, name, deathday, place_of_birth, profile_path,  */;
  castCredits: any;
  modalStatus: boolean;
  close: (e: any) => void;
}
const Modal: React.FC<ModalProps> = ({
  castInfo,
  castCredits,
  modalStatus,
  close,
}) => {
  const profile = require("assets/profile.png");

  return (
    <>
      {modalStatus ? (
        <ReactTransitionGroup
          transitionName={"Modal-anim"}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <div className={cx("Modal-Overlay")} onClick={close} />
          <div className={cx("Modal")}>
            <Scrollbars
              className="ScollbarsColor"
              style={{
                width: "100%",
                height: "500px",
                scrollbarColor: "#f5c518",
              }}
            >
              <div className={cx("Modal-Scroll")}>
                <div className={cx("Modal-Scroll-Infor")}>
                  <div className={cx("Modal-Scroll-Infor-Thum")}>
                    <span>
                      {castInfo.profile_path !== null ? (
                        <img
                          style={{ width: "100%" }}
                          src={`https://image.tmdb.org/t/p/w300${castInfo.profile_path}`}
                        />
                      ) : (
                        <img src={profile} alt="배우 이름" />
                      )}
                    </span>
                  </div>
                  <div className={cx("Modal-Scroll-Infor-Article")}>
                    <span className={cx("Modal-Scroll-Infor-Article-Name")}>
                      {castInfo.name}
                    </span>
                    <span className={cx("Modal-Scroll-Infor-Article-Place")}>
                      {castInfo.place_of_birth === null
                        ? "정보가 없습니다."
                        : castInfo.place_of_birth}
                    </span>
                    <span className={cx("Modal-Scroll-Infor-Article-Birth")}>
                      {castInfo.birthday === null
                        ? "정보가 없습니다"
                        : castCredits.birthday}{" "}
                      {castInfo.deathday === null
                        ? " ~"
                        : `-${castInfo.deathday}`}
                    </span>
                  </div>
                </div>
                <div className={cx("Modal-Scroll-Filmography")}>
                  <strong className={cx("Modal-Scroll-Filmography-Title")}>
                    필모그래피
                  </strong>
                  <ul className={cx("Modal-Scroll-Filmography-Ul")}>
                    {castCredits.length ? (
                      castCredits?.map((item: any, i: number) => (
                        <DetailCastCard
                          key={i}
                          id={item.id}
                          poster_path={item.poster_path}
                          title={item.title}
                        />
                      ))
                    ) : (
                      <ReactTransitionGroup
                        transitionName={"Modal-anim"}
                        transitionEnterTimeout={400}
                        transitionLeaveTimeout={400}
                      />
                    )}
                  </ul>
                </div>
              </div>
            </Scrollbars>
            <div className={cx("Modal-Scroll-Filmography-Btn")}>
              <button onClick={close}>닫기</button>
            </div>
          </div>
        </ReactTransitionGroup>
      ) : null}
    </>
  );
};

export default Modal;

interface DetailCastCardProps {
  poster_path: string;
  id: number;
  title: string;
}
const DetailCastCard: React.SFC<DetailCastCardProps> = ({
  id,
  title,
  poster_path,
}) => {
  const poster = require("assets/poster.png");
  return (
    <li className={cx("Modal-Scroll-Filmography-Ul-Li")}>
      <Link to={`/TMI/detail/${id}`}>
        <span className={cx("Modal-Scroll-Filmography-Ul-Li-Poster")}>
          {poster_path !== null ? (
            <img
              style={{ width: "100%" }}
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            />
          ) : (
            <img src={poster} />
          )}
        </span>
      </Link>
      <span className={cx("Modal-Scroll-Filmography-Ul-Li-Title")}>
        {title}
      </span>
    </li>
  );
};
