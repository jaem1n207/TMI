import React from "react";
import style from "./Modal.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface ModalProps {}
const Modal: React.FC<ModalProps> = () => {
  const poster = require("assets/poster.png");

  return (
    <>
      <div className={cx("Modal-Overlay")} />
      <div className={cx("Modal")}>
        <div className={cx("Modal-Scroll")}>
          <div className={cx("Modal-Infor")}>
            <div className={cx("Modal-Infor-Thum")}>
              <span>
                <img src="assets/profile.png" alt="배우 이름" />
              </span>
            </div>
            <div className={cx("Modal-Infor-Article")}>
              <span className={cx("Modal-Infor-Article-Name")}>송강호</span>
              <span className={cx("Modal-Infor-Article-Place")}>대한민국</span>
              <span className={cx("Modal-Infor-Article-Birth")}>
                1996년 06월 01일 : 2020년 03월 01일
              </span>
            </div>
          </div>
          <div className={cx("Modal-Infor-Filmography")}>
            <strong className={cx("Modal-Infor-Filmography-TItle")}>
              필모그래피
            </strong>
            <ul>
              <li>
                <span className={cx("Modal-Infor-Filmography-Poster")}>
                  <img src={poster}></img>
                </span>
                <span className={cx("Modal-Infor-Filmography-Title")}></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
