import React from "react";
import CartItemStyles from "../../styles/Components/shared/CartItem.module.css";

function CartItem({ children, ...props }) {
  // props.dataFromCartModal
  const cartItemData = props.dataFromCartModal;
  const cartQuantityRef = React.useRef();
  return (
    <div className={CartItemStyles[`item-wrapper`]}>
      {/* img */}
      <div className={CartItemStyles[`img-wrapper`]}>
        <img
          className={CartItemStyles[`cart-item-img`]}
          src="/cart/image-xx59-headphones.jpg"
          alt=""
        />
      </div>
      {/* title and price */}
      <div className={CartItemStyles[`title-price-wrapper`]}>
        <span className={CartItemStyles[`title`]}>xx59</span>
        <span className={CartItemStyles[`price`]}>
          <span className={CartItemStyles[`dollar-sign`]}>$</span>
          <span className={CartItemStyles[`price-digit`]}>2,999</span>
        </span>
      </div>
      {/* increment/decrement button */}
      <div className={CartItemStyles[`cart-quantity`]}>
        <button className={CartItemStyles[`cart-increment`]}>-</button>
        <input type="number" ref={cartQuantityRef} defaultValue={1} />
        <button className={CartItemStyles[`cart-decrement`]}>+</button>
      </div>
    </div>
  );
}

// work on checkout btn and increment/decrement btn algorithm

export default CartItem;
