import { CSSProperties } from "styled-components";

export interface HeaderProps {
  btnStyle?: CSSProperties;
  keyword: string;
  setKeyword: Function;
  handleKeyPress?: (e: React.KeyboardEvent) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
