import React from "react";
import cardStyle from "./Card.module.css";

const Card = ({ children, userStyle }) => {
  const classes = `${cardStyle.card} ${userStyle}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
