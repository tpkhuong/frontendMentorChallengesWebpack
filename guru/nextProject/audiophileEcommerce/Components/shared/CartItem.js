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
        <img src="/cart/image-xx59-headphones.jpg" alt="" />
      </div>
      {/* title and price */}
      <div className={CartItemStyles[`title-price-wrapper`]}>
        <span className={CartItemStyles[`title`]}></span>
        <span className={CartItemStyles[`price`]}></span>
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

export default CartItem;
