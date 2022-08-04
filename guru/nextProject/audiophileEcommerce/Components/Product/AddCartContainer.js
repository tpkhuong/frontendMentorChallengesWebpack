import React from "react";
import AddCartStyles from "../../styles/Product/AddCartContainer.module.css";
import AddCartBtnModal from "./AddCartBtnAndModal";
import { updateQuantity, addToCartAlgorithm } from "../../utils/helpers";
import CartModal from "../shared/CartModal";

function AddCart({ children, ...props }) {
  // useState. apply state value to prop dataFromAddCart of Cart Modal
  // pass state func to addToCartAlgorithm
  // const [cartState, useCartState] = React.useState({});
  // props obj from Product Text Price Info component
  const propsForCart = props.objOfValues;
  const quantityInputRef = React.useRef();

  const dataForCartModal = { propsForCart, quantityInputRef };

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
      {/* make add cart btn into a component with cart modal when we call useCartState in */}
      <button
        onClick={addToCartAlgorithm.bind({
          quantityInputRef,
          propsForCart,
        })}
        className={AddCartStyles[`add-cart-btn`]}
      >
        add to cart
      </button>
      {/* have cart modal here so we can pass props to it instead of passing props to cart btn in logonavcontainer */}
      {/* since we will declare position absolute on the modal */}
      {/* and we want the cart modal to be rendered below the mobile menu. */}
      {/* Using html order */}
      {/* <CartModal/> */}
      {/* <CartModal dataFromAddCart={dataForCartModal} /> */}
      {/* <CartModal dataFromAddCart={cartState} /> */}
      {/* pass in quantityInputRef and propsForCart */}
      {/* <AddCartBtnModal cartBtnModalData={dataForCartModal} /> */}
    </div>
  );
}

export default AddCart;
