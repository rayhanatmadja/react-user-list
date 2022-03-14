import React from "react";
import cardStyle from "./Card.module.css";

const Card = ({ children, userStyle, listStyle }) => {
  const classes = `${cardStyle.card} ${userStyle} ${listStyle}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
