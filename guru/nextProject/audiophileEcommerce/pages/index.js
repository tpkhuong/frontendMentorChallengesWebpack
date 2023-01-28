import React from "react";
import Head from "next/head";
import HomeStyles from "../styles/Home/Home.module.css";
import { server } from "../config/index";
import CategoryCardWrapper from "../Components/shared/CategoryCardWrapper";
import LogoNavContainer from "../Components/shared/LogoNavContainer";
import MobileNav from "../Components/shared/MobileNav";
import Footer from "../Components/shared/Footer";
import MissionStatement from "../Components/shared/MissionStatement";
import HeroContent from "../Components/Home/HeroContent";
import FeatureProducts from "../Components/Home/FeatureProducts";
import Main from "../Components/shared/Main";
import data from "../src/data.json";
// import { useMediaQuery } from "../utils/helpers";
// import { getStaticProps } from "./checkout";

function Home({ children, ...props }) {
  // const isMobile = useMediaQuery("max", 768);
  // const item = data.category.headphones[0];
  const product = data.details["xx59"];
  // const { image, category, price, description, newProduct, name } = product;
  const { others } = product;
  // newProduct, product, category, description,
  // const { mobile, tablet, desktop, text } = image;
  // console.log(category, price, description, newProduct);

  return (
    <React.Fragment>
      <Head>
        <title>Audiophile</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <h1 className="visually-hidden">Audiophile</h1>
      <header className={HomeStyles[`header`]} role="banner">
        {/* logo nav */}
        <LogoNavContainer page="home" />
        {/* hero content */}
        <HeroContent />
      </header>
      <Main>
        {/* category link container */}
        <CategoryCardWrapper pageStyle="home" />
        {/* featured products */}
        <FeatureProducts />
        {/* mission statement */}
        <MissionStatement pageMargin="home" />
      </Main>
      <Footer />
      {/* Mobile menu modal */}
      <MobileNav />
      {/* {isMobile ? <MobileNav /> : null} */}
    </React.Fragment>
  );
}

export default Home;

function note() {
  async function getStaticProps(context) {
    const response = await fetch(`${server}/api/testcall`, {
      method: "POST",
      body: JSON.stringify({ message: "Hello" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(
      "response from index.js in pages dir, inside getStaticProps",
      response
    );
    const data = await response.json();
    console.log("data from index.js in pages dir, inside getStaticProps", data);
    return {
      props: { dataStr: "hello" },
    };
  }
  <div>
    <img src="/shared/login-screen.png" alt="" />
  </div>;
  {
    /* product features */
  }
  {
    /* <ProductFeatures productText={product.features} /> */
  }
  {
    /* <ProductTextPriceInfo /> */
  }
  {
    /* <ProductIncludedItems includedItems={includes} /> */
  }
  {
    /* <div className={HomeStyles[`grid-container`]}>
          <ProductImageGrid galleryImgData={gallery} />
        </div> */
  }
  {
    /* <div className={HomeStyles[`recommend-section`]}>

        </div> */
  }
  {
    /* <ProductRecommendations recommendations={others} /> */
  }

  <div className={HomeStyles[`test-container`]}>
    {/* <ProductImgWrapper
            desktop={desktop}
            tablet={tablet}
            mobile={mobile}
            textContent={text}
          />
          <ProductTextPriceInfo
            price={price}
            newProduct={newProduct}
            title={name}
            description={description}
          /> */}
  </div>;
  {
    /* <AddCart /> */
  }
  {
    /* <div className={HomeStyles[`test-container`]}>
          <CategoryImg
            desktopSize={item.imgSrc.desktop}
            tabletSize={item.imgSrc.tablet}
            mobileSize={item.imgSrc.mobile}
            text={item.imgText}
          />
          <CategoryTextContent
            isNew={item.textContent.isNew}
            title={item.textContent.name}
            content={item.textContent.description}
          />
        </div> */
  }
}
