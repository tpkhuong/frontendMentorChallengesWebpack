import React from "react";
import CrewStyles from "../styles/Crew.module.css";
import Head from "next/head";
import favicon from "../public/favicon-32x32.png";
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
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <h1>Crew Page</h1>
      <Link href="/">Go Back</Link>
      <div>Navbar</div>
      <Header activeEffect="CREW"></Header>
      {/* <Navbar currentPage="CREW"></Navbar> */}
      <h2>Crew</h2>
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
