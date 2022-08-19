import React from "react";
import ShippingStyles from "../../styles/Checkout/Shipping.module.css";

function Shipping({ children, ...props }) {
  return (
    <React.Fragment>
      <fieldset>
        <legend className={ShippingStyles[`title`]}>Shipping Address</legend>
        <article className={ShippingStyles[`shipping-wrapper`]}>
          {/* address */}
          <div className={ShippingStyles[`address`]}>
            <label htmlFor="shipping-address">Your Address</label>
            <input
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
