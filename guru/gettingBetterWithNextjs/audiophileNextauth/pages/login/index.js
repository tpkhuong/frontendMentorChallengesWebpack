import React from "react";
import Link from "next/link";
import { loginHandler } from "../../utils/authHelpers";

function Login({ children, ...props }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  return (
    <section>
      <h2>Log In</h2>
      <span>New User?</span>
      <Link href="/register">
        <a>Register New Account</a>
      </Link>
      <form onSubmit={loginHandler.bind({ emailRef, passwordRef })}>
        <div>
          <label htmlFor="">Email</label>
          <input ref={emailRef} required type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input ref={passwordRef} required type="password" />
        </div>
        <button>Log In</button>
      </form>
    </section>
  );
}

export default Login;
