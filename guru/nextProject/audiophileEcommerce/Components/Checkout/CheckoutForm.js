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
        <svg width="50px" height="50px">
          <g>
            <line
              className={CheckoutFormStyles[`top-line`]}
              x1="4.8"
              y1="9.6"
              x2="27.2"
              y2="9.6"
              // y2="50"
              stroke="black"
              strokeWidth="5"
            />
            <line
              className={CheckoutFormStyles[`middle-line`]}
              x1="27.2"
              y1="22.4"
              x2="4.8"
              y2="22.4"
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
