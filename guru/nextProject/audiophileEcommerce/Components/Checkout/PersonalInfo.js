import React from "react";
import PersonalInfoStyles from "../../styles/Checkout/PersonalInfo.module.css";
import { checkingEmailValidity } from "../../utils/checkoutHelpers";
import { ErrorMessageContext } from "../../pages/checkout/index";

function PersonalInfo({ children, ...props }) {
  // changing email text color to red
  const emailErrorColor = React.useRef();
  // declare ref variables
  const personalNameRef = React.useRef();
  const personalEmailRef = React.useRef();
  const personalPhoneNumRef = React.useRef();

  // get context obj created in checkout page
  const personalValuesObj = React.useContext(ErrorMessageContext);
  // assign ref to context obj created using React.createContext in checkout page
  personalValuesObj.personal.name = personalNameRef;
  personalValuesObj.personal.email = personalEmailRef;
  personalValuesObj.personal.phoneNum = personalPhoneNumRef;
  return (
    // declare max-width 730px and padding-inline 48px on parent elemnt of
    // personalinfo, billing/shipping and payment component
    <React.Fragment>
      <fieldset>
        <legend className={PersonalInfoStyles[`title`]}>
          Personal Contact
        </legend>
        {/* use fieldset and legend */}
        <article className={PersonalInfoStyles[`personal-wrapper`]}>
          <div className={PersonalInfoStyles[`name`]}>
            <label htmlFor="personal-name">Name</label>
            <input
              ref={personalNameRef}
              type="text"
              id="personal-name"
              placeholder="John Doe"
            />
          </div>
          <div className={PersonalInfoStyles[`email`]}>
            <label
              data-invalidemail="false"
              ref={emailErrorColor}
              htmlFor="personal-email"
            >
              Email Address
            </label>
            <input
              ref={personalEmailRef}
              onChange={checkingEmailValidity.bind({ emailErrorColor })}
              type="email"
              id="personal-email"
              placeholder="johndoe@yahoo.com"
              required
              className={PersonalInfoStyles[`email-input`]}
            />
            <span className={PersonalInfoStyles[`email-error-text`]}>
              Wrong format
            </span>
          </div>
          <div className={PersonalInfoStyles[`phone-number`]}>
            <label htmlFor="personal-phone-number">Phone Number</label>
            <input
              ref={personalPhoneNumRef}
              type="number"
              id="personal-phone-number"
              placeholder="888-888-8888"
            />
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

export default PersonalInfo;
