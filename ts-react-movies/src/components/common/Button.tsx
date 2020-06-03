import * as React from "react";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset" | undefined;
}
const Button: React.SFC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
