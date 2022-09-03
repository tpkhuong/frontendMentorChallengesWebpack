import React from "react";
import ToggleAddressStyles from "../../styles/Checkout/ToggleSameAddress.module.css";
import { toggleBillingAndShippingAddress } from "../../utils/checkoutHelpers";

export default function ToggleSameAddress({ children, ...props }) {
  const memoizedInitialValues = React.useMemo(() => {
    return {
      isShippingSame: false,
      arrayOfText: [],
    };
  }, []);

  const [{ isShippingSame, arrayOfText }, setShippingSame] = React.useState(
    memoizedInitialValues
  );

  const yesInputRef = React.useRef();
  const noInputRef = React.useRef();

  const {
    billing: billingRef,
    shipping: shippingRef,
    sameAddressInputRef,
    toggleObj,
  } = props.refObjForToggleBtn;

  sameAddressInputRef.yesBtn = yesInputRef;
  sameAddressInputRef.noBtn = noInputRef;

  toggleObj.toggleLinkBetweenBillingAndShipping = setShippingSame;
  toggleObj.billingAndShippingSame = isShippingSame;
  return (
    <React.Fragment>
      <div
        onChange={toggleBillingAndShippingAddress.bind({
          yesInputRef,
          noInputRef,
          billingRef,
          shippingRef,
          setShippingSame,
          arrayOfText,
        })}
        className={ToggleAddressStyles[`billing-shipping-radio-btns`]}
      >
        {/* <input
          onChange={toggleBillingAndShippingAddress.bind({ setBillingShipping })}
          type="checkbox"
          id="billing-shipping"
        />
        <label htmlFor="billing-shipping">Shipping Same as Billing?</label> */}
        <span className={ToggleAddressStyles[`question`]}>
          Is Shipping Address same as Billing Address?
        </span>
        <p>Friendly Reminder:</p>
        <p>
          Selecting "YES" button, will copy current inputs of billing section to
          inputs of shipping section.{" "}
        </p>
        <p>
          Selecting "NO" button after "YES" button was selected will REMOVE ALL
          information entered in shipping section.
        </p>
        <div className={[ToggleAddressStyles[`radio-input`]]}>
          <input
            ref={yesInputRef}
            id="shipping-same"
            type="radio"
            name="billing-shipping"
          />
          <label htmlFor="shipping-same">Yes</label>
        </div>
        <div className={[ToggleAddressStyles[`radio-input`]]}>
          <input
            ref={noInputRef}
            id="shipping-different"
            type="radio"
            name="billing-shipping"
          />
          <label htmlFor="shipping-different">No</label>
        </div>
      </div>
      {/* check billing inputs is either not empty or correct format */}
      <div className={ToggleAddressStyles[`checking-same-address-validation`]}>
        {arrayOfText.length == 0 ? null : (
          <React.Fragment>
            <span>Please make sure the billing</span>
            {arrayOfText.map((element, index) => {
              return (
                <a
                  href={
                    element.includes("zip")
                      ? `#billing-zip`
                      : `#billing-${element}`
                  }
                  key={Math.random() * index}
                >
                  {index == arrayOfText.length - 1
                    ? ` ${element} `
                    : ` ${element}, `}
                </a>
              );
            })}
            <span>input is not empty or valid format.</span>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
