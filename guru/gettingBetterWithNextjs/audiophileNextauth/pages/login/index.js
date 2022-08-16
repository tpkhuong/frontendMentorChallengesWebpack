import React from "react";
import Link from "next/link";
import { loginHandler } from "../../utils/authHelpers";

function Login({ children, ...props }) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  return (
    <section>
      <form onSubmit={loginHandler.bind({ emailRef, passwordRef })}>
        <div>
          <label htmlFor="">Email</label>
          <input required type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input required type="password" />
        </div>
        <button>Log In</button>
      </form>
    </section>
  );
}

export default Login;
