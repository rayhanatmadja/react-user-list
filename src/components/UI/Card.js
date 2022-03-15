import React from "react";
import cardStyle from "./Card.module.css";

const Card = ({ children, userStyle, listStyle, modalStyle }) => {
  const classes = `${cardStyle.card} ${userStyle} ${listStyle} ${modalStyle}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
