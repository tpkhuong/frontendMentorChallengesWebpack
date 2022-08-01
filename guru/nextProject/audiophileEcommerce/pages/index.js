import React from "react";
import Head from "next/head";
import HomeStyles from "../styles/Home/Home.module.css";
import LogoNavContainer from "../Components/shared/LogoNavContainer";
import MobileNav from "../Components/shared/MobileNav";
import Footer from "../Components/shared/Footer";
import MissionStatement from "../Components/shared/MissionStatement";
import HeroContent from "../Components/Home/HeroContent";
import FeatureProducts from "../Components/Home/FeatureProducts";
import Main from "../Components/shared/Main";
import CategoryCardWrapper from "../Components/shared/CategoryCardWrapper";
import CategoryImg from "../Components/Category/CategoryImgWrapper";
import CategoryTextContent from "../Components/Category/CategoryTextContent";
import AddCart from "../Components/Product/AddCartContainer";
import ProductTextPriceInfo from "../Components/Product/ProductTextPriceInfo";
import ProductImgWrapper from "../Components/Product/ProductImgWrapper";
import data from "../src/data.json";
import { useMediaQuery } from "../utils/helpers";

function Home({ children, ...props }) {
  const isMobile = useMediaQuery("max", 768);
  // const item = data.category.headphones[0];
  const product = data.details["xx59"];
  const { image, category, price, description, newProduct, name } = product;
  // newProduct, product, category, description,
  const { mobile, tablet, desktop, text } = image;
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
      <header className={HomeStyles[`header`]} role="banner">
        {/* logo nav */}
        <LogoNavContainer />
        {/* hero content */}
        <HeroContent />
      </header>
      <Main>
        {/* <ProductTextPriceInfo /> */}
        <div className={HomeStyles[`test-container`]}>
          <ProductImgWrapper
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
          />
        </div>
        {/* <AddCart /> */}
        {/* <div className={HomeStyles[`test-container`]}>
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
        </div> */}
        {/* category link container */}
        {/* <CategoryCardWrapper pageStyle="home" /> */}
        {/* featured products */}
        {/* <FeatureProducts /> */}
        {/* mission statement */}
        {/* <MissionStatement pageMargin="home" /> */}
      </Main>
      {/* <Footer /> */}
      {isMobile ? <MobileNav /> : null}
    </React.Fragment>
  );
}

export default Home;
