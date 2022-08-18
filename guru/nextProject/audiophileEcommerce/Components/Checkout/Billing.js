import React from "react";
import BillingStyles from "../../styles/Checkout/Billing.module.css";

function Billing({ children, ...props }) {
  return (
    <React.Fragment>
      <h3 className={BillingStyles[`title`]}>Billing Address</h3>
      <article className={BillingStyles[`billing-wrapper`]}>
        {/* address */}
        <div className={BillingStyles[`address`]}>
          <label htmlFor="billing-address">Your Address</label>
          <input
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
              id="billing-country"
              required
              type="text"
              placeholder="United States"
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
}

export default Billing;
