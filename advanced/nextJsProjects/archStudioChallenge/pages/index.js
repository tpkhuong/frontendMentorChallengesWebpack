import React from "react";
import Head from "next/head";

function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <div className="wrapper">
        <span className="vertical-line"></span>
        <span>this is our home page</span>
      </div>
      <div>hello world</div>
      <picture>
        <source
          srcSet="/portfolio/desktop/image-228b.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/portfolio/tablet/image-228b.jpg"
          media="(min-width: 768px)"
        />
        <img src="/portfolio/mobile/image-228b.jpg" alt="" />
      </picture>
      <img src="/logo.svg" alt="" />
    </React.Fragment>
  );
}

export default Home;
//   ../public/portfolio/tablet/image-228b.jpg 580w
//   ../public/portfolio/desktop/image-228b.jpg 355w
