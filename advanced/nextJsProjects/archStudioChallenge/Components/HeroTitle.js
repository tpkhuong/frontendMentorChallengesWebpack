import React from "react";
import HeroTitleStyles from "../styles/HeroTitle.module.css";

function HeroTitle({ children, ...props }) {
  return (
    <h2 aria-hidden="true" className={HeroTitleStyles[`title`]}>
      {children}
    </h2>
  );
}

export default HeroTitle;
