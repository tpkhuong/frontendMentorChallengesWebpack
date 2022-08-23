import React from "react";
import OrderModalStyles from "../../styles/Checkout/ConfirmedOrderModalWrapper.module.css";
import OrderModal from "./OrderModal";
import { showOrderModal } from "../../utils/orderHelpers";

export default function OrderModalWrapper({ children, ...props }) {
  const [isOrderPlaced, setOrderPlaced] = React.useState(false);
  // when isOrderPlaced is changed react will re-render this component
  // it is fine because this component is only the button and the order modal
  console.log(props.itemsInfo);
  return (
    <React.Fragment>
      {/* continue and pay btn */}
      <button
        // aria-label="confirm order"
        className={OrderModalStyles[`place-order-btn`]}
        onClick={showOrderModal.bind({ setOrderPlaced })}
      >
        contine & pay
      </button>
      {/* User order modal when user click on continue and pay */}
      {/* order modal needs items and grand total from summary component */}
      {isOrderPlaced ? (
        <OrderModal
          arrayOfItems={props.itemsInfo}
          funcForHideModal={setOrderPlaced}
        />
      ) : null}
    </React.Fragment>
  );
}
