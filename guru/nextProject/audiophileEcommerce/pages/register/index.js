import React from "react";
import Link from "next/link";
import RegisterStyles from "../../styles/Register/RegisterPage.module.css";
import Head from "next/head";
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
      <Head>
        <title>Register Page</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <style>{`#__next{height: 100%}`}</style>
      </Head>
      <Main isLoginOrRegister="register-form" isDarkerBgTrue="true">
        <section className={RegisterStyles[`img-form-wrapper`]}>
          {/* image */}
          <div className={RegisterStyles[`img-wrapper`]}>
            <img
              src="/shared/Sign-up.png"
              alt="Male holding large size pencil with sign up form in tablet screen."
            />
          </div>
          <div className={RegisterStyles[`register-form-wrapper`]}>
            {/* form */}
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
              <input
                required
                ref={emailInputRef}
                type="email"
                id="email"
                placeholder="johndoe@email.com"
              />
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
          </div>
        </section>
      </Main>
    </React.Fragment>
  );
}

function fakeUsers() {
  // marvel@tkhuong.dev
  // marvel12345
}
