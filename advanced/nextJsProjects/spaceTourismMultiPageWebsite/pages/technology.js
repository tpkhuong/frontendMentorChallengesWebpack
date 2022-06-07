import React, { useState } from "react";
import TechStyles from "../styles/Technology.module.css";
import Head from "next/head";
import favicon from "../public/favicon-32x32.png";
import Link from "next/link";
import data from "./api/data.json";
import Header from "../Components/Header";
import SectionWrapper from "../Components/SectionWrapper";
// import Navbar from "../Components/Navbar";

function TechPage(props) {
  console.log(props.techData);
  const arrOfIdAttributes = ["vehicle", "spaceport", "capsule"];
  // not using array of img component because we will use background image in css instead
  const techInitialData = props.techData[0];
  const techData = {
    techIndex: 0,
    techImgAttr: arrOfIdAttributes[0],
    techName: techInitialData.name,
    techDescription: techInitialData.description,
  };
  const [techStateData, useTechState] = useState(techData);
  return (
    <React.Fragment>
      {/* <div
        onClick={techDataChange.bind({
          pageData: props.techData,
          arrofAttr: arrOfIdAttributes,
          stateObj: { techStateData, useTechState },
        })}
      ></div> */}
      <Head>
        <title>Technology</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />;
      </Head>
      <SectionWrapper idAttr="technology">
        <Header activeEffect="TECHNOLOGY"></Header>
        {/* title-content-img-wrapper */}
        <section className={TechStyles[`title-content-img-wrapper`]}>
          {/* title wrapper */}
          <div className={TechStyles[`title-wrapper`]}>
            <h1 className={TechStyles[`page-title`]} id="tablist-3">
              <span className={TechStyles[`page-title-digit`]}>03</span> SPACE
              LAUNCH 101
            </h1>
          </div>
          {/* content-img wrapper */}
          <div
            className={TechStyles[`img-wrapper`]}
            id={`${techStateData.techImgAttr}`}
          ></div>
          {/* img wrapper */}
          {/* content tablist/tab/tapanel */}
          <div className={TechStyles[`content-wrapper`]}>
            {/* tablist */}
            <div
              aria-labelledby="tablist-3"
              role="tablist"
              className={TechStyles[`tablist`]}
            >
              {/* tabs */}
              {/* launch vehicle */}
              <button
                className={TechStyles[`techTab-btn`]}
                data-index="0"
                aria-label="launch vehicle"
                role="tab"
                aria-controls="tabpanel-0"
                aria-selected="false"
                id="tab-0"
              >
                <span className={TechStyles[`tab-digit`]}>1</span>
              </button>
              {/* spaceport */}
              <button
                className={TechStyles[`techTab-btn`]}
                data-index="1"
                aria-label="space port"
                role="tab"
                aria-controls="tabpanel-2"
                aria-selected="false"
                id="tab-2"
              >
                <span className={TechStyles[`tab-digit`]}>2</span>
              </button>
              {/* space capsule */}
              <button
                className={TechStyles[`techTab-btn`]}
                data-index="2"
                aria-label="space capsule"
                role="tab"
                aria-controls="tabpanel-3"
                aria-selected="false"
                id="tab-3"
              >
                <span className={TechStyles[`tab-digit`]}>3</span>
              </button>
            </div>
            {/* tabpanel */}
            <div
              role="tabpanel"
              aria-labelledby={`tab-${techStateData.techIndex}`}
              id={`tabpanel-${techStateData.techIndex}`}
              className={TechStyles[`tabpanel`]}
            >
              {/* span */}
              <span className={TechStyles[`tabpanel-subheading`]}>
                THE TERMINOLOGY ...
              </span>
              {/* title */}
              <h2 className={TechStyles[`title`]}>{techStateData.techName}</h2>
              {/* description */}
              <p className={TechStyles[`description`]}>
                {techStateData.techDescription}
              </p>
            </div>
          </div>
        </section>
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

function techDataChange(event) {
  if (
    event.target.closest("BUTTON") &&
    event.target.closest("BUTTON").getAttribute("aria-selected") == "false"
  ) {
    // find button with aria-selected true
    // change value of aria-selected to false for currentSelectedCrewMember
    // change value of aria-selected of clicked button to true
    // get index
    // get img src
    // get data from json file
    //
  }
}

export default TechPage;
