import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ContactStyles from "../styles/Contact/Contact.module.css";
import { heroImgContent, useMediaQuery } from "./api/storage";
import VerticalLine from "../Components/VerticalLine";
import LogoNavbar from "../Components/LogoNavbarContainer";
import MobileNav from "../Components/MobileNav";
import MapSection from "../Components/ContactPage/Main/MapSection";
import Footer from "../Components/Footer";
// process.env is used with export async function getStaticProps
// for server side in env.local we dont have to prefix NEXT_PUBLIC_
// to use env variables outside of server, we will add prefix NEXT_PUBLIC to variable in .env.local file
console.log(process.env.MAPBOX_API);
console.log(process.env.NEXT_PUBLIC_MAPBOX_API);
function Contact() {
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
      {/* main */}
      <main className={ContactStyles[`main`]}>{/* <MapSection /> */}</main>
      {/* footer component */}
    </React.Fragment>
  );
}

export default Contact;
