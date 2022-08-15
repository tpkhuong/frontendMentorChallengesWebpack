import React from "react";
import CartItemStyles from "../../styles/Components/shared/CartItem.module.css";
import {
  // cartItemQuantityFunc,
  cartItemInputOnChange,
  cartItemIncrement,
  cartItemDecrement,
} from "../../utils/helpers";

function CartItem({ children, ...props }) {
  // props.dataFromCartModal
  const {
    strImgSrc,
    quantityForInput,
    title,
    priceStr,
    altTextCartModalSummaryItem,
  } = props.dataFromCartModal;
  // pass data to cart item click event listener
  const dataForQuantityUpdate = props.dataFromCartModal;
  // save ref of increment/decrement/quantity input using React.useRef()
  const cartItemQuantityRef = React.useRef();
  // const cartItemIncrementRef = React.useRef();
  // const cartItemDecrementRef = React.useRef();
  const refTotalPrice = props.totalPriceRef;
  return (
    <div className={CartItemStyles[`item-wrapper`]}>
      {/* img */}
      <div className={CartItemStyles[`img-wrapper`]}>
        <img
          className={CartItemStyles[`cart-item-img`]}
          src={strImgSrc}
          alt={altTextCartModalSummaryItem}
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
        // onClick={cartItemQuantityFunc}
        className={CartItemStyles[`cart-quantity`]}
      >
        {/* hitting increment/decrement button will update both quantity and total price of item in local storage */}
        <button
          onClick={cartItemDecrement.bind({
            cartItemQuantityRef,
            dataForQuantityUpdate,
            refTotalPrice,
          })}
          data-typeofbtn="increment"
          className={CartItemStyles[`cart-increment`]}
          // ref={cartItemIncrementRef}
        >
          -
        </button>
        {/* value of input will be total quantity of item in local storage */}
        <input
          onChange={cartItemInputOnChange.bind({
            dataForQuantityUpdate,
            refTotalPrice,
          })}
          type="number"
          ref={cartItemQuantityRef}
          defaultValue={quantityForInput}
        />
        <button
          onClick={cartItemIncrement.bind({
            cartItemQuantityRef,
            dataForQuantityUpdate,
            refTotalPrice,
          })}
          // ref={cartItemDecrementRef}
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
