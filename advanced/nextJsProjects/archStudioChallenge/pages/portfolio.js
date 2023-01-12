import React from "react";
import Head from "next/head";
import PortfolioStyles from "../styles/Portfolio/Portfolio.module.css";
import { useMediaQuery, portfolioImgContents } from "../src/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import PortfolioCard from "../Components/PortfolioCard";
import Footer from "../Components/Footer";

function Portfolio() {
  const isMobile = useMediaQuery("max", 378);
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      {/* vertical line */}
      <VerticalLine pageRef="/portfolio">portfolio</VerticalLine>
      {/* header */}
      <header role="banner" className={PortfolioStyles[`header`]}>
        <LogoNavbar currActive="Portfolio" />
      </header>
      {/* main */}
      {/* pageApplied desktop tablet mobile monthYear */}
      <main role="main" className={PortfolioStyles[`main`]}>
        {/* position relative is declared on main element */}
        {isMobile ? <MobileNav mobileCurrActive="Portfolio" /> : null}
        {/* image grid goes here */}
        <article className={PortfolioStyles[`img-grid-container`]}>
          {portfolioImgContents.map(function makePortfolioCard(obj, index) {
            const { imgSrc, title, date, altText } = obj;
            return (
              <PortfolioCard
                key={Math.random() * index}
                pageApplied="Portfolio"
                desktop={imgSrc.desktop}
                tablet={imgSrc.tablet}
                mobile={imgSrc.mobile}
                text={altText}
                monthYear={date}
              >
                {title}
              </PortfolioCard>
            );
          })}
        </article>
      </main>
      {/* footer component */}
      <Footer />
    </React.Fragment>
  );
}

export default Portfolio;
