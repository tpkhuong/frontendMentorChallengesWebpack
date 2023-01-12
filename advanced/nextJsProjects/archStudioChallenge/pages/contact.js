import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ContactStyles from "../styles/Contact/Contact.module.css";
import { heroImgContent, useMediaQuery } from "../src/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import HeroImg from "../Components/HeroImg";
import HeroTextContent from "../Components/HeroTextContent";
import HeroTitle from "../Components/HeroTitle";
import MobileNav from "../Components/MobileNav";
import DetailsSection from "../Components/ContactPage/Main/ContactDetailsSection";
import MapSection from "../Components/ContactPage/Main/MapSection";
import ConnectSection from "../Components/ContactPage/Main/ConnectSection";
import Footer from "../Components/Footer";
// process.env is used with export async function getStaticProps
// for server side in env.local we dont have to prefix NEXT_PUBLIC_
// to use env variables outside of server, we will add prefix NEXT_PUBLIC to variable in .env.local file
// console.log(process.env.MAPBOX_API);
// console.log(process.env.NEXT_PUBLIC_MAPBOX_API);
function Contact() {
  const {
    contact: { src, altText },
  } = heroImgContent;
  const isMobile = useMediaQuery("max", 378);
  return (
    <React.Fragment>
      <Head>
        <title>Contact</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      {/* vertical line */}
      <VerticalLine pageRef="/about">contact</VerticalLine>
      {/* header */}
      <header className={ContactStyles[`header`]} role="banner">
        {/* logonavbar */}
        <LogoNavbar currActive="Contact" />
        <article className={ContactStyles[`hero-content-container`]}>
          {/* hero img */}
          <HeroImg
            desktop={src.desktop}
            tablet={src.tablet}
            mobile={src.mobile}
            text={altText}
          />
          {/* hero text content */}
          <HeroTextContent>
            {"Tell us about your project"}
            {
              "We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
            }
          </HeroTextContent>
          {/* hero title */}
          <HeroTitle>Contact</HeroTitle>
          {/* mobile menu */}
          {isMobile ? <MobileNav mobileCurrActive="Contact" /> : null}
        </article>
      </header>
      {/* main */}
      <main className={ContactStyles[`main`]}>
        {/* contact details */}
        <DetailsSection />
        {/* map */}
        <MapSection />
        {/* Connect Section */}
        <ConnectSection></ConnectSection>
      </main>
      {/* footer component */}
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
