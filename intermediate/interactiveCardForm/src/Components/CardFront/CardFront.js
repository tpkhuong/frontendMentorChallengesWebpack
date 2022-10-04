import React from "react";
import CardFrontStyles from "./CardFront.module.css";
import { LinkValuesToInputContext } from "../SectionWrapper/SectionWrapper";

export default function CardFront({ children, ...props }) {
  // set up state to re-render this component
  const [frontCardNumValue, setFrontCardNumberState] = React.useState(false);
  // create refs to front card display elements
  const cardNumberRef = React.useRef();
  const cardHolderRef = React.useRef();
  const expMonthRef = React.useRef();
  const expYearRef = React.useRef();
  // amex
  const creditNumberAmex = React.useRef();
  const cardFrontRef = React.useContext(LinkValuesToInputContext);
  cardFrontRef.creditCard.name = cardHolderRef;
  cardFrontRef.creditCard.number = cardNumberRef;
  cardFrontRef.creditCard.expMonth = expMonthRef;
  cardFrontRef.creditCard.expYear = expYearRef;
  // amex
  cardFrontRef.amex.number = creditNumberAmex;
  // assign setFrontCardNumberState to context obj
  cardFrontRef.setStateFuncRef.front = setFrontCardNumberState;
  return (
    <React.Fragment>
      <div className={CardFrontStyles[`front-wrapper`]}>
        {/* bg-img */}
        {/* logo */}
        <div className={CardFrontStyles[`logo-img-container`]}>
          <svg
            viewBox="0 0 100 45"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
        </div>
        {/* text-content */}
        <div className={CardFrontStyles[`text-content`]}>
          {!frontCardNumValue ? (
            <span
              ref={cardNumberRef}
              id="front-number-display"
              className={CardFrontStyles[`credit-card-number-display`]}
            >
              0000 0000 0000 0000
            </span>
          ) : (
            // amex
            <span
              ref={creditNumberAmex}
              id="front-number-display"
              className={CardFrontStyles[`credit-card-number-display`]}
            >
              0000 000000 00000
            </span>
          )}
          {/* name and exp date */}
          <div className={CardFrontStyles[`name-expdate-wrapper`]}>
            <span
              ref={cardHolderRef}
              className={CardFrontStyles[`name-display`]}
            >
              jane appleseed
            </span>
            <span className={CardFrontStyles[`expdate-display`]}>
              <span
                ref={expMonthRef}
                className={CardFrontStyles[`exp-month-display`]}
              >
                00
              </span>
              <span>/</span>
              <span
                ref={expYearRef}
                className={CardFrontStyles[`exp-year-display`]}
              >
                00
              </span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
