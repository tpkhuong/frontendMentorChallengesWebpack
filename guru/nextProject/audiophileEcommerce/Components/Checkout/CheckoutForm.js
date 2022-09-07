import React from "react";
import CheckoutFormStyles from "../../styles/Checkout/CheckoutForm.module.css";
import BillingShippingWrapper from "./BillingShippingWrapper";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";
import FormAssistiveLinks from "./FormAssistiveLinks";

// Context here

function CheckoutForm({ children, ...props }) {
  return (
    <article className={CheckoutFormStyles[`form-wrapper`]}>
      {/* input assistive component here */}
      <h2 className={CheckoutFormStyles[`title`]}>Checkout</h2>
      {/* hamburger svg with custm lines element */}
      {/* <div className={CheckoutFormStyles[`img-wrapper`]}>
        <svg x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50">
          <g>
            <line
              className={CheckoutFormStyles[`top-line`]}
              x1="10"
              x2="35"
              // y2="50"
              stroke="black"
              strokeWidth="5"
            />
            <line
              className={CheckoutFormStyles[`middle-line`]}
              x1="10"
              x2="35"
              // y1="30"
              // y2="30"
              stroke="black"
              strokeWidth="5"
            />
            <line
              className={CheckoutFormStyles[`bottom-line`]}
              x1="10"
              x2="35"
              // y1="80"
              // y2="10"
              stroke="black"
              strokeWidth="5"
            />
          </g>
        </svg>
      </div> */}
      {/* assistive input links */}
      <FormAssistiveLinks />
      {/* each component will work with same obj in localstorage */}
      {/* Personal Info */}
      <PersonalInfo />
      {/* <BillingShippingWrapper /> */}
      <BillingShippingWrapper />
      {/* billing details */}
      {/* shipping details */}
      {/* payment details */}
      <Payment />
    </article>
  );
}

export default CheckoutForm;
