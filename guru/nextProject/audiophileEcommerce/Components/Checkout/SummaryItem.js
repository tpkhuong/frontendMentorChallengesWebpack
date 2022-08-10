import React from "react";
import SummaryItemStyles from "../../styles/Checkout/SummaryItem.module.css";

function SummaryItem({ children, ...props }) {
  // props.dataForSummaryItem;
  return (
    <div className={SummaryItemStyles[`item-wrapper`]}>
      {/* img wrapper */}
      <div className={SummaryItemStyles[`img-wrapper`]}>
        <img src="" alt="" />
      </div>
      {/* title and price */}
      <div className={SummaryItemStyles[`title-price-wrapper`]}>
        <span className={SummaryItemStyles[`title`]}></span>
        <span className={SummaryItemStyles[`dollar-sign-price-wrapper`]}>
          <span className={SummaryItemStyles[`dollar-sign`]}></span>
          <span className={SummaryItemStyles[`price`]}></span>
        </span>
      </div>
      {/* quantity */}
      <div className={SummaryItemStyles[`quantity`]}>
        <span>x</span>
        <span className={SummaryItemStyles[`quantity-digit`]}></span>
      </div>
    </div>
  );
}

export default SummaryItem;
