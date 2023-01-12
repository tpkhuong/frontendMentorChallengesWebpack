import Head from "next/head";
import React from "react";
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
      <h1>Hello World!!!</h1>
    </React.Fragment>
  );
}
