import React from "react";
// import CartBtnModalStyles from "../../styles/Product/AddCartBtnAndModal.module.css";
import CartModal from "../shared/CartModal";
import { addToCartAlgorithm } from "../../utils/helpers";

function AddCartBtnModal({ children, ...props }) {
  const [cartState, useCartState] = React.useState(false);
  //   console.log(props.cartBtnModalData);
  const { propsForCart, quantityInputRef } = props.cartBtnModalData;
  return (
    <React.Fragment>
      <button
        onClick={addToCartAlgorithm.bind({
          quantityInputRef,
          propsForCart,
          useCartState,
        })}
        className={CartBtnModalStyles[`add-cart-btn`]}
      >
        add to cart
      </button>
      {/* cart modal */}
      {(typeof cartState == "object") & (cartState !== null) ? (
        <CartModal dataFromAddCart={cartState} />
      ) : null}
    </React.Fragment>
  );
}

export default AddCartBtnModal;
