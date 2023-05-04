import Head from "next/head";
import React from "react";
// import { ThemeWrapper } from "../Components/Home/ThemeWrapper/index";
import ThemeWrapper from "../Components/Home/ThemeWrapper/index";

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
      <ThemeWrapper />
    </React.Fragment>
  );
}
