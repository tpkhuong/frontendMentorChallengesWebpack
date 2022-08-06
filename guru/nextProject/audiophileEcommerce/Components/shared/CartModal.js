import React from "react";
import CartModalStyles from "../../styles/Components/shared/CartModal.module.css";
import CartItem from "./CartItem";

// console.log(JSON.parse(localStorage.getItem("arrayOfObj")));

function CartModal({ children, ...props }) {
  // get data from AddCart component
  const cartModalData = props.addCartDataFromLocalStorage;
  console.log(cartModalData);
  return (
    <div
      data-showcartmodal="false"
      role="dialog"
      aria-modal="true"
      className={CartModalStyles[`cart-modal-wrapper`]}
    >
      <div className={CartModalStyles[`cart-wrapper`]}>
        {/* cart title, remove all and close btn */}
        <div className={CartModalStyles[`title-remove-all-close-btn`]}>
          <h2 className={CartModalStyles[`title-quantity`]}>
            <span className={CartModalStyles[`title`]}>Cart</span>
            <span>
              <span>(</span>
              <span data-cartitems className={CartModalStyles[`cart-quantity`]}>
                3
              </span>
              <span>)</span>
            </span>
          </h2>
          {/* remove all */}
          <button className={CartModalStyles[`remove-all-btn`]}>
            Remove all
          </button>
          {/* close btn */}
          <button
            aria-label="close cart modal"
            className={CartModalStyles[`close-btn`]}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
              <path
                fill="#1B1D23"
                fillRule="evenodd"
                d="M17.425.954l2.12 2.121-7.424 7.425 7.425 7.425-2.121 2.12L10 12.622l-7.425 7.425-2.12-2.121L7.878 10.5.454 3.075 2.575.955 10 8.378 17.425.954z"
              />
            </svg>
          </button>
        </div>
        <div className={CartModalStyles[`cart-items-container`]}>
          <CartItem dataFromCartModal={cartModalData} />
          <CartItem dataFromCartModal={cartModalData} />
          <CartItem dataFromCartModal={cartModalData} />
        </div>
        {/* list of items */}
        {/* <ul></ul> */}
        {/* total text and price */}
        <div className={CartModalStyles[`total-price-wrapper`]}>
          <span className={CartModalStyles[`total`]}>total</span>
          <span className={CartModalStyles[`price`]}>
            <span className={CartModalStyles[`dollar-sign`]}>$</span>
            <span className={CartModalStyles[`price-digit`]}>5,396</span>
          </span>
        </div>
        {/* checkout btn */}
        <button className={CartModalStyles[`checkout-btn`]}>checkout</button>
      </div>
    </div>
  );
}

export default CartModal;
