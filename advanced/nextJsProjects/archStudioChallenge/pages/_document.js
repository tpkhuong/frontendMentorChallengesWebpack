import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Next Js App" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;300;400;500;700&family=Libre+Caslon+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}