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
      <form
        className={LoginFormStyles[`form`]}
        onSubmit={loginHandler.bind({
          emailRef,
          passwordRef,
          loginFormContextObj,
        })}
      >
        {/* assistive message */}
        <AssistiveLinks
          loginInputRefs={{ emailRef, passwordRef }}
          loginContext={loginFormContextObj}
        />
        <div className={LoginFormStyles[`email-wrapper`]}>
          <label htmlFor="">Email:</label>
          <input
            ref={emailRef}
            id="login-email"
            required
            type="email"
            placeholder="johndoe@email.com"
          />
        </div>
        <div className={LoginFormStyles[`password-wrapper`]}>
          <label htmlFor="">Password:</label>
          <input
            id="login-password"
            ref={passwordRef}
            required
            type="password"
          />
        </div>
        <button className={LoginFormStyles[`login-btn`]}>Log In</button>
      </form>
    </React.Fragment>
  );
}
