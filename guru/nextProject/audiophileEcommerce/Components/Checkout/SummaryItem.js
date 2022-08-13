import React from "react";
import SummaryItemStyles from "../../styles/Checkout/SummaryItem.module.css";

function SummaryItem({ children, ...props }) {
  // props.dataForSummaryItem;
  return (
    <div className={SummaryItemStyles[`item-wrapper`]}>
      {/* img wrapper */}
      <div className={SummaryItemStyles[`img-wrapper`]}>
        <img src="/cart/image-xx59-headphones.jpg" alt="" />
      </div>
      {/* title and price */}
      <div className={SummaryItemStyles[`title-price-wrapper`]}>
        <span className={SummaryItemStyles[`title`]}>XX99 MK II</span>
        <span className={SummaryItemStyles[`dollar-sign-price-wrapper`]}>
          <span className={SummaryItemStyles[`dollar-sign`]}>$</span>
          <span className={SummaryItemStyles[`price`]}>2,999</span>
        </span>
      </div>
      {/* quantity */}
      <div className={SummaryItemStyles[`quantity`]}>
        <span>x</span>
        <span className={SummaryItemStyles[`quantity-digit`]}>2</span>
      </div>
    </div>
  );
}

export default SummaryItem;
