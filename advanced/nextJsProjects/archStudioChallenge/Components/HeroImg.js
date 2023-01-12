import React from "react";
import HeroImgStyles from "../styles/HeroImg.module.css";

function HeroImg({ children, ...props }) {
  return (
    <div className={HeroImgStyles[`img-wrapper`]}>
      <picture>
        <source media="(min-width: 1440px)" srcSet={props.desktop} />
        <source media="(min-width: 768px)" srcSet={props.tablet} />
        <img src={props.mobile} alt={props.text} />
      </picture>
    </div>
  );
}

export default HeroImg;
