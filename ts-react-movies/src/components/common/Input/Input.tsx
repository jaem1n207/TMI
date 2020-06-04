import * as React from "react";
import style from "./Input.scss";
import classNames from "classnames/bind";
import { CSSProperties } from "styled-components";

const cx = classNames.bind(style);

export interface InputProps {
  placeholder?: string;
  keyword: string;
  setKeyword: Function;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  type?: string | undefined;
  style?: CSSProperties | undefined;
}

const Input: React.SFC<InputProps> = ({
  type,
  keyword,
  setKeyword,
  handleKeyPress,
  style,
}) => {
  return (
    <input
      className={cx("Input-Keyword")}
      type={type}
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Search"
      style={style}
    ></input>
  );
};

export default Input;
