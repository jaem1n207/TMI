import * as React from "react";
import style from "./Input.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export interface InputProps {
  placeholder?: string;
  keyword: string;
  setKeyword: Function;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  type?: string | undefined;
}

const Input: React.SFC<InputProps> = ({
  type,
  keyword,
  setKeyword,
  handleKeyPress,
}) => {
  return (
    <input
      className={cx("Input-Keyword")}
      type={type}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Search"
    ></input>
  );
};

export default Input;
