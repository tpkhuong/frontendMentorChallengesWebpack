import React from "react";
import Head from "next/head";
import ContactStyles from "../styles/Contact/Contact.module.css";
import { heroImgContent, useMediaQuery } from "./api/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <React.Fragment>
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
        {/* main */}
        {/* footer component */}
      </React.Fragment>
    </React.Fragment>
  );
}

export default Contact;
