import React from "react";
import style from "./Header.scss";
import classNames from "classnames/bind";
import Input from "components/common/Input/Input";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

interface HeaderProps {
  keyword: string;
  setKeyword: Function;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
}
const Header: React.SFC<HeaderProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
}) => {
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
        <Input
          type="text"
          keyword={keyword}
          setKeyword={setKeyword}
          handleKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Header;
