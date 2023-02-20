import React from "react";
import { colors } from "..";
import { ButtonStyles } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  available?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, available }) => {
  return (
    <ButtonStyles
      onClick={() => {
        available ? onClick() : console.log("not available");
      }}
      inactive={!available}
      colors={colors}
    >
      {children}
    </ButtonStyles>
  );
};
export default Button;
