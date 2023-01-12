import React from "react";
import LoginFormStyles from "../../styles/Login/LoginForm.module.css";
import AssistiveLinks from "./AssistiveLinks";
import { loginHandler } from "../../utils/authHelpers";

export default function LoginForm({ children, ...props }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  // consume context

  const loginFormContextObj = React.useContext(props.refFromLoginComponent);
  return (
    <React.Fragment>
      <form className={LoginFormStyles[`form`]}>
        {/* assistive message */}
        <AssistiveLinks loginContext={loginFormContextObj} />
        <div
          data-isempty=""
          data-isvalid=""
          className={LoginFormStyles[`email-wrapper`]}
        >
          <label htmlFor="">Email:</label>
          <span className={LoginFormStyles[`required`]}>(required)</span>
          <input
            aria-describedby=""
            ref={emailRef}
            id="login-email"
            required
            type="email"
            placeholder="johndoe@email.com"
          />
          <span id="login-empty" className={LoginFormStyles[`error`]}>
            can't be empty
          </span>
          <span id="login-invalid" className={LoginFormStyles[`invalid`]}>
            not valid format
          </span>
        </div>
        <div data-isempty="" className={LoginFormStyles[`password-wrapper`]}>
          <label htmlFor="">Password:</label>
          <span className={LoginFormStyles[`required`]}>(required)</span>
          <input
            aria-describedby=""
            id="login-password"
            ref={passwordRef}
            required
            type="password"
          />
          <span id="login-password-empty" className={LoginFormStyles[`error`]}>
            can't be empty
          </span>
        </div>
        <button
          onClick={loginHandler.bind({
            emailRef,
            passwordRef,
            loginFormContextObj,
          })}
          className={LoginFormStyles[`login-btn`]}
        >
          Log In
        </button>
      </form>
    </React.Fragment>
  );
}
