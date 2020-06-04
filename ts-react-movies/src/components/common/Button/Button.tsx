import * as React from "react";
import { CSSProperties } from "styled-components";

interface ButtonProps {
  text: string | JSX.Element;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  style?: CSSProperties | undefined;
}
const Button: React.SFC<ButtonProps> = ({
  style,
  text = "",
  onClick,
  type,
}) => {
  return (
    <button style={style} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
