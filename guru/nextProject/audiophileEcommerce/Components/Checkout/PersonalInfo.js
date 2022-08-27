import React from "react";
import PersonalInfoStyles from "../../styles/Checkout/PersonalInfo.module.css";
import { personalInputListener } from "../../utils/checkoutHelpers";
import { ErrorMessageContext } from "../../pages/checkout/index";

function PersonalInfo({ children, ...props }) {
  // changing email text color to red
  // const emailErrorColor = React.useRef();
  // declare ref variables
  const personalNameRef = React.useRef();
  const personalEmailRef = React.useRef();
  const personalPhoneNumRef = React.useRef();

  // get context obj created in checkout page
  const { personal } = React.useContext(ErrorMessageContext);
  // assign ref to context obj created using React.createContext in checkout page
  personal.name = personalNameRef;
  personal.email = personalEmailRef;
  personal.phoneNum = personalPhoneNumRef;
  React.useEffect(() => {
    const personalValuesFromLocalStorage =
      localStorage.getItem("personalData") == null
        ? { name: "", email: "", phoneNumber: "" }
        : JSON.parse(localStorage.getItem("personalData"));
    // dont need to call use state since we have a ref to the inputs
    // due to useRef we can set the value on inputs using ref.current.value
    // in useEffect
    personalNameRef.current.value = personalValuesFromLocalStorage.name;
    personalEmailRef.current.value = personalValuesFromLocalStorage.email;
    personalPhoneNumRef.current.value =
      personalValuesFromLocalStorage.phoneNumber;
  }, []);

  return (
    // declare max-width 730px and padding-inline 48px on parent elemnt of
    // personalinfo, billing/shipping and payment component
    <React.Fragment>
      <fieldset className={PersonalInfoStyles[`personal-fieldset`]}>
        <legend className={PersonalInfoStyles[`title`]}>
          Personal Contact
        </legend>
        {/* use fieldset and legend */}
        <article
          onChange={personalInputListener}
          className={PersonalInfoStyles[`personal-wrapper`]}
        >
          <div
            data-needuserattention="true"
            className={PersonalInfoStyles[`name`]}
          >
            <label htmlFor="personal-name">Name</label>
            <input
              ref={personalNameRef}
              type="text"
              id="personal-name"
              placeholder="John Doe"
            />
            <span className={PersonalInfoStyles[`error-text`]}>
              NOT ACCEPTED
            </span>
            <span className={PersonalInfoStyles[`correct-text`]}>ACCEPTED</span>
          </div>
          <div
            data-needuserattention="true"
            className={PersonalInfoStyles[`email`]}
          >
            <label
              // ref={emailErrorColor}
              htmlFor="personal-email"
            >
              Email Address
            </label>
            <input
              ref={personalEmailRef}
              type="email"
              id="personal-email"
              placeholder="johndoe@yahoo.com"
              required
              className={PersonalInfoStyles[`email-input`]}
            />
            <span className={PersonalInfoStyles[`error-text`]}>
              NOT ACCEPTED
            </span>
            <span className={PersonalInfoStyles[`correct-text`]}>ACCEPTED</span>
          </div>
          <div
            data-needuserattention="true"
            className={PersonalInfoStyles[`phone-number`]}
          >
            <label htmlFor="personal-phone-number">Phone Number</label>
            <input
              ref={personalPhoneNumRef}
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              id="personal-phone-number"
              placeholder="888-888-8888"
            />
            <span className={PersonalInfoStyles[`error-text`]}>
              NOT ACCEPTED
            </span>
            <span className={PersonalInfoStyles[`correct-text`]}>ACCEPTED</span>
          </div>
        </article>
      </fieldset>
    </React.Fragment>
  );
}

export default PersonalInfo;
