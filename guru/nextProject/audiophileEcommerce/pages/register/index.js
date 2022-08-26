import React from "react";
import Link from "next/link";
import Main from "../../Components/shared/Main";
import { useRouter } from "next/router";
import { submitNewUserHandler } from "../../utils/authHelpers";

export default function Register({ children, ...props }) {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();
  const confirmPasswordInputRef = React.useRef();

  const router = useRouter();
  const [userCreated, setUser] = React.useState(false);
  // we call setUser in submitNewUserHandler func attached to onSumbit
  // to cause a re-render which will run algorithm in React.useEffect
  React.useEffect(() => {
    if (userCreated) {
      router.push("/login");
    }
  }, [userCreated]);

  return (
    <React.Fragment>
      <section>
        <h2>Register New User</h2>
        <form
          onSubmit={submitNewUserHandler.bind({
            emailInputRef,
            passwordInputRef,
            confirmPasswordInputRef,
            setUser,
          })}
        >
          <p>Hello Friends</p>
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

function fakeUsers() {
  // marvel@tkhuong.dev
  // marvel12345
}
