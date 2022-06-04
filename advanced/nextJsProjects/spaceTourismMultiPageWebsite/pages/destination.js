import React from "react";
import Head from "next/head";
import Link from "next/link";
import data from "./api/data.json";
import Header from "../Components/Header";
// import Navbar from "../Components/Navbar";

function Destinations(props) {
  console.log(props.destinations);
  return (
    <React.Fragment>
      <Head>
        <title>Destination</title>
      </Head>
      <h1>Destinations Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div>
      <Header activeEffect="DESTINATION"></Header>
      {/* <Navbar currentPage="DESTINATION"></Navbar> */}
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      destinations: data.destinations,
    },
  };
}

export default Destinations;
