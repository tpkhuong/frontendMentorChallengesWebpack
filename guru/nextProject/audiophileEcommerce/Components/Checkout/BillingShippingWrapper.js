import React from "react";
import BillShipWrapperStyles from "../../styles/Checkout/BillingShippingWrapper.module.css";
import { displayPaymentMethods } from "../../utils/checkoutHelpers";
import { ErrorMessageContext } from "../../pages/checkout/index";
import Billing from "./Billing";
import Shipping from "./Shipping";

function BillingShippingWrapper({ children, ...props }) {
  const yesInputRef = React.useRef();
  const noInputRef = React.useRef();
  const [showBillingShipping, setBillingShipping] = React.useState(false);
  // get context ref obj
  const { billing: billingRef, shipping: shippingRef } =
    React.useContext(ErrorMessageContext);
  return (
    <article className={BillShipWrapperStyles[`style-wrapper`]}>
      {/* Billing or Shipping inputs */}
      {/* {!showBillingShipping ? (
        <Billing hideBilling />
      ) : (
        <Shipping showShipping />
      )} */}
      {/* when showBillingShipping is false we will pass boolean value false to hideBilling and showShipping */}
      {/* in billing component we will have an attr, when it is false normal display when it is true display none */}
      {/* in shipping component we will have an attr, when it is false display none when it is true revert */}
      <Billing />
      {/* different approach for a11y */}
      {/* <Billing hideBilling={showBillingShipping} /> */}
      <div
        onChange={displayPaymentMethods.bind({
          setBillingShipping,
          yesInputRef,
          noInputRef,
          billingRef,
          shippingRef,
        })}
        className={BillShipWrapperStyles[`billing-shipping-radio-btns`]}
      >
        {/* <input
          onChange={displayPaymentMethods.bind({ setBillingShipping })}
          type="checkbox"
          id="billing-shipping"
        />
        <label htmlFor="billing-shipping">Shipping Same as Billing?</label> */}
        <span className={BillShipWrapperStyles[`question`]}>
          Is Shipping Address same as Billing Address?
        </span>
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
      <Shipping />
      {/* different approach for a11y */}
      {/* <Shipping showShipping={showBillingShipping} /> */}
    </article>
  );
}

export default BillingShippingWrapper;

// 6205-B Peachtree Dunwoody Rd, Atlanta, GA 30328
