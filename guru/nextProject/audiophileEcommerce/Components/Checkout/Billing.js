import React from "react";
import BillingStyles from "../../styles/Checkout/Billing.module.css";
import { ErrorMessageContext } from "../../pages/checkout/index";
import { arrayOfStates } from "../../src/storage";
import { billingShippingInputListener } from "../../utils/checkoutHelpers";

function Billing({ children, ...props }) {
  const { linkInputToShipping } = props;
  // declare ref variables
  const billingAddressRef = React.useRef();
  const billingCityRef = React.useRef();
  const billingStateRef = React.useRef();
  const billingZipCodeRef = React.useRef();
  const billingCountryRef = React.useRef();

  // get context obj created in checkout page
  const { billing, shipping } = React.useContext(ErrorMessageContext);

  // assign ref to context obj created using React.createContext in checkout page
  billing.address = billingAddressRef;
  billing.city = billingCityRef;
  billing.state = billingStateRef;
  billing.zipCode = billingZipCodeRef;
  billing.country = billingCountryRef;
  return (
    /**
     * when user click on yes input btn
     * we want billing inputs and shipping inputs to sync.
     * **/
    <React.Fragment>
      <fieldset
        /* different approach for a11y */
        // data-hidebillinginfo={props.hideBilling}
        className={BillingStyles[`billing-fieldset`]}
      >
        <legend className={BillingStyles[`title`]}>Billing Address</legend>
        <article
          onChange={billingShippingInputListener.bind({
            billing,
            shipping,
            linkInputToShipping,
          })}
          className={BillingStyles[`billing-wrapper`]}
        >
          {/* address */}
          {/* add attr data-needsuserattention true */}
          <div
            data-billinguserattention="true"
            className={BillingStyles[`address`]}
          >
            <label htmlFor="billing-address">Your Address</label>
            <input
              ref={billingAddressRef}
              id="billing-address"
              required
              type="text"
              placeholder="888 Eighth St"
            />
            {/* add error text */}
            {/* add correct text */}
            <span className={BillingStyles[`error-text`]}>NOT ACCEPTED</span>
            <span className={BillingStyles[`correct-text`]}>ACCEPTED</span>
          </div>
          {/* city, state, zip, country */}
          <div className={BillingStyles[`city-state-zip-country-wrapper`]}>
            {/* city */}
            <div
              data-billinguserattention="true"
              className={BillingStyles[`city`]}
            >
              <label htmlFor="billing-city">City</label>
              <input
                ref={billingCityRef}
                id="billing-city"
                required
                type="text"
                placeholder="Los Angeles"
              />
              <span className={BillingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={BillingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
            {/* state */}
            <div
              data-billinguserattention="true"
              className={BillingStyles[`state`]}
            >
              <label htmlFor="billing-state">State</label>
              <input
                ref={billingStateRef}
                id="billing-state"
                required
                type="text"
                placeholder="California"
                list="billing-list-of-states"
              />
              <span className={BillingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={BillingStyles[`correct-text`]}>ACCEPTED</span>
              <datalist id="billing-list-of-states">
                {/* loop through arrayOfStates make option element */}
                {arrayOfStates.map(function makeOptionElements(element, index) {
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
              data-billinguserattention="true"
              className={BillingStyles[`zip`]}
            >
              <label htmlFor="billing-zip">ZIP Code</label>
              <input
                ref={billingZipCodeRef}
                id="billing-zip"
                required
                type="text"
                maxLength="5"
                pattern="[0-9]{5}"
                placeholder="88888"
              />
              <span className={BillingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={BillingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
            {/* country */}
            <div
              data-billinguserattention="true"
              className={BillingStyles[`country`]}
            >
              <label htmlFor="billing-country">Country</label>
              <input
                ref={billingCountryRef}
                id="billing-country"
                required
                type="text"
                placeholder="United States"
              />
              <span className={BillingStyles[`error-text`]}>NOT ACCEPTED</span>
              <span className={BillingStyles[`correct-text`]}>ACCEPTED</span>
            </div>
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

export default Billing;
