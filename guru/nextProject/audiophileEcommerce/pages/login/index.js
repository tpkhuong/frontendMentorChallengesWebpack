import React from "react";
import Link from "next/link";
import Head from "next/head";
import LoginStyles from "../../styles/Login/LoginPage.module.css";
import Main from "../../Components/shared/Main";
import LoginForm from "../../Components/Login/LoginForm";
import { loginHandler } from "../../utils/authHelpers";

const LoginErrorContext = React.createContext({});

export default function Login({ children, ...props }) {
  const memoizedLoginRefs = React.useMemo(() => {
    return {
      refToSetFuncForAssistiveText: null,
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Login to Account</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
        <style>{`#__next{height: 100%}`}</style>
      </Head>
      <Main isLoginOrRegister="login-form" isDarkerBgTrue="true">
        <h1 className="visually-hidden">Login to Account</h1>
        <section className={LoginStyles[`img-form-wrapper`]}>
          {/* image */}
          <div className={LoginStyles[`img-wrapper`]}>
            <img
              src="/shared/login-screen.png"
              alt="Male holding tablet with large tablet screen of a sign in form."
            />
          </div>
          {/* form */}
          <div className={Login[`form-message-wrapper`]}>
            <Link href="/">
              <a className={LoginStyles[`login-logo`]}>
                <svg width="143" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.363 20.385c1.63 0 3.087-.537 4.237-1.47l.414.994h3.739V5.853h-3.605l-.495 1.087c-1.16-.958-2.637-1.51-4.29-1.51C3.069 5.43 0 8.527 0 12.88c0 4.37 3.07 7.505 7.363 7.505zm.646-4.287c-1.811 0-3.143-1.37-3.143-3.206 0-1.824 1.32-3.195 3.143-3.195 1.812 0 3.144 1.37 3.144 3.195 0 1.836-1.332 3.206-3.144 3.206zm17.535 4.287c4.148 0 6.91-2.562 6.91-6.495V5.868h-4.836v7.811c0 1.47-.782 2.357-2.074 2.357-1.292 0-2.09-.873-2.09-2.357V5.868h-4.836v8.022c0 3.933 2.778 6.495 6.926 6.495zm16.328.015c1.636 0 3.093-.557 4.235-1.52l.456 1.044h3.58V.792H45.36v5.591a6.551 6.551 0 00-3.489-.976c-4.309 0-7.378 3.12-7.378 7.489 0 4.368 3.07 7.504 7.378 7.504zm.647-4.287c-1.812 0-3.143-1.381-3.143-3.217 0-1.835 1.331-3.216 3.143-3.216 1.812 0 3.143 1.38 3.143 3.216 0 1.836-1.331 3.217-3.143 3.217zM57.976 4.109V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm10.097.46c4.563 0 7.872-3.146 7.872-7.488 0-4.357-3.31-7.489-7.872-7.489-4.579 0-7.873 3.132-7.873 7.489 0 4.342 3.294 7.489 7.873 7.489zm0-4.348c-1.764 0-3.029-1.281-3.029-3.14 0-1.858 1.265-3.139 3.029-3.139 1.763 0 3.028 1.292 3.028 3.14 0 1.858-1.265 3.139-3.028 3.139zM82.998 25v-5.534a6.56 6.56 0 003.423.934c4.293 0 7.362-3.125 7.362-7.504 0-4.38-3.069-7.489-7.362-7.489-1.669 0-3.155.578-4.31 1.578l-.605-1.117h-3.29V25h4.782zm2.776-8.887c-1.812 0-3.143-1.37-3.143-3.217s1.331-3.217 3.143-3.217c1.811 0 3.143 1.37 3.143 3.217 0 1.846-1.343 3.217-3.143 3.217zm15.065 3.811v-7.506c0-1.804.912-2.843 2.376-2.843 1.262 0 1.83.826 1.83 2.447v7.902h4.837V11.46c0-3.644-2.071-6.008-5.295-6.008-1.4 0-2.714.507-3.748 1.34v-6h-4.837v19.132h4.837zM117.574 4.11V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm7.878 0V.792h-4.836v19.132h4.836zm9.851.461c3.523 0 6.364-2.004 7.352-5.212h-4.813c-.465.823-1.409 1.318-2.539 1.318-1.527 0-2.55-.834-2.866-2.446H142.9c.063-.435.1-.858.1-1.282 0-4.123-3.134-7.356-7.66-7.356-4.407 0-7.626 3.17-7.626 7.478 0 4.295 3.245 7.5 7.626 7.5zm2.896-9.021h-5.677c.391-1.396 1.372-2.163 2.781-2.163 1.46 0 2.471.758 2.896 2.163z"
                    fill="#FFF"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </Link>
            <div className={LoginStyles[`greetings`]}>
              <h2 className={LoginStyles[`title`]}>Welcome Back!</h2>
              <p className={LoginStyles[`description`]}>
                Login with your email and password to enjoy member only perks.
              </p>
            </div>
            <LoginErrorContext.Provider value={memoizedLoginRefs}>
              <LoginForm refFromLoginComponent={LoginErrorContext} />
            </LoginErrorContext.Provider>
            {/* <form
              className={LoginStyles[`form`]}
              onSubmit={loginHandler.bind({ emailRef, passwordRef })}
            >
              <div className={LoginStyles[`email-wrapper`]}>
                <label htmlFor="">Email:</label>
                <input
                  ref={emailRef}
                  id="email"
                  required
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className={LoginStyles[`password-wrapper`]}>
                <label htmlFor="">Password:</label>
                <input
                  id="password"
                  ref={passwordRef}
                  required
                  type="password"
                />
              </div>
              <button className={LoginStyles[`login-btn`]}>Log In</button>
            </form> */}
            <div className={LoginStyles[`register-link-wrapper`]}>
              <span>New User?</span>
              <Link href="/register">
                <a>Register New Account</a>
              </Link>
            </div>
          </div>
        </section>
      </Main>
    </React.Fragment>
  );
}
