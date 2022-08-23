import React from "react";
import OrderModalStyles from "../../styles/Checkout/OrderModal.module.css";
import OrderedItems from "./OrderedItems";

export default function OrderModal({ children, ...props }) {
  console.log(props.arrayOfItems);
  return (
    <React.Fragment>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        className={OrderModalStyles[`order-modal-wrapper`]}
      >
        {/* faded bg */}
        <div className={OrderModalStyles[`order-wrapper`]}>
          {/* white bg */}
          {/* svg icon */}
          <div className={OrderModalStyles[`checked-icon`]}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
          </div>
          {/* title */}
          {/* padding block on title */}
          <h2 className={OrderModalStyles[`title`]} id="order-modal-title">
            <span>Thank you</span>
            <span className={OrderModalStyles[`display-block`]}>
              for your order
            </span>
          </h2>
          {/* confirm text */}
          <span className={OrderModalStyles[`description`]}>
            You will receive an email confirmation shortly.
          </span>
          {/* ordered items component */}
          {/* padding block on ordered items component */}
          <OrderedItems cartInfoArr={props.arrayOfItems} />
          <div></div>
          {/* back home btn */}
          <a href="/" className={OrderModalStyles[`back-to-home-btn`]}>
            back to home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
