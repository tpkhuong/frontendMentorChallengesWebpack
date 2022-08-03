import React from "react";
import AddCartStyles from "../../styles/Product/AddCartContainer.module.css";
import { updateQuantity, addToCartAlgorithm } from "../../utils/helpers";

function AddCart({ children, ...props }) {
  // props obj from Product Text Price Info component
  const propsForCart = props.objOfValues;
  const quantityInputRef = React.useRef();

  return (
    <div className={AddCartStyles[`addcart-wrapper`]}>
      {/* quantity control */}
      <div
        onClick={updateQuantity.bind({ quantityInputRef })}
        className={AddCartStyles[`quantity-wrapper`]}
      >
        {/* decrement */}
        <button
          data-typeofupdate="decrement"
          className={AddCartStyles[`decrement`]}
        >
          -
        </button>
        {/* number input */}
        <input type="number" ref={quantityInputRef} defaultValue="1" />
        {/* increment */}
        <button
          data-typeofupdate="increment"
          className={AddCartStyles[`increment`]}
        >
          +
        </button>
      </div>
      {/* add cart btn */}
      <button
        onClick={addToCartAlgorithm.bind({ quantityInputRef, propsForCart })}
        className={AddCartStyles[`add-cart-btn`]}
      >
        add to cart
      </button>
    </div>
  );
}

export default AddCart;
