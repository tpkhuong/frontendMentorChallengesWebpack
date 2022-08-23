import React from "react";
import TitleStyles from "./Title.module.css";

export default function Title({ children, ...props }) {
  return (
    <React.Fragment>
      <h2 className={TitleStyles[`blue-bg`]}>{props.name}</h2>
    </React.Fragment>
  );
}
