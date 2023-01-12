import React from "react";
import Head from "next/head";
import AboutStyles from "../styles/About/About.module.css";
import { heroImgContent, useMediaQuery } from "../src/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import HeroImg from "../Components/HeroImg";
import HeroTextContent from "../Components/HeroTextContent";
import HeroTitle from "../Components/HeroTitle";
import HeritageSection from "../Components/AboutPage/Main/AboutHeritage";
import TeamSection from "../Components/AboutPage/Main/AboutTeamSection";
import LinkButton from "../Components/LinkButton";
import Footer from "../Components/Footer";

function About() {
  const {
    about: { src, altText },
  } = heroImgContent;
  const isMobile = useMediaQuery("max", 378);
  return (
    <React.Fragment>
      <Head>
        <title>About Us</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      {/* vertical line */}
      <VerticalLine pageRef="/about">about us</VerticalLine>

      {/* header */}
      <header role="banner" className={AboutStyles[`header`]}>
        {/* logonav bar */}
        <LogoNavbar currActive="About Us" />
        {/* hero content */}
        {/* article will be our grid container/parent */}
        <article className={AboutStyles[`hero-content-container`]}>
          {/* img component */}
          <HeroImg
            desktop={src.desktop}
            tablet={src.tablet}
            mobile={src.mobile}
            text={altText}
          />
          {/* hero text-content-component */}
          <HeroTextContent>
            {"Your team of professionals"}
            {
              "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
            }
          </HeroTextContent>
          {/* hero title component */}
          <HeroTitle>About</HeroTitle>
          {/* mobile nav bar */}
          {isMobile ? <MobileNav mobileCurrActive="About Us" /> : null}
        </article>
      </header>
      {/* main */}
      <main role="main" className={AboutStyles[`main`]}>
        {/* heritage section */}
        <HeritageSection />
        {/* Team Member Section */}
        <TeamSection />
      </main>
      {/* footer component */}
      <Footer />
    </React.Fragment>
  );
}

export default About;
