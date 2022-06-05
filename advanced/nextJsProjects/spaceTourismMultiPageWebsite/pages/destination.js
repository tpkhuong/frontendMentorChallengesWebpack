import React from "react";
import Head from "next/head";
import favicon from "../public/favicon-32x32.png";
import DestStyles from "../styles/Destination.module.css";
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
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <div className="app" id="destination">
        <Header activeEffect="DESTINATION"></Header>
      </div>
      {/* <h1>Destinations Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div> */}
      {/* <Navbar currentPage="DESTINATION"></Navbar> */}
      {/* <h2>Destinations</h2> */}
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
