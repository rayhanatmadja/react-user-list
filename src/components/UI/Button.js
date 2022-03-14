import React from "react";
import btnStyle from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  return (
    <button
      className={btnStyle.button}
      type={type}
      onClick={onClick || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
