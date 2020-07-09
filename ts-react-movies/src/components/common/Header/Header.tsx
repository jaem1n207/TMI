import React, { CSSProperties } from "react";
import style from "./Header.scss";
import classNames from "classnames/bind";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Props from "./Props";

const cx = classNames.bind(style);

const Header: React.SFC<Props.HeaderProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
  onClick,
}) => {
  const btnStyle = {
    cursor: "pointer",
    color: "#fff",
    height: "74%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
  };
  /*   const inputStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "#0f1016",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    height: "90%",
    width: "36%",
    fontSize: "1.2rem",
    marginLeft: "1%",
  }; */

  return (
    <div className={cx("Header-Wrap")}>
      <div className={cx("Header-Wrap-Nav")}>
        <ul className={cx("Header-Wrap-Nav-Ul")}>
          <li className={cx("Header-Wrap-Nav-Ul-Li")}>
            <NavLink
              exact
              to="/tv"
              style={{
                color: "rgba(70, 74, 84, 1)",
                textDecoration: "line-through",
                cursor: "default",
              }}
              activeStyle={{ color: "rgba(70, 74, 84, 1)" }}
            >
              TV
            </NavLink>
          </li>
          <li className={cx("Header-Wrap-Nav-Ul-Li")}>
            <NavLink to="/movie" activeStyle={{ color: "#59babc" }}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
      <span className={cx("Header-Wrap-Input")}>
        <NavLink to="/movie/search" activeStyle={{ color: "#59babc" }}>
          <label className={cx("Header-Wrap-Button")}>
            <Button
              style={btnStyle}
              text={
                <FontAwesomeIcon
                  className="fa-2x"
                  color="#38393e"
                  icon="search"
                  size={"1x"}
                />
              }
              onClick={onClick}
            ></Button>
          </label>
        </NavLink>
      </span>
    </div>
  );
};

export default Header;
