import React from "react";
import RegisterFormStyles from "../../styles/Register/RegisterForm.module.css";
import AssistiveMessage from "./AssistiveMessage";
import { submitNewUserHandler } from "../../utils/authHelpers";

export default function RegisterForm({ children, ...props }) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const confirmPasswordInputRef = React.useRef();

  const { setUser, RegisterErrorMessageContext } = props.refFromRegisterComp;

  const contextRefObj = React.useContext(RegisterErrorMessageContext);
  return (
    <React.Fragment>
      <form noValidate className={RegisterFormStyles[`form`]}>
        {/* assistive text error component */}
        <AssistiveMessage errorContent={contextRefObj} />
        <div
          data-isempty=""
          data-isvalid=""
          className={RegisterFormStyles[`email-wrapper`]}
        >
          {/* email */}
          <label htmlFor="email">Email:</label>
          <span className={RegisterFormStyles[`required-text`]}>
            (required)
          </span>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder="johndoe@email.com"
          />
          {/* error message */}
          <div className={RegisterFormStyles[`style-wrapper`]}>
            <span id="email-empty" className={RegisterFormStyles[`error`]}>
              can't be empty
            </span>
            <span id="email-invalid" className={RegisterFormStyles[`invalid`]}>
              not valid
            </span>
          </div>
        </div>
        <div
          data-isempty=""
          data-ismatchedpassword=""
          className={RegisterFormStyles[`password-wrapper`]}
        >
          {/* password */}
          <label htmlFor="password">Password:</label>
          <span className={RegisterFormStyles[`required-text`]}>
            (required)
          </span>
          <input ref={passwordInputRef} type="password" id="password" />
          {/* error message */}
          <span id="password-empty" className={RegisterFormStyles[`error`]}>
            can't be empty
          </span>
          <span
            id="password-notmatched"
            className={RegisterFormStyles[`not-matched-pw`]}
          >
            not a match
          </span>
        </div>
        <div
          data-ismatchedpassword=""
          className={RegisterFormStyles[`confirm-password-wrapper`]}
        >
          {/* confirm password */}
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            ref={confirmPasswordInputRef}
            type="password"
            id="confirm-password"
          />
          {/* error message */}
          <span
            id="confirm-notmatched"
            className={RegisterFormStyles[`not-matched-pw`]}
          >
            not a match
          </span>
        </div>

        {/* register button */}
        <button
          onClick={submitNewUserHandler.bind({
            emailInputRef,
            passwordInputRef,
            confirmPasswordInputRef,
            setUser,
            contextRefObj,
          })}
          className={RegisterFormStyles[`create-account-btn`]}
        >
          Create Account
        </button>
      </form>
    </React.Fragment>
  );
}
