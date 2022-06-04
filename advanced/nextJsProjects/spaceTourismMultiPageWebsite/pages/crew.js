import React from "react";
import Head from "next/head";

import data from "./api/data.json";
import Link from "next/link";
import Header from "../Components/Header";
// import Navbar from "../Components/Navbar";

function Crew(props) {
  console.log(props.dataCrew);
  return (
    <React.Fragment>
      <Head>
        <title>Crew</title>
      </Head>
      <h1>Crew Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div>
      <Header activeEffect="CREW"></Header>
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
