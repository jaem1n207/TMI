/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import style from "./Modal.scss";
import classNames from "classnames/bind";
import { CastDetailState, ObjectType } from "modules/Detail/detailCast";
import { Scrollbars } from "react-custom-scrollbars";

const cx = classNames.bind(style);

interface ModalProps {
  castInfo: any /* gender(1: 여자), birthday, name, deathday, place_of_birth, profile_path,  */;
  castCredits: Array<ObjectType> | undefined;
}
const Modal: React.FC<ModalProps> = () => {
  const poster = require("assets/poster.png");
  const profile = require("assets/profile.png");

  return (
    <>
      <div className={cx("Modal-Overlay")} />
      <div className={cx("Modal")}>
        <div className={cx("Modal-Scroll")}>
          <div className={cx("Modal-Scroll-Infor")}>
            <div className={cx("Modal-Scroll-Infor-Thum")}>
              <span>
                <img src={profile} alt="배우 이름" />
              </span>
            </div>
            <div className={cx("Modal-Scroll-Infor-Article")}>
              <span className={cx("Modal-Scroll-Infor-Article-Name")}>
                송강호
              </span>
              <span className={cx("Modal-Scroll-Infor-Article-Place")}>
                대한민국
              </span>
              <span className={cx("Modal-Scroll-Infor-Article-Birth")}>
                1996년 06월 01일 : 2020년 03월 01일
              </span>
            </div>
          </div>
          <div className={cx("Modal-Scroll-Infor-Filmography")}>
            <strong className={cx("Modal-Scroll-Infor-Filmography-Title")}>
              필모그래피
            </strong>
            <ul className={cx("Modal-Scroll-Infor-Filmography-Ul")}>
              <li className={cx("Modal-Scroll-Infor-Filmography-Ul-Li")}>
                <span
                  className={cx("Modal-Scroll-Infor-Filmography-Ul-Li-Poster")}
                >
                  <img src={poster}></img>
                </span>
                <span
                  className={cx("Modal-Scroll-Infor-Filmography-Ul-Li-Title")}
                ></span>
              </li>
            </ul>
            <div className={cx("Modal-Scroll-Infor-Filmography-Btn")}>
              <button>닫기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
