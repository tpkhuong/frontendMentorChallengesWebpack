import React from "react";
import OrderModalStyles from "../../styles/Checkout/ConfirmedOrderModalWrapper.module.css";
import OrderModal from "./OrderModal";

export default function OrderModalWrapper({ children, ...props }) {
  const [isOrderPlaced, setOrderPlaced] = React.useState(false);
  return (
    <React.Fragment>
      {/* continue and pay btn */}
      <button
        // aria-label="confirm order"
        className={OrderModalStyles[`place-order-btn`]}
        onClick={testFunc.bind({ setOrderPlaced })}
      >
        contine & pay
      </button>
      {/* User order modal when user click on continue and pay */}
      {/* order modal needs items and grand total from summary component */}
      {isOrderPlaced ? <OrderModal /> : null}
    </React.Fragment>
  );
}

function testFunc(event) {
  const { setOrderPlaced } = this;
  setOrderPlaced(true);
}
