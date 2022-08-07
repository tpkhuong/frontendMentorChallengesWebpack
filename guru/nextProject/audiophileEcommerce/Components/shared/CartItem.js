import React from "react";
import CartItemStyles from "../../styles/Components/shared/CartItem.module.css";
import { cartItemQuantityFunc } from "../../utils/helpers";

function CartItem({ children, ...props }) {
  // props.dataFromCartModal
  const { strImgSrc, quantityForInput, title, priceStr } =
    props.dataFromCartModal;
  const cartQuantityRef = React.useRef();

  return (
    <div className={CartItemStyles[`item-wrapper`]}>
      {/* img */}
      <div className={CartItemStyles[`img-wrapper`]}>
        <img
          className={CartItemStyles[`cart-item-img`]}
          src={strImgSrc}
          alt=""
        />
      </div>
      {/* title and price */}
      <div className={CartItemStyles[`title-price-wrapper`]}>
        <span className={CartItemStyles[`title`]}>{title}</span>
        <span className={CartItemStyles[`price`]}>
          <span className={CartItemStyles[`dollar-sign`]}>$</span>
          <span className={CartItemStyles[`price-digit`]}>{priceStr}</span>
        </span>
      </div>
      {/* increment/decrement button */}
      <div
        onClick={cartItemQuantityFunc}
        className={CartItemStyles[`cart-quantity`]}
      >
        {/* hitting increment/decrement button will update both quantity and total price of item in local storage */}
        <button
          data-typeofbtn="increment"
          className={CartItemStyles[`cart-increment`]}
        >
          -
        </button>
        {/* value of input will be total quantity of item in local storage */}
        <input
          type="number"
          ref={cartQuantityRef}
          defaultValue={quantityForInput}
        />
        <button
          data-typeofbtn="decrement"
          className={CartItemStyles[`cart-decrement`]}
        >
          +
        </button>
      </div>
    </div>
  );
}

// work on checkout btn and increment/decrement btn algorithm

export default CartItem;
