import React from "react";
import SectionStyles from "./SectionWrapper.module.css";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import BottomContainer from "../BottomContainer/BottomContainer";

export default function SectionWrapper({ children, ...props }) {
  return (
    <section className={SectionStyles[`interactive-card-wrapper`]}>
      <h1 className="visually-hidden">Interactive Card Form</h1>
      <div className={SectionStyles[`cards-container`]}>
        {/* front and back */}
        {/* front */}
        <CardFront />
        {/* back */}
        <CardBack />
      </div>
      {/* form inputs and confirm component wrapper*/}
      <BottomContainer />
    </section>
  );
}
