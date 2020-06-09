import React, { CSSProperties } from "react";
import style from "./Header.scss";
import classNames from "classnames/bind";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { Link } from "react-router-dom";
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
    color: "black",
    height: "74%",
    backgroundColor: "#0f1016",
    border: "none",
    outline: "none",
  };
  const inputStyle = {
    color: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "#0f1016",
    border: "none",
    borderRadius: "10px",
    outline: "none",
    height: "90%",
    width: "36%",
    fontSize: "1.2rem",
    marginLeft: "1%",
  };

  return (
    <div className={cx("Header-Wrap")}>
      <div className={cx("Header-Wrap-Nav")}>
        <ul className={cx("Header-Wrap-Nav-Ul")}>
          <li className={cx("Header-Wrap-Nav-Ul-Li")}>
            <Link to="/all">All shows</Link>
          </li>
          <li className={cx("Header-Wrap-Nav-Ul-Li")}>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </div>
      <div className={cx("Header-Wrap-Input")}>
        <Link to="/search">
          <label className={cx("Header-Wrap-Button")}>
            <Button
              style={btnStyle}
              text={
                <FontAwesomeIcon
                  className="fa-2x"
                  color="#38393e"
                  icon="search"
                />
              }
              onClick={onClick}
            ></Button>
          </label>

          <Input
            type="text"
            onClick={onClick}
            keyword={keyword}
            setKeyword={setKeyword}
            handleKeyPress={handleKeyPress}
            style={inputStyle}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
