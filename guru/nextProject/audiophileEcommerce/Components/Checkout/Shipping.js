import React from "react";
import ShippingStyles from "../../styles/Checkout/Shipping.module.css";
import { arrayOfStates } from "../../src/storage";
import { billingShippingInputListener } from "../../utils/checkoutHelpers";

function Shipping({ children, ...props }) {
  // const { inputsLinkedToBilling } = props;
  // declare ref variables
  const shippingAddressRef = React.useRef();
  const shippingCityRef = React.useRef();
  const shippingStateRef = React.useRef();
  const shippingZipCodeRef = React.useRef();
  const shippingCountryRef = React.useRef();

  // get context obj created in checkout page
  const { billing, shipping, sameAddressInputRef, toggleObj } =
    props.refObjForShipping;
  // check if data obj is set in local storage
  // assign ref to context obj created using React.createContext in checkout page
  shipping.address = shippingAddressRef;
  shipping.city = shippingCityRef;
  shipping.state = shippingStateRef;
  shipping.zipCode = shippingZipCodeRef;
  shipping.country = shippingCountryRef;

  return (
    // check if cached data obj is in local storage
    // we want to call local storage getitem once in navlisthelper
    /**
     * when user click on yes input btn
     * we want billing inputs and shipping inputs to sync.
     * **/
    <React.Fragment>
      <fieldset
        /* different approach for a11y */
        // data-showshippinginfo={props.showShipping}
        className={ShippingStyles[`shipping-fieldset`]}
      >
        <legend className={ShippingStyles[`title`]}>Shipping Address</legend>
        <article
          onChange={billingShippingInputListener.bind({
            billing,
            shipping,
            sameAddressInputRef,
            toggleObj,
            // inputsLinkedToBilling,
          })}
          className={ShippingStyles[`shipping-wrapper`]}
        >
          {/* address */}
          <div
            data-shippinguserattention="true"
            className={ShippingStyles[`address`]}
          >
            <label htmlFor="shipping-address">Your Address</label>
            <input
              ref={shippingAddressRef}
              id="shipping-address"
              required
              type="text"
              placeholder="888 Eighth St"
            />
            <span className={ShippingStyles[`error-text`]}>NOT ACCEPTED</span>
            <span className={ShippingStyles[`correct-text`]}>ACCEPTED</span>
          </div>
          {/* city, state, zip, country */}
          <div className={ShippingStyles[`city-state-zip-country-wrapper`]}>
            {/* city */}
            <div
              data-shippinguserattention="true"
              className={ShippingStyles[`city`]}
            >
              <label htmlFor="shipping-city">City</label>
              <input
                ref={shippingCityRef}
                id="shipping-city"
                required
                type="text"
                placeholder="Los Angeles"
              />
              <span className={ShippingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={ShippingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
            {/* state */}
            <div
              data-shippinguserattention="true"
              className={ShippingStyles[`state`]}
            >
              <label htmlFor="shipping-state">State</label>
              <input
                ref={shippingStateRef}
                id="shipping-state"
                required
                type="text"
                placeholder="California"
                list="shipping-list-of-states"
              />
              <span className={ShippingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={ShippingStyles[`correct-text`]}>ACCEPTED</span>
              <datalist id="shipping-list-of-states">
                {/* loop through arrayOfStates make option element */}
                {arrayOfStates.map(function makeStates(element, index) {
                  return (
                    <option
                      key={Math.random() * index}
                      value={element}
                    ></option>
                  );
                })}
              </datalist>
            </div>
            {/* zip */}
            <div
              data-shippinguserattention="true"
              className={ShippingStyles[`zip`]}
            >
              <label htmlFor="shipping-zip">ZIP Code</label>
              <input
                ref={shippingZipCodeRef}
                id="shipping-zip"
                required
                type="text"
                maxLength="5"
                pattern="[0-9]{5}"
                placeholder="88888"
              />
              <span className={ShippingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={ShippingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
            {/* country */}
            <div
              data-shippinguserattention="true"
              className={ShippingStyles[`country`]}
            >
              <label htmlFor="shipping-country">Country</label>
              <input
                ref={shippingCountryRef}
                id="shipping-country"
                required
                type="text"
                placeholder="United States"
              />
              <span className={ShippingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={ShippingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

function testEventShipping(event) {
  const { shippingValuesObj } = this;
  if (event.target.closest("input")) {
    console.log(shippingValuesObj);
  }
}

export default Shipping;
