import React from "react";
import BillingStyles from "../../styles/Checkout/Billing.module.css";
import { ErrorMessageContext } from "../../pages/checkout/index";

function Billing({ children, ...props }) {
  // declare ref variables
  const billingAddressRef = React.useRef();
  const billingCityRef = React.useRef();
  const billingStateRef = React.useRef();
  const billingZipCodeRef = React.useRef();
  const billingCountryRef = React.useRef();

  // get context obj created in checkout page
  const billingValuesObj = React.useContext(ErrorMessageContext);

  // assign ref to context obj created using React.createContext in checkout page
  billingValuesObj.billing.address = billingAddressRef;
  billingValuesObj.billing.city = billingCityRef;
  billingValuesObj.billing.state = billingStateRef;
  billingValuesObj.billing.zipCode = billingZipCodeRef;
  billingValuesObj.billing.country = billingCountryRef;
  return (
    <React.Fragment>
      <fieldset
        data-hidebillinginfo={props.hideBilling}
        className={BillingStyles[`billing-fieldset`]}
      >
        <legend className={BillingStyles[`title`]}>Billing Address</legend>
        <article className={BillingStyles[`billing-wrapper`]}>
          {/* address */}
          <div className={BillingStyles[`address`]}>
            <label htmlFor="billing-address">Your Address</label>
            <input
              ref={billingAddressRef}
              id="billing-address"
              required
              type="text"
              placeholder="888 Eighth St"
            />
          </div>
          {/* city, state, zip, country */}
          <div className={BillingStyles[`city-state-zip-country-wrapper`]}>
            {/* city */}
            <div className={BillingStyles[`city`]}>
              <label htmlFor="billing-city">City</label>
              <input
                ref={billingCityRef}
                id="billing-city"
                required
                type="text"
                placeholder="Los Angeles"
              />
            </div>
            {/* state */}
            <div className={BillingStyles[`state`]}>
              <label htmlFor="billing-state">State</label>
              <input
                ref={billingStateRef}
                id="billing-state"
                required
                type="text"
                placeholder="California"
              />
            </div>
            {/* zip */}
            <div className={BillingStyles[`zip`]}>
              <label htmlFor="billing-zip">ZIP Code</label>
              <input
                ref={billingZipCodeRef}
                id="billing-zip"
                required
                type="number"
                placeholder="88888"
              />
            </div>
            {/* country */}
            <div className={BillingStyles[`country`]}>
              <label htmlFor="billing-country">Country</label>
              <input
                ref={billingCountryRef}
                id="billing-country"
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

export default Billing;
