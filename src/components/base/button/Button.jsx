import React from "react";
import { ButtonWrapper } from "./styles.js";

const Button = ({ name, onClick }) => {
  return (
    <ButtonWrapper>
      <input type="submit" value={name} onClick={onClick} />
    </ButtonWrapper>
  );
};

export default Button;
