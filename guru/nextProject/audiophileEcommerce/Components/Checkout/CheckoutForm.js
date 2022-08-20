import React from "react";
import CheckoutFormStyles from "../../styles/Checkout/CheckoutForm.module.css";
import BillingShippingWrapper from "./BillingShippingWrapper";
import PersonalInfo from "./PersonalInfo";
import Payment from "./Payment";

function CheckoutForm({ children, ...props }) {
  return (
    <article className={CheckoutFormStyles[`form-wrapper`]}>
      <h2 className={CheckoutFormStyles[`title`]}>Checkout</h2>
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
