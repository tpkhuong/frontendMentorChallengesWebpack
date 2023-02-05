import Head from "next/head";
import React from "react";
import HomeStyles from "../styles/Home.module.css";
import { ThemeImg } from "../Components/Home/ThemeImg";
import LoginSignup from "../Components/Home/LoginSignup";

export default function Home({ children, ...props }) {
  return (
    <React.Fragment>
      <Head>
        <title>Kantan Task Management App</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <h1 className="visually-hidden">Kantan Task Management App</h1>
      <section
        data-theme="light"
        id="login-theme-wrapper"
        className={HomeStyles[`login-bg`]}
      >
        {/* <div className={HomeStyles[`img-container`]}>
          <img aria-hidden="true" src="/assets/blob-scene.svg" alt="" />
        </div> */}
        <div className={HomeStyles[`img-form-container`]}>
          <ThemeImg />
          <LoginSignup />
        </div>
      </section>
    </React.Fragment>
  );
}
