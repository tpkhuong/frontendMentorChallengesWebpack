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
import CategoryImg from "../Components/Category/CategoryImgComponent";
import CategoryTextContent from "../Components/Category/CategoryTextContent";
import data from "../src/data.json";

function Home(props) {
  const item = data.category.headphones[0];
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
        <div className={HomeStyles[`test-container`]}>
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
        </div>
        {/* category link container */}
        {/* <CategoryCardWrapper pageStyle="home" /> */}
        {/* featured products */}
        {/* <FeatureProducts /> */}
        {/* mission statement */}
        {/* <MissionStatement pageMargin="home" /> */}
      </Main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

// export async function

export default Home;
