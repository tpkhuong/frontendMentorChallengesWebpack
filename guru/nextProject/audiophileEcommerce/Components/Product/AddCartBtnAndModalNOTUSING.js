import React from "react";
// import CartBtnModalStyles from "../../styles/Product/AddCartBtnAndModal.module.css";
import CartModal from "../shared/CartModal";
import { addToCartAlgorithm } from "../../utils/helpers";

/******** ********/
/**
 * NOT USING THIS COMPONENT. WENT WITH DIFFERENT ALGORITHM/COMPONENT.
 * we dont want to render cart modal component every time user click on add to cart btn
 * we only want to render cart modal component when user click on cart btn in
 * logonav component.
 * **/
/**
 * it is the CartBtnAndModal component in Component/shared dir.
 * CartBtnModal component rendered in LogoNavContainer component.
 * **/
/**
 * this component was rendered in AddCart component of AddCartContainer file
 * which is rendered in ProductTextPriceInfo component.
 * **/
/******** ********/

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
