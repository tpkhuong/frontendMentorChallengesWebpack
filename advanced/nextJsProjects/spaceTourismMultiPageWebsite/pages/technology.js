import React from "react";
import Head from "next/head";
import TechStyles from "../styles/Technology.module.css";
import favicon from "../public/favicon-32x32.png";
import Link from "next/link";
import data from "./api/data.json";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";

function TechPage(props) {
  console.log(props.techData);
  return (
    <React.Fragment>
      <Head>
        <title>Technology</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <SectionWrapper idAttr="technology">
        <Header activeEffect="TECHNOLOGY"></Header>
      </SectionWrapper>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      techData: data.technology,
    },
  };
}

export default TechPage;
