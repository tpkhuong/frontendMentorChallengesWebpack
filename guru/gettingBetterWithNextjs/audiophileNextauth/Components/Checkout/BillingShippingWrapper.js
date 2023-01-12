import React from "react";
import BillShipWrapperStyles from "../../styles/Checkout/BillingShippingWrapper.module.css";
import Billing from "./Billing";
import Shipping from "./Shipping";

function BillingShippingWrapper({ children, ...props }) {
  const yesInputRef = React.useRef();
  const noInputRef = React.useRef();
  const [showBillingShipping, useBillShipState] = React.useState(false);
  return (
    <article className={BillShipWrapperStyles[`style-wrapper`]}>
      <div
        onChange={testFunc.bind({ useBillShipState, yesInputRef, noInputRef })}
        className={BillShipWrapperStyles[`billing-shipping-inputs`]}
      >
        {/* <input
          onChange={testFunc.bind({ useBillShipState })}
          type="checkbox"
          id="billing-shipping"
        />
        <label htmlFor="billing-shipping">Shipping Same as Billing?</label> */}
        <span>Is Shipping Address same as Billing Address?</span>
        <div className={[BillShipWrapperStyles[`radio-input`]]}>
          <input
            ref={yesInputRef}
            id="shipping-same"
            type="radio"
            name="billing-shipping"
          />
          <label htmlFor="shipping-same">Yes</label>
        </div>
        <div className={[BillShipWrapperStyles[`radio-input`]]}>
          <input
            ref={noInputRef}
            id="shipping-different"
            type="radio"
            name="billing-shipping"
          />
          <label htmlFor="shipping-different">No</label>
        </div>
      </div>
      {/* Billing or Shipping inputs */}
      {!showBillingShipping ? <Billing /> : <Shipping />}
    </article>
  );
}

function testFunc(event) {
  const { useBillShipState, yesInputRef, noInputRef } = this;
  //   useBillShipState(event.target);
  //   use clicked on yes radio input shipping address same as billing
  if (event.target == yesInputRef.current) {
    console.log("hello this is yes radio input");
    useBillShipState(false);
  }
  //   use clicked on no radio input shipping address is different than billing
  if (event.target == noInputRef.current) {
    console.log("hello this is no radio input");
    useBillShipState(true);
  }
}

export default BillingShippingWrapper;
