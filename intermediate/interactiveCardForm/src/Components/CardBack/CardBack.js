import React from "react";
import CardBackStyles from "./CardBack.module.css";
import { LinkValuesToInputContext } from "../SectionWrapper/SectionWrapper";

export default function CardBack({ children, ...props }) {
  const creditCardBackRef = React.useContext(LinkValuesToInputContext);
  // create ref to cvc
  const cvcRef = React.useRef();
  creditCardBackRef.creditCard.cvc = cvcRef;
  return (
    <React.Fragment>
      <div className={CardBackStyles[`back-wrapper`]}>
        {/* bg-img */}
        <p ref={cvcRef} className={CardBackStyles[`cvc-code`]}>
          000
        </p>
      </div>
    </React.Fragment>
  );
}
