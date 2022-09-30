import React from "react";
import CardBackStyles from "./CardBack.module.css";
import { LinkValuesToInputContext } from "../SectionWrapper/SectionWrapper";

export default function CardBack({ children, ...props }) {
  // set up state to re-render this component
  const [backCardNumValue, setBackCardNumberState] = React.useState(false);
  const creditCardBackRef = React.useContext(LinkValuesToInputContext);
  // create ref to cvc
  const cvcRef = React.useRef();
  // amex
  const amexCvcRef = React.useRef();
  creditCardBackRef.creditCard.cvc = cvcRef;
  // amex
  creditCardBackRef.amex.cvc = amexCvcRef;
  // assign setBackCardNumberState to context obj
  creditCardBackRef.setStateFuncRef.back = setBackCardNumberState;
  return (
    <React.Fragment>
      <div className={CardBackStyles[`back-wrapper`]}>
        {/* bg-img */}
        {!backCardNumValue ? (
          <p ref={cvcRef} className={CardBackStyles[`cvc-code`]}>
            000
          </p>
        ) : (
          // amex
          <p ref={amexCvcRef} className={CardBackStyles[`cvc-code`]}>
            0000
          </p>
        )}
      </div>
    </React.Fragment>
  );
}
