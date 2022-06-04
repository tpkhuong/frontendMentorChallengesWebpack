import React from "react";
import Head from "next/head";

import Link from "next/link";
import data from "./api/data.json";
import Header from "../Components/Header";
// import Navbar from "../Components/Navbar";

function TechPage(props) {
  console.log(props.techData);
  return (
    <React.Fragment>
      <Head>
        <title>Technology</title>
      </Head>
      <h1>Technology Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div>
      <Header activeEffect="TECHNOLOGY"></Header>
      {/* <Navbar currentPage="TECHNOLOGY"></Navbar> */}
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
