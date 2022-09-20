import React from "react";
import CardBackStyles from "./CardBack.module.css";

export default function CardBack({ children, ...props }) {
  return (
    <React.Fragment>
      <div className={CardBackStyles[`back-wrapper`]}>
        {/* bg-img */}
        <p className={CardBackStyles[`cvc-code`]}>000</p>
      </div>
    </React.Fragment>
  );
}
