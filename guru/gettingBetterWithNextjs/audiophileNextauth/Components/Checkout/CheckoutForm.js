import React from "react";
import CheckoutFormStyles from "../../styles/Checkout/CheckoutForm.module.css";
import BillingShippingWrapper from "./BillingShippingWrapper";
import PersonalInfo from "./PersonalInfo";

function CheckoutForm({ children, ...props }) {
  return (
    <article className={CheckoutFormStyles[`form-wrapper`]}>
      {/* Personal Info */}
      <PersonalInfo />
      {/* <BillingShippingWrapper /> */}
      {/* billing details */}
      {/* shipping details */}
      {/* payment details */}
    </article>
  );
}

export default CheckoutForm;
