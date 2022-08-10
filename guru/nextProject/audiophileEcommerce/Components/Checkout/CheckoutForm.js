import React from "react";
import CheckoutFormStyles from "../../styles/Checkout/CheckoutForm.module.css";

function CheckoutForm({ children, ...props }) {
  return (
    <article className={CheckoutFormStyles[`form-wrapper`]}>
      {/* billing details */}
      {/* shipping details */}
      {/* payment details */}
    </article>
  );
}

export default CheckoutForm;
