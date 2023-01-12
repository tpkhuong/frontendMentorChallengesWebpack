import React from "react";
import PersonalInfoStyles from "../../styles/Checkout/PersonalInfo.module.css";

function PersonalInfo({ children, ...props }) {
  return (
    // declare max-width 730px and padding-inline 48px on parent elemnt of
    // personalinfo, billing/shipping and payment component
    <article className={PersonalInfoStyles[`personal-wrapper`]}>
      <div className={PersonalInfoStyles[`name`]}>
        <label htmlFor="personal-name">Name</label>
        <input type="text" id="personal-name" placeholder="John Doe" />
      </div>
      <div className={PersonalInfoStyles[`email`]}>
        <label htmlFor="personal-email">Email Address</label>
        <input
          type="text"
          id="personal-email"
          placeholder="johndoe@yahoo.com"
        />
      </div>
      <div className={PersonalInfoStyles[`phone-number`]}>
        <label htmlFor="personal-phone-number">Phone Number</label>
        <input
          type="text"
          id="personal-phone-number"
          placeholder="888-888-8888"
        />
      </div>
    </article>
  );
}

export default PersonalInfo;
