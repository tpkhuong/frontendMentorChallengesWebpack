import React from "react";
import CheckoutSummaryStyles from "../../styles/Checkout/CheckoutSummary.module.css";
import {
  addCommasToPrice,
  cartModalTotalPrice,
  taxCalculation,
} from "../../utils/helpers";

function CheckoutSummary({ children, ...props }) {
  // props.dataPassedToSummary;
  // calculate tax and grand total before we assign them to values in our
  // summary item obj
  // build array of obj
  return (
    <article className={CheckoutSummaryStyles[`summary-wrapper`]}>
      {/* title */}
      <h2 className={CheckoutSummaryStyles[`title`]}></h2>
      {/* ul>li using .map() */}
      <ul className={CheckoutSummaryStyles[`summary-item-list`]}></ul>
      <div className={CheckoutSummaryStyles[`total-tax-shipping-wrapper`]}>
        {/* total price */}
        <div className={CheckoutSummaryStyles[`total-price-wrapper`]}>
          <span className={CheckoutSummaryStyles[`text`]}></span>
          <span className={CheckoutSummaryStyles[`price`]}>
            <span className={CheckoutSummaryStyles[`dollar-sign`]}></span>
            <span className={CheckoutSummaryStyles[`price-digit`]}></span>
          </span>
        </div>
        {/* shipping price */}
        <div></div>
        {/* VAT (tax) */}
        <div></div>
        {/* grand total */}
        <div></div>
      </div>
      {/* continue and pay btn */}
    </article>
  );
}

export default CheckoutSummary;
