import React from "react";
import Head from "next/head";
import AboutStyles from "../styles/About/About.module.css";
import { useMediaQuery } from "../pages/api/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import Footer from "../Components/Footer";

function About() {
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
      {/* main */}
      {/* footer component */}
    </React.Fragment>
  );
}

export default About;
