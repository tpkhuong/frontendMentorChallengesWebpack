import React from "react";
import BillShipWrapperStyles from "../../styles/Checkout/BillingShippingWrapper.module.css";
import { ErrorMessageContext } from "../../pages/checkout/index";
import Billing from "./Billing";
import Shipping from "./Shipping";
import ToggleSameAddress from "./ToggleSameAddress";

function BillingShippingWrapper({ children, ...props }) {
  // const [showBillingShipping, setBillingShipping] = React.useState(false);
  // const [isShippingSame, setShippingSame] = React.useState(false);
  // get context ref obj
  const { billing, shipping, sameAddressInputRef, toggleObj } =
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
      <Billing
        refObjForBilling={{ billing, shipping, sameAddressInputRef, toggleObj }}
      />
      {/* different approach for a11y */}
      {/* <Billing hideBilling={showBillingShipping} /> */}
      <ToggleSameAddress
        refObjForToggleBtn={{
          billing,
          shipping,
          sameAddressInputRef,
          toggleObj,
        }}
      />
      <Shipping
        refObjForShipping={{
          billing,
          shipping,
          sameAddressInputRef,
          toggleObj,
        }}
      />
      {/* different approach for a11y */}
      {/* <Shipping showShipping={showBillingShipping} /> */}
    </article>
  );
}

export default BillingShippingWrapper;

// 6205-B Peachtree Dunwoody Rd, Atlanta, GA 30328
