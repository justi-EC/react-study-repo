import React from "react";
import classes from "../Css/Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={classes.Button}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
