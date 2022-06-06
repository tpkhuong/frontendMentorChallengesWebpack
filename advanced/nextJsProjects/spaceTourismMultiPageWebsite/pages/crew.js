import React from "react";
import CrewStyles from "../styles/Crew.module.css";
import Head from "next/head";
import favicon from "../public/favicon-32x32.png";
import data from "./api/data.json";
import Link from "next/link";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";

function Crew(props) {
  console.log(props.dataCrew);
  return (
    <React.Fragment>
      <Head>
        <title>Crew</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <SectionWrapper idAttr="crew">
        <Header activeEffect="CREW"></Header>
      </SectionWrapper>
      {/* <Navbar currentPage="CREW"></Navbar> */}
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      dataCrew: data.crew,
    },
  };
}

export default Crew;
