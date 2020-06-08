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
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Input: React.SFC<InputProps> = ({
  type,
  keyword,
  setKeyword,
  handleKeyPress,
  style,
  onClick,
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
