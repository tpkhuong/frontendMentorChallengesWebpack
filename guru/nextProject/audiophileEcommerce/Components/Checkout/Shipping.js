import React from "react";
import ShippingStyles from "../../styles/Checkout/Shipping.module.css";
import { ErrorMessageContext } from "../../pages/checkout/index";

function Shipping({ children, ...props }) {
  // declare ref variables
  const shippingAddressRef = React.useRef();
  const shippingCityRef = React.useRef();
  const shippingStateRef = React.useRef();
  const shippingZipCodeRef = React.useRef();
  const shippingCountryRef = React.useRef();

  // get context obj created in checkout page
  const shippingValuesObj = React.useContext(ErrorMessageContext);

  // assign ref to context obj created using React.createContext in checkout page
  shippingValuesObj.shipping.address = shippingAddressRef;
  shippingValuesObj.shipping.city = shippingCityRef;
  shippingValuesObj.shipping.state = shippingStateRef;
  shippingValuesObj.shipping.zipCode = shippingZipCodeRef;
  shippingValuesObj.shipping.country = shippingCountryRef;
  return (
    <React.Fragment>
      <fieldset>
        <legend className={ShippingStyles[`title`]}>Shipping Address</legend>
        <article className={ShippingStyles[`shipping-wrapper`]}>
          {/* address */}
          <div className={ShippingStyles[`address`]}>
            <label htmlFor="shipping-address">Your Address</label>
            <input
              ref={shippingAddressRef}
              id="shipping-address"
              required
              type="text"
              placeholder="888 Eighth St"
            />
          </div>
          {/* city, state, zip, country */}
          <div className={ShippingStyles[`city-state-zip-country-wrapper`]}>
            {/* city */}
            <div className={ShippingStyles[`city`]}>
              <label htmlFor="shipping-city">City</label>
              <input
                ref={shippingCityRef}
                id="shipping-city"
                required
                type="text"
                placeholder="Los Angeles"
              />
            </div>
            {/* state */}
            <div className={ShippingStyles[`state`]}>
              <label htmlFor="shipping-state">State</label>
              <input
                ref={shippingStateRef}
                id="shipping-state"
                required
                type="text"
                placeholder="California"
              />
            </div>
            {/* zip */}
            <div className={ShippingStyles[`zip`]}>
              <label htmlFor="shipping-zip">ZIP Code</label>
              <input
                ref={shippingZipCodeRef}
                id="shipping-zip"
                required
                type="number"
                placeholder="88888"
              />
            </div>
            {/* country */}
            <div className={ShippingStyles[`country`]}>
              <label htmlFor="shipping-country">Country</label>
              <input
                ref={shippingCountryRef}
                id="shipping-country"
                required
                type="text"
                placeholder="United States"
              />
            </div>
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

export default Shipping;
