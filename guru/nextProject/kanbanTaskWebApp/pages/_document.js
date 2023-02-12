import { Html, Head, Main, NextScript } from "next/document";
/** 
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
 * **/

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Next Js App" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <NextScript />
      {/* <body id="theme" className="light">
      </body> */}
    </Html>
  );
}
