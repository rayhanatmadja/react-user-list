import React from "react";
import btnStyle from "./Button.module.css";

const Button = ({ type, children }) => {
  return (
    <button className={btnStyle.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
