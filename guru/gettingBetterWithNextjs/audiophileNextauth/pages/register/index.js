import React from "react";
import Link from "next/link";
// import RegisterStyles from ".."
import { submitNewUserHandler } from "../../utils/authHelpers";

function Register({ children, ...props }) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const confirmPasswordInputRef = React.useRef();
  return (
    <React.Fragment>
      <section>
        <h2>Register New User</h2>
        <form
          onSubmit={submitNewUserHandler.bind({
            emailInputRef,
            passwordInputRef,
            confirmPasswordInputRef,
          })}
        >
          <div>{/* email */}</div>
          <label htmlFor="email">Email</label>
          <input required ref={emailInputRef} type="email" id="email" />
          <div>
            {/* password */}

            <label htmlFor="password">Password</label>
            <input
              required
              ref={passwordInputRef}
              type="password"
              id="password"
            />
          </div>
          <div>
            {/* confirm password */}
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              required
              ref={confirmPasswordInputRef}
              type="password"
              id="confirm-password"
            />
          </div>
          {/* register button */}
          <button>Create New User</button>
        </form>
        <div>
          <span>Already have Account?</span>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Register;
