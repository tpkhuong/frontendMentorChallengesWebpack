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

function Home(props) {
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
        {/* category link container */}
        <CategoryCardWrapper pageStyle="home" />
        {/* featured products */}
        <FeatureProducts />
        {/* mission statement */}
        <MissionStatement pageMargin="home" />
      </Main>
      <Footer />
    </React.Fragment>
  );
}

// export async function

export default Home;
