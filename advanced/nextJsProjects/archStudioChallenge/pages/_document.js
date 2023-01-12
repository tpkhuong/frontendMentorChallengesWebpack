import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta charSet="utf-8" /> */}
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Next Js App" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;300;400;500;700&family=Libre+Caslon+Text&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
